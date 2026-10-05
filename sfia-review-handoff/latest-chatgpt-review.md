# P5-S04 — PRODUCT-DERIVED SYNTHÈSES — LOCAL CANDIDATE — FULL REVIEW PACK

## 1. Timestamp
2026-10-05 19:35:31 +0200 Europe/Paris

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
`sfia/review-handoff` @ `7c8fd2e45cab48c5428a3b865c4f638c860be0b2` · blob `97c75bd19b7c64367d137171f6025b36b9480d60`

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
`docs(review-handoff): publish P5 S04 delivery review`

## 31–36. Cursor Report anchor + verdict
See sections **51–64** below (numbered Cursor Report).

## 37. Created / key file contents
### projects/sfia-studio/app/lib/oa/synthesis/index.ts

```
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

```
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

### projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.tsx

```
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

### projects/sfia-studio/app/__tests__/oa/synthesis/p5.s04.productDerivedSynthesis.d0.test.ts

```
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


… [truncated in pack — see workspace file] …

```

### .tmp-sfia-review/p5-s04-visual/correction-design-note.md

```
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

```
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
