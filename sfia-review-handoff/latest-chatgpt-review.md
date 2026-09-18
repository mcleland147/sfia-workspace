# PRODUCT-JOURNEY-CLOUD-CURSOR-CLI-PREFLIGHT-01 — CONTINUATION COMPLETE — Review Pack LIGHT

**Timestamp (UTC):** 2026-09-18T18:59:50Z
**Timestamp (local):** 2026-09-18 20:59:50 CEST
**Preflight identity:** PRODUCT-JOURNEY-CLOUD-CURSOR-CLI-PREFLIGHT-01
**Mode:** CONTINUATION — SAME PREFLIGHT
**SAME PREFLIGHT:** YES
**NO MICRO-CYCLE:** YES
**Morris GO consumed:** GO — CONTINUE SAME CLOUD CURSOR CLI PREFLIGHT — ALLOW NATIVE AGENT LOGIN / CURSOR-MANAGED AUTH — NO PRODUCT REAL — NO DEVELOPMENT
**Prior waiting handoff:** `ab9c07a66f542c0c788cdd7cf710cc1a5a05f294` · blob `645562d01e73325295247f0add76581c6192a7dc`
**Verdict:** CLOUD CURSOR CLI AUTH SUCCESS — STUDIO SPAWN SHAPE ACCEPTED — MODEL USAGE LIMIT BLOCKS COMPLETION TOKEN — FRESH CAMPAIGN BLOCKED

---

## 1. Git Truth

| Item | Value |
|---|---|
| origin/main | `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` |
| Tracked Product diff | **NONE** |
| Dirty | `.tmp-sfia-review/chatgpt-review.md` only |

---

## 2. Auth before → after

| Item | Before | After |
|---|---|---|
| CLI version | `2026.09.15-d2fe57e` | same |
| `agent status` | Not logged in | ✓ Logged in as `m.cleland@live.fr` |
| `CURSOR_API_KEY` | UNSET | **UNSET** (unchanged) |
| Native login command | — | `agent login` |
| Browser flow | — | Chrome auto-open + DeepControl URL |
| Morris browser authorization | — | **YES** (confirmed by Morris) |
| Login exit | — | `LOGIN_EXIT=0` · “Authentication tokens stored securely.” |

### Cursor-managed credential provisioning

**YES** (metadata only — no secret content read)

| Change | Observation |
|---|---|
| NEW dir | `~/.config/cursor` mode `0700` |
| NEW file | `~/.config/cursor/auth.json` mode `0600` size 871 |
| UPDATED | `~/.cursor/cli-config.json` size 837→1008 |

`CURSOR_API_KEY` remained UNSET → auth path used is **native Cursor-managed local credential**, not env API key.

### Account-side User API Key provisioning

**NOT CHECKED** (optional; skipped — no dashboard session used)

Do **not** infer that `agent login` created a User API Key account-side.

---

## 3. Direct CLI probe

| Item | Value |
|---|---|
| Result | **FAIL** (pre-model) |
| Executable | `/home/ubuntu/.local/bin/agent` |
| Command shape | `agent --print --mode ask --workspace /workspace --sandbox enabled "<instruction>"` (exact GO text; no `--trust`) |
| Exit code | 1 |
| Duration | ~0s |
| Stdout token | missing |
| Stderr | Workspace Trust Required — need `--trust` / `--yolo` / `-f` |
| Git mutation | NONE |
| Model invocation | **0** (blocked before model) |

Root cause: prescribed direct command omits `--trust`. Current Product gateway RO argv **includes** `--trust` + `--force`.

---

## 4. Exact Studio-shaped probe

| Item | Value |
|---|---|
| Result | **FAIL** (post-spawn / service quota) |
| Candidate | `/home/ubuntu/.local/bin/cursor-agent` (resolver fallback match) |
| Harness | `/tmp/sfia-cloud-cursor-gateway-shape-preflight.mjs` (not in repo) |
| shell:false | **YES** (proven) |
| argv0 | `agent` |
| Full argv | `agent --print --mode ask --workspace <REPO> --trust --sandbox disabled --force <instruction>` |
| Child spawned | YES |
| Timeout | NO |
| Exit code | 1 |
| Duration | ~3247 ms |
| Gateway token `CLOUD_STUDIO_GATEWAY_SHAPE_OK` | **ABSENT** |
| Stderr (redacted) | `ActionRequiredError: You've hit your usage limit … Pro+ … Spend Limit … reset … 10/2/2026` |
| Git mutation | NONE |

### Shape compatibility reading (Fact vs Hypothesis)

**Fact:** `spawn(cursor-agent, ["agent", …], {shell:false})` was accepted; CLI ran and returned a service-level usage-limit error (not a parse/unknown-subcommand error).

**Hypothesis (not proven as PASS):** current Studio gateway argv shape is likely compatible on this Cloud VM **once model quota allows a completion token**.

**Not claimed:** Studio gateway shape COMPATIBLE PASS (completion token not obtained).

---

## 5. FinOps / probes budget

| Item | Value |
|---|---|
| Model invocations | **1** / 2 (Studio-shaped attempt) |
| Direct | 0 (trust gate) |
| Billing dashboard | NOT CHECKED |
| Local usage/cost API | NOT CHECKED |

---

## 6. Gap state

| ID | State |
|---|---|
| CLOUD-CLI-02 | **CLOSED — NATIVE LOGIN SUCCESS** |
| CLOUD-CLI-03 | **OPEN** — model usage limit / Spend Limit blocks completion token on authenticated CLI |

| Field | CLOUD-CLI-03 |
|---|---|
| Expected | Authenticated Studio-shaped probe returns `CLOUD_STUDIO_GATEWAY_SHAPE_OK` |
| Observed | Usage limit ActionRequiredError after successful spawn |
| Impact | Blocks fresh Cloud Product Journey REAL until quota/Spend Limit restored |
| Product code change required? | **NO** |
| Env/account config can solve? | **YES** (Spend Limit / wait reset / account usage policy) |

No wrapper/shim/Product change performed.

---

## 7. Product / governance

| Item | Value |
|---|---|
| Product Attempts | **0** |
| Product REAL | **0** |
| `SFIA_STUDIO_CURSOR_REAL` | unset / OFF |
| Product source changes | **NONE** |
| HumanDecision Product | none |
| runtime v3 | NON ADOPTED |
| Fresh Cloud campaign | NOT STARTED / NOT AUTHORIZED |

---

## 8. Claims

**Allowed:**
- Native `agent login` works on this Cloud Ubuntu VM after Morris browser authorization
- Cursor auto-provisioned local credential (`~/.config/cursor/auth.json`) without `CURSOR_API_KEY`
- `shell:false` Studio-shaped spawn against `cursor-agent` is accepted by the CLI
- Fresh campaign remains blocked by **usage limit**, not by missing CLI install/auth

**Forbidden:**
- Studio gateway shape COMPATIBLE PASS
- Product Journey REAL / E2E / READY
- `agent login` creates User API Key (NOT CHECKED)
- runtime v3 ADOPTED
- fresh campaign authorized

---

## 9. Recommendation (not a decision)

1. Resolve Cursor Pro+ usage / Spend Limit for this account (account-side; not Product).
2. Re-run **only** the probe slice of this same preflight (direct with awareness of `--trust` difference + exact Studio-shaped) under the same GO family.
3. Do **not** start `PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01` until Studio-shaped probe returns the completion token.
4. Prefer native login path (already proven) over manual API key creation unless native auth fails to persist across Cloud Agents.

NO MICRO-CYCLE. NO PRODUCT BUILD.

---

## 10. Final verdict

**CLOUD CURSOR CLI AUTH SUCCESS — STUDIO SPAWN SHAPE ACCEPTED — MODEL USAGE LIMIT BLOCKS COMPLETION TOKEN — FRESH CAMPAIGN BLOCKED**

(Closest authorized family: auth success + service/quota blocker; not shape-incompatibility Verdict E; not A/B.)
