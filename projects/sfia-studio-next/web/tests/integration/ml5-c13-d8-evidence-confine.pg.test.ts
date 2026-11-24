/**
 * C13 — real D8 reader path (loadAttempt + readConfinedWorkspaceFile) against DEV PG.
 * Proves: allowed read, traversal/absolute/symlink deny, wrong pilot/project deny, budget.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import {
  mkdirSync,
  writeFileSync,
  symlinkSync,
  rmSync,
  existsSync,
} from "fs";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, pilots, preparations } from "@/db/schema";
import {
  readAttemptWorkspaceFile,
  listRealizationEvidence,
} from "@/domains/proofs/d8-evidence-read";
import { createToolSourceJournal } from "@/domains/conversation/tool-source-journal";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { newId } from "@/lib/ids";

const WS = "/tmp/sfia-c13-d8-pg-ws";
const OUTSIDE = "/tmp/sfia-c13-d8-pg-outside.txt";

describe("PostgreSQL ML5 C13 D8 evidence confinement (real reader)", () => {
  let pilotId = "";
  let otherPilotId = "";
  let projectId = "";
  let otherProjectId = "";
  let attemptId = "";

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    rmSync(WS, { recursive: true, force: true });
    mkdirSync(WS, { recursive: true });
    writeFileSync(join(WS, "ok.txt"), "C13-PG-ALLOWED\n");
    writeFileSync(OUTSIDE, "SECRET_PG_OUTSIDE\n");
    symlinkSync(OUTSIDE, join(WS, "escape.txt"));

    pilotId = newId("pilot");
    otherPilotId = newId("pilot");
    await db.insert(pilots).values([
      { id: pilotId, displayName: "c13-d8-a", githubUserId: `gh-${pilotId}` },
      { id: otherPilotId, displayName: "c13-d8-b", githubUserId: `gh-${otherPilotId}` },
    ]);

    const labelA = `c13-d8-${newId("nm").slice(-6)}`;
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, labelA, "s");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: labelA,
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    if (!("projectId" in created) || !created.projectId) throw new Error(JSON.stringify(created));
    projectId = created.projectId;

    const labelB = `c13-d8b-${newId("nm").slice(-6)}`;
    const prep2 = await openOrCreatePreparation(otherPilotId);
    await updatePreview(otherPilotId, prep2.id, labelB, "s");
    const refreshed2 = (
      await db.select().from(preparations).where(eq(preparations.id, prep2.id))
    )[0]!;
    const created2 = await createProjectCommand({
      pilotId: otherPilotId,
      preparationId: prep2.id,
      expectedCreationRevision: refreshed2.creationRevision,
      projectName: labelB,
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    if (!("projectId" in created2) || !created2.projectId) {
      throw new Error(JSON.stringify(created2));
    }
    otherProjectId = created2.projectId;

    attemptId = newId("efx");
    const plan = {
      kind: "CURSOR_EXECUTION",
      contractId: "ctc_c13",
      contractVersion: 1,
      contractFingerprint: "fp_c13",
      instructionFingerprint: "ifp_c13",
      workspaceCwd: WS,
      workspaceKey: "default",
      effectProviderMode: "SCRIPTED",
    };
    await db.insert(effectAttempts).values({
      id: attemptId,
      projectId,
      pilotId,
      kind: "CURSOR_EXECUTION",
      status: "COMPLETED",
      fingerprint: "fp_c13",
      planJson: JSON.stringify(plan),
      resultJson: JSON.stringify({ terminalStatus: "finished" }),
      correlationKey: `c13-d8-${attemptId}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }, 60_000);

  it("allowed file under workspace — CONSULTED + journal", async () => {
    const journal = createToolSourceJournal();
    const r = await readAttemptWorkspaceFile(
      {
        pilotId,
        projectId,
        attemptId,
        budget: { remainingCalls: 5, remainingChars: 50_000 },
        sourceJournal: journal,
      },
      "ok.txt",
    );
    expect(r.coverage).toBe("CONSULTED");
    expect(r.content).toContain("C13-PG-ALLOWED");
    expect(journal.entries.some((e) => e.coverage === "CONSULTED")).toBe(true);
  });

  it("relative traversal — DENIED", async () => {
    const r = await readAttemptWorkspaceFile(
      {
        pilotId,
        projectId,
        attemptId,
        budget: { remainingCalls: 5, remainingChars: 50_000 },
      },
      "../sfia-c13-d8-pg-outside.txt",
    );
    expect(r.coverage).toBe("DENIED");
    expect(JSON.stringify(r)).not.toContain("SECRET_PG");
  });

  it("absolute path — DENIED", async () => {
    const r = await readAttemptWorkspaceFile(
      {
        pilotId,
        projectId,
        attemptId,
        budget: { remainingCalls: 5, remainingChars: 50_000 },
      },
      OUTSIDE,
    );
    expect(r.coverage).toBe("DENIED");
    expect((r as { reason?: string }).reason).toMatch(/ABSOLUTE|UNSAFE/);
    expect(JSON.stringify(r)).not.toContain("SECRET_PG");
  });

  it("symlink escape — DENIED without content leak", async () => {
    expect(existsSync(join(WS, "escape.txt"))).toBe(true);
    const r = await readAttemptWorkspaceFile(
      {
        pilotId,
        projectId,
        attemptId,
        budget: { remainingCalls: 5, remainingChars: 50_000 },
      },
      "escape.txt",
    );
    expect(r.coverage).toBe("DENIED");
    expect((r as { reason?: string }).reason).toMatch(/SYMLINK/);
    expect(JSON.stringify(r)).not.toContain("SECRET_PG");
  });

  it("wrong pilot — DENIED", async () => {
    const r = await readAttemptWorkspaceFile(
      {
        pilotId: otherPilotId,
        projectId,
        attemptId,
        budget: { remainingCalls: 5, remainingChars: 50_000 },
      },
      "ok.txt",
    );
    expect(r.coverage).toBe("DENIED");
    expect((r as { reason?: string }).reason).toBe("ATTEMPT_NOT_IN_SCOPE");
    expect(r.content).toBeNull();
  });

  it("wrong project — DENIED", async () => {
    const r = await readAttemptWorkspaceFile(
      {
        pilotId,
        projectId: otherProjectId,
        attemptId,
        budget: { remainingCalls: 5, remainingChars: 50_000 },
      },
      "ok.txt",
    );
    expect(r.coverage).toBe("DENIED");
    expect((r as { reason?: string }).reason).toBe("ATTEMPT_NOT_IN_SCOPE");
  });

  it("budget exhausted — DENIED", async () => {
    const r = await readAttemptWorkspaceFile(
      {
        pilotId,
        projectId,
        attemptId,
        budget: { remainingCalls: 0, remainingChars: 50_000 },
      },
      "ok.txt",
    );
    expect(r.coverage).toBe("DENIED");
    expect((r as { reason?: string }).reason).toBe("D8_TOOL_BUDGET_EXHAUSTED");
  });

  it("list metadata only — DISCOVERED in journal, not CONSULTED content", async () => {
    const journal = createToolSourceJournal();
    const r = await listRealizationEvidence({
      pilotId,
      projectId,
      attemptId,
      budget: { remainingCalls: 3, remainingChars: 50_000 },
      sourceJournal: journal,
    });
    expect(r.coverage).toBe("OPENED");
    expect(journal.entries[0]?.coverage).toBe("DISCOVERED");
    expect(journal.entries[0]?.notes).toMatch(/metadata only/i);
  });
});
