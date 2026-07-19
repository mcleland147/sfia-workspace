/**
 * GPT / OpenAI spike contracts — EXPERIMENTAL POC.
 * Model proposes/qualifies; Morris alone decides.
 * ChatGPT app ≠ OpenAI API (this spike uses OpenAI API only when live-gated).
 */

export const GPT_CONTRACT_SCHEMA_VERSION = "gpt-spike-1.0.0";

/** OpenAI Chat Completions json_schema (strict) for VerdictCandidate — mirrors contract, no extras. */
export const VERDICT_CANDIDATE_JSON_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: [
    "schemaVersion",
    "requestId",
    "correlationId",
    "status",
    "observations",
    "provenElements",
    "unprovenElements",
    "risks",
    "reserves",
    "recommendations",
    "decisionsRequiredFromMorris",
    "forbiddenClaimsDetected",
    "proposedVerdict",
    "modelMetadata",
  ],
  properties: {
    schemaVersion: { type: "string", enum: [GPT_CONTRACT_SCHEMA_VERSION] },
    requestId: { type: "string" },
    correlationId: { type: "string" },
    status: {
      type: "string",
      enum: ["OBSERVED", "PARTIAL", "INCONCLUSIVE", "FAILED", "READY_FOR_MORRIS_REVIEW"],
    },
    observations: { type: "array", items: { type: "string" } },
    provenElements: { type: "array", items: { type: "string" } },
    unprovenElements: { type: "array", items: { type: "string" } },
    risks: { type: "array", items: { type: "string" } },
    reserves: { type: "array", items: { type: "string" } },
    recommendations: { type: "array", items: { type: "string" } },
    decisionsRequiredFromMorris: { type: "array", items: { type: "string" } },
    forbiddenClaimsDetected: { type: "array", items: { type: "string" } },
    proposedVerdict: {
      type: "string",
      enum: ["PASS_WITH_RESERVES", "FAIL", "INCONCLUSIVE", "NEEDS_MORRIS_DECISION"],
    },
    modelMetadata: {
      type: "object",
      additionalProperties: false,
      required: ["provider", "mechanism", "model", "experimental", "productionReadyClaimed"],
      properties: {
        provider: { type: "string", enum: ["openai-api"] },
        mechanism: { type: "string", enum: ["openai-chat-completions-https"] },
        model: { type: "string" },
        experimental: { type: "boolean", enum: [true] },
        productionReadyClaimed: { type: "boolean", enum: [false] },
      },
    },
  },
} as const;

export const VERDICT_RESPONSE_FORMAT = {
  type: "json_schema" as const,
  json_schema: {
    name: "verdict_candidate_gpt_spike_1_0_0",
    strict: true,
    schema: VERDICT_CANDIDATE_JSON_SCHEMA,
  },
};

export const QUALIFICATION_RESPONSE_FORMAT = {
  type: "json_object" as const,
};

export type GPTCycleCandidate = "Cycle 7" | "Cycle 8" | "Cycle 9" | "Cycle 13" | "DOC";
export type GPTProfileCandidate = "Light" | "Standard" | "Critical";

export type VerdictStatusCandidate =
  | "OBSERVED"
  | "PARTIAL"
  | "INCONCLUSIVE"
  | "FAILED"
  | "READY_FOR_MORRIS_REVIEW";

export type ProposedVerdictCandidate =
  | "PASS_WITH_RESERVES"
  | "FAIL"
  | "INCONCLUSIVE"
  | "NEEDS_MORRIS_DECISION";

export interface GPTModelMetadata {
  provider: "fixture" | "openai-api";
  mechanism: "gpt-fixture" | "openai-chat-completions-https";
  model: string;
  experimental: true;
  productionReadyClaimed: false;
  responseIdRedacted?: string;
  durationMs?: number;
}

export interface GPTUsageSummary {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  reasoningTokens?: number;
  modelReturned?: string;
  responseIdRedacted?: string;
  durationMs: number;
  /** Never invent monetary cost without an authorized tariff source. */
  monetaryCostClaimed: false;
  monetaryCostUsd?: never;
}

/** Safe HTTP/API failure evidence — never contains Authorization or API keys. */
export interface GPTHttpErrorEvidence {
  httpStatus: number;
  apiCode?: string;
  apiType?: string;
  messageSanitized: string;
  durationMs: number;
  bodyLen: number;
}

/** Safe observation of a successful Chat Completions HTTP body (no secrets). */
export interface GPTResponseObservation {
  httpStatus: 200;
  modelReturned?: string;
  responseIdRedacted?: string;
  finishReason?: string;
  contentType: "string" | "null" | "array" | "object" | "missing" | "other";
  contentLength: number;
  contentPreviewSanitized: string;
  hasMarkdownFence: boolean;
  looksLikeJsonObject: boolean;
  refusalPresent: boolean;
  reasoningTokens?: number;
  durationMs: number;
}

export interface GPTCallResult<T> {
  ok: boolean;
  status: "SUCCEEDED" | "FAILED" | "SKIPPED_LIVE_GATE";
  candidate?: T;
  errorCode?: string;
  errorMessage?: string;
  /** Present on HTTP failures when transport returned a status. */
  httpError?: GPTHttpErrorEvidence;
  /** Present when HTTP succeeded (even if later JSON/contract validation failed). */
  responseObservation?: GPTResponseObservation;
  usage?: GPTUsageSummary;
  liveInvoked: boolean;
  retriesAttempted: 0;
  experimental: true;
  productionReadyClaimed: false;
  /** Global cycle call number when live (1..10). */
  cycleCallNumber?: number;
}

export interface GPTQualificationRequest {
  requestId: string;
  correlationId: string;
  intent: string;
  repoRef: string;
  knownConstraints: string[];
  allowedPaths: string[];
  deniedPaths: string[];
  availableCycles: GPTCycleCandidate[];
  availableProfiles: GPTProfileCandidate[];
  decisionsAlreadyValidated: string[];
  decisionsStillOpen: string[];
  requestedAt: string;
  requestedBy: string;
  /** Allowlisted action tokens the model may propose (strict subset). */
  allowedActions: string[];
  requiredMorrisGates: string[];
}

export interface ExecutionContractCandidate {
  schemaVersion: typeof GPT_CONTRACT_SCHEMA_VERSION;
  requestId: string;
  correlationId: string;
  proposedCycle: GPTCycleCandidate;
  proposedProfile: GPTProfileCandidate;
  profileJustification: string;
  objective: string;
  allowedReadPaths: string[];
  allowedWritePaths: string[];
  deniedPaths: string[];
  requestedActions: string[];
  stopConditions: string[];
  requiredMorrisGates: string[];
  assumptions: string[];
  observations: string[];
  options: string[];
  recommendations: string[];
  /** Must be empty or only echo input decisionsAlreadyValidated. */
  validatedDecisions: string[];
  contractHashCandidate: string;
  modelMetadata: GPTModelMetadata;
}

export interface SyntheticOrchestrationResult {
  contractValidated: boolean;
  gateStatus: "OPEN" | "GO_FIXTURE_PROVIDED";
  /** cursor-fixture = synthetic; cursor-real-spike = experimental live Cursor in sandbox. */
  executionMode: "cursor-fixture" | "cursor-real-spike";
  executionOk: boolean;
  artifactRefs: string[];
  gitEffect: "none-remote";
  knownReserve: string;
  summary: string;
}

export interface GPTVerdictRequest {
  requestId: string;
  correlationId: string;
  executionContract: ExecutionContractCandidate;
  orchestrationResult: SyntheticOrchestrationResult;
  evidenceRefs: string[];
  knownReserves: string[];
  expectedVerdicts: ProposedVerdictCandidate[];
  decisionAuthority: "Morris";
}

export interface VerdictCandidate {
  schemaVersion: typeof GPT_CONTRACT_SCHEMA_VERSION;
  requestId: string;
  correlationId: string;
  status: VerdictStatusCandidate;
  observations: string[];
  provenElements: string[];
  unprovenElements: string[];
  risks: string[];
  reserves: string[];
  recommendations: string[];
  decisionsRequiredFromMorris: string[];
  forbiddenClaimsDetected: string[];
  proposedVerdict: ProposedVerdictCandidate;
  modelMetadata: GPTModelMetadata;
  /** Authority flags — must be absent or explicitly false. */
  decisionValidated?: false;
  mergeAuthorized?: false;
  goConsumed?: false;
  baselinePromoted?: false;
  productionReady?: false;
}

/** Synthetic S1-derived fixture intent (no real user data). */
export const GPT_SPIKE_SYNTHETIC_INTENT =
  "Analyser un document fixture en lecture seule et produire une synthèse locale dans un répertoire de preuve autorisé, après GO Morris explicite.";

export const GPT_SPIKE_ALLOWED_ACTIONS = [
  "read-fixture",
  "write-proof",
  "cursor-fixture",
  "git-read-local",
] as const;

export const GPT_SPIKE_DENIED_ACTIONS = [
  "git-commit",
  "git-push",
  "git-merge",
  "gh-pr",
  "cursor-real",
  "docker",
  "app-write",
] as const;
