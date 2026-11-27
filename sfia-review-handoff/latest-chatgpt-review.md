# SFIA REVIEW PACK — FULL
# ML1/ML2 CONSOLIDATION — FOLLOW-UP P0/P1

- **Generated (UTC):** 2026-11-27T06:56:21Z
- **Prior handoff:** c4f7c52b · blob c294ab60 (consolidation)
- **Analyses capitalized:** [ML2 completeness cartography](7e521ef9-2136-43d7-bd7a-086f83648d3d) · [LIVE incident analysis](b0bb8f2c-65d0-4e2d-b9e9-2876bf35df03)
- **HEAD:** `479dd54d1e74f1180d92642295243e4a333981a2`
- **Tree web:** `552c82f38b1def64aaff7cd871d10bd8024ce80c`
- **Verdict:** MACRO-LOT 2 — IMPLEMENTATION COMPLETE — ENGINEERING QUALIFICATION COMPLETE — FUNCTIONAL RECETTE QUALIFICATION PENDING — MORRIS EXIT ACCEPTANCE PROPOSED
- **No LIVE** · flags OFF · RECETTE protected

## Commits since consolidation
```text
479dd54d fix(ml2): close journal PG hybrid, Frontier measured tokens, and ML2 FinOps gaps
```

## Diffstat
```text
 .../completeness-cartography-20261127.md           |  5 +-
 .../construction/delivery-history.md               | 10 ++++
 .../src/domains/conversation/bounded-judgment.ts   | 44 +++++++++++++++-
 .../conversation/provider-emission-frontier.ts     | 39 +++++++++++++-
 .../domains/documents/document-vision-punctual.ts  | 35 +++++++++++--
 .../domains/knowledge/derived-embedding-service.ts | 28 +++++++++-
 .../web/src/domains/knowledge/journal.ts           | 29 +++++++----
 .../web/tests/unit/ml2-journal-hybrid-pg.test.ts   | 60 ++++++++++++++++++++++
 8 files changed, 232 insertions(+), 18 deletions(-)
```

## Fixes from subagent findings

| Id | Finding | Fix |
|---|---|---|
| JOURNAL-PG-01 | Journal merge without semanticHits → PG no-op + wasted embed | `searchJournalSubjects` → `hybridSearchProjectKnowledge` + stub queryVector |
| FRONTIER-MEAS-01 | Commit never passed measured; emb reserved maxOutputTokensPerRequest | measured pass-through; output reserve **Responses-only** |
| FINOPS-ML2-01 | No ledger for query/judgment/vision | `embeddings.derived_query` · `recordBoundedJudgmentFinops` · `vision.punctual` |

## Tests
Unit: ml2-journal-hybrid-pg + lifecycle + judgment + frontier — **39 PASS** (subset run).

## Unchanged
- RECETTE backlog F (pertinence / restitution COMPLETE)
- No new LIVE campaign
- Macro-lot 3 NOT STARTED
- Product cognitive 2M/1M/120 intact; campaign caps do not leak without SFIA_G_LIVE_API

## Instruction ChatGPT
Verify HEAD `479dd54d` vs remote blob; confirm three P0/P1 fixes are product code not scripts-only; keep EXIT ACCEPTANCE PROPOSED with RECETTE pending.

## Verdict
Same as consolidation: **IMPLEMENTATION COMPLETE — ENGINEERING QUALIFICATION COMPLETE — FUNCTIONAL RECETTE QUALIFICATION PENDING — MORRIS EXIT ACCEPTANCE PROPOSED**
