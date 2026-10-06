/**
 * P5-S07 — Product-derived History events (read projection only).
 *
 * Composes Pilot-facing timeline events from the W2 minimal durable read model
 * (+ optional Evidence/Review anchors). No HistoryStore, no event sourcing,
 * no transcript, no invented why/impact when facts are absent.
 */

import type { W2ProjectHistoryReadModel } from "./projectHistory";

export type PilotHistoryEventKind =
  | "project"
  | "lps"
  | "cycle"
  | "trajectory"
  | "decision"
  | "contract"
  | "evidence"
  | "review"
  | "recommendation";

export type PilotHistoryFilter =
  | "all"
  | "decisions"
  | "changes"
  | "verified";

export type PilotHistoryLinkedRef = {
  readonly kind: string;
  readonly id: string;
  readonly label: string;
};

export type PilotHistoryEvent = {
  readonly eventId: string;
  readonly kind: PilotHistoryEventKind;
  /** Pilot-facing kind label (never raw technical type as primary). */
  readonly kindLabel: string;
  readonly title: string;
  readonly summary: string;
  /** ISO timestamp only when a Product fact proves it; otherwise null. */
  readonly occurredAt: string | null;
  readonly isCurrent: boolean;
  readonly sourceKind: string;
  readonly sourceId: string;
  readonly linked: readonly PilotHistoryLinkedRef[];
  /** Optional detail sections — null when no Product fact proves them. */
  readonly decidedWhat: string | null;
  /** On what durable basis the event rests. Never an inferred rationale. */
  readonly why: string | null;
  /** What the event changes, when a Product fact states it. */
  readonly impact: string | null;
  /** Proven verification anchor (evidence, review, currentness). */
  readonly verification: string | null;
  readonly filterBucket: Exclude<PilotHistoryFilter, "all">;
};

export type DurableOutcomeHistoryAnchors = {
  readonly evidence?: ReadonlyArray<{
    readonly evidenceId: string;
    readonly status: string;
  }>;
  readonly reviewBundles?: ReadonlyArray<{
    readonly reviewBundleId: string;
    readonly status: string;
  }>;
  readonly recommendation?: {
    readonly recommendationLabel: string;
  } | null;
};

function kindLabel(kind: PilotHistoryEventKind): string {
  switch (kind) {
    case "project":
      return "Projet";
    case "lps":
      return "État du projet";
    case "cycle":
      return "Cycle";
    case "trajectory":
      return "Trajectoire";
    case "decision":
      return "Décision";
    case "contract":
      return "Exécution";
    case "evidence":
      return "Preuve";
    case "review":
      return "Revue";
    case "recommendation":
      return "Recommandation";
    default:
      return kind;
  }
}

function pilotFacingCycleTitle(cycleTypeId: string | null): string {
  if (!cycleTypeId) return "Cycle rattaché";
  const key = cycleTypeId.replace(/^cyc:/i, "").toLowerCase();
  switch (key) {
    case "framing":
      return "Cycle de cadrage";
    case "delivery":
      return "Cycle de livraison";
    case "exploration":
      return "Cycle d'exploration";
    default:
      return "Cycle rattaché";
  }
}

/** Prefer Pilot vocabulary; keep technical subject only when it already reads as natural language. */
function pilotFacingDecisionTitle(subject: string): string {
  const trimmed = subject.trim();
  if (!trimmed) return "Décision humaine";
  if (
    /^(w2|project\.|pilot\.|prop:|trj|cyc:|lps:|xct:|dec:)/i.test(trimmed) ||
    /prop:f2:|obligation-policy|subject arbitration/i.test(trimmed)
  ) {
    return "Décision enregistrée";
  }
  return trimmed;
}

function trajectoryTitle(
  version: W2ProjectHistoryReadModel["trajectory"]["versions"][number],
): string {
  if (version.isEffectiveCurrent) {
    return `Trajectoire v${version.version} courante`;
  }
  if (version.status === "candidate") {
    return `Trajectoire v${version.version} proposée`;
  }
  return `Trajectoire v${version.version}`;
}

function trajectorySummary(
  version: W2ProjectHistoryReadModel["trajectory"]["versions"][number],
): string {
  if (version.isEffectiveCurrent) {
    return version.decidedByDecisionRef
      ? "Décidée et courante pour le Project."
      : "Courante · antérieure au rattachement de décision.";
  }
  if (version.status === "candidate") {
    return "Proposée · pas encore décidée · pas courante.";
  }
  return `Statut ${version.status} · non courante.`;
}

/**
 * Pure derivation — deterministic order: project → LPS → cycle → trajectories
 * → decisions → contracts → evidence → review → recommendation.
 */
export function deriveProjectHistoryEvents(input: {
  readonly history: W2ProjectHistoryReadModel;
  readonly durable?: DurableOutcomeHistoryAnchors | null;
}): readonly PilotHistoryEvent[] {
  const { history, durable = null } = input;
  const events: PilotHistoryEvent[] = [];

  events.push({
    eventId: `project:${history.projectId}`,
    kind: "project",
    kindLabel: kindLabel("project"),
    title: history.projectTitle,
    summary: "Identité projet enregistrée.",
    occurredAt: null,
    isCurrent: true,
    sourceKind: "Project",
    sourceId: history.projectId,
    linked: [],
    decidedWhat: null,
    why: null,
    impact: null,
    verification: null,
    filterBucket: "changes",
  });

  events.push({
    eventId: `lps:${history.lps.lpsId}:v${history.lps.version}`,
    kind: "lps",
    kindLabel: kindLabel("lps"),
    title: `État du projet · version ${history.lps.version}`,
    summary: "État courant du projet.",
    occurredAt: null,
    isCurrent: true,
    sourceKind: "LPS",
    sourceId: history.lps.lpsId,
    linked: [],
    decidedWhat: null,
    why: null,
    impact: `État courant du projet en version ${history.lps.version}.`,
    verification: "Version courante lue depuis le Living Project State.",
    filterBucket: "changes",
  });

  if (history.cycle.activeCycleInstanceId) {
    events.push({
      eventId: `cycle:${history.cycle.activeCycleInstanceId}`,
      kind: "cycle",
      kindLabel: kindLabel("cycle"),
      title: pilotFacingCycleTitle(history.cycle.cycleTypeId),
      summary: [
        history.cycle.profile ? `Profil ${history.cycle.profile}` : null,
        history.cycle.status ? `Statut ${history.cycle.status}` : null,
      ]
        .filter(Boolean)
        .join(" · ") || "Cycle distinct du projet.",
      occurredAt: null,
      isCurrent: true,
      sourceKind: "Cycle",
      sourceId: history.cycle.activeCycleInstanceId,
      linked: [],
      decidedWhat: null,
      why: null,
      impact: history.cycle.profile
        ? `Cycle piloté avec le profil ${history.cycle.profile}.`
        : null,
      verification: history.cycle.status
        ? `Statut de cycle durable : ${history.cycle.status}.`
        : null,
      filterBucket: "changes",
    });
  }

  for (const version of history.trajectory.versions) {
    const linked: PilotHistoryLinkedRef[] = [];
    if (version.decidedByDecisionRef) {
      linked.push({
        kind: "Décision",
        id: version.decidedByDecisionRef,
        label: "Décision rattachée",
      });
    }
    events.push({
      eventId: `trj:${version.trajectoryId}:v${version.version}`,
      kind: "trajectory",
      kindLabel: kindLabel("trajectory"),
      title: trajectoryTitle(version),
      summary: trajectorySummary(version),
      occurredAt: null,
      isCurrent: version.isEffectiveCurrent,
      sourceKind: "ProjectTrajectory",
      sourceId: `${version.trajectoryId}@v${version.version}`,
      linked,
      decidedWhat: version.isEffectiveCurrent
        ? `${version.stepCount} étapes · courante`
        : null,
      why: version.decidedOptionRef
        ? `Option retenue ${version.decidedOptionRef}.`
        : null,
      impact: `${version.stepCount} étape${version.stepCount === 1 ? "" : "s"} dans cette version de trajectoire.`,
      verification: version.isEffectiveCurrent
        ? version.decidedByDecisionRef
          ? "Version courante, rattachée à une décision humaine."
          : "Version courante · rattachement de décision absent."
        : null,
      filterBucket: version.isEffectiveCurrent ? "verified" : "changes",
    });
  }

  for (const decision of history.decisions) {
    events.push({
      // decisionId is already a stable Product ref (often `dec:…`).
      eventId: decision.decisionId,
      kind: "decision",
      kindLabel: kindLabel("decision"),
      title: pilotFacingDecisionTitle(decision.subject || ""),
      summary: `${decision.status} · ${decision.actorRole}`,
      occurredAt: decision.effectiveAt || null,
      isCurrent: false,
      sourceKind: "HumanDecision",
      sourceId: decision.decisionId,
      linked: decision.basisTrajectoryRef
        ? [
            {
              kind: "Trajectoire",
              id: decision.basisTrajectoryRef,
              label: decision.basisTrajectoryRef,
            },
          ]
        : [],
      decidedWhat: `Option retenue ${decision.selectedOptionRef}`,
      why: decision.basisSourceType
        ? `Base de décision durable : ${decision.basisSourceType}.`
        : null,
      impact: decision.basisTrajectoryRef
        ? `Trajectoire de référence ${decision.basisTrajectoryRef}.`
        : null,
      verification: decision.basisSourceType
        ? `Décision ${decision.status} par ${decision.actorRole} · autorité ${decision.authority}.`
        : null,
      filterBucket: "decisions",
    });
  }

  for (const contract of history.contracts) {
    events.push({
      eventId: `xct:${contract.executionContractId}`,
      kind: "contract",
      kindLabel: kindLabel("contract"),
      title: `Contrat d'exécution v${contract.version}`,
      summary: `${contract.status} · ${contract.action}`,
      occurredAt: null,
      isCurrent: false,
      sourceKind: "ExecutionContract",
      sourceId: contract.executionContractId,
      linked: contract.decisionRefs.map((ref) => ({
        kind: "Décision",
        id: ref,
        label: "Décision rattachée",
      })),
      decidedWhat: null,
      why:
        contract.decisionRefs.length > 0
          ? `Contrat rattaché à ${contract.decisionRefs.length} décision${contract.decisionRefs.length === 1 ? "" : "s"}.`
          : null,
      impact: contract.target ? `Cible d'exécution ${contract.target}.` : null,
      verification: contract.semanticFingerprint
        ? "Empreinte sémantique enregistrée pour ce contrat."
        : null,
      filterBucket: "changes",
    });
  }

  const historyEvidence = history.evidence ?? [];
  for (const evidence of historyEvidence) {
    events.push({
      eventId: `evidence:${evidence.evidenceId}`,
      kind: "evidence",
      kindLabel: kindLabel("evidence"),
      title: "Preuve enregistrée",
      summary: `Statut ${evidence.status}`,
      occurredAt: null,
      isCurrent: false,
      sourceKind: "Evidence",
      sourceId: evidence.evidenceId,
      linked: [],
      decidedWhat: null,
      why: null,
      impact: null,
      verification: `Preuve durable · statut ${evidence.status}.`,
      filterBucket: "verified",
    });
  }

  const historyReviews = history.reviewBundles ?? [];
  for (const rb of historyReviews) {
    events.push({
      eventId: `rb:${rb.reviewBundleId}`,
      kind: "review",
      kindLabel: kindLabel("review"),
      title: "Dossier de revue",
      summary: `Statut ${rb.status}`,
      occurredAt: null,
      isCurrent: false,
      sourceKind: "ReviewBundle",
      sourceId: rb.reviewBundleId,
      linked: [],
      decidedWhat: null,
      why: null,
      impact: null,
      verification: `Revue durable · statut ${rb.status}.`,
      filterBucket: "verified",
    });
  }

  const historySyntheses = history.syntheses ?? [];
  for (const syn of historySyntheses) {
    events.push({
      eventId: `syn:${syn.synthesisId}`,
      kind: "project",
      kindLabel: "Synthèse",
      title: syn.title,
      summary: `Synthèse · ${syn.status}`,
      occurredAt: null,
      isCurrent: syn.status === "current",
      sourceKind: "Synthesis",
      sourceId: syn.synthesisId,
      linked: [],
      decidedWhat: null,
      why: null,
      impact: null,
      verification: null,
      filterBucket: "changes",
    });
  }

  // CP02 B4 — history read model is primary; durableOutcome is fallback only
  // when the same Product object id is absent. One Product id → at most one event.
  const seenEvidenceIds = new Set(
    historyEvidence.map((evidence) => evidence.evidenceId),
  );
  const seenReviewBundleIds = new Set(
    historyReviews.map((rb) => rb.reviewBundleId),
  );

  if (durable?.evidence) {
    for (const evidence of durable.evidence) {
      if (seenEvidenceIds.has(evidence.evidenceId)) continue;
      seenEvidenceIds.add(evidence.evidenceId);
      events.push({
        eventId: `evidence:${evidence.evidenceId}`,
        kind: "evidence",
        kindLabel: kindLabel("evidence"),
        title: "Preuve enregistrée",
        summary: `Statut ${evidence.status}`,
        occurredAt: null,
        isCurrent: false,
        sourceKind: "Evidence",
        sourceId: evidence.evidenceId,
        linked: [],
        decidedWhat: null,
        why: null,
        impact: null,
        verification: `Preuve durable · statut ${evidence.status}.`,
        filterBucket: "verified",
      });
    }
  }

  if (durable?.reviewBundles) {
    for (const rb of durable.reviewBundles) {
      if (seenReviewBundleIds.has(rb.reviewBundleId)) continue;
      seenReviewBundleIds.add(rb.reviewBundleId);
      events.push({
        eventId: `rb:${rb.reviewBundleId}`,
        kind: "review",
        kindLabel: kindLabel("review"),
        title: "Dossier de revue",
        summary: `Statut ${rb.status}`,
        occurredAt: null,
        isCurrent: false,
        sourceKind: "ReviewBundle",
        sourceId: rb.reviewBundleId,
        linked: [],
        decidedWhat: null,
        why: null,
        impact: null,
        verification: `Revue durable · statut ${rb.status}.`,
        filterBucket: "verified",
      });
    }
  }

  if (durable?.recommendation?.recommendationLabel) {
    events.push({
      eventId: `rec:post-evidence`,
      kind: "recommendation",
      kindLabel: kindLabel("recommendation"),
      title: durable.recommendation.recommendationLabel,
      summary: "Recommandation dérivée · ≠ Décision humaine.",
      occurredAt: null,
      isCurrent: false,
      sourceKind: "Recommendation",
      sourceId: "post-evidence",
      linked: [],
      decidedWhat: null,
      why: null,
      impact: null,
      verification: null,
      filterBucket: "changes",
    });
  }

  return Object.freeze(events);
}

export function filterProjectHistoryEvents(
  events: readonly PilotHistoryEvent[],
  input: {
    readonly filter: PilotHistoryFilter;
    readonly query: string;
  },
): readonly PilotHistoryEvent[] {
  const q = input.query.trim().toLowerCase();
  return events.filter((event) => {
    if (input.filter === "decisions" && event.filterBucket !== "decisions") {
      return false;
    }
    // Figma Changements includes verified/change events (no separate Vérifié filter).
    if (
      input.filter === "changes" &&
      event.filterBucket !== "changes" &&
      event.filterBucket !== "verified"
    ) {
      return false;
    }
    if (!q) return true;
    const haystack = [
      event.title,
      event.summary,
      event.kindLabel,
      event.decidedWhat ?? "",
      event.why ?? "",
      event.impact ?? "",
      event.verification ?? "",
      ...event.linked.map((l) => l.label),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
