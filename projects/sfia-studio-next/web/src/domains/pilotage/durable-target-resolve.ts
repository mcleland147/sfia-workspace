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

/** True when durable / stored targetRef denotes global scope (empty or "*"). */
export function isGlobalRestrictionTarget(targetRef: string | null | undefined): boolean {
  const value = (targetRef ?? "").trim();
  return value === "" || value === "*";
}

/**
 * Match an ACTIVE restriction targetRef against a durable target hint.
 * Specific durable hints never select a global "*" restriction.
 * Global durable hints ("" / "*") match only global ACTIVE targets.
 * CycleType ↔ active cycle id remains an explicit contractual equivalence.
 */
export function restrictionTargetMatchesHint(input: {
  targetRef: string;
  hint: string;
  activeCycle?: { id: string; cycleType: string } | null;
}): boolean {
  const refRaw = (input.targetRef ?? "").trim();
  const hintRaw = input.hint.trim();
  const ref = refRaw.toUpperCase();
  const hint = hintRaw.toUpperCase();

  // Empty / "*" durable hint ⇒ only an explicitly global ACTIVE restriction.
  if (isGlobalRestrictionTarget(hintRaw)) {
    return isGlobalRestrictionTarget(refRaw);
  }

  // Specific durable hint never widens to a global restriction.
  if (isGlobalRestrictionTarget(refRaw)) {
    return false;
  }

  if (ref === hint) return true;

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
    // Same strictness as objectRef resolution: only RECORD_DECISION is revisable via D6.
    if (row.kind !== "RECORD_DECISION") {
      return {
        ok: false,
        reasonCode: "INVALID",
        reason: "decisionId durable n'est pas une RECORD_DECISION APPLICABLE",
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

  // Absent / empty target hint is not an implicit authorization to lift a global "*".
  // Require an explicit durable target (specific or global "*") before matching.
  if (!targetHint.trim()) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason:
        "LIFT_RESTRICTION sans restrictionTargetRefHint durable — clarification requise",
    };
  }

  pool = pool.filter((r) =>
    restrictionTargetMatchesHint({
      targetRef: r.targetRef,
      hint: targetHint,
      activeCycle: input.activeCycle,
    }),
  );

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
