/**
 * Lot 2 — apply owner projections without a second métier store.
 * A failed re-read keeps the last snapshot of the same project.
 * Journal provenance is not a replacement for the project knowledge shape.
 */

export type ActivityFreshness = "loading" | "ready" | "stale" | "unavailable";

export type ActivitySnapshot = {
  openSubjects: { count: number; examples: Array<{ id: string; title: string }> };
  applicableDecisions: { count: number; examples: Array<{ id: string; statement: string }> };
  documentsInProgress: { count: number; examples: Array<{ id: string; title: string }> };
  openPointsCount: number;
} | null;

export function activityAfterProjectRead(input: {
  previous: ActivitySnapshot;
  incoming: ActivitySnapshot | undefined;
  httpOk: boolean;
  /** True only when the payload contains an activity object. Null is not an empty snapshot. */
  snapshotPresent?: boolean;
}): { activity: ActivitySnapshot; freshness: ActivityFreshness } {
  const present = input.snapshotPresent ?? input.incoming != null;
  if (!input.httpOk || !present) {
    return {
      activity: input.previous,
      freshness: input.previous ? "stale" : "unavailable",
    };
  }
  return { activity: input.incoming ?? null, freshness: "ready" };
}

/**
 * A confirmed turn stays confirmed when the following projection read fails.
 * Lost ACK remains the outcome only when the métier result itself is unknown.
 */
export function turnProjectionRefreshOutcome(input: {
  metierConfirmed: boolean;
  projectionFailed: boolean;
}): "preserve-metier" | "metier-unconfirmed" {
  if (input.metierConfirmed && input.projectionFailed) return "preserve-metier";
  return "metier-unconfirmed";
}

export type ProjectPreloadBody = {
  project?: { id?: string | null } | null;
  knowledge?: unknown;
  activity?: unknown;
};

/** Popup preload. Validating the body is not the same as hydrating project surfaces. */
export function contextPreloadVerdict(input: {
  expectedProjectId: string;
  httpOk: boolean;
  body: ProjectPreloadBody | null;
}): "ready" | "partial" | "failed" {
  if (!input.httpOk || !input.body) return "failed";
  const id = input.body.project?.id;
  if (!id || id !== input.expectedProjectId) return "failed";
  if (input.body.knowledge == null || input.body.activity == null) return "partial";
  return "ready";
}

/** Journal GET carries richer provenance. It must not replace project knowledge. */
export function journalMayReplaceProjectKnowledge(): false {
  return false;
}

export type PrepMark = "pending" | "running" | "done" | "incomplete" | "failed";

export type ContextLoadState = "loading" | "ready" | "partial" | "failed";

/**
 * Four preparation markers. Context load and trajectory qualification are
 * independent: one finishing does not mark the other done.
 */
export function preparationContinuityMarks(input: {
  projectCreated: boolean;
  context: ContextLoadState;
  qualificationStatus: string | null;
}): { project: PrepMark; context: PrepMark; cycles: PrepMark; reply: PrepMark } {
  const q = input.qualificationStatus;
  const proposed = q === "PROPOSED";
  const clarification = q === "CLARIFICATION";
  const failed = q === "FAILED";
  const terminal = proposed || clarification || failed;
  return {
    project: input.projectCreated ? "done" : "pending",
    context:
      input.context === "ready"
        ? "done"
        : input.context === "failed"
          ? "failed"
          : input.context === "partial"
            ? "incomplete"
            : "running",
    cycles: !input.projectCreated
      ? "pending"
      : failed
        ? "failed"
        : clarification
          ? "incomplete"
          : proposed
            ? "done"
            : "running",
    reply: !terminal ? "pending" : failed ? "failed" : clarification ? "incomplete" : "done",
  };
}

export function preparationAnnouncement(input: {
  context: ContextLoadState;
  qualificationStatus: string | null;
  dwellComplete: boolean;
  projectName: string;
}): { kicker: string; title: string; lead: string; announceComplete: boolean } {
  const name = input.projectName.trim();
  if (input.context === "loading" || input.context === "partial") {
    return {
      kicker: "PROJET CRÉÉ  /  CONTEXTE EN CHARGEMENT",
      title: "Projet créé. Préparation de ton espace de travail.",
      lead: "Studio récupère le contexte et les connaissances existantes du projet. Nora prépare la trajectoire initiale.",
      announceComplete: false,
    };
  }
  if (input.context === "failed") {
    return {
      kicker: "PROJET CRÉÉ / CONTEXTE INDISPONIBLE",
      title: "Projet créé. Le contexte n’a pas pu être relu.",
      lead: "Tu peux accéder au projet. La lecture sera reprise à l’entrée. Aucun cycle n’a été ouvert.",
      announceComplete: false,
    };
  }
  if (input.qualificationStatus === "FAILED") {
    return {
      kicker: "PROJET CRÉÉ / REPRISE NÉCESSAIRE",
      title: "Projet créé. La qualification initiale n’a pas abouti.",
      lead: "Tu peux accéder au projet et reprendre la conversation. Aucun cycle n’a été ouvert.",
      announceComplete: false,
    };
  }
  if (input.qualificationStatus === "CLARIFICATION") {
    return {
      kicker: "PROJET CRÉÉ / CLARIFICATION NÉCESSAIRE",
      title: "Projet créé. Nora a besoin d’une précision avant de proposer la trajectoire.",
      lead: "Une clarification est dans le fil du projet. Réponds-y pour que Nora propose une trajectoire. Aucun cycle n’est ouvert.",
      announceComplete: false,
    };
  }
  if (input.qualificationStatus === "PROPOSED" && input.dwellComplete) {
    return {
      kicker: "PROJET CRÉÉ / TRAJECTOIRE PROPOSÉE",
      title: "Préparation terminée. Accède au projet quand tu veux.",
      lead: name
        ? `La première proposition de trajectoire pour « ${name} » est disponible dans le fil. Aucun cycle ne démarre sans ton accord.`
        : "La première proposition de trajectoire est disponible dans le fil. Aucun cycle ne démarre sans ton accord.",
      announceComplete: true,
    };
  }
  return {
    kicker: "PROJET CRÉÉ / TRAJECTOIRE EN PRÉPARATION",
    title: "Projet créé. Nora prépare la suite.",
    lead: name
      ? `Nora analyse l’intention de « ${name} » pour proposer une première trajectoire.`
      : "Nora analyse ton intention pour proposer une première trajectoire.",
    announceComplete: false,
  };
}
