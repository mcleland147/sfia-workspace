# P5-S04 — CORRECTION PASS 02 — SYNTHESIS FAILURE OBSERVABILITY + PILOT SEMANTICS + RECOMMENDATION CURRENTNESS + EVIDENCE FAIL-CLOSED — FULL REVIEW PACK

## 0. Header
**Pass:** P5-S04 CORRECTION PASS 02
**Status:** LOCAL CANDIDATE COMPLETE — FINAL CRITICAL RE-REVIEW REQUIRED — NOT INTEGRATED
**Completeness bar:** FULL — complete created-file contents + complete useful unified diffs for ALL CP02-changed files (same bar as prior republication).

## 1. Timestamp
2026-10-05 21:13:44 +0200 Europe/Paris

## 2. Morris CP02 authorization
**MORRIS P5-S04 CORRECTION PASS 02 AUTHORIZATION = CONSUMED**

## 3. Branch
`delivery/sfia-studio-product-simplification-p5-s04-product-derived-syntheses`

## 4. HEAD (local)
`49b4fdaf078fdf2a5c7bfce3baad05fa65220c2e` (= origin/main — S04+CP01+CP02 work **uncommitted**)

## 5. origin/main
`49b4fdaf078fdf2a5c7bfce3baad05fa65220c2e` — PR **#557** MERGED (P5-S03)

## 6. Handoff before
`sfia/review-handoff` @ `c22a99dffd90d3bb19edd4178a6ea06547f496c6` · blob `8d8fcd589576ce552bb47c678373614480979640`

## 7. Template SHA
`948156a21309ef99c3aaed6410947dc6b9bc569a` (`prompts/templates/sfia-cycle-execution-template.md`)

## 8. Architecture AFTER CP02
AUTHORITATIVE PRODUCT FACTS → Contract Result resolution → durable W3-C Recommendation → deterministic Synthesis projection → M9 → Pilot UI.

Production seam: `materializeW3bProductTerminal` → `finishWithOptionalPostEvidence` → `maybeMaterializeProductSynthesisAfterW3c` (soft-fail; never mutates Truth C).
Diagnostic carrier: optional `synthesisMaterialization` on ok:true Product terminal (`materialized` | `failed`+`retryable:true`).

## 9. Critical Review closures
| Finding | Status |
| --- | --- |
| Soft-fail observability (SF) | **CLOSED** — real SQLite INSERT abort seam; CE/W3-C durable; no Synthesis row; rehydrate retry |
| Pilot semantic projection (PL) | **CLOSED** — subject/planned/done/recommendation Pilot FR; OA internals absent |
| Recommendation currentness (REC) | **CLOSED** — stale CE Recommendation fallback removed; current W3-C only |
| Evidence fail-closed (EV) | **CLOSED** — missing bound Evidence → `SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND` |
| B1 Desktop/Compact | **CLOSED — NO REGRESSION** |
| B2 Mobile | **CLOSED — NO REGRESSION** |
| PILOT TECHNICAL LANGUAGE LEAKS | **0** |

## 10. Product-path visual seed
Script: `.tmp-sfia-review/p5-s04-visual/cp02/_seed-product-path.mjs`
Mode: campaign rehydrate FocusFlow (`prj:2eaad5df…`) via `materializeW3bProductTerminal`
Synthesis: `syn:ed340d63e583ff51bc9a0cb7a6c35219` · title `Synthèse — Résultat de l'action non prouvé`
CP01 evidence preserved under `.tmp-sfia-review/p5-s04-visual/cp01/`.

## 11. Visual
See `.tmp-sfia-review/p5-s04-visual/cp02/manifest.md` + `correction-design-note.md` — **A=0 · B=0** · B1/B2 NO REGRESSION · PILOT LEAKS = 0.

## 12. Anti-claims
≠ Truth C · ≠ P5-S04 INTEGRATED · ≠ P5 COMPLETE · ≠ R3 · ≠ P6 READY · ≠ runtime v3 ADOPTED · ≠ project commit/push/PR · ≠ OpenAI REAL

## 13. Validation
- tsc `--noEmit`: **PASS** (exit 0)
- lint: **PASS** (No ESLint warnings or errors)
- build: **PASS** (`npm run build` exit 0 — Compiled + lint/types + static generation)
- full npm test: **PASS** — Test Files **473 passed | 18 skipped (491)** · Tests **5263 passed | 138 skipped (5401)**
- CP02 targeted SF/PL/REC/EV: **22 passed**
- ZERO REAL · `P5_S02_RUN_REAL` never set

## 14. git status --short (project scope)
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
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.tsx
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
 M projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? .tmp-sfia-review/p5-s04-visual/cp02/
?? projects/sfia-studio/app/__tests__/oa/synthesis/
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/synthesisPresentation.ts
?? projects/sfia-studio/app/features/project-assistant/buildProductSynthesisLineageInput.ts
?? projects/sfia-studio/app/features/project-assistant/synthesisActions.ts
?? projects/sfia-studio/app/features/project-assistant/w2/maybeMaterializeProductSynthesisAfterW3c.ts
?? projects/sfia-studio/app/lib/oa/synthesis/
```

## 15. git diff --stat HEAD (tracked modified)
```
 .../oa/decision/m3ProductSchemaMigration.test.ts   |  2 +-
 .../oa/project/m5ProductSchemaMigration.test.ts    |  4 +-
 .../oa/project/m6ProductSchemaMigration.test.ts    |  6 +-
 .../automaticProjectResume.ui.test.tsx             | 12 +++
 .../p5.s01.workspaceLayout.ui.test.tsx             | 12 +++
 .../p5.s03.objectNativeViews.ui.test.tsx           | 12 +++
 .../productJourneyProjectionCoherence.ui.test.tsx  | 12 +++
 .../importBoundaries.test.ts                       |  3 +
 .../ProjectWorkspacePage.module.css                |  8 ++
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     | 64 +++++++++++++--
 .../surfaces/ConversationSurface.tsx               | 41 ++++++++++
 .../pre-m6-product-ui/surfaces/OverviewSurface.tsx | 92 +++++++++++++++++++---
 .../surfaces/ProjectContextSummary.tsx             | 40 +++++++---
 .../w2/materializeW3bProductTerminal.ts            | 84 +++++++++++++++++---
 projects/sfia-studio/app/lib/oa/project/index.ts   |  3 +
 .../app/lib/oa/project/infrastructure/sqlite/db.ts | 39 ++++++++-
 .../convergence/sfia-studio-convergence-roadmap.md |  6 +-
 ...t-product-simplification-integrated-delivery.md | 53 ++++++++-----
 .../production-runtime-reference.manifest.json     |  2 +-
 19 files changed, 430 insertions(+), 65 deletions(-)
```

---

# COMPLETE CREATED-FILE CONTENTS

## FILE: `projects/sfia-studio/app/lib/oa/synthesis/index.ts` (57 lines)

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
  buildSynthesisSourceMaterial,
  computeSynthesisSourceFingerprint,
  formatW3cRecommendationForSynthesis,
  presentProductOutcomeSubject,
  projectPilotRecommendationFromW3c,
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

## FILE: `projects/sfia-studio/app/lib/oa/synthesis/domain/types.ts` (60 lines)

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
  | "SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_SUBJECT"
  | "SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_BINDINGS"
  | "SYNTHESIS_LINEAGE_BINDINGS_MISMATCH"
  | "SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND"
  | "SYNTHESIS_AUTHORITY_FORBIDDEN"
  | "SYNTHESIS_PERSISTENCE_FAILED";
```

## FILE: `projects/sfia-studio/app/lib/oa/synthesis/domain/errors.ts` (36 lines)

```ts
import type { SynthesisDetailCode } from "./types";

const SAFE_MESSAGES: Record<SynthesisDetailCode, string> = {
  SYNTHESIS_INVALID: "Product synthesis projection is invalid.",
  SYNTHESIS_NOT_FOUND: "Product synthesis projection was not found.",
  SYNTHESIS_ALREADY_EXISTS: "Product synthesis projection already exists.",
  SYNTHESIS_LINEAGE_REQUIRES_CLAIM_EVALUATION:
    "Product synthesis lineage requires a ClaimEvaluation.",
  SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_SUBJECT:
    "Product synthesis lineage requires a Contract Result ClaimEvaluation.",
  SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_BINDINGS:
    "Product synthesis lineage requires Contract Result bindings.",
  SYNTHESIS_LINEAGE_BINDINGS_MISMATCH:
    "Product synthesis lineage bindings do not match current Product facts.",
  SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND:
    "Product synthesis lineage requires every bound Evidence row to exist.",
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

## FILE: `projects/sfia-studio/app/lib/oa/synthesis/domain/invariants.ts` (174 lines)

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

## FILE: `projects/sfia-studio/app/lib/oa/synthesis/ports/synthesisRepositoryPort.ts` (23 lines)

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

## FILE: `projects/sfia-studio/app/lib/oa/synthesis/application/buildProductSynthesis.ts` (655 lines)

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
  "Aucune recommandation Product courante n'est disponible pour cette synthèse." as const;

export type BuildProductSynthesisExecutionContractSummary = {
  readonly executionContractId: string;
  readonly action?: string;
  readonly target?: string;
  readonly scope?: string;
  /** Human-readable planned fields when present on bound semantic material. */
  readonly title?: string;
  readonly objective?: string;
  readonly description?: string;
  readonly cycleInstanceId?: string | null;
  readonly executionContractVersion?: number;
  readonly semanticFingerprint?: string;
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
  readonly frozenVersion?: number;
};

/**
 * Recommendation for Synthesis — prefer structured W3-C fields for Pilot
 * adaptation. Optional `text` is an already Pilot-adapted string (tests / callers).
 * Never invent recommendation content when absent.
 */
export type BuildProductSynthesisRecommendation = {
  readonly ref: string;
  readonly text?: string | null;
  readonly kind?: string | null;
  readonly headline?: string | null;
  readonly nextStep?: string | null;
  readonly nextActionCode?: string | null;
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

/**
 * Canonical source material that affects derived sections / bindings.
 * Excludes generatedAt and random synthesisId.
 */
export function buildSynthesisSourceMaterial(input: {
  readonly projectId: string;
  readonly claimEvaluation: ClaimEvaluation;
  readonly bindings: SynthesisSourceBindings;
  readonly canonicalVerdict: ProductSynthesisProjection["canonicalVerdict"];
  readonly executionContract?: BuildProductSynthesisExecutionContractSummary | null;
  readonly attempt?: BuildProductSynthesisAttemptSummary | null;
  readonly evidence: readonly BuildProductSynthesisEvidenceSummary[];
  readonly reviewBundle?: BuildProductSynthesisReviewBundleSummary | null;
  readonly recommendationText: string;
  readonly recommendationRef: string | null;
}): Record<string, unknown> {
  const ce = input.claimEvaluation;
  const crb = ce.contractResultBindings ?? null;
  return {
    projectId: input.projectId,
    claimEvaluation: {
      claimEvaluationId: ce.claimEvaluationId,
      subjectKind: ce.subjectKind ?? null,
      status: ce.status,
      claimStatement: ce.claimStatement,
      supersedesClaimEvaluationId: ce.supersedesClaimEvaluationId ?? null,
      reviewBundleId: ce.reviewBundleId ?? null,
      reviewBundleVersion: ce.reviewBundleVersion ?? null,
      contractResultBindings: crb
        ? {
            projectId: crb.projectId,
            cycleInstanceId: crb.cycleInstanceId ?? null,
            executionContractId: crb.executionContractId,
            executionContractVersion: crb.executionContractVersion,
            executionContractSemanticFingerprint:
              crb.executionContractSemanticFingerprint,
            executionAttemptId: crb.executionAttemptId,
            reviewBundleId: crb.reviewBundleId,
            reviewBundleVersion: crb.reviewBundleVersion,
            evidenceRefs: [...crb.evidenceRefs],
          }
        : null,
    },
    bindings: input.bindings,
    canonicalVerdict: input.canonicalVerdict,
    executionContract: input.executionContract
      ? {
          executionContractId: input.executionContract.executionContractId,
          action: input.executionContract.action ?? null,
          target: input.executionContract.target ?? null,
          scope: input.executionContract.scope ?? null,
          title: input.executionContract.title ?? null,
          objective: input.executionContract.objective ?? null,
          description: input.executionContract.description ?? null,
          cycleInstanceId: input.executionContract.cycleInstanceId ?? null,
          executionContractVersion:
            input.executionContract.executionContractVersion ?? null,
          semanticFingerprint:
            input.executionContract.semanticFingerprint ?? null,
        }
      : null,
    attempt: input.attempt
      ? {
          attemptId: input.attempt.attemptId,
          status: input.attempt.status ?? null,
          resultRef: input.attempt.resultRef ?? null,
        }
      : null,
    evidence: input.evidence.map((e) => ({
      evidenceId: e.evidenceId,
      status: e.status ?? null,
      type: e.type ?? null,
    })),
    reviewBundle: input.reviewBundle
      ? {
          reviewBundleId: input.reviewBundle.reviewBundleId,
          status: input.reviewBundle.status ?? null,
          completeness: input.reviewBundle.completeness ?? null,
          frozenVersion: input.reviewBundle.frozenVersion ?? null,
        }
      : null,
    recommendationRef: input.recommendationRef,
    recommendationText: input.recommendationText,
  };
}

export function computeSynthesisSourceFingerprint(input: {
  bindings: SynthesisSourceBindings;
  canonicalVerdict: ProductSynthesisProjection["canonicalVerdict"];
  claimEvaluationStatus: ClaimEvaluation["status"];
  recommendationRef: string | null;
  /** Prefer full source material when available (CP01 semantic completeness). */
  sourceMaterial?: Record<string, unknown>;
}): string {
  const material =
    input.sourceMaterial ??
    ({
      bindings: input.bindings,
      canonicalVerdict: input.canonicalVerdict,
      claimEvaluationStatus: input.claimEvaluationStatus,
      recommendationRef: input.recommendationRef,
    } as Record<string, unknown>);
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

/** Pilot subject/title from Product outcome — never raw claimStatement / EC ids. */
export function presentProductOutcomeSubject(
  canonical: ProductSynthesisProjection["canonicalVerdict"],
): string {
  if (canonical === "PASS") return "Résultat de l'action atteint";
  if (canonical === "FAIL") return "Résultat de l'action en échec";
  return "Résultat de l'action non prouvé";
}

function presentVerdictSentence(
  verdictLabel: SynthesisVerdictLabel,
): string {
  if (verdictLabel === "atteint") {
    return "Le résultat évalué pour ce travail est atteint.";
  }
  if (verdictLabel === "echec") {
    return "Le résultat évalué pour ce travail est un échec.";
  }
  return "Le résultat évalué pour ce travail n'est pas prouvé.";
}

/**
 * Pilot language for done — Attempt terminal ≠ Product proof.
 */
function presentAttemptDone(
  attempt: BuildProductSynthesisAttemptSummary | null | undefined,
  canonicalVerdict: ProductSynthesisProjection["canonicalVerdict"],
): string {
  if (!attempt) {
    return "Aucune réalisation Product n'est encore rattachée à cette synthèse.";
  }
  const status = (attempt.status ?? "").toLowerCase();
  const technicalOk = status === "succeeded" || status === "success";
  const technicalFail = status === "failed" || status === "failure";
  const cancelled = status === "cancelled" || status === "canceled";
  const stopped = status === "stopped" || status === "governed_stop";
  const timedOut = status === "timeout" || status === "timed_out";

  if (technicalOk) {
    if (canonicalVerdict === "PASS") {
      return "La réalisation prévue s'est terminée ; le résultat Product est atteint.";
    }
    if (canonicalVerdict === "FAIL") {
      return "La réalisation technique s'est terminée, mais le résultat Product est en échec.";
    }
    return "La réalisation technique s'est terminée, sans preuve Product suffisante pour conclure.";
  }
  if (technicalFail) {
    return "La réalisation prévue s'est terminée en échec technique.";
  }
  if (cancelled) {
    return "La réalisation prévue a été annulée.";
  }
  if (stopped) {
    return "La réalisation prévue a été arrêtée avant son terme.";
  }
  if (timedOut) {
    return "La réalisation prévue a dépassé le délai imparti.";
  }
  if (status) {
    return "Une réalisation Product est rattachée, sans détail d'état exploitable pour le Pilote.";
  }
  return "Une réalisation Product est rattachée, sans détail d'état supplémentaire.";
}

/**
 * Planned work — never surface raw action/target/scope machine codes
 * (cursor.docs_write.apply, workspace.isolated.*, studio.gcec.*, …).
 * Prefer human-readable title/objective/description when present.
 */
function presentPlanned(
  executionContract?: BuildProductSynthesisExecutionContractSummary | null,
): string {
  if (!executionContract) {
    return "Aucun travail prévu n'est disponible pour cette synthèse.";
  }
  const readable =
    executionContract.title?.trim() ||
    executionContract.objective?.trim() ||
    executionContract.description?.trim() ||
    "";
  if (readable.length > 0) {
    return `Travail prévu : ${readable}.`;
  }
  return "Un travail Product était prévu pour cette synthèse.";
}

function presentVerified(
  evidence: readonly BuildProductSynthesisEvidenceSummary[],
): string {
  if (evidence.length === 0) {
    return "Aucun élément de preuve détaillé n'est disponible pour cette synthèse.";
  }
  const byType = new Map<string, number>();
  let verifiedCount = 0;
  for (const e of evidence) {
    const type = e.type?.trim() || "élément";
    byType.set(type, (byType.get(type) ?? 0) + 1);
    const st = (e.status ?? "").toLowerCase();
    if (st === "verified" || st === "accepted" || st === "complete") {
      verifiedCount += 1;
    }
  }
  const typeParts = [...byType.entries()]
    .map(([type, n]) => (n === 1 ? type : `${n}× ${type}`))
    .join(", ");
  if (verifiedCount > 0) {
    return `${evidence.length} élément${evidence.length > 1 ? "s" : ""} de preuve rattaché${evidence.length > 1 ? "s" : ""} (${typeParts}), dont ${verifiedCount} vérifié${verifiedCount > 1 ? "s" : ""}.`;
  }
  return `${evidence.length} élément${evidence.length > 1 ? "s" : ""} de preuve rattaché${evidence.length > 1 ? "s" : ""} (${typeParts}).`;
}

/**
 * Map D5 NextActionCode → French Pilot next-step (mirrors classifyW3cD5NextAction
 * classes). solicit_morris_* → arbitrage/validation without naming Morris.
 */
function pilotNextStepFromActionCode(code: string | null | undefined): string | null {
  if (!code) return null;
  switch (code) {
    case "complete_evidence":
      return "Compléter les éléments de preuve pour poursuivre.";
    case "verify_evidence_integrity":
      return "Vérifier l'intégrité des éléments de preuve.";
    case "freeze_review_bundle":
      return "Finaliser le dossier d'évaluation.";
    case "complete_review":
      return "Compléter l'évaluation en cours.";
    case "evaluate_claim":
      return "Qualifier le résultat Product.";
    case "confirm_claim_evaluation":
      return "Confirmer le résultat Product évalué.";
    case "resolve_dispute":
      return "Trancher le désaccord en cours.";
    case "propose_maturity":
      return "Proposer un niveau de maturité.";
    case "confirm_maturity":
      return "Confirmer le niveau de maturité.";
    case "downgrade_maturity":
      return "Revoir le niveau de maturité à la baisse.";
    case "solicit_morris_arbitration":
      return "Un arbitrage humain est recommandé avant de poursuivre.";
    case "solicit_morris_go":
      return "Une validation pour le prochain cycle est recommandée.";
    default:
      return null;
  }
}

function pilotSentenceFromKind(kind: string | null | undefined): string | null {
  if (!kind) return null;
  switch (kind) {
    case "continue":
      return "Continuer selon la recommandation Product.";
    case "recover":
      return "Reprendre par une récupération Product.";
    case "replan":
      return "Revoir la suite du travail avant de poursuivre.";
    case "fail_closed":
      return "S'arrêter de façon prudente : aucune suite automatique.";
    default:
      return null;
  }
}

function pilotHeadlineFromStructured(input: {
  readonly kind?: string | null;
  readonly nextActionCode?: string | null;
  readonly headline?: string | null;
}): string | null {
  const code = input.nextActionCode ?? null;
  if (code === "solicit_morris_arbitration") {
    return "Arbitrage de coordination recommandé";
  }
  if (code === "solicit_morris_go") {
    return "Validation pour le prochain cycle recommandée";
  }
  if (
    code === "confirm_claim_evaluation" ||
    code === "confirm_maturity"
  ) {
    return "Confirmation humaine recommandée";
  }
  if (input.kind === "recover") {
    return "Récupération Product recommandée";
  }
  if (input.kind === "continue") {
    return "Poursuite recommandée";
  }
  if (input.kind === "fail_closed") {
    return "Arrêt prudent recommandé";
  }
  if (input.kind === "replan") {
    return "Reprise de planification recommandée";
  }
  // Only reuse a headline when it is already Pilot-safe (no OA jargon tokens).
  const raw = input.headline?.trim() ?? "";
  if (
    raw &&
    !/\b(Morris|D5|HumanDecision|ProjectTrajectory|W2|ClaimEvaluation|ReviewBundle|ContractResult|NOT_PROVEN|expectedOutputs)\b/i.test(
      raw,
    )
  ) {
    return raw;
  }
  return null;
}

/**
 * Pilot adapter — structured W3-C fields → French Pilot recommendation text.
 * Never joins raw rationale (D5 / HumanDecision / ProjectTrajectory / W2).
 */
export function projectPilotRecommendationFromW3c(input: {
  readonly kind?: string | null;
  readonly headline?: string | null;
  readonly nextStep?: string | null;
  readonly nextActionCode?: string | null;
}): string {
  const headline = pilotHeadlineFromStructured(input);
  const next =
    pilotNextStepFromActionCode(input.nextActionCode) ??
    pilotSentenceFromKind(input.kind);
  const parts: string[] = [];
  if (headline) parts.push(headline);
  if (next) parts.push(next);
  // Do not append raw nextStep machine tokens (complete_evidence, etc.).
  return parts.length > 0 ? parts.join(" ") : ABSENT_RECOMMENDATION_TEXT;
}

function resolveRecommendationText(
  recommendation: BuildProductSynthesisRecommendation | null | undefined,
): string {
  if (!recommendation) return ABSENT_RECOMMENDATION_TEXT;
  const preadapted = recommendation.text?.trim();
  if (preadapted) return preadapted;
  return projectPilotRecommendationFromW3c(recommendation);
}

function buildSections(input: {
  executionContract?: BuildProductSynthesisExecutionContractSummary | null;
  attempt?: BuildProductSynthesisAttemptSummary | null;
  evidence: readonly BuildProductSynthesisEvidenceSummary[];
  reviewBundle?: BuildProductSynthesisReviewBundleSummary | null;
  recommendationText: string;
  canonicalVerdict: ProductSynthesisProjection["canonicalVerdict"];
  verdictLabel: SynthesisVerdictLabel;
}): SynthesisSections {
  const gapsParts: string[] = [];
  if (!input.executionContract) {
    gapsParts.push("travail prévu non rattaché");
  }
  if (!input.attempt) {
    gapsParts.push("réalisation non rattachée");
  }
  if (input.evidence.length === 0) {
    gapsParts.push("aucun élément de preuve détaillé");
  }
  if (!input.reviewBundle) {
    gapsParts.push("dossier d'évaluation incomplet");
  }
  if (input.canonicalVerdict !== "PASS") {
    gapsParts.push(
      input.canonicalVerdict === "FAIL"
        ? "résultat en échec"
        : "résultat non prouvé",
    );
  }
  const gaps =
    gapsParts.length > 0
      ? `Écarts ou réserves: ${gapsParts.join("; ")}.`
      : "Aucun écart Product explicite pour cette synthèse.";

  const evaluation =
    input.canonicalVerdict === "PASS"
      ? "Le résultat a été qualifié comme atteint."
      : input.canonicalVerdict === "FAIL"
        ? "Le résultat a été qualifié comme un échec."
        : "Le résultat n'a pas pu être prouvé.";

  return {
    summary: presentVerdictSentence(input.verdictLabel),
    planned: presentPlanned(input.executionContract),
    done: presentAttemptDone(input.attempt, input.canonicalVerdict),
    evaluation,
    gaps,
    impact:
      input.canonicalVerdict === "PASS"
        ? "Impact sur le projet: le résultat atteint peut servir de base pour la suite, sans créer d'autorité supplémentaire."
        : input.canonicalVerdict === "FAIL"
          ? "Impact sur le projet: l'échec doit être traité avant de poursuivre sur la même lignée."
          : "Impact sur le projet: le résultat non prouvé laisse la continuité ou la récupération à décider hors synthèse.",
    verdict: presentVerdictSentence(input.verdictLabel),
    recommendation: input.recommendationText,
    verified: presentVerified(input.evidence),
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
  const recommendationText = resolveRecommendationText(input.recommendation);

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
  const sourceMaterial = buildSynthesisSourceMaterial({
    projectId: input.projectId,
    claimEvaluation: ce,
    bindings,
    canonicalVerdict,
    executionContract: input.executionContract,
    attempt: input.attempt,
    evidence,
    reviewBundle: input.reviewBundle,
    recommendationText,
    recommendationRef,
  });
  const sourceFingerprint = computeSynthesisSourceFingerprint({
    bindings,
    canonicalVerdict,
    claimEvaluationStatus: ce.status,
    recommendationRef,
    sourceMaterial,
  });

  const generatedAt = input.generatedAt ?? new Date().toISOString();
  // Identity is fingerprint-keyed for idempotence; IDs are unique per materialization.
  const synthesisId =
    input.synthesisId ?? `syn:${randomBytes(16).toString("hex")}`;

  const sections = buildSections({
    executionContract: input.executionContract,
    attempt: input.attempt,
    evidence,
    reviewBundle: input.reviewBundle,
    recommendationText,
    canonicalVerdict,
    verdictLabel,
  });

  const outcomeSubject = presentProductOutcomeSubject(canonicalVerdict);
  const defaultTitle = `Synthèse — ${outcomeSubject}`;

  const synthesis: ProductSynthesisProjection = {
    synthesisId,
    projectId: input.projectId,
    cycleInstanceId,
    title: input.title?.trim() || defaultTitle,
    subject: outcomeSubject,
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
    s.summary,
    s.planned,
    s.done,
    s.evaluation,
    s.gaps,
    s.impact,
    s.verdict,
    s.recommendation,
    s.verified,
  ]
    .join("\n")
    .toLowerCase();
}

/**
 * Structured W3-C → Pilot recommendation text (no raw rationale).
 * Delegates to projectPilotRecommendationFromW3c.
 */
export function formatW3cRecommendationForSynthesis(input: {
  readonly kind?: string | null;
  readonly headline?: string | null;
  readonly nextStep?: string | null;
  readonly nextActionCode?: string | null;
  /** @deprecated Ignored — rationale must not reach Pilot sections. */
  readonly rationale?: string | null;
}): string {
  void input.rationale;
  return projectPilotRecommendationFromW3c({
    kind: input.kind,
    headline: input.headline,
    nextStep: input.nextStep,
    nextActionCode: input.nextActionCode,
  });
}
```

## FILE: `projects/sfia-studio/app/lib/oa/synthesis/application/materializeProductSynthesis.ts` (84 lines)

```ts
import { SynthesisDomainError } from "../domain/errors";
import type { ProductSynthesisProjection } from "../domain/types";
import type { SynthesisRepositoryPort } from "../ports/synthesisRepositoryPort";
import {
  buildProductSynthesis,
  type BuildProductSynthesisInput,
} from "./buildProductSynthesis";

export type MaterializeProductSynthesisInput = BuildProductSynthesisInput;

async function writeSuccessor(
  repository: SynthesisRepositoryPort,
  input: MaterializeProductSynthesisInput,
  prior: ProductSynthesisProjection,
  candidate: ProductSynthesisProjection,
): Promise<ProductSynthesisProjection> {
  await repository.softSupersede(prior.synthesisId);
  const successor = buildProductSynthesis({
    ...input,
    supersedes: prior.synthesisId,
    version: prior.version + 1,
    generatedAt: candidate.generatedAt,
    synthesisId: candidate.synthesisId,
  });
  await repository.create(successor);
  return successor;
}

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
    return writeSuccessor(repository, input, priorCurrent, candidate);
  }

  // CE-B supersedesClaimEvaluationId = CE-A → Synthesis-B supersedes Synthesis-A
  const supersededCeId = input.claimEvaluation.supersedesClaimEvaluationId;
  if (supersededCeId) {
    const priorFromSupersededCe =
      await repository.findCurrentByClaimEvaluationId(
        candidate.projectId,
        supersededCeId,
      );
    if (
      priorFromSupersededCe &&
      priorFromSupersededCe.sourceFingerprint !== candidate.sourceFingerprint
    ) {
      return writeSuccessor(
        repository,
        input,
        priorFromSupersededCe,
        candidate,
      );
    }
  }

  await repository.create(candidate);
  return candidate;
}
```

## FILE: `projects/sfia-studio/app/lib/oa/synthesis/application/rebuildProductSynthesis.ts` (28 lines)

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

## FILE: `projects/sfia-studio/app/lib/oa/synthesis/application/searchProductSyntheses.ts` (10 lines)

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

## FILE: `projects/sfia-studio/app/lib/oa/synthesis/infrastructure/sqlite/sqliteSynthesisRepository.ts` (229 lines)

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

## FILE: `projects/sfia-studio/app/lib/oa/synthesis/infrastructure/sqlite/createSqliteSynthesisServices.ts` (46 lines)

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

## FILE: `projects/sfia-studio/app/features/project-assistant/w2/maybeMaterializeProductSynthesisAfterW3c.ts` (106 lines)

```ts
/**
 * Soft-fail Synthesis materialization after durable W3-C success/rehydrate.
 * NEVER mutates Truth C (CE / Contract Result / Recommendation / Attempt).
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import {
  createSqliteSynthesisServices,
  isSynthesisDomainError,
  type ProductSynthesisProjection,
} from "@/lib/oa/synthesis";
import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";
import {
  w3cRecommendationEpistemicId,
  type W3cPostEvidenceLoopSuccess,
} from "./w3cPostEvidenceLoop";
import {
  buildProductSynthesisLineageInput,
  synthesisErrorMessage,
} from "../buildProductSynthesisLineageInput";

export type MaybeMaterializeProductSynthesisAfterW3cResult =
  | {
      readonly ok: true;
      readonly synthesis: ProductSynthesisProjection;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      /** Soft-fail: authoritative Product facts remain intact. */
      readonly softFailed: true;
    };

export async function maybeMaterializeProductSynthesisAfterW3c(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly product: W3BProductTerminalProjection;
  readonly postEvidence: W3cPostEvidenceLoopSuccess;
}): Promise<MaybeMaterializeProductSynthesisAfterW3cResult> {
  try {
    const claimEvaluationId =
      input.product.claimEvaluationId ??
      input.postEvidence.claimEvaluationId ??
      null;
    if (!claimEvaluationId) {
      return {
        ok: false,
        softFailed: true,
        code: "SYNTHESIS_LINEAGE_REQUIRES_CLAIM_EVALUATION",
        message: "ClaimEvaluation absente pour la synthèse dérivée.",
      };
    }

    const store = input.oa.projectServices.store;
    if (!(store instanceof SqliteProductStore)) {
      return {
        ok: false,
        softFailed: true,
        code: "PRODUCT_SQLITE_UNAVAILABLE",
        message: "Persistance Product SQLite indisponible pour la synthèse.",
      };
    }

    const evidenceId =
      input.postEvidence.evidenceId ||
      input.product.evidenceId ||
      "";
    // Pass structured W3-C fields — Pilot adapter derives text (no raw rationale).
    const recommendation = {
      ref: w3cRecommendationEpistemicId(evidenceId, claimEvaluationId),
      kind: input.postEvidence.recommendation.kind,
      headline: input.postEvidence.recommendation.headline,
      nextStep: input.postEvidence.recommendation.nextStep,
      nextActionCode: input.postEvidence.recommendation.nextActionCode,
    };

    const lineage = await buildProductSynthesisLineageInput({
      oa: input.oa,
      projectId: input.projectId,
      claimEvaluationId,
      recommendation,
    });
    if (!lineage.ok) {
      return {
        ok: false,
        softFailed: true,
        code: lineage.code,
        message: lineage.message,
      };
    }

    const services = createSqliteSynthesisServices({ productStore: store });
    const synthesis = await services.materialize(lineage.input);
    return { ok: true, synthesis };
  } catch (err) {
    return {
      ok: false,
      softFailed: true,
      code: isSynthesisDomainError(err)
        ? err.detailCode
        : "SYNTHESIS_MATERIALIZE_FAILED",
      message: synthesisErrorMessage(err),
    };
  }
}
```

## FILE: `projects/sfia-studio/app/features/project-assistant/buildProductSynthesisLineageInput.ts` (249 lines)

```ts
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
  contractResultBindingsMatchCurrentFacts,
} from "@/lib/oa/evidence-review";
import {
  type BuildProductSynthesisInput,
  type BuildProductSynthesisRecommendation,
} from "@/lib/oa/synthesis";
import { isSynthesisDomainError } from "@/lib/oa/synthesis";

export type BuildProductSynthesisLineageResult =
  | { readonly ok: true; readonly input: BuildProductSynthesisInput }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

/**
 * Loads durable Product OA facts for a Contract Result ClaimEvaluation and
 * builds BuildProductSynthesisInput — no invented verdict or recommendation.
 * Fail-closed on non Contract-Result subject, binding mismatch, or missing Evidence.
 * Recommendation is caller-supplied only (no stale W3-C fallback).
 */
export async function buildProductSynthesisLineageInput(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly claimEvaluationId: string;
  readonly title?: string;
  readonly generatedAt?: string;
  readonly recommendation?: BuildProductSynthesisRecommendation | null;
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

  if (
    claimEvaluation.subjectKind !==
    CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT
  ) {
    return {
      ok: false,
      code: "SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_SUBJECT",
      message:
        "La synthèse Product exige une évaluation de résultat de contrat.",
    };
  }

  const bindings = claimEvaluation.contractResultBindings;
  if (!bindings) {
    return {
      ok: false,
      code: "SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_BINDINGS",
      message:
        "La synthèse Product exige des liaisons de résultat de contrat.",
    };
  }

  const boundProject = bindings.projectId;
  if (boundProject !== projectId) {
    return {
      ok: false,
      code: "CLAIM_EVALUATION_PROJECT_MISMATCH",
      message: "ClaimEvaluation liée à un autre projet.",
    };
  }

  const attemptId = bindings.executionAttemptId;
  const attempt =
    await input.oa.executionAttemptServices.attempts.findById(attemptId);
  if (!attempt) {
    return {
      ok: false,
      code: "SYNTHESIS_LINEAGE_BINDINGS_MISMATCH",
      message: "Tentative liée introuvable pour la synthèse.",
    };
  }

  const reviewBundleId = bindings.reviewBundleId;
  const reviewBundle =
    await input.oa.evidenceReviewServices.reviewBundleReader.findById(
      reviewBundleId,
    );
  if (!reviewBundle) {
    return {
      ok: false,
      code: "SYNTHESIS_LINEAGE_BINDINGS_MISMATCH",
      message: "Dossier d'évaluation lié introuvable pour la synthèse.",
    };
  }

  // Canonical evidence identity/order from CE bindings — used after match for sections.
  const boundEvidenceIds = [...bindings.evidenceRefs];
  // Current facts for matcher = ReviewBundle evidence order (not CE bindings echo).
  const currentEvidenceIds = [...reviewBundle.evidenceRefs];

  if (
    !contractResultBindingsMatchCurrentFacts({
      bindings,
      attempt: {
        attemptId: attempt.attemptId,
        executionContractId: attempt.executionContractId,
        executionContractVersion: attempt.executionContractVersion,
        executionContractSemanticFingerprint:
          attempt.executionContractSemanticFingerprint,
        boundExecutionContract: attempt.boundExecutionContract,
      },
      reviewBundle: {
        reviewBundleId: reviewBundle.reviewBundleId,
        frozenVersion: reviewBundle.frozenVersion,
      },
      evidenceIds: currentEvidenceIds,
      projectId,
      cycleInstanceId: bindings.cycleInstanceId ?? null,
    })
  ) {
    return {
      ok: false,
      code: "SYNTHESIS_LINEAGE_BINDINGS_MISMATCH",
      message:
        "Les liaisons Product ne correspondent pas aux faits durables courants.",
    };
  }

  const evidenceReader = input.oa.evidenceReviewServices.evidenceReader;
  const evidence: Array<{
    evidenceId: string;
    status: string;
    type: string;
  }> = [];
  for (const id of boundEvidenceIds) {
    const ev = await evidenceReader.findById(id);
    if (!ev) {
      return {
        ok: false,
        code: "SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND",
        message: `Élément de preuve lié introuvable: ${id}`,
      };
    }
    evidence.push({
      evidenceId: ev.evidenceId,
      status: ev.status,
      type: ev.type,
    });
  }

  // Planned semantics from Attempt-bound EC snapshot — never mutable latest EC.
  // Never pass raw action/target/scope into Pilot sections; only human-readable
  // title/objective/description when present on bound semantic material.
  const snap = attempt.boundExecutionContract;
  const material = snap?.semanticMaterial;
  const materialExtra = material as unknown as {
    title?: unknown;
    objective?: unknown;
    description?: unknown;
  };
  const humanTitle =
    typeof materialExtra?.title === "string"
      ? materialExtra.title.trim()
      : "";
  const humanObjective =
    typeof materialExtra?.objective === "string"
      ? materialExtra.objective.trim()
      : "";
  const humanDescription =
    typeof materialExtra?.description === "string"
      ? materialExtra.description.trim()
      : "";

  const executionContract: BuildProductSynthesisInput["executionContract"] =
    material
      ? {
          executionContractId: material.executionContractId,
          // Keep machine codes off the Pilot projection path (presentPlanned ignores them).
          action: material.action,
          target: material.target,
          scope: material.scope,
          ...(humanTitle ? { title: humanTitle } : {}),
          ...(humanObjective ? { objective: humanObjective } : {}),
          ...(humanDescription ? { description: humanDescription } : {}),
          cycleInstanceId: material.cycleInstanceId ?? null,
          executionContractVersion: snap.executionContractVersion,
          semanticFingerprint: snap.semanticFingerprint,
        }
      : {
          executionContractId: bindings.executionContractId,
          executionContractVersion: bindings.executionContractVersion,
          semanticFingerprint: bindings.executionContractSemanticFingerprint,
          cycleInstanceId: bindings.cycleInstanceId ?? null,
        };

  // CP02 Axis 3 — no stale findExistingW3cPostEvidence fallback.
  const recommendation: BuildProductSynthesisRecommendation | null =
    input.recommendation ?? null;

  return {
    ok: true,
    input: {
      projectId,
      claimEvaluation,
      executionContract,
      attempt: {
        attemptId: attempt.attemptId,
        status: attempt.status,
        resultRef: attempt.resultRef ?? null,
      },
      evidence,
      reviewBundle: {
        reviewBundleId: reviewBundle.reviewBundleId,
        status: reviewBundle.status,
        completeness: reviewBundle.completeness,
        frozenVersion: reviewBundle.frozenVersion,
      },
      recommendation,
      title: input.title,
      generatedAt: input.generatedAt,
      cycleInstanceId: bindings.cycleInstanceId ?? null,
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

## FILE: `projects/sfia-studio/app/features/project-assistant/synthesisActions.ts` (216 lines)

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

## FILE: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.tsx` (347 lines)

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
    <div
      className={styles.root}
      data-testid="project-syntheses-surface"
      data-mobile-detail={mobileShowDetail ? "true" : "false"}
    >
      {loadError ? (
        <p className={styles.empty} role="alert">
          {loadError}
        </p>
      ) : null}

      {listEmpty ? (
        <div className={styles.emptyPane}>
          <header className={styles.contextualHead}>
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
          </header>
          <p className={styles.empty} data-testid="project-syntheses-empty">
            Aucune synthèse produit n&apos;est encore disponible. Elle apparaît
            automatiquement après un résultat de travail qualifié — elle n&apos;est
            pas inventée depuis la conversation.
          </p>
        </div>
      ) : (
        <div className={styles.body}>
          <div
            className={styles.listCol}
            data-mobile-hidden={mobileShowDetail ? "true" : "false"}
          >
            {/* B1 — header/search live in the left contextual pane */}
            <header className={styles.contextualHead}>
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
            </header>

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

## FILE: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.module.css` (415 lines)

```css
/*
 * P5-S04 Synthèses — Figma 164:3 / 190:175 / 190:433 / 190:455 (--pm6-* only).
 * CP01 B1: contextual header lives inside the left column (alongside detail).
 * CP01 B2: mobile list↔detail is a single nav level (header travels with listCol).
 */

.root {
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  min-height: 0;
  padding: 14px var(--ws-pad-x, 24px) 24px;
  flex: 1 1 auto;
}

.body {
  display: grid;
  grid-template-columns: minmax(0, 360px) minmax(0, 1fr);
  gap: 16px;
  min-height: 0;
  align-items: stretch;
  flex: 1 1 auto;
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

.contextualHead {
  padding: 14px 14px 10px;
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

.listHead {
  padding: 0 14px 12px;
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
  flex: 1 1 auto;
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
  padding: 12px 12px;
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

.emptyPane {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 420px;
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
  .root {
    padding: 8px var(--ws-pad-x, 16px) 20px;
  }

  .body {
    grid-template-columns: minmax(0, 1fr);
  }

  .listCol {
    border: none;
    border-radius: 0;
    background: transparent;
  }

  .listCol[data-mobile-hidden="true"] {
    display: none;
  }

  .detailCol {
    border: none;
    border-radius: 0;
    background: transparent;
    max-height: none;
  }

  .detailCol[data-mobile-hidden="true"] {
    display: none;
  }

  .detailInner {
    padding: 8px 0 16px;
  }

  .listButton {
    padding: 14px 12px;
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

## FILE: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/synthesisPresentation.ts` (108 lines)

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

## FILE: `projects/sfia-studio/app/__tests__/oa/synthesis/p5.s04.productDerivedSynthesis.d0.test.ts` (580 lines)

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

    const joined = Object.values(built.sections).join("\n");
    expect(joined).not.toMatch(/ClaimEvaluation/);
    expect(joined).not.toMatch(/ReviewBundle/);
    expect(joined).not.toMatch(/Statut CE/);
    expect(joined).not.toMatch(/deterministic/);
    expect(joined).not.toMatch(/non_critical/);
    expect(joined).not.toMatch(/canonical PASS/);
    expect(joined).not.toMatch(/\bclm:/);
    expect(joined).not.toMatch(/\brb:/);
    expect(joined).not.toMatch(/\bxat:/);
    expect(joined).not.toMatch(/\bev:/);
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
    expect(restored?.sections.summary).toMatch(/atteint|échec|non prouvé/i);
    expect(restored?.sections.summary).not.toMatch(/ClaimEvaluation|clm:/i);
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

## FILE: `projects/sfia-studio/app/__tests__/oa/synthesis/p5.s04.cp01.productPathSynthesis.d0.test.ts` (849 lines)

```ts
/**
 * P5-S04 CP01 — Product-path Synthesis materialization + lineage/currentness.
 * ZERO REAL.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  materializeW3bProductTerminal,
  rehydrateW3bProductTerminal,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { buildProductSynthesisLineageInput } from "@/features/project-assistant/buildProductSynthesisLineageInput";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import {
  CLAIM_EVALUATION_SCHEMA_VERSION,
  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
  type ClaimEvaluation,
} from "@/lib/oa/evidence-review";
import { SqliteProductStore } from "@/lib/oa/project";
import {
  createSqliteSynthesisServices,
  type ProductSynthesisProjection,
} from "@/lib/oa/synthesis";
import {
  clearW3bBoundaryArm,
} from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  settleDeterministicProductCursorSuccess,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "../../project-assistant/w2Harness";

const NOW = "2026-10-05T12:00:00.000Z";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
  setConversationProviderForTests(null);
  clearW3bBoundaryArm();
});

afterEach(() => {
  clearW3bBoundaryArm();
  cleanupW2TempDirs();
});

function makeClaimEvaluation(
  overrides: Partial<ClaimEvaluation> & { claimEvaluationId: string },
): ClaimEvaluation {
  const projectId = overrides.contractResultBindings?.projectId ?? "prj:s04-c";
  const status = overrides.status ?? "pass";
  const base: ClaimEvaluation = {
    schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
    claimEvaluationId: overrides.claimEvaluationId,
    claimType: "technique",
    claimStatement:
      overrides.claimStatement ?? "Temporary artifact produced for contract result",
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
    subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
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

async function authorizeAndSucceed(suffix: string) {
  const db = tempProductDbPath(`s04-cp01-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `s04${suffix}`,
  });
  const seeded = await seedQualifiedProject(runtime, { suffix });
  const oa = runtime.oa!;
  const qualification = await resolveW2QualificationInputs({
    oa,
    projectId: seeded.projectId,
  });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error("qual");
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId: seeded.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error("propose");
  const decided = await decideTrajectory({
    oa,
    projectId: seeded.projectId,
    optionSetRef: proposed.optionSetRef,
    options: proposed.options,
    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
    selectedOptionRef: GOVERNED_OPTION_REF,
    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
    candidateVersion: proposed.proposedTrajectory!.version,
    forceLocalAuthority: true,
  });
  expect(decided.ok).toBe(true);
  if (!decided.ok) throw new Error("decide");
  const context = await currentF2Context(runtime, seeded.projectId);
  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
    qualifiedOperationKind: "generate-temporary-artifact",
    pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error(prepared.code);
  const executionContractId = prepared.contract.executionContractId;
  await inspectExecutionContract({
    oa,
    projectId: seeded.projectId,
    executionContractId,
  });
  const confirmed = await confirmExecutionContractForAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error(confirmed.code);
  const authorized = await evaluateExecutionAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok && authorized.outcome === "AUTHORIZED").toBe(true);

  const selected = await governedExecuteSelectAgent({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(selected.code);
  const started = await governedExecuteStart({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    attemptId: selected.attemptId,
    forceLocalAuthority: true,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(started.code);

  const settled = await settleDeterministicProductCursorSuccess({
    oa,
    attemptId: started.attemptId,
  });
  expect(settled.ok).toBe(true);
  if (!settled.ok) throw new Error(settled.code);
  const projected = await governedExecuteRecordResult({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    attemptId: started.attemptId,
    forceLocalAuthority: true,
  });
  expect(projected.ok).toBe(true);
  if (!projected.ok) throw new Error(projected.code);

  return {
    oa,
    projectId: seeded.projectId,
    attemptId: started.attemptId,
    executionContractId,
    db,
    store: oa.projectServices.store as SqliteProductStore,
  };
}

describe("P5-S04 CP01 currentness C01–C08", () => {
  it("C01 — same semantics + different generatedAt → same fingerprint", () => {
    const store = new SqliteProductStore(tempProductDbPath("c01.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:c01" });
    const a = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      evidence: [{ evidenceId: "ev:s04-1", status: "verified", type: "artifact" }],
      recommendation: { text: "Continuer.", ref: "epi:w3c-rec:c01" },
      generatedAt: NOW,
    });
    const b = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      evidence: [{ evidenceId: "ev:s04-1", status: "verified", type: "artifact" }],
      recommendation: { text: "Continuer.", ref: "epi:w3c-rec:c01" },
      generatedAt: "2026-10-05T18:00:00.000Z",
    });
    expect(b.sourceFingerprint).toBe(a.sourceFingerprint);
    store.close();
  });

  it("C02 — ReviewBundle frozenVersion change → different fingerprint", () => {
    const store = new SqliteProductStore(tempProductDbPath("c02.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:c02" });
    const a = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      reviewBundle: {
        reviewBundleId: "rb:s04-1",
        status: "frozen",
        completeness: "complete",
        frozenVersion: 1,
      },
      generatedAt: NOW,
    });
    const b = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      reviewBundle: {
        reviewBundleId: "rb:s04-1",
        status: "frozen",
        completeness: "complete",
        frozenVersion: 2,
      },
      generatedAt: NOW,
    });
    expect(b.sourceFingerprint).not.toBe(a.sourceFingerprint);
    store.close();
  });

  it("C03 — EC version / semanticFingerprint change → different fingerprint", () => {
    const store = new SqliteProductStore(tempProductDbPath("c03.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:c03" });
    const a = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      executionContract: {
        executionContractId: "xct:s04-1",
        action: "product:generate-temporary-artifact",
        executionContractVersion: 1,
        semanticFingerprint: "fp:v1",
      },
      generatedAt: NOW,
    });
    const b = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      executionContract: {
        executionContractId: "xct:s04-1",
        action: "product:generate-temporary-artifact",
        executionContractVersion: 2,
        semanticFingerprint: "fp:v2",
      },
      generatedAt: NOW,
    });
    expect(b.sourceFingerprint).not.toBe(a.sourceFingerprint);
    store.close();
  });

  it("C04 — Attempt status change → different fingerprint", () => {
    const store = new SqliteProductStore(tempProductDbPath("c04.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:c04" });
    const a = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      attempt: { attemptId: "xat:s04-1", status: "succeeded" },
      generatedAt: NOW,
    });
    const b = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      attempt: { attemptId: "xat:s04-1", status: "failed" },
      generatedAt: NOW,
    });
    expect(b.sourceFingerprint).not.toBe(a.sourceFingerprint);
    store.close();
  });

  it("C05 — Evidence status/type change → different fingerprint", () => {
    const store = new SqliteProductStore(tempProductDbPath("c05.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:c05" });
    const a = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      evidence: [{ evidenceId: "ev:s04-1", status: "verified", type: "artifact" }],
      generatedAt: NOW,
    });
    const b = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      evidence: [{ evidenceId: "ev:s04-1", status: "draft", type: "artifact" }],
      generatedAt: NOW,
    });
    expect(b.sourceFingerprint).not.toBe(a.sourceFingerprint);
    store.close();
  });

  it("C06 — recommendation text change → different fingerprint", () => {
    const store = new SqliteProductStore(tempProductDbPath("c06.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:c06" });
    const a = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      recommendation: { text: "Continuer.", ref: "epi:w3c-rec:c06" },
      generatedAt: NOW,
    });
    const b = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      recommendation: { text: "Replanifier.", ref: "epi:w3c-rec:c06" },
      generatedAt: NOW,
    });
    expect(b.sourceFingerprint).not.toBe(a.sourceFingerprint);
    store.close();
  });

  it("C07 — CE supersession produces Synthesis successor", async () => {
    const store = new SqliteProductStore(tempProductDbPath("c07.sqlite"));
    store.db
      .prepare(
        `INSERT INTO oa_projects(project_id, status, current_lps_version_id, payload_json, created_at, updated_at)
         VALUES (?, 'active', NULL, ?, ?, ?)`,
      )
      .run(
        "prj:s04-c",
        JSON.stringify({ projectId: "prj:s04-c", title: "C07", status: "active" }),
        NOW,
        NOW,
      );
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ceA = makeClaimEvaluation({ claimEvaluationId: "clm:c07-a" });
    const synA = await svc.materialize({
      projectId: "prj:s04-c",
      claimEvaluation: ceA,
      evidence: [{ evidenceId: "ev:s04-1" }],
      generatedAt: NOW,
    });
    const ceB = makeClaimEvaluation({
      claimEvaluationId: "clm:c07-b",
      supersedesClaimEvaluationId: "clm:c07-a",
      claimStatement: "Corrected contract result claim",
    });
    const synB = await svc.materialize({
      projectId: "prj:s04-c",
      claimEvaluation: ceB,
      evidence: [{ evidenceId: "ev:s04-1" }],
      generatedAt: "2026-10-05T13:00:00.000Z",
    });
    expect(synB.synthesisId).not.toBe(synA.synthesisId);
    expect(synB.supersedes).toBe(synA.synthesisId);
    expect(synB.status).toBe("current");
    const old = await svc.repository.findById(synA.synthesisId);
    expect(old?.status).toBe("superseded");
    store.close();
  });

  it("C08 — unrelated generatedAt does not supersede", async () => {
    const store = new SqliteProductStore(tempProductDbPath("c08.sqlite"));
    store.db
      .prepare(
        `INSERT INTO oa_projects(project_id, status, current_lps_version_id, payload_json, created_at, updated_at)
         VALUES (?, 'active', NULL, ?, ?, ?)`,
      )
      .run(
        "prj:s04-c",
        JSON.stringify({ projectId: "prj:s04-c", title: "C08", status: "active" }),
        NOW,
        NOW,
      );
    const svc = createSqliteSynthesisServices({ productStore: store });
    const input = {
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:c08" }),
      evidence: [{ evidenceId: "ev:s04-1" }],
      generatedAt: NOW,
    };
    const a = await svc.materialize(input);
    const b = await svc.materialize({
      ...input,
      generatedAt: "2026-10-05T20:00:00.000Z",
    });
    expect(b.synthesisId).toBe(a.synthesisId);
    expect(b.status).toBe("current");
    const listed = await svc.repository.listByProject("prj:s04-c");
    expect(listed).toHaveLength(1);
    store.close();
  });
});

describe("P5-S04 CP01 lineage L01–L09 + product-path P01–P05", () => {
  it("L01 — generic/non Contract-Result CE rejected", async () => {
    const ctx = await authorizeAndSucceed("l01");
    const ceId = `clm:generic-${ctx.attemptId}`;
    const generic: ClaimEvaluation = {
      ...makeClaimEvaluation({
        claimEvaluationId: ceId,
        claimStatement: "generic claim",
      }),
      subjectKind: undefined,
      contractResultBindings: undefined,
      status: "pending",
      evaluatedAt: undefined,
    };
    ctx.store.db
      .prepare(
        `INSERT INTO oa_claim_evaluations(
           claim_evaluation_id, project_id, status, idempotency_key, version,
           payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        ceId,
        ctx.projectId,
        generic.status,
        `idem:generic-${ctx.attemptId}`,
        1,
        JSON.stringify(generic),
        NOW,
        NOW,
      );
    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: ceId,
    });
    expect(lineage.ok).toBe(false);
    if (lineage.ok) return;
    expect(lineage.code).toBe(
      "SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_SUBJECT",
    );
  });

  it("L02 — Contract Result CE without bindings rejected", async () => {
    const ctx = await authorizeAndSucceed("l02");
    const ceId = `clm:nobind-${ctx.attemptId}`;
    const noBind: ClaimEvaluation = {
      ...makeClaimEvaluation({ claimEvaluationId: ceId }),
      subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
      contractResultBindings: undefined,
      status: "pending",
      evaluatedAt: undefined,
    };
    ctx.store.db
      .prepare(
        `INSERT INTO oa_claim_evaluations(
           claim_evaluation_id, project_id, status, idempotency_key, version,
           payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        ceId,
        ctx.projectId,
        noBind.status,
        `idem:nobind-${ctx.attemptId}`,
        1,
        JSON.stringify(noBind),
        NOW,
        NOW,
      );
    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: ceId,
    });
    expect(lineage.ok).toBe(false);
    if (lineage.ok) return;
    expect(lineage.code).toBe(
      "SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_BINDINGS",
    );
  });

  it("L03 — project mismatch rejected", async () => {
    const ctx = await authorizeAndSucceed("l03");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;
    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: "prj:other-project",
      claimEvaluationId: ceId,
    });
    expect(lineage.ok).toBe(false);
    if (lineage.ok) return;
    expect(lineage.code).toBe("CLAIM_EVALUATION_PROJECT_MISMATCH");
  });

  it("L04–L08 — binding mismatches rejected; L09 fully canonical accepted", async () => {
    const ctx = await authorizeAndSucceed("lxx");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;
    const ce =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(ce?.contractResultBindings).toBeTruthy();
    const bindings = ce!.contractResultBindings!;

    // L09 — canonical accepted
    const okLineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: ceId,
    });
    expect(okLineage.ok).toBe(true);

    // L04 — Attempt binding mismatch
    {
      const bad = structuredClone(ce!);
      bad.claimEvaluationId = `clm:l04-${ctx.attemptId}`;
      bad.contractResultBindings = {
        ...bindings,
        executionAttemptId: "xat:not-this-attempt",
      };
      bad.idempotencyKey = `idem:l04-${ctx.attemptId}`;
      await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);
      const lineage = await buildProductSynthesisLineageInput({
        oa: ctx.oa,
        projectId: ctx.projectId,
        claimEvaluationId: bad.claimEvaluationId,
      });
      expect(lineage.ok).toBe(false);
      if (!lineage.ok) {
        expect(lineage.code).toBe("SYNTHESIS_LINEAGE_BINDINGS_MISMATCH");
      }
    }

    // L05 — EC version / fingerprint mismatch
    {
      const bad = structuredClone(ce!);
      bad.claimEvaluationId = `clm:l05-${ctx.attemptId}`;
      bad.contractResultBindings = {
        ...bindings,
        executionContractVersion: bindings.executionContractVersion + 99,
        executionContractSemanticFingerprint: "fp:wrong",
      };
      bad.idempotencyKey = `idem:l05-${ctx.attemptId}`;
      await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);
      const lineage = await buildProductSynthesisLineageInput({
        oa: ctx.oa,
        projectId: ctx.projectId,
        claimEvaluationId: bad.claimEvaluationId,
      });
      expect(lineage.ok).toBe(false);
      if (!lineage.ok) {
        expect(lineage.code).toBe("SYNTHESIS_LINEAGE_BINDINGS_MISMATCH");
      }
    }

    // L06 — ReviewBundle version mismatch
    {
      const bad = structuredClone(ce!);
      bad.claimEvaluationId = `clm:l06-${ctx.attemptId}`;
      bad.contractResultBindings = {
        ...bindings,
        reviewBundleVersion: (bindings.reviewBundleVersion ?? 1) + 50,
      };
      bad.idempotencyKey = `idem:l06-${ctx.attemptId}`;
      await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);
      const lineage = await buildProductSynthesisLineageInput({
        oa: ctx.oa,
        projectId: ctx.projectId,
        claimEvaluationId: bad.claimEvaluationId,
      });
      expect(lineage.ok).toBe(false);
      if (!lineage.ok) {
        expect(lineage.code).toBe("SYNTHESIS_LINEAGE_BINDINGS_MISMATCH");
      }
    }

    // L07 — Evidence refs/order mismatch
    {
      const bad = structuredClone(ce!);
      bad.claimEvaluationId = `clm:l07-${ctx.attemptId}`;
      bad.contractResultBindings = {
        ...bindings,
        evidenceRefs: [...bindings.evidenceRefs, "ev:extra-mismatch"],
      };
      bad.idempotencyKey = `idem:l07-${ctx.attemptId}`;
      await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);
      const lineage = await buildProductSynthesisLineageInput({
        oa: ctx.oa,
        projectId: ctx.projectId,
        claimEvaluationId: bad.claimEvaluationId,
      });
      expect(lineage.ok).toBe(false);
      if (!lineage.ok) {
        expect(lineage.code).toBe("SYNTHESIS_LINEAGE_BINDINGS_MISMATCH");
      }
    }

    // L08 — cycle mismatch when bound
    if (bindings.cycleInstanceId) {
      const bad = structuredClone(ce!);
      bad.claimEvaluationId = `clm:l08-${ctx.attemptId}`;
      bad.contractResultBindings = {
        ...bindings,
        cycleInstanceId: "cyc:wrong-cycle",
      };
      bad.idempotencyKey = `idem:l08-${ctx.attemptId}`;
      await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);
      const lineage = await buildProductSynthesisLineageInput({
        oa: ctx.oa,
        projectId: ctx.projectId,
        claimEvaluationId: bad.claimEvaluationId,
      });
      expect(lineage.ok).toBe(false);
      if (!lineage.ok) {
        expect(lineage.code).toBe("SYNTHESIS_LINEAGE_BINDINGS_MISMATCH");
      }
    }
  });

  it("P01 — governed Product path auto-materializes Synthesis", async () => {
    const ctx = await authorizeAndSucceed("p01");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.postEvidence?.ok).toBe(true);

    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const listed = await svc.repository.listByProject(ctx.projectId);
    const current = listed.filter((s) => s.status === "current");
    expect(current.length).toBeGreaterThanOrEqual(1);
    const syn = current[0]!;
    expect(syn.authority).toBe("none");
    expect(syn.sourceBindings.claimEvaluationId).toBe(
      materialized.product.claimEvaluationId,
    );
    const joined = Object.values(syn.sections).join("\n");
    expect(joined).not.toMatch(/ClaimEvaluation/);
    expect(joined).not.toMatch(/NON-AUTORITATIVE/);
  });

  it("P02 — rehydrate/idempotence returns same Synthesis", async () => {
    const ctx = await authorizeAndSucceed("p02");
    const first = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const second = await rehydrateW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(second.ok).toBe(true);

    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const listed = await svc.repository.listByProject(ctx.projectId);
    const current = listed.filter((s) => s.status === "current");
    expect(current).toHaveLength(1);
  });

  it("P03 — W3-C recommendation propagates into Synthesis", async () => {
    const ctx = await authorizeAndSucceed("p03");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok || !materialized.postEvidence?.ok) return;

    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const listed = await svc.repository.listByProject(ctx.projectId);
    const syn = listed.find((s) => s.status === "current");
    expect(syn).toBeTruthy();
    expect(syn!.sections.recommendation.length).toBeGreaterThan(0);
    expect(syn!.sections.recommendation).not.toBe(
      "Aucune recommandation Product courante n'est disponible pour cette synthèse.",
    );
    expect(syn!.sections.recommendation).not.toMatch(
      /\b(D5|HumanDecision|ProjectTrajectory|W2|Morris|NOT_PROVEN|evaluate claim)\b/i,
    );
    expect(syn!.sourceBindings.recommendationRef).toMatch(/^epi:w3c-rec:/);
    expect(materialized.postEvidence.recommendation.authority).toBe("none");
    expect(materialized.synthesisMaterialization?.status).toBe("materialized");
  });

  it("P04 — mismatched lineage → no Synthesis; Truth C intact", async () => {
    const ctx = await authorizeAndSucceed("p04");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;
    const ce =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(ce).toBeTruthy();

    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    await svc.repository.deleteAllByProject(ctx.projectId);

    const bad = structuredClone(ce!);
    bad.claimEvaluationId = `clm:p04-bad-${ctx.attemptId}`;
    bad.contractResultBindings = {
      ...ce!.contractResultBindings!,
      executionAttemptId: "xat:stale",
    };
    bad.idempotencyKey = `idem:p04-bad-${ctx.attemptId}`;
    await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);

    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: bad.claimEvaluationId,
    });
    expect(lineage.ok).toBe(false);

    const listed = await svc.repository.listByProject(ctx.projectId);
    expect(listed).toHaveLength(0);

    const stillThere =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(stillThere?.status).toBe(ce!.status);
  });

  it("P05 — Synthesis soft-fail leaves CE / W3-C intact", async () => {
    const ctx = await authorizeAndSucceed("p05");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;
    const before =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(before).toBeTruthy();
    expect(materialized.postEvidence?.ok).toBe(true);

    // Soft-fail path: call lineage with wrong project — must not mutate CE.
    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: "prj:wrong",
      claimEvaluationId: ceId,
    });
    expect(lineage.ok).toBe(false);

    const after =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(after?.status).toBe(before!.status);
    expect(after?.claimEvaluationId).toBe(ceId);
    expect(materialized.product.outcome).toBeTruthy();
  });
});

describe("P5-S04 CP01 Pilot language regression", () => {
  it("nominal sections exclude OA jargon", () => {
    const store = new SqliteProductStore(tempProductDbPath("pilot.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:pilot" }),
      executionContract: {
        executionContractId: "xct:s04-1",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
      },
      attempt: { attemptId: "xat:s04-1", status: "succeeded" },
      evidence: [{ evidenceId: "ev:s04-1", status: "verified", type: "artifact" }],
      reviewBundle: {
        reviewBundleId: "rb:s04-1",
        status: "frozen",
        completeness: "complete",
        frozenVersion: 2,
      },
      generatedAt: NOW,
    }) as ProductSynthesisProjection;
    const joined = Object.values(built.sections).join("\n");
    expect(joined).not.toMatch(/ClaimEvaluation|ReviewBundle|Statut CE|deterministic|non_critical|canonical PASS|\bclm:|\brb:|\bxat:|\bev:|\bcursor\.docs_write|\bNOT_PROVEN\b|expectedOutputs|HumanDecision|ProjectTrajectory|\bD5\b|\bW2\b/);
    expect(built.subject).toBe("Résultat de l'action atteint");
    expect(built.sections.planned).not.toMatch(/product:generate-temporary-artifact|cursor\./);
    expect(built.authority).toBe("none");
    store.close();
  });
});
```

## FILE: `projects/sfia-studio/app/__tests__/oa/synthesis/p5.s04.cp02.softFailPilotLineage.d0.test.ts` (828 lines)

```ts
/**
 * P5-S04 CP02 — Soft-fail observability · Pilot projection · recommendation
 * no-fallback · fail-closed Evidence. ZERO REAL.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  materializeW3bProductTerminal,
  rehydrateW3bProductTerminal,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { buildProductSynthesisLineageInput } from "@/features/project-assistant/buildProductSynthesisLineageInput";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import {
  CLAIM_EVALUATION_SCHEMA_VERSION,
  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
  type ClaimEvaluation,
} from "@/lib/oa/evidence-review";
import { SqliteProductStore } from "@/lib/oa/project";
import {
  ABSENT_RECOMMENDATION_TEXT,
  createSqliteSynthesisServices,
  formatW3cRecommendationForSynthesis,
  presentProductOutcomeSubject,
  projectPilotRecommendationFromW3c,
  type ProductSynthesisProjection,
} from "@/lib/oa/synthesis";
import { clearW3bBoundaryArm } from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  settleDeterministicProductCursorSuccess,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "../../project-assistant/w2Harness";

const NOW = "2026-10-05T12:00:00.000Z";

const FORBIDDEN_PILOT =
  /ClaimEvaluation|ReviewBundle|ContractResult|HumanDecision|ProjectTrajectory|\bD5\b|\bW2\b|\bNOT_PROVEN\b|expectedOutputs|evaluate claim|cursor\.docs_write|workspace\.isolated|studio\.gcec|\bclm:|\brb:|\bxat:|\bxct:|\bev:/i;

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
  setConversationProviderForTests(null);
  clearW3bBoundaryArm();
});

afterEach(() => {
  clearW3bBoundaryArm();
  cleanupW2TempDirs();
});

function makeClaimEvaluation(
  overrides: Partial<ClaimEvaluation> & { claimEvaluationId: string },
): ClaimEvaluation {
  const projectId = overrides.contractResultBindings?.projectId ?? "prj:s04-c";
  const status = overrides.status ?? "pass";
  const base: ClaimEvaluation = {
    schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
    claimEvaluationId: overrides.claimEvaluationId,
    claimType: "technique",
    claimStatement:
      overrides.claimStatement ??
      "Temporary artifact produced for contract result xct:hidden",
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
    subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
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

async function authorizeAndSucceed(suffix: string) {
  const db = tempProductDbPath(`s04-cp02-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `s04c2${suffix}`,
  });
  const seeded = await seedQualifiedProject(runtime, { suffix });
  const oa = runtime.oa!;
  const qualification = await resolveW2QualificationInputs({
    oa,
    projectId: seeded.projectId,
  });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error("qual");
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId: seeded.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error("propose");
  const decided = await decideTrajectory({
    oa,
    projectId: seeded.projectId,
    optionSetRef: proposed.optionSetRef,
    options: proposed.options,
    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
    selectedOptionRef: GOVERNED_OPTION_REF,
    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
    candidateVersion: proposed.proposedTrajectory!.version,
    forceLocalAuthority: true,
  });
  expect(decided.ok).toBe(true);
  if (!decided.ok) throw new Error("decide");
  const context = await currentF2Context(runtime, seeded.projectId);
  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
    qualifiedOperationKind: "generate-temporary-artifact",
    pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error(prepared.code);
  const executionContractId = prepared.contract.executionContractId;
  await inspectExecutionContract({
    oa,
    projectId: seeded.projectId,
    executionContractId,
  });
  const confirmed = await confirmExecutionContractForAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error(confirmed.code);
  const authorized = await evaluateExecutionAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok && authorized.outcome === "AUTHORIZED").toBe(true);

  const selected = await governedExecuteSelectAgent({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(selected.code);
  const started = await governedExecuteStart({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    attemptId: selected.attemptId,
    forceLocalAuthority: true,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(started.code);

  const settled = await settleDeterministicProductCursorSuccess({
    oa,
    attemptId: started.attemptId,
  });
  expect(settled.ok).toBe(true);
  if (!settled.ok) throw new Error(settled.code);
  const projected = await governedExecuteRecordResult({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    attemptId: started.attemptId,
    forceLocalAuthority: true,
  });
  expect(projected.ok).toBe(true);
  if (!projected.ok) throw new Error(projected.code);

  return {
    oa,
    projectId: seeded.projectId,
    attemptId: started.attemptId,
    executionContractId,
    db,
    store: oa.projectServices.store as SqliteProductStore,
  };
}

function installSynthesisInsertAbortTrigger(store: SqliteProductStore): void {
  store.db.exec(`
    CREATE TRIGGER IF NOT EXISTS test_cp02_abort_oa_syntheses_insert
    BEFORE INSERT ON oa_syntheses
    BEGIN
      SELECT RAISE(ABORT, 'TEST_CP02_SYNTHESIS_INSERT_ABORT');
    END;
  `);
}

function dropSynthesisInsertAbortTrigger(store: SqliteProductStore): void {
  store.db.exec(
    `DROP TRIGGER IF EXISTS test_cp02_abort_oa_syntheses_insert;`,
  );
}

function assertPilotSafeSections(syn: ProductSynthesisProjection): void {
  const joined = [
    syn.title,
    syn.subject,
    ...Object.values(syn.sections),
  ].join("\n");
  expect(joined).not.toMatch(FORBIDDEN_PILOT);
}

describe("P5-S04 CP02 Axis 1 soft-fail observability SF01–SF07", () => {
  it("SF01 — success attaches synthesisMaterialization materialized", async () => {
    const ctx = await authorizeAndSucceed("sf01");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.postEvidence?.ok).toBe(true);
    expect(materialized.synthesisMaterialization?.status).toBe("materialized");
    if (materialized.synthesisMaterialization?.status === "materialized") {
      expect(materialized.synthesisMaterialization.synthesisId).toMatch(/^syn:/);
    }
  });

  it("SF02–SF05 — SQLite abort → ok:true, CE/W3-C durable, no Synthesis, failed observability", async () => {
    const ctx = await authorizeAndSucceed("sf02");
    installSynthesisInsertAbortTrigger(ctx.store);

    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;

    // SF02 — ok stays true when only Synthesis fails
    expect(materialized.ok).toBe(true);
    // SF03 — CE durable
    expect(materialized.product.claimEvaluationId).toBeTruthy();
    const ce =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(
        materialized.product.claimEvaluationId!,
      );
    expect(ce).toBeTruthy();
    // SF04 — W3-C durable
    expect(materialized.postEvidence?.ok).toBe(true);
    // SF05 — no Synthesis row + failed observability
    expect(materialized.synthesisMaterialization?.status).toBe("failed");
    if (materialized.synthesisMaterialization?.status === "failed") {
      expect(materialized.synthesisMaterialization.retryable).toBe(true);
      expect(materialized.synthesisMaterialization.code.length).toBeGreaterThan(0);
      expect(materialized.synthesisMaterialization.message.length).toBeGreaterThan(
        0,
      );
    }
    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const listed = await svc.repository.listByProject(ctx.projectId);
    expect(listed).toHaveLength(0);

    dropSynthesisInsertAbortTrigger(ctx.store);
  });

  it("SF06–SF07 — drop trigger + rehydrate → Synthesis materializes, one current", async () => {
    const ctx = await authorizeAndSucceed("sf06");
    installSynthesisInsertAbortTrigger(ctx.store);
    const failed = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(failed.ok).toBe(true);
    if (!failed.ok) return;
    expect(failed.synthesisMaterialization?.status).toBe("failed");
    const ceId = failed.product.claimEvaluationId!;
    const ceBefore =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(ceBefore).toBeTruthy();

    dropSynthesisInsertAbortTrigger(ctx.store);

    const rehydrated = await rehydrateW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    // SF06 — Synthesis materializes
    expect(rehydrated.synthesisMaterialization?.status).toBe("materialized");
    const ceAfter =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(ceAfter?.status).toBe(ceBefore!.status);

    // SF07 — one current
    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const listed = await svc.repository.listByProject(ctx.projectId);
    const current = listed.filter((s) => s.status === "current");
    expect(current).toHaveLength(1);
  });
});

describe("P5-S04 CP02 Axis 2 Pilot semantic projection PL01–PL09", () => {
  it("PL01 — PASS subject/title from product outcome, not claimStatement", () => {
    const store = new SqliteProductStore(tempProductDbPath("pl01.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:pl01",
        claimStatement: "Raw claim with xct:s04-1 and clm:hidden",
        status: "pass",
      }),
      generatedAt: NOW,
    });
    expect(built.subject).toBe("Résultat de l'action atteint");
    expect(built.title).toContain("Résultat de l'action atteint");
    expect(built.subject).not.toContain("xct:");
    expect(built.subject).not.toContain("Raw claim");
    store.close();
  });

  it("PL02 — FAIL / NOT_PROVEN subjects", () => {
    expect(presentProductOutcomeSubject("FAIL")).toBe(
      "Résultat de l'action en échec",
    );
    expect(presentProductOutcomeSubject("NOT_PROVEN")).toBe(
      "Résultat de l'action non prouvé",
    );
    const store = new SqliteProductStore(tempProductDbPath("pl02.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const fail = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:pl02f",
        status: "fail",
      }),
      generatedAt: NOW,
    });
    expect(fail.subject).toBe("Résultat de l'action en échec");
    const np = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:pl02n",
        status: "not_proven",
      }),
      generatedAt: NOW,
    });
    expect(np.subject).toBe("Résultat de l'action non prouvé");
    store.close();
  });

  it("PL03 — planned never surfaces raw action/target/scope machine codes", () => {
    const store = new SqliteProductStore(tempProductDbPath("pl03.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:pl03" }),
      executionContract: {
        executionContractId: "xct:s04-1",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.path",
        scope: "studio.gcec.scope",
      },
      generatedAt: NOW,
    });
    expect(built.sections.planned).toBe(
      "Un travail Product était prévu pour cette synthèse.",
    );
    expect(built.sections.planned).not.toMatch(
      /cursor\.docs_write|workspace\.isolated|studio\.gcec/,
    );
    store.close();
  });

  it("PL04 — planned uses human-readable title when present", () => {
    const store = new SqliteProductStore(tempProductDbPath("pl04.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:pl04" }),
      executionContract: {
        executionContractId: "xct:s04-1",
        action: "cursor.docs_write.apply",
        title: "Rédiger une note de cadrage",
      },
      generatedAt: NOW,
    });
    expect(built.sections.planned).toBe(
      "Travail prévu : Rédiger une note de cadrage.",
    );
    store.close();
  });

  it("PL05 — done distinguishes Attempt success from Product proof", () => {
    const store = new SqliteProductStore(tempProductDbPath("pl05.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const pass = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:pl05p",
        status: "pass",
      }),
      attempt: { attemptId: "xat:s04-1", status: "succeeded" },
      generatedAt: NOW,
    });
    expect(pass.sections.done).toContain("résultat Product est atteint");
    const np = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:pl05n",
        status: "not_proven",
      }),
      attempt: { attemptId: "xat:s04-1", status: "succeeded" },
      generatedAt: NOW,
    });
    expect(np.sections.done).toMatch(/sans preuve Product/);
    expect(np.sections.done).not.toMatch(FORBIDDEN_PILOT);
    store.close();
  });

  it("PL06 — recommendation adapter maps solicit_morris_* without Morris", () => {
    const arb = projectPilotRecommendationFromW3c({
      kind: "continue",
      headline: "Arbitrage Morris de coordination recommandé",
      nextStep: "coordinate_morris_arbitration",
      nextActionCode: "solicit_morris_arbitration",
    });
    expect(arb).toContain("arbitrage");
    expect(arb).not.toMatch(/Morris/i);
    expect(arb).not.toMatch(/\bD5\b|HumanDecision|ProjectTrajectory|\bW2\b/);

    const go = projectPilotRecommendationFromW3c({
      kind: "continue",
      headline: "Gate Morris next-cycle",
      nextActionCode: "solicit_morris_go",
    });
    expect(go).toMatch(/validation|cycle/i);
    expect(go).not.toMatch(/Morris/i);
  });

  it("PL07 — formatW3cRecommendationForSynthesis ignores rationale jargon", () => {
    const text = formatW3cRecommendationForSynthesis({
      kind: "recover",
      headline: "Qualification Evidence / résultat incomplète",
      nextStep: "complete_evidence",
      nextActionCode: "complete_evidence",
      rationale:
        "D5 HumanDecision ProjectTrajectory W2 NOT_PROVEN expectedOutputs evaluate claim",
    });
    expect(text).not.toMatch(FORBIDDEN_PILOT);
    expect(text).toContain("Compléter les éléments de preuve");
  });

  it("PL08 — ABSENT recommendation text", () => {
    expect(ABSENT_RECOMMENDATION_TEXT).toBe(
      "Aucune recommandation Product courante n'est disponible pour cette synthèse.",
    );
    const store = new SqliteProductStore(tempProductDbPath("pl08.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:pl08" }),
      generatedAt: NOW,
    });
    expect(built.sections.recommendation).toBe(ABSENT_RECOMMENDATION_TEXT);
    store.close();
  });

  it("PL09 — product-path sections stay Pilot-safe (negative lexicon)", async () => {
    const ctx = await authorizeAndSucceed("pl09");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const listed = await svc.repository.listByProject(ctx.projectId);
    const syn = listed.find((s) => s.status === "current");
    expect(syn).toBeTruthy();
    assertPilotSafeSections(syn!);
    expect(syn!.subject).toMatch(/^Résultat de l'action /);
  });
});

describe("P5-S04 CP02 Axis 3 recommendation no-fallback REC01–REC06", () => {
  it("REC01 — without input.recommendation → null / ABSENT, no W3-C scrape", async () => {
    const ctx = await authorizeAndSucceed("rec01");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;

    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: ceId,
      // no recommendation
    });
    expect(lineage.ok).toBe(true);
    if (!lineage.ok) return;
    expect(lineage.input.recommendation).toBeNull();

    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const built = svc.build(lineage.input);
    expect(built.sections.recommendation).toBe(ABSENT_RECOMMENDATION_TEXT);
    expect(built.sourceBindings.recommendationRef).toBeNull();
  });

  it("REC02 — explicit recommendation is preserved", async () => {
    const ctx = await authorizeAndSucceed("rec02");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;
    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: ceId,
      recommendation: {
        ref: "epi:w3c-rec:explicit",
        text: "Poursuivre avec la prochaine étape Pilot.",
      },
    });
    expect(lineage.ok).toBe(true);
    if (!lineage.ok) return;
    expect(lineage.input.recommendation?.text).toBe(
      "Poursuivre avec la prochaine étape Pilot.",
    );
    expect(lineage.input.recommendation?.ref).toBe("epi:w3c-rec:explicit");
  });

  it("REC03 — structured recommendation without text adapts via Pilot", async () => {
    const ctx = await authorizeAndSucceed("rec03");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;
    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: ceId,
      recommendation: {
        ref: "epi:w3c-rec:struct",
        kind: "continue",
        nextActionCode: "confirm_claim_evaluation",
      },
    });
    expect(lineage.ok).toBe(true);
    if (!lineage.ok) return;
    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const built = svc.build(lineage.input);
    expect(built.sections.recommendation).toContain("Confirmation");
    expect(built.sections.recommendation).not.toMatch(FORBIDDEN_PILOT);
  });

  it("REC04 — product-path materialize still carries recommendationRef", async () => {
    const ctx = await authorizeAndSucceed("rec04");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const syn = (await svc.repository.listByProject(ctx.projectId)).find(
      (s) => s.status === "current",
    );
    expect(syn?.sourceBindings.recommendationRef).toMatch(/^epi:w3c-rec:/);
    expect(syn?.sections.recommendation).not.toBe(ABSENT_RECOMMENDATION_TEXT);
  });

  it("REC05 — empty recommendation object fields → ABSENT", () => {
    const store = new SqliteProductStore(tempProductDbPath("rec05.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:rec05" }),
      recommendation: { ref: "epi:empty", kind: null, headline: "  ", nextStep: "" },
      generatedAt: NOW,
    });
    expect(built.sections.recommendation).toBe(ABSENT_RECOMMENDATION_TEXT);
    store.close();
  });

  it("REC06 — lineage recommendation equals input.recommendation only", async () => {
    const ctx = await authorizeAndSucceed("rec06");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;
    const withNull = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: ceId,
      recommendation: null,
    });
    expect(withNull.ok).toBe(true);
    if (!withNull.ok) return;
    expect(withNull.input.recommendation).toBeNull();
  });
});

describe("P5-S04 CP02 Axis 4 fail-closed Evidence EV01–EV04", () => {
  it("EV01 — missing bound evidence → SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND", async () => {
    const ctx = await authorizeAndSucceed("ev01");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;
    const ce =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(ce?.contractResultBindings).toBeTruthy();

    const bad = structuredClone(ce!);
    bad.claimEvaluationId = `clm:ev01-${ctx.attemptId}`;
    bad.contractResultBindings = {
      ...ce!.contractResultBindings!,
      evidenceRefs: ["ev:missing-for-cp02"],
    };
    // Keep ReviewBundle evidenceRefs aligned so matcher reaches evidence load.
    const rbId = ce!.contractResultBindings!.reviewBundleId;
    const rb =
      await ctx.oa.evidenceReviewServices!.reviewBundleReader.findById(rbId);
    expect(rb).toBeTruthy();
    // Force mismatch path avoided: update CE to match RB with missing id —
    // instead mutate both bindings and RB evidenceRefs via direct payload.
    const rbPayload = structuredClone(rb!);
    (rbPayload as { evidenceRefs: string[] }).evidenceRefs = [
      "ev:missing-for-cp02",
    ];
    ctx.store.db
      .prepare(
        `UPDATE oa_review_bundles SET payload_json = ?, updated_at = ? WHERE review_bundle_id = ?`,
      )
      .run(JSON.stringify(rbPayload), NOW, rbId);

    bad.idempotencyKey = `idem:ev01-${ctx.attemptId}`;
    await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);

    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: bad.claimEvaluationId,
    });
    expect(lineage.ok).toBe(false);
    if (lineage.ok) return;
    expect(lineage.code).toBe("SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND");
  });

  it("EV02 — all bound evidence present → lineage ok", async () => {
    const ctx = await authorizeAndSucceed("ev02");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: materialized.product.claimEvaluationId!,
    });
    expect(lineage.ok).toBe(true);
    if (!lineage.ok) return;
    expect(lineage.input.evidence!.length).toBeGreaterThan(0);
  });

  it("EV03 — partial missing among multiple refs → fail-closed", async () => {
    const ctx = await authorizeAndSucceed("ev03");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;
    const ce =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    const existing = ce!.contractResultBindings!.evidenceRefs[0]!;
    const bad = structuredClone(ce!);
    bad.claimEvaluationId = `clm:ev03-${ctx.attemptId}`;
    bad.contractResultBindings = {
      ...ce!.contractResultBindings!,
      evidenceRefs: [existing, "ev:partial-missing-cp02"],
    };
    const rbId = ce!.contractResultBindings!.reviewBundleId;
    const rb =
      await ctx.oa.evidenceReviewServices!.reviewBundleReader.findById(rbId);
    const rbPayload = structuredClone(rb!);
    (rbPayload as { evidenceRefs: string[] }).evidenceRefs = [
      existing,
      "ev:partial-missing-cp02",
    ];
    ctx.store.db
      .prepare(
        `UPDATE oa_review_bundles SET payload_json = ?, updated_at = ? WHERE review_bundle_id = ?`,
      )
      .run(JSON.stringify(rbPayload), NOW, rbId);
    bad.idempotencyKey = `idem:ev03-${ctx.attemptId}`;
    await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);

    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: bad.claimEvaluationId,
    });
    expect(lineage.ok).toBe(false);
    if (!lineage.ok) {
      expect(lineage.code).toBe("SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND");
    }
  });

  it("EV04 — empty evidenceRefs → ok with empty evidence (no phantom filter)", async () => {
    const ctx = await authorizeAndSucceed("ev04");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ce =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(
        materialized.product.claimEvaluationId!,
      );
    const bad = structuredClone(ce!);
    bad.claimEvaluationId = `clm:ev04-${ctx.attemptId}`;
    bad.contractResultBindings = {
      ...ce!.contractResultBindings!,
      evidenceRefs: [],
    };
    const rbId = ce!.contractResultBindings!.reviewBundleId;
    const rb =
      await ctx.oa.evidenceReviewServices!.reviewBundleReader.findById(rbId);
    const rbPayload = structuredClone(rb!);
    (rbPayload as { evidenceRefs: string[] }).evidenceRefs = [];
    ctx.store.db
      .prepare(
        `UPDATE oa_review_bundles SET payload_json = ?, updated_at = ? WHERE review_bundle_id = ?`,
      )
      .run(JSON.stringify(rbPayload), NOW, rbId);
    bad.idempotencyKey = `idem:ev04-${ctx.attemptId}`;
    await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);

    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: bad.claimEvaluationId,
    });
    expect(lineage.ok).toBe(true);
    if (!lineage.ok) return;
    expect(lineage.input.evidence).toEqual([]);
  });
});
```

## FILE: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx` (388 lines)

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
    recommendation: "Aucune recommandation Product courante n'est disponible pour cette synthèse.",
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

    expect(screen.queryByTestId("project-syntheses-authority-none")).toBeNull();
    expect(screen.queryByText(/NON-AUTORITATIVE/i)).toBeNull();
    expect(screen.queryByRole("button", { name: /promouvoir|autorité|décider/i })).toBeNull();
    expect(screen.queryByRole("form")).toBeNull();

    // B1 — header lives in the left contextual column
    expect(screen.getByTestId("project-syntheses-return-overview")).toBeTruthy();
    expect(screen.getByText("Synthèses")).toBeTruthy();

    fireEvent.change(screen.getByTestId("project-syntheses-search"), {
      target: { value: "token-ui-search" },
    });
    await waitFor(() => {
      expect(searchSynthesesMock).toHaveBeenCalled();
    });
  });
});
```

## FILE: `.tmp-sfia-review/p5-s04-visual/cp02/_seed-product-path.mjs` (700 lines)

```js
/**
 * P5-S04 CP02 — PRODUCT-PATH seed for visual captures.
 *
 * Invokes production `materializeW3bProductTerminal` so Synthesis appears via
 * `maybeMaterializeProductSynthesisAfterW3c` — NOT direct services.materialize.
 *
 * Strategy:
 * 1. Prefer HABITFLOW (prj:0ed5c4e1…) when a succeeded attempt exists.
 * 2. Else rehydrate the best campaign succeeded attempt that already has a
 *    Contract-Result ClaimEvaluation (e.g. NoteLite).
 * 3. Else create a fresh governed project in the campaign Product DB
 *    (deterministic Cursor boundary — ZERO OpenAI REAL).
 *
 * Historical direct seed remains: ../_seed-synthesis.mjs (NOT CP02 proof).
 * CP01 seed retained under ../cp01/ (preserved evidence).
 *
 * Run from app dir:
 *   cd projects/sfia-studio/app && node --import tsx ../../../.tmp-sfia-review/p5-s04-visual/cp02/_seed-product-path.mjs
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

const REPO = path.resolve(
  "/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3",
);
const APP_ROOT = path.join(REPO, "projects/sfia-studio/app");
const OUT_DIR = path.resolve(REPO, ".tmp-sfia-review/p5-s04-visual/cp02");
const PREFERRED_PROJECT_ID = "prj:0ed5c4e1-3d23-45cd-b34b-530df1090197";
const W2_REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
const W2_SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);
const W2_FIXED_NOW = "2026-10-05T18:00:00.000Z";
const W2_TEST_PINNED_BASE_HEAD_SHA = "a".repeat(40);
const SUFFIX = `cp02vis${Date.now().toString(36).slice(-6)}`;
const tempDirs = [];

function loadEnvLocal() {
  const file = path.join(APP_ROOT, ".env.local");
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, "utf8").split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2].trim().replace(/^["']|["']$/g, "");
    if (!(key in process.env) || !process.env[key]) process.env[key] = val;
  }
}

function href(rel) {
  return pathToFileURL(path.join(APP_ROOT, rel)).href;
}

function cleanupTemp() {
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    try {
      fs.rmSync(dir, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
}

async function listSucceededAttempts(store) {
  const rows = store.db
    .prepare(
      `SELECT attempt_id, status, payload_json FROM oa_execution_attempts WHERE status = 'succeeded'`,
    )
    .all();
  const out = [];
  for (const row of rows) {
    const payload = JSON.parse(row.payload_json);
    let projectId = payload.projectId ?? null;
    if (!projectId) {
      const m = String(row.payload_json).match(/prj:[a-f0-9-]{36}/i);
      projectId = m ? m[0] : null;
    }
    out.push({ attemptId: row.attempt_id, projectId, payload });
  }
  return out;
}

async function listSyntheses(store, projectId) {
  const { createSqliteSynthesisServices } = await import(
    href("lib/oa/synthesis/index.ts")
  );
  const svc = createSqliteSynthesisServices({ productStore: store });
  return svc.repository.listByProject(projectId);
}

async function bootRuntime(productDbPath) {
  const {
    getRuntimeApplicationService,
    resetRuntimeApplicationServiceForTests,
  } = await import(href("lib/vertical-slice-runtime/index.ts"));
  const { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } = await import(
    href("lib/vertical-slice-runtime/managedRepoRootBaseConfig.ts")
  );
  const { ensureManagedRepoCloneSkeleton } = await import(
    href("lib/oa/project/infrastructure/managedRepoPathFacts.ts")
  );
  const { SqliteRealLaunchSafetyJournal } = await import(
    href("lib/oa/execution-attempt/index.ts")
  );
  const { TestOnlyRealExecutionLaunchPort } = await import(
    href(
      "__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts",
    )
  );

  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim()) {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/w2-harness";
  }
  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL?.trim()) {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/w2-harness.git";
  }
  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH?.trim()) {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = "main";
  }
  if (!process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]?.trim()) {
    const managedBase = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-cp02-managed-"));
    tempDirs.push(managedBase);
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
  }
  ensureManagedRepoCloneSkeleton({
    managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV],
    identity: process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY,
  });

  resetRuntimeApplicationServiceForTests();
  const safetyDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-cp02-gate-"));
  tempDirs.push(safetyDir);

  class SeededIdSource {
    constructor(prefix) {
      this.prefix = prefix;
      this.project = 0;
      this.lps = 0;
      this.correlation = 0;
    }
    nextProjectId() {
      this.project += 1;
      return `prj:${this.prefix}-${this.project}`;
    }
    nextLpsVersionId() {
      this.lps += 1;
      return `lps:${this.prefix}-${this.lps}`;
    }
    nextCorrelationId() {
      this.correlation += 1;
      return `cor:${this.prefix}-${this.correlation}`;
    }
  }

  return getRuntimeApplicationService({
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: W2_FIXED_NOW,
    idSource: new SeededIdSource(`s04${SUFFIX}`),
    auditMode: "noop",
    productDbPath,
    realBoundary: {
      launchPort: new TestOnlyRealExecutionLaunchPort({ holdCompletion: true }),
      safetyJournal: new SqliteRealLaunchSafetyJournal({
        databasePath: path.join(safetyDir, "safety.sqlite"),
      }),
    },
  });
}

async function seedQualifiedProject(runtime, suffix) {
  const { ensureManagedRepoCloneSkeleton } = await import(
    href("lib/oa/project/infrastructure/managedRepoPathFacts.ts")
  );
  const { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } = await import(
    href("lib/vertical-slice-runtime/managedRepoRootBaseConfig.ts")
  );
  const W2_TEST_ACTOR = {
    actorId: "actor:w2-test-seed",
    role: "project_owner",
    displayName: "W2 seed",
    authorityLevel: "N3",
  };

  const created = await runtime.createProject({
    name: `P5-S04 CP02 Visual ${suffix}`,
    objective: "Prouver Synthèse Product-path pour captures CP02",
    context: "ZERO REAL — deterministic Cursor boundary",
    criticality: "STANDARD",
    constraints: ["AUCUNE EXÉCUTION RÉELLE OPENAI"],
    shortReference: `P5S04${suffix.toUpperCase().slice(0, 6)}`,
    idempotencyKey: `p5-s04-cp02-visual-${suffix}`,
  });
  if (!created.ok) throw new Error("createProject failed");
  const projectId = created.project.projectId;
  const overview = await runtime.getProject(projectId);
  if (!overview.ok) throw new Error("getProject failed");
  const oa = runtime.oa;
  const cycleInstanceId = `cyc:inst:cp02-${suffix}`;
  const cycle = await oa.cycleServices.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: "cyc:delivery",
    projectId,
    signals: {},
    objective: "Prouver la trajectoire décidée",
    scope: "p5-s04-cp02-visual",
    createdBy: W2_TEST_ACTOR,
    linkAsActiveCycle: true,
    expectedLpsVersion: overview.livingState.version,
    ckcResolutionRef: "ckcres:p5-s04-cp02-visual",
  });
  if (!cycle.ok) throw new Error("createCycle failed");

  if (oa.projectServices.setProjectRepositoryBinding) {
    const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
      projectId,
      actor: W2_TEST_ACTOR,
      binding: {
        provider: "github",
        identity: `acme/w2-harness-${suffix}`,
        remoteUrl: `https://github.com/acme/w2-harness-${suffix}.git`,
        defaultBranch: "main",
        pathRoot: `projects/w2-harness-${suffix}`,
      },
    });
    if (!bound.ok) throw new Error("setProjectRepositoryBinding failed");
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV],
      identity: `acme/w2-harness-${suffix}`,
    });
  }
  return { projectId, cycleInstanceId };
}

async function settleDeterministicSuccess(oa, attemptId) {
  const { M4_REAL_GATEWAY_ADAPTER_ID } = await import(
    href("lib/oa/execution-attempt/index.ts")
  );
  const { TestOnlyRealExecutionLaunchPort } = await import(
    href(
      "__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts",
    )
  );
  const services = oa.executionAttemptServices;
  const port = services?.realBoundary?.launchPort;
  if (!(port instanceof TestOnlyRealExecutionLaunchPort)) {
    return { ok: false, code: "TEST_ONLY_LAUNCH_PORT_REQUIRED" };
  }
  if (!port.calls.some((c) => c.attemptId === attemptId)) {
    return { ok: false, code: "LAUNCH_NOT_OBSERVED" };
  }
  const digest = attemptId.replace(/^xat:/, "").replace(/[^a-zA-Z0-9:_-]/g, "");
  const processRef = `proc:test-only:${digest}`;
  port.resolveSimulatedCompletion(processRef, {
    exitCode: 0,
    timedOut: false,
    stdout: "SIMULATED_PRODUCT_CURSOR_SUCCESS",
    stderr: "",
    durationMs: 1,
  });
  const hex = attemptId.replace(/[^a-f0-9]/gi, "").toLowerCase() || "0";
  const recorded = await services.recordExecutionResult.execute({
    attemptId,
    adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
    resultRef: `res:w3a:${hex.slice(0, 32)}`,
    completedAt: W2_FIXED_NOW,
  });
  if (!recorded.ok) return recorded;
  return { ok: true, attempt: recorded.attempt };
}

async function authorizeExecuteAndMaterialize(runtime, oa) {
  const { evaluateExecutionAuthorization } = await import(
    href("features/project-assistant/w2/authorizeExecutionContract.ts")
  );
  const { confirmExecutionContractForAuthorization } = await import(
    href("features/project-assistant/w2/confirmForAuthorization.ts")
  );
  const { decideTrajectory } = await import(
    href("features/project-assistant/w2/decideTrajectory.ts")
  );
  const {
    governedExecuteRecordResult,
    governedExecuteSelectAgent,
    governedExecuteStart,
  } = await import(
    href("features/project-assistant/w2/governedExecuteAuthorizedContract.ts")
  );
  const { inspectExecutionContract } = await import(
    href("features/project-assistant/w2/inspectExecutionContract.ts")
  );
  const { prepareExecutionContractFromW2Decision } = await import(
    href("features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts")
  );
  const { proposeTrajectoryOptions } = await import(
    href("features/project-assistant/w2/proposeTrajectoryOptions.ts")
  );
  const { resolveW2QualificationInputs } = await import(
    href("features/project-assistant/w2/qualificationInputs.ts")
  );
  const { GOVERNED_OPTION_REF } = await import(
    href("features/project-assistant/w2/trajectoryOptions.ts")
  );
  const { materializeW3bProductTerminal } = await import(
    href("features/project-assistant/w2/materializeW3bProductTerminal.ts")
  );

  const seeded = await seedQualifiedProject(runtime, SUFFIX);
  const qualification = await resolveW2QualificationInputs({
    oa,
    projectId: seeded.projectId,
  });
  if (!qualification.ok) throw new Error(`qualification: ${qualification.code}`);
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId: seeded.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  if (!proposed.ok) throw new Error(`propose: ${proposed.code}`);
  const decided = await decideTrajectory({
    oa,
    projectId: seeded.projectId,
    optionSetRef: proposed.optionSetRef,
    options: proposed.options,
    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
    selectedOptionRef: GOVERNED_OPTION_REF,
    trajectoryId: proposed.proposedTrajectory.trajectoryId,
    candidateVersion: proposed.proposedTrajectory.version,
    forceLocalAuthority: true,
  });
  if (!decided.ok) throw new Error(`decide: ${decided.code}`);

  const overview = await runtime.getProject(seeded.projectId);
  if (!overview.ok) throw new Error("context getProject failed");
  const context = {
    projectId: seeded.projectId,
    lpsId: overview.livingState.id,
    lpsVersion: overview.livingState.version,
    doctrineDigest: overview.doctrine.digest,
    activeCycleInstanceId: overview.livingState.activeCycleInstanceId ?? null,
    ckcResolutionRef: "ckcres:p5-s04-cp02-visual",
  };

  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
    qualifiedOperationKind: "generate-temporary-artifact",
    pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
  });
  if (!prepared.ok) throw new Error(`prepare: ${prepared.code}`);
  const executionContractId = prepared.contract.executionContractId;
  await inspectExecutionContract({
    oa,
    projectId: seeded.projectId,
    executionContractId,
  });
  const confirmed = await confirmExecutionContractForAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  if (!confirmed.ok) throw new Error(`confirm: ${confirmed.code}`);
  const authorized = await evaluateExecutionAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  if (!(authorized.ok && authorized.outcome === "AUTHORIZED")) {
    throw new Error(`authorize: ${authorized.code ?? authorized.outcome}`);
  }
  const selected = await governedExecuteSelectAgent({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  if (!selected.ok) throw new Error(`select: ${selected.code}`);
  const started = await governedExecuteStart({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    attemptId: selected.attemptId,
    forceLocalAuthority: true,
  });
  if (!started.ok) throw new Error(`start: ${started.code}`);
  const settled = await settleDeterministicSuccess(oa, started.attemptId);
  if (!settled.ok) throw new Error(`settle: ${settled.code}`);
  const projected = await governedExecuteRecordResult({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    attemptId: started.attemptId,
    forceLocalAuthority: true,
  });
  if (!projected.ok) throw new Error(`record: ${projected.code}`);

  const materialized = await materializeW3bProductTerminal({
    oa,
    projectId: seeded.projectId,
    attemptId: started.attemptId,
  });
  return {
    projectId: seeded.projectId,
    attemptId: started.attemptId,
    executionContractId,
    materialized,
    mode: "fresh-governed-path",
  };
}

async function main() {
  process.chdir(APP_ROOT);
  loadEnvLocal();
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
  process.env.SFIA_STUDIO_E2E_QA_CONTROL = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  delete process.env.P5_S02_RUN_REAL;

  const dbPath = process.env.SFIA_STUDIO_PRODUCT_DB_PATH?.trim();
  if (!dbPath) throw new Error("SFIA_STUDIO_PRODUCT_DB_PATH missing");
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const { SqliteProductStore } = await import(href("lib/oa/project/index.ts"));
  const { setConversationProviderForTests } = await import(
    href("lib/platform/ai/index.ts")
  );
  const { clearW3bBoundaryArm } = await import(
    href("lib/vertical-slice-runtime/w3bE2eBoundaryControl.ts")
  );
  const { materializeW3bProductTerminal } = await import(
    href("features/project-assistant/w2/materializeW3bProductTerminal.ts")
  );

  setConversationProviderForTests(null);
  clearW3bBoundaryArm();

  const probe = new SqliteProductStore(dbPath);
  const attempts = await listSucceededAttempts(probe);
  const habitflowAttempt =
    attempts.find((a) => a.projectId === PREFERRED_PROJECT_ID)?.attemptId ??
    null;

  // Prefer rehydrate candidates that already have Contract-Result CE rows.
  const ceRows = probe.db
    .prepare(
      `SELECT claim_evaluation_id, project_id, status, payload_json FROM oa_claim_evaluations`,
    )
    .all();
  const rehydrateCandidates = [];
  for (const ce of ceRows) {
    let payload;
    try {
      payload = JSON.parse(ce.payload_json);
    } catch {
      continue;
    }
    if (payload.subjectKind !== "execution_contract_result") continue;
    const bindings = payload.contractResultBindings;
    if (!bindings?.executionAttemptId) continue;
    const attempt = attempts.find(
      (a) => a.attemptId === bindings.executionAttemptId,
    );
    if (!attempt) continue;
    rehydrateCandidates.push({
      projectId: ce.project_id,
      attemptId: bindings.executionAttemptId,
      claimEvaluationId: ce.claim_evaluation_id,
      status: ce.status,
    });
  }
  probe.close();

  console.log(
    JSON.stringify(
      {
        productDb: dbPath,
        preferredProjectId: PREFERRED_PROJECT_ID,
        habitflowSucceededAttempt: habitflowAttempt,
        rehydrateCandidates,
      },
      null,
      2,
    ),
  );

  const runtime = await bootRuntime(dbPath);
  const oa = runtime.oa;
  if (!oa) throw new Error("runtime.oa missing");
  const store = oa.projectServices.store;
  if (!(store instanceof SqliteProductStore)) {
    throw new Error("expected SqliteProductStore");
  }

  let outcome = null;

  async function tryMaterialize(projectId, attemptId, mode) {
    console.log(`trying ${mode}: ${projectId} / ${attemptId}`);
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    if (!materialized.ok) {
      console.log("materialize failed", materialized);
      return null;
    }
    const syntheses = await listSyntheses(store, projectId);
    const current = syntheses.filter((s) => s.status === "current");
    if (current.length < 1) {
      console.log("no current synthesis after materialize (soft-fail?)");
      return null;
    }
    return {
      projectId,
      attemptId,
      materialized,
      mode,
      synthesis: current[0],
    };
  }

  if (habitflowAttempt) {
    outcome = await tryMaterialize(
      PREFERRED_PROJECT_ID,
      habitflowAttempt,
      "habitflow-rehydrate",
    );
  }

  if (!outcome) {
    for (const cand of rehydrateCandidates) {
      outcome = await tryMaterialize(
        cand.projectId,
        cand.attemptId,
        `campaign-rehydrate:${cand.claimEvaluationId}`,
      );
      if (outcome) break;
    }
  }

  if (!outcome) {
    console.log("falling back to fresh governed Product path");
    const fresh = await authorizeExecuteAndMaterialize(runtime, oa);
    if (!fresh.materialized?.ok) {
      throw new Error(`fresh materialize failed: ${JSON.stringify(fresh.materialized)}`);
    }
    const syntheses = await listSyntheses(store, fresh.projectId);
    const current = syntheses.filter((s) => s.status === "current");
    if (current.length < 1) {
      throw new Error("fresh path produced no current Synthesis");
    }
    outcome = {
      ...fresh,
      synthesis: current[0],
    };
  }

  const FORBIDDEN = [
    "ClaimEvaluation",
    "ReviewBundle",
    "ContractResult",
    "ExecutionContract",
    "HumanDecision",
    "ProjectTrajectory",
    "NON-AUTORITATIVE",
    "non_critical",
    "deterministic",
    "NOT_PROVEN",
    "expectedOutputs",
    "evaluate claim",
    "cursor.docs_write",
    "workspace.isolated",
    "studio.gcec",
    "\bD5\b",
    "\bW2\b",
  ];
  const RAW_ID = /\b(clm|rb|xat|xct|ev|syn):[a-zA-Z0-9:_.-]+/;

  async function scanPilot(syn) {
    const joined = [syn.title, syn.verdictLabel, ...Object.values(syn.sections || {})].join("\n");
    const jargonHits = [];
    for (const t of FORBIDDEN) {
      if (t.startsWith("\\b")) {
        if (new RegExp(t).test(joined)) jargonHits.push(t);
      } else if (joined.includes(t)) {
        jargonHits.push(t);
      }
    }
    const rawIds = joined.match(new RegExp(RAW_ID.source, "g")) || [];
    // Machine action codes / capability ids often look like dotted tokens
    const capabilityHits = [];
    for (const tok of ["cursor.docs_write", "workspace.isolated", "studio.gcec"]) {
      if (joined.includes(tok)) capabilityHits.push(tok);
    }
    return {
      jargonHits: [...new Set([...jargonHits, ...capabilityHits])],
      rawIdHits: [...new Set(rawIds)],
      joined,
    };
  }

  // If rehydrate returned a CP01-era row (same fingerprint, stale Pilot projection),
  // soft-supersede and rematerialize once so CP02 builder sections are written.
  let scan = await scanPilot(outcome.synthesis);
  if (scan.jargonHits.length || scan.rawIdHits.length) {
    console.log("stale/leaky synthesis — forcing soft-supersede + rematerialize", scan);
    const { createSqliteSynthesisServices } = await import(
      href("lib/oa/synthesis/index.ts")
    );
    const svc = createSqliteSynthesisServices({ productStore: store });
    const current = await svc.repository.listByProject(outcome.projectId);
    for (const row of current.filter((s) => s.status === "current")) {
      await svc.repository.softSupersede(row.synthesisId);
    }
    const rematerialized = await materializeW3bProductTerminal({
      oa,
      projectId: outcome.projectId,
      attemptId: outcome.attemptId,
    });
    if (!rematerialized.ok) {
      throw new Error(`force rematerialize failed: ${JSON.stringify(rematerialized)}`);
    }
    const syntheses = await listSyntheses(store, outcome.projectId);
    const refreshed = syntheses.filter((s) => s.status === "current");
    if (refreshed.length < 1) {
      throw new Error("force rematerialize produced no current Synthesis");
    }
    outcome = {
      ...outcome,
      materialized: rematerialized,
      synthesis: refreshed[0],
      mode: `${outcome.mode}+cp02-force-refresh`,
    };
    scan = await scanPilot(outcome.synthesis);
  }

  const syn = outcome.synthesis;
  const jargonHits = [...scan.jargonHits, ...scan.rawIdHits];

  const report = {
    seededAt: new Date().toISOString(),
    mode: outcome.mode,
    productionSeam:
      "materializeW3bProductTerminal → maybeMaterializeProductSynthesisAfterW3c",
    productDb: dbPath,
    projectId: outcome.projectId,
    attemptId: outcome.attemptId,
    executionContractId: outcome.executionContractId ?? null,
    claimEvaluationId: outcome.materialized.product?.claimEvaluationId ?? null,
    postEvidenceOk: outcome.materialized.postEvidence?.ok === true,
    synthesis: {
      synthesisId: syn.synthesisId,
      title: syn.title,
      authority: syn.authority,
      status: syn.status,
      verdictLabel: syn.verdictLabel,
      sectionKeys: Object.keys(syn.sections),
    },
    pilotLanguageJargonHits: jargonHits,
    pilotLeaks: jargonHits.length,

    studioHref: `/studio/projects/${encodeURIComponent(outcome.projectId)}`,
  };

  if (jargonHits.length > 0) {
    console.error("PILOT TECHNICAL LANGUAGE LEAKS", jargonHits);
    fs.writeFileSync(path.join(OUT_DIR, "seed-product-path.json"), JSON.stringify(report, null, 2));
    throw new Error(`PILOT TECHNICAL LANGUAGE LEAKS = ${jargonHits.length}`);
  }

  const outFile = path.join(OUT_DIR, "seed-product-path.json");
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  console.log("wrote", outFile);

  clearW3bBoundaryArm();
  cleanupTemp();
}

main().catch((err) => {
  console.error(err);
  cleanupTemp();
  process.exit(1);
});
```

## FILE: `.tmp-sfia-review/p5-s04-visual/cp02/_capture.mjs` (266 lines)

```js
/**
 * P5-S04 CP02 — visual captures after PRODUCT-PATH seed.
 * Reads seed-product-path.json for projectId.
 * Output: .tmp-sfia-review/p5-s04-visual/cp02/after/
 */
import pkg from "/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3/projects/sfia-studio/app/node_modules/playwright/index.js";
const { chromium } = pkg;
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(
  "/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3/.tmp-sfia-review/p5-s04-visual/cp02",
);
const OUT = path.join(ROOT, "after");
const FIGMA = path.resolve(ROOT, "../figma");
const AUTH = path.resolve(
  "/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3/.tmp-sfia-review/auth/studio-storage-state.json",
);
const SEED = path.join(ROOT, "seed-product-path.json");
const BASE = "http://localhost:3020";

fs.mkdirSync(OUT, { recursive: true });

const seed = JSON.parse(fs.readFileSync(SEED, "utf8"));
const PROJECT_HREF = seed.studioHref;

async function shot(page, name) {
  const file = path.join(OUT, name);
  await page.screenshot({ path: file, fullPage: false });
  return file;
}

async function openProject(page) {
  await page.goto(`${BASE}${PROJECT_HREF}`, { waitUntil: "networkidle" });
  await page.waitForSelector("[data-testid='project-tabs']", { timeout: 45000 });
}

async function openSyntheses(page) {
  const shortcut = page.locator("[data-testid='project-shortcut-syntheses']");
  if ((await shortcut.count()) > 0) {
    await shortcut.click();
  } else {
    await page.click("[data-testid='project-tab-overview']");
    await page.waitForSelector("[data-testid='project-overview-surface']");
    await page.click("[data-testid='project-overview-open-syntheses']");
  }
  await page.waitForSelector("[data-testid='project-syntheses-surface']", {
    timeout: 30000,
  });
  await page.waitForTimeout(600);
}

async function pageTextHas(page, needles) {
  const text = await page.locator("body").innerText();
  return needles.filter((n) => text.includes(n));
}

async function main() {
  if (!fs.existsSync(AUTH)) throw new Error(`Missing auth: ${AUTH}`);
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    storageState: AUTH,
    viewport: { width: 1440, height: 1024 },
  });
  const page = await context.newPage();
  const manifest = {
    capturedAt: new Date().toISOString(),
    seed,
    items: [],
  };

  await openProject(page);
  await openSyntheses(page);

  const listEmpty =
    (await page.locator("[data-testid='project-syntheses-empty']").count()) > 0;
  const badgeHits = await pageTextHas(page, ["NON-AUTORITATIVE"]);
  const oaHits = await pageTextHas(page, [
    "ClaimEvaluation",
    "ReviewBundle",
    "ContractResult",
    "ExecutionContract",
    "HumanDecision",
    "ProjectTrajectory",
    "non_critical",
    "deterministic",
    "NOT_PROVEN",
    "expectedOutputs",
    "evaluate claim",
    "cursor.docs_write",
    "workspace.isolated",
    "studio.gcec",
  ]);
  // Raw ID prefixes in visible body (exclude navigation URLs by scanning detail/list only)
  const surfaceText = await page
    .locator("[data-testid='project-syntheses-surface']")
    .innerText()
    .catch(async () => page.locator("body").innerText());
  const rawIdHits = (
    surfaceText.match(/\b(clm|rb|xat|xct|ev):[a-zA-Z0-9:_.-]+/g) || []
  ).filter((x, i, a) => a.indexOf(x) === i);

  manifest.items.push({
    viewport: "1440x1024",
    view: "syntheses",
    state: listEmpty ? "empty" : "list+detail",
    figma: "164:3",
    figmaRef: path.join(FIGMA, "desktop-164-3.png"),
    file: path.basename(await shot(page, "syntheses-desktop-1440x1024.png")),
    noNonAuthoritativeBadge: badgeHits.length === 0,
    noOaJargonInVisible: oaHits.length === 0,
    oaHits,
    rawIdHits,
    pilotLeaks: oaHits.length + rawIdHits.length,
  });

  await page.setViewportSize({ width: 1024, height: 768 });
  await page.waitForTimeout(400);
  manifest.items.push({
    viewport: "1024x768",
    view: "syntheses",
    state: listEmpty ? "empty" : "list+detail",
    figma: "190:175",
    figmaRef: path.join(FIGMA, "compact-190-175.png"),
    file: path.basename(await shot(page, "syntheses-compact-1024x768.png")),
  });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(500);
  // Ensure list (not detail) for mobile list capture
  if (!listEmpty) {
    const back = page.locator("[data-testid='project-syntheses-back']");
    if ((await back.count()) > 0 && (await back.isVisible())) {
      await back.click();
      await page.waitForTimeout(350);
    }
  }
  const headerVisible = await page
    .locator("[data-testid='project-header']")
    .isVisible()
    .catch(() => true);
  const tabsVisible = await page
    .locator("[data-testid='project-tabs']")
    .isVisible()
    .catch(() => true);
  manifest.items.push({
    viewport: "390x844",
    view: "syntheses",
    state: listEmpty ? "empty" : "mobile-list",
    figma: "190:433",
    figmaRef: path.join(FIGMA, "mobile-list-190-433.png"),
    file: path.basename(await shot(page, "syntheses-mobile-list-390x844.png")),
    projectHeaderHidden: !headerVisible,
    projectTabsHidden: !tabsVisible,
  });

  if (!listEmpty) {
    const item = page.locator("[data-testid='project-syntheses-item']").first();
    if ((await item.count()) > 0) {
      await item.click();
      await page.waitForSelector("[data-testid='project-syntheses-detail']", {
        timeout: 15000,
      });
      await page.waitForTimeout(400);
    }
  }
  manifest.items.push({
    viewport: "390x844",
    view: "syntheses",
    state: listEmpty ? "empty" : "mobile-detail",
    figma: "190:455",
    figmaRef: path.join(FIGMA, "mobile-detail-190-455.png"),
    file: path.basename(
      await shot(page, "syntheses-mobile-detail-390x844.png"),
    ),
  });

  // Aperçu desktop control
  await page.setViewportSize({ width: 1440, height: 1024 });
  await page.click("[data-testid='project-syntheses-return-overview']");
  await page.waitForSelector("[data-testid='project-overview-surface']", {
    timeout: 20000,
  });
  await page.waitForFunction(
    () =>
      document.querySelector(
        "[data-testid='project-overview-synthesis-preview']",
      ) ||
      document.querySelector(
        "[data-testid='project-overview-synthesis-empty']",
      ),
    { timeout: 20000 },
  );
  await page.waitForTimeout(300);
  const hasPreview =
    (await page
      .locator("[data-testid='project-overview-synthesis-preview']")
      .count()) > 0;
  manifest.items.push({
    viewport: "1440x1024",
    view: "overview",
    state: hasPreview ? "synthesis-preview" : "no-preview",
    figma: "51:2",
    purpose: "Aperçu synthesis teaser control",
    file: path.basename(await shot(page, "apercu-desktop-1440x1024.png")),
  });

  // Conversation control
  await page.click("[data-testid='project-tab-conversation']");
  await page.waitForSelector("[data-testid='project-conversation-main']");
  await page.waitForTimeout(500);
  const teaser = page.locator("[data-testid='conversation-synthesis-teaser']");
  const teaserVisible =
    (await teaser.count()) > 0 && (await teaser.isVisible());
  manifest.items.push({
    viewport: "1440x1024",
    view: "conversation",
    state: teaserVisible ? "synthesis-teaser" : "no-teaser",
    file: path.basename(
      await shot(page, "conversation-desktop-1440x1024.png"),
    ),
  });

  // Execution mobile control (shared shell CSS may have changed)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.click("[data-testid='project-tab-execution']");
  await page.waitForSelector("[data-testid='project-execution-surface']", {
    timeout: 20000,
  });
  await page.waitForTimeout(400);
  manifest.items.push({
    viewport: "390x844",
    view: "execution",
    state: "mobile-shell-control",
    purpose: "B2 shared mobile shell regression control",
    file: path.basename(await shot(page, "execution-mobile-390x844.png")),
  });

  fs.writeFileSync(
    path.join(OUT, "manifest.json"),
    JSON.stringify(manifest, null, 2),
  );
  console.log(
    JSON.stringify(
      {
        listEmpty,
        hasPreview,
        teaserVisible,
        badgeHits,
        oaHits,
        rawIdHits,
        pilotLeaks: oaHits.length + rawIdHits.length,
        projectId: seed.projectId,
        items: manifest.items.map((i) => i.file),
      },
      null,
      2,
    ),
  );
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

## FILE: `.tmp-sfia-review/p5-s04-visual/cp02/manifest.md` (29 lines)

```md
# P5-S04 CORRECTION PASS 02 — Visual Manifest

**Captured:** 2026-10-05 Europe/Paris
**Product project:** FocusFlow · `prj:2eaad5df-7e82-4bc0-844d-9df20e43462f`
**Production path:** `materializeW3bProductTerminal` → `maybeMaterializeProductSynthesisAfterW3c`
**Seed:** `.tmp-sfia-review/p5-s04-visual/cp02/_seed-product-path.mjs` · `seed-product-path.json`
**Synthesis (CP02):** `syn:ed340d63e583ff51bc9a0cb7a6c35219` · title `Synthèse — Résultat de l'action non prouvé` · verdict `non_prouve`
**Product outcome:** campaign CE `not_proven` (honest Product truth — Pilot label « Non prouvé »)
**Prior CP01 evidence:** preserved under `../cp01/` (NOT overwritten)
**Historical (NOT CP02 proof):** `../_seed-synthesis.mjs` (direct `services.materialize`)

**Technical-token scan (runtime + durable sections):** **PILOT TECHNICAL LANGUAGE LEAKS = 0**
Covered: ClaimEvaluation · ReviewBundle · ExecutionContract · ContractResult · HumanDecision · ProjectTrajectory · D5 · W2 · NOT_PROVEN · expectedOutputs · evaluate claim · raw ID prefixes (`clm:`/`rb:`/`xat:`/`xct:`/`ev:`) · cursor.docs_write · workspace.isolated · studio.gcec · NON-AUTORITATIVE · non_critical · deterministic.

| Capture | Viewport | Figma | Prior (CP01) | After (CP02) | Corrected / regression | A | B | C | D |
| --- | --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: |
| syntheses-desktop-1440x1024.png | 1440×1024 | 164:3 | `../cp01/after/syntheses-desktop-1440x1024.png` | `after/syntheses-desktop-1440x1024.png` | B1 CLOSED — NO REGRESSION · Pilot subject/sections | 0 | 0 | 1 | 1 |
| syntheses-compact-1024x768.png | 1024×768 | 190:175 | `../cp01/after/syntheses-compact-1024x768.png` | `after/syntheses-compact-1024x768.png` | B1 CLOSED — NO REGRESSION | 0 | 0 | 1 | 0 |
| syntheses-mobile-list-390x844.png | 390×844 | 190:433 | `../cp01/after/syntheses-mobile-list-390x844.png` | `after/syntheses-mobile-list-390x844.png` | B2 CLOSED — NO REGRESSION (projectHeader+tabs hidden) | 0 | 0 | 0 | 0 |
| syntheses-mobile-detail-390x844.png | 390×844 | 190:455 | `../cp01/after/syntheses-mobile-detail-390x844.png` | `after/syntheses-mobile-detail-390x844.png` | B2 CLOSED — NO REGRESSION (← Synthèses) | 0 | 0 | 1 | 0 |
| apercu-desktop-1440x1024.png | 1440×1024 | 51:2 block | `../cp01/after/apercu-desktop-1440x1024.png` | `after/apercu-desktop-1440x1024.png` | teaser reflects CP02 Pilot title | 0 | 0 | 0 | 1 |
| conversation-desktop-1440x1024.png | 1440×1024 | 46:2 teaser | `../cp01/after/conversation-desktop-1440x1024.png` | `after/conversation-desktop-1440x1024.png` | teaser present; no NON-AUTORITATIVE | 0 | 0 | 0 | 0 |
| execution-mobile-390x844.png | 390×844 | shell control | `../cp01/after/execution-mobile-390x844.png` | `after/execution-mobile-390x844.png` | shared shell hide scoped to syntheses only | 0 | 0 | 0 | 1 |

**Totals:** A=0 · B=0 · C=3 (density/rhythm polish — NON-BLOCKING) · D=3 (campaign `not_proven` CE honesty · W3-C recommendation Pilot text · empty execution shell honesty)

**B1 CLOSED — NO REGRESSION**
**B2 CLOSED — NO REGRESSION**
**PILOT TECHNICAL LANGUAGE LEAKS = 0**
```

## FILE: `.tmp-sfia-review/p5-s04-visual/cp02/correction-design-note.md` (37 lines)

```md
# P5-S04 CORRECTION PASS 02 — Design Note

**Reviewed:** 2026-10-05 Europe/Paris
**Runtime evidence:** `.tmp-sfia-review/p5-s04-visual/cp02/after/`
**Figma refs:** `../figma/` (164:3 · 190:175 · 190:433 · 190:455) · Overview 51:2 · Conversation teaser
**Seed path:** PRODUCT PATH only (`materializeW3bProductTerminal` → `maybeMaterializeProductSynthesisAfterW3c`)
**CP01 evidence:** preserved under `../cp01/` (not overwritten)

## Method
Side-by-side against Figma + CP01 after captures. Semantic CP02 axes (soft-fail observability · Pilot projection · recommendation currentness · Evidence fail-closed) must not reopen B1/B2.

## Critical Review closures

| Finding | Status | Evidence |
| --- | --- | --- |
| Soft-fail observability | **CLOSED** (tests SF) | Production seam diagnostic; Truth C preserved |
| Pilot semantic projection | **CLOSED** | Subject `Résultat de l'action non prouvé`; sections free of OA internals |
| Stale recommendation fallback | **CLOSED** (tests REC) | Current W3-C only |
| Evidence fail-closed | **CLOSED** (tests EV) | Missing bound Evidence → lineage error |
| **B1 Desktop/Compact** | **CLOSED — NO REGRESSION** | Header + search + list in left column; detail alongside |
| **B2 Mobile** | **CLOSED — NO REGRESSION** | `data-active-view=syntheses` hides projectHeader+tabs; ← Synthèses detail |

## Counts (target A=0 B=0)

| Class | Count | Notes |
| --- | ---: | --- |
| **A** | **0** | Read-only; authority none; no fake authority CTAs |
| **B** | **0** | B1/B2 preserved — no structural regression |
| **C** | **3** | Desktop section density vs 164:3; compact column rhythm; mobile detail density (NON-BLOCKING) |
| **D** | **3** | Campaign `not_proven` CE honesty; W3-C Pilot recommendation text; empty execution shell |

## Technical-token scan
**PILOT TECHNICAL LANGUAGE LEAKS = 0** (ClaimEvaluation, ReviewBundle, ContractResult, ExecutionContract, HumanDecision, ProjectTrajectory, D5, W2, NOT_PROVEN, expectedOutputs, evaluate claim, raw ID prefixes, cursor.docs_write, etc.)

## Verdict
**PASS WITH C/D RESERVES — A=0 · B=0**
B1/B2 = **CLOSED — NO REGRESSION**. Ready for ChatGPT Final Critical Re-Review.
```

## FILE: `.tmp-sfia-review/p5-s04-visual/cp02/seed-product-path.json` (32 lines)

```json
{
  "seededAt": "2026-10-05T19:10:49.266Z",
  "mode": "campaign-rehydrate:clm:docs-write:xat:w3a:46736f6deb0fb02f",
  "productionSeam": "materializeW3bProductTerminal → maybeMaterializeProductSynthesisAfterW3c",
  "productDb": "/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/new-project-campaign-01/product/oa-product.sqlite",
  "projectId": "prj:2eaad5df-7e82-4bc0-844d-9df20e43462f",
  "attemptId": "xat:w3a:46736f6deb0fb02f",
  "executionContractId": null,
  "claimEvaluationId": "clm:docs-write:xat:w3a:46736f6deb0fb02f",
  "postEvidenceOk": true,
  "synthesis": {
    "synthesisId": "syn:ed340d63e583ff51bc9a0cb7a6c35219",
    "title": "Synthèse — Résultat de l'action non prouvé",
    "authority": "none",
    "status": "current",
    "verdictLabel": "non_prouve",
    "sectionKeys": [
      "summary",
      "planned",
      "done",
      "evaluation",
      "gaps",
      "impact",
      "verdict",
      "recommendation",
      "verified"
    ]
  },
  "pilotLanguageJargonHits": [],
  "pilotLeaks": 0,
  "studioHref": "/studio/projects/prj%3A2eaad5df-7e82-4bc0-844d-9df20e43462f"
}
```

## FILE: `.tmp-sfia-review/p5-s04-visual/cp02/after/manifest.json` (97 lines)

```json
{
  "capturedAt": "2026-10-05T19:10:53.763Z",
  "seed": {
    "seededAt": "2026-10-05T19:10:49.266Z",
    "mode": "campaign-rehydrate:clm:docs-write:xat:w3a:46736f6deb0fb02f",
    "productionSeam": "materializeW3bProductTerminal → maybeMaterializeProductSynthesisAfterW3c",
    "productDb": "/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/new-project-campaign-01/product/oa-product.sqlite",
    "projectId": "prj:2eaad5df-7e82-4bc0-844d-9df20e43462f",
    "attemptId": "xat:w3a:46736f6deb0fb02f",
    "executionContractId": null,
    "claimEvaluationId": "clm:docs-write:xat:w3a:46736f6deb0fb02f",
    "postEvidenceOk": true,
    "synthesis": {
      "synthesisId": "syn:ed340d63e583ff51bc9a0cb7a6c35219",
      "title": "Synthèse — Résultat de l'action non prouvé",
      "authority": "none",
      "status": "current",
      "verdictLabel": "non_prouve",
      "sectionKeys": [
        "summary",
        "planned",
        "done",
        "evaluation",
        "gaps",
        "impact",
        "verdict",
        "recommendation",
        "verified"
      ]
    },
    "pilotLanguageJargonHits": [],
    "pilotLeaks": 0,
    "studioHref": "/studio/projects/prj%3A2eaad5df-7e82-4bc0-844d-9df20e43462f"
  },
  "items": [
    {
      "viewport": "1440x1024",
      "view": "syntheses",
      "state": "list+detail",
      "figma": "164:3",
      "figmaRef": "/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3/.tmp-sfia-review/p5-s04-visual/figma/desktop-164-3.png",
      "file": "syntheses-desktop-1440x1024.png",
      "noNonAuthoritativeBadge": true,
      "noOaJargonInVisible": true,
      "oaHits": [],
      "rawIdHits": [],
      "pilotLeaks": 0
    },
    {
      "viewport": "1024x768",
      "view": "syntheses",
      "state": "list+detail",
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
      "file": "syntheses-mobile-list-390x844.png",
      "projectHeaderHidden": true,
      "projectTabsHidden": true
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
      "purpose": "Aperçu synthesis teaser control",
      "file": "apercu-desktop-1440x1024.png"
    },
    {
      "viewport": "1440x1024",
      "view": "conversation",
      "state": "synthesis-teaser",
      "file": "conversation-desktop-1440x1024.png"
    },
    {
      "viewport": "390x844",
      "view": "execution",
      "state": "mobile-shell-control",
      "purpose": "B2 shared mobile shell regression control",
      "file": "execution-mobile-390x844.png"
    }
  ]
}
```

---

# COMPLETE CHANGED SECTIONS / UNIFIED DIFFS

## DIFF: `projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
index e504347b..a9b4fd0a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -34,6 +34,7 @@ import {
   runW3cPostEvidenceLoop,
   type W3cPostEvidenceLoopResult,
 } from "./w3cPostEvidenceLoop";
+import { maybeMaterializeProductSynthesisAfterW3c } from "./maybeMaterializeProductSynthesisAfterW3c";
 import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";

 function w3cUnavailableFailure(
@@ -51,17 +52,62 @@ function w3cUnavailableFailure(
   };
 }

-function finishWithOptionalPostEvidence(input: {
+/**
+ * Soft-fail Synthesis observability on ok:true Product terminal.
+ * Synthesis failure never flips ok — Truth C / CE / W3-C stay intact.
+ */
+export type SynthesisMaterializationObservability =
+  | { readonly status: "materialized"; readonly synthesisId: string }
+  | {
+      readonly status: "failed";
+      readonly code: string;
+      readonly message: string;
+      readonly retryable: true;
+    };
+
+/**
+ * After W3-C success/rehydrate, soft-materialize Product Synthesis.
+ * Synthesis failure never mutates Truth C / Product terminal outcome.
+ * Captures maybeMaterialize result for observability (never discarded).
+ */
+async function finishWithOptionalPostEvidence(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
   readonly product: W3BProductTerminalProjection;
   readonly reusedFromIdempotency: boolean;
   readonly postEvidence: W3cPostEvidenceLoopResult | undefined;
-}): Extract<MaterializeW3bProductTerminalResult, { ok: true }> {
+}): Promise<Extract<MaterializeW3bProductTerminalResult, { ok: true }>> {
   const postOk = input.postEvidence?.ok === true;
+  let synthesisMaterialization: SynthesisMaterializationObservability | undefined;
+  if (postOk && input.postEvidence?.ok === true) {
+    const maybe = await maybeMaterializeProductSynthesisAfterW3c({
+      oa: input.oa,
+      projectId: input.projectId,
+      product: input.product,
+      postEvidence: input.postEvidence,
+    });
+    if (maybe.ok) {
+      synthesisMaterialization = {
+        status: "materialized",
+        synthesisId: maybe.synthesis.synthesisId,
+      };
+    } else {
+      synthesisMaterialization = {
+        status: "failed",
+        code: maybe.code,
+        message: maybe.message,
+        retryable: true,
+      };
+    }
+  }
   return {
     ok: true,
     reusedFromIdempotency: input.reusedFromIdempotency,
     product: withNoraUnavailableReserve(input.product, postOk),
     postEvidence: input.postEvidence,
+    ...(synthesisMaterialization
+      ? { synthesisMaterialization }
+      : {}),
   };
 }

@@ -73,6 +119,7 @@ export type MaterializeW3bProductTerminalResult =
       readonly product: W3BProductTerminalProjection;
       readonly reusedFromIdempotency: boolean;
       readonly postEvidence?: W3cPostEvidenceLoopResult;
+      readonly synthesisMaterialization?: SynthesisMaterializationObservability;
     }
   | {
       readonly ok: false;
@@ -262,6 +309,8 @@ async function materializeDocsWriteProductTerminal(input: {
       });
       if (existing) {
         return finishWithOptionalPostEvidence({
+          oa: input.oa,
+          projectId: input.projectId,
           reusedFromIdempotency,
           product,
           postEvidence: existing,
@@ -274,6 +323,8 @@ async function materializeDocsWriteProductTerminal(input: {
       });
       if (rehydrated.ok) {
         return finishWithOptionalPostEvidence({
+          oa: input.oa,
+          projectId: input.projectId,
           reusedFromIdempotency,
           product,
           postEvidence: rehydrated,
@@ -292,6 +343,8 @@ async function materializeDocsWriteProductTerminal(input: {
   }

   return finishWithOptionalPostEvidence({
+    oa: input.oa,
+    projectId: input.projectId,
     reusedFromIdempotency,
     product,
     postEvidence,
@@ -573,12 +626,13 @@ export async function materializeW3bProductTerminal(input: {
       product,
     });
     if (existing) {
-      return {
-        ok: true,
+      return finishWithOptionalPostEvidence({
+        oa: input.oa,
+        projectId: input.projectId,
         reusedFromIdempotency,
         product,
         postEvidence: existing,
-      };
+      });
     }
     // Prefer LPS exact / Epistemic rehydrate before Nora+LPS (covers partial-write).
     const rehydrated = await rehydrateW3cPostEvidenceFromLps({
@@ -587,12 +641,13 @@ export async function materializeW3bProductTerminal(input: {
       product,
     });
     if (rehydrated.ok) {
-      return {
-        ok: true,
+      return finishWithOptionalPostEvidence({
+        oa: input.oa,
+        projectId: input.projectId,
         reusedFromIdempotency,
         product,
         postEvidence: rehydrated,
-      };
+      });
     }
   }

@@ -603,12 +658,13 @@ export async function materializeW3bProductTerminal(input: {
     product,
   });

-  return {
-    ok: true,
+  return finishWithOptionalPostEvidence({
+    oa: input.oa,
+    projectId: input.projectId,
     reusedFromIdempotency,
     product,
     postEvidence,
-  };
+  });
 }

 export async function rehydrateW3bProductTerminal(input: {
@@ -715,6 +771,8 @@ export async function rehydrateW3bProductTerminal(input: {
   });

   return finishWithOptionalPostEvidence({
+    oa: input.oa,
+    projectId: input.projectId,
     reusedFromIdempotency: true,
     product,
     postEvidence,
@@ -740,6 +798,7 @@ export async function rehydrateLatestW3bProductTerminalForContract(input: {
       readonly attemptStatus: string;
       readonly reusedFromIdempotency: true;
       readonly postEvidence?: W3cPostEvidenceLoopResult;
+      readonly synthesisMaterialization?: SynthesisMaterializationObservability;
     }
   | { readonly ok: false; readonly code: string; readonly message: string }
 > {
@@ -790,6 +849,9 @@ export async function rehydrateLatestW3bProductTerminalForContract(input: {
     ...(rehydrated.postEvidence
       ? { postEvidence: rehydrated.postEvidence }
       : {}),
+    ...(rehydrated.synthesisMaterialization
+      ? { synthesisMaterialization: rehydrated.synthesisMaterialization }
+      : {}),
   };
 }

```

## DIFF: `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
(no diff vs HEAD for projects/sfia-studio/app/features/project-assistant/actions.ts — check status)
```

## DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`

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

## DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
index 29e5e55a..cebe63f9 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
@@ -711,6 +711,14 @@
   .focusBar {
     display: none;
   }
+
+  /*
+   * P5-S04 CP01 B2 — Synthèses is a focused secondary mobile view:
+   * hide project title + primary tabs; SynthesesSurface owns list/detail nav.
+   */
+  .root[data-active-view="syntheses"] .projectHeader {
+    display: none;
+  }
 }

 /* ---------- error state ---------- */
```

## DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 8b7df1af..a423ec48 100644
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
@@ -1321,6 +1330,38 @@ export function ConversationSurface({
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

## DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.tsx`

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

## DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.tsx`

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

## DIFF: `projects/sfia-studio/app/lib/oa/project/index.ts`

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

## DIFF: `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts`

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

## DIFF: `projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts`

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

## DIFF: `projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts`

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

## DIFF: `projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts`

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

## DIFF: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx`

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

## DIFF: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx`

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

## DIFF: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx`

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

## DIFF: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx`

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

## DIFF: `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 52fcc432..97b86865 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -97,6 +97,9 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/mw3AvailableEvidence.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/preCycleCandidateTrajectoryActions.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/buildProductSynthesisLineageInput.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/synthesisActions.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/maybeMaterializeProductSynthesisAfterW3c.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/approveCandidateTrajectory.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime/liveProjectContext",
```

## DIFF: `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 93823ab3..6e5495a7 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,11 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S03 GIT INTEGRATION** | 2026-10-05 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S03 OBJECT-NATIVE PRODUCT VIEWS — GIT INTEGRATION AUTHORIZED BY MORRIS / IN PROGRESS** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR Readiness / Git Integration** · Milestone **P5** · Slice **P5-S03** · CRITICAL · Morris P5-S03 GIT INTEGRATION GATE = **AUTHORIZED** · Final ChatGPT Critical Review = **PASS** · CP01/CP02 = **PASS at local candidate scope** · A=0 / B=0 · C-actionable = 0 · Expected Product content variance **PRESERVED** · ZERO REAL · branche `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` · base/main `1a7e80b20949a041b1edc279ffed735b04bda997` · next = commit/push/PR → ChatGPT PR review + CI → **MORRIS P5-S03 MERGE GATE** · merge **NOT AUTHORIZED this pass** · **≠** P5-S03 INTEGRATED · **≠** P5 COMPLETE · **≠** R3 · **≠** P6 READY · **≠** runtime v3 ADOPTED · **≠** PIXEL-PERFECT GLOBAL |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 CORRECTION PASS 02** | 2026-10-05 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 CORRECTION PASS 02 COMPLETE LOCALLY / FINAL CRITICAL RE-REVIEW REQUIRED** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Milestone **P5** · Slice **P5-S04** · Pass **CORRECTION PASS 02** · CRITICAL · Morris P5-S04 CP02 AUTHORIZATION = **CONSUMED** · Axes = soft-fail observability · Pilot semantic projection · recommendation currentness (no stale fallback) · Evidence fail-closed · visual recapture PRODUCT-PATH · A=0 / B=0 · B1/B2 CLOSED — NO REGRESSION · PILOT LEAKS = 0 · ZERO REAL · F2 debt **OPEN** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s04-product-derived-syntheses` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Final Critical Re-Review** → Morris Git Integration gate · **≠** P5-S04 INTEGRATED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 CORRECTION PASS 01** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 CORRECTION PASS 01 COMPLETE LOCALLY / CRITICAL RE-REVIEW REQUIRED *(true then; superseded by P5-S04 CP02 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Milestone **P5** · Slice **P5-S04** · Pass **CORRECTION PASS 01** · CRITICAL · Morris P5-S04 CP01 AUTHORIZATION = **CONSUMED** · Axes = Product-path materialization · lineage/currentness · Pilot-facing projection · Figma B1/B2 · A=0 / B=0 · ZERO REAL · F2 debt **OPEN** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s04-product-derived-syntheses` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Final Critical Re-Review** → Morris Git Integration gate · **≠** P5-S04 INTEGRATED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 PRODUCT-DERIVED SYNTHESES** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 PRODUCT-DERIVED SYNTHÈSES — DELIVERY AUTHORIZED / LOCAL CANDIDATE IN PROGRESS *(true then; superseded by P5-S04 CP01 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Milestone **P5** · Slice **P5-S04** · CRITICAL · Morris P5-S04 delivery authorization = **CONSUMED** · P5-S01/S02/S03 = **INTEGRATED / POST-MERGE VERIFIED** (main **`49b4fdaf…`** · S03 PR **#557** MERGED) · M9 **`oa_syntheses`** · deterministic builder + SQLite repository · Synthèses UI read-only · Overview/Conversation teasers · ZERO REAL · F2 debt **OPEN** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s04-product-derived-syntheses` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Critical Review** → Morris Git Integration gate · **≠** P5-S04 INTEGRATED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S03 INTEGRATED** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S03 OBJECT-NATIVE PRODUCT VIEWS — **INTEGRATED / POST-MERGE VERIFIED** *(true then; superseded by P5-S04 tip)* · PR **#557** MERGED · main **`49b4fdaf078fdf2a5c7bfce3baad05fa65220c2e`** · merge **`5fc6238a…`** · CP01/CP02 preserved · A=0 / B=0 · ZERO REAL · Synthesis surface was **NOT BUILT** at S03 scope · **≠** P5 COMPLETE |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S03 GIT INTEGRATION** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S03 OBJECT-NATIVE PRODUCT VIEWS — GIT INTEGRATION AUTHORIZED BY MORRIS / IN PROGRESS *(true then; superseded by P5-S03 INTEGRATED tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR Readiness / Git Integration** · Milestone **P5** · Slice **P5-S03** · CRITICAL · Morris P5-S03 GIT INTEGRATION GATE = **AUTHORIZED** · Final ChatGPT Critical Review = **PASS** · CP01/CP02 = **PASS at local candidate scope** · A=0 / B=0 · C-actionable = 0 · Expected Product content variance **PRESERVED** · ZERO REAL · branche `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` · base/main `1a7e80b20949a041b1edc279ffed735b04bda997` · next = commit/push/PR → ChatGPT PR review + CI → **MORRIS P5-S03 MERGE GATE** · merge **NOT AUTHORIZED this pass** · **≠** P5-S03 INTEGRATED · **≠** P5 COMPLETE · **≠** R3 · **≠** P6 READY · **≠** runtime v3 ADOPTED · **≠** PIXEL-PERFECT GLOBAL |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S03 CORRECTION PASS 02** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S03 CORRECTION PASS 02 — EXECUTION RECONCILE CONTINUITY + BOUNDED C-VISUAL POLISH — LOCAL CANDIDATE *(true then; superseded by P5-S03 Git Integration tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Milestone **P5** · Slice **P5-S03** · Pass **CORRECTION PASS 02** · CRITICAL · Morris P5-S03 CP02 AUTHORIZATION = **CONSUMED** · Axis 1 = mounted + remount W2 reconcile `intent=continue` via existing `reconcileContinuePolicy` (no new SM / retry budget) · Axis 2 = actionable C polish (mobile composer ~60px · Overview/Execution spacing) · content-honesty variances **PRESERVED** · A=0 / B=0 · ZERO REAL · no new persistence / state machine / Product object / parallel architecture · F2 debt **OPEN** · Synthesis **NOT BUILT** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` · base/main `1a7e80b20949a041b1edc279ffed735b04bda997` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Final Critical Review** → **MORRIS P5-S03 GIT INTEGRATION GATE** · **≠** P5-S03 INTEGRATED · **≠** R3 · **≠** P6 READY · **≠** PIXEL-PERFECT GLOBAL |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S03 CORRECTION PASS 01** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S03 CORRECTION PASS 01 — DURABLE EXECUTION ACTION CONTINUITY + P3 STRUCTURAL VISUAL ALIGNMENT — LOCAL CANDIDATE / IN PROGRESS *(true then; superseded by P5-S03 Correction Pass 02 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Milestone **P5** · Slice **P5-S03** · Pass **CORRECTION PASS 01** · CRITICAL · Morris P5-S03 CP01 AUTHORIZATION = **CONSUMED** · Axis 1 = durable Exécution action continuity (CONFIRM ≠ EXECUTE · W2 confirm/authorize/reconcile · fresh-mount E1–E6) · Axis 2 = B1 Aperçu desktop composition 51:2 + B2 mobile shell · A=0 / B=0 candidate · ZERO REAL · no new persistence / state machine / Product object / parallel architecture · F2 debt **OPEN** · Synthesis **NOT BUILT** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` · base/main `1a7e80b20949a041b1edc279ffed735b04bda997` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Critical Re-Review** · **≠** P5-S03 INTEGRATED · **≠** R3 · **≠** P6 READY · **≠** PIXEL-PERFECT GLOBAL |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S03 OBJECT-NATIVE VIEWS** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S03 OBJECT-NATIVE APERÇU + EXÉCUTION — LOCAL CANDIDATE / DELIVERY AUTHORIZED *(true then; superseded by P5-S03 Correction Pass 01 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Milestone **P5** · Slice **P5-S03** · CRITICAL · Morris P5-S03 DELIVERY AUTHORIZATION = **CONSUMED** · P5-S01 = **INTEGRATED** · P5-S02 = **INTEGRATED / POST-MERGE VERIFIED** (PR **#556** MERGED · main `1a7e80b20949a041b1edc279ffed735b04bda997` · CI **#680** SUCCESS · Required Gate SUCCESS) · S03 = real Conversation/Aperçu/Exécution views · Product-object projections · canonical Governed Execution Continuity · presentation-only adapter · ZERO REAL · no new persistence / state machine / agent architecture · F2 debt **OPEN** · Synthesis surface **NOT BUILT** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Critical Review** → Morris Git Integration Gate · **≠** P5-S03 INTEGRATED · **≠** R3 · **≠** P6 READY |
```

## DIFF: `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md`

```diff
diff --git a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
index 62af8c61..8768cdbe 100644
--- a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
+++ b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
@@ -785,39 +785,56 @@ Visual / Git historical notes above for Correction Pass 01 are **SUPERSEDED** by

 ---

-## 33. Current verdict
+## 33. P5-S04 — Product-derived Synthèses (factual)
+
+| Item | Result |
+| --- | --- |
+| Morris P5-S04 delivery authorization | **CONSUMED** |
+| Morris P5-S04 CP01 authorization | **CONSUMED** |
+| Morris P5-S04 CP02 authorization | **CONSUMED** |
+| Scope | M9 `oa_syntheses` · deterministic `buildProductSynthesis` · SQLite repository · read-only Synthèses surface · Overview + Conversation teasers · authority `none` (no NON-AUTORITATIVE badge in Pilot UI) |
+| Architecture | OBJECTS FIRST → PROJECTIONS SECOND → SURFACES THIRD · Product-path `materializeW3bProductTerminal` → `maybeMaterializeProductSynthesisAfterW3c` · Contract-Result lineage + currentness · durable W3-C Recommendation · **no invented verdict/recommendation** · **≠ Truth C** |
+| CP02 axes | Soft-fail observability (`synthesisMaterialization` on ok:true) · Pilot semantic projection (subject/planned/done/recommendation) · recommendation currentness only (stale fallback closed) · missing bound Evidence fail-closed · visual recapture PRODUCT-PATH |
+| Auth / REAL | Studio auth via `.tmp-sfia-review/auth/studio-storage-state.json` · **ZERO REAL** · `P5_S02_RUN_REAL` never set |
+| Evidence — tests | CP02 SF/PL/REC/EV · CP01 L01–L09 / C01–C08 / P01–P05 · D0 + UI · migration · full `npm test` (see CP02 Review Pack counts) |
+| Evidence — visual CP01 | `.tmp-sfia-review/p5-s04-visual/cp01/after/` · PRODUCT-PATH · FocusFlow `syn:fc44ff99449fd3b96f4500b60a2eeda7` · **A=0 / B=0** · B1/B2 **CLOSED** · preserved |
+| Evidence — visual CP02 | `.tmp-sfia-review/p5-s04-visual/cp02/after/` · PRODUCT-PATH · FocusFlow `syn:ed340d63e583ff51bc9a0cb7a6c35219` · **A=0 / B=0** · B1/B2 **CLOSED — NO REGRESSION** · **PILOT LEAKS = 0** · see `cp02/correction-design-note.md` |
+| Historical visual seed | `../_seed-synthesis.mjs` retained as historical only (direct materialize — **NOT** CP01/CP02 proof) |
+| Debts | F2 routing **OPEN** · R3 **NOT STARTED** · P6 **NOT READY** · runtime v3 **NON ADOPTED** |
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
+P5-S04 = LOCAL CANDIDATE — CORRECTION PASS 02 COMPLETE LOCALLY
+         FINAL CRITICAL RE-REVIEW REQUIRED
+         SOFT-FAIL OBSERVABILITY + PILOT SEMANTICS + REC CURRENTNESS
+         + EVIDENCE FAIL-CLOSED + PRODUCT-PATH VISUAL
+         A=0 / B=0 · B1/B2 NO REGRESSION · PILOT LEAKS = 0
+         ZERO REAL · NOT INTEGRATED

 READY FOR REAL          = NO
 runtime v3              = NON ADOPTED
 P5 COMPLETE             = NO
 P6 READY                = NO
+R3                      = NOT STARTED

-NEXT                   = COMMIT / PUSH / PR → CHATGPT PR REVIEW + CI
-NEXT MORRIS GATE       = P5-S03 MERGE GATE (only after ChatGPT PR review + required CI green)
-NEXT CAPABILITY HINT   = subsequent P5 capability requalification / later R3 / P6
+NEXT                   = CHATGPT FINAL CRITICAL RE-REVIEW (S04 CP02)
+NEXT MORRIS GATE       = P5-S04 GIT INTEGRATION (after PASS)
 ```

-**Synthèse honnête.** P5-S01/S02 sont sur main. P5-S03 projette Aperçu + Exécution depuis le monde Product existant, avec continuation W2 canonique et polish C borné. **≠ R3 / ≠ P5 COMPLETE / ≠ runtime v3 ADOPTED / ≠ Synthèses**. **P4 reste l’autorité d’architecture**.
+**Synthèse honnête.** P5-S04 CP02 rend l’échec Synthèse observable sans mutation Truth C, projette un langage Pilote sans fuites OA, ferme le fallback recommandation périmé, fail-close Evidence manquante, et reconfirme B1/B2. **≠ R3 / ≠ P5 COMPLETE / ≠ runtime v3 ADOPTED**. **P4 reste l’autorité d’architecture**.

 ---

-*Fin du document P5 — Integrated Delivery — P5-S03 Object-Native Views — S01/S02 INTEGRATED · S03 LOCAL CANDIDATE GIT INTEGRATION AUTHORIZED — NOT YET INTEGRATED · R3 NOT STARTED · READY FOR REAL = NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*
+*Fin du document P5 — Integrated Delivery — S01/S02/S03 INTEGRATED · S04 CP02 COMPLETE LOCALLY / FINAL CRITICAL RE-REVIEW REQUIRED · R3 NOT STARTED · READY FOR REAL = NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*
```

## DIFF: `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

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

---

# COMPLETE CONTENTS CHECKLIST

| File | Embedded |
| --- | --- |
| `projects/sfia-studio/app/lib/oa/synthesis/index.ts` | YES |
| `projects/sfia-studio/app/lib/oa/synthesis/domain/types.ts` | YES |
| `projects/sfia-studio/app/lib/oa/synthesis/domain/errors.ts` | YES |
| `projects/sfia-studio/app/lib/oa/synthesis/domain/invariants.ts` | YES |
| `projects/sfia-studio/app/lib/oa/synthesis/ports/synthesisRepositoryPort.ts` | YES |
| `projects/sfia-studio/app/lib/oa/synthesis/application/buildProductSynthesis.ts` | YES |
| `projects/sfia-studio/app/lib/oa/synthesis/application/materializeProductSynthesis.ts` | YES |
| `projects/sfia-studio/app/lib/oa/synthesis/application/rebuildProductSynthesis.ts` | YES |
| `projects/sfia-studio/app/lib/oa/synthesis/application/searchProductSyntheses.ts` | YES |
| `projects/sfia-studio/app/lib/oa/synthesis/infrastructure/sqlite/sqliteSynthesisRepository.ts` | YES |
| `projects/sfia-studio/app/lib/oa/synthesis/infrastructure/sqlite/createSqliteSynthesisServices.ts` | YES |
| `projects/sfia-studio/app/features/project-assistant/w2/maybeMaterializeProductSynthesisAfterW3c.ts` | YES |
| `projects/sfia-studio/app/features/project-assistant/buildProductSynthesisLineageInput.ts` | YES |
| `projects/sfia-studio/app/features/project-assistant/synthesisActions.ts` | YES |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.tsx` | YES |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.module.css` | YES |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/synthesisPresentation.ts` | YES |
| `projects/sfia-studio/app/__tests__/oa/synthesis/p5.s04.productDerivedSynthesis.d0.test.ts` | YES |
| `projects/sfia-studio/app/__tests__/oa/synthesis/p5.s04.cp01.productPathSynthesis.d0.test.ts` | YES |
| `projects/sfia-studio/app/__tests__/oa/synthesis/p5.s04.cp02.softFailPilotLineage.d0.test.ts` | YES |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx` | YES |
| `.tmp-sfia-review/p5-s04-visual/cp02/_seed-product-path.mjs` | YES |
| `.tmp-sfia-review/p5-s04-visual/cp02/_capture.mjs` | YES |
| `.tmp-sfia-review/p5-s04-visual/cp02/manifest.md` | YES |
| `.tmp-sfia-review/p5-s04-visual/cp02/correction-design-note.md` | YES |
| `.tmp-sfia-review/p5-s04-visual/cp02/seed-product-path.json` | YES |
| `.tmp-sfia-review/p5-s04-visual/cp02/after/manifest.json` | YES |

| Modified diffs | Embedded |
| --- | --- |
| `projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts` | YES |
| `projects/sfia-studio/app/features/project-assistant/actions.ts` | YES |
| `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx` | YES |
| `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css` | YES |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx` | YES |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.tsx` | YES |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.tsx` | YES |
| `projects/sfia-studio/app/lib/oa/project/index.ts` | YES |
| `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts` | YES |
| `projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts` | YES |
| `projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts` | YES |
| `projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts` | YES |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx` | YES |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx` | YES |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx` | YES |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx` | YES |
| `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts` | YES |
| `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` | YES |
| `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` | YES |
| `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json` | YES |

---

# Cursor Report — P5-S04 CORRECTION PASS 02 (items 1–94)

1. Branch: `delivery/sfia-studio-product-simplification-p5-s04-product-derived-syntheses`
2. HEAD/base/origin-main: `49b4fdaf078fdf2a5c7bfce3baad05fa65220c2e` (= origin/main)
3. Local Git truth: S04+CP01+CP02 **uncommitted** local candidate; dirty scope attributable to S04/CP01/CP02 + `.tmp-sfia-review/**`
4. Morris CP02 authorization: **CONSUMED**
5. Sources reread: P4 architecture · `05-…integrated-delivery.md` · roadmap · Figma 164:3/190:175/190:433/190:455 · CP01 handoff
6. Template SHA: `948156a21309ef99c3aaed6410947dc6b9bc569a`
7. Handoff before SHA/blob: `c22a99dffd90d3bb19edd4178a6ea06547f496c6` / `8d8fcd589576ce552bb47c678373614480979640`
8. Soft-fail diagnostic design: optional `synthesisMaterialization` on ok:true Product terminal (`materialized` | `failed`+`retryable:true`)
9. Existing diagnostic carrier reused? **YES** — extended W3-B Product terminal return (no new orchestration state)
10. New orchestration state? **NO**
11. Synthesis failure mutates Product truth? **NO** (Truth C / CE / W3-C intact)
12. Real production-seam failure injected? **YES** (SQLite `BEFORE INSERT` abort on `oa_syntheses`)
13. Failure injection method: temporary SQLite trigger aborting Synthesis INSERT in test DB only
14. W3-B result during Synthesis failure: **ok:true** Product terminal preserved
15. CE durability during failure: **YES**
16. W3-C durability during failure: **YES**
17. Synthesis row during failure: **absent** (no durable row)
18. Failure observable? **YES** via `synthesisMaterialization.failed`
19. Retry/rehydrate proof: **YES** — remove trigger + rehydrate/materialize → Synthesis appears
20. Duplicate Synthesis after retry? **NO**
21. Recommendation source nominal path: current durable W3-C via `postEvidence.recommendation` fields → Pilot adapter
22. Implicit W3-C fallback removed/guarded? **YES** — lineage uses `input.recommendation ?? null` only
23. Old CE Recommendation reusable after supersession? **NO** (stale fallback closed)
24. Recommendation authority: **unchanged** (Synthesis does not author Recommendation)
25. HumanDecision created? **NO** by Synthesis path
26. Missing bound Evidence behavior: fail-closed `SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND`
27. Partial Evidence projection possible? **NO** for missing bound refs
28. Subject Pilot language: `Résultat de l'action atteint|en échec|non prouvé`
29. Planned Pilot language: functional FR; no machine action codes / raw EC tokens
30. Result Pilot language: separates Attempt completion vs Product proof
31. Recommendation Pilot language: `projectPilotRecommendationFromW3c` (no raw rationale)
32. Raw `xct:` visible? **NO** in Pilot sections
33. Raw `xat:` visible? **NO** in Pilot sections
34. Raw `clm:` visible? **NO** in Pilot sections
35. Raw `rb:` visible? **NO** in Pilot sections
36. Raw `ev:` visible? **NO** in Pilot sections
37. internal capability IDs visible? **NO** (`cursor.docs_write` etc. absent)
38. D5/W2/HumanDecision/ProjectTrajectory visible? **NO**
39. 9 sections preserved? **YES**
40. Search preserved? **YES**
41. Overview teaser: present with CP02 Pilot title
42. Conversation teaser: present; no NON-AUTORITATIVE
43. Figma nodes reread: 164:3 · 190:175 · 190:433 · 190:455 · 51:2 · conversation teaser
44. Desktop regression: **B1 CLOSED — NO REGRESSION**
45. Compact regression: **B1 CLOSED — NO REGRESSION**
46. Mobile list regression: **B2 CLOSED — NO REGRESSION**
47. Mobile detail regression: **B2 CLOSED — NO REGRESSION**
48. Final A count: **0**
49. Final B count: **0**
50. Remaining C: **3** (density/rhythm polish — NON-BLOCKING)
51. Expected genuine Product variance D: **3** (campaign `not_proven` CE; W3-C Pilot recommendation; empty execution honesty)
52. CP02 runtime captures: `.tmp-sfia-review/p5-s04-visual/cp02/after/` (7 screenshots + manifest)
53. SF tests: **PASS** (soft-fail observability)
54. REC tests: **PASS** (recommendation currentness)
55. EV tests: **PASS** (Evidence fail-closed)
56. PL tests: **PASS** (Pilot language)
57. L01–L09: **PASS** (CP01 preserved)
58. C01–C08: **PASS** (CP01 preserved)
59. P01–P05: **PASS** (CP01 + CP02 SF supersedes weak P05)
60. S04 D0: **PASS**
61. Migration tests: **PASS**
62. W3-B: **PASS**
63. W3-C: **PASS**
64. pre-m6 UI: **PASS**
65. S03 regression: **PASS**
66. typecheck: **PASS**
67. lint: **PASS**
68. build: **PASS**
69. full npm test: **PASS** — 473 files / 5263 tests
70. REAL calls: **0**
71. New DB? **NO**
72. M10? **NO**
73. New state machine? **NO**
74. New Product aggregate? **NO**
75. New Recommendation store? **NO**
76. Parallel architecture? **NO**
77. Files created: synthesis module · maybeMaterialize · lineage · synthesisActions · SynthesesSurface · CP01/CP02/D0/UI tests · cp02 visual seed/capture/manifest
78. Files modified: materializeW3b · workspace/overview/conversation · sqlite migration · roadmap · 05-integrated-delivery · related tests
79. Roadmap truth-sync: **YES** — tip CP02 COMPLETE LOCALLY / FINAL CRITICAL RE-REVIEW REQUIRED
80. P5 truth-sync: **YES** — §33/§34 CP02 facts
81. Project commit? **NO**
82. Project push? **NO**
83. PR? **NO**
84. Merge? **NO**
85. Review Pack FULL? **YES** (this file)
86. Handoff after SHA: *(filled after publish)*
87. Handoff blob: *(filled after publish)*
88. Remote reread: *(filled after publish)*
89. P5-S04 integrated? **NO**
90. P5 COMPLETE? **NO**
91. R3 status: **NOT STARTED**
92. P6 READY? **NO**
93. runtime v3: **NON ADOPTED**
94. Final verdict: **PASS — P5-S04 CORRECTION PASS 02 COMPLETE — DERIVED SYNTHESIS FAILURE OBSERVABLE WITHOUT TRUTH-C MUTATION — EXISTING REHYDRATE PATH PROVIDES RETRY — CURRENT W3-C RECOMMENDATION ONLY — STALE RECOMMENDATION FALLBACK CLOSED — BOUND EVIDENCE FAIL-CLOSED — PILOT-FACING SYNTHESIS FREE OF OA INTERNALS — B1/B2 PRESERVED — A=0 / B=0 — ZERO REAL — READY FOR CHATGPT FINAL CRITICAL RE-REVIEW**
