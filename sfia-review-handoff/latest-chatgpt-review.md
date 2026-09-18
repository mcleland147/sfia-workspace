# PRODUCT-JOURNEY-CLOUD-CURSOR-CLI-PREFLIGHT-01 — Review Pack LIGHT

**Timestamp (UTC):** 2026-09-18T18:40:14Z
**Timestamp (local):** 2026-09-18 20:40:14 CEST
**Preflight identity:** PRODUCT-JOURNEY-CLOUD-CURSOR-CLI-PREFLIGHT-01
**Cycle:** 9 — QA / validation
**Profile:** STANDARD
**NO MICRO-CYCLE:** YES
**CKC:** ckc:studio:qa-validation · 0.1.0 · guidance only · authority NONE
**Morris GO consumed:** GO — CLOUD CURSOR CLI PREFLIGHT — READ-ONLY — NO PRODUCT REAL — NO DEVELOPMENT
**Verdict:** CLOUD CURSOR CLI AUTH REQUIRED — FRESH CAMPAIGN BLOCKED

---

## 1. Git Truth

| Item | Value |
|---|---|
| origin/main | `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` |
| HEAD (leftover local WT) | `de954f80…` (PR #505 branch remnant; remote deleted) |
| Main advanced since a6dba977? | NO |
| Launch contract sources | read from workspace = main content for gateway/runner |
| Tracked Product diff | **NONE** |
| Local dirty | `.tmp-sfia-review/chatgpt-review.md` only |

PR #505 remains MERGED / POST-MERGE VERIFIED context for current main.

---

## 2. Current Product launch contract (verified in code)

`resolveCursorBinPath` order:

1. `SFIA_CURSOR_BIN`
2. `/Applications/Cursor.app/Contents/Resources/app/bin/cursor`
3. `$HOME/.local/bin/cursor-agent`

RO argv shape (gateway):

`agent --print --mode ask --workspace <ws> --trust --sandbox disabled --force <instruction>`

`NodeCursorProcessRunner`: `spawn(executable, argv, { shell:false, stdio:["ignore","pipe","pipe"] })`

---

## 3. Cloud environment

| Item | Value |
|---|---|
| OS | Ubuntu 24.04.4 LTS (Noble) · linux/x64 · kernel 6.12.94+ |
| HOME | `/home/ubuntu` |
| SHELL | `/bin/bash` |
| Managed repo root | `/workspace` (writable `/tmp` for future `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE`) |
| Managed-repo composition | appears **feasible** (git remote present; tmp writable) — **≠ REAL proven** |

---

## 4. CLI discovery + install

**Before install:** `agent` / `cursor-agent` / `cursor` absent; `SFIA_CURSOR_BIN` unset; macOS Cursor path N/A.

**Official install performed:** YES
`curl https://cursor.com/install -fsS | bash` (user-space; no sudo; no shell-profile mutation; no repo write)

**After install:**

| Path | Status |
|---|---|
| `/home/ubuntu/.local/bin/agent` | EXISTS_EXEC → symlink to `…/versions/2026.09.15-d2fe57e/cursor-agent` |
| `/home/ubuntu/.local/bin/cursor-agent` | EXISTS_EXEC (same target) |
| macOS Cursor App bin | ABSENT |

**CLI version:** `2026.09.15-d2fe57e` (`agent --version` exit 0)

**Resolver-compatible binary found:** YES — `$HOME/.local/bin/cursor-agent` matches current resolver fallback without code change.

**SFIA_CURSOR_BIN requirement:** NO (for binary discovery alone)

**Operational SFIA_CURSOR_BIN candidate:** `/home/ubuntu/.local/bin/agent` or `cursor-agent` (same binary) — auth still required before operational use.

---

## 5. Auth

| Item | Value |
|---|---|
| `agent status` | exit 0 · stdout: `Not logged in` |
| Auth status | **NOT AUTHENTICATED** |
| `CURSOR_API_KEY` | **UNSET** |
| Other Cursor tokens checked | UNSET (names only; values never printed) |

Per GO: no `agent login`; no login URL; no secret mutation.

---

## 6. Probes

| Probe | Result |
|---|---|
| Direct official CLI model probe | **NOT RUN** (auth required) |
| Exact Studio-shaped shell:false spawn probe | **NOT RUN** (auth required) |
| Model invocations consumed | **0** / max 2 |
| Git mutation from probes | **NONE** |
| Product Attempts created | **0** |
| Product REAL | **0** |
| `SFIA_STUDIO_CURSOR_REAL` | unset / OFF |

Compatibility of gateway argv shape vs Cloud CLI remains **UNPROVEN** this run (blocked before probe).

---

## 7. Gap

### CLOUD-CLI-02 — authentication unavailable

| Field | Value |
|---|---|
| Expected | Authenticated Cursor CLI usable for read-only probes |
| Observed | CLI installed + version OK; `agent status` = Not logged in; `CURSOR_API_KEY` UNSET |
| Exact command | `agent status` |
| Exit code | 0 |
| stderr | empty |
| Impact on fresh Cloud Product Journey | **BLOCKS** any Studio→Cursor REAL boundary on this VM until auth configured |
| Product code involved | NONE (environment/auth only) |
| Env config alone can solve? | **YES** — supported Cloud Agent secret / Cursor credential mechanism |
| Product change required? | **NO** |

Root cause: Cloud environment lacks Cursor CLI credentials. Not a Studio gateway code defect at this stage.

---

## 8. Claims

**Allowed:**
- Official Cursor CLI installable user-space on this Cloud Ubuntu VM
- `cursor-agent` path matches current Product resolver fallback
- Auth currently unavailable → fresh Cloud Product Journey campaign blocked at CLI auth preflight

**Forbidden:**
- Product Journey READY / REAL PASS / E2E REAL
- Studio gateway shape COMPATIBLE (unproven)
- runtime v3 ADOPTED
- fresh campaign authorized

---

## 9. Recommendation (not a decision)

Configure Cursor credential through the supported Cloud Agent secret/environment mechanism (`CURSOR_API_KEY` or equivalent supported auth), then **re-run this same preflight** to complete:

1. direct read-only CLI probe
2. exact Studio-shaped `shell:false` + `argv[0]=agent` spawn probe

Do **not** start `PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01` until Verdict A or B is achieved.

No Product build. No micro-cycle. No wrapper/shim.

---

## 10. Final verdict

**CLOUD CURSOR CLI AUTH REQUIRED — FRESH CAMPAIGN BLOCKED**

SAME PREFLIGHT. NO MICRO-CYCLE. ZERO PRODUCT REAL. ZERO ATTEMPT. ZERO PRODUCT SOURCE CHANGE.
