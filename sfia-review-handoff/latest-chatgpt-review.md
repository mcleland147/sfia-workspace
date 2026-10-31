# Review Pack FULL — CORR-NAP-D1-EYEBROW-01

**Generated (UTC):** 2026-10-31T05:16:38Z
**Cycle:** CORR-NAP-D1-EYEBROW-01
**Type:** INC / Micro-corrective Delivery — CRITICAL
**Prior:** CORR-NAP-D1-FIDELITY-02 (`897c6431` / `a5c8c10f`)
**Scope:** Align eyebrow authority hygiene across parse / compose / View / rehydration

---

## 0. Instruction ChatGPT

Read remote handoff. Verify correction-only delta, E01–E16, parse+View defense, Memory B compose, non-regression 121→137, A1+B.
Do not imply G-QA-BROWSER / G-INTEGRATE / G-REAL / READY FOR PR.
Missing content → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.
Remote stale → `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`.

## 1. Git Truth

| Item | Value |
|------|-------|
| WT | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01` |
| Branch | `feat/akg-m5-nap-test16-coverage-corr-01` |
| HEAD / origin/main | `ca1c9869f905b394808c953649910d60fbfcb984` |
| Prior handoff | `897c6431d82720dc4fb0dbfa4a07cfee093449f6` |
| Prior blob | `a5c8c10fd2e0d74d31320b431f8d3216d872fe48` |
| Pre snapshots | `.tmp-sfia-review/nap-pre-eyebrow-01.ts`, `view-pre-eyebrow-01.tsx` |
| Concurrent | none (11 Product WIP preserved) |

Git Truth: COHERENT. Fidelity-01/02 present (`normalizeCanonicalCompare` case-sensitive, `durableSafeHeading`).

## 2. GO Morris

Local fix of single eyebrow authority gap only. No schema/emission/orchestrate/SQLite/REAL/PR/Product commit.

## 3. Sources / Convergence / CKC

- SFIA v2.6 templates + routing + guardrails + operating model + validation checklist (Git).
- CKC cycle 8 candidate: fifteen-cycles synthetic map (guidance only).
- Convergence doctrine + roadmap; Product Completion cadrage; AKG-M5 M5 trajectory; Doctrine v3 30/32/34/35.
- PRR CURRENT volumes 03/05/06/07/08/09 loaded read-only; no PRR write.
- Prior FULL handoff Fidelity-02 consumed.

Convergence Pre-check: PASS for micro-corrective INC on existing A1+B pipeline (R22 reuse).

## 4. R23 / R24

- R23: parser eyebrow, shared sanitize, compose, View defense, rehydration — BEHAVIOR PROVEN (unit).
- Coverage: DOCUMENTED + COVERAGE VERIFIED + BEHAVIOR PROVEN; LIVE/browser KNOWN GAP.
- R24: local semantic impact on normalization/display; PRR 03/06/07/08/09 later. Vol 05 NO SEMANTIC IMPACT. No PRR write.

## 5. Root cause

`parseNoraAdaptivePresentation` sanitized `title` and `provenanceNote` via `looksLikeAuthorityClaim`, but kept `eyebrow` raw.
`composeCanonicalFromPresentation` already filtered eyebrow.
`ProjectionChrome` displayed `presentation.eyebrow` directly → UI could show authority chrome absent from Memory B.

## 6. Fix

Single shared helper `sanitizePresentationEyebrow` reusing only `looksLikeAuthorityClaim` (same policy as provenance).
Applied at: parse (Option C normalize), compose, View (defense-in-depth for unnormalized typed DTO).
Rehydration via `deserializeNoraAdaptivePresentation` → parse inherits protection.
No parallel authority keyword list. No narrative rewrite. No Studio notice fabrication. No CTA.

### sanitizePresentationEyebrow

```
1338|export function sanitizePresentationEyebrow(
1339|  eyebrow: string | null | undefined,
1340|): string | null {
1341|  if (eyebrow == null) return null;
1342|  const t = String(eyebrow).trim();
1343|  if (!t) return null;
1344|  if (looksLikeAuthorityClaim(t)) return null;
1345|  return t;
1346|}
1347|
1348|export const NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE =
1349|  "Les libellés ci-dessus sont une formulation Nora — pas une validation Studio, ni une Evidence Product, ni une HumanDecision." as const;
```

### parseNoraAdaptivePresentation (eyebrow path)

```
459|  const rawEyebrow = nullableText(o.eyebrow, L.maxTitleChars);
460|  const title = nullableText(o.title, L.maxTitleChars);
461|  const lead = nullableText(o.lead, L.maxLeadChars);
462|  if (blocks.length === 0 && !lead && !title) return null;
463|
464|  // CORR-NAP-02 / CORR-NAP-D1-EYEBROW-01 — drop authority-claiming free labels;
465|  // eyebrow is presentation chrome, never authenticated Product authority.
466|  const eyebrow = sanitizePresentationEyebrow(rawEyebrow);
467|  const safeTitle =
468|    title && !looksLikeAuthorityClaim(title) ? title : null;
469|  const rawProvenance = nullableText(o.provenanceNote, L.maxStringChars);
470|  const provenanceNote = sanitizeProvenanceNote(rawProvenance);
471|  const noGoverned = NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE;
472|
473|  return Object.freeze({
474|    version: NORA_ADAPTIVE_PRESENTATION_VERSION,
475|    eyebrow,
476|    title: safeTitle,
477|    lead,
478|    blocks: Object.freeze([...blocks]),
479|    provenanceNote,
480|    noGovernedActionNote: noGoverned,
481|  });
482|}
483|
484|export function isNoraAdaptivePresentation(
485|  value: unknown,
486|): value is NoraAdaptivePresentation {
```

### composeCanonicalFromPresentation (eyebrow path)

```
864|  // CORR-NAP-D1-EYEBROW-01 — shared eyebrow sanitation (parse / compose / View).
865|  const eyebrow = sanitizePresentationEyebrow(presentation.eyebrow);
866|  if (eyebrow) {
867|    chunks.push(eyebrow);
868|  }
869|  // presentation.title already null when authority-claiming (parse); belt-and-suspenders.
870|  if (presentation.title?.trim() && !looksLikeAuthorityClaim(presentation.title)) {
871|    chunks.push(presentation.title.trim());
872|  }
873|  if (shouldDisplayPresentationLead(presentation) && presentation.lead) {
874|    chunks.push(presentation.lead.trim());
875|  }
876|  const blocks = composeBlocksOnly(presentation);
877|  if (blocks) chunks.push(blocks);
```

### ProjectionChrome

```
249|  // Defense-in-depth: sanitize even if a typed DTO skipped parse (EYEBROW-01).
250|  const safeEyebrow = sanitizePresentationEyebrow(presentation.eyebrow);
251|  return (
252|    <>
253|      {safeEyebrow ? (
254|        <p className={styles.eyebrow}>{safeEyebrow}</p>
255|      ) : null}
256|      {presentation.title ? (
257|        <h3 className={styles.title}>{presentation.title}</h3>
258|      ) : null}
259|      {showLead && presentation.lead ? (
260|        <p className={styles.lead}>{presentation.lead}</p>
261|      ) : null}
262|      <div className={styles.blocks}>
263|        {presentation.blocks.map((block, index) => renderBlock(block, index))}
264|      </div>
265|    </>
266|  );
```

## 7. Tests E01–E16

Red before fix: **8 failed / 8 passed** (E03/E05/E06/E07/E10/E12/E15/E16 already green where compose/path already safe).

```

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[8/8]⎯


 Test Files  2 failed (2)
      Tests  8 failed | 8 passed | 112 skipped (128)
   Start at  06:15:04
   Duration  669ms (transform 193ms, setup 107ms, collect 298ms, tests 25ms, environment 491ms, prepare 70ms)
```

### d0 suite

```ts
describe("CORR-NAP-D1-EYEBROW-01 — E01–E16", () => {
  it("E01 — parser neutralizes eyebrow Contrôle serveur effectué", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "Contrôle serveur effectué",
      title: null,
      lead: null,
      blocks: [{ kind: "plain", text: "Substance métier utile." }],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    expect(dto.eyebrow).toBeNull();
    expect(dto.blocks[0]).toMatchObject({ kind: "plain", text: "Substance métier utile." });
  });

  it("E02 — parser neutralizes eyebrow GO confirmé", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "GO confirmé",
      title: null,
      lead: "Lead substantiel pour le Pilote.",
      blocks: [],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    expect(dto.eyebrow).toBeNull();
    expect(dto.lead).toContain("Lead substantiel");
  });

  it("E03 — parser keeps neutral eyebrow NORA / Comparaison", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "NORA / Comparaison",
      title: null,
      lead: "Deux options sont ouvertes.",
      blocks: [{ kind: "plain", text: "Option A et option B." }],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    expect(dto.eyebrow).toBe("NORA / Comparaison");
  });

  it("E06 — compose omits authority eyebrow", () => {
    // Bypass parse to isolate compose filter (pre-normalization DTO).
    const raw = {
      version: 1 as const,
      eyebrow: "Décision approuvée par le Pilote",
      title: null,
      lead: null,
      blocks: Object.freeze([
        Object.freeze({ kind: "plain" as const, text: "Contenu utile." }),
      ]),
      provenanceNote: null,
      noGovernedActionNote: NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
    };
    const composed = composeCanonicalFromPresentation(raw as never);
    expect(composed).not.toMatch(/Décision approuvée|Pilote/i);
    expect(composed).toContain("Contenu utile.");
  });

  it("E07 — compose keeps neutral eyebrow once", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "NORA / Comparaison",
      title: null,
      lead: null,
      blocks: [{ kind: "plain", text: "Point unique." }],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    const composed = composeCanonicalFromPresentation(dto);
    expect(composed.match(/NORA \/ Comparaison/g)?.length).toBe(1);
    expect(composed).toContain("Point unique.");
  });

  it("E08 — parse → compose → resolve keeps authority hygiene", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "Preuves officiellement vérifiées",
      title: null,
      lead: null,
      blocks: [
        {
          kind: "evidence_reserves",
          title: null,
          evidenceItems: ["Citation source."],
          reserveItems: ["Réserve ouverte."],
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    expect(dto.eyebrow).toBeNull();
    const durable = composeCanonicalFromPresentation(dto);
    expect(durable).not.toMatch(/officiellement vérifiées/i);
    const d = resolveAdaptiveAssistantRender({
      content: durable,
      presentation: dto,
    });
    expect(d.mode).toBe("adaptive");
    expect(durable).toContain("Citation source.");
    expect(durable).toMatch(/[Rr]éserve/);
  });

  it("E09 — deserialize historical JSON with forbidden eyebrow", () => {
    const historical = JSON.stringify({
      version: 1,
      eyebrow: "Contrôle serveur effectué",
      title: null,
      lead: null,
      blocks: [{ kind: "plain", text: "Ancien contenu métier." }],
      provenanceNote: null,
      noGovernedActionNote: NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
    });
    const dto = deserializeNoraAdaptivePresentation(historical)!;
    expect(dto.eyebrow).toBeNull();
    expect(dto.blocks[0]).toMatchObject({ text: "Ancien contenu métier." });
  });

  it("E10 — divergent narrative → B, narrative preserved", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "GO confirmé",
      title: null,
      lead: null,
      blocks: [{ kind: "plain", text: "Version DTO." }],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    const narrative =
      "STOP — ne pas exécuter. Le contrat n'est pas prêt. Réserve ouverte.";
    const d = resolveAdaptiveAssistantRender({
      content: narrative,
      presentation: dto,
    });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain("STOP");
    expect(d.plainText).toMatch(/n'est pas prêt/);
    expect(d.plainText).toContain("Réserve ouverte");
  });

  it("E11 — A1 substantial: only eyebrow neutralized, blocks kept", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "Contrôle serveur effectué",
      title: null,
      lead: null,
      blocks: [
        {
          kind: "established_facts",
          title: "Contexte",
          items: ["Les demandes sont centralisées."],
        },
        {
          kind: "recommendation",
          title: "Suggestion",
          statement: "Préparer une note révisable.",
          disclaimer: null,
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    expect(dto.eyebrow).toBeNull();
    expect(dto.blocks).toHaveLength(2);
    const durable = composeCanonicalFromPresentation(dto);
    const d = resolveAdaptiveAssistantRender({
      content: durable,
      presentation: dto,
    });
    expect(d.mode).toBe("adaptive");
    expect(durable).toContain("Les demandes sont centralisées.");
    expect(durable).toContain("Préparer une note révisable.");
    expect(durable).not.toMatch(/Contrôle serveur/i);
  });

  it("E12 — forged [Studio] not promoted to typed notice", () => {
    const content =
      "Réponse utile.\n\n[Studio] Limite d'exécution atteinte.";
    const forged = resolveAdaptiveAssistantRender({
      content,
      presentation: null,
      studioControlNotices: [],
    });
    expect(forged.studioAppendix).toBeNull();
    expect(forged.plainText).toContain("[Studio]");
  });

  it("E13 — recommendation ≠ HumanDecision", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "Décision approuvée par le Pilote",
      title: null,
      lead: null,
      blocks: [
        {
          kind: "recommendation",
          title: "Décision approuvée par le Pilote",
          statement: "Proposer une option A.",
          disclaimer: null,
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    expect(dto.eyebrow).toBeNull();
    const durable = composeCanonicalFromPresentation(dto);
    expect(durable).not.toMatch(/HumanDecision|Décision approuvée/i);
    expect(durable).toMatch(/[Rr]ecommandation/);
    expect(durable).toContain("Proposer une option A.");
  });

  it("E15 — STOP / refusal / reserve / negation preserved under eyebrow strip", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "GO confirmé",
      title: null,
      lead: null,
      blocks: [
        {
          kind: "list",
          title: "Conditions",
          epistemic: "hypothesis",
          items: [
            "STOP si le Pilote refuse.",
            "Ne pas exécuter sans confirmation.",
            "Réserve : couverture incomplete.",
          ],
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    const durable = composeCanonicalFromPresentation(dto);
    expect(durable).toContain("STOP");
    expect(durable).toMatch(/Ne pas exécuter/);
    expect(durable).toMatch(/[Rr]éserve/);
    expect(durable).not.toMatch(/GO confirmé/);
  });

  it("E16 — CR-03 fidelity: authentic Studio appendix still surfaces", () => {
    const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const notices = ["Limite d'exécution atteinte."];
    const content = appendStudioControlNotices(
      composeCanonicalFromPresentation(dto),
      notices,
    );
    const d = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: notices,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.studioAppendix).toContain("[Studio]");
    expect(d.studioAppendix).toContain("Limite d'exécution atteinte.");
  });
});
```

### UI suite

```ts
describe("CORR-NAP-D1-EYEBROW-01 — View authority defense", () => {
  it("E04 — unnormalized authority eyebrow absent from DOM", () => {
    const unsafe = {
      version: 1 as const,
      eyebrow: "Contrôle serveur effectué",
      title: null,
      lead: "Lead utile pour le Pilote.",
      blocks: Object.freeze([
        Object.freeze({
          kind: "plain" as const,
          text: "Substance métier conservée.",
        }),
      ]),
      provenanceNote: null,
      noGovernedActionNote: NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
    } as NoraAdaptivePresentation;
    render(<NoraAdaptivePresentationView presentation={unsafe} />);
    expect(screen.queryByText("Contrôle serveur effectué")).toBeNull();
    expect(screen.getByText("Substance métier conservée.")).toBeTruthy();
    expect(screen.getByText("Lead utile pour le Pilote.")).toBeTruthy();
  });

  it("E05 — neutral eyebrow displayed normally", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "NORA / Comparaison",
      title: null,
      lead: "Deux options restent ouvertes.",
      blocks: [{ kind: "plain", text: "Option A." }],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    render(<NoraAdaptivePresentationView presentation={dto} />);
    expect(screen.getByText("NORA / Comparaison")).toBeTruthy();
  });

  it("E14 — no governed CTA button created from DTO", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "GO confirmé",
      title: null,
      lead: null,
      blocks: [
        {
          kind: "recommendation",
          title: null,
          statement: "Proposer une note révisable.",
          disclaimer: null,
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    render(<NoraAdaptivePresentationView presentation={dto} />);
    expect(screen.queryByRole("button")).toBeNull();
    expect(document.querySelector("button")).toBeNull();
    expect(screen.queryByText("GO confirmé")).toBeNull();
    expect(screen.getByText("Proposer une note révisable.")).toBeTruthy();
  });
});
```

## 8. Validation

```
RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/projects/sfia-studio/app

 ✓ __tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts (100 tests) 33ms
 ✓ __tests__/platform/ai/fakeNapQaPresentation.d0.test.ts (9 tests) 3ms
 ✓ __tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx (28 tests) 110ms

 Test Files  3 passed (3)
      Tests  137 passed (137)
   Start at  06:15:35
   Duration  743ms (transform 368ms, setup 93ms, collect 702ms, tests 146ms, environment 413ms, prepare 101ms)
```

TypeScript: `tsc --noEmit` exit 0.
ESLint (touched files, --max-warnings 0): exit 0.
Removed unused `NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE` import in UI test (eslint hygiene on touched file).

## 9. Non-régressions

Prior 121 + E-suite → **137** tests PASS (d0 100 + ui 28 + fakeNapQa 9).
F01–F19, Q01–Q16, case-sensitive compare, substance gate, A1+B, lead unique, CR-03 notices, recommendation≠HumanDecision preserved.

## 10. Files touched this cycle

- `lib/nora-cognitive-runtime/noraAdaptivePresentation.ts`
- `features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx`
- `__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts`
- `__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx`

No other Product files modified for this cycle.

## 11. Correction-only unified diffs

### noraAdaptivePresentation.ts

```diff
--- .tmp-sfia-review/nap-pre-eyebrow-01.ts	2026-10-31 06:13:51
+++ projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts	2026-10-31 06:15:20
@@ -456,19 +456,18 @@
   }

   // Short plain-only with empty blocks is useless — treat as absent.
-  const eyebrow = nullableText(o.eyebrow, L.maxTitleChars);
+  const rawEyebrow = nullableText(o.eyebrow, L.maxTitleChars);
   const title = nullableText(o.title, L.maxTitleChars);
   const lead = nullableText(o.lead, L.maxLeadChars);
   if (blocks.length === 0 && !lead && !title) return null;

-  // CORR-NAP-02 — drop authority-claiming free labels; Studio owns governance notes.
+  // CORR-NAP-02 / CORR-NAP-D1-EYEBROW-01 — drop authority-claiming free labels;
+  // eyebrow is presentation chrome, never authenticated Product authority.
+  const eyebrow = sanitizePresentationEyebrow(rawEyebrow);
   const safeTitle =
     title && !looksLikeAuthorityClaim(title) ? title : null;
   const rawProvenance = nullableText(o.provenanceNote, L.maxStringChars);
-  const provenanceNote =
-    rawProvenance && !looksLikeAuthorityClaim(rawProvenance)
-      ? rawProvenance
-      : null;
+  const provenanceNote = sanitizeProvenanceNote(rawProvenance);
   const noGoverned = NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE;

   return Object.freeze({
@@ -862,9 +861,9 @@
   presentation: NoraAdaptivePresentation,
 ): string {
   const chunks: string[] = [];
-  // Eyebrow not Studio-sanitized at parse — filter authority claims (R-D1-02).
-  const eyebrow = presentation.eyebrow?.trim() ?? "";
-  if (eyebrow && !looksLikeAuthorityClaim(eyebrow)) {
+  // CORR-NAP-D1-EYEBROW-01 — shared eyebrow sanitation (parse / compose / View).
+  const eyebrow = sanitizePresentationEyebrow(presentation.eyebrow);
+  if (eyebrow) {
     chunks.push(eyebrow);
   }
   // presentation.title already null when authority-claiming (parse); belt-and-suspenders.
@@ -1332,5 +1331,19 @@
   return t;
 }

+/**
+ * CORR-NAP-D1-EYEBROW-01 — presentation eyebrow is chrome, never Product authority.
+ * Reuses looksLikeAuthorityClaim only (no parallel keyword policy).
+ */
+export function sanitizePresentationEyebrow(
+  eyebrow: string | null | undefined,
+): string | null {
+  if (eyebrow == null) return null;
+  const t = String(eyebrow).trim();
+  if (!t) return null;
+  if (looksLikeAuthorityClaim(t)) return null;
+  return t;
+}
+
 export const NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE =
   "Les libellés ci-dessus sont une formulation Nora — pas une validation Studio, ni une Evidence Product, ni une HumanDecision." as const;
```

### NoraAdaptivePresentationView.tsx

```diff
--- .tmp-sfia-review/view-pre-eyebrow-01.tsx	2026-10-31 06:13:51
+++ projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx	2026-10-31 06:15:25
@@ -8,6 +8,7 @@
 import {
   honestBlockTitle,
   honestEpistemicLabel,
+  sanitizePresentationEyebrow,
   sanitizeProvenanceNote,
   shouldDisplayPresentationLead,
   studioOwnedRecommendationDisclaimer,
@@ -245,10 +246,12 @@
   presentation: NoraAdaptivePresentation;
 }): ReactElement {
   const showLead = shouldDisplayPresentationLead(presentation);
+  // Defense-in-depth: sanitize even if a typed DTO skipped parse (EYEBROW-01).
+  const safeEyebrow = sanitizePresentationEyebrow(presentation.eyebrow);
   return (
     <>
-      {presentation.eyebrow ? (
-        <p className={styles.eyebrow}>{presentation.eyebrow}</p>
+      {safeEyebrow ? (
+        <p className={styles.eyebrow}>{safeEyebrow}</p>
       ) : null}
       {presentation.title ? (
         <h3 className={styles.title}>{presentation.title}</h3>
```

## 12. Not executed

Full project vitest; OpenAI LIVE; browser UX; TEST-17; server restart — **NOT PROVEN**.

## 13. Fake / Real

DETERMINISTIC AUTHORITY-PRESENTATION CONSISTENCY PROVEN (unit). G-REAL CLOSED.
DETERMINISTIC PROVEN ≠ READY FOR REAL.

## 14. Réserves

1. LIVE structured emission NOT PROVEN.
2. G-QA-BROWSER / G-INTEGRATE / G-R24 open.
3. Eyebrow sanitation is presentation chrome only — narrative prose citing similar words is not rewritten (B preserves divergent narrative).

## 15. Gates

| Gate | Status |
|------|--------|
| G-QA-BROWSER | OPEN |
| G-INTEGRATE | OPEN |
| G-R24 | OPEN |
| G-REAL | CLOSED |

## 16. Verdict

# CORR-NAP-D1-EYEBROW-01 — DETERMINISTIC CORRECTION READY FOR CHATGPT CRITICAL REVIEW

Eyebrow authority hygiene aligned across parse, compose, View, and rehydration; E01–E16 green; 137 tests PASS.

Not claimed: READY FOR PR, PRODUCT MERGED, UX LIVE PASS, G-REAL, L3 COMPLETE, RUNTIME V3 ADOPTED.

## 17. Git Review Index

| Ref | Value |
|-----|-------|
| HEAD | `ca1c9869…` |
| Prior EYEBROW baseline handoff | `897c6431` / `a5c8c10f` |
| Corr diffs | `.tmp-sfia-review/CORR-NAP-D1-EYEBROW-01.*.diff` |

**END OF REVIEW PACK FULL — CORR-NAP-D1-EYEBROW-01**
