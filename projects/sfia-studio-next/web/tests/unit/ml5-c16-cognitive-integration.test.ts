/**
 * C16 — conductor continuation semantics, READY positive, DRAFT criteria, WEB pin.
 */
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
} from "@/domains/conversation/investigation-state";
import { draftBodyFromInvestigation } from "@/domains/conversation/nora-contract-bridge";
import { assertPublicDnsEgress } from "@/domains/conversation/web-egress-guard";

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

describe("ML5 C16 — integrated cognitive conductor", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    let revision = 1;
    const baseWork = {
      id: "cgw_test",
      ownerPilotId: "pilot",
      preparationId: "prep",
      projectId: null as string | null,
      conversationId: null as string | null,
      status: "RUNNING" as const,
      revision: 1,
      ownerToken: "tok",
      leaseUntil: new Date(Date.now() + 60_000),
      objective: "mission",
      expectedOutcome: "result",
      state: createEmptyInvestigation("mission"),
      resources: { segmentCalls: 0 },
      production: { kind: "NONE" as const, status: "IDLE" as const, parts: [] },
      interruptCause: null as string | null,
    };
    openOrResumeCognitiveWork.mockImplementation(async () => ({
      work: { ...baseWork, revision },
      resumed: false,
      ownerToken: "tok",
    }));
    heartbeatCognitiveWork.mockResolvedValue(true);
    checkpointCognitiveWork.mockImplementation(async (input: {
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
    });
    releaseCognitiveWorkLease.mockResolvedValue(undefined);
  });

  it("suspends with SEGMENT_INVOCATION_LIMIT instead of false COMPLETE", async () => {
    const { runCognitiveConductor } = await import(
      "@/domains/conversation/cognitive-conductor"
    );
    const result = await runCognitiveConductor({
      pilotId: "pilot",
      preparationId: "prep",
      objective: "complex investigation",
      maxSegmentsThisInvocation: 2,
      runSegment: async ({ segmentIndex }) => ({
        replyText: `seg-${segmentIndex}`,
        qualification: null,
        investigation: {
          ...createEmptyInvestigation("complex investigation"),
          desiredOutcome: "done",
          remainingWork: ["more"],
        },
        continueWork: true,
        resourcesDelta: {},
      }),
    });
    expect(result.suspended).toBe(true);
    expect(result.suspendReason).toBe("SEGMENT_INVOCATION_LIMIT");
    expect(result.segmentsRun).toBe(2);
    expect(result.work.status).toBe("SUSPENDED");
  });

  it("completes when segment signals no continuation", async () => {
    const { runCognitiveConductor } = await import(
      "@/domains/conversation/cognitive-conductor"
    );
    const result = await runCognitiveConductor({
      pilotId: "pilot",
      preparationId: "prep",
      objective: "simple",
      maxSegmentsThisInvocation: 3,
      runSegment: async () => ({
        replyText: "ok",
        qualification: null,
        investigation: createEmptyInvestigation("simple"),
        continueWork: false,
        resourcesDelta: {},
      }),
    });
    expect(result.suspended).toBe(false);
    expect(result.segmentsRun).toBe(1);
    expect(result.work.status).toBe("COMPLETE");
  });

  it("READY refuses hollow ANSWERED and STALE determinant source", () => {
    const hollow = evaluateContractReadiness({
      ...createEmptyInvestigation("tva"),
      desiredOutcome: "export",
      sources: [{ kind: "D4", ref: "spec", coverage: "CONSULTED" }],
      questions: [
        { id: "q1", text: "régime?", status: "ANSWERED", importance: "DETERMINANT" },
      ],
    });
    expect(hollow.contractReady).toBe(false);

    const stale = evaluateContractReadiness({
      ...createEmptyInvestigation("tva"),
      desiredOutcome: "export",
      sources: [
        { kind: "D4", ref: "spec", coverage: "CONSULTED" },
        { kind: "D4", ref: "old", coverage: "STALE" },
      ],
      questions: [
        {
          id: "q1",
          text: "régime?",
          status: "ANSWERED",
          importance: "DETERMINANT",
          answerSummary: "export 0%",
          sourceRefs: ["old"],
        },
      ],
    });
    expect(stale.contractReady).toBe(false);

    const ok = evaluateContractReadiness({
      ...createEmptyInvestigation("tva"),
      desiredOutcome: "export",
      sources: [{ kind: "D4", ref: "spec", coverage: "CONSULTED" }],
      questions: [
        {
          id: "q1",
          text: "régime?",
          status: "ANSWERED",
          importance: "DETERMINANT",
          answerSummary: "export 0%",
          sourceRefs: ["spec"],
        },
      ],
    });
    expect(ok.contractReady).toBe(true);
  });

  it("draft criteria are not capped at 8", () => {
    const inv = evaluateContractReadiness({
      ...createEmptyInvestigation("mission"),
      desiredOutcome: "livrable",
      sources: [{ kind: "D4", ref: "d", coverage: "CONSULTED" }],
      questions: [
        {
          id: "q1",
          text: "ok?",
          status: "ANSWERED",
          importance: "DETERMINANT",
          answerSummary: "oui",
        },
      ],
      remainingWork: Array.from({ length: 12 }, (_, i) => `critère ${i + 1}`),
    });
    expect(inv.contractReady).toBe(true);
    const body = draftBodyFromInvestigation(inv, {
      businessCriteria: inv.remainingWork,
      instructionFromNora: "instruction métier dédiée",
    });
    expect(body.acceptance.criteria).toHaveLength(12);
    expect(body.instructionText).toContain("instruction métier dédiée");
  });

  it("DNS egress rejects metadata / private representations", async () => {
    expect((await assertPublicDnsEgress("https://169.254.169.254/latest")).ok).toBe(false);
    expect((await assertPublicDnsEgress("https://127.0.0.1/x")).ok).toBe(false);
    expect((await assertPublicDnsEgress("https://[::1]/x")).ok).toBe(false);
  });
});
