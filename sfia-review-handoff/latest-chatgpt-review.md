# Cycle 13 Standard — T7 SHADOW Temporal Dual-Gate Local Commit + PR Readiness — Review Pack (full)

## 1. Date / heure

- **CEST:** 2026-08-09 02:53:33 CEST
- **UTC:** 2026-08-09 00:53:33 UTC

## 2. Décision Morris (exacte)

> GO LOCAL COMMIT + PR READINESS — T7 SHADOW Temporal Dual-Gate.

## 3. Cycle / profil

- **Cycle:** 13 — PR readiness
- **Profil:** Standard
- **Typologie:** EVOL / CODE / TEST / DOC
- **Note:** ne rétrograde pas la preuve Critical Delivery/QA; aucun byte projet modifié dans ce cycle.

## 4. Git Truth initial

- **origin/main:** `fd06f4aa1a19e629e0330473e43b1cf3b935014f`
- **branch:** `delivery/sfia-studio-finops-t7-shadow-temporal-dual-gate`
- **HEAD pre-commit:** `fd06f4aa1a19e629e0330473e43b1cf3b935014f`
- **remote project branch:** ABSENT
- **subject:** uncommitted atop main (pre-commit)

## 5. Handoff entrant

- **tip:** `cfd3b6ab784aa61579c99bb01d366f1f262ec9b2`
- **blob:** `0e993a3c240830161498a0998304369e3fe8423c`
- **cycle:** Cycle 9 Critical — Dedicated Temporal Dual-Gate QA

## 6. QA-G3 status

- **QA-G2:** PASS
- **QA-G3:** PASS WITH RESERVES

## 7. QA reserve

- **R-QA-T7-C08-SCENARIO-01 = MINOR**
- dynamic concurrency B uses non-pilot; structural isolation proven; no shared temporal state.
- Not closed. Not “fixed” in this cycle.

## 8. 6 pre-commit SHA-256

=== PRE-COMMIT QA BYTE FREEZE ===
MATCH 890143179f0f48c80cae562ed9fad785b70967f3780cde61ca0abe49afa8562a  projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
EXP  890143179f0f48c80cae562ed9fad785b70967f3780cde61ca0abe49afa8562a
MATCH d29d65ad51fa2f1784fff36983f9eb98d29d39f6835feafc0d388bbd52ea6c48  projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
EXP  d29d65ad51fa2f1784fff36983f9eb98d29d39f6835feafc0d388bbd52ea6c48
MATCH 47251e9eda3cb0765a214080f9f48fbb8315d7ba90c2aa9375045c4f092e3e24  projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
EXP  47251e9eda3cb0765a214080f9f48fbb8315d7ba90c2aa9375045c4f092e3e24
MATCH 16fc58ade6cf0483c2bbef43c7e3a9c213cfee14b624ebbcc7454ea773a8e83a  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
EXP  16fc58ade6cf0483c2bbef43c7e3a9c213cfee14b624ebbcc7454ea773a8e83a
MATCH ca17838c68f7891315b10c85aeb7f5915da67720dc7495d1551a65318ed9603a  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
EXP  ca17838c68f7891315b10c85aeb7f5915da67720dc7495d1551a65318ed9603a
MATCH 8f44f34c15a378565b43c6084af44832a85bde9cc7f0178cc60623910f1b19ee  projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md
EXP  8f44f34c15a378565b43c6084af44832a85bde9cc7f0178cc60623910f1b19ee
DIFF_SHA256=981a2c5e70626f536c1b9055e5f48bd22a1653c193d10b4d355111672e852737 expected=981a2c5e70626f536c1b9055e5f48bd22a1653c193d10b4d355111672e852737 MATCH
BLOB158=362ac968d159ebe00cff9e3837f31f7ece6d3cd3 expected=362ac968d159ebe00cff9e3837f31f7ece6d3cd3 MATCH
BYTE_FREEZE_FAIL=0

## 9. Pre-commit tracked diff hash

`981a2c5e70626f536c1b9055e5f48bd22a1653c193d10b4d355111672e852737` — MATCH

## 10. 158 blob

`362ac968d159ebe00cff9e3837f31f7ece6d3cd3` — MATCH

## 11. Diff-check pre-staging

PASS (`git diff --check` exit 0)

## 12. Staged scope

A	projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md
M	projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
M	projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
M	projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
M	projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
M	projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts

Exact 6 paths — PASS.

## 13. Staged hashes

=== STAGED BYTE GATE ===
MATCH 890143179f0f48c80cae562ed9fad785b70967f3780cde61ca0abe49afa8562a  projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
MATCH d29d65ad51fa2f1784fff36983f9eb98d29d39f6835feafc0d388bbd52ea6c48  projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
MATCH 47251e9eda3cb0765a214080f9f48fbb8315d7ba90c2aa9375045c4f092e3e24  projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
MATCH 16fc58ade6cf0483c2bbef43c7e3a9c213cfee14b624ebbcc7454ea773a8e83a  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
MATCH ca17838c68f7891315b10c85aeb7f5915da67720dc7495d1551a65318ed9603a  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
MATCH 8f44f34c15a378565b43c6084af44832a85bde9cc7f0178cc60623910f1b19ee  projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md
STAGED_158_BLOB=362ac968d159ebe00cff9e3837f31f7ece6d3cd3 expected=362ac968d159ebe00cff9e3837f31f7ece6d3cd3 MATCH
STAGED_BYTE_FAIL=0

## 14. Staged diff-check

PASS (`git diff --cached --check` exit 0)

## 15. Semantic diff review

Forbidden-pattern scan on staged added lines found only documentation/test anti-claim mentions (e.g. “NO AsyncLocalStorage”, MONITOR FALSE, `expect.not.toMatch`, E1_ENFORCED as ineligible fixture).
No policy source, threshold, migration, CI, OA→OPS1 import, shared cache registry, or secrets introduced.

Required Option C / captureEligibility / temporal tests / 158 present — PASS.

Evidence excerpt:

=== SEMANTIC FORBIDDEN HITS (added lines) ===
31:+| MONITOR activated | **FALSE** |
55:+**Not consumed:** SHADOW activation · policy source · MONITOR · E1 · thresholds · T6-ext · Product IAM · commit/push/PR.
93:+- **NO MAP / SET / WeakMap / WeakSet**
94:+- **NO AsyncLocalStorage eligibility registry**
132:+Covered proofs include T-C01…C04 temporal matrix, PRE eligibility matrix, legacy D2D3 / generic enforcement without `captureEligibility`, concurrency A/B no cross-run contamination, never-block / signal_only, static absence of Map/Set/AsyncLocalStorage in the three runtime files.
403:+    await upsertMode(pool, PILOT, "E1_ENFORCED");
605:+    expect(adapter).not.toMatch(/WeakMap/);
606:+    expect(adapter).not.toMatch(/AsyncLocalStorage/);
622:+      expect(src).not.toMatch(/WeakMap/);
624:+      expect(src).not.toMatch(/AsyncLocalStorage/);

=== SEMANTIC REQUIRED HITS ===
7:+# 158 — FinOps T7 SHADOW Temporal Semantics Option C — Hybrid Dual-Gate Execution Record
24:+| Option C selected by Morris | **TRUE** |
25:+| Dual-gate = `PRE_WAS_SHADOW ∧ POST_IS_SHADOW` | **TRUE** |
52:+> GO TEMPORAL SEMANTICS — OPTION C, puis Delivery Cycle 8 Critical, avec dual-gate PRE_WAS_SHADOW ∧ POST_IS_SHADOW et interdiction de cache process-local non borné.
54:+**Consumed by this Delivery:** transient `captureEligibility` + coordinator-local PRE gate + existing POST rollout re-read.
63:+  → captureEligibility ("eligible" iff pilot + PRE mode SHADOW)
67:+       "ineligible" → disabled / finops_pre_provider_capture_ineligible (no port call)
132:+Covered proofs include T-C01…C04 temporal matrix, PRE eligibility matrix, legacy D2D3 / generic enforcement without `captureEligibility`, concurrency A/B no cross-run contamination, never-block / signal_only, static absence of Map/Set/AsyncLocalStorage in the three runtime files.
189:+        reason: "finops_pre_provider_capture_ineligible",
200:+  it("T7-C01 OFF → OFF · PRE ineligible · capture disabled · no usage event", async () => {
217:+        reason: "finops_pre_provider_capture_ineligible",
222:+  it("T7-C02 SHADOW → SHADOW · PRE eligible · capture created/duplicate", async () => {
237:+    expect(decision.captureEligibility).toBe("eligible");
254:+  it("T7-C03 OFF → SHADOW mid-provider · PRE ineligible · capture short-circuited", async () => {
303:+        reason: "finops_pre_provider_capture_ineligible",
313:+  it("T7-C04 SHADOW → OFF mid-provider · PRE eligible · POST disables capture", async () => {
368:+  it("T7-C05 PRE eligibility matrix · non-pilot/OFF/MONITOR/E1 ineligible · SHADOW eligible", async () => {
383:+    expect(nonPilot.captureEligibility).toBe("ineligible");
392:+    expect(off.captureEligibility).toBe("ineligible");
401:+    expect(monitor.captureEligibility).toBe("ineligible");
410:+    expect(e1.captureEligibility).toBe("ineligible");
420:+    expect(shadowNull.captureEligibility).toBe("eligible");
437:+    expect(shadowThrow.captureEligibility).toBe("eligible");
440:+  it("T7-C06 legacy: no captureEligibility on generic enforcement → capture preserved", async () => {
473:+  it("T7-C07 legacy: no finopsEnforcement · capture path preserved", async () => {
500:+  it("T7-C08 concurrency: A SHADOW-eligible and B OFF-ineligible do not contaminate", async () => {
571:+        reason: "finops_pre_provider_capture_ineligible",
584:+  it("T7-C-U01 ensureShadowNeverBlocks preserves captureEligibility eligible", () => {
588:+      captureEligibility: "eligible",
591:+    expect(out.reason).toBe("shadow_block_forbidden");
592:+    expect(out.captureEligibility).toBe("eligible");
599:     expect(adapter).toMatch(/effect:\s*"signal_only"/);
600:     expect(adapter).toMatch(/shadow_block_forbidden/);
602:+    expect(adapter).toMatch(/captureEligibility/);
637:+   * Transient Option C PRE hint from evaluateBeforeProvider.
642:+  readonly captureEligibility?: "eligible" | "ineligible";
650:+  // Option C PRE gate: captureEligibility === "ineligible" prevents capture port call.
652:+  if (args.captureEligibility === "ineligible") {
655:+      reason: "finops_pre_provider_capture_ineligible",
665:+  // Option C: optional captureEligibility is kept in this call-local variable only

## 16. Commit message

```text
feat(sfia-studio): add T7 shadow temporal dual-gate
```

## 17. Commit SHA

`1938b0fa20541ddc90129767bc99a9f58febf242`

## 18. Parent SHA

`fd06f4aa1a19e629e0330473e43b1cf3b935014f` (= origin/main)

## 19. Commit 6-path scope

A	projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md
M	projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
M	projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
M	projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
M	projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
M	projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts

## 20. Committed 6 hashes

=== COMMITTED BYTE GATE ===
MATCH 890143179f0f48c80cae562ed9fad785b70967f3780cde61ca0abe49afa8562a  projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
MATCH d29d65ad51fa2f1784fff36983f9eb98d29d39f6835feafc0d388bbd52ea6c48  projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
MATCH 47251e9eda3cb0765a214080f9f48fbb8315d7ba90c2aa9375045c4f092e3e24  projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
MATCH 16fc58ade6cf0483c2bbef43c7e3a9c213cfee14b624ebbcc7454ea773a8e83a  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
MATCH ca17838c68f7891315b10c85aeb7f5915da67720dc7495d1551a65318ed9603a  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
MATCH 8f44f34c15a378565b43c6084af44832a85bde9cc7f0178cc60623910f1b19ee  projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md
COMMITTED_158_BLOB=362ac968d159ebe00cff9e3837f31f7ece6d3cd3 expected=362ac968d159ebe00cff9e3837f31f7ece6d3cd3 MATCH
COMMITTED_BYTE_FAIL=0

## 21. Committed 158 blob

`362ac968d159ebe00cff9e3837f31f7ece6d3cd3` — MATCH QA

## 22. Ahead count

`origin/main...HEAD` = `0 1`

## 23. PR diff stat

 ...inops-t7-shadow-temporal-dual-gate-execution.md | 154 ++++++++
 .../t7.shadow-option-a.wiring.integration.test.ts  | 386 ++++++++++++++++++++-
 .../oa/finops/t7.shadow-option-a.unit.test.ts      |  32 ++
 .../application/coordinateExecutionRun.ts          |  22 ++
 .../lib/oa/finops/application/types.enforcement.ts |  17 +
 .../server/composeFinOpsT7ShadowExecutionDeps.ts   |  50 ++-
 6 files changed, 648 insertions(+), 13 deletions(-)

## 24. PR diff name-status

A	projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md
M	projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
M	projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
M	projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
M	projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
M	projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts

## 25. PR diff-check

PASS (`git diff --check origin/main...HEAD` exit 0)

## 26. Forbidden-path check

PASS — no `.github/**`, migrations, env, lockfiles, method/prompts/scripts, OPS1 source, T3/T5/T6-ext, Product IAM.

## 27. Secret check

PASS — no token/password/private-key/DATABASE_URL/remote-DB host patterns in `origin/main...HEAD` diff.

## 28. QA evidence reused

Cycle 9 Critical Dedicated QA (handoff tip `cfd3b6ab…`):

- temporal matrix C01–C04 PASS
- OFF→SHADOW no retroactive capture
- SHADOW→OFF immediate observational rollback
- SHADOW→SHADOW capture path
- PRE eligibility / legacy undefined / no cache / never-block / signal_only / OA→OPS1
- PG ephemeral
- unit 6/6 · wiring 22/22 · OA/OPS1 12/12 · related 41/41
- typecheck/lint/build PASS
- full regression 159 / 1616 / 0 failure
- subject immutable
- QA-G2 PASS · QA-G3 PASS WITH RESERVES

This Cycle 13 preserves those exact bytes in local commit; Critical suite not re-run.

## 29. Document 158 review

Committed 158 still states Delivery-era facts:

- Option C selected TRUE
- dual-gate TRUE
- implementation local TRUE
- closed on main FALSE
- SHADOW activated FALSE
- policy selected FALSE
- pending dedicated QA wording remains Delivery-context historical

Updated post-QA status is carried in this PR readiness pack + PR body draft (not by mutating 158).

## 30. PR TITLE DRAFT COMPLET

feat(sfia-studio): add T7 shadow temporal dual-gate

## 31. PR BODY DRAFT COMPLET

# Summary

- implement Morris-selected Option C temporal semantics
- PRE_WAS_SHADOW ∧ POST_IS_SHADOW
- prevent OFF→SHADOW retroactive capture
- preserve SHADOW→OFF immediate observational rollback
- no process-local cache / registry

# Morris decision

GO TEMPORAL SEMANTICS — OPTION C, puis Delivery Cycle 8 Critical, avec dual-gate PRE_WAS_SHADOW ∧ POST_IS_SHADOW et interdiction de cache process-local non borné.

# Scope

1. `projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts`
2. `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts`
3. `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`
4. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`
5. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`
6. `projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md`

# Runtime semantics

| Transition | Capture |
|------------|---------|
| OFF → OFF | no capture |
| OFF → SHADOW | no capture |
| SHADOW → OFF | no capture |
| SHADOW → SHADOW | capture possible (if other capture conditions hold) |

# Safety

- SHADOW never BLOCK
- signal_only forced
- fail-open
- undefined eligibility preserves legacy capture
- no migration
- no durable state
- no cache / Map / registry
- OA→OPS1 isolation preserved

# QA

Cycle 9 Critical Dedicated Temporal Dual-Gate QA:

- QA-G2 PASS
- QA-G3 PASS WITH RESERVES
- unit 6/6
- wiring 22/22
- OA/OPS1 12/12
- related exec 41/41
- typecheck PASS
- lint PASS
- build PASS
- full regression 159 files / 1616 tests / 0 failures
- diff-check PASS
- subject immutable (QA-validated bytes preserved in local commit `1938b0fa20541ddc90129767bc99a9f58febf242`)

# Reserve

R-QA-T7-C08-SCENARIO-01 = MINOR

Description:

- dynamic concurrency B uses non-pilot
- structural run isolation proven (`captureEligibility` function-scoped)
- no shared temporal state

# Existing trajectory reserves

- SHADOW PILOT POLICY SOURCE = NOT SELECTED
- R-T4-T3-SYNC-01 OPEN BEFORE MONITOR
- R-PR-T2-API-01 OPEN MINOR
- real calibration required before MONITOR
- T6-ext NOT AUTHORIZED
- Product IAM NOT_SELECTED
- T5 OUT OF SCOPE
- MONITOR NOT ACTIVATED
- E1 NOT AUTHORIZED

# Anti-claims

- SHADOW NOT ACTIVATED
- NO real rollout mutation
- NO production threshold
- NO policy source selected
- PR readiness ≠ merge authorization
- local QA ≠ remote CI

# Temporal reserve

TEMPORAL MODE DRIFT OFF→SHADOW =
VALIDATED LOCALLY AS ADDRESSED BY OPTION C —
NOT CLOSED ON MAIN

# Next gates

1. Morris GO PUSH BRANCH + OPEN PR
2. remote CI on exact commit
3. ChatGPT PR validation
4. distinct Morris GO MERGE
5. post-merge Cycle 14
6. policy-source decision
7. future SHADOW activation — distinct GO

## 32. Reserve classification

| Item | Class |
|------|-------|
| R-QA-T7-C08-SCENARIO-01 | MINOR (traced; not closed) |
| Subject-related readiness defects | NONE |

## 33. Temporal reserve

TEMPORAL MODE DRIFT OFF→SHADOW =
VALIDATED LOCALLY AS ADDRESSED BY OPTION C —
NOT CLOSED ON MAIN

## 34. Existing trajectory reserves

- SHADOW PILOT POLICY SOURCE = NOT SELECTED
- R-T4-T3-SYNC-01 OPEN BEFORE MONITOR
- R-PR-T2-API-01 OPEN MINOR
- real calibration required before MONITOR
- T6-ext NOT AUTHORIZED
- Product IAM NOT_SELECTED
- T5 OUT OF SCOPE
- MONITOR NOT ACTIVATED
- E1 NOT AUTHORIZED

## 35. Anti-claims

- SHADOW NOT ACTIVATED
- policy NOT SELECTED
- project push NO
- PR NO
- merge NO
- NOT CLOSED ON MAIN
- local QA ≠ remote CI
- PR readiness ≠ merge authorization

## 36. Final Git state

branch=delivery/sfia-studio-finops-t7-shadow-temporal-dual-gate
HEAD=1938b0fa20541ddc90129767bc99a9f58febf242
HEAD^=fd06f4aa1a19e629e0330473e43b1cf3b935014f
origin/main=fd06f4aa1a19e629e0330473e43b1cf3b935014f
status:
?? .tmp-sfia-review/
cached:
ahead: 0	1
remote project branch:
(empty = absent)

## 37. Project push

**NO**

## 38. PR

**NO**

## 39. Merge

**NO**

## 40. SHADOW

**NOT ACTIVATED**

## 41. Policy

**NOT SELECTED**

## 42. Next Morris gate

**GO PUSH BRANCH + OPEN PR — T7 SHADOW Temporal Dual-Gate**

(does not authorize merge / SHADOW activation / policy source)

## 43. Verdict

```text
T7 SHADOW TEMPORAL DUAL-GATE PR READINESS READY WITH RESERVES —
CYCLE 13 STANDARD —
LOCAL COMMIT 1938b0fa20541ddc90129767bc99a9f58febf242 CREATED —
PARENT fd06f4aa1a19e629e0330473e43b1cf3b935014f VERIFIED —
QA-VALIDATED BYTES PRESERVED EXACTLY —
EXACT 6-PATH COMMIT VERIFIED —
DIFF CHECK PASS —
FORBIDDEN PATH CHECK PASS —
SECRET CHECK PASS —
QA-G2 PASS —
QA-G3 PASS WITH RESERVES —
R-QA-T7-C08-SCENARIO-01 MINOR TRACED —
PRE_WAS_SHADOW ∧ POST_IS_SHADOW PRESERVED —
NO PROCESS-LOCAL CACHE / REGISTRY —
SHADOW NEVER BLOCK PRESERVED —
SIGNAL_ONLY PRESERVED —
TEMPORAL MODE DRIFT VALIDATED LOCALLY AS ADDRESSED —
NOT CLOSED ON MAIN —
SHADOW PILOT POLICY SOURCE NOT SELECTED —
SHADOW NOT ACTIVATED —
PROJECT PUSH NOT PERFORMED —
PR NOT CREATED —
READY FOR DISTINCT MORRIS GO PUSH BRANCH + OPEN PR —
HANDOFF REMOTE VERIFIED
```

---

## Appendix A — COMPLETE commit patch (`git show HEAD`)

commit 1938b0fa20541ddc90129767bc99a9f58febf242
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Sun Aug 9 02:52:46 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Sun Aug 9 02:52:46 2026 +0200

    feat(sfia-studio): add T7 shadow temporal dual-gate

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md b/projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md
new file mode 100644
index 0000000..362ac96
--- /dev/null
+++ b/projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md
@@ -0,0 +1,154 @@
+# 158 — FinOps T7 SHADOW Temporal Semantics Option C — Hybrid Dual-Gate Execution Record
+
+**Project:** SFIA Studio — Assistant SFIA natif OpenAI
+**Document:** `projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md`
+**Cycle:** 8 — Delivery / implémentation
+**Profil:** Critical
+**Typologie:** EVOL / CODE / TEST / DOC
+**Baseline:** SFIA v2.6
+**Date (CEST):** 2026-08-08 22:07 CEST
+**Date (UTC):** 2026-08-08 20:07 UTC
+
+---
+
+## A. Status / anti-claims
+
+| Claim | Status |
+|-------|--------|
+| Option C selected by Morris | **TRUE** |
+| Dual-gate = `PRE_WAS_SHADOW ∧ POST_IS_SHADOW` | **TRUE** |
+| Runtime implementation local | **TRUE** |
+| Temporal drift OFF→SHADOW addressed locally | **TRUE** |
+| Closed on main | **FALSE** |
+| SHADOW activated | **FALSE** |
+| Policy source selected | **FALSE** |
+| MONITOR activated | **FALSE** |
+| E1 authorized | **FALSE** |
+| Process-local cache / Map / Set / registry | **FALSE** |
+| Migration / durable eligibility state | **FALSE** |
+| Project commit / push / PR | **FALSE** |
+
+```text
+OPTION C DUAL-GATE DELIVERED LOCALLY —
+TEMPORAL MODE DRIFT ADDRESSED LOCALLY —
+PENDING DEDICATED QA —
+NOT CLOSED ON MAIN —
+SHADOW NOT ACTIVATED —
+POLICY SOURCE NOT SELECTED
+```
+
+---
+
+## B. Morris decision
+
+**Exact decision consumed:**
+
+> GO TEMPORAL SEMANTICS — OPTION C, puis Delivery Cycle 8 Critical, avec dual-gate PRE_WAS_SHADOW ∧ POST_IS_SHADOW et interdiction de cache process-local non borné.
+
+**Consumed by this Delivery:** transient `captureEligibility` + coordinator-local PRE gate + existing POST rollout re-read.
+**Not consumed:** SHADOW activation · policy source · MONITOR · E1 · thresholds · T6-ext · Product IAM · commit/push/PR.
+
+---
+
+## C. Architecture implemented
+
+```text
+PRE resolveProjectRollout
+  → captureEligibility ("eligible" iff pilot + PRE mode SHADOW)
+  → FinOpsEnforcementDecision (optional field)
+  → coordinateExecutionRun call-local variable
+  → captureFinOpsAfterAiSuccess PRE gate
+       "ineligible" → disabled / finops_pre_provider_capture_ineligible (no port call)
+       "eligible" | undefined → call capture port
+  → composeFinOpsT7ShadowExecutionDeps.captureUsage
+       POST resolveProjectRollout
+       mode === "SHADOW" required for capture
+```
+
+Transport: **coordinator-local only** for the duration of one `coordinateExecutionRun(...)`.
+No snapshot of full rollout mode. No durable state. No shared registry.
+
+---
+
+## D. Temporal matrix
+
+| Transition | PRE eligibility | POST mode | Capture |
+|------------|-----------------|-----------|---------|
+| OFF → OFF | ineligible | OFF | NO |
+| OFF → SHADOW (during provider) | ineligible | SHADOW | NO (PRE short-circuit) |
+| SHADOW → OFF (during provider) | eligible | OFF | NO (POST gate) |
+| SHADOW → SHADOW | eligible | SHADOW | YES (if other capture conditions hold) |
+
+---
+
+## E. State model
+
+- **NO CACHE**
+- **NO MAP / SET / WeakMap / WeakSet**
+- **NO AsyncLocalStorage eligibility registry**
+- **NO module-level mutable eligibility**
+- **NO DURABLE STATE / NO MIGRATION**
+- Eligibility lives only as a call-local `let` inside `coordinateExecutionRun`
+
+---
+
+## F. Files
+
+**MODIFY**
+
+1. `projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts`
+2. `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts`
+3. `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`
+4. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`
+5. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`
+
+**CREATE**
+
+6. This execution record (`158-…`)
+
+**Unchanged (required):** `finopsCapturePort.ts`, `finopsEnforcementPort.ts`, `composeFinOpsT7Runtime.ts`, `resolveFinOpsRollout.ts`, `types.rollout.ts`, `composeExecutionRunD2D3.ts`, `composeExecutionRunD2D3T7ShadowPilot.ts`, OPS1, migrations.
+
+---
+
+## G. Tests (real results)
+
+| Suite | Result |
+|-------|--------|
+| `t7.shadow-option-a.unit.test.ts` | **PASS** — 6/6 |
+| `t7.shadow-option-a.wiring.integration.test.ts` | **PASS** — 22/22 |
+| OA/OPS1 isolation probe + antiLegacy (doctrine + execution-contract) | **PASS** — 12/12 |
+| `npm run typecheck` | **PASS** |
+| `npm run lint` | **PASS** |
+| `npm run build` | **PASS** |
+| Full `npm test` | **PASS** — 159 files / 1616 tests |
+| `git diff --check` | **PASS** |
+
+Covered proofs include T-C01…C04 temporal matrix, PRE eligibility matrix, legacy D2D3 / generic enforcement without `captureEligibility`, concurrency A/B no cross-run contamination, never-block / signal_only, static absence of Map/Set/AsyncLocalStorage in the three runtime files.
+
+---
+
+## H. Reserves
+
+| Reserve | Status |
+|---------|--------|
+| TEMPORAL MODE DRIFT OFF→SHADOW | **ADDRESSED LOCALLY BY OPTION C — PENDING DEDICATED QA — NOT CLOSED ON MAIN** |
+| SHADOW PILOT POLICY SOURCE | **NOT SELECTED** |
+| R-T4-T3-SYNC-01 | **OPEN BEFORE MONITOR** |
+| R-PR-T2-API-01 | **OPEN MINOR** |
+| Calibration réelle | **REQUIRED BEFORE MONITOR** |
+| T6-ext | **NOT AUTHORIZED** |
+| Product IAM | **NOT_SELECTED** |
+| T5 | **OUT OF SCOPE** |
+| SHADOW | **NOT ACTIVATED** |
+| MONITOR | **NOT ACTIVATED** |
+| E1 | **NOT AUTHORIZED** |
+
+---
+
+## I. Next
+
+**Cycle 9 — Dedicated T7 SHADOW Temporal Dual-Gate QA** (Critical, distinct validation).
+
+Do **not** commit / push project / open PR from this Delivery.
+PR readiness only after QA + distinct Morris GO.
+Policy source and SHADOW activation remain separate decisions.
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
index 41fc4c4..f430c23 100644
--- a/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
@@ -21,12 +21,15 @@ import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastruc
 import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
 import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
 import { composeFinOpsT7ShadowExecutionDeps } from "@/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps";
+import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server/composeExecutionRunD2D3";
 import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
 import {
   closeFinOpsPool,
   createFinOpsPool,
 } from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
 import type { FinOpsRolloutMode } from "@/lib/oa/finops/application/types.rollout";
+import type { FinOpsCapturePort } from "@/lib/oa/finops/ports/finopsCapturePort";
+import type { FinOpsEnforcementPort } from "@/lib/oa/finops/ports/finopsEnforcementPort";

 const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
 const describeDb = DATABASE_URL ? describe : describe.skip;
@@ -160,7 +163,12 @@ describeDb("T7 SHADOW Option A — wiring integration", () => {
     expect(result.providerInvoked).toBe(true);
     expect(completeSpy).toHaveBeenCalled();
     expect(policy).not.toHaveBeenCalled();
-    expect(result.finopsCapture?.status).toBe("disabled");
+    expect(result.finopsCapture).toEqual(
+      expect.objectContaining({
+        status: "disabled",
+        reason: "finops_pre_provider_capture_ineligible",
+      }),
+    );
   });

   it("T7-SW02 pilot + missing row → default OFF inert", async () => {
@@ -480,4 +488,380 @@ describeDb("T7 SHADOW Option A — wiring integration", () => {
     expect(seen).toEqual(["sfia-studio-ops1"]);
     expect(deps.pilotProjectId).toBe("sfia-studio-ops1");
   });
+
+  it("T7-C01 OFF → OFF · PRE ineligible · capture disabled · no usage event", async () => {
+    await upsertMode(pool, PILOT, "OFF");
+    const { providers, completeSpy } = spyProviders();
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: async () => null,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "c01"),
+    );
+    expect(result.ok).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+    expect(result.finopsCapture).toEqual(
+      expect.objectContaining({
+        status: "disabled",
+        reason: "finops_pre_provider_capture_ineligible",
+      }),
+    );
+  });
+
+  it("T7-C02 SHADOW → SHADOW · PRE eligible · capture created/duplicate", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await seedProjection(pool, PILOT, "0.10000000");
+    const deps = composeFinOpsT7ShadowExecutionDeps({
+      pool,
+      nowIso: () => clockIso,
+      pilotProjectId: PILOT,
+      resolveShadowPolicy: async () => null,
+    });
+    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:c02",
+      correlationId: "corr:c02",
+      occurredAt: clockIso,
+    });
+    expect(decision.captureEligibility).toBe("eligible");
+    const { providers } = spyProviders();
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: async () => null,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "c02"),
+    );
+    expect(result.ok).toBe(true);
+    expect(["created", "duplicate", "failed"]).toContain(
+      result.finopsCapture!.status,
+    );
+  });
+
+  it("T7-C03 OFF → SHADOW mid-provider · PRE ineligible · capture short-circuited", async () => {
+    await upsertMode(pool, PILOT, "OFF");
+    const ai = new FakeAiExecutionAdapter();
+    const completeSpy = vi.spyOn(ai, "complete").mockImplementation(async () => {
+      await upsertMode(pool, PILOT, "SHADOW");
+      return {
+        kind: "success" as const,
+        completeness: "complete" as const,
+        redactedSummary: "TEST_ONLY flip OFF→SHADOW",
+        disclosureNotes: ["source=fake", "live=false"],
+        usage: {
+          status: "validated" as const,
+          inputTokens: 1,
+          outputTokens: 1,
+          unit: "tokens" as const,
+        },
+      };
+    });
+    const secretsAdapter = new FakeSecretSourceAdapter();
+    const providers = composeExecutionRunProviders({
+      ai,
+      git: new FakeGitReadAdapter({
+        repositoryAllowlist: [
+          "o/r",
+          "example/example",
+          "mcleland147/sfia-workspace",
+        ],
+        pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
+      }),
+      cursor: new FixtureCursorExecutionAdapter(),
+      secrets: {
+        resolve: (secretId) => secretsAdapter.resolve(secretId),
+      },
+      events: new RecordingExecutionEventSink(),
+    });
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: async () => null,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "c03"),
+    );
+    expect(result.ok).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+    expect(result.finopsCapture).toEqual(
+      expect.objectContaining({
+        status: "disabled",
+        reason: "finops_pre_provider_capture_ineligible",
+      }),
+    );
+    // POST would be SHADOW, but PRE gate must win (no retroactive capture).
+    const postMode = await createPostgresFinOpsRolloutStore(pool).readProjectRollout(
+      PILOT,
+    );
+    expect(postMode?.mode ?? "OFF").toBe("SHADOW");
+  });
+
+  it("T7-C04 SHADOW → OFF mid-provider · PRE eligible · POST disables capture", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await seedProjection(pool, PILOT, "0.10000000");
+    const ai = new FakeAiExecutionAdapter();
+    const completeSpy = vi.spyOn(ai, "complete").mockImplementation(async () => {
+      await upsertMode(pool, PILOT, "OFF");
+      return {
+        kind: "success" as const,
+        completeness: "complete" as const,
+        redactedSummary: "TEST_ONLY flip SHADOW→OFF",
+        disclosureNotes: ["source=fake", "live=false"],
+        usage: {
+          status: "validated" as const,
+          inputTokens: 1,
+          outputTokens: 1,
+          unit: "tokens" as const,
+        },
+      };
+    });
+    const secretsAdapter = new FakeSecretSourceAdapter();
+    const providers = composeExecutionRunProviders({
+      ai,
+      git: new FakeGitReadAdapter({
+        repositoryAllowlist: [
+          "o/r",
+          "example/example",
+          "mcleland147/sfia-workspace",
+        ],
+        pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
+      }),
+      cursor: new FixtureCursorExecutionAdapter(),
+      secrets: {
+        resolve: (secretId) => secretsAdapter.resolve(secretId),
+      },
+      events: new RecordingExecutionEventSink(),
+    });
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: async () => null,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "c04"),
+    );
+    expect(result.ok).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+    expect(result.finopsCapture).toEqual(
+      expect.objectContaining({
+        status: "disabled",
+        reason: "shadow_capture_inactive",
+      }),
+    );
+  });
+
+  it("T7-C05 PRE eligibility matrix · non-pilot/OFF/MONITOR/E1 ineligible · SHADOW eligible", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await upsertMode(pool, OTHER, "SHADOW");
+    const deps = composeFinOpsT7ShadowExecutionDeps({
+      pool,
+      nowIso: () => clockIso,
+      pilotProjectId: PILOT,
+      resolveShadowPolicy: async () => null,
+    });
+    const nonPilot = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: OTHER,
+      executionRunId: "run:c05a",
+      correlationId: "corr:c05a",
+      occurredAt: clockIso,
+    });
+    expect(nonPilot.captureEligibility).toBe("ineligible");
+
+    await upsertMode(pool, PILOT, "OFF");
+    const off = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:c05b",
+      correlationId: "corr:c05b",
+      occurredAt: clockIso,
+    });
+    expect(off.captureEligibility).toBe("ineligible");
+
+    await upsertMode(pool, PILOT, "MONITOR");
+    const monitor = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:c05c",
+      correlationId: "corr:c05c",
+      occurredAt: clockIso,
+    });
+    expect(monitor.captureEligibility).toBe("ineligible");
+
+    await upsertMode(pool, PILOT, "E1_ENFORCED");
+    const e1 = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:c05d",
+      correlationId: "corr:c05d",
+      occurredAt: clockIso,
+    });
+    expect(e1.captureEligibility).toBe("ineligible");
+
+    await upsertMode(pool, PILOT, "SHADOW");
+    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
+    const shadowNull = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:c05e",
+      correlationId: "corr:c05e",
+      occurredAt: clockIso,
+    });
+    expect(shadowNull.captureEligibility).toBe("eligible");
+
+    const depsThrow = composeFinOpsT7ShadowExecutionDeps({
+      pool,
+      nowIso: () => clockIso,
+      pilotProjectId: PILOT,
+      resolveShadowPolicy: async () => {
+        throw new Error("TEST_ONLY policy boom");
+      },
+    });
+    const shadowThrow = await depsThrow.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:c05f",
+      correlationId: "corr:c05f",
+      occurredAt: clockIso,
+    });
+    expect(shadowThrow.decision).toBe("failed");
+    expect(shadowThrow.captureEligibility).toBe("eligible");
+  });
+
+  it("T7-C06 legacy: no captureEligibility on generic enforcement → capture preserved", async () => {
+    let captureCalled = 0;
+    const capture: FinOpsCapturePort = {
+      async captureUsage() {
+        captureCalled += 1;
+        return {
+          status: "created",
+          eventId: "evt:legacy-c06",
+          dedupKey: "dedup:legacy-c06",
+        };
+      },
+    };
+    const enforcement: FinOpsEnforcementPort = {
+      async evaluateBeforeProvider() {
+        return { decision: "allow", reason: "generic_allow_no_eligibility" };
+      },
+    };
+    const { providers, completeSpy } = spyProviders();
+    const composition = composeExecutionRunD2D3({
+      providers,
+      clockIso,
+      finops: capture,
+      finopsEnforcement: enforcement,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "c06"),
+    );
+    expect(result.ok).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+    expect(captureCalled).toBe(1);
+    expect(result.finopsCapture?.status).toBe("created");
+  });
+
+  it("T7-C07 legacy: no finopsEnforcement · capture path preserved", async () => {
+    let captureCalled = 0;
+    const capture: FinOpsCapturePort = {
+      async captureUsage() {
+        captureCalled += 1;
+        return {
+          status: "created",
+          eventId: "evt:legacy-c07",
+          dedupKey: "dedup:legacy-c07",
+        };
+      },
+    };
+    const { providers, completeSpy } = spyProviders();
+    const composition = composeExecutionRunD2D3({
+      providers,
+      clockIso,
+      finops: capture,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "c07"),
+    );
+    expect(result.ok).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+    expect(captureCalled).toBe(1);
+    expect(result.finopsCapture?.status).toBe("created");
+  });
+
+  it("T7-C08 concurrency: A SHADOW-eligible and B OFF-ineligible do not contaminate", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await seedProjection(pool, PILOT, "0.10000000");
+    await upsertMode(pool, OTHER, "OFF");
+
+    // B uses OTHER as non-pilot under PILOT SHADOW adapter → always ineligible.
+    // A uses PILOT under SHADOW → eligible; flip OFF during A's provider to prove POST gate.
+    const aiA = new FakeAiExecutionAdapter();
+    vi.spyOn(aiA, "complete").mockImplementation(async () => {
+      await upsertMode(pool, PILOT, "OFF");
+      return {
+        kind: "success" as const,
+        completeness: "complete" as const,
+        redactedSummary: "TEST_ONLY concurrent A",
+        disclosureNotes: ["source=fake", "live=false"],
+        usage: {
+          status: "validated" as const,
+          inputTokens: 1,
+          outputTokens: 1,
+          unit: "tokens" as const,
+        },
+      };
+    });
+    const secretsA = new FakeSecretSourceAdapter();
+    const compositionA = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers: composeExecutionRunProviders({
+        ai: aiA,
+        git: new FakeGitReadAdapter({
+          repositoryAllowlist: [
+            "o/r",
+            "example/example",
+            "mcleland147/sfia-workspace",
+          ],
+          pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
+        }),
+        cursor: new FixtureCursorExecutionAdapter(),
+        secrets: { resolve: (id) => secretsA.resolve(id) },
+        events: new RecordingExecutionEventSink(),
+      }),
+      resolveShadowPolicy: async () => null,
+    });
+
+    await upsertMode(pool, PILOT, "SHADOW");
+    const { providers: providersB } = spyProviders();
+    const compositionB = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers: providersB,
+      resolveShadowPolicy: async () => null,
+    });
+
+    const [resultA, resultB] = await Promise.all([
+      compositionA.coordinate(coordinateInput(PILOT, "c08a")),
+      compositionB.coordinate(coordinateInput(OTHER, "c08b")),
+    ]);
+
+    expect(resultA.ok).toBe(true);
+    expect(resultB.ok).toBe(true);
+    // A: PRE eligible then POST OFF → shadow_capture_inactive
+    expect(resultA.finopsCapture).toEqual(
+      expect.objectContaining({
+        status: "disabled",
+        reason: "shadow_capture_inactive",
+      }),
+    );
+    // B: non-pilot PRE ineligible → coordinator short-circuit
+    expect(resultB.finopsCapture).toEqual(
+      expect.objectContaining({
+        status: "disabled",
+        reason: "finops_pre_provider_capture_ineligible",
+      }),
+    );
+  });
 });
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
index 009d464..25523e9 100644
--- a/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
@@ -42,6 +42,17 @@ describe("T7 SHADOW Option A — unit", () => {
     ).toBe("failed");
   });

+  it("T7-C-U01 ensureShadowNeverBlocks preserves captureEligibility eligible", () => {
+    const out = ensureShadowNeverBlocks({
+      decision: "block",
+      reason: "threshold_crossed_enforce",
+      captureEligibility: "eligible",
+    });
+    expect(out.decision).toBe("failed");
+    expect(out.reason).toBe("shadow_block_forbidden");
+    expect(out.captureEligibility).toBe("eligible");
+  });
+
   it("T7-SW15 pilot constant equals OPS1_PROJECT_KEY sfia-studio-ops1", () => {
     expect(T7_SHADOW_PILOT_PROJECT_ID).toBe("sfia-studio-ops1");
     expect(T7_SHADOW_PILOT_PROJECT_ID).toBe(OPS1_PROJECT_KEY);
@@ -65,8 +76,29 @@ describe("T7 SHADOW Option A — unit", () => {
     expect(adapter).toMatch(/effect:\s*"signal_only"/);
     expect(adapter).toMatch(/shadow_block_forbidden/);
     expect(adapter).toMatch(/rollout_not_shadow_inert/);
+    expect(adapter).toMatch(/captureEligibility/);
+    expect(adapter).not.toMatch(/new Map\s*\(/);
+    expect(adapter).not.toMatch(/new Set\s*\(/);
+    expect(adapter).not.toMatch(/WeakMap/);
+    expect(adapter).not.toMatch(/AsyncLocalStorage/);
     expect(pilot).not.toMatch(/E1_ENFORCED/);
     expect(pilot).not.toMatch(/effect:\s*"enforce"/);
     expect(adapter).not.toMatch(/upsertProjectRollout/);
   });
+
+  it("T7-C-U02 static: no process-local eligibility registry in runtime trio", () => {
+    const roots = [
+      "lib/oa/finops/application/types.enforcement.ts",
+      "lib/oa/execution-run/application/coordinateExecutionRun.ts",
+      "lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts",
+    ];
+    for (const rel of roots) {
+      const src = readFileSync(path.join(process.cwd(), rel), "utf8");
+      expect(src).not.toMatch(/new Map\s*\(/);
+      expect(src).not.toMatch(/new Set\s*\(/);
+      expect(src).not.toMatch(/WeakMap/);
+      expect(src).not.toMatch(/WeakSet/);
+      expect(src).not.toMatch(/AsyncLocalStorage/);
+    }
+  });
 });
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
index edc9dee..1fddb6c 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
@@ -248,6 +248,13 @@ async function captureFinOpsAfterAiSuccess(args: {
   readonly run: ExecutionRun;
   readonly usage: UsageSummary;
   readonly providerSucceeded: boolean;
+  /**
+   * Transient Option C PRE hint from evaluateBeforeProvider.
+   * - "ineligible" ⇒ short-circuit capture (no port call)
+   * - "eligible" | undefined ⇒ call capture port (POST gate / legacy)
+   * Local to this coordinateExecutionRun call only — no registry/cache.
+   */
+  readonly captureEligibility?: "eligible" | "ineligible";
 }): Promise<FinOpsCaptureDiagnostic> {
   if (args.run.intent.requestedLane !== "ai") {
     return finopsNotAttempted("non_ai_lane");
@@ -258,6 +265,14 @@ async function captureFinOpsAfterAiSuccess(args: {
   if (!args.deps.finops) {
     return finopsDisabled();
   }
+  // Option C PRE gate: captureEligibility === "ineligible" prevents capture port call.
+  // undefined preserves legacy FinOps compositions without temporal gate.
+  if (args.captureEligibility === "ineligible") {
+    return {
+      status: "disabled",
+      reason: "finops_pre_provider_capture_ineligible",
+    };
+  }
   try {
     return await args.deps.finops.captureUsage({
       projectId: args.run.context.projectId,
@@ -1053,6 +1068,9 @@ export async function coordinateExecutionRun(
   // T4 ENF-B: after create + pre-engagement, before intent_valid / provider.
   // Absent dependency ⇒ inert. allow/soft_signal/failed/throw ⇒ fail-open continue.
   // block ⇒ HUMAN_GATE_REQUIRED; provider never attempted/invoked.
+  // Option C: optional captureEligibility is kept in this call-local variable only
+  // (no Map/registry/cache). Undefined ⇒ legacy capture behavior.
+  let captureEligibility: FinOpsEnforcementDecision["captureEligibility"];
   if (deps.finopsEnforcement) {
     let enforcementDecision: FinOpsEnforcementDecision;
     try {
@@ -1070,6 +1088,8 @@ export async function coordinateExecutionRun(
       };
     }

+    captureEligibility = enforcementDecision.captureEligibility;
+
     if (enforcementDecision.decision === "block") {
       const enforcementFailure = normalizedFailure({
         family: "human_gate_required",
@@ -1188,12 +1208,14 @@ export async function coordinateExecutionRun(
   }

   // Fail-open FinOps capture: never convert provider success into user failure.
+  // Option C: pass call-local PRE captureEligibility (undefined = legacy).
   const runForCapture = terminal.result.run ?? current;
   const finopsCapture = await captureFinOpsAfterAiSuccess({
     deps,
     run: runForCapture,
     usage: terminal.usage,
     providerSucceeded,
+    captureEligibility,
   });

   if (!terminal.result.ok) {
diff --git a/projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts b/projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
index 88f8c34..937c4da 100644
--- a/projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
+++ b/projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
@@ -76,12 +76,29 @@ export type FinOpsEnforcementDecisionProvenance = {
   readonly rebuiltAt: string;
 };

+/**
+ * Transient T7 SHADOW Option C dual-gate hint (PRE_WAS_SHADOW).
+ *
+ * Anti-claims:
+ * - optional — absent means legacy capture behavior (no temporal gate)
+ * - internal only — not a public/product API
+ * - transient — lives only within one coordinateExecutionRun call stack
+ * - not persisted — not a durable event / DB column / audit SoT
+ * - does not enforce provider path — capture gate ≠ provider gate
+ */
+export type FinOpsCaptureEligibility = "eligible" | "ineligible";
+
 export type FinOpsEnforcementDecision = {
   readonly decision: FinOpsEnforcementDecisionKind;
   readonly reason: string;
   /** True when FinOps-side technical failure — never means BLOCK. */
   readonly finopsSideOnly?: true;
   readonly provenance?: FinOpsEnforcementDecisionProvenance;
+  /**
+   * Optional transient capture eligibility from PRE FinOps evaluation.
+   * Absent ⇒ preserve historical capture behavior for non-T7 / legacy ports.
+   */
+  readonly captureEligibility?: FinOpsCaptureEligibility;
 };

 export type EvaluateFinOpsEnforcementInput = {
diff --git a/projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts b/projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
index 28df1e4..a4f3bb9 100644
--- a/projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
+++ b/projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
@@ -90,23 +90,39 @@ function assertServerOnly(): void {
   }
 }

-function allow(reason: string): FinOpsEnforcementDecision {
-  return { decision: "allow", reason };
+function allow(
+  reason: string,
+  captureEligibility: FinOpsEnforcementDecision["captureEligibility"],
+): FinOpsEnforcementDecision {
+  return {
+    decision: "allow",
+    reason,
+    ...(captureEligibility ? { captureEligibility } : {}),
+  };
 }

-function failed(reason: string): FinOpsEnforcementDecision {
-  return { decision: "failed", reason, finopsSideOnly: true };
+function failed(
+  reason: string,
+  captureEligibility: FinOpsEnforcementDecision["captureEligibility"],
+): FinOpsEnforcementDecision {
+  return {
+    decision: "failed",
+    reason,
+    finopsSideOnly: true,
+    ...(captureEligibility ? { captureEligibility } : {}),
+  };
 }

 /**
  * Defense-in-depth: SHADOW path must never surface `block` to the coordinator.
  * Exported for focused unit proof (T7-SW06).
+ * Preserves optional transient captureEligibility (Option C PRE latch).
  */
 export function ensureShadowNeverBlocks(
   decision: FinOpsEnforcementDecision,
 ): FinOpsEnforcementDecision {
   if (decision.decision === "block") {
-    return failed("shadow_block_forbidden");
+    return failed("shadow_block_forbidden", decision.captureEligibility);
   }
   return decision;
 }
@@ -145,13 +161,17 @@ export function composeFinOpsT7ShadowExecutionDeps(
   const finopsEnforcement: FinOpsEnforcementPort = {
     async evaluateBeforeProvider(evalInput) {
       let mode: FinOpsT7ShadowDecisionDiagnostic["mode"] = "unresolved";
+      // Option C: PRE_WAS_SHADOW only after pilot + resolved SHADOW mode.
+      // Policy success/failure does not affect temporal eligibility.
+      let captureEligibility: FinOpsEnforcementDecision["captureEligibility"] =
+        "ineligible";
       try {
         const projectId =
           typeof evalInput.projectId === "string"
             ? evalInput.projectId.trim()
             : "";
         if (!projectId || projectId !== pilotProjectId) {
-          const decision = allow("non_pilot_inert");
+          const decision = allow("non_pilot_inert", "ineligible");
           await emitShadowDecision(input.onShadowDecision, {
             projectId: projectId || "",
             mode: "OFF",
@@ -166,7 +186,7 @@ export function composeFinOpsT7ShadowExecutionDeps(
         try {
           instruction = await t7.resolveProjectRollout(projectId);
         } catch {
-          const decision = failed("rollout_resolve_failed");
+          const decision = failed("rollout_resolve_failed", "ineligible");
           await emitShadowDecision(input.onShadowDecision, {
             projectId,
             mode: "unresolved",
@@ -181,7 +201,7 @@ export function composeFinOpsT7ShadowExecutionDeps(

         if (instruction.mode !== "SHADOW") {
           // OFF / MONITOR / E1_ENFORCED / inert — this adapter does not activate them.
-          const decision = allow("rollout_not_shadow_inert");
+          const decision = allow("rollout_not_shadow_inert", "ineligible");
           await emitShadowDecision(input.onShadowDecision, {
             projectId,
             mode,
@@ -192,6 +212,9 @@ export function composeFinOpsT7ShadowExecutionDeps(
           return decision;
         }

+        // PRE_WAS_SHADOW proven — eligibility is mode-based, not policy-based.
+        captureEligibility = "eligible";
+
         const port = createFinOpsEnforcementPort({
           projection,
           resolvePolicy: async (policyInput) => {
@@ -211,9 +234,11 @@ export function composeFinOpsT7ShadowExecutionDeps(
           },
         });

-        const decision = ensureShadowNeverBlocks(
-          await port.evaluateBeforeProvider(evalInput),
-        );
+        const evaluated = await port.evaluateBeforeProvider(evalInput);
+        const decision = ensureShadowNeverBlocks({
+          ...evaluated,
+          captureEligibility,
+        });

         await emitShadowDecision(input.onShadowDecision, {
           projectId,
@@ -224,7 +249,8 @@ export function composeFinOpsT7ShadowExecutionDeps(
         });
         return decision;
       } catch {
-        const decision = failed("shadow_adapter_failed");
+        // If PRE SHADOW was already proven, keep eligibility across adapter failure.
+        const decision = failed("shadow_adapter_failed", captureEligibility);
         await emitShadowDecision(input.onShadowDecision, {
           projectId:
             typeof evalInput.projectId === "string"

## Appendix B — COMPLETE committed 158 content

# 158 — FinOps T7 SHADOW Temporal Semantics Option C — Hybrid Dual-Gate Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md`
**Cycle:** 8 — Delivery / implémentation
**Profil:** Critical
**Typologie:** EVOL / CODE / TEST / DOC
**Baseline:** SFIA v2.6
**Date (CEST):** 2026-08-08 22:07 CEST
**Date (UTC):** 2026-08-08 20:07 UTC

---

## A. Status / anti-claims

| Claim | Status |
|-------|--------|
| Option C selected by Morris | **TRUE** |
| Dual-gate = `PRE_WAS_SHADOW ∧ POST_IS_SHADOW` | **TRUE** |
| Runtime implementation local | **TRUE** |
| Temporal drift OFF→SHADOW addressed locally | **TRUE** |
| Closed on main | **FALSE** |
| SHADOW activated | **FALSE** |
| Policy source selected | **FALSE** |
| MONITOR activated | **FALSE** |
| E1 authorized | **FALSE** |
| Process-local cache / Map / Set / registry | **FALSE** |
| Migration / durable eligibility state | **FALSE** |
| Project commit / push / PR | **FALSE** |

```text
OPTION C DUAL-GATE DELIVERED LOCALLY —
TEMPORAL MODE DRIFT ADDRESSED LOCALLY —
PENDING DEDICATED QA —
NOT CLOSED ON MAIN —
SHADOW NOT ACTIVATED —
POLICY SOURCE NOT SELECTED
```

---

## B. Morris decision

**Exact decision consumed:**

> GO TEMPORAL SEMANTICS — OPTION C, puis Delivery Cycle 8 Critical, avec dual-gate PRE_WAS_SHADOW ∧ POST_IS_SHADOW et interdiction de cache process-local non borné.

**Consumed by this Delivery:** transient `captureEligibility` + coordinator-local PRE gate + existing POST rollout re-read.
**Not consumed:** SHADOW activation · policy source · MONITOR · E1 · thresholds · T6-ext · Product IAM · commit/push/PR.

---

## C. Architecture implemented

```text
PRE resolveProjectRollout
  → captureEligibility ("eligible" iff pilot + PRE mode SHADOW)
  → FinOpsEnforcementDecision (optional field)
  → coordinateExecutionRun call-local variable
  → captureFinOpsAfterAiSuccess PRE gate
       "ineligible" → disabled / finops_pre_provider_capture_ineligible (no port call)
       "eligible" | undefined → call capture port
  → composeFinOpsT7ShadowExecutionDeps.captureUsage
       POST resolveProjectRollout
       mode === "SHADOW" required for capture
```

Transport: **coordinator-local only** for the duration of one `coordinateExecutionRun(...)`.
No snapshot of full rollout mode. No durable state. No shared registry.

---

## D. Temporal matrix

| Transition | PRE eligibility | POST mode | Capture |
|------------|-----------------|-----------|---------|
| OFF → OFF | ineligible | OFF | NO |
| OFF → SHADOW (during provider) | ineligible | SHADOW | NO (PRE short-circuit) |
| SHADOW → OFF (during provider) | eligible | OFF | NO (POST gate) |
| SHADOW → SHADOW | eligible | SHADOW | YES (if other capture conditions hold) |

---

## E. State model

- **NO CACHE**
- **NO MAP / SET / WeakMap / WeakSet**
- **NO AsyncLocalStorage eligibility registry**
- **NO module-level mutable eligibility**
- **NO DURABLE STATE / NO MIGRATION**
- Eligibility lives only as a call-local `let` inside `coordinateExecutionRun`

---

## F. Files

**MODIFY**

1. `projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts`
2. `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts`
3. `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`
4. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`
5. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`

**CREATE**

6. This execution record (`158-…`)

**Unchanged (required):** `finopsCapturePort.ts`, `finopsEnforcementPort.ts`, `composeFinOpsT7Runtime.ts`, `resolveFinOpsRollout.ts`, `types.rollout.ts`, `composeExecutionRunD2D3.ts`, `composeExecutionRunD2D3T7ShadowPilot.ts`, OPS1, migrations.

---

## G. Tests (real results)

| Suite | Result |
|-------|--------|
| `t7.shadow-option-a.unit.test.ts` | **PASS** — 6/6 |
| `t7.shadow-option-a.wiring.integration.test.ts` | **PASS** — 22/22 |
| OA/OPS1 isolation probe + antiLegacy (doctrine + execution-contract) | **PASS** — 12/12 |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** |
| `npm run build` | **PASS** |
| Full `npm test` | **PASS** — 159 files / 1616 tests |
| `git diff --check` | **PASS** |

Covered proofs include T-C01…C04 temporal matrix, PRE eligibility matrix, legacy D2D3 / generic enforcement without `captureEligibility`, concurrency A/B no cross-run contamination, never-block / signal_only, static absence of Map/Set/AsyncLocalStorage in the three runtime files.

---

## H. Reserves

| Reserve | Status |
|---------|--------|
| TEMPORAL MODE DRIFT OFF→SHADOW | **ADDRESSED LOCALLY BY OPTION C — PENDING DEDICATED QA — NOT CLOSED ON MAIN** |
| SHADOW PILOT POLICY SOURCE | **NOT SELECTED** |
| R-T4-T3-SYNC-01 | **OPEN BEFORE MONITOR** |
| R-PR-T2-API-01 | **OPEN MINOR** |
| Calibration réelle | **REQUIRED BEFORE MONITOR** |
| T6-ext | **NOT AUTHORIZED** |
| Product IAM | **NOT_SELECTED** |
| T5 | **OUT OF SCOPE** |
| SHADOW | **NOT ACTIVATED** |
| MONITOR | **NOT ACTIVATED** |
| E1 | **NOT AUTHORIZED** |

---

## I. Next

**Cycle 9 — Dedicated T7 SHADOW Temporal Dual-Gate QA** (Critical, distinct validation).

Do **not** commit / push project / open PR from this Delivery.
PR readiness only after QA + distinct Morris GO.
Policy source and SHADOW activation remain separate decisions.
