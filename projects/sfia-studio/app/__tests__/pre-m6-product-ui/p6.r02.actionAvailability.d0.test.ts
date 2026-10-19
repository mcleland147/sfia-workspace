/**
 * STUDIO-P6-EXECUTION-CONVERGENCE-REGULARIZATION-02 — R1 action availability.
 * Deterministic presenter + currentness honesty (ZERO REAL).
 */
import { describe, expect, it } from "vitest";
import type { GovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import {
  presentPilotExecution,
} from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";
import { presentCurrentness } from "@/features/pre-m6-product-ui/workspaceContextPresentation";

function baseProjection(
  overrides: Partial<GovernedExecutionContinuityProjection> = {},
): GovernedExecutionContinuityProjection {
  return {
    projectId: "prj:r02",
    activeCycleInstanceId: "cyc:1",
    executionContractId: "xct:1",
    executionContractVersion: 1,
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
    context: null,
    ...overrides,
  };
}

function activePre(args: {
  status: "confirmation_required" | "confirmed" | "validated";
  inspectionSufficient: boolean;
  version?: number;
  fingerprint?: string;
  inspectionFingerprint?: string;
  attestedVersion?: number | null;
  reinspectionRequired?: boolean;
}) {
  const version = args.version ?? 1;
  const fp = args.fingerprint ?? "fp";
  return {
    ok: true as const,
    kind: "active" as const,
    decisionRef: null as string | null,
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
      "inputs.targetPath",
    ],
    contract: {
      executionContractId: "xct:1",
      version,
      status: args.status,
      action: "cursor.docs_write.apply",
      target: "workspace.isolated.docs_write",
      scope: "studio.gcec.docs_write",
      requiredAuthority: "N2",
      constraints: [] as const,
      stopConditions: [] as const,
      requiredCapabilities: [] as const,
      reversibility: "reversible" as const,
      semanticFingerprint: fp,
      effectConfirmationRequired: args.status === "confirmation_required",
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
        contractVersion: version,
        executionContractId: "xct:1",
        semanticFingerprint: fp,
        disclosureComplete: true,
        incompletenessCode: null,
      },
    },
    inspection: {
      executionContractId: "xct:1",
      contractVersion: version,
      semanticFingerprint: args.inspectionFingerprint ?? fp,
      statusLabel: (args.inspectionSufficient
        ? "INSPECTÉ"
        : "NON INSPECTÉ") as "INSPECTÉ" | "NON INSPECTÉ",
      inspectionSufficient: args.inspectionSufficient,
      attestationRef: args.inspectionSufficient ? "att:1" : null,
      attestedVersion:
        args.attestedVersion !== undefined
          ? args.attestedVersion
          : args.inspectionSufficient
            ? version
            : null,
      staleAttestationRef: null,
      reinspectionRequired: args.reinspectionRequired ?? !args.inspectionSufficient,
      reason: (args.inspectionSufficient
        ? "inspected"
        : "no_attestation") as "inspected" | "no_attestation",
      grantsAuthority: false as const,
    },
  };
}

describe("P6 R02 — action availability / currentness", () => {
  it("UI01 — EC id alone → no Confirm/Execute/Inspect", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: null,
    });
    expect(view.cta.kind).toBe("none");
  });

  it("UI02 — pre continuity failure → no premature action", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: {
        ok: false,
        code: "MATERIALITY_CURRENTNESS_STALE",
        message: "stale",
      },
    });
    expect(view.cta.kind).toBe("none");
    expect(view.attentionNote).toMatch(/refusée|MATERIALITY_CURRENTNESS_STALE/);
  });

  it("UI03 — kind=none → no premature action", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: { ok: true, kind: "none" },
    });
    expect(view.cta.kind).toBe("none");
  });

  it("UI04 — D-P6-SHE-01: active + inspection insufficient → Exécuter (not Confirm); consult secondary", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: activePre({
        status: "confirmation_required",
        inspectionSufficient: false,
      }),
    });
    expect(view.cta.kind).toBe("execute");
    expect(view.cta.kind === "execute" && view.cta.enabled).toBe(true);
  });

  it("UI05 — active + inspection sufficient → Exécuter folds Confirm (tool-first)", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: activePre({
        status: "confirmation_required",
        inspectionSufficient: true,
      }),
    });
    expect(view.cta.kind).toBe("execute");
    expect(view.cta.kind === "execute" && view.cta.enabled).toBe(true);
    expect(view.status).toBe("a_confirmer");
  });

  it("UI06 — fingerprint drift → reinspect, Confirm not enabled", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: activePre({
        status: "confirmation_required",
        inspectionSufficient: true,
        fingerprint: "fp-new",
        inspectionFingerprint: "fp-old",
        reinspectionRequired: true,
      }),
    });
    expect(view.cta.kind).toBe("inspect");
    expect(view.attentionNote).toMatch(/empreinte|réinspection/i);
  });

  it("UI09 — D-P6-SHE-01: confirmed without prior inspection still shows Exécuter (server attest/gates)", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          executionContractStatus: "confirmed",
        }),
      },
      preExecutionContinuity: activePre({
        status: "confirmed",
        inspectionSufficient: false,
      }),
    });
    expect(view.cta.kind).toBe("execute");
    expect(view.cta.kind === "execute" && view.cta.enabled).toBe(true);
  });

  it("UI10 — terminal stage → no Confirm/Execute", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          stage: "POST_EVIDENCE_COMPLETE",
          attemptId: "att:1",
          attemptStatus: "succeeded",
          evidenceId: "ev:1",
          postEvidencePresent: true,
          productOutcome: "PASS",
        }),
      },
      preExecutionContinuity: { ok: true, kind: "none" },
    });
    expect(view.status).toBe("terminee");
    expect(view.cta.kind).not.toBe("confirm");
    expect(view.cta.kind).not.toBe("execute");
    expect(view.cta.kind).not.toBe("inspect");
  });

  it("R3 C4/C7 — lifecycle unavailable never claims À jour", () => {
    const cur = presentCurrentness({
      transcriptAvailability: "available",
      stateVersion: 3,
      updatedAt: "2026-10-17T10:00:00.000Z",
      lifecycleProjectionAvailability: "unavailable",
    });
    expect(cur.label).not.toBe("À jour");
    expect(cur.tone).toBe("warn");
  });

  it("R3 C3 pending — not presented as À jour", () => {
    const cur = presentCurrentness({
      transcriptAvailability: "available",
      stateVersion: 3,
      lifecycleProjectionAvailability: "pending",
    });
    expect(cur.label).toBe("Lecture en cours");
  });
});
