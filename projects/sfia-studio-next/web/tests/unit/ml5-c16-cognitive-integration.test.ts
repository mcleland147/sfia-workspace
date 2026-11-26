/**
 * C16 — conductor continuation semantics, READY positive, DRAFT criteria, WEB pin.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
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

  it("resolvePolicy can vary effort across segments without changing workId", async () => {
    const { runCognitiveConductor } = await import(
      "@/domains/conversation/cognitive-conductor"
    );
    const { buildCognitivePolicy } = await import(
      "@/domains/conversation/cognitive-policy"
    );
    const policies: Array<{ effort: string; segmentIndex: number }> = [];
    const result = await runCognitiveConductor({
      pilotId: "pilot",
      preparationId: "prep",
      objective: "adaptive effort",
      maxSegmentsThisInvocation: 2,
      resolvePolicy: (_work, segmentIndex) => {
        const policy = buildCognitivePolicy("adaptive effort", "TEST_BOUNDARY", {
          effortHint: segmentIndex === 0 ? "low" : "high",
        });
        policies.push({ effort: policy.effortRequested, segmentIndex });
        return policy;
      },
      runSegment: async ({ segmentIndex }) => ({
        replyText: `seg-${segmentIndex}`,
        qualification: null,
        investigation: {
          ...createEmptyInvestigation("adaptive effort"),
          remainingWork: segmentIndex === 0 ? ["more"] : [],
        },
        continueWork: segmentIndex === 0,
        resourcesDelta: {},
      }),
    });
    expect(result.work.id).toBe("cgw_test");
    expect(policies).toHaveLength(2);
    expect(policies[0]!.effort).toBe("low");
    expect(policies[1]!.effort).toBe("high");
    expect(policies[0]!.effort).not.toBe(policies[1]!.effort);
  });

  describe("S3 continuity of allocation via real conductor", () => {
    const prevMode = process.env.SFIA_COGNITIVE_ADMISSION_MODE;
    const prevLane = process.env.STUDIO_LANE;
    const prevCog = process.env.SFIA_COG_PROFILE_TYPE;

    beforeEach(() => {
      process.env.STUDIO_LANE = "DEV";
      process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
    });

    afterEach(() => {
      if (prevMode === undefined) delete process.env.SFIA_COGNITIVE_ADMISSION_MODE;
      else process.env.SFIA_COGNITIVE_ADMISSION_MODE = prevMode;
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevCog === undefined) delete process.env.SFIA_COG_PROFILE_TYPE;
      else process.env.SFIA_COG_PROFILE_TYPE = prevCog;
    });

    async function runTwoSegmentContinuity(input: {
      admissionMode: "calibration" | "operational";
      firstPolicy: {
        modelHint: string;
        effortHint: "none" | "low" | "medium" | "high" | "xhigh" | "max";
      };
      /** Proposal emitted by segment 0 qualification → applied on segment 1. */
      nextProposal: {
        model?: "gpt-6-luna" | "gpt-6.1-terra" | "gpt-6.2-sol";
        effort?: "none" | "low" | "medium" | "high" | "xhigh" | "max";
      } | null;
    }) {
      process.env.SFIA_COGNITIVE_ADMISSION_MODE = input.admissionMode;
      const { runCognitiveConductor } = await import(
        "@/domains/conversation/cognitive-conductor"
      );
      const { buildCognitivePolicy, resolveContinuityCognitivePolicy } =
        await import("@/domains/conversation/cognitive-policy");
      const applied: Array<{
        segmentIndex: number;
        model: string;
        effort: string;
        reasons: string[];
      }> = [];
      const result = await runCognitiveConductor({
        pilotId: "pilot",
        preparationId: "prep",
        objective: "allocation continuity",
        maxSegmentsThisInvocation: 2,
        resolvePolicy: (work, segmentIndex) => {
          const policy =
            segmentIndex === 0
              ? buildCognitivePolicy("allocation continuity", "TEST_BOUNDARY", {
                  modelHint: input.firstPolicy.modelHint,
                  effortHint: input.firstPolicy.effortHint,
                })
              : resolveContinuityCognitivePolicy({
                  seed: "allocation continuity",
                  overrideType: "TEST_BOUNDARY",
                  proposal: {
                    modelId: work.state.proposedCognitiveModel ?? null,
                    effort: work.state.proposedCognitiveEffort ?? null,
                  },
                  held: {
                    modelId: work.resources.modelRequested ?? null,
                    effort: work.resources.effortRequested ?? null,
                  },
                });
          applied.push({
            segmentIndex,
            model: policy.modelRequested,
            effort: policy.effortRequested,
            reasons: policy.reasonCodes,
          });
          return policy;
        },
        runSegment: async ({ segmentIndex, policy }) => ({
          replyText: `seg-${segmentIndex}`,
          qualification: null,
          investigation: {
            ...createEmptyInvestigation("allocation continuity"),
            remainingWork: segmentIndex === 0 ? ["more"] : [],
            proposedCognitiveModel:
              segmentIndex === 0 ? (input.nextProposal?.model ?? null) : null,
            proposedCognitiveEffort:
              segmentIndex === 0 ? (input.nextProposal?.effort ?? null) : null,
          },
          continueWork: segmentIndex === 0,
          resourcesDelta: {
            modelRequested: policy.modelRequested,
            effortRequested: policy.effortRequested,
          },
        }),
      });
      return { result, applied };
    }

    it("Luna → Terra model change keeps workId", async () => {
      const { result, applied } = await runTwoSegmentContinuity({
        admissionMode: "calibration",
        firstPolicy: { modelHint: "gpt-6-luna", effortHint: "medium" },
        nextProposal: { model: "gpt-6.1-terra", effort: "medium" },
      });
      expect(result.work.id).toBe("cgw_test");
      expect(result.segmentsRun).toBe(2);
      expect(applied[0]).toMatchObject({
        model: "gpt-6-luna",
        effort: "medium",
      });
      expect(applied[1]).toMatchObject({
        model: "gpt-6.1-terra",
        effort: "medium",
      });
      expect(applied[1]!.reasons).toContain("RESOURCE_CONTINUITY_MODEL_CHANGE");
    });

    it("Terra → Sol model change keeps workId", async () => {
      const { result, applied } = await runTwoSegmentContinuity({
        admissionMode: "calibration",
        firstPolicy: { modelHint: "gpt-6.1-terra", effortHint: "medium" },
        nextProposal: { model: "gpt-6.2-sol", effort: "high" },
      });
      expect(result.work.id).toBe("cgw_test");
      expect(applied[0]!.model).toBe("gpt-6.1-terra");
      expect(applied[1]).toMatchObject({
        model: "gpt-6.2-sol",
        effort: "high",
      });
    });

    it("descalades Sol → Luna across segments", async () => {
      const { applied } = await runTwoSegmentContinuity({
        admissionMode: "calibration",
        firstPolicy: { modelHint: "gpt-6.2-sol", effortHint: "high" },
        nextProposal: { model: "gpt-6-luna", effort: "low" },
      });
      expect(applied[0]).toMatchObject({ model: "gpt-6.2-sol", effort: "high" });
      expect(applied[1]).toMatchObject({ model: "gpt-6-luna", effort: "low" });
    });

    it("holds model when next segment has no proposal", async () => {
      const { applied } = await runTwoSegmentContinuity({
        admissionMode: "calibration",
        firstPolicy: { modelHint: "gpt-6.1-terra", effortHint: "high" },
        nextProposal: null,
      });
      expect(applied[0]!.model).toBe("gpt-6.1-terra");
      expect(applied[1]).toMatchObject({
        model: "gpt-6.1-terra",
        effort: "high",
      });
      expect(applied[1]!.reasons).toContain("RESOURCE_CONTINUITY_HOLD");
    });

    it("changes effort independently on the held model", async () => {
      const { applied } = await runTwoSegmentContinuity({
        admissionMode: "calibration",
        firstPolicy: { modelHint: "gpt-6.1-terra", effortHint: "medium" },
        nextProposal: { effort: "xhigh" },
      });
      expect(applied[0]).toMatchObject({
        model: "gpt-6.1-terra",
        effort: "medium",
      });
      expect(applied[1]).toMatchObject({
        model: "gpt-6.1-terra",
        effort: "xhigh",
      });
      expect(applied[1]!.reasons).toContain("RESOURCE_CONTINUITY_EFFORT_CHANGE");
    });

    it("refuses incompatible Luna and holds Sol without dropping workId", async () => {
      const { result, applied } = await runTwoSegmentContinuity({
        admissionMode: "operational",
        firstPolicy: { modelHint: "gpt-6.2-sol", effortHint: "medium" },
        nextProposal: { model: "gpt-6-luna", effort: "medium" },
      });
      expect(result.work.id).toBe("cgw_test");
      expect(applied[0]!.model).toBe("gpt-6.2-sol");
      expect(applied[1]!.model).toBe("gpt-6.2-sol");
      expect(applied[1]!.reasons).toContain(
        "RESOURCE_CONTINUITY_HOLD_AFTER_REFUSAL",
      );
      expect(
        applied[1]!.reasons.some((c) => c.startsWith("RESOURCE_REFUSED_")),
      ).toBe(true);
    });
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
