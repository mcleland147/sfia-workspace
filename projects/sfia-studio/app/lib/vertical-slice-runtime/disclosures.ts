import "./serverGuard";

/**
 * D-V2-05 runtime disclosures — always attached to runtime results.
 * M3–M6: Project/LPS/Cycle/Decision/Contract + Attempt/Evidence/ReviewBundle +
 * ProjectTrajectory/materialized Epistemic/granted Confirmation are Product SQLite
 * restart-safe on the Product path; conversation/proposal/requested Confirmation
 * remain process-local.
 * Not a product-ready / v3-ADOPTED / Cursor REAL / Gate D claim surface.
 * W2 H→N bounded capacity is CLOSED BY MORRIS; Product Completion remains incomplete;
 * W3 NOT AUTHORIZED; bounded Phase B cognition may be IMPLEMENTED_DETERMINISTIC_NOT_REAL.
 */
export interface RuntimeDisclosures {
  readonly runtimeMode: "LOCAL_PROCESS";
  /** Partial: Product SQLite durable for OA M1–M6 aggregates; conversation/proposal/Claims Memory remain process-local. */
  readonly persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE";
  readonly agentExecution: "DISABLED";
  readonly iam: "NOT_SELECTED";
  readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
  readonly delivery: "NOT_AUTHORIZED";
  readonly cutover: "NOT_AUTHORIZED";
  /** True because conversation/proposal/requested Confirmation (and Claims/Maturity Memory) remain volatile. */
  readonly localDataVolatile: true;
  /** True for non-durable stacks; Product Project/LPS/Cycle/Decision/Contract/Attempt/Evidence/RB/Trajectory survive restart. */
  readonly restartMayLoseState: true;
  readonly projectLpsRestartSafe: true;
  readonly cycleInstanceRestartSafe: true;
  readonly humanDecisionRestartSafe: true;
  readonly executionContractRestartSafe: true;
  /** W1/M6: ProjectTrajectory versions + effective current pointer are durable. */
  readonly projectTrajectoryRestartSafe: true;
  /** W1/M6 selective-by-materialization: materialized EpistemicItems are durable. */
  readonly materializedEpistemicRestartSafe: true;
  /** W1/M6: granted/consumed Confirmation is durable as historical scoped consent. */
  readonly grantedConfirmationRestartSafe: true;
  /** Requested Confirmation is process-local by design — never restored as authority. */
  readonly requestedConfirmationRestartSafe: false;
  /**
   * Restored granted Confirmation is historical scoped consent, never current
   * effective authority — revalidation is always required before authorization.
   */
  readonly restoredConfirmationIsHistoricalConsentOnly: true;
  /**
   * W2 H→N bounded capacity CLOSED BY MORRIS after Final Closure Requalification.
   * ≠ Product Completion complete · ≠ W3 authorized · ≠ REAL · ≠ runtime v3 ADOPTED.
   */
  readonly w2Cognition: "CLOSED_BY_MORRIS";
  /**
   * Bounded W2 Track D Phase B: product-native CKC cognition on the W2 path,
   * deterministic Fake proof only. NOT REAL, NOT full CKC track,
   * W2 CLOSED BY MORRIS, runtime v3 NON ADOPTED.
   */
  readonly ckcPhaseBCognition: "IMPLEMENTED_DETERMINISTIC_NOT_REAL";
  readonly messages: readonly string[];
}

export const RUNTIME_DISCLOSURE_MESSAGES: readonly string[] = Object.freeze([
  "Mode local process-bound: the runtime lives in a single Node process.",
  "Project/LPS + CycleInstance + HumanDecision + ExecutionContract Product persistence uses an isolated node:sqlite store (G0-B / M1 / M2 / M3).",
  "ExecutionAttempt, Evidence, ReviewBundle, and LPS evidence/RB links persist in Product SQLite (M5) on the Product path.",
  "ProjectTrajectory versions and the effective current pointer persist in Product SQLite (M6) on the Product path.",
  "Materialized EpistemicItems persist in Product SQLite (M6, selective-by-materialization); non-materialized reasoning is not persisted.",
  "ExecutionContract inspection attestations and AuthorityVerificationReceipts persist in Product SQLite (M7) as audit-only proof.",
  "Conversation and Proposal F2 remain process-local and may be lost on restart.",
  "Requested Confirmation is process-local; granted/consumed Confirmation is durable as historical scoped consent only, never restored as current effective authority.",
  "ClaimEvaluation / MaturityAssessment remain Memory (out of minimal M5/M6).",
  "Local single-user Pilote authority is TEMPORARY WITH EXIT (server-owned; client claims ignored).",
  "Cursor PREPARE-only projection — executionAllowed=false, cursorReal=false, Gate D NOT_CONSUMED.",
  "IAM is not configured.",
  "Real agent execution is disabled.",
  "Delivery and cutover are not authorized.",
  "Runtime v3 is not ADOPTED.",
  "W2 cognition/trajectory/decision capability is CLOSED BY MORRIS — Product Completion remains incomplete; W3 NOT AUTHORIZED; W2-CL-R04 OPEN_NON_BLOCKING; PB-RES-REAL-01 OPEN / TRACE ONLY.",
  "CKC Phase B bounded cognition is IMPLEMENTED with DETERMINISTIC proof only — NOT REAL, NOT full CKC track, W2 CLOSED BY MORRIS, runtime v3 NON ADOPTED.",
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
  projectTrajectoryRestartSafe: true,
  materializedEpistemicRestartSafe: true,
  grantedConfirmationRestartSafe: true,
  requestedConfirmationRestartSafe: false,
  restoredConfirmationIsHistoricalConsentOnly: true,
  w2Cognition: "CLOSED_BY_MORRIS",
  ckcPhaseBCognition: "IMPLEMENTED_DETERMINISTIC_NOT_REAL",
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
