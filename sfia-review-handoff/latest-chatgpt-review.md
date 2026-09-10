# ChatGPT Review Pack — LIGHT

- Timestamp (UTC): 2026-09-10T17:48:30Z
- Campaign: Greenfield Product Proof
- Phase: REAL CAMPAIGN RESUMPTION — ENVIRONMENT READINESS
- Cycle SFIA: 9 — QA / validation
- Typologie: EVOL
- Profile: CRITICAL
- GO MORRIS — RESUME GREENFIELD PRODUCT PROOF REAL: CONSUMED
- D-GF-ACW-01: ADOPTED BY MORRIS (unchanged)
- D-GF-ACW-02: ADOPTED BY MORRIS — OPTION A BOUNDED (unchanged)
- ACW SAME-LOT DETERMINISTIC COMPLETION: ACCEPTED BY CHATGPT CRITICAL REVIEW (prior)
- Product Completion: CLOSED — not reopened
- Runtime v3: NON ADOPTED
- Product code mutation this phase: ZERO
- Product commit this phase: NONE
- REAL model calls during PREP: ZERO
- Nora REAL turns during PREP: ZERO
- Product Proof business scenarios during PREP: ZERO

## Local Git Truth

### Before / throughout
- Worktree: `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- Branch: `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- HEAD: `624642fff960b41be27fe0476404cf570cfa8b22` — MATCH
- Parent: `0ac7b54b677cc7182fd36189fcc186202e8a2232` — MATCH
- origin/main: `a9f6c310a0826d0e5bd6f7264603382a86564db1` — MATCH (no rebase/merge)
- origin/sfia/review-handoff (pre-publish): `a90c468ca8f3e0344144dd1012316c7c46a5f9d2` — MATCH
- Dirty: `.tmp-sfia-review/**` only — MATCH
- Product tracked diff: ZERO

### After readiness
- HEAD unchanged: `624642fff960b41be27fe0476404cf570cfa8b22`
- Product push / PR / merge: NOT PERFORMED

## Sources read
- prompts/templates/sfia-cycle-execution-template.md (as applicable)
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md / rules-and-guardrails (as applicable)
- method/.../pilots/04-qa-validation.md (as applicable)
- convergence build doctrine + roadmap
- product-completion cadrage (CLOSED)
- v3 framing 30/32/33/34/35/37 (NON ADOPTED)
- prior Review Handoff a90c468c
- `package.json` / `.env.example` / provider config / auth / SQLite path resolvers at HEAD

## Runtime discovery (HEAD contract)

### Startup
- Script: `npm run dev` → `next dev --port 3020`
- Canonical port: **3020**
- Canonical URL: `http://127.0.0.1:3020/`

### Provider
- Resolver: `resolveConversationProvider()` (`lib/platform/ai/provider.ts`)
- Fake forced only when `OPS1_CONVERSATION_PROVIDER=fake`
- Live requires `OPENAI_API_KEY` + `OPENAI_MODEL` (`lib/platform/ai/config.ts`)
- Optional: `OPENAI_REASONING_EFFORT`
- Model routing: Product-configured via `OPENAI_MODEL` — Cursor made **no** model selection change

### Auth
- Better Auth + GitHub OAuth
- Required: `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS`
- Callback expected: `http://localhost:3020/api/auth/callback/github`

### Persistence
- Product Truth C SQLite: `SFIA_STUDIO_PRODUCT_DB_PATH` override or default `.sfia-exec/product/oa-product.sqlite`
- Nora Session: `SFIA_STUDIO_NORA_SESSION_DB_PATH` or default `.sfia-exec/product/nora-session.sqlite`
- No DB reset / purge performed

## Environment matrix (NAMES + STATE ONLY — no secrets)

| Variable | Role | State |
|---|---|---|
| OPENAI_API_KEY | REAL provider | PRESENT |
| OPENAI_MODEL | REAL model routing | PRESENT |
| OPENAI_REASONING_EFFORT | optional reasoning | MISSING (optional — OK) |
| OPS1_CONVERSATION_PROVIDER | fake force | MISSING/UNSET → fake NOT forced |
| BETTER_AUTH_SECRET | auth | PRESENT |
| BETTER_AUTH_URL | auth base URL | PRESENT |
| GITHUB_CLIENT_ID | OAuth | PRESENT |
| GITHUB_CLIENT_SECRET | OAuth | PRESENT |
| SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS | allowlist | PRESENT |
| SFIA_STUDIO_PRODUCT_DB_PATH | Product SQLite override | PRESENT |
| SFIA_STUDIO_NORA_SESSION_DB_PATH | Session override | MISSING (default path OK; default nora-session file EXISTS) |
| SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY | local authority flag | PRESENT |
| DATABASE_URL | FinOps Postgres | MISSING (NOT REQUIRED for this Product Proof path) |

Provenance: `.env.local` PRESENT; shell env for these keys MISSING (Next loads `.env.local`).

## Dependency readiness
- Node: v24.16.0
- npm: 11.13.0
- package-lock.json: PRESENT
- node_modules: PRESENT
- `npm ls --depth=0`: EXIT 0 (healthy)
- No `npm ci` / update / lockfile mutation

## Port / process
- Pre-check: PID **10539** listening on 3020
- Identified as `next-server` with cwd = this worktree `projects/sfia-studio/app`
- Action: **REUSED** existing healthy process (no kill; no unrelated-process conflict)
- PID file: `.tmp-sfia-review/sfia-studio-product-proof-dev.pid`
- Log: `.tmp-sfia-review/sfia-studio-product-proof-dev.log`

## Auth readiness
- Auth config variables PRESENT
- Unauthenticated `/` → 307 to `/login?error=NO_SESSION` (expected)
- `/login` → 200
- Manual GitHub login by Morris is the intended next step

## Persistence readiness
- Product DB override parent/file: EXISTS + WRITABLE
- Default product dir: EXISTS + WRITABLE
- Default nora-session.sqlite: EXISTS
- No destructive reset

## Local HTTP smoke (ZERO model call)
- `GET /` → **307** → login (auth gate OK)
- `GET /login` → **200**
- `GET /studio` → **307** → login → final **200**
- Fatal startup errors: **NO**
- Process still LISTEN on 3020: **YES**

## Browser
- Opened: `http://127.0.0.1:3020/`
- No automated Product Proof scenario

## Fake / Real qualification
- REAL campaign: **AUTHORIZED BY MORRIS**
- REAL calls during env prep: **ZERO**
- First REAL interaction: **Morris manual UI action** after this verdict
- Deterministic ACW suite (3484) **not re-run** (prior Critical Review evidence retained)

## Claims allowed
- ENVIRONMENT READY FOR MORRIS MANUAL PRODUCT PROOF
- REAL CAMPAIGN AUTHORIZED
- PRODUCT CANDIDATE 624642ff RUNNING LOCALLY

## Claims prohibited
- REAL BOUNDARY PROVEN
- END-TO-END REAL PROVEN
- PRODUCT PROOF PASS / PRODUCT VALIDATED / NO BUGS
- COGNITIVE COMPLETION PROVEN
- RUNTIME V3 ADOPTED
- READY FOR PRODUCTION

## Reserves
- Server process was already running (same worktree); reused rather than cold-started. Hot-reload may already reflect HEAD; no Product restart forced.
- Browser/network REALISM of Product Proof remains Morris-manual after this readiness.
- Publisher may report stale-origin false-negative; verify via `ls-remote` + blob.

## Verdict

```
PASS — GREENFIELD PRODUCT PROOF REAL ENVIRONMENT READY

PRODUCT HEAD 624642fff960b41be27fe0476404cf570cfa8b22
PRODUCT TRACKED MUTATION ZERO
DEPENDENCIES READY
LOCAL CONFIGURATION READY
AUTH READY
REAL PROVIDER CONFIGURATION READY
FAKE PROVIDER NOT FORCED
PERSISTENCE READY
PORT 3020 READY
SFIA STUDIO RUNNING
LOCAL HTTP SMOKE PASS
REAL CAMPAIGN AUTHORIZED BY MORRIS
REAL CALLS DURING ENV PREP ZERO
READY FOR MORRIS MANUAL PRODUCT PROOF
PRODUCT PUSH / PR / MERGE NOT PERFORMED
```
