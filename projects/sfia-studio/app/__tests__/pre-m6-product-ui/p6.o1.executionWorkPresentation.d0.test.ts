/**
 * LOT B — honest Execution work presentation (no generic placeholder).
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { GovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import type { ProductExecutionContext } from "@/features/project-assistant/w2/resolveProductExecutionContext";
import { presentPilotExecution } from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";

function emptyProductExecutionContext(
  overrides: Partial<ProductExecutionContext> = {},
): ProductExecutionContext {
  return {
    projectId: "prj:o1",
    activeCycleInstanceId: "cyc:1",
    executionContract: {
      kind: "PRODUCT_CONTRACT",
      executionContractId: "xct:1",
      version: 2,
      status: "confirmation_required",
      action: "studio.cursor.generalist.execute",
      objective: "Rédiger la note de cadrage bénévoles",
      decisionId: null,
      cycleInstanceId: "cyc:1",
    },
    attempt: null,
    cursorReport: {
      kind: "EXECUTOR_CLAIM",
      present: false,
      status: null,
      summary: null,
      disclosure: "CLAIM_NOT_EVIDENCE",
    },
    artifact: {
      kind: "ARTIFACT",
      present: false,
      completeness: null,
      preview: null,
    },
    executionReview: {
      kind: "EXECUTION_REVIEW_MATERIAL",
      present: false,
      completeness: null,
      reviewMaterialId: null,
      reviewItemCount: 0,
      claimFactMismatch: false,
      verificationStatus: null,
      retentionState: null,
      reviewEndOfPresent: false,
      verifiedChangeSetPresent: false,
      blockers: [],
      reviewItemSummaries: [],
    },
    evidence: {
      kind: "EVIDENCE",
      evidenceId: null,
      status: null,
      evidenceIds: [],
    },
    reviewBundle: {
      kind: "REVIEW",
      reviewBundleId: null,
      status: null,
      frozen: false,
    },
    claimEvaluation: {
      kind: "PRODUCT_QUALIFICATION",
      claimEvaluationId: null,
      status: null,
      contractResultVerdict: null,
    },
    postEvidence: {
      kind: "RECOMMENDATION",
      present: false,
      recommendationKind: null,
      headline: null,
      requiresHumanDecision: null,
    },
    provenance: {
      bindingsOk: true,
      readOnly: true,
      query: { kind: "latest" },
    },
    disclosures: [],
    ...overrides,
  };
}

function projectionWithContract(
  overrides: Partial<GovernedExecutionContinuityProjection> = {},
): GovernedExecutionContinuityProjection {
  return {
    projectId: "prj:o1",
    activeCycleInstanceId: "cyc:1",
    executionContractId: "xct:1",
    executionContractVersion: 2,
    executionContractStatus: "confirmation_required",
    attemptId: null,
    attemptStatus: null,
    stage: "PRE_EXECUTION",
    productOutcome: null,
    evidenceId: null,
    reviewBundleId: null,
    claimEvaluationId: null,
    claimEvaluationStatus: null,
    postEvidencePresent: false,
    nextDeterministicAction: "NONE",
    humanDecisionRequired: false,
    recoveryRequired: false,
    reason: null,
    blockingCode: null,
    context: emptyProductExecutionContext(),
    ...overrides,
  };
}

describe("P6 O1 execution work presentation", () => {
  it("B9 — documentary path + objective replace generic placeholder", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: projectionWithContract(),
      },
      preExecutionContinuity: {
        ok: true,
        kind: "active",
        decisionRef: null,
        requiredInspectedFacts: [
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
        ],
        contract: {
          executionContractId: "xct:1",
          version: 2,
          status: "confirmation_required",
          action: "studio.cursor.generalist.execute",
          target: "studio.cursor.generalist.workspace",
          scope: "studio.cursor.generalist.scope",
          requiredAuthority: "N2",
          constraints: ["MATERIALITY:NON_STRUCTURAL"],
          stopConditions: [],
          requiredCapabilities: ["studio.cursor.generalist"],
          reversibility: "reversible",
          semanticFingerprint: "fp",
          effectConfirmationRequired: true,
          inspectionDisclosure: {
            action: "studio.cursor.generalist.execute",
            technicalTarget: "studio.cursor.generalist.workspace",
            scope: "studio.cursor.generalist.scope",
            targetRepositoryRef: "acme/benevoles",
            targetPath:
              "projects/organisation-des-benevoles/01-cadrage/note-de-cadrage.md",
            scopeIn: null,
            scopeOut: null,
            createOrModify: true,
            noDelete: true,
            objective: "Rédiger la note de cadrage bénévoles",
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
            requiredAuthority: "N2",
            requiredCapabilities: [],
            constraints: [],
            stopConditions: [],
            reversibility: "reversible",
            contractVersion: 2,
            executionContractId: "xct:1",
            semanticFingerprint: "fp",
            disclosureComplete: true,
            incompletenessCode: null,
          },
        },
        inspection: {
          executionContractId: "xct:1",
          contractVersion: 2,
          semanticFingerprint: "fp",
          statusLabel: "NON INSPECTÉ",
          inspectionSufficient: false,
          attestationRef: null,
          attestedVersion: null,
          staleAttestationRef: null,
          reinspectionRequired: true,
          reason: "no_attestation",
          grantsAuthority: false,
        },
      },
    });

    const labels = view.workItems.map((w) => w.label);
    expect(labels.some((l) => l.includes("note-de-cadrage.md"))).toBe(true);
    expect(labels.some((l) => /Action prévue dans la portée/.test(l))).toBe(
      false,
    );
    // Presentation DTO does not invent a decisionRef field.
    expect(
      Object.prototype.hasOwnProperty.call(view, "decisionRef"),
    ).toBe(false);
  });

  it("B10 — no inventable details → honest incomplete label", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: projectionWithContract({
          context: emptyProductExecutionContext({
            executionContract: {
              kind: "PRODUCT_CONTRACT",
              executionContractId: "xct:1",
              version: 1,
              status: "confirmation_required",
              action: "studio.cursor.generalist.execute",
              objective: null,
              decisionId: null,
              cycleInstanceId: "cyc:1",
            },
          }),
        }),
      },
      preExecutionContinuity: {
        ok: true,
        kind: "active",
        decisionRef: null,
        requiredInspectedFacts: null,
        contract: {
          executionContractId: "xct:1",
          version: 1,
          status: "confirmation_required",
          action: "studio.cursor.generalist.execute",
          target: "studio.cursor.generalist.workspace",
          scope: "studio.cursor.generalist.scope",
          requiredAuthority: "N2",
          constraints: [],
          stopConditions: [],
          requiredCapabilities: [],
          reversibility: "reversible",
          semanticFingerprint: "fp",
          effectConfirmationRequired: true,
          inspectionDisclosure: {
            action: "studio.cursor.generalist.execute",
            technicalTarget: "studio.cursor.generalist.workspace",
            scope: "studio.cursor.generalist.scope",
            targetRepositoryRef: null,
            targetPath: null,
            scopeIn: null,
            scopeOut: null,
            createOrModify: false,
            noDelete: true,
            objective: null,
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
            requiredAuthority: "N2",
            requiredCapabilities: [],
            constraints: [],
            stopConditions: [],
            reversibility: "reversible",
            contractVersion: 1,
            executionContractId: "xct:1",
            semanticFingerprint: "fp",
            disclosureComplete: false,
            incompletenessCode: "INSPECTION_DISCLOSURE_INCOMPLETE",
          },
        },
        inspection: {
          executionContractId: "xct:1",
          contractVersion: 1,
          semanticFingerprint: "fp",
          statusLabel: "NON INSPECTÉ",
          inspectionSufficient: false,
          attestationRef: null,
          attestedVersion: null,
          staleAttestationRef: null,
          reinspectionRequired: true,
          reason: "no_attestation",
          grantsAuthority: false,
        },
      },
    });

    expect(view.workItems).toHaveLength(1);
    expect(view.workItems[0]!.label).toMatch(/indisponible/i);
    expect(view.workItems[0]!.label).not.toMatch(/Action prévue dans la portée/);
  });
});
