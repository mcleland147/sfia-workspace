import type { AuthorityRestriction, AuthorityVerdict } from "@/domains/decisions/types";

const CYCLE_OPS = new Set(["OPEN_CYCLE", "CLOSE_CYCLE", "TRANSITION_CYCLE"]);
const METHOD_OPS = new Set(["CHOOSE_METHOD", "REPLACE_METHOD", "WITHDRAW_METHOD"]);
const TRAJECTORY_OPS = new Set(["RETAIN_TRAJECTORY"]);

function active(restrictions: AuthorityRestriction[]): AuthorityRestriction[] {
  return restrictions.filter((r) => r.status === "ACTIVE");
}

function matchesMethod(targetRef: string, methodRef: string | null | undefined): boolean {
  if (targetRef === "*") return true;
  const ref = (methodRef ?? "").trim().toLowerCase();
  if (!ref) return targetRef === "*";
  return targetRef.trim().toLowerCase() === ref;
}

function isGlobalTarget(targetRef: string | null | undefined): boolean {
  const value = (targetRef ?? "").trim();
  return value === "" || value === "*";
}

/** Case-insensitive match against a non-global restriction target. `*` and empty are global. */
function matchesScopedTarget(
  targetRef: string,
  candidates: Array<string | null | undefined>,
): boolean {
  if (isGlobalTarget(targetRef)) return true;
  const needle = targetRef.trim().toLowerCase();
  return candidates.some((candidate) => {
    const value = (candidate ?? "").trim().toLowerCase();
    return value.length > 0 && value !== "*" && value === needle;
  });
}

/**
 * Identities actually mutated by the operation. TRANSITION_CYCLE mutates both
 * the active source (A) and the target type being opened (B). Client-only strings
 * that do not identify A or B are ignored when the server supplies the active cycle.
 */
export function cycleMutationCandidates(input: {
  operation: string;
  cycleId?: string | null;
  cycleType?: string | null;
  toCycleType?: string | null;
  toCycleId?: string | null;
}): Array<string | null | undefined> {
  if (input.operation === "TRANSITION_CYCLE") {
    return [input.cycleId, input.cycleType, input.toCycleType, input.toCycleId];
  }
  return [input.cycleId, input.cycleType];
}

/**
 * Point-of-effect authority. A lifted restriction does not count.
 * METHOD_USE limits use in the projection; it does not erase the retained method
 * and it does not block a later governance act.
 * CYCLE_MUTATION / PILOTAGE_EFFECT: `*` or empty blocks every matching operation;
 * any other targetRef blocks only the cycle, method, or effect it names.
 * For TRANSITION_CYCLE, a restriction on source A or target B blocks the whole
 * atomic CLOSE+OPEN (no partial effect).
 * LIFT / REVOKE / APPLY / RECORD / REVISE / PROPOSE stay available so the pilot can govern.
 */
export function evaluateCurrentAuthority(input: {
  operation: string;
  restrictions: AuthorityRestriction[];
  methodRef?: string | null;
  cycleId?: string | null;
  cycleType?: string | null;
  toCycleType?: string | null;
  toCycleId?: string | null;
  effectTargetRef?: string | null;
}): AuthorityVerdict {
  const rows = active(input.restrictions);
  let usageRestricted = false;
  for (const r of rows) {
    if (r.targetKind === "METHOD_USE" && matchesMethod(r.targetRef, input.methodRef)) {
      usageRestricted = true;
    }
  }
  const cycleCandidates = cycleMutationCandidates(input);
  for (const r of rows) {
    if (
      r.targetKind === "CYCLE_MUTATION" &&
      CYCLE_OPS.has(input.operation) &&
      matchesScopedTarget(r.targetRef, cycleCandidates)
    ) {
      return {
        allowed: false,
        usageRestricted,
        restrictionId: r.id,
        reason: "Mutation de cycle restreinte",
      };
    }
    if (
      r.targetKind === "PILOTAGE_EFFECT" &&
      (CYCLE_OPS.has(input.operation) ||
        METHOD_OPS.has(input.operation) ||
        TRAJECTORY_OPS.has(input.operation)) &&
      matchesScopedTarget(r.targetRef, [
        input.effectTargetRef,
        ...cycleCandidates,
        input.methodRef,
      ])
    ) {
      return {
        allowed: false,
        usageRestricted,
        restrictionId: r.id,
        reason: "Effet de pilotage restreint",
      };
    }
  }
  return { allowed: true, usageRestricted };
}

/** Projection flag: retained method whose use is restricted. Absence is not a restriction. */
export function methodUsageRestricted(
  restrictions: AuthorityRestriction[],
  methodRef: string | null | undefined,
): boolean {
  if (!methodRef) return false;
  return active(restrictions).some(
    (r) => r.targetKind === "METHOD_USE" && matchesMethod(r.targetRef, methodRef),
  );
}
