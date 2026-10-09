# ChatGPT Review Pack — P6 HUMAN QA TECHNICAL PREFLIGHT (COMPLETE)

- timestamp: 2026-10-09T07:10:04Z
- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- scope: COG01 + F01 + UI05
- cycle: 9 — QA / validation
- typology: RUN — préflight opérationnel lecture seule
- profile: CRITICAL
- Morris GO consumed: P6 HUMAN QA TECHNICAL PREFLIGHT — READ-ONLY
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- local HEAD (INITIAL=FINAL): 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- prior closure handoff: 7d1c0d51d6d80193fdfeb941e1f90b8fa2ef40ed
- project commit/push/PR/merge: NONE
- product mutation: NONE
- provider REAL call: NONE
- project creation: NONE
- START / HumanDecision: NONE
- HQ-01: READ-ONLY observed, NOT MUTATED
- P6 PASS: NOT CLAIMED
- runtime v3: NON ADOPTED
- Human QA execution: NOT AUTHORIZED by this GO

## Local Git Truth

```
BRANCH=qa/sfia-studio-p6-global-integrated-product-qa
HEAD=8a196be1a35ffa2d43e52beddc66b51eab56c99c
ORIGIN_MAIN=aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
STAGED=(empty)
```

### Local corrections present (uncommitted / untracked — preserved)

| Finding | Evidence on disk |
|---------|------------------|
| F01 | `f2/resolveChatFirstCycleStartGate.ts`, `f2/composeF2PilotFacingNarrative.ts`, `f2/orchestrateF2.ts`, `p6.hqa.f01…d0.test.ts` |
| UI05 | `ConversationSurface.tsx` (+ CSS), `p6.hqa.ui05…ui.test.tsx` |
| COG01 CP02 | `composeF2PilotFacingNarrative.ts`, `p6.hqa.cog01…d0.test.ts` |
| UI-01…UI-04 | ConversationSurface / noraActivity / presentationLabels / ui03 / ui04 tests |
| P6 campaign fixtures | `__tests__/p6-campaign/*` (untracked) |

HEAD matches prior reported tip. Worktree is **dirty with candidate corrections** — not clean, not on origin/main tip for those files.

## Sources consulted

- `convergence/sfia-studio-convergence-build-doctrine.md` (path present)
- `convergence/sfia-studio-convergence-roadmap.md` (P6 tip: MACRO CONTINUATION / Human QA batch regenerating; P6 PASS NOT CLAIMED)
- `product-completion/01-product-completion-cadrage.md` (path present)
- `product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md`
- Handoff `7d1c0d51` — F01+UI05 INTEGRATED CLOSURE (reserves: UI05 visual NOT RUN; HQ-01 disposition distinct)
- `package.json` scripts; `scripts/studio-runtime-preflight.ts`; `playwright.config.ts`
- Routes: `app/studio/projects/new/page.tsx` → `NewProjectIntentionPage`
- Lifecycle: `startPreparedTrajectoryCycle.ts`; F01 gate in `orchestrateF2.ts`
- Authority: `localSingleUserAuthority.ts` (canonical `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY`; legacy `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY`)
- Product SQLite (read-only URI `mode=ro`) via configured `SFIA_STUDIO_PRODUCT_DB_PATH`

## Convergence pre-check

Capacité v3 ciblée: New Project → Nora → trajectory/HD → prepare COMPLETE → START → LPS verify → honest UI objects.
Milestone: P6.
État: corrections locales candidates (ChatGPT closure handoff 7d1c0d51); Human QA non exécutée.
Exit proof de CE cycle: readiness matrix sans mutation.

---

## BLOC A — Runtime Studio

| Check | Result | Evidence |
|-------|--------|----------|
| Node / npm | PASS | Node v24.16.0, npm 11.13.0 |
| node_modules / next | PASS | PRESENT |
| Port 3020 listener | PASS (observed) | PID 41720 `next-server (v15.5.20)` |
| HTTP /login | PASS | 200 |
| HTTP /studio | PASS (auth redirect) | 307 |
| Dev server start this cycle | NOT RUN | GO forbids auto start; existing instance reused for observe-only |
| npm run build / install | NOT RUN | effects on cache/worktree not authorized |
| Runtime READY claim | NOT CLAIMED | observe ≠ campaign readiness |

**RUNTIME OBSERVED** — Studio already listening; login reachable; studio requires auth session.

Proposed start (NOT executed this preflight), if instance down later:
```
cd projects/sfia-studio/app && npm run dev -- --hostname localhost --port 3020
```
Risks: port conflict; loads `.env.local` (includes `SFIA_STUDIO_CURSOR_REAL=1`); shares Product SQLite with HQ-01.

---

## BLOC B — Provider / COG01

| Check | Result | Notes |
|-------|--------|-------|
| `.env.local` present | PASS | keys listed names-only |
| OPENAI_API_KEY | PASS (present, redacted) | value not disclosed; NOT called |
| OPENAI_MODEL | PASS | configured `gpt-5.6-luna` (static) |
| OPS1_CONVERSATION_PROVIDER | ABSENT in .env.local | default live path unless forced fake |
| Process env OPENAI_* | UNSET | Next loads .env.local at runtime |
| Provider REAL call | NOT RUN | forbidden |
| Fake provider for Human QA | UNKNOWN / GATE | Playwright webServer defaults fake; Product UI may use live key |
| COG01 code on disk | PASS | compose + tests present |
| Conversation ≠ Product truth | PASS (design) | F01/COG01 contracts enforce; Human QA still required |

**CONFIGURATION INSPECTED** — secrets not printed; **PROVIDER REAL NOT VERIFIED**.

Cost/risk note: live Nora with configured model will consume REAL tokens once Human QA GO allows; preflight made **zero** provider calls.

---

## BLOC C — Lifecycle F01 preconditions

Native path identified (code/routes, no execution):

1. `/studio/projects/new` → `NewProjectIntentionPage` → `createProjectRuntimeAction`
2. Conversation / F2 qualification → CycleInstance candidate
3. Trajectory prepare / approve (`approveCandidateTrajectory`, `prepareCycleFromValidatedTrajectory`)
4. HumanDecision when required (Pilote authority)
5. COMPLETE_TRAJECTORY_BOUND prepare
6. START via `startPreparedTrajectoryCycle` / chat gate `resolveChatFirstCycleStartGate`
7. LPS + CycleInstance re-read
8. Resume via projectId workspace binding

| Precondition | Status |
|--------------|--------|
| New Project UX route exists | PASS |
| createProject OA service exists | PASS |
| startPreparedTrajectoryCycle exists | PASS |
| F01 chat gate + anti-mint + structured late-negation on disk | PASS |
| Deterministic F01 START E2E (tests) | PASS (prior; not re-run this cycle) |
| Local Pilote authority config | PASS WITH RESERVE | Canonical `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY` ABSENT; legacy `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1` PRESENT (enables Pilot helper when canonical undefined) |
| HQ-01 NOT used for F01-05 | PROTOCOL REQUIRED | HQ-01 still has 5 Delivery cycles, LPS activeCycle=null |
| COMPLETE prepared cycle for new QA project | NOT RUN | requires project creation + governed prepare |
| START on new project | NOT RUN | GO forbids |
| Product gap for user path | NONE identified in static inspection | TrajectorySurface + OA facades exist |

### HQ-01 read-only observation (NOT mutated)

- `prj:6b1151f7-7369-434a-a967-bbfe88c76f53` PRESENT in shared Product DB
- 5 Delivery CycleInstances status `acknowledged`
- Latest LPS activeCycleInstanceId = null
- Must remain READ-ONLY; F01 Human QA must use a **new** project

---

## BLOC D — UI05 / Browser / Capture

| Check | Result |
|-------|--------|
| Playwright CLI | PASS — 1.61.1 |
| @playwright/test | PASS |
| Chromium cache | PASS — chromium-1228 present |
| playwright.config baseURL | PASS — localhost:3020; reuseExistingServer true |
| Desktop viewport config | PASS — 1440×1024 (Figma object ref 748×82 is card geometry, not full page) |
| Mobile device profiles | AVAILABLE via Playwright devices (NOT exercised) |
| cursor-ide-browser tooling | AVAILABLE in agent session |
| Authenticated session for captures | UNKNOWN | /studio → 307; needs Pilot login |
| UI05 synthesis≠EC code on disk | PASS |
| UI05 runtime Figma parity | NOT RUN — VISUAL PROOF MISSING (prior reserve) |
| Capture strategy next Human QA | Use existing Studio :3020 + auth; Playwright `reuseExistingServer`; capture Recommendation/Proposal/Synthesis/EC on **new QA project**; never fabricate EC from synthesis |

**BROWSER/CAPTURE TOOLING AVAILABLE** — fidelity NOT proven.

Figma refs (directional only): 46:98 Recommendation, 46:107 ExecutionContract, 748×82.

---

## BLOC E — Isolation / Safety QA (protocol proposed, NOT applied)

Shared Product datastore:
- `SFIA_STUDIO_PRODUCT_DB_PATH` → `…/product/oa-product.sqlite` (exists, ~8.2 MB)
- `SFIA_STUDIO_NORA_SESSION_DB_PATH` → `…/product/nora-session.sqlite`
- Same DB hosts HQ-01 + 20 other projects (count=21)

### Proposed isolation protocol (do not execute in preflight)

1. Create QA project **only** via `/studio/projects/new` with unique name/shortReference e.g. `P6-HQA-COG-F01-UI05-<date>`.
2. Record `projectId` immediately; verify ≠ `prj:6b1151f7-…`.
3. Before/after each scenario: read-only count of HQ-01 cycles (expect still 5; activeCycle null unless separately authorized).
4. Never open HQ-01 workspace during this Human QA batch.
5. Prefer naming convention + evidence ledger over DB fork.
6. Optional stronger isolation (separate PRODUCT_DB) = **config change** → requires distinct Morris GO (NOT this preflight).
7. Session: one Pilot browser profile; avoid parallel Playwright webServer spawning second Next if :3020 busy (`reuseExistingServer` already set).
8. Preserve failures: screenshots + transcript + projectId in review evidence; no cleanup/reset of Product DB.
9. Risk flag: `SFIA_STUDIO_CURSOR_REAL=1` in .env.local — Human QA should avoid Cursor REAL actions unless under explicit REAL GO; disable or confirm intent before execution.

---

## BLOC F — Readiness matrix

| Precondition | Result | Class |
|--------------|--------|-------|
| Git identity / continuity | PASS | static |
| Correction files COG01/F01/UI05 on disk | PASS | static |
| Corrections committed/pushed | FAIL (local-only) | static |
| Studio runtime observed | PASS | observed non-mutable |
| Route New Project | PASS | static |
| Auth possible | UNKNOWN | needs Pilot login |
| Provider config present | PASS | static |
| Provider REAL verified | NOT RUN | REAL gate |
| Playwright/capture tooling | PASS | static/tooling |
| UI05 visual runtime parity | NOT RUN | prior reserve |
| F01 START path code | PASS | static |
| F01 START on fresh project | NOT RUN | execution gate |
| Pilote authority configured | PASS WITH RESERVE | legacy env |
| HQ-01 isolation protocol defined | PASS (protocol) | documentary |
| HQ-01 mutation absent this cycle | PASS | observed |
| GO Human QA execution | NOT CONSUMED | Morris |
| GO P6 REAL bounded campaign | NOT CONSUMED this cycle | Morris (distinct) |
| Cost envelope REAL Nora | UNKNOWN until GO | REAL |

**Do NOT declare HUMAN QA READY FOR EXECUTION** — campaign execution gates remain.

---

## Fake / Real Qualification

- Entry proof reused: F01 DETERMINISTIC E2E; UI05 SEMANTIC/DOM; COG01 CP02 candidate.
- This preflight proof level: **STATIC/ENVIRONMENT READINESS INSPECTION**.
- Out of scope: E2E REAL, Human QA PASS, Figma parity PASS, P6 PASS, runtime v3 ADOPTED.
- Zero REAL calls performed.

## Actions executed vs not executed

**Executed (read-only):**
- git truth commands
- node/npm/module presence
- lsof/curl observe :3020
- env key-name inspection (no secret values in report)
- sqlite `mode=ro` project/HQ-01 inventory
- path/route/script/file presence checks
- handoff 7d1c0d51 tip read
- review pack write under `.tmp-sfia-review/` only

**NOT executed:**
- npm install/build/dev/start
- kill/steal port
- createProject
- provider complete
- START / HD / prepareCycle
- Playwright e2e run
- HQ-01 mutation
- source code edits

## Gates Morris remaining (non-decision recommendations)

1. **GO P6 HUMAN QA INTEGRATED EXECUTION** (COG01+F01+UI05) — create new QA project manually; run scenarios; captures.
2. If live Nora required: confirm **GO P6 REAL — BOUNDED** still in force / re-authorize spend envelope.
3. Optional: GO for separate Product DB isolation (if shared DB unacceptable).
4. HQ-01 five-candidate disposition remains **separate** after Human QA.

## Verdict

**P6 HUMAN QA TECHNICAL PREFLIGHT — READY WITH RESERVES.**

Reserves:
- Corrections remain local-only (not integrated to origin/main).
- Shared Product DB with HQ-01 (protocol isolation required).
- Auth session not proven in this pass (/studio 307).
- UI05 visual runtime proof still missing.
- Canonical Pilot authority env unset (legacy Morris authority=1 compensates).
- `SFIA_STUDIO_CURSOR_REAL=1` armed in local profile — handle carefully under Human QA.
- Human QA execution / REAL campaign GOs not consumed by this READ-ONLY GO.

This verdict is **preparation readiness for Morris gate review only**, not authorization to execute Human QA or REAL.

---

## Appendix — command outputs (sanitized)

### Git
```
BRANCH=qa/sfia-studio-p6-global-integrated-product-qa
HEAD=8a196be1a35ffa2d43e52beddc66b51eab56c99c
ORIGIN_MAIN=aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
```

### Runtime observe
```
listener: node PID 41720 next-server (v15.5.20) localhost:3020
login_http=200
studio_http=307
```

### Env key names in .env.local (values redacted except non-secret flags)
```
BETTER_AUTH_SECRET=(redacted)
BETTER_AUTH_URL=(present)
GITHUB_CLIENT_ID=(redacted)
GITHUB_CLIENT_SECRET=(redacted)
OPENAI_API_KEY=(redacted)
OPENAI_MODEL=gpt-5.6-luna
SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS=(present)
SFIA_STUDIO_CURSOR_REAL=1
SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1
SFIA_STUDIO_LOCAL_PILOT_AUTHORITY=(absent)
SFIA_STUDIO_MANAGED_REPO_ROOT_BASE=(present)
SFIA_STUDIO_NORA_SESSION_DB_PATH=(present, file exists)
SFIA_STUDIO_PRODUCT_DB_PATH=(present, file exists, basename oa-product.sqlite)
SFIA_STUDIO_PROJECT_REPOSITORY_*=(present)
```

### Product DB read-only
```
project_count=21
hq01_exact_id_present=True
hq01_cycle_count=5 (all Delivery acknowledged)
hq01_latest_lps_activeCycle=null
```

### Tooling
```
playwright 1.61.1
chromium-1228 cache present
New Project: /studio/projects/new → NewProjectIntentionPage
```

---
END OF COMPLETE REVIEW PACK — P6 HUMAN QA TECHNICAL PREFLIGHT
