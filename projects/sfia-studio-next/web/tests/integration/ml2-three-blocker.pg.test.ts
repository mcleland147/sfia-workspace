import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";
process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";

import { and, eq, sql } from "drizzle-orm";
import { mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { db } from "@/db/client";
import {
  conversationTurnCommands,
  documents,
  documentRevisions,
  knowledgeAcquis,
} from "@/db/schema";
import { createDevTestSession } from "@/domains/identity/session";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import {
  getConversationId,
  listMessages,
  postUserMessageAndNora,
} from "@/domains/conversation/service";
import {
  injectStaleRunningForTests,
  reconcileRunningCommand,
  requireTurnOwnership,
  reserveTurnCommand,
  revokeOwnerTokenForTests,
  touchTurnLease,
  turnClock,
  turnRaceHooks,
  TURN_RUNNING_STALE_MS,
} from "@/domains/conversation/turn-command";
import { searchProjectResources } from "@/domains/conversation/d4-read-tools";
import { ensureSubject } from "@/domains/knowledge/service";
import { newId } from "@/lib/ids";
import { newOperationId } from "@/lib/observability";
import { StudioError } from "@/lib/http-errors";

describe("ML2 three-blocker corrective (PG)", () => {
  let pilotId: string;
  let preparationId: string;
  let conversationId: string;
  let obsDir: string;
  const prevObs = process.env.SFIA_OBS_DIR;
  const prevBase = process.env.SFIA_OBS_BASE;

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    // Ensure owner_token column exists (migration 006).
    await db.execute(sql`ALTER TABLE conversation_turn_commands ADD COLUMN IF NOT EXISTS owner_token text`);
    obsDir = mkdtempSync(join(tmpdir(), "sfia-obs-3b-"));
    process.env.SFIA_OBS_DIR = obsDir;
    process.env.SFIA_OBS_BASE = obsDir;
    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
    pilotId = sess.pilotId;
    const prep = await openOrCreatePreparation(pilotId);
    preparationId = prep.id;
    const cid = await getConversationId(pilotId, preparationId);
    if (!cid) throw new Error("conversation missing");
    conversationId = cid;
  });

  afterEach(async () => {
    delete turnRaceHooks.afterGenerateBeforeEffects;
    delete turnRaceHooks.beforeD4Effect;
    delete turnRaceHooks.beforeTerminalCommit;
    turnClock.nowMs = () => Date.now();
    // Unlock conversation for next case — force any leftover RUNNING → UNKNOWN.
    await db.execute(
      sql`update conversation_turn_commands
          set status = 'UNKNOWN',
              owner_token = 'revoked_cleanup',
              error_category = 'TEST_CLEANUP',
              updated_at = now()
          where conversation_id = ${conversationId} and status = 'RUNNING'`,
    );
  });

  afterAll(() => {
    if (prevObs === undefined) delete process.env.SFIA_OBS_DIR;
    else process.env.SFIA_OBS_DIR = prevObs;
    if (prevBase === undefined) delete process.env.SFIA_OBS_BASE;
    else process.env.SFIA_OBS_BASE = prevBase;
    rmSync(obsDir, { recursive: true, force: true });
  });

  it("TURN-RACE-01: ownership lost after generate → no COMPLETE, no D4 write", async () => {
    const key = `race01-${Date.now()}`;
    const content =
      "Rédige un document de synthèse critique sur l'architecture distribuée pour le sas.";
    turnRaceHooks.afterGenerateBeforeEffects = async () => {
      const row = (
        await db
          .select()
          .from(conversationTurnCommands)
          .where(
            and(
              eq(conversationTurnCommands.conversationId, conversationId),
              eq(conversationTurnCommands.clientTurnKey, key),
            ),
          )
          .limit(1)
      )[0];
      expect(row).toBeTruthy();
      // Simulate concurrent reconcile that invalidates ownership while run still in-flight.
      await revokeOwnerTokenForTests(row!.id);
      await db
        .update(conversationTurnCommands)
        .set({
          status: "UNKNOWN",
          errorCategory: "RECONCILED_TEST_INJECTION",
          updatedAt: new Date(),
        })
        .where(eq(conversationTurnCommands.id, row!.id));
    };

    const docsBefore = await db
      .select()
      .from(documents)
      .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)));

    const result = await postUserMessageAndNora(pilotId, preparationId, content, {
      clientTurnKey: key,
    });
    expect(result.status).toBe("UNKNOWN");
    expect(result.documentSave == null || result.documentSave.status !== "AVAILABLE").toBe(true);

    const docsAfter = await db
      .select()
      .from(documents)
      .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)));
    expect(docsAfter.length).toBe(docsBefore.length);

    // Another intention can proceed.
    const next = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Compare option reprise après ownership lost",
      { clientTurnKey: `race01-next-${Date.now()}` },
    );
    expect(next.status).toBe("COMPLETE");
  });

  it("TURN-RACE-02: fence inside document TX blocks write when token revoked mid-path", async () => {
    const key = `race02-${Date.now()}`;
    const content =
      "Rédige un document de synthèse sur la pagination critique pour preuve fence.";
    turnRaceHooks.beforeD4Effect = async () => {
      const row = (
        await db
          .select()
          .from(conversationTurnCommands)
          .where(
            and(
              eq(conversationTurnCommands.conversationId, conversationId),
              eq(conversationTurnCommands.clientTurnKey, key),
            ),
          )
          .limit(1)
      )[0];
      await revokeOwnerTokenForTests(row!.id);
    };

    const docsBefore = (
      await db
        .select()
        .from(documents)
        .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)))
    ).length;

    const result = await postUserMessageAndNora(pilotId, preparationId, content, {
      clientTurnKey: key,
    });
    expect(result.status).toBe("UNKNOWN");

    const docsAfter = (
      await db
        .select()
        .from(documents)
        .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)))
    ).length;
    expect(docsAfter).toBe(docsBefore);
  });

  it("TURN-RACE-03: concurrent same key + divergent payload + distinct keys", async () => {
    const key = `race03-${Date.now()}`;
    const content = "Compare Alpha et Beta pour unicité";
    const settled = await Promise.allSettled([
      postUserMessageAndNora(pilotId, preparationId, content, { clientTurnKey: key }),
      postUserMessageAndNora(pilotId, preparationId, content, { clientTurnKey: key }),
    ]);
    const ok = settled.filter((s) => s.status === "fulfilled");
    expect(ok.length).toBeGreaterThanOrEqual(1);
    const cmds = await db
      .select()
      .from(conversationTurnCommands)
      .where(
        and(
          eq(conversationTurnCommands.conversationId, conversationId),
          eq(conversationTurnCommands.clientTurnKey, key),
        ),
      );
    expect(cmds).toHaveLength(1);

    await expect(
      postUserMessageAndNora(pilotId, preparationId, "Payload divergent race03", {
        clientTurnKey: key,
      }),
    ).rejects.toSatisfy((e: unknown) => e instanceof StudioError && e.code === "PAYLOAD_MISMATCH");

    const distinct = await Promise.allSettled([
      postUserMessageAndNora(pilotId, preparationId, "Compare clé distincte A", {
        clientTurnKey: `race03-a-${Date.now()}`,
      }),
      postUserMessageAndNora(pilotId, preparationId, "Compare clé distincte B", {
        clientTurnKey: `race03-b-${Date.now()}`,
      }),
    ]);
    const fulfilled = distinct.filter((s) => s.status === "fulfilled");
    expect(fulfilled.length).toBeGreaterThanOrEqual(1);
    const msgs = await listMessages(pilotId, preparationId);
    const ordinals = msgs.map((m) => m.ordinal);
    expect(new Set(ordinals).size).toBe(ordinals.length);
  });

  it("TURN-RACE-04: active lease heartbeat prevents false orphan; stale without heartbeat reconciles", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `race04-active-${Date.now()}`,
      content: "Tour actif long",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh");

    // Advance wall clock beyond stale window but heartbeat first → still owned.
    const base = turnClock.nowMs();
    turnClock.nowMs = () => base + TURN_RUNNING_STALE_MS + 5_000;
    const touched = await touchTurnLease(reserved.commandId, reserved.ownerToken);
    expect(touched.owned).toBe(true);
    // After touch, updated_at is "now" in DB (real clock) — inject stale again for reconcile test.
    await injectStaleRunningForTests(reserved.commandId);
    const recon = await reconcileRunningCommand(reserved.commandId);
    expect(recon.status).toBe("UNKNOWN");
    expect(await requireTurnOwnership(reserved.commandId, reserved.ownerToken)).toBe(false);
  });

  it("D4-PAGE-01/02: >600 matches, offsets past 500 terminate without stagnant hasMore", async () => {
    const subject = await ensureSubject(pilotId, preparationId, `Page bulk ${Date.now()}`);
    const marker = `PAGE_MARK_${Date.now()}`;
    for (let i = 0; i < 620; i++) {
      await db.insert(knowledgeAcquis).values({
        id: newId("acq"),
        preparationId,
        ownerPilotId: pilotId,
        subjectId: subject.subjectId!,
        kind: "HYPOTHESIS",
        statement: `Acquis ${marker} n=${i.toString().padStart(4, "0")}`,
        provenanceJson: JSON.stringify({ sourceKind: "pilot", epistemic: "hypothesized" }),
        status: "CURRENT",
      });
    }

    const scope = {
      pilotId,
      preparationId,
      operationId: newOperationId(),
      generationId: newId("gen"),
      budget: { remainingCalls: 50, remainingChars: 5_000_000 },
    };

    const first = await searchProjectResources(scope, {
      query: marker,
      types: ["acquis"],
      limit: 20,
      offset: 0,
    });
    expect(first.status).toBe("AVAILABLE");
    if (first.status !== "AVAILABLE") throw new Error("available");
    expect(first.totalMatched).toBeGreaterThanOrEqual(620);
    expect(first.hasMore).toBe(true);
    expect(first.nextOffset).toBe(20);

    const mid = await searchProjectResources(scope, {
      query: marker,
      types: ["acquis"],
      limit: 20,
      offset: 500,
    });
    expect(mid.status).toBe("AVAILABLE");
    if (mid.status !== "AVAILABLE") throw new Error("available");
    expect(mid.items.length).toBeGreaterThan(0);
    expect(mid.items.length).toBeLessThanOrEqual(20);
    if (mid.hasMore) {
      expect(mid.nextOffset).toBe(500 + mid.items.length);
      expect(mid.nextOffset).not.toBe(500);
    }

    // Walk until terminal
    let offset = 0;
    let pages = 0;
    const seen = new Set<string>();
    while (pages < 50) {
      const page = await searchProjectResources(scope, {
        query: marker,
        types: ["acquis"],
        limit: 20,
        offset,
      });
      if (page.status !== "AVAILABLE") throw new Error("available");
      for (const it of page.items) seen.add(String(it.id));
      pages += 1;
      if (!page.hasMore) {
        expect(page.nextOffset).toBeNull();
        break;
      }
      expect(page.nextOffset).not.toBeNull();
      expect(page.nextOffset!).toBeGreaterThan(offset);
      offset = page.nextOffset!;
    }
    expect(seen.size).toBeGreaterThanOrEqual(620);

    const pastEnd = await searchProjectResources(scope, {
      query: marker,
      types: ["acquis"],
      limit: 20,
      offset: 10_000,
    });
    expect(pastEnd.status).toBe("AVAILABLE");
    if (pastEnd.status !== "AVAILABLE") throw new Error("available");
    expect(pastEnd.items).toHaveLength(0);
    expect(pastEnd.hasMore).toBe(false);
    expect(pastEnd.nextOffset).toBeNull();
  });

  it("D4-PAGE-04: tiny char budget denies/shrinks without claiming oversized envelope", async () => {
    const scope = {
      pilotId,
      preparationId,
      operationId: newOperationId(),
      generationId: newId("gen"),
      budget: { remainingCalls: 2, remainingChars: 40 },
    };
    const result = await searchProjectResources(scope, {
      query: "PAGE_MARK",
      types: ["acquis"],
      limit: 20,
      offset: 0,
    });
    expect(scope.budget.remainingChars).toBeGreaterThanOrEqual(0);
    expect("charsCharged" in result).toBe(true);
    if (result.status === "DENIED") {
      expect(result.reason).toMatch(/BUDGET/);
    } else {
      expect(JSON.stringify(result).length).toBeLessThanOrEqual(40 + 200); // charged before/at deny path
    }
  });
});
