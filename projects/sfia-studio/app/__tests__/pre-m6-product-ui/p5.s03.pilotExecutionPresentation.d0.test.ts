/**
 * P5-S03 — PilotExecutionPresentation mapping (deterministic, ZERO REAL).
 * CP01: eligibility derives from durable inspection — not Conversation F3 gates.
 */
import { describe, expect, it } from "vitest";
import type { GovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import {
  deriveExecutionTabBadge,
  presentPilotExecution,
} from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";

function baseProjection(
  overrides: Partial<GovernedExecutionContinuityProjection> = {},
): GovernedExecutionContinuityProjection {
  return {
    projectId: "prj:s03",
    activeCycleInstanceId: "cyc:1",
    executionContractId: "xct:1",
    executionContractVersion: 1,
    executionContractStatus: "confirmed",
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
    context: null,
    ...overrides,
  };
}

function activePreExec(args: {
  status: "confirmation_required" | "confirmed" | "validated";
  inspectionSufficient: boolean;
  effectConfirmationRequired?: boolean;
}) {
  return {
    ok: true as const,
    kind: "active" as const,
    decisionRef: "dec:1",
    contract: {
      executionContractId: "xct:1",
      version: 1,
      status: args.status,
      action: "cursor.docs_write.apply",
      target: "workspace.isolated.docs_write",
      scope: "studio.gcec.docs_write",
      requiredAuthority: "N2",
      constraints: [] as const,
      stopConditions: [] as const,
      requiredCapabilities: [] as const,
      reversibility: "reversible" as const,
      semanticFingerprint: "fp",
      effectConfirmationRequired: args.effectConfirmationRequired ?? false,
      inspectionDisclosure: {
        action: "cursor.docs_write.apply",
        technicalTarget: "workspace.isolated.docs_write",
        scope: "studio.gcec.docs_write",
        targetRepositoryRef: null,
        targetPath: "projects/demo/note.md",
        scopeIn: null,
        scopeOut: null,
        createOrModify: true,
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
        evidenceRequirements: [] as const,
        requiredAuthority: "N2",
        requiredCapabilities: [] as const,
        constraints: [] as const,
        stopConditions: [] as const,
        reversibility: "reversible" as const,
        contractVersion: 1,
        executionContractId: "xct:1",
        semanticFingerprint: "fp",
        disclosureComplete: true,
        incompletenessCode: null,
      },
    },
    inspection: {
      executionContractId: "xct:1",
      contractVersion: 1,
      semanticFingerprint: "fp",
      statusLabel: "INSPECTÉ" as const,
      inspectionSufficient: args.inspectionSufficient,
      attestationRef: args.inspectionSufficient ? "att:1" : null,
      attestedVersion: args.inspectionSufficient ? 1 : null,
      staleAttestationRef: null,
      reinspectionRequired: !args.inspectionSufficient,
      reason: (args.inspectionSufficient
        ? "inspected"
        : "inspected_facts_incomplete") as
        | "inspected"
        | "inspected_facts_incomplete",
      grantsAuthority: false as const,
    },
  };
}

describe("P5-S03 pilotExecutionPresentation", () => {
  it("empty when no continuity load yet", () => {
    const view = presentPilotExecution({
      continuityProjection: null,
      preExecutionContinuity: null,
    });
    expect(view.empty).toBe(true);
    expect(view.status).toBe("vide");
    expect(deriveExecutionTabBadge(view)).toBeNull();
  });

  it("PRE_EXECUTION ready → Prête + Exécuter from durable inspection (no F3 gate)", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: activePreExec({
        status: "confirmed",
        inspectionSufficient: true,
      }),
    });
    expect(view.status).toBe("prete");
    expect(view.statusLabel).toBe("Prête à exécuter");
    expect(view.cta.kind).toBe("execute");
    expect(view.cta.kind === "execute" && view.cta.enabled).toBe(true);
    expect(deriveExecutionTabBadge(view)).toBe(1);
  });

  it("confirmation_required → À confirmer, no direct execute", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          executionContractStatus: "confirmation_required",
        }),
      },
      preExecutionContinuity: activePreExec({
        status: "confirmation_required",
        inspectionSufficient: true,
        effectConfirmationRequired: true,
      }),
    });
    expect(view.status).toBe("a_confirmer");
    expect(view.cta.kind).toBe("confirm");
    expect(view.cta.kind === "confirm" && view.cta.enabled).toBe(true);
    expect(view.cta.kind === "execute").toBe(false);
  });

  it("insufficient inspection disables CTA (fail closed)", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          executionContractStatus: "confirmation_required",
        }),
      },
      preExecutionContinuity: activePreExec({
        status: "confirmation_required",
        inspectionSufficient: false,
        effectConfirmationRequired: true,
      }),
    });
    expect(view.status).toBe("a_confirmer");
    expect(view.cta.kind === "confirm" && view.cta.enabled).toBe(false);
    expect(view.attentionNote).toMatch(/Inspection insuffisante/);
  });

  it("RUNNING → En cours, no Exécuter", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          stage: "RUNNING",
          attemptId: "att:1",
          attemptStatus: "running",
        }),
      },
      preExecutionContinuity: { ok: true, kind: "none" },
    });
    expect(view.status).toBe("en_cours");
    expect(view.cta.kind).toBe("none");
  });

  it("timeout → Échouée with cause timeout (not Timeout status)", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          stage: "POST_EVIDENCE_COMPLETE",
          attemptId: "att:1",
          attemptStatus: "timeout",
          evidenceId: "ev:1",
          reviewBundleId: "rb:1",
          claimEvaluationId: "ce:1",
          postEvidencePresent: true,
        }),
      },
      preExecutionContinuity: { ok: true, kind: "none" },
    });
    expect(view.status).toBe("echouee");
    expect(view.statusLabel).toBe("Échouée");
    expect(view.failureCause).toBe("timeout");
    expect(view.subtitle).toMatch(/délai dépassé/);
  });

  it("terminal success keeps Result distinct from Evidence", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          stage: "POST_EVIDENCE_COMPLETE",
          attemptId: "att:1",
          attemptStatus: "succeeded",
          evidenceId: "ev:1",
          reviewBundleId: "rb:1",
          claimEvaluationId: "ce:1",
          postEvidencePresent: true,
          productOutcome: "PASS",
        }),
      },
      preExecutionContinuity: { ok: true, kind: "none" },
    });
    expect(view.status).toBe("terminee");
    expect(view.resultTitle).toBeTruthy();
    expect(view.evidenceIsNotResult).toBe(true);
    expect(view.evidenceAvailable).toBe(true);
    expect(view.cta.kind).toBe("return_conversation");
  });

  it("unknown continuity error → fail closed", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: false,
        code: "OA_STACK_UNAVAILABLE",
        message: "Services OA indisponibles.",
      },
      preExecutionContinuity: null,
    });
    expect(view.status).toBe("indisponible");
    expect(view.empty).toBe(false);
  });

  it("maps ATTEMPT_ACCEPTED / materialization / recovery stages", () => {
    expect(
      presentPilotExecution({
        continuityProjection: {
          ok: true,
          projection: baseProjection({
            stage: "ATTEMPT_ACCEPTED",
            attemptId: "a",
            attemptStatus: "accepted",
          }),
        },
        preExecutionContinuity: { ok: true, kind: "none" },
      }).status,
    ).toBe("en_cours");

    expect(
      presentPilotExecution({
        continuityProjection: {
          ok: true,
          projection: baseProjection({
            stage: "PRODUCT_MATERIALIZATION_PENDING",
            attemptId: "a",
            attemptStatus: "succeeded",
          }),
        },
        preExecutionContinuity: { ok: true, kind: "none" },
      }).status,
    ).toBe("terminee");

    expect(
      presentPilotExecution({
        continuityProjection: {
          ok: true,
          projection: baseProjection({
            stage: "RECOVERY_REQUIRED",
            recoveryRequired: true,
            humanDecisionRequired: true,
          }),
        },
        preExecutionContinuity: { ok: true, kind: "none" },
      }).stage,
    ).toBe("RECOVERY_REQUIRED");
  });
});
