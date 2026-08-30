# SFIA STUDIO — NORA MW1 CORR-MW1-01→06 — FULL REVIEW PACK

**Timestamp (Europe/Paris):** 2026-08-30 13:53:00 CEST
**Cycle:** 8 — Delivery / implémentation (CORRECTIVE)
**Typology:** EVOL · **Profile:** CRITICAL
**Capability:** Nora Cognitive Completion · **Milestone:** MW1 — Memory B + Compaction
**Verdict target:** READY FOR CHATGPT DELIVERY RE-REVIEW · STOP BEFORE PROJECT COMMIT

---

## 1. LOCAL GIT TRUTH

| Field | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-nora-mw1-memory-b-compaction` |
| Branch | `delivery/sfia-studio-nora-mw1-memory-b-compaction` |
| HEAD | `f0bf7f0c8ef15e2e30e88283a1bd9d1447fef790` |
| origin/main | `f0bf7f0c8ef15e2e30e88283a1bd9d1447fef790` |
| Ahead/behind | 0 / 0 |
| Staged | empty |
| Unstaged | MW1 candidate + schema/migration test touch + orchestrate/F2/types + importBoundaries |
| Untracked | `lib/nora-memory-b/**`, `lib/nora-eval/mw1*`, `__tests__/nora-*`, `.tmp-nora-mw1-evidence/`, `.tmp-sfia-review/`, `node_modules` symlink |
| Project commit | **NONE** |
| Project push / PR | **NONE** |
| `git diff --check` | PASS (prior qualification) |

origin/main did **not** advance materially vs qualification base. No unrelated local mutations outside MW1 candidate scope.

---

## 2. ROUTING

- Cycle 8 · EVOL · CRITICAL
- Sources re-read: execution template, routing guide, knowledge layer, Build Doctrine, Roadmap, Product Completion C1, Nora C1→C6, MW0 readiness
- Applicable v3: 30, 32, 33, 34, 35, 37
- SFIA v2.6: PROCESS ONLY
- **No** Nora source-lock / doctrine / Roadmap mutation in this correction cycle

---

## 3. MORRIS CORRECTION GO CONSUMED

**GO MORRIS — CORR-MW1-01→06** — corrective only on existing MW1 local candidate.

Consumed constraints preserved:
- Product SQLite M9 / Memory B / MW0 eval reuse
- ADAPT-first · NO FA · NO TA currently required · TA TRIGGER CANDIDATE preserved
- No new DB / vector / Sessions / Agents SDK · No second Truth C · No parallel Nora/Memory/eval path
- REAL-B deferred · Cognitive Completion NOT PROVEN · runtime v3 NON ADOPTED
- **STOP BEFORE PROJECT COMMIT**

---

## 4. PRE-CORRECTION FINDINGS (ChatGPT Delivery Review)

MW1 DELIVERY = **PARTIAL** · NOT READY FOR PROJECT COMMIT
Architecture ADAPT-first: PASS · M9 Product SQLite: ACCEPTABLE · TA: NOT MATERIALIZED

Blocking:
1. **CORR-01** — Memory B only test-seeded; no product capture
2. **CORR-02** — R2-03/04 overqualified (`productPath=f2` on service-direct)
3. **CORR-03** — MaterializationBasis detached from real C writer
4. **CORR-04** — `oa_memory_b_materialization_audit` dead schema
5. **CORR-05** — retrieval failure collapsed to absence
6. **CORR-06** — full validation + corrected REAL required

---

## 5. CORR-MW1-01 — REAL PRODUCT MEMORY B CAPTURE

### Implementation
Deterministic structured capture (no model extraction / no CoT):

`captureMemoryBFromProductTurn` / `buildClaimsFromProductTurn`
→ user semantic slice + optional `intentClass` + optional STOP/governing premises
→ `MemoryBService.upsertSemanticClaims`
→ compaction when non-governing `> MEMORY_B_PRODUCT_MAX_NON_GOVERNING` (4) **and** material loss actually recorded

Wired on product path:
- F1: `orchestrateProjectAssistantTurn` after successful tool loop
- F2 structured: `f2Success` → `captureMemoryBAfterStructuredF2Turn`
- F2 informative→F1: passes `memoryBCapture.intentClass=informative`

### Capture path (exact)
```
Studio send
→ orchestrateAssistantSend / orchestrateProjectAssistantTurn
→ loadMemoryBResume (Product SQLite / MemoryBService)
→ provider turn
→ captureMemoryBFromProductTurn(MemoryBService, structured surfaces)
→ oa_memory_b / oa_memory_b_current
```

Claims remain **non-authoritative**; provenance `kind=turn|governing_premise`; B ≠ C.

### D0
- `__tests__/nora-memory-b/mw1.productCapture.d0.test.ts` — Fake F2 informative persists B without test upsert
- matrix CORR-01 — structured claims + lifecycle compaction via repeated product captures
**PASS**

### R2
R2-MW1-01: product turn captures B → remount → F2 resume · **PASS** (`mw1-real-corr-1788090592648`)

### Verdict
**CORR-MW1-01 CLOSED**

---

## 6. CORR-MW1-02 — TRUE R2 EVIDENCE

### Old overqualified evidence disposition
Prior campaign `mw1-real-1788088078838` classified:

| Cell | Disposition |
|---|---|
| R2-01 / R2-02 | Retain as useful **initial** REAL where F2 ran; superseded for exit |
| R2-03 / R2-04 | Reclassified **D0 / BOUNDARY** (service-direct / synthetic LPS) — **not** sufficient R2 exit |
| R2-05 | Initial mixed anti-bypass; superseded by same-path R2-05 |

Classifier: `lib/nora-eval/mw1EvidencePath.ts` — `service_direct` ⇒ `productPath=none`, `tierHint=D0` (never f2).

### Corrected R2-03 / R2-04
- **R2-03:** product-captured B → `materializeMemoryBClaimToTruthC` → `appendEvidenceOutcomeToLps` → remount → F2 resume `availability=invalidated`
- **R2-04:** product turns → lifecycle compaction (material loss) → remount → F2 consumes compacted B

Evidence metadata matches executed path (`productPath=f2` only when F2 executed).

### Verdict
**CORR-MW1-02 CLOSED**

---

## 7. CORR-MW1-03 — REAL MATERIALIZATION PATH

### Canonical Truth C writer
**`appendEvidenceOutcomeToLps`** (`features/project-assistant/f3/appendEvidenceOutcomeToLps.ts`)
Class 1 factual LPS append (evidenceIds / reviewBundleIds / analysis note) · system factual writer · **no HumanDecision invented**.

### Same-path entrypoint
`materializeMemoryBClaimToTruthC` (`lib/nora-memory-b/materializeToTruthC.ts`):

1. assert MaterializationBasis (fail-closed)
2. authorizePromotionToTruthC (audit payload)
3. `appendEvidenceOutcomeToLps`
4. confirm LPS version advanced
5. persist materialization audit

### Negative (no basis)
`basis=null` → `MEMORY_B_MATERIALIZATION_BASIS_REQUIRED` · `truthCUnchanged=true` · no LPS mutation

### Positive (valid Class 1 basis)
pilote actor · class 1 · writer succeeds · LPS version↑ · evidenceId present · B record remains Memory B

### D0
`mw1.materialization.d0.test.ts` **PASS**

### R2-05
same-path no-basis + valid-basis **PASS**

### Verdict
**CORR-MW1-03 CLOSED** · TA TRIGGER **NOT MATERIALIZED**

---

## 8. CORR-MW1-04 — AUDIT TRAIL

### Mechanism
M9 table `oa_memory_b_materialization_audit` via:
- `SqliteMemoryBRepository.insertMaterializationAudit`
- `listMaterializationAuditsForProject`

Fields: auditId, projectId, memoryBId, basisId, materializationClass, claimIds, actor, reason, targetOperation=`appendEvidenceOutcomeToLps`, outcome (`applied` / `writer_failed` / optional `rejected_missing_or_invalid_basis`), timestamp, extra (lps versions / evidence ids).
No secrets / no raw CoT.

Rejected missing-basis: default **fail-closed without** rejected audit row (explicit); positive path always leaves inspectable `outcome=applied` row.

### Evidence
D0 materialization test + R2-05 auditId in pack.

### Verdict
**CORR-MW1-04 CLOSED**

---

## 9. CORR-MW1-05 — ERROR ≠ ABSENCE

### Absence
`availability=unavailable` + `reasonCode=no_memory_b`

### Error
`availability=unavailable` + `reasonCode=retrieval_error` (or `store_unavailable`)
Disclosures: technical failure · do not invent transcript · not factual absence

`loadMemoryBResume` / `MemoryBService.buildResumeContext` no longer collapse all exceptions to null-as-absence.
Resume prompt emits `Memory B reasonCode:` + retrieval_error disclosure.

Response DTO exposes pre-turn `memoryBAvailability` / `memoryBReasonCode` (what was disclosed/consumed).

### Evidence
D0 matrix CORR-05 · R2-02 no-B case (`reasonCode=no_memory_b` on first turn)

### Verdict
**CORR-MW1-05 CLOSED**

---

## 10. CORR-MW1-06 — FINAL VALIDATION

| Class | Command | Result |
|---|---|---|
| A Targeted D0 | `npx vitest run __tests__/nora-memory-b/ __tests__/nora-eval/mw1.d0.test.ts` | **PASS** |
| B MW1 deterministic | same + materialization/productCapture | **PASS** |
| C MW0 eval regression | `npx vitest run __tests__/nora-eval/` (excl. paid when skipped; REAL ran under MW1_RUN_REAL) | **PASS** (MW0 D0 + corr suites) |
| D Schema migration | `npx vitest run …/m3|m5|m6ProductSchemaMigration.test.ts` | **PASS** |
| E Typecheck | `npm run typecheck` | **PASS** |
| F Lint | `npm run lint` | **PASS** |
| G Unit/applicable | full `npx vitest run` previously: 2214+ pass; candidate-caused importBoundaries + orchestrateTurn env **fixed**; corrected REAL re-run **PASS** |
| H Governance | `executionContractGovernance.test.ts` (+ systemGovernedStop) | **PASS** |
| I Build | `npm run build` | **PASS** |
| J e2e/product-path D0 | productCapture Fake F2 + materialization harness | **PASS** |
| K Corrected REAL | `MW1_RUN_REAL=1 npx vitest run __tests__/nora-eval/mw1.realCampaign.test.ts` | **PASS** |
| L Evidence review | pack `mw1-real-corr-1788090592648.json` | all R1/R2 PASS · R3 N/A |

Playwright e2e: **NOT RUN AS DISTINCT REQUIRED SCRIPT** for this MW1 correction (closest: product-path D0 + REAL F2).

### Verdict
**CORR-MW1-06 CLOSED**

---

## 11. REAL-FIRST EVIDENCE

### Prior campaign
- ID: `mw1-real-1788088078838`
- Classification: **INITIAL MW1 DELIVERY CAMPAIGN — PARTIAL / SUPERSEDED FOR EXIT CLAIMS**
- Estimated: **0.0027232 USD**

### Corrected campaign
- ID: **`mw1-real-corr-1788090592648`**
- Path: `projects/sfia-studio/app/.tmp-nora-mw1-evidence/mw1-real-corr-1788090592648.json`
- Model: `gpt-5.6-luna` · effort `none` · secrets: `env.local`
- Capture: deterministic structured product turn
- Compaction: deterministic

| Cell | Path | Result |
|---|---|---|
| R1 | provider smoke | PASS |
| R2-01 | F2 capture → remount → F2 resume | PASS · productPath=f2 |
| R2-02 | no-B F2 + product partial/compaction F2 | PASS · productPath=f2 |
| R2-03 | canonical C mutate → F2 invalidated | PASS · productPath=f2 |
| R2-04 | product lifecycle compaction → F2 consume | PASS · productPath=f2 |
| R2-05 | live B → materialize no-basis fail + valid apply + audit | PASS · productPath=f2 |

### R3 decision
**N/A** — capture/compaction deterministic; no claim of generative Memory B selection / summarization quality / narrative stability.

---

## 12. COST

| Item | USD (usage estimate ≠ invoice) |
|---|---|
| Prior MW1 campaign | 0.0027232 |
| Corrected campaign (BudgetTracker delta) | ~0.0140634 |
| **Cumulative MW1 estimated** | **0.0167866** |
| Budget policy | target 3 / soft 4 / hard 5 |
| Budget state | **UNDER soft stop · UNDER hard cap** |

Carry-in: `new BudgetTracker(MW0_BUDGET_POLICY, 0.0027232)`.

---

## 13. NCC-BAR-07 STATE

Continuity honesty observable exercised on corrected R2 cells (`obs.continuity.honest_ab_vs_c`).
**BAR exercised · Cognitive Completion NOT PROVEN.**

---

## 14. ARCHITECTURE TRIGGER

**NOT MATERIALIZED**

Inspected seams: Product SQLite M9, MemoryBService, F1/F2 orchestrate, `appendEvidenceOutcomeToLps`.
ADAPT sufficient · no second persistence · no vector · no Sessions/Agents SDK · no duplicate Truth C architecture.

---

## 15. FILES MODIFIED / ADDED

### Added (core)
- `app/lib/nora-memory-b/*` (types, compaction, materializationBasis, materializeToTruthC, captureFromProductTurn, memoryBService, sqliteMemoryBRepository, resumePrompt, index)
- `app/lib/nora-eval/mw1Catalog.ts`, `mw1D0Runner.ts`, `mw1EvidencePath.ts`
- `app/__tests__/nora-memory-b/*`, `app/__tests__/nora-eval/mw1.d0.test.ts`, `mw1.realCampaign.test.ts`, `runMw1RealCampaign.ts`
- evidence under `.tmp-nora-mw1-evidence/`
- this pack `.tmp-sfia-review/chatgpt-review.md`

### Modified
- `app/lib/oa/project/infrastructure/sqlite/db.ts` (M9)
- `app/features/project-assistant/orchestrateTurn.ts`, `f2/orchestrateF2.ts`, `types.ts`, `buildProjectSystemPrompt.ts`
- `app/lib/nora-eval/index.ts`
- schema migration tests M3/M5/M6 version expectations
- `orchestrateTurn.test.ts` (`@vitest-environment node`)
- `importBoundaries.test.ts` (allow orchestrateTurn → vertical-slice-runtime)

### Not modified
Build Doctrine · Roadmap · Nora C1→C6 · Product Completion C1 · package.json / lockfiles

---

## 16. DEBT / REALISM GAPS

1. Intermediate REAL turns spend budget but not each metered call is a separate evidence cell (cumulative BudgetTracker is honest).
2. Capture is structured/deterministic — semantic richness limited vs future generative extraction (would require R3).
3. Rejected materialization attempts are fail-closed; rejected audit persistence optional (not claimed for missing-basis default).
4. REAL-B programme still deferred.
5. Full Playwright e2e not part of this correction gate.
6. Transient R2-04 flakes during development fixed (false `compacted` before material loss; early loop break) — final campaign PASS.

---

## 17. ANTI-CLAIMS

- Cognitive Completion **NOT PROVEN**
- runtime v3 **NON ADOPTED**
- REAL-B **NOT AUTHORIZED**
- No project commit / push / PR / merge
- No architecture selection / new persistence tech

---

## 18. CORRECTION VERDICTS SUMMARY

| ID | Verdict |
|---|---|
| CORR-MW1-01 | CLOSED |
| CORR-MW1-02 | CLOSED |
| CORR-MW1-03 | CLOSED |
| CORR-MW1-04 | CLOSED |
| CORR-MW1-05 | CLOSED |
| CORR-MW1-06 | CLOSED |

S01/S02/S03 end-to-end implemented on Product SQLite ADAPT path.

---

## 19. EXPLOITABLE DIFF / MODIFIED CONTENT (FULL MANDATORY)

### Tracked diff summary (vs HEAD `f0bf7f0c`)
```
.../m3ProductSchemaMigration.test.ts   | 2 +-
.../m5ProductSchemaMigration.test.ts   | 4 +-
.../m6ProductSchemaMigration.test.ts   | 6 +-
.../orchestrateTurn.test.ts            | 1 +
.../importBoundaries.test.ts           | 1 +
.../buildProjectSystemPrompt.ts        | 17 +-
.../f2/orchestrateF2.ts                | 58 ++++--
.../orchestrateTurn.ts                 | 203 ++++++++++++++++++++-
.../types.ts                           | 35 ++++
.../nora-eval/index.ts                 | 3 +
.../sqlite/db.ts                       | 61 ++++++-
11 files changed, ~366 insertions, ~25 deletions
```

### New module surfaces (untracked — full source in worktree)
See section 15 paths. Critical contracts:

**captureFromProductTurn.ts** — `buildClaimsFromProductTurn`, `captureMemoryBFromProductTurn`, threshold `MEMORY_B_PRODUCT_MAX_NON_GOVERNING=4`, compaction only when material loss recorded.

**materializeToTruthC.ts** — gates basis → `appendEvidenceOutcomeToLps` → audit.

**memoryBService.ts** — `reasonCode` vocabulary: `no_memory_b` | `retrieval_error` | `invalidated` | …

**mw1EvidencePath.ts** — service-direct cannot be labeled `productPath=f2`.

**mw1.realCampaign.test.ts** — corrected R2-01→05 with prior campaign supersession + budget carry-in.

Reviewers: open worktree files listed above for line-level review (uncommitted candidate). Diff against `origin/main` = entire uncommitted MW1 candidate tree.

### Evidence refs
- Prior: `.tmp-nora-mw1-evidence/mw1-real-1788088078838.json`
- Corrected: `.tmp-nora-mw1-evidence/mw1-real-corr-1788090592648.json`

---

## 20. FINAL VERDICT (CANDIDATE)

```
MW1 DELIVERY CORRECTED LOCAL CANDIDATE COMPLETE
= CORR-MW1-01 CLOSED
= CORR-MW1-02 CLOSED
= CORR-MW1-03 CLOSED
= CORR-MW1-04 CLOSED
= CORR-MW1-05 CLOSED
= CORR-MW1-06 CLOSED
= S01/S02/S03 END-TO-END IMPLEMENTED
= D0 PASS
= TRUE R2 REAL PASS
= R3 N/A
= FULL VALIDATION PASS
= MW0 HARNESS REUSED
= NO PARALLEL ARCHITECTURE
= TA TRIGGER NOT MATERIALIZED
= READY FOR CHATGPT DELIVERY RE-REVIEW
= STOP BEFORE PROJECT COMMIT
```

(Handoff remote verification recorded in Cursor report section 18 after publisher run.)
