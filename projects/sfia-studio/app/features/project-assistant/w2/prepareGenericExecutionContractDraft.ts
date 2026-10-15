/**
 * G-D4 / T-A4 / Authority Continuity — generic ExecutionContract PREPARE
 * without systematic HumanDecision.
 *
 * When a mission is sufficiently qualified and server-owned Product materiality
 * is non-structural, Studio may Build + Validate a generalist contract with
 * decisionRefs=[] for Pilote inspection. PREPARE ≠ EXECUTE: no Attempt.
 *
 * Confirm/Authorize remain separate Pilote acts. Empty decisionRefs at
 * confirmed require MATERIALITY:NON_STRUCTURAL stamp + CURRENT revalidation
 * (T-A4 schema G-D4). Structural missions still require a real HD ref.
 *
 * Reuses BuildExecutionContract + ValidateExecutionContract + generalist surface
 * + resolveTrustedProductLaunchContext + resolveContractSourceGroundingForPrepare.
 * No task catalog, no parallel engine, no synthetic HumanDecision.
 */

import { createHash, randomBytes } from "node:crypto";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalAuthorityForExecutionClass,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  CONTRACT_SOURCE_GROUNDING_INPUT_KEY,
  assertContractSourceGroundingHonest,
  assessExecutionMaterialityOrUnknown,
  isCurrentFullRepositoryRead,
  type ExecutionMaterialityAssessment,
} from "@/lib/oa/execution-contract";
import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
import {
  PRODUCT_CANONICAL_EXECUTION_ACTION,
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
  PRODUCT_CANONICAL_EXECUTION_SCOPE,
  PRODUCT_CANONICAL_EXECUTION_TARGET,
} from "./w3aProductExecutionSemantics";
import type { IntentAnalysisDto, PilotDecisionCandidate } from "../f2/types";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { resolveAuthoritativeProductMateriality } from "./resolveAuthoritativeProductMateriality";
import {
  resolveContractSourceGroundingForPrepare,
  type ContractSourceGroundingReader,
} from "./resolveContractSourceGrounding";
import {
  launchContextAsContractInputs,
  resolveTrustedProductLaunchContext,
} from "./resolveTrustedProductLaunchContext";
import {
  getPendingGenericPrepareOffer,
  rememberPendingGenericPrepareOffer,
  clearPendingGenericPrepareOffer,
  resolvePrepareOfferSessionKey,
  type PendingGenericPrepareMissionEffects,
  type PendingGenericPrepareOffer,
} from "./pendingGenericPrepareOfferStore";
import {
  validateExecutionIntentPayload,
  type ExecutionIntentPayload,
} from "../f2/executionIntentSchema";
import {
  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
  isCapabilityWithinGenericPrepareEnvelope,
  resolveGenericPrepareCapabilityEnvelope,
  type GenericPrepareCapabilityResolution,
} from "./genericPrepareCapabilityEnvelope";

export {
  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
  isCapabilityWithinGenericPrepareEnvelope,
  resolveGenericPrepareCapabilityEnvelope,
};
export type { GenericPrepareCapabilityResolution };

export type GenericMissionPrepareReadiness = {
  readonly ready: boolean;
  readonly structuralBlocked: boolean;
  /** Blocking gaps only — never a questionnaire. */
  readonly missingFields: readonly string[];
};

/**
 * Explicit Pilote prepare-contract lexical intent (FR natural language).
 * Actionable work alone MUST NOT systematically PREPARE an EC (Q16 / Q20).
 */
export function hasExplicitPrepareContractIntent(text: string): boolean {
  const t = text.trim().toLowerCase();
  if (!t) return false;
  if (
    /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
      t,
    )
  ) {
    return true;
  }
  if (
    /\b(contrat d['']exécution|execution contract)\b[\s\S]{0,40}\b(prépare|prepare|préparer)\b/.test(
      t,
    )
  ) {
    return true;
  }
  if (
    /\b(ok|oui|vas[- ]y|go)\b[\s\S]{0,30}\b(prépare|prepare)\b[\s\S]{0,40}\b(contrat|mission)\b/.test(
      t,
    )
  ) {
    return true;
  }
  return false;
}

/**
 * Lexical / structured accept of a CURRENT prepare recommendation only.
 * Never an execution GO. Never authoritative alone — requires pending offer.
 */
export function isChatFirstPrepareAcceptGo(input: {
  readonly text: string;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
}): boolean {
  const candidate = input.pilotDecisionCandidate ?? null;
  if (
    candidate?.disposition === "accept" &&
    (candidate.targetKind === "current_recommendation" ||
      candidate.targetKind === "presented_subject")
  ) {
    return true;
  }
  const t = input.text.trim().toLowerCase();
  if (!t) return false;
  // Short acceptives — only meaningful when a CURRENT prepare offer exists.
  if (
    /^(ok|oui|vas[- ]y|vasy|go|d['']accord|ok vas[- ]y|ok,?\s*vas[- ]y)[\s.!]*$/i.test(
      t,
    )
  ) {
    return true;
  }
  if (
    /\b(ok|oui|vas[- ]y|go|d['']accord)\b[\s\S]{0,40}\b(pr[ée]pare|cursor|contrat|mission)\b/.test(
      t,
    )
  ) {
    return true;
  }
  return false;
}

/**
 * Server-side: bind Pilot GO to a unique CURRENT prepare offer.
 * Ambiguous concurrent governed subjects → clarification (caller checks).
 * No offer / historical only → no invented prepare.
 */
export function resolveChatFirstGenericPrepareGo(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly text: string;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
}):
  | { readonly kind: "prepare"; readonly offerFingerprint: string }
  | { readonly kind: "explicit_lexical_prepare" }
  | { readonly kind: "no_go"; readonly reason: string } {
  if (hasExplicitPrepareContractIntent(input.text)) {
    return { kind: "explicit_lexical_prepare" };
  }
  if (
    !isChatFirstPrepareAcceptGo({
      text: input.text,
      pilotDecisionCandidate: input.pilotDecisionCandidate,
    })
  ) {
    return { kind: "no_go", reason: "no_prepare_accept_signal" };
  }
  const sessionKey = resolvePrepareOfferSessionKey({
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  const offer = getPendingGenericPrepareOffer(input.projectId, sessionKey);
  if (!offer) {
    return { kind: "no_go", reason: "no_current_prepare_offer" };
  }
  if (offer.sessionKey !== sessionKey) {
    return { kind: "no_go", reason: "prepare_offer_session_mismatch" };
  }
  if (offer.cycleInstanceId !== input.cycleInstanceId) {
    return { kind: "no_go", reason: "prepare_offer_cycle_mismatch" };
  }
  return { kind: "prepare", offerFingerprint: offer.offerFingerprint };
}

export function assessGenericMissionPrepareReadiness(
  analysis: IntentAnalysisDto,
): GenericMissionPrepareReadiness {
  const signals = analysis.signals;
  const structuralBlocked = Boolean(
    signals?.structuralChange ||
      signals?.securityImpact ||
      signals?.architectureImpact ||
      signals?.dataImpact ||
      signals?.irreversible ||
      analysis.contradictionCandidate?.conflictPresent,
  );

  const objective = (analysis.objective ?? analysis.rephrasedRequest ?? "").trim();
  const expectedOutcome = (analysis.expectedOutcome ?? "").trim();
  const scope = (analysis.scope ?? "").trim();
  const missingFields: string[] = [];
  if (!objective) missingFields.push("objectif");
  if (!expectedOutcome && !scope) {
    missingFields.push("résultat attendu ou périmètre");
  }

  return {
    ready: !structuralBlocked && missingFields.length === 0,
    structuralBlocked,
    missingFields,
  };
}

function collectProtectedPathHits(analysis: IntentAnalysisDto): string[] {
  const candidates = [
    ...(analysis.executionIntent?.scopeIn ?? []),
    ...(analysis.scope ? [analysis.scope] : []),
  ];
  const hits: string[] = [];
  for (const raw of candidates) {
    const path = raw.trim();
    if (!path || path.includes(" ")) continue;
    const hit = classifyStudioProductProtectedPath(path);
    if (hit) hits.push(path);
  }
  return hits;
}

function missionImpliesRepositoryWork(analysis: IntentAnalysisDto): boolean {
  const scopeIn = analysis.executionIntent?.scopeIn ?? [];
  if (scopeIn.some((p) => typeof p === "string" && p.trim().length > 0)) {
    return true;
  }
  const scope = (analysis.scope ?? "").trim();
  if (scope && !scope.includes(" ") && scope.includes("/")) return true;
  if (scope && /\.(ts|tsx|js|md|json|py|go|rs)\b/i.test(scope)) return true;
  return false;
}

/**
 * @deprecated Prefer resolveAuthoritativeProductMateriality — sync helper kept
 * for unit oracles that only have analysis (forces UNKNOWN without Product).
 */
export function assessMaterialityForGenericPrepare(
  analysis: IntentAnalysisDto,
): ExecutionMaterialityAssessment {
  // Without live Product context, never claim NON_STRUCTURAL (Q02).
  const protectedPathHits = collectProtectedPathHits(analysis);
  return assessExecutionMaterialityOrUnknown({
    productContextSufficient: false,
    facts: {
      modelSignals: analysis.signals
        ? {
            structuralChange: analysis.signals.structuralChange,
            securityImpact: analysis.signals.securityImpact,
            architectureImpact: analysis.signals.architectureImpact,
            dataImpact: analysis.signals.dataImpact,
            irreversible: analysis.signals.irreversible,
          }
        : null,
      contradictionConflictPresent: Boolean(
        analysis.contradictionCandidate?.conflictPresent,
      ),
      protectedPathHits,
      currentContradictionUnresolved: Boolean(
        analysis.contradictionCandidate?.conflictPresent,
      ),
    },
  });
}

export type PrepareGenericExecutionContractDraftInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  readonly analysis: IntentAnalysisDto;
  /** When true, bypass local authority env gate (DET tests). */
  readonly forceLocalAuthority?: boolean;
  /**
   * When true, Validate after Build (Product inspectable path).
   * Default true for G-D4 continuity. Tests may set false to assert draft-only.
   */
  readonly validateAfterBuild?: boolean;
  /** DET only — explicit server pin; never inferred from VITEST. */
  readonly pinnedBaseHeadSha?: string | null;
  readonly managedRepoRootBase?: string | null;
  readonly sourceGroundingReader?: ContractSourceGroundingReader | null;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
};

export type PrepareGenericExecutionContractDraftResult =
  | {
      readonly ok: true;
      readonly contract: ExecutionContract;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
      readonly materiality: ExecutionMaterialityAssessment;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

function stableMissionKey(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scope: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: string;
}): string {
  const raw = [
    input.projectId,
    input.cycleInstanceId ?? "",
    input.objective,
    input.expectedOutcome,
    input.scope,
    input.scopeIn.join("|"),
    input.scopeOut.join("|"),
    input.materiality,
  ].join("\n");
  return createHash("sha256").update(raw).digest("hex").slice(0, 24);
}

export function extractMissionEffectsFromAnalysis(
  analysis: IntentAnalysisDto,
): PendingGenericPrepareMissionEffects {
  const rawEi = analysis.executionIntent ?? null;
  const validated = rawEi ? validateExecutionIntentPayload(rawEi) : null;
  const ei: ExecutionIntentPayload | null =
    validated && validated.ok ? validated.payload : null;
  const rev = ei?.reversibilityExpectation ?? null;
  return {
    intentKind: ei?.intentKind?.trim() || null,
    artifactType: ei?.artifactType?.trim() || null,
    proposedTargetPath: ei?.targetPath?.trim() || null,
    proposedArtifactFileName: ei?.artifactFileName?.trim() || null,
    proposedTargetRepositoryRef: ei?.targetRepositoryRef?.trim() || null,
    artifactBrief: ei?.artifactBrief?.trim() || null,
    contentRequirements: [...(ei?.contentRequirements ?? [])],
    expectedOutputs: [...(ei?.expectedOutputs ?? [])],
    proposedRequiredCapabilities: [...(ei?.requiredCapabilities ?? [])],
    validationExpectations: [...(ei?.validationExpectations ?? [])],
    evidenceRequirements: [...(ei?.evidenceRequirements ?? [])],
    requestedOperation:
      ei?.requestedOperation?.trim() ||
      analysis.requestedOperation?.trim() ||
      null,
    reversibilityExpectation:
      rev === "reversible" || rev === "irreversible" || rev === "unknown"
        ? rev
        : null,
    exitRequirementKinds: [...(ei?.exitRequirementKinds ?? [])],
  };
}

function offerFingerprintFor(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scope: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly missionEffects: PendingGenericPrepareMissionEffects;
}): string {
  const e = input.missionEffects;
  return createHash("sha256")
    .update(
      [
        input.projectId,
        input.cycleInstanceId,
        input.objective,
        input.expectedOutcome,
        input.scope,
        input.scopeIn.join("|"),
        input.scopeOut.join("|"),
        e.intentKind ?? "",
        e.artifactType ?? "",
        e.proposedTargetPath ?? "",
        e.proposedArtifactFileName ?? "",
        e.proposedRequiredCapabilities.join("|"),
        e.expectedOutputs.join("|"),
        e.requestedOperation ?? "",
        e.artifactBrief ?? "",
        e.contentRequirements.join("|"),
      ].join("\n"),
    )
    .digest("hex")
    .slice(0, 24);
}

/** Remember CURRENT prepare recommendation (Nora offered; Pilot has not GO'd). */
export function rememberGenericPrepareRecommendation(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly analysis: IntentAnalysisDto;
  readonly offeredAtIso: string;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
}): string {
  const sessionKey = resolvePrepareOfferSessionKey({
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  const objective = (
    input.analysis.objective ??
    input.analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
  const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
  const scopeOut = input.analysis.executionIntent?.scopeOut ?? [];
  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
  const fp = offerFingerprintFor({
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    objective,
    expectedOutcome,
    scope: scopeNarrative,
    scopeIn,
    scopeOut,
    missionEffects,
  });
  rememberPendingGenericPrepareOffer({
    projectId: input.projectId,
    sessionKey,
    cycleInstanceId: input.cycleInstanceId,
    missionKey: fp,
    objective,
    expectedOutcome,
    scopeNarrative,
    scopeIn,
    scopeOut,
    outOfScope: input.analysis.outOfScope ?? [],
    stopConditions: input.analysis.stopConditions ?? [],
    risks: input.analysis.risks ?? [],
    reservations: input.analysis.reservations ?? [],
    signalStructuralChange: input.analysis.signals?.structuralChange === true,
    signalSecurityImpact: input.analysis.signals?.securityImpact === true,
    signalArchitectureImpact:
      input.analysis.signals?.architectureImpact === true,
    signalDataImpact: input.analysis.signals?.dataImpact === true,
    signalIrreversible: input.analysis.signals?.irreversible === true,
    contradictionConflictPresent: Boolean(
      input.analysis.contradictionCandidate?.conflictPresent,
    ),
    offeredAtIso: input.offeredAtIso,
    offerFingerprint: fp,
    missionEffects,
  });
  return fp;
}

/** Rebuild IntentAnalysis for PREPARE from the CURRENT pending offer (accept GO). */
export function analysisFromPendingGenericPrepareOffer(
  offer: PendingGenericPrepareOffer,
): IntentAnalysisDto {
  const effects = offer.missionEffects;
  const intentKind = effects?.intentKind?.trim() || "other";
  const executionIntent: NonNullable<IntentAnalysisDto["executionIntent"]> = {
    intentKind,
    artifactType: effects?.artifactType ?? null,
    // Candidate only — Product pathRoot / workspace still authoritative at PREPARE.
    targetPath: effects?.proposedTargetPath ?? null,
    artifactFileName: effects?.proposedArtifactFileName ?? null,
    targetRepositoryRef: effects?.proposedTargetRepositoryRef ?? null,
    scopeIn: [...offer.scopeIn],
    scopeOut: [...offer.scopeOut],
    expectedOutputs: [...(effects?.expectedOutputs ?? [])],
    requiredCapabilities: [...(effects?.proposedRequiredCapabilities ?? [])],
    validationExpectations: [...(effects?.validationExpectations ?? [])],
    evidenceRequirements: [...(effects?.evidenceRequirements ?? [])],
    requestedOperation: effects?.requestedOperation ?? null,
    reversibilityExpectation: effects?.reversibilityExpectation ?? null,
    artifactBrief: effects?.artifactBrief ?? null,
    contentRequirements: [...(effects?.contentRequirements ?? [])],
    exitRequirementKinds: [...(effects?.exitRequirementKinds ?? [])],
  };
  return {
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: null,
    signals: {
      structuralChange: offer.signalStructuralChange,
      securityImpact: offer.signalSecurityImpact,
      architectureImpact: offer.signalArchitectureImpact,
      dataImpact: offer.signalDataImpact,
      irreversible: offer.signalIrreversible,
      lowRiskBounded: !offer.signalStructuralChange,
    },
    cognitiveWorkload: null,
    contradictionCandidate: offer.contradictionConflictPresent
      ? { conflictPresent: true, claimedEvidenceIds: [] }
      : null,
    challengeResponseAssessment: "sufficient",
    objective: offer.objective,
    scope: offer.scopeNarrative,
    rephrasedRequest: offer.objective,
    outOfScope: [...offer.outOfScope],
    risks: [...offer.risks],
    reservations: [...offer.reservations],
    stopConditions: [...offer.stopConditions],
    activatedBlocks: [],
    expectedOutcome: offer.expectedOutcome,
    criticalJustification: null,
    requestedOperation: effects?.requestedOperation ?? null,
    executionIntent,
  };
}

export function getCurrentGenericPrepareOffer(
  projectId: string,
  sessionKeyOrOpts?:
    | string
    | { readonly sessionKey?: string | null; readonly sessionDbPath?: string | null },
): PendingGenericPrepareOffer | null {
  const sessionKey =
    typeof sessionKeyOrOpts === "string"
      ? sessionKeyOrOpts
      : resolvePrepareOfferSessionKey({
          sessionKey: sessionKeyOrOpts?.sessionKey,
          sessionDbPath: sessionKeyOrOpts?.sessionDbPath,
        });
  return getPendingGenericPrepareOffer(projectId, sessionKey);
}

/**
 * Build (+ optional Validate) an inspectable generalist ExecutionContract.
 * Empty decisionRefs when non-structural. Never records HumanDecision.
 */
export async function prepareGenericExecutionContractDraft(
  input: PrepareGenericExecutionContractDraftInput,
): Promise<PrepareGenericExecutionContractDraftResult> {
  const readiness = assessGenericMissionPrepareReadiness(input.analysis);
  if (readiness.structuralBlocked) {
    return {
      ok: false,
      code: "STRUCTURAL_HUMAN_DECISION_REQUIRED",
      message:
        "Cette mission engage une vérité structurelle — une HumanDecision Pilote reste requise avant préparation.",
    };
  }
  if (!readiness.ready) {
    return {
      ok: false,
      code: "MISSION_INSUFFICIENTLY_QUALIFIED",
      message: `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
    };
  }

  const proposedCapabilities =
    input.analysis.executionIntent?.requiredCapabilities ?? [];
  const capabilityResolution =
    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
  if (!capabilityResolution.ok) {
    return {
      ok: false,
      code: capabilityResolution.code,
      message: `Capacités hors enveloppe généraliste Product — clarification ou gate requis : ${capabilityResolution.elevated.join(", ")}. Aucune HumanDecision artificielle ; aucune élévation silencieuse.`,
    };
  }

  const materialityResolution = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis: input.analysis,
    cycleInstanceId: input.cycleInstanceId,
  });
  const materiality = materialityResolution.assessment;
  if (materiality.humanDecisionRequired) {
    return {
      ok: false,
      code:
        materiality.materiality === "unknown"
          ? "MATERIALITY_UNKNOWN"
          : "STRUCTURAL_HUMAN_DECISION_REQUIRED",
      message:
        materiality.materiality === "unknown"
          ? "Matérialité indéterminée — contexte Product insuffisant ou contradiction ; HumanDecision / clarification requise."
          : "Matérialité server-owned structurelle — HumanDecision requise avant préparation sans refs.",
    };
  }

  const services = input.oa.executionContractServices;
  if (!services?.buildExecutionContract) {
    return {
      ok: false,
      code: "EXECUTION_CONTRACT_SERVICES_UNAVAILABLE",
      message: "Services ExecutionContract indisponibles.",
    };
  }

  const objective = (
    input.analysis.objective ??
    input.analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
  const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
  const outOfScope = input.analysis.outOfScope ?? [];
  const cycleInstanceId = input.cycleInstanceId?.trim() || undefined;
  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
  // D-PC-09 / Pass 02 regularization — Nora path/filename/expectedOutputs are
  // candidates only until Product resolves an authoritative destination.
  // Generic PREPARE does not yet compose a server-owned documentary targetPath,
  // so contract.expectedOutputs must NOT list unresolved candidates as if they
  // were authorized destinations. Keep a readable documentary outcome instead.
  const proposedDocumentaryOutputCandidates = [
    ...missionEffects.expectedOutputs,
    ...(missionEffects.proposedTargetPath
      ? [missionEffects.proposedTargetPath]
      : []),
    ...(missionEffects.proposedArtifactFileName
      ? [missionEffects.proposedArtifactFileName]
      : []),
  ].filter((v, i, arr) => v.trim().length > 0 && arr.indexOf(v) === i);
  const documentaryTargetResolution:
    | "unresolved_nora_candidate"
    | "not_applicable" =
    missionEffects.intentKind === "docs_write" ||
    proposedDocumentaryOutputCandidates.length > 0
      ? "unresolved_nora_candidate"
      : "not_applicable";
  // Contract expectedOutputs = inspectable requested outcome, never unresolved path authority.
  const contractExpectedOutputs = [expectedOutcome];

  // D — source grounding / trusted launch when mission implies repository work.
  const impliesGit = missionImpliesRepositoryWork(input.analysis);
  let launchInputs: Record<string, unknown> = {};
  let sourcesToRead: string[] = [];
  let sourceGroundingPayload: unknown = null;

  if (impliesGit) {
    const launch = await resolveTrustedProductLaunchContext({
      oa: input.oa,
      projectId: input.projectId,
      pinnedBaseHeadSha: input.pinnedBaseHeadSha,
      managedRepoRootBase: input.managedRepoRootBase,
    });
    if (!launch.ok) {
      return {
        ok: false,
        code: launch.code,
        message: launch.message,
      };
    }
    launchInputs = {
      ...launchContextAsContractInputs(launch.context),
      trustedLaunchContextPinnedAtPrepare: true,
    };
    // Declared READ sources only — mutation scopeIn is NOT a read claim
    // (search ≠ read). Empty declared → honesty NOT_APPLICABLE when no reader.
    const declaredReadSources: string[] = [];
    const sourceGrounding = await resolveContractSourceGroundingForPrepare({
      projectId: input.projectId,
      cycleInstanceId: cycleInstanceId ?? "",
      declaredSources: declaredReadSources,
      repositoryIdentity: launch.context.repositoryBindingIdentity,
      repositoryHeadSha: launch.context.baseHeadSha,
      reader: input.sourceGroundingReader ?? null,
    });
    const groundingHonest = assertContractSourceGroundingHonest(sourceGrounding);
    if (!groundingHonest.ok) {
      return {
        ok: false,
        code: groundingHonest.code,
        message: groundingHonest.message,
      };
    }
    sourceGroundingPayload = sourceGrounding;
    const groundedSourceRefs = sourceGrounding.readRefs
      .filter((ref) =>
        isCurrentFullRepositoryRead({
          ref,
          expectedRepositoryHeadSha: sourceGrounding.repositoryHeadSha,
          expectedCycleInstanceId: sourceGrounding.cycleInstanceId,
        }),
      )
      .map((ref) => ref.pathOrRef);
    sourcesToRead = [...new Set(groundedSourceRefs)];
    // Concrete inspectable WHERE: scopeIn and/or narrative scope required.
    const concreteScope =
      scopeIn.some((p) => typeof p === "string" && p.trim().length > 0) ||
      (scopeNarrative.trim().length > 0 &&
        (scopeNarrative.includes("/") || scopeNarrative.length >= 8));
    if (!concreteScope) {
      return {
        ok: false,
        code: "SOURCE_GROUNDING_INSUFFICIENT",
        message:
          "Mission dépôt sans périmètre concret vérifiable — préparation refusée (STOP honnête).",
      };
    }
  }

  const missionKey = stableMissionKey({
    projectId: input.projectId,
    cycleInstanceId: cycleInstanceId ?? null,
    objective,
    expectedOutcome,
    scope: scopeNarrative,
    scopeIn,
    scopeOut: outOfScope,
    materiality: materiality.materiality,
  });
  const executionContractId = `xct:gen-prep:${missionKey}`;
  const idempotencyKey = `idem:gen-prep:${missionKey}`;
  const correlationId = `cor:gen-prep:${randomBytes(6).toString("hex")}`;

  const stopConditions = [
    ...(input.analysis.stopConditions ?? []).filter((s) => s.trim().length > 0),
    "AUTHORITY_DENIED",
    "CONTEXT_STALE",
    "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
    "PROTECTED_PATH_GATES_REMAIN_APPLICABLE",
  ];
  const stopSeen = new Set<string>();
  const mergedStops = stopConditions.filter((s) => {
    if (stopSeen.has(s)) return false;
    stopSeen.add(s);
    return true;
  });

  const constraints = [
    "PRODUCT_GOVERNED",
    "NO_ATTEMPT_AT_PREPARE",
    "PREPARE_WITHOUT_SYSTEMATIC_HD",
    "CURSOR_DETERMINES_HOW",
    "GENERIC_MISSION_NO_TASK_CATALOG",
    materiality.constraintToken,
    ...outOfScope.map((s) => `OUT_OF_SCOPE:${s}`),
    ...(input.analysis.risks ?? []).map((s) => `RISK:${s}`),
    ...(input.analysis.reservations ?? []).map((s) => `RESERVATION:${s}`),
  ];

  const issuedAt = input.oa.clock.nowIso();
  const requiredAuthority = "N2" as const;
  const authority = registerLocalAuthorityForExecutionClass({
    authorityResolver: input.oa.authorityResolver,
    scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
    issuedAt,
    requiredAuthority,
    evidenceId: `evd:gen-prep:${missionKey}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const materialityFacts = {
    ...materialityResolution.facts,
    assessedMateriality: materiality.materiality,
    reasonCodes: [...materiality.reasonCodes],
  };

  const built = await services.buildExecutionContract.execute({
    executionContractId,
    projectId: input.projectId,
    cycleInstanceId,
    decisionRefs: [],
    action: PRODUCT_CANONICAL_EXECUTION_ACTION,
    target: PRODUCT_CANONICAL_EXECUTION_TARGET,
    scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
    inputs: {
      objective,
      expectedOutcome,
      missionScopeNarrative: scopeNarrative,
      scopeIn,
      scopeOut: outOfScope,
      sourcesToRead,
      cursorDeterminesHow: true,
      prepareWithoutSystematicHumanDecision: true,
      humanDecisionCreated: false,
      executionAttemptCreated: false,
      prepareStatus: "draft_inspectable",
      materialityFacts,
      // Intent fidelity — inspectable mission effects (Pass 02).
      intentKind: missionEffects.intentKind,
      artifactType: missionEffects.artifactType,
      artifactBrief: missionEffects.artifactBrief,
      contentRequirements: [...missionEffects.contentRequirements],
      validationExpectations: [...missionEffects.validationExpectations],
      // D-PC-09 — Nora path/name candidates are NON-AUTHORITATIVE.
      proposedTargetPath: missionEffects.proposedTargetPath,
      proposedArtifactFileName: missionEffects.proposedArtifactFileName,
      proposedDocumentaryOutputCandidates,
      proposedTargetPathAuthoritative: false,
      documentaryTargetResolution,
      // No authoritative resolved path at Generic PREPARE in this surface.
      resolvedAuthoritativeTargetPath: null,
      proposedRequiredCapabilities: [
        ...capabilityResolution.proposedCapabilities,
      ],
      capabilityResolution: capabilityResolution.resolution,
      contractCapabilitySurface: PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
      ...launchInputs,
      ...(sourceGroundingPayload
        ? { [CONTRACT_SOURCE_GROUNDING_INPUT_KEY]: sourceGroundingPayload }
        : {}),
      protectedPathHitsAtPrepare: collectProtectedPathHits(input.analysis),
    },
    expectedOutputs: contractExpectedOutputs,
    requiredCapabilities: [...capabilityResolution.contractCapabilities],
    requiredAuthority,
    constraints,
    stopConditions: mergedStops,
    evidenceRequirements: [
      "evreq:generic-prepare-mission-evidence",
      ...missionEffects.evidenceRequirements,
    ],
    reversibility: "partially_reversible",
    idempotencyKey,
    correlationId,
    status: "draft",
    actor: LOCAL_PILOTE_ACTOR,
    authorityEvidenceId: authority.evidenceId,
  });

  if (!built.ok) {
    return {
      ok: false,
      code: built.error.detailCode,
      message: built.error.message,
    };
  }

  let contract = built.contract;
  const shouldValidate = input.validateAfterBuild !== false;
  if (shouldValidate && services.validateExecutionContract) {
    const validated = await services.validateExecutionContract.execute({
      executionContractId: contract.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
    if (!validated.ok) {
      return {
        ok: false,
        code: validated.error.detailCode,
        message: validated.error.message,
      };
    }
    contract = validated.contract;
  }

  // Prepare consumed the CURRENT offer (if any).
  clearPendingGenericPrepareOffer(
    input.projectId,
    resolvePrepareOfferSessionKey({
      sessionKey: input.sessionKey,
      sessionDbPath: input.sessionDbPath,
    }),
  );

  return {
    ok: true,
    contract,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
    materiality,
  };
}

export function genericMissionClarificationText(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly missingFields: readonly string[];
  readonly structuralBlocked: boolean;
  readonly recommendPrepare?: boolean;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  if (input.structuralBlocked) {
    return [
      head,
      "Le cycle actif est conservé.",
      "Cette demande touche une frontière structurelle — une décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution.",
      "Rien n'a encore été exécuté.",
    ].join(" ");
  }
  if (input.recommendPrepare) {
    return [
      head,
      "Le cycle actif est conservé.",
      "Je recommande de confier cette mission à Cursor.",
      "Je peux préparer le contrat d'exécution générique inspectable.",
      "Si tu es d'accord, dis-le-moi (par ex. « OK, vas-y ») — préparer ≠ autoriser ≠ exécuter.",
      "Rien n'a encore été exécuté.",
    ].join(" ");
  }
  const gaps = input.missingFields.join(", ");
  return [
    head,
    "Le cycle actif est conservé.",
    `Pour préparer le contrat d'exécution, il me manque encore : ${gaps}.`,
    "La préparation reste distincte du lancement. Rien n'a encore été exécuté.",
  ].join(" ");
}

export function genericMissionPreparedText(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly executionContractId: string;
  readonly objective: string;
  readonly status: string;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  return [
    head,
    `J'ai préparé le contrat d'exécution correspondant à : ${input.objective}.`,
    `Contrat inspectable : ${input.executionContractId} (statut ${input.status} — non lancé).`,
    "Tu peux le consulter dans la trajectoire et me demander de l'ajuster avant d'autoriser l'exécution.",
    "Préparer ≠ autoriser ≠ exécuter. Aucune exécution n'a été lancée.",
  ].join(" ");
}
