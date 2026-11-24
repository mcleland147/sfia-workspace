/**
 * C22 — concurrent restitution claim: at most one owner.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdtempSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { realizationHandoffs } from "@/db/schema";
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
    title: "C22 CAS",
    engagements: {
      willDo: "cas",
      willNotDo: "double",
      expectedResult: "one handoff",
      pilotControl: "D6",
    },
    volets: {
      mission: "c22",
      perimeter: "sandbox",
      capabilitiesAuthority: "scripted",
      stopConditions: "STOP",
      proofsSources: "handoff",
      integrity: "fp",
    },
    instructionText: "scripted",
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

describe("C22 restitution CAS concurrency", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
    delete process.env.SFIA_CURSOR_SCRIPTED_PHASED;
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = mkdtempSync(
      join(tmpdir(), "sfia-c22-cas-"),
    );
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "0";
  });

  it("two concurrent restitutions yield a single handoff", async () => {
    __resetScriptedCursorRunsForTests();
    const seed = await seedPilotProjectWithCognitiveFiliation();
    const c = await createTechnicalContract({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      preparationId: seed.preparationId,
      contractKey: "c22-cas",
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
    // Dispatch without waiting for auto restitution side-effects to finish races —
    // force a clean terminal then concurrent restitution.
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "0";
    await dispatchCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
    });

    const results = await Promise.all([
      runAutonomousRestitutionAfterTerminal({
        pilotId: seed.pilotId,
        projectId: seed.projectId,
        attemptId: prep.attemptId,
        attachNoraCognitive: false,
      }),
      runAutonomousRestitutionAfterTerminal({
        pilotId: seed.pilotId,
        projectId: seed.projectId,
        attemptId: prep.attemptId,
        attachNoraCognitive: false,
      }),
    ]);
    const ran = results.filter((r) => r.ran);
    expect(ran.length).toBeLessThanOrEqual(1);
    const rows = await db
      .select()
      .from(realizationHandoffs)
      .where(eq(realizationHandoffs.attemptId, prep.attemptId));
    expect(rows).toHaveLength(1);
  });
});
