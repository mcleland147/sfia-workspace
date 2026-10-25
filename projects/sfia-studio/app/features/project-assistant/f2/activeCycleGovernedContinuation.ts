/**
 * CORR-PROOF-07 — distinguish NEW_CYCLE_FORMALIZATION vs
 * ACTIVE_CYCLE_GOVERNED_CONTINUATION vs ACTIVE_CYCLE_CONTINUATION_BLOCKED
 * for artifact materialization.
 *
 * Server-owned, fail-closed. No parallel planner / persistence.
 * continuationKind / executionIntent remain NON-AUTHORITATIVE hints —
 * durable active-cycle + (CURRENT REQUIRE_ARTIFACT OR canonical Artifact
 * APPLICABLE & not SATISFIED) admit the Proposal/clarification branch.
 * APPLICABILITY ≠ execution authority: Proposal HumanDecision remains
 * required before any ExecutionContract (ACTIVE-CYCLE-ARTIFACT-
 * APPLICABILITY-CONTINUATION-BRIDGE-CORR-01).
 *
 * CR-07-01..06 review fixes:
 * - pathRoot bounds effective scopeIn (never Nora-widened)
 * - repo-relative target validation (no traversal / absolute)
 * - never invent reversibilityExpectation
 * - continuationKind required; a retired specialized document-write effect
 *   is not an admission (fail-closed or generic PREPARE)
 * - recognized continuation + durable failure → BLOCKED (never silent createCycle)
 * - contradictory requestedOperation → BLOCKED (never silent rewrite)
 * - accepted continuation: server-owned generalist surface only
 */

import type { HumanDecision } from "@/lib/oa/decision";
import {
  obligationPolicySubjectFor,
  OBLIGATION_POLICY_REQUIRE_ARTIFACT,
  type CycleInstance,
} from "@/lib/oa/cycle";
import type { Project } from "@/lib/oa/project";
import { projectWorkspacePathRootFromKey } from "@/lib/oa/project/domain/projectWorkspaceKey";
import {
  assessProjectWorkspaceCollision,
  classifyArtifactWriteMode,
  hasDurableSameArtifactEvidence,
  resolveArtifactTargetUnderCycleWorkspace,
  isSafeArtifactFileNameLeaf,
  extractArtifactFileNameCandidate,
} from "@/lib/oa/project/domain/artifactTargetRouting";
import { isValidProjectWorkspaceKey } from "@/lib/oa/project/domain/projectWorkspaceKey";

type WorkspacePathRoot = {
  pathRoot?: string | null;
  identity?: string | null;
  remoteUrl?: string | null;
  defaultBranch?: string | null;
  provider?: string | null;
  baseSha?: string | null;
};
import {
  listManagedRepoPathsUnderRoot,
  probeManagedRepoRelativePathExists,
} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
import type { ProjectAssistantContextDto } from "../types";
import { classifyHumanDecisionLifecycle } from "./studioCognitiveContext";
import type { ExecutionIntentPayload } from "./executionIntentSchema";
import {
  F2_ARTIFACT_MATERIALIZATION_CAPABILITIES,
  F2_ARTIFACT_MATERIALIZATION_OPERATION,
} from "./f2CanonicalOperations";
import type { F2ContinuationKind, IntentAnalysisDto } from "./types";

/**
 * Automatic Project workspace roots are exactly `projects/<workspace-key>`.
 * Legacy roots (docs/, projects/sfia-studio/.sandbox, …) keep prior clamp semantics.
 */
export function isAutomaticProjectWorkspacePathRoot(pathRoot: string): boolean {
  const n = normalizeRepoRelativePath(pathRoot);
  if (!n) return false;
  const parts = n.split("/");
  return (
    parts.length === 2 &&
    parts[0] === "projects" &&
    isValidProjectWorkspaceKey(parts[1]!)
  );
}

/** Re-export canonical constants (single source: f2CanonicalOperations). */
export {
  F2_ARTIFACT_MATERIALIZATION_CAPABILITIES,
  F2_ARTIFACT_MATERIALIZATION_OPERATION,
};

/** Minimal OA surface for continuation resolution — avoids V2 runtime barrel import. */
export type ActiveCycleContinuationOa = {
  readonly cycleServices: {
    readonly getCycle: {
      execute(input: {
        cycleInstanceId: string;
      }): Promise<
        | { ok: true; cycle: CycleInstance }
        | { ok: false; error: { detailCode: string; message: string } }
      >;
    };
    readonly pilotLifecycle: {
      assess(input: {
        cycleInstanceId: string;
        projectId: string;
      }): Promise<
        | {
            ok: true;
            assessment: {
              obligations: ReadonlyArray<{ family: string; status: string }>;
            };
          }
        | { ok: false }
      >;
    };
  };
  readonly decisionServices: {
    readonly decisions: {
      listByProject(projectId: string): Promise<HumanDecision[]>;
    };
  };
  readonly projectServices: {
    readonly getProject: {
      execute(input: {
        projectId: string;
      }): Promise<
        | {
            ok: true;
            project: {
              projectId: string;
              projectWorkspaceKey?: string;
            };
          }
        | { ok: false }
      >;
    };
    readonly listProjects: {
      execute(): Promise<
        | { ok: true; projects: readonly Project[] }
        | { ok: false }
      >;
    };
  };
  readonly evidenceReviewServices?: {
    readonly repository: {
      listByProject(projectId: string): Promise<
        ReadonlyArray<{ location?: string; source?: string }>
      >;
    };
  };
};

/** Explicit Product routing modes — must not be collapsed into one boolean. */
export type F2RoutingMode =
  | "NEW_CYCLE_FORMALIZATION"
  | "ACTIVE_CYCLE_GOVERNED_CONTINUATION"
  | "ACTIVE_CYCLE_CONTINUATION_BLOCKED"
  | "NOT_GOVERNED_FORMALIZATION";

export type { F2ContinuationKind };

export const F2_CONTINUATION_KINDS = [
  "active_cycle_artifact_materialization",
] as const;

export type ContinuationBlockedReason =
  | "no_active_cycle"
  | "cycle_load_failed"
  | "active_cycle_not_active"
  | "no_require_artifact"
  | "artifact_already_satisfied"
  | "lifecycle_assess_failed"
  | "incompatible_execution_intent"
  | "workspace_collision_ambiguous";

export type ActiveCycleContinuationClarificationReason =
  | "target_unresolved"
  | "workspace_collision_ambiguous"
  | "artifact_write_mode_ask"
  | "repository_fact_unavailable";

export function parseContinuationKind(
  raw: unknown,
):
  | { ok: true; value: F2ContinuationKind }
  | { ok: false; reason: string } {
  if (raw === null || raw === undefined) {
    return { ok: true, value: null };
  }
  if (typeof raw !== "string") {
    return { ok: false, reason: "continuation_kind_invalid" };
  }
  const t = raw.trim();
  if (!t) return { ok: true, value: null };
  if ((F2_CONTINUATION_KINDS as readonly string[]).includes(t)) {
    return {
      ok: true,
      value: t as Exclude<F2ContinuationKind, null>,
    };
  }
  return { ok: false, reason: "continuation_kind_unknown" };
}

/**
 * Pure repo-relative path normalize.
 * Rejects absolute paths and any ".." segment. No silent rewrite.
 */
export function normalizeRepoRelativePath(raw: string): string | null {
  const n = raw.replace(/\\/g, "/").replace(/^\.\//, "").replace(/\/+$/, "");
  if (!n || n.startsWith("/")) return null;
  const segs = n.split("/");
  if (segs.some((seg) => seg === ".." || seg === "")) return null;
  return n;
}

/** target == pathRoot or a real descendant after normalize — never traversal. */
export function isPathWithinRoot(
  targetRaw: string,
  pathRootRaw: string,
): boolean {
  const target = normalizeRepoRelativePath(targetRaw);
  const root = normalizeRepoRelativePath(pathRootRaw);
  if (!target || !root) return false;
  return target === root || target.startsWith(`${root}/`);
}

/** Explicit Artifact continuation hint (non-authoritative alone). */
export function hasExplicitArtifactContinuationKind(
  analysis: IntentAnalysisDto,
): boolean {
  return analysis.continuationKind === "active_cycle_artifact_materialization";
}

function normalizeIntentHaystack(parts: readonly (string | null | undefined)[]): string {
  return parts
    .filter((s): s is string => typeof s === "string" && s.trim().length > 0)
    .join("\n")
    .normalize("NFC")
    .toLowerCase()
    .replace(/[àáâäã]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôöõ]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/ç/g, "c");
}

/**
 * Explicit NEW_CYCLE formalization phrasing (NON-AUTHORITATIVE).
 * CI-HQA-F01 — « Prépare un cycle … pour livrer la note » must not be treated
 * as active-cycle Artifact continuation: the cycle is the prepare object;
 * a future deliverable mention does not invent an active cycle.
 */
export function hasExplicitNewCycleFormalizationSignal(
  analysis: IntentAnalysisDto,
): boolean {
  const hay = normalizeIntentHaystack([
    analysis.objective,
    analysis.rephrasedRequest,
    analysis.executionIntent?.artifactBrief,
  ]);
  if (!hay) return false;
  // Cycle as direct object of prepare/create/start verbs.
  if (
    /\b(prepare|preparer|creer|demarrer|lancer|proposer)\s+(un\s+|le\s+|ce\s+|nouveau\s+)?cycle\b/.test(
      hay,
    )
  ) {
    return true;
  }
  if (
    /\b(nouveau cycle|preparation d[' ]?un cycle|formalisation (du|d[' ]un) cycle)\b/.test(
      hay,
    )
  ) {
    return true;
  }
  return false;
}

/**
 * CORR-01 / P6 C9 — natural active-cycle deliverable materialization signal from
 * analysis text fields (NON-AUTHORITATIVE). Used so a missing continuationKind
 * does not silently fall to NEW_CYCLE_FORMALIZATION when the Pilote asked to
 * produce the cycle deliverable in the repository without engine jargon.
 *
 * Must NOT match vague talk-about-deliverable alone.
 * Must NOT match explicit NEW_CYCLE preparation (CI-HQA-F01).
 * Must NOT require the stem « materialis* » (F-C9-04).
 * Durable active-cycle + Artifact gates remain authoritative at resolve time.
 */
export function hasNaturalActiveCycleDeliverableMaterializationSignal(
  analysis: IntentAnalysisDto,
): boolean {
  if (!analysis.parseOk) return false;
  if (
    analysis.intentClass !== "actionable" &&
    analysis.intentClass !== "execution_request"
  ) {
    return false;
  }
  const hay = normalizeIntentHaystack([
    analysis.objective,
    analysis.rephrasedRequest,
    analysis.executionIntent?.artifactBrief,
    analysis.executionIntent?.targetPath,
    ...(analysis.executionIntent?.contentRequirements ?? []),
  ]);

  // Refuse pure conversational / question framing.
  if (
    /\b(parlons|parler|qu'est[- ]ce|explique|expliquer|explique-moi)\b/.test(
      hay,
    ) ||
    /\?\s*$/.test(hay.trim())
  ) {
    return false;
  }

  // Explicit cycle preparation stays on NEW_CYCLE_FORMALIZATION — never Artifact
  // continuation (which fail-closes with no_active_cycle and skips createCycle).
  if (hasExplicitNewCycleFormalizationSignal(analysis)) {
    return false;
  }

  const productionVerb =
    /\bmaterialis/.test(hay) ||
    /\b(produire|produis|ecrire|rediger|deposer|creer|prepare|preparer)\b/.test(
      hay,
    );
  const documentaryObject =
    /\b(livrable|fichier|document|note|markdown|\.md\b|specification|cahier|memoire)\b/.test(
      hay,
    );
  const repoOrDeliverableFrame =
    /\b(depot|repo|repository|git|workspace|projet|cycle|reference|consolide|attendu|emplacement)\b/.test(
      hay,
    ) || Boolean(analysis.executionIntent?.targetPath?.trim());

  if (!productionVerb || !documentaryObject) return false;
  if (!repoOrDeliverableFrame) return false;
  return true;
}

/**
 * Enter Artifact-continuation handling when either the explicit hint is set
 * OR a natural active-cycle deliverable materialization signal is present.
 * Durable active-cycle + (REQUIRE_ARTIFACT policy OR canonical Artifact
 * APPLICABLE unsatisfied) remain the Proposal-path admission truths —
 * never execution authority.
 */
export function shouldEnterActiveCycleArtifactContinuationHandling(
  analysis: IntentAnalysisDto,
): boolean {
  return (
    hasExplicitArtifactContinuationKind(analysis) ||
    hasNaturalActiveCycleDeliverableMaterializationSignal(analysis)
  );
}

/**
 * Blank/null/undefined after trim is not a contradictory operation.
 * Any non-empty value is not a Product-admitted specialized operation.
 */
export function isBlankOrCanonicalDocsWriteOperation(raw: unknown): boolean {
  if (raw === null || raw === undefined) return true;
  if (typeof raw !== "string") return false;
  return raw.trim().length === 0;
}

/**
 * Specialized document-write effect is not a Product admission.
 * Always false: explicit continuation kinds fail closed; natural documentary
 * signals yield to NEW_CYCLE_FORMALIZATION and generic PREPARE / generalist.
 */
export function hasCompatibleDocsWriteMaterializationEffect(
  _analysis: IntentAnalysisDto,
): boolean {
  return false;
}

/**
 * Fully qualified semantic Artifact materialization continuation:
 * continuationKind AND a Product-admitted materialization effect.
 * A retired specialized document-write kind is never sufficient.
 */
export function isQualifiedArtifactMaterializationContinuation(
  analysis: IntentAnalysisDto,
): boolean {
  return (
    hasExplicitArtifactContinuationKind(analysis) &&
    hasCompatibleDocsWriteMaterializationEffect(analysis)
  );
}

/**
 * @deprecated Prefer isQualifiedArtifactMaterializationContinuation.
 * Kept as alias for callers that meant the qualified gate.
 */
export function isGovernedArtifactMaterializationIntent(
  analysis: IntentAnalysisDto,
): boolean {
  return isQualifiedArtifactMaterializationContinuation(analysis);
}

/**
 * CURRENT HumanDecision on the exact active cycle selecting REQUIRE_ARTIFACT.
 * Reuses CORR-PROOF-06 subject + lifecycle classification.
 */
export function hasCurrentRequireArtifactObligation(input: {
  activeCycleInstanceId: string;
  decisions: readonly HumanDecision[];
}): boolean {
  const subject = obligationPolicySubjectFor(input.activeCycleInstanceId);
  return input.decisions.some(
    (d) =>
      d.subject === subject &&
      d.selectedOptionId === OBLIGATION_POLICY_REQUIRE_ARTIFACT &&
      classifyHumanDecisionLifecycle(d.status) === "CURRENT",
  );
}

/** Projection-shaped variant for studio cognitive context (lifecycle already classified). */
export function hasCurrentRequireArtifactOnProjection(input: {
  activeCycleInstanceId: string;
  decisions: ReadonlyArray<{
    subject: string;
    selectedOptionId?: string | null;
    lifecycle: "CURRENT" | "PENDING" | "NON_ACTIVE";
  }>;
}): boolean {
  const subject = obligationPolicySubjectFor(input.activeCycleInstanceId);
  return input.decisions.some(
    (d) =>
      d.lifecycle === "CURRENT" &&
      d.subject === subject &&
      d.selectedOptionId === OBLIGATION_POLICY_REQUIRE_ARTIFACT,
  );
}

function artifactObligationSatisfied(
  assessment: {
    obligations: ReadonlyArray<{
      family: string;
      status: string;
    }>;
  } | null,
): boolean {
  if (!assessment) return false;
  const art = assessment.obligations.find((o) => o.family === "artifact");
  return art?.status === "SATISFIED";
}

/**
 * CORR-BRIDGE-01 — canonical Artifact is already required (APPLICABLE) and not
 * yet satisfied. Sufficient to open Proposal/clarification on the active cycle;
 * NEVER grants ExecutionContract / HumanDecision authority by itself.
 */
export function hasCanonicalArtifactApplicableUnsatisfied(assessment: {
  obligations: ReadonlyArray<{
    family: string;
    status: string;
    applicability?: string;
  }>;
} | null): boolean {
  if (!assessment) return false;
  const art = assessment.obligations.find((o) => o.family === "artifact");
  if (!art) return false;
  if (art.applicability !== "APPLICABLE") return false;
  return art.status !== "SATISFIED";
}

/**
 * Admit active-cycle Artifact continuation into Proposal/clarification when
 * either a CURRENT REQUIRE_ARTIFACT policy HD exists (historical path for
 * UNKNOWN/NOT_APPLICABLE → required) OR the canonical assessment already
 * marks Artifact APPLICABLE and not SATISFIED (F14 obligation snapshot).
 * Does NOT invent HD; does NOT authorize EC.
 */
export function admitsActiveCycleArtifactMaterializationContinuation(input: {
  activeCycleInstanceId: string;
  decisions: readonly HumanDecision[];
  assessment: {
    obligations: ReadonlyArray<{
      family: string;
      status: string;
      applicability?: string;
    }>;
  } | null;
}): boolean {
  if (
    hasCurrentRequireArtifactObligation({
      activeCycleInstanceId: input.activeCycleInstanceId,
      decisions: input.decisions,
    })
  ) {
    return true;
  }
  return hasCanonicalArtifactApplicableUnsatisfied(input.assessment);
}

export type ActiveCycleContinuationResolution =
  | {
      readonly mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION";
      readonly activeCycle: CycleInstance;
      readonly repositoryBinding: WorkspacePathRoot | null;
      readonly needsTargetClarification: boolean;
      readonly clarificationReason?: ActiveCycleContinuationClarificationReason;
      readonly enrichedExecutionIntent: ExecutionIntentPayload | null;
    }
  | {
      readonly mode: "ACTIVE_CYCLE_CONTINUATION_BLOCKED";
      readonly reason: ContinuationBlockedReason;
      readonly activeCycle: CycleInstance | null;
    }
  | {
      readonly mode: "NEW_CYCLE_FORMALIZATION";
      readonly reason:
        | "no_materialization_intent"
        | "no_compatible_artifact_effect";
    };

/**
 * P6-HQA-F05-GD4-01 — Artifact-continuation handling recognized a materialization
 * signal, but no closure obligation (CURRENT REQUIRE_ARTIFACT / APPLICABLE
 * unsatisfied) is established. This is NOT an Artifact governed continuation
 * and MUST NOT invent a HumanDecision. It is also NOT NEW_CYCLE_FORMALIZATION.
 * Orchestration may qualify the ordinary documentary mission via Generic PREPARE
 * when Product readiness/materiality allow — other BLOCKED reasons stay exclusive.
 */
export function isOptionalDocumentaryWithoutClosureArtifactBlock(
  resolution: ActiveCycleContinuationResolution,
): boolean {
  return (
    resolution.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED" &&
    resolution.reason === "no_require_artifact"
  );
}

function blocked(
  reason: ContinuationBlockedReason,
  activeCycle: CycleInstance | null = null,
): ActiveCycleContinuationResolution {
  return { mode: "ACTIVE_CYCLE_CONTINUATION_BLOCKED", reason, activeCycle };
}

/**
 * Resolve whether formalization-ready turn is:
 * - active-cycle artifact materialization continuation (skip createCycle),
 * - blocked continuation (skip createCycle),
 * - or historical new-cycle formalization.
 */
export async function resolveActiveCycleGovernedContinuation(input: {
  project: ProjectAssistantContextDto;
  analysis: IntentAnalysisDto;
  oa: ActiveCycleContinuationOa;
}): Promise<ActiveCycleContinuationResolution> {
  // CR-07-04 / CR-07-05 / CORR-01 — enter Artifact-continuation handling when
  // explicit continuationKind OR natural active-cycle deliverable materialization
  // signal is present. A retired specialized kind alone stays historical NEW_CYCLE.
  // Recognized continuation + no admitted effect → BLOCKED (never silent createCycle).
  if (!shouldEnterActiveCycleArtifactContinuationHandling(input.analysis)) {
    return { mode: "NEW_CYCLE_FORMALIZATION", reason: "no_materialization_intent" };
  }

  // D-ER-16…19 — NATURAL documentary signal is not Artifact continuation.
  // It yields to NEW_CYCLE_FORMALIZATION where orchestration may route to
  // Generic PREPARE / generalist (no specialized admission). An EXPLICIT
  // continuationKind without an admitted effect stays BLOCKED
  // incompatible_execution_intent — never silent createCycle.
  if (!hasCompatibleDocsWriteMaterializationEffect(input.analysis)) {
    if (hasExplicitArtifactContinuationKind(input.analysis)) {
      return blocked("incompatible_execution_intent");
    }
    return {
      mode: "NEW_CYCLE_FORMALIZATION",
      reason: "no_compatible_artifact_effect",
    };
  }

  const activeId = input.project.activeCycleInstanceId ?? null;
  if (!activeId) {
    return blocked("no_active_cycle");
  }

  const cycleLoad = await input.oa.cycleServices.getCycle.execute({
    cycleInstanceId: activeId,
  });
  if (!cycleLoad.ok) {
    return blocked("cycle_load_failed");
  }
  const activeCycle = cycleLoad.cycle;
  if (activeCycle.projectId !== input.project.projectId) {
    return blocked("cycle_load_failed", activeCycle);
  }
  if (activeCycle.status !== "active") {
    return blocked("active_cycle_not_active", activeCycle);
  }

  const decisions = await input.oa.decisionServices.decisions.listByProject(
    input.project.projectId,
  );

  // CR-07-05 — assess failure is FAIL-CLOSED (not "probably missing").
  // Evidence repository throws during assess must not escape as an uncaught error.
  // Assess BEFORE the obligation gate so canonical Artifact APPLICABLE (F14
  // snapshot) can admit continuation without a redundant REQUIRE_ARTIFACT HD.
  let assessed: Awaited<
    ReturnType<typeof input.oa.cycleServices.pilotLifecycle.assess>
  >;
  try {
    assessed = await input.oa.cycleServices.pilotLifecycle.assess({
      cycleInstanceId: activeId,
      projectId: input.project.projectId,
    });
  } catch {
    return blocked("lifecycle_assess_failed", activeCycle);
  }
  if (!assessed.ok) {
    return blocked("lifecycle_assess_failed", activeCycle);
  }
  if (artifactObligationSatisfied(assessed.assessment)) {
    return blocked("artifact_already_satisfied", activeCycle);
  }

  // CORR-BRIDGE-01 — CURRENT REQUIRE_ARTIFACT HD OR canonical APPLICABLE+missing.
  // UNKNOWN / NOT_APPLICABLE without policy HD → fail-closed no_require_artifact.
  // Applicability never invents HD and never authorizes EC.
  if (
    !admitsActiveCycleArtifactMaterializationContinuation({
      activeCycleInstanceId: activeId,
      decisions,
      assessment: assessed.assessment,
    })
  ) {
    return blocked("no_require_artifact", activeCycle);
  }

  // Documentary WHERE is projects/<workspaceKey> from the durable key.
  // Never read a Product repository-binding record.
  let repositoryBinding: WorkspacePathRoot | null = null;
  let projectWorkspaceKey: string | undefined;
  const proj = await input.oa.projectServices.getProject.execute({
    projectId: input.project.projectId,
  });
  if (proj.ok) {
    projectWorkspaceKey = proj.project.projectWorkspaceKey;
    const pathRoot = projectWorkspacePathRootFromKey(projectWorkspaceKey);
    repositoryBinding = pathRoot ? { pathRoot, identity: null } : null;
  }

  const enriched = enrichExecutionIntentFromBinding({
    analysisIntent: input.analysis.executionIntent,
    binding: repositoryBinding,
    activeCycleTypeId: activeCycle.cycleTypeId,
  });

  if (enriched.needsTargetClarification) {
    return {
      mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
      activeCycle,
      repositoryBinding,
      needsTargetClarification: true,
      clarificationReason: "target_unresolved",
      enrichedExecutionIntent: enriched.executionIntent,
    };
  }

  // CR-PWR-03 — workspace collision before first materialization (automatic roots).
  // Automatic Product workspaces require a readable managed-repo fact (UNKNOWN ≠ ABSENT).
  const pathRoot = repositoryBinding?.pathRoot?.trim() || "";
  const isAutomaticRoot =
    Boolean(pathRoot) && isAutomaticProjectWorkspacePathRoot(pathRoot);
  const managedBase = resolveManagedRepoRootBaseFromEnv();

  if (isAutomaticRoot && repositoryBinding?.identity) {
    if (!managedBase) {
      return {
        mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
        activeCycle,
        repositoryBinding,
        needsTargetClarification: true,
        clarificationReason: "repository_fact_unavailable",
        enrichedExecutionIntent: {
          ...(enriched.executionIntent ?? {}),
          intentKind: "other",
          targetPath: enriched.executionIntent?.targetPath ?? null,
          artifactWriteMode: "ASK",
        },
      };
    }

    const collision = await qualifyProjectWorkspaceCollision({
      oa: input.oa,
      projectId: input.project.projectId,
      pathRoot,
      workspaceKey: projectWorkspaceKey,
      identity: repositoryBinding.identity,
      managedRepoRootBase: managedBase,
    });
    if (
      collision === "ambiguous_collision" ||
      collision === "unknown_inventory"
    ) {
      return {
        mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
        activeCycle,
        repositoryBinding,
        needsTargetClarification: true,
        clarificationReason:
          collision === "unknown_inventory"
            ? "repository_fact_unavailable"
            : "workspace_collision_ambiguous",
        enrichedExecutionIntent: {
          ...(enriched.executionIntent ?? {}),
          intentKind: "other",
          targetPath: null,
          artifactWriteMode: "ASK",
        },
      };
    }
  }

  // CR-PWR-02 — repository existence + Evidence same-deliverable → CREATE/UPDATE/ASK.
  // Automatic Product workspace: UNKNOWN repo fact MUST fail closed (never null→CREATE).
  const targetPath = enriched.executionIntent?.targetPath?.trim() || "";
  let withMode: ExecutionIntentPayload = { ...(enriched.executionIntent ?? {}) };

  if (isAutomaticRoot && repositoryBinding?.identity) {
    if (!managedBase || !targetPath) {
      return {
        mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
        activeCycle,
        repositoryBinding,
        needsTargetClarification: true,
        clarificationReason: "repository_fact_unavailable",
        enrichedExecutionIntent: {
          ...withMode,
          intentKind: "other",
          artifactWriteMode: "ASK",
        },
      };
    }

    const targetExists = probeManagedRepoRelativePathExists({
      identity: repositoryBinding.identity,
      repoRelativePath: targetPath,
      managedRepoRootBase: managedBase,
    });

    if (targetExists === null) {
      return {
        mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
        activeCycle,
        repositoryBinding,
        needsTargetClarification: true,
        clarificationReason: "repository_fact_unavailable",
        enrichedExecutionIntent: {
          ...withMode,
          intentKind: "other",
          artifactWriteMode: "ASK",
        },
      };
    }

    let intentClearlySameDeliverable: boolean | undefined;
    if (targetExists === true) {
      let evidenceList: ReadonlyArray<{
        type?: string;
        source?: string;
        sourceKind?: string;
        location?: string;
        status?: string;
        availability?: string;
        bindings?: { projectId?: string };
      }> = [];
      let evidenceReadOk = false;
      if (input.oa.evidenceReviewServices) {
        try {
          evidenceList =
            await input.oa.evidenceReviewServices.repository.listByProject(
              input.project.projectId,
            );
          evidenceReadOk = true;
        } catch {
          evidenceReadOk = false;
        }
      }
      if (!evidenceReadOk) {
        intentClearlySameDeliverable = false;
      } else {
        intentClearlySameDeliverable = hasDurableSameArtifactEvidence({
          projectId: input.project.projectId,
          targetPath,
          evidence: evidenceList,
        });
      }
    }

    const artifactWriteMode = classifyArtifactWriteMode({
      targetExists,
      intentClearlySameDeliverable,
    });
    withMode = { ...withMode, artifactWriteMode };

    if (artifactWriteMode === "ASK") {
      return {
        mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
        activeCycle,
        repositoryBinding,
        needsTargetClarification: true,
        clarificationReason: "artifact_write_mode_ask",
        enrichedExecutionIntent: withMode,
      };
    }
  }

  return {
    mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
    activeCycle,
    repositoryBinding,
    needsTargetClarification: false,
    enrichedExecutionIntent: withMode,
  };
}

/**
 * CR-PWR-03 — ownership only from durable Project/Evidence truths.
 * Slug match alone is never ownership. Directory existence alone is never ownership.
 * UNKNOWN inventory / failed listProjects / failed Evidence on occupied tree → not absent_ok.
 */
async function qualifyProjectWorkspaceCollision(input: {
  oa: ActiveCycleContinuationOa;
  projectId: string;
  pathRoot: string;
  workspaceKey: string | undefined;
  identity: string;
  managedRepoRootBase: string;
}): Promise<
  | "absent_ok"
  | "reuse_same_project"
  | "ambiguous_collision"
  | "unknown_inventory"
> {
  const inventory = listManagedRepoPathsUnderRoot({
    identity: input.identity,
    pathRoot: input.pathRoot,
    managedRepoRootBase: input.managedRepoRootBase,
  });
  // CR-PWR-03 — UNKNOWN ≠ ABSENT.
  if (inventory === null) {
    return "unknown_inventory";
  }

  const listed = await input.oa.projectServices.listProjects.execute();
  if (!listed.ok) {
    if (inventory.length > 0) return "ambiguous_collision";
    return "unknown_inventory";
  }

  const otherClaimants = listed.projects.filter((p) => {
    if (p.projectId === input.projectId) return false;
    if (input.workspaceKey && p.projectWorkspaceKey === input.workspaceKey) {
      return true;
    }
    const otherRoot =
      projectWorkspacePathRootFromKey(p.projectWorkspaceKey) ?? "";
    return otherRoot === input.pathRoot;
  });
  if (otherClaimants.length > 0) {
    return "ambiguous_collision";
  }

  if (inventory.length === 0) {
    return "absent_ok";
  }

  if (!input.oa.evidenceReviewServices) {
    return "ambiguous_collision";
  }
  let durableOwnershipMatches = false;
  try {
    const evidence =
      await input.oa.evidenceReviewServices.repository.listByProject(
        input.projectId,
      );
    durableOwnershipMatches = evidence.some((ev) => {
      const loc = (ev.location ?? "").trim();
      if (!loc) return false;
      return isPathWithinRoot(loc, input.pathRoot);
    });
  } catch {
    return "ambiguous_collision";
  }

  return assessProjectWorkspaceCollision({
    projectPathRoot: input.pathRoot,
    existingRepoRelativePaths: inventory,
    durableOwnershipMatches,
  });
}

/**
 * CR-07-06 — after acceptance, action + capabilities are server-owned for this seam.
 * Never preserve provider-arbitrary requestedOperation / requiredCapabilities.
 * TECHNICAL CAPABILITY ≠ EXECUTION AUTHORITY.
 */
function withCanonicalArtifactMaterializationAction(
  payload: ExecutionIntentPayload,
): ExecutionIntentPayload {
  const kind = payload.intentKind;
  const intentKind = kind === "read_only" || kind === "other" ? kind : "other";
  return {
    ...payload,
    intentKind,
    requestedOperation: null,
    requiredCapabilities: [...F2_ARTIFACT_MATERIALIZATION_CAPABILITIES],
  };
}

/**
 * Bound Nora-proposed path/scope to authoritative binding + cycle workspace.
 * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01:
 * - leaf filename / artifactFileName → server composes exact target under cycle root
 * - full in-bounds target accepted
 * - out-of-bounds / missing filename → clarify (fail-closed)
 * Never invent identity; never widen pathRoot via scopeIn (CR-07-01);
 * never invent reversibility (CR-07-03).
 */
export function enrichExecutionIntentFromBinding(input: {
  analysisIntent: ExecutionIntentPayload | null;
  binding: WorkspacePathRoot | null;
  /** Active cycle type id — used to resolve stable repositoryWorkspaceSegment. */
  activeCycleTypeId?: string | null;
}): {
  executionIntent: ExecutionIntentPayload | null;
  needsTargetClarification: boolean;
} {
  const base: ExecutionIntentPayload = {
    ...(input.analysisIntent ?? {}),
    intentKind:
      input.analysisIntent?.intentKind === "read_only" ||
      input.analysisIntent?.intentKind === "other"
        ? input.analysisIntent.intentKind
        : "other",
  };

  // CORR-PROOF-09 — unsourced affirmative reversibility is never trusted fact
  const rawRev = base.reversibilityExpectation;
  const reversibilityExpectation: "unknown" | null =
    rawRev === "unknown" ? "unknown" : null;

  if (!input.binding) {
    return {
      executionIntent: withCanonicalArtifactMaterializationAction({
        ...base,
        targetRepositoryRef: null,
        reversibilityExpectation,
        scopeIn: [],
      }),
      needsTargetClarification: true,
    };
  }

  const rawRoot = input.binding.pathRoot?.trim() || "";
  const canonicalRoot = rawRoot ? normalizeRepoRelativePath(rawRoot) : null;
  if (rawRoot && !canonicalRoot) {
    return {
      executionIntent: withCanonicalArtifactMaterializationAction({
        ...base,
        intentKind: "other",
        targetRepositoryRef: input.binding.identity,
        targetPath: null,
        scopeIn: [],
        reversibilityExpectation,
      }),
      needsTargetClarification: true,
    };
  }

  if (!canonicalRoot) {
    return {
      executionIntent: withCanonicalArtifactMaterializationAction({
        ...base,
        intentKind: "other",
        targetRepositoryRef: input.binding.identity,
        targetPath: null,
        scopeIn: [],
        reversibilityExpectation,
      }),
      needsTargetClarification: true,
    };
  }

  const cycleTypeId = input.activeCycleTypeId?.trim() || "";
  const cycleDef = cycleTypeId ? getCycleTypeById(cycleTypeId) : undefined;
  const segment = cycleDef?.repositoryWorkspaceSegment?.trim() || "";

  // New automatic Project workspaces (projects/<key>) use cycle segment routing.
  // Legacy pathRoots (docs/, sandbox, …) keep prior pathRoot∩target semantics.
  if (segment && isAutomaticProjectWorkspacePathRoot(canonicalRoot)) {
    const routed = resolveArtifactTargetUnderCycleWorkspace({
      projectPathRoot: canonicalRoot,
      repositoryWorkspaceSegment: segment,
      artifactFileName: base.artifactFileName,
      proposedTargetPath: base.targetPath,
    });
    if (!routed.ok) {
      return {
        executionIntent: withCanonicalArtifactMaterializationAction({
          ...base,
          intentKind: "other",
          targetRepositoryRef: input.binding.identity,
          targetPath: null,
          scopeIn: [routed.cycleRoot ?? canonicalRoot],
          reversibilityExpectation,
        }),
        needsTargetClarification: true,
      };
    }
    return {
      executionIntent: withCanonicalArtifactMaterializationAction({
        ...base,
        intentKind: "other",
        targetRepositoryRef: input.binding.identity,
        targetPath: routed.targetPath,
        artifactFileName: routed.artifactFileName,
        scopeIn: [routed.cycleRoot],
        reversibilityExpectation,
      }),
      needsTargetClarification: false,
    };
  }

  // Legacy binding (or cycle segment unavailable): pathRoot-only clamp.
  // D-PC-09: Nora/Pilot leaf candidate is non-authoritative; server composes exact path.
  const effectiveScopeIn: string[] = [canonicalRoot];
  const proposedPath = base.targetPath?.trim() || "";
  let targetPath: string | null = null;
  let needsClarification = false;
  let sealedLeaf: string | null = null;

  if (!proposedPath) {
    const leaf = extractArtifactFileNameCandidate({
      artifactFileName: base.artifactFileName,
      targetPath: null,
    });
    if (leaf && isSafeArtifactFileNameLeaf(leaf)) {
      const composed = normalizeRepoRelativePath(`${canonicalRoot}/${leaf}`);
      if (composed && isPathWithinRoot(composed, canonicalRoot)) {
        targetPath = composed;
        sealedLeaf = leaf;
      } else {
        needsClarification = true;
      }
    } else {
      needsClarification = true;
    }
  } else {
    const normalizedTarget = normalizeRepoRelativePath(proposedPath);
    if (!normalizedTarget || !isPathWithinRoot(proposedPath, canonicalRoot)) {
      needsClarification = true;
      targetPath = null;
    } else {
      targetPath = normalizedTarget;
      sealedLeaf = extractArtifactFileNameCandidate({
        artifactFileName: base.artifactFileName,
        targetPath: normalizedTarget,
      });
    }
  }

  const out: ExecutionIntentPayload = withCanonicalArtifactMaterializationAction({
    ...base,
    intentKind: "other",
    targetRepositoryRef: input.binding.identity,
    targetPath,
    ...(sealedLeaf ? { artifactFileName: sealedLeaf } : {}),
    scopeIn: effectiveScopeIn,
    reversibilityExpectation,
  });

  return {
    executionIntent: out,
    needsTargetClarification: needsClarification,
  };
}

/** Prefer LPS active id over any non-active candidate parasite. */
export function preferActiveCycleOverParasite(input: {
  activeCycleInstanceId: string | null | undefined;
  parasiteCandidateIds: readonly string[];
}): string | null {
  const active = input.activeCycleInstanceId?.trim() || null;
  if (!active) return null;
  void input.parasiteCandidateIds;
  return active;
}

export function continuationBlockedMessage(
  reason: ContinuationBlockedReason,
  activeCycleId: string | null,
): string {
  const cycleHint = activeCycleId
    ? ` Cycle concerné: ${activeCycleId}.`
    : "";
  switch (reason) {
    case "no_active_cycle":
      return `Continuation Artifact demandée, mais aucun cycle actif n'est disponible.${cycleHint} Aucun nouveau CycleInstance créé. Clarifiez / démarrez le cycle approprié avant matérialisation.`;
    case "cycle_load_failed":
      return `Continuation Artifact demandée, mais le cycle actif n'a pas pu être vérifié.${cycleHint} Aucun nouveau CycleInstance créé.`;
    case "active_cycle_not_active":
      return `Continuation Artifact demandée, mais le cycle référencé n'est pas actif.${cycleHint} Aucun nouveau CycleInstance créé.`;
    case "no_require_artifact":
      // Fallback only — ordinary documentary missions should route to Generic
      // PREPARE (P6-HQA-F05-GD4-01) before this message is shown.
      return `Cette demande documentaire n'est pas établie comme obligation Artifact de clôture du cycle actif.${cycleHint} Aucune HumanDecision artificielle. Aucun nouveau CycleInstance créé.`;
    case "artifact_already_satisfied":
      return `Le livrable requis du cycle actif est déjà satisfait — cette matérialisation n'est plus une obligation ouverte.${cycleHint} Aucun nouveau CycleInstance créé.`;
    case "lifecycle_assess_failed":
      return `Continuation Artifact demandée, mais l'évaluation Pilot lifecycle a échoué (fail-closed).${cycleHint} Aucun nouveau CycleInstance créé.`;
    case "incompatible_execution_intent":
      return `Continuation Artifact signalée, mais aucun effet de matérialisation admis n'est présent.${cycleHint} La spécialisation documentaire n'est pas une admission Product — utiliser PREPARE générique. Aucun nouveau CycleInstance créé.`;
    case "workspace_collision_ambiguous":
      return `Workspace Project déjà présent sans preuve d'appartenance durable — collision ambiguë.${cycleHint} Aucune Proposal exécutable. Aucun nouveau CycleInstance créé.`;
  }
}
