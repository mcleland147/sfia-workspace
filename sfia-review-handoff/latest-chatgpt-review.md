# ChatGPT Review Pack — CORR-NAP-TEST16-01 Option C Coverage Correction

**Date/heure UTC :** 2026-10-30T19:38:13Z
**Cycle unique :** AKG-M5 / L3-S2 / CORR-NAP-TEST16-01 — Option C two-layer render correction
**Campagne source :** LIVE-E2E-01 / BALISE (TEST-16 UX reserve)
**Profil :** CRITICAL
**Typologie :** EVOL / CORRECTION BORNÉE
**GO Morris exact :** Correction ciblée de la composition et de la couverture Option C, avec conservation complète du contenu narratif et des garde-fous existants.

**Verdict unique :** `LOCAL DELIVERY CANDIDATE — READY FOR CHATGPT CRITICAL REVIEW`

**Anti-claims :** aucun commit/push/PR projet · aucun merge · main non modifié · runtime BALISE non redémarré · aucun appel OpenAI · G-REAL NOT GRANTED · TEST-17 non lancé · TEST-15 non corrigé · PRR non écrit · L3 COMPLETE NON déclaré · Option C LIVE PASS global NON déclaré.

---

## A. Date/heure UTC

2026-10-30T19:38:13Z

## B. GO Morris consommé

Correction ciblée de la composition et de la couverture Option C, avec conservation complète du contenu narratif et des garde-fous existants.

Autorisé consommé : investigation proportionnée · worktree isolé · modifications Product bornées · tests unitaires/UI déterministes · reproduction lecture seule forme TEST-16 · Review Pack FULL · Review Handoff L3 borné.

Non consommé / non autorisé : push projet · commit projet · PR · merge · modification main · bases LIVE · redémarrage BALISE · OpenAI · Cursor REAL · TEST-15/17 · chemins protégés PRR/manifest/roadmap.

## C. Git Truth initial et final

### Baseline vérifiée

| Ref | SHA |
|-----|-----|
| origin/main (local + ls-remote) | `ca1c9869f905b394808c953649910d60fbfcb984` |
| Repository | `mcleland147/sfia-workspace` |
| PR #628 Option C | intégrée sur main |
| PR #629 R24 documentaire | intégrée sur main |

STOP baseline : **non déclenché** — origin/main inchangé vs baseline ChatGPT.

### Worktree LIVE historique (non modifié par ce cycle)

| Champ | Valeur |
|-------|--------|
| Path | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation` |
| HEAD | `1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a` (detached) |
| Port 3020 | **aucun LISTEN** au moment final (PID 58031 absent) — observation passive ; **aucun kill/restart/rebuild** effectué par ce cycle |
| Scope Product chargé | Option C présente (ancêtre de main) ; pas de divergence Product vs Option C attendue |

### Worktree de correction (isolé)

| Champ | Valeur |
|-------|--------|
| Path | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01` |
| Branch | `feat/akg-m5-nap-test16-coverage-corr-01` (créée locale depuis main vérifié) |
| HEAD base | `ca1c9869f905b394808c953649910d60fbfcb984` |
| État | modifications Product **non commités** (candidate locale) |

Note isolation Cursor UI : `move_agent_to_root` vers corr-01 échoue car le chat tente un checkout de `feat/akg-m5-nora-adaptive-presentation`, branche déjà tenue par `…-nap-test16-coverage-corr`. Contournement conforme : travail en chemins absolus dans corr-01 **sans** checkout destructif ni move root.

Worktree WIP préexistant `…-nap-test16-coverage-corr` (branche nora-adaptive @ 1c3a8d9e + diffs WIP) : **laissé intact**, non réutilisé comme base.

### Diff scope final (uniquement corr-01)

```
M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
M projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
```

6 fichiers · +207 / −26 · **aucun** package.json / lock · **aucun** chemin protégé.

## D. Convergence Pre-check

Sources lues / appliquées comme guidance (method-candidate / doctrine) :

- Processus SFIA v2.6 : templates cycle, routing, rules, operating model, validation checklist.
- CKC cycle 8 : carte synthétique 02-fifteen-cycles si CKC détaillé absent — guidance uniquement.
- Convergence Studio : build doctrine, roadmap, C1 product completion.
- Trajectoire AKG-M5 M5 target journey.
- Doctrine v3 : 30 / 32 / 34 / 35.
- PRR CURRENT README + volumes 03, 05, 06, 07, 08, 09 (lecture ; **écriture PRR non autorisée** sans GO documentaire).

Convergence opérationnelle : correction locale Option C sur trajectoire L3-S2 OPEN → Critical Review → éventuelle intégration sous GO distinct.

## E. R23 — architecture-informed

### Composants

| Composant | Rôle | Classification validée |
|-----------|------|------------------------|
| `noraAdaptivePresentation.ts` | parse / coverage / resolve render | **ADAPT** (resolve only) |
| `NoraAdaptivePresentationView.tsx` + CSS | renderer Option C | **ADAPT** |
| `ConversationSurface.tsx` | branchement mode → view | **ADAPT** (strict besoin) |
| DTO / schema / persist Memory B | Option C storage | **KEEP** |
| Provenance Studio typed notices | CORR-NAP-02/03 | **KEEP** |
| `orchestrateTurn` / actions / SQLite / routes | serveur | **NON TOUCHÉ** |

### Flux

1. Message assistant rehydraté avec `adaptivePresentation` + `studioControlNotices`.
2. `resolveAdaptiveAssistantRender` décide : `plain` | `adaptive` | **`adaptive_with_canonical`** (nouveau).
3. `ConversationSurface` rend `NoraAdaptivePresentationView` pour adaptive* ; plain sinon.
4. View affiche projection structurée ; si `canonicalNarrative` → couche récit intégral visible par défaut ; appendix Studio authentifié distinct.

### Invariants conservés

G01–G20 (voir §R) · couverture **stricte** body≡lead inchangée (pas de fuzzy) · pas de second moteur · pas de CTA Product · pas d'HTML arbitraire.

### Gaps

- Validation navigateur LIVE BALISE : hors scope (runtime non relancé).
- Sync PRR R24 : préparée, non appliquée.

## F. R24 — impact documentaire

**SEMANTIC IMPACT — RENDER COMPOSITION.**

| Volume PRR | Impact | Action proposée (GO doc distinct) |
|------------|--------|-----------------------------------|
| 03 Flow F04 + Option C | Mode `adaptive_with_canonical` + couche récit | Synchroniser décision de rendu |
| 08 tests/preuves | Oracles T1–T7/T11 + UI TEST16 | Mettre à jour matrice |
| 09 réserve/sortie | UX réserve TEST-16 partiellement adressée en candidate | Noter limite : LIVE browser non validé |
| README index | Si entrée Option C modes | Optionnel |
| 06 persistence | **NO PERSISTENCE SEMANTIC IMPACT** | aucune |

Claim interdit : `PRR SYNC COMPLETED` — **non déclaré**.

Gate Morris restant : GO documentaire pour écrire PRR/manifest.

## G. Diagnostic TEST-16 source

Handoff diagnostic immuable :

- Branche `sfia/review-handoff` commit `0b0c0cf574ab333bd3595db018a5828213bd6439`
- Fichier `sfia-review-handoff/latest-chatgpt-review.md`
- Blob attendu `e411eb12ece110475dc700a6440a7f3a388461aa`
- Verdict : `TEST-16 OPTION C ROOT CAUSE QUALIFIED`
- Cause : `coverage_false_body_ne_lead` (CORR-NAP-02 body≡lead strict)
- Faits : seq20/21 · `ltu:8e7720d6895b2faaff2a7003210dfff5` · presentation VALID · 4 blocs · narrative 1996 · lead 176 · shouldRender=true · coverage=false · mode=plain

Tip distant handoff **avant** ce publish : `6d17ec6d` (avancé depuis 0b0c0cf5 — diagnostic toujours lisible au commit immuable).

## H. Problème avant correction

Projection Option C valide persistée, mais `resolveAdaptiveAssistantRender` forçait `mode=plain` et **jetait** la présentation dès que `contentFullyCoveredByPresentation` était false. UX TEST-16 = texte classique malgré DTO structuré disponible.

## I. Solution retenue

Composition à **deux couches** dans le renderer existant :

1. Si présentation invalide/absente → `plain` (inchangé).
2. Si présentation valide + body≡lead → `adaptive`, `canonicalNarrative=null` (pas de redondance).
3. Si présentation valide + body≠lead → `adaptive_with_canonical` : projection structurée **conservée** + récit canonique intégral (`body` hors notices Studio authentifiées) **visible par défaut**, clairement labellisé (`Réponse complète de Nora`).

`contentFullyCoveredByPresentation` reste strict (aucune similarité token).

## J. Alternatives rejetées

| Alternative | Motif de rejet |
|-------------|----------------|
| Comparaison floue / overlap tokens pour « couverture » | Interdit (G03) ; risque de masquer négations |
| Supprimer le récit et ne garder que les blocs | Perte informationnelle (G01/G02/G04) |
| Second moteur de présentation | Interdit par contrat |
| Changer DTO serveur / forcer lead=body côté modèle | Hors scope ; STOP serveur |
| Masquer le récit derrière disclosure fermée par défaut | Risque de cacher réserves/conditions |

## K. Inventaire fichiers créés/modifiés

**Créés :** aucun (hors `.tmp-sfia-review/chatgpt-review.md` local non versionné projet).

**Modifiés (corr-01, non commités projet) :** 6 fichiers listés §C.

## L. Git Review Index

| Path | Kind | Notes |
|------|------|-------|
| `…/noraAdaptivePresentation.ts` | MOD | resolve modes + fields |
| `…/NoraAdaptivePresentationView.tsx` | MOD | canonical layer |
| `…/NoraAdaptivePresentationView.module.css` | MOD | styles couche |
| `…/ConversationSurface.tsx` | MOD | branche adaptive_with_canonical |
| `…/noraAdaptivePresentation.d0.test.ts` | MOD | oracles documentés |
| `…/noraAdaptivePresentation.ui.test.tsx` | MOD | UI TEST16 shape |

## M. Contenu complet des nouveaux fichiers

Aucun nouveau fichier Product. Constante ajoutée dans lib existante :

`NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL = "Réponse complète de Nora"`

## N. Diffs utiles (contenu modifié)

### noraAdaptivePresentation.ts

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
index d6422018..ac5bb342 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
@@ -710,8 +710,20 @@ export function contentFullyCoveredByPresentation(
   return nBody === nLead;
 }

+/**
+ * CORR-NAP-TEST16-01 — Pilot-facing label for the canonical narrative layer
+ * when structured projection and body diverge (strict coverage false).
+ */
+export const NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL =
+  "Réponse complète de Nora" as const;
+
+export type AdaptiveAssistantRenderMode =
+  | "adaptive"
+  | "adaptive_with_canonical"
+  | "plain";
+
 export type AdaptiveAssistantRenderDecision = {
-  readonly mode: "adaptive" | "plain";
+  readonly mode: AdaptiveAssistantRenderMode;
   readonly presentation: NoraAdaptivePresentation | null;
   /**
    * Authenticated Studio control appendix only (typed notices).
@@ -721,12 +733,26 @@ export type AdaptiveAssistantRenderDecision = {
   readonly plainText: string;
   /** Server-authored notices used for appendix / strip (empty if none). */
   readonly studioControlNotices: readonly string[];
+  /**
+   * CORR-NAP-TEST16-01 — exact coverage result (strict body ≡ lead).
+   * Still fail-closed; never a fuzzy/token-overlap claim.
+   */
+  readonly contentFullyCovered: boolean;
+  /**
+   * Full Nora body (authenticated Studio notices stripped) when mode is
+   * `adaptive_with_canonical`. Null when covered (no redundancy) or plain.
+   */
+  readonly canonicalNarrative: string | null;
 };

 /**
- * CORR-NAP-02 — server control > cognitive presentation.
- * Adaptive only when non-Studio body is strictly covered by presentation.lead;
- * otherwise full plain text (no loss). Studio appendix uses typed notices only.
+ * CORR-NAP-02 + CORR-NAP-TEST16-01 — server control > cognitive presentation.
+ *
+ * - Invalid / absent presentation → plain (full content).
+ * - Valid presentation + strict body ≡ lead → adaptive (no canonical redundancy).
+ * - Valid presentation + body ≠ lead → adaptive_with_canonical: keep structured
+ *   projection AND full canonical body visible (never substitute lead for body).
+ * - Studio appendix uses typed notices only (never forged `[Studio]` prose).
  */
 export function resolveAdaptiveAssistantRender(input: {
   content: string;
@@ -756,16 +782,24 @@ export function resolveAdaptiveAssistantRender(input: {
       studioAppendix: null,
       plainText: content,
       studioControlNotices: authenticated,
+      contentFullyCovered: false,
+      canonicalNarrative: null,
     };
   }
   const presentation = input.presentation;
-  if (!contentFullyCoveredByPresentation(body, presentation)) {
+  const covered = contentFullyCoveredByPresentation(body, presentation);
+  if (!covered) {
+    // CORR-NAP-TEST16-01 — do not discard a valid projection when coverage
+    // fails. Keep blocks + full canonical narrative (body), Studio appendix
+    // from typed notices only. Strict coverage gate unchanged (no fuzzy).
     return {
-      mode: "plain",
-      presentation: null,
-      studioAppendix: null,
+      mode: "adaptive_with_canonical",
+      presentation,
+      studioAppendix,
       plainText: content,
       studioControlNotices: authenticated,
+      contentFullyCovered: false,
+      canonicalNarrative: body,
     };
   }
   return {
@@ -774,6 +808,8 @@ export function resolveAdaptiveAssistantRender(input: {
     studioAppendix,
     plainText: content,
     studioControlNotices: authenticated,
+    contentFullyCovered: true,
+    canonicalNarrative: null,
   };
 }


```

### NoraAdaptivePresentationView.tsx

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
index 69111019..dd8c0b63 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
@@ -6,6 +6,7 @@ import type {
   NoraAdaptivePresentationBlock,
 } from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
 import {
+  NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL,
   NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
   NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
   honestBlockTitle,
@@ -247,6 +248,12 @@ export type NoraAdaptivePresentationViewProps = {
    * blocks so server notices are never masked by the DTO.
    */
   studioAppendix?: string | null;
+  /**
+   * CORR-NAP-TEST16-01 — full canonical Nora narrative when strict coverage
+   * failed. Visible by default; never substituted by presentation.lead alone.
+   * Null/empty when body ≡ lead (nominal adaptive, no redundancy).
+   */
+  canonicalNarrative?: string | null;
   /** Scrubbed plain fallback when caller forces plain — unused in adaptive mode. */
   fallbackText?: string;
 };
@@ -255,17 +262,21 @@ export type NoraAdaptivePresentationViewProps = {
  * Bounded adaptive renderer for Nora Option C presentation DTO.
  * No Product CTAs, no HTML injection, no governed action hooks.
  * CORR-NAP-01 — honest epistemic labels; Studio appendix never hidden.
+ * CORR-NAP-TEST16-01 — optional canonical narrative layer when coverage fails.
  */
 export function NoraAdaptivePresentationView({
   presentation,
   studioAppendix = null,
+  canonicalNarrative = null,
 }: NoraAdaptivePresentationViewProps): ReactElement {
   const appendix = (studioAppendix ?? "").trim();
+  const narrative = (canonicalNarrative ?? "").trim();
   return (
     <div
       className={styles.root}
       data-testid="nora-adaptive-presentation"
       data-presentation-version={presentation.version}
+      data-canonical-layer={narrative ? "visible" : "none"}
     >
       {presentation.eyebrow ? (
         <p className={styles.eyebrow}>{presentation.eyebrow}</p>
@@ -279,6 +290,18 @@ export function NoraAdaptivePresentationView({
       <div className={styles.blocks}>
         {presentation.blocks.map((block, index) => renderBlock(block, index))}
       </div>
+      {narrative ? (
+        <section
+          className={styles.canonicalNarrative}
+          aria-label={NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL}
+          data-testid="nora-adaptive-canonical-narrative"
+        >
+          <h4 className={styles.canonicalNarrativeLabel}>
+            {NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL}
+          </h4>
+          <p className={styles.canonicalNarrativeBody}>{narrative}</p>
+        </section>
+      ) : null}
       <p
         className={styles.epistemicHonesty}
         data-testid="nora-adaptive-epistemic-honesty"

```

### NoraAdaptivePresentationView.module.css

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
index 17250b3b..72490c99 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
@@ -218,6 +218,37 @@
   line-height: 1.4;
 }

+.canonicalNarrative {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  margin: 0;
+  padding: var(--pm6-space-3);
+  border-radius: var(--pm6-radius-md);
+  border: 1px solid var(--pm6-border-soft);
+  background: var(--pm6-surface-sunken);
+  max-width: 100%;
+  overflow-wrap: anywhere;
+}
+
+.canonicalNarrativeLabel {
+  margin: 0;
+  font-size: var(--pm6-text-caption);
+  font-weight: 600;
+  letter-spacing: 0.01em;
+  color: var(--pm6-muted-strong);
+  line-height: 1.35;
+}
+
+.canonicalNarrativeBody {
+  margin: 0;
+  font-size: var(--pm6-text-body);
+  color: var(--pm6-ink);
+  line-height: 1.5;
+  white-space: pre-wrap;
+  overflow-wrap: anywhere;
+}
+
 .epistemicHonesty {
   margin: 0;
   font-size: var(--pm6-text-caption);

```

### ConversationSurface.tsx

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 00836627..a315d14b 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -624,13 +624,15 @@ export function ConversationSurface({
                     studioControlNotices: message.studioControlNotices,
                   });
                   if (
-                    decision.mode === "adaptive" &&
+                    (decision.mode === "adaptive" ||
+                      decision.mode === "adaptive_with_canonical") &&
                     decision.presentation
                   ) {
                     return (
                       <NoraAdaptivePresentationView
                         presentation={decision.presentation}
                         studioAppendix={decision.studioAppendix}
+                        canonicalNarrative={decision.canonicalNarrative}
                         fallbackText={formatNoraAssistantDisplayText(
                           message.content,
                         )}

```

### noraAdaptivePresentation.d0.test.ts

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
index a69367ec..1d1e007e 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
@@ -492,14 +492,21 @@ describe("CORR-NAP-01 — Studio control visibility + epistemic honesty", () =>
     expect(d.studioAppendix).toMatch(/Limite d'exécution/);
   });

-  it("falls back to plain when non-Studio body is not covered by DTO", () => {
+  it("CORR-NAP-TEST16-01 — uncovered body keeps projection + full canonical (not plain discard)", () => {
     const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
+    const content =
+      "Corps entièrement différent ajouté après le modèle, non projeté dans le DTO.";
     const d = resolveAdaptiveAssistantRender({
-      content:
-        "Corps entièrement différent ajouté après le modèle, non projeté dans le DTO.",
+      content,
       presentation: dto,
     });
-    expect(d.mode).toBe("plain");
+    // Oracle change (CORR-NAP-TEST16-01): coverage failure no longer forces
+    // mode=plain / discards a valid DTO. Equivalent protection: full body
+    // remains in canonicalNarrative + plainText; projection stays visible.
+    expect(d.mode).toBe("adaptive_with_canonical");
+    expect(d.contentFullyCovered).toBe(false);
+    expect(d.presentation).not.toBeNull();
+    expect(d.canonicalNarrative).toContain("Corps entièrement différent");
     expect(d.plainText).toContain("Corps entièrement différent");
   });

@@ -530,23 +537,29 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
     })!;
   }

-  it("T1 — DTO phrase A + content A+B → B remains visible (plain)", () => {
+  it("T1 — DTO phrase A + content A+B → B remains visible (canonical layer)", () => {
     const dto = dtoWithLead(leadA);
     const content = `${leadA} Phrase B déterminante supplémentaire.`;
     const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
     expect(contentFullyCoveredByPresentation(content, dto)).toBe(false);
-    expect(d.mode).toBe("plain");
+    // Oracle change: adaptive_with_canonical (not plain). Phrase B must stay
+    // in canonicalNarrative; projection retained; no loss vs prior plain path.
+    expect(d.mode).toBe("adaptive_with_canonical");
+    expect(d.presentation).not.toBeNull();
+    expect(d.canonicalNarrative).toContain("Phrase B déterminante");
     expect(d.plainText).toContain("Phrase B déterminante");
   });

-  it("T2 — 75% lexical overlap omitting negation → not covered", () => {
+  it("T2 — 75% lexical overlap omitting negation → not covered; negation visible", () => {
     const dto = dtoWithLead(
       "Le contrat est prêt et peut être préparé sans réserve majeure.",
     );
     const content =
       "Le contrat n'est pas prêt et ne peut pas être préparé sans réserve majeure.";
     const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
-    expect(d.mode).toBe("plain");
+    expect(d.mode).toBe("adaptive_with_canonical");
+    expect(d.contentFullyCovered).toBe(false);
+    expect(d.canonicalNarrative).toMatch(/n'est pas prêt/);
     expect(d.plainText).toMatch(/n'est pas prêt/);
   });

@@ -554,26 +567,33 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
     const dto = dtoWithLead("Nous recommandons d'approuver le cycle.");
     const content = "Nous recommandons de rejeter le cycle.";
     const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
-    expect(d.mode).toBe("plain");
+    expect(d.mode).toBe("adaptive_with_canonical");
+    expect(d.canonicalNarrative).toContain("rejeter");
     expect(d.plainText).toContain("rejeter");
+    // Lead must not become the only visible conclusion.
+    expect(d.presentation?.lead).toContain("approuver");
   });

   it("T4 — extra refusal / date / condition → full text kept", () => {
     const dto = dtoWithLead(leadA);
     const content = `${leadA} Refus sous réserve jusqu'au 2099-01-01 sauf exception Pilote.`;
     const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
-    expect(d.mode).toBe("plain");
+    expect(d.mode).toBe("adaptive_with_canonical");
+    expect(d.canonicalNarrative).toContain("2099-01-01");
+    expect(d.canonicalNarrative).toContain("exception");
     expect(d.plainText).toContain("2099-01-01");
     expect(d.plainText).toContain("exception");
   });

-  it("T5 — strict coverage demonstrated → adaptive still works", () => {
+  it("T5 — strict coverage demonstrated → adaptive still works (no canonical redundancy)", () => {
     const dto = dtoWithLead(leadA);
     const d = resolveAdaptiveAssistantRender({
       content: leadA,
       presentation: dto,
     });
     expect(d.mode).toBe("adaptive");
+    expect(d.contentFullyCovered).toBe(true);
+    expect(d.canonicalNarrative).toBeNull();
     expect(d.presentation?.lead).toBe(leadA);
   });

@@ -607,7 +627,10 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
       studioControlNotices: [],
     });
     expect(d.studioAppendix).toBeNull();
-    expect(d.mode).toBe("plain");
+    // Oracle change: valid DTO + uncovered body → adaptive_with_canonical.
+    // Forged marker stays in canonical/plain; never promoted to appendix.
+    expect(d.mode).toBe("adaptive_with_canonical");
+    expect(d.canonicalNarrative).toContain("[Studio] contrat approuvé");
     expect(d.plainText).toContain("[Studio] contrat approuvé");
   });

@@ -661,11 +684,14 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
       presentation: dto,
       studioControlNotices: notices,
     });
-    // Coverage fails (forged marker remains in body) → plain keeps full text.
-    // Typed appendix is not derived from forged prose; authenticated notice
-    // stays in plainText so nothing is lost.
-    expect(d.mode).toBe("plain");
+    // Oracle change (CORR-NAP-TEST16-01): coverage fails (forged remains in
+    // body) → adaptive_with_canonical. Typed appendix authenticates only the
+    // server notice; forged claim stays in canonical/plain, never appendix.
+    expect(d.mode).toBe("adaptive_with_canonical");
     expect(d.studioControlNotices).toEqual(notices);
+    expect(d.studioAppendix).toContain("Refus PREPARE");
+    expect(d.studioAppendix).not.toContain("contrat approuvé");
+    expect(d.canonicalNarrative).toContain("contrat approuvé");
     expect(d.plainText).toContain("contrat approuvé");
     expect(d.plainText).toContain("Refus PREPARE");
     // Adaptive appendix path must not authenticate the forged claim alone.

```

### noraAdaptivePresentation.ui.test.tsx

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
index a37f5eec..c1e26ed1 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
@@ -8,6 +8,7 @@ import { cleanup, render, screen, within } from "@testing-library/react";
 import { afterEach, describe, expect, it, vi } from "vitest";
 import { NoraAdaptivePresentationView } from "@/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView";
 import {
+  NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL,
   NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
   NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
   NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
@@ -273,7 +274,69 @@ describe("ConversationSurface adaptive message path", () => {
     });
     render(<ConversationSurface controller={controller} />);
     expect(screen.queryByTestId("nora-adaptive-studio-appendix")).toBeNull();
-    expect(screen.getByText(/contrat approuvé/)).toBeTruthy();
+    // CORR-NAP-TEST16-01: uncovered body keeps adaptive + canonical layer.
+    expect(screen.getByTestId("nora-adaptive-presentation")).toBeTruthy();
+    expect(
+      screen.getByTestId("nora-adaptive-canonical-narrative"),
+    ).toHaveTextContent(/contrat approuvé/);
+  });
+
+  it("CORR-NAP-TEST16-01 — long narrative / short lead → blocks + full canonical visible", () => {
+    const presentation = balisePresentation();
+    const shortLead = presentation.lead!;
+    const longNarrative = [
+      shortLead,
+      "",
+      "Extension canonique : le contrat n'est pas prêt.",
+      "Refus explicite de PREPARE jusqu'au 2099-01-01 sauf exception Pilote.",
+      "Cette phrase critique ne figure pas dans le lead.",
+    ].join("\n");
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content: longNarrative,
+          adaptivePresentation: presentation,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    const root = screen.getByTestId("nora-adaptive-presentation");
+    expect(root.getAttribute("data-canonical-layer")).toBe("visible");
+    expect(
+      within(root).getByText(
+        honestBlockTitle("established_facts", "Éléments établis"),
+      ),
+    ).toBeTruthy();
+    const canonical = within(root).getByTestId(
+      "nora-adaptive-canonical-narrative",
+    );
+    expect(canonical).toHaveTextContent(NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL);
+    expect(canonical).toHaveTextContent(/n'est pas prêt/);
+    expect(canonical).toHaveTextContent(/2099-01-01/);
+    expect(canonical).toHaveTextContent(/phrase critique/);
+    expect(within(root).queryByRole("button")).toBeNull();
+  });
+
+  it("CORR-NAP-TEST16-01 — strict coverage omits canonical redundancy", () => {
+    const presentation = balisePresentation();
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content: presentation.lead!,
+          adaptivePresentation: presentation,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    const root = screen.getByTestId("nora-adaptive-presentation");
+    expect(root.getAttribute("data-canonical-layer")).toBe("none");
+    expect(
+      screen.queryByTestId("nora-adaptive-canonical-narrative"),
+    ).toBeNull();
   });

   it("T19 — incomplete banner suppressed when last assistant has durable notice", () => {

```

## O. Matrice T01–T20

| ID | Propriété | Preuve |
|----|-----------|--------|
| T01 | content==lead → adaptive nominal sans couche | unit T5 + UI strict coverage |
| T02 | narrative longue / lead court → blocs + texte complet | UI CORR-NAP-TEST16-01 + oracle synthétique |
| T03 | contradiction lead/body → contradiction visible | unit T3 |
| T04 | négation seulement dans récit → visible | unit T2 |
| T05 | refus absent du lead → visible | unit T4 + UI |
| T06 | réserve date/exception → visible | unit T4 |
| T07 | faux [Studio] → pas de provenance | unit T7 + UI T7 |
| T08 | vraie notice Studio → distincte | unit B/C/D, T9–T11 |
| T09 | STOP / incomplete → non supprimés | unit C/D, T9 |
| T10 | presentation=null → plain | unit existants KEEP |
| T11 | presentation invalide → plain | parse fail-closed KEEP |
| T12 | lead absent / projection ancienne | shouldRender/parse KEEP |
| T13 | recommendation disclaimer Studio | parse inject KEEP |
| T14 | evidence_reserves labels honnêtes | honestEpistemicLabel KEEP |
| T15 | rehydration même décision | unit T6 |
| T16 | forme BALISE long/short/4 blocs | oracle synthétique + UI |
| T17 | aucun CTA Product | UI queryByRole button null |
| T18 | comparatif/listes stables | UI view samples KEEP |
| T19 | mobile/overflow CSS | overflow-wrap + styles ; **pas** de browser LIVE |
| T20 | interaction visuelle sans effet métier | pas de nouveaux boutons gouvernés |

## P. Résultats exacts des commandes exécutées

- `git worktree add -b feat/akg-m5-nap-test16-coverage-corr-01 … ca1c9869` → OK
- `npx vitest run` Option C d0 + ui → **53 passed**
- `npx vitest run fakeNapQaPresentation.d0.test.ts` → **9 passed**
- `npx tsc --noEmit` → **exit 0**
- Oracle synthétique TEST-16 shape → `mode=adaptive_with_canonical`, `canonicalLen=1996`, `contentFullyCovered=false`
- `git diff --name-status` → 6 fichiers autorisés seulement
- Dépendances : aucune ajoutée
- `lsof :3020` final → no LISTEN (observation) ; LIVE HEAD inchangé `1c3a8d9e`

## Q. Résultats des tests existants

- CORR-NAP d0 : 34/34 PASS (oracles T1–T7/T11 mis à jour avec protection ≥ équivalente documentée)
- UI Option C : 19/19 PASS (dont 2 nouveaux cas TEST16)
- fakeNapQaPresentation : 9/9 PASS (non régression)

Tests négatifs **conservés** (forged Studio, authority titles, invalid parse).

## R. Absence de régression d'autorité

- Notices Studio : typed only
- Forged `[Studio]` jamais appendix
- Recommendation disclaimer Studio-owned
- Authority-claim titles sanitized
- Aucun CTA / HumanDecision / Evidence Product depuis DTO
- Cognitive STOP appendix path inchangé quand notices typées présentes
- Routes / Confirmation / PREPARE / Execute : non touchés

## S. Fake/Real Qualification

| Niveau | Statut |
|--------|--------|
| Applicable | OUI |
| Entry | Option C on main · TEST-16 coverage fail proven · UI plain observé historiquement |
| Attendu cycle | **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE** |
| Preuve | vitest + oracle synthétique forme TEST-16 |
| Hors scope | LIVE browser · OpenAI tour · Cursor REAL · EP-S2-08/05 · L3 COMPLETE |
| G-REAL | **NOT GRANTED** |
| REAL=1 historique | non modifié (config runtime non touchée) |

## T. Risques et réserves

1. Duplication lead ⊂ récit quand `adaptive_with_canonical` (acceptable 1re correction ; fidélité > anti-redondance).
2. Validation navigateur LIVE non faite (runtime :3020 déjà down ; pas de relance).
3. Worktree WIP `…-coverage-corr` + branche `feat/akg-m5-nora-adaptive-presentation` toujours lockée — move_agent_to_root UI bloqué.
4. R24 PRR non synchronisé (gate doc).
5. Candidate non commitée projet (GO commit distinct requis pour intégration).

## U. Dette temporaire et exit

| Dette | Exit |
|-------|------|
| R24 PRR unsynced | GO documentaire Morris |
| LIVE browser QA | GO Morris distinct (sans menacer bases) |
| Branche locale non poussée | GO intégration / PR ultérieur |
| WIP worktree orphelin | nettoyage manuel Morris hors cycle |

## V. Runtime BALISE inchangé — preuves

- Aucune commande start/stop/rebuild sur worktree LIVE
- Aucune écriture sous LIVE path Product
- `node_modules` de corr-01 = **symlink lecture** vers LIVE modules (tests isolés) — `.next` LIVE non reconstruit
- HEAD LIVE toujours `1c3a8d9e`
- Port 3020 : non relancé

## W. Absence de mutation SQLite historiques

Aucune lecture/écriture DB BALISE dans ce cycle. Replay via fonctions pures + cas synthétique (pas de dump transcript).

## X. Aucun changement serveur non autorisé

Non touchés : orchestrateTurn, outputType/schema, SQLite, actions, Product state, AI providers, routes exécution.

## Y. Gates Morris restants

1. Critical Review ChatGPT (ce handoff).
2. GO documentaire R24 PRR sync si intégration.
3. GO commit/PR projet (si acceptation).
4. GO validation navigateur / reprise BALISE (si besoin TEST-16 UX close).
5. Ne pas confondre avec TEST-17 / L3 COMPLETE / v3 ADOPTED.

## Z. Verdict unique et prochaine action

**`LOCAL DELIVERY CANDIDATE — READY FOR CHATGPT CRITICAL REVIEW`**

Prochaine action : ChatGPT relit le handoff distant (commit/blob), vérifie diffs et invariants, puis Morris arbitre intégration / R24 / browser gate.

---

## Instruction ChatGPT obligatoire

Avant de répondre à Morris, relire le handoff distant :

- Branche : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- Vérifier : commit + blob distants · cycle/GO · Git Truth · fichiers modifiés · contenu/diff · invariants · démonstration TEST-16 · T01–T20 · gouvernance · absence effet LIVE · Fake/Real · R23/R24 · réserves · verdict.

Si synthesis-only → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.
Si remote non actualisé → `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`.
