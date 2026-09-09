# ChatGPT Review Pack — FULL — Greenfield Task-App Campaign Environment Readiness

## 1. Identity

| Field | Value |
|---|---|
| UTC timestamp | 2026-09-09T08:51:21Z |
| Cycle ID | SFIA-STUDIO-PRODUCT-PROOF-GREENFIELD-TASK-APP-ENV-READINESS-01 |
| Cycle | 9 — QA / validation |
| Typology | EVOL — Product Proof campaign readiness / environment preparation |
| Profile | CRITICAL |
| Baseline / origin/main | a9f6c310a0826d0e5bd6f7264603382a86564db1 (Merge PR #477) |
| Post-merge CI known | run 34323636543 SUCCESS |
| Runtime v3 | NON ADOPTED |
| ZERO REAL | YES |

## 2. Morris intent

Prepare a clean isolated local environment for a new SFIA Studio Product Proof Greenfield Full Product Dogfood campaign.

Future Project subject (not created in this cycle): application de gestion de tâches.

This cycle MUST NOT:
- create the Project in Studio;
- message Nora / call OpenAI;
- launch Cursor via Studio;
- develop the task app;
- fix discovered Product gaps.

## 3. Local Git Truth

### Source workspace (preserved)

| Field | Value |
|---|---|
| Path | /Users/morris/Projects/sfia-lr-delivery-isolated-e6d7c649 |
| Remote | https://github.com/mcleland147/sfia-workspace.git |
| Branch | delivery/sfia-studio-lifecycle-recommendation-product |
| HEAD | 2081ce477182d133cc71c93dd7d547433bd6a976 |
| Dirty | review-only .tmp-sfia-review/** (pre-existing); no Product source dirty |
| origin/main (after fetch) | a9f6c310a0826d0e5bd6f7264603382a86564db1 |

No stash/reset/checkout of source workspace. Historical worktrees preserved.

### Campaign worktree (created this cycle)

| Field | Value |
|---|---|
| Path | /Users/morris/Projects/sfia-product-proof-greenfield-task-app-a9f6c310 |
| Mode | git worktree add --detach on exact a9f6c310... |
| HEAD | a9f6c310a0826d0e5bd6f7264603382a86564db1 |
| Delivery branch created | NO |
| Tracked Product mutation | NONE (npm ci/build artifacts ignored; .env.local ignored; .sfia-exec ignored) |

## 4. Sources consumed

PROCESS v2.6: sfia-cycle-execution-template; cycle-routing-guide; pilots/04-qa-validation; sfia-validation-checklist.

CONVERGENCE: build-doctrine; roadmap.

PRODUCT COMPLETION: 01-cadrage; 14-integrated-proof-final-qualification.

v3 framing: 32, 33, 34, 35 (NON ADOPTED runtime).

RUNTIME: package.json; NewProjectIntentionPage; ProjectWorkspacePage; platform/ai/config.ts; vertical-slice-runtime/service.ts; localProjectComposition.ts; composeStudioProductRealBoundary.ts; deterministicExternalLaunchBoundary.ts; m4BoundedReadOnlyCursorAgent.ts; studioGitWorktreeWorkspace.ts; product sqlite paths.ts; middleware.ts; .gitignore.

## 5. Convergence qualification

| Item | Value |
|---|---|
| Capability v3 | Greenfield full Product loop / Pilot-governed Project lifecycle |
| Milestone | PRODUCT PROOF — GREENFIELD FULL PRODUCT DOGFOOD — ENVIRONMENT READINESS |
| Product scenario | fresh Project whose business intention is to build a task-management application |
| Assets | Project create path KEEP/VERIFY; Product SQLite KEEP/ISOLATE; Nora live KEEP/VERIFY; lifecycle/recommendation KEEP/VERIFY; Cursor REAL KEEP/QUALIFY; M4 bounded RO KEEP AS CURRENT TRUTH / DO NOT EXPAND; deterministic external TEST-ONLY / MUST BE OFF; old suivi-de-contrat PRESERVE/HISTORICAL |
| Gap closed this cycle | campaign environment readiness only |
| Critical-path next | Morris manually creates new greenfield Project and begins ordinary Product interaction — AFTER resolving config blockers below |
| Exit proof | isolated DB path + Git baseline + Studio boots + create route reachable at HTTP layer + Fake/Real classified + executor capability known + ZERO REAL |
| Debt | no new intentional debt |
| Reserves | RESERVE-UX-01 OPEN; RESERVE-PROOF-01 OPEN |

## 6. Environment preparation evidence

Commands executed (campaign app dir):
- npm ci → exit 0
- npm run typecheck → exit 0
- npm run build → exit 0
- git status after → no tracked Product mutations

Node v24.16.0 / npm 11.13.0

Studio server:
- Port 3020 was FREE; used 3020
- Command: cd .../projects/sfia-studio/app && SFIA_STUDIO_PRODUCT_DB_PATH=<campaign db> SFIA_STUDIO_CURSOR_REAL=1 npx next start --port 3020
- At report time: next-server PID 24785 LISTEN on *:3020 (ALIVE)
- Launch command for Morris if process ends: same as above from campaign app directory with .env.local loaded

Smoke GETs (no form submit):
- GET / → HTTP 307 Location /login?error=AUTH_CONFIG_ERROR
- GET /studio → HTTP 307 Location /login?error=AUTH_CONFIG_ERROR
- GET /studio/projects/new → HTTP 307 Location /login?error=AUTH_CONFIG_ERROR
- GET -L /studio and /studio/projects/new → HTTP 200 login page (~6686 bytes)
- Interpretation: HTTP served; routes exist; Studio protection redirects because BETTER_AUTH_SECRET (auth config) is missing in campaign env — not a Product code mutation cycle

## 7. Product DB isolation

| Field | Value |
|---|---|
| Campaign DB path | /Users/morris/Projects/sfia-product-proof-greenfield-task-app-a9f6c310/projects/sfia-studio/.sfia-exec/product-proof-greenfield-task-app/product.sqlite |
| Mechanism | SFIA_STUDIO_PRODUCT_DB_PATH |
| Ignored | YES (.gitignore projects/sfia-studio/.sfia-exec/**) |
| Exists after smokes | NO (ABSENT_OK — no Project create; dir prepared empty) |
| Historical DB 1 | /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/product/oa-product.sqlite |
| Historical DB 1 sha256 pre=post | efe059393d3b4e0f3a6e7e7a270165d52d506f8a02cdee1f506da60d7467d704 |
| Historical DB 2 | /Users/morris/Projects/sfia-workspace-studio-dogfood-01/.sfia-exec/product/oa-product.sqlite |
| Historical DB 2 sha256 pre=post | 7d06d7a66a6e22e414ea69fb3e1da3da90004c20214dff33e99101ecbffd93e4 |
| Reset / delete / SFIA_V2_RUNTIME_ALLOW_RESET | NOT used |

## 8. Nora live configuration (no secret values)

| Variable | Campaign status |
|---|---|
| OPENAI_API_KEY | MISSING in campaign .env.local and campaign shell |
| OPENAI_MODEL | MISSING in campaign env |
| OPENAI_REASONING_EFFORT | unset |
| OPS1_CONVERSATION_PROVIDER | unset (fake NOT forced) |
| OpenAI calls this cycle | ZERO |

Sibling historical workspace env (non-campaign) was inspected for presence only: OPENAI_API_KEY=PRESENT, OPENAI_MODEL=gpt-5.6-luna. Those secrets were NOT copied into the campaign env by this cycle.

Nora conclusion for campaign env:
LIVE NORA ENVIRONMENT BLOCKED — CONFIGURATION MISSING

## 9. Cursor REAL boundary qualification

| Flag / item | Status |
|---|---|
| SFIA_STUDIO_CURSOR_REAL | configured = 1 in campaign .env.local (compose-only; no StartExecution) |
| OPS1_CURSOR_REAL | unset |
| SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY | OFF / unset |
| SFIA_STUDIO_E2E_QA_CONTROL | unset |
| FakeConversationProvider forced | NO |
| Deterministic + REAL simultaneous | NO (safe) |
| Cursor CLI discoverable | YES — /Applications/Cursor.app/Contents/Resources/app/bin/cursor |
| command -v cursor | empty (not on PATH); app bin present |
| Cursor process launched via Studio | ZERO |
| StartExecution | ZERO |

Composition note (composeStudioProductRealBoundary.ts): when REAL=1, constructs M4 wiring without launching process/git/bin search until gated StartExecution.

## 10. Current executor capability finding (CRITICAL)

When SFIA_STUDIO_CURSOR_REAL=1, RuntimeOaStack registers exactly one REAL AgentDescriptor (plus fixture descriptors that must NOT be claimed as REAL):

REAL agent:
- agentId: agt:m4.cursor.bounded_readonly
- agentType: cursor_cli_bounded_readonly
- adapterRef: adp:m4-cursor-cli-real
- supportedCapabilities: [cap:cursor.read_only]
- allowedActions: [cursor.read_only.inspect]
- allowedTargets: [workspace.isolated.read]
- allowedScopes: [studio.m4.real_off]
- trustLevel: bounded
- executionMode: cursor_cli_real

Answers:
1. REAL AgentDescriptors registered under REAL=1: M4 bounded read-only only (fixtures also registered but are TestExecutionAdapter path — not REAL proof).
2. Capabilities as above — read-only inspect only; no write capability.
3. Normal runtime does NOT today support local mutation needed to build a task-management application via governed Cursor REAL writes.
4. StudioGitWorktreeWorkspace is composed on repoRoot = current SFIA git toplevel (findGitToplevelByDotGit / Studio cwd). It prepares isolated worktrees under .sfia-exec/m4-worktrees from that repoRoot. It does NOT natively target an external/task-app project root as a first-class Product destination.
5. No repo-current native Product path for delivery REAL write onto an application project was found on main a9f6c310.
6. N/A — no such mechanism proven.
7. No workaround implemented (forbidden).

FULL REAL TASK-APP DELIVERY = NOT READY / CAPABILITY GAP

This is a Product Proof input for the future campaign (honest STOP on executor insufficiency), not a defect corrected here.

## 11. Fake / Real matrix

| Frontier | Fake/mock forbidden for campaign | REAL counterpart | This cycle proof |
|---|---|---|---|
| Nora/OpenAI | FakeConversationProvider must stay OFF | live OpenAI provider | config missing in campaign env; ZERO calls |
| Cursor CLI | deterministic boundary OFF; fixture adapter ≠ REAL | NodeCursorProcessRunner / StudioCursorRealLaunchGateway | REAL flag set; ZERO launches |
| Git workspace | N/A | StudioGitWorktreeWorkspace on SFIA repoRoot | qualified; external app targeting NOT native |
| Product SQLite | must not reuse historical DB | isolated campaign path | path prepared; historical hashes unchanged |

Entry proof: #477 deterministic Product / ZERO REAL.
This cycle expected proof: ENVIRONMENT READINESS QUALIFIED only (with config blockers disclosed).
Not claimed: REAL BOUNDARY PROVEN; E2E REAL PROVEN; Product Proof COMPLETE; runtime v3 ADOPTED.

## 12. Anti-claims

NOT claimed:
- READY FOR FULL REAL DELIVERY
- REAL PROVEN
- task app build supported without new development
- production routing selected / ADOPTED
- runtime v3 ADOPTED
- DETERMINISTIC PROVEN implies READY FOR REAL

## 13. R1 — Greenfield Campaign Start Readiness

Question: Can Morris open /studio, manually create a new empty Project in an isolated DB, then converse with Nora live without contaminating the historical campaign?

Verdict: GREENFIELD CAMPAIGN START BLOCKED

Blockers (environment/config — not Product mutation authorized here):
1. BETTER_AUTH_SECRET / auth config missing → protected routes redirect to /login?error=AUTH_CONFIG_ERROR
2. OPENAI_API_KEY + OPENAI_MODEL missing in campaign env → LIVE NORA ENVIRONMENT BLOCKED

Already ready structurally:
- isolated campaign worktree on a9f6c310
- isolated SFIA_STUDIO_PRODUCT_DB_PATH
- fake provider OFF; deterministic Cursor boundary OFF
- build/typecheck OK
- historical Product DBs untouched
- Studio HTTP server boots on :3020

## 14. R2 — Full Real Task-App Delivery Readiness

Question: If Delivery requires creating/modifying application files, does current Product runtime already have governed Cursor REAL write capability?

Verdict: FULL REAL TASK-APP DELIVERY NOT READY — EXECUTOR CAPABILITY GAP

Evidence: only agt:m4.cursor.bounded_readonly with cap:cursor.read_only / cursor.read_only.inspect / workspace.isolated.read; worktree targeting is SFIA repoRoot-based.

## 15. Next Morris gate

No implicit authorization.

Required before campaign start:
1. Morris supplies campaign-local auth secrets (BETTER_AUTH_SECRET, BETTER_AUTH_URL as required by Product) into ignored campaign .env.local — without committing.
2. Morris supplies OPENAI_API_KEY + OPENAI_MODEL into the same ignored campaign env (values never to be published).
3. Morris authenticates as Pilote and manually creates the greenfield Project.

Then:
NEXT = MORRIS MANUALLY CREATES NEW GREENFIELD PROJECT
Campaign proceeds until first meaningful gate/defect.

If a REAL write/effect is later proposed:
STOP FOR DISTINCT MORRIS REAL GATE (not authorized by this cycle).
Do not expand M4; do not invent write AgentDescriptor; do not bypass ExecutionContract.

## 16. Final state

- ZERO REAL consumed
- ZERO OpenAI calls
- ZERO Cursor runtime executions via Studio
- ZERO new Product Projects created
- ZERO tracked Product mutations
- runtime v3 NON ADOPTED
- RESERVE-UX-01 OPEN
- RESERVE-PROOF-01 OPEN

## 17. Cycle global verdict

ENVIRONMENT READINESS QUALIFIED

(This does not replace R1/R2. R1 is BLOCKED on auth/Nora config; R2 is NOT READY on executor capability.)

## 18. Instruction ChatGPT

Lire sfia/review-handoff/latest-chatgpt-review.md depuis origin/sfia/review-handoff et effectuer une Critical Review de SFIA-STUDIO-PRODUCT-PROOF-GREENFIELD-TASK-APP-ENV-READINESS-01. Vérifier en particulier l isolation de la Product DB, ZERO REAL, l absence de fake provider, la configuration Nora live, le boundary Cursor REAL, les capacités exactes de l agent REAL, le targeting workspace/repo et la séparation des verdicts R1 Greenfield Campaign Start Readiness et R2 Full Real Task-App Delivery Readiness. Ne pas autoriser implicitement la campagne REAL, de write capability, de production routing ou runtime v3 ADOPTED.

### Coverage

- synthesis-only: NO
- artificial truncation: NO
- Product tracked mutation: NONE
- review pack verdict: COMPLETE
