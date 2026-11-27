/**
 * E2-FINAL-01/02 — D4→D5 precondition integrity + C02 recovery without pilotageEffects.
 */
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  businessCommands,
  conversationTurnCommands,
  pilots,
  preparations,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  lookupDurableTurnByClientKey,
  postUserMessageAndNora,
} from "@/domains/conversation/service";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
import * as runNoraModule from "@/domains/conversation/run-nora-cognitive-turn";

const STATEMENT =
  "Les règles d'habilitation exigent une validation du Pilote avant ouverture d'accès.";

function qualD4thenD5(opts?: { failD4B?: boolean }) {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED" as const,
    goal: "E2-FINAL orchestration",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    intents: [
      {
        id: "i-d4-a",
        capabilityId: "d4.record_knowledge" as const,
        mode: "REQUEST_EFFECT" as const,
        summary: "Consolidates habilitation rules",
        parameters: {
          knowledgeKind: "ACQUIS" as const,
          knowledgeStatement: STATEMENT,
          epistemic: "recommended" as const,
          subjectTitle: "Habilitations",
        },
        constraints: [] as string[],
        dependsOn: [] as string[],
        sourceEvidence: [] as string[],
      },
      {
        id: "i-d4-b",
        capabilityId: "d4.record_knowledge" as const,
        mode: "REQUEST_EFFECT" as const,
        summary: opts?.failD4B ? "x" : "Second acquis",
        parameters: {
          knowledgeKind: "ACQUIS" as const,
          // Too short when failD4B → extractor skips → FAILED/SKIPPED for dep
          knowledgeStatement: opts?.failD4B ? "trop court" : `${STATEMENT} Variante B.`,
          epistemic: "recommended" as const,
          subjectTitle: "Habilitations",
        },
        constraints: [] as string[],
        dependsOn: [] as string[],
        sourceEvidence: [] as string[],
      },
      {
        id: "i-d5",
        capabilityId: "d5.pilotage_command" as const,
        mode: "REQUEST_EFFECT" as const,
        summary: "Propose trajectory from consolidated rules",
        parameters: {
          pilotageOperation: "PROPOSE_TRAJECTORY" as const,
          forecastSteps: [
            {
              order: 1,
              cycleType: "CONCEPTION_FONCTIONNELLE" as const,
              rationale: "Après consolidation habilitations",
              certainty: "ENVISIONED" as const,
            },
          ],
        },
        constraints: [] as string[],
        dependsOn: ["i-d4-b"],
        sourceEvidence: [] as string[],
      },
    ],
    clarifications: [] as string[],
    replyDraft: "Consolidation puis proposition.",
  };
}

async function seedOwnedProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  const name = `${label}-${newId("p").slice(-6)}`;
  await updatePreview(pilotId, prep.id, name, "e2-final");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "e2-final",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`setup failed: ${created.status}`);
  }
  return { pilotId, preparationId: prep.id, projectId: created.projectId };
}

function mockNoraTurn(qual: ReturnType<typeof qualD4thenD5> | Record<string, unknown>) {
  const policy = buildCognitivePolicy("x", undefined, { profileHint: "simple" });
  const q = qual as ReturnType<typeof qualD4thenD5>;
  return {
    status: "COMPLETE" as const,
    content: q.replyDraft,
    generationId: `e2f-${newId("gen")}`,
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
    qualification: q,
    conductor: {
      workId: `work-${newId("cw")}`,
      revision: 1,
      segmentsRun: 1,
      resumed: false,
      suspended: false,
      suspendReason: null,
      investigation: {
        intentSummary: q.goal,
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
      production: { kind: "REPLY" as const, status: "COMPLETE" as const, parts: [] },
    },
  };
}

describe("E2-FINAL-01/02 — orchestration + C02 durable", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("D4-A succeeds, D4-B fails → D5 depending on B does not mutate", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2f-neg");
    const qual = qualD4thenD5({ failD4B: true });
    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(mockNoraTurn(qual) as never);

    const clientTurnKey = newId("ctk");
    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Consolide puis propose une trajectoire",
      { clientTurnKey },
    );

    expect(result.status).toBe("COMPLETE");
    const d5 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d5");
    expect(d5?.status === "REJECTED" || d5?.reasonCode === "DEPENDENCY_PRECONDITION").toBe(
      true,
    );
    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.some((c) => c.operation === "PROPOSE_TRAJECTORY")).toBe(false);
  });

  it("D4 succeeds → D5 depending on D4 can apply (OPEN_CYCLE)", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2f-pos");
    const qual = qualD4thenD5();
    qual.intents = [
      qual.intents.find((i) => i.id === "i-d4-a")!,
      {
        id: "i-d5",
        capabilityId: "d5.pilotage_command" as const,
        mode: "REQUEST_EFFECT" as const,
        summary: "Ouvre le cycle cadrage",
        parameters: {
          pilotageOperation: "OPEN_CYCLE",
          cycleType: "CADRAGE",
        } as Record<string, unknown>,
        constraints: [] as string[],
        dependsOn: ["i-d4-a"],
        sourceEvidence: [] as string[],
      },
    ] as typeof qual.intents;

    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(mockNoraTurn(qual) as never);

    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Consolide les règles puis ouvre le cycle",
      { clientTurnKey: newId("ctk") },
    );

    expect(result.status).toBe("COMPLETE");
    const d5 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d5");
    if (!(d5?.status === "APPLIED" || d5?.status === "ALREADY_APPLIED")) {
      throw new Error(
        `D5 not applied: ${JSON.stringify({
          d5,
          effects: result.pilotageEffects,
          caps: result.capitalisation,
        })}`,
      );
    }
    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.some((c) => c.operation === "OPEN_CYCLE")).toBe(true);
  });

  it("E2-INT — D4 early + independent remaining D4 both capitalize; D5 depends on early only", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2f-mix");
    const STATEMENT_B =
      "La planification des accès suit le cycle de validation Pilote documenté.";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "mix",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "i-d4-a",
          capabilityId: "d4.record_knowledge" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "rules",
          parameters: {
            knowledgeKind: "ACQUIS" as const,
            knowledgeStatement: STATEMENT,
            epistemic: "recommended" as const,
            subjectTitle: "Habilitations",
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
        {
          id: "i-d4-b",
          capabilityId: "d4.record_knowledge" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "plan",
          parameters: {
            knowledgeKind: "ACQUIS" as const,
            knowledgeStatement: STATEMENT_B,
            epistemic: "recommended" as const,
            subjectTitle: "Planification",
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
        {
          id: "i-d5",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "open",
          parameters: {
            pilotageOperation: "OPEN_CYCLE",
            cycleType: "CADRAGE",
          } as Record<string, unknown>,
          constraints: [] as string[],
          dependsOn: ["i-d4-a"],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Consolidation mixte.",
    };
    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(mockNoraTurn(qual) as never);

    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Consolide habilitations et planification puis ouvre",
      { clientTurnKey: newId("ctk") },
    );
    expect(result.status).toBe("COMPLETE");
    // TurnResult.capitalisation is the AVAILABLE slice (array); attempted retains full rows.
    const caps = (
      Array.isArray(result.capitalisation)
        ? result.capitalisation
        : (result.capitalisationAttempted as unknown[]) ?? []
    ) as Array<{ intentId?: string; kind?: string; status?: string }>;
    const byIntent = (id: string) => caps.filter((c) => c.intentId === id);
    if (!byIntent("i-d4-a").some((c) => c.status === "AVAILABLE" || c.status === "OK")) {
      throw new Error(
        `D4-A missing: ${JSON.stringify({ caps, attempted: result.capitalisationAttempted })}`,
      );
    }
    if (!byIntent("i-d4-b").some((c) => c.status === "AVAILABLE" || c.status === "OK")) {
      throw new Error(
        `D4-B remaining missing: ${JSON.stringify({ caps, attempted: result.capitalisationAttempted })}`,
      );
    }
    // No double-write of the same early intent as a second AVAILABLE acquis pair.
    const acquisA = byIntent("i-d4-a").filter((c) => c.kind === "acquis" && c.status === "AVAILABLE");
    expect(acquisA.length).toBeLessThanOrEqual(1);
    const d5 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d5");
    expect(d5?.status === "APPLIED" || d5?.status === "ALREADY_APPLIED").toBe(true);
    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.some((c) => c.operation === "OPEN_CYCLE")).toBe(true);
  });

  it("C02 lookup reconstitutes intents from qualification stash without pilotageEffects", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2f-c02");
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "c02",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "i-open",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "OPEN",
          parameters: {
            pilotageOperation: "OPEN_CYCLE" as const,
            cycleType: "CADRAGE" as const,
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
        {
          id: "i-method",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "METHOD",
          parameters: {
            pilotageOperation: "CHOOSE_METHOD" as const,
            methodRef: "SFIA",
            methodVersion: "9",
          },
          constraints: [] as string[],
          dependsOn: ["i-open"],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Cycle et méthode.",
    };

    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(mockNoraTurn(qual) as never);

    const clientTurnKey = newId("ctk");
    const result = await postUserMessageAndNora(pilotId, preparationId, "Ouvre et choisis", {
      clientTurnKey,
    });
    expect(result.status).toBe("COMPLETE");
    expect(result.pilotageEffects?.length).toBeGreaterThanOrEqual(1);

    // Simulate interruption before final multi-intent payload: strip pilotageEffects,
    // keep semanticQualification stash (as markTurnUnknown merge would).
    const row = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.clientTurnKey, clientTurnKey))
        .limit(1)
    )[0];
    expect(row).toBeTruthy();
    const prev = JSON.parse(row!.resultJson || "{}") as Record<string, unknown>;
    const stripped = {
      status: "UNKNOWN",
      semanticQualification: prev.semanticQualification,
      semanticQualificationStashedAt: prev.semanticQualificationStashedAt,
      // deliberately no pilotageEffects / pilotageEffect
    };
    await db
      .update(conversationTurnCommands)
      .set({ status: "UNKNOWN", resultJson: JSON.stringify(stripped) })
      .where(eq(conversationTurnCommands.id, row!.id));

    const lookup = await lookupDurableTurnByClientKey(
      pilotId,
      preparationId,
      clientTurnKey,
    );
    expect(lookup.found).toBe(true);
    const ids = (lookup.pilotageEffects ?? [])
      .map((e) => e.semanticIntentId)
      .filter(Boolean);
    expect(ids).toContain("i-open");
    // Second intent reconstituted or UNKNOWN — never silently dropped.
    expect(ids).toContain("i-method");
    const fabricated = (lookup.pilotageEffects ?? []).filter(
      (e) => e.semanticIntentId === "i-method" && e.status === "APPLIED" && !e.commandId,
    );
    expect(fabricated.length).toBe(0);

    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    // No duplication on lookup (read-only).
    const openCount = cmds.filter((c) => c.operation === "OPEN_CYCLE").length;
    expect(openCount).toBeLessThanOrEqual(1);
  });

  it("E2-INT — C02 partial pilotageEffects projection still recovers missing durable intent", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2f-c02p");
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "c02-partial",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "i-open",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "OPEN",
          parameters: {
            pilotageOperation: "OPEN_CYCLE" as const,
            cycleType: "CADRAGE" as const,
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
        {
          id: "i-method",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "METHOD",
          parameters: {
            pilotageOperation: "CHOOSE_METHOD" as const,
            methodRef: "SFIA",
            methodVersion: "9",
          },
          constraints: [] as string[],
          dependsOn: ["i-open"],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Cycle et méthode.",
    };
    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(mockNoraTurn(qual) as never);
    const clientTurnKey = newId("ctk");
    const result = await postUserMessageAndNora(pilotId, preparationId, "Ouvre et choisis", {
      clientTurnKey,
    });
    expect(result.status).toBe("COMPLETE");
    const fullEffects = result.pilotageEffects ?? [];
    expect(fullEffects.length).toBeGreaterThanOrEqual(1);
    const firstOnly = fullEffects.find((e) => e.semanticIntentId === "i-open") ?? fullEffects[0]!;

    const row = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.clientTurnKey, clientTurnKey))
        .limit(1)
    )[0];
    expect(row).toBeTruthy();
    const prev = JSON.parse(row!.resultJson || "{}") as Record<string, unknown>;
    // Partial projection: only first effect kept — second must still be reconciled.
    const partial = {
      status: "COMPLETE",
      semanticQualification: prev.semanticQualification,
      semanticQualificationStashedAt: prev.semanticQualificationStashedAt,
      pilotageEffects: [firstOnly],
      pilotageEffect: firstOnly,
    };
    await db
      .update(conversationTurnCommands)
      .set({ resultJson: JSON.stringify(partial) })
      .where(eq(conversationTurnCommands.id, row!.id));

    const lookup = await lookupDurableTurnByClientKey(
      pilotId,
      preparationId,
      clientTurnKey,
    );
    expect(lookup.found).toBe(true);
    const ids = (lookup.pilotageEffects ?? []).map((e) => e.semanticIntentId).filter(Boolean);
    expect(ids).toContain("i-open");
    expect(ids).toContain("i-method");
    const fabricated = (lookup.pilotageEffects ?? []).filter(
      (e) => e.semanticIntentId === "i-method" && e.status === "APPLIED" && !e.commandId,
    );
    expect(fabricated.length).toBe(0);
    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.filter((c) => c.operation === "OPEN_CYCLE").length).toBeLessThanOrEqual(1);
  });
});
