/**
 * D2 PreparationProjection — non-authorizing inspectable sas snapshot.
 * Persisted by D2 from a durable D3 turn qualification; never from Markdown scraping alone.
 */

export const PREPARATION_PROJECTION_SCHEMA_VERSION = 1 as const;

export type ProjectionFieldStatus =
  | "PILOT_EXPRESSED"
  | "NORA_PROPOSED"
  | "NEEDS_CONFIRMATION";

export type ProjectionFieldSourceKind = "PILOT_TURN" | "NORA_TURN" | "KNOWLEDGE_REF";

export type ProposedField<T> = {
  value: T;
  status: ProjectionFieldStatus;
  source: { kind: ProjectionFieldSourceKind; ref: string };
  isCurrent: boolean;
};

export type ProjectionAssessment =
  | "EXPLORING"
  | "CLARIFYING"
  | "PROPOSAL"
  | "BASE_SUFFICIENTE";

export type PreparationProjection = {
  schemaVersion: typeof PREPARATION_PROJECTION_SCHEMA_VERSION;
  preparationId: string;
  revision: number;
  updatedFromTurnKey: string | null;
  observedAt: string | null;
  name: ProposedField<string> | null;
  intention: ProposedField<string> | null;
  desiredOutcome: ProposedField<string> | null;
  initialScope: ProposedField<string> | null;
  openQuestions: ProposedField<string>[];
  suggestion: {
    assessment: ProjectionAssessment;
    explanation: string;
    sourceTurnKey: string | null;
  } | null;
};

export type ApplyProjectionResult =
  | { status: "APPLIED"; revision: number; projection: PreparationProjection }
  | { status: "UNCHANGED"; revision: number; projection: PreparationProjection | null }
  | { status: "CONFLICT"; actualRevision: number; reason: string }
  | { status: "UNAVAILABLE"; reason: string }
  | { status: "FORBIDDEN" };

/** Normalize project name for same-pilot uniqueness (spaces + case). Accents preserved. */
export function normalizeProjectNameKey(raw: string): string {
  return raw.trim().replace(/\s+/g, " ").toLocaleLowerCase("fr-FR");
}

export function parseProjectionJson(
  raw: unknown,
  preparationId: string,
  revision: number,
): PreparationProjection | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Partial<PreparationProjection>;
  if (o.schemaVersion !== 1) return null;
  return {
    schemaVersion: 1,
    preparationId: o.preparationId ?? preparationId,
    revision: typeof o.revision === "number" ? o.revision : revision,
    updatedFromTurnKey: o.updatedFromTurnKey ?? null,
    observedAt: o.observedAt ?? null,
    name: o.name ?? null,
    intention: o.intention ?? null,
    desiredOutcome: o.desiredOutcome ?? null,
    initialScope: o.initialScope ?? null,
    openQuestions: Array.isArray(o.openQuestions) ? o.openQuestions : [],
    suggestion: o.suggestion ?? null,
  };
}

function fieldEqual<T>(a: ProposedField<T> | null, b: ProposedField<T> | null): boolean {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return a.value === b.value && a.status === b.status && a.isCurrent === b.isCurrent;
}

export function projectionMateriallyChanged(
  prev: PreparationProjection | null,
  next: Omit<PreparationProjection, "revision" | "observedAt">,
): boolean {
  if (!prev) {
    return Boolean(
      next.name ||
        next.intention ||
        next.desiredOutcome ||
        next.initialScope ||
        next.openQuestions.length ||
        next.suggestion,
    );
  }
  if (!fieldEqual(prev.name, next.name)) return true;
  if (!fieldEqual(prev.intention, next.intention)) return true;
  if (!fieldEqual(prev.desiredOutcome, next.desiredOutcome)) return true;
  if (!fieldEqual(prev.initialScope, next.initialScope)) return true;
  if (prev.openQuestions.length !== next.openQuestions.length) return true;
  for (let i = 0; i < next.openQuestions.length; i += 1) {
    if (!fieldEqual(prev.openQuestions[i] ?? null, next.openQuestions[i] ?? null)) return true;
  }
  if ((prev.suggestion?.assessment ?? null) !== (next.suggestion?.assessment ?? null)) return true;
  if ((prev.suggestion?.explanation ?? null) !== (next.suggestion?.explanation ?? null)) return true;
  return false;
}

export function noraProposedField(
  value: string,
  turnKey: string,
  status: ProjectionFieldStatus = "NORA_PROPOSED",
): ProposedField<string> {
  return {
    value: value.trim().slice(0, 500),
    status,
    source: { kind: "NORA_TURN", ref: turnKey },
    isCurrent: true,
  };
}

/**
 * Derive a candidate projection draft from a durable D3 qualification envelope.
 * Does not scrape assistant Markdown as authority.
 */
export function draftProjectionFromQualification(input: {
  preparationId: string;
  turnKey: string;
  qualificationStatus: string;
  goal: string;
  clarifications: string[];
  proposedProjectName: string | null;
  openPointStatements?: string[];
  replySignalsBaseSufficiency?: boolean;
}): Omit<PreparationProjection, "revision" | "observedAt"> | null {
  if (input.qualificationStatus === "UNAVAILABLE") return null;

  const turnKey = input.turnKey;
  const nameRaw = input.proposedProjectName?.trim() || "";
  const intentionRaw = input.goal.trim();
  const openFromClarifications = input.clarifications
    .map((c) => c.trim())
    .filter(Boolean)
    .slice(0, 6);
  const openFromKnowledge = (input.openPointStatements ?? [])
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 6);
  const openMerged = [...openFromClarifications];
  for (const s of openFromKnowledge) {
    if (!openMerged.some((x) => x.toLocaleLowerCase("fr-FR") === s.toLocaleLowerCase("fr-FR"))) {
      openMerged.push(s);
    }
  }

  const name = nameRaw ? noraProposedField(nameRaw.slice(0, 120), turnKey) : null;
  const intention = intentionRaw
    ? noraProposedField(intentionRaw.slice(0, 500), turnKey, "NEEDS_CONFIRMATION")
    : null;
  const openQuestions = openMerged.map((q) =>
    noraProposedField(q.slice(0, 400), turnKey, "NEEDS_CONFIRMATION"),
  );

  let assessment: ProjectionAssessment = "EXPLORING";
  let explanation =
    "Nora explore encore l'intention. Aucune base de démarrage n'est affirmée.";
  if (intention && openQuestions.length > 0 && !name) {
    assessment = "CLARIFYING";
    explanation =
      "Des éléments sont compris, mais une clarification reste utile avant de figer un nom.";
  } else if (intention && name && openQuestions.length > 0) {
    assessment = "PROPOSAL";
    explanation =
      "Une proposition de travail est disponible. Des points ouverts restent à préciser sans bloquer nécessairement la création.";
  } else if (
    intention &&
    name &&
    (openQuestions.length === 0 || input.replySignalsBaseSufficiency === true)
  ) {
    assessment = "BASE_SUFFICIENTE";
    explanation =
      "Intention et nom de travail sont suffisamment clairs pour démarrer. Les précisions restantes peuvent se faire dans le projet.";
  } else if (intention) {
    assessment = "CLARIFYING";
    explanation = "Une intention se dessine ; Nora continue de clarifier le résultat et le périmètre.";
  }

  if (!name && !intention && openQuestions.length === 0) {
    return {
      schemaVersion: 1,
      preparationId: input.preparationId,
      updatedFromTurnKey: turnKey,
      name: null,
      intention: null,
      desiredOutcome: null,
      initialScope: null,
      openQuestions: [],
      suggestion: {
        assessment: "EXPLORING",
        explanation,
        sourceTurnKey: turnKey,
      },
    };
  }

  return {
    schemaVersion: 1,
    preparationId: input.preparationId,
    updatedFromTurnKey: turnKey,
    name,
    intention,
    desiredOutcome: null,
    initialScope: null,
    openQuestions,
    suggestion: {
      assessment,
      explanation,
      sourceTurnKey: turnKey,
    },
  };
}

/** Compatible preview fields for create-project / portfolio labels. */
export function previewFieldsFromProjection(
  projection: PreparationProjection | null,
  fallbackName: string,
  fallbackSummary: string,
): { previewName: string; previewSummary: string } {
  const name = projection?.name?.value?.trim() || fallbackName.trim();
  const parts: string[] = [];
  if (projection?.intention?.value?.trim()) parts.push(projection.intention.value.trim());
  if (projection?.desiredOutcome?.value?.trim()) parts.push(projection.desiredOutcome.value.trim());
  if (projection?.initialScope?.value?.trim()) parts.push(projection.initialScope.value.trim());
  if (projection?.suggestion?.explanation?.trim()) {
    parts.push(projection.suggestion.explanation.trim());
  }
  const summary = parts.join("\n\n").slice(0, 2000) || fallbackSummary.trim();
  return { previewName: name.slice(0, 120), previewSummary: summary };
}

export function canCreateFromProjection(
  projection: PreparationProjection | null,
  previewName: string,
): boolean {
  const name = (projection?.name?.value || previewName).trim();
  return name.length > 0;
}
