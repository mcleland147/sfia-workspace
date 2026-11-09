import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { governanceRestrictions, humanDecisions, projects } from "@/db/schema";
import type { DbTx } from "@/domains/pilotage/command-runner";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";

export type InsertDecisionInput = {
  projectId: string;
  pilotId: string;
  sourceKind: string;
  sourceRef: string;
  kind: string;
  objectRef: string;
  scope?: string;
  statement: string;
  /** Mandate body (fingerprint + envelope) — required for Git effect authority. */
  effectConditions?: string | null;
  supersedesDecisionId?: string | null;
  revokesDecisionId?: string | null;
  liftsRestrictionId?: string | null;
};

export async function insertHumanDecision(tx: DbTx, input: InsertDecisionInput): Promise<string> {
  const id = newId("dec");
  const now = new Date();
  await tx.insert(humanDecisions).values({
    id,
    projectId: input.projectId,
    pilotId: input.pilotId,
    sourceKind: input.sourceKind,
    sourceRef: input.sourceRef,
    kind: input.kind,
    objectRef: input.objectRef.slice(0, 300),
    scope: input.scope ?? "PROJECT",
    statement: input.statement.slice(0, 500),
    state: "APPLICABLE",
    effectConditions: input.effectConditions ?? null,
    supersedesDecisionId: input.supersedesDecisionId ?? null,
    revokesDecisionId: input.revokesDecisionId ?? null,
    liftsRestrictionId: input.liftsRestrictionId ?? null,
    effectiveAt: now,
    createdAt: now,
  });
  return id;
}

export async function markDecisionState(
  tx: DbTx,
  decisionId: string,
  state: "SUPERSEDED" | "REVOKED" | "REVISED",
): Promise<void> {
  await tx.update(humanDecisions).set({ state }).where(eq(humanDecisions.id, decisionId));
}

export async function insertRestriction(
  tx: DbTx,
  input: {
    projectId: string;
    targetKind: string;
    targetRef: string;
    originDecisionId: string;
  },
): Promise<string> {
  const id = newId("grs");
  await tx.insert(governanceRestrictions).values({
    id,
    projectId: input.projectId,
    targetKind: input.targetKind,
    targetRef: input.targetRef || "*",
    effect: "BLOCK",
    originDecisionId: input.originDecisionId,
    status: "ACTIVE",
    createdAt: new Date(),
  });
  return id;
}

export async function liftRestrictionRow(
  tx: DbTx,
  input: { projectId: string; restrictionId: string; liftDecisionId: string },
): Promise<"ok" | "missing" | "inactive"> {
  const row = (
    await tx
      .select()
      .from(governanceRestrictions)
      .where(
        and(
          eq(governanceRestrictions.id, input.restrictionId),
          eq(governanceRestrictions.projectId, input.projectId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) return "missing";
  if (row.status !== "ACTIVE") return "inactive";
  await tx
    .update(governanceRestrictions)
    .set({
      status: "LIFTED",
      liftDecisionId: input.liftDecisionId,
      liftedAt: new Date(),
    })
    .where(eq(governanceRestrictions.id, row.id));
  return "ok";
}

/** Journal is a D6 projection. It does not authorize a new effect. */
export async function listDecisionJournal(pilotId: string, projectId: string) {
  const project = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");

  return db
    .select({
      id: humanDecisions.id,
      kind: humanDecisions.kind,
      state: humanDecisions.state,
      scope: humanDecisions.scope,
      statement: humanDecisions.statement,
      objectRef: humanDecisions.objectRef,
      sourceKind: humanDecisions.sourceKind,
      sourceRef: humanDecisions.sourceRef,
      supersedesDecisionId: humanDecisions.supersedesDecisionId,
      revokesDecisionId: humanDecisions.revokesDecisionId,
      liftsRestrictionId: humanDecisions.liftsRestrictionId,
      effectiveAt: humanDecisions.effectiveAt,
      createdAt: humanDecisions.createdAt,
    })
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId))
    .orderBy(asc(humanDecisions.createdAt));
}
