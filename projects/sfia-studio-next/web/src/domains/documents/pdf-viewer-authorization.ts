/**
 * PDF viewer authorization — viewerToken is transport only, never authority.
 * Re-checks authenticated identity, lane, project habilitation, and cognitive-work
 * binding on every byte delivery.
 */

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { cognitiveWorks, projects } from "@/db/schema";
import type { WebPageSession } from "@/domains/conversation/public-web-page-session";
import type { StudioSession } from "@/domains/identity/session";

export type PdfViewerHabilitation = {
  projectId: string;
  cognitiveWorkId: string;
  workProjectId: string | null;
  workStatus: string;
};

export type PdfViewerAccessFailure = {
  ok: false;
  status: number;
  error: string;
  limits: string[];
};

export type PdfViewerAccessSuccess = {
  ok: true;
  limits: string[];
  contentFingerprint: string;
  sessionId: string;
};

export type PdfViewerAccessResult = PdfViewerAccessFailure | PdfViewerAccessSuccess;

const TOKEN_NOT_AUTH = "VIEWER_TOKEN_NOT_SUFFICIENT" as const;

function normalizeLane(lane: string | null | undefined): string {
  return (lane || "").trim().toUpperCase();
}

/**
 * Pure access assessment — inject `habilitation` from DB in production/tests.
 */
export function assessPdfViewerAccess(input: {
  session: Pick<StudioSession, "pilotId" | "sessionId">;
  page: WebPageSession;
  processLane?: string | null;
  habilitation?: PdfViewerHabilitation | null;
  now?: number;
}): PdfViewerAccessResult {
  const limits: string[] = [];
  const now = input.now ?? Date.now();

  if (Date.parse(input.page.expiresAt) <= now) {
    return {
      ok: false,
      status: 410,
      error: "VIEWER_SESSION_EXPIRED",
      limits: [TOKEN_NOT_AUTH],
    };
  }
  if (input.page.kind !== "pdf") {
    return {
      ok: false,
      status: 415,
      error: "VIEWER_NOT_PDF",
      limits: [],
    };
  }

  const owner = (input.page.scope.ownerPilotId || "").trim();
  if (!owner) {
    return {
      ok: false,
      status: 403,
      error: "VIEWER_OWNER_REQUIRED",
      limits: [TOKEN_NOT_AUTH, "OPPOSABLE_OWNER_REQUIRED"],
    };
  }
  if (owner !== input.session.pilotId) {
    return {
      ok: false,
      status: 403,
      error: "VIEWER_OWNER_MISMATCH",
      limits: [TOKEN_NOT_AUTH],
    };
  }

  const scopeLane = normalizeLane(input.page.scope.lane);
  const processLane = normalizeLane(input.processLane ?? process.env.STUDIO_LANE);
  if (!scopeLane || scopeLane === "UNKNOWN") {
    return {
      ok: false,
      status: 403,
      error: "VIEWER_LANE_UNKNOWN",
      limits: [TOKEN_NOT_AUTH, "SCOPE_LANE_REQUIRED"],
    };
  }
  if (!processLane || processLane === "UNKNOWN") {
    return {
      ok: false,
      status: 403,
      error: "PROCESS_LANE_UNKNOWN",
      limits: [TOKEN_NOT_AUTH, "STUDIO_LANE_REQUIRED"],
    };
  }
  if (scopeLane !== processLane) {
    return {
      ok: false,
      status: 403,
      error: "VIEWER_LANE_MISMATCH",
      limits: [TOKEN_NOT_AUTH],
    };
  }

  const projectId = (input.page.scope.projectId || "").trim();
  const cognitiveWorkId = (input.page.scope.cognitiveWorkId || "").trim();
  if (!projectId) {
    return {
      ok: false,
      status: 403,
      error: "VIEWER_PROJECT_REQUIRED",
      limits: [TOKEN_NOT_AUTH, "OPPOSABLE_PROJECT_REQUIRED"],
    };
  }
  if (!cognitiveWorkId) {
    return {
      ok: false,
      status: 403,
      error: "VIEWER_WORK_SCOPE_REQUIRED",
      limits: [TOKEN_NOT_AUTH, "COGNITIVE_WORK_SCOPE_REQUIRED"],
    };
  }

  const hab = input.habilitation;
  if (hab === undefined) {
    return {
      ok: false,
      status: 503,
      error: "VIEWER_HABILITATION_UNCHECKED",
      limits: ["HABILITATION_RESOLUTION_REQUIRED"],
    };
  }
  if (!hab) {
    return {
      ok: false,
      status: 403,
      error: "VIEWER_PROJECT_ACCESS_DENIED",
      limits: [TOKEN_NOT_AUTH, "PROJECT_HABILITATION_WITHDRAWN"],
    };
  }
  if (hab.projectId !== projectId) {
    return {
      ok: false,
      status: 403,
      error: "VIEWER_PROJECT_MISMATCH",
      limits: [TOKEN_NOT_AUTH],
    };
  }
  if (hab.cognitiveWorkId !== cognitiveWorkId) {
    return {
      ok: false,
      status: 403,
      error: "VIEWER_WORK_MISMATCH",
      limits: [TOKEN_NOT_AUTH],
    };
  }
  if (!hab.workProjectId) {
    return {
      ok: false,
      status: 403,
      error: "VIEWER_WORK_PROJECT_REQUIRED",
      limits: [TOKEN_NOT_AUTH, "WORK_PROJECT_BINDING"],
    };
  }
  if (hab.workProjectId !== projectId) {
    return {
      ok: false,
      status: 403,
      error: "VIEWER_WORK_PROJECT_MISMATCH",
      limits: [TOKEN_NOT_AUTH, "WORK_PROJECT_BINDING"],
    };
  }

  if (!(input.page.contentFingerprint || "").trim()) {
    return {
      ok: false,
      status: 403,
      error: "VIEWER_VERSION_UNKNOWN",
      limits: [TOKEN_NOT_AUTH, "CONTENT_FINGERPRINT_REQUIRED"],
    };
  }

  if (!input.page.pdfBytes || input.page.pdfBytes.byteLength < 5) {
    limits.push("VIEWER_BYTES_SERVER_ONLY_WHEN_PRESENT");
    return {
      ok: false,
      status: 404,
      error: "PDF_BYTES_UNAVAILABLE",
      limits,
    };
  }

  limits.push("PROJECT_HABILITATION_VERIFIED");
  limits.push(`CONTENT_FP_${input.page.contentFingerprint}`);
  return {
    ok: true,
    limits,
    contentFingerprint: input.page.contentFingerprint,
    sessionId: input.page.sessionId,
  };
}

export async function resolvePdfViewerHabilitation(input: {
  pilotId: string;
  projectId: string;
  cognitiveWorkId: string;
}): Promise<PdfViewerHabilitation | null> {
  const project = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(
        and(eq(projects.id, input.projectId), eq(projects.ownerPilotId, input.pilotId)),
      )
      .limit(1)
  )[0];
  if (!project) return null;

  const work = (
    await db
      .select({
        id: cognitiveWorks.id,
        projectId: cognitiveWorks.projectId,
        status: cognitiveWorks.status,
        ownerPilotId: cognitiveWorks.ownerPilotId,
      })
      .from(cognitiveWorks)
      .where(eq(cognitiveWorks.id, input.cognitiveWorkId))
      .limit(1)
  )[0];
  if (!work || work.ownerPilotId !== input.pilotId) return null;

  return {
    projectId: project.id,
    cognitiveWorkId: work.id,
    workProjectId: work.projectId ?? null,
    workStatus: work.status,
  };
}

export async function assertPdfViewerAccess(input: {
  session: StudioSession;
  page: WebPageSession;
  processLane?: string | null;
  now?: number;
  resolveHabilitation?: typeof resolvePdfViewerHabilitation;
}): Promise<PdfViewerAccessResult> {
  const resolve = input.resolveHabilitation ?? resolvePdfViewerHabilitation;
  const projectId = (input.page.scope.projectId || "").trim();
  const cognitiveWorkId = (input.page.scope.cognitiveWorkId || "").trim();
  let habilitation: PdfViewerHabilitation | null = null;
  if (projectId && cognitiveWorkId) {
    habilitation = await resolve({
      pilotId: input.session.pilotId,
      projectId,
      cognitiveWorkId,
    });
  }
  return assessPdfViewerAccess({
    session: input.session,
    page: input.page,
    processLane: input.processLane,
    habilitation,
    now: input.now,
  });
}