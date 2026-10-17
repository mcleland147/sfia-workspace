/**
 * STUDIO-P6-EXECUTION-INSPECTION-CLOSURE-03
 * Disclosure → presented rows → attestable facts (ZERO REAL).
 */
import { describe, expect, it } from "vitest";
import type { ExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
import { buildInspectionFactRowsFromDisclosure } from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";

function baseDisclosure(
  overrides: Partial<ExecutionContractInspectionDisclosure> = {},
): ExecutionContractInspectionDisclosure {
  return {
    action: "cursor.docs_write.apply",
    technicalTarget: "workspace.isolated.docs_write",
    scope: "studio.gcec.docs_write",
    targetRepositoryRef: "acme/demo",
    targetPath: "projects/demo/note.md",
    scopeIn: ["projects/demo"],
    scopeOut: null,
    createOrModify: true,
    noDelete: true,
    objective: "Note",
    artifactType: null,
    artifactBrief: null,
    contentRequirements: ["section A"],
    validationExpectations: null,
    expectedOutputs: ["projects/demo/note.md"],
    sourceGrounding: null,
    acceptanceCriteria: null,
    validationPlan: null,
    reportRequirements: null,
    evidenceRequirements: ["file_evidence"],
    requiredAuthority: "N2",
    requiredCapabilities: ["cursor.docs_write"],
    constraints: ["MATERIALITY:NON_STRUCTURAL"],
    stopConditions: ["STOP"],
    reversibility: "reversible",
    contractVersion: 1,
    executionContractId: "xct:1",
    semanticFingerprint: "fp-abc",
    disclosureComplete: true,
    incompletenessCode: null,
    ...overrides,
  };
}

describe("P6 R03 — inspection disclosure closure (presenter)", () => {
  it("INS01 — required facts with values are all rendered", () => {
    const required = [
      "action",
      "target",
      "scope",
      "requiredAuthority",
      "requiredCapabilities",
      "constraints",
      "stopConditions",
      "reversibility",
      "evidenceRequirements",
      "semanticFingerprint",
      "inputs.targetRepositoryRef",
      "inputs.targetPath",
      "inputs.scopeIn",
      "inputs.createOrModify",
      "inputs.noDelete",
      "inputs.contentRequirements",
      "expectedOutputs",
    ];
    const result = buildInspectionFactRowsFromDisclosure({
      disclosure: baseDisclosure(),
      requiredInspectedFacts: required,
    });
    expect(result.missingRequired).toEqual([]);
    expect(result.presentedFactIds).toEqual(required);
    expect(
      result.rows.find((r) => r.factId === "inputs.targetPath")?.value,
    ).toContain("note.md");
  });

  it("INS02 — missing required fact → not attestable", () => {
    const result = buildInspectionFactRowsFromDisclosure({
      disclosure: baseDisclosure({ targetPath: null }),
      requiredInspectedFacts: ["action", "inputs.targetPath"],
    });
    expect(result.missingRequired).toContain("inputs.targetPath");
    expect(result.presentedFactIds).not.toContain("inputs.targetPath");
  });

  it("INS04–INS07 — mission facts only when present in disclosure", () => {
    const withMission = buildInspectionFactRowsFromDisclosure({
      disclosure: baseDisclosure({
        sourceGrounding: {
          version: 1,
          honesty: "READ_GROUNDED",
          repositoryIdentity: "acme/demo",
          repositoryHeadSha: "abc123",
          cycleInstanceId: "cyc:1",
          declaredRepositorySources: ["projects/demo/a.md"],
          readRefs: [],
          unreadRequiredSources: [],
          searchIsNotRead: true,
          reconstructibleFrom: "durable_cycle_read_coverage",
        },
        acceptanceCriteria: [
          {
            criterionId: "c1",
            statement: "Artifact at path",
            kind: "artifact_at_path",
            expectedOutputRef: null,
            targetPath: "projects/demo/note.md",
          },
        ],
        validationPlan: ["run checks"],
        reportRequirements: ["summary"],
      }),
      requiredInspectedFacts: [
        "action",
        "inputs.sourceGrounding",
        "inputs.acceptanceCriteria",
        "inputs.validationPlan",
        "inputs.reportRequirements",
      ],
    });
    expect(withMission.missingRequired).toEqual([]);
    expect(withMission.presentedFactIds).toEqual(
      expect.arrayContaining([
        "inputs.sourceGrounding",
        "inputs.acceptanceCriteria",
        "inputs.validationPlan",
        "inputs.reportRequirements",
      ]),
    );

    const without = buildInspectionFactRowsFromDisclosure({
      disclosure: baseDisclosure(),
      requiredInspectedFacts: ["action", "inputs.sourceGrounding"],
    });
    expect(without.missingRequired).toContain("inputs.sourceGrounding");
  });

  it("INS20 — presented IDs equal rendered rows (no parallel invent)", () => {
    const required = ["action", "scope", "inputs.targetPath"];
    const result = buildInspectionFactRowsFromDisclosure({
      disclosure: baseDisclosure(),
      requiredInspectedFacts: required,
    });
    expect(result.rows.map((r) => r.factId)).toEqual(result.presentedFactIds);
    expect(result.presentedFactIds.every((id) => required.includes(id))).toBe(
      true,
    );
  });
});
