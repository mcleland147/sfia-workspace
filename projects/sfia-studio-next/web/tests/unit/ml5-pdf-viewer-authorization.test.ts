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
    if (!r.ok) {
      expect(r.error).toBe("VIEWER_WORK_PROJECT_MISMATCH");
      expect(r.limits).toContain("WORK_PROJECT_BINDING");
    }
  });

  it("refuses project-scoped session when work has no project binding", () => {
    const page = seedPdfSession();
    const r = assessPdfViewerAccess({
      session: { pilotId: SCOPE.ownerPilotId, sessionId: "sess-1" },
      page,
      processLane: "DEV",
      habilitation: {
        ...HAB,
        workProjectId: null,
      },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.error).toBe("VIEWER_WORK_PROJECT_REQUIRED");
      expect(r.limits).toContain("WORK_PROJECT_BINDING");
    }
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
});