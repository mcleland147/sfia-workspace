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
import { effectAttempts, schemaRevision } from "@/db/schema";
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
import { seedPilotProjectWithCognitiveFiliation } from "../helpers/cognitive-filiation-seed";
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
  return seedPilotProjectWithCognitiveFiliation(label);
}

type Seeded = {
  pilotId: string;
  projectId: string;
  preparationId: string;
  cognitiveWorkId: string;
  cognitiveRevision: number;
};

async function readyContract(
  s: Seeded,
  contractKey: string,
  body: TechnicalContractBody = sampleBody(),
) {
  return createTechnicalContract({
    pilotId: s.pilotId,
    projectId: s.projectId,
    preparationId: s.preparationId,
    contractKey,
    body,
    markReady: true,
    sourcesSufficient: true,
    cognitiveWorkId: s.cognitiveWorkId,
    cognitiveRevision: s.cognitiveRevision,
  });
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

  it("schema revision includes 019", () => {
    expect(schemaRevision).toMatch(/020_cognitive_work|019_ml5/);
  });

  it("persists reversibilityLimits round-trip and DRAFT≠READY without markReady", async () => {
    const s = await seed();
    const draft = await createTechnicalContract({
      pilotId: s.pilotId,
      projectId: s.projectId,
      preparationId: s.preparationId,
      contractKey: "c-draft",
      body: sampleBody(),
      markReady: false,
    });
    expect(draft.status).toBe("DRAFT");
    const ready = await readyContract(s, "c-ready");
    expect(ready.status).toBe("READY");
    const { getTechnicalContract } = await import("@/domains/execution/technical-contract");
    const got = await getTechnicalContract({
      pilotId: s.pilotId,
      projectId: s.projectId,
      contractId: ready.contractId,
    });
    expect(got.body.reversibilityLimits).toEqual(["no rollback"]);
    expect(got.fingerprint).toBe(ready.fingerprint);
  });

  it("concurrent dispatch: at most one send wins claim", async () => {
    const s = await seed();
    const { pilotId, projectId } = s;
    const c = await readyContract(s, "c-race");
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
    // At most one non-idempotent send. A second call may REJECT (claim lost) or
    // fulfill as idempotent if SCRIPTED already reached COMPLETED.
    const primary = fulfilled.filter(
      (r) => r.status === "fulfilled" && r.value.idempotent !== true,
    );
    const idempotent = fulfilled.filter(
      (r) => r.status === "fulfilled" && r.value.idempotent === true,
    );
    expect(primary.length).toBe(1);
    expect(primary.length + rejected.length + idempotent.length).toBe(2);
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prep.attemptId)).limit(1)
    )[0]!;
    expect(["COMPLETED", "DISPATCHED"]).toContain(row.status);
  });

  it("same correlationKey with different workspaceKey → CONFLICT", async () => {
    const s = await seed();
    const { pilotId, projectId } = s;
    const c = await readyContract(s, "c-corr");
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
    const s = await seed();
    const { pilotId, projectId } = s;
    const c = await readyContract(s, "c-cwd");
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
    const s = await seed();
    const { pilotId, projectId } = s;
    const c = await readyContract(s, "c-fence");
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
    const claimed = await claimCursorAttempt(prep.attemptId, "AUTHORIZED", {
      stampSendIntent: false,
    });
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
    const s = await seed();
    const { pilotId, projectId } = s;
    const c = await readyContract(s, "c-rec");
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

  it("CF-03/T-04: first send → ACK lost → claim expired → no AMBIGUOUS redispatch", async () => {
    const s = await seed();
    const { pilotId, projectId } = s;
    const c = await readyContract(s, "c-ack-lost");
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

    // Simulate: claim+sendIntent, SDK "called", ACK lost, lease expired, AMBIGUOUS.
    const claimed = await claimCursorAttempt(prep.attemptId, "AUTHORIZED", {
      stampSendIntent: true,
    });
    expect(claimed).toBeTruthy();
    expect(claimed!.sendRequestedAt).toBeTruthy();
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prep.attemptId)).limit(1)
    )[0]!;
    const live = JSON.parse(row.resultJson || "{}") as Record<string, unknown>;
    expect(live.sendRequestedAt).toBeTruthy();
    const expiredClaim = {
      ...(live.claim as object),
      leaseExpiresAt: new Date(Date.now() - 60_000).toISOString(),
      releasedAt: null,
    };
    const ambiguousJson = JSON.stringify({
      ...live,
      claim: expiredClaim,
      agentId: "agent-sim-1",
      runId: "run-sim-1",
      // ackReceivedAt intentionally absent — ACK lost
    });
    await db
      .update(effectAttempts)
      .set({ status: "AMBIGUOUS", resultJson: ambiguousJson, updatedAt: new Date() })
      .where(eq(effectAttempts.id, prep.attemptId));

    // Reclaim must refuse — prior send may have produced an effect.
    const reclaim = await claimCursorAttempt(prep.attemptId, "AMBIGUOUS");
    expect(reclaim).toBeNull();

    await expect(
      dispatchCursorExecution({ pilotId, projectId, attemptId: prep.attemptId }),
    ).rejects.toBeInstanceOf(StudioError);

    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prep.attemptId)).limit(1)
    )[0]!;
    expect(after.status).toBe("AMBIGUOUS");
    const afterLive = JSON.parse(after.resultJson || "{}") as {
      sendRequestedAt?: string;
      agentId?: string;
    };
    expect(afterLive.sendRequestedAt).toBeTruthy();
    expect(afterLive.agentId).toBe("agent-sim-1");
  });

  it("P0: claim stamps sendRequestedAt before SDK — crash window covered", async () => {
    const s = await seed();
    const { pilotId, projectId } = s;
    const c = await readyContract(s, "c-pre-send");
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
    const claimed = await claimCursorAttempt(prep.attemptId, "AUTHORIZED", {
      stampSendIntent: true,
    });
    expect(claimed?.sendRequestedAt).toBeTruthy();
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prep.attemptId)).limit(1)
    )[0]!;
    expect(row.status).toBe("DISPATCHED");
    expect(JSON.parse(row.resultJson || "{}").sendRequestedAt).toBeTruthy();
    // Simulate crash before SDK: force AMBIGUOUS with expired claim, keep sendRequestedAt.
    const live = JSON.parse(row.resultJson || "{}") as Record<string, unknown>;
    await db
      .update(effectAttempts)
      .set({
        status: "AMBIGUOUS",
        resultJson: JSON.stringify({
          ...live,
          claim: {
            ...(live.claim as object),
            leaseExpiresAt: new Date(Date.now() - 60_000).toISOString(),
            releasedAt: null,
          },
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prep.attemptId));
    expect(await claimCursorAttempt(prep.attemptId, "AMBIGUOUS")).toBeNull();
  });
});
