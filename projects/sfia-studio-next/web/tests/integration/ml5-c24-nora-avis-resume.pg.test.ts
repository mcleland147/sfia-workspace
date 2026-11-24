/**
 * C24 — technical COMPLETE without Nora avis must resume avis (no redispatch).
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdtempSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  effectAttempts,
  realizationHandoffs,
  realizationQualifications,
} from "@/db/schema";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
  prepareCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
import { createTechnicalContract } from "@/domains/execution/technical-contract";
import { runAutonomousRestitutionAfterTerminal } from "@/domains/execution/cursor-autonomous-restitution";
import { __resetScriptedCursorRunsForTests } from "@/domains/execution/cursor-sdk-adapter";
import { seedPilotProjectWithCognitiveFiliation } from "../helpers/cognitive-filiation-seed";
import { newId } from "@/lib/ids";
import type { TechnicalContractBody } from "@/domains/execution/types";

function body(): TechnicalContractBody {
  return {
    title: "C24 nora resume",
    engagements: {
      willDo: "resume avis",
      willNotDo: "redispatch",
      expectedResult: "avis attached",
      pilotControl: "D6",
    },
    volets: {
      mission: "c24",
      perimeter: "sandbox",
      capabilitiesAuthority: "scripted",
      stopConditions: "STOP",
      proofsSources: "handoff",
      integrity: "fp",
    },
    instructionText: "scripted resume",
    risks: [],
    exclusions: [],
    acceptance: { criteria: ["one"], expectedProofs: ["handoff"] },
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

describe("C24 cognitive avis resume from technical COMPLETE", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
    delete process.env.SFIA_CURSOR_SCRIPTED_PHASED;
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = mkdtempSync(
      join(tmpdir(), "sfia-c24-resume-"),
    );
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "0";
  });

  it(
    "does not return ALREADY_COMPLETE when avis missing and Nora attach enabled",
    async () => {
    __resetScriptedCursorRunsForTests();
    process.env.SFIA_D8_COGNITIVE_LIVE = "0";
    const seed = await seedPilotProjectWithCognitiveFiliation();
    const c = await createTechnicalContract({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      preparationId: seed.preparationId,
      contractKey: `c24-resume-${Date.now()}`,
      body: body(),
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
      statement: "ok",
      inspectedFingerprint: c.fingerprint,
      confirmed: true,
    });
    await dispatchCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
    });

    // First pass: collect/qualify without Nora
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "0";
    const first = await runAutonomousRestitutionAfterTerminal({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
      attachNoraCognitive: false,
    });
    expect(first.qualificationId).toBeTruthy();

    // Force technical COMPLETE without avis
    const row = (
      await db
        .select()
        .from(effectAttempts)
        .where(eq(effectAttempts.id, prep.attemptId))
        .limit(1)
    )[0]!;
    const live = JSON.parse(row.resultJson || "{}") as Record<string, unknown>;
    await db
      .update(effectAttempts)
      .set({
        resultJson: JSON.stringify({
          ...live,
          restitutionPipelineStatus: "COMPLETE",
          restitutionNoraKind: "NONE",
          restitutionQualificationId: first.qualificationId,
          restitutionHandoffId: first.handoffId,
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prep.attemptId));

    await db
      .update(realizationQualifications)
      .set({
        noraAnalysisMarkdown: null,
        noraAnalysisAt: null,
        updatedAt: new Date(),
      })
      .where(eq(realizationQualifications.attemptId, prep.attemptId));

    // Resume with Nora attach — must not stuck on ALREADY_COMPLETE
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "1";
    const second = await runAutonomousRestitutionAfterTerminal({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
      attachNoraCognitive: true,
    });
    expect(second.limits?.includes("ALREADY_COMPLETE")).toBe(false);
    expect(
      second.limits?.some((l) =>
        /COGNITIVE_AVIS_RESUME|NORA_COGNITIVE|DETERMINISTIC_SYNTHESIS|NORA_AVIS/.test(
          l,
        ),
      ) || Boolean(second.ran),
    ).toBe(true);

    const q = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.attemptId, prep.attemptId))
        .limit(1)
    )[0];
    expect(q?.noraAnalysisMarkdown).toBeTruthy();
    // handoff unchanged (no redispatch)
    const h = (
      await db
        .select()
        .from(realizationHandoffs)
        .where(eq(realizationHandoffs.attemptId, prep.attemptId))
        .limit(1)
    )[0];
    expect(h?.id).toBe(first.handoffId);
  },
    60_000,
  );
});
