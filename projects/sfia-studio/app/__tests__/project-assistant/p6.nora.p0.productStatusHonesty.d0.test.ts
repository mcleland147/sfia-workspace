/**
 * P6 Nora P0 — Product Status Honesty (execution limit ≠ success).
 * Fake / mocked cognitive turn only — ZERO REAL.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  EXECUTION_LIMIT_INCOMPLETE_PILOTE_NOTICE,
  orchestrateProjectAssistantTurn,
} from "@/features/project-assistant/orchestrateTurn";

const {
  getProjectRuntimeActionMock,
  runNoraCognitiveTurnMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  runNoraCognitiveTurnMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

vi.mock("@/lib/nora-cognitive-runtime", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/nora-cognitive-runtime")>();
  return {
    ...actual,
    runNoraCognitiveTurn: (...args: unknown[]) =>
      runNoraCognitiveTurnMock(...args),
  };
});

const SUCCESS = {
  ok: true as const,
  project: {
    projectId: "prj:p0-honesty",
    name: "Projet P0",
    shortReference: "P0",
    objective: "Status honesty under execution limit.",
    contextSummary: "P0 D0",
    criticality: "STANDARD" as const,
    constraints: ["Lecture seule"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:p0",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:p0",
    version: 1 as const,
    createdAt: "2026-10-12T00:00:00.000Z",
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    projectLpsRestartSafe: true as const,
    cycleInstanceRestartSafe: true as const,
    humanDecisionRestartSafe: true as const,
    executionContractRestartSafe: true as const,
    messages: [] as const,
  },
};

function baseTurn(overrides: Record<string, unknown> = {}) {
  return {
    text: "Model-turn budget reached (maxTurns).",
    usage: {
      inputTokens: null,
      outputTokens: null,
      totalTokens: null,
      model: "fake-test-model",
      providerResponseId: null,
    },
    toolRounds: 2,
    toolCalls: 2,
    limitReached: true,
    cognitiveRuntime: "agents" as const,
    sessionId: "sess:p0",
    memoryBAvailability: "unavailable" as const,
    memoryBCompactionState: "none" as const,
    memoryBCompactionDetails: null,
    ...overrides,
  };
}

describe("P6 Nora P0 — Product Status Honesty", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  let sessionDir: string;
  let sessionDbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    getProjectRuntimeActionMock.mockReset();
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
    runNoraCognitiveTurnMock.mockReset();
    setConversationProviderForTests(null);
    sessionDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p0-orch-"));
    sessionDbPath = path.join(sessionDir, "session.sqlite");
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    if (previousFake === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    }
    fs.rmSync(sessionDir, { recursive: true, force: true });
  });

  it("T2/T3/T6/T12 — limitReached ⇒ status incomplete (not ok); DTO exposes limitReached", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(baseTurn());
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:p0-honesty",
      content: "Guided Document Review multi-source.",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("incomplete");
    expect(result.status).not.toBe("ok");
    expect(result.status).not.toBe("cognitive_stop");
    expect(result.limitReached).toBe(true);
    expect(result.text.length).toBeGreaterThan(0);
    expect(result.ephemeralNotice).toContain(
      EXECUTION_LIMIT_INCOMPLETE_PILOTE_NOTICE.slice(0, 40),
    );
    expect(result.lifecycleRecommendationMaterialized).not.toBe(true);
  });

  it("T5 — structured LR candidate is not materialized when limitReached", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(
      baseTurn({
        text: "partial narrative before budget",
        structuredOutput: {
          narrative: "partial narrative before budget",
          preCycleRoutingAssessment: {
            intentClarity: "clear",
            cycleTypeCandidatePresent: true,
            activeCycleAlreadyCoversWork: false,
            contradictionRisk: "none",
            readyToRecommendLifecycle: true,
          },
          lifecycleRecommendation: {
            kind: "NEXT_CYCLE",
            targetCycleTypeId: "cyc:framing",
            rationale: "should not materialize under limitReached",
            confidence: "medium",
          },
          activeCycleWork: {
            items: [
              {
                type: "WorkItem",
                title: "Should not write",
                summary: "blocked by P0",
              },
            ],
          },
          conversationGuidance: {
            mode: "CONTINUE",
            primaryAsk: null,
            suggestedNextUserActs: [],
          },
          journalDelta: {
            entries: [{ kind: "NOTE", text: "should not journal as complete" }],
          },
          reservationDelta: null,
        },
      }),
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:p0-honesty",
      content: "Propose next cycle despite budget stop.",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("incomplete");
    expect(result.limitReached).toBe(true);
    expect(result.lifecycleRecommendationMaterialized).toBe(false);
    expect(result.reservationProposedIds ?? []).toEqual([]);
  });

  it("T7 — limitReached=false preserves status ok", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(
      baseTurn({
        text: "[TEST/FAKE] complete reply",
        limitReached: false,
        toolRounds: 0,
        toolCalls: 0,
        structuredOutput: undefined,
      }),
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:p0-honesty",
      content: "Simple ping",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("ok");
    expect(result.limitReached).toBe(false);
    expect(result.ephemeralNotice).not.toContain(
      "Limite d'exécution cognitive atteinte",
    );
  });

  it("T8 — Cognitive STOP remains distinct from incomplete", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(
      baseTurn({
        text: "blocked by Cognitive STOP",
        limitReached: false,
        toolRounds: 0,
        toolCalls: 0,
        contradictionDisposition: {
          disposition: "evidence_backed",
          disclosure: "contradiction",
          acceptedEvidenceIds: ["ev:1"],
          acceptedSourceIds: ["src:a"],
          insufficiencyReasons: [],
        },
        cognitiveStopDecision: {
          progression: "cognitive_stop",
          outcome: "COGNITIVE_STOP",
          cognitiveStop: true,
          anatomy: {
            reason: "premise invalidated",
            contradictionEvidenceIds: ["ev:1"],
            sourceIds: ["src:a"],
            governingPremise: "X",
            nextAction: "replan",
          },
          surfacedDisposition: "evidence_backed",
          allowsSilentSuccess: false,
        },
      }),
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:p0-honesty",
      content: "Evaluate contradiction",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("cognitive_stop");
    expect(result.limitReached).toBe(false);
    expect(result.mw3?.cognitiveStop).toBe(true);
  });

  it("T8b — Cognitive STOP outranks incomplete when both true", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(
      baseTurn({
        text: "stop and limit",
        limitReached: true,
        contradictionDisposition: {
          disposition: "evidence_backed",
          disclosure: "contradiction",
          acceptedEvidenceIds: ["ev:1"],
          acceptedSourceIds: [],
          insufficiencyReasons: [],
        },
        cognitiveStopDecision: {
          progression: "cognitive_stop",
          outcome: "COGNITIVE_STOP",
          cognitiveStop: true,
          anatomy: {
            reason: "premise invalidated",
            contradictionEvidenceIds: ["ev:1"],
            sourceIds: [],
            governingPremise: "X",
            nextAction: "replan",
          },
          surfacedDisposition: "evidence_backed",
          allowsSilentSuccess: false,
        },
      }),
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:p0-honesty",
      content: "both",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("cognitive_stop");
    expect(result.limitReached).toBe(true);
  });
});
