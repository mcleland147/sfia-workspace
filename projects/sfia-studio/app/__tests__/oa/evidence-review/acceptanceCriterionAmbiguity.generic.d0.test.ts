// @vitest-environment node
/**
 * Generic acceptance-criterion ambiguity.
 *
 * Ported from the generic half of
 * nativeExecutionLoopConvergence01.acceptanceAmbiguity.d0.test.ts.
 * NONE ≠ AMBIGUOUS. Ambiguous structured matches and unique manual_review
 * must never fall through to a legacy PASS.
 * docs_write Result Semantic is not covered here.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { persistMissionResultPayload } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  assessMissionResultExpectedOutput,
  MISSION_RESULT_EVIDENCE_SOURCE,
} from "@/lib/oa/evidence-review/application/missionResultContractResultSemantic";
import {
  digestMissionResultPayload,
  MISSION_DIAGNOSTIC_EO_TEMPLATES,
  type MissionResultPayload,
} from "@/lib/oa/evidence-review/application/missionResultPayload";
import {
  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
  resolveAcceptanceCriterionForExpectedOutput,
} from "@/lib/oa/execution-contract";

const NOW = "2026-09-23T10:00:00.000Z";
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

describe("mission semantic — AMBIGUOUS and manual_review stay NOT_PROVEN", () => {
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
    };
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
