/**
 * Closed T-A5 policy. Every value is bounded and explicit: there is no
 * permissive default that could enable a real adapter, an unbounded retry or
 * an unbounded timeout.
 */
export type AttemptPolicy = {
  /** Default selection TTL applied when the caller passes none. */
  defaultSelectionTtlMs: number;
  /** Deterministic timeout deadline = startedAt + attemptTimeoutMs. */
  attemptTimeoutMs: number;
  /** Bounded RecordExecutionResult budget behind result_pending (RTA5-06). */
  maxResultRecordingAttempts: number;
  /** Bounded retry budget when the caller passes none (RTA5 / D09). */
  defaultMaxRetriesBudget: number;
};

export const DEFAULT_ATTEMPT_POLICY: AttemptPolicy = Object.freeze({
  defaultSelectionTtlMs: 15 * 60 * 1000,
  attemptTimeoutMs: 30 * 60 * 1000,
  maxResultRecordingAttempts: 3,
  defaultMaxRetriesBudget: 1,
});

export function resolveAttemptPolicy(
  overrides?: Partial<AttemptPolicy>,
): AttemptPolicy {
  const policy: AttemptPolicy = {
    ...DEFAULT_ATTEMPT_POLICY,
    ...(overrides ?? {}),
  };
  if (policy.defaultSelectionTtlMs <= 0) {
    throw new Error("attempt_policy_selection_ttl_must_be_positive");
  }
  if (policy.attemptTimeoutMs <= 0) {
    throw new Error("attempt_policy_timeout_must_be_positive");
  }
  if (policy.maxResultRecordingAttempts < 1) {
    throw new Error("attempt_policy_result_recording_budget_min_1");
  }
  if (policy.defaultMaxRetriesBudget < 0) {
    throw new Error("attempt_policy_retry_budget_min_0");
  }
  return Object.freeze(policy);
}
