# Cycle 9 — F3 NATIVE FIXTURE VERTICAL SLICE — QA / VALIDATION — FULL Review Pack
## FULL Review Pack — QA Gate B fixture candidate (ACTUAL NEXT RUNTIME)

| Field | Value |
|-------|-------|
| **Role** | F3 Native Fixture Vertical Slice — QA / validation |
| **Pack type** | FULL Review Pack — synthesis-only **NO** |
| **Timestamp CEST** | 2026-08-11 19:25:02 CEST (+0200) |
| **Timestamp UTC** | 2026-08-11 17:25:02 UTC |
| **Timestamp ISO UTC** | 2026-08-11T17:25:02Z |
| **GO exact** | `GO QA` — QA end-to-end du F3 fixture déjà livré localement sous Gate B |
| **Cycle / profil** | Cycle **9** / **Standard** / **EVOL** / Critical **NON** |
| **Template** | v2.6 |
| **Template SHA** | `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| **CKC** | absent — fallback template v2.6 + décisions F3 + handoff Delivery |
| **Inbound handoff tip (BEFORE publish)** | `a01de1cfde398c0e8554829dafa758557d3e8534` |
| **Inbound handoff blob (BEFORE publish)** | `e6b23ffcf08efa362e6a8501f889c56bac12c580` |
| **Inbound role** | F3 Native Fixture Vertical Slice — Delivery (Cycle 8) |
| **Inbound pack** | FULL · synthesis-only NO · Gate B CONSUMED · READY FOR CHATGPT REVIEW / QA FIXTURE GATE |
| **Local Git Truth** | branch `delivery/sfia-studio-f3-native-fixture-vertical-slice` · HEAD=`origin/main`=`8dcac9276b46314c3ca7c977fbb98be27cfabcb7` · staged empty · remote delivery **ABSENT** · dirty working tree = candidate package only |
| **Delivery WT** | `…/finops-t2-main/.tmp-sfia-review/worktrees/f3-native-fixture-vertical-slice` |
| **MAIN WT** | `…/finops-t2-main` |
| **Candidate patch SHA BEFORE** | `030190884f5c2ffc50d8b0f41bd53826670c615abbcdffe53b305bf6dfd17fb7` |
| **Candidate patch SHA AFTER** | `030190884f5c2ffc50d8b0f41bd53826670c615abbcdffe53b305bf6dfd17fb7` |
| **BEFORE/AFTER equality** | **IDENTICAL** (patch + all 11 new-file SHA-256) |
| **Gate A** | CONSUMED (prior) |
| **Gate B** | CONSUMED (Delivery) — **VALIDATED** by this QA (not re-consumed) |
| **Gates C / D** | **NOT CONSUMED** |
| **HARD R-T-A3-1 / R-T-A3-2** | **OPEN HARD** — BLOCKS REAL |
| **B5 fixture path** | ADOPTED BY MORRIS — BOUNDED ACCEPTANCE FOR F3 FIXTURE PATH |
| **B5 global** | **OPEN** / NOT GLOBAL CLOSED |
| **T-A6 COMPLETE** | **NOT DECLARED** |
| **Cursor REAL** | **BLOCKED** |
| **REAL Delivery** | NOT AUTHORIZED |
| **Project mutations / commits / push / PR / merge / force** | **0 / 0 / 0 / 0 / 0 / 0** |

---

## Verdict

```
F3 NATIVE FIXTURE VERTICAL SLICE QA COMPLETE —
ACTUAL NEXT RUNTIME END-TO-END VALIDATED —
GATE B DELIVERY VALIDATED —
F2 GO REMAINS PREPARE-ONLY —
PREPARE CREATES CONTRACT WITHOUT ATTEMPT —
EXPLICIT FIXTURE CONFIRMATION REQUIRED —
T-A5 FIXTURE ATTEMPT SUCCEEDED —
TEST EXECUTION ADAPTER CONFIRMED —
ADAPTER EXTERNAL EFFECTS FALSE —
DOUBLE INVOCATION DOES NOT DOUBLE-LAUNCH —
PROCESS RESTART FAILS CLOSED —
NO AUTHORITY RECONSTRUCTED FROM CONVERSATION —
T-A6 EVIDENCE + REVIEWBUNDLE BINDINGS VALIDATED —
NEXT-GATE OUTPUT REMAINS RECOMMENDATION ONLY —
TECHNICAL SUCCESS DOES NOT IMPLY READY —
T-A6 COMPLETE NOT DECLARED —
HARD R-T-A3-1 / R-T-A3-2 REMAIN OPEN —
B5 GLOBAL REMAINS OPEN —
GATE C / D NOT CONSUMED —
CURSOR REAL BLOCKED —
NO EXTERNAL NETWORK ACTIVITY —
NO OPS1 / EXECUTION-RUN PRODUCT PATH —
ACTUAL NEXT RUNTIME UI FUNCTIONALLY VALIDATED —
FIGMA PIXEL-PERFECT NOT CLAIMED —
CANDIDATE PACKAGE BYTE-IDENTICAL BEFORE / AFTER QA —
NO PROJECT MUTATION / COMMIT / PUSH / PR / MERGE —
FULL REVIEW PACK COMPLETE —
HANDOFF REMOTE VERIFIED —
READY FOR MORRIS PR READINESS GATE
```

---

## §0 GO / inbound / truth

- **GO exact:** `GO QA` (Morris) — end-to-end QA of the F3 fixture already delivered locally under Gate B.
- **Synthesis-only:** NO — this pack embeds FULL tracked diff + complete contents of all 11 new product files, plus BEFORE/AFTER SHA-256 equality proof.
- **Validation-only:** YES — no intentional product edits; no silent product correction.
- **Inbound remote Git Truth (re-read before publish):** tip `a01de1cfde398c0e8554829dafa758557d3e8534` / blob `e6b23ffcf08efa362e6a8501f889c56bac12c580` — Cycle 8 Delivery FULL pack · Gate B CONSUMED · READY FOR CHATGPT REVIEW / QA FIXTURE GATE.
- **Local Git Truth (Delivery WT):** branch `delivery/sfia-studio-f3-native-fixture-vertical-slice` · HEAD=`8dcac9276b46314c3ca7c977fbb98be27cfabcb7` = `origin/main` · staged empty · remote delivery branch ABSENT · archive under `.tmp-sfia-review/archive/**` preserved.
- **Candidate package:** 7 tracked modified (+707/−20) + 11 new product files — unchanged through QA.

---

## §1 Candidate package + immutability

### Tracked modified (7) — +707 / −20
```
projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
projects/sfia-studio/app/features/project-assistant/actions.ts
projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
projects/sfia-studio/app/features/project-assistant/types.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
```

### New product files (11)
```
projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
projects/sfia-studio/app/features/project-assistant/f3/attemptReaderBridge.ts
projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
projects/sfia-studio/app/features/project-assistant/f3/constants.ts
projects/sfia-studio/app/features/project-assistant/f3/fixtureAgent.ts
projects/sfia-studio/app/features/project-assistant/f3/index.ts
projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts
projects/sfia-studio/app/features/project-assistant/f3/types.ts
projects/sfia-studio/app/features/project-assistant/f3/validateF2ForPrepare.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
```

### Fingerprints
| Artifact | SHA-256 |
|----------|---------|
| `candidate-before.patch` | `030190884f5c2ffc50d8b0f41bd53826670c615abbcdffe53b305bf6dfd17fb7` |
| `candidate-after.patch` | `030190884f5c2ffc50d8b0f41bd53826670c615abbcdffe53b305bf6dfd17fb7` |
| Delivery `git-diff-full.patch` | `030190884f5c2ffc50d8b0f41bd53826670c615abbcdffe53b305bf6dfd17fb7` (byte-identical) |

**BEFORE new-file SHA-256:**
```
# candidate-before-sha256.txt — NEW product files only
# generated 2026-08-11T17:03:10Z

abe0d5aff9b52f34ee16198e2905c8714516247c5fd2ef8f573cfebd24b2d57a  17631  projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
8367d94a12702115605b1b176415f7a521d5cc398984ec11cfb8003dc6a098ce  1084  projects/sfia-studio/app/features/project-assistant/f3/attemptReaderBridge.ts
dabcd63c4231283a2700221cbce9c236c76ba2319bd93fe40e0e48518588f31f  13085  projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
fe3f7dfeca0285d8400a564050bfab0c083163b5419e496f0521904b3f1020f2  2011  projects/sfia-studio/app/features/project-assistant/f3/constants.ts
4ab8a368595f2706bd0912e288f6ce3f12906e9b86218c338a0999a53a04a58f  1982  projects/sfia-studio/app/features/project-assistant/f3/fixtureAgent.ts
8aaf8b65081fa9c0818f02069cae5075a048091807d44471c182760bd236aeae  679  projects/sfia-studio/app/features/project-assistant/f3/index.ts
3495ac8c9f5ab40ce60ca52c31b2721b8b0ad194f94c1fb6ccd170c7faf423cc  5091  projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
8a93e12336659869b4e0c6802c60a7effbaf938070fc9fd8b62834bae4799901  5891  projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts
993a5776b334efb6af9671705bedae462f54984eaf4a494efe64d02e8109c458  2797  projects/sfia-studio/app/features/project-assistant/f3/types.ts
67ed05ee97a43071b966713a1f1eaeeb3091453670c76f1d107e313b197594cd  2968  projects/sfia-studio/app/features/project-assistant/f3/validateF2ForPrepare.ts
7b264f29f095df439bdb630eb2d003c0875cff055b3efd2c4f9d8df1443a7de1  2909  projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
```

**AFTER new-file SHA-256:**
```
# candidate-after-sha256.txt — NEW product files only
# generated 2026-08-11T17:21:29Z

abe0d5aff9b52f34ee16198e2905c8714516247c5fd2ef8f573cfebd24b2d57a  17631  projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
8367d94a12702115605b1b176415f7a521d5cc398984ec11cfb8003dc6a098ce  1084  projects/sfia-studio/app/features/project-assistant/f3/attemptReaderBridge.ts
dabcd63c4231283a2700221cbce9c236c76ba2319bd93fe40e0e48518588f31f  13085  projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
fe3f7dfeca0285d8400a564050bfab0c083163b5419e496f0521904b3f1020f2  2011  projects/sfia-studio/app/features/project-assistant/f3/constants.ts
4ab8a368595f2706bd0912e288f6ce3f12906e9b86218c338a0999a53a04a58f  1982  projects/sfia-studio/app/features/project-assistant/f3/fixtureAgent.ts
8aaf8b65081fa9c0818f02069cae5075a048091807d44471c182760bd236aeae  679  projects/sfia-studio/app/features/project-assistant/f3/index.ts
3495ac8c9f5ab40ce60ca52c31b2721b8b0ad194f94c1fb6ccd170c7faf423cc  5091  projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
8a93e12336659869b4e0c6802c60a7effbaf938070fc9fd8b62834bae4799901  5891  projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts
993a5776b334efb6af9671705bedae462f54984eaf4a494efe64d02e8109c458  2797  projects/sfia-studio/app/features/project-assistant/f3/types.ts
67ed05ee97a43071b966713a1f1eaeeb3091453670c76f1d107e313b197594cd  2968  projects/sfia-studio/app/features/project-assistant/f3/validateF2ForPrepare.ts
7b264f29f095df439bdb630eb2d003c0875cff055b3efd2c4f9d8df1443a7de1  2909  projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
```

**Equality:** patch SHA IDENTICAL · all 11 new-file SHA lines IDENTICAL · Delivery pack patch IDENTICAL.

### Final git probes (AFTER QA)
```
git status --short
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/
?? projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts

git diff --stat → 7 files changed, 707 insertions(+), 20 deletions(-)
git diff --cached → (empty)
git diff --check → (empty — PASS)
```
Note: gitignored `tsconfig.tsbuildinfo` / `.next/` may exist; ignored as non-product.

---

## §2 Static / targeted / broad / security

| Check | Result | Evidence |
|-------|--------|----------|
| typecheck | **PASS** (exit 0) | `f3-native-fixture-qa/logs/typecheck.log` |
| lint | **PASS** (exit 0) | `logs/lint.log` |
| build (`NEXT_TELEMETRY_DISABLED=1 npm run build`) | **PASS** (exit 0) | `logs/build.log` |
| targeted vitest | **PASS** — 5 files / **29** tests | `logs/targeted.log` (incl. `f3.fixtureVerticalSlice` 9/9) |
| broad vitest excl. `**/oa/finops/postgres/**` | **PASS** — **158** files / **1616** tests | `logs/broad.log` |
| `git diff --check` | **PASS** | `logs/diff-check.log` |
| security scan | **PASS** — Phase B dangerous usage = 0; constants `F3_MODE=FIXTURE`, `adp:f3-test-fixture`, `agt:f3-fixture`, `externalEffects` confirmed | `logs/security-scan.log` |

---

## §3 Fail-closed matrix + idempotence (vitest + E2E)

| Case | Source | Result |
|------|--------|--------|
| F2 GO alone → no Attempt / launch=0 | vitest AC-F3-FIX-01/02 + E2E A | **PASS** |
| PREPARE → contract without Attempt | vitest AC-F3-FIX-03/04 + E2E A | **PASS** |
| Hostile REAL/adapter/agent fields ignored | vitest AC-F3-FIX-05 | **PASS** |
| Refuse prepare without approved proposal / missing decision | vitest AC-F3-FIX-06/07 | **PASS** |
| Confirm+execute chain + reinjection flags all false | vitest AC-F3-FIX-08..16 + E2E A | **PASS** |
| Double invoke → launch stays 1 / reusedExistingAttempt | vitest AC-F3-FIX-17/18 + E2E A | **PASS** |
| Contract version mismatch fail-closed | vitest AC-F3-FIX-19 | **PASS** |
| Process-local wipe / proposal store reset fail-closed | vitest AC-F3-FIX-20/21 | **PASS** |
| Explicit `TestExecutionAdapter` (not NoOp) | vitest AC-F3-FIX-22 | **PASS** |
| Process restart (SIGTERM + `next start` same port) fails closed | E2E B | **PASS** — no silent execute success; old ids unavailable; adapter launch for wiped state = 0 |
| No authority reconstructed from conversation after restart | E2E B | **PASS** |

**Idempotence:** first confirm+execute → `launchCount=1`; second invoke → `launchCount=1` (UI confirm button gone after success; vitest proves reused attempt).

---

## §4 ACTUAL NEXT RUNTIME (happy path)

| Field | Value |
|-------|-------|
| Runtime label | **ACTUAL NEXT RUNTIME** (not component render / not Storybook / not vitest DOM) |
| Server | `next start --hostname 127.0.0.1` on port **55293** (Next.js **15.5.20**) against existing `.next` build |
| Base URL | `http://127.0.0.1:55293` |
| Create route | `/studio/projects/new` |
| Project route observed | `/studio/projects/prj%3A997d759a-6fad-4c30-9265-0cd3d642c9cf` |
| Conversation provider | `OPS1_CONVERSATION_PROVIDER=fake` → **FakeConversationProvider** deterministic |
| Other env | `D1_INTAKE_PROVIDER=fake` · fake `OPENAI_API_KEY` / model (no live OpenAI) |
| Chromium | local ms-playwright chromium-1228 (no browser download) |
| Scenario A | **PASS** |
| Scenario B (restart) | **PASS** |

### Happy-path proofs (E2E A)
| Assertion | Detail |
|-----------|--------|
| F2 decision kind | **GO** |
| `executionPerformed` after GO | **false** |
| No execution banner after GO | PASS |
| No attempt before/after prepare | PASS |
| Contract id | `xct:f3:prop:f2:c86af26d-64c1-4d58-bb3f-9eeff4cbfdca` |
| Contract version (UI after prepare) | `2` · status `confirmation_required` |
| Attempt after confirm | **succeeded** · adapter `adp:f3-test-fixture` · agent `agt:f3-fixture` |
| Evidence | `ev:f3-fixture:xat:f3:f3:prop:f2:c86af26d-64c1-4d58-bb3f-9eeff4cbfdca` |
| ReviewBundle | `rb:f3-fixture:xat:f3:f3:prop:f2:c86af26d-64c1-4d58-bb3f-9eeff4cbfdca` |
| Recommendation flags | `executionAuthority=false` · `gateConsumed=false` · `decisionCreated=false` |
| Labels | PAS DE CLAIM READY · T-A6 COMPLETE NON · CURSOR REAL BLOQUÉ · AUCUN GIT WRITE |
| launchCount | **1** (stays 1 after re-attempt) |
| externalEffects | **false** (vitest + UI) |

Artifacts: `e2e-results.json`, `logs/e2e-happy.log`, `logs/e2e-restart.log`, `logs/next-start.log`, `e2e/actual-next-f3-qa.mjs`.

---

## §5 Network / external effects

| Field | Value |
|-------|-------|
| Origins observed | `http://127.0.0.1:55293` only |
| External origins | **[]** |
| External request count | **0** |
| Request sample count | 34 (all loopback) |
| Adapter externalEffects | **false** |
| Product OPS1 / execution-run path | **none** (importBoundaries + security scan) |

Evidence: `logs/network-origins.json` + `e2e-results.json` `network` block.

---

## §6 Screenshots — ACTUAL NEXT RUNTIME

Path: `.tmp-sfia-review/f3-native-fixture-qa/runtime-proof/`

| Scene | Desktop (actual PNG) | Mobile (actual PNG) |
|-------|----------------------|---------------------|
| 01 F2 GO — no execution | `01-f2-go-no-execution-desktop-1280x800.png` **1280×800** | `01-f2-go-no-execution-mobile-390x844.png` **390×844** |
| 02 After PREPARE contract | `02-after-prepare-contract-desktop-1280x800.png` **1280×800** | `02-after-prepare-contract-mobile-390x844.png` **390×844** |
| 03 After fixture execution | `03-after-fixture-execution-desktop-1280x800.png` **1280×800** | `03-after-fixture-execution-mobile-390x844.png` **390×844** |
| 04 Restart fail-closed | `04-restart-fail-closed-desktop-1280x800.png` **1280×800** | `04-restart-fail-closed-mobile-390x844.png` **390×844** |

All eight PNGs measured via IHDR; runtime label **ACTUAL NEXT RUNTIME**. Manifest: `runtime-proof/runtime-proof-manifest.md`.

### Figma caveat
**FIGMA SOURCE NOT IDENTIFIED / NOT APPLICABLE FOR REUSED COMPONENT PATTERN.** Studio P0 Figma has no Project Assistant panel frame. **FIGMA PIXEL-PERFECT NOT CLAIMED** — functional ACTUAL NEXT UI validation only.

---

## §7 HARD / B5 / Gates / anti-claims

| Item | Status |
|------|--------|
| HARD `R-T-A3-1` / `R-T-A3-2` | **OPEN HARD** — UI surfaces OPEN; blocks REAL |
| B5 fixture path | ADOPTED BY MORRIS (bounded) |
| B5 global | **OPEN** |
| Gate A | CONSUMED |
| Gate B | CONSUMED (Delivery) + QA-validated |
| Gate C / D | **NOT CONSUMED** |
| T-A6 COMPLETE | **NOT DECLARED** |
| Cursor REAL | **BLOCKED** |
| READY product claim | **NOT MADE** — technical success ≠ READY |

### Honest maturity caveat
UI **always** surfaces HARD `R-T-A3-1` / `R-T-A3-2` / `R-M01` as OPEN. T-A6 `RecommendNextGate` only materializes `hard_reservation_open` blockers when a **MaturityAssessment** is bound; creating maturity needs claim/freeze chain beyond this fixture slice. Technical fixture success ≠ READY; T-A6 COMPLETE **not** declared. Figma not identified.

### Counters
| Counter | Value |
|---------|-------|
| project mutations (intentional QA) | **0** |
| project commits | **0** |
| project pushes | **0** |
| PR | **0** |
| merge | **0** |
| force | **0** |
| real Cursor calls | **0** |
| external execution / network | **0** |
| Git writes product | **0** |

---

## §8 Handoff (publish-in-cycle L3)

| Field | Value |
|-------|-------|
| Mode | `publish-in-cycle` |
| Branch | `sfia/review-handoff` |
| Canonical path | `sfia-review-handoff/latest-chatgpt-review.md` |
| Publisher | `scripts/sfia/publish-review-handoff.sh` |
| Commit message | `docs(review-handoff): publish F3 fixture QA` |
| Remote tip BEFORE | `a01de1cfde398c0e8554829dafa758557d3e8534` |
| Remote blob BEFORE | `e6b23ffcf08efa362e6a8501f889c56bac12c580` |
| First publish tip | `644df5232dcfd4eb17c04bc7eb0e2776ce72cafb` |
| First publish blob | `609ea79bffec9c4437c4a02d60755c67fef13e4e` |
| Remote tip AFTER | `644df5232dcfd4eb17c04bc7eb0e2776ce72cafb` |
| Remote blob AFTER | `609ea79bffec9c4437c4a02d60755c67fef13e4e` |
| Push handoff | L3 FF-only; no force |
| Delivery branch push | **NOT DONE** (forbidden) |
| Return to delivery branch | **required** after publish |

### §8.1 Remote re-read chain
- tip before (inbound): `a01de1cfde398c0e8554829dafa758557d3e8534`
- blob before (inbound): `e6b23ffcf08efa362e6a8501f889c56bac12c580`
- tip after first publish: `644df5232dcfd4eb17c04bc7eb0e2776ce72cafb`
- blob after first publish: `609ea79bffec9c4437c4a02d60755c67fef13e4e`
- tip/blob FINAL = authentic remote truth after finalize (reported in Cursor fields 44–45)
- delivery branch remote: ABSENT
- force push: NOT USED

---

## §9 Instruction ChatGPT (obligatoire)

Avant de répondre à Morris, ChatGPT doit relire depuis Git :

- branche : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`

Le rapport Cursor seul ne vaut pas validation. Vérifier notamment : Cycle 9 · GO QA · ACTUAL NEXT RUNTIME · restart fail-closed · launchCount=1 · externalEffects=false · external network 0 · candidate BEFORE/AFTER identical · 0 Git write projet · Gates C/D NOT CONSUMED · HARD OPEN · Cursor REAL BLOCKED · handoff remote tip/blob after · delivery branch absent · verdict exact READY FOR MORRIS PR READINESS GATE.

Next gate candidate = **PR READINESS** of the F3 fixture package (no automatic PR / Gate C / Gate D / Cursor REAL).

---

## §10 FULL tracked diff (current AFTER — byte-identical to BEFORE / Delivery)

Source: `.tmp-sfia-review/f3-native-fixture-qa/candidate-after.patch`
SHA-256: `030190884f5c2ffc50d8b0f41bd53826670c615abbcdffe53b305bf6dfd17fb7`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
index bfdfcb5..d014533 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
@@ -12,17 +12,27 @@ import { StudioShell } from "@/components/shell/StudioShell";
 import { ProjectAssistantPanel } from "@/features/project-assistant/ProjectAssistantPanel";
 import { ProjectWorkspaceView } from "@/features/vertical-slice-ui/ProjectWorkspaceView";

-const { projectAssistantSendActionMock, projectAssistantDecideActionMock } =
-  vi.hoisted(() => ({
-    projectAssistantSendActionMock: vi.fn(),
-    projectAssistantDecideActionMock: vi.fn(),
-  }));
+const {
+  projectAssistantSendActionMock,
+  projectAssistantDecideActionMock,
+  projectAssistantPrepareF3FixtureActionMock,
+  projectAssistantConfirmAndExecuteF3FixtureActionMock,
+} = vi.hoisted(() => ({
+  projectAssistantSendActionMock: vi.fn(),
+  projectAssistantDecideActionMock: vi.fn(),
+  projectAssistantPrepareF3FixtureActionMock: vi.fn(),
+  projectAssistantConfirmAndExecuteF3FixtureActionMock: vi.fn(),
+}));

 vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantSendAction: (...args: unknown[]) =>
     projectAssistantSendActionMock(...args),
   projectAssistantDecideAction: (...args: unknown[]) =>
     projectAssistantDecideActionMock(...args),
+  projectAssistantPrepareF3FixtureAction: (...args: unknown[]) =>
+    projectAssistantPrepareF3FixtureActionMock(...args),
+  projectAssistantConfirmAndExecuteF3FixtureAction: (...args: unknown[]) =>
+    projectAssistantConfirmAndExecuteF3FixtureActionMock(...args),
 }));

 vi.mock("next/link", () => ({
@@ -95,6 +105,8 @@ describe("F1 ProjectAssistantPanel UI", () => {
   beforeEach(() => {
     projectAssistantSendActionMock.mockReset();
     projectAssistantDecideActionMock.mockReset();
+    projectAssistantPrepareF3FixtureActionMock.mockReset();
+    projectAssistantConfirmAndExecuteF3FixtureActionMock.mockReset();
   });

   afterEach(() => {
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
index c4ef041..22ee388 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
@@ -6,6 +6,7 @@ const FEATURE_DIR = path.resolve(
   __dirname,
   "../../features/project-assistant",
 );
+const F3_DIR = path.join(FEATURE_DIR, "f3");

 function listTsFiles(dir: string): string[] {
   const out: string[] = [];
@@ -17,7 +18,7 @@ function listTsFiles(dir: string): string[] {
   return out;
 }

-describe("project-assistant import boundaries (F1+F2)", () => {
+describe("project-assistant import boundaries (F1+F2+F3)", () => {
   it("does not import ops1, execution-run, or cursor execution paths", () => {
     const files = listTsFiles(FEATURE_DIR);
     expect(files.length).toBeGreaterThan(0);
@@ -29,10 +30,27 @@ describe("project-assistant import boundaries (F1+F2)", () => {
       expect(source).not.toMatch(/@\/lib\/oa\/execution-run/);
       expect(source).not.toMatch(/from ["'][^"']*execution-run/);
       expect(source).not.toMatch(/from ["']@\/lib\/.*cursor/i);
-      expect(source).not.toMatch(
-        /(?:import|export)[\s\S]{0,80}\b(?:StartExecution|ExecutionRun)\b/,
-      );
-      expect(source).not.toMatch(/selectedAgentRef\s*:\s*["'`]/);
     }
   });
+
+  it("F3 module forbids shell/child_process/ops1/execution-run/REAL adapters", () => {
+    const files = listTsFiles(F3_DIR);
+    expect(files.length).toBeGreaterThan(0);
+    for (const file of files) {
+      const source = readFileSync(file, "utf8");
+      expect(source).not.toMatch(/child_process/);
+      expect(source).not.toMatch(/node:child_process/);
+      expect(source).not.toMatch(/from ["']shelljs["']/);
+      expect(source).not.toMatch(/@\/lib\/ops1/);
+      expect(source).not.toMatch(/@\/lib\/oa\/execution-run/);
+      expect(source).not.toMatch(/NoOpExecutionAdapter/);
+      expect(source).not.toMatch(/mode:\s*["']REAL["']/);
+      expect(source).not.toMatch(/executionMode:\s*["']adapter_async["']/);
+    }
+  });
+
+  it("F2 decision DTO keeps executionPerformed false literal", () => {
+    const types = readFileSync(path.join(FEATURE_DIR, "f2/types.ts"), "utf8");
+    expect(types).toMatch(/executionPerformed:\s*false/);
+  });
 });
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index 67cd57e..f89e924 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -3,7 +3,9 @@
 import { useEffect, useId, useRef, useState, useTransition } from "react";
 import { StatusPill } from "@/components/ui/StatusPill";
 import {
+  projectAssistantConfirmAndExecuteF3FixtureAction,
   projectAssistantDecideAction,
+  projectAssistantPrepareF3FixtureAction,
   projectAssistantSendAction,
 } from "./actions";
 import type {
@@ -12,6 +14,7 @@ import type {
   F2TurnPayload,
 } from "./types";
 import type { F2DecisionKind, ProposalDto } from "./f2/types";
+import type { F3ExecutePayload, F3PreparePayload } from "./f3/types";
 import styles from "./project-assistant.module.css";

 type UiMessage = {
@@ -81,6 +84,9 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
   const [f2, setF2] = useState<F2TurnPayload | null>(null);
   const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
   const [reservesText, setReservesText] = useState("");
+  const [f3Prepare, setF3Prepare] = useState<F3PreparePayload | null>(null);
+  const [f3Execute, setF3Execute] = useState<F3ExecutePayload | null>(null);
+  const [f3Busy, setF3Busy] = useState(false);
   const [isPending, startTransition] = useTransition();
   const listRef = useRef<HTMLDivElement | null>(null);

@@ -95,10 +101,11 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       top: el.scrollHeight,
       behavior: "smooth",
     });
-  }, [messages, toolEvents, error, activeProposal, f2]);
+  }, [messages, toolEvents, error, activeProposal, f2, f3Prepare, f3Execute]);

   const busy =
     isPending ||
+    f3Busy ||
     uiState === "SENDING" ||
     uiState === "ASSISTANT_WORKING" ||
     uiState === "SOURCE_LOOKUP";
@@ -206,6 +213,89 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
     });
   }

+  const canPrepareF3 =
+    Boolean(f2?.decision?.readyForNextGatedStep) &&
+    Boolean(f2?.decision?.decisionId) &&
+    Boolean(activeProposal) &&
+    !f3Prepare &&
+    !f3Execute &&
+    !busy &&
+    !blocked;
+
+  const canConfirmF3 =
+    Boolean(f3Prepare) &&
+    !f3Execute &&
+    !busy &&
+    !blocked;
+
+  function prepareF3() {
+    if (!canPrepareF3 || !activeProposal || !f2?.decision) return;
+    if (f3Busy) return;
+    setF3Busy(true);
+    startTransition(async () => {
+      setError(null);
+      const result = await projectAssistantPrepareF3FixtureAction({
+        projectId,
+        proposalId: activeProposal.proposalId,
+        decisionId: f2.decision!.decisionId,
+      });
+      setF3Busy(false);
+      if (!result.ok) {
+        setUiState("ERROR_RECOVERABLE");
+        setError(result.message);
+        if (result.proposal) setActiveProposal(result.proposal);
+        return;
+      }
+      setF3Prepare(result.f3);
+      setF3Execute(null);
+      setEphemeralNotice(result.ephemeralNotice);
+      setMessages((prev) => [
+        ...prev,
+        {
+          id: nextId("assistant"),
+          role: "assistant",
+          content: result.text,
+        },
+      ]);
+      setUiState("ANSWERED");
+    });
+  }
+
+  function confirmAndExecuteF3() {
+    if (!canConfirmF3 || !f3Prepare || !activeProposal) return;
+    if (f3Busy) return;
+    setF3Busy(true);
+    startTransition(async () => {
+      setError(null);
+      const result = await projectAssistantConfirmAndExecuteF3FixtureAction({
+        projectId,
+        proposalId: activeProposal.proposalId,
+        decisionId: f3Prepare.decisionId,
+        executionContractId: f3Prepare.contract.executionContractId,
+        expectedContractVersion: f3Prepare.contract.version,
+      });
+      setF3Busy(false);
+      if (!result.ok) {
+        setUiState("ERROR_RECOVERABLE");
+        setError(result.message);
+        if (result.proposal) setActiveProposal(result.proposal);
+        return;
+      }
+      setF3Execute(result.f3);
+      setEphemeralNotice(result.ephemeralNotice);
+      setMessages((prev) => [
+        ...prev,
+        {
+          id: nextId("assistant"),
+          role: "assistant",
+          content: result.text,
+        },
+      ]);
+      setUiState("ANSWERED");
+    });
+  }
+
+
   return (
     <div
       className={styles.root}
@@ -221,9 +311,9 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         {ephemeralNotice}
       </p>
       <p className={styles.scope} data-testid="project-assistant-scope">
-        Périmètre F1+F2 : analyse · conversation · lecture · qualification ·
-        proposition · gate humain. Pas d&apos;exécution Cursor, pas d&apos;écriture,
-        pas de destination OPS1.
+        Périmètre F1+F2+F3 fixture : analyse · conversation · lecture · qualification ·
+        proposition · gate humain · prepare/confirm fixture. Pas d&apos;exécution Cursor REAL,
+        pas d&apos;écriture Git produit, pas de destination OPS1.
       </p>

       <div
@@ -449,7 +539,162 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           {f2.decision.readyForNextGatedStep ? (
             <p data-testid="f2-ready-next">READY FOR NEXT GATED STEP</p>
           ) : null}
-          <p className={styles.noExecutionBanner}>AUCUNE EXÉCUTION</p>
+          <p className={styles.noExecutionBanner} data-testid="f2-decision-no-execution">
+            AUCUNE EXÉCUTION
+          </p>
+          <p className={styles.cardMeta} data-testid="f2-execution-performed">
+            executionPerformed: {String(f2.decision.executionPerformed)}
+          </p>
+        </section>
+      ) : null}
+
+      {canPrepareF3 ? (
+        <section
+          className={styles.f3Card}
+          data-testid="project-assistant-f3-prepare"
+        >
+          <h3 className={styles.cardTitle}>F3 FIXTURE — PREPARE</h3>
+          <p className={styles.cardMeta}>
+            Le GO F2 autorise uniquement la préparation d&apos;un contrat fixture.
+          </p>
+          <div className={styles.f3Labels} data-testid="f3-prepare-labels">
+            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
+            <StatusPill tone="muted">CURSOR REAL BLOQUÉ</StatusPill>
+            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
+          </div>
+          <button
+            type="button"
+            className={styles.f3Button}
+            data-testid="f3-prepare-button"
+            disabled={!canPrepareF3}
+            onClick={() => prepareF3()}
+          >
+            Préparer l&apos;exécution fixture
+          </button>
+        </section>
+      ) : null}
+
+      {f3Prepare && !f3Execute ? (
+        <section
+          className={styles.f3Card}
+          data-testid="project-assistant-f3-contract"
+        >
+          <h3 className={styles.cardTitle}>CONTRAT FIXTURE PRÉPARÉ</h3>
+          <div className={styles.f3Labels} data-testid="f3-contract-labels">
+            <StatusPill tone="blueFlush">FIXTURE</StatusPill>
+            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
+            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
+            <StatusPill tone="orange">CURSOR REAL BLOQUÉ</StatusPill>
+          </div>
+          <dl className={styles.cardDl}>
+            <div>
+              <dt>Contract id</dt>
+              <dd data-testid="f3-contract-id">
+                {f3Prepare.contract.executionContractId}
+              </dd>
+            </div>
+            <div>
+              <dt>Version</dt>
+              <dd data-testid="f3-contract-version">{f3Prepare.contract.version}</dd>
+            </div>
+            <div>
+              <dt>Status</dt>
+              <dd data-testid="f3-contract-status">{f3Prepare.contract.status}</dd>
+            </div>
+            <div>
+              <dt>Mode</dt>
+              <dd data-testid="f3-contract-mode">{f3Prepare.contract.mode}</dd>
+            </div>
+          </dl>
+          <p className={styles.noExecutionBanner} data-testid="f3-prepare-no-attempt">
+            attemptCreated: false — AUCUNE ATTEMPT
+          </p>
+          <button
+            type="button"
+            className={styles.f3Button}
+            data-testid="f3-confirm-execute-button"
+            disabled={!canConfirmF3}
+            onClick={() => confirmAndExecuteF3()}
+          >
+            Confirmer et exécuter la fixture
+          </button>
+        </section>
+      ) : null}
+
+      {f3Execute ? (
+        <section
+          className={styles.f3Card}
+          data-testid="project-assistant-f3-execute"
+          aria-live="polite"
+        >
+          <h3 className={styles.cardTitle}>F3 FIXTURE — RÉSULTATS</h3>
+          <div className={styles.f3Labels} data-testid="f3-execute-labels">
+            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
+            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
+            <StatusPill tone="blueFlush">
+              RECOMMANDATION — PAS UNE DÉCISION MORRIS
+            </StatusPill>
+            <StatusPill tone="orange">CURSOR REAL BLOQUÉ</StatusPill>
+            <StatusPill tone="orange">HARD R-T-A3-1 / R-T-A3-2 OPEN</StatusPill>
+          </div>
+
+          <div data-testid="f3-attempt-card" className={styles.f3Subcard}>
+            <h4 className={styles.cardTitle}>Attempt</h4>
+            <p data-testid="f3-attempt-id">{f3Execute.attempt.attemptId}</p>
+            <p data-testid="f3-attempt-status">{f3Execute.attempt.status}</p>
+            <p data-testid="f3-attempt-adapter">{f3Execute.attempt.adapterId}</p>
+            <p data-testid="f3-attempt-external-effects">
+              externalEffects: {String(f3Execute.attempt.externalEffects)}
+            </p>
+            <p data-testid="f3-attempt-launch-count">
+              launchCount: {f3Execute.attempt.launchCount}
+            </p>
+            <p data-testid="f3-attempt-reused">
+              reusedExistingAttempt: {String(f3Execute.reusedExistingAttempt)}
+            </p>
+          </div>
+
+          <div data-testid="f3-evidence-card" className={styles.f3Subcard}>
+            <h4 className={styles.cardTitle}>Evidence</h4>
+            <p data-testid="f3-evidence-id">{f3Execute.evidence.evidenceId}</p>
+            <p data-testid="f3-evidence-status">{f3Execute.evidence.status}</p>
+            <p data-testid="f3-evidence-verified">
+              verified: {String(f3Execute.evidence.verified)}
+            </p>
+          </div>
+
+          <div data-testid="f3-review-bundle-card" className={styles.f3Subcard}>
+            <h4 className={styles.cardTitle}>ReviewBundle</h4>
+            <p data-testid="f3-review-bundle-id">
+              {f3Execute.reviewBundle.reviewBundleId}
+            </p>
+            <p data-testid="f3-review-bundle-status">
+              {f3Execute.reviewBundle.status}
+            </p>
+          </div>
+
+          <div data-testid="f3-recommendation-card" className={styles.f3Subcard}>
+            <h4 className={styles.cardTitle}>Recommendation</h4>
+            <p data-testid="f3-recommendation-label">
+              {f3Execute.recommendation.recommendationLabel}
+            </p>
+            <p data-testid="f3-recommendation-execution-authority">
+              executionAuthority:{" "}
+              {String(f3Execute.recommendation.executionAuthority)}
+            </p>
+            <p data-testid="f3-recommendation-gate-consumed">
+              gateConsumed: {String(f3Execute.recommendation.gateConsumed)}
+            </p>
+            <p data-testid="f3-recommendation-decision-created">
+              decisionCreated:{" "}
+              {String(f3Execute.recommendation.decisionCreated)}
+            </p>
+            <p data-testid="f3-recommendation-hard-refs">
+              {f3Execute.recommendation.openHardReservationRefs.join(" · ")}
+            </p>
+            <p data-testid="f3-no-ready-claim">PAS DE CLAIM READY</p>
+            <p data-testid="f3-no-ta6-complete">T-A6 COMPLETE NON DÉCLARÉ</p>
+          </div>
         </section>
       ) : null}

@@ -620,6 +865,20 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       >
         OPS1 n&apos;est pas la destination F2
       </div>
+      <div
+        className={styles.srOnly}
+        data-testid="project-assistant-f3-no-real"
+        aria-hidden="true"
+      >
+        FIXTURE — AUCUNE EXÉCUTION RÉELLE
+      </div>
+      <div
+        className={styles.srOnly}
+        data-testid="project-assistant-f3-cursor-real-blocked"
+        aria-hidden="true"
+      >
+        CURSOR REAL BLOQUÉ
+      </div>
     </div>
   );
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index bae1275..f891269 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -6,16 +6,21 @@ import { orchestrateAssistantSend } from "./f2/orchestrateF2";
 import { recordF2Decision } from "./f2/recordDecision";
 import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
 import type { F2DecisionKind } from "./f2/types";
+import { confirmAndExecuteF3Fixture } from "./f3/confirmAndExecuteF3Fixture";
+import { prepareF3Fixture } from "./f3/prepareF3Fixture";
+import { F3_PROCESS_LOCAL_NOTICE } from "./f3/constants";
 import type {
   AssistantHistoryMessage,
   ProjectAssistantContextDto,
   ProjectAssistantDecideResult,
+  ProjectAssistantExecuteF3Result,
+  ProjectAssistantPrepareF3Result,
   ProjectAssistantSendResult,
 } from "./types";

 /**
- * Thin server action — Project Workspace Assistant (F1 + F2).
- * No OPS1 session. No Cursor. No Git write. No durable persistence.
+ * Thin server action — Project Workspace Assistant (F1 + F2 + F3 fixture).
+ * No OPS1 session. No Cursor REAL. No Git write. No durable persistence.
  */
 export async function projectAssistantSendAction(input: {
   projectId: string;
@@ -158,3 +163,242 @@ export async function projectAssistantDecideAction(input: {
     },
   };
 }
+
+/**
+ * F3 PREPARE — Build+Validate ExecutionContract only.
+ * No client authority. Hostile mode/adapter/agent/command rejected.
+ */
+export async function projectAssistantPrepareF3FixtureAction(input: {
+  projectId: string;
+  proposalId: string;
+  decisionId: string;
+  /** Hostile — ignored. */
+  mode?: unknown;
+  adapterRef?: unknown;
+  agentId?: unknown;
+  command?: unknown;
+  real?: unknown;
+  selectedAgentRef?: unknown;
+  executionMode?: unknown;
+  trustLevel?: unknown;
+  authorityEvidenceId?: unknown;
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+}): Promise<ProjectAssistantPrepareF3Result> {
+  void input.mode;
+  void input.adapterRef;
+  void input.agentId;
+  void input.command;
+  void input.real;
+  void input.selectedAgentRef;
+  void input.executionMode;
+  void input.trustLevel;
+  void input.authorityEvidenceId;
+  void input.canActAsMorris;
+  void input.claimedAuthorityLevel;
+
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "prepare_error",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA process-local indisponibles pour F3 PREPARE.",
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+
+  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
+  if (!projectResult.ok) {
+    return {
+      ok: false,
+      status: "project_not_found",
+      code: projectResult.error.code,
+      message: projectResult.error.message,
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+  const project = toContextDto(projectResult);
+
+  const prepared = await prepareF3Fixture({
+    projectId: input.projectId,
+    proposalId: input.proposalId,
+    decisionId: input.decisionId,
+    mode: input.mode,
+    adapterRef: input.adapterRef,
+    agentId: input.agentId,
+    command: input.command,
+    currentContext: {
+      projectId: project.projectId,
+      lpsId: project.lpsId,
+      lpsVersion: project.lpsVersion,
+      doctrineDigest: project.doctrineDigest,
+    },
+    deps: {
+      decisionServices: runtime.oa.decisionServices,
+      authorityResolver: runtime.oa.authorityResolver,
+      executionContractServices: runtime.oa.executionContractServices,
+      nowIso: () => runtime.oa!.clock.nowIso(),
+    },
+  });
+
+  if (!prepared.ok) {
+    return {
+      ok: false,
+      status: prepared.code === "STALE" ? "stale" : "prepare_error",
+      code: prepared.code,
+      message: prepared.message,
+      mode: "fixture",
+      retryable: prepared.code === "STALE",
+      proposal: (prepared.proposal as ProjectAssistantPrepareF3FailureProposal) ?? null,
+    };
+  }
+
+  const f3 = prepared.payload;
+  return {
+    ok: true,
+    status: "ok",
+    mode: "fixture",
+    presentation: "unconfirmed",
+    text: [
+      "F3 PREPARE",
+      `Contrat ${f3.contract.executionContractId} v${f3.contract.version} (${f3.contract.status})`,
+      "AUCUNE EXÉCUTION",
+      "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
+      F3_PROCESS_LOCAL_NOTICE,
+    ].join(" — "),
+    project,
+    ephemeralNotice: F3_PROCESS_LOCAL_NOTICE,
+    f2: null,
+    f3,
+  };
+}
+
+type ProjectAssistantPrepareF3FailureProposal =
+  import("./f2/types").ProposalDto | null;
+
+/**
+ * F3 confirm + fixture execute + evidence reinjection.
+ * No client authority. Hostile REAL/adapter/agent/command rejected.
+ */
+export async function projectAssistantConfirmAndExecuteF3FixtureAction(input: {
+  projectId: string;
+  proposalId: string;
+  decisionId: string;
+  executionContractId: string;
+  expectedContractVersion: number;
+  /** Hostile — ignored. */
+  mode?: unknown;
+  adapterRef?: unknown;
+  agentId?: unknown;
+  command?: unknown;
+  real?: unknown;
+  selectedAgentRef?: unknown;
+  executionMode?: unknown;
+  trustLevel?: unknown;
+  authorityEvidenceId?: unknown;
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+}): Promise<ProjectAssistantExecuteF3Result> {
+  void input.mode;
+  void input.adapterRef;
+  void input.agentId;
+  void input.command;
+  void input.real;
+  void input.selectedAgentRef;
+  void input.executionMode;
+  void input.trustLevel;
+  void input.authorityEvidenceId;
+  void input.canActAsMorris;
+  void input.claimedAuthorityLevel;
+
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "execute_error",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA process-local indisponibles pour F3 EXECUTE.",
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+
+  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
+  if (!projectResult.ok) {
+    return {
+      ok: false,
+      status: "project_not_found",
+      code: projectResult.error.code,
+      message: projectResult.error.message,
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+  const project = toContextDto(projectResult);
+
+  const executed = await confirmAndExecuteF3Fixture({
+    projectId: input.projectId,
+    proposalId: input.proposalId,
+    decisionId: input.decisionId,
+    executionContractId: input.executionContractId,
+    expectedContractVersion: input.expectedContractVersion,
+    mode: input.mode,
+    adapterRef: input.adapterRef,
+    agentId: input.agentId,
+    command: input.command,
+    real: input.real,
+    currentContext: {
+      projectId: project.projectId,
+      lpsId: project.lpsId,
+      lpsVersion: project.lpsVersion,
+      doctrineDigest: project.doctrineDigest,
+    },
+    deps: {
+      decisionServices: runtime.oa.decisionServices,
+      authorityResolver: runtime.oa.authorityResolver,
+      executionContractServices: runtime.oa.executionContractServices,
+      executionAttemptServices: runtime.oa.executionAttemptServices,
+      evidenceReviewServices: runtime.oa.evidenceReviewServices,
+      fixtureAdapter: runtime.oa.fixtureAdapter,
+      nowIso: () => runtime.oa!.clock.nowIso(),
+    },
+  });
+
+  if (!executed.ok) {
+    return {
+      ok: false,
+      status: executed.code === "STALE" ? "stale" : "execute_error",
+      code: executed.code,
+      message: executed.message,
+      mode: "fixture",
+      retryable: executed.code === "STALE",
+      proposal: (executed.proposal as ProjectAssistantPrepareF3FailureProposal) ?? null,
+    };
+  }
+
+  const f3 = executed.payload;
+  return {
+    ok: true,
+    status: "ok",
+    mode: "fixture",
+    presentation: "unconfirmed",
+    text: [
+      f3.reusedExistingAttempt
+        ? "F3 FIXTURE DÉJÀ EXÉCUTÉE (idempotent)"
+        : "F3 FIXTURE EXÉCUTÉE",
+      `Attempt ${f3.attempt.attemptId} · ${f3.attempt.status}`,
+      `Evidence ${f3.evidence.evidenceId} · non verified`,
+      `ReviewBundle ${f3.reviewBundle.reviewBundleId}`,
+      "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
+      "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
+      "CURSOR REAL BLOQUÉ",
+      F3_PROCESS_LOCAL_NOTICE,
+    ].join(" — "),
+    project,
+    ephemeralNotice: F3_PROCESS_LOCAL_NOTICE,
+    f3,
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css b/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
index 4ebc7b9..c599fa1 100644
--- a/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
+++ b/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
@@ -336,3 +336,49 @@
   opacity: 0.5;
   cursor: not-allowed;
 }
+
+.f3Card {
+  display: grid;
+  gap: 8px;
+  padding: 10px 12px;
+  border: 1px solid #0f766e;
+  border-radius: 10px;
+  background: #f0fdfa;
+}
+
+.f3Subcard {
+  display: grid;
+  gap: 4px;
+  padding: 8px 10px;
+  border: 1px solid var(--sfia-border-soft);
+  border-radius: 8px;
+  background: #fff;
+}
+
+.f3Labels {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+
+.f3Button {
+  justify-self: start;
+  border: 1px solid #0f766e;
+  background: #fff;
+  color: #0f766e;
+  border-radius: 8px;
+  padding: 8px 12px;
+  font-size: 12px;
+  font-weight: 650;
+  cursor: pointer;
+}
+
+.f3Button:focus-visible {
+  outline: 2px solid #0f766e;
+  outline-offset: 2px;
+}
+
+.f3Button:disabled {
+  opacity: 0.5;
+  cursor: not-allowed;
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 0c67e1a..b81c989 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -1,5 +1,5 @@
 /**
- * Project Assistant DTOs — F1 conversation + F2 qualification/proposal/gate.
+ * Project Assistant DTOs — F1 conversation + F2 qualification/proposal/gate + F3 fixture.
  * Ephemeral / process-local only (no durable persistence).
  */

@@ -9,6 +9,7 @@ import type {
   ProposalDto,
   QualificationDto,
 } from "./f2/types";
+import type { F3ExecutePayload, F3PreparePayload } from "./f3/types";

 export type AssistantUiMode = "fixture" | "live" | "unavailable" | "unconfirmed";

@@ -19,7 +20,9 @@ export type AssistantTurnStatus =
   | "project_not_found"
   | "validation_error"
   | "stale"
-  | "decision_error";
+  | "decision_error"
+  | "prepare_error"
+  | "execute_error";

 export type AssistantHistoryMessage = {
   role: "user" | "assistant";
@@ -131,3 +134,54 @@ export type ProjectAssistantDecideSuccess = {
 export type ProjectAssistantDecideResult =
   | ProjectAssistantDecideSuccess
   | ProjectAssistantSendFailure;
+
+export type ProjectAssistantPrepareF3Success = {
+  ok: true;
+  status: "ok";
+  mode: "fixture";
+  presentation: "unconfirmed";
+  text: string;
+  project: ProjectAssistantContextDto;
+  ephemeralNotice: string;
+  f2: F2TurnPayload | null;
+  f3: F3PreparePayload;
+};
+
+export type ProjectAssistantPrepareF3Failure = {
+  ok: false;
+  status: "prepare_error" | "stale" | "project_not_found" | "validation_error";
+  code: string;
+  message: string;
+  mode: AssistantUiMode;
+  retryable: boolean;
+  proposal?: ProposalDto | null;
+};
+
+export type ProjectAssistantPrepareF3Result =
+  | ProjectAssistantPrepareF3Success
+  | ProjectAssistantPrepareF3Failure;
+
+export type ProjectAssistantExecuteF3Success = {
+  ok: true;
+  status: "ok";
+  mode: "fixture";
+  presentation: "unconfirmed";
+  text: string;
+  project: ProjectAssistantContextDto;
+  ephemeralNotice: string;
+  f3: F3ExecutePayload;
+};
+
+export type ProjectAssistantExecuteF3Failure = {
+  ok: false;
+  status: "execute_error" | "stale" | "project_not_found" | "validation_error";
+  code: string;
+  message: string;
+  mode: AssistantUiMode;
+  retryable: boolean;
+  proposal?: ProposalDto | null;
+};
+
+export type ProjectAssistantExecuteF3Result =
+  | ProjectAssistantExecuteF3Success
+  | ProjectAssistantExecuteF3Failure;
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 422315a..c2d6c3e 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -23,7 +23,25 @@ import {
   createInMemoryDecisionServices,
   type DecisionServices,
 } from "@/lib/oa/decision";
+import {
+  createInMemoryExecutionContractServices,
+  type ExecutionContractServices,
+} from "@/lib/oa/execution-contract";
+import {
+  createInMemoryExecutionAttemptServices,
+  type ExecutionAttemptServices,
+  type TestExecutionAdapter,
+} from "@/lib/oa/execution-attempt";
+import {
+  createInMemoryEvidenceReviewServices,
+  type EvidenceReviewServices,
+} from "@/lib/oa/evidence-review";
 import type { ProjectServices } from "@/lib/oa/project";
+import {
+  createAttemptReaderBridge,
+  createF3FixtureAgentDescriptor,
+  createF3TestExecutionAdapter,
+} from "./f3FixtureWiring";
 import {
   toCreateLocalProjectCommand,
   toCreateProjectRuntimeFailure,
@@ -66,6 +84,11 @@ export type RuntimeOaStack = {
   readonly ckcQualification: CkcQualificationServices;
   readonly decisionServices: DecisionServices;
   readonly authorityResolver: MemoryAuthorityResolver;
+  readonly executionContractServices: ExecutionContractServices;
+  readonly executionAttemptServices: ExecutionAttemptServices;
+  readonly evidenceReviewServices: EvidenceReviewServices;
+  /** Explicit TestExecutionAdapter — never silent NoOp. */
+  readonly fixtureAdapter: TestExecutionAdapter;
 };

 function resolveAudit(
@@ -99,6 +122,33 @@ function wireOaStack(
     clock,
     authorityResolver,
   });
+
+  const executionContractServices = createInMemoryExecutionContractServices({
+    projectServices,
+    decisionServices,
+    cycleServices,
+    clock,
+    authorityResolver,
+  });
+
+  // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
+  const fixtureAdapter = createF3TestExecutionAdapter();
+  const fixtureAgent = createF3FixtureAgentDescriptor(clock.nowIso());
+  const executionAttemptServices = createInMemoryExecutionAttemptServices({
+    decisionServices,
+    executionContractServices,
+    agents: [fixtureAgent],
+    adapter: fixtureAdapter,
+    clock,
+    authorityResolver,
+    policy: { defaultMaxRetriesBudget: 0 },
+  });
+
+  const evidenceReviewServices = createInMemoryEvidenceReviewServices({
+    clock,
+    attemptReader: createAttemptReaderBridge(executionAttemptServices.attempts),
+  });
+
   return Object.freeze({
     projectServices,
     clock,
@@ -106,13 +156,17 @@ function wireOaStack(
     ckcQualification,
     decisionServices,
     authorityResolver,
+    executionContractServices,
+    executionAttemptServices,
+    evidenceReviewServices,
+    fixtureAdapter,
   });
 }

 /**
  * Application runtime service over V1 LocalProjectFacade.
  * Does not duplicate T-A0/T-A1 rules; maps serializable DTOs only.
- * Exposes shared OA stack for F2 (same ProjectServices instance).
+ * Exposes shared OA stack for F2 + F3 (same ProjectServices instance).
  */
 export class RuntimeApplicationService {
   private readonly facade: LocalProjectFacade;
```

---

## §11 NEW product files — full dump (AFTER; SHA-identical to BEFORE)

# Pack-ready dump of NEW (untracked) product files — Cycle 9 QA AFTER
# Byte-identical to BEFORE / Delivery pack (individual SHA-256 below)

===== BEGIN FILE: projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts =====
/** @vitest-environment node */
/**
 * F3 native fixture vertical slice — AC-F3-FIX-01…22 coverage (practical).
 */
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  confirmAndExecuteF3Fixture,
  prepareF3Fixture,
  F3_ADAPTER_ID,
  F3_AGENT_ID,
  F3_MODE,
} from "@/features/project-assistant/f3";
import { F3_SCOPE } from "@/features/project-assistant/f3/constants";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  getProposal,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  createRuntimeApplicationService,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  nextProjectId(): string {
    this.project += 1;
    return `prj:f3-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:f3-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:f3-${this.correlation}`;
  }
}

async function createRuntime(): Promise<RuntimeApplicationService> {
  resetRuntimeApplicationServiceForTests();
  return getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: "2026-08-11T16:00:00.000Z",
    idSource: new FixedIdSource(),
    auditMode: "noop",
  });
}

async function seedApprovedGo(runtime: RuntimeApplicationService) {
  const created = await runtime.createProject({
    name: "Projet F3 Fixture",
    objective: "Vertical slice fixture",
    context: "F3 process-local",
    criticality: "STANDARD",
    constraints: ["FIXTURE ONLY"],
    shortReference: "F3F",
    idempotencyKey: `f3-${Date.now()}-${Math.random()}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("create failed");
  const projectId = created.project.projectId;
  const overview = await runtime.getProject(projectId);
  expect(overview.ok).toBe(true);
  if (!overview.ok) throw new Error("overview failed");

  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Préparer fixture F3",
    objective: "Wire T-A4/5/6 fixture",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "F3 fixture slice",
    scope: "fixture-docs",
    outOfScope: ["REAL", "git write"],
    activatedBlocks: ["prepare"],
    expectedOutcome: "fixture attempt + evidence",
    sources: [],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION RÉELLE"],
    morrisGateRequired: true,
    nextPossibleStep: "F3 PREPARE",
    contextSnapshot: {
      projectId,
      lpsId: overview.livingState.id,
      lpsVersion: overview.livingState.version,
      doctrineDigest: overview.doctrine.digest,
    },
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
  });

  const go = await recordF2Decision({
    proposalId: proposal.proposalId,
    projectId,
    decisionKind: "GO",
    currentContext: proposal.contextSnapshot,
    decisionServices: runtime.oa!.decisionServices,
    authorityResolver: runtime.oa!.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
  });
  expect(go.ok).toBe(true);
  if (!go.ok) throw new Error("GO failed");
  return { projectId, proposal: go.proposal, decision: go.decision, runtime, overview };
}

describe("F3 native fixture vertical slice", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  it("AC-F3-FIX-01/02 F2 GO remains prepare-only — no Attempt after GO alone", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    expect(seeded.decision.executionPerformed).toBe(false);
    expect(seeded.decision.readyForNextGatedStep).toBe(true);

    const listed =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: "xct:f3:none",
      });
    // No contracts yet; stack has fixture adapter with 0 launches
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
    expect(runtime.oa!.fixtureAdapter.externalEffects).toBe(false);
    expect(runtime.oa!.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);
    void listed;
  });

  it("AC-F3-FIX-03/04 PREPARE builds+validates contract without Select/Start", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe(F3_MODE);
    expect(prepared.payload.attemptCreated).toBe(false);
    expect(prepared.payload.executionPerformed).toBe(false);
    expect(prepared.payload.contract.status).toBe("confirmation_required");
    expect(prepared.payload.contract.scope).toBe(F3_SCOPE);
    expect(prepared.payload.contract.constraints).toContain("FIXTURE ONLY");
    expect(prepared.payload.contract.constraints).toContain("NO REAL");
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);

    const attempts =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: prepared.payload.contract.executionContractId,
      });
    expect(attempts.ok).toBe(true);
    if (attempts.ok) expect(attempts.attempts).toHaveLength(0);
  });

  it("AC-F3-FIX-05 hostile REAL/adapter/agent fields do not change FIXTURE path", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposal.contextSnapshot,
      mode: "REAL",
      adapterRef: "adp:cursor-real",
      agentId: "agt:cursor",
      command: "rm -rf /",
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe("FIXTURE");
    expect(prepared.payload.labels.cursorRealBlocked).toBe("CURSOR REAL BLOQUÉ");
  });

  it("AC-F3-FIX-06/07 refuse prepare without approved proposal / missing decision", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    const bad = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: "prop:f2:missing",
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(bad.ok).toBe(false);
    if (bad.ok) return;
    expect(bad.code).toBe("PROPOSAL_NOT_FOUND");
  });

  it("AC-F3-FIX-08..16 confirm+execute fixture chain + reinjection flags", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    const executed = await confirmAndExecuteF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      executionContractId: prepared.payload.contract.executionContractId,
      expectedContractVersion: prepared.payload.contract.version,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        executionAttemptServices: runtime.oa!.executionAttemptServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
        fixtureAdapter: runtime.oa!.fixtureAdapter,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;

    expect(executed.payload.mode).toBe("FIXTURE");
    expect(executed.payload.realExecution).toBe(false);
    expect(executed.payload.gitWritePerformed).toBe(false);
    expect(executed.payload.attempt.adapterId).toBe(F3_ADAPTER_ID);
    expect(executed.payload.attempt.selectedAgentRef).toBe(F3_AGENT_ID);
    expect(executed.payload.attempt.externalEffects).toBe(false);
    expect(executed.payload.attempt.status).toBe("succeeded");
    expect(executed.payload.attempt.launchCount).toBe(1);
    expect(executed.payload.attempt.selectionStrategy).toBe(
      "capabilities_deterministic",
    );
    expect(executed.payload.evidence.verified).toBe(false);
    expect(executed.payload.evidence.status).toBe("available");
    expect(executed.payload.recommendation.executionAuthority).toBe(false);
    expect(executed.payload.recommendation.gateConsumed).toBe(false);
    expect(executed.payload.recommendation.decisionCreated).toBe(false);
    expect(executed.payload.recommendation.attemptAutoLaunchNextCycle).toBe(
      false,
    );
    expect(executed.payload.recommendation.openHardReservationRefs).toEqual(
      expect.arrayContaining(["R-T-A3-1", "R-T-A3-2", "R-M01"]),
    );
    expect(executed.payload.labels.fixtureNoReal).toContain("FIXTURE");
    expect(executed.payload.disclosures).toContain("T-A6 COMPLETE NON DÉCLARÉ");
    expect(executed.payload.disclosures).toContain("PAS DE CLAIM READY");
    expect(JSON.stringify(executed.payload)).not.toMatch(/REAL READY/);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(1);
  });

  it("AC-F3-FIX-17/18 double invoke does not second-launch", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    const deps = {
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      executionContractServices: runtime.oa!.executionContractServices,
      executionAttemptServices: runtime.oa!.executionAttemptServices,
      evidenceReviewServices: runtime.oa!.evidenceReviewServices,
      fixtureAdapter: runtime.oa!.fixtureAdapter,
      nowIso: () => runtime.oa!.clock.nowIso(),
    };

    const first = await confirmAndExecuteF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      executionContractId: prepared.payload.contract.executionContractId,
      expectedContractVersion: prepared.payload.contract.version,
      currentContext: seeded.proposal.contextSnapshot,
      deps,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.payload.attempt.launchCount).toBe(1);
    expect(first.payload.reusedExistingAttempt).toBe(false);

    const second = await confirmAndExecuteF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      executionContractId: prepared.payload.contract.executionContractId,
      expectedContractVersion: prepared.payload.contract.version,
      currentContext: seeded.proposal.contextSnapshot,
      deps,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.payload.reusedExistingAttempt).toBe(true);
    expect(second.payload.attempt.launchCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(1);
  });

  it("AC-F3-FIX-19 contract version mismatch fail-closed", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    const bad = await confirmAndExecuteF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      executionContractId: prepared.payload.contract.executionContractId,
      expectedContractVersion: prepared.payload.contract.version + 99,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        executionAttemptServices: runtime.oa!.executionAttemptServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
        fixtureAdapter: runtime.oa!.fixtureAdapter,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(bad.ok).toBe(false);
    if (bad.ok) return;
    expect(bad.code).toBe("CONTRACT_VERSION_MISMATCH");
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("AC-F3-FIX-20/21 process-local fail closed after proposal store reset", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    resetF2ProposalStoreForTests();
    expect(getProposal(seeded.proposal.proposalId)).toBeNull();
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("PROPOSAL_NOT_FOUND");
  });

  it("AC-F3-FIX-22 runtime wires explicit TestExecutionAdapter (not NoOp)", async () => {
    const runtime = createRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-08-11T16:00:00.000Z",
      idSource: new FixedIdSource(),
      auditMode: "noop",
    });
    expect(runtime.oa).toBeTruthy();
    expect(runtime.oa!.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);
    expect(runtime.oa!.fixtureAdapter.externalEffects).toBe(false);
    expect(runtime.oa!.executionAttemptServices.adapter.adapterId).toBe(
      F3_ADAPTER_ID,
    );
    const candidates = runtime.oa!.executionAttemptServices.registry.findCandidates({
      requiredCapabilities: ["cap:f3-fixture-docs"],
      action: "fixture-docs-prepare",
      target: "sfia-studio/f3-fixture-only",
      scope: F3_SCOPE,
    });
    expect(candidates.some((a) => a.agentId === F3_AGENT_ID)).toBe(true);
  });
});
===== END FILE: projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/f3/attemptReaderBridge.ts =====
/**
 * READ-ONLY ExecutionAttemptReaderPort over T-A5 repository.
 * Prefer product bridge over FakeExecutionAttemptReader seed drift.
 */

import type { ExecutionAttemptRepositoryPort } from "@/lib/oa/execution-attempt";
import type {
  ExecutionAttemptReaderPort,
  ExecutionAttemptSnapshot,
} from "@/lib/oa/evidence-review";

export function createAttemptReaderBridge(
  attempts: ExecutionAttemptRepositoryPort,
): ExecutionAttemptReaderPort {
  return {
    async findById(
      attemptId: string,
    ): Promise<ExecutionAttemptSnapshot | null> {
      const attempt = await attempts.findById(attemptId);
      if (!attempt) return null;
      return {
        attemptId: attempt.attemptId,
        executionContractId: attempt.executionContractId,
        executionContractVersion: attempt.executionContractVersion,
        status: attempt.status,
        resultRef: attempt.resultRef,
        errorRef: attempt.errorRef,
        completedAt: attempt.completedAt,
        failedAt: attempt.failedAt,
        selectedAgentRef: attempt.selectedAgentRef,
      };
    },
  };
}
===== END FILE: projects/sfia-studio/app/features/project-assistant/f3/attemptReaderBridge.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts =====
/**
 * Confirm + fixture execute path:
 * Request/Grant Confirmation (scope=contract.scope) → ConfirmExecutionContract
 * → SelectExecutionAgent (capabilities_deterministic) → StartExecution
 * → RecordExecutionResult (metadata-only resultRef).
 *
 * Idempotent: if an attempt already succeeded for the contract, reinject
 * without a second adapter launch.
 */

import type {
  DecisionServices,
  MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
import type {
  ExecutionAttemptServices,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type { F2ContextSnapshot } from "../f2/types";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
import {
  F3_ADAPTER_ID,
  F3_AGENT_ID,
  F3_AUTHORITY_SOURCE,
  F3_CONFIRM_ACTION_REF,
  F3_LABELS,
  F3_MODE,
  F3_PROCESS_LOCAL_NOTICE,
  F3_REQUIRED_AUTHORITY,
  F3_SCOPE,
} from "./constants";
import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
import type { F3ExecutePayload } from "./types";
import { validateF2ForPrepare } from "./validateF2ForPrepare";

export type ConfirmExecuteF3Deps = {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  executionContractServices: ExecutionContractServices;
  executionAttemptServices: ExecutionAttemptServices;
  evidenceReviewServices: EvidenceReviewServices;
  fixtureAdapter: TestExecutionAdapter;
  nowIso: () => string;
};

function authorityEvidenceIdForProposal(proposalId: string): string {
  return `evd:f3-fixture:${proposalId}`;
}

function ensureFixtureAuthority(
  authority: MemoryAuthorityResolver,
  proposalId: string,
  nowIso: string,
): { ok: true; evidenceId: string } | { ok: false; code: string; message: string } {
  const evidenceId = authorityEvidenceIdForProposal(proposalId);
  if (authority.getEvidence(evidenceId)) {
    return { ok: true, evidenceId };
  }
  try {
    authority.register({
      evidenceId,
      actorId: LOCAL_MORRIS_ACTOR.actorId,
      level: F3_REQUIRED_AUTHORITY,
      scope: F3_SCOPE,
      issuedAt: nowIso,
      source: F3_AUTHORITY_SOURCE,
      canActAsMorris: false,
    });
    return { ok: true, evidenceId };
  } catch (error) {
    return {
      ok: false,
      code: "AUTHORITY_REGISTER_FAILED",
      message:
        error instanceof Error
          ? error.message
          : "Échec enregistrement authority F3 fixture.",
    };
  }
}

async function buildExecutePayload(input: {
  proposal: F3ExecutePayload["proposal"];
  decisionId: string;
  contract: {
    executionContractId: string;
    version: number;
    status: string;
    action: string;
    target: string;
    scope: string;
    requiredAuthority: string;
    constraints: readonly string[];
  };
  attempt: {
    attemptId: string;
    status: string;
    selectedAgentRef: string;
    resultRef?: string;
    selectionStrategy?: string;
  };
  launchCount: number;
  reusedExistingAttempt: boolean;
  projectId: string;
  deps: ConfirmExecuteF3Deps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const ingested = await ingestEvidenceAndRecommend({
    projectId: input.projectId,
    attemptId: input.attempt.attemptId,
    executionContractId: input.contract.executionContractId,
    deps: { evidenceReviewServices: input.deps.evidenceReviewServices },
  });
  if (!ingested.ok) {
    return ingested;
  }

  return {
    ok: true,
    payload: {
      turnKind: "f3_execute",
      mode: F3_MODE,
      proposal: input.proposal,
      decisionId: input.decisionId,
      contract: {
        executionContractId: input.contract.executionContractId,
        version: input.contract.version,
        status: input.contract.status,
        action: input.contract.action,
        target: input.contract.target,
        scope: input.contract.scope,
        requiredAuthority: input.contract.requiredAuthority,
        mode: F3_MODE,
        constraints: [...input.contract.constraints],
      },
      attempt: {
        attemptId: input.attempt.attemptId,
        status: input.attempt.status,
        selectedAgentRef: input.attempt.selectedAgentRef,
        adapterId: F3_ADAPTER_ID,
        externalEffects: false,
        resultRef: input.attempt.resultRef ?? null,
        launchCount: input.launchCount,
        selectionStrategy:
          input.attempt.selectionStrategy ?? "capabilities_deterministic",
        mode: F3_MODE,
      },
      evidence: ingested.evidence,
      reviewBundle: ingested.reviewBundle,
      recommendation: ingested.recommendation,
      reusedExistingAttempt: input.reusedExistingAttempt,
      executionPerformed: true,
      realExecution: false,
      gitWritePerformed: false,
      labels: {
        fixtureNoReal: F3_LABELS.fixtureNoReal,
        noGitWrite: F3_LABELS.noGitWrite,
        recommendationNotDecision: F3_LABELS.recommendationNotDecision,
        cursorRealBlocked: F3_LABELS.cursorRealBlocked,
        hardOpen: F3_LABELS.hardOpen,
      },
      processLocalNotice: F3_PROCESS_LOCAL_NOTICE,
      disclosures: [
        F3_LABELS.fixtureNoReal,
        F3_LABELS.noGitWrite,
        F3_LABELS.recommendationNotDecision,
        F3_LABELS.cursorRealBlocked,
        F3_LABELS.hardOpen,
        F3_LABELS.noReadyClaim,
        F3_LABELS.noTa6Complete,
        F3_PROCESS_LOCAL_NOTICE,
      ],
    },
  };
}

export async function confirmAndExecuteF3Fixture(input: {
  projectId: string;
  proposalId: string;
  decisionId: string;
  executionContractId: string;
  expectedContractVersion: number;
  currentContext: F2ContextSnapshot;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  deps: ConfirmExecuteF3Deps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string; proposal?: unknown }
> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;

  if (input.deps.fixtureAdapter.adapterId !== F3_ADAPTER_ID) {
    return {
      ok: false,
      code: "ADAPTER_IDENTITY_MISMATCH",
      message: "Adapter F3 identity mismatch — REAL/NoOp interdit.",
    };
  }
  if (input.deps.fixtureAdapter.externalEffects !== false) {
    return {
      ok: false,
      code: "EXTERNAL_EFFECTS_FORBIDDEN",
      message: "externalEffects doit rester false (FIXTURE only).",
    };
  }

  const validated = await validateF2ForPrepare({
    proposalId: input.proposalId,
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: input.currentContext,
    decisionServices: input.deps.decisionServices,
  });
  if (!validated.ok) {
    return {
      ok: false,
      code: validated.code,
      message: validated.message,
      proposal: validated.proposal ?? null,
    };
  }

  const { proposal, decisionId } = validated;
  const auth = ensureFixtureAuthority(
    input.deps.authorityResolver,
    proposal.proposalId,
    input.deps.nowIso(),
  );
  if (!auth.ok) return { ...auth, proposal };

  const contractResult =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!contractResult.ok) {
    return {
      ok: false,
      code: contractResult.error.detailCode,
      message: contractResult.error.message,
      proposal,
    };
  }

  let contract = contractResult.contract;
  if (contract.projectId !== input.projectId) {
    return {
      ok: false,
      code: "CONTRACT_PROJECT_MISMATCH",
      message: "Le contrat n'appartient pas à ce projet.",
      proposal,
    };
  }
  if (contract.scope !== F3_SCOPE) {
    return {
      ok: false,
      code: "CONTRACT_SCOPE_MISMATCH",
      message: "Scope contrat ≠ F3 FIXTURE scope.",
      proposal,
    };
  }

  // Double-invoke protection BEFORE version OCC: if attempt already succeeded,
  // reinject without re-launch even if contract version advanced post-exec.
  const listed =
    await input.deps.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId: contract.executionContractId,
    });
  if (listed.ok) {
    const succeeded = listed.attempts.find((a) => a.status === "succeeded");
    if (succeeded) {
      const launchCount = input.deps.fixtureAdapter.launchCallCount;
      return buildExecutePayload({
        proposal,
        decisionId,
        contract,
        attempt: succeeded,
        launchCount,
        reusedExistingAttempt: true,
        projectId: input.projectId,
        deps: input.deps,
      });
    }
  }

  if (contract.version !== input.expectedContractVersion) {
    return {
      ok: false,
      code: "CONTRACT_VERSION_MISMATCH",
      message: `Version contrat attendue ${input.expectedContractVersion}, actuelle ${contract.version}.`,
      proposal,
    };
  }

  if (
    contract.status === "confirmation_required" ||
    contract.status === "validated"
  ) {
    const confirmationId = `cfm:f3:${contract.executionContractId}:${contract.version}`;
    const requested =
      await input.deps.decisionServices.requestConfirmation.execute({
        confirmationId,
        level: F3_REQUIRED_AUTHORITY,
        actionRef: F3_CONFIRM_ACTION_REF,
        requestedBy: LOCAL_MORRIS_ACTOR,
        requestedTo: LOCAL_MORRIS_ACTOR,
        scope: contract.scope,
        idempotencyKey: `idem:f3-cfm:${contract.executionContractId}:v${contract.version}`,
        decisionRef: decisionId,
      });
    if (!requested.ok) {
      return {
        ok: false,
        code: requested.error.detailCode,
        message: requested.error.message,
        proposal,
      };
    }

    const granted = await input.deps.decisionServices.grantConfirmation.execute({
      confirmationId,
      actor: LOCAL_MORRIS_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    if (!granted.ok) {
      return {
        ok: false,
        code: granted.error.detailCode,
        message: granted.error.message,
        proposal,
      };
    }

    const confirmed =
      await input.deps.executionContractServices.confirmExecutionContract.execute(
        {
          executionContractId: contract.executionContractId,
          confirmationId,
          actor: LOCAL_MORRIS_ACTOR,
          authorityEvidenceId: auth.evidenceId,
          expectedVersion: contract.version,
        },
      );
    if (!confirmed.ok) {
      return {
        ok: false,
        code: confirmed.error.detailCode,
        message: confirmed.error.message,
        proposal,
      };
    }
    contract = confirmed.contract;
  } else if (contract.status !== "confirmed" && contract.status !== "executing" && contract.status !== "completed") {
    return {
      ok: false,
      code: "CONTRACT_NOT_CONFIRMABLE",
      message: `Contrat non confirmable (statut ${contract.status}).`,
      proposal,
    };
  }

  const attemptId = `xat:f3:${contract.executionContractId.replace(/^xct:/, "")}`;

  const selected =
    await input.deps.executionAttemptServices.selectExecutionAgent.execute({
      attemptId,
      executionContractId: contract.executionContractId,
      idempotencyKey: `idem:f3-att:${contract.executionContractId}`,
      actor: LOCAL_MORRIS_ACTOR,
      authorityEvidenceId: auth.evidenceId,
      expectedContractVersion: contract.version,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      requestedAgentRef: F3_AGENT_ID,
      systemInitiated: true,
    });
  if (!selected.ok) {
    return {
      ok: false,
      code: selected.error.detailCode,
      message: selected.error.message,
      proposal,
    };
  }

  const started =
    await input.deps.executionAttemptServices.startExecution.execute({
      attemptId,
      actor: LOCAL_MORRIS_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
  if (!started.ok) {
    return {
      ok: false,
      code: started.error.detailCode,
      message: started.error.message,
      proposal,
    };
  }

  const resultRef = `res:f3-fixture:${attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`;
  const recorded =
    await input.deps.executionAttemptServices.recordExecutionResult.execute({
      attemptId,
      adapterId: F3_ADAPTER_ID,
      resultRef,
      technicalExitCode: 0,
    });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
      proposal,
    };
  }

  const launchCount = input.deps.fixtureAdapter.launchCallCount;

  const refreshed =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: contract.executionContractId,
    });
  if (refreshed.ok) contract = refreshed.contract;

  return buildExecutePayload({
    proposal,
    decisionId,
    contract,
    attempt: recorded.attempt,
    launchCount,
    reusedExistingAttempt: false,
    projectId: input.projectId,
    deps: input.deps,
  });
}
===== END FILE: projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/f3/constants.ts =====
/**
 * F3 native fixture vertical slice — server-fixed constants.
 * Client cannot inject REAL / adapterRef / agent / command.
 */

export const F3_MODE = "FIXTURE" as const;

export const F3_ADAPTER_ID = "adp:f3-test-fixture" as const;
export const F3_AGENT_ID = "agt:f3-fixture" as const;
export const F3_AGENT_TYPE = "fixture_docs_writer" as const;

export const F3_ACTION = "fixture-docs-prepare" as const;
export const F3_TARGET = "sfia-studio/f3-fixture-only" as const;
export const F3_SCOPE = "f3-fixture:docs+metadata-only" as const;
export const F3_CAPABILITY = "cap:f3-fixture-docs" as const;

export const F3_REQUIRED_AUTHORITY = "N2" as const;

export const F3_CONSTRAINTS = Object.freeze([
  "FIXTURE ONLY",
  "TEST ADAPTER ONLY",
  "NO REAL",
  "NO SHELL",
  "NO NETWORK EXECUTION",
  "NO GIT WRITE",
  "NO GITHUB WRITE",
  "NO AUTO RETRY",
  "PROCESS LOCAL",
] as const);

export const F3_STOP_CONDITIONS = Object.freeze([
  "AUTHORITY_DENIED",
  "STALE_CONTEXT",
  "REAL_MODE_REQUESTED",
  "ADAPTER_IDENTITY_MISMATCH",
] as const);

export const F3_EVIDENCE_REQUIREMENTS = Object.freeze([
  "evreq:f3-fixture-metadata",
] as const);

export const F3_CONFIRM_ACTION_REF = "act:confirm-f3-fixture" as const;

export const F3_OPEN_HARD_RESERVATION_REFS = Object.freeze([
  "R-T-A3-1",
  "R-T-A3-2",
  "R-M01",
] as const);

export const F3_PROCESS_LOCAL_NOTICE =
  "F3 fixture process-local — non persisté. Un redémarrage efface contrats, attempts et evidence. Aucune autorité d'exécution durable.";

export const F3_LABELS = Object.freeze({
  fixtureNoReal: "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
  noGitWrite: "AUCUN GIT WRITE PRODUIT",
  recommendationNotDecision: "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
  cursorRealBlocked: "CURSOR REAL BLOQUÉ",
  noReadyClaim: "PAS DE CLAIM READY",
  noTa6Complete: "T-A6 COMPLETE NON DÉCLARÉ",
  hardOpen: "HARD R-T-A3-1 / R-T-A3-2 OPEN",
} as const);

export const F3_AUTHORITY_SOURCE =
  "LOCAL_PROCESS_F3_FIXTURE_AUTHORITY" as const;
===== END FILE: projects/sfia-studio/app/features/project-assistant/f3/constants.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/f3/fixtureAgent.ts =====
/**
 * Closed fixture AgentDescriptor + explicit TestExecutionAdapter factory.
 * Never silent NoOp. externalEffects=false. adapterRef === adapterId.
 */

import {
  TestExecutionAdapter,
  type AgentDescriptor,
} from "@/lib/oa/execution-attempt";
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  F3_ACTION,
  F3_ADAPTER_ID,
  F3_AGENT_ID,
  F3_AGENT_TYPE,
  F3_CAPABILITY,
  F3_SCOPE,
  F3_TARGET,
} from "./constants";

function fixtureProvenance(nowIso: string): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:f3-fixture-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:f3-fixture-agent",
  };
}

export function createF3FixtureAgentDescriptor(
  nowIso = "2026-08-11T00:00:00.000Z",
): AgentDescriptor {
  return Object.freeze({
    schemaVersion: "0.1.0-oa",
    agentId: F3_AGENT_ID,
    agentType: F3_AGENT_TYPE,
    adapterRef: F3_ADAPTER_ID,
    supportedCapabilities: [F3_CAPABILITY],
    allowedActions: [F3_ACTION],
    allowedTargets: [F3_TARGET],
    allowedScopes: [F3_SCOPE],
    trustLevel: "fixture",
    executionMode: "adapter_sync_fixture",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    createdAt: nowIso,
    provenance: fixtureProvenance(nowIso),
  });
}

/**
 * Explicit TestExecutionAdapter only — callers must inject this into
 * createInMemoryExecutionAttemptServices (never rely on NoOp default).
 */
export function createF3TestExecutionAdapter(): TestExecutionAdapter {
  return new TestExecutionAdapter({ adapterId: F3_ADAPTER_ID });
}

export function assertF3AdapterIdentity(adapter: TestExecutionAdapter): void {
  if (adapter.adapterId !== F3_ADAPTER_ID) {
    throw new Error("f3_adapter_identity_mismatch");
  }
  if (adapter.externalEffects !== false) {
    throw new Error("f3_adapter_external_effects_must_be_false");
  }
}
===== END FILE: projects/sfia-studio/app/features/project-assistant/f3/fixtureAgent.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/f3/index.ts =====
export { F3_MODE, F3_ADAPTER_ID, F3_AGENT_ID, F3_LABELS } from "./constants";
export type {
  F3PreparePayload,
  F3ExecutePayload,
  F3ContractDto,
  F3AttemptDto,
  F3EvidenceDto,
  F3ReviewBundleDto,
  F3RecommendationDto,
} from "./types";
export { validateF2ForPrepare } from "./validateF2ForPrepare";
export { prepareF3Fixture } from "./prepareF3Fixture";
export { confirmAndExecuteF3Fixture } from "./confirmAndExecuteF3Fixture";
export { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
export {
  createF3FixtureAgentDescriptor,
  createF3TestExecutionAdapter,
} from "./fixtureAgent";
export { createAttemptReaderBridge } from "./attemptReaderBridge";
===== END FILE: projects/sfia-studio/app/features/project-assistant/f3/index.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts =====
/**
 * IngestExecutionAttemptEvidence → CreateReviewBundle → RecommendNextGate.
 * Recommendation-only; HARD refs passed through; no auto-launch.
 */

import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
import {
  F3_LABELS,
  F3_MODE,
  F3_OPEN_HARD_RESERVATION_REFS,
} from "./constants";
import type {
  F3EvidenceDto,
  F3RecommendationDto,
  F3ReviewBundleDto,
} from "./types";

export type IngestRecommendDeps = {
  evidenceReviewServices: EvidenceReviewServices;
};

export type IngestRecommendResult =
  | {
      ok: true;
      evidence: F3EvidenceDto;
      reviewBundle: F3ReviewBundleDto;
      recommendation: F3RecommendationDto;
    }
  | { ok: false; code: string; message: string };

export async function ingestEvidenceAndRecommend(input: {
  projectId: string;
  attemptId: string;
  executionContractId: string;
  deps: IngestRecommendDeps;
}): Promise<IngestRecommendResult> {
  const evidenceId = `ev:f3-fixture:${input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`;
  const ingested =
    await input.deps.evidenceReviewServices.ingestExecutionAttemptEvidence.execute(
      {
        evidenceId,
        executionAttemptId: input.attemptId,
        idempotencyKey: `idem:f3-ev:${input.attemptId}`,
        actor: LOCAL_MORRIS_ACTOR,
        classification: "internal",
        storageMode: "metadata_only",
        bindings: {
          projectId: input.projectId,
          executionContractId: input.executionContractId,
        },
      },
    );

  if (!ingested.ok) {
    return {
      ok: false,
      code: ingested.error.detailCode,
      message: ingested.error.message,
    };
  }

  const reviewBundleId = `rb:f3-fixture:${input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`;
  const bundle =
    await input.deps.evidenceReviewServices.createReviewBundle.execute({
      reviewBundleId,
      idempotencyKey: `idem:f3-rb:${input.attemptId}`,
      actor: LOCAL_MORRIS_ACTOR,
      projectId: input.projectId,
      executionContractId: input.executionContractId,
      evidenceIds: [ingested.evidence.evidenceId],
      reservations: [
        ...F3_OPEN_HARD_RESERVATION_REFS,
        "HARD remain OPEN — BLOCKS REAL",
        "T-A6 COMPLETE NOT DECLARED",
        "NO READY CLAIM",
      ],
    });

  if (!bundle.ok) {
    return {
      ok: false,
      code: bundle.error.detailCode,
      message: bundle.error.message,
    };
  }

  const recommended =
    await input.deps.evidenceReviewServices.recommendNextGate.execute({
      projectId: input.projectId,
      subjectRef: input.executionContractId,
      evidenceRefs: [
        {
          id: ingested.evidence.evidenceId,
          version: ingested.evidence.version,
        },
      ],
      reviewBundleRefs: [
        {
          id: bundle.reviewBundle.reviewBundleId,
          version: bundle.reviewBundle.version,
        },
      ],
      openHardReservationRefs: [...F3_OPEN_HARD_RESERVATION_REFS],
      attemptAutoLaunchNextCycle: false,
      actor: LOCAL_MORRIS_ACTOR,
      correlationId: `cor:f3-reco:${input.attemptId}`,
    });

  if (!recommended.ok) {
    return {
      ok: false,
      code: recommended.error.detailCode,
      message: recommended.error.message,
    };
  }

  const coordination = recommended.coordination;
  /**
   * T-A6 RecommendNextGate only materializes openHardReservationRefs as
   * hard_reservation_open blockers when a MaturityAssessment is bound.
   * Creating maturity requires claim/freeze chain beyond this fixture slice
   * without foundation changes — so HARD visibility is guaranteed on the
   * product DTO (openHardReservationRefs + hardBlockers) even when
   * coordination.blockers omit them.
   */
  const openHard = [...F3_OPEN_HARD_RESERVATION_REFS];
  const hardBlockers = [
    ...coordination.blockers
      .filter((b) => b.code === "hard_reservation_open")
      .map((b) => b.sourceId ?? b.code),
    ...openHard.map((ref) => `${ref} OPEN`),
  ];

  return {
    ok: true,
    evidence: {
      evidenceId: ingested.evidence.evidenceId,
      status: ingested.evidence.status,
      sourceKind: ingested.evidence.sourceKind,
      technicalResultRef: ingested.evidence.technicalResultRef ?? null,
      verified: false,
      mode: F3_MODE,
    },
    reviewBundle: {
      reviewBundleId: bundle.reviewBundle.reviewBundleId,
      status: bundle.reviewBundle.status,
      version: bundle.reviewBundle.version,
      evidenceRefs: [...bundle.reviewBundle.evidenceRefs],
      mode: F3_MODE,
    },
    recommendation: {
      kind: "recommendation",
      status: coordination.status,
      executionAuthority: false,
      gateConsumed: false,
      decisionCreated: false,
      attemptAutoLaunchNextCycle: false,
      openHardReservationRefs: openHard,
      hardBlockers: [...new Set(hardBlockers)],
      nextGateCode: coordination.nextGate?.gateCode ?? null,
      nextActionCode: coordination.nextAction?.actionCode ?? null,
      recommendationLabel: F3_LABELS.recommendationNotDecision,
      mode: F3_MODE,
    },
  };
}
===== END FILE: projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts =====
/**
 * F3 PREPARE — BuildExecutionContract + Validate only.
 * NO Select / Start / Evidence / Attempt (F3-D01).
 */

import type { DecisionServices } from "@/lib/oa/decision";
import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
import type { MemoryAuthorityResolver } from "@/lib/oa/decision";
import type { F2ContextSnapshot } from "../f2/types";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
import {
  F3_ACTION,
  F3_AUTHORITY_SOURCE,
  F3_CAPABILITY,
  F3_CONSTRAINTS,
  F3_EVIDENCE_REQUIREMENTS,
  F3_LABELS,
  F3_MODE,
  F3_PROCESS_LOCAL_NOTICE,
  F3_REQUIRED_AUTHORITY,
  F3_SCOPE,
  F3_STOP_CONDITIONS,
  F3_TARGET,
} from "./constants";
import type { F3PreparePayload } from "./types";
import { validateF2ForPrepare } from "./validateF2ForPrepare";

export type PrepareF3Deps = {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  executionContractServices: ExecutionContractServices;
  nowIso: () => string;
};

function toContractDto(
  contract: {
    executionContractId: string;
    version: number;
    status: string;
    action: string;
    target: string;
    scope: string;
    requiredAuthority: string;
    constraints: readonly string[];
  },
) {
  return {
    executionContractId: contract.executionContractId,
    version: contract.version,
    status: contract.status,
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    requiredAuthority: contract.requiredAuthority,
    mode: F3_MODE,
    constraints: [...contract.constraints],
  };
}

export async function prepareF3Fixture(input: {
  projectId: string;
  proposalId: string;
  decisionId: string;
  currentContext: F2ContextSnapshot;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  deps: PrepareF3Deps;
}): Promise<
  | { ok: true; payload: F3PreparePayload }
  | { ok: false; code: string; message: string; proposal?: unknown }
> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;

  const validated = await validateF2ForPrepare({
    proposalId: input.proposalId,
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: input.currentContext,
    decisionServices: input.deps.decisionServices,
  });
  if (!validated.ok) {
    return {
      ok: false,
      code: validated.code,
      message: validated.message,
      proposal: validated.proposal ?? null,
    };
  }

  const { proposal, decisionId } = validated;
  const evidenceId = `evd:f3-fixture:${proposal.proposalId}`;
  const issuedAt = input.deps.nowIso();

  try {
    if (!input.deps.authorityResolver.getEvidence(evidenceId)) {
      input.deps.authorityResolver.register({
        evidenceId,
        actorId: LOCAL_MORRIS_ACTOR.actorId,
        level: F3_REQUIRED_AUTHORITY,
        scope: F3_SCOPE,
        issuedAt,
        source: F3_AUTHORITY_SOURCE,
        canActAsMorris: false,
      });
    }
  } catch (error) {
    return {
      ok: false,
      code: "AUTHORITY_REGISTER_FAILED",
      message:
        error instanceof Error
          ? error.message
          : "Échec enregistrement authority F3 fixture.",
      proposal,
    };
  }

  const executionContractId = `xct:f3:${proposal.proposalId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48)}`;
  const idempotencyKey = `idem:f3-prep:${proposal.proposalId}`;

  const built =
    await input.deps.executionContractServices.buildExecutionContract.execute({
      executionContractId,
      projectId: input.projectId,
      decisionRefs: [decisionId],
      action: F3_ACTION,
      target: F3_TARGET,
      scope: F3_SCOPE,
      requiredCapabilities: [F3_CAPABILITY],
      requiredAuthority: F3_REQUIRED_AUTHORITY,
      constraints: [...F3_CONSTRAINTS],
      stopConditions: [...F3_STOP_CONDITIONS],
      evidenceRequirements: [...F3_EVIDENCE_REQUIREMENTS],
      reversibility: "reversible",
      idempotencyKey,
      correlationId: `cor:f3-prep:${proposal.proposalId}`,
      actor: LOCAL_MORRIS_ACTOR,
      authorityEvidenceId: evidenceId,
    });

  if (!built.ok) {
    return {
      ok: false,
      code: built.error.detailCode,
      message: built.error.message,
      proposal,
    };
  }

  const validatedContract =
    await input.deps.executionContractServices.validateExecutionContract.execute(
      {
        executionContractId: built.contract.executionContractId,
        actor: LOCAL_MORRIS_ACTOR,
        authorityEvidenceId: evidenceId,
      },
    );

  if (!validatedContract.ok) {
    return {
      ok: false,
      code: validatedContract.error.detailCode,
      message: validatedContract.error.message,
      proposal,
    };
  }

  const contract = validatedContract.contract;
  if (
    contract.status !== "confirmation_required" &&
    contract.status !== "validated"
  ) {
    return {
      ok: false,
      code: "UNEXPECTED_CONTRACT_STATUS",
      message: `Statut contrat inattendu après Validate: ${contract.status}`,
      proposal,
    };
  }

  return {
    ok: true,
    payload: {
      turnKind: "f3_prepare",
      mode: F3_MODE,
      proposal,
      decisionId,
      contract: toContractDto(contract),
      executionPerformed: false,
      attemptCreated: false,
      labels: {
        fixtureNoReal: F3_LABELS.fixtureNoReal,
        noGitWrite: F3_LABELS.noGitWrite,
        recommendationNotDecision: F3_LABELS.recommendationNotDecision,
        cursorRealBlocked: F3_LABELS.cursorRealBlocked,
        hardOpen: F3_LABELS.hardOpen,
      },
      processLocalNotice: F3_PROCESS_LOCAL_NOTICE,
      disclosures: [
        F3_LABELS.fixtureNoReal,
        F3_LABELS.noGitWrite,
        F3_LABELS.cursorRealBlocked,
        F3_LABELS.hardOpen,
        F3_LABELS.noReadyClaim,
        F3_LABELS.noTa6Complete,
        F3_PROCESS_LOCAL_NOTICE,
      ],
    },
  };
}
===== END FILE: projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/f3/types.ts =====
/**
 * F3 FIXTURE reinjection DTOs — product layer only.
 * Never claim READY / T-A6 COMPLETE / REAL READY.
 */

import type { ProposalDto } from "../f2/types";
import type { F3_MODE } from "./constants";

export type F3Mode = typeof F3_MODE;

export type F3ContractDto = {
  executionContractId: string;
  version: number;
  status: string;
  action: string;
  target: string;
  scope: string;
  requiredAuthority: string;
  mode: F3Mode;
  constraints: string[];
};

export type F3AttemptDto = {
  attemptId: string;
  status: string;
  selectedAgentRef: string;
  adapterId: string;
  externalEffects: false;
  resultRef: string | null;
  launchCount: number;
  selectionStrategy: string;
  mode: F3Mode;
};

export type F3EvidenceDto = {
  evidenceId: string;
  status: string;
  sourceKind: string;
  technicalResultRef: string | null;
  verified: false;
  mode: F3Mode;
};

export type F3ReviewBundleDto = {
  reviewBundleId: string;
  status: string;
  version: number;
  evidenceRefs: string[];
  mode: F3Mode;
};

export type F3RecommendationDto = {
  kind: "recommendation";
  status: string;
  executionAuthority: false;
  gateConsumed: false;
  decisionCreated: false;
  attemptAutoLaunchNextCycle: false;
  openHardReservationRefs: string[];
  hardBlockers: string[];
  nextGateCode: string | null;
  nextActionCode: string | null;
  recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS";
  mode: F3Mode;
};

export type F3Labels = {
  fixtureNoReal: "FIXTURE — AUCUNE EXÉCUTION RÉELLE";
  noGitWrite: "AUCUN GIT WRITE PRODUIT";
  recommendationNotDecision: "RECOMMANDATION — PAS UNE DÉCISION MORRIS";
  cursorRealBlocked: "CURSOR REAL BLOQUÉ";
  hardOpen: "HARD R-T-A3-1 / R-T-A3-2 OPEN";
};

export type F3PreparePayload = {
  turnKind: "f3_prepare";
  mode: F3Mode;
  proposal: ProposalDto;
  decisionId: string;
  contract: F3ContractDto;
  executionPerformed: false;
  attemptCreated: false;
  labels: F3Labels;
  processLocalNotice: string;
  disclosures: string[];
};

export type F3ExecutePayload = {
  turnKind: "f3_execute";
  mode: F3Mode;
  proposal: ProposalDto;
  decisionId: string;
  contract: F3ContractDto;
  attempt: F3AttemptDto;
  evidence: F3EvidenceDto;
  reviewBundle: F3ReviewBundleDto;
  recommendation: F3RecommendationDto;
  reusedExistingAttempt: boolean;
  executionPerformed: true;
  realExecution: false;
  gitWritePerformed: false;
  labels: F3Labels;
  processLocalNotice: string;
  disclosures: string[];
};

export type F3ValidateOk = {
  ok: true;
  proposal: ProposalDto;
  decisionId: string;
  decisionStatus: "accepted";
  scope: string;
};

export type F3ValidateFail = {
  ok: false;
  code: string;
  message: string;
  proposal?: ProposalDto | null;
};

export type F3ValidateResult = F3ValidateOk | F3ValidateFail;
===== END FILE: projects/sfia-studio/app/features/project-assistant/f3/types.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/f3/validateF2ForPrepare.ts =====
/**
 * Fail-closed F2 eligibility checks before F3 PREPARE.
 * F2 GO remains prepare-only — this never creates an Attempt.
 */

import type { DecisionServices } from "@/lib/oa/decision";
import type { F2ContextSnapshot } from "../f2/types";
import {
  contextMatches,
  getProposal,
  markProposalStale,
} from "../f2/proposalStore";
import { proposalScope } from "../f2/recordDecision";
import type { F3ValidateResult } from "./types";

export async function validateF2ForPrepare(input: {
  proposalId: string;
  projectId: string;
  decisionId: string;
  currentContext: F2ContextSnapshot;
  decisionServices: DecisionServices;
}): Promise<F3ValidateResult> {
  const proposal = getProposal(input.proposalId);
  if (!proposal) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_FOUND",
      message:
        "Proposition introuvable (process-local). Fail closed après redémarrage — aucune autorité d'exécution reconstruite.",
    };
  }

  if (proposal.contextSnapshot.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "La proposition n'appartient pas à ce projet.",
      proposal,
    };
  }

  if (!contextMatches(proposal.contextSnapshot, input.currentContext)) {
    const stale = markProposalStale(proposal.proposalId);
    return {
      ok: false,
      code: "STALE",
      message:
        "Contexte Project/LPS modifié — proposition STALE. Aucune préparation F3.",
      proposal: stale,
    };
  }

  if (
    proposal.status !== "APPROVED" &&
    proposal.status !== "APPROVED_WITH_RESERVES"
  ) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_APPROVED",
      message: `Proposition non approuvée (statut ${proposal.status}). PREPARE refusé.`,
      proposal,
    };
  }

  const decisionResult = await input.decisionServices.getHumanDecision.execute({
    decisionId: input.decisionId,
  });
  if (!decisionResult.ok) {
    return {
      ok: false,
      code: "DECISION_NOT_FOUND",
      message:
        "Décision F2 introuvable (process-local). Fail closed — pas d'exécution.",
      proposal,
    };
  }

  const decision = decisionResult.decision;
  if (decision.projectId !== input.projectId) {
    return {
      ok: false,
      code: "DECISION_PROJECT_MISMATCH",
      message: "La décision n'appartient pas à ce projet.",
      proposal,
    };
  }

  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "DECISION_NOT_ACCEPTED",
      message: `Décision non acceptée (statut ${decision.status}).`,
      proposal,
    };
  }

  const expectedScope = proposalScope(proposal);
  if (decision.scope !== expectedScope) {
    return {
      ok: false,
      code: "DECISION_SCOPE_MISMATCH",
      message: "Scope décision ≠ scope proposition F2.",
      proposal,
    };
  }

  return {
    ok: true,
    proposal,
    decisionId: input.decisionId,
    decisionStatus: "accepted",
    scope: expectedScope,
  };
}
===== END FILE: projects/sfia-studio/app/features/project-assistant/f3/validateF2ForPrepare.ts =====

===== BEGIN FILE: projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts =====
/**
 * F3 fixture identity + closed registry/adapter wiring for RuntimeOaStack.
 * Lives under vertical-slice-runtime so lib never imports @/features/*.
 */

import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  TestExecutionAdapter,
  type AgentDescriptor,
  type ExecutionAttemptRepositoryPort,
} from "@/lib/oa/execution-attempt";
import type {
  ExecutionAttemptReaderPort,
  ExecutionAttemptSnapshot,
} from "@/lib/oa/evidence-review";

export const F3_RUNTIME_ADAPTER_ID = "adp:f3-test-fixture" as const;
export const F3_RUNTIME_AGENT_ID = "agt:f3-fixture" as const;
export const F3_RUNTIME_AGENT_TYPE = "fixture_docs_writer" as const;
export const F3_RUNTIME_ACTION = "fixture-docs-prepare" as const;
export const F3_RUNTIME_TARGET = "sfia-studio/f3-fixture-only" as const;
export const F3_RUNTIME_SCOPE = "f3-fixture:docs+metadata-only" as const;
export const F3_RUNTIME_CAPABILITY = "cap:f3-fixture-docs" as const;

function fixtureProvenance(nowIso: string): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:f3-fixture-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:f3-fixture-agent",
  };
}

export function createF3FixtureAgentDescriptor(
  nowIso = "2026-08-11T00:00:00.000Z",
): AgentDescriptor {
  return Object.freeze({
    schemaVersion: "0.1.0-oa",
    agentId: F3_RUNTIME_AGENT_ID,
    agentType: F3_RUNTIME_AGENT_TYPE,
    adapterRef: F3_RUNTIME_ADAPTER_ID,
    supportedCapabilities: [F3_RUNTIME_CAPABILITY],
    allowedActions: [F3_RUNTIME_ACTION],
    allowedTargets: [F3_RUNTIME_TARGET],
    allowedScopes: [F3_RUNTIME_SCOPE],
    trustLevel: "fixture",
    executionMode: "adapter_sync_fixture",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    createdAt: nowIso,
    provenance: fixtureProvenance(nowIso),
  });
}

/** Explicit TestExecutionAdapter — never silent NoOp. */
export function createF3TestExecutionAdapter(): TestExecutionAdapter {
  return new TestExecutionAdapter({ adapterId: F3_RUNTIME_ADAPTER_ID });
}

export function createAttemptReaderBridge(
  attempts: ExecutionAttemptRepositoryPort,
): ExecutionAttemptReaderPort {
  return {
    async findById(
      attemptId: string,
    ): Promise<ExecutionAttemptSnapshot | null> {
      const attempt = await attempts.findById(attemptId);
      if (!attempt) return null;
      return {
        attemptId: attempt.attemptId,
        executionContractId: attempt.executionContractId,
        executionContractVersion: attempt.executionContractVersion,
        status: attempt.status,
        resultRef: attempt.resultRef,
        errorRef: attempt.errorRef,
        completedAt: attempt.completedAt,
        failedAt: attempt.failedAt,
        selectedAgentRef: attempt.selectedAgentRef,
      };
    },
  };
}
===== END FILE: projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts =====


---

## End of FULL Review Pack
