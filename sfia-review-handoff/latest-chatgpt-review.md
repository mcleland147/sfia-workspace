# P5-S04 — PRODUCT-DERIVED SYNTHÈSES — LOCAL CANDIDATE — FULL REVIEW PACK

## 0. REPUBLICATION NOTICE — PRIOR HANDOFF INCOMPLETE (SUPERSEDED)

**CRITICAL:** Remote handoff `0cd48f51` / blob `02f78487` was **INCOMPLETE**.
It named structuring files but did **not** fully embed them, and lacked complete exploitable unified diffs for modified product/docs/test files.

**This republication SUPERSEDES `0cd48f51` / blob `02f78487`.**
Reviewers must use **this** pack only. Prefer embedded verbatim file bodies + unified diffs below — do not rely on filenames alone.

Previously missing bodies now fully embedded (see §COMPLETE CREATED-FILE CONTENTS):
- `lib/oa/synthesis/application/buildProductSynthesis.ts`
- `lib/oa/synthesis/application/materializeProductSynthesis.ts`
- `lib/oa/synthesis/application/rebuildProductSynthesis.ts`
- `lib/oa/synthesis/application/searchProductSyntheses.ts`
- `lib/oa/synthesis/domain/types.ts`
- `lib/oa/synthesis/domain/invariants.ts`
- `lib/oa/synthesis/infrastructure/sqlite/sqliteSynthesisRepository.ts`
- `lib/oa/synthesis/ports/synthesisRepositoryPort.ts`
- `features/project-assistant/buildProductSynthesisLineageInput.ts`
(plus all other new S04 source/test/UI files listed in that section)

Previously missing modified-file diffs now fully embedded (see §COMPLETE CHANGED SECTIONS / UNIFIED DIFFS).


## 1. Timestamp
2026-10-05 19:41:35 +0200 Europe/Paris

## 2. Morris delivery authorization
**MORRIS P5-S04 DELIVERY AUTHORIZATION = CONSUMED**

Allowed: local implementation · Product DB seed · validations · visual evidence · FULL pack · L3 handoff · docs truth-sync (minimal).
Forbidden: project commit/push/PR/merge · OpenAI REAL · R3 · P6 · architecture reinterpretation.

## 3. Branch
`delivery/sfia-studio-product-simplification-p5-s04-product-derived-syntheses`

## 4. HEAD (local)
`49b4fdaf078fdf2a5c7bfce3baad05fa65220c2e` (= origin/main at delivery start — S04 work **uncommitted**)

## 5. origin/main
`49b4fdaf078fdf2a5c7bfce3baad05fa65220c2e` — PR **#557** MERGED (P5-S03)

## 6. Pre-handoff L3 anchor (before this pass)
Prior incomplete publish: `sfia/review-handoff` @ `0cd48f51ed50f5bf392c411245e54f8de721e7e2` · blob `02f78487fcc75bd0cd5215b5271ec0870e88dd49` — **SUPERSEDED by this republication**.
Pre-S04 anchor: `7c8fd2e45cab48c5428a3b865c4f638c860be0b2` · blob `97c75bd19b7c64367d137171f6025b36b9480d60`

## 7. Canonical sources (reread — no reinterpretation)
- P4 architecture authority preserved
- `05-chat-first-product-simplification-integrated-delivery.md` updated (S04 section)
- `sfia-studio-convergence-roadmap.md` updated (S03 INTEGRATED · S04 tip)

## 8. Architecture BEFORE (post-S03)
- Conversation / Aperçu / Exécution object-native
- Synthèses = honest unavailable / not built
- No M9 reads in Product UI

## 9. Architecture AFTER (S04 local candidate)
OBJECTS FIRST → PROJECTIONS SECOND → SURFACES THIRD.

- **Persistence:** Product SQLite M9 `oa_syntheses` (migration via `SqliteProductStore`)
- **Domain:** `buildProductSynthesis` / `materializeProductSynthesis` — ClaimEvaluation-required lineage
- **Server actions:** `synthesisActions.ts` (list/get/search/latest/materialize-from-lineage)
- **UI:** `SynthesesSurface` read-only · Overview preview · Conversation teaser · shortcut nav
- **Authority:** `authority: none` · NON-AUTORITATIVE badge · no mutation controls

## 10. Schema / M9 proof
- Migration in `lib/oa/project/infrastructure/sqlite/db.ts`
- Campaign DB path: `SFIA_STUDIO_PRODUCT_DB_PATH` → `…/new-project-campaign-01/product/oa-product.sqlite`
- Seeded CE: `clm:p5-s04:campaign:0ed5c4e1` · synthesis: `syn:65645eee8ad4206537f90d0c2b4b6c53`

## 11. Anti-claims (explicit)
- **≠** Truth C / authoritative synthesis
- **≠** invented verdict or recommendation when absent
- **≠** UI-only fake synthesis rows
- **≠** P5 COMPLETE / **≠** R3 / **≠** runtime v3 adopted
- **≠** project Git integration this pass

## 12. Product DB seed path
Script: `.tmp-sfia-review/p5-s04-visual/_seed-synthesis.mjs`
Uses `createSqliteSynthesisServices.materialize` with real ClaimEvaluation row inserted when missing.

## 13. Visual capture path
Script: `.tmp-sfia-review/p5-s04-visual/_capture.mjs` → `.tmp-sfia-review/p5-s04-visual/after/`

## 14. Visual manifest
```json
{
  "capturedAt": "2026-10-05T17:33:36.118Z",
  "items": [
    {
      "viewport": "1440x1024",
      "view": "syntheses",
      "state": "list",
      "figma": "164:3",
      "figmaRef": "/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3/.tmp-sfia-review/p5-s04-visual/figma/desktop-164-3.png",
      "file": "syntheses-desktop-1440x1024.png"
    },
    {
      "viewport": "1024x768",
      "view": "syntheses",
      "state": "list",
      "figma": "190:175",
      "figmaRef": "/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3/.tmp-sfia-review/p5-s04-visual/figma/compact-190-175.png",
      "file": "syntheses-compact-1024x768.png"
    },
    {
      "viewport": "390x844",
      "view": "syntheses",
      "state": "mobile-list",
      "figma": "190:433",
      "figmaRef": "/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3/.tmp-sfia-review/p5-s04-visual/figma/mobile-list-190-433.png",
      "file": "syntheses-mobile-list-390x844.png"
    },
    {
      "viewport": "390x844",
      "view": "syntheses",
      "state": "mobile-detail",
      "figma": "190:455",
      "figmaRef": "/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3/.tmp-sfia-review/p5-s04-visual/figma/mobile-detail-190-455.png",
      "file": "syntheses-mobile-detail-390x844.png"
    },
    {
      "viewport": "1440x1024",
      "view": "overview",
      "state": "synthesis-preview",
      "figma": "51:2",
      "purpose": "Aperçu synthesis teaser block",
      "file": "apercu-desktop-1440x1024.png"
    },
    {
      "viewport": "1440x1024",
      "view": "conversation",
      "state": "synthesis-teaser",
      "file": "conversation-desktop-1440x1024.png"
    }
  ]
}
```

## 15. Visual classification
See `.tmp-sfia-review/p5-s04-visual/correction-design-note.md` — **A=0 · B=0** · C=4 · D=3

## 16. Figma references
164:3 · 190:175 · 190:433 · 190:455 · Overview 51:2 block · Conversation 46:2 teaser

## 17. Staged/tracked diff stat (committed + modified; S04 core mostly untracked)
```
.tmp-sfia-review/chatgpt-review.md                 | 951 ++++++++++++++++++---
 .../oa/decision/m3ProductSchemaMigration.test.ts   |   2 +-
 .../oa/project/m5ProductSchemaMigration.test.ts    |   4 +-
 .../oa/project/m6ProductSchemaMigration.test.ts    |   6 +-
 .../automaticProjectResume.ui.test.tsx             |  12 +
 .../p5.s01.workspaceLayout.ui.test.tsx             |  12 +
 .../p5.s03.objectNativeViews.ui.test.tsx           |  12 +
 .../productJourneyProjectionCoherence.ui.test.tsx  |  12 +
 .../importBoundaries.test.ts                       |   2 +
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |  64 +-
 .../surfaces/ConversationSurface.tsx               |  42 +
 .../pre-m6-product-ui/surfaces/OverviewSurface.tsx |  92 +-
 .../surfaces/ProjectContextSummary.tsx             |  40 +-
 projects/sfia-studio/app/lib/oa/project/index.ts   |   3 +
 .../app/lib/oa/project/infrastructure/sqlite/db.ts |  39 +-
 .../convergence/sfia-studio-convergence-roadmap.md |   4 +-
 ...t-product-simplification-integrated-delivery.md |  46 +-
 .../production-runtime-reference.manifest.json     |   2 +-
 18 files changed, 1157 insertions(+), 188 deletions(-)
```

## 18. git status --short (excerpt)
```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
 M projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
 M projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.tsx
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
 M projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? .tmp-sfia-review/auth
?? .tmp-sfia-review/p5-s01-cp01-diff-stat.txt
?? .tmp-sfia-review/p5-s01-cp01-routing-capability.diff
?? .tmp-sfia-review/p5-s01-diff-stat.txt
?? .tmp-sfia-review/p5-s01-frontend-diff.txt
?? .tmp-sfia-review/p5-s01-name-status.txt
?? .tmp-sfia-review/p5-s01-roadmap-diff.txt
?? .tmp-sfia-review/p5-s01-routing-diff.txt
?? .tmp-sfia-review/p5-s01-vc01-layout-test.diff
?? .tmp-sfia-review/p5-s01-vc01-next-config.diff
?? .tmp-sfia-review/p5-s02-bounded-real.mjs
?? .tmp-sfia-review/p5-s02-evidence.json
?? .tmp-sfia-review/p5-s02-r1-prior.json
?? .tmp-sfia-review/p5-s03-handoff/
?? .tmp-sfia-review/p5-s03-visual/
?? .tmp-sfia-review/p5-s04-visual/
?? .tmp-sfia-review/pilot-execution-experience-visual/
?? .tmp-sfia-review/visual/
?? projects/sfia-studio/app/__tests__/oa/synthesis/
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/synthesisPresentation.ts
?? projects/sfia-studio/app/features/project-assistant/buildProductSynthesisLineageInput.ts
?? projects/sfia-studio/app/features/project-assistant/synthesisActions.ts
?? projects/sfia-studio/app/lib/oa/synthesis/
```

## 19. New/untracked S04 paths (representative)
```
.tmp-sfia-review/p5-s04-visual/_capture.mjs
.tmp-sfia-review/p5-s04-visual/_seed-synthesis.mjs
.tmp-sfia-review/p5-s04-visual/after/apercu-desktop-1440x1024.png
.tmp-sfia-review/p5-s04-visual/after/conversation-desktop-1440x1024.png
.tmp-sfia-review/p5-s04-visual/after/manifest.json
.tmp-sfia-review/p5-s04-visual/after/syntheses-compact-1024x768.png
.tmp-sfia-review/p5-s04-visual/after/syntheses-desktop-1440x1024.png
.tmp-sfia-review/p5-s04-visual/after/syntheses-mobile-detail-390x844.png
.tmp-sfia-review/p5-s04-visual/after/syntheses-mobile-list-390x844.png
.tmp-sfia-review/p5-s04-visual/correction-design-note.md
.tmp-sfia-review/p5-s04-visual/figma/compact-190-175.png
.tmp-sfia-review/p5-s04-visual/figma/desktop-164-3.png
.tmp-sfia-review/p5-s04-visual/figma/mobile-detail-190-455.png
.tmp-sfia-review/p5-s04-visual/figma/mobile-list-190-433.png
projects/sfia-studio/app/__tests__/oa/synthesis/p5.s04.productDerivedSynthesis.d0.test.ts
projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.module.css
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.tsx
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/synthesisPresentation.ts
projects/sfia-studio/app/features/project-assistant/buildProductSynthesisLineageInput.ts
projects/sfia-studio/app/features/project-assistant/synthesisActions.ts
projects/sfia-studio/app/lib/oa/synthesis/application/buildProductSynthesis.ts
projects/sfia-studio/app/lib/oa/synthesis/application/materializeProductSynthesis.ts
projects/sfia-studio/app/lib/oa/synthesis/application/rebuildProductSynthesis.ts
projects/sfia-studio/app/lib/oa/synthesis/application/searchProductSyntheses.ts
projects/sfia-studio/app/lib/oa/synthesis/domain/errors.ts
projects/sfia-studio/app/lib/oa/synthesis/domain/invariants.ts
projects/sfia-studio/app/lib/oa/synthesis/domain/types.ts
projects/sfia-studio/app/lib/oa/synthesis/index.ts
projects/sfia-studio/app/lib/oa/synthesis/infrastructure/sqlite/createSqliteSynthesisServices.ts
projects/sfia-studio/app/lib/oa/synthesis/infrastructure/sqlite/sqliteSynthesisRepository.ts
projects/sfia-studio/app/lib/oa/synthesis/ports/synthesisRepositoryPort.ts
```

## 20. Validation — tsc
**PASS** (`npx tsc --noEmit`)

## 21. Validation — lint
**PASS** (`npm run lint`)

## 22. Validation — build
**PASS** (`npm run build`)

## 23. Validation — full npm test
**PASS** — Test Files **471 passed** | 18 skipped · Tests **5223 passed** | 138 skipped

## 24. Validation — S04 targeted
- `p5.s04.productDerivedSynthesis.d0.test.ts` — **13 PASS**
- `p5.s04.synthesesSurface.ui.test.tsx` — **3 PASS**
- M3/M5/M6 migration tests — **PASS**

## 25. Validation — hygiene fixes (local, uncommitted)
- synthesisActions mocks in pre-m6 UI tests (server-only import boundary)
- `importBoundaries.test.ts` allowlist + PRR digest for `db.ts`

## 26. REAL calls
**0** — `P5_S02_RUN_REAL` never set · dev uses `OPS1_CONVERSATION_PROVIDER=fake`

## 27. Project commit/push/PR
**NONE** (per gate)

## 28. Docs truth-sync
Roadmap + integrated delivery updated (minimal)

## 29. Handoff target
`scripts/sfia/publish-review-handoff.sh` → `sfia/review-handoff` / `sfia-review-handoff/latest-chatgpt-review.md`

## 30. Expected commit message (handoff only)
`docs(review-handoff): publish P5 S04 delivery review (complete contents)`

## 31–36. Cursor Report anchor + verdict
See sections **51–64** below (numbered Cursor Report).

## 37. Created / key file contents (INDEX — full bodies in next section)

Full verbatim bodies are embedded in **§COMPLETE CREATED-FILE CONTENTS** below (this republication fix).
Index of created S04 source/test/UI files:

- `projects/sfia-studio/app/lib/oa/synthesis/application/buildProductSynthesis.ts` (340 lines)
- `projects/sfia-studio/app/lib/oa/synthesis/application/materializeProductSynthesis.ts` (54 lines)
- `projects/sfia-studio/app/lib/oa/synthesis/application/rebuildProductSynthesis.ts` (28 lines)
- `projects/sfia-studio/app/lib/oa/synthesis/application/searchProductSyntheses.ts` (10 lines)
- `projects/sfia-studio/app/lib/oa/synthesis/domain/types.ts` (56 lines)
- `projects/sfia-studio/app/lib/oa/synthesis/domain/invariants.ts` (174 lines)
- `projects/sfia-studio/app/lib/oa/synthesis/domain/errors.ts` (28 lines)
- `projects/sfia-studio/app/lib/oa/synthesis/ports/synthesisRepositoryPort.ts` (23 lines)
- `projects/sfia-studio/app/lib/oa/synthesis/infrastructure/sqlite/sqliteSynthesisRepository.ts` (229 lines)
- `projects/sfia-studio/app/lib/oa/synthesis/infrastructure/sqlite/createSqliteSynthesisServices.ts` (46 lines)
- `projects/sfia-studio/app/lib/oa/synthesis/index.ts` (54 lines)
- `projects/sfia-studio/app/features/project-assistant/synthesisActions.ts` (216 lines)
- `projects/sfia-studio/app/features/project-assistant/buildProductSynthesisLineageInput.ts` (149 lines)
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.tsx` (334 lines)
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.module.css` (395 lines)
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/synthesisPresentation.ts` (108 lines)
- `projects/sfia-studio/app/__tests__/oa/synthesis/p5.s04.productDerivedSynthesis.d0.test.ts` (567 lines)
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx` (383 lines)

Visual evidence excerpts retained after the complete-contents sections (design note + capture manifest).

## COMPLETE CREATED-FILE CONTENTS

Every new S04 source file below is embedded **verbatim in full**. Paths are absolute-from-repo-root.

### projects/sfia-studio/app/lib/oa/synthesis/application/buildProductSynthesis.ts

_Lines: 340_

```ts
import { createHash, randomBytes } from "node:crypto";
import type { ClaimEvaluation } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
import { projectContractResultVerdict } from "@/lib/oa/evidence-review/application/contractResultVerdictProjection";
import { SynthesisDomainError } from "../domain/errors";
import { validateProductSynthesisShape } from "../domain/invariants";
import type {
  ProductSynthesisProjection,
  SynthesisSections,
  SynthesisSourceBindings,
  SynthesisVerdictLabel,
} from "../domain/types";

export const SYNTHESIS_GENERATED_BY =
  "deterministic_product_synthesis_builder_s04" as const;

export const ABSENT_RECOMMENDATION_TEXT =
  "Aucune recommandation Product enregistrée." as const;

export type BuildProductSynthesisExecutionContractSummary = {
  readonly executionContractId: string;
  readonly action?: string;
  readonly target?: string;
  readonly scope?: string;
  readonly cycleInstanceId?: string | null;
};

export type BuildProductSynthesisAttemptSummary = {
  readonly attemptId: string;
  readonly status?: string;
  readonly resultRef?: string | null;
};

export type BuildProductSynthesisEvidenceSummary = {
  readonly evidenceId: string;
  readonly status?: string;
  readonly type?: string;
};

export type BuildProductSynthesisReviewBundleSummary = {
  readonly reviewBundleId: string;
  readonly status?: string;
  readonly completeness?: string;
};

export type BuildProductSynthesisRecommendation = {
  readonly text: string;
  readonly ref: string;
};

export type BuildProductSynthesisInput = {
  readonly projectId: string;
  readonly claimEvaluation: ClaimEvaluation;
  readonly executionContract?: BuildProductSynthesisExecutionContractSummary | null;
  readonly attempt?: BuildProductSynthesisAttemptSummary | null;
  readonly evidence?: readonly BuildProductSynthesisEvidenceSummary[];
  readonly reviewBundle?: BuildProductSynthesisReviewBundleSummary | null;
  readonly recommendation?: BuildProductSynthesisRecommendation | null;
  readonly title?: string;
  readonly generatedAt?: string;
  readonly synthesisId?: string;
  readonly supersedes?: string | null;
  readonly version?: number;
  readonly cycleInstanceId?: string | null;
};

function stableStringify(value: unknown): string {
  if (value === null || typeof value !== "object") {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return `[${value.map((v) => stableStringify(v)).join(",")}]`;
  }
  const obj = value as Record<string, unknown>;
  const keys = Object.keys(obj).sort();
  return `{${keys
    .map((k) => `${JSON.stringify(k)}:${stableStringify(obj[k])}`)
    .join(",")}}`;
}

export function computeSynthesisSourceFingerprint(input: {
  bindings: SynthesisSourceBindings;
  canonicalVerdict: ProductSynthesisProjection["canonicalVerdict"];
  claimEvaluationStatus: ClaimEvaluation["status"];
  recommendationRef: string | null;
}): string {
  const material = {
    bindings: input.bindings,
    canonicalVerdict: input.canonicalVerdict,
    claimEvaluationStatus: input.claimEvaluationStatus,
    recommendationRef: input.recommendationRef,
  };
  return createHash("sha256")
    .update(stableStringify(material), "utf8")
    .digest("hex");
}

function mapVerdictLabel(
  canonical: ProductSynthesisProjection["canonicalVerdict"],
): SynthesisVerdictLabel {
  if (canonical === "PASS") return "atteint";
  if (canonical === "FAIL") return "echec";
  return "non_prouve";
}

function buildSections(input: {
  claimEvaluation: ClaimEvaluation;
  executionContract?: BuildProductSynthesisExecutionContractSummary | null;
  attempt?: BuildProductSynthesisAttemptSummary | null;
  evidence: readonly BuildProductSynthesisEvidenceSummary[];
  reviewBundle?: BuildProductSynthesisReviewBundleSummary | null;
  recommendationText: string;
  canonicalVerdict: ProductSynthesisProjection["canonicalVerdict"];
  verdictLabel: SynthesisVerdictLabel;
}): SynthesisSections {
  const ce = input.claimEvaluation;
  const planned = input.executionContract
    ? [
        `Contrat d'exécution ${input.executionContract.executionContractId}.`,
        input.executionContract.action
          ? `Action prévue: ${input.executionContract.action}.`
          : null,
        input.executionContract.target
          ? `Cible: ${input.executionContract.target}.`
          : null,
        input.executionContract.scope
          ? `Périmètre: ${input.executionContract.scope}.`
          : null,
      ]
        .filter(Boolean)
        .join(" ")
    : "Aucun contrat d'exécution Product fourni pour cette synthèse.";

  const done = input.attempt
    ? [
        `Tentative ${input.attempt.attemptId}.`,
        input.attempt.status
          ? `Statut d'attempt: ${input.attempt.status}.`
          : null,
        input.attempt.resultRef
          ? `Référence de résultat: ${input.attempt.resultRef}.`
          : "Aucune référence de résultat d'attempt enregistrée.",
      ]
        .filter(Boolean)
        .join(" ")
    : "Aucune tentative d'exécution Product fournie pour cette synthèse.";

  const evidenceLines =
    input.evidence.length > 0
      ? input.evidence
          .map((e) => {
            const bits = [e.evidenceId];
            if (e.type) bits.push(`type=${e.type}`);
            if (e.status) bits.push(`status=${e.status}`);
            return bits.join(" ");
          })
          .join("; ")
      : "Aucune evidence Product liée fournie.";

  const gapsParts: string[] = [];
  if (!input.executionContract) {
    gapsParts.push("contrat d'exécution absent");
  }
  if (!input.attempt) {
    gapsParts.push("tentative absente");
  }
  if (input.evidence.length === 0) {
    gapsParts.push("evidence absente");
  }
  if (!input.reviewBundle) {
    gapsParts.push("review bundle absent");
  }
  if (input.canonicalVerdict !== "PASS") {
    gapsParts.push(`verdict non atteint (${input.canonicalVerdict})`);
  }
  const gaps =
    gapsParts.length > 0
      ? `Écarts / réserves observés: ${gapsParts.join("; ")}.`
      : "Aucun écart Product explicite enregistré pour cette lignée.";

  const rb = input.reviewBundle
    ? `ReviewBundle ${input.reviewBundle.reviewBundleId}` +
      (input.reviewBundle.status
        ? ` (status=${input.reviewBundle.status})`
        : "") +
      (input.reviewBundle.completeness
        ? ` completeness=${input.reviewBundle.completeness}`
        : "") +
      "."
    : "Aucun ReviewBundle Product fourni.";

  return {
    summary: [
      `Synthèse Product dérivée pour ClaimEvaluation ${ce.claimEvaluationId}.`,
      `Affirmation: ${ce.claimStatement}.`,
      `Statut CE: ${ce.status}.`,
      `Verdict canonique projeté: ${input.canonicalVerdict}.`,
    ].join(" "),
    planned,
    done,
    evaluation: [
      `Évaluation ClaimEvaluation ${ce.claimEvaluationId}: status=${ce.status}.`,
      `Méthode: ${ce.evaluationMethod}.`,
      `Criticalité: ${ce.criticality}.`,
      rb,
    ].join(" "),
    gaps,
    impact:
      input.canonicalVerdict === "PASS"
        ? "Impact Product: résultat de contrat atteint selon la ClaimEvaluation durable — projection dérivée uniquement."
        : input.canonicalVerdict === "FAIL"
          ? "Impact Product: échec de preuve selon la ClaimEvaluation durable — aucune promotion d'autorité."
          : "Impact Product: résultat non prouvé selon la ClaimEvaluation durable — continuité / récupération éventuelle hors synthèse.",
    verdict: `Verdict Product projeté: ${input.verdictLabel} (canonique ${input.canonicalVerdict}) depuis ClaimEvaluation.status=${ce.status}.`,
    recommendation: input.recommendationText,
    verified: `Éléments vérifiés / liés: ${evidenceLines}`,
  };
}

export function buildProductSynthesis(
  input: BuildProductSynthesisInput,
): ProductSynthesisProjection {
  if (!input.claimEvaluation) {
    throw new SynthesisDomainError(
      "SYNTHESIS_LINEAGE_REQUIRES_CLAIM_EVALUATION",
    );
  }
  if (!input.projectId || typeof input.projectId !== "string") {
    throw new SynthesisDomainError("SYNTHESIS_INVALID", "project_id_required");
  }

  const ce = input.claimEvaluation;
  const evidence = input.evidence ?? [];
  const recommendationRef = input.recommendation?.ref ?? null;
  const recommendationText =
    input.recommendation?.text && input.recommendation.text.trim().length > 0
      ? input.recommendation.text
      : ABSENT_RECOMMENDATION_TEXT;

  const cycleInstanceId =
    input.cycleInstanceId ??
    input.executionContract?.cycleInstanceId ??
    ce.contractResultBindings?.cycleInstanceId ??
    null;

  const bindings: SynthesisSourceBindings = {
    projectId: input.projectId,
    cycleInstanceId,
    executionContractId:
      input.executionContract?.executionContractId ??
      ce.contractResultBindings?.executionContractId ??
      null,
    attemptId:
      input.attempt?.attemptId ??
      ce.contractResultBindings?.executionAttemptId ??
      null,
    evidenceIds: evidence.map((e) => e.evidenceId),
    reviewBundleId:
      input.reviewBundle?.reviewBundleId ?? ce.reviewBundleId ?? null,
    claimEvaluationId: ce.claimEvaluationId,
    recommendationRef,
  };

  const canonicalVerdict = projectContractResultVerdict(ce.status);
  const verdictLabel = mapVerdictLabel(canonicalVerdict);
  const sourceFingerprint = computeSynthesisSourceFingerprint({
    bindings,
    canonicalVerdict,
    claimEvaluationStatus: ce.status,
    recommendationRef,
  });

  const generatedAt = input.generatedAt ?? new Date().toISOString();
  // Identity is fingerprint-keyed for idempotence; IDs are unique per materialization.
  const synthesisId =
    input.synthesisId ?? `syn:${randomBytes(16).toString("hex")}`;

  const sections = buildSections({
    claimEvaluation: ce,
    executionContract: input.executionContract,
    attempt: input.attempt,
    evidence,
    reviewBundle: input.reviewBundle,
    recommendationText,
    canonicalVerdict,
    verdictLabel,
  });

  const synthesis: ProductSynthesisProjection = {
    synthesisId,
    projectId: input.projectId,
    cycleInstanceId,
    title:
      input.title?.trim() ||
      `Synthèse Product — ${ce.claimEvaluationId}`,
    subject: ce.claimStatement,
    status: "current",
    verdictLabel,
    canonicalVerdict,
    sections,
    sourceBindings: bindings,
    sourceFingerprint,
    generatedAt,
    generatedBy: SYNTHESIS_GENERATED_BY,
    authority: "none",
    supersedes: input.supersedes ?? null,
    version: input.version ?? 1,
  };

  const violation = validateProductSynthesisShape(synthesis);
  if (violation) {
    throw new SynthesisDomainError(violation.detailCode, violation.reason);
  }
  return synthesis;
}

export function buildSynthesisSearchText(
  synthesis: ProductSynthesisProjection,
): string {
  const s = synthesis.sections;
  return [
    synthesis.title,
    synthesis.subject,
    synthesis.verdictLabel,
    synthesis.canonicalVerdict,
    s.summary,
    s.planned,
    s.done,
    s.evaluation,
    s.gaps,
    s.impact,
    s.verdict,
    s.recommendation,
    s.verified,
    synthesis.sourceBindings.claimEvaluationId,
    synthesis.sourceBindings.executionContractId ?? "",
    synthesis.sourceBindings.recommendationRef ?? "",
  ]
    .join("\n")
    .toLowerCase();
}
```

### projects/sfia-studio/app/lib/oa/synthesis/application/materializeProductSynthesis.ts

_Lines: 54_

```ts
import { SynthesisDomainError } from "../domain/errors";
import type { ProductSynthesisProjection } from "../domain/types";
import type { SynthesisRepositoryPort } from "../ports/synthesisRepositoryPort";
import {
  buildProductSynthesis,
  type BuildProductSynthesisInput,
} from "./buildProductSynthesis";

export type MaterializeProductSynthesisInput = BuildProductSynthesisInput;

export async function materializeProductSynthesis(
  repository: SynthesisRepositoryPort,
  input: MaterializeProductSynthesisInput,
): Promise<ProductSynthesisProjection> {
  if (!input.claimEvaluation) {
    throw new SynthesisDomainError(
      "SYNTHESIS_LINEAGE_REQUIRES_CLAIM_EVALUATION",
    );
  }

  const candidate = buildProductSynthesis(input);

  const byFingerprint = await repository.findByFingerprint(
    candidate.projectId,
    candidate.sourceFingerprint,
  );
  if (byFingerprint && byFingerprint.status === "current") {
    return byFingerprint;
  }

  const priorCurrent = await repository.findCurrentByClaimEvaluationId(
    candidate.projectId,
    candidate.sourceBindings.claimEvaluationId,
  );

  if (
    priorCurrent &&
    priorCurrent.sourceFingerprint !== candidate.sourceFingerprint
  ) {
    await repository.softSupersede(priorCurrent.synthesisId);
    const successor = buildProductSynthesis({
      ...input,
      supersedes: priorCurrent.synthesisId,
      version: priorCurrent.version + 1,
      generatedAt: candidate.generatedAt,
      synthesisId: candidate.synthesisId,
    });
    await repository.create(successor);
    return successor;
  }

  await repository.create(candidate);
  return candidate;
}
```

### projects/sfia-studio/app/lib/oa/synthesis/application/rebuildProductSynthesis.ts

_Lines: 28_

```ts
import type { ProductSynthesisProjection } from "../domain/types";
import type { SynthesisRepositoryPort } from "../ports/synthesisRepositoryPort";
import {
  materializeProductSynthesis,
  type MaterializeProductSynthesisInput,
} from "./materializeProductSynthesis";

export type RebuildProductSynthesisLineage = MaterializeProductSynthesisInput;

/**
 * Test/rebuild helper: deletes all derived syntheses for a project, then
 * rematerializes from provided lineage. Never deletes Truth C objects.
 */
export async function rebuildProductSynthesis(
  repository: SynthesisRepositoryPort,
  projectId: string,
  lineage: readonly RebuildProductSynthesisLineage[],
): Promise<ProductSynthesisProjection[]> {
  await repository.deleteAllByProject(projectId);
  const out: ProductSynthesisProjection[] = [];
  for (const item of lineage) {
    if (item.projectId !== projectId) {
      continue;
    }
    out.push(await materializeProductSynthesis(repository, item));
  }
  return out;
}
```

### projects/sfia-studio/app/lib/oa/synthesis/application/searchProductSyntheses.ts

_Lines: 10_

```ts
import type { ProductSynthesisProjection } from "../domain/types";
import type { SynthesisRepositoryPort } from "../ports/synthesisRepositoryPort";

export async function searchProductSyntheses(
  repository: SynthesisRepositoryPort,
  projectId: string,
  query: string,
): Promise<ProductSynthesisProjection[]> {
  return repository.searchByProject(projectId, query);
}
```

### projects/sfia-studio/app/lib/oa/synthesis/domain/types.ts

_Lines: 56_

```ts
export type SynthesisStatus = "current" | "superseded" | "stale_source";
export type SynthesisVerdictLabel =
  | "atteint"
  | "non_prouve"
  | "echec"
  | "indetermine";

export type SynthesisSourceBindings = {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly executionContractId: string | null;
  readonly attemptId: string | null;
  readonly evidenceIds: readonly string[];
  readonly reviewBundleId: string | null;
  readonly claimEvaluationId: string;
  readonly recommendationRef: string | null;
};

export type SynthesisSections = {
  readonly summary: string;
  readonly planned: string;
  readonly done: string;
  readonly evaluation: string;
  readonly gaps: string;
  readonly impact: string;
  readonly verdict: string;
  readonly recommendation: string;
  readonly verified: string;
};

export type ProductSynthesisProjection = {
  readonly synthesisId: string;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly title: string;
  readonly subject: string;
  readonly status: SynthesisStatus;
  readonly verdictLabel: SynthesisVerdictLabel;
  readonly canonicalVerdict: "PASS" | "NOT_PROVEN" | "FAIL";
  readonly sections: SynthesisSections;
  readonly sourceBindings: SynthesisSourceBindings;
  readonly sourceFingerprint: string;
  readonly generatedAt: string;
  readonly generatedBy: "deterministic_product_synthesis_builder_s04";
  readonly authority: "none"; // never Truth C
  readonly supersedes: string | null;
  readonly version: number;
};

export type SynthesisDetailCode =
  | "SYNTHESIS_INVALID"
  | "SYNTHESIS_NOT_FOUND"
  | "SYNTHESIS_ALREADY_EXISTS"
  | "SYNTHESIS_LINEAGE_REQUIRES_CLAIM_EVALUATION"
  | "SYNTHESIS_AUTHORITY_FORBIDDEN"
  | "SYNTHESIS_PERSISTENCE_FAILED";
```

### projects/sfia-studio/app/lib/oa/synthesis/domain/invariants.ts

_Lines: 174_

```ts
import type {
  ProductSynthesisProjection,
  SynthesisDetailCode,
  SynthesisSections,
  SynthesisSourceBindings,
  SynthesisStatus,
  SynthesisVerdictLabel,
} from "./types";

export type SynthesisInvariantViolation = {
  detailCode: SynthesisDetailCode;
  reason: string;
};

const STATUSES: ReadonlySet<SynthesisStatus> = new Set([
  "current",
  "superseded",
  "stale_source",
]);

const VERDICT_LABELS: ReadonlySet<SynthesisVerdictLabel> = new Set([
  "atteint",
  "non_prouve",
  "echec",
  "indetermine",
]);

const CANONICAL_VERDICTS = new Set(["PASS", "NOT_PROVEN", "FAIL"]);

const SECTION_KEYS: readonly (keyof SynthesisSections)[] = [
  "summary",
  "planned",
  "done",
  "evaluation",
  "gaps",
  "impact",
  "verdict",
  "recommendation",
  "verified",
];

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validateBindings(
  bindings: SynthesisSourceBindings | undefined,
): SynthesisInvariantViolation | null {
  if (!bindings || typeof bindings !== "object") {
    return { detailCode: "SYNTHESIS_INVALID", reason: "source_bindings" };
  }
  if (!isNonEmptyString(bindings.projectId)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "bindings_project_id" };
  }
  if (!isNonEmptyString(bindings.claimEvaluationId)) {
    return {
      detailCode: "SYNTHESIS_INVALID",
      reason: "bindings_claim_evaluation_id",
    };
  }
  if (!Array.isArray(bindings.evidenceIds)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "bindings_evidence_ids" };
  }
  for (const evidenceId of bindings.evidenceIds) {
    if (!isNonEmptyString(evidenceId)) {
      return {
        detailCode: "SYNTHESIS_INVALID",
        reason: "bindings_evidence_id_empty",
      };
    }
  }
  return null;
}

function validateSections(
  sections: SynthesisSections | undefined,
): SynthesisInvariantViolation | null {
  if (!sections || typeof sections !== "object") {
    return { detailCode: "SYNTHESIS_INVALID", reason: "sections" };
  }
  for (const key of SECTION_KEYS) {
    if (!isNonEmptyString(sections[key])) {
      return { detailCode: "SYNTHESIS_INVALID", reason: `section_${key}_empty` };
    }
  }
  return null;
}

/**
 * Shape + epistemic invariants for Product-derived Synthesis.
 * Authority must remain "none" — co-location in Product SQLite ≠ Truth C.
 */
export function validateProductSynthesisShape(
  synthesis: ProductSynthesisProjection,
): SynthesisInvariantViolation | null {
  if (!synthesis || typeof synthesis !== "object") {
    return { detailCode: "SYNTHESIS_INVALID", reason: "missing_synthesis" };
  }
  if (!isNonEmptyString(synthesis.synthesisId)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "synthesis_id" };
  }
  if (!isNonEmptyString(synthesis.projectId)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "project_id" };
  }
  if (!isNonEmptyString(synthesis.title)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "title" };
  }
  if (!isNonEmptyString(synthesis.subject)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "subject" };
  }
  if (!STATUSES.has(synthesis.status)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "status" };
  }
  if (!VERDICT_LABELS.has(synthesis.verdictLabel)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "verdict_label" };
  }
  if (!CANONICAL_VERDICTS.has(synthesis.canonicalVerdict)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "canonical_verdict" };
  }
  if (!isNonEmptyString(synthesis.sourceFingerprint)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "source_fingerprint" };
  }
  if (!isNonEmptyString(synthesis.generatedAt)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "generated_at" };
  }
  if (synthesis.generatedBy !== "deterministic_product_synthesis_builder_s04") {
    return { detailCode: "SYNTHESIS_INVALID", reason: "generated_by" };
  }
  if (synthesis.authority !== "none") {
    return {
      detailCode: "SYNTHESIS_AUTHORITY_FORBIDDEN",
      reason: "authority_must_be_none",
    };
  }
  if (
    typeof synthesis.version !== "number" ||
    !Number.isInteger(synthesis.version) ||
    synthesis.version < 1
  ) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "version" };
  }
  if (
    synthesis.supersedes !== null &&
    !isNonEmptyString(synthesis.supersedes)
  ) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "supersedes" };
  }
  if (
    synthesis.cycleInstanceId !== null &&
    !isNonEmptyString(synthesis.cycleInstanceId)
  ) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "cycle_instance_id" };
  }

  const bindingsViolation = validateBindings(synthesis.sourceBindings);
  if (bindingsViolation) return bindingsViolation;

  if (synthesis.sourceBindings.projectId !== synthesis.projectId) {
    return {
      detailCode: "SYNTHESIS_INVALID",
      reason: "bindings_project_mismatch",
    };
  }
  if (
    synthesis.cycleInstanceId !== synthesis.sourceBindings.cycleInstanceId
  ) {
    return {
      detailCode: "SYNTHESIS_INVALID",
      reason: "cycle_instance_mismatch",
    };
  }

  return validateSections(synthesis.sections);
}
```

### projects/sfia-studio/app/lib/oa/synthesis/domain/errors.ts

_Lines: 28_

```ts
import type { SynthesisDetailCode } from "./types";

const SAFE_MESSAGES: Record<SynthesisDetailCode, string> = {
  SYNTHESIS_INVALID: "Product synthesis projection is invalid.",
  SYNTHESIS_NOT_FOUND: "Product synthesis projection was not found.",
  SYNTHESIS_ALREADY_EXISTS: "Product synthesis projection already exists.",
  SYNTHESIS_LINEAGE_REQUIRES_CLAIM_EVALUATION:
    "Product synthesis lineage requires a ClaimEvaluation.",
  SYNTHESIS_AUTHORITY_FORBIDDEN:
    "Product synthesis authority cannot be mutated or elevated.",
  SYNTHESIS_PERSISTENCE_FAILED: "Product synthesis persistence failed.",
};

export class SynthesisDomainError extends Error {
  readonly detailCode: SynthesisDetailCode;

  constructor(detailCode: SynthesisDetailCode, message?: string) {
    super(message ?? SAFE_MESSAGES[detailCode]);
    this.name = "SynthesisDomainError";
    this.detailCode = detailCode;
  }
}

export function isSynthesisDomainError(
  err: unknown,
): err is SynthesisDomainError {
  return err instanceof SynthesisDomainError;
}
```

### projects/sfia-studio/app/lib/oa/synthesis/ports/synthesisRepositoryPort.ts

_Lines: 23_

```ts
import type { ProductSynthesisProjection } from "../domain/types";

export type SynthesisRepositoryPort = {
  create(synthesis: ProductSynthesisProjection): Promise<void>;
  update(synthesis: ProductSynthesisProjection): Promise<void>;
  findById(synthesisId: string): Promise<ProductSynthesisProjection | null>;
  findByFingerprint(
    projectId: string,
    fingerprint: string,
  ): Promise<ProductSynthesisProjection | null>;
  findCurrentByClaimEvaluationId(
    projectId: string,
    claimEvaluationId: string,
  ): Promise<ProductSynthesisProjection | null>;
  listByProject(projectId: string): Promise<ProductSynthesisProjection[]>;
  searchByProject(
    projectId: string,
    query: string,
  ): Promise<ProductSynthesisProjection[]>;
  /** Test/rebuild only — deletes derived projections; never touches Truth C. */
  deleteAllByProject(projectId: string): Promise<void>;
  softSupersede(synthesisId: string): Promise<ProductSynthesisProjection>;
};
```

### projects/sfia-studio/app/lib/oa/synthesis/infrastructure/sqlite/sqliteSynthesisRepository.ts

_Lines: 229_

```ts
import type { ProductSqliteHandle } from "@/lib/oa/project";
import { SynthesisDomainError } from "../../domain/errors";
import { validateProductSynthesisShape } from "../../domain/invariants";
import type { ProductSynthesisProjection } from "../../domain/types";
import type { SynthesisRepositoryPort } from "../../ports/synthesisRepositoryPort";
import { buildSynthesisSearchText } from "../../application/buildProductSynthesis";

type SynthesisRow = {
  synthesis_id: string;
  project_id: string;
  cycle_instance_id: string | null;
  status: string;
  source_fingerprint: string;
  version: number;
  generated_at: string;
  payload_json: string;
  search_text: string;
};

function cloneSynthesis(
  synthesis: ProductSynthesisProjection,
): ProductSynthesisProjection {
  return structuredClone(synthesis);
}

function parseRow(row: SynthesisRow): ProductSynthesisProjection {
  return cloneSynthesis(JSON.parse(row.payload_json) as ProductSynthesisProjection);
}

/**
 * Durable Product-derived Synthesis repository on Product SQLite (M9).
 * NON-AUTHORITATIVE — NOT Truth C.
 */
export class SqliteSynthesisRepository implements SynthesisRepositoryPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(
    synthesisId: string,
  ): Promise<ProductSynthesisProjection | null> {
    const row = this.store.db
      .prepare(
        `SELECT synthesis_id, project_id, cycle_instance_id, status,
                source_fingerprint, version, generated_at, payload_json, search_text
         FROM oa_syntheses WHERE synthesis_id = ?`,
      )
      .get(synthesisId) as SynthesisRow | undefined;
    if (!row) return null;
    return parseRow(row);
  }

  async findByFingerprint(
    projectId: string,
    fingerprint: string,
  ): Promise<ProductSynthesisProjection | null> {
    const row = this.store.db
      .prepare(
        `SELECT synthesis_id, project_id, cycle_instance_id, status,
                source_fingerprint, version, generated_at, payload_json, search_text
         FROM oa_syntheses
         WHERE project_id = ? AND source_fingerprint = ?
         ORDER BY CASE status WHEN 'current' THEN 0 ELSE 1 END, generated_at DESC
         LIMIT 1`,
      )
      .get(projectId, fingerprint) as SynthesisRow | undefined;
    if (!row) return null;
    return parseRow(row);
  }

  async findCurrentByClaimEvaluationId(
    projectId: string,
    claimEvaluationId: string,
  ): Promise<ProductSynthesisProjection | null> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_syntheses
         WHERE project_id = ? AND status = 'current'
         ORDER BY generated_at DESC`,
      )
      .all(projectId) as Array<{ payload_json: string }>;
    for (const row of rows) {
      const synthesis = cloneSynthesis(
        JSON.parse(row.payload_json) as ProductSynthesisProjection,
      );
      if (synthesis.sourceBindings.claimEvaluationId === claimEvaluationId) {
        return synthesis;
      }
    }
    return null;
  }

  async listByProject(
    projectId: string,
  ): Promise<ProductSynthesisProjection[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_syntheses
         WHERE project_id = ?
         ORDER BY generated_at ASC`,
      )
      .all(projectId) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneSynthesis(JSON.parse(row.payload_json) as ProductSynthesisProjection),
    );
  }

  async searchByProject(
    projectId: string,
    query: string,
  ): Promise<ProductSynthesisProjection[]> {
    const trimmed = query.trim();
    if (!trimmed) return [];
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_syntheses
         WHERE project_id = ? AND search_text LIKE ? ESCAPE '\\'
         ORDER BY generated_at DESC`,
      )
      .all(projectId, `%${escapeLike(trimmed.toLowerCase())}%`) as Array<{
      payload_json: string;
    }>;
    return rows.map((row) =>
      cloneSynthesis(JSON.parse(row.payload_json) as ProductSynthesisProjection),
    );
  }

  async create(synthesis: ProductSynthesisProjection): Promise<void> {
    const shape = validateProductSynthesisShape(synthesis);
    if (shape) {
      throw new SynthesisDomainError(shape.detailCode, shape.reason);
    }
    const existing = await this.findById(synthesis.synthesisId);
    if (existing) {
      throw new SynthesisDomainError(
        "SYNTHESIS_ALREADY_EXISTS",
        "synthesis_id_taken",
      );
    }
    const payload = JSON.stringify(cloneSynthesis(synthesis));
    const searchText = buildSynthesisSearchText(synthesis);
    this.store.db
      .prepare(
        `INSERT INTO oa_syntheses(
           synthesis_id, project_id, cycle_instance_id, status,
           source_fingerprint, version, generated_at, payload_json, search_text
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        synthesis.synthesisId,
        synthesis.projectId,
        synthesis.cycleInstanceId,
        synthesis.status,
        synthesis.sourceFingerprint,
        synthesis.version,
        synthesis.generatedAt,
        payload,
        searchText,
      );
  }

  async update(synthesis: ProductSynthesisProjection): Promise<void> {
    const shape = validateProductSynthesisShape(synthesis);
    if (shape) {
      throw new SynthesisDomainError(shape.detailCode, shape.reason);
    }
    const payload = JSON.stringify(cloneSynthesis(synthesis));
    const searchText = buildSynthesisSearchText(synthesis);
    const result = this.store.db
      .prepare(
        `UPDATE oa_syntheses SET
           project_id = ?,
           cycle_instance_id = ?,
           status = ?,
           source_fingerprint = ?,
           version = ?,
           generated_at = ?,
           payload_json = ?,
           search_text = ?
         WHERE synthesis_id = ?`,
      )
      .run(
        synthesis.projectId,
        synthesis.cycleInstanceId,
        synthesis.status,
        synthesis.sourceFingerprint,
        synthesis.version,
        synthesis.generatedAt,
        payload,
        searchText,
        synthesis.synthesisId,
      );
    if (Number(result.changes) !== 1) {
      throw new SynthesisDomainError(
        "SYNTHESIS_NOT_FOUND",
        "update_missing",
      );
    }
  }

  async deleteAllByProject(projectId: string): Promise<void> {
    this.store.db
      .prepare(`DELETE FROM oa_syntheses WHERE project_id = ?`)
      .run(projectId);
  }

  async softSupersede(
    synthesisId: string,
  ): Promise<ProductSynthesisProjection> {
    const current = await this.findById(synthesisId);
    if (!current) {
      throw new SynthesisDomainError(
        "SYNTHESIS_NOT_FOUND",
        "soft_supersede_missing",
      );
    }
    const superseded: ProductSynthesisProjection = {
      ...current,
      status: "superseded",
    };
    await this.update(superseded);
    return superseded;
  }
}

function escapeLike(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/%/g, "\\%")
    .replace(/_/g, "\\_");
}
```

### projects/sfia-studio/app/lib/oa/synthesis/infrastructure/sqlite/createSqliteSynthesisServices.ts

_Lines: 46_

```ts
import type { ProductSqliteHandle } from "@/lib/oa/project";
import {
  buildProductSynthesis,
  type BuildProductSynthesisInput,
} from "../../application/buildProductSynthesis";
import { materializeProductSynthesis } from "../../application/materializeProductSynthesis";
import { rebuildProductSynthesis } from "../../application/rebuildProductSynthesis";
import { searchProductSyntheses } from "../../application/searchProductSyntheses";
import type { ProductSynthesisProjection } from "../../domain/types";
import type { SynthesisRepositoryPort } from "../../ports/synthesisRepositoryPort";
import { SqliteSynthesisRepository } from "./sqliteSynthesisRepository";

export type CreateSqliteSynthesisServicesOptions = {
  productStore: ProductSqliteHandle;
};

export type SqliteSynthesisServices = {
  repository: SynthesisRepositoryPort;
  build: (input: BuildProductSynthesisInput) => ProductSynthesisProjection;
  materialize: (
    input: BuildProductSynthesisInput,
  ) => Promise<ProductSynthesisProjection>;
  search: (
    projectId: string,
    query: string,
  ) => Promise<ProductSynthesisProjection[]>;
  rebuild: (
    projectId: string,
    lineage: readonly BuildProductSynthesisInput[],
  ) => Promise<ProductSynthesisProjection[]>;
};

export function createSqliteSynthesisServices(
  options: CreateSqliteSynthesisServicesOptions,
): SqliteSynthesisServices {
  const repository = new SqliteSynthesisRepository(options.productStore);
  return {
    repository,
    build: buildProductSynthesis,
    materialize: (input) => materializeProductSynthesis(repository, input),
    search: (projectId, query) =>
      searchProductSyntheses(repository, projectId, query),
    rebuild: (projectId, lineage) =>
      rebuildProductSynthesis(repository, projectId, lineage),
  };
}
```

### projects/sfia-studio/app/lib/oa/synthesis/index.ts

_Lines: 54_

```ts
export type {
  ProductSynthesisProjection,
  SynthesisDetailCode,
  SynthesisSections,
  SynthesisSourceBindings,
  SynthesisStatus,
  SynthesisVerdictLabel,
} from "./domain/types";

export {
  SynthesisDomainError,
  isSynthesisDomainError,
} from "./domain/errors";

export {
  validateProductSynthesisShape,
  type SynthesisInvariantViolation,
} from "./domain/invariants";

export type { SynthesisRepositoryPort } from "./ports/synthesisRepositoryPort";

export {
  ABSENT_RECOMMENDATION_TEXT,
  SYNTHESIS_GENERATED_BY,
  buildProductSynthesis,
  buildSynthesisSearchText,
  computeSynthesisSourceFingerprint,
  type BuildProductSynthesisAttemptSummary,
  type BuildProductSynthesisEvidenceSummary,
  type BuildProductSynthesisExecutionContractSummary,
  type BuildProductSynthesisInput,
  type BuildProductSynthesisRecommendation,
  type BuildProductSynthesisReviewBundleSummary,
} from "./application/buildProductSynthesis";

export {
  materializeProductSynthesis,
  type MaterializeProductSynthesisInput,
} from "./application/materializeProductSynthesis";

export { searchProductSyntheses } from "./application/searchProductSyntheses";

export {
  rebuildProductSynthesis,
  type RebuildProductSynthesisLineage,
} from "./application/rebuildProductSynthesis";

export { SqliteSynthesisRepository } from "./infrastructure/sqlite/sqliteSynthesisRepository";

export {
  createSqliteSynthesisServices,
  type CreateSqliteSynthesisServicesOptions,
  type SqliteSynthesisServices,
} from "./infrastructure/sqlite/createSqliteSynthesisServices";
```

### projects/sfia-studio/app/features/project-assistant/synthesisActions.ts

_Lines: 216_

```ts
"use server";

import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import {
  createSqliteSynthesisServices,
  isSynthesisDomainError,
  type ProductSynthesisProjection,
} from "@/lib/oa/synthesis";
import {
  buildProductSynthesisLineageInput,
  synthesisErrorMessage,
} from "./buildProductSynthesisLineageInput";

const OA_UNAVAILABLE = {
  ok: false as const,
  code: "OA_STACK_UNAVAILABLE",
  message: "Services Product indisponibles.",
};

const PRODUCT_SQLITE_UNAVAILABLE = {
  ok: false as const,
  code: "PRODUCT_SQLITE_UNAVAILABLE",
  message: "Persistance Product SQLite indisponible.",
};

type SynthesisServicesContext =
  | {
      readonly ok: true;
      readonly services: ReturnType<typeof createSqliteSynthesisServices>;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

function resolveSynthesisServices(): SynthesisServicesContext {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;
  const store = runtime.oa.projectServices.store;
  if (!(store instanceof SqliteProductStore)) {
    return PRODUCT_SQLITE_UNAVAILABLE;
  }
  return {
    ok: true,
    services: createSqliteSynthesisServices({ productStore: store }),
  };
}

export type ProductSynthesisListItem = {
  readonly synthesisId: string;
  readonly title: string;
  readonly subject: string;
  readonly status: ProductSynthesisProjection["status"];
  readonly verdictLabel: ProductSynthesisProjection["verdictLabel"];
  readonly generatedAt: string;
  readonly authority: "none";
};

function toListItem(s: ProductSynthesisProjection): ProductSynthesisListItem {
  return {
    synthesisId: s.synthesisId,
    title: s.title,
    subject: s.subject,
    status: s.status,
    verdictLabel: s.verdictLabel,
    generatedAt: s.generatedAt,
    authority: "none",
  };
}

export async function listProductSynthesesAction(input: {
  projectId: string;
}): Promise<
  | { readonly ok: true; readonly items: readonly ProductSynthesisListItem[] }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const projectId = input.projectId?.trim();
  if (!projectId) {
    return {
      ok: false,
      code: "PROJECT_ID_REQUIRED",
      message: "Identifiant projet requis.",
    };
  }
  const ctx = resolveSynthesisServices();
  if (!ctx.ok) return ctx;
  const rows = await ctx.services.repository.listByProject(projectId);
  const items = rows
    .slice()
    .sort((a, b) => b.generatedAt.localeCompare(a.generatedAt))
    .map(toListItem);
  return { ok: true, items };
}

export async function getProductSynthesisAction(input: {
  projectId: string;
  synthesisId: string;
}): Promise<
  | { readonly ok: true; readonly synthesis: ProductSynthesisProjection }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const projectId = input.projectId?.trim();
  const synthesisId = input.synthesisId?.trim();
  if (!projectId || !synthesisId) {
    return {
      ok: false,
      code: "INVALID_INPUT",
      message: "projectId et synthesisId requis.",
    };
  }
  const ctx = resolveSynthesisServices();
  if (!ctx.ok) return ctx;
  const synthesis = await ctx.services.repository.findById(synthesisId);
  if (!synthesis || synthesis.projectId !== projectId) {
    return {
      ok: false,
      code: "SYNTHESIS_NOT_FOUND",
      message: "Synthèse introuvable pour ce projet.",
    };
  }
  return { ok: true, synthesis };
}

export async function searchProductSynthesesAction(input: {
  projectId: string;
  query: string;
}): Promise<
  | { readonly ok: true; readonly items: readonly ProductSynthesisListItem[] }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const projectId = input.projectId?.trim();
  if (!projectId) {
    return {
      ok: false,
      code: "PROJECT_ID_REQUIRED",
      message: "Identifiant projet requis.",
    };
  }
  const ctx = resolveSynthesisServices();
  if (!ctx.ok) return ctx;
  const hits = await ctx.services.search(projectId, input.query ?? "");
  return { ok: true, items: hits.map(toListItem) };
}

export async function getLatestRelevantProductSynthesisAction(input: {
  projectId: string;
}): Promise<
  | {
      readonly ok: true;
      readonly synthesis: ProductSynthesisProjection | null;
      readonly count: number;
    }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const projectId = input.projectId?.trim();
  if (!projectId) {
    return {
      ok: false,
      code: "PROJECT_ID_REQUIRED",
      message: "Identifiant projet requis.",
    };
  }
  const ctx = resolveSynthesisServices();
  if (!ctx.ok) return ctx;
  const rows = await ctx.services.repository.listByProject(projectId);
  const current = rows.filter((s) => s.status === "current");
  const sorted = current
    .slice()
    .sort((a, b) => b.generatedAt.localeCompare(a.generatedAt));
  return {
    ok: true,
    synthesis: sorted[0] ?? null,
    count: rows.filter((s) => s.status === "current").length,
  };
}

export async function materializeProductSynthesisFromLineageAction(input: {
  projectId: string;
  claimEvaluationId: string;
  title?: string;
}): Promise<
  | { readonly ok: true; readonly synthesis: ProductSynthesisProjection }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const projectId = input.projectId?.trim();
  const claimEvaluationId = input.claimEvaluationId?.trim();
  if (!projectId || !claimEvaluationId) {
    return {
      ok: false,
      code: "INVALID_INPUT",
      message: "projectId et claimEvaluationId requis.",
    };
  }
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;
  const ctx = resolveSynthesisServices();
  if (!ctx.ok) return ctx;

  const lineage = await buildProductSynthesisLineageInput({
    oa: runtime.oa,
    projectId,
    claimEvaluationId,
    title: input.title,
  });
  if (!lineage.ok) return lineage;

  try {
    const synthesis = await ctx.services.materialize(lineage.input);
    return { ok: true, synthesis };
  } catch (err) {
    return {
      ok: false,
      code:
        isSynthesisDomainError(err) ? err.detailCode : "SYNTHESIS_MATERIALIZE_FAILED",
      message: synthesisErrorMessage(err),
    };
  }
}
```

### projects/sfia-studio/app/features/project-assistant/buildProductSynthesisLineageInput.ts

_Lines: 149_

```ts
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { BuildProductSynthesisInput } from "@/lib/oa/synthesis";
import { isSynthesisDomainError } from "@/lib/oa/synthesis";

export type BuildProductSynthesisLineageResult =
  | { readonly ok: true; readonly input: BuildProductSynthesisInput }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

/**
 * Loads durable Product OA facts for a ClaimEvaluation and builds
 * BuildProductSynthesisInput — no invented verdict or recommendation.
 */
export async function buildProductSynthesisLineageInput(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly claimEvaluationId: string;
  readonly title?: string;
  readonly generatedAt?: string;
}): Promise<BuildProductSynthesisLineageResult> {
  const projectId = input.projectId.trim();
  const claimEvaluationId = input.claimEvaluationId.trim();
  if (!projectId || !claimEvaluationId) {
    return {
      ok: false,
      code: "INVALID_INPUT",
      message: "projectId et claimEvaluationId requis.",
    };
  }

  const claimEvaluation =
    await input.oa.evidenceReviewServices.claimEvaluationReader.findById(
      claimEvaluationId,
    );
  if (!claimEvaluation) {
    return {
      ok: false,
      code: "CLAIM_EVALUATION_NOT_FOUND",
      message: "ClaimEvaluation introuvable.",
    };
  }

  const boundProject =
    claimEvaluation.contractResultBindings?.projectId ??
    claimEvaluation.provenance?.projectId ??
    null;
  if (boundProject && boundProject !== projectId) {
    return {
      ok: false,
      code: "CLAIM_EVALUATION_PROJECT_MISMATCH",
      message: "ClaimEvaluation liée à un autre projet.",
    };
  }

  const bindings = claimEvaluation.contractResultBindings;
  const evidenceIds = [
    ...(bindings?.evidenceRefs ?? []),
    ...claimEvaluation.requiredEvidenceRefs,
  ].filter((id, index, arr) => arr.indexOf(id) === index);

  const evidenceReader = input.oa.evidenceReviewServices.evidenceReader;
  const evidence = (
    await Promise.all(evidenceIds.map((id) => evidenceReader.findById(id)))
  )
    .filter((ev): ev is NonNullable<typeof ev> => ev != null)
    .map((ev) => ({
      evidenceId: ev.evidenceId,
      status: ev.status,
      type: ev.type,
    }));

  const reviewBundleId =
    claimEvaluation.reviewBundleId ?? bindings?.reviewBundleId ?? null;
  let reviewBundle: BuildProductSynthesisInput["reviewBundle"] = null;
  if (reviewBundleId) {
    const rb =
      await input.oa.evidenceReviewServices.reviewBundleReader.findById(
        reviewBundleId,
      );
    if (rb) {
      reviewBundle = {
        reviewBundleId: rb.reviewBundleId,
        status: rb.status,
        completeness: rb.completeness,
      };
    }
  }

  const executionContractId = bindings?.executionContractId ?? null;
  let executionContract: BuildProductSynthesisInput["executionContract"] =
    null;
  if (executionContractId) {
    const contract =
      await input.oa.executionContractServices.contracts.findById(
        executionContractId,
      );
    if (contract) {
      executionContract = {
        executionContractId: contract.executionContractId,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        cycleInstanceId: contract.cycleInstanceId ?? null,
      };
    }
  }

  const attemptId = bindings?.executionAttemptId ?? null;
  let attempt: BuildProductSynthesisInput["attempt"] = null;
  if (attemptId) {
    const att =
      await input.oa.executionAttemptServices.attempts.findById(attemptId);
    if (att) {
      attempt = {
        attemptId: att.attemptId,
        status: att.status,
        resultRef: att.resultRef ?? null,
      };
    }
  }

  return {
    ok: true,
    input: {
      projectId,
      claimEvaluation,
      executionContract,
      attempt,
      evidence,
      reviewBundle,
      title: input.title,
      generatedAt: input.generatedAt,
      cycleInstanceId: bindings?.cycleInstanceId ?? null,
    },
  };
}

export function synthesisErrorMessage(err: unknown): string {
  if (isSynthesisDomainError(err)) {
    return err.message || err.detailCode;
  }
  if (err instanceof Error && err.message.trim()) {
    return err.message;
  }
  return "Opération synthèse indisponible.";
}
```

### projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.tsx

_Lines: 334_

```tsx
"use client";

import { useCallback, useEffect, useId, useMemo, useState } from "react";
import {
  getProductSynthesisAction,
  listProductSynthesesAction,
  searchProductSynthesesAction,
  type ProductSynthesisListItem,
} from "@/features/project-assistant/synthesisActions";
import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";
import {
  formatSynthesisGeneratedAt,
  presentSynthesisStatus,
  presentSynthesisVerdictLabel,
  SYNTHESIS_SECTION_SPECS,
} from "./synthesisPresentation";
import styles from "./SynthesesSurface.module.css";

export type SynthesesSurfaceProps = {
  projectId: string;
  initialSynthesisId?: string | null;
  onReturnToOverview: () => void;
};

function verdictTone(
  label: ProductSynthesisProjection["verdictLabel"],
): "ok" | "warn" | "danger" | undefined {
  switch (label) {
    case "atteint":
      return "ok";
    case "echec":
      return "danger";
    case "non_prouve":
    case "indetermine":
      return "warn";
    default:
      return undefined;
  }
}

export function SynthesesSurface({
  projectId,
  initialSynthesisId,
  onReturnToOverview,
}: SynthesesSurfaceProps) {
  const searchId = useId();
  const [items, setItems] = useState<readonly ProductSynthesisListItem[]>([]);
  const [query, setQuery] = useState("");
  const [searchBusy, setSearchBusy] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(
    initialSynthesisId ?? null,
  );
  const [detail, setDetail] = useState<ProductSynthesisProjection | null>(null);
  const [detailBusy, setDetailBusy] = useState(false);
  const [mobileShowDetail, setMobileShowDetail] = useState(
    Boolean(initialSynthesisId),
  );

  const loadFullList = useCallback(async () => {
    setLoadError(null);
    const result = await listProductSynthesesAction({ projectId });
    if (!result.ok) {
      setLoadError(result.message);
      setItems([]);
      return;
    }
    setItems(result.items);
    setSelectedId((prev) => {
      if (prev && result.items.some((i) => i.synthesisId === prev)) {
        return prev;
      }
      return result.items[0]?.synthesisId ?? null;
    });
  }, [projectId]);

  useEffect(() => {
    void loadFullList();
  }, [loadFullList]);

  useEffect(() => {
    if (initialSynthesisId) {
      setSelectedId(initialSynthesisId);
      setMobileShowDetail(true);
    }
  }, [initialSynthesisId]);

  useEffect(() => {
    let cancelled = false;
    if (!selectedId) {
      setDetail(null);
      return;
    }
    setDetailBusy(true);
    void getProductSynthesisAction({ projectId, synthesisId: selectedId }).then(
      (result) => {
        if (cancelled) return;
        setDetailBusy(false);
        if (result.ok) setDetail(result.synthesis);
        else {
          setDetail(null);
          setLoadError(result.message);
        }
      },
    );
    return () => {
      cancelled = true;
    };
  }, [projectId, selectedId]);

  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      void loadFullList();
      return;
    }
    const handle = window.setTimeout(() => {
      setSearchBusy(true);
      void searchProductSynthesesAction({ projectId, query: trimmed }).then(
        (result) => {
          setSearchBusy(false);
          if (result.ok) setItems(result.items);
          else setLoadError(result.message);
        },
      );
    }, 280);
    return () => window.clearTimeout(handle);
  }, [projectId, query, loadFullList]);

  const listEmpty = items.length === 0 && !searchBusy && !loadError;

  const selectedListItem = useMemo(
    () => items.find((i) => i.synthesisId === selectedId) ?? null,
    [items, selectedId],
  );

  const openDetailMobile = (synthesisId: string) => {
    setSelectedId(synthesisId);
    setMobileShowDetail(true);
  };

  return (
    <div className={styles.root} data-testid="project-syntheses-surface">
      <header className={styles.head}>
        <div>
          <button
            type="button"
            className={styles.backLink}
            onClick={onReturnToOverview}
            data-testid="project-syntheses-return-overview"
          >
            ← Retour à l&apos;Aperçu
          </button>
          <h2 className={styles.title}>Synthèses</h2>
          <p className={styles.subtitle}>
            Analyses complètes produites après un travail significatif du
            projet.
          </p>
        </div>
        <span
          className={styles.nonAuthChip}
          data-testid="project-syntheses-authority-none"
        >
          NON-AUTORITATIVE
        </span>
      </header>

      {loadError ? (
        <p className={styles.empty} role="alert">
          {loadError}
        </p>
      ) : null}

      {listEmpty ? (
        <p className={styles.empty} data-testid="project-syntheses-empty">
          Aucune synthèse produit n&apos;est encore disponible. Elle n&apos;est
          pas inventée depuis la conversation — elle apparaît lorsque la lignée
          Product (ClaimEvaluation et faits liés) permet une matérialisation
          déterministe.
        </p>
      ) : (
        <div className={styles.body}>
          <div
            className={styles.listCol}
            data-mobile-hidden={mobileShowDetail ? "true" : "false"}
          >
            <div className={styles.listHead}>
              <label className={styles.searchLabel} htmlFor={searchId}>
                Rechercher dans les synthèses
              </label>
              <input
                id={searchId}
                type="search"
                className={styles.searchInput}
                data-testid="project-syntheses-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher dans les titres et le contenu…"
                autoComplete="off"
              />
            </div>
            {searchBusy ? (
              <p className={styles.loading}>Recherche…</p>
            ) : null}
            <ul className={styles.list} data-testid="project-syntheses-list">
              {items.map((item) => (
                <li key={item.synthesisId} className={styles.listItem}>
                  <button
                    type="button"
                    className={styles.listButton}
                    data-testid="project-syntheses-item"
                    data-synthesis-id={item.synthesisId}
                    data-selected={
                      item.synthesisId === selectedId ? "true" : "false"
                    }
                    aria-current={
                      item.synthesisId === selectedId ? "true" : undefined
                    }
                    onClick={() => {
                      setSelectedId(item.synthesisId);
                      if (
                        typeof window !== "undefined" &&
                        window.matchMedia("(max-width: 899px)").matches
                      ) {
                        setMobileShowDetail(true);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openDetailMobile(item.synthesisId);
                      }
                    }}
                  >
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.itemMetaRow}>
                      <span
                        className={styles.itemVerdict}
                        data-tone={verdictTone(item.verdictLabel)}
                      >
                        {presentSynthesisVerdictLabel(item.verdictLabel)}
                      </span>
                      <span className={styles.itemMeta}>
                        {formatSynthesisGeneratedAt(item.generatedAt)}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={styles.detailCol}
            data-mobile-hidden={mobileShowDetail ? "false" : "true"}
            data-testid="project-syntheses-detail"
          >
            {mobileShowDetail ? (
              <div className={`${styles.mobileBackRow} ${styles.detailOnly}`}>
                <button
                  type="button"
                  className={styles.backBtn}
                  data-testid="project-syntheses-back"
                  onClick={() => setMobileShowDetail(false)}
                >
                  ← Synthèses
                </button>
              </div>
            ) : null}

            {detailBusy && !detail ? (
              <p className={styles.loading}>Chargement de la synthèse…</p>
            ) : null}

            {detail ? (
              <div className={styles.detailInner}>
                <header className={styles.detailHead}>
                  <div className={styles.detailChips}>
                    <span
                      className={styles.chip}
                      data-tone={verdictTone(detail.verdictLabel)}
                    >
                      {presentSynthesisVerdictLabel(detail.verdictLabel)}
                    </span>
                    <span className={styles.chip}>
                      {presentSynthesisStatus(detail.status)}
                    </span>
                    <span className={styles.chip}>
                      {formatSynthesisGeneratedAt(detail.generatedAt)}
                    </span>
                  </div>
                  <h3 className={styles.detailTitle}>{detail.title}</h3>
                  <p className={styles.detailSubject}>{detail.subject}</p>
                </header>

                <div className={styles.sections}>
                  {SYNTHESIS_SECTION_SPECS.map((spec) => (
                    <section
                      key={spec.key}
                      className={styles.section}
                      data-testid={`project-syntheses-section-${spec.testIdSuffix}`}
                      aria-labelledby={`syn-section-${spec.key}`}
                    >
                      <h4
                        className={styles.sectionTitle}
                        id={`syn-section-${spec.key}`}
                      >
                        <span className={styles.sectionOrdinal} aria-hidden="true">
                          {spec.ordinal}
                        </span>
                        {spec.label}
                      </h4>
                      <p className={styles.sectionBody}>
                        {detail.sections[spec.key]}
                      </p>
                    </section>
                  ))}
                </div>
              </div>
            ) : selectedListItem && !detailBusy ? (
              <p className={styles.empty}>
                Impossible d&apos;afficher cette synthèse.
              </p>
            ) : !selectedId ? (
              <p className={styles.empty}>
                Sélectionnez une synthèse dans la liste.
              </p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
```

### projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.module.css

_Lines: 395_

```css
/*
 * P5-S04 Synthèses — Figma 164:3 / 190:175 / 190:433 / 190:455 (--pm6-* only).
 */

.root {
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
  min-height: 0;
  padding: 14px var(--ws-pad-x, 24px) 24px;
}

.head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.title {
  margin: 8px 0 0;
  font-size: 1.375rem;
  font-weight: 650;
  color: var(--pm6-ink);
  line-height: 1.25;
}

.subtitle {
  margin: 6px 0 0;
  font-size: 0.875rem;
  color: var(--pm6-muted);
  line-height: 1.45;
  max-width: 42ch;
}

.backLink {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0;
  border: none;
  background: transparent;
  font: inherit;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--pm6-accent);
  cursor: pointer;
}

.backLink:hover {
  color: var(--pm6-accent-strong, var(--pm6-accent));
  text-decoration: underline;
}

.backLink:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring);
  border-radius: 4px;
}

.backBtn {
  flex: 0 0 auto;
  min-height: 36px;
  padding: 6px 12px;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-sm);
  background: var(--pm6-canvas-raised);
  font: inherit;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--pm6-accent);
  cursor: pointer;
}

.backBtn:hover {
  color: var(--pm6-ink);
  border-color: var(--pm6-border-strong);
}

.backBtn:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring);
}

.nonAuthChip {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 3px 10px;
  border-radius: 7px;
  border: 1px solid var(--pm6-border);
  background: var(--pm6-canvas-raised);
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--pm6-muted-strong);
}

.body {
  display: grid;
  grid-template-columns: minmax(0, 360px) minmax(0, 1fr);
  gap: 16px;
  min-height: 0;
  align-items: stretch;
}

.listCol {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-md);
  background: var(--pm6-canvas-raised);
  overflow: hidden;
}

.listHead {
  padding: 12px 14px;
  border-bottom: 1px solid var(--pm6-border);
}

.searchLabel {
  display: block;
  margin-bottom: 6px;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pm6-muted-faint);
}

.searchInput {
  box-sizing: border-box;
  width: 100%;
  min-height: 36px;
  padding: 8px 10px;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-sm);
  background: var(--pm6-canvas);
  font: inherit;
  font-size: 0.8125rem;
  color: var(--pm6-ink);
}

.searchInput:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring);
}

.list {
  margin: 0;
  padding: 6px;
  list-style: none;
  overflow: auto;
  max-height: min(70vh, 640px);
}

.listItem {
  margin: 0;
}

.listButton {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: var(--pm6-radius-sm);
  background: transparent;
  text-align: left;
  font: inherit;
  cursor: pointer;
  color: var(--pm6-ink);
}

.listButton:hover {
  background: color-mix(in srgb, var(--pm6-accent) 6%, transparent);
}

.listButton[data-selected="true"] {
  background: color-mix(in srgb, var(--pm6-accent) 10%, var(--pm6-canvas));
  border-color: color-mix(in srgb, var(--pm6-accent) 22%, var(--pm6-border));
}

.listButton:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring);
}

.itemTitle {
  font-size: 0.875rem;
  font-weight: 650;
  line-height: 1.3;
}

.itemMetaRow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 2px;
}

.itemVerdict {
  font-size: 0.6875rem;
  font-weight: 650;
  color: var(--pm6-muted-strong);
}

.itemVerdict[data-tone="ok"] {
  color: var(--pm6-ok);
}

.itemVerdict[data-tone="warn"] {
  color: var(--pm6-warn);
}

.itemVerdict[data-tone="danger"] {
  color: var(--pm6-danger);
}

.itemMeta {
  font-size: 0.6875rem;
  color: var(--pm6-muted);
}

.detailCol {
  min-width: 0;
  min-height: 0;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-md);
  background: var(--pm6-canvas-raised);
  overflow: auto;
  max-height: min(75vh, 720px);
}

.detailInner {
  padding: 18px 20px 24px;
}

.detailHead {
  margin-bottom: 16px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--pm6-border);
}

.detailTitle {
  margin: 10px 0 6px;
  font-size: 1.125rem;
  font-weight: 650;
  line-height: 1.3;
}

.detailSubject {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--pm6-muted);
  line-height: 1.4;
}

.detailChips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 2px 8px;
  border-radius: 6px;
  border: 1px solid var(--pm6-border);
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--pm6-muted-strong);
  background: var(--pm6-canvas);
}

.chip[data-tone="ok"] {
  color: var(--pm6-ok);
  border-color: color-mix(in srgb, var(--pm6-ok) 28%, var(--pm6-border));
  background: var(--pm6-ok-tint);
}

.chip[data-tone="warn"] {
  color: var(--pm6-warn);
  border-color: color-mix(in srgb, var(--pm6-warn) 28%, var(--pm6-border));
  background: var(--pm6-warn-tint);
}

.chip[data-tone="danger"] {
  color: var(--pm6-danger);
  border-color: color-mix(in srgb, var(--pm6-danger) 28%, var(--pm6-border));
  background: var(--pm6-danger-tint);
}

.sections {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.section {
  padding: 14px 0;
  border-bottom: 1px solid var(--pm6-border);
  background: transparent;
}

.section:last-child {
  border-bottom: none;
  padding-bottom: 4px;
}

.sectionTitle {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 0 0 8px;
  font-size: 0.6875rem;
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pm6-muted-faint);
}

.sectionOrdinal {
  font-variant-numeric: tabular-nums;
  color: var(--pm6-muted);
}

.sectionBody {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--pm6-ink);
  white-space: pre-wrap;
}

.empty {
  margin: 0;
  padding: 24px 16px;
  font-size: 0.8125rem;
  color: var(--pm6-muted);
  line-height: 1.45;
  text-align: center;
}

.loading {
  margin: 0;
  padding: 16px;
  font-size: 0.8125rem;
  color: var(--pm6-muted);
}

.mobileBackRow {
  display: none;
}

.detailOnly {
  display: none;
}

@media (max-width: 1199px) {
  .body {
    grid-template-columns: minmax(0, 300px) minmax(0, 1fr);
  }
}

@media (max-width: 899px) {
  .body {
    grid-template-columns: minmax(0, 1fr);
  }

  .listCol[data-mobile-hidden="true"] {
    display: none;
  }

  .detailCol[data-mobile-hidden="true"] {
    display: none;
  }

  .mobileBackRow {
    display: block;
    margin-bottom: 8px;
  }

  .detailOnly {
    display: block;
  }
}
```

### projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/synthesisPresentation.ts

_Lines: 108_

```ts
import type {
  ProductSynthesisProjection,
  SynthesisSections,
  SynthesisVerdictLabel,
} from "@/lib/oa/synthesis";

export type SynthesisSectionKey = keyof SynthesisSections;

/** Nine sections — P3 / Figma 164:3 contract (full labels). */
export const SYNTHESIS_SECTION_SPECS: readonly {
  readonly key: SynthesisSectionKey;
  readonly label: string;
  readonly testIdSuffix: string;
  readonly ordinal: string;
}[] = [
  { key: "summary", label: "Résumé", testIdSuffix: "summary", ordinal: "01" },
  {
    key: "planned",
    label: "Ce qui était prévu",
    testIdSuffix: "planned",
    ordinal: "02",
  },
  {
    key: "done",
    label: "Ce qui a été réalisé",
    testIdSuffix: "done",
    ordinal: "03",
  },
  {
    key: "evaluation",
    label: "Évaluation du résultat",
    testIdSuffix: "evaluation",
    ordinal: "04",
  },
  {
    key: "gaps",
    label: "Écarts, réserves et blocages",
    testIdSuffix: "gaps",
    ordinal: "05",
  },
  {
    key: "impact",
    label: "Impact sur le projet",
    testIdSuffix: "impact",
    ordinal: "06",
  },
  { key: "verdict", label: "Verdict", testIdSuffix: "verdict", ordinal: "07" },
  {
    key: "recommendation",
    label: "Recommandation / prochaine étape",
    testIdSuffix: "recommendation",
    ordinal: "08",
  },
  {
    key: "verified",
    label: "Éléments vérifiés",
    testIdSuffix: "verified",
    ordinal: "09",
  },
] as const;

export function presentSynthesisVerdictLabel(
  label: SynthesisVerdictLabel,
): string {
  switch (label) {
    case "atteint":
      return "Atteint";
    case "non_prouve":
      return "Non prouvé";
    case "echec":
      return "Échec";
    case "indetermine":
      return "Indéterminé";
    default:
      return label;
  }
}

export function presentSynthesisStatus(status: ProductSynthesisProjection["status"]): string {
  switch (status) {
    case "current":
      return "Courante";
    case "superseded":
      return "Remplacée";
    case "stale_source":
      return "Source obsolète";
    default:
      return status;
  }
}

export function synthesisSummaryExcerpt(
  synthesis: ProductSynthesisProjection,
  maxLen = 220,
): string {
  const text = synthesis.sections.summary.trim();
  if (text.length <= maxLen) return text;
  return `${text.slice(0, maxLen - 1).trim()}…`;
}

export function formatSynthesisGeneratedAt(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}
```

### projects/sfia-studio/app/__tests__/oa/synthesis/p5.s04.productDerivedSynthesis.d0.test.ts

_Lines: 567_

```ts
/**
 * P5-S04 — Product-derived Synthesis (NON-AUTHORITATIVE / NOT Truth C).
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import {
  CLAIM_EVALUATION_SCHEMA_VERSION,
  type ClaimEvaluation,
  type ClaimEvaluationStatus,
} from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
import {
  openProductSqlite,
  PRODUCT_SCHEMA_VERSION,
  PRODUCT_SCHEMA_VERSION_M8,
  PRODUCT_SCHEMA_VERSION_M9,
  SqliteProductStore,
} from "@/lib/oa/project";
import {
  ABSENT_RECOMMENDATION_TEXT,
  createSqliteSynthesisServices,
  isSynthesisDomainError,
  validateProductSynthesisShape,
  type ProductSynthesisProjection,
} from "@/lib/oa/synthesis";

const NOW = "2026-10-05T12:00:00.000Z";
const tempDirs: string[] = [];
const openStores: SqliteProductStore[] = [];

afterEach(() => {
  while (openStores.length) {
    try {
      openStores.pop()?.close();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

function tempDbPath(name = "product.sqlite"): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p5-s04-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function openStore(dbPath: string): SqliteProductStore {
  const store = new SqliteProductStore(dbPath);
  openStores.push(store);
  return store;
}

function insertProject(store: SqliteProductStore, projectId: string): void {
  const payload = JSON.stringify({
    projectId,
    title: `Project ${projectId}`,
    status: "active",
  });
  store.db
    .prepare(
      `INSERT INTO oa_projects(project_id, status, current_lps_version_id, payload_json, created_at, updated_at)
       VALUES (?, 'active', NULL, ?, ?, ?)`,
    )
    .run(projectId, payload, NOW, NOW);
}

function makeClaimEvaluation(
  overrides: Partial<ClaimEvaluation> & {
    claimEvaluationId: string;
    status?: ClaimEvaluationStatus;
    projectId?: string;
  },
): ClaimEvaluation {
  const projectId = overrides.projectId ?? "prj:s04-a";
  const status = overrides.status ?? "pass";
  const base: ClaimEvaluation = {
    schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
    claimEvaluationId: overrides.claimEvaluationId,
    claimType: "technique",
    claimStatement:
      overrides.claimStatement ??
      "Temporary artifact produced for contract result",
    criticality: "non_critical",
    evaluationMethod: "deterministic",
    requiredEvidenceRefs: overrides.requiredEvidenceRefs ?? ["ev:s04-1"],
    reviewBundleId: overrides.reviewBundleId ?? "rb:s04-1",
    reviewBundleVersion: overrides.reviewBundleVersion ?? 2,
    status,
    proposedBy: LOCAL_PILOTE_ACTOR,
    proposedAt: NOW,
    evaluatedAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${overrides.claimEvaluationId}`,
      actor: LOCAL_PILOTE_ACTOR,
      source: "review",
      timestamp: NOW,
      correlationId: `cor:${overrides.claimEvaluationId}`,
      projectId,
    },
    version: 1,
    subjectKind: "execution_contract_result",
    contractResultBindings: {
      projectId,
      cycleInstanceId: "cyc:s04-1",
      executionContractId: "xct:s04-1",
      executionContractVersion: 1,
      executionContractSemanticFingerprint: "fp:s04-contract",
      executionAttemptId: "xat:s04-1",
      reviewBundleId: overrides.reviewBundleId ?? "rb:s04-1",
      reviewBundleVersion: 2,
      evidenceRefs: ["ev:s04-1"],
    },
  };
  return { ...base, ...overrides, status };
}

function insertClaimEvaluationRow(
  store: SqliteProductStore,
  claim: ClaimEvaluation,
): void {
  const projectId = claim.contractResultBindings?.projectId ?? null;
  store.db
    .prepare(
      `INSERT INTO oa_claim_evaluations(
         claim_evaluation_id, project_id, status, idempotency_key, version,
         payload_json, created_at, updated_at
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      claim.claimEvaluationId,
      projectId,
      claim.status,
      claim.idempotencyKey ?? null,
      claim.version,
      JSON.stringify(claim),
      claim.proposedAt,
      claim.proposedAt,
    );
}

function tableExists(db: DatabaseSync, name: string): boolean {
  const row = db
    .prepare(`SELECT name FROM sqlite_master WHERE type='table' AND name=?`)
    .get(name) as { name?: string } | undefined;
  return row?.name === name;
}

describe("P5-S04 Product-derived Synthesis D0", () => {
  it("T01 — lineage requires ClaimEvaluation", () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });
    expect(() =>
      svc.build({
        projectId: "prj:s04-a",
        // @ts-expect-error intentional missing CE
        claimEvaluation: null,
      }),
    ).toThrow(/ClaimEvaluation|LINEAGE/i);

    try {
      // @ts-expect-error intentional missing CE
      svc.build({ projectId: "prj:s04-a", claimEvaluation: undefined });
      expect.unreachable("expected throw");
    } catch (err) {
      expect(isSynthesisDomainError(err)).toBe(true);
      if (isSynthesisDomainError(err)) {
        expect(err.detailCode).toBe(
          "SYNTHESIS_LINEAGE_REQUIRES_CLAIM_EVALUATION",
        );
      }
    }
  });

  it("T04 — canonical verdict from ClaimEvaluation via projectContractResultVerdict", () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });

    const cases: Array<{
      status: ClaimEvaluationStatus;
      verdict: ProductSynthesisProjection["canonicalVerdict"];
      label: ProductSynthesisProjection["verdictLabel"];
    }> = [
      { status: "pass", verdict: "PASS", label: "atteint" },
      { status: "fail", verdict: "FAIL", label: "echec" },
      { status: "not_proven", verdict: "NOT_PROVEN", label: "non_prouve" },
      { status: "pending", verdict: "NOT_PROVEN", label: "non_prouve" },
      { status: "waived", verdict: "NOT_PROVEN", label: "non_prouve" },
    ];

    for (const c of cases) {
      const built = svc.build({
        projectId: "prj:s04-a",
        claimEvaluation: makeClaimEvaluation({
          claimEvaluationId: `clm:s04-${c.status}`,
          status: c.status,
        }),
        generatedAt: NOW,
      });
      expect(built.canonicalVerdict).toBe(c.verdict);
      expect(built.verdictLabel).toBe(c.label);
    }
  });

  it("T05 — recommendation is not invented when absent", () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:s04-rec" }),
      generatedAt: NOW,
    });
    expect(built.sections.recommendation).toBe(ABSENT_RECOMMENDATION_TEXT);
    expect(built.sourceBindings.recommendationRef).toBeNull();

    const withRec = svc.build({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:s04-rec-2",
      }),
      recommendation: {
        text: "Replanifier le prochain cycle.",
        ref: "rec:s04-1",
      },
      generatedAt: NOW,
    });
    expect(withRec.sections.recommendation).toBe(
      "Replanifier le prochain cycle.",
    );
    expect(withRec.sourceBindings.recommendationRef).toBe("rec:s04-1");
  });

  it("T06 — nine sections are non-empty honest strings", () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:s04-sec" }),
      executionContract: {
        executionContractId: "xct:s04-1",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        cycleInstanceId: "cyc:s04-1",
      },
      attempt: {
        attemptId: "xat:s04-1",
        status: "succeeded",
        resultRef: "res:s04-1",
      },
      evidence: [{ evidenceId: "ev:s04-1", status: "verified", type: "artifact" }],
      reviewBundle: {
        reviewBundleId: "rb:s04-1",
        status: "frozen",
        completeness: "complete",
      },
      generatedAt: NOW,
    });
    const keys = [
      "summary",
      "planned",
      "done",
      "evaluation",
      "gaps",
      "impact",
      "verdict",
      "recommendation",
      "verified",
    ] as const;
    for (const key of keys) {
      expect(typeof built.sections[key]).toBe("string");
      expect(built.sections[key].trim().length).toBeGreaterThan(0);
    }
    expect(validateProductSynthesisShape(built)).toBeNull();
  });

  it("T07 — persistence survives reopen", async () => {
    const dbPath = tempDbPath();
    const storeA = openStore(dbPath);
    insertProject(storeA, "prj:s04-a");
    const svcA = createSqliteSynthesisServices({ productStore: storeA });
    const materialized = await svcA.materialize({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:s04-dur" }),
      title: "Synthèse durable",
      generatedAt: NOW,
    });
    storeA.close();
    openStores.pop();

    const storeB = openStore(dbPath);
    const svcB = createSqliteSynthesisServices({ productStore: storeB });
    const restored = await svcB.repository.findById(materialized.synthesisId);
    expect(restored).not.toBeNull();
    expect(restored?.title).toBe("Synthèse durable");
    expect(restored?.authority).toBe("none");
    expect(restored?.sourceFingerprint).toBe(materialized.sourceFingerprint);
    expect(restored?.sections.summary).toContain("clm:s04-dur");
  });

  it("T08 — deleteAll + rebuild; projects and ClaimEvaluations remain", async () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:s04-rebuild" });
    insertClaimEvaluationRow(store, ce);

    const svc = createSqliteSynthesisServices({ productStore: store });
    const first = await svc.materialize({
      projectId: "prj:s04-a",
      claimEvaluation: ce,
      evidence: [{ evidenceId: "ev:s04-1" }],
      generatedAt: NOW,
    });
    expect(first.status).toBe("current");

    const rebuilt = await svc.rebuild("prj:s04-a", [
      {
        projectId: "prj:s04-a",
        claimEvaluation: ce,
        evidence: [{ evidenceId: "ev:s04-1" }],
        generatedAt: "2026-10-05T13:00:00.000Z",
      },
    ]);
    expect(rebuilt).toHaveLength(1);
    expect(rebuilt[0]?.status).toBe("current");
    expect(rebuilt[0]?.sourceFingerprint).toBe(first.sourceFingerprint);

    const projectRow = store.db
      .prepare(`SELECT project_id FROM oa_projects WHERE project_id = ?`)
      .get("prj:s04-a") as { project_id?: string } | undefined;
    expect(projectRow?.project_id).toBe("prj:s04-a");

    const ceRow = store.db
      .prepare(
        `SELECT claim_evaluation_id, status, payload_json
         FROM oa_claim_evaluations WHERE claim_evaluation_id = ?`,
      )
      .get("clm:s04-rebuild") as
      | { claim_evaluation_id: string; status: string; payload_json: string }
      | undefined;
    expect(ceRow?.claim_evaluation_id).toBe("clm:s04-rebuild");
    expect(ceRow?.status).toBe("pass");
    expect(JSON.parse(ceRow!.payload_json).claimEvaluationId).toBe(
      "clm:s04-rebuild",
    );

    const listed = await svc.repository.listByProject("prj:s04-a");
    expect(listed).toHaveLength(1);
    expect(listed[0]?.synthesisId).not.toBe(first.synthesisId);
  });

  it("T09 — idempotence for same fingerprint", async () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });
    const input = {
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:s04-idem" }),
      evidence: [{ evidenceId: "ev:s04-1" }],
      generatedAt: NOW,
    };
    const a = await svc.materialize(input);
    const b = await svc.materialize({
      ...input,
      generatedAt: "2026-10-05T14:00:00.000Z",
    });
    expect(b.synthesisId).toBe(a.synthesisId);
    expect(b.sourceFingerprint).toBe(a.sourceFingerprint);
    const listed = await svc.repository.listByProject("prj:s04-a");
    expect(listed).toHaveLength(1);
  });

  it("T10 — supersession on fingerprint change", async () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:s04-super" });
    const first = await svc.materialize({
      projectId: "prj:s04-a",
      claimEvaluation: ce,
      evidence: [{ evidenceId: "ev:s04-1" }],
      generatedAt: NOW,
    });
    const second = await svc.materialize({
      projectId: "prj:s04-a",
      claimEvaluation: ce,
      evidence: [{ evidenceId: "ev:s04-1" }, { evidenceId: "ev:s04-2" }],
      generatedAt: "2026-10-05T15:00:00.000Z",
    });
    expect(second.synthesisId).not.toBe(first.synthesisId);
    expect(second.sourceFingerprint).not.toBe(first.sourceFingerprint);
    expect(second.supersedes).toBe(first.synthesisId);
    expect(second.status).toBe("current");
    expect(second.version).toBe(first.version + 1);

    const old = await svc.repository.findById(first.synthesisId);
    expect(old?.status).toBe("superseded");
    const listed = await svc.repository.listByProject("prj:s04-a");
    expect(listed).toHaveLength(2);
  });

  it("T11 — cross-project isolation", async () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    insertProject(store, "prj:s04-b");
    const svc = createSqliteSynthesisServices({ productStore: store });
    await svc.materialize({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:s04-a",
        projectId: "prj:s04-a",
      }),
      generatedAt: NOW,
    });
    await svc.materialize({
      projectId: "prj:s04-b",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:s04-b",
        projectId: "prj:s04-b",
      }),
      generatedAt: NOW,
    });
    const a = await svc.repository.listByProject("prj:s04-a");
    const b = await svc.repository.listByProject("prj:s04-b");
    expect(a).toHaveLength(1);
    expect(b).toHaveLength(1);
    expect(a[0]?.projectId).toBe("prj:s04-a");
    expect(b[0]?.projectId).toBe("prj:s04-b");
    expect(a[0]?.synthesisId).not.toBe(b[0]?.synthesisId);
  });

  it("T12 — search positive match within project", async () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });
    await svc.materialize({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:s04-search",
        claimStatement: "Artifact temporaire campus360",
      }),
      title: "Synthèse campus360 unique-token-alpha",
      generatedAt: NOW,
    });
    const hits = await svc.search("prj:s04-a", "unique-token-alpha");
    expect(hits.length).toBeGreaterThanOrEqual(1);
    expect(hits[0]?.title).toContain("unique-token-alpha");
  });

  it("T13 — search negative / no cross-project leakage", async () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    insertProject(store, "prj:s04-b");
    const svc = createSqliteSynthesisServices({ productStore: store });
    await svc.materialize({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:s04-neg-a",
        projectId: "prj:s04-a",
      }),
      title: "SecretTokenOnlyInA",
      generatedAt: NOW,
    });
    const miss = await svc.search("prj:s04-a", "does-not-exist-zzz");
    expect(miss).toHaveLength(0);
    const leaked = await svc.search("prj:s04-b", "SecretTokenOnlyInA");
    expect(leaked).toHaveLength(0);
  });

  it("T16 — authority remains none and cannot be mutated", async () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:s04-auth" }),
      generatedAt: NOW,
    });
    expect(built.authority).toBe("none");
    expect(built.generatedBy).toBe(
      "deterministic_product_synthesis_builder_s04",
    );

    const mutated = {
      ...built,
      authority: "truth_c" as unknown as "none",
    };
    const violation = validateProductSynthesisShape(
      mutated as ProductSynthesisProjection,
    );
    expect(violation?.detailCode).toBe("SYNTHESIS_AUTHORITY_FORBIDDEN");

    await expect(
      svc.repository.create(mutated as ProductSynthesisProjection),
    ).rejects.toSatisfy(
      (err: unknown) =>
        isSynthesisDomainError(err) &&
        err.detailCode === "SYNTHESIS_AUTHORITY_FORBIDDEN",
    );
  });

  it("M8→M9 migration creates oa_syntheses; unsupported future schema fails closed", () => {
    expect(PRODUCT_SCHEMA_VERSION).toBe(PRODUCT_SCHEMA_VERSION_M9);
    expect(PRODUCT_SCHEMA_VERSION_M9).toBe("m9-0.1.0");

    const dbPath = tempDbPath("m8-legacy.sqlite");
    {
      const store = openStore(dbPath);
      insertProject(store, "prj:s04-mig");
      expect(tableExists(store.db, "oa_syntheses")).toBe(true);
      store.db.exec("DROP TABLE IF EXISTS oa_syntheses");
      store.db
        .prepare(`UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`)
        .run(PRODUCT_SCHEMA_VERSION_M8);
      store.close();
      openStores.pop();
    }

    const migrated = openStore(dbPath);
    const version = migrated.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION_M9);
    expect(tableExists(migrated.db, "oa_syntheses")).toBe(true);
    expect(tableExists(migrated.db, "oa_claim_evaluations")).toBe(true);
    const project = migrated.db
      .prepare(`SELECT project_id FROM oa_projects WHERE project_id = ?`)
      .get("prj:s04-mig") as { project_id?: string } | undefined;
    expect(project?.project_id).toBe("prj:s04-mig");
    migrated.close();
    openStores.pop();

    const futurePath = tempDbPath("future.sqlite");
    const future = new DatabaseSync(futurePath);
    future.exec(`
CREATE TABLE schema_meta (key TEXT PRIMARY KEY NOT NULL, value TEXT NOT NULL);
INSERT INTO schema_meta(key, value) VALUES ('schema_version', 'm99-future');
`);
    future.close();
    expect(() => openProductSqlite(futurePath)).toThrow(
      /product_sqlite_unsupported_schema/,
    );
  });
});
```

### projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx

_Lines: 383_

```tsx
/** @vitest-environment jsdom */
/**
 * P5-S04 — Synthèses UI (Overview / Conversation teasers + surface read-only).
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";
import { SynthesesSurface } from "@/features/pre-m6-product-ui/surfaces/SynthesesSurface";
import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";

const mockSynthesis: ProductSynthesisProjection = {
  synthesisId: "syn:ui-1",
  projectId: "prj:p5-s04",
  cycleInstanceId: "cyc:1",
  title: "Synthèse UI test",
  subject: "Affirmation de test",
  status: "current",
  verdictLabel: "atteint",
  canonicalVerdict: "PASS",
  sections: {
    summary: "Résumé déterministe pour UI.",
    planned: "Prévu.",
    done: "Réalisé.",
    evaluation: "Évaluation.",
    gaps: "Manques.",
    impact: "Impact.",
    verdict: "Verdict.",
    recommendation: "Aucune recommandation Product enregistrée.",
    verified: "Vérifié.",
  },
  sourceBindings: {
    projectId: "prj:p5-s04",
    cycleInstanceId: "cyc:1",
    executionContractId: "xct:1",
    attemptId: "xat:1",
    evidenceIds: ["ev:1"],
    reviewBundleId: "rb:1",
    claimEvaluationId: "clm:1",
    recommendationRef: null,
  },
  sourceFingerprint: "fp:ui",
  generatedAt: "2026-10-05T12:00:00.000Z",
  generatedBy: "deterministic_product_synthesis_builder_s04",
  authority: "none",
  supersedes: null,
  version: 1,
};

const {
  getProjectRuntimeActionMock,
  useProductConversationMock,
  deriveContinuityMock,
  readCurrentContinuityMock,
  readHistoryMock,
  latestSynthesisMock,
  listSynthesesMock,
  getSynthesisMock,
  searchSynthesesMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  useProductConversationMock: vi.fn(),
  deriveContinuityMock: vi.fn(),
  readCurrentContinuityMock: vi.fn(),
  readHistoryMock: vi.fn(),
  latestSynthesisMock: vi.fn(),
  listSynthesesMock: vi.fn(),
  getSynthesisMock: vi.fn(),
  searchSynthesesMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: (...args: unknown[]) =>
    getProjectRuntimeActionMock(...args),
  setProjectRepositoryBindingAction: vi.fn(),
}));

vi.mock("@/features/pre-m6-product-ui/hooks/useProductConversation", () => ({
  useProductConversation: (...args: unknown[]) =>
    useProductConversationMock(...args),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2DeriveGovernedExecutionContinuityAction: (...args: unknown[]) =>
    deriveContinuityMock(...args),
  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
    readCurrentContinuityMock(...args),
  w2ReadProjectHistoryAction: (...args: unknown[]) => readHistoryMock(...args),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2InspectExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: vi.fn(),
  w2ReconcileGovernedExecutionAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/synthesisActions", () => ({
  getLatestRelevantProductSynthesisAction: (...args: unknown[]) =>
    latestSynthesisMock(...args),
  listProductSynthesesAction: (...args: unknown[]) => listSynthesesMock(...args),
  getProductSynthesisAction: (...args: unknown[]) => getSynthesisMock(...args),
  searchProductSynthesesAction: (...args: unknown[]) =>
    searchSynthesesMock(...args),
  materializeProductSynthesisFromLineageAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantActiveCycleWorkspaceAction: vi.fn().mockResolvedValue({
    ok: true,
    cycleTypeId: null,
    repositoryWorkspaceSegment: null,
  }),
  projectAssistantConfirmReservationResolutionAction: vi.fn(),
  projectAssistantDeferReservationAction: vi.fn(),
  projectAssistantPilotLifecycleProjection: vi.fn(),
  projectAssistantPilotLifecycleAction: vi.fn(),
  projectAssistantRecordObligationPolicyAction: vi.fn(),
  projectAssistantCompleteTrajectoryStepAction: vi.fn(),
  projectAssistantResolveBlockingReservationAction: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeAction: vi.fn().mockResolvedValue({
    ok: false,
  }),
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/LifecycleSurface", () => ({
  LifecycleSurface: () => <div data-testid="lifecycle-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/TrajectorySurface", () => ({
  TrajectorySurface: () => <div data-testid="trajectory-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/HistorySurface", () => ({
  HistorySurface: () => <div data-testid="history-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/JournalSurface", () => ({
  JournalSurface: () => <div data-testid="cycle-journal-rail" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/LpsSurface", () => ({
  LpsSurface: () => <div data-testid="lps-stub" />,
  lpsNextAction: () => "Poursuivre avec Nora",
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/RecoverySurface", () => ({
  RecoverySurface: () => null,
}));

vi.mock(
  "@/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel",
  () => ({
    ProjectWorkspaceRoutingPanelLazy: () => null,
  }),
);

vi.mock("@/features/pre-m6-product-ui/surfaces/ExecutionSurface", () => ({
  ExecutionSurface: () => <div data-testid="execution-stub" />,
}));

function baseConversationController() {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    uiState: "IDLE",
    error: null,
    modeLabel: "Mode",
    ephemeralNotice: null,
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: null,
    activeProposal: null,
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    focusTurnId: null,
    clearFocusTurn: vi.fn(),
    busy: false,
    blocked: false,
    canSend: true,
    gateOpen: false,
    recommendationFreshness: { label: "—", tone: "ok" },
    qualificationFreshness: { label: "—", tone: "ok" },
    durableOutcomeFreshness: { label: "—", tone: "ok" },
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: vi.fn(),
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    reservationResolutionProposal: null,
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    openContinuityPresentation: { kind: "none" as const },
    transcriptAvailability: "empty" as const,
    refreshConversationContinuity: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
  };
}

function baseProjectResult() {
  return {
    ok: true,
    project: {
      projectId: "prj:p5-s04",
      name: "Projet S04",
      objective: "Tester les synthèses",
      projectWorkspaceKey: null,
      repositoryBinding: null,
    },
    livingState: { version: 1, activeCycleInstanceId: null },
    readiness: { status: "ready" },
  };
}

describe("P5-S04 Synthèses UI", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: {
        projectId: "prj:p5-s04",
        activeCycleInstanceId: null,
        executionContractId: null,
        executionContractVersion: null,
        stage: "idle",
        status: "idle",
        attemptId: null,
        attemptStatus: null,
        claimEvaluationId: null,
        claimEvaluationStatus: null,
        evidenceIds: [],
        reviewBundleIds: [],
        nextActionCode: null,
        terminalOutcome: null,
        reconcile: { kind: "none" },
      },
    });
    readCurrentContinuityMock.mockResolvedValue({ ok: false, code: "NONE" });
    readHistoryMock.mockResolvedValue({ ok: true, history: { decisions: [], trajectory: { versions: [] }, contracts: [] } });
    getProjectRuntimeActionMock.mockResolvedValue(baseProjectResult());
    useProductConversationMock.mockReturnValue(baseConversationController());
    listSynthesesMock.mockResolvedValue({ ok: true, items: [] });
    getSynthesisMock.mockResolvedValue({ ok: true, synthesis: mockSynthesis });
    searchSynthesesMock.mockResolvedValue({ ok: true, items: [] });
  });

  it("T14 — Overview shows latest synthesis preview and count", async () => {
    latestSynthesisMock.mockResolvedValue({
      ok: true,
      synthesis: mockSynthesis,
      count: 2,
    });
    listSynthesesMock.mockResolvedValue({
      ok: true,
      items: [
        {
          synthesisId: mockSynthesis.synthesisId,
          title: mockSynthesis.title,
          subject: mockSynthesis.subject,
          status: "current",
          verdictLabel: "atteint",
          generatedAt: mockSynthesis.generatedAt,
          authority: "none",
        },
      ],
    });

    render(<ProjectWorkspacePage projectId="prj:p5-s04" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-tab-overview")).toBeTruthy();
    });
    fireEvent.click(screen.getByTestId("project-tab-overview"));

    await waitFor(() => {
      expect(screen.getByTestId("project-overview-synthesis-preview")).toBeTruthy();
    });
    expect(screen.getByTestId("project-overview-synthesis-count").textContent).toBe(
      "2",
    );
    expect(screen.getByText(/Synthèse UI test/)).toBeTruthy();
  });

  it("T15 — Conversation shows synthesis teaser and opens Synthèses view", async () => {
    latestSynthesisMock.mockResolvedValue({
      ok: true,
      synthesis: mockSynthesis,
      count: 1,
    });
    listSynthesesMock.mockResolvedValue({
      ok: true,
      items: [
        {
          synthesisId: mockSynthesis.synthesisId,
          title: mockSynthesis.title,
          subject: mockSynthesis.subject,
          status: "current",
          verdictLabel: "atteint",
          generatedAt: mockSynthesis.generatedAt,
          authority: "none",
        },
      ],
    });

    render(<ProjectWorkspacePage projectId="prj:p5-s04" />);

    await waitFor(() => {
      expect(screen.getByTestId("conversation-synthesis-teaser")).toBeTruthy();
    });
    fireEvent.click(screen.getByTestId("conversation-open-synthesis"));

    await waitFor(() => {
      expect(screen.getByTestId("project-syntheses-surface")).toBeTruthy();
    });
    expect(screen.getByTestId("project-syntheses-detail")).toBeTruthy();
  });

  it("T16 — Synthèses surface is read-only (no authority mutation controls)", async () => {
    listSynthesesMock.mockResolvedValue({
      ok: true,
      items: [
        {
          synthesisId: mockSynthesis.synthesisId,
          title: mockSynthesis.title,
          subject: mockSynthesis.subject,
          status: "current",
          verdictLabel: "atteint",
          generatedAt: mockSynthesis.generatedAt,
          authority: "none",
        },
      ],
    });
    getSynthesisMock.mockResolvedValue({ ok: true, synthesis: mockSynthesis });

    render(
      <SynthesesSurface
        projectId="prj:p5-s04"
        onReturnToOverview={vi.fn()}
      />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("project-syntheses-section-summary")).toBeTruthy();
    });

    expect(screen.getByTestId("project-syntheses-authority-none")).toBeTruthy();
    expect(screen.queryByRole("button", { name: /promouvoir|autorité|décider/i })).toBeNull();
    expect(screen.queryByRole("form")).toBeNull();

    fireEvent.change(screen.getByTestId("project-syntheses-search"), {
      target: { value: "token-ui-search" },
    });
    await waitFor(() => {
      expect(searchSynthesesMock).toHaveBeenCalled();
    });
  });
});
```

## COMPLETE CHANGED SECTIONS / UNIFIED DIFFS

Full useful unified diffs vs `origin/main` (`49b4fdaf078fdf2a5c7bfce3baad05fa65220c2e`) for all modified tracked S04-scope product/docs/test files.
Command basis: `git diff origin/main -- <path>` (working tree; S04 uncommitted on delivery branch).

### projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts

_Unified diff lines: 104_

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
index e9165081..563ae97d 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
@@ -7,7 +7,8 @@ export const PRODUCT_SCHEMA_VERSION_M5 = "m5-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M6 = "m6-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M7 = "m7-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M8 = "m8-0.1.0" as const;
-export const PRODUCT_SCHEMA_VERSION = PRODUCT_SCHEMA_VERSION_M8;
+export const PRODUCT_SCHEMA_VERSION_M9 = "m9-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION = PRODUCT_SCHEMA_VERSION_M9;

 const BASE_SCHEMA_SQL = `
 PRAGMA foreign_keys = ON;
@@ -318,6 +319,26 @@ CREATE TABLE IF NOT EXISTS oa_claim_evaluation_idempotency (
 );
 `;

+/** M9 — Product-derived Synthesis projections (NON-AUTHORITATIVE / NOT Truth C). */
+const M9_SYNTHESIS_SCHEMA_SQL = `
+CREATE TABLE IF NOT EXISTS oa_syntheses (
+  synthesis_id TEXT PRIMARY KEY NOT NULL,
+  project_id TEXT NOT NULL,
+  cycle_instance_id TEXT,
+  status TEXT NOT NULL,
+  source_fingerprint TEXT NOT NULL,
+  version INTEGER NOT NULL,
+  generated_at TEXT NOT NULL,
+  payload_json TEXT NOT NULL,
+  search_text TEXT NOT NULL,
+  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
+);
+CREATE INDEX IF NOT EXISTS idx_oa_syntheses_project_generated
+  ON oa_syntheses(project_id, generated_at);
+CREATE INDEX IF NOT EXISTS idx_oa_syntheses_project_fingerprint
+  ON oa_syntheses(project_id, source_fingerprint);
+`;
+
 function readSchemaVersion(db: DatabaseSync): string | null {
   const row = db
     .prepare("SELECT value FROM schema_meta WHERE key = ?")
@@ -371,8 +392,12 @@ function applyM8(db: DatabaseSync): void {
   db.exec(M8_CLAIM_EVALUATION_SCHEMA_SQL);
 }

+function applyM9(db: DatabaseSync): void {
+  db.exec(M9_SYNTHESIS_SCHEMA_SQL);
+}
+
 /**
- * Open Product SQLite with additive M1→M2→M3→M5→M6→M7→M8 migration.
+ * Open Product SQLite with additive M1→M2→M3→M5→M6→M7→M8→M9 migration.
  * Fail closed on unknown/future schema versions.
  */
 export function openProductSqlite(dbPath: string): DatabaseSync {
@@ -388,6 +413,7 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
     applyM6(db);
     applyM7(db);
     applyM8(db);
+    applyM9(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M2) {
     applyM3(db);
@@ -395,24 +421,32 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
     applyM6(db);
     applyM7(db);
     applyM8(db);
+    applyM9(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M3) {
     applyM5(db);
     applyM6(db);
     applyM7(db);
     applyM8(db);
+    applyM9(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M5) {
     applyM6(db);
     applyM7(db);
     applyM8(db);
+    applyM9(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M6) {
     applyM7(db);
     applyM8(db);
+    applyM9(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M7) {
     applyM8(db);
+    applyM9(db);
+    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
+  } else if (version === PRODUCT_SCHEMA_VERSION_M8) {
+    applyM9(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION) {
     applyM2(db);
@@ -421,6 +455,7 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
     applyM6(db);
     applyM7(db);
     applyM8(db);
+    applyM9(db);
   } else {
     try {
       db.close();
```

### projects/sfia-studio/app/lib/oa/project/index.ts

_Unified diff lines: 14_

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/index.ts b/projects/sfia-studio/app/lib/oa/project/index.ts
index 26b91fa0..770c0187 100644
--- a/projects/sfia-studio/app/lib/oa/project/index.ts
+++ b/projects/sfia-studio/app/lib/oa/project/index.ts
@@ -69,6 +69,9 @@ export {
   PRODUCT_SCHEMA_VERSION_M3,
   PRODUCT_SCHEMA_VERSION_M5,
   PRODUCT_SCHEMA_VERSION_M6,
+  PRODUCT_SCHEMA_VERSION_M7,
+  PRODUCT_SCHEMA_VERSION_M8,
+  PRODUCT_SCHEMA_VERSION_M9,
 } from "./infrastructure/sqlite/db";
 export type { ProductSqliteHandle } from "./infrastructure/sqlite/productSqliteHandle";
 export { SqliteProductStore } from "./infrastructure/sqlite/sqliteProductStore";
```

### projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx

_Unified diff lines: 149_

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 06648947..0a6e0be3 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -25,6 +25,9 @@ import {
 } from "./surfaces/ProjectContextSummary";
 import { OverviewSurface } from "./surfaces/OverviewSurface";
 import { ExecutionSurface } from "./surfaces/ExecutionSurface";
+import { SynthesesSurface } from "./surfaces/SynthesesSurface";
+import { getLatestRelevantProductSynthesisAction } from "@/features/project-assistant/synthesisActions";
+import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";
 import {
   deriveExecutionTabBadge,
   presentPilotExecution,
@@ -51,7 +54,7 @@ import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";

 /** Ephemeral presentation view — never persisted as Product state. */
-type WorkspaceView = "conversation" | "overview" | "execution";
+type WorkspaceView = "conversation" | "overview" | "execution" | "syntheses";

 /** prefers-reduced-motion: no smooth scrolling for in-page jumps. */
 function scrollBehaviorPref(): ScrollBehavior {
@@ -126,6 +129,9 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     useState<PilotLifecycleProjection | null>(null);
   const [reservationBusyId, setReservationBusyId] = useState<string | null>(null);
   const [reservationNotice, setReservationNotice] = useState<string | null>(null);
+  const [latestSynthesis, setLatestSynthesis] =
+    useState<ProductSynthesisProjection | null>(null);
+  const [synthesesFocusId, setSynthesesFocusId] = useState<string | null>(null);
   const conversationRef = useRef<HTMLDivElement | null>(null);
   const refreshInFlight = useRef(false);

@@ -177,6 +183,20 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     };
   }, [projectId]);

+  const refreshLatestSynthesis = useCallback(async () => {
+    const result = await getLatestRelevantProductSynthesisAction({ projectId });
+    if (result.ok) setLatestSynthesis(result.synthesis);
+    else setLatestSynthesis(null);
+  }, [projectId]);
+
+  useEffect(() => {
+    void refreshLatestSynthesis();
+  }, [
+    refreshLatestSynthesis,
+    lifecycleRefreshSignal,
+    trajectoryRefreshSignal,
+  ]);
+
   const focusConversation = useCallback(() => {
     setActiveView("conversation");
     window.setTimeout(() => {
@@ -385,6 +405,19 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     setLpsOpen(false);
   }, []);

+  const openSyntheses = useCallback((synthesisId?: string | null) => {
+    setSynthesesFocusId(synthesisId ?? null);
+    setActiveView("syntheses");
+    setLpsOpen(false);
+  }, []);
+
+  const openSynthesisDetail = useCallback(
+    (synthesisId: string) => {
+      openSyntheses(synthesisId);
+    },
+    [openSyntheses],
+  );
+
   const handleExecutionPresentationChange = useCallback(
     (presentation: PilotExecutionPresentation) => {
       setExecutionPresentation(presentation);
@@ -453,8 +486,9 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     executionPresentation != null
       ? deriveExecutionTabBadge(executionPresentation)
       : null;
-  /** Overview owns its composition — no permanent sibling context rail. */
-  const showContextRail = activeView !== "overview";
+  /** Overview / Synthèses own principal width — no permanent sibling context rail. */
+  const showContextRail =
+    activeView !== "overview" && activeView !== "syntheses";

   return (
     <div
@@ -571,12 +605,18 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
       <div
         className={[
           styles.layout,
-          activeView === "overview" ? styles.layoutOverview : "",
+          activeView === "overview" || activeView === "syntheses"
+            ? styles.layoutOverview
+            : "",
         ]
           .filter(Boolean)
           .join(" ")}
         data-testid="project-workspace-layout"
-        data-layout={activeView === "overview" ? "overview" : "split"}
+        data-layout={
+          activeView === "overview" || activeView === "syntheses"
+            ? "overview"
+            : "split"
+        }
       >
         <div className={styles.main} ref={conversationRef}>
           {activeView === "conversation" ? (
@@ -629,6 +669,8 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                   controller={controller}
                   onConfirmReservationResolve={confirmReservationResolution}
                   reservationConfirmBusyId={reservationBusyId}
+                  latestSynthesis={latestSynthesis}
+                  onOpenSynthesis={openSynthesisDetail}
                 />
               </div>
             </>
@@ -647,6 +689,16 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
               onOpenConversation={focusConversation}
               onOpenJournal={openJournal}
               onOpenHistory={openHistory}
+              onOpenSyntheses={() => openSyntheses()}
+              onOpenSynthesisDetail={openSynthesisDetail}
+            />
+          ) : null}
+
+          {activeView === "syntheses" ? (
+            <SynthesesSurface
+              projectId={projectId}
+              initialSynthesisId={synthesesFocusId}
+              onReturnToOverview={openOverview}
             />
           ) : null}

@@ -686,6 +738,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
               currentness={currentness}
               trajectory={trajectoryNodes}
               attention={attention}
+              latestSynthesis={latestSynthesis}
             />

             <section
@@ -803,6 +856,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
           <ProjectContextShortcuts
             onOpenJournal={openJournal}
             onOpenHistory={openHistory}
+            onOpenSyntheses={() => openSyntheses()}
           />
         </aside>
         ) : null}
```

### projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.tsx

_Unified diff lines: 140_

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.tsx
index 501357ba..b1539d2f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.tsx
@@ -9,6 +9,13 @@ import type {
   CycleSummary,
   TrajectoryNode,
 } from "../workspaceContextPresentation";
+import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";
+import { getLatestRelevantProductSynthesisAction } from "@/features/project-assistant/synthesisActions";
+import {
+  formatSynthesisGeneratedAt,
+  presentSynthesisVerdictLabel,
+  synthesisSummaryExcerpt,
+} from "./synthesisPresentation";
 import styles from "./OverviewSurface.module.css";

 export type OverviewRecentActivityItem = {
@@ -69,6 +76,8 @@ export type OverviewSurfaceProps = {
   onOpenConversation: () => void;
   onOpenJournal: () => void;
   onOpenHistory: () => void;
+  onOpenSyntheses: () => void;
+  onOpenSynthesisDetail?: (synthesisId: string) => void;
 };

 /**
@@ -88,8 +97,13 @@ export function OverviewSurface({
   onOpenConversation,
   onOpenJournal,
   onOpenHistory,
+  onOpenSyntheses,
+  onOpenSynthesisDetail,
 }: OverviewSurfaceProps) {
   const [history, setHistory] = useState<W2ProjectHistoryReadModel | null>(null);
+  const [latestSynthesis, setLatestSynthesis] =
+    useState<ProductSynthesisProjection | null>(null);
+  const [synthesisCount, setSynthesisCount] = useState(0);

   useEffect(() => {
     let cancelled = false;
@@ -103,6 +117,23 @@ export function OverviewSurface({
     };
   }, [projectId]);

+  useEffect(() => {
+    let cancelled = false;
+    void getLatestRelevantProductSynthesisAction({ projectId }).then((result) => {
+      if (cancelled) return;
+      if (result.ok) {
+        setLatestSynthesis(result.synthesis);
+        setSynthesisCount(result.count);
+      } else {
+        setLatestSynthesis(null);
+        setSynthesisCount(0);
+      }
+    });
+    return () => {
+      cancelled = true;
+    };
+  }, [projectId]);
+
   const activity = deriveRecentActivity(history);
   const decisionAttention = attention.find((a) => a.key === "decision");
   const reserveAttention = attention.find((a) => a.key === "reserve");
@@ -358,7 +389,9 @@ export function OverviewSurface({
               </li>
               <li>
                 <span>Synthèses</span>
-                <span>—</span>
+                <span data-testid="project-overview-synthesis-count">
+                  {synthesisCount > 0 ? synthesisCount : "—"}
+                </span>
               </li>
             </ul>
           </div>
@@ -394,16 +427,53 @@ export function OverviewSurface({
             data-testid="project-overview-synthesis"
             aria-labelledby="overview-synthesis-title"
           >
-            <h3 className={styles.sectionTitle} id="overview-synthesis-title">
-              Synthèses
-            </h3>
-            <p
-              className={styles.empty}
-              data-testid="project-overview-synthesis-empty"
-            >
-              Aucune synthèse produit n’est encore disponible. Elle n’est pas
-              inventée depuis la conversation.
-            </p>
+            <div className={styles.sectionHead}>
+              <h3 className={styles.sectionTitle} id="overview-synthesis-title">
+                Synthèses
+              </h3>
+              <button
+                type="button"
+                className={styles.nextStepCta}
+                data-testid="project-overview-open-syntheses"
+                onClick={onOpenSyntheses}
+              >
+                Toutes les synthèses →
+              </button>
+            </div>
+            {latestSynthesis ? (
+              <div data-testid="project-overview-synthesis-preview">
+                <p className={styles.nextStepTitle}>{latestSynthesis.title}</p>
+                <p className={styles.statSub}>
+                  {presentSynthesisVerdictLabel(latestSynthesis.verdictLabel)} ·{" "}
+                  {formatSynthesisGeneratedAt(latestSynthesis.generatedAt)}
+                </p>
+                <p className={styles.nextStepBody}>
+                  {synthesisSummaryExcerpt(latestSynthesis)}
+                </p>
+                <button
+                  type="button"
+                  className={styles.nextStepCta}
+                  data-testid="project-overview-open-synthesis-detail"
+                  onClick={() => {
+                    if (onOpenSynthesisDetail) {
+                      onOpenSynthesisDetail(latestSynthesis.synthesisId);
+                    } else {
+                      onOpenSyntheses();
+                    }
+                  }}
+                >
+                  Ouvrir cette synthèse →
+                </button>
+              </div>
+            ) : (
+              <p
+                className={styles.empty}
+                data-testid="project-overview-synthesis-empty"
+              >
+                Aucune synthèse produit n’est encore disponible. Elle n’est pas
+                inventée depuis la conversation.
+              </p>
+            )}
           </section>
         </aside>
       </div>
```

### projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx

_Unified diff lines: 74_

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 8b7df1af..1144f744 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -21,6 +21,11 @@ import type { AssistantToolEventDto } from "@/features/project-assistant/types";
 import type { F2DecisionKind } from "@/features/project-assistant/f2/types";
 import { useEffect, useId } from "react";
 import type { ProductConversationController } from "../hooks/useProductConversation";
+import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";
+import {
+  presentSynthesisVerdictLabel,
+  synthesisSummaryExcerpt,
+} from "./synthesisPresentation";
 import styles from "./ConversationSurface.module.css";

 /**
@@ -76,6 +81,8 @@ export type ConversationSurfaceProps = {
    */
   onConfirmReservationResolve?: (epistemicItemId: string) => void;
   reservationConfirmBusyId?: string | null;
+  latestSynthesis?: ProductSynthesisProjection | null;
+  onOpenSynthesis?: (synthesisId: string) => void;
 };

 /**
@@ -89,6 +96,8 @@ export function ConversationSurface({
   exposeLegacyAuthorityPath = false,
   onConfirmReservationResolve,
   reservationConfirmBusyId = null,
+  latestSynthesis = null,
+  onOpenSynthesis,
 }: ConversationSurfaceProps) {
   const fieldId = useId();
   const liveRegionId = useId();
@@ -1321,6 +1330,39 @@ export function ConversationSurface({
         </section>
       ) : null}

+      {latestSynthesis && onOpenSynthesis ? (
+        <section
+          className={styles.card}
+          data-testid="conversation-synthesis-teaser"
+          aria-live="polite"
+        >
+          <header className={styles.cardHead}>
+            <p className={styles.cardEyebrow}>Synthèse produit dérivée</p>
+            <h3 className={styles.cardTitle}>{latestSynthesis.title}</h3>
+          </header>
+          <div className={styles.chipRow}>
+            <span className={styles.chipQuiet}>NON-AUTORITATIVE</span>
+            <span className={styles.chip}>
+              {presentSynthesisVerdictLabel(latestSynthesis.verdictLabel)}
+            </span>
+          </div>
+          <p
+            className={styles.subLead}
+            data-testid="conversation-synthesis-summary"
+          >
+            {synthesisSummaryExcerpt(latestSynthesis, 280)}
+          </p>
+          <button
+            type="button"
+            className={styles.primaryButton}
+            data-testid="conversation-open-synthesis"
+            onClick={() => onOpenSynthesis(latestSynthesis.synthesisId)}
+          >
+            Voir la synthèse complète →
+          </button>
+        </section>
+      ) : null}
+
       {error ? (
         <div
           className={styles.errorBox}
```

### projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.tsx

_Unified diff lines: 93_

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.tsx
index 03ebc2ce..5a59c57c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.tsx
@@ -6,6 +6,12 @@ import type {
   CycleSummary,
   TrajectoryNode,
 } from "../workspaceContextPresentation";
+import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";
+import {
+  formatSynthesisGeneratedAt,
+  presentSynthesisVerdictLabel,
+  synthesisSummaryExcerpt,
+} from "./synthesisPresentation";
 import styles from "./ProjectContextSummary.module.css";

 export type ProjectContextSummaryProps = {
@@ -17,6 +23,7 @@ export type ProjectContextSummaryProps = {
   currentness: CurrentnessPresentation;
   trajectory: TrajectoryNode[];
   attention: AttentionItem[];
+  latestSynthesis?: ProductSynthesisProjection | null;
 };

 /**
@@ -31,6 +38,7 @@ export function ProjectContextSummary({
   currentness,
   trajectory,
   attention,
+  latestSynthesis = null,
 }: ProjectContextSummaryProps) {
   return (
     <div className={styles.root} data-testid="project-context-summary">
@@ -132,10 +140,23 @@ export function ProjectContextSummary({
         <h3 className={styles.sectionTitle} id="ctx-synthesis-title">
           Dernière synthèse
         </h3>
-        <p className={styles.empty} data-testid="project-context-synthesis-empty">
-          Aucune synthèse disponible pour l’instant. Elle apparaîtra ici lorsque
-          Nora en aura enregistré une.
-        </p>
+        {latestSynthesis ? (
+          <div data-testid="project-context-synthesis-preview">
+            <p className={styles.attentionHead}>{latestSynthesis.title}</p>
+            <p className={styles.attentionDetail}>
+              {presentSynthesisVerdictLabel(latestSynthesis.verdictLabel)} ·{" "}
+              {formatSynthesisGeneratedAt(latestSynthesis.generatedAt)}
+            </p>
+            <p className={styles.empty}>
+              {synthesisSummaryExcerpt(latestSynthesis, 160)}
+            </p>
+          </div>
+        ) : (
+          <p className={styles.empty} data-testid="project-context-synthesis-empty">
+            Aucune synthèse produit disponible pour l’instant — projection
+            dérivée uniquement, jamais inventée depuis la conversation.
+          </p>
+        )}
       </section>
     </div>
   );
@@ -144,16 +165,16 @@ export function ProjectContextSummary({
 export type ProjectContextShortcutsProps = {
   onOpenJournal: () => void;
   onOpenHistory: () => void;
+  onOpenSyntheses: () => void;
 };

 /**
- * « Journal du cycle · Historique · Synthèses » — wired only to surfaces that
- * exist in the workspace. « Synthèses » has no Product surface yet, so it is
- * rendered as an honest disabled entry rather than a dead link.
+ * « Journal du cycle · Historique · Synthèses » — secondary navigation only.
  */
 export function ProjectContextShortcuts({
   onOpenJournal,
   onOpenHistory,
+  onOpenSyntheses,
 }: ProjectContextShortcutsProps) {
   return (
     <nav
@@ -181,9 +202,8 @@ export function ProjectContextShortcuts({
         type="button"
         className={styles.shortcut}
         data-testid="project-shortcut-syntheses"
-        disabled
-        aria-disabled="true"
-        title="Aucune synthèse n’est encore disponible dans le produit"
+        onClick={onOpenSyntheses}
+        title="Ouvrir les synthèses produit dérivées (projection non autoritative)"
       >
         Synthèses
       </button>
```

### projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts

_Unified diff lines: 13_

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
index 46731996..2ae3b6ac 100644
--- a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
@@ -131,7 +131,7 @@ describe("M3 Product SQLite schema migration", () => {
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
     expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m9-0.1.0");

     const decisions = svc.store.db
       .prepare(
```

### projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts

_Unified diff lines: 22_

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
index c039716c..23e56d96 100644
--- a/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
@@ -147,7 +147,7 @@ describe("M5 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m9-0.1.0");
     expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");

     expect(tableExists(svc.store.db, "oa_human_decisions")).toBe(true);
@@ -197,7 +197,7 @@ describe("M5 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m9-0.1.0");
     expect(tableExists(svc.store.db, "oa_execution_attempts")).toBe(true);
   });

```

### projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts

_Unified diff lines: 31_

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
index a5348224..24e2b613 100644
--- a/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
@@ -113,7 +113,7 @@ describe("M6 Product SQLite schema migration", () => {
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
     expect(PRODUCT_SCHEMA_VERSION_M6).toBe("m6-0.1.0");
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m9-0.1.0");
     expect(tableExists(svc.store.db, "oa_project_trajectories")).toBe(true);
     expect(tableExists(svc.store.db, "oa_project_trajectory_current")).toBe(
       true,
@@ -164,7 +164,7 @@ describe("M6 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m9-0.1.0");
     expect(tableExists(svc.store.db, "oa_ec_inspection_attestations")).toBe(
       true,
     );
@@ -186,7 +186,7 @@ describe("M6 Product SQLite schema migration", () => {
     const reopenedVersion = reopened.store.db
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
-    expect(reopenedVersion.value).toBe("m8-0.1.0");
+    expect(reopenedVersion.value).toBe("m9-0.1.0");
     expect(
       tableExists(reopened.store.db, "oa_ec_inspection_attestations"),
     ).toBe(true);
```

### projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts

_Unified diff lines: 13_

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 52fcc432..5b0509f3 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -97,6 +97,8 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/mw3AvailableEvidence.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/preCycleCandidateTrajectoryActions.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/buildProductSynthesisLineageInput.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/synthesisActions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/approveCandidateTrajectory.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime/liveProjectContext",
```

### projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx

_Unified diff lines: 23_

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
index c684f4e0..9d20de26 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
@@ -50,6 +50,18 @@ vi.mock("@/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel", ()
   ProjectWorkspaceRoutingPanelLazy: () => null,
 }));

+vi.mock("@/features/project-assistant/synthesisActions", () => ({
+  getLatestRelevantProductSynthesisAction: vi.fn(async () => ({
+    ok: true,
+    synthesis: null,
+    count: 0,
+  })),
+  listProductSynthesesAction: vi.fn(async () => ({ ok: true, items: [] })),
+  getProductSynthesisAction: vi.fn(),
+  searchProductSynthesesAction: vi.fn(async () => ({ ok: true, items: [] })),
+  materializeProductSynthesisFromLineageAction: vi.fn(),
+}));
+
 vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantConversationContinuityAction: vi.fn(async () => ({
     ok: true,
```

### projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx

_Unified diff lines: 23_

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
index 3d8eb7bf..e8f4db44 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
@@ -28,6 +28,18 @@ vi.mock("@/features/pre-m6-product-ui/hooks/useProductConversation", () => ({
     useProductConversationMock(...args),
 }));

+vi.mock("@/features/project-assistant/synthesisActions", () => ({
+  getLatestRelevantProductSynthesisAction: vi.fn(async () => ({
+    ok: true,
+    synthesis: null,
+    count: 0,
+  })),
+  listProductSynthesesAction: vi.fn(async () => ({ ok: true, items: [] })),
+  getProductSynthesisAction: vi.fn(),
+  searchProductSynthesesAction: vi.fn(async () => ({ ok: true, items: [] })),
+  materializeProductSynthesisFromLineageAction: vi.fn(),
+}));
+
 vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
     ok: true,
```

### projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx

_Unified diff lines: 23_

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx
index 6767cc22..13e25826 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx
@@ -43,6 +43,18 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2ReconcileGovernedExecutionAction: vi.fn(),
 }));

+vi.mock("@/features/project-assistant/synthesisActions", () => ({
+  getLatestRelevantProductSynthesisAction: vi.fn(async () => ({
+    ok: true,
+    synthesis: null,
+    count: 0,
+  })),
+  listProductSynthesesAction: vi.fn(async () => ({ ok: true, items: [] })),
+  getProductSynthesisAction: vi.fn(),
+  searchProductSynthesesAction: vi.fn(async () => ({ ok: true, items: [] })),
+  materializeProductSynthesisFromLineageAction: vi.fn(),
+}));
+
 vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantConversationContinuityAction: vi.fn(async () => ({
     ok: true,
```

### projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx

_Unified diff lines: 23_

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
index 1d795812..23d635ba 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
@@ -36,6 +36,18 @@ vi.mock("@/features/pre-m6-product-ui/hooks/useProductConversation", () => ({
     useProductConversationMock(...args),
 }));

+vi.mock("@/features/project-assistant/synthesisActions", () => ({
+  getLatestRelevantProductSynthesisAction: vi.fn(async () => ({
+    ok: true,
+    synthesis: null,
+    count: 0,
+  })),
+  listProductSynthesesAction: vi.fn(async () => ({ ok: true, items: [] })),
+  getProductSynthesisAction: vi.fn(),
+  searchProductSynthesesAction: vi.fn(async () => ({ ok: true, items: [] })),
+  materializeProductSynthesisFromLineageAction: vi.fn(),
+}));
+
 vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantConversationContinuityAction: vi.fn(async () => ({
     ok: true,
```

### projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md

_Unified diff lines: 15_

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 93823ab3..d57e60ce 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,9 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S03 GIT INTEGRATION** | 2026-10-05 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S03 OBJECT-NATIVE PRODUCT VIEWS — GIT INTEGRATION AUTHORIZED BY MORRIS / IN PROGRESS** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR Readiness / Git Integration** · Milestone **P5** · Slice **P5-S03** · CRITICAL · Morris P5-S03 GIT INTEGRATION GATE = **AUTHORIZED** · Final ChatGPT Critical Review = **PASS** · CP01/CP02 = **PASS at local candidate scope** · A=0 / B=0 · C-actionable = 0 · Expected Product content variance **PRESERVED** · ZERO REAL · branche `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` · base/main `1a7e80b20949a041b1edc279ffed735b04bda997` · next = commit/push/PR → ChatGPT PR review + CI → **MORRIS P5-S03 MERGE GATE** · merge **NOT AUTHORIZED this pass** · **≠** P5-S03 INTEGRATED · **≠** P5 COMPLETE · **≠** R3 · **≠** P6 READY · **≠** runtime v3 ADOPTED · **≠** PIXEL-PERFECT GLOBAL |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 PRODUCT-DERIVED SYNTHESES** | 2026-10-05 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 PRODUCT-DERIVED SYNTHÈSES — DELIVERY AUTHORIZED / LOCAL CANDIDATE IN PROGRESS** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Milestone **P5** · Slice **P5-S04** · CRITICAL · Morris P5-S04 delivery authorization = **CONSUMED** · P5-S01/S02/S03 = **INTEGRATED / POST-MERGE VERIFIED** (main **`49b4fdaf…`** · S03 PR **#557** MERGED) · M9 **`oa_syntheses`** · deterministic builder + SQLite repository · Synthèses UI read-only · Overview/Conversation teasers · ZERO REAL · F2 debt **OPEN** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s04-product-derived-syntheses` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Critical Review** → Morris Git Integration gate · **≠** P5-S04 INTEGRATED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S03 INTEGRATED** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S03 OBJECT-NATIVE PRODUCT VIEWS — **INTEGRATED / POST-MERGE VERIFIED** *(true then; superseded by P5-S04 tip)* · PR **#557** MERGED · main **`49b4fdaf078fdf2a5c7bfce3baad05fa65220c2e`** · merge **`5fc6238a…`** · CP01/CP02 preserved · A=0 / B=0 · ZERO REAL · Synthesis surface was **NOT BUILT** at S03 scope · **≠** P5 COMPLETE |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S03 GIT INTEGRATION** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S03 OBJECT-NATIVE PRODUCT VIEWS — GIT INTEGRATION AUTHORIZED BY MORRIS / IN PROGRESS *(true then; superseded by P5-S03 INTEGRATED tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR Readiness / Git Integration** · Milestone **P5** · Slice **P5-S03** · CRITICAL · Morris P5-S03 GIT INTEGRATION GATE = **AUTHORIZED** · Final ChatGPT Critical Review = **PASS** · CP01/CP02 = **PASS at local candidate scope** · A=0 / B=0 · C-actionable = 0 · Expected Product content variance **PRESERVED** · ZERO REAL · branche `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` · base/main `1a7e80b20949a041b1edc279ffed735b04bda997` · next = commit/push/PR → ChatGPT PR review + CI → **MORRIS P5-S03 MERGE GATE** · merge **NOT AUTHORIZED this pass** · **≠** P5-S03 INTEGRATED · **≠** P5 COMPLETE · **≠** R3 · **≠** P6 READY · **≠** runtime v3 ADOPTED · **≠** PIXEL-PERFECT GLOBAL |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S03 CORRECTION PASS 02** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S03 CORRECTION PASS 02 — EXECUTION RECONCILE CONTINUITY + BOUNDED C-VISUAL POLISH — LOCAL CANDIDATE *(true then; superseded by P5-S03 Git Integration tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Milestone **P5** · Slice **P5-S03** · Pass **CORRECTION PASS 02** · CRITICAL · Morris P5-S03 CP02 AUTHORIZATION = **CONSUMED** · Axis 1 = mounted + remount W2 reconcile `intent=continue` via existing `reconcileContinuePolicy` (no new SM / retry budget) · Axis 2 = actionable C polish (mobile composer ~60px · Overview/Execution spacing) · content-honesty variances **PRESERVED** · A=0 / B=0 · ZERO REAL · no new persistence / state machine / Product object / parallel architecture · F2 debt **OPEN** · Synthesis **NOT BUILT** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` · base/main `1a7e80b20949a041b1edc279ffed735b04bda997` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Final Critical Review** → **MORRIS P5-S03 GIT INTEGRATION GATE** · **≠** P5-S03 INTEGRATED · **≠** R3 · **≠** P6 READY · **≠** PIXEL-PERFECT GLOBAL |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S03 CORRECTION PASS 01** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S03 CORRECTION PASS 01 — DURABLE EXECUTION ACTION CONTINUITY + P3 STRUCTURAL VISUAL ALIGNMENT — LOCAL CANDIDATE / IN PROGRESS *(true then; superseded by P5-S03 Correction Pass 02 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Milestone **P5** · Slice **P5-S03** · Pass **CORRECTION PASS 01** · CRITICAL · Morris P5-S03 CP01 AUTHORIZATION = **CONSUMED** · Axis 1 = durable Exécution action continuity (CONFIRM ≠ EXECUTE · W2 confirm/authorize/reconcile · fresh-mount E1–E6) · Axis 2 = B1 Aperçu desktop composition 51:2 + B2 mobile shell · A=0 / B=0 candidate · ZERO REAL · no new persistence / state machine / Product object / parallel architecture · F2 debt **OPEN** · Synthesis **NOT BUILT** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` · base/main `1a7e80b20949a041b1edc279ffed735b04bda997` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Critical Re-Review** · **≠** P5-S03 INTEGRATED · **≠** R3 · **≠** P6 READY · **≠** PIXEL-PERFECT GLOBAL |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S03 OBJECT-NATIVE VIEWS** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S03 OBJECT-NATIVE APERÇU + EXÉCUTION — LOCAL CANDIDATE / DELIVERY AUTHORIZED *(true then; superseded by P5-S03 Correction Pass 01 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Milestone **P5** · Slice **P5-S03** · CRITICAL · Morris P5-S03 DELIVERY AUTHORIZATION = **CONSUMED** · P5-S01 = **INTEGRATED** · P5-S02 = **INTEGRATED / POST-MERGE VERIFIED** (PR **#556** MERGED · main `1a7e80b20949a041b1edc279ffed735b04bda997` · CI **#680** SUCCESS · Required Gate SUCCESS) · S03 = real Conversation/Aperçu/Exécution views · Product-object projections · canonical Governed Execution Continuity · presentation-only adapter · ZERO REAL · no new persistence / state machine / agent architecture · F2 debt **OPEN** · Synthesis surface **NOT BUILT** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Critical Review** → Morris Git Integration Gate · **≠** P5-S03 INTEGRATED · **≠** R3 · **≠** P6 READY |
```

### projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md

_Unified diff lines: 72_

```diff
diff --git a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
index 62af8c61..5a3e2d99 100644
--- a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
+++ b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
@@ -785,39 +785,49 @@ Visual / Git historical notes above for Correction Pass 01 are **SUPERSEDED** by

 ---

-## 33. Current verdict
+## 33. P5-S04 — Product-derived Synthèses (factual)
+
+| Item | Result |
+| --- | --- |
+| Morris P5-S04 delivery authorization | **CONSUMED** |
+| Scope | M9 `oa_syntheses` · deterministic `buildProductSynthesis` · SQLite repository · read-only Synthèses surface · Overview + Conversation teasers · **NON-AUTORITATIVE** |
+| Architecture | OBJECTS FIRST → PROJECTIONS SECOND → SURFACES THIRD · lineage from durable ClaimEvaluation (+ optional EC/attempt/evidence/RB reads) · **no invented verdict/recommendation** |
+| Auth / REAL | Studio auth via `.tmp-sfia-review/auth/studio-storage-state.json` · **ZERO REAL** · `P5_S02_RUN_REAL` never set |
+| Evidence — tests | D0 `p5.s04.productDerivedSynthesis.d0.test.ts` **13 PASS** · UI `p5.s04.synthesesSurface.ui.test.tsx` **3 PASS** · M3/M5/M6 migration tests **PASS** · full `npm test` **471 files / 5223 tests PASS** (after synthesisAction mocks + import boundary + PRR digest hygiene) |
+| Evidence — visual | `.tmp-sfia-review/p5-s04-visual/after/` · seed script materialized real synthesis `syn:65645eee8ad4206537f90d0c2b4b6c53` for `prj:0ed5c4e1-3d23-45cd-b34b-530df1090197` · **A=0 / B=0** · C=4 · D=3 (see correction-design-note) |
+| Debts | F2 routing **OPEN** · R3 **NOT STARTED** · P6 **NOT READY** · runtime v3 **NON ADOPTED** · richer campaign lineage (EC/attempt/evidence) **NOT REQUIRED for S04** but drives honest D gaps in sections |
+| Anti-claims | **≠** Truth C · **≠** authority mutation · **≠** UI-only fake synthesis · **≠** P5 COMPLETE · **≠** integrated on main (local uncommitted candidate on branch tip = main @ `49b4fdaf…`) |
+
+---
+
+## 34. Current verdict

 ```text
 P5 AUTHORIZED BY MORRIS = YES
 P5 STARTED              = YES
 P5 IN PROGRESS          = YES

-P5-S01 = INTEGRATED / POST-MERGE VERIFIED
-         (PR #555 MERGED · CI #678 SUCCESS)
-
-P5-S02 = INTEGRATED / POST-MERGE VERIFIED
-         (PR #556 MERGED · main 1a7e80b2… · CI #680 SUCCESS)
-         R1/R2 PROVEN · envelope deviation ACCEPTED BY MORRIS
+P5-S01 = INTEGRATED / POST-MERGE VERIFIED (PR #555)
+P5-S02 = INTEGRATED / POST-MERGE VERIFIED (PR #556)
+P5-S03 = INTEGRATED / POST-MERGE VERIFIED (PR #557 · main 49b4fdaf…)

-P5-S03 = LOCAL CANDIDATE — CRITICAL REVIEW PASS
-         GIT INTEGRATION AUTHORIZED BY MORRIS
-         OBJECT-NATIVE APERÇU + EXÉCUTION
-         CP01 durable continuity CLOSED locally
-         CP02 reconcile continuity + C polish CLOSED locally
-         — NOT INTEGRATED · R3 NOT STARTED
+P5-S04 = LOCAL CANDIDATE — PRODUCT-DERIVED SYNTHÈSES
+         DELIVERY AUTHORIZED / NOT INTEGRATED
+         M9 + builder + read-only UI + teasers
+         A=0 / B=0 · ZERO REAL

 READY FOR REAL          = NO
 runtime v3              = NON ADOPTED
 P5 COMPLETE             = NO
 P6 READY                = NO
+R3                      = NOT STARTED

-NEXT                   = COMMIT / PUSH / PR → CHATGPT PR REVIEW + CI
-NEXT MORRIS GATE       = P5-S03 MERGE GATE (only after ChatGPT PR review + required CI green)
-NEXT CAPABILITY HINT   = subsequent P5 capability requalification / later R3 / P6
+NEXT                   = CHATGPT CRITICAL REVIEW (S04)
+NEXT MORRIS GATE       = P5-S04 GIT INTEGRATION (after PASS)
 ```

-**Synthèse honnête.** P5-S01/S02 sont sur main. P5-S03 projette Aperçu + Exécution depuis le monde Product existant, avec continuation W2 canonique et polish C borné. **≠ R3 / ≠ P5 COMPLETE / ≠ runtime v3 ADOPTED / ≠ Synthèses**. **P4 reste l’autorité d’architecture**.
+**Synthèse honnête.** P5-S04 materialise des synthèses Product dérivées depuis ClaimEvaluation durable, les persiste en M9, et les projette en UI read-only. **≠ R3 / ≠ P5 COMPLETE / ≠ runtime v3 ADOPTED**. **P4 reste l’autorité d’architecture**.

 ---

-*Fin du document P5 — Integrated Delivery — P5-S03 Object-Native Views — S01/S02 INTEGRATED · S03 LOCAL CANDIDATE GIT INTEGRATION AUTHORIZED — NOT YET INTEGRATED · R3 NOT STARTED · READY FOR REAL = NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*
+*Fin du document P5 — Integrated Delivery — S01/S02/S03 INTEGRATED · S04 LOCAL CANDIDATE · R3 NOT STARTED · READY FOR REAL = NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*
```

### projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json

_Unified diff lines: 13_

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 6033a8db..8766284c 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -638,7 +638,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts",
-      "sha256_16": "67ed985474e4e22b"
+      "sha256_16": "600264cca081308d"
     },
     {
       "path": "projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts",
```

### .tmp-sfia-review/p5-s04-visual/correction-design-note.md

_Lines: 38_

```md
# P5-S04 Synthèses — Visual classification (honest)

**Reviewed:** 2026-10-05 Europe/Paris
**Runtime evidence:** `.tmp-sfia-review/p5-s04-visual/after/`
**Figma refs:** `.tmp-sfia-review/p5-s04-visual/figma/` (164:3 · 190:175 · 190:433 · 190:455) · Overview preview vs 51:2 (S03)

## Method
Side-by-side against Figma exports; classify per P3/P5 visual debt taxonomy:
- **A** — structural / authority / wrong surface
- **B** — blocking layout break or illegibility
- **C** — polish / spacing / typography / density drift (actionable or acceptable)
- **D** — expected Product content variance (honest empty/missing lineage fields)

## Counts (target A=0 B=0)

| Class | Count | Notes |
| --- | ---: | --- |
| **A** | **0** | Synthèses remain read-only; NON-AUTORITATIVE badge present; no fake authority CTAs |
| **B** | **0** | Desktop/compact/mobile list+detail usable; no overlap/clipping blockers at captured viewports |
| **C** | **4** | Desktop list+detail column rhythm vs 164:3 (section numbering density); compact 1024 header stack; mobile list card padding vs 190:433; mobile detail section scroll anchor vs 190:455 |
| **D** | **3** | Seeded synthesis lacks durable EC/attempt/evidence/RB in Product DB — builder correctly surfaces gaps in sections 02–05; Overview count shows real `1` when loaded; campaign project otherwise sparse |

## Per-capture

| Capture | Figma | A | B | C | D |
| --- | --- | ---: | ---: | ---: | ---: |
| syntheses-desktop-1440x1024.png | 164:3 | 0 | 0 | 1 | 0 |
| syntheses-compact-1024x768.png | 190:175 | 0 | 0 | 1 | 0 |
| syntheses-mobile-list-390x844.png | 190:433 | 0 | 0 | 1 | 0 |
| syntheses-mobile-detail-390x844.png | 190:455 | 0 | 0 | 1 | 0 |
| apercu-desktop-1440x1024.png | 51:2 (synthesis block) | 0 | 0 | 0 | 1 |
| conversation-desktop-1440x1024.png | 46:2 (teaser) | 0 | 0 | 0 | 1 |

## Verdict
**PASS WITH C/D RESERVES** — **A=0 · B=0** (target met). C items are bounded polish; D items are honest Product lineage variance, not UI invention.

## Re-capture note
Dev server must run with `SFIA_STUDIO_PRODUCT_DB_PATH` (from `.env.local`) and auth storage state; otherwise Synthèses surface shows `Persistance Product SQLite indisponible` (runtime misconfiguration — not a visual class).
```

### .tmp-sfia-review/p5-s04-visual/after/manifest.json

_Lines: 51_

```json
{
  "capturedAt": "2026-10-05T17:33:36.118Z",
  "items": [
    {
      "viewport": "1440x1024",
      "view": "syntheses",
      "state": "list",
      "figma": "164:3",
      "figmaRef": "/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3/.tmp-sfia-review/p5-s04-visual/figma/desktop-164-3.png",
      "file": "syntheses-desktop-1440x1024.png"
    },
    {
      "viewport": "1024x768",
      "view": "syntheses",
      "state": "list",
      "figma": "190:175",
      "figmaRef": "/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3/.tmp-sfia-review/p5-s04-visual/figma/compact-190-175.png",
      "file": "syntheses-compact-1024x768.png"
    },
    {
      "viewport": "390x844",
      "view": "syntheses",
      "state": "mobile-list",
      "figma": "190:433",
      "figmaRef": "/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3/.tmp-sfia-review/p5-s04-visual/figma/mobile-list-190-433.png",
      "file": "syntheses-mobile-list-390x844.png"
    },
    {
      "viewport": "390x844",
      "view": "syntheses",
      "state": "mobile-detail",
      "figma": "190:455",
      "figmaRef": "/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3/.tmp-sfia-review/p5-s04-visual/figma/mobile-detail-190-455.png",
      "file": "syntheses-mobile-detail-390x844.png"
    },
    {
      "viewport": "1440x1024",
      "view": "overview",
      "state": "synthesis-preview",
      "figma": "51:2",
      "purpose": "Aperçu synthesis teaser block",
      "file": "apercu-desktop-1440x1024.png"
    },
    {
      "viewport": "1440x1024",
      "view": "conversation",
      "state": "synthesis-teaser",
      "file": "conversation-desktop-1440x1024.png"
    }
  ]
}
```

## COMPLETE CONTENTS CHECKLIST (previously-missing)

| File | Lines embedded | Signature verified locally |
|---|---:|---|
| `projects/sfia-studio/app/lib/oa/synthesis/application/buildProductSynthesis.ts` | 340 | `export function buildProductSynthesis` → YES |
| `projects/sfia-studio/app/lib/oa/synthesis/application/materializeProductSynthesis.ts` | 54 | `export async function materializeProductSynthesis` → YES |
| `projects/sfia-studio/app/lib/oa/synthesis/application/rebuildProductSynthesis.ts` | 28 | `export async function rebuildProductSynthesis` → YES |
| `projects/sfia-studio/app/lib/oa/synthesis/application/searchProductSyntheses.ts` | 10 | `export async function searchProductSyntheses` → YES |
| `projects/sfia-studio/app/lib/oa/synthesis/domain/types.ts` | 56 | `export type ProductSynthesisProjection` → YES |
| `projects/sfia-studio/app/lib/oa/synthesis/domain/invariants.ts` | 174 | `export function validateProductSynthesisShape` → YES |
| `projects/sfia-studio/app/lib/oa/synthesis/infrastructure/sqlite/sqliteSynthesisRepository.ts` | 229 | `export class SqliteSynthesisRepository` → YES |
| `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts` (diff) | (unified) | `CREATE TABLE IF NOT EXISTS oa_syntheses` → YES |
| `projects/sfia-studio/app/lib/oa/synthesis/ports/synthesisRepositoryPort.ts` | 23 | `export interface SynthesisRepositoryPort` → NO |
| `projects/sfia-studio/app/features/project-assistant/buildProductSynthesisLineageInput.ts` | 149 | `export async function buildProductSynthesisLineageInput` → YES |

## 38. S03 handoff context (integrated)
P5-S03 merged PR #557 · main 49b4fdaf… · object-native Aperçu/Exécution preserved · S04 adds Synthèses without new parallel architecture.

## 39. Test output capture (S04 targeted)
```
Test Files  5 passed (5)
Tests  25 passed (25)
```

## 40. Test output capture (full suite)
```
Test Files  471 passed | 18 skipped (489)
Tests  5223 passed | 138 skipped (5361)
```

## 41. Dev server note
Restart: `OPS1_CONVERSATION_PROVIDER=fake SFIA_STUDIO_E2E_QA_CONTROL=1 SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 npm run dev -- --hostname localhost --port 3020`
Requires `.env.local` Product DB path for SQLite synthesis services.

## 42. Remaining debts
F2 routing OPEN · R3 NOT STARTED · P6 NOT READY · runtime v3 NON ADOPTED · richer Product lineage for demo content (optional)

## 43. Next gate
**CHATGPT P5-S04 CRITICAL REVIEW** → **MORRIS P5-S04 GIT INTEGRATION**

## 44. Final verdict (review pack)
```text
PASS — P5-S04 PRODUCT-DERIVED SYNTHÈSES
LOCAL CANDIDATE COMPLETE — NOT INTEGRATED
M9 + DETERMINISTIC BUILDER + READ-ONLY UI PROVEN
REAL SYNTHESIS SEEDED IN CAMPAIGN PRODUCT DB
A=0 / B=0 · ZERO REAL
FULL SUITE GREEN AFTER S04 TEST HYGIENE
PROJECT COMMIT/PUSH/PR NOT PERFORMED
```

---

# Cursor Report (items 1–64)

1. Timestamp: 2026-10-05 19:35:31 +0200 Europe/Paris
2. Workspace: `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3`
3. Branch: `delivery/sfia-studio-product-simplification-p5-s04-product-derived-syntheses`
4. HEAD: `49b4fdaf078fdf2a5c7bfce3baad05fa65220c2e`
5. origin/main alignment at start: **YES** (49b4fdaf)
6. P5-S04 delivery authorization: **CONSUMED**
7. P5-S03 status: **INTEGRATED / POST-MERGE VERIFIED** (#557)
8. P5-S04 status: **LOCAL CANDIDATE IN PROGRESS → COMPLETE (this pass)**
9. Project commit performed: **NO**
10. Project push performed: **NO**
11. Project PR performed: **NO**
12. ZERO REAL: **YES**
13. P5_S02_RUN_REAL set: **NO**
14. Product DB path used: campaign `oa-product.sqlite` via `.env.local`
15. M9 table present after store open: **YES** (`oa_syntheses`)
16. ClaimEvaluation seeded: **clm:p5-s04:campaign:0ed5c4e1**
17. Synthesis materialized: **syn:65645eee8ad4206537f90d0c2b4b6c53**
18. Seed script: `_seed-synthesis.mjs` — **PASS**
19. Capture script: `_capture.mjs` — **PASS** (after dev restart)
20. syntheses-desktop-1440x1024.png: **CAPTURED**
21. syntheses-compact-1024x768.png: **CAPTURED**
22. syntheses-mobile-list-390x844.png: **CAPTURED**
23. syntheses-mobile-detail-390x844.png: **CAPTURED**
24. apercu-desktop-1440x1024.png (preview): **CAPTURED**
25. conversation-desktop-1440x1024.png (teaser): **CAPTURED**
26. Visual A count: **0**
27. Visual B count: **0**
28. Visual C count: **4**
29. Visual D count: **3**
30. correction-design-note.md: **WRITTEN**
31. tsc: **PASS**
32. lint: **PASS**
33. build: **PASS**
34. npm test full: **PASS** (5223)
35. S04 D0 tests: **PASS** (13)
36. S04 UI tests: **PASS** (3)
37. Migration tests: **PASS**
38. importBoundaries updated: **YES**
39. PRR digest updated: **YES** (db.ts)
40. pre-m6 synthesis mocks: **YES** (3 files)
41. Synthèses UI read-only: **PROVEN** (T16)
42. Overview teaser: **PROVEN** (runtime capture)
43. Conversation teaser: **PROVEN** (runtime capture)
44. NON-AUTORITATIVE badge: **VISIBLE** (capture)
45. No fake recommendation when absent: **PROVEN** (D0 T05)
46. ClaimEvaluation required: **PROVEN** (D0 T01)
47. Persistence survives reopen: **PROVEN** (D0 T07)
48. Roadmap truth-sync: **DONE**
49. Integrated delivery doc S04 section: **DONE**
50. chatgpt-review.md FULL pack: **THIS FILE**
51. Handoff publish script present: **YES**
52. Handoff commit message prepared: **docs(review-handoff): publish P5 S04 delivery review**
53. Before handoff SHA: **7c8fd2e45cab48c5428a3b865c4f638c860be0b2**
54. Before handoff blob: **97c75bd19b7c64367d137171f6025b36b9480d60**
55. L3 handoff worktree: `/Users/morris/Projects/sfia-workspace/sfia-review-handoff`
56. Preserve .tmp historical evidence: **YES**
57. Build Doctrine / P3 / P4 / v3 framing modified: **NO**
58. F2 debt: **OPEN**
59. R3: **NOT STARTED**
60. P6 READY: **NO**
61. runtime v3: **NON ADOPTED**
62. P5 COMPLETE: **NO**
63. Next Morris gate: **P5-S04 GIT INTEGRATION** (after ChatGPT PASS)
64. **VERDICT: PASS — LOCAL CANDIDATE COMPLETE, NOT INTEGRATED**
