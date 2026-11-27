/**
 * Option B — unified D3 conduction: D6→D4→D5, refuse+independent, D4 batch + pilotage.
 */
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  businessCommands,
  humanDecisions,
  pilots,
  preparations,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { postUserMessageAndNora } from "@/domains/conversation/service";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
import * as runNoraModule from "@/domains/conversation/run-nora-cognitive-turn";

const STATEMENT_A =
  "L'arbitrage du Pilote fixe le cadre d'habilitation pour ce projet.";
const STATEMENT_B =
  "Les sujets enfants héritent du cadre d'habilitation consolidé.";

function baseQual(intents: Array<Record<string, unknown>>, replyDraft: string) {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED" as const,
    goal: "E2 unified conduction",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    intents,
    clarifications: [] as string[],
    replyDraft,
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
  await updatePreview(pilotId, prep.id, name, "e2-unified");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "e2-unified",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`setup failed: ${created.status}`);
  }
  return { pilotId, preparationId: prep.id, projectId: created.projectId };
}

function mockNoraTurn(qual: ReturnType<typeof baseQual>) {
  const policy = buildCognitivePolicy("x", undefined, { profileHint: "simple" });
  return {
    status: "COMPLETE" as const,
    content: qual.replyDraft,
    generationId: `e2u-${newId("gen")}`,
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
    qualification: qual,
    conductor: {
      workId: `work-${newId("cw")}`,
      revision: 1,
      segmentsRun: 1,
      resumed: false,
      suspended: false,
      suspendReason: null,
      investigation: {
        intentSummary: qual.goal,
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

describe("E2 Option B — unified intent conduction (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("SC1 — D6 → D4 → D5 alternating chain applies in dependency order", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2u-alt");
    const qual = baseQual(
      [
        {
          id: "i-d6",
          capabilityId: "d6.human_decision",
          mode: "REQUEST_EFFECT",
          summary: "Enregistre l'arbitrage",
          parameters: {
            pilotageOperation: "RECORD_DECISION",
            statement: "GitHub est obligatoire pour ce projet.",
            objectRef: "github",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-d4",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Capitalise l'arbitrage",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: STATEMENT_A,
            epistemic: "recommended",
            subjectTitle: "Habilitations",
          },
          constraints: [],
          dependsOn: ["i-d6"],
          sourceEvidence: [],
        },
        {
          id: "i-d5",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "Ouvre le cycle après capitalisation",
          parameters: {
            pilotageOperation: "OPEN_CYCLE",
            cycleType: "CADRAGE",
          },
          constraints: [],
          dependsOn: ["i-d4"],
          sourceEvidence: [],
        },
      ],
      "Arbitrage, capitalisation, puis ouverture de cycle.",
    );

    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(
      mockNoraTurn(qual) as never,
    );

    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Je décide GitHub obligatoire, capitalise, puis ouvre le cadrage",
      { clientTurnKey: newId("ctk") },
    );

    expect(result.status).toBe("COMPLETE");

    const d6 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d6");
    expect(d6?.status === "APPLIED" || d6?.status === "ALREADY_APPLIED").toBe(true);

    const caps = (
      Array.isArray(result.capitalisation)
        ? result.capitalisation
        : (result.capitalisationAttempted as unknown[]) ?? []
    ) as Array<{ intentId?: string; status?: string }>;
    const d4Cap = caps.filter((c) => c.intentId === "i-d4");
    expect(d4Cap.some((c) => c.status === "AVAILABLE" || c.status === "OK")).toBe(true);

    const d5 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d5");
    expect(d5?.status === "APPLIED" || d5?.status === "ALREADY_APPLIED").toBe(true);

    const decisions = await db
      .select()
      .from(humanDecisions)
      .where(
        and(
          eq(humanDecisions.projectId, projectId),
          eq(humanDecisions.kind, "RECORD_DECISION"),
        ),
      );
    expect(decisions.length).toBeGreaterThanOrEqual(1);

    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.some((c) => c.operation === "OPEN_CYCLE")).toBe(true);
    expect(cmds.filter((c) => c.operation === "OPEN_CYCLE")).toHaveLength(1);
  });

  it("SC2 — refused D6 blocks dependent D4; independent D4 still runs", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2u-ind");
    const qual = baseQual(
      [
        {
          id: "i-d5-refuse",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "Retain sans proposition",
          parameters: {
            // No PROPOSED trajectory on a fresh project → owner refuses.
            pilotageOperation: "RETAIN_TRAJECTORY",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-d4-dep",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Dépend du retain refusé",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: STATEMENT_A,
            epistemic: "recommended",
            subjectTitle: "Dep",
          },
          constraints: [],
          dependsOn: ["i-d5-refuse"],
          sourceEvidence: [],
        },
        {
          id: "i-d4-free",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Indépendant",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: STATEMENT_B,
            epistemic: "recommended",
            subjectTitle: "Libre",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      "Refus partiel et indépendance.",
    );

    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(
      mockNoraTurn(qual) as never,
    );

    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Décide sans contenu puis capitalise",
      { clientTurnKey: newId("ctk") },
    );

    expect(result.status).toBe("COMPLETE");

    const refused = result.pilotageEffects?.find(
      (e) => e.semanticIntentId === "i-d5-refuse",
    );
    expect(refused).toBeTruthy();
    expect(
      refused?.status === "APPLIED" || refused?.status === "ALREADY_APPLIED",
    ).toBe(false);

    const caps = (
      Array.isArray(result.capitalisation)
        ? result.capitalisation
        : (result.capitalisationAttempted as unknown[]) ?? []
    ) as Array<{ intentId?: string; status?: string }>;
    expect(
      caps.some(
        (c) =>
          c.intentId === "i-d4-dep" && (c.status === "AVAILABLE" || c.status === "OK"),
      ),
    ).toBe(false);
    expect(
      caps.some(
        (c) =>
          c.intentId === "i-d4-free" && (c.status === "AVAILABLE" || c.status === "OK"),
      ),
    ).toBe(true);
  });

  it("SC3 — D4 parent/enfant batch stays coherent with a pilotage peer", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2u-batch");
    const qual = baseQual(
      [
        {
          id: "i-parent",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Sujet parent",
          parameters: {
            knowledgeKind: "SUBJECT",
            knowledgeStatement: "Cadre parent des habilitations projet.",
            epistemic: "recommended",
            subjectTitle: "Habilitations",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-child",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Sous-sujet",
          parameters: {
            knowledgeKind: "SUBJECT",
            knowledgeStatement: "Sous-sujet enfants des habilitations.",
            epistemic: "recommended",
            subjectTitle: "Accès",
            parentSubjectId: "i-parent",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-d5",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "Ouvre cycle",
          parameters: {
            pilotageOperation: "OPEN_CYCLE",
            cycleType: "CADRAGE",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      "Batch connaissance et ouverture.",
    );

    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(
      mockNoraTurn(qual) as never,
    );

    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Structure les sujets et ouvre le cadrage",
      { clientTurnKey: newId("ctk") },
    );

    expect(result.status).toBe("COMPLETE");
    const caps = (
      Array.isArray(result.capitalisation)
        ? result.capitalisation
        : (result.capitalisationAttempted as unknown[]) ?? []
    ) as Array<{ intentId?: string; status?: string }>;
    expect(
      caps.filter(
        (c) =>
          (c.intentId === "i-parent" || c.intentId === "i-child") &&
          (c.status === "AVAILABLE" || c.status === "OK"),
      ).length,
    ).toBeGreaterThanOrEqual(1);

    const d5 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d5");
    expect(d5?.status === "APPLIED" || d5?.status === "ALREADY_APPLIED").toBe(true);

    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.filter((c) => c.operation === "OPEN_CYCLE")).toHaveLength(1);
  });
});
