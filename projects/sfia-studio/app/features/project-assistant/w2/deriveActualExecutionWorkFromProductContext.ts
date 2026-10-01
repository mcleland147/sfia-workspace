/**
 * PJ-REPROOF-04 — Product state → ExecutionContract mission derivation.
 *
 * Application helper ONLY (non-durable). Populates WHAT/mission fields from
 * durable Product facts so the Pilote never selects low-level HOW.
 *
 * Internal ActualExecutionWork remains an authority/effect control ONLY
 * (Confirmation / capability projection for fixture-safe Attempts).
 * It is NOT a Product mission category and NOT Cursor HOW.
 *
 * Derived from whether the mission perimeter authorizes mutating effects —
 * NEVER from selectedOptionRef === clarify-first (no option→operation table).
 *
 * Future tasks: create a new ExecutionContract (mission fields) — do NOT add
 * a new operation kind or executor type.
 *
 * Forbidden:
 * - selectedOptionRef → EC.action / EC.scope
 * - clarify-first → read hardcode
 * - diagnosticExecutor / mission-type switch
 * - client path / authority / capability injection
 */

import type { DecisionBasis } from "@/lib/oa/decision";
import { isRepositorySourceRef } from "@/lib/oa/execution-contract";
import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
import {
  buildActualExecutionWork,
  buildProductQualifiedLocalWriteWork,
  isActualExecutionOperationKind,
  isHighRiskPolicyOnlyOperationKind,
  type ActualExecutionWork,
} from "./w3aActualExecutionWork";
import type { EffectQualificationFailure } from "./w3aQualifiedExecutionEffects";
import type { PostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "./proposalSubjectOptions";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "./trajectoryOptions";

/**
 * CP4-02 Option C — Product local-write protection via sandbox policy composition
 * (SANDBOX_DEFAULT_PROTECTED_PATHS ∪ STUDIO_GOVERNANCE_PROTECTED_PATHS).
 * No Campus360/CT SFIA_DEFAULT_PROTECTED_PATHS. No parallel list in this module.
 * Returns the protected entry hit, or null when path is ordinary.
 */
export function classifyProtectedRepositoryPath(
  repoRelativePath: string,
): string | null {
  return classifyStudioProductProtectedPath(repoRelativePath);
}
/**
 * Repository document paths known from durable DecisionBasis / cycle facts.
 * Pseudo-refs (`attempt:…`, `product:…`) are excluded — they are not files.
 */
export function repositorySourcesFromProductFacts(input: {
  readonly basis: DecisionBasis;
  readonly additionalSources?: readonly string[] | null;
}): readonly string[] {
  const eb = input.basis.executionBasis;
  const candidates = [
    ...(typeof eb.targetPath === "string" ? [eb.targetPath] : []),
    ...(eb.scopeIn ?? []),
    ...(input.additionalSources ?? []),
  ];
  return Object.freeze([
    ...new Set(
      candidates
        .map((s) => (typeof s === "string" ? s.trim() : ""))
        .filter(isRepositorySourceRef),
    ),
  ]);
}

/** Mission WHAT fields folded into ExecutionContract.inputs / envelope. */
export type ProductMissionFields = {
  readonly objective: string;
  readonly expectedOutputs: readonly string[];
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly stopConditions: readonly string[];
  readonly evidenceRequirements: readonly string[];
  readonly sourcesToRead: readonly string[];
  readonly contextNotes: readonly string[];
  /** True when mission perimeter allows mutating filesystem/git effects. */
  readonly authorizesMutatingEffects: boolean;
  readonly recoveryAttemptId: string | null;
  readonly recoveryEvidenceId: string | null;
  readonly recoveryReviewBundleId: string | null;
  readonly recoveryExecutionContractId: string | null;
  readonly productOutcome: string | null;
};

export type DeriveProductMissionResult =
  | {
      readonly ok: true;
      readonly work: ActualExecutionWork;
      readonly mission: ProductMissionFields;
      readonly derivationSource: "durable_product_mission" | "compat_operation_kind";
    }
  | EffectQualificationFailure
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

/** @deprecated Use ProductMissionFields — alias during simplify transition. */
export type DiagnosticMissionSemantics = ProductMissionFields & {
  readonly kind?: string;
};

/** Trajectory governance marker — never an executable EC action. */
export function isNonExecutableTrajectoryRequestedOperation(
  requestedOperation: string | null | undefined,
): boolean {
  const op = requestedOperation?.trim() ?? "";
  return op.length === 0 || op.startsWith("w2:decide-trajectory:");
}

function missionFromRecovery(
  recovery: PostEvidenceRecoveryContext,
  projectObjective: string | null,
  repositorySources: readonly string[],
): ProductMissionFields {
  const outcomeLabel =
    recovery.productOutcome === "UNCLAIMED"
      ? "non encore pleinement démontré"
      : recovery.productOutcome === "STOP"
        ? "arrêté de façon gouvernée"
        : "en échec";
  return {
    objective:
      `Déterminer pourquoi le résultat produit précédent est ${outcomeLabel} ` +
      `et ce qui manque avant une nouvelle tentative` +
      (projectObjective ? ` — contexte projet: ${projectObjective}` : ""),
    expectedOutputs: [
      "Diagnostic utilisable des preuves manquantes / expected outcomes non tenus",
      "Prochaine étape produit recommandée (sans relance automatique)",
      `Trace d'inspection Attempt ${recovery.attemptId} / Evidence ${recovery.evidenceId} / ReviewBundle ${recovery.reviewBundleId}`,
    ],
    scopeIn: [
      "product:current-project",
      `attempt:${recovery.attemptId}`,
      `evidence:${recovery.evidenceId}`,
      `reviewBundle:${recovery.reviewBundleId}`,
      `executionContract:${recovery.executionContractId}`,
      "product:durable-facts-required-for-mission",
      ...repositorySources,
    ],
    scopeOut: [
      "unrelated-project-mutation",
      "automatic-relaunch",
      "claim-product-success-from-technical-success",
      "protected-boundary-without-authorization",
      "doctrine-or-baseline-promotion",
      "DURABLE_PROJECT_WRITE",
      "GIT_PUSH",
      "GIT_PR",
      "GIT_MERGE",
    ],
    stopConditions: [
      "REQUIRED_EVIDENCE_UNAVAILABLE",
      "CONTRADICTORY_DURABLE_TRUTH",
      "CAPABILITY_OR_AUTHORITY_INSUFFICIENT",
      "PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT",
      "NO_AUTOMATIC_RELAUNCH",
    ],
    evidenceRequirements: [
      "evreq:mission-trace-of-inspected-durable-facts",
      "evreq:mission-result-for-nora-reevaluation",
    ],
    sourcesToRead: [
      `attempt:${recovery.attemptId}`,
      `evidence:${recovery.evidenceId}`,
      `reviewBundle:${recovery.reviewBundleId}`,
      `executionContract:${recovery.executionContractId}`,
      ...repositorySources,
    ],
    contextNotes: [
      `productOutcome=${recovery.productOutcome}`,
      `recommendationKind=${recovery.recommendationKind}`,
      `attemptStatus=${recovery.attemptStatus}`,
      `headline=${recovery.headline}`,
      `businessEffectProven=false`,
      `realProcessInvoked=${recovery.realProcessInvoked}`,
    ],
    // Perimeter forbids mutations — internal effect control, not option→op.
    authorizesMutatingEffects: false,
    recoveryAttemptId: recovery.attemptId,
    recoveryEvidenceId: recovery.evidenceId,
    recoveryReviewBundleId: recovery.reviewBundleId,
    recoveryExecutionContractId: recovery.executionContractId,
    productOutcome: recovery.productOutcome,
  };
}

function missionFromClarifyWithoutRecovery(
  projectObjective: string | null,
  basis: DecisionBasis,
  repositorySources: readonly string[],
): ProductMissionFields {
  const reserves = basis.executionBasis.reservations ?? [];
  return {
    objective:
      "Clarifier le contexte durable et les réserves avant d'engager une exécution structurante" +
      (projectObjective ? ` — ${projectObjective}` : ""),
    expectedOutputs: [
      "Diagnostic des réserves / incertitudes bloquantes",
      "Prochaine étape produit recommandée (sans exécution automatique)",
    ],
    scopeIn: [
      "product:current-project-facts",
      "product:decision-basis-and-lps",
      ...reserves.map((r) => `reservation:${r}`),
      ...repositorySources,
    ],
    scopeOut: [
      "unrelated-project-mutation",
      "automatic-execute",
      "protected-boundary-without-authorization",
      "DURABLE_PROJECT_WRITE",
      "GIT_PUSH",
      "GIT_PR",
      "GIT_MERGE",
    ],
    stopConditions: [
      "REQUIRED_CONTEXT_UNAVAILABLE",
      "CAPABILITY_OR_AUTHORITY_INSUFFICIENT",
      "NO_AUTOMATIC_EXECUTE",
    ],
    evidenceRequirements: ["evreq:mission-result-for-nora-reevaluation"],
    sourcesToRead: [
      "product:current-project-facts",
      "product:decision-basis-and-lps",
      ...repositorySources,
    ],
    contextNotes: ["pre_engagement_clarify", ...reserves.slice(0, 5)],
    authorizesMutatingEffects: false,
    recoveryAttemptId: null,
    recoveryEvidenceId: null,
    recoveryReviewBundleId: null,
    recoveryExecutionContractId: null,
    productOutcome: null,
  };
}

/**
 * Durable Product facts sufficient to qualify a bounded local-write effect
 * WITHOUT docs_write Product taxonomy. Product EC surface stays generalist.
 */
export function canQualifyGenericLocalWriteFromDurableFacts(input: {
  readonly basis: DecisionBasis;
  readonly selectedOptionRef: string;
}):
  | {
      readonly ok: true;
      readonly allowedPaths: readonly string[];
      readonly rollbackAvailable: true;
      readonly rollbackDescription: string;
    }
  | { readonly ok: false; readonly reason: string } {
  const { basis, selectedOptionRef } = input;
  const proposalPursue =
    selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF &&
    basis.sourceType === "proposal";
  const trajectoryGoverned =
    selectedOptionRef === GOVERNED_OPTION_REF ||
    selectedOptionRef === BOUNDED_OPTION_REF;
  if (!proposalPursue && !trajectoryGoverned) {
    return {
      ok: false,
      reason:
        "local-write requires GOVERNED/BOUNDED or Proposal pursue HumanDecision provenance",
    };
  }
  const eb = basis.executionBasis;
  const requested = eb.requestedOperation?.trim() ?? "";
  // docs_write sealed path stays on PREPARE Proposal/M3 — not this path.
  if (
    eb.intentKind === "docs_write" ||
    requested === "cursor.docs_write.apply"
  ) {
    return {
      ok: false,
      reason: "docs_write sealed — use PREPARE Proposal/M3 path",
    };
  }
  if (eb.reversibilityExpectation === "irreversible") {
    return {
      ok: false,
      reason: "irreversible expectation — local-write blocked",
    };
  }
  const paths = repositorySourcesFromProductFacts({ basis });
  if (paths.length === 0) {
    return {
      ok: false,
      reason:
        "no sealed repository paths on DecisionBasis (targetPath / scopeIn)",
    };
  }
  // targetPath must be inside sealed scopeIn when both are present.
  const target = typeof eb.targetPath === "string" ? eb.targetPath.trim() : "";
  const scopeIn = (eb.scopeIn ?? [])
    .map((s) => (typeof s === "string" ? s.trim() : ""))
    .filter(Boolean);
  if (target && scopeIn.length > 0 && !scopeIn.includes(target)) {
    return {
      ok: false,
      reason: "targetPath not contained in sealed scopeIn",
    };
  }
  // CP4-02 Option C — Studio Product protected paths (sandbox floor ∪ governance).
  // Confirmation N2 never bypasses this gate.
  const protectedHits = paths
    .map((p) => ({ path: p, hit: classifyProtectedRepositoryPath(p) }))
    .filter((x) => x.hit != null);
  if (protectedHits.length > 0) {
    return {
      ok: false,
      reason: `protected boundary without dedicated authority: ${protectedHits
        .map((h) => `${h.path}→${h.hit}`)
        .join(",")}`,
    };
  }
  return {
    ok: true,
    allowedPaths: paths,
    rollbackAvailable: true,
    rollbackDescription:
      "Isolated Git worktree discard after Attempt — no Git commit/push/PR.",
  };
}

function missionFromGovernedLocalWrite(
  projectObjective: string | null,
  basis: DecisionBasis,
  allowedPaths: readonly string[],
): ProductMissionFields {
  const eb = basis.executionBasis;
  return {
    objective:
      (eb.objective?.trim() ||
        "Exécuter une mutation locale bornée dans le worktree isolé") +
      (projectObjective ? ` — ${projectObjective}` : ""),
    expectedOutputs: [
      ...(eb.expectedOutputs ?? []),
      "Fichiers créés/modifiés dans le scope autorisé",
      "CursorExecutionReport machine + Cursor Review End Of natif",
      "Studio VerifiedChangeSet (FACTS) pour qualification produit",
    ].filter((s, i, a) => s && a.indexOf(s) === i),
    scopeIn: [
      "product:project-workspace",
      ...allowedPaths,
      ...(eb.scopeIn ?? []).filter((s) => !allowedPaths.includes(s)),
    ],
    scopeOut: [
      "GIT_COMMIT",
      "GIT_PUSH",
      "GIT_PR",
      "GIT_MERGE",
      "FILESYSTEM_DELETE",
      "DOCTRINE_MUTATION",
      "BASELINE_PROMOTION",
      "unrelated-project-mutation",
      "protected-boundary-without-authorization",
      ...(eb.scopeOut ?? []),
    ],
    stopConditions: [
      "REQUIRED_EVIDENCE_UNAVAILABLE",
      "CAPABILITY_OR_AUTHORITY_INSUFFICIENT",
      "PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT",
      "CLAIM_FACT_MISMATCH",
      "NO_AUTOMATIC_RELAUNCH",
      // Do NOT fold trajectory authorize-flow markers (AUCUNE EXÉCUTION /
      // STOP AVANT EXECUTE) — those are stripped by productStopConditions.
    ],
    evidenceRequirements: [
      "evreq:mission-result-for-nora-reevaluation",
      "evreq:local-write",
      "evreq:studio-verified-changeset",
      ...(eb.evidenceRequirements ?? []),
    ],
    sourcesToRead: [
      "product:current-project-facts",
      "product:decision-basis-and-lps",
      // Write targets are scopeIn only — they are NOT claimed as prior reads.
    ],
    contextNotes: [
      "product_qualified_local_write",
      "NOT_DOCS_WRITE_PRODUCT_TAXONOMY",
      `allowedPaths=${allowedPaths.join(",")}`,
      `reversibilityExpectation=${eb.reversibilityExpectation ?? "unknown"}`,
    ],
    authorizesMutatingEffects: true,
    recoveryAttemptId: null,
    recoveryEvidenceId: null,
    recoveryReviewBundleId: null,
    recoveryExecutionContractId: null,
    productOutcome: null,
  };
}

/**
 * Internal effect-control scaffold from mission perimeter — NOT a Product
 * contract category. `operationKind: "read"` here is ActionPolicy taxonomy only;
 * the durable EC surface is stamped as the generic Cursor quartet by the envelope.
 */
function buildInternalWorkFromMissionPerimeter(input: {
  readonly projectId: string;
  readonly projectTitle: string | null;
  readonly mission: ProductMissionFields;
  readonly qualificationSource: string;
  readonly basis?: DecisionBasis;
  readonly selectedOptionRef?: string;
}): ActualExecutionWork | EffectQualificationFailure {
  if (input.mission.authorizesMutatingEffects) {
    // Product-qualified local-write from durable facts — not docs_write taxonomy.
    if (input.basis && input.selectedOptionRef) {
      const qual = canQualifyGenericLocalWriteFromDurableFacts({
        basis: input.basis,
        selectedOptionRef: input.selectedOptionRef,
      });
      if (qual.ok) {
        const built = buildProductQualifiedLocalWriteWork({
          projectId: input.projectId,
          projectTitle: input.projectTitle,
          objective: input.mission.objective,
          allowedPaths: qual.allowedPaths,
          rollbackAvailable: qual.rollbackAvailable,
          rollbackDescription: qual.rollbackDescription,
          qualificationSource: input.qualificationSource,
        });
        if ("ok" in built && built.ok === false) return built;
        const work = built as ActualExecutionWork;
        return {
          ...work,
          notes: [
            ...work.notes,
            "INTERNAL_EFFECT_CONTROL_FROM_MISSION_PERIMETER",
            "PRODUCT_QUALIFIED_LOCAL_WRITE",
            "NOT_OPTION_TO_OPERATION",
            "CURSOR_DETERMINES_HOW",
            ...input.mission.contextNotes,
          ],
        };
      }
    }
    return {
      ok: false,
      code: "EFFECTS_UNRESOLVED",
      message:
        "Mission mutante sans faits durables suffisants pour local-write produit (chemins + réversibilité) — pas de docs_write taxonomy inventée.",
    };
  }
  const built = buildActualExecutionWork({
    operationKind: "read",
    projectId: input.projectId,
    projectTitle: input.projectTitle,
    objective: input.mission.objective,
    qualificationSource: input.qualificationSource,
  });
  if ("ok" in built && built.ok === false) return built;
  const work = built as ActualExecutionWork;
  return {
    ...work,
    notes: [
      ...work.notes,
      "INTERNAL_EFFECT_CONTROL_FROM_MISSION_PERIMETER",
      "NOT_OPTION_TO_OPERATION",
      "CURSOR_DETERMINES_HOW",
      ...input.mission.contextNotes,
    ],
  };
}

/**
 * Derive mission + internal effect control from durable Product context.
 */
export function deriveActualExecutionWorkFromProductContext(input: {
  readonly projectId: string;
  readonly projectTitle: string | null;
  readonly projectObjective: string | null;
  readonly basis: DecisionBasis;
  readonly selectedOptionRef: string;
  readonly recoveryContext: PostEvidenceRecoveryContext | null;
  /** Hostile / optional — never overrides durable mission derivation. */
  readonly clientOperationKind?: unknown;
  /**
   * Optional repository paths already known from cycle cognition
   * (durable DecisionBasis / prior full reads). Never invents a catalogue.
   */
  readonly cycleRepositorySources?: readonly string[] | null;
}): DeriveProductMissionResult {
  const { selectedOptionRef, recoveryContext, basis } = input;

  if (isHighRiskPolicyOnlyOperationKind(input.clientOperationKind)) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message:
        "Opération à risque non qualifiable depuis operationKind client — refuse push/write/commit/PR/merge/delete/doctrine/baseline sans facts produit.",
    };
  }

  const clientKind =
    isActualExecutionOperationKind(input.clientOperationKind)
      ? input.clientOperationKind
      : null;

  const repositorySources = repositorySourcesFromProductFacts({
    basis,
    additionalSources: input.cycleRepositorySources,
  });

  // Durable mission from Product facts (recovery and/or clarify intent).
  // Option ref is provenance — never the operation selector.
  const canPrepareDurableMission =
    recoveryContext != null || selectedOptionRef === CLARIFY_OPTION_REF;

  if (canPrepareDurableMission) {
    const mission = recoveryContext
      ? missionFromRecovery(
          recoveryContext,
          input.projectObjective,
          repositorySources,
        )
      : missionFromClarifyWithoutRecovery(
          input.projectObjective,
          basis,
          repositorySources,
        );

    const work = buildInternalWorkFromMissionPerimeter({
      projectId: input.projectId,
      projectTitle: input.projectTitle,
      mission,
      qualificationSource:
        "studio.nora.mission-perimeter.internal-effect-control",
      basis,
      selectedOptionRef,
    });
    if ("ok" in work && work.ok === false) return work;
    void clientKind; // durable mission wins — ignore client HOW
    return {
      ok: true,
      work: work as ActualExecutionWork,
      mission,
      derivationSource: "durable_product_mission",
    };
  }

  if (
    selectedOptionRef !== GOVERNED_OPTION_REF &&
    selectedOptionRef !== BOUNDED_OPTION_REF &&
    selectedOptionRef !== PROPOSAL_SUBJECT_PURSUE_REF
  ) {
    return {
      ok: false,
      code: "TRAJECTORY_NOT_EXECUTABLE",
      message: `Option ${selectedOptionRef} — mission d'exécution non dérivable.`,
    };
  }

  if (
    selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF &&
    basis.sourceType !== "proposal"
  ) {
    return {
      ok: false,
      code: "SUBJECT_OPTION_SET_MISMATCH",
      message:
        "Proposal pursue sans DecisionBasis.sourceType=proposal — fail-closed.",
    };
  }

  const requested = basis.executionBasis.requestedOperation?.trim() ?? "";
  if (
    !isNonExecutableTrajectoryRequestedOperation(requested) &&
    (basis.executionBasis.intentKind === "docs_write" ||
      requested === "cursor.docs_write.apply")
  ) {
    return {
      ok: false,
      code: "PREPARE_ROUTE_DOCS_WRITE",
      message:
        "DecisionBasis scellée docs_write — utiliser le chemin PREPARE Proposal/M3, pas le sandbox W3-A.",
    };
  }

  // CP4-01 — GOVERNED/BOUNDED or Proposal pursue + durable local-write facts
  // → product-qualified local-write (generic Cursor quartet).
  const localWriteQual = canQualifyGenericLocalWriteFromDurableFacts({
    basis,
    selectedOptionRef,
  });
  if (localWriteQual.ok) {
    const mission = missionFromGovernedLocalWrite(
      input.projectObjective,
      basis,
      localWriteQual.allowedPaths,
    );
    const work = buildInternalWorkFromMissionPerimeter({
      projectId: input.projectId,
      projectTitle: input.projectTitle,
      mission,
      qualificationSource:
        "studio.nora.mission-perimeter.product-qualified-local-write",
      basis,
      selectedOptionRef,
    });
    if ("ok" in work && work.ok === false) return work;
    void clientKind; // durable local-write wins — ignore client HOW
    return {
      ok: true,
      work: work as ActualExecutionWork,
      mission,
      derivationSource: "durable_product_mission",
    };
  }

  // Proposal pursue without local-write facts = fail closed (no invented HOW).
  if (selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF) {
    return {
      ok: false,
      code: "EFFECTS_UNRESOLVED",
      message: `Proposal pursue local-write non qualifiable — ${localWriteQual.reason}`,
    };
  }

  // Compat: allowlisted client kind for historical tests only — not Product UI.
  if (clientKind) {
    const built = buildActualExecutionWork({
      operationKind: clientKind,
      projectId: input.projectId,
      projectTitle: input.projectTitle,
      objective: input.projectObjective,
      qualificationSource:
        "studio.nora.actual-execution-work.from-compat-operation-kind",
    });
    if ("ok" in built && built.ok === false) return built;
    const work = built as ActualExecutionWork;
    const mission: ProductMissionFields = {
      objective: input.projectObjective ?? `Exécution ${clientKind}`,
      expectedOutputs: [`Résultat d'exécution — ${clientKind}`],
      scopeIn: [work.scopeIn],
      scopeOut: [...work.scopeOut],
      stopConditions: [],
      evidenceRequirements: [],
      sourcesToRead: [],
      contextNotes: ["compat_operation_kind"],
      authorizesMutatingEffects: clientKind === "generate-temporary-artifact",
      recoveryAttemptId: null,
      recoveryEvidenceId: null,
      recoveryReviewBundleId: null,
      recoveryExecutionContractId: null,
      productOutcome: null,
    };
    return {
      ok: true,
      work,
      mission,
      derivationSource: "compat_operation_kind",
    };
  }

  return {
    ok: false,
    code: "EFFECTS_UNRESOLVED",
    message:
      "Aucune mission dérivable du contexte produit durable — Studio n'invente pas de HOW depuis la trajectoire seule.",
  };
}
