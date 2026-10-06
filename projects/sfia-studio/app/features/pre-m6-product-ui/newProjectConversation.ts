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
      return "Quel est l’objectif ou l’intention principale de ce projet ? Aucun projet durable n’est créé pour l’instant.";
    case "NAME_REQUIRED":
      return "Quel nom voulez-vous donner à ce projet ?";
    case "OPTIONAL_CONTEXT":
      return "Voici les informations que vous avez fournies. Vérifiez l’aperçu, puis créez le projet — ou ajoutez du contexte.";
  }
}

export function composerPlaceholder(phase: CollectPhase): string {
  switch (phase) {
    case "INTENTION_REQUIRED":
      return "Décrivez l’intention…";
    case "NAME_REQUIRED":
      return "Indiquez le nom du projet…";
    case "OPTIONAL_CONTEXT":
      return "Ajouter du contexte (optionnel)…";
  }
}

export function openingNoraTurn(): ChatTurn {
  return {
    id: "nora-open",
    role: "nora",
    text: nextNoraPrompt("INTENTION_REQUIRED"),
  };
}
