# 01 — System Runtime Overview

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

## Layers (factual)

```
Browser / Product UI (pre-m6-product-ui, studio routes)
        ↓ server actions
Project Assistant (features/project-assistant)
  orchestrateTurn / actions / F2 orchestrateF2 / intentAnalysis
        ↓
Nora Cognitive Runtime (lib/nora-cognitive-runtime)
  ProductSqliteSession · Cycle Journal · MW5 critical challenge · CWP hooks
        ↓
OA domain aggregates (lib/oa/{project,cycle,decision,execution-contract,
  execution-attempt,evidence-review,doctrine,git-ports})
        ↓
Product SQLite (oa-product.sqlite) + Nora Session SQLite (nora-session.sqlite)
        ↓ (REAL only, gated)
Cursor / Git / GitHub adapters (execution-run, managed repos)
```

## Composition entry

- `lib/vertical-slice-runtime/singleton.ts` → `getRuntimeApplicationService`
- `lib/vertical-slice-runtime/service.ts` → OA service wiring + product DB path
- Product DB path: `SFIA_STUDIO_PRODUCT_DB_PATH` or default under `.sfia-exec/product/`
- Nora Session path: `SFIA_STUDIO_NORA_SESSION_DB_PATH` or default sibling `nora-session.sqlite` resolved from `process.cwd()` (`sessionPaths.ts`)

## Primary product surfaces

| Surface | Path |
|---|---|
| Studio projects | `app/studio/projects/[id]/page.tsx` |
| Product conversation hook | `features/pre-m6-product-ui/hooks/useProductConversation.ts` |
| Lifecycle UI | `features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx` |
| Project Assistant send | `features/project-assistant/actions.ts` → `projectAssistantSendAction` |

## Cognitive vs Truth C

| Concern | Store | Authority |
|---|---|---|
| Transcript / Journal / Memory B session items | `nora-session.sqlite` | Working context ≠ Truth C |
| Project / LPS / Cycle / HD / EC / Attempt / Evidence / RB | `oa-product.sqlite` | Truth C / durable product |
| F2 Proposal map | process-local `proposalStore.ts` | Not sole restart authority |

## Fake vs REAL boundary (overview)

- Conversation provider: `OPS1_CONVERSATION_PROVIDER=fake|openai` (`lib/platform/ai`)
- Cursor REAL: `SFIA_STUDIO_CURSOR_REAL=1` mutually exclusive with deterministic Cursor E2E boundary
- Same product state machine is intended across Fake/Real at the server decision boundary; linguistic/classifier non-determinism remains on the REAL provider side

## Runtime v3

**NON ADOPTED.** Doctrine v3 framing is destination guidance only.

