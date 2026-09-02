/** @vitest-environment node */
/**
 * MW3-S02 deterministic E2E + UX surface — Cognitive STOP honesty on product path.
 * Fake provider only — ZERO REAL OpenAI.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  decideCognitiveStop,
  disposeContradiction,
  formatCognitiveStopPiloteNotice,
} from "@/lib/nora-cognitive-runtime";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";

const { getProjectRuntimeActionMock } = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

const SUCCESS = {
  ok: true as const,
  project: {
    projectId: "prj:mw3-demo",
    name: "Projet MW3",
    shortReference: "MW3",
    objective: "Cognitive STOP honesty surface.",
    contextSummary: "MW3 D0 product path.",
    criticality: "STANDARD" as const,
    constraints: ["Lecture seule"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:mw3",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:mw3-demo",
    version: 1 as const,
    createdAt: "2026-09-02T12:00:00.000Z",
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

describe("MW3-S02 — product/runtime Cognitive STOP surface D0", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  let sessionDir: string;
  let sessionDbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    getProjectRuntimeActionMock.mockReset();
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
    setConversationProviderForTests(null);
    sessionDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw3-orch-"));
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

  it("maps evidence-backed governing STOP onto assistant status cognitive_stop", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] Nora turn before STOP mapping.",
        },
      ],
    });

    const disposition = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 2,
      requiredDomains: ["governance"],
      evidencePointers: [
        {
          evidenceId: "ev:1",
          sourceId: "src:a",
          domain: "governance",
          freshness: "fresh",
          attributable: true,
        },
        {
          evidenceId: "ev:2",
          sourceId: "src:b",
          domain: "governance",
          freshness: "fresh",
          attributable: true,
        },
      ],
      trustedSfiaProfile: null,
    });
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: true,
      governingPremise: "FinOps freeze must hold",
    });
    const notice = formatCognitiveStopPiloteNotice(stop);
    expect(stop.cognitiveStop).toBe(true);
    expect(notice).toMatch(/ARRÊT COGNITIF/i);
    expect(notice).toMatch(/≠ erreur technique/);
    expect(provider.providerId).toMatch(/fake/i);
  });

  it("distinguishes technical failure UX from Cognitive STOP labels", () => {
    const disposition = disposeContradiction({
      conflictPresent: false,
      evidencePointers: [],
    });
    const technical = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: false,
      technicalFailure: true,
    });
    const stop = decideCognitiveStop({
      disposition: disposeContradiction({
        conflictPresent: true,
        requiredSourceCount: 1,
        evidencePointers: [
          {
            evidenceId: "ev:1",
            sourceId: "src:a",
            domain: "governance",
            freshness: "fresh",
            attributable: true,
          },
        ],
      }),
      governingPremiseInvalidated: true,
      governingPremise: "Premise",
    });
    expect(technical.cognitiveStop).toBe(false);
    expect(technical.outcome).toBe("TECHNICAL_FAILURE");
    expect(formatCognitiveStopPiloteNotice(technical)).toBeNull();
    expect(stop.cognitiveStop).toBe(true);
    expect(formatCognitiveStopPiloteNotice(stop)).toBeTruthy();
  });

  it("candidate vs evidence-backed vs STOP are distinguishable progression labels", () => {
    const none = decideCognitiveStop({
      disposition: disposeContradiction({
        conflictPresent: false,
        evidencePointers: [],
      }),
      governingPremiseInvalidated: false,
    });
    const candidate = decideCognitiveStop({
      disposition: disposeContradiction({
        conflictPresent: true,
        evidencePointers: [],
      }),
      governingPremiseInvalidated: true,
    });
    const backedContinue = decideCognitiveStop({
      disposition: disposeContradiction({
        conflictPresent: true,
        requiredSourceCount: 1,
        evidencePointers: [
          {
            evidenceId: "ev:1",
            sourceId: "src:a",
            domain: "governance",
            freshness: "fresh",
            attributable: true,
          },
        ],
      }),
      governingPremiseInvalidated: false,
    });
    const stop = decideCognitiveStop({
      disposition: disposeContradiction({
        conflictPresent: true,
        requiredSourceCount: 1,
        evidencePointers: [
          {
            evidenceId: "ev:1",
            sourceId: "src:a",
            domain: "governance",
            freshness: "fresh",
            attributable: true,
          },
        ],
      }),
      governingPremiseInvalidated: true,
      governingPremise: "Premise",
    });
    const technical = decideCognitiveStop({
      disposition: disposeContradiction({
        conflictPresent: false,
        evidencePointers: [],
      }),
      governingPremiseInvalidated: false,
      technicalFailure: true,
    });
    // Distinguishing product surface: disposition + outcome + cognitiveStop flag.
    const labels = [
      `${none.surfacedDisposition}|${none.outcome}|stop=${none.cognitiveStop}`,
      `${candidate.surfacedDisposition}|${candidate.outcome}|stop=${candidate.cognitiveStop}`,
      `${backedContinue.surfacedDisposition}|${backedContinue.outcome}|stop=${backedContinue.cognitiveStop}`,
      `${stop.surfacedDisposition}|${stop.outcome}|stop=${stop.cognitiveStop}`,
      `${technical.surfacedDisposition}|${technical.outcome}|stop=${technical.cognitiveStop}`,
    ];
    expect(new Set(labels).size).toBe(5);
    expect(none.outcome).toBe("PROGRESS_OK");
    expect(candidate.surfacedDisposition).toBe("candidate");
    expect(backedContinue.surfacedDisposition).toBe("evidence_backed");
    expect(stop.outcome).toBe("COGNITIVE_STOP");
    expect(technical.outcome).toBe("TECHNICAL_FAILURE");
  });

  it("orchestrateProjectAssistantTurn returns cognitive_stop + mw3 DTO (E2E Fake)", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] MW3 STOP path." }],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:mw3-demo",
      content: "Évalue la contradiction gouvernante.",
      sessionDbPath,
      provider,
      simulateMemoryBUnavailable: true,
      contradictionAssessment: {
        conflict: {
          conflictPresent: true,
          requiredSourceCount: 2,
          requiredDomains: ["governance"],
          evidencePointers: [
            {
              evidenceId: "ev:1",
              sourceId: "src:a",
              domain: "governance",
              freshness: "fresh",
              attributable: true,
            },
            {
              evidenceId: "ev:2",
              sourceId: "src:b",
              domain: "governance",
              freshness: "fresh",
              attributable: true,
            },
          ],
          trustedSfiaProfile: null,
        },
        governingPremiseInvalidated: true,
        governingPremise: "FinOps freeze must hold",
      },
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("cognitive_stop");
    expect(result.mw3?.cognitiveStop).toBe(true);
    expect(result.mw3?.disposition).toBe("evidence_backed");
    expect(result.mw3?.progression).toBe("COGNITIVE_STOP");
    expect(result.mw3?.allowsSilentSuccess).toBe(false);
    expect(result.ephemeralNotice).toMatch(/ARRÊT COGNITIF/i);
    expect(result.ephemeralNotice).toMatch(/≠ erreur technique/);
  });

  it("orchestrateProjectAssistantTurn keeps ok for candidate (no silent STOP)", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] MW3 candidate." }],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:mw3-demo",
      content: "Conflit possible sans preuve.",
      sessionDbPath,
      provider,
      simulateMemoryBUnavailable: true,
      contradictionAssessment: {
        conflict: {
          conflictPresent: true,
          evidencePointers: [],
          trustedSfiaProfile: null,
        },
        governingPremiseInvalidated: true,
        governingPremise: "Would-be premise",
      },
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("ok");
    expect(result.mw3?.cognitiveStop).toBe(false);
    expect(result.mw3?.disposition).toBe("candidate");
    expect(result.mw3?.progression).toBe("PROGRESS_WITH_CONTRADICTION");
  });
});

