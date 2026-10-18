/**
 * R2 — Tool-first safety closure: pathless non-mutating missions vs Cursor REAL.
 *
 * Product may stamp NO_REPOSITORY_MUTATION_* on a bounded analysis EC.
 * Cursor REAL generalist currently launches with `--sandbox disabled --force`
 * (full write capability) — a contract string / prompt is NOT enforcement.
 *
 * M4 bounded read-only (`cap:cursor.read_only`) exists but is a distinct
 * agent/action/target/scope — reusing it for Product generalist would be a
 * new architecture (Morris GO required). Until then: fail-closed at Product
 * Select/Start when REAL is armed for these contracts.
 *
 * Fake/DET (SFIA_STUDIO_CURSOR_REAL ≠ "1") remains admissible.
 */

import type { ExecutionContract } from "@/lib/oa/execution-contract";

export const BOUNDED_NON_MUTATING_REAL_BLOCK_CODE =
  "BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE" as const;

export function isBoundedPathlessNonMutatingContract(
  contract: ExecutionContract,
): boolean {
  const constraints = contract.constraints ?? [];
  const stops = contract.stopConditions ?? [];
  const inputs =
    contract.inputs && typeof contract.inputs === "object"
      ? (contract.inputs as Record<string, unknown>)
      : null;
  const stamped =
    inputs?.boundedNonMutatingAnalysis === true ||
    constraints.includes("MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED") ||
    stops.includes("NO_REPOSITORY_MUTATION_FOR_BOUNDED_ANALYSIS");
  if (!stamped) return false;
  const scopeIn = Array.isArray(inputs?.scopeIn) ? inputs!.scopeIn : [];
  const concrete = scopeIn.filter(
    (p) => typeof p === "string" && p.trim().length > 0 && !p.includes(" "),
  );
  return concrete.length === 0;
}

/**
 * When REAL Cursor is armed, pathless non-mutating ECs cannot launch —
 * no technical no-write enforcement exists on the generalist REAL boundary.
 */
export function assertBoundedNonMutatingCursorRealAdmissible(
  contract: ExecutionContract,
):
  | { readonly ok: true }
  | {
      readonly ok: false;
      readonly code: typeof BOUNDED_NON_MUTATING_REAL_BLOCK_CODE;
      readonly message: string;
    } {
  if (!isBoundedPathlessNonMutatingContract(contract)) {
    return { ok: true };
  }
  if (process.env.SFIA_STUDIO_CURSOR_REAL !== "1") {
    return { ok: true };
  }
  return {
    ok: false,
    code: BOUNDED_NON_MUTATING_REAL_BLOCK_CODE,
    message:
      "Mission pathless non mutative : la frontière Cursor REAL généraliste " +
      "n'applique pas de sandbox no-write technique (--sandbox disabled). " +
      "Lancement REAL refusé avant Select/Start — aucun effet. " +
      "Fake/DET reste admissible ; enforcement REAL requiert un GO Morris " +
      "(capacité read-only enforceable ou sandbox).",
  };
}
