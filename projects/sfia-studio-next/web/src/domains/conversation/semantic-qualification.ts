/**
 * Canonical D3 semantic qualification envelope (ML4C SEM / TV-01…TV-05).
 * Validated structure ≠ authority. Owners still gate every effect.
 */
import { z } from "zod";
import {
  PILOTAGE_OPERATIONS,
  type PilotageOperation,
} from "@/domains/pilotage/types";
import type { ThreadTurnKind } from "@/domains/pilotage/thread-recovery";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
  VISUAL_COMPOSITION_SCHEMA_PROJECTION,
  VisualCompositionAgentOutputSchema,
} from "./visual-composition";
import { deriveReplyDraftFromCanonicalSections } from "./conversational-composition/derive-text";

/**
 * READ/validate envelope — accepts historical e05 + projection-v1 + canonical-v1.
 * Reuses concrete block union (no empty `{}` JSON Schema). Runtime authority remains
 * parseVisualComposition. LIVE Agent outputType = NoraTurnQualificationAgentSchema.
 */
const VisualCompositionPersistedSchema = z.object({
  schemaVersion: z.enum([
    VISUAL_COMPOSITION_SCHEMA,
    VISUAL_COMPOSITION_SCHEMA_PROJECTION,
    VISUAL_COMPOSITION_SCHEMA_LEGACY,
  ]),
  blocks: VisualCompositionAgentOutputSchema.shape.blocks,
});


export const SEMANTIC_QUALIFICATION_SCHEMA_VERSION = "ml4c-sem-qual-v1" as const;

export const IntentModeSchema = z.enum(["EXPLAIN", "EXPLORE", "PREPARE", "REQUEST_EFFECT"]);
export type IntentMode = z.infer<typeof IntentModeSchema>;

export const QualificationStatusSchema = z.enum([
  "QUALIFIED",
  "NEEDS_CLARIFICATION",
  "UNAVAILABLE",
]);
export type QualificationStatus = z.infer<typeof QualificationStatusSchema>;

/** Capability ids exposed to Nora — catalogue description, not authorization. */
export const StudioCapabilityIdSchema = z.enum([
  "d2.create_project",
  "d3.converse",
  "d4.create_document",
  "d4.revise_document",
  "d4.read_knowledge",
  /** Selective D4 continuity write — not a HumanDecision / not lexical. */
  "d4.record_knowledge",
  "d5.pilotage_command",
  "d6.human_decision",
  "d7.prepare_publication",
  "d7.dispatch_publication",
  "d9.git_integration",
]);
export type StudioCapabilityId = z.infer<typeof StudioCapabilityIdSchema>;

export const KnowledgeRecordKindSchema = z.enum(["ACQUIS", "OPEN_POINT", "SUBJECT"]);
export const KnowledgeEpistemicSchema = z.enum([
  "hypothesized",
  "recommended",
  "established",
  "limited",
]);

export const PilotageOperationSchema = z.enum(
  PILOTAGE_OPERATIONS as unknown as [PilotageOperation, ...PilotageOperation[]],
);

export const QualifiedIntentItemSchema = z.object({
  id: z.string().min(1).max(64),
  capabilityId: StudioCapabilityIdSchema,
  mode: IntentModeSchema,
  summary: z.string().max(500).optional(),
  parameters: z
    .object({
      projectName: z.string().max(120).optional(),
      documentHint: z.string().max(200).optional(),
      sectionHint: z.string().max(80).optional(),
      pathHint: z.string().max(240).optional(),
      cycleType: z.string().max(64).optional(),
      toCycleType: z.string().max(64).optional(),
      methodRef: z.string().max(120).optional(),
      methodVersion: z.string().max(64).optional(),
      decisionHint: z.string().max(200).optional(),
      decisionId: z.string().max(120).optional(),
      objectRef: z.string().max(120).optional(),
      statement: z.string().max(500).optional(),
      publicationPath: z.string().max(240).optional(),
      /** Typed D5/D6 operation — never use free-text notes as enum substitute. */
      pilotageOperation: PilotageOperationSchema.optional(),
      restrictionKindHint: z.string().max(64).optional(),
      restrictionTargetRefHint: z.string().max(120).optional(),
      notes: z.string().max(400).optional(),
      /** Typed D4 continuity capitalisation (RG-KNOW-001) — owner still validates. */
      knowledgeKind: KnowledgeRecordKindSchema.optional(),
      knowledgeStatement: z.string().max(500).optional(),
      epistemic: KnowledgeEpistemicSchema.optional(),
      subjectTitle: z.string().max(120).optional(),
      subjectId: z.string().max(120).optional(),
      continuityReason: z.string().max(240).optional(),
      /** Prefer these existing resources when selecting D4 context (Nora-chosen). */
      relevantAcquisIds: z.array(z.string().max(120)).max(8).optional(),
      relevantOpenPointIds: z.array(z.string().max(120)).max(8).optional(),
      relevantSubjectIds: z.array(z.string().max(120)).max(8).optional(),
    })
    .strict()
    .default({}),
  constraints: z.array(z.string().max(240)).max(12).default([]),
  dependsOn: z.array(z.string().min(1).max(64)).max(8).default([]),
  sourceEvidence: z.array(z.string().max(240)).max(8).default([]),
});
export type QualifiedIntentItem = z.infer<typeof QualifiedIntentItemSchema>;

/** O-03 — typed document payload distinct from replyDraft (max D4 = 100_000). */
export const DocumentProposalSchema = z
  .object({
    title: z.string().min(1).max(400),
    contentMarkdown: z.string().min(1).max(100_000),
  })
  .strict();

/** C-03 — designate a prior assistant proposal by message id (content resolved server-side). */
export const DocumentSourceSchema = z
  .object({
    kind: z.literal("PRIOR_ASSISTANT_MESSAGE"),
    assistantMessageId: z.string().min(1).max(128),
  })
  .strict();

/** Qualitative sas maturation — structured only; never a keyword scrape of replyDraft. */
export const PreparationAssessmentSchema = z.enum([
  "EXPLORING",
  "CLARIFYING",
  "PROPOSAL",
  "BASE_SUFFICIENTE",
]);
export type PreparationAssessment = z.infer<typeof PreparationAssessmentSchema>;

export const NoraTurnQualificationSchema = z.object({
  schemaVersion: z.literal(SEMANTIC_QUALIFICATION_SCHEMA_VERSION),
  status: QualificationStatusSchema,
  /**
   * Compréhension du tour courant (demande immédiate, reformulation locale).
   * Ne pas confondre avec l'intention métier durable du projet.
   */
  goal: z.string().max(800).default(""),
  /**
   * Intention métier durable du projet — distincte de goal / proposedProjectName.
   * Chaîne vide = inchangée ce tour (D2 conserve la valeur antérieure).
   * Renseigner uniquement pour établir ou corriger explicitement l'objectif fondateur.
   */
  projectIntention: z.string().max(800).default(""),
  /** Résultat envisagé lorsque réellement exprimé — ne pas inventer. */
  desiredOutcome: z.string().max(800).default(""),
  /** Périmètre initial lorsque réellement exprimé — ne pas inventer. */
  initialScope: z.string().max(800).default(""),
  /**
   * Nom de travail proposé pour le sas — distinct d'un REQUEST_EFFECT D2.
   * Permet une correction de nom sans second acte d'effet concurrent (S05).
   */
  proposedProjectName: z.string().max(120).default(""),
  intents: z.array(QualifiedIntentItemSchema).max(12).default([]),
  /**
   * Questions encore ouvertes APRÈS ce tour.
   * - tableau non vide = questions courantes connues ;
   * - tableau explicitement vide = aucune question courante après réévaluation fiable ;
   * - champ ABSENT (undefined) = questions non réévaluées — D2 conserve le courant antérieur.
   * Ne pas confondre omission et []. Pas de .default([]) : Zod effacerait la distinction.
   */
  clarifications: z.array(z.string().max(400)).max(8).optional(),
  /**
   * Ensemble 05 / P1-A — propositions de poursuite conversationnelles (≠ clarifications).
   * Additive / optional. Omission or [] = aucun bouton de poursuite.
   * Never derive continueChoices from clarifications[].
   */
  continueChoices: z
    .array(
      z.object({
        id: z.string().min(1).max(64),
        label: z.string().min(1).max(160),
        /** Explicit pilot utterance transmitted on click — not a métier command. */
        transmitText: z.string().min(1).max(800),
      }),
    )
    .max(6)
    .optional(),
  /**
   * Optional consultable references (D4/D9) — not continuation choices; do not expire with §6.8.
   */
  resourceReferences: z
    .array(
      z.object({
        kind: z.enum(["document", "git", "external"]),
        label: z.string().min(1).max(200),
        resourceId: z.string().max(128).optional(),
        revisionId: z.string().max(128).optional(),
        repositoryId: z.string().max(128).optional(),
        path: z.string().max(400).optional(),
        ref: z.string().max(120).optional(),
        commit: z.string().max(64).optional(),
        href: z.string().max(800).optional(),
      }),
    )
    .max(8)
    .optional(),
  replyDraft: z.string().max(12000).default(""),
  /** Appréciation qualitative de préparation (suggestion, jamais une autorité). */
  preparationAssessment: PreparationAssessmentSchema.optional(),
  preparationAssessmentExplanation: z.string().max(800).optional(),
  documentProposal: DocumentProposalSchema.optional(),
  documentSource: DocumentSourceSchema.optional(),
  /**
   * Optional visual / canonical composition.
   * READ path accepts e05 + projection-v1 + canonical-v1; Studio re-validates via parseVisualComposition.
   * LIVE WRITE uses NoraTurnQualificationAgentSchema (canonical-v1 only — no empty `{}` schema).
   */
  visualComposition: VisualCompositionPersistedSchema.optional(),
});
export type NoraTurnQualification = z.infer<typeof NoraTurnQualificationSchema>;

/** Agents SDK outputType — WRITE canonical-v1 only (A3). */
export const NoraTurnQualificationAgentSchema = NoraTurnQualificationSchema.extend({
  visualComposition: VisualCompositionAgentOutputSchema.optional(),
});

export type QualificationValidation =
  | { ok: true; value: NoraTurnQualification }
  | { ok: false; reason: string };

const EFFECT_CAPABILITIES = new Set<StudioCapabilityId>([
  "d2.create_project",
  "d4.create_document",
  "d4.revise_document",
  "d4.record_knowledge",
  "d5.pilotage_command",
  "d6.human_decision",
  "d7.prepare_publication",
  "d7.dispatch_publication",
  "d9.git_integration",
]);

const PILOTAGE_CAPS = new Set<StudioCapabilityId>([
  "d5.pilotage_command",
  "d6.human_decision",
]);

export function validateNoraTurnQualification(raw: unknown): QualificationValidation {
  const parsed = NoraTurnQualificationSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, reason: `SCHEMA_INVALID:${parsed.error.issues[0]?.message ?? "unknown"}` };
  }
  const q = parsed.data;
  const ids = new Set(q.intents.map((i) => i.id));
  if (ids.size !== q.intents.length) {
    return { ok: false, reason: "DUPLICATE_INTENT_ID" };
  }
  for (const intent of q.intents) {
    for (const dep of intent.dependsOn) {
      if (!ids.has(dep)) return { ok: false, reason: `DEPENDENCY_UNKNOWN:${dep}` };
      if (dep === intent.id) return { ok: false, reason: "DEPENDENCY_SELF" };
    }
    if (
      intent.mode === "REQUEST_EFFECT" &&
      PILOTAGE_CAPS.has(intent.capabilityId) &&
      !intent.parameters.pilotageOperation
    ) {
      return { ok: false, reason: `PILOTAGE_OPERATION_REQUIRED:${intent.id}` };
    }
    if (
      intent.parameters.pilotageOperation &&
      !PILOTAGE_CAPS.has(intent.capabilityId)
    ) {
      return { ok: false, reason: `PILOTAGE_OPERATION_CAPABILITY_MISMATCH:${intent.id}` };
    }
  }
  // C-03: prior source is authoritative; same-turn proposal must not silently compete.
  if (q.documentSource?.kind === "PRIOR_ASSISTANT_MESSAGE" && q.documentProposal) {
    return { ok: false, reason: "DOCUMENT_SOURCE_AND_PROPOSAL_CONFLICT" };
  }
  const graph = new Map(q.intents.map((i) => [i.id, i.dependsOn] as const));
  const visiting = new Set<string>();
  const visited = new Set<string>();
  const dfs = (n: string): boolean => {
    if (visiting.has(n)) return true;
    if (visited.has(n)) return false;
    visiting.add(n);
    for (const d of graph.get(n) ?? []) {
      if (dfs(d)) return true;
    }
    visiting.delete(n);
    visited.add(n);
    return false;
  };
  for (const id of ids) {
    if (dfs(id)) return { ok: false, reason: "DEPENDENCY_CYCLE" };
  }
  // Soft-sanitize visual composition.
  // Strategy A (canonical-v1): declared but unusable → refuse (A7). Never silently
  // fall back to an independent replyDraft as if the composition validated.
  // Legacy (e05 / projection-v1): soft-drop composition; replyDraft remains authority.
  // Omitted visualComposition: narrative-only — leave replyDraft untouched.
  if (q.visualComposition !== undefined) {
    const rawComp = q.visualComposition as { schemaVersion?: string };
    const declaredCanonical = rawComp.schemaVersion === VISUAL_COMPOSITION_SCHEMA;
    const cleaned = parseVisualComposition(q.visualComposition);
    if (cleaned) {
      (q as { visualComposition?: unknown }).visualComposition = cleaned;
      if (cleaned.contentAuthority === "canonical_sections") {
        const derived = deriveReplyDraftFromCanonicalSections(cleaned);
        if (!derived.ok) {
          if (derived.reason === "CV_DERIVE_OVERFLOW") {
            return {
              ok: false,
              reason: `CANONICAL_REPLY_OVERFLOW:${derived.length}>${derived.max}`,
            };
          }
          // CV_DERIVE_EMPTY (anchors-only, whitespace prose, etc.)
          return {
            ok: false,
            reason: `CANONICAL_COMPOSITION_EMPTY:${derived.reason}`,
          };
        }
        (q as { replyDraft: string }).replyDraft = derived.text;
      }
    } else if (declaredCanonical) {
      return { ok: false, reason: "CANONICAL_COMPOSITION_INVALID" };
    } else {
      delete (q as { visualComposition?: unknown }).visualComposition;
    }
  }
  return { ok: true, value: q };
}

export function unavailableQualification(reason: string, replyDraft = ""): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "UNAVAILABLE",
    goal: "",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    intents: [],
    clarifications: [reason.slice(0, 400)],
    replyDraft:
      replyDraft ||
      "Je ne peux pas qualifier cette intention de façon fiable pour le moment. Aucun effet n'a été engagé.",
  };
}

export function effectIntents(q: NoraTurnQualification): QualifiedIntentItem[] {
  if (q.status !== "QUALIFIED") return [];
  return q.intents.filter((i) => i.mode === "REQUEST_EFFECT");
}

export function wantsCapability(
  q: NoraTurnQualification,
  capabilityId: StudioCapabilityId,
): boolean {
  return effectIntents(q).some((i) => i.capabilityId === capabilityId);
}

export function firstEffectParam(
  q: NoraTurnQualification,
  capabilityId: StudioCapabilityId,
  key: keyof QualifiedIntentItem["parameters"],
): string | undefined {
  const hit = effectIntents(q).find((i) => i.capabilityId === capabilityId);
  const v = hit?.parameters?.[key];
  return typeof v === "string" && v.trim() ? v.trim() : undefined;
}

export function sanitizeProposedLabel(raw: string): string {
  return raw
    .replace(/[*_`#~\[\]()]+/g, " ")
    .replace(/[«»"']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Server-owned S05 turn kind from canonical qualification — not a lexical router. */
export function deriveThreadTurnKind(q: NoraTurnQualification): ThreadTurnKind {
  if (q.status === "UNAVAILABLE") return "INCERTAIN";
  if (q.status === "NEEDS_CLARIFICATION") return "INCERTAIN";
  const effects = effectIntents(q);
  if (effects.length > 0) return "INTENTION_EFFET";
  const cognitive = q.intents.some(
    (i) =>
      i.capabilityId === "d3.converse" ||
      i.capabilityId === "d4.read_knowledge" ||
      i.mode === "EXPLAIN" ||
      i.mode === "EXPLORE",
  );
  if (cognitive && q.intents.length > 0) return "DIALOGUE_INDEPENDANT";
  return "INCERTAIN";
}

export type DurablePilotageBinding = {
  schemaVersion: typeof SEMANTIC_QUALIFICATION_SCHEMA_VERSION;
  intentId: string;
  capabilityId: "d5.pilotage_command" | "d6.human_decision";
  operation: PilotageOperation;
  cycleType?: string;
  toCycleType?: string;
  methodRef?: string;
  methodVersion?: string;
  decisionId?: string;
  objectRef?: string;
  statement?: string;
  restrictionKindHint?: string;
  restrictionTargetRefHint?: string;
  objective?: string;
};

export function extractPilotageBinding(
  q: NoraTurnQualification,
  select?: { intentId?: string; operation?: string },
): DurablePilotageBinding | { ambiguous: true; reason: string } | null {
  if (q.status !== "QUALIFIED") {
    return { ambiguous: true, reason: `QUALIFICATION_${q.status}` };
  }
  let hits = effectIntents(q).filter((i) => PILOTAGE_CAPS.has(i.capabilityId));
  if (hits.length === 0) return null;
  // Disambiguate multi-intent qualifications by durable intentId / operation.
  if (select?.intentId) {
    hits = hits.filter((i) => i.id === select.intentId);
  }
  if (select?.operation) {
    hits = hits.filter((i) => i.parameters.pilotageOperation === select.operation);
  }
  if (hits.length === 0) {
    return {
      ambiguous: true,
      reason: select?.intentId || select?.operation
        ? "PILOTAGE_INTENT_NOT_IN_QUALIFICATION"
        : "NO_PILOTAGE_EFFECT_INTENTS",
    };
  }
  if (hits.length > 1) {
    return { ambiguous: true, reason: "MULTIPLE_PILOTAGE_EFFECT_INTENTS" };
  }
  const intent = hits[0]!;
  const operation = intent.parameters.pilotageOperation;
  if (!operation) {
    return { ambiguous: true, reason: "SEMANTIC_PILOTAGE_OPERATION_MISSING" };
  }
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    intentId: intent.id,
    capabilityId: intent.capabilityId as DurablePilotageBinding["capabilityId"],
    operation,
    cycleType: intent.parameters.cycleType,
    toCycleType: intent.parameters.toCycleType,
    methodRef: intent.parameters.methodRef,
    methodVersion: intent.parameters.methodVersion,
    decisionId: intent.parameters.decisionId,
    objectRef: intent.parameters.objectRef,
    statement: intent.parameters.statement,
    restrictionKindHint: intent.parameters.restrictionKindHint,
    restrictionTargetRefHint: intent.parameters.restrictionTargetRefHint,
    objective: intent.summary,
  };
}

/** Match a requested operation against durable qualification (owner-side). */
export function matchPilotageIntentInQualification(
  q: NoraTurnQualification,
  input: { operation?: string; intentId?: string },
): DurablePilotageBinding | { reject: true; reason: string; reasonCode: string } {
  const binding = extractPilotageBinding(q, {
    intentId: input.intentId,
    operation: input.operation,
  });
  if (binding == null) {
    return {
      reject: true,
      reasonCode: "AMBIGUOUS",
      reason: "Aucune intention pilotage REQUEST_EFFECT dans la qualification durable",
    };
  }
  if ("ambiguous" in binding) {
    return { reject: true, reasonCode: "AMBIGUOUS", reason: binding.reason };
  }
  return binding;
}

/** Projection used by existing D2/D4 mission builders — derived from semantic intents only. */
export type SemanticStudioProjection = {
  wantsProjectCreate: boolean;
  proposedProjectName: string | null;
  wantsFollowOnDocument: boolean;
  pendingDocumentBrief: string | null;
  documentAct: { kind: "NONE" } | { kind: "CREATE" } | {
    kind: "REVISE";
    documentHint: string | null;
    sectionHint: string | null;
  };
  publication: {
    wantsPublish: boolean;
    needsExplicitPath: boolean;
    path: string | null;
    targetPath: string | null;
    targetBranch: string | null;
    clarify: string | null;
    capabilityId: "d7.prepare_publication" | "d7.dispatch_publication" | "d9.git_integration" | null;
  };
  simpleDialogue: boolean;
};

export function projectStudioEffects(q: NoraTurnQualification): SemanticStudioProjection {
  const effects = effectIntents(q);
  const createProject = effects.find((i) => i.capabilityId === "d2.create_project");
  const createDoc = effects.find((i) => i.capabilityId === "d4.create_document");
  const reviseDoc = effects.find((i) => i.capabilityId === "d4.revise_document");
  const preparePub = effects.find((i) => i.capabilityId === "d7.prepare_publication");
  const dispatchPub = effects.find((i) => i.capabilityId === "d7.dispatch_publication");
  const gitPub = effects.find((i) => i.capabilityId === "d9.git_integration");
  // Prefer prepare over dispatch over generic git — not interchangeable.
  const publish = preparePub ?? dispatchPub ?? gitPub ?? null;
  const publishCapability = publish
    ? (publish.capabilityId as SemanticStudioProjection["publication"]["capabilityId"])
    : null;

  const wantsProjectCreate = Boolean(createProject);
  const fromIntent = createProject?.parameters.projectName
    ? sanitizeProposedLabel(createProject.parameters.projectName) || null
    : null;
  const fromEnvelope = q.proposedProjectName?.trim()
    ? sanitizeProposedLabel(q.proposedProjectName) || null
    : null;
  const proposedProjectName = fromIntent || fromEnvelope;

  const wantsFollowOnDocument = Boolean(
    wantsProjectCreate &&
      createDoc &&
      createProject &&
      createDoc.dependsOn.includes(createProject.id),
  );

  // Follow-on D4 after D2: defer immediate documentAct until Pilot create.
  // Immediate CREATE/REVISE only when not gated by an unresolved project-create intent.
  let documentAct: SemanticStudioProjection["documentAct"] = { kind: "NONE" };
  if (!wantsFollowOnDocument) {
    if (reviseDoc) {
      documentAct = {
        kind: "REVISE",
        documentHint: reviseDoc.parameters.documentHint ?? null,
        sectionHint: reviseDoc.parameters.sectionHint ?? null,
      };
    } else if (createDoc) {
      documentAct = { kind: "CREATE" };
    }
  }

  const pendingDocumentBrief = wantsFollowOnDocument
    ? (createDoc?.summary || createDoc?.parameters.notes || createDoc?.parameters.documentHint || null)
    : null;

  const path = publish?.parameters.publicationPath?.trim() || publish?.parameters.pathHint?.trim() || null;
  const publication = {
    wantsPublish: Boolean(publish),
    needsExplicitPath: Boolean(publish) && !path,
    path,
    targetPath: path,
    targetBranch: null as string | null,
    clarify: publish && !path ? "Chemin de publication Git manquant." : null,
    capabilityId: publishCapability,
  };

  const simpleDialogue =
    !wantsProjectCreate &&
    documentAct.kind === "NONE" &&
    !publication.wantsPublish &&
    !effects.some(
      (i) => PILOTAGE_CAPS.has(i.capabilityId) || i.capabilityId === "d4.record_knowledge",
    );

  return {
    wantsProjectCreate,
    proposedProjectName,
    wantsFollowOnDocument,
    pendingDocumentBrief: pendingDocumentBrief?.slice(0, 400) ?? null,
    documentAct,
    publication,
    simpleDialogue,
  };
}

export type KnowledgeCapitalisationProposal = {
  intentId: string;
  kind: z.infer<typeof KnowledgeRecordKindSchema>;
  statement: string;
  epistemic: z.infer<typeof KnowledgeEpistemicSchema>;
  subjectTitle?: string;
  subjectId?: string;
  continuityReason?: string;
};

/** Typed D4 continuity proposals from Nora qualification — never HumanDecision. */
export function extractKnowledgeProposals(
  q: NoraTurnQualification,
): KnowledgeCapitalisationProposal[] {
  if (q.status !== "QUALIFIED") return [];
  const out: KnowledgeCapitalisationProposal[] = [];
  for (const intent of effectIntents(q)) {
    if (intent.capabilityId !== "d4.record_knowledge") continue;
    const kind = intent.parameters.knowledgeKind;
    const statement = (intent.parameters.knowledgeStatement ?? intent.summary ?? "").trim();
    if (!kind || statement.length < 12) continue;
    out.push({
      intentId: intent.id,
      kind,
      statement: statement.slice(0, 500),
      epistemic: intent.parameters.epistemic ?? "hypothesized",
      subjectTitle: intent.parameters.subjectTitle?.trim() || undefined,
      subjectId: intent.parameters.subjectId?.trim() || undefined,
      continuityReason: intent.parameters.continuityReason?.trim() || undefined,
    });
  }
  return out;
}

/** Nora-preferred resource ids for context selection (non-authoritative). */
export function extractKnowledgeSelectionHints(q: NoraTurnQualification): {
  acquisIds: string[];
  openPointIds: string[];
  subjectIds: string[];
} {
  const acquisIds: string[] = [];
  const openPointIds: string[] = [];
  const subjectIds: string[] = [];
  if (q.status !== "QUALIFIED") return { acquisIds, openPointIds, subjectIds };
  for (const intent of q.intents) {
    for (const id of intent.parameters.relevantAcquisIds ?? []) {
      if (id && !acquisIds.includes(id)) acquisIds.push(id);
    }
    for (const id of intent.parameters.relevantOpenPointIds ?? []) {
      if (id && !openPointIds.includes(id)) openPointIds.push(id);
    }
    for (const id of intent.parameters.relevantSubjectIds ?? []) {
      if (id && !subjectIds.includes(id)) subjectIds.push(id);
    }
  }
  return { acquisIds, openPointIds, subjectIds };
}

export function mergeQualificationIntoResultJson(
  existingJson: string | null | undefined,
  terminalPayload: Record<string, unknown>,
): string {
  let semanticQualification: unknown;
  let semanticQualificationStashedAt: unknown;
  if (existingJson) {
    try {
      const prev = JSON.parse(existingJson) as Record<string, unknown>;
      semanticQualification = prev.semanticQualification;
      semanticQualificationStashedAt = prev.semanticQualificationStashedAt;
    } catch {
      /* ignore */
    }
  }
  const merged = {
    ...terminalPayload,
    ...(semanticQualification !== undefined ? { semanticQualification } : {}),
    ...(semanticQualificationStashedAt !== undefined
      ? { semanticQualificationStashedAt }
      : {}),
  };
  return JSON.stringify(merged);
}
