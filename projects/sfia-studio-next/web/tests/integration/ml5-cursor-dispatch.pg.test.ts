/**
 * ML5 P0-01 — PostgreSQL concurrent Cursor dispatch + fencing + workspace payload mismatch.
 * Requires DATABASE_URL (DEV/e2e). SCRIPTED adapter only — no LIVE SDK.
 */
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdirSync, mkdtempSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, pilots, preparations, schemaRevision } from "@/db/schema";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
  prepareCursorExecution,
  reconcileCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
import { claimCursorAttempt, persistCursorOwnedResult } from "@/domains/execution/cursor-claim";
import { createTechnicalContract } from "@/domains/execution/technical-contract";
import type { TechnicalContractBody } from "@/domains/execution/types";
import { __resetScriptedCursorRunsForTests } from "@/domains/execution/cursor-sdk-adapter";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { newId } from "@/lib/ids";
import { StudioError } from "@/lib/http-errors";
import { readClaim, writeClaimInto, mintClaim } from "@/domains/execution/claim-lease";

function sampleBody(): TechnicalContractBody {
  return {
    title: "PG concurrent",
    engagements: {
      willDo: "noop",
      willNotDo: "git",
      expectedResult: "scripted finish",
      pilotControl: "D6",
    },
    volets: {
      mission: "test",
      perimeter: "sandbox",
      capabilitiesAuthority: "scripted",
      stopConditions: "STOP",
      proofsSources: "handoff",
      integrity: "fp",
    },
    instructionText: "scripted only",
    risks: [],
    exclusions: [],
    acceptance: { criteria: [], expectedProofs: [] },
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

async function seed(label = `ml5-${newId("nm").slice(-8)}`) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({ id: pilotId, displayName: label, githubUserId: `gh-${pilotId}` });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
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
  return { pilotId, projectId: created.projectId, preparationId: prep.id };
}

describe("PostgreSQL ML5 Cursor dispatch concurrency (SCRIPTED)", () => {
  let workspaceRoot = "";

  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
    workspaceRoot = mkdtempSync(join(tmpdir(), "sfia-ml5-ws-"));
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = workspaceRoot;
  });

  afterEach(() => {
    __resetScriptedCursorRunsForTests();
  });

  it("schema revision includes 018", () => {
    expect(schemaRevision).toBe("018_ml5_contract_reversibility");
  });

  it("persists reversibilityLimits round-trip and DRAFT≠READY without markReady", async () => {
    const { pilotId, projectId } = await seed();
    const draft = await createTechnicalContract({
      pilotId,
      projectId,
      contractKey: "c-draft",
      body: sampleBody(),
      markReady: false,
    });
    expect(draft.status).toBe("DRAFT");
    const ready = await createTechnicalContract({
      pilotId,
      projectId,
      contractKey: "c-ready",
      body: sampleBody(),
      markReady: true,
    });
    expect(ready.status).toBe("READY");
    const { getTechnicalContract } = await import("@/domains/execution/technical-contract");
    const got = await getTechnicalContract({
      pilotId,
      projectId,
      contractId: ready.contractId,
    });
    expect(got.body.reversibilityLimits).toEqual(["no rollback"]);
    expect(got.fingerprint).toBe(ready.fingerprint);
  });

  it("concurrent dispatch: at most one send wins claim", async () => {
    const { pilotId, projectId } = await seed();
    const c = await createTechnicalContract({
      pilotId,
      projectId,
      contractKey: "c-race",
      body: sampleBody(),
      markReady: true,
    });
    const prep = await prepareCursorExecution({
      pilotId,
      projectId,
      contractId: c.contractId,
      correlationKey: newId("corr"),
      workspaceKey: "default",
    });
    await authorizeCursorExecution({
      pilotId,
      projectId,
      attemptId: prep.attemptId,
      statement: "mandate",
      inspectedFingerprint: c.fingerprint,
      confirmed: true,
    });

    const results = await Promise.allSettled([
      dispatchCursorExecution({ pilotId, projectId, attemptId: prep.attemptId }),
      dispatchCursorExecution({ pilotId, projectId, attemptId: prep.attemptId }),
    ]);
    const fulfilled = results.filter((r) => r.status === "fulfilled");
    const rejected = results.filter((r) => r.status === "rejected");
    expect(fulfilled.length).toBe(1);
    expect(rejected.length).toBe(1);
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prep.attemptId)).limit(1)
    )[0]!;
    expect(["COMPLETED", "DISPATCHED"]).toContain(row.status);
  });

  it("same correlationKey with different workspaceKey → CONFLICT", async () => {
    const { pilotId, projectId } = await seed();
    const c = await createTechnicalContract({
      pilotId,
      projectId,
      contractKey: "c-corr",
      body: sampleBody(),
      markReady: true,
    });
    const corr = newId("corr");
    await prepareCursorExecution({
      pilotId,
      projectId,
      contractId: c.contractId,
      correlationKey: corr,
      workspaceKey: "default",
    });
    await expect(
      prepareCursorExecution({
        pilotId,
        projectId,
        contractId: c.contractId,
        correlationKey: corr,
        workspaceKey: "other",
      }),
    ).rejects.toBeInstanceOf(StudioError);
  });

  it("rejects absolute client workspaceCwd", async () => {
    const { pilotId, projectId } = await seed();
    const c = await createTechnicalContract({
      pilotId,
      projectId,
      contractKey: "c-cwd",
      body: sampleBody(),
      markReady: true,
    });
    await expect(
      prepareCursorExecution({
        pilotId,
        projectId,
        contractId: c.contractId,
        correlationKey: newId("corr"),
        workspaceCwd: "/tmp/evil",
      }),
    ).rejects.toBeInstanceOf(StudioError);
  });

  it("stale claimToken cannot overwrite after fencing", async () => {
    const { pilotId, projectId } = await seed();
    const c = await createTechnicalContract({
      pilotId,
      projectId,
      contractKey: "c-fence",
      body: sampleBody(),
      markReady: true,
    });
    const prep = await prepareCursorExecution({
      pilotId,
      projectId,
      contractId: c.contractId,
      correlationKey: newId("corr"),
      workspaceKey: "default",
    });
    await authorizeCursorExecution({
      pilotId,
      projectId,
      attemptId: prep.attemptId,
      statement: "mandate",
      inspectedFingerprint: c.fingerprint,
      confirmed: true,
    });
    const claimed = await claimCursorAttempt(prep.attemptId, "AUTHORIZED");
    expect(claimed).toBeTruthy();
    const staleToken = claimed!.claim.claimToken;

    // Simulate lease renewal / new owner by minting a new claim into resultJson while DISPATCHED.
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prep.attemptId)).limit(1)
    )[0]!;
    const freshClaim = mintClaim(readClaim(row.resultJson));
    await db
      .update(effectAttempts)
      .set({
        resultJson: writeClaimInto(row.resultJson || "{}", freshClaim),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prep.attemptId));

    await expect(
      persistCursorOwnedResult({
        attemptId: prep.attemptId,
        claimToken: staleToken,
        resultJson: JSON.stringify({ terminalStatus: "finished", forged: true }),
        status: "COMPLETED",
        release: true,
      }),
    ).rejects.toBeInstanceOf(StudioError);
  });

  it("reconcile does not redispatch", async () => {
    const { pilotId, projectId } = await seed();
    const c = await createTechnicalContract({
      pilotId,
      projectId,
      contractKey: "c-rec",
      body: sampleBody(),
      markReady: true,
    });
    const prep = await prepareCursorExecution({
      pilotId,
      projectId,
      contractId: c.contractId,
      correlationKey: newId("corr"),
      workspaceKey: "default",
    });
    await authorizeCursorExecution({
      pilotId,
      projectId,
      attemptId: prep.attemptId,
      statement: "mandate",
      inspectedFingerprint: c.fingerprint,
      confirmed: true,
    });
    await dispatchCursorExecution({ pilotId, projectId, attemptId: prep.attemptId });
    const before = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prep.attemptId)).limit(1)
    )[0]!;
    await reconcileCursorExecution({ pilotId, projectId, attemptId: prep.attemptId });
    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prep.attemptId)).limit(1)
    )[0]!;
    expect(after.status).toBe(before.status);
  });
});
