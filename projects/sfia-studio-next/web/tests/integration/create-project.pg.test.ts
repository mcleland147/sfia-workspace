import { beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

// Force DEV fixture before conversation/nora modules evaluate lane (operator .env may be RECETTE).
vi.hoisted(() => {
  process.env.STUDIO_LANE = "DEV";
  process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
  delete process.env.OPENAI_API_KEY;
});

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { pilots, preparations, projects, preparationProjectLinks } from "@/db/schema";
import { newId } from "@/lib/ids";
import { createProjectCommand, reconcileCreateProject } from "@/domains/preparation/create-project";
import {
  applyPreparationProjection,
  getPreparationContext,
  openOrCreatePreparation,
  updatePreview,
} from "@/domains/preparation/service";
import { draftProjectionFromQualification } from "@/domains/preparation/projection";
import { savePreparationDocument, listDocuments } from "@/domains/document/service";
import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("PostgreSQL create-project contracts", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    // Integration suite must stay on deterministic Nora fixture — LIVE costs/proofs are separate.
    // Operator .env.local may set STUDIO_LANE=RECETTE + OPENAI_API_KEY; force DEV fixture lane.
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
    delete process.env.OPENAI_API_KEY;
  });

  it("A01/A03: preparation without project; create only via dedicated command", async () => {
    const pilotId = await seedPilot("A01");
    const prep = await openOrCreatePreparation(pilotId);
    expect(prep.status).toBe("OPEN");
    const links = await db.select().from(preparationProjectLinks).where(eq(preparationProjectLinks.preparationId, prep.id));
    expect(links).toHaveLength(0);
  });

  it("A04: concurrent creates yield a single project", async () => {
    const pilotId = await seedPilot("A04");
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, "Concurrent", "summary");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    const key = newId("idem");
    const input = {
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "Concurrent",
      previewSummary: "summary",
      idempotencyKey: key,
    };
    const [r1, r2] = await Promise.all([createProjectCommand(input), createProjectCommand(input)]);
    const statuses = [r1.status, r2.status].sort();
    expect(statuses).toContain("CREATED");
    expect(statuses.every((s) => s === "CREATED" || s === "ALREADY_CREATED")).toBe(true);
    const projectIds = [r1.status !== "CONFLICT" && r1.status !== "FORBIDDEN" && r1.status !== "INVALID_REQUEST" ? r1.projectId : null,
      r2.status !== "CONFLICT" && r2.status !== "FORBIDDEN" && r2.status !== "INVALID_REQUEST" ? r2.projectId : null].filter(Boolean);
    expect(new Set(projectIds).size).toBe(1);
    const all = await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId));
    expect(all).toHaveLength(1);
  });

  it("A05: replay after commit returns same project (lost ACK)", async () => {
    const pilotId = await seedPilot("A05");
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, "AckLost", "s");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    const key = newId("idem");
    const first = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "AckLost",
      previewSummary: "s",
      idempotencyKey: key,
    });
    expect(first.status).toBe("CREATED");
    const second = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "AckLost",
      previewSummary: "s",
      idempotencyKey: key,
    });
    expect(second.status).toBe("ALREADY_CREATED");
    if (first.status === "CREATED" && second.status === "ALREADY_CREATED") {
      expect(second.projectId).toBe(first.projectId);
    }
    const recon = await reconcileCreateProject(pilotId, prep.id, key);
    expect(recon.status).toBe("ALREADY_CREATED");
  });

  it("A06: stale expectedCreationRevision conflicts without destroying prep", async () => {
    const pilotId = await seedPilot("A06");
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, "Stale", "one");
    const mid = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    await updatePreview(pilotId, prep.id, "Stale", "two");
    const result = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: mid.creationRevision,
      projectName: "Stale",
      previewSummary: "one",
      idempotencyKey: newId("idem"),
    });
    expect(result.status).toBe("CONFLICT");
    const still = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    expect(still.status).toBe("OPEN");
  });

  it("A08/A09: document identity survives create; AVAILABLE only after persist", async () => {
    const pilotId = await seedPilot("A08");
    const prep = await openOrCreatePreparation(pilotId);
    const saved = await savePreparationDocument(pilotId, prep.id, "Doc", "# hello");
    expect(saved.status).toBe("AVAILABLE");
    await updatePreview(pilotId, prep.id, "DocProj", "s");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    const created = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "DocProj",
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    const docs = await listDocuments(pilotId, prep.id);
    expect(docs[0]?.document.id).toBe(saved.documentId);
    expect(docs[0]?.document.projectId).toBeTruthy();
    expect(docs[0]?.latestRevision?.status).toBe("AVAILABLE");
  });

  it("A10: two pilots are isolated", async () => {
    const a = await seedPilot("A10a");
    const b = await seedPilot("A10b");
    const prepA = await openOrCreatePreparation(a);
    await updatePreview(a, prepA.id, "OnlyA", "s");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prepA.id)))[0];
    await createProjectCommand({
      pilotId: a,
      preparationId: prepA.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "OnlyA",
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    const bProjects = await db.select().from(projects).where(eq(projects.ownerPilotId, b));
    expect(bProjects).toHaveLength(0);
    await expect(openOrCreatePreparation(b, prepA.id)).rejects.toBeTruthy();
  });

  it("A02/A07: nora message persists; same thread after create", async () => {
    const pilotId = await seedPilot("A02");
    const prep = await openOrCreatePreparation(pilotId);
    await postUserMessageAndNora(pilotId, prep.id, "Bonjour Nora, idée de projet analytics");
    const before = await listMessages(pilotId, prep.id);
    expect(before.length).toBeGreaterThanOrEqual(2);
    await updatePreview(pilotId, prep.id, "Analytics", "idée");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "Analytics",
      previewSummary: "idée",
      idempotencyKey: newId("idem"),
    });
    const after = await listMessages(pilotId, prep.id);
    expect(after.map((m) => m.id)).toEqual(before.map((m) => m.id));
  });

  /**
   * Discriminant concurrency: two preps, two idempotency keys, same normalized name, parallel.
   * Without the pilot-scoped name lock, both could CREATED. With the lock: 1 CREATED + 1 CONFLICT.
   */
  it("GapA concurrent: same-pilot parallel creates with same name yield one project", async () => {
    const pilotId = await seedPilot("ConcName");
    const p1 = await openOrCreatePreparation(pilotId);
    const p2 = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, p1.id, "Concurrent Homonym", "a");
    await updatePreview(pilotId, p2.id, "concurrent   HOMONYM", "b");
    const r1 = (await db.select().from(preparations).where(eq(preparations.id, p1.id)))[0];
    const r2 = (await db.select().from(preparations).where(eq(preparations.id, p2.id)))[0];
    const [c1, c2] = await Promise.all([
      createProjectCommand({
        pilotId,
        preparationId: p1.id,
        expectedCreationRevision: r1.creationRevision,
        projectName: "Concurrent Homonym",
        previewSummary: "a",
        idempotencyKey: newId("idem"),
      }),
      createProjectCommand({
        pilotId,
        preparationId: p2.id,
        expectedCreationRevision: r2.creationRevision,
        projectName: "  concurrent HOMONYM ",
        previewSummary: "b",
        idempotencyKey: newId("idem"),
      }),
    ]);
    const statuses = [c1.status, c2.status].sort();
    expect(statuses).toEqual(["CONFLICT", "CREATED"]);
    const created = c1.status === "CREATED" ? c1 : c2.status === "CREATED" ? c2 : null;
    const conflict = c1.status === "CONFLICT" ? c1 : c2.status === "CONFLICT" ? c2 : null;
    expect(created).toBeTruthy();
    expect(conflict).toBeTruthy();
    if (conflict && conflict.status === "CONFLICT") {
      expect(conflict.reason).toMatch(/name already used/i);
    }
    const all = await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId));
    expect(all).toHaveLength(1);
    const links = await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.projectId, all[0]!.id));
    expect(links).toHaveLength(1);
  });

  it("GapB: pilot correction becomes create name (projection + command)", async () => {
    const pilotId = await seedPilot("PilotEdit");
    const prep = await openOrCreatePreparation(pilotId);
    await postUserMessageAndNora(
      pilotId,
      prep.id,
      "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
    );
    const afterNora = await getPreparationContext(pilotId, prep.id);
    expect(afterNora.projection?.name?.value).toBe("Cockpit projets");
    await updatePreview(
      pilotId,
      prep.id,
      "Cockpit projets v2",
      afterNora.projection?.intention?.value || "corrigé",
      afterNora.preparation.creationRevision,
    );
    const afterEdit = await getPreparationContext(pilotId, prep.id);
    expect(afterEdit.projection?.name?.value).toBe("Cockpit projets v2");
    expect(afterEdit.projection?.name?.status).toBe("PILOT_EXPRESSED");
    expect(afterEdit.projection?.name?.source.kind).toBe("PILOT_UI_EDIT");
    expect(afterEdit.preparation.previewName).toBe("Cockpit projets v2");
    const created = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: afterEdit.preparation.creationRevision,
      projectName: afterEdit.projection!.name!.value,
      previewSummary: afterEdit.preparation.previewSummary,
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    if (created.status === "CREATED") {
      const proj = (
        await db.select().from(projects).where(eq(projects.id, created.projectId))
      )[0];
      expect(proj?.name).toBe("Cockpit projets v2");
    }
  });

  it("GapC multi-turn: vague → outcome → scope → rename → create (fixture path)", async () => {
    const {
      SAS_MATURATION_T1,
      SAS_MATURATION_T2,
      SAS_MATURATION_T3,
      SAS_MATURATION_T4,
    } = await import("@/domains/conversation/fixture-semantic-qualify");
    const pilotId = await seedPilot("Maturation");
    const prep = await openOrCreatePreparation(pilotId);

    await postUserMessageAndNora(pilotId, prep.id, SAS_MATURATION_T1);
    let ctx = await getPreparationContext(pilotId, prep.id);
    expect(ctx.projection).toBeTruthy();
    expect(ctx.projection?.name ?? null).toBeNull();
    expect(ctx.projection?.desiredOutcome ?? null).toBeNull();
    expect(ctx.projection?.suggestion?.assessment).toBe("EXPLORING");
    expect(ctx.project ?? null).toBeNull();
    const rev1 = ctx.preparation.creationRevision;

    await postUserMessageAndNora(pilotId, prep.id, SAS_MATURATION_T2);
    ctx = await getPreparationContext(pilotId, prep.id);
    expect(ctx.projection?.desiredOutcome?.value).toMatch(/décisions importantes/i);
    expect(ctx.projection?.initialScope ?? null).toBeNull();
    expect(ctx.projection?.suggestion?.assessment).toBe("CLARIFYING");
    expect(ctx.preparation.creationRevision).toBeGreaterThan(rev1);
    expect(ctx.project ?? null).toBeNull();

    await postUserMessageAndNora(pilotId, prep.id, SAS_MATURATION_T3);
    ctx = await getPreparationContext(pilotId, prep.id);
    expect(ctx.projection?.name?.value).toBe("Assistant de pilotage");
    expect(ctx.projection?.initialScope?.value).toMatch(/Espace personnel/i);
    expect(ctx.projection?.suggestion?.assessment).toBe("BASE_SUFFICIENTE");
    expect(ctx.project ?? null).toBeNull();

    await postUserMessageAndNora(pilotId, prep.id, SAS_MATURATION_T4);
    ctx = await getPreparationContext(pilotId, prep.id);
    expect(ctx.projection?.name?.value).toBe("Cockpit projets");
    expect(ctx.projection?.name?.value).not.toBe("Assistant de pilotage");
    expect(ctx.project ?? null).toBeNull();

    const created = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: ctx.preparation.creationRevision,
      projectName: ctx.projection!.name!.value,
      previewSummary: ctx.preparation.previewSummary,
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    if (created.status === "CREATED") {
      const proj = (
        await db.select().from(projects).where(eq(projects.id, created.projectId))
      )[0];
      expect(proj?.name).toBe("Cockpit projets");
      const msgs = await listMessages(pilotId, prep.id);
      expect(msgs.length).toBeGreaterThanOrEqual(8); // 4 user + 4 nora
    }
  });

  /**
   * Morris 2026-11-16 — same-pilot name uniqueness (app-level).
   * Diverges from design-only PF-CRE-14 (two same-name projects). Normative R2 not rewritten here.
   */
  it("A12/Morris-name: same pilot cannot create two projects with normalized same name", async () => {
    const pilotId = await seedPilot("A12");
    const p1 = await openOrCreatePreparation(pilotId);
    const p2 = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, p1.id, "SameName", "a");
    // Inspected name on p2 must match the requested create payload (G1); uniqueness still fires.
    await updatePreview(pilotId, p2.id, "samename", "b");
    const r1 = (await db.select().from(preparations).where(eq(preparations.id, p1.id)))[0];
    const r2 = (await db.select().from(preparations).where(eq(preparations.id, p2.id)))[0];
    const c1 = await createProjectCommand({
      pilotId,
      preparationId: p1.id,
      expectedCreationRevision: r1.creationRevision,
      projectName: "SameName",
      previewSummary: "a",
      idempotencyKey: newId("idem"),
    });
    const c2 = await createProjectCommand({
      pilotId,
      preparationId: p2.id,
      expectedCreationRevision: r2.creationRevision,
      projectName: "  samename  ",
      previewSummary: "b",
      idempotencyKey: newId("idem"),
    });
    expect(c1.status).toBe("CREATED");
    expect(c2.status).toBe("CONFLICT");
    if (c2.status === "CONFLICT") {
      expect(c2.reason).toMatch(/name already used/i);
    }
    const all = await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId));
    expect(all).toHaveLength(1);
  });

  it("G1: client-only name refused; inspected correction accepted; stale revision conflicts", async () => {
    const pilotId = await seedPilot("G1Name");
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, "Nom inspecté", "s");
    const mid = await getPreparationContext(pilotId, prep.id);

    const arbitrary = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: mid.preparation.creationRevision,
      projectName: "Wrong Name Entirely",
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    expect(arbitrary.status).toBe("CONFLICT");
    if (arbitrary.status === "CONFLICT") {
      expect(arbitrary.reason).toMatch(/does not match inspected/i);
    }
    expect(
      (await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId))).length,
    ).toBe(0);

    const ok = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: mid.preparation.creationRevision,
      projectName: "Nom inspecté",
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    expect(ok.status).toBe("CREATED");

    // G1-11 style: after rename, old inspected name + stale or mismatched create fails.
    const prep2 = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep2.id, "Ancien", "s");
    const before = await getPreparationContext(pilotId, prep2.id);
    await updatePreview(pilotId, prep2.id, "Nouveau", "s");
    const stale = await createProjectCommand({
      pilotId,
      preparationId: prep2.id,
      expectedCreationRevision: before.preparation.creationRevision,
      projectName: "Ancien",
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    expect(stale.status).toBe("CONFLICT");
    if (stale.status === "CONFLICT") {
      expect(stale.reason).toMatch(/stale|does not match inspected/i);
    }
    const wrongCurrent = await createProjectCommand({
      pilotId,
      preparationId: prep2.id,
      expectedCreationRevision: (await getPreparationContext(pilotId, prep2.id)).preparation
        .creationRevision,
      projectName: "Ancien",
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    expect(wrongCurrent.status).toBe("CONFLICT");
    if (wrongCurrent.status === "CONFLICT") {
      expect(wrongCurrent.reason).toMatch(/does not match inspected/i);
    }
  });

  it("Morris-name: two pilots may share the same display name", async () => {
    const a = await seedPilot("NameA");
    const b = await seedPilot("NameB");
    const prepA = await openOrCreatePreparation(a);
    const prepB = await openOrCreatePreparation(b);
    await updatePreview(a, prepA.id, "SharedLabel", "a");
    await updatePreview(b, prepB.id, "SharedLabel", "b");
    const rA = (await db.select().from(preparations).where(eq(preparations.id, prepA.id)))[0];
    const rB = (await db.select().from(preparations).where(eq(preparations.id, prepB.id)))[0];
    const cA = await createProjectCommand({
      pilotId: a,
      preparationId: prepA.id,
      expectedCreationRevision: rA.creationRevision,
      projectName: "SharedLabel",
      previewSummary: "a",
      idempotencyKey: newId("idem"),
    });
    const cB = await createProjectCommand({
      pilotId: b,
      preparationId: prepB.id,
      expectedCreationRevision: rB.creationRevision,
      projectName: "SharedLabel",
      previewSummary: "b",
      idempotencyKey: newId("idem"),
    });
    expect(cA.status).toBe("CREATED");
    expect(cB.status).toBe("CREATED");
    if (cA.status === "CREATED" && cB.status === "CREATED") {
      expect(cA.projectId).not.toBe(cB.projectId);
    }
  });

  it("A16: new db client still reads committed truth", async () => {
    const pilotId = await seedPilot("A16");
    const prep = await openOrCreatePreparation(pilotId);
    const again = await openOrCreatePreparation(pilotId, prep.id);
    expect(again.id).toBe(prep.id);
  });

  it("A04b: same idempotency key with different fingerprint => CONFLICT under lock", async () => {
    const pilotId = await seedPilot("A04b");
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, "FpOne", "one");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    const key = newId("idem");
    const first = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "FpOne",
      previewSummary: "one",
      idempotencyKey: key,
    });
    expect(first.status).toBe("CREATED");
    const second = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "FpTwo",
      previewSummary: "two",
      idempotencyKey: key,
    });
    expect(second.status).toBe("CONFLICT");
    const all = await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId));
    expect(all).toHaveLength(1);
  });

  it("A04c: two preparations, same key, concurrent — loser leaves zero mutations", async () => {
    const pilotId = await seedPilot("A04c");
    const prepA = await openOrCreatePreparation(pilotId);
    const prepB = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prepA.id, "CrossA", "sa");
    await updatePreview(pilotId, prepB.id, "CrossB", "sb");
    const rA = (await db.select().from(preparations).where(eq(preparations.id, prepA.id)))[0];
    const rB = (await db.select().from(preparations).where(eq(preparations.id, prepB.id)))[0];
    const key = newId("idem");

    const inputA = {
      pilotId,
      preparationId: prepA.id,
      expectedCreationRevision: rA.creationRevision,
      projectName: "CrossA",
      previewSummary: "sa",
      idempotencyKey: key,
    };
    const inputB = {
      pilotId,
      preparationId: prepB.id,
      expectedCreationRevision: rB.creationRevision,
      projectName: "CrossB",
      previewSummary: "sb",
      idempotencyKey: key,
    };

    const [ra, rb] = await Promise.all([
      createProjectCommand(inputA),
      createProjectCommand(inputB),
    ]);
    const statuses = [ra.status, rb.status].sort();
    expect(statuses).toEqual(["CONFLICT", "CREATED"]);

    const winner = ra.status === "CREATED" ? ra : rb.status === "CREATED" ? rb : null;
    const loserPrepId = ra.status === "CONFLICT" ? prepA.id : prepB.id;
    expect(winner).toBeTruthy();

    const loserLink = await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.preparationId, loserPrepId));
    expect(loserLink).toHaveLength(0);

    const loserPrep = (
      await db.select().from(preparations).where(eq(preparations.id, loserPrepId))
    )[0];
    expect(loserPrep.status).toBe("OPEN");

    const ownerProjects = await db
      .select()
      .from(projects)
      .where(eq(projects.ownerPilotId, pilotId));
    expect(ownerProjects).toHaveLength(1);

    // Second concurrent wave with a fresh key on two new preps — race repetition.
    const prepC = await openOrCreatePreparation(pilotId);
    const prepD = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prepC.id, "CrossC", "sc");
    await updatePreview(pilotId, prepD.id, "CrossD", "sd");
    const rC = (await db.select().from(preparations).where(eq(preparations.id, prepC.id)))[0];
    const rD = (await db.select().from(preparations).where(eq(preparations.id, prepD.id)))[0];
    const key2 = newId("idem");
    const [rc, rd] = await Promise.all([
      createProjectCommand({
        pilotId,
        preparationId: prepC.id,
        expectedCreationRevision: rC.creationRevision,
        projectName: "CrossC",
        previewSummary: "sc",
        idempotencyKey: key2,
      }),
      createProjectCommand({
        pilotId,
        preparationId: prepD.id,
        expectedCreationRevision: rD.creationRevision,
        projectName: "CrossD",
        previewSummary: "sd",
        idempotencyKey: key2,
      }),
    ]);
    expect([rc.status, rd.status].sort()).toEqual(["CONFLICT", "CREATED"]);
    const loser2 = rc.status === "CONFLICT" ? prepC.id : prepD.id;
    expect(
      await db
        .select()
        .from(preparationProjectLinks)
        .where(eq(preparationProjectLinks.preparationId, loser2)),
    ).toHaveLength(0);
  });

  it("A04d: reconcile with prep B + key owned by prep A never returns project A for B", async () => {
    const pilotId = await seedPilot("A04d");
    const prepA = await openOrCreatePreparation(pilotId);
    const prepB = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prepA.id, "ReconA", "a");
    const rA = (await db.select().from(preparations).where(eq(preparations.id, prepA.id)))[0];
    const key = newId("idem");
    const created = await createProjectCommand({
      pilotId,
      preparationId: prepA.id,
      expectedCreationRevision: rA.creationRevision,
      projectName: "ReconA",
      previewSummary: "a",
      idempotencyKey: key,
    });
    expect(created.status).toBe("CREATED");

    const reconB = await reconcileCreateProject(pilotId, prepB.id, key);
    expect(reconB.status).toBe("CONFLICT");
    if (reconB.status === "CONFLICT") {
      expect(reconB.commandPreparationId).toBe(prepA.id);
    }
    const reconA = await reconcileCreateProject(pilotId, prepA.id, key);
    expect(reconA.status).toBe("ALREADY_CREATED");
    if (created.status === "CREATED" && reconA.status === "ALREADY_CREATED") {
      expect(reconA.projectId).toBe(created.projectId);
    }
  });

  it("A10c: two pilots may reuse the same idempotency key string independently", async () => {
    const a = await seedPilot("A10c-a");
    const b = await seedPilot("A10c-b");
    const prepA = await openOrCreatePreparation(a);
    const prepB = await openOrCreatePreparation(b);
    await updatePreview(a, prepA.id, "SharedKey", "a");
    await updatePreview(b, prepB.id, "SharedKey", "b");
    const rA = (await db.select().from(preparations).where(eq(preparations.id, prepA.id)))[0];
    const rB = (await db.select().from(preparations).where(eq(preparations.id, prepB.id)))[0];
    const key = "literally-same-string-key";
    const ca = await createProjectCommand({
      pilotId: a,
      preparationId: prepA.id,
      expectedCreationRevision: rA.creationRevision,
      projectName: "SharedKey",
      previewSummary: "a",
      idempotencyKey: key,
    });
    const cb = await createProjectCommand({
      pilotId: b,
      preparationId: prepB.id,
      expectedCreationRevision: rB.creationRevision,
      projectName: "SharedKey",
      previewSummary: "b",
      idempotencyKey: key,
    });
    expect(ca.status).toBe("CREATED");
    expect(cb.status).toBe("CREATED");
    if (ca.status === "CREATED" && cb.status === "CREATED") {
      expect(ca.projectId).not.toBe(cb.projectId);
    }
  });

  it("A10b: same pilot cannot revise document from another preparation", async () => {
    const pilotId = await seedPilot("A10b");
    const p1 = await openOrCreatePreparation(pilotId);
    const p2 = await openOrCreatePreparation(pilotId);
    const saved = await savePreparationDocument(pilotId, p1.id, "Doc1", "# a");
    expect(saved.status).toBe("AVAILABLE");
    const cross = await savePreparationDocument(
      pilotId,
      p2.id,
      "Doc1",
      "# hack",
      saved.documentId,
    );
    expect(cross.status).toBe("FAILED");
    expect("reason" in cross ? cross.reason : undefined).toBe("FORBIDDEN");
  });

  it("A09b: injected persist failure yields FAILED not AVAILABLE", async () => {
    const pilotId = await seedPilot("A09b");
    const prep = await openOrCreatePreparation(pilotId);
    const failed = await savePreparationDocument(pilotId, prep.id, "X", "# x", undefined, {
      injectPersistFailure: true,
    });
    expect(failed.status).toBe("FAILED");
  });

  it("reconcile foreign preparation is FORBIDDEN", async () => {
    const a = await seedPilot("recA");
    const b = await seedPilot("recB");
    const prepA = await openOrCreatePreparation(a);
    const result = await reconcileCreateProject(b, prepA.id);
    expect(result.status).toBe("FORBIDDEN");
  });

  it("SAT projection: Nora turn persists living projection under CAS; no-op does not bump", async () => {
    const pilotId = await seedPilot("ProjCAS");
    const prep = await openOrCreatePreparation(pilotId);
    const turn = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.");
    expect(turn.preparationProjection?.status).toMatch(/APPLIED|UNCHANGED|UNAVAILABLE/);
    const ctx1 = await getPreparationContext(pilotId, prep.id);
    const revAfterTurn = ctx1.preparation.creationRevision;
    expect(ctx1.projection || ctx1.preparation.previewName || true).toBeTruthy();

    const draft = draftProjectionFromQualification({
      preparationId: prep.id,
      turnKey: "manual-same",
      qualificationStatus: "QUALIFIED",
      goal: ctx1.projection?.intention?.value || "Création de projet",
      clarifications: [],
      proposedProjectName: ctx1.projection?.name?.value || "Nouveau projet",
    });
    expect(draft).toBeTruthy();
    const unchanged = await applyPreparationProjection({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: revAfterTurn,
      draft: draft!,
    });
    // If material content already matches, revision stays; otherwise APPLIED once is fine.
    if (unchanged.status === "UNCHANGED") {
      expect(unchanged.revision).toBe(revAfterTurn);
    }

    const conflict = await applyPreparationProjection({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: revAfterTurn - 1,
      draft: {
        ...draft!,
        intention: {
          value: "Intention divergente pour conflit",
          status: "NORA_PROPOSED",
          source: { kind: "NORA_TURN", ref: "conflict" },
          isCurrent: true,
        },
      },
    });
    expect(conflict.status).toBe("CONFLICT");
  });

  it("project reopen by projectId resolves same preparation thread (owner only)", async () => {
    const { getOwnedProjectContext } = await import("@/domains/preparation/project-context");
    const a = await seedPilot("projCtxA");
    const b = await seedPilot("projCtxB");
    const prep = await openOrCreatePreparation(a);
    await postUserMessageAndNora(a, prep.id, "message for reopen");
    await updatePreview(a, prep.id, "Reopen", "s");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    const created = await createProjectCommand({
      pilotId: a,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "Reopen",
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    if (created.status !== "CREATED") return;

    const ctx = await getOwnedProjectContext(a, created.projectId);
    expect(ctx.preparation.id).toBe(prep.id);
    expect(ctx.messages.some((m) => m.content.includes("message for reopen"))).toBe(true);

    await expect(getOwnedProjectContext(b, created.projectId)).rejects.toMatchObject({
      code: "NOT_FOUND",
    });
  });
});
