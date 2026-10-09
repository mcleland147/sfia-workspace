/**
 * P6-HQA-NEWPROJECT-01 — pre-Project cognitive onboarding contract.
 *
 * Nora (provider) proposes; Studio validates and materializes.
 * No Product write, no CycleInstance, no HumanDecision here.
 *
 * Closure correction: reversible refuse, non-syntactic gate,
 * prioritized handoff assembly, usage observation (no FinOps invent).
 */

export const NEW_PROJECT_ONBOARDING_SCHEMA_NAME =
  "new_project_onboarding_turn_v1" as const;

export const ONBOARDING_HANDOFF_MARKER = "[[nora-onboarding-handoff]]" as const;

const INTENTION_MAX = 4000;
const NAME_MAX = 200;
const CONTEXT_MAX = 4000;
const ORIENTATION_MAX = 800;
const REPLY_MAX = 4000;

/** Studio-held view of whether the known intention is a project direction. */
export type IntentionKind =
  | "unset"
  | "project_direction"
  | "non_project"
  | "unclear";

export type PreProjectDraft = {
  name: string;
  /** True when Studio or Nora stamped a provisional label — Pilot may rename. */
  nameProvisional: boolean;
  intention: string;
  /** Reformulation / objective candidate — proposal, not Product truth until Create. */
  objective: string;
  context: string;
  /** Non-authoritative first work direction. */
  firstOrientation: string;
  unknowns: string[];
  /** Nora recommendation only — never alone authorizes Create. */
  cognitiveCreateProposal: boolean;
  /**
   * Current create-block from an explicit Pilot refuse/defer.
   * Cleared only by a later explicit acceptCreateDetected — not by silence.
   */
  explicitRefuseCreate: boolean;
  /** Last Nora classification of whether a project direction is present. */
  intentionKind: IntentionKind;
  /** Cognitive turns completed (provider-backed). */
  cognitiveTurns: number;
};

export type ChatTurn = {
  id: string;
  role: "user" | "nora";
  text: string;
  meta?: "opening" | "cognitive" | "error" | "understood";
  clarification?: {
    title: string;
    question: string;
    suggestions: string[];
  };
};

export type OnboardingCognitivePayload = {
  replyText: string;
  intentionKnown: string | null;
  objectiveProposal: string | null;
  contextKnown: string | null;
  nameProposal: string | null;
  nameProvisional: boolean;
  firstOrientationProposal: string | null;
  unknowns: string[];
  sufficientForCreateProposal: boolean;
  /**
   * Explicit Pilot refuse/defer of creation for this turn.
   * Sticky until acceptCreateDetected — absence does not clear.
   */
  refuseCreateDetected: boolean;
  /**
   * Explicit Pilot accept/retract of a prior refuse ("allons-y", "créons-le").
   * Name confirmation alone must NOT set this.
   */
  acceptCreateDetected: boolean;
  /**
   * Nora's classification — Studio uses this instead of message length.
   * project_direction = exploitable even if exploratory.
   */
  intentionKind: "project_direction" | "non_project" | "unclear";
  clarificationQuestion: string | null;
  suggestions: string[];
};

/** JSON Schema for ConversationProvider.completeStructured (OpenAI json_schema). */
export const NEW_PROJECT_ONBOARDING_JSON_SCHEMA: Record<string, unknown> = {
  type: "object",
  additionalProperties: false,
  required: [
    "replyText",
    "intentionKnown",
    "objectiveProposal",
    "contextKnown",
    "nameProposal",
    "nameProvisional",
    "firstOrientationProposal",
    "unknowns",
    "sufficientForCreateProposal",
    "refuseCreateDetected",
    "acceptCreateDetected",
    "intentionKind",
    "clarificationQuestion",
    "suggestions",
  ],
  properties: {
    replyText: { type: "string" },
    intentionKnown: { type: ["string", "null"] },
    objectiveProposal: { type: ["string", "null"] },
    contextKnown: { type: ["string", "null"] },
    nameProposal: { type: ["string", "null"] },
    nameProvisional: { type: "boolean" },
    firstOrientationProposal: { type: ["string", "null"] },
    unknowns: { type: "array", items: { type: "string" } },
    sufficientForCreateProposal: { type: "boolean" },
    refuseCreateDetected: { type: "boolean" },
    acceptCreateDetected: { type: "boolean" },
    intentionKind: {
      type: "string",
      enum: ["project_direction", "non_project", "unclear"],
    },
    clarificationQuestion: { type: ["string", "null"] },
    suggestions: { type: "array", items: { type: "string" } },
  },
};

export const INTENTION_STARTERS: string[] = [
  "Améliorer l’expérience utilisateur",
  "Lancer un nouveau produit",
  "Réorganiser un processus",
  "Autre chose",
];

export function emptyDraft(): PreProjectDraft {
  return {
    name: "",
    nameProvisional: false,
    intention: "",
    objective: "",
    context: "",
    firstOrientation: "",
    unknowns: [],
    cognitiveCreateProposal: false,
    explicitRefuseCreate: false,
    intentionKind: "unset",
    cognitiveTurns: 0,
  };
}

function sanitize(raw: string, max: number): string {
  return raw.replace(/\u0000/g, "").trim().slice(0, max);
}

function nullableString(value: unknown, max: number): string | null {
  if (value == null) return null;
  if (typeof value !== "string") return null;
  const t = sanitize(value, max);
  return t.length > 0 ? t : null;
}

function parseIntentionKind(value: unknown): IntentionKind | null {
  if (value === "project_direction") return "project_direction";
  if (value === "non_project") return "non_project";
  if (value === "unclear") return "unclear";
  return null;
}

/** Deterministic provisional name from intention — labeled provisional by Studio. */
export function provisionalNameFromIntention(intention: string): string {
  const t = intention.trim().replace(/\s+/g, " ");
  if (!t) return "Projet exploratoire";
  const clause = t.split(/[.!?\n]/)[0]?.trim() || t;
  const clipped = clause.length > 72 ? `${clause.slice(0, 69)}…` : clause;
  return clipped.charAt(0).toUpperCase() + clipped.slice(1);
}

/**
 * Studio gate — independent of Nora's sufficient flag alone.
 *
 * Requires:
 * - no current explicit refuse;
 * - Product-usable non-empty name (proposed or provisional);
 * - at least one cognitive turn;
 * - intentionKind === project_direction with non-empty intention text;
 * - Nora create proposal OR exploratory path (project_direction without refuse).
 *
 * Length is NOT a maturity criterion (technical empty-check only).
 * Nora sufficient=true cannot authorize Create without project_direction.
 */
export function studioCanCreate(draft: PreProjectDraft): boolean {
  if (draft.explicitRefuseCreate) return false;
  if (draft.cognitiveTurns < 1) return false;
  if (!draft.name.trim()) return false;
  if (draft.intentionKind !== "project_direction") return false;
  if (!draft.intention.trim()) return false;
  // Exploratory create allowed when direction is known, even if Nora was uncertain.
  // Nora's cognitiveCreateProposal strengthens UX messaging but is not sole authority.
  return true;
}

export function isMinimumSufficient(draft: PreProjectDraft): boolean {
  return studioCanCreate(draft);
}

export function parseOnboardingCognitivePayload(
  raw: unknown,
): OnboardingCognitivePayload | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  const replyText = nullableString(o.replyText, REPLY_MAX);
  if (!replyText) return null;
  const intentionKind = parseIntentionKind(o.intentionKind);
  if (!intentionKind || intentionKind === "unset") return null;
  const unknowns = Array.isArray(o.unknowns)
    ? o.unknowns
        .filter((u): u is string => typeof u === "string")
        .map((u) => sanitize(u, 240))
        .filter(Boolean)
        .slice(0, 8)
    : [];
  const suggestions = Array.isArray(o.suggestions)
    ? o.suggestions
        .filter((u): u is string => typeof u === "string")
        .map((u) => sanitize(u, 120))
        .filter(Boolean)
        .slice(0, 6)
    : [];
  return {
    replyText,
    intentionKnown: nullableString(o.intentionKnown, INTENTION_MAX),
    objectiveProposal: nullableString(o.objectiveProposal, INTENTION_MAX),
    contextKnown: nullableString(o.contextKnown, CONTEXT_MAX),
    nameProposal: nullableString(o.nameProposal, NAME_MAX),
    nameProvisional: o.nameProvisional === true,
    firstOrientationProposal: nullableString(
      o.firstOrientationProposal,
      ORIENTATION_MAX,
    ),
    unknowns,
    sufficientForCreateProposal: o.sufficientForCreateProposal === true,
    refuseCreateDetected: o.refuseCreateDetected === true,
    acceptCreateDetected: o.acceptCreateDetected === true,
    intentionKind,
    clarificationQuestion: nullableString(o.clarificationQuestion, 400),
    suggestions,
  };
}

export function extractJsonObject(text: string): unknown | null {
  const trimmed = text.trim();
  if (!trimmed) return null;
  try {
    return JSON.parse(trimmed) as unknown;
  } catch {
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start < 0 || end <= start) return null;
    try {
      return JSON.parse(trimmed.slice(start, end + 1)) as unknown;
    } catch {
      return null;
    }
  }
}

/**
 * Merge Nora cognitive payload into ephemeral draft.
 *
 * Refuse is sticky until acceptCreateDetected.
 * AcceptCreateDetected does not invent intention — Studio still requires project_direction.
 * Name confirmation alone must not arrive as acceptCreateDetected (prompt contract).
 */
export function mergeCognitiveIntoDraft(
  prev: PreProjectDraft,
  payload: OnboardingCognitivePayload,
  userText: string,
): PreProjectDraft {
  void userText;
  let explicitRefuseCreate = prev.explicitRefuseCreate;
  if (payload.refuseCreateDetected) {
    explicitRefuseCreate = true;
  } else if (payload.acceptCreateDetected) {
    explicitRefuseCreate = false;
  }

  const next: PreProjectDraft = {
    ...prev,
    cognitiveTurns: prev.cognitiveTurns + 1,
    explicitRefuseCreate,
    intentionKind: payload.intentionKind,
    cognitiveCreateProposal:
      payload.sufficientForCreateProposal && !payload.refuseCreateDetected,
    unknowns: payload.unknowns.length > 0 ? payload.unknowns : prev.unknowns,
  };

  if (payload.intentionKnown) {
    next.intention = payload.intentionKnown;
  }

  if (payload.objectiveProposal) {
    next.objective = payload.objectiveProposal;
  } else if (!next.objective.trim() && next.intention.trim()) {
    next.objective = next.intention;
  }

  if (payload.contextKnown) {
    next.context = payload.contextKnown;
  }

  if (payload.nameProposal) {
    next.name = payload.nameProposal;
    next.nameProvisional = payload.nameProvisional === true;
  }

  if (payload.firstOrientationProposal) {
    next.firstOrientation = payload.firstOrientationProposal;
  }

  // Studio provisional name when intention is a project direction and name empty.
  if (
    !next.name.trim() &&
    next.intention.trim() &&
    next.intentionKind === "project_direction"
  ) {
    next.name = provisionalNameFromIntention(next.intention);
    next.nameProvisional = true;
  }

  if (payload.refuseCreateDetected) {
    next.cognitiveCreateProposal = false;
  }

  // Nora claiming sufficient without project_direction cannot open Create.
  if (next.intentionKind !== "project_direction") {
    next.cognitiveCreateProposal = false;
  }

  return next;
}

export function openingNoraTurn(): ChatTurn {
  return {
    id: "nora-open",
    role: "nora",
    text: "Bonjour — dis-moi ce que tu veux accomplir avec ce projet. Tu peux rester large : on précisera ensemble seulement ce qui est utile pour démarrer.",
    meta: "opening",
  };
}

export function objectiveFromDraft(draft: PreProjectDraft): string {
  const objective = draft.objective.trim() || draft.intention.trim();
  if (!objective) return "";
  return objective.length > 160 ? `${objective.slice(0, 157)}…` : objective;
}

export function startingPointFromDraft(draft: PreProjectDraft): string {
  if (draft.context.trim()) return draft.context.trim().slice(0, 160);
  if (draft.intention.trim()) return "À partir de la conversation d’accueil";
  return "";
}

export function understoodPointsFromDraft(draft: PreProjectDraft): string[] {
  const points: string[] = [];
  if (draft.intention.trim()) {
    const i = draft.intention.trim();
    points.push(i.length > 72 ? `${i.slice(0, 69)}…` : i);
  }
  for (const u of draft.unknowns.slice(0, 3)) {
    points.push(`À préciser : ${u}`);
  }
  return points.slice(0, 5);
}

export type HandoffAssemblyResult = {
  readonly text: string;
  readonly truncated: boolean;
  readonly transcriptTurnsIncluded: number;
  readonly essentialPreserved: boolean;
};

/**
 * Prioritized Product context handoff.
 * Essential block (marker, intention, unknowns, orientation) always first.
 * Transcript fills remaining budget — never silently drops essentials via a
 * final blind slice of the whole string.
 */
export function buildProductContextHandoff(
  draft: PreProjectDraft,
  transcript: ReadonlyArray<{ role: "user" | "nora"; text: string }>,
): string {
  return assembleProductContextHandoff(draft, transcript).text;
}

export function assembleProductContextHandoff(
  draft: PreProjectDraft,
  transcript: ReadonlyArray<{ role: "user" | "nora"; text: string }>,
  maxChars: number = CONTEXT_MAX,
): HandoffAssemblyResult {
  const essential = [
    ONBOARDING_HANDOFF_MARKER,
    "Synthèse d’accueil Nora (non autoritative — propositions et faits de conversation).",
    `Intention: ${draft.intention.trim() || "(non établie)"}`,
    `Objectif (proposition): ${draft.objective.trim() || draft.intention.trim() || "(non établi)"}`,
    `Nom: ${draft.name.trim() || "(non établi)"}${draft.nameProvisional ? " (provisoire)" : ""}`,
    `Contexte: ${draft.context.trim() || "(à préciser)"}`,
    `Première orientation (proposition): ${draft.firstOrientation.trim() || "(aucune)"}`,
    `Incertitudes: ${draft.unknowns.length ? draft.unknowns.join(" · ") : "(aucune listée)"}`,
    "Transcript d’accueil (abrégé, non Session Agents):",
  ];
  const footer =
    "Fin handoff. Aucun CycleInstance ni HumanDecision n’a été créé à l’accueil. FULL TRANSCRIPT REPLAY: non.";

  const essentialText = essential.join("\n");
  // Hard floor: if essentials alone exceed budget, truncate unknowns/context first
  // while keeping marker + intention + refuse.
  if (essentialText.length + 1 + footer.length > maxChars) {
    const core = [
      ONBOARDING_HANDOFF_MARKER,
      `Intention: ${draft.intention.trim() || "(non établie)"}`,
      `Objectif (proposition): ${(draft.objective.trim() || draft.intention.trim() || "(non établi)").slice(0, 400)}`,
      `Nom: ${draft.name.trim() || "(non établi)"}${draft.nameProvisional ? " (provisoire)" : ""}`,
      `Incertitudes: ${draft.unknowns.slice(0, 4).join(" · ") || "(aucune)"}`,
      `Première orientation (proposition): ${draft.firstOrientation.trim().slice(0, 200) || "(aucune)"}`,
      "Transcript d’accueil: (omis — budget)",
    ].join("\n");
    const text = `${core}\n${footer}`.slice(0, maxChars);
    return {
      text,
      truncated: true,
      transcriptTurnsIncluded: 0,
      essentialPreserved: text.includes(ONBOARDING_HANDOFF_MARKER) &&
        text.includes("Intention:"),
    };
  }

  const budgetForTranscript =
    maxChars - essentialText.length - footer.length - 2;
  const turns: string[] = [];
  let used = 0;
  let included = 0;
  for (const turn of transcript.slice(-12)) {
    const label = turn.role === "user" ? "Pilote" : "Nora";
    const body = turn.text.trim().slice(0, 280);
    if (!body) continue;
    const line = `- ${label}: ${body}`;
    if (used + line.length + 1 > budgetForTranscript) break;
    turns.push(line);
    used += line.length + 1;
    included += 1;
  }

  const text = [essentialText, ...turns, footer].join("\n");
  return {
    text,
    truncated: included < Math.min(transcript.length, 12),
    transcriptTurnsIncluded: included,
    essentialPreserved: true,
  };
}

/** Read-back helper for continuity tests — parses essential fields from handoff text. */
export function parseOnboardingHandoffEssentials(context: string): {
  markerPresent: boolean;
  intention: string | null;
  unknownsLine: string | null;
  orientation: string | null;
  claimsFullReplay: boolean;
} {
  const markerPresent = context.includes(ONBOARDING_HANDOFF_MARKER);
  const intention =
    context.match(/^Intention:\s*(.+)$/m)?.[1]?.trim() ?? null;
  const unknownsLine =
    context.match(/^Incertitudes:\s*(.+)$/m)?.[1]?.trim() ?? null;
  const orientation =
    context
      .match(/^Première orientation \(proposition\):\s*(.+)$/m)?.[1]
      ?.trim() ?? null;
  return {
    markerPresent,
    intention,
    unknownsLine,
    orientation,
    claimsFullReplay: /FULL TRANSCRIPT REPLAY:\s*oui/i.test(context),
  };
}

export function onboardingSystemPrompt(): string {
  return [
    "Tu es Nora, assistante de SFIA Studio. Tu accueilles un Pilote avant la création d’un projet.",
    "Tu n’as aucune autorité de création. Tu comprends, reformules, proposes, et peux recommander que la création soit possible.",
    "Réponds en français courant, calme, naturel, proportionné. Pas de jargon inutile. Pas de questionnaire systématique.",
    "Ne prétends pas être humaine. N’invente pas de faits, d’autorité, ni de contexte non dit.",
    "Les champs intention/objectif/contexte/nom sont des repères — pas quatre questions obligatoires.",
    "intentionKind: project_direction si une direction de projet (même exploratoire) est identifiable ; non_project si hors sujet / sans projet ; unclear sinon.",
    "sufficientForCreateProposal=true seulement si intentionKind=project_direction.",
    "refuseCreateDetected=true si le Pilote refuse ou reporte explicitement la création.",
    "acceptCreateDetected=true seulement si le Pilote accepte explicitement de créer / revient sur un refus (« allons-y », « créons-le »). Confirmer un nom ≠ accepter de créer.",
    "Un tour neutre (question, précision) ne doit activer ni refuseCreateDetected ni acceptCreateDetected.",
    "Si le Pilote veut commencer vite avec peu d’infos, privilégie une création exploratoire honnête.",
    "firstOrientationProposal = direction de travail provisoire non autoritative (pas un démarrage de cycle).",
    "replyText = ton message conversationnel au Pilote (sans JSON visible).",
  ].join("\n");
}

export function composerPlaceholder(draft: PreProjectDraft): string {
  if (!draft.intention.trim()) return "Décrire ce que tu veux accomplir…";
  if (studioCanCreate(draft)) return "Préciser, corriger, ou poser une question…";
  return "Répondre à Nora…";
}

/** Morris-declared Human QA envelope (documentary) — NOT a technical hard cap. */
export const NEW_PROJECT_HUMAN_QA_BUDGET_EUR_DECLARED = 10 as const;
