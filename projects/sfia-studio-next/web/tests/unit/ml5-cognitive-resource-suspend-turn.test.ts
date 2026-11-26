/**
 * S2 — refused allocation without hold: Pilote sees explicit suspend copy from runNoraCognitiveTurn.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createEmptyInvestigation } from "@/domains/conversation/investigation-state";

const openOrResumeCognitiveWork = vi.fn();
const heartbeatCognitiveWork = vi.fn();
const checkpointCognitiveWork = vi.fn();
const releaseCognitiveWorkLease = vi.fn();
const listCognitiveWorksForPreparation = vi.fn();
const generateNoraReply = vi.fn();

vi.mock("@/domains/conversation/cognitive-work", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/domains/conversation/cognitive-work")>();
  return {
    ...actual,
    openOrResumeCognitiveWork: (...args: unknown[]) =>
      openOrResumeCognitiveWork(...args),
    heartbeatCognitiveWork: (...args: unknown[]) => heartbeatCognitiveWork(...args),
    checkpointCognitiveWork: (...args: unknown[]) => checkpointCognitiveWork(...args),
    releaseCognitiveWorkLease: (...args: unknown[]) =>
      releaseCognitiveWorkLease(...args),
    listCognitiveWorksForPreparation: (...args: unknown[]) =>
      listCognitiveWorksForPreparation(...args),
  };
});

vi.mock("@/domains/conversation/nora-adapter", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/domains/conversation/nora-adapter")>();
  return {
    ...actual,
    generateNoraReply: (...args: unknown[]) => generateNoraReply(...args),
  };
});

describe("runNoraCognitiveTurn — RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION", () => {
  const prevMode = process.env.SFIA_COGNITIVE_ADMISSION_MODE;
  const prevProv = process.env.SFIA_COG_PROVISIONAL_POLICY;
  const prevLane = process.env.STUDIO_LANE;
  const prevCog = process.env.SFIA_COG_PROFILE_TYPE;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "operational";
    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";

    listCognitiveWorksForPreparation.mockResolvedValue([]);
    heartbeatCognitiveWork.mockResolvedValue(true);
    releaseCognitiveWorkLease.mockResolvedValue(undefined);
    generateNoraReply.mockRejectedValue(
      new Error("generateNoraReply must not run on resource suspend"),
    );

    let revision = 2;
    const investigation = createEmptyInvestigation("allocation suspend");
    investigation.proposedCognitiveModel = "gpt-6-luna";
    investigation.proposedCognitiveEffort = "high";

    const baseWork = {
      id: "cgw_suspend",
      ownerPilotId: "pilot",
      preparationId: "prep",
      projectId: null as string | null,
      conversationId: null as string | null,
      status: "RUNNING" as const,
      revision,
      ownerToken: "tok",
      leaseUntil: new Date(Date.now() + 60_000),
      objective: "allocation suspend",
      expectedOutcome: "result",
      state: investigation,
      resources: { segmentCalls: 0 },
      production: { kind: "NONE" as const, status: "IDLE" as const, parts: [] },
      interruptCause: null as string | null,
    };

    openOrResumeCognitiveWork.mockImplementation(async () => ({
      work: { ...baseWork, revision },
      resumed: true,
      ownerToken: "tok",
    }));

    checkpointCognitiveWork.mockImplementation(
      async (input: { expectedRevision: number; state: unknown; resources: unknown }) => {
        revision = input.expectedRevision + 1;
        return {
          ...baseWork,
          revision,
          status: "SUSPENDED" as const,
          state: input.state,
          resources: input.resources,
        };
      },
    );
  });

  afterEach(() => {
    if (prevMode === undefined) delete process.env.SFIA_COGNITIVE_ADMISSION_MODE;
    else process.env.SFIA_COGNITIVE_ADMISSION_MODE = prevMode;
    if (prevProv === undefined) delete process.env.SFIA_COG_PROVISIONAL_POLICY;
    else process.env.SFIA_COG_PROVISIONAL_POLICY = prevProv;
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    if (prevCog === undefined) delete process.env.SFIA_COG_PROFILE_TYPE;
    else process.env.SFIA_COG_PROFILE_TYPE = prevCog;
  });

  it("returns suspend copy without asking the Pilote to pick model/effort", async () => {
    const { runNoraCognitiveTurn } = await import(
      "@/domains/conversation/run-nora-cognitive-turn"
    );

    const result = await runNoraCognitiveTurn({
      pilotId: "pilot",
      preparationId: "prep",
      workId: "cgw_suspend",
      userText: "Poursuis le travail avec la ressource proposée.",
      contextSnippets: [],
      knowledgeSnippets: [],
      pilotageSnippets: [],
      maxSegmentsThisInvocation: 1,
    });

    expect(generateNoraReply).not.toHaveBeenCalled();
    expect(result.conductor?.suspended).toBe(true);
    expect(result.conductor?.suspendReason).toBe(
      "RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION",
    );
    expect(result.content).toContain("sans obligation d'administrer les modèles");
    expect(result.content).toContain("Besoin restant");
    expect(result.content).toContain("substitution silencieuse");
    expect(result.content).not.toContain("Indique une autre allocation");
    expect(result.content).not.toMatch(/Indique.*(modèle|allocation)/i);
  });
});