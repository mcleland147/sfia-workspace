# Review Pack — Mandat 4, compositeur Nora unique

Date : 2026-11-28 18:24 CET
Cycle : 08 Delivery / implémentation
Profil : Standard
Autorisation : GO révisé Morris du 28/11/2026. Le push produit n'est pas inclus.
Mono-cycle : oui

## Git

Initial conforme :
- branche `sfia/next-ml5-integrated-delivery-20261123`
- HEAD `87a25c5eed65a1b30c6f608dcccb57f0c5992eff`
- tree `df79a2b3338b280ddef0a83f91e25ca38eb155e6`
- parent `5b9fcfd0ed5b1037a7b4224da24a84aeebed9502`
- origin/main et merge-base `997897fd7cf914771e7d08e8030dc7123fab7d25`
- origin de la branche produit égal au HEAD d'entrée
- aucun fichier versionné ou indexé avant le commit

Final local, non poussé :
- HEAD `fff5ebd9db873c186b71469c4d6957f18831c3cb`
- tree `ddc407cf76675b9cd542391010900ce67aac8865`
- parent `87a25c5eed65a1b30c6f608dcccb57f0c5992eff`
- message `refactor(studio-next): unify Nora conversation composer`
- la branche locale est en avance d'un commit sur origin
- push produit : non effectué
- aucune PR, aucune Action déclenchée par ce cycle

## G2 / G3

Figma, lecture seule, session `ed79adf6-6d54-4259-b0aa-40a18980eee1`, nœud `701:191` (05.05 compositeur multi-lignes). Morris a désigné le compositeur Travail déjà en production comme référence. Ce nœud n'a pas servi à redessiner Travail.

Constat initial confirmé : `NoraSharedComposer` avait deux retours JSX, `sas-composer` et `fig-travail-composer`. Les deux parents l'importaient déjà.

Allowlist modifiée :
- `NoraSharedComposer.tsx`
- `PreparationConversation.tsx` — seul l'emplacement du compositeur
- `tokens.css` — suppression des styles sas du compositeur, slot sticky conservé
- `nora-shared-composer.test.ts`
- as-built audio et `delivery-history.md`

Non modifiés : `NoraConversation.tsx`, domaines conversation, API, SafeMarkdown, dictée, activité Nora, schéma.

## Architecture après intervention

Un seul retour JSX, classes `fig-composer fig-travail-composer`. Les différences de contexte sont le placeholder, les identifiants de test, le verrou et la pièce jointe lorsqu'ils sont fournis. Le clavier est celui de Travail : Entrée envoie sur desktop, Maj+Entrée passe à la ligne, le mobile garde Entrée comme retour ligne, la dictée et l'IME n'envoient pas. Le sas n'a plus de branche Cmd/Ctrl+Entrée. La croissance, le plafond, les brouillons et l'envoi ne sont pas reconstruits.

## Preuves

Unitaires `nora-shared-composer.test.ts` : 9 tests, exit 0. Ils vérifient l'import par les deux parents, l'absence de `sas-composer`, et un seul chemin clavier.

Navigateur DEV, sans envoi :
- Travail vide avant : 805×84, padding 12 px, champ 11 px / 28 px, envoi 44×35.
- Travail vide après : mesures identiques, 0 CSS px.
- Travail texte long : racine 102 px, champ 76 px, quatre lignes visibles, brouillon ensuite effacé.
- Sas vide après : mêmes classes, hauteur 84, padding 12, envoi 44×35, champ 28 px. Largeur 590 px, celle du parent. Aucune classe `sas-composer`.
- Sas deux lignes : champ 44 px, même chrome. Brouillon ensuite effacé.
- Micro présent sur les deux surfaces. Envoi désactivé quand le champ est vide.

F2 ciblé de l'état vide Travail : 0 CSS px sur le rectangle mesuré. Pas de F2 global. Le cadre Figma `701:191` est plus haut et n'a pas été imposé, conformément à la référence Morris.

Build production exit 0. BUILD_ID `6rtSk-97s2iQjXoeXlRby`.

## Markdown

Vérification seulement. Sur le projet ouvert, une réponse Nora affiche un titre de niveau 3 et une liste numérotée, sans marqueurs bruts. SafeMarkdown reste le moteur existant. Les tableaux n'ont pas été observés dans cet échantillon. Aucune modification.

## Titre documentaire

Vérification seulement, aucune révision créée.

Le scellement refuse déjà un titre de révision qui contredit le titre canonique, avant l'écriture, motif `TITLE_IDENTITY_MISMATCH`.

Écart résiduel confirmé, non corrigé :
- `service.ts` construit `proposalTitle` depuis le titre de niveau 1 du corps, puis le range comme candidat en attente, avant la conservation.
- À la conservation, le titre du candidat est repris.
- Si ce titre contredit le document, le scellement refuse.
- Le service remplace alors toute cause `!sealApplied` par `BINDING_SEAL_FAILED`. La cause réelle n'est donc pas restituée à cet étage.

## Candidat DEV

- URL http://127.0.0.1:3100
- PID 19408, port 3100, base `sfia_next_dev`, port 5433, schéma 029
- BUILD_ID `6rtSk-97s2iQjXoeXlRby`
- build précédent conservé dans `/tmp/sfia-next-dev-build-87a25c5e`
- RECETTE PID 58965, port 3200, inchangée
- smoke : login 200, lecture Travail et sas, aucun envoi
- NO RELEASE, push produit non fait

## Réserves

- R-M3-DOC-TITLE : cause de refus remappée en `BINDING_SEAL_FAILED`. Hors correction de ce mandat.
- F2 global non revendiqué.
- Suites Playwright historiques non relancées. Le serveur e2e officiel n'a pas été utilisé.
- Réserves des mandats 1 à 3 transportées, non closes.

## Verdict

READY WITH RESERVES
Verdict visuel ciblé : le compositeur Travail vide est inchangé à 0 CSS px. Le sas utilise le même composant. F2 global NOT PROVEN.

## Couverture

| Fichier | État | Couverture |
|---|---|---|
| NoraSharedComposer.tsx | modifié | diff intégral |
| PreparationConversation.tsx | modifié | diff intégral |
| tokens.css | modifié | diff intégral |
| nora-shared-composer.test.ts | modifié | diff intégral |
| as-built audio | modifié | diff intégral |
| delivery-history.md | modifié | diff intégral |

Créations : aucune.
Synthesis only : non.

## Diff utile

diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-3-audio-20261127.md b/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-3-audio-20261127.md
index 3bf38973..364bf87e 100644
--- a/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-3-audio-20261127.md
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-3-audio-20261127.md
@@ -1,5 +1,9 @@
 # As-built — Macro-lot 3 — Interaction audio (dictée compositeur)

+Complément 28/11/2026, base `87a25c5e`. Travail et le sas partagent désormais le même rendu de compositeur. Le contrôle micro, le transport et la dictée ne sont pas modifiés. L6 reste différé.
+
+# As-built — Macro-lot 3 — Interaction audio (dictée compositeur)
+
 | Champ | Valeur |
 |---|---|
 | Date | 2026-11-27 |
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 2ad46c04..9398a2a2 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,15 @@
+## delivery_id: DELIV-2026-11-28-ML5-SHARED-COMPOSER-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — compositeur unique Travail et sas
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `87a25c5eed65a1b30c6f608dcccb57f0c5992eff`
+- **commit**: `refactor(studio-next): unify Nora conversation composer`
+- **schema_revision**: inchangé, `029`
+- **scope**: un seul rendu de compositeur ; le sas abandonne sa branche visuelle ; clavier de Travail pour les deux surfaces
+- **classe**: NO RELEASE · compatible corrective · LIVE NOT RUN · CI NOT RUN · push produit non inclus
+- **reserves**: F2 non mesuré sur un rectangle Figma apparié ; R-M3-DOC-TITLE cause de refus remappée, non corrigée
+
 ## delivery_id: DELIV-2026-11-28-ML5-PROJECT-SURFACES-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraSharedComposer.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraSharedComposer.tsx
index 1e52b336..fc59d593 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraSharedComposer.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraSharedComposer.tsx
@@ -32,8 +32,9 @@ export type NoraSharedComposerProps = {
 };

 /**
- * Shared composer shell — prep vs travail keep contractual chrome/send rules,
- * but IME, growth, dictation lock, and send admission share one interaction path (E4 C.1).
+ * One composer for Travail and the preparation screen.
+ * Context differs only by ids, placeholder, lock and an authorised attachment.
+ * Desktop Enter sends; Shift+Enter keeps a newline. That is the Travail contract.
  */
 export function NoraSharedComposer(props: NoraSharedComposerProps) {
   const composerLocked = Boolean(props.composerLocked);
@@ -47,12 +48,7 @@ export function NoraSharedComposer(props: NoraSharedComposerProps) {
   const dictationMount = Boolean(dictationProjectId || dictationPreparationId);

   const sendDisabled =
-    props.busy ||
-    dictationActive ||
-    (props.variant === "travail"
-      ? !props.draft.trim() && !hasDossier
-      : !props.draft.trim()) ||
-    composerLocked;
+    props.busy || dictationActive || (!props.draft.trim() && !hasDossier) || composerLocked;

   const isMobile =
     typeof window !== "undefined" &&
@@ -64,11 +60,10 @@ export function NoraSharedComposer(props: NoraSharedComposerProps) {
     if (!el) return;
     el.style.height = "auto";
     const max = Math.min(window.innerHeight * 0.36, 280);
-    const min = props.variant === "prep" ? 42 : 24;
-    const next = Math.min(Math.max(el.scrollHeight, min), max);
+    const next = Math.min(Math.max(el.scrollHeight, 24), max);
     el.style.height = `${next}px`;
     el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
-  }, [props.draft, props.variant]);
+  }, [props.draft]);

   const placeholder =
     props.placeholder ??
@@ -78,27 +73,15 @@ export function NoraSharedComposer(props: NoraSharedComposerProps) {

   function canAdmitSend(): boolean {
     if (props.busy || composerLocked || dictationActive) return false;
-    if (props.variant === "travail") return Boolean(props.draft.trim() || hasDossier);
-    return Boolean(props.draft.trim());
+    return Boolean(props.draft.trim() || hasDossier);
   }

   function onTextareaKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
-    // During dictation: never send (Enter or shortcuts).
     if (composerLocked || dictationActive) {
       e.preventDefault();
       return;
     }
     if (imeComposing || e.nativeEvent.isComposing) return;
-
-    if (props.variant === "prep") {
-      if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && canAdmitSend()) {
-        e.preventDefault();
-        props.onSend();
-      }
-      return;
-    }
-
-    // Travail: Enter sends on desktop; Shift+Enter newline; mobile keeps Enter as newline.
     if (isMobile) return;
     if (e.key === "Enter" && !e.shiftKey && canAdmitSend()) {
       e.preventDefault();
@@ -137,78 +120,13 @@ export function NoraSharedComposer(props: NoraSharedComposerProps) {
     onKeyDown: onTextareaKeyDown,
   };

-  if (props.variant === "prep") {
-    const expanded = props.draft.includes("\n") || props.draft.length > 80;
-    return (
-      <div
-        className="sas-composer relative"
-        data-testid="prep-composer"
-        data-dictation-active={dictationActive ? "1" : "0"}
-        data-composer-expanded={expanded ? "1" : "0"}
-        style={
-          expanded
-            ? {
-                height: "auto",
-                maxHeight: "min(36vh, 280px)",
-                minHeight: "var(--sas-composer-h)",
-                overflowY: "auto",
-              }
-            : undefined
-        }
-      >
-        <textarea
-          {...sharedTextareaProps}
-          className="sas-composer-input"
-          data-testid="prep-draft"
-          disabled={props.busy || composerLocked}
-        />
-        <div
-          className="sas-composer-bar"
-          data-dictation-active={dictationActive ? "1" : "0"}
-        >
-          <span
-            className="sas-composer-hint"
-            aria-hidden={!dictationActive && !props.draft.trim()}
-            data-dictation-hide={dictationActive ? "1" : undefined}
-            hidden={dictationActive}
-          >
-            <span className="sas-composer-plus" aria-hidden>
-              ＋
-            </span>
-            Échanger librement avec Nora
-          </span>
-          <div className="inline-flex min-w-0 flex-1 items-center justify-end gap-2">
-            {dictationControl}
-            <button
-              type="button"
-              className="sas-composer-send"
-              disabled={sendDisabled}
-              onClick={() => {
-                if (canAdmitSend()) props.onSend();
-              }}
-              data-testid="prep-send"
-              aria-label="Envoyer le message"
-              data-dictation-hide={dictationActive ? "1" : undefined}
-              hidden={dictationActive}
-              tabIndex={dictationActive ? -1 : 0}
-            >
-              <span aria-hidden>↑</span>
-            </button>
-          </div>
-        </div>
-        {props.status ? (
-          <p className="sr-only" role="status">
-            {props.status}
-          </p>
-        ) : null}
-      </div>
-    );
-  }
+  const prep = props.variant === "prep";

   return (
     <div
       className="fig-composer fig-travail-composer relative"
-      data-testid="nora-composer"
+      data-testid={prep ? "prep-composer" : "nora-composer"}
+      data-composer-surface={props.variant}
       data-composer-locked={composerLocked ? "1" : "0"}
       data-composer-expanded={props.draft.includes("\n") || props.draft.length > 80 ? "1" : "0"}
       data-dictation-active={dictationActive ? "1" : "0"}
@@ -293,7 +211,7 @@ export function NoraSharedComposer(props: NoraSharedComposerProps) {
         <textarea
           {...sharedTextareaProps}
           className="fig-travail-composer-input"
-          data-testid="thread-draft"
+          data-testid={prep ? "prep-draft" : "thread-draft"}
           disabled={composerLocked}
           aria-disabled={composerLocked || dictationActive}
         />
@@ -305,7 +223,7 @@ export function NoraSharedComposer(props: NoraSharedComposerProps) {
           onClick={() => {
             if (canAdmitSend()) props.onSend();
           }}
-          data-testid="thread-send"
+          data-testid={prep ? "prep-send" : "thread-send"}
           aria-label="Envoyer"
           data-dictation-hide={dictationActive ? "1" : undefined}
           hidden={dictationActive}
diff --git a/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
index 54911e09..b398d427 100644
--- a/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
@@ -134,16 +134,18 @@ export function PreparationConversation(props: {
         ) : null}
       </div>

-      <NoraSharedComposer
-        variant="prep"
-        draft={props.draft}
-        onDraft={props.onDraftChange}
-        busy={props.busy}
-        onSend={props.onSend}
-        projectId={props.projectId ?? undefined}
-        preparationId={props.preparationId}
-        dictationEnabled={props.dictationEnabled}
-      />
+      <div className="sas-composer-slot">
+        <NoraSharedComposer
+          variant="prep"
+          draft={props.draft}
+          onDraft={props.onDraftChange}
+          busy={props.busy}
+          onSend={props.onSend}
+          projectId={props.projectId ?? undefined}
+          preparationId={props.preparationId}
+          dictationEnabled={props.dictationEnabled}
+        />
+      </div>
       {props.footer}
     </section>
   );
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 15a2cae7..d6fc3a1f 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -30,7 +30,6 @@
   --sas-header: 72px;
   --sas-conversation-w: 800px;
   --sas-preview-w: 518px;
-  --sas-composer-h: 118px;
   /* Figma reference height (655) is a proportion cue — runtime fills available shell height. */
   --sas-panel-h-ref: 655px;
 }
@@ -1654,92 +1653,9 @@
   border-color: color-mix(in srgb, var(--bad) 55%, var(--fig-line));
 }

-.sas-composer {
+.sas-composer-slot {
   flex-shrink: 0;
-  display: flex;
-  flex-direction: column;
-  height: var(--sas-composer-h);
-  min-height: var(--sas-composer-h);
-  max-height: var(--sas-composer-h);
-  border: 1px solid var(--fig-line);
-  border-radius: var(--fig-radius);
-  background: var(--fig-panel);
-  padding: 14px 16px 10px;
-  box-sizing: border-box;
-}
-
-.sas-composer-input {
-  width: 100%;
-  flex: 1 1 auto;
-  min-height: 0;
-  height: 42px;
-  resize: none;
-  border: 0;
-  background: transparent;
-  color: var(--fig-ink);
-  font-family: inherit;
-  /* Match SAS / conversation body (11px). */
-  font-size: 11px;
-  line-height: 1.35;
-  padding: 0;
-  outline: none;
-}
-
-.sas-composer-input::placeholder {
-  color: var(--fig-quiet);
-}
-
-.sas-composer-bar {
-  display: flex;
-  align-items: center;
-  justify-content: space-between;
-  gap: 12px;
-  margin-top: 8px;
-  padding-top: 10px;
-  border-top: 1px solid var(--fig-line);
-  flex-shrink: 0;
-}
-
-.sas-composer-hint {
-  display: inline-flex;
-  align-items: center;
-  gap: 0.55rem;
-  color: var(--fig-quiet);
-  font-size: 11px;
-  font-weight: 500;
-}
-
-.sas-composer-plus {
-  color: var(--fig-muted);
-  font-size: 18px;
-  line-height: 1;
-}
-
-.sas-composer-send {
-  width: 48px;
-  height: 30px;
-  border: 0;
-  border-radius: 8px;
-  background: var(--fig-accent);
-  color: var(--fig-ink);
-  font-size: 19px;
-  font-weight: 600;
-  cursor: pointer;
-  display: inline-flex;
-  align-items: center;
-  justify-content: center;
-  flex-shrink: 0;
-}
-
-.sas-composer-send:disabled {
-  opacity: 0.45;
-  cursor: not-allowed;
-}
-
-.sas-composer-send:focus-visible,
-.sas-composer-input:focus-visible {
-  outline: 2px solid var(--fig-accent);
-  outline-offset: 2px;
+  min-width: 0;
 }

 .sas-preview {
@@ -1996,7 +1912,7 @@
   .sas-preview-inner {
     min-height: 0;
   }
-  .sas-composer {
+  .sas-composer-slot {
     position: sticky;
     bottom: 0;
     z-index: 2;
diff --git a/projects/sfia-studio-next/web/tests/unit/nora-shared-composer.test.ts b/projects/sfia-studio-next/web/tests/unit/nora-shared-composer.test.ts
index 4fbf187e..d1e49f50 100644
--- a/projects/sfia-studio-next/web/tests/unit/nora-shared-composer.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/nora-shared-composer.test.ts
@@ -39,13 +39,12 @@ describe("NoraSharedComposer wiring", () => {
     expect(preparationConversation).toMatch(/<NoraSharedComposer[\s\S]*variant="prep"/);
   });

-  it("does not aria-hide the sas command bar when draft is empty (mic stays exposed)", () => {
+  it("keeps the microphone in the shared row, not a second command bar", () => {
     const src = readFileSync(join(root, "NoraSharedComposer.tsx"), "utf8");
-    const barOpen = src.match(/<div[\s\S]*?className="sas-composer-bar"[^>]*>/)?.[0] ?? "";
-    expect(barOpen).not.toContain("aria-hidden");
-    expect(src).toMatch(
-      /className="sas-composer-hint"[\s\S]*aria-hidden=\{!dictationActive && !props\.draft\.trim\(\)\}/,
-    );
+    expect(src).not.toMatch(/sas-composer/);
+    const row = src.match(/<div className="fig-travail-composer-row">[\s\S]*?<\/div>/)?.[0] ?? "";
+    expect(row).toContain("dictationControl");
+    expect(row).not.toContain("aria-hidden={");
   });

   it("routes dictation to project API when projectId is set", () => {
@@ -103,11 +102,11 @@ describe("NoraSharedComposer C.1 consolidation", () => {
     expect(src).toMatch(/const sharedTextareaProps = \{/);
     expect(src).toMatch(/function onTextareaKeyDown/);
     expect(src).toMatch(/function canAdmitSend/);
-    // Contractual send rules remain distinct.
-    expect(src).toMatch(/variant === "prep"/);
-    expect(src).toMatch(/metaKey \|\| e\.ctrlKey/);
-    expect(src).toMatch(/!e\.shiftKey/);
-    // No Enter-send while dictation active.
+    const keydown = src.match(/function onTextareaKeyDown[\s\S]*?\n  \}/)?.[0] ?? "";
+    expect(keydown).not.toMatch(/variant|metaKey|ctrlKey/);
+    expect(keydown).toMatch(/!e\.shiftKey/);
+    expect(src).toMatch(/className="fig-composer fig-travail-composer relative"/);
+    expect(src).not.toMatch(/if \(props\.variant === "prep"\) return/);
     expect(src).toMatch(/dictationActive[\s\S]*e\.preventDefault/);
   });
