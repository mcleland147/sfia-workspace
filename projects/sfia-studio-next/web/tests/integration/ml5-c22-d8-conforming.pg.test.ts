/**
 * C22 — product-path D8 CONFORMING without injected criterionEvidence.
 * Workspace files + attempt-bound report collected by restitution owner code.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdirSync, mkdtempSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, realizationHandoffs, realizationQualifications } from "@/db/schema";
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
    title: "C22 D8 conforming product path",
    engagements: {
      willDo: "add.ts + capture",
      willNotDo: "inject verified",
      expectedResult: "CONFORMING",
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
    instructionText: "scripted with pre-seeded workspace proofs",
    risks: [],
    exclusions: [],
    acceptance: {
      // C24 — file criterion with extractable tokens (static); no in-process eval.
      criteria: ["src/widget.ts export processWidget"],
      expectedProofs: ["fichier"],
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

describe("C22 D8 CONFORMING product path", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
    delete process.env.SFIA_CURSOR_SCRIPTED_PHASED;
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = mkdtempSync(
      join(tmpdir(), "sfia-c22-d8-"),
    );
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "0";
  });

  it("restitution builds verified evidence → CONFORMING", async () => {
    __resetScriptedCursorRunsForTests();
    const seed = await seedPilotProjectWithCognitiveFiliation();
    const c = await createTechnicalContract({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      preparationId: seed.preparationId,
      contractKey: "c22-d8-ok",
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
    const plan = JSON.parse(attempt.planJson) as { workspaceCwd: string };
    const cwd = plan.workspaceCwd;
    mkdirSync(join(cwd, "src"), { recursive: true });
    mkdirSync(join(cwd, ".sfia", "test-captures"), { recursive: true });
    mkdirSync(join(cwd, ".sfia", "attempts", prep.attemptId), {
      recursive: true,
    });
    writeFileSync(
      join(cwd, "src/widget.ts"),
      "export function processWidget(input: string) { return input.trim(); }\n",
    );
    writeFileSync(
      join(cwd, `.sfia/attempts/${prep.attemptId}/realization-report.md`),
      [
        `# Rapport`,
        `attemptId: ${prep.attemptId}`,
        `contractFingerprint: ${c.fingerprint}`,
        `filesCreated: src/widget.ts`,
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

    const handoff = (
      await db
        .select()
        .from(realizationHandoffs)
        .where(eq(realizationHandoffs.attemptId, prep.attemptId))
        .limit(1)
    )[0];
    const qual = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.attemptId, prep.attemptId))
        .limit(1)
    )[0];
    expect(handoff?.status).toBe("RECEIVED");
    expect(qual?.verdict).toBe("CONFORMING");
    expect(qual?.limitsJson).toMatch(/AUTONOMOUS_D8/);
    // Ensure not from injected test helper — product path limits.
    expect(qual?.limitsJson).not.toMatch(/injected/i);
  });
});
