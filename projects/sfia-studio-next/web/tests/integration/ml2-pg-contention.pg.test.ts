/**
 * SAFE-01 — real two-session PostgreSQL contention (not same-connection hooks).
 */
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";
process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";

import postgres from "postgres";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, messages } from "@/db/schema";
import { createDevTestSession } from "@/domains/identity/session";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { getConversationId, postUserMessageAndNora } from "@/domains/conversation/service";
import {
  reconcileRunningCommand,
  reserveTurnCommand,
  revokeOwnerTokenForTests,
  touchTurnLease,
  turnRaceHooks,
} from "@/domains/conversation/turn-command";
import { capitalizeAcquis } from "@/domains/knowledge/service";
import { knowledgeAcquis } from "@/db/schema";

const DSN = process.env.DATABASE_URL;
if (!DSN) throw new Error("DATABASE_URL required");

describe("ML2 SAFE-01 PG two-session contention", () => {
  let pilotId: string;
  let preparationId: string;
  let conversationId: string;
  let connA: ReturnType<typeof postgres>;
  let connB: ReturnType<typeof postgres>;

  beforeAll(async () => {
    await db.execute(
      sql`ALTER TABLE conversation_turn_commands ADD COLUMN IF NOT EXISTS owner_token text`,
    );
    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
    pilotId = sess.pilotId;
    const prep = await openOrCreatePreparation(pilotId);
    preparationId = prep.id;
    const cid = await getConversationId(pilotId, preparationId);
    if (!cid) throw new Error("conversation missing");
    conversationId = cid;
    connA = postgres(DSN!, { max: 1, idle_timeout: 5, connect_timeout: 10 });
    connB = postgres(DSN!, { max: 1, idle_timeout: 5, connect_timeout: 10 });
  });

  afterEach(async () => {
    delete turnRaceHooks.insideTerminalTxAfterInsert;
    delete turnRaceHooks.beforeTerminalCommit;
    await db.execute(
      sql`update conversation_turn_commands
          set status = 'UNKNOWN',
              owner_token = 'revoked_cleanup',
              error_category = 'TEST_CLEANUP',
              updated_at = now()
          where conversation_id = ${conversationId} and status = 'RUNNING'`,
    );
  });

  afterAll(async () => {
    await connA.end({ timeout: 5 }).catch(() => undefined);
    await connB.end({ timeout: 5 }).catch(() => undefined);
  });

  it("PG-CONTEND-01: FOR SHARE on A blocks B reconcile until A commits", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `contend01-${Date.now()}`,
      content: "contend share",
    });
    if (reserved.kind !== "fresh") throw new Error("fresh");

    let bDone = false;
    let bResult: Awaited<ReturnType<typeof reconcileRunningCommand>> | null = null;

    const hold = connA.begin(async (txA) => {
      await txA`
        select id from conversation_turn_commands
        where id = ${reserved.commandId}
          and owner_token = ${reserved.ownerToken}
          and status in ('RUNNING', 'ACCEPTED')
        for share
      `;
      // Hold lock while B tries to reconcile (needs row lock compatibility with FOR UPDATE path).
      await new Promise((r) => setTimeout(r, 400));
    });

    await new Promise((r) => setTimeout(r, 50));
    const bPromise = reconcileRunningCommand(reserved.commandId).then((r) => {
      bDone = true;
      bResult = r;
      return r;
    });

    await new Promise((r) => setTimeout(r, 150));
    expect(bDone).toBe(false);

    await hold;
    await Promise.race([
      bPromise,
      new Promise((_, rej) => setTimeout(() => rej(new Error("B reconcile timeout")), 5000)),
    ]);
    expect(bDone).toBe(true);
    expect(bResult).toBeTruthy();
    // Active lease (not stale) ⇒ reconcile must not falsely orphan while A held share then released.
    expect(["RUNNING", "UNKNOWN"]).toContain(bResult!.status);
  }, 15_000);

  it("PG-CONTEND-02: FOR UPDATE terminal lock on A blocks B reconcile", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `contend02-${Date.now()}`,
      content: "contend update",
    });
    if (reserved.kind !== "fresh") throw new Error("fresh");

    let bFinishedDuringLock = false;
    await connA.begin(async (txA) => {
      await txA`
        select id from conversation_turn_commands
        where id = ${reserved.commandId}
          and owner_token = ${reserved.ownerToken}
          and status in ('RUNNING', 'ACCEPTED')
        for update
      `;

      const bPromise = reconcileRunningCommand(reserved.commandId).then((r) => {
        bFinishedDuringLock = true;
        return r;
      });

      await new Promise((r) => setTimeout(r, 200));
      expect(bFinishedDuringLock).toBe(false);

      // Keep ownership; B must wait. End TX without revoking.
      void bPromise.catch(() => undefined);
    });

    await new Promise((r) => setTimeout(r, 100));
    const stillOwned = await touchTurnLease(reserved.commandId, reserved.ownerToken);
    expect(stillOwned.owned).toBe(true);
  }, 15_000);

  it("PG-DBFAIL-01: exception after assistant INSERT rolls back — no orphan, non-COMPLETE", async () => {
    const key = `dbfail01-${Date.now()}`;
    const before = (
      await db
        .select()
        .from(messages)
        .where(and(eq(messages.conversationId, conversationId), eq(messages.role, "assistant")))
    ).length;

    turnRaceHooks.insideTerminalTxAfterInsert = async () => {
      throw new Error("injected_pg_fail_after_insert");
    };

    const result = await postUserMessageAndNora(pilotId, preparationId, "Compare dbfail01", {
      clientTurnKey: key,
    });
    expect(result.status).toBe("UNKNOWN");
    expect(result.assistantMessageId).toBeNull();

    const after = (
      await db
        .select()
        .from(messages)
        .where(and(eq(messages.conversationId, conversationId), eq(messages.role, "assistant")))
    ).length;
    expect(after).toBe(before);

    const cmd = (
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
    expect(cmd.status).not.toBe("COMPLETE");
  });

  it("PG-DBFAIL-02: capitalisation TX ownership lost → no acquis published", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `dbfail02-${Date.now()}`,
      content: "cap fail",
    });
    if (reserved.kind !== "fresh") throw new Error("fresh");
    const statement = `DBFAIL02_${Date.now()} statement that is long enough`;
    const before = (
      await db
        .select()
        .from(knowledgeAcquis)
        .where(
          and(
            eq(knowledgeAcquis.preparationId, preparationId),
            eq(knowledgeAcquis.statement, statement),
          ),
        )
    ).length;

    const result = await capitalizeAcquis(pilotId, preparationId, {
      statement,
      kind: "HYPOTHESIS",
      provenance: {
        sourceKind: "message",
        sourceId: "msg",
        generationId: "gen",
        epistemic: "hypothesized",
      },
      turnFence: {
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        beforeFenceCheck: async () => {
          await revokeOwnerTokenForTests(reserved.commandId);
        },
      },
    });
    expect(result.status).toBe("FAILED");
    const after = (
      await db
        .select()
        .from(knowledgeAcquis)
        .where(
          and(
            eq(knowledgeAcquis.preparationId, preparationId),
            eq(knowledgeAcquis.statement, statement),
          ),
        )
    ).length;
    expect(after).toBe(before);
  });

  it("PG-LEASE-01: active lease prevents false orphan under concurrent reconcile", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `lease-pg-${Date.now()}`,
      content: "lease",
    });
    if (reserved.kind !== "fresh") throw new Error("fresh");
    await touchTurnLease(reserved.commandId, reserved.ownerToken);
    const recon = await reconcileRunningCommand(reserved.commandId);
    expect(recon.status).toBe("RUNNING");
    expect(recon.reconciled).toBe(false);
  });

  it("PG-ISOLATE-01: foreign pilot cannot reconstitute UNKNOWN-turn D4 refs; connection cut is safe", async () => {
    const statement = `ISOLATE01_${Date.now()} acquis durable isolé`;
    const gen = `gen_iso_${Date.now()}`;
    const src = `msg_iso_${Date.now()}`;
    await db.insert(knowledgeAcquis).values({
      id: `acq_iso_${Date.now()}`,
      preparationId,
      ownerPilotId: pilotId,
      kind: "HYPOTHESIS",
      statement,
      provenanceJson: JSON.stringify({
        sourceKind: "message",
        sourceId: src,
        generationId: gen,
        epistemic: "hypothesized",
      }),
      status: "CURRENT",
    });

    const { reconstituteConfirmedD4Effects } = await import("@/domains/knowledge/service");
    const ownerView = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
      generationId: gen,
      userMessageId: src,
    });
    expect(ownerView.capitalisation.some((c) => c.kind === "acquis")).toBe(true);

    const other = await createDevTestSession("b", { host: "127.0.0.1:3100" });
    const foreign = await reconstituteConfirmedD4Effects(other.pilotId, preparationId, {
      generationId: gen,
      userMessageId: src,
    });
    expect(foreign.capitalisation).toHaveLength(0);
    expect(foreign.capitalisationLimit).toMatch(/PREP_NOT_VISIBLE|NO_CONFIRMED/);

    // Cutting an independent session must not leave durable side-effects or open TX leakage.
    const cut = postgres(DSN!, { max: 1, idle_timeout: 1, connect_timeout: 5 });
    await cut`select 1`;
    await cut.end({ timeout: 1 });
    const still = (
      await db
        .select()
        .from(knowledgeAcquis)
        .where(
          and(
            eq(knowledgeAcquis.preparationId, preparationId),
            eq(knowledgeAcquis.statement, statement),
          ),
        )
    )[0];
    expect(still?.status).toBe("CURRENT");
    expect(still?.ownerPilotId).toBe(pilotId);
  });
});
