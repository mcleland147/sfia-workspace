import { OPS1_MAX_MESSAGE_CHARS, type TurnRole } from "./types";
import { Ops1Error } from "./errors";

const SESSION_ID_RE = /^ops1-sess-[0-9a-f-]{36}$/i;

export function assertSessionId(sessionId: unknown): string {
  if (typeof sessionId !== "string" || !SESSION_ID_RE.test(sessionId)) {
    throw new Ops1Error("VALIDATION", "Identifiant de session invalide.");
  }
  return sessionId;
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
  if (role === "user" || role === "assistant_fixture") return role;
  throw new Ops1Error("VALIDATION", "Rôle de tour invalide.");
}
