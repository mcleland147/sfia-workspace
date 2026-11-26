/**
 * ML5 — Nora-accessible cognitive guidance consultation (indicative only).
 * Does not route models; Studio admission remains authoritative.
 */

import {
  COGNITIVE_REFERENTIAL_COMPACT_SUMMARY,
  COGNITIVE_REFERENTIAL_ROW_COUNT,
  COGNITIVE_REFERENTIAL_VERSION,
  getCognitiveGuidanceById,
} from "./cognitive-resources";

export type CognitiveGuidanceConsultArgs = {
  guidanceId?: string;
  compactIndex?: boolean;
};

/** Pure consult — also used by unit tests without Agents SDK invoke plumbing. */
export function consultCognitiveGuidance(args: CognitiveGuidanceConsultArgs) {
  if (args.compactIndex) {
    return {
      status: "OK" as const,
      kind: "COMPACT_INDEX" as const,
      version: COGNITIVE_REFERENTIAL_VERSION,
      rowCount: COGNITIVE_REFERENTIAL_ROW_COUNT,
      lines: [...COGNITIVE_REFERENTIAL_COMPACT_SUMMARY],
      note: "Indicative only — admission is server-side.",
    };
  }
  const id = (args.guidanceId ?? "").trim();
  if (!id) {
    return {
      status: "INVALID" as const,
      reason: "guidanceId or compactIndex required",
    };
  }
  const row = getCognitiveGuidanceById(id);
  if (!row) {
    return {
      status: "NOT_FOUND" as const,
      guidanceId: id,
      hint: "Use compactIndex=true to list ids.",
    };
  }
  return {
    status: "OK" as const,
    kind: "ROW" as const,
    version: COGNITIVE_REFERENTIAL_VERSION,
    row: {
      id: row.id,
      section: row.section,
      elementaire: row.elementaire,
      preferenceFamily: row.preferenceFamily,
      preferenceEffort: row.preferenceEffort,
      qualityAndEscalade: row.qualityAndEscalade,
    },
    note: "Indicative preference — Studio admits the couple; Nora may depart with reason.",
  };
}

export async function buildCognitiveGuidanceTools() {
  const { tool } = await import("@openai/agents");
  const { z } = await import("zod");

  return [
    tool({
      name: "consult_cognitive_guidance",
      description:
        "Consult one indicative cognitive-guidance row by id (e.g. cog-4.1-06), or request a compact index of the 51 elementary rows. Guidance only — not runtime routing; Studio admits model×effort. Never inject the full matrix into replyDraft.",
      parameters: z.object({
        guidanceId: z
          .string()
          .min(3)
          .max(40)
          .optional()
          .describe("Row id such as cog-4.1-06"),
        compactIndex: z
          .boolean()
          .optional()
          .describe("If true, return compact index lines (id|section|label|preference)"),
      }),
      execute: async (args: CognitiveGuidanceConsultArgs) =>
        consultCognitiveGuidance(args),
    }),
  ];
}
