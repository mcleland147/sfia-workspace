/**
 * Owner-side durable target resolution for USER_MESSAGE D6 REVISE / LIFT.
 * Studio resolves the unique target from durable qualification + project state.
 * HTTP body.decisionId / body.restrictionId may only echo that target.
 */
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  governanceRestrictions,
  humanDecisions,
} from "@/db/schema";
import type { DbTx } from "@/domains/pilotage/command-runner";

/** db or transactional client — same select/from/where surface. */
export type DurableQueryDb = typeof db | DbTx;

export type DurableResolveOk = { ok: true; id: string };
export type DurableResolveFail = {
  ok: false;
  reasonCode: "AMBIGUOUS" | "INVALID";
  reason: string;
};
export type DurableResolveResult = DurableResolveOk | DurableResolveFail;

/** Exact targetRef match, wildcard, or active cycle id when hint is the cycle type. */
export function restrictionTargetMatchesHint(input: {
  targetRef: string;
  hint: string;
  activeCycle?: { id: string; cycleType: string } | null;
}): boolean {
  const ref = (input.targetRef || "*").trim().toUpperCase();
  const hint = input.hint.trim().toUpperCase();
  if (!hint) return true;
  if (ref === "*" || ref === hint) return true;
  const cycle = input.activeCycle;
  if (
    cycle &&
    hint === cycle.cycleType.toUpperCase() &&
    ref === cycle.id.toUpperCase()
  ) {
    return true;
  }
  return false;
}

/**
 * Resolve REVISE_DECISION target: durable decisionId, else unique APPLICABLE
 * RECORD_DECISION with exact objectRef. Never pick by order among many.
 */
export async function resolveReviseDecisionTarget(
  queryDb: DurableQueryDb,
  projectId: string,
  input: { decisionId?: string | null; objectRef?: string | null },
): Promise<DurableResolveResult> {
  const durableId = (input.decisionId ?? "").trim();
  if (durableId) {
    const row = (
      await queryDb
        .select({
          id: humanDecisions.id,
          kind: humanDecisions.kind,
          state: humanDecisions.state,
          objectRef: humanDecisions.objectRef,
          projectId: humanDecisions.projectId,
        })
        .from(humanDecisions)
        .where(and(eq(humanDecisions.id, durableId), eq(humanDecisions.projectId, projectId)))
        .limit(1)
    )[0];
    if (!row || row.state !== "APPLICABLE") {
      return {
        ok: false,
        reasonCode: "AMBIGUOUS",
        reason: "decisionId durable absent, hors projet ou non APPLICABLE",
      };
    }
    const objectRef = (input.objectRef ?? "").trim();
    if (objectRef && (row.objectRef ?? "").trim() !== objectRef) {
      return {
        ok: false,
        reasonCode: "AMBIGUOUS",
        reason: "decisionId durable incompatible avec objectRef qualifié",
      };
    }
    return { ok: true, id: row.id };
  }

  const objectRef = (input.objectRef ?? "").trim();
  if (!objectRef) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "REVISE_DECISION sans decisionId ni objectRef durable — clarification requise",
    };
  }

  const rows = await queryDb
    .select({
      id: humanDecisions.id,
      kind: humanDecisions.kind,
      state: humanDecisions.state,
      objectRef: humanDecisions.objectRef,
    })
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId));

  const matches = rows.filter(
    (r) =>
      r.state === "APPLICABLE" &&
      r.kind === "RECORD_DECISION" &&
      (r.objectRef ?? "").trim() === objectRef,
  );
  if (matches.length === 0) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Aucune décision APPLICABLE pour objectRef durable",
    };
  }
  if (matches.length > 1) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Plusieurs décisions pour objectRef — précisez decisionId",
    };
  }
  return { ok: true, id: matches[0]!.id };
}

/**
 * Resolve LIFT_RESTRICTION target from durable kind/target hints.
 * Unique ACTIVE match required. No substring / first-match selection.
 */
export async function resolveLiftRestrictionTarget(
  queryDb: DurableQueryDb,
  projectId: string,
  input: {
    restrictionKindHint?: string | null;
    restrictionTargetRefHint?: string | null;
    activeCycle?: { id: string; cycleType: string } | null;
  },
): Promise<DurableResolveResult> {
  const kindHint = (input.restrictionKindHint ?? "").trim().toUpperCase();
  const targetHint = (input.restrictionTargetRefHint ?? "").trim();

  const active = await queryDb
    .select()
    .from(governanceRestrictions)
    .where(
      and(
        eq(governanceRestrictions.projectId, projectId),
        eq(governanceRestrictions.status, "ACTIVE"),
      ),
    );

  let pool = kindHint
    ? active.filter((r) => r.targetKind.toUpperCase() === kindHint)
    : active;

  if (targetHint) {
    pool = pool.filter((r) =>
      restrictionTargetMatchesHint({
        targetRef: r.targetRef,
        hint: targetHint,
        activeCycle: input.activeCycle,
      }),
    );
  }

  if (pool.length === 0) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Aucune restriction active correspondant à la qualification durable",
    };
  }
  if (pool.length > 1) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Plusieurs restrictions actives — précisez laquelle lever",
    };
  }
  return { ok: true, id: pool[0]!.id };
}
