# SFIA Review Pack — FULL

## 1. Identity

- **timestamp_utc:** 2026-09-09T11:06:23Z
- **cycle_id:** SFIA-STUDIO-PRODUCT-PROOF-GREENFIELD-TASK-APP-R1-ENV-REG-01
- **repository:** mcleland147/sfia-workspace
- **campaign_worktree:** `/Users/morris/Projects/sfia-product-proof-greenfield-task-app-a9f6c310`
- **campaign_app:** `…/projects/sfia-studio/app`
- **baseline_git:** `a9f6c310a0826d0e5bd6f7264603382a86564db1` (`origin/main` match)
- **profile:** CRITICAL
- **typology_v2.4:** RUN — environment / readiness regularization
- **project_cycle_type:** 9 — QA / validation
- **proof_level:** AUTH + NORA CONFIGURATION READINESS — **ZERO REAL**
- **prior_cycle:** SFIA-STUDIO-PRODUCT-PROOF-GREENFIELD-TASK-APP-ENV-READINESS-01
- **prior_handoff:** `06b6fa6967ac6e757abe71ea1c67abdab27cb2f7` / blob `10a1b13a5f1099a8408fa99f40abf4d2f95a89c6`

## 2. Morris GO consumed

- Scope: **R1 environment regularization only** (local campaign `.env.local` + Studio restart on :3020 + unauthenticated auth smoke).
- **No** Product source mutation.
- **No** Project creation.
- **No** OpenAI / Nora model call.
- **No** Cursor via Studio / StartExecution.
- **No** R2 executor capability gap fix.
- Git write authorized: **L3 bounded** Review Handoff publish only (`sfia/review-handoff`).

## 3. Local Git Truth

Executed from campaign worktree (first action of cycle; re-verified at exit evidence):

| Check | Result |
| --- | --- |
| `pwd` / toplevel | `/Users/morris/Projects/sfia-product-proof-greenfield-task-app-a9f6c310` |
| remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| branch | detached HEAD (expected) |
| `HEAD` | `a9f6c310a0826d0e5bd6f7264603382a86564db1` |
| `origin/main` (after fetch) | `a9f6c310a0826d0e5bd6f7264603382a86564db1` |
| tracked Product diff | **none** caused by this cycle |
| working tree note | only `.tmp-sfia-review/chatgpt-review.md` (ignored review pack source) dirty/local |

**STOP condition baseline drift:** NOT TRIGGERED.

## 4. Sources consumed

**Process / contracts**
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` (candidate; experimental guidance; no execution authority)
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Convergence / Product Completion**
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md`

**Doctrine v3 (applicable framing; not adopted as runtime)**
- `32-living-project-state-and-dynamic-trajectory.md`
- `33-epistemology-provenance-and-contradiction-model.md`
- `34-agent-capabilities-reversibility-and-execution-governance.md`
- `35-artifact-evidence-debt-and-controlled-learning.md`

**Auth / live config (read-only)**
- `app/middleware.ts`, `lib/auth/auth.ts`, `allowlist.ts`, `constants.ts`, `resolveCurrentPilote.ts`
- `lib/platform/ai/config.ts`
- `app/.gitignore` (`.env.local` ignored)

**Previous review**
- `origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` (Critical finding: incomplete Next Gate — required Better Auth + GitHub client + allowlist; `BETTER_AUTH_URL` not mandatory blocker)

## 5. Convergence qualification

- **capability:** Greenfield Product entry / authenticated Pilote / live Nora readiness serving the full Project loop (prep only).
- **milestone:** PRODUCT PROOF — GREENFIELD TASK APP — R1 ENV REGULARIZATION
- **assets:**
  - campaign worktree = KEEP
  - isolated Product DB path = KEEP
  - Better Auth / GitHub auth path = KEEP / CONFIGURED (local)
  - server-side GitHub allowlist = KEEP / CONFIGURED (local)
  - Nora live provider = KEEP / CONFIGURED (local; zero calls)
  - FakeConversationProvider = MUST REMAIN OFF (UNSET)
  - deterministic Cursor boundary = MUST REMAIN OFF (UNSET)
  - Cursor REAL = OFF / UNSET for campaign start
  - M4 bounded read-only agent = KEEP AS CURRENT TRUTH / DO NOT EXPAND
  - historical Product DBs = PRESERVE
  - old “suivi de contrat” Project = HISTORICAL / DO NOT TOUCH
- **gap closed by this cycle:** local campaign auth + Nora configuration readiness only
- **dependency after exit:** Morris manually authenticates as Pilote
- **then:** Morris may create the fresh Project under the already authorized greenfield scenario
- **first Nora live turn:** DISTINCT MORRIS REAL GATE REQUIRED before consuming the first OpenAI call
- **R2 executor capability gap:** PRESERVED AS FINDING — not fixed
- **exit proof:** see §§7–11
- **next capability:** MANUAL PILOTE AUTH CHECK
- **debt:** none intentional

## 6. Secret-safe source discovery

Scanned local SFIA `.env.local` candidates under `/Users/morris/Projects` (paths + PRESENT/MISSING only; **no values**).

Reuse policy applied: copy only qualified auth + Nora keys from a known functional Studio local config; **do not** copy `SFIA_STUDIO_PRODUCT_DB_PATH`, fake flags, Cursor REAL, reset flags.

**Reference source used for qualified keys:**
`/Users/morris/Projects/sfia-workspace-studio-dogfood-01/projects/sfia-studio/app/.env.local`

**OPENAI_MODEL ambiguity check:** all 17 discovered Studio `.env.local` files that define `OPENAI_MODEL` share the same non-secret value `gpt-5.6-luna` → **not ambiguous**.

| Path | BETTER_AUTH_SECRET | GITHUB_CLIENT_ID | GITHUB_CLIENT_SECRET | ALLOWLIST | OPENAI_API_KEY | OPENAI_MODEL | OPENAI_REASONING_EFFORT | BETTER_AUTH_URL |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| campaign `…/product-proof…/app/.env.local` (final) | PRESENT | PRESENT | PRESENT | PRESENT | PRESENT | PRESENT | MISSING | MISSING |
| `sfia-workspace-studio-dogfood-01/…/.env.local` | PRESENT | PRESENT | PRESENT | PRESENT | PRESENT | PRESENT | MISSING | PRESENT |
| `sfia-workspace-auth-better-auth-github-multi-user-foundation/…` | PRESENT | PRESENT | PRESENT | PRESENT | PRESENT | PRESENT | MISSING | PRESENT |
| `sfia-workspace-proof-corr-03-e1-real/…` | PRESENT | PRESENT | PRESENT | PRESENT | PRESENT | PRESENT | MISSING | PRESENT |
| `sfia-wt-corr04-real-*/…` (3 paths) | PRESENT | PRESENT | PRESENT | PRESENT | PRESENT | PRESENT | MISSING | PRESENT |
| other SFIA Studio `.env.local` (Nora-only / partial) | mostly MISSING auth | — | — | — | PRESENT | PRESENT | MISSING | MISSING |

`BETTER_AUTH_SECRET` = PRESENT (reused from known local Studio config; not generated this cycle).
Allowlist syntax validated locally as non-empty comma-separated positive numeric GitHub user IDs — **IDs never printed**.

## 7. Final campaign environment SANITIZED matrix

Target file (gitignored): `projects/sfia-studio/app/.env.local`

```
BETTER_AUTH_SECRET = PRESENT
GITHUB_CLIENT_ID = PRESENT
GITHUB_CLIENT_SECRET = PRESENT
SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS = PRESENT / VALID
BETTER_AUTH_URL = UNSET_DEFAULT_3020
OPENAI_API_KEY = PRESENT
OPENAI_MODEL = gpt-5.6-luna
OPENAI_REASONING_EFFORT = UNSET
OPS1_CONVERSATION_PROVIDER = UNSET / NOT_FAKE
SFIA_STUDIO_PRODUCT_DB_PATH = campaign isolated path
SFIA_STUDIO_CURSOR_REAL = OFF / UNSET
OPS1_CURSOR_REAL = OFF / UNSET
SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY = OFF / UNSET
SFIA_STUDIO_E2E_QA_CONTROL = OFF / UNSET
SFIA_V2_RUNTIME_ALLOW_RESET = OFF / UNSET
```

Isolated DB path retained exactly:
`/Users/morris/Projects/sfia-product-proof-greenfield-task-app-a9f6c310/projects/sfia-studio/.sfia-exec/product-proof-greenfield-task-app/product.sqlite`

Prior campaign `SFIA_STUDIO_CURSOR_REAL=1` **removed** for least privilege at campaign start.

## 8. Auth smoke evidence

Server: `npx next start --port 3020` from campaign app; listener PID cwd confirmed campaign app directory. Prior campaign listener on 3020 stopped gracefully (same campaign cwd).

| Request | HTTP | Location / note |
| --- | --- | --- |
| `GET /login` | **200** | Login page presents GitHub mechanism (`GitHub` / `Se connecter` markers present). **No OAuth performed.** |
| `GET /studio` (no session) | **307** | `/login?error=NO_SESSION&from=%2Fstudio` |
| `GET /studio/projects/new` (no session) | **307** | `/login?error=NO_SESSION&from=%2Fstudio%2Fprojects%2Fnew` |

- **AUTH_CONFIG_ERROR:** ABSENT on all three checks (body + redirect query).
- **NO_SESSION:** EXPECTED pre-login state; proves server auth composition progressed past config failure to session requirement.
- Interactive GitHub OAuth / callback URL mismatch: **not exercised**; if later revealed → Morris action (out of scope for auto-fix).

## 9. Nora configuration evidence

- `OPENAI_API_KEY` = PRESENT (value never shown)
- `OPENAI_MODEL` = `gpt-5.6-luna` (reused exact local Studio value; no new model selection)
- `OPENAI_REASONING_EFFORT` = UNSET
- `OPS1_CONVERSATION_PROVIDER` = UNSET / NOT_FAKE
- **OpenAI / Responses / Agents SDK calls this cycle:** **ZERO**
- Verdict: **LIVE NORA CONFIGURATION READY — ZERO CALLS**
  (configuration availability only — **not** OpenAI REAL proven, **not** first live turn authorized)

## 10. Cursor boundary

- `SFIA_STUDIO_CURSOR_REAL` = UNSET / OFF
- `OPS1_CURSOR_REAL` = UNSET / OFF
- `SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY` = UNSET / OFF
- StartExecution / Cursor via Studio this cycle: **ZERO**
- Future Cursor REAL requires distinct Morris gate if Product reaches an execution boundary.

## 11. Product DB / Project isolation

- Campaign `product.sqlite`: **ABSENT_OK** after smokes (no Project create; no form submit).
- Historical Product DBs: not touched.
- Zero Project creation; zero tracked Product mutation.

## 12. Fake / Real matrix

| Boundary | Fake this cycle | REAL this cycle | Notes |
| --- | --- | --- | --- |
| GitHub OAuth / Pilote identity | N/A | **not consumed** | Manual Morris login next |
| OpenAI / Nora | fake provider OFF | **not consumed** | Config ready; distinct REAL gate before first call |
| Cursor CLI | deterministic OFF | REAL OFF | Zero executions |
| Product SQLite | N/A | local path reserved | DB absent OK; no Project |

Entry proof prior cycle: ENVIRONMENT READINESS QUALIFIED / DETERMINISTIC PRODUCT PROOF AVAILABLE / ZERO REAL.
This cycle proof: **AUTH + NORA CONFIGURATION READINESS / ZERO REAL**.
Hard rule: DETERMINISTIC PROVEN ≠ READY FOR REAL.

## 13. R1A verdict

**R1A PASS**

Evidence: auth composition composable; redirects use `NO_SESSION` not `AUTH_CONFIG_ERROR`; allowlist PRESENT/VALID (IDs undisclosed); Nora keys PRESENT; fake OFF; Cursor REAL OFF; ZERO REAL.

## 14. R1 verdict

**GREENFIELD CAMPAIGN START — READY FOR MANUAL PILOTE AUTH CHECK**

Explicitly **not** “GREENFIELD CAMPAIGN START READY” without human GitHub login proof.

## 15. R2 carried verdict

**FULL REAL TASK-APP DELIVERY NOT READY — EXECUTOR CAPABILITY GAP**

No new repo evidence this cycle changes the prior finding (M4 bounded read-only remains current REAL agent truth; no write capability added). Not fixed; not re-scoped as development.

## 16. Manual next checkpoint

1. Morris opens `http://localhost:3020/login` and completes GitHub OAuth as Pilote (human-only).
2. Confirm session reaches `/studio` without `AUTH_CONFIG_ERROR` / allowlist denial.
3. Only after Pilote auth: Morris may create the fresh greenfield Project (separate action).
4. **First Nora live turn:** STOP FOR DISTINCT MORRIS REAL GATE before any OpenAI consumption.
5. Cursor REAL remains OFF until a future distinct gate.

## 17. Anti-claims

This cycle does **not** claim:
- Greenfield Campaign Start READY (without manual Pilote auth)
- GitHub OAuth end-to-end proven by Cursor
- Nora / OpenAI REAL proven
- Cursor REAL proven
- Full task-app delivery ready
- Product Proof COMPLETE
- runtime v3 ADOPTED
- R2 gap closed
- RESERVE-UX-01 / RESERVE-PROOF-01 closed
- first OpenAI call authorized

## 18. Final state

- runtime v3 **NON ADOPTED**
- RESERVE-UX-01 **OPEN**
- RESERVE-PROOF-01 **OPEN**
- **ZERO REAL** (this cycle)
- Global cycle verdict: **R1 ENVIRONMENT REGULARIZATION QUALIFIED** (does not replace R1A/R1/R2)

---

## ChatGPT Critical Review instruction

Lire `sfia-review-handoff/latest-chatgpt-review.md` depuis `origin/sfia/review-handoff` et effectuer une Critical Review de **SFIA-STUDIO-PRODUCT-PROOF-GREENFIELD-TASK-APP-R1-ENV-REG-01**.

Vérifier particulièrement :
- baseline `a9f6c310`
- aucune mutation Product
- aucune exposition de secret
- Better Auth config complète
- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` présents
- `SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS` présent et valide sans valeur exposée
- `AUTH_CONFIG_ERROR` disparu
- `NO_SESSION` attendu avant login
- Nora config présente
- Fake provider OFF
- Cursor REAL OFF
- deterministic boundary OFF
- ZERO OpenAI calls
- ZERO Cursor executions
- ZERO Project creation
- R1A séparé de R1
- R2 toujours séparé
- runtime v3 NON ADOPTED

Ne pas transformer READY FOR MANUAL PILOTE AUTH CHECK en GREENFIELD CAMPAIGN START READY sans preuve du login humain.

Ne pas autoriser implicitement le premier Nora live turn : premier appel OpenAI = gate Morris REAL distinct.
