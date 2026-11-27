/**
 * ML3 — integrated composer dictation via real route handlers + PG project ownership.
 */
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

const devSessionRef = vi.hoisted(() => {
  process.env.STUDIO_LANE = "DEV";
  process.env.STUDIO_DEV_TEST_LOGIN = "1";
  process.env.SFIA_COMPOSER_DICTATION = "1";
  process.env.SFIA_DICTATION_TRANSPORT = "fixture";
  process.env.SFIA_DICTATION_SUBSTITUTED = "1";
  process.env.VITEST = "true";
  process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
  // Isolate from qualify shell leaks (COMMIT_DELAY=80 races T02/T11 finalize).
  delete process.env.SFIA_DICTATION_FIXTURE_COMMIT_DELAY_MS;
  delete process.env.SFIA_DICTATION_FIXTURE_COMPLETE_DELAY_MS;
  delete process.env.SFIA_DICTATION_FIXTURE_AUTO_TRANSCRIPT;
  delete process.env.OPENAI_API_KEY;
  return { token: "", pilotId: "" };
});

vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (name: string) => {
      const token = devSessionRef.token;
      if (!token) return undefined;
      if (name !== "sfia_studio_session__DEV") return undefined;
      return { name, value: token };
    },
  }),
  headers: async () => new Headers(),
}));

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { createDevTestSession } from "@/domains/identity/session";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { POST as createSession } from "@/app/api/projects/[projectId]/dictation/sessions/route";
import { POST as appendAudio } from "@/app/api/projects/[projectId]/dictation/sessions/[sessionId]/audio/route";
import { POST as finalizeSession } from "@/app/api/projects/[projectId]/dictation/sessions/[sessionId]/finalize/route";
import { POST as cancelSession } from "@/app/api/projects/[projectId]/dictation/sessions/[sessionId]/cancel/route";
import { _resetDictationSessionsForTests } from "@/domains/conversation/composer-dictation-session";
import {
  _resetDictationFixtureRegistry,
  getDictationFixtureTransport,
} from "@/domains/conversation/composer-dictation-transport-fixture";
import * as usageAccounting from "@/domains/conversation/usage-accounting";

async function bindDevSession(which: "a" | "b" = "a") {
  const sess = await createDevTestSession(which, { host: "127.0.0.1:3100" });
  devSessionRef.token = sess.token;
  devSessionRef.pilotId = sess.pilotId;
  return sess;
}

async function seedOwnedProject(label: string, pilotId?: string) {
  const owner = pilotId ?? devSessionRef.pilotId;
  if (!owner) throw new Error("bind session before seed");
  const prep = await openOrCreatePreparation(owner);
  const projectName = `${label}-${newId("p").slice(-8)}`;
  await updatePreview(owner, prep.id, projectName, "dictation integration");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0];
  const created = await createProjectCommand({
    pilotId: owner,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName,
    previewSummary: "dictation integration",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED") throw new Error(`seed failed: ${created.status}`);
  return { projectId: created.projectId, pilotId: owner, preparationId: prep.id };
}

async function routeJson<T extends Record<string, unknown>>(
  res: Response,
): Promise<{ status: number; body: T }> {
  let body = {} as T;
  try {
    body = (await res.json()) as T;
  } catch {
    body = {} as T;
  }
  return { status: res.status, body };
}

async function postCreateSession(projectId: string, body: Record<string, unknown>) {
  const res = await createSession(
    new Request(`http://127.0.0.1:3100/api/projects/${projectId}/dictation/sessions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
    { params: Promise.resolve({ projectId }) },
  );
  return routeJson<{ ok?: boolean; sessionId?: string; code?: string }>(res);
}

async function postAppend(
  projectId: string,
  sessionId: string,
  body: { pcmBase64: string; seq?: number },
) {
  const res = await appendAudio(
    new Request(
      `http://127.0.0.1:3100/api/projects/${projectId}/dictation/sessions/${sessionId}/audio`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    ),
    { params: Promise.resolve({ projectId, sessionId }) },
  );
  return routeJson<{ ok?: boolean; code?: string }>(res);
}

const PCM = Buffer.alloc(320, 1).toString("base64");

describe("PG REAL — ML3 composer dictation integrated (T01–T11)", () => {
  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    await bindDevSession("a");
  });

  afterEach(() => {
    _resetDictationSessionsForTests();
    _resetDictationFixtureRegistry();
    process.env.SFIA_COMPOSER_DICTATION = "1";
  });

  it("T01 — seq 0,1 accepted; seq 2 rejected; fixture records appends", async () => {
    const { projectId } = await seedOwnedProject("ml3-dict-t01");
    const created = await postCreateSession(projectId, { baselineDraft: "x", conversationKey: projectId });
    expect(created.status).toBe(200);
    expect(created.body.ok).toBe(true);
    const sid = created.body.sessionId!;
    const fx = getDictationFixtureTransport(sid);
    expect(fx).toBeTruthy();

    expect((await postAppend(projectId, sid, { pcmBase64: PCM, seq: 0 })).body.ok).toBe(true);
    const skip = await postAppend(projectId, sid, { pcmBase64: PCM, seq: 2 });
    expect(skip.body.ok).toBe(false);
    expect(skip.body.code).toBe("SEQ_OUT_OF_ORDER");
    expect((await postAppend(projectId, sid, { pcmBase64: PCM, seq: 1 })).body.ok).toBe(true);
    expect(
      fx!.sent.filter((s) => s.type === "input_audio_buffer.append").length,
    ).toBeGreaterThanOrEqual(2);
  });

  it("T02 — multi-item deltas/completions preserve order in finalize", async () => {
    const { projectId } = await seedOwnedProject("ml3-dict-t02");
    const created = await postCreateSession(projectId, {
      baselineDraft: "Préface",
      conversationKey: projectId,
    });
    const sid = created.body.sessionId!;
    const fx = getDictationFixtureTransport(sid)!;
    await postAppend(projectId, sid, { pcmBase64: PCM, seq: 0 });

    fx.push({
      type: "conversation.item.input_audio_transcription.delta",
      item_id: "item_a",
      delta: " un",
    });
    fx.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "item_a",
      transcript: "segment A",
    });
    fx.push({
      type: "conversation.item.input_audio_transcription.delta",
      item_id: "item_b",
      delta: " deux",
    });
    fx.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "item_b",
      transcript: "segment B",
    });

    const finResPromise = finalizeSession(
      new Request(
        `http://127.0.0.1:3100/api/projects/${projectId}/dictation/sessions/${sid}/finalize`,
        { method: "POST" },
      ),
      { params: Promise.resolve({ projectId, sessionId: sid }) },
    );
    await new Promise((r) => setTimeout(r, 5));
    fx.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "fixture_item_1",
      transcript: "",
    });
    const finRes = await finResPromise;
    const fin = await routeJson<{ ok?: boolean; draft?: string; transcript?: string }>(finRes);
    expect(fin.body.ok).toBe(true);
    expect(fin.body.transcript).toContain("segment A");
    expect(fin.body.transcript).toContain("segment B");
    expect(fin.body.draft).toMatch(/Préface/);
    expect(fin.body.draft).toContain("segment A");
    expect(fin.body.draft).toContain("segment B");
  });

  it("T04 — baseline + transcript merged once at insert offset", async () => {
    const { projectId } = await seedOwnedProject("ml3-dict-t04");
    const baseline = "Avant | Après";
    const offset = baseline.indexOf("|");
    const created = await postCreateSession(projectId, {
      baselineDraft: baseline,
      insertOffset: offset,
      conversationKey: projectId,
    });
    const sid = created.body.sessionId!;
    const fx = getDictationFixtureTransport(sid)!;
    fx.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "mid",
      transcript: "milieu",
    });
    const finRes = await finalizeSession(
      new Request(
        `http://127.0.0.1:3100/api/projects/${projectId}/dictation/sessions/${sid}/finalize`,
        { method: "POST" },
      ),
      { params: Promise.resolve({ projectId, sessionId: sid }) },
    );
    const fin = await routeJson<{ ok?: boolean; draft?: string }>(finRes);
    expect(fin.body.ok).toBe(true);
    expect(fin.body.draft).toBe("Avant milieu | Après");
  });

  it("T06 — cancel restores baseline", async () => {
    const { projectId } = await seedOwnedProject("ml3-dict-t06");
    const created = await postCreateSession(projectId, {
      baselineDraft: "gardé",
      conversationKey: projectId,
    });
    const sid = created.body.sessionId!;
    const fx = getDictationFixtureTransport(sid)!;
    fx.push({
      type: "conversation.item.input_audio_transcription.delta",
      item_id: "x",
      delta: "temporaire",
    });
    const cancelRes = await cancelSession(
      new Request(
        `http://127.0.0.1:3100/api/projects/${projectId}/dictation/sessions/${sid}/cancel`,
        { method: "POST" },
      ),
      { params: Promise.resolve({ projectId, sessionId: sid }) },
    );
    const cancel = await routeJson<{ ok?: boolean; draft?: string }>(cancelRes);
    expect(cancel.body.ok).toBe(true);
    expect(cancel.body.draft).toBe("gardé");
  });

  it("T07 — cancel during finalize → CANCELLED not completed", async () => {
    const { projectId } = await seedOwnedProject("ml3-dict-t07");
    const created = await postCreateSession(projectId, {
      baselineDraft: "base",
      conversationKey: projectId,
    });
    const sid = created.body.sessionId!;
    const fx = getDictationFixtureTransport(sid)!;
    fx.push({
      type: "input_audio_buffer.committed",
      item_id: "item_wait",
    });
    const finPromise = finalizeSession(
      new Request(
        `http://127.0.0.1:3100/api/projects/${projectId}/dictation/sessions/${sid}/finalize`,
        { method: "POST" },
      ),
      { params: Promise.resolve({ projectId, sessionId: sid }) },
    );
    await new Promise((r) => setTimeout(r, 8));
    await cancelSession(
      new Request(
        `http://127.0.0.1:3100/api/projects/${projectId}/dictation/sessions/${sid}/cancel`,
        { method: "POST" },
      ),
      { params: Promise.resolve({ projectId, sessionId: sid }) },
    );
    const fin = await routeJson<{ ok?: boolean; code?: string; draft?: string }>(await finPromise);
    expect(fin.body.ok).toBe(false);
    expect(fin.body.code).toBe("CANCELLED");
    expect(fin.body.draft).toBe("base");
  });

  it("T08 — provider error fails session and blocks finalize", async () => {
    const { projectId } = await seedOwnedProject("ml3-dict-t08");
    const created = await postCreateSession(projectId, {
      baselineDraft: "z",
      conversationKey: projectId,
    });
    const sid = created.body.sessionId!;
    const fx = getDictationFixtureTransport(sid)!;
    fx.push({
      type: "conversation.item.input_audio_transcription.failed",
      item_id: "bad",
      error: "fixture provider fault",
    });
    await new Promise((r) => setTimeout(r, 5));
    const finRes = await finalizeSession(
      new Request(
        `http://127.0.0.1:3100/api/projects/${projectId}/dictation/sessions/${sid}/finalize`,
        { method: "POST" },
      ),
      { params: Promise.resolve({ projectId, sessionId: sid }) },
    );
    const fin = await routeJson<{ ok?: boolean; code?: string }>(finRes);
    expect(fin.body.ok).toBe(false);
    expect(fin.body.code).toBe("FAILED");
  });

  it("T10 — FLAG_OFF denies create; foreign project → FORBIDDEN", async () => {
    const owned = await seedOwnedProject("ml3-dict-t10-own");
    process.env.SFIA_COMPOSER_DICTATION = "0";
    const denied = await postCreateSession(owned.projectId, {
      baselineDraft: "",
      conversationKey: owned.projectId,
    });
    expect(denied.status).toBe(403);
    expect(denied.body.code).toBe("FLAG_OFF");
    process.env.SFIA_COMPOSER_DICTATION = "1";

    const foreignPilot = newId("pilot");
    await db.insert(pilots).values({
      id: foreignPilot,
      displayName: "ml3-dict-foreign",
      githubUserId: `gh-${foreignPilot}`,
    });
    const foreignPrep = await openOrCreatePreparation(foreignPilot);
    const foreignName = `foreign-${newId("p").slice(-8)}`;
    await updatePreview(foreignPilot, foreignPrep.id, foreignName, "x");
    const foreignPrepRow = (
      await db.select().from(preparations).where(eq(preparations.id, foreignPrep.id))
    )[0];
    const foreignProject = await createProjectCommand({
      pilotId: foreignPilot,
      preparationId: foreignPrep.id,
      expectedCreationRevision: foreignPrepRow.creationRevision,
      projectName: foreignName,
      previewSummary: "x",
      idempotencyKey: newId("idem"),
    });
    if (foreignProject.status !== "CREATED") throw new Error("foreign seed failed");
    const intrude = await postCreateSession(foreignProject.projectId, {
      baselineDraft: "",
      conversationKey: foreignProject.projectId,
    });
    expect(intrude.status).toBeGreaterThanOrEqual(400);
  });

  it("T11 — finalize with PCM records FinOps observation", async () => {
    const spy = vi
      .spyOn(usageAccounting, "recordProviderUsageObservation")
      .mockResolvedValue({
        id: "obs-test",
        created: true,
      } as Awaited<ReturnType<typeof usageAccounting.recordProviderUsageObservation>>);

    const { projectId } = await seedOwnedProject("ml3-dict-t11");
    const created = await postCreateSession(projectId, {
      baselineDraft: "fin",
      conversationKey: projectId,
    });
    const sid = created.body.sessionId!;
    const fx = getDictationFixtureTransport(sid)!;
    await postAppend(projectId, sid, { pcmBase64: PCM, seq: 0 });
    fx.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "fin_item",
      transcript: "observé",
    });
    const finResPromise = finalizeSession(
      new Request(
        `http://127.0.0.1:3100/api/projects/${projectId}/dictation/sessions/${sid}/finalize`,
        { method: "POST" },
      ),
      { params: Promise.resolve({ projectId, sessionId: sid }) },
    );
    await new Promise((r) => setTimeout(r, 5));
    fx.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "fixture_item_1",
      transcript: "",
    });
    await finResPromise;
    await new Promise((r) => setTimeout(r, 20));
    expect(spy).toHaveBeenCalled();
    const call = spy.mock.calls.find(
      (c) => c[0]?.operation === "audio.composer_dictation",
    );
    expect(call).toBeTruthy();
    expect(call?.[0]?.projectId).toBe(projectId);
    spy.mockRestore();
  });
});