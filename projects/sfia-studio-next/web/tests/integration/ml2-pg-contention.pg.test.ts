/**
 * SAFE-01 — real two-session PostgreSQL contention (not same-connection hooks).
 * Distinguishes TX application exceptions from client connection abort.
 * Does NOT use pg_terminate_backend / docker stop on shared DEV/RECETTE/STABLE.
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
import { conversationTurnCommands, messages, knowledgeAcquis } from "@/db/schema";
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
import { newId } from "@/lib/ids";

const DSN = process.env.DATABASE_URL;
if (!DSN) throw new Error("DATABASE_URL required");

async function waitUntil(
  predicate: () => Promise<boolean>,
  opts: { timeoutMs?: number; intervalMs?: number; label?: string } = {},
) {
  const timeoutMs = opts.timeoutMs ?? 3000;
  const intervalMs = opts.intervalMs ?? 40;
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await predicate()) return;
    await new Promise((r) => setTimeout(r, intervalMs));
  }
  throw new Error(`waitUntil timeout: ${opts.label ?? "condition"}`);
}

/** True when some other backend is waiting on a lock for this relation/row. */
async function countWaitersOnTurnCommand(observer: ReturnType<typeof postgres>, commandId: string) {
  const rows = await observer`
    select count(*)::int as n
    from pg_locks l
    join pg_stat_activity a on a.pid = l.pid
    where l.locktype = 'transactionid'
      and not l.granted
      and a.pid <> pg_backend_pid()
      and a.query ilike ${"%" + commandId + "%"}
  `;
  // Fallback: any ungranted lock from another session (broader but useful under FOR UPDATE).
  if ((rows[0]?.n ?? 0) > 0) return rows[0].n as number;
  const broad = await observer`
    select count(*)::int as n
    from pg_locks l
    where not l.granted
      and l.pid <> pg_backend_pid()
  `;
  return (broad[0]?.n ?? 0) as number;
}

describe("ML2 SAFE-01 PG two-session contention", () => {
  let pilotId: string;
  let preparationId: string;
  let conversationId: string;
  let connA: ReturnType<typeof postgres>;
  let connB: ReturnType<typeof postgres>;
  let observer: ReturnType<typeof postgres>;

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
    observer = postgres(DSN!, { max: 1, idle_timeout: 5, connect_timeout: 10 });
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
    await observer.end({ timeout: 5 }).catch(() => undefined);
  });

  it("PG-CONTEND-01: FOR SHARE on A blocks B; after release B stays RUNNING (no false orphan)", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `contend01-${Date.now()}`,
      content: "contend share",
    });
    if (reserved.kind !== "fresh") throw new Error("fresh");

    let bDone = false;
    let bResult: Awaited<ReturnType<typeof reconcileRunningCommand>> | null = null;
    let bError: unknown = null;

    const hold = connA.begin(async (txA) => {
      await txA`
        select id from conversation_turn_commands
        where id = ${reserved.commandId}
          and owner_token = ${reserved.ownerToken}
          and status in ('RUNNING', 'ACCEPTED')
        for share
      `;
      await waitUntil(
        async () => {
          // Keep holding; outer starts B after lock acquired.
          return true;
        },
        { timeoutMs: 500, label: "hold-acquired" },
      );
      await new Promise((r) => setTimeout(r, 500));
    });

    await new Promise((r) => setTimeout(r, 40));
    const bPromise = reconcileRunningCommand(reserved.commandId)
      .then((r) => {
        bDone = true;
        bResult = r;
        return r;
      })
      .catch((e) => {
        bError = e;
        bDone = true;
        throw e;
      });

    // Wait until B is blocked (ungranted lock) — not merely "not done yet".
    await waitUntil(
      async () => (await countWaitersOnTurnCommand(observer, reserved.commandId)) > 0,
      { timeoutMs: 2500, label: "pg_locks waiter for B" },
    );
    expect(bDone).toBe(false);

    await hold;
    await Promise.race([
      bPromise,
      new Promise((_, rej) => setTimeout(() => rej(new Error("B reconcile timeout")), 5000)),
    ]);
    expect(bError).toBeNull();
    expect(bDone).toBe(true);
    // Active (non-stale) command under live ownership ⇒ reconcile must NOT revoke.
    expect(bResult!.status).toBe("RUNNING");
    expect(bResult!.reconciled).toBe(false);
    expect(bResult!.assistantMessageId).toBeNull();

    const lease = await touchTurnLease(reserved.commandId, reserved.ownerToken);
    expect(lease.owned).toBe(true);
  }, 15_000);

  it("PG-CONTEND-02: FOR UPDATE on A blocks B; after release B RUNNING and ownership intact", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `contend02-${Date.now()}`,
      content: "contend update",
    });
    if (reserved.kind !== "fresh") throw new Error("fresh");

    let bDoneDuringLock = false;
    let bResult: Awaited<ReturnType<typeof reconcileRunningCommand>> | null = null;

    let bPromise!: Promise<Awaited<ReturnType<typeof reconcileRunningCommand>>>;
    await connA.begin(async (txA) => {
      await txA`
        select id from conversation_turn_commands
        where id = ${reserved.commandId}
          and owner_token = ${reserved.ownerToken}
          and status in ('RUNNING', 'ACCEPTED')
        for update
      `;

      bPromise = reconcileRunningCommand(reserved.commandId).then((r) => {
        bDoneDuringLock = true;
        bResult = r;
        return r;
      });

      await new Promise((r) => setTimeout(r, 250));
      expect(bDoneDuringLock).toBe(false);
      // End TX → release FOR UPDATE; B may then proceed.
    });

    await Promise.race([
      bPromise,
      new Promise((_, rej) => setTimeout(() => rej(new Error("B reconcile timeout")), 5000)),
    ]);
    expect(bDoneDuringLock).toBe(true);
    expect(bResult!.status).toBe("RUNNING");
    expect(bResult!.reconciled).toBe(false);

    const stillOwned = await touchTurnLease(reserved.commandId, reserved.ownerToken);
    expect(stillOwned.owned).toBe(true);

    const assistants = await db
      .select()
      .from(messages)
      .where(
        and(
          eq(messages.conversationId, conversationId),
          eq(messages.ordinal, reserved.ordinalAssistant),
          eq(messages.role, "assistant"),
        ),
      );
    expect(assistants).toHaveLength(0);
  }, 15_000);

  it("PG-DBFAIL-01: application exception after assistant INSERT rolls back TX — no orphan", async () => {
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

  it("PG-DBFAIL-02: capitalisation TX ownership lost → no acquis published (fence, not DB disconnect)", async () => {
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

  it("PG-DBFAIL-03: client abort mid-TX on ephemeral persistent table — row never durable", async () => {
    // Dedicated ephemeral Postgres (port 55432) — NOT shared DEV/RECETTE/STABLE.
    // No pg_terminate_backend / docker stop on shared lanes.
    const ephemeralDsn =
      process.env.SFIA_SAFE01_EPHEMERAL_DSN ??
      "postgres://safe01:safe01@127.0.0.1:55432/safe01";
    const marker = `dbfail03_${Date.now()}`;
    const setup = postgres(ephemeralDsn, { max: 1, idle_timeout: 5, connect_timeout: 10 });
    try {
      await setup`create table if not exists sfia_safe01_persist_probe (
        id text primary key,
        note text not null,
        created_at timestamptz not null default now()
      )`;
      await setup`delete from sfia_safe01_persist_probe where id = ${marker}`;
    } finally {
      await setup.end({ timeout: 5 }).catch(() => undefined);
    }

    const writer = postgres(ephemeralDsn, { max: 1, idle_timeout: 2, connect_timeout: 10 });
    try {
      await writer.begin(async (tx) => {
        await tx`insert into sfia_safe01_persist_probe (id, note) values (${marker}, 'uncommitted')`;
        const mid = await tx`select count(*)::int as n from sfia_safe01_persist_probe where id = ${marker}`;
        expect(mid[0]?.n).toBe(1);
        await writer.end({ timeout: 1 });
        throw new Error("unreachable_after_end");
      });
    } catch {
      // connection aborted mid-TX
    }

    const probe = postgres(ephemeralDsn, { max: 1, idle_timeout: 5, connect_timeout: 10 });
    try {
      const rows = await probe`select id from sfia_safe01_persist_probe where id = ${marker}`;
      expect(rows).toHaveLength(0);
    } finally {
      await probe.end({ timeout: 5 }).catch(() => undefined);
    }

    // Product DEV tables untouched by ephemeral probe.
    const product = (
      await db.execute(sql`select to_regclass('public.sfia_safe01_persist_probe') as reg`)
    ) as unknown as Array<{ reg: string | null }>;
    const reg = Array.isArray(product) ? product[0]?.reg : (product as { rows?: Array<{ reg: string | null }> })?.rows?.[0]?.reg;
    expect(reg ?? null).toBeNull();
  }, 20_000);

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
      id: newId("acq"),
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
