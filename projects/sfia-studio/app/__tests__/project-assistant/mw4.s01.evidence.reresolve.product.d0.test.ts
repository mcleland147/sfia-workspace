/** @vitest-environment node */
/**
 * MW4-S01 — product path Evidence re-resolve (Fake + Fake Evidence catalog).
 * ZERO LIVE OpenAI. T3/T4/T5 two-Evidence continuity across turns.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { setMw3AvailableEvidenceForTests } from "@/features/project-assistant/mw3AvailableEvidence";
import type { Mw3ContradictionCandidateSignal } from "@/lib/nora-cognitive-runtime/deriveMw3Assessment";
import type { SemanticCognitiveWorkloadAssessment } from "@/features/project-assistant/f2/types";
import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
import { EVIDENCE_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/types";
import { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine/domain/types";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const tempDirs: string[] = [];

function mediumCwp(): SemanticCognitiveWorkloadAssessment {
  return {
    ambiguity: "medium",
    reasoningDepth: "high",
    sourceBreadth: "medium",
    toolDependency: "medium",
    contradictionRisk: "high",
    verificationNeed: "high",
  };
}

function intentJson(input: {
  cognitiveWorkload: SemanticCognitiveWorkloadAssessment;
  contradictionCandidate?: Mw3ContradictionCandidateSignal | null;
}): string {
  return JSON.stringify({
    intentClass: "informative",
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: input.cognitiveWorkload,
    contradictionCandidate: input.contradictionCandidate ?? null,
    objective: "Analyse contradiction",
    scope: null,
    rephrasedRequest: "Évaluer le conflit annoncé",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
  });
}

function catalogEvidence(input: {
  evidenceId: string;
  source: string;
  projectId: string;
  status?: Evidence["status"];
}): Evidence {
  return {
    schemaVersion: EVIDENCE_SCHEMA_VERSION,
    evidenceId: input.evidenceId,
    type: "artifact",
    source: input.source,
    sourceKind: "external",
    producedAt: "2026-09-03T12:00:00.000Z",
    freshness: "fresh",
    status: input.status ?? "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    bindings: { projectId: input.projectId },
    containsSecrets: false,
    provenance: {
      schemaVersion: OA_SCHEMA_VERSION,
      provenanceRecordId: `prv:${input.evidenceId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      source: "system",
      timestamp: "2026-09-03T12:00:00.000Z",
      correlationId: `cor:${input.evidenceId}`,
    },
    version: 1,
    createdAt: "2026-09-03T12:00:00.000Z",
  };
}

describe("MW4-S01 — product Evidence re-resolve D0", () => {
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevKey = process.env.OPENAI_API_KEY;
  const prevModel = process.env.OPENAI_MODEL;

  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.OPENAI_MODEL = "gpt-5.6-luna";
    delete process.env.OPENAI_API_KEY;
    resetRuntimeApplicationServiceForTests();
    setConversationProviderForTests(null);
    setMw3AvailableEvidenceForTests(null);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    setMw3AvailableEvidenceForTests(null);
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    if (prevProvider === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = prevModel;
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  async function createProject(): Promise<{
    projectId: string;
    sessionDbPath: string;
  }> {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-prod-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
    });
    const created = await runtime.createProject({
      name: "MW4 product grounding",
      objective: "Evidence re-resolve product path",
      context: "Deterministic Fake only",
      criticality: "STANDARD",
      constraints: ["LECTURE SEULE"],
      shortReference: "MW4P",
      idempotencyKey: `idem:mw4p-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup failed");
    return {
      projectId: created.projectId,
      sessionDbPath: path.join(dir, "nora-session.sqlite"),
    };
  }

  it("T3 — first turn with two Evidence IDs persists non-authoritative refs", async () => {
    const { projectId, sessionDbPath } = await createProject();
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({ evidenceId: "ev:1", source: "src:a", projectId }),
        catalogEvidence({ evidenceId: "ev:2", source: "src:b", projectId }),
      ],
    });

    const provider = new FakeConversationProvider({
      scripted: [
        intentJson({
          cognitiveWorkload: mediumCwp(),
          contradictionCandidate: {
            conflictPresent: true,
            claimedEvidenceIds: ["ev:1", "ev:2"],
            governingPremise: "FinOps freeze must hold",
            governingPremiseInvalidated: true,
            localImpactOnly: false,
            fabricationAttempt: false,
          },
        }),
      ],
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] Two-evidence assessment. AUCUNE EXÉCUTION.",
        },
      ],
    });
    setConversationProviderForTests(provider);

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Évalue le conflit avec les deux Evidence.",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("T3 failed");
    expect(result.mw3?.disposition).toBe("evidence_backed");
    expect(result.mw3?.cognitiveStop).toBe(true);
    expect(result.status).toBe("cognitive_stop");
  });

  it("T4 — subsequent turn re-resolves prior two Evidence IDs", async () => {
    const { projectId, sessionDbPath } = await createProject();
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({ evidenceId: "ev:1", source: "src:a", projectId }),
        catalogEvidence({ evidenceId: "ev:2", source: "src:b", projectId }),
      ],
    });

    const provider1 = new FakeConversationProvider({
      scripted: [
        intentJson({
          cognitiveWorkload: mediumCwp(),
          contradictionCandidate: {
            conflictPresent: true,
            claimedEvidenceIds: ["ev:1", "ev:2"],
            governingPremise: "FinOps freeze must hold",
            governingPremiseInvalidated: true,
            localImpactOnly: false,
            fabricationAttempt: false,
          },
        }),
      ],
      toolScript: [{ kind: "message", text: "[TEST/FAKE] T4 seed." }],
    });
    setConversationProviderForTests(provider1);
    const seed = await orchestrateAssistantSend({
      projectId,
      content: "Seed two Evidence.",
      sessionDbPath,
    });
    expect(seed.ok).toBe(true);

    const provider2 = new FakeConversationProvider({
      scripted: [
        intentJson({
          cognitiveWorkload: mediumCwp(),
          contradictionCandidate: null,
        }),
      ],
      toolScript: [{ kind: "message", text: "[TEST/FAKE] T4 follow-up." }],
    });
    setConversationProviderForTests(provider2);
    const follow = await orchestrateAssistantSend({
      projectId,
      content: "Continue with prior grounding.",
      sessionDbPath,
    });
    expect(follow.ok).toBe(true);
    if (!follow.ok) throw new Error("T4 failed");
    expect(follow.mw4?.rememberedIds.sort()).toEqual(["ev:1", "ev:2"]);
    expect(follow.mw4?.validIds.sort()).toEqual(["ev:1", "ev:2"]);
    expect(follow.mw4?.disclosure).toMatch(/ZERO authority until re-resolved/);
    expect(follow.mw4?.disclosure).toMatch(/Narrative text ≠ Evidence/);
  });

  it("T5 — withdrawn Evidence on later turn is downgraded, not attributed", async () => {
    const { projectId, sessionDbPath } = await createProject();
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({ evidenceId: "ev:1", source: "src:a", projectId }),
        catalogEvidence({ evidenceId: "ev:2", source: "src:b", projectId }),
      ],
    });

    const provider1 = new FakeConversationProvider({
      scripted: [
        intentJson({
          cognitiveWorkload: mediumCwp(),
          contradictionCandidate: {
            conflictPresent: true,
            claimedEvidenceIds: ["ev:1", "ev:2"],
            governingPremise: "FinOps freeze must hold",
            governingPremiseInvalidated: true,
            localImpactOnly: false,
            fabricationAttempt: false,
          },
        }),
      ],
      toolScript: [{ kind: "message", text: "[TEST/FAKE] T5 seed." }],
    });
    setConversationProviderForTests(provider1);
    await orchestrateAssistantSend({
      projectId,
      content: "Seed.",
      sessionDbPath,
    });

    // Withdraw one Evidence before follow-up.
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({ evidenceId: "ev:1", source: "src:a", projectId }),
        catalogEvidence({
          evidenceId: "ev:2",
          source: "src:b",
          projectId,
          status: "unavailable",
        }),
      ],
    });

    const provider2 = new FakeConversationProvider({
      scripted: [
        intentJson({
          cognitiveWorkload: mediumCwp(),
          contradictionCandidate: null,
        }),
      ],
      toolScript: [{ kind: "message", text: "[TEST/FAKE] T5 follow-up." }],
    });
    setConversationProviderForTests(provider2);
    const follow = await orchestrateAssistantSend({
      projectId,
      content: "Re-check grounding.",
      sessionDbPath,
    });
    expect(follow.ok).toBe(true);
    if (!follow.ok) throw new Error("T5 failed");
    expect(follow.mw4?.validIds).toEqual(["ev:1"]);
    expect(follow.mw4?.downgradedIds).toContain("ev:2");
    expect(follow.mw4?.disclosure).toMatch(/Withdrawn \/ downgraded/);
  });
});
