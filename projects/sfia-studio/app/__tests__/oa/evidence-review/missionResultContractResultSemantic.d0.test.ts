/**
 * B1 — Mission Result ContractResult semantic (generic Product Cursor HOW).
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  assessExpectedOutputs,
  assessEvidenceRequirements,
  deriveCanonicalContractResultStatus,
} from "@/lib/oa/evidence-review/application/contractResultAssessment";
import {
  CONTRACT_RESULT_SEMANTICS,
  resolveApplicableContractResultSemantics,
} from "@/lib/oa/evidence-review/application/contractResultSemantics";
import {
  DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
} from "@/lib/oa/evidence-review/application/docsWriteContractResultSemantic";
import {
  MISSION_DIAGNOSTIC_EO_TEMPLATE,
  MISSION_NEXT_STEP_EO_TEMPLATE,
  MISSION_RESULT_ER_KEY,
  PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
  digestMissionResultPayload,
  type MissionResultPayload,
} from "@/lib/oa/evidence-review/application/missionResultPayload";
import {
  MISSION_RESULT_EVIDENCE_SOURCE,
  MISSION_RESULT_RULE_REF,
} from "@/lib/oa/evidence-review/application/missionResultContractResultSemantic";
import {
  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
  W3B_TEMP_ARTIFACT_ER_KEY,
  W3B_TEMP_ARTIFACT_RULE_REF,
} from "@/lib/oa/evidence-review/application/tempArtifactContractResultSemantic";
import {
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
  STUDIO_CURSOR_GENERALIST_SCOPE,
  STUDIO_CURSOR_GENERALIST_TARGET,
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  bindCursorExecutionReportToAttempt,
  mintCursorExecutionReportId,
  type CursorExecutionReport,
} from "@/lib/oa/execution-attempt";
import type { Evidence } from "@/lib/oa/evidence-review";
import { persistMissionResultPayload } from "@/features/project-assistant/f3/ingestMissionResultEvidence";

const NOW = "2026-09-23T10:00:00.000Z";
const refsDirs: string[] = [];

afterEach(() => {
  while (refsDirs.length) {
    const d = refsDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function missionContract(
  overrides: Partial<ExecutionContract> = {},
): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:mission:1",
    projectId: "prj:mission",
    version: 1,
    status: "confirmed",
    semanticFingerprint: "fp:pending",
    action: STUDIO_CURSOR_GENERALIST_ACTION,
    target: STUDIO_CURSOR_GENERALIST_TARGET,
    scope: STUDIO_CURSOR_GENERALIST_SCOPE,
    requiredAuthority: "N1",
    constraints: [
      "PRODUCT_GOVERNED",
      PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
      "EFFECT_CLASS:read",
    ],
    stopConditions: [],
    evidenceRequirements: [MISSION_RESULT_ER_KEY, "evreq:read"],
    expectedOutputs: [
      MISSION_DIAGNOSTIC_EO_TEMPLATE,
      MISSION_NEXT_STEP_EO_TEMPLATE,
    ],
    requiredCapabilities: [STUDIO_CURSOR_GENERALIST_CAPABILITY],
    reversibility: "reversible",
    idempotencyKey: "idem:ec:mission",
    correlationId: "cor:ec:mission",
    ...overrides,
  };
  const material = executionContractSemanticMaterial(base);
  base.semanticFingerprint =
    computeExecutionContractSemanticMaterialFingerprint(material);
  return base;
}

function samplePayload(
  overrides: Partial<MissionResultPayload> = {},
): MissionResultPayload {
  return {
    schemaVersion: "oa.mission-result.1",
    reportId: "rpt:cursor:test",
    attemptId: "xat:mission:1",
    executionContractId: "xct:mission:1",
    repositoryRef: "mcleland147/sfia-workspace",
    baseSha: "a".repeat(40),
    status: "succeeded",
    diagnosticSummary: "Réserves et preuves manquantes identifiées.",
    recommendedNextProductStep: "Clarifier le livrable avant nouvelle tentative.",
    inspectedDurableTrace:
      "Trace d'inspection Attempt xat:mission:1 / Evidence ev:x / ReviewBundle rb:x",
    authorizedEffectsExecuted: [],
    ...overrides,
  };
}

function makeMissionEvidence(absolutePath: string, digest: string): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: "ev:mission-result:xatmission1",
    type: "attestation",
    source: MISSION_RESULT_EVIDENCE_SOURCE,
    sourceKind: "execution_attempt",
    location: absolutePath,
    digest: digest as never,
    producedBy: { actorId: "actor:t", role: "project_owner" },
    producedAt: NOW,
    freshness: "fresh",
    status: "verified",
    classification: "internal",
    storageMode: "external_payload_ref",
    availability: "available",
    retentionClass: "standard",
    legalHold: false,
    bindings: {
      projectId: "prj:mission",
      executionContractId: "xct:mission:1",
      executionAttemptId: "xat:mission:1",
      cycleInstanceId: "cyc:1",
    },
    containsSecrets: false,
    technicalResultRef: "res:w3a:abc123",
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:mission",
      actor: { actorId: "actor:t", role: "project_owner" },
      source: "execution_adapter",
      timestamp: NOW,
      correlationId: "cor:mission",
      projectId: "prj:mission",
    },
    version: 1,
    createdAt: NOW,
  };
}

describe("B1 mission Result Semantic", () => {
  it("A1 — generic quartet + mission marker + mission ER → exactly one", () => {
    const material = executionContractSemanticMaterial(missionContract());
    const r = resolveApplicableContractResultSemantics(material);
    expect(r.status).toBe("one");
    if (r.status === "one") {
      expect(r.semantic.ruleRef).toBe(MISSION_RESULT_RULE_REF);
      expect(r.semantic.id).toBe("mission-result");
    }
  });

  it("A2 — missing mission marker → none", () => {
    const material = executionContractSemanticMaterial(
      missionContract({
        constraints: ["PRODUCT_GOVERNED", "EFFECT_CLASS:read"],
      }),
    );
    expect(resolveApplicableContractResultSemantics(material).status).toBe(
      "none",
    );
  });

  it("A3 — missing mission ER → none", () => {
    const material = executionContractSemanticMaterial(
      missionContract({ evidenceRequirements: ["evreq:read"] }),
    );
    expect(resolveApplicableContractResultSemantics(material).status).toBe(
      "none",
    );
  });

  it("A4 — temp-artifact remains temp only", () => {
    const material = executionContractSemanticMaterial(
      missionContract({
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        requiredCapabilities: ["cap:product-temp-artifact"],
        constraints: ["PRODUCT_GOVERNED"],
        evidenceRequirements: [W3B_TEMP_ARTIFACT_ER_KEY],
        expectedOutputs: [W3B_TEMP_ARTIFACT_EO_TEMPLATE],
      }),
    );
    const r = resolveApplicableContractResultSemantics(material);
    expect(r.status).toBe("one");
    if (r.status === "one") {
      expect(r.semantic.ruleRef).toBe(W3B_TEMP_ARTIFACT_RULE_REF);
    }
  });

  it("A5 — docs_write remains docs_write only", () => {
    const material = executionContractSemanticMaterial(
      missionContract({
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: "docs/x.md",
        scope: "docs/",
        requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
        constraints: [],
        evidenceRequirements: ["evreq:docs_write_artifact"],
        expectedOutputs: [
          "Un fichier Markdown nommé note-de-cadrage.md.",
        ],
      }),
    );
    const r = resolveApplicableContractResultSemantics(material);
    expect(r.status).toBe("one");
    if (r.status === "one") {
      expect(r.semantic.ruleRef).toBe(DOCS_WRITE_CONTRACT_RESULT_RULE_REF);
    }
  });

  it("A6 — technical success without mission Evidence → NOT_PROVEN", () => {
    const c = missionContract();
    const material = executionContractSemanticMaterial(c);
    const eo = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:mission:1",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: c.semanticFingerprint as string,
        status: "succeeded",
        resultRef: "res:w3a:abc123",
      },
      evidences: [],
      evaluatedAt: NOW,
      frozenEvidenceSnapshots: [],
    });
    expect(eo.every((x) => x.result === "NOT_PROVEN")).toBe(true);
  });

  it("A7 — bound valid mission Evidence → EO PASS / ER SATISFIED / pass", () => {
    const refs = fs.mkdtempSync(path.join(os.tmpdir(), "mission-refs-"));
    refsDirs.push(refs);
    const payload = samplePayload();
    const persisted = persistMissionResultPayload({
      refsRoot: refs,
      attemptId: payload.attemptId,
      payload,
    });
    expect(persisted.ok).toBe(true);
    if (!persisted.ok) return;
    const evidence = makeMissionEvidence(
      persisted.absolutePath,
      persisted.digest,
    );
    const c = missionContract();
    const material = executionContractSemanticMaterial(c);
    const attempt = {
      attemptId: "xat:mission:1",
      executionContractId: c.executionContractId,
      executionContractVersion: 1,
      executionContractSemanticFingerprint: c.semanticFingerprint as string,
      status: "succeeded" as const,
      resultRef: "res:w3a:abc123",
    };
    const snap = [
      {
        evidenceId: evidence.evidenceId,
        evidenceVersion: 1,
        status: "verified",
        availability: "available",
      },
    ];
    const eo = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt,
      evidences: [evidence],
      evaluatedAt: NOW,
      frozenEvidenceSnapshots: snap,
    });
    const er = assessEvidenceRequirements({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt,
      evidences: [evidence],
      evaluatedAt: NOW,
      frozenEvidenceSnapshots: snap,
    });
    expect(eo[0]?.result).toBe("PASS");
    expect(eo[1]?.result).toBe("PASS");
    expect(er.find((x) => x.requirement === MISSION_RESULT_ER_KEY)?.result).toBe(
      "SATISFIED",
    );
    expect(
      deriveCanonicalContractResultStatus({
        attemptStatus: "succeeded",
        expectedOutputAssessments: eo,
        evidenceRequirementAssessments: er.filter(
          (x) => x.requirement === MISSION_RESULT_ER_KEY,
        ),
      }),
    ).toBe("pass");
  });

  it("A8/A9/A10 — report Attempt / EC / repository-baseSha mismatch → reject", () => {
    const report: CursorExecutionReport = {
      schemaVersion: "oa.cursor-execution-report.1",
      reportId: mintCursorExecutionReportId({
        attemptId: "xat:a",
        executionContractId: "xct:a",
      }),
      attemptId: "xat:a",
      executionContractId: "xct:a",
      repositoryRef: "org/repo",
      baseSha: "b".repeat(40),
      status: "succeeded",
      authorizedEffectsExecuted: [],
    };
    expect(
      bindCursorExecutionReportToAttempt({
        report,
        expectedAttemptId: "xat:other",
        expectedExecutionContractId: "xct:a",
      }).ok,
    ).toBe(false);
    expect(
      bindCursorExecutionReportToAttempt({
        report,
        expectedAttemptId: "xat:a",
        expectedExecutionContractId: "xct:other",
      }).ok,
    ).toBe(false);
    expect(
      bindCursorExecutionReportToAttempt({
        report,
        expectedAttemptId: "xat:a",
        expectedExecutionContractId: "xct:a",
        expectedRepositoryRef: "other/repo",
      }).ok,
    ).toBe(false);
    expect(
      bindCursorExecutionReportToAttempt({
        report,
        expectedAttemptId: "xat:a",
        expectedExecutionContractId: "xct:a",
        expectedRepositoryRef: "org/repo",
        expectedBaseSha: "c".repeat(40),
      }).ok,
    ).toBe(false);
    expect(
      bindCursorExecutionReportToAttempt({
        report,
        expectedAttemptId: "xat:a",
        expectedExecutionContractId: "xct:a",
        expectedRepositoryRef: "org/repo",
        expectedBaseSha: "b".repeat(40),
      }).ok,
    ).toBe(true);
  });

  it("registry never ambiguous for standard materials", () => {
    for (const c of [
      missionContract(),
      missionContract({
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        requiredCapabilities: ["cap:product-temp-artifact"],
        constraints: [],
        evidenceRequirements: [W3B_TEMP_ARTIFACT_ER_KEY],
        expectedOutputs: [W3B_TEMP_ARTIFACT_EO_TEMPLATE],
      }),
    ]) {
      const material = executionContractSemanticMaterial(c);
      const matches = CONTRACT_RESULT_SEMANTICS.filter((s) =>
        s.isApplicable(material),
      );
      expect(matches.length).toBeLessThanOrEqual(1);
    }
    expect(digestMissionResultPayload(samplePayload()).startsWith("sha256:")).toBe(
      true,
    );
  });
});
