# ChatGPT Review Pack — FULL
## PRODUCT JOURNEY CAMPAIGN CORRECTION — Recommendation / OptionSet integrity + Pilote UX

- **Timestamp UTC:** 2026-09-20T14:54:45Z
- **Timestamp Europe/Paris:** 2026-09-20T16:54:45+0200
- **Parent campaign:** PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01
- **Mode:** SAME CAMPAIGN / NO MICRO-CYCLE
- **Cycle:** 8 — Delivery / Implementation
- **Type:** EVOL · **Profile:** CRITICAL
- **Morris GO consumed:** PJ-REPROOF-01 + PJ-REPROOF-02 bounded Product/UI correction + tests + Review Handoff. No project push/PR/merge. ZERO NEW REAL.

## 1. Local Git Truth

| Field | Value |
|---|---|
| Worktree | `/tmp/sfia-pj-reproof-corr-01` |
| Branch | `fix/sfia-studio-recommendation-decision-ux-integrity` (**NOT pushed**) |
| HEAD / origin/main | `89dc915d7e685ee775922c02314a8eb39a2921fa` |
| Baseline CI | `35511985937` attempt 2 SUCCESS · Required Gate PASS |
| Project commit/push/PR/merge | **0/0/0/0** |
| New REAL / LIVE | **0 / 0** |

## 2. Convergence

KEEP OptionSet / PresentedOptionSet / recommendedOptionRef / selectedOptionRef. ADAPT cognition order + Pilote projection. Build Doctrine / Roadmap / C1 / C2 / v3 framing **UNCHANGED**. Capability V3-F05/F06.

## 3. Root cause PJ-REPROOF-01

Canonical binding was sound. Provider cognition ran before Options derive with prompt « Instruire Options/Recommendation », injecting O1/O2/O3-style prose into durable rationale; UI showed it raw. Soft `options[0]` fallback was not fail-closed.

## 4. Root cause PJ-REPROOF-02

`TrajectorySurface` rendered rationale as plain `<p>` without `formatNoraAssistantDisplayText`. Recovery impacts exposed Attempt/Evidence/productOutcome primarily. Trajectory HD showed raw optionRef.

## 5. Implemented

- Derive → integrity assert → constrained cognition → enrich → seal
- `RECOMMENDATION_OPTION_REF_MISMATCH` fail-closed
- Projection fallback when invented option pack detected
- Pilote-first Recommendation title/label + scrubbed rationale + footer + technical details
- Option impact partition primary/technical
- Trajectory HD label via `pilotPresentedOptionLabel`

## 6. Changed files

```
 .../trajectorySurface.ui.test.tsx                  |  79 ++++++++
 .../surfaces/TrajectorySurface.tsx                 |  88 +++++++--
 .../project-assistant/f2/ckcCognitiveContext.ts    |  40 ++--
 .../project-assistant/presentationLabels.ts        |  41 ++++
 .../w2/proposeTrajectoryOptions.ts                 | 216 +++++++++++++++------
 .../project-assistant/w2/trajectoryOptions.ts      |  10 +-
 6 files changed, 383 insertions(+), 91 deletions(-)
```

New: `recommendationDecisionIntegrity.ts` + `recommendationDecisionIntegrity.pjReproof.d0.test.ts`

## 7. Tests

Targeted **94 PASS** (integrity + trajectorySurface + postExecution + checkpointF recovery + recommendation-vs-decision + w2TrackDPhaseB). New PJ-REPROOF UI assert PASS. `tsc --noEmit` PASS.

## 8. Visual proof

- HTML: `/opt/cursor/artifacts/pj-reproof-recommendation-pilote-ux-after.html`
- Screenshot: `/opt/cursor/artifacts/pj-reproof-recommendation-pilote-ux-after.webp` (~1280×800)
- AFTER primary: no `##` / `**` / O1–O4 / Attempt IDs
- Studio correction worktree on :3020 login 200

## 9. Mapping proof

recommendedOptionRef ∈ options · provider O1/O2/O3 ≠ Options · badge from ref equality · decide uses card optionRef · HD trajectory label · Recommendation ≠ Decision.

## 10. Reserves

REAL Evidence payload adapter OPEN (unchanged). Product Journey REAL resume = distinct Morris gate. Provider may still emit O1/O2/O3 — mitigated by prompt + projection fallback.

## 11. Anti-claims

No project push/PR/merge · no doctrine/Roadmap/C1/C2/v3 mutation · no schema pivot · no new engine · ZERO NEW REAL · no v3 ADOPTION · no Figma/Penpot.

## 12. New integrity module

```ts
/**
 * PJ-REPROOF-01/02 — Recommendation ↔ OptionSet integrity + Pilote projection.
 *
 * Canonical decision semantics remain OptionSet / recommendedOptionRef /
 * selectedOptionRef. Provider prose may enrich WHY, never WHAT the Options are.
 */

import type { TrajectoryOptionDto } from "./types";

export const RECOMMENDATION_OPTION_REF_MISMATCH =
  "RECOMMENDATION_OPTION_REF_MISMATCH" as const;

export type RecommendedOptionIntegrityResult =
  | { readonly ok: true; readonly option: TrajectoryOptionDto }
  | {
      readonly ok: false;
      readonly code: typeof RECOMMENDATION_OPTION_REF_MISMATCH;
      readonly message: string;
    };

/** A1 — recommendedOptionRef must resolve to exactly one presented option. */
export function assertRecommendedOptionInPresentedSet(input: {
  readonly options: readonly TrajectoryOptionDto[];
  readonly recommendedOptionRef: string;
}): RecommendedOptionIntegrityResult {
  const matches = input.options.filter(
    (o) => o.optionRef === input.recommendedOptionRef,
  );
  if (matches.length === 1) {
    return { ok: true, option: matches[0]! };
  }
  return {
    ok: false,
    code: RECOMMENDATION_OPTION_REF_MISMATCH,
    message:
      matches.length === 0
        ? `recommendedOptionRef « ${input.recommendedOptionRef} » n'appartient pas à l'OptionSet présenté — surface HumanDecision refusée.`
        : `recommendedOptionRef « ${input.recommendedOptionRef} » apparaît ${matches.length} fois — OptionSet incohérent.`,
  };
}

/**
 * Detect provider prose that invents a competing numbered option pack
 * (O1/O2/O3, "Option 1", etc.). Not a sole integrity mechanism — used to
 * fall back to deterministic base rationale for Pilote primary copy.
 */
export function looksLikeInventedOptionPack(text: string): boolean {
  const raw = text ?? "";
  if (!raw.trim()) return false;
  const numbered =
    (raw.match(/(?:^|\n)\s*O\s*[1-9]\b/gim) ?? []).length +
    (raw.match(/(?:^|\n)\s*Option\s*[1-9]\b/gim) ?? []).length +
    (raw.match(/\bO[1-9]\s*[:.)\-–—]/g) ?? []).length +
    (raw.match(/\bO[1-9]\s+[A-ZÀ-Ü]/g) ?? []).length;
  if (numbered >= 2) return true;
  // Two or more "Alternative N" / "Choix N" style lines.
  const alt =
    (raw.match(/(?:^|\n)\s*(?:Alternative|Choix|Piste)\s*[1-9]/gim) ?? [])
      .length;
  return alt >= 2;
}

/** Technical impact / jargon lines — secondary disclosure only. */
export function isTechnicalOptionImpact(line: string): boolean {
  const t = line.trim();
  if (!t) return false;
  return (
    /\bAttempt\b/i.test(t) ||
    /\bEvidence\b/i.test(t) ||
    /\bReviewBundle\b/i.test(t) ||
    /\bContractResult\b/i.test(t) ||
    /\bProductOutcome\b/i.test(t) ||
    /\bproductOutcome\s*:/i.test(t) ||
    /\bstopReason\s*:/i.test(t) ||
    /\brealProcessInvoked\b/i.test(t) ||
    /\bW3C\s*:/i.test(t) ||
    /\bopt:[a-z0-9:_-]+/i.test(t) ||
    /\bepi:[a-z0-9:_-]+/i.test(t) ||
    /\batt:[a-z0-9:_-]+/i.test(t) ||
    /\bevi:[a-z0-9:_-]+/i.test(t) ||
    /\boutcome:\s*(FAIL|STOP|UNCLAIMED|PASS)\b/i.test(t)
  );
}

export function partitionOptionImpactsForPilote(
  impacts: readonly string[],
): {
  readonly primary: readonly string[];
  readonly technical: readonly string[];
} {
  const primary: string[] = [];
  const technical: string[] = [];
  for (const line of impacts) {
    if (isTechnicalOptionImpact(line)) technical.push(line);
    else primary.push(line);
  }
  return { primary, technical };
}

/**
 * Scrub primary Recommendation prose: Markdown markers, code ticks, bare
 * internal refs/IDs. Deterministic; no HTML rendering.
 */
export function scrubPiloteRecommendationProse(text: string): string {
  let out = (text ?? "").replace(/\r\n/g, "\n");
  out = out.replace(/\\n/g, "\n").replace(/\\t/g, "\t");
  out = out.replace(/\*\*([^*]+)\*\*/g, "$1");
  out = out.replace(/__([^_]+)__/g, "$1");
  out = out.replace(/(^|\n)#{1,6}\s+/g, "$1");
  out = out.replace(/`([^`]+)`/g, "$1");
  out = out.replace(/\|.+\|/g, " "); // crude table remnant neutralization
  out = out.replace(/\bopt:[a-z0-9:_-]+\b/gi, "");
  out = out.replace(/\bepi:[a-z0-9:_-]+\b/gi, "");
  out = out.replace(/\batt:[a-z0-9:_-]+\b/gi, "");
  out = out.replace(/\bevi:[a-z0-9:_-]+\b/gi, "");
  out = out.replace(/\brb:[a-z0-9:_-]+\b/gi, "");
  out = out.replace(/\bsha256:[a-f0-9]{16,}\b/gi, "");
  out = out.replace(/\bContractResult\b/g, "résultat du contrat");
  out = out.replace(/\bProductOutcome\b/g, "résultat produit");
  out = out.replace(/\bexpectedOutputs\b/g, "résultats attendus");
  out = out.replace(/\bstopReason\b/g, "motif d'arrêt");
  out = out.replace(/\bHumanDecision\b/g, "décision Pilote");
  out = out.replace(/[^\S\n]{2,}/g, " ");
  out = out.replace(/ *\n */g, "\n").trim();
  return out;
}

/**
 * Project durable Recommendation rationale for Pilote primary surface.
 * If cognitive prose invents a competing option pack, fall back to base.
 */
export function projectPiloteRecommendationRationale(input: {
  readonly baseRationale: string;
  readonly cognitiveRecommendation?: string | null;
  readonly guidanceText?: string | null;
}): {
  readonly rationale: string;
  readonly usedCognitive: boolean;
  readonly fellBackToBase: boolean;
} {
  const base = scrubPiloteRecommendationProse(input.baseRationale);
  const cognitiveRaw = (input.cognitiveRecommendation ?? "").trim();
  const cognitive = scrubPiloteRecommendationProse(cognitiveRaw);
  const guidance = scrubPiloteRecommendationProse(input.guidanceText ?? "");

  if (
    cognitive &&
    !looksLikeInventedOptionPack(cognitiveRaw) &&
    !looksLikeInventedOptionPack(cognitive)
  ) {
    const combined = guidance
      ? `${cognitive} ${guidance}`.replace(/\s{2,}/g, " ").trim()
      : cognitive;
    return {
      rationale: combined || base,
      usedCognitive: true,
      fellBackToBase: false,
    };
  }

  if (cognitive && looksLikeInventedOptionPack(cognitiveRaw)) {
    const fallback = guidance ? `${base} ${guidance}`.trim() : base;
    return {
      rationale: fallback,
      usedCognitive: false,
      fellBackToBase: true,
    };
  }

  if (guidance && /^[a-z0-9_]+$/i.test(base.trim())) {
    return { rationale: guidance, usedCognitive: false, fellBackToBase: true };
  }
  const withGuidance = guidance ? `${base} ${guidance}`.trim() : base;
  return {
    rationale: withGuidance,
    usedCognitive: false,
    fellBackToBase: false,
  };
}

/** Constrained cognition ask — explain canonical recommended option only. */
export function buildConstrainedRecommendationCognitionAsk(input: {
  readonly recommendedOptionLabel: string;
  readonly recommendedOptionRef: string;
  readonly subjectLine: string;
}): string {
  return [
    input.subjectLine,
    "",
    `Option canonique recommandée (seule identité de décision): « ${input.recommendedOptionLabel} ».`,
    `Réf. technique (audit seulement, ne pas citer au Pilote): ${input.recommendedOptionRef}.`,
    "",
    "Mission:",
    "- Expliquer POURQUOI cette option canonique convient au contexte métier actuel.",
    "- Donner une conséquence / prochain pas attendu en langage Pilote.",
    "- Rappeler que Recommendation ≠ HumanDecision et qu'aucune action n'est automatique.",
    "",
    "Interdictions strictes:",
    "- Ne pas inventer d'autres options (pas de O1/O2/O3, pas de liste Alternative 1/2/3).",
    "- Ne pas redéfinir le pack de décision — le OptionSet présenté est déjà scellé.",
    "- Pas de Markdown (pas de ##, **, tableaux, fences).",
    "- Pas d'identifiants internes (Attempt/Evidence/ReviewBundle/opt:/epi:) dans la prose Pilote.",
    "- Ne pas décider à la place du Pilote ; ne pas revendiquer d'autorité d'exécution.",
    "",
    "Réponds en français métier, 3 à 6 phrases maximum, texte brut uniquement.",
  ].join("\n");
}
```

## 13. Useful diffs

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 71e40913..b617f747 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -746,6 +746,85 @@ describe("W2 TrajectorySurface", () => {
     });
   });

+  it("PJ-REPROOF — primary Recommendation is Pilote-first; Markdown/IDs stay out of primary rationale", async () => {
+    proposeMock.mockResolvedValue({
+      ok: true,
+      optionSetRef: "optset:w2-ui-pj",
+      cycleTypeId: "cyc:delivery",
+      recommendedProfile: "Standard",
+      options: [
+        {
+          kind: "OPTION",
+          optionRef: "opt:trajectory:clarify-first",
+          label: "Diagnostiquer / clarifier avant nouvelle tentative",
+          intent: "Approfondir le diagnostic",
+          impacts: [
+            "Aucune préparation d'exécution à ce stade",
+            "Attempt succeeded: att:demo",
+            "Evidence: evi:demo",
+          ],
+          reservations: [],
+          steps: [],
+        },
+        {
+          kind: "OPTION",
+          optionRef: "opt:trajectory:governed-gated",
+          label: "Préparer une nouvelle tentative gouvernée",
+          intent: "Décider puis préparer",
+          impacts: ["Décision humaine requise avant préparation"],
+          reservations: [],
+          steps: [],
+        },
+      ],
+      recommendation: {
+        label: "RECOMMANDATION — PAS UNE DÉCISION",
+        recommendedOptionRef: "opt:trajectory:clarify-first",
+        rationale:
+          "## Diagnostic\n**Important** : Attempt `att:demo` Evidence `evi:xyz` — clarifier avant relance.",
+        isHumanDecision: false,
+        promotesTrajectory: false,
+        ckcAttribution: null,
+        ckcProvenance: null,
+      },
+      epistemicRefs: [],
+      proposedTrajectory: {
+        trajectoryId: "trj:w2-ui-pj",
+        version: 1,
+        status: "candidate",
+        statusLabel: "TRAJECTOIRE PROPOSÉE",
+        isCurrent: false,
+      },
+      phase: "OPTIONS_PROPOSED",
+      autoDecisionPerformed: false,
+      executionPerformed: false,
+    });
+
+    render(<TrajectorySurface projectId="prj:w2-ui-pj" />);
+    fireEvent.click(await screen.findByTestId("w2-propose-options"));
+    expect(await screen.findByTestId("w2-recommendation")).toBeVisible();
+
+    const rationale = screen.getByTestId("w2-recommendation-rationale");
+    expect(rationale).toHaveTextContent(/clarifier avant relance/i);
+    expect(rationale.textContent ?? "").not.toMatch(/##/);
+    expect(rationale.textContent ?? "").not.toContain("**");
+    expect(rationale.textContent ?? "").not.toContain("`");
+    expect(rationale.textContent ?? "").not.toMatch(/\batt:demo\b/);
+    expect(rationale.textContent ?? "").not.toMatch(/\bevi:xyz\b/);
+
+    expect(screen.getByTestId("w2-recommendation")).toHaveTextContent(
+      "Diagnostiquer / clarifier avant nouvelle tentative",
+    );
+    expect(screen.getByTestId("w2-recommendation-footer")).toHaveTextContent(
+      /ne lance aucune action automatiquement/i,
+    );
+    expect(
+      screen.getByTestId("w2-option-opt:trajectory:clarify-first"),
+    ).toHaveTextContent("Recommandée — pas décidée");
+    expect(
+      screen.getByTestId("w2-option-tech-opt:trajectory:clarify-first"),
+    ).toBeInTheDocument();
+  });
+
   it("records an explicit Pilote decision and shows STOP BEFORE EXECUTE on the verdict", async () => {
     proposeMock.mockResolvedValue({
       ok: true,
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index d98f0636..d0b7dd7f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -73,9 +73,15 @@ import {
   pilotAmbiguousPendingTitle,
   pilotLostPendingTitle,
   pilotPrepareNotApplicableMessage,
+  pilotPresentedOptionLabel,
   pilotProposalOptionLabel,
   pilotRecoverablePendingTitle,
+  formatNoraAssistantDisplayText,
 } from "@/features/project-assistant/presentationLabels";
+import {
+  partitionOptionImpactsForPilote,
+  scrubPiloteRecommendationProse,
+} from "@/features/project-assistant/w2/recommendationDecisionIntegrity";
 import {
   PROPOSAL_SUBJECT_AMEND_REF,
   PROPOSAL_SUBJECT_PURSUE_REF,
@@ -1970,6 +1976,9 @@ export function TrajectorySurface({
                 const isRecommended =
                   option.optionRef ===
                   optionSet.recommendation.recommendedOptionRef;
+                const impactParts = partitionOptionImpactsForPilote(
+                  option.impacts,
+                );
                 return (
                   <li
                     key={option.optionRef}
@@ -1986,11 +1995,33 @@ export function TrajectorySurface({
                       <span className={styles.optionLabel}>{option.label}</span>
                     </div>
                     <p className={styles.optionIntent}>{option.intent}</p>
-                    <ul className={styles.impacts}>
-                      {option.impacts.map((impact) => (
-                        <li key={impact}>{impact}</li>
-                      ))}
-                    </ul>
+                    {impactParts.primary.length > 0 ? (
+                      <ul className={styles.impacts}>
+                        {impactParts.primary.map((impact) => (
+                          <li key={impact}>{impact}</li>
+                        ))}
+                      </ul>
+                    ) : null}
+                    {impactParts.technical.length > 0 ? (
+                      <details data-testid={`w2-option-tech-${option.optionRef}`}>
+                        <summary>Détails techniques de l&apos;option</summary>
+                        <ul className={styles.impacts}>
+                          {impactParts.technical.map((impact) => (
+                            <li key={impact}>{impact}</li>
+                          ))}
+                        </ul>
+                        <p className={styles.blockNote}>
+                          Réf. option : <code>{option.optionRef}</code>
+                        </p>
+                      </details>
+                    ) : (
+                      <details data-testid={`w2-option-tech-${option.optionRef}`}>
+                        <summary>Détails techniques de l&apos;option</summary>
+                        <p className={styles.blockNote}>
+                          Réf. option : <code>{option.optionRef}</code>
+                        </p>
+                      </details>
+                    )}
                     <button
                       type="button"
                       className={styles.decideAction}
@@ -2020,17 +2051,41 @@ export function TrajectorySurface({
               <span className={styles.sectionKind} data-kind="recommendation">
                 Recommandation
               </span>
-              {optionSet.recommendation.label}
+              {pilotPresentedOptionLabel({
+                optionRef: optionSet.recommendation.recommendedOptionRef,
+                options: optionSet.options,
+              })}
             </h3>
-            <p className={styles.blockBody}>
-              {optionSet.recommendation.rationale}
+            <p
+              className={styles.blockBody}
+              data-testid="w2-recommendation-rationale"
+            >
+              {scrubPiloteRecommendationProse(
+                formatNoraAssistantDisplayText(
+                  optionSet.recommendation.rationale,
+                ),
+              )}
             </p>
-            <p className={styles.blockNote}>
-              Cette recommandation ne promeut aucune trajectoire.
+            <p className={styles.blockNote} data-testid="w2-recommendation-footer">
+              Cette recommandation vous aide à décider. Elle ne lance aucune
+              action automatiquement.
               {optionSet.recommendation.ckcAttribution
                 ? " Contexte de cycle rattaché."
-                : " Aucun contexte de cycle rattaché."}
+                : ""}
             </p>
+            <details data-testid="w2-recommendation-tech">
+              <summary>Détails techniques de la recommandation</summary>
+              <p className={styles.blockNote}>
+                {optionSet.recommendation.label} · optionRef{" "}
+                <code>{optionSet.recommendation.recommendedOptionRef}</code>
+                {optionSet.optionSetRef ? (
+                  <>
+                    {" "}
+                    · optionSetRef <code>{optionSet.optionSetRef}</code>
+                  </>
+                ) : null}
+              </p>
+            </details>
           </section>
         </>
       ) : null}
@@ -2057,7 +2112,10 @@ export function TrajectorySurface({
                 {optionSet?.decisionSubjectMode === "proposal" ||
                 decision.proposalId
                   ? pilotProposalOptionLabel(decision.selectedOptionRef)
-                  : decision.selectedOptionRef}
+                  : pilotPresentedOptionLabel({
+                      optionRef: decision.selectedOptionRef,
+                      options: optionSet?.options,
+                    })}
               </dd>
             </div>
             <div>
@@ -2905,7 +2963,11 @@ export function TrajectorySurface({
                 {postEvidence.recommendation.headline}
               </p>
               <p className={styles.blockBody} data-testid="w3c-recommendation-rationale">
-                {postEvidence.recommendation.rationale}
+                {scrubPiloteRecommendationProse(
+                  formatNoraAssistantDisplayText(
+                    postEvidence.recommendation.rationale,
+                  ),
+                )}
               </p>
               <p className={styles.blockBody} data-testid="w3c-next-step">
                 <strong>{W4C_NEXT_ACTION_LEAD} :</strong>{" "}
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
index 85368728..d29288e5 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
@@ -26,6 +26,7 @@ import {
   loadProductCkcIndexSync,
 } from "@/lib/oa/doctrine/product/productCkcIndex";
 import type { QualificationDto } from "./types";
+import { projectPiloteRecommendationRationale } from "../w2/recommendationDecisionIntegrity";

 export {
   DEFAULT_PRODUCT_DOCTRINE_PIN,
@@ -42,6 +43,15 @@ export const CKC_ATTRIBUTION_MARKER_PREFIX =
 export const CKC_COGNITIVE_REASONING_SYSTEM_MARKER =
   "SFIA Studio CKC COGNITIVE REASONING" as const;

+/** Appended to system prompt — Pilote Recommendation integrity (PJ-REPROOF-01/02). */
+export const CKC_COGNITIVE_RECOMMENDATION_INTEGRITY_RULES = [
+  "Recommendation ≠ HumanDecision ; aucune autorité d'exécution.",
+  "Explique uniquement l'option canonique recommandée fournie — ne redéfinis pas le pack d'options.",
+  "Interdit: inventer O1/O2/O3 ou une liste Alternative 1/2/3 concurrente.",
+  "Interdit: Markdown (##, **, tableaux, fences) et identifiants internes (opt:/epi:/Attempt/Evidence) dans la prose Pilote.",
+  "Texte métier brut, concis, en français.",
+].join(" ");
+
 export type CkcCognitiveProvenance = {
   readonly ckcId: string;
   readonly cycleTypeId: string;
@@ -321,9 +331,10 @@ export function buildCkcCognitivePromptSection(
 }

 /**
- * Business-first Recommendation rationale (R1-03).
- * Cognitive guidance may inform the text; CKC IDs / package digests / fingerprints
- * must not appear as Pilote-facing prose. Structured provenance is separate.
+ * Business-first Recommendation rationale (R1-03 + PJ-REPROOF-01/02).
+ * Cognitive guidance may inform WHY the canonical recommendation fits;
+ * it must not invent a competing Option pack. CKC IDs / digests stay out of
+ * Pilote-facing prose. Structured provenance is separate.
  */
 export function deriveCkcAttributedRecommendation(input: {
   baseRationale: string;
@@ -331,9 +342,11 @@ export function deriveCkcAttributedRecommendation(input: {
   cognitiveRecommendation?: string | null;
 }): string {
   // Keep engine codes out of primary Pilote Pourquoi — map at presentation.
-  // Prefer cognitive / CKC guidance prose; fall back to base only if no guidance.
   if (!input.content) {
-    return input.baseRationale;
+    return projectPiloteRecommendationRationale({
+      baseRationale: input.baseRationale,
+      cognitiveRecommendation: input.cognitiveRecommendation,
+    }).rationale;
   }
   const guidance = extractCkcGuidanceFromMarkdown(input.content.markdown);
   const guidanceText =
@@ -342,14 +355,11 @@ export function deriveCkcAttributedRecommendation(input: {
   const cognitive = scrubTechnicalCkcMechanics(
     input.cognitiveRecommendation?.trim() ?? "",
   );
-  if (cognitive) {
-    return `${cognitive} · ${guidanceText}`;
-  }
-  // If base is a known engine code, prefer guidance alone for Pilote primary.
-  if (/^[a-z0-9_]+$/i.test(input.baseRationale.trim())) {
-    return guidanceText;
-  }
-  return `${input.baseRationale} ${guidanceText}`;
+  return projectPiloteRecommendationRationale({
+    baseRationale: input.baseRationale,
+    cognitiveRecommendation: cognitive,
+    guidanceText,
+  }).rationale;
 }

 /** Strip technical CKC mechanics that must not leak into Pilote-facing prose. */
@@ -457,8 +467,8 @@ export async function reasonWithResolvedCkcContext(input: {
     provider.providerId === "fake-test" ? "test_provider" : "openai_live";

   const systemContent = input.ckcPromptSection?.trim()
-    ? `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\nContexte CKC résolu (guidance seulement — pas d'autorité, pas de décision humaine):\n${input.ckcPromptSection.trim()}`
-    : `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\nAucun contexte CKC package résolu — recommandation générique uniquement.`;
+    ? `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\n${CKC_COGNITIVE_RECOMMENDATION_INTEGRITY_RULES}\nContexte CKC résolu (guidance seulement — pas d'autorité, pas de décision humaine):\n${input.ckcPromptSection.trim()}`
+    : `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\n${CKC_COGNITIVE_RECOMMENDATION_INTEGRITY_RULES}\nAucun contexte CKC package résolu — recommandation générique uniquement.`;

   const completion = await provider.complete([
     { role: "system", content: systemContent },
diff --git a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
index 08acc0ae..57fcc7e2 100644
--- a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
+++ b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
@@ -787,6 +787,41 @@ export function pilotProposalOptionLabel(
   }
 }

+/**
+ * Pilote labels for ProjectTrajectory option refs (PJ-REPROOF-01/02).
+ * Raw optionRef stays secondary/audit only.
+ */
+export function pilotTrajectoryOptionLabel(
+  optionRef: string | null | undefined,
+): string {
+  switch ((optionRef ?? "").trim()) {
+    case "opt:trajectory:governed-gated":
+      return "Préparer une nouvelle tentative gouvernée";
+    case "opt:trajectory:bounded-direct":
+      return "Replanifier ou suspendre sans relance immédiate";
+    case "opt:trajectory:clarify-first":
+      return "Diagnostiquer / clarifier avant nouvelle tentative";
+    case "opt:proposal-subject:pursue":
+    case "opt:proposal-subject:amend":
+    case "opt:proposal-subject:refuse":
+      return pilotProposalOptionLabel(optionRef);
+    default:
+      return nonempty(optionRef) ?? "Option";
+  }
+}
+
+/** Resolve Pilote label from PresentedOptionSet when available; else trajectory map. */
+export function pilotPresentedOptionLabel(input: {
+  readonly optionRef: string | null | undefined;
+  readonly options?: readonly { readonly optionRef: string; readonly label: string }[];
+}): string {
+  const ref = (input.optionRef ?? "").trim();
+  if (!ref) return "Option";
+  const fromSet = input.options?.find((o) => o.optionRef === ref)?.label?.trim();
+  if (fromSet) return fromSet;
+  return pilotTrajectoryOptionLabel(ref);
+}
+
 export function pilotPrepareNotApplicableMessage(): string {
   return "La préparation d'exécution ne s'applique pas après une décision de modification ou de refus — poursuivez avec Nora.";
 }
@@ -815,7 +850,13 @@ export function formatNoraAssistantDisplayText(text: string | null | undefined):
   out = out.replace(/\bdocs_write\b/g, "écriture de document");
   // Soften markdown emphasis / headings leftovers without rendering HTML.
   out = out.replace(/\*\*([^*]+)\*\*/g, "$1");
+  out = out.replace(/__([^_]+)__/g, "$1");
   out = out.replace(/(^|\n)#{1,6}\s+/g, "$1");
+  out = out.replace(/`([^`]+)`/g, "$1");
+  out = out.replace(/\bopt:[a-z0-9:_-]+\b/gi, "");
+  out = out.replace(/\bepi:[a-z0-9:_-]+\b/gi, "");
+  out = out.replace(/\batt:[a-z0-9:_-]+\b/gi, "");
+  out = out.replace(/\bevi:[a-z0-9:_-]+\b/gi, "");
   out = out.replace(/[^\S\n]{2,}/g, " ").replace(/ *\n */g, "\n").trim();
   return scrubPiloteFacingEngineJargon(out);
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
index 0c8ee704..c7a3d23f 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
@@ -4,8 +4,10 @@
  * trajectory.
  *
  * Phase B order (binding):
- *   resolve inputs → load product CKC → provider cognition → derive Options →
- *   enrich Recommendation → digests → ONLY THEN durable trajectory/epistemic writes.
+ *   resolve inputs → load product CKC → derive Options + base Recommendation →
+ *   integrity assert (recommendedOptionRef ∈ OptionSet) → constrained provider
+ *   cognition (explain WHY only) → enrich Recommendation → digests → ONLY THEN
+ *   durable trajectory/epistemic writes.
  *
  * Durability follows D-W2-01. D-W2-A3-01 idempotence uses stable CKC semantic
  * fingerprint (not raw provider prose). STOP BEFORE EXECUTE.
@@ -61,6 +63,10 @@ import {
   deriveTrajectoryRecommendation,
   type TrajectoryOptionInputs,
 } from "./trajectoryOptions";
+import {
+  assertRecommendedOptionInPresentedSet,
+  buildConstrainedRecommendationCognitionAsk,
+} from "./recommendationDecisionIntegrity";
 import {
   buildRecoveryCognitionSection,
   resolvePostEvidenceRecoveryContext,
@@ -73,6 +79,40 @@ import type {
   TrajectoryRecommendationDto,
 } from "./types";

+/**
+ * Phase B cognition AFTER deterministic Options/Recommendation identity.
+ * Provider may explain WHY the canonical recommended option fits — never WHAT
+ * the OptionSet is.
+ */
+async function reasonCanonicalRecommendationCognition(input: {
+  readonly ckcPromptSection: string;
+  readonly recoveryCognitionSection: string | null;
+  readonly recommendedOptionLabel: string;
+  readonly recommendedOptionRef: string;
+  readonly subjectLine: string;
+  readonly projectSummary: string;
+  readonly intentSummary: string;
+}): Promise<{ ok: true; recommendation: string } | { ok: false; detail: string }> {
+  try {
+    const reasoning = await reasonWithResolvedCkcContext({
+      userContent: buildConstrainedRecommendationCognitionAsk({
+        recommendedOptionLabel: input.recommendedOptionLabel,
+        recommendedOptionRef: input.recommendedOptionRef,
+        subjectLine: input.subjectLine,
+      }),
+      projectSummary: input.projectSummary,
+      intentSummary: input.intentSummary,
+      ckcPromptSection: input.recoveryCognitionSection
+        ? `${input.ckcPromptSection}\n\n${input.recoveryCognitionSection}`
+        : input.ckcPromptSection,
+    });
+    return { ok: true, recommendation: reasoning.recommendation };
+  } catch (error) {
+    const detail = error instanceof Error ? error.message : "provider_error";
+    return { ok: false, detail };
+  }
+}
+
 /** Nora proposes; it never decides. Kept N1 so it can never satisfy a gate. */
 const NORA_OPTION_AUTHOR = Object.freeze({
   actorId: "actor:nora-w2",
@@ -332,59 +372,6 @@ export async function proposeTrajectoryOptions(
   const recoveryCognitionSection = recoveryContext
     ? buildRecoveryCognitionSection(recoveryContext)
     : null;
-  const cognitionUserContent = proposalSubject
-    ? `Instruire Options/Recommendation pour la Proposal ${proposalSubject.proposalId} (sujet: ${proposalSubject.sealedExecutionBasis.objective})`
-    : recoveryContext
-      ? `Instruire Options/Recommendation de recovery/replan après ${
-          recoveryContext.productOutcome === "UNCLAIMED" &&
-          recoveryContext.attemptStatus === "succeeded"
-            ? "succès technique / résultat produit non prouvé"
-            : `${recoveryContext.productOutcome} durable`
-        } (${recoveryContext.attemptId}, attempt=${recoveryContext.attemptStatus}) — sujet courant = recovery du même cycle, PAS un nouveau cadrage fonctionnel.`
-      : `Instruire Options/Recommendation pour le cycle ${input.cycleTypeId}`;
-  let cognitiveRecommendation: string;
-  try {
-    const reasoning = await reasonWithResolvedCkcContext({
-      userContent: cognitionUserContent,
-      projectSummary: [
-        `name=${input.projectTitle}`,
-        `objective=${input.objective}`,
-        `projectId=${input.projectId}`,
-        ...(proposalSubject
-          ? [
-              `proposalId=${proposalSubject.proposalId}`,
-              `subjectObjective=${proposalSubject.sealedExecutionBasis.objective}`,
-              `targetPath=${proposalSubject.sealedExecutionBasis.targetPath ?? ""}`,
-              `requestedOperation=${proposalSubject.sealedExecutionBasis.requestedOperation}`,
-            ]
-          : recoveryContext
-            ? [
-                `recoverySubject=post_evidence`,
-                `attemptId=${recoveryContext.attemptId}`,
-                `evidenceId=${recoveryContext.evidenceId}`,
-                `recommendationKind=${recoveryContext.recommendationKind}`,
-                `realProcessInvoked=${recoveryContext.realProcessInvoked}`,
-              ]
-            : []),
-      ].join(" | "),
-      intentSummary: proposalSubject
-        ? `Proposal subject ${proposalSubject.proposalId} · profil ${input.recommendedProfile}`
-        : recoveryContext
-          ? `Recovery/replan post-Evidence · cycle ${input.cycleTypeId} · profil ${input.recommendedProfile} · Recommendation ≠ HumanDecision`
-          : `Cycle ${input.cycleTypeId} · profil ${input.recommendedProfile}`,
-      ckcPromptSection: recoveryCognitionSection
-        ? `${ckcPromptSection}\n\n${recoveryCognitionSection}`
-        : ckcPromptSection,
-    });
-    cognitiveRecommendation = reasoning.recommendation;
-  } catch (error) {
-    const detail = error instanceof Error ? error.message : "provider_error";
-    return {
-      ok: false,
-      code: "PROVIDER_COGNITION_FAILED",
-      message: `Cognition Nora/provider échouée (${detail}) — aucune mutation de trajectoire/OptionSet.`,
-    };
-  }

   const semanticFingerprint = computeCkcSemanticFingerprint(
     ckcContent.provenance,
@@ -403,6 +390,33 @@ export async function proposeTrajectoryOptions(
   const optionSetRef = `optset:w2-${shortId()}`;
   const correlationId = input.correlationId ?? `cor:w2-opt-${shortId()}`;

+  const projectSummary = [
+    `name=${input.projectTitle}`,
+    `objective=${input.objective}`,
+    `projectId=${input.projectId}`,
+    ...(proposalSubject
+      ? [
+          `proposalId=${proposalSubject.proposalId}`,
+          `subjectObjective=${proposalSubject.sealedExecutionBasis.objective}`,
+          `targetPath=${proposalSubject.sealedExecutionBasis.targetPath ?? ""}`,
+          `requestedOperation=${proposalSubject.sealedExecutionBasis.requestedOperation}`,
+        ]
+      : recoveryContext
+        ? [
+            `recoverySubject=post_evidence`,
+            `attemptId=${recoveryContext.attemptId}`,
+            `evidenceId=${recoveryContext.evidenceId}`,
+            `recommendationKind=${recoveryContext.recommendationKind}`,
+            `realProcessInvoked=${recoveryContext.realProcessInvoked}`,
+          ]
+        : []),
+  ].join(" | ");
+  const intentSummary = proposalSubject
+    ? `Proposal subject ${proposalSubject.proposalId} · profil ${input.recommendedProfile}`
+    : recoveryContext
+      ? `Recovery/replan post-Evidence · cycle ${input.cycleTypeId} · profil ${input.recommendedProfile} · Recommendation ≠ HumanDecision`
+      : `Cycle ${input.cycleTypeId} · profil ${input.recommendedProfile}`;
+
   // ── CORR-PROOF-10 proposal subject — ZERO ProjectTrajectory ───────────
   if (proposalSubject) {
     const options = deriveProposalSubjectOptions({
@@ -413,12 +427,50 @@ export async function proposeTrajectoryOptions(
       sealed: proposalSubject.sealedExecutionBasis,
       proposalId: proposalSubject.proposalId,
     });
+    const integrity = assertRecommendedOptionInPresentedSet({
+      options,
+      recommendedOptionRef: baseRecommendation.recommendedOptionRef,
+    });
+    if (!integrity.ok) {
+      return {
+        ok: false,
+        code: integrity.code,
+        message: integrity.message,
+      };
+    }
+    const cognition = await reasonCanonicalRecommendationCognition({
+      ckcPromptSection,
+      recoveryCognitionSection,
+      recommendedOptionLabel: integrity.option.label,
+      recommendedOptionRef: baseRecommendation.recommendedOptionRef,
+      subjectLine: `Expliquer la recommandation canonique pour la Proposal ${proposalSubject.proposalId} (sujet: ${proposalSubject.sealedExecutionBasis.objective}).`,
+      projectSummary,
+      intentSummary,
+    });
+    if (!cognition.ok) {
+      return {
+        ok: false,
+        code: "PROVIDER_COGNITION_FAILED",
+        message: `Cognition Nora/provider échouée (${cognition.detail}) — aucune mutation de trajectoire/OptionSet.`,
+      };
+    }
     const recommendation = enrichRecommendationWithCognition({
       base: baseRecommendation,
       content: ckcContent,
-      cognitiveRecommendation,
+      cognitiveRecommendation: cognition.recommendation,
       fingerprint: semanticFingerprint,
     });
+    const postEnrichIntegrity = assertRecommendedOptionInPresentedSet({
+      options,
+      recommendedOptionRef: recommendation.recommendedOptionRef,
+    });
+    if (!postEnrichIntegrity.ok) {
+      return {
+        ok: false,
+        code: postEnrichIntegrity.code,
+        message: postEnrichIntegrity.message,
+      };
+    }
     const optionSetDigest = computeOptionSetDigest({
       cycleTypeId: input.cycleTypeId,
       recommendedProfile: input.recommendedProfile,
@@ -563,12 +615,58 @@ export async function proposeTrajectoryOptions(

   const options = deriveTrajectoryOptions(inputs);
   const baseRecommendation = deriveTrajectoryRecommendation(inputs);
+  const integrity = assertRecommendedOptionInPresentedSet({
+    options,
+    recommendedOptionRef: baseRecommendation.recommendedOptionRef,
+  });
+  if (!integrity.ok) {
+    return {
+      ok: false,
+      code: integrity.code,
+      message: integrity.message,
+    };
+  }
+  const cognitionSubjectLine = recoveryContext
+    ? `Expliquer la recommandation canonique de recovery/replan après ${
+        recoveryContext.productOutcome === "UNCLAIMED" &&
+        recoveryContext.attemptStatus === "succeeded"
+          ? "succès technique / résultat produit non prouvé"
+          : `${recoveryContext.productOutcome} durable`
+      } (${recoveryContext.attemptId}, attempt=${recoveryContext.attemptStatus}) — sujet courant = recovery du même cycle, PAS un nouveau cadrage fonctionnel.`
+    : `Expliquer la recommandation canonique pour le cycle ${input.cycleTypeId}.`;
+  const cognition = await reasonCanonicalRecommendationCognition({
+    ckcPromptSection,
+    recoveryCognitionSection,
+    recommendedOptionLabel: integrity.option.label,
+    recommendedOptionRef: baseRecommendation.recommendedOptionRef,
+    subjectLine: cognitionSubjectLine,
+    projectSummary,
+    intentSummary,
+  });
+  if (!cognition.ok) {
+    return {
+      ok: false,
+      code: "PROVIDER_COGNITION_FAILED",
+      message: `Cognition Nora/provider échouée (${cognition.detail}) — aucune mutation de trajectoire/OptionSet.`,
+    };
+  }
   const recommendation = enrichRecommendationWithCognition({
     base: baseRecommendation,
     content: ckcContent,
-    cognitiveRecommendation,
+    cognitiveRecommendation: cognition.recommendation,
     fingerprint: semanticFingerprint,
   });
+  const postEnrichIntegrity = assertRecommendedOptionInPresentedSet({
+    options,
+    recommendedOptionRef: recommendation.recommendedOptionRef,
+  });
+  if (!postEnrichIntegrity.ok) {
+    return {
+      ok: false,
+      code: postEnrichIntegrity.code,
+      message: postEnrichIntegrity.message,
+    };
+  }

   const optionSetDigest = computeOptionSetDigest({
     cycleTypeId: input.cycleTypeId,
@@ -583,9 +681,9 @@ export async function proposeTrajectoryOptions(
     decisionSubjectMode: "project_trajectory",
   });

+  const recommendedOption = postEnrichIntegrity.option;
   const proposedSteps: TrajectoryStep[] = structuredClone(
-    (options.find((o) => o.optionRef === recommendation.recommendedOptionRef) ??
-      options[0]!).steps,
+    recommendedOption.steps,
   ) as TrajectoryStep[];

   const latest = await resolveLatestTrajectory(oa, input.projectId);
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
index 8ca5a6a9..6ec7ff5a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
@@ -206,9 +206,11 @@ export function deriveTrajectoryOptions(
         label: "Préparer une nouvelle tentative gouvernée",
         intent: `À partir du ${outcomePhrase}, décider explicitement puis préparer / inspecter / autoriser un nouveau contrat — sans Execute automatique.`,
         impacts: [
+          "Reprend à partir du résultat déjà observé",
+          "Aucun succès métier revendiqué automatiquement",
+          "Décision humaine requise avant préparation",
           attemptImpact,
           `Evidence: ${recovery.evidenceId}`,
-          "Aucun succès métier revendiqué",
           `productOutcome: ${outcome}`,
           `realProcessInvoked durable: ${recovery.realProcessInvoked}`,
         ],
@@ -233,11 +235,11 @@ export function deriveTrajectoryOptions(
         optionRef: CLARIFY_OPTION_REF,
         label: "Diagnostiquer / clarifier avant nouvelle tentative",
         intent:
-          "Approfondir le diagnostic (Evidence, stopReason, observabilité) avant toute préparation d'une nouvelle tentative.",
+          "Approfondir le diagnostic du livrable et des preuves disponibles avant toute préparation d'une nouvelle tentative.",
         impacts: [
           "Aucune préparation d'exécution à ce stade",
-          `stopReason: ${recovery.stopReason ?? "n/a"}`,
           "Nouvelle décision humaine requise après clarification",
+          `stopReason: ${recovery.stopReason ?? "n/a"}`,
         ],
         reservations,
         steps: recoveryClarifySteps(),
@@ -304,7 +306,7 @@ export function deriveTrajectoryRecommendation(
     return {
       label: "RECOMMANDATION — PAS UNE DÉCISION",
       recommendedOptionRef: CLARIFY_OPTION_REF,
-      rationale: `Épisode post-Evidence ${recovery.productOutcome} (${recovery.attemptId}) — ${recovery.headline}. Diagnostiquer / clarifier avant toute nouvelle tentative. Recommendation ≠ HumanDecision ; aucun Execute automatique.`,
+      rationale: `L'épisode précédent s'est terminé avec un résultat produit ${recovery.productOutcome === "UNCLAIMED" ? "non encore pleinement confirmé" : recovery.productOutcome === "STOP" ? "arrêté de façon gouvernée" : "en échec"}. ${recovery.headline} Studio recommande de diagnostiquer / clarifier avant toute nouvelle tentative. Recommendation ≠ HumanDecision — cette recommandation n'est pas une décision et ne lance aucune action automatiquement.`,
       isHumanDecision: false,
       promotesTrajectory: false,
       ckcAttribution: inputs.ckcAttribution,

```

## 14. Next gate

After ChatGPT PASS → DISTINCT MORRIS GO — PROJECT GIT INTEGRATION (commit+push+PR). Merge separate.

## 15. Verdict

```
PASS — RECOMMENDATION / DECISION INTEGRITY + PILOTE UX CORRECTION READY FOR CHATGPT REVIEW
```

Fin.
