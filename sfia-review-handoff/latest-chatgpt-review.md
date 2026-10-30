# ChatGPT Review Pack — CORR-NAP-TEST16-01 / CR-03

**Date/heure UTC :** 2026-10-30T20:27:53Z
**Cycle unique :** AKG-M5 / L3-S2 / CORR-NAP-TEST16-01 / CR-03
**Campagne source :** LIVE-E2E-01 / BALISE
**Profil :** CRITICAL
**Typologie :** EVOL / CORRECTIVE MICRO-CYCLE
**GO Morris exact :** Corriger uniquement la perte potentielle du récit canonique après formatage dans la candidate CR-02.

**Verdict unique :** `LOCAL CORRECTION CR-03 — READY FOR CHATGPT CRITICAL REVIEW`

**Anti-claims :** aucun commit/push/PR projet · main non modifié · PRR non écrite · BALISE non relancé · OpenAI/Cursor REAL non appelés · G-REAL NOT GRANTED · TEST-15/17 non touchés · TEST-16 PASS global NON déclaré · L3 COMPLETE NON déclaré.

**Handoff CR-02 :** `93bc4d9f55f9bcc03c1042d40ea2cdfac49a2f6a` / blob `df9bf75d673270e82a653f3b89dce6a8b2e4c1cd` · Critical Review : R1 PASS · R2 PASS partiel · réserve `CANONICAL DISPLAY LOSS EDGE CASE`.

---

## 1. UTC

2026-10-30T20:27:53Z

## 2. GO Morris consommé

Corriger uniquement la perte potentielle du récit canonique après formatage dans la candidate CR-02.

## 3. Git Truth initial / final

| Ref | SHA |
|-----|-----|
| origin/main local + remote | `ca1c9869f905b394808c953649910d60fbfcb984` |
| corr-01 HEAD | `ca1c9869f905b394808c953649910d60fbfcb984` |
| Branche | `feat/akg-m5-nap-test16-coverage-corr-01` |

Final : même base ; 6 fichiers Product WIP non commités. Aucun commit projet.

## 4. Worktree

`/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01`

Pas de `move_agent_to_root`. Chemins absolus corr-01 uniquement. LIVE / WIP parallèle non écrits.

## 5. Sources consultées

SFIA v2.6 processus · CKC cycle 8 / carte synthétique (guidance) · Convergence / C1 / AKG-M5 · doctrine v3 30/32/34/35 · PRR README + volumes 03/05/06/07/08/09 (lecture) · handoff CR-02 · `presentationLabels.ts` RO · candidate CR-02 dans corr-01.

## 6. Convergence Pre-check

L3-S2 OPEN → micro-correctif CR-03 → Critical Review → décision Morris.

## 7. R23

| Élément | Qualification |
|---------|---------------|
| Source conversationnelle / Memory B | DOCUMENTED · KEEP |
| `formatNoraAssistantDisplayText` | DOCUMENTED · RO · familles présentation / substitution / suppression identifiées |
| `resolveAdaptiveAssistantRender` | BEHAVIOR PROVEN · couverture stricte KEEP |
| View composition | BEHAVIOR PROVEN (CR-02) + CR-03 forceCanonicalFirst |
| Provenance Studio typed | COVERAGE VERIFIED · KEEP |
| Gap | KNOWN GAP — browser LIVE BALISE hors scope |

## 8. R24

**SEMANTIC IMPACT — RENDER COMPOSITION / CANONICAL FIDELITY.**

Préparer PRR 03 / 08 / 09 sous GO documentaire distinct. PRR 06 : NO PERSISTENCE SEMANTIC IMPACT. Claim sync completed : **non déclaré**.

## 9–10. Défaut CR-02 / cause code

Chemin :

1. `adaptive_with_canonical` + `canonicalNarrative` non vide
2. ConversationSurface appelle `formatNoraAssistantDisplayText` directement
3. Formateur peut retourner `""` (ex. `READY_NO_GATE`, `Nora n'émet pas de décision Pilote.`) ou supprimer un segment
4. View : `narrative.trim()` vide → `projection-only`
5. Projection divergente seule visible alors que `coverage=false`

Cause confirmée dans le code CR-02 : composition et texte formaté couplés ; pas de garde-fou fidélité.

## 11. Solution retenue

1. **`resolveAdaptiveCanonicalDisplayText(source, formatDisplay)`** (injecte le formateur) :
   - format vide sur source non vide → `cosmeticCanonicalNormalize(source)` (jamais vide si source non vide) ;
   - clé de fidélité exacte après normalize cosmétique : si égale → format OK ;
   - sinon (suppression / substitution) → affichage source cosmétique conservateur.
2. **ConversationSurface** utilise ce resolver pour `adaptive_with_canonical` ; passe `forceCanonicalFirst={true}`.
3. **View** : composition = `forceCanonicalFirst || narrative` — plus de bascule projection-only par seul effacement formaté.
4. Couverture stricte **non assouplie**. Pas de similarité floue pour coverage.

## 12. Alternatives écartées

| Alternative | Motif |
|-------------|-------|
| Modifier `formatNoraAssistantDisplayText` global | Hors GO |
| Similarité / overlap pour « format sûr » | Interdit |
| Toujours formater sans fallback | Perte fidélité |
| Second moteur / lib parsing | Interdit |
| Fallback plain systématique | Régression Option C CR-02 |

## 13–15. Fichiers et diffs (candidate complète depuis main)

```
M …/noraAdaptivePresentation.ts
M …/ConversationSurface.tsx
M …/NoraAdaptivePresentationView.tsx
M …/NoraAdaptivePresentationView.module.css
M …/noraAdaptivePresentation.d0.test.ts
M …/noraAdaptivePresentation.ui.test.tsx
```

### noraAdaptivePresentation.ts

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
index d6422018..18a9388f 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
@@ -710,8 +710,89 @@ export function contentFullyCoveredByPresentation(
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
+/**
+ * CR-03 — cosmetic-only normalize for fidelity compare / conservative display.
+ * Escapes + soft markdown markers only. Never deletes phrases or jargon.
+ */
+export function cosmeticCanonicalNormalize(text: string): string {
+  return text
+    .replace(/\\n/g, "\n")
+    .replace(/\\t/g, "\t")
+    .replace(/\\r/g, "")
+    .replace(/\\\*/g, "*")
+    .replace(/\*\*([^*]+)\*\*/g, "$1")
+    .replace(/__([^_]+)__/g, "$1")
+    .replace(/(^|\n)#{1,6}\s+/g, "$1")
+    .replace(/`([^`]+)`/g, "$1")
+    .replace(/[^\S\n]{2,}/g, " ")
+    .replace(/ *\n */g, "\n")
+    .trim();
+}
+
+function fidelityCompareKey(text: string): string {
+  return cosmeticCanonicalNormalize(text)
+    .toLowerCase()
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .replace(/\s+/g, " ")
+    .trim();
+}
+
+/**
+ * CR-03 — display text for adaptive_with_canonical primary layer.
+ *
+ * Uses the shared pilot formatter when the transform is presentation-pure
+ * (same fidelity key). If the formatter empties a non-empty source, or
+ * deletes/substitutes material (fidelity key diverges), fall back to a
+ * conservative cosmetic-only rendering of the source. Never returns empty
+ * when source is non-empty. Does not invent Studio provenance.
+ *
+ * `formatDisplay` is injected (typically formatNoraAssistantDisplayText) so
+ * this module does not depend on presentationLabels.
+ */
+export function resolveAdaptiveCanonicalDisplayText(
+  source: string,
+  formatDisplay: (text: string) => string,
+): string {
+  const raw = (source ?? "").trim();
+  if (!raw) return "";
+  const formatted = String(formatDisplay(raw) ?? "").trim();
+  if (!formatted) {
+    return cosmeticCanonicalNormalize(raw) || raw;
+  }
+  if (fidelityCompareKey(formatted) === fidelityCompareKey(raw)) {
+    return formatted;
+  }
+  // Destructive / substitutive scrub — keep source (cosmetic escapes only).
+  return cosmeticCanonicalNormalize(raw) || raw;
+}
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
@@ -721,12 +802,26 @@ export type AdaptiveAssistantRenderDecision = {
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
@@ -756,16 +851,24 @@ export function resolveAdaptiveAssistantRender(input: {
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
@@ -774,6 +877,8 @@ export function resolveAdaptiveAssistantRender(input: {
     studioAppendix,
     plainText: content,
     studioControlNotices: authenticated,
+    contentFullyCovered: true,
+    canonicalNarrative: null,
   };
 }


```

### ConversationSurface.tsx

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 00836627..5b056a32 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -54,7 +54,10 @@ import {
   presentLiveActivityTimeline,
 } from "./presentLiveActivityTimeline";
 import { NoraAdaptivePresentationView } from "./NoraAdaptivePresentationView";
-import { resolveAdaptiveAssistantRender } from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
+import {
+  resolveAdaptiveAssistantRender,
+  resolveAdaptiveCanonicalDisplayText,
+} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
 import styles from "./ConversationSurface.module.css";

 /**
@@ -624,13 +627,31 @@ export function ConversationSurface({
                     studioControlNotices: message.studioControlNotices,
                   });
                   if (
-                    decision.mode === "adaptive" &&
+                    (decision.mode === "adaptive" ||
+                      decision.mode === "adaptive_with_canonical") &&
                     decision.presentation
                   ) {
+                    // CR-02 R2 + CR-03 — pilot formatter with fidelity guard.
+                    // Coverage/mode drives composition; formatter must never
+                    // erase a non-empty uncovered narrative into projection-only.
+                    // Display-only; durable content / Memory B unchanged.
+                    const canonicalDisplay =
+                      decision.mode === "adaptive_with_canonical" &&
+                      decision.canonicalNarrative != null &&
+                      decision.canonicalNarrative.trim() !== ""
+                        ? resolveAdaptiveCanonicalDisplayText(
+                            decision.canonicalNarrative,
+                            formatNoraAssistantDisplayText,
+                          )
+                        : null;
                     return (
                       <NoraAdaptivePresentationView
                         presentation={decision.presentation}
                         studioAppendix={decision.studioAppendix}
+                        canonicalNarrative={canonicalDisplay}
+                        forceCanonicalFirst={
+                          decision.mode === "adaptive_with_canonical"
+                        }
                         fallbackText={formatNoraAssistantDisplayText(
                           message.content,
                         )}

```

### NoraAdaptivePresentationView.tsx

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
index 69111019..d2a266ba 100644
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
@@ -247,6 +273,19 @@ export type NoraAdaptivePresentationViewProps = {
    * blocks so server notices are never masked by the DTO.
    */
   studioAppendix?: string | null;
+  /**
+   * CORR-NAP-TEST16-01 / CR-02 / CR-03 — full canonical Nora narrative when
+   * strict coverage failed. Visible by default, rendered BEFORE the secondary
+   * projection. Caller applies resolveAdaptiveCanonicalDisplayText so a
+   * non-empty source is never erased by the pilot formatter.
+   */
+  canonicalNarrative?: string | null;
+  /**
+   * CR-03 — composition follows coverage mode, not formatter emptiness.
+   * When true, always render canonical-first (caller must supply non-empty
+   * canonicalNarrative for a non-empty source).
+   */
+  forceCanonicalFirst?: boolean;
   /** Scrubbed plain fallback when caller forces plain — unused in adaptive mode. */
   fallbackText?: string;
 };
@@ -255,30 +294,67 @@ export type NoraAdaptivePresentationViewProps = {
  * Bounded adaptive renderer for Nora Option C presentation DTO.
  * No Product CTAs, no HTML injection, no governed action hooks.
  * CORR-NAP-01 — honest epistemic labels; Studio appendix never hidden.
+ * CORR-NAP-TEST16-01 / CR-02 / CR-03 — when coverage fails: canonical first,
+ * then secondary non-certified projection; composition not driven by
+ * formatter emptiness.
  */
 export function NoraAdaptivePresentationView({
   presentation,
   studioAppendix = null,
+  canonicalNarrative = null,
+  forceCanonicalFirst = false,
 }: NoraAdaptivePresentationViewProps): ReactElement {
   const appendix = (studioAppendix ?? "").trim();
+  const narrative = (canonicalNarrative ?? "").trim();
+  // CR-03 — coverage/mode is the composition reference, not formatted emptiness.
+  const showCanonicalFirst = forceCanonicalFirst || Boolean(narrative);
+  const composition = showCanonicalFirst ? "canonical-first" : "projection-only";
+
+  let body: ReactNode;
+  if (showCanonicalFirst) {
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
+      data-canonical-layer={showCanonicalFirst ? "visible" : "none"}
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

### noraAdaptivePresentation.d0.test.ts

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
index a69367ec..f328de0c 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
@@ -21,6 +21,7 @@ import {
   looksLikeAuthorityClaim,
   parseNoraAdaptivePresentation,
   resolveAdaptiveAssistantRender,
+  resolveAdaptiveCanonicalDisplayText,
   sanitizePresentationPlainText,
   sanitizeProvenanceNote,
   serializeNoraAdaptivePresentation,
@@ -28,6 +29,7 @@ import {
   shouldRenderAdaptivePresentation,
   studioOwnedRecommendationDisclaimer,
 } from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
+import { formatNoraAssistantDisplayText } from "@/features/project-assistant/presentationLabels";
 import {
   NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
   buildFailClosedProductTurnJson,
@@ -492,14 +494,21 @@ describe("CORR-NAP-01 — Studio control visibility + epistemic honesty", () =>
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

@@ -530,23 +539,29 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
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

@@ -554,26 +569,33 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
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

@@ -607,7 +629,10 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
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

@@ -661,11 +686,14 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
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
@@ -764,3 +792,103 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
     expect(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE.length).toBeGreaterThan(10);
   });
 });
+
+describe("CORR-NAP-TEST16-01 / CR-03 — canonical display fidelity", () => {
+  it("CR3-T01 — non-empty source + formatter empty → display keeps source", () => {
+    const source = "READY_NO_GATE";
+    expect(formatNoraAssistantDisplayText(source).trim()).toBe("");
+    const display = resolveAdaptiveCanonicalDisplayText(
+      source,
+      formatNoraAssistantDisplayText,
+    );
+    expect(display.trim().length).toBeGreaterThan(0);
+    expect(display).toContain("READY_NO_GATE");
+  });
+
+  it("CR3-T03 — decision disclaimer phrase not silently erased", () => {
+    const source = "Nora n'émet pas de décision Pilote.";
+    expect(formatNoraAssistantDisplayText(source).trim()).toBe("");
+    const display = resolveAdaptiveCanonicalDisplayText(
+      source,
+      formatNoraAssistantDisplayText,
+    );
+    expect(display).toMatch(/n'émet pas de décision Pilote/i);
+  });
+
+  it("CR3-T04/T17 — partial scrub keeps critical negation accessible", () => {
+    const source =
+      "Nora n'émet pas de décision Pilote. Le contrat n'est pas prêt jusqu'au 2099-01-01 sauf exception.";
+    const formatted = formatNoraAssistantDisplayText(source);
+    expect(formatted.trim().length).toBeGreaterThan(0);
+    expect(formatted).not.toMatch(/n'émet pas de décision Pilote/i);
+    const display = resolveAdaptiveCanonicalDisplayText(
+      source,
+      formatNoraAssistantDisplayText,
+    );
+    expect(display).toMatch(/n'émet pas de décision Pilote/i);
+    expect(display).toMatch(/n'est pas prêt/);
+    expect(display).toContain("2099-01-01");
+    expect(display).toMatch(/exception/);
+  });
+
+  it("CR3-T08 — coverage true still adaptive without canonical layer", () => {
+    const lead = "Phrase A déterminante.";
+    const dto = parseNoraAdaptivePresentation({
+      version: 1,
+      eyebrow: null,
+      title: null,
+      lead,
+      blocks: [{ kind: "plain", text: lead }],
+      provenanceNote: null,
+      noGovernedActionNote: null,
+    })!;
+    const d = resolveAdaptiveAssistantRender({
+      content: lead,
+      presentation: dto,
+    });
+    expect(d.mode).toBe("adaptive");
+    expect(d.contentFullyCovered).toBe(true);
+    expect(d.canonicalNarrative).toBeNull();
+  });
+
+  it("CR3-T15 — rehydration same composition decision", () => {
+    const source = "READY_NO_GATE et refus critique.";
+    const dto = parseNoraAdaptivePresentation({
+      version: 1,
+      eyebrow: null,
+      title: null,
+      lead: "Lead court divergent.",
+      blocks: [{ kind: "plain", text: "Lead court divergent." }],
+      provenanceNote: null,
+      noGovernedActionNote: null,
+    })!;
+    const first = resolveAdaptiveAssistantRender({
+      content: source,
+      presentation: dto,
+    });
+    const second = resolveAdaptiveAssistantRender({
+      content: source,
+      presentation: dto,
+    });
+    expect(first.mode).toBe("adaptive_with_canonical");
+    expect(first.mode).toBe(second.mode);
+    expect(first.canonicalNarrative).toBe(second.canonicalNarrative);
+    const display = resolveAdaptiveCanonicalDisplayText(
+      first.canonicalNarrative!,
+      formatNoraAssistantDisplayText,
+    );
+    expect(display).toContain("READY_NO_GATE");
+    expect(display).toContain("refus critique");
+  });
+
+  it("CR3-T18 — pure escape formatting remains usable when fidelity-preserving", () => {
+    const source = "Ligne\\ndeux avec **emphase**.";
+    const display = resolveAdaptiveCanonicalDisplayText(
+      source,
+      formatNoraAssistantDisplayText,
+    );
+    expect(display).toMatch(/Ligne/);
+    expect(display).toMatch(/deux/);
+    expect(display).toMatch(/emphase/i);
+  });
+});

```

### noraAdaptivePresentation.ui.test.tsx

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
index a37f5eec..d107a903 100644
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

@@ -273,7 +277,275 @@ describe("ConversationSurface adaptive message path", () => {
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
+  it("CR-02 R2 / CR-03 — canonical layer keeps escapes/negation; no HTML injection", () => {
+    const presentation = balisePresentation();
+    const rawBody = [
+      presentation.lead!,
+      "Ligne\\navec\\téchappements.",
+      "**Emphase** et `code` restant lisibles.",
+      "Négation critique : le contrat n'est pas prêt.",
+    ].join("\n");
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
+    const root = screen.getByTestId("nora-adaptive-presentation");
+    expect(root.getAttribute("data-composition")).toBe("canonical-first");
+    const canonical = screen.getByTestId("nora-adaptive-canonical-narrative");
+    expect(canonical).toHaveTextContent(/Ligne/);
+    expect(canonical).toHaveTextContent(/échappements/);
+    expect(canonical).toHaveTextContent(/Emphase/);
+    expect(canonical).toHaveTextContent(/n'est pas prêt/);
+    expect(canonical.innerHTML).not.toMatch(/<script|onload=/i);
+  });
+
+  it("CR-03 T01/T02 — formatter-empty source stays canonical-first (not projection-only)", () => {
+    const presentation = balisePresentation();
+    const content = "READY_NO_GATE";
+    expect(formatNoraAssistantDisplayText(content).trim()).toBe("");
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
+    expect(root.getAttribute("data-composition")).toBe("canonical-first");
+    expect(
+      screen.getByTestId("nora-adaptive-canonical-narrative"),
+    ).toHaveTextContent(/READY_NO_GATE/);
+    expect(
+      screen.getByTestId("nora-adaptive-secondary-projection"),
+    ).toBeTruthy();
+    expect(
+      screen.getByTestId("nora-adaptive-secondary-warning"),
+    ).toBeTruthy();
+  });
+
+  it("CR-03 T03 — decision-refusal phrase remains in canonical DOM", () => {
+    const presentation = balisePresentation();
+    const content = "Nora n'émet pas de décision Pilote.";
+    expect(formatNoraAssistantDisplayText(content).trim()).toBe("");
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
+    expect(
+      screen.getByTestId("nora-adaptive-canonical-narrative"),
+    ).toHaveTextContent(/n'émet pas de décision Pilote/i);
+    expect(
+      screen.getByTestId("nora-adaptive-presentation").getAttribute(
+        "data-composition",
+      ),
+    ).toBe("canonical-first");
+  });
+
+  it("CR-03 T04/T17 — partial formatter scrub keeps deleted phrase + negation in DOM", () => {
+    const presentation = balisePresentation();
+    const content = [
+      "Nora n'émet pas de décision Pilote.",
+      "Le contrat n'est pas prêt jusqu'au 2099-01-01 sauf exception Pilote.",
+    ].join(" ");
+    const scrubbed = formatNoraAssistantDisplayText(content);
+    expect(scrubbed.trim().length).toBeGreaterThan(0);
+    expect(scrubbed).not.toMatch(/n'émet pas de décision Pilote/i);
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
+    const canonical = screen.getByTestId("nora-adaptive-canonical-narrative");
+    expect(canonical).toHaveTextContent(/n'émet pas de décision Pilote/i);
+    expect(canonical).toHaveTextContent(/n'est pas prêt/);
+    expect(canonical).toHaveTextContent(/2099-01-01/);
+    expect(canonical).toHaveTextContent(/exception/);
+    const secondary = screen.getByTestId("nora-adaptive-secondary-projection");
+    expect(canonical.compareDocumentPosition(secondary)).toBe(
+      Node.DOCUMENT_POSITION_FOLLOWING,
+    );
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

## 16. Matrice CR3-T01…T20

| ID | Preuve |
|----|--------|
| T01 | unit + UI READY_NO_GATE → couche canonique visible |
| T02 | UI composition canonical-first |
| T03 | unit + UI phrase décision conservée |
| T04/T17 | unit + UI scrub partiel → phrase + négation + date |
| T05 | date/refus/exception dans T04 |
| T06 | CR-02 R1-T05 contradiction conservé |
| T07 | secondary warning présent (UI T01) |
| T08 | unit coverage true → adaptive |
| T09/T10 | historiques plain/invalid KEEP |
| T11/T12 | appendix / forged KEEP (UI existants) |
| T13/T14 | no CTA / no HTML (UI) |
| T15 | unit rehydration |
| T16 | forme TEST-16 CR-02 UI KEEP |
| T18 | unit escapes/emphase |
| T19 | forceCanonicalFirst + mode |
| T20 | CR-02 R1/R2 tests actifs PASS |

## 17–18. Tests / typecheck / lint

| Suite | Résultat |
|-------|----------|
| d0 Option C | 40 PASS |
| UI Option C | 25 PASS |
| Fake NAP QA | 9 PASS |
| **Total** | **74 PASS** |
| tsc --noEmit | 0 |
| eslint ciblé | 0 |

## 19. Oracle formatter vide

Source `READY_NO_GATE` / `Nora n'émet pas de décision Pilote.` → format `""` → display source conservée → DOM canonical-first.

## 20. Oracle suppression partielle

Source avec phrase supprimable + négation/date → format retire la phrase → display conserve phrase + négation + date ; ordre canonical avant secondary.

## 21. Oracle contradiction

CR-02 R1-T05 inchangé : rejeter avant approuver projeté.

## 22. Garantie canonical-first

`forceCanonicalFirst` depuis `mode === adaptive_with_canonical` ; `data-composition=canonical-first`.

## 23. Provenance Studio

Typed appendix distinct ; forged non promu ; pas de double notice (chemins CR-02 conservés).

## 24. Fake/Real

**DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE.** G-REAL NOT GRANTED.

## 25–26. Runtime / SQLite

Observation : pas de LISTEN :3020. Aucun start/stop/rebuild/env. Aucune mutation SQLite. LIVE non écrit.

## 27. Risques / réserves

1. Browser LIVE hors scope.
2. Substitutions jargon du formateur → fallback cosmétique source (fidélité > scrub) pour couche canonical uncovered.
3. R24 PRR non écrite.
4. Candidate non commitée projet.

## 28. Gates restants

Critical Review ChatGPT → GO intégration → GO R24 → GO browser BALISE.

## 29. Verdict

**`LOCAL CORRECTION CR-03 — READY FOR CHATGPT CRITICAL REVIEW`**

## 30. Git Review Index

| Path | CR-03 |
|------|-------|
| noraAdaptivePresentation.ts | resolveAdaptiveCanonicalDisplayText + cosmetic normalize |
| ConversationSurface.tsx | garde-fou + forceCanonicalFirst |
| NoraAdaptivePresentationView.tsx | composition mode-driven |
| *.module.css | inchangé fonctionnellement vs CR-02 |
| *.d0.test.ts | oracles CR3 |
| *.ui.test.tsx | oracles DOM CR3 |

## 31. Instruction ChatGPT obligatoire

Relire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (SHA/blob de ce publish). Vérifier cycle CR-03, GO, Git Truth, diffs, oracles formatter vide/partiel, DOM canonical-first, notices, tests, runtime, R23/R24, verdict.

Synthesis-only → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.
Remote non actualisé → `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`.
