/**
 * C2/C4 — soft-stop with acquis enters RESTITUTION_PHASE (reserve ~24k) instead of
 * discarding restitution headroom; without acquis, soft-stop suspends.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { evaluateGlobalResourceEnvelope } from "@/domains/conversation/cognitive-work";
import { buildResourceContinuitySuspendMessage } from "@/domains/conversation/cognitive-policy";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
} from "@/domains/conversation/investigation-state";

const openOrResumeCognitiveWork = vi.fn();
const heartbeatCognitiveWork = vi.fn();
const checkpointCognitiveWork = vi.fn();
const releaseCognitiveWorkLease = vi.fn();

vi.mock("@/domains/conversation/cognitive-work", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/domains/conversation/cognitive-work")>();
  return {
    ...actual,
    openOrResumeCognitiveWork: (...args: unknown[]) => openOrResumeCognitiveWork(...args),
    heartbeatCognitiveWork: (...args: unknown[]) => heartbeatCognitiveWork(...args),
    checkpointCognitiveWork: (...args: unknown[]) => checkpointCognitiveWork(...args),
    releaseCognitiveWorkLease: (...args: unknown[]) => releaseCognitiveWorkLease(...args),
  };
});

const ENVELOPE_ENV = {
  SFIA_COGNITIVE_MAX_TOKENS: "100000",
  SFIA_COGNITIVE_REEVAL_TOKENS: "500000",
  SFIA_COGNITIVE_MAX_SEGMENTS: "120",
} as const;

const NEAR_LIMIT_INVESTIGATION_TOKENS = { inputTokens: 76_000, outputTokens: 0 };

function investigationWithAcquis() {
  return evaluateContractReadiness({
    ...createEmptyInvestigation("synthèse métier"),
    desiredOutcome: "livrable argumenté",
    sources: [{ kind: "D4", ref: "spec-tva", coverage: "CONSULTED" }],
    conclusions: ["TVA export 0% — base documentée spec-tva"],
    remainingWork: ["Approfondir périmètre export"],
  });
}

describe("ML5 C2/C4 — restitution phase conductor", () => {
  const prevMaxTokens = process.env.SFIA_COGNITIVE_MAX_TOKENS;
  const prevReeval = process.env.SFIA_COGNITIVE_REEVAL_TOKENS;
  const prevSeg = process.env.SFIA_COGNITIVE_MAX_SEGMENTS;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.SFIA_COGNITIVE_MAX_TOKENS = ENVELOPE_ENV.SFIA_COGNITIVE_MAX_TOKENS;
    process.env.SFIA_COGNITIVE_REEVAL_TOKENS = ENVELOPE_ENV.SFIA_COGNITIVE_REEVAL_TOKENS;
    process.env.SFIA_COGNITIVE_MAX_SEGMENTS = ENVELOPE_ENV.SFIA_COGNITIVE_MAX_SEGMENTS;

    let revision = 1;
    const baseWork = {
      id: "cgw_restitution",
      ownerPilotId: "pilot",
      preparationId: "prep",
      projectId: null as string | null,
      conversationId: null as string | null,
      status: "RUNNING" as const,
      revision: 1,
      ownerToken: "tok",
      leaseUntil: new Date(Date.now() + 60_000),
      objective: "synthèse métier",
      expectedOutcome: "livrable",
      state: investigationWithAcquis(),
      resources: { segmentCalls: 0, limits: [] as string[] },
      production: { kind: "NONE" as const, status: "IDLE" as const, parts: [] },
      interruptCause: null as string | null,
    };
    openOrResumeCognitiveWork.mockImplementation(async () => ({
      work: { ...baseWork, revision },
      resumed: false,
      ownerToken: "tok",
    }));
    heartbeatCognitiveWork.mockResolvedValue(true);
    checkpointCognitiveWork.mockImplementation(
      async (input: {
        expectedRevision: number;
        state: unknown;
        resources: unknown;
        production: unknown;
        status?: string;
      }) => {
        revision = input.expectedRevision + 1;
        return {
          ...baseWork,
          revision,
          status: input.status ?? "RUNNING",
          state: input.state,
          resources: input.resources,
          production: input.production,
        };
      },
    );
    releaseCognitiveWorkLease.mockResolvedValue(undefined);
  });

  afterEach(() => {
    if (prevMaxTokens === undefined) delete process.env.SFIA_COGNITIVE_MAX_TOKENS;
    else process.env.SFIA_COGNITIVE_MAX_TOKENS = prevMaxTokens;
    if (prevReeval === undefined) delete process.env.SFIA_COGNITIVE_REEVAL_TOKENS;
    else process.env.SFIA_COGNITIVE_REEVAL_TOKENS = prevReeval;
    if (prevSeg === undefined) delete process.env.SFIA_COGNITIVE_MAX_SEGMENTS;
    else process.env.SFIA_COGNITIVE_MAX_SEGMENTS = prevSeg;
  });

  it("envelope: reserve 24k soft-stops investigation projection but restitution segment stays admissible", () => {
    const base = {
      segmentCalls: 2,
      webCalls: 0,
      durationMs: 1,
      limits: [] as string[],
      ...NEAR_LIMIT_INVESTIGATION_TOKENS,
    };
    const investigationNext = evaluateGlobalResourceEnvelope(base, ENVELOPE_ENV, {
      reserveForRestitution: 24_000,
      projectedNextSegmentTokens: 30_000,
    });
    expect(investigationNext.ok).toBe(false);
    expect(investigationNext.softStop).toBe(true);

    const restitutionNext = evaluateGlobalResourceEnvelope(
      { ...base, limits: ["RESTITUTION_PHASE"] },
      ENVELOPE_ENV,
      { reserveForRestitution: 0, projectedNextSegmentTokens: 12_000 },
    );
    expect(restitutionNext.ok).toBe(true);
  });

  it("after investigation soft-stop with acquis, conductor enters RESTITUTION_PHASE and runs restitution", async () => {
    const { runCognitiveConductor } = await import(
      "@/domains/conversation/cognitive-conductor"
    );

    const result = await runCognitiveConductor({
      pilotId: "pilot",
      preparationId: "prep",
      objective: "synthèse métier",
      maxSegmentsThisInvocation: 4,
      runSegment: async ({ segmentIndex }) => {
        const investigation =
          segmentIndex === 0
            ? investigationWithAcquis()
            : evaluateContractReadiness({
                ...investigationWithAcquis(),
                remainingWork: [
                  "Restitution — produire la synthèse finale avec références et limites explicites",
                ],
              });
        return {
          replyText: segmentIndex === 0 ? "investigation" : "synthèse finale",
          qualification: null,
          investigation,
          continueWork: segmentIndex === 0,
          resourcesDelta:
            segmentIndex === 0
              ? { ...NEAR_LIMIT_INVESTIGATION_TOKENS, segmentCalls: 1 }
              : { inputTokens: 8_000, outputTokens: 4_000, segmentCalls: 1 },
        };
      },
    });

    expect(result.segmentsRun).toBeGreaterThanOrEqual(2);
    expect(result.work.resources.limits ?? []).toContain("RESTITUTION_PHASE");
    expect(result.suspended).toBe(false);
    expect(result.replyText).toBe("synthèse finale");
  });

  it("soft-stop without acquis suspends without RESTITUTION_PHASE", async () => {
    openOrResumeCognitiveWork.mockImplementation(async () => ({
      work: {
        id: "cgw_no_acquis",
        ownerPilotId: "pilot",
        preparationId: "prep",
        projectId: null,
        conversationId: null,
        status: "RUNNING" as const,
        revision: 2,
        ownerToken: "tok",
        leaseUntil: new Date(Date.now() + 60_000),
        objective: "vide",
        expectedOutcome: null,
        state: createEmptyInvestigation("vide"),
        resources: { segmentCalls: 0, limits: [] as string[] },
        production: { kind: "NONE" as const, status: "IDLE" as const, parts: [] },
        interruptCause: null,
      },
      resumed: true,
      ownerToken: "tok",
    }));

    const { runCognitiveConductor } = await import(
      "@/domains/conversation/cognitive-conductor"
    );
    const result = await runCognitiveConductor({
      pilotId: "pilot",
      preparationId: "prep",
      objective: "vide",
      workId: "cgw_no_acquis",
      maxSegmentsThisInvocation: 3,
      runSegment: async () => ({
        replyText: "pas d'acquis",
        qualification: null,
        investigation: createEmptyInvestigation("vide"),
        continueWork: true,
        resourcesDelta: { ...NEAR_LIMIT_INVESTIGATION_TOKENS, segmentCalls: 1 },
      }),
    });

    expect(result.segmentsRun).toBeGreaterThanOrEqual(1);
    expect(result.suspended).toBe(true);
    expect(result.work.resources.limits ?? []).not.toContain("RESTITUTION_PHASE");
  });

  it("Pilote suspend message still states sans obligation d'administrer les modèles", () => {
    const msg = buildResourceContinuitySuspendMessage("gpt-6-luna", "high");
    expect(msg).toContain("sans obligation d'administrer les modèles");
  });
});
