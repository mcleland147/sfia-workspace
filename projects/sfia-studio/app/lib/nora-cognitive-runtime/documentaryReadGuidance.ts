/**
 * Bounded documentary-read guidance appended to system instructions when the
 * Pilot request is a natural mono-file Git synthesis mission.
 *
 * Not a parallel document engine — advisory only. OpenAI-native-first (R22).
 */

export const DOCUMENTARY_READ_GUIDANCE_BLOCK = [
  "=== DOCUMENTARY READ GUIDANCE (bounded / native tools) ===",
  "- Prefer startLine/endLine windows sized to stay under the tool character cap.",
  "- truncated=true ⇒ the requested range was cut; continue from nextStartLineHint.",
  "- documentHasMore=true with truncated=false ⇒ the range was fully returned; later lines remain.",
  "- Do not re-read already returned prefixes; advance with nextStartLineHint.",
  "- Before the mission model-turn budget ends, write a clearly PARTIAL synthesis of portions actually returned.",
  "- Never claim full-document analysis without FULL returned coverage L1–total and no truncation.",
].join("\n");

export function appendDocumentaryReadGuidance(
  systemInstructions: string,
  enabled: boolean,
): string {
  if (!enabled) return systemInstructions;
  const base = systemInstructions.trim();
  if (base.includes("DOCUMENTARY READ GUIDANCE")) return systemInstructions;
  return `${base}\n\n${DOCUMENTARY_READ_GUIDANCE_BLOCK}`;
}
