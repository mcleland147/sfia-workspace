/**
 * C22 Cas B — rapport affirme réussite ; preuve réelle absente/négative → NON_CONFORMING.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdirSync, mkdtempSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, realizationQualifications } from "@/db/schema";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
  prepareCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
import { createTechnicalContract } from "@/domains/execution/technical-contract";
import { __resetScriptedCursorRunsForTests } from "@/domains/execution/cursor-sdk-adapter";
import { seedPilotProjectWithCognitiveFiliation } from "../helpers/cognitive-filiation-seed";
import { newId } from "@/lib/ids";
import type { TechnicalContractBody } from "@/domains/execution/types";

function body(): TechnicalContractBody {
  return {
    title: "C22 D8 contradiction",
    engagements: {
      willDo: "claim success",
      willNotDo: "hide failure",
      expectedResult: "NON_CONFORMING",
      pilotControl: "D6",
    },
    volets: {
      mission: "c22",
      perimeter: "sandbox",
      capabilitiesAuthority: "scripted",
      stopConditions: "STOP",
      proofsSources: "workspace",
      integrity: "fp",
    },
    instructionText: "contradiction report vs disk",
    risks: [],
    exclusions: [],
    acceptance: {
      criteria: ["src/widget.ts export processWidget", "test widget exit=0"],
      expectedProofs: ["fichier", "capture"],
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

describe("C22 D8 contradiction", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
    delete process.env.SFIA_CURSOR_SCRIPTED_PHASED;
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = mkdtempSync(
      join(tmpdir(), "sfia-c22-d8b-"),
    );
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "0";
  });

  it("report PASS + missing file + exit=1 → not CONFORMING", async () => {
    __resetScriptedCursorRunsForTests();
    const seed = await seedPilotProjectWithCognitiveFiliation();
    const c = await createTechnicalContract({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      preparationId: seed.preparationId,
      contractKey: "c22-d8-bad",
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
    const attempt = (
      await db
        .select()
        .from(effectAttempts)
        .where(eq(effectAttempts.id, prep.attemptId))
        .limit(1)
    )[0]!;
    const cwd = (JSON.parse(attempt.planJson) as { workspaceCwd: string })
      .workspaceCwd;
    mkdirSync(join(cwd, ".sfia", "test-captures"), { recursive: true });
    mkdirSync(join(cwd, ".sfia", "attempts", prep.attemptId), {
      recursive: true,
    });
    // Report claims file+test; file absent; agent exit alone must not certify.
    writeFileSync(join(cwd, ".sfia/test-captures/widget.exit"), "0\n");
    writeFileSync(
      join(cwd, `.sfia/attempts/${prep.attemptId}/realization-report.md`),
      [
        `# Rapport`,
        `attemptId: ${prep.attemptId}`,
        `contractFingerprint: ${c.fingerprint}`,
        `filesCreated: src/widget.ts`,
        `testsDeclared: widget`,
        `Résultat: PASS ok`,
      ].join("\n"),
    );

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

    const qual = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.attemptId, prep.attemptId))
        .limit(1)
    )[0];
    expect(qual?.verdict).not.toBe("CONFORMING");
    expect(["NON_CONFORMING", "PARTIAL", "INDETERMINATE"]).toContain(
      qual?.verdict,
    );
  });
});
