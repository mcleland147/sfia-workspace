/**
 * Gap A — PATCH /api/preparations/{id} CAS + HTTP classification (PG REAL).
 */
import { beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

/**
 * COOKIE name in session.ts is frozen at module import — force DEV before any session import.
 */
const devSessionRef = vi.hoisted(() => {
  process.env.STUDIO_LANE = "DEV";
  process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
  process.env.STUDIO_DEV_TEST_LOGIN = "1";
  delete process.env.OPENAI_API_KEY;
  return { token: "" };
});

vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (name: string) => {
      const token = devSessionRef.token;
      if (!token) return undefined;
      // Must match session.ts studioSessionCookieName() at import time (DEV).
      if (name !== "sfia_studio_session__DEV") return undefined;
      return { name, value: token };
    },
  }),
  headers: async () => new Headers(),
}));

import { PATCH } from "@/app/api/preparations/[preparationId]/route";
import { createDevTestSession } from "@/domains/identity/session";
import { db } from "@/db/client";
import { pilots, preparations } from "@/db/schema";
import { eq } from "drizzle-orm";
import { newId } from "@/lib/ids";
import {
  applyPilotApercuCorrection,
  getPreparationContext,
  openOrCreatePreparation,
  updatePreview,
} from "@/domains/preparation/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function bindDevSession(which: "a" | "b") {
  const sess = await createDevTestSession(which, { host: "127.0.0.1:3100" });
  devSessionRef.token = sess.token;
  return sess;
}

async function patchHttp(
  preparationId: string,
  body: unknown,
): Promise<{ status: number; body: Record<string, unknown> }> {
  const res = await PATCH(
    new Request(`http://127.0.0.1:3100/api/preparations/${preparationId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
    { params: Promise.resolve({ preparationId }) },
  );
  let parsed: Record<string, unknown> = {};
  try {
    parsed = (await res.json()) as Record<string, unknown>;
  } catch {
    parsed = {};
  }
  return { status: res.status, body: parsed };
}

describe("PG REAL — preparation PATCH contract", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
    delete process.env.OPENAI_API_KEY;
  });

  it("PATCH 200: returns confirmed revision + projection + preparation", async () => {
    const sess = await bindDevSession("a");
    const prep = await openOrCreatePreparation(sess.pilotId);
    const before = await getPreparationContext(sess.pilotId, prep.id);
    const res = await patchHttp(prep.id, {
      previewName: "Cockpit inspecté",
      previewSummary: "Intention corrigée",
      expectedCreationRevision: before.preparation.creationRevision,
    });
    expect(res.status).toBe(200);
    expect(res.body.creationRevision).toBe(before.preparation.creationRevision + 1);
    expect((res.body.preparation as { previewName: string }).previewName).toBe("Cockpit inspecté");
    const proj = res.body.projection as {
      name: { value: string; status: string; source: { kind: string } };
    };
    expect(proj.name.value).toBe("Cockpit inspecté");
    expect(proj.name.status).toBe("PILOT_EXPRESSED");
    expect(proj.name.source.kind).toBe("PILOT_UI_EDIT");
  });

  it("PATCH 400 when expectedCreationRevision missing", async () => {
    const sess = await bindDevSession("a");
    const prep = await openOrCreatePreparation(sess.pilotId);
    const res = await patchHttp(prep.id, {
      previewName: "X",
      previewSummary: "Y",
    });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("INVALID_REQUEST");
    const row = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    expect(row.previewName).toBe("");
  });

  it("PATCH 409: second client with stale revision does not overwrite first", async () => {
    const sess = await bindDevSession("a");
    const prep = await openOrCreatePreparation(sess.pilotId);
    const rev0 = (await getPreparationContext(sess.pilotId, prep.id)).preparation.creationRevision;

    const first = await patchHttp(prep.id, {
      previewName: "Premier gagnant",
      previewSummary: "a",
      expectedCreationRevision: rev0,
    });
    expect(first.status).toBe(200);
    expect(first.body.creationRevision).toBe(rev0 + 1);

    const second = await patchHttp(prep.id, {
      previewName: "Deuxième perdant",
      previewSummary: "b",
      expectedCreationRevision: rev0,
    });
    expect(second.status).toBe(409);
    expect(second.body.error).toBe("CONFLICT");
    expect(second.body.actualCreationRevision).toBe(rev0 + 1);

    const after = await getPreparationContext(sess.pilotId, prep.id);
    expect(after.preparation.previewName).toBe("Premier gagnant");
    expect(after.projection?.name?.value).toBe("Premier gagnant");
    expect(after.preparation.creationRevision).toBe(rev0 + 1);
  });

  it("PATCH 404 for foreign preparation (non-disclosure)", async () => {
    const owner = await seedPilot("PatchOwner");
    const prep = await openOrCreatePreparation(owner);
    await bindDevSession("a"); // different pilot session
    const res = await patchHttp(prep.id, {
      previewName: "Intrusion",
      previewSummary: "x",
      expectedCreationRevision: 1,
    });
    expect(res.status).toBe(404);
    expect(res.body.error).toBe("NOT_FOUND");
    const row = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    expect(row.previewName).toBe("");
  });

  it("service CAS: concurrent same revision → one APPLIED one CONFLICT", async () => {
    const pilotId = await seedPilot("PatchRace");
    const prep = await openOrCreatePreparation(pilotId);
    const rev = (await getPreparationContext(pilotId, prep.id)).preparation.creationRevision;
    const [a, b] = await Promise.all([
      applyPilotApercuCorrection({
        pilotId,
        preparationId: prep.id,
        previewName: "Race A",
        previewSummary: "a",
        expectedCreationRevision: rev,
      }),
      applyPilotApercuCorrection({
        pilotId,
        preparationId: prep.id,
        previewName: "Race B",
        previewSummary: "b",
        expectedCreationRevision: rev,
      }),
    ]);
    const statuses = [a.status, b.status].sort();
    expect(statuses).toEqual(["APPLIED", "CONFLICT"]);
    const ctx = await getPreparationContext(pilotId, prep.id);
    expect(["Race A", "Race B"]).toContain(ctx.preparation.previewName);
    expect(ctx.preparation.creationRevision).toBe(rev + 1);
  });

  it("create after PATCH uses inspected name", async () => {
    const sess = await bindDevSession("a");
    const prep = await openOrCreatePreparation(sess.pilotId);
    const uniqueName = `Nom inspecté ${newId("n")}`;
    await updatePreview(sess.pilotId, prep.id, "Ancien", "s");
    const mid = await getPreparationContext(sess.pilotId, prep.id);
    const patched = await patchHttp(prep.id, {
      previewName: uniqueName,
      previewSummary: mid.preparation.previewSummary,
      expectedCreationRevision: mid.preparation.creationRevision,
    });
    expect(patched.status).toBe(200);
    const fresh = await getPreparationContext(sess.pilotId, prep.id);
    expect(fresh.projection?.name?.value).toBe(uniqueName);
    const { createProjectCommand } = await import("@/domains/preparation/create-project");
    const created = await createProjectCommand({
      pilotId: sess.pilotId,
      preparationId: prep.id,
      expectedCreationRevision: fresh.preparation.creationRevision,
      projectName: fresh.projection!.name!.value,
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    if (created.status === "CREATED") {
      const { projects } = await import("@/db/schema");
      const proj = (await db.select().from(projects).where(eq(projects.id, created.projectId)))[0];
      expect(proj?.name).toBe(uniqueName);
    }
  });
});
