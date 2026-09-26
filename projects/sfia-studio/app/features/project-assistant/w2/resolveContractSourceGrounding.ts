/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — lightweight prepare-time bridge
 * between durable cycle read facts and ExecutionContract source grounding.
 *
 * Reads only what is already durable (MW4-S01 grounding refs / MW4-S03 read
 * coverage). Never re-runs cognitive analysis, never calls a model, never
 * loads file contents.
 *
 * Unreadable coverage returns `null` → grounding is UNAVAILABLE, never assumed.
 * Wrong-cycle and SHA-stale refs are filtered / tagged honestly.
 */

import {
  ProductSqliteSession,
  acceptGroundingRefsForProject,
  loadGroundingRefsFromSession,
  resolveNoraSessionSqlitePath,
} from "@/lib/nora-cognitive-runtime";
import {
  buildContractSourceGrounding,
  contractSourceDocumentPath,
  isRepositorySourceRef,
  type ContractSourceGrounding,
  type ContractSourceGroundingCoverage,
  type ContractSourceGroundingRef,
} from "@/lib/oa/execution-contract";

/**
 * Durable read facts for a project/cycle, or `null` when unreadable.
 * Injected so prepare stays deterministic in tests (no implicit sqlite).
 */
export type ContractSourceGroundingReader = (input: {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly repositoryHeadSha?: string | null;
}) => Promise<readonly ContractSourceGroundingRef[] | null>;

const COVERAGE_KINDS: readonly ContractSourceGroundingCoverage[] = [
  "full",
  "partial",
  "failed",
  "denied",
  "absent",
];

/**
 * Production reader — durable Nora session grounding record (read coverage).
 * Cycle-scoped when the durable ref carries a cycle; SHA-stamped when present.
 */
export function createNoraSessionContractSourceGroundingReader(options?: {
  readonly sessionDbPath?: string;
  readonly sessionKey?: string;
}): ContractSourceGroundingReader {
  return async ({ projectId, cycleInstanceId }) => {
    let session: ProductSqliteSession | null = null;
    try {
      const dbPath = resolveNoraSessionSqlitePath(options?.sessionDbPath);
      session = new ProductSqliteSession({
        projectId,
        dbPath,
        sessionKey: options?.sessionKey ?? "f1-default",
      });
      const record = acceptGroundingRefsForProject(
        await loadGroundingRefsFromSession(session),
        projectId,
      );
      if (!record) return [];
      const expectedCycle = cycleInstanceId.trim();
      // repositoryHeadSha is enforced by buildContractSourceGrounding currentness.
      return (record.readCoverage ?? [])
        .filter(
          (ref) =>
            isRepositorySourceRef(contractSourceDocumentPath(ref.pathOrRef)) &&
            COVERAGE_KINDS.includes(ref.coverage),
        )
        .filter((ref) => {
          const refCycle = ref.cycleInstanceId?.trim() || null;
          // Materially other-cycle reads are not accepted for this contract.
          if (expectedCycle && refCycle && refCycle !== expectedCycle) {
            return false;
          }
          return true;
        })
        .map((ref) => {
          const refCycle = ref.cycleInstanceId?.trim() || null;
          const refSha = ref.repositoryHeadSha?.trim() || null;
          const sameCycle =
            expectedCycle.length > 0 && refCycle === expectedCycle;
          return {
            pathOrRef: contractSourceDocumentPath(ref.pathOrRef),
            coverage: ref.coverage,
            origin: (sameCycle
              ? "current_cycle_read"
              : "remembered_prior_read") as ContractSourceGroundingRef["origin"],
            rememberedAtIso: ref.rememberedAtIso ?? null,
            cycleInstanceId: refCycle,
            repositoryHeadSha: refSha,
          };
        });
    } catch {
      // Unreadable durable coverage — fail honest (UNAVAILABLE), not grounded.
      return null;
    } finally {
      session?.close();
    }
  };
}

/**
 * Compose the contract-ready grounding summary for prepare.
 * Missing reader ⇒ `null` coverage ⇒ UNAVAILABLE honesty (never a claim).
 */
export async function resolveContractSourceGroundingForPrepare(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly declaredSources: readonly string[];
  readonly repositoryIdentity?: string | null;
  readonly repositoryHeadSha?: string | null;
  readonly reader?: ContractSourceGroundingReader | null;
}): Promise<ContractSourceGrounding> {
  let coverage: readonly ContractSourceGroundingRef[] | null = null;
  if (input.reader) {
    try {
      coverage = await input.reader({
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        repositoryHeadSha: input.repositoryHeadSha ?? null,
      });
    } catch {
      coverage = null;
    }
  }
  return buildContractSourceGrounding({
    declaredSources: input.declaredSources,
    readCoverage: coverage,
    repositoryIdentity: input.repositoryIdentity ?? null,
    repositoryHeadSha: input.repositoryHeadSha ?? null,
    cycleInstanceId: input.cycleInstanceId,
  });
}
