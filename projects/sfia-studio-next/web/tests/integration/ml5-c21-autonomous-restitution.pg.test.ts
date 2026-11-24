/**
 * C21 — terminal SCRIPTED dispatch triggers autonomous handoff→D8→avis
 * without a separate handoff/qualification POST.
 */
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdtempSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  cognitiveWorks,
  pilots,
  preparations,
  realizationHandoffs,
  realizationQualifications,
} from "@/db/schema";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
  prepareCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
import { createTechnicalContract } from "@/domains/execution/technical-contract";
import type { TechnicalContractBody } from "@/domains/execution/types";
import { __resetScriptedCursorRunsForTests } from "@/domains/execution/cursor-sdk-adapter";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
} from "@/domains/conversation/investigation-state";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { newId } from "@/lib/ids";

function sampleBody(): TechnicalContractBody {
  return {
    title: "C21 autonomous restitution",
    engagements: {
      willDo: "scripted finish + auto handoff",
      willNotDo: "manual handoff POST",
      expectedResult: "dossier + D8 + synthèse",
      pilotControl: "D6",
    },
    volets: {
      mission: "c21",
      perimeter: "sandbox",
      capabilitiesAuthority: "scripted",
      stopConditions: "STOP",
      proofsSources: "handoff",
      integrity: "fp",
    },
    instructionText: "scripted only — produce report",
    risks: [],
    exclusions: [],
    acceptance: {
      criteria: ["rapport produit", "aucune étape manuelle intermédiaire"],
      expectedProofs: ["handoff"],
    },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: [],
      permissionsNeeded: [],
    },
    stopConditions: ["STOP"],
    reversibilityLimits: ["no rollback"],
    gitScope: null,
  };
}

async function seedWithCognitiveFiliation(label = `c21-${newId("nm").slice(-8)}`) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (
    (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") ||
    !("projectId" in created) ||
    !created.projectId
  ) {
    throw new Error(`seed fail: ${JSON.stringify(created)}`);
  }
  const projectId = created.projectId;

  const inv = evaluateContractReadiness({
    ...createEmptyInvestigation("C21 restitution mission"),
    desiredOutcome: "dossier + D8 sans POST manuel",
    questions: [
      {
        id: "q1",
        text: "Workspace isolé ?",
        status: "ANSWERED",
        importance: "DETERMINANT",
        answerSummary: "oui sandbox",
      },
    ],
    sources: [
      { kind: "GIT", ref: "local-sandbox@deadbeef", coverage: "VERIFIED" },
    ],
    contradictions: [],
    productionInstruction: sampleBody().instructionText,
    acceptanceCriteria: sampleBody().acceptance.criteria,
  });

  const workId = newId("cgw");
  const revision = 1;
  await db.insert(cognitiveWorks).values({
    id: workId,
    ownerPilotId: pilotId,
    preparationId: prep.id,
    projectId,
    status: "COMPLETE",
    revision,
    objective: "C21 autonomous restitution",
    expectedOutcome: inv.desiredOutcome,
    stateJson: JSON.stringify({
      ...inv,
      cognitiveWorkId: workId,
      cognitiveRevision: revision,
    }),
    resourcesJson: JSON.stringify({
      tokensUsed: 100,
      tokensBudget: 50_000,
      toolCalls: 2,
      toolCallBudget: 40,
    }),
    productionJson: JSON.stringify({
      kind: "DOCUMENT",
      status: "COMPLETE",
      contentMarkdown: "# Contrat C21\n\nOK",
    }),
  });

  return {
    pilotId,
    projectId,
    preparationId: prep.id,
    cognitiveWorkId: workId,
    cognitiveRevision: revision,
  };
}

describe("C21 autonomous restitution (SCRIPTED / PostgreSQL)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
    delete process.env.SFIA_CURSOR_SCRIPTED_PHASED;
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = mkdtempSync(
      join(tmpdir(), "sfia-c21-ws-"),
    );
    delete process.env.SFIA_AUTONOMOUS_NORA_AVIS;
  });

  afterEach(() => {
    __resetScriptedCursorRunsForTests();
  });

  it("dispatch terminal → handoff + qualification without manual ingest", async () => {
    const seed = await seedWithCognitiveFiliation();
    const c = await createTechnicalContract({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      preparationId: seed.preparationId,
      contractKey: "c21-auto",
      body: sampleBody(),
      markReady: true,
      sourcesSufficient: true,
      cognitiveWorkId: seed.cognitiveWorkId,
      cognitiveRevision: seed.cognitiveRevision,
    });
    const prep = await prepareCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      contractId: c.contractId,
      correlationKey: newId("corr"),
      workspaceKey: "default",
    });
    await authorizeCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
      statement: "C21 authorize exact fingerprint",
      inspectedFingerprint: c.fingerprint,
      confirmed: true,
    });
    const dispatched = await dispatchCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
    });
    expect(dispatched.status).toBe("COMPLETED");

    const handoff = (
      await db
        .select()
        .from(realizationHandoffs)
        .where(eq(realizationHandoffs.attemptId, prep.attemptId))
        .limit(1)
    )[0];
    expect(handoff).toBeTruthy();
    expect(["RECEIVED", "INCOMPLETE"]).toContain(handoff!.status);
    expect(handoff!.reportMarkdown || "").toMatch(/SCRIPTED|attemptId/);

    const qual = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.attemptId, prep.attemptId))
        .limit(1)
    )[0];
    expect(qual).toBeTruthy();
    expect(qual!.verdict).toBeTruthy();
    expect(qual!.noraAnalysisMarkdown || "").toMatch(
      /SYNTHÈSE DÉTERMINISTE|ANALYSE COGNITIVE NORA/,
    );
    expect(qual!.limitsJson).toMatch(/AUTONOMOUS/);
  });

  it("restitution is idempotent — no duplicate handoff", async () => {
    const seed = await seedWithCognitiveFiliation();
    const c = await createTechnicalContract({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      preparationId: seed.preparationId,
      contractKey: "c21-idem",
      body: sampleBody(),
      markReady: true,
      sourcesSufficient: true,
      cognitiveWorkId: seed.cognitiveWorkId,
      cognitiveRevision: seed.cognitiveRevision,
    });
    const prep = await prepareCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      contractId: c.contractId,
      correlationKey: newId("corr"),
      workspaceKey: "default",
    });
    await authorizeCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
      statement: "C21 authorize exact fingerprint",
      inspectedFingerprint: c.fingerprint,
      confirmed: true,
    });
    await dispatchCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
    });
    const { runAutonomousRestitutionAfterTerminal } = await import(
      "@/domains/execution/cursor-autonomous-restitution"
    );
    const again = await runAutonomousRestitutionAfterTerminal({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
    });
    expect(again.ran).toBe(false);

    const rows = await db
      .select()
      .from(realizationHandoffs)
      .where(eq(realizationHandoffs.attemptId, prep.attemptId));
    expect(rows).toHaveLength(1);
  });
});
