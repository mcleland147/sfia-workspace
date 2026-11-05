# SFIA Review Pack FULL — R5/ML2 Consolidation pré-merge PR #659

**Date/heure :** 2026-11-05 20:32:43 +0100 (Europe/Paris)  
**Mandat :** `sfia-next-r5-ml2-consolidation-premerge-pr659-critical-20261105.md`  
**Exécutant :** Cursor (Composer)  
**Profil :** CRITICAL — consolidation pré-merge (UNKNOWN-CAP / ASSIST-REUSE / SAFE-01 / CI-LABELS)  
**Produit version :** `0.0.0-dev` / **NO RELEASE** / STABLE **NOT AVAILABLE**  
**Verdict candidat :** `PR #659 UPDATED — CI NEXT PASS — READY FOR CHATGPT PRE-MERGE REVIEW`  
**Limites :** LIVE / RECETTE / merge / ADOPTED = **NOT RUN / NOT AUTHORIZED**. SAFE-01 prouvé en DEV à deux sessions PG ; runtime multi-processus LIVE réel **NOT RUN**.

---

## 1. Pré-check Git Truth (exact)

| Champ | Valeur |
| --- | --- |
| Dépôt | `mcleland147/sfia-workspace` |
| Branche | `sfia/next-ml2-cognition-observability-integrated` |
| HEAD initial (attendu) | `df7357873b487d48e32af5de89995bcfbf720210` |
| HEAD final local+remote | `bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1` |
| `origin/main` | `6e4406c63639330c7826423cdcf08f06ff019eed` |
| merge-base(main, HEAD) | `6e4406c63639330c7826423cdcf08f06ff019eed` |
| Push | FF `df735787..bf2deb0e` — **PAS** de force-push |
| PR #659 | OPEN / **DRAFT** / base=`main` / head=`bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1` / https://github.com/mcleland147/sfia-workspace/pull/659 |
| PR #655 | OPEN intact head=`08b89360ea7132f09f1e1d777a7c9e17612b84fb` |
| PR #656 | OPEN intact head=`a0d805e9967378ccdcc2093cd95c8f9881fc3503` |
| PR #657 | OPEN intact head=`0e83824fd059d0074375a698b71e8dce53860fd9` |
| PR #658 | OPEN intact head=`806bc17d814cf6cb3b574d164e1a196037d6623d` |
| Untracked préservés (non commit) | `web/public/*.svg` (5) ; `.tmp-sfia-review/` local |

CKC candidate : **CANDIDATE ABSENT — FALLBACK SFIA v2.6**.

---

## 2. Sources lues (branche candidate vs baseline)

Processus : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`, `prompts/templates/sfia-cycle-execution-template.md` SFIA v2.6.  
Gouvernance Next : SEF, roadmap, décision trajectoire R5/ML2, ENV-01, product-versioning, naming.  
Contrats : D3/D4/D8, R4, R5 §14, ML2 spécification/matrice, delivery-history.  
Code : `conversation/{service,turn-command}.ts`, `knowledge/service.ts`, tests integration, workflow Next CI.

---

## 3. Oracles (aucune preuve inventée)

| Oracle | État | Preuve |
| --- | --- | --- |
| UNKNOWN-CAP-01 | **PROVEN** (PG local+CI) | CAP-FENCE-04 : acquis CURRENT + refs dans payload UNKNOWN |
| UNKNOWN-CAP-02 | **PROVEN** | replay `clientTurnKey` reconstitue mêmes refs, status UNKNOWN |
| UNKNOWN-CAP-03 | **PROVEN** | pilote étranger ⇒ capitalisation=[] |
| UNKNOWN-CAP-04 | **PROVEN** | document revision DB_CONFIRMED ; sujet sans gen non attribué |
| ASSIST-REUSE-01 | **PROVEN** | gen divergent ⇒ CONFLICT 409 |
| ASSIST-REUSE-02 | **PROVEN** | même gen / ACK perdu ⇒ idempotent |
| ASSIST-REUSE-03 | **PROVEN** | reconcile ne lie pas mismatch/missing gen |
| PG-CONTEND-01 | **PROVEN** | 2 sessions postgres.js ; FOR SHARE A bloque B |
| PG-CONTEND-02 | **PROVEN** | FOR UPDATE terminal A bloque B |
| PG-DBFAIL-01 | **PROVEN** | exception post-INSERT ⇒ rollback assistant |
| PG-DBFAIL-02 | **PROVEN** | cap TX ownership lost ⇒ 0 acquis |
| PG-LEASE-01 | **PROVEN** | lease actif ⇒ pas de faux orphelin |
| PG-ISOLATE-01 | **PROVEN** | isolation pilote + coupe connexion |
| CI-LABELS | **PROVEN** | step CI « Apply migrations 001→006 » observé SUCCESS |
| LIVE COG/OBS | **NOT RUN** | hors mandat |
| RECETTE ML2 | **NOT RUN** | hors mandat |

---

## 4. QA locale (SHA final `bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1`)

| Suite | Résultat |
| --- | --- |
| `npx tsc --noEmit` | PASS |
| `npm run lint` | PASS (warnings préexistants unused vars nora-adapter) |
| `npm run build` | PASS |
| `npm run test:unit` | **52 PASS** / 13 files |
| `npm run test:integration` | **89 PASS** / 9 files |
| `npm run test:e2e` | **3 PASS** FAKE |
| Lane | DEV ; STUDIO_E2E=1 ; STUDIO_FORCE_NORA_FIXTURE=1 ; Postgres DEV 5433 |
| Migrations | 001→006 déjà présentes ; **aucune nouvelle migration** |

---

## 5. CI distante — SHA `bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1`

| Run | Conclusion |
| --- | --- |
| SFIA Studio Next CI `42093406745` | **success** — https://github.com/mcleland147/sfia-workspace/actions/runs/42093406745 |
| detect | SUCCESS |
| Build and validate | SUCCESS (7m59s) — unit **52**, PG **89**, Playwright **3**, migrations step **001→006**, diff --check PASS |
| SFIA Studio Next Required Gate | SUCCESS |
| SFIA Studio CI `42093407005` | SUCCESS (Studio validate skipped — hors scope Next) |

**Note provenance OBS CI :** `source_sha` applicatif peut différer du head SHA PR (merge checkout) — ne pas confondre avec preuve de build LIVE.

---

## 6. Blast radius / allowlist

Modifiés/ajoutés **uniquement** :
- `web/src/domains/conversation/service.ts` (blob `de55020e`)
- `web/src/domains/conversation/turn-command.ts` (blob `8702191b`)
- `web/src/domains/knowledge/service.ts` (blob `2fb13777`) — `reconstituteConfirmedD4Effects`
- `web/tests/integration/ml2-three-blocker.pg.test.ts` (blob `389beef5`)
- `web/tests/integration/ml2-pg-contention.pg.test.ts` **CREATED** (blob `ea47098c`)
- `web/tests/integration/migrations-fresh.pg.test.ts`
- `.github/workflows/sfia-studio-next-ci.yml` — **libellés seuls**
- As-Built §26 + matrice §19 + delivery `DELIV-…-11`

**Non touchés :** schema/migrations nouvelles, SEF/roadmap/décisions, #655–#658, main, LIVE, secrets, SVG, `.tmp` (pack local seulement).

---

## 7. Objet créé — contenu complet

### `projects/sfia-studio-next/web/tests/integration/ml2-pg-contention.pg.test.ts`

```typescript
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

```

---

## 8. Objet modifié — `reconstituteConfirmedD4Effects` (section complète)

Blob knowledge/service.ts `2fb1377793a6390db108c226a3144d204d0d457e` — fonction ajoutée :

```typescript
export async function reconstituteConfirmedD4Effects(
  pilotId: string,
  preparationId: string,
  refs: { generationId?: string | null; userMessageId?: string | null },
): Promise<{
  capitalisation: ConfirmedD4Effect[];
  documentSave: {
    status: string;
    documentId: string;
    revisionNumber?: number;
    confirmation: "DB_CONFIRMED";
  } | null;
  capitalisationLimit: string;
}> {
  try {
    await assertPrep(pilotId, preparationId);
  } catch {
    return {
      capitalisation: [],
      documentSave: null,
      capitalisationLimit: "PREP_NOT_VISIBLE — no D4 reconstitution across privilege boundary",
    };
  }
  const gen = refs.generationId?.trim() || null;
  const src = refs.userMessageId?.trim() || null;
  if (!gen && !src) {
    return {
      capitalisation: [],
      documentSave: null,
      capitalisationLimit: "NO_PROVENANCE_KEYS — cannot reconstitute D4 effects",
    };
  }

  const effects: ConfirmedD4Effect[] = [];

  const acquisRows = await db
    .select({
      id: knowledgeAcquis.id,
      status: knowledgeAcquis.status,
      provenanceJson: knowledgeAcquis.provenanceJson,
    })
    .from(knowledgeAcquis)
    .where(
      and(
        eq(knowledgeAcquis.preparationId, preparationId),
        eq(knowledgeAcquis.ownerPilotId, pilotId),
        eq(knowledgeAcquis.status, "CURRENT"),
        gen && src
          ? sql`(
              ${knowledgeAcquis.provenanceJson}::jsonb->>'generationId' = ${gen}
              or ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceId' = ${src}
            )`
          : gen
            ? sql`${knowledgeAcquis.provenanceJson}::jsonb->>'generationId' = ${gen}`
            : sql`${knowledgeAcquis.provenanceJson}::jsonb->>'sourceId' = ${src}`,
      ),
    );

  for (const row of acquisRows) {
    effects.push({
      kind: "acquis",
      id: row.id,
      status: row.status,
      confirmation: "DB_CONFIRMED",
    });
  }

  const openRows = await db
    .select({
      id: knowledgeOpenPoints.id,
      status: knowledgeOpenPoints.status,
    })
    .from(knowledgeOpenPoints)
    .where(
      and(
        eq(knowledgeOpenPoints.preparationId, preparationId),
        eq(knowledgeOpenPoints.ownerPilotId, pilotId),
        eq(knowledgeOpenPoints.status, "OPEN"),
        gen && src
          ? sql`(
              ${knowledgeOpenPoints.provenanceJson}::jsonb->>'generationId' = ${gen}
              or ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceId' = ${src}
            )`
          : gen
            ? sql`${knowledgeOpenPoints.provenanceJson}::jsonb->>'generationId' = ${gen}`
            : sql`${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceId' = ${src}`,
      ),
    );

  for (const row of openRows) {
    effects.push({
      kind: "open_point",
      id: row.id,
      status: row.status,
      confirmation: "DB_CONFIRMED",
    });
  }

  let documentSave: {
    status: string;
    documentId: string;
    revisionNumber?: number;
    confirmation: "DB_CONFIRMED";
  } | null = null;

  const revWhere =
    gen && src
      ? sql`(
          ${documentRevisions.provenanceJson}::jsonb->>'generationId' = ${gen}
          or ${documentRevisions.provenanceJson}::jsonb->>'userMessageId' = ${src}
          or ${documentRevisions.correlationKey} = ${"doc:" + gen}
        )`
      : gen
        ? sql`(
            ${documentRevisions.provenanceJson}::jsonb->>'generationId' = ${gen}
            or ${documentRevisions.correlationKey} = ${"doc:" + gen}
          )`
        : sql`${documentRevisions.provenanceJson}::jsonb->>'userMessageId' = ${src}`;

  const revRows = await db
    .select({
      id: documentRevisions.id,
      documentId: documentRevisions.documentId,
      revisionNumber: documentRevisions.revisionNumber,
      status: documentRevisions.status,
    })
    .from(documentRevisions)
    .innerJoin(documents, eq(documents.id, documentRevisions.documentId))
    .where(
      and(
        eq(documents.preparationId, preparationId),
        eq(documents.ownerPilotId, pilotId),
        eq(documentRevisions.status, "AVAILABLE"),
        revWhere,
      ),
    )
    .orderBy(desc(documentRevisions.revisionNumber))
    .limit(1);

  if (revRows[0]) {
    const r = revRows[0];
    effects.push({
      kind: "document",
      id: r.id,
      status: r.status,
      confirmation: "DB_CONFIRMED",
      documentId: r.documentId,
      revisionNumber: r.revisionNumber,
    });
    documentSave = {
      status: "AVAILABLE",
      documentId: r.documentId,
      revisionNumber: r.revisionNumber,
      confirmation: "DB_CONFIRMED",
    };
  }

  return {
    capitalisation: effects,
    documentSave,
    capitalisationLimit:
      effects.length > 0
        ? "DB_RECONSTITUTED — effects confirmed under pilot/prep rights; turn remains UNKNOWN"
        : "NO_CONFIRMED_D4_EFFECTS_FOR_TURN",
  };
}
```

---

## 9. Diffs complets du commit `bf2deb0e`

### conversation/service.ts
```diff
commit bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:23:06 2026 +0100

    fix(next-ml2): reconstitute UNKNOWN D4 effects, gate assistant reuse, prove SAFE-01 two-session PG
    
    Keep UNKNOWN turns honest with DB-confirmed D4 restitution, require matching generationId before assistant reuse, and harden pre-merge evidence with real two-connection contention plus CI migration labels 001→006.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 52441b41..de55020e 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -7,6 +7,7 @@ import { generateNoraReply } from "./nora-adapter";
 import { getPreparationContext } from "@/domains/preparation/service";
 import {
   maybeCapitalizeFromExchange,
+  reconstituteConfirmedD4Effects,
   selectRelevantKnowledgeContext,
 } from "@/domains/knowledge/service";
 import { listDocuments, savePreparationDocument } from "@/domains/document/service";
@@ -146,7 +147,28 @@ export async function postUserMessageAndNora(
         /* fall through */
       }
     }
-    // FAILED/UNKNOWN: never fabricate a new result from a terminal non-COMPLETE command.
+    // FAILED/UNKNOWN: never fabricate COMPLETE; reconstitute durable D4 refs from DB when possible.
+    if (reserved.status === "UNKNOWN" || reserved.status === "FAILED") {
+      const reconstituted = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
+        generationId: reserved.generationId,
+        userMessageId: reserved.userMessageId,
+      });
+      return {
+        operationId: reserved.operationId,
+        requestId,
+        status: reserved.status,
+        idempotentReplay: true,
+        generationId: reserved.generationId,
+        userMessageId: reserved.userMessageId,
+        assistantMessageId: reserved.assistantMessageId,
+        humanDecisionCreated: false,
+        reconciled: reserved.reconciled,
+        noraMode: "replay-terminal",
+        capitalisation: reconstituted.capitalisation,
+        capitalisationLimit: reconstituted.capitalisationLimit,
+        documentSave: reconstituted.documentSave,
+      };
+    }
     return {
       operationId: reserved.operationId,
       requestId,
@@ -384,6 +406,17 @@ export async function postUserMessageAndNora(
     turnStatus = "UNKNOWN";
   }
 
+  // When ownership already lost, prefer DB reconstitution over in-memory lists
+  // (local vars may omit effects committed earlier in the turn).
+  let unknownCapReconstituted: Awaited<ReturnType<typeof reconstituteConfirmedD4Effects>> | null =
+    null;
+  if (ownershipLostBeforeD4 || turnStatus === "UNKNOWN") {
+    unknownCapReconstituted = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
+      generationId: reply.generationId,
+      userMessageId: reserved.userMessageId,
+    });
+  }
+
   const resultPayload: TurnResult = {
     userMessageId: reserved.userMessageId,
     assistantMessageId: ownershipLostBeforeD4 ? null : assistantId,
@@ -415,12 +448,16 @@ export async function postUserMessageAndNora(
       selectionMethod: knowledge.selectionMethod,
       selectionLimit: knowledge.selectionLimit,
     },
-    capitalisation: ownershipLostBeforeD4 ? [] : confirmedCapitalisations,
+    capitalisation: ownershipLostBeforeD4
+      ? (unknownCapReconstituted?.capitalisation ?? [])
+      : confirmedCapitalisations,
     capitalisationAttempted: ownershipLostBeforeD4 ? [] : capitalisation.capitalisations,
     capitalisationLimit: ownershipLostBeforeD4
-      ? "OWNERSHIP_LOST"
+      ? (unknownCapReconstituted?.capitalisationLimit ?? "OWNERSHIP_LOST")
       : capitalisationError ?? capitalisation.selectionLimit,
-    documentSave: ownershipLostBeforeD4 ? null : documentSave,
+    documentSave: ownershipLostBeforeD4
+      ? (unknownCapReconstituted?.documentSave ?? null)
+      : documentSave,
     idempotentReplay: false,
     humanDecisionCreated: false,
   };
@@ -429,29 +466,72 @@ export async function postUserMessageAndNora(
     await turnRaceHooks.beforeTerminalCommit();
   }
 
-  const applied = await commitTurnTerminal({
-    commandId: reserved.commandId,
-    ownerToken: reserved.ownerToken,
-    status: turnStatus,
-    conversationId: ctx.conversation.id,
-    assistant: ownershipLostBeforeD4
-      ? undefined
-      : {
-          id: assistantId,
-          content: reply.content,
-          messageStatus: reply.status,
-          generationId: reply.generationId,
-          ordinal: reserved.ordinalAssistant,
-        },
-    generationId: reply.generationId,
-    resultJson: JSON.stringify(resultPayload),
-    errorCategory:
-      turnStatus === "COMPLETE"
+  let applied: { applied: boolean };
+  try {
+    applied = await commitTurnTerminal({
+      commandId: reserved.commandId,
+      ownerToken: reserved.ownerToken,
+      status: turnStatus,
+      conversationId: ctx.conversation.id,
+      assistant: ownershipLostBeforeD4
         ? undefined
-        : ownershipLostBeforeD4
-          ? "OWNERSHIP_LOST"
-          : capitalisationError ?? reply.status,
-  });
+        : {
+            id: assistantId,
+            content: reply.content,
+            messageStatus: reply.status,
+            generationId: reply.generationId,
+            ordinal: reserved.ordinalAssistant,
+          },
+      generationId: reply.generationId,
+      resultJson: JSON.stringify(resultPayload),
+      errorCategory:
+        turnStatus === "COMPLETE"
+          ? undefined
+          : ownershipLostBeforeD4
+            ? "OWNERSHIP_LOST"
+            : capitalisationError ?? reply.status,
+    });
+  } catch (e) {
+    // Mid-TX DB failure after attempted assistant write — TX rolled back; never COMPLETE.
+    if (e instanceof StudioError && e.code === "CONFLICT") {
+      emitObs({
+        event_name: "d3.turn.assistant_identity_conflict",
+        component: "d3.conversation",
+        request_id: requestId,
+        operation_id: reserved.operationId,
+        generation_id: reply.generationId,
+        outcome: "UNKNOWN",
+        error_category: "ASSISTANT_IDENTITY_CONFLICT",
+      });
+    } else {
+      emitObs({
+        event_name: "d3.turn.terminal_tx_failed",
+        component: "d3.conversation",
+        request_id: requestId,
+        operation_id: reserved.operationId,
+        generation_id: reply.generationId,
+        outcome: "UNKNOWN",
+        error_category: "TERMINAL_TX_EXCEPTION",
+      });
+    }
+    try {
+      await markTurnUnknown(reserved.commandId, "TERMINAL_TX_EXCEPTION", reserved.ownerToken);
+    } catch {
+      /* ownership may already be lost */
+    }
+    const reconstituted = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
+      generationId: reply.generationId,
+      userMessageId: reserved.userMessageId,
+    });
+    return {
+      ...resultPayload,
+      status: "UNKNOWN",
+      assistantMessageId: null,
+      capitalisation: reconstituted.capitalisation,
+      capitalisationLimit: reconstituted.capitalisationLimit,
+      documentSave: reconstituted.documentSave,
+    };
+  }
 
   if (!applied.applied) {
     emitObs({
@@ -463,16 +543,20 @@ export async function postUserMessageAndNora(
       outcome: "UNKNOWN",
       error_category: "COMPLETE_CAS_MISSED",
     });
-    // Never return COMPLETE when ownership CAS failed.
+    // Never return COMPLETE when ownership CAS failed — but surface DB-confirmed D4 refs.
+    const reconstituted = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
+      generationId: reply.generationId,
+      userMessageId: reserved.userMessageId,
+    });
     return {
       ...resultPayload,
       status: "UNKNOWN",
       assistantMessageId: null,
-      documentSave: null,
-      capitalisation: [],
+      capitalisation: reconstituted.capitalisation,
+      capitalisationLimit: reconstituted.capitalisationLimit,
+      documentSave: reconstituted.documentSave,
     };
   }
-
   emitObs({
     event_name: "d3.turn.completed",
     component: "d3.conversation",
```

### conversation/turn-command.ts
```diff
commit bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:23:06 2026 +0100

    fix(next-ml2): reconstitute UNKNOWN D4 effects, gate assistant reuse, prove SAFE-01 two-session PG
    
    Keep UNKNOWN turns honest with DB-confirmed D4 restitution, require matching generationId before assistant reuse, and harden pre-merge evidence with real two-connection contention plus CI migration labels 001→006.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
index d45c828a..8702191b 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
@@ -231,7 +231,13 @@ export async function reconcileRunningCommand(commandId: string): Promise<{
           )
           .limit(1)
       )[0];
-      if (existingAssistant) {
+      // Bind only when both sides have a matching generationId (no silent appropriation).
+      if (
+        existingAssistant &&
+        Boolean(row.generationId) &&
+        Boolean(existingAssistant.generationId) &&
+        row.generationId === existingAssistant.generationId
+      ) {
         assistantId = existingAssistant.id;
         generationId = existingAssistant.generationId ?? generationId;
       }
@@ -352,7 +358,12 @@ export async function reserveTurnCommand(args: {
               )
               .limit(1)
           )[0];
-          if (existingAssistant) {
+          if (
+            existingAssistant &&
+            Boolean(existing.generationId) &&
+            Boolean(existingAssistant.generationId) &&
+            existing.generationId === existingAssistant.generationId
+          ) {
             assistantId = existingAssistant.id;
             generationId = existingAssistant.generationId ?? generationId;
           }
@@ -585,15 +596,24 @@ export async function commitTurnTerminal(args: {
           });
           assistantMessageId = args.assistant.id;
         } else {
-          // Reuse only when identity matches this command's stored assistant (or first bind).
-          if (
-            owned.assistantMessageId &&
+          const sameId = existingAssistant.id === args.assistant.id;
+          const sameGen =
+            Boolean(args.assistant.generationId) &&
+            existingAssistant.generationId === args.assistant.generationId;
+          const alreadyBound = owned.assistantMessageId === existingAssistant.id;
+          const genConflict =
+            Boolean(args.assistant.generationId) &&
+            Boolean(existingAssistant.generationId) &&
+            existingAssistant.generationId !== args.assistant.generationId;
+          const idConflict =
+            Boolean(owned.assistantMessageId) &&
             owned.assistantMessageId !== existingAssistant.id &&
-            existingAssistant.id !== args.assistant.id
-          ) {
+            !sameId;
+
+          if (genConflict || idConflict || (!sameId && !sameGen && !alreadyBound)) {
             throw new StudioError(
               "CONFLICT",
-              "Ordinal assistant déjà lié à une autre identité de message",
+              "Ordinal assistant incompatible avec la génération/commande courante",
               { httpStatus: 409 },
             );
           }
```

### workflow CI labels
```diff
commit bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:23:06 2026 +0100

    fix(next-ml2): reconstitute UNKNOWN D4 effects, gate assistant reuse, prove SAFE-01 two-session PG
    
    Keep UNKNOWN turns honest with DB-confirmed D4 restitution, require matching generationId before assistant reuse, and harden pre-merge evidence with real two-connection contention plus CI migration labels 001→006.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/.github/workflows/sfia-studio-next-ci.yml b/.github/workflows/sfia-studio-next-ci.yml
index 614b3c53..cca2c8ef 100644
--- a/.github/workflows/sfia-studio-next-ci.yml
+++ b/.github/workflows/sfia-studio-next-ci.yml
@@ -16,7 +16,7 @@
 #
 # Node: 24. Postgres: 16-alpine ephemeral Docker matching DEV gate identities:
 #   container sfia-next-dev-pg, 127.0.0.1:5433→5432, DBs sfia_next_dev + sfia_next_e2e.
-# Migrations (ML2): 001→004 via scripts/db-migrate.sh.
+# Migrations (ML2): 001→006 via scripts/db-migrate.sh.
 # Nora: STUDIO_E2E=1 + OPENAI_API_KEY neutralized — FAKE only.
 #
 # Corrections vs Cycle-7 proposal artefact:
@@ -282,7 +282,7 @@ jobs:
       - name: Vitest unit
         run: npm run test:unit
 
-      - name: Apply migrations 001→004 on operator DB
+      - name: Apply migrations 001→006 on operator DB
         run: npm run db:migrate
 
       - name: Vitest PostgreSQL integration
```

### migrations-fresh.pg.test.ts
```diff
commit bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:23:06 2026 +0100

    fix(next-ml2): reconstitute UNKNOWN D4 effects, gate assistant reuse, prove SAFE-01 two-session PG
    
    Keep UNKNOWN turns honest with DB-confirmed D4 restitution, require matching generationId before assistant reuse, and harden pre-merge evidence with real two-connection contention plus CI migration labels 001→006.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
index c49c28dd..8a2b1103 100644
--- a/projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
@@ -33,7 +33,7 @@ function applySql(file: string, database = DB) {
   );
 }
 
-describe.skipIf(!dockerOk())("migrations 001→004 on fresh isolated Postgres", () => {
+describe.skipIf(!dockerOk())("migrations 001→006 on fresh isolated Postgres", () => {
   let sql: ReturnType<typeof postgres> | null = null;
 
   beforeAll(async () => {
@@ -102,11 +102,13 @@ describe.skipIf(!dockerOk())("migrations 001→004 on fresh isolated Postgres",
     }
   }, 30_000);
 
-  it("applies 001→004; auth_mode + knowledge + creation_correlation exist", async () => {
+  it("applies 001→006; auth_mode + knowledge + creation_correlation + turn owner_token exist", async () => {
     applySql("001_initial_studio_core.sql");
     applySql("002_session_auth_mode.sql");
     applySql("003_ml2_knowledge_documents.sql");
     applySql("004_ml2_integrity_corrective.sql");
+    applySql("005_ml2_conversation_turn_command.sql");
+    applySql("006_ml2_turn_owner_token.sql");
 
     const cols = await sql!`
       SELECT column_name, column_default, is_nullable
@@ -138,10 +140,11 @@ describe.skipIf(!dockerOk())("migrations 001→004 on fresh isolated Postgres",
     const tables = await sql!`
       SELECT table_name FROM information_schema.tables
       WHERE table_schema = 'public'
-        AND table_name IN ('knowledge_subjects', 'knowledge_acquis', 'knowledge_open_points')
+        AND table_name IN ('knowledge_subjects', 'knowledge_acquis', 'knowledge_open_points', 'conversation_turn_commands')
       ORDER BY table_name
     `;
     expect(tables.map((t) => t.table_name)).toEqual([
+      "conversation_turn_commands",
       "knowledge_acquis",
       "knowledge_open_points",
       "knowledge_subjects",
@@ -157,13 +160,20 @@ describe.skipIf(!dockerOk())("migrations 001→004 on fresh isolated Postgres",
       WHERE table_name = 'documents' AND column_name = 'creation_correlation_key'
     `;
     expect(corr).toHaveLength(1);
+    const ownerTok = await sql!`
+      SELECT column_name FROM information_schema.columns
+      WHERE table_name = 'conversation_turn_commands' AND column_name = 'owner_token'
+    `;
+    expect(ownerTok).toHaveLength(1);
   });
 
-  it("re-applying 001→004 is idempotent", () => {
+  it("re-applying 001→006 is idempotent", () => {
     expect(() => applySql("001_initial_studio_core.sql")).not.toThrow();
     expect(() => applySql("002_session_auth_mode.sql")).not.toThrow();
     expect(() => applySql("003_ml2_knowledge_documents.sql")).not.toThrow();
     expect(() => applySql("004_ml2_integrity_corrective.sql")).not.toThrow();
+    expect(() => applySql("005_ml2_conversation_turn_command.sql")).not.toThrow();
+    expect(() => applySql("006_ml2_turn_owner_token.sql")).not.toThrow();
   });
 
   it("controlled failure when a migration SQL is broken (ON_ERROR_STOP)", () => {
```

### ml2-three-blocker.pg.test.ts
```diff
commit bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:23:06 2026 +0100

    fix(next-ml2): reconstitute UNKNOWN D4 effects, gate assistant reuse, prove SAFE-01 two-session PG
    
    Keep UNKNOWN turns honest with DB-confirmed D4 restitution, require matching generationId before assistant reuse, and harden pre-merge evidence with real two-connection contention plus CI migration labels 001→006.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts
index 9d9cb097..389beef5 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts
@@ -734,6 +734,217 @@ describe("ML2 three-blocker corrective (PG)", () => {
       );
     expect(kept).toHaveLength(1);
     expect(kept[0].status).toBe("CURRENT");
+
+    // UNKNOWN-CAP-01: response surfaces DB-confirmed acquis ref (not erased).
+    const caps = Array.isArray(result.capitalisation) ? result.capitalisation : [];
+    expect(caps.some((c: { id?: string }) => c.id === kept[0].id)).toBe(true);
+
+    // UNKNOWN-CAP-02: replay same key reconstitutes same refs, no second generation.
+    const replay = await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Compare CAP04 option reprise après effet D4 déjà durable",
+      { clientTurnKey: key },
+    );
+    expect(replay.status).toBe("UNKNOWN");
+    expect(replay.idempotentReplay).toBe(true);
+    const replayCaps = Array.isArray(replay.capitalisation) ? replay.capitalisation : [];
+    expect(replayCaps.some((c: { id?: string }) => c.id === kept[0].id)).toBe(true);
+  });
+
+  it("UNKNOWN-CAP-03: foreign pilot cannot see reconstituted acquis refs", async () => {
+    const statement = `CAP03_FOREIGN_${Date.now()} statement durable isolé`;
+    await db.insert(knowledgeAcquis).values({
+      id: newId("acq"),
+      preparationId,
+      ownerPilotId: pilotId,
+      kind: "HYPOTHESIS",
+      statement,
+      provenanceJson: JSON.stringify({
+        sourceKind: "message",
+        sourceId: "msg_foreign_test",
+        generationId: "gen_foreign_test",
+        epistemic: "hypothesized",
+      }),
+      status: "CURRENT",
+    });
+    const { reconstituteConfirmedD4Effects } = await import("@/domains/knowledge/service");
+    const other = await createDevTestSession("b", { host: "127.0.0.1:3100" });
+    const foreign = await reconstituteConfirmedD4Effects(other.pilotId, preparationId, {
+      generationId: "gen_foreign_test",
+      userMessageId: "msg_foreign_test",
+    });
+    expect(foreign.capitalisation).toHaveLength(0);
+  });
+
+  it("ASSIST-REUSE-01: ordinal occupied with different generationId → CONFLICT / no COMPLETE", async () => {
+    const reserved = await reserveTurnCommand({
+      conversationId,
+      ownerPilotId: pilotId,
+      clientTurnKey: `assist01-${Date.now()}`,
+      content: "Assist reuse conflict",
+    });
+    if (reserved.kind !== "fresh") throw new Error("expected fresh");
+    await db.insert(messages).values({
+      id: newId("msg"),
+      conversationId,
+      role: "assistant",
+      content: "foreign assistant",
+      status: "COMPLETE",
+      generationId: "gen_OTHER",
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
+          id: newId("msg"),
+          content: "new",
+          messageStatus: "COMPLETE",
+          generationId: "gen_MINE",
+          ordinal: reserved.ordinalAssistant,
+        },
+        generationId: "gen_MINE",
+      }),
+    ).rejects.toSatisfy((e: unknown) => e instanceof StudioError && e.code === "CONFLICT");
+  });
+
+  it("ASSIST-REUSE-02: same generationId reuse after ACK loss is idempotent", async () => {
+    const key = `assist02-${Date.now()}`;
+    const first = await postUserMessageAndNora(pilotId, preparationId, "Compare assist02 ACK", {
+      clientTurnKey: key,
+    });
+    expect(first.status).toBe("COMPLETE");
+    const replay = await postUserMessageAndNora(pilotId, preparationId, "Compare assist02 ACK", {
+      clientTurnKey: key,
+    });
+    expect(replay.status).toBe("COMPLETE");
+    expect(replay.idempotentReplay).toBe(true);
+    expect(replay.assistantMessageId).toBe(first.assistantMessageId);
+  });
+
+  it("ASSIST-REUSE-03: reconcile does not bind assistant with mismatched/missing generationId", async () => {
+    const reserved = await reserveTurnCommand({
+      conversationId,
+      ownerPilotId: pilotId,
+      clientTurnKey: `assist03-${Date.now()}`,
+      content: "Assist reuse reconcile",
+    });
+    if (reserved.kind !== "fresh") throw new Error("expected fresh");
+    const foreignMsgId = newId("msg");
+    await db.insert(messages).values({
+      id: foreignMsgId,
+      conversationId,
+      role: "assistant",
+      content: "foreign reconcile assistant",
+      status: "COMPLETE",
+      generationId: "gen_FOREIGN_RECON",
+      ordinal: reserved.ordinalAssistant,
+    });
+    await db
+      .update(conversationTurnCommands)
+      .set({
+        generationId: "gen_CMD_OWN",
+        updatedAt: new Date(Date.now() - TURN_RUNNING_STALE_MS - 1000),
+      })
+      .where(eq(conversationTurnCommands.id, reserved.commandId));
+
+    const recon = await reconcileRunningCommand(reserved.commandId);
+    expect(recon.status).toBe("UNKNOWN");
+    expect(recon.assistantMessageId).toBeNull();
+    expect(recon.assistantMessageId).not.toBe(foreignMsgId);
+
+    // Missing generation on command ⇒ still no silent bind.
+    const reserved2 = await reserveTurnCommand({
+      conversationId,
+      ownerPilotId: pilotId,
+      clientTurnKey: `assist03b-${Date.now()}`,
+      content: "Assist reuse missing gen",
+    });
+    if (reserved2.kind !== "fresh") throw new Error("expected fresh");
+    await db.insert(messages).values({
+      id: newId("msg"),
+      conversationId,
+      role: "assistant",
+      content: "orphan without matching gen proof",
+      status: "COMPLETE",
+      generationId: null,
+      ordinal: reserved2.ordinalAssistant,
+    });
+    await db
+      .update(conversationTurnCommands)
+      .set({
+        generationId: null,
+        updatedAt: new Date(Date.now() - TURN_RUNNING_STALE_MS - 1000),
+      })
+      .where(eq(conversationTurnCommands.id, reserved2.commandId));
+    const recon2 = await reconcileRunningCommand(reserved2.commandId);
+    expect(recon2.status).toBe("UNKNOWN");
+    expect(recon2.assistantMessageId).toBeNull();
+  });
+
+  it("UNKNOWN-CAP-04: document revision with matching provenance reconstitutes; subject without gen stays unattributed", async () => {
+    const { reconstituteConfirmedD4Effects } = await import("@/domains/knowledge/service");
+    const gen = `gen_cap04_${Date.now()}`;
+    const src = `msg_cap04_${Date.now()}`;
+    const docId = newId("doc");
+    const revId = newId("drev");
+    await db.insert(documents).values({
+      id: docId,
+      preparationId,
+      ownerPilotId: pilotId,
+      title: `CAP04 doc ${Date.now()}`,
+      creationCorrelationKey: `doc:${gen}`,
+    });
+    await db.insert(documentRevisions).values({
+      id: revId,
+      documentId: docId,
+      revisionNumber: 1,
+      status: "AVAILABLE",
+      contentMarkdown: "# CAP04 durable",
+      correlationKey: `doc:${gen}`,
+      provenanceJson: JSON.stringify({ generationId: gen, userMessageId: src }),
+      scope: "document",
+    });
+    // Subject has no generation provenance today — must not be falsely attributed.
+    await db.insert(knowledgeSubjects).values({
+      id: newId("subj"),
+      preparationId,
+      ownerPilotId: pilotId,
+      title: `CAP04 subject ${Date.now()}`,
+      status: "ACTIVE",
+    });
+
+    const hit = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
+      generationId: gen,
+      userMessageId: src,
+    });
+    expect(hit.documentSave?.documentId).toBe(docId);
+    expect(hit.documentSave?.confirmation).toBe("DB_CONFIRMED");
+    expect(hit.capitalisation.some((c) => c.kind === "document" && c.documentId === docId)).toBe(
+      true,
+    );
+    // Subjects have no generation provenance — reconstitution kinds are acquis|open_point|document only.
+    expect(hit.capitalisation.every((c) => c.kind !== "document" || c.documentId === docId)).toBe(
+      true,
+    );
+    expect(hit.capitalisationLimit).toContain("DB_RECONSTITUTED");
+    const subjectsAfter = await db
+      .select()
+      .from(knowledgeSubjects)
+      .where(eq(knowledgeSubjects.preparationId, preparationId));
+    expect(subjectsAfter.some((s) => s.title.startsWith("CAP04 subject"))).toBe(true);
+
+    const miss = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
+      generationId: "gen_unrelated",
+      userMessageId: "msg_unrelated",
+    });
+    expect(miss.documentSave).toBeNull();
+    expect(miss.capitalisation.filter((c) => c.kind === "document")).toHaveLength(0);
   });
 
   it("CAP-FENCE-05: pilot path without turnFence still creates subject", async () => {
```

### specification-technique.md (As-Built §26)
```diff
commit bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:23:06 2026 +0100

    fix(next-ml2): reconstitute UNKNOWN D4 effects, gate assistant reuse, prove SAFE-01 two-session PG
    
    Keep UNKNOWN turns honest with DB-confirmed D4 restitution, require matching generationId before assistant reuse, and harden pre-merge evidence with real two-connection contention plus CI migration labels 001→006.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
index 64bb24b0..e641375c 100644
--- a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
+++ b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
@@ -941,3 +941,27 @@ Les cinq orientations forment **un seul macro-lot ML2**, avec QA C1–C6, COG-01
 | Playwright FAKE | 3 PASS |
 | tsc / lint / build | PASS (lint: warnings préexistants nora-adapter unused) |
 | LIVE / CI / RECETTE | **NOT RUN** |
+
+## 26. As-Built consolidation pré-merge PR #659 — 2026-11-05
+
+> **PROJECT PUSH AUTHORIZED (same branch) / NO MERGE / NO RELEASE.** Parent `df735787` ; correctifs UNKNOWN-CAP + ASSIST-REUSE + SAFE-01 deux sessions PG + libellés CI 001→006.
+
+### 26.1 Invariants
+
+| ID | Invariant |
+| --- | --- |
+| UNKNOWN-CAP | Tour `UNKNOWN` reste UNKNOWN ; restitution D4 via `reconstituteConfirmedD4Effects` (relecture DB + `assertPrep`) ; pas de COMPLETE / assistant artificiel |
+| ASSIST-REUSE | Reuse assistant seulement si `generationId` des deux côtés présents et égaux ; sinon CONFLICT (terminal) ou non-liaison (reconcile) |
+| SAFE-01 | Contre-épreuves PG à **deux connexions postgres.js** (FOR SHARE / FOR UPDATE / panne TX / lease / isolation) |
+| CI labels | Commentaire + step `Apply migrations 001→006` ; test fresh migrations aligné 001→006 (comportement script inchangé) |
+
+### 26.2 Preuves locales (avant push)
+
+| Suite | Résultat |
+| --- | --- |
+| unit | 52 PASS |
+| PG | 89 PASS (dont `ml2-pg-contention.pg.test.ts` 6 + oracles UNKNOWN-CAP/ASSIST-REUSE) |
+| Playwright FAKE | 3 PASS |
+| tsc / lint / build | PASS (lint: warnings préexistants nora-adapter unused) |
+| LIVE / RECETTE | **NOT RUN** |
+| CI nouveau SHA | à vérifier après push FF sur PR #659 |
```

### matrice-tracabilite.md (§19)
```diff
commit bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:23:06 2026 +0100

    fix(next-ml2): reconstitute UNKNOWN D4 effects, gate assistant reuse, prove SAFE-01 two-session PG
    
    Keep UNKNOWN turns honest with DB-confirmed D4 restitution, require matching generationId before assistant reuse, and harden pre-merge evidence with real two-connection contention plus CI migration labels 001→006.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
index 6be7c3ff..5bd64213 100644
--- a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
+++ b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
@@ -510,3 +510,25 @@ Ce tableau **précise** les oracles OBS-Q01..10 déjà recensés (§§9–10), s
 | SAFE-01 | PARTIAL | rollback CAS miss ; pas d'injection panne DB dédiée |
 | REG-01 | PROVEN | unit 52 / PG 78 / e2e 3 / tsc+build |
 | LIVE / CI / RECETTE | NOT RUN | hors mandat |
+
+## 19. As-Built consolidation pré-merge PR #659 — 2026-11-05
+
+| Oracle | État | Preuve |
+| --- | --- | --- |
+| UNKNOWN-CAP-01 | PG PROVEN | CAP-FENCE-04 : acquis CURRENT + refs dans payload UNKNOWN |
+| UNKNOWN-CAP-02 | PG PROVEN | replay même `clientTurnKey` reconstitue mêmes refs |
+| UNKNOWN-CAP-03 | PG PROVEN | pilote étranger ⇒ 0 ref |
+| UNKNOWN-CAP-04 | PG PROVEN | document versionné DB_CONFIRMED ; sujet sans gen non attribué |
+| ASSIST-REUSE-01 | PG PROVEN | `generationId` divergent ⇒ CONFLICT |
+| ASSIST-REUSE-02 | PG PROVEN | même gen / ACK perdu ⇒ idempotent |
+| ASSIST-REUSE-03 | PG PROVEN | reconcile ne lie pas gen mismatch / missing |
+| PG-CONTEND-01 | PG PROVEN | FOR SHARE session A bloque reconcile B |
+| PG-CONTEND-02 | PG PROVEN | FOR UPDATE terminal A bloque reconcile B |
+| PG-DBFAIL-01 | PG PROVEN | exception post-INSERT ⇒ rollback assistant, non-COMPLETE |
+| PG-DBFAIL-02 | PG PROVEN | cap TX ownership lost ⇒ 0 acquis publié |
+| PG-LEASE-01 | PG PROVEN | lease actif ⇒ pas de faux orphelin |
+| PG-ISOLATE-01 | PG PROVEN | pilote étranger + coupe connexion indépendante |
+| SAFE-01 (synthèse) | PG PROVEN (DEV) | deux sessions physiques ; runtime multi-process LIVE **NOT RUN** |
+| CI-LABELS | PROVEN local | workflow + migrations-fresh 001→006 |
+| REG-01 | PROVEN | unit 52 / PG 89 / e2e 3 / tsc+lint+build |
+| LIVE / RECETTE / merge | NOT RUN | hors mandat ; gate Morris |
```

### delivery-history.md (DELIV-11)
```diff
commit bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 20:23:06 2026 +0100

    fix(next-ml2): reconstitute UNKNOWN D4 effects, gate assistant reuse, prove SAFE-01 two-session PG
    
    Keep UNKNOWN turns honest with DB-confirmed D4 restitution, require matching generationId before assistant reuse, and harden pre-merge evidence with real two-connection contention plus CI migration labels 001→006.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 2233dc09..4106109d 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -333,3 +333,22 @@ Append-only logical journal of Cursor product deliveries.
 | LIVE / CI / RECETTE | **NOT RUN / NOT AUTHORIZED** |
 | Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
 | Verdict candidate | `LOCAL ML2 TURN INTEGRITY CORRECTIVE — READY FOR CHATGPT REVIEW` |
+
+## delivery_id: DELIV-2026-11-05-ML2-CONSOLIDATION-PREMERGE-11
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-05 (Europe/Paris) ~20:25 CET |
+| Macro-lot | R5 / ML2 — consolidation pré-merge PR #659 |
+| Type | INC corrective integrated (same ML2) |
+| Branch | `sfia/next-ml2-cognition-observability-integrated` (**project push FF authorized**) |
+| Parent SHA | `df7357873b487d48e32af5de89995bcfbf720210` |
+| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
+| PR | `#659` OPEN DRAFT ; #655–#658 untouched |
+| Corrected | UNKNOWN-CAP DB reconstitution ; ASSIST-REUSE generationId gate ; SAFE-01 two-session PG + DB-fail ; CI labels 001→006 |
+| Schema | unchanged (`006` already present) ; no new migration |
+| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
+| Local proofs | unit 52 PASS ; PG 89 PASS ; Playwright FAKE 3 PASS ; tsc+lint+build PASS |
+| LIVE / RECETTE | **NOT RUN / NOT AUTHORIZED** |
+| Status | PROJECT BRANCH PUSH (FF) — merge/LIVE/RECETTE still gated |
+| Verdict candidate | `PR #659 UPDATED — await CI Next on new SHA — READY FOR CHATGPT PRE-MERGE REVIEW` (CI status filled post-push) |
```

---

## 10. Réserves / dette / exit

1. **SAFE-01** : PROVEN en DEV (2 sessions postgres.js) — **pas** preuve multi-processus / multi-host LIVE.
2. **Sujets D4** : pas de provenance génération — volontairement non attribués (limite documentée).
3. **LIVE COG/OBS, RECETTE ML2, merge PR #659, STABLE, ADOPTED** : portes Morris distinctes.
4. Warnings lint préexistants `nora-adapter` unused — hors correctif.
5. ENV-01 respecté : DEV + GitHub only.

---

## 11. Instruction ChatGPT obligatoire

- Branche handoff : `sfia/review-handoff`
- Chemin canonique : `sfia-review-handoff/latest-chatgpt-review.md`
- Projet SHA : `bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1`
- PR : #659 DRAFT — https://github.com/mcleland147/sfia-workspace/pull/659
- CI Next : run `42093406745` SUCCESS (52/89/3)
- Oracles bloquants UNKNOWN-CAP / ASSIST-REUSE / SAFE-01 PG : **PROVEN** (DEV)
- Prochaine décision Morris : gate merge / autorisation LIVE bornée / RECETTE — **pas** auto-merge

---

## 12. Conclusion

**R5/ML2 CONSOLIDATION — PR #659 UPDATED — CI NEXT PASS — READY FOR CHATGPT PRE-MERGE REVIEW**  
Candidate unique `bf2deb0e` ; continuité conversationnelle après collision/reprise/panne : effets D4 durables repérables sans fabriquer de résultat ; assistant non approprié sans `generationId` compatible ; contention PG réelle à deux sessions prouvée en DEV ; libellés CI alignés 001→006.  
**NO RELEASE. NO MERGE. NO LIVE. NO RECETTE. NO ADOPTED.**
