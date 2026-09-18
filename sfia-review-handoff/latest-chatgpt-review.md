# PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01 — PROJECT GIT INTEGRATION — CI FAIL UPDATE

**Timestamp (UTC):** 2026-09-18T17:17:01Z
**Timestamp (local):** 2026-09-18 19:17:01 CEST
**Pack revision:** PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01 / PROJECT GIT INTEGRATION / CI FAIL
**Morris GO consumed:** YES — PROJECT GIT INTEGRATION — SAME MACRO — NO MICRO-CYCLE
**SAME MACRO / NO MICRO-CYCLE:** YES
**Critical Review source:** `cdde19b43ab1e2bb8d1348d67c8e0df9d569acf3`
**Verdict:** **PR OPEN — CI FAIL — STOP — CORRECTION REQUIRED**

---

## 1. Git / PR truth (unchanged)

| Item | Value |
|---|---|
| Branch | `qa/sfia-studio-product-journey-claim-evidence-completion-01` |
| Project commit / remote | `ce61740b873c0f580e1733ad53e32e57a2628cb5` (parity) |
| origin/main | `9c6ac90974113044330284dd110108287ba2319e` |
| PR | **#505** · https://github.com/mcleland147/sfia-workspace/pull/505 |
| Base / head | `9c6ac909…` / `ce61740b873c0f580e1733ad53e32e57a2628cb5` |
| Merge | **NOT AUTHORIZED** |
| Product correction applied after CI fail | **NONE** (STOP per GO) |

---

## 2. CI result

| Check | Result |
|---|---|
| Detect SFIA Studio changes | **PASS** |
| Typecheck / Lint / Build | **PASS** (inside Build job) |
| Unit tests (Vitest) | **FAIL** — 1 failed / 4314 passed / 137 skipped |
| SFIA Studio Required Gate | **FAIL** (depends on Build) |
| Run | https://github.com/mcleland147/sfia-workspace/actions/runs/35372491342 |

---

## 3. Failing test (exact)

File: `projects/sfia-studio/app/__tests__/project-assistant/contractResultCrBlk04PreserveWhat.d0.test.ts`

Case: **T6 — free-form / conformity EO remains NOT_PROVEN with artifact alone**

Assertion:

```ts
expect(eo.every((a) => a.result === "NOT_PROVEN")).toBe(true);
```

Observed: not every assessment is `NOT_PROVEN` (EO0 now PASSes).

`PRODUCT_WHAT` used by T6:

1. `Le fichier Markdown matérialisé au chemin cible` (= named EO `DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET`)
2. `Vérification de l’existence et de la conformité minimale du fichier` (= named EO min-conformity)

With artifact Evidence alone + `inputs.targetPath` matching `Evidence.location`, intentional docs_write semantics PASS EO0 and leave EO1 `NOT_PROVEN` (conformity attestation required). T6 still expects **both** NOT_PROVEN — outdated vs named-EO semantics introduced/preserved by this macro.

Local reproduction: same T6 FAIL; focused CEC suite remains **35 PASS**.

---

## 4. Classification / gate

| Question | Answer |
|---|---|
| Is this a silent product defect in CR-CEC-01/02/03? | No — CR-CEC suite PASS; failure is adjacent CR-BLK-04 T6 oracle drift |
| Does GO authorize silent product correction? | **NO** — correction beyond minimal documentary wording requires Morris/ChatGPT return |
| Recommended next (NOT executed) | Distinct Morris GO to update T6 expectations to: EO0 PASS (path/materialized) + EO1 NOT_PROVEN (no conformity Evidence) — or re-label test accordingly |
| Merge | **BLOCKED** |

---

## 5. Anti-claims

- ≠ CI PASS
- ≠ READY FOR MORRIS MERGE DECISION
- ≠ silent product fix applied
- ≠ Product Journey READY/COMPLETE
- ≠ runtime v3 ADOPTED
- ≠ new REAL

---

## 6. Instruction for ChatGPT

Read this handoff + PR #505 CI run `35372491342`.
Do **not** recommend merge.
Authorize (or refuse) a bounded T6 expectation alignment if that is the intended Critical Review correction path.
