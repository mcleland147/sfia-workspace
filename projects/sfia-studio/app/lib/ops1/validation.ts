import {
  OPS1_MAX_MESSAGE_CHARS,
  type AllowlistInputEntry,
  type AllowlistMode,
  type ConversationMode,
  type GateDecisionKind,
  type TurnRole,
} from "./types";
import { Ops1Error } from "./errors";

const SESSION_ID_RE = /^ops1-sess-[0-9a-f-]{36}$/i;
const ACTION_ID_RE = /^ops1-act-[0-9a-f-]{36}$/i;

export function assertSessionId(sessionId: unknown): string {
  if (typeof sessionId !== "string" || !SESSION_ID_RE.test(sessionId)) {
    throw new Ops1Error("VALIDATION", "Identifiant de session invalide.");
  }
  return sessionId;
}

export function assertActionCandidateId(id: unknown): string {
  if (typeof id !== "string" || !ACTION_ID_RE.test(id)) {
    throw new Ops1Error("VALIDATION", "Identifiant d’action invalide.");
  }
  return id;
}

export function assertGateDecisionKind(kind: unknown): GateDecisionKind {
  if (
    kind === "GO" ||
    kind === "NO_GO" ||
    kind === "CORRIGER" ||
    kind === "ABANDONNER"
  ) {
    return kind;
  }
  throw new Ops1Error("VALIDATION", "Décision de gate invalide.");
}

export function assertActionField(label: string, value: unknown): string {
  if (typeof value !== "string") {
    throw new Ops1Error("VALIDATION", `${label} doit être du texte.`);
  }
  const trimmed = value.trim();
  if (!trimmed) {
    throw new Ops1Error("VALIDATION", `${label} ne peut pas être vide.`);
  }
  if (trimmed.length > OPS1_MAX_MESSAGE_CHARS) {
    throw new Ops1Error("VALIDATION", `${label} trop long.`);
  }
  return trimmed;
}

export function assertMessageContent(content: unknown): string {
  if (typeof content !== "string") {
    throw new Ops1Error("VALIDATION", "Le message doit être du texte.");
  }
  const trimmed = content.trim();
  if (!trimmed) {
    throw new Ops1Error("VALIDATION", "Le message ne peut pas être vide.");
  }
  if (trimmed.length > OPS1_MAX_MESSAGE_CHARS) {
    throw new Ops1Error(
      "VALIDATION",
      `Message trop long (max ${OPS1_MAX_MESSAGE_CHARS} caractères).`,
    );
  }
  return trimmed;
}

export function assertTurnRole(role: unknown): TurnRole {
  if (
    role === "user" ||
    role === "assistant_fixture" ||
    role === "assistant_live"
  ) {
    return role;
  }
  throw new Ops1Error("VALIDATION", "Rôle de tour invalide.");
}

export function assertConversationMode(mode: unknown): ConversationMode {
  if (mode === "fixture" || mode === "live") return mode;
  throw new Ops1Error("VALIDATION", "Mode conversationnel invalide.");
}

export function assertAllowlistMode(mode: unknown): AllowlistMode {
  if (mode === "READ" || mode === "CREATE" || mode === "MODIFY") return mode;
  throw new Ops1Error("VALIDATION", "Mode allowlist invalide.");
}

export function assertAllowlistEntries(raw: unknown): AllowlistInputEntry[] {
  if (!Array.isArray(raw) || raw.length === 0) {
    throw new Ops1Error(
      "VALIDATION",
      "Allowlist exhaustive requise (au moins une entrée).",
    );
  }
  if (raw.length > 50) {
    throw new Ops1Error("VALIDATION", "Allowlist trop longue (max 50).");
  }
  return raw.map((item, index) => {
    if (!item || typeof item !== "object") {
      throw new Ops1Error(
        "VALIDATION",
        `Entrée allowlist #${index + 1} invalide.`,
      );
    }
    const record = item as Record<string, unknown>;
    const pathValue = record.path;
    if (typeof pathValue !== "string") {
      throw new Ops1Error(
        "VALIDATION",
        `Chemin allowlist #${index + 1} invalide.`,
      );
    }
    return {
      path: pathValue,
      mode: assertAllowlistMode(record.mode),
    };
  });
}
