/**
 * CORR-PROOF-05 #3B — semantic binding for Git/repository proof Evidence.
 * Pure; no persistence. Type alone is never sufficient.
 * Lexical matching uses explicit token/namespace boundaries — never substring "git".
 */
import type { Evidence } from "@/lib/oa/evidence-review";

export type GitQualifiableContract = {
  contractId: string;
  requiredCapabilities?: string[];
  action?: string;
  target?: string;
  scope?: string;
};

/**
 * True iff `value` contains an explicit Git/repository semantic marker as a
 * lexical token or namespaced prefix (case-insensitive).
 *
 * Accepted shapes (examples):
 * - `git`
 * - `git.commit` / `git:commit` / `git/commit` / `git-commit` / `git://…`
 * - `repository` / `repository-ref` / `repository:…` / `repository/…`
 *
 * Rejected (substring false positives):
 * - `digital-signature`, `digital-attestation`, `legitimate-document`, …
 * - `github` / `gitlab` (provider names are NOT accepted via bare "git" substring)
 */
export function hasGitRepositorySemanticMarker(value: string): boolean {
  const v = value.trim().toLowerCase();
  if (!v) return false;
  // Token boundary: marker not embedded inside an alphanumeric word.
  // Allows separators . : / - _ after the marker (namespace forms).
  return (
    /(?:^|[^a-z0-9])git(?:$|[^a-z0-9])/.test(v) ||
    /(?:^|[^a-z0-9])repository(?:$|[^a-z0-9])/.test(v)
  );
}

/** EC makes Git applicable via capability or action/target/scope markers. */
export function isGitApplicableContract(
  contract: GitQualifiableContract,
): boolean {
  const fromCaps = (contract.requiredCapabilities ?? []).some((cap) =>
    hasGitRepositorySemanticMarker(cap),
  );
  const fromFields = [contract.action, contract.target, contract.scope].some(
    (v) => typeof v === "string" && hasGitRepositorySemanticMarker(v),
  );
  return fromCaps || fromFields;
}

/**
 * Evidence qualifies as git proof only when status is supporting AND
 * semantically bound to a git-applicable EC, or (without EC binding)
 * same-cycle with explicit Git/repository location|source marker.
 */
export function isGitQualifyingEvidence(
  evidence: Evidence,
  gitApplicableContractIds: ReadonlySet<string> | readonly string[],
  cycleInstanceId: string,
): boolean {
  if (evidence.status !== "available" && evidence.status !== "verified") {
    return false;
  }

  const ids =
    gitApplicableContractIds instanceof Set
      ? gitApplicableContractIds
      : new Set(gitApplicableContractIds);

  const ecId =
    evidence.bindings?.executionContractId ??
    (evidence as Evidence & { executionContractId?: string }).executionContractId;
  if (ecId) {
    // Bound to a specific EC: only a git-applicable EC qualifies (never fall through).
    return ids.has(ecId);
  }

  const sameCycle = evidence.bindings?.cycleInstanceId === cycleInstanceId;
  if (sameCycle) {
    const location = evidence.location ?? "";
    const source = evidence.source ?? "";
    if (
      hasGitRepositorySemanticMarker(location) ||
      hasGitRepositorySemanticMarker(source)
    ) {
      return true;
    }
  }

  return false;
}
