/**
 * EP-S2-08-PROOF-01 R-INSPECT-01 — Pilote inspection surface renders declared
 * repository mutation (jsdom DET). Not browser /studio remount E2E.
 *
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { ContractInspectionExamPanel } from "@/features/pre-m6-product-ui/surfaces/ContractInspectionExamPanel";
import { buildInspectionFactRowsFromDisclosure } from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";
import type { ExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";

function disclosureWithWrite(): ExecutionContractInspectionDisclosure {
  return {
    action: "studio.cursor.generalist.execute",
    technicalTarget: "studio.cursor.generalist.workspace",
    scope: "project",
    targetRepositoryRef: "acme/demo",
    targetPath: null,
    scopeIn: ["projects/demo/notes/project-notes.md"],
    scopeOut: null,
    createOrModify: null,
    noDelete: null,
    repositoryMutationDeclared: "write",
    objective: "notes edit",
    artifactType: null,
    artifactBrief: null,
    contentRequirements: null,
    validationExpectations: null,
    expectedOutputs: null,
    sourceGrounding: null,
    acceptanceCriteria: null,
    validationPlan: null,
    reportRequirements: null,
    evidenceRequirements: [],
    requiredAuthority: "N3",
    requiredCapabilities: [],
    constraints: ["PRODUCT_GOVERNED", "MATERIALITY:NON_STRUCTURAL"],
    stopConditions: [],
    reversibility: "reversible",
    contractVersion: 2,
    executionContractId: "xct:ri-ui",
    semanticFingerprint: "fp:ri-ui",
    disclosureComplete: true,
    incompletenessCode: null,
  };
}

describe("EP-S2-08-PROOF-01 R-INSPECT-01 — inspection surface (jsdom)", () => {
  afterEach(() => {
    cleanup();
  });

  it("INSPECT-P3 — ContractInspectionExamPanel renders declared write fact", () => {
    const disclosure = disclosureWithWrite();
    const required = [
      "action",
      "inputs.repositoryMutationDeclared",
      "semanticFingerprint",
    ];
    const built = buildInspectionFactRowsFromDisclosure({
      disclosure,
      requiredInspectedFacts: required,
    });
    expect(built.missingRequired).toEqual([]);

    render(
      <ContractInspectionExamPanel
        testIdPrefix="r-inspect"
        snapshot={{
          projectId: "prj:ri",
          executionContractId: disclosure.executionContractId,
          version: disclosure.contractVersion,
          semanticFingerprint: disclosure.semanticFingerprint!,
        }}
        rows={built.rows}
        missingRequired={built.missingRequired}
        presentedFactIds={built.presentedFactIds}
        busy={false}
        onAttest={() => undefined}
      />,
    );

    expect(
      screen.getByTestId(
        "r-inspect-inspection-fact-inputs.repositoryMutationDeclared",
      ),
    ).toBeTruthy();
    expect(screen.getByText("Opération déclarée sur le dépôt")).toBeTruthy();
    expect(
      screen.getByText(/Écriture déclarée — soumise au périmètre/),
    ).toBeTruthy();
    expect(screen.getByTestId("r-inspect-attest")).not.toBeDisabled();
  });

  it("INSPECT-N1 — absent mutation does not render invented write row", () => {
    const disclosure: ExecutionContractInspectionDisclosure = {
      ...disclosureWithWrite(),
      repositoryMutationDeclared: null,
    };
    const built = buildInspectionFactRowsFromDisclosure({
      disclosure,
      requiredInspectedFacts: ["action", "semanticFingerprint"],
    });
    render(
      <ContractInspectionExamPanel
        testIdPrefix="r-inspect-n1"
        snapshot={{
          projectId: "prj:ri",
          executionContractId: disclosure.executionContractId,
          version: disclosure.contractVersion,
          semanticFingerprint: disclosure.semanticFingerprint!,
        }}
        rows={built.rows}
        missingRequired={built.missingRequired}
        presentedFactIds={built.presentedFactIds}
        busy={false}
        onAttest={() => undefined}
      />,
    );
    expect(
      screen.queryByText(/Écriture déclarée/),
    ).toBeNull();
  });
});
