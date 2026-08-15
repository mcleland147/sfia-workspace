/**
 * M5-B W1 — system factual LPS writer.
 * Not Morris, not decision_maker, authority none — automatic state linkage only.
 */

import type { ActorReference } from "@/lib/oa/doctrine";

export const SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID =
  "actor:sfia-studio-system-factual-writer" as const;

/**
 * Stable Studio system actor for automatic factual LPS write-back.
 * Must not be registered as authority evidence / canActAsMorris.
 */
export const SFIA_STUDIO_SYSTEM_FACTUAL_WRITER: ActorReference = Object.freeze({
  actorId: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID,
  role: "system",
  displayName: "SFIA Studio system factual state writer",
  authorityLevel: "none",
});
