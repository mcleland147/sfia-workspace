import "./serverGuard";

/**
 * D-V2-05 runtime disclosures — always attached to runtime results.
 * M3–M5: Project/LPS/Cycle/Decision/Contract + Attempt/Evidence/ReviewBundle Product SQLite
 * restart-safe on Product path; conversation/proposal remain process-local;
 * Claims/Maturity/Confirmation remain Memory (out of minimal M5).
 * Not a product-ready / v3-ADOPTED / Cursor REAL / Gate D claim surface.
 */
export interface RuntimeDisclosures {
  readonly runtimeMode: "LOCAL_PROCESS";
  /** Partial: Product SQLite durable for OA M1–M5 aggregates; conversation/proposal/Claims Memory remain process-local. */
  readonly persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE";
  readonly agentExecution: "DISABLED";
  readonly iam: "NOT_SELECTED";
  readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
  readonly delivery: "NOT_AUTHORIZED";
  readonly cutover: "NOT_AUTHORIZED";
  /** True because conversation/proposal (and Claims/Maturity Memory) remain volatile. */
  readonly localDataVolatile: true;
  /** True for non-durable stacks; Product Project/LPS/Cycle/Decision/Contract/Attempt/Evidence/RB survive restart. */
  readonly restartMayLoseState: true;
  readonly projectLpsRestartSafe: true;
  readonly cycleInstanceRestartSafe: true;
  readonly humanDecisionRestartSafe: true;
  readonly executionContractRestartSafe: true;
  readonly messages: readonly string[];
}

export const RUNTIME_DISCLOSURE_MESSAGES: readonly string[] = Object.freeze([
  "Mode local process-bound: the runtime lives in a single Node process.",
  "Project/LPS + CycleInstance + HumanDecision + ExecutionContract Product persistence uses an isolated node:sqlite store (G0-B / M1 / M2 / M3).",
  "ExecutionAttempt, Evidence, ReviewBundle, and LPS evidence/RB links persist in Product SQLite (M5) on the Product path.",
  "Conversation and Proposal F2 remain process-local and may be lost on restart.",
  "ClaimEvaluation / MaturityAssessment / Confirmation remain Memory (out of minimal M5).",
  "Trajectory/Epistemic Memory remain process-local (out of M3/M5 durability).",
  "Local single-user Morris authority is TEMPORARY WITH EXIT (server-owned; client claims ignored).",
  "Cursor PREPARE-only projection — executionAllowed=false, cursorReal=false, Gate D NOT_CONSUMED.",
  "IAM is not configured.",
  "Real agent execution is disabled.",
  "Delivery and cutover are not authorized.",
  "Runtime v3 is not ADOPTED.",
]);

export const RUNTIME_DISCLOSURES: RuntimeDisclosures = Object.freeze({
  runtimeMode: "LOCAL_PROCESS",
  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
  agentExecution: "DISABLED",
  iam: "NOT_SELECTED",
  productPersistence: "SQLITE_OA_PRODUCT_STORE",
  delivery: "NOT_AUTHORIZED",
  cutover: "NOT_AUTHORIZED",
  localDataVolatile: true,
  restartMayLoseState: true,
  projectLpsRestartSafe: true,
  cycleInstanceRestartSafe: true,
  humanDecisionRestartSafe: true,
  executionContractRestartSafe: true,
  messages: RUNTIME_DISCLOSURE_MESSAGES,
});

/**
 * Honest readiness projection for future Overview UI.
 * Never claims HARD closed, T-A6 complete, RUN READY, or product ready.
 */
export interface RuntimeReadinessProjection {
  readonly status: "NOT_READY";
  readonly hard: "OPEN";
  readonly tA6: "INCOMPLETE";
  readonly iam: "NOT_SELECTED";
  readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
  readonly realAgentExecution: "DISABLED";
  readonly delivery: "NOT_AUTHORIZED";
  readonly cutover: "NOT_AUTHORIZED";
  readonly runReady: false;
  readonly productReady: false;
}

export const RUNTIME_READINESS_NOT_READY: RuntimeReadinessProjection =
  Object.freeze({
    status: "NOT_READY",
    hard: "OPEN",
    tA6: "INCOMPLETE",
    iam: "NOT_SELECTED",
    productPersistence: "SQLITE_OA_PRODUCT_STORE",
    realAgentExecution: "DISABLED",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    runReady: false,
    productReady: false,
  });
