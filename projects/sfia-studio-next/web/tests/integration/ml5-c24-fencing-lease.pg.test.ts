/**
 * C24 — expired restitution owner cannot renew via persistPipelineOwned;
 * a later claimant (B) can claim after lease expiry.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdtempSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts } from "@/db/schema";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
  prepareCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
import { createTechnicalContract } from "@/domains/execution/technical-contract";
import {
  claimRestitutionPipelineAtomic,
  persistPipelineOwned,
} from "@/domains/execution/cursor-autonomous-restitution";
import { __resetScriptedCursorRunsForTests } from "@/domains/execution/cursor-sdk-adapter";
import { seedPilotProjectWithCognitiveFiliation } from "../helpers/cognitive-filiation-seed";
import { newId } from "@/lib/ids";
import type { TechnicalContractBody } from "@/domains/execution/types";

function body(): TechnicalContractBody {
  return {
    title: "C24 fencing",
    engagements: {
      willDo: "fence",
      willNotDo: "stale write",
      expectedResult: "owner B wins",
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

describe("C24 restitution lease fencing", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
    delete process.env.SFIA_CURSOR_SCRIPTED_PHASED;
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = mkdtempSync(
      join(tmpdir(), "sfia-c24-fence-"),
    );
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "0";
  });

  it("expired owner A cannot persist; B claims after lease expiry", async () => {
    __resetScriptedCursorRunsForTests();
    const seed = await seedPilotProjectWithCognitiveFiliation();
    const c = await createTechnicalContract({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      preparationId: seed.preparationId,
      contractKey: `c24-fence-${Date.now()}`,
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

    const row0 = (
      await db
        .select({ resultJson: effectAttempts.resultJson, status: effectAttempts.status })
        .from(effectAttempts)
        .where(eq(effectAttempts.id, prep.attemptId))
        .limit(1)
    )[0]!;
    const base = JSON.parse(row0.resultJson || "{}") as Record<string, unknown>;

    const ownerA = `tok_a_${Date.now()}`;
    const versionA = 7;
    // Plant owner A mid-pipeline with a still-valid lease, then expire.
    const planted = {
      ...base,
      restitutionPipelineStatus: "COLLECTING",
      restitutionOwnerToken: ownerA,
      restitutionVersion: versionA,
      restitutionLeaseExpiresAt: new Date(Date.now() + 120_000).toISOString(),
      restitutionHandoffId: null,
      restitutionQualificationId: null,
    };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(planted), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prep.attemptId));

    // Valid lease — A can still write.
    const okWhileValid = await persistPipelineOwned({
      attemptId: prep.attemptId,
      ownerToken: ownerA,
      expectedVersion: versionA,
      live: { ...planted, restitutionPipelineStatus: "QUALIFYING" },
    });
    expect(okWhileValid).toBe(true);

    // Expire lease in DB (A must not renew via write).
    const expired = {
      ...planted,
      restitutionPipelineStatus: "QUALIFYING",
      restitutionLeaseExpiresAt: new Date(Date.now() - 60_000).toISOString(),
    };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(expired), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prep.attemptId));

    const lateA = await persistPipelineOwned({
      attemptId: prep.attemptId,
      ownerToken: ownerA,
      expectedVersion: versionA,
      live: {
        ...expired,
        restitutionPipelineStatus: "COMPLETE",
        restitutionCompletedAt: new Date().toISOString(),
      },
    });
    expect(lateA).toBe(false);

    // B reclaims after lease expiry (product claim CAS).
    const claimB = await claimRestitutionPipelineAtomic({
      attemptId: prep.attemptId,
    });
    expect(claimB.claimed).toBe(true);
    expect(claimB.ownerToken).toBeTruthy();
    expect(claimB.ownerToken).not.toBe(ownerA);
    expect((claimB.version ?? 0) > versionA).toBe(true);

    // A still cannot write under the old token/version.
    const lateAAfterB = await persistPipelineOwned({
      attemptId: prep.attemptId,
      ownerToken: ownerA,
      expectedVersion: versionA,
      live: {
        ...expired,
        restitutionPipelineStatus: "COMPLETE",
        restitutionCompletedAt: new Date().toISOString(),
      },
    });
    expect(lateAAfterB).toBe(false);

    // B can persist under the new claim.
    const writeB = await persistPipelineOwned({
      attemptId: prep.attemptId,
      ownerToken: claimB.ownerToken!,
      expectedVersion: claimB.version!,
      live: {
        ...claimB.live,
        restitutionPipelineStatus: "COMPLETE",
        restitutionCompletedAt: new Date().toISOString(),
      },
    });
    expect(writeB).toBe(true);

    // Absent lease must not establish authority.
    const noLease = {
      ...claimB.live,
      restitutionOwnerToken: claimB.ownerToken,
      restitutionVersion: claimB.version,
      restitutionLeaseExpiresAt: null,
    };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(noLease), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prep.attemptId));
    const absentLease = await persistPipelineOwned({
      attemptId: prep.attemptId,
      ownerToken: claimB.ownerToken!,
      expectedVersion: claimB.version!,
      live: {
        ...noLease,
        restitutionPipelineStatus: "COMPLETE",
        restitutionLeaseExpiresAt: new Date(Date.now() + 60_000).toISOString(),
      },
    });
    expect(absentLease).toBe(false);
  });
});
