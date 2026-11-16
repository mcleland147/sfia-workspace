/**
 * D2 PreparationProjection — non-authorizing inspectable sas snapshot.
 * Persisted by D2 from a durable D3 turn qualification; never from Markdown scraping alone.
 */

export const PREPARATION_PROJECTION_SCHEMA_VERSION = 1 as const;

export type ProjectionFieldStatus =
  | "PILOT_EXPRESSED"
  | "NORA_PROPOSED"
  | "NEEDS_CONFIRMATION";

export type ProjectionFieldSourceKind =
  | "PILOT_TURN"
  | "PILOT_UI_EDIT"
  | "NORA_TURN"
  | "KNOWLEDGE_REF";

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

/**
 * Single comparison semantic for same-pilot name uniqueness.
 * trim + collapse whitespace + Unicode case-fold (fr-FR). Accents preserved as distinct.
 * Used for both creation checks and searches — never mix with SQL lower() alone.
 */
export function normalizeProjectNameKey(raw: string): string {
  return raw.trim().replace(/\s+/g, " ").toLocaleLowerCase("fr-FR");
}

export function namesConflictForSamePilot(a: string, b: string): boolean {
  const ka = normalizeProjectNameKey(a);
  const kb = normalizeProjectNameKey(b);
  return ka.length > 0 && kb.length > 0 && ka === kb;
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

export function pilotExpressedField(value: string, editKey: string): ProposedField<string> {
  return {
    value: value.trim().slice(0, 500),
    status: "PILOT_EXPRESSED",
    source: { kind: "PILOT_TURN", ref: editKey },
    isCurrent: true,
  };
}

/** UI aperçu correction — not a fabricated D3 conversation turn. */
export function pilotUiEditField(value: string, editKey: string): ProposedField<string> {
  return {
    value: value.trim().slice(0, 500),
    status: "PILOT_EXPRESSED",
    source: { kind: "PILOT_UI_EDIT", ref: editKey },
    isCurrent: true,
  };
}

/**
 * Preserve Pilot-expressed fields against Nora re-proposal of the same slot.
 * Do not clear an acquired field when the new turn leaves it empty.
 */
export function mergeNoraDraftWithPrior(
  prior: PreparationProjection | null,
  draft: Omit<PreparationProjection, "revision" | "observedAt">,
): Omit<PreparationProjection, "revision" | "observedAt"> {
  function mergeField(
    prev: ProposedField<string> | null | undefined,
    next: ProposedField<string> | null | undefined,
  ): ProposedField<string> | null {
    if (prev?.status === "PILOT_EXPRESSED") {
      // Nora may refine surrounding context but must not silently revert a confirmed Pilot edit.
      if (next?.status === "PILOT_EXPRESSED") return next;
      return prev;
    }
    if (next?.value?.trim()) return next;
    if (prev?.value?.trim()) return { ...prev, isCurrent: true };
    return next ?? null;
  }

  return {
    ...draft,
    name: mergeField(prior?.name, draft.name),
    intention: mergeField(prior?.intention, draft.intention),
    desiredOutcome: mergeField(prior?.desiredOutcome, draft.desiredOutcome),
    initialScope: mergeField(prior?.initialScope, draft.initialScope),
    openQuestions:
      draft.openQuestions.length > 0 ? draft.openQuestions : (prior?.openQuestions ?? []),
    suggestion: draft.suggestion ?? prior?.suggestion ?? null,
  };
}

/**
 * Derive a candidate projection draft from a durable D3 qualification envelope.
 * Does not scrape assistant Markdown as authority. Assessment comes from structured fields.
 */
export function draftProjectionFromQualification(input: {
  preparationId: string;
  turnKey: string;
  qualificationStatus: string;
  goal: string;
  desiredOutcome?: string;
  initialScope?: string;
  clarifications: string[];
  proposedProjectName: string | null;
  openPointStatements?: string[];
  preparationAssessment?: ProjectionAssessment | null;
  preparationAssessmentExplanation?: string | null;
}): Omit<PreparationProjection, "revision" | "observedAt"> | null {
  if (input.qualificationStatus === "UNAVAILABLE") return null;

  const turnKey = input.turnKey;
  const nameRaw = input.proposedProjectName?.trim() || "";
  const intentionRaw = input.goal.trim();
  const outcomeRaw = (input.desiredOutcome ?? "").trim();
  const scopeRaw = (input.initialScope ?? "").trim();
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
  const desiredOutcome = outcomeRaw
    ? noraProposedField(outcomeRaw.slice(0, 500), turnKey, "NEEDS_CONFIRMATION")
    : null;
  const initialScope = scopeRaw
    ? noraProposedField(scopeRaw.slice(0, 500), turnKey, "NEEDS_CONFIRMATION")
    : null;
  const openQuestions = openMerged.map((q) =>
    noraProposedField(q.slice(0, 400), turnKey, "NEEDS_CONFIRMATION"),
  );

  /**
   * Assessment is attributed to Nora only when the structured qualification provides it.
   * Presence of name/intention/outcome must NOT fabricate BASE_SUFFICIENTE / PROPOSAL.
   * D2 eligibility (canCreate) is separate from Nora's qualitative advice.
   */
  let suggestion: PreparationProjection["suggestion"] = null;
  if (input.preparationAssessment) {
    const explanation =
      input.preparationAssessmentExplanation?.trim() ||
      "Appréciation structurée fournie par Nora — suggestion qualitative, pas une autorisation.";
    suggestion = {
      assessment: input.preparationAssessment,
      explanation,
      sourceTurnKey: turnKey,
    };
  }

  return {
    schemaVersion: 1,
    preparationId: input.preparationId,
    updatedFromTurnKey: turnKey,
    name,
    intention,
    desiredOutcome,
    initialScope,
    openQuestions,
    suggestion,
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

/**
 * Resolve the durable inspected project name from D2 truth.
 * Prefer projection.name; fall back to preview_name for older preparations without projection_json.
 * Never invents a default title.
 */
export function resolveInspectedProjectName(
  projection: PreparationProjection | null | undefined,
  previewName: string | null | undefined,
): string | null {
  const fromProjection = projection?.name?.value?.trim() ?? "";
  if (fromProjection) return fromProjection.slice(0, 120);
  const fromPreview = (previewName ?? "").trim();
  if (fromPreview) return fromPreview.slice(0, 120);
  return null;
}

/** True when the client-requested name matches the currently inspected D2 proposal. */
export function requestedNameMatchesInspected(
  requestedName: string,
  inspectedName: string,
): boolean {
  return namesConflictForSamePilot(requestedName, inspectedName);
}

/** Authoritative inspected create payload — never invents a default title. */
export function inspectedCreatePayload(
  projection: PreparationProjection | null,
  previewName: string,
  previewSummary: string,
): { ok: true; projectName: string; previewSummary: string } | { ok: false; reason: string } {
  const name = resolveInspectedProjectName(projection, previewName);
  if (!name) {
    return { ok: false, reason: "project name required — clarify before create" };
  }
  const summary =
    previewFieldsFromProjection(projection, name, previewSummary).previewSummary ||
    previewSummary.trim();
  return { ok: true, projectName: name, previewSummary: summary };
}

/**
 * Classify a successful pilot PATCH write against a post-commit observation.
 * Distinguishes confirmed-current from confirmed-but-superseded — never conflates the two.
 */
export type PilotPatchWriteStatus =
  | "APPLIED_CURRENT"
  | "APPLIED_SUPERSEDED"
  | "UNCHANGED_CURRENT"
  | "CONFLICT_NOT_APPLIED"
  | "UNKNOWN";

export function classifyPilotPatchWrite(input: {
  applyStatus: "APPLIED" | "UNCHANGED" | "CONFLICT" | "UNAVAILABLE" | "FORBIDDEN";
  appliedRevision: number | null;
  observedRevision: number | null;
}): PilotPatchWriteStatus {
  if (input.applyStatus === "CONFLICT") return "CONFLICT_NOT_APPLIED";
  if (input.applyStatus === "UNAVAILABLE" || input.applyStatus === "FORBIDDEN") return "UNKNOWN";
  if (input.appliedRevision == null || input.observedRevision == null) return "UNKNOWN";
  if (input.applyStatus === "UNCHANGED") {
    return input.observedRevision === input.appliedRevision
      ? "UNCHANGED_CURRENT"
      : "APPLIED_SUPERSEDED";
  }
  // APPLIED
  if (input.observedRevision === input.appliedRevision) return "APPLIED_CURRENT";
  if (input.observedRevision > input.appliedRevision) return "APPLIED_SUPERSEDED";
  return "UNKNOWN";
}
