# SFIA Review Pack FULL — ML5 Cognitive Foundation Conformance

## Meta

| Field | Value |
|---|---|
| Date UTC | 2026-11-26T15:50:19Z |
| Cycle | 8 — Delivery / implémentation |
| Profile | CRITICAL |
| Macro-lot | ML5 livraison 1 — foundation conformance |
| Project branch | sfia/next-ml5-integrated-delivery-20261123 |
| HEAD initial | ee6c170e46b8b995e30c78c90231a0fa1e2110a0 |
| HEAD final | b69451e3f473fe4c742fe7375e5c250cb386a9e4 |
| Tree | 0cb9f3d014d248c05b317a3d3e8684d583fa656d |
| Web tree | 86f9f03fb801b64509c928b2300d2c9c8b38f2fa |
| Merge-base main | 997897fd7cf914771e7d08e8030dc7123fab7d25 |
| BUILD_ID | lWULvFGVIPoO-2VwA9M49 |
| BUILD_ID sha256 | ee6e1ea412bf451c16d4396340d6a3594b81db6fe0cc45d88bafa9d2655c4f08 |
| Class | NO RELEASE |
| ENV | DEV — RECETTE protected — STABLE N/A |
| WEB LIVE | OFF (SFIA_WEB_SEARCH_LIVE=0, SFIA_WEB_SEARCH_ENABLED=0) |
| G-WEB-MIXED | CLOSED |
| LIVE §12.1/12.2 | NOT CONSUMED |
| Review Pack | FULL |
| Review Handoff | REQUIRED / PUBLISH-IN-CYCLE |

## Git Truth

```
## sfia/next-ml5-integrated-delivery-20261123
 M .tmp-sfia-review/chatgpt-review.md
```

Staged: none at pack time (working tree only .tmp review).
No reset/stash/clean/rebase. Merge-base == main tip reported.

## Verdict candidate

**ML5 FOUNDATION QUALIFIED WITH EXPLICIT CAPABILITY RESERVES — MORRIS SCOPE DECISION REQUIRED.**

R5 IN PROGRESS · ML5 OPEN · R6 NOT STARTED · NO RELEASE · NOT ADOPTED · RECETTE protected · WEB OFF · livraison 2 non engagée.

## Sequence results

| Seq | Result |
|---|---|
| S1 Build | PASS — root cause NODE_ENV=development; lock production; BUILD_ID lWULvFGVIPoO-2VwA9M49 |
| S2 Provider frontier | PASS deterministic substituted fetch — HTTP≠SDK; N+1 refused; latch; wired Nora+WEB |
| S3 Allocation | PASS — suspend + Pilote message sans admin modèles |
| S4 FinOps | PASS — coverage/estimation partial without emission census |
| S5 WEB D6 | PASS — effectConditions + decisionId + egress proof |
| S6 PDF | PASS — habilitation DB + lane + work binding |
| S7 Qual | PASS unit ml5* 356; LIVE not re-run |
| S8 Integrate | PASS candidate committed + manifeste updated |

## Reserves A/B/C/D

| Id | Class | Note |
|---|---|---|
| R-BUILD-404 | A LEVÉE | NODE_ENV fix |
| R-GIT-PDF-TEXT | B | corpus missing |
| R-LIVE-HTTP-SDK | B | §12.1 not consumed — multi-Responses LIVE under campaign |
| R-WEB05 | C | intellectual confrontation |
| R-F2 | C | visual |
| R-EFFICIENCE-RB | C | RoomBooking efficiency |
| R-D6-WEB-KIND | D | optional dedicated kind |

## Fake/Real Qualification

- Deterministic HTTP frontier proven via substituted fetch oracle.
- Real product modules exercised (conductor, authority, PDF auth, FinOps projections).
- LIVE envelopes not consumed; G-WEB-MIXED closed.
- DETERMINISTIC PROVEN ≠ READY FOR REAL ≠ READY FOR RECETTE.

## Validations

```
npx vitest run tests/unit/ml5- → 59 files / 356 tests PASS
NODE_ENV=production next build → EXIT 0 BUILD_ID=lWULvFGVIPoO-2VwA9M49
```

## Files created (complete)

### `projects/sfia-studio-next/web/src/domains/documents/pdf-viewer-authorization.ts`

```
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
  if (hab.workProjectId && hab.workProjectId !== projectId) {
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
}```

### `projects/sfia-studio-next/web/tests/unit/ml5-pdf-viewer-authorization.test.ts`

```
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  __resetWebPageSessionsForTests,
  getWebPageSessionByViewerToken,
  putWebPageSession,
} from "@/domains/conversation/public-web-page-session";
import {
  assessPdfViewerAccess,
  assertPdfViewerAccess,
  type PdfViewerHabilitation,
} from "@/domains/documents/pdf-viewer-authorization";
const PDF_BYTES = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x34]);
const SCOPE = {
  lane: "DEV",
  projectId: "proj-auth-1",
  cognitiveWorkId: "cgw-auth-1",
  ownerPilotId: "pilot-owner",
};

const HAB: PdfViewerHabilitation = {
  projectId: SCOPE.projectId,
  cognitiveWorkId: SCOPE.cognitiveWorkId,
  workProjectId: SCOPE.projectId,
  workStatus: "RUNNING",
};

function seedPdfSession(fingerprint = "fp-v1") {
  return putWebPageSession({
    scope: SCOPE,
    url: "https://example.com/doc.pdf",
    kind: "pdf",
    text: "page1",
    pageCount: 1,
    contentFingerprint: fingerprint,
    pdfBytes: PDF_BYTES,
    limits: ["TEST"],
  });
}

vi.mock("@/domains/identity/session", () => ({
  requireStudioSession: vi.fn(),
}));

vi.mock("@/db/client", () => ({
  db: {
    select: vi.fn(),
  },
}));

import { requireStudioSession } from "@/domains/identity/session";
import { db } from "@/db/client";
import { GET } from "@/app/api/web/pdf-viewer/[viewerToken]/route";

function mockHabilitationDb(rows: Array<unknown[]>) {
  let n = 0;
  const chain = () => {
    const c = {
      from: () => c,
      where: () => c,
      limit: () => Promise.resolve(rows[n++] ?? []),
    };
    return c;
  };
  vi.mocked(db.select).mockImplementation(() => chain() as never);
}

describe("ML5 pdf-viewer authorization (assess)", () => {
  beforeEach(() => {
    __resetWebPageSessionsForTests();
    process.env.STUDIO_LANE = "DEV";
  });

  it("allows authorized owner with concordant lane and habilitation", () => {
    const page = seedPdfSession();
    const r = assessPdfViewerAccess({
      session: { pilotId: SCOPE.ownerPilotId, sessionId: "sess-1" },
      page,
      processLane: "DEV",
      habilitation: HAB,
    });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.limits).toContain("PROJECT_HABILITATION_VERIFIED");
      expect(r.contentFingerprint).toBe("fp-v1");
    }
  });

  it("refuses other pilot even with valid viewerToken lookup", () => {
    const page = seedPdfSession();
    const r = assessPdfViewerAccess({
      session: { pilotId: "pilot-other", sessionId: "sess-2" },
      page,
      processLane: "DEV",
      habilitation: HAB,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.error).toBe("VIEWER_OWNER_MISMATCH");
      expect(r.limits).toContain("VIEWER_TOKEN_NOT_SUFFICIENT");
    }
  });

  it("refuses other project habilitation (withdrawn after token creation)", () => {
    const page = seedPdfSession();
    const r = assessPdfViewerAccess({
      session: { pilotId: SCOPE.ownerPilotId, sessionId: "sess-1" },
      page,
      processLane: "DEV",
      habilitation: null,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.error).toBe("VIEWER_PROJECT_ACCESS_DENIED");
      expect(r.limits).toContain("PROJECT_HABILITATION_WITHDRAWN");
    }
  });

  it("refuses unknown or absent lane", () => {
    const page = seedPdfSession();
    const unknownScope = { ...page, scope: { ...SCOPE, lane: "UNKNOWN" } };
    const r1 = assessPdfViewerAccess({
      session: { pilotId: SCOPE.ownerPilotId, sessionId: "sess-1" },
      page: unknownScope,
      processLane: "DEV",
      habilitation: HAB,
    });
    expect(r1.ok).toBe(false);
    if (!r1.ok) expect(r1.error).toBe("VIEWER_LANE_UNKNOWN");

    const r2 = assessPdfViewerAccess({
      session: { pilotId: SCOPE.ownerPilotId, sessionId: "sess-1" },
      page,
      processLane: "UNKNOWN",
      habilitation: HAB,
    });
    expect(r2.ok).toBe(false);
    if (!r2.ok) expect(r2.error).toBe("PROCESS_LANE_UNKNOWN");

    const r3 = assessPdfViewerAccess({
      session: { pilotId: SCOPE.ownerPilotId, sessionId: "sess-1" },
      page,
      processLane: "RECETTE",
      habilitation: HAB,
    });
    expect(r3.ok).toBe(false);
    if (!r3.ok) expect(r3.error).toBe("VIEWER_LANE_MISMATCH");
  });

  it("refuses expired session and revoked token after fingerprint change", () => {
    const page = seedPdfSession("fp-old");
    const expired = { ...page, expiresAt: new Date(Date.now() - 60_000).toISOString() };
    const r = assessPdfViewerAccess({
      session: { pilotId: SCOPE.ownerPilotId, sessionId: "sess-1" },
      page: expired,
      processLane: "DEV",
      habilitation: HAB,
      now: Date.now(),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toBe("VIEWER_SESSION_EXPIRED");

    const rotated = putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/doc.pdf",
      kind: "pdf",
      text: "page1-rev",
      pageCount: 1,
      contentFingerprint: "fp-new",
      pdfBytes: new Uint8Array([...PDF_BYTES, 0x39]),
      limits: [],
    });
    expect(getWebPageSessionByViewerToken(page.viewerToken)).toBeNull();
    expect(rotated.viewerToken).not.toBe(page.viewerToken);
  });

  it("refuses work bound to a different project", () => {
    const page = seedPdfSession();
    const r = assessPdfViewerAccess({
      session: { pilotId: SCOPE.ownerPilotId, sessionId: "sess-1" },
      page,
      processLane: "DEV",
      habilitation: {
        ...HAB,
        workProjectId: "proj-other",
      },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toBe("VIEWER_WORK_PROJECT_MISMATCH");
  });

  it("refuses missing project scope (no opposable contract)", () => {
    const page = seedPdfSession();
    const noProject = { ...page, scope: { ...SCOPE, projectId: "" } };
    const r = assessPdfViewerAccess({
      session: { pilotId: SCOPE.ownerPilotId, sessionId: "sess-1" },
      page: noProject,
      processLane: "DEV",
      habilitation: HAB,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.error).toBe("VIEWER_PROJECT_REQUIRED");
      expect(r.limits).toContain("OPPOSABLE_PROJECT_REQUIRED");
    }
  });
});

describe("ML5 pdf-viewer API route", () => {
  beforeEach(() => {
    __resetWebPageSessionsForTests();
    process.env.STUDIO_LANE = "DEV";
    vi.mocked(requireStudioSession).mockReset();
    vi.mocked(db.select).mockReset();
    mockHabilitationDb([]);
  });

  it("GET 200 with bytes when habilitation resolves", async () => {
    const page = seedPdfSession();
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: SCOPE.ownerPilotId,
      displayName: "Owner",
      sessionId: "studio-sess",
      authMode: "dev-test-login",
    });
    mockHabilitationDb([
      [{ id: SCOPE.projectId }],
      [
        {
          id: SCOPE.cognitiveWorkId,
          projectId: SCOPE.projectId,
          status: "RUNNING",
          ownerPilotId: SCOPE.ownerPilotId,
        },
      ],
    ]);
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    expect(res.status).toBe(200);
    expect(res.headers.get("X-Content-Fingerprint")).toBe("fp-v1");
    const buf = new Uint8Array(await res.arrayBuffer());
    expect(buf.byteLength).toBe(PDF_BYTES.byteLength);
  });

  it("GET 403 when project habilitation withdrawn after token issuance", async () => {
    const page = seedPdfSession();
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: SCOPE.ownerPilotId,
      displayName: "Owner",
      sessionId: "studio-sess",
      authMode: "dev-test-login",
    });
    mockHabilitationDb([[]]);
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    expect(res.status).toBe(403);
    const denied = await res.json();
    expect(denied.error).toBe("VIEWER_PROJECT_ACCESS_DENIED");
  });

  it("GET 403 owner mismatch via injected habilitation in assertPdfViewerAccess", async () => {
    const page = seedPdfSession();
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: "pilot-intruder",
      displayName: "Other",
      sessionId: "studio-sess-2",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    const body = await res.json();
    expect(res.status).toBe(403);
    expect(body.error).toBe("VIEWER_OWNER_MISMATCH");
  });

  it("assertPdfViewerAccess honors injectable habilitation resolver", async () => {
    const page = seedPdfSession();
    const ok = await assertPdfViewerAccess({
      session: {
        pilotId: SCOPE.ownerPilotId,
        displayName: "Owner",
        sessionId: "s",
        authMode: "dev-test-login",
      },
      processLane: "DEV",
      page,
      resolveHabilitation: async () => HAB,
    });
    expect(ok.ok).toBe(true);

    const withdrawn = await assertPdfViewerAccess({
      session: {
        pilotId: SCOPE.ownerPilotId,
        displayName: "Owner",
        sessionId: "s",
        authMode: "dev-test-login",
      },
      processLane: "DEV",
      page,
      resolveHabilitation: async () => null,
    });
    expect(withdrawn.ok).toBe(false);
    if (!withdrawn.ok) expect(withdrawn.error).toBe("VIEWER_PROJECT_ACCESS_DENIED");
  });
});```

### `projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resource-suspend-turn.test.ts`

```
/**
 * S2 — refused allocation without hold: Pilote sees explicit suspend copy from runNoraCognitiveTurn.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createEmptyInvestigation } from "@/domains/conversation/investigation-state";

const openOrResumeCognitiveWork = vi.fn();
const heartbeatCognitiveWork = vi.fn();
const checkpointCognitiveWork = vi.fn();
const releaseCognitiveWorkLease = vi.fn();
const listCognitiveWorksForPreparation = vi.fn();
const generateNoraReply = vi.fn();

vi.mock("@/domains/conversation/cognitive-work", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/domains/conversation/cognitive-work")>();
  return {
    ...actual,
    openOrResumeCognitiveWork: (...args: unknown[]) =>
      openOrResumeCognitiveWork(...args),
    heartbeatCognitiveWork: (...args: unknown[]) => heartbeatCognitiveWork(...args),
    checkpointCognitiveWork: (...args: unknown[]) => checkpointCognitiveWork(...args),
    releaseCognitiveWorkLease: (...args: unknown[]) =>
      releaseCognitiveWorkLease(...args),
    listCognitiveWorksForPreparation: (...args: unknown[]) =>
      listCognitiveWorksForPreparation(...args),
  };
});

vi.mock("@/domains/conversation/nora-adapter", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/domains/conversation/nora-adapter")>();
  return {
    ...actual,
    generateNoraReply: (...args: unknown[]) => generateNoraReply(...args),
  };
});

describe("runNoraCognitiveTurn — RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION", () => {
  const prevMode = process.env.SFIA_COGNITIVE_ADMISSION_MODE;
  const prevProv = process.env.SFIA_COG_PROVISIONAL_POLICY;
  const prevLane = process.env.STUDIO_LANE;
  const prevCog = process.env.SFIA_COG_PROFILE_TYPE;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "operational";
    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";

    listCognitiveWorksForPreparation.mockResolvedValue([]);
    heartbeatCognitiveWork.mockResolvedValue(true);
    releaseCognitiveWorkLease.mockResolvedValue(undefined);
    generateNoraReply.mockRejectedValue(
      new Error("generateNoraReply must not run on resource suspend"),
    );

    let revision = 2;
    const investigation = createEmptyInvestigation("allocation suspend");
    investigation.proposedCognitiveModel = "gpt-6-luna";
    investigation.proposedCognitiveEffort = "high";

    const baseWork = {
      id: "cgw_suspend",
      ownerPilotId: "pilot",
      preparationId: "prep",
      projectId: null as string | null,
      conversationId: null as string | null,
      status: "RUNNING" as const,
      revision,
      ownerToken: "tok",
      leaseUntil: new Date(Date.now() + 60_000),
      objective: "allocation suspend",
      expectedOutcome: "result",
      state: investigation,
      resources: { segmentCalls: 0 },
      production: { kind: "NONE" as const, status: "IDLE" as const, parts: [] },
      interruptCause: null as string | null,
    };

    openOrResumeCognitiveWork.mockImplementation(async () => ({
      work: { ...baseWork, revision },
      resumed: true,
      ownerToken: "tok",
    }));

    checkpointCognitiveWork.mockImplementation(
      async (input: { expectedRevision: number; state: unknown; resources: unknown }) => {
        revision = input.expectedRevision + 1;
        return {
          ...baseWork,
          revision,
          status: "SUSPENDED" as const,
          state: input.state,
          resources: input.resources,
        };
      },
    );
  });

  afterEach(() => {
    if (prevMode === undefined) delete process.env.SFIA_COGNITIVE_ADMISSION_MODE;
    else process.env.SFIA_COGNITIVE_ADMISSION_MODE = prevMode;
    if (prevProv === undefined) delete process.env.SFIA_COG_PROVISIONAL_POLICY;
    else process.env.SFIA_COG_PROVISIONAL_POLICY = prevProv;
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    if (prevCog === undefined) delete process.env.SFIA_COG_PROFILE_TYPE;
    else process.env.SFIA_COG_PROFILE_TYPE = prevCog;
  });

  it("returns suspend copy without asking the Pilote to pick model/effort", async () => {
    const { runNoraCognitiveTurn } = await import(
      "@/domains/conversation/run-nora-cognitive-turn"
    );

    const result = await runNoraCognitiveTurn({
      pilotId: "pilot",
      preparationId: "prep",
      workId: "cgw_suspend",
      userText: "Poursuis le travail avec la ressource proposée.",
      contextSnippets: [],
      knowledgeSnippets: [],
      pilotageSnippets: [],
      maxSegmentsThisInvocation: 1,
    });

    expect(generateNoraReply).not.toHaveBeenCalled();
    expect(result.conductor?.suspended).toBe(true);
    expect(result.conductor?.suspendReason).toBe(
      "RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION",
    );
    expect(result.content).toContain("sans obligation d'administrer les modèles");
    expect(result.content).toContain("Besoin restant");
    expect(result.content).toContain("substitution silencieuse");
    expect(result.content).not.toContain("Indique une autre allocation");
    expect(result.content).not.toMatch(/Indique.*(modèle|allocation)/i);
  });
});```

### `projects/sfia-studio-next/construction/as-built-ml5-cognitive-foundation-conformance-20261126.md`

```
# As-built — ML5 cognitive foundation conformance (2026-11-26)

Classe : **NO RELEASE** · Lane : **DEV** · Cutover RECETTE : **NON APPLIQUÉ** · Livraison 2 : **NON ENGAGÉE**

## S1 — Build `/404`

- **Cause racine** : `NODE_ENV=development` dans le shell cassait le prerender Next (`Html should not be imported outside of pages/_document`). Les pages `not-found`/`global-error` n'étaient pas la cause.
- **Correction** : `package.json` `"build": "NODE_ENV=production next build"`.
- **Artefact** : BUILD_ID `X94NdR5lxD655tzAciId3` — EXIT 0.

## S2 — Frontière fournisseur HTTP

- `provider-emission-frontier.ts` distingue **SDK invocation** (`assertSdkInvocationAdmission`) et **tentative HTTP** (`createFrontierAwareFetch` / `reserveHttpEmission`).
- Client OpenAI process-wide via `ensureFrontierOpenAIClientInstalled` + `setDefaultOpenAIClient` (fetch frontier-aware ; retries = tentatives distinctes).
- Enveloppe campagne ALS + latch process si campagne `required` (perte ALS ≠ illimité).
- Pas de défaut silencieux Terra/medium : effort requis (payload, hint SDK, ou refuse).
- Oracle indépendant : corps/URLs reçus par fetch substitué (N vs N+1).
- Nora + worker WEB : admission SDK puis HTTP au fetch — plus de comptage `run()` comme HTTP.

## S3 — Allocation / budgets

- Suspend sans substitution silencieuse conservé.
- Message Pilote : besoin / contrainte / conséquence — **sans obligation d'administrer les modèles** (`buildResourceContinuitySuspendMessage`).
- Budgets 2M / 1M / 120 segments inchangés.
- Conducteur D3 unique conservé.

## S4 — FinOps

- Couverture / complétude restent relatives à l'ensemble d'**observations recensées**.
- Sans recensement d'émissions HTTP indépendant → `kind: "partial"` (pas de 100 % « known » trompeur).
- Source unique : `provider_usage_observations`.

## S5 — Autorité WEB D6

- `effectConditions` obligatoires et parsées fail-closed.
- Contrôle kind=`RECORD_DECISION`, state=`APPLICABLE`, query/destination/purpose/policyVersion/pilot/project.
- `authorizedExactWebQueryBindings` + `reverifyWebPublicQueryAuthorityAtEgress` (decisionId requis).
- `priorExactQueries` seules n'admettent plus l'egress exceptionnel.
- Preuve de révocation au dernier mile.

## S6 — PDF

- `pdf-viewer-authorization.ts` : session, owner, lane connue+concordante, habilitation projet DB, binding cognitive work, expiry, fingerprint.
- `viewerToken` ≠ autorité.
- Lane absente/inconnue refusée.

## WEB LIVE

`SFIA_WEB_SEARCH_LIVE=0` · `SFIA_WEB_SEARCH_ENABLED=0` · G-WEB-MIXED fermé · enveloppes §12.1/12.2 **non consommées** (S2 déterministe satisfait ; LIVE discriminant optionnel en réserve B).
```

## Diffs modified (complete vs ee6c170e parent of conformance commit)

```diff
 ...l5-cognitive-foundation-conformance-20261126.md |  49 ++
 .../construction/delivery-history.md               |  21 +
 .../ml5-recette-manifest-candidate-20261126.md     |  40 +-
 projects/sfia-studio-next/web/package.json         |   2 +-
 .../app/api/web/pdf-viewer/[viewerToken]/route.ts  |  75 +-
 .../web/src/components/documents/PdfViewer.tsx     |   7 +-
 .../src/domains/conversation/cognitive-policy.ts   |  15 +
 .../domains/conversation/investigation-state.ts    |   5 +
 .../web/src/domains/conversation/nora-adapter.ts   |  31 +-
 .../conversation/provider-emission-frontier.ts     | 813 +++++++++++++++++++--
 .../domains/conversation/public-web-registry.ts    |   7 +-
 .../conversation/public-web-search-frontier.ts     |  86 ++-
 .../conversation/run-nora-cognitive-turn.ts        | 107 ++-
 .../conversation/web-public-query-authority.ts     | 498 ++++++++++---
 .../src/domains/documents/pdf-extract-server.ts    |   1 +
 .../web/src/domains/documents/pdf-read-contract.ts |   5 +
 .../domains/documents/pdf-viewer-authorization.ts  | 270 +++++++
 .../web/src/domains/finops/usage-projection.ts     |  27 +-
 .../ml5-cognitive-resource-suspend-turn.test.ts    | 138 ++++
 .../web/tests/unit/ml5-cognitive-resources.test.ts |   9 +
 .../tests/unit/ml5-finops-usage-projection.test.ts |  15 +-
 .../unit/ml5-pdf-viewer-authorization.test.ts      | 307 ++++++++
 .../unit/ml5-provider-emission-frontier.test.ts    | 255 +++++--
 .../web/tests/unit/ml5-web-page-session.test.ts    |  39 +
 .../web/tests/unit/ml5-web-query-authority.test.ts | 103 ++-
 .../web/tests/unit/nora-adapter-corrective.test.ts |   6 +
 26 files changed, 2567 insertions(+), 364 deletions(-)
```

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 13d5f716..edabd7ee 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -5058,3 +5058,24 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
 | Contrôles | Vitest unit ml5* 337 PASS (dont frontier, authority, FinOps, sessions) |
 | Réserves | Git PDF text B ; WEB-05 C ; F2 C ; kind D6 dédié D |
 | Statut | DEV CANDIDATE — COGNITIVE CONSOLIDATION — RECETTE SCOPE DECISION REQUIRED |
+
+
+## 2026-11-26 — ML5 cognitive foundation conformance + integrated qualification (Cycle 8 Delivery / DEV)
+
+| Champ | Valeur |
+|---|---|
+| Delivery ID | `next-ml5-cognitive-foundation-conformance-20261126` |
+| Date | 2026-11-26 |
+| Macro-lot | ML5 livraison 1 — mise en conformité transverse du socle cognitif (pas livraison 2) |
+| Type | EVOL · Critical · Cycle 8 Delivery |
+| GO Morris | 26/11 — qualité du socle > rapidité RECETTE ; traiter causes racines ; pas de faux READY FOR RECETTE |
+| Base tip | `ee6c170e46b8b995e30c78c90231a0fa1e2110a0` |
+| Contenu | Build NODE_ENV=production ; frontière HTTP réelle (fetch) vs SDK invocation ; latch campagne ; allocation message Pilote ; FinOps couverture honnête ; D6 WEB effectConditions+decisionId+egress ; PDF habilitation DB |
+| BUILD_ID | `X94NdR5lxD655tzAciId3` |
+| Migration | NONE |
+| LIVE §12.1/12.2 | **NON CONSOMMÉES** (S2 déterministe transport substitué satisfait) |
+| WEB | OFF · G-WEB-MIXED fermé |
+| Compatibilité | NO RELEASE · STABLE NOT AVAILABLE · ML5 OPEN · R5 IN PROGRESS · R6 NOT STARTED · NOT ADOPTED · G-RECETTE non consommé |
+| Contrôles | Vitest unit ml5* 356 PASS · next build EXIT 0 |
+| Réserves | B: GIT PDF text corpus · LIVE SDK multi-req ; C: WEB-05 · F2 · efficience RB ; D: kind WEB optionnel ; A build LEVÉE |
+| Statut | DEV CANDIDATE — FOUNDATION CONFORMANCE — MORRIS REVIEW REQUIRED — NOT ADOPTED |
diff --git a/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md b/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md
index 941e16bc..8d74d2dc 100644
--- a/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md
+++ b/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md
@@ -4,29 +4,34 @@
 |---|---|
 | Date | 2026-11-26 |
 | Branche produit | `sfia/next-ml5-integrated-delivery-20261123` |
-| HEAD | `c46a8a9ab8b7ea90e423a2e8f237d580ce82908f` |
+| HEAD (pré-commit tip de travail) | voir commit local de conformité fondation |
+| BUILD_ID | `X94NdR5lxD655tzAciId3` |
 | Classe | **NO RELEASE** |
 | STABLE | NOT AVAILABLE |
 | Cutover | **NON APPLIQUÉ** |
 | G-RECETTE | **NON CONSOMMÉ** |
 | G-WEB-MIXED | **FERMÉ** |
 | WEB LIVE défaut | **OFF** |
+| Politique cognitive DEV | v0.2 provisoire (Terra Medium ; Luna L/M expérimental ; Sol historique ; rollback `legacy_sol`) |
+| Extension v0.2 → RECETTE | **Décision Morris distincte — non activée** |

 ## Capacités qualifiées

 | Capacité | État | Preuve |
 |---|---|---|
-| Frontière fournisseur commune + enveloppe campagne | DETERMINISTIC PROVEN | `ml5-provider-emission-frontier` · wired Nora + WEB worker |
-| Allocation sans substitution silencieuse | DETERMINISTIC PROVEN | `RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION` |
-| FinOps observation vs estimation | DETERMINISTIC PROVEN | `computeMeasureCoveragePercent` + `computeEstimationCompletenessPercent` |
-| Autorité WEB D6 (parse ≠ authority) | DETERMINISTIC PROVEN | `web-public-query-authority` · registry no auto-promote |
-| PDF viewerToken rotation + auth owner/lane/project | DETERMINISTIC PROVEN | session + route tests |
-| Politique cognitive v0.2 DEV | PRÉSERVÉE | Terra Medium ; Luna L/M expérimental ; rollback `legacy_sol` |
-| StockTrack IT-06 V2 conserve | REUSED (prior LIVE) | tip antérieur `8c82b6c1` — retest déterministe préféré |
-| RoomBooking investigation longue | REUSED | pas de replay 71 req ; corrections via unit/intégration |
+| Build production Next | DETERMINISTIC PROVEN | `NODE_ENV=production` lock · BUILD_ID `X94NdR5lxD655tzAciId3` |
+| Frontière HTTP fournisseur + enveloppe | DETERMINISTIC PROVEN (transport substitué) | `createFrontierAwareFetch` · N+1 refuse · latch ALS · wired Nora + WEB |
+| Allocation sans substitution + message Pilote | DETERMINISTIC PROVEN | `RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION` · `buildResourceContinuitySuspendMessage` |
+| FinOps couverture honnête | DETERMINISTIC PROVEN | observation vs estimation · partial sans census émissions |
+| Autorité WEB D6 (parse ≠ authority) | DETERMINISTIC PROVEN | effectConditions fail-closed · decisionId · egress re-proof |
+| PDF viewer auth réelle | DETERMINISTIC PROVEN | `assertPdfViewerAccess` · habilitation DB · lane |
+| Politique cognitive v0.2 DEV | PRÉSERVÉE | non étendue à RECETTE |
+| StockTrack IT-06 V2 conserve | REUSED (prior LIVE) | retest déterministe préféré ; frontière HTTP modifiée ⇒ LIVE optionnel |
+| RoomBooking investigation longue | REUSED | pas de replay 71 req |
 | PDF Git REAL textuel | **BLOCKED CORPUS MISSING** | BPMN scanné SCANNED_NO_TEXT |
-| WEB LIVE public | PRIOR LIVE OBSERVED puis **OFF** | retest autorité D6 LIVE conditionnel §12.2 |
-| WEB-05 confrontation | PARTIAL | classe C — vérifiable en recette / retest ciblé |
+| Passage LIVE SDK multi-requête sous campagne | B — non consommé §12.1 | préconditions S2 déterministes OK |
+| WEB LIVE public / WEB-05 | B/C | OFF ; confrontation intellectuelle en recette |
+| F2 visuelle | C | décision Morris |

 ## Configuration proposée RECETTE (décision Morris distincte)

@@ -42,28 +47,27 @@

 | Id | Classe | Justification |
 |---|---|---|
-| R-BUILD-404 | A | `next build` échoue prerender /404 Html (Next 15.5.29) — artefact RECETTE non reproductible |
 | R-GIT-PDF-TEXT | B | Capacité Git PDF text isolable ; scanné déjà prouvé comme limite |
+| R-LIVE-HTTP-SDK | B | Retest LIVE discriminant multi-Responses sous campagne (§12.1) non consommé — frontier déterministe OK |
 | R-WEB05 | C | Confrontation sources — socle sûr ; qualité intellectuelle en recette |
 | R-D6-WEB-KIND | D | Kind dédié optionnel ; RECORD_DECISION lie déjà le payload |
 | R-F2 | C | Recette visuelle Morris |
 | R-EFFICIENCE-RB | C | Dette efficience RoomBooking — non critique sécurité |
-| R-LIVE-REENVELOPPE | B | Tout retest LIVE doit réutiliser frontière S1 |

-**Réserve A** : build production Next `/404` — bloque cutover jusqu'à correction. Socle S1–S5 déterministe OK. Revue ChatGPT + GO Morris cutover requis.
+**Réserve A build `/404` : LEVÉE** (cause `NODE_ENV` ; BUILD_ID valide).

 ## Smoke tests cutover (non exécutés)

 1. Health DEV/RECETTE isolation ports 3100/3200/5433
-2. Session Pilote + FinOps summary KPI
+2. Session Pilote + FinOps summary KPI (couverture PARTIAL attendue sans census)
 3. Tour Nora simple Terra medium (WEB OFF)
-4. Viewer PDF fixture owner match / cross-owner 403
+4. Viewer PDF fixture owner match / cross-owner 403 / habilitation withdrawn
 5. Flags WEB = 0 sur processus actif

 ## Rollback

-Revert tip consolidation ; WEB OFF ; politique `legacy_sol` si besoin ; aucune migration à annuler.
+Revert tip conformité fondation ; WEB OFF ; politique `legacy_sol` si besoin ; aucune migration à annuler.

 ## Verdict manifeste

-**CANDIDATE INSTRUCTED FOR G-RECETTE — CUTOVER NOT APPLIED — MORRIS GO REQUIRED.**
+**CANDIDATE PREPARED FOR MORRIS REVIEW — CUTOVER NOT APPLIED — G-RECETTE NOT CONSUMED — FOUNDATION QUALIFIED WITH EXPLICIT CAPABILITY RESERVES.**
diff --git a/projects/sfia-studio-next/web/package.json b/projects/sfia-studio-next/web/package.json
index 8427cfdc..2a146741 100644
--- a/projects/sfia-studio-next/web/package.json
+++ b/projects/sfia-studio-next/web/package.json
@@ -4,7 +4,7 @@
   "private": true,
   "scripts": {
     "dev": "next dev --turbopack -p 3100 -H 127.0.0.1",
-    "build": "next build",
+    "build": "NODE_ENV=production next build",
     "start": "next start -p 3100 -H 127.0.0.1",
     "lint": "next lint",
     "db:migrate": "bash scripts/db-migrate.sh",
diff --git a/projects/sfia-studio-next/web/src/app/api/web/pdf-viewer/[viewerToken]/route.ts b/projects/sfia-studio-next/web/src/app/api/web/pdf-viewer/[viewerToken]/route.ts
index 95a2e1ef..4a58568d 100644
--- a/projects/sfia-studio-next/web/src/app/api/web/pdf-viewer/[viewerToken]/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/web/pdf-viewer/[viewerToken]/route.ts
@@ -1,12 +1,13 @@
 import { NextResponse } from "next/server";
+import { getWebPageSessionByViewerToken } from "@/domains/conversation/public-web-page-session";
+import { assertPdfViewerAccess } from "@/domains/documents/pdf-viewer-authorization";
 import { requireStudioSession } from "@/domains/identity/session";
 import { studioErrorResponse } from "@/lib/http-errors";
-import { getWebPageSessionByViewerToken } from "@/domains/conversation/public-web-page-session";

 /**
  * Authorized PDF bytes for the in-app viewer — distinct from Nora cognitive payloads.
- * Re-checks session expiry, fingerprint, and PDF kind on every consultation.
- * Never returns content into LLM prompts/checkpoints.
+ * Re-checks project habilitation, identity, lane, work scope, expiry, and version on every GET.
+ * viewerToken alone is never sufficient authority.
  */
 export async function GET(
   _req: Request,
@@ -24,62 +25,38 @@ export async function GET(
     if (!page) {
       return NextResponse.json({ error: "VIEWER_SESSION_NOT_FOUND" }, { status: 404 });
     }
-    if (Date.parse(page.expiresAt) <= Date.now()) {
-      return NextResponse.json({ error: "VIEWER_SESSION_EXPIRED" }, { status: 410 });
-    }
-    if (page.kind !== "pdf") {
-      return NextResponse.json({ error: "VIEWER_NOT_PDF" }, { status: 415 });
-    }
-    // ViewerToken alone is not authority — owner + lane + project must be opposable.
-    const owner = (page.scope.ownerPilotId || "").trim();
-    if (!owner) {
-      return NextResponse.json(
-        { error: "VIEWER_OWNER_REQUIRED", limits: ["VIEWER_TOKEN_NOT_SUFFICIENT"] },
-        { status: 403 },
-      );
-    }
-    if (owner !== session.pilotId) {
-      return NextResponse.json({ error: "VIEWER_OWNER_MISMATCH" }, { status: 403 });
-    }
-    const lane = (page.scope.lane || "").trim();
-    const processLane = (process.env.STUDIO_LANE || "").trim();
-    if (!lane || lane === "UNKNOWN" || (processLane && lane !== processLane)) {
-      return NextResponse.json(
-        { error: "VIEWER_LANE_MISMATCH", limits: ["VIEWER_TOKEN_NOT_SUFFICIENT"] },
-        { status: 403 },
-      );
-    }
-    if (!(page.scope.projectId || "").trim()) {
-      return NextResponse.json(
-        { error: "VIEWER_PROJECT_REQUIRED", limits: ["VIEWER_TOKEN_NOT_SUFFICIENT"] },
-        { status: 403 },
-      );
-    }
-    if (!page.pdfBytes || page.pdfBytes.byteLength < 5) {
-      return NextResponse.json(
-        {
-          error: "PDF_BYTES_UNAVAILABLE",
-          contentFingerprint: page.contentFingerprint,
-          pageCount: page.pageCount ?? null,
-          limits: [...page.limits, "VIEWER_BYTES_SERVER_ONLY_WHEN_PRESENT"],
-        },
-        { status: 404 },
-      );
+
+    const access = await assertPdfViewerAccess({
+      session,
+      page,
+      processLane: process.env.STUDIO_LANE,
+    });
+    if (!access.ok) {
+      const body: Record<string, unknown> = {
+        error: access.error,
+        limits: access.limits,
+      };
+      if (access.error === "PDF_BYTES_UNAVAILABLE") {
+        body.contentFingerprint = page.contentFingerprint;
+        body.pageCount = page.pageCount ?? null;
+      }
+      return NextResponse.json(body, { status: access.status });
     }

-    return new NextResponse(Buffer.from(page.pdfBytes), {
+    const pdfBytes = page.pdfBytes!;
+    return new NextResponse(Buffer.from(pdfBytes), {
       status: 200,
       headers: {
         "Content-Type": "application/pdf",
-        "Content-Length": String(page.pdfBytes.byteLength),
+        "Content-Length": String(pdfBytes.byteLength),
         "Cache-Control": "no-store",
-        "X-Content-Fingerprint": page.contentFingerprint,
+        "X-Content-Fingerprint": access.contentFingerprint,
         "X-Pdf-Page-Count": String(page.pageCount ?? ""),
-        "X-Viewer-Session-Id": page.sessionId,
+        "X-Viewer-Session-Id": access.sessionId,
       },
     });
   } catch (e) {
     const mapped = studioErrorResponse(e);
     return NextResponse.json(mapped.body, { status: mapped.status });
   }
-}
+}
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/src/components/documents/PdfViewer.tsx b/projects/sfia-studio-next/web/src/components/documents/PdfViewer.tsx
index bb3f0514..29ddeb6f 100644
--- a/projects/sfia-studio-next/web/src/components/documents/PdfViewer.tsx
+++ b/projects/sfia-studio-next/web/src/components/documents/PdfViewer.tsx
@@ -10,10 +10,13 @@ import { useEffect, useRef, useState } from "react";
 export type PdfViewerProps = {
   /**
    * Base64-encoded PDF bytes from an already-authorized Studio path (Git/D4).
-   * Prefer `viewerToken` for WEB sessions so cognitive payloads never carry bytes.
+   * Requires an opposable server contract — never use for ad-hoc URLs.
    */
   base64?: string;
-  /** Opaque token from public WEB open — fetches bytes via authorized viewer API. */
+  /**
+   * Opaque WEB session handle — not authorization.
+   * `/api/web/pdf-viewer/*` re-checks session, project habilitation, lane, and work scope.
+   */
   viewerToken?: string;
   title?: string;
   /** 1-based initial page when citing. */
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index d71ca781..728f7bdd 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -533,6 +533,21 @@ export type ContinuityResourceProposal = {
   effort?: string | null;
 };

+/** Pilote-facing suspend copy — need/constraint/consequence; no model admin duty. */
+export function buildResourceContinuitySuspendMessage(
+  refusedModel: string,
+  refusedEffort: string,
+): string {
+  return (
+    `Je ne peux pas poursuivre avec la ressource proposée (${refusedModel}@${refusedEffort}) : ` +
+    `elle n'est pas admise dans la politique active, et aucune ressource déjà admise n'est disponible ` +
+    `pour maintenir le travail sans substitution silencieuse. ` +
+    `Besoin restant : poursuivre avec une capacité compatible avec la politique en vigueur. ` +
+    `Conséquence : le travail est suspendu jusqu'à réévaluation de la stratégie ou arbitrage ` +
+    `métier/politique si une exception est nécessaire — sans obligation d'administrer les modèles.`
+  );
+}
+
 /**
  * S3 — resolve next-segment policy from structured proposal + held couple.
  * - Explicit proposal → admit; on refusal prefer holding the current couple
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts b/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
index 00f5a786..6103bc0c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
@@ -133,6 +133,11 @@ export type InvestigationState = {
   registeredPublicTopics?: Record<string, string>;
   /** Exact public queries explicitly authorized for this turn. */
   authorizedExactWebQueries?: string[];
+  /**
+   * S5 — exceptional exact queries bound to durable HumanDecision ids.
+   * Re-verified each turn; plain `authorizedExactWebQueries` alone does not re-admit.
+   */
+  authorizedExactWebQueryBindings?: Array<{ query: string; decisionId: string }>;
   /**
    * Nora-proposed public queries awaiting explicit Pilote authorization (Option B).
    * Never grants egress alone — must match AUTHORIZE_PUBLIC_QUERY / exact marker.
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 147c2eb8..5f12ecf4 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -27,8 +27,8 @@ import { fixtureSemanticQualify } from "./fixture-semantic-qualify";
 import { resolveProviderSimulatedQualification } from "./provider-simulated-qualification";
 import { extractProviderUsageFromRunResult } from "./provider-usage";
 import {
-  commitProviderEmission,
-  reserveProviderEmission,
+  assertSdkInvocationAdmission,
+  ensureFrontierOpenAIClientInstalled,
 } from "./provider-emission-frontier";
 import { recordNoraProviderUsageFromRunResult } from "./usage-accounting";
 import {
@@ -82,6 +82,8 @@ export type NoraGenerateInput = {
     pilotProvidedUrls?: string[];
     /** Mutable — Nora-staged proposals awaiting Pilote exact auth. */
     pendingProposals?: string[];
+    /** S5 — normalized exact query → durable HumanDecision id (egress proof). */
+    exactQueryDecisionIds?: Record<string, string>;
   };
   /** E03/E04 FinOps attribution when running inside a cognitive work segment. */
   cognitiveWorkId?: string | null;
@@ -988,6 +990,8 @@ async function runLiveWithTools(
         turnPublicTopics: input.publicWebRegistry?.topics,
         turnPublicFacts: input.publicWebRegistry?.facts,
         turnAuthorizedExactQueries: input.publicWebRegistry?.exactQueries,
+        turnExactQueryDecisionIds: input.publicWebRegistry?.exactQueryDecisionIds,
+        policyVersion: policy.policyVersion,
         pilotProvidedUrls: input.publicWebRegistry?.pilotProvidedUrls,
         pendingPublicWebProposals,
         // T1.2 — explicit this-turn Pilote text only (never haystack/objective).
@@ -1192,13 +1196,15 @@ async function runLiveWithTools(
   let providerUsage = extractProviderUsageFromRunResult(null);

   try {
-    // S1 — reserve at the common emission frontier before any provider contact.
-    const reservation = reserveProviderEmission({
+    // HTTP attempts are gated by the frontier-aware OpenAI client fetch.
+    // This precheck only admits the SDK invocation (lane + model/effort) — not an HTTP slot.
+    await ensureFrontierOpenAIClientInstalled();
+    const admission = assertSdkInvocationAdmission({
       kind: "nora.generate_reply",
       modelId: policy.modelRequested,
       effort: policy.effortRequested,
     });
-    if (!reservation.ok) {
+    if (!admission.ok) {
       clearTimeout(wallTimer);
       return {
         generationId,
@@ -1207,8 +1213,8 @@ async function runLiveWithTools(
         streamingProvisional: false,
         streamingAttempted: false,
         streamingDelivered: false,
-        streamingNotes: `PROVIDER_EMISSION_REFUSED:${reservation.reasonCode}`,
-        content: `Nora LIVE refusée avant émission fournisseur (${reservation.reasonCode}). Aucun contact réseau tenté.`,
+        streamingNotes: `PROVIDER_EMISSION_REFUSED:${admission.reasonCode}`,
+        content: `Nora LIVE refusée avant émission fournisseur (${admission.reasonCode}). Aucun contact réseau tenté.`,
         policy,
         modelRequested: policy.modelRequested,
         modelApplied: null,
@@ -1219,18 +1225,18 @@ async function runLiveWithTools(
             attemptId: newAttemptId(),
             kind: "non_stream",
             outcome: "FAILED",
-            notes: `PROVIDER_EMISSION_REFUSED:${reservation.reasonCode}:${reservation.reason}`,
+            notes: `PROVIDER_EMISSION_REFUSED:${admission.reasonCode}:${admission.reason}`,
             providerContacted: "NO",
           },
         ],
         toolCallsObserved: 0,
         d4CharsReturned: 0,
         qualification: unavailableQualification(
-          `PROVIDER_EMISSION_REFUSED_${reservation.reasonCode}`,
+          `PROVIDER_EMISSION_REFUSED_${admission.reasonCode}`,
         ),
       };
     }
-    const attemptId = reservation.attemptId;
+    const attemptId = admission.attemptId;
     // Structured qualification never surfaces provisional JSON to the Pilote (A3).
     // Non-stream avoids Agents SDK stream_drain REDACTED schema failures (fp d57214)
     // observed on tool-heavy investigation turns (CampusNova 2026-11-19).
@@ -1251,14 +1257,15 @@ async function runLiveWithTools(
         model_requested: policy.modelRequested,
         max_turns_note: "maxTurns≠maxProviderCalls",
         live_output_schema: "plain_omit_visual",
-        campaign_id: reservation.campaignId,
+        campaign_id: admission.campaignId,
+        frontier_layer: admission.layer,
       },
     });

     try {
       // Invoking run() → provider contact becomes at least UNCERTAIN.
+      // Real HTTP attempts (incl. retries) are reserved/committed in frontier fetch.
       providerContacted = "UNCERTAIN";
-      commitProviderEmission(reservation);
       const result = await run(agent, prompt, {
         maxTurns,
         stream: false,
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
index 0a9f774e..dc596496 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
@@ -1,11 +1,12 @@
 /**
- * S1 — Common provider emission frontier (technical controls only).
+ * Common provider emission frontier — technical controls only.
  *
- * Not an orchestrator / not cognitive strategy / not D6 authority / not B1 admission.
- * Applies: lane identity, model/effort admission checks, campaign envelope reservation,
- * attempt identity, and post-emission reconciliation hooks.
+ * Distinguishes:
+ * - SDK invocation (run()) — admission / lane precheck, not an HTTP attempt.
+ * - HTTP attempt — each network contact (incl. SDK retries) via custom fetch.
  *
- * Campaign envelopes are explicit and isolated — never confused with D3 budgets or FinOps caps.
+ * Campaign envelopes are explicit ALS contexts. Missing required campaign ⇒ fail-closed.
+ * Not an orchestrator / not cognitive strategy / not D6 / not B1 admission owner.
  */

 import { AsyncLocalStorage } from "node:async_hooks";
@@ -31,49 +32,128 @@ export type EmissionAttemptKind =
   | "public_web.isolated_search"
   | "internal.qualification"
   | "campaign.probe"
+  | "http.responses"
+  | "http.other"
   | "other";

+export type HttpAttemptState =
+  | "RESERVED"
+  | "COMMITTED"
+  | "RELEASED"
+  | "UNCERTAIN";
+
 export type CampaignEnvelope = {
   campaignId: string;
-  /** Max real provider emission attempts (retries included). */
-  maxAttempts: number;
-  attemptsReserved: number;
-  attemptsCommitted: number;
-  attemptsReleased: number;
+  /** Require this ALS campaign for every HTTP emission (fail-closed if absent). */
+  required: boolean;
+  maxHttpAttempts: number;
+  maxInputTokens: number | null;
+  maxOutputTokens: number | null;
+  maxInputTokensPerRequest: number | null;
+  maxOutputTokensPerRequest: number | null;
+  maxHostedSearches: number | null;
+  maxDirectOpens: number | null;
+  httpAttemptsReserved: number;
+  httpAttemptsCommitted: number;
+  httpAttemptsReleased: number;
+  inputTokensReserved: number;
+  inputTokensCommitted: number;
+  outputTokensReserved: number;
+  outputTokensCommitted: number;
+  hostedSearchesCommitted: number;
+  directOpensCommitted: number;
   suspended: boolean;
   suspendReason: string | null;
 };

+export type HttpAttemptRecord = {
+  attemptId: string;
+  campaignId: string | null;
+  state: HttpAttemptState;
+  kind: EmissionAttemptKind;
+  reservedSlots: number;
+  reservedInputTokens: number;
+  reservedOutputTokens: number;
+  urlHost: string;
+  modelHint: string | null;
+  createdAtMs: number;
+};
+
 export type EmissionReservation =
   | {
       ok: true;
       attemptId: string;
       campaignId: string | null;
       reservedSlots: number;
+      reservedInputTokens: number;
+      reservedOutputTokens: number;
       keyFingerprint: string;
       lane: string;
+      layer: "http" | "sdk_invocation";
     }
   | {
       ok: false;
       reasonCode:
         | "LANE_GUARD_FAILED"
         | "MODEL_EFFORT_NOT_ADMITTED"
+        | "CAMPAIGN_REQUIRED_MISSING"
         | "CAMPAIGN_ENVELOPE_EXHAUSTED"
         | "CAMPAIGN_SUSPENDED"
+        | "ATTEMPT_STATE_INVALID"
         | "INVALID_REQUEST";
       reason: string;
     };

 type FrontierStore = {
   campaign: CampaignEnvelope | null;
-  /** Test oracle — counts true emit calls that passed reserve. */
-  emissionsObserved: number;
+  attempts: Map<string, HttpAttemptRecord>;
+  /** Independent oracle: HTTP attempts that reached commit/uncertain. */
+  httpEmissionsObserved: number;
+  /** SDK run() prechecks that passed (not HTTP). */
+  sdkInvocationsObserved: number;
+  /** Captured request bodies for substituted-transport tests. */
+  httpBodiesObserved: Array<{
+    attemptId: string;
+    url: string;
+    method: string;
+    bodyPreview: string;
+  }>;
+  /** Effort admitted at SDK layer — reused for HTTP body admission (no silent medium). */
+  effortHint: string | null;
 };

 const als = new AsyncLocalStorage<FrontierStore>();

+let clientInstallPromise: Promise<void> | null = null;
+
+/**
+ * Process-level latch: once a required campaign starts, OpenAI HTTP outside an
+ * ALS store that still holds that campaign fails closed (ALS loss ≠ unlimited).
+ * Cleared only by explicit suspend/end or test reset — not by ALS exit alone.
+ */
+let requiredCampaignLatch: {
+  campaignId: string;
+  active: boolean;
+} | null = null;
+
+function emptyStore(): FrontierStore {
+  return {
+    campaign: null,
+    attempts: new Map(),
+    httpEmissionsObserved: 0,
+    sdkInvocationsObserved: 0,
+    httpBodiesObserved: [],
+    effortHint: null,
+  };
+}
+
 function store(): FrontierStore {
-  return als.getStore() ?? { campaign: null, emissionsObserved: 0 };
+  return als.getStore() ?? emptyStore();
+}
+
+/** Clear the required-campaign latch (end of script / campaign close). */
+export function endRequiredCampaignLatch(): void {
+  requiredCampaignLatch = null;
 }

 export function newAttemptId(): string {
@@ -82,19 +162,70 @@ export function newAttemptId(): string {

 export function beginCampaignEnvelope(input: {
   campaignId?: string;
-  maxAttempts: number;
+  /** @deprecated use maxHttpAttempts */
+  maxAttempts?: number;
+  maxHttpAttempts?: number;
+  maxInputTokens?: number | null;
+  maxOutputTokens?: number | null;
+  maxInputTokensPerRequest?: number | null;
+  maxOutputTokensPerRequest?: number | null;
+  maxHostedSearches?: number | null;
+  maxDirectOpens?: number | null;
+  required?: boolean;
 }): CampaignEnvelope {
+  const maxHttp = Math.max(
+    0,
+    Math.floor(input.maxHttpAttempts ?? input.maxAttempts ?? 0),
+  );
   const campaign: CampaignEnvelope = {
     campaignId: input.campaignId ?? `camp_${randomBytes(6).toString("hex")}`,
-    maxAttempts: Math.max(0, Math.floor(input.maxAttempts)),
-    attemptsReserved: 0,
-    attemptsCommitted: 0,
-    attemptsReleased: 0,
+    required: input.required !== false,
+    maxHttpAttempts: maxHttp,
+    maxInputTokens:
+      input.maxInputTokens == null ? null : Math.max(0, Math.floor(input.maxInputTokens)),
+    maxOutputTokens:
+      input.maxOutputTokens == null
+        ? null
+        : Math.max(0, Math.floor(input.maxOutputTokens)),
+    maxInputTokensPerRequest:
+      input.maxInputTokensPerRequest == null
+        ? null
+        : Math.max(0, Math.floor(input.maxInputTokensPerRequest)),
+    maxOutputTokensPerRequest:
+      input.maxOutputTokensPerRequest == null
+        ? null
+        : Math.max(0, Math.floor(input.maxOutputTokensPerRequest)),
+    maxHostedSearches:
+      input.maxHostedSearches == null
+        ? null
+        : Math.max(0, Math.floor(input.maxHostedSearches)),
+    maxDirectOpens:
+      input.maxDirectOpens == null
+        ? null
+        : Math.max(0, Math.floor(input.maxDirectOpens)),
+    httpAttemptsReserved: 0,
+    httpAttemptsCommitted: 0,
+    httpAttemptsReleased: 0,
+    inputTokensReserved: 0,
+    inputTokensCommitted: 0,
+    outputTokensReserved: 0,
+    outputTokensCommitted: 0,
+    hostedSearchesCommitted: 0,
+    directOpensCommitted: 0,
     suspended: false,
     suspendReason: null,
   };
   const cur = store();
+  if (!als.getStore()) {
+    throw new ProviderEmissionRefusedError(
+      "CAMPAIGN_REQUIRED_MISSING",
+      "beginCampaignEnvelope requires an active ALS store (runWithProviderEmissionStore*)",
+    );
+  }
   cur.campaign = campaign;
+  if (campaign.required) {
+    requiredCampaignLatch = { campaignId: campaign.campaignId, active: true };
+  }
   return campaign;
 }

@@ -107,29 +238,137 @@ export function suspendCampaignEnvelope(reason: string): void {
   if (!c) return;
   c.suspended = true;
   c.suspendReason = reason.slice(0, 200);
+  if (requiredCampaignLatch?.campaignId === c.campaignId) {
+    requiredCampaignLatch.active = false;
+  }
 }

-export function campaignSlotsRemaining(c: CampaignEnvelope | null = store().campaign): number {
+export function campaignHttpSlotsRemaining(
+  c: CampaignEnvelope | null = store().campaign,
+): number {
   if (!c) return Number.POSITIVE_INFINITY;
   if (c.suspended) return 0;
-  return Math.max(0, c.maxAttempts - c.attemptsReserved);
+  return Math.max(0, c.maxHttpAttempts - c.httpAttemptsReserved);
+}
+
+/** @deprecated alias — HTTP slots remaining */
+export function campaignSlotsRemaining(
+  c: CampaignEnvelope | null = store().campaign,
+): number {
+  return campaignHttpSlotsRemaining(c);
+}
+
+function parseJsonBody(body: BodyInit | null | undefined): Record<string, unknown> | null {
+  if (body == null) return null;
+  if (typeof body === "string") {
+    try {
+      return JSON.parse(body) as Record<string, unknown>;
+    } catch {
+      return null;
+    }
+  }
+  return null;
+}
+
+function estimateInputTokensFromBody(body: Record<string, unknown> | null): number {
+  if (!body) return 8_000; // conservative unknown
+  const maxOut = Number(body.max_output_tokens ?? body.max_tokens ?? 0);
+  // Prefer explicit conservative bound if present; else fixed conservative reserve.
+  const inputHint = Number(
+    (body as { sfia_estimated_input_tokens?: unknown }).sfia_estimated_input_tokens ??
+      0,
+  );
+  if (Number.isFinite(inputHint) && inputHint > 0) return Math.floor(inputHint);
+  // Without reliable estimate, reserve a conservative chunk so envelopes still bind.
+  void maxOut;
+  return 50_000;
+}
+
+function estimateOutputTokensFromBody(body: Record<string, unknown> | null): number {
+  if (!body) return 4_000;
+  const maxOut = Number(body.max_output_tokens ?? body.max_tokens ?? 0);
+  if (Number.isFinite(maxOut) && maxOut > 0) return Math.floor(maxOut);
+  return 4_000;
+}
+
+function modelFromBody(body: Record<string, unknown> | null): string | null {
+  const m = body?.model;
+  return typeof m === "string" && m.trim() ? m.trim() : null;
 }

 /**
- * Reserve before contacting the provider. A scenario counter or maxTurns is NOT sufficient —
- * callers must reserve here for every real emission (including retries and worker calls).
+ * SDK invocation precheck — NOT an HTTP attempt.
+ * Validates lane + model/effort admission before run().
  */
-export function reserveProviderEmission(input: {
+export function assertSdkInvocationAdmission(input: {
   kind: EmissionAttemptKind;
   modelId?: string | null;
   effort?: string | null;
-  /** Slots to reserve (default 1). Retries that will re-contact must reserve again. */
-  slots?: number;
-  /** When true, skip model admission (deterministic fixture / no provider). */
+  env?: NodeJS.ProcessEnv;
+}): EmissionReservation {
+  const env = input.env ?? process.env;
+  const laneGuard = assertOpenAiKeyForLane(env);
+  if (!laneGuard.ok) {
+    return {
+      ok: false,
+      reasonCode: "LANE_GUARD_FAILED",
+      reason: `${laneGuard.reasonCode}:${laneGuard.reason}`,
+    };
+  }
+  const modelRaw = (input.modelId ?? "").trim();
+  const effortRaw = (input.effort ?? "").trim();
+  if (!modelRaw || !effortRaw) {
+    return {
+      ok: false,
+      reasonCode: "INVALID_REQUEST",
+      reason: "modelId and effort required for SDK admission (no silent default)",
+    };
+  }
+  const admission = admitModelEffort(
+    modelRaw as CognitiveModelId,
+    effortRaw as CognitiveEffort,
+    admissionModeFromEnv(env),
+  );
+  if (!admission.admitted) {
+    return {
+      ok: false,
+      reasonCode: "MODEL_EFFORT_NOT_ADMITTED",
+      reason: admission.reasonCode,
+    };
+  }
+  const s = store();
+  s.sdkInvocationsObserved += 1;
+  s.effortHint = effortRaw;
+  return {
+    ok: true,
+    attemptId: newAttemptId(),
+    campaignId: s.campaign?.campaignId ?? null,
+    reservedSlots: 0,
+    reservedInputTokens: 0,
+    reservedOutputTokens: 0,
+    keyFingerprint: laneGuard.keyFingerprint,
+    lane: laneGuard.lane,
+    layer: "sdk_invocation",
+  };
+}
+
+/**
+ * Reserve one HTTP emission attempt before network contact.
+ * Prefer calling via createFrontierAwareFetch — do not count run() as HTTP.
+ */
+export function reserveHttpEmission(input: {
+  kind?: EmissionAttemptKind;
+  url: string;
+  method?: string;
+  body?: BodyInit | null;
+  modelId?: string | null;
+  effort?: string | null;
+  /** Fixture-only: skip model admission (never for real provider contact). */
   skipModelAdmission?: boolean;
   env?: NodeJS.ProcessEnv;
+  /** Hosted web_search tool call accounting (optional explicit). */
+  hostedSearchDelta?: number;
 }): EmissionReservation {
-  const slots = Math.max(1, Math.floor(input.slots ?? 1));
   const env = input.env ?? process.env;
   const laneGuard = assertOpenAiKeyForLane(env);
   if (!laneGuard.ok) {
@@ -140,10 +379,35 @@ export function reserveProviderEmission(input: {
     };
   }

+  const bodyJson = parseJsonBody(input.body ?? null);
+  const model =
+    (input.modelId ?? "").trim() || modelFromBody(bodyJson) || "";
+  const effortFromInput = (input.effort ?? "").trim();
+  const effortFromStore = (store().effortHint ?? "").trim();
+  // Never invent medium/Terra — only reuse explicit input or SDK-admitted hint.
+  const effort = effortFromInput || effortFromStore;
+
   if (!input.skipModelAdmission) {
-    const model = ((input.modelId ?? "").trim() || "gpt-6.1-terra") as CognitiveModelId;
-    const effort = ((input.effort ?? "").trim() || "medium") as CognitiveEffort;
-    const admission = admitModelEffort(model, effort, admissionModeFromEnv(env));
+    if (!model) {
+      return {
+        ok: false,
+        reasonCode: "INVALID_REQUEST",
+        reason: "HTTP emission model unknown — refuse (no silent Terra default)",
+      };
+    }
+    if (!effort) {
+      return {
+        ok: false,
+        reasonCode: "INVALID_REQUEST",
+        reason:
+          "HTTP emission effort unknown — refuse (no silent medium default; admit via SDK first or pass effortHint)",
+      };
+    }
+    const admission = admitModelEffort(
+      model as CognitiveModelId,
+      effort as CognitiveEffort,
+      admissionModeFromEnv(env),
+    );
     if (!admission.admitted) {
       return {
         ok: false,
@@ -154,98 +418,499 @@ export function reserveProviderEmission(input: {
   }

   const campaign = store().campaign;
-  if (campaign) {
-    if (campaign.suspended) {
-      return {
-        ok: false,
-        reasonCode: "CAMPAIGN_SUSPENDED",
-        reason: campaign.suspendReason ?? "CAMPAIGN_SUSPENDED",
-      };
-    }
-    if (campaign.attemptsReserved + slots > campaign.maxAttempts) {
-      campaign.suspended = true;
-      campaign.suspendReason = "CAMPAIGN_ENVELOPE_EXHAUSTED";
+  if (!campaign) {
+    // Required campaign latch active but ALS lost / wrong store → fail-closed.
+    if (requiredCampaignLatch?.active) {
       return {
         ok: false,
-        reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
-        reason: `reserved=${campaign.attemptsReserved}+${slots} max=${campaign.maxAttempts}`,
+        reasonCode: "CAMPAIGN_REQUIRED_MISSING",
+        reason: `required campaign ${requiredCampaignLatch.campaignId} latch active but ALS campaign absent`,
       };
     }
-    campaign.attemptsReserved += slots;
+    // Operational path without campaign: allow HTTP but still track attempt locally.
+    const attemptId = newAttemptId();
+    const reservedInput = estimateInputTokensFromBody(bodyJson);
+    const reservedOutput = estimateOutputTokensFromBody(bodyJson);
+    store().attempts.set(attemptId, {
+      attemptId,
+      campaignId: null,
+      state: "RESERVED",
+      kind: input.kind ?? "http.responses",
+      reservedSlots: 1,
+      reservedInputTokens: reservedInput,
+      reservedOutputTokens: reservedOutput,
+      urlHost: safeHost(input.url),
+      modelHint: model || null,
+      createdAtMs: Date.now(),
+    });
+    return {
+      ok: true,
+      attemptId,
+      campaignId: null,
+      reservedSlots: 1,
+      reservedInputTokens: reservedInput,
+      reservedOutputTokens: reservedOutput,
+      keyFingerprint: laneGuard.keyFingerprint,
+      lane: laneGuard.lane,
+      layer: "http",
+    };
+  }
+
+  if (campaign.required === false && campaign.maxHttpAttempts === 0) {
+    // Explicit unlimited test campaign — still track.
   }

+  if (campaign.suspended) {
+    return {
+      ok: false,
+      reasonCode: "CAMPAIGN_SUSPENDED",
+      reason: campaign.suspendReason ?? "CAMPAIGN_SUSPENDED",
+    };
+  }
+
+  const reservedInput = estimateInputTokensFromBody(bodyJson);
+  const reservedOutput = estimateOutputTokensFromBody(bodyJson);
+
+  if (
+    campaign.maxInputTokensPerRequest != null &&
+    reservedInput > campaign.maxInputTokensPerRequest
+  ) {
+    campaign.suspended = true;
+    campaign.suspendReason = "INPUT_TOKENS_PER_REQUEST_EXCEEDED";
+    return {
+      ok: false,
+      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
+      reason: `inputPerReq=${reservedInput} max=${campaign.maxInputTokensPerRequest}`,
+    };
+  }
+  if (
+    campaign.maxOutputTokensPerRequest != null &&
+    reservedOutput > campaign.maxOutputTokensPerRequest
+  ) {
+    campaign.suspended = true;
+    campaign.suspendReason = "OUTPUT_TOKENS_PER_REQUEST_EXCEEDED";
+    return {
+      ok: false,
+      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
+      reason: `outputPerReq=${reservedOutput} max=${campaign.maxOutputTokensPerRequest}`,
+    };
+  }
+  if (campaign.httpAttemptsReserved + 1 > campaign.maxHttpAttempts) {
+    campaign.suspended = true;
+    campaign.suspendReason = "CAMPAIGN_HTTP_ATTEMPTS_EXHAUSTED";
+    return {
+      ok: false,
+      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
+      reason: `httpReserved=${campaign.httpAttemptsReserved}+1 max=${campaign.maxHttpAttempts}`,
+    };
+  }
+  if (
+    campaign.maxInputTokens != null &&
+    campaign.inputTokensReserved + reservedInput > campaign.maxInputTokens
+  ) {
+    campaign.suspended = true;
+    campaign.suspendReason = "CAMPAIGN_INPUT_TOKENS_EXHAUSTED";
+    return {
+      ok: false,
+      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
+      reason: `inputReserved=${campaign.inputTokensReserved}+${reservedInput} max=${campaign.maxInputTokens}`,
+    };
+  }
+  if (
+    campaign.maxOutputTokens != null &&
+    campaign.outputTokensReserved + reservedOutput > campaign.maxOutputTokens
+  ) {
+    campaign.suspended = true;
+    campaign.suspendReason = "CAMPAIGN_OUTPUT_TOKENS_EXHAUSTED";
+    return {
+      ok: false,
+      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
+      reason: `outputReserved=${campaign.outputTokensReserved}+${reservedOutput} max=${campaign.maxOutputTokens}`,
+    };
+  }
+  const hostedDelta = Math.max(0, Math.floor(input.hostedSearchDelta ?? 0));
+  if (
+    hostedDelta > 0 &&
+    campaign.maxHostedSearches != null &&
+    campaign.hostedSearchesCommitted + hostedDelta > campaign.maxHostedSearches
+  ) {
+    campaign.suspended = true;
+    campaign.suspendReason = "CAMPAIGN_HOSTED_SEARCHES_EXHAUSTED";
+    return {
+      ok: false,
+      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
+      reason: `hosted=${campaign.hostedSearchesCommitted}+${hostedDelta} max=${campaign.maxHostedSearches}`,
+    };
+  }
+
+  campaign.httpAttemptsReserved += 1;
+  campaign.inputTokensReserved += reservedInput;
+  campaign.outputTokensReserved += reservedOutput;
+
   const attemptId = newAttemptId();
+  store().attempts.set(attemptId, {
+    attemptId,
+    campaignId: campaign.campaignId,
+    state: "RESERVED",
+    kind: input.kind ?? "http.responses",
+    reservedSlots: 1,
+    reservedInputTokens: reservedInput,
+    reservedOutputTokens: reservedOutput,
+    urlHost: safeHost(input.url),
+    modelHint: model || null,
+    createdAtMs: Date.now(),
+  });
+
   return {
     ok: true,
     attemptId,
-    campaignId: campaign?.campaignId ?? null,
-    reservedSlots: slots,
+    campaignId: campaign.campaignId,
+    reservedSlots: 1,
+    reservedInputTokens: reservedInput,
+    reservedOutputTokens: reservedOutput,
     keyFingerprint: laneGuard.keyFingerprint,
     lane: laneGuard.lane,
+    layer: "http",
   };
 }

-/** Mark that a reserved emission actually contacted the provider (or attempted to). */
+/**
+ * Backward-compatible name used by prior wiring.
+ * Defaults to HTTP reservation semantics when slots>0; SDK admission when slots===0.
+ */
+export function reserveProviderEmission(input: {
+  kind: EmissionAttemptKind;
+  modelId?: string | null;
+  effort?: string | null;
+  slots?: number;
+  skipModelAdmission?: boolean;
+  env?: NodeJS.ProcessEnv;
+  url?: string;
+  body?: BodyInit | null;
+}): EmissionReservation {
+  const slots = Math.max(0, Math.floor(input.slots ?? 1));
+  if (slots === 0) {
+    return assertSdkInvocationAdmission({
+      kind: input.kind,
+      modelId: input.modelId,
+      effort: input.effort,
+      env: input.env,
+    });
+  }
+  return reserveHttpEmission({
+    kind: input.kind,
+    url: input.url ?? "https://api.openai.com/v1/responses",
+    body: input.body ?? null,
+    modelId: input.modelId,
+    effort: input.effort,
+    skipModelAdmission: input.skipModelAdmission,
+    env: input.env,
+  });
+}
+
 export function commitProviderEmission(reservation: {
   attemptId: string;
   reservedSlots: number;
+  reservedInputTokens?: number;
+  reservedOutputTokens?: number;
+  measuredInputTokens?: number | null;
+  measuredOutputTokens?: number | null;
+  hostedSearchDelta?: number;
 }): void {
-  const campaign = store().campaign;
-  if (campaign) {
-    campaign.attemptsCommitted += reservation.reservedSlots;
-  }
   const s = store();
-  s.emissionsObserved += reservation.reservedSlots;
-  void reservation.attemptId;
+  const rec = s.attempts.get(reservation.attemptId);
+  if (!rec) {
+    // Legacy path without attempt registry entry (sdk_invocation).
+    s.httpEmissionsObserved += Math.max(0, reservation.reservedSlots);
+    return;
+  }
+  if (rec.state === "COMMITTED" || rec.state === "UNCERTAIN") {
+    return; // idempotent
+  }
+  if (rec.state === "RELEASED") {
+    return;
+  }
+  rec.state = "COMMITTED";
+  const campaign = s.campaign;
+  if (campaign && rec.campaignId === campaign.campaignId) {
+    campaign.httpAttemptsCommitted += 1;
+    const inTok =
+      reservation.measuredInputTokens != null &&
+      Number.isFinite(reservation.measuredInputTokens)
+        ? Math.max(0, Math.floor(reservation.measuredInputTokens))
+        : rec.reservedInputTokens;
+    const outTok =
+      reservation.measuredOutputTokens != null &&
+      Number.isFinite(reservation.measuredOutputTokens)
+        ? Math.max(0, Math.floor(reservation.measuredOutputTokens))
+        : rec.reservedOutputTokens;
+    campaign.inputTokensCommitted += inTok;
+    campaign.outputTokensCommitted += outTok;
+    // Reconcile reservation overshoot: keep reserved >= committed.
+    campaign.inputTokensReserved = Math.max(
+      campaign.inputTokensReserved,
+      campaign.inputTokensCommitted,
+    );
+    campaign.outputTokensReserved = Math.max(
+      campaign.outputTokensReserved,
+      campaign.outputTokensCommitted,
+    );
+    const hosted = Math.max(0, Math.floor(reservation.hostedSearchDelta ?? 0));
+    if (hosted > 0) campaign.hostedSearchesCommitted += hosted;
+  }
+  s.httpEmissionsObserved += 1;
 }

-/** Release unused reservation (failed before contact). Does not free committed attempts. */
 export function releaseProviderEmission(reservation: {
   attemptId: string;
   reservedSlots: number;
   contacted: boolean;
 }): void {
-  const campaign = store().campaign;
-  if (!campaign) return;
+  const s = store();
+  const rec = s.attempts.get(reservation.attemptId);
   if (reservation.contacted) {
-    campaign.attemptsCommitted += reservation.reservedSlots;
-    store().emissionsObserved += reservation.reservedSlots;
+    commitProviderEmission(reservation);
     return;
   }
-  // Before contact: release reservation so the slot can be reused only if not already counted.
-  campaign.attemptsReserved = Math.max(
-    0,
-    campaign.attemptsReserved - reservation.reservedSlots,
-  );
-  campaign.attemptsReleased += reservation.reservedSlots;
-  void reservation.attemptId;
+  if (!rec) return;
+  if (rec.state !== "RESERVED") return; // cannot release consumed
+  rec.state = "RELEASED";
+  const campaign = s.campaign;
+  if (campaign && rec.campaignId === campaign.campaignId) {
+    campaign.httpAttemptsReserved = Math.max(0, campaign.httpAttemptsReserved - 1);
+    campaign.httpAttemptsReleased += 1;
+    campaign.inputTokensReserved = Math.max(
+      0,
+      campaign.inputTokensReserved - rec.reservedInputTokens,
+    );
+    campaign.outputTokensReserved = Math.max(
+      0,
+      campaign.outputTokensReserved - rec.reservedOutputTokens,
+    );
+  }
+}
+
+export function markProviderEmissionUncertain(reservation: {
+  attemptId: string;
+}): void {
+  const s = store();
+  const rec = s.attempts.get(reservation.attemptId);
+  if (!rec) return;
+  if (rec.state === "COMMITTED" || rec.state === "UNCERTAIN") return;
+  if (rec.state === "RELEASED") return;
+  rec.state = "UNCERTAIN";
+  const campaign = s.campaign;
+  if (campaign && rec.campaignId === campaign.campaignId) {
+    // Unknown consumption ≠ free — keep reservation, count as observed emission.
+    campaign.httpAttemptsCommitted += 1;
+  }
+  s.httpEmissionsObserved += 1;
+}
+
+export function getHttpAttempt(attemptId: string): HttpAttemptRecord | null {
+  return store().attempts.get(attemptId) ?? null;
 }

 export function getEmissionsObservedForTests(): number {
-  return store().emissionsObserved;
+  return store().httpEmissionsObserved;
+}
+
+export function getSdkInvocationsObservedForTests(): number {
+  return store().sdkInvocationsObserved;
+}
+
+export function getHttpBodiesObservedForTests(): FrontierStore["httpBodiesObserved"] {
+  return store().httpBodiesObserved.slice();
 }

 export function __resetProviderEmissionFrontierForTests(): void {
   const s = store();
   s.campaign = null;
-  s.emissionsObserved = 0;
+  s.attempts.clear();
+  s.httpEmissionsObserved = 0;
+  s.sdkInvocationsObserved = 0;
+  s.httpBodiesObserved = [];
+  s.effortHint = null;
+  requiredCampaignLatch = null;
 }

-/**
- * Run work inside an isolated frontier store (campaign + oracle counters).
- * Production request handlers may call this once per campaign script.
- */
 export function runWithProviderEmissionStore<T>(fn: () => T): T {
-  return als.run({ campaign: null, emissionsObserved: 0 }, fn);
+  return als.run(emptyStore(), fn);
 }

 export async function runWithProviderEmissionStoreAsync<T>(
   fn: () => Promise<T>,
 ): Promise<T> {
-  return als.run({ campaign: null, emissionsObserved: 0 }, fn);
+  return als.run(emptyStore(), fn);
+}
+
+export function requireCampaignContextOrThrow(): void {
+  const c = store().campaign;
+  if (!c || c.required) {
+    if (!c) {
+      throw new ProviderEmissionRefusedError(
+        "CAMPAIGN_REQUIRED_MISSING",
+        "HTTP emission requires an active campaign envelope",
+      );
+    }
+  }
+}
+
+export class ProviderEmissionRefusedError extends Error {
+  readonly reasonCode: string;
+  constructor(reasonCode: string, message: string) {
+    super(`${reasonCode}: ${message}`);
+    this.name = "ProviderEmissionRefusedError";
+    this.reasonCode = reasonCode;
+  }
+}
+
+function safeHost(url: string): string {
+  try {
+    return new URL(url).host;
+  } catch {
+    return "invalid-url";
+  }
+}
+
+function isOpenAiApiUrl(url: string): boolean {
+  try {
+    const u = new URL(url);
+    const host = u.hostname.toLowerCase();
+    return (
+      host === "api.openai.com" ||
+      host.endsWith(".openai.com") ||
+      host === "api.openai.azure.com" ||
+      host.includes("openai.azure.com")
+    );
+  } catch {
+    return false;
+  }
+}
+
+/**
+ * Custom fetch that intercepts OpenAI HTTP emissions for campaign control.
+ * Substitutable in tests by wrapping a fake transport.
+ */
+export function createFrontierAwareFetch(
+  baseFetch: typeof fetch = globalThis.fetch.bind(globalThis),
+  opts?: {
+    /** When true, refuse OpenAI HTTP if no ALS campaign is active. */
+    requireCampaign?: boolean;
+    effortHint?: string | null;
+  },
+): typeof fetch {
+  const requireCampaign = opts?.requireCampaign === true;
+  return (async (input: RequestInfo | URL, init?: RequestInit) => {
+    const url =
+      typeof input === "string"
+        ? input
+        : input instanceof URL
+          ? input.toString()
+          : input.url;
+    if (!isOpenAiApiUrl(url)) {
+      return baseFetch(input, init);
+    }
+
+    if (requireCampaign && !store().campaign) {
+      throw new ProviderEmissionRefusedError(
+        "CAMPAIGN_REQUIRED_MISSING",
+        "OpenAI HTTP refused — campaign envelope required",
+      );
+    }
+
+    const method = (init?.method ?? "POST").toUpperCase();
+    const body = init?.body ?? null;
+    // Propagate explicit effort hint into ALS for this emission when provided.
+    if (opts?.effortHint && als.getStore()) {
+      store().effortHint = opts.effortHint;
+    }
+    const reservation = reserveHttpEmission({
+      kind: "http.responses",
+      url,
+      method,
+      body,
+      effort: opts?.effortHint ?? store().effortHint,
+      skipModelAdmission: false,
+    });
+    if (!reservation.ok) {
+      throw new ProviderEmissionRefusedError(
+        reservation.reasonCode,
+        reservation.reason,
+      );
+    }
+
+    const bodyPreview =
+      typeof body === "string" ? body.slice(0, 400) : body ? "[non-string-body]" : "";
+    store().httpBodiesObserved.push({
+      attemptId: reservation.attemptId,
+      url,
+      method,
+      bodyPreview,
+    });
+
+    try {
+      const res = await baseFetch(input, init);
+      // Contact established (response received). Usage may be unknown.
+      commitProviderEmission({
+        attemptId: reservation.attemptId,
+        reservedSlots: reservation.reservedSlots,
+        reservedInputTokens: reservation.reservedInputTokens,
+        reservedOutputTokens: reservation.reservedOutputTokens,
+      });
+      return res;
+    } catch (e) {
+      markProviderEmissionUncertain({ attemptId: reservation.attemptId });
+      throw e;
+    }
+  }) as typeof fetch;
+}
+
+/**
+ * Install a process-wide Agents SDK OpenAI client whose fetch is frontier-aware.
+ * Idempotent. Call before any LIVE run().
+ */
+export async function ensureFrontierOpenAIClientInstalled(input?: {
+  requireCampaign?: boolean;
+  effortHint?: string | null;
+  maxRetries?: number;
+}): Promise<void> {
+  if (clientInstallPromise) return clientInstallPromise;
+  clientInstallPromise = (async () => {
+    const [{ setDefaultOpenAIClient }, OpenAIMod] = await Promise.all([
+      import("@openai/agents"),
+      import("openai"),
+    ]);
+    const OpenAI = OpenAIMod.default;
+    const key = process.env.OPENAI_API_KEY?.trim();
+    if (!key) {
+      // No key — leave default unset; LIVE paths already fail closed.
+      return;
+    }
+    const client = new OpenAI({
+      apiKey: key,
+      fetch: createFrontierAwareFetch(globalThis.fetch.bind(globalThis), {
+        requireCampaign: input?.requireCampaign === true,
+        effortHint: input?.effortHint,
+      }),
+      // Retries still go through fetch and are counted as distinct HTTP attempts.
+      maxRetries: input?.maxRetries ?? 2,
+    });
+    setDefaultOpenAIClient(client as never);
+  })();
+  try {
+    await clientInstallPromise;
+  } catch (e) {
+    clientInstallPromise = null;
+    throw e;
+  }
+}
+
+/** Test helper — reset install latch. */
+export function __resetFrontierOpenAIClientInstallForTests(): void {
+  clientInstallPromise = null;
 }

-/** Stable fingerprint of payload fields that must not mutate after authorization. */
 export function canonicalPayloadFingerprint(fields: Record<string, string>): string {
   const keys = Object.keys(fields).sort();
   const blob = keys.map((k) => `${k}=${fields[k]}`).join("\n");
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
index c3792d1e..2b4838c4 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
@@ -352,9 +352,12 @@ export function resolvePublicWebRegistry(input: {
   }

   const topics: Record<string, string> = { ...priorTopicsRaw };
+  if ((input.priorExactQueries ?? []).length > 0) {
+    limits.push("PRIOR_EXACT_STRINGS_IGNORED_WITHOUT_D6_BINDING");
+  }
+
   const exact = new Set(
     [
-      ...(input.priorExactQueries ?? []),
       ...(input.explicitExactQueries ?? []),
       ...(input.d6BoundExactQueries ?? []),
     ]
@@ -404,7 +407,7 @@ export function resolvePublicWebRegistry(input: {
     // Option B — technical parse of AUTHORIZE_PUBLIC_QUERY (≠ D6 authority).
     // Parsed queries are observed for staging / inspectable act preparation only;
     // they are NOT promoted into exactQueries unless already present via
-    // d6BoundExactQueries / explicitExactQueries / priorExactQueries.
+    // d6BoundExactQueries / explicitExactQueries (priorExactQueries strings alone are not admitted).
     const pilotExact = extractPilotAuthorizedExactQueries(input.pilotText);
     if (pilotExact.length === 0 && /AUTHORIZE_PUBLIC_QUERY/i.test(input.pilotText)) {
       limits.push("PILOT_EXACT_PARSE_REJECTED");
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
index 2dec60d4..1bac7ea2 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
@@ -236,6 +236,10 @@ export async function executePublicWebSearch(input: {
   turnPublicTopics?: Record<string, string>;
   explicitlyAuthorizedExactQuery?: string;
   turnAuthorizedExactQueries?: string[];
+  /** S5 — durable decisionId per exceptional exact query (egress re-proof). */
+  turnExactQueryDecisionIds?: Record<string, string> | null;
+  /** Active cognitive policy version for D6 effectConditions match at egress. */
+  policyVersion?: string;
   privateContextMarkers?: string[];
   /** Optional FinOps attribution for LIVE isolated search worker. */
   finops?: {
@@ -283,6 +287,61 @@ export async function executePublicWebSearch(input: {
       mode,
     };
   }
+
+  // S5 — last egress gate for exceptional D6-bound exact queries (catalog exempt).
+  if (auth.provenance === "EXPLICIT_AUTHORIZED_EXACT") {
+    const projectId = (input.finops?.projectId ?? "").trim();
+    const pilotId = (input.finops?.ownerPilotId ?? "").trim();
+    const catalogValues = new Set(
+      Object.values(input.turnPublicTopics ?? {})
+        .map((q) => q.replace(/\s+/g, " ").trim().toLowerCase())
+        .filter(Boolean),
+    );
+    const exactNorm = auth.authorizedQuery.replace(/\s+/g, " ").trim().toLowerCase();
+    const catalogBound = catalogValues.has(exactNorm);
+    if (projectId && pilotId && !catalogBound) {
+      try {
+        const { reverifyWebPublicQueryAuthorityAtEgress } = await import(
+          "./web-public-query-authority"
+        );
+        const decisionId =
+          input.turnExactQueryDecisionIds?.[exactNorm] ??
+          input.turnExactQueryDecisionIds?.[auth.authorizedQuery] ??
+          null;
+        const egressAuth = await reverifyWebPublicQueryAuthorityAtEgress({
+          query: auth.authorizedQuery,
+          projectId,
+          pilotId,
+          policyVersion: input.policyVersion,
+          decisionId,
+        });
+        if (!egressAuth.allowed) {
+          return {
+            status: "DENIED",
+            coverage: "DENIED",
+            query: "",
+            items: [],
+            limits: [
+              "WEB_QUERY_EGRESS_D6_DENIED",
+              egressAuth.reasonCode,
+              ...auth.redactions,
+            ],
+            mode,
+          };
+        }
+      } catch {
+        return {
+          status: "DENIED",
+          coverage: "DENIED",
+          query: "",
+          items: [],
+          limits: ["WEB_QUERY_EGRESS_AUTHORITY_LOOKUP_FAILED"],
+          mode,
+        };
+      }
+    }
+  }
+
   const outboundFields = { q: auth.authorizedQuery, provenance: auth.provenance };
   const leakCheck = assertOutboundHasNoPrivateLeak(
     outboundFields,
@@ -450,27 +509,29 @@ async function executeIsolatedLiveWebSearch(
       ],
     };
   }
-  const { reserveProviderEmission, commitProviderEmission } = await import(
-    "./provider-emission-frontier"
-  );
-  const reservation = reserveProviderEmission({
+  const {
+    assertSdkInvocationAdmission,
+    ensureFrontierOpenAIClientInstalled,
+  } = await import("./provider-emission-frontier");
+  await ensureFrontierOpenAIClientInstalled();
+  const sdkAdmission = assertSdkInvocationAdmission({
     kind: "public_web.isolated_search",
     modelId: modelRequested,
     effort: effortRequested,
   });
-  if (!reservation.ok) {
+  if (!sdkAdmission.ok) {
     return {
       status: "ERROR",
       items: [],
       limits: [
         "WEB_SEARCH_PROVIDER_EMISSION_REFUSED",
-        reservation.reasonCode,
-        reservation.reason.slice(0, 120),
+        sdkAdmission.reasonCode,
+        sdkAdmission.reason.slice(0, 120),
         "WEB_LIVE_SEARCH_BLOCKED",
       ],
     };
   }
-  const attemptId = reservation.attemptId;
+  const attemptId = sdkAdmission.attemptId;
   const generationId = `web-gen-${randomUUID()}`;
   const started = Date.now();
   let result: unknown;
@@ -492,8 +553,7 @@ async function executeIsolatedLiveWebSearch(
       },
     });
     // CRITICAL isolation: only the sanitized public query is the user message.
-    // S1 — commit reservation at the common frontier before contacting the provider.
-    commitProviderEmission(reservation);
+    // Real HTTP attempts (incl. retries / hosted tool) pass the frontier fetch.
     result = await run(agent, query, { maxTurns: 6 });
   } catch (e) {
     // FinOps — record failed attempt (uncertain usage when SDK has none).
@@ -1257,6 +1317,10 @@ export async function buildPublicWebFrontierTools(input: {
   turnPublicTopics?: Record<string, string>;
   /** C22 — exact queries explicitly authorized for this turn. */
   turnAuthorizedExactQueries?: string[];
+  /** S5 — durable decisionId per exceptional exact query (egress re-proof). */
+  turnExactQueryDecisionIds?: Record<string, string> | null;
+  /** Active cognitive policy version for D6 effectConditions match at egress. */
+  policyVersion?: string;
   /**
    * URL candidates parsed from this-turn Pilote text (not auto-authorized).
    * Nora must still propose open; mention alone never grants discovery.
@@ -1439,6 +1503,8 @@ export async function buildPublicWebFrontierTools(input: {
           turnPublicFacts: input.turnPublicFacts,
           turnPublicTopics: turnTopics,
           turnAuthorizedExactQueries: [...turnExact],
+          turnExactQueryDecisionIds: input.turnExactQueryDecisionIds,
+          policyVersion: input.policyVersion,
           privateContextMarkers: markers,
           finops: input.finops,
         });
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
index 723fd045..f6c85e9d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
@@ -10,6 +10,7 @@ import {
 } from "./cognitive-conductor";
 import {
   buildCognitivePolicy,
+  buildResourceContinuitySuspendMessage,
   resolveContinuityCognitivePolicy,
 } from "./cognitive-policy";
 import {
@@ -1357,26 +1358,47 @@ export async function runNoraCognitiveTurn(
         input.conversationId ?? "",
         work.id,
       ].filter((m) => m.trim().length >= 4);
-      // S4 — AUTHORIZE_PUBLIC_QUERY parse ≠ D6; bind exceptional auth via HumanDecision.
+      // S5 — AUTHORIZE_PUBLIC_QUERY parse ≠ D6; bind exceptional auth via HumanDecision.
       let d6BoundExactQueries: string[] = [];
+      const d6BindingByQuery = new Map<string, string>();
       try {
-        const { evaluateWebPublicQueryAuthority } = await import(
-          "./web-public-query-authority"
-        );
+        const {
+          evaluateWebPublicQueryAuthority,
+          reverifyWebPublicQueryAuthorityAtEgress,
+        } = await import("./web-public-query-authority");
         const { isDedicatedAuthorizePublicQueryAct } = await import(
           "./public-web-registry"
         );
+        const projectIdForWeb = (input.projectId ?? "").trim();
+        for (const prior of work.state.authorizedExactWebQueryBindings ?? []) {
+          const q = prior.query.replace(/\s+/g, " ").trim();
+          const decisionId = prior.decisionId.trim();
+          if (!q || !decisionId || !projectIdForWeb) continue;
+          const auth = await reverifyWebPublicQueryAuthorityAtEgress({
+            query: q,
+            projectId: projectIdForWeb,
+            pilotId: input.pilotId,
+            policyVersion: policy.policyVersion,
+            decisionId,
+          });
+          if (auth.allowed) {
+            d6BoundExactQueries.push(auth.query);
+            d6BindingByQuery.set(auth.query.toLowerCase(), auth.decisionId);
+          }
+        }
         if (isDedicatedAuthorizePublicQueryAct(input.userText)) {
           const auth = await evaluateWebPublicQueryAuthority({
             pilotText: input.userText,
-            projectId: input.projectId,
+            projectId: projectIdForWeb || null,
             pilotId: input.pilotId,
             policyVersion: policy.policyVersion,
           });
           if (auth.allowed) {
-            d6BoundExactQueries = [auth.query];
+            d6BoundExactQueries.push(auth.query);
+            d6BindingByQuery.set(auth.query.toLowerCase(), auth.decisionId);
           }
         }
+        d6BoundExactQueries = [...new Set(d6BoundExactQueries)];
       } catch {
         /* authority lookup failure ⇒ no exceptional promotion */
       }
@@ -1411,13 +1433,32 @@ export async function runNoraCognitiveTurn(
           work.state.proposedCognitiveModel ?? policy.modelRequested;
         const refusedEffort =
           work.state.proposedCognitiveEffort ?? policy.effortRequested;
+        const suspendReplyText = buildResourceContinuitySuspendMessage(
+          refusedModel,
+          refusedEffort,
+        );
+        const suspendQualification = unavailableQualification(
+          "RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION",
+        );
+        segmentBox.reply = {
+          content: suspendReplyText,
+          status: "INTERRUPTED",
+          generationId: `suspend_${work.id}`,
+          mode: "deterministic-fixture",
+          policy,
+          modelRequested: refusedModel,
+          modelApplied: null,
+          effortRequested: refusedEffort,
+          effortApplied: null,
+          attempts: [],
+          toolCallsObserved: 0,
+          d4CharsReturned: 0,
+          observedToolSources: [],
+          qualification: suspendQualification,
+        };
         return {
-          replyText:
-            `Je ne peux pas appliquer silencieusement une autre ressource cognitive : la proposition ` +
-            `${refusedModel}@${refusedEffort} n'est pas admise dans la politique active et aucune ressource ` +
-            `déjà admise n'est disponible pour la maintenir. Indique une autre allocation (modèle/effort) ` +
-            `compatible, ou demande le maintien d'une ressource déjà qualifiée.`,
-          qualification: null,
+          replyText: suspendReplyText,
+          qualification: suspendQualification,
           investigation: {
             ...work.state,
             remainingWork: [
@@ -1479,6 +1520,7 @@ export async function runNoraCognitiveTurn(
             facts: webRegistry.facts,
             pilotProvidedUrls: webRegistry.pilotProvidedUrls,
             pendingProposals: pendingWebProposals,
+            exactQueryDecisionIds: Object.fromEntries(d6BindingByQuery),
           },
         });
       }
@@ -1501,6 +1543,16 @@ export async function runNoraCognitiveTurn(
           ...webRegistry.exactQueries,
         ]),
       ];
+      const nextBindings = [
+        ...(investigation.authorizedExactWebQueryBindings ?? []),
+      ];
+      for (const q of webRegistry.exactQueries) {
+        const decisionId = d6BindingByQuery.get(q.toLowerCase());
+        if (!decisionId) continue;
+        if (nextBindings.some((b) => b.decisionId === decisionId)) continue;
+        nextBindings.push({ query: q, decisionId });
+      }
+      investigation.authorizedExactWebQueryBindings = nextBindings;
       // Option B — retain staged proposals; drop those now exact-authorized.
       const authorizedSet = new Set(
         (investigation.authorizedExactWebQueries ?? []).map((q) =>
@@ -1621,17 +1673,26 @@ export async function runNoraCognitiveTurn(

   let content = conductor.replyText || lastReply.content;
   if (conductor.suspended) {
-    // A4 — restitution from durable acquis, not last provider fragment alone.
-    content = composeInvestigationPartialRestitution({
-      state: {
-        ...conductor.investigation,
-        cognitiveWorkId: conductor.work.id,
-        cognitiveRevision: conductor.work.revision,
-      },
-      production: conductor.production,
-      suspendReason: conductor.suspendReason,
-      sourceFallback: lastReply.observedToolSources,
-    });
+    if (
+      conductor.suspendReason ===
+        "RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION" &&
+      conductor.replyText.trim().length > 0
+    ) {
+      // S2 — explicit refusal/restitution; do not bury under generic partial template.
+      content = conductor.replyText;
+    } else {
+      // A4 — restitution from durable acquis, not last provider fragment alone.
+      content = composeInvestigationPartialRestitution({
+        state: {
+          ...conductor.investigation,
+          cognitiveWorkId: conductor.work.id,
+          cognitiveRevision: conductor.work.revision,
+        },
+        production: conductor.production,
+        suspendReason: conductor.suspendReason,
+        sourceFallback: lastReply.observedToolSources,
+      });
+    }
   }

   const reply: NoraGenerateResult = {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/web-public-query-authority.ts b/projects/sfia-studio-next/web/src/domains/conversation/web-public-query-authority.ts
index 5cf4148d..e0c2d892 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/web-public-query-authority.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/web-public-query-authority.ts
@@ -1,5 +1,5 @@
 /**
- * S4 — Exceptional public WEB query authority binding (D6 owner).
+ * S5 — Exceptional public WEB query authority binding (D6 owner).
  *
  * Regex AUTHORIZE_PUBLIC_QUERY parse is a technical extractor only.
  * Egress admission for non-catalog queries requires an inspectable authority
@@ -19,22 +19,27 @@ import {
 } from "./public-web-registry";

 export const WEB_PUBLIC_QUERY_OBJECT_PREFIX = "web.public_query:" as const;
+export const WEB_PUBLIC_QUERY_DESTINATION = "public_web_search" as const;

 export type WebPublicQueryAuthorityPayload = {
   query: string;
-  destination: "public_web_search";
+  destination: typeof WEB_PUBLIC_QUERY_DESTINATION;
   purpose: string;
   projectId: string;
   pilotId: string;
   policyVersion: string;
 };

+export function normalizeWebPublicQuery(query: string): string {
+  return query.replace(/\s+/g, " ").trim();
+}
+
 export function buildWebPublicQueryObjectRef(
   payload: Pick<WebPublicQueryAuthorityPayload, "query" | "projectId">,
 ): string {
   const fp = canonicalPayloadFingerprint({
-    query: payload.query.replace(/\s+/g, " ").trim(),
-    destination: "public_web_search",
+    query: normalizeWebPublicQuery(payload.query),
+    destination: WEB_PUBLIC_QUERY_DESTINATION,
     projectId: payload.projectId,
   });
   return `${WEB_PUBLIC_QUERY_OBJECT_PREFIX}${fp}`;
@@ -44,7 +49,7 @@ export function buildWebPublicQueryEffectConditions(
   payload: WebPublicQueryAuthorityPayload,
 ): string {
   const canonical = {
-    query: payload.query.replace(/\s+/g, " ").trim(),
+    query: normalizeWebPublicQuery(payload.query),
     destination: payload.destination,
     purpose: payload.purpose.slice(0, 200),
     projectId: payload.projectId,
@@ -54,6 +59,69 @@ export function buildWebPublicQueryEffectConditions(
   return JSON.stringify(canonical);
 }

+export type ParseEffectConditionsResult =
+  | { ok: true; payload: WebPublicQueryAuthorityPayload }
+  | { ok: false; reasonCode: "EFFECT_CONDITIONS_MISSING" | "EFFECT_CONDITIONS_MALFORMED" | "EFFECT_CONDITIONS_INCOMPLETE" };
+
+/** Fail closed on missing/malformed effectConditions (discriminant, no DB). */
+export function parseWebPublicQueryEffectConditions(
+  raw: string | null | undefined,
+): ParseEffectConditionsResult {
+  const text = (raw ?? "").trim();
+  if (!text) {
+    return { ok: false, reasonCode: "EFFECT_CONDITIONS_MISSING" };
+  }
+  let parsed: unknown;
+  try {
+    parsed = JSON.parse(text);
+  } catch {
+    return { ok: false, reasonCode: "EFFECT_CONDITIONS_MALFORMED" };
+  }
+  if (!parsed || typeof parsed !== "object") {
+    return { ok: false, reasonCode: "EFFECT_CONDITIONS_MALFORMED" };
+  }
+  const o = parsed as Record<string, unknown>;
+  const query =
+    typeof o.query === "string" ? normalizeWebPublicQuery(o.query) : "";
+  const destination = o.destination;
+  const purpose = typeof o.purpose === "string" ? o.purpose.trim() : "";
+  const projectId = typeof o.projectId === "string" ? o.projectId.trim() : "";
+  const pilotId = typeof o.pilotId === "string" ? o.pilotId.trim() : "";
+  const policyVersion =
+    typeof o.policyVersion === "string" ? o.policyVersion.trim() : "";
+  if (
+    !query ||
+    query.length < 3 ||
+    destination !== WEB_PUBLIC_QUERY_DESTINATION ||
+    !purpose ||
+    !projectId ||
+    !pilotId ||
+    !policyVersion
+  ) {
+    return { ok: false, reasonCode: "EFFECT_CONDITIONS_INCOMPLETE" };
+  }
+  return {
+    ok: true,
+    payload: {
+      query,
+      destination: WEB_PUBLIC_QUERY_DESTINATION,
+      purpose: purpose.slice(0, 200),
+      projectId,
+      pilotId,
+      policyVersion,
+    },
+  };
+}
+
+type DecisionRow = {
+  id: string;
+  pilotId: string;
+  kind: string;
+  objectRef: string;
+  state: string;
+  effectConditions: string | null;
+};
+
 export type WebQueryAuthorityVerdict =
   | {
       allowed: true;
@@ -72,65 +140,202 @@ export type WebQueryAuthorityVerdict =
         | "DECISION_NOT_APPLICABLE"
         | "PAYLOAD_MISMATCH"
         | "PILOT_MISMATCH"
+        | "POLICY_VERSION_MISMATCH"
+        | "EFFECT_CONDITIONS_INVALID"
+        | "KIND_MISMATCH"
         | "REVOKED_OR_SUPERSEDED";
       reason: string;
       parsedQuery?: string;
       objectRef?: string;
     };

-/**
- * Technical parse alone never grants egress. When projectId is present,
- * require an APPLICABLE HumanDecision RECORD_DECISION bound to the payload.
- */
-export async function evaluateWebPublicQueryAuthority(input: {
-  pilotText: string;
-  projectId: string | null | undefined;
-  pilotId: string;
-  /** Optional explicit decision id (inspectable act already recorded). */
-  decisionId?: string | null;
-  policyVersion?: string;
-}): Promise<WebQueryAuthorityVerdict> {
-  const projectId = (input.projectId ?? "").trim();
-  const parsed = extractPilotAuthorizedExactQueries(input.pilotText);
-  const dedicated = isDedicatedAuthorizePublicQueryAct(input.pilotText);
+export function validateWebPublicQueryDecisionRow(
+  row: DecisionRow,
+  expected: {
+    query: string;
+    projectId: string;
+    pilotId: string;
+    policyVersion?: string;
+    objectRef: string;
+  },
+): WebQueryAuthorityVerdict {
+  const query = normalizeWebPublicQuery(expected.query);

-  if (!dedicated || parsed.length === 0) {
+  if (row.kind !== "RECORD_DECISION") {
     return {
       allowed: false,
-      reasonCode: "POISON_OR_NON_DEDICATED",
-      reason: "AUTHORIZE_PUBLIC_QUERY must be a dedicated Pilote act (parse ≠ D6)",
+      reasonCode: "KIND_MISMATCH",
+      reason: `decision kind=${row.kind} (expected RECORD_DECISION)`,
+      parsedQuery: query,
+      objectRef: expected.objectRef,
     };
   }

-  const query = parsed[0]!;
-  if (!projectId) {
-    // Without project scope, D6 HumanDecision cannot bind — refuse exceptional auth.
-    // Catalog / independently admitted provenance remains the nominal path.
+  if (row.state !== "APPLICABLE") {
     return {
       allowed: false,
-      reasonCode: "PROJECT_REQUIRED",
-      reason:
-        "Exceptional WEB authorization requires project-scoped HumanDecision (D6)",
+      reasonCode: "DECISION_NOT_APPLICABLE",
+      reason: `decision state=${row.state}`,
       parsedQuery: query,
+      objectRef: expected.objectRef,
     };
   }

-  const objectRef = buildWebPublicQueryObjectRef({ query, projectId });
-  const decisionId = (input.decisionId ?? "").trim();
+  if (row.pilotId !== expected.pilotId) {
+    return {
+      allowed: false,
+      reasonCode: "PILOT_MISMATCH",
+      reason: "Decision pilot does not match requesting pilot",
+      parsedQuery: query,
+      objectRef: expected.objectRef,
+    };
+  }
+
+  if (row.objectRef !== expected.objectRef) {
+    return {
+      allowed: false,
+      reasonCode: "PAYLOAD_MISMATCH",
+      reason: "Decision objectRef fingerprint does not match query payload",
+      parsedQuery: query,
+      objectRef: expected.objectRef,
+    };
+  }
+
+  const ec = parseWebPublicQueryEffectConditions(row.effectConditions);
+  if (!ec.ok) {
+    return {
+      allowed: false,
+      reasonCode: "EFFECT_CONDITIONS_INVALID",
+      reason: ec.reasonCode,
+      parsedQuery: query,
+      objectRef: expected.objectRef,
+    };
+  }
+
+  if (ec.payload.projectId !== expected.projectId) {
+    return {
+      allowed: false,
+      reasonCode: "PAYLOAD_MISMATCH",
+      reason: "effectConditions.projectId does not match scope",
+      parsedQuery: query,
+      objectRef: expected.objectRef,
+    };
+  }
+
+  if (ec.payload.pilotId !== expected.pilotId) {
+    return {
+      allowed: false,
+      reasonCode: "PILOT_MISMATCH",
+      reason: "effectConditions.pilotId does not match requesting pilot",
+      parsedQuery: query,
+      objectRef: expected.objectRef,
+    };
+  }
+
+  if (ec.payload.query !== query) {
+    return {
+      allowed: false,
+      reasonCode: "PAYLOAD_MISMATCH",
+      reason: "effectConditions.query does not match authorized query",
+      parsedQuery: query,
+      objectRef: expected.objectRef,
+    };
+  }
+
+  if (ec.payload.destination !== WEB_PUBLIC_QUERY_DESTINATION) {
+    return {
+      allowed: false,
+      reasonCode: "PAYLOAD_MISMATCH",
+      reason: "effectConditions.destination is not public_web_search",
+      parsedQuery: query,
+      objectRef: expected.objectRef,
+    };
+  }
+
+  const expectedPolicy = (expected.policyVersion ?? "").trim();
+  if (expectedPolicy && ec.payload.policyVersion !== expectedPolicy) {
+    return {
+      allowed: false,
+      reasonCode: "POLICY_VERSION_MISMATCH",
+      reason: "effectConditions.policyVersion does not match active policy",
+      parsedQuery: query,
+      objectRef: expected.objectRef,
+    };
+  }
+
+  if (!ec.payload.purpose.trim()) {
+    return {
+      allowed: false,
+      reasonCode: "EFFECT_CONDITIONS_INVALID",
+      reason: "effectConditions.purpose missing",
+      parsedQuery: query,
+      objectRef: expected.objectRef,
+    };
+  }
+
+  return {
+    allowed: true,
+    decisionId: row.id,
+    objectRef: expected.objectRef,
+    query,
+    source: "HUMAN_DECISION_RECORD",
+  };
+}
+
+/** Last-mile revocation / supersession proof before network egress. */
+export async function assertWebPublicQueryDecisionEgressProof(
+  decisionId: string,
+  projectId: string,
+): Promise<"ok" | "revoked_or_stale"> {
+  const fresh = (
+    await db
+      .select({
+        id: humanDecisions.id,
+        state: humanDecisions.state,
+        kind: humanDecisions.kind,
+      })
+      .from(humanDecisions)
+      .where(
+        and(
+          eq(humanDecisions.id, decisionId),
+          eq(humanDecisions.projectId, projectId),
+        ),
+      )
+      .limit(1)
+  )[0];
+  if (!fresh || fresh.kind !== "RECORD_DECISION" || fresh.state !== "APPLICABLE") {
+    return "revoked_or_stale";
+  }
+
+  const revoke = (
+    await db
+      .select({ id: humanDecisions.id })
+      .from(humanDecisions)
+      .where(
+        and(
+          eq(humanDecisions.projectId, projectId),
+          eq(humanDecisions.state, "APPLICABLE"),
+          eq(humanDecisions.kind, "REVOKE_DECISION"),
+          eq(humanDecisions.revokesDecisionId, decisionId),
+        ),
+      )
+      .limit(1)
+  )[0];
+  if (revoke) {
+    return "revoked_or_stale";
+  }
+
+  return "ok";
+}

-  let row:
-    | {
-        id: string;
-        pilotId: string;
-        kind: string;
-        objectRef: string;
-        state: string;
-        effectConditions: string | null;
-      }
-    | undefined;
-
-  if (decisionId) {
-    row = (
+async function loadWebPublicQueryDecisionRow(input: {
+  projectId: string;
+  pilotId: string;
+  objectRef: string;
+  decisionId?: string;
+}): Promise<DecisionRow | undefined> {
+  if (input.decisionId) {
+    return (
       await db
         .select({
           id: humanDecisions.id,
@@ -143,35 +348,79 @@ export async function evaluateWebPublicQueryAuthority(input: {
         .from(humanDecisions)
         .where(
           and(
-            eq(humanDecisions.id, decisionId),
-            eq(humanDecisions.projectId, projectId),
+            eq(humanDecisions.id, input.decisionId),
+            eq(humanDecisions.projectId, input.projectId),
           ),
         )
         .limit(1)
     )[0];
-  } else {
-    // Lookup latest APPLICABLE RECORD_DECISION for this objectRef + pilot.
-    const rows = await db
-      .select({
-        id: humanDecisions.id,
-        pilotId: humanDecisions.pilotId,
-        kind: humanDecisions.kind,
-        objectRef: humanDecisions.objectRef,
-        state: humanDecisions.state,
-        effectConditions: humanDecisions.effectConditions,
-      })
-      .from(humanDecisions)
-      .where(
-        and(
-          eq(humanDecisions.projectId, projectId),
-          eq(humanDecisions.objectRef, objectRef),
-          eq(humanDecisions.state, "APPLICABLE"),
-        ),
-      )
-      .limit(8);
-    row = rows.find((r) => r.pilotId === input.pilotId && r.kind === "RECORD_DECISION");
   }

+  const rows = await db
+    .select({
+      id: humanDecisions.id,
+      pilotId: humanDecisions.pilotId,
+      kind: humanDecisions.kind,
+      objectRef: humanDecisions.objectRef,
+      state: humanDecisions.state,
+      effectConditions: humanDecisions.effectConditions,
+    })
+    .from(humanDecisions)
+    .where(
+      and(
+        eq(humanDecisions.projectId, input.projectId),
+        eq(humanDecisions.objectRef, input.objectRef),
+        eq(humanDecisions.kind, "RECORD_DECISION"),
+        eq(humanDecisions.state, "APPLICABLE"),
+      ),
+    )
+    .limit(8);
+
+  return rows.find((r) => r.pilotId === input.pilotId);
+}
+
+/**
+ * Re-verify a prior or explicit binding without re-parsing pilot AUTHORIZE text.
+ * `decisionId` is required when reusing authority across turns.
+ */
+export async function reverifyWebPublicQueryAuthorityAtEgress(input: {
+  query: string;
+  projectId: string;
+  pilotId: string;
+  policyVersion?: string;
+  decisionId?: string | null;
+}): Promise<WebQueryAuthorityVerdict> {
+  const projectId = input.projectId.trim();
+  const query = normalizeWebPublicQuery(input.query);
+  if (!projectId || !query) {
+    return {
+      allowed: false,
+      reasonCode: "PROJECT_REQUIRED",
+      reason: "Exceptional WEB authorization requires project-scoped HumanDecision (D6)",
+      parsedQuery: query,
+    };
+  }
+
+  const objectRef = buildWebPublicQueryObjectRef({ query, projectId });
+  const decisionId = (input.decisionId ?? "").trim();
+  if (!decisionId) {
+    return {
+      allowed: false,
+      reasonCode: "DECISION_NOT_FOUND",
+      reason:
+        "Exceptional WEB egress requires durable decisionId reference (priorExactQueries alone insufficient)",
+      parsedQuery: query,
+      objectRef,
+    };
+  }
+
+  const row = await loadWebPublicQueryDecisionRow({
+    projectId,
+    pilotId: input.pilotId,
+    objectRef,
+    decisionId,
+  });
+
   if (!row) {
     return {
       allowed: false,
@@ -183,61 +432,108 @@ export async function evaluateWebPublicQueryAuthority(input: {
     };
   }

-  if (row.state !== "APPLICABLE") {
+  const verdict = validateWebPublicQueryDecisionRow(row, {
+    query,
+    projectId,
+    pilotId: input.pilotId,
+    policyVersion: input.policyVersion,
+    objectRef,
+  });
+  if (!verdict.allowed) {
+    return verdict;
+  }
+
+  const egress = await assertWebPublicQueryDecisionEgressProof(verdict.decisionId, projectId);
+  if (egress !== "ok") {
     return {
       allowed: false,
       reasonCode: "REVOKED_OR_SUPERSEDED",
-      reason: `decision state=${row.state}`,
+      reason: "HumanDecision revoked or no longer APPLICABLE at egress",
       parsedQuery: query,
       objectRef,
     };
   }

-  if (row.pilotId !== input.pilotId) {
+  return verdict;
+}
+
+/**
+ * Technical parse alone never grants egress. When projectId is present,
+ * require an APPLICABLE HumanDecision RECORD_DECISION bound to the payload.
+ */
+export async function evaluateWebPublicQueryAuthority(input: {
+  pilotText: string;
+  projectId: string | null | undefined;
+  pilotId: string;
+  /** Optional explicit decision id (inspectable act already recorded). */
+  decisionId?: string | null;
+  policyVersion?: string;
+}): Promise<WebQueryAuthorityVerdict> {
+  const projectId = (input.projectId ?? "").trim();
+  const parsed = extractPilotAuthorizedExactQueries(input.pilotText);
+  const dedicated = isDedicatedAuthorizePublicQueryAct(input.pilotText);
+
+  if (!dedicated || parsed.length === 0) {
+    return {
+      allowed: false,
+      reasonCode: "POISON_OR_NON_DEDICATED",
+      reason: "AUTHORIZE_PUBLIC_QUERY must be a dedicated Pilote act (parse ≠ D6)",
+    };
+  }
+
+  const query = parsed[0]!;
+  if (!projectId) {
     return {
       allowed: false,
-      reasonCode: "PILOT_MISMATCH",
-      reason: "Decision pilot does not match requesting pilot",
+      reasonCode: "PROJECT_REQUIRED",
+      reason:
+        "Exceptional WEB authorization requires project-scoped HumanDecision (D6)",
       parsedQuery: query,
-      objectRef,
     };
   }

-  if (row.objectRef !== objectRef) {
+  const objectRef = buildWebPublicQueryObjectRef({ query, projectId });
+  const row = await loadWebPublicQueryDecisionRow({
+    projectId,
+    pilotId: input.pilotId,
+    objectRef,
+    decisionId: (input.decisionId ?? "").trim() || undefined,
+  });
+
+  if (!row) {
     return {
       allowed: false,
-      reasonCode: "PAYLOAD_MISMATCH",
-      reason: "Decision objectRef fingerprint does not match query payload",
+      reasonCode: "DECISION_NOT_FOUND",
+      reason:
+        "No APPLICABLE HumanDecision RECORD_DECISION for exact public query payload",
       parsedQuery: query,
       objectRef,
     };
   }

-  if (row.effectConditions) {
-    try {
-      const parsedEc = JSON.parse(row.effectConditions) as { query?: string };
-      const ecQuery = (parsedEc.query ?? "").replace(/\s+/g, " ").trim();
-      if (ecQuery && ecQuery !== query.replace(/\s+/g, " ").trim()) {
-        return {
-          allowed: false,
-          reasonCode: "PAYLOAD_MISMATCH",
-          reason: "effectConditions.query does not match authorized query",
-          parsedQuery: query,
-          objectRef,
-        };
-      }
-    } catch {
-      /* effectConditions optional parse — objectRef remains binding */
-    }
+  const verdict = validateWebPublicQueryDecisionRow(row, {
+    query,
+    projectId,
+    pilotId: input.pilotId,
+    policyVersion: input.policyVersion,
+    objectRef,
+  });
+  if (!verdict.allowed) {
+    return verdict;
   }

-  return {
-    allowed: true,
-    decisionId: row.id,
-    objectRef,
-    query,
-    source: "HUMAN_DECISION_RECORD",
-  };
+  const egress = await assertWebPublicQueryDecisionEgressProof(verdict.decisionId, projectId);
+  if (egress !== "ok") {
+    return {
+      allowed: false,
+      reasonCode: "REVOKED_OR_SUPERSEDED",
+      reason: "HumanDecision revoked or no longer APPLICABLE",
+      parsedQuery: query,
+      objectRef,
+    };
+  }
+
+  return verdict;
 }

 /**
@@ -276,4 +572,4 @@ export function promoteExactQueriesFromAuthority(input: {
   limits.push("PILOT_EXACT_PARSE_NOT_PROMOTED");
   limits.push(input.authority?.reasonCode ?? "PARSE_NOT_AUTHORITY");
   return { exactQueries: [], limits };
-}
+}
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/src/domains/documents/pdf-extract-server.ts b/projects/sfia-studio-next/web/src/domains/documents/pdf-extract-server.ts
index d68403e1..4fbd8d0b 100644
--- a/projects/sfia-studio-next/web/src/domains/documents/pdf-extract-server.ts
+++ b/projects/sfia-studio-next/web/src/domains/documents/pdf-extract-server.ts
@@ -1,6 +1,7 @@
 /**
  * Server-side PDF text extraction (pdfjs-dist).
  * Input bytes must already be authorized by the owning domain (B1/D9/D4).
+ * Never call from the PDF viewer API — authorization and bytes delivery are separate.
  * No network I/O — disable worker and external font fetches.
  */

diff --git a/projects/sfia-studio-next/web/src/domains/documents/pdf-read-contract.ts b/projects/sfia-studio-next/web/src/domains/documents/pdf-read-contract.ts
index 8d7fbacf..c1a02d55 100644
--- a/projects/sfia-studio-next/web/src/domains/documents/pdf-read-contract.ts
+++ b/projects/sfia-studio-next/web/src/domains/documents/pdf-read-contract.ts
@@ -1,6 +1,11 @@
 /**
  * Shared PDF read contract — bytes already authorized by B1 / D9 / D4 owner.
  * The PDF processor never resolves access rights.
+ *
+ * Opposable access before parse:
+ * - WEB viewerToken path: `pdf-viewer-authorization` + authenticated Studio session
+ * - Git base64 in UI: authorized via D9 read_git_* gates before bytes reach the client
+ * - D4 / FIXTURE: explicit server-side contract only — never inferred from MIME/path alone
  */

 export type PdfProvenance = "WEB" | "GIT" | "D4" | "FIXTURE";
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
index bb118465..edabe059 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
@@ -104,12 +104,17 @@ export function aggregateTokenTotal(rows: TokenRow[]): MeasuredValue<number> {
 }

 /**
- * Observation coverage: share of provider requests that have *some* cost
- * observation (KNOWN or PARTIAL). PARTIAL still counts as observed — not as
+ * Observation coverage: share of *recorded* provider requests that have *some*
+ * cost observation (KNOWN or PARTIAL). PARTIAL still counts as observed — not as
  * financially complete.
+ *
+ * The denominator is the observation set, not a proven complete HTTP-emission
+ * census. Without an independent emission census, never present coverage as a
+ * fully-known 100% of all real emissions (mandate S4 — honest coverage).
  */
 export function computeMeasureCoveragePercent(
   rows: Array<{ costCoverage: string; providerRequests: number | null }>,
+  opts?: { emissionCensusComplete?: boolean },
 ): MeasuredValue<number> {
   if (rows.length === 0) return { kind: "empty" };
   let totalReq = 0;
@@ -131,11 +136,14 @@ export function computeMeasureCoveragePercent(
   if (totalReq <= 0) return { kind: "unknown", reason: "Requêtes non observées" };
   const pct = Math.round((observedReq / totalReq) * 100);
   const value = Math.min(100, Math.max(0, pct));
-  if (missingRequestCounts) {
+  const censusComplete = opts?.emissionCensusComplete === true;
+  if (missingRequestCounts || !censusComplete) {
     return {
       kind: "partial",
       value,
-      note: "Certaines lignes sans nombre de requêtes",
+      note: missingRequestCounts
+        ? "Certaines lignes sans nombre de requêtes"
+        : "Couverture sur observations recensées — population d'émissions HTTP non établie indépendamment",
     };
   }
   return { kind: "known", value };
@@ -143,10 +151,12 @@ export function computeMeasureCoveragePercent(

 /**
  * Estimation completeness: only KNOWN rows contribute. PARTIAL never inflates
- * this toward a fully-known financial picture.
+ * this toward a fully-known financial picture. Completeness is always relative
+ * to the recorded observation set unless an emission census is proven complete.
  */
 export function computeEstimationCompletenessPercent(
   rows: Array<{ costCoverage: string; providerRequests: number | null }>,
+  opts?: { emissionCensusComplete?: boolean },
 ): MeasuredValue<number> {
   if (rows.length === 0) return { kind: "empty" };
   let totalReq = 0;
@@ -171,13 +181,16 @@ export function computeEstimationCompletenessPercent(
   if (totalReq <= 0) return { kind: "unknown", reason: "Requêtes non observées" };
   const pct = Math.round((knownReq / totalReq) * 100);
   const value = Math.min(100, Math.max(0, pct));
-  if (missingRequestCounts || hasPartial) {
+  const censusComplete = opts?.emissionCensusComplete === true;
+  if (missingRequestCounts || hasPartial || !censusComplete) {
     return {
       kind: "partial",
       value,
       note: hasPartial
         ? "Mesures PARTIAL exclues de la complétude financière"
-        : "Certaines lignes sans nombre de requêtes",
+        : missingRequestCounts
+          ? "Certaines lignes sans nombre de requêtes"
+          : "Complétude sur observations recensées — population d'émissions HTTP non établie indépendamment",
     };
   }
   return { kind: "known", value };
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
index 0d8d33f5..e28aa34d 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
@@ -3,6 +3,7 @@ import {
   NORA_STUDY_MODEL,
   buildCognitivePolicy,
   resolveAdmittedResource,
+  buildResourceContinuitySuspendMessage,
   resolveContinuityCognitivePolicy,
 } from "@/domains/conversation/cognitive-policy";
 import {
@@ -425,4 +426,12 @@ describe("ML5 S3 — resolveContinuityCognitivePolicy", () => {
       "RESOURCE_CONTINUITY_PROPOSAL_UNSATISFIED_NO_HOLD",
     );
   });
+
+  it("Pilote suspend message states need/consequence without model-admin duty", () => {
+    const msg = buildResourceContinuitySuspendMessage("gpt-6-luna", "high");
+    expect(msg).toContain("sans obligation d'administrer les modèles");
+    expect(msg).toContain("Besoin restant");
+    expect(msg).toContain("Conséquence");
+    expect(msg).not.toContain("Indique une autre allocation");
+  });
 });
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
index a36eb494..3aade74a 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
@@ -71,12 +71,23 @@ describe("ML5 E06 — FinOps usage projection", () => {
   });

   it("estimation completeness excludes PARTIAL from fully-known rate", () => {
+    // Without independent emission census, observation coverage stays PARTIAL.
     const obs = computeMeasureCoveragePercent([
       { costCoverage: "KNOWN", providerRequests: 2 },
       { costCoverage: "PARTIAL", providerRequests: 2 },
     ]);
-    expect(obs.kind).toBe("known");
-    if (obs.kind === "known") expect(obs.value).toBe(100);
+    expect(obs.kind).toBe("partial");
+    if (obs.kind === "partial") expect(obs.value).toBe(100);
+
+    const obsCensus = computeMeasureCoveragePercent(
+      [
+        { costCoverage: "KNOWN", providerRequests: 2 },
+        { costCoverage: "PARTIAL", providerRequests: 2 },
+      ],
+      { emissionCensusComplete: true },
+    );
+    expect(obsCensus.kind).toBe("known");
+    if (obsCensus.kind === "known") expect(obsCensus.value).toBe(100);

     const fin = computeEstimationCompletenessPercent([
       { costCoverage: "KNOWN", providerRequests: 2 },
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
index f7bf1278..153f4525 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
@@ -2,14 +2,20 @@ import { createHash } from "node:crypto";
 import { afterEach, describe, expect, it } from "vitest";
 import {
   beginCampaignEnvelope,
-  campaignSlotsRemaining,
+  campaignHttpSlotsRemaining,
   commitProviderEmission,
+  createFrontierAwareFetch,
   getActiveCampaignEnvelope,
   getEmissionsObservedForTests,
+  getHttpAttempt,
+  getHttpBodiesObservedForTests,
+  ProviderEmissionRefusedError,
   releaseProviderEmission,
-  reserveProviderEmission,
+  reserveHttpEmission,
   runWithProviderEmissionStore,
+  runWithProviderEmissionStoreAsync,
   suspendCampaignEnvelope,
+  __resetFrontierOpenAIClientInstallForTests,
   __resetProviderEmissionFrontierForTests,
 } from "@/domains/conversation/provider-emission-frontier";

@@ -21,89 +27,175 @@ const laneEnv = {
   SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
 } as unknown as NodeJS.ProcessEnv;

-function reserve(kind: Parameters<typeof reserveProviderEmission>[0]["kind"]) {
-  return reserveProviderEmission({
-    kind,
-    skipModelAdmission: true,
-    env: laneEnv,
-  });
-}
-
-describe("S1 — provider emission frontier / campaign envelope", () => {
+describe("S2 — HTTP provider emission frontier", () => {
   afterEach(() => {
     __resetProviderEmissionFrontierForTests();
+    __resetFrontierOpenAIClientInstallForTests();
   });

-  it("refuses N+1 emission when campaign max is N", () => {
-    runWithProviderEmissionStore(() => {
-      beginCampaignEnvelope({ campaignId: "camp-test", maxAttempts: 2 });
-      const a = reserve("campaign.probe");
-      expect(a.ok).toBe(true);
-      if (!a.ok) throw new Error("a");
-      commitProviderEmission(a);
+  it("refuses N+1 HTTP emission when campaign max is N (oracle = substituted fetch)", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({ campaignId: "camp-http", maxHttpAttempts: 2, required: true });
+      const calls: string[] = [];
+      const fakeFetch = (async (input: RequestInfo | URL) => {
+        const url = String(input);
+        calls.push(url);
+        return new Response(JSON.stringify({ id: "resp", output: [] }), {
+          status: 200,
+          headers: { "content-type": "application/json" },
+        });
+      }) as typeof fetch;
+      const gated = createFrontierAwareFetch(fakeFetch);

-      const b = reserve("campaign.probe");
-      expect(b.ok).toBe(true);
-      if (!b.ok) throw new Error("b");
-      commitProviderEmission(b);
+      // Inject lane env for reserve path via process — temporarily.
+      const prev = { ...process.env };
+      Object.assign(process.env, laneEnv);
+      try {
+        const body = JSON.stringify({
+          model: "gpt-6.1-terra",
+          max_output_tokens: 100,
+          reasoning: { effort: "medium" },
+        });
+        // Seed effort via SDK admission path equivalent
+        const { assertSdkInvocationAdmission } = await import(
+          "@/domains/conversation/provider-emission-frontier"
+        );
+        assertSdkInvocationAdmission({
+          kind: "nora.generate_reply",
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          env: process.env,
+        });
+        await gated("https://api.openai.com/v1/responses", { method: "POST", body });
+        await gated("https://api.openai.com/v1/responses", { method: "POST", body });
+        await expect(
+          gated("https://api.openai.com/v1/responses", { method: "POST", body }),
+        ).rejects.toBeInstanceOf(ProviderEmissionRefusedError);
+      } finally {
+        for (const k of Object.keys(laneEnv)) {
+          if (prev[k] === undefined) delete process.env[k];
+          else process.env[k] = prev[k]!;
+        }
+      }

-      const c = reserve("campaign.probe");
-      expect(c.ok).toBe(false);
-      if (c.ok) throw new Error("c");
-      expect(c.reasonCode).toBe("CAMPAIGN_ENVELOPE_EXHAUSTED");
+      expect(calls).toHaveLength(2);
       expect(getEmissionsObservedForTests()).toBe(2);
-      expect(campaignSlotsRemaining()).toBe(0);
+      expect(campaignHttpSlotsRemaining()).toBe(0);
+      expect(getHttpBodiesObservedForTests()).toHaveLength(2);
     });
   });

-  it("releases unused reservation so a later attempt can proceed", () => {
-    runWithProviderEmissionStore(() => {
-      beginCampaignEnvelope({ maxAttempts: 1 });
-      const a = reserve("nora.generate_reply");
-      expect(a.ok).toBe(true);
-      if (!a.ok) throw new Error("a");
-      releaseProviderEmission({ ...a, contacted: false });
-      expect(campaignSlotsRemaining()).toBe(1);
-      const b = reserve("nora.generate_reply");
-      expect(b.ok).toBe(true);
-      if (!b.ok) throw new Error("b");
-      commitProviderEmission(b);
-      expect(getEmissionsObservedForTests()).toBe(1);
+  it("counts SDK retries as distinct HTTP attempts through fetch", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({ maxHttpAttempts: 2, required: true });
+      let n = 0;
+      const fakeFetch = (async () => {
+        n += 1;
+        if (n === 1) {
+          return new Response("temporary", { status: 500 });
+        }
+        return new Response(JSON.stringify({ ok: true }), { status: 200 });
+      }) as typeof fetch;
+      const gated = createFrontierAwareFetch(fakeFetch);
+      const prev = { ...process.env };
+      Object.assign(process.env, laneEnv);
+      try {
+        const { assertSdkInvocationAdmission } = await import(
+          "@/domains/conversation/provider-emission-frontier"
+        );
+        assertSdkInvocationAdmission({
+          kind: "campaign.probe",
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          env: process.env,
+        });
+        const body = JSON.stringify({
+          model: "gpt-6.1-terra",
+          max_output_tokens: 50,
+        });
+        await gated("https://api.openai.com/v1/responses", { method: "POST", body });
+        await gated("https://api.openai.com/v1/responses", { method: "POST", body });
+        await expect(
+          gated("https://api.openai.com/v1/responses", { method: "POST", body }),
+        ).rejects.toBeInstanceOf(ProviderEmissionRefusedError);
+      } finally {
+        for (const k of Object.keys(laneEnv)) {
+          if (prev[k] === undefined) delete process.env[k];
+          else process.env[k] = prev[k]!;
+        }
+      }
+      expect(getEmissionsObservedForTests()).toBe(2);
     });
   });

-  it("blocks after suspend even if slots remain", () => {
+  it("releases unused reservation so a later attempt can proceed", () => {
     runWithProviderEmissionStore(() => {
-      beginCampaignEnvelope({ maxAttempts: 5 });
-      suspendCampaignEnvelope("TEST_SUSPEND");
-      const r = reserve("public_web.isolated_search");
-      expect(r.ok).toBe(false);
-      if (r.ok) throw new Error("r");
-      expect(r.reasonCode).toBe("CAMPAIGN_SUSPENDED");
-      expect(getActiveCampaignEnvelope()?.suspendReason).toBe("TEST_SUSPEND");
+      beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
+      const prev = { ...process.env };
+      Object.assign(process.env, laneEnv);
+      try {
+        const a = reserveHttpEmission({
+          url: "https://api.openai.com/v1/responses",
+          body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
+          effort: "medium",
+        });
+        expect(a.ok).toBe(true);
+        if (!a.ok) throw new Error("a");
+        releaseProviderEmission({ ...a, contacted: false });
+        expect(getHttpAttempt(a.attemptId)?.state).toBe("RELEASED");
+        expect(campaignHttpSlotsRemaining()).toBe(1);
+        const b = reserveHttpEmission({
+          url: "https://api.openai.com/v1/responses",
+          body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
+          effort: "medium",
+        });
+        expect(b.ok).toBe(true);
+        if (!b.ok) throw new Error("b");
+        commitProviderEmission(b);
+        expect(getEmissionsObservedForTests()).toBe(1);
+        // Cannot release after commit
+        releaseProviderEmission({ ...b, contacted: false });
+        expect(getHttpAttempt(b.attemptId)?.state).toBe("COMMITTED");
+      } finally {
+        for (const k of Object.keys(laneEnv)) {
+          if (prev[k] === undefined) delete process.env[k];
+          else process.env[k] = prev[k]!;
+        }
+      }
     });
   });

-  it("oracle counts committed emissions, not maxTurns", () => {
+  it("blocks after suspend even if slots remain", () => {
     runWithProviderEmissionStore(() => {
-      beginCampaignEnvelope({ maxAttempts: 3 });
-      for (let i = 0; i < 3; i++) {
-        const r = reserve("other");
-        expect(r.ok).toBe(true);
-        if (!r.ok) throw new Error("r");
-        commitProviderEmission(r);
+      beginCampaignEnvelope({ maxHttpAttempts: 5, required: true });
+      suspendCampaignEnvelope("TEST_SUSPEND");
+      const prev = { ...process.env };
+      Object.assign(process.env, laneEnv);
+      try {
+        const r = reserveHttpEmission({
+          url: "https://api.openai.com/v1/responses",
+          body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
+          effort: "medium",
+        });
+        expect(r.ok).toBe(false);
+        if (r.ok) throw new Error("r");
+        expect(r.reasonCode).toBe("CAMPAIGN_SUSPENDED");
+        expect(getActiveCampaignEnvelope()?.suspendReason).toBe("TEST_SUSPEND");
+      } finally {
+        for (const k of Object.keys(laneEnv)) {
+          if (prev[k] === undefined) delete process.env[k];
+          else process.env[k] = prev[k]!;
+        }
       }
-      expect(getEmissionsObservedForTests()).toBe(3);
-      const blocked = reserve("other");
-      expect(blocked.ok).toBe(false);
     });
   });

   it("refuses incorrect lane configuration before emission", () => {
     runWithProviderEmissionStore(() => {
-      const r = reserveProviderEmission({
-        kind: "nora.generate_reply",
-        skipModelAdmission: true,
+      const r = reserveHttpEmission({
+        url: "https://api.openai.com/v1/responses",
+        body: JSON.stringify({ model: "gpt-6.1-terra" }),
+        effort: "medium",
         env: { STUDIO_LANE: "DEV" } as unknown as NodeJS.ProcessEnv,
       });
       expect(r.ok).toBe(false);
@@ -111,4 +203,45 @@ describe("S1 — provider emission frontier / campaign envelope", () => {
       expect(r.reasonCode).toBe("LANE_GUARD_FAILED");
     });
   });
+
+  it("fails closed when required campaign latch is active but ALS campaign is absent", () => {
+    runWithProviderEmissionStore(() => {
+      beginCampaignEnvelope({ campaignId: "camp-latch", maxHttpAttempts: 3, required: true });
+    });
+    // Outside ALS — latch still active from required campaign
+    const prev = { ...process.env };
+    Object.assign(process.env, laneEnv);
+    try {
+      const r = reserveHttpEmission({
+        url: "https://api.openai.com/v1/responses",
+        body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
+        effort: "medium",
+      });
+      expect(r.ok).toBe(false);
+      if (r.ok) throw new Error("r");
+      expect(r.reasonCode).toBe("CAMPAIGN_REQUIRED_MISSING");
+    } finally {
+      for (const k of Object.keys(laneEnv)) {
+        if (prev[k] === undefined) delete process.env[k];
+        else process.env[k] = prev[k]!;
+      }
+      __resetProviderEmissionFrontierForTests();
+    }
+  });
+
+  it("does not treat non-OpenAI URLs as provider emissions", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
+      let hit = 0;
+      const fakeFetch = (async () => {
+        hit += 1;
+        return new Response("ok");
+      }) as typeof fetch;
+      const gated = createFrontierAwareFetch(fakeFetch);
+      await gated("https://example.com/public");
+      expect(hit).toBe(1);
+      expect(getEmissionsObservedForTests()).toBe(0);
+      expect(campaignHttpSlotsRemaining()).toBe(1);
+    });
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-web-page-session.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-web-page-session.test.ts
index 7ff0e613..85222358 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-web-page-session.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-web-page-session.test.ts
@@ -1,6 +1,7 @@
 import { describe, expect, it, beforeEach } from "vitest";
 import {
   __resetWebPageSessionsForTests,
+  __webPageSessionStatsForTests,
   putWebPageSession,
   readWebPageProgressive,
   readWebPdfPages,
@@ -214,6 +215,44 @@ describe("ML5 progressive WEB page session", () => {
     expect(getWebPageSessionByViewerToken(later.viewerToken)?.pdfBytes).toBeUndefined();
   });

+  it("evicts oldest sessions when session cap is exceeded", () => {
+    process.env.SFIA_WEB_PAGE_SESSION_MAX = "2";
+    process.env.SFIA_WEB_PAGE_SESSION_MAX_BYTES = "200000";
+    const big = new Uint8Array(50);
+    putWebPageSession({
+      scope: SCOPE,
+      url: "https://example.com/a.pdf",
+      kind: "pdf",
+      text: "a",
+      contentFingerprint: "a",
+      pdfBytes: big,
+      limits: [],
+    });
+    putWebPageSession({
+      scope: SCOPE,
+      url: "https://example.com/b.pdf",
+      kind: "pdf",
+      text: "b",
+      contentFingerprint: "b",
+      pdfBytes: big,
+      limits: [],
+    });
+    expect(__webPageSessionStatsForTests().count).toBe(2);
+    putWebPageSession({
+      scope: SCOPE,
+      url: "https://example.com/c.pdf",
+      kind: "pdf",
+      text: "c",
+      contentFingerprint: "c",
+      pdfBytes: big,
+      limits: [],
+    });
+    const stats = __webPageSessionStatsForTests();
+    expect(stats.count).toBeLessThanOrEqual(2);
+    delete process.env.SFIA_WEB_PAGE_SESSION_MAX;
+    delete process.env.SFIA_WEB_PAGE_SESSION_MAX_BYTES;
+  });
+
   it("expires sessions and refuses expired reads", () => {
     process.env.SFIA_WEB_PAGE_SESSION_TTL_MS = "1";
     putWebPageSession({
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-web-query-authority.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-web-query-authority.test.ts
index 2a5c8c69..32a655fd 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-web-query-authority.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-web-query-authority.test.ts
@@ -1,14 +1,27 @@
 import { describe, expect, it } from "vitest";
 import {
+  buildWebPublicQueryEffectConditions,
   buildWebPublicQueryObjectRef,
+  parseWebPublicQueryEffectConditions,
   promoteExactQueriesFromAuthority,
+  validateWebPublicQueryDecisionRow,
+  WEB_PUBLIC_QUERY_DESTINATION,
 } from "@/domains/conversation/web-public-query-authority";
 import {
   extractPilotAuthorizedExactQueries,
   resolvePublicWebRegistry,
 } from "@/domains/conversation/public-web-registry";

-describe("S4 — WEB public query authority (parse ≠ D6)", () => {
+const basePayload = {
+  query: "HTTP/3 site:datatracker.ietf.org",
+  destination: WEB_PUBLIC_QUERY_DESTINATION,
+  purpose: "public protocol documentation research",
+  projectId: "prj_test",
+  pilotId: "pilot_a",
+  policyVersion: "pol_v3",
+};
+
+describe("S5 — WEB public query authority (parse ≠ D6)", () => {
   it("rejects negation / example framing around AUTHORIZE", () => {
     expect(
       extractPilotAuthorizedExactQueries(
@@ -35,6 +48,18 @@ describe("S4 — WEB public query authority (parse ≠ D6)", () => {
     expect(r.limits).toContain("PILOT_EXACT_AWAITING_D6_DECISION");
   });

+  it("ignores priorExactQueries strings without d6 binding", () => {
+    const q = "HTTP/3 site:datatracker.ietf.org";
+    const r = resolvePublicWebRegistry({
+      pilotText: "bonjour",
+      priorExactQueries: [q],
+      haystack: "suite",
+      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },
+    });
+    expect(r.exactQueries).not.toContain(q);
+    expect(r.limits).toContain("PRIOR_EXACT_STRINGS_IGNORED_WITHOUT_D6_BINDING");
+  });
+
   it("promotes only when d6BoundExactQueries supplied", () => {
     const q = "HTTP/3 site:datatracker.ietf.org";
     const r = resolvePublicWebRegistry({
@@ -72,4 +97,78 @@ describe("S4 — WEB public query authority (parse ≠ D6)", () => {
     expect(r.exactQueries).toEqual([]);
     expect(r.limits).toContain("PILOT_EXACT_PARSE_NOT_PROMOTED");
   });
-});
+
+  it("parseWebPublicQueryEffectConditions fails closed on missing/malformed", () => {
+    expect(parseWebPublicQueryEffectConditions(null).ok).toBe(false);
+    expect(parseWebPublicQueryEffectConditions("not-json").ok).toBe(false);
+    expect(parseWebPublicQueryEffectConditions("{}").ok).toBe(false);
+    const valid = parseWebPublicQueryEffectConditions(
+      buildWebPublicQueryEffectConditions(basePayload),
+    );
+    expect(valid.ok).toBe(true);
+    if (!valid.ok) throw new Error("expected ok");
+    expect(valid.payload.policyVersion).toBe("pol_v3");
+    expect(valid.payload.destination).toBe(WEB_PUBLIC_QUERY_DESTINATION);
+  });
+
+  it("validateWebPublicQueryDecisionRow enforces kind, state, policy, payload", () => {
+    const objectRef = buildWebPublicQueryObjectRef(basePayload);
+    const ec = buildWebPublicQueryEffectConditions(basePayload);
+    const row = {
+      id: "dec_abc",
+      pilotId: basePayload.pilotId,
+      kind: "RECORD_DECISION",
+      objectRef,
+      state: "APPLICABLE",
+      effectConditions: ec,
+    };
+
+    const ok = validateWebPublicQueryDecisionRow(row, {
+      query: basePayload.query,
+      projectId: basePayload.projectId,
+      pilotId: basePayload.pilotId,
+      policyVersion: basePayload.policyVersion,
+      objectRef,
+    });
+    expect(ok.allowed).toBe(true);
+
+    const wrongKind = validateWebPublicQueryDecisionRow(
+      { ...row, kind: "OPEN_CYCLE" },
+      {
+        query: basePayload.query,
+        projectId: basePayload.projectId,
+        pilotId: basePayload.pilotId,
+        policyVersion: basePayload.policyVersion,
+        objectRef,
+      },
+    );
+    expect(wrongKind.allowed).toBe(false);
+    if (wrongKind.allowed) throw new Error("expected deny");
+    expect(wrongKind.reasonCode).toBe("KIND_MISMATCH");
+
+    const wrongPolicy = validateWebPublicQueryDecisionRow(row, {
+      query: basePayload.query,
+      projectId: basePayload.projectId,
+      pilotId: basePayload.pilotId,
+      policyVersion: "pol_other",
+      objectRef,
+    });
+    expect(wrongPolicy.allowed).toBe(false);
+    if (wrongPolicy.allowed) throw new Error("expected deny");
+    expect(wrongPolicy.reasonCode).toBe("POLICY_VERSION_MISMATCH");
+
+    const noEc = validateWebPublicQueryDecisionRow(
+      { ...row, effectConditions: null },
+      {
+        query: basePayload.query,
+        projectId: basePayload.projectId,
+        pilotId: basePayload.pilotId,
+        policyVersion: basePayload.policyVersion,
+        objectRef,
+      },
+    );
+    expect(noEc.allowed).toBe(false);
+    if (noEc.allowed) throw new Error("expected deny");
+    expect(noEc.reasonCode).toBe("EFFECT_CONDITIONS_INVALID");
+  });
+});
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts b/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
index 71782e22..25c04aeb 100644
--- a/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
@@ -125,8 +125,14 @@ describe("FIX-SDK / SDK-RETRY — no automatic second run()", () => {
       },
       run: runMock,
       setTracingDisabled: vi.fn(),
+      setDefaultOpenAIClient: vi.fn(),
       tool: vi.fn(),
     }));
+    vi.doMock("openai", () => ({
+      default: class {
+        constructor(_opts: unknown) {}
+      },
+    }));

     const { generateNoraReply: gen } = await import("@/domains/conversation/nora-adapter");
     const policy = buildCognitivePolicy("Compare option A et B", "TEST_BOUNDARY");
```

## Coverage matrix (files)

| File | Role |
|---|---|
| provider-emission-frontier.ts | HTTP frontier + campaign |
| nora-adapter.ts / public-web-search-frontier.ts | Emit wiring |
| web-public-query-authority.ts | D6 WEB |
| pdf-viewer-authorization.ts | PDF access |
| usage-projection.ts | FinOps honesty |
| cognitive-policy.ts | Suspend message |
| package.json | Build NODE_ENV |

## Morris decisions required

1. Scope of capability reserves B/C before any G-RECETTE.
2. Whether to consume §12.1 LIVE multi-Responses campaign retest.
3. Whether to extend provisional policy v0.2 into RECETTE (not activated).
4. F2 visual qualification timing.
5. Git PDF text corpus authorization if needed.

## END OF REVIEW PACK
