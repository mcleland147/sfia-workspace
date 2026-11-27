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
import {
  lookupDurableTurnByClientKey,
  postUserMessageAndNora,
} from "@/domains/conversation/service";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
import * as runNoraModule from "@/domains/conversation/run-nora-cognitive-turn";
import { listProjectKnowledge } from "@/domains/knowledge/journal";

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

    const clientTurnKey = newId("ctk");
    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Décide sans contenu puis capitalise",
      { clientTurnKey },
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

    const depEffect = result.knowledgeEffects?.find(
      (k) => k.semanticIntentId === "i-d4-dep",
    );
    expect(depEffect).toBeTruthy();
    expect(depEffect?.attempted).toBe(false);
    expect(
      ["NOT_EXECUTED", "SKIPPED"].includes((depEffect?.status ?? "").toUpperCase()),
    ).toBe(true);
    expect((depEffect?.reason ?? "").length).toBeGreaterThan(8);
    expect(depEffect?.reasonCode).toBeTruthy();

    const freeEffect = result.knowledgeEffects?.find(
      (k) => k.semanticIntentId === "i-d4-free",
    );
    expect(
      freeEffect?.status === "APPLIED" ||
        freeEffect?.status === "AVAILABLE" ||
        freeEffect?.status === "OK",
    ).toBe(true);

    // Durable turn payload carries knowledgeEffects (committed with result_json).
    expect(Array.isArray(result.knowledgeEffects)).toBe(true);
    expect(result.knowledgeEffects!.length).toBeGreaterThanOrEqual(2);

    const knowledgeBeforeLookup = await listProjectKnowledge(pilotId, projectId);
    const lookup = await lookupDurableTurnByClientKey(
      pilotId,
      preparationId,
      clientTurnKey,
    );
    expect(lookup.found).toBe(true);
    expect(lookup.status).toBe("COMPLETE");
    expect(lookup.idempotentReplay).toBe(true);

    const lookupDep = lookup.knowledgeEffects?.find(
      (k) => k.semanticIntentId === "i-d4-dep",
    );
    expect(lookupDep).toBeTruthy();
    expect(lookupDep?.attempted).toBe(false);
    expect(
      ["NOT_EXECUTED", "SKIPPED"].includes((lookupDep?.status ?? "").toUpperCase()),
    ).toBe(true);
    expect((lookupDep?.reason ?? "").length).toBeGreaterThan(8);
    expect(lookupDep?.reasonCode).toBeTruthy();

    const lookupFree = lookup.knowledgeEffects?.find(
      (k) => k.semanticIntentId === "i-d4-free",
    );
    expect(
      lookupFree?.status === "APPLIED" ||
        lookupFree?.status === "AVAILABLE" ||
        lookupFree?.status === "OK",
    ).toBe(true);

    const knowledgeAfterLookup = await listProjectKnowledge(pilotId, projectId);
    expect(knowledgeAfterLookup.acquis.length).toBe(knowledgeBeforeLookup.acquis.length);
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
    ) as Array<{ intentId?: string; status?: string; kind?: string; id?: string }>;
    const parentCap = caps.filter(
      (c) =>
        c.intentId === "i-parent" &&
        c.kind === "subject" &&
        (c.status === "AVAILABLE" || c.status === "OK"),
    );
    const childCap = caps.filter(
      (c) =>
        c.intentId === "i-child" &&
        c.kind === "subject" &&
        (c.status === "AVAILABLE" || c.status === "OK"),
    );
    expect(parentCap.length).toBeGreaterThanOrEqual(1);
    expect(childCap.length).toBeGreaterThanOrEqual(1);

    const bundle = await listProjectKnowledge(pilotId, projectId);
    const parent = bundle.subjects.find((s) => s.title === "Habilitations");
    const child = bundle.subjects.find((s) => s.title === "Accès");
    expect(parent?.id).toBeTruthy();
    expect(child?.id).toBeTruthy();
    expect(child?.parentSubjectId).toBe(parent?.id);
    // No duplicate ACTIVE subjects with same titles.
    expect(bundle.subjects.filter((s) => s.title === "Habilitations")).toHaveLength(1);
    expect(bundle.subjects.filter((s) => s.title === "Accès")).toHaveLength(1);

    const d5 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d5");
    expect(d5?.status === "APPLIED" || d5?.status === "ALREADY_APPLIED").toBe(true);

    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.filter((c) => c.operation === "OPEN_CYCLE")).toHaveLength(1);
  });

  it("SC-fresh — cross-wave parent ref rewritten; stale unresolved ref not applied", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2u-fresh");
    const qualOk = baseQual(
      [
        {
          id: "i-d4-a",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Parent d'abord",
          parameters: {
            knowledgeKind: "SUBJECT",
            knowledgeStatement: "Sujet parent créé avant l'enfant dépendant.",
            epistemic: "recommended",
            subjectTitle: "ParentFrais",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-d4-b",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Enfant après parent",
          parameters: {
            knowledgeKind: "SUBJECT",
            knowledgeStatement: "Enfant lié au parent via ref locale d'intention.",
            epistemic: "recommended",
            subjectTitle: "EnfantFrais",
            parentSubjectId: "i-d4-a",
          },
          constraints: [],
          dependsOn: ["i-d4-a"],
          sourceEvidence: [],
        },
      ],
      "Continuité cross-wave.",
    );
    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(
      mockNoraTurn(qualOk) as never,
    );
    const ok = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Parent puis enfant dépendant",
      { clientTurnKey: newId("ctk") },
    );
    expect(ok.status).toBe("COMPLETE");
    const bundleOk = await listProjectKnowledge(pilotId, projectId);
    const parentOk = bundleOk.subjects.find((s) => s.title === "ParentFrais");
    const childOk = bundleOk.subjects.find((s) => s.title === "EnfantFrais");
    expect(childOk?.parentSubjectId).toBe(parentOk?.id);

    // Stale: child depends on refused peer but still carries its local parent ref.
    const { pilotId: p2, preparationId: prep2, projectId: proj2 } =
      await seedOwnedProject("e2u-stale");
    const qualStale = baseQual(
      [
        {
          id: "i-d5-refuse",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "Retain refuse",
          parameters: { pilotageOperation: "RETAIN_TRAJECTORY" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-d4-stale",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Ref locale vers intention non satisfaite",
          parameters: {
            knowledgeKind: "SUBJECT",
            knowledgeStatement: "Ne doit pas muter avec une ref d'intention non résolue.",
            epistemic: "recommended",
            subjectTitle: "StaleChild",
            // Points at refused pilotage intent id — not a durable subject.
            parentSubjectId: "i-d5-refuse",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      "Fraîcheur refus.",
    );
    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(
      mockNoraTurn(qualStale) as never,
    );
    const stale = await postUserMessageAndNora(
      p2,
      prep2,
      "Ne capitalise pas une ref obsolète",
      { clientTurnKey: newId("ctk") },
    );
    expect(stale.status).toBe("COMPLETE");
    const staleFx = stale.knowledgeEffects?.find(
      (k) => k.semanticIntentId === "i-d4-stale",
    );
    expect(staleFx?.attempted).toBe(false);
    expect((staleFx?.status ?? "").toUpperCase()).toMatch(/NOT_EXECUTED|SKIPPED/);
    expect(staleFx?.reasonCode).toBe("STALE_OR_UNRESOLVED_REF");
    const bundleStale = await listProjectKnowledge(p2, proj2);
    expect(bundleStale.subjects.some((s) => s.title === "StaleChild")).toBe(false);
  });
});
