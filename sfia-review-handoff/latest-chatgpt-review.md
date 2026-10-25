# SFIA Review Pack — LIGHT
# AKG-M5 / L2-D2 — H4-03 OA-ONLY FRESH START INSTANCE DESIGNATION
# READ-ONLY / DECISION-READY

## 0. Meta
- Generated (UTC): 2026-10-25T09:07:31Z
- Generated (local): 2026-10-25 10:07:31 +0100
- Cycle: 6 Architecture + bloc 9 QA · Critical · EVOL qualification
- Capacity: O-01 · Milestone: AKG-M5 L2-D2 OA-only / H4
- Mono-cycle H4-03 (does not remix H4-01/H4-02 bodies; reuses their proofs)
- READ-ONLY · no FS create · no DB · no .env write · no code/docs · no project Git
- L3 handoff only

## 1. Decision consumed — H4-D01
**OA-only strategy Option A — DECIDED:**
- Fresh Start isolé
- OA Product Truth C + Nora Memory B distincte
- Nominal entry `/studio` only
- Procedural non-use of D1 routes (`/workspace`, `/projects/*`, `/nouvelle-demande`)
- No new D1 hardening
- Mechanical legacy neutralization deferred to later useful Delivery

**Not yet decided (this cycle's job):** concrete location, operational owner, instance designation accept/refuse.

## 2. Git Truth
- Repo: mcleland147/sfia-workspace
- Reading WT: …/sfia-workspace-feat-akg-m5-l2-d2-activation-prep-bounded
- Branch/HEAD local: feat/… @ `cdc9909d` (ancestor of main — **not** current main)
- **origin/main:** `7db8afd7c27720712f08000274dbbc4e1a62d935` (PR #617 MERGED)
- Dirty: `.tmp-sfia-review/chatgpt-review.md` only
- Handoff entry H4-02: `7fe1376f` / blob `eebadfc3…`
- No rebase/reset/branch move · worktrees preserved

## 3. Sources
Process v2.6 · Build Doctrine · Roadmap (tip lag #614 vs #617 signalled, no docs cycle) · Product Completion · AKG-M5 blueprint + L2-D0 §08 · doctrine v3 NON ADOPTED · PRR 03–09 · `.env.example` · path resolvers (product/nora/d1/ops1) · `app/studio/**` · H4-01 + H4-02 handoffs.

## 4. Local platform (READ-ONLY discovery)
| Fact | Value |
|------|-------|
| OS | macOS Darwin · ProductVersion 27.2 (Build 26B118) |
| HOME | `/Users/morris` |
| USER | `morris` |
| App Support parent | EXISTS · `drwx------+` owner morris |
| SFIA name collision in App Support top | **NONE** (no sfia/interv/studio match) |
| WT default `.sfia-exec` Product/Nora/D1 | **ABSENT** (this Delivery WT) |
| Observed git remote (for binding *candidate* only) | `https://github.com/mcleland147/sfia-workspace.git` · default remote HEAD `main` |

## 5. Concrete proposal — CAND-ABS-A

### Identity
| Field | Proposal |
|-------|----------|
| Instance ID | `oa-only-fresh-start-h4` |
| Class | Fresh Start OA-only · Option A · Application Support–class |
| Root (absolute) | `/Users/morris/Library/Application Support/SFIA-Studio/oa-only-fresh-start-h4` |
| Product SQLite | `/Users/morris/Library/Application Support/SFIA-Studio/oa-only-fresh-start-h4/state/oa-product.sqlite` |
| Nora Session SQLite | `/Users/morris/Library/Application Support/SFIA-Studio/oa-only-fresh-start-h4/state/nora-session.sqlite` |
| Managed repos base (O-01 preflight candidate) | `/Users/morris/Library/Application Support/SFIA-Studio/oa-only-fresh-start-h4/managed-repos` |
| Isolation | Outside all Git worktrees · absolute paths · not cwd-relative `.sfia-exec` |
| Users scope | Single local operator host account `morris` (Fresh Start pilot scope) |
| Owner operational | **PROPOSED: Morris** · status until accept: **UNASSIGNED / PENDING DESIGNATION** |
| Exclusive | `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` **DEFAULT OFF / NOT ACTIVATED** |
| Cursor REAL | `SFIA_STUDIO_CURSOR_REAL` **NOT ACTIVATED** |

### Presence / collision (verified; nothing created)
| Path | Status |
|------|--------|
| `…/Application Support/SFIA-Studio` | **ABSENT** |
| Instance root `/Users/morris/Library/Application Support/SFIA-Studio/oa-only-fresh-start-h4` | **ABSENT** |
| Product / Nora / managed-repos under instance | **ABSENT** (parents absent) |
| Unknown occupied data at proposed leaf | **None observed** — free to designate |

### Creation conditions (FUTURE — not this cycle)
Only after Morris accepts designation + distinct launch/G-REAL GO as applicable:
1. Create directory tree under instance root (`state/`, optional `managed-repos/`).
2. Set non-secret env for Product/Nora absolute paths (local profile / `.env.local` — **not written here**).
3. Supply repository binding + authority gates per §6 (Morris-owned values).
4. Start Studio with entry **`/studio` only**.
5. Do **not** arm exclusive; do **not** visit legacy D1 URLs.

### Rollback / return to baseline (if dirs ever created later)
- Stop Studio processes using the instance.
- Leave or remove **only** the designated instance root after Morris GO (no silent delete).
- Unset instance-specific env overrides.
- Do **not** touch other App Support apps · do **not** delete D1 historical stores elsewhere · do **not** mutate worktree `.sfia-exec`.

## 6. Configuration contract (NON-SENSITIVE — values not written to disk)

### Required for durable OA-only SoT
```
SFIA_STUDIO_PRODUCT_DB_PATH=/Users/morris/Library/Application Support/SFIA-Studio/oa-only-fresh-start-h4/state/oa-product.sqlite
SFIA_STUDIO_NORA_SESSION_DB_PATH=/Users/morris/Library/Application Support/SFIA-Studio/oa-only-fresh-start-h4/state/nora-session.sqlite
```

### Required for Product Create (O-01) — from `.env.example` / composition
Server-owned RepositoryBinding (fail-closed if absent):
| Key | Status this cycle |
|-----|-------------------|
| `SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY` | **PENDING MORRIS** — candidate observed: `mcleland147/sfia-workspace` (**not auto-adopted**) |
| `SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL` | **PENDING MORRIS** — candidate observed: `https://github.com/mcleland147/sfia-workspace.git` |
| `SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH` | optional · candidate `main` |

### Typically required for Product local preflight / managed docs path
| Key | Proposal |
|-----|----------|
| `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` | candidate `/Users/morris/Library/Application Support/SFIA-Studio/oa-only-fresh-start-h4/managed-repos` (**ABSENT**; create only under later GO) |
| `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY` | **NOT auto-assigned** — Morris decides if `1` for single-user local profile |
| Auth secrets / GitHub OAuth | **out of report** · required for authenticated Studio per `.env.example` but not inventable here |

### Explicitly OFF
```
SFIA_STUDIO_LOCAL_OA_EXCLUSIVE  # unset/0
SFIA_STUDIO_CURSOR_REAL         # unset/0
```
Future O-01 REAL proof must **not** depend on Cursor REAL launch.

**No secrets in this pack. No `.env` written.**

## 7. D1 hors parcours (Option A limit — explicit)
- Nominal entry: **`/studio`**
- Do not use: `/workspace`, `/projects/*`, `/nouvelle-demande`
- With exclusive OFF those routes can still open D1 if visited → **D1 absent from nominal O-01, not mechanically unreachable**
- No Proxy / openD1Db / nav / features/d1 changes this cycle
- R-03: globally OPEN · no new hardening · instance-scoped non-applicability **conditional** on procedural non-use (H4-02)

## 8. H4 checklist §08 (Fresh Start — no historical D1 volumes)

| # | Criterion | Status | Proof | Limit / action | Morris? |
|---|-----------|--------|-------|----------------|---------|
| 1 Env | **PROPOSED** not designated | This pack paths | Accept/refuse | **YES** |
| 2 Owner | PENDING | Proposed Morris | Confirm owner | **YES** |
| 3 Writers | Product+Nora intended | Code OA-only (H4-02) | No launch yet | Launch GO |
| 4 Readers | `/studio` | Code | Legacy residual | Procedural |
| 5 Volumes | Empty Fresh Start · paths ABSENT | Discovery | No 131/43 import · prod UNKNOWN | — |
| 6 Users | morris host scope proposed | Discovery | Confirm | **YES** |
| 7 Conservation | N/A historical on empty FS | — | Document none | — |
| 8 Backup | DET VACUUM exists; LIVE proc pending | S1 | Operator proc at G-REAL | Later |
| 9 Nav | `/studio` policy | H4-D01 | `/`→synthese POC residual | Procedural |
| 10 Fallback | STOP w/o D1 write re-enable | H4-02 | Q12 not required for empty FS | — |
| 11 Q7–Q12 | DET partial | Prior | REAL future | G-REAL |
| 12 No D1 writers nominal | Code+DET under policy | H4-02 | Mechanical gap if legacy hit | Procedural |
| 13 Stops | Collision/create/secret/exclusive/REAL | Contract | — | — |
| 14 Gate | Designation | This pack | Accept CAND-ABS-A | **YES** |

**H4 INSTANCE — PENDING MORRIS DESIGNATION** (not PASS).

## 9. Future proof minimum (NOT executed in H4-03)
After designation + launch GO / G-REAL borné:
1. Studio starts with validated absolute paths
2. Create Project (O-01)
3. List + consult
4. Close / restart
5. Reopen same Project
6. Coherent persistence
7. No D1 file created on **nominal controlled path**
8. STOP behaviour without D1 write re-enable
9. Instance data protection (paths only used by designated profile)

## 10. R23 / R24 / critical path
- R23: code + `.env.example` + local discovery
- R24: **NO SEMANTIC IMPACT**
- Roadmap tip lag #614/#617 — signal only
- Path: O-01 OA-only → **H4 concrete designate** → launch prereqs → **G-REAL borné** → HTTP/restart proof → Product Completion / D1 exit later
- No Q12/R-03 hardening campaign

## 11. Precise decision requested of Morris
**Accept or refuse** designation of instance `oa-only-fresh-start-h4` at root:
`/Users/morris/Library/Application Support/SFIA-Studio/oa-only-fresh-start-h4`
with Product `/Users/morris/Library/Application Support/SFIA-Studio/oa-only-fresh-start-h4/state/oa-product.sqlite` and Nora `/Users/morris/Library/Application Support/SFIA-Studio/oa-only-fresh-start-h4/state/nora-session.sqlite`.

Also confirm or replace:
- operational owner (proposed Morris);
- repository binding candidates (`mcleland147/sfia-workspace` + remote URL + `main`);
- whether Pilot local authority may be enabled for that profile under a later launch GO.

**Do not** treat acceptance as G-REAL or G-ACTIVATION.

## 12. Next G-REAL borné (content only — NOT executed)
Scoped to designated instance if accepted:
- Start Studio with §6 non-secret config + auth as already required locally
- Exercise O-01 via `/studio` only (create / list / consult / restart / reopen)
- Assert Product/Nora files appear only under instance root
- Assert procedural avoidance of D1 routes; note residual mechanical reachability
- No exclusive arming · no Cursor REAL · no D1 deletion · no legacy route code change unless separate Delivery GO

## 13. Fake / Real
**ENVIRONMENT DESIGNATION PROPOSAL AT READ-ONLY EVIDENCE SCOPE**
Not: HTTP real · persistence proven · restart · G-REAL · G-ACTIVATION · LIVE cutover · mechanical D1 absence · Q12 product

## 14. Verdict
**H4-D01 — OA-ONLY STRATEGY DECIDED**
**CAND-ABS-A — CONCRETE INSTANCE PROPOSED**
**H4 INSTANCE — PENDING MORRIS DESIGNATION**
**O-01 OA-ONLY — CODE/DET COVERAGE VERIFIED** (prior)
**D1 HARDENING — NO NEW WORK**
**G-REAL — NOT GRANTED**
**G-ACTIVATION — NOT GRANTED**
**D1 REMOVAL — NOT AUTHORIZED**
**AKG-M5 — OPEN**
**RUNTIME V3 — NON ADOPTED**

END_OF_PACK
