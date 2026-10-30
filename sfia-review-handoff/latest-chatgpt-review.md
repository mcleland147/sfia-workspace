# CORR-NAP-04 — PRODUCT TURN COHERENCE RESTORATION

**Cycle:** SFIA 8 — Delivery / implémentation
**Profil:** STANDARD — contrôles d'autorité renforcés
**Typologie:** EVOL / correction de régression P1
**Review pack:** FULL
**Date/heure UTC:** 2026-10-30T06:46:23Z
**Worktree:** `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation`
**Branch:** `feat/akg-m5-nora-adaptive-presentation`
**HEAD / origin/main / merge-base:** `2cc6368602197e18fe886c87c8ced0a1b434f5a2`
**Handoff CURRENT (avant publish):** `b11ef7c95d89327c5a4ea164de21a30b40b334b1` / blob `006daf8f030745274b0d144570b3340f963803d7` (QA-NAP-03)

## Verdict unique

**LOCAL COHERENCE CORRECTION COMPLETE — DETERMINISTIC VERIFIED — CHATGPT REVIEW REQUIRED — R24 DOCUMENTARY SYNC PENDING**

Aucun READY FOR PR / REAL / ADOPTED / L3 CLOSED. Aucun commit Product.

## 1. Git Truth Check

| Check | Résultat |
|-------|----------|
| toplevel | MATCH Delivery |
| branche | `feat/akg-m5-nora-adaptive-presentation` |
| HEAD / origin/main / merge-base | `2cc63686…` |
| WIP Option C + CORR + QA | PRÉSERVÉ non commité |
| staged | vide |
| fichiers touchés ce cycle | `noraProductTurnOutputType.ts`, `preCycleRoutingBoundary.d0.test.ts` |

## 2. Sources consultées

Méthode: cycle-execution-template, cycle-routing-guide, Operating Model v2.6.
Convergence: Build Doctrine, Roadmap, C1, doctrines 30/32/34/35, PRR 02/03/04/06/07/08/09.
Preuves: handoff QA-NAP-03 (`b11ef7c9`), code local withGuidance, tests BAR-RB / LR continuity / MW3 STOP.

## 3. Git Review Index

- SoT précédent: QA-NAP-03 FULL (appendix code Option C)
- SoT ce cycle: CORR-NAP-04 (restauration return LR)
- WIP inchangé hors patch: référencer QA-NAP-03 (pas recopié)

## 4. Cause racine P1

Dans `applyPreCycleRoutingBoundaryCoherence` → `withGuidance()` :

1. Variable locale `lifecycleRecommendation` initialisée depuis `partial`.
2. Cognitive STOP (et gates associés) peut la neutraliser à `null` et positionner `lifecycleRecommendationSuppressed` / `suppressReason` / continuity.
3. Le `return` post–QA-NAP (ajout `presentation`) a **omis** `lifecycleRecommendation:` locale.
4. `...partial` republiait donc le candidat d'entrée non neutralisé.

Chemin critique: assessment READY_TO_EMIT + LR candidate non null + `cognitiveStop: true` → branche finale `withGuidance({ lifecycleRecommendation: candidate })` → neutralization locale perdue au return.

## 5. Reproduction avant

Test négatif `CORR-NAP-04 T1` (écrit pour le cycle) :
- Entrée: READY_TO_EMIT + NEXT_CYCLE LR + RECOMMEND_NEXT_STEP + cognitiveStop true
- Avant fix: `lifecycleRecommendation` resterait le candidat (bug)
- Code inspecté: return sans `lifecycleRecommendation` locale — **DOCUMENTED / BEHAVIOR GAP**
- Tests suite existants (53) passaient encore car beaucoup de chemins passent déjà `lifecycleRecommendation: null` dans `partial` avant STOP interne ; le gap est le chemin EMIT+candidate+STOP.

## 6. Patch exact

Une propriété restaurée dans le return de `withGuidance` :

```typescript
    return {
      ...partial,
      journalDelta,
      reservationDelta,
      presentation,
      // CORR-NAP-04 — must reassign local LR (may be neutralized after partial,
      // e.g. Cognitive STOP). Spreading partial alone would revive the input.
      lifecycleRecommendation,
      lifecycleRecommendationSuppressed,
      suppressReason,
      boundaryContradiction,
      lifecycleRecommendationContinuity,
      conversationGuidance: guided.conversationGuidance,
      conversationGuidanceCoerced: guided.coerced,
      conversationGuidanceCoerceReason: guided.coerceReason,
    };
```

Aucune autre règle métier / disposition / Truth C / orchestrateur / persistence / presentation renderer.

## 7. Tests T1–T12

| ID | Statut | Preuve |
|----|--------|--------|
| T1 STOP+LR | PASS | nouveau test CORR-NAP-04 T1 |
| T2 CONTINUE | PASS | suite BAR-RB existante |
| T3 HOLD ambiguity | PASS | suite BAR-RB |
| T4 DEFER | PASS | BAR-RB-10 strip NEXT_CYCLE |
| T5 EMIT valide | PASS | nouveau CORR-NAP-04 T5 |
| T6 REUSE_CURRENT | PASS | noraLifecycleRecommendationContinuity |
| T7 candidat manquant | PASS | BAR-RB-16 EMIT without LR |
| T8 guidance mismatch | PASS | suites continuity / boundary |
| T9 presentation ortho | PASS | nouveau CORR-NAP-04 T9 |
| T10 Product path | PASS | orchestrate tests dans BAR-RB / continuity |
| T11 journal/reservation | PASS / COVERED | NAP + journal continuity inchangés |
| T12 fallback | PASS | buildFailClosed / fail-closed paths |

## 8. Commandes / exit codes

| Commande | Exit |
|----------|------|
| vitest preCycleRoutingBoundary + continuity + mw3 STOP + NAP d0 + Fake NAP | **0** — 99 passed |
| tsc --noEmit | **0** |
| eslint ciblé | **0** |
| git diff --check (fichiers cycle) | **0** |
| npm run build | SKIP — next/tsc suffisent ; pas d'échec patch |

## 9. Contenu créé

Aucun nouveau fichier Product. Tests ajoutés dans fichier existant.

## 10. Diffs utiles complets (ce cycle + cumul noraProductTurn depuis main)

### DIFF COMPLET: noraProductTurnOutputType.ts (depuis HEAD = origin/main)

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
index 03581f3a..45015fc2 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
@@ -8,6 +8,48 @@ import {
   isNoraReservationDeltaStructured,
   type NoraReservationDeltaStructured,
 } from "./reservationDelta";
+import {
+  NORA_ADAPTIVE_PRESENTATION_SCHEMA,
+  parseNoraAdaptivePresentation,
+  type NoraAdaptivePresentation,
+} from "./noraAdaptivePresentation";
+
+export {
+  NORA_ADAPTIVE_PRESENTATION_SCHEMA,
+  NORA_ADAPTIVE_PRESENTATION_VERSION,
+  NORA_ADAPTIVE_PRESENTATION_LIMITS,
+  NORA_ADAPTIVE_BLOCK_KINDS,
+  NORA_ADAPTIVE_EPISTEMIC_ROLES,
+  NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
+  NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
+  parseNoraAdaptivePresentation,
+  isNoraAdaptivePresentation,
+  serializeNoraAdaptivePresentation,
+  deserializeNoraAdaptivePresentation,
+  shouldRenderAdaptivePresentation,
+  sanitizePresentationPlainText,
+  appendStudioControlNotices,
+  extractStudioControlAppendix,
+  contentWithoutStudioAppendix,
+  contentWithoutAuthenticatedStudioNotices,
+  normalizeStudioControlNotices,
+  serializeStudioControlNotices,
+  deserializeStudioControlNotices,
+  resolveAdaptiveAssistantRender,
+  contentFullyCoveredByPresentation,
+  honestEpistemicLabel,
+  honestBlockTitle,
+  looksLikeAuthorityClaim,
+  sanitizeProvenanceNote,
+  studioOwnedRecommendationDisclaimer,
+  STUDIO_CONTROL_MARKER,
+  NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
+  type NoraAdaptivePresentation,
+  type NoraAdaptivePresentationBlock,
+  type NoraAdaptiveBlockKind,
+  type NoraAdaptiveEpistemicRole,
+  type AdaptiveAssistantRenderDecision,
+} from "./noraAdaptivePresentation";

 export {
   NORA_RESERVATION_DELTA_SCHEMA,
@@ -453,6 +495,7 @@ export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
       "conversationGuidance",
       "journalDelta",
       "reservationDelta",
+      "presentation",
     ],
     properties: {
       narrative: { type: "string" as const },
@@ -476,6 +519,13 @@ export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
       reservationDelta: {
         anyOf: [{ type: "null" as const }, NORA_RESERVATION_DELTA_SCHEMA],
       },
+      /** Adaptive UI projection — nullable; never authority / never Product CTA. */
+      presentation: {
+        anyOf: [
+          { type: "null" as const },
+          NORA_ADAPTIVE_PRESENTATION_SCHEMA,
+        ],
+      },
     },
   },
 };
@@ -505,6 +555,8 @@ export type NoraProductTurnWithOptionalLr = {
   journalDelta: NoraJournalDeltaStructured | null;
   /** Reservation delta — EpistemicItem mutations; null when none. Never RESOLVE. */
   reservationDelta: NoraReservationDeltaStructured | null;
+  /** Adaptive presentation projection — null when absent / invalid. Never CTA. */
+  presentation: NoraAdaptivePresentation | null;
 };

 export function isPreCycleRoutingAssessment(
@@ -729,6 +781,12 @@ export type PreCycleRoutingBoundaryCoherenceResult = {
    */
   reservationDelta: NoraReservationDeltaStructured | null;
   /** True when a candidate LR was stripped by boundary coherence. */
+  /**
+   * Adaptive presentation passthrough — UI projection only.
+   * Invalid / missing → null (fail-closed; narrative remains).
+   */
+  presentation: NoraAdaptivePresentation | null;
+  /** True when a candidate LR was stripped by boundary coherence. */
   lifecycleRecommendationSuppressed: boolean;
   suppressReason: string | null;
   /**
@@ -1260,6 +1318,8 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
   journalDelta?: NoraJournalDeltaStructured | null;
   /** Invalid reservation delta coerced to null — never fails the Product turn. */
   reservationDelta?: NoraReservationDeltaStructured | null;
+  /** Invalid presentation coerced to null — never fails the Product turn. */
+  presentation?: NoraAdaptivePresentation | null;
   cognitiveStop?: boolean;
   /**
    * Server-derived from selectCurrentLifecycleRecommendations + applicability.
@@ -1274,6 +1334,7 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
   const activeCycleWork = input.activeCycleWork ?? null;
   const journalDelta = input.journalDelta ?? null;
   const reservationDelta = input.reservationDelta ?? null;
+  const presentation = input.presentation ?? null;
   const rawGuidance = parseConversationGuidanceOrFailClosed(
     input.conversationGuidance ?? null,
   );
@@ -1289,6 +1350,7 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
       | "conversationGuidanceCoerceReason"
       | "journalDelta"
       | "reservationDelta"
+      | "presentation"
     >,
   ): PreCycleRoutingBoundaryCoherenceResult => {
     const guided = applyConversationGuidanceCoherence({
@@ -1344,6 +1406,9 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
       ...partial,
       journalDelta,
       reservationDelta,
+      presentation,
+      // CORR-NAP-04 — must reassign local LR (may be neutralized after partial,
+      // e.g. Cognitive STOP). Spreading partial alone would revive the input.
       lifecycleRecommendation,
       lifecycleRecommendationSuppressed,
       suppressReason,
@@ -1522,16 +1587,23 @@ export function normalizeNoraProductTurnStructuredOutput(
       : null;
   }

+  // Presentation fail-closed locally: invalid → null, narrative remains.
+  let presentation: NoraAdaptivePresentation | null = null;
+  if (o.presentation != null) {
+    presentation = parseNoraAdaptivePresentation(o.presentation);
+  }
+
   return applyPreCycleRoutingBoundaryCoherence({
     narrative: o.narrative,
     preCycleRoutingAssessment: assessment,
     lifecycleRecommendation: lr,
     activeCycleWork,
-    journalDelta,
-    reservationDelta,
     conversationGuidance: parseConversationGuidanceOrFailClosed(
       o.conversationGuidance,
     ),
+    journalDelta,
+    reservationDelta,
+    presentation,
     cognitiveStop: options?.cognitiveStop === true,
     currentLifecycleRecommendationSatisfiesTransition:
       options?.currentLifecycleRecommendationSatisfiesTransition === true,
@@ -1564,6 +1636,13 @@ export function isNoraProductTurnWithOptionalLr(
   ) {
     return false;
   }
+  // Backward compat: missing presentation treated as null; invalid non-null fails.
+  if (
+    o.presentation != null &&
+    parseNoraAdaptivePresentation(o.presentation) == null
+  ) {
+    return false;
+  }
   if (o.lifecycleRecommendation === null) return true;
   return isNoraLifecycleRecommendationStructuredOutput(
     o.lifecycleRecommendation,
@@ -1584,5 +1663,6 @@ export function buildFailClosedProductTurnJson(narrative: string): string {
     conversationGuidance: { ...CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD },
     journalDelta: null,
     reservationDelta: null,
+    presentation: null,
   });
 }
```

### DIFF COMPLET: preCycleRoutingBoundary.d0.test.ts (ce cycle)

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts
index 0cab9a3c..1b28d25b 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts
@@ -1049,4 +1049,92 @@ describe("BAR-RB — pre-cycle routing boundary (deterministic)", () => {
     );
     expect(src).not.toMatch(/narrative\.includes|new RegExp|match\(\//);
   });
+
+  /**
+   * CORR-NAP-04 — withGuidance must return the *local* lifecycleRecommendation
+   * after Cognitive STOP neutralization (not ...partial's pre-stop candidate).
+   */
+  it("CORR-NAP-04 T1 — Cognitive STOP + LR candidate returns null LR", () => {
+    const lr = nextCycleLr("cyc:qualification", "Passer en qualification");
+    const coherent = applyPreCycleRoutingBoundaryCoherence({
+      narrative: "Passer en qualification",
+      preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
+      lifecycleRecommendation: lr,
+      conversationGuidance: {
+        kind: "RECOMMEND_NEXT_STEP",
+        scope: "LIFECYCLE_TRANSITION",
+        statement: "Passer en qualification",
+        rationale: "fixture",
+      },
+      cognitiveStop: true,
+      presentation: null,
+    });
+    expect(coherent.lifecycleRecommendation).toBeNull();
+    expect(coherent.lifecycleRecommendationSuppressed).toBe(true);
+    expect(coherent.suppressReason).toBe("cognitive_stop");
+    expect(coherent.lifecycleRecommendationContinuity).toBe("NONE");
+    expect(coherent.conversationGuidance.kind).toBe("HOLD");
+  });
+
+  it("CORR-NAP-04 T5 — EMIT valid preserves LR candidate", () => {
+    const lr = nextCycleLr("cyc:qualification", "Passer en qualification");
+    const coherent = applyPreCycleRoutingBoundaryCoherence({
+      narrative: "Passer en qualification",
+      preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
+      lifecycleRecommendation: lr,
+      conversationGuidance: {
+        kind: "RECOMMEND_NEXT_STEP",
+        scope: "LIFECYCLE_TRANSITION",
+        statement: "Passer en qualification",
+        rationale: "fixture",
+      },
+      cognitiveStop: false,
+      presentation: null,
+    });
+    expect(coherent.lifecycleRecommendation).not.toBeNull();
+    expect(coherent.lifecycleRecommendation?.targetCycleTypeId).toBe(
+      "cyc:qualification",
+    );
+    expect(coherent.lifecycleRecommendationSuppressed).toBe(false);
+    expect(coherent.lifecycleRecommendationContinuity).toBe("NEW_CANDIDATE");
+  });
+
+  it("CORR-NAP-04 T9 — presentation orthogonal to STOP LR neutralization", () => {
+    const lr = nextCycleLr("cyc:qualification", "Passer en qualification");
+    const base = {
+      narrative: "Passer en qualification",
+      preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
+      lifecycleRecommendation: lr,
+      conversationGuidance: {
+        kind: "RECOMMEND_NEXT_STEP" as const,
+        scope: "LIFECYCLE_TRANSITION" as const,
+        statement: "Passer en qualification",
+        rationale: "fixture",
+      },
+      cognitiveStop: true,
+    };
+    const a = applyPreCycleRoutingBoundaryCoherence({
+      ...base,
+      presentation: null,
+    });
+    const b = applyPreCycleRoutingBoundaryCoherence({
+      ...base,
+      presentation: {
+        version: 1,
+        eyebrow: null,
+        title: null,
+        lead: "Passer en qualification",
+        blocks: [],
+        provenanceNote: null,
+        noGovernedActionNote: null,
+      },
+    });
+    expect(a.lifecycleRecommendation).toBeNull();
+    expect(b.lifecycleRecommendation).toBeNull();
+    expect(a.lifecycleRecommendationSuppressed).toBe(true);
+    expect(b.lifecycleRecommendationSuppressed).toBe(true);
+    expect(a.disposition).toBe(b.disposition);
+    expect(a.presentation).toBeNull();
+    expect(b.presentation?.lead).toBe("Passer en qualification");
+  });
 });
```

## 11. Analyse consommateurs LR

- `normalizeNoraProductTurnStructuredOutput` → applyPreCycleRoutingBoundaryCoherence : bénéficie du return corrigé.
- `orchestrateTurn` / Runner lisent `coherentEarly.lifecycleRecommendation` : STOP ne peut plus revivre via partial.
- `presentation` reste orthogonal (T9).

## 12. Fake/Real Qualification

- Applicable: OUI — Structured Outputs / ScriptedModel / Fake
- REAL/LIVE/G-REAL: NON
- Niveau: **PRODUCT TURN COHERENCE DETERMINISTIC VERIFIED**
- READY FOR REAL: NON

## 13. R23 / R24

**R23**
- Cause: propriété absente du return après neutralization locale — **BEHAVIOR PROVEN** (T1)
- Fix restaurateur — **COVERAGE VERIFIED** (T1/T5/T9 + 99 suite)

**R24**
- **NO NEW SEMANTIC DESIGN CHANGE** — restauration invariant existant CR-NCI-03
- PRR 03/06/09: **DOCUMENTARY SYNC PENDING** (noter invariant return LR local si DOC GO)

## 14. Réserves / dette

- QA-NAP-06 STOP navigateur / QA-NAP-10 restart: NOT PROVEN (hors scope)
- R24 DOC GO ouvert
- WIP Delivery non commité (attendu)

## 15. Gates Morris

1. Revue ChatGPT CORR-NAP-04
2. GO DOC R24
3. GO commit/PR Delivery (distinct)

## 16. Verdict (rappel)

**LOCAL COHERENCE CORRECTION COMPLETE — DETERMINISTIC VERIFIED — CHATGPT REVIEW REQUIRED — R24 DOCUMENTARY SYNC PENDING**
