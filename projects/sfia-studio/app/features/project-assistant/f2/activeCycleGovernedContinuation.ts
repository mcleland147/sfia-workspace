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
import type { ProjectRepositoryBinding } from "@/lib/oa/project";
import type { ProjectAssistantContextDto } from "../types";
import { classifyHumanDecisionLifecycle } from "./studioCognitiveContext";
import type { ExecutionIntentPayload } from "./executionIntentSchema";
import type { F2ContinuationKind, IntentAnalysisDto } from "./types";

/** Server-owned action for this Artifact materialization seam (TECHNICAL ≠ AUTHORITY). */
export const F2_ARTIFACT_MATERIALIZATION_OPERATION =
  "cursor.docs_write.apply" as const;

/** Server-owned capability set for this Artifact materialization seam. */
export const F2_ARTIFACT_MATERIALIZATION_CAPABILITIES = [
  "cap:cursor.docs_write",
] as const;

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
            project: { repositoryBinding?: ProjectRepositoryBinding };
          }
        | { ok: false }
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
  | "incompatible_execution_intent";

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

  // Fail-closed on contradictory ops at executionIntent OR analysis surface.
  if (!isBlankOrCanonicalDocsWriteOperation(ei.requestedOperation)) {
    return false;
  }
  if (!isBlankOrCanonicalDocsWriteOperation(analysis.requestedOperation)) {
    return false;
  }

  if (ei.intentKind === "docs_write") return true;
  const op = (ei.requestedOperation ?? analysis.requestedOperation ?? "").trim();
  return op === F2_ARTIFACT_MATERIALIZATION_OPERATION;
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
  const assessed = await input.oa.cycleServices.pilotLifecycle.assess({
    cycleInstanceId: activeId,
    projectId: input.project.projectId,
  });
  if (!assessed.ok) {
    return blocked("lifecycle_assess_failed", activeCycle);
  }
  if (artifactObligationSatisfied(assessed.assessment)) {
    return blocked("artifact_already_satisfied", activeCycle);
  }

  // Authoritative Project.repositoryBinding — never invent a second SoT.
  let repositoryBinding: ProjectRepositoryBinding | null = null;
  const proj = await input.oa.projectServices.getProject.execute({
    projectId: input.project.projectId,
  });
  if (proj.ok) {
    repositoryBinding = proj.project.repositoryBinding ?? null;
  }

  const enriched = enrichExecutionIntentFromBinding({
    analysisIntent: input.analysis.executionIntent,
    binding: repositoryBinding,
  });

  return {
    mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
    activeCycle,
    repositoryBinding,
    needsTargetClarification: enriched.needsTargetClarification,
    enrichedExecutionIntent: enriched.executionIntent,
  };
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
 * Bound Nora-proposed path/scope to authoritative binding.
 * Never invent identity/path; never widen pathRoot via scopeIn (CR-07-01);
 * never accept traversal targets (CR-07-02); never invent reversibility (CR-07-03);
 * never preserve contradictory / arbitrary action or capabilities (CR-07-06).
 */
export function enrichExecutionIntentFromBinding(input: {
  analysisIntent: ExecutionIntentPayload | null;
  binding: ProjectRepositoryBinding | null;
}): {
  executionIntent: ExecutionIntentPayload | null;
  needsTargetClarification: boolean;
} {
  const base: ExecutionIntentPayload = {
    ...(input.analysisIntent ?? {}),
    intentKind: input.analysisIntent?.intentKind ?? "docs_write",
  };

  // CR-07-03 — preserve sourced reversibility only; never invent "reversible".
  const reversibilityExpectation =
    base.reversibilityExpectation === "reversible" ||
    base.reversibilityExpectation === "irreversible" ||
    base.reversibilityExpectation === "unknown"
      ? base.reversibilityExpectation
      : base.reversibilityExpectation === null
        ? null
        : undefined;

  if (!input.binding) {
    return {
      executionIntent: withCanonicalArtifactMaterializationAction({
        ...base,
        targetRepositoryRef: null,
        ...(reversibilityExpectation !== undefined
          ? { reversibilityExpectation }
          : { reversibilityExpectation: null }),
        scopeIn: [],
      }),
      needsTargetClarification: true,
    };
  }

  const rawRoot = input.binding.pathRoot?.trim() || "";
  const canonicalRoot = rawRoot ? normalizeRepoRelativePath(rawRoot) : null;
  // Invalid pathRoot on binding → fail closed (clarify), do not invent.
  if (rawRoot && !canonicalRoot) {
    return {
      executionIntent: withCanonicalArtifactMaterializationAction({
        ...base,
        intentKind: "docs_write",
        targetRepositoryRef: input.binding.identity,
        targetPath: null,
        scopeIn: [],
        ...(reversibilityExpectation !== undefined
          ? { reversibilityExpectation }
          : { reversibilityExpectation: null }),
      }),
      needsTargetClarification: true,
    };
  }

  // CR-07-01 — effective scopeIn is authoritative pathRoot only.
  // MODEL ∩ BINDING = binding bound; Nora must never widen.
  const effectiveScopeIn: string[] = canonicalRoot ? [canonicalRoot] : [];

  const proposedPath = base.targetPath?.trim() || "";
  let targetPath: string | null = null;
  let needsClarification = false;

  if (!proposedPath) {
    needsClarification = true;
  } else if (!canonicalRoot) {
    // Binding without usable pathRoot — cannot authorize a write target.
    needsClarification = true;
  } else {
    const normalizedTarget = normalizeRepoRelativePath(proposedPath);
    if (!normalizedTarget || !isPathWithinRoot(proposedPath, canonicalRoot)) {
      // Hostile / out-of-bounds — null target, no silent rewrite (CR-07-02).
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
  });

  if (reversibilityExpectation !== undefined) {
    out.reversibilityExpectation = reversibilityExpectation;
  } else {
    out.reversibilityExpectation = null;
  }

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
  }
}
