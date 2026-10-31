# Review Pack FULL — CORR-NAP-D1-FIDELITY-01

**Generated (UTC):** 2026-10-31T04:47:54Z
**Cycle:** CORR-NAP-D1-FIDELITY-01
**Type:** Cycle 8 Delivery — INC / corrective fidelity
**Profile:** CRITICAL
**Source Delivery:** NAP-SINGLE-RESPONSE-D1-01
**Prior pack:** NAP-SINGLE-RESPONSE-D1-REVIEW-REGULARIZATION-01 (`378e5ed9` / `dbbfe708`)
**Scope:** R-D1-01, R-D1-02, R-D1-03 only — no architecture change

---

## 0. Instruction ChatGPT

Read remote handoff. Verify correction-only delta vs D1 snapshot, F01–F19, CR-03 non-regression, A1+B intact.
Do not imply G-QA-BROWSER / G-INTEGRATE / G-REAL.
Missing modified content → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.

## 1. Git Truth

| Item | Value |
|------|-------|
| WT | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01` |
| Branch | `feat/akg-m5-nap-test16-coverage-corr-01` |
| HEAD / origin/main | `ca1c9869f905b394808c953649910d60fbfcb984` |
| Prior handoff | `378e5ed9` / blob `dbbfe708` |
| Pre-corr nap.ts snapshot | `.tmp-sfia-review/pre-corr-d1-fidelity-nap.ts.diff` (D1 vs HEAD) |
| Product files this cycle | `noraAdaptivePresentation.ts` + `noraAdaptivePresentation.d0.test.ts` only |
| Concurrent interference | none |

Git Truth: COHERENT.

## 2. GO Morris

Local corrective delivery for R-D1-01/02/03 + tests. No schema/emission/orchestrate/renderer/Memory B columns/REAL/browser/PR.

## 3. Convergence / R23 / R24

- R22: same OpenAI/pipeline — unchanged.
- R23: comparison, durable compose, A1 substance gate — BEHAVIOR PROVEN (unit).
- R24: semantic impact on durable compose text; PRR sync later (06/07/08). No PRR write.

## 4. Baseline WIP

11 Product files CR-03+D1 uncommitted (unchanged set). Correction layered on D1 `noraAdaptivePresentation.ts`.

## 5. R-D1-01 — conservative A1 compare

**Cause:** `canonicalTextsEquivalent` used `normalizeCompare` which strips non alphanumeric → `<`/`>`/`+`/`-`/`%` collapse.
**Fix:** `normalizeCanonicalCompare` + A1 paths use it; legacy `normalizeCompare` kept for CORR-NAP-02 diagnostics only.

```
713|export function normalizeCanonicalCompare(text: string): string {
714|  return text
715|    .replace(/\r\n/g, "\n")
716|    .replace(/\r/g, "\n")
717|    .normalize("NFC")
718|    .toLowerCase()
719|    .replace(/[^\S\n]+/g, " ")
720|    .replace(/ *\n */g, "\n")
721|    .replace(/ +\n/g, "\n")
722|    .replace(/\n+/g, "\n")
723|    .trim();
724|}
725|
726|/**
727| * CORR-NAP-02 — legacy lead≡body gate (kept for tests / diagnostics).
728| * A1 Path uses body ≡ composeCanonicalFromPresentation instead.
729| */
730|export function contentFullyCoveredByPresentation(
731|  body: string,
732|  presentation: NoraAdaptivePresentation,
733|): boolean {
734|  const nBody = normalizeCompare(body);
```

```
969|export function canonicalTextsEquivalent(a: string, b: string): boolean {
970|  return normalizeCanonicalCompare(a) === normalizeCanonicalCompare(b);
971|}
972|
973|/**
974| * T1/T2 — whether durable pilot-facing core (pre-notices) may use A1.
975| * Conservatively requires exact normalized equality with compose, or empty
976| * core with admissible structure. No fuzzy / overlap / keyword tricks.
```

Also: `shouldDisplayPresentationLead` uses `normalizeCanonicalCompare`.

## 6. R-D1-02 — epistemic qualifications in durable compose

**Cause:** `formatBlockCanonical` omitted category/epistemic labels for list/facts/questions/evidence_reserves.
**Fix:** durable category labels; evidence vs reserves separated.

```
749|function durableCategoryLabel(block: NoraAdaptivePresentationBlock): string {
750|  switch (block.kind) {
751|    case "list":
752|      return honestEpistemicLabel(block.epistemic);
753|    case "established_facts":
754|      return honestBlockTitle("established_facts", null);
755|    case "open_questions":
756|      return honestBlockTitle("open_questions", null);
757|    case "recommendation":
758|      return "Recommandation — non décision";
759|    case "evidence_reserves":
760|      return honestBlockTitle("evidence_reserves", null);
761|    default:
762|      return "";
763|  }
764|}
765|
766|function formatBlockCanonical(block: NoraAdaptivePresentationBlock): string {
767|  switch (block.kind) {
768|    case "plain":
769|    case "question":
770|    case "trace_note":
771|      return block.text;
772|    case "section":
773|      return `${block.title}\n${block.body}`;
```

```
766|function formatBlockCanonical(block: NoraAdaptivePresentationBlock): string {
767|  switch (block.kind) {
768|    case "plain":
769|    case "question":
770|    case "trace_note":
771|      return block.text;
772|    case "section":
773|      return `${block.title}\n${block.body}`;
774|    case "list": {
775|      const qual = durableCategoryLabel(block);
776|      const title = block.title?.trim() ?? "";
777|      const head = title ? `${title}\n${qual}` : qual;
778|      return `${head}\n${block.items.map((i) => `- ${i}`).join("\n")}`;
779|    }
780|    case "established_facts":
781|    case "open_questions": {
782|      const title = block.title?.trim() ?? "";
783|      const head = title || durableCategoryLabel(block);
784|      return `${head}\n${block.items.map((i) => `- ${i}`).join("\n")}`;
785|    }
786|    case "comparison_table": {
787|      const head = block.title?.trim() ? `${block.title}\n` : "";
788|      const header = block.columns.join(" | ");
789|      const sep = block.columns.map(() => "---").join(" | ");
790|      const rows = block.rows.map((r) => r.join(" | ")).join("\n");
791|      return `${head}${header}\n${sep}\n${rows}`;
792|    }
793|    case "recommendation": {
794|      const title = block.title?.trim() ?? "";
795|      const head = title || durableCategoryLabel(block);
796|      const disc =
797|        block.disclaimer?.trim() || NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER;
798|      return `${head}\n${block.statement}\n${disc}`;
799|    }
800|    case "evidence_reserves": {
801|      const parts: string[] = [];
802|      if (block.title?.trim()) parts.push(block.title.trim());
803|      if (block.evidenceItems.length > 0) {
804|        parts.push("Éléments mentionnés comme preuves");
805|        parts.push(
806|          ...block.evidenceItems.map((i) => `- ${i}`),
807|        );
808|      }
809|      if (block.reserveItems.length > 0) {
810|        parts.push("Réserves et incertitudes");
811|        parts.push(...block.reserveItems.map((i) => `- ${i}`));
812|      }
813|      return parts.join("\n");
814|    }
815|    default:
816|      return "";
817|  }
818|}
819|
820|function composeBlocksOnly(presentation: NoraAdaptivePresentation): string {
821|  return presentation.blocks
822|    .map(formatBlockCanonical)
823|    .filter((s) => s.trim().length > 0)
824|    .join("\n\n");
825|}
826|
827|/**
828| * Lead visibility for A1 chrome — never drop unique lead info blindly.
829| * Redundancy uses conservative A1 compare (R-D1-01) — operators preserved.
830| */
831|export function shouldDisplayPresentationLead(
832|  presentation: NoraAdaptivePresentation,
833|): boolean {
834|  const lead = (presentation.lead ?? "").trim();
835|  if (!lead) return false;
836|  const nLead = normalizeCanonicalCompare(lead);
837|  if (!nLead) return false;
838|  const blocksText = composeBlocksOnly(presentation);
839|  if (blocksText && normalizeCanonicalCompare(blocksText) === nLead) {
840|    return false;
```

## 7. R-D1-03 — substantive A1 admissibility

**Cause:** title/eyebrow alone produced non-empty compose → A1 with empty narrative.
**Fix:** `presentationHasConversationalSubstance` requires lead or non-empty blocks; wired into `isPresentationStructurallyAdmissibleForA1`.

```
945|export function presentationHasConversationalSubstance(
946|  presentation: NoraAdaptivePresentation,
947|): boolean {
948|  if ((presentation.lead ?? "").trim()) return true;
949|  return composeBlocksOnly(presentation).trim().length > 0;
950|}
951|
952|/**
953| * Deterministic A1 structural gate only.
954| * NEVER certifies semantic / cognitive completeness (R1).
955| * Requires conversational substance (R-D1-03) — not title-only.
956| */
```

```
957|export function isPresentationStructurallyAdmissibleForA1(
958|  presentation: NoraAdaptivePresentation | null | undefined,
959|): boolean {
960|  if (!shouldRenderAdaptivePresentation(presentation)) return false;
961|  if (!presentationHasConversationalSubstance(presentation)) return false;
962|  if (presentationHitsLimitBoundary(presentation)) return false;
963|  const composed = composeCanonicalFromPresentation(presentation);
964|  if (!composed.trim()) return false;
965|  return true;
966|}
967|
968|/** A1 T1/T2 equality — conservative (R-D1-01). */
969|export function canonicalTextsEquivalent(a: string, b: string): boolean {
970|  return normalizeCanonicalCompare(a) === normalizeCanonicalCompare(b);
971|}
972|
973|/**
974| * T1/T2 — whether durable pilot-facing core (pre-notices) may use A1.
```

## 8. Tests F01–F19

Red before fix: **13 failed / 6 passed** (F04/F05/F13/F17/F18/F19 already green).
After fix: all F01–F19 green within **105** suite tests.

### Added describe (inspectable)

```ts
describe("CORR-NAP-D1-FIDELITY-01 — F01–F19", () => {
  it("F01 — Budget < vs > are not A1-equivalent", () => {
    expect(
      canonicalTextsEquivalent("Budget < 100 €", "Budget > 100 €"),
    ).toBe(false);
  });

  it("F02 — ≤ vs ≥ are not A1-equivalent", () => {
    expect(
      canonicalTextsEquivalent(
        "Disponibilité ≤ 7 jours",
        "Disponibilité ≥ 7 jours",
      ),
    ).toBe(false);
  });

  it("F03 — +5% vs -5% are not A1-equivalent", () => {
    expect(
      canonicalTextsEquivalent("Variation +5 %", "Variation -5 %"),
    ).toBe(false);
  });

  it("F04 — exact same text remains A1-equivalent", () => {
    const t = "Budget < 100 € jusqu'au 2099-01-01.";
    expect(canonicalTextsEquivalent(t, t)).toBe(true);
  });

  it("F05 — CRLF vs LF documented as equivalent under conservative normalize", () => {
    expect(
      canonicalTextsEquivalent("Ligne A\r\nLigne B", "Ligne A\nLigne B"),
    ).toBe(true);
  });

  it("F06 — lead differing only by operator is not redundant", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: "Budget < 100 €",
      blocks: [{ kind: "plain", text: "Budget > 100 €" }],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    expect(shouldDisplayPresentationLead(dto)).toBe(true);
  });

  it("F07 — narrative/structure operator divergence → B keeps narrative", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: null,
      blocks: [{ kind: "plain", text: "Budget > 100 €" }],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    const narrative = "Budget < 100 €";
    const d = resolveAdaptiveAssistantRender({
      content: narrative,
      presentation: dto,
    });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain("Budget < 100");
  });

  it("F08 — evidenceItems and reserveItems stay distinct in durable compose", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: null,
      blocks: [
        {
          kind: "evidence_reserves",
          title: null,
          evidenceItems: ["Les utilisateurs rapportent une amélioration."],
          reserveItems: ["Aucune mesure comparative disponible."],
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    const composed = composeCanonicalFromPresentation(dto);
    expect(composed).toMatch(/preuves/i);
    expect(composed).toMatch(/[Rr]éserve/);
    const evIdx = composed.indexOf("Les utilisateurs rapportent");
    const rvIdx = composed.indexOf("Aucune mesure comparative");
    expect(evIdx).toBeGreaterThan(-1);
    expect(rvIdx).toBeGreaterThan(-1);
    // Category labels appear before each set
    expect(composed.toLowerCase().indexOf("preuve")).toBeLessThan(evIdx);
    expect(composed.toLowerCase().indexOf("réserve")).toBeLessThan(rvIdx);
  });

  it("F09 — list.epistemic=hypothesis qualification conserved", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: null,
      blocks: [
        {
          kind: "list",
          title: null,
          items: ["Le délai pourrait être réduit."],
          epistemic: "hypothesis",
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    expect(composeCanonicalFromPresentation(dto)).toMatch(/[Hh]ypothèse/);
  });

  it("F10 — list.epistemic=observed_evidence is not Evidence Product certification", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: null,
      blocks: [
        {
          kind: "list",
          title: null,
          items: ["Observation terrain."],
          epistemic: "observed_evidence",
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    const composed = composeCanonicalFromPresentation(dto);
    expect(composed).toMatch(/preuve/i);
    expect(composed).not.toMatch(/Evidence Product certifi/i);
    expect(composed).toMatch(/non Evidence Product/i);
  });

  it("F11 — established_facts title=null keeps category", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: null,
      blocks: [
        {
          kind: "established_facts",
          title: null,
          items: ["Canal unique confirmé."],
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    expect(composeCanonicalFromPresentation(dto)).toMatch(/établis/i);
  });

  it("F12 — open_questions title=null keeps category", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: null,
      blocks: [
        {
          kind: "open_questions",
          title: null,
          items: ["Qui valide le délai ?"],
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    const composed = composeCanonicalFromPresentation(dto);
    expect(composed).toMatch(/clarifier|ouvertes|Questions/i);
  });

  it("F13 — recommendation stays proposition ≠ HumanDecision", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: null,
      blocks: [
        {
          kind: "recommendation",
          title: null,
          statement: "Préparer une note de cadrage.",
          disclaimer: null,
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    const composed = composeCanonicalFromPresentation(dto);
    expect(composed).toMatch(/non décision|Proposition/i);
    expect(composed).toContain(NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER);
  });

  it("F14 — durable compose → rehydrate keeps distinctions", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: null,
      blocks: [
        {
          kind: "evidence_reserves",
          title: null,
          evidenceItems: ["Citation Nora."],
          reserveItems: ["Pas de mesure."],
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    const durable = composeCanonicalFromPresentation(dto);
    const d = resolveAdaptiveAssistantRender({
      content: durable,
      presentation: dto,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.usedA1).toBe(true);
    expect(durable).toMatch(/preuves/i);
    expect(durable).toMatch(/[Rr]éserve/);
  });

  it("F15 — title alone + empty narrative rejects A1; fallback non-empty", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: "Synthèse",
      lead: null,
      blocks: [],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    expect(isPresentationStructurallyAdmissibleForA1(dto)).toBe(false);
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: "",
      presentation: dto,
    });
    expect(built.usedA1).toBe(false);
    expect(built.contentCore.trim().length).toBeGreaterThan(0);
    expect(built.contentCore).toBe(NORA_UNUSABLE_TURN_FALLBACK_TEXT);
  });

  it("F16 — title + eyebrow without substance rejects A1", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "NORA / Cadrage",
      title: "Synthèse",
      lead: null,
      blocks: [],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    expect(isPresentationStructurallyAdmissibleForA1(dto)).toBe(false);
  });

  it("F17 — substantive lead without blocks remains A1-admissible", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: "Quel canal souhaitez-vous prioriser en premier ?",
      blocks: [],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    expect(isPresentationStructurallyAdmissibleForA1(dto)).toBe(true);
  });

  it("F18 — substantive blocks remain A1-admissible", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: "Comparaison",
      lead: null,
      blocks: [{ kind: "plain", text: "Option A reste préférable sous réserve." }],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    expect(isPresentationStructurallyAdmissibleForA1(dto)).toBe(true);
  });

  it("F19 — non-empty narrative + title-only projection → B keeps narrative", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: "Titre seul",
      lead: null,
      blocks: [],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    const narrative = "Le contrat n'est pas prêt. STOP.";
    const d = resolveAdaptiveAssistantRender({
      content: narrative,
      presentation: dto,
    });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain("n'est pas prêt");
    expect(d.plainText).toContain("STOP");
  });
});
```

## 9. Validation results

```
RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/projects/sfia-studio/app

 ✓ __tests__/platform/ai/fakeNapQaPresentation.d0.test.ts (9 tests) 3ms
 ✓ __tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts (71 tests) 30ms
 ✓ __tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx (25 tests) 109ms

 Test Files  3 passed (3)
      Tests  105 passed (105)
   Start at  05:46:47
   Duration  741ms (transform 310ms, setup 80ms, collect 691ms, tests 142ms, environment 486ms, prepare 102ms)
```

TypeScript: `tsc --noEmit` exit 0.
ESLint (modified Product+test files): exit 0. Output: (clean)

## 10. Non-régressions

Prior 86 targeted tests remain included; total now 105 (86+19). CR-03 fidelity + A1/B dual-removal tests PASS.

## 11. Files touched this cycle

- `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts`
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts`

NOT modified: orchestrateTurn, prompt, View, ConversationSurface, fakeProvider, schema, SQLite.

## 12. Correction-only unified diff (D1 pre-corr → post-corr)

Reconstructed D1 state via `git show HEAD` + apply `.tmp-sfia-review/pre-corr-d1-fidelity-nap.ts.diff`, then `diff -u` vs current.

```diff
--- /Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/.tmp-sfia-review/corr-delta/nap-pre-corr.ts	2026-10-31 05:47:17
+++ /Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/.tmp-sfia-review/corr-delta/nap-post-corr.ts	2026-10-31 05:47:17
@@ -273,6 +273,11 @@
     .trim();
 }

+/**
+ * Bounded string for Option C parse — NAP-SINGLE-RESPONSE-D1.
+ * Rejects over-limit (no silent slice success). Exact max length is accepted
+ * by parse but flagged via presentationHitsLimitBoundary for A1 gating.
+ */
 function clampText(
   value: unknown,
   max: number,
@@ -280,7 +285,8 @@
   if (typeof value !== "string") return null;
   const cleaned = sanitizePresentationPlainText(value);
   if (!cleaned) return null;
-  return cleaned.length > max ? cleaned.slice(0, max) : cleaned;
+  if (cleaned.length > max) return null;
+  return cleaned;
 }

 function nullableText(
@@ -683,7 +689,11 @@
   return chunks.filter(Boolean).join("\n");
 }

-function normalizeCompare(text: string): string {
+/**
+ * Legacy coverage normalize — strips punctuation (incl. operators).
+ * Kept for CORR-NAP-02 diagnostics only. Do NOT use for A1 T1/T2.
+ */
+export function normalizeCompare(text: string): string {
   return text
     .toLowerCase()
     .normalize("NFD")
@@ -694,10 +704,28 @@
 }

 /**
- * CORR-NAP-02 — deterministic complete coverage only.
- * No one-way inclusion, no token overlap threshold, no semantic guess.
- * Body (after stripping authenticated Studio notices) must equal the lead
- * exactly (normalized), or be empty. Uncertainty → not covered → plain.
+ * CORR-NAP-D1-FIDELITY-01 / R-D1-01 — conservative A1 compare.
+ * Preserves relational operators, signs, %, numbers, units, negation,
+ * and meaningful punctuation. Only safe presentation transforms:
+ * CRLF→LF, NFC, case-fold, collapse horizontal whitespace, trim.
+ * Never fuzzy / overlap / keyword.
+ */
+export function normalizeCanonicalCompare(text: string): string {
+  return text
+    .replace(/\r\n/g, "\n")
+    .replace(/\r/g, "\n")
+    .normalize("NFC")
+    .toLowerCase()
+    .replace(/[^\S\n]+/g, " ")
+    .replace(/ *\n */g, "\n")
+    .replace(/ +\n/g, "\n")
+    .replace(/\n+/g, "\n")
+    .trim();
+}
+
+/**
+ * CORR-NAP-02 — legacy lead≡body gate (kept for tests / diagnostics).
+ * A1 Path uses body ≡ composeCanonicalFromPresentation instead.
  */
 export function contentFullyCoveredByPresentation(
   body: string,
@@ -708,10 +736,386 @@
   const nLead = normalizeCompare(presentation.lead ?? "");
   if (!nLead) return false;
   return nBody === nLead;
+}
+
+/** Honest non-empty fallback when narrative and presentation are both unusable. */
+export const NORA_UNUSABLE_TURN_FALLBACK_TEXT =
+  "Nora n'a pas pu produire une restitution exploitable pour ce tour. Aucune action gouvernée n'a été exécutée." as const;
+
+/**
+ * CORR-NAP-D1-FIDELITY-01 / R-D1-02 — durable category labels.
+ * Natural, non-authority-claiming. Never invent Evidence Product / HD.
+ */
+function durableCategoryLabel(block: NoraAdaptivePresentationBlock): string {
+  switch (block.kind) {
+    case "list":
+      return honestEpistemicLabel(block.epistemic);
+    case "established_facts":
+      return honestBlockTitle("established_facts", null);
+    case "open_questions":
+      return honestBlockTitle("open_questions", null);
+    case "recommendation":
+      return "Recommandation — non décision";
+    case "evidence_reserves":
+      return honestBlockTitle("evidence_reserves", null);
+    default:
+      return "";
+  }
+}
+
+function formatBlockCanonical(block: NoraAdaptivePresentationBlock): string {
+  switch (block.kind) {
+    case "plain":
+    case "question":
+    case "trace_note":
+      return block.text;
+    case "section":
+      return `${block.title}\n${block.body}`;
+    case "list": {
+      const qual = durableCategoryLabel(block);
+      const title = block.title?.trim() ?? "";
+      const head = title ? `${title}\n${qual}` : qual;
+      return `${head}\n${block.items.map((i) => `- ${i}`).join("\n")}`;
+    }
+    case "established_facts":
+    case "open_questions": {
+      const title = block.title?.trim() ?? "";
+      const head = title || durableCategoryLabel(block);
+      return `${head}\n${block.items.map((i) => `- ${i}`).join("\n")}`;
+    }
+    case "comparison_table": {
+      const head = block.title?.trim() ? `${block.title}\n` : "";
+      const header = block.columns.join(" | ");
+      const sep = block.columns.map(() => "---").join(" | ");
+      const rows = block.rows.map((r) => r.join(" | ")).join("\n");
+      return `${head}${header}\n${sep}\n${rows}`;
+    }
+    case "recommendation": {
+      const title = block.title?.trim() ?? "";
+      const head = title || durableCategoryLabel(block);
+      const disc =
+        block.disclaimer?.trim() || NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER;
+      return `${head}\n${block.statement}\n${disc}`;
+    }
+    case "evidence_reserves": {
+      const parts: string[] = [];
+      if (block.title?.trim()) parts.push(block.title.trim());
+      if (block.evidenceItems.length > 0) {
+        parts.push("Éléments mentionnés comme preuves");
+        parts.push(
+          ...block.evidenceItems.map((i) => `- ${i}`),
+        );
+      }
+      if (block.reserveItems.length > 0) {
+        parts.push("Réserves et incertitudes");
+        parts.push(...block.reserveItems.map((i) => `- ${i}`));
+      }
+      return parts.join("\n");
+    }
+    default:
+      return "";
+  }
+}
+
+function composeBlocksOnly(presentation: NoraAdaptivePresentation): string {
+  return presentation.blocks
+    .map(formatBlockCanonical)
+    .filter((s) => s.trim().length > 0)
+    .join("\n\n");
+}
+
+/**
+ * Lead visibility for A1 chrome — never drop unique lead info blindly.
+ * Redundancy uses conservative A1 compare (R-D1-01) — operators preserved.
+ */
+export function shouldDisplayPresentationLead(
+  presentation: NoraAdaptivePresentation,
+): boolean {
+  const lead = (presentation.lead ?? "").trim();
+  if (!lead) return false;
+  const nLead = normalizeCanonicalCompare(lead);
+  if (!nLead) return false;
+  const blocksText = composeBlocksOnly(presentation);
+  if (blocksText && normalizeCanonicalCompare(blocksText) === nLead) {
+    return false;
+  }
+  for (const block of presentation.blocks) {
+    for (const t of blockPlainTexts(block)) {
+      if (t && normalizeCanonicalCompare(t) === nLead) return false;
+    }
+  }
+  return true;
+}
+
+/**
+ * Deterministic conversational transcript from a validated presentation.
+ * Not Truth C. Not a cognitive summary. Preserves order, tables, reserves,
+ * recommendation-as-proposal. Omits redundant lead (see shouldDisplayPresentationLead).
+ */
+export function composeCanonicalFromPresentation(
+  presentation: NoraAdaptivePresentation,
+): string {
+  const chunks: string[] = [];
+  if (presentation.eyebrow?.trim()) chunks.push(presentation.eyebrow.trim());
+  if (presentation.title?.trim()) chunks.push(presentation.title.trim());
+  if (shouldDisplayPresentationLead(presentation) && presentation.lead) {
+    chunks.push(presentation.lead.trim());
+  }
+  const blocks = composeBlocksOnly(presentation);
+  if (blocks) chunks.push(blocks);
+  if (presentation.provenanceNote?.trim()) {
+    chunks.push(presentation.provenanceNote.trim());
+  }
+  return chunks.join("\n\n").trim();
+}
+
+/**
+ * True when a string field sits exactly at its max — ambiguous truncation.
+ * NOT a proof of truncation; fail-closed for A1 admissibility only.
+ */
+export function presentationHitsLimitBoundary(
+  presentation: NoraAdaptivePresentation,
+): boolean {
+  const L = NORA_ADAPTIVE_PRESENTATION_LIMITS;
+  if (presentation.blocks.length >= L.maxBlocks) return true;
+  const check = (s: string | null | undefined, max: number) =>
+    typeof s === "string" && s.length >= max;
+  if (check(presentation.eyebrow, L.maxTitleChars)) return true;
+  if (check(presentation.title, L.maxTitleChars)) return true;
+  if (check(presentation.lead, L.maxLeadChars)) return true;
+  if (check(presentation.provenanceNote, L.maxStringChars)) return true;
+  for (const block of presentation.blocks) {
+    switch (block.kind) {
+      case "plain":
+      case "question":
+      case "trace_note":
+        if (check(block.text, L.maxStringChars)) return true;
+        break;
+      case "section":
+        if (check(block.title, L.maxTitleChars)) return true;
+        if (check(block.body, L.maxStringChars)) return true;
+        break;
+      case "list":
+      case "established_facts":
+      case "open_questions":
+        if (check(block.title, L.maxTitleChars)) return true;
+        if (block.items.length >= L.maxItems) return true;
+        if (block.items.some((i) => i.length >= L.maxStringChars)) return true;
+        break;
+      case "comparison_table":
+        if (check(block.title, L.maxTitleChars)) return true;
+        if (block.columns.length >= L.maxColumns) return true;
+        if (block.rows.length >= L.maxRows) return true;
+        if (block.columns.some((c) => c.length >= L.maxTitleChars)) return true;
+        if (
+          block.rows.some((r) =>
+            r.some((c) => c.length >= L.maxStringChars),
+          )
+        ) {
+          return true;
+        }
+        break;
+      case "recommendation":
+        if (check(block.title, L.maxTitleChars)) return true;
+        if (check(block.statement, L.maxStringChars)) return true;
+        break;
+      case "evidence_reserves":
+        if (check(block.title, L.maxTitleChars)) return true;
+        if (block.evidenceItems.length >= L.maxItems) return true;
+        if (block.reserveItems.length >= L.maxItems) return true;
+        if (
+          [...block.evidenceItems, ...block.reserveItems].some(
+            (i) => i.length >= L.maxStringChars,
+          )
+        ) {
+          return true;
+        }
+        break;
+      default:
+        break;
+    }
+  }
+  return false;
+}
+
+/**
+ * CORR-NAP-D1-FIDELITY-01 / R-D1-03 — conversational substance for A1.
+ * Title / eyebrow / provenance alone are decorative metadata, not an answer.
+ */
+export function presentationHasConversationalSubstance(
+  presentation: NoraAdaptivePresentation,
+): boolean {
+  if ((presentation.lead ?? "").trim()) return true;
+  return composeBlocksOnly(presentation).trim().length > 0;
+}
+
+/**
+ * Deterministic A1 structural gate only.
+ * NEVER certifies semantic / cognitive completeness (R1).
+ * Requires conversational substance (R-D1-03) — not title-only.
+ */
+export function isPresentationStructurallyAdmissibleForA1(
+  presentation: NoraAdaptivePresentation | null | undefined,
+): boolean {
+  if (!shouldRenderAdaptivePresentation(presentation)) return false;
+  if (!presentationHasConversationalSubstance(presentation)) return false;
+  if (presentationHitsLimitBoundary(presentation)) return false;
+  const composed = composeCanonicalFromPresentation(presentation);
+  if (!composed.trim()) return false;
+  return true;
 }

+/** A1 T1/T2 equality — conservative (R-D1-01). */
+export function canonicalTextsEquivalent(a: string, b: string): boolean {
+  return normalizeCanonicalCompare(a) === normalizeCanonicalCompare(b);
+}
+
+/**
+ * T1/T2 — whether durable pilot-facing core (pre-notices) may use A1.
+ * Conservatively requires exact normalized equality with compose, or empty
+ * core with admissible structure. No fuzzy / overlap / keyword tricks.
+ */
+export function isA1TransitionAdmissible(input: {
+  pilotFacingCore: string;
+  presentation: NoraAdaptivePresentation | null | undefined;
+}): boolean {
+  if (!isPresentationStructurallyAdmissibleForA1(input.presentation)) {
+    return false;
+  }
+  const presentation = input.presentation!;
+  const composed = composeCanonicalFromPresentation(presentation);
+  const core = (input.pilotFacingCore ?? "").trim();
+  if (!core) return true; // empty narrative → derive from structure (A1-primary)
+  return canonicalTextsEquivalent(core, composed);
+}
+
+/**
+ * Build durable conversational content for a new turn (Memory B `content`).
+ * A1: composed (+ caller appends notices). B: pilotFacingCore as-is.
+ * Does not invent text. Empty+invalid → honest fallback.
+ */
+export function buildDurableAssistantContentForTurn(input: {
+  pilotFacingCore: string;
+  presentation: NoraAdaptivePresentation | null | undefined;
+}): {
+  readonly contentCore: string;
+  readonly usedA1: boolean;
+  readonly presentation: NoraAdaptivePresentation | null;
+} {
+  const core = (input.pilotFacingCore ?? "").trim();
+  const presentation = input.presentation ?? null;
+  if (isA1TransitionAdmissible({ pilotFacingCore: core, presentation })) {
+    const composed = composeCanonicalFromPresentation(presentation!);
+    return {
+      contentCore: composed,
+      usedA1: true,
+      presentation,
+    };
+  }
+  if (!core && !shouldRenderAdaptivePresentation(presentation)) {
+    return {
+      contentCore: NORA_UNUSABLE_TURN_FALLBACK_TEXT,
+      usedA1: false,
+      presentation: null,
+    };
+  }
+  return {
+    contentCore: core || NORA_UNUSABLE_TURN_FALLBACK_TEXT,
+    usedA1: false,
+    presentation,
+  };
+}
+
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
+  | "plain";
+
+/**
+ * @deprecated Dual layer removed in NAP-SINGLE-RESPONSE-D1 (A1+B).
+ * Kept as type alias so older call sites compile during transition; never emitted.
+ */
+export type AdaptiveAssistantRenderModeLegacy =
+  | AdaptiveAssistantRenderMode
+  | "adaptive_with_canonical";
+
 export type AdaptiveAssistantRenderDecision = {
-  readonly mode: "adaptive" | "plain";
+  readonly mode: AdaptiveAssistantRenderMode;
   readonly presentation: NoraAdaptivePresentation | null;
   /**
    * Authenticated Studio control appendix only (typed notices).
@@ -721,12 +1125,30 @@
   readonly plainText: string;
   /** Server-authored notices used for appendix / strip (empty if none). */
   readonly studioControlNotices: readonly string[];
+  /**
+   * A1: true when durable body (notices stripped) ≡ composeCanonical.
+   * Never a fuzzy claim. Never semantic-completeness certification.
+   */
+  readonly contentFullyCovered: boolean;
+  /**
+   * Always null under single-response contract (B uses plainText; no dual layer).
+   * Retained for API stability with prior CR-03 callers.
+   */
+  readonly canonicalNarrative: string | null;
+  /** Structural A1 gate only — NOT semantic completeness (R1). */
+  readonly structurallyAdmissibleForA1: boolean;
+  /** True when render mode is adaptive (structured-first single surface). */
+  readonly usedA1: boolean;
 };

 /**
- * CORR-NAP-02 — server control > cognitive presentation.
- * Adaptive only when non-Studio body is strictly covered by presentation.lead;
- * otherwise full plain text (no loss). Studio appendix uses typed notices only.
+ * NAP-SINGLE-RESPONSE-D1 — A1 structured-first OR B canonical plain.
+ *
+ * - Invalid / absent presentation → plain (B).
+ * - Structurally admissible + body ≡ composeCanonical → adaptive (A1), one surface.
+ * - Otherwise → plain (B) with full durable body; presentation not shown
+ *   (never dual canonical + projection; never hide unique narrative via CSS).
+ * - Studio appendix: typed notices only.
  */
 export function resolveAdaptiveAssistantRender(input: {
   content: string;
@@ -749,31 +1171,55 @@
           .join("\n\n")
       : null;

-  if (!shouldRenderAdaptivePresentation(input.presentation)) {
+  const presentation = input.presentation ?? null;
+  const structurallyAdmissibleForA1 =
+    isPresentationStructurallyAdmissibleForA1(presentation);
+
+  if (!shouldRenderAdaptivePresentation(presentation)) {
     return {
       mode: "plain",
       presentation: null,
-      studioAppendix: null,
-      plainText: content,
+      studioAppendix: authenticated.length > 0 ? studioAppendix : null,
+      plainText: content.trim() ? content : NORA_UNUSABLE_TURN_FALLBACK_TEXT,
       studioControlNotices: authenticated,
+      contentFullyCovered: false,
+      canonicalNarrative: null,
+      structurallyAdmissibleForA1: false,
+      usedA1: false,
     };
   }
-  const presentation = input.presentation;
-  if (!contentFullyCoveredByPresentation(body, presentation)) {
+
+  const composed = composeCanonicalFromPresentation(presentation!);
+  const a1Match =
+    structurallyAdmissibleForA1 &&
+    (canonicalTextsEquivalent(body, composed) ||
+      (!body.trim() && Boolean(composed.trim())));
+
+  if (a1Match) {
     return {
-      mode: "plain",
-      presentation: null,
-      studioAppendix: null,
+      mode: "adaptive",
+      presentation,
+      studioAppendix,
       plainText: content,
       studioControlNotices: authenticated,
+      contentFullyCovered: true,
+      canonicalNarrative: null,
+      structurallyAdmissibleForA1: true,
+      usedA1: true,
     };
   }
+
+  // T2 / incomplete / non-equivalent — B only (single canonical surface).
   return {
-    mode: "adaptive",
-    presentation,
-    studioAppendix,
-    plainText: content,
+    mode: "plain",
+    presentation: null,
+    studioAppendix: authenticated.length > 0 ? studioAppendix : null,
+    plainText: content.trim() ? content : NORA_UNUSABLE_TURN_FALLBACK_TEXT,
     studioControlNotices: authenticated,
+    contentFullyCovered: false,
+    canonicalNarrative: null,
+    structurallyAdmissibleForA1,
+    usedA1: false,
   };
 }

@@ -786,19 +1232,19 @@
 ): string {
   switch (role) {
     case "established_fact":
-      return "Élément présenté comme établi (Nora)";
+      return "Présenté comme établi";
     case "hypothesis":
-      return "Hypothèse (Nora)";
+      return "Hypothèse";
     case "recommendation":
-      return "Recommandation (non décision)";
+      return "Recommandation — non décision";
     case "product_decision_ref":
       return "Référence de décision mentionnée (non vérifiée)";
     case "observed_evidence":
-      return "Élément cité comme preuve (Nora — non Evidence Product)";
+      return "Cité comme preuve observée (non Evidence Product)";
     case "reserve_uncertainty":
-      return "Réserve / incertitude (Nora)";
+      return "Réserve / incertitude";
     default:
-      return "Élément (Nora)";
+      return "Élément";
   }
 }

@@ -835,12 +1281,12 @@
     plain: "Élément",
     question: "Question",
     section: "Section",
-    list: "Liste (Nora)",
-    comparison_table: "Comparaison (Nora)",
-    established_facts: "Éléments présentés comme établis (Nora)",
+    list: "Liste",
+    comparison_table: "Comparaison",
+    established_facts: "Éléments présentés comme établis",
     open_questions: "Points encore à clarifier",
-    recommendation: "Recommandation de Nora",
-    evidence_reserves: "Preuves et réserves mentionnées (Nora)",
+    recommendation: "Recommandation",
+    evidence_reserves: "Preuves et réserves mentionnées",
     trace_note: "Note",
   };
   if (STRONG_TITLE_KINDS.has(kind)) {
```

## 13. Tests non exécutés

Full vitest project; OpenAI LIVE; browser UX-00–08; TEST-17. **NOT PROVEN**.

## 14. Fake / Real

DETERMINISTIC FIDELITY CORRECTION PROVEN (unit). Not REAL / not UX browser / G-REAL closed.

## 15. Réserves

1. LIVE structured emission still NOT PROVEN.
2. Attribution CR-03 vs D1 remains uncommitted WIP interleaved (same as prior).
3. `shouldRenderAdaptivePresentation` still allows title-only for legacy render eligibility; A1 gate rejects it.

## 16. Gates

| Gate | Status |
|------|--------|
| G-QA-BROWSER | OPEN |
| G-INTEGRATE | OPEN |
| G-R24 | OPEN |
| G-REAL | CLOSED |

## 17. Verdict

# CORR-NAP-D1-FIDELITY-01 — DETERMINISTIC CORRECTION READY FOR CHATGPT REVIEW

R-D1-01/02/03 fixed; F01–F19 green; 105 targeted tests PASS; tsc/eslint clean; Product scope limited to nap.ts + d0 tests.

Not claimed: READY FOR PR, PRODUCT MERGED, UX LIVE PASS, G-REAL, L3 COMPLETE.

## 18. Git Review Index

| Ref | Value |
|-----|-------|
| HEAD | `ca1c9869…` |
| Prior regularization handoff | `378e5ed9` / `dbbfe708` |
| Corr delta artifact | `.tmp-sfia-review/corr-delta/CORR-NAP-D1-FIDELITY-01.nap.ts.diff` |

**END OF REVIEW PACK FULL — CORR-NAP-D1-FIDELITY-01**
