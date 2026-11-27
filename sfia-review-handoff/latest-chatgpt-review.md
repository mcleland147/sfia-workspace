# SFIA Review Pack FULL — Critical Cycle 8
## ML5 Livraison 1 — E4 + reliquats E2/E3 (construction intégrée)

| Champ | Valeur |
|---|---|
| Date/heure UTC | 2026-11-27T20:42:38Z |
| Cycle | 8 — Delivery / EVOL Critical |
| Mandat | E4 C.1–C.5 + §21.1 E2 + §21.2 E3 · GO Morris · 1 candidat DEV |
| Repo | mcleland147/sfia-workspace |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD base | `5f2ecad185b9784bc3956477601fe6a722459467` |
| HEAD final | `a3305a42b3fd0f24b2a16bca825fc14eb37e84e6` |
| Tree final | `72405eddfdd10deea324a5c0dd01a073b30c5f85` |
| BUILD DEV | `NfeXL_KgIuqKGCdf0k4gh` |
| Main | `997897fd7cf914771e7d08e8030dc7123fab7d25` (inchangé) |
| Docs candidate | `18cff689` (suivi v0.15 — non modifié) |
| CI | aucune (push ≠ main ; PR []) |
| LIVE | aucun |
| RECETTE | préservée (:3200) |
| Classe | NO RELEASE · STABLE NOT AVAILABLE |

---

## 1. Mandat (résumé exécutable)

Finaliser E4 (compositeur partagé, dictée, transport DET, états, robustesse, a11y) + reliquats bornés E2/E3 ; publier un candidat DEV cohérent sans CI ; Full pack + L3 handoff ; ne pas engager E5.

---

## 2. Git Truth Check

| Contrôle | Résultat |
|---|---|
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD local = distant | `a3305a42b3fd0f24b2a16bca825fc14eb37e84e6` |
| Tree | `72405eddfdd10deea324a5c0dd01a073b30c5f85` |
| Delta depuis base | identifiable exactement `5f2ecad1..a3305a42` |
| Staged inattendu | aucun au départ ; pack tmp retiré du suivi |
| Main | inchangé |
| PR active | [] |
| Force/rebase/reset | non |

Artefact : `.tmp-sfia-review/chatgpt-review.md` **retiré de l'index Git** (fichier local conservé pour Review Pack).

---

## 3. ENV-01

| Lane | Port app | PG | DB | Verdict |
|---|---|---|---|---|
| DEV | 3100 | 5433 | sfia_next_dev | ROUTING COMPLETE |
| Tests mutatifs | — | 5433 | sfia_next_e2e | utilisé Vitest PG |
| RECETTE | 3200 | 5434 | sfia_next_recette_ml4 | non mutée |

Qualify : `SFIA_DICTATION_TRANSPORT=fixture` + `SFIA_DICTATION_SUBSTITUTED=1` + `SFIA_DICTATION_FIXTURE_AUTO_TRANSCRIPT=1` — **aucun fallback LIVE**.

**ENV ROUTING COMPLETE**

---

## 4. Sources lues (sélection)

- Suivi v0.15 §21–22 @ `18cff689` (non modifié)
- Contrats audio CONV-F31…F34 ; as-built ML3 audio ; contrat visuel dictée
- SEF-01/08 ; ENV-01 ; product-versioning
- Code : NoraSharedComposer, ComposerDictationControl, composer-dictation-*, service.ts, page projet/sas, rail, recent consultation
- Figma fileKey `itgvCulInEnFY6DvgIegvP` (lecture)

---

## 5. Répartition SEF-08

| Volet | Responsable | Fichiers |
|---|---|---|
| A E4 | Intégrateur + agent dictation | NoraSharedComposer, ComposerDictationControl, dictation session/fixture/draft, tokens, tests |
| B E2 | Intégrateur | service.ts (ownership/UNKNOWN/reconcile), restitution |
| C E3 | Intégrateur | page projet, Journal, RealizationSurface, recent-consultation, studio-shell.css |
| Docs/publish | Intégrateur | as-built, delivery-history, registre, evidence, handoff |

Aucun agent concurrent sur un même fichier en écriture finale.

---

## 6. Blast radius

- Conversation D3 terminal paths (ownership / reconstitution) — SC2 NR PASS
- Compositeur sas+projet + dictation API (fixture)
- Rail CSS layout 1280×720
- Panneau récents / deep-links exécution
- Prep draft sessionStorage
- Docs construction + evidence PNG

Hors scope : LIVE Realtime, TTS, pièces jointes, FinOps moteur, RECETTE, CI, PR.

---

## 7. Delta E4 (C.1–C.5)

### C.1 Mutualisation
`NoraSharedComposer` : un chemin IME / croissance / lock dictée / admission envoi ; chrome prep vs travail préservé.

### C.2 Croissance & brouillons
Textarea overflowY auto + maxHeight ; prep drafts `sfia.prep.draft:v1` isolés des `sfia.travail.draft` ; sas branché persist/restore/clear.

### C.3 Transport & MP-06 DET
`SESSION_OPEN_TIMEOUT` vs `TRANSPORT_OPEN_FAILED` explicites ; cleanup transport on fail ; erreurs FR mappées UI ; **MP-06 LIVE non soldé** (DET only).

### C.4 États & onde
Analyseur / wave **après** phase `listening` ; pas d'onde fictive en connexion.

### C.5 Robustesse
Tests session partial/timeout/cancel ; fixture queueMicrotask fix ; FinOps substitué inchangé.

---

## 8. Delta E2 §21.1

- ownershipLost mid-wave : conserve capitalisations confirmées (`attempted:true`)
- exception après owner call : UNKNOWN + attempted true
- pending knowledge après perte ownership D5/D6 : SKIPPED explicite enregistré
- terminal TX/CAS miss : `reconcileKnowledgeEffectsFromDurableInfo` (pas d'invention d'intent)

SC2 PG : **4 PASS**.

---

## 9. Delta E3 §21.2

- Multitype : exécution/résultat/bilan via `?attempt=` + `onPilotConsulted` ; Git commit immuable
- Points ouverts : `selectedOpenPointId` focus
- Rail : nav scroll + foot pin ; hit-test 1280×720 sans chevauchement peint
- Restitution : plus de plafond silencieux `slice(0,8)`

---

## 10. Contrat Figma

Voir `projects/sfia-studio-next/construction/evidence/ml5-e4-20261127/figma-runtime-compare.md`.
Dictée : morph in-place (05.18/05.21). Rail F1 246 px. Aucune mutation Figma.

---

## 11. Validations exactes

| Commande | Env/DB | Portée | Résultat | Exit |
|---|---|---|---|---|
| `npx vitest run …nora-shared-composer…dictation-session…` | DEV unit | E4 | PASS 31 | 0 |
| `npx vitest run tests/integration/e2-unified-intent-conduction.pg.test.ts` | sfia_next_e2e@:5433 | E2 SC2 | PASS 4 | 0 |
| `npx vitest run …project-recent-consultation` | unit | E3 | PASS 4 | 0 |
| `npm run qualify:build` | DEV | build | PASS BUILD `NfeXL_KgIuqKGCdf0k4gh` | 0 |
| `playwright …ml3-dictation-nominal-path + integrated` | fixture :3100 | E4 | PASS 4 | 0 |
| `playwright …ml5-e3-panel-rail-capture` | :3100 | E3 | PASS 1 | 0 |
| hit-test rail 1280×720 | :3100 | E3 C-D | PASS (clip) | 0 |
| `git diff --check` | — | delta | clean | 0 |

Préexistants tsc hors delta (activity-hierarchy, etc.) non comptés comme PASS de ce cycle.

---

## 12. Fake / Real

| Fake | Frontière REAL | Parité | Gap |
|---|---|---|---|
| Transport fixture + auto-transcript | admission/session/SSE/UI | chemins API+UI | qualité FR LIVE, latence, MP-06 micro réel |
| Force Nora fixture | restitution fil | — | comportement naturel Nora |
| Audio synthétique analyseur | onde post-listening | analyseur réel | parole humaine |

**DETERMINISTIC PROVEN ≠ READY FOR REAL.** MP-06 non soldé en recette.

---

## 13. Documentation synchronisée

- `as-built-macro-lot-3-audio-20261127.md` §E4
- `delivery-history.md` jalon E4_audio_composer…
- `ml5-registre…` ligne R-E4i
- Evidence `construction/evidence/ml5-e4-20261127/`

---

## 14. Git Review Index

| Path | Action |
|---|---|
| `.tmp-sfia-review/chatgpt-review.md` | **untracked** (git rm --cached) |
| `…/NoraSharedComposer.tsx` | modified |
| `…/ComposerDictationControl.tsx` | modified |
| `…/composer-dictation-session.ts` | modified |
| `…/composer-dictation-transport-fixture.ts` | modified |
| `…/composer-draft.ts` | modified |
| `…/service.ts` | modified |
| `…/knowledge-effect-restitution.ts` | modified |
| `…/page.tsx` (projet + prep) | modified |
| `…/route.ts` prep GET session | modified |
| `…/ProjectJournal.tsx` | modified |
| `…/CursorRealizationSurface.tsx` | modified |
| `…/project-recent-consultation.ts` | modified |
| `…/studio-shell.css` | modified |
| `…/tokens.css` | modified |
| tests unit/qualify | modified |
| construction docs + evidence | modified/added |

### Diffstat `5f2ecad1..a3305a42`

```
 .tmp-sfia-review/chatgpt-review.md                 | 133 ---------
 .../as-built-macro-lot-3-audio-20261127.md         |  13 +
 .../construction/delivery-history.md               |   7 +
 .../ml5-e4-20261127/c01-during-dictation.png       | Bin 0 -> 132135 bytes
 .../evidence/ml5-e4-20261127/composer-extended.png | Bin 0 -> 199342 bytes
 .../evidence/ml5-e4-20261127/composer-idle-mic.png | Bin 0 -> 126341 bytes
 .../evidence/ml5-e4-20261127/composer-short.png    | Bin 0 -> 127080 bytes
 .../evidence/ml5-e4-20261127/f1-rail-project.json  |   6 +
 .../ml5-e4-20261127/figma-runtime-compare.md       |  23 ++
 .../evidence/ml5-e4-20261127/ml3-dict-harness.png  | Bin 0 -> 41351 bytes
 .../ml5-e4-20261127/rail-1280x720-detail.json      | 178 ++++++++++++
 .../ml5-e4-20261127/rail-1280x720-hit.json         |  57 ++++
 .../ml5-e4-20261127/rail-1280x720-measure.json     |  18 ++
 .../ml5-e4-20261127/rail-1280x720-overlap.json     |  26 ++
 .../ml5-e4-20261127/runtime-panel-recents.png      | Bin 0 -> 5308 bytes
 .../ml5-e4-20261127/runtime-travail-1280x720.png   | Bin 0 -> 124006 bytes
 .../ml5-e4-20261127/runtime-travail-full.png       | Bin 0 -> 124006 bytes
 ...5-registre-couverture-et-revue-developpement.md |   1 +
 .../app/api/preparations/[preparationId]/route.ts  |   1 +
 .../src/app/preparations/[preparationId]/page.tsx  |  54 +++-
 .../web/src/app/projects/[projectId]/page.tsx      |  73 ++++-
 .../components/figma/ComposerDictationControl.tsx  | 121 ++++++--
 .../components/figma/CursorRealizationSurface.tsx  |  32 ++-
 .../src/components/figma/NoraSharedComposer.tsx    | 123 ++++----
 .../web/src/components/figma/ProjectJournal.tsx    |  51 +++-
 .../web/src/components/figma/tokens.css            |   9 +
 .../web/src/components/shell/studio-shell.css      |  15 +-
 .../conversation/composer-dictation-session.ts     |  23 +-
 .../composer-dictation-transport-fixture.ts        |  21 +-
 .../web/src/domains/conversation/composer-draft.ts |  87 +++++-
 .../conversation/knowledge-effect-restitution.ts   |   3 +-
 .../web/src/domains/conversation/service.ts        | 309 +++++++++++++++++++--
 .../web/src/lib/project-recent-consultation.ts     |  16 ++
 .../qualify/ml5-e3-panel-rail-capture.spec.ts      |  18 +-
 .../unit/ml3-composer-dictation-session.test.ts    | 128 ++++++---
 .../web/tests/unit/nora-shared-composer.test.ts    |  61 ++++
 .../tests/unit/project-recent-consultation.test.ts |  18 ++
 37 files changed, 1302 insertions(+), 323 deletions(-)

```

### Diff — NoraSharedComposer

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraSharedComposer.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraSharedComposer.tsx
index 5c35d5e2..1e52b336 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraSharedComposer.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraSharedComposer.tsx
@@ -1,6 +1,12 @@
 "use client";

-import { useEffect, useRef, useState } from "react";
+import {
+  useEffect,
+  useRef,
+  useState,
+  type ChangeEvent,
+  type KeyboardEvent,
+} from "react";
 import { ComposerDictationControl } from "@/components/figma/ComposerDictationControl";

 export type NoraSharedComposerProps = {
@@ -25,6 +31,10 @@ export type NoraSharedComposerProps = {
   placeholder?: string;
 };

+/**
+ * Shared composer shell — prep vs travail keep contractual chrome/send rules,
+ * but IME, growth, dictation lock, and send admission share one interaction path (E4 C.1).
+ */
 export function NoraSharedComposer(props: NoraSharedComposerProps) {
   const composerLocked = Boolean(props.composerLocked);
   const hasDossier = Boolean(props.dossierAttachment?.attemptId);
@@ -66,6 +76,36 @@ export function NoraSharedComposer(props: NoraSharedComposerProps) {
       ? "Décrivez votre idée, une question ou une hésitation…"
       : "Écrire à Nora dans ce projet…");

+  function canAdmitSend(): boolean {
+    if (props.busy || composerLocked || dictationActive) return false;
+    if (props.variant === "travail") return Boolean(props.draft.trim() || hasDossier);
+    return Boolean(props.draft.trim());
+  }
+
+  function onTextareaKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
+    // During dictation: never send (Enter or shortcuts).
+    if (composerLocked || dictationActive) {
+      e.preventDefault();
+      return;
+    }
+    if (imeComposing || e.nativeEvent.isComposing) return;
+
+    if (props.variant === "prep") {
+      if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && canAdmitSend()) {
+        e.preventDefault();
+        props.onSend();
+      }
+      return;
+    }
+
+    // Travail: Enter sends on desktop; Shift+Enter newline; mobile keeps Enter as newline.
+    if (isMobile) return;
+    if (e.key === "Enter" && !e.shiftKey && canAdmitSend()) {
+      e.preventDefault();
+      props.onSend();
+    }
+  }
+
   const dictationControl = dictationMount ? (
     <ComposerDictationControl
       projectId={dictationProjectId}
@@ -78,11 +118,30 @@ export function NoraSharedComposer(props: NoraSharedComposerProps) {
     />
   ) : null;

+  const sharedTextareaProps = {
+    ref: textareaRef,
+    value: props.draft,
+    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
+      if (composerLocked || dictationActive) return;
+      props.onDraft(e.target.value);
+    },
+    placeholder,
+    "aria-label": "Message à Nora" as const,
+    rows: 1 as const,
+    readOnly: composerLocked || dictationActive,
+    "data-dictation-hide": dictationActive ? ("1" as const) : undefined,
+    hidden: dictationActive,
+    tabIndex: dictationActive ? -1 : 0,
+    onCompositionStart: () => setImeComposing(true),
+    onCompositionEnd: () => setImeComposing(false),
+    onKeyDown: onTextareaKeyDown,
+  };
+
   if (props.variant === "prep") {
     const expanded = props.draft.includes("\n") || props.draft.length > 80;
     return (
       <div
-        className="sas-composer"
+        className="sas-composer relative"
         data-testid="prep-composer"
         data-dictation-active={dictationActive ? "1" : "0"}
         data-composer-expanded={expanded ? "1" : "0"}
@@ -92,37 +151,16 @@ export function NoraSharedComposer(props: NoraSharedComposerProps) {
                 height: "auto",
                 maxHeight: "min(36vh, 280px)",
                 minHeight: "var(--sas-composer-h)",
+                overflowY: "auto",
               }
             : undefined
         }
       >
         <textarea
-          ref={textareaRef}
+          {...sharedTextareaProps}
           className="sas-composer-input"
-          value={props.draft}
-          onChange={(e) => props.onDraft(e.target.value)}
-          placeholder={placeholder}
-          aria-label="Message à Nora"
           data-testid="prep-draft"
-          rows={1}
           disabled={props.busy || composerLocked}
-          readOnly={composerLocked || dictationActive}
-          hidden={dictationActive}
-          tabIndex={dictationActive ? -1 : 0}
-          data-dictation-hide={dictationActive ? "1" : undefined}
-          onCompositionStart={() => setImeComposing(true)}
-          onCompositionEnd={() => setImeComposing(false)}
-          onKeyDown={(e) => {
-            if (composerLocked || dictationActive) {
-              e.preventDefault();
-              return;
-            }
-            if (imeComposing || e.nativeEvent.isComposing) return;
-            if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
-              e.preventDefault();
-              if (props.draft.trim()) props.onSend();
-            }
-          }}
         />
         <div
           className="sas-composer-bar"
@@ -145,7 +183,9 @@ export function NoraSharedComposer(props: NoraSharedComposerProps) {
               type="button"
               className="sas-composer-send"
               disabled={sendDisabled}
-              onClick={props.onSend}
+              onClick={() => {
+                if (canAdmitSend()) props.onSend();
+              }}
               data-testid="prep-send"
               aria-label="Envoyer le message"
               data-dictation-hide={dictationActive ? "1" : undefined}
@@ -251,41 +291,20 @@ export function NoraSharedComposer(props: NoraSharedComposerProps) {
           +
         </span>
         <textarea
-          ref={textareaRef}
+          {...sharedTextareaProps}
           className="fig-travail-composer-input"
-          value={props.draft}
-          onChange={(e) => props.onDraft(e.target.value)}
-          placeholder={placeholder}
-          aria-label="Message à Nora"
           data-testid="thread-draft"
-          rows={1}
-          readOnly={composerLocked || dictationActive}
           disabled={composerLocked}
           aria-disabled={composerLocked || dictationActive}
-          data-dictation-hide={dictationActive ? "1" : undefined}
-          hidden={dictationActive}
-          tabIndex={dictationActive ? -1 : 0}
-          onCompositionStart={() => setImeComposing(true)}
-          onCompositionEnd={() => setImeComposing(false)}
-          onKeyDown={(e) => {
-            if (composerLocked || dictationActive) {
-              e.preventDefault();
-              return;
-            }
-            if (imeComposing || e.nativeEvent.isComposing) return;
-            if (isMobile) return;
-            if (e.key === "Enter" && !e.shiftKey && !props.busy) {
-              e.preventDefault();
-              if (props.draft.trim() || hasDossier) props.onSend();
-            }
-          }}
         />
         {dictationControl}
         <button
           type="button"
           className="fig-travail-composer-send"
           disabled={sendDisabled}
-          onClick={props.onSend}
+          onClick={() => {
+            if (canAdmitSend()) props.onSend();
+          }}
           data-testid="thread-send"
           aria-label="Envoyer"
           data-dictation-hide={dictationActive ? "1" : undefined}
@@ -309,4 +328,4 @@ export function NoraSharedComposer(props: NoraSharedComposerProps) {
       ) : null}
     </div>
   );
-}
\ No newline at end of file
+}

```

### Diff — ComposerDictationControl

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx b/projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx
index 3816895e..ef08f4a2 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx
@@ -108,6 +108,38 @@ function figmaState(
   return undefined;
 }

+/** Map server/admission codes to explicit pilot-facing French errors (MP-06 DET). */
+export function dictationClientErrorMessage(input: {
+  code?: string | null;
+  message?: string | null;
+  fallback?: string;
+}): string {
+  const code = (input.code || "").trim();
+  const raw = (input.message || "").trim();
+  const fromCode =
+    code === "SESSION_OPEN_TIMEOUT" || raw === "SESSION_OPEN_TIMEOUT"
+      ? "Connexion dictée expirée — réessayez ou utilisez le clavier"
+      : code === "TRANSPORT_OPEN_FAILED"
+        ? "Transport dictée indisponible — réessayez ou utilisez le clavier"
+        : code === "FLAG_OFF"
+          ? "Dictée non activée sur cet environnement"
+          : code === "CONCURRENCY_LIMIT"
+            ? "Une dictée est déjà en cours"
+            : code === "FIXTURE_NOT_ADMITTED" || code === "SUBSTITUTED_TRANSPORT_MISSING"
+              ? "Dictée de test non admise sur cet environnement"
+              : code === "TRANSPORT_UNKNOWN"
+                ? "Configuration dictée incohérente"
+                : code === "NO_PROVIDER_KEY" || code === "LANE_GUARD"
+                  ? "Dictée indisponible (clé ou voie non admise)"
+                  : code === "INVALID_SCOPE" || code === "FORBIDDEN"
+                    ? "Dictée refusée pour ce contexte"
+                    : "";
+  if (fromCode) return fromCode;
+  if (raw && raw !== code) return raw.slice(0, 160);
+  if (code) return code.slice(0, 160);
+  return input.fallback || "Impossible de démarrer la dictée";
+}
+
 export function ComposerDictationControl(props: ComposerDictationControlProps) {
   const apiBase = useMemo(
     () => dictationApiBase({ projectId: props.projectId, preparationId: props.preparationId }),
@@ -184,7 +216,21 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
     setBarHeights(Array.from({ length: WAVE_BARS }, () => 0.12));
   }, []);

-  useEffect(() => () => stopMedia(), [stopMedia]);
+  // C.5 — unmount isolates session: bump generation, cancel remote, free mic/AudioContext/SSE.
+  useEffect(() => {
+    return () => {
+      generationRef.current += 1;
+      const sid = sessionIdRef.current;
+      sessionIdRef.current = null;
+      stopMedia();
+      if (sid && apiBase) {
+        void fetch(`${apiBase}/sessions/${encodeURIComponent(sid)}/cancel`, {
+          method: "POST",
+          keepalive: true,
+        }).catch(() => undefined);
+      }
+    };
+  }, [apiBase, stopMedia]);

   const drainUploads = useCallback(async () => {
     await uploadChainRef.current;
@@ -312,6 +358,7 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
         if (early?.sessionId) {
           void cancelSessionRemote(early.sessionId);
         }
+        setPhase("idle");
         return;
       }
       const created = (await createRes.json()) as {
@@ -323,12 +370,19 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
       if (!createRes.ok || !created.ok || !created.sessionId) {
         stopMedia();
         setPhase("error");
-        setError(created.message || created.code || "Session refusée");
+        setError(
+          dictationClientErrorMessage({
+            code: created.code,
+            message: created.message,
+            fallback: "Session refusée",
+          }),
+        );
         return;
       }
       if (aborted()) {
         stopMedia();
         void cancelSessionRemote(created.sessionId);
+        setPhase("idle");
         return;
       }
       sessionIdRef.current = created.sessionId;
@@ -338,6 +392,15 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
         `${apiBase}/sessions/${encodeURIComponent(created.sessionId)}/events`,
       );
       esRef.current = es;
+      es.onerror = () => {
+        if (aborted() || captureStoppedRef.current) return;
+        // EventSource also errors during reconnect — only fail when permanently closed.
+        if (es.readyState !== EventSource.CLOSED) return;
+        failCapture("Flux dictée interrompu — réessayez ou utilisez le clavier");
+        stopMedia();
+        void cancelSessionRemote(sessionIdRef.current);
+        sessionIdRef.current = null;
+      };
       es.onmessage = (msg) => {
         if (aborted()) return;
         try {
@@ -378,14 +441,20 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
             );
           }
           if (ev.type === "session.error") {
-            setError(ev.message || ev.code || "Erreur de dictée");
+            setError(
+              dictationClientErrorMessage({
+                code: ev.code,
+                message: ev.message,
+                fallback: "Erreur de dictée",
+              }),
+            );
             setPhase("error");
             stopMedia();
             void cancelSessionRemote(sessionIdRef.current);
             sessionIdRef.current = null;
           }
           if (ev.type === "session.expired") {
-            setError("Session expirée");
+            setError("Session expirée — la dictée a été interrompue");
             setPhase("error");
             stopMedia();
             sessionIdRef.current = null;
@@ -401,6 +470,7 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
         stopMedia();
         void cancelSessionRemote(created.sessionId);
         sessionIdRef.current = null;
+        setPhase("idle");
         return;
       }
       audioCtxRef.current = audioCtx;
@@ -410,24 +480,6 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
       analyserRef.current = analyser;
       source.connect(analyser);

-      const freqData = new Uint8Array(analyser.frequencyBinCount);
-      const tick = () => {
-        if (aborted() || captureStoppedRef.current) return;
-        if (sessionStartRef.current != null) {
-          setElapsedMs(Date.now() - sessionStartRef.current);
-        }
-        analyser.getByteFrequencyData(freqData);
-        const nextBars: number[] = [];
-        const step = Math.max(1, Math.floor(freqData.length / WAVE_BARS));
-        for (let i = 0; i < WAVE_BARS; i++) {
-          const v = freqData[i * step] ?? 0;
-          nextBars.push(Math.max(0.12, (v / 255) * 1.15));
-        }
-        setBarHeights(nextBars);
-        rafRef.current = requestAnimationFrame(tick);
-      };
-      rafRef.current = requestAnimationFrame(tick);
-
       const processor = audioCtx.createScriptProcessor(4096, 1, 1);
       processorRef.current = processor;
       const mute = audioCtx.createGain();
@@ -447,11 +499,33 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
         stopMedia();
         void cancelSessionRemote(created.sessionId);
         sessionIdRef.current = null;
+        setPhase("idle");
         return;
       }
+      // C.4 — analyser wave only after listening is established (not during connexion).
       setPhase("listening");
+      const freqData = new Uint8Array(analyser.frequencyBinCount);
+      const tick = () => {
+        if (aborted() || captureStoppedRef.current) return;
+        if (sessionStartRef.current != null) {
+          setElapsedMs(Date.now() - sessionStartRef.current);
+        }
+        analyser.getByteFrequencyData(freqData);
+        const nextBars: number[] = [];
+        const step = Math.max(1, Math.floor(freqData.length / WAVE_BARS));
+        for (let i = 0; i < WAVE_BARS; i++) {
+          const v = freqData[i * step] ?? 0;
+          nextBars.push(Math.max(0.12, (v / 255) * 1.15));
+        }
+        setBarHeights(nextBars);
+        rafRef.current = requestAnimationFrame(tick);
+      };
+      rafRef.current = requestAnimationFrame(tick);
     } catch (e) {
-      if (aborted()) return;
+      if (aborted()) {
+        setPhase("idle");
+        return;
+      }
       stopMedia();
       setPhase("error");
       setError(
@@ -465,6 +539,7 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
   }, [
     cancelSessionRemote,
     enqueueAudio,
+    failCapture,
     props.disabled,
     props.enabled,
     props.draft,

```

### Diff — dictation domain (session/draft/fixture)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts b/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
index 67c1755c..7e6838c9 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
@@ -346,12 +346,15 @@ export async function createDictationSession(input: {
     }
     record.transport = transport;
     transport.onEvent((event) => handleProviderEvent(record, event));
+    let providerReady = false;
     const sessionReady = new Promise<void>((resolve, reject) => {
       const t = setTimeout(() => {
         record.onProviderSessionReady = null;
         reject(new Error("SESSION_OPEN_TIMEOUT"));
       }, SESSION_OPEN_TIMEOUT_MS);
       record.onProviderSessionReady = () => {
+        if (providerReady) return;
+        providerReady = true;
         clearTimeout(t);
         record.onProviderSessionReady = null;
         resolve();
@@ -380,17 +383,27 @@ export async function createDictationSession(input: {
     emit(record, { type: "session.open", sessionId });
     return { ok: true, session: record };
   } catch (e) {
+    const rawMessage =
+      e instanceof Error ? e.message.slice(0, 240) : "TRANSPORT_OPEN_FAILED";
+    const timedOut = rawMessage === "SESSION_OPEN_TIMEOUT";
+    const code = timedOut ? "SESSION_OPEN_TIMEOUT" : "TRANSPORT_OPEN_FAILED";
     record.status = "failed";
-    record.errorCode = "TRANSPORT_OPEN_FAILED";
-    const message = e instanceof Error ? e.message.slice(0, 240) : "TRANSPORT_OPEN_FAILED";
+    record.errorCode = code;
+    try {
+      record.transport?.close();
+    } catch {
+      /* */
+    }
+    record.transport = null;
+    record.onProviderSessionReady = null;
     emit(record, {
       type: "session.error",
       sessionId,
-      code: "TRANSPORT_OPEN_FAILED",
-      message,
+      code,
+      message: rawMessage,
     });
     void recordDictationFinops(record, "failed");
-    return { ok: false, code: "TRANSPORT_OPEN_FAILED", message };
+    return { ok: false, code, message: rawMessage };
   }
 }

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-transport-fixture.ts b/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-transport-fixture.ts
index 63da7f3e..98d58de5 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-transport-fixture.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-transport-fixture.ts
@@ -42,18 +42,30 @@ export function _resetDictationFixtureRegistry(): void {
 export function createFixtureRealtimeTransport(sessionId: string): RealtimeTransport {
   let handler: ((ev: Record<string, unknown>) => void) | null = null;
   const sent: Record<string, unknown>[] = [];
+  /** Queued until onEvent registers — avoids lost session.updated (MP-06 DET). */
+  let pendingReady: Record<string, unknown> | null = null;
   const handle: DictationFixtureHandle = {
     sent,
     push: (ev) => handler?.(ev),
   };
   fixtureRegistry.set(sessionId, handle);
   let commitOrdinal = 0;
+  const emitOrQueue = (ev: Record<string, unknown>) => {
+    if (handler) {
+      handler(ev);
+      return;
+    }
+    if (ev.type === "session.updated" || ev.type === "session.created") {
+      pendingReady = ev;
+    }
+  };
   return {
     send: (p) => {
       sent.push(p);
       if (p.type === "session.update") {
+        // Deterministic ready ack — never rely on live provider timing in fixture.
         queueMicrotask(() => {
-          handler?.({ type: "session.updated" });
+          emitOrQueue({ type: "session.updated" });
         });
       }
       // Simulate provider item creation after buffer commit (turn_detection: null).
@@ -107,9 +119,16 @@ export function createFixtureRealtimeTransport(sessionId: string): RealtimeTrans
     },
     close: () => {
       // Keep handle for DEV fixture-push (late events after cancel — C03).
+      // Drop further ready acks; late commit/transcript still pushable via registry.
+      pendingReady = null;
     },
     onEvent: (h) => {
       handler = h;
+      if (pendingReady) {
+        const ready = pendingReady;
+        pendingReady = null;
+        queueMicrotask(() => handler?.(ready));
+      }
     },
   };
 }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/composer-draft.ts b/projects/sfia-studio-next/web/src/domains/conversation/composer-draft.ts
index 38c50283..aa3e7848 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/composer-draft.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/composer-draft.ts
@@ -1,6 +1,7 @@
 /**
  * Ensemble 05 / M3 — composer draft in sessionStorage (tab-scoped).
- * Partition: pilot + project + lane. No server sync. No cross-device recovery.
+ * Partition: pilot + (project | preparation) + lane. No server sync. No cross-device recovery.
+ * C.2 — project and prep drafts never share a key (isolation pilot/project/prep).
  */

 export type ComposerDraftRecord = {
@@ -16,6 +17,18 @@ export type ComposerDraftRecord = {
   updatedAt: string;
 };

+/** Prep (sas) draft — separate namespace from travail project drafts. */
+export type PrepComposerDraftRecord = {
+  schemaVersion: "e05-prep-composer-draft-v1";
+  pilotId: string;
+  preparationId: string;
+  lane: string;
+  text: string;
+  version: number;
+  sentVersion: number | null;
+  updatedAt: string;
+};
+
 export function studioClientLane(): string {
   if (typeof window === "undefined") return "ssr";
   const port = window.location.port || (window.location.protocol === "https:" ? "443" : "80");
@@ -32,6 +45,62 @@ export function composerDraftStorageKey(input: {
   return `sfia.travail.draft:v1:${lane}:${input.pilotId}:${input.projectId}`;
 }

+export function prepComposerDraftStorageKey(input: {
+  pilotId: string;
+  preparationId: string;
+  lane?: string;
+}): string {
+  const lane = input.lane ?? studioClientLane();
+  return `sfia.prep.draft:v1:${lane}:${input.pilotId}:${input.preparationId}`;
+}
+
+export function readPrepComposerDraft(input: {
+  pilotId: string;
+  preparationId: string;
+  lane?: string;
+}): PrepComposerDraftRecord | null {
+  if (typeof sessionStorage === "undefined") return null;
+  if (!input.pilotId || !input.preparationId) return null;
+  try {
+    const raw = sessionStorage.getItem(prepComposerDraftStorageKey(input));
+    if (!raw) return null;
+    const parsed = JSON.parse(raw) as PrepComposerDraftRecord;
+    if (parsed.schemaVersion !== "e05-prep-composer-draft-v1") return null;
+    if (
+      parsed.pilotId !== input.pilotId ||
+      parsed.preparationId !== input.preparationId
+    ) {
+      return null;
+    }
+    const lane = input.lane ?? studioClientLane();
+    if (parsed.lane !== lane) return null;
+    return parsed;
+  } catch {
+    return null;
+  }
+}
+
+export function writePrepComposerDraft(record: PrepComposerDraftRecord): void {
+  if (typeof sessionStorage === "undefined") return;
+  sessionStorage.setItem(
+    prepComposerDraftStorageKey({
+      pilotId: record.pilotId,
+      preparationId: record.preparationId,
+      lane: record.lane,
+    }),
+    JSON.stringify(record),
+  );
+}
+
+export function clearPrepComposerDraft(input: {
+  pilotId: string;
+  preparationId: string;
+  lane?: string;
+}): void {
+  if (typeof sessionStorage === "undefined") return;
+  sessionStorage.removeItem(prepComposerDraftStorageKey(input));
+}
+
 export function readComposerDraft(input: {
   pilotId: string;
   projectId: string;
@@ -92,27 +161,33 @@ export function clearDraftAfterAck(input: {

 export function purgeComposerDraftsForPilot(pilotId: string): void {
   if (typeof sessionStorage === "undefined") return;
-  const prefix = "sfia.travail.draft:v1:";
+  const prefixes = ["sfia.travail.draft:v1:", "sfia.prep.draft:v1:"];
   const keys: string[] = [];
   for (let i = 0; i < sessionStorage.length; i += 1) {
     const k = sessionStorage.key(i);
-    if (k && k.startsWith(prefix) && k.includes(`:${pilotId}:`)) keys.push(k);
+    if (
+      k &&
+      prefixes.some((p) => k.startsWith(p)) &&
+      k.includes(`:${pilotId}:`)
+    ) {
+      keys.push(k);
+    }
   }
   for (const k of keys) sessionStorage.removeItem(k);
 }

 /**
  * C3 — explicit logout / identity switch in the same tab.
- * Clears every Travail draft key in this tab's sessionStorage.
+ * Clears every Travail + prep draft key in this tab's sessionStorage.
  * Does not touch other origins or localStorage.
  */
 export function purgeAllComposerDraftsInTab(): void {
   if (typeof sessionStorage === "undefined") return;
-  const prefix = "sfia.travail.draft:v1:";
+  const prefixes = ["sfia.travail.draft:v1:", "sfia.prep.draft:v1:"];
   const keys: string[] = [];
   for (let i = 0; i < sessionStorage.length; i += 1) {
     const k = sessionStorage.key(i);
-    if (k && k.startsWith(prefix)) keys.push(k);
+    if (k && prefixes.some((p) => k.startsWith(p))) keys.push(k);
   }
   for (const k of keys) sessionStorage.removeItem(k);
 }

```

### Diff — service.ts (E2 ownership / reconcile)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index f3cb1f17..acef44f6 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -898,6 +898,155 @@ export function extractDurablePilotageIntentIds(input: {
   return [...ids];
 }

+type KnowledgeCapRow = {
+  intentId?: string;
+  status: string;
+  kind?: string;
+  id?: string;
+  reason?: string;
+};
+
+/**
+ * E2 residual fidelity (§21.1) — reconcile knowledgeEffects on UNKNOWN / ownership-loss
+ * paths from durable capitalisation rows + DB reconstitution. Never invents mutations:
+ * upgrades false-negative SKIPPED/NOT_EXECUTED only when an owner row (or DB-confirmed
+ * ownerRef) already exists; lookup/replay remain read-only callers.
+ */
+export function reconcileKnowledgeEffectsFromDurableInfo(input: {
+  effects: TurnKnowledgeEffect[];
+  capitalisationRows?: KnowledgeCapRow[] | null;
+  reconstituted?: Array<{ id: string; kind?: string; status?: string }> | null;
+}): TurnKnowledgeEffect[] {
+  const byIntent = new Map<string, TurnKnowledgeEffect>();
+  for (const e of input.effects) {
+    const id = e.semanticIntentId?.trim();
+    if (id) byIntent.set(id, { ...e });
+  }
+  const reconstitutedIds = new Set(
+    (input.reconstituted ?? []).map((r) => r.id).filter(Boolean),
+  );
+
+  const capRows = input.capitalisationRows ?? [];
+  const intentIds = new Set<string>();
+  for (const row of capRows) {
+    const id = row.intentId?.trim();
+    if (id) intentIds.add(id);
+  }
+
+  const isOkStatus = (s: string) => {
+    const u = (s ?? "").toUpperCase();
+    return u === "AVAILABLE" || u === "OK" || u === "SUCCESS" || u === "APPLIED";
+  };
+
+  for (const intentId of intentIds) {
+    const related = capRows.filter((c) => c.intentId === intentId);
+    if (related.length === 0) continue;
+
+    const outcome = crossCapOutcomeFromCapitalisations({
+      intentId,
+      capitalisations: related,
+      hadProposal: true,
+      ownershipLost: false,
+    });
+    const primary = related.find(
+      (c) =>
+        (c.kind === "subject" ||
+          c.kind === "acquis" ||
+          c.kind === "open_point" ||
+          !c.kind) &&
+        isOkStatus(c.status) &&
+        typeof c.id === "string" &&
+        c.id.length > 0,
+    );
+    const ownerRef =
+      primary && typeof primary.id === "string"
+        ? primary.id
+        : related.find((c) => typeof c.id === "string" && c.id.length > 0)?.id ??
+          null;
+
+    const dbConfirms =
+      reconstitutedIds.size === 0 ||
+      (ownerRef != null && reconstitutedIds.has(ownerRef)) ||
+      related.some((r) => r.id != null && reconstitutedIds.has(r.id));
+
+    // Only materialise / upgrade when we have a real owner outcome — never invent APPLIED.
+    const confirmed =
+      (outcome === "APPLIED" || outcome === "PARTIAL") &&
+      ownerRef != null &&
+      dbConfirms;
+    if (!confirmed && outcome !== "FAILED") continue;
+    if (outcome === "FAILED" && !related.some((r) => isOkStatus(r.status))) {
+      // FAILED without any success row: keep existing honest record; do not invent.
+      continue;
+    }
+    if (!confirmed) continue;
+
+    const existing = byIntent.get(intentId);
+    const existingStatus = (existing?.status ?? "").toUpperCase();
+    const alreadyConfirmed =
+      existing?.attempted === true &&
+      (existingStatus === "APPLIED" ||
+        existingStatus === "AVAILABLE" ||
+        existingStatus === "OK" ||
+        existingStatus === "PARTIAL");
+    if (alreadyConfirmed) {
+      if (existing && !existing.ownerRef && ownerRef) {
+        byIntent.set(intentId, { ...existing, ownerRef });
+      }
+      continue;
+    }
+
+    // Upgrade false-negative SKIPPED / NOT_EXECUTED / UNKNOWN when durable owner ref exists.
+    byIntent.set(
+      intentId,
+      knowledgeEffectFromCapitalisation({
+        intentId,
+        status: outcome,
+        proposalKind: existing?.proposalKind ?? null,
+        ownerRef,
+        reason:
+          primary && typeof primary.reason === "string"
+            ? primary.reason || null
+            : (existing?.reason ?? null),
+        reasonCode: existing?.reasonCode ?? null,
+        attempted: true,
+      }),
+    );
+  }
+
+  // OwnerRef already on an effect and present in DB reconstitution → promote attempted.
+  if (reconstitutedIds.size > 0) {
+    for (const [intentId, e] of byIntent) {
+      if (!e.ownerRef || !reconstitutedIds.has(e.ownerRef)) continue;
+      const st = (e.status ?? "").toUpperCase();
+      if (
+        e.attempted &&
+        (st === "APPLIED" || st === "AVAILABLE" || st === "OK" || st === "PARTIAL")
+      ) {
+        continue;
+      }
+      if (
+        !e.attempted ||
+        st === "SKIPPED" ||
+        st === "NOT_EXECUTED" ||
+        st === "UNKNOWN"
+      ) {
+        byIntent.set(intentId, {
+          ...e,
+          attempted: true,
+          status:
+            st === "SKIPPED" || st === "NOT_EXECUTED" || st === "UNKNOWN"
+              ? "APPLIED"
+              : e.status,
+          reasonCode: e.reasonCode === "OWNERSHIP_LOST" ? null : e.reasonCode,
+        });
+      }
+    }
+  }
+
+  return [...byIntent.values()];
+}
+
 async function resolvePilotageEffectForReplay(input: {
   pilotId: string;
   projectId: string | null | undefined;
@@ -2324,22 +2473,69 @@ export async function postUserMessageAndNora(
             };
             if (step.ownershipLost) {
               ownershipLostBeforeD4 = true;
+              // Preserve confirmed D4 owner outcomes from this step; only mark
+              // intents without a confirmed row as SKIPPED (E2 §21.1).
               for (const id of runnableIds) {
-                ownerOutcomeByIntentId.set(id, "SKIPPED");
                 pending.delete(id);
-                recordKnowledgeEffect(
-                  knowledgeEffectNotExecuted({
-                    intentId: id,
-                    status: "SKIPPED",
-                    reason:
-                      "Propriété du tour perdue pendant la capitalisation D4 — effet non exécuté.",
-                    reasonCode: "OWNERSHIP_LOST",
-                    proposalKind: proposalKindByIntentId.get(id) ?? null,
-                  }),
+                const proposalsForIntent = proposalsForWave.filter(
+                  (p) => p.intentId === id,
+                );
+                const primary = step.capitalisations.find(
+                  (c) =>
+                    c.intentId === id &&
+                    (c.kind === "subject" ||
+                      c.kind === "acquis" ||
+                      c.kind === "open_point") &&
+                    (c.status === "AVAILABLE" || c.status === "OK"),
                 );
+                if (primary) {
+                  const outcome = crossCapOutcomeFromCapitalisations({
+                    intentId: id,
+                    capitalisations: step.capitalisations,
+                    hadProposal: proposalsForIntent.length > 0,
+                    ownershipLost: false,
+                    proposalKind: proposalsForIntent[0]?.kind ?? null,
+                  });
+                  ownerOutcomeByIntentId.set(id, outcome);
+                  recordKnowledgeEffect(
+                    knowledgeEffectFromCapitalisation({
+                      intentId: id,
+                      status: outcome,
+                      proposalKind: proposalsForIntent[0]?.kind ?? null,
+                      ownerRef:
+                        typeof primary.id === "string" ? primary.id : null,
+                      reason:
+                        "reason" in primary
+                          ? String((primary as { reason?: string }).reason ?? "") ||
+                            null
+                          : null,
+                      attempted: true,
+                    }),
+                  );
+                  if (
+                    primary.kind === "subject" &&
+                    typeof primary.id === "string" &&
+                    primary.id.startsWith("subj_")
+                  ) {
+                    createdSubjectByIntentId.set(id, primary.id);
+                  }
+                } else {
+                  ownerOutcomeByIntentId.set(id, "SKIPPED");
+                  recordKnowledgeEffect(
+                    knowledgeEffectNotExecuted({
+                      intentId: id,
+                      status: "SKIPPED",
+                      reason:
+                        "Propriété du tour perdue pendant la capitalisation D4 — effet non exécuté.",
+                      reasonCode: "OWNERSHIP_LOST",
+                      proposalKind: proposalKindByIntentId.get(id) ?? null,
+                    }),
+                  );
+                }
               }
-              for (const id of pending) {
+              for (const id of [...pending]) {
                 ownerOutcomeByIntentId.set(id, "SKIPPED");
+                pending.delete(id);
                 const family = familyById.get(id);
                 if (family === "pilotage") {
                   const binding = bindingByIntentId.get(id);
@@ -2431,17 +2627,33 @@ export async function postUserMessageAndNora(
           capitalisationError = "CAPITALISATION_EXCEPTION";
           for (const id of knowledgeIds) {
             if (ownerOutcomeByIntentId.has(id)) continue;
-            ownerOutcomeByIntentId.set(id, "FAILED");
+            // Owner call may already have started (knowledgeEffectsConducted) —
+            // never claim attempted=false after a launched proprietary call.
+            ownerOutcomeByIntentId.set(id, knowledgeEffectsConducted ? "UNKNOWN" : "FAILED");
             pending.delete(id);
-            recordKnowledgeEffect(
-              knowledgeEffectNotExecuted({
-                intentId: id,
-                status: "FAILED",
-                reason: "Exception pendant la capitalisation D4.",
-                reasonCode: "CAPITALISATION_EXCEPTION",
-                proposalKind: proposalKindByIntentId.get(id) ?? null,
-              }),
-            );
+            if (knowledgeEffectsConducted) {
+              recordKnowledgeEffect(
+                knowledgeEffectFromCapitalisation({
+                  intentId: id,
+                  status: "UNKNOWN",
+                  attempted: true,
+                  proposalKind: proposalKindByIntentId.get(id) ?? null,
+                  reason:
+                    "Exception après appel propriétaire D4 — résultat indéterminé.",
+                  reasonCode: "CAPITALISATION_EXCEPTION",
+                }),
+              );
+            } else {
+              recordKnowledgeEffect(
+                knowledgeEffectNotExecuted({
+                  intentId: id,
+                  status: "FAILED",
+                  reason: "Exception pendant la capitalisation D4.",
+                  reasonCode: "CAPITALISATION_EXCEPTION",
+                  proposalKind: proposalKindByIntentId.get(id) ?? null,
+                }),
+              );
+            }
           }
         }
       }
@@ -2627,6 +2839,18 @@ export async function postUserMessageAndNora(
                     },
                   });
                 }
+              } else if (family === "knowledge") {
+                // Explicit D4 pending after mid-wave ownership loss (E2 §21.1).
+                recordKnowledgeEffect(
+                  knowledgeEffectNotExecuted({
+                    intentId: remId,
+                    status: "SKIPPED",
+                    reason:
+                      "Propriété du tour perdue après D5/D6 — effet D4 restant non exécuté.",
+                    reasonCode: "OWNERSHIP_LOST",
+                    proposalKind: proposalKindByIntentId.get(remId) ?? null,
+                  }),
+                );
               }
               pending.delete(remId);
             }
@@ -4884,6 +5108,24 @@ export async function postUserMessageAndNora(
       generationId: reply.generationId,
       userMessageId: reserved.userMessageId,
     });
+    // ConfirmedD4Effect has no intentId — promote attempted/ownerRef only; never invent intents.
+    const reconciledKnowledge = reconcileKnowledgeEffectsFromDurableInfo({
+      effects: resultPayload.knowledgeEffects ?? knowledgeEffectRecords,
+      capitalisationRows: knowledgeEffectRecords
+        .filter((e) => e.semanticIntentId && e.ownerRef)
+        .map((e) => ({
+          intentId: e.semanticIntentId,
+          status: e.status,
+          kind: e.proposalKind ?? undefined,
+          id: e.ownerRef ?? undefined,
+          reason: e.reason ?? undefined,
+        })),
+      reconstituted: reconstituted.capitalisation.map((c) => ({
+        id: c.id,
+        kind: c.kind,
+        status: c.status,
+      })),
+    });
     return {
       ...resultPayload,
       status: "UNKNOWN",
@@ -4891,6 +5133,10 @@ export async function postUserMessageAndNora(
       capitalisation: reconstituted.capitalisation,
       capitalisationLimit: reconstituted.capitalisationLimit,
       documentSave: reconstituted.documentSave,
+      knowledgeEffects:
+        reconciledKnowledge.length > 0
+          ? reconciledKnowledge
+          : resultPayload.knowledgeEffects,
     };
   }

@@ -4909,6 +5155,23 @@ export async function postUserMessageAndNora(
       generationId: reply.generationId,
       userMessageId: reserved.userMessageId,
     });
+    const reconciledKnowledge = reconcileKnowledgeEffectsFromDurableInfo({
+      effects: resultPayload.knowledgeEffects ?? knowledgeEffectRecords,
+      capitalisationRows: knowledgeEffectRecords
+        .filter((e) => e.semanticIntentId && e.ownerRef)
+        .map((e) => ({
+          intentId: e.semanticIntentId,
+          status: e.status,
+          kind: e.proposalKind ?? undefined,
+          id: e.ownerRef ?? undefined,
+          reason: e.reason ?? undefined,
+        })),
+      reconstituted: reconstituted.capitalisation.map((c) => ({
+        id: c.id,
+        kind: c.kind,
+        status: c.status,
+      })),
+    });
     return {
       ...resultPayload,
       status: "UNKNOWN",
@@ -4916,6 +5179,10 @@ export async function postUserMessageAndNora(
       capitalisation: reconstituted.capitalisation,
       capitalisationLimit: reconstituted.capitalisationLimit,
       documentSave: reconstituted.documentSave,
+      knowledgeEffects:
+        reconciledKnowledge.length > 0
+          ? reconciledKnowledge
+          : resultPayload.knowledgeEffects,
       preparationProjection: { status: "SKIPPED_OWNERSHIP" },
     };
   }

```

### Diff — E3 workspace (pages/rail/journal/realization/recent)

```diff
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index af02fe12..5017f2b4 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -23,6 +23,12 @@ import {
   sasPresentationCopy,
 } from "@/components/figma/sas-presentation";
 import { projectActivityLabel } from "@/domains/conversation/activity-labels";
+import {
+  clearPrepComposerDraft,
+  readPrepComposerDraft,
+  studioClientLane,
+  writePrepComposerDraft,
+} from "@/domains/conversation/composer-draft";

 type Msg = { id: string; role: string; content: string; status: string };
 type Doc = {
@@ -61,6 +67,8 @@ export default function PreparationPage() {
   const [docs, setDocs] = useState<Doc[]>([]);
   const [knowledge, setKnowledge] = useState<Knowledge | null>(null);
   const [draft, setDraft] = useState("");
+  const [pilotId, setPilotId] = useState<string | null>(null);
+  const draftVersionRef = useRef(0);
   const [docText, setDocText] = useState("# Notes du sas\n");
   const [docId, setDocId] = useState<string | undefined>();
   const [baseRevisionId, setBaseRevisionId] = useState<string | undefined>();
@@ -299,6 +307,22 @@ export default function PreparationPage() {
     }
   }, [preparationId]);

+  function persistPrepDraft(text: string) {
+    if (!pilotId) return;
+    draftVersionRef.current += 1;
+    const prior = readPrepComposerDraft({ pilotId, preparationId });
+    writePrepComposerDraft({
+      schemaVersion: "e05-prep-composer-draft-v1",
+      pilotId,
+      preparationId,
+      lane: studioClientLane(),
+      text,
+      version: draftVersionRef.current,
+      sentVersion: prior?.sentVersion ?? null,
+      updatedAt: new Date().toISOString(),
+    });
+  }
+
   const reload = useCallback(async () => {
     const res = await fetch(`/api/preparations/${preparationId}`);
     if (res.status === 401) {
@@ -306,6 +330,27 @@ export default function PreparationPage() {
       return;
     }
     const j = await res.json();
+    const sessionPilotId =
+      typeof j.session?.pilotId === "string" && j.session.pilotId.trim()
+        ? String(j.session.pilotId)
+        : null;
+    setPilotId(sessionPilotId);
+    if (sessionPilotId) {
+      const record = readPrepComposerDraft({
+        pilotId: sessionPilotId,
+        preparationId,
+      });
+      if (record?.text && record.pilotId === sessionPilotId) {
+        setDraft(record.text);
+        draftVersionRef.current = record.version;
+      } else {
+        setDraft("");
+        draftVersionRef.current = 0;
+      }
+    } else {
+      setDraft("");
+      draftVersionRef.current = 0;
+    }
     setMessages(j.messages ?? []);
     setDocs(j.documents ?? []);
     setPreviewName(j.preparation?.previewName ?? "");
@@ -397,6 +442,10 @@ export default function PreparationPage() {
       ];
     });
     setDraft("");
+    if (pilotId) {
+      clearPrepComposerDraft({ pilotId, preparationId });
+      draftVersionRef.current = 0;
+    }
     let lastActivitySeq = 0;
     let knownTurnCommandId: string | null = null;
     const pollEpoch = ++activityPollEpochRef.current;
@@ -1031,7 +1080,10 @@ export default function PreparationPage() {
             draft={draft}
             busy={busy}
             noraActivity={noraActivity}
-            onDraftChange={setDraft}
+            onDraftChange={(v) => {
+              setDraft(v);
+              persistPrepDraft(v);
+            }}
             onSend={() => void sendMessage()}
             showResumeBanner={isResumedPrep}
             liveActivityEvents={liveActivityEvents}
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 905a45eb..e22b8e89 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -450,8 +450,17 @@ export default function ProjectPage() {
       setRecentItems([]);
       return;
     }
-    setRecentItems(readProjectRecentItems(pilotId, params.projectId));
-  }, [pilotId, params.projectId]);
+    const stored = readProjectRecentItems(pilotId, params.projectId);
+    // Drop Nora docs no longer present in the authorized library (rights/access).
+    const docIds = new Set(documents.map((d) => d.document.id));
+    setRecentItems(
+      stored.filter((item) => {
+        if (item.kind !== "document_nora") return true;
+        const id = item.documentId ?? item.id.replace(/^doc:/, "").replace(/:rev:.*$/, "");
+        return !id || docIds.size === 0 || docIds.has(id);
+      }),
+    );
+  }, [pilotId, params.projectId, documents]);

   useEffect(() => {
     if (surface !== "travail") return;
@@ -1269,10 +1278,20 @@ export default function ProjectPage() {
     );
   }

-  function buildSurfaceUrl(next: Surface, documentId?: string | null) {
+  function buildSurfaceUrl(
+    next: Surface,
+    documentId?: string | null,
+    attemptId?: string | null,
+  ) {
     const q = new URLSearchParams();
     q.set("surface", next);
     if (next === "document" && documentId) q.set("documentId", documentId);
+    if (
+      (next === "execution" || next === "publication") &&
+      attemptId
+    ) {
+      q.set("attempt", attemptId);
+    }
     return `/projects/${params.projectId}?${q.toString()}`;
   }

@@ -1281,12 +1300,24 @@ export default function ProjectPage() {
     next: Surface,
     documentId?: string | null,
     mode: "push" | "replace" = "push",
+    attemptId?: string | null,
   ) {
-    const href = buildSurfaceUrl(next, documentId);
+    const href = buildSurfaceUrl(next, documentId, attemptId);
     if (mode === "replace") router.replace(href, { scroll: false });
     else router.push(href, { scroll: false });
   }

+  function openRealizationFocus(
+    next: "execution" | "publication",
+    attemptId?: string | null,
+  ) {
+    surfaceNavGenRef.current += 1;
+    pendingSurfaceRef.current = next;
+    noteProjectSurfaceNavIntent(params.projectId, next as StudioSurface);
+    setSurface(next);
+    syncSurfaceUrl(next, null, "push", attemptId ?? null);
+  }
+
   function resetDocumentBibliothequeState() {
     setDocView("library");
     setSelectedLibraryId(null);
@@ -3486,22 +3517,23 @@ export default function ProjectPage() {
                               if (
                                 item.repositoryId &&
                                 item.path &&
-                                item.gitRef
+                                (item.commit || item.gitRef)
                               ) {
+                                // Prefer immutable commit when recorded; mutable ref is not a version claim.
+                                const immutableRef = item.commit?.trim() || item.gitRef!;
                                 void openTravailReference({
                                   kind: "git",
                                   label: item.title,
                                   repositoryId: item.repositoryId,
                                   path: item.path,
-                                  ref: item.gitRef,
+                                  ref: immutableRef,
                                   commit: item.commit ?? undefined,
                                 });
                               }
                               return;
                             }
                             if (item.kind === "execution") {
-                              // Exact attempt reopen not yet wired as owner deep-link — surface only.
-                              selectSurface("execution");
+                              openRealizationFocus("execution", item.attemptId ?? null);
                               return;
                             }
                             if (
@@ -3509,7 +3541,10 @@ export default function ProjectPage() {
                               item.kind === "bilan" ||
                               item.kind === "proof"
                             ) {
-                              selectSurface("publication");
+                              openRealizationFocus(
+                                "publication",
+                                item.attemptId ?? item.resultId ?? null,
+                              );
                             }
                           }}
                         >
@@ -3552,6 +3587,7 @@ export default function ProjectPage() {
                             search: "",
                             openPointsOnly: true,
                             selectedSubjectId: subjectId,
+                            selectedOpenPointId: o.id,
                             selectedDecisionId: null,
                             layout: "full",
                           });
@@ -3578,6 +3614,7 @@ export default function ProjectPage() {
                         search: "",
                         openPointsOnly: true,
                         selectedSubjectId: null,
+                        selectedOpenPointId: null,
                         selectedDecisionId: null,
                         layout: "full",
                       });
@@ -3786,6 +3823,15 @@ export default function ProjectPage() {
               // Keep composer free for the Pilote's next ask — dossier is a chip (12.09).
               selectSurface("travail");
             }}
+            onPilotConsulted={(item) => {
+              notePilotConsultation({
+                id: `exec:${item.attemptId}`,
+                kind: item.kind,
+                title: item.title,
+                refLabel: item.refLabel ?? null,
+                attemptId: item.attemptId,
+              });
+            }}
           />
         </div>
       ) : null}
@@ -3800,6 +3846,15 @@ export default function ProjectPage() {
               setDossierAttachment(att);
               selectSurface("travail");
             }}
+            onPilotConsulted={(item) => {
+              notePilotConsultation({
+                id: `${item.kind}:${item.attemptId}`,
+                kind: item.kind,
+                title: item.title,
+                refLabel: item.refLabel ?? null,
+                attemptId: item.attemptId,
+              });
+            }}
           />
         </div>
       ) : null}
diff --git a/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx b/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
index 23a5d794..cc18e927 100644
--- a/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
@@ -72,6 +72,13 @@ export function CursorRealizationSurface(props: {
     fingerprint?: string | null;
     pieces?: string[] | null;
   }) => void;
+  /** MP-08 — after a successful pilot consultation of attempt/bilan (no mutation). */
+  onPilotConsulted?: (item: {
+    kind: "execution" | "result" | "bilan" | "proof";
+    attemptId: string;
+    title: string;
+    refLabel?: string | null;
+  }) => void;
 }) {
   const mode = props.mode ?? "execution";
   const [contracts, setContracts] = useState<ContractRow[]>([]);
@@ -119,17 +126,22 @@ export function CursorRealizationSurface(props: {
     void reload();
   }, [reload]);

-  // Deep-link from Exécution → Résultats (?attempt=) — one-shot per attempt id.
+  // Deep-link ?attempt= — results opens bilan; execution selects the attempt row.
   const deepLinkedAttemptRef = useRef<string | null>(null);
   useEffect(() => {
-    if (mode !== "results" || typeof window === "undefined") return;
+    if (typeof window === "undefined") return;
     const id = new URLSearchParams(window.location.search).get("attempt");
     if (!id || attempts.length === 0) return;
     if (deepLinkedAttemptRef.current === id) return;
     const hit = attempts.find((a) => a.attemptId === id);
     if (!hit) return;
     deepLinkedAttemptRef.current = id;
-    void openBilan(hit);
+    if (mode === "results") {
+      void openBilan(hit);
+    } else {
+      setSelectedAttempt(hit);
+      setSelectedContract(null);
+    }
   }, [mode, attempts]);

   /** C24 — resume AUTHORIZED Cursor attempts left after D6 Oui without dispatch (nav/crash). */
@@ -478,6 +490,12 @@ export function CursorRealizationSurface(props: {
         noraAnalysisKind: j.qualification!.noraAnalysisKind,
         dossier: j.qualification!.dossier ?? null,
       });
+      props.onPilotConsulted?.({
+        kind: mode === "results" ? "bilan" : "result",
+        attemptId: attempt.attemptId,
+        title: `Tentative ${attempt.attemptId.slice(0, 12)}`,
+        refLabel: j.qualification!.verdict?.slice(0, 40) ?? attempt.status,
+      });
     } finally {
       setBusy(false);
     }
@@ -696,6 +714,14 @@ export function CursorRealizationSurface(props: {
                           setSelectedAttempt(a);
                           setSelectedContract(null);
                           setBilan(null);
+                          if (mode === "execution") {
+                            props.onPilotConsulted?.({
+                              kind: "execution",
+                              attemptId: a.attemptId,
+                              title: `Exécution ${a.attemptId.slice(0, 12)}`,
+                              refLabel: a.status,
+                            });
+                          }
                         }}
                       >
                         <span className="fig-exec-card-kicker">
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
index 90d7df81..12d8c064 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
@@ -104,6 +104,8 @@ export type JournalNavState = {
   search: string;
   openPointsOnly: boolean;
   selectedSubjectId: string | null;
+  /** Exact OPEN point to focus when openPointsOnly (E3 C-C). */
+  selectedOpenPointId?: string | null;
   selectedDecisionId: string | null;
   layout: "full" | "split" | "enlarged";
 };
@@ -306,6 +308,9 @@ export function ProjectJournal(props: {
   const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(
     props.initialNav?.selectedSubjectId ?? null,
   );
+  const [selectedOpenPointId, setSelectedOpenPointId] = useState<string | null>(
+    props.initialNav?.selectedOpenPointId ?? null,
+  );
   const [selectedDecisionId, setSelectedDecisionId] = useState<string | null>(
     props.initialNav?.selectedDecisionId ?? null,
   );
@@ -323,12 +328,32 @@ export function ProjectJournal(props: {
       search,
       openPointsOnly,
       selectedSubjectId,
+      selectedOpenPointId,
       selectedDecisionId,
       layout,
     });
     // Intentionally sync outward on nav field changes only.
     // eslint-disable-next-line react-hooks/exhaustive-deps
-  }, [tab, search, openPointsOnly, selectedSubjectId, selectedDecisionId, layout]);
+  }, [
+    tab,
+    search,
+    openPointsOnly,
+    selectedSubjectId,
+    selectedOpenPointId,
+    selectedDecisionId,
+    layout,
+  ]);
+
+  useEffect(() => {
+    if (!selectedOpenPointId || !openPointsOnly) return;
+    const el = document.querySelector(
+      `[data-testid="journal-open-point-row-${selectedOpenPointId}"]`,
+    );
+    if (el instanceof HTMLElement) {
+      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
+      el.focus();
+    }
+  }, [selectedOpenPointId, openPointsOnly]);

   const tree = useMemo(() => buildSubjectTree(props.subjects), [props.subjects]);
   const byId = useMemo(
@@ -626,8 +651,12 @@ export function ProjectJournal(props: {
             <OpenPointsTransversalList
               openPoints={openPoints}
               byId={byId}
-              selectedId={selectedSubjectId}
-              onSelect={pickSubject}
+              selectedSubjectId={selectedSubjectId}
+              selectedOpenPointId={selectedOpenPointId}
+              onSelect={(subjectId, openPointId) => {
+                setSelectedOpenPointId(openPointId);
+                if (subjectId) pickSubject(subjectId);
+              }}
             />
           ) : search.trim().length > 0 ? (
             <SubjectSearchResults
@@ -1294,8 +1323,9 @@ function SubjectSearchResults(props: {
 function OpenPointsTransversalList(props: {
   openPoints: JournalOpenPoint[];
   byId: Map<string, JournalSubject>;
-  selectedId: string | null;
-  onSelect: (id: string) => void;
+  selectedSubjectId: string | null;
+  selectedOpenPointId: string | null;
+  onSelect: (subjectId: string | null, openPointId: string) => void;
 }) {
   if (props.openPoints.length === 0) {
     return (
@@ -1312,16 +1342,19 @@ function OpenPointsTransversalList(props: {
       <ul className="journal-open-points-list" data-testid="journal-open-points-list">
         {props.openPoints.map((o) => {
           const subject = o.subjectId ? props.byId.get(o.subjectId) : null;
-          const selected = o.subjectId != null && props.selectedId === o.subjectId;
+          const selected =
+            props.selectedOpenPointId === o.id ||
+            (props.selectedOpenPointId == null &&
+              o.subjectId != null &&
+              props.selectedSubjectId === o.subjectId);
           return (
             <li key={o.id}>
               <button
                 type="button"
                 className={`journal-open-point-row${selected ? " is-selected" : ""}`}
                 data-testid={`journal-open-point-row-${o.id}`}
-                onClick={() => {
-                  if (o.subjectId) props.onSelect(o.subjectId);
-                }}
+                aria-current={selected ? "true" : undefined}
+                onClick={() => props.onSelect(o.subjectId ?? null, o.id)}
               >
                 <span className="journal-card-kicker">{COPY.openPointQuestion}</span>
                 <span className="journal-open-point-title">{o.statement}</span>
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
index 3737f511..91f415f9 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
@@ -18,15 +18,17 @@ html.studio-shell-lock body {
   flex-shrink: 0;
   height: 100%;
   max-height: 100dvh;
-  overflow-x: hidden;
-  overflow-y: auto;
+  /* Foot stays pinned; nav scrolls — avoids overlap at 1280×720 (E3 C-D). */
+  overflow: hidden;
   overscroll-behavior: contain;
 }

 .studio-shell-rail-inner {
   display: flex;
   flex-direction: column;
-  min-height: 100%;
+  height: 100%;
+  max-height: 100%;
+  min-height: 0;
   gap: inherit;
 }

@@ -35,13 +37,18 @@ html.studio-shell-lock body {
   flex-direction: column;
   flex: 1 1 auto;
   min-height: 0;
+  overflow-x: hidden;
+  overflow-y: auto;
+  overscroll-behavior: contain;
 }

 .studio-shell-rail-foot {
-  margin-top: auto;
+  margin-top: 0;
   flex-shrink: 0;
   padding-top: 1rem;
   border-top: 1px solid var(--line);
+  background: inherit;
+  z-index: 1;
 }

 .studio-account-row {
diff --git a/projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts b/projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts
index 00b117f8..78ba7988 100644
--- a/projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts
+++ b/projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts
@@ -56,6 +56,22 @@ export function recentItemFromGitConsultation(input: {
   };
 }

+/** Realization attempt / bilan / proof consultation (after successful open). */
+export function recentItemFromAttemptConsultation(input: {
+  kind: "execution" | "result" | "bilan" | "proof";
+  attemptId: string;
+  title: string;
+  refLabel?: string | null;
+}): Pick<ProjectRecentItem, "id" | "kind" | "title" | "refLabel" | "attemptId"> {
+  return {
+    id: `${input.kind}:${input.attemptId}`,
+    kind: input.kind,
+    title: input.title.slice(0, 160),
+    refLabel: input.refLabel ?? null,
+    attemptId: input.attemptId,
+  };
+}
+
 /** Map Nora turn references opened in Travail viewer — null when identity incomplete. */
 export function recentItemFromTurnReference(
   ref: TurnReference,

```

---

## 15. Publication

| Item | Valeur |
|---|---|
| Commit message | `feat(next): complete shared composer audio and integrated workspace continuity` |
| SHA | `a3305a42b3fd0f24b2a16bca825fc14eb37e84e6` |
| Tree | `72405eddfdd10deea324a5c0dd01a073b30c5f85` |
| Push | FF `origin/sfia/next-ml5-integrated-delivery-20261123` |
| CI observée | aucune |
| PR | aucune |
| Main | inchangé |
| Artefact tmp suivi | **absent** du tree |

---

## 16. Réserves / reports (arbitrage Morris)

Conservés : R-REC-E1-01/02 ; fraîcheur sémantique naturelle ; multi-cap naturelle ; allocation/calibration ; T08 ; hybrid pertinence ; dictée LIVE ; qualité FR ; latence ; coût facturé Admin OFF.

**Non reporté** : capacités DET construites (compositeur, ownership fidelity, multitype, rail).

---

## 17. Tableau capacités

| Ensemble | Capacité | Résultat | Preuve | Réserve |
|---|---|---|---|---|
| E4 | C.1 compositeur partagé | READY WITH RESERVES | unit + code | — |
| E4 | C.2 croissance/brouillons | READY WITH RESERVES | unit isolation + captures | — |
| E4 | C.3 transport/MP-06 | READY WITH RESERVES (DET) | PW C01–C03 ; erreurs explicites | MP-06 LIVE |
| E4 | C.4 états/onde | READY WITH RESERVES | code + c01 capture | — |
| E4 | C.5 robustesse/FinOps audio | READY WITH RESERVES | unit partial/timeout | Admin OFF |
| E2 | ownership/attempted/UNKNOWN | READY WITH RESERVES | SC2 PG 4 | reprise utilisateur naturelle |
| E2 | reconcile terminal | READY WITH RESERVES | code + SC2 | — |
| E3 | multitype consultations | READY WITH RESERVES | code + panel capture | preuve/exécution owner gaps documentés si absents |
| E3 | versions/droits Git | READY WITH RESERVES | commit immuable | — |
| E3 | points ouverts | READY WITH RESERVES | Journal focus | — |
| E3 | rail 1280×720 | READY WITH RESERVES | hit-test JSON | F2 global non revendiqué |
| E3 | restitution | READY WITH RESERVES | no silent slice | — |

---

## 18. Verdicts construction (Cursor)

| Ensemble | Verdict |
|---|---|
| **E2** | **READY WITH RESERVES** |
| **E3** | **READY WITH RESERVES** |
| **E4** | **READY WITH RESERVES** |
| **Cycle intégré** | **READY WITH RESERVES** — candidat DEV cohérent pour revue sortie construction ; E5 = qualification globale ; gate Morris |

Publication ≠ validation E2/E3/E4.

---

## 19. Review Pack Content Coverage

| Exigence §7.2 | Couvert |
|---|---|
| Mandat | oui |
| Git Truth / ENV | oui |
| Diffs exploitables créations/modifs | oui (sections 14) |
| Docs modifiés | oui (as-built/delivery/registre + evidence compare) |
| Validations commandes | oui |
| Fake/Real | oui |
| SHA/tree/build | oui |
| Verdicts distincts | oui |
| Preuves navigateur | chemins Git evidence/ml5-e4-20261127 |

---

## 20. Instruction ChatGPT

Relire snapshot `a3305a42b3fd0f24b2a16bca825fc14eb37e84e6` / tree `72405eddfdd10deea324a5c0dd01a073b30c5f85` ; diff depuis `5f2ecad185b9784bc3956477601fe6a722459467` ; handoff distant ; evidence navigateur ; vérifier mutualisation, transport DET, brouillons, fidélité D4, multitype, rail, Figma, sync docs. Actualiser suivi indépendant. Morris arbitre sorties E2/E3/E4 et engagement E5.
