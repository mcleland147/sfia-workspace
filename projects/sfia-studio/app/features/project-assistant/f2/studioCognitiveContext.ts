/**
 * CORR-PROOF-04 Option D — Hybrid Context Envelope (composer-first slice).
 *
 * Pure / read-only Studio cognitive context composition for ordinary F1.
 * Assembles authoritative Project/LPS + method/CKC + conditional HD/Evidence/
 * ReviewBundle + conditional ProjectTrajectory when readable.
 *
 * MUST NOT: call a model, score maturity, select trajectory, create HD/Evidence/
 * Cycle/LPS mutations, invent Recommendations, or become a second planner.
 */

import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
import type { ProjectTrajectory } from "@/lib/oa/cycle";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ProjectAssistantContextDto } from "../types";
import type { IntentAnalysisDto } from "./types";
import {
  composeAdvisoryMethodContext,
  type AdvisoryMethodContext,
} from "./methodOrientation";

/** Conservative composition budgets — implementation policy, not doctrine. */
export const STUDIO_COGNITIVE_CONTEXT_BUDGET = Object.freeze({
  maxDecisions: 8,
  maxEvidence: 8,
  maxReviewBundles: 4,
  decisionSubjectChars: 160,
  decisionOptionChars: 120,
  evidenceLabelChars: 120,
  reviewLabelChars: 120,
  trajectoryStepChars: 100,
  maxTrajectorySteps: 6,
});

export type PresenceState = "PRESENT" | "NONE" | "UNAVAILABLE";
export type TrajectoryPresenceState =
  | "PRESENT"
  | "ABSENT"
  | "DEFERRED"
  | "UNAVAILABLE";

export type StudioProjectTruthProjection = {
  readonly projectId: string;
  readonly name: string;
  readonly objective: string;
  readonly context: string;
  readonly constraints: readonly string[];
  readonly criticality: string;
  readonly shortReference: string | null;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly activeCycleInstanceId: string | null;
  readonly doctrineId: string;
  readonly doctrineVersion: string;
  readonly doctrineStatus: string;
};

/**
 * Deterministic cognitive lifecycle for HumanDecision.
 * Derived from existing domain contract only (see domain-mapping.md).
 * PRESENT ≠ CURRENT.
 */
export type DecisionCognitiveLifecycle = "CURRENT" | "PENDING" | "NON_ACTIVE";

/**
 * Domain-derived mapping (CORR-PROOF-04 status-aware):
 * - accepted → CURRENT (findAcceptedBySubject / supersede writes accepted)
 * - amended → CURRENT (MW5 CONSUMED_HD_STATUSES; supersedable like accepted)
 * - proposed | required → PENDING (supersedable but not accepted)
 * - refused | superseded | revoked → NON_ACTIVE (terminal / history)
 */
export function classifyHumanDecisionLifecycle(
  status: HumanDecision["status"],
): DecisionCognitiveLifecycle {
  switch (status) {
    case "accepted":
    case "amended":
      return "CURRENT";
    case "proposed":
    case "required":
      return "PENDING";
    case "refused":
    case "superseded":
    case "revoked":
      return "NON_ACTIVE";
    default: {
      const _exhaustive: never = status;
      void _exhaustive;
      return "NON_ACTIVE";
    }
  }
}

export type StudioDecisionProjection = {
  readonly subject: string;
  readonly selectedOptionLabel: string | null;
  /** Raw domain HumanDecisionStatus — always preserved. */
  readonly status: HumanDecision["status"];
  /** Deterministic cognitive class — never invents beyond domain mapping. */
  readonly lifecycle: DecisionCognitiveLifecycle;
  readonly effectiveAt: string;
  readonly reversible: boolean;
  readonly supersedesPresent: boolean;
};

/**
 * Deterministic epistemic stance from Evidence status/availability/freshness.
 * Does NOT claim which proposition is proven. Presence ≠ Fact.
 */
export type EvidenceEpistemicStance =
  | "STRONGER_SUPPORT"
  | "LIMITED_SUPPORT"
  | "PENDING_SUPPORT"
  | "WEAKENED_SUPPORT"
  | "NON_SUPPORTING"
  | "UNCERTAIN_SUPPORT";

export function classifyEvidenceEpistemicStance(input: {
  status: Evidence["status"];
  availability: Evidence["availability"];
  freshness: Evidence["freshness"] | null | undefined;
}): EvidenceEpistemicStance {
  const { status, availability, freshness } = input;
  if (
    status === "rejected" ||
    status === "superseded" ||
    status === "unavailable" ||
    availability === "unavailable"
  ) {
    return "NON_SUPPORTING";
  }
  if (status === "stale" || freshness === "stale") {
    return "WEAKENED_SUPPORT";
  }
  if (status === "expected") {
    return "PENDING_SUPPORT";
  }
  if (availability === "unknown" || freshness === "unknown") {
    return "UNCERTAIN_SUPPORT";
  }
  if (status === "verified" && availability === "available") {
    return "STRONGER_SUPPORT";
  }
  if (status === "incomplete" || status === "available") {
    return "LIMITED_SUPPORT";
  }
  return "UNCERTAIN_SUPPORT";
}

export type StudioEvidenceProjection = {
  readonly type: string;
  /** Raw EvidenceStatus — always preserved. */
  readonly status: Evidence["status"];
  /** Raw EvidenceAvailability — always preserved. */
  readonly availability: Evidence["availability"];
  /** Raw freshness when present. */
  readonly freshness: Evidence["freshness"] | null;
  readonly sourceKind: string;
  readonly producedAt: string | null;
  /** Deterministic stance — never converts Evidence into Fact. */
  readonly epistemicStance: EvidenceEpistemicStance;
};

export type StudioReviewProjection = {
  readonly status: string;
  readonly evidenceRefCount: number;
  readonly completeness: string;
  readonly supersedesPresent: boolean;
  readonly createdAt: string;
};

export type StudioTrajectoryProjection = {
  readonly status: string;
  readonly version: number;
  readonly stepSummaries: readonly string[];
  readonly decidedByDecisionPresent: boolean;
};

export type StudioCognitiveContext = {
  readonly projectTruth: StudioProjectTruthProjection;
  readonly method: AdvisoryMethodContext;
  readonly decisions: {
    readonly state: PresenceState;
    readonly items: readonly StudioDecisionProjection[];
  };
  readonly evidence: {
    readonly state: PresenceState;
    readonly items: readonly StudioEvidenceProjection[];
  };
  readonly review: {
    readonly state: PresenceState;
    readonly items: readonly StudioReviewProjection[];
  };
  readonly trajectory: {
    readonly state: TrajectoryPresenceState;
    readonly current: StudioTrajectoryProjection | null;
  };
  readonly limits: {
    readonly oaAvailable: boolean;
    readonly truthOutranksConversation: true;
    readonly composerDoesNotScoreMaturity: true;
    readonly composerDoesNotSelectTrajectory: true;
  };
};

function clip(text: string, max: number): string {
  const compact = text.replace(/\s+/g, " ").trim();
  return compact.length <= max ? compact : `${compact.slice(0, max - 1)}…`;
}

function projectDecision(d: HumanDecision): StudioDecisionProjection {
  const selected =
    d.options.find((o) => o.optionId === d.selectedOptionId)?.label ?? null;
  return Object.freeze({
    subject: clip(d.subject, STUDIO_COGNITIVE_CONTEXT_BUDGET.decisionSubjectChars),
    selectedOptionLabel: selected
      ? clip(selected, STUDIO_COGNITIVE_CONTEXT_BUDGET.decisionOptionChars)
      : null,
    status: d.status,
    lifecycle: classifyHumanDecisionLifecycle(d.status),
    effectiveAt: d.effectiveAt,
    reversible: d.reversible,
    supersedesPresent: Boolean(d.supersedes),
  });
}

function projectEvidence(e: Evidence): StudioEvidenceProjection {
  const freshness = e.freshness ?? null;
  return Object.freeze({
    type: e.type,
    status: e.status,
    availability: e.availability,
    freshness,
    sourceKind: e.sourceKind,
    producedAt: e.producedAt ?? null,
    epistemicStance: classifyEvidenceEpistemicStance({
      status: e.status,
      availability: e.availability,
      freshness,
    }),
  });
}

function projectReview(r: ReviewBundle): StudioReviewProjection {
  return Object.freeze({
    status: r.status,
    evidenceRefCount: r.evidenceRefs.length,
    completeness: r.completeness,
    supersedesPresent: Boolean(r.supersedesReviewBundleId),
    createdAt: r.createdAt,
  });
}

function projectTrajectory(t: ProjectTrajectory): StudioTrajectoryProjection {
  const steps = t.steps
    .slice(0, STUDIO_COGNITIVE_CONTEXT_BUDGET.maxTrajectorySteps)
    .map((s) =>
      clip(
        `${s.order}:${s.label}[${s.state}]`,
        STUDIO_COGNITIVE_CONTEXT_BUDGET.trajectoryStepChars,
      ),
    );
  return Object.freeze({
    status: t.status,
    version: t.version,
    stepSummaries: Object.freeze(steps),
    decidedByDecisionPresent: Boolean(t.decidedByDecisionRef),
  });
}

/**
 * Read-only composition. No provider call. No persistence. No Recommendation.
 */
export async function composeStudioCognitiveContext(input: {
  analysis: IntentAnalysisDto;
  project: ProjectAssistantContextDto;
  registryRoot: string;
  truthCContext?: string | null;
  oa: RuntimeOaStack | null;
  activeCycleInstanceId?: string | null;
}): Promise<StudioCognitiveContext> {
  const method = composeAdvisoryMethodContext({
    analysis: input.analysis,
    project: input.project,
    registryRoot: input.registryRoot,
  });

  const contextBody =
    input.truthCContext != null && input.truthCContext !== ""
      ? input.truthCContext
      : input.project.contextSummary;

  const projectTruth: StudioProjectTruthProjection = Object.freeze({
    projectId: input.project.projectId,
    name: input.project.name,
    objective: input.project.objective,
    context: contextBody,
    constraints: Object.freeze([...input.project.constraints]),
    criticality: input.project.criticality,
    shortReference: input.project.shortReference ?? null,
    lpsId: input.project.lpsId,
    lpsVersion: input.project.lpsVersion,
    activeCycleInstanceId:
      input.activeCycleInstanceId ??
      input.project.activeCycleInstanceId ??
      null,
    doctrineId: input.project.doctrineId,
    doctrineVersion: input.project.doctrineVersion,
    doctrineStatus: input.project.doctrineStatus,
  });

  if (!input.oa) {
    return Object.freeze({
      projectTruth,
      method,
      decisions: Object.freeze({ state: "UNAVAILABLE" as const, items: Object.freeze([]) }),
      evidence: Object.freeze({ state: "UNAVAILABLE" as const, items: Object.freeze([]) }),
      review: Object.freeze({ state: "UNAVAILABLE" as const, items: Object.freeze([]) }),
      trajectory: Object.freeze({
        state: "UNAVAILABLE" as const,
        current: null,
      }),
      limits: Object.freeze({
        oaAvailable: false,
        truthOutranksConversation: true as const,
        composerDoesNotScoreMaturity: true as const,
        composerDoesNotSelectTrajectory: true as const,
      }),
    });
  }

  const oa = input.oa;
  const budget = STUDIO_COGNITIVE_CONTEXT_BUDGET;
  const projectId = input.project.projectId;

  let decisionsState: PresenceState = "NONE";
  let decisionItems: StudioDecisionProjection[] = [];
  try {
    const history = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
    });
    if (!history.ok) {
      decisionsState = "UNAVAILABLE";
    } else if (history.decisions.length === 0) {
      decisionsState = "NONE";
    } else {
      decisionsState = "PRESENT";
      const sorted = [...history.decisions].sort((a, b) =>
        b.effectiveAt.localeCompare(a.effectiveAt),
      );
      decisionItems = sorted.slice(0, budget.maxDecisions).map(projectDecision);
    }
  } catch {
    decisionsState = "UNAVAILABLE";
  }

  let evidenceState: PresenceState = "NONE";
  let evidenceItems: StudioEvidenceProjection[] = [];
  try {
    const listed =
      await oa.evidenceReviewServices.repository.listByProject(projectId);
    if (listed.length === 0) {
      evidenceState = "NONE";
    } else {
      evidenceState = "PRESENT";
      evidenceItems = listed.slice(0, budget.maxEvidence).map(projectEvidence);
    }
  } catch {
    evidenceState = "UNAVAILABLE";
  }

  let reviewState: PresenceState = "NONE";
  let reviewItems: StudioReviewProjection[] = [];
  try {
    const listed =
      await oa.evidenceReviewServices.reviewBundleRepository.listByProject(
        projectId,
      );
    if (listed.length === 0) {
      reviewState = "NONE";
    } else {
      reviewState = "PRESENT";
      reviewItems = listed
        .slice(0, budget.maxReviewBundles)
        .map(projectReview);
    }
  } catch {
    reviewState = "UNAVAILABLE";
  }

  let trajectoryState: TrajectoryPresenceState = "ABSENT";
  let trajectoryCurrent: StudioTrajectoryProjection | null = null;
  try {
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    if (traj.ok) {
      trajectoryState = "PRESENT";
      trajectoryCurrent = projectTrajectory(traj.trajectory);
    } else if (traj.error?.detailCode === "TRAJECTORY_NOT_FOUND") {
      trajectoryState = "ABSENT";
    } else {
      trajectoryState = "UNAVAILABLE";
    }
  } catch {
    trajectoryState = "UNAVAILABLE";
  }

  return Object.freeze({
    projectTruth,
    method,
    decisions: Object.freeze({
      state: decisionsState,
      items: Object.freeze(decisionItems),
    }),
    evidence: Object.freeze({
      state: evidenceState,
      items: Object.freeze(evidenceItems),
    }),
    review: Object.freeze({
      state: reviewState,
      items: Object.freeze(reviewItems),
    }),
    trajectory: Object.freeze({
      state: trajectoryState,
      current: trajectoryCurrent,
    }),
    limits: Object.freeze({
      oaAvailable: true,
      truthOutranksConversation: true as const,
      composerDoesNotScoreMaturity: true as const,
      composerDoesNotSelectTrajectory: true as const,
    }),
  });
}

/**
 * Render StudioCognitiveContext into F1 system-prompt sections.
 * Business-first; no digests / repository mechanics / F1-F2-MW5 jargon.
 */
export function buildStudioCognitivePromptSections(
  ctx: StudioCognitiveContext,
): string[] {
  const lines: string[] = [
    "=== STUDIO COGNITIVE CONTEXT (autorité / guidance séparées) ===",
    "Présence d'un enregistrement ≠ autorité courante / fait établi.",
    "Autorité projet courante = Truth C / LPS courant + HumanDecisions CURRENT (effective).",
    "Evidence = support épistémique (poids selon status/availability/freshness) — jamais un Fact automatique.",
    "DoctrinePackage/CKC = guidance méthodologique seulement — ne remplace jamais la vérité projet.",
    "Conversation = continuité ; outrankée par vérité Project courante + doctrine Studio.",
    "Recommendation / ProjectTrajectory ≠ HumanDecision sauf décision séparée.",
    "Ne réécris pas l'historique Session. Ne score pas de bande de maturité comme fait.",
    "",
  ];

  lines.push("— Vérité projet (Truth C / LPS) —");
  lines.push(`Nom : ${ctx.projectTruth.name}`);
  lines.push(`Objectif : ${ctx.projectTruth.objective}`);
  lines.push(`Contexte : ${ctx.projectTruth.context}`);
  lines.push(
    `Contraintes : ${
      ctx.projectTruth.constraints.length > 0
        ? ctx.projectTruth.constraints.join("; ")
        : "(aucune)"
    }`,
  );
  lines.push(`Criticité : ${ctx.projectTruth.criticality}`);
  if (ctx.projectTruth.activeCycleInstanceId) {
    lines.push(
      `Cycle ACTIVE authority-bearing : ${ctx.projectTruth.activeCycleInstanceId} — ne pas inventer d'activation.`,
    );
  } else {
    lines.push(
      "Cycle ACTIVE : aucun (un CycleInstance candidate peut exister sans LPS.activeCycleInstanceId).",
    );
  }
  lines.push("");

  // Method / CKC (reuse AdvisoryMethodContext rendering via caller + lens text)
  lines.push("— Méthode (guidance) —");
  if (ctx.method.orientation.state === "RESOLVED_FROM_INTENT_CANDIDATE") {
    lines.push(
      `État orientation : RESOLVED_FROM_INTENT_CANDIDATE` +
        (ctx.method.cycleLabel
          ? ` · cycle candidat « ${ctx.method.cycleLabel} »`
          : "") +
        " (hypothèse non durable).",
    );
  } else {
    lines.push(
      "État orientation : UNRESOLVED — n'invente pas de cycle ; question ciblée seulement si matérielle.",
    );
  }
  if (ctx.method.sourceLimit === "doctrine_unavailable") {
    lines.push("Limite : DoctrinePackage non résolu.");
  } else if (ctx.method.sourceLimit === "ckc_unavailable") {
    lines.push(
      "Limite : CKC détaillée indisponible — dégradation gouvernée ; pas de Skills Framework public.",
    );
  }
  if (ctx.method.ckcLensSection?.trim()) {
    lines.push(ctx.method.ckcLensSection.trim());
  }
  lines.push("");

  lines.push("— HumanDecisions —");
  if (ctx.decisions.state === "NONE") {
    lines.push("État enregistrements : NONE — aucune HumanDecision.");
  } else if (ctx.decisions.state === "UNAVAILABLE") {
    lines.push("État enregistrements : UNAVAILABLE — ne pas inventer de décision.");
  } else {
    lines.push(
      "État enregistrements : PRESENT — des HumanDecisions existent ; PRESENT ≠ toutes CURRENT.",
    );
    const current = ctx.decisions.items.filter((d) => d.lifecycle === "CURRENT");
    const pending = ctx.decisions.items.filter((d) => d.lifecycle === "PENDING");
    const nonActive = ctx.decisions.items.filter(
      (d) => d.lifecycle === "NON_ACTIVE",
    );
    lines.push("CURRENT (effective) — respecter ; ne pas rouvrir comme Option libre sans contradiction/replan:");
    if (current.length === 0) {
      lines.push("• (aucune HumanDecision CURRENT)");
    } else {
      for (const d of current) {
        lines.push(
          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=CURRENT]` +
            (d.supersedesPresent ? " (remplace une décision antérieure)" : ""),
        );
      }
    }
    lines.push("PENDING — non décidé ; ne pas narrer comme GO/current:");
    if (pending.length === 0) {
      lines.push("• (aucune HumanDecision PENDING)");
    } else {
      for (const d of pending) {
        lines.push(
          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=PENDING]`,
        );
      }
    }
    lines.push("NON_ACTIVE — historique / provenance seulement ; jamais GO courant:");
    if (nonActive.length === 0) {
      lines.push("• (aucune HumanDecision NON_ACTIVE)");
    } else {
      for (const d of nonActive) {
        lines.push(
          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=NON_ACTIVE]`,
        );
      }
    }
  }
  lines.push("");

  lines.push("— Evidence —");
  if (ctx.evidence.state === "NONE") {
    lines.push("État enregistrements : NONE — aucune Evidence projet liée.");
  } else if (ctx.evidence.state === "UNAVAILABLE") {
    lines.push("État enregistrements : UNAVAILABLE — ne pas inventer d'Evidence.");
  } else {
    lines.push(
      "État enregistrements : PRESENT — des Evidence existent ; PRESENT ≠ Fact / preuve établie.",
    );
    lines.push(
      "Règles : Evidence = support, pas la proposition ; status/availability/freshness pèsent ; rejected/superseded/unavailable = non-support courant ; stale = affaibli ; expected/incomplete/unverified ≠ verified ; unknown reste incertitude ; même verified ne prouve pas une claim utilisateur non liée.",
    );
    for (const e of ctx.evidence.items) {
      lines.push(
        `• type=${e.type} status=${e.status} availability=${e.availability}` +
          (e.freshness ? ` freshness=${e.freshness}` : "") +
          ` stance=${e.epistemicStance}`,
      );
    }
  }
  lines.push("");

  lines.push("— ReviewBundle —");
  if (ctx.review.state === "NONE") {
    lines.push("État enregistrements : NONE.");
  } else if (ctx.review.state === "UNAVAILABLE") {
    lines.push("État enregistrements : UNAVAILABLE.");
  } else {
    lines.push(
      "État enregistrements : PRESENT — pas une validation Fact automatique ; lire status/completeness.",
    );
    for (const r of ctx.review.items) {
      lines.push(
        `• status=${r.status} evidenceRefs=${r.evidenceRefCount} completeness=${r.completeness}` +
          (r.supersedesPresent ? " (supersédé/lié)" : ""),
      );
    }
  }
  lines.push("");

  lines.push("— ProjectTrajectory —");
  if (ctx.trajectory.state === "ABSENT") {
    lines.push("État : ABSENT — n'invente pas de trajectoire.");
  } else if (ctx.trajectory.state === "UNAVAILABLE") {
    lines.push("État : UNAVAILABLE — n'invente pas de trajectoire.");
  } else if (ctx.trajectory.state === "DEFERRED") {
    lines.push("État : DEFERRED — non consommé dans ce tour.");
  } else if (ctx.trajectory.current) {
    const t = ctx.trajectory.current;
    lines.push(
      `État : PRESENT · status=${t.status} version=${t.version}` +
        (t.decidedByDecisionPresent
          ? " · liée à une HumanDecision"
          : " · Recommendation/candidate ≠ HumanDecision"),
    );
    if (t.stepSummaries.length > 0) {
      lines.push(`Étapes : ${t.stepSummaries.join(" → ")}`);
    }
  }
  lines.push("");

  return lines;
}
