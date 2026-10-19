/**
 * D-P6-SHE-01 — Single Human Execute orchestration (Product path).
 *
 * Critical correction (C1/C2):
 *   - Inspect/attest the *initial* presented contract before HD.
 *   - HD option = AUTHORIZE_INSPECTED_EXECUTE (not ACCEPT_PREPARE).
 *   - Successor copies predecessor material effects; only decisionRefs /
 *     binding metadata may change. Equivalence is asserted.
 *   - Product currentness revalidated on every Execute (structural included).
 *
 * One explicit Pilote "Exécuter" gesture after inspectable PREPARE:
 *   1. Bind click to inspected contract identity (id + version + fingerprint)
 *   2. Attest presented facts on the initial contract
 *   3. STRUCTURAL empty refs → record HD (authorize-inspected-execute) +
 *      supersede with decisionRefs (effect-preserving), re-inspect successor
 *   4. Confirm (when required) → Authorize
 *   5. STOP before Attempt — caller runs governed reconcile/execute separately
 *
 * Does NOT: invent paths, elevate capability, bypass REAL no-write gate,
 * create Attempt, or launch Cursor.
 * UNKNOWN materiality remains fail-closed at Execute (INV-SHE-UNKNOWN-BLOCKS).
 */

import { createHash, randomBytes } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalAuthorityForExecutionClass,
} from "@/lib/oa/decision";
import {
  materialityFromContractConstraints,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { inspectExecutionContract } from "./inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
import {
  analysisStubFromMaterialityFacts,
  parseStampedProductCurrentness,
  resolveAuthoritativeProductMateriality,
  revalidateMaterialityAgainstCurrentProduct,
} from "./resolveAuthoritativeProductMateriality";
import type { IntentAnalysisDto } from "../f2/types";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
  type AuthenticatedPiloteForMissionDecision,
} from "./recordGenericMissionHumanDecision";
import {
  GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
  GENERIC_MISSION_SHE_EXECUTE_PRESENTED_OPTIONS,
  assertExecutionContractInternalConsistency,
  compareContractMaterialEffectsForSheBinding,
  projectExecutionContractEffects,
} from "./genericMissionSubject";
import type { EvaluateExecutionAuthorizationResult } from "./types";

const SHE_BIND_HD_SUPERSESSION_REASON =
  "she_bind_authorize_inspected_execute_before_confirm" as const;

const SHE_BINDING_INPUT_KEYS = new Set([
  "sheDeferredStructuralAuthority",
  "verifiedGenericMissionHumanDecisionId",
  "missionSubjectId",
  "presentationDigest",
  "sheBoundAtExecute",
  "sheBoundFromExecutionContractId",
  "sheBoundFromVersion",
  "sheBoundFromSemanticFingerprint",
  "sheAuthorizeOptionId",
]);

export type SingleHumanExecutePreparedContractInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  /** Exact version the Pilote saw when clicking Exécuter. */
  readonly expectedVersion: number;
  /** Exact semantic fingerprint of the presented contract version. */
  readonly expectedSemanticFingerprint: string;
  /**
   * Facts disclosed in the inspection exam UI. Execute carries attestation —
   * empty array fails closed (no silent attest).
   */
  readonly presentedFactIds: readonly string[];
  readonly forceLocalAuthority?: boolean;
  readonly authenticatedPilote?: AuthenticatedPiloteForMissionDecision;
};

export type SingleHumanExecutePreparedContractResult =
  | {
      readonly ok: true;
      readonly executionContractId: string;
      readonly contractVersion: number;
      readonly semanticFingerprint: string;
      readonly status: string;
      readonly humanDecisionCreated: boolean;
      readonly humanDecisionId: string | null;
      readonly humanDecisionOptionId: string | null;
      readonly confirmationRef: string | null;
      readonly authorization: EvaluateExecutionAuthorizationResult & {
        readonly ok: true;
      };
      readonly executionAttemptCreated: false;
      readonly supersededFromExecutionContractId: string | null;
      readonly code: "SHE_EXECUTE_AUTHORIZED";
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly executionAttemptCreated: false;
      readonly humanDecisionCreated: boolean;
    };

function fail(
  code: string,
  message: string,
  humanDecisionCreated = false,
): SingleHumanExecutePreparedContractResult {
  return {
    ok: false,
    code,
    message,
    executionAttemptCreated: false,
    humanDecisionCreated,
  };
}

function successorIdFor(priorId: string, decisionId: string): string {
  const digest = createHash("sha256")
    .update(`she-bind-hd:${priorId}:${decisionId}`)
    .digest("hex")
    .slice(0, 16);
  return `xct:she-hd:${digest}`;
}

async function loadContract(
  oa: RuntimeOaStack,
  executionContractId: string,
): Promise<
  | { readonly ok: true; readonly contract: ExecutionContract }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const loaded =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId,
    });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: "Contrat d'exécution introuvable.",
    };
  }
  return { ok: true, contract: loaded.contract };
}

function projectContractOrThrow(contract: ExecutionContract):
  | { readonly ok: true; readonly projection: ReturnType<typeof projectExecutionContractEffects> }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const inputs = (contract.inputs ?? {}) as Record<string, unknown>;
  const internal = assertExecutionContractInternalConsistency({
    constraints: contract.constraints,
    inputs,
  });
  if (!internal.ok) {
    return {
      ok: false,
      code: "SHE_EC_INTERNAL_INCONSISTENT",
      message: `Représentation EC incohérente (${internal.reason}).`,
    };
  }
  return {
    ok: true,
    projection: projectExecutionContractEffects({
      projectId: contract.projectId,
      cycleInstanceId: contract.cycleInstanceId,
      decisionRefs: contract.decisionRefs,
      status: contract.status,
      version: contract.version,
      semanticFingerprint: contract.semanticFingerprint,
      expectedOutputs: contract.expectedOutputs,
      requiredCapabilities: contract.requiredCapabilities,
      stopConditions: contract.stopConditions,
      reversibility: contract.reversibility as
        | "reversible"
        | "partially_reversible"
        | "irreversible",
      constraints: contract.constraints,
      inputs,
    }),
  };
}

/**
 * Record AUTHORIZE_INSPECTED_EXECUTE HD and supersede with effect-preserving
 * successor. Idempotent on successor id.
 */
async function bindStructuralHdViaSupersede(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly contract: ExecutionContract;
  readonly inspectedProjection: ReturnType<
    typeof projectExecutionContractEffects
  >;
  readonly forceLocalAuthority?: boolean;
  readonly authenticatedPilote?: SingleHumanExecutePreparedContractInput["authenticatedPilote"];
}): Promise<
  | {
      readonly ok: true;
      readonly contract: ExecutionContract;
      readonly humanDecisionId: string;
      readonly humanDecisionCreated: boolean;
      readonly humanDecisionOptionId: string;
      readonly supersededFromExecutionContractId: string;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly humanDecisionCreated: boolean;
    }
> {
  const contractInputs = (input.contract.inputs ?? {}) as Record<
    string,
    unknown
  >;
  const factsRaw =
    contractInputs.materialityFacts &&
    typeof contractInputs.materialityFacts === "object"
      ? (contractInputs.materialityFacts as Record<string, unknown>)
      : null;
  const stub = analysisStubFromMaterialityFacts(factsRaw, contractInputs);
  const stampedIntentKind =
    typeof contractInputs.intentKind === "string"
      ? contractInputs.intentKind
      : stub.executionIntent?.intentKind ?? null;
  const scopeIn = Array.isArray(contractInputs.scopeIn)
    ? (contractInputs.scopeIn as string[])
    : stub.executionIntent?.scopeIn ?? [];
  const analysis = {
    ...stub,
    objective:
      typeof contractInputs.objective === "string"
        ? contractInputs.objective
        : stub.objective,
    expectedOutcome:
      typeof contractInputs.expectedOutcome === "string"
        ? contractInputs.expectedOutcome
        : stub.expectedOutcome,
    scope:
      typeof contractInputs.missionScopeNarrative === "string"
        ? contractInputs.missionScopeNarrative
        : stub.scope,
    risks: [...input.inspectedProjection.risks],
    reservations: [...input.inspectedProjection.reservations],
    stopConditions: [...input.inspectedProjection.stopConditions],
    executionIntent: {
      intentKind: stampedIntentKind ?? "other",
      scopeIn,
      requiredCapabilities: Array.isArray(
        contractInputs.proposedRequiredCapabilities,
      )
        ? (contractInputs.proposedRequiredCapabilities as string[])
        : stub.executionIntent?.requiredCapabilities ?? [],
    },
  };

  const proj = input.inspectedProjection;
  if (
    !proj.materiality ||
    (proj.materiality !== "structural" &&
      proj.materiality !== "non_structural" &&
      proj.materiality !== "unknown")
  ) {
    return {
      ok: false,
      code: "SHE_MATERIALITY_UNPROJECTABLE",
      message: "Matérialité contractuelle non projetable pour HD Execute.",
      humanDecisionCreated: false,
    };
  }

  const sheOptionRefs = GENERIC_MISSION_SHE_EXECUTE_PRESENTED_OPTIONS.map(
    (o) => o.optionId,
  );

  // Seal from Product+analysis with SHE optionRefs. Effects must align with the
  // inspected EC (compare after supersede). Do not pass subject field overrides
  // into Record's fresh re-seal (CR-02).
  // Seal effects from the inspected EC projection (C1) — Record re-applies them
  // only for authorize-inspected-execute (CR-02 ACCEPT_PREPARE path stays strict).
  const sheAnalysis = {
    ...analysis,
    objective: proj.objective || analysis.objective,
    expectedOutcome: proj.expectedOutcome || analysis.expectedOutcome,
    scope: proj.scopeNarrative || analysis.scope,
    outOfScope: [...proj.scopeOut],
    risks: [...proj.risks],
    reservations: [...proj.reservations],
    stopConditions: proj.stopConditions.filter(
      (s) => s !== "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
    ),
    executionIntent: {
      intentKind: proj.intentKind ?? "other",
      scopeIn: [...proj.scopeIn],
      artifactType: proj.artifactType ?? undefined,
      requestedOperation: proj.requestedOperation ?? undefined,
      requiredCapabilities: [...proj.requiredCapabilities],
      expectedOutputs: [...proj.expectedOutputs],
      reversibilityExpectation: proj.reversibilityExpectation,
    },
  };
  const sealed = await sealGenericMissionForPresentation({
    oa: input.oa,
    projectId: input.projectId,
    cycleInstanceId: input.contract.cycleInstanceId ?? null,
    analysis: sheAnalysis,
    missionSubjectId:
      typeof contractInputs.missionSubjectId === "string" &&
      contractInputs.missionSubjectId.trim()
        ? contractInputs.missionSubjectId.trim()
        : undefined,
    optionRefs: sheOptionRefs,
    effectsOverride: {
      intentKind: proj.intentKind,
      artifactType: proj.artifactType,
      requestedOperation: proj.requestedOperation,
      requiredCapabilities: [...proj.requiredCapabilities],
      expectedOutputs: [...proj.expectedOutputs],
      reversibilityExpectation: proj.reversibilityExpectation,
      stopConditions: [...proj.stopConditions],
      risks: [...proj.risks],
      reservations: [...proj.reservations],
    },
    objectiveOverride: proj.objective,
    expectedOutcomeOverride: proj.expectedOutcome,
    scopeNarrativeOverride: proj.scopeNarrative,
    scopeInOverride: proj.scopeIn,
    scopeOutOverride: proj.scopeOut,
  });
  if (!sealed.ok) {
    return {
      ok: false,
      code: sealed.code,
      message: sealed.message,
      humanDecisionCreated: false,
    };
  }

  const recorded = await recordGenericMissionHumanDecision({
    oa: input.oa,
    subject: sealed.subject,
    selectedOptionId: GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
    analysis: sheAnalysis,
    forceLocalAuthority: input.forceLocalAuthority === true,
    authenticatedPilote: input.authenticatedPilote,
    rationale: `SHE Execute — autorisation explicite du contrat inspecté ${input.contract.executionContractId} v${input.contract.version} fp=${input.contract.semanticFingerprint}.`,
    presentedPresentationDigest: sealed.subject.presentationDigest,
    // GAP-04 — Record re-projects effects from this OA contract (not subject alone).
    sheInspectedExecutionContract: {
      executionContractId: input.contract.executionContractId,
      expectedVersion: input.contract.version,
      expectedSemanticFingerprint: input.contract.semanticFingerprint ?? "",
    },
  });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.code,
      message: recorded.message,
      humanDecisionCreated: false,
    };
  }

  const decisionId = recorded.decision.decisionId;
  if (
    recorded.decision.selectedOptionId !==
    GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE
  ) {
    return {
      ok: false,
      code: "SHE_HD_OPTION_MISMATCH",
      message:
        "HumanDecision ne correspond pas à authorize-inspected-execute — Exécuter refusé.",
      humanDecisionCreated: recorded.humanDecisionCreated,
    };
  }

  const newId = successorIdFor(input.contract.executionContractId, decisionId);

  const existingSuccessor = await loadContract(input.oa, newId);
  if (existingSuccessor.ok) {
    const eq = compareSuccessorToInspected(
      input.inspectedProjection,
      existingSuccessor.contract,
    );
    if (!eq.ok) {
      return {
        ok: false,
        code: eq.code,
        message: eq.message,
        humanDecisionCreated: recorded.humanDecisionCreated,
      };
    }
    return {
      ok: true,
      contract: existingSuccessor.contract,
      humanDecisionId: decisionId,
      humanDecisionCreated: recorded.humanDecisionCreated,
      humanDecisionOptionId: GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
      supersededFromExecutionContractId: input.contract.executionContractId,
    };
  }

  const issuedAt = input.oa.clock.nowIso();
  const authority = registerLocalAuthorityForExecutionClass({
    authorityResolver: input.oa.authorityResolver,
    scope: input.contract.scope,
    issuedAt,
    requiredAuthority: input.contract.requiredAuthority,
    evidenceId: `evd:she-bind:${decisionId}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
      humanDecisionCreated: recorded.humanDecisionCreated,
    };
  }

  // Effect-preserving supersede: copy predecessor fields; only decisionRefs +
  // binding metadata change. Do NOT rewrite effects from sealed HD.
  // Refresh productCurrentness after HD — Record may bump LPS; successor must
  // stamp the post-HD CURRENT anchors (R1/R2 resume).
  const liveAfterHd = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis,
    cycleInstanceId: input.contract.cycleInstanceId ?? null,
  });
  const refreshedFacts =
    factsRaw && typeof factsRaw === "object"
      ? {
          ...factsRaw,
          ...(liveAfterHd.facts.productCurrentness
            ? { productCurrentness: liveAfterHd.facts.productCurrentness }
            : {}),
        }
      : factsRaw;
  const bindingInputs: Record<string, unknown> = {
    ...contractInputs,
    ...(refreshedFacts ? { materialityFacts: refreshedFacts } : {}),
    sheDeferredStructuralAuthority: false,
    verifiedGenericMissionHumanDecisionId: decisionId,
    missionSubjectId: sealed.subject.missionSubjectId,
    presentationDigest: sealed.subject.presentationDigest,
    sheBoundAtExecute: true,
    sheBoundFromExecutionContractId: input.contract.executionContractId,
    sheBoundFromVersion: input.contract.version,
    sheBoundFromSemanticFingerprint: input.contract.semanticFingerprint,
    sheAuthorizeOptionId: GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
  };

  const superseded =
    await input.oa.executionContractServices.supersedeExecutionContract.execute({
      newExecutionContractId: newId,
      supersedesExecutionContractId: input.contract.executionContractId,
      supersessionReason: SHE_BIND_HD_SUPERSESSION_REASON,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
      expectedVersion: input.contract.version,
      decisionRefs: [decisionId],
      inputs: bindingInputs,
      // Explicitly omit action/target/scope/capabilities/outputs/stops/reversibility
      // so OA copies predecessor material fields.
      idempotencyKey: `idem:she-bind-hd:${newId}`,
      correlationId: `cor:she-bind-hd:${randomBytes(6).toString("hex")}`,
      status: "draft",
    });

  if (!superseded.ok) {
    if (superseded.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
      const raced = await loadContract(input.oa, newId);
      if (raced.ok) {
        const eq = compareSuccessorToInspected(
          input.inspectedProjection,
          raced.contract,
        );
        if (!eq.ok) {
          return {
            ok: false,
            code: eq.code,
            message: eq.message,
            humanDecisionCreated: recorded.humanDecisionCreated,
          };
        }
        return {
          ok: true,
          contract: raced.contract,
          humanDecisionId: decisionId,
          humanDecisionCreated: recorded.humanDecisionCreated,
          humanDecisionOptionId:
            GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
          supersededFromExecutionContractId: input.contract.executionContractId,
        };
      }
    }
    return {
      ok: false,
      code: superseded.error.detailCode,
      message: superseded.error.message,
      humanDecisionCreated: recorded.humanDecisionCreated,
    };
  }

  const eq = compareSuccessorToInspected(
    input.inspectedProjection,
    superseded.contract,
  );
  if (!eq.ok) {
    return {
      ok: false,
      code: eq.code,
      message: eq.message,
      humanDecisionCreated: recorded.humanDecisionCreated,
    };
  }

  const validated =
    await input.oa.executionContractServices.validateExecutionContract.execute({
      executionContractId: superseded.contract.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
  if (!validated.ok) {
    return {
      ok: false,
      code: validated.error.detailCode,
      message: validated.error.message,
      humanDecisionCreated: recorded.humanDecisionCreated,
    };
  }

  const eqAfterValidate = compareSuccessorToInspected(
    input.inspectedProjection,
    validated.contract,
  );
  if (!eqAfterValidate.ok) {
    return {
      ok: false,
      code: eqAfterValidate.code,
      message: eqAfterValidate.message,
      humanDecisionCreated: recorded.humanDecisionCreated,
    };
  }

  return {
    ok: true,
    contract: validated.contract,
    humanDecisionId: decisionId,
    humanDecisionCreated: recorded.humanDecisionCreated,
    humanDecisionOptionId: GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
    supersededFromExecutionContractId: input.contract.executionContractId,
  };
}

function compareSuccessorToInspected(
  inspected: ReturnType<typeof projectExecutionContractEffects>,
  successor: ExecutionContract,
):
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const projected = projectContractOrThrow(successor);
  if (!projected.ok) return projected;
  const eq = compareContractMaterialEffectsForSheBinding({
    inspected,
    successor: projected.projection,
  });
  if (!eq.ok) {
    return {
      ok: false,
      code: "SHE_SUCCESSOR_EFFECTS_DIVERGED",
      message: `Effets du successeur ≠ contrat inspecté (${eq.reason}) — aucune autorisation.`,
    };
  }
  void SHE_BINDING_INPUT_KEYS;
  return { ok: true };
}

/**
 * R2 / C currentness — always before authorize.
 * NON_STRUCTURAL: full revalidateMaterialityAgainstCurrentProduct.
 * STRUCTURAL: LPS / repo / doctrine currentness (HD verify covers EC↔HD after bind).
 * Never skip via decisionRefs length alone.
 */
async function assertSheProductCurrentness(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly analysis: IntentAnalysisDto;
  readonly cycleInstanceId: string | null;
  readonly stampedMateriality: string | null;
  readonly stampedCurrentness: ReturnType<
    typeof parseStampedProductCurrentness
  >;
}): Promise<
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  if (input.stampedMateriality === "non_structural") {
    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
      oa: input.oa,
      projectId: input.projectId,
      analysis: input.analysis,
      cycleInstanceId: input.cycleInstanceId,
      stampedMateriality: input.stampedMateriality,
      stampedCurrentness: input.stampedCurrentness,
    });
    if (!revalidated.ok) {
      return {
        ok: false,
        code: revalidated.code,
        message: revalidated.message,
      };
    }
    return { ok: true };
  }

  // STRUCTURAL / other — live Product currentness without requiring NON_STRUCTURAL
  // requalification (that would refuse structural stamps by design).
  const current = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis: input.analysis,
    cycleInstanceId: input.cycleInstanceId,
  });
  if (!current.liveReadOk || !current.facts.productCurrentness) {
    return {
      ok: false,
      code: "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
      message:
        "Contexte Product courant indisponible — matérialité non requalifiable (fail-closed).",
    };
  }
  const stamped = input.stampedCurrentness;
  if (!stamped) {
    return {
      ok: false,
      code: "MATERIALITY_CURRENTNESS_STALE",
      message:
        "Currentness PREPARE absente du contrat — réinspection requise.",
    };
  }
  const c = current.facts.productCurrentness;
  if (
    stamped.lpsVersion !== c.lpsVersion ||
    stamped.doctrineDigest !== c.doctrineDigest ||
    stamped.activeCycleInstanceId !== c.activeCycleInstanceId ||
    stamped.projectId !== c.projectId
  ) {
    return {
      ok: false,
      code: "MATERIALITY_CURRENTNESS_STALE",
      message:
        "LPS / doctrine / cycle actifs ont changé depuis PREPARE — réinspection requise.",
    };
  }
  const stampedIdentity = stamped.repositoryIdentity?.trim() || null;
  const currentIdentity = c.repositoryIdentity?.trim() || null;
  const stampedRoot = stamped.pathRoot?.trim() || null;
  const currentRoot = c.pathRoot?.trim() || null;
  if (stampedIdentity !== null || stampedRoot !== null) {
    if (stampedIdentity !== null && currentIdentity === null) {
      return {
        ok: false,
        code: "REPOSITORY_BINDING_UNAVAILABLE",
        message:
          "Repository binding Product courant indisponible — autorisation fail-closed.",
      };
    }
    if (stampedIdentity !== currentIdentity) {
      return {
        ok: false,
        code: "REPOSITORY_BINDING_STALE",
        message:
          "Repository identity Product a changé depuis PREPARE — réinspection requise.",
      };
    }
    if (stampedRoot !== currentRoot) {
      return {
        ok: false,
        code: "REPOSITORY_BINDING_STALE",
        message:
          "pathRoot Product a changé depuis PREPARE — réinspection requise.",
      };
    }
  }
  return { ok: true };
}

export async function singleHumanExecutePreparedContract(
  input: SingleHumanExecutePreparedContractInput,
): Promise<SingleHumanExecutePreparedContractResult> {
  const presented = input.presentedFactIds.map((f) => f.trim()).filter(Boolean);
  if (presented.length === 0) {
    return fail(
      "SHE_PRESENTATION_FACTS_REQUIRED",
      "Exécuter exige les faits contractuels effectivement présentés — aucune attestation silencieuse.",
    );
  }

  // T14 — no silent consent without authenticated Pilote (tests may forceLocal).
  if (
    !input.authenticatedPilote?.actor?.actorId &&
    input.forceLocalAuthority !== true
  ) {
    return fail(
      "AUTHENTICATED_PILOTE_REQUIRED",
      "Session Pilote vérifiée requise pour Exécuter — aucun consentement silencieux.",
    );
  }

  let loaded = await loadContract(input.oa, input.executionContractId);
  if (!loaded.ok) {
    return fail(loaded.code, loaded.message);
  }
  if (loaded.contract.projectId !== input.projectId) {
    return fail(
      "PROJECT_MISMATCH",
      "Contrat hors projet — Exécuter refusé.",
    );
  }
  if (loaded.contract.version !== input.expectedVersion) {
    return fail(
      "VERSION_MISMATCH",
      "Version contractuelle différente de celle présentée — réinspection requise.",
    );
  }
  const fp = loaded.contract.semanticFingerprint ?? "";
  if (!fp || fp !== input.expectedSemanticFingerprint) {
    return fail(
      "FINGERPRINT_MISMATCH",
      "Empreinte sémantique différente du contrat présenté — réinspection requise.",
    );
  }

  const stamped = materialityFromContractConstraints(
    loaded.contract.constraints,
  );

  // INV-SHE-UNKNOWN-BLOCKS — UNKNOWN may be prepared/inspected, never launched.
  if (stamped === "unknown") {
    return fail(
      "SHE_UNKNOWN_BLOCKS_EXECUTE",
      "Matérialité UNKNOWN — proposition inspectable uniquement ; exécution refusée (fail-closed).",
    );
  }

  // C1 — project inspected contract BEFORE any HD / supersede.
  const inspectedProj = projectContractOrThrow(loaded.contract);
  if (!inspectedProj.ok) {
    return fail(inspectedProj.code, inspectedProj.message);
  }

  // Attest on the *initial* presented contract (before HD). No silent attest.
  const initialInspected = await inspectExecutionContract({
    oa: input.oa,
    projectId: input.projectId,
    executionContractId: loaded.contract.executionContractId,
    expectedVersion: loaded.contract.version,
    inspectedFacts: presented,
  });
  if (!initialInspected.ok) {
    return fail(initialInspected.code, initialInspected.message);
  }
  if (!initialInspected.inspectionSufficient) {
    return fail(
      initialInspected.reinspectionRequired
        ? "REINSPECTION_REQUIRED"
        : "INSPECTION_INSUFFICIENT",
      "Disclosure d'inspection insuffisante pour Exécuter — aucune HD créée.",
    );
  }

  // CURRENT Product currentness ALWAYS (structural included — R2).
  // Never skip solely because decisionRefs will be / were populated.
  const contractInputs = (loaded.contract.inputs ?? {}) as Record<
    string,
    unknown
  >;
  const factsRaw =
    contractInputs.materialityFacts &&
    typeof contractInputs.materialityFacts === "object"
      ? (contractInputs.materialityFacts as Record<string, unknown>)
      : null;
  const currentness = await assertSheProductCurrentness({
    oa: input.oa,
    projectId: input.projectId,
    analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
    cycleInstanceId: loaded.contract.cycleInstanceId ?? null,
    stampedMateriality: stamped,
    stampedCurrentness: parseStampedProductCurrentness(factsRaw),
  });
  if (!currentness.ok) {
    return fail(currentness.code, currentness.message);
  }

  let humanDecisionCreated = false;
  let humanDecisionId: string | null =
    (loaded.contract.decisionRefs ?? [])[0] ?? null;
  let humanDecisionOptionId: string | null = null;
  let supersededFrom: string | null = null;
  let active = loaded.contract;

  const refs = active.decisionRefs ?? [];
  const needsStructuralHdBind =
    (stamped === "structural" ||
      active.inputs?.sheDeferredStructuralAuthority === true) &&
    refs.length === 0;

  if (needsStructuralHdBind) {
    const bound = await bindStructuralHdViaSupersede({
      oa: input.oa,
      projectId: input.projectId,
      contract: active,
      inspectedProjection: inspectedProj.projection,
      forceLocalAuthority: input.forceLocalAuthority,
      authenticatedPilote: input.authenticatedPilote,
    });
    if (!bound.ok) {
      return fail(bound.code, bound.message, bound.humanDecisionCreated);
    }
    humanDecisionCreated = bound.humanDecisionCreated;
    humanDecisionId = bound.humanDecisionId;
    humanDecisionOptionId = bound.humanDecisionOptionId;
    supersededFrom = bound.supersededFromExecutionContractId;
    active = bound.contract;

    // Re-attest successor with the same presented facts (disclosure continuity).
    const successorInspected = await inspectExecutionContract({
      oa: input.oa,
      projectId: input.projectId,
      executionContractId: active.executionContractId,
      expectedVersion: active.version,
      inspectedFacts: presented,
    });
    if (!successorInspected.ok) {
      return fail(
        successorInspected.code,
        successorInspected.message,
        humanDecisionCreated,
      );
    }
    if (!successorInspected.inspectionSufficient) {
      return fail(
        "SHE_SUCCESSOR_INSPECTION_INSUFFICIENT",
        "Disclosure insuffisante sur le successeur — autorisation refusée.",
        humanDecisionCreated,
      );
    }
  } else if (refs.length > 0) {
    // Resume path: already-bound successor — still require effect equivalence
    // vs the click-bound identity when sheBoundFrom* metadata is present.
    const fromId =
      typeof active.inputs?.sheBoundFromExecutionContractId === "string"
        ? active.inputs.sheBoundFromExecutionContractId
        : null;
    if (
      fromId &&
      fromId === input.executionContractId &&
      Number(active.inputs?.sheBoundFromVersion) === input.expectedVersion &&
      String(active.inputs?.sheBoundFromSemanticFingerprint ?? "") ===
        input.expectedSemanticFingerprint
    ) {
      const eq = compareSuccessorToInspected(
        inspectedProj.projection,
        active,
      );
      if (!eq.ok) {
        return fail(eq.code, eq.message, humanDecisionCreated);
      }
    }
    if (
      typeof active.inputs?.sheAuthorizeOptionId === "string" &&
      active.inputs.sheAuthorizeOptionId ===
        GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE
    ) {
      humanDecisionOptionId = GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE;
    }
  }

  let confirmationRef: string | null = active.confirmationRef ?? null;
  const mid = await loadContract(input.oa, active.executionContractId);
  if (!mid.ok) {
    return fail(mid.code, mid.message, humanDecisionCreated);
  }
  active = mid.contract;

  if (active.status === "confirmation_required") {
    // Currentness already revalidated above — skip only after that proof.
    const confirmed = await confirmExecutionContractForAuthorization({
      oa: input.oa,
      projectId: input.projectId,
      executionContractId: active.executionContractId,
      forceLocalAuthority: input.forceLocalAuthority,
      skipMaterialityRevalidation: true,
    });
    if (!confirmed.ok) {
      return fail(confirmed.code, confirmed.message, humanDecisionCreated);
    }
    confirmationRef = confirmed.confirmationRef;
  }

  const afterConfirm = await loadContract(
    input.oa,
    active.executionContractId,
  );
  if (!afterConfirm.ok) {
    return fail(afterConfirm.code, afterConfirm.message, humanDecisionCreated);
  }
  active = afterConfirm.contract;

  const authorization = await evaluateExecutionAuthorization({
    oa: input.oa,
    projectId: input.projectId,
    executionContractId: active.executionContractId,
    expectedVersion: active.version,
    expectedSemanticFingerprint: active.semanticFingerprint,
    forceLocalAuthority: input.forceLocalAuthority,
  });
  if (!authorization.ok) {
    return fail(authorization.code, authorization.message, humanDecisionCreated);
  }
  if (
    authorization.outcome !== "AUTHORIZED" ||
    authorization.executionEligible !== true
  ) {
    return fail(
      authorization.executionEligibilityReasonCode ||
        "AUTHORIZATION_NOT_ELIGIBLE",
      "Autorisation insuffisante — aucun Attempt créé.",
      humanDecisionCreated,
    );
  }

  return {
    ok: true,
    executionContractId: active.executionContractId,
    contractVersion: active.version,
    semanticFingerprint: active.semanticFingerprint ?? "",
    status: active.status,
    humanDecisionCreated,
    humanDecisionId,
    humanDecisionOptionId,
    confirmationRef,
    authorization,
    executionAttemptCreated: false,
    supersededFromExecutionContractId: supersededFrom,
    code: "SHE_EXECUTE_AUTHORIZED",
  };
}
