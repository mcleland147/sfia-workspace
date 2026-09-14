# SFIA Studio Product Proof — Dogfood Refresh after CORR-PROOF-07

**Timestamp (UTC):** 2026-09-14T13:55:55Z
**Campaign:** SFIA Studio Product Proof — Fresh Project Full Cycle
**Continuation:** post-CORR-PROOF-07 dogfood refresh
**Type:** RUN / Validation
**Profil:** CRITICAL
**Construction cycle:** CORR-PROOF-07 CLOSED — MERGED / POST-MERGE VERIFIED
**Runtime v3:** NON ADOPTED
**Proof level this run:** ENVIRONMENT / CONTINUITY READINESS only
**REAL Nora:** NOT EXERCISED

**Verdict:** `DOGFOOD REFRESH ACCEPTED — MANUAL PRODUCT PROOF RESUME READY`

```
STOP BEFORE NORA INTERACTION — MANUAL PRODUCT PROOF RESUME
```

---

## A. Git truth

| Field | Value |
|---|---|
| Repository | `mcleland147/sfia-workspace` |
| Worktree | `/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d` |
| Mode | detached HEAD |
| HEAD before | `9c4edb0bd8c5b22875ffe39af088abde67a354ec` |
| origin/main / target | `84a36a8d32f7b2632180d789e41521d6e769c681` |
| HEAD after | `84a36a8d32f7b2632180d789e41521d6e769c681` |
| Switch | `git switch --detach 84a36a8d…` |
| Staged before/after | none |
| Modified/untracked tracked | none (clean) |
| Dirty | no |

PR integrated: **#484**

---

## B. Persistence

| Field | Value |
|---|---|
| DB path | `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/product/oa-product.sqlite` |
| Exists before | yes — SQLite 3.x, size 2744320 bytes, mtime Sep 14 09:08 |
| SHA-256 before switch | `a110db0b2b6cdc2230f8f44d5c132e87de8bf21ef9a00b78be607cde83f82f80` |
| SHA-256 after switch (pre-start) | identical |
| WAL before | absent |
| SHM before | absent |
| Exists after start | yes — same path |
| Reset/seed/recreate/migration | **ZERO** |
| New DB / path change | **ZERO** |

`.env.local`:
- exists as **symlink**
- target: `/Users/morris/Projects/sfia-workspace-studio-dogfood-01/projects/sfia-studio/app/.env.local`
- target exists: yes
- preserved after switch: yes
- secrets: not displayed

---

## C. Runtime

| Field | Value |
|---|---|
| Prior listener on 3020 | none |
| Stop result | N/A (port free) |
| Launch cwd | `…/product-proof-preflight-35b1371d/projects/sfia-studio/app` |
| Launch command | `npm run dev` → `next dev --port 3020` |
| npm PID | `75570` |
| next-server LISTEN PID | `75588` |
| Listener cwd | dogfood app path (confirmed) |
| Port 3020 | LISTEN (IPv6 `*:3020`) |
| Ready | `Ready in 1094ms` (Next.js 15.5.20) |
| Log | `/tmp/sfia-studio-product-proof-3020.log` |
| Fatal errors | none observed |

HTTP readiness (GET only):
- `GET /` → **307** → `/login?error=NO_SESSION&from=%2F`
- `GET /login` → **200**
- `GET /studio` → **307** (auth redirect)

node_modules reused (no npm install/ci). package.json/lockfile untouched by PR #484.

---

## D. Product interaction

- ZERO POST / Product action by Cursor
- ZERO Nora call
- ZERO Project/cycle/decision mutation by Cursor
- Manual next step reserved for Morris in browser

---

## E. Git effects

- ZERO Product commit
- ZERO Product push
- ZERO PR
- ZERO merge
- Detached dogfood HEAD = exact merge SHA
- No reset --hard / clean / stash / rebase

---

## F. Review Handoff identity

```
Remote tip:
RESOLVE FROM CURRENT GIT — intentionally not embedded

Canonical blob:
RESOLVE FROM CURRENT GIT — intentionally not embedded

Remote verification:
REQUIRED BY CANONICAL PUBLISHER
```

Publisher: `scripts/sfia/publish-review-handoff.sh`
Handoff worktree: `/Users/morris/Projects/sfia-workspace/sfia-review-handoff`
Commit message: `docs(review): publish post-CORR-PROOF-07 dogfood refresh`

---

## G. Remaining proof (manual)

Morris opens the same Product manually, verifies persisted Project/cycle for « Gestion de tâches », then submits exactly:

`Matérialise ce livrable.`

Observe naturally; do not pre-seed Nora with expected mechanics.

---

## H. Verdict

**DOGFOOD REFRESH ACCEPTED — MANUAL PRODUCT PROOF RESUME READY**

```
STOP BEFORE NORA INTERACTION
```
