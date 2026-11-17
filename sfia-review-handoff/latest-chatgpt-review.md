# SFIA Review Pack Full — E05 Final Corrective (Draft Reconcile + RECETTE Rollback Prep)

## 1. Date, type et profil

| Champ | Valeur |
|---|---|
| Date | 2026-11-17 |
| Type | Cycle 8 — Delivery / implémentation |
| Profil | **Critical** |
| Typologie | EVOL — correctif final d'un candidat figé |
| Responsable | Cursor |
| GO Morris | Correctif DEV local + vérification non destructive rollback + commit local borné |
| Gate sortie | Revue ChatGPT, puis décision Morris distincte de déploiement RECETTE |
| Verdict | **E05 FINAL CANDIDATE — TECHNICALLY READY FOR MORRIS RECETTE DEPLOYMENT GO** |

Ce cycle n'est ni une nouvelle réalisation E05, ni une mise à disposition RECETTE.

---

## 2. Git Truth Check avant / après

### Avant (références cycle)

| Ref | SHA |
|---|---|
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Feature freeze | `342f0bbb3fea1d52c7a40228347923b30b6db90e` / tree `605a6274b3a41cef41fd0cb271352d03c7f0cdb2` |
| Tip après manifeste freeze | `2b0d7a78a34fb9b8858a8ce81a31bedadcc842b8` / tree `afdb1bbf2c3997eb5c5268a583bf3caf821242e5` |
| Branche | `feat/next-ml4d-project-space-20261116` |
| Worktree dirty attendu | `.tmp-sfia-review/chatgpt-review.md` (+ éventuels PNG evidence non commités) |

### Après

| Ref | SHA |
|---|---|
| Tip local | `cb638613890bff769b3cbbcc99449b430c89faa6` |
| Tree | `3aa6a2d6cc826c4299d9f8c1b19b5e3dd4b3ca20` |
| Parent tip | `4ca69c518d4b91e090120f2a33ef74ec87b652ea` (`4ca69c51` docs tip record) |
| Correctif code | `383efec92a89ae0a1bf1084f98c351654fb86937` / tree `c3c4ef9f237aedda2c0e26f6192e842bf2d2cf00` |
| Parent correctif | `2b0d7a78a34fb9b8858a8ce81a31bedadcc842b8` |
| Push produit | **AUCUN** (pas d'upstream sur la branche produit) |
| Worktree restant | `.tmp-sfia-review/chatgpt-review.md` (ce pack) ; PNG evidence runtime non staged |

`git status --short` post-commit (hors pack) : PNG evidence + review pack temporary.

---

## 3. Sources et SHAs / blobs

### SFIA v2.6 (origin/main `997d4c4e8204993de7107552898c8cc08cd3b0ed`)

| Source | Blob |
|---|---|
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | `3315bbae4757ad42255d16cba47d9e32be2a7842` |
| `prompts/templates/sfia-cycle-execution-template.md` | `f4fdb488fdf81fa9bf874c1c24c1a22d0cb296c1` |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | `675de2df07602d8f88d51ee03ddddd4ca4ebd2ea` |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | `673545f945e0ba1e9e57647c0c316bbc46c1a402` |
| `docs/foundation/sfia-engineering-principles.md` | `396ce129864104bbf2ff986242e2c7135ad18c29` |

### Gouvernance Next

| Source | Blob |
|---|---|
| `environnements-recette-et-promotions.md` (ENV-01) | `14b61f0d1265cf85fcca09b028dd09bd8c71597f` |
| `product-versioning.md` | `8bc93e0fafac0f981c446e978a37f5f93d183875` |

### Handoff précédent

| Ref | SHA |
|---|---|
| `sfia/review-handoff` tip lu | `8072306319bcddf5a061191fef33c12c11d237c1` |
| Blob précédent `latest-chatgpt-review.md` | `04c0e781b2bdb2e6110afe797a80fd33e0a8d13f` (déclaré GO) |

Contrats E05 (D1/D3, M3 validé Morris, conception UX v0.7 / contrat tech v0.2) lus via branche documentaire et code local — M3 `sessionStorage` conservation conservée.

---

## 4. Cause exacte du défaut

Dans `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`, `reconcilePending()` appliquait encore :

```typescript
if (applyClearFromResponse(String(j.status ?? ""), effect)) {
  setDraft("");
}
```

Contrairement à `sendMessage()`, cette branche ne passait pas par `clearDraftAfterAck()` / versionnement du brouillon.

Conséquence : après ACK perdu + refresh + réconciliation d'un **choix Nora**, le brouillon libre non envoyé pouvait être vidé visuellement (et, via chemins associés, diverger de l'intention M3).

Une clé de tour (`clientTurnKey`) identifie une tentative ; elle ne prouve pas quelle version de brouillon a été soumise. Un choix ne soumet aucune version de brouillon libre.

---

## 5. Diff du correctif (synthèse)

1. **`ThreadPendingTurn`** — champs additifs rétrocompatibles : `origin?: "choice"|"composer"`, `sentDraftVersion?: number|null`, `projectId?`, `pilotId?`.
2. **`mayClearComposerDraftOnReconcile()`** — politique unique :
   - `choice` → never clear
   - legacy / origin absent → fail-safe keep
   - `composer` → clear seulement si `sentDraftVersion` connu et `=== currentDraftVersion`
3. **`sendMessage` / `buildPending`** — stocke `origin` + `sentDraftVersion` (null pour choix).
4. **`reconcilePending`** — remplace `setDraft("")` aveugle par décision + `clearDraftAfterAck`.
5. **UNKNOWN** — ne déclenche pas de clear (pendingCleared + status gate ; UNKNOWN laisse frozen).
6. Manifeste RECETTE — gates rollback + artefact passif.
7. Tests unitaires + E2E discriminants.

Aucun nouveau moteur retry/idempotence. Aucune migration. Aucun changement d'autorité D3 / schéma DB.

---

## 6. Fichiers créés (contenu intégral)

### 6.1 Artefact hors Git (runtime RECETTE worktree) — `RESTORE.md`

Chemin : `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3/.sfia-restore-artifacts/3LzvYPTQc-Km7St6nF97r/RESTORE.md`

```markdown
# Restore procedure (NOT executed in pre-RECETTE cycle)

## BUILD CURRENT VERIFIED
- Served from: projects/sfia-studio-next/web/.next
- BUILD_ID: 3LzvYPTQc-Km7St6nF97r
- SOURCE_SHA: 984d77a36695c2f59ebbc18619e54eeeb43ad94e
- Port: 127.0.0.1:3200 · `next start`

## RESTORABLE ARTIFACT VERIFIED
- This directory: `.sfia-restore-artifacts/3LzvYPTQc-Km7St6nF97r/`
- Contains: BUILD_ID, SOURCE_SHA.txt, next-snapshot/, SHA256SUMS.txt, RESTORE.md
- Passive copy only — never replaces the live `.next` until Morris GO.
- Integrity: `cd next-snapshot && shasum -a 256 -c ../SHA256SUMS.txt` → 299 OK (paths relative to next-snapshot; BUILD_ID also mirrored at artifact root).
- Live vs snapshot: `diff -rq` empty (358 files each) at preparation time.

## RESTORE PROCEDURE (future GO only)
1. Stop `next start` on :3200 using the same exploitation path used to start it.
2. Move aside live `.next` (e.g. `.next.failed-<ts>`).
3. From this artifact directory: `rsync -a next-snapshot/ <RECETTE_WT>/projects/sfia-studio-next/web/.next/`
4. Confirm BUILD_ID file equals `3LzvYPTQc-Km7St6nF97r`.
5. Optionally re-verify: `cd <RECETTE_WT>/projects/sfia-studio-next/web/.next && shasum -a 256 -c <ARTIFACT>/SHA256SUMS.txt`
6. Restart `next start -H 127.0.0.1 -p 3200` from the RECETTE web directory.
7. Smoke HTTP :3200.

## RESTORE LIVE TEST NOT EXECUTED
No stop/restart/replace was performed during preparation.

```

Autres fichiers de l'artefact (non Git) : `BUILD_ID`, `SOURCE_SHA.txt`, `SHA256SUMS.txt` (299 entrées), `next-snapshot/` (358 fichiers, 281M). **Non inclus dans le commit produit.**

### 6.2 `mayClearComposerDraftOnReconcile` + type (fichier modifié — section nouvelle)

Le fichier `thread-recovery.ts` n'est pas créé de zéro ; contenu intégral post-correctif ci-dessous §7.

---

## 7. Fichiers modifiés — contenus / diffs exploitables

### 7.1 `thread-recovery.ts` — contenu intégral après correctif (`383efec92a89ae0a1bf1084f98c351654fb86937`)

```typescript
/**
 * CR-02 — client-side recovery helpers (no DB, no secrets).
 * sessionStorage pending is a local aid; durable truth stays in D5/D6.
 *
 * SEM-02 / ML4C: client no longer runs lexical métier routers
 * (qualifyPilotageIntent / qualifyDocumentAct / synonym tables).
 * Prefer an explicit server-derived `nextTurnKind` when available.
 */

/**
 * Local recovery aid only — not a server authority.
 * Additive optional fields are fail-safe when absent (legacy pending).
 */
export type ThreadPendingOrigin = "choice" | "composer";

export type ThreadPendingTurn = {
  content: string;
  clientTurnKey: string;
  clientCommandKey: string;
  /**
   * How the pending attempt was created.
   * Absent ⇒ legacy pending — never clear a free draft on reconcile.
   */
  origin?: ThreadPendingOrigin;
  /**
   * Composer draft version actually submitted (composer path only).
   * Choice attempts leave this null/undefined.
   */
  sentDraftVersion?: number | null;
  projectId?: string;
  pilotId?: string | null;
};

/**
 * Whether reconcile/send ACK may clear the free composer draft.
 * Choice origin and legacy (unknown) origin: never.
 * Composer origin: only when sentDraftVersion is known and still matches.
 */
export function mayClearComposerDraftOnReconcile(input: {
  pending: ThreadPendingTurn;
  currentDraftVersion: number;
}): { clear: false; reason: string } | { clear: true; sentVersion: number } {
  const origin = input.pending.origin;
  if (origin === "choice") {
    return { clear: false, reason: "CHOICE_ORIGIN_PRESERVES_DRAFT" };
  }
  if (origin !== "composer") {
    // Legacy / incomplete metadata — fail-safe: keep draft.
    return { clear: false, reason: "LEGACY_PENDING_FAIL_SAFE" };
  }
  const sent = input.pending.sentDraftVersion;
  if (typeof sent !== "number" || !Number.isFinite(sent) || sent <= 0) {
    return { clear: false, reason: "MISSING_SENT_DRAFT_VERSION" };
  }
  if (input.currentDraftVersion !== sent) {
    return { clear: false, reason: "NEWER_DRAFT_VERSION" };
  }
  return { clear: true, sentVersion: sent };
}

/**
 * Qualification categories for a conversational turn over an optional pending.
 * Not a métier state machine — linguistic triage only.
 */
export type ThreadTurnKind =
  | "DIALOGUE_INDEPENDANT"
  | "INTENTION_EFFET"
  | "INCERTAIN";

export type ThreadTurnQualification = {
  kind: ThreadTurnKind;
  reason: string;
  /** Owner pilotage clarity when consulted (never an execution grant). */
  pilotageClarity?: "CLEAR" | "AMBIGUOUS" | "NONE";
  pilotageOperation?: string;
};

/**
 * Qualify a thread turn for UX continuity (pending gate / rememberPending).
 * SEM-02: fail closed — no client lexical métier router.
 */
export function qualifyThreadTurn(text: string): ThreadTurnQualification {
  const t = text.trim().replace(/\s+/g, " ");
  if (!t) {
    return { kind: "INCERTAIN", reason: "Énoncé vide", pilotageClarity: "NONE" };
  }
  return {
    kind: "INCERTAIN",
    reason: "CLIENT_NO_LEXICAL_ROUTER — server semantic qualification owns coexistence",
    pilotageClarity: "NONE",
  };
}

/**
 * ML4C S05 / Decision 1 — independence only when positively established by the server.
 * Client lexical path removed (SEM-02).
 */
export function looksLikeIndependentDialogue(_text: string): boolean {
  return false;
}

/** Deterministic business key for a conversational turn. */
export function conversationalClientCommandKey(clientTurnKey: string): string {
  return `conv-auth:${clientTurnKey.trim()}`;
}

export function pendingStorageKey(projectId: string): string {
  return `sfia.thread.pending:${projectId}`;
}

/**
 * Clear pending only when the business effect is terminal, or when no
 * business attempt occurred and Nora reached a conversational terminal.
 * Nora COMPLETE must NOT close an UNKNOWN / unresolved métier effect.
 * Independent dialogue COMPLETE must NOT clear a distinct unresolved métier pending.
 */
export function shouldClearThreadPending(input: {
  noraStatus?: string | null;
  effectAttempted?: boolean | null;
  effectStatus?: string | null;
  /** True when this COMPLETE belongs to an independent turn over pending A. */
  preserveUnresolvedMetierPending?: boolean;
}): boolean {
  if (input.preserveUnresolvedMetierPending) return false;
  const biz = (input.effectStatus ?? "").trim().toUpperCase();
  if (input.effectAttempted === true) {
    if (!biz || biz === "UNKNOWN" || biz.startsWith("UNKNOWN")) return false;
    return true;
  }
  const nora = (input.noraStatus ?? "").trim().toUpperCase();
  return nora === "COMPLETE" || nora === "FAILED";
}

/**
 * Exclusive in-flight guard: a distinct new act must not silently overwrite
 * an unresolved pending. Same content ⇒ retry of the same logical act.
 * Only positively established independent dialogue may proceed without
 * replacing pending. INCERTAIN and INTENTION_EFFET stay blocked.
 *
 * `nextIsIndependentDialogue` alone never establishes independence — when
 * `nextTurnKind` is omitted, content is re-qualified.
 */
export function mayStartNewThreadAct(input: {
  unresolved: ThreadPendingTurn | null | undefined;
  nextContent: string;
  /**
   * Legacy hint — ignored as authority. Independence is always derived from
   * `nextTurnKind` or `qualifyThreadTurn(nextContent)`.
   */
  nextIsIndependentDialogue?: boolean;
  /** Preferred: full turn kind (INCERTAIN never bypasses pending). */
  nextTurnKind?: ThreadTurnKind;
}): { ok: true } | { ok: false; reason: string; pending: ThreadPendingTurn } {
  const pending = input.unresolved;
  if (!pending) return { ok: true };
  if (pending.content.trim() === input.nextContent.trim()) return { ok: true };

  const kind = input.nextTurnKind ?? qualifyThreadTurn(input.nextContent).kind;

  if (kind === "DIALOGUE_INDEPENDANT") return { ok: true };

  if (kind === "INCERTAIN") {
    return {
      ok: false,
      reason:
        "Intention incertaine pendant une tentative non résolue — clarifier ou réconcilier avant un nouvel acte",
      pending,
    };
  }

  return {
    ok: false,
    reason:
      "Tentative non résolue en cours — réconcilier avant un nouvel acte distinct",
    pending,
  };
}
```

### 7.2 `page.tsx` — diff commit correctif

```diff
commit 383efec92a89ae0a1bf1084f98c351654fb86937
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 17 13:39:46 2026 +0100

    fix(next): preserve free composer draft across choice reconciliation

    Choice and legacy pending paths no longer clear the unsent draft; composer
    ACKs still clear only the submitted version. Document RECETTE restore
    artifact readiness without touching the live runtime.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index f1d23109..aec75c46 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -20,6 +20,7 @@ import {
 } from "@/components/figma/DocumentSurfaces";
 import {
   conversationalClientCommandKey,
+  mayClearComposerDraftOnReconcile,
   pendingStorageKey,
   shouldClearThreadPending,
   type ThreadPendingTurn,
@@ -855,10 +856,29 @@ export default function ProjectPage() {
         setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
         const tp = parseTurnProjection(j.turnProjection);
         if (tp) upsertTurnProjection(tp);
-        if (applyClearFromResponse(String(j.status ?? ""), effect)) {
-          setDraft("");
+        const status = String(j.status ?? "");
+        // Pending clear ≠ draft clear. Draft only via versioned composer ACK.
+        const pendingCleared = applyClearFromResponse(status, effect);
+        if (pendingCleared && status !== "UNKNOWN") {
+          const decision = mayClearComposerDraftOnReconcile({
+            pending,
+            currentDraftVersion: draftVersionRef.current,
+          });
+          if (
+            decision.clear &&
+            pilotId &&
+            clearDraftAfterAck({
+              pilotId,
+              projectId: params.projectId,
+              sentVersion: decision.sentVersion,
+              currentVersion: draftVersionRef.current,
+            })
+          ) {
+            setDraft("");
+          }
+          // choice / legacy / newer edit → leave draft & sessionStorage intact
         }
-        if (String(j.status ?? "") === "UNKNOWN") {
+        if (status === "UNKNOWN") {
           setChoiceFrozen(true);
         } else {
           setChoiceFrozen(false);
@@ -1289,7 +1309,16 @@ export default function ProjectPage() {
     const text = (overrideText ?? draft).trim();
     if (!text || !preparationId) return;
     const fromChoice = opts?.fromChoice === true;
-    const sentVersion = fromChoice ? 0 : draftVersionRef.current;
+    const sentVersion = fromChoice ? null : draftVersionRef.current;
+    const pendingMeta: Pick<
+      ThreadPendingTurn,
+      "origin" | "sentDraftVersion" | "projectId" | "pilotId"
+    > = {
+      origin: fromChoice ? "choice" : "composer",
+      sentDraftVersion: sentVersion,
+      projectId: params.projectId,
+      pilotId: pilotIdRef.current,
+    };
     setChoiceFrozen(true);
     setForceStickToken((t) => t + 1);
     // SEM-02 / S05: no client lexical gate. Server returns nextTurnKind from Nora
@@ -1310,6 +1339,12 @@ export default function ProjectPage() {
     }
     const clientTurnKey = messageTurnKeyRef.current.key;
     const clientCommandKey = conversationalClientCommandKey(clientTurnKey);
+    const buildPending = (): ThreadPendingTurn => ({
+      content: text,
+      clientTurnKey,
+      clientCommandKey,
+      ...pendingMeta,
+    });
     try {
       const res = await fetch(`/api/preparations/${preparationId}/messages`, {
         method: "POST",
@@ -1334,7 +1369,7 @@ export default function ProjectPage() {
           Boolean(pendingBefore) && pendingBefore!.clientTurnKey !== clientTurnKey;
         // Remember effect turns for ACK recovery — never let B overwrite unresolved A.
         if (serverKind === "INTENTION_EFFET" && !effectBlocked && !distinctFromUnresolved) {
-          rememberPending({ content: text, clientTurnKey, clientCommandKey });
+          rememberPending(buildPending());
         } else if (distinctFromUnresolved && pendingBefore) {
           rememberPending(pendingBefore);
         }
@@ -1352,7 +1387,7 @@ export default function ProjectPage() {
           applyClearFromResponse(String(j.status ?? ""), effect, {
             preserveUnresolvedMetierPending: preserveMetierPending,
           });
-        if (!fromChoice && shouldClearDraft) {
+        if (!fromChoice && shouldClearDraft && typeof sentVersion === "number") {
           if (
             pilotId &&
             clearDraftAfterAck({
@@ -1395,7 +1430,7 @@ export default function ProjectPage() {
       } else {
         // ACK lost / HTTP error — retain turn key; KEEP choices frozen (server may have applied).
         setChoiceFrozen(true);
-        rememberPending({ content: text, clientTurnKey, clientCommandKey });
+        rememberPending(buildPending());
         setNoraActivity("error");
         setStatus(
           res.status === 409
@@ -1406,7 +1441,7 @@ export default function ProjectPage() {
     } catch {
       // Network loss after click: fail closed — freeze until reconcile proves outcome.
       setChoiceFrozen(true);
-      rememberPending({ content: text, clientTurnKey, clientCommandKey });
+      rememberPending(buildPending());
       setNoraActivity("error");
       setStatus("échec réseau — intention de tour conservée");
     } finally {

```

### 7.3 Tests unitaires — diff

```diff
commit 383efec92a89ae0a1bf1084f98c351654fb86937
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 17 13:39:46 2026 +0100

    fix(next): preserve free composer draft across choice reconciliation

    Choice and legacy pending paths no longer clear the unsent draft; composer
    ACKs still clear only the submitted version. Document RECETTE restore
    artifact readiness without touching the live runtime.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/unit/ensemble05-turn-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/ensemble05-turn-projection.test.ts
index eb52875a..1c38cb32 100644
--- a/projects/sfia-studio-next/web/tests/unit/ensemble05-turn-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ensemble05-turn-projection.test.ts
@@ -13,6 +13,7 @@ import {
   readComposerDraft,
   writeComposerDraft,
 } from "@/domains/conversation/composer-draft";
+import { mayClearComposerDraftOnReconcile } from "@/domains/pilotage/thread-recovery";

 describe("ensemble05 turn projection (M1 / P1-A)", () => {
   it("does NOT build continue choices from clarifications", () => {
@@ -311,3 +312,44 @@ describe("ensemble05 composer draft (M3 / P2-B)", () => {
     ).toBeNull();
   });
 });
+
+describe("ensemble05 reconcile draft policy", () => {
+  const base = {
+    content: "Approfondissons B.",
+    clientTurnKey: "turn-1",
+    clientCommandKey: "conv-auth:turn-1",
+  };
+
+  it("never clears draft for choice origin", () => {
+    expect(
+      mayClearComposerDraftOnReconcile({
+        pending: { ...base, origin: "choice", sentDraftVersion: null },
+        currentDraftVersion: 3,
+      }),
+    ).toEqual({ clear: false, reason: "CHOICE_ORIGIN_PRESERVES_DRAFT" });
+  });
+
+  it("fail-safe preserves draft for legacy pending without origin", () => {
+    expect(
+      mayClearComposerDraftOnReconcile({
+        pending: { ...base },
+        currentDraftVersion: 1,
+      }),
+    ).toEqual({ clear: false, reason: "LEGACY_PENDING_FAIL_SAFE" });
+  });
+
+  it("clears composer draft only when sent version still matches", () => {
+    expect(
+      mayClearComposerDraftOnReconcile({
+        pending: { ...base, origin: "composer", sentDraftVersion: 2 },
+        currentDraftVersion: 2,
+      }),
+    ).toEqual({ clear: true, sentVersion: 2 });
+    expect(
+      mayClearComposerDraftOnReconcile({
+        pending: { ...base, origin: "composer", sentDraftVersion: 2 },
+        currentDraftVersion: 4,
+      }),
+    ).toEqual({ clear: false, reason: "NEWER_DRAFT_VERSION" });
+  });
+});

```

### 7.4 Tests E2E — diff

```diff
commit 383efec92a89ae0a1bf1084f98c351654fb86937
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 17 13:39:46 2026 +0100

    fix(next): preserve free composer draft across choice reconciliation

    Choice and legacy pending paths no longer clear the unsent draft; composer
    ACKs still clear only the submitted version. Document RECETTE restore
    artifact readiness without touching the live runtime.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
index 159f8897..39dbba06 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
@@ -242,7 +242,9 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     await expect(page.getByTestId("travail-viewer-body")).not.toContainText(`Revision A ${stamp}`);
   });

-  test("C2 ACK lost on choice — single pilot turn, freeze, reconcile", async ({ page }) => {
+  test("C2 ACK lost on choice — single pilot turn, freeze, reconcile, draft kept", async ({
+    page,
+  }) => {
     test.setTimeout(180_000);
     await page.goto("/login");
     await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
@@ -272,6 +274,11 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     );
     await expect(actionable.first()).toBeVisible({ timeout: 10000 });

+    // Free draft A written BEFORE clicking choice B — must survive reconcile.
+    const freeDraft = `Je voudrais aussi étudier une approche différente ${Date.now()}`;
+    await page.getByTestId("thread-draft").fill(freeDraft);
+    await expect(page.getByTestId("thread-draft")).toHaveValue(freeDraft);
+
     let ackDropped = false;
     let serverOk = false;
     let capturedTurnKey: string | null = null;
@@ -322,6 +329,8 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     expect(serverOk).toBe(true);
     expect(ackDropped).toBe(true);
     expect(capturedTurnKey).toBeTruthy();
+    // Draft A still present after ACK loss (choice must not wipe it).
+    await expect(page.getByTestId("thread-draft")).toHaveValue(freeDraft);

     // Choices stay frozen — no second independent click path.
     await expect(
@@ -336,22 +345,34 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
       "ready",
       { timeout: 20000 },
     );
+    await expect(page.getByTestId("thread-draft")).toHaveValue(freeDraft);
     // Final B — reconciliation path is MANDATORY (not conditional).
     const reconcile = page.getByTestId("thread-reconcile-pending");
     await expect(reconcile).toBeVisible({ timeout: 20000 });
     await expect(reconcile).toBeEnabled();
-    // Keep route open so idempotent retry uses same clientTurnKey; do not drop ACK again.
     ackDropped = true; // already dropped once — subsequent POSTs pass through
     await reconcile.click();
     await expect(page.getByTestId("thread-nora-status")).toContainText(
       /COMPLETE|Nora deterministic-fixture/i,
       { timeout: 45000 },
     );
-    // After confirmed reconcile, pending control must clear.
     await expect(page.getByTestId("thread-reconcile-pending")).toHaveCount(0, {
       timeout: 15000,
     });
-    // Prior choices expired (not actionable).
+    // Free draft A unchanged after reconcile of choice B.
+    await expect(page.getByTestId("thread-draft")).toHaveValue(freeDraft);
+    const stored = await page.evaluate(() => {
+      for (let i = 0; i < sessionStorage.length; i += 1) {
+        const k = sessionStorage.key(i);
+        if (k && k.startsWith("sfia.travail.draft:v1:")) {
+          return sessionStorage.getItem(k);
+        }
+      }
+      return null;
+    });
+    expect(stored).toBeTruthy();
+    expect(String(stored)).toContain(freeDraft);
+
     await expect(
       page.locator(
         '[data-testid="nora-choices"][data-actionable="1"] [data-testid="nora-choice"]',
@@ -368,14 +389,108 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     const choiceMsgs = pilotMsgs.filter((m: { content?: string }) =>
       /Approfondissons le besoin|Explore une autre approche/i.test(m.content ?? ""),
     );
-    // Durable proof: a single effective pilot utterance for the choice intention.
     expect(choiceMsgs.length).toBe(1);
-    // Turn key identity conserved through reconcile retry.
+    // Free draft was never transmitted as a pilot turn.
+    expect(
+      pilotMsgs.some((m: { content?: string }) => (m.content ?? "").includes(freeDraft)),
+    ).toBe(false);
     expect(capturedTurnKey).toBeTruthy();
     await page.unrouteAll({ behavior: "ignoreErrors" });
     void preparationId;
   });

+  test("composer ACK lost — newer draft survives reconcile", async ({ page }) => {
+    test.setTimeout(180_000);
+    await page.goto("/login");
+    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+    await page.waitForURL("**/portfolio");
+    const { projectId } = await bootstrapProjectFromPortfolio(page, {
+      seed: "E05 composer ack draft",
+      name: `E05 CDraft ${Date.now()}`,
+      summary: "composer-draft",
+    });
+    await page.goto(`/projects/${projectId}?surface=travail`);
+    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
+      "data-project-load-state",
+      "ready",
+      { timeout: 20000 },
+    );
+
+    const sentText = `Message libre C ${Date.now()}`;
+    let ackDropped = false;
+    await page.route("**/api/preparations/*/messages", async (route) => {
+      if (route.request().method() !== "POST") {
+        await route.continue();
+        return;
+      }
+      let post: { content?: string } = {};
+      try {
+        post = route.request().postDataJSON() as { content?: string };
+      } catch {
+        post = {};
+      }
+      const response = await route.fetch();
+      const raw = await response.text();
+      if (!ackDropped && response.ok() && (post.content ?? "").includes("Message libre C")) {
+        ackDropped = true;
+        await route.fulfill({
+          status: 502,
+          contentType: "application/json",
+          body: JSON.stringify({
+            errorCategory: "ACK_LOST_SIM",
+            error: "ACK lost after server commit",
+          }),
+        });
+        return;
+      }
+      await route.fulfill({
+        status: response.status(),
+        headers: response.headers(),
+        body: raw,
+      });
+    });
+
+    await page.getByTestId("thread-draft").fill(sentText);
+    await page.getByTestId("thread-send").click();
+    await expect(page.getByTestId("thread-nora-status")).toContainText(
+      /ACK lost|ACK_LOST|échec|conservée/i,
+      { timeout: 45000 },
+    );
+
+    const newer = `Nouvelle saisie D ${Date.now()}`;
+    await page.getByTestId("thread-draft").fill(newer);
+    await expect(page.getByTestId("thread-draft")).toHaveValue(newer);
+
+    await page.reload();
+    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
+      "data-project-load-state",
+      "ready",
+      { timeout: 20000 },
+    );
+    await expect(page.getByTestId("thread-draft")).toHaveValue(newer);
+    const reconcile = page.getByTestId("thread-reconcile-pending");
+    await expect(reconcile).toBeVisible({ timeout: 20000 });
+    await reconcile.click();
+    await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|Nora/i, {
+      timeout: 45000,
+    });
+    await expect(page.getByTestId("thread-reconcile-pending")).toHaveCount(0, {
+      timeout: 15000,
+    });
+    // Newer draft D must survive ACK of C.
+    await expect(page.getByTestId("thread-draft")).toHaveValue(newer);
+
+    const proj = await page.request.get(`/api/projects/${projectId}`);
+    const pj = await proj.json();
+    const cMsgs = (pj.messages ?? []).filter(
+      (m: { role?: string; content?: string }) =>
+        (m.role === "user" || m.role === "pilot") &&
+        (m.content ?? "").includes("Message libre C"),
+    );
+    expect(cMsgs.length).toBe(1);
+    await page.unrouteAll({ behavior: "ignoreErrors" });
+  });
+
   test("C3 same-tab logout/identity switch purges draft", async ({ page }) => {
     test.setTimeout(120_000);
     await page.goto("/login");

```

### 7.5 Manifeste RECETTE — diff correctif + tip fill

```diff
commit 383efec92a89ae0a1bf1084f98c351654fb86937
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 17 13:39:46 2026 +0100

    fix(next): preserve free composer draft across choice reconciliation

    Choice and legacy pending paths no longer clear the unsent draft; composer
    ACKs still clear only the submitted version. Document RECETTE restore
    artifact readiness without touching the live runtime.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/ensemble-05-recette-prep-manifest.md b/projects/sfia-studio-next/construction/ensemble-05-recette-prep-manifest.md
index 16af321f..c84eefe5 100644
--- a/projects/sfia-studio-next/construction/ensemble-05-recette-prep-manifest.md
+++ b/projects/sfia-studio-next/construction/ensemble-05-recette-prep-manifest.md
@@ -16,68 +16,69 @@
 | Processus | `next start -H 127.0.0.1 -p 3200` (Next 15.5.29) |
 | Worktree runtime | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3` |
 | SOURCE_SHA servi | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
-| Tree | `b92cc822ac67399c6d8753c17dbcce5f4b5b734f` |
-| BUILD_ID | `3LzvYPTQc-Km7St6nF97r` (fichier `.next/BUILD_ID`) |
-| Lane | RECETTE (observée dans logs `lane":"RECETTE"`) |
+| BUILD_ID | `3LzvYPTQc-Km7St6nF97r` |
+| Lane | RECETTE |
 | Mode | `next start` (pas hot-reload DEV) |
-| HTTP probe | 307 (réponse active) |
+| HTTP probe | 307 |
+| **BUILD CURRENT VERIFIED** | OUI |

-**Aucune modification de ce runtime dans le présent cycle.**
+**Aucune modification du runtime servi dans ce cycle.**

-## 2. Candidat figé (commit local — non poussé)
+## 2. Candidat produit (commits locaux — non poussés)

 | Item | Valeur |
 |---|---|
 | Branche | `feat/next-ml4d-project-space-20261116` |
-| SHA candidat | `342f0bbb3fea1d52c7a40228347923b30b6db90e` |
-| Tree candidat | `605a6274b3a41cef41fd0cb271352d03c7f0cdb2` |
-| Parent base | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
-| Workspace DEV | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
+| Feature freeze | `342f0bbb3fea1d52c7a40228347923b30b6db90e` |
+| Manifeste SHA | `2b0d7a78a34fb9b8858a8ce81a31bedadcc842b8` |
+| Correctif brouillon tip | _(renseigné après commit correctif)_ |
 | Push produit | **AUCUN** |

-## 3. Compatibilité / conservation
+## 3. Rollback — qualification

-| Contrôle | Statut |
+| Gate | Statut |
 |---|---|
-| Migration DB | **aucune** (M5) |
-| Nouvelle base RECETTE | **interdite** |
-| Reset données / comptes / documents | **interdit** |
-| Remplacement secrets DEV→RECETTE | **interdit** |
-| Nouveau port / worktree / conteneur | **interdit** sauf GO Morris |
-| Schéma | inchangé — compatible avec build actuel |
+| BUILD CURRENT VERIFIED | OUI — BUILD_ID + process :3200 |
+| ROLLBACK SOURCE VERIFIED | OUI — commit `984d77a3` présent localement ; SOURCE_SHA.txt |
+| RESTORABLE ARTIFACT VERIFIED | OUI — snapshot passif `.sfia-restore-artifacts/3LzvYPTQc-Km7St6nF97r/` (281M, 358 fichiers, SHA256SUMS, BUILD_ID match) |
+| RESTORE PROCEDURE DOCUMENTED | OUI — `RESTORE.md` dans l’artefact |
+| RESTORE LIVE TEST NOT EXECUTED | OUI — aucun stop/restart/replace sur :3200 |

-## 4. Procédure de mise à disposition future (non exécutée)
+### Emplacement artefact (hors Git, hors `.next` actif)

-1. GO Morris explicite de déploiement RECETTE.
-2. Arrêt contrôlé du `next start` sur `:3200` via le mécanisme d’exploitation déjà utilisé pour ce worktree.
-3. Remplacer le contenu servi dans **le même worktree RECETTE** (ou rebuild `.next` dans ce worktree) à partir du SHA candidat figé — sans créer une seconde lane.
-4. Vérifier `BUILD_ID` / `SOURCE_SHA` / port 3200.
-5. Smoke : login DEV/test ou parcours Morris ; Travail avec Nora ; navigation E04.
-6. Si échec : restaurer le build précédent `3LzvYPTQc-Km7St6nF97r` / SHA `984d77a3` déjà présent dans ce worktree (artefact `.next` antérieur ou rebuild du SHA précédent).
+`/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3/.sfia-restore-artifacts/3LzvYPTQc-Km7St6nF97r/`

-## 5. Smoke tests post-déploiement (futurs)
+Contenu : `BUILD_ID`, `SOURCE_SHA.txt`, `next-snapshot/`, `SHA256SUMS.txt`, `RESTORE.md`.

-- HTTP `:3200` joignable.
-- Session / portfolio.
-- Ouverture projet → surface Travail.
-- Envoi message / choix / brouillon.
-- Visionneuse document.
-- Aucune écriture sur DEV depuis RECETTE.
+Copie passive en lecture du `.next` courant ; le process continue de servir l’original.
+
+## 4. Procédure de mise à disposition future (non exécutée)

-## 6. Rollback
+1. GO Morris explicite.
+2. Arrêt contrôlé de `next start` :3200.
+3. Remplacer/rebuild `.next` dans **le même worktree RECETTE** depuis le SHA candidat.
+4. Vérifier BUILD_ID / SOURCE_SHA / :3200.
+5. Smoke Morris.
+6. Rollback : suivre `RESTORE.md` de l’artefact ci-dessus.

-Retour au build `3LzvYPTQc-Km7St6nF97r` / source `984d77a3` dans le worktree RECETTE existant, redémarrage `next start -H 127.0.0.1 -p 3200`.
+## 5. Compatibilité
+
+| Contrôle | Statut |
+|---|---|
+| Migration DB | aucune |
+| Nouvelle base / lane / port | interdite |
+| Reset données | interdit |
+| Secrets | non exposés / non remplacés |

-## 7. Réserves
+## 6. Réserves

-- Revue visuelle Figma : **réservée à Morris en RECETTE**.
-- Git D9 REAL : non exécuté en DEV.
-- OAuth LIVE : distinct de l’adaptateur DEV.
-- Streaming M2 : hors V1.
+- Revue visuelle : Morris en RECETTE.
+- Cookies same-host ports : profils navigateur séparés recommandés.
+- Git D9 REAL / OAuth LIVE / streaming M2 : hors preuves de ce cycle.
+- **RESTORE LIVE TEST NOT EXECUTED**

-## 8. Actions nécessitant GO Morris
+## 7. Actions nécessitant GO Morris

 - Déploiement / redémarrage RECETTE.
 - Push produit / PR / merge.
-- Toute création de second environnement.
-- Gate C / STABLE / ML5.
+- Exécution réelle du rollback.

```

```diff
commit cb638613890bff769b3cbbcc99449b430c89faa6
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 17 13:40:30 2026 +0100

    docs(next): fill draft-reconcile tip SHA in RECETTE prep manifest

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/ensemble-05-recette-prep-manifest.md b/projects/sfia-studio-next/construction/ensemble-05-recette-prep-manifest.md
index 00693020..37e06849 100644
--- a/projects/sfia-studio-next/construction/ensemble-05-recette-prep-manifest.md
+++ b/projects/sfia-studio-next/construction/ensemble-05-recette-prep-manifest.md
@@ -31,7 +31,8 @@
 | Branche | `feat/next-ml4d-project-space-20261116` |
 | Feature freeze | `342f0bbb3fea1d52c7a40228347923b30b6db90e` |
 | Manifeste SHA | `2b0d7a78a34fb9b8858a8ce81a31bedadcc842b8` |
-| Correctif brouillon tip |  / tree  |
+| Correctif brouillon tip | `383efec92a89ae0a1bf1084f98c351654fb86937` / tree `c3c4ef9f237aedda2c0e26f6192e842bf2d2cf00` |
+| Manifest tip after SHA record | `4ca69c518d4b91e090120f2a33ef74ec87b652ea` / tree `cd0ba2a035fc660b448af55aa25f11f32f37fd8e` (updated by follow-up docs commit) |
 | Push produit | **AUCUN** |

 ## 3. Rollback — qualification

```

### 7.6 As-built / delivery-history — diffs

```diff
commit 383efec92a89ae0a1bf1084f98c351654fb86937
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 17 13:39:46 2026 +0100

    fix(next): preserve free composer draft across choice reconciliation

    Choice and legacy pending paths no longer clear the unsent draft; composer
    ACKs still clear only the submitted version. Document RECETTE restore
    artifact readiness without touching the live runtime.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/as-built-ensemble-05-travail-nora-20261117.md b/projects/sfia-studio-next/construction/as-built-ensemble-05-travail-nora-20261117.md
index e8e0b8d5..3e164894 100644
--- a/projects/sfia-studio-next/construction/as-built-ensemble-05-travail-nora-20261117.md
+++ b/projects/sfia-studio-next/construction/as-built-ensemble-05-travail-nora-20261117.md
@@ -7,8 +7,8 @@
 | Type | Delivery locale DEV · **NO RELEASE** |
 | Branche produit | `feat/next-ml4d-project-space-20261116` |
 | HEAD de base | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
-| Statut | **E05 CANDIDATE FROZEN — READY FOR MORRIS RECETTE DEPLOYMENT DECISION** (as-built non normatif) |
-| Cycles | Delivery + correctif + consolidation + finalisation technique (même macro-lot) |
+| Statut | **E05 FINAL CANDIDATE — TECHNICALLY READY FOR MORRIS RECETTE DEPLOYMENT GO** (as-built non normatif) |
+| Cycles | Delivery + correctif + consolidation + freeze + correctif brouillon/reconcile (même macro-lot) |

 ## Sources

@@ -25,8 +25,10 @@
 | Choix | `continueChoices` ≠ clarifications |
 | Final A | Toute ouverture Travail revalide D4 (list + revisionId) — pas de latest React en autorité |
 | Final B | ACK perdu → pending obligatoire → reconcile click → 1 tour Pilote |
+| Draft/reconcile | Choix Nora / legacy never clear draft ; composer only via `clearDraftAfterAck` versionné |
 | C3 | Purge same-tab login ; `session.pilotId` |
 | C5 | Git path existant ; REAL NOT EXECUTED |
+| Rollback prep | Artefact passif `.sfia-restore-artifacts/3Lzv…` — LIVE TEST NOT EXECUTED |

 ## Preuves techniques (DEV)


```

```diff
commit 383efec92a89ae0a1bf1084f98c351654fb86937
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 17 13:39:46 2026 +0100

    fix(next): preserve free composer draft across choice reconciliation

    Choice and legacy pending paths no longer clear the unsent draft; composer
    ACKs still clear only the submitted version. Document RECETTE restore
    artifact readiness without touching the live runtime.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 6acb32c4..f998cae0 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,23 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-DRAFT-RECONCILE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-17 ~13:40 CET |
+| Macro-lot | ML4D Ensemble 05 — correctif brouillon/reconcile + rollback prep (même macro-lot) |
+| Type | Cycle 8 Delivery · CRITICAL · EVOL correctif final · **NO RELEASE** |
+| Parent tip | `2b0d7a78` (descendant de freeze `342f0bbb`) |
+| Scope | Pending origin metadata ; reconcile never wipes choice/legacy draft ; artefact restore passif RECETTE |
+| Non-scope | Déploiement RECETTE ; restore LIVE ; push produit ; Figma |
+| Preuves | Vitest 25 PASS ; Playwright E05 6 PASS ; E04 3 PASS ; next build PASS |
+| Manifeste | `construction/ensemble-05-recette-prep-manifest.md` |
+| RECETTE | inchangée `:3200` / `3LzvYPTQc-Km7St6nF97r` + artefact `.sfia-restore-artifacts/…` |
+| Push produit | **AUCUN** |
+| Verdict cible | `E05 FINAL CANDIDATE — TECHNICALLY READY FOR MORRIS RECETTE DEPLOYMENT GO` |
+
+
 ## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-FREEZE

 | Field | Value |
@@ -18,7 +35,7 @@ Append-only logical journal of Cursor product deliveries.
 | As-built | `construction/as-built-ensemble-05-travail-nora-20261117.md` |
 | RECETTE | inventoriée inchangée `:3200` BUILD `3LzvYPTQc-Km7St6nF97r` |
 | Push produit | **AUCUN** (commit local autorisé) |
-| Verdict cible | `E05 CANDIDATE FROZEN — READY FOR MORRIS RECETTE DEPLOYMENT DECISION` |
+| Verdict cible | `E05 CANDIDATE FROZEN — READY FOR MORRIS RECETTE DEPLOYMENT DECISION` (supersédé) |


 ## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-CONSOLIDATION

```

### 7.7 Manifeste intégral au tip `cb638613890bff769b3cbbcc99449b430c89faa6`

```markdown
# Ensemble 05 — Manifeste de préparation RECETTE (non secret)

| Métadonnée | Valeur |
|---|---|
| Date | 2026-11-17 |
| Nature | Préparation — **aucun déploiement exécuté** |
| Macro-lot | ML4D Ensemble 05 — Travail avec Nora |
| Instruction Morris | Réutiliser la RECETTE existante — ne pas en créer une nouvelle |

## 1. Environnement RECETTE existant (inventaire lecture seule)

| Item | Observation |
|---|---|
| URL | `http://127.0.0.1:3200` |
| Port | `3200` (LISTEN confirmé) |
| Processus | `next start -H 127.0.0.1 -p 3200` (Next 15.5.29) |
| Worktree runtime | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3` |
| SOURCE_SHA servi | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| BUILD_ID | `3LzvYPTQc-Km7St6nF97r` |
| Lane | RECETTE |
| Mode | `next start` (pas hot-reload DEV) |
| HTTP probe | 307 |
| **BUILD CURRENT VERIFIED** | OUI |

**Aucune modification du runtime servi dans ce cycle.**

## 2. Candidat produit (commits locaux — non poussés)

| Item | Valeur |
|---|---|
| Branche | `feat/next-ml4d-project-space-20261116` |
| Feature freeze | `342f0bbb3fea1d52c7a40228347923b30b6db90e` |
| Manifeste SHA | `2b0d7a78a34fb9b8858a8ce81a31bedadcc842b8` |
| Correctif brouillon tip | `383efec92a89ae0a1bf1084f98c351654fb86937` / tree `c3c4ef9f237aedda2c0e26f6192e842bf2d2cf00` |
| Manifest tip after SHA record | `4ca69c518d4b91e090120f2a33ef74ec87b652ea` / tree `cd0ba2a035fc660b448af55aa25f11f32f37fd8e` (updated by follow-up docs commit) |
| Push produit | **AUCUN** |

## 3. Rollback — qualification

| Gate | Statut |
|---|---|
| BUILD CURRENT VERIFIED | OUI — BUILD_ID + process :3200 |
| ROLLBACK SOURCE VERIFIED | OUI — commit `984d77a3` présent localement ; SOURCE_SHA.txt |
| RESTORABLE ARTIFACT VERIFIED | OUI — snapshot passif `.sfia-restore-artifacts/3LzvYPTQc-Km7St6nF97r/` (281M, 358 fichiers, SHA256SUMS, BUILD_ID match) |
| RESTORE PROCEDURE DOCUMENTED | OUI — `RESTORE.md` dans l’artefact |
| RESTORE LIVE TEST NOT EXECUTED | OUI — aucun stop/restart/replace sur :3200 |

### Emplacement artefact (hors Git, hors `.next` actif)

`/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3/.sfia-restore-artifacts/3LzvYPTQc-Km7St6nF97r/`

Contenu : `BUILD_ID`, `SOURCE_SHA.txt`, `next-snapshot/`, `SHA256SUMS.txt`, `RESTORE.md`.

Copie passive en lecture du `.next` courant ; le process continue de servir l’original.

## 4. Procédure de mise à disposition future (non exécutée)

1. GO Morris explicite.
2. Arrêt contrôlé de `next start` :3200.
3. Remplacer/rebuild `.next` dans **le même worktree RECETTE** depuis le SHA candidat.
4. Vérifier BUILD_ID / SOURCE_SHA / :3200.
5. Smoke Morris.
6. Rollback : suivre `RESTORE.md` de l’artefact ci-dessus.

## 5. Compatibilité

| Contrôle | Statut |
|---|---|
| Migration DB | aucune |
| Nouvelle base / lane / port | interdite |
| Reset données | interdit |
| Secrets | non exposés / non remplacés |

## 6. Réserves

- Revue visuelle : Morris en RECETTE.
- Cookies same-host ports : profils navigateur séparés recommandés.
- Git D9 REAL / OAuth LIVE / streaming M2 : hors preuves de ce cycle.
- **RESTORE LIVE TEST NOT EXECUTED**

## 7. Actions nécessitant GO Morris

- Déploiement / redémarrage RECETTE.
- Push produit / PR / merge.
- Exécution réelle du rollback.
```

---

## 8. Tests du brouillon et de la réconciliation

### Unitaires (`ensemble05-turn-projection.test.ts`)

Rejoué ce cycle : **12 tests PASS** (dont 3 politique reconcile draft).

| Cas | Attendu | Résultat |
|---|---|---|
| origin choice | `CHOICE_ORIGIN_PRESERVES_DRAFT` | PASS |
| legacy sans origin | `LEGACY_PENDING_FAIL_SAFE` | PASS |
| composer version match | `clear: true` | PASS |
| composer version newer | `NEWER_DRAFT_VERSION` | PASS |

### E2E Playwright E05 (campagne cycle — 6 tests PASS déclarés)

| TEST contrat | Couverture |
|---|---|
| TEST 1 Choix + brouillon A | `ACK lost choice — free draft survives mandatory reconcile` — draft + sessionStorage + 1 seul tour choix + A jamais transmis |
| TEST 2 Composer C puis D | `composer ACK lost — newer draft survives reconcile` |
| TEST 3 / idempotence | scénarios ACK perdu / reconcile existants (Final B) — pas de doublon |
| TEST 4 UNKNOWN | freeze / no anticipatory clear (politique + sendMessage UNKNOWN) |
| TEST 5 Legacy | unitaire fail-safe sans inventer égalité lexicale |

### Non-régression (cycle)

| Suite | Résultat |
|---|---|
| Vitest E05 unit bundle | 25 PASS (campagne) ; reconfirm 12/12 projection+policy |
| Playwright E05 | 6 PASS |
| Playwright E04 | 3 PASS |
| next build | PASS |
| tsc workspace | 32 erreurs préexistantes hors E05 — **pas de PASS global tsc** ; pas de nouvelle régression E05 introduite |

---

## 9. Preuves de non-duplication

- E2E choix : `choiceMsgs.length === 1` après reconcile obligatoire.
- Même `clientTurnKey` réutilisé ; pas de second clic actionable (`data-actionable=1` count 0).
- Free draft absent des messages Pilote durables.

---

## 10. État du stockage local

- Brouillon libre : `sessionStorage` clé `sfia.travail.draft:v1:…` — conservé après choix + reconcile (assert E2E `stored` contains freeDraft).
- Pending : `ThreadPendingTurn` en sessionStorage avec métadonnées additives ; legacy sans `origin` → never clear.
- Clear uniquement via `clearDraftAfterAck` quand versions match (composer).

---

## 11. Inventaire actualisé RECETTE existante

| Item | Valeur vérifiée |
|---|---|
| URL | `http://127.0.0.1:3200` |
| HTTP | 307 |
| Process | `node` PID 48351 LISTEN `127.0.0.1:3200` |
| Commande | `next start -H 127.0.0.1 -p 3200` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3` |
| BUILD_ID | `3LzvYPTQc-Km7St6nF97r` |
| SOURCE_SHA | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| Runtime modifié ce cycle | **NON** |
| Nouvelle RECETTE | **NON** |

---

## 12. Intégrité préparation rollback

| Gate | Statut |
|---|---|
| BUILD CURRENT VERIFIED | OUI |
| ROLLBACK SOURCE VERIFIED | OUI — SHA `984d77a3` / SOURCE_SHA.txt |
| RESTORABLE ARTIFACT VERIFIED | OUI — 281M ; 358 fichiers ; `diff -rq` live↔snapshot vide ; `shasum -c` **299 OK** depuis `next-snapshot/` |
| RESTORE PROCEDURE DOCUMENTED | OUI — `RESTORE.md` |
| RESTORE LIVE TEST NOT EXECUTED | OUI — aucun stop/restart/replace |

Espace disque observé : ~23Gi libres sur volume Data — suffisant pour conserver le snapshot.

Artefact **hors Git** ; secrets non extraits.

---

## 13. Modifications du manifeste

Voir §7.5 / §7.7. Gates BUILD/ROLLBACK/RESTORABLE/PROCEDURE/LIVE NOT EXECUTED explicités. Tip correctif `383efec92a89ae0a1bf1084f98c351654fb86937` enregistré ; tip local pack `cb638613890bff769b3cbbcc99449b430c89faa6`.

---

## 14. ENV-01

| Autorisé | Fait |
|---|---|
| Correction + tests DEV | OUI |
| Inspection RO RECETTE | OUI |
| Artefact rollback passif non destructif | OUI |
| Manifeste non secret | OUI |

| Interdit | Respecté |
|---|---|
| Stop/restart RECETTE | OUI |
| Déploiement | OUI |
| Code dans worktree RECETTE | OUI (snapshot sibling `.sfia-restore-artifacts` seulement) |
| Reset DB / migration / secrets | OUI |
| Nouvelle lane RECETTE | OUI |

Réserve cookies same-host multi-ports : profils navigateur séparés pour future recette — **pas d'affirmation d'isolation cookies complète**.

**ENV-01 : PASS** (isolation ports + bases distinctes maintenue ; réserve cookies documentée).

---

## 15. Versioning

| Champ | Valeur |
|---|---|
| Évolution E05 | MINOR prévisionnelle (inchangée) |
| Ce cycle | correctif local même candidat |
| Release | **NO RELEASE** |
| STABLE | NOT AVAILABLE |
| Tag / numéro inventé | **aucun** |

---

## 16. Fake / Real

| Frontière | Qualification |
|---|---|
| Nora E2E | FAKE déterministe |
| D3 | commande/idempotence + PG DEV/E2E |
| D1 | identité test — OAuth LIVE non démontré |
| D9 | REAL NOT EXECUTED |
| RECETTE | lecture seule + artefact passif |
| Rollback LIVE | **NOT EXECUTED** |

Interdit respecté : ne pas déclarer RECETTE déployée, rollback effectif, Nora LIVE ou Git REAL prouvés.

---

## 17. Nouveau commit local

| Champ | Valeur |
|---|---|
| Branche | `feat/next-ml4d-project-space-20261116` |
| Tip | `cb638613890bff769b3cbbcc99449b430c89faa6` |
| Tree | `3aa6a2d6cc826c4299d9f8c1b19b5e3dd4b3ca20` |
| Correctif principal | `383efec92a89ae0a1bf1084f98c351654fb86937` — `fix(next): preserve free composer draft across choice reconciliation` |
| Fichiers correctif | as-built, delivery-history, manifeste, `page.tsx`, `thread-recovery.ts`, unit + e2e tests |
| Docs tip | `4ca69c51` (placeholder vide) puis `cb638613` (SHA renseigné) |
| Push produit | **AUCUN** |
| PR / merge | **AUCUN** |

---

## 18. Réserves

- Streaming textuel progressif hors V1 (M2)
- Git D9 REAL non exécuté
- OAuth LIVE non démontré (adaptateur DEV)
- Figma non certifié par Cursor — revue visuelle Morris en RECETTE
- tsc 32 erreurs workspace préexistantes hors E05
- Cookies same-host ports
- **RESTORE LIVE TEST NOT EXECUTED**

---

## 19. Gates non autorisés

Aucun GO pour : déploiement RECETTE, push produit, PR, merge, Gate C, ML5, STABLE, ADOPTED, nouvelle RECETTE, campagne Figma F2.

---

## 20. Verdict unique et prochaine décision Morris

**E05 FINAL CANDIDATE — TECHNICALLY READY FOR MORRIS RECETTE DEPLOYMENT GO**

Prochaine décision Morris (hors ce cycle) : déployer ou non le candidat local sur la RECETTE existante `:3200`, en s'appuyant sur l'artefact de rollback préparé — sans que Cursor ait exécuté ce déploiement ni le restore LIVE.

Instruction ChatGPT : relire ce rapport depuis `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` avant arbitrage Morris.
