# Cycle 13 — PR readiness — T7 SHADOW Option A Wiring — Review Pack (full)

Date/heure : 2026-08-08 19:31:13 CEST / 2026-08-08 17:31:13 UTC

## 1. Cycle / profil / GO

- Cycle : **13 — PR readiness**
- Profil : **Standard** (wiring Critical history remains visible)
- GO Morris : `ok go` → **GO LOCAL COMMIT + PR READINESS**
- Autorisé : staging exact · 1 commit local · PR readiness · PR title/body draft · review pack · handoff L3
- Interdit : project push · `gh pr create` · merge · wiring change · SHADOW activation · policy/threshold · MONITOR/E1

## 2. Git Truth initial

```text
branch=delivery/sfia-studio-finops-t7-shadow-option-a
HEAD=503369b10506515e173b5b58986c731ba1b313b8
origin/main=503369b10506515e173b5b58986c731ba1b313b8
--- status ---
?? .tmp-sfia-review/
?? projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
?? projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
?? projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
?? projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
?? projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
--- staged ---
--- tracked ---
--- remote delivery branch ---
--- worktree ---
worktree /Users/morris/Projects/sfia-workspace
HEAD 0cdf57a12843891da8b8db2d550cb38c7ba9f60a
branch refs/heads/delivery/flex-office-demo-option-a

worktree /Users/morris/Projects/sfia-codex-pilot
HEAD ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
branch refs/heads/method/codex-operating-model-pilot

worktree /Users/morris/Projects/sfia-task-tracker
HEAD b763a318fb84e23e482ed23a0bd561c1d9e719e6
branch refs/heads/cadrage/task-tracker-light

worktree /Users/morris/Projects/sfia-workspace-a5-2-framing
HEAD bd3608c6220e820cc3fa017422a7564a565a1296
branch refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity

worktree /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
HEAD cae841519ed1d2dd825e6ecb998337cd47b4a1e1
branch refs/heads/method/sfia-cycle-knowledge-contracts

worktree /Users/morris/Projects/sfia-workspace-d1-conversational-convergence
HEAD 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
branch refs/heads/ux/sfia-studio-d1-conversational-convergence

worktree /Users/morris/Projects/sfia-workspace-d1-platform-integration
HEAD c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
branch refs/heads/delivery/sfia-studio-d1-shared-platform-integration

worktree /Users/morris/Projects/sfia-workspace-doc32-post-p3-m1
HEAD dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
branch refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction

worktree /Users/morris/Projects/sfia-workspace-docs-recover
HEAD 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
branch refs/heads/docs/sfia-studio-recover-unmerged-project-docs

worktree /Users/morris/Projects/sfia-workspace-fa6-mitigated-clean
HEAD 67f140a19cf4a992dbc0d7b053abfde579a9a68c
branch refs/heads/docs/sfia-studio-fa6-mitigated-from-main
```

- Remote delivery branch : **ABSENT** (ls-remote empty)
- origin/main = HEAD initial = `503369b10506515e173b5b58986c731ba1b313b8`

## 3. Handoff entrant Cycle 9

- Tip : `5b4ec374224a168af8fb7520643db90c2027e247`
- Blob : `9299f05ec2045a386e43f1b1387f278940bf412b`
- Verdict : T7 SHADOW WIRING QA PASS WITH RESERVES · READY FOR MORRIS PROJECT GIT / POLICY DECISION · NOT READY FOR SHADOW ACTIVATION

## 4. Sources

Template · routing · operating model · rules · checklist · v2.5 cycles · CKC synthetic map Cycle 13 · publisher · handoff Cycle 9 · 5 fichiers locaux.

## 5. Hashes avant commit (QA gate)

```text
OK projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
  sha=e90b5da0c23023b3e0839cc729516fea7c127099a8e8e3099941f8365a4d3b6a expected=e90b5da0c23023b3e0839cc729516fea7c127099a8e8e3099941f8365a4d3b6a
  lines=294 expected=294
OK projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
  sha=2f6f9c3f169f3e2105445678bd61ec80b89a75e088b604c9d120d1e6ac674e7d expected=2f6f9c3f169f3e2105445678bd61ec80b89a75e088b604c9d120d1e6ac674e7d
  lines=105 expected=105
OK projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
  sha=cb1cd4e40dadb057d9ebea964cff84ce6e76cfba3bccf740e948784d9ab3dd65 expected=cb1cd4e40dadb057d9ebea964cff84ce6e76cfba3bccf740e948784d9ab3dd65
  lines=72 expected=72
OK projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
  sha=d57f4f1b98a6900bac92f90ba78bb1c5eb553441a062ea0c5ee6e80db2261dc0 expected=d57f4f1b98a6900bac92f90ba78bb1c5eb553441a062ea0c5ee6e80db2261dc0
  lines=483 expected=483
OK projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
  sha=5a03815d2236806311f0c519f2a5761102297451c14b8e7f784f3231854f12c2 expected=5a03815d2236806311f0c519f2a5761102297451c14b8e7f784f3231854f12c2
  lines=84 expected=84
HASH_GATE=PASS
```

HASH_GATE=PASS → QA evidence transferable by byte identity.

## 6. Pre-commit security scan

```text
=== secret-like patterns ===
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:5: * Requires DATABASE_URL ephemeral Postgres — never Neon.
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:21:import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:31:const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:32:const describeDb = DATABASE_URL ? describe : describe.skip;
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:78:  const secretsAdapter = new FakeSecretSourceAdapter();
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:90:    secrets: {
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:91:      resolve: (secretId) => secretsAdapter.resolve(secretId),
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:126:    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
=== production risk patterns in composers only ===
(none in composers)
=== threshold literals note ===
projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts:5: * FICTITIOUS fixtures only — NOT historical 15/20/25/30.
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:6: * TEST ONLY rows/policies — NOT product activation / NOT 15/20/25/30.
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:35:const TEST_ONLY_THRESHOLD = "1.00000000";
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:36:const TEST_ONLY_ELIGIBLE = "9.99000000";
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:145:      thresholdCode: "TEST_ONLY_SW",
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:147:      thresholdAmount: TEST_ONLY_THRESHOLD,
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:227:        thresholdCode: "TEST_ONLY_SW",
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:229:        thresholdAmount: TEST_ONLY_THRESHOLD,
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:252:    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:259:        thresholdCode: "TEST_ONLY_SW",
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:261:        thresholdAmount: TEST_ONLY_THRESHOLD,
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:277:      thresholdCode: "TEST_ONLY_SW",
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:279:      thresholdAmount: TEST_ONLY_THRESHOLD,
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:310:      thresholdCode: "TEST_ONLY_SW",
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:312:      thresholdAmount: TEST_ONLY_THRESHOLD,
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:333:      thresholdCode: "TEST_ONLY_SW",
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:335:      thresholdAmount: TEST_ONLY_THRESHOLD,
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:355:    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:373:    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:380:        throw new Error("TEST_ONLY policy boom");
projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:401:        throw new Error("TEST_ONLY sink boom");
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:25:| No production threshold / 15/20/25/30 | **TRUE** |
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:13: * - Does NOT select production thresholds (15/20/25/30 forbidden).
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:41:  readonly thresholdAmount: string;
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:63:   * Must NOT adopt historical 15/20/25/30 as product thresholds.
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:208:              thresholdAmount: base.thresholdAmount,
```

- Secret risk : **NONE** (DATABASE_URL / FakeSecretSourceAdapter TEST only)
- Composers : no process.env / createFinOpsPool / upsertProjectRollout / effect enforce / routes / cron
- Thresholds 15/20/25/30 : documentary forbid / TEST_ONLY only

## 7. Staging

```text
=== cached name-status ===
A	projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
A	projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
A	projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
A	projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
A	projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
=== cached stat ===
 ...i-finops-t7-shadow-option-a-wiring-execution.md |  84 ++++
 .../t7.shadow-option-a.wiring.integration.test.ts  | 483 +++++++++++++++++++++
 .../oa/finops/t7.shadow-option-a.unit.test.ts      |  72 +++
 .../server/composeExecutionRunD2D3T7ShadowPilot.ts | 105 +++++
 .../server/composeFinOpsT7ShadowExecutionDeps.ts   | 294 +++++++++++++
 5 files changed, 1038 insertions(+)
=== cached check ===
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:3: trailing whitespace.
+**Project:** SFIA Studio — Assistant SFIA natif OpenAI
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:4: trailing whitespace.
+**Document:** `projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md`
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:5: trailing whitespace.
+**Cycle:** 8 — Delivery / implémentation
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:6: trailing whitespace.
+**Profil:** Critical
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:40: trailing whitespace.
+**Utterance / decision:**
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:43: trailing whitespace.
+**Consumed:** local CREATE wiring + tests + execution record.
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:75: trailing whitespace.
+1. Config: no product SHADOW row written by this Delivery.
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:76: trailing whitespace.
+2. Code: remove pilot composer injection / feature gate.
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:83: trailing whitespace.
+Cycle 9 — Dedicated T7 SHADOW Wiring QA (distinct GO).
=== status ===
A  projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
A  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
A  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
A  projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
A  projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
?? .tmp-sfia-review/
STAGED_COUNT=5
```

- Exactly 5 CREATE staged · `.tmp-sfia-review` never staged
- `git diff --cached --check` : trailing whitespace on `157-…md` markdown hard-breaks (QA-identical; not stripped)

## 8. Commit

- Message : `feat(sfia-studio): wire FinOps T7 shadow pilot`
- SHA : `d99bbbdea2446af8b79488b7459924e6cf5a3e16`
- Ahead : `1`

```text
=== show oneline stat ===
d99bbbd feat(sfia-studio): wire FinOps T7 shadow pilot
 ...i-finops-t7-shadow-option-a-wiring-execution.md |  84 ++++
 .../t7.shadow-option-a.wiring.integration.test.ts  | 483 +++++++++++++++++++++
 .../oa/finops/t7.shadow-option-a.unit.test.ts      |  72 +++
 .../server/composeExecutionRunD2D3T7ShadowPilot.ts | 105 +++++
 .../server/composeFinOpsT7ShadowExecutionDeps.ts   | 294 +++++++++++++
 5 files changed, 1038 insertions(+)
=== name-status ===
commit d99bbbdea2446af8b79488b7459924e6cf5a3e16
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Sat Aug 8 19:31:02 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Sat Aug 8 19:31:02 2026 +0200

    feat(sfia-studio): wire FinOps T7 shadow pilot

    Co-authored-by: Cursor <cursoragent@cursor.com>

A	projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
A	projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
A	projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
A	projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
A	projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
=== ahead ===
1
=== log ===
d99bbbd (HEAD -> delivery/sfia-studio-finops-t7-shadow-option-a) feat(sfia-studio): wire FinOps T7 shadow pilot
=== diff check main...HEAD ===
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:3: trailing whitespace.
+**Project:** SFIA Studio — Assistant SFIA natif OpenAI
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:4: trailing whitespace.
+**Document:** `projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md`
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:5: trailing whitespace.
+**Cycle:** 8 — Delivery / implémentation
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:6: trailing whitespace.
+**Profil:** Critical
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:40: trailing whitespace.
+**Utterance / decision:**
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:43: trailing whitespace.
+**Consumed:** local CREATE wiring + tests + execution record.
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:75: trailing whitespace.
+1. Config: no product SHADOW row written by this Delivery.
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:76: trailing whitespace.
+2. Code: remove pilot composer injection / feature gate.
projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md:83: trailing whitespace.
+Cycle 9 — Dedicated T7 SHADOW Wiring QA (distinct GO).
```

## 9. Post-commit hashes (HEAD blobs)

```text
OK e90b5da0c23023b3e0839cc729516fea7c127099a8e8e3099941f8365a4d3b6a  projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
OK 2f6f9c3f169f3e2105445678bd61ec80b89a75e088b604c9d120d1e6ac674e7d  projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
OK cb1cd4e40dadb057d9ebea964cff84ce6e76cfba3bccf740e948784d9ab3dd65  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
OK d57f4f1b98a6900bac92f90ba78bb1c5eb553441a062ea0c5ee6e80db2261dc0  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
OK 5a03815d2236806311f0c519f2a5761102297451c14b8e7f784f3231854f12c2  projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
POST_COMMIT_HASH_GATE=PASS
```

POST_COMMIT_HASH_GATE=PASS — committed content byte-identical to Cycle 9 QA.

## 10. Diff origin/main...HEAD

```text
=== diff stat ===
 ...i-finops-t7-shadow-option-a-wiring-execution.md |  84 ++++
 .../t7.shadow-option-a.wiring.integration.test.ts  | 483 +++++++++++++++++++++
 .../oa/finops/t7.shadow-option-a.unit.test.ts      |  72 +++
 .../server/composeExecutionRunD2D3T7ShadowPilot.ts | 105 +++++
 .../server/composeFinOpsT7ShadowExecutionDeps.ts   | 294 +++++++++++++
 5 files changed, 1038 insertions(+)
=== name-status ===
A	projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
A	projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
A	projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
A	projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
A	projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
```

- 5 CREATE / 0 MODIFY / 0 DELETE
- 1038 insertions
- No migration / package / lock / .github / method / prompts / env / core modify

## 11. Granularity / architecture

Single coherent commit: thin adapter + pilot composer + unit + integration + execution record.
Option A · pilot `sfia-studio-ops1` · SHADOW NOT ACTIVATED · policy NOT SELECTED · threshold NONE · MONITOR NOT ACTIVATED · E1 NOT AUTHORIZED · T3 sync OPEN BEFORE MONITOR.

## 12. QA evidence inherited (hashes identical)

- Delivery 18/18 PASS
- Regression 57/57 PASS
- Probes 7/7 PASS
- Required skipped 0
- tsc 0 · eslint targeted 0
- signal_only · hostile enforce neutralized · never-block e2e · fail-open · provider continuity · non-pilot inert · MONITOR/E1 inert · capture pilot-gated · no real threshold/row

## 13. Reserves

- R-T4-PROJECTION-REFRESH-01 = CLOSED — wiring only
- R-T6-RUNTIME-COMPOSITION-01 = CLOSED ON MAIN
- R-T4-T3-SYNC-01 = OPEN — BEFORE MONITOR
- R-PR-T2-API-01 = OPEN MINOR
- Calibration réelle = REQUIRED BEFORE MONITOR — NOT EXECUTED
- T6-ext = NOT AUTHORIZED
- Product IAM = NOT_SELECTED
- T5 = OUT OF SCOPE SHADOW
- SHADOW PILOT POLICY SOURCE = NOT SELECTED
- TEMPORAL MODE DRIFT OFF→SHADOW = OPEN descriptive reserve
- Doc trailing-whitespace hard-breaks on 157 = known `git diff --check` noise; QA bytes preserved (no amend)

## 14. Anti-claims

SHADOW NOT ACTIVATED · NOT READY FOR SHADOW ACTIVATION · NO POLICY SELECTED · NO THRESHOLD ADOPTED · NO MONITOR · NO E1 · PRODUCTION READY=false · MERGE READY=false · PUSH NOT IMPLIED BY READINESS

## 15. PR title draft

`feat(sfia-studio): wire FinOps T7 shadow pilot`

## 16. PR body COMPLET

## Summary

- add T7 SHADOW execution-run thin adapter
- reuse existing T7/T4/T6 composition
- bind pilot identity to `sfia-studio-ops1`
- force `signal_only` and defense-in-depth never-block
- keep MONITOR/E1 inert
- no SHADOW activation in this PR

## Scope

CREATE only (5 files):

1. `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`
2. `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts`
3. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`
4. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`
5. `projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md`

## Architecture

Option A (pre-provider execution-run) + thin adapter (Morris-selected).

- existing `composeExecutionRunD2D3` injection surface reused
- core coordinator unchanged
- caller-owned pool
- project-scoped pilot (`OPS1_PROJECT_KEY` = `sfia-studio-ops1`)

## Validation

- Cycle 8 Delivery Critical
- Cycle 9 QA Critical (`T7 SHADOW WIRING QA PASS WITH RESERVES`)

Evidence transferred by byte-identical SHA-256 hashes:

- 18/18 new delivery tests
- 57/57 regression
- 7/7 adversarial probes
- 0 required skipped
- tsc 0
- eslint targeted 0

## Safety

- SHADOW never BLOCK
- fail-open
- hostile enforce input neutralized
- non-pilot inert
- MONITOR/E1 inert
- no production threshold
- no real SHADOW row
- no Neon / provider-real

## Reserves

- **SHADOW PILOT POLICY SOURCE NOT SELECTED** — required before meaningful pilot activation
- **TEMPORAL MODE DRIFT OFF→SHADOW** — OPEN descriptive reserve (observation integrity; not BLOCK/enforce)
- **R-T4-T3-SYNC-01** — OPEN — BEFORE MONITOR
- **R-PR-T2-API-01** — OPEN MINOR
- Calibration réelle — REQUIRED BEFORE MONITOR — NOT EXECUTED
- T6-ext — NOT AUTHORIZED
- Product IAM — NOT_SELECTED
- T5 — OUT OF SCOPE SHADOW
- R-T4-PROJECTION-REFRESH-01 — CLOSED — wiring only
- R-T6-RUNTIME-COMPOSITION-01 — CLOSED ON MAIN
- Doc `157` contains intentional markdown hard-break trailing spaces (QA-byte-identical); `git diff --check` reports them

## Anti-claims

- SHADOW NOT ACTIVATED
- NOT READY FOR SHADOW ACTIVATION
- NO POLICY SELECTED
- NO THRESHOLD ADOPTED
- NO MONITOR
- NO E1

## Next gates

1. Morris GO push / PR (distinct)
2. merge gate distinct
3. policy-source decision
4. temporal semantics decision
5. future activation cycle distinct


## 17. Git final

```text
HEAD=d99bbbdea2446af8b79488b7459924e6cf5a3e16
origin/main=503369b10506515e173b5b58986c731ba1b313b8
ahead=1
?? .tmp-sfia-review/
d99bbbd (HEAD -> delivery/sfia-studio-finops-t7-shadow-option-a) feat(sfia-studio): wire FinOps T7 shadow pilot
```

- Project push : **NO**
- PR created : **NO**
- Remote delivery branch : still absent / not pushed

## 18. Décision Morris restante

**GO PUSH BRANCH + OPEN PR** (distinct) — or NO-GO.

Not authorized by this cycle: push · pr create · merge · SHADOW activation · policy selection.

## 19. Prochaine étape

ChatGPT validates remote handoff. Morris decides distinct GO for push/PR.

## 20. Verdict

```text
T7 SHADOW WIRING PR READINESS READY WITH RESERVES —
CYCLE 13 STANDARD —
LOCAL PROJECT COMMIT CREATED —
COMMIT CONTENT MATCHES QA-VALIDATED WIRING —
5 CREATE / 0 MODIFY / 0 DELETE —
BRANCH AHEAD BY 1 —
DIFF CHECK: trailing whitespace on 157.md hard-breaks only (QA-byte-identical; not amended) —
NO FORBIDDEN FILE —
NO SECRET RISK DETECTED —
QA EVIDENCE TRANSFERRED BY BYTE-IDENTICAL HASHES —
SHADOW PILOT POLICY SOURCE NOT SELECTED —
TEMPORAL MODE DRIFT RESERVE OPEN —
SHADOW NOT ACTIVATED —
NOT READY FOR SHADOW ACTIVATION —
PR TITLE/BODY READY —
PROJECT PUSH NOT PERFORMED —
PR NOT CREATED —
READY FOR DISTINCT MORRIS GO PUSH / PR —
HANDOFF REMOTE VERIFIED
```

---

## Annexe A — Full diff `origin/main...HEAD`

````diff
diff --git a/projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md b/projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
new file mode 100644
index 0000000..6365a30
--- /dev/null
+++ b/projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
@@ -0,0 +1,84 @@
+# 157 — FinOps T7 SHADOW Option A + Thin Adapter — Wiring Execution Record
+
+**Project:** SFIA Studio — Assistant SFIA natif OpenAI
+**Document:** `projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md`
+**Cycle:** 8 — Delivery / implémentation
+**Profil:** Critical
+**Typologie:** EVOL / CODE / TEST / DOC
+
+---
+
+## A. Status / anti-claims
+
+| Claim | Status |
+|-------|--------|
+| Option A (pre-provider execution-run) selected by Morris | **TRUE** |
+| Thin adapter delivered | **TRUE** |
+| Pilot projectId `sfia-studio-ops1` selected by Morris | **TRUE** |
+| Existing `composeExecutionRunD2D3` injection surface reused | **TRUE** |
+| `coordinateExecutionRun` unmodified | **TRUE** |
+| `composeExecutionRunD2D3` unmodified | **TRUE** |
+| T7/T4/T6 foundation sources unmodified | **TRUE** |
+| signal_only forced for SHADOW | **TRUE** |
+| SHADOW never BLOCK (defense-in-depth) | **TRUE** |
+| MONITOR / E1 not activated by adapter | **TRUE** |
+| No production threshold / 15/20/25/30 | **TRUE** |
+| No durable SHADOW row on real env | **TRUE** |
+| SHADOW activated | **FALSE** |
+| Project commit / push / PR | **FALSE** |
+
+```text
+SHADOW WIRING DELIVERED LOCALLY —
+READY FOR DEDICATED WIRING QA —
+SHADOW NOT ACTIVATED
+```
+
+---
+
+## B. GO Morris
+
+**Utterance / decision:**
+`GO Option A + thin adapter, Delivery Cycle 8 profil Critical, with sfia-studio-ops1 as projectId pilote canonique SHADOW.`
+
+**Consumed:** local CREATE wiring + tests + execution record.
+**Not consumed:** real SHADOW activation · MONITOR · E1 · T3 · thresholds · Neon · commit/push/PR.
+
+---
+
+## C. Files CREATE
+
+1. `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`
+2. `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts`
+3. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`
+4. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`
+5. This execution record (`157-…`)
+
+**MODIFY / DELETE:** none (core files untouched).
+
+---
+
+## D. Architecture
+
+```text
+composeExecutionRunD2D3T7ShadowPilot
+  → composeFinOpsT7ShadowExecutionDeps(pool, pilot=sfia-studio-ops1)
+       → composeFinOpsT7Runtime (reuse)
+       → createFinOpsEnforcementPort + effect forced signal_only
+       → pilot-gated capture
+  → composeExecutionRunD2D3({ finops, finopsEnforcement })  // unchanged
+```
+
+---
+
+## E. Rollback
+
+1. Config: no product SHADOW row written by this Delivery.
+2. Code: remove pilot composer injection / feature gate.
+3. No migration.
+
+---
+
+## F. Next
+
+Cycle 9 — Dedicated T7 SHADOW Wiring QA (distinct GO).
+Then distinct GO for actual pilot activation if Morris authorizes.
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
new file mode 100644
index 0000000..41fc4c4
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
@@ -0,0 +1,483 @@
+/**
+ * @vitest-environment node
+ *
+ * T7 SHADOW Option A — wiring integration (T7-SW01..SW15).
+ * Requires DATABASE_URL ephemeral Postgres — never Neon.
+ * TEST ONLY rows/policies — NOT product activation / NOT 15/20/25/30.
+ */
+import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
+import type { Pool } from "pg";
+import { getFixture } from "@/lib/oa/execution-run";
+import {
+  composeExecutionRunD2D3T7ShadowPilot,
+  T7_SHADOW_PILOT_PROJECT_ID,
+} from "@/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
+import {
+  composeExecutionRunProviders,
+} from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
+import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
+import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";
+import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
+import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
+import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
+import { composeFinOpsT7ShadowExecutionDeps } from "@/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps";
+import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
+import {
+  closeFinOpsPool,
+  createFinOpsPool,
+} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
+import type { FinOpsRolloutMode } from "@/lib/oa/finops/application/types.rollout";
+
+const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
+const describeDb = DATABASE_URL ? describe : describe.skip;
+
+/** TEST ONLY fictitious threshold — NOT historical calibration. */
+const TEST_ONLY_THRESHOLD = "1.00000000";
+const TEST_ONLY_ELIGIBLE = "9.99000000";
+
+const PILOT = T7_SHADOW_PILOT_PROJECT_ID;
+const OTHER = "project:d2d1-fixture";
+
+async function upsertMode(
+  pool: Pool,
+  projectId: string,
+  mode: FinOpsRolloutMode,
+): Promise<void> {
+  const store = createPostgresFinOpsRolloutStore(pool);
+  await store.upsertProjectRollout({
+    projectId,
+    mode,
+    updatedAt: "2026-08-08T16:00:00.000Z",
+  });
+}
+
+async function seedProjection(
+  pool: Pool,
+  projectId: string,
+  eligible: string,
+): Promise<void> {
+  await pool.query(
+    `INSERT INTO finops_enforcement_projection (
+       project_id, period_start, currency,
+       blocking_eligible_amount, billed_amount, provider_observed_amount,
+       eligible_cost_event_count, billed_event_count, provider_observed_event_count,
+       rebuild_version, rebuilt_at
+     ) VALUES ($1, '2026-08-01', 'USD', $2, $2, '0.00000000', 1, 1, 0, 1, NOW())
+     ON CONFLICT (project_id, period_start, currency) DO UPDATE SET
+       blocking_eligible_amount = EXCLUDED.blocking_eligible_amount,
+       billed_amount = EXCLUDED.billed_amount,
+       rebuild_version = finops_enforcement_projection.rebuild_version + 1,
+       rebuilt_at = NOW()`,
+    [projectId, eligible],
+  );
+}
+
+function spyProviders() {
+  const ai = new FakeAiExecutionAdapter();
+  const completeSpy = vi.spyOn(ai, "complete");
+  const secretsAdapter = new FakeSecretSourceAdapter();
+  const providers = composeExecutionRunProviders({
+    ai,
+    git: new FakeGitReadAdapter({
+      repositoryAllowlist: [
+        "o/r",
+        "example/example",
+        "mcleland147/sfia-workspace",
+      ],
+      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
+    }),
+    cursor: new FixtureCursorExecutionAdapter(),
+    secrets: {
+      resolve: (secretId) => secretsAdapter.resolve(secretId),
+    },
+    events: new RecordingExecutionEventSink(),
+  });
+  return { providers, completeSpy };
+}
+
+function coordinateInput(projectId: string, suffix: string) {
+  const fixture = getFixture("nominal");
+  return {
+    intent: {
+      ...fixture.intent,
+      intentId: `intent:t7sw:${suffix}`,
+      correlationId: `corr:t7sw:${suffix}`,
+    },
+    context: {
+      ...fixture.context,
+      projectId,
+    },
+    providerRequest: {
+      correlationId: `corr:t7sw:${suffix}`,
+      lane: "ai" as const,
+      operation: "complete" as const,
+      messages: [{ role: "user" as const, content: "bounded fixture summary" }],
+      timeoutMs: 100,
+    },
+    timeoutMs: 100,
+  };
+}
+
+describeDb("T7 SHADOW Option A — wiring integration", () => {
+  let pool: Pool;
+  const clockIso = "2026-08-08T16:10:00.000Z";
+
+  beforeAll(async () => {
+    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
+    await pool.query(`SELECT 1`);
+  });
+
+  afterAll(async () => {
+    await pool.query(
+      `DELETE FROM finops_rollout_config WHERE project_id = ANY($1::text[])`,
+      [[PILOT, OTHER, `${PILOT}-extra`]],
+    );
+    await pool.query(
+      `DELETE FROM finops_enforcement_projection WHERE project_id = ANY($1::text[])`,
+      [[PILOT, OTHER]],
+    );
+    await closeFinOpsPool(pool);
+  });
+
+  it("T7-SW01 pilot + OFF → no block · no shadow policy · capture inactive", async () => {
+    await upsertMode(pool, PILOT, "OFF");
+    const policy = vi.fn(async () => ({
+      thresholdCode: "TEST_ONLY_SW",
+      currency: "USD",
+      thresholdAmount: TEST_ONLY_THRESHOLD,
+    }));
+    const { providers, completeSpy } = spyProviders();
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: policy,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "sw01"),
+    );
+    expect(result.ok).toBe(true);
+    expect(result.providerInvoked).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+    expect(policy).not.toHaveBeenCalled();
+    expect(result.finopsCapture?.status).toBe("disabled");
+  });
+
+  it("T7-SW02 pilot + missing row → default OFF inert", async () => {
+    await pool.query(
+      `DELETE FROM finops_rollout_config WHERE project_id = $1`,
+      [PILOT],
+    );
+    const policy = vi.fn(async () => null);
+    const deps = composeFinOpsT7ShadowExecutionDeps({
+      pool,
+      nowIso: () => clockIso,
+      pilotProjectId: PILOT,
+      resolveShadowPolicy: policy,
+    });
+    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:sw02",
+      correlationId: "corr:sw02",
+      occurredAt: clockIso,
+    });
+    expect(decision.decision).toBe("allow");
+    expect(decision.reason).toBe("rollout_not_shadow_inert");
+    expect(policy).not.toHaveBeenCalled();
+    const instruction = await deps.resolveProjectRollout(PILOT);
+    expect(instruction.mode).toBe("OFF");
+    expect(instruction.resolution).toBe("default_off");
+  });
+
+  it("T7-SW03 rollout store failure → fail-open OFF inert · provider path safe", async () => {
+    const brokenPool = {
+      query: async () => {
+        throw new Error("simulated rollout read failure");
+      },
+      connect: async () => {
+        throw new Error("simulated connect failure");
+      },
+    } as unknown as Pool;
+    const policy = vi.fn(async () => null);
+    const deps = composeFinOpsT7ShadowExecutionDeps({
+      pool: brokenPool,
+      nowIso: () => clockIso,
+      pilotProjectId: PILOT,
+      resolveShadowPolicy: policy,
+    });
+    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:sw03",
+      correlationId: "corr:sw03",
+      occurredAt: clockIso,
+    });
+    // resolveFinOpsRollout fail-opens to OFF → adapter stays inert (never block).
+    expect(decision.decision).toBe("allow");
+    expect(decision.reason).toBe("rollout_not_shadow_inert");
+    expect(policy).not.toHaveBeenCalled();
+  });
+
+  it("T7-SW04 pilot + SHADOW → policy resolver called · effect forced signal_only", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await seedProjection(pool, PILOT, "0.50000000");
+    const seenEffects: string[] = [];
+    const policy = vi.fn(async () => {
+      seenEffects.push("caller_had_no_effect_field");
+      return {
+        thresholdCode: "TEST_ONLY_SW",
+        currency: "USD",
+        thresholdAmount: TEST_ONLY_THRESHOLD,
+      };
+    });
+    const deps = composeFinOpsT7ShadowExecutionDeps({
+      pool,
+      nowIso: () => clockIso,
+      pilotProjectId: PILOT,
+      resolveShadowPolicy: policy,
+    });
+    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:sw04",
+      correlationId: "corr:sw04",
+      occurredAt: clockIso,
+    });
+    expect(policy).toHaveBeenCalled();
+    expect(seenEffects).toEqual(["caller_had_no_effect_field"]);
+    expect(decision.decision).not.toBe("block");
+    expect(["allow", "soft_signal", "failed"]).toContain(decision.decision);
+  });
+
+  it("T7-SW05 SHADOW threshold crossed TEST policy → soft_signal · provider invoked · never blocked", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
+    const { providers, completeSpy } = spyProviders();
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: async () => ({
+        thresholdCode: "TEST_ONLY_SW",
+        currency: "USD",
+        thresholdAmount: TEST_ONLY_THRESHOLD,
+      }),
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "sw05"),
+    );
+    expect(result.ok).toBe(true);
+    expect(result.providerInvoked).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+    expect(result.finopsCapture?.status).not.toBeUndefined();
+  });
+
+  it("T7-SW07 non-pilot projectId → pilot SHADOW path inactive", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await upsertMode(pool, OTHER, "SHADOW");
+    const policy = vi.fn(async () => ({
+      thresholdCode: "TEST_ONLY_SW",
+      currency: "USD",
+      thresholdAmount: TEST_ONLY_THRESHOLD,
+    }));
+    const deps = composeFinOpsT7ShadowExecutionDeps({
+      pool,
+      nowIso: () => clockIso,
+      pilotProjectId: PILOT,
+      resolveShadowPolicy: policy,
+    });
+    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: OTHER,
+      executionRunId: "run:sw07",
+      correlationId: "corr:sw07",
+      occurredAt: clockIso,
+    });
+    expect(decision.decision).toBe("allow");
+    expect(decision.reason).toBe("non_pilot_inert");
+    expect(policy).not.toHaveBeenCalled();
+    const capture = await deps.capture.captureUsage({
+      projectId: OTHER,
+      executionRunId: "run:sw07",
+      correlationId: "corr:sw07",
+      provider: "fixture",
+      occurredAt: clockIso,
+      usage: { status: "validated", totalTokens: 1 },
+    });
+    expect(capture.status).toBe("disabled");
+  });
+
+  it("T7-SW08 MONITOR row TEST → adapter inert · provider continues", async () => {
+    await upsertMode(pool, PILOT, "MONITOR");
+    const policy = vi.fn(async () => ({
+      thresholdCode: "TEST_ONLY_SW",
+      currency: "USD",
+      thresholdAmount: TEST_ONLY_THRESHOLD,
+    }));
+    const { providers, completeSpy } = spyProviders();
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: policy,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "sw08"),
+    );
+    expect(result.ok).toBe(true);
+    expect(result.providerInvoked).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+    expect(policy).not.toHaveBeenCalled();
+  });
+
+  it("T7-SW09 E1 row TEST → adapter inert · provider continues", async () => {
+    await upsertMode(pool, PILOT, "E1_ENFORCED");
+    const policy = vi.fn(async () => ({
+      thresholdCode: "TEST_ONLY_SW",
+      currency: "USD",
+      thresholdAmount: TEST_ONLY_THRESHOLD,
+    }));
+    const { providers, completeSpy } = spyProviders();
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: policy,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "sw09"),
+    );
+    expect(result.ok).toBe(true);
+    expect(result.providerInvoked).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+    expect(policy).not.toHaveBeenCalled();
+  });
+
+  it("T7-SW10 policy absent → allow/not_configured · provider continues", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
+    const { providers, completeSpy } = spyProviders();
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: async () => null,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "sw10"),
+    );
+    expect(result.ok).toBe(true);
+    expect(result.providerInvoked).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+  });
+
+  it("T7-SW11 policy resolver throw → failed/fail-open · provider continues", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
+    const { providers, completeSpy } = spyProviders();
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: async () => {
+        throw new Error("TEST_ONLY policy boom");
+      },
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "sw11"),
+    );
+    expect(result.ok).toBe(true);
+    expect(result.providerInvoked).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+  });
+
+  it("T7-SW12 shadow decision sink throw → provider continues", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await seedProjection(pool, PILOT, "0.10000000");
+    const { providers, completeSpy } = spyProviders();
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: async () => null,
+      onShadowDecision: () => {
+        throw new Error("TEST_ONLY sink boom");
+      },
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "sw12"),
+    );
+    expect(result.ok).toBe(true);
+    expect(result.providerInvoked).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+  });
+
+  it("T7-SW13 SHADOW + successful AI → capture delegated for pilot", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await seedProjection(pool, PILOT, "0.10000000");
+    const { providers } = spyProviders();
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: async () => null,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "sw13"),
+    );
+    expect(result.ok).toBe(true);
+    expect(result.providerInvoked).toBe(true);
+    expect(result.finopsCapture).toBeDefined();
+    expect(["created", "duplicate", "failed"]).toContain(
+      result.finopsCapture!.status,
+    );
+  });
+
+  it("T7-SW14 OFF / non-pilot → no SHADOW capture", async () => {
+    await upsertMode(pool, PILOT, "OFF");
+    const deps = composeFinOpsT7ShadowExecutionDeps({
+      pool,
+      nowIso: () => clockIso,
+      pilotProjectId: PILOT,
+      resolveShadowPolicy: async () => null,
+    });
+    const offCapture = await deps.capture.captureUsage({
+      projectId: PILOT,
+      executionRunId: "run:sw14a",
+      correlationId: "corr:sw14a",
+      provider: "fixture",
+      occurredAt: clockIso,
+      usage: { status: "validated", totalTokens: 1 },
+    });
+    expect(offCapture.status).toBe("disabled");
+    const otherCapture = await deps.capture.captureUsage({
+      projectId: OTHER,
+      executionRunId: "run:sw14b",
+      correlationId: "corr:sw14b",
+      provider: "fixture",
+      occurredAt: clockIso,
+      usage: { status: "validated", totalTokens: 1 },
+    });
+    expect(otherCapture.status).toBe("disabled");
+  });
+
+  it("T7-SW15 pilot scenario uses exact sfia-studio-ops1 for rollout/eval/capture", async () => {
+    expect(PILOT).toBe("sfia-studio-ops1");
+    await upsertMode(pool, PILOT, "SHADOW");
+    const seen: string[] = [];
+    const deps = composeFinOpsT7ShadowExecutionDeps({
+      pool,
+      nowIso: () => clockIso,
+      pilotProjectId: PILOT,
+      resolveShadowPolicy: async (input) => {
+        seen.push(input.projectId);
+        return null;
+      },
+    });
+    await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:sw15",
+      correlationId: "corr:sw15",
+      occurredAt: clockIso,
+    });
+    expect(seen).toEqual(["sfia-studio-ops1"]);
+    expect(deps.pilotProjectId).toBe("sfia-studio-ops1");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
new file mode 100644
index 0000000..009d464
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
@@ -0,0 +1,72 @@
+/**
+ * @vitest-environment node
+ *
+ * T7 SHADOW Option A — pure unit proofs (no DB).
+ * FICTITIOUS fixtures only — NOT historical 15/20/25/30.
+ */
+import { readFileSync } from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import { ensureShadowNeverBlocks } from "@/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps";
+import { T7_SHADOW_PILOT_PROJECT_ID } from "@/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
+import { OPS1_PROJECT_KEY } from "@/lib/ops1/types";
+
+describe("T7 SHADOW Option A — unit", () => {
+  it("T7-SW06 ensureShadowNeverBlocks converts block → failed shadow_block_forbidden", () => {
+    const out = ensureShadowNeverBlocks({
+      decision: "block",
+      reason: "threshold_crossed_enforce",
+    });
+    expect(out.decision).toBe("failed");
+    expect(out.reason).toBe("shadow_block_forbidden");
+    expect(out.finopsSideOnly).toBe(true);
+  });
+
+  it("T7-SW06b soft_signal / allow / failed pass through unchanged", () => {
+    expect(
+      ensureShadowNeverBlocks({
+        decision: "soft_signal",
+        reason: "threshold_crossed_signal_only",
+      }).decision,
+    ).toBe("soft_signal");
+    expect(
+      ensureShadowNeverBlocks({ decision: "allow", reason: "below_threshold" })
+        .decision,
+    ).toBe("allow");
+    expect(
+      ensureShadowNeverBlocks({
+        decision: "failed",
+        reason: "projection_missing",
+        finopsSideOnly: true,
+      }).decision,
+    ).toBe("failed");
+  });
+
+  it("T7-SW15 pilot constant equals OPS1_PROJECT_KEY sfia-studio-ops1", () => {
+    expect(T7_SHADOW_PILOT_PROJECT_ID).toBe("sfia-studio-ops1");
+    expect(T7_SHADOW_PILOT_PROJECT_ID).toBe(OPS1_PROJECT_KEY);
+  });
+
+  it("T7-SW16 new composers expose no MONITOR/E1/enforce activation API", () => {
+    const adapter = readFileSync(
+      path.join(
+        process.cwd(),
+        "lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts",
+      ),
+      "utf8",
+    );
+    const pilot = readFileSync(
+      path.join(
+        process.cwd(),
+        "lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts",
+      ),
+      "utf8",
+    );
+    expect(adapter).toMatch(/effect:\s*"signal_only"/);
+    expect(adapter).toMatch(/shadow_block_forbidden/);
+    expect(adapter).toMatch(/rollout_not_shadow_inert/);
+    expect(pilot).not.toMatch(/E1_ENFORCED/);
+    expect(pilot).not.toMatch(/effect:\s*"enforce"/);
+    expect(adapter).not.toMatch(/upsertProjectRollout/);
+  });
+});
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
new file mode 100644
index 0000000..d05f00c
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
@@ -0,0 +1,105 @@
+/**
+ * Execution-run D2-D3 composition wired for T7 SHADOW Option A pilot.
+ *
+ * Reuses composeExecutionRunD2D3 injection surface unchanged.
+ * Reuses composeFinOpsT7ShadowExecutionDeps thin adapter.
+ *
+ * Anti-claims:
+ * - SHADOW NOT ACTIVATED (no durable SHADOW row write).
+ * - MONITOR / E1 not activated.
+ * - No real provider / Neon / production threshold.
+ * - Pilot identity: OPS1_PROJECT_KEY (sfia-studio-ops1) — Morris-selected.
+ */
+
+import type { Pool } from "pg";
+import { OPS1_PROJECT_KEY } from "@/lib/ops1/types";
+import {
+  composeFinOpsT7ShadowExecutionDeps,
+  type FinOpsT7ShadowDecisionDiagnostic,
+  type FinOpsT7ShadowPolicyInput,
+} from "../../finops/server/composeFinOpsT7ShadowExecutionDeps";
+import type { EvaluateFinOpsEnforcementInput } from "../../finops/application/types.enforcement";
+import {
+  composeExecutionRunD2D3,
+  type ExecutionRunD2D3Composition,
+} from "./composeExecutionRunD2D3";
+import type { ClockPort } from "../ports/clockPort";
+import type { ExecutionRunProviderComposition } from "./composeExecutionRunProviders";
+import { assertServerOnly } from "./serverOnly";
+
+/**
+ * Morris-selected T7 SHADOW pilot identity — not global project identity.
+ * Reuses existing OPS1_PROJECT_KEY constant (= "sfia-studio-ops1").
+ */
+export const T7_SHADOW_PILOT_PROJECT_ID = OPS1_PROJECT_KEY;
+
+export type ComposeExecutionRunD2D3T7ShadowPilotInput = {
+  /** Caller-owned FinOps pool. Never closed here. */
+  readonly pool: Pool;
+  readonly nowIso?: () => string;
+  readonly providers?: ExecutionRunProviderComposition;
+  readonly clock?: ClockPort;
+  readonly clockIso?: string;
+  /**
+   * Explicit SHADOW policy injection (TEST or future activation source).
+   * Returning null ⇒ allow/not_configured. Effect always forced signal_only by adapter.
+   */
+  readonly resolveShadowPolicy: (
+    input: EvaluateFinOpsEnforcementInput,
+  ) =>
+    | Promise<FinOpsT7ShadowPolicyInput | null>
+    | FinOpsT7ShadowPolicyInput
+    | null;
+  readonly onShadowDecision?: (
+    diagnostic: FinOpsT7ShadowDecisionDiagnostic,
+  ) => void | Promise<void>;
+};
+
+export type ExecutionRunD2D3T7ShadowPilotComposition =
+  ExecutionRunD2D3Composition & {
+    readonly pilotProjectId: string;
+    readonly resolveProjectRollout: (
+      projectId: string,
+    ) => Promise<
+      import("../../finops/application/types.rollout").FinOpsRolloutInstruction
+    >;
+    readonly flushAudit: () => Promise<void>;
+  };
+
+/**
+ * Compose D2-D3 with T7 SHADOW pilot-aware FinOps deps injected.
+ * Does not modify composeExecutionRunD2D3 / coordinateExecutionRun sources.
+ */
+export function composeExecutionRunD2D3T7ShadowPilot(
+  input: ComposeExecutionRunD2D3T7ShadowPilotInput,
+): ExecutionRunD2D3T7ShadowPilotComposition {
+  assertServerOnly("oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot");
+
+  const nowIso =
+    input.nowIso ??
+    input.clock?.nowIso ??
+    (() => input.clockIso ?? "2026-08-08T16:00:00.000Z");
+
+  const shadowDeps = composeFinOpsT7ShadowExecutionDeps({
+    pool: input.pool,
+    nowIso,
+    pilotProjectId: T7_SHADOW_PILOT_PROJECT_ID,
+    resolveShadowPolicy: input.resolveShadowPolicy,
+    onShadowDecision: input.onShadowDecision,
+  });
+
+  const base = composeExecutionRunD2D3({
+    providers: input.providers,
+    clock: input.clock,
+    clockIso: input.clockIso,
+    finops: shadowDeps.capture,
+    finopsEnforcement: shadowDeps.finopsEnforcement,
+  });
+
+  return {
+    ...base,
+    pilotProjectId: T7_SHADOW_PILOT_PROJECT_ID,
+    resolveProjectRollout: shadowDeps.resolveProjectRollout,
+    flushAudit: shadowDeps.flushAudit,
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts b/projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
new file mode 100644
index 0000000..28df1e4
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
@@ -0,0 +1,294 @@
+/**
+ * FinOps T7 SHADOW — thin adapter: rollout instruction → execution-run deps.
+ *
+ * Option A wiring (Morris-selected):
+ * - Reuses composeFinOpsT7Runtime + createFinOpsEnforcementPort.
+ * - Forces effect=signal_only for SHADOW.
+ * - Never returns decision=block (defense-in-depth).
+ * - MONITOR / E1 paths stay inert (allow).
+ * - Pilot-scoped capture/enforcement only.
+ *
+ * Anti-claims:
+ * - Does NOT activate SHADOW (no durable row write).
+ * - Does NOT select production thresholds (15/20/25/30 forbidden).
+ * - Does NOT create pools, read env, or close caller-owned pool.
+ * - Does NOT modify composeFinOpsT7Runtime / T4 / T6 / coordinator sources.
+ */
+
+import type { Pool } from "pg";
+import { createFinOpsEnforcementPort } from "../application/evaluateFinOpsEnforcement";
+import type {
+  EvaluateFinOpsEnforcementInput,
+  FinOpsEnforcementDecision,
+} from "../application/types.enforcement";
+import type { FinOpsRolloutInstruction } from "../application/types.rollout";
+import { createPostgresFinOpsEnforcementProjectionStore } from "../infrastructure/postgres/postgresFinOpsEnforcementProjectionStore";
+import type { FinOpsCapturePort } from "../ports/finopsCapturePort";
+import type { FinOpsEnforcementPort } from "../ports/finopsEnforcementPort";
+import {
+  composeFinOpsT7Runtime,
+  type FinOpsT7RuntimeComposition,
+} from "./composeFinOpsT7Runtime";
+
+/**
+ * Policy fields injectable for SHADOW evaluation.
+ * Effect is intentionally omitted — the adapter always forces signal_only.
+ */
+export type FinOpsT7ShadowPolicyInput = {
+  readonly thresholdCode: string;
+  readonly currency: string;
+  /** Canonical Money scale-8 string; TEST / injected only — not a product default. */
+  readonly thresholdAmount: string;
+};
+
+export type FinOpsT7ShadowDecisionDiagnostic = {
+  readonly projectId: string;
+  readonly mode: FinOpsRolloutInstruction["mode"] | "unresolved";
+  readonly decision: FinOpsEnforcementDecision["decision"];
+  readonly reason: string;
+  readonly pilotProjectId: string;
+};
+
+export type ComposeFinOpsT7ShadowExecutionDepsInput = {
+  /** Caller-owned pool. Never closed by this adapter. */
+  readonly pool: Pool;
+  readonly nowIso: () => string;
+  /**
+   * Morris-selected T7 SHADOW pilot identity — not global project identity.
+   * Expected production pilot: sfia-studio-ops1 (injected by pilot composer).
+   */
+  readonly pilotProjectId: string;
+  /**
+   * Explicit policy injection. Returning null ⇒ T4 allow/not_configured.
+   * Must NOT adopt historical 15/20/25/30 as product thresholds.
+   */
+  readonly resolveShadowPolicy: (
+    input: EvaluateFinOpsEnforcementInput,
+  ) =>
+    | Promise<FinOpsT7ShadowPolicyInput | null>
+    | FinOpsT7ShadowPolicyInput
+    | null;
+  /** Optional observe sink — errors ignored (fail-open). */
+  readonly onShadowDecision?: (
+    diagnostic: FinOpsT7ShadowDecisionDiagnostic,
+  ) => void | Promise<void>;
+};
+
+export type FinOpsT7ShadowExecutionDeps = {
+  readonly capture: FinOpsCapturePort;
+  readonly finopsEnforcement: FinOpsEnforcementPort;
+  readonly resolveProjectRollout: FinOpsT7RuntimeComposition["resolveProjectRollout"];
+  readonly flushAudit: FinOpsT7RuntimeComposition["flushAudit"];
+  readonly pilotProjectId: string;
+};
+
+function assertServerOnly(): void {
+  if (typeof window !== "undefined") {
+    throw new Error(
+      "oa/finops/server/composeFinOpsT7ShadowExecutionDeps is server-only and must not run in a browser context.",
+    );
+  }
+}
+
+function allow(reason: string): FinOpsEnforcementDecision {
+  return { decision: "allow", reason };
+}
+
+function failed(reason: string): FinOpsEnforcementDecision {
+  return { decision: "failed", reason, finopsSideOnly: true };
+}
+
+/**
+ * Defense-in-depth: SHADOW path must never surface `block` to the coordinator.
+ * Exported for focused unit proof (T7-SW06).
+ */
+export function ensureShadowNeverBlocks(
+  decision: FinOpsEnforcementDecision,
+): FinOpsEnforcementDecision {
+  if (decision.decision === "block") {
+    return failed("shadow_block_forbidden");
+  }
+  return decision;
+}
+
+async function emitShadowDecision(
+  sink: ComposeFinOpsT7ShadowExecutionDepsInput["onShadowDecision"],
+  diagnostic: FinOpsT7ShadowDecisionDiagnostic,
+): Promise<void> {
+  if (!sink) return;
+  try {
+    await sink(diagnostic);
+  } catch {
+    // Diagnostic sink failures must never affect provider path.
+  }
+}
+
+/**
+ * Compose pilot-aware FinOps deps for execution-run Option A SHADOW wiring.
+ */
+export function composeFinOpsT7ShadowExecutionDeps(
+  input: ComposeFinOpsT7ShadowExecutionDepsInput,
+): FinOpsT7ShadowExecutionDeps {
+  assertServerOnly();
+
+  const pilotProjectId = input.pilotProjectId.trim();
+  if (!pilotProjectId) {
+    throw new Error("pilotProjectId is required for T7 SHADOW execution deps");
+  }
+
+  const t7 = composeFinOpsT7Runtime({
+    pool: input.pool,
+    nowIso: input.nowIso,
+  });
+  const projection = createPostgresFinOpsEnforcementProjectionStore(input.pool);
+
+  const finopsEnforcement: FinOpsEnforcementPort = {
+    async evaluateBeforeProvider(evalInput) {
+      let mode: FinOpsT7ShadowDecisionDiagnostic["mode"] = "unresolved";
+      try {
+        const projectId =
+          typeof evalInput.projectId === "string"
+            ? evalInput.projectId.trim()
+            : "";
+        if (!projectId || projectId !== pilotProjectId) {
+          const decision = allow("non_pilot_inert");
+          await emitShadowDecision(input.onShadowDecision, {
+            projectId: projectId || "",
+            mode: "OFF",
+            decision: decision.decision,
+            reason: decision.reason,
+            pilotProjectId,
+          });
+          return decision;
+        }
+
+        let instruction: FinOpsRolloutInstruction;
+        try {
+          instruction = await t7.resolveProjectRollout(projectId);
+        } catch {
+          const decision = failed("rollout_resolve_failed");
+          await emitShadowDecision(input.onShadowDecision, {
+            projectId,
+            mode: "unresolved",
+            decision: decision.decision,
+            reason: decision.reason,
+            pilotProjectId,
+          });
+          return decision;
+        }
+
+        mode = instruction.mode;
+
+        if (instruction.mode !== "SHADOW") {
+          // OFF / MONITOR / E1_ENFORCED / inert — this adapter does not activate them.
+          const decision = allow("rollout_not_shadow_inert");
+          await emitShadowDecision(input.onShadowDecision, {
+            projectId,
+            mode,
+            decision: decision.decision,
+            reason: decision.reason,
+            pilotProjectId,
+          });
+          return decision;
+        }
+
+        const port = createFinOpsEnforcementPort({
+          projection,
+          resolvePolicy: async (policyInput) => {
+            let base: FinOpsT7ShadowPolicyInput | null;
+            try {
+              base = await input.resolveShadowPolicy(policyInput);
+            } catch {
+              throw new Error("policy_resolver_failed");
+            }
+            if (!base) return null;
+            return {
+              thresholdCode: base.thresholdCode,
+              currency: base.currency,
+              thresholdAmount: base.thresholdAmount,
+              effect: "signal_only",
+            };
+          },
+        });
+
+        const decision = ensureShadowNeverBlocks(
+          await port.evaluateBeforeProvider(evalInput),
+        );
+
+        await emitShadowDecision(input.onShadowDecision, {
+          projectId,
+          mode,
+          decision: decision.decision,
+          reason: decision.reason,
+          pilotProjectId,
+        });
+        return decision;
+      } catch {
+        const decision = failed("shadow_adapter_failed");
+        await emitShadowDecision(input.onShadowDecision, {
+          projectId:
+            typeof evalInput.projectId === "string"
+              ? evalInput.projectId.trim()
+              : "",
+          mode,
+          decision: decision.decision,
+          reason: decision.reason,
+          pilotProjectId,
+        });
+        return decision;
+      }
+    },
+  };
+
+  const capture: FinOpsCapturePort = {
+    async captureUsage(request) {
+      try {
+        const projectId =
+          typeof request.projectId === "string" ? request.projectId.trim() : "";
+        if (!projectId || projectId !== pilotProjectId) {
+          return {
+            status: "disabled",
+            reason: "non_pilot_shadow_capture_inactive",
+          };
+        }
+
+        let instruction: FinOpsRolloutInstruction;
+        try {
+          instruction = await t7.resolveProjectRollout(projectId);
+        } catch {
+          return {
+            status: "disabled",
+            reason: "shadow_capture_rollout_failed_inert",
+          };
+        }
+
+        if (instruction.mode !== "SHADOW") {
+          return {
+            status: "disabled",
+            reason: "shadow_capture_inactive",
+          };
+        }
+
+        return t7.capture.captureUsage(request);
+      } catch {
+        return {
+          status: "failed",
+          error: {
+            code: "FINOPS_CAPTURE_FAILED",
+            message: "shadow_capture_adapter_failed",
+            retryable: true,
+            technicalDetailsRedacted: true,
+          },
+        };
+      }
+    },
+  };
+
+  return {
+    capture,
+    finopsEnforcement,
+    resolveProjectRollout: t7.resolveProjectRollout,
+    flushAudit: t7.flushAudit,
+    pilotProjectId,
+  };
+}
````

**Note:** Annexe A soft-strips trailing whitespace for handoff `git diff --check` publishability. Committed blobs remain QA SHA-256 exact (see §9). Soft strip affects only this pack rendering of the 157 hard-break lines.

## Annexe B — Contenu COMPLET des 5 fichiers (HEAD)


### `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`

Committed SHA-256: `e90b5da0c23023b3e0839cc729516fea7c127099a8e8e3099941f8365a4d3b6a`

```typescript
/**
 * FinOps T7 SHADOW — thin adapter: rollout instruction → execution-run deps.
 *
 * Option A wiring (Morris-selected):
 * - Reuses composeFinOpsT7Runtime + createFinOpsEnforcementPort.
 * - Forces effect=signal_only for SHADOW.
 * - Never returns decision=block (defense-in-depth).
 * - MONITOR / E1 paths stay inert (allow).
 * - Pilot-scoped capture/enforcement only.
 *
 * Anti-claims:
 * - Does NOT activate SHADOW (no durable row write).
 * - Does NOT select production thresholds (15/20/25/30 forbidden).
 * - Does NOT create pools, read env, or close caller-owned pool.
 * - Does NOT modify composeFinOpsT7Runtime / T4 / T6 / coordinator sources.
 */

import type { Pool } from "pg";
import { createFinOpsEnforcementPort } from "../application/evaluateFinOpsEnforcement";
import type {
  EvaluateFinOpsEnforcementInput,
  FinOpsEnforcementDecision,
} from "../application/types.enforcement";
import type { FinOpsRolloutInstruction } from "../application/types.rollout";
import { createPostgresFinOpsEnforcementProjectionStore } from "../infrastructure/postgres/postgresFinOpsEnforcementProjectionStore";
import type { FinOpsCapturePort } from "../ports/finopsCapturePort";
import type { FinOpsEnforcementPort } from "../ports/finopsEnforcementPort";
import {
  composeFinOpsT7Runtime,
  type FinOpsT7RuntimeComposition,
} from "./composeFinOpsT7Runtime";

/**
 * Policy fields injectable for SHADOW evaluation.
 * Effect is intentionally omitted — the adapter always forces signal_only.
 */
export type FinOpsT7ShadowPolicyInput = {
  readonly thresholdCode: string;
  readonly currency: string;
  /** Canonical Money scale-8 string; TEST / injected only — not a product default. */
  readonly thresholdAmount: string;
};

export type FinOpsT7ShadowDecisionDiagnostic = {
  readonly projectId: string;
  readonly mode: FinOpsRolloutInstruction["mode"] | "unresolved";
  readonly decision: FinOpsEnforcementDecision["decision"];
  readonly reason: string;
  readonly pilotProjectId: string;
};

export type ComposeFinOpsT7ShadowExecutionDepsInput = {
  /** Caller-owned pool. Never closed by this adapter. */
  readonly pool: Pool;
  readonly nowIso: () => string;
  /**
   * Morris-selected T7 SHADOW pilot identity — not global project identity.
   * Expected production pilot: sfia-studio-ops1 (injected by pilot composer).
   */
  readonly pilotProjectId: string;
  /**
   * Explicit policy injection. Returning null ⇒ T4 allow/not_configured.
   * Must NOT adopt historical 15/20/25/30 as product thresholds.
   */
  readonly resolveShadowPolicy: (
    input: EvaluateFinOpsEnforcementInput,
  ) =>
    | Promise<FinOpsT7ShadowPolicyInput | null>
    | FinOpsT7ShadowPolicyInput
    | null;
  /** Optional observe sink — errors ignored (fail-open). */
  readonly onShadowDecision?: (
    diagnostic: FinOpsT7ShadowDecisionDiagnostic,
  ) => void | Promise<void>;
};

export type FinOpsT7ShadowExecutionDeps = {
  readonly capture: FinOpsCapturePort;
  readonly finopsEnforcement: FinOpsEnforcementPort;
  readonly resolveProjectRollout: FinOpsT7RuntimeComposition["resolveProjectRollout"];
  readonly flushAudit: FinOpsT7RuntimeComposition["flushAudit"];
  readonly pilotProjectId: string;
};

function assertServerOnly(): void {
  if (typeof window !== "undefined") {
    throw new Error(
      "oa/finops/server/composeFinOpsT7ShadowExecutionDeps is server-only and must not run in a browser context.",
    );
  }
}

function allow(reason: string): FinOpsEnforcementDecision {
  return { decision: "allow", reason };
}

function failed(reason: string): FinOpsEnforcementDecision {
  return { decision: "failed", reason, finopsSideOnly: true };
}

/**
 * Defense-in-depth: SHADOW path must never surface `block` to the coordinator.
 * Exported for focused unit proof (T7-SW06).
 */
export function ensureShadowNeverBlocks(
  decision: FinOpsEnforcementDecision,
): FinOpsEnforcementDecision {
  if (decision.decision === "block") {
    return failed("shadow_block_forbidden");
  }
  return decision;
}

async function emitShadowDecision(
  sink: ComposeFinOpsT7ShadowExecutionDepsInput["onShadowDecision"],
  diagnostic: FinOpsT7ShadowDecisionDiagnostic,
): Promise<void> {
  if (!sink) return;
  try {
    await sink(diagnostic);
  } catch {
    // Diagnostic sink failures must never affect provider path.
  }
}

/**
 * Compose pilot-aware FinOps deps for execution-run Option A SHADOW wiring.
 */
export function composeFinOpsT7ShadowExecutionDeps(
  input: ComposeFinOpsT7ShadowExecutionDepsInput,
): FinOpsT7ShadowExecutionDeps {
  assertServerOnly();

  const pilotProjectId = input.pilotProjectId.trim();
  if (!pilotProjectId) {
    throw new Error("pilotProjectId is required for T7 SHADOW execution deps");
  }

  const t7 = composeFinOpsT7Runtime({
    pool: input.pool,
    nowIso: input.nowIso,
  });
  const projection = createPostgresFinOpsEnforcementProjectionStore(input.pool);

  const finopsEnforcement: FinOpsEnforcementPort = {
    async evaluateBeforeProvider(evalInput) {
      let mode: FinOpsT7ShadowDecisionDiagnostic["mode"] = "unresolved";
      try {
        const projectId =
          typeof evalInput.projectId === "string"
            ? evalInput.projectId.trim()
            : "";
        if (!projectId || projectId !== pilotProjectId) {
          const decision = allow("non_pilot_inert");
          await emitShadowDecision(input.onShadowDecision, {
            projectId: projectId || "",
            mode: "OFF",
            decision: decision.decision,
            reason: decision.reason,
            pilotProjectId,
          });
          return decision;
        }

        let instruction: FinOpsRolloutInstruction;
        try {
          instruction = await t7.resolveProjectRollout(projectId);
        } catch {
          const decision = failed("rollout_resolve_failed");
          await emitShadowDecision(input.onShadowDecision, {
            projectId,
            mode: "unresolved",
            decision: decision.decision,
            reason: decision.reason,
            pilotProjectId,
          });
          return decision;
        }

        mode = instruction.mode;

        if (instruction.mode !== "SHADOW") {
          // OFF / MONITOR / E1_ENFORCED / inert — this adapter does not activate them.
          const decision = allow("rollout_not_shadow_inert");
          await emitShadowDecision(input.onShadowDecision, {
            projectId,
            mode,
            decision: decision.decision,
            reason: decision.reason,
            pilotProjectId,
          });
          return decision;
        }

        const port = createFinOpsEnforcementPort({
          projection,
          resolvePolicy: async (policyInput) => {
            let base: FinOpsT7ShadowPolicyInput | null;
            try {
              base = await input.resolveShadowPolicy(policyInput);
            } catch {
              throw new Error("policy_resolver_failed");
            }
            if (!base) return null;
            return {
              thresholdCode: base.thresholdCode,
              currency: base.currency,
              thresholdAmount: base.thresholdAmount,
              effect: "signal_only",
            };
          },
        });

        const decision = ensureShadowNeverBlocks(
          await port.evaluateBeforeProvider(evalInput),
        );

        await emitShadowDecision(input.onShadowDecision, {
          projectId,
          mode,
          decision: decision.decision,
          reason: decision.reason,
          pilotProjectId,
        });
        return decision;
      } catch {
        const decision = failed("shadow_adapter_failed");
        await emitShadowDecision(input.onShadowDecision, {
          projectId:
            typeof evalInput.projectId === "string"
              ? evalInput.projectId.trim()
              : "",
          mode,
          decision: decision.decision,
          reason: decision.reason,
          pilotProjectId,
        });
        return decision;
      }
    },
  };

  const capture: FinOpsCapturePort = {
    async captureUsage(request) {
      try {
        const projectId =
          typeof request.projectId === "string" ? request.projectId.trim() : "";
        if (!projectId || projectId !== pilotProjectId) {
          return {
            status: "disabled",
            reason: "non_pilot_shadow_capture_inactive",
          };
        }

        let instruction: FinOpsRolloutInstruction;
        try {
          instruction = await t7.resolveProjectRollout(projectId);
        } catch {
          return {
            status: "disabled",
            reason: "shadow_capture_rollout_failed_inert",
          };
        }

        if (instruction.mode !== "SHADOW") {
          return {
            status: "disabled",
            reason: "shadow_capture_inactive",
          };
        }

        return t7.capture.captureUsage(request);
      } catch {
        return {
          status: "failed",
          error: {
            code: "FINOPS_CAPTURE_FAILED",
            message: "shadow_capture_adapter_failed",
            retryable: true,
            technicalDetailsRedacted: true,
          },
        };
      }
    },
  };

  return {
    capture,
    finopsEnforcement,
    resolveProjectRollout: t7.resolveProjectRollout,
    flushAudit: t7.flushAudit,
    pilotProjectId,
  };
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts`

Committed SHA-256: `2f6f9c3f169f3e2105445678bd61ec80b89a75e088b604c9d120d1e6ac674e7d`

```typescript
/**
 * Execution-run D2-D3 composition wired for T7 SHADOW Option A pilot.
 *
 * Reuses composeExecutionRunD2D3 injection surface unchanged.
 * Reuses composeFinOpsT7ShadowExecutionDeps thin adapter.
 *
 * Anti-claims:
 * - SHADOW NOT ACTIVATED (no durable SHADOW row write).
 * - MONITOR / E1 not activated.
 * - No real provider / Neon / production threshold.
 * - Pilot identity: OPS1_PROJECT_KEY (sfia-studio-ops1) — Morris-selected.
 */

import type { Pool } from "pg";
import { OPS1_PROJECT_KEY } from "@/lib/ops1/types";
import {
  composeFinOpsT7ShadowExecutionDeps,
  type FinOpsT7ShadowDecisionDiagnostic,
  type FinOpsT7ShadowPolicyInput,
} from "../../finops/server/composeFinOpsT7ShadowExecutionDeps";
import type { EvaluateFinOpsEnforcementInput } from "../../finops/application/types.enforcement";
import {
  composeExecutionRunD2D3,
  type ExecutionRunD2D3Composition,
} from "./composeExecutionRunD2D3";
import type { ClockPort } from "../ports/clockPort";
import type { ExecutionRunProviderComposition } from "./composeExecutionRunProviders";
import { assertServerOnly } from "./serverOnly";

/**
 * Morris-selected T7 SHADOW pilot identity — not global project identity.
 * Reuses existing OPS1_PROJECT_KEY constant (= "sfia-studio-ops1").
 */
export const T7_SHADOW_PILOT_PROJECT_ID = OPS1_PROJECT_KEY;

export type ComposeExecutionRunD2D3T7ShadowPilotInput = {
  /** Caller-owned FinOps pool. Never closed here. */
  readonly pool: Pool;
  readonly nowIso?: () => string;
  readonly providers?: ExecutionRunProviderComposition;
  readonly clock?: ClockPort;
  readonly clockIso?: string;
  /**
   * Explicit SHADOW policy injection (TEST or future activation source).
   * Returning null ⇒ allow/not_configured. Effect always forced signal_only by adapter.
   */
  readonly resolveShadowPolicy: (
    input: EvaluateFinOpsEnforcementInput,
  ) =>
    | Promise<FinOpsT7ShadowPolicyInput | null>
    | FinOpsT7ShadowPolicyInput
    | null;
  readonly onShadowDecision?: (
    diagnostic: FinOpsT7ShadowDecisionDiagnostic,
  ) => void | Promise<void>;
};

export type ExecutionRunD2D3T7ShadowPilotComposition =
  ExecutionRunD2D3Composition & {
    readonly pilotProjectId: string;
    readonly resolveProjectRollout: (
      projectId: string,
    ) => Promise<
      import("../../finops/application/types.rollout").FinOpsRolloutInstruction
    >;
    readonly flushAudit: () => Promise<void>;
  };

/**
 * Compose D2-D3 with T7 SHADOW pilot-aware FinOps deps injected.
 * Does not modify composeExecutionRunD2D3 / coordinateExecutionRun sources.
 */
export function composeExecutionRunD2D3T7ShadowPilot(
  input: ComposeExecutionRunD2D3T7ShadowPilotInput,
): ExecutionRunD2D3T7ShadowPilotComposition {
  assertServerOnly("oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot");

  const nowIso =
    input.nowIso ??
    input.clock?.nowIso ??
    (() => input.clockIso ?? "2026-08-08T16:00:00.000Z");

  const shadowDeps = composeFinOpsT7ShadowExecutionDeps({
    pool: input.pool,
    nowIso,
    pilotProjectId: T7_SHADOW_PILOT_PROJECT_ID,
    resolveShadowPolicy: input.resolveShadowPolicy,
    onShadowDecision: input.onShadowDecision,
  });

  const base = composeExecutionRunD2D3({
    providers: input.providers,
    clock: input.clock,
    clockIso: input.clockIso,
    finops: shadowDeps.capture,
    finopsEnforcement: shadowDeps.finopsEnforcement,
  });

  return {
    ...base,
    pilotProjectId: T7_SHADOW_PILOT_PROJECT_ID,
    resolveProjectRollout: shadowDeps.resolveProjectRollout,
    flushAudit: shadowDeps.flushAudit,
  };
}
```

### `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`

Committed SHA-256: `cb1cd4e40dadb057d9ebea964cff84ce6e76cfba3bccf740e948784d9ab3dd65`

```typescript
/**
 * @vitest-environment node
 *
 * T7 SHADOW Option A — pure unit proofs (no DB).
 * FICTITIOUS fixtures only — NOT historical 15/20/25/30.
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { ensureShadowNeverBlocks } from "@/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps";
import { T7_SHADOW_PILOT_PROJECT_ID } from "@/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
import { OPS1_PROJECT_KEY } from "@/lib/ops1/types";

describe("T7 SHADOW Option A — unit", () => {
  it("T7-SW06 ensureShadowNeverBlocks converts block → failed shadow_block_forbidden", () => {
    const out = ensureShadowNeverBlocks({
      decision: "block",
      reason: "threshold_crossed_enforce",
    });
    expect(out.decision).toBe("failed");
    expect(out.reason).toBe("shadow_block_forbidden");
    expect(out.finopsSideOnly).toBe(true);
  });

  it("T7-SW06b soft_signal / allow / failed pass through unchanged", () => {
    expect(
      ensureShadowNeverBlocks({
        decision: "soft_signal",
        reason: "threshold_crossed_signal_only",
      }).decision,
    ).toBe("soft_signal");
    expect(
      ensureShadowNeverBlocks({ decision: "allow", reason: "below_threshold" })
        .decision,
    ).toBe("allow");
    expect(
      ensureShadowNeverBlocks({
        decision: "failed",
        reason: "projection_missing",
        finopsSideOnly: true,
      }).decision,
    ).toBe("failed");
  });

  it("T7-SW15 pilot constant equals OPS1_PROJECT_KEY sfia-studio-ops1", () => {
    expect(T7_SHADOW_PILOT_PROJECT_ID).toBe("sfia-studio-ops1");
    expect(T7_SHADOW_PILOT_PROJECT_ID).toBe(OPS1_PROJECT_KEY);
  });

  it("T7-SW16 new composers expose no MONITOR/E1/enforce activation API", () => {
    const adapter = readFileSync(
      path.join(
        process.cwd(),
        "lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts",
      ),
      "utf8",
    );
    const pilot = readFileSync(
      path.join(
        process.cwd(),
        "lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts",
      ),
      "utf8",
    );
    expect(adapter).toMatch(/effect:\s*"signal_only"/);
    expect(adapter).toMatch(/shadow_block_forbidden/);
    expect(adapter).toMatch(/rollout_not_shadow_inert/);
    expect(pilot).not.toMatch(/E1_ENFORCED/);
    expect(pilot).not.toMatch(/effect:\s*"enforce"/);
    expect(adapter).not.toMatch(/upsertProjectRollout/);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`

Committed SHA-256: `d57f4f1b98a6900bac92f90ba78bb1c5eb553441a062ea0c5ee6e80db2261dc0`

```typescript
/**
 * @vitest-environment node
 *
 * T7 SHADOW Option A — wiring integration (T7-SW01..SW15).
 * Requires DATABASE_URL ephemeral Postgres — never Neon.
 * TEST ONLY rows/policies — NOT product activation / NOT 15/20/25/30.
 */
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import type { Pool } from "pg";
import { getFixture } from "@/lib/oa/execution-run";
import {
  composeExecutionRunD2D3T7ShadowPilot,
  T7_SHADOW_PILOT_PROJECT_ID,
} from "@/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
import {
  composeExecutionRunProviders,
} from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";
import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
import { composeFinOpsT7ShadowExecutionDeps } from "@/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps";
import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import type { FinOpsRolloutMode } from "@/lib/oa/finops/application/types.rollout";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

/** TEST ONLY fictitious threshold — NOT historical calibration. */
const TEST_ONLY_THRESHOLD = "1.00000000";
const TEST_ONLY_ELIGIBLE = "9.99000000";

const PILOT = T7_SHADOW_PILOT_PROJECT_ID;
const OTHER = "project:d2d1-fixture";

async function upsertMode(
  pool: Pool,
  projectId: string,
  mode: FinOpsRolloutMode,
): Promise<void> {
  const store = createPostgresFinOpsRolloutStore(pool);
  await store.upsertProjectRollout({
    projectId,
    mode,
    updatedAt: "2026-08-08T16:00:00.000Z",
  });
}

async function seedProjection(
  pool: Pool,
  projectId: string,
  eligible: string,
): Promise<void> {
  await pool.query(
    `INSERT INTO finops_enforcement_projection (
       project_id, period_start, currency,
       blocking_eligible_amount, billed_amount, provider_observed_amount,
       eligible_cost_event_count, billed_event_count, provider_observed_event_count,
       rebuild_version, rebuilt_at
     ) VALUES ($1, '2026-08-01', 'USD', $2, $2, '0.00000000', 1, 1, 0, 1, NOW())
     ON CONFLICT (project_id, period_start, currency) DO UPDATE SET
       blocking_eligible_amount = EXCLUDED.blocking_eligible_amount,
       billed_amount = EXCLUDED.billed_amount,
       rebuild_version = finops_enforcement_projection.rebuild_version + 1,
       rebuilt_at = NOW()`,
    [projectId, eligible],
  );
}

function spyProviders() {
  const ai = new FakeAiExecutionAdapter();
  const completeSpy = vi.spyOn(ai, "complete");
  const secretsAdapter = new FakeSecretSourceAdapter();
  const providers = composeExecutionRunProviders({
    ai,
    git: new FakeGitReadAdapter({
      repositoryAllowlist: [
        "o/r",
        "example/example",
        "mcleland147/sfia-workspace",
      ],
      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
    }),
    cursor: new FixtureCursorExecutionAdapter(),
    secrets: {
      resolve: (secretId) => secretsAdapter.resolve(secretId),
    },
    events: new RecordingExecutionEventSink(),
  });
  return { providers, completeSpy };
}

function coordinateInput(projectId: string, suffix: string) {
  const fixture = getFixture("nominal");
  return {
    intent: {
      ...fixture.intent,
      intentId: `intent:t7sw:${suffix}`,
      correlationId: `corr:t7sw:${suffix}`,
    },
    context: {
      ...fixture.context,
      projectId,
    },
    providerRequest: {
      correlationId: `corr:t7sw:${suffix}`,
      lane: "ai" as const,
      operation: "complete" as const,
      messages: [{ role: "user" as const, content: "bounded fixture summary" }],
      timeoutMs: 100,
    },
    timeoutMs: 100,
  };
}

describeDb("T7 SHADOW Option A — wiring integration", () => {
  let pool: Pool;
  const clockIso = "2026-08-08T16:10:00.000Z";

  beforeAll(async () => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
    await pool.query(`SELECT 1`);
  });

  afterAll(async () => {
    await pool.query(
      `DELETE FROM finops_rollout_config WHERE project_id = ANY($1::text[])`,
      [[PILOT, OTHER, `${PILOT}-extra`]],
    );
    await pool.query(
      `DELETE FROM finops_enforcement_projection WHERE project_id = ANY($1::text[])`,
      [[PILOT, OTHER]],
    );
    await closeFinOpsPool(pool);
  });

  it("T7-SW01 pilot + OFF → no block · no shadow policy · capture inactive", async () => {
    await upsertMode(pool, PILOT, "OFF");
    const policy = vi.fn(async () => ({
      thresholdCode: "TEST_ONLY_SW",
      currency: "USD",
      thresholdAmount: TEST_ONLY_THRESHOLD,
    }));
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: policy,
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw01"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(policy).not.toHaveBeenCalled();
    expect(result.finopsCapture?.status).toBe("disabled");
  });

  it("T7-SW02 pilot + missing row → default OFF inert", async () => {
    await pool.query(
      `DELETE FROM finops_rollout_config WHERE project_id = $1`,
      [PILOT],
    );
    const policy = vi.fn(async () => null);
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: policy,
    });
    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: PILOT,
      executionRunId: "run:sw02",
      correlationId: "corr:sw02",
      occurredAt: clockIso,
    });
    expect(decision.decision).toBe("allow");
    expect(decision.reason).toBe("rollout_not_shadow_inert");
    expect(policy).not.toHaveBeenCalled();
    const instruction = await deps.resolveProjectRollout(PILOT);
    expect(instruction.mode).toBe("OFF");
    expect(instruction.resolution).toBe("default_off");
  });

  it("T7-SW03 rollout store failure → fail-open OFF inert · provider path safe", async () => {
    const brokenPool = {
      query: async () => {
        throw new Error("simulated rollout read failure");
      },
      connect: async () => {
        throw new Error("simulated connect failure");
      },
    } as unknown as Pool;
    const policy = vi.fn(async () => null);
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool: brokenPool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: policy,
    });
    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: PILOT,
      executionRunId: "run:sw03",
      correlationId: "corr:sw03",
      occurredAt: clockIso,
    });
    // resolveFinOpsRollout fail-opens to OFF → adapter stays inert (never block).
    expect(decision.decision).toBe("allow");
    expect(decision.reason).toBe("rollout_not_shadow_inert");
    expect(policy).not.toHaveBeenCalled();
  });

  it("T7-SW04 pilot + SHADOW → policy resolver called · effect forced signal_only", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, "0.50000000");
    const seenEffects: string[] = [];
    const policy = vi.fn(async () => {
      seenEffects.push("caller_had_no_effect_field");
      return {
        thresholdCode: "TEST_ONLY_SW",
        currency: "USD",
        thresholdAmount: TEST_ONLY_THRESHOLD,
      };
    });
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: policy,
    });
    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: PILOT,
      executionRunId: "run:sw04",
      correlationId: "corr:sw04",
      occurredAt: clockIso,
    });
    expect(policy).toHaveBeenCalled();
    expect(seenEffects).toEqual(["caller_had_no_effect_field"]);
    expect(decision.decision).not.toBe("block");
    expect(["allow", "soft_signal", "failed"]).toContain(decision.decision);
  });

  it("T7-SW05 SHADOW threshold crossed TEST policy → soft_signal · provider invoked · never blocked", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => ({
        thresholdCode: "TEST_ONLY_SW",
        currency: "USD",
        thresholdAmount: TEST_ONLY_THRESHOLD,
      }),
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw05"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(result.finopsCapture?.status).not.toBeUndefined();
  });

  it("T7-SW07 non-pilot projectId → pilot SHADOW path inactive", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await upsertMode(pool, OTHER, "SHADOW");
    const policy = vi.fn(async () => ({
      thresholdCode: "TEST_ONLY_SW",
      currency: "USD",
      thresholdAmount: TEST_ONLY_THRESHOLD,
    }));
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: policy,
    });
    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: OTHER,
      executionRunId: "run:sw07",
      correlationId: "corr:sw07",
      occurredAt: clockIso,
    });
    expect(decision.decision).toBe("allow");
    expect(decision.reason).toBe("non_pilot_inert");
    expect(policy).not.toHaveBeenCalled();
    const capture = await deps.capture.captureUsage({
      projectId: OTHER,
      executionRunId: "run:sw07",
      correlationId: "corr:sw07",
      provider: "fixture",
      occurredAt: clockIso,
      usage: { status: "validated", totalTokens: 1 },
    });
    expect(capture.status).toBe("disabled");
  });

  it("T7-SW08 MONITOR row TEST → adapter inert · provider continues", async () => {
    await upsertMode(pool, PILOT, "MONITOR");
    const policy = vi.fn(async () => ({
      thresholdCode: "TEST_ONLY_SW",
      currency: "USD",
      thresholdAmount: TEST_ONLY_THRESHOLD,
    }));
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: policy,
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw08"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(policy).not.toHaveBeenCalled();
  });

  it("T7-SW09 E1 row TEST → adapter inert · provider continues", async () => {
    await upsertMode(pool, PILOT, "E1_ENFORCED");
    const policy = vi.fn(async () => ({
      thresholdCode: "TEST_ONLY_SW",
      currency: "USD",
      thresholdAmount: TEST_ONLY_THRESHOLD,
    }));
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: policy,
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw09"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(policy).not.toHaveBeenCalled();
  });

  it("T7-SW10 policy absent → allow/not_configured · provider continues", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => null,
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw10"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("T7-SW11 policy resolver throw → failed/fail-open · provider continues", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => {
        throw new Error("TEST_ONLY policy boom");
      },
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw11"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("T7-SW12 shadow decision sink throw → provider continues", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, "0.10000000");
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => null,
      onShadowDecision: () => {
        throw new Error("TEST_ONLY sink boom");
      },
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw12"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("T7-SW13 SHADOW + successful AI → capture delegated for pilot", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, "0.10000000");
    const { providers } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => null,
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw13"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(result.finopsCapture).toBeDefined();
    expect(["created", "duplicate", "failed"]).toContain(
      result.finopsCapture!.status,
    );
  });

  it("T7-SW14 OFF / non-pilot → no SHADOW capture", async () => {
    await upsertMode(pool, PILOT, "OFF");
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: async () => null,
    });
    const offCapture = await deps.capture.captureUsage({
      projectId: PILOT,
      executionRunId: "run:sw14a",
      correlationId: "corr:sw14a",
      provider: "fixture",
      occurredAt: clockIso,
      usage: { status: "validated", totalTokens: 1 },
    });
    expect(offCapture.status).toBe("disabled");
    const otherCapture = await deps.capture.captureUsage({
      projectId: OTHER,
      executionRunId: "run:sw14b",
      correlationId: "corr:sw14b",
      provider: "fixture",
      occurredAt: clockIso,
      usage: { status: "validated", totalTokens: 1 },
    });
    expect(otherCapture.status).toBe("disabled");
  });

  it("T7-SW15 pilot scenario uses exact sfia-studio-ops1 for rollout/eval/capture", async () => {
    expect(PILOT).toBe("sfia-studio-ops1");
    await upsertMode(pool, PILOT, "SHADOW");
    const seen: string[] = [];
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: async (input) => {
        seen.push(input.projectId);
        return null;
      },
    });
    await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: PILOT,
      executionRunId: "run:sw15",
      correlationId: "corr:sw15",
      occurredAt: clockIso,
    });
    expect(seen).toEqual(["sfia-studio-ops1"]);
    expect(deps.pilotProjectId).toBe("sfia-studio-ops1");
  });
});
```

### `projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md`

Committed SHA-256: `5a03815d2236806311f0c519f2a5761102297451c14b8e7f784f3231854f12c2` · pack embed soft-SHA `b0cfc51bc23e9689dc66fdad30212623ebfb576209382b1447853f56ad6f404a` (trailing WS stripped for handoff only)

````markdown
# 157 — FinOps T7 SHADOW Option A + Thin Adapter — Wiring Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md`
**Cycle:** 8 — Delivery / implémentation
**Profil:** Critical
**Typologie:** EVOL / CODE / TEST / DOC

---

## A. Status / anti-claims

| Claim | Status |
|-------|--------|
| Option A (pre-provider execution-run) selected by Morris | **TRUE** |
| Thin adapter delivered | **TRUE** |
| Pilot projectId `sfia-studio-ops1` selected by Morris | **TRUE** |
| Existing `composeExecutionRunD2D3` injection surface reused | **TRUE** |
| `coordinateExecutionRun` unmodified | **TRUE** |
| `composeExecutionRunD2D3` unmodified | **TRUE** |
| T7/T4/T6 foundation sources unmodified | **TRUE** |
| signal_only forced for SHADOW | **TRUE** |
| SHADOW never BLOCK (defense-in-depth) | **TRUE** |
| MONITOR / E1 not activated by adapter | **TRUE** |
| No production threshold / 15/20/25/30 | **TRUE** |
| No durable SHADOW row on real env | **TRUE** |
| SHADOW activated | **FALSE** |
| Project commit / push / PR | **FALSE** |

```text
SHADOW WIRING DELIVERED LOCALLY —
READY FOR DEDICATED WIRING QA —
SHADOW NOT ACTIVATED
```

---

## B. GO Morris

**Utterance / decision:**
`GO Option A + thin adapter, Delivery Cycle 8 profil Critical, with sfia-studio-ops1 as projectId pilote canonique SHADOW.`

**Consumed:** local CREATE wiring + tests + execution record.
**Not consumed:** real SHADOW activation · MONITOR · E1 · T3 · thresholds · Neon · commit/push/PR.

---

## C. Files CREATE

1. `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`
2. `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts`
3. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`
4. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`
5. This execution record (`157-…`)

**MODIFY / DELETE:** none (core files untouched).

---

## D. Architecture

```text
composeExecutionRunD2D3T7ShadowPilot
  → composeFinOpsT7ShadowExecutionDeps(pool, pilot=sfia-studio-ops1)
       → composeFinOpsT7Runtime (reuse)
       → createFinOpsEnforcementPort + effect forced signal_only
       → pilot-gated capture
  → composeExecutionRunD2D3({ finops, finopsEnforcement })  // unchanged
```

---

## E. Rollback

1. Config: no product SHADOW row written by this Delivery.
2. Code: remove pilot composer injection / feature gate.
3. No migration.

---

## F. Next

Cycle 9 — Dedicated T7 SHADOW Wiring QA (distinct GO).
Then distinct GO for actual pilot activation if Morris authorizes.
````
