/**
 * Test-only helpers for pure verifyLocalCommitFacts unit tests.
 * NOT exported from Product execution-attempt public index (CR-GCEC-AGENT-09).
 */
import type { LocalCommitObservedFacts } from "@/lib/oa/execution-attempt";

/** Plain fixture for the pure verifier — not Product Evidence provenance. */
export function localCommitFactsFixture(
  facts: Omit<
    LocalCommitObservedFacts,
    "observationSource" | "workspacePath" | "priorAttemptId"
  > & {
    workspacePath?: string;
    priorAttemptId?: string;
  },
): LocalCommitObservedFacts {
  return {
    ...facts,
    workspacePath: facts.workspacePath ?? "/tmp/test-only-wt",
    priorAttemptId: facts.priorAttemptId ?? "xat:test-prior",
    observationSource: "studio:local_git_readonly",
  };
}
