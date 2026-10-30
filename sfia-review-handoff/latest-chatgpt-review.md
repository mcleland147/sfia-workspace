# ChatGPT Review Pack — CORR-NAP-TEST16-01 / CR-02

**Date/heure UTC :** 2026-10-30T20:15:46Z
**Cycle unique :** AKG-M5 / L3-S2 / CORR-NAP-TEST16-01 / CR-02
**Campagne source :** LIVE-E2E-01 / BALISE (TEST-16 UX reserve)
**Profil :** CRITICAL
**Typologie :** EVOL / CORRECTIVE MICRO-CYCLE
**GO Morris exact :** Corriger R1 et R2 dans la candidate existante, sans élargir le scope.

**Verdict unique :** `LOCAL CORRECTION CR-02 — READY FOR CHATGPT CRITICAL REVIEW`

**Anti-claims :** aucun commit/push/PR projet · aucun merge · main non modifié · PRR non écrite · runtime BALISE non redémarré · aucun OpenAI · G-REAL NOT GRANTED · TEST-15/17 non touchés · TEST-16 PASS global NON déclaré · L3 COMPLETE NON déclaré.

**Handoff candidate précédente :** commit `71315921ceda80165bd6c3cac112b4f95b64f9ec` · blob `a4848200cffee6d86ee2f73089a7fb5527d4844d` · verdict `LOCAL DELIVERY CANDIDATE — READY FOR CHATGPT CRITICAL REVIEW` · Critical Review : `CORRECTION REQUIRED — OPTION C PRESENTATION TRUST HIERARCHY NOT YET SAFE` (R1, R2).

---

## 1. UTC

2026-10-30T20:15:46Z

## 2. GO Morris consommé

Corriger R1 et R2 dans la candidate existante, sans élargir le scope.

Autorisé consommé : 6 fichiers Product · tests déterministes · Review Pack FULL · Handoff L3.
Non consommé : commit/push projet · PR · merge · PRR/Roadmap · OpenAI · Cursor REAL · LIVE restart · SQLite · TEST-15/17.

## 3. Git Truth initial / final

| Ref | SHA |
|-----|-----|
| origin/main local + ls-remote | `ca1c9869f905b394808c953649910d60fbfcb984` |
| corr-01 HEAD (base) | `ca1c9869f905b394808c953649910d60fbfcb984` |
| Branche | `feat/akg-m5-nap-test16-coverage-corr-01` |
| Repo | `mcleland147/sfia-workspace` |

STOP baseline : non déclenché.

**Final :** même base ; 6 fichiers Product WIP non commités + `.tmp-sfia-review/chatgpt-review.md` local. Aucun commit projet.

## 4. Worktree corr-01 et statut

Path : `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01`

Contrainte Cursor : **pas** de `move_agent_to_root` (branche `feat/akg-m5-nora-adaptive-presentation` déjà tenue par `…-nap-test16-coverage-corr`). Travail en chemins absolus corr-01 uniquement.

Worktrees LIVE / WIP parallèle : **non modifiés**.

## 5. Sources lues

Processus SFIA v2.6 (templates, routing, rules, operating model, validation) · CKC cycle 8 / carte synthétique (guidance) · Convergence build/roadmap/C1 · AKG-M5 trajectory · doctrine v3 30/32/34/35 · PRR README + volumes 03/05/06/07/08/09 (lecture) · handoff `71315921` · `presentationLabels.ts` (RO) · candidate Option C.

## 6. Convergence Pre-check

Trajectoire L3-S2 OPEN → micro-correctif CR-02 → Critical Review → décision Morris intégration → validation BALISE sous gate distinct. Method-candidate guidance only.

## 7. R23 — composants / flux / invariants

| Élément | Statut |
|---------|--------|
| Pipeline Nora → Memory B → resolve → ConversationSurface → View | DOCUMENTED |
| DTO / persist / rehydration | KEEP / COVERAGE VERIFIED |
| CORR-NAP-02 couverture stricte body≡lead | KEEP / BEHAVIOR PROVEN |
| CORR-NAP-03 provenance Studio typed | KEEP / BEHAVIOR PROVEN |
| Mode `adaptive_with_canonical` | KEEP + CR-02 hierarchy ADAPT |
| View composition | ADAPT (canonical-first) |
| ConversationSurface formatage display | ADAPT (R2) |
| Serveur / schema / SQLite | NON TOUCHÉ |

**KNOWN GAP :** validation navigateur LIVE BALISE hors scope.

Invariants G01–G20 conservés ; couverture non floue.

## 8. R24 — impact et dette

**SEMANTIC IMPACT — RENDER COMPOSITION** (ordre + avertissement + formatage display).

| Volume | Action candidate (GO doc distinct) |
|--------|-------------------------------------|
| PRR 03 | Ordre canonique → projection secondaire + warning |
| PRR 08 | Oracles CR-02 UI contradiction / formatage |
| PRR 09 | Réserve TEST-16 / limites browser |
| README | Si index modes |
| PRR 06 | NO PERSISTENCE SEMANTIC IMPACT |

Claim `PRR SYNC COMPLETED` : **non déclaré**. Dette : sync PRR sous GO documentaire Morris.

## 9. Réserves initiales R1 / R2

**R1** — blocs structurés avant récit quand coverage=false → risque de promouvoir une recommandation contradictoire.

**R2** — `canonicalNarrative` brut ≠ chemin `formatNoraAssistantDisplayText` du plain historique.

## 10. Solution finale

### R1 — hiérarchie

Quand `adaptive_with_canonical` (`data-composition=canonical-first`) :

1. Section **Réponse complète de Nora** en premier (visible par défaut, `h3`).
2. Section **Projection structurée (Nora — non certifiée)** ensuite, avec avertissement explicite de non-certification / divergence possible.
3. Recommendation blocks conservent disclaimer Studio-owned ; aucun CTA.
4. Notices Studio authentifiées restent en appendix distinct.

Quand coverage=true : composition `projection-only` inchangée (pas de couche redondante).

Pas de détection sémantique de contradiction ; hiérarchie + warning déterministes.

### R2 — formatage

Qualification de `formatNoraAssistantDisplayText` (RO) :

- Unescape `\n`/`\t`, soft markdown, jargon F2 ciblé.
- **Ne supprime pas** négations / dates / refus / exceptions génériques.
- Retire des footers jargon type `RECOMMANDATION — PAS UNE DÉCISION HUMAINE` (parity plain ; compensé par disclaimer Studio + honesty note dans la vue).
- Ne touche pas `[Studio]` forgé ; notices authentifiées déjà hors body via strip typed.

Application : ConversationSurface passe `formatNoraAssistantDisplayText(decision.canonicalNarrative)` en display-only. Transcript durable inchangé. Appendix Studio non dupliqué dans le récit.

## 11–13. Diffs utiles (candidate complète depuis main = Delivery + CR-02)

Scope final (6 fichiers Product) :

```
M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
M projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
```

### noraAdaptivePresentation.ts

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
index d6422018..ecf2b0a3 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
@@ -710,8 +710,32 @@ export function contentFullyCoveredByPresentation(
   return nBody === nLead;
 }

+/**
+ * CORR-NAP-TEST16-01 / CR-02 — Pilot-facing label for the canonical narrative
+ * layer when structured projection and body diverge (strict coverage false).
+ * Canonical is the conversational restitution reference (not HumanDecision /
+ * Evidence Product).
+ */
+export const NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL =
+  "Réponse complète de Nora" as const;
+
+/**
+ * CR-02 R1 — secondary structured projection when coverage is not demonstrated.
+ * Never presented as certified / GO / HumanDecision.
+ */
+export const NORA_ADAPTIVE_SECONDARY_PROJECTION_LABEL =
+  "Projection structurée (Nora — non certifiée)" as const;
+
+export const NORA_ADAPTIVE_SECONDARY_PROJECTION_WARNING =
+  "Cette projection est une reformulation Nora non certifiée et peut diverger du récit complet ci-dessus. Le récit complet fait référence pour la restitution conversationnelle." as const;
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
@@ -721,12 +745,26 @@ export type AdaptiveAssistantRenderDecision = {
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
@@ -756,16 +794,24 @@ export function resolveAdaptiveAssistantRender(input: {
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
@@ -774,6 +820,8 @@ export function resolveAdaptiveAssistantRender(input: {
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
index 69111019..5192300f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
@@ -1,13 +1,16 @@
 "use client";

-import type { ReactElement } from "react";
+import type { ReactElement, ReactNode } from "react";
 import type {
   NoraAdaptivePresentation,
   NoraAdaptivePresentationBlock,
 } from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
 import {
+  NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL,
   NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
   NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
+  NORA_ADAPTIVE_SECONDARY_PROJECTION_LABEL,
+  NORA_ADAPTIVE_SECONDARY_PROJECTION_WARNING,
   honestBlockTitle,
   honestEpistemicLabel,
   sanitizeProvenanceNote,
@@ -240,6 +243,29 @@ function renderBlock(
   );
 }

+function ProjectionChrome({
+  presentation,
+}: {
+  presentation: NoraAdaptivePresentation;
+}): ReactElement {
+  return (
+    <>
+      {presentation.eyebrow ? (
+        <p className={styles.eyebrow}>{presentation.eyebrow}</p>
+      ) : null}
+      {presentation.title ? (
+        <h3 className={styles.title}>{presentation.title}</h3>
+      ) : null}
+      {presentation.lead ? (
+        <p className={styles.lead}>{presentation.lead}</p>
+      ) : null}
+      <div className={styles.blocks}>
+        {presentation.blocks.map((block, index) => renderBlock(block, index))}
+      </div>
+    </>
+  );
+}
+
 export type NoraAdaptivePresentationViewProps = {
   presentation: NoraAdaptivePresentation;
   /**
@@ -247,6 +273,13 @@ export type NoraAdaptivePresentationViewProps = {
    * blocks so server notices are never masked by the DTO.
    */
   studioAppendix?: string | null;
+  /**
+   * CORR-NAP-TEST16-01 / CR-02 — full canonical Nora narrative when strict
+   * coverage failed. Visible by default, rendered BEFORE the secondary
+   * projection. Caller should pass pilot-facing formatted text (same path as
+   * plain). Null/empty when body ≡ lead (nominal adaptive, no redundancy).
+   */
+  canonicalNarrative?: string | null;
   /** Scrubbed plain fallback when caller forces plain — unused in adaptive mode. */
   fallbackText?: string;
 };
@@ -255,30 +288,63 @@ export type NoraAdaptivePresentationViewProps = {
  * Bounded adaptive renderer for Nora Option C presentation DTO.
  * No Product CTAs, no HTML injection, no governed action hooks.
  * CORR-NAP-01 — honest epistemic labels; Studio appendix never hidden.
+ * CORR-NAP-TEST16-01 / CR-02 — when coverage fails: canonical first, then
+ * secondary non-certified projection (never promote projection over narrative).
  */
 export function NoraAdaptivePresentationView({
   presentation,
   studioAppendix = null,
+  canonicalNarrative = null,
 }: NoraAdaptivePresentationViewProps): ReactElement {
   const appendix = (studioAppendix ?? "").trim();
+  const narrative = (canonicalNarrative ?? "").trim();
+  const composition = narrative ? "canonical-first" : "projection-only";
+
+  let body: ReactNode;
+  if (narrative) {
+    body = (
+      <>
+        <section
+          className={styles.canonicalNarrative}
+          aria-label={NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL}
+          data-testid="nora-adaptive-canonical-narrative"
+        >
+          <h3 className={styles.canonicalNarrativeLabel}>
+            {NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL}
+          </h3>
+          <p className={styles.canonicalNarrativeBody}>{narrative}</p>
+        </section>
+        <section
+          className={styles.secondaryProjection}
+          aria-label={NORA_ADAPTIVE_SECONDARY_PROJECTION_LABEL}
+          data-testid="nora-adaptive-secondary-projection"
+        >
+          <h4 className={styles.secondaryProjectionLabel}>
+            {NORA_ADAPTIVE_SECONDARY_PROJECTION_LABEL}
+          </h4>
+          <p
+            className={styles.secondaryProjectionWarning}
+            data-testid="nora-adaptive-secondary-warning"
+          >
+            {NORA_ADAPTIVE_SECONDARY_PROJECTION_WARNING}
+          </p>
+          <ProjectionChrome presentation={presentation} />
+        </section>
+      </>
+    );
+  } else {
+    body = <ProjectionChrome presentation={presentation} />;
+  }
+
   return (
     <div
       className={styles.root}
       data-testid="nora-adaptive-presentation"
       data-presentation-version={presentation.version}
+      data-canonical-layer={narrative ? "visible" : "none"}
+      data-composition={composition}
     >
-      {presentation.eyebrow ? (
-        <p className={styles.eyebrow}>{presentation.eyebrow}</p>
-      ) : null}
-      {presentation.title ? (
-        <h3 className={styles.title}>{presentation.title}</h3>
-      ) : null}
-      {presentation.lead ? (
-        <p className={styles.lead}>{presentation.lead}</p>
-      ) : null}
-      <div className={styles.blocks}>
-        {presentation.blocks.map((block, index) => renderBlock(block, index))}
-      </div>
+      {body}
       <p
         className={styles.epistemicHonesty}
         data-testid="nora-adaptive-epistemic-honesty"

```

### NoraAdaptivePresentationView.module.css

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
index 17250b3b..a6a25993 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
@@ -218,6 +218,69 @@
   line-height: 1.4;
 }

+/* CR-02 R1 — canonical is primary restitution when coverage fails. */
+.canonicalNarrative {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  margin: 0;
+  padding: var(--pm6-space-3);
+  border-radius: var(--pm6-radius-md);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface);
+  max-width: 100%;
+  overflow-wrap: anywhere;
+}
+
+.canonicalNarrativeLabel {
+  margin: 0;
+  font-size: var(--pm6-text-body);
+  font-weight: 650;
+  letter-spacing: 0.01em;
+  color: var(--pm6-ink);
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
+/* CR-02 R1 — structured projection is secondary / non-certified. */
+.secondaryProjection {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  margin: 0;
+  padding: var(--pm6-space-3);
+  border-radius: var(--pm6-radius-md);
+  border: 1px dashed var(--pm6-border-soft);
+  background: var(--pm6-surface-sunken);
+  max-width: 100%;
+  overflow-wrap: anywhere;
+  opacity: 0.96;
+}
+
+.secondaryProjectionLabel {
+  margin: 0;
+  font-size: var(--pm6-text-caption);
+  font-weight: 600;
+  letter-spacing: 0.01em;
+  color: var(--pm6-muted-strong);
+  line-height: 1.35;
+}
+
+.secondaryProjectionWarning {
+  margin: 0;
+  font-size: var(--pm6-text-caption);
+  color: var(--pm6-muted-strong);
+  line-height: 1.4;
+}
+
 .epistemicHonesty {
   margin: 0;
   font-size: var(--pm6-text-caption);

```

### ConversationSurface.tsx

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 00836627..521c5c68 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -624,13 +624,25 @@ export function ConversationSurface({
                     studioControlNotices: message.studioControlNotices,
                   });
                   if (
-                    decision.mode === "adaptive" &&
+                    (decision.mode === "adaptive" ||
+                      decision.mode === "adaptive_with_canonical") &&
                     decision.presentation
                   ) {
+                    // CR-02 R2 — same pilot-facing formatter as plain path.
+                    // Display-only; durable content / Memory B unchanged.
+                    // Authenticated Studio notices stay in studioAppendix only.
+                    const canonicalDisplay =
+                      decision.canonicalNarrative != null &&
+                      decision.canonicalNarrative.trim() !== ""
+                        ? formatNoraAssistantDisplayText(
+                            decision.canonicalNarrative,
+                          )
+                        : null;
                     return (
                       <NoraAdaptivePresentationView
                         presentation={decision.presentation}
                         studioAppendix={decision.studioAppendix}
+                        canonicalNarrative={canonicalDisplay}
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
index a37f5eec..567b3288 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
@@ -8,14 +8,18 @@ import { cleanup, render, screen, within } from "@testing-library/react";
 import { afterEach, describe, expect, it, vi } from "vitest";
 import { NoraAdaptivePresentationView } from "@/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView";
 import {
+  NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL,
   NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
   NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
   NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
+  NORA_ADAPTIVE_SECONDARY_PROJECTION_LABEL,
+  NORA_ADAPTIVE_SECONDARY_PROJECTION_WARNING,
   appendStudioControlNotices,
   honestBlockTitle,
   parseNoraAdaptivePresentation,
   type NoraAdaptivePresentation,
 } from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
+import { formatNoraAssistantDisplayText } from "@/features/project-assistant/presentationLabels";
 import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
 import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";

@@ -273,7 +277,194 @@ describe("ConversationSurface adaptive message path", () => {
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
+  it("CORR-NAP-TEST16-01 / CR-02 — long narrative / short lead → canonical before secondary projection", () => {
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
+    expect(root.getAttribute("data-composition")).toBe("canonical-first");
+    const canonical = within(root).getByTestId(
+      "nora-adaptive-canonical-narrative",
+    );
+    const secondary = within(root).getByTestId(
+      "nora-adaptive-secondary-projection",
+    );
+    expect(canonical.compareDocumentPosition(secondary)).toBe(
+      Node.DOCUMENT_POSITION_FOLLOWING,
+    );
+    expect(canonical).toHaveTextContent(NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL);
+    expect(canonical).toHaveTextContent(/n'est pas prêt/);
+    expect(canonical).toHaveTextContent(/2099-01-01/);
+    expect(canonical).toHaveTextContent(/phrase critique/);
+    expect(secondary).toHaveTextContent(NORA_ADAPTIVE_SECONDARY_PROJECTION_LABEL);
+    expect(
+      within(root).getByTestId("nora-adaptive-secondary-warning"),
+    ).toHaveTextContent(NORA_ADAPTIVE_SECONDARY_PROJECTION_WARNING);
+    expect(
+      within(secondary).getByText(
+        honestBlockTitle("established_facts", "Éléments établis"),
+      ),
+    ).toBeTruthy();
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
+    expect(root.getAttribute("data-composition")).toBe("projection-only");
+    expect(
+      screen.queryByTestId("nora-adaptive-canonical-narrative"),
+    ).toBeNull();
+    expect(
+      screen.queryByTestId("nora-adaptive-secondary-projection"),
+    ).toBeNull();
+  });
+
+  it("CR-02 R1-T05 — contradiction approuver/rejeter: canonical refusal before projected recommendation", () => {
+    const presentation = parseNoraAdaptivePresentation({
+      version: 1,
+      eyebrow: null,
+      title: null,
+      lead: "Nous recommandons d'approuver le cycle.",
+      blocks: [
+        {
+          kind: "recommendation",
+          title: null,
+          statement: "Nous recommandons d'approuver le cycle.",
+          disclaimer: null,
+        },
+      ],
+      provenanceNote: null,
+      noGovernedActionNote: null,
+    })!;
+    const content =
+      "Nous recommandons de rejeter le cycle. Refus jusqu'au 2099-01-01 sauf exception Pilote.";
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content,
+          adaptivePresentation: presentation,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    const root = screen.getByTestId("nora-adaptive-presentation");
+    const canonical = within(root).getByTestId(
+      "nora-adaptive-canonical-narrative",
+    );
+    const secondary = within(root).getByTestId(
+      "nora-adaptive-secondary-projection",
+    );
+    expect(canonical).toHaveTextContent(/rejeter/);
+    expect(canonical).toHaveTextContent(/2099-01-01/);
+    expect(canonical.compareDocumentPosition(secondary)).toBe(
+      Node.DOCUMENT_POSITION_FOLLOWING,
+    );
+    expect(secondary).toHaveTextContent(/approuver/);
+    expect(within(root).queryByRole("button")).toBeNull();
+    // Recommendation stays non-decisionnal; honesty note may mention HumanDecision
+    // as a negation — that is not a promotion.
+    expect(secondary).toHaveTextContent(NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER);
+    expect(within(root).queryByText(/GO confirm/i)).toBeNull();
+  });
+
+  it("CR-02 R2 — canonical layer uses formatNoraAssistantDisplayText (escapes, no HTML)", () => {
+    const presentation = balisePresentation();
+    const rawBody = [
+      presentation.lead!,
+      "Ligne\\navec\\téchappements.",
+      "**Emphase** et `code` restant lisibles.",
+      "Négation critique : le contrat n'est pas prêt.",
+    ].join("\n");
+    const expected = formatNoraAssistantDisplayText(rawBody);
+    expect(expected).toContain("Ligne\navec\téchappements");
+    expect(expected).toContain("Emphase");
+    expect(expected).not.toContain("**");
+    expect(expected).toMatch(/n'est pas prêt/);
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content: rawBody,
+          adaptivePresentation: presentation,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    const canonical = screen.getByTestId("nora-adaptive-canonical-narrative");
+    expect(canonical).toHaveTextContent(/Ligne/);
+    expect(canonical).toHaveTextContent(/échappements/);
+    expect(canonical).toHaveTextContent(/Emphase/);
+    expect(canonical).toHaveTextContent(/n'est pas prêt/);
+    expect(canonical.innerHTML).not.toMatch(/<script|onload=/i);
+  });
+
+  it("CR-02 R2-T06 — authenticated Studio notice once in appendix, not duplicated as canonical primary", () => {
+    const presentation = balisePresentation();
+    const notices = ["Refus PREPARE : intention non confirmée."];
+    const content = appendStudioControlNotices(
+      `${presentation.lead!}\n\nCorps supplémentaire non couvert.`,
+      notices,
+    );
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content,
+          adaptivePresentation: presentation,
+          studioControlNotices: notices,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    const appendix = screen.getByTestId("nora-adaptive-studio-appendix");
+    expect(appendix).toHaveTextContent("Refus PREPARE");
+    const canonical = screen.getByTestId("nora-adaptive-canonical-narrative");
+    // Authenticated notice stripped from body before canonical; appears in appendix only.
+    expect(canonical).not.toHaveTextContent("Refus PREPARE : intention non confirmée.");
+    expect(canonical).toHaveTextContent(/Corps supplémentaire/);
+    expect(screen.getAllByText(/Refus PREPARE/).length).toBe(1);
   });

   it("T19 — incomplete banner suppressed when last assistant has durable notice", () => {

```

## 14. Tests ajoutés / modifiés

- UI : ordre canonical→secondary (compareDocumentPosition).
- UI : R1-T05 contradiction approuver/rejeter.
- UI : R2 formatage escapes / markdown / négation.
- UI : R2-T06 notice authentifiée une seule fois (appendix).
- Unit d0 : oracles Delivery précédents conservés (`adaptive_with_canonical`).

## 15. Oracle contradiction

Contenu « rejeter…2099-01-01 » vs lead/block « approuver » :

- mode `adaptive_with_canonical` ;
- DOM : canonical contient `rejeter` **avant** secondary contenant `approuver` ;
- disclaimer recommendation présent ; aucun bouton CTA ; pas de « GO confirm ».

## 16. Oracle formatage

`Ligne\navec\t` + `**Emphase**` + négation → display unescaped, emphase sans `**`, négation conservée ; pas d'injection HTML.

## 17. Conservation canonique

Récit intégral accessible et prioritaire dès coverage=false. Couverture stricte inchangée.

## 18. Notices Studio / forged

Typed → appendix uniquement. Forged `[Studio]` reste dans canonical/plain, jamais appendix.

## 19. Tests exécutés

| Suite | Résultat |
|-------|----------|
| noraAdaptivePresentation.d0 | 34 PASS |
| noraAdaptivePresentation.ui | 22 PASS |
| fakeNapQaPresentation.d0 | 9 PASS |
| **Total** | **65 PASS** |

## 20. Typecheck / lint

- `tsc --noEmit` : exit 0
- eslint ciblé 3 fichiers surface/lib : exit 0

## 21. Fake/Real Qualification

Niveau : **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE**.
G-REAL : NOT GRANTED.
Hors scope : OpenAI LIVE · Cursor REAL · browser BALISE · TEST-17 · EP-S2-05/08 · L3 COMPLETE.

## 22–23. Runtime LIVE / BALISE

Observation passive : aucun LISTEN :3020. Aucun start/stop/rebuild/env/DB. LIVE HEAD historique non écrit. REAL=1 non modifié.

## 24. Réserves

1. Browser LIVE non validé (gate distinct).
2. Formateur retire certains footers jargon (parity plain) — disclaimers Studio dans la vue.
3. Candidate non commitée projet.
4. R24 PRR non écrite.
5. Duplication partielle lead ⊂ récit possible dans secondary (fidélité > anti-redondance).

## 25. Gates Morris restants

Critical Review ChatGPT → éventuel GO intégration/PR → GO R24 PRR → GO browser BALISE.

## 26. Verdict unique

**`LOCAL CORRECTION CR-02 — READY FOR CHATGPT CRITICAL REVIEW`**

## 27. Git Review Index

| Path | Role CR-02 |
|------|------------|
| noraAdaptivePresentation.ts | Labels secondary + warning |
| NoraAdaptivePresentationView.tsx | Composition canonical-first |
| *.module.css | Styles primary/secondary |
| ConversationSurface.tsx | formatNoraAssistantDisplayText sur canonical |
| *.d0.test.ts | Oracles Delivery conservés |
| *.ui.test.tsx | Oracles R1/R2 DOM |

## 28. Instruction ChatGPT obligatoire

Relire distant `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (SHA/blob de ce publish). Vérifier cycle/GO, Git Truth, 6 fichiers, diffs R1/R2, oracles UI hiérarchie/formatage, notices, tests, runtime, R23/R24, réserves, verdict.

Synthesis-only → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.
Remote non actualisé → `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`.
