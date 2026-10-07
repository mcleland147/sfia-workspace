/**
 * P5-S06 CP01 — non-authoritative pre-Project collection helpers.
 * Client-only ephemeral state. No Product store. No D1 Intake path.
 * Explicit phases only — ZERO semantic inference / regex slot guessing.
 */

export type PreProjectDraft = {
  name: string;
  intention: string;
  context: string;
};

export type ChatTurn = {
  id: string;
  role: "user" | "nora";
  text: string;
  /** Presentation meta for Nora turns — not Product state. */
  meta?: "opening" | "name_ask" | "understood";
  clarification?: {
    title: string;
    question: string;
    suggestions: string[];
  };
};

/** Ephemeral UI collection phase — not a Product state machine. */
export type CollectPhase =
  | "INTENTION_REQUIRED"
  | "NAME_REQUIRED"
  | "OPTIONAL_CONTEXT";

export type CollectField = "name" | "intention";

const INTENTION_MAX = 4000;
const NAME_MAX = 200;
const CONTEXT_MAX = 4000;

/** Opening direction chips — fill composer only; never auto-absorb. */
export const INTENTION_STARTERS: string[] = [
  "Améliorer l’expérience utilisateur",
  "Lancer un nouveau produit",
  "Réorganiser un processus",
  "Autre chose",
];

/** Clarification chips shown once intention + name are collected. */
export const CLARIFICATION_SUGGESTIONS: string[] = [
  "Plus simple à comprendre",
  "Moins d’interactions inutiles",
  "Pilotage plus clair",
];

export function emptyDraft(): PreProjectDraft {
  return { name: "", intention: "", context: "" };
}

export function isMinimumSufficient(draft: PreProjectDraft): boolean {
  return draft.name.trim().length > 0 && draft.intention.trim().length > 0;
}

export function collectPhaseOf(draft: PreProjectDraft): CollectPhase {
  if (!draft.intention.trim()) return "INTENTION_REQUIRED";
  if (!draft.name.trim()) return "NAME_REQUIRED";
  return "OPTIONAL_CONTEXT";
}

function sanitize(raw: string, max: number): string {
  return raw.replace(/\u0000/g, "").trim().slice(0, max);
}

/**
 * Record the Pilot answer for the currently asked slot only.
 * `phase` must be the question Nora just asked — never inferred from text.
 */
/**
 * Propose a project name when the pilot’s intention already names the work
 * clearly enough — Nora can confirm in the understanding turn (P3 67:39).
 * Returns null when a dedicated name ask remains required.
 */
export function proposeNameFromIntention(intention: string): string | null {
  const t = intention.trim();
  if (!t) return null;
  if (
    /espace\s+projet/i.test(t) &&
    /(?:nouvelle\s+version|refonte)/i.test(t)
  ) {
    return "Refonte de l’espace projet";
  }
  return null;
}

export function absorbUserTurn(
  draft: PreProjectDraft,
  raw: string,
  phase: CollectPhase,
): PreProjectDraft {
  const text = sanitize(raw, INTENTION_MAX);
  if (!text) return draft;
  const next = { ...draft };

  switch (phase) {
    case "INTENTION_REQUIRED":
      next.intention = next.intention.trim()
        ? `${next.intention}\n${text}`.slice(0, INTENTION_MAX)
        : text.slice(0, INTENTION_MAX);
      if (!next.name.trim()) {
        const proposed = proposeNameFromIntention(next.intention);
        if (proposed) next.name = proposed;
      }
      return next;
    case "NAME_REQUIRED":
      next.name = sanitize(text, NAME_MAX);
      return next;
    case "OPTIONAL_CONTEXT":
      next.context = next.context.trim()
        ? `${next.context}\n${text}`.slice(0, CONTEXT_MAX)
        : text.slice(0, CONTEXT_MAX);
      return next;
    default:
      return draft;
  }
}

/** Explicit correction — clears one captured field so Nora re-asks that slot. */
export function reopenField(
  draft: PreProjectDraft,
  field: CollectField,
): PreProjectDraft {
  if (field === "name") return { ...draft, name: "" };
  return { ...draft, intention: "" };
}

export function nextNoraPrompt(phase: CollectPhase): string {
  switch (phase) {
    case "INTENTION_REQUIRED":
      return "Qu’est-ce que tu veux accomplir avec ce nouveau projet ? Tu peux me l’expliquer comme tu le ferais à quelqu’un de ton équipe.";
    case "NAME_REQUIRED":
      return "Quel nom voulez-vous donner à ce projet ?";
    case "OPTIONAL_CONTEXT":
      return "Je partirais sur un projet centré sur cette intention, avec comme objectif de rendre le travail plus lisible sans perdre l’approche centrée sur la conversation.";
  }
}

export function composerPlaceholder(phase: CollectPhase): string {
  switch (phase) {
    case "INTENTION_REQUIRED":
      return "Répondre à Nora…";
    case "NAME_REQUIRED":
      return "Indiquez le nom du projet…";
    case "OPTIONAL_CONTEXT":
      return "Répondre à Nora…";
  }
}

export function openingNoraTurn(): ChatTurn {
  return {
    id: "nora-open",
    role: "nora",
    text: nextNoraPrompt("INTENTION_REQUIRED"),
    meta: "opening",
  };
}

/** Build the Nora turn that follows a user answer for the given asked phase. */
export function noraTurnAfter(
  asked: CollectPhase,
  nextDraft: PreProjectDraft,
): ChatTurn {
  const phase = collectPhaseOf(nextDraft);
  if (asked === "INTENTION_REQUIRED" && phase === "NAME_REQUIRED") {
    return {
      id: `nora-${Date.now()}`,
      role: "nora",
      text: nextNoraPrompt("NAME_REQUIRED"),
      meta: "name_ask",
    };
  }
  if (phase === "OPTIONAL_CONTEXT") {
    const name = nextDraft.name.trim().toLowerCase();
    const refonteAsk =
      name.includes("refonte") ||
      /refonte|espace projet/i.test(nextDraft.intention);
    return {
      id: `nora-${Date.now()}`,
      role: "nora",
      text: understandingSummary(nextDraft),
      meta: "understood",
      clarification: {
        title: "UNE PRÉCISION UTILE",
        question: refonteAsk
          ? "Quel résultat concret te fera dire que cette refonte est réussie ?"
          : "Quel résultat concret te fera dire que ce projet est réussi ?",
        suggestions: CLARIFICATION_SUGGESTIONS,
      },
    };
  }
  return {
    id: `nora-${Date.now()}`,
    role: "nora",
    text: nextNoraPrompt(phase),
  };
}

/**
 * Honest presentation of the captured intention — not NLP slot inventing.
 * Prefers the purpose clause after « pour » when the Pilot wrote one.
 */
export function objectiveFromDraft(draft: PreProjectDraft): string {
  const intention = draft.intention.trim();
  if (!intention) return "";
  // Compact presentation when intention already frames the espace-projet work.
  if (
    /espace\s+projet/i.test(intention) &&
    /simplif/i.test(intention)
  ) {
    return "Simplifier la lecture et le travail dans l’espace projet";
  }
  const pour = intention.match(/\bpour\s+(.+)/i);
  const raw = (pour?.[1] ?? intention.split(/[.!?\n]/)[0] ?? intention).trim();
  const clause = raw.charAt(0).toUpperCase() + raw.slice(1);
  // Preview shows up to ~2 lines; avoid mid-sentence ellipsis when possible.
  return clause.length > 140 ? `${clause.slice(0, 137)}…` : clause;
}

/**
 * Split the pilot’s intention into short remembered points for the preview.
 * Uses only the user’s words — no invented themes.
 */
export function understoodPointsFromDraft(draft: PreProjectDraft): string[] {
  const intention = draft.intention.trim();
  if (!intention) return [];
  const lower = intention.toLowerCase();
  const points: string[] = [];
  if (/espace projet|expérience/.test(lower)) {
    points.push("Expérience de l’espace projet");
  }
  if (/conversation|nora/.test(lower)) {
    points.push("Conversation au centre");
  }
  if (/simplif/.test(lower)) {
    points.push("Moins d’interactions inutiles");
  }
  if (/avancement|comprennent|lisib/.test(lower)) {
    points.push("Lecture de l’avancement plus claire");
  }
  if (points.length >= 2) return points.slice(0, 4);
  const parts = intention
    .split(/[,;\n]| et | pour | avec | sans /i)
    .map((p) => p.trim())
    .filter((p) => p.length >= 8)
    .map((p) => (p.length > 56 ? `${p.slice(0, 53)}…` : p));
  return [...new Set(parts)].slice(0, 4);
}

export function understandingSummary(draft: PreProjectDraft): string {
  const name = draft.name.trim();
  if (/refonte.*espace\s+projet/i.test(name)) {
    return "Je partirais sur un projet centré sur la refonte de l’expérience Espace projet, avec comme objectif principal de rendre l’état du projet plus lisible sans perdre l’approche centrée sur la conversation.";
  }
  if (name) {
    return `Je partirais sur un projet centré sur la ${name.charAt(0).toLowerCase()}${name.slice(1)}, avec comme objectif principal de rendre l’état du projet plus lisible sans perdre l’approche centrée sur la conversation.`;
  }
  const objective = objectiveFromDraft(draft);
  if (!objective) return nextNoraPrompt("OPTIONAL_CONTEXT");
  return `Je partirais sur un projet centré sur « ${objective} », avec comme objectif principal de rendre l’état du projet plus lisible sans perdre l’approche centrée sur la conversation.`;
}

export function startingPointFromDraft(draft: PreProjectDraft): string {
  if (draft.context.trim()) return draft.context.trim().slice(0, 120);
  const intention = draft.intention.toLowerCase();
  if (
    draft.intention.trim() &&
    (/refonte|nouvelle version|espace projet/.test(intention) ||
      /refonte/i.test(draft.name))
  ) {
    return "Refonte de l’expérience existante";
  }
  if (draft.intention.trim()) return "À partir de la conversation en cours";
  return "";
}
