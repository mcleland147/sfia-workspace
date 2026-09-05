/**
 * Optional USD accounting hook for native Agents model invocations.
 *
 * Runtime-generic: no nora-eval imports. Eval campaigns inject a bridge that
 * reuses BudgetTracker / capability pricing.
 *
 * hardCapUsd (via bridge BudgetTracker policy) is a PRE-DISPATCH ESTIMATED /
 * RESERVED AUTHORIZATION ENVELOPE — not a guaranteed provider invoice ceiling.
 * Observed estimate may exceed reserved estimate after a response; overrun is
 * Evidence and blocks any subsequent dispatch.
 */
export type NoraAgentsUsdSettleObservation = {
  /** Model invocations that successfully reserved this turn (filter pre-dispatch). */
  reservedInvocations: number;
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
};

export type NoraAgentsUsdSettleResult = {
  /** Reserved USD committed for this turn (pre-dispatch). */
  reservedUsd: number;
  /** Observed estimated USD for this turn (usage-based or conservative retain). */
  observedEstimatedUsd: number;
  /** Alias of observedEstimatedUsd for callers expecting estimatedUsd. */
  estimatedUsd: number;
  cumulativeReservedUsd: number;
  cumulativeObservedEstimatedUsd: number;
  /** BudgetTracker cumulative (max of reserved+topups accounting). */
  cumulativeUsd: number;
  usedConservativeFallback: boolean;
  /** True when observedEstimatedUsd > reservedUsd for this turn. */
  observedOverrun: boolean;
  /** True when cumulative observed estimate exceeds authorization hardCapUsd. */
  authorizationEnvelopeExceeded: boolean;
  /** Invoice is never claimed by this mechanism. */
  invoice: "NOT_OBSERVED";
};

export type NoraAgentsUsdAccounting = {
  /** Conservative estimate for ONE upcoming model invocation. */
  estimateNextInvocationUsd(): number;
  /**
   * Hard-cap preflight WITHOUT recording (so call-count claim can run first).
   * Uses authorization envelope (reserved + pending estimate), and denies if
   * a prior observed overrun already exceeded the envelope.
   */
  canDispatchUnderHardCap(estimateUsd: number): {
    allowed: boolean;
    reason?: string;
  };
  /**
   * Commit conservative USD after call-count claim succeeded.
   * Monotone — never widens/refunds.
   */
  commitReserve(estimateUsd: number): void;
  /**
   * Post-turn reconcile. Observed usage may be null → keep reserved
   * conservative spend (do not invent zeros as free).
   */
  settleTurn(
    observation: NoraAgentsUsdSettleObservation,
  ): NoraAgentsUsdSettleResult;
  /** How many successful reserves occurred since last settle (or start). */
  reservedInvocationCount(): number;
  /** Campaign-lifetime reserved invocation count (not reset on settle). */
  totalReservedInvocations(): number;
};
