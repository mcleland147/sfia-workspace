# SFIA STUDIO — Product Proof Dogfood Environment Preparation (LIGHT)

- timestamp: 2026-09-15T09:20:15Z
- cycle: 7 — Intégration / DevOps / RUN / Critical
- Morris GO consumed: refresh dogfood to post-CORR-PROOF-10 main + preserve durable state + start runtime 3020; NO Product interaction
- repository: mcleland147/sfia-workspace
- worktree used: `/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d`
- expected origin/main: `1215c4823ba29421f46553f9b2fd2bde5b63c0f6`
- Fake/Real: ZERO OpenAI LIVE / ZERO Cursor REAL / ZERO Product mutation / ZERO dogfood business action

## Git Truth

### Before refresh

- detached HEAD observed at initial check: `93ac1aea1af6b2094c158c5068bec1602d863ca7`
- immediate pre-switch HEAD captured in backup manifest: `18b767526e93202dc8df232fa1b6ca7837dd399d` (PR #486 head; parent of merge)
- origin/main: `1215c4823ba29421f46553f9b2fd2bde5b63c0f6` (MATCH expected)
- tracked dirty: `.tmp-sfia-review/chatgpt-review.md` only (NOT Product source)
- staged: empty
- no Product tracked delta → refresh allowed

### Refresh

- method: `git switch --detach 1215c4823ba29421f46553f9b2fd2bde5b63c0f6`
- NOT used: reset --hard / clean / rebase / merge / branch create / commit / push

### After refresh

- HEAD: `1215c4823ba29421f46553f9b2fd2bde5b63c0f6`
- git status: `M .tmp-sfia-review/chatgpt-review.md` only
- tracked Product sources: clean

## Durable dogfood state (no secrets)

Identified:

| Artifact | Path / nature | Size | SHA-256 | Preserved |
|---|---|---|---|---|
| Product DB | symlink → `…/sfia-workspace/projects/sfia-studio/.sfia-exec/product/oa-product.sqlite` | 2998272 | `c3347c12…b4eb9c` | YES (hash match pre/post) |
| Nora session DB | dogfood-local `…/.sfia-exec/product/nora-session.sqlite` | 73728 | `4ceb9594…550690` | YES |
| D1 state | `…/.sfia-exec/local-i1/state/d1.sqlite` | 61440 | `90d95a11…786866` | YES |
| Env | symlink `.env.local` → resolved auth dogfood env file | 583 | `d625df1e…0e924ed` | YES |

Env variable **names** only (values NEVER printed):
`BETTER_AUTH_SECRET BETTER_AUTH_URL GITHUB_CLIENT_ID GITHUB_CLIENT_SECRET SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS OPENAI_API_KEY OPENAI_MODEL SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY`

Local safety backup (private, mode 700/600, outside Git):
`/Users/morris/.cache/sfia-dogfood-backups/post-corr-proof-10-prep-20260915T0910Z/`
(contains binary copies + MANIFEST; no handoff of secret values)

Also present (not mutated by this cycle): `oa-product.sqlite.empty-local-backup-20260914T141839Z`

## Port / process

- Before refresh: no listener on 3020
- First start via tool-scoped `nohup` briefly healthy then reaped when parent shell ended (macOS; `setsid` unavailable)
- Stable restart: Cursor background shell kept alive with `npm run dev`
- After: node next-server listening on `*:3020`
- Wrapper / shell PID: `54290`
- Listener PID: `54314` (`next-server (v15.5.20)`)
- cwd: dogfood app path
- Log / terminal capture: `/tmp/sfia-studio-product-proof-3020.log`
- PID file: `/tmp/sfia-studio-product-proof-3020.pid`

## Dependencies

- `node_modules` PRESENT and coherent (`npm ls --depth=0` OK)
- no `npm ci` / no package update
- `package.json` / `package-lock.json` remain clean

## Start + smoke (read-only)

- command: `npm run dev` (Next `--port 3020`) from dogfood app
- Ready: Next.js 15.5.20 on http://localhost:3020
- HTTP `/` no-follow: **307** → `/login?error=NO_SESSION&from=%2F` (expected auth gate)
- HTTP `/` follow: **200** on login
- No fatal server errors
- Server left **running** in background shell

## Non-mutation Product

Pre/post smoke SHA-256 of Product DB / session / D1: **identical**
(`c3347c12…` / `4ceb9594…` / `90d95a11…`)

No Nora message, no Options CTA, no HD, no EC, no Execute, no REAL.

Runtime-only expected: `.next/**` / log file may change (not Product business state).

## Actions NOT performed

- Product Proof campaign continuation
- business clicks / Nora chat / HD / PREPARE / Execute / materialization
- REAL / LIVE provider calls
- dogfood DB reset / recreate worktree
- force push / hard reset / clean
- Product commit / push
- secret printing / upload

## URL for Morris

**http://localhost:3020**

## Verdict

SFIA STUDIO DOGFOOD — POST-CORR-PROOF-10 ENVIRONMENT READY — RUNTIME 3020 HEALTHY — DURABLE STATE PRESERVED — READY FOR MORRIS MANUAL TEST
