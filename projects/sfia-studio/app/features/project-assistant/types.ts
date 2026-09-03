/**
 * Project Assistant DTOs — F1 conversation + F2 qualification/proposal/gate + F3 fixture.
 * Ephemeral / process-local only (no durable persistence).
 */

import type {
  DecisionDto,
  IntentClass,
  ProposalDto,
  QualificationDto,
} from "./f2/types";
import type {
  F3EvidenceDto,
  F3ExecutePayload,
  F3PreparePayload,
  F3RecommendationDto,
  F3ReviewBundleDto,
} from "./f3/types";

export type AssistantUiMode = "fixture" | "live" | "unavailable" | "unconfirmed";

export type AssistantTurnStatus =
  | "ok"
  | "cognitive_stop"
  | "provider_unavailable"
  | "provider_error"
  | "project_not_found"
  | "validation_error"
  | "stale"
  | "decision_error"
  | "prepare_error"
  | "execute_error";

export type ContradictionDispositionDto =
  | "none"
  | "candidate"
  | "evidence_backed";

export type CognitiveProgressionDto =
  | "PROGRESS_OK"
  | "PROGRESS_WITH_CONTRADICTION"
  | "COGNITIVE_STOP"
  | "TECHNICAL_FAILURE";

/** MW3 CIS-shaped surface — process-local; ≠ Execute STOP; ≠ HumanDecision. */
export type Mw3CognitiveSurfaceDto = {
  disposition: ContradictionDispositionDto;
  progression: CognitiveProgressionDto;
  cognitiveStop: boolean;
  reason: string | null;
  evidenceIds: string[];
  sourceIds: string[];
  governingPremise: string | null;
  nextAction: string | null;
  insufficiencyReasons: string[];
  /** Anti-claim: never a silent SUCCESS when cognitiveStop. */
  allowsSilentSuccess: false;
  /** Visible blocked impact when Cognitive STOP; null otherwise. */
  blockedImpact?: string | null;
  /** Honest continue when contradiction is surfaced without STOP. */
  mayContinue?: boolean;
  /** Explicit: this surface is not a technical/provider failure. */
  notTechnicalFailure?: boolean;
};

export type AssistantHistoryMessage = {
  role: "user" | "assistant";
  content: string;
};

export type AssistantToolEventDto = {
  toolName: string;
  status: "succeeded" | "denied" | "failed" | "started" | "requested";
  pathOrRef: string | null;
  summary: string | null;
  errorCode: string | null;
  readOnly: true;
};

export type AssistantSourceDto = {
  kind: "git_local" | "github";
  label: string;
  pathOrRef: string | null;
};

export type ProjectAssistantContextDto = {
  projectId: string;
  name: string;
  shortReference: string | null;
  objective: string;
  contextSummary: string;
  criticality: string;
  constraints: string[];
  lpsId: string;
  lpsVersion: number;
  lpsCreatedAt: string;
  doctrineId: string;
  doctrineVersion: string;
  doctrineDigest: string;
  doctrineStatus: string;
  runtimeMode: string;
  persistence: string;
  readiness: string;
  activeCycleInstanceId?: string | null;
  ckcResolutionRef?: string | null;
};

export type F2TurnLabels = {
  recommendation: "RECOMMANDATION" | null;
  proposition: "PROPOSITION" | null;
  decisionRequired: "DÉCISION REQUISE" | null;
  decisionTaken: "DÉCISION PRISE" | null;
  noExecution: "AUCUNE EXÉCUTION";
};

export type F2TurnPayload = {
  turnKind:
    | "f1_informative"
    | "f2_clarification"
    | "f2_proposal"
    | "f2_blocked"
    | "f2_decision";
  intentClass: IntentClass;
  qualification: QualificationDto | null;
  proposal: ProposalDto | null;
  decision: DecisionDto | null;
  labels: F2TurnLabels;
  executionBlocked: boolean;
  processLocalNotice: string;
};

export type ProjectAssistantSendSuccess = {
  ok: true;
  status: "ok" | "cognitive_stop";
  text: string;
  mode: Exclude<AssistantUiMode, "unconfirmed">;
  presentation: "test_provider" | "openai_live";
  /** Observed provider model when available (from usage.model). */
  model?: string | null;
  toolRounds: number;
  toolCalls: number;
  sources: AssistantSourceDto[];
  toolEvents: AssistantToolEventDto[];
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  /** OD-04 Option C: always Agents Runner after Nora legacy retirement. */
  cognitiveRuntime?: "agents";
  /** Product SQLite Session id (Option C F1). */
  sessionId?: string | null;
  /** MW1-S01 — honest Memory B availability for this turn. */
  memoryBAvailability?:
    | "available_with_history"
    | "available_empty"
    | "unavailable";
  /** MW1-S02 — compaction / stale state for this turn. */
  memoryBCompactionState?:
    | "none"
    | "compacted_no_loss"
    | "compacted_with_loss"
    | "stale_invalidated";
  /** MW1-S02-CORR-02 — prior compacted B invalidated by Truth C change. */
  stalePriorInvalidated?: boolean;
  /** MW3 — contradiction / Cognitive STOP surface (when assessed). */
  mw3?: Mw3CognitiveSurfaceDto | null;
  f2?: F2TurnPayload;
};

export type ProjectAssistantSendFailure = {
  ok: false;
  status: Exclude<AssistantTurnStatus, "ok">;
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
  proposal?: ProposalDto | null;
  f2?: F2TurnPayload;
};

export type ProjectAssistantSendResult =
  | ProjectAssistantSendSuccess
  | ProjectAssistantSendFailure;

export type ProjectAssistantDecideSuccess = {
  ok: true;
  status: "ok";
  mode: Exclude<AssistantUiMode, "unconfirmed">;
  presentation: "test_provider" | "openai_live" | "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f2: F2TurnPayload;
};

export type ProjectAssistantDecideResult =
  | ProjectAssistantDecideSuccess
  | ProjectAssistantSendFailure;

export type ProjectAssistantPrepareF3Success = {
  ok: true;
  status: "ok";
  mode: "fixture";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f2: F2TurnPayload | null;
  f3: F3PreparePayload;
};

export type ProjectAssistantPrepareF3Failure = {
  ok: false;
  status: "prepare_error" | "stale" | "project_not_found" | "validation_error";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
  proposal?: ProposalDto | null;
};

export type ProjectAssistantPrepareF3Result =
  | ProjectAssistantPrepareF3Success
  | ProjectAssistantPrepareF3Failure;

export type ProjectAssistantPrepareM3Success = {
  ok: true;
  status: "ok";
  mode: "m3_prepare";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f3: import("./f3/prepareM3FromDecision").F3M3PreparePayload;
};

export type ProjectAssistantPrepareM3Failure = {
  ok: false;
  status: "prepare_error" | "stale" | "project_not_found" | "validation_error";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
};

export type ProjectAssistantPrepareM3Result =
  | ProjectAssistantPrepareM3Success
  | ProjectAssistantPrepareM3Failure;

export type ProjectAssistantPrepareResolvedM3Success = {
  ok: true;
  status: "ok";
  mode: "m3_resolved_fixture";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f3: import("./f3/prepareAndResolveM3ProductPath").F3M3ResolvedPayload;
};

export type ProjectAssistantPrepareResolvedM3Failure = {
  ok: false;
  status: "prepare_error" | "stale" | "project_not_found" | "validation_error";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
};

export type ProjectAssistantPrepareResolvedM3Result =
  | ProjectAssistantPrepareResolvedM3Success
  | ProjectAssistantPrepareResolvedM3Failure;

export type ProjectAssistantExecuteF3Success = {
  ok: true;
  status: "ok";
  mode: "fixture";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f3: F3ExecutePayload;
};

export type ProjectAssistantExecuteF3Failure = {
  ok: false;
  status: "execute_error" | "stale" | "project_not_found" | "validation_error";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
  proposal?: ProposalDto | null;
};

export type ProjectAssistantExecuteF3Result =
  | ProjectAssistantExecuteF3Success
  | ProjectAssistantExecuteF3Failure;

export type ProjectAssistantRehydrateEvidenceOutcomeSuccess = {
  ok: true;
  status: "ok";
  mode: "fixture";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  evidence: F3EvidenceDto[];
  reviewBundles: F3ReviewBundleDto[];
  recommendation: F3RecommendationDto;
  lpsVersion: number;
  evidenceIds: string[];
  reviewBundleIds: string[];
};

export type ProjectAssistantRehydrateEvidenceOutcomeFailure = {
  ok: false;
  status: "rehydrate_error" | "project_not_found";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
  project?: ProjectAssistantContextDto;
};

export type ProjectAssistantRehydrateEvidenceOutcomeResult =
  | ProjectAssistantRehydrateEvidenceOutcomeSuccess
  | ProjectAssistantRehydrateEvidenceOutcomeFailure;
