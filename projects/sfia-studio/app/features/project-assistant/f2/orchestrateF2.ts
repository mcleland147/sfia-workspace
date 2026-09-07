/**
 * F2 pipeline: intent → qualify → durable CycleInstance + LPS → live ContextSnapshot → proposal.
 * Stops before any execution. M2: Cycle/LPS/CKC linkage durable; conversation/proposal process-local.
 */

import { randomBytes, randomUUID } from "node:crypto";
import {
  isFakeConversationProviderForced,
  type ConversationProvider,
} from "@/lib/platform/ai";
import type {
  NoraAgentsUsdAccounting,
  NoraCampaignBudget,
  NoraEvalModelReasoningControl,
} from "@/lib/nora-cognitive-runtime";
import {
  resolveEvalCellConversationProvider,
  type EvalCellProviderFactory,
} from "@/lib/nora-eval/evalCellProvider";
import {
  getRuntimeApplicationService,
  readLiveProjectContext,
  type RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "../types";
import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
import { resolveAssistantMode } from "../resolveAssistantMode";
import { analyzeIntent } from "./intentAnalysis";
import { resolveAvailableContradictionPointers } from "../mw3AvailableEvidence";
import {
  deriveMw3ContradictionAssessment,
  decideCognitiveStrategy,
  decideMw5Disposition,
  deriveMw5FactsFromF2Turn,
  formatMw5AssistantText,
  mergeCognitiveWorkloadSignals,
  toMw5TurnSurface,
  MW5_TEST_MARKERS,
  type Mw3ContradictionAssessmentInput,
  type Mw5TurnSurface,
} from "@/lib/nora-cognitive-runtime";
import { resolveMw5ProductAuthorityFromOa } from "./resolveMw5ProductAuthorityFromOa";
import {
  clearMw5IssuedChallenge,
  getMw5ChallengeSession,
  rememberMw5IssuedChallenge,
} from "./mw5ChallengeSessionStore";
import {
  loadCanonicalConversationForAnalysis,
  persistCanonicalF2AssistantTurn,
} from "./canonicalConversationSession";
import { isPureRepositoryAnalysisIntent } from "./repositoryIntent";
import { resolveTransitionReadiness } from "./transitionReadiness";
import { evaluateMorrisGateRequired } from "./gatePolicy";
import {
  enrichQualificationWithCkcSemantics,
  isProductStudioNativeCkcProof,
  loadProductCkcCognitiveContent,
  buildCkcCognitivePromptSection,
  reasonWithResolvedCkcContext,
} from "./ckcCognitiveContext";
import { composeStudioCognitiveContext } from "./studioCognitiveContext";
import { projectCkcResolutionRef, qualifyWithCkc } from "./qualify";
import { reconcileQualificationSignals } from "./qualificationSignalCoherence";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  F2_PROCESS_LOCAL_NOTICE,
  createProposalId,
  saveProposal,
} from "./proposalStore";
import type {
  F2ContextSnapshot,
  IntentAnalysisDto,
  ProposalDto,
  QualificationDto,
} from "./types";

const EPHEMERAL_NOTICE =
  "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.";

async function deriveProductPathMw3Assessment(
  analysis: IntentAnalysisDto,
  projectId: string,
): Promise<Mw3ContradictionAssessmentInput | null> {
  const candidate = analysis.contradictionCandidate;
  if (!candidate || candidate.conflictPresent !== true) return null;
  const availablePointers = await resolveAvailableContradictionPointers({
    projectId,
    claimedEvidenceIds: candidate.claimedEvidenceIds,
  });
  return deriveMw3ContradictionAssessment({
    candidate,
    availablePointers,
    projectId,
    sourceBreadth: analysis.cognitiveWorkload?.sourceBreadth ?? null,
    trustedSfiaProfile: null,
  });
}

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
    activeCycleInstanceId: result.livingState.activeCycleInstanceId ?? null,
    ckcResolutionRef: result.livingState.ckcResolutionRef ?? null,
  };
}

/**
 * CORR-MW2-REAL-03/04 — deterministic Project summary for analyzeIntent.
 * Prefer Truth C / LPS full context (contextSource=TRUTH_C_LPS).
 * UI contextSummary is a 240-char projection — not the cognitive authority.
 */
export type CognitiveIntentContextInput = {
  name: string;
  objective: string;
  /** Full Truth C / LPS context when available; never invent. */
  context: string;
  constraints: readonly string[];
  criticality: string;
  lpsId: string;
  lpsVersion: number;
  shortReference?: string | null;
  activeCycleInstanceId?: string | null;
  ckcResolutionRef?: string | null;
  /**
   * Internal provenance for evidence/tests — NOT a client DTO field.
   * TRUTH_C_LPS = readLiveProjectContext / lps.context
   * TEST_FALLBACK_UI_SUMMARY = truncated UI projection only (not REAL evidence)
   */
  contextSource: "TRUTH_C_LPS" | "TEST_FALLBACK_UI_SUMMARY";
};

export function buildIntentProjectSummary(
  input: CognitiveIntentContextInput,
): string {
  const constraints =
    input.constraints.length > 0
      ? input.constraints.join("; ")
      : "(none)";
  const parts = [
    `name=${input.name}`,
    `objective=${input.objective}`,
    `context=${input.context}`,
    `constraints=${constraints}`,
    `criticality=${input.criticality}`,
  ];
  if (input.shortReference != null && input.shortReference.trim() !== "") {
    parts.push(`shortReference=${input.shortReference}`);
  }
  parts.push(`lps=${input.lpsId}@${input.lpsVersion}`);
  if (input.activeCycleInstanceId) {
    parts.push(`activeCycle=${input.activeCycleInstanceId}`);
  }
  if (input.ckcResolutionRef) {
    parts.push(`ckcRef=${input.ckcResolutionRef}`);
  }
  parts.push(`contextSource=${input.contextSource}`);
  return parts.join(" | ");
}

/**
 * Resolve analyzeIntent Project summary from Truth C (LPS) when OA is available.
 * Fail-closed for product path: do not silently downgrade to UI 240 summary.
 * Fake/test without OA may use TEST_FALLBACK_UI_SUMMARY only.
 */
export async function resolveCognitiveIntentProjectSummary(
  project: ProjectAssistantContextDto,
): Promise<
  | { ok: true; projectSummary: string; contextSource: CognitiveIntentContextInput["contextSource"]; truthCContext: string }
  | { ok: false; code: string; message: string }
> {
  const runtime = getRuntimeApplicationService();
  const oa = runtime.oa;
  if (!oa) {
    if (isFakeConversationProviderForced()) {
      const projectSummary = buildIntentProjectSummary({
        name: project.name,
        objective: project.objective,
        context: project.contextSummary,
        constraints: project.constraints,
        criticality: project.criticality,
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
        shortReference: project.shortReference,
        activeCycleInstanceId: project.activeCycleInstanceId ?? null,
        ckcResolutionRef: project.ckcResolutionRef ?? null,
        contextSource: "TEST_FALLBACK_UI_SUMMARY",
      });
      return {
        ok: true,
        projectSummary,
        contextSource: "TEST_FALLBACK_UI_SUMMARY",
        truthCContext: project.contextSummary,
      };
    }
    return {
      ok: false,
      code: "TRUTH_C_UNAVAILABLE",
      message:
        "Services OA indisponibles pour le contexte cognitif Truth C. AUCUNE EXÉCUTION.",
    };
  }

  const live = await readLiveProjectContext(oa, project.projectId);
  if (!live.ok) {
    return {
      ok: false,
      code: live.code,
      message: `Contexte Truth C / LPS illisible (${live.code}). AUCUNE EXÉCUTION.`,
    };
  }

  const truthCContext = live.context.context ?? "";
  const projectSummary = buildIntentProjectSummary({
    name: project.name,
    objective: live.context.objective || project.objective,
    context: truthCContext,
    constraints: project.constraints,
    criticality: project.criticality,
    lpsId: live.context.lpsId,
    lpsVersion: live.context.lpsVersion,
    shortReference: project.shortReference,
    activeCycleInstanceId: live.context.activeCycleInstanceId,
    ckcResolutionRef: live.context.ckcResolutionRef,
    contextSource: "TRUTH_C_LPS",
  });
  return {
    ok: true,
    projectSummary,
    contextSource: "TRUTH_C_LPS",
    truthCContext,
  };
}

function doctrinePackagePinFromProject(
  project: ProjectAssistantContextDto,
): DoctrinePackagePin {
  return Object.freeze({
    doctrinePackageId: project.doctrineId,
    version: project.doctrineVersion,
    digest: project.doctrineDigest as DoctrinePackagePin["digest"],
  });
}

function snapshotFrom(project: ProjectAssistantContextDto): F2ContextSnapshot {
  return {
    projectId: project.projectId,
    lpsId: project.lpsId,
    lpsVersion: project.lpsVersion,
    doctrineDigest: project.doctrineDigest,
    activeCycleInstanceId: project.activeCycleInstanceId ?? null,
    ckcResolutionRef: project.ckcResolutionRef ?? null,
  };
}

function resolveF2CriticalChallengeArmed(input: {
  analysis: IntentAnalysisDto;
  content: string;
  historyCount: number;
  projectCriticality: string;
}): boolean {
  if (input.content.includes(MW5_TEST_MARKERS.highAssurance)) return true;
  const merged = mergeCognitiveWorkloadSignals({
    turnContext: {
      projectCriticality: input.projectCriticality,
      userContentLength: input.content.length,
      historyMessageCount: input.historyCount,
    },
    semanticAssessment: input.analysis.cognitiveWorkload,
  });
  return decideCognitiveStrategy({
    signals: merged,
    trustedSfiaProfile: null,
  }).criticalChallengeArmed;
}

async function evaluateF2Mw5(input: {
  content: string;
  history?: AssistantHistoryMessage[];
  analysis: IntentAnalysisDto;
  recommendedProfile: string | null;
  recommendationWouldEmit: boolean;
  projectCriticality: string;
  projectId: string;
  oa: RuntimeOaStack | null | undefined;
}): Promise<{ armed: boolean; surface: Mw5TurnSurface; text: string }> {
  const armed = resolveF2CriticalChallengeArmed({
    analysis: input.analysis,
    content: input.content,
    historyCount: input.history?.length ?? 0,
    projectCriticality: input.projectCriticality,
  });
  const authority = await resolveMw5ProductAuthorityFromOa({
    oa: input.oa,
    projectId: input.projectId,
    claim: {
      objective: input.analysis.objective,
      scope: input.analysis.scope,
      recommendedProfile: input.recommendedProfile,
      requestedOperation: input.analysis.requestedOperation,
    },
    newContradictionSignalPresent: Boolean(
      input.analysis.contradictionCandidate?.conflictPresent,
    ),
  });
  const session = getMw5ChallengeSession(input.projectId);
  const decision = decideMw5Disposition(
    deriveMw5FactsFromF2Turn({
      userContent: input.content,
      history: input.history,
      intentClass: input.analysis.intentClass,
      parseOk: input.analysis.parseOk,
      recommendedProfile: input.recommendedProfile,
      criticalChallengeArmed: armed,
      recommendationWouldEmit: input.recommendationWouldEmit,
      truthCEstablishedForClaim: authority.truthCEstablishedForClaim,
      consumedHumanDecisionWithoutNewContradiction:
        authority.consumedHumanDecisionWithoutNewContradiction,
      challengeResponseAssessment:
        input.analysis.challengeResponseAssessment ?? null,
      openChallengePresent: session.latest != null,
      priorStructuralChallengeCount: session.priorStructuralChallengeCount,
    }),
  );
  const text = formatMw5AssistantText(decision);
  if (decision.disposition === "CHALLENGE") {
    rememberMw5IssuedChallenge({
      projectId: input.projectId,
      challenges: decision.challenges,
      challengeText: text,
    });
  } else if (
    decision.recommendationAllowed &&
    decision.challengeSatisfied &&
    session.latest != null
  ) {
    clearMw5IssuedChallenge(input.projectId);
  }
  return {
    armed,
    surface: toMw5TurnSurface(decision, armed),
    text,
  };
}

function mw5TurnKind(
  surface: Mw5TurnSurface,
): "f2_clarification" | "f2_blocked" {
  return surface.disposition === "CLARIFY" ? "f2_clarification" : "f2_blocked";
}

function resolveMode(explicitProvider?: ConversationProvider): {
  mode: "fixture" | "live" | "unavailable";
  canProceed: boolean;
  message?: string;
  presentation: "test_provider" | "openai_live";
} {
  return resolveAssistantMode(explicitProvider);
}

function buildProposal(input: {
  intent: IntentAnalysisDto;
  qualification: QualificationDto;
  project: ProjectAssistantContextDto;
  morrisGateRequired: boolean;
  executionRequest: boolean;
  status: ProposalDto["status"];
}): ProposalDto {
  return {
    proposalId: createProposalId(),
    status: input.status,
    rephrasedRequest:
      input.intent.rephrasedRequest ??
      input.intent.objective ??
      "Demande reformulée indisponible",
    objective: input.intent.objective ?? input.qualification.rationale,
    cycleTypeId: input.qualification.cycleTypeId,
    recommendedProfile: input.qualification.recommendedProfile,
    rationale: input.qualification.rationale,
    scope: input.intent.scope ?? `Périmètre borné — ${input.qualification.cycleTypeId}`,
    outOfScope:
      input.intent.outOfScope.length > 0
        ? input.intent.outOfScope
        : [
            "Exécution Cursor",
            "Écriture Git/GitHub",
            "Exécution agent (hors F2)",
            "Navigation OPS1 comme destination",
          ],
    activatedBlocks:
      input.intent.activatedBlocks.length > 0
        ? input.intent.activatedBlocks
        : ["qualification", "proposition", "gate"],
    expectedOutcome:
      input.intent.expectedOutcome ??
      "Décision humaine capturée — aucune exécution F2",
    sources: [
      `catalogue:${input.qualification.catalogVersion}`,
      `ckc:${input.qualification.detailedStatus}`,
      `project:${input.project.projectId}`,
      `lps:${input.project.lpsId}@${input.project.lpsVersion}`,
      ...(input.qualification.cycleInstanceId
        ? [`cycle:${input.qualification.cycleInstanceId}`]
        : []),
      ...(input.qualification.ckcResolutionRef
        ? [`ckcRef:${input.qualification.ckcResolutionRef}`]
        : []),
    ],
    risks: input.intent.risks,
    reservations: input.intent.reservations,
    stopConditions:
      input.intent.stopConditions.length > 0
        ? input.intent.stopConditions
        : ["AUCUNE EXÉCUTION", "STOP avant F3"],
    morrisGateRequired: input.morrisGateRequired,
    nextPossibleStep: input.morrisGateRequired
      ? "Décision Morris explicite requise"
      : "AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI",
    contextSnapshot: snapshotFrom(input.project),
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    criticalJustification: input.intent.criticalJustification,
  };
}

function f2Success(base: {
  text: string;
  mode: "fixture" | "live";
  presentation: "test_provider" | "openai_live";
  model: string | null;
  project: ProjectAssistantContextDto;
  intentClass: IntentAnalysisDto["intentClass"];
  qualification?: QualificationDto;
  proposal?: ProposalDto;
  executionBlocked?: boolean;
  mw5?: Mw5TurnSurface | null;
  turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
}): ProjectAssistantSendResult {
  const turnKind =
    base.turnKind ??
    (base.qualification && base.proposal
      ? "f2_proposal"
      : base.mw5?.disposition === "CLARIFY" || base.intentClass === "ambiguous"
        ? "f2_clarification"
        : "f2_blocked");
  return {
    ok: true,
    status: "ok",
    text: base.text,
    mode: base.mode,
    presentation: base.presentation,
    model: base.model,
    toolRounds: 0,
    toolCalls: 0,
    sources: [],
    toolEvents: [],
    project: base.project,
    ephemeralNotice: EPHEMERAL_NOTICE,
    mw5: base.mw5
      ? {
          disposition: base.mw5.disposition,
          structuralChallengeCount: base.mw5.structuralChallengeCount,
          questionnaireSuppressed: base.mw5.questionnaireSuppressed,
          recommendationAllowed: base.mw5.recommendationAllowed,
          challengeGateApplicable: base.mw5.challengeGateApplicable,
          challengeSatisfied: base.mw5.challengeSatisfied,
          challengeEvidenceBeforeRecommendation:
            base.mw5.challengeEvidenceBeforeRecommendation,
          bypassAttempted: base.mw5.bypassAttempted,
          bypassBlocked: base.mw5.bypassBlocked,
          synthesizedHumanDecision: false,
          synthesizedGo: false,
          synthesizedConfirmation: false,
          disclosure: base.mw5.disclosure,
          reasonCodes: [...base.mw5.reasonCodes],
          challenges: [...base.mw5.challenges],
          criticalChallengeArmedHookOnly: base.mw5.criticalChallengeArmedHookOnly,
        }
      : null,
    f2: {
      turnKind,
      intentClass: base.intentClass,
      qualification: base.qualification ?? null,
      proposal: base.proposal ?? null,
      decision: null,
      labels: {
        recommendation:
          base.proposal && base.qualification ? "RECOMMANDATION" : null,
        proposition: base.proposal ? "PROPOSITION" : null,
        decisionRequired: base.proposal?.morrisGateRequired
          ? "DÉCISION REQUISE"
          : null,
        decisionTaken: null,
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: base.executionBlocked === true,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    },
  };
}

/**
 * CORR-PROOF-01 D1 CR-02 — central persist-and-return for F2-owned user-visible
 * responses. F1 Runner paths must NOT call this (Runner already persists).
 */
async function f2ConversationalSuccess(input: {
  userText: string;
  sessionDbPath?: string;
  text: string;
  mode: "fixture" | "live";
  presentation: "test_provider" | "openai_live";
  model: string | null;
  project: ProjectAssistantContextDto;
  intentClass: IntentAnalysisDto["intentClass"];
  qualification?: QualificationDto;
  proposal?: ProposalDto;
  executionBlocked?: boolean;
  mw5?: Mw5TurnSurface | null;
  turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
}): Promise<ProjectAssistantSendResult> {
  await persistCanonicalF2AssistantTurn({
    projectId: input.project.projectId,
    sessionDbPath: input.sessionDbPath,
    userText: input.userText,
    assistantText: input.text,
  });
  return f2Success(input);
}

/**
 * Unified send orchestration: preserves F1 for informative intents.
 * Actionable path creates durable CycleInstance + LPS append, then live snapshot.
 */
export async function orchestrateAssistantSend(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  /**
   * Optional server-side provider injection (eval / tests).
   * Prefer per-instance OpenAIConversationProvider over process.env mutation.
   * For Stage A cells: inject the cell-specific ConversationProvider here.
   */
  provider?: ConversationProvider;
  /** Test override for Product SQLite Session path (MW1/MW4 durability). */
  sessionDbPath?: string;
  /**
   * INTERNAL / EVAL-ONLY — Stage A constitutive model×effort pin.
   * Propagated to analyzeIntent + F1 cognitive path. Never a client DTO field.
   */
  evalModelReasoningControl?: NoraEvalModelReasoningControl;
  /**
   * INTERNAL / EVAL-ONLY — factory(modelId, effort) → ConversationProvider.
   * Required with evalModelReasoningControl for honest structured binding.
   */
  evalCellProviderFactory?: EvalCellProviderFactory;
  /** INTERNAL / EVAL-ONLY — USD authorization envelope (Agents path). */
  usdAccounting?: NoraAgentsUsdAccounting;
  /** INTERNAL / EVAL-ONLY — shared canonical campaign budget lease. */
  campaignBudget?: NoraCampaignBudget;
}): Promise<ProjectAssistantSendResult> {
  const content = input.content.trim();
  if (!content) {
    return {
      ok: false,
      status: "validation_error",
      code: "EMPTY_MESSAGE",
      message: "Saisissez un message avant d'envoyer.",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: true,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }

  let project = toContextDto(projectResult);

  // CORR-01 — resolve eval cell provider BEFORE mode/availability gating.
  // Under eval control, evalCellProviderFactory is the required pin source;
  // global OPENAI_MODEL absence must not fail before the injected cell provider
  // is assessed (and must never be manufactured via process.env mutation).
  const cellProvider = resolveEvalCellConversationProvider({
    evalModelReasoningControl: input.evalModelReasoningControl,
    evalCellProviderFactory: input.evalCellProviderFactory,
    provider: input.provider,
  });
  if (input.evalModelReasoningControl && !cellProvider) {
    return {
      ok: false,
      status: "provider_error",
      code: "EVAL_CELL_PROVIDER_REQUIRED",
      message:
        "evalModelReasoningControl requires evalCellProviderFactory (no arbitrary provider fallback).",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }
  const effectiveProvider = cellProvider ?? input.provider;
  const modeResolution = resolveMode(effectiveProvider);
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  let analysisResult: Awaited<ReturnType<typeof analyzeIntent>>;
  let truthCContextForF1: string | undefined;
  try {
    const cognitive = await resolveCognitiveIntentProjectSummary(project);
    if (!cognitive.ok) {
      return {
        ok: false,
        status: "provider_error",
        code: cognitive.code,
        message: cognitive.message,
        mode: modeResolution.mode,
        retryable: true,
      };
    }
    truthCContextForF1 =
      cognitive.contextSource === "TRUTH_C_LPS"
        ? cognitive.truthCContext
        : undefined;

    // CORR-PROOF-01 D1 CR-03/CR-04 — Memory B replay semantics; EMPTY ≠ UNAVAILABLE.
    const canonicalLoad = await loadCanonicalConversationForAnalysis({
      projectId: project.projectId,
      sessionDbPath: input.sessionDbPath,
      truthCRevision: {
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
      },
    });
    if (canonicalLoad.availability === "unavailable") {
      return {
        ok: false,
        status: "provider_error",
        code: "CANONICAL_SESSION_UNAVAILABLE",
        message:
          canonicalLoad.message ??
          "Continuité conversationnelle indisponible. Aucune invention de contexte. AUCUNE EXÉCUTION.",
        mode: modeResolution.mode,
        retryable: true,
      };
    }
    const canonicalConversationContext = canonicalLoad.contextText;

    const challengeSession = getMw5ChallengeSession(project.projectId);
    const challengeContext =
      challengeSession.latest != null
        ? {
            challengePresent: true as const,
            challenges: challengeSession.latest.challenges,
            challengedPremise: challengeSession.latest.challengeText.slice(
              0,
              500,
            ),
            structuralChallengeCount:
              challengeSession.latest.structuralChallengeCount,
          }
        : { challengePresent: false as const };
    analysisResult = await analyzeIntent({
      userContent: content,
      projectSummary: cognitive.projectSummary,
      canonicalConversationContext,
      challengeContext,
      provider: effectiveProvider,
      evalModelReasoningControl: input.evalModelReasoningControl,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode: modeResolution.mode,
      retryable: true,
    };
  }

  let { analysis, model } = analysisResult;
  if (analysis.signals) {
    analysis = {
      ...analysis,
      signals: reconcileQualificationSignals({
        userContent: content,
        signals: analysis.signals,
      }).signals,
    };
  }
  const presentation = modeResolution.presentation;
  const contradictionAssessment = await deriveProductPathMw3Assessment(
    analysis,
    project.projectId,
  );

  // Repository read/search/Git-truth without mutation → F1 (no Cycle/LPS mutation).
  // Deterministic override when the classifier drifts to ambiguous/actionable for pure reads.
  const forceRepoInformative =
    isPureRepositoryAnalysisIntent(content) &&
    analysis.intentClass !== "execution_request";

  // CORR-PROOF-02 B1 — deterministic transition gate.
  // Safe advisory (incl. ambiguous / parse-fail / incomplete formalization fields) → F1.
  // Governed formalization only when readiness is fully established.
  const transition = resolveTransitionReadiness({
    analysis,
    forceRepoInformative,
  });

  if (!transition.formalizationReady) {
    // CORR-PROOF-04 — Hybrid Context Envelope (composer-first).
    // Pure read-only composition; NO reasonWithResolvedCkcContext; NO third model call.
    const registryRoot = resolveProductDoctrineRegistryRoot();
    const oa = getRuntimeApplicationService().oa;
    const studioCognitiveContext = await composeStudioCognitiveContext({
      analysis,
      project,
      registryRoot,
      truthCContext: truthCContextForF1,
      oa,
      activeCycleInstanceId: project.activeCycleInstanceId ?? null,
    });
    // Keep methodContext for CORR-PROOF-03 compatibility surfaces when studio is present
    // (studio supersedes in prompt builder).
    const methodContext = studioCognitiveContext.method;
    const f1 = await orchestrateProjectAssistantTurn({
      ...input,
      provider: effectiveProvider,
      semanticCognitiveWorkload: analysis.cognitiveWorkload,
      truthCContext: truthCContextForF1,
      methodContext,
      studioCognitiveContext,
      contradictionAssessment,
      evalModelReasoningControl: input.evalModelReasoningControl,
      usdAccounting: input.usdAccounting,
      campaignBudget: input.campaignBudget,
    });
    if (!f1.ok) return f1;
    const reportedIntent =
      analysis.parseOk &&
      (analysis.intentClass === "informative" ||
        analysis.intentClass === "ambiguous" ||
        analysis.intentClass === "actionable" ||
        analysis.intentClass === "execution_request")
        ? forceRepoInformative
          ? "informative"
          : analysis.intentClass
        : "ambiguous";
    // B1-CR-01 — trusted execution_request keeps fail-closed authority surface
    // even when formalization is not ready (safe F1 advisory, ZERO effect).
    const executionBlocked =
      analysis.parseOk === true &&
      analysis.intentClass === "execution_request" &&
      !forceRepoInformative;
    return {
      ...f1,
      model: f1.model ?? model,
      ephemeralNotice: EPHEMERAL_NOTICE,
      mw5: null,
      f2: {
        turnKind: "f1_informative",
        intentClass: reportedIntent,
        qualification: null,
        proposal: null,
        decision: null,
        labels: {
          recommendation: null,
          proposition: null,
          decisionRequired: null,
          decisionTaken: null,
          noExecution: "AUCUNE EXÉCUTION",
        },
        executionBlocked,
        processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      },
    };
  }

  // B / D — governed formalization ready (actionable | execution_request + valid fields)
  const cycleTypeId = analysis.candidateCycleTypeId;
  const formalizationSignals = analysis.signals;
  if (!cycleTypeId || !formalizationSignals) {
    // Defensive: readiness predicate already requires these; never invent defaults.
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text:
        "[Clarification requise] Qualification impossible — cycle ou signaux incomplets. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
    });
  }

  const runtime = getRuntimeApplicationService();
  const oa = runtime.oa;
  if (!oa) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text:
        "[Runtime] Services OA indisponibles pour la qualification M2. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
    });
  }

  const preLpsVersion = project.lpsVersion;
  const correlationId = `cor:f2-${randomBytes(8).toString("hex")}`;

  const qualified = await qualifyWithCkc({
    cycleTypeId,
    signals: formalizationSignals,
    objective: analysis.objective ?? undefined,
    scope: analysis.scope ?? undefined,
    correlationId,
    ckcQualification: oa.ckcQualification,
  });

  if (!qualified.ok) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text: `[Qualification échouée] ${qualified.message} AUCUNE EXÉCUTION.`,
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
    });
  }

  let { qualification } = qualified;
  const cognitiveSummary = await resolveCognitiveIntentProjectSummary(project);
  const projectSummary = cognitiveSummary.ok
    ? cognitiveSummary.projectSummary
    : buildIntentProjectSummary({
        name: project.name,
        objective: project.objective,
        context: project.contextSummary,
        constraints: project.constraints,
        criticality: project.criticality,
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
        shortReference: project.shortReference,
        contextSource: "TEST_FALLBACK_UI_SUMMARY",
      });

  if (isProductStudioNativeCkcProof(qualified.raw.proof)) {
    const packagePin = doctrinePackagePinFromProject(project);
    const registryRoot = resolveProductDoctrineRegistryRoot();
    const ckcContent = loadProductCkcCognitiveContent({
      registryRoot,
      cycleTypeId: qualification.cycleTypeId,
      packagePin,
    });
    let ckcCognitiveRecommendation: string | undefined;
    if (ckcContent) {
      const reasoning = await reasonWithResolvedCkcContext({
        userContent: content,
        projectSummary,
        intentSummary:
          analysis.rephrasedRequest ??
          analysis.objective ??
          "Intention actionable",
        ckcPromptSection: buildCkcCognitivePromptSection(ckcContent),
        provider: input.provider,
      });
      ckcCognitiveRecommendation = reasoning.recommendation;
    }
    qualification = enrichQualificationWithCkcSemantics({
      qualification,
      proof: qualified.raw.proof,
      registryRoot,
      packagePin,
      ckcCognitiveRecommendation,
    });
  }

  const ckcResolutionRef =
    qualification.ckcResolutionRef ??
    projectCkcResolutionRef(qualified.raw.proof);

  if (
    qualification.requiresJustificationForCritical &&
    !(analysis.criticalJustification && analysis.criticalJustification.trim())
  ) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text:
        "[Critical] Justification structurante obligatoire avant proposition validable. Critical n'est jamais implicite. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
      qualification,
      executionBlocked: analysis.intentClass === "execution_request",
    });
  }

  const mw5 = await evaluateF2Mw5({
    content,
    history: input.history,
    analysis,
    recommendedProfile: qualification.recommendedProfile,
    recommendationWouldEmit: true,
    projectCriticality: project.criticality,
    projectId: project.projectId,
    oa,
  });
  if (!mw5.surface.recommendationAllowed) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text: mw5.text,
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
      qualification,
      executionBlocked: analysis.intentClass === "execution_request",
      mw5: mw5.surface,
      turnKind: mw5TurnKind(mw5.surface),
    });
  }

  const cycleInstanceId = `cyc:f2-${randomBytes(8).toString("hex")}`;
  const created = await oa.cycleServices.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: qualification.cycleTypeId,
    projectId: project.projectId,
    objective: analysis.objective ?? undefined,
    scope: analysis.scope ?? undefined,
    signals: formalizationSignals,
    justification: analysis.criticalJustification ?? undefined,
    createdBy: {
      actorId: "actor:nora-f2",
      role: "agent",
      displayName: "Nora F2",
      authorityLevel: "N1",
    },
    correlationId,
    linkAsActiveCycle: false,
    expectedLpsVersion: preLpsVersion,
    ckcResolutionRef,
  });

  if (!created.ok) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text: `[Cycle] Création CycleInstance échouée (${created.error.detailCode}). Aucune mutation partielle. AUCUNE EXÉCUTION.`,
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
      qualification,
      executionBlocked: analysis.intentClass === "execution_request",
    });
  }

  // Live context AFTER mutation — pre-mutation snapshot does not satisfy M2.
  const live = await readLiveProjectContext(oa, project.projectId);
  if (!live.ok) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text: `[Contexte] Relecture LPS post-mutation échouée. AUCUNE EXÉCUTION.`,
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
      qualification: {
        ...qualification,
        cycleInstanceId: created.cycle.cycleInstanceId,
        cycleStatus: created.cycle.status,
        ckcResolutionRef,
      },
    });
  }

  const reloaded = await loadProjectRuntimeForAssistant(project.projectId);
  if (reloaded.ok) {
    project = toContextDto(reloaded);
  } else {
    project = {
      ...project,
      lpsId: live.context.lpsId,
      lpsVersion: live.context.lpsVersion,
      doctrineDigest: live.context.doctrineDigest,
      activeCycleInstanceId: live.context.activeCycleInstanceId,
      ckcResolutionRef: live.context.ckcResolutionRef,
    };
  }

  qualification = {
    ...qualification,
    cycleInstanceId: created.cycle.cycleInstanceId,
    cycleStatus: created.cycle.status,
    ckcResolutionRef,
    recommendedProfile: created.cycle.profile,
  };

  const morrisGateRequired =
    evaluateMorrisGateRequired({
      recommendedProfile: qualification.recommendedProfile,
      signals: formalizationSignals,
      intent: analysis,
    }) || mw5.surface.disposition === "ESCALATE";

  const status = morrisGateRequired ? "DECISION_REQUIRED" : "READY_NO_GATE";
  const proposal = saveProposal(
    buildProposal({
      intent: analysis,
      qualification,
      project,
      morrisGateRequired,
      executionRequest: analysis.intentClass === "execution_request",
      status,
    }),
  );

  const executionBlocked = analysis.intentClass === "execution_request";
  const textParts = [
    presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
    "Qualification SFIA et proposition structurée générées.",
    `Cycle: ${qualification.cycleTypeId} (${qualification.cycleLabel}).`,
    `CycleInstance candidate: ${created.cycle.cycleInstanceId} (${created.cycle.status}) — NON ACTIVE — Pilot START requis.`,
    `Profil recommandé: ${qualification.recommendedProfile}.`,
    project.lpsVersion === preLpsVersion
      ? `LPS v${preLpsVersion} inchangé (pas d'activation pre-START).`
      : `LPS v${preLpsVersion} → v${project.lpsVersion}.`,
    qualification.recommendationLabel,
    ...(qualification.ckcCognitiveRecommendation
      ? [qualification.ckcCognitiveRecommendation]
      : []),
    "RECOMMANDATION ≠ décision Pilote — AUCUNE activation authority-bearing avant Pilot START.",
    morrisGateRequired
      ? "DÉCISION REQUISE — gate Morris construction (≠ Pilot lifecycle START)."
      : "NO MORRIS CONSTRUCTION GATE REQUIRED — AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI.",
    executionBlocked
      ? "Demande d'exécution détectée — AUCUNE EXÉCUTION (Cursor/PR/merge indisponibles)."
      : "AUCUNE EXÉCUTION.",
    mw5.surface.disposition === "ESCALATE"
      ? mw5.text
      : mw5.surface.disclosure,
    "Nora n'émet pas de HumanDecision, GO, Confirmation, décision Morris ou acte Pilote.",
  ];

  return f2ConversationalSuccess({
    userText: content,
    sessionDbPath: input.sessionDbPath,
    text: textParts.join(" "),
    mode: modeResolution.mode as "fixture" | "live",
    presentation,
    model,
    project,
    intentClass: analysis.intentClass,
    qualification,
    proposal,
    executionBlocked,
    mw5: mw5.surface,
  });
}
