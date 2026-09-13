/**
 * Server-side M3 profile selection (GAP-1 / GAP-2).
 * Never reads client adapter/command/real fields.
 */

import type { ExecutionContract } from "@/lib/oa/execution-contract";
import { isStudioCursorRealEnabled } from "@/lib/oa/execution-attempt";
import { isDeterministicCursorBoundaryEnabled } from "@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary";
import {
  BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
  boundedDocsWriteM3ResolutionProfile,
} from "./boundedDocsWriteM3ResolutionProfile";
import {
  BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON,
  boundedReadOnlyM3ResolutionProfile,
} from "./boundedReadOnlyM3ResolutionProfile";
import {
  FIXTURE_SAFE_M3_SUPERSESSION_REASON,
  fixtureSafeM3ResolutionProfile,
} from "./fixtureSafeM3ResolutionProfile";
import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";

export type ProductM3ResolutionKind =
  | "fixture"
  | "bounded_read_only"
  | "bounded_docs_write";

export type SelectedProductM3Resolution = {
  kind: ProductM3ResolutionKind;
  profile: M3ResolvedExecutionFields;
  supersessionReason: string;
};

function sortedEqual(a: readonly string[], b: readonly string[]): boolean {
  if (a.length !== b.length) return false;
  const left = [...a].sort();
  const right = [...b].sort();
  return left.every((v, i) => v === right[i]);
}

export function profileMatchesContract(
  contract: Pick<
    ExecutionContract,
    | "action"
    | "target"
    | "scope"
    | "reversibility"
    | "requiredCapabilities"
    | "constraints"
    | "stopConditions"
  >,
  profile: M3ResolvedExecutionFields,
): boolean {
  return (
    contract.action === profile.action &&
    contract.target === profile.target &&
    contract.scope === (profile.scope ?? contract.scope) &&
    contract.reversibility === profile.reversibility &&
    sortedEqual(contract.requiredCapabilities, profile.requiredCapabilities) &&
    sortedEqual(contract.constraints, profile.constraints ?? []) &&
    sortedEqual(contract.stopConditions, profile.stopConditions ?? [])
  );
}

export function authorizedM3ResolutionKind(
  contract: Pick<
    ExecutionContract,
    | "action"
    | "target"
    | "scope"
    | "reversibility"
    | "requiredCapabilities"
    | "constraints"
    | "stopConditions"
  >,
): ProductM3ResolutionKind | null {
  if (profileMatchesContract(contract, fixtureSafeM3ResolutionProfile())) {
    return "fixture";
  }
  if (profileMatchesContract(contract, boundedReadOnlyM3ResolutionProfile())) {
    return "bounded_read_only";
  }
  if (profileMatchesContract(contract, boundedDocsWriteM3ResolutionProfile())) {
    return "bounded_docs_write";
  }
  return null;
}

/**
 * @param preferBoundedReadOnlyProfile Server/test only. Never from the client.
 * @param preferBoundedDocsWriteProfile Server/test only. Never from the client.
 *   When true, returns docs-write; otherwise existing RO/fixture logic.
 * @param env Optional env snapshot for isStudioCursorRealEnabled /
 *   fail-closed deterministic Cursor boundary (TEST/E2E only).
 */
export function selectProductM3ResolutionProfile(input?: {
  preferBoundedReadOnlyProfile?: boolean;
  preferBoundedDocsWriteProfile?: boolean;
  env?: NodeJS.ProcessEnv;
}): SelectedProductM3Resolution {
  if (input?.preferBoundedDocsWriteProfile === true) {
    return {
      kind: "bounded_docs_write",
      profile: boundedDocsWriteM3ResolutionProfile(),
      supersessionReason: BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
    };
  }
  const env = input?.env ?? process.env;
  const useBounded =
    input?.preferBoundedReadOnlyProfile === true ||
    isStudioCursorRealEnabled(env) ||
    isDeterministicCursorBoundaryEnabled(env);
  if (useBounded) {
    return {
      kind: "bounded_read_only",
      profile: boundedReadOnlyM3ResolutionProfile(),
      supersessionReason: BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON,
    };
  }
  return {
    kind: "fixture",
    profile: fixtureSafeM3ResolutionProfile(),
    supersessionReason: FIXTURE_SAFE_M3_SUPERSESSION_REASON,
  };
}
