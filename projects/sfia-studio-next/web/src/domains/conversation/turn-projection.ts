/**
 * Ensemble 05 / M1 — structured D3 turn projection for Nora replies.
 * Stored additively in conversation_turn_commands.result_json (no migration).
 * Never parse markdown to decide mutations; choices are typed here only.
 * Clarifications ≠ continue choices (P1-A corrective).
 * T02 — optional visualComposition is additive; omission = text-only legacy.
 */

import {
  parseVisualComposition,
  type VisualComposition,
} from "./visual-composition";

export const TURN_PROJECTION_SCHEMA = "e05-turn-projection-v1" as const;

export type TurnChoiceKind = "continue";

export type TurnChoice = {
  id: string;
  label: string;
  kind: TurnChoiceKind;
  /** Explicit pilot utterance transmitted on click (new D3 turn). */
  transmitText: string;
};

export type TurnReference = {
  kind: "document" | "git" | "external" | "contract";
  label: string;
  resourceId?: string;
  revisionId?: string;
  repositoryId?: string;
  path?: string;
  ref?: string;
  commit?: string;
  href?: string;
  available?: boolean;
  /** 1-based PDF page when citing an authorized PDF source. */
  page?: number;
  /** Contract identity (when kind=contract). */
  fingerprint?: string;
};

export type TurnActivitySummary = {
  /** Honest summary of observable facts after terminal commit — never invented mid-flight. */
  kind: "wait" | "sources_consulted" | "interrupted" | "failed" | "uncertain";
  label: string;
  detail?: string;
};

export type TurnProjection = {
  schemaVersion: typeof TURN_PROJECTION_SCHEMA;
  messageId: string | null;
  turnCommandId?: string | null;
  finalized: boolean;
  status: string;
  choices: TurnChoice[];
  references: TurnReference[];
  activity?: TurnActivitySummary | null;
  /**
   * Optional validated visual composition (T02).
   * Absent on historical turns — SafeMarkdown-only remains valid.
   */
  visualComposition?: VisualComposition | null;
};

export type MessageProjectionView = TurnProjection & {
  /** Actionable only for the latest finalized Nora turn with no later pilot turn. */
  actionable: boolean;
};

export type ContinueChoiceInput = {
  id: string;
  label: string;
  transmitText: string;
};

/**
 * Build projection from durable turn facts.
 * Continue choices come ONLY from typed continueChoices — never from clarifications[].
 */
export function buildTurnProjection(input: {
  messageId: string | null;
  turnCommandId?: string | null;
  status: string;
  finalized: boolean;
  /** Typed continuation offers — distinct from open questions (clarifications). */
  continueChoices?: ContinueChoiceInput[] | null;
  references?: TurnReference[] | null;
  toolCallsObserved?: number | null;
  d4CharsReturned?: number | null;
  documentSave?: { documentId?: string; revisionId?: string; status?: string } | null;
  /** Optional T02 visual composition — sanitized; invalid → omitted. */
  visualComposition?: unknown;
}): TurnProjection {
  const choices: TurnChoice[] = [];
  const seen = new Set<string>();
  for (const raw of input.continueChoices ?? []) {
    const id = String(raw?.id ?? "").trim();
    const label = String(raw?.label ?? "").trim();
    const transmitText = String(raw?.transmitText ?? "").trim();
    if (!id || !label || !transmitText) continue;
    if (seen.has(id) || seen.has(transmitText)) continue;
    seen.add(id);
    seen.add(transmitText);
    choices.push({
      id,
      label: label.length > 120 ? `${label.slice(0, 117)}…` : label,
      kind: "continue",
      transmitText,
    });
    if (choices.length >= 6) break;
  }

  const references: TurnReference[] = [...(input.references ?? [])];
  if (input.documentSave?.documentId) {
    const already = references.some(
      (r) => r.kind === "document" && r.resourceId === input.documentSave!.documentId,
    );
    if (!already) {
      references.push({
        kind: "document",
        label: "Document du projet",
        resourceId: input.documentSave.documentId,
        revisionId: input.documentSave.revisionId,
        available: input.documentSave.status !== "FAILED",
      });
    }
  }

  let activity: TurnActivitySummary | null = null;
  const status = (input.status ?? "").toUpperCase();
  if (status === "FAILED") {
    activity = { kind: "failed", label: "Réponse interrompue ou en échec" };
  } else if (status === "UNKNOWN") {
    activity = { kind: "uncertain", label: "État de la réponse encore incertain" };
  } else if ((input.toolCallsObserved ?? 0) > 0 || (input.d4CharsReturned ?? 0) > 0) {
    activity = {
      kind: "sources_consulted",
      label: "Sources consultées pour cette réponse",
      detail:
        (input.toolCallsObserved ?? 0) > 0
          ? `${input.toolCallsObserved} consultation(s) observée(s)`
          : undefined,
    };
  }

  const visualComposition = parseVisualComposition(input.visualComposition);

  return {
    schemaVersion: TURN_PROJECTION_SCHEMA,
    messageId: input.messageId,
    turnCommandId: input.turnCommandId ?? null,
    finalized: input.finalized,
    status: input.status,
    choices,
    references,
    activity,
    ...(visualComposition ? { visualComposition } : {}),
  };
}

function isContinueChoice(c: unknown): c is TurnChoice {
  if (!c || typeof c !== "object") return false;
  const o = c as Record<string, unknown>;
  return (
    typeof o.id === "string" &&
    typeof o.label === "string" &&
    o.kind === "continue" &&
    typeof o.transmitText === "string" &&
    o.transmitText.trim().length > 0
  );
}

export function parseTurnProjection(raw: unknown): TurnProjection | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  if (o.schemaVersion !== TURN_PROJECTION_SCHEMA) return null;
  if (!Array.isArray(o.choices)) return null;
  const visualComposition = parseVisualComposition(o.visualComposition);
  return {
    schemaVersion: TURN_PROJECTION_SCHEMA,
    messageId: typeof o.messageId === "string" ? o.messageId : null,
    turnCommandId: typeof o.turnCommandId === "string" ? o.turnCommandId : null,
    finalized: Boolean(o.finalized),
    status: typeof o.status === "string" ? o.status : "UNKNOWN",
    choices: (o.choices as unknown[]).filter(isContinueChoice),
    references: Array.isArray(o.references) ? (o.references as TurnReference[]) : [],
    activity: (o.activity as TurnActivitySummary | null | undefined) ?? null,
    ...(visualComposition ? { visualComposition } : {}),
  };
}

export function extractTurnProjectionFromResultJson(
  resultJson: string | null | undefined,
): TurnProjection | null {
  if (!resultJson) return null;
  try {
    const parsed = JSON.parse(resultJson) as Record<string, unknown>;
    return parseTurnProjection(parsed.turnProjection);
  } catch {
    return null;
  }
}

/**
 * Mark which projection groups remain actionable after reload / new pilot turn.
 * Historical choices stay visible but non-actionable.
 * UNKNOWN / frozen attempt → suspendActions keeps groups non-actionable.
 */
export function resolveActionableProjections(input: {
  messages: Array<{ id: string; role: string }>;
  projections: TurnProjection[];
  /** When true (UNKNOWN send / reconcile / in-flight), suspend actionable choices. */
  suspendActions?: boolean;
}): MessageProjectionView[] {
  const lastAssistantId = [...input.messages]
    .reverse()
    .find((m) => m.role === "assistant")?.id;
  const lastAssistantIdx = lastAssistantId
    ? input.messages.findIndex((m) => m.id === lastAssistantId)
    : -1;
  const hasLaterPilot =
    lastAssistantIdx >= 0 &&
    input.messages.slice(lastAssistantIdx + 1).some((m) => m.role === "user");

  return input.projections.map((p) => {
    const isLatest =
      Boolean(p.messageId) && p.messageId === lastAssistantId && !hasLaterPilot;
    const actionable =
      !input.suspendActions &&
      p.finalized &&
      isLatest &&
      (p.status ?? "").toUpperCase() !== "UNKNOWN" &&
      (p.status ?? "").toUpperCase() !== "FAILED" &&
      p.choices.length > 0;
    return { ...p, actionable };
  });
}
