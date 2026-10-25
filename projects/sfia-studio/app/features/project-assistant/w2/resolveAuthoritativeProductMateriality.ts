/**
 * P6 Product Continuity Closure — Product-grounded execution materiality.
 *
 * Resolves NON_STRUCTURAL / STRUCTURAL / UNKNOWN from live Product facts
 * (LPS, active cycle, concrete mission paths, protected-path policy,
 * repository pathRoot, capability envelope) — never from hardcoded false
 * negatives, lexical keyword absence, or Nora-supplied fields alone.
 *
 * Absence of governance keywords ≠ proof of non-structural mission.
 * Generalist capability label ≠ proof that scope is authorized.
 *
 * Does NOT invent a second materiality engine: wraps assessExecutionMaterialityOrUnknown.
 * Does NOT invent HumanDecision. Distinguishes materiality from Morris protected-path gates.
 */

import {
  assessExecutionMaterialityOrUnknown,
  type ExecutionMaterialityAssessment,
  type ExecutionMaterialityFacts,
} from "@/lib/oa/execution-contract";
import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { projectWorkspacePathRootFromKey } from "@/lib/oa/project/domain/projectWorkspaceKey";
import type { IntentAnalysisDto } from "../f2/types";
import { isCapabilityWithinGenericPrepareEnvelope } from "./genericPrepareCapabilityEnvelope";
import { resolveSealedGitTargetFromEnv } from "./resolveTrustedProductLaunchContext";

export type ProductMaterialityCurrentness = {
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest: string;
  readonly activeCycleInstanceId: string | null;
  readonly projectId: string;
  readonly pathRoot: string | null;
  readonly repositoryIdentity: string | null;
  readonly assessedAtIso: string;
};

export type AuthoritativeMaterialityResolution = {
  readonly assessment: ExecutionMaterialityAssessment;
  readonly facts: ExecutionMaterialityFacts & {
    readonly productContextSufficient: boolean;
    readonly productCurrentness: ProductMaterialityCurrentness | null;
    readonly structuralTruthBasis: string;
    readonly cycleTruthBasis: string;
    readonly authorityEnvelopeBasis: string;
    readonly concreteMissionPaths: readonly string[];
    readonly pathsOutsidePathRoot: readonly string[];
    readonly boundedNonMutatingAnalysis: boolean;
    readonly boundedNonMutatingAnalysisBasis: string | null;
  };
  readonly productContextSufficient: boolean;
  readonly liveReadOk: boolean;
  readonly failureCode?: string;
};

/** Path-like mission scope entries (WHERE candidates). */
export function collectConcreteMissionPaths(
  analysis: IntentAnalysisDto,
): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  const push = (raw: string) => {
    const path = raw.trim();
    if (!path || path.includes(" ")) return;
    // Require path-like shape (slash or known extension) — narrative alone is not WHERE.
    if (!path.includes("/") && !/\.[a-z0-9]{1,8}$/i.test(path)) return;
    if (seen.has(path)) return;
    seen.add(path);
    out.push(path);
  };
  for (const p of analysis.executionIntent?.scopeIn ?? []) {
    if (typeof p === "string") push(p);
  }
  if (typeof analysis.scope === "string") push(analysis.scope);
  // Intent-fidelity WHERE candidates (Nora proposals) — still subject to pathRoot.
  const ei = analysis.executionIntent;
  if (typeof ei?.targetPath === "string") push(ei.targetPath);
  for (const p of ei?.expectedOutputs ?? []) {
    if (typeof p === "string") push(p);
  }
  return out;
}

export function collectProtectedPathHits(analysis: IntentAnalysisDto): string[] {
  const hits: string[] = [];
  for (const path of collectConcreteMissionPaths(analysis)) {
    if (classifyStudioProductProtectedPath(path)) hits.push(path);
  }
  return hits;
}

function normalizePathRoot(pathRoot: string | null | undefined): string | null {
  const t = pathRoot?.trim();
  if (!t) return null;
  return t.replace(/\/+$/, "");
}

/**
 * Paths outside the Project workspace pathRoot (projects/<key>) are outside
 * authorized WHERE.
 */
export function pathsOutsideAuthorizedPathRoot(input: {
  readonly paths: readonly string[];
  readonly pathRoot: string | null;
}): string[] {
  const root = normalizePathRoot(input.pathRoot);
  if (!root) return [];
  const prefix = root.endsWith("/") ? root : `${root}/`;
  return input.paths.filter((p) => {
    const n = p.trim().replace(/^\.\//, "");
    return n !== root && !n.startsWith(prefix);
  });
}

/**
 * Product-owned bounded non-mutating analysis (tool-first ordinary mission).
 *
 * R1 safety closure — positive Product facts only:
 * never keyword absence alone, never “pathless ⇒ safe”, never
 * `repositoryMutation` absent/unknown as sufficient authority.
 *
 * Requires ALL of:
 * - live Product context;
 * - empty concrete WHERE (no invented documentary/Git target);
 * - no structural / write / materialization contradiction;
 * - generalist envelope only;
 * - AND an explicit structured non-mutating claim:
 *   `executionIntent.intentKind === "read_only"`
 *   OR `repositoryMutationDeclared` ∈ {none, read}.
 */
export function qualifyBoundedNonMutatingAnalysisMission(input: {
  readonly analysis: IntentAnalysisDto;
  readonly liveOk: boolean;
  readonly concretePaths: readonly string[];
  readonly protectedPathHits: readonly string[];
  readonly positiveStructuralSignal: boolean;
  readonly requestedCapabilities: readonly string[];
  readonly isDocumentaryWriteMission: boolean;
}): { readonly ok: boolean; readonly basis: string } {
  if (!input.liveOk) {
    return { ok: false, basis: "live_lps_unavailable" };
  }
  if (input.concretePaths.length > 0) {
    return { ok: false, basis: "concrete_paths_present_use_path_materiality" };
  }
  if (input.protectedPathHits.length > 0) {
    return { ok: false, basis: "protected_path_hits" };
  }
  if (input.positiveStructuralSignal) {
    return { ok: false, basis: "positive_structural_signal" };
  }
  if (input.isDocumentaryWriteMission) {
    return { ok: false, basis: "documentary_write_mission" };
  }
  const ei = input.analysis.executionIntent;
  const intentKind = ei?.intentKind?.trim() || null;
  if (
    intentKind != null &&
    intentKind !== "read_only" &&
    intentKind !== "other"
  ) {
    return { ok: false, basis: "intent_kind_not_admitted" };
  }
  const elevated = input.requestedCapabilities.filter(
    (c) => c.trim().length > 0 && !isCapabilityWithinGenericPrepareEnvelope(c),
  );
  if (elevated.length > 0) {
    return { ok: false, basis: "elevated_capabilities" };
  }
  const materialization = (
    input.analysis as { artifactMaterializationOperation?: string | null }
  ).artifactMaterializationOperation;
  if (
    typeof materialization === "string" &&
    materialization.trim().length > 0
  ) {
    return { ok: false, basis: "artifact_materialization_operation" };
  }
  if (ei?.targetPath?.trim() || ei?.artifactFileName?.trim()) {
    return { ok: false, basis: "write_target_candidate_present" };
  }
  if (ei?.artifactWriteMode === "CREATE" || ei?.artifactWriteMode === "UPDATE") {
    return { ok: false, basis: "artifact_write_mode" };
  }
  const objective = (
    input.analysis.objective ??
    input.analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (input.analysis.expectedOutcome ?? "").trim();
  const scopeNarrative = (input.analysis.scope ?? "").trim();
  if (!objective || (!expectedOutcome && !scopeNarrative)) {
    return { ok: false, basis: "mission_data_insufficient" };
  }

  // Positive structured non-mutating claim (Product-owned — not lexical).
  const declaredMutation = (
    input.analysis as {
      repositoryMutationDeclared?: "none" | "read" | "write" | "unknown" | null;
    }
  ).repositoryMutationDeclared;
  const readOnlyIntent = intentKind === "read_only";
  const explicitNone =
    declaredMutation === "none" || declaredMutation === "read";
  if (declaredMutation === "write") {
    return { ok: false, basis: "repository_mutation_declared_write" };
  }
  if (declaredMutation === "unknown") {
    return { ok: false, basis: "repository_mutation_unknown" };
  }
  // R1 — absence is NOT a positive claim (fail-closed → UNKNOWN upstream).
  if (declaredMutation == null && !readOnlyIntent) {
    return { ok: false, basis: "repository_mutation_claim_absent" };
  }
  if (readOnlyIntent || explicitNone) {
    return {
      ok: true,
      basis: readOnlyIntent
        ? "read_only_intent_pathless_verified"
        : "declared_non_mutating_pathless_verified",
    };
  }
  return { ok: false, basis: "non_mutating_claim_absent" };
}

/**
 * Structural mutation: Product-path evidence only.
 * Protected path in scope → structural (distinct from Morris gate at launch).
 * Pathless missions may qualify as bounded non-mutating analysis (tool-first).
 * Otherwise without concrete non-protected paths → cannot claim non-structural.
 */
function deriveStructuralProjectMutation(input: {
  readonly protectedPathHits: readonly string[];
  readonly concretePaths: readonly string[];
  readonly liveOk: boolean;
  readonly positiveStructuralSignal: boolean;
  readonly boundedNonMutatingAnalysis: boolean;
  readonly boundedNonMutatingBasis: string;
}): { readonly value: boolean; readonly basis: string } {
  if (!input.liveOk) {
    return { value: true, basis: "live_lps_unavailable_fail_closed" };
  }
  if (input.protectedPathHits.length > 0) {
    return { value: true, basis: "protected_path_in_mission_scope" };
  }
  if (input.positiveStructuralSignal) {
    return { value: true, basis: "positive_structural_model_signal" };
  }
  if (input.concretePaths.length === 0) {
    if (input.boundedNonMutatingAnalysis) {
      return {
        value: false,
        basis: `bounded_non_mutating_analysis:${input.boundedNonMutatingBasis}`,
      };
    }
    // Cannot prove non-mutation without concrete WHERE — escalate via insufficient context.
    return { value: true, basis: "no_concrete_mission_paths_fail_closed" };
  }
  return {
    value: false,
    basis: "live_lps_ok_concrete_non_protected_paths_only",
  };
}

function deriveCycleOrTrajectoryMutation(input: {
  readonly liveActiveCycleId: string | null;
  readonly requestedCycleId: string | null;
  readonly liveOk: boolean;
}): { readonly value: boolean; readonly basis: string } {
  if (!input.liveOk) {
    return { value: true, basis: "live_cycle_unavailable_fail_closed" };
  }
  if (!input.liveActiveCycleId) {
    // D-ER-17 / S8 — project-context mission (requested cycle null) on a project
    // with NO live active cycle mutates no cycle/trajectory truth: there is none
    // to mutate and none is created. A mission that REQUESTS a cycle which is not
    // live-active stays fail-closed (cannot anchor non-mutation).
    if (!input.requestedCycleId) {
      return {
        value: false,
        basis: "project_context_no_active_cycle_none_mutated",
      };
    }
    return { value: true, basis: "no_active_cycle_to_anchor_non_mutation" };
  }
  if (
    input.requestedCycleId &&
    input.requestedCycleId !== input.liveActiveCycleId
  ) {
    return { value: true, basis: "requested_cycle_diverges_from_live_active" };
  }
  return {
    value: false,
    basis: "active_cycle_anchored_matches_requested",
  };
}

function deriveAuthorityEnvelopeExpanded(input: {
  readonly liveOk: boolean;
  readonly pathRoot: string | null;
  readonly concretePaths: readonly string[];
  readonly pathsOutsidePathRoot: readonly string[];
  readonly requestedCapabilities: readonly string[];
}): { readonly value: boolean; readonly basis: string } {
  if (!input.liveOk) {
    return { value: true, basis: "live_context_unavailable_fail_closed" };
  }
  if (input.concretePaths.length > 0 && !input.pathRoot) {
    return {
      value: true,
      basis: "path_root_absent_cannot_prove_where_bound",
    };
  }
  if (input.pathsOutsidePathRoot.length > 0) {
    return {
      value: true,
      basis: "mission_paths_outside_repository_path_root",
    };
  }
  // Elevated capabilities outside the generalist envelope remain structural.
  const elevated = input.requestedCapabilities.filter(
    (c) => c.trim().length > 0 && !isCapabilityWithinGenericPrepareEnvelope(c),
  );
  if (elevated.length > 0) {
    return {
      value: true,
      basis: "requested_capabilities_beyond_generalist_envelope",
    };
  }
  return {
    value: false,
    basis: "paths_within_path_root_and_generalist_capability_only",
  };
}

/**
 * Resolve authoritative materiality from live Product + contractual mission.
 */
export async function resolveAuthoritativeProductMateriality(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly analysis: IntentAnalysisDto;
  readonly cycleInstanceId?: string | null;
  /**
   * When true, documentary write bind already claimed this mission —
   * never qualify as pathless analysis (avoids circular import).
   */
  readonly isDocumentaryWriteMission?: boolean;
}): Promise<AuthoritativeMaterialityResolution> {
  const live = await readLiveProjectContext(input.oa, input.projectId);
  const liveOk = live.ok;
  const concretePaths = collectConcreteMissionPaths(input.analysis);
  const protectedPathHits = collectProtectedPathHits(input.analysis);
  const requestedCycleId = input.cycleInstanceId?.trim() || null;

  let pathRoot: string | null = null;
  let repositoryIdentity: string | null = null;
  if (liveOk) {
    const projectResult = await input.oa.projectServices.getProject.execute({
      projectId: input.projectId,
    });
    if (projectResult.ok) {
      pathRoot =
        projectWorkspacePathRootFromKey(
          projectResult.project.projectWorkspaceKey,
        ) || null;
      // Residual git-target seal (env), same witness as launch-context
      // repositoryBindingIdentity. Not a Project repository-binding record.
      repositoryIdentity = resolveSealedGitTargetFromEnv()?.identity ?? null;
    }
  }

  const outsideRoot = pathsOutsideAuthorizedPathRoot({
    paths: concretePaths,
    pathRoot,
  });

  const requestedCapabilities = [
    ...((input.analysis.executionIntent as { requiredCapabilities?: string[] } | null)
      ?.requiredCapabilities ?? []),
  ];

  const positiveStructuralSignal = Boolean(
    input.analysis.signals?.structuralChange ||
      input.analysis.signals?.securityImpact ||
      input.analysis.signals?.architectureImpact ||
      input.analysis.signals?.dataImpact ||
      input.analysis.signals?.irreversible,
  );

  const bounded = qualifyBoundedNonMutatingAnalysisMission({
    analysis: input.analysis,
    liveOk,
    concretePaths,
    protectedPathHits,
    positiveStructuralSignal,
    requestedCapabilities,
    isDocumentaryWriteMission: input.isDocumentaryWriteMission === true,
  });

  const structural = deriveStructuralProjectMutation({
    protectedPathHits,
    concretePaths,
    liveOk,
    positiveStructuralSignal,
    boundedNonMutatingAnalysis: bounded.ok,
    boundedNonMutatingBasis: bounded.basis,
  });
  const cycle = deriveCycleOrTrajectoryMutation({
    liveActiveCycleId: liveOk ? live.context.activeCycleInstanceId : null,
    requestedCycleId,
    liveOk,
  });
  const authority = deriveAuthorityEnvelopeExpanded({
    liveOk,
    pathRoot,
    concretePaths,
    pathsOutsidePathRoot: outsideRoot,
    requestedCapabilities,
  });

  const productCurrentness: ProductMaterialityCurrentness | null = liveOk
    ? {
        lpsId: live.context.lpsId,
        lpsVersion: live.context.lpsVersion,
        doctrineDigest: live.context.doctrineDigest,
        activeCycleInstanceId: live.context.activeCycleInstanceId,
        projectId: live.context.projectId,
        pathRoot,
        repositoryIdentity,
        assessedAtIso: input.oa.clock.nowIso(),
      }
    : null;

  const cycleAnchored =
    cycle.basis === "active_cycle_anchored_matches_requested" ||
    cycle.basis === "project_context_no_active_cycle_none_mutated";
  const authorityOk =
    authority.basis === "paths_within_path_root_and_generalist_capability_only";

  // Sufficient for NON_STRUCTURAL when live Product + (concrete WHERE OR
  // bounded pathless non-mutating analysis) + non-mutation bases from Product facts.
  const productContextSufficient =
    liveOk &&
    cycleAnchored &&
    authorityOk &&
    ((concretePaths.length > 0 &&
      structural.basis === "live_lps_ok_concrete_non_protected_paths_only") ||
      (bounded.ok &&
        structural.basis.startsWith("bounded_non_mutating_analysis:")));

  const facts: AuthoritativeMaterialityResolution["facts"] = {
    modelSignals: input.analysis.signals
      ? {
          structuralChange: input.analysis.signals.structuralChange,
          securityImpact: input.analysis.signals.securityImpact,
          architectureImpact: input.analysis.signals.architectureImpact,
          dataImpact: input.analysis.signals.dataImpact,
          irreversible: input.analysis.signals.irreversible,
        }
      : null,
    contradictionConflictPresent: Boolean(
      input.analysis.contradictionCandidate?.conflictPresent,
    ),
    protectedPathHits,
    wouldMutateStructuralProjectTruth: structural.value,
    wouldMutateCycleOrTrajectoryTruth: cycle.value,
    authorityEnvelopeExpanded: authority.value,
    currentContradictionUnresolved: Boolean(
      input.analysis.contradictionCandidate?.conflictPresent,
    ),
    productContextSufficient,
    productCurrentness,
    structuralTruthBasis: structural.basis,
    cycleTruthBasis: cycle.basis,
    authorityEnvelopeBasis: authority.basis,
    concreteMissionPaths: concretePaths,
    pathsOutsidePathRoot: outsideRoot,
    boundedNonMutatingAnalysis: bounded.ok,
    boundedNonMutatingAnalysisBasis: bounded.ok ? bounded.basis : null,
  };

  const assessment = assessExecutionMaterialityOrUnknown({
    productContextSufficient,
    facts,
  });

  return {
    assessment,
    facts,
    productContextSufficient,
    liveReadOk: liveOk,
    failureCode: liveOk ? undefined : live.code,
  };
}

/**
 * Authorize-time WHERE enforcement: mission scopeIn must stay within
 * trusted pathRoot and must not silently include protected paths.
 */
export function assertAuthorizedMissionScopeEnforceable(input: {
  readonly scopeIn: readonly string[];
  readonly pathRoot: string | null;
  readonly allowProtectedWithExplicitGate?: boolean;
  /**
   * Tool-first pathless analysis — empty WHERE is admissible only when Product
   * stamped bounded non-mutating analysis (no invented documentary/Git target).
   */
  readonly allowEmptyScopeForBoundedNonMutatingAnalysis?: boolean;
}):
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const paths = input.scopeIn
    .map((p) => p.trim())
    .filter((p) => p.length > 0 && !p.includes(" "));
  if (paths.length === 0) {
    if (input.allowEmptyScopeForBoundedNonMutatingAnalysis === true) {
      return { ok: true };
    }
    return {
      ok: false,
      code: "MISSION_SCOPE_EMPTY",
      message:
        "Périmètre mission vide — WHERE non enforceable ; autorisation refusée.",
    };
  }
  const outside = pathsOutsideAuthorizedPathRoot({
    paths,
    pathRoot: input.pathRoot,
  });
  if (outside.length > 0) {
    return {
      ok: false,
      code: "MISSION_SCOPE_OUTSIDE_PATH_ROOT",
      message: `Chemins hors pathRoot autorisé : ${outside.join(", ")}.`,
    };
  }
  if (input.allowProtectedWithExplicitGate !== true) {
    const protectedHits = paths.filter((p) =>
      Boolean(classifyStudioProductProtectedPath(p)),
    );
    if (protectedHits.length > 0) {
      return {
        ok: false,
        code: "PROTECTED_PATH_GATE_REQUIRED",
        message: `Chemin protégé dans le périmètre — gate Morris applicable : ${protectedHits.join(", ")}.`,
      };
    }
  }
  return { ok: true };
}

/**
 * Revalidate materiality against CURRENT Product at Confirm/Authorize.
 * Stamp is historical witness only — never sole authority.
 */
export async function revalidateMaterialityAgainstCurrentProduct(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly analysis: IntentAnalysisDto;
  readonly cycleInstanceId?: string | null;
  readonly stampedMateriality: string | null;
  readonly stampedCurrentness: ProductMaterialityCurrentness | null;
}): Promise<
  | {
      readonly ok: true;
      readonly current: AuthoritativeMaterialityResolution;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly current?: AuthoritativeMaterialityResolution;
    }
> {
  const current = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis: input.analysis,
    cycleInstanceId: input.cycleInstanceId,
  });

  // Live Product facts required for currentness compares. Binding STALE must be
  // detectable even when productContextSufficient is false (e.g. pathRoot moved
  // so mission paths fall outside the new root — CR-P6-CLOSURE-01 A02).
  if (!current.liveReadOk || !current.facts.productCurrentness) {
    return {
      ok: false,
      code: "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
      message:
        "Contexte Product courant indisponible — matérialité non requalifiable (fail-closed).",
      current,
    };
  }

  if (input.stampedCurrentness) {
    const s = input.stampedCurrentness;
    const c = current.facts.productCurrentness;
    if (
      s.lpsVersion !== c.lpsVersion ||
      s.doctrineDigest !== c.doctrineDigest ||
      s.activeCycleInstanceId !== c.activeCycleInstanceId ||
      s.projectId !== c.projectId
    ) {
      return {
        ok: false,
        code: "MATERIALITY_CURRENTNESS_STALE",
        message:
          "LPS / doctrine / cycle actifs ont changé depuis PREPARE — réinspection et requalification requises.",
        current,
      };
    }

    // CR-P6-CLOSURE-01 — repository binding may change WITHOUT lpsVersion bump
    // (Product repository-binding projection retired). Stamp pathRoot/identity are authoritative
    // witnesses of the prepare-time Product binding; compare independently of LPS.
    const stampedIdentity = s.repositoryIdentity?.trim() || null;
    const currentIdentity = c.repositoryIdentity?.trim() || null;
    const stampedRoot = normalizePathRoot(s.pathRoot);
    const currentRoot = normalizePathRoot(c.pathRoot);
    const prepareBoundGit = stampedIdentity !== null || stampedRoot !== null;

    if (prepareBoundGit) {
      if (stampedIdentity !== null && currentIdentity === null) {
        return {
          ok: false,
          code: "REPOSITORY_BINDING_UNAVAILABLE",
          message:
            "Repository binding Product courant indisponible — autorisation fail-closed.",
          current,
        };
      }
      if (stampedIdentity !== currentIdentity) {
        return {
          ok: false,
          code: "REPOSITORY_BINDING_STALE",
          message:
            "Repository identity Product a changé depuis PREPARE (LPS inchangé possible) — réinspection et requalification requises.",
          current,
        };
      }
      if (stampedRoot !== currentRoot) {
        return {
          ok: false,
          code: "REPOSITORY_BINDING_STALE",
          message:
            "pathRoot Product a changé depuis PREPARE — réinspection et requalification requises.",
          current,
        };
      }
    }
  }

  if (!current.productContextSufficient) {
    return {
      ok: false,
      code: "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
      message:
        "Contexte Product courant insuffisant pour requalifier NON_STRUCTURAL (fail-closed).",
      current,
    };
  }

  if (
    input.stampedMateriality != null &&
    input.stampedMateriality !== current.assessment.materiality
  ) {
    return {
      ok: false,
      code: "MATERIALITY_CURRENT_MISMATCH",
      message: `Matérialité courante (${current.assessment.materiality}) diverge du stamp PREPARE (${input.stampedMateriality}) — autorisation refusée.`,
      current,
    };
  }

  if (current.assessment.materiality !== "non_structural") {
    return {
      ok: false,
      code:
        current.assessment.materiality === "unknown"
          ? "MATERIALITY_UNKNOWN"
          : "MATERIALITY_STRUCTURAL",
      message:
        current.assessment.materiality === "unknown"
          ? "Matérialité courante indéterminée — HumanDecision ou clarification requise."
          : "Matérialité courante structurelle — HumanDecision Pilote requise.",
      current,
    };
  }

  // WHERE enforcement at authorize time (CR-P6-03).
  // Pathless bounded non-mutating analysis may have empty concreteMissionPaths.
  const allowEmptyScope =
    current.facts.boundedNonMutatingAnalysis === true &&
    current.facts.structuralTruthBasis.startsWith(
      "bounded_non_mutating_analysis:",
    );
  const scopeCheck = assertAuthorizedMissionScopeEnforceable({
    scopeIn: current.facts.concreteMissionPaths,
    pathRoot: current.facts.productCurrentness?.pathRoot ?? null,
    allowEmptyScopeForBoundedNonMutatingAnalysis: allowEmptyScope,
  });
  if (!scopeCheck.ok) {
    return {
      ok: false,
      code: scopeCheck.code,
      message: scopeCheck.message,
      current,
    };
  }

  return { ok: true, current };
}

/** Reconstruct a minimal analysis from stamped prepare inputs for revalidation. */
export function analysisStubFromMaterialityFacts(
  facts: Record<string, unknown> | null | undefined,
  contractInputs: Record<string, unknown> | null | undefined,
): IntentAnalysisDto {
  const modelSignals =
    facts && typeof facts.modelSignals === "object" && facts.modelSignals
      ? (facts.modelSignals as {
          structuralChange?: boolean;
          securityImpact?: boolean;
          architectureImpact?: boolean;
          dataImpact?: boolean;
          irreversible?: boolean;
        })
      : null;
  const scopeIn = Array.isArray(contractInputs?.scopeIn)
    ? (contractInputs!.scopeIn as string[])
    : Array.isArray(facts?.concreteMissionPaths)
      ? (facts!.concreteMissionPaths as string[])
      : [];
  const protectedHits = Array.isArray(facts?.protectedPathHits)
    ? (facts!.protectedPathHits as string[])
    : [];
  const bounded =
    facts?.boundedNonMutatingAnalysis === true ||
    (typeof facts?.structuralTruthBasis === "string" &&
      facts.structuralTruthBasis.startsWith("bounded_non_mutating_analysis:"));
  const intentKind =
    bounded && scopeIn.length === 0
      ? "read_only"
      : scopeIn.length > 0
        ? "other"
        : "other";
  const stub = {
    parseOk: true,
    intentClass: "actionable" as const,
    candidateCycleTypeId: null,
    signals: {
      structuralChange: modelSignals?.structuralChange === true,
      securityImpact: modelSignals?.securityImpact === true,
      architectureImpact: modelSignals?.architectureImpact === true,
      dataImpact: modelSignals?.dataImpact === true,
      irreversible: modelSignals?.irreversible === true,
      lowRiskBounded: false,
    },
    cognitiveWorkload: null,
    contradictionCandidate:
      facts?.contradictionConflictPresent === true
        ? {
            conflictPresent: true,
            claimedEvidenceIds: [],
          }
        : null,
    challengeResponseAssessment: "sufficient" as const,
    objective:
      typeof contractInputs?.objective === "string"
        ? contractInputs.objective
        : "",
    scope:
      typeof contractInputs?.missionScopeNarrative === "string"
        ? contractInputs.missionScopeNarrative
        : scopeIn[0] ?? "",
    rephrasedRequest:
      typeof contractInputs?.objective === "string"
        ? contractInputs.objective
        : "",
    outOfScope: Array.isArray(contractInputs?.scopeOut)
      ? (contractInputs!.scopeOut as string[])
      : [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome:
      typeof contractInputs?.expectedOutcome === "string"
        ? contractInputs.expectedOutcome
        : "",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind,
      scopeIn: scopeIn.length > 0 ? scopeIn : protectedHits,
      scopeOut: [],
    } as IntentAnalysisDto["executionIntent"],
  };
  if (bounded && scopeIn.length === 0) {
    return {
      ...stub,
      repositoryMutationDeclared: "none" as const,
    } as IntentAnalysisDto;
  }
  return stub;
}

export function parseStampedProductCurrentness(
  facts: Record<string, unknown> | null | undefined,
): ProductMaterialityCurrentness | null {
  const raw = facts?.productCurrentness;
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  if (
    typeof o.lpsId !== "string" ||
    typeof o.lpsVersion !== "number" ||
    typeof o.doctrineDigest !== "string" ||
    typeof o.projectId !== "string" ||
    typeof o.assessedAtIso !== "string"
  ) {
    return null;
  }
  return {
    lpsId: o.lpsId,
    lpsVersion: o.lpsVersion,
    doctrineDigest: o.doctrineDigest,
    activeCycleInstanceId:
      typeof o.activeCycleInstanceId === "string"
        ? o.activeCycleInstanceId
        : null,
    projectId: o.projectId,
    pathRoot: typeof o.pathRoot === "string" ? o.pathRoot : null,
    repositoryIdentity:
      typeof o.repositoryIdentity === "string" ? o.repositoryIdentity : null,
    assessedAtIso: o.assessedAtIso,
  };
}
