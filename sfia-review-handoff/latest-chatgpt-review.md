# SFIA Review Pack FULL — ML2 turn integrity corrective — 2026-11-05 19:15:04 CET

## 0. Mandat et verdict proposé

- **Cycle :** Delivery projet / INC corrective intégrité transactionnelle / profil **Critical**
- **Mandat :** correction locale des défauts A1 (assistant après CAS miss) et B (capitalisation D4 non fencée) après revue handoff `4fbf624f` ; contre-épreuve D4-PAGE-03 ; **aucun** push projet, PR, merge, LIVE, RECETTE
- **CKC :** CANDIDATE ABSENT — FALLBACK SFIA v2.6
- **Verdict candidat :** `LOCAL ML2 TURN INTEGRITY CORRECTIVE — READY FOR CHATGPT REVIEW`
- **Produit :** après collision/reprise, aucun message assistant ni COMPLETE si le CAS terminal échoue ; aucune nouvelle écriture sujet/acquis/point après révocation ; effets D4 déjà durables conservés honnêtement ; pagination sous mutation se termine en STALE sans curseur stagnant

## 1. Git Truth

| Item | Valeur |
| --- | --- |
| Branch | `sfia/next-ml2-cognition-observability-integrated` |
| HEAD entrée (EXACT) | `57f6fc54888f607d8a70ef959f39057764e4b20a` |
| HEAD correctif | `5cd8f10a78a6797e07b7de805f78207d10183ce7` |
| Parent correctif | `57f6fc54888f607d8a70ef959f39057764e4b20a` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` |
| origin review-handoff (pré-pub) | `4fbf624f6b50551f5db75a640927644e46e37813` |
| Project push | **NON** |
| Untracked preserved | pack local ; 5 SVG `web/public/*.svg` |

### 1.1 Git Review Index (vs `57f6fc54888f607d8a70ef959f39057764e4b20a`)

```
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
M	projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
M	projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
M	projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
M	projects/sfia-studio-next/web/src/domains/document/service.ts
M	projects/sfia-studio-next/web/src/domains/knowledge/service.ts
M	projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts
```

```
.../construction/delivery-history.md               |  18 +
 .../matrice-tracabilite.md                         |  18 +
 .../specification-technique.md                     |  24 ++
 .../web/src/domains/conversation/d4-read-tools.ts  |  36 +-
 .../web/src/domains/conversation/service.ts        |   9 +
 .../web/src/domains/conversation/turn-command.ts   | 212 +++++++---
 .../web/src/domains/document/service.ts            |  41 +-
 .../web/src/domains/knowledge/service.ts           | 149 +++++--
 .../tests/integration/ml2-three-blocker.pg.test.ts | 457 ++++++++++++++++++++-
 9 files changed, 845 insertions(+), 119 deletions(-)
```

- **commits créés :** 1 — `5cd8f10a fix(next-ml2): atomic turn terminal and fence all capitalisation writes`
- **tests :** unit 52 ; PG 78 ; Playwright 3 ; tsc+lint+build PASS
- **diff :** 9 files, +845 / −119

## 2. ENV-01 / versioning

- DEV only ; schema `006` inchangé (pas de nouvelle migration)
- `NO RELEASE` ; delivery_id `DELIV-2026-11-05-ML2-TURN-INTEGRITY-10`
- RECETTE/STABLE non touchées

## 3. Carte transactionnelle (conception)

| Frontière | Ordre locks / TX | Échec |
| --- | --- | --- |
| `commitTurnTerminal` | `FOR UPDATE` (token+RUNNING) → INSERT assistant → CAS UPDATE ; hook test after INSERT | CAS 0 ⇒ `TurnTerminalCasMissError` ⇒ rollback TX ⇒ `applied:false` |
| `reconcileRunningCommand` | advisory + `FOR UPDATE` row → revoke token | attend fences D4/terminal |
| D4 document/knowledge | `assertTurnFenceInTx` (`FOR SHARE` + verify) puis écriture | `TURN_OWNERSHIP_LOST` / stop capitalisation |
| Effet déjà CURRENT | non effacé après révocation ultérieure | UNKNOWN sans COMPLETE |

## 4. Corrections

### A1 — terminal atomique
- Remplace SELECT sans verrou + INSERT + CAS soft-return par lock exclusif + rollback forcé sur CAS miss
- Aucun assistant committé si ownership perdu

### B — fence capitalisation
- `TurnOwnershipFence` + `assertTurnFenceInTx` partagés (turn-command)
- `ensureSubject` / `capitalizeAcquis` / `openPoint` vérifient dans la TX d'écriture
- `maybeCapitalizeFromExchange` propage le fence et stoppe sur `ownershipLost`
- Parcours Pilote sans fence inchangé (CAP-FENCE-05)

### D4-PAGE-03
- Page vide sous mutation ⇒ `coverage=STALE`, `hasMore=false`, `totalMatchedExact=false`
- Jamais `hasMore` avec page vide / offset stagnant

## 5. Matrice oracles

| Oracle | État | Preuve |
| --- | --- | --- |
| TURN-ATOMIC-01 | PG PROVEN | revoke pre-terminal |
| TURN-ATOMIC-02 | PG PROVEN | CAS miss after INSERT rollback |
| TURN-ATOMIC-03 | PG PROVEN | replay COMPLETE |
| TURN-LEASE-01 | PG PROVEN | lease vs stale |
| CAP-FENCE-01..05 | PG PROVEN | subject/acquis/open/keep/pilot |
| D4-PAGE-03 | PG PROVEN | STALE terminal |
| SAFE-01 | PARTIAL | rollback CAS ; pas d'injection panne DB dédiée |
| REG-01 | PROVEN | 52/78/3 + tsc/build |
| LIVE/CI/RECETTE | NOT RUN | hors mandat |

## 6. Fake / Real

| Classe | Statut |
| --- | --- |
| DETERMINISTIC | PROVEN (unit baseline) |
| PG/INTEGRATION | PROVEN (integrity oracles) |
| BROWSER FAKE | PROVEN (3) |
| LIVE / CI new SHA / RECETTE | NOT RUN / NOT AUTHORIZED |

## 7. Fichiers créés

Aucun fichier créé (correctif sur fichiers existants uniquement).

## 8. Fichiers MODIFIÉS — diff utile intégral `57f6fc54888f607d8a70ef959f39057764e4b20a..5cd8f10a78a6797e07b7de805f78207d10183ce7`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index c19b1080..b92bac0f 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -316,3 +316,21 @@ Append-only logical journal of Cursor product deliveries.
 | Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
 | Verdict candidate | `LOCAL THREE-BLOCKER CORRECTIVE DELIVERY — READY FOR CHATGPT REVIEW` |

+## delivery_id: DELIV-2026-11-05-ML2-TURN-INTEGRITY-10
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-05 (Europe/Paris) ~19:15 CET |
+| Macro-lot | R5 / ML2 — turn transactional integrity |
+| Type | INC corrective (same ML2) |
+| Branch | `sfia/next-ml2-cognition-observability-integrated` (**local only**) |
+| Parent SHA | `57f6fc54888f607d8a70ef959f39057764e4b20a` |
+| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
+| Corrected | atomic `commitTurnTerminal` (FOR UPDATE + rollback on CAS miss) ; knowledge write fencing ; D4-PAGE-03 STALE termination |
+| Schema | unchanged (`006` already present) |
+| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
+| Local proofs | unit 52 ; PG 78 ; Playwright 3 ; tsc+lint+build PASS |
+| LIVE / CI / RECETTE | **NOT RUN / NOT AUTHORIZED** |
+| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
+| Verdict candidate | `LOCAL ML2 TURN INTEGRITY CORRECTIVE — READY FOR CHATGPT REVIEW` |
+
diff --git a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
index b488f5a5..c9ef28ed 100644
--- a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
+++ b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
@@ -493,3 +493,21 @@ Ce tableau **précise** les oracles OBS-Q01..10 déjà recensés (§§9–10), s
 | C1–C6 régression | PG+BROWSER FAKE | suites existantes PASS |
 | LIVE / CI / RECETTE | NOT RUN | hors mandat |

+## 18. As-Built turn integrity — 2026-11-05
+
+| Oracle | État | Preuve |
+| --- | --- | --- |
+| TURN-ATOMIC-01 | PG PROVEN | revoke pre-terminal → 0 assistant, UNKNOWN |
+| TURN-ATOMIC-02 | PG PROVEN | CAS miss after INSERT → TX rollback |
+| TURN-ATOMIC-03 | PG PROVEN | COMPLETE + same-key replay |
+| TURN-LEASE-01 | PG PROVEN | active lease vs stale reconcile |
+| CAP-FENCE-01 | PG PROVEN | ensureSubject fence |
+| CAP-FENCE-02 | PG PROVEN | capitalizeAcquis fence |
+| CAP-FENCE-03 | PG PROVEN | openPoint fence |
+| CAP-FENCE-04 | PG PROVEN | acquis kept after revoke ; non-COMPLETE |
+| CAP-FENCE-05 | PG PROVEN | pilot path sans fence |
+| D4-PAGE-03 | PG PROVEN | delete between pages → STALE terminal |
+| SAFE-01 | PARTIAL | rollback CAS miss ; pas d'injection panne DB dédiée |
+| REG-01 | PROVEN | unit 52 / PG 78 / e2e 3 / tsc+build |
+| LIVE / CI / RECETTE | NOT RUN | hors mandat |
+
diff --git a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
index 15d383f6..5c07d513 100644
--- a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
+++ b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
@@ -918,3 +918,27 @@ Les cinq orientations forment **un seul macro-lot ML2**, avec QA C1–C6, COG-01
 | tsc / build | PASS |
 | LIVE / CI / RECETTE | **NOT RUN** |

+## 25. As-Built turn integrity corrective — 2026-11-05 (local)
+
+> **LOCAL CORRECTIVE on `57f6fc54` / same branch / no project push.** Intégrité transactionnelle après revue handoff `4fbf624f`.
+
+### 25.1 Invariants
+
+| ID | Invariant |
+| --- | --- |
+| A1 terminal | `FOR UPDATE` puis INSERT assistant puis CAS ; CAS miss ⇒ rollback TX (`TurnTerminalCasMissError`) — aucun assistant orphelin |
+| A2 reconcile | `FOR UPDATE` sur commande avant révocation ; attend les fences D4 / terminal |
+| B capitalisation | `turnFence` dans `ensureSubject` / `capitalizeAcquis` / `openPoint` via `assertTurnFenceInTx` ; stop si `OWNERSHIP_LOST` |
+| Effets antérieurs | acquis déjà CURRENT avant révocation conservés ; pas de COMPLETE après CAS miss |
+| D4-PAGE-03 | page vide sous mutation ⇒ `coverage=STALE`, `hasMore=false`, pas de curseur stagnant |
+
+### 25.2 Preuves
+
+| Suite | Résultat |
+| --- | --- |
+| unit | 52 PASS |
+| PG | 78 PASS (TURN-ATOMIC / CAP-FENCE / D4-PAGE-03) |
+| Playwright FAKE | 3 PASS |
+| tsc / lint / build | PASS (lint: warnings préexistants nora-adapter unused) |
+| LIVE / CI / RECETTE | **NOT RUN** |
+
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts b/projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
index 9d6658a0..ef25e067 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
@@ -294,14 +294,28 @@ export async function searchProjectResources(scope: D4ToolScope, input: SearchPr
     need = limit - page.length;
   }

-  const hasMore = offset + page.length < totalExact;
-  // Terminating: empty page past end ⇒ hasMore false, nextOffset null (never stagnant cursor).
-  const nextOffset = hasMore ? offset + page.length : null;
+  // Count and page are separate queries — not a MVCC snapshot. Under concurrent
+  // mutation, refuse stagnant cursors and do not claim exact snapshot completeness.
+  // Empty page while still "inside" a prior count, OR empty page at offset>0 with
+  // zero remaining matches (corpus wiped between pages) ⇒ non-snapshot / STALE.
+  const countPageInconsistent =
+    (page.length === 0 && offset < totalExact) ||
+    (page.length === 0 && offset > 0 && totalExact === 0);
+  // Empty page is always terminal (never hasMore=true with nextOffset===offset).
+  const candidateNext = offset + page.length;
+  const hasMore =
+    page.length > 0 && candidateNext < totalExact && candidateNext > offset;
+  const nextOffset = hasMore ? candidateNext : null;

   let coverage: ToolCoverage;
-  if (totalExact === 0) {
+  let corpusNote: string | undefined;
+  if (countPageInconsistent) {
+    coverage = "STALE";
+    corpusNote =
+      "Corpus changed between count and page (non-snapshot). Pagination terminated honestly.";
+  } else if (totalExact === 0 && page.length === 0) {
     coverage = "EMPTY";
-  } else if (!hasMore && offset === 0) {
+  } else if (!hasMore && offset === 0 && page.length === totalExact) {
     coverage = "COMPLETE";
   } else if (page.length === 0 && offset >= totalExact) {
     coverage = "EMPTY";
@@ -313,8 +327,10 @@ export async function searchProjectResources(scope: D4ToolScope, input: SearchPr
     status: "AVAILABLE" as const,
     coverage,
     totalMatched: totalExact,
-    totalMatchedExact: true as const,
-    totalMatchedSemantics: "exact" as const,
+    totalMatchedExact: !countPageInconsistent,
+    totalMatchedSemantics: countPageInconsistent
+      ? ("point_in_time_count_non_snapshot" as const)
+      : ("exact" as const),
     hasMore,
     nextOffset,
     offset,
@@ -325,10 +341,8 @@ export async function searchProjectResources(scope: D4ToolScope, input: SearchPr
       preparationIdBound: true,
       modelChoseScope: false,
     },
-    note: undefined as string | undefined,
-  };
-
-  // Charge full returned envelope against D4 char budget.
+    note: corpusNote,
+  };  // Charge full returned envelope against D4 char budget.
   let charsCharged = chargeBudget(scope, payload);
   if (scope.budget.remainingChars <= 0 && charsCharged > 0) {
     // Budget exhausted by this payload — shrink items honestly.
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 87863819..52441b41 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -253,6 +253,7 @@ export async function postUserMessageAndNora(
     selectionLimit:
       "Capitalisation heuristique — pas une autorité épistémique; LIVE COG requis pour qualification.",
     humanDecisionCreated: false,
+    ownershipLost: false,
   };
   let capitalisationError: string | undefined;
   let documentSave: Awaited<ReturnType<typeof savePreparationDocument>> | null = null;
@@ -272,7 +273,15 @@ export async function postUserMessageAndNora(
           assistantText: reply.content,
           generationId: reply.generationId,
           userMessageId: reserved.userMessageId,
+          turnFence: {
+            commandId: reserved.commandId,
+            ownerToken: reserved.ownerToken,
+            beforeFenceCheck: turnRaceHooks.beforeD4Effect,
+          },
         });
+        if (capitalisation.ownershipLost) {
+          ownershipLostBeforeD4 = true;
+        }
       } catch {
         capitalisationError = "CAPITALISATION_EXCEPTION";
         emitObs({
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
index ec02196f..d45c828a 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
@@ -52,11 +52,73 @@ export const turnClock = {
   nowMs: (): number => Date.now(),
 };

+/** Ownership fence passed into D4 write TXs (documents + knowledge). */
+export type TurnOwnershipFence = {
+  commandId: string;
+  ownerToken: string;
+  /** Optional test injection before the ownership lock inside the write TX. */
+  beforeFenceCheck?: () => Promise<void>;
+};
+
+/** Forces terminal TX rollback when CAS cannot apply after a side-effect attempt. */
+export class TurnTerminalCasMissError extends Error {
+  readonly code = "TURN_TERMINAL_CAS_MISS";
+  constructor() {
+    super("TURN_TERMINAL_CAS_MISS");
+    this.name = "TurnTerminalCasMissError";
+  }
+}
+
+type FenceTx = {
+  execute: typeof db.execute;
+  select: typeof db.select;
+};
+
+/**
+ * Lock + verify turn ownership inside an open D4 write TX.
+ * Uses FOR SHARE so reconcile/UPDATE waits until the write commits or rolls back.
+ * Returns false when ownership is already lost (caller must abort write without commit).
+ */
+export async function assertTurnFenceInTx(
+  tx: FenceTx,
+  fence: TurnOwnershipFence,
+): Promise<boolean> {
+  if (fence.beforeFenceCheck) {
+    await fence.beforeFenceCheck();
+  }
+  await tx.execute(
+    sql`select id from conversation_turn_commands
+        where id = ${fence.commandId}
+          and owner_token = ${fence.ownerToken}
+          and status in ('RUNNING', 'ACCEPTED')
+        for share`,
+  );
+  const fenceRow = (
+    await tx
+      .select({ id: conversationTurnCommands.id })
+      .from(conversationTurnCommands)
+      .where(
+        and(
+          eq(conversationTurnCommands.id, fence.commandId),
+          eq(conversationTurnCommands.ownerToken, fence.ownerToken),
+          sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
+        ),
+      )
+      .limit(1)
+  )[0];
+  return Boolean(fenceRow);
+}
+
 /** Test hooks — must stay no-op in production paths. */
 export const turnRaceHooks: {
   afterGenerateBeforeEffects?: () => Promise<void>;
   beforeD4Effect?: () => Promise<void>;
   beforeTerminalCommit?: () => Promise<void>;
+  /**
+   * Runs inside the terminal TX after optional assistant INSERT, before CAS UPDATE.
+   * May mutate the same TX (e.g. revoke token) to force CAS miss + rollback.
+   */
+  insideTerminalTxAfterInsert?: (tx: FenceTx) => Promise<void>;
 } = {};

 export function turnFingerprint(content: string): string {
@@ -119,6 +181,11 @@ export async function reconcileRunningCommand(commandId: string): Promise<{
   return db.transaction(async (tx) => {
     await tx.execute(sql`SELECT pg_advisory_xact_lock(hashtext(${"turn-reconcile:" + commandId}))`);

+    // FOR UPDATE waits for any in-flight terminal/D4 fence locks — never revoke mid-write.
+    await tx.execute(
+      sql`select id from conversation_turn_commands where id = ${commandId} for update`,
+    );
+
     const row = (
       await tx
         .select()
@@ -434,7 +501,8 @@ export async function reserveTurnCommand(args: {

 /**
  * Atomic terminal commit under ownership fence:
- * insert assistant (if provided) + CAS status with owner_token in the same short TX.
+ * FOR UPDATE lock → optional assistant INSERT → CAS UPDATE in the same short TX.
+ * CAS miss after INSERT throws → full TX rollback (no orphan assistant).
  * Lost ownership ⇒ applied:false — caller must not return COMPLETE.
  */
 export async function commitTurnTerminal(args: {
@@ -457,13 +525,23 @@ export async function commitTurnTerminal(args: {
     throw new StudioError("INVALID_REQUEST", "commitTurnTerminal exige un statut terminal");
   }

-  return db.transaction(async (tx) => {
-    if (args.assistant) {
-      // Insert only if ownership still holds — checked via subsequent CAS.
-      // Pre-check fence inside TX:
+  try {
+    return await db.transaction(async (tx) => {
+      // Exclusive lock: blocks reconcile revoke and concurrent terminal writers.
+      await tx.execute(
+        sql`select id from conversation_turn_commands
+            where id = ${args.commandId}
+              and owner_token = ${args.ownerToken}
+              and status in ('RUNNING', 'ACCEPTED')
+            for update`,
+      );
+
       const owned = (
         await tx
-          .select({ id: conversationTurnCommands.id })
+          .select({
+            id: conversationTurnCommands.id,
+            assistantMessageId: conversationTurnCommands.assistantMessageId,
+          })
           .from(conversationTurnCommands)
           .where(
             and(
@@ -478,57 +556,87 @@ export async function commitTurnTerminal(args: {
         return { applied: false };
       }

-      // Idempotent ordinal: if assistant already there, reuse.
-      const existingAssistant = (
-        await tx
-          .select()
-          .from(messages)
-          .where(
-            and(
-              eq(messages.conversationId, args.conversationId),
-              eq(messages.ordinal, args.assistant.ordinal),
-              eq(messages.role, "assistant"),
-            ),
-          )
-          .limit(1)
-      )[0];
+      let assistantMessageId = args.assistant?.id ?? owned.assistantMessageId ?? null;

-      if (!existingAssistant) {
-        await tx.insert(messages).values({
-          id: args.assistant.id,
-          conversationId: args.conversationId,
-          role: "assistant",
-          content: args.assistant.content,
-          status: args.assistant.messageStatus,
-          generationId: args.assistant.generationId,
-          ordinal: args.assistant.ordinal,
-        });
+      if (args.assistant) {
+        const existingAssistant = (
+          await tx
+            .select()
+            .from(messages)
+            .where(
+              and(
+                eq(messages.conversationId, args.conversationId),
+                eq(messages.ordinal, args.assistant.ordinal),
+                eq(messages.role, "assistant"),
+              ),
+            )
+            .limit(1)
+        )[0];
+
+        if (!existingAssistant) {
+          await tx.insert(messages).values({
+            id: args.assistant.id,
+            conversationId: args.conversationId,
+            role: "assistant",
+            content: args.assistant.content,
+            status: args.assistant.messageStatus,
+            generationId: args.assistant.generationId,
+            ordinal: args.assistant.ordinal,
+          });
+          assistantMessageId = args.assistant.id;
+        } else {
+          // Reuse only when identity matches this command's stored assistant (or first bind).
+          if (
+            owned.assistantMessageId &&
+            owned.assistantMessageId !== existingAssistant.id &&
+            existingAssistant.id !== args.assistant.id
+          ) {
+            throw new StudioError(
+              "CONFLICT",
+              "Ordinal assistant déjà lié à une autre identité de message",
+              { httpStatus: 409 },
+            );
+          }
+          assistantMessageId = existingAssistant.id;
+        }
       }
-    }

-    const updated = await tx
-      .update(conversationTurnCommands)
-      .set({
-        status: args.status,
-        assistantMessageId: args.assistant?.id ?? null,
-        generationId: args.generationId ?? args.assistant?.generationId ?? null,
-        resultJson: args.resultJson ?? null,
-        errorCategory: args.errorCategory ?? null,
-        updatedAt: new Date(turnClock.nowMs()),
-      })
-      .where(
-        and(
-          eq(conversationTurnCommands.id, args.commandId),
-          eq(conversationTurnCommands.ownerToken, args.ownerToken),
-          sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
-        ),
-      )
-      .returning({ id: conversationTurnCommands.id });
+      if (turnRaceHooks.insideTerminalTxAfterInsert) {
+        await turnRaceHooks.insideTerminalTxAfterInsert(tx as FenceTx);
+      }

-    return { applied: updated.length > 0 };
-  });
-}
+      const updated = await tx
+        .update(conversationTurnCommands)
+        .set({
+          status: args.status,
+          assistantMessageId,
+          generationId: args.generationId ?? args.assistant?.generationId ?? null,
+          resultJson: args.resultJson ?? null,
+          errorCategory: args.errorCategory ?? null,
+          updatedAt: new Date(turnClock.nowMs()),
+        })
+        .where(
+          and(
+            eq(conversationTurnCommands.id, args.commandId),
+            eq(conversationTurnCommands.ownerToken, args.ownerToken),
+            sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
+          ),
+        )
+        .returning({ id: conversationTurnCommands.id });

+      if (updated.length === 0) {
+        // Must not commit a prior INSERT in this TX.
+        throw new TurnTerminalCasMissError();
+      }
+      return { applied: true };
+    });
+  } catch (e) {
+    if (e instanceof TurnTerminalCasMissError) {
+      return { applied: false };
+    }
+    throw e;
+  }
+}
 /** @deprecated Prefer commitTurnTerminal with ownerToken — kept for markTurnUnknown paths. */
 export async function completeTurnCommand(args: {
   commandId: string;
diff --git a/projects/sfia-studio-next/web/src/domains/document/service.ts b/projects/sfia-studio-next/web/src/domains/document/service.ts
index 6c95d23f..6d079275 100644
--- a/projects/sfia-studio-next/web/src/domains/document/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/document/service.ts
@@ -1,10 +1,16 @@
 import { and, asc, desc, eq, sql } from "drizzle-orm";
 import { db } from "@/db/client";
-import { conversationTurnCommands, documentRevisions, documents } from "@/db/schema";
+import { documentRevisions, documents } from "@/db/schema";
 import { newId } from "@/lib/ids";
 import { getPreparationContext } from "@/domains/preparation/service";
+import {
+  assertTurnFenceInTx,
+  type TurnOwnershipFence,
+} from "@/domains/conversation/turn-command";
 import { createHash } from "node:crypto";

+export type { TurnOwnershipFence };
+
 const MAX_DOC_CHARS = 100_000;
 /** Max LCS cells (n+1)*(m+1). Beyond this, comparison degrades explicitly. */
 export const MAX_DIFF_CELLS = 2_000_000;
@@ -159,13 +165,6 @@ async function latestRevisionFor(documentId: string) {
   )[0];
 }

-export type TurnOwnershipFence = {
-  commandId: string;
-  ownerToken: string;
-  /** Optional test injection before the ownership check inside the write TX. */
-  beforeFenceCheck?: () => Promise<void>;
-};
-
 export async function savePreparationDocument(
   pilotId: string,
   preparationId: string,
@@ -302,30 +301,8 @@ export async function savePreparationDocument(
   try {
     return await db.transaction(async (tx) => {
       if (opts?.turnFence) {
-        if (opts.turnFence.beforeFenceCheck) {
-          await opts.turnFence.beforeFenceCheck();
-        }
-        await tx.execute(
-          sql`select id from conversation_turn_commands
-              where id = ${opts.turnFence.commandId}
-                and owner_token = ${opts.turnFence.ownerToken}
-                and status in ('RUNNING', 'ACCEPTED')
-              for share`,
-        );
-        const fenceRow = (
-          await tx
-            .select({ id: conversationTurnCommands.id })
-            .from(conversationTurnCommands)
-            .where(
-              and(
-                eq(conversationTurnCommands.id, opts.turnFence.commandId),
-                eq(conversationTurnCommands.ownerToken, opts.turnFence.ownerToken),
-                sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
-              ),
-            )
-            .limit(1)
-        )[0];
-        if (!fenceRow) {
+        const owned = await assertTurnFenceInTx(tx, opts.turnFence);
+        if (!owned) {
           return {
             status: "FAILED" as const,
             reason: "TURN_OWNERSHIP_LOST",
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
index 6dcf5e1a..d1a9afa1 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
@@ -8,6 +8,10 @@ import {
 } from "@/db/schema";
 import { newId } from "@/lib/ids";
 import { getPreparationContext } from "@/domains/preparation/service";
+import {
+  assertTurnFenceInTx,
+  type TurnOwnershipFence,
+} from "@/domains/conversation/turn-command";

 export type Provenance = {
   sourceKind: "message" | "document" | "revision" | "pilot" | "nora";
@@ -80,6 +84,8 @@ export async function capitalizeAcquis(
     subjectId?: string | null;
     provenance: Provenance;
     supersedesAcquisId?: string;
+    /** Required when write is imputed to a Nora turn — verified inside the write TX. */
+    turnFence?: TurnOwnershipFence;
   },
 ) {
   const ctx = await assertPrep(pilotId, preparationId);
@@ -149,7 +155,13 @@ export async function capitalizeAcquis(
   }

   const id = newId("acq");
-  await db.transaction(async (tx) => {
+  const write = await db.transaction(async (tx) => {
+    if (input.turnFence) {
+      const owned = await assertTurnFenceInTx(tx as Tx, input.turnFence);
+      if (!owned) {
+        return { status: "OWNERSHIP_LOST" as const };
+      }
+    }
     await tx.insert(knowledgeAcquis).values({
       id,
       preparationId,
@@ -174,14 +186,23 @@ export async function capitalizeAcquis(
           ),
         );
     }
+    return { status: "OK" as const };
   });
+  if (write.status === "OWNERSHIP_LOST") {
+    return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
+  }
   return { status: "AVAILABLE" as const, acquisId: id, kind };
 }

 export async function openPoint(
   pilotId: string,
   preparationId: string,
-  input: { statement: string; subjectId?: string | null; provenance: Provenance },
+  input: {
+    statement: string;
+    subjectId?: string | null;
+    provenance: Provenance;
+    turnFence?: TurnOwnershipFence;
+  },
 ) {
   const ctx = await assertPrep(pilotId, preparationId);
   const statement = input.statement.trim();
@@ -194,16 +215,28 @@ export async function openPoint(
     }
   }
   const id = newId("opn");
-  await db.insert(knowledgeOpenPoints).values({
-    id,
-    preparationId,
-    projectId: ctx.project?.id ?? null,
-    ownerPilotId: pilotId,
-    subjectId: input.subjectId ?? null,
-    statement,
-    status: "OPEN",
-    provenanceJson: provenanceString(input.provenance),
+  const write = await db.transaction(async (tx) => {
+    if (input.turnFence) {
+      const owned = await assertTurnFenceInTx(tx as Tx, input.turnFence);
+      if (!owned) {
+        return { status: "OWNERSHIP_LOST" as const };
+      }
+    }
+    await tx.insert(knowledgeOpenPoints).values({
+      id,
+      preparationId,
+      projectId: ctx.project?.id ?? null,
+      ownerPilotId: pilotId,
+      subjectId: input.subjectId ?? null,
+      statement,
+      status: "OPEN",
+      provenanceJson: provenanceString(input.provenance),
+    });
+    return { status: "OK" as const };
   });
+  if (write.status === "OWNERSHIP_LOST") {
+    return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
+  }
   return { status: "AVAILABLE" as const, openPointId: id };
 }

@@ -216,6 +249,7 @@ export async function ensureSubject(
   preparationId: string,
   title: string,
   parentSubjectId?: string | null,
+  turnFence?: TurnOwnershipFence,
 ) {
   const ctx = await assertPrep(pilotId, preparationId);
   const cleaned = title.trim().slice(0, 200);
@@ -240,18 +274,29 @@ export async function ensureSubject(
   )[0];
   if (existing) return { status: "AVAILABLE" as const, subjectId: existing.id, created: false };
   const id = newId("subj");
-  await db.insert(knowledgeSubjects).values({
-    id,
-    preparationId,
-    projectId: ctx.project?.id ?? null,
-    ownerPilotId: pilotId,
-    parentSubjectId: parentSubjectId ?? null,
-    title: cleaned,
-    status: "ACTIVE",
+  const write = await db.transaction(async (tx) => {
+    if (turnFence) {
+      const owned = await assertTurnFenceInTx(tx as Tx, turnFence);
+      if (!owned) {
+        return { status: "OWNERSHIP_LOST" as const };
+      }
+    }
+    await tx.insert(knowledgeSubjects).values({
+      id,
+      preparationId,
+      projectId: ctx.project?.id ?? null,
+      ownerPilotId: pilotId,
+      parentSubjectId: parentSubjectId ?? null,
+      title: cleaned,
+      status: "ACTIVE",
+    });
+    return { status: "OK" as const };
   });
+  if (write.status === "OWNERSHIP_LOST") {
+    return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
+  }
   return { status: "AVAILABLE" as const, subjectId: id, created: true };
 }
-
 /** Always creates a new subject identity (used by split). Title collision does not reuse. */
 async function createSubjectIdentity(
   tx: Tx,
@@ -688,6 +733,8 @@ export async function maybeCapitalizeFromExchange(
     assistantText: string;
     generationId: string;
     userMessageId: string;
+    /** Propagated into every D4 capitalisation write TX. */
+    turnFence?: TurnOwnershipFence;
   },
 ) {
   const results: Array<{
@@ -695,18 +742,42 @@ export async function maybeCapitalizeFromExchange(
     id?: string;
     status: string;
     epistemicNote?: string;
+    reason?: string;
   }> = [];
   const lower = `${input.userText}\n${input.assistantText}`.toLowerCase();
   const selectionLimit =
     "Capitalisation heuristique (regex/lexical) — pas une autorité épistémique; LIVE COG requis pour qualification.";
+  const fence = input.turnFence;

   let subjectId: string | null = null;
   const topicMatch = input.userText.match(
     /(?:sujet|thème|theme|à propos de|concernant)\s*[:«"]?\s*([^\n.«"]{4,80})/i,
   );
   if (topicMatch?.[1]) {
-    const s = await ensureSubject(pilotId, preparationId, topicMatch[1].trim());
-    if (s.status === "AVAILABLE" && s.subjectId) subjectId = s.subjectId;
+    const s = await ensureSubject(
+      pilotId,
+      preparationId,
+      topicMatch[1].trim(),
+      undefined,
+      fence,
+    );
+    if (s.status === "AVAILABLE" && s.subjectId) {
+      subjectId = s.subjectId;
+    } else if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
+      results.push({
+        kind: "subject",
+        status: "FAILED",
+        reason: "TURN_OWNERSHIP_LOST",
+        epistemicNote: selectionLimit,
+      });
+      return {
+        capitalisations: results,
+        selectionMethod: "lexical-heuristic" as const,
+        selectionLimit: "OWNERSHIP_LOST",
+        humanDecisionCreated: false as const,
+        ownershipLost: true as const,
+      };
+    }
   }

   // Stronger gate than keyword alone: require comparative structure or explicit durable ask
@@ -732,6 +803,7 @@ export async function maybeCapitalizeFromExchange(
       statement,
       kind,
       subjectId,
+      turnFence: fence,
       provenance: {
         sourceKind: "message",
         sourceId: input.userMessageId,
@@ -740,6 +812,21 @@ export async function maybeCapitalizeFromExchange(
         epistemic: kind === "RECOMMENDATION" ? "recommended" : "hypothesized",
       },
     });
+    if (cap.status === "FAILED" && "reason" in cap && cap.reason === "TURN_OWNERSHIP_LOST") {
+      results.push({
+        kind: "acquis",
+        status: "FAILED",
+        reason: "TURN_OWNERSHIP_LOST",
+        epistemicNote: selectionLimit,
+      });
+      return {
+        capitalisations: results,
+        selectionMethod: "lexical-heuristic" as const,
+        selectionLimit: "OWNERSHIP_LOST",
+        humanDecisionCreated: false as const,
+        ownershipLost: true as const,
+      };
+    }
     results.push({
       kind: "acquis",
       id: "acquisId" in cap ? cap.acquisId : undefined,
@@ -755,6 +842,7 @@ export async function maybeCapitalizeFromExchange(
     const op = await openPoint(pilotId, preparationId, {
       statement,
       subjectId,
+      turnFence: fence,
       provenance: {
         sourceKind: "message",
         sourceId: input.userMessageId,
@@ -762,6 +850,21 @@ export async function maybeCapitalizeFromExchange(
         epistemic: "limited",
       },
     });
+    if (op.status === "FAILED" && "reason" in op && op.reason === "TURN_OWNERSHIP_LOST") {
+      results.push({
+        kind: "open_point",
+        status: "FAILED",
+        reason: "TURN_OWNERSHIP_LOST",
+        epistemicNote: selectionLimit,
+      });
+      return {
+        capitalisations: results,
+        selectionMethod: "lexical-heuristic" as const,
+        selectionLimit: "OWNERSHIP_LOST",
+        humanDecisionCreated: false as const,
+        ownershipLost: true as const,
+      };
+    }
     results.push({
       kind: "open_point",
       id: "openPointId" in op ? op.openPointId : undefined,
@@ -775,9 +878,9 @@ export async function maybeCapitalizeFromExchange(
     selectionMethod: "lexical-heuristic" as const,
     selectionLimit,
     humanDecisionCreated: false as const,
+    ownershipLost: false as const,
   };
 }
-
 function extractSalientLine(text: string): string | null {
   const lines = text
     .split(/\n+/)
diff --git a/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts
index 3d2b97b1..9d9cb097 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts
@@ -17,6 +17,9 @@ import {
   documents,
   documentRevisions,
   knowledgeAcquis,
+  knowledgeOpenPoints,
+  knowledgeSubjects,
+  messages,
 } from "@/db/schema";
 import { createDevTestSession } from "@/domains/identity/session";
 import { openOrCreatePreparation } from "@/domains/preparation/service";
@@ -37,7 +40,11 @@ import {
   TURN_RUNNING_STALE_MS,
 } from "@/domains/conversation/turn-command";
 import { searchProjectResources } from "@/domains/conversation/d4-read-tools";
-import { ensureSubject } from "@/domains/knowledge/service";
+import {
+  capitalizeAcquis,
+  ensureSubject,
+  openPoint,
+} from "@/domains/knowledge/service";
 import { newId } from "@/lib/ids";
 import { newOperationId } from "@/lib/observability";
 import { StudioError } from "@/lib/http-errors";
@@ -70,6 +77,7 @@ describe("ML2 three-blocker corrective (PG)", () => {
     delete turnRaceHooks.afterGenerateBeforeEffects;
     delete turnRaceHooks.beforeD4Effect;
     delete turnRaceHooks.beforeTerminalCommit;
+    delete turnRaceHooks.insideTerminalTxAfterInsert;
     turnClock.nowMs = () => Date.now();
     // Unlock conversation for next case — force any leftover RUNNING → UNKNOWN.
     await db.execute(
@@ -360,4 +368,451 @@ describe("ML2 three-blocker corrective (PG)", () => {
       expect(JSON.stringify(result).length).toBeLessThanOrEqual(40 + 200); // charged before/at deny path
     }
   });
+
+  it("TURN-ATOMIC-01: revoke before terminal → no assistant committed, non-COMPLETE", async () => {
+    const key = `atomic01-${Date.now()}`;
+    const msgsBefore = (await listMessages(pilotId, preparationId)).filter(
+      (m) => m.role === "assistant",
+    ).length;
+
+    turnRaceHooks.beforeTerminalCommit = async () => {
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
+      await db
+        .update(conversationTurnCommands)
+        .set({ status: "UNKNOWN", errorCategory: "ATOMIC01_REVOKE", updatedAt: new Date() })
+        .where(eq(conversationTurnCommands.id, row!.id));
+    };
+
+    const result = await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Compare atomic01 option A et B",
+      { clientTurnKey: key },
+    );
+    expect(result.status).toBe("UNKNOWN");
+    expect(result.assistantMessageId).toBeNull();
+
+    const cmd = (
+      await db
+        .select()
+        .from(conversationTurnCommands)
+        .where(
+          and(
+            eq(conversationTurnCommands.conversationId, conversationId),
+            eq(conversationTurnCommands.clientTurnKey, key),
+          ),
+        )
+        .limit(1)
+    )[0];
+    expect(cmd.status).toBe("UNKNOWN");
+    expect(cmd.assistantMessageId).toBeNull();
+
+    const assistants = (await listMessages(pilotId, preparationId)).filter(
+      (m) => m.role === "assistant",
+    );
+    expect(assistants.length).toBe(msgsBefore);
+  });
+
+  it("TURN-ATOMIC-02: CAS miss after INSERT in same TX rolls back assistant", async () => {
+    const key = `atomic02-${Date.now()}`;
+    const msgsBefore = (
+      await db
+        .select()
+        .from(messages)
+        .where(and(eq(messages.conversationId, conversationId), eq(messages.role, "assistant")))
+    ).length;
+
+    turnRaceHooks.insideTerminalTxAfterInsert = async (tx) => {
+      await tx.execute(
+        sql`update conversation_turn_commands
+            set owner_token = ${"revoked_atomic02_" + Date.now()}
+            where conversation_id = ${conversationId}
+              and client_turn_key = ${key}`,
+      );
+    };
+
+    const result = await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Compare atomic02 rollback assistant",
+      { clientTurnKey: key },
+    );
+    expect(result.status).toBe("UNKNOWN");
+    expect(result.assistantMessageId).toBeNull();
+
+    const msgsAfter = (
+      await db
+        .select()
+        .from(messages)
+        .where(and(eq(messages.conversationId, conversationId), eq(messages.role, "assistant")))
+    ).length;
+    expect(msgsAfter).toBe(msgsBefore);
+
+    const cmd = (
+      await db
+        .select()
+        .from(conversationTurnCommands)
+        .where(
+          and(
+            eq(conversationTurnCommands.conversationId, conversationId),
+            eq(conversationTurnCommands.clientTurnKey, key),
+          ),
+        )
+        .limit(1)
+    )[0];
+    // CAS miss rolled back status change too — still RUNNING or cleaned UNKNOWN by afterEach.
+    // Must not be COMPLETE with orphan assistant.
+    expect(cmd.status).not.toBe("COMPLETE");
+    expect(cmd.assistantMessageId).toBeNull();
+  });
+
+  it("TURN-ATOMIC-03: successful COMPLETE then same-key replay recovers without second generation", async () => {
+    const key = `atomic03-${Date.now()}`;
+    const first = await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Compare atomic03 reprise ACK",
+      { clientTurnKey: key },
+    );
+    expect(first.status).toBe("COMPLETE");
+    expect(first.assistantMessageId).toBeTruthy();
+
+    const replay = await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Compare atomic03 reprise ACK",
+      { clientTurnKey: key },
+    );
+    expect(replay.status).toBe("COMPLETE");
+    expect(replay.idempotentReplay).toBe(true);
+    expect(replay.assistantMessageId).toBe(first.assistantMessageId);
+
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
+  });
+
+  it("TURN-LEASE-01: active lease blocks false orphan under concurrent reconcile", async () => {
+    const reserved = await reserveTurnCommand({
+      conversationId,
+      ownerPilotId: pilotId,
+      clientTurnKey: `lease01-${Date.now()}`,
+      content: "Lease concurrent actif",
+    });
+    if (reserved.kind !== "fresh") throw new Error("expected fresh");
+
+    await touchTurnLease(reserved.commandId, reserved.ownerToken);
+    const recon = await reconcileRunningCommand(reserved.commandId);
+    expect(recon.status).toBe("RUNNING");
+    expect(recon.reconciled).toBe(false);
+    expect(await requireTurnOwnership(reserved.commandId, reserved.ownerToken)).toBe(true);
+
+    await injectStaleRunningForTests(reserved.commandId);
+    const stale = await reconcileRunningCommand(reserved.commandId);
+    expect(stale.status).toBe("UNKNOWN");
+    expect(stale.reconciled).toBe(true);
+  });
+
+  it("CAP-FENCE-01: revoke during ensureSubject → no subject created", async () => {
+    const reserved = await reserveTurnCommand({
+      conversationId,
+      ownerPilotId: pilotId,
+      clientTurnKey: `cap01-${Date.now()}`,
+      content: "fence subject",
+    });
+    if (reserved.kind !== "fresh") throw new Error("expected fresh");
+    const title = `CAP_FENCE_SUBJ_${Date.now()}`;
+    const before = (
+      await db
+        .select()
+        .from(knowledgeSubjects)
+        .where(
+          and(
+            eq(knowledgeSubjects.preparationId, preparationId),
+            eq(knowledgeSubjects.title, title),
+          ),
+        )
+    ).length;
+
+    const result = await ensureSubject(pilotId, preparationId, title, undefined, {
+      commandId: reserved.commandId,
+      ownerToken: reserved.ownerToken,
+      beforeFenceCheck: async () => {
+        await revokeOwnerTokenForTests(reserved.commandId);
+      },
+    });
+    expect(result.status).toBe("FAILED");
+    expect("reason" in result && result.reason).toBe("TURN_OWNERSHIP_LOST");
+    const after = (
+      await db
+        .select()
+        .from(knowledgeSubjects)
+        .where(
+          and(
+            eq(knowledgeSubjects.preparationId, preparationId),
+            eq(knowledgeSubjects.title, title),
+          ),
+        )
+    ).length;
+    expect(after).toBe(before);
+  });
+
+  it("CAP-FENCE-02: revoke during capitalizeAcquis → no acquis", async () => {
+    const reserved = await reserveTurnCommand({
+      conversationId,
+      ownerPilotId: pilotId,
+      clientTurnKey: `cap02-${Date.now()}`,
+      content: "fence acquis",
+    });
+    if (reserved.kind !== "fresh") throw new Error("expected fresh");
+    const statement = `CAP_FENCE_ACQ durable statement ${Date.now()} with enough length`;
+    const before = (
+      await db
+        .select()
+        .from(knowledgeAcquis)
+        .where(
+          and(
+            eq(knowledgeAcquis.preparationId, preparationId),
+            eq(knowledgeAcquis.statement, statement),
+          ),
+        )
+    ).length;
+
+    const result = await capitalizeAcquis(pilotId, preparationId, {
+      statement,
+      kind: "HYPOTHESIS",
+      provenance: {
+        sourceKind: "message",
+        sourceId: "msg_test",
+        generationId: "gen_test",
+        epistemic: "hypothesized",
+      },
+      turnFence: {
+        commandId: reserved.commandId,
+        ownerToken: reserved.ownerToken,
+        beforeFenceCheck: async () => {
+          await revokeOwnerTokenForTests(reserved.commandId);
+        },
+      },
+    });
+    expect(result.status).toBe("FAILED");
+    expect("reason" in result && result.reason).toBe("TURN_OWNERSHIP_LOST");
+    const after = (
+      await db
+        .select()
+        .from(knowledgeAcquis)
+        .where(
+          and(
+            eq(knowledgeAcquis.preparationId, preparationId),
+            eq(knowledgeAcquis.statement, statement),
+          ),
+        )
+    ).length;
+    expect(after).toBe(before);
+  });
+
+  it("CAP-FENCE-03: revoke during openPoint → no open point", async () => {
+    const reserved = await reserveTurnCommand({
+      conversationId,
+      ownerPilotId: pilotId,
+      clientTurnKey: `cap03-${Date.now()}`,
+      content: "fence open",
+    });
+    if (reserved.kind !== "fresh") throw new Error("expected fresh");
+    const statement = `Point ouvert CAP_FENCE ${Date.now()}`;
+    const before = (
+      await db
+        .select()
+        .from(knowledgeOpenPoints)
+        .where(
+          and(
+            eq(knowledgeOpenPoints.preparationId, preparationId),
+            eq(knowledgeOpenPoints.statement, statement),
+          ),
+        )
+    ).length;
+
+    const result = await openPoint(pilotId, preparationId, {
+      statement,
+      provenance: { sourceKind: "message", epistemic: "limited" },
+      turnFence: {
+        commandId: reserved.commandId,
+        ownerToken: reserved.ownerToken,
+        beforeFenceCheck: async () => {
+          await revokeOwnerTokenForTests(reserved.commandId);
+        },
+      },
+    });
+    expect(result.status).toBe("FAILED");
+    expect("reason" in result && result.reason).toBe("TURN_OWNERSHIP_LOST");
+    const after = (
+      await db
+        .select()
+        .from(knowledgeOpenPoints)
+        .where(
+          and(
+            eq(knowledgeOpenPoints.preparationId, preparationId),
+            eq(knowledgeOpenPoints.statement, statement),
+          ),
+        )
+    ).length;
+    expect(after).toBe(before);
+  });
+
+  it("CAP-FENCE-04: acquis committed before revoke survives; turn stays non-COMPLETE", async () => {
+    const key = `cap04-${Date.now()}`;
+    const statement = `CAP04_KEEP_${Date.now()} hypothèse durable commitée avant révocation du tour`;
+    turnRaceHooks.beforeTerminalCommit = async () => {
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
+      // Valid D4 write while ownership still holds.
+      const cap = await capitalizeAcquis(pilotId, preparationId, {
+        statement,
+        kind: "HYPOTHESIS",
+        provenance: {
+          sourceKind: "message",
+          sourceId: row!.userMessageId ?? "msg",
+          generationId: row!.generationId ?? "gen",
+          epistemic: "hypothesized",
+        },
+        turnFence: { commandId: row!.id, ownerToken: row!.ownerToken! },
+      });
+      expect(cap.status).toBe("AVAILABLE");
+      await revokeOwnerTokenForTests(row!.id);
+      await db
+        .update(conversationTurnCommands)
+        .set({ status: "UNKNOWN", errorCategory: "CAP04_REVOKE", updatedAt: new Date() })
+        .where(eq(conversationTurnCommands.id, row!.id));
+    };
+
+    const result = await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Compare CAP04 option reprise après effet D4 déjà durable",
+      { clientTurnKey: key },
+    );
+    expect(result.status).toBe("UNKNOWN");
+    expect(result.assistantMessageId).toBeNull();
+
+    const kept = await db
+      .select()
+      .from(knowledgeAcquis)
+      .where(
+        and(
+          eq(knowledgeAcquis.preparationId, preparationId),
+          eq(knowledgeAcquis.statement, statement),
+        ),
+      );
+    expect(kept).toHaveLength(1);
+    expect(kept[0].status).toBe("CURRENT");
+  });
+
+  it("CAP-FENCE-05: pilot path without turnFence still creates subject", async () => {
+    const title = `PILOT_NO_FENCE_${Date.now()}`;
+    const result = await ensureSubject(pilotId, preparationId, title);
+    expect(result.status).toBe("AVAILABLE");
+    expect(result.subjectId).toBeTruthy();
+  });
+
+  it("D4-PAGE-03: concurrent delete between pages terminates without stagnant cursor", async () => {
+    const marker = `PAGE03_${Date.now()}`;
+    const subject = await ensureSubject(pilotId, preparationId, `Page03 ${Date.now()}`);
+    const ids: string[] = [];
+    for (let i = 0; i < 40; i++) {
+      const id = newId("acq");
+      ids.push(id);
+      await db.insert(knowledgeAcquis).values({
+        id,
+        preparationId,
+        ownerPilotId: pilotId,
+        subjectId: subject.subjectId!,
+        kind: "HYPOTHESIS",
+        statement: `Acquis ${marker} n=${i.toString().padStart(3, "0")}`,
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
+      budget: { remainingCalls: 20, remainingChars: 2_000_000 },
+    };
+
+    const first = await searchProjectResources(scope, {
+      query: marker,
+      types: ["acquis"],
+      limit: 10,
+      offset: 0,
+    });
+    expect(first.status).toBe("AVAILABLE");
+    if (first.status !== "AVAILABLE") throw new Error("available");
+    expect(first.hasMore).toBe(true);
+    const next = first.nextOffset!;
+    expect(next).toBeGreaterThan(0);
+
+    // Concurrent mutation: delete all remaining matches before next page.
+    await db
+      .update(knowledgeAcquis)
+      .set({ status: "SUPERSEDED", updatedAt: new Date() })
+      .where(
+        and(
+          eq(knowledgeAcquis.preparationId, preparationId),
+          eq(knowledgeAcquis.ownerPilotId, pilotId),
+          sql`${knowledgeAcquis.statement} like ${"%" + marker + "%"}`,
+        ),
+      );
+
+    const second = await searchProjectResources(scope, {
+      query: marker,
+      types: ["acquis"],
+      limit: 10,
+      offset: next,
+    });
+    expect(second.status).toBe("AVAILABLE");
+    if (second.status !== "AVAILABLE") throw new Error("available");
+    // Must terminate — never empty+hasMore with stagnant offset.
+    if (second.items.length === 0) {
+      expect(second.hasMore).toBe(false);
+      expect(second.nextOffset).toBeNull();
+      expect(second.coverage).toBe("STALE");
+      expect(second.totalMatchedExact).toBe(false);
+    } else {
+      if (second.hasMore) {
+        expect(second.nextOffset).not.toBeNull();
+        expect(second.nextOffset!).toBeGreaterThan(next);
+      }
+    }
+  });
 });
```

## 9. Instruction ChatGPT

Avant toute revue Morris de ce cycle, ChatGPT doit lire sur Git distant `sfia/review-handoff` le fichier canonique `sfia-review-handoff/latest-chatgpt-review.md` au SHA publié dans le rapport. Vérifier blob, index, contenu créé, diffs des fichiers modifiés, invariants TURN-ATOMIC / CAP-FENCE / TURN-LEASE et D4-PAGE-03, tests, `origin/main`, HEAD local de sortie, statut FAKE/LIVE/CI/RECETTE et absence de push projet. Le handoff ne vaut ni validation code ni autorisation d'intégration.

## 10. Verdict pack

`LOCAL ML2 TURN INTEGRITY CORRECTIVE — READY FOR CHATGPT REVIEW`

Gates non consommés : push projet, PR #655–#658, merge, LIVE, RECETTE, STABLE, ADOPTED.
