/**
 * Sequence D / D3 — PDF viewer endpoint with real DEV PG habilitation (:5433 → e2e).
 * Oracle: HTTP status + returned bytes. viewerToken alone is never authority.
 */
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  cognitiveWorks,
  pilots,
  preparations,
  projects,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  __resetWebPageSessionsForTests,
  putWebPageSession,
} from "@/domains/conversation/public-web-page-session";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  openOrCreatePreparation,
  updatePreview,
} from "@/domains/preparation/service";

vi.mock("@/domains/identity/session", () => ({
  requireStudioSession: vi.fn(),
}));

import { requireStudioSession } from "@/domains/identity/session";
import { GET } from "@/app/api/web/pdf-viewer/[viewerToken]/route";

const PDF_BYTES = new Uint8Array([
  0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x34, 0x0a, 0x25, 0xe2, 0xe3, 0xcf,
  0xd3,
]);

const dockerOk = () => Boolean(process.env.DATABASE_URL?.includes("5433"));

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({
    id,
    displayName: label,
    githubUserId: `gh-${id}`,
  });
  return id;
}

async function seedOwnerProjectWork(label: string) {
  const ownerPilotId = await seedPilot(`${label}-owner`);
  const otherPilotId = await seedPilot(`${label}-other`);

  const prep = await openOrCreatePreparation(ownerPilotId);
  await updatePreview(ownerPilotId, prep.id, `${label}-proj`, "PDF auth PG");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0]!;
  const created = await createProjectCommand({
    pilotId: ownerPilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: `${label}-proj`,
    previewSummary: "PDF auth PG",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`project create failed: ${created.status}`);
  }
  const projectId = created.projectId!;

  const workId = newId("cgw");
  await db.insert(cognitiveWorks).values({
    id: workId,
    ownerPilotId,
    preparationId: prep.id,
    projectId,
    status: "RUNNING",
    revision: 1,
    objective: "PDF viewer auth",
    expectedOutcome: "bytes",
    stateJson: "{}",
    resourcesJson: "{}",
    productionJson: "{}",
  });

  return {
    ownerPilotId,
    otherPilotId,
    projectId,
    cognitiveWorkId: workId,
    preparationId: prep.id,
  };
}

function seedSession(scope: {
  lane: string;
  projectId: string;
  cognitiveWorkId: string;
  ownerPilotId: string;
}, fingerprint = "fp-pg-v1") {
  return putWebPageSession({
    scope,
    url: "https://example.com/pg-auth.pdf",
    kind: "pdf",
    text: "page1",
    pageCount: 1,
    contentFingerprint: fingerprint,
    pdfBytes: PDF_BYTES,
    limits: ["PG_TEST"],
  });
}

describe.skipIf(!dockerOk())("ML5 PDF viewer authorization PG endpoint", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
  });

  beforeEach(() => {
    __resetWebPageSessionsForTests();
    vi.mocked(requireStudioSession).mockReset();
    process.env.STUDIO_LANE = "DEV";
  });

  it("nominal GET 200 returns exact PDF bytes", async () => {
    const seed = await seedOwnerProjectWork("pdf-nom");
    const page = seedSession({
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: seed.cognitiveWorkId,
      ownerPilotId: seed.ownerPilotId,
    });
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.ownerPilotId,
      displayName: "Owner",
      sessionId: "pg-sess",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    expect(res.status).toBe(200);
    const buf = new Uint8Array(await res.arrayBuffer());
    expect([...buf]).toEqual([...PDF_BYTES]);
    expect(res.headers.get("X-Content-Fingerprint")).toBe("fp-pg-v1");
  });

  it("other pilot → 403 VIEWER_OWNER_MISMATCH (no bytes)", async () => {
    const seed = await seedOwnerProjectWork("pdf-other-pilot");
    const page = seedSession({
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: seed.cognitiveWorkId,
      ownerPilotId: seed.ownerPilotId,
    });
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.otherPilotId,
      displayName: "Intruder",
      sessionId: "pg-sess-2",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.error).toBe("VIEWER_OWNER_MISMATCH");
    expect(res.headers.get("Content-Type")).not.toMatch(/pdf/i);
  });

  it("other project work binding → 403", async () => {
    const seed = await seedOwnerProjectWork("pdf-other-proj");
    const alienWork = newId("cgw");
    await db.insert(cognitiveWorks).values({
      id: alienWork,
      ownerPilotId: seed.ownerPilotId,
      preparationId: seed.preparationId,
      projectId: null,
      status: "RUNNING",
      revision: 1,
      objective: "unbound",
      expectedOutcome: "x",
      stateJson: "{}",
      resourcesJson: "{}",
      productionJson: "{}",
    });
    const page = seedSession({
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: alienWork,
      ownerPilotId: seed.ownerPilotId,
    });
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.ownerPilotId,
      displayName: "Owner",
      sessionId: "pg-sess",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    expect(res.status).toBe(403);
    const body = await res.json();
    expect([
      "VIEWER_WORK_PROJECT_REQUIRED",
      "VIEWER_WORK_PROJECT_MISMATCH",
      "VIEWER_PROJECT_ACCESS_DENIED",
    ]).toContain(body.error);
  });

  it("habilitation revoked (project ownership transferred) → 403", async () => {
    const seed = await seedOwnerProjectWork("pdf-revoked");
    await db
      .update(projects)
      .set({ ownerPilotId: seed.otherPilotId })
      .where(eq(projects.id, seed.projectId));
    const page = seedSession({
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: seed.cognitiveWorkId,
      ownerPilotId: seed.ownerPilotId,
    });
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.ownerPilotId,
      displayName: "Former",
      sessionId: "pg-sess",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.error).toBe("VIEWER_PROJECT_ACCESS_DENIED");
  });

  it("wrong lane → 403 VIEWER_LANE_MISMATCH", async () => {
    const seed = await seedOwnerProjectWork("pdf-lane");
    const page = seedSession({
      lane: "RECETTE",
      projectId: seed.projectId,
      cognitiveWorkId: seed.cognitiveWorkId,
      ownerPilotId: seed.ownerPilotId,
    });
    process.env.STUDIO_LANE = "DEV";
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.ownerPilotId,
      displayName: "Owner",
      sessionId: "pg-sess",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.error).toBe("VIEWER_LANE_MISMATCH");
  });

  it("expired token → 410", async () => {
    const seed = await seedOwnerProjectWork("pdf-exp");
    const page = seedSession({
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: seed.cognitiveWorkId,
      ownerPilotId: seed.ownerPilotId,
    });
    // Force expiry via session map mutation through put with past TTL env.
    const prev = process.env.SFIA_WEB_PAGE_SESSION_TTL_MS;
    process.env.SFIA_WEB_PAGE_SESSION_TTL_MS = "1";
    __resetWebPageSessionsForTests();
    const short = seedSession({
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: seed.cognitiveWorkId,
      ownerPilotId: seed.ownerPilotId,
    });
    await new Promise((r) => setTimeout(r, 5));
    if (prev === undefined) delete process.env.SFIA_WEB_PAGE_SESSION_TTL_MS;
    else process.env.SFIA_WEB_PAGE_SESSION_TTL_MS = prev;

    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.ownerPilotId,
      displayName: "Owner",
      sessionId: "pg-sess",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: short.viewerToken }),
    });
    // Expired sessions may be purged (404) or assessed as 410.
    expect([410, 404]).toContain(res.status);
    if (res.status === 410) {
      const body = await res.json();
      expect(body.error).toBe("VIEWER_SESSION_EXPIRED");
    }
  });

  it("invalid work attachment (unknown work id) → 403", async () => {
    const seed = await seedOwnerProjectWork("pdf-bad-work");
    const page = seedSession({
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: newId("cgw"),
      ownerPilotId: seed.ownerPilotId,
    });
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.ownerPilotId,
      displayName: "Owner",
      sessionId: "pg-sess",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.error).toBe("VIEWER_PROJECT_ACCESS_DENIED");
  });

  it("version changed rotates token — old token 404, new 200", async () => {
    const seed = await seedOwnerProjectWork("pdf-ver");
    const scope = {
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: seed.cognitiveWorkId,
      ownerPilotId: seed.ownerPilotId,
    };
    const first = seedSession(scope, "fp-old");
    const second = putWebPageSession({
      scope,
      url: "https://example.com/pg-auth.pdf",
      kind: "pdf",
      text: "page1-rev",
      pageCount: 1,
      contentFingerprint: "fp-new",
      pdfBytes: new Uint8Array([...PDF_BYTES, 0x0a]),
      limits: [],
    });
    expect(second.viewerToken).not.toBe(first.viewerToken);
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.ownerPilotId,
      displayName: "Owner",
      sessionId: "pg-sess",
      authMode: "dev-test-login",
    });
    const oldRes = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: first.viewerToken }),
    });
    expect(oldRes.status).toBe(404);
    const newRes = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: second.viewerToken }),
    });
    expect(newRes.status).toBe(200);
    expect(newRes.headers.get("X-Content-Fingerprint")).toBe("fp-new");
    const buf = new Uint8Array(await newRes.arrayBuffer());
    expect(buf.byteLength).toBe(PDF_BYTES.byteLength + 1);
  });
});
