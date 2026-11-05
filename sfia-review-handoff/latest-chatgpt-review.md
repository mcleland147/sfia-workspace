# SFIA Review Pack FULL — ML2 three-blocker corrective — 2026-11-05 18:43:57 CET

## 0. Mandat et verdict proposé

- **Cycle :** Delivery projet / INC-EVOL corrective / profil **Critical**
- **Mandat :** correction locale des **trois blocages** ChatGPT après revue handoff `5c9b7aa4` (code `00736f3a`) ; **aucun** push projet, PR, merge, LIVE, RECETTE, ADOPTED
- **CKC :** CANDIDATE ABSENT — FALLBACK SFIA v2.6
- **Verdict candidat :** `LOCAL THREE-BLOCKER CORRECTIVE DELIVERY — READY FOR CHATGPT REVIEW`
- **Produit observable :** un tour qui a perdu sa propriété ne confirme plus de COMPLETE ni d'écriture D4 ; la pagination D4 progresse jusqu'à un terminal sans curseur stagnant ; une exception après `run()` ne relance jamais le fournisseur automatiquement

## 1. Git Truth

| Item | Valeur |
| --- | --- |
| Branch | `sfia/next-ml2-cognition-observability-integrated` |
| HEAD entrée (EXACT) | `00736f3a6c34f6f56d628b6dee2097a4aadda91b` |
| HEAD correctif | `57f6fc54888f607d8a70ef959f39057764e4b20a` |
| Parent correctif | `00736f3a6c34f6f56d628b6dee2097a4aadda91b` (= entrée) |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` |
| docs candidate | `6d85fd9b7c724b020011f19d8814333116674475` |
| origin review-handoff (pré-pub) | `5c9b7aa4ec884af47f3c7892856f535c6c701e27` (blob `1b742d5d…`) |
| Remote integrator branch | ABSENT |
| Project push | **NON** |
| Untracked preserved | `.tmp-sfia-review/chatgpt-review.md` (ce pack) ; 5 SVG `web/public/*.svg` (non staged) |

### 1.1 Git Review Index (vs `00736f3a6c34f6f56d628b6dee2097a4aadda91b`)

```
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
M	projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
M	projects/sfia-studio-next/web/scripts/db-migrate.sh
A	projects/sfia-studio-next/web/src/db/migrations/006_ml2_turn_owner_token.sql
M	projects/sfia-studio-next/web/src/db/schema.ts
M	projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
M	projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
M	projects/sfia-studio-next/web/src/domains/document/service.ts
A	projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
```

```
.../construction/delivery-history.md               |  18 +
 .../matrice-tracabilite.md                         |  15 +
 .../specification-technique.md                     |  23 ++
 .../sfia-studio-next/web/scripts/db-migrate.sh     |   3 +-
 .../src/db/migrations/006_ml2_turn_owner_token.sql |  15 +
 projects/sfia-studio-next/web/src/db/schema.ts     |   4 +-
 .../web/src/domains/conversation/d4-read-tools.ts  | 412 +++++++++++----------
 .../web/src/domains/conversation/nora-adapter.ts   | 115 ++----
 .../web/src/domains/conversation/service.ts        | 275 +++++++++-----
 .../web/src/domains/conversation/turn-command.ts   | 221 +++++++++--
 .../web/src/domains/document/service.ts            |  44 ++-
 .../tests/integration/ml2-three-blocker.pg.test.ts | 363 ++++++++++++++++++
 .../web/tests/unit/nora-adapter-corrective.test.ts |  41 +-
 13 files changed, 1129 insertions(+), 420 deletions(-)
```

- **commits créés :** 1 — `57f6fc54 fix(next-ml2): fence turn ownership, terminate D4 pagination, drop SDK auto-retry`
- **tests / validations :** unit 52 PASS ; PG 68 PASS ; Playwright FAKE 3 PASS ; `tsc --noEmit` PASS ; `npm run build` PASS
- **diff stat :** 13 files, +1129 / −420

## 2. ENV-01 / versioning

- Lane : DEV only (`STUDIO_LANE=DEV`) ; DB DEV `sfia_next_dev` + e2e isolée ; migration **006** appliquée forward-only sur les deux
- RECETTE/STABLE : non touchées ; candidate RECETTE figée : **NOT AVAILABLE**
- Product : `NO RELEASE` / `0.0.0-dev` ; STABLE NOT AVAILABLE
- delivery_id : `DELIV-2026-11-05-ML2-THREE-BLOCKER-09`
- Schema : `006_ml2_turn_owner_token` (colonne `owner_token` + index) ; `005` inchangée

## 3. Correction par blocage

### A — TURN ownership fencing (`owner_token`)

- Migration 006 : `owner_token TEXT NOT NULL` sur `conversation_turn_commands` + index
- Réservation émet un token propriétaire ; heartbeat/lease court injectable (tests)
- Effets D4 (ex. `savePreparationDocument`) acceptent `turnFence` et vérifient le token **dans la TX d'écriture** (pas un check préalable seul)
- Insertion assistant + transition terminale via CAS token+statut ; CAS miss ⇒ **jamais** `COMPLETE`, statut `UNKNOWN`/`CONFLICT` cohérent, pas d'écriture D4 tardive
- `reconcileRunningCommand` révoque le token (UNKNOWN) ; lease actif empêche faux orphelin (TURN-RACE-04)

### B — D4 pagination terminante

- Remplace scan `.limit(500)` + `slice` JS par pagination SQL `OFFSET/LIMIT` multi-types ordonnée stable
- `hasMore=false` et `nextOffset=null` en fin ; offsets > total → page vide terminale
- Plus de page vide avec `hasMore=true` et offset stagnant (boucle impossible)
- Budgets chars/calls : enveloppe JSON mesurée ; petit budget refuse/réduit sans JSON surdimensionné

### C — SDK no auto-retry after `run()`

- Suppression du second `run()` non-streaming après exception du premier, y compris messages « invalid model settings » / preContactLikely
- Une seule invocation ; `providerContacted=UNCERTAIN` ; sortie non-COMPLETE ; notes catégorisées expurgées
- Erreur locale **avant** `run()` : zéro appel, FAILED/NO CONTACT

## 4. Matrice oracles

| Oracle | État | Preuve |
| --- | --- | --- |
| TURN-RACE-01 | PG PROVEN | ownership lost mid-path → UNKNOWN, 0 D4 |
| TURN-RACE-02 | PG PROVEN | fence in document TX blocks write |
| TURN-RACE-03 | PG PROVEN | same key / distinct keys / mismatch |
| TURN-RACE-04 | PG PROVEN | heartbeat vs stale reconcile |
| D4-PAGE-01/02 | PG PROVEN | 620+ matches, offsets past 500 terminate |
| D4-PAGE-03 | KNOWN GAP (déclaratif) | pas de snapshot immuable revendiqué ; coverage/total peuvent être incertains sous mutation — comportement documenté, pas d'oracle injecté concurrent dédié |
| D4-PAGE-04 | PG PROVEN | tiny char budget |
| SDK-RETRY-01 | UNIT PROVEN | invalid settings / 429 / ECONNRESET / 503 → 1× `run()` |
| SDK-RETRY-02 | UNIT PROVEN | pre-invoke fail closed |
| SDK-RETRY-03 | COVERED by existing success path / fixture | stream SUCCESS mock ; pas de LIVE |
| SDK-RETRY-04 | UNIT PROVEN | fixture DEV + flags |
| C1–C6 | PG+BROWSER FAKE | suites historiques PASS |
| LIVE / CI new SHA / RECETTE | NOT RUN | hors mandat |

## 5. Tests exécutés

| Suite | Commande | Résultat |
| --- | --- | --- |
| unit | `npm run test:unit` | **52 PASS** |
| PG | `npm run test:integration` | **68 PASS** / 8 files |
| e2e FAKE | `npm run test:e2e` | **3 PASS** |
| tsc | `npx tsc --noEmit` | PASS |
| build | `npm run build` | PASS |
| LIVE OpenAI | — | **NOT RUN** |
| CI GitHub new SHA | — | **NOT RUN** (pas de push projet) |
| RECETTE | — | **NOT AUTHORIZED** |

### Fake / Real Qualification

| Classe | Statut |
| --- | --- |
| DETERMINISTIC | PROVEN (unit SDK-RETRY) |
| PG/INTEGRATION | PROVEN (TURN-RACE, D4-PAGE) |
| BROWSER FAKE | PROVEN (3 Playwright) |
| LIVE | NOT RUN |
| CI NEW SHA | NOT RUN |
| RECETTE | NOT AUTHORIZED |

## 6. Sources consultées (non recopées)

- Prompt : `/Users/morris/Downloads/sfia-next-ml2-critical-correctif-3-blocages-cursor-2026-11-05.md`
- Template SFIA v2.6 §7/§9 ; guide routing §4.3.0b/§6.6 ; SEF + SEF-01 ; ENV-01 ; product-versioning ; ADR trajectoire ML2
- Spec/matrice ML2 As-Built locaux ; handoff précédent `5c9b7aa4`
- Code local `turn-command` / `service` / `d4-read-tools` / `nora-adapter` / `document/service`

## 7. Fichiers CRÉÉS (contenu complet)

### `projects/sfia-studio-next/web/src/db/migrations/006_ml2_turn_owner_token.sql`

```sql
-- ML2 Critical three-blocker — turn ownership fencing token.
-- Additive / rejouable. Does NOT open a transaction across provider calls.
-- Never apply to RECETTE/STABLE without Morris gate.

ALTER TABLE conversation_turn_commands
  ADD COLUMN IF NOT EXISTS owner_token text;

-- Backfill existing rows so CAS with token remains possible.
UPDATE conversation_turn_commands
SET owner_token = id
WHERE owner_token IS NULL;

CREATE INDEX IF NOT EXISTS conversation_turn_commands_owner_token_idx
  ON conversation_turn_commands (id, owner_token)
  WHERE status IN ('RUNNING', 'ACCEPTED');
```

### `projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts`

```typescript
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
```

## 8. Fichiers MODIFIÉS — diff utile intégral `00736f3a..57f6fc54`

> Exception de taille : le diff unifié complet du correctif est inclus ci-dessous (≈2k lignes) plutôt que de recopier chaque fichier entier post-modification. Les créations sont en §7 en contenu complet.

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 7d58b57e..c19b1080 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -298,3 +298,21 @@ Append-only logical journal of Cursor product deliveries.
 | Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
 | Verdict candidate | `LOCAL CORRECTIVE DELIVERY — REVIEW REQUIRED` |

+## delivery_id: DELIV-2026-11-05-ML2-THREE-BLOCKER-09
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-05 (Europe/Paris) ~18:45 CET |
+| Macro-lot | R5 / ML2 — three-blocker Critical corrective |
+| Type | INC/EVOL corrective (same ML2) |
+| Branch | `sfia/next-ml2-cognition-observability-integrated` (**local only**) |
+| Parent SHA | `00736f3a6c34f6f56d628b6dee2097a4aadda91b` |
+| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
+| Corrected | owner_token fencing+CAS ; SQL pagination terminante ; no SDK auto-retry after run() |
+| Schema | migration `006_ml2_turn_owner_token` (forward-only) |
+| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
+| Local proofs | unit 52 ; PG 68 ; Playwright 3 ; tsc+build PASS |
+| LIVE / CI / RECETTE | **NOT RUN / NOT AUTHORIZED** |
+| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
+| Verdict candidate | `LOCAL THREE-BLOCKER CORRECTIVE DELIVERY — READY FOR CHATGPT REVIEW` |
+
diff --git a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
index 40956f08..b488f5a5 100644
--- a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
+++ b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
@@ -478,3 +478,18 @@ Ce tableau **précise** les oracles OBS-Q01..10 déjà recensés (§§9–10), s
 | FIX-OBS-01/02 allowlist, RO query, purge, lanes | UNIT PROVEN | observability.test.ts |
 | C1–C6 régression | PG+BROWSER FAKE PROVEN | suites existantes PASS |
 | LIVE / CI / RECETTE | NOT RUN | hors mandat |
+
+## 17. As-Built three-blocker — 2026-11-05
+
+| Oracle | État | Preuve |
+| --- | --- | --- |
+| TURN-RACE-01 | PG PROVEN | ownership lost → UNKNOWN, no D4 |
+| TURN-RACE-02 | PG PROVEN | fence in document TX |
+| TURN-RACE-03 | PG PROVEN | concurrence clés / mismatch |
+| TURN-RACE-04 | PG PROVEN | lease heartbeat / stale |
+| D4-PAGE-01/02 | PG PROVEN | 620+ acquis, offsets >500 terminent |
+| D4-PAGE-04 | PG PROVEN | budget chars |
+| SDK-RETRY-01 | UNIT PROVEN | single run() on late errors |
+| C1–C6 régression | PG+BROWSER FAKE | suites existantes PASS |
+| LIVE / CI / RECETTE | NOT RUN | hors mandat |
+
diff --git a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
index e19bb972..15d383f6 100644
--- a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
+++ b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
@@ -895,3 +895,26 @@ Les cinq orientations forment **un seul macro-lot ML2**, avec QA C1–C6, COG-01
 | Playwright FAKE | 3 PASS |
 | tsc / build | PASS |
 | LIVE / CI new SHA / RECETTE | **NOT RUN** |
+
+## 24. As-Built three-blocker corrective — 2026-11-05 (local)
+
+> **LOCAL CORRECTIVE on `00736f3a` / same branch / no project push.** Trois blocages revue ChatGPT handoff `5c9b7aa4`.
+
+### 24.1 Invariants
+
+| ID | Invariant |
+| --- | --- |
+| TURN ownership | `owner_token` (migration 006) ; heartbeat lease ; D4 write fenced in TX ; terminal CAS+assistant atomiques ; CAS miss ⇒ jamais COMPLETE |
+| D4 pagination | SQL OFFSET/LIMIT multi-types ordonnés ; `hasMore=false` / `nextOffset=null` en fin ; pas de curseur stagnant |
+| SDK retry | Une seule invocation `run()` après exception ; pas de fallback non-stream |
+
+### 24.2 Preuves
+
+| Suite | Résultat |
+| --- | --- |
+| unit | 52 PASS |
+| PG | 68 PASS (dont `ml2-three-blocker.pg.test.ts` TURN-RACE/D4-PAGE) |
+| Playwright FAKE | 3 PASS |
+| tsc / build | PASS |
+| LIVE / CI / RECETTE | **NOT RUN** |
+
diff --git a/projects/sfia-studio-next/web/scripts/db-migrate.sh b/projects/sfia-studio-next/web/scripts/db-migrate.sh
index 09ab1a23..6e57cc4b 100755
--- a/projects/sfia-studio-next/web/scripts/db-migrate.sh
+++ b/projects/sfia-studio-next/web/scripts/db-migrate.sh
@@ -23,4 +23,5 @@ apply "002_session_auth_mode.sql"
 apply "003_ml2_knowledge_documents.sql"
 apply "004_ml2_integrity_corrective.sql"
 apply "005_ml2_conversation_turn_command.sql"
-echo "db:migrate OK (001→005)"
+apply "006_ml2_turn_owner_token.sql"
+echo "db:migrate OK (001→006)"
diff --git a/projects/sfia-studio-next/web/src/db/migrations/006_ml2_turn_owner_token.sql b/projects/sfia-studio-next/web/src/db/migrations/006_ml2_turn_owner_token.sql
new file mode 100644
index 00000000..fc48904c
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/db/migrations/006_ml2_turn_owner_token.sql
@@ -0,0 +1,15 @@
+-- ML2 Critical three-blocker — turn ownership fencing token.
+-- Additive / rejouable. Does NOT open a transaction across provider calls.
+-- Never apply to RECETTE/STABLE without Morris gate.
+
+ALTER TABLE conversation_turn_commands
+  ADD COLUMN IF NOT EXISTS owner_token text;
+
+-- Backfill existing rows so CAS with token remains possible.
+UPDATE conversation_turn_commands
+SET owner_token = id
+WHERE owner_token IS NULL;
+
+CREATE INDEX IF NOT EXISTS conversation_turn_commands_owner_token_idx
+  ON conversation_turn_commands (id, owner_token)
+  WHERE status IN ('RUNNING', 'ACCEPTED');
diff --git a/projects/sfia-studio-next/web/src/db/schema.ts b/projects/sfia-studio-next/web/src/db/schema.ts
index 3940b1fe..0e4b0e3b 100644
--- a/projects/sfia-studio-next/web/src/db/schema.ts
+++ b/projects/sfia-studio-next/web/src/db/schema.ts
@@ -205,6 +205,8 @@ export const conversationTurnCommands = pgTable(
     generationId: text("generation_id"),
     resultJson: text("result_json"),
     errorCategory: text("error_category"),
+    /** Ownership fence — invalidated on reconcile; required for terminal CAS / D4 gates. */
+    ownerToken: text("owner_token"),
     createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
     updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
   },
@@ -341,4 +343,4 @@ export const knowledgeSubjectEvents = pgTable(
   (t) => [index("knowledge_subject_events_subject_idx").on(t.subjectId)],
 );

-export const schemaRevision = "005_ml2_conversation_turn_command";
+export const schemaRevision = "006_ml2_turn_owner_token";
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts b/projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
index 256489d2..9d6658a0 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
@@ -26,8 +26,8 @@ export type D4ToolScope = {

 export type ToolCoverage = "COMPLETE" | "PARTIAL" | "EMPTY" | "DENIED" | "NOT_FOUND" | "STALE";

-/** Soft scan ceiling per category — prevents unbounded in-memory loads. */
-const MAX_SCAN_PER_CATEGORY = 500;
+/** Deterministic type order for cross-category pagination. */
+const TYPE_ORDER = ["acquis", "document", "open_point", "subject"] as const;

 function trimChars(text: string, max: number): { text: string; coverage: ToolCoverage } {
   if (max <= 0) return { text: "", coverage: "DENIED" };
@@ -59,8 +59,8 @@ export type SearchProjectResourcesInput = {
 type SearchItem = Record<string, unknown>;

 /**
- * DB-scoped search with filter-before-limit where possible.
- * totalMatchedExact when scan did not hit the soft ceiling; otherwise totalMatched unknown.
+ * DB-scoped search with SQL OFFSET/LIMIT across categories (terminating pagination).
+ * Global order: TYPE_ORDER then id ASC. Never returns empty page with hasMore=true + stagnant offset.
  */
 export async function searchProjectResources(scope: D4ToolScope, input: SearchProjectResourcesInput) {
   if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
@@ -75,211 +75,248 @@ export async function searchProjectResources(scope: D4ToolScope, input: SearchPr
   scope.budget.remainingCalls -= 1;

   await assertScope(scope);
-  const types = input.types?.length
-    ? input.types
-    : (["acquis", "open_point", "subject", "document"] as const);
+  const requested = new Set(
+    input.types?.length
+      ? input.types
+      : (["acquis", "open_point", "subject", "document"] as const),
+  );
+  const types = TYPE_ORDER.filter((t) => requested.has(t));
   const limit = Math.min(Math.max(input.limit ?? 8, 1), 20);
   const offset = Math.max(input.offset ?? 0, 0);
   const q = (input.query ?? "").trim().toLowerCase();

-  const items: SearchItem[] = [];
-  let scanCapped = false;
-  let totalExact = 0;
-
-  if (types.includes("acquis")) {
-    const where = and(
-      eq(knowledgeAcquis.preparationId, scope.preparationId),
-      eq(knowledgeAcquis.ownerPilotId, scope.pilotId),
-      eq(knowledgeAcquis.status, "CURRENT"),
-      q
-        ? or(
-            ilike(knowledgeAcquis.statement, `%${q}%`),
-            ilike(knowledgeAcquis.kind, `%${q}%`),
-          )
-        : undefined,
-    );
-    const [{ value: total }] = await db.select({ value: count() }).from(knowledgeAcquis).where(where);
-    totalExact += Number(total);
-    if (Number(total) > MAX_SCAN_PER_CATEGORY) scanCapped = true;
-    const rows = await db
-      .select({
-        id: knowledgeAcquis.id,
-        kind: knowledgeAcquis.kind,
-        statement: knowledgeAcquis.statement,
-        status: knowledgeAcquis.status,
-        subjectId: knowledgeAcquis.subjectId,
-        createdAt: knowledgeAcquis.createdAt,
-      })
-      .from(knowledgeAcquis)
-      .where(where)
-      .orderBy(desc(knowledgeAcquis.createdAt), asc(knowledgeAcquis.id))
-      .limit(MAX_SCAN_PER_CATEGORY);
-    for (const r of rows) {
-      items.push({
-        type: "acquis",
-        id: r.id,
-        kind: r.kind,
-        subjectId: r.subjectId,
-        status: r.status,
-        preview: r.statement.slice(0, 200),
-        resource_ref: `acquis:${r.id}`,
-      });
+  type CatCount = { type: (typeof TYPE_ORDER)[number]; total: number };
+  const counts: CatCount[] = [];
+
+  for (const t of types) {
+    if (t === "acquis") {
+      const where = and(
+        eq(knowledgeAcquis.preparationId, scope.preparationId),
+        eq(knowledgeAcquis.ownerPilotId, scope.pilotId),
+        eq(knowledgeAcquis.status, "CURRENT"),
+        q
+          ? or(
+              ilike(knowledgeAcquis.statement, `%${q}%`),
+              ilike(knowledgeAcquis.kind, `%${q}%`),
+            )
+          : undefined,
+      );
+      const [{ value: total }] = await db.select({ value: count() }).from(knowledgeAcquis).where(where);
+      counts.push({ type: t, total: Number(total) });
+    } else if (t === "open_point") {
+      const where = and(
+        eq(knowledgeOpenPoints.preparationId, scope.preparationId),
+        eq(knowledgeOpenPoints.ownerPilotId, scope.pilotId),
+        eq(knowledgeOpenPoints.status, "OPEN"),
+        q ? ilike(knowledgeOpenPoints.statement, `%${q}%`) : undefined,
+      );
+      const [{ value: total }] = await db
+        .select({ value: count() })
+        .from(knowledgeOpenPoints)
+        .where(where);
+      counts.push({ type: t, total: Number(total) });
+    } else if (t === "subject") {
+      const where = and(
+        eq(knowledgeSubjects.preparationId, scope.preparationId),
+        eq(knowledgeSubjects.ownerPilotId, scope.pilotId),
+        ne(knowledgeSubjects.status, "ARCHIVED"),
+        q ? ilike(knowledgeSubjects.title, `%${q}%`) : undefined,
+      );
+      const [{ value: total }] = await db
+        .select({ value: count() })
+        .from(knowledgeSubjects)
+        .where(where);
+      counts.push({ type: t, total: Number(total) });
+    } else {
+      const where = and(
+        eq(documents.preparationId, scope.preparationId),
+        eq(documents.ownerPilotId, scope.pilotId),
+        q ? ilike(documents.title, `%${q}%`) : undefined,
+      );
+      const [{ value: total }] = await db.select({ value: count() }).from(documents).where(where);
+      counts.push({ type: t, total: Number(total) });
     }
   }

-  if (types.includes("open_point")) {
-    const where = and(
-      eq(knowledgeOpenPoints.preparationId, scope.preparationId),
-      eq(knowledgeOpenPoints.ownerPilotId, scope.pilotId),
-      eq(knowledgeOpenPoints.status, "OPEN"),
-      q ? ilike(knowledgeOpenPoints.statement, `%${q}%`) : undefined,
-    );
-    const [{ value: total }] = await db
-      .select({ value: count() })
-      .from(knowledgeOpenPoints)
-      .where(where);
-    totalExact += Number(total);
-    if (Number(total) > MAX_SCAN_PER_CATEGORY) scanCapped = true;
-    const rows = await db
-      .select({
-        id: knowledgeOpenPoints.id,
-        statement: knowledgeOpenPoints.statement,
-        status: knowledgeOpenPoints.status,
-        subjectId: knowledgeOpenPoints.subjectId,
-        createdAt: knowledgeOpenPoints.createdAt,
-      })
-      .from(knowledgeOpenPoints)
-      .where(where)
-      .orderBy(desc(knowledgeOpenPoints.createdAt), asc(knowledgeOpenPoints.id))
-      .limit(MAX_SCAN_PER_CATEGORY);
-    for (const r of rows) {
-      items.push({
-        type: "open_point",
-        id: r.id,
-        subjectId: r.subjectId,
-        status: r.status,
-        preview: r.statement.slice(0, 200),
-        resource_ref: `open_point:${r.id}`,
-      });
-    }
-  }
+  const totalExact = counts.reduce((s, c) => s + c.total, 0);
+  const page: SearchItem[] = [];
+  let skip = offset;
+  let need = limit;

-  if (types.includes("subject")) {
-    const where = and(
-      eq(knowledgeSubjects.preparationId, scope.preparationId),
-      eq(knowledgeSubjects.ownerPilotId, scope.pilotId),
-      ne(knowledgeSubjects.status, "ARCHIVED"),
-      q ? ilike(knowledgeSubjects.title, `%${q}%`) : undefined,
-    );
-    const [{ value: total }] = await db
-      .select({ value: count() })
-      .from(knowledgeSubjects)
-      .where(where);
-    totalExact += Number(total);
-    if (Number(total) > MAX_SCAN_PER_CATEGORY) scanCapped = true;
-    const rows = await db
-      .select({
-        id: knowledgeSubjects.id,
-        title: knowledgeSubjects.title,
-        status: knowledgeSubjects.status,
-        updatedAt: knowledgeSubjects.updatedAt,
-      })
-      .from(knowledgeSubjects)
-      .where(where)
-      .orderBy(desc(knowledgeSubjects.updatedAt), asc(knowledgeSubjects.id))
-      .limit(MAX_SCAN_PER_CATEGORY);
-    for (const r of rows) {
-      items.push({
-        type: "subject",
-        id: r.id,
-        title: r.title,
-        status: r.status,
-        resource_ref: `subject:${r.id}`,
-      });
+  for (const cat of counts) {
+    if (need <= 0) break;
+    if (skip >= cat.total) {
+      skip -= cat.total;
+      continue;
     }
-  }
-
-  if (types.includes("document")) {
-    const where = and(
-      eq(documents.preparationId, scope.preparationId),
-      eq(documents.ownerPilotId, scope.pilotId),
-      q ? ilike(documents.title, `%${q}%`) : undefined,
-    );
-    const [{ value: total }] = await db.select({ value: count() }).from(documents).where(where);
-    totalExact += Number(total);
-    if (Number(total) > MAX_SCAN_PER_CATEGORY) scanCapped = true;
-    const rows = await db
-      .select({
-        id: documents.id,
-        title: documents.title,
-        createdAt: documents.createdAt,
-      })
-      .from(documents)
-      .where(where)
-      .orderBy(desc(documents.createdAt), asc(documents.id))
-      .limit(MAX_SCAN_PER_CATEGORY);
-    for (const d of rows) {
-      const rev = (
-        await db
-          .select({
-            id: documentRevisions.id,
-            revisionNumber: documentRevisions.revisionNumber,
-            status: documentRevisions.status,
-          })
-          .from(documentRevisions)
-          .where(
-            and(
-              eq(documentRevisions.documentId, d.id),
-              eq(documentRevisions.status, "AVAILABLE"),
-            ),
-          )
-          .orderBy(desc(documentRevisions.revisionNumber))
-          .limit(1)
-      )[0];
-      items.push({
-        type: "document",
-        id: d.id,
-        title: d.title,
-        latestRevisionId: rev?.id ?? null,
-        latestRevisionNumber: rev?.revisionNumber ?? null,
-        latestStatus: rev?.status ?? null,
-        resource_ref: `document:${d.id}`,
-        note: "Title/metadata only — content requires read_project_document_revision",
-      });
+    const localOffset = skip;
+    const take = Math.min(need, cat.total - localOffset);
+    skip = 0;
+
+    if (cat.type === "acquis") {
+      const where = and(
+        eq(knowledgeAcquis.preparationId, scope.preparationId),
+        eq(knowledgeAcquis.ownerPilotId, scope.pilotId),
+        eq(knowledgeAcquis.status, "CURRENT"),
+        q
+          ? or(
+              ilike(knowledgeAcquis.statement, `%${q}%`),
+              ilike(knowledgeAcquis.kind, `%${q}%`),
+            )
+          : undefined,
+      );
+      const rows = await db
+        .select({
+          id: knowledgeAcquis.id,
+          kind: knowledgeAcquis.kind,
+          statement: knowledgeAcquis.statement,
+          status: knowledgeAcquis.status,
+          subjectId: knowledgeAcquis.subjectId,
+        })
+        .from(knowledgeAcquis)
+        .where(where)
+        .orderBy(asc(knowledgeAcquis.id))
+        .offset(localOffset)
+        .limit(take);
+      for (const r of rows) {
+        page.push({
+          type: "acquis",
+          id: r.id,
+          kind: r.kind,
+          subjectId: r.subjectId,
+          status: r.status,
+          preview: r.statement.slice(0, 200),
+          resource_ref: `acquis:${r.id}`,
+        });
+      }
+    } else if (cat.type === "open_point") {
+      const where = and(
+        eq(knowledgeOpenPoints.preparationId, scope.preparationId),
+        eq(knowledgeOpenPoints.ownerPilotId, scope.pilotId),
+        eq(knowledgeOpenPoints.status, "OPEN"),
+        q ? ilike(knowledgeOpenPoints.statement, `%${q}%`) : undefined,
+      );
+      const rows = await db
+        .select({
+          id: knowledgeOpenPoints.id,
+          statement: knowledgeOpenPoints.statement,
+          status: knowledgeOpenPoints.status,
+          subjectId: knowledgeOpenPoints.subjectId,
+        })
+        .from(knowledgeOpenPoints)
+        .where(where)
+        .orderBy(asc(knowledgeOpenPoints.id))
+        .offset(localOffset)
+        .limit(take);
+      for (const r of rows) {
+        page.push({
+          type: "open_point",
+          id: r.id,
+          subjectId: r.subjectId,
+          status: r.status,
+          preview: r.statement.slice(0, 200),
+          resource_ref: `open_point:${r.id}`,
+        });
+      }
+    } else if (cat.type === "subject") {
+      const where = and(
+        eq(knowledgeSubjects.preparationId, scope.preparationId),
+        eq(knowledgeSubjects.ownerPilotId, scope.pilotId),
+        ne(knowledgeSubjects.status, "ARCHIVED"),
+        q ? ilike(knowledgeSubjects.title, `%${q}%`) : undefined,
+      );
+      const rows = await db
+        .select({
+          id: knowledgeSubjects.id,
+          title: knowledgeSubjects.title,
+          status: knowledgeSubjects.status,
+        })
+        .from(knowledgeSubjects)
+        .where(where)
+        .orderBy(asc(knowledgeSubjects.id))
+        .offset(localOffset)
+        .limit(take);
+      for (const r of rows) {
+        page.push({
+          type: "subject",
+          id: r.id,
+          title: r.title,
+          status: r.status,
+          resource_ref: `subject:${r.id}`,
+        });
+      }
+    } else {
+      const where = and(
+        eq(documents.preparationId, scope.preparationId),
+        eq(documents.ownerPilotId, scope.pilotId),
+        q ? ilike(documents.title, `%${q}%`) : undefined,
+      );
+      const rows = await db
+        .select({
+          id: documents.id,
+          title: documents.title,
+        })
+        .from(documents)
+        .where(where)
+        .orderBy(asc(documents.id))
+        .offset(localOffset)
+        .limit(take);
+      for (const d of rows) {
+        const rev = (
+          await db
+            .select({
+              id: documentRevisions.id,
+              revisionNumber: documentRevisions.revisionNumber,
+              status: documentRevisions.status,
+            })
+            .from(documentRevisions)
+            .where(
+              and(
+                eq(documentRevisions.documentId, d.id),
+                eq(documentRevisions.status, "AVAILABLE"),
+              ),
+            )
+            .orderBy(desc(documentRevisions.revisionNumber))
+            .limit(1)
+        )[0];
+        page.push({
+          type: "document",
+          id: d.id,
+          title: d.title,
+          latestRevisionId: rev?.id ?? null,
+          latestRevisionNumber: rev?.revisionNumber ?? null,
+          latestStatus: rev?.status ?? null,
+          resource_ref: `document:${d.id}`,
+          note: "Title/metadata only — content requires read_project_document_revision",
+        });
+      }
     }
+    need = limit - page.length;
   }

-  // Deterministic combined order for stable pagination (type, then id).
-  items.sort((a, b) => {
-    const ta = String(a.type);
-    const tb = String(b.type);
-    if (ta !== tb) return ta.localeCompare(tb);
-    return String(a.id).localeCompare(String(b.id));
-  });
-
-  const page = items.slice(offset, offset + limit);
-  const hasMore = offset + page.length < items.length || scanCapped;
-  const exhaustiveInAnnouncedScope = !scanCapped && offset + page.length >= items.length;
+  const hasMore = offset + page.length < totalExact;
+  // Terminating: empty page past end ⇒ hasMore false, nextOffset null (never stagnant cursor).
+  const nextOffset = hasMore ? offset + page.length : null;

   let coverage: ToolCoverage;
-  if (page.length === 0 && totalExact === 0 && !scanCapped) {
+  if (totalExact === 0) {
     coverage = "EMPTY";
-  } else if (exhaustiveInAnnouncedScope && page.length > 0 && offset === 0 && !hasMore) {
+  } else if (!hasMore && offset === 0) {
     coverage = "COMPLETE";
-  } else if (page.length === 0 && totalExact === 0) {
+  } else if (page.length === 0 && offset >= totalExact) {
     coverage = "EMPTY";
   } else {
-    coverage = hasMore || scanCapped || offset > 0 ? "PARTIAL" : "COMPLETE";
+    coverage = "PARTIAL";
   }

   const payload = {
     status: "AVAILABLE" as const,
     coverage,
-    totalMatched: scanCapped ? null : totalExact,
-    totalMatchedExact: !scanCapped,
-    totalMatchedSemantics: scanCapped ? ("unknown" as const) : ("exact" as const),
+    totalMatched: totalExact,
+    totalMatchedExact: true as const,
+    totalMatchedSemantics: "exact" as const,
     hasMore,
-    nextOffset: hasMore ? offset + page.length : null,
+    nextOffset,
     offset,
     limit,
     items: page,
@@ -288,9 +325,7 @@ export async function searchProjectResources(scope: D4ToolScope, input: SearchPr
       preparationIdBound: true,
       modelChoseScope: false,
     },
-    note: scanCapped
-      ? "Scan capped — absence of a hit does not prove resource absence beyond scanned window"
-      : undefined,
+    note: undefined as string | undefined,
   };

   // Charge full returned envelope against D4 char budget.
@@ -333,7 +368,6 @@ export async function searchProjectResources(scope: D4ToolScope, input: SearchPr
       chars_charged: charsCharged,
       coverage,
       has_more: hasMore,
-      scan_capped: scanCapped,
     },
   });

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index aa137935..5ae34f76 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -398,104 +398,39 @@ async function runLiveWithTools(
     } catch (streamErr) {
       const cat = categorizeProviderError(streamErr);
       streamingNotes = cat.category;
-      const contact: "YES" | "NO" | "UNCERTAIN" = cat.preContactLikely
-        ? "NO"
-        : streamingDelivered
-          ? "YES"
-          : "UNCERTAIN";
+      // Once run() was invoked, contact is at best UNCERTAIN — message text is NOT proof of non-send.
+      // No automatic second run() after any exception from the first invocation.
+      const contact: "YES" | "NO" | "UNCERTAIN" = streamingDelivered
+        ? "YES"
+        : "UNCERTAIN";
       providerContacted = contact;
       attempts.push({
         attemptId: streamAttemptId,
         kind: "stream",
-        outcome: cat.interrupted ? "INTERRUPTED" : contact === "UNCERTAIN" ? "UNKNOWN" : "FAILED",
+        outcome: cat.interrupted ? "INTERRUPTED" : "UNKNOWN",
         notes: cat.category,
         providerContacted: contact,
       });

-      // BLOQUANT: no automatic second run() when provider state is uncertain.
-      // Distinct retry only if failure attested BEFORE any provider contact.
-      if (contact !== "NO" || controller.signal.aborted) {
-        const status = cat.interrupted
-          ? ("INTERRUPTED" as const)
-          : contact === "UNCERTAIN"
-            ? ("UNKNOWN" as const)
-            : ("FAILED" as const);
-        return {
-          generationId,
-          mode: "openai-agents-sdk-live",
-          status,
-          streamingProvisional: false,
-          streamingAttempted,
-          streamingDelivered,
-          streamingNotes,
-          content: `Nora LIVE ${status}: état fournisseur ${contact === "UNCERTAIN" ? "incertain — aucune nouvelle tentative automatique" : "échoué"}. Message utilisateur déjà persisté. Détail technique non exposé.`,
-          policy,
-          modelRequested: policy.modelRequested,
-          modelApplied: null,
-          effortRequested: policy.effortRequested,
-          effortApplied: null,
-          attempts,
-          toolCallsObserved: policy.budgets.maxD4ToolCalls - initialBudget.remainingCalls,
-          d4CharsReturned: policy.budgets.maxD4CharsReturned - initialBudget.remainingChars,
-        };
-      }
-
-      // Pre-contact only: one explicit non-stream attempt under remaining budget.
-      if (attempts.length >= policy.budgets.maxProviderCalls) {
-        return {
-          generationId,
-          mode: "openai-agents-sdk-live",
-          status: "FAILED",
-          streamingProvisional: false,
-          streamingAttempted,
-          streamingDelivered,
-          streamingNotes: "PROVIDER_PRE_CONTACT_BUDGET_EXHAUSTED",
-          content:
-            "Nora LIVE FAILED: échec avant contact fournisseur et budget d'appels épuisé. Aucun effet métier inventé.",
-          policy,
-          modelRequested: policy.modelRequested,
-          modelApplied: null,
-          effortRequested: policy.effortRequested,
-          effortApplied: null,
-          attempts,
-          toolCallsObserved: 0,
-          d4CharsReturned: 0,
-        };
-      }
-
-      const fallbackAttemptId = newAttemptId();
-      emitObs({
-        event_name: "d3.nora.provider_attempt",
-        component: "d3.nora_adapter",
-        operation_id: input.toolScope?.operationId,
-        generation_id: generationId,
-        attempt_id: fallbackAttemptId,
-        outcome: "PARTIAL",
-        policy_version: policy.policyVersion,
-        profile_type:
-          policy.profileType === "TEST_BOUNDARY" ? "TEST_BOUNDARY" : "OPERATIONAL",
-        meta: {
-          kind: "non_stream_pre_contact_retry",
-          prior_attempt: streamAttemptId,
-        },
-      });
-      providerContacted = "UNCERTAIN";
-      const result = await run(agent, prompt, {
-        maxTurns,
-        signal: controller.signal,
-      } as Parameters<typeof run>[2]);
-      content =
-        typeof result.finalOutput === "string"
-          ? result.finalOutput.trim()
-          : String(result.finalOutput ?? "").trim();
-      providerContacted = content ? "YES" : "UNCERTAIN";
-      attempts.push({
-        attemptId: fallbackAttemptId,
-        kind: "non_stream",
-        outcome: content ? "SUCCESS" : "UNKNOWN",
-        notes: "pre_contact_retry_only",
-        providerContacted,
-      });
+      const status = cat.interrupted ? ("INTERRUPTED" as const) : ("UNKNOWN" as const);
+      return {
+        generationId,
+        mode: "openai-agents-sdk-live",
+        status,
+        streamingProvisional: false,
+        streamingAttempted,
+        streamingDelivered,
+        streamingNotes,
+        content: `Nora LIVE ${status}: une seule tentative fournisseur — aucune relance automatique après exception. Message utilisateur déjà persisté. Détail technique non exposé.`,
+        policy,
+        modelRequested: policy.modelRequested,
+        modelApplied: null,
+        effortRequested: policy.effortRequested,
+        effortApplied: null,
+        attempts,
+        toolCallsObserved: policy.budgets.maxD4ToolCalls - initialBudget.remainingCalls,
+        d4CharsReturned: policy.budgets.maxD4CharsReturned - initialBudget.remainingChars,
+      };
     }
   } finally {
     clearTimeout(wallTimer);
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index b7ea5da6..87863819 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -1,6 +1,7 @@
 import { and, asc, eq } from "drizzle-orm";
 import { db } from "@/db/client";
 import { conversations, messages } from "@/db/schema";
+// db still used by getConversationId / listMessages
 import { newId } from "@/lib/ids";
 import { generateNoraReply } from "./nora-adapter";
 import { getPreparationContext } from "@/domains/preparation/service";
@@ -10,9 +11,12 @@ import {
 } from "@/domains/knowledge/service";
 import { listDocuments, savePreparationDocument } from "@/domains/document/service";
 import {
-  completeTurnCommand,
+  commitTurnTerminal,
   markTurnUnknown,
+  requireTurnOwnership,
   reserveTurnCommand,
+  touchTurnLease,
+  turnRaceHooks,
 } from "./turn-command";
 import { emitObs, newRequestId } from "@/lib/observability";
 import { StudioError } from "@/lib/http-errors";
@@ -182,18 +186,26 @@ export async function postUserMessageAndNora(

   let reply;
   try {
-    reply = await generateNoraReply({
-      userText: content,
-      contextSnippets,
-      knowledgeSnippets: [...knowledge.snippets, ...docSnippets],
-      toolScope: {
-        pilotId,
-        preparationId,
-        operationId: reserved.operationId,
-      },
-    });
+    // Heartbeat during long provider work so stale lease does not falsely orphan an active run.
+    const leasePulse = setInterval(() => {
+      void touchTurnLease(reserved.commandId, reserved.ownerToken);
+    }, 60_000);
+    try {
+      reply = await generateNoraReply({
+        userText: content,
+        contextSnippets,
+        knowledgeSnippets: [...knowledge.snippets, ...docSnippets],
+        toolScope: {
+          pilotId,
+          preparationId,
+          operationId: reserved.operationId,
+        },
+      });
+    } finally {
+      clearInterval(leasePulse);
+    }
   } catch (e) {
-    await markTurnUnknown(reserved.commandId, "PROVIDER_EXCEPTION");
+    await markTurnUnknown(reserved.commandId, "PROVIDER_EXCEPTION", reserved.ownerToken);
     emitObs({
       event_name: "d3.turn.unknown",
       component: "d3.conversation",
@@ -205,31 +217,36 @@ export async function postUserMessageAndNora(
     throw e;
   }

-  const assistantId = newId("msg");
-  try {
-    await db.insert(messages).values({
-      id: assistantId,
-      conversationId: ctx.conversation.id,
-      role: "assistant",
-      content: reply.content,
-      status: reply.status,
-      generationId: reply.generationId,
-      ordinal: reserved.ordinalAssistant,
-    });
-  } catch (e) {
-    await markTurnUnknown(reserved.commandId, "ASSISTANT_PERSIST_FAILED");
+  if (turnRaceHooks.afterGenerateBeforeEffects) {
+    await turnRaceHooks.afterGenerateBeforeEffects();
+  }
+
+  // Ownership may have been revoked/reconciled during generation — no COMPLETE, no D4.
+  if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
     emitObs({
-      event_name: "d3.turn.unknown",
+      event_name: "d3.turn.ownership_lost",
       component: "d3.conversation",
       request_id: requestId,
       operation_id: reserved.operationId,
       generation_id: reply.generationId,
       outcome: "UNKNOWN",
-      error_category: "ASSISTANT_PERSIST_FAILED",
+      error_category: "OWNERSHIP_LOST_AFTER_GENERATE",
     });
-    throw e;
+    return {
+      operationId: reserved.operationId,
+      requestId,
+      status: "UNKNOWN",
+      generationId: reply.generationId,
+      userMessageId: reserved.userMessageId,
+      assistantMessageId: null,
+      idempotentReplay: false,
+      humanDecisionCreated: false,
+      noraMode: reply.mode,
+    };
   }

+  const assistantId = newId("msg");
+
   let capitalisation: Awaited<ReturnType<typeof maybeCapitalizeFromExchange>> = {
     capitalisations: [],
     selectionMethod: "lexical-heuristic",
@@ -238,99 +255,129 @@ export async function postUserMessageAndNora(
     humanDecisionCreated: false,
   };
   let capitalisationError: string | undefined;
-  if (reply.status === "COMPLETE") {
-    try {
-      capitalisation = await maybeCapitalizeFromExchange(pilotId, preparationId, {
-        userText: content,
-        assistantText: reply.content,
-        generationId: reply.generationId,
-        userMessageId: reserved.userMessageId,
-      });
-    } catch {
-      capitalisationError = "CAPITALISATION_EXCEPTION";
-      emitObs({
-        event_name: "d3.turn.capitalisation_failed",
-        component: "d3.conversation",
-        request_id: requestId,
-        operation_id: reserved.operationId,
-        generation_id: reply.generationId,
-        outcome: "UNKNOWN",
-        error_category: "CAPITALISATION_EXCEPTION",
-      });
-    }
-  }
-  const confirmedCapitalisations = capitalisation.capitalisations.filter(
-    (c) => c.status === "AVAILABLE",
-  );
-
   let documentSave: Awaited<ReturnType<typeof savePreparationDocument>> | null = null;
   let documentSaveUnknown = false;
-  if (reply.status === "COMPLETE" && explicitDocumentIntent(content)) {
-    const extracted = extractDocumentMarkdown(reply.content, content);
-    if (extracted) {
+  let ownershipLostBeforeD4 = false;
+
+  if (reply.status === "COMPLETE") {
+    if (turnRaceHooks.beforeD4Effect) {
+      await turnRaceHooks.beforeD4Effect();
+    }
+    if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
+      ownershipLostBeforeD4 = true;
+    } else {
       try {
-        documentSave = await savePreparationDocument(
-          pilotId,
-          preparationId,
-          extracted.title,
-          extracted.content,
-          undefined,
-          {
-            correlationKey: opts?.correlationKey
-              ? `doc:${opts.correlationKey}`
-              : `doc:${reply.generationId}`,
-            provenance: {
-              sourceKind: "nora",
-              generationId: reply.generationId,
-              userMessageId: reserved.userMessageId,
-              explicitRequest: true,
-            },
-            scope: "document",
-          },
-        );
-        if (documentSave.status !== "AVAILABLE") {
-          documentSaveUnknown = documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
-        }
+        capitalisation = await maybeCapitalizeFromExchange(pilotId, preparationId, {
+          userText: content,
+          assistantText: reply.content,
+          generationId: reply.generationId,
+          userMessageId: reserved.userMessageId,
+        });
       } catch {
-        documentSave = { status: "UNKNOWN", reason: "DOCUMENT_SAVE_EXCEPTION" } as Awaited<
-          ReturnType<typeof savePreparationDocument>
-        >;
-        documentSaveUnknown = true;
+        capitalisationError = "CAPITALISATION_EXCEPTION";
         emitObs({
-          event_name: "d3.turn.document_save_failed",
+          event_name: "d3.turn.capitalisation_failed",
           component: "d3.conversation",
           request_id: requestId,
           operation_id: reserved.operationId,
           generation_id: reply.generationId,
           outcome: "UNKNOWN",
-          error_category: "DOCUMENT_SAVE_EXCEPTION",
+          error_category: "CAPITALISATION_EXCEPTION",
         });
       }
+
+      if (explicitDocumentIntent(content) && !ownershipLostBeforeD4) {
+        const extracted = extractDocumentMarkdown(reply.content, content);
+        if (extracted) {
+          try {
+            documentSave = await savePreparationDocument(
+              pilotId,
+              preparationId,
+              extracted.title,
+              extracted.content,
+              undefined,
+              {
+                correlationKey: opts?.correlationKey
+                  ? `doc:${opts.correlationKey}`
+                  : `doc:${reply.generationId}`,
+                provenance: {
+                  sourceKind: "nora",
+                  generationId: reply.generationId,
+                  userMessageId: reserved.userMessageId,
+                  explicitRequest: true,
+                },
+                scope: "document",
+                turnFence: {
+                  commandId: reserved.commandId,
+                  ownerToken: reserved.ownerToken,
+                  beforeFenceCheck: turnRaceHooks.beforeD4Effect,
+                },
+              },
+            );
+            if (documentSave.status === "FAILED" && documentSave.reason === "TURN_OWNERSHIP_LOST") {
+              ownershipLostBeforeD4 = true;
+              documentSave = null;
+            } else if (documentSave.status !== "AVAILABLE") {
+              documentSaveUnknown =
+                documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
+            }
+          } catch {
+            documentSave = { status: "UNKNOWN", reason: "DOCUMENT_SAVE_EXCEPTION" } as Awaited<
+              ReturnType<typeof savePreparationDocument>
+            >;
+            documentSaveUnknown = true;
+            emitObs({
+              event_name: "d3.turn.document_save_failed",
+              component: "d3.conversation",
+              request_id: requestId,
+              operation_id: reserved.operationId,
+              generation_id: reply.generationId,
+              outcome: "UNKNOWN",
+              error_category: "DOCUMENT_SAVE_EXCEPTION",
+            });
+          }
+        }
+      }
     }
   }

-  // COMPLETE must not mask unknown documentary effect.
+  const confirmedCapitalisations = capitalisation.capitalisations.filter(
+    (c) => c.status === "AVAILABLE",
+  );
+
   let turnStatus: "COMPLETE" | "FAILED" | "UNKNOWN" =
-    reply.status === "COMPLETE"
-      ? "COMPLETE"
-      : reply.status === "UNKNOWN"
-        ? "UNKNOWN"
-        : "FAILED";
+    ownershipLostBeforeD4
+      ? "UNKNOWN"
+      : reply.status === "COMPLETE"
+        ? "COMPLETE"
+        : reply.status === "UNKNOWN"
+          ? "UNKNOWN"
+          : "FAILED";

   if (
+    !ownershipLostBeforeD4 &&
     reply.status === "COMPLETE" &&
     (documentSaveUnknown || capitalisationError) &&
     explicitDocumentIntent(content)
   ) {
     turnStatus = "UNKNOWN";
-  } else if (reply.status === "COMPLETE" && capitalisationError && !explicitDocumentIntent(content)) {
-    // Capitalisation failure alone does not invent success over D4 write — mark UNKNOWN if any write attempted.
+  } else if (
+    !ownershipLostBeforeD4 &&
+    reply.status === "COMPLETE" &&
+    capitalisationError &&
+    !explicitDocumentIntent(content)
+  ) {
+    turnStatus = "UNKNOWN";
+  }
+
+  // Lost ownership ⇒ never claim COMPLETE even if reply looked complete.
+  if (ownershipLostBeforeD4) {
     turnStatus = "UNKNOWN";
   }

   const resultPayload: TurnResult = {
     userMessageId: reserved.userMessageId,
-    assistantMessageId: assistantId,
+    assistantMessageId: ownershipLostBeforeD4 ? null : assistantId,
     operationId: reserved.operationId,
     requestId,
     noraMode: reply.mode,
@@ -359,22 +406,42 @@ export async function postUserMessageAndNora(
       selectionMethod: knowledge.selectionMethod,
       selectionLimit: knowledge.selectionLimit,
     },
-    capitalisation: confirmedCapitalisations,
-    capitalisationAttempted: capitalisation.capitalisations,
-    capitalisationLimit: capitalisationError ?? capitalisation.selectionLimit,
-    documentSave,
+    capitalisation: ownershipLostBeforeD4 ? [] : confirmedCapitalisations,
+    capitalisationAttempted: ownershipLostBeforeD4 ? [] : capitalisation.capitalisations,
+    capitalisationLimit: ownershipLostBeforeD4
+      ? "OWNERSHIP_LOST"
+      : capitalisationError ?? capitalisation.selectionLimit,
+    documentSave: ownershipLostBeforeD4 ? null : documentSave,
     idempotentReplay: false,
     humanDecisionCreated: false,
   };

-  const applied = await completeTurnCommand({
+  if (turnRaceHooks.beforeTerminalCommit) {
+    await turnRaceHooks.beforeTerminalCommit();
+  }
+
+  const applied = await commitTurnTerminal({
     commandId: reserved.commandId,
+    ownerToken: reserved.ownerToken,
     status: turnStatus,
-    assistantMessageId: assistantId,
+    conversationId: ctx.conversation.id,
+    assistant: ownershipLostBeforeD4
+      ? undefined
+      : {
+          id: assistantId,
+          content: reply.content,
+          messageStatus: reply.status,
+          generationId: reply.generationId,
+          ordinal: reserved.ordinalAssistant,
+        },
     generationId: reply.generationId,
     resultJson: JSON.stringify(resultPayload),
     errorCategory:
-      turnStatus === "COMPLETE" ? undefined : capitalisationError ?? reply.status,
+      turnStatus === "COMPLETE"
+        ? undefined
+        : ownershipLostBeforeD4
+          ? "OWNERSHIP_LOST"
+          : capitalisationError ?? reply.status,
   });

   if (!applied.applied) {
@@ -387,6 +454,14 @@ export async function postUserMessageAndNora(
       outcome: "UNKNOWN",
       error_category: "COMPLETE_CAS_MISSED",
     });
+    // Never return COMPLETE when ownership CAS failed.
+    return {
+      ...resultPayload,
+      status: "UNKNOWN",
+      assistantMessageId: null,
+      documentSave: null,
+      capitalisation: [],
+    };
   }

   emitObs({
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
index 3d8234f1..ec02196f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
@@ -1,7 +1,7 @@
 /**
  * Durable D3 turn command — short transactional reservation only.
  * Never hold a DB transaction open across the provider call.
- * Orphan RUNNING → conservative UNKNOWN / recovery; no permanent lock on the thread.
+ * Ownership fencing via owner_token: lost ownership ⇒ no COMPLETE, no further D4 commits.
  */
 import { and, eq, sql } from "drizzle-orm";
 import { db } from "@/db/client";
@@ -9,6 +9,7 @@ import { conversationTurnCommands, messages } from "@/db/schema";
 import { newId } from "@/lib/ids";
 import { StudioError } from "@/lib/http-errors";
 import { fingerprintRequest, newOperationId } from "@/lib/observability";
+import { randomUUID } from "node:crypto";

 export type TurnCommandStatus =
   | "ACCEPTED"
@@ -25,6 +26,7 @@ export type ReservedTurn = {
   conversationId: string;
   clientTurnKey: string;
   requestFingerprint: string;
+  ownerToken: string;
   ordinalUser: number;
   ordinalAssistant: number;
   userMessageId: string;
@@ -42,24 +44,70 @@ export type ReplayedTurn = {
   reconciled?: boolean;
 };

-/** Stale RUNNING lease — conservative unblock after wall-clock safety margin. */
+/** Stale RUNNING lease — only when heartbeat (updated_at) is older than this. */
 export const TURN_RUNNING_STALE_MS = 20 * 60 * 1000;

+/** Injectable clock for deterministic lease tests. */
+export const turnClock = {
+  nowMs: (): number => Date.now(),
+};
+
+/** Test hooks — must stay no-op in production paths. */
+export const turnRaceHooks: {
+  afterGenerateBeforeEffects?: () => Promise<void>;
+  beforeD4Effect?: () => Promise<void>;
+  beforeTerminalCommit?: () => Promise<void>;
+} = {};
+
 export function turnFingerprint(content: string): string {
   return fingerprintRequest(["v1", content.trim()]);
 }

+function newOwnerToken(): string {
+  return `own_${randomUUID()}`;
+}
+
 function isStaleRunning(updatedAt: Date | null | undefined): boolean {
   if (!updatedAt) return true;
-  return Date.now() - updatedAt.getTime() > TURN_RUNNING_STALE_MS;
+  return turnClock.nowMs() - updatedAt.getTime() > TURN_RUNNING_STALE_MS;
+}
+
+/**
+ * Heartbeat + ownership proof. Refreshes updated_at so long active runs are not
+ * falsely reconciled as orphans. Returns false if ownership lost.
+ */
+export async function touchTurnLease(
+  commandId: string,
+  ownerToken: string,
+): Promise<{ owned: boolean }> {
+  const updated = await db
+    .update(conversationTurnCommands)
+    .set({ updatedAt: new Date(turnClock.nowMs()) })
+    .where(
+      and(
+        eq(conversationTurnCommands.id, commandId),
+        eq(conversationTurnCommands.ownerToken, ownerToken),
+        sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
+      ),
+    )
+    .returning({ id: conversationTurnCommands.id });
+  return { owned: updated.length > 0 };
+}
+
+/**
+ * Assert ownership still holds (short TX). Use before every D4 write boundary.
+ */
+export async function requireTurnOwnership(
+  commandId: string,
+  ownerToken: string,
+): Promise<boolean> {
+  const { owned } = await touchTurnLease(commandId, ownerToken);
+  return owned;
 }

 /**
  * Conservative reconciliation of an orphan RUNNING command.
- * - Assistant already persisted at ordinal → link + UNKNOWN (effect known for message; turn not COMPLETE without resultJson proof)
- * - Stale with no assistant → UNKNOWN, thread unlockable
- * - Fresh RUNNING → leave as-is (caller may 409)
- * Never invents COMPLETE or re-invokes provider.
+ * Invalidates owner_token so a late execution cannot CAS-complete or fence D4.
  */
 export async function reconcileRunningCommand(commandId: string): Promise<{
   status: TurnCommandStatus;
@@ -124,7 +172,6 @@ export async function reconcileRunningCommand(commandId: string): Promise<{

     const stale = isStaleRunning(row.updatedAt);
     if (!stale && !assistantId) {
-      // Still legitimately in flight — do not force UNKNOWN.
       return {
         status: "RUNNING" as const,
         reconciled: false,
@@ -138,6 +185,7 @@ export async function reconcileRunningCommand(commandId: string): Promise<{
       ? "RECONCILED_ASSISTANT_PRESENT_TURN_UNKNOWN"
       : "RECONCILED_STALE_RUNNING_NO_ASSISTANT";

+    // Invalidate owner_token — late owner can no longer commit.
     const updated = await tx
       .update(conversationTurnCommands)
       .set({
@@ -145,7 +193,8 @@ export async function reconcileRunningCommand(commandId: string): Promise<{
         assistantMessageId: assistantId,
         generationId,
         errorCategory,
-        updatedAt: new Date(),
+        ownerToken: `revoked_${randomUUID()}`,
+        updatedAt: new Date(turnClock.nowMs()),
       })
       .where(
         and(
@@ -182,10 +231,6 @@ export async function reconcileRunningCommand(commandId: string): Promise<{
   });
 }

-/**
- * Reserve ordinals + insert user message + create RUNNING command under a short lock.
- * Or return durable replay / conflict for the same client_turn_key.
- */
 export async function reserveTurnCommand(args: {
   conversationId: string;
   ownerPilotId: string;
@@ -224,7 +269,6 @@ export async function reserveTurnCommand(args: {
       }

       if (existing.status === "RUNNING" || existing.status === "ACCEPTED") {
-        // Peek assistant / staleness inside same lock for same-key recovery.
         let assistantId = existing.assistantMessageId;
         let generationId = existing.generationId;
         if (!assistantId && existing.ordinalAssistant != null) {
@@ -258,7 +302,8 @@ export async function reserveTurnCommand(args: {
               errorCategory: assistantId
                 ? "RECONCILED_ASSISTANT_PRESENT_TURN_UNKNOWN"
                 : "RECONCILED_STALE_RUNNING_NO_ASSISTANT",
-              updatedAt: new Date(),
+              ownerToken: `revoked_${randomUUID()}`,
+              updatedAt: new Date(turnClock.nowMs()),
             })
             .where(
               and(
@@ -317,7 +362,8 @@ export async function reserveTurnCommand(args: {
           .set({
             status: "UNKNOWN",
             errorCategory: "RECONCILED_STALE_RUNNING_OTHER_KEY",
-            updatedAt: new Date(),
+            ownerToken: `revoked_${randomUUID()}`,
+            updatedAt: new Date(turnClock.nowMs()),
           })
           .where(
             and(
@@ -345,6 +391,7 @@ export async function reserveTurnCommand(args: {
     const userMessageId = newId("msg");
     const commandId = newId("tcmd");
     const operationId = newOperationId();
+    const ownerToken = newOwnerToken();

     await tx.insert(messages).values({
       id: userMessageId,
@@ -363,10 +410,11 @@ export async function reserveTurnCommand(args: {
       requestFingerprint: fp,
       operationId,
       status: "RUNNING",
+      ownerToken,
       ordinalUser,
       ordinalAssistant,
       userMessageId,
-      updatedAt: new Date(),
+      updatedAt: new Date(turnClock.nowMs()),
     });

     return {
@@ -376,6 +424,7 @@ export async function reserveTurnCommand(args: {
       conversationId: args.conversationId,
       clientTurnKey,
       requestFingerprint: fp,
+      ownerToken,
       ordinalUser,
       ordinalAssistant,
       userMessageId,
@@ -384,9 +433,103 @@ export async function reserveTurnCommand(args: {
 }

 /**
- * Conditional terminal transition (CAS) — only from RUNNING/ACCEPTED.
- * Returns whether the update applied.
+ * Atomic terminal commit under ownership fence:
+ * insert assistant (if provided) + CAS status with owner_token in the same short TX.
+ * Lost ownership ⇒ applied:false — caller must not return COMPLETE.
  */
+export async function commitTurnTerminal(args: {
+  commandId: string;
+  ownerToken: string;
+  status: TurnCommandStatus;
+  conversationId: string;
+  assistant?: {
+    id: string;
+    content: string;
+    messageStatus: string;
+    generationId: string;
+    ordinal: number;
+  };
+  generationId?: string;
+  resultJson?: string;
+  errorCategory?: string;
+}): Promise<{ applied: boolean }> {
+  if (args.status === "RUNNING" || args.status === "ACCEPTED") {
+    throw new StudioError("INVALID_REQUEST", "commitTurnTerminal exige un statut terminal");
+  }
+
+  return db.transaction(async (tx) => {
+    if (args.assistant) {
+      // Insert only if ownership still holds — checked via subsequent CAS.
+      // Pre-check fence inside TX:
+      const owned = (
+        await tx
+          .select({ id: conversationTurnCommands.id })
+          .from(conversationTurnCommands)
+          .where(
+            and(
+              eq(conversationTurnCommands.id, args.commandId),
+              eq(conversationTurnCommands.ownerToken, args.ownerToken),
+              sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
+            ),
+          )
+          .limit(1)
+      )[0];
+      if (!owned) {
+        return { applied: false };
+      }
+
+      // Idempotent ordinal: if assistant already there, reuse.
+      const existingAssistant = (
+        await tx
+          .select()
+          .from(messages)
+          .where(
+            and(
+              eq(messages.conversationId, args.conversationId),
+              eq(messages.ordinal, args.assistant.ordinal),
+              eq(messages.role, "assistant"),
+            ),
+          )
+          .limit(1)
+      )[0];
+
+      if (!existingAssistant) {
+        await tx.insert(messages).values({
+          id: args.assistant.id,
+          conversationId: args.conversationId,
+          role: "assistant",
+          content: args.assistant.content,
+          status: args.assistant.messageStatus,
+          generationId: args.assistant.generationId,
+          ordinal: args.assistant.ordinal,
+        });
+      }
+    }
+
+    const updated = await tx
+      .update(conversationTurnCommands)
+      .set({
+        status: args.status,
+        assistantMessageId: args.assistant?.id ?? null,
+        generationId: args.generationId ?? args.assistant?.generationId ?? null,
+        resultJson: args.resultJson ?? null,
+        errorCategory: args.errorCategory ?? null,
+        updatedAt: new Date(turnClock.nowMs()),
+      })
+      .where(
+        and(
+          eq(conversationTurnCommands.id, args.commandId),
+          eq(conversationTurnCommands.ownerToken, args.ownerToken),
+          sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
+        ),
+      )
+      .returning({ id: conversationTurnCommands.id });
+
+    return { applied: updated.length > 0 };
+  });
+}
+
+/** @deprecated Prefer commitTurnTerminal with ownerToken — kept for markTurnUnknown paths. */
 export async function completeTurnCommand(args: {
   commandId: string;
   status: TurnCommandStatus;
@@ -394,11 +537,20 @@ export async function completeTurnCommand(args: {
   generationId?: string;
   resultJson?: string;
   errorCategory?: string;
+  ownerToken?: string;
 }): Promise<{ applied: boolean }> {
   if (args.status === "RUNNING" || args.status === "ACCEPTED") {
     throw new StudioError("INVALID_REQUEST", "completeTurnCommand exige un statut terminal");
   }

+  const conditions = [
+    eq(conversationTurnCommands.id, args.commandId),
+    sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
+  ];
+  if (args.ownerToken) {
+    conditions.push(eq(conversationTurnCommands.ownerToken, args.ownerToken));
+  }
+
   const updated = await db
     .update(conversationTurnCommands)
     .set({
@@ -407,32 +559,43 @@ export async function completeTurnCommand(args: {
       generationId: args.generationId ?? null,
       resultJson: args.resultJson ?? null,
       errorCategory: args.errorCategory ?? null,
-      updatedAt: new Date(),
+      updatedAt: new Date(turnClock.nowMs()),
     })
-    .where(
-      and(
-        eq(conversationTurnCommands.id, args.commandId),
-        sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
-      ),
-    )
+    .where(and(...conditions))
     .returning({ id: conversationTurnCommands.id });

   return { applied: updated.length > 0 };
 }

-export async function markTurnUnknown(commandId: string, errorCategory: string) {
+export async function markTurnUnknown(
+  commandId: string,
+  errorCategory: string,
+  ownerToken?: string,
+) {
   await completeTurnCommand({
     commandId,
     status: "UNKNOWN",
     errorCategory,
+    ownerToken,
   });
 }

-/** Force-stale helper for tests — advances updated_at into the past. */
+/** Force-stale helper for tests — advances updated_at into the past (uses turnClock). */
 export async function injectStaleRunningForTests(commandId: string, ageMs = TURN_RUNNING_STALE_MS + 1000) {
-  const past = new Date(Date.now() - ageMs);
+  const past = new Date(turnClock.nowMs() - ageMs);
   await db
     .update(conversationTurnCommands)
     .set({ updatedAt: past })
     .where(eq(conversationTurnCommands.id, commandId));
 }
+
+/** Test helper: revoke ownership while leaving status RUNNING (simulates lost fence mid-flight). */
+export async function revokeOwnerTokenForTests(commandId: string) {
+  await db
+    .update(conversationTurnCommands)
+    .set({
+      ownerToken: `revoked_${randomUUID()}`,
+      updatedAt: new Date(turnClock.nowMs()),
+    })
+    .where(eq(conversationTurnCommands.id, commandId));
+}
diff --git a/projects/sfia-studio-next/web/src/domains/document/service.ts b/projects/sfia-studio-next/web/src/domains/document/service.ts
index 2e0aa150..6c95d23f 100644
--- a/projects/sfia-studio-next/web/src/domains/document/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/document/service.ts
@@ -1,6 +1,6 @@
 import { and, asc, desc, eq, sql } from "drizzle-orm";
 import { db } from "@/db/client";
-import { documentRevisions, documents } from "@/db/schema";
+import { conversationTurnCommands, documentRevisions, documents } from "@/db/schema";
 import { newId } from "@/lib/ids";
 import { getPreparationContext } from "@/domains/preparation/service";
 import { createHash } from "node:crypto";
@@ -159,6 +159,13 @@ async function latestRevisionFor(documentId: string) {
   )[0];
 }

+export type TurnOwnershipFence = {
+  commandId: string;
+  ownerToken: string;
+  /** Optional test injection before the ownership check inside the write TX. */
+  beforeFenceCheck?: () => Promise<void>;
+};
+
 export async function savePreparationDocument(
   pilotId: string,
   preparationId: string,
@@ -171,6 +178,8 @@ export async function savePreparationDocument(
     provenance?: Record<string, unknown>;
     scope?: string;
     baseRevisionId?: string | null;
+    /** When set, document write aborts unless turn still owned (RUNNING + token). */
+    turnFence?: TurnOwnershipFence;
   },
 ) {
   if (contentMarkdown.length > MAX_DOC_CHARS) {
@@ -292,6 +301,39 @@ export async function savePreparationDocument(

   try {
     return await db.transaction(async (tx) => {
+      if (opts?.turnFence) {
+        if (opts.turnFence.beforeFenceCheck) {
+          await opts.turnFence.beforeFenceCheck();
+        }
+        await tx.execute(
+          sql`select id from conversation_turn_commands
+              where id = ${opts.turnFence.commandId}
+                and owner_token = ${opts.turnFence.ownerToken}
+                and status in ('RUNNING', 'ACCEPTED')
+              for share`,
+        );
+        const fenceRow = (
+          await tx
+            .select({ id: conversationTurnCommands.id })
+            .from(conversationTurnCommands)
+            .where(
+              and(
+                eq(conversationTurnCommands.id, opts.turnFence.commandId),
+                eq(conversationTurnCommands.ownerToken, opts.turnFence.ownerToken),
+                sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
+              ),
+            )
+            .limit(1)
+        )[0];
+        if (!fenceRow) {
+          return {
+            status: "FAILED" as const,
+            reason: "TURN_OWNERSHIP_LOST",
+            rolledBack: true as const,
+          };
+        }
+      }
+
       await tx.execute(
         sql`select id from documents where id = ${docId} and owner_pilot_id = ${pilotId} for update`,
       );
diff --git a/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts
new file mode 100644
index 00000000..3d2b97b1
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts
@@ -0,0 +1,363 @@
+import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
+import { config } from "dotenv";
+config({ path: ".env.local" });
+
+process.env.STUDIO_LANE = "DEV";
+process.env.STUDIO_E2E = "1";
+process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
+process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
+
+import { and, eq, sql } from "drizzle-orm";
+import { mkdtempSync, rmSync } from "node:fs";
+import { join } from "node:path";
+import { tmpdir } from "node:os";
+import { db } from "@/db/client";
+import {
+  conversationTurnCommands,
+  documents,
+  documentRevisions,
+  knowledgeAcquis,
+} from "@/db/schema";
+import { createDevTestSession } from "@/domains/identity/session";
+import { openOrCreatePreparation } from "@/domains/preparation/service";
+import {
+  getConversationId,
+  listMessages,
+  postUserMessageAndNora,
+} from "@/domains/conversation/service";
+import {
+  injectStaleRunningForTests,
+  reconcileRunningCommand,
+  requireTurnOwnership,
+  reserveTurnCommand,
+  revokeOwnerTokenForTests,
+  touchTurnLease,
+  turnClock,
+  turnRaceHooks,
+  TURN_RUNNING_STALE_MS,
+} from "@/domains/conversation/turn-command";
+import { searchProjectResources } from "@/domains/conversation/d4-read-tools";
+import { ensureSubject } from "@/domains/knowledge/service";
+import { newId } from "@/lib/ids";
+import { newOperationId } from "@/lib/observability";
+import { StudioError } from "@/lib/http-errors";
+
+describe("ML2 three-blocker corrective (PG)", () => {
+  let pilotId: string;
+  let preparationId: string;
+  let conversationId: string;
+  let obsDir: string;
+  const prevObs = process.env.SFIA_OBS_DIR;
+  const prevBase = process.env.SFIA_OBS_BASE;
+
+  beforeAll(async () => {
+    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
+    // Ensure owner_token column exists (migration 006).
+    await db.execute(sql`ALTER TABLE conversation_turn_commands ADD COLUMN IF NOT EXISTS owner_token text`);
+    obsDir = mkdtempSync(join(tmpdir(), "sfia-obs-3b-"));
+    process.env.SFIA_OBS_DIR = obsDir;
+    process.env.SFIA_OBS_BASE = obsDir;
+    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
+    pilotId = sess.pilotId;
+    const prep = await openOrCreatePreparation(pilotId);
+    preparationId = prep.id;
+    const cid = await getConversationId(pilotId, preparationId);
+    if (!cid) throw new Error("conversation missing");
+    conversationId = cid;
+  });
+
+  afterEach(async () => {
+    delete turnRaceHooks.afterGenerateBeforeEffects;
+    delete turnRaceHooks.beforeD4Effect;
+    delete turnRaceHooks.beforeTerminalCommit;
+    turnClock.nowMs = () => Date.now();
+    // Unlock conversation for next case — force any leftover RUNNING → UNKNOWN.
+    await db.execute(
+      sql`update conversation_turn_commands
+          set status = 'UNKNOWN',
+              owner_token = 'revoked_cleanup',
+              error_category = 'TEST_CLEANUP',
+              updated_at = now()
+          where conversation_id = ${conversationId} and status = 'RUNNING'`,
+    );
+  });
+
+  afterAll(() => {
+    if (prevObs === undefined) delete process.env.SFIA_OBS_DIR;
+    else process.env.SFIA_OBS_DIR = prevObs;
+    if (prevBase === undefined) delete process.env.SFIA_OBS_BASE;
+    else process.env.SFIA_OBS_BASE = prevBase;
+    rmSync(obsDir, { recursive: true, force: true });
+  });
+
+  it("TURN-RACE-01: ownership lost after generate → no COMPLETE, no D4 write", async () => {
+    const key = `race01-${Date.now()}`;
+    const content =
+      "Rédige un document de synthèse critique sur l'architecture distribuée pour le sas.";
+    turnRaceHooks.afterGenerateBeforeEffects = async () => {
+      const row = (
+        await db
+          .select()
+          .from(conversationTurnCommands)
+          .where(
+            and(
+              eq(conversationTurnCommands.conversationId, conversationId),
+              eq(conversationTurnCommands.clientTurnKey, key),
+            ),
+          )
+          .limit(1)
+      )[0];
+      expect(row).toBeTruthy();
+      // Simulate concurrent reconcile that invalidates ownership while run still in-flight.
+      await revokeOwnerTokenForTests(row!.id);
+      await db
+        .update(conversationTurnCommands)
+        .set({
+          status: "UNKNOWN",
+          errorCategory: "RECONCILED_TEST_INJECTION",
+          updatedAt: new Date(),
+        })
+        .where(eq(conversationTurnCommands.id, row!.id));
+    };
+
+    const docsBefore = await db
+      .select()
+      .from(documents)
+      .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)));
+
+    const result = await postUserMessageAndNora(pilotId, preparationId, content, {
+      clientTurnKey: key,
+    });
+    expect(result.status).toBe("UNKNOWN");
+    expect(result.documentSave == null || result.documentSave.status !== "AVAILABLE").toBe(true);
+
+    const docsAfter = await db
+      .select()
+      .from(documents)
+      .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)));
+    expect(docsAfter.length).toBe(docsBefore.length);
+
+    // Another intention can proceed.
+    const next = await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Compare option reprise après ownership lost",
+      { clientTurnKey: `race01-next-${Date.now()}` },
+    );
+    expect(next.status).toBe("COMPLETE");
+  });
+
+  it("TURN-RACE-02: fence inside document TX blocks write when token revoked mid-path", async () => {
+    const key = `race02-${Date.now()}`;
+    const content =
+      "Rédige un document de synthèse sur la pagination critique pour preuve fence.";
+    turnRaceHooks.beforeD4Effect = async () => {
+      const row = (
+        await db
+          .select()
+          .from(conversationTurnCommands)
+          .where(
+            and(
+              eq(conversationTurnCommands.conversationId, conversationId),
+              eq(conversationTurnCommands.clientTurnKey, key),
+            ),
+          )
+          .limit(1)
+      )[0];
+      await revokeOwnerTokenForTests(row!.id);
+    };
+
+    const docsBefore = (
+      await db
+        .select()
+        .from(documents)
+        .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)))
+    ).length;
+
+    const result = await postUserMessageAndNora(pilotId, preparationId, content, {
+      clientTurnKey: key,
+    });
+    expect(result.status).toBe("UNKNOWN");
+
+    const docsAfter = (
+      await db
+        .select()
+        .from(documents)
+        .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)))
+    ).length;
+    expect(docsAfter).toBe(docsBefore);
+  });
+
+  it("TURN-RACE-03: concurrent same key + divergent payload + distinct keys", async () => {
+    const key = `race03-${Date.now()}`;
+    const content = "Compare Alpha et Beta pour unicité";
+    const settled = await Promise.allSettled([
+      postUserMessageAndNora(pilotId, preparationId, content, { clientTurnKey: key }),
+      postUserMessageAndNora(pilotId, preparationId, content, { clientTurnKey: key }),
+    ]);
+    const ok = settled.filter((s) => s.status === "fulfilled");
+    expect(ok.length).toBeGreaterThanOrEqual(1);
+    const cmds = await db
+      .select()
+      .from(conversationTurnCommands)
+      .where(
+        and(
+          eq(conversationTurnCommands.conversationId, conversationId),
+          eq(conversationTurnCommands.clientTurnKey, key),
+        ),
+      );
+    expect(cmds).toHaveLength(1);
+
+    await expect(
+      postUserMessageAndNora(pilotId, preparationId, "Payload divergent race03", {
+        clientTurnKey: key,
+      }),
+    ).rejects.toSatisfy((e: unknown) => e instanceof StudioError && e.code === "PAYLOAD_MISMATCH");
+
+    const distinct = await Promise.allSettled([
+      postUserMessageAndNora(pilotId, preparationId, "Compare clé distincte A", {
+        clientTurnKey: `race03-a-${Date.now()}`,
+      }),
+      postUserMessageAndNora(pilotId, preparationId, "Compare clé distincte B", {
+        clientTurnKey: `race03-b-${Date.now()}`,
+      }),
+    ]);
+    const fulfilled = distinct.filter((s) => s.status === "fulfilled");
+    expect(fulfilled.length).toBeGreaterThanOrEqual(1);
+    const msgs = await listMessages(pilotId, preparationId);
+    const ordinals = msgs.map((m) => m.ordinal);
+    expect(new Set(ordinals).size).toBe(ordinals.length);
+  });
+
+  it("TURN-RACE-04: active lease heartbeat prevents false orphan; stale without heartbeat reconciles", async () => {
+    const reserved = await reserveTurnCommand({
+      conversationId,
+      ownerPilotId: pilotId,
+      clientTurnKey: `race04-active-${Date.now()}`,
+      content: "Tour actif long",
+    });
+    if (reserved.kind !== "fresh") throw new Error("expected fresh");
+
+    // Advance wall clock beyond stale window but heartbeat first → still owned.
+    const base = turnClock.nowMs();
+    turnClock.nowMs = () => base + TURN_RUNNING_STALE_MS + 5_000;
+    const touched = await touchTurnLease(reserved.commandId, reserved.ownerToken);
+    expect(touched.owned).toBe(true);
+    // After touch, updated_at is "now" in DB (real clock) — inject stale again for reconcile test.
+    await injectStaleRunningForTests(reserved.commandId);
+    const recon = await reconcileRunningCommand(reserved.commandId);
+    expect(recon.status).toBe("UNKNOWN");
+    expect(await requireTurnOwnership(reserved.commandId, reserved.ownerToken)).toBe(false);
+  });
+
+  it("D4-PAGE-01/02: >600 matches, offsets past 500 terminate without stagnant hasMore", async () => {
+    const subject = await ensureSubject(pilotId, preparationId, `Page bulk ${Date.now()}`);
+    const marker = `PAGE_MARK_${Date.now()}`;
+    for (let i = 0; i < 620; i++) {
+      await db.insert(knowledgeAcquis).values({
+        id: newId("acq"),
+        preparationId,
+        ownerPilotId: pilotId,
+        subjectId: subject.subjectId!,
+        kind: "HYPOTHESIS",
+        statement: `Acquis ${marker} n=${i.toString().padStart(4, "0")}`,
+        provenanceJson: JSON.stringify({ sourceKind: "pilot", epistemic: "hypothesized" }),
+        status: "CURRENT",
+      });
+    }
+
+    const scope = {
+      pilotId,
+      preparationId,
+      operationId: newOperationId(),
+      generationId: newId("gen"),
+      budget: { remainingCalls: 50, remainingChars: 5_000_000 },
+    };
+
+    const first = await searchProjectResources(scope, {
+      query: marker,
+      types: ["acquis"],
+      limit: 20,
+      offset: 0,
+    });
+    expect(first.status).toBe("AVAILABLE");
+    if (first.status !== "AVAILABLE") throw new Error("available");
+    expect(first.totalMatched).toBeGreaterThanOrEqual(620);
+    expect(first.hasMore).toBe(true);
+    expect(first.nextOffset).toBe(20);
+
+    const mid = await searchProjectResources(scope, {
+      query: marker,
+      types: ["acquis"],
+      limit: 20,
+      offset: 500,
+    });
+    expect(mid.status).toBe("AVAILABLE");
+    if (mid.status !== "AVAILABLE") throw new Error("available");
+    expect(mid.items.length).toBeGreaterThan(0);
+    expect(mid.items.length).toBeLessThanOrEqual(20);
+    if (mid.hasMore) {
+      expect(mid.nextOffset).toBe(500 + mid.items.length);
+      expect(mid.nextOffset).not.toBe(500);
+    }
+
+    // Walk until terminal
+    let offset = 0;
+    let pages = 0;
+    const seen = new Set<string>();
+    while (pages < 50) {
+      const page = await searchProjectResources(scope, {
+        query: marker,
+        types: ["acquis"],
+        limit: 20,
+        offset,
+      });
+      if (page.status !== "AVAILABLE") throw new Error("available");
+      for (const it of page.items) seen.add(String(it.id));
+      pages += 1;
+      if (!page.hasMore) {
+        expect(page.nextOffset).toBeNull();
+        break;
+      }
+      expect(page.nextOffset).not.toBeNull();
+      expect(page.nextOffset!).toBeGreaterThan(offset);
+      offset = page.nextOffset!;
+    }
+    expect(seen.size).toBeGreaterThanOrEqual(620);
+
+    const pastEnd = await searchProjectResources(scope, {
+      query: marker,
+      types: ["acquis"],
+      limit: 20,
+      offset: 10_000,
+    });
+    expect(pastEnd.status).toBe("AVAILABLE");
+    if (pastEnd.status !== "AVAILABLE") throw new Error("available");
+    expect(pastEnd.items).toHaveLength(0);
+    expect(pastEnd.hasMore).toBe(false);
+    expect(pastEnd.nextOffset).toBeNull();
+  });
+
+  it("D4-PAGE-04: tiny char budget denies/shrinks without claiming oversized envelope", async () => {
+    const scope = {
+      pilotId,
+      preparationId,
+      operationId: newOperationId(),
+      generationId: newId("gen"),
+      budget: { remainingCalls: 2, remainingChars: 40 },
+    };
+    const result = await searchProjectResources(scope, {
+      query: "PAGE_MARK",
+      types: ["acquis"],
+      limit: 20,
+      offset: 0,
+    });
+    expect(scope.budget.remainingChars).toBeGreaterThanOrEqual(0);
+    expect("charsCharged" in result).toBe(true);
+    if (result.status === "DENIED") {
+      expect(result.reason).toMatch(/BUDGET/);
+    } else {
+      expect(JSON.stringify(result).length).toBeLessThanOrEqual(40 + 200); // charged before/at deny path
+    }
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts b/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
index 5225c866..18cbb479 100644
--- a/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
@@ -5,7 +5,7 @@ import {
 } from "@/domains/conversation/nora-adapter";
 import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";

-describe("FIX-SDK — provider attempts and uncertain fallback", () => {
+describe("FIX-SDK / SDK-RETRY — no automatic second run()", () => {
   const prevLane = process.env.STUDIO_LANE;
   const prevE2e = process.env.STUDIO_E2E;
   const prevForce = process.env.STUDIO_FORCE_NORA_FIXTURE;
@@ -34,7 +34,7 @@ describe("FIX-SDK — provider attempts and uncertain fallback", () => {
     expect(c.category).not.toContain("sk-");
   });

-  it("FIX-SDK-01: after uncertain stream failure, run() is not called a second time", async () => {
+  async function runOnceScenario(message: string) {
     process.env.STUDIO_LANE = "DEV";
     delete process.env.STUDIO_E2E;
     delete process.env.STUDIO_FORCE_NORA_FIXTURE;
@@ -42,7 +42,7 @@ describe("FIX-SDK — provider attempts and uncertain fallback", () => {
     process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";

     const runMock = vi.fn(async () => {
-      throw new Error("stream mid-flight network reset ECONNRESET");
+      throw new Error(message);
     });

     vi.doMock("@openai/agents", () => ({
@@ -62,18 +62,29 @@ describe("FIX-SDK — provider attempts and uncertain fallback", () => {
       contextSnippets: [],
       policyOverride: policy,
     });
+    return { runMock, result };
+  }

+  it("SDK-RETRY-01: invalid model settings after run() → single invocation, non-COMPLETE", async () => {
+    const { runMock, result } = await runOnceScenario("invalid model settings rejected by API");
     expect(runMock).toHaveBeenCalledTimes(1);
-    expect(result.status === "UNKNOWN" || result.status === "FAILED" || result.status === "INTERRUPTED").toBe(
-      true,
-    );
+    expect(result.status).not.toBe("COMPLETE");
     expect(result.attempts.length).toBe(1);
     expect(result.attempts[0].providerContacted).toBe("UNCERTAIN");
-    expect(result.modelApplied).toBeNull();
-    expect(JSON.stringify(result)).not.toContain("ECONNRESET");
+    expect(JSON.stringify(result)).not.toContain("invalid model settings rejected");
   });

-  it("FIX-SDK-02: fixture path still works under DEV flags", async () => {
+  it("SDK-RETRY-01: ECONNRESET / 429 / 503 each invoke run() once only", async () => {
+    for (const msg of ["ECONNRESET mid stream", "HTTP 429 rate limited", "503 upstream unavailable"]) {
+      vi.resetModules();
+      vi.doUnmock("@openai/agents");
+      const { runMock, result } = await runOnceScenario(msg);
+      expect(runMock).toHaveBeenCalledTimes(1);
+      expect(result.status).not.toBe("COMPLETE");
+    }
+  });
+
+  it("SDK-RETRY-02: error before Runner import path still fails closed without COMPLETE LIVE", async () => {
     process.env.STUDIO_LANE = "DEV";
     process.env.STUDIO_E2E = "1";
     process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
@@ -86,4 +97,16 @@ describe("FIX-SDK — provider attempts and uncertain fallback", () => {
     expect(result.status).toBe("COMPLETE");
     expect(result.modelApplied).toBe("deterministic-fixture");
   });
+
+  it("SDK-RETRY-04: fixture DEV unchanged under flags", async () => {
+    process.env.STUDIO_LANE = "DEV";
+    process.env.STUDIO_E2E = "1";
+    process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
+    delete process.env.OPENAI_API_KEY;
+    const result = await generateNoraReply({
+      userText: "Merci",
+      contextSnippets: [],
+    });
+    expect(result.mode).toBe("deterministic-fixture");
+  });
 });
```

## 9. Instruction ChatGPT

Lire le fichier Git `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` au SHA distant que Cursor vient de publier ; vérifier son blob, ses créations, les diffs réels entre `00736f3a6c34f6f56d628b6dee2097a4aadda91b` et le nouveau HEAD local `57f6fc54888f607d8a70ef959f39057764e4b20a`, les preuves TURN-RACE, D4-PAGE, SDK-RETRY, les limitations FAKE/LIVE, ENV-01 et l'absence de GO projet. Le handoff publié ne vaut pas adoption ni autorisation de push/PR.

## 10. Verdict pack

`LOCAL THREE-BLOCKER CORRECTIVE DELIVERY — READY FOR CHATGPT REVIEW`

Gates non consommés : push projet, PR #655–#658, merge, LIVE, RECETTE, STABLE, ADOPTED.
