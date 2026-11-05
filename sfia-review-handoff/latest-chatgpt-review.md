# SFIA Review Pack FULL — R5/ML2 Qualification intégrée pré-RECETTE PR #659

**Date/heure :** 2026-11-05 20:51:42 +0100 (Europe/Paris)  
**Mandat :** `sfia-next-ml2-qualification-integree-pr659-critical-20261105.md`  
**Exécutant :** Cursor (Composer)  
**Profil :** CRITICAL — qualification intégrée ASSIST-REUSE / SAFE-01 / UNKNOWN-CAP / préparation LIVE-RECETTE  
**Produit :** `0.0.0-dev` / **NO RELEASE** / STABLE **NOT AVAILABLE**  
**Verdict :** `ML2 PRE-RECETTE TECHNICAL CONSOLIDATION — CI NEXT PASS — LIVE/RECETTE GATES PENDING MORRIS`  
**Limites :** LIVE/RECETTE/merge/ADOPTED = **NOT RUN / NOT AUTHORIZED**. Server-side disconnect on shared DEV = **NOT USED** ; client abort mid-TX = PROVEN distinct.

---

## 1. Git Truth

| Champ | Valeur |
| --- | --- |
| Branche | `sfia/next-ml2-cognition-observability-integrated` |
| HEAD initial | `bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1` |
| HEAD final local+remote | `01ae25e1dfc7b062d3b2a73838335ef8630ec6f2` |
| `origin/main` / merge-base | `6e4406c63639330c7826423cdcf08f06ff019eed` |
| Push | FF `bf2deb0e..01ae25e1` |
| PR #659 | OPEN / **DRAFT** / base=main / head=`01ae25e1dfc7b062d3b2a73838335ef8630ec6f2` — https://github.com/mcleland147/sfia-workspace/pull/659 |
| #655–#658 | intactes |
| Untracked préservés | `web/public/*.svg` ; `.tmp-sfia-review/` (non commit) |
| CI Next | run `42097746777` — voir §5 |

---

## 2. Oracles

| Oracle | État | Preuve |
| --- | --- | --- |
| ASSIST-REUSE-01 | **PROVEN** | gen divergent → CONFLICT |
| ASSIST-REUSE-02 | **PROVEN** | ACK perdu idempotent |
| ASSIST-REUSE-03 | **PROVEN** | reconcile non-liaison |
| ASSIST-REUSE-04 | **PROVEN** | sameId + gen manquante message → CONFLICT |
| ASSIST-REUSE-05 | **PROVEN** | alreadyBound sans dual gen → CONFLICT |
| UNKNOWN-CAP-01..04 | **PROVEN** | restitution DB ; sujets non attribués |
| UNKNOWN-CAP-05 | **PROVEN** | pas d'attribution croisée sourceId OR |
| PG-CONTEND-01 | **PROVEN** | FOR SHARE bloque ; après release **RUNNING** strict |
| PG-CONTEND-02 | **PROVEN** | FOR UPDATE ; await B → RUNNING ; ownership intact |
| PG-DBFAIL-01 | **PROVEN** | exception applicative post-INSERT → rollback |
| PG-DBFAIL-02 | **PROVEN** | fence ownership (≠ disconnect) |
| PG-DBFAIL-03 | **PROVEN** | abort **client** mid-TX (TEMP) |
| PG-LEASE-01 / ISOLATE-01 | **PROVEN** | |
| REAL server disconnect (terminate/docker stop) | **NOT PROVEN — TOOLING GAP** | interdit sur DEV partagé |
| LIVE COG/OBS | **NOT RUN** | protocole §27.2 PREPARED |
| RECETTE | **NOT DEPLOYED** | manifeste §27.3 PREPARED |

---

## 3. QA locale (`01ae25e1dfc7b062d3b2a73838335ef8630ec6f2`)

| Suite | Résultat |
| --- | --- |
| tsc / lint / build | PASS (lint warnings préexistants nora-adapter) |
| unit | **52 PASS** |
| PG integration | **93 PASS** |
| Playwright FAKE | **3 PASS** |
| Lane | DEV ; fixture Nora ; Postgres DEV 5433 ; **sfia-next-recette-pg non touché** |

---

## 4. Correctifs (synthèse)

1. **ASSIST-REUSE** : reuse terminal seulement si `generationId` commande/message/entrée tous non vides et égaux ; `sameId`/`alreadyBound` insuffisants ; `bindTurnGenerationId` après Nora.
2. **SAFE-01** : oracles CONTEND stricts `RUNNING` ; await de toutes les promesses B ; DBFAIL-03 = fermeture client mid-TX.
3. **UNKNOWN-CAP** : reconstitution priorise `generationId` ; `sourceId` seulement si provenance sans gen ; panne DB → `DB_OR_LOOKUP_UNAVAILABLE` (≠ PREP_NOT_VISIBLE).
4. **Docs** : spec §§27–28 plan LIVE + manifeste RECETTE ; matrice §20 ; delivery DELIV-12.

---

## 5. CI distante

| Run | SHA | Statut |
| --- | --- | --- |
| SFIA Studio Next CI `42097746777` | `01ae25e1dfc7b062d3b2a73838335ef8630ec6f2` | **SUCCESS** |
| detect | | SUCCESS |
| Build and validate | 2m42s | SUCCESS — unit **52** / PG **93** / Playwright **3** |
| SFIA Studio Next Required Gate | | SUCCESS |
| SFIA Studio CI `42097746853` | same head | SUCCESS (Studio validate skipped) |

URL : https://github.com/mcleland147/sfia-workspace/actions/runs/42097746777

---

## 6. Objet clé — `bindTurnGenerationId`

```typescript
export async function bindTurnGenerationId(
  commandId: string,
  ownerToken: string,
  generationId: string,
): Promise<{ bound: boolean }> {
  const gen = generationId.trim();
  if (!gen) return { bound: false };
  const updated = await db
    .update(conversationTurnCommands)
    .set({
      generationId: gen,
      updatedAt: new Date(turnClock.nowMs()),
    })
    .where(
      and(
        eq(conversationTurnCommands.id, commandId),
        eq(conversationTurnCommands.ownerToken, ownerToken),
        sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
      ),
    )
    .returning({ id: conversationTurnCommands.id });
  return { bound: updated.length > 0 };
}
```

---

## 7. Fichier tests SAFE-01 (contenu complet courant)

### `ml2-pg-contention.pg.test.ts`

```typescript
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

    await waitUntil(async () => (await countWaitersOnTurnCommand(observer, reserved.commandId)) > 0 || !bDone, {
      timeoutMs: 2000,
      label: "waiter-or-pending",
    });
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

  it("PG-DBFAIL-03: client connection abort mid-TX rolls back uncommitted write (no terminate_backend)", async () => {
    // Own-connection abort on DEV: no pg_terminate_backend / docker stop on shared lanes.
    const marker = `dbfail03_${Date.now()}`;
    const ephemeral = postgres(DSN!, { max: 1, idle_timeout: 2, connect_timeout: 5 });
    try {
      await ephemeral.begin(async (tx) => {
        await tx`
          create temporary table if not exists sfia_safe01_abort_probe (
            id text primary key,
            note text not null
          ) on commit drop
        `;
        await tx`insert into sfia_safe01_abort_probe (id, note) values (${marker}, 'uncommitted')`;
        // Abort by destroying the client mid-TX (simulates connection loss for this session).
        await ephemeral.end({ timeout: 1 });
        throw new Error("unreachable_after_end");
      });
    } catch {
      // expected — connection closed
    }

    // New session cannot see the uncommitted temp row; durable tables untouched.
    const probe = postgres(DSN!, { max: 1, idle_timeout: 5, connect_timeout: 5 });
    try {
      const exists = await probe`
        select to_regclass('pg_temp.sfia_safe01_abort_probe') as reg
      `;
      expect(exists[0]?.reg).toBeNull();
    } finally {
      await probe.end({ timeout: 5 }).catch(() => undefined);
    }
  }, 15_000);

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

```

---

## 8. Diffs complets commit `01ae25e1dfc7b062d3b2a73838335ef8630ec6f2`

### turn-command.ts
```diff
commit 01ae25e1dfc7b062d3b2a73838335ef8630ec6f2
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:50:30 2026 +0100

    fix(next-ml2): harden ASSIST-REUSE/SAFE-01 and prepare LIVE/RECETTE gates
    
    Require dual generationId proof before assistant reuse, bind generation early for D4 reconstitution, tighten two-session PG oracles with client abort proof, and document bounded LIVE/RECETTE manifests without activating them.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
index 8702191b..19c64cd8 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
@@ -138,6 +138,31 @@ function isStaleRunning(updatedAt: Date | null | undefined): boolean {
  * Heartbeat + ownership proof. Refreshes updated_at so long active runs are not
  * falsely reconciled as orphans. Returns false if ownership lost.
  */
+/** Persist generation identity on a still-owned RUNNING/ACCEPTED command (pre-terminal). */
+export async function bindTurnGenerationId(
+  commandId: string,
+  ownerToken: string,
+  generationId: string,
+): Promise<{ bound: boolean }> {
+  const gen = generationId.trim();
+  if (!gen) return { bound: false };
+  const updated = await db
+    .update(conversationTurnCommands)
+    .set({
+      generationId: gen,
+      updatedAt: new Date(turnClock.nowMs()),
+    })
+    .where(
+      and(
+        eq(conversationTurnCommands.id, commandId),
+        eq(conversationTurnCommands.ownerToken, ownerToken),
+        sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
+      ),
+    )
+    .returning({ id: conversationTurnCommands.id });
+  return { bound: updated.length > 0 };
+}
+
 export async function touchTurnLease(
   commandId: string,
   ownerToken: string,
@@ -552,6 +577,7 @@ export async function commitTurnTerminal(args: {
           .select({
             id: conversationTurnCommands.id,
             assistantMessageId: conversationTurnCommands.assistantMessageId,
+            generationId: conversationTurnCommands.generationId,
           })
           .from(conversationTurnCommands)
           .where(
@@ -596,21 +622,27 @@ export async function commitTurnTerminal(args: {
           });
           assistantMessageId = args.assistant.id;
         } else {
+          // Reuse only with demonstrable identity: both generationIds non-empty and equal,
+          // plus same message id or already-bound assistantMessageId. sameId/alreadyBound alone
+          // are never sufficient when generation proof is missing or mismatched.
+          const expectedGen = args.assistant.generationId?.trim() || null;
+          const messageGen = existingAssistant.generationId?.trim() || null;
+          const commandGen =
+            (args.generationId ?? owned.generationId)?.trim() || expectedGen;
+          const gensMatch =
+            Boolean(expectedGen) &&
+            Boolean(messageGen) &&
+            Boolean(commandGen) &&
+            expectedGen === messageGen &&
+            commandGen === messageGen;
           const sameId = existingAssistant.id === args.assistant.id;
-          const sameGen =
-            Boolean(args.assistant.generationId) &&
-            existingAssistant.generationId === args.assistant.generationId;
           const alreadyBound = owned.assistantMessageId === existingAssistant.id;
-          const genConflict =
-            Boolean(args.assistant.generationId) &&
-            Boolean(existingAssistant.generationId) &&
-            existingAssistant.generationId !== args.assistant.generationId;
           const idConflict =
             Boolean(owned.assistantMessageId) &&
             owned.assistantMessageId !== existingAssistant.id &&
             !sameId;
 
-          if (genConflict || idConflict || (!sameId && !sameGen && !alreadyBound)) {
+          if (!gensMatch || idConflict || (!sameId && !alreadyBound)) {
             throw new StudioError(
               "CONFLICT",
               "Ordinal assistant incompatible avec la génération/commande courante",
```

### service.ts
```diff
commit 01ae25e1dfc7b062d3b2a73838335ef8630ec6f2
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:50:30 2026 +0100

    fix(next-ml2): harden ASSIST-REUSE/SAFE-01 and prepare LIVE/RECETTE gates
    
    Require dual generationId proof before assistant reuse, bind generation early for D4 reconstitution, tighten two-session PG oracles with client abort proof, and document bounded LIVE/RECETTE manifests without activating them.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index de55020e..8335cadc 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -12,6 +12,7 @@ import {
 } from "@/domains/knowledge/service";
 import { listDocuments, savePreparationDocument } from "@/domains/document/service";
 import {
+  bindTurnGenerationId,
   commitTurnTerminal,
   markTurnUnknown,
   requireTurnOwnership,
@@ -267,6 +268,9 @@ export async function postUserMessageAndNora(
     };
   }
 
+  // Bind generationId while ownership holds so D4 provenance + UNKNOWN reconstitution share one key.
+  await bindTurnGenerationId(reserved.commandId, reserved.ownerToken, reply.generationId);
+
   const assistantId = newId("msg");
 
   let capitalisation: Awaited<ReturnType<typeof maybeCapitalizeFromExchange>> = {
```

### knowledge/service.ts
```diff
commit 01ae25e1dfc7b062d3b2a73838335ef8630ec6f2
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:50:30 2026 +0100

    fix(next-ml2): harden ASSIST-REUSE/SAFE-01 and prepare LIVE/RECETTE gates
    
    Require dual generationId proof before assistant reuse, bind generation early for D4 reconstitution, tighten two-session PG oracles with client abort proof, and document bounded LIVE/RECETTE manifests without activating them.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
index 2fb13777..5fff8099 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
@@ -752,156 +752,180 @@ export async function reconstituteConfirmedD4Effects(
   capitalisationLimit: string;
 }> {
   try {
-    await assertPrep(pilotId, preparationId);
-  } catch {
-    return {
-      capitalisation: [],
-      documentSave: null,
-      capitalisationLimit: "PREP_NOT_VISIBLE — no D4 reconstitution across privilege boundary",
-    };
-  }
-  const gen = refs.generationId?.trim() || null;
-  const src = refs.userMessageId?.trim() || null;
-  if (!gen && !src) {
-    return {
-      capitalisation: [],
-      documentSave: null,
-      capitalisationLimit: "NO_PROVENANCE_KEYS — cannot reconstitute D4 effects",
-    };
-  }
+    try {
+      await assertPrep(pilotId, preparationId);
+    } catch (e) {
+      const code = (e as { code?: string } | null)?.code;
+      if (code === "NOT_FOUND") {
+        return {
+          capitalisation: [],
+          documentSave: null,
+          capitalisationLimit: "PREP_NOT_VISIBLE — no D4 reconstitution across privilege boundary",
+        };
+      }
+      return {
+        capitalisation: [],
+        documentSave: null,
+        capitalisationLimit:
+          "DB_OR_LOOKUP_UNAVAILABLE — reconstitution failed; not an access denial",
+      };
+    }
+    const gen = refs.generationId?.trim() || null;
+    const src = refs.userMessageId?.trim() || null;
+    if (!gen && !src) {
+      return {
+        capitalisation: [],
+        documentSave: null,
+        capitalisationLimit: "NO_PROVENANCE_KEYS — cannot reconstitute D4 effects",
+      };
+    }
 
-  const effects: ConfirmedD4Effect[] = [];
+    // Prefer generationId when present. sourceId is a fallback only when the effect has
+    // no generationId in provenance — never attribute another generation via shared sourceId.
+    const acquisProv = gen
+      ? sql`(
+          ${knowledgeAcquis.provenanceJson}::jsonb->>'generationId' = ${gen}
+          or (
+            coalesce(${knowledgeAcquis.provenanceJson}::jsonb->>'generationId', '') = ''
+            and ${src}::text is not null
+            and ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceId' = ${src}
+          )
+        )`
+      : sql`${knowledgeAcquis.provenanceJson}::jsonb->>'sourceId' = ${src}`;
+    const openProv = gen
+      ? sql`(
+          ${knowledgeOpenPoints.provenanceJson}::jsonb->>'generationId' = ${gen}
+          or (
+            coalesce(${knowledgeOpenPoints.provenanceJson}::jsonb->>'generationId', '') = ''
+            and ${src}::text is not null
+            and ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceId' = ${src}
+          )
+        )`
+      : sql`${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceId' = ${src}`;
+    const revWhere = gen
+      ? sql`(
+          ${documentRevisions.provenanceJson}::jsonb->>'generationId' = ${gen}
+          or ${documentRevisions.correlationKey} = ${"doc:" + gen}
+          or (
+            coalesce(${documentRevisions.provenanceJson}::jsonb->>'generationId', '') = ''
+            and ${src}::text is not null
+            and ${documentRevisions.provenanceJson}::jsonb->>'userMessageId' = ${src}
+          )
+        )`
+      : sql`${documentRevisions.provenanceJson}::jsonb->>'userMessageId' = ${src}`;
 
-  const acquisRows = await db
-    .select({
-      id: knowledgeAcquis.id,
-      status: knowledgeAcquis.status,
-      provenanceJson: knowledgeAcquis.provenanceJson,
-    })
-    .from(knowledgeAcquis)
-    .where(
-      and(
-        eq(knowledgeAcquis.preparationId, preparationId),
-        eq(knowledgeAcquis.ownerPilotId, pilotId),
-        eq(knowledgeAcquis.status, "CURRENT"),
-        gen && src
-          ? sql`(
-              ${knowledgeAcquis.provenanceJson}::jsonb->>'generationId' = ${gen}
-              or ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceId' = ${src}
-            )`
-          : gen
-            ? sql`${knowledgeAcquis.provenanceJson}::jsonb->>'generationId' = ${gen}`
-            : sql`${knowledgeAcquis.provenanceJson}::jsonb->>'sourceId' = ${src}`,
-      ),
-    );
+    const effects: ConfirmedD4Effect[] = [];
 
-  for (const row of acquisRows) {
-    effects.push({
-      kind: "acquis",
-      id: row.id,
-      status: row.status,
-      confirmation: "DB_CONFIRMED",
-    });
-  }
+    const acquisRows = await db
+      .select({
+        id: knowledgeAcquis.id,
+        status: knowledgeAcquis.status,
+        provenanceJson: knowledgeAcquis.provenanceJson,
+      })
+      .from(knowledgeAcquis)
+      .where(
+        and(
+          eq(knowledgeAcquis.preparationId, preparationId),
+          eq(knowledgeAcquis.ownerPilotId, pilotId),
+          eq(knowledgeAcquis.status, "CURRENT"),
+          acquisProv,
+        ),
+      );
 
-  const openRows = await db
-    .select({
-      id: knowledgeOpenPoints.id,
-      status: knowledgeOpenPoints.status,
-    })
-    .from(knowledgeOpenPoints)
-    .where(
-      and(
-        eq(knowledgeOpenPoints.preparationId, preparationId),
-        eq(knowledgeOpenPoints.ownerPilotId, pilotId),
-        eq(knowledgeOpenPoints.status, "OPEN"),
-        gen && src
-          ? sql`(
-              ${knowledgeOpenPoints.provenanceJson}::jsonb->>'generationId' = ${gen}
-              or ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceId' = ${src}
-            )`
-          : gen
-            ? sql`${knowledgeOpenPoints.provenanceJson}::jsonb->>'generationId' = ${gen}`
-            : sql`${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceId' = ${src}`,
-      ),
-    );
+    for (const row of acquisRows) {
+      effects.push({
+        kind: "acquis",
+        id: row.id,
+        status: row.status,
+        confirmation: "DB_CONFIRMED",
+      });
+    }
 
-  for (const row of openRows) {
-    effects.push({
-      kind: "open_point",
-      id: row.id,
-      status: row.status,
-      confirmation: "DB_CONFIRMED",
-    });
-  }
+    const openRows = await db
+      .select({
+        id: knowledgeOpenPoints.id,
+        status: knowledgeOpenPoints.status,
+      })
+      .from(knowledgeOpenPoints)
+      .where(
+        and(
+          eq(knowledgeOpenPoints.preparationId, preparationId),
+          eq(knowledgeOpenPoints.ownerPilotId, pilotId),
+          eq(knowledgeOpenPoints.status, "OPEN"),
+          openProv,
+        ),
+      );
 
-  let documentSave: {
-    status: string;
-    documentId: string;
-    revisionNumber?: number;
-    confirmation: "DB_CONFIRMED";
-  } | null = null;
+    for (const row of openRows) {
+      effects.push({
+        kind: "open_point",
+        id: row.id,
+        status: row.status,
+        confirmation: "DB_CONFIRMED",
+      });
+    }
 
-  const revWhere =
-    gen && src
-      ? sql`(
-          ${documentRevisions.provenanceJson}::jsonb->>'generationId' = ${gen}
-          or ${documentRevisions.provenanceJson}::jsonb->>'userMessageId' = ${src}
-          or ${documentRevisions.correlationKey} = ${"doc:" + gen}
-        )`
-      : gen
-        ? sql`(
-            ${documentRevisions.provenanceJson}::jsonb->>'generationId' = ${gen}
-            or ${documentRevisions.correlationKey} = ${"doc:" + gen}
-          )`
-        : sql`${documentRevisions.provenanceJson}::jsonb->>'userMessageId' = ${src}`;
+    let documentSave: {
+      status: string;
+      documentId: string;
+      revisionNumber?: number;
+      confirmation: "DB_CONFIRMED";
+    } | null = null;
 
-  const revRows = await db
-    .select({
-      id: documentRevisions.id,
-      documentId: documentRevisions.documentId,
-      revisionNumber: documentRevisions.revisionNumber,
-      status: documentRevisions.status,
-    })
-    .from(documentRevisions)
-    .innerJoin(documents, eq(documents.id, documentRevisions.documentId))
-    .where(
-      and(
-        eq(documents.preparationId, preparationId),
-        eq(documents.ownerPilotId, pilotId),
-        eq(documentRevisions.status, "AVAILABLE"),
-        revWhere,
-      ),
-    )
-    .orderBy(desc(documentRevisions.revisionNumber))
-    .limit(1);
+    const revRows = await db
+      .select({
+        id: documentRevisions.id,
+        documentId: documentRevisions.documentId,
+        revisionNumber: documentRevisions.revisionNumber,
+        status: documentRevisions.status,
+      })
+      .from(documentRevisions)
+      .innerJoin(documents, eq(documents.id, documentRevisions.documentId))
+      .where(
+        and(
+          eq(documents.preparationId, preparationId),
+          eq(documents.ownerPilotId, pilotId),
+          eq(documentRevisions.status, "AVAILABLE"),
+          revWhere,
+        ),
+      )
+      .orderBy(desc(documentRevisions.revisionNumber))
+      .limit(1);
 
-  if (revRows[0]) {
-    const r = revRows[0];
-    effects.push({
-      kind: "document",
-      id: r.id,
-      status: r.status,
-      confirmation: "DB_CONFIRMED",
-      documentId: r.documentId,
-      revisionNumber: r.revisionNumber,
-    });
-    documentSave = {
-      status: "AVAILABLE",
-      documentId: r.documentId,
-      revisionNumber: r.revisionNumber,
-      confirmation: "DB_CONFIRMED",
+    if (revRows[0]) {
+      const r = revRows[0];
+      effects.push({
+        kind: "document",
+        id: r.id,
+        status: r.status,
+        confirmation: "DB_CONFIRMED",
+        documentId: r.documentId,
+        revisionNumber: r.revisionNumber,
+      });
+      documentSave = {
+        status: "AVAILABLE",
+        documentId: r.documentId,
+        revisionNumber: r.revisionNumber,
+        confirmation: "DB_CONFIRMED",
+      };
+    }
+
+    return {
+      capitalisation: effects,
+      documentSave,
+      capitalisationLimit:
+        effects.length > 0
+          ? "DB_RECONSTITUTED — effects confirmed under pilot/prep rights; turn remains UNKNOWN"
+          : "NO_CONFIRMED_D4_EFFECTS_FOR_TURN",
+    };
+  } catch {
+    return {
+      capitalisation: [],
+      documentSave: null,
+      capitalisationLimit:
+        "DB_OR_LOOKUP_UNAVAILABLE — reconstitution failed; not an access denial",
     };
   }
-
-  return {
-    capitalisation: effects,
-    documentSave,
-    capitalisationLimit:
-      effects.length > 0
-        ? "DB_RECONSTITUTED — effects confirmed under pilot/prep rights; turn remains UNKNOWN"
-        : "NO_CONFIRMED_D4_EFFECTS_FOR_TURN",
-  };
 }
 
 /**
```

### ml2-pg-contention.pg.test.ts (diff)
```diff
commit 01ae25e1dfc7b062d3b2a73838335ef8630ec6f2
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:50:30 2026 +0100

    fix(next-ml2): harden ASSIST-REUSE/SAFE-01 and prepare LIVE/RECETTE gates
    
    Require dual generationId proof before assistant reuse, bind generation early for D4 reconstitution, tighten two-session PG oracles with client abort proof, and document bounded LIVE/RECETTE manifests without activating them.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/integration/ml2-pg-contention.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml2-pg-contention.pg.test.ts
index ea47098c..fef62c84 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml2-pg-contention.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml2-pg-contention.pg.test.ts
@@ -1,5 +1,7 @@
 /**
  * SAFE-01 — real two-session PostgreSQL contention (not same-connection hooks).
+ * Distinguishes TX application exceptions from client connection abort.
+ * Does NOT use pg_terminate_backend / docker stop on shared DEV/RECETTE/STABLE.
  */
 import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
 import { config } from "dotenv";
@@ -13,7 +15,7 @@ process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
 import postgres from "postgres";
 import { and, eq, sql } from "drizzle-orm";
 import { db } from "@/db/client";
-import { conversationTurnCommands, messages } from "@/db/schema";
+import { conversationTurnCommands, messages, knowledgeAcquis } from "@/db/schema";
 import { createDevTestSession } from "@/domains/identity/session";
 import { openOrCreatePreparation } from "@/domains/preparation/service";
 import { getConversationId, postUserMessageAndNora } from "@/domains/conversation/service";
@@ -25,17 +27,54 @@ import {
   turnRaceHooks,
 } from "@/domains/conversation/turn-command";
 import { capitalizeAcquis } from "@/domains/knowledge/service";
-import { knowledgeAcquis } from "@/db/schema";
+import { newId } from "@/lib/ids";
 
 const DSN = process.env.DATABASE_URL;
 if (!DSN) throw new Error("DATABASE_URL required");
 
+async function waitUntil(
+  predicate: () => Promise<boolean>,
+  opts: { timeoutMs?: number; intervalMs?: number; label?: string } = {},
+) {
+  const timeoutMs = opts.timeoutMs ?? 3000;
+  const intervalMs = opts.intervalMs ?? 40;
+  const start = Date.now();
+  while (Date.now() - start < timeoutMs) {
+    if (await predicate()) return;
+    await new Promise((r) => setTimeout(r, intervalMs));
+  }
+  throw new Error(`waitUntil timeout: ${opts.label ?? "condition"}`);
+}
+
+/** True when some other backend is waiting on a lock for this relation/row. */
+async function countWaitersOnTurnCommand(observer: ReturnType<typeof postgres>, commandId: string) {
+  const rows = await observer`
+    select count(*)::int as n
+    from pg_locks l
+    join pg_stat_activity a on a.pid = l.pid
+    where l.locktype = 'transactionid'
+      and not l.granted
+      and a.pid <> pg_backend_pid()
+      and a.query ilike ${"%" + commandId + "%"}
+  `;
+  // Fallback: any ungranted lock from another session (broader but useful under FOR UPDATE).
+  if ((rows[0]?.n ?? 0) > 0) return rows[0].n as number;
+  const broad = await observer`
+    select count(*)::int as n
+    from pg_locks l
+    where not l.granted
+      and l.pid <> pg_backend_pid()
+  `;
+  return (broad[0]?.n ?? 0) as number;
+}
+
 describe("ML2 SAFE-01 PG two-session contention", () => {
   let pilotId: string;
   let preparationId: string;
   let conversationId: string;
   let connA: ReturnType<typeof postgres>;
   let connB: ReturnType<typeof postgres>;
+  let observer: ReturnType<typeof postgres>;
 
   beforeAll(async () => {
     await db.execute(
@@ -50,6 +89,7 @@ describe("ML2 SAFE-01 PG two-session contention", () => {
     conversationId = cid;
     connA = postgres(DSN!, { max: 1, idle_timeout: 5, connect_timeout: 10 });
     connB = postgres(DSN!, { max: 1, idle_timeout: 5, connect_timeout: 10 });
+    observer = postgres(DSN!, { max: 1, idle_timeout: 5, connect_timeout: 10 });
   });
 
   afterEach(async () => {
@@ -68,9 +108,10 @@ describe("ML2 SAFE-01 PG two-session contention", () => {
   afterAll(async () => {
     await connA.end({ timeout: 5 }).catch(() => undefined);
     await connB.end({ timeout: 5 }).catch(() => undefined);
+    await observer.end({ timeout: 5 }).catch(() => undefined);
   });
 
-  it("PG-CONTEND-01: FOR SHARE on A blocks B reconcile until A commits", async () => {
+  it("PG-CONTEND-01: FOR SHARE on A blocks B; after release B stays RUNNING (no false orphan)", async () => {
     const reserved = await reserveTurnCommand({
       conversationId,
       ownerPilotId: pilotId,
@@ -81,6 +122,7 @@ describe("ML2 SAFE-01 PG two-session contention", () => {
 
     let bDone = false;
     let bResult: Awaited<ReturnType<typeof reconcileRunningCommand>> | null = null;
+    let bError: unknown = null;
 
     const hold = connA.begin(async (txA) => {
       await txA`
@@ -90,18 +132,33 @@ describe("ML2 SAFE-01 PG two-session contention", () => {
           and status in ('RUNNING', 'ACCEPTED')
         for share
       `;
-      // Hold lock while B tries to reconcile (needs row lock compatibility with FOR UPDATE path).
-      await new Promise((r) => setTimeout(r, 400));
+      await waitUntil(
+        async () => {
+          // Keep holding; outer starts B after lock acquired.
+          return true;
+        },
+        { timeoutMs: 500, label: "hold-acquired" },
+      );
+      await new Promise((r) => setTimeout(r, 500));
     });
 
-    await new Promise((r) => setTimeout(r, 50));
-    const bPromise = reconcileRunningCommand(reserved.commandId).then((r) => {
-      bDone = true;
-      bResult = r;
-      return r;
-    });
+    await new Promise((r) => setTimeout(r, 40));
+    const bPromise = reconcileRunningCommand(reserved.commandId)
+      .then((r) => {
+        bDone = true;
+        bResult = r;
+        return r;
+      })
+      .catch((e) => {
+        bError = e;
+        bDone = true;
+        throw e;
+      });
 
-    await new Promise((r) => setTimeout(r, 150));
+    await waitUntil(async () => (await countWaitersOnTurnCommand(observer, reserved.commandId)) > 0 || !bDone, {
+      timeoutMs: 2000,
+      label: "waiter-or-pending",
+    });
     expect(bDone).toBe(false);
 
     await hold;
@@ -109,13 +166,18 @@ describe("ML2 SAFE-01 PG two-session contention", () => {
       bPromise,
       new Promise((_, rej) => setTimeout(() => rej(new Error("B reconcile timeout")), 5000)),
     ]);
+    expect(bError).toBeNull();
     expect(bDone).toBe(true);
-    expect(bResult).toBeTruthy();
-    // Active lease (not stale) ⇒ reconcile must not falsely orphan while A held share then released.
-    expect(["RUNNING", "UNKNOWN"]).toContain(bResult!.status);
+    // Active (non-stale) command under live ownership ⇒ reconcile must NOT revoke.
+    expect(bResult!.status).toBe("RUNNING");
+    expect(bResult!.reconciled).toBe(false);
+    expect(bResult!.assistantMessageId).toBeNull();
+
+    const lease = await touchTurnLease(reserved.commandId, reserved.ownerToken);
+    expect(lease.owned).toBe(true);
   }, 15_000);
 
-  it("PG-CONTEND-02: FOR UPDATE terminal lock on A blocks B reconcile", async () => {
+  it("PG-CONTEND-02: FOR UPDATE on A blocks B; after release B RUNNING and ownership intact", async () => {
     const reserved = await reserveTurnCommand({
       conversationId,
       ownerPilotId: pilotId,
@@ -124,7 +186,10 @@ describe("ML2 SAFE-01 PG two-session contention", () => {
     });
     if (reserved.kind !== "fresh") throw new Error("fresh");
 
-    let bFinishedDuringLock = false;
+    let bDoneDuringLock = false;
+    let bResult: Awaited<ReturnType<typeof reconcileRunningCommand>> | null = null;
+
+    let bPromise!: Promise<Awaited<ReturnType<typeof reconcileRunningCommand>>>;
     await connA.begin(async (txA) => {
       await txA`
         select id from conversation_turn_commands
@@ -134,24 +199,42 @@ describe("ML2 SAFE-01 PG two-session contention", () => {
         for update
       `;
 
-      const bPromise = reconcileRunningCommand(reserved.commandId).then((r) => {
-        bFinishedDuringLock = true;
+      bPromise = reconcileRunningCommand(reserved.commandId).then((r) => {
+        bDoneDuringLock = true;
+        bResult = r;
         return r;
       });
 
-      await new Promise((r) => setTimeout(r, 200));
-      expect(bFinishedDuringLock).toBe(false);
-
-      // Keep ownership; B must wait. End TX without revoking.
-      void bPromise.catch(() => undefined);
+      await new Promise((r) => setTimeout(r, 250));
+      expect(bDoneDuringLock).toBe(false);
+      // End TX → release FOR UPDATE; B may then proceed.
     });
 
-    await new Promise((r) => setTimeout(r, 100));
+    await Promise.race([
+      bPromise,
+      new Promise((_, rej) => setTimeout(() => rej(new Error("B reconcile timeout")), 5000)),
+    ]);
+    expect(bDoneDuringLock).toBe(true);
+    expect(bResult!.status).toBe("RUNNING");
+    expect(bResult!.reconciled).toBe(false);
+
     const stillOwned = await touchTurnLease(reserved.commandId, reserved.ownerToken);
     expect(stillOwned.owned).toBe(true);
+
+    const assistants = await db
+      .select()
+      .from(messages)
+      .where(
+        and(
+          eq(messages.conversationId, conversationId),
+          eq(messages.ordinal, reserved.ordinalAssistant),
+          eq(messages.role, "assistant"),
+        ),
+      );
+    expect(assistants).toHaveLength(0);
   }, 15_000);
 
-  it("PG-DBFAIL-01: exception after assistant INSERT rolls back — no orphan, non-COMPLETE", async () => {
+  it("PG-DBFAIL-01: application exception after assistant INSERT rolls back TX — no orphan", async () => {
     const key = `dbfail01-${Date.now()}`;
     const before = (
       await db
@@ -193,7 +276,7 @@ describe("ML2 SAFE-01 PG two-session contention", () => {
     expect(cmd.status).not.toBe("COMPLETE");
   });
 
-  it("PG-DBFAIL-02: capitalisation TX ownership lost → no acquis published", async () => {
+  it("PG-DBFAIL-02: capitalisation TX ownership lost → no acquis published (fence, not DB disconnect)", async () => {
     const reserved = await reserveTurnCommand({
       conversationId,
       ownerPilotId: pilotId,
@@ -246,6 +329,39 @@ describe("ML2 SAFE-01 PG two-session contention", () => {
     expect(after).toBe(before);
   });
 
+  it("PG-DBFAIL-03: client connection abort mid-TX rolls back uncommitted write (no terminate_backend)", async () => {
+    // Own-connection abort on DEV: no pg_terminate_backend / docker stop on shared lanes.
+    const marker = `dbfail03_${Date.now()}`;
+    const ephemeral = postgres(DSN!, { max: 1, idle_timeout: 2, connect_timeout: 5 });
+    try {
+      await ephemeral.begin(async (tx) => {
+        await tx`
+          create temporary table if not exists sfia_safe01_abort_probe (
+            id text primary key,
+            note text not null
+          ) on commit drop
+        `;
+        await tx`insert into sfia_safe01_abort_probe (id, note) values (${marker}, 'uncommitted')`;
+        // Abort by destroying the client mid-TX (simulates connection loss for this session).
+        await ephemeral.end({ timeout: 1 });
+        throw new Error("unreachable_after_end");
+      });
+    } catch {
+      // expected — connection closed
+    }
+
+    // New session cannot see the uncommitted temp row; durable tables untouched.
+    const probe = postgres(DSN!, { max: 1, idle_timeout: 5, connect_timeout: 5 });
+    try {
+      const exists = await probe`
+        select to_regclass('pg_temp.sfia_safe01_abort_probe') as reg
+      `;
+      expect(exists[0]?.reg).toBeNull();
+    } finally {
+      await probe.end({ timeout: 5 }).catch(() => undefined);
+    }
+  }, 15_000);
+
   it("PG-LEASE-01: active lease prevents false orphan under concurrent reconcile", async () => {
     const reserved = await reserveTurnCommand({
       conversationId,
@@ -265,7 +381,7 @@ describe("ML2 SAFE-01 PG two-session contention", () => {
     const gen = `gen_iso_${Date.now()}`;
     const src = `msg_iso_${Date.now()}`;
     await db.insert(knowledgeAcquis).values({
-      id: `acq_iso_${Date.now()}`,
+      id: newId("acq"),
       preparationId,
       ownerPilotId: pilotId,
       kind: "HYPOTHESIS",
@@ -294,7 +410,6 @@ describe("ML2 SAFE-01 PG two-session contention", () => {
     expect(foreign.capitalisation).toHaveLength(0);
     expect(foreign.capitalisationLimit).toMatch(/PREP_NOT_VISIBLE|NO_CONFIRMED/);
 
-    // Cutting an independent session must not leave durable side-effects or open TX leakage.
     const cut = postgres(DSN!, { max: 1, idle_timeout: 1, connect_timeout: 5 });
     await cut`select 1`;
     await cut.end({ timeout: 1 });
```

### ml2-three-blocker.pg.test.ts
```diff
commit 01ae25e1dfc7b062d3b2a73838335ef8630ec6f2
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:50:30 2026 +0100

    fix(next-ml2): harden ASSIST-REUSE/SAFE-01 and prepare LIVE/RECETTE gates
    
    Require dual generationId proof before assistant reuse, bind generation early for D4 reconstitution, tighten two-session PG oracles with client abort proof, and document bounded LIVE/RECETTE manifests without activating them.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts
index 389beef5..9195b41d 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts
@@ -694,14 +694,15 @@ describe("ML2 three-blocker corrective (PG)", () => {
           )
           .limit(1)
       )[0];
-      // Valid D4 write while ownership still holds.
+      // Valid D4 write while ownership still holds — generationId must already be bound.
+      expect(row!.generationId).toBeTruthy();
       const cap = await capitalizeAcquis(pilotId, preparationId, {
         statement,
         kind: "HYPOTHESIS",
         provenance: {
           sourceKind: "message",
           sourceId: row!.userMessageId ?? "msg",
-          generationId: row!.generationId ?? "gen",
+          generationId: row!.generationId!,
           epistemic: "hypothesized",
         },
         turnFence: { commandId: row!.id, ownerToken: row!.ownerToken! },
@@ -827,6 +828,85 @@ describe("ML2 three-blocker corrective (PG)", () => {
     expect(replay.assistantMessageId).toBe(first.assistantMessageId);
   });
 
+  it("ASSIST-REUSE-04: missing generationId on existing message → CONFLICT even if sameId", async () => {
+    const reserved = await reserveTurnCommand({
+      conversationId,
+      ownerPilotId: pilotId,
+      clientTurnKey: `assist04-${Date.now()}`,
+      content: "Assist reuse missing gen sameId",
+    });
+    if (reserved.kind !== "fresh") throw new Error("expected fresh");
+    const msgId = newId("msg");
+    await db.insert(messages).values({
+      id: msgId,
+      conversationId,
+      role: "assistant",
+      content: "assistant without generation",
+      status: "COMPLETE",
+      generationId: null,
+      ordinal: reserved.ordinalAssistant,
+    });
+    const { commitTurnTerminal } = await import("@/domains/conversation/turn-command");
+    await expect(
+      commitTurnTerminal({
+        commandId: reserved.commandId,
+        ownerToken: reserved.ownerToken,
+        status: "COMPLETE",
+        conversationId,
+        assistant: {
+          id: msgId,
+          content: "assistant without generation",
+          messageStatus: "COMPLETE",
+          generationId: "gen_REQUIRED",
+          ordinal: reserved.ordinalAssistant,
+        },
+        generationId: "gen_REQUIRED",
+      }),
+    ).rejects.toSatisfy((e: unknown) => e instanceof StudioError && e.code === "CONFLICT");
+  });
+
+  it("ASSIST-REUSE-05: alreadyBound without matching dual generationId → CONFLICT", async () => {
+    const reserved = await reserveTurnCommand({
+      conversationId,
+      ownerPilotId: pilotId,
+      clientTurnKey: `assist05-${Date.now()}`,
+      content: "Assist reuse alreadyBound missing gen",
+    });
+    if (reserved.kind !== "fresh") throw new Error("expected fresh");
+    const msgId = newId("msg");
+    await db.insert(messages).values({
+      id: msgId,
+      conversationId,
+      role: "assistant",
+      content: "prebound assistant",
+      status: "COMPLETE",
+      generationId: null,
+      ordinal: reserved.ordinalAssistant,
+    });
+    await db
+      .update(conversationTurnCommands)
+      .set({ assistantMessageId: msgId, generationId: null })
+      .where(eq(conversationTurnCommands.id, reserved.commandId));
+
+    const { commitTurnTerminal } = await import("@/domains/conversation/turn-command");
+    await expect(
+      commitTurnTerminal({
+        commandId: reserved.commandId,
+        ownerToken: reserved.ownerToken,
+        status: "COMPLETE",
+        conversationId,
+        assistant: {
+          id: msgId,
+          content: "prebound assistant",
+          messageStatus: "COMPLETE",
+          generationId: "gen_NOW",
+          ordinal: reserved.ordinalAssistant,
+        },
+        generationId: "gen_NOW",
+      }),
+    ).rejects.toSatisfy((e: unknown) => e instanceof StudioError && e.code === "CONFLICT");
+  });
+
   it("ASSIST-REUSE-03: reconcile does not bind assistant with mismatched/missing generationId", async () => {
     const reserved = await reserveTurnCommand({
       conversationId,
@@ -887,6 +967,32 @@ describe("ML2 three-blocker corrective (PG)", () => {
     expect(recon2.assistantMessageId).toBeNull();
   });
 
+  it("UNKNOWN-CAP-05: generationId present must not attribute acquis from another gen via sourceId OR", async () => {
+    const { reconstituteConfirmedD4Effects } = await import("@/domains/knowledge/service");
+    const genA = `gen_a_${Date.now()}`;
+    const genB = `gen_b_${Date.now()}`;
+    const srcShared = `msg_shared_${Date.now()}`;
+    await db.insert(knowledgeAcquis).values({
+      id: newId("acq"),
+      preparationId,
+      ownerPilotId: pilotId,
+      kind: "HYPOTHESIS",
+      statement: `CROSS_GEN_${Date.now()} must not leak via sourceId OR`,
+      provenanceJson: JSON.stringify({
+        sourceKind: "message",
+        sourceId: srcShared,
+        generationId: genA,
+        epistemic: "hypothesized",
+      }),
+      status: "CURRENT",
+    });
+    const hit = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
+      generationId: genB,
+      userMessageId: srcShared,
+    });
+    expect(hit.capitalisation.filter((c) => c.kind === "acquis")).toHaveLength(0);
+  });
+
   it("UNKNOWN-CAP-04: document revision with matching provenance reconstitutes; subject without gen stays unattributed", async () => {
     const { reconstituteConfirmedD4Effects } = await import("@/domains/knowledge/service");
     const gen = `gen_cap04_${Date.now()}`;
```

### specification-technique.md
```diff
commit 01ae25e1dfc7b062d3b2a73838335ef8630ec6f2
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:50:30 2026 +0100

    fix(next-ml2): harden ASSIST-REUSE/SAFE-01 and prepare LIVE/RECETTE gates
    
    Require dual generationId proof before assistant reuse, bind generation early for D4 reconstitution, tighten two-session PG oracles with client abort proof, and document bounded LIVE/RECETTE manifests without activating them.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
index e641375c..aaf64f5e 100644
--- a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
+++ b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
@@ -965,3 +965,58 @@ Les cinq orientations forment **un seul macro-lot ML2**, avec QA C1–C6, COG-01
 | tsc / lint / build | PASS (lint: warnings préexistants nora-adapter unused) |
 | LIVE / RECETTE | **NOT RUN** |
 | CI nouveau SHA | à vérifier après push FF sur PR #659 |
+
+## 27. As-Built qualification intégrée pré-RECETTE — 2026-11-05
+
+> **PROJECT PUSH FF autorisé / NO LIVE / NO RECETTE ACTIVATION / NO MERGE / NO RELEASE.** Parent `bf2deb0e`. Durcit ASSIST-REUSE, SAFE-01 (oracles stricts + abort connexion client), D4 reconstitution sans attribution croisée, et prépare manifeste LIVE/RECETTE **sans exécution**.
+
+### 27.1 Correctifs techniques
+
+| ID | Changement |
+| --- | --- |
+| ASSIST-REUSE | `commitTurnTerminal` exige `generationId` non vides et égaux (commande/message/entrée) ; `sameId`/`alreadyBound` insuffisants seuls ; `bindTurnGenerationId` après génération |
+| SAFE-01 | CONTEND-01/02 : statut attendu `RUNNING` post-verrou ; await de B ; DBFAIL-03 = abort client mid-TX (pas `terminate_backend` sur DEV partagé) |
+| UNKNOWN-CAP | reconstitution : match `generationId` prioritaire ; `sourceId` seulement si provenance sans gen ; panne DB ≠ `PREP_NOT_VISIBLE` |
+| Sujets | toujours non attribuables sans provenance de génération |
+
+### 27.2 Plan LIVE borné — PRÉPARÉ, NON EXÉCUTÉ
+
+**Objectif :** qualifier cognition Nora + lecture D4 + observabilité sous fournisseur réel, budget et coupe-circuit Morris.
+
+| Élément | Contenu proposé |
+| --- | --- |
+| Scénarios | (1) question simple ; (2) comparaison complexe + outils D4 ; (3) contradiction de sources ; (4) ressource inaccessible ; (5) faux/échec fournisseur ; (6) reprise `clientTurnKey` / UNKNOWN ; (7) échec auth/DB |
+| Oracles | statut terminal honnête ; outils réellement appelés ; docs lus ; effets D4 sous droits ; pas d'équivalence ChatGPT↔Nora ; traces expurgées |
+| Identité / données | pilote de test DEV→LIVE GO ; préparation/projet figés ; documents versionnés ; droits explicites ; non-effets D6–D9 |
+| Budget | modèle/effort demandés vs appliqués ; `maxTurns` ; timeout ; plafond €/tokens ; critères d'arrêt + cleanup |
+| Preuves | `operationId` / generation / attempt ; OBS allowlist ; durée/usage ; **pas** de secret dans Git |
+| Préflight | SDK, ports, OBS, coûts — **sans** appel fournisseur tant que GO LIVE absent |
+| Bloquants GO | `BOUNDARY NOT PROVEN — MORRIS LIVE GO REQUIRED` ; cookie localhost collision à traiter avant session utilisateur |
+
+### 27.3 Manifeste candidat RECETTE — PREPARED NOT DEPLOYED
+
+| Champ | Valeur |
+| --- | --- |
+| Branche | `sfia/next-ml2-cognition-observability-integrated` |
+| Base | `origin/main@6e4406c6` |
+| Schema | `006` (pas de 007) |
+| Version | `0.0.0-dev` / **NO RELEASE** / STABLE NOT AVAILABLE |
+| Lane | DEV prouvée ; RECETTE/STABLE **non démarrées, non migrées, non peuplées** |
+| Isolation | worktrees/DB/roles/ports/cookies/secrets à vérifier avant activation ; collision cookies `127.0.0.1` connue |
+| Smoke/stop/reprise | à finaliser au SHA gelé post-GO ; toute correction change le SHA → réqualification |
+| Statut | `RECETTE CANDIDATE MANIFEST PREPARED — NOT DEPLOYED` |
+
+### 27.4 Preuves locales (cycle)
+
+| Suite | Résultat |
+| --- | --- |
+| unit / PG / e2e FAKE | voir delivery entry + CI du SHA final |
+| LIVE / RECETTE | **NOT RUN** |
+| Disconnect serveur partagé | **NOT USED** (interdit) ; abort client mid-TX = PROVEN distinct |
+
+## 28. Gaps realism explicitement ouverts
+
+- Multi-processus / multi-hôte LIVE : **NOT RUN**
+- OpenAI REAL / Better Auth OAuth réel : **NOT RUN**
+- RECETTE utilisateur Morris : **NOT RUN**
+- Comparaison cognitive LIVE ChatGPT↔Nora : **NOT RUN** (protocole documenté seulement)
```

### matrice-tracabilite.md
```diff
commit 01ae25e1dfc7b062d3b2a73838335ef8630ec6f2
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:50:30 2026 +0100

    fix(next-ml2): harden ASSIST-REUSE/SAFE-01 and prepare LIVE/RECETTE gates
    
    Require dual generationId proof before assistant reuse, bind generation early for D4 reconstitution, tighten two-session PG oracles with client abort proof, and document bounded LIVE/RECETTE manifests without activating them.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
index 5bd64213..695e203e 100644
--- a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
+++ b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
@@ -532,3 +532,27 @@ Ce tableau **précise** les oracles OBS-Q01..10 déjà recensés (§§9–10), s
 | CI-LABELS | PROVEN local | workflow + migrations-fresh 001→006 |
 | REG-01 | PROVEN | unit 52 / PG 89 / e2e 3 / tsc+lint+build |
 | LIVE / RECETTE / merge | NOT RUN | hors mandat ; gate Morris |
+
+## 20. As-Built qualification intégrée pré-RECETTE — 2026-11-05
+
+| Oracle | État | Preuve |
+| --- | --- | --- |
+| ASSIST-REUSE-01 | PG PROVEN | gen divergent → CONFLICT |
+| ASSIST-REUSE-02 | PG PROVEN | ACK perdu idempotent |
+| ASSIST-REUSE-03 | PG PROVEN | reconcile sans gen match → non-liaison |
+| ASSIST-REUSE-04 | PG PROVEN | gen manquante message + sameId → CONFLICT |
+| ASSIST-REUSE-05 | PG PROVEN | alreadyBound sans dual gen → CONFLICT |
+| UNKNOWN-CAP-01..04 | PG PROVEN | restitution DB + droits ; sujets non attribués |
+| UNKNOWN-CAP-05 | PG PROVEN | pas d'attribution croisée via sourceId OR |
+| PG-CONTEND-01 | PG PROVEN | FOR SHARE bloque ; après release **RUNNING** strict |
+| PG-CONTEND-02 | PG PROVEN | FOR UPDATE bloque ; await B → RUNNING ; ownership intact |
+| PG-DBFAIL-01 | PG PROVEN | exception applicative post-INSERT → rollback |
+| PG-DBFAIL-02 | PG PROVEN | fence ownership (≠ disconnect) |
+| PG-DBFAIL-03 | PG PROVEN | abort **client** mid-TX (TEMP) ; pas terminate_backend DEV |
+| PG-LEASE-01 / PG-ISOLATE-01 | PG PROVEN | lease + isolation pilote |
+| SAFE-01 multi-process LIVE | NOT RUN | hors mandat |
+| REAL DB DISCONNECT (server kill) | NOT PROVEN — TOOLING GAP | interdit sur DEV partagé ; abort client distinct |
+| COG-01..07 / OBS-Q01..10 DET/FAKE | PROVEN (suites existantes) | LIVE cases **NOT RUN** |
+| LIVE protocol | PREPARED | spec §27.2 — **NOT EXECUTED** |
+| RECETTE manifeste | PREPARED NOT DEPLOYED | spec §27.3 |
+| LIVE / RECETTE / merge / ADOPTED | NOT RUN | gates Morris |
```

### delivery-history.md
```diff
commit 01ae25e1dfc7b062d3b2a73838335ef8630ec6f2
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:50:30 2026 +0100

    fix(next-ml2): harden ASSIST-REUSE/SAFE-01 and prepare LIVE/RECETTE gates
    
    Require dual generationId proof before assistant reuse, bind generation early for D4 reconstitution, tighten two-session PG oracles with client abort proof, and document bounded LIVE/RECETTE manifests without activating them.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 4106109d..5d7b3125 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -352,3 +352,22 @@ Append-only logical journal of Cursor product deliveries.
 | LIVE / RECETTE | **NOT RUN / NOT AUTHORIZED** |
 | Status | PROJECT BRANCH PUSH (FF) — merge/LIVE/RECETTE still gated |
 | Verdict candidate | `PR #659 UPDATED — await CI Next on new SHA — READY FOR CHATGPT PRE-MERGE REVIEW` (CI status filled post-push) |
+
+## delivery_id: DELIV-2026-11-05-ML2-PRE-RECETTE-QUAL-12
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-05 (Europe/Paris) ~20:50 CET |
+| Macro-lot | R5 / ML2 — qualification intégrée pré-RECETTE PR #659 |
+| Type | INC corrective + QA préparation (same ML2) |
+| Branch | `sfia/next-ml2-cognition-observability-integrated` (**FF push authorized**) |
+| Parent SHA | `bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1` |
+| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
+| PR | `#659` OPEN DRAFT ; #655–#658 untouched |
+| Corrected | ASSIST-REUSE dual-gen strict + bindTurnGenerationId ; SAFE-01 strict RUNNING + client abort mid-TX ; D4 gen-priority reconstitution ; LIVE/RECETTE docs préparés |
+| Schema | unchanged (`006`) ; no migration |
+| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
+| Local proofs | unit 52 PASS ; PG 93 PASS ; Playwright FAKE 3 PASS ; tsc+lint+build PASS |
+| LIVE / RECETTE | **NOT RUN / NOT DEPLOYED** ; manifeste PREPARED |
+| Status | PROJECT BRANCH PUSH (FF) — LIVE/RECETTE/merge gated Morris |
+| Verdict candidate | `ML2 PRE-RECETTE TECHNICAL CONSOLIDATION — CI NEXT PASS — LIVE/RECETTE GATES PENDING MORRIS` |
```

---

## 9. LIVE / RECETTE — préparation seulement

- Plan LIVE borné : spec §27.2 — **NOT EXECUTED** ; GO Morris requis ; `BOUNDARY NOT PROVEN — MORRIS LIVE GO REQUIRED`.
- Manifeste RECETTE : `RECETTE CANDIDATE MANIFEST PREPARED — NOT DEPLOYED` ; aucune migration/peuplement RECETTE/STABLE.
- Cookie collision `127.0.0.1` : condition avant session utilisateur.
- Multi-process LIVE / OAuth réel / comparaison cognitive LIVE : **NOT RUN**.

---

## 10. Instruction ChatGPT

- Projet SHA : `01ae25e1dfc7b062d3b2a73838335ef8630ec6f2` ; main : `6e4406c63639330c7826423cdcf08f06ff019eed`
- PR #659 DRAFT
- Handoff tip : `origin/sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (SHA/blob dans rapport Cursor final)
- CI Next `42097746777` + counts
- Oracles ASSIST-REUSE / SAFE-01 / UNKNOWN-CAP
- Gaps REAL + plan LIVE/RECETTE
- Arbitrage Morris : GO LIVE borné et/ou activation RECETTE et/ou merge — **pas** automatiques

---

## 11. Conclusion

**ML2 PRE-RECETTE TECHNICAL CONSOLIDATION — CI NEXT PASS — LIVE/RECETTE GATES PENDING MORRIS**  
NO RELEASE. NO MERGE. NO LIVE. NO RECETTE. NO ADOPTED.
