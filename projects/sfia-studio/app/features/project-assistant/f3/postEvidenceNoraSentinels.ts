/**
 * Client-safe post-Evidence markers — no Node / Agents / provider imports.
 * presentationLabels and UI may import from here only.
 */
export const POST_EVIDENCE_NORA_SENTINEL =
  "[[SFIA_POST_EVIDENCE_NORA_ANALYSIS]]" as const;
export const POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL =
  "[[SFIA_POST_EVIDENCE_NORA_UNAVAILABLE]]" as const;
/** Exact post-Evidence Recommendation payload — durable in existing LPS context. */
export const W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL =
  "[[W3C_POST_EVIDENCE_RECOMMENDATION_V1]]" as const;
