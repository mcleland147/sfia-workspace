# Cycle 1 Standard — T7 SHADOW Pilot Policy Values Calibration / Decision Preparation — Review Pack (full)

## 1. Date / time
- CEST: 2026-08-09 06:08:53 CEST
- UTC: 2026-08-09 04:08:53 UTC

## 2. Décision Morris reçue
GO SHADOW PILOT POLICY VALUES

## 3. Interprétation exacte du GO
This GO opens Cycle 1 Standard framing / calibration / decision preparation only.
It does NOT select thresholdCode / currency / thresholdAmount.
It does NOT override the selected T7 sequencing.
It does NOT mutate the Option A versioned source.
It does NOT activate SHADOW / MONITOR / E1.

## 4. Cycle / profil
- Cycle: 1 — Cadrage
- Profil: Standard
- Bloc: FinOps
- Baseline: SFIA v2.6

## 5. Git Truth
- branch: main
- HEAD = origin/main = `bb52624e4de6aa19a7d68205af053596bf599a1a`
- tracked clean; staged none; untracked `.tmp-sfia-review/**` only
- no project branch created (read-only cycle)

## 6. Handoff entrant tip / blob
- tip: `bb7b9cec32b25cc378e24a847e1aca8645997b15`
- blob: `bb0bf1775ce7b2e4bab7c338e1aa3d3d33ec72a6`
- cycle: Cycle 14 Standard — Policy Source Option A Post-merge
- confirmed: POLICY SOURCE INFRASTRUCTURE ON MAIN; EMPTY / INERT; POLICY VALUES NOT SELECTED; SHADOW NOT ACTIVATED; MONITOR NOT ACTIVATED; C08 OPEN MINOR; R-T4-T3-SYNC-01 OPEN BEFORE MONITOR

## 7. Sources consultées
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/{sfia-cycle-routing-guide,sfia-chatgpt-cursor-operating-model,sfia-rules-and-guardrails}.md
- method/sfia-fast-track/checklists/sfia-validation-checklist.md
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md
- projects/sfia-studio/156…t7-foundation…execution.md
- projects/sfia-studio/158…temporal-dual-gate…execution.md
- projects/sfia-studio/159…policy-source-option-a…execution.md
- versionedFinOpsT7ShadowPolicySource.ts
- types.enforcement.ts
- evaluateFinOpsEnforcement.ts
- historical handoff commit (corrected SHA — see §8)
- supporting docs 103 / 149 for documentary 15/20/25/30 classification only

## 8. Historical calibration decision D-T7-CALIBRATION-PILOT-01
PROMPT_SHA=e6e026c9629535e9d8852f4613acf473b417e0
ACTUAL_SHA=e6e026c9629535e5a9d8852f4613acf473b417e0
ACTUAL_BLOB=79e29f7df68d4c522610c5b63377b3bf37b4e3f0

Note: the cycle prompt listed SHA `…e9d8852f…` which is not resolvable; Git/doc 156 authoritative SHA is `e6e026c9629535e5a9d8852f4613acf473b417e0` (handoff blob `79e29f7df68d4c522610c5b63377b3bf37b4e3f0`).

SELECTED BY MORRIS:
`D-T7-CALIBRATION-PILOT-01` = **A BEFORE MONITOR USING REAL AMOUNTS**

Historical handoff semantics (excerpt):
```
### CRITICAL DISTINCTION (mandatory)

| Topic | Status |
|-------|--------|
| Product IAM capability required before E1 | **SELECTED** |
| Product IAM technology / provider | **NOT_SELECTED** |
| T5 Delivery | **NOT AUTHORIZED** this cycle |
| Product IAM selection / Delivery | **NOT AUTHORIZED** this cycle |

---

## O. D-T7-CALIBRATION-PILOT-01 — SELECTED

**Status:** **SELECTED BY MORRIS**

**Option:** **A — MORRIS CALIBRATION REQUIRED BEFORE MONITOR USING REAL AMOUNTS**

**Semantics:**

| Phase | Calibration posture |
|-------|---------------------|
| SHADOW | non-enforcing; may use technical/candidate params explicitly **non-adopted**; no historical value adoption |
| MONITOR | uses real calibrated monetary policy; remains **NON-BLOCKING**; feeds human review |
| E1 | reuses calibrated policy only after MONITOR evidence + E1 readiness + **distinct** Morris E1 GO |

**Historical values 15 / 20 / 25 / 30 remain:**

- historical
- documentary
- provisional
- **NOT runtime-active**

**No real monetary threshold is SELECTED by this arbitration.**

**Pilot qualitative categories from document 152:** **ACCEPTED** as required future pilot evidence categories.

**Quantitative acceptance metrics:** **DEFERRED** (future Morris+QA).

---

## P. OFF semantics — SELECTED architecture

**Status:** **SELECTED BY MORRIS** (architecture semantics)

| Dimension | SELECTED OFF |
|-----------|--------------|
| Feature-flag state | Default |
| T4 enforcement path | Inert / not required |
| Projection read | Not required |
| BLOCK possible? | **Never** |
| Provider | Unchanged / normal |
## U. Selected architecture sequencing

**Status:** **ARCHITECTURE SEQUENCING SELECTED BY MORRIS** — **execution gates remain distinct / NOT AUTHORIZED**

1. T7 Decisions Applied *(this documentary cycle)*
2. T6 runtime composition
3. T4 projection refresh
4. T7 foundation Delivery default-OFF
5. dedicated activation QA
6. distinct GO SHADOW
7. SHADOW evidence
8. T3↔T4 synchronization
9. Morris calibration
10. distinct GO MONITOR
11. MONITOR evidence
12. T6-ext-T3T4
13. T5
14. Product IAM
15. E1 readiness review
16. distinct GO E1
17. E1 pilot

**Rules:**

- This is a **SELECTED architecture sequence**, not a batch of Delivery GOs.
- Each subsequent Delivery/activation requires a **distinct Morris decision**.
- T6-ext / T5 / IAM may later be organized in parallel only if manifests are disjoint **and** a Delivery arbitration allows it.
- Do **not** auto-execute the next step from this list.

---

## V. Pilot evidence qualitative contract

**Status:** qualitative categories **ACCEPTED**; quantitative metrics **DEFERRED**

Accepted future pilot evidence categories:

1. no false block
2. API_USAGE never blocks
3. estimation / parametric never blocks
4. projection freshness
5. rebuild failure fail-open
6. technical failure ≠ BLOCK
7. decision provenance
8. audit completeness (relative to authorized T6 scope)
9. T3 synchronization when activated
10. override behavior when T5 available
11. rollback OFF
12. provider-call behavior (never invoked on BLOCK)
13. multi-currency isolation
14. incident diagnostics
15. human review evidence

**Quantitative** duration / volume / acceptable false-positive rate: **DEFERRED**.

---

## W. Remaining deferred / non-selected decisions

Intentionally **NOT** SELECTED by this arbitration:
```

Key: SHADOW may use technical/candidate params only if explicitly **non-adopted**; MONITOR uses real calibrated monetary policy; 15/20/25/30 remain historical/documentary/provisional/NOT runtime-active.

## 9. Selected architecture sequence
1. T7 Decisions Applied
2. T6 runtime composition
3. T4 projection refresh
4. T7 foundation Delivery default-OFF
5. dedicated activation QA
6. distinct GO SHADOW
7. SHADOW evidence
8. T3↔T4 synchronization
9. Morris calibration
10. distinct GO MONITOR
… then MONITOR evidence / T6-ext / T5 / IAM / E1 gates (still distinct later GOs)

Consequence: real calibration is NOT a historical prerequisite of SHADOW.

## 10. Current policy contract (main)
- projectId pilot = `sfia-studio-ops1` (`T7_SHADOW_PILOT_PROJECT_ID`)
- policy source = `versionedFinOpsT7ShadowPolicySource`
- table = `Object.freeze({})` — ACTIVE POLICY ENTRIES = 0
- resolver returns null ⇒ evaluateFinOpsEnforcement allow / `not_configured`
- policy shape when present: thresholdCode + currency + thresholdAmount (Money scale-8, strictly positive) + effect
- SHADOW effect via composition/adapter = `signal_only` when policy present
- SHA-256 source = `f5f23972740178ec1fc099c4d453a403c4fd89d4ebcfafe5eb91f4441dd5e2d3`
- no process.env / no DB policy store / no ops1 runtime import in source
- 15 / 20 / 25 / 30 = HISTORICAL / DOCUMENTARY ONLY — NOT SELECTED — NOT RUNTIME DEFAULTS

## 11. Evidence inventory complete
```
=== EVIDENCE INVENTORY ===
A1	DOCUMENTARY	Enveloppe mensuelle cible 25 USD (doc 103 IP-0C)	— PROVISIONAL — SELECTED historically; NOT RUNTIME; NOT real observed spend
A2	DOCUMENTARY	Seuils alerte/revue/plafond 15/20/30 USD (doc 103/149)	— HISTORICAL / DOCUMENTARY ONLY; explicitly NOT RUNTIME-ACTIVE
A3	ABSENT	Budget Morris/product hard for sfia-studio-ops1	— No Morris-validated real budget found on main for pilot
B1	TEST FIXTURE	T2/T4 projection amounts in unit/PG tests (e.g. EUR 20.00000000)	— Synthetic inserts for mechanism tests
B2	TEST FIXTURE	thresholdCode FICT_T4 / TEST_ONLY_SW	— Test-only codes; not product naming SoT
B3	ABSENT / UNKNOWN	Pilot sfia-studio-ops1 billed/providerObserved ledger periods on main	— No admissible real pilot spend series in repo; prod/Neon access forbidden this cycle
C1	REAL / PILOT (identity only)	Pilot identity constant T7_SHADOW_PILOT_PROJECT_ID=sfia-studio-ops1	— Identity SELECTED; not a monetary value
C2	REAL / PILOT (runtime state)	Option A versioned source EMPTY Object.freeze({})	— ACTIVE POLICY ENTRIES = 0; null → allow/not_configured
C3	TEST FIXTURE / VERIFICATION SEAM	resolveShadowPolicy optional override	— Not product policy; Option C product diagnostic ABSENT
D1	ABSENT	thresholdCode naming convention product	— Only FICT_/TEST_ONLY_ in tests → naming RECOMMENDATION ONLY if needed later
D2	TEST FIXTURE	Currency EUR appearances in tests	— Cannot select EUR as policy currency from fixtures
D3	DOCUMENTARY	Currency USD in documentary 15/20/25/30	— Not selectable as operational currency without real data GO
REAL_AMOUNT_SUFFICIENCY=INSUFFICIENT
BUDGET_DERIVED_POSSIBLE=NO (provisional envelope is documentary only)
OBSERVED_SPEND_DERIVED_POSSIBLE=NO
CANDIDATE_VALUES=NONE
CURRENCY_SELECTABLE=NO
THRESHOLD_CODE_CONVENTION=RECOMMENDATION_ONLY_IF_NEEDED_LATER
```

## 12. Budget evidence
- Provisional monthly envelope 25 USD appears in doc 103 IP-0C as PROVISIONAL — SELECTED (documentary).
- OPS1 functional docs mark numeric FinOps values OPEN / to decide under distinct GO.
- No Morris-validated hard pilot budget for `sfia-studio-ops1` found as operational SoT on main.
- Classification: DOCUMENTARY — insufficient as budget-derived operational threshold.

## 13. Cost / real amount evidence
- No admissible real pilot billedAmount / providerObservedAmount / blockingEligibleAmount time series for `sfia-studio-ops1` in repo.
- Neon / production DB / provider API / external billing access: FORBIDDEN and NOT USED.
- Local Postgres CI fixtures are ephemeral synthetic data, not real pilot spend.
- Verdict: REAL-AMOUNT CALIBRATION EVIDENCE INSUFFICIENT

## 14. Fixture / synthetic / documentary evidence
- Tests: EUR amounts, `FICT_T4`, `TEST_ONLY_SW` → TEST FIXTURE
- Docs 103/149: 15/20/25/30 USD → DOCUMENTARY / PROVISIONAL / NOT RUNTIME-ACTIVE
- Must not be adopted as operational policy values

## 15. Currency evidence
- EUR: appears in test fixtures only → NOT SELECTABLE
- USD: appears in documentary provisional calibration → NOT SELECTABLE as operational currency without real evidence + Morris GO
- CURRENCY NOT SELECTABLE FROM CURRENT EVIDENCE

## 16. ThresholdCode convention evidence
- Product convention ABSENT
- Test codes only (`FICT_T4`, `TEST_ONLY_SW`)
- THRESHOLD CODE NAMING — RECOMMENDATION ONLY (deferred): e.g. semantic/versioned identifier such as `T7_SHADOW_PILOT_V1` IF/WHEN values are later selected — not adopted now

## 17. Data gaps
1. Real pilot spend periods for sfia-studio-ops1
2. Morris/product operational budget SoT
3. Dominant operational currency from real data
4. Representative sample size / freshness of projections
5. Quantitative acceptance metrics (DEFERRED by T7 arbitration)

## 18. Candidate values
NONE — no numeric threshold invented; no candidates written to runtime.

## 19. Options A / B / C

### OPTION A — PRESERVE SELECTED T7 SEQUENCE
SHADOW first → SHADOW evidence → T3 sync → real calibration → MONITOR
Consequence now: POLICY VALUES remain NOT SELECTED; source stays EMPTY / INERT.
Matches D-T7-CALIBRATION-PILOT-01 and selected sequencing.

### OPTION B — EARLY REAL POLICY VALUES IN SHADOW
Would require TRAJECTORY OVERRIDE CANDIDATE + distinct Morris GO before Delivery.
Not justified: real-amount evidence insufficient; adopting 15/20/25/30 would violate explicit anti-claims.
Even if later justified, SHADOW would remain signal_only and still need a separate GO SHADOW.

### OPTION C — DIAGNOSTIC NON-ADOPTED SHADOW PARAMETERS
Historical arbitration allows technical/candidate params in SHADOW only if explicitly non-adopted.
Current product mechanism for that: ABSENT.
Only existing seam: optional `resolveShadowPolicy` test/verification override — NOT product policy / NOT durable SoT.
Do not invent a new diagnostic mechanism in this cycle.

## 20. Challenge dette / simplicité
1. Need for real policy values BEFORE SHADOW? — Not required by selected sequence; SHADOW was designed as lighter technical phase.
2. What early values solve that empty SHADOW does not? — Only earlier monetary-signal observation; wiring/fail-open/not_configured already testable without values.
3. Premature coupling? — Yes: couples financial policy to infrastructure activation without real spend evidence.
4. Real budget/representative amounts available? — NO (insufficient).
5. Simpler path? — Preserve selected sequence.
6. Benefit > override cost? — NO on current evidence.
7. Threshold without confusing technical diagnostic and financial policy? — Only via explicitly non-adopted diagnostic (Option C), which lacks a product mechanism; test override must not be sold as policy.

## 21. Recommendation (≠ decision)
**PRESERVE SELECTED SEQUENCE**

Supporting classification: **CALIBRATION BLOCKED — REAL DATA REQUIRED** for any numeric thresholdCode/currency/thresholdAmount selection.
PATH B is NOT recommended and is NOT decided by the received GO wording.

## 22. Policy values status
NOT SELECTED

## 23. SHADOW status
NOT ACTIVATED

## 24. Reserves
- R-QA-T7-C08-SCENARIO-01 = OPEN MINOR
- R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR
- R-PR-T2-API-01 = OPEN MINOR (si toujours applicable)
- real calibration = REQUIRED BEFORE MONITOR USING REAL AMOUNTS
- T6-ext = NOT AUTHORIZED
- Product IAM = NOT_SELECTED
- T5 = OUT OF SCOPE
- MONITOR = NOT ACTIVATED
- E1 = NOT AUTHORIZED
- POLICY SOURCE INFRASTRUCTURE = ON MAIN (EMPTY / INERT)

## 25. Project mutation
NO — no project file create/modify/delete; no project commit/push/PR/merge; no runtime policy entry; no SHADOW activation.

## 26. Morris decision required
```text
GO PRESERVE T7 SEQUENCE —
POLICY VALUES DEFERRED UNTIL POST-SHADOW CALIBRATION —
NEXT SUBJECT SHADOW ACTIVATION READINESS.
```

Anti-claims for that future path:
- preserve ≠ activate SHADOW
- SHADOW activation remains a distinct Morris GO
- early values would still require a separate override GO + Delivery if Morris later chooses PATH B
- if Morris instead wants data acquisition first: GO POLICY CALIBRATION DATA SOURCE — <admissible local/real source to define> before any value selection

## 27. Unique verdict
T7 SHADOW PILOT POLICY VALUES CALIBRATION BLOCKED —
CYCLE 1 STANDARD —
CURRENT POLICY SOURCE EMPTY / INERT VERIFIED —
SELECTED T7 SEQUENCE VERIFIED —
REAL-AMOUNT CALIBRATION EVIDENCE INSUFFICIENT —
NO NUMERIC THRESHOLD INVENTED —
POLICY VALUES NOT SELECTED —
SHADOW NOT ACTIVATED —
RECOMMENDATION PRESERVE SELECTED SEQUENCE —
DATA SOURCE DECISION REQUIRED BEFORE ANY EARLY VALUES OVERRIDE —
NO PROJECT MUTATION —
HANDOFF REMOTE VERIFIED
