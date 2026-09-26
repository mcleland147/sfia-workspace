/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — Contract Result criteria parity.
 *
 * Sealed structured acceptance criteria are evaluated by the SAME semantics
 * (no second evaluator). Only deterministic kinds can PASS; manual_review and
 * unbound prose stay NOT_PROVEN — no LLM auto-PASS.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { assessExpectedOutputs } from "@/lib/oa/evidence-review/application/contractResultAssessment";
import { resolveApplicableContractResultSemantics } from "@/lib/oa/evidence-review/application/contractResultSemantics";
import {
  digestMissionResultPayload,
  MISSION_RESULT_ER_KEY,
  PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
  type MissionResultPayload,
} from "@/lib/oa/evidence-review/application/missionResultPayload";
import { MISSION_RESULT_EVIDENCE_SOURCE } from "@/lib/oa/evidence-review/application/missionResultContractResultSemantic";
import {
  assessDocsWriteExpectedOutput,
  DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE,
} from "@/lib/oa/evidence-review/application/docsWriteContractResultSemantic";
import {
  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
  STUDIO_CURSOR_GENERALIST_SCOPE,
  STUDIO_CURSOR_GENERALIST_TARGET,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import type { Evidence } from "@/lib/oa/evidence-review";
import { persistMissionResultPayload } from "@/features/project-assistant/f3/ingestMissionResultEvidence";

const NOW = "2026-09-23T10:00:00.000Z";

/** Project-specific EO prose — no fixed template grammar can decide it. */
const CUSTOM_DIAGNOSTIC_EO =
  "Diagnostic ciblé du blocage de finalisation du cycle en cours";
const CUSTOM_ARTIFACT_EO =
  "Note de cadrage matérialisée pour le Pilote (livrable du cycle)";
const DOCS_TARGET = "docs/note-de-cadrage.md";
const ARTIFACT_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622";

const refsDirs: string[] = [];

afterEach(() => {
  while (refsDirs.length) {
    const d = refsDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function missionContract(inputs: Record<string, unknown>): ExecutionContract {
  const base = {
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
    evidenceRequirements: [MISSION_RESULT_ER_KEY],
    expectedOutputs: [CUSTOM_DIAGNOSTIC_EO],
    requiredCapabilities: [STUDIO_CURSOR_GENERALIST_CAPABILITY],
    reversibility: "reversible",
    idempotencyKey: "idem:ec:mission",
    correlationId: "cor:ec:mission",
    inputs,
  } as unknown as ExecutionContract;
  base.semanticFingerprint = computeExecutionContractSemanticMaterialFingerprint(
    executionContractSemanticMaterial(base),
  );
  return base;
}

function missionEvidence(absolutePath: string, digest: string): Evidence {
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
  } as unknown as Evidence;
}

function missionPayload(): MissionResultPayload {
  return {
    schemaVersion: "oa.mission-result.1",
    reportId: "rpt:cursor:test",
    attemptId: "xat:mission:1",
    executionContractId: "xct:mission:1",
    repositoryRef: "mcleland147/sfia-workspace",
    baseSha: "a".repeat(40),
    status: "succeeded",
    diagnosticSummary: "Blocage identifié: réserve non levée.",
    recommendedNextProductStep: "Lever la réserve avant finalisation.",
    inspectedDurableTrace:
      "Trace d'inspection Attempt xat:mission:1 / Evidence ev:x / ReviewBundle rb:x",
    authorizedEffectsExecuted: [],
  } as MissionResultPayload;
}

function assessMissionEo(inputs: Record<string, unknown>) {
  const refs = fs.mkdtempSync(path.join(os.tmpdir(), "nelc01-mission-"));
  refsDirs.push(refs);
  const payload = missionPayload();
  const persisted = persistMissionResultPayload({
    refsRoot: refs,
    attemptId: payload.attemptId,
    payload,
  });
  if (!persisted.ok) throw new Error("persist");
  expect(digestMissionResultPayload(payload)).toBe(persisted.digest);
  const evidence = missionEvidence(persisted.absolutePath, persisted.digest);
  const contract = missionContract(inputs);
  const attempt = {
    attemptId: "xat:mission:1",
    executionContractId: contract.executionContractId,
    executionContractVersion: 1,
    executionContractSemanticFingerprint:
      contract.semanticFingerprint as string,
    status: "succeeded" as const,
    resultRef: "res:w3a:abc123",
  };
  // The registry must dispatch to exactly the mission semantic.
  expect(
    resolveApplicableContractResultSemantics(
      executionContractSemanticMaterial(contract),
    ).status,
  ).toBe("one");
  return assessExpectedOutputs({
    semanticMaterial: executionContractSemanticMaterial(contract),
    semanticFingerprint: contract.semanticFingerprint as string,
    attempt,
    evidences: [evidence],
    evaluatedAt: NOW,
    frozenEvidenceSnapshots: [
      {
        evidenceId: evidence.evidenceId,
        evidenceVersion: 1,
        status: "verified",
        availability: "available",
      },
    ],
  });
}

describe("mission Result Semantic honours sealed acceptance criteria", () => {
  it("project-specific EO without a criterion stays NOT_PROVEN", () => {
    const eo = assessMissionEo({});
    expect(eo[0]?.result).toBe("NOT_PROVEN");
  });

  it("deterministic criterion bound to the EO yields PASS", () => {
    const eo = assessMissionEo({
      [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
        {
          criterionId: "acc:01:mission-diagnostic",
          statement: CUSTOM_DIAGNOSTIC_EO,
          kind: "mission_diagnostic",
          expectedOutputRef: CUSTOM_DIAGNOSTIC_EO,
          targetPath: null,
        },
      ],
    });
    expect(eo[0]?.result).toBe("PASS");
  });

  it("manual_review criterion never auto-passes", () => {
    const eo = assessMissionEo({
      [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
        {
          criterionId: "acc:01:manual-review",
          statement: CUSTOM_DIAGNOSTIC_EO,
          kind: "manual_review",
          expectedOutputRef: CUSTOM_DIAGNOSTIC_EO,
          targetPath: null,
        },
      ],
    });
    expect(eo[0]?.result).toBe("NOT_PROVEN");
  });

  it("criterion bound to a different EO does not leak a PASS", () => {
    const eo = assessMissionEo({
      [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
        {
          criterionId: "acc:01:mission-diagnostic",
          statement: "autre",
          kind: "mission_diagnostic",
          expectedOutputRef: "un autre expected output",
          targetPath: null,
        },
      ],
    });
    expect(eo[0]?.result).toBe("NOT_PROVEN");
  });
});

describe("docs_write Result Semantic honours sealed acceptance criteria", () => {
  const attempt = {
    attemptId: "xat:docs:1",
    executionContractId: "xct:docs:1",
    executionContractVersion: 1,
    executionContractSemanticFingerprint: "fp:docs",
    status: "succeeded" as const,
    resultRef: "res:docs:1",
  };

  const artifact = {
    schemaVersion: "0.2.0-oa",
    evidenceId: "ev:docs-write:xatdocs1",
    type: "artifact",
    source: DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE,
    sourceKind: "execution_attempt",
    location: DOCS_TARGET,
    digest: ARTIFACT_DIGEST,
    producedAt: NOW,
    freshness: "fresh",
    status: "verified",
    availability: "available",
    bindings: {
      projectId: "prj:docs",
      executionContractId: "xct:docs:1",
      executionAttemptId: "xat:docs:1",
      cycleInstanceId: "cyc:docs",
    },
    version: 1,
    createdAt: NOW,
  } as unknown as Evidence;

  function assess(inputs: Record<string, unknown>, expectation: string) {
    return assessDocsWriteExpectedOutput({
      expectation,
      ordinal: 0,
      attempt,
      evidence: artifact,
      material: {
        executionContractId: "xct:docs:1",
        projectId: "prj:docs",
        cycleInstanceId: "cyc:docs",
        inputs,
      },
      evidences: [artifact],
    });
  }

  it("prose EO without a criterion stays NOT_PROVEN", () => {
    expect(assess({ targetPath: DOCS_TARGET }, CUSTOM_ARTIFACT_EO)).toBe(
      "NOT_PROVEN",
    );
  });

  it("artifact_at_path criterion bound to the EO yields PASS", () => {
    expect(
      assess(
        {
          targetPath: DOCS_TARGET,
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:artifact-at-path",
              statement: CUSTOM_ARTIFACT_EO,
              kind: "artifact_at_path",
              expectedOutputRef: CUSTOM_ARTIFACT_EO,
              targetPath: DOCS_TARGET,
            },
          ],
        },
        CUSTOM_ARTIFACT_EO,
      ),
    ).toBe("PASS");
  });

  it("artifact_at_path criterion pointing elsewhere stays NOT_PROVEN", () => {
    expect(
      assess(
        {
          targetPath: DOCS_TARGET,
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:artifact-at-path",
              statement: CUSTOM_ARTIFACT_EO,
              kind: "artifact_at_path",
              expectedOutputRef: CUSTOM_ARTIFACT_EO,
              targetPath: "docs/other.md",
            },
          ],
        },
        CUSTOM_ARTIFACT_EO,
      ),
    ).toBe("NOT_PROVEN");
  });

  it("conformity criterion without a conformity attestation stays NOT_PROVEN", () => {
    expect(
      assess(
        {
          targetPath: DOCS_TARGET,
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:conformity",
              statement: CUSTOM_ARTIFACT_EO,
              kind: "artifact_conformity_attested",
              expectedOutputRef: CUSTOM_ARTIFACT_EO,
              targetPath: null,
            },
          ],
        },
        CUSTOM_ARTIFACT_EO,
      ),
    ).toBe("NOT_PROVEN");
  });

  it("a failed Attempt still FAILs regardless of criteria", () => {
    expect(
      assessDocsWriteExpectedOutput({
        expectation: CUSTOM_ARTIFACT_EO,
        ordinal: 0,
        attempt: { ...attempt, status: "failed" as const },
        evidence: artifact,
        material: {
          executionContractId: "xct:docs:1",
          inputs: {
            [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
              {
                criterionId: "acc:01:artifact-at-path",
                statement: CUSTOM_ARTIFACT_EO,
                kind: "artifact_at_path",
                expectedOutputRef: CUSTOM_ARTIFACT_EO,
                targetPath: DOCS_TARGET,
              },
            ],
          },
        },
        evidences: [artifact],
      }),
    ).toBe("FAIL");
  });
});
