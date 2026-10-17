/**
 * Pass04 — unified inspection exam helpers (presentation only).
 *
 * Source of required facts: OA `requiredInspectedFactsForContract` via W2 DTO.
 * No persistence. No authority. No second required-facts calculator.
 */

import type { ExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
import {
  buildInspectionFactRowsFromDisclosure,
  type InspectionFactRow,
} from "./pilotExecutionPresentation";

/** Identity of the exam currently open — invalidate if any field changes. */
export type InspectionExamSnapshot = {
  readonly projectId: string;
  readonly executionContractId: string;
  readonly version: number;
  readonly semanticFingerprint: string;
};

export type InspectionExamView = {
  readonly rows: readonly InspectionFactRow[];
  readonly missingRequired: readonly string[];
  readonly presentedFactIds: readonly string[];
  readonly disclosureIncomplete: boolean;
};

export function sameInspectionExamSnapshot(
  a: InspectionExamSnapshot | null | undefined,
  b: InspectionExamSnapshot | null | undefined,
): boolean {
  if (!a || !b) return false;
  return (
    a.projectId === b.projectId &&
    a.executionContractId === b.executionContractId &&
    a.version === b.version &&
    a.semanticFingerprint === b.semanticFingerprint
  );
}

/**
 * Build display rows from canonical disclosure + required fact IDs.
 * Refuses (disclosureIncomplete) when required list is null/absent.
 */
export function buildInspectionExamView(input: {
  readonly disclosure: ExecutionContractInspectionDisclosure | null | undefined;
  readonly requiredInspectedFacts: readonly string[] | null | undefined;
}): InspectionExamView {
  if (
    input.disclosure == null ||
    input.requiredInspectedFacts == null ||
    !Array.isArray(input.requiredInspectedFacts)
  ) {
    return {
      rows: [],
      missingRequired: ["INSPECTION_DISCLOSURE_INCOMPLETE"],
      presentedFactIds: [],
      disclosureIncomplete: true,
    };
  }
  return {
    ...buildInspectionFactRowsFromDisclosure({
      disclosure: input.disclosure,
      requiredInspectedFacts: input.requiredInspectedFacts,
    }),
    disclosureIncomplete: false,
  };
}
