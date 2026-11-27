/**
 * MP-09 — multi D5 REQUEST_EFFECT per turn via postUserMessageAndNora (fixture qualification).
 */
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { businessCommands, pilots, preparations, projectCycles } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { postUserMessageAndNora } from "@/domains/conversation/service";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
import * as runNoraModule from "@/domains/conversation/run-nora-cognitive-turn";

const DUAL_INTENT_QUAL = {
  schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  status: "QUALIFIED" as const,
  goal: "MP-09 two acts",
  projectIntention: "",
  desiredOutcome: "",
  initialScope: "",
  proposedProjectName: "",
  intents: [
    {
      id: "i-open",
      capabilityId: "d5.pilotage_command" as const,
      mode: "REQUEST_EFFECT" as const,
      summary: "OPEN_CYCLE",
      parameters: { pilotageOperation: "OPEN_CYCLE" as const, cycleType: "CADRAGE" as const },
      constraints: [] as string[],
      dependsOn: [] as string[],
      sourceEvidence: [] as string[],
    },
    {
      id: "i-trans",
      capabilityId: "d5.pilotage_command" as const,
      mode: "REQUEST_EFFECT" as const,
      summary: "TRANSITION_CYCLE",
      parameters: {
        pilotageOperation: "TRANSITION_CYCLE" as const,
        cycleType: "CADRAGE" as const,
        toCycleType: "CONCEPTION_FONCTIONNELLE" as const,
      },
      constraints: [] as string[],
      dependsOn: ["i-open"],
      sourceEvidence: [] as string[],
    },
  ],
  clarifications: [] as string[],
  replyDraft: "Cycle ouvert puis conception fonctionnelle.",
};

async function seedOwnedProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "mp09-seed");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "mp09-seed",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`setup failed: ${created.status}`);
  }
  return { pilotId, preparationId: prep.id, projectId: created.projectId };
}

describe("MP-09 multi-pilotage turn orchestration (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("applies each pilotage binding on one postUserMessageAndNora turn", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject(`mp09-${Date.now()}`);
    const policy = buildCognitivePolicy("x", undefined, { profileHint: "simple" });
    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue({
      status: "COMPLETE",
      content: DUAL_INTENT_QUAL.replyDraft,
      generationId: `mp09-${newId("gen")}`,
      mode: "deterministic-fixture",
      policy,
      modelRequested: policy.modelRequested,
      modelApplied: policy.modelRequested,
      effortRequested: policy.effortRequested,
      effortApplied: policy.effortRequested,
      attempts: [],
      toolCallsObserved: 0,
      d4CharsReturned: 0,
      observedToolSources: [],
      qualification: DUAL_INTENT_QUAL,
      conductor: {
        workId: `work-${newId("cw")}`,
        revision: 1,
        segmentsRun: 1,
        resumed: false,
        suspended: false,
        suspendReason: null,
        investigation: {
          intentSummary: DUAL_INTENT_QUAL.goal,
          desiredOutcome: "",
          questions: [],
          sources: [],
          remainingWork: [],
          constraints: [],
          risks: [],
          conclusions: [],
          contradictions: [],
          exclusions: [],
          profileHint: "analyse",
          sufficiency: "UNKNOWN",
          contractReady: false,
        },
        production: {
          kind: "REPLY",
          status: "COMPLETE",
          parts: [],
        },
      },
    });

    const chat = await postUserMessageAndNora(pilotId, preparationId, "MP-09 dual pilotage fixture turn.", {
      clientTurnKey: newId("ctk"),
    });

    expect(chat.status).toBe("COMPLETE");
    expect(chat.semanticQualificationStatus).toBe("QUALIFIED");
    expect(chat.pilotageEffect?.attempted).toBe(true);
    expect(chat.pilotageEffect?.operation).toBe("OPEN_CYCLE");
    expect(chat.pilotageEffects).toHaveLength(2);
    expect(chat.pilotageEffects?.[0]?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
    expect(chat.pilotageEffects?.[1]?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
    expect(chat.humanDecisionCreated).toBe(true);

    const applied = (
      await db.select().from(businessCommands).where(eq(businessCommands.projectId, projectId))
    ).filter((c) => c.status === "APPLIED" || c.status === "ALREADY_APPLIED");
    expect(applied).toHaveLength(2);
    expect(applied[0]!.sourceActionKey).not.toBe(applied[1]!.sourceActionKey);

    const active = (
      await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId))
    ).find((c) => c.status === "ACTIVE");
    expect(active?.cycleType).toBe("CONCEPTION_FONCTIONNELLE");
  });
});