/**
 * CORR-PROOF-07 — distinguish NEW_CYCLE_FORMALIZATION vs
 * ACTIVE_CYCLE_GOVERNED_CONTINUATION vs ACTIVE_CYCLE_CONTINUATION_BLOCKED
 * for artifact materialization.
 *
 * Server-owned, fail-closed. No parallel planner / persistence.
 * continuationKind / executionIntent remain NON-AUTHORITATIVE hints —
 * durable active-cycle + CURRENT REQUIRE_ARTIFACT authorize the branch.
 *
 * CR-07-01..06 review fixes:
 * - pathRoot bounds effective scopeIn (never Nora-widened)
 * - repo-relative target validation (no traversal / absolute)
 * - never invent reversibilityExpectation
 * - continuationKind required AND docs_write-compatible effect
 * - recognized continuation + durable failure → BLOCKED (never silent createCycle)
 * - docs_write + contradictory requestedOperation → BLOCKED (never silent rewrite)
 * - accepted continuation: server-owned action + capabilities only
 */

import type { HumanDecision } from "@/lib/oa/decision";
import {
  obligationPolicySubjectFor,
  OBLIGATION_POLICY_REQUIRE_ARTIFACT,
  type CycleInstance,
} from "@/lib/oa/cycle";
import type { Project, ProjectRepositoryBinding } from "@/lib/oa/project";
import {
  assessProjectWorkspaceCollision,
  classifyArtifactWriteMode,
  hasDurableSameArtifactEvidence,
  resolveArtifactTargetUnderCycleWorkspace,
} from "@/lib/oa/project/domain/artifactTargetRouting";
import { isValidProjectWorkspaceKey } from "@/lib/oa/project/domain/projectWorkspaceKey";
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
              repositoryBinding?: ProjectRepositoryBinding;
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
 * Pure repo-relative path normalize — mirrors GCEC docs_write normalizeRel
 * (fakeDocsWriteLaunchPort) without importing the launch port.
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

/**
 * CR-07-06 — blank/null/undefined OR exact cursor.docs_write.apply after trim.
 * Any other non-empty value is contradictory (never silently rewritten).
 */
export function isBlankOrCanonicalDocsWriteOperation(raw: unknown): boolean {
  if (raw === null || raw === undefined) return true;
  if (typeof raw !== "string") return false;
  const t = raw.trim();
  return t.length === 0 || t === F2_ARTIFACT_MATERIALIZATION_OPERATION;
}

/**
 * Compatible materialization effect (non-authoritative alone).
 * CORR-PROOF-09 CR-09-02 — requires dedicated artifactMaterializationOperation
 * === cursor.docs_write.apply. Generic requestedOperation surfaces stay free-form
 * elsewhere but must be blank or exact-canonical here (contradiction → fail-closed).
 * CR-07-06 — intentKind=docs_write never overrides a contradictory requestedOperation.
 */
export function hasCompatibleDocsWriteMaterializationEffect(
  analysis: IntentAnalysisDto,
): boolean {
  if (!analysis.parseOk) return false;
  if (
    analysis.intentClass !== "actionable" &&
    analysis.intentClass !== "execution_request"
  ) {
    return false;
  }
  const ei = analysis.executionIntent;
  if (!ei) return false;
  if (ei.intentKind !== "docs_write") return false;

  // Dedicated Artifact discriminator (producer-schema enum|null only).
  if (
    analysis.artifactMaterializationOperation !==
    F2_ARTIFACT_MATERIALIZATION_OPERATION
  ) {
    return false;
  }

  // Generic surfaces: blank/null OR exact canonical — never contradict.
  if (!isBlankOrCanonicalDocsWriteOperation(ei.requestedOperation)) {
    return false;
  }
  if (!isBlankOrCanonicalDocsWriteOperation(analysis.requestedOperation)) {
    return false;
  }

  return true;
}

/**
 * Fully qualified semantic Artifact materialization continuation:
 * continuationKind AND docs_write-compatible effect.
 * docs_write alone is NEVER sufficient (CR-07-04).
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

export type ActiveCycleContinuationResolution =
  | {
      readonly mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION";
      readonly activeCycle: CycleInstance;
      readonly repositoryBinding: ProjectRepositoryBinding | null;
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
      readonly reason: "no_materialization_intent";
    };

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
  // CR-07-04 / CR-07-05 — explicit continuationKind starts Artifact-continuation
  // handling. Without it, docs_write alone stays historical NEW_CYCLE.
  if (!hasExplicitArtifactContinuationKind(input.analysis)) {
    return { mode: "NEW_CYCLE_FORMALIZATION", reason: "no_materialization_intent" };
  }

  // Kind present but effect incompatible → BLOCK (never createCycle).
  if (!hasCompatibleDocsWriteMaterializationEffect(input.analysis)) {
    return blocked("incompatible_execution_intent");
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
  if (
    !hasCurrentRequireArtifactObligation({
      activeCycleInstanceId: activeId,
      decisions,
    })
  ) {
    return blocked("no_require_artifact", activeCycle);
  }

  // CR-07-05 — assess failure is FAIL-CLOSED (not "probably missing").
  // Evidence repository throws during assess must not escape as an uncaught error.
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

  // Authoritative Project.repositoryBinding — never invent a second SoT.
  let repositoryBinding: ProjectRepositoryBinding | null = null;
  let projectWorkspaceKey: string | undefined;
  const proj = await input.oa.projectServices.getProject.execute({
    projectId: input.project.projectId,
  });
  if (proj.ok) {
    repositoryBinding = proj.project.repositoryBinding ?? null;
    projectWorkspaceKey = proj.project.projectWorkspaceKey;
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
          intentKind: "docs_write",
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
          intentKind: "docs_write",
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
          intentKind: "docs_write",
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
          intentKind: "docs_write",
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
    const otherRoot = p.repositoryBinding?.pathRoot?.trim() || "";
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
  return {
    ...payload,
    intentKind: "docs_write",
    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
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
  binding: ProjectRepositoryBinding | null;
  /** Active cycle type id — used to resolve stable repositoryWorkspaceSegment. */
  activeCycleTypeId?: string | null;
}): {
  executionIntent: ExecutionIntentPayload | null;
  needsTargetClarification: boolean;
} {
  const base: ExecutionIntentPayload = {
    ...(input.analysisIntent ?? {}),
    intentKind: input.analysisIntent?.intentKind ?? "docs_write",
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
        intentKind: "docs_write",
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
        intentKind: "docs_write",
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
          intentKind: "docs_write",
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
        intentKind: "docs_write",
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
  const effectiveScopeIn: string[] = [canonicalRoot];
  const proposedPath = base.targetPath?.trim() || "";
  let targetPath: string | null = null;
  let needsClarification = false;

  if (!proposedPath) {
    needsClarification = true;
  } else {
    const normalizedTarget = normalizeRepoRelativePath(proposedPath);
    if (!normalizedTarget || !isPathWithinRoot(proposedPath, canonicalRoot)) {
      needsClarification = true;
      targetPath = null;
    } else {
      targetPath = normalizedTarget;
    }
  }

  const out: ExecutionIntentPayload = withCanonicalArtifactMaterializationAction({
    ...base,
    intentKind: "docs_write",
    targetRepositoryRef: input.binding.identity,
    targetPath,
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
      return `Continuation Artifact demandée, mais aucune décision CURRENT REQUIRE_ARTIFACT n'est ouverte sur le cycle actif.${cycleHint} Aucun nouveau CycleInstance créé.`;
    case "artifact_already_satisfied":
      return `Le livrable requis du cycle actif est déjà satisfait — cette matérialisation n'est plus une obligation ouverte.${cycleHint} Aucun nouveau CycleInstance créé.`;
    case "lifecycle_assess_failed":
      return `Continuation Artifact demandée, mais l'évaluation Pilot lifecycle a échoué (fail-closed).${cycleHint} Aucun nouveau CycleInstance créé.`;
    case "incompatible_execution_intent":
      return `Continuation Artifact signalée, mais l'intention d'effet docs_write compatible est absente.${cycleHint} Aucune proposition de matérialisation. Aucun nouveau CycleInstance créé.`;
    case "workspace_collision_ambiguous":
      return `Workspace Project déjà présent sans preuve d'appartenance durable — collision ambiguë.${cycleHint} Aucune Proposal exécutable. Aucun nouveau CycleInstance créé.`;
  }
}
