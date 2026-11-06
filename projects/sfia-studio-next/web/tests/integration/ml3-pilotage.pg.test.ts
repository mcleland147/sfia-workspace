import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  messages,
  methodApplications,
  pilots,
  preparations,
  projectCycles,
} from "@/db/schema";
import { listDecisionJournal } from "@/domains/decisions/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import {
  applyGovernanceRestriction,
  chooseMethod,
  closeCycle,
  executePilotageCommand,
  getPilotageProjection,
  liftGovernanceRestriction,
  openCycle,
  pilotageFault,
  proposeTrajectory,
  reconcileCommand,
  reconcileCommandByClientKey,
  replaceMethod,
  retainTrajectory,
  revokeFoundingDecision,
  transitionCycle,
  withdrawMethod,
} from "@/domains/pilotage/service";
import { newId } from "@/lib/ids";

async function seedProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({ id: pilotId, displayName: label, githubUserId: `gh-${pilotId}` });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED") throw new Error(`seed failed: ${created.status}`);
  return { pilotId, projectId: created.projectId, preparationId: prep.id };
}

async function insertUserMessage(
  preparationId: string,
  content: string,
  options?: { status?: string; role?: string; ordinal?: number },
) {
  const conv = (
    await db.select().from(conversations).where(eq(conversations.preparationId, preparationId)).limit(1)
  )[0];
  const id = newId("msg");
  await db.insert(messages).values({
    id,
    conversationId: conv.id,
    role: options?.role ?? "user",
    content,
    status: options?.status ?? "COMPLETE",
    ordinal: options?.ordinal ?? 1,
  });
  return id;
}

describe("PostgreSQL ML3 pilotage and decisions", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
  });

  it("starts empty: no cycle, no method, no retained trajectory", async () => {
    const { pilotId, projectId } = await seedProject("empty");
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.revision).toBe(0);
    expect(view.cycle).toBeNull();
    expect(view.method).toEqual({ presence: "ABSENT", usageRestricted: false });
    expect(view.trajectory.retained).toBeNull();
    expect(view.trajectory.proposed).toBeNull();
    expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(0);
  });

  it("propose stays non-authoritative until an explicit retain", async () => {
    const { pilotId, projectId } = await seedProject("traj");
    const proposed = await proposeTrajectory(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      orientation: "Explorer le cadrage avant de construire",
    });
    expect(proposed.status).toBe("APPLIED");
    expect(proposed.decisionId).toBeNull();
    const mid = await getPilotageProjection(pilotId, projectId);
    expect(mid.trajectory.proposed?.orientation).toContain("cadrage");
    expect(mid.trajectory.retained).toBeNull();
    expect(mid.cycle).toBeNull();
    expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(0);

    const retained = await retainTrajectory(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: mid.revision,
      sourceRef: newId("src"),
      trajectoryRevisionId: mid.trajectory.proposed?.id,
    });
    expect(retained.status).toBe("APPLIED");
    expect(retained.decisionId).toBeTruthy();
    const after = await getPilotageProjection(pilotId, projectId);
    expect(after.trajectory.retained?.status).toBe("RETAINED");
    expect(after.cycle).toBeNull();
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.map((d) => d.kind)).toEqual(["RETAIN_TRAJECTORY"]);
  });

  it("opens one cycle on an explicit GO and pins the cadrage CKI", async () => {
    const { pilotId, projectId } = await seedProject("open");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Clarifier le besoin",
    });
    expect(opened.status).toBe("APPLIED");
    expect(opened.effects.map((e) => e.effectKind)).toEqual(["OPEN"]);
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.cycle?.cycleType).toBe("CADRAGE");
    expect(view.cycle?.status).toBe("ACTIVE");
    expect(view.cycle?.cki.ckiId).toBe("01-cadrage");
    expect(view.cycle?.cki.availability).toBe("RESOLVED");
    expect(view.cycle?.cki.contentDigest).toMatch(/^[a-f0-9]{64}$/);
    expect(["ASSOCIATED", "RESOLVED", "UNAVAILABLE"]).toContain(view.cycle?.cki.availability);
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows).toHaveLength(1);
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal).toHaveLength(1);
    expect(journal[0]?.kind).toBe("OPEN_CYCLE");
  });

  it("rejects an ambiguous OK without opening a cycle", async () => {
    const seeded = await seedProject("ambig");
    const messageId = await insertUserMessage(seeded.preparationId, "OK");
    const first = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "USER_MESSAGE",
      sourceRef: messageId,
      utterance: "OK",
    });
    expect(first.status).toBe("REJECTED");
    expect(first.reasonCode).toBe("AMBIGUOUS");
    const again = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "USER_MESSAGE",
      sourceRef: messageId,
      utterance: "OK",
    });
    expect(again.status).toBe("CONFLICT");
    expect(again.reasonCode).toBe("HUMAN_INTENT");
    const view = await getPilotageProjection(seeded.pilotId, seeded.projectId);
    expect(view.cycle).toBeNull();
    expect(view.revision).toBe(0);
    expect(await listDecisionJournal(seeded.pilotId, seeded.projectId)).toHaveLength(0);
  });

  it("keeps a single ACTIVE cycle when two opens race", async () => {
    const { pilotId, projectId } = await seedProject("race");
    const input = {
      expectedRevision: 0,
      cycleType: "CADRAGE" as const,
      objective: "Course",
    };
    const [a, b] = await Promise.all([
      openCycle(pilotId, projectId, { ...input, clientCommandKey: newId("idem"), sourceRef: newId("src") }),
      openCycle(pilotId, projectId, { ...input, clientCommandKey: newId("idem"), sourceRef: newId("src") }),
    ]);
    const statuses = [a.status, b.status].sort();
    expect(statuses.filter((s) => s === "APPLIED")).toHaveLength(1);
    expect(statuses.every((s) => s === "APPLIED" || s === "CONFLICT" || s === "REJECTED")).toBe(true);
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows.filter((r) => r.status === "ACTIVE")).toHaveLength(1);
    expect(rows).toHaveLength(1);

    await expect(
      db.insert(projectCycles).values({
        id: newId("cyc"),
        projectId,
        cycleType: "UX_UI",
        objective: "second",
        status: "ACTIVE",
        revision: 1,
      }),
    ).rejects.toBeTruthy();
  });

  it("replays the same key and conflicts when the fingerprint changes", async () => {
    const { pilotId, projectId } = await seedProject("replay");
    const key = newId("idem");
    const sourceRef = newId("src");
    const first = await openCycle(pilotId, projectId, {
      clientCommandKey: key,
      expectedRevision: 0,
      sourceRef,
      cycleType: "CADRAGE",
      objective: "Une fois",
    });
    expect(first.status).toBe("APPLIED");
    const second = await openCycle(pilotId, projectId, {
      clientCommandKey: key,
      expectedRevision: 0,
      sourceRef,
      cycleType: "CADRAGE",
      objective: "Une fois",
    });
    expect(second.status).toBe("ALREADY_APPLIED");
    expect(second.commandId).toBe(first.commandId);
    expect(second.effects.map((e) => e.effectKind)).toEqual(["OPEN"]);
    const recon = await reconcileCommand(pilotId, projectId, first.commandId!);
    expect(recon.status).toBe("ALREADY_APPLIED");
    const changed = await openCycle(pilotId, projectId, {
      clientCommandKey: key,
      expectedRevision: 0,
      sourceRef,
      cycleType: "CADRAGE",
      objective: "Autre objectif",
    });
    expect(changed.status).toBe("CONFLICT");
    expect(changed.reasonCode).toBe("FINGERPRINT");
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows).toHaveLength(1);
    expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(1);
  });

  it("rolls back a transition when opening the next cycle fails", async () => {
    const { pilotId, projectId } = await seedProject("atomic");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Base",
    });
    expect(opened.status).toBe("APPLIED");
    const failingKey = newId("idem");
    pilotageFault.afterCloseBeforeOpen = () => {
      throw new Error("INJECTED_OPEN_FAILURE");
    };
    try {
      await expect(
        transitionCycle(pilotId, projectId, {
          clientCommandKey: failingKey,
          expectedRevision: opened.revision ?? 1,
          sourceRef: newId("src"),
          toCycleType: "UX_UI",
          objective: "Ne doit pas rester",
        }),
      ).rejects.toThrow(/INJECTED_OPEN_FAILURE/);
    } finally {
      pilotageFault.afterCloseBeforeOpen = null;
    }
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows.map((r) => `${r.cycleType}:${r.status}`)).toEqual(["CADRAGE:ACTIVE"]);
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.cycle?.cycleType).toBe("CADRAGE");
    expect(view.revision).toBe(opened.revision);

    const moved = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: view.revision,
      sourceRef: newId("src"),
      toCycleType: "UX_UI",
      objective: "Expérience",
    });
    expect(moved.status).toBe("APPLIED");
    expect(["APPLIED", "ALREADY_APPLIED", "REJECTED", "CONFLICT", "UNKNOWN"]).toContain(moved.status);
    expect(moved.effects.map((e) => e.effectKind)).toEqual(["CLOSE", "OPEN"]);
    const after = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(after.find((r) => r.cycleType === "CADRAGE")?.status).toBe("CLOSED");
    expect(after.find((r) => r.cycleType === "UX_UI")?.status).toBe("ACTIVE");
    expect(after.filter((r) => r.status === "ACTIVE")).toHaveLength(1);
  });

  it("chooses, replaces, withdraws and revokes the current method base without restoring the previous one", async () => {
    const { pilotId, projectId } = await seedProject("method");
    let revision = 0;
    const chosen = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      methodRef: "Scrum",
      methodVersion: "1.0",
    });
    expect(chosen.status).toBe("APPLIED");
    revision = chosen.revision ?? revision;
    const replaced = await replaceMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      methodRef: "Kanban",
      methodVersion: "2.0",
    });
    expect(replaced.status).toBe("APPLIED");
    revision = replaced.revision ?? revision;
    let view = await getPilotageProjection(pilotId, projectId);
    expect(view.method).toMatchObject({ presence: "RETAINED", methodRef: "Kanban", methodVersion: "2.0" });

    const withdrawn = await withdrawMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
    });
    expect(withdrawn.status).toBe("APPLIED");
    revision = withdrawn.revision ?? revision;
    view = await getPilotageProjection(pilotId, projectId);
    expect(view.method.presence).toBe("ABSENT");

    const again = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      methodRef: "XP",
      methodVersion: "3.0",
    });
    expect(again.status).toBe("APPLIED");
    revision = again.revision ?? revision;
    const unrelated = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      statement: "Le périmètre reste le portail",
    });
    expect(unrelated.status).toBe("APPLIED");
    revision = unrelated.revision ?? revision;
    const revokedSide = await revokeFoundingDecision(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      decisionId: unrelated.decisionId!,
    });
    expect(revokedSide.status).toBe("APPLIED");
    expect(revokedSide.effects[0]?.effectKind).toBe("REVOKE_DECISION");
    revision = revokedSide.revision ?? revision;
    view = await getPilotageProjection(pilotId, projectId);
    expect(view.method).toMatchObject({ presence: "RETAINED", methodRef: "XP" });

    const revokedBase = await revokeFoundingDecision(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      decisionId: again.decisionId!,
    });
    expect(revokedBase.status).toBe("APPLIED");
    expect(revokedBase.effects[0]?.effectKind).toBe("REVOKE_BASE");
    view = await getPilotageProjection(pilotId, projectId);
    expect(view.method.presence).toBe("ABSENT");
    const apps = await db
      .select()
      .from(methodApplications)
      .where(eq(methodApplications.projectId, projectId));
    expect(apps.filter((a) => a.isCurrent)).toHaveLength(0);
    expect(apps.some((a) => a.methodRef === "Scrum" && a.isCurrent)).toBe(false);
    expect(apps.some((a) => a.methodRef === "Kanban" && a.isCurrent)).toBe(false);
  });

  it("blocks a cycle open while a restriction is active and allows it after a lift", async () => {
    const { pilotId, projectId } = await seedProject("restrict");
    const applied = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      statement: "Pause des ouvertures",
    });
    expect(applied.status).toBe("APPLIED");
    const blocked = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: applied.revision ?? 1,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Ne doit pas s'ouvrir",
    });
    expect(blocked.status).toBe("REJECTED");
    expect(blocked.reasonCode).toBe("RESTRICTION");
    expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();

    const restrictionId = applied.effects[0]?.targetRef;
    const lifted = await liftGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: applied.revision ?? 1,
      sourceRef: newId("src"),
      restrictionId: restrictionId!,
    });
    expect(lifted.status).toBe("APPLIED");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: lifted.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Après levée",
    });
    expect(opened.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");

    const method = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 3,
      sourceRef: newId("src"),
      methodRef: "Scrum",
      methodVersion: "1.0",
    });
    expect(method.status).toBe("APPLIED");
    const suspended = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: method.revision ?? 4,
      sourceRef: newId("src"),
      targetKind: "METHOD_USE",
      targetRef: "Scrum",
    });
    expect(suspended.status).toBe("APPLIED");
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.method).toMatchObject({
      presence: "RETAINED",
      methodRef: "Scrum",
      usageRestricted: true,
    });
  });

  it("isolates pilotage across projects and rejects a foreign user message", async () => {
    const a = await seedProject("iso-a");
    const b = await seedProject("iso-b");
    const opened = await openCycle(a.pilotId, a.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Seulement A",
    });
    expect(opened.status).toBe("APPLIED");
    await expect(
      openCycle(a.pilotId, b.projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceRef: newId("src"),
        cycleType: "UX_UI",
        objective: "Interdit",
      }),
    ).rejects.toMatchObject({ code: "NOT_FOUND" });

    const foreign = await insertUserMessage(b.preparationId, "Ouvre le cycle cadrage");
    const stolen = await executePilotageCommand(a.pilotId, a.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 1,
      sourceKind: "USER_MESSAGE",
      sourceRef: foreign,
      utterance: "Ouvre le cycle cadrage",
    });
    expect(stolen.status).toBe("REJECTED");
    expect(stolen.reasonCode).toBe("SOURCE");
    const viewA = await getPilotageProjection(a.pilotId, a.projectId);
    const viewB = await getPilotageProjection(b.pilotId, b.projectId);
    expect(viewA.cycle?.cycleType).toBe("CADRAGE");
    expect(viewB.cycle).toBeNull();
    expect(viewB.method.presence).toBe("ABSENT");
    const cyclesB = await db
      .select()
      .from(projectCycles)
      .where(and(eq(projectCycles.projectId, b.projectId), eq(projectCycles.status, "ACTIVE")));
    expect(cyclesB).toHaveLength(0);
  });

  it("opens a cycle from an explicit utterance without an operation", async () => {
    const { pilotId, projectId } = await seedProject("natural-go");
    const actInstanceId = newId("act");
    const opened = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: `ui:UTTERANCE:${actInstanceId}`,
      actInstanceId,
      utterance: "ouvre le cycle cadrage",
    });
    expect(opened.status).toBe("APPLIED");
    expect(opened.effects.map((e) => e.effectKind)).toEqual(["OPEN"]);
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.cycle?.cycleType).toBe("CADRAGE");
    expect(view.cycle?.status).toBe("ACTIVE");
  });

  it("applies a cycle restriction only to the named target", async () => {
    const { pilotId, projectId } = await seedProject("target-restrict");
    const applied = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      targetRef: "UX_UI",
      statement: "Pause UX seulement",
    });
    expect(applied.status).toBe("APPLIED");
    const cadrage = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: applied.revision ?? 1,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Autorisé",
    });
    expect(cadrage.status).toBe("APPLIED");
    const closed = await closeCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: cadrage.revision ?? 2,
      sourceRef: newId("src"),
      cycleId: (await getPilotageProjection(pilotId, projectId)).cycle?.id,
    });
    expect(closed.status).toBe("APPLIED");
    const blocked = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: closed.revision ?? 3,
      sourceRef: newId("src"),
      cycleType: "UX_UI",
      objective: "Restreint",
    });
    expect(blocked.status).toBe("REJECTED");
    expect(blocked.reasonCode).toBe("RESTRICTION");
    expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();
  });

  it("CR-03: different RECORD statements on same objectRef do not globally block OPEN", async () => {
    const { pilotId, projectId } = await seedProject("no-false-contradiction");
    const first = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "perimetre-portail",
      statement: "Le périmètre inclut le portail",
    });
    expect(first.status).toBe("APPLIED");
    const second = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: first.revision ?? 1,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "perimetre-portail",
      statement: "Le périmètre exclut le portail",
    });
    expect(second.status).toBe("APPLIED");
    // Independent cycle open must not be blocked by free-text divergence (RG-GOV-013).
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: second.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Effet indépendant autorisé",
    });
    expect(opened.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");
  });

  it("CR-02: REVISE_DECISION allowed for RECORD; refused for D5 founding kinds", async () => {
    const { pilotId, projectId } = await seedProject("revise-d5");
    const recorded = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "note-cadrage",
      statement: "Note initiale",
    });
    expect(recorded.status).toBe("APPLIED");
    const revised = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: recorded.revision ?? 1,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "REVISE_DECISION",
      decisionId: recorded.decisionId!,
      statement: "Note amendée",
    });
    expect(revised.status).toBe("APPLIED");
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.find((d) => d.id === recorded.decisionId)?.state).toBe("REVISED");
    expect(journal.find((d) => d.id === revised.decisionId)?.state).toBe("APPLICABLE");
    expect(journal.find((d) => d.id === revised.decisionId)?.supersedesDecisionId).toBe(
      recorded.decisionId,
    );

    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revised.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Fondatrice",
    });
    expect(opened.status).toBe("APPLIED");
    const refuseOpenRevise = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 3,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "REVISE_DECISION",
      decisionId: opened.decisionId!,
      statement: "Ne doit pas réécrire l'ouverture",
    });
    expect(refuseOpenRevise.status).toBe("REJECTED");
    expect(refuseOpenRevise.reasonCode).toBe("USE_TYPED_OPERATION");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");
    expect((await listDecisionJournal(pilotId, projectId)).find((d) => d.id === opened.decisionId)?.state).toBe(
      "APPLICABLE",
    );

    const method = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 3,
      sourceRef: newId("src"),
      methodRef: "Scrum",
      methodVersion: "1.0",
    });
    expect(method.status).toBe("APPLIED");
    const refuseMethodRevise = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: method.revision ?? 4,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "REVISE_DECISION",
      decisionId: method.decisionId!,
      statement: "Ne doit pas orpheliner la méthode",
    });
    expect(refuseMethodRevise.status).toBe("REJECTED");
    expect(refuseMethodRevise.reasonCode).toBe("USE_TYPED_OPERATION");
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.method).toMatchObject({ presence: "RETAINED", methodRef: "Scrum" });

    const replaced = await replaceMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: method.revision ?? 4,
      sourceRef: newId("src"),
      methodRef: "Kanban",
      methodVersion: "2.0",
    });
    expect(replaced.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).method).toMatchObject({
      presence: "RETAINED",
      methodRef: "Kanban",
    });
    const revoked = await revokeFoundingDecision(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: replaced.revision ?? 5,
      sourceRef: newId("src"),
      decisionId: replaced.decisionId!,
    });
    expect(revoked.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).method.presence).toBe("ABSENT");
  });

  it("CR-01: transition blocked when target B or source A is restricted; A stays ACTIVE", async () => {
    const { pilotId, projectId } = await seedProject("transition-restrict");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Source A",
    });
    expect(opened.status).toBe("APPLIED");
    const blockB = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 1,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      targetRef: "UX_UI",
      statement: "B restreint",
    });
    expect(blockB.status).toBe("APPLIED");
    const refusedB = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: blockB.revision ?? 2,
      sourceRef: newId("src"),
      toCycleType: "UX_UI",
    });
    expect(refusedB.status).toBe("REJECTED");
    expect(refusedB.reasonCode).toBe("RESTRICTION");
    const afterB = await getPilotageProjection(pilotId, projectId);
    expect(afterB.cycle?.cycleType).toBe("CADRAGE");
    expect(afterB.cycle?.status).toBe("ACTIVE");
    const cyclesAfterB = await db
      .select()
      .from(projectCycles)
      .where(and(eq(projectCycles.projectId, projectId), eq(projectCycles.cycleType, "UX_UI")));
    expect(cyclesAfterB).toHaveLength(0);

    // Unrelated target type still allowed while UX_UI is restricted.
    const toDelivery = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: blockB.revision ?? 2,
      sourceRef: newId("src"),
      toCycleType: "DELIVERY",
    });
    expect(toDelivery.status).toBe("APPLIED");
    expect(toDelivery.effects.map((e) => e.effectKind).sort()).toEqual(["CLOSE", "OPEN"]);
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.cycleType).toBe("DELIVERY");

    // Restrict current source type → further transition refused; cycle stays ACTIVE.
    const blockA = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: toDelivery.revision ?? 3,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      targetRef: "DELIVERY",
      statement: "A restreint",
    });
    expect(blockA.status).toBe("APPLIED");
    const refusedA = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: blockA.revision ?? 4,
      sourceRef: newId("src"),
      toCycleType: "QA_VALIDATION",
    });
    expect(refusedA.status).toBe("REJECTED");
    expect(refusedA.reasonCode).toBe("RESTRICTION");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.cycleType).toBe("DELIVERY");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");

    // Lift both restrictions → transition allowed again.
    for (const effect of [...(blockB.effects ?? []), ...(blockA.effects ?? [])]) {
      if (effect.effectKind !== "APPLY_RESTRICTION") continue;
      const lift = await liftGovernanceRestriction(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: (await getPilotageProjection(pilotId, projectId)).revision,
        sourceRef: newId("src"),
        restrictionId: effect.targetRef,
      });
      expect(lift.status).toBe("APPLIED");
    }
    const afterLift = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: (await getPilotageProjection(pilotId, projectId)).revision,
      sourceRef: newId("src"),
      toCycleType: "QA_VALIDATION",
    });
    expect(afterLift.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.cycleType).toBe("QA_VALIDATION");
  });

  it("rejects a user message that is not COMPLETE", async () => {
    const seeded = await seedProject("msg-status");
    const pendingId = await insertUserMessage(seeded.preparationId, "ouvre le cycle cadrage", {
      status: "PENDING",
    });
    const pending = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "USER_MESSAGE",
      sourceRef: pendingId,
      utterance: "ouvre le cycle cadrage",
    });
    expect(pending.status).toBe("REJECTED");
    expect(pending.reasonCode).toBe("SOURCE");
    const assistantId = await insertUserMessage(seeded.preparationId, "ouvre le cycle cadrage", {
      role: "assistant",
      status: "COMPLETE",
      ordinal: 2,
    });
    const assistant = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "USER_MESSAGE",
      sourceRef: assistantId,
      utterance: "ouvre le cycle cadrage",
    });
    expect(assistant.status).toBe("REJECTED");
    expect(assistant.reasonCode).toBe("SOURCE");
    expect((await getPilotageProjection(seeded.pilotId, seeded.projectId)).cycle).toBeNull();
  });

  it("does not apply the same human act twice when only the client key changes", async () => {
    const { pilotId, projectId } = await seedProject("act-instance");
    const actInstanceId = newId("act");
    const sourceRef = `ui:OPEN_CYCLE:${actInstanceId}`;
    const clientCommandKey = newId("idem");
    const first = await openCycle(pilotId, projectId, {
      clientCommandKey,
      expectedRevision: 0,
      sourceRef,
      actInstanceId,
      cycleType: "CADRAGE",
      objective: "Un seul acte",
    });
    expect(first.status).toBe("APPLIED");
    const byKey = await reconcileCommandByClientKey(pilotId, projectId, clientCommandKey);
    expect(byKey.status).toBe("ALREADY_APPLIED");
    expect(byKey.commandId).toBe(first.commandId);
    const replay = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: first.revision ?? 1,
      sourceRef,
      actInstanceId,
      cycleType: "CADRAGE",
      objective: "Un seul acte",
    });
    expect(replay.status).toBe("CONFLICT");
    expect(replay.reasonCode).toBe("HUMAN_INTENT");
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows).toHaveLength(1);
  });

  it("B13-01/04: divergent RECORD statements do not block an independent cycle open", async () => {
    const { pilotId, projectId } = await seedProject("b13-compat");
    const a = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "La connexion GitHub est obligatoire pour ce projet.",
    });
    expect(a.status).toBe("APPLIED");
    const b = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: a.revision ?? 1,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "Finalement GitHub facultatif.",
    });
    expect(b.status).toBe("APPLIED");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: b.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Indépendant de la divergence textuelle",
    });
    expect(opened.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");
  });

  it("B13-03/07: typed restriction blocks dependent effect and persists across projection reload", async () => {
    const { pilotId, projectId } = await seedProject("b13-material");
    const restrict = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      targetRef: "UX_UI",
      statement: "Pause UX",
    });
    expect(restrict.status).toBe("APPLIED");
    const blocked = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: restrict.revision ?? 1,
      sourceRef: newId("src"),
      cycleType: "UX_UI",
      objective: "Dépendant",
    });
    expect(blocked.status).toBe("REJECTED");
    expect(blocked.reasonCode).toBe("RESTRICTION");
    const independent = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: restrict.revision ?? 1,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Indépendant",
    });
    expect(independent.status).toBe("APPLIED");
    const reloaded = await getPilotageProjection(pilotId, projectId);
    expect(reloaded.restrictions.some((r) => r.status === "ACTIVE" && r.targetRef === "UX_UI")).toBe(
      true,
    );
  });

  it("B13-05/09: REPLACE then REVOKE founding method; history preserved, no resurrection", async () => {
    const { pilotId, projectId } = await seedProject("b13-replace");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Méthode",
    });
    const chosen = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 1,
      sourceRef: newId("src"),
      methodRef: "Scrum",
      methodVersion: "1.0",
    });
    expect(chosen.status).toBe("APPLIED");
    const replaced = await replaceMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: chosen.revision ?? 2,
      sourceRef: newId("src"),
      methodRef: "Kanban",
      methodVersion: "2.0",
    });
    expect(replaced.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).method).toMatchObject({
      presence: "RETAINED",
      methodRef: "Kanban",
    });
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.find((d) => d.id === chosen.decisionId)?.state).toBe("SUPERSEDED");
    expect(journal.find((d) => d.id === replaced.decisionId)?.state).toBe("APPLICABLE");
    expect(journal.find((d) => d.id === replaced.decisionId)?.supersedesDecisionId).toBe(
      chosen.decisionId,
    );
    const revoked = await revokeFoundingDecision(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: replaced.revision ?? 3,
      sourceRef: newId("src"),
      decisionId: replaced.decisionId!,
    });
    expect(revoked.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).method.presence).toBe("ABSENT");
    const after = await listDecisionJournal(pilotId, projectId);
    expect(after.find((d) => d.id === replaced.decisionId)?.state).toBe("REVOKED");
    expect(after.map((d) => d.id)).toContain(chosen.decisionId);
  });

  it("B13-08: COGNITIVE_PROPOSAL alone cannot open a cycle", async () => {
    const { pilotId, projectId } = await seedProject("b13-source");
    const stolen = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "COGNITIVE_PROPOSAL",
      sourceRef: newId("src"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      objective: "Interdit",
    });
    expect(stolen.status).toBe("REJECTED");
    expect(stolen.reasonCode).toBe("SOURCE");
    expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();
  });

  it("C01: single D6 decision + new USER text surfaces Level A via nora-context without second decision", async () => {
    const { buildNoraPilotageContext } = await import("@/domains/pilotage/nora-context");
    const { generateNoraReply } = await import("@/domains/conversation/nora-adapter");
    const { pilotId, projectId, preparationId } = await seedProject("b13-c01-ctx");
    const recorded = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "La connexion GitHub est obligatoire pour ce projet.",
    });
    expect(recorded.status).toBe("APPLIED");
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);

    const userText = "Finalement, je préfère GitHub facultatif.";
    const ctx = await buildNoraPilotageContext(pilotId, preparationId, userText);
    expect(ctx.projectId).toBe(projectId);
    expect(ctx.levelASignals.length).toBeGreaterThanOrEqual(1);
    expect(ctx.levelASignals[0].kind).toBe("MESSAGE_DECISION_CONFRONTATION");
    expect(ctx.levelASignals[0].decisionId).toBe(recorded.decisionId);
    expect(ctx.levelASignals[0].authorityClaim).toBe("NONE");
    expect(ctx.levelASignals[0].framing).toBe("POSSIBLE_CHANGE");
    expect(ctx.snippets.join("\n")).toContain("Décisions D6 applicables");

    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    const reply = await generateNoraReply({
      userText,
      contextSnippets: [],
      pilotageSnippets: ctx.snippets,
      levelASignals: ctx.levelASignals,
    });
    expect(reply.mode).toBe("deterministic-fixture");
    expect(reply.content).toMatch(/Niveau A/i);
    expect(reply.content).toContain(recorded.decisionId!);
    // Still a single APPLICABLE decision — Nora did not create a second one.
    expect((await listDecisionJournal(pilotId, projectId)).filter((d) => d.state === "APPLICABLE")).toHaveLength(
      1,
    );
  });

  it("R3: postUserMessageAndNora integrates USER→D6 context→fixture→persisted thread without inventing HumanDecision", async () => {
    const { postUserMessageAndNora, listMessages } = await import(
      "@/domains/conversation/service"
    );
    const { buildNoraPilotageContext } = await import("@/domains/pilotage/nora-context");
    const { utteranceTouchesObject } = await import("@/domains/decisions/divergence-assist");
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const projectA = await seedProject("b13-r3-iso-a");
      const projectB = await seedProject("b13-r3-iso-b");
      const foreignMarker = `MARKER_B13_R3_ISO_FOREIGN_${newId("mk")}`;

      // Both decisions MUST exist and be APPLICABLE before Nora generation (discriminating isolation).
      const recordedA = await executePilotageCommand(projectA.pilotId, projectA.projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        objectRef: "github-connexion",
        statement: "La connexion GitHub est obligatoire.",
      });
      expect(recordedA.status).toBe("APPLIED");
      expect(recordedA.decisionId).toBeTruthy();

      const recordedB = await executePilotageCommand(projectB.pilotId, projectB.projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        // Same objectRef as A so a cross-project leak would be selected for the USER text.
        objectRef: "github-connexion",
        statement: `GitHub obligatoire — ${foreignMarker} — décision étrangère projet B.`,
      });
      expect(recordedB.status).toBe("APPLIED");
      expect(recordedB.decisionId).toBeTruthy();

      const journalABefore = await listDecisionJournal(projectA.pilotId, projectA.projectId);
      const journalBBefore = await listDecisionJournal(projectB.pilotId, projectB.projectId);
      expect(journalABefore.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
      expect(journalBBefore.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
      expect(journalBBefore.some((d) => d.statement.includes(foreignMarker))).toBe(true);
      expect(journalBBefore.some((d) => d.id === recordedB.decisionId)).toBe(true);

      const userText = "Finalement, GitHub devient facultatif.";
      // USER text is relevant to B's objectRef — without project filter B would be confrontable.
      expect(utteranceTouchesObject(userText, "github-connexion")).toBe(true);

      const ctxB = await buildNoraPilotageContext(
        projectB.pilotId,
        projectB.preparationId,
        userText,
      );
      expect(ctxB.projectId).toBe(projectB.projectId);
      expect(ctxB.snippets.join("\n")).toContain(foreignMarker);
      expect(ctxB.snippets.join("\n")).toContain(recordedB.decisionId!);

      const ctxABefore = await buildNoraPilotageContext(
        projectA.pilotId,
        projectA.preparationId,
        userText,
      );
      expect(ctxABefore.projectId).toBe(projectA.projectId);
      expect(ctxABefore.snippets.join("\n")).toContain(recordedA.decisionId!);
      expect(ctxABefore.snippets.join("\n")).not.toContain(foreignMarker);
      expect(ctxABefore.snippets.join("\n")).not.toContain(recordedB.decisionId!);
      expect(ctxABefore.levelASignals.every((s) => s.decisionId !== recordedB.decisionId)).toBe(
        true,
      );

      const turnKey = `b13-r3-${newId("turn")}`;
      const result = await postUserMessageAndNora(
        projectA.pilotId,
        projectA.preparationId,
        userText,
        { clientTurnKey: turnKey },
      );
      expect(result.status).toBe("COMPLETE");
      expect(result.humanDecisionCreated).toBe(false);
      expect(result.noraMode).toBe("deterministic-fixture");
      expect(result.userMessageId).toBeTruthy();
      expect(result.assistantMessageId).toBeTruthy();

      const thread = await listMessages(projectA.pilotId, projectA.preparationId);
      const userMsg = thread.find((m) => m.id === result.userMessageId);
      const assistantMsg = thread.find((m) => m.id === result.assistantMessageId);
      expect(userMsg?.role).toBe("user");
      expect(userMsg?.content).toBe(userText);
      expect(userMsg?.status).toBe("COMPLETE");
      expect(assistantMsg?.role).toBe("assistant");
      expect(assistantMsg?.status).toBe("COMPLETE");
      expect(assistantMsg?.content).toMatch(/Niveau A/i);
      expect(assistantMsg?.content).toContain(recordedA.decisionId!);
      expect(assistantMsg?.content).toMatch(/pas une (HumanDecision|interdiction D6)/i);
      expect(assistantMsg?.content).not.toMatch(/blocage D6 établi|je révoque|HumanDecision créée/i);
      expect(assistantMsg?.content).not.toContain(foreignMarker);
      expect(assistantMsg?.content).not.toContain(recordedB.decisionId!);

      const journalAAfter = await listDecisionJournal(projectA.pilotId, projectA.projectId);
      const journalBAfter = await listDecisionJournal(projectB.pilotId, projectB.projectId);
      expect(journalAAfter.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
      expect(journalAAfter.map((d) => d.id).sort()).toEqual(journalABefore.map((d) => d.id).sort());
      expect(journalBAfter.map((d) => d.id).sort()).toEqual(journalBBefore.map((d) => d.id).sort());
      expect(journalBAfter.find((d) => d.id === recordedB.decisionId)?.statement).toContain(
        foreignMarker,
      );

      const view = await getPilotageProjection(projectA.pilotId, projectA.projectId);
      expect(view.cycle).toBeNull();
      expect(view.method.presence).toBe("ABSENT");

      const reloaded = await listMessages(projectA.pilotId, projectA.preparationId);
      expect(reloaded.some((m) => m.id === result.userMessageId)).toBe(true);
      expect(reloaded.some((m) => m.id === result.assistantMessageId)).toBe(true);

      const replay = await postUserMessageAndNora(
        projectA.pilotId,
        projectA.preparationId,
        userText,
        { clientTurnKey: turnKey },
      );
      expect(replay.idempotentReplay).toBe(true);
      expect(replay.humanDecisionCreated).toBe(false);
      expect(
        (await listDecisionJournal(projectA.pilotId, projectA.projectId)).filter(
          (d) => d.state === "APPLICABLE",
        ),
      ).toHaveLength(1);
      const users = (await listMessages(projectA.pilotId, projectA.preparationId)).filter(
        (m) => m.role === "user" && m.content === userText,
      );
      expect(users).toHaveLength(1);
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("C01: two different but compatible formulations do not block an independent OPEN", async () => {
    const { pilotId, projectId } = await seedProject("b13-compatible");
    const a = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "La connexion GitHub est obligatoire pour ce projet.",
    });
    expect(a.status).toBe("APPLIED");
    const b = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: a.revision ?? 1,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "GitHub reste requis pour ce projet.",
    });
    expect(b.status).toBe("APPLIED");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: b.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Compatible — pas de conflit matériel",
    });
    expect(opened.status).toBe("APPLIED");
  });
});
