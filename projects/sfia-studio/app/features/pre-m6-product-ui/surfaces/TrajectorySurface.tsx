"use client";

/**
 * W2 / W3-A product surface — Options, Recommendation, HumanDecision, decided
 * trajectory, contract inspection, effective authority, and (W3-A) fixture
 * governed Execute after AUTHORIZED.
 *
 * The surface never derives truth: every state shown here comes from a server
 * action over the product application path.
 */

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";
import {
  projectAssistantPrepareResolvedM3Action,
  projectAssistantResolveLegacyM3DocsWriteAction,
} from "@/features/project-assistant/actions";
import { isLegacyDocsWritePrepareContractView } from "@/features/project-assistant/f3/legacyDocsWritePrepareContractView";
import { isDocsWriteEvidenceContradictionView } from "@/features/project-assistant/f3/docsWriteEvidenceContradictionView";
import {
  w2AmendExecutionContractAction,
  w2AuthorizeExecutionContractAction,
  w2ConfirmExecutionContractAction,
  w2DecideTrajectoryAction,
  w2GovernedExecuteCancelAction,
  w2GovernedExecuteCompleteAction,
  w2GovernedExecuteSelectAction,
  w2GovernedExecuteStartAction,
  w2InspectExecutionContractAction,
  w2MaterializeProductOutcomeAction,
  w2PrepareExecutionContractAction,
  w2PrepareRecoveryDocsWriteAction,
  w2ProposeTrajectoryOptionsAction,
  w2ReadActiveDecisionSubjectAction,
  w2ReadCurrentGovernedExecutionContinuityAction,
  w2ReadRecoveryExecutionBindingAction,
  w2RehydrateProductOutcomeAction,
  w2RematerializeDocsWriteEvidenceAction,
} from "@/features/project-assistant/w2/actions";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import type { RecoveryExecutionBinding } from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
import { isWrongGenericPreExecReplaceableByRecoveryPrepare } from "@/features/project-assistant/w2/recoveryReplaceableCurrentContract";
import {
  projectAssistantApprovePreCycleCandidateTrajectoryAction,
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction,
  projectAssistantReadPreCycleCandidateTrajectoryAction,
  prepareCycleFromValidatedTrajectoryAction,
  readPreparedTrajectoryCycleAction,
  startPreparedTrajectoryCycleAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import type {
  AmendExecutionContractSuccess,
  ContractInspectionStateDto,
  DecidedTrajectoryDto,
  ExecutionAuthorizationOutcomeDto,
  GovernedExecuteAttemptProjection,
  GovernedExecutePhaseSuccess,
  TrajectoryDecisionRecordDto,
  TrajectoryOptionSetDto,
  W3BProductOutcomeDto,
  W3cPostEvidenceLoopDto,
} from "@/features/project-assistant/w2/types";
import {
  W4C_NEXT_ACTION_LEAD,
  W4C_POST_EVIDENCE_HEADING,
  W4C_PRODUCT_OUTCOME_LABELS,
  pilotAmbiguousPendingTitle,
  pilotLostPendingTitle,
  pilotPrepareNotApplicableMessage,
  pilotPresentedOptionLabel,
  pilotProposalOptionLabel,
  pilotRecoverablePendingTitle,
  formatNoraAssistantDisplayText,
} from "@/features/project-assistant/presentationLabels";
import {
  partitionOptionImpactsForPilote,
  scrubPiloteRecommendationProse,
} from "@/features/project-assistant/w2/recommendationDecisionIntegrity";
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
import type { ExecutionContractStatus } from "@/lib/oa/execution-contract/domain/types";
import styles from "./TrajectorySurface.module.css";

/**
 * Presentation-only labels for ExecutionContractStatus.
 * Exhaustive over the domain union; never surfaces the raw enum as primary copy.
 */
const EXECUTION_CONTRACT_STATUS_LABELS: Record<ExecutionContractStatus, string> =
  {
    draft: "Brouillon",
    proposed: "Proposé",
    validated: "Validé",
    confirmation_required: "Confirmation requise",
    confirmed: "Confirmation enregistrée",
    executing: "Exécution en cours",
    completed: "Exécution terminée",
    failed: "Échec d'exécution",
    cancelled: "Annulé",
    superseded: "Remplacé",
  };

function executionContractStatusLabel(status: string): string {
  if (Object.prototype.hasOwnProperty.call(EXECUTION_CONTRACT_STATUS_LABELS, status)) {
    return EXECUTION_CONTRACT_STATUS_LABELS[status as ExecutionContractStatus];
  }
  return "État du contrat indisponible";
}

function toInspectionDisclosureView(
  disclosure:
    | {
        readonly action: string;
        readonly technicalTarget: string;
        readonly scope: string;
        readonly targetRepositoryRef: string | null;
        readonly targetPath: string | null;
        readonly scopeIn: readonly string[] | null;
        readonly scopeOut: readonly string[] | null;
        readonly createOrModify: boolean | null;
        readonly noDelete: boolean | null;
        readonly contentRequirements: readonly string[] | null;
        readonly validationExpectations: readonly string[] | null;
        readonly expectedOutputs: readonly string[] | null;
        readonly evidenceRequirements: readonly string[];
        readonly disclosureComplete: boolean;
      }
    | null
    | undefined,
): InspectionDisclosureView | null {
  if (!disclosure) return null;
  return {
    action: disclosure.action,
    technicalTarget: disclosure.technicalTarget,
    scope: disclosure.scope,
    targetRepositoryRef: disclosure.targetRepositoryRef,
    targetPath: disclosure.targetPath,
    scopeIn: disclosure.scopeIn,
    scopeOut: disclosure.scopeOut,
    createOrModify: disclosure.createOrModify,
    noDelete: disclosure.noDelete,
    contentRequirements: disclosure.contentRequirements,
    validationExpectations: disclosure.validationExpectations,
    expectedOutputs: disclosure.expectedOutputs,
    evidenceRequirements: [...disclosure.evidenceRequirements],
    disclosureComplete: disclosure.disclosureComplete,
  };
}

type InspectionDisclosureView = {
  readonly action: string;
  readonly technicalTarget: string;
  readonly scope: string;
  readonly targetRepositoryRef: string | null;
  readonly targetPath: string | null;
  readonly scopeIn: readonly string[] | null;
  readonly scopeOut: readonly string[] | null;
  readonly createOrModify: boolean | null;
  readonly noDelete: boolean | null;
  readonly contentRequirements: readonly string[] | null;
  readonly validationExpectations: readonly string[] | null;
  readonly expectedOutputs: readonly string[] | null;
  readonly evidenceRequirements: readonly string[];
  readonly disclosureComplete: boolean;
};

type PreparedContract = {
  readonly executionContractId: string;
  readonly version: number;
  readonly status: string;
  readonly action: string;
  readonly target: string;
  readonly scope: string;
  readonly requiredAuthority: string;
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly requiredCapabilities: readonly string[];
  readonly reversibility: string;
  readonly semanticFingerprint: string;
  readonly effectConfirmationRequired?: boolean;
  readonly effectConfirmationLevel?: string | null;
  readonly inspectionDisclosure?: InspectionDisclosureView | null;
};

type AmendmentNotice = {
  readonly priorExecutionContractId: string;
  readonly additionalConstraint: string;
  readonly statusLabel: string;
  readonly priorInspectionDoesNotCoverSuccessor: true;
};

type Busy =
  | null
  | "options"
  | "decision"
  | "qualify"
  | "contract"
  | "inspection"
  | "confirmation"
  | "authorization"
  | "amendment"
  | "execute"
  | "approve-candidate"
  | "prepare-cycle"
  | "start-cycle";

/**
 * Yield so React can commit and the browser can paint each Attempt phase.
 * Double rAF only — no fixed-duration sleep / business latency (R09-R).
 */
function yieldBrowserPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resolve();
      });
    });
  });
}

export function TrajectorySurface({
  projectId,
  onDurableFactsChanged,
  durableRefreshSignal = 0,
  composition = "standalone",
  activeProposalId = null,
  onRequestReformulateWithNora,
  onProposalSubjectOwnershipChange,
}: {
  projectId: string;
  onDurableFactsChanged?: () => void;
  /** Increment after Lifecycle bridge / durable mutations to rehydrate candidate. */
  durableRefreshSignal?: number;
  /**
   * H-01 Option A: embed visually in the LPS piloting region.
   * Presentation-only — does not change ProjectTrajectory domain identity.
   */
  composition?: "standalone" | "lps-embedded";
  /**
   * CORR-PROOF-10 — opaque Proposal subject from Conversation/Nora.
   * Server resolves; client never sends objective/path/operation.
   */
  activeProposalId?: string | null;
  /**
   * CORR-PROOF-11 — arm explicit reinstruction + focus conversation.
   * Called with the effective pending proposalId to supersede.
   */
  onRequestReformulateWithNora?: (proposalId: string) => void;
  /**
   * JOURNEY-INTEGRITY — notify parent whether Proposal-specific journey owns
   * the next business action. Fail-closed: UNKNOWN until subject read resolves.
   */
  onProposalSubjectOwnershipChange?: (
    ownership: "UNKNOWN" | "OWNED" | "NONE",
  ) => void;
}) {
  const [busy, setBusy] = useState<Busy>(null);
  const [error, setError] = useState<string | null>(null);
  const [subjectReadStatus, setSubjectReadStatus] = useState<
    "pending" | "ready" | "error"
  >("pending");
  const [executionContinuityReadStatus, setExecutionContinuityReadStatus] =
    useState<"pending" | "ready" | "error">("pending");
  const [executionContinuityConflict, setExecutionContinuityConflict] =
    useState(false);
  const [continuityDecisionRef, setContinuityDecisionRef] = useState<
    string | null
  >(null);
  const [pendingReinstruction, setPendingReinstruction] = useState<{
    readonly message: string;
    readonly proposalIds: readonly string[];
    readonly recoverableProposalIds: readonly string[];
  } | null>(null);
  const [preCycleCandidate, setPreCycleCandidate] = useState<{
    trajectoryId: string;
    version: number;
    status: "candidate";
    steps: readonly { stepId: string; order: number; label: string; state: string }[];
    catalogLabel: string | null;
    targetCycleTypeId: string | null;
    provenanceStatus?: string;
    provenanceObservationId?: string | null;
    recommendationId?: string | null;
    semanticKey?: string | null;
  } | null>(null);
  const [approvalPresentation, setApprovalPresentation] = useState<{
    presentationDigest: string;
    targetCycleSelectable: boolean;
    catalogLabel: string | null;
    targetCycleTypeId: string;
    approvalOptionLabel: string;
  } | null>(null);
  const [greenfieldDecided, setGreenfieldDecided] = useState<{
    trajectoryId: string;
    version: number;
    status: string;
    decidedByDecisionRef: string | null;
    targetCycleTypeId: string | null;
    catalogLabel: string | null;
    completedMatchingCycle?: boolean;
    prepareBlockedReason?: "cycle_type_already_completed";
  } | null>(null);
  const [preparedCycle, setPreparedCycle] = useState<{
    cycleInstanceId: string;
    cycleTypeId: string;
    catalogLabel: string | null;
    profile: string;
    status: string;
  } | null>(null);
  const [activeCycleInstanceId, setActiveCycleInstanceId] = useState<
    string | null
  >(null);
  const [hasCurrentNextCycleRecommendation, setHasCurrentNextCycleRecommendation] =
    useState(false);
  const [optionSet, setOptionSet] = useState<TrajectoryOptionSetDto | null>(
    null,
  );
  const [decision, setDecision] = useState<TrajectoryDecisionRecordDto | null>(
    null,
  );
  const [decided, setDecided] = useState<DecidedTrajectoryDto | null>(null);
  const [contract, setContract] = useState<PreparedContract | null>(null);
  const [inspection, setInspection] =
    useState<ContractInspectionStateDto | null>(null);
  const [authorization, setAuthorization] =
    useState<ExecutionAuthorizationOutcomeDto | null>(null);
  const [amendmentDraft, setAmendmentDraft] = useState("");
  const [amendmentNotice, setAmendmentNotice] =
    useState<AmendmentNotice | null>(null);
  const [attempt, setAttempt] =
    useState<GovernedExecuteAttemptProjection | null>(null);
  const [attemptPhase, setAttemptPhase] = useState<
    GovernedExecutePhaseSuccess["phase"] | null
  >(null);
  /** Append-only paint trail — proves R09 sequence even with a sync adapter. */
  const [attemptPhaseHistory, setAttemptPhaseHistory] = useState<string[]>([]);
  const [attemptStatusLabel, setAttemptStatusLabel] = useState<string | null>(
    null,
  );
  const [productOutcome, setProductOutcome] =
    useState<W3BProductOutcomeDto | null>(null);
  const [postEvidence, setPostEvidence] =
    useState<W3cPostEvidenceLoopDto | null>(null);
  const [productEvidencePending, setProductEvidencePending] = useState(false);
  const [recoveryBinding, setRecoveryBinding] =
    useState<RecoveryExecutionBinding | null>(null);

  /**
   * Continuity pass generation — invalidates in-flight subject/EC reads when a
   * newer Decision Subject continuity pass begins (refresh or remount read).
   */
  const continuityPassRef = useRef(0);
  const prevDurableRefreshSignalRef = useRef(durableRefreshSignal);

  /**
   * ONE fail-closed gate for the full W2 mutating seam (subject + execution).
   * Derived early so callbacks and controls share the same oracle.
   */
  const continuityMutationBlocked =
    subjectReadStatus === "pending" ||
    subjectReadStatus === "error" ||
    executionContinuityReadStatus === "pending" ||
    executionContinuityReadStatus === "error" ||
    executionContinuityConflict;

  const decidedOptionRef = decision?.selectedOptionRef ?? null;
  const decisionDefersExecution =
    decidedOptionRef === PROPOSAL_SUBJECT_AMEND_REF ||
    decidedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF;
  const hasProposalDecisionSubject = Boolean(decision?.proposalId);
  const proposalPursue =
    hasProposalDecisionSubject &&
    decidedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF;
  const proposalBackedPrepareReady =
    proposalPursue && decision?.decisionBasisLinked === true;
  const proposalBackedPrepareBlocked =
    proposalPursue && decision?.decisionBasisLinked !== true;
  /** R10 — client decision id OR durable continuity decisionRef after restart. */
  const recoveryDecisionId =
    decision?.decisionId ?? continuityDecisionRef ?? null;
  const recoveryDocsWritePrepareReady = Boolean(
    !decisionDefersExecution &&
      !hasProposalDecisionSubject &&
      (decision == null ||
        decision.selectedOptionRef === GOVERNED_OPTION_REF) &&
      recoveryBinding &&
      recoveryBinding.kind === "post_evidence_recovery_execution",
  );
  const wrongGenericReplaceableByRecoveryPrepare =
    isWrongGenericPreExecReplaceableByRecoveryPrepare({
      recoveryBinding,
      currentContract: contract,
      continuityDecisionRef,
      recoveryDecisionId,
      attemptPresent: Boolean(attempt?.attemptId),
    });
  const showRecoveryDocsWritePrepare = Boolean(
    recoveryDocsWritePrepareReady &&
      recoveryBinding &&
      (!contract || wrongGenericReplaceableByRecoveryPrepare),
  );
  const rematerializeDecisionId =
    decision?.decisionId ?? continuityDecisionRef ?? null;
  const legacyDocsWriteRematerializeReady = Boolean(
    !decisionDefersExecution &&
      rematerializeDecisionId &&
      contract &&
      isLegacyDocsWritePrepareContractView({
        decisionId: rematerializeDecisionId,
        executionContractId: contract.executionContractId,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        constraints: contract.constraints,
        requiredCapabilities: contract.requiredCapabilities,
      }),
  );
  const docsWriteEvidenceRematerializeReady = Boolean(
    !decisionDefersExecution &&
      !legacyDocsWriteRematerializeReady &&
      contract &&
      isDocsWriteEvidenceContradictionView({
        action: contract.action,
        target: contract.target,
        constraints: contract.constraints,
        evidenceRequirements:
          contract.inspectionDisclosure?.evidenceRequirements ?? [],
      }),
  );

  function paintAttemptPhase(
    phase: GovernedExecutePhaseSuccess["phase"],
    nextAttempt: GovernedExecuteAttemptProjection | null,
    statusLabel: string | null,
  ): void {
    flushSync(() => {
      if (nextAttempt) setAttempt(nextAttempt);
      setAttemptPhase(phase);
      if (statusLabel !== null) setAttemptStatusLabel(statusLabel);
      setAttemptPhaseHistory((prev) =>
        prev[prev.length - 1] === phase ? prev : [...prev, phase],
      );
    });
  }

  const proposeOptions = useCallback(async () => {
    if (continuityMutationBlocked) return;
    setBusy("options");
    setError(null);
    const recoverableSole =
      pendingReinstruction?.proposalIds.length === 1 &&
      pendingReinstruction.recoverableProposalIds.length === 1
        ? pendingReinstruction.recoverableProposalIds[0]!
        : null;
    const proposalIdForPropose = activeProposalId ?? recoverableSole;
    setPendingReinstruction(null);
    const result = await w2ProposeTrajectoryOptionsAction({
      projectId,
      proposalId: proposalIdForPropose,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...set } = result;
    setOptionSet(set);
    setDecision(null);
    setDecided(null);
    setContract(null);
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    // D-MORRIS-PCONT — recovery OptionSet is additive: keep durable Attempt /
    // ProductOutcome / postEvidence projection (rehydrate, do not wipe).
    // Only clear EC/authorization which belong to a fresh framing subject.
    onDurableFactsChanged?.();
  }, [
    continuityMutationBlocked,
    projectId,
    activeProposalId,
    pendingReinstruction,
    onDurableFactsChanged,
  ]);

  /** CORR-PROOF-10 — rehydrate bound Proposal OptionSet from durable Epistemic. */
  const rehydrateActiveDecisionSubject = useCallback(async () => {
    const pass = ++continuityPassRef.current;
    setSubjectReadStatus("pending");
    // Invalidate prior governed qualification immediately for this pass.
    setExecutionContinuityReadStatus("pending");
    setExecutionContinuityConflict(false);
    const result = await w2ReadActiveDecisionSubjectAction({ projectId });
    if (pass !== continuityPassRef.current) return;
    if (!result.ok) {
      setError(result.message);
      // Keep any prior pendingReinstruction as informational stale client state;
      // continuityMutationBlocked makes Reformuler non-actionable.
      setSubjectReadStatus("error");
      return;
    }
    if (result.kind === "bound_awaiting_decision") {
      setOptionSet(result.optionSet);
      setError(null);
      setPendingReinstruction(null);
      setSubjectReadStatus("ready");
      return;
    }
    if (result.kind === "pending_reinstruction_required") {
      setOptionSet(null);
      setPendingReinstruction({
        message: result.message,
        proposalIds: result.proposalIds,
        recoverableProposalIds: result.recoverableProposalIds,
      });
      setError(null);
      setSubjectReadStatus("ready");
      return;
    }
    if (result.kind === "pursue_prepare_ready") {
      // Restart resume: durable pursue HD owns PREPARE — no OptionSet, no reinstruction.
      setOptionSet(null);
      setPendingReinstruction(null);
      setDecision(result.decision);
      setDecided(null);
      setError(null);
      setSubjectReadStatus("ready");
      return;
    }
    setPendingReinstruction(null);
    // kind === "none" — authoritative Proposal Decision Subject absence.
    // Clear stale Proposal-backed OptionSet; preserve generic ProjectTrajectory
    // OptionSet. Do NOT clear HumanDecision / decided / EC state here —
    // except when no prepare-ready continuation either (decision may be stale session).
    setOptionSet((current) => {
      if (!current) return null;
      const proposalBacked =
        current.decisionSubjectMode === "proposal" ||
        Boolean(current.proposalId);
      return proposalBacked ? null : current;
    });
    setError(null);
    setSubjectReadStatus("ready");
  }, [projectId]);

  /** Restart-safe governed EC + inspection continuity from durable truth. */
  const rehydrateGovernedExecutionContinuity = useCallback(async () => {
    const pass = continuityPassRef.current;
    setExecutionContinuityReadStatus("pending");
    setExecutionContinuityConflict(false);
    const result = await w2ReadCurrentGovernedExecutionContinuityAction({
      projectId,
    });
    if (pass !== continuityPassRef.current) return;
    if (!result.ok) {
      setError(result.message);
      setContract(null);
      setInspection(null);
      setAuthorization(null);
      setAmendmentDraft("");
      setAmendmentNotice(null);
      setContinuityDecisionRef(null);
      setExecutionContinuityReadStatus("error");
      return;
    }
    if (result.kind === "none") {
      // Server durable truth wins — clear any stale client EC projection.
      setContract(null);
      setInspection(null);
      setAuthorization(null);
      setAmendmentDraft("");
      setAmendmentNotice(null);
      setContinuityDecisionRef(null);
      setExecutionContinuityReadStatus("ready");
      return;
    }

    // Fail-closed: unresolved Proposal Decision Subject + current pre-execution EC.
    // Recovery / ProjectTrajectory OptionSet awaiting HD is NOT a Proposal subject.
    // pursue_prepare_ready and closed Proposal subjects never compete.
    const unresolvedProposalSubject =
      pendingReinstruction != null ||
      (optionSet != null &&
        decision == null &&
        optionSet.decisionSubjectMode === "proposal");
    const subjectCompetes = unresolvedProposalSubject;
    if (subjectCompetes) {
      setExecutionContinuityConflict(true);
      setError(
        "Contradiction de continuité — un sujet de décision Proposal non résolu coexiste avec un contrat d'exécution courant. Aucune action générique n'est proposée.",
      );
      setContract(null);
      setInspection(null);
      setAuthorization(null);
      setAmendmentDraft("");
      setAmendmentNotice(null);
      setContinuityDecisionRef(null);
      setExecutionContinuityReadStatus("ready");
      return;
    }

    setContract({
      executionContractId: result.contract.executionContractId,
      version: result.contract.version,
      status: result.contract.status,
      action: result.contract.action,
      target: result.contract.target,
      scope: result.contract.scope,
      requiredAuthority: result.contract.requiredAuthority,
      constraints: [...result.contract.constraints],
      stopConditions: [...result.contract.stopConditions],
      requiredCapabilities: [...result.contract.requiredCapabilities],
      reversibility: result.contract.reversibility,
      semanticFingerprint: result.contract.semanticFingerprint,
      effectConfirmationRequired: result.contract.effectConfirmationRequired,
      effectConfirmationLevel: result.contract.effectConfirmationLevel ?? null,
      inspectionDisclosure: toInspectionDisclosureView(
        result.contract.inspectionDisclosure,
      ),
    });
    setContinuityDecisionRef(result.decisionRef ?? null);
    setInspection(result.inspection);
    setAuthorization(null);
    setError(null);
    setExecutionContinuityReadStatus("ready");
  }, [projectId, pendingReinstruction, optionSet, decision]);

  const refreshPreCycleCandidate = useCallback(async () => {
    const result = await projectAssistantReadPreCycleCandidateTrajectoryAction({
      projectId,
    });
    if (!result.ok) {
      setPreCycleCandidate(null);
      setActiveCycleInstanceId(null);
      setHasCurrentNextCycleRecommendation(false);
      setApprovalPresentation(null);
      setGreenfieldDecided(null);
      setPreparedCycle(null);
      return;
    }
    setActiveCycleInstanceId(result.activeCycleInstanceId ?? null);
    setPreCycleCandidate(result.candidate ?? null);
    setHasCurrentNextCycleRecommendation(
      result.hasCurrentNextCycleRecommendation === true,
    );

    const approval =
      await projectAssistantReadCandidateTrajectoryApprovalPresentationAction({
        projectId,
      });
    if (!approval.ok) {
      setApprovalPresentation(null);
      setGreenfieldDecided(null);
      setPreparedCycle(null);
      return;
    }
    setGreenfieldDecided(approval.alreadyDecided ?? null);
    if (approval.presentation) {
      setApprovalPresentation({
        presentationDigest: approval.presentation.presentationDigest,
        targetCycleSelectable: approval.presentation.targetCycleSelectable,
        catalogLabel: approval.presentation.catalogLabel,
        targetCycleTypeId: approval.presentation.targetCycleTypeId,
        approvalOptionLabel: approval.presentation.approvalOptionLabel,
      });
    } else {
      setApprovalPresentation(null);
    }

    if (approval.alreadyDecided && !result.activeCycleInstanceId) {
      const prepared = await readPreparedTrajectoryCycleAction({ projectId });
      if (prepared.ok && prepared.prepared) {
        setPreparedCycle({
          cycleInstanceId: prepared.prepared.cycleInstanceId,
          cycleTypeId: prepared.prepared.cycleTypeId,
          catalogLabel: prepared.prepared.catalogLabel,
          profile: prepared.prepared.profile,
          status: prepared.prepared.status,
        });
      } else {
        setPreparedCycle(null);
      }
    } else {
      setPreparedCycle(null);
    }
  }, [projectId]);

  const approveCandidate = useCallback(async () => {
    if (!approvalPresentation) return;
    setBusy("approve-candidate");
    setError(null);
    const result = await projectAssistantApprovePreCycleCandidateTrajectoryAction({
      projectId,
      presentationDigest: approvalPresentation.presentationDigest,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message ?? result.code ?? "Approbation refusée.");
      await refreshPreCycleCandidate();
      return;
    }
    setGreenfieldDecided({
      trajectoryId: result.trajectoryId!,
      version: result.trajectoryVersion!,
      status: result.status!,
      decidedByDecisionRef: result.decidedByDecisionRef ?? null,
      targetCycleTypeId: result.targetCycleTypeId ?? null,
      catalogLabel: result.catalogLabel ?? null,
    });
    setPreCycleCandidate(null);
    setApprovalPresentation(null);
    setPreparedCycle(null);
    onDurableFactsChanged?.();
    await refreshPreCycleCandidate();
  }, [
    approvalPresentation,
    projectId,
    onDurableFactsChanged,
    refreshPreCycleCandidate,
  ]);

  const prepareValidatedCycle = useCallback(async () => {
    setBusy("prepare-cycle");
    setError(null);
    const result = await prepareCycleFromValidatedTrajectoryAction({
      projectId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message ?? result.code ?? "Préparation du cycle refusée.");
      await refreshPreCycleCandidate();
      return;
    }
    setPreparedCycle({
      cycleInstanceId: result.cycleInstanceId!,
      cycleTypeId: result.cycleTypeId!,
      catalogLabel: result.catalogLabel ?? null,
      profile: result.profile!,
      status: result.status!,
    });
    onDurableFactsChanged?.();
    await refreshPreCycleCandidate();
  }, [projectId, onDurableFactsChanged, refreshPreCycleCandidate]);

  const startPreparedCycle = useCallback(async () => {
    if (!preparedCycle) return;
    setBusy("start-cycle");
    setError(null);
    const result = await startPreparedTrajectoryCycleAction({
      projectId,
      cycleInstanceId: preparedCycle.cycleInstanceId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message ?? result.code ?? "Démarrage du cycle refusé.");
      await refreshPreCycleCandidate();
      return;
    }
    setPreparedCycle(null);
    setActiveCycleInstanceId(result.activeCycleInstanceId ?? null);
    onDurableFactsChanged?.();
    await refreshPreCycleCandidate();
  }, [
    preparedCycle,
    projectId,
    onDurableFactsChanged,
    refreshPreCycleCandidate,
  ]);

  useEffect(() => {
    void refreshPreCycleCandidate();
  }, [refreshPreCycleCandidate]);

  useEffect(() => {
    if (durableRefreshSignal > 0) {
      void refreshPreCycleCandidate();
    }
  }, [durableRefreshSignal, refreshPreCycleCandidate]);

  useEffect(() => {
    void rehydrateActiveDecisionSubject();
  }, [rehydrateActiveDecisionSubject, durableRefreshSignal]);

  /**
   * Immediate fail-closed on durable refresh: invalidate prior continuity
   * authority before paint so a transient ready frame cannot authorize mutation.
   * Subject rehydration (effect above) owns the latest pass completion.
   */
  useLayoutEffect(() => {
    if (prevDurableRefreshSignalRef.current === durableRefreshSignal) return;
    prevDurableRefreshSignalRef.current = durableRefreshSignal;
    continuityPassRef.current += 1;
    setSubjectReadStatus("pending");
    setExecutionContinuityReadStatus("pending");
    setExecutionContinuityConflict(false);
  }, [durableRefreshSignal]);

  useEffect(() => {
    // Governed EC discovery runs ONLY after Decision Subject continuity is ready.
    // Do NOT relaunch merely because durableRefreshSignal changed — subject is
    // the prerequisite (avoids stale-ready governed read windows on refresh).
    if (subjectReadStatus === "pending") return;
    if (subjectReadStatus === "error") {
      setContract(null);
      setInspection(null);
      setAuthorization(null);
      setAmendmentDraft("");
      setAmendmentNotice(null);
      setExecutionContinuityConflict(false);
      setExecutionContinuityReadStatus("error");
      return;
    }
    void rehydrateGovernedExecutionContinuity();
  }, [subjectReadStatus, rehydrateGovernedExecutionContinuity]);

  const decide = useCallback(
    async (selectedOptionRef: string) => {
      if (continuityMutationBlocked) return;
      if (!optionSet) return;
      setBusy("decision");
      setError(null);
      const isProposalSubject =
        optionSet.decisionSubjectMode === "proposal" ||
        Boolean(optionSet.proposalId);
      let result;
      if (isProposalSubject) {
        // Hostile trajectory fields omitted — decide loads sealed presented set.
        result = await w2DecideTrajectoryAction({
          projectId,
          optionSetRef: optionSet.optionSetRef,
          selectedOptionRef,
        });
      } else {
        const proposed = optionSet.proposedTrajectory;
        if (!proposed) {
          setBusy(null);
          setError(
            "Trajectoire proposée absente — réinstruire les options Project.",
          );
          return;
        }
        result = await w2DecideTrajectoryAction({
          projectId,
          optionSetRef: optionSet.optionSetRef,
          trajectoryId: proposed.trajectoryId,
          candidateVersion: proposed.version,
          selectedOptionRef,
        });
      }
      setBusy(null);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setDecision(result.decision);
      setDecided(result.trajectory ?? null);
      onDurableFactsChanged?.();
    },
    [
      continuityMutationBlocked,
      optionSet,
      projectId,
      onDurableFactsChanged,
    ],
  );

  // R8/R10 — RecoveryExecutionBinding: decision client OR continuityDecisionRef
  // after restart (server still validates HD / recovery coherence).
  useEffect(() => {
    let cancelled = false;
    async function loadBinding() {
      if (hasProposalDecisionSubject) {
        setRecoveryBinding(null);
        return;
      }
      if (
        decision &&
        decision.selectedOptionRef !== GOVERNED_OPTION_REF
      ) {
        setRecoveryBinding(null);
        return;
      }
      const decisionId = decision?.decisionId ?? continuityDecisionRef;
      if (!decisionId) {
        setRecoveryBinding(null);
        return;
      }
      const result = await w2ReadRecoveryExecutionBindingAction({
        projectId,
        decisionId,
      });
      if (cancelled) return;
      if (result.ok) {
        setRecoveryBinding(result.binding);
      } else {
        setRecoveryBinding(null);
      }
    }
    void loadBinding();
    return () => {
      cancelled = true;
    };
  }, [
    decision,
    continuityDecisionRef,
    hasProposalDecisionSubject,
    projectId,
  ]);

  const prepareContract = useCallback(async () => {
    if (continuityMutationBlocked) return;
    if (!decision) return;
    setBusy("contract");
    setError(null);
    // PJ-REPROOF-04 — Studio derives ActualExecutionWork from durable context.
    // Pilote never sends qualifiedOperationKind / technical HOW.
    const result = await w2PrepareExecutionContractAction({
      projectId,
      decisionId: decision.decisionId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(
        result.code === "PREPARE_NOT_APPLICABLE"
          ? pilotPrepareNotApplicableMessage()
          : result.message,
      );
      return;
    }
    const prepared = result.contract;
    setContract({
      executionContractId: prepared.executionContractId,
      version: prepared.version,
      status: prepared.status,
      action: prepared.action,
      target: prepared.target,
      scope: prepared.scope,
      requiredAuthority: prepared.requiredAuthority,
      constraints: [...prepared.constraints],
      stopConditions: [...prepared.stopConditions],
      requiredCapabilities: [...prepared.requiredCapabilities],
      reversibility: prepared.reversibility,
      semanticFingerprint: prepared.semanticFingerprint,
      effectConfirmationRequired: prepared.effectConfirmationRequired,
      effectConfirmationLevel: prepared.effectConfirmationLevel ?? null,
      inspectionDisclosure: toInspectionDisclosureView(
        prepared.inspectionDisclosure,
      ),
    });
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    onDurableFactsChanged?.();
  }, [
    continuityMutationBlocked,
    decision,
    projectId,
    onDurableFactsChanged,
  ]);

  /**
   * R8/R10 — recovery docs_write PREPARE from failed EC binding (no sandbox ops).
   * Uses recoveryDecisionId (client decision or continuityDecisionRef).
   */
  const prepareRecoveryDocsWriteContract = useCallback(async () => {
    if (continuityMutationBlocked) return;
    if (!recoveryDecisionId || !showRecoveryDocsWritePrepare) return;
    setBusy("contract");
    setError(null);
    const result = await w2PrepareRecoveryDocsWriteAction({
      projectId,
      decisionId: recoveryDecisionId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const prepared = result.contract;
    setContract({
      executionContractId: prepared.executionContractId,
      version: prepared.version,
      status: prepared.status,
      action: prepared.action,
      target: prepared.target,
      scope: prepared.scope,
      requiredAuthority: prepared.requiredAuthority,
      constraints: [...prepared.constraints],
      stopConditions: [...prepared.stopConditions],
      requiredCapabilities: [...prepared.requiredCapabilities],
      reversibility: prepared.reversibility,
      semanticFingerprint: prepared.semanticFingerprint,
      inspectionDisclosure: toInspectionDisclosureView(
        prepared.inspectionDisclosure,
      ),
    });
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    onDurableFactsChanged?.();
  }, [
    continuityMutationBlocked,
    recoveryDecisionId,
    projectId,
    showRecoveryDocsWritePrepare,
    onDurableFactsChanged,
  ]);

  /**
   * JOURNEY-INTEGRITY / Lot A-B final — Proposal-backed PREPARE+RESOLVE.
   *
   * After pursue on a Proposal Decision Subject, the sealed DecisionBasis already
   * carries the decided operation (e.g. cursor.docs_write.apply). The Pilot must
   * not re-select a sandbox op. Client sends only projectId + decisionId; the
   * server resolves targetPath / operation / binding from durable lineage and
   * supersedes PREPARE into the canonical M4 docs-write machine profile when
   * DecisionBasis indicates docs_write (studio.gcec.docs_write).
   */
  const prepareProposalBackedContract = useCallback(async () => {
    if (continuityMutationBlocked) return;
    if (!decision?.proposalId || !decision.decisionBasisLinked) return;
    if (decisionDefersExecution) return;
    setBusy("contract");
    setError(null);
    const result = await projectAssistantPrepareResolvedM3Action({
      projectId,
      decisionId: decision.decisionId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const prepared = result.f3.successor;
    setContract({
      executionContractId: prepared.executionContractId,
      version: prepared.version,
      status: prepared.status,
      action: prepared.action,
      target: prepared.target,
      scope: prepared.scope,
      requiredAuthority: prepared.requiredAuthority,
      constraints: [...prepared.constraints],
      stopConditions: [...prepared.stopConditions],
      requiredCapabilities: [...prepared.requiredCapabilities],
      reversibility: prepared.reversibility,
      semanticFingerprint: prepared.semanticFingerprint,
      inspectionDisclosure: toInspectionDisclosureView(
        prepared.inspectionDisclosure,
      ),
    });
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    onDurableFactsChanged?.();
  }, [
    continuityMutationBlocked,
    decision,
    decisionDefersExecution,
    projectId,
    onDurableFactsChanged,
  ]);

  const rematerializeLegacyDocsWriteContract = useCallback(async () => {
    if (continuityMutationBlocked) return;
    const decisionId = decision?.decisionId ?? continuityDecisionRef;
    if (!decisionId || !contract) return;
    if (
      !isLegacyDocsWritePrepareContractView({
        decisionId,
        executionContractId: contract.executionContractId,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        constraints: contract.constraints,
        requiredCapabilities: contract.requiredCapabilities,
      })
    ) {
      return;
    }
    setBusy("contract");
    setError(null);
    const result = await projectAssistantResolveLegacyM3DocsWriteAction({
      projectId,
      decisionId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const prepared = result.f3.successor;
    setContract({
      executionContractId: prepared.executionContractId,
      version: prepared.version,
      status: prepared.status,
      action: prepared.action,
      target: prepared.target,
      scope: prepared.scope,
      requiredAuthority: prepared.requiredAuthority,
      constraints: [...prepared.constraints],
      stopConditions: [...prepared.stopConditions],
      requiredCapabilities: [...prepared.requiredCapabilities],
      reversibility: prepared.reversibility,
      semanticFingerprint: prepared.semanticFingerprint,
      inspectionDisclosure: toInspectionDisclosureView(
        prepared.inspectionDisclosure,
      ),
    });
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice({
      priorExecutionContractId: result.f3.original.executionContractId,
      additionalConstraint:
        "préparation historique → contrat d'exécution gouverné actuel",
      statusLabel:
        "CONTRAT ACTUALISÉ — RÉINSPECTION REQUISE AVANT CONFIRMATION",
      priorInspectionDoesNotCoverSuccessor: true,
    });
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    onDurableFactsChanged?.();
  }, [
    continuityMutationBlocked,
    decision,
    continuityDecisionRef,
    contract,
    projectId,
    onDurableFactsChanged,
  ]);

  const rematerializeDocsWriteEvidenceContract = useCallback(async () => {
    if (continuityMutationBlocked) return;
    if (!contract) return;
    if (
      !isDocsWriteEvidenceContradictionView({
        action: contract.action,
        target: contract.target,
        constraints: contract.constraints,
        evidenceRequirements:
          contract.inspectionDisclosure?.evidenceRequirements ?? [],
      })
    ) {
      return;
    }
    setBusy("contract");
    setError(null);
    const result = await w2RematerializeDocsWriteEvidenceAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const prepared = result.successor;
    setContract({
      executionContractId: prepared.executionContractId,
      version: prepared.version,
      status: prepared.status,
      action: prepared.action,
      target: prepared.target,
      scope: prepared.scope,
      requiredAuthority: prepared.requiredAuthority,
      constraints: [...prepared.constraints],
      stopConditions: [...prepared.stopConditions],
      requiredCapabilities: [...prepared.requiredCapabilities],
      reversibility: prepared.reversibility,
      semanticFingerprint: prepared.semanticFingerprint,
      inspectionDisclosure: toInspectionDisclosureView(
        prepared.inspectionDisclosure,
      ),
    });
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice({
      priorExecutionContractId: result.priorExecutionContractId,
      additionalConstraint:
        "evidenceRequirements cohérents avec NO_* (sans lifecycle Git)",
      statusLabel: result.statusLabel,
      priorInspectionDoesNotCoverSuccessor: true,
    });
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    onDurableFactsChanged?.();
  }, [
    continuityMutationBlocked,
    contract,
    projectId,
    onDurableFactsChanged,
  ]);

  const inspect = useCallback(async () => {
    if (continuityMutationBlocked) return;
    if (!contract) return;
    setBusy("inspection");
    setError(null);
    const result = await w2InspectExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...state } = result;
    setInspection(state);
    setAuthorization(null);
    if (amendmentNotice && state.inspectionSufficient) {
      setAmendmentNotice({
        ...amendmentNotice,
        statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
      });
    }
  }, [continuityMutationBlocked, contract, projectId, amendmentNotice]);

  const amendContract = useCallback(async () => {
    if (continuityMutationBlocked) return;
    if (!contract || !inspection?.inspectionSufficient) return;
    const constraint = amendmentDraft.trim();
    if (!constraint) {
      setError("Indiquez une contrainte d'exécution supplémentaire.");
      return;
    }
    setBusy("amendment");
    setError(null);
    const result = await w2AmendExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
      additionalConstraint: constraint,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const amended = result as AmendExecutionContractSuccess;
    setContract({
      executionContractId: amended.successor.executionContractId,
      version: amended.successor.version,
      status: amended.successor.status,
      action: amended.successor.action,
      target: amended.successor.target,
      scope: amended.successor.scope,
      requiredAuthority: amended.successor.requiredAuthority,
      constraints: [...amended.successor.constraints],
      stopConditions: [...amended.successor.stopConditions],
      requiredCapabilities: [...amended.successor.requiredCapabilities],
      reversibility: amended.successor.reversibility,
      semanticFingerprint: amended.successor.semanticFingerprint,
      inspectionDisclosure: toInspectionDisclosureView(
        amended.successor.inspectionDisclosure,
      ),
    });
    setInspection(amended.successorInspection);
    setAuthorization(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    setAmendmentDraft("");
    setAmendmentNotice({
      priorExecutionContractId: amended.priorExecutionContractId,
      additionalConstraint: amended.additionalConstraint,
      statusLabel: amended.statusLabel,
      priorInspectionDoesNotCoverSuccessor: true,
    });
    onDurableFactsChanged?.();
  }, [
    continuityMutationBlocked,
    contract,
    inspection,
    amendmentDraft,
    projectId,
    onDurableFactsChanged,
  ]);

  const confirmForAuthorization = useCallback(async () => {
    if (continuityMutationBlocked) return;
    if (!contract) return;
    setBusy("confirmation");
    setError(null);
    const result = await w2ConfirmExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setContract({ ...contract, status: "confirmed" });
    setAuthorization(null);
  }, [continuityMutationBlocked, contract, projectId]);

  const authorize = useCallback(async () => {
    if (continuityMutationBlocked) return;
    if (!contract) return;
    setBusy("authorization");
    setError(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptPhaseHistory([]);
    setAttemptStatusLabel(null);
    const result = await w2AuthorizeExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...outcome } = result;
    setAuthorization(outcome);
    setInspection(outcome.inspection);
  }, [continuityMutationBlocked, contract, projectId]);

  const governedExecute = useCallback(async () => {
    if (continuityMutationBlocked) return;
    if (!contract || authorization?.outcome !== "AUTHORIZED") return;
    setBusy("execute");
    setError(null);
    flushSync(() => {
      setAttempt(null);
      setAttemptPhase(null);
      setAttemptPhaseHistory([]);
      setAttemptStatusLabel(null);
      setProductOutcome(null);
      setProductEvidencePending(false);
    });

    const selected = await w2GovernedExecuteSelectAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    if (!selected.ok) {
      setBusy(null);
      setError(selected.message);
      if (selected.attempt) {
        paintAttemptPhase("accepted", selected.attempt, null);
      }
      return;
    }
    paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
    await yieldBrowserPaint();

    if (selected.phase === "terminal") {
      setBusy(null);
      paintAttemptPhase("terminal", selected.attempt, selected.statusLabel);
      onDurableFactsChanged?.();
      return;
    }

    const started = await w2GovernedExecuteStartAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: selected.attemptId,
    });
    if (!started.ok) {
      setBusy(null);
      setError(started.message);
      if (started.attempt) {
        flushSync(() => {
          setAttempt(started.attempt!);
        });
      }
      return;
    }

    // Adapter FAIL / governed STOP may terminate at Start — materialize without Complete.
    if (started.phase === "terminal") {
      paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
      flushSync(() => {
        setProductEvidencePending(true);
      });
      await yieldBrowserPaint();
      const materializedEarly = await w2MaterializeProductOutcomeAction({
        projectId,
        attemptId: started.attemptId,
      });
      setBusy(null);
      if (!materializedEarly.ok) {
        setError(materializedEarly.message);
        if (materializedEarly.product) setProductOutcome(materializedEarly.product);
        if (materializedEarly.postEvidence)
          setPostEvidence(materializedEarly.postEvidence);
        return;
      }
      flushSync(() => {
        setProductEvidencePending(false);
        setProductOutcome(materializedEarly.product);
        setPostEvidence(materializedEarly.postEvidence ?? null);
      });
      onDurableFactsChanged?.();
      return;
    }

    paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
    await yieldBrowserPaint();

    const completed = await w2GovernedExecuteCompleteAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: started.attemptId,
    });
    if (!completed.ok) {
      setBusy(null);
      setError(completed.message);
      if (completed.attempt) {
        flushSync(() => {
          setAttempt(completed.attempt!);
        });
      }
      return;
    }
    paintAttemptPhase(completed.phase, completed.attempt, completed.statusLabel);
    flushSync(() => {
      setProductEvidencePending(true);
    });
    await yieldBrowserPaint();

    const materialized = await w2MaterializeProductOutcomeAction({
      projectId,
      attemptId: completed.attemptId,
    });
    setBusy(null);
    if (!materialized.ok) {
      setError(materialized.message);
      if (materialized.product) setProductOutcome(materialized.product);
      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
      return;
    }
    flushSync(() => {
      setProductEvidencePending(false);
      setProductOutcome(materialized.product);
      setPostEvidence(materialized.postEvidence ?? null);
    });
    onDurableFactsChanged?.();
  }, [
    continuityMutationBlocked,
    contract,
    authorization,
    projectId,
    onDurableFactsChanged,
  ]);

  const stopRunningExecution = useCallback(async () => {
    if (!contract || !attempt?.attemptId || attemptPhase !== "running") return;
    setBusy("execute");
    setError(null);
    const cancelled = await w2GovernedExecuteCancelAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: attempt.attemptId,
    });
    if (!cancelled.ok) {
      setBusy(null);
      setError(cancelled.message);
      return;
    }
    paintAttemptPhase(cancelled.phase, cancelled.attempt, cancelled.statusLabel);
    flushSync(() => {
      setProductEvidencePending(true);
    });
    await yieldBrowserPaint();
    const materialized = await w2MaterializeProductOutcomeAction({
      projectId,
      attemptId: cancelled.attemptId,
    });
    setBusy(null);
    if (!materialized.ok) {
      setError(materialized.message);
      if (materialized.product) setProductOutcome(materialized.product);
      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
      return;
    }
    flushSync(() => {
      setProductEvidencePending(false);
      setProductOutcome(materialized.product);
      setPostEvidence(materialized.postEvidence ?? null);
    });
    onDurableFactsChanged?.();
  }, [
    contract,
    attempt,
    attemptPhase,
    projectId,
    onDurableFactsChanged,
  ]);

  const rehydrateProduct = useCallback(async () => {
    if (!attempt?.attemptId) return;
    setBusy("execute");
    setError(null);
    const result = await w2RehydrateProductOutcomeAction({
      projectId,
      attemptId: attempt.attemptId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setProductOutcome(result.product);
    setPostEvidence(result.postEvidence ?? null);
    setProductEvidencePending(false);
  }, [attempt, projectId]);

  /**
   * JOURNEY-INTEGRITY — CTA exclusivity on the mutating primary action.
   *
   * While a Proposal decision subject still owns the next useful action, the
   * generic ProjectTrajectory instruct CTA must not offer a competing subject.
   * Informational blocks above remain visible; only the mutating CTA is strict.
   *
   * Continuity conflict (unresolved Proposal subject + current EC) owns nothing
   * mutably — fail closed until Pilot resolves via a qualified next GO.
   */
  const proposalSubjectOwnsNextAction =
    !executionContinuityConflict &&
    // reformulate / instruct the pending subject
    (pendingReinstruction != null ||
      // options presented, awaiting the HumanDecision
      (optionSet != null && decision == null) ||
      // amend / refuse: next move is with Nora, never a new generic instruction
      (decision != null && decisionDefersExecution) ||
      // pursue decided but no contract yet: PREPARE owns the next action
      (decision != null && contract == null) ||
      // contract prepared / rehydrated: Inspect (then confirm / authorize) owns
      contract != null);

  const continuityReadsUnresolved = continuityMutationBlocked;

  /** Alias — same single fail-closed gate for EC and subject mutations. */
  const governedContinuationBlocked = continuityMutationBlocked;

  useEffect(() => {
    if (!onProposalSubjectOwnershipChange) return;
    if (continuityReadsUnresolved) {
      onProposalSubjectOwnershipChange("UNKNOWN");
      return;
    }
    onProposalSubjectOwnershipChange(
      proposalSubjectOwnsNextAction ? "OWNED" : "NONE",
    );
  }, [
    onProposalSubjectOwnershipChange,
    proposalSubjectOwnsNextAction,
    continuityReadsUnresolved,
  ]);

  return (
    <section
      className={[
        styles.root,
        composition === "lps-embedded" ? styles.embedded : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-testid="w2-trajectory-panel"
      data-composition={composition}
      aria-labelledby="w2-trajectory-title"
    >
      <header className={styles.head}>
        <p className={styles.eyebrow}>Trajectoire du projet</p>
        <h2 id="w2-trajectory-title" className={styles.title}>
          Options, recommandation, puis votre décision
        </h2>
        <p className={styles.note}>
          Nora instruit des options et recommande. La décision vous appartient :
          une recommandation ne décide jamais et ne rend jamais une trajectoire
          courante. L&apos;exécution n&apos;est possible qu&apos;après une
          autorisation vérifiée, via une action Exécuter explicite et distincte.
        </p>
      </header>

      {error ? (
        <p className={styles.error} role="alert" data-testid="w2-error">
          {error}
        </p>
      ) : null}

      {pendingReinstruction ? (
        <section
          className={styles.block}
          aria-labelledby="w2-pending-reinstruction-title"
          data-testid="w2-pending-reinstruction"
        >
          {pendingReinstruction.proposalIds.length > 1 ? (
            <>
              <h3
                id="w2-pending-reinstruction-title"
                className={styles.blockTitle}
              >
                {pilotAmbiguousPendingTitle()}
              </h3>
              <p
                className={styles.blockBody}
                data-testid="w2-pending-reinstruction-body"
              >
                {pendingReinstruction.message}
              </p>
            </>
          ) : pendingReinstruction.proposalIds.length === 1 &&
            pendingReinstruction.recoverableProposalIds.length === 1 ? (
            <>
              <h3
                id="w2-pending-reinstruction-title"
                className={styles.blockTitle}
              >
                {pilotRecoverablePendingTitle()}
              </h3>
              <p
                className={styles.blockBody}
                data-testid="w2-pending-reinstruction-body"
              >
                {pendingReinstruction.message}
              </p>
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.primaryAction}
                  data-testid="w2-instruct-recoverable-options"
                  onClick={() => {
                    if (
                      pendingReinstruction.proposalIds.length !== 1 ||
                      pendingReinstruction.recoverableProposalIds.length !== 1
                    ) {
                      return;
                    }
                    void proposeOptions();
                  }}
                  disabled={busy !== null || continuityMutationBlocked}
                >
                  Instruire les options
                </button>
              </div>
            </>
          ) : pendingReinstruction.proposalIds.length === 1 &&
            pendingReinstruction.recoverableProposalIds.length === 0 ? (
            <>
              <h3
                id="w2-pending-reinstruction-title"
                className={styles.blockTitle}
              >
                {pilotLostPendingTitle()}
              </h3>
              <p
                className={styles.blockBody}
                data-testid="w2-pending-reinstruction-body"
              >
                {pendingReinstruction.message}
              </p>
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.primaryAction}
                  data-testid="w2-reformulate-with-nora"
                  onClick={() => {
                    if (continuityMutationBlocked) return;
                    if (pendingReinstruction.proposalIds.length !== 1) return;
                    const soleId = pendingReinstruction.proposalIds[0];
                    if (soleId) onRequestReformulateWithNora?.(soleId);
                  }}
                  disabled={
                    busy !== null ||
                    continuityMutationBlocked ||
                    !onRequestReformulateWithNora
                  }
                >
                  Reformuler avec Nora
                </button>
              </div>
            </>
          ) : (
            <>
              <h3
                id="w2-pending-reinstruction-title"
                className={styles.blockTitle}
              >
                {pilotLostPendingTitle()}
              </h3>
              <p
                className={styles.blockBody}
                data-testid="w2-pending-reinstruction-body"
              >
                {pendingReinstruction.message}
              </p>
            </>
          )}
          <details data-testid="w2-technical-details">
            <summary>Détails techniques</summary>
            <p className={styles.blockNote}>
              Propositions en attente :{" "}
              {pendingReinstruction.proposalIds.join(", ") || "—"}
            </p>
          </details>
        </section>
      ) : null}

      {preCycleCandidate && !activeCycleInstanceId ? (
        <section
          className={styles.block}
          aria-labelledby="pre-cycle-candidate-title"
          data-testid="pre-cycle-candidate-trajectory"
        >
          <h3 id="pre-cycle-candidate-title" className={styles.blockTitle}>
            Trajectoire proposée
          </h3>
          <p className={styles.blockNote}>
            Cycle proposé :{" "}
            {approvalPresentation?.catalogLabel ??
              preCycleCandidate.catalogLabel ??
              preCycleCandidate.steps[0]?.label ??
              "—"}
          </p>
          <p className={styles.blockNote} data-testid="pre-cycle-candidate-status">
            En attente de décision · Nora recommande cette trajectoire ; le
            Pilote décide · Aucun cycle démarré
          </p>
          <ul className={styles.optionList} data-testid="pre-cycle-candidate-steps">
            {preCycleCandidate.steps.map((step) => (
              <li key={step.stepId} className={styles.option}>
                <div className={styles.optionHead}>
                  <span className={styles.optionBadge}>Étape {step.order}</span>
                  <span className={styles.optionLabel}>{step.label}</span>
                </div>
                <p className={styles.optionIntent}>En attente</p>
              </li>
            ))}
          </ul>
          {approvalPresentation &&
          !approvalPresentation.targetCycleSelectable ? (
            <p
              className={styles.blockNote}
              role="status"
              data-testid="pre-cycle-candidate-not-selectable"
            >
              Le cycle proposé n&apos;est plus sélectionnable. La proposition
              doit être réévaluée avant toute validation.
            </p>
          ) : null}
          {approvalPresentation?.targetCycleSelectable ? (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.primaryAction}
                data-testid="pre-cycle-validate-trajectory"
                onClick={() => void approveCandidate()}
                disabled={busy !== null}
              >
                Valider cette trajectoire
              </button>
              <p className={styles.blockNote} data-testid="pre-cycle-validate-hint">
                Valider rendra cette trajectoire décidée/courante. Cela ne
                démarre pas encore le cycle.
              </p>
              {busy === "approve-candidate" ? (
                <span
                  className={styles.busy}
                  role="status"
                  data-testid="pre-cycle-approve-busy"
                >
                  Validation en cours…
                </span>
              ) : null}
            </div>
          ) : null}
        </section>
      ) : null}

      {greenfieldDecided && !activeCycleInstanceId && !preCycleCandidate ? (
        <section
          className={styles.block}
          aria-labelledby="pre-cycle-decided-title"
          data-testid="pre-cycle-decided-trajectory"
        >
          <h3 id="pre-cycle-decided-title" className={styles.blockTitle}>
            Décision humaine enregistrée
          </h3>
          <p className={styles.blockNote}>
            Trajectoire décidée / courante · Cycle :{" "}
            {greenfieldDecided.catalogLabel ?? "—"} · Aucun cycle démarré
          </p>
          {/*
            FIGMA SOURCE NOT APPLICABLE — D-GF-START-01 prepare/start CTAs follow
            existing TrajectorySurface action patterns (no Figma handoff).
          */}
          {greenfieldDecided.prepareBlockedReason ||
          greenfieldDecided.completedMatchingCycle ? (
            <p
              className={styles.blockNote}
              data-testid="pre-cycle-prepare-blocked"
            >
              Ce type de cycle est déjà terminé pour ce projet — aucune
              préparation disponible.
            </p>
          ) : !preparedCycle ? (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.primaryAction}
                data-testid="pre-cycle-prepare-cycle"
                onClick={() => void prepareValidatedCycle()}
                disabled={busy !== null}
              >
                Préparer le cycle
              </button>
              {busy === "prepare-cycle" ? (
                <span
                  className={styles.busy}
                  role="status"
                  data-testid="pre-cycle-prepare-busy"
                >
                  Préparation en cours…
                </span>
              ) : null}
            </div>
          ) : (
            <div className={styles.actions}>
              <p
                className={styles.blockNote}
                data-testid="pre-cycle-prepared-cycle"
              >
                Cycle préparé · {preparedCycle.catalogLabel ?? preparedCycle.cycleTypeId}{" "}
                · profil {preparedCycle.profile} · {preparedCycle.status}
              </p>
              <button
                type="button"
                className={styles.primaryAction}
                data-testid="pre-cycle-start-cycle"
                onClick={() => void startPreparedCycle()}
                disabled={busy !== null}
              >
                {preparedCycle.cycleTypeId === "cyc:framing" ||
                preparedCycle.catalogLabel === "Cadrage"
                  ? "Démarrer le cadrage"
                  : "Démarrer le cycle"}
              </button>
              {busy === "start-cycle" ? (
                <span
                  className={styles.busy}
                  role="status"
                  data-testid="pre-cycle-start-busy"
                >
                  Démarrage en cours…
                </span>
              ) : null}
            </div>
          )}
        </section>
      ) : null}

      {/*
        W2 OptionSet requires an active CycleInstance.
        JOURNEY-INTEGRITY — whenever a Proposal decision subject owns the next
        action (pending, options awaiting decision, decision taken, contract
        prepared), the generic trajectory instruct CTA is hidden so two
        decision subjects can never compete for the same primary action.
        Continuity reads must both resolve; pending/error/conflict stay fail-closed.
      */}
      {activeCycleInstanceId &&
      !proposalSubjectOwnsNextAction &&
      !continuityReadsUnresolved ? (
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primaryAction}
          data-testid="w2-propose-options"
          onClick={() => void proposeOptions()}
          disabled={busy !== null || continuityMutationBlocked}
        >
          Instruire les options
        </button>
        {busy ? (
          <span className={styles.busy} role="status" data-testid="w2-busy">
            Traitement en cours…
          </span>
        ) : null}
      </div>
      ) : null}

      {!activeCycleInstanceId &&
      !preCycleCandidate &&
      hasCurrentNextCycleRecommendation ? (
        <p
          className={styles.blockNote}
          data-testid="pre-cycle-prepare-trajectory-hint"
        >
          Préparez d&apos;abord la trajectoire depuis la recommandation lifecycle
          courante — les options W2 nécessitent un cycle actif.
        </p>
      ) : null}

      {optionSet ? (
        <>
          <section
            className={styles.block}
            aria-labelledby="w2-options-title"
            data-testid="w2-options"
          >
            <h3 id="w2-options-title" className={styles.blockTitle}>
              <span className={styles.sectionKind} data-kind="option">
                Option
              </span>
              Options proposées
            </h3>
            {optionSet.proposalId ? (
              <>
                <p
                  className={styles.blockNote}
                  data-testid="w2-decision-subject"
                >
                  Proposition à examiner
                  {optionSet.promotesProjectTrajectory === false
                    ? " — arbitrage sur cette proposition (pas une promotion de trajectoire projet)."
                    : null}
                </p>
                <details data-testid="w2-technical-details">
                  <summary>Détails techniques</summary>
                  <p className={styles.blockNote}>
                    Proposal <code>{optionSet.proposalId}</code>
                  </p>
                </details>
              </>
            ) : (
              <p
                className={styles.blockNote}
                data-testid="w2-decision-subject-trajectory"
              >
                Sujet de décision : trajectoire Project (chemin de cycle).
              </p>
            )}
            <p className={styles.blockNote} data-testid="w2-proposed-trajectory">
              {optionSet.proposedTrajectory
                ? `${optionSet.proposedTrajectory.statusLabel} · version ${optionSet.proposedTrajectory.version} · pas encore courante`
                : optionSet.decisionSubjectMode === "proposal"
                  ? "Proposition — aucune trajectoire projet proposée."
                  : "Aucune trajectoire proposée."}
            </p>
            <ul className={styles.optionList}>
              {optionSet.options.map((option) => {
                const isRecommended =
                  option.optionRef ===
                  optionSet.recommendation.recommendedOptionRef;
                const impactParts = partitionOptionImpactsForPilote(
                  option.impacts,
                );
                return (
                  <li
                    key={option.optionRef}
                    className={styles.option}
                    data-testid={`w2-option-${option.optionRef}`}
                  >
                    <div className={styles.optionHead}>
                      <span className={styles.optionBadge}>{option.kind}</span>
                      {isRecommended ? (
                        <span className={styles.recommendedBadge}>
                          Recommandée — pas décidée
                        </span>
                      ) : null}
                      <span className={styles.optionLabel}>{option.label}</span>
                    </div>
                    <p className={styles.optionIntent}>{option.intent}</p>
                    {impactParts.primary.length > 0 ? (
                      <ul className={styles.impacts}>
                        {impactParts.primary.map((impact) => (
                          <li key={impact}>{impact}</li>
                        ))}
                      </ul>
                    ) : null}
                    {impactParts.technical.length > 0 ? (
                      <details data-testid={`w2-option-tech-${option.optionRef}`}>
                        <summary>Détails techniques de l&apos;option</summary>
                        <ul className={styles.impacts}>
                          {impactParts.technical.map((impact) => (
                            <li key={impact}>{impact}</li>
                          ))}
                        </ul>
                        <p className={styles.blockNote}>
                          Réf. option : <code>{option.optionRef}</code>
                        </p>
                      </details>
                    ) : (
                      <details data-testid={`w2-option-tech-${option.optionRef}`}>
                        <summary>Détails techniques de l&apos;option</summary>
                        <p className={styles.blockNote}>
                          Réf. option : <code>{option.optionRef}</code>
                        </p>
                      </details>
                    )}
                    <button
                      type="button"
                      className={styles.decideAction}
                      data-testid={`w2-decide-${option.optionRef}`}
                      onClick={() => void decide(option.optionRef)}
                      disabled={
                        busy !== null ||
                        decision !== null ||
                        continuityMutationBlocked
                      }
                      aria-label={`Décider: ${option.label}`}
                    >
                      Décider cette option
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          <section
            className={styles.recommendation}
            aria-labelledby="w2-reco-title"
            data-testid="w2-recommendation"
          >
            <h3 id="w2-reco-title" className={styles.recoTitle}>
              <span className={styles.sectionKind} data-kind="recommendation">
                Recommandation
              </span>
              {pilotPresentedOptionLabel({
                optionRef: optionSet.recommendation.recommendedOptionRef,
                options: optionSet.options,
              })}
            </h3>
            <p
              className={styles.blockBody}
              data-testid="w2-recommendation-rationale"
            >
              {scrubPiloteRecommendationProse(
                formatNoraAssistantDisplayText(
                  optionSet.recommendation.rationale,
                ),
              )}
            </p>
            <p className={styles.blockNote} data-testid="w2-recommendation-footer">
              Cette recommandation vous aide à décider. Elle ne lance aucune
              action automatiquement.
              {optionSet.recommendation.ckcAttribution
                ? " Contexte de cycle rattaché."
                : ""}
            </p>
            {optionSet.recommendation.cognitiveAnalysis ? (
              <details data-testid="w2-recommendation-nora-analysis">
                <summary>Analyse Nora</summary>
                <p className={styles.blockBody}>
                  {scrubPiloteRecommendationProse(
                    formatNoraAssistantDisplayText(
                      optionSet.recommendation.cognitiveAnalysis,
                    ),
                  )}
                </p>
              </details>
            ) : null}
            <details data-testid="w2-recommendation-tech">
              <summary>Détails techniques de la recommandation</summary>
              <p className={styles.blockNote}>
                {optionSet.recommendation.label} · optionRef{" "}
                <code>{optionSet.recommendation.recommendedOptionRef}</code>
                {optionSet.optionSetRef ? (
                  <>
                    {" "}
                    · optionSetRef <code>{optionSet.optionSetRef}</code>
                  </>
                ) : null}
              </p>
            </details>
          </section>
        </>
      ) : null}

      {decision ? (
        <section
          className={styles.decision}
          aria-labelledby="w2-decision-title"
          data-testid="w2-decision"
        >
          <h3 id="w2-decision-title" className={styles.blockTitle}>
            <span className={styles.sectionKind} data-kind="decision">
              Décision humaine
            </span>
            {optionSet?.decisionSubjectMode === "proposal" ||
            decision.proposalId
              ? `Votre décision — ${decision.statusLabel}`
              : `Décision de trajectoire — ${decision.statusLabel}`}
          </h3>
          <dl className={styles.facts}>
            <div>
              <dt>Option retenue</dt>
              <dd data-testid="w2-decided-option">
                {optionSet?.decisionSubjectMode === "proposal" ||
                decision.proposalId
                  ? pilotProposalOptionLabel(decision.selectedOptionRef)
                  : pilotPresentedOptionLabel({
                      optionRef: decision.selectedOptionRef,
                      options: optionSet?.options,
                    })}
              </dd>
            </div>
            <div>
              <dt>Décideur</dt>
              <dd>{decision.actorRole}</dd>
            </div>
            <div>
              <dt>Base de décision</dt>
              <dd data-testid="w2-decision-basis">
                {decision.decisionBasisLinked ? "Reliée" : "Absente"}
              </dd>
            </div>
            <div>
              <dt>Trajectoire</dt>
              <dd data-testid="w2-decided-trajectory">
                {decided
                  ? `${decided.statusLabel} · version ${decided.version}`
                  : "Aucune promotion ProjectTrajectory"}
              </dd>
            </div>
          </dl>
          <details data-testid="w2-technical-details">
            <summary>Détails techniques</summary>
            <p className={styles.blockNote}>
              Réf. option : <code>{decision.selectedOptionRef}</code>
              {decision.proposalId ? (
                <>
                  {" "}
                  · Proposal <code>{decision.proposalId}</code>
                </>
              ) : null}
            </p>
          </details>
          {decision.selectedOptionRef === PROPOSAL_SUBJECT_AMEND_REF ? (
            <p
              className={styles.blockBody}
              data-testid="w2-amend-next-action"
            >
              Modifiez la proposition avec Nora, puis reformulez explicitement
              si une nouvelle instruction est requise. Aucune préparation
              d&apos;exécution ici.
            </p>
          ) : null}
          {decision.selectedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF ? (
            <p
              className={styles.blockBody}
              data-testid="w2-refuse-next-action"
            >
              Vous avez choisi de ne pas poursuivre cette proposition.
              Reformulez avec Nora si vous souhaitez un nouveau sujet. Aucune
              préparation d&apos;exécution ici.
            </p>
          ) : null}
          {/*
            JOURNEY-INTEGRITY Lot A-B fail-closed:
            · Proposal pursue + linked DecisionBasis → M3 PREPARE (no selector).
            · Proposal pursue + missing DecisionBasis → fail-closed requalify
              (NEVER sandbox fallback — subject still owns the journey).
            · Non-Proposal only → W2 sandbox selector remains.
            Contract prepared → Inspect owns next action; no re-PREPARE.
          */}
          {!decisionDefersExecution &&
          !contract &&
          proposalBackedPrepareReady ? (
          <div
            className={styles.actions}
            data-testid="w2-proposal-backed-prepare"
          >
            <p className={styles.blockNote} data-testid="w2-proposal-backed-prepare-note">
              La décision porte déjà l&apos;opération scellée. Préparez le
              contrat d&apos;exécution à partir de cette décision — sans
              resélection technique.
            </p>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-prepare-contract"
              onClick={() => void prepareProposalBackedContract()}
              disabled={busy !== null || continuityMutationBlocked}
            >
              Préparer le contrat d&apos;exécution
            </button>
          </div>
          ) : null}
          {!decisionDefersExecution &&
          !contract &&
          proposalBackedPrepareBlocked ? (
          <div
            className={styles.block}
            data-testid="w2-proposal-prepare-blocked"
            role="status"
          >
            <p className={styles.blockBody}>
              Cette décision ne dispose plus d&apos;une base d&apos;exécution
              exploitable. Réinstruisez ou requalifiez le sujet avec Nora avant
              de préparer un contrat.
            </p>
          </div>
          ) : null}
          {!decisionDefersExecution &&
          !contract &&
          !hasProposalDecisionSubject &&
          !recoveryDocsWritePrepareReady ? (
          <div
            className={styles.actions}
            data-testid="w3a-prepare-execution-from-decision"
          >
            <p className={styles.blockNote}>
              Studio prépare le contrat d&apos;exécution à partir de la
              décision et du contexte produit durable — sans choix technique
              (lecture, simulation, artefact…).
            </p>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-prepare-contract-sandbox"
              onClick={() => void prepareContract()}
              disabled={busy !== null || continuityMutationBlocked}
            >
              Préparer le contrat d&apos;exécution
            </button>
          </div>
          ) : null}
        </section>
      ) : null}

      {/* R10 — recovery CTA outside decision client state (restart: decision=null). */}
      {!decisionDefersExecution &&
      showRecoveryDocsWritePrepare &&
      recoveryBinding ? (
        <section
          className={styles.actions}
          data-testid="w2-recovery-docs-write-prepare"
        >
          <p
            className={styles.blockNote}
            data-testid="w2-recovery-docs-write-note"
          >
            Reprendre l&apos;écriture Markdown gouvernée après échec — cible
            déjà qualifiée. Préparez le contrat successor explicitement ; aucun
            Execute automatique.
          </p>
          {wrongGenericReplaceableByRecoveryPrepare && contract ? (
            <p
              className={styles.blockBody}
              data-testid="w2-recovery-replaceable-generic-note"
            >
              Un contrat générique pré-exécution existe pour cette décision (
              {contract.executionContractId}). La reprise recovery le remplacera
              uniquement si vous préparez explicitement le nouveau contrat —
              aucun remplacement automatique.
            </p>
          ) : null}
          <p
            className={styles.blockBody}
            data-testid="w2-recovery-docs-write-path"
          >
            Cible : {recoveryBinding.targetPath}
          </p>
          <p
            className={styles.blockBody}
            data-testid="w2-recovery-docs-write-source"
          >
            Source : Attempt {recoveryBinding.sourceAttemptId} (
            {recoveryBinding.recovery.productOutcome}) — EC{" "}
            {recoveryBinding.sourceExecutionContractId}
          </p>
          <button
            type="button"
            className={styles.primaryAction}
            data-testid="w2-prepare-recovery-docs-write"
            onClick={() => void prepareRecoveryDocsWriteContract()}
            disabled={busy !== null || continuityMutationBlocked}
          >
            Préparer le contrat d&apos;exécution (recovery docs_write)
          </button>
        </section>
      ) : null}

      {contract ? (
        <section
          className={styles.contract}
          aria-labelledby="w2-contract-title"
          data-testid="w2-contract"
        >
          <h3 id="w2-contract-title" className={styles.blockTitle}>
            Contrat d&apos;exécution — résumé
          </h3>
          <p className={styles.blockNote}>
            {wrongGenericReplaceableByRecoveryPrepare
              ? "Contrat générique pré-exécution visible pour cette décision. La prochaine action utile est de préparer le contrat recovery docs_write — pas d'inspection de ce dead-end."
              : "Relisez d'abord ce qui sera tenté. Inspectez le détail avant toute confirmation. Confirmer n'exécute pas."}
          </p>
          <dl className={styles.facts} data-testid="w2-contract-facts">
            <div>
              <dt>Ce qui sera fait</dt>
              <dd data-testid="w2-contract-action">{contract.action}</dd>
            </div>
            <div>
              <dt>Cible technique</dt>
              <dd data-testid="w2-contract-target">{contract.target}</dd>
            </div>
            {contract.inspectionDisclosure?.targetPath ? (
              <div>
                <dt>Cible exacte</dt>
                <dd data-testid="w2-contract-exact-target">
                  {contract.inspectionDisclosure.targetPath}
                </dd>
              </div>
            ) : null}
            {contract.inspectionDisclosure?.targetRepositoryRef ? (
              <div>
                <dt>Repository</dt>
                <dd data-testid="w2-contract-repository">
                  {contract.inspectionDisclosure.targetRepositoryRef}
                </dd>
              </div>
            ) : null}
            <div>
              <dt>Périmètre</dt>
              <dd data-testid="w2-contract-scope">{contract.scope}</dd>
            </div>
            <div>
              <dt>État du contrat</dt>
              <dd
                data-testid="w2-contract-status"
                data-status={contract.status}
              >
                {executionContractStatusLabel(contract.status)}
              </dd>
            </div>
            <div>
              <dt>Prochaine action utile</dt>
              <dd data-testid="w2-contract-next-action">
                {wrongGenericReplaceableByRecoveryPrepare
                  ? "Préparer le contrat recovery docs_write (explicite)"
                  : inspection?.inspectionSufficient
                    ? contract.status === "confirmation_required"
                      ? "Confirmer si requis, puis statuer sur l'autorisation"
                      : "Statuer sur l'autorisation"
                    : "Inspecter le détail du contrat"}
              </dd>
            </div>
          </dl>
          <details className={styles.contractLevel2}>
            <summary>Détails métier du contrat</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Version</dt>
                <dd data-testid="w2-contract-version">v{contract.version}</dd>
              </div>
              <div>
                <dt>Autorité requise</dt>
                <dd data-testid="w2-contract-authority">
                  {contract.requiredAuthority}
                </dd>
              </div>
              <div>
                <dt>Capacités</dt>
                <dd data-testid="w2-contract-capabilities">
                  {contract.requiredCapabilities.length
                    ? contract.requiredCapabilities.join(", ")
                    : "Aucune"}
                </dd>
              </div>
              <div>
                <dt>Réversibilité</dt>
                <dd data-testid="w2-contract-reversibility">
                  {contract.reversibility}
                </dd>
              </div>
              {contract.inspectionDisclosure?.scopeIn ? (
                <div>
                  <dt>Périmètre IN</dt>
                  <dd data-testid="w2-contract-scope-in">
                    {contract.inspectionDisclosure.scopeIn.join(" · ")}
                  </dd>
                </div>
              ) : null}
              {contract.inspectionDisclosure?.scopeOut ? (
                <div>
                  <dt>Périmètre OUT</dt>
                  <dd data-testid="w2-contract-scope-out">
                    {contract.inspectionDisclosure.scopeOut.join(" · ")}
                  </dd>
                </div>
              ) : null}
              {contract.inspectionDisclosure?.createOrModify !== null &&
              contract.inspectionDisclosure?.createOrModify !== undefined ? (
                <div>
                  <dt>Mutation</dt>
                  <dd data-testid="w2-contract-mutation">
                    {contract.inspectionDisclosure.createOrModify
                      ? "Création / modification"
                      : "Sans création / modification"}
                    {contract.inspectionDisclosure.noDelete
                      ? " · aucune suppression"
                      : ""}
                  </dd>
                </div>
              ) : null}
              {contract.inspectionDisclosure?.expectedOutputs ? (
                <div>
                  <dt>Sorties attendues</dt>
                  <dd data-testid="w2-contract-expected-outputs">
                    {contract.inspectionDisclosure.expectedOutputs.join(" · ")}
                  </dd>
                </div>
              ) : null}
              {contract.inspectionDisclosure?.contentRequirements ? (
                <div>
                  <dt>Exigences de contenu</dt>
                  <dd data-testid="w2-contract-content-requirements">
                    {contract.inspectionDisclosure.contentRequirements.join(
                      " · ",
                    )}
                  </dd>
                </div>
              ) : null}
              {contract.inspectionDisclosure?.validationExpectations ? (
                <div>
                  <dt>Attentes de validation</dt>
                  <dd data-testid="w2-contract-validation-expectations">
                    {contract.inspectionDisclosure.validationExpectations.join(
                      " · ",
                    )}
                  </dd>
                </div>
              ) : null}
              {contract.inspectionDisclosure?.evidenceRequirements.length ? (
                <div>
                  <dt>Preuves requises</dt>
                  <dd data-testid="w2-contract-evidence-requirements">
                    {contract.inspectionDisclosure.evidenceRequirements.join(
                      " · ",
                    )}
                  </dd>
                </div>
              ) : null}
              <div>
                <dt>Contraintes</dt>
                <dd data-testid="w2-contract-constraints">
                  {contract.constraints.length
                    ? contract.constraints.join(" · ")
                    : "Aucune"}
                </dd>
              </div>
              <div>
                <dt>Conditions d&apos;arrêt</dt>
                <dd data-testid="w2-contract-stops">
                  {contract.stopConditions.length
                    ? contract.stopConditions.join(" · ")
                    : "Aucune"}
                </dd>
              </div>
            </dl>
          </details>
          <details className={styles.technicalDetails}>
            <summary>Détails techniques du contrat</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Statut technique</dt>
                <dd
                  className={styles.code}
                  data-testid="w2-contract-status-tech"
                >
                  {contract.status}
                </dd>
              </div>
              <div>
                <dt>Empreinte sémantique</dt>
                <dd className={styles.code} data-testid="w2-contract-fingerprint">
                  {contract.semanticFingerprint.slice(0, 12)}…
                </dd>
              </div>
              <div>
                <dt>Identifiant contrat</dt>
                <dd className={styles.code} data-testid="w2-contract-id-tech">
                  {contract.executionContractId}
                </dd>
              </div>
            </dl>
          </details>

          {amendmentNotice ? (
            <div
              className={styles.amendmentNotice}
              data-testid="w2-amendment-notice"
              role="status"
            >
              <p className={styles.blockBody} data-testid="w2-amendment-status">
                {amendmentNotice.statusLabel}
              </p>
              <p className={styles.blockNote}>
                L&apos;inspection précédente couvrait le contrat précédent, pas
                le successeur amendé.
              </p>
              <p className={styles.blockNote} data-testid="w2-amendment-lineage">
                Successeur de {amendmentNotice.priorExecutionContractId} ·
                contrainte ajoutée : {amendmentNotice.additionalConstraint}
              </p>
            </div>
          ) : null}

          {inspection?.inspectionSufficient ? (
            <div
              className={styles.amendmentForm}
              data-testid="w2-amendment-form"
            >
              <p className={styles.blockTitle}>Amender le contrat</p>
              <label className={styles.amendmentLabel} htmlFor="w2-amend-constraint">
                Contrainte d&apos;exécution supplémentaire
              </label>
              <input
                id="w2-amend-constraint"
                className={styles.amendmentInput}
                data-testid="w2-amend-constraint"
                type="text"
                value={amendmentDraft}
                onChange={(event) => setAmendmentDraft(event.target.value)}
                disabled={busy !== null || governedContinuationBlocked}
                placeholder="Ex. : borner strictement le slice livré"
              />
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w2-amend-contract"
                onClick={() => void amendContract()}
                disabled={
                  busy !== null ||
                  governedContinuationBlocked ||
                  amendmentDraft.trim().length === 0
                }
              >
                Appliquer l&apos;amendement
              </button>
            </div>
          ) : null}

          {legacyDocsWriteRematerializeReady ? (
            <div
              className={styles.actions}
              data-testid="w2-legacy-docs-write-rematerialize"
            >
              <p
                className={styles.blockNote}
                data-testid="w2-legacy-docs-write-rematerialize-note"
              >
                Cette préparation historique peut être actualisée en contrat
                d&apos;exécution gouverné actuel. Aucune exécution n&apos;est
                lancée — une nouvelle inspection sera requise.
              </p>
              <button
                type="button"
                className={styles.primaryAction}
                data-testid="w2-rematerialize-legacy-docs-write"
                onClick={() => void rematerializeLegacyDocsWriteContract()}
                disabled={busy !== null || continuityMutationBlocked}
              >
                Actualiser le contrat d&apos;exécution
              </button>
            </div>
          ) : null}

          {docsWriteEvidenceRematerializeReady ? (
            <div
              className={styles.actions}
              data-testid="w2-docs-write-evidence-rematerialize"
            >
              <p
                className={styles.blockNote}
                data-testid="w2-docs-write-evidence-rematerialize-note"
              >
                Les exigences de preuve Git de ce contrat contredisent ses
                contraintes NO_COMMIT / NO_PUSH / NO_PR / NO_MERGE. Actualisez
                le contrat pour des preuves locales satisfaisables. Aucune
                exécution n&apos;est lancée — une nouvelle inspection sera
                requise.
              </p>
              <button
                type="button"
                className={styles.primaryAction}
                data-testid="w2-rematerialize-docs-write-evidence"
                onClick={() => void rematerializeDocsWriteEvidenceContract()}
                disabled={busy !== null || continuityMutationBlocked}
              >
                Actualiser les exigences de preuve
              </button>
            </div>
          ) : null}

          <div className={styles.actions}>
            <button
              type="button"
              className={
                wrongGenericReplaceableByRecoveryPrepare
                  ? styles.secondaryAction
                  : styles.primaryAction
              }
              data-testid="w2-inspect-contract"
              onClick={() => void inspect()}
              disabled={busy !== null || governedContinuationBlocked}
            >
              Inspecter le contrat
            </button>
            {contract.status === "confirmation_required" &&
            !wrongGenericReplaceableByRecoveryPrepare ? (
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w2-confirm-contract"
                onClick={() => void confirmForAuthorization()}
                disabled={
                  busy !== null ||
                  governedContinuationBlocked ||
                  docsWriteEvidenceRematerializeReady ||
                  inspection === null ||
                  !inspection.inspectionSufficient
                }
                title={
                  docsWriteEvidenceRematerializeReady
                    ? "Actualisez les exigences de preuve avant de confirmer"
                    : inspection === null || !inspection.inspectionSufficient
                      ? "Inspection suffisante requise avant de confirmer"
                      : undefined
                }
              >
                Confirmer mon consentement
              </button>
            ) : null}
            <button
              type="button"
              className={styles.secondaryAction}
              data-testid="w2-authorize-contract"
              onClick={() => void authorize()}
              disabled={
                busy !== null ||
                governedContinuationBlocked ||
                wrongGenericReplaceableByRecoveryPrepare
              }
              title={
                wrongGenericReplaceableByRecoveryPrepare
                  ? "Préparez d'abord le contrat recovery docs_write"
                  : undefined
              }
            >
              Statuer sur l&apos;autorisation
            </button>
          </div>

          {inspection ? (
            <p
              className={styles.inspection}
              data-testid="w2-inspection-state"
              role="status"
            >
              {inspection.statusLabel}
              {inspection.reinspectionRequired
                ? " — l'inspection précédente ne suffit plus"
                : ""}
              {" · inspecter n'autorise pas"}
            </p>
          ) : null}
        </section>
      ) : null}

      {authorization ? (
        <section
          className={
            authorization.outcome === "AUTHORIZED"
              ? styles.authorized
              : styles.blocked
          }
          aria-labelledby="w2-authorization-title"
          data-testid="w2-authorization"
          role="status"
        >
          <h3 id="w2-authorization-title" className={styles.blockTitle}>
            <span
              data-testid="w2-authorization-outcome"
              data-outcome={authorization.outcome}
            >
              {authorization.outcome === "AUTHORIZED"
                ? "Autorisation vérifiée — l'exécution peut être lancée"
                : "Exécution bloquée"}
            </span>
          </h3>
          <p className={styles.blockBody} data-testid="w2-authorization-reason">
            {authorization.reasonText}
          </p>
          <p className={styles.blockNote} data-testid="w2-authorization-next">
            Prochaine action : {authorization.nextAction}
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Confirmation</dt>
              <dd data-testid="w2-confirmation-state">
                {authorization.confirmation.statusLabel}
              </dd>
            </div>
            <div>
              <dt>Exécuteur</dt>
              <dd data-testid="w2-executor-state">
                {authorization.agentCapability.statusLabel}
              </dd>
            </div>
            <div>
              <dt>Inspection</dt>
              <dd>{authorization.inspection.statusLabel}</dd>
            </div>
          </dl>
          <details className={styles.technicalDetails}>
            <summary>Détails techniques d&apos;autorité</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Verdict technique</dt>
                <dd data-testid="w2-authorization-outcome-tech">
                  {authorization.outcomeLabel}
                </dd>
              </div>
              <div>
                <dt>Trace d&apos;autorité</dt>
                <dd className={styles.code} data-testid="w2-authority-receipt">
                  {authorization.authorityReceiptRef}
                </dd>
              </div>
            </dl>
          </details>
          {authorization.outcome === "AUTHORIZED" && !attempt ? (
            <>
              <p
                className={styles.stopNotice}
                data-testid="w2-stop-before-execute"
              >
                Autorisation évaluée — aucune tentative lancée tant que vous
                n&apos;exécutez pas explicitement.
              </p>
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.primaryAction}
                  data-testid="w3a-governed-execute"
                  onClick={() => void governedExecute()}
                  disabled={busy !== null || governedContinuationBlocked}
                >
                  Exécuter
                </button>
              </div>
            </>
          ) : null}
          {authorization.outcome === "BLOCKED" ? (
            <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
              Aucune exécution n&apos;a été lancée : arrêt avant exécution.
            </p>
          ) : null}
        </section>
      ) : null}

      {attempt || attemptPhaseHistory.length > 0 ? (
        <section
          className={styles.attempt}
          aria-labelledby="w3a-attempt-title"
          data-testid="w3a-attempt"
          role="status"
        >
          <h3 id="w3a-attempt-title" className={styles.blockTitle}>
            Tentative d&apos;exécution
          </h3>
          <p className={styles.blockBody} data-testid="w3a-attempt-status">
            {attemptStatusLabel ?? "Tentative en cours"} · phase{" "}
            <span data-testid="w3a-attempt-lifecycle">
              {attemptPhase ?? "—"}
            </span>{" "}
            · historique{" "}
            <code data-testid="w3a-attempt-phase-history">
              {attemptPhaseHistory.join("|")}
            </code>{" "}
            · statut technique{" "}
            <span data-testid="w3a-attempt-technical-status">
              {attempt?.attemptStatus ?? "—"}
            </span>
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Attempt</dt>
              <dd className={styles.code} data-testid="w3a-attempt-id">
                {attempt?.attemptId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>Adapter</dt>
              <dd data-testid="w3a-attempt-adapter">
                {attempt?.adapterId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>Effets externes</dt>
              <dd data-testid="w3a-attempt-real">non</dd>
            </div>
            <div>
              <dt>Cycle auto-fermé</dt>
              <dd data-testid="w3a-cycle-closed">non</dd>
            </div>
          </dl>
          {attemptPhase === "running" ? (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w3b-stop-running"
                onClick={() => void stopRunningExecution()}
                disabled={busy !== null}
              >
                Arrêter l&apos;exécution
              </button>
            </div>
          ) : null}
          <p className={styles.blockNote} data-testid="w3a-terminal-honesty">
            {productOutcome?.claimAllowed
              ? "Terminal technique consommé — résultat produit qualifié ci-dessous."
              : productEvidencePending
                ? "Terminal technique — Evidence en cours / claim produit non encore émis."
                : "Terminal technique — résultat produit non encore qualifié."}
          </p>
          {productEvidencePending ? (
            <p
              className={styles.blockNote}
              data-testid="w3b-evidence-pending"
            >
              Evidence requise avant tout claim de résultat produit.
            </p>
          ) : null}
          {attempt?.attemptId && !productOutcome ? (
            <button
              type="button"
              className={styles.secondaryAction}
              data-testid="w3b-rehydrate-product"
              onClick={() => void rehydrateProduct()}
              disabled={busy !== null}
            >
              Recharger résultat produit (durable)
            </button>
          ) : null}
        </section>
      ) : null}

      {productOutcome ? (
        <section
          className={styles.productOutcome}
          aria-labelledby="w3b-product-title"
          data-testid="w3b-product-outcome"
          data-outcome={productOutcome.outcome}
          role="status"
        >
          <h3 id="w3b-product-title" className={styles.blockTitle}>
            Résultat
          </h3>
          <p
            className={styles.productHeadline}
            data-testid="w3b-product-headline"
          >
            <span
              data-testid="w3b-product-outcome-kind"
              data-kind={productOutcome.outcome}
            >
              {W4C_PRODUCT_OUTCOME_LABELS[productOutcome.outcome]}
            </span>
            {" — "}
            {productOutcome.businessHeadline}
          </p>
          <p className={styles.blockBody} data-testid="w3b-product-reason">
            {productOutcome.businessReason}
          </p>
          {productOutcome.governedBoundary ? (
            <p className={styles.blockBody} data-testid="w3b-governed-boundary">
              Frontière : {productOutcome.governedBoundary}
            </p>
          ) : null}
          <p className={styles.blockBody} data-testid="w3b-evidence-summary">
            {productOutcome.evidenceSummary ??
              "Aucune preuve enregistrée — aucun résultat produit revendiqué."}
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Preuve disponible</dt>
              <dd data-testid="w3b-review-bundle-completeness">
                {productOutcome.reviewBundleCompleteness ?? "—"}
              </dd>
            </div>
          </dl>
          {postEvidence && postEvidence.ok ? (
            <section
              className={styles.postEvidence}
              data-testid="w3c-post-evidence"
              aria-label={W4C_POST_EVIDENCE_HEADING}
            >
              <h4 className={styles.blockTitle}>{W4C_POST_EVIDENCE_HEADING}</h4>
              <p
                className={styles.productHeadline}
                data-testid="w3c-recommendation-headline"
              >
                {postEvidence.recommendation.headline}
              </p>
              <p className={styles.blockBody} data-testid="w3c-recommendation-rationale">
                {scrubPiloteRecommendationProse(
                  formatNoraAssistantDisplayText(
                    postEvidence.recommendation.rationale,
                  ),
                )}
              </p>
              <p className={styles.blockBody} data-testid="w3c-next-step">
                <strong>{W4C_NEXT_ACTION_LEAD} :</strong>{" "}
                {postEvidence.recommendation.nextStep}
              </p>
              <p className={styles.blockBody} data-testid="w3c-nora-analysis">
                {postEvidence.analysisText ??
                  postEvidence.analysisUnavailableReason ??
                  "Analyse indisponible"}
              </p>
              <dl className={styles.facts}>
                <div>
                  <dt>Orientation</dt>
                  <dd data-testid="w3c-recommendation-kind">
                    {postEvidence.recommendation.kind}
                  </dd>
                </div>
                <div>
                  <dt>Décision humaine</dt>
                  <dd data-testid="w3c-requires-human-decision">
                    {postEvidence.recommendation.requiresHumanDecision
                      ? "oui"
                      : "non"}
                  </dd>
                </div>
              </dl>
              <details className={styles.technicalDetails}>
                <summary>Détail de recommandation (secondaire)</summary>
                <dl className={styles.facts}>
                  <div>
                    <dt>Authority</dt>
                    <dd data-testid="w3c-recommendation-authority">
                      none — Recommendation ≠ HumanDecision
                    </dd>
                  </div>
                  <div>
                    <dt>LPS version</dt>
                    <dd data-testid="w3c-lps-version">
                      {postEvidence.lpsVersion ?? "—"}
                    </dd>
                  </div>
                </dl>
              </details>
              {postEvidence.recommendation.kind === "recover" ||
              postEvidence.recommendation.kind === "replan" ||
              postEvidence.recommendation.requiresHumanDecision ? (
                <button
                  type="button"
                  className={styles.secondaryAction}
                  data-testid="w3c-propose-trajectory"
                  onClick={() => void proposeOptions()}
                  disabled={busy !== null || continuityMutationBlocked}
                >
                  Proposer des options de trajectoire
                </button>
              ) : null}
            </section>
          ) : null}
          <details className={styles.technicalDetails}>
            <summary data-testid="w3b-technical-details-toggle">
              Détail technique (secondaire)
            </summary>
            <dl className={styles.facts}>
              <div>
                <dt>Evidence ID</dt>
                <dd className={styles.code} data-testid="w3b-evidence-id">
                  {productOutcome.evidenceId ?? "—"}
                </dd>
              </div>
              <div>
                <dt>ReviewBundle ID</dt>
                <dd className={styles.code} data-testid="w3b-review-bundle-id">
                  {productOutcome.reviewBundleId ?? "—"}
                </dd>
              </div>
              <div>
                <dt>Claim autorisé</dt>
                <dd data-testid="w3b-claim-allowed">
                  {productOutcome.claimAllowed ? "oui" : "non"}
                </dd>
              </div>
              <div>
                <dt>Apprentissage / replan</dt>
                <dd data-testid="w3b-nora-replan">
                  {`analyse: ${
                    postEvidence && postEvidence.ok && postEvidence.noraInvoked
                      ? "oui"
                      : "non"
                  } · replan auto: non`}
                </dd>
              </div>
              <div>
                <dt>Cycle auto-fermé</dt>
                <dd data-testid="w3b-cycle-closed">non</dd>
              </div>
              <div>
                <dt>READY</dt>
                <dd data-testid="w3b-ready">non</dd>
              </div>
              <div>
                <dt>Attempt</dt>
                <dd
                  className={styles.code}
                  data-testid="w3b-technical-attempt-id"
                >
                  {productOutcome.technicalDetail.attemptId}
                </dd>
              </div>
              <div>
                <dt>Statut technique</dt>
                <dd data-testid="w3b-technical-status">
                  {productOutcome.technicalDetail.attemptStatus}
                </dd>
              </div>
              <div>
                <dt>resultRef</dt>
                <dd className={styles.code} data-testid="w3b-technical-result-ref">
                  {productOutcome.technicalDetail.resultRef ?? "—"}
                </dd>
              </div>
              <div>
                <dt>errorRef / stopReason</dt>
                <dd
                  className={styles.code}
                  data-testid="w3b-technical-error-or-stop"
                >
                  {productOutcome.technicalDetail.errorRef ??
                    productOutcome.technicalDetail.stopReason ??
                    "—"}
                </dd>
              </div>
            </dl>
          </details>
          {(() => {
            const visibleReservations = filterProductReservationsForDisplay(
              productOutcome.reservations,
              Boolean(postEvidence && postEvidence.ok),
            );
            if (visibleReservations.length === 0) return null;
            return (
              <ul data-testid="w3b-reservations" className={styles.blockNote}>
                {visibleReservations.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            );
          })()}
          <button
            type="button"
            className={styles.secondaryAction}
            data-testid="w3b-rehydrate-product"
            onClick={() => void rehydrateProduct()}
            disabled={busy !== null || !attempt?.attemptId}
          >
            Recharger résultat produit (durable)
          </button>
        </section>
      ) : null}
    </section>
  );
}
