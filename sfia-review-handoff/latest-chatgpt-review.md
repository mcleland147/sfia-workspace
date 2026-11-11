# SFIA Studio Next — Review Pack FULL
# ML4C — Régularisation technique S03 + S05 (candidat local)

**Date/heure :** 2026-11-11 19:35 CET (2026-11-11 18:35 UTC)
**Cycle :** 8 — Delivery / implémentation
**Profil :** Critical — garanties d'autorité, vérité des effets, continuité, idempotence
**Typologie :** INC correctif dans le macro-lot ML4C
**Niveau pack :** FULL
**Décision Review Handoff :** required / publish-in-cycle
**Version produit :** NO RELEASE — `package.json` reste `0.0.0-dev`
**Push projet :** AUCUN (branche ML4C non poussée)

---

## 1. Git Truth Check

| Contrôle | Résultat |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` (worktree local) |
| Branche | `build/next-ml4c-functional-convergence` |
| Baseline distante | `main@6d237452680640324eeadbb18f4601fd7de99850` |
| Merge-base | `6d237452680640324eeadbb18f4601fd7de99850` |
| HEAD avant correctif | `cb0738b55ec96a2f85ba1f30fa2f508e816b5266` |
| Tree avant | `f6d7a8223acc9225998f9a9655bc87131fa5d95e` |
| HEAD après correctif | `ba91cf71e8b1ee00e937fba350d8c1aa6c0a2112` |
| Tree après | `9d2770066454289d7797c6e28c24d244d40c396b` |
| Commits ML4C locaux | `cbfadadc` (S01–S05) → `cb0738b5` (S02/S05 follow-up) → `ba91cf71` (S03/S05 corrective) |
| Handoff distant précédent | `sfia/review-handoff@fbc83e84` blob `0e8ee695` |
| Status au départ | propre sauf `.tmp-sfia-review/chatgpt-review.md` réinitialisé |
| Reset destructif / force push / push projet | AUCUN |

**Verdict Git Truth :** PASS — HEAD attendu non dérivé ; travaux concurrents absents hors pack temporaire.

---

## 2. Références consultées (non recopié intégralement)

- Processus externe SFIA v2.6 : cycle routing, operating model, rules, execution template (§4.3.0b, §2.0.H, §3, §5, §6.16, §7, §7.10, §9.1)
- Gouvernance Next : SEF, roadmap, environnements-recette-et-promotions (`14b61f0d…`), product-versioning (`8bc93e0f…`)
- Branche documentaire CP2 `docs/next-r5-ml4c-cp2-preparation-20261111@ab0c2ba3` : décisions ML4B Gate B + trajectoire UX ; contrat / design-correctif / qualification CP2 (AVAILABLE|FAILED|CONFLICT|UNKNOWN|NOT_EXECUTED)
- Conception R2 + architecture R4 + doctrine v3 framing 30/33/34/35/36 + CKI 08 + CKC map
- Dernier handoff FULL @ `fbc83e84` (Git Truth, diff, S01–S07, Fake/Real, réserves) — constats S03 collapse UNKNOWN→FAILED et S05 `applyClearFromResponse` après dialogue indépendant

---

## 3. Analyse causale

### S03 — vérité des effets
**Cause :** dans `continueAfterProjectCreated`, le `documentEffect` était construit avec
`status: documentSave?.status === "CONFLICT" ? "CONFLICT" : "FAILED"` dès que non-AVAILABLE.
Un D4 `UNKNOWN` (ex. `CREATION_IN_FLIGHT`) était donc narré comme échec confirmé.

**Correction :** `mapOwnerDocumentStatusToEffect` + `documentSaveToEffectSummary` dans `document-act.ts` ;
`continueAfterProjectCreated` compose via ce helper. `UNKNOWN`/`NOT_EXECUTED` → mission `RESTITUTION_PENDING` / step `WAITING` ; FAILED/CONFLICT restent PARTIAL_FAILED_STEP. ACK path (`appendDocumentEffectAck` / `hasCompetingTransactionalClaim`) préservé. Aucun second moteur.

### S05 — pending préservé
**Cause :** Decision 1 permettait une question indépendante sans `rememberPending` du tour B, mais
`applyClearFromResponse()` sur COMPLETE sans effet métier appelait encore `rememberPending(null)`, effaçant le pending A.

**Correction :** `shouldClearThreadPending({ preserveUnresolvedMetierPending })` ; `page.tsx` capture `pendingBefore`, pose `preserveMetierPending = independent && Boolean(pendingBefore)`, et ne nettoie que la clé de tour B. Classifier resserré (autre projet / autoriser) — aide UX seulement.

---

## 4. Code effectivement modifié (HEAD `ba91cf71`)

Fichiers :
1. `projects/sfia-studio-next/web/src/domains/conversation/document-act.ts`
2. `projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts`
3. `projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts`
4. `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`
5. `projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts`
6. `projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts`
7. `projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts`
8. `projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts` (**créé**)
9. `projects/sfia-studio-next/construction/delivery-history.md`

### 4.1 Diffs utiles complets — production

```diff
commit ba91cf71e8b1ee00e937fba350d8c1aa6c0a2112
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 11 19:34:27 2026 +0100

    fix(next): ML4C S03 faithful D4 statuses and S05 pending preserve
    
    Stop collapsing UNKNOWN document effects to FAILED on continuation, and keep
    unresolved métier pending intact when an independent dialogue completes.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index fb123992..599d1b9a 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -302,18 +302,26 @@ export default function ProjectPage() {
   function applyClearFromResponse(
     noraStatus: string | undefined,
     effect: PilotageEffectView | undefined,
+    opts?: { preserveUnresolvedMetierPending?: boolean },
   ) {
     if (
       shouldClearThreadPending({
         noraStatus,
         effectAttempted: effect?.attempted,
         effectStatus: effect?.status,
+        preserveUnresolvedMetierPending: opts?.preserveUnresolvedMetierPending,
       })
     ) {
       rememberPending(null);
       messageTurnKeyRef.current = null;
       return true;
     }
+    // Independent cognitive COMPLETE over pending A: drop only this turn key,
+    // never the unresolved métier pending.
+    if (opts?.preserveUnresolvedMetierPending) {
+      messageTurnKeyRef.current = null;
+      return true;
+    }
     return false;
   }
 
@@ -672,9 +680,10 @@ export default function ProjectPage() {
     const text = draft.trim();
     // CR-02 — exclusive unresolved pending: never overwrite a distinct act silently.
     // ML4C S05 Decision 1 — independent cognitive Q may proceed without replacing pending.
+    const pendingBefore = unresolvedPending ?? readPending();
     const independent = looksLikeIndependentDialogue(text);
     const gate = mayStartNewThreadAct({
-      unresolved: unresolvedPending ?? readPending(),
+      unresolved: pendingBefore,
       nextContent: text,
       nextIsIndependentDialogue: independent,
     });
@@ -703,6 +712,7 @@ export default function ProjectPage() {
     if (!independent) {
       rememberPending({ content: text, clientTurnKey, clientCommandKey });
     }
+    const preserveMetierPending = independent && Boolean(pendingBefore);
     try {
       const res = await fetch(`/api/preparations/${preparationId}/messages`, {
         method: "POST",
@@ -720,7 +730,11 @@ export default function ProjectPage() {
         setStatus(`Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}`);
         const effect = j.pilotageEffect as PilotageEffectView | undefined;
         setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
-        if (applyClearFromResponse(String(j.status ?? ""), effect)) {
+        if (
+          applyClearFromResponse(String(j.status ?? ""), effect, {
+            preserveUnresolvedMetierPending: preserveMetierPending,
+          })
+        ) {
           setDraft("");
         } else if (j.status === "UNKNOWN" || j.status === "FAILED") {
           setNoraActivity("error");
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index 2e67f20d..d8927a88 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -1081,6 +1081,68 @@ export type DocumentEffectSummary = {
   idempotentReplay?: boolean;
 };
 
+/** CP2 S03 — owner D4 statuses that may appear on DocumentEffectSummary. */
+export const DOCUMENT_EFFECT_OWNER_STATUSES = [
+  "AVAILABLE",
+  "FAILED",
+  "CONFLICT",
+  "UNKNOWN",
+  "NOT_EXECUTED",
+] as const;
+
+export type DocumentEffectOwnerStatus =
+  (typeof DOCUMENT_EFFECT_OWNER_STATUSES)[number];
+
+/**
+ * Map an owner D4 / DocumentSave status onto DocumentEffectSummary.status.
+ * Absent or ambiguous values become UNKNOWN — never invent FAILED without proof.
+ */
+export function mapOwnerDocumentStatusToEffect(
+  status: string | null | undefined,
+): DocumentEffectOwnerStatus {
+  const s = (status ?? "").trim().toUpperCase();
+  if (s === "AVAILABLE") return "AVAILABLE";
+  if (s === "FAILED") return "FAILED";
+  if (s === "CONFLICT") return "CONFLICT";
+  if (s === "UNKNOWN") return "UNKNOWN";
+  if (s === "NOT_EXECUTED") return "NOT_EXECUTED";
+  return "UNKNOWN";
+}
+
+/**
+ * Build the post-D4 DocumentEffectSummary used by continuation restitution.
+ * Preserves owner status, ids, and reason without collapsing UNKNOWN→FAILED.
+ */
+export function documentSaveToEffectSummary(input: {
+  act?: "CREATE" | "REVISE";
+  status?: string | null;
+  documentId?: string;
+  revisionId?: string;
+  revisionNumber?: number;
+  reason?: string;
+  /** When no save object exists at all (no D4 attempt in this branch). */
+  absentMeans?: "NOT_EXECUTED" | "UNKNOWN";
+}): DocumentEffectSummary {
+  if (input.status == null && !input.documentId && !input.reason) {
+    return {
+      act: input.act ?? "CREATE",
+      status: input.absentMeans ?? "NOT_EXECUTED",
+      reason: "NO_DOCUMENT_SAVE",
+    };
+  }
+  const status = mapOwnerDocumentStatusToEffect(input.status);
+  return {
+    act: input.act ?? "CREATE",
+    status,
+    documentId: input.documentId,
+    revisionId: input.revisionId,
+    revisionNumber: input.revisionNumber,
+    reason:
+      input.reason ??
+      (status === "AVAILABLE" ? undefined : input.status ?? status),
+  };
+}
+
 /** Sentences/paragraphs that assert a D4 write outcome (must not compete with applicative truth). */
 const TRANSACTIONAL_CLAIM_RE =
   /\b(?:non\s+enregistré|pas\s+enregistré|n['’]a\s+pas\s+été\s+(?:enregistré|sauvegardé)|aucun\s+outil\s+(?:d['’]écriture|disponible)|les\s+outils\s+disponibles\s+(?:sont\s+en\s+lecture\s+seule|ne\s+permettent\s+pas)|outils?\s+(?:en\s+)?lecture\s+seule|je\s+ne\s+(?:peux|puis)\s+(?:donc\s+)?pas\s+(?:exécuter\s+l['’]enregistrement|appliquer|enregistrer|créer|réviser|confirmer(?:\s+(?:la\s+)?(?:sauvegarde|l['’]enregistrement|que(?:\s+la)?\s*sauvegarde)?|garantir(?:\s+(?:la\s+)?sauvegarde)?))|(?:impossible|incapable)\s+de\s+confirmer(?:\s+(?:la\s+)?(?:sauvegarde|l['’]enregistrement))?|ne\s+(?:peux|puis)\s+pas\s+confirmer(?:\s+(?:la\s+)?sauvegarde)?|aucune\s+révision\s+(?:créée|enregistrée)|nouvelle\s+révision\s*:\s*aucune|la\s+version\s+1\s+reste\s+inchangée|sauvegarde\s+d4\s+uniquement\s+après|rédaction\s+seule\s+[—-]\s+sauvegarde|document\s+(?:créé|enregistré|sauvegardé)\s+avec\s+succès|j['’]ai\s+(?:enregistré|sauvegardé|créé)\s+le\s+document|écriture\s+d4\s+confirmée)\b/i;
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
index 82ca0f6c..98cb2dbe 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
@@ -20,6 +20,7 @@ import { newId } from "@/lib/ids";
 import { emitObs } from "@/lib/observability";
 import {
   appendDocumentEffectAck,
+  documentSaveToEffectSummary,
   extractContractualDocumentProposal,
   hasCompetingTransactionalClaim,
   qualifyDocumentAct,
@@ -1108,7 +1109,21 @@ export async function continueAfterProjectCreated(input: {
       documentSave = { status: "FAILED", reason: "CONTINUE_GENERATION_FAILED", act: "CREATE" };
     }
 
-    if (documentSave.status === "AVAILABLE" && documentSave.documentId) {
+    // Assigned on every branch above; local const keeps callbacks type-narrowed.
+    const d4Save = documentSave!;
+
+    // S03: preserve owner D4 status on restitution (AVAILABLE|FAILED|CONFLICT|UNKNOWN|NOT_EXECUTED).
+    // Never collapse UNKNOWN / absent → FAILED by default.
+    const documentEffect: DocumentEffectSummary = documentSaveToEffectSummary({
+      act: "CREATE",
+      status: d4Save.status,
+      documentId: d4Save.documentId,
+      revisionId: d4Save.revisionId,
+      revisionNumber: d4Save.revisionNumber,
+      reason: d4Save.reason,
+    });
+
+    if (d4Save.status === "AVAILABLE" && d4Save.documentId) {
       mission = {
         ...mission,
         steps: mission.steps.map((s) =>
@@ -1116,8 +1131,8 @@ export async function continueAfterProjectCreated(input: {
             ? {
                 ...s,
                 status: "DONE" as const,
-                documentId: documentSave!.documentId,
-                revisionId: documentSave!.revisionId,
+                documentId: d4Save.documentId,
+                revisionId: d4Save.revisionId,
                 reason: undefined,
               }
             : s,
@@ -1125,6 +1140,24 @@ export async function continueAfterProjectCreated(input: {
         status: "COMPLETED",
         restitution: "DELIVERED",
       };
+    } else if (
+      documentEffect.status === "UNKNOWN" ||
+      documentEffect.status === "NOT_EXECUTED"
+    ) {
+      mission = {
+        ...mission,
+        steps: mission.steps.map((s) =>
+          s.id === "d4_create" || s.capabilityId === "d4.create_document"
+            ? {
+                ...s,
+                status: "WAITING" as const,
+                reason: d4Save.reason ?? documentEffect.status,
+              }
+            : s,
+        ),
+        status: "RESTITUTION_PENDING",
+        restitution: "CANONICAL",
+      };
     } else {
       mission = {
         ...mission,
@@ -1133,7 +1166,7 @@ export async function continueAfterProjectCreated(input: {
             ? {
                 ...s,
                 status: "FAILED" as const,
-                reason: documentSave?.reason ?? documentSave?.status,
+                reason: d4Save.reason ?? d4Save.status,
               }
             : s,
         ),
@@ -1141,23 +1174,6 @@ export async function continueAfterProjectCreated(input: {
         restitution: "CANONICAL",
       };
     }
-
-    // S03: same document-effect composition as the main chat path — never leave
-    // Nora prose as the sole post-D4 message (AVAILABLE + « non enregistré » contradiction).
-    const documentEffect: DocumentEffectSummary =
-      documentSave?.status === "AVAILABLE"
-        ? {
-            act: "CREATE",
-            status: "AVAILABLE",
-            documentId: documentSave.documentId,
-            revisionId: documentSave.revisionId,
-            revisionNumber: documentSave.revisionNumber,
-          }
-        : {
-            act: "CREATE",
-            status: documentSave?.status === "CONFLICT" ? "CONFLICT" : "FAILED",
-            reason: documentSave?.reason ?? documentSave?.status,
-          };
     const canonical = composeCanonicalMissionRestitution({
       documentEffect,
       restitutionNote: `Reprise automatique après création projet ${input.projectId} — même intention (${mission.clientIntentKey}).`,
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts b/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
index c7eec125..1e2132c2 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
@@ -11,16 +11,18 @@ export type ThreadPendingTurn = {
   clientCommandKey: string;
 };
 
-const PROJECT_CREATE_RE = /\b(?:crée|créer|créez)\s+(?:un\s+)?projet\b/i;
+const PROJECT_CREATE_RE =
+  /\b(?:crée|créer|créez|creez)\s+(?:(?:un|une|le|la|ce|cet)\s+)?(?:autre\s+)?projet\b/i;
 /** Effectual publish/merge intent — not explanatory mentions of « commit » / Git vocabulary. */
 const PUBLISH_RE =
   /\b(?:publie|publier|publication\s+(?:le|la|ce|sur)|(?:crée|créer)\s+(?:un\s+)?(?:commit|pr|pull\s*request)|(?:ouvre|ouvrir)\s+(?:une\s+)?(?:pr|pull\s*request)|merge\s+(?:la\s+|le\s+)?(?:pr|branche|request))\b/i;
 const PILOTAGE_SIGNAL_RE =
-  /\b(?:je\s+décide|j['']autorise|ouvre\s+(?:un\s+)?cycle|enregistre\s+(?:cette\s+)?décision)\b/i;
+  /\b(?:je\s+décide|j['']autorise|autorise(?:r|z)?|accorde(?:r|z)?|ouvre\s+(?:un\s+)?cycle|enregistre\s+(?:cette\s+)?décision)\b/i;
 
 /**
  * ML4C S05 / Decision 1 — independent cognitive turn (no D2/D4/D6/D9 effect intent).
- * Does not authorize or replace an unresolved métier pending.
+ * Client UX aid only — never an execution authority.
+ * Interrogative phrasing that still requests an effect stays non-independent.
  */
 export function looksLikeIndependentDialogue(text: string): boolean {
   const t = text.trim();
@@ -45,12 +47,16 @@ export function pendingStorageKey(projectId: string): string {
  * Clear pending only when the business effect is terminal, or when no
  * business attempt occurred and Nora reached a conversational terminal.
  * Nora COMPLETE must NOT close an UNKNOWN / unresolved métier effect.
+ * Independent dialogue COMPLETE must NOT clear a distinct unresolved métier pending.
  */
 export function shouldClearThreadPending(input: {
   noraStatus?: string | null;
   effectAttempted?: boolean | null;
   effectStatus?: string | null;
+  /** True when this COMPLETE belongs to an independent turn over pending A. */
+  preserveUnresolvedMetierPending?: boolean;
 }): boolean {
+  if (input.preserveUnresolvedMetierPending) return false;
   const biz = (input.effectStatus ?? "").trim().toUpperCase();
   if (input.effectAttempted === true) {
     if (!biz || biz === "UNKNOWN" || biz.startsWith("UNKNOWN")) return false;

```

### 4.2 Diffs tests + delivery-history

```diff
commit ba91cf71e8b1ee00e937fba350d8c1aa6c0a2112
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 11 19:34:27 2026 +0100

    fix(next): ML4C S03 faithful D4 statuses and S05 pending preserve
    
    Stop collapsing UNKNOWN document effects to FAILED on continuation, and keep
    unresolved métier pending intact when an independent dialogue completes.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 02d5e2e8..1fd64284 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,20 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
 
+## delivery_id: DELIV-2026-11-11-ML4C-S03-S05-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-11 (Europe/Paris) |
+| Macro-lot | ML4C — INC correctif S03/S05 (même candidat) |
+| Type | INC — vérité des effets + pending préservé (NO RELEASE) |
+| Branch | `build/next-ml4c-functional-convergence` (local — no project push) |
+| Parent tip | `cb0738b5` (S02 taxonomy + S05 dialogue) |
+| Lane | DEV :5433; mutative tests → `sfia_next_e2e`; RECETTE/STABLE untouched |
+| Changes | S03 `documentSaveToEffectSummary` / no UNKNOWN→FAILED collapse in `continueAfterProjectCreated`; S05 `preserveUnresolvedMetierPending` on independent COMPLETE; classifier tightens interrogative effect requests |
+| Schema | unchanged |
+| Status | LOCAL CORRECTIVE — ChatGPT technical review — LIVE/REAL gates carried |
+
 ## delivery_id: DELIV-2026-11-11-ML4C-FUNCTIONAL-CONVERGENCE
 
 | Field | Value |
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts
new file mode 100644
index 00000000..a611f0e8
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts
@@ -0,0 +1,102 @@
+import { test, expect } from "@playwright/test";
+
+/**
+ * ML4C S05 — independent cognitive COMPLETE must not clear unresolved métier pending A.
+ * Browser FAKE / E2E lane — not Nora LIVE.
+ */
+
+async function openProjectFromNewPrep(page: import("@playwright/test").Page): Promise<string> {
+  await page.getByTestId("portfolio-new-prep").click();
+  await page.waitForURL(/\/preparations\//, { timeout: 30000 });
+  await page.getByTestId("prep-draft").fill("Intention E2E S05 pending preserve (fixture FAKE Nora)");
+  await page.getByTestId("prep-send").click();
+  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
+    timeout: 30000,
+  });
+  await page.getByTestId("prep-constitute").click();
+  await page.getByTestId("prep-adopt-nora").click();
+  await page.getByTestId("prep-proposal-name").fill("ML4C S05 Pending A");
+  await page.getByTestId("prep-proposal-save").click();
+  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 15000 });
+  const createBtn = page.getByTestId("prep-create-project");
+  await expect(createBtn).toBeEnabled({ timeout: 20000 });
+  await createBtn.click();
+  await page.waitForURL(/\/projects\//, { timeout: 30000 });
+  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
+  if (!projectId) throw new Error("projectId missing");
+  return projectId;
+}
+
+test("S05: independent COMPLETE leaves pending A identity intact", async ({ page }) => {
+  test.setTimeout(120_000);
+  await page.goto("/login");
+  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+  await page.waitForURL("**/portfolio");
+  const projectId = await openProjectFromNewPrep(page);
+
+  const pendingA = {
+    content: "Publie le document sur la branche feature/s05-a",
+    clientTurnKey: "ctk_pending_a_s05",
+    clientCommandKey: "conv-auth:ctk_pending_a_s05",
+  };
+  await page.evaluate(
+    ({ projectId: id, pending }) => {
+      sessionStorage.setItem(`sfia.thread.pending:${id}`, JSON.stringify(pending));
+    },
+    { projectId, pending: pendingA },
+  );
+  await page.reload();
+  await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
+
+  await page.route("**/api/preparations/*/messages", async (route) => {
+    if (route.request().method() !== "POST") {
+      await route.continue();
+      return;
+    }
+    await route.fulfill({
+      status: 200,
+      contentType: "application/json",
+      body: JSON.stringify({
+        status: "COMPLETE",
+        noraMode: "deterministic-fixture",
+        messages: [
+          { id: "m1", role: "user", content: "Quelle est la différence entre blob et commit ?" },
+          {
+            id: "m2",
+            role: "assistant",
+            content: "Un blob est un contenu ; un commit pointe une arborescence.",
+          },
+        ],
+        pilotageEffect: { attempted: false, status: null },
+        humanDecisionCreated: false,
+      }),
+    });
+  });
+
+  await page.getByLabel("Message à Nora").fill("Quelle est la différence entre blob et commit ?");
+  await page.getByTestId("thread-send").click();
+  await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE/i, {
+    timeout: 20000,
+  });
+  await expect(page.getByTestId("thread-pending-banner")).toBeVisible();
+
+  const stored = await page.evaluate((id) => {
+    const raw = sessionStorage.getItem(`sfia.thread.pending:${id}`);
+    return raw ? (JSON.parse(raw) as typeof pendingA) : null;
+  }, projectId);
+  expect(stored).toEqual(pendingA);
+
+  // Incompatible métier mutation still blocked with same pending key.
+  await page.getByLabel("Message à Nora").fill("Crée un projet nommé Concurrent Bypass");
+  await page.getByTestId("thread-send").click();
+  await expect(page.getByTestId("thread-nora-status")).toContainText(/non résolue|réconcilier/i, {
+    timeout: 10000,
+  });
+  await expect(page.getByTestId("thread-pending-banner")).toBeVisible();
+  const still = await page.evaluate((id) => {
+    const raw = sessionStorage.getItem(`sfia.thread.pending:${id}`);
+    return raw ? (JSON.parse(raw) as typeof pendingA) : null;
+  }, projectId);
+  expect(still?.clientTurnKey).toBe(pendingA.clientTurnKey);
+  expect(still?.clientCommandKey).toBe(pendingA.clientCommandKey);
+});
diff --git a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
index d34f1f3e..33fdea83 100644
--- a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
@@ -2,7 +2,7 @@
  * Global intent continuity — multi-domain scenarios (not Git-only).
  * DEV PG + fixture Nora + SCRIPTED Git when needed.
  */
-import { beforeAll, describe, expect, it } from "vitest";
+import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
 import { config } from "dotenv";
 config({ path: ".env.local" });
 
@@ -33,6 +33,7 @@ import {
   preparePublication,
 } from "@/domains/execution/effect-service";
 import { listMessages, postUserMessageAndNora } from "@/domains/conversation/service";
+import * as documentService from "@/domains/document/service";
 import { listDocuments, savePreparationDocument } from "@/domains/document/service";
 import {
   hasCompetingTransactionalClaim,
@@ -231,6 +232,62 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     ).toBe(false);
   });
 
+  afterEach(() => {
+    vi.restoreAllMocks();
+    delete continuationRaceHooks.afterReserveBeforeWork;
+    delete continuationRaceHooks.afterNoraBeforeD4;
+    delete continuationRaceHooks.afterD4BeforeCommit;
+  });
+
+  it("S03: D4 UNKNOWN is restituted as UNKNOWN (not collapsed to FAILED)", async () => {
+    const { pilotId, preparationId } = await seedPrepOnly("scen-s03-unknown");
+    const clientTurnKey = newId("ctk");
+    const first = await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Crée un projet nommé Unknown Atlas puis prépare un document de cadrage Unknown.",
+      { clientTurnKey },
+    );
+    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
+    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
+    const created = await createProjectCommand({
+      pilotId,
+      preparationId,
+      expectedCreationRevision: prep.creationRevision,
+      projectName: "Unknown Atlas",
+      previewSummary: "s",
+      idempotencyKey: d2MissionIdempotencyKey(clientTurnKey),
+    });
+    expect(created.status).toBe("CREATED");
+    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");
+
+    vi.spyOn(documentService, "savePreparationDocument").mockResolvedValue({
+      status: "UNKNOWN",
+      reason: "CREATION_IN_FLIGHT",
+      documentId: "doc_unknown_s03",
+    });
+
+    const cont = await continueAfterProjectCreated({
+      pilotId,
+      preparationId,
+      projectId: created.projectId,
+      projectName: "Unknown Atlas",
+      clientIntentKey: clientTurnKey,
+    });
+    expect(cont.continued).toBe(true);
+    expect(cont.documentSave?.status).toBe("UNKNOWN");
+    expect(cont.missionProjection?.status).toBe("RESTITUTION_PENDING");
+    expect(cont.missionProjection?.steps.find((s) => s.capabilityId === "d4.create_document")?.status).toBe(
+      "WAITING",
+    );
+
+    const msgs = await listMessages(pilotId, preparationId);
+    const assistant = [...msgs].reverse().find((m) => m.role === "assistant");
+    expect(assistant?.content).toMatch(/Résultat applicatif D4/i);
+    expect(assistant?.content).toMatch(/\bUNKNOWN\b/);
+    expect(assistant?.content).not.toMatch(/Statut observé:\s*FAILED/i);
+  });
+
   it("S05: independent question while AWAITING_PILOT_ACT keeps mission and creates no project", async () => {
     const { pilotId, preparationId } = await seedPrepOnly("scen-s05-independent");
     const clientTurnKey = newId("ctk");
diff --git a/projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts b/projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts
index ff7ef9ff..1ee7a7cf 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts
@@ -328,6 +328,17 @@ describe("CR-02 thread pending lifecycle", () => {
     ).toBe(true);
   });
 
+  it("does not clear pending A when independent COMPLETE has preserveUnresolvedMetierPending", () => {
+    expect(
+      shouldClearThreadPending({
+        noraStatus: "COMPLETE",
+        effectAttempted: false,
+        effectStatus: null,
+        preserveUnresolvedMetierPending: true,
+      }),
+    ).toBe(false);
+  });
+
   it("exclusive guard blocks a distinct new act over unresolved pending", () => {
     const pending = {
       content: "Ouvre le cycle cadrage.",
diff --git a/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts b/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
index 95842425..959472df 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
@@ -3,13 +3,16 @@ import { join } from "node:path";
 import { describe, expect, it } from "vitest";
 import {
   appendDocumentEffectAck,
+  documentSaveToEffectSummary,
   hasCompetingTransactionalClaim,
+  mapOwnerDocumentStatusToEffect,
 } from "@/domains/conversation/document-act";
 import { emptyMission } from "@/domains/conversation/intent-conduction";
 import { appendMissionAck } from "@/domains/conversation/mission-continuity";
 import {
   looksLikeIndependentDialogue,
   mayStartNewThreadAct,
+  shouldClearThreadPending,
 } from "@/domains/pilotage/thread-recovery";
 
 describe("ML4C S01 portfolio — no index-derived status", () => {
@@ -57,6 +60,36 @@ describe("ML4C S03 continueAfter composition — document ACK", () => {
     expect(composed).toMatch(/AVAILABLE/);
     expect(hasCompetingTransactionalClaim(composed, effect)).toBe(false);
   });
+
+  it("maps owner D4 statuses faithfully — never collapses UNKNOWN to FAILED", () => {
+    expect(mapOwnerDocumentStatusToEffect("AVAILABLE")).toBe("AVAILABLE");
+    expect(mapOwnerDocumentStatusToEffect("FAILED")).toBe("FAILED");
+    expect(mapOwnerDocumentStatusToEffect("CONFLICT")).toBe("CONFLICT");
+    expect(mapOwnerDocumentStatusToEffect("UNKNOWN")).toBe("UNKNOWN");
+    expect(mapOwnerDocumentStatusToEffect("NOT_EXECUTED")).toBe("NOT_EXECUTED");
+    expect(mapOwnerDocumentStatusToEffect(undefined)).toBe("UNKNOWN");
+    expect(mapOwnerDocumentStatusToEffect("")).toBe("UNKNOWN");
+    expect(mapOwnerDocumentStatusToEffect("weird")).toBe("UNKNOWN");
+
+    expect(documentSaveToEffectSummary({ status: "UNKNOWN", reason: "CREATION_IN_FLIGHT" }).status).toBe(
+      "UNKNOWN",
+    );
+    expect(documentSaveToEffectSummary({ status: "CONFLICT", reason: "REV_CONFLICT" }).status).toBe(
+      "CONFLICT",
+    );
+    expect(documentSaveToEffectSummary({}).status).toBe("NOT_EXECUTED");
+  });
+
+  it("continueAfterProjectCreated uses documentSaveToEffectSummary (no CONFLICT→FAILED collapse)", () => {
+    const src = readFileSync(
+      join(__dirname, "../../src/domains/conversation/intent-conduction.ts"),
+      "utf8",
+    );
+    expect(src).toMatch(/documentSaveToEffectSummary\(/);
+    expect(src).not.toMatch(
+      /status:\s*documentSave\?\.status\s*===\s*"CONFLICT"\s*\?\s*"CONFLICT"\s*:\s*"FAILED"/,
+    );
+  });
 });
 
 describe("ML4C S05 Decision 1 — independent dialogue vs pending métier", () => {
@@ -87,4 +120,39 @@ describe("ML4C S05 Decision 1 — independent dialogue vs pending métier", () =
     });
     expect(gate.ok).toBe(false);
   });
+
+  it("interrogative effect requests are not independent (no client bypass)", () => {
+    expect(looksLikeIndependentDialogue("Tu peux publier ce document ?")).toBe(false);
+    expect(looksLikeIndependentDialogue("Peux-tu créer un autre projet ?")).toBe(false);
+    expect(looksLikeIndependentDialogue("Est-ce qu'on peut autoriser cette action ?")).toBe(false);
+  });
+
+  it("COMPLETE on independent turn must not clear unresolved métier pending", () => {
+    expect(
+      shouldClearThreadPending({
+        noraStatus: "COMPLETE",
+        effectAttempted: false,
+        effectStatus: null,
+        preserveUnresolvedMetierPending: true,
+      }),
+    ).toBe(false);
+    expect(
+      shouldClearThreadPending({
+        noraStatus: "COMPLETE",
+        effectAttempted: false,
+        effectStatus: null,
+        preserveUnresolvedMetierPending: false,
+      }),
+    ).toBe(true);
+  });
+
+  it("project page preserves métier pending across independent COMPLETE", () => {
+    const src = readFileSync(
+      join(__dirname, "../../src/app/projects/[projectId]/page.tsx"),
+      "utf8",
+    );
+    expect(src).toMatch(/preserveUnresolvedMetierPending/);
+    expect(src).toMatch(/preserveMetierPending/);
+    expect(src).toMatch(/pendingBefore/);
+  });
 });

```

### 4.3 Fichier créé — contenu complet

`projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts` :

```typescript
import { test, expect } from "@playwright/test";

/**
 * ML4C S05 — independent cognitive COMPLETE must not clear unresolved métier pending A.
 * Browser FAKE / E2E lane — not Nora LIVE.
 */

async function openProjectFromNewPrep(page: import("@playwright/test").Page): Promise<string> {
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL(/\/preparations\//, { timeout: 30000 });
  await page.getByTestId("prep-draft").fill("Intention E2E S05 pending preserve (fixture FAKE Nora)");
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await page.getByTestId("prep-constitute").click();
  await page.getByTestId("prep-adopt-nora").click();
  await page.getByTestId("prep-proposal-name").fill("ML4C S05 Pending A");
  await page.getByTestId("prep-proposal-save").click();
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 15000 });
  const createBtn = page.getByTestId("prep-create-project");
  await expect(createBtn).toBeEnabled({ timeout: 20000 });
  await createBtn.click();
  await page.waitForURL(/\/projects\//, { timeout: 30000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  if (!projectId) throw new Error("projectId missing");
  return projectId;
}

test("S05: independent COMPLETE leaves pending A identity intact", async ({ page }) => {
  test.setTimeout(120_000);
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  const projectId = await openProjectFromNewPrep(page);

  const pendingA = {
    content: "Publie le document sur la branche feature/s05-a",
    clientTurnKey: "ctk_pending_a_s05",
    clientCommandKey: "conv-auth:ctk_pending_a_s05",
  };
  await page.evaluate(
    ({ projectId: id, pending }) => {
      sessionStorage.setItem(`sfia.thread.pending:${id}`, JSON.stringify(pending));
    },
    { projectId, pending: pendingA },
  );
  await page.reload();
  await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });

  await page.route("**/api/preparations/*/messages", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        status: "COMPLETE",
        noraMode: "deterministic-fixture",
        messages: [
          { id: "m1", role: "user", content: "Quelle est la différence entre blob et commit ?" },
          {
            id: "m2",
            role: "assistant",
            content: "Un blob est un contenu ; un commit pointe une arborescence.",
          },
        ],
        pilotageEffect: { attempted: false, status: null },
        humanDecisionCreated: false,
      }),
    });
  });

  await page.getByLabel("Message à Nora").fill("Quelle est la différence entre blob et commit ?");
  await page.getByTestId("thread-send").click();
  await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE/i, {
    timeout: 20000,
  });
  await expect(page.getByTestId("thread-pending-banner")).toBeVisible();

  const stored = await page.evaluate((id) => {
    const raw = sessionStorage.getItem(`sfia.thread.pending:${id}`);
    return raw ? (JSON.parse(raw) as typeof pendingA) : null;
  }, projectId);
  expect(stored).toEqual(pendingA);

  // Incompatible métier mutation still blocked with same pending key.
  await page.getByLabel("Message à Nora").fill("Crée un projet nommé Concurrent Bypass");
  await page.getByTestId("thread-send").click();
  await expect(page.getByTestId("thread-nora-status")).toContainText(/non résolue|réconcilier/i, {
    timeout: 10000,
  });
  await expect(page.getByTestId("thread-pending-banner")).toBeVisible();
  const still = await page.evaluate((id) => {
    const raw = sessionStorage.getItem(`sfia.thread.pending:${id}`);
    return raw ? (JSON.parse(raw) as typeof pendingA) : null;
  }, projectId);
  expect(still?.clientTurnKey).toBe(pendingA.clientTurnKey);
  expect(still?.clientCommandKey).toBe(pendingA.clientCommandKey);
});

```

---

## 5. Scénarios et cas négatifs

### S03
| Cas | Attendu | Preuve |
| --- | --- | --- |
| D4 AVAILABLE | restitution AVAILABLE + ACK | PG Atlas continueAfter (existant) PASS |
| D4 UNKNOWN | restitution UNKNOWN, pas FAILED | PG `S03: D4 UNKNOWN…` PASS (spy save → UNKNOWN) |
| Absent / ambigu | map → UNKNOWN ; absentMeans NOT_EXECUTED | unit mapper PASS |
| CONFLICT / FAILED | préservés | unit mapper PASS |
| Nora « non enregistré » + AVAILABLE | contradiction neutralisée | unit ACK path PASS |
| Idempotence continue | un seul document logique | PG G1/S04 + crash recover (existant) PASS |

### S05
| Cas | Attendu | Preuve |
| --- | --- | --- |
| Pending A + Q indépendante B COMPLETE | A intact (même clé) | Playwright S05 PASS |
| Mutation métier incompatible | refus / pending conservé | Playwright S05 PASS |
| Interrogatives à effet | non-indépendantes | unit classifier PASS |
| COMPLETE indépendant | `shouldClear… preserve=true` → false | unit PASS |
| Mission AWAITING + Q cognitive serveur | pas de create projet | PG S05 indépendant PASS |

---

## 6. Tests et sorties exécutées (même HEAD `ba91cf71`)

| Suite | Résultat |
| --- | --- |
| `tsc --noEmit` | PASS |
| `next lint` | PASS (warnings préexistants unused vars) |
| `npm run build` | PASS |
| `vitest` unit (40 files / 342 tests) | PASS |
| `intent-continuity-global.pg.test.ts` (23) | PASS |
| `mission-continuity-accept01.pg.test.ts` (8) | PASS |
| `ml3-pilotage.pg.test.ts` (49) | PASS |
| `create-project.pg.test.ts` (17) | PASS |
| Playwright `d2-ack-loss-reconcile` | PASS |
| Playwright `intent-continuity-atlas` (2) | PASS |
| Playwright `ml4c-s05-independent-pending` | PASS |
| Nora LIVE | NOT RUN |
| Git REAL | NOT RUN |
| Corpus S04 cognitif élargi | NOT RUN — baseline DOCUMENTED / INCOMPLETE conservée |
| Mutations fournisseur S06 | NOT RUN — SCRIPTED only conservé |

Sortie Playwright (extrait) :
```
4 passed (21.2s)
✓ S02 D2_ACK_OBS…
✓ Atlas: one intent → create → D4…
✓ Atlas: forged mission key refused…
✓ S05: independent COMPLETE leaves pending A identity intact
```

---

## 7. Preuve isolation ENV-01

| Item | Valeur |
| --- | --- |
| Host client | `127.0.0.1` |
| Port client | `5433` (container interne 5432) |
| Rôle | `sfia_next_dev` |
| `.env.local` DATABASE_URL | `sfia_next_dev` (opérateur — non modifié pour Vitest) |
| Vitest mutatif | rewrite → `sfia_next_e2e` via `prepareVitestMutativeDatabaseUrl` |
| Playwright | `:3101` + `sfia_next_e2e` (`e2e-preflight OK`) |
| Pilots opérateur avant | **8850** |
| Pilots opérateur après | **8850** (inchangé) |
| Pilots e2e | 187 → 219 (mutations isolées attendues) |
| RECETTE / STABLE / ENV-C | non mutés |
| Secrets scan commit `ba91cf71` | aucun secret introduit |

**Verdict ENV :** PASS — isolation démontrée (pas un chiffre historique seul).

---

## 8. Matrice S01–S07 actualisée

| # | Modification | Test | Preuve | Réalisme | Statut | Réserve | Exit |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S01 | Portefeuille honnête (antérieur) | unit source guard | PASS | FAKE UI | PASS | — | OK |
| S02 | ACK create + taxonomy (antérieur) | D2_ACK_OBS e2e + unit | PASS | BROWSER FAKE | PASS | LIVE N/A | OK |
| S03 | Faithful D4 statuses + ACK | unit mapper + PG UNKNOWN + Atlas AVAILABLE | PASS | PG + FAKE Nora | PASS | LIVE N/A | OK |
| S04 | Baseline cognitive | — | DOCUMENTED | SCRIPTED/FAKE | INCOMPLETE | qualité Nora non validée | carry |
| S05 | Preserve pending on independent COMPLETE | unit + PG + Playwright | PASS | BROWSER FAKE + PG | PASS | LIVE N/A | OK |
| S06 | SCRIPTED Git | suites existantes | PASS (SCRIPTED) | SCRIPTED | PASS | REAL NOT RUN | carry |
| S07 | Intégration commune | unit 342 + PG 31+66 + e2e 4 + tsc/lint/build | PARTIAL→renforcé | FAKE/SCRIPTED | PARTIAL | LIVE/REAL/S04 | carry |

---

## 9. Fake / Real Qualification

| Couche | Statut |
| --- | --- |
| Nora FAKE / fixture | USED |
| Nora LIVE | NOT RUN |
| Git SCRIPTED | USED (régression) |
| Git REAL | NOT RUN |
| Browser FAKE E2E :3101 | USED (S02/S05/Atlas) |
| ENV-B Vitest gate | ACTIVE (main@6d237452) |

---

## 10. Non-régression

- Continuation AVAILABLE + ACK anti-contradiction : conservée
- Decision 1 allow independent Q : conservée ; clear pending corrigé
- D2 ACK reconcile / forged key refuse : e2e PASS
- Pilotage PG 49 + create-project 17 : PASS
- Aucun schéma / migration / workflow / doctrine / SEF modifié

---

## 11. Limites / dette / exit

- S04 qualité Nora : DOCUMENTED / INCOMPLETE
- S06 REAL + Nora LIVE : carried
- S07 global BEHAVIOR PROVEN : non prétendu ; preuves FAKE/SCRIPTED renforcées sur HEAD correctif
- Classifier client : UX aid — ambiguïté effet → non-independent ; autorité reste serveur
- Pending UX sessionStorage : aide locale ; vérité métier durable reste serveur (D5/D6)
- Réception ML4C / ML4D / Gate C : décisions Morris distinctes
- Aucune PR / merge / RECETTE / ADOPTED implicite

---

## 12. État de version

**NO RELEASE** — `sfia-studio-web@0.0.0-dev` inchangé. Aucun tag, promotion, STABLE.

---

## 13. Git Review Index

| Ref | SHA |
| --- | --- |
| main base | `6d237452680640324eeadbb18f4601fd7de99850` |
| ML4C tip (review target) | `ba91cf71e8b1ee00e937fba350d8c1aa6c0a2112` |
| tree | `9d2770066454289d7797c6e28c24d244d40c396b` |
| parent tip | `cb0738b55ec96a2f85ba1f30fa2f508e816b5266` |
| prior handoff | `fbc83e84` / blob `0e8ee695` |
| this handoff | *(rempli après publish)* |

Fichiers touchés (correctif) : 9 (dont 1 créé). Push ML4C : non.

---

## 14. Verdict Cursor

**ML4C LOCAL CORRECTIVE — S03/S05 VERIFIED**
**READY FOR CHATGPT REVIEW**
**WITH LIVE/REAL GATES CARRIED**

---

## 15. Instruction finale à ChatGPT

Relire le dernier handoff Git distant (`sfia/review-handoff`).
Contrôler le diff complet et les preuves S03/S05 sur le même HEAD local `ba91cf71`.
Examiner les régressions S01–S07.
Ne pas proposer une PR sans verdict de readiness.
Aucun merge, RECETTE, LIVE, REAL ou ADOPTED implicite.

---

## 16. Verdict indépendant attendu de ChatGPT

Confirmer ou infirmer :
1. S03 — UNKNOWN/NOT_EXECUTED ne sont plus rabbattus en FAILED dans la continuation.
2. S05 — COMPLETE d'un tour indépendant B n'acquitte pas le pending métier A.
3. Preuves unit + PG + navigateur suffisantes vs exigences CP2.
4. Isolation ENV-01 et absence de push projet.
5. Readiness : corrective locale prête pour revue / ou blockers restants.
