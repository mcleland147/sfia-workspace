// @vitest-environment node
/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — FINAL FAIL-CLOSED CORRECTION
 *
 * NONE ≠ AMBIGUOUS for structured acceptance criteria resolution.
 * Ambiguous structured matches must never fall through to legacy PASS.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  digestMissionResultPayload,
  MISSION_DIAGNOSTIC_EO_TEMPLATES,
  type MissionResultPayload,
} from "@/lib/oa/evidence-review/application/missionResultPayload";
import {
  assessMissionResultExpectedOutput,
  MISSION_RESULT_EVIDENCE_SOURCE,
} from "@/lib/oa/evidence-review/application/missionResultContractResultSemantic";
import {
  assessDocsWriteExpectedOutput,
  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
  DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE,
} from "@/lib/oa/evidence-review/application/docsWriteContractResultSemantic";
import {
  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
  resolveAcceptanceCriterionForExpectedOutput,
} from "@/lib/oa/execution-contract";
import type { Evidence } from "@/lib/oa/evidence-review";
import { persistMissionResultPayload } from "@/features/project-assistant/f3/ingestMissionResultEvidence";

const NOW = "2026-09-23T10:00:00.000Z";
const DOCS_TARGET = "docs/note-de-cadrage.md";
const ARTIFACT_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622";
const LEGACY_DIAGNOSTIC = MISSION_DIAGNOSTIC_EO_TEMPLATES[0]!;

const refsDirs: string[] = [];

afterEach(() => {
  while (refsDirs.length) {
    const d = refsDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("resolveAcceptanceCriterionForExpectedOutput — NONE ≠ AMBIGUOUS", () => {
  it("returns none / unique / ambiguous distinctly", () => {
    const criteria = [
      {
        criterionId: "acc:a",
        statement: "A",
        kind: "mission_diagnostic" as const,
        expectedOutputRef: "EO",
        targetPath: null,
      },
      {
        criterionId: "acc:b",
        statement: "B",
        kind: "manual_review" as const,
        expectedOutputRef: "EO",
        targetPath: null,
      },
    ];
    expect(resolveAcceptanceCriterionForExpectedOutput([], "EO")).toEqual({
      kind: "none",
    });
    expect(
      resolveAcceptanceCriterionForExpectedOutput([criteria[0]!], "EO").kind,
    ).toBe("unique");
    const amb = resolveAcceptanceCriterionForExpectedOutput(criteria, "EO");
    expect(amb.kind).toBe("ambiguous");
    if (amb.kind === "ambiguous") expect(amb.matches).toHaveLength(2);
  });
});

describe("mission semantic — NONE / UNIQUE / AMBIGUOUS", () => {
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

  function preparePayloadEvidence() {
    const refs = fs.mkdtempSync(path.join(os.tmpdir(), "nelc01-amb-mission-"));
    refsDirs.push(refs);
    const payload: MissionResultPayload = {
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
        "Trace d'inspection Attempt xat:mission:1 / Evidence ev:x",
      authorizedEffectsExecuted: [],
    } as MissionResultPayload;
    const persisted = persistMissionResultPayload({
      refsRoot: refs,
      attemptId: payload.attemptId,
      payload,
    });
    if (!persisted.ok) throw new Error("persist");
    expect(digestMissionResultPayload(payload)).toBe(persisted.digest);
    return missionEvidence(persisted.absolutePath, persisted.digest);
  }

  const attempt = {
    attemptId: "xat:mission:1",
    executionContractId: "xct:mission:1",
    status: "succeeded" as const,
    resultRef: "res:w3a:abc123",
  };

  it("NONE — legacy diagnostic template still PASSes (compatibility)", () => {
    const evidence = preparePayloadEvidence();
    expect(
      assessMissionResultExpectedOutput({
        expectation: LEGACY_DIAGNOSTIC,
        ordinal: 1,
        attempt: attempt as never,
        evidence,
        contractInputs: {},
      }),
    ).toBe("PASS");
  });

  it("UNIQUE deterministic — structured criterion PASSes", () => {
    const evidence = preparePayloadEvidence();
    expect(
      assessMissionResultExpectedOutput({
        expectation: LEGACY_DIAGNOSTIC,
        ordinal: 1,
        attempt: attempt as never,
        evidence,
        contractInputs: {
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:mission-diagnostic",
              statement: LEGACY_DIAGNOSTIC,
              kind: "mission_diagnostic",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
          ],
        },
      }),
    ).toBe("PASS");
  });

  it("UNIQUE manual_review — NOT_PROVEN even when legacy grammar would PASS", () => {
    const evidence = preparePayloadEvidence();
    expect(
      assessMissionResultExpectedOutput({
        expectation: LEGACY_DIAGNOSTIC,
        ordinal: 1,
        attempt: attempt as never,
        evidence,
        contractInputs: {
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:manual-review",
              statement: LEGACY_DIAGNOSTIC,
              kind: "manual_review",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
          ],
        },
      }),
    ).toBe("NOT_PROVEN");
  });

  it("AMBIGUOUS 2+ — NOT_PROVEN; legacy PASS impossible", () => {
    const evidence = preparePayloadEvidence();
    expect(
      assessMissionResultExpectedOutput({
        expectation: LEGACY_DIAGNOSTIC,
        ordinal: 1,
        attempt: attempt as never,
        evidence,
        contractInputs: {
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:mission-diagnostic",
              statement: LEGACY_DIAGNOSTIC,
              kind: "mission_diagnostic",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
            {
              criterionId: "acc:02:manual-review",
              statement: LEGACY_DIAGNOSTIC,
              kind: "manual_review",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
          ],
        },
      }),
    ).toBe("NOT_PROVEN");
  });

  it("AMBIGUOUS two deterministic kinds — no arbitrary first match; NOT_PROVEN", () => {
    const evidence = preparePayloadEvidence();
    expect(
      assessMissionResultExpectedOutput({
        expectation: LEGACY_DIAGNOSTIC,
        ordinal: 1,
        attempt: attempt as never,
        evidence,
        contractInputs: {
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:mission-diagnostic",
              statement: LEGACY_DIAGNOSTIC,
              kind: "mission_diagnostic",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
            {
              criterionId: "acc:02:mission-next-step",
              statement: LEGACY_DIAGNOSTIC,
              kind: "mission_next_step",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
          ],
        },
      }),
    ).toBe("NOT_PROVEN");
  });
});

describe("docs_write semantic — NONE / UNIQUE / AMBIGUOUS", () => {
  function docsEvidence(): Evidence {
    return {
      schemaVersion: "0.2.0-oa",
      evidenceId: "ev:docs-write:xat1",
      type: "artifact",
      source: DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE,
      sourceKind: "execution_attempt",
      location: DOCS_TARGET,
      digest: ARTIFACT_DIGEST as never,
      producedBy: { actorId: "actor:t", role: "project_owner" },
      producedAt: NOW,
      status: "verified",
      availability: "available",
      freshness: "fresh",
      bindings: {
        projectId: "prj:docs",
        executionAttemptId: "xat:docs:1",
        executionContractId: "xct:docs:1",
      },
    } as unknown as Evidence;
  }

  const attempt = {
    attemptId: "xat:docs:1",
    status: "succeeded" as const,
    executionContractId: "xct:docs:1",
  };

  const materialBase = {
    executionContractId: "xct:docs:1",
    projectId: "prj:docs",
    inputs: { targetPath: DOCS_TARGET },
  };

  it("NONE — legacy BOUNDED template still PASSes (compatibility)", () => {
    expect(
      assessDocsWriteExpectedOutput({
        expectation: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
        ordinal: 1,
        attempt: attempt as never,
        evidence: docsEvidence(),
        material: materialBase,
      }),
    ).toBe("PASS");
  });

  it("UNIQUE deterministic artifact_at_path — PASS", () => {
    expect(
      assessDocsWriteExpectedOutput({
        expectation: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
        ordinal: 1,
        attempt: attempt as never,
        evidence: docsEvidence(),
        material: {
          ...materialBase,
          inputs: {
            targetPath: DOCS_TARGET,
            [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
              {
                criterionId: "acc:01:artifact-at-path",
                statement: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                kind: "artifact_at_path",
                expectedOutputRef: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                targetPath: DOCS_TARGET,
              },
            ],
          },
        },
      }),
    ).toBe("PASS");
  });

  it("UNIQUE manual_review — NOT_PROVEN even when legacy BOUNDED would PASS", () => {
    expect(
      assessDocsWriteExpectedOutput({
        expectation: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
        ordinal: 1,
        attempt: attempt as never,
        evidence: docsEvidence(),
        material: {
          ...materialBase,
          inputs: {
            targetPath: DOCS_TARGET,
            [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
              {
                criterionId: "acc:01:manual-review",
                statement: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                kind: "manual_review",
                expectedOutputRef: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                targetPath: DOCS_TARGET,
              },
            ],
          },
        },
      }),
    ).toBe("NOT_PROVEN");
  });

  it("AMBIGUOUS 2+ including a kind that would PASS alone — stays NOT_PROVEN", () => {
    expect(
      assessDocsWriteExpectedOutput({
        expectation: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
        ordinal: 1,
        attempt: attempt as never,
        evidence: docsEvidence(),
        material: {
          ...materialBase,
          inputs: {
            targetPath: DOCS_TARGET,
            [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
              {
                criterionId: "acc:01:artifact-at-path",
                statement: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                kind: "artifact_at_path",
                expectedOutputRef: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                targetPath: DOCS_TARGET,
              },
              {
                criterionId: "acc:02:manual-review",
                statement: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                kind: "manual_review",
                expectedOutputRef: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                targetPath: DOCS_TARGET,
              },
            ],
          },
        },
      }),
    ).toBe("NOT_PROVEN");
  });
});
