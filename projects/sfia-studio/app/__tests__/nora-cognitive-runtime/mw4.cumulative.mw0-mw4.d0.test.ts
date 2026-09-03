/** @vitest-environment node */
/**
 * MW4 cumulative — Session + MW3 STOP + MW4 re-resolve (Fake, ZERO LIVE).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  runNoraCognitiveTurn,
} from "@/lib/nora-cognitive-runtime";
import {
  resolveRememberedEvidence,
  setMw3AvailableEvidenceForTests,
} from "@/features/project-assistant/mw3AvailableEvidence";
import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
import { EVIDENCE_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/types";
import { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine/domain/types";

const tempDirs: string[] = [];
const NOW = "2026-09-03T10:00:00.000Z";
const REV = { lpsId: "lps:mw4-cum", lpsVersion: 1 };

function tempDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-cum-"));
  tempDirs.push(dir);
  return path.join(dir, "nora-session.sqlite");
}

function catalogEvidence(
  evidenceId: string,
  source: string,
  projectId: string,
): Evidence {
  return {
    schemaVersion: EVIDENCE_SCHEMA_VERSION,
    evidenceId,
    type: "artifact",
    source,
    sourceKind: "external",
    producedAt: NOW,
    freshness: "fresh",
    status: "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    bindings: { projectId },
    containsSecrets: false,
    provenance: {
      schemaVersion: OA_SCHEMA_VERSION,
      provenanceRecordId: `prv:${evidenceId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      source: "system",
      timestamp: NOW,
      correlationId: `cor:${evidenceId}`,
    },
    version: 1,
    createdAt: NOW,
  };
}

afterEach(() => {
  setMw3AvailableEvidenceForTests(null);
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("MW4 cumulative — MW0–MW4 Session + STOP + re-resolve", () => {
  it("Session continuity + MW3 STOP + MW4 re-resolve stay coherent", async () => {
    const projectId = "prj:mw4-cum";
    const dbPath = tempDb();
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence("ev:1", "src:a", projectId),
        catalogEvidence("ev:2", "src:b", projectId),
      ],
    });

    const provider1 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] cumulative T1." }],
    });
    const turn1 = await runNoraCognitiveTurn({
      correlationId: "mw4-cum-t1",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Assess governing contradiction." },
      ],
      provider: provider1,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      resolveRememberedEvidence,
      postEvidenceNarrativePolicy: true,
      contradictionAssessment: {
        conflict: {
          conflictPresent: true,
          requiredSourceCount: 2,
          requiredDomains: [projectId],
          evidencePointers: [
            {
              evidenceId: "ev:1",
              sourceId: "src:a",
              domain: projectId,
              freshness: "fresh",
              attributable: true,
            },
            {
              evidenceId: "ev:2",
              sourceId: "src:b",
              domain: projectId,
              freshness: "fresh",
              attributable: true,
            },
          ],
          trustedSfiaProfile: null,
        },
        governingPremiseInvalidated: true,
        governingPremise: "Must remain FinOps-frozen",
      },
    });

    expect(turn1.contradictionDisposition?.disposition).toBe("evidence_backed");
    expect(turn1.cognitiveStopDecision?.cognitiveStop).toBe(true);
    expect(turn1.cognitiveStopDecision?.allowsSilentSuccess).toBe(false);
    expect(turn1.text).toMatch(/COGNITIVE STOP/);
    expect(turn1.memoryBAvailability).not.toBe("unavailable");

    const provider2 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] cumulative T2." }],
    });
    const turn2 = await runNoraCognitiveTurn({
      correlationId: "mw4-cum-t2",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Continue after STOP." },
      ],
      provider: provider2,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      resolveRememberedEvidence,
      postEvidenceNarrativePolicy: true,
      readCoverageFacts: [
        { pathOrRef: "docs/a.md", coverage: "full" },
        { pathOrRef: "docs/b.md", coverage: "partial", signals: ["truncated"] },
      ],
    });

    expect(turn2.mw4Grounding?.validIds.sort()).toEqual(["ev:1", "ev:2"]);
    expect(turn2.mw4Grounding?.disclosure).toMatch(/ZERO authority until re-resolved/);
    expect(turn2.mw4Grounding?.readCoverageOverall).toBe("partial");
    expect(turn2.mw4Grounding?.readCoverageDisclosure).toMatch(/partial/);
    // MW3 STOP not re-fired without assessment — progress may continue.
    expect(turn2.cognitiveStopDecision).toBeUndefined();
  });
});
