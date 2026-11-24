/**
 * C18 — typed tool for Cursor contract production (≠ replyDraft).
 * Nora submits instruction + criteria via tool args; server journals them.
 * Tool observation is opposable; prose alone never creates the contract.
 */

import { z } from "zod";
import { tool } from "@openai/agents";

export const CursorContractProductionArgsSchema = z.object({
  productionInstruction: z.string().min(32).max(100_000),
  acceptanceCriteria: z.array(z.string().min(3).max(2000)).min(1).max(40),
  desiredOutcome: z.string().min(3).max(2000),
  title: z.string().min(3).max(200).optional(),
});

export type CursorContractProductionArgs = z.infer<
  typeof CursorContractProductionArgsSchema
>;

export type CursorContractProductionJournal = {
  submissions: Array<CursorContractProductionArgs & { submittedAt: string }>;
};

export function createCursorContractProductionJournal(): CursorContractProductionJournal {
  return { submissions: [] };
}

export function buildCursorContractProductionTool(journal: CursorContractProductionJournal) {
  return tool({
    name: "submit_cursor_contract_production",
    description:
      "Submit the dedicated Cursor technical instruction and specific acceptance criteria for a DRAFT contract. Use when the Pilot asks to prepare a Cursor technical contract. Never put the instruction only in replyDraft. Preparing ≠ authorize ≠ dispatch.",
    parameters: CursorContractProductionArgsSchema,
    execute: async (args: CursorContractProductionArgs) => {
      journal.submissions.push({
        ...args,
        submittedAt: new Date().toISOString(),
      });
      return {
        status: "RECORDED",
        criteriaCount: args.acceptanceCriteria.length,
        instructionChars: args.productionInstruction.length,
        note: "Server recorded structured production — DRAFT prepare may follow. Not an authorization.",
      };
    },
  });
}

export function latestContractProduction(
  journal: CursorContractProductionJournal | null | undefined,
): CursorContractProductionArgs | null {
  if (!journal?.submissions.length) return null;
  return journal.submissions[journal.submissions.length - 1]!;
}
