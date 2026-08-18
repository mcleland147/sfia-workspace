/**
 * F3 FIXTURE reinjection DTOs — product layer only.
 * Never claim READY / T-A6 COMPLETE / REAL READY.
 */

import type { ProposalDto } from "../f2/types";
import type { F3_MODE } from "./constants";

export type F3Mode = typeof F3_MODE | "CURSOR_CLI_REAL";

export type F3ContractDto = {
  executionContractId: string;
  version: number;
  status: string;
  action: string;
  target: string;
  scope: string;
  requiredAuthority: string;
  mode: F3Mode;
  constraints: string[];
};

export type F3AttemptDto = {
  attemptId: string;
  status: string;
  selectedAgentRef: string;
  adapterId: string;
  adapterRef: string;
  executionMode: string;
  realProcessInvoked: boolean;
  externalEffects: boolean;
  resultRef: string | null;
  launchCount: number;
  selectionStrategy: string;
  mode: F3Mode;
  startedAt?: string | null;
  executionWindowClass?: string | null;
  resolvedMaxDurationMs?: number | null;
  /** Existing Attempt/observation processRef when already recorded — presentation only. */
  processRef?: string | null;
};

export type F3EvidenceDto = {
  evidenceId: string;
  status: string;
  sourceKind: string;
  technicalResultRef: string | null;
  verified: false;
  mode: F3Mode;
};

export type F3ReviewBundleDto = {
  reviewBundleId: string;
  status: string;
  version: number;
  evidenceRefs: string[];
  mode: F3Mode;
};

export type F3RecommendationDto = {
  kind: "recommendation";
  status: string;
  executionAuthority: false;
  gateConsumed: false;
  decisionCreated: false;
  attemptAutoLaunchNextCycle: false;
  openHardReservationRefs: string[];
  hardBlockers: string[];
  nextGateCode: string | null;
  nextActionCode: string | null;
  recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS";
  mode: F3Mode;
  analysisStatus?: "available" | "unavailable" | "not_attempted";
  analysisText?: string | null;
  analysisProviderId?: string | null;
  analysisUnavailableReason?: string | null;
};

export type F3Labels = {
  fixtureNoReal: "FIXTURE — AUCUNE EXÉCUTION RÉELLE";
  noGitWrite: "AUCUN GIT WRITE PRODUIT";
  recommendationNotDecision: "RECOMMANDATION — PAS UNE DÉCISION MORRIS";
  cursorRealBlocked: "CURSOR REAL BLOQUÉ";
  hardOpen: "HARD R-T-A3-1 / R-T-A3-2 OPEN";
};

export type F3PreparePayload = {
  turnKind: "f3_prepare";
  mode: F3Mode;
  proposal: ProposalDto;
  decisionId: string;
  contract: F3ContractDto;
  executionPerformed: false;
  attemptCreated: false;
  labels: F3Labels;
  processLocalNotice: string;
  disclosures: string[];
};

export type F3ExecutePayload = {
  turnKind: "f3_execute";
  mode: F3Mode;
  /**
   * Legacy fixture path may carry the process-local Proposal for provenance.
   * Canonical post-GO M3 path sets null — Proposal is not execution authority.
   */
  proposal: ProposalDto | null;
  decisionId: string;
  contract: F3ContractDto;
  attempt: F3AttemptDto;
  evidence: F3EvidenceDto;
  reviewBundle: F3ReviewBundleDto;
  recommendation: F3RecommendationDto;
  reusedExistingAttempt: boolean;
  executionPerformed: true;
  realExecution: boolean;
  gitWritePerformed: false;
  labels: F3Labels;
  processLocalNotice: string;
  disclosures: string[];
};

export type F3ValidateOk = {
  ok: true;
  proposal: ProposalDto;
  decisionId: string;
  decisionStatus: "accepted";
  scope: string;
};

export type F3ValidateFail = {
  ok: false;
  code: string;
  message: string;
  proposal?: ProposalDto | null;
};

export type F3ValidateResult = F3ValidateOk | F3ValidateFail;
