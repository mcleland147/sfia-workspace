# PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01 — Review Pack FULL

**Timestamp (UTC):** 2026-09-18T19:31:27Z
**Timestamp (local):** 2026-09-18 21:31:27 CEST
**Campaign:** PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01
**Cycle:** 9 — QA / VALIDATION
**Profile:** CRITICAL
**NO MICRO-CYCLE:** YES
**Morris GO consumed:** GO — START PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01 — FRESH CLOUD PRODUCT DB — ONE PRODUCT CURSOR REAL MAX — USD 5 HUMAN ON-DEMAND CEILING — NO PRODUCT DEVELOPMENT
**Verdict:** PRODUCT-JOURNEY CLOUD REPROOF — PRE-REAL BLOCKED — ZERO PRODUCT REAL CONSUMED

Primary blocker:
**Studio UI inaccessible — Better Auth / GitHub OAuth configuration missing on Cloud Agent (`AUTH_CONFIG_ERROR`).**

---

## 1. Git Truth

| Item | Value |
|---|---|
| origin/main | `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` |
| Main drift since expected SHA | NO |
| Runtime detached worktree | `/tmp/sfia-pj-cloud-01-main` |
| Runtime HEAD | `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` |
| Runtime status | clean |
| Tracked Product diff | **NONE** |

---

## 2. Preflight input (accepted)

| Item | Value |
|---|---|
| Handoff | `ce031d5684ff76bd34cd33cfffc71f02396b58d9` · blob `057bf88ae084b0f9987f9f4763241a4527c1a691` |
| Cloud Cursor CLI | PASS · native auth · Studio-shaped spawn proven |
| CLI | `2026.09.15-d2fe57e` · `/home/ubuntu/.local/bin/cursor-agent` |
| On-Demand ceiling | USD 5 — MORRIS-PROVIDED |
| RES-CLOUD-CLI-FINOPS-01 | OPEN / NON-BLOCKING (carried) |

Native `agent status` at campaign start: ✓ Logged in as `m.cleland@live.fr`.

---

## 3. Campaign environment prepared (pre-UI)

| Item | Value |
|---|---|
| Product DB path | `/workspace/projects/sfia-studio/.sfia-exec/pje2e-cloud-reproof-01/product/oa-product.sqlite` |
| DB file created | **NO** (Product never opened — auth blocked) |
| State root | `/workspace/projects/sfia-studio/.sfia-exec/pje2e-cloud-reproof-01` (gitignored) |
| Managed base | `/tmp/sfia-pj-cloud-01-managed` |
| Pre-seeded managed clone | `mcleland147__sfia-workspace` @ `a6dba977` (clean; target artifact ABSENT) |
| Studio process | `next dev --port 3020` in tmux `sfia-pj-cloud-reproof` |
| Studio URL | `http://localhost:3020/studio` → **307 → `/login?error=AUTH_CONFIG_ERROR`** |
| `SFIA_STUDIO_CURSOR_REAL` | `1` (set; unused — no Execute) |
| `OPS1_CURSOR_REAL` | unset |
| Conversation provider | `OPS1_CONVERSATION_PROVIDER=fake` (OPENAI_API_KEY UNSET → Nora LIVE unavailable) |
| `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` | `1` (intended local Pilote authority; unreachable behind auth wall) |

### Auth secrets observed (SET/UNSET only — no values)

| Variable | Status |
|---|---|
| `BETTER_AUTH_SECRET` | UNSET |
| `BETTER_AUTH_URL` | UNSET |
| `GITHUB_CLIENT_ID` | UNSET |
| `GITHUB_CLIENT_SECRET` | UNSET |
| `SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS` | UNSET |

Middleware requires Better Auth session ∩ GitHub account binding ∩ allowlist. Without secrets, `getSfiaAuth()` fails closed → `AUTH_CONFIG_ERROR`.

No cookie forgery / SQL session injection / Product code change performed.

---

## 4. Campaign progress

| Step | Status |
|---|---|
| Detached main worktree | DONE |
| Fresh campaign dirs | DONE |
| Managed repo seed | DONE (expected identity path) |
| Studio start | DONE (listening) |
| Morris UI access | **BLOCKED** |
| Fresh Project creation | NOT STARTED |
| HumanDecision | NONE |
| ExecutionContract | NONE |
| Confirmation | NONE |
| Pre-real forensic backup | NOT STARTED (blocked before REAL gate) |
| Product Cursor REAL | **0** |
| Attempts | **0** |
| Evidence / RB / ContractResult | NONE |
| Product Result | N/A |
| Post-Evidence / reload | NOT STARTED |

---

## 5. Gaps / Reserves

### BLOCKER CLOUD-REPROOF-BLK-AUTH-UI-01

| Field | Value |
|---|---|
| Loop step | Start Studio / Pilote UI access |
| Expected | Morris can open `/studio` and act as Pilote |
| Observed | `/studio` → `/login?error=AUTH_CONFIG_ERROR`; Better Auth/GitHub OAuth env unset |
| UI evidence | HTTP 307 Location `/login?error=AUTH_CONFIG_ERROR` |
| DB evidence | Product DB file not created |
| REAL consumed | NO |
| Severity | **BLOCKING** |
| Blocks campaign | YES — STOP BEFORE REAL |
| Product code area | `middleware.ts` · `lib/auth/*` · `.env.example` |
| Architecture | KEEP Product auth; environment config missing |
| Env-only fix? | **YES** — configure supported Cloud secrets; no Product build |
| Second REAL required? | N/A |

### RES-CLOUD-REPROOF-NORA-LIVE-01

OPEN / NON-BLOCKING FOR CURSOR-REAL PRODUCT JOURNEY CLAIM
`OPENAI_API_KEY` UNSET → planned provider = deterministic FakeConversationProvider.

### RES-CLOUD-REPROOF-PILOTE-AUTH-01

OPEN — `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1` is the documented local TEMPORARY WITH EXIT Pilote authority path, but UI never reached to exercise it.

### RES-CLOUD-CLI-FINOPS-01

OPEN / NON-BLOCKING (carried from preflight).

---

## 6. Claims

**Allowed:**
- Campaign setup reached Studio listen state on current main detached worktree
- STOP BEFORE REAL due to missing Better Auth / GitHub allowlist configuration
- ZERO Product Cursor REAL consumed
- ZERO Product Attempts
- ZERO Product source mutation

**Forbidden:**
- Product Journey REAL PASS / E2E PASS / Product SUCCESS
- Product Completion COMPLETE/CLOSED
- runtime v3 ADOPTED
- ALL EXTERNAL BOUNDARIES REAL
- Cognitive Completion
- claim that local Morris authority alone replaces Better Auth session for `/studio`

---

## 7. Recommendation (not a decision)

Configure Cloud Agent secrets (supported env only — no Product change):

1. `BETTER_AUTH_SECRET` (long random)
2. `BETTER_AUTH_URL=http://localhost:3020`
3. `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` (OAuth App; callback `http://localhost:3020/api/auth/callback/github`)
4. `SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS=<Morris numeric GitHub user id>`

Then **resume the SAME macro** under a continuation GO (or re-issue campaign GO) from Studio login → Project create → … → ONE REAL max.

Do **not** invent sessions. Do **not** SQL-backfill Pilote. Do **not** Product-build auth bypass. Do **not** start a second REAL path.

Studio tmux session `sfia-pj-cloud-reproof` left running for potential resume after secrets; restart with env injection will be required once secrets exist.

---

## 8. Final verdict

**PRODUCT-JOURNEY CLOUD REPROOF — PRE-REAL BLOCKED — ZERO PRODUCT REAL CONSUMED**

SAME MACRO. NO MICRO-CYCLE. NO PRODUCT FIX. NO REAL. NO ATTEMPT. NO PRODUCT SOURCE DIFF.
