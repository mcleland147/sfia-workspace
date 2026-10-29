# ChatGPT Critical Review Pack — FULL
## AKG-M5 L3-S2 LIVE-E2E-01 · CYCLE 9 — ISOLATED MANAGED ROOT PREPARATION

**UTC authored:** 2026-10-29T09:47:21Z
**Morris GO consumed:** AKG-M5 / LIVE-E2E-01 ISOLATED MANAGED ROOT PREPARATION
**Verdict (Cursor local):** ISOLATED MANAGED BASE READY — CHECKOUT / G-REAL PENDING

**Anti-claims:** G-REAL NOT GRANTED · Cursor REAL NOT EXECUTED · No ExecutionAttempt · No clone/fetch/push · No EP-S2-08 promotion · EP-S2-05 NOT PROVEN · L3 GLOBAL OPEN · Runtime v3 NON ADOPTED · No secrets disclosed

---

## 1. UTC
2026-10-29T09:47:21Z

## 2. Morris GO scope
Authorized: create dedicated local managed-root BASE; path-safety; qualify checkout policy (without manufacturing fixture); update only `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` on target `.env.local`; non-launching preflight; FULL pack + L3 handoff.

NOT authorized: Cursor REAL launch · ExecutionAttempt · mission · remote clone/fetch/push · Product/test edits · G-REAL · EP/L3/v3 promotion · historical WT deletion · REAL gate bypass.

## 3. Git Truth
| Field | Value |
|---|---|
| Repo / remote | `mcleland147/sfia-workspace` · `https://github.com/mcleland147/sfia-workspace.git` |
| Target WT | `/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3s2-r24-postmerge-capitalization` |
| Branch | `docs/akg-m5-l3s2-r24-postmerge-capitalization` |
| HEAD | `cf940d84ea9e78602131fe97f75cad0c5abddac9` |
| origin/main (local + ls-remote) | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| Expected main | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| MAIN_OK | YES |
| HEAD vs main | HEAD is pre-merge tip of #627; main = merge commit only (`1 0` ahead on main). Runtime prep sources **ALIGN** with `origin/main`. |
| Porcelain | only `.tmp-sfia-review/chatgpt-review.md` dirty (review pack) |
| Staged | empty |
| Historical WTs | preserved (no reset/stash/clean/checkout switch) |

**G1:** PASS (main identity match; runtime source alignment verified for managed-root prep files).

## 4. Source routing
| Source | Status |
|---|---|
| `prompts/templates/sfia-cycle-execution-template.md` | ROUTED |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | ROUTED |
| `method/sfia-fast-track/checklists/sfia-validation-checklist.md` | ROUTED (v2.6 fallback) |
| Cycle 9 CKC dedicated | **ABSENT** — candidate/absence reported; use validation checklist + contract |
| Build Doctrine / Living Roadmap / M5 journey / Product Completion C1 | ROUTED (prior cycle + this prep) |
| Studio v3 framing 30–37 | Target doctrine, **NON ADOPTED** |
| PRR README + vols 02/03/04/06/07/08/09 | Applicable |
| R23 | Code/primary evidence prevail |
| R24 | Local configuration only — **NO SEMANTIC IMPACT** |

## 5. Convergence Pre-check
ACTIVE: AKG-M5 / L3-S2 · EP-S2-08 PARTIAL · Prior Product #623/#626 · Docs #625/#627 on main · Local REAL config DONE · Prior handoff tip `36af5c15…` blob `2bdccfa3…` · Previous verdict PARTIAL isolation blocked · This cycle removes managed-base isolation blocker only.

## 6. R23 implementation mapping
| Concern | Code |
|---|---|
| Env base parse | `managedRepoRootBaseConfig.ts` → absolute or undefined |
| Identity → dirname | `sanitizeManagedRepoIdentity` → `managedRootBase / sanitized` |
| Existence ≠ fidelity | `resolveLocalRepoRoot` checks `.git`; protected Git uses `resolveIdentityMatchedLocalRepo` (origin match) |
| ZERO network resolver | no clone/fetch in resolver |
| Preflight | base absolute + exists; does **not** construct REAL boundary in READY |
| Pathless non-mutating REAL | `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` refuse (gateway `--sandbox disabled --force`) |

## 7. Base directory before / after
| Path | Before | After |
|---|---|---|
| `/Users/morris/Projects/.sfia-exec` | ABSENT | CREATED mode `0o700` owner morris |
| `…/live-e2e-01` | ABSENT | CREATED mode `0o700` |
| `…/managed-repos` (AUTHORIZED BASE) | ABSENT | CREATED mode `0o700` · children=0 · not symlink |
| Projects parent mode | `0o755` | **unchanged** |
| Historical HQA managed-repos | intact (`mcleland147__capaction-greenfield` still present) | **untouched** |

## 8. Path safety checks
| Check | Result |
|---|---|
| Exact authorized target | `/Users/morris/Projects/.sfia-exec/live-e2e-01/managed-repos` |
| Symlink redirection | REJECTED / none |
| Ownership | morris (uid 501) |
| Collision / overwrite | none — created empty |
| Inside unrelated tracked git tree | NO (Projects / `.sfia-exec` not a git repo) |
| Production repo modified | NO |
| Fake `.git` / fixture clone | NOT created |

## 9. Directory permissions
Created dirs: **0700**. Unrelated parent (`/Users/morris/Projects` 0755) not modified.

## 10. Target env status (redacted)
| Item | Status |
|---|---|
| File | `projects/sfia-studio/app/.env.local` |
| Mode | **0600** (preserved) |
| Symlink | NO |
| Gitignored / untracked | YES |
| Changed keys | **only** `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` |
| New value | authorized LIVE-E2E base (absolute, single line) |
| Old value | historical P6 HQA managed-repos (no longer active) |
| Content fp16 | before `556aac830378be17` → after `6ad0cc4160ca520a` |
| Credentials / Auth / Pilot / OpenAI | preserved (opaque equality) |
| Staged/committed | NO |

## 11. Configured REAL mode
| Flag | Value |
|---|---|
| `SFIA_STUDIO_CURSOR_REAL` | **`1`** (READY) |
| `SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY` | ABSENT / OFF |
| Mutual exclusion | PASS |

## 12. Runtime preflight output
```
STUDIO RUNTIME PROFILE READY
- authority: PASS
- managedRoot: /Users/morris/Projects/.sfia-exec/live-e2e-01/managed-repos
- managedClone: /Users/morris/Projects/.sfia-exec/live-e2e-01/managed-repos
- cursorReal: READY
- deterministic⊕REAL: PASS
- realBoundaryConstructed: false
```
Exit **0**. Interpretation: configuration readiness only. `managedClone` echo equals base because preflight treats base existence — **not** identity checkout proof. `realBoundaryConstructed=false` intentional.

## 13. Checkout identity qualification
| Item | Status |
|---|---|
| Managed BASE | **READY** (empty dedicated dir) |
| Identity-specific checkout under base | **ABSENT** |
| Approved disposable identity | **NOT YET QUALIFIED** |
| Historical HQA greenfield reuse | REJECTED for this mission |
| Production repo as disposable target | REJECTED |
| Unidentified remote clone | NOT AUTHORIZED this cycle |

**Minimal next Morris decision before checkout creation:**
1. Approve exact disposable repository identity (`owner/repo`) that is **not** production Studio workspace and **not** historical HQA data reuse without separate GO.
2. Authorize the **local clone** operation into `…/managed-repos/<sanitizedIdentity>` (network clone authority — currently NOT granted).
3. Confirm expected origin URL fidelity policy and whether remotes may remain empty vs required matching origin for protected Git.

## 14. Origin fidelity qualification
**NOT PROVEN** — no checkout exists under the new base; no origin metadata to verify. Protected Git path will fail-closed until identity-matched checkout exists.

## 15. Effective isolation assessment
| Layer | Assessment |
|---|---|
| Process user | morris / euid 501 |
| Base FS perms | 0700 under `.sfia-exec` |
| OS sandbox for Cursor REAL | **NOT PROVEN** — generalist uses `--sandbox disabled --force` |
| Network restriction | **NOT PROVEN** |
| Agent leave-root risk | **OPEN** — folder base ≠ confinement |
| Unapproved writes | possible without OS isolation |
| Rollback / audit | FS + git of checkout only after clone exists; no agent audit this cycle |
| G12 SECURITY CONFINEMENT | **NOT PROVEN** |

Bounded options for Morris arbitration: (A) G-REAL only for concrete-path missions inside disposable checkout + accept residual OS risk; (B) require enforceable sandbox/read-only capacity before any REAL; (C) stay on DET/Fake until confinement GO. Do **not** rebind M4 read-only to Product generalist silently. Pathless non-mutating REAL remains refused (`BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE`).

## 16. Security gaps
- Folder isolation ≠ production-safe sandbox.
- No confinement proof without agent (and agent launch forbidden).
- Checkout identity / origin fidelity still open.
- Auth/Nora connectivity still unproven (config-only).
- Gateway flags unchanged (preserved).

## 17. Gate matrix G1–G13
| Gate | Status | Evidence | Missing | Owner | Next | Morris |
|---|---|---|---|---|---|---|
| G1 Git Truth / source align | PASS | main=`2cc63686…`; runtime files ALIGN | — | Cursor | — | — |
| G2 Dedicated managed base | PASS | created empty 0700 | — | Cursor | — | GO consumed |
| G3 Configured managed-root path | PASS | env → new base; HQA inactive | — | Cursor | — | — |
| G4 Runtime preflight | PASS | exit 0 READY | — | Cursor | — | — |
| G5 Cursor REAL configured | PASS | `=1` | — | Cursor | — | prior GO |
| G6 Deterministic OFF | PASS | ABSENT | — | Cursor | — | — |
| G7 Checkout identity readiness | BLOCKED | base empty | approved identity + clone GO | Morris | decide identity | **REQUIRED** |
| G8 Git origin fidelity | NOT PROVEN | no checkout | origin-matched clone | Morris | after clone | REQUIRED |
| G9 Historical workspace preserved | PASS | HQA + dirty WTs intact | — | Cursor | — | — |
| G10 Physical confinement | NOT PROVEN | 0700 only; no OS sandbox | confinement GO / accept residual risk | Morris | arbitrate A/B/C | **REQUIRED** |
| G11 No unauthorized effects | PASS | no agent/clone/product mutation | — | Cursor | — | — |
| G12 No secret exposure | PASS | redacted pack; 0600; untracked | — | Cursor | — | — |
| G13 Future bounded G-REAL | NOT PROVEN / PENDING | prerequisites incomplete | checkout + confinement + G-REAL text | Morris | after G7/G8/G10 | **REQUIRED** |

## 18. No unauthorized mutation proof
| Action | Result |
|---|---|
| Cursor agent | NOT PERFORMED |
| ExecutionAttempt | NOT CREATED |
| Product/test source | unchanged |
| Remote clone/fetch/push/PR/merge | NONE |
| Historical HQA | untouched |
| Fixture repo under new base | NONE (children=0) |
| realBoundaryConstructed | false |

## 19. R24 — NO SEMANTIC IMPACT
Local directory + `.env.local` managed-root path only. No Product semantic / architecture change. Studio v3 NON ADOPTED.

## 20. Remaining readiness dependencies
1. Morris: approve disposable checkout identity.
2. Morris: authorize network clone into dedicated base (or supply pre-approved local materialization method).
3. Verify origin fidelity after checkout.
4. Auth bootstrap / OAuth when server up.
5. Optional Nora LIVE connectivity smoke.
6. Morris confinement arbitration (G10/G12).
7. Bounded **G-REAL** text for first disposable concrete-path REAL launch.

## 21. Proposed next Morris decision
**Decide disposable repository identity + authorize clone into the READY managed base**, then (separately) confinement posture + bounded G-REAL. Do not treat preflight READY or REAL=1 as launch authority.

## 22. Unique verdict

**ISOLATED MANAGED BASE READY — CHECKOUT / G-REAL PENDING**

Managed BASE ready and configured · preflight PASS · REAL=1 · DET OFF · checkout identity BLOCKED · origin fidelity NOT PROVEN · confinement NOT PROVEN · G-REAL NOT GRANTED · agent NOT launched.
