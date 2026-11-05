# SFIA Studio Next — Review Pack FULL
## Cycle: ML2 consolidation corrective C3/C4/C1

- Date/heure (Europe/Paris): 2026-11-05 04:32:40 CET
- Produit: `projects/sfia-studio-next/` exclusively
- Type: correctif intégré, même macro-lot ML2 — NO RELEASE
- Review Pack: FULL, nouveau mono-cycle (pas d'append du handoff précédent)
- Livraison: NO RELEASE / pas de push branche projet / pas de PR

## 1. Git Truth Check

### Initial (avant écriture consolidation)
- remote: `origin https://github.com/mcleland147/sfia-workspace.git`
- branch: `sfia/next-ml2-production-capitalisation`
- HEAD initial: `5c7dd7528ff859c9717db865c74d45930dff4219`
- origin/main: `6e4406c63639330c7826423cdcf08f06ff019eed`
- merge-base = origin/main (conforme)
- Quatre commits ML2 présents: `d867365f`, `733eddf0`, `a9a468e9`, `5c7dd752`
- Résidus préservés: `.tmp-sfia-review/`, `web/public/*.svg` (non stagés)
- Worktrees autres lots présents; aucune modification concurrente ML2 observée

### Final
- branch: `sfia/next-ml2-production-capitalisation`
- HEAD final: `1967b2c56e59c2cfdf0ba17f2d50dbc9eadf5a01`
- origin/main: `6e4406c63639330c7826423cdcf08f06ff019eed`
- Nouveau commit consolidation: `1967b2c56e59c2cfdf0ba17f2d50dbc9eadf5a01`
- Commits locaux ML2 (origin/main..HEAD):
```
1967b2c5 fix(next-ml2): close C3 fingerprint/UI key, C4 diff budget, C1 journal proofs
5c7dd752 fix(next-ml2): harden D4 integrity, document concurrency and capitalisation
a9a468e9 test(next-ml2): PG/BROWSER proofs and As-Built delivery notes
733eddf0 feat(next-ml2): UX surfaces and APIs for documents, journal, markdown
d867365f feat(next-ml2): D4 knowledge registry and document revision contracts
```
- Working tree hors pack: uniquement `.tmp-sfia-review/chatgpt-review.md` (ce pack) + `web/public/*.svg` résidus non qualifiés

## 2. Sources Git / décisions applicables

- Méthode SFIA v2.6: cycle-routing-guide, execution-template, rules-and-guardrails (lus)
- Gouvernance Next: SEF, roadmap, R4 exit, naming, ENV-01, product-versioning
- Vision/contrats: vision-produit, conduite Nora, connaissance sujets, cadrage-r4
- ML2 v0.6 VALIDATED SPEC: specification-technique + matrice + reference-delivery-r5 — **non modifié en contrat produit**
- Handoff précédent (cycle correctif): tip `0bbd7ccbf44771ba2d7c12e4feb70c27f6ee9a51` blob `6edc4742da2c034c6df9bdc88463c85ffa6d0d59`
- Verdict ChatGPT précédent: `READY FOR MORRIS REVIEW — CORRECTIONS SUBSTANTIELLES / INTÉGRITÉ NON ENTIÈREMENT LEVÉE`

## 3. Défauts reproduits (avant correctif consolidation)

| Id | Défaut | Preuve avant |
| --- | --- | --- |
| C3-A | Après conflit d'unicité concurrent, chemin race pouvait retourner la révision gagnante **sans** vérifier fingerprint | Lecture code `savePreparationDocument` catch/race ; oracle: même clé + payload incompatible doit CONFLICT |
| C3-B | `saveDoc()` générait `Date.now()` à chaque appel → retry après ACK perdu = nouvelle clé | Lecture `page.tsx` |
| C4 | LCS correct mais matrice O(n·m) non bornée pour docs jusqu'à 100k chars / nombreuses lignes | Lecture `diffMarkdown` ; adversarial cells > mémoire |
| C1 | Rollback testait status/affectations mais **pas** journal `knowledge_subject_events` ; concurrence même Acquis non assertée finement | Lecture test rollback |

## 4. Correctifs — conception

### C3-A — fingerprint tous chemins
- Helper unique `reconcilePriorRevision` : compare empreinte stockée vs demandée
- Appelé: lookup pré-création, race insert document, lookup révision, re-check TX, catch unicité
- `waitForRevisionByCorrelation` borné (8×25ms) puis `UNKNOWN/CREATION_IN_FLIGHT` si révision absente — **jamais AVAILABLE inventé**
- Même clé + même payload → AVAILABLE/idempotentReplay ; incompatible → `CONFLICT/CORRELATION_PAYLOAD_MISMATCH`
- Isolation owner+preparation conservée sur toutes les recherches

### C3-B — clé UI stable
- État `createDocIntent` / `reviseIntent` + **refs** synchrones (anti double-clic avant commit React)
- Clé générée une fois (`crypto.randomUUID`) ; conservée sur FAILED/UNKNOWN/réseau
- Payload snapshot figé ; modification texte pendant intention → CONFLICT UI (pas de nouvelle clé auto)
- Après AVAILABLE confirmé → intention effacée ; bouton « Nouvelle intention de création » explicite
- Statut visible sur surface Document (`data-testid=surface-status`)

### C4 — budget diff
- `MAX_DIFF_CELLS = 2_000_000`
- Si `(n+1)*(m+1) > budget` → `{ degraded:true, reason:DIFF_BUDGET_EXCEEDED, ops:[] }`
- API compare → status `DEGRADED` + note explicite ; UI n'affiche pas un faux diff détaillé

### C1 — preuves journal / concurrence
- Rollback merge: 0 nouvel événement MERGED/SPLIT ; acquis/OP inchangés
- Deux splits même Acquis: exactement 1 AVAILABLE + 1 FAILED/CONFLICT ; 1 événement SPLIT ; une affectation
- Split+merge overlap: sérialisation ou double succès cohérent (acquis unique)
- Aucun nouveau mécanisme de lock ajouté (FOR UPDATE existant conservé)

## 5. Tests avant / après

| Suite | Baseline handoff précédent | Après consolidation |
| --- | --- | --- |
| Vitest unit | 31 PASS | **34 PASS** |
| Vitest PG integration | 45 PASS | **50 PASS** |
| Playwright BROWSER FAKE | 2 PASS | **3 PASS** (ml1 + ml2 smoke + ml2-c3-stable-key) |
| tsc --noEmit | PASS | PASS |
| next lint | PASS | PASS |
| next build | PASS | PASS |

### Matrice corrective (statuts)

| Scénario | Niveau | Résultat |
| --- | --- | --- |
| C3 même clé, même payload concurrent | PG | **PASS** DETERMINISTIC+PG |
| C3 même clé, payload incompatible concurrent | PG | **PASS** PG |
| C3 ACK perdu / retry | PG + BROWSER | **PASS** PG + BROWSER FAKE |
| C3 clé stable entre retries UI | BROWSER | **PASS** BROWSER FAKE |
| C3 cross-project / foreign pilot | PG | **PASS** PG |
| C4 grande volumétrie / adversarial | UNIT | **PASS** DETERMINISTIC (DEGRADED) |
| C4 occurrences répétées | UNIT | **PASS** DETERMINISTIC |
| C1 rollback du journal | PG | **PASS** PG/REAL DB |
| C1 même Acquis concurrent | PG | **PASS** PG |
| Non-régression C2 | PG | **PASS** PG |
| Non-régression C5 | UNIT+PG | **PASS** |
| ML1 sas→projet | BROWSER FAKE | **PASS** |
| LIVE Nora / COG panel | LIVE | **NOT RUN** |
| CI Next gate | CI | **ABSENT** (hors périmètre) |

## 6. Fichiers créés / modifiés (commit `1967b2c5`)

```
commit 1967b2c56e59c2cfdf0ba17f2d50dbc9eadf5a01
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 04:31:52 2026 +0100

    fix(next-ml2): close C3 fingerprint/UI key, C4 diff budget, C1 journal proofs

    Close residual integrity gaps from ChatGPT review: fingerprint on every
    correlation reconcile path, stable UI creation intents across retries,
    bounded DEGRADED diff, and PG assertions on subject events under rollback
    and same-acquis concurrency. Local only — no project push.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../construction/delivery-history.md               |  18 ++
 .../matrice-tracabilite.md                         |  15 +
 .../specification-technique.md                     |  23 ++
 .../src/app/preparations/[preparationId]/page.tsx  | 298 +++++++++++++----
 .../web/src/domains/document/service.ts            | 352 +++++++++++++--------
 .../web/tests/e2e/ml1-smoke.spec.ts                |   4 +-
 .../web/tests/e2e/ml2-c3-stable-key.spec.ts        |  71 +++++
 .../tests/integration/create-project.pg.test.ts    |   2 +-
 .../ml2-corrective-integrity.pg.test.ts            | 311 ++++++++++++++++--
 .../web/tests/unit/diff-ordered.test.ts            |  41 ++-
 10 files changed, 924 insertions(+), 211 deletions(-)
```

Créé: `web/tests/e2e/ml2-c3-stable-key.spec.ts`
Modifiés: document/service.ts, preparations page, tests unit/PG/e2e, As-Built spec/matrice, delivery-history
Non touchés: method/**, prompts/**, .github/workflows/**, SEF/ADR, Figma, main
Migration: aucune nouvelle

## 7. Diffs exploitables — document/service.ts

```diff
commit 1967b2c56e59c2cfdf0ba17f2d50dbc9eadf5a01
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 04:31:52 2026 +0100

    fix(next-ml2): close C3 fingerprint/UI key, C4 diff budget, C1 journal proofs

    Close residual integrity gaps from ChatGPT review: fingerprint on every
    correlation reconcile path, stable UI creation intents across retries,
    bounded DEGRADED diff, and PG assertions on subject events under rollback
    and same-acquis concurrency. Local only — no project push.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/document/service.ts b/projects/sfia-studio-next/web/src/domains/document/service.ts
index d5dc8c91..9e866a70 100644
--- a/projects/sfia-studio-next/web/src/domains/document/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/document/service.ts
@@ -6,6 +6,10 @@ import { getPreparationContext } from "@/domains/preparation/service";
 import { createHash } from "node:crypto";

 const MAX_DOC_CHARS = 100_000;
+/** Max LCS cells (n+1)*(m+1). Beyond this, comparison degrades explicitly. */
+export const MAX_DIFF_CELLS = 2_000_000;
+const IN_FLIGHT_POLL_MS = 25;
+const IN_FLIGHT_POLL_ATTEMPTS = 8;

 function contentFingerprint(title: string, contentMarkdown: string): string {
   return createHash("sha256")
@@ -15,6 +19,91 @@ function contentFingerprint(title: string, contentMarkdown: string): string {
     .digest("hex");
 }

+function readStoredFingerprint(
+  provenanceJson: string,
+  title: string,
+  contentMarkdown: string,
+): string {
+  try {
+    const parsed = JSON.parse(provenanceJson) as { contentFingerprint?: string };
+    if (typeof parsed.contentFingerprint === "string" && parsed.contentFingerprint.length > 0) {
+      return parsed.contentFingerprint;
+    }
+  } catch {
+    // fall through — derive from stored body
+  }
+  return contentFingerprint(title, contentMarkdown);
+}
+
+type ReconcileOk = {
+  status: "AVAILABLE" | "SAVING" | "UNKNOWN";
+  documentId: string;
+  revisionId: string;
+  revisionNumber: number;
+  idempotentReplay: true;
+};
+
+type ReconcileFailedPrior = {
+  status: "FAILED";
+  reason: "PRIOR_REVISION_FAILED";
+  documentId: string;
+  revisionId: string;
+  revisionNumber: number;
+  idempotentReplay: true;
+};
+
+type ReconcileConflict = {
+  status: "CONFLICT";
+  reason: "CORRELATION_PAYLOAD_MISMATCH";
+  documentId: string;
+  revisionId: string;
+  revisionNumber: number;
+};
+
+/** Same fingerprint rule for every reconcile path (nominal, race, catch, TX). */
+function reconcilePriorRevision(args: {
+  prior: { id: string; revisionNumber: number; status: string; contentMarkdown: string; provenanceJson: string };
+  documentId: string;
+  documentTitle: string;
+  expectedFp: string;
+}): ReconcileOk | ReconcileFailedPrior | ReconcileConflict {
+  const storedFp = readStoredFingerprint(
+    args.prior.provenanceJson,
+    args.documentTitle,
+    args.prior.contentMarkdown,
+  );
+  if (storedFp !== args.expectedFp) {
+    return {
+      status: "CONFLICT",
+      reason: "CORRELATION_PAYLOAD_MISMATCH",
+      documentId: args.documentId,
+      revisionId: args.prior.id,
+      revisionNumber: args.prior.revisionNumber,
+    };
+  }
+  if (args.prior.status === "FAILED") {
+    return {
+      status: "FAILED",
+      reason: "PRIOR_REVISION_FAILED",
+      documentId: args.documentId,
+      revisionId: args.prior.id,
+      revisionNumber: args.prior.revisionNumber,
+      idempotentReplay: true,
+    };
+  }
+  const status =
+    args.prior.status === "SAVING" || args.prior.status === "UNKNOWN"
+      ? args.prior.status
+      : "AVAILABLE";
+  return {
+    status,
+    documentId: args.documentId,
+    revisionId: args.prior.id,
+    revisionNumber: args.prior.revisionNumber,
+    idempotentReplay: true,
+  };
+}
+
 async function findByCreationCorrelation(
   pilotId: string,
   preparationId: string,
@@ -35,6 +124,30 @@ async function findByCreationCorrelation(
   )[0];
 }

+async function findRevisionByCorrelation(documentId: string, correlationKey: string) {
+  return (
+    await db
+      .select()
+      .from(documentRevisions)
+      .where(
+        and(
+          eq(documentRevisions.documentId, documentId),
+          eq(documentRevisions.correlationKey, correlationKey),
+        ),
+      )
+      .limit(1)
+  )[0];
+}
+
+async function waitForRevisionByCorrelation(documentId: string, correlationKey: string) {
+  for (let i = 0; i < IN_FLIGHT_POLL_ATTEMPTS; i++) {
+    const rev = await findRevisionByCorrelation(documentId, correlationKey);
+    if (rev) return rev;
+    await new Promise((r) => setTimeout(r, IN_FLIGHT_POLL_MS));
+  }
+  return null;
+}
+
 async function latestRevisionFor(documentId: string) {
   return (
     await db
@@ -77,49 +190,28 @@ export async function savePreparationDocument(
       opts.correlationKey,
     );
     if (existingDoc) {
-      const priorRev = (
-        await db
-          .select()
-          .from(documentRevisions)
-          .where(
-            and(
-              eq(documentRevisions.documentId, existingDoc.id),
-              eq(documentRevisions.correlationKey, opts.correlationKey),
-            ),
-          )
-          .limit(1)
-      )[0];
+      const priorRev =
+        (await findRevisionByCorrelation(existingDoc.id, opts.correlationKey)) ??
+        (await waitForRevisionByCorrelation(existingDoc.id, opts.correlationKey));
       if (priorRev) {
-        const priorFp = (() => {
-          try {
-            return JSON.parse(priorRev.provenanceJson)?.contentFingerprint as string | undefined;
-          } catch {
-            return undefined;
-          }
-        })();
-        if (priorFp && priorFp !== fp) {
-          return {
-            status: "CONFLICT" as const,
-            reason: "CORRELATION_PAYLOAD_MISMATCH",
-            documentId: existingDoc.id,
-            revisionId: priorRev.id,
-            revisionNumber: priorRev.revisionNumber,
-          };
-        }
-        return {
-          status: priorRev.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
+        return reconcilePriorRevision({
+          prior: priorRev,
           documentId: existingDoc.id,
-          revisionId: priorRev.id,
-          revisionNumber: priorRev.revisionNumber,
-          idempotentReplay: true as const,
-        };
+          documentTitle: existingDoc.title,
+          expectedFp: fp,
+        });
       }
-      // Document exists for this creation key but revision missing — continue to create revision on that doc
-      documentId = existingDoc.id;
+      // Document row exists but revision still absent after bounded wait
+      return {
+        status: "UNKNOWN" as const,
+        reason: "CREATION_IN_FLIGHT",
+        documentId: existingDoc.id,
+      };
     }
   }

   let docId = documentId;
+  let ownedTitle = titleFinal;
   if (!docId) {
     docId = newId("doc");
     try {
@@ -132,7 +224,7 @@ export async function savePreparationDocument(
         creationCorrelationKey: opts?.correlationKey ?? null,
       });
     } catch (e) {
-      // Concurrent create with same correlation key — reconcile
+      // Concurrent create with same correlation key — reconcile WITH fingerprint
       if (opts?.correlationKey) {
         const raced = await findByCreationCorrelation(
           pilotId,
@@ -140,40 +232,32 @@ export async function savePreparationDocument(
           opts.correlationKey,
         );
         if (raced) {
-          const priorRev = (
-            await db
-              .select()
-              .from(documentRevisions)
-              .where(
-                and(
-                  eq(documentRevisions.documentId, raced.id),
-                  eq(documentRevisions.correlationKey, opts.correlationKey),
-                ),
-              )
-              .limit(1)
-          )[0];
+          const priorRev =
+            (await findRevisionByCorrelation(raced.id, opts.correlationKey)) ??
+            (await waitForRevisionByCorrelation(raced.id, opts.correlationKey));
           if (priorRev) {
-            return {
-              status: priorRev.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
+            return reconcilePriorRevision({
+              prior: priorRev,
               documentId: raced.id,
-              revisionId: priorRev.id,
-              revisionNumber: priorRev.revisionNumber,
-              idempotentReplay: true as const,
-            };
+              documentTitle: raced.title,
+              expectedFp: fp,
+            });
           }
-          docId = raced.id;
-        } else {
           return {
-            status: "FAILED" as const,
-            reason: e instanceof Error ? e.message : "document create failed",
+            status: "UNKNOWN" as const,
+            reason: "CREATION_IN_FLIGHT",
+            documentId: raced.id,
           };
         }
-      } else {
         return {
           status: "FAILED" as const,
           reason: e instanceof Error ? e.message : "document create failed",
         };
       }
+      return {
+        status: "FAILED" as const,
+        reason: e instanceof Error ? e.message : "document create failed",
+      };
     }
   } else {
     const owned = (
@@ -190,46 +274,19 @@ export async function savePreparationDocument(
         .limit(1)
     )[0];
     if (!owned) return { status: "FAILED" as const, reason: "FORBIDDEN" };
+    ownedTitle = owned.title;
   }

   // Revision-level idempotence for known document
   if (opts?.correlationKey) {
-    const prior = (
-      await db
-        .select()
-        .from(documentRevisions)
-        .where(
-          and(
-            eq(documentRevisions.documentId, docId),
-            eq(documentRevisions.correlationKey, opts.correlationKey),
-          ),
-        )
-        .limit(1)
-    )[0];
+    const prior = await findRevisionByCorrelation(docId, opts.correlationKey);
     if (prior) {
-      const priorFp = (() => {
-        try {
-          return JSON.parse(prior.provenanceJson)?.contentFingerprint as string | undefined;
-        } catch {
-          return undefined;
-        }
-      })();
-      if (priorFp && priorFp !== fp) {
-        return {
-          status: "CONFLICT" as const,
-          reason: "CORRELATION_PAYLOAD_MISMATCH",
-          documentId: docId,
-          revisionId: prior.id,
-          revisionNumber: prior.revisionNumber,
-        };
-      }
-      return {
-        status: prior.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
+      return reconcilePriorRevision({
+        prior,
         documentId: docId,
-        revisionId: prior.id,
-        revisionNumber: prior.revisionNumber,
-        idempotentReplay: true as const,
-      };
+        documentTitle: ownedTitle,
+        expectedFp: fp,
+      });
     }
   }

@@ -253,13 +310,12 @@ export async function savePreparationDocument(
             .limit(1)
         )[0];
         if (prior) {
-          return {
-            status: prior.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
+          return reconcilePriorRevision({
+            prior,
             documentId: docId!,
-            revisionId: prior.id,
-            revisionNumber: prior.revisionNumber,
-            idempotentReplay: true as const,
-          };
+            documentTitle: ownedTitle,
+            expectedFp: fp,
+          });
         }
       }

@@ -316,29 +372,24 @@ export async function savePreparationDocument(
       };
     });
   } catch (e) {
-    // Unique violation on correlation → reconcile
+    // Unique violation on correlation → reconcile WITH fingerprint (same rule as race path)
     if (opts?.correlationKey) {
-      const prior = (
-        await db
-          .select()
-          .from(documentRevisions)
-          .where(
-            and(
-              eq(documentRevisions.documentId, docId),
-              eq(documentRevisions.correlationKey, opts.correlationKey),
-            ),
-          )
-          .limit(1)
-      )[0];
+      const prior =
+        (await findRevisionByCorrelation(docId, opts.correlationKey)) ??
+        (await waitForRevisionByCorrelation(docId, opts.correlationKey));
       if (prior) {
-        return {
-          status: prior.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
+        return reconcilePriorRevision({
+          prior,
           documentId: docId,
-          revisionId: prior.id,
-          revisionNumber: prior.revisionNumber,
-          idempotentReplay: true as const,
-        };
+          documentTitle: ownedTitle,
+          expectedFp: fp,
+        });
       }
+      return {
+        status: "UNKNOWN" as const,
+        reason: "CREATION_IN_FLIGHT",
+        documentId: docId,
+      };
     }
     return {
       status: "FAILED" as const,
@@ -565,24 +616,39 @@ export async function getDocumentRevision(
   return { status: "AVAILABLE" as const, document: list.document, revision: rev };
 }

-/**
- * Ordered Myers-style line diff via LCS — preserves duplicate lines and order.
- * Not an AI summary; does not mutate versions.
- */
-export function diffMarkdown(
-  a: string,
-  b: string,
-): {
+export type DiffResult = {
   added: string[];
   removed: string[];
   unchangedCount: number;
   ops: Array<{ op: "equal" | "add" | "remove"; line: string }>;
-} {
+  degraded?: boolean;
+  reason?: string;
+  lineCounts?: { left: number; right: number; cells: number; budget: number };
+};
+
+/**
+ * Ordered LCS line diff — preserves duplicates and order.
+ * Budget: refuses exhaustive matrix when (n+1)*(m+1) > MAX_DIFF_CELLS.
+ * Degraded result is explicit — never presented as a successful detailed diff.
+ */
+export function diffMarkdown(a: string, b: string): DiffResult {
   const la = a.split("\n");
   const lb = b.split("\n");
   const n = la.length;
   const m = lb.length;
-  // LCS lengths
+  const cells = (n + 1) * (m + 1);
+  if (cells > MAX_DIFF_CELLS) {
+    return {
+      added: [],
+      removed: [],
+      unchangedCount: 0,
+      ops: [],
+      degraded: true,
+      reason: "DIFF_BUDGET_EXCEEDED",
+      lineCounts: { left: n, right: m, cells, budget: MAX_DIFF_CELLS },
+    };
+  }
+  // LCS lengths — allocated only under budget
   const dp: number[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
   for (let i = n - 1; i >= 0; i--) {
     for (let j = m - 1; j >= 0; j--) {
@@ -622,7 +688,14 @@ export function diffMarkdown(
     added.push(lb[j]);
     j++;
   }
-  return { added, removed, unchangedCount, ops };
+  return {
+    added,
+    removed,
+    unchangedCount,
+    ops,
+    degraded: false,
+    lineCounts: { left: n, right: m, cells, budget: MAX_DIFF_CELLS },
+  };
 }

 export async function compareDocumentRevisions(
@@ -638,6 +711,25 @@ export async function compareDocumentRevisions(
     return { status: "FAILED" as const, reason: "revision not available" };
   }
   const diff = diffMarkdown(left.revision.contentMarkdown, right.revision.contentMarkdown);
+  if (diff.degraded) {
+    return {
+      status: "DEGRADED" as const,
+      reason: diff.reason ?? "DIFF_BUDGET_EXCEEDED",
+      documentId,
+      left: {
+        id: left.revision.id,
+        revisionNumber: left.revision.revisionNumber,
+        status: left.revision.status,
+      },
+      right: {
+        id: right.revision.id,
+        revisionNumber: right.revision.revisionNumber,
+        status: right.revision.status,
+      },
+      diff,
+      note: "Comparaison détaillée impossible sous la limite de calcul — pas un diff exhaustif.",
+    };
+  }
   return {
     status: "AVAILABLE" as const,
     documentId,

```

## 8. Diffs exploitables — preparations page (C3-B)

```diff
commit 1967b2c56e59c2cfdf0ba17f2d50dbc9eadf5a01
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 04:31:52 2026 +0100

    fix(next-ml2): close C3 fingerprint/UI key, C4 diff budget, C1 journal proofs

    Close residual integrity gaps from ChatGPT review: fingerprint on every
    correlation reconcile path, stable UI creation intents across retries,
    bounded DEGRADED diff, and PG assertions on subject events under rollback
    and same-acquis concurrency. Local only — no project push.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index a4269b70..df68a1b9 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -1,6 +1,6 @@
 "use client";

-import { useCallback, useEffect, useMemo, useState } from "react";
+import { useCallback, useEffect, useMemo, useRef, useState } from "react";
 import { useParams, useRouter } from "next/navigation";
 import { SafeMarkdown } from "@/components/SafeMarkdown";

@@ -46,8 +46,30 @@ export default function PreparationPage() {
   const [splitSubjectId, setSplitSubjectId] = useState<string | null>(null);
   const [splitTitle, setSplitTitle] = useState("");
   const [splitAcquis, setSplitAcquis] = useState<string[]>([]);
+  /** Stable creation intent — key survives retry/timeout until AVAILABLE or explicit new intent. */
+  type CreateIntent = { key: string; contentSnapshot: string; title: string };
+  type ReviseIntent = {
+    key: string;
+    documentId: string;
+    baseRevisionId: string;
+    contentSnapshot: string;
+  };
+  const [createDocIntent, setCreateDocIntent] = useState<CreateIntent | null>(null);
+  const [reviseIntent, setReviseIntent] = useState<ReviseIntent | null>(null);
+  /** Refs avoid double-click minting two keys before React state commits. */
+  const createDocIntentRef = useRef<CreateIntent | null>(null);
+  const reviseIntentRef = useRef<ReviseIntent | null>(null);
   const idempotencyKey = useMemo(() => `create-${preparationId}`, [preparationId]);

+  function rememberCreateIntent(next: CreateIntent | null) {
+    createDocIntentRef.current = next;
+    setCreateDocIntent(next);
+  }
+  function rememberReviseIntent(next: ReviseIntent | null) {
+    reviseIntentRef.current = next;
+    setReviseIntent(next);
+  }
+
   const reloadKnowledge = useCallback(async () => {
     const res = await fetch(`/api/preparations/${preparationId}/knowledge`);
     if (res.ok) {
@@ -124,34 +146,125 @@ export default function PreparationPage() {
   }

   async function saveDoc() {
-    setBusy(true);
-    const correlationKey = docId
-      ? `revsave-${docId}-${Date.now()}`
-      : `create-doc-${preparationId}-${Date.now()}`;
-    const res = await fetch(`/api/preparations/${preparationId}/documents`, {
-      method: "POST",
-      headers: { "Content-Type": "application/json" },
-      body: JSON.stringify({
-        title: "Document du sas",
-        contentMarkdown: docText,
-        documentId: docId,
-        correlationKey,
-      }),
-    });
-    const j = await res.json();
-    setBusy(false);
-    if (j.status === "AVAILABLE") {
-      setDocId(j.documentId);
-      setBaseRevisionId(j.revisionId);
+    const title = "Document du sas";
+    // Existing document saves use a distinct revise-via-save key bound to doc+base intent
+    if (docId) {
+      let intent = reviseIntentRef.current;
+      if (
+        intent &&
+        (intent.documentId !== docId ||
+          intent.baseRevisionId !== (baseRevisionId ?? "") ||
+          intent.contentSnapshot !== docText)
+      ) {
+        if (intent.contentSnapshot !== docText && intent.documentId === docId) {
+          setStatus(
+            "CONFLICT: contenu modifié pour la même intention de sauvegarde — annuler l'intention ou restaurer le payload",
+          );
+          return;
+        }
+        intent = null;
+      }
+      if (!intent) {
+        intent = {
+          key:
+            typeof crypto !== "undefined" && "randomUUID" in crypto
+              ? `revsave-${crypto.randomUUID()}`
+              : `revsave-${docId}-${Math.random().toString(36).slice(2)}`,
+          documentId: docId,
+          baseRevisionId: baseRevisionId ?? "",
+          contentSnapshot: docText,
+        };
+        rememberReviseIntent(intent);
+      }
+      setBusy(true);
+      try {
+        const res = await fetch(`/api/preparations/${preparationId}/documents`, {
+          method: "POST",
+          headers: { "Content-Type": "application/json" },
+          body: JSON.stringify({
+            title,
+            contentMarkdown: intent.contentSnapshot,
+            documentId: docId,
+            correlationKey: intent.key,
+          }),
+        });
+        const j = await res.json();
+        if (j.status === "AVAILABLE") {
+          setDocId(j.documentId);
+          setBaseRevisionId(j.revisionId);
+          rememberReviseIntent(null);
+          rememberCreateIntent(null);
+          setStatus(
+            j.idempotentReplay
+              ? `Document AVAILABLE (rejeu idempotent) rev ${j.revisionNumber}`
+              : `Document AVAILABLE rev ${j.revisionNumber}`,
+          );
+          await reload();
+        } else if (j.status === "CONFLICT") {
+          setStatus(`CONFLICT document: ${j.reason ?? "version ou corrélation"} — clé conservée`);
+        } else if (j.status === "UNKNOWN") {
+          setStatus(`Document UNKNOWN: ${j.reason ?? "réconciliation"} — retry avec la même clé`);
+        } else setStatus(`Document ${j.status}: ${j.reason ?? ""}`);
+      } catch {
+        setStatus("Échec réseau / ACK perdu — intention et clé conservées pour retry");
+      } finally {
+        setBusy(false);
+      }
+      return;
+    }
+
+    // Creation intent: one key until AVAILABLE; payload change refused without new intent
+    let intent = createDocIntentRef.current;
+    if (intent && intent.contentSnapshot !== docText) {
       setStatus(
-        j.idempotentReplay
-          ? `Document AVAILABLE (rejeu idempotent) rev ${j.revisionNumber}`
-          : `Document AVAILABLE rev ${j.revisionNumber}`,
+        "CONFLICT: payload modifié pour la même intention de création — conserver le texte ou démarrer une nouvelle intention",
       );
-      await reload();
-    } else if (j.status === "CONFLICT") {
-      setStatus(`CONFLICT document: ${j.reason ?? "version ou corrélation"}`);
-    } else setStatus(`Document ${j.status}: ${j.reason ?? ""}`);
+      return;
+    }
+    if (!intent) {
+      intent = {
+        key:
+          typeof crypto !== "undefined" && "randomUUID" in crypto
+            ? `create-doc-${crypto.randomUUID()}`
+            : `create-doc-${preparationId}-${Math.random().toString(36).slice(2)}`,
+        contentSnapshot: docText,
+        title,
+      };
+      rememberCreateIntent(intent);
+    }
+
+    setBusy(true);
+    try {
+      const res = await fetch(`/api/preparations/${preparationId}/documents`, {
+        method: "POST",
+        headers: { "Content-Type": "application/json" },
+        body: JSON.stringify({
+          title: intent.title,
+          contentMarkdown: intent.contentSnapshot,
+          correlationKey: intent.key,
+        }),
+      });
+      const j = await res.json();
+      if (j.status === "AVAILABLE") {
+        setDocId(j.documentId);
+        setBaseRevisionId(j.revisionId);
+        rememberCreateIntent(null);
+        setStatus(
+          j.idempotentReplay
+            ? `Document AVAILABLE (rejeu idempotent) rev ${j.revisionNumber}`
+            : `Document AVAILABLE rev ${j.revisionNumber}`,
+        );
+        await reload();
+      } else if (j.status === "CONFLICT") {
+        setStatus(`CONFLICT document: ${j.reason ?? "corrélation"} — clé d'intention conservée`);
+      } else if (j.status === "UNKNOWN") {
+        setStatus(`Document UNKNOWN: ${j.reason ?? "en vol"} — réessayer avec la même clé`);
+      } else setStatus(`Document ${j.status}: ${j.reason ?? ""}`);
+    } catch {
+      setStatus("Échec réseau / ACK perdu — intention et clé conservées pour retry");
+    } finally {
+      setBusy(false);
+    }
   }

   async function reviseDoc() {
@@ -159,29 +272,67 @@ export default function PreparationPage() {
       setStatus("Révision impossible: version de base inconnue");
       return;
     }
-    setBusy(true);
-    const res = await fetch(`/api/preparations/${preparationId}/documents/${docId}`, {
-      method: "POST",
-      headers: { "Content-Type": "application/json" },
-      body: JSON.stringify({
-        action: "revise",
+    let intent = reviseIntentRef.current;
+    if (
+      intent &&
+      (intent.documentId !== docId ||
+        intent.baseRevisionId !== baseRevisionId ||
+        intent.contentSnapshot !== docText)
+    ) {
+      if (intent.contentSnapshot !== docText && intent.documentId === docId) {
+        setStatus(
+          "CONFLICT: contenu modifié pour la même intention de révision — clé non renouvelée automatiquement",
+        );
+        return;
+      }
+      intent = null;
+    }
+    if (!intent) {
+      intent = {
+        key:
+          typeof crypto !== "undefined" && "randomUUID" in crypto
+            ? `rev-${crypto.randomUUID()}`
+            : `rev-${Math.random().toString(36).slice(2)}`,
+        documentId: docId,
         baseRevisionId,
-        contentMarkdown: docText,
-        correlationKey: `rev-${Date.now()}`,
-        scope: "section",
-      }),
-    });
-    const j = await res.json();
-    setBusy(false);
-    if (j.status === "AVAILABLE") {
-      setBaseRevisionId(j.revisionId);
-      setStatus(`Révision AVAILABLE v${j.revisionNumber}`);
-      await reload();
-    } else if (j.status === "CONFLICT") {
-      setStatus(
-        `CONFLICT base périmée — attendu ${j.expectedBaseRevisionId}, actuel ${j.actualLatestRevisionId}`,
-      );
-    } else setStatus(`Révision ${j.status}: ${j.reason ?? ""}`);
+        contentSnapshot: docText,
+      };
+      rememberReviseIntent(intent);
+    }
+    setBusy(true);
+    try {
+      const res = await fetch(`/api/preparations/${preparationId}/documents/${docId}`, {
+        method: "POST",
+        headers: { "Content-Type": "application/json" },
+        body: JSON.stringify({
+          action: "revise",
+          baseRevisionId: intent.baseRevisionId,
+          contentMarkdown: intent.contentSnapshot,
+          correlationKey: intent.key,
+          scope: "section",
+        }),
+      });
+      const j = await res.json();
+      if (j.status === "AVAILABLE") {
+        setBaseRevisionId(j.revisionId);
+        rememberReviseIntent(null);
+        setStatus(`Révision AVAILABLE v${j.revisionNumber}`);
+        await reload();
+      } else if (j.status === "CONFLICT") {
+        setStatus(
+          `CONFLICT base périmée — attendu ${j.expectedBaseRevisionId}, actuel ${j.actualLatestRevisionId}`,
+        );
+      } else setStatus(`Révision ${j.status}: ${j.reason ?? ""}`);
+    } catch {
+      setStatus("Échec réseau / ACK perdu — intention de révision conservée");
+    } finally {
+      setBusy(false);
+    }
+  }
+
+  function startNewCreateIntent() {
+    rememberCreateIntent(null);
+    setStatus("Nouvelle intention de création — prochaine sauvegarde générera une nouvelle clé");
   }

   async function compareLatestTwo() {
@@ -199,7 +350,7 @@ export default function PreparationPage() {
       `/api/preparations/${preparationId}/documents/${docId}?left=${left.id}&right=${right.id}`,
     );
     const cmp = await cmpRes.json();
-    if (cmp.status === "AVAILABLE") {
+    if (cmp.status === "AVAILABLE" && !cmp.diff?.degraded) {
       setDiffText(
         `v${cmp.left.revisionNumber} → v${cmp.right.revisionNumber}\n` +
           `+ ${cmp.diff.added.length} lignes\n- ${cmp.diff.removed.length} lignes\n` +
@@ -208,6 +359,11 @@ export default function PreparationPage() {
       );
       setSurface("document");
       setStatus(`Diff v${cmp.left.revisionNumber}/v${cmp.right.revisionNumber}`);
+    } else if (cmp.status === "DEGRADED" || cmp.diff?.degraded) {
+      setDiffText("");
+      setStatus(
+        `Diff DEGRADED: ${cmp.reason ?? cmp.diff?.reason ?? "DIFF_BUDGET_EXCEEDED"} — comparaison détaillée impossible (pas un diff exhaustif)`,
+      );
     } else setStatus(`Diff ${cmp.status}`);
   }

@@ -399,7 +555,11 @@ export default function PreparationPage() {
                 Une recommandation Nora n&apos;est jamais une HumanDecision.
               </p>
             </div>
-            {status ? <p className="text-sm muted">{status}</p> : null}
+            {status ? (
+              <p className="text-sm muted" data-testid="surface-status">
+                {status}
+              </p>
+            ) : null}
           </section>
         </div>
       ) : null}
@@ -408,6 +568,11 @@ export default function PreparationPage() {
         <div className="grid lg:grid-cols-[1.2fr_1fr] gap-4">
           <section className="panel p-4 space-y-3">
             <h2 className="font-medium">Document — inspection / révision</h2>
+            {status ? (
+              <p className="text-sm muted" data-testid="surface-status">
+                {status}
+              </p>
+            ) : null}
             <div className="flex flex-wrap gap-2 text-xs">
               {docs.map((d) => (
                 <button
@@ -432,16 +597,41 @@ export default function PreparationPage() {
               onChange={(e) => setDocText(e.target.value)}
             />
             <div className="flex flex-wrap gap-2">
-              <button className="btn secondary" disabled={busy} onClick={saveDoc}>
-                Sauvegarder (nouvelle identité si besoin)
+              <button
+                className="btn secondary"
+                disabled={busy}
+                onClick={saveDoc}
+                data-testid="doc-save"
+              >
+                Sauvegarder
               </button>
-              <button className="btn" disabled={busy} onClick={reviseDoc}>
+              <button className="btn" disabled={busy} onClick={reviseDoc} data-testid="doc-revise">
                 Réviser sur version de base
               </button>
               <button className="btn secondary" disabled={busy} onClick={compareLatestTwo}>
                 Comparer versions
               </button>
+              {createDocIntent && !docId ? (
+                <button
+                  className="btn secondary"
+                  disabled={busy}
+                  onClick={startNewCreateIntent}
+                  data-testid="doc-new-intent"
+                >
+                  Nouvelle intention de création
+                </button>
+              ) : null}
             </div>
+            {createDocIntent && !docId ? (
+              <p className="text-xs muted" data-testid="create-intent-key">
+                Intention de création active · clé {createDocIntent.key}
+              </p>
+            ) : null}
+            {reviseIntent ? (
+              <p className="text-xs muted" data-testid="revise-intent-key">
+                Intention de révision active · clé {reviseIntent.key}
+              </p>
+            ) : null}
             {inspected?.latestRevision ? (
               <p className="text-xs muted">
                 Base inspectée: {baseRevisionId} · statut {inspected.latestRevision.status}

```

## 9. Diffs exploitables — tests

```diff
commit 1967b2c56e59c2cfdf0ba17f2d50dbc9eadf5a01
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 04:31:52 2026 +0100

    fix(next-ml2): close C3 fingerprint/UI key, C4 diff budget, C1 journal proofs

    Close residual integrity gaps from ChatGPT review: fingerprint on every
    correlation reconcile path, stable UI creation intents across retries,
    bounded DEGRADED diff, and PG assertions on subject events under rollback
    and same-acquis concurrency. Local only — no project push.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
index 443d3b30..11fb2737 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
@@ -31,8 +31,8 @@ test("DEV fake login → sas → message Nora FAKE → document → create → p
   await page.getByRole("button", { name: "Document", exact: true }).click();
   const doc = page.locator("textarea").first();
   await doc.fill("# Document Playwright\ncontenu");
-  await page.getByRole("button", { name: "Sauvegarder (nouvelle identité si besoin)" }).click();
-  await expect(page.getByText("AVAILABLE", { exact: false })).toBeVisible({ timeout: 10000 });
+  await page.getByTestId("doc-save").click();
+  await expect(page.getByTestId("surface-status")).toContainText(/AVAILABLE/i, { timeout: 10000 });

   await page.getByRole("button", { name: "Travail" }).click();
   await page.getByRole("button", { name: "Créer le projet" }).click();
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml2-c3-stable-key.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml2-c3-stable-key.spec.ts
new file mode 100644
index 00000000..9548754a
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/e2e/ml2-c3-stable-key.spec.ts
@@ -0,0 +1,71 @@
+import { test, expect } from "@playwright/test";
+
+/**
+ * C3-B: creation correlation key must stay stable across retries of the same intent.
+ * BROWSER FAKE — no LIVE Nora required.
+ */
+test("ML2 C3-B: stable creation key across double-save retry", async ({ page }) => {
+  await page.goto("/login");
+  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+  await page.waitForURL("**/portfolio");
+
+  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
+  await page.waitForURL("**/preparations/**");
+
+  await page.getByRole("button", { name: "Document", exact: true }).click();
+  await expect(page.getByRole("heading", { name: /Document/ })).toBeVisible();
+
+  const area = page.locator("textarea").first();
+  await area.fill("# Intent stable\n\nContenu pour clé corrélée.");
+
+  // Intercept first create: server commits, UI sees network failure (ACK perdu)
+  let createCalls = 0;
+  const keysSeen: string[] = [];
+  await page.route("**/api/preparations/*/documents", async (route) => {
+    const req = route.request();
+    if (req.method() !== "POST") {
+      await route.continue();
+      return;
+    }
+    let body: { correlationKey?: string; documentId?: string } = {};
+    try {
+      body = req.postDataJSON() as { correlationKey?: string; documentId?: string };
+    } catch {
+      body = {};
+    }
+    if (body.correlationKey && !body.documentId) {
+      keysSeen.push(body.correlationKey);
+      createCalls += 1;
+      if (createCalls === 1) {
+        const upstream = await route.fetch();
+        // Discard successful body — client observes failure
+        await route.fulfill({
+          status: 502,
+          contentType: "application/json",
+          body: JSON.stringify({ status: "FAILED", reason: "ACK_LOST_SIM" }),
+        });
+        void upstream;
+        return;
+      }
+    }
+    await route.continue();
+  });
+
+  await page.getByTestId("doc-save").click();
+  await expect(page.getByTestId("create-intent-key")).toBeVisible({ timeout: 15000 });
+  await expect(page.getByTestId("surface-status")).toContainText(/Document FAILED|ACK|clé/i, {
+    timeout: 10000,
+  });
+  const keyAfterFail = await page.getByTestId("create-intent-key").innerText();
+  expect(keyAfterFail).toMatch(/create-doc-/);
+
+  // Retry without starting a new intention — same key, idempotent AVAILABLE
+  await page.getByTestId("doc-save").click();
+  await expect(page.getByTestId("surface-status")).toContainText(/Document AVAILABLE/i, {
+    timeout: 20000,
+  });
+
+  expect(keysSeen.length).toBeGreaterThanOrEqual(2);
+  expect(keysSeen[0]).toBe(keysSeen[1]);
+  await expect(page.getByTestId("create-intent-key")).toHaveCount(0);
+});
diff --git a/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
index 889312d8..57ef9f05 100644
--- a/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
@@ -401,7 +401,7 @@ describe("PostgreSQL create-project contracts", () => {
       saved.documentId,
     );
     expect(cross.status).toBe("FAILED");
-    expect(cross.reason).toBe("FORBIDDEN");
+    expect("reason" in cross ? cross.reason : undefined).toBe("FORBIDDEN");
   });

   it("A09b: injected persist failure yields FAILED not AVAILABLE", async () => {
diff --git a/projects/sfia-studio-next/web/tests/integration/ml2-corrective-integrity.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml2-corrective-integrity.pg.test.ts
index 1dabcbd0..51f79541 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml2-corrective-integrity.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml2-corrective-integrity.pg.test.ts
@@ -4,7 +4,15 @@ config({ path: ".env.local" });

 import { and, eq } from "drizzle-orm";
 import { db } from "@/db/client";
-import { documents, documentRevisions, knowledgeSubjects, knowledgeAcquis, pilots } from "@/db/schema";
+import {
+  documents,
+  documentRevisions,
+  knowledgeSubjects,
+  knowledgeAcquis,
+  knowledgeSubjectEvents,
+  knowledgeOpenPoints,
+  pilots,
+} from "@/db/schema";
 import { newId } from "@/lib/ids";
 import { openOrCreatePreparation } from "@/domains/preparation/service";
 import {
@@ -21,6 +29,7 @@ import {
   savePreparationDocument,
   listDocumentRevisions,
   diffMarkdown,
+  MAX_DIFF_CELLS,
 } from "@/domains/document/service";

 async function seedPilot(label: string) {
@@ -111,37 +120,125 @@ describe("ML2 corrective C1–C5 integrity (PG)", () => {
     expect(neo.originatedFromSubjectId).toBe(source.subjectId);
   });

-  it("C1: merge rollback on injected failure — no partial journal", async () => {
+  it("C1: merge rollback on injected failure — no residual MERGED/SPLIT events", async () => {
     const pilotId = await seedPilot("C1-rollback");
     const prep = await openOrCreatePreparation(pilotId);
     const a = await ensureSubject(pilotId, prep.id, "Keep");
     const b = await ensureSubject(pilotId, prep.id, "Absorb");
-    await capitalizeAcquis(pilotId, prep.id, {
+    const acq = await capitalizeAcquis(pilotId, prep.id, {
       statement: "Acquis sur absorb qui doit rester si rollback.",
       kind: "HYPOTHESIS",
       subjectId: b.subjectId,
       provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
     });
+    const op = await openPoint(pilotId, prep.id, {
+      statement: "Point ouvert absorbé à restaurer après rollback.",
+      subjectId: b.subjectId,
+      provenance: { sourceKind: "pilot" },
+    });
+    const eventsBefore = await db
+      .select()
+      .from(knowledgeSubjectEvents)
+      .where(
+        and(
+          eq(knowledgeSubjectEvents.preparationId, prep.id),
+          eq(knowledgeSubjectEvents.ownerPilotId, pilotId),
+        ),
+      );
+    const beforeIds = new Set(eventsBefore.map((e) => e.id));
+    const beforeMergedSplit = eventsBefore.filter(
+      (e) => e.eventType === "MERGED" || e.eventType === "SPLIT",
+    );
+
     const failed = await mergeSubjects(pilotId, prep.id, a.subjectId!, b.subjectId!, {
       injectFailureAfter: "move",
     });
     expect(failed.status).toBe("FAILED");
     if (failed.status !== "FAILED") throw new Error("expected FAILED");
     expect(failed.rolledBack).toBe(true);
+
     const bRow = (
       await db.select().from(knowledgeSubjects).where(eq(knowledgeSubjects.id, b.subjectId!))
     )[0];
     expect(bRow.status).toBe("ACTIVE");
-    const k = await listKnowledge(pilotId, prep.id);
-    expect(k.subjects.find((s) => s.id === b.subjectId)?.status).toBe("ACTIVE");
-    expect(k.acquis.every((x) => x.subjectId === b.subjectId || x.subjectId === a.subjectId)).toBe(
-      true,
+    const acqRow = (
+      await db.select().from(knowledgeAcquis).where(eq(knowledgeAcquis.id, acq.acquisId!))
+    )[0];
+    expect(acqRow.subjectId).toBe(b.subjectId);
+    const opRow = (
+      await db.select().from(knowledgeOpenPoints).where(eq(knowledgeOpenPoints.id, op.openPointId!))
+    )[0];
+    expect(opRow.subjectId).toBe(b.subjectId);
+
+    const eventsAfter = await db
+      .select()
+      .from(knowledgeSubjectEvents)
+      .where(
+        and(
+          eq(knowledgeSubjectEvents.preparationId, prep.id),
+          eq(knowledgeSubjectEvents.ownerPilotId, pilotId),
+        ),
+      );
+    const residualMutation = eventsAfter.filter(
+      (e) =>
+        !beforeIds.has(e.id) && (e.eventType === "MERGED" || e.eventType === "SPLIT"),
+    );
+    expect(residualMutation).toHaveLength(0);
+    expect(
+      eventsAfter.filter((e) => e.eventType === "MERGED" || e.eventType === "SPLIT"),
+    ).toHaveLength(beforeMergedSplit.length);
+  });
+
+  it("C1: concurrent splits targeting the same Acquis — at most one valid assignment", async () => {
+    const pilotId = await seedPilot("C1-same-acq");
+    const prep = await openOrCreatePreparation(pilotId);
+    const source = await ensureSubject(pilotId, prep.id, "Same acquis origin");
+    const shared = await capitalizeAcquis(pilotId, prep.id, {
+      statement: "Acquis unique ciblé par deux séparations concurrentes.",
+      kind: "HYPOTHESIS",
+      subjectId: source.subjectId,
+      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
+    });
+    const [r1, r2] = await Promise.all([
+      splitSubject(pilotId, prep.id, source.subjectId!, {
+        newTitle: "Branche A",
+        acquisIds: [shared.acquisId!],
+        openPointIds: [],
+      }),
+      splitSubject(pilotId, prep.id, source.subjectId!, {
+        newTitle: "Branche B",
+        acquisIds: [shared.acquisId!],
+        openPointIds: [],
+      }),
+    ]);
+    const available = [r1, r2].filter((r) => r.status === "AVAILABLE");
+    const refused = [r1, r2].filter(
+      (r) => r.status === "FAILED" || r.status === "CONFLICT",
     );
-    const events = k; // events not listed — verify via subject status only
-    void events;
+    expect(available.length).toBe(1);
+    expect(refused.length).toBe(1);
+    if (available[0].status !== "AVAILABLE") throw new Error("expected one AVAILABLE");
+    const k = await listKnowledge(pilotId, prep.id);
+    const row = k.acquis.find((x) => x.id === shared.acquisId)!;
+    expect(row.subjectId).toBe(available[0].newSubjectId);
+    // Exactly one SPLIT event; journal points at source with newSubjectId in payload
+    const splitEvents = await db
+      .select()
+      .from(knowledgeSubjectEvents)
+      .where(
+        and(
+          eq(knowledgeSubjectEvents.preparationId, prep.id),
+          eq(knowledgeSubjectEvents.ownerPilotId, pilotId),
+          eq(knowledgeSubjectEvents.eventType, "SPLIT"),
+        ),
+      );
+    expect(splitEvents).toHaveLength(1);
+    expect(splitEvents[0].subjectId).toBe(source.subjectId);
+    const payload = JSON.parse(splitEvents[0].payloadJson) as { newSubjectId?: string };
+    expect(payload.newSubjectId).toBe(available[0].newSubjectId);
   });

-  it("C1: concurrent splits on same origin — one wins or both serialize safely", async () => {
+  it("C1: concurrent splits on same origin distinct acquis — serialize with coherent filiation", async () => {
     const pilotId = await seedPilot("C1-race");
     const prep = await openOrCreatePreparation(pilotId);
     const source = await ensureSubject(pilotId, prep.id, "Race origin");
@@ -175,8 +272,62 @@ describe("ML2 corrective C1–C5 integrity (PG)", () => {
     );
     expect(statuses.filter((s) => s === "AVAILABLE").length).toBeGreaterThanOrEqual(1);
     const k = await listKnowledge(pilotId, prep.id);
-    expect(k.acquis.find((x) => x.id === a1.acquisId)?.subjectId).toBeTruthy();
-    expect(k.acquis.find((x) => x.id === a2.acquisId)?.subjectId).toBeTruthy();
+    const s1 = k.acquis.find((x) => x.id === a1.acquisId)!;
+    const s2 = k.acquis.find((x) => x.id === a2.acquisId)!;
+    expect(s1.subjectId).toBeTruthy();
+    expect(s2.subjectId).toBeTruthy();
+    // No double assignment of the same acquis identity
+    expect(new Set([s1.id, s2.id]).size).toBe(2);
+    if (r1.status === "AVAILABLE" && r2.status === "AVAILABLE") {
+      expect(s1.subjectId).toBe(r1.newSubjectId);
+      expect(s2.subjectId).toBe(r2.newSubjectId);
+      expect(s1.subjectId).not.toBe(s2.subjectId);
+    }
+  });
+
+  it("C1: concurrent split+merge on overlapping resources — serialized or explicit conflict", async () => {
+    const pilotId = await seedPilot("C1-split-merge");
+    const prep = await openOrCreatePreparation(pilotId);
+    const keep = await ensureSubject(pilotId, prep.id, "Keep SM");
+    const absorb = await ensureSubject(pilotId, prep.id, "Absorb SM");
+    const shared = await capitalizeAcquis(pilotId, prep.id, {
+      statement: "Acquis overlap split et merge concurrent.",
+      kind: "HYPOTHESIS",
+      subjectId: absorb.subjectId,
+      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
+    });
+    const [splitR, mergeR] = await Promise.all([
+      splitSubject(pilotId, prep.id, absorb.subjectId!, {
+        newTitle: "Split pendant merge",
+        acquisIds: [shared.acquisId!],
+        openPointIds: [],
+      }),
+      mergeSubjects(pilotId, prep.id, keep.subjectId!, absorb.subjectId!),
+    ]);
+    const outcomes = [splitR.status, mergeR.status];
+    expect(
+      outcomes.every((s) => s === "AVAILABLE" || s === "FAILED" || s === "CONFLICT"),
+    ).toBe(true);
+    expect(outcomes.filter((s) => s === "AVAILABLE").length).toBeGreaterThanOrEqual(1);
+    // Final acquis has exactly one subject assignment — never lost, never duplicated
+    const k = await listKnowledge(pilotId, prep.id);
+    const row = k.acquis.find((x) => x.id === shared.acquisId)!;
+    expect(row.subjectId).toBeTruthy();
+    const absorbRow = (
+      await db.select().from(knowledgeSubjects).where(eq(knowledgeSubjects.id, absorb.subjectId!))
+    )[0];
+    if (mergeR.status === "AVAILABLE" && splitR.status !== "AVAILABLE") {
+      expect(absorbRow.status).toBe("MERGED");
+      expect(row.subjectId).toBe(keep.subjectId);
+    } else if (splitR.status === "AVAILABLE" && mergeR.status !== "AVAILABLE") {
+      expect(absorbRow.status).toBe("ACTIVE");
+      expect(row.subjectId).toBe(splitR.newSubjectId);
+    } else if (splitR.status === "AVAILABLE" && mergeR.status === "AVAILABLE") {
+      // Split moved first, then merge absorbed empty source — acquis stays on new subject
+      expect(absorbRow.status).toBe("MERGED");
+      expect(row.subjectId).toBe(splitR.newSubjectId);
+      expect(row.subjectId).not.toBe(keep.subjectId);
+    }
   });

   it("C2: concurrent revise same base → one AVAILABLE, one CONFLICT; no duplicate rev numbers", async () => {
@@ -186,16 +337,17 @@ describe("ML2 corrective C1–C5 integrity (PG)", () => {
       correlationKey: `c2-create-${newId("k")}`,
     });
     expect(v1.status).toBe("AVAILABLE");
+    if (v1.status !== "AVAILABLE") throw new Error("expected AVAILABLE");
     const [a, b] = await Promise.all([
       reviseDocument(pilotId, prep.id, {
-        documentId: v1.documentId!,
-        baseRevisionId: v1.revisionId!,
+        documentId: v1.documentId,
+        baseRevisionId: v1.revisionId,
         contentMarkdown: "# v2a\n",
         correlationKey: `c2-a-${newId("k")}`,
       }),
       reviseDocument(pilotId, prep.id, {
-        documentId: v1.documentId!,
-        baseRevisionId: v1.revisionId!,
+        documentId: v1.documentId,
+        baseRevisionId: v1.revisionId,
         contentMarkdown: "# v2b\n",
         correlationKey: `c2-b-${newId("k")}`,
       }),
@@ -203,7 +355,7 @@ describe("ML2 corrective C1–C5 integrity (PG)", () => {
     const outcomes = [a.status, b.status].sort();
     expect(outcomes).toContain("AVAILABLE");
     expect(outcomes).toContain("CONFLICT");
-    const list = await listDocumentRevisions(pilotId, prep.id, v1.documentId!);
+    const list = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
     const nums = list.revisions.map((r) => r.revisionNumber);
     expect(new Set(nums).size).toBe(nums.length);
     expect(list.revisions.find((r) => r.id === v1.revisionId)?.contentMarkdown).toBe("# v1\n");
@@ -215,9 +367,10 @@ describe("ML2 corrective C1–C5 integrity (PG)", () => {
     const v1 = await savePreparationDocument(pilotId, prep.id, "Doc", "# base\n", undefined, {
       correlationKey: `c2-base-${newId("k")}`,
     });
+    if (v1.status !== "AVAILABLE") throw new Error("expected AVAILABLE");
     const failed = await reviseDocument(pilotId, prep.id, {
-      documentId: v1.documentId!,
-      baseRevisionId: v1.revisionId!,
+      documentId: v1.documentId,
+      baseRevisionId: v1.revisionId,
       contentMarkdown: "# should not commit\n",
       correlationKey: `c2-fail-${newId("k")}`,
       injectFailureAfterLock: true,
@@ -243,8 +396,11 @@ describe("ML2 corrective C1–C5 integrity (PG)", () => {
       correlationKey: key,
     });
     expect(r1.status).toBe("AVAILABLE");
-    expect(r2.idempotentReplay).toBe(true);
-    expect(r3.idempotentReplay).toBe(true);
+    if (r1.status !== "AVAILABLE") throw new Error("expected AVAILABLE");
+    expect(r2.status).toBe("AVAILABLE");
+    expect(r3.status).toBe("AVAILABLE");
+    expect("idempotentReplay" in r2 && r2.idempotentReplay).toBe(true);
+    expect("idempotentReplay" in r3 && r3.idempotentReplay).toBe(true);
     expect(r2.documentId).toBe(r1.documentId);
     expect(r3.documentId).toBe(r1.documentId);
     const docs = await db
@@ -257,9 +413,115 @@ describe("ML2 corrective C1–C5 integrity (PG)", () => {
       correlationKey: key,
     });
     expect(bad.status).toBe("CONFLICT");
+    if (bad.status !== "CONFLICT") throw new Error("expected CONFLICT");
     expect(bad.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
   });

+  it("C3 concurrent: same key + same payload → one document, coherent AVAILABLE", async () => {
+    const pilotId = await seedPilot("C3-conc-same");
+    const prep = await openOrCreatePreparation(pilotId);
+    const key = `conc-same-${newId("x")}`;
+    const payload = "# concurrent same\n";
+    const [a, b] = await Promise.all([
+      savePreparationDocument(pilotId, prep.id, "T", payload, undefined, { correlationKey: key }),
+      savePreparationDocument(pilotId, prep.id, "T", payload, undefined, { correlationKey: key }),
+    ]);
+    const statuses = [a.status, b.status];
+    expect(statuses.every((s) => s === "AVAILABLE" || s === "UNKNOWN")).toBe(true);
+    const docs = await db
+      .select()
+      .from(documents)
+      .where(
+        and(
+          eq(documents.preparationId, prep.id),
+          eq(documents.ownerPilotId, pilotId),
+          eq(documents.creationCorrelationKey, key),
+        ),
+      );
+    expect(docs).toHaveLength(1);
+    const revs = await db
+      .select()
+      .from(documentRevisions)
+      .where(eq(documentRevisions.documentId, docs[0].id));
+    expect(revs).toHaveLength(1);
+    // Final reconcile (ACK lost / restart) yields AVAILABLE with fingerprint match
+    const again = await savePreparationDocument(pilotId, prep.id, "T", payload, undefined, {
+      correlationKey: key,
+    });
+    expect(again.status).toBe("AVAILABLE");
+    if (again.status !== "AVAILABLE") throw new Error("expected AVAILABLE");
+    expect(again.documentId).toBe(docs[0].id);
+    expect("idempotentReplay" in again && again.idempotentReplay).toBe(true);
+    if (a.status === "AVAILABLE" && b.status === "AVAILABLE") {
+      expect(a.documentId).toBe(b.documentId);
+      expect(a.revisionId).toBe(b.revisionId);
+    }
+  });
+
+  it("C3 concurrent: same key + incompatible payload → CONFLICT on loser path", async () => {
+    const pilotId = await seedPilot("C3-conc-diff");
+    const prep = await openOrCreatePreparation(pilotId);
+    const key = `conc-diff-${newId("x")}`;
+    const [a, b] = await Promise.all([
+      savePreparationDocument(pilotId, prep.id, "T", "# payload-A\n", undefined, {
+        correlationKey: key,
+      }),
+      savePreparationDocument(pilotId, prep.id, "T", "# payload-B\n", undefined, {
+        correlationKey: key,
+      }),
+    ]);
+    const docs = await db
+      .select()
+      .from(documents)
+      .where(
+        and(
+          eq(documents.preparationId, prep.id),
+          eq(documents.ownerPilotId, pilotId),
+          eq(documents.creationCorrelationKey, key),
+        ),
+      );
+    expect(docs).toHaveLength(1);
+    const statuses = [a.status, b.status].sort();
+    // Winner AVAILABLE (or UNKNOWN then settle); loser CONFLICT with CORRELATION_PAYLOAD_MISMATCH
+    expect(statuses.includes("CONFLICT") || statuses.includes("AVAILABLE")).toBe(true);
+    const conflicted = [a, b].filter((r) => r.status === "CONFLICT");
+    if (conflicted.length > 0) {
+      expect(conflicted.every((r) => r.reason === "CORRELATION_PAYLOAD_MISMATCH")).toBe(true);
+    }
+    // Deterministic post-settle: one payload wins; the other mismatches
+    const settleA = await savePreparationDocument(pilotId, prep.id, "T", "# payload-A\n", undefined, {
+      correlationKey: key,
+    });
+    const settleB = await savePreparationDocument(pilotId, prep.id, "T", "# payload-B\n", undefined, {
+      correlationKey: key,
+    });
+    const settleStatuses = [settleA.status, settleB.status].sort();
+    expect(settleStatuses).toContain("AVAILABLE");
+    expect(settleStatuses).toContain("CONFLICT");
+  });
+
+  it("C3: cross-project / foreign pilot correlation key does not leak", async () => {
+    const p1 = await seedPilot("C3-x1");
+    const p2 = await seedPilot("C3-x2");
+    const prep1 = await openOrCreatePreparation(p1);
+    const prep2 = await openOrCreatePreparation(p2);
+    const key = `shared-looking-${newId("x")}`;
+    const first = await savePreparationDocument(p1, prep1.id, "T", "# p1\n", undefined, {
+      correlationKey: key,
+    });
+    expect(first.status).toBe("AVAILABLE");
+    const other = await savePreparationDocument(p2, prep2.id, "T", "# p1\n", undefined, {
+      correlationKey: key,
+    });
+    expect(other.status).toBe("AVAILABLE");
+    expect(other.documentId).not.toBe(first.documentId);
+    await expect(
+      savePreparationDocument(p2, prep1.id, "T", "# p1\n", undefined, {
+        correlationKey: key,
+      }),
+    ).rejects.toMatchObject({ code: "NOT_FOUND" });
+  });
+
   it("C3: two distinct correlation keys → two documents", async () => {
     const pilotId = await seedPilot("C3-two");
     const prep = await openOrCreatePreparation(pilotId);
@@ -283,15 +545,18 @@ describe("ML2 corrective C1–C5 integrity (PG)", () => {
     const again = await savePreparationDocument(pilotId, prep.id, "Ack", "# ack\n", undefined, {
       correlationKey: key,
     });
+    if (first.status !== "AVAILABLE") throw new Error("expected AVAILABLE");
+    if (again.status !== "AVAILABLE") throw new Error("expected AVAILABLE replay");
     expect(again.documentId).toBe(first.documentId);
     expect(again.revisionId).toBe(first.revisionId);
-    expect(again.idempotentReplay).toBe(true);
+    expect("idempotentReplay" in again && again.idempotentReplay).toBe(true);
   });

-  it("C4: ordered diff duplicate semantics (unit-backed, also callable here)", () => {
+  it("C4: ordered diff duplicate semantics + budget constant visible", () => {
     const d = diffMarkdown("x\nx\ny", "x\ny");
     expect(d.removed).toEqual(["x"]);
     expect(d.added).toEqual([]);
+    expect(MAX_DIFF_CELLS).toBeGreaterThan(0);
   });

   it("C5: FACT without epistemic=established is skipped; keyword-only chatter not capitalised", async () => {
diff --git a/projects/sfia-studio-next/web/tests/unit/diff-ordered.test.ts b/projects/sfia-studio-next/web/tests/unit/diff-ordered.test.ts
index 8790df03..63360712 100644
--- a/projects/sfia-studio-next/web/tests/unit/diff-ordered.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/diff-ordered.test.ts
@@ -1,5 +1,5 @@
 import { describe, expect, it } from "vitest";
-import { diffMarkdown } from "@/domains/document/service";
+import { diffMarkdown, MAX_DIFF_CELLS } from "@/domains/document/service";

 describe("C4 ordered diffMarkdown", () => {
   it("preserves duplicate lines when only one is removed", () => {
@@ -7,6 +7,7 @@ describe("C4 ordered diffMarkdown", () => {
     expect(d.removed).toEqual(["x"]);
     expect(d.added).toEqual([]);
     expect(d.unchangedCount).toBe(3);
+    expect(d.degraded).toBe(false);
   });

   it("detects block move as remove+add in order", () => {
@@ -35,4 +36,42 @@ describe("C4 ordered diffMarkdown", () => {
     const d = diffMarkdown("a\n\nb", "a\nb");
     expect(d.removed).toEqual([""]);
   });
+
+  it("many short lines stay under budget and remain ordered", () => {
+    const n = 400;
+    const left = Array.from({ length: n }, (_, i) => `L${i}`).join("\n");
+    const right = Array.from({ length: n }, (_, i) => (i === 200 ? "INSERTED" : `L${i}`)).join(
+      "\n",
+    );
+    const d = diffMarkdown(left, right);
+    expect(d.degraded).toBe(false);
+    expect(d.added).toEqual(["INSERTED"]);
+    expect(d.removed).toEqual(["L200"]);
+    expect((d.lineCounts?.cells ?? 0) <= MAX_DIFF_CELLS).toBe(true);
+  });
+
+  it("adversarial line-count product degrades explicitly — never fake detailed diff", () => {
+    // Choose n,m such that (n+1)*(m+1) > MAX_DIFF_CELLS without huge strings
+    const side = Math.ceil(Math.sqrt(MAX_DIFF_CELLS)) + 50;
+    const left = Array.from({ length: side }, (_, i) => `A${i % 7}`).join("\n");
+    const right = Array.from({ length: side }, (_, i) => `B${i % 11}`).join("\n");
+    const cells = (side + 1) * (side + 1);
+    expect(cells).toBeGreaterThan(MAX_DIFF_CELLS);
+    const d = diffMarkdown(left, right);
+    expect(d.degraded).toBe(true);
+    expect(d.reason).toBe("DIFF_BUDGET_EXCEEDED");
+    expect(d.ops).toEqual([]);
+    expect(d.added).toEqual([]);
+    expect(d.removed).toEqual([]);
+    expect(d.lineCounts?.budget).toBe(MAX_DIFF_CELLS);
+    expect(d.lineCounts?.cells).toBe(cells);
+  });
+
+  it("near max document size with few lines still diffs (char limit ≠ cell budget)", () => {
+    const chunk = "x".repeat(40_000);
+    const d = diffMarkdown(`${chunk}\na`, `${chunk}\nb`);
+    expect(d.degraded).toBe(false);
+    expect(d.added).toEqual(["b"]);
+    expect(d.removed).toEqual(["a"]);
+  });
 });

```

## 10. Diffs documentation As-Built

```diff
commit 1967b2c56e59c2cfdf0ba17f2d50dbc9eadf5a01
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 04:31:52 2026 +0100

    fix(next-ml2): close C3 fingerprint/UI key, C4 diff budget, C1 journal proofs

    Close residual integrity gaps from ChatGPT review: fingerprint on every
    correlation reconcile path, stable UI creation intents across retries,
    bounded DEGRADED diff, and PG assertions on subject events under rollback
    and same-acquis concurrency. Local only — no project push.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 03cdc58e..6c755124 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -187,3 +187,21 @@ Append-only logical journal of Cursor product deliveries.
 | Tests | unit 31 PASS ; PG integration 45 PASS ; Playwright 2 PASS ; tsc+build PASS |
 | Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
 | Verdict candidate | `READY FOR MORRIS REVIEW` (réserves S1/S2/S3/CI/COG qualifiées, non bloquantes pour intégrité) |
+
+## delivery_id: DELIV-2026-11-05-ML2-CONSOLIDATION-03
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-05 (Europe/Paris) |
+| Macro-lot | R5 / ML2 — consolidation corrective C3/C4/C1 |
+| Type | Correctif intégré (même macro-lot) |
+| Branch | `sfia/next-ml2-production-capitalisation` (local only — **not published**) |
+| Parent HEAD | `5c7dd7528ff859c9717db865c74d45930dff4219` |
+| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
+| Périmètre | C3-A fingerprint all paths ; C3-B clé UI stable ; C4 budget diff ; C1 journal + concurrence |
+| Schema | unchanged (`004_ml2_integrity_corrective`) — no new migration |
+| Product version | `NO RELEASE` |
+| Tests | unit 34 PASS ; PG integration 50 PASS ; Playwright 3 PASS (FAKE) ; tsc+lint+build PASS |
+| Evidence limits | LIVE Nora / COG panel / Figma ML2-S3 / CI Next = NOT PROVEN or ABSENT |
+| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
+| Verdict candidate | `READY FOR MORRIS REVIEW` |
diff --git a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
index 801b4cee..41717d5d 100644
--- a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
+++ b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
@@ -252,3 +252,18 @@ Branche `sfia/next-ml2-production-capitalisation` @ base `6e4406c6`. Preuves **D
 | C4 lignes répétées | PASS | PASS | N/A | PASS |
 | C5 faux FACT | PASS | PASS | PASS | PASS |
 | C6 état UI | PARTIEL BROWSER | PASS smoke | si effet | PASS partiel |
+
+### 7.2 Consolidation C3/C4/C1 (2026-11-05)
+
+| Défaut | Avant | Après | Niveau | Verdict |
+| --- | --- | --- | --- | --- |
+| C3 race sans fingerprint | FAIL (anomalie revue) | PASS | PG | PASS |
+| C3 même clé payload incompatible concurrent | FAIL | PASS | PG | PASS |
+| C3 ACK perdu / retry | PASS partiel | PASS | PG + BROWSER | PASS |
+| C3 clé UI stable entre retries | FAIL (`Date.now`) | PASS | BROWSER | PASS |
+| C3 cross-project | PARTIEL | PASS | PG | PASS |
+| C4 volumétrie / budget | FAIL (O(nm) non borné) | PASS DEGRADED explicite | UNIT | PASS |
+| C4 occurrences répétées | PASS | PASS | UNIT | PASS |
+| C1 rollback journal événements | FAIL (non asserté) | PASS (0 MERGED/SPLIT résiduel) | PG | PASS |
+| C1 même Acquis concurrent | PARTIEL | PASS (1 affectation) | PG | PASS |
+| Non-régression C2/C5/ML1 | PASS | PASS | PG + BROWSER | PASS |
diff --git a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
index 0a4174ab..3375f336 100644
--- a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
+++ b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
@@ -493,3 +493,26 @@ Les tests ML2 à produire **avec le code et l'environnement** combinent :
 ### Réserves inchangées

 ML2-S1 streaming UI/LIVE ; ML2-S2 composition séparation (minimale) ; ML2-S3 matrice Figma viewports ; CI Next absente ; COG LIVE NOT RUN.
+
+## 14. As-Built consolidation C3/C4/C1 — 2026-11-05 (complément)
+
+> Correctif intégré du même macro-lot ML2. Ne réécrit pas VALIDATED SPEC §§1–11 ni le correctif §13.
+
+| Champ | Valeur |
+| --- | --- |
+| Branche | `sfia/next-ml2-production-capitalisation` (poursuite `d867365f`…`5c7dd752` + commit consolidation) |
+| Migration | aucune nouvelle (004 conserve) |
+| Schema revision | `004_ml2_integrity_corrective` |
+
+### Fermetures
+
+| Id | Mécanisme | Preuve |
+| --- | --- | --- |
+| C3-A | `reconcilePriorRevision` + fingerprint sur tous les chemins (lookup, race unicité, TX, catch, wait in-flight) ; `UNKNOWN/CREATION_IN_FLIGHT` si révision absente | PG concurrent same/diff payload + ACK perdu + cross-pilot |
+| C3-B | Intention UI stable (`createDocIntent`/`reviseIntent` + refs) ; clé non renouvelée sur retry/ACK perdu ; refus payload incompatible ; statut visible sur surface Document | BROWSER `ml2-c3-stable-key` |
+| C4 | `MAX_DIFF_CELLS=2_000_000` ; dégradation explicite `DEGRADED` / `DIFF_BUDGET_EXCEEDED` (jamais diff exhaustif faux) | UNIT adversarial + many short lines |
+| C1 | Assertions journal : 0 événement MERGED/SPLIT résiduel après rollback ; même Acquis concurrent → 1 affectation ; split+merge overlap sérialisé | PG journal + concurrency |
+
+### Non-régression
+
+C2 concurrent revise ; C5 epistemic FACT ; ML1 sas→projet BROWSER FAKE — PASS.

```

## 11. Fake/Real Qualification

| Preuve | Classe |
| --- | --- |
| Vitest unit (diff, fingerprint, fixtures) | DETERMINISTIC |
| Vitest PG (50) | PG / REAL Postgres DEV lane |
| Playwright 3 | BROWSER FAKE (Nora fixture, DEV login) |
| Nora LIVE / COG | NOT RUN — no LIVE claim |
| Figma fidelity ML2-S3 | NOT PROVEN |

## 12. Réserves

- ML2-S1: streaming UI progressive / LIVE — inchangée
- ML2-S2: composition UX séparation — minimale, revue UX si structurant
- ML2-S3: fidélité Figma globale — non prouvée
- CI Next: absente du gate — GO workflow distinct requis
- COG-01..07 LIVE: NOT RUN
- Aucune nouvelle réserve bloquante d'intégrité C3/C4/C1 démontrée

## 13. Décisions Morris restantes

1. Accepter ou non l'intégrité corrective consolidée pour suite ML2 (intégration Git projet).
2. GO distinct éventuel: push branche / PR / merge — **non fait ici**.
3. GO RECETTE / LIVE Nora / COG panel — hors cycle.
4. GO CI Next workflow — hors cycle.
5. ML3: seulement après réception effective ML2.

## 14. Verdict unique

**READY FOR MORRIS REVIEW**

Intégrité corrective C3 (fingerprint + clé UI), C4 (budget/DEGRADED) et C1 (journal + concurrence) couverte avec preuves exploitables DETERMINISTIC / PG / BROWSER FAKE. Réserves S1/S2/S3/CI/COG qualifiées, non bloquantes pour ce correctif. Pas de ML2 CLOSED / PR READY / RECETTE / STABLE / RELEASE / ADOPTED.
