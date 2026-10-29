# ChatGPT Critical LIVE Readiness Review Pack — FULL
## AKG-M5-L3S2-LIVE-E2E-01 · CYCLE 9 — QA / VALIDATION · LIVE E2E ENTRY QUALIFICATION

**UTC authored:** 2026-10-29T07:56:19Z
**Profile:** STANDARD DEPTH · CRITICAL GATES REAL / AUTHORITY / SAFETY
**Mode:** BOUNDED READ-ONLY PREFLIGHT · NO PRODUCT DELIVERY · NO REAL LAUNCH
**Lot:** AKG-M5-L3S2-LIVE-E2E-01
**Capability:** EP-S2-08 post-Evidence Nora–Pilote continuity (LIVE E2E entry)
**Verdict (Cursor local):** PREFLIGHT COMPLETE — REAL READINESS BLOCKED

**Permanent non-claims:** EP-S2-08 PARTIAL · EP-S2-05 NOT PROVEN · L3 GLOBAL OPEN · REAL NOT PROVEN · G-REAL NOT GRANTED · L4 NOT AUTHORIZED · Runtime v3 NON ADOPTED

---

## 1. UTC
2026-10-29T07:56:19Z

## 2. GO Morris scope
MORRIS GO 2026-10-29 — AKG-M5 LIVE E2E PREFLIGHT.

**Consumed:** Git Truth · Convergence Pre-check · architecture investigation · local env diagnostics · safe non-executing runtime preflight · LIVE config inspection · auth/session readiness · browser/toolchain checks · Product flow mapping · REAL safety assessment · isolation/effects/rollback plan · proposed LIVE test contract · FULL pack · L3 handoff.

**NOT consumed / NOT authorized:** Cursor REAL invocation · enabling REAL globally · weakening REAL gates · ExecutionAttempt · mutating Studio mission · Product source/E2E harness changes · architecture pivot · Product push/PR/merge · branch deletion · runtime v3 · L4 · G-ACTIVATION · OA-exclusive · **G-REAL** (requires distinct bounded Morris GO).

## 3. Git Truth Check

| Check | Value |
|---|---|
| Investigation WT (read) | `/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3s2-r24-postmerge-capitalization` · tree = origin/main |
| Historical WT (preserved dirty) | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-ep-s2-08-proof-01` · `feat/akg-m5-ep-s2-08-proof-01` @ `485ec3cb370dca46691e3432255a0033b3502a4d` |
| origin/main | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| Expected main | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| MAIN_OK | YES |
| Index (historical) | CLEAN staged |
| Historical dirty | documentary + pack leftovers from Cycle 14+15 — **preserved, not reset/cleaned** |

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
 M projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json

```

Worktrees (excerpt):
```
/Users/morris/Projects/sfia-workspace                                                   980064c0 [qa/sfia-studio-p6-global-integrated-product-qa]
/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023                              7f51e461 [sfia/review-handoff]
/Users/morris/Projects/sfia-workspace-akg-m5-l1-a09-audit-port-decoupling               0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d0-decision-readiness                   0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-local-oa-cutover                     d98b3930 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-readiness                            1a380f22 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-q0-readonly                             94c7a30d (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5a-product-architecture-convergence          0cb05b75 (detached HEAD)
```

No Product code mutation this cycle.

## 4. Source routing
Process Cycle 9 / validation checklist · Build Doctrine · Roadmap · M5 trajectory requalification · Product Completion C1 · v3 framing 30/32/34/35/37 · PRR README + 02/03/04/06/07/08/09.
R23: actual implementation prevails.
R24: no Product semantic change authorized.
SFIA v2.6 = external process · Studio v3 = target NON ADOPTED.

## 5. Convergence Pre-check

| Item | Status |
|---|---|
| Capability | EP-S2-08 Pilote/Nora post-Evidence continuity |
| Current | **PARTIAL** |
| Prior Product | PR #623 / #626 MERGED |
| Prior documentary | PR #625 / #627 MERGED · main `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| Verified ceiling | DETERMINISTIC AT TESTED SCOPE |
| Missing for LIVE exit | Browser `/studio` E2E · LIVE Nora/Pilote UX · Cursor REAL · physical effects/Evidence · EP-S2-08 exit coverage |
| EP-S2-05 | NOT PROVEN (distinct) |
| L3 GLOBAL | OPEN |
| G-REAL / L4 / v3 | NOT GRANTED / NOT AUTHORIZED / NON ADOPTED |
| This lot | LIVE E2E **entry qualification** only — ≠ EP-S2-08 PASS · ≠ L3 close |

## 6. Current Product architecture (R23 edges)

| Edge | Primary sources | Proof | Notes |
|---|---|---|---|
| A. `/studio` Project UX | `features/project-assistant/*` · TrajectorySurface · Next routes | COVERAGE VERIFIED | Product-first Project experience ON MAIN |
| B. Nora LIVE provider | `orchestrateTurn` / `mw6GovernedNoraTurn` · OPS1 conversation provider env | KNOWN GAP locally | Playwright defaults fake; LIVE needs provider+key in server env |
| C. Project/EC/Attempt | OA SQLite composition · prepareGenericExecutionContractDraft | BEHAVIOR PROVEN DET | Option B Project-first |
| D. Single Human Execute | `w2SingleHumanExecuteAction` · D-P6-SHE-01 | BEHAVIOR PROVEN DET | One Exécuter after inspectable PREPARE; HD internal |
| E. REAL Cursor gateway | `composeStudioProductRealBoundary` · `StudioCursorRealLaunchGateway` | DOCUMENTED / COVERAGE VERIFIED | OFF-by-default; constructs only when `SFIA_STUDIO_CURSOR_REAL=1` |
| F. Authority / Confirmation | `checkExecutionAuthorization` · local Pilot authority env · Better Auth Pilote | COVERAGE VERIFIED | Local authority TEMPORARY WITH EXIT |
| G. FS/Git observation | managed repo root · RepositoryRead · worktree workspace | COVERAGE VERIFIED | StartExecution fail-closed if managed root absent |
| H. Evidence | GERM / generic_materialization DET | BEHAVIOR PROVEN DET | ≠ Mission Evidence (EP-S2-05) · ≠ REAL FS→Git→Review |
| I. RB / CE | W3-B / frozen RB path | BEHAVIOR PROVEN DET | |
| J. W3-C / F3 | `w3cPostEvidenceLoop` · RecommendNextGate | BEHAVIOR PROVEN DET | Browser remount E2E OPEN |
| K. LPS / rehydration | OA durable SQLite remount DET | BEHAVIOR PROVEN DET | Process remount ≠ browser E2E |
| L. Browser/process restart | Product start + Playwright | KNOWN GAP LIVE | Requires running server + auth session |
| M. Auth / storage / env | Better Auth · `.env.local` · `oa-product.sqlite` under `.sfia-exec` | KNOWN GAP this machine | `.env.local` ABSENT |

### SHE excerpt (authority UX)

`w2SingleHumanExecuteAction` — single Pilote « Exécuter » after inspectable PREPARE; records structural HD when deferred; Confirm+Authorize; does not invent a separate HD UI stage.

### REAL gateway excerpt (safety)

`studioCursorRealLaunchGateway.ts` launches with `--sandbox disabled --force` in agent mode when mission/FS mutation profiles apply. Contract strings are NOT technical no-write enforcement.

`boundedNonMutatingRealLaunchGate.ts` refuses pathless non-mutating ECs when REAL=1 with `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` — **must remain intact**.

## 7. Existing reusable components (harvest)

- Option A Project-only Delivery CKC eligibility (DET)
- Option 1 mutation declaration preserve through Generic PREPARE
- R-INSPECT-01 Pilote inspection disclosure
- R-HD-01 HD contradiction / provenance DET
- W3-C / GERM rehydrate DET (process remount)
- SHE single Exécuter path
- `preflight:runtime` fail-closed profile checker (no Cursor spawn)
- `e2e-auth-bootstrap.ts` human OAuth → local cookie (no credential automation)
- Playwright Chromium + Brave system browser available
- M4 REAL gateway classes (OFF until flag)

≠ automatic REAL readiness.

## 8. LIVE configuration inventory (redacted)

| Item | Status |
|---|---|
| Node / npm | v24.16.0 / 11.13.0 |
| `node_modules` (docs WT app) | PRESENT (incl. Playwright) |
| Playwright CLI | 1.61.1 |
| Chromium browser cache | PRESENT (`chromium-1228`) |
| Port 3020 | FREE (no listener) |
| `.env.example` | PRESENT (5 keys: Better Auth + GitHub OAuth allowlist) |
| `.env.local` | **ABSENT** |
| `.env` | ABSENT |
| `SFIA_STUDIO_CURSOR_REAL` (shell) | unset (OFF) |
| OpenAI / conversation provider (local) | NOT CONFIGURED (no `.env.local`) |
| Managed repo root | NOT CONFIGURED |
| Local Pilot authority | NOT CONFIGURED |
| Cursor.app bin | PRESENT `/Applications/Cursor.app/.../bin/cursor` · version 3.27.22 |
| `~/.local/bin/cursor` | PRESENT but reports « No Cursor IDE installation found » for non-agent mode |
| `cursor agent` help | Available via Cursor.app toolchain |
| Brave Browser | PRESENT (OAuth bootstrap candidate) |
| Chrome | ABSENT |
| Auth cookie (main workspace `.tmp-sfia-review/auth`) | PRESENT · age **~21.8 days** · Better Auth marker present · **revalidation required** |
| Auth cookie (docs / feat WTs) | ABSENT |

## 9. Readiness diagnostic outputs (redacted)

Command (docs WT app cwd):

```
npm run preflight:runtime
```

Observed (exit **1**):

```
STUDIO RUNTIME PROFILE NOT READY
- LOCAL_AUTHORITY_NOT_CONFIGURED
- MANAGED_REPO_ROOT_BASE_UNCONFIGURED
```

Interpretation: safe, non-executing check · **ZERO Cursor launch** · no Attempt · matches README contract. Cannot pass until `.env.local` Product profile is authored by Morris (out of scope for this GO to create).

Playwright default webServer env (source):

- forces `SFIA_STUDIO_CURSOR_REAL=""` and `OPS1_CURSOR_REAL=""`
- defaults `OPS1_CONVERSATION_PROVIDER=fake` unless `OPS1_ALLOW_LIVE_SMOKE=1`

Therefore: standard `npm run test:e2e` PASS ≠ LIVE Cursor ≠ LIVE Nora.

## 10. Playwright REALISM GAP (GAP A)

**Fact:** Canonical Playwright config disables REAL and fakes conversation provider.

**Future solution (candidate only — NOT implemented):**

1. Keep deterministic E2E harness unchanged for CI.
2. Add a **separate** LIVE campaign entry (env profile / npm script) that:
   - does **not** clear `SFIA_STUDIO_CURSOR_REAL` when Morris-authorized;
   - does not force fake OpenAI;
   - targets `reuseExistingServer` against a Product `npm start` with real `.env.local`;
   - uses authenticated session bootstrap;
   - remains opt-in and fail-closed without G-REAL + LIVE profile.
3. Never weaken DET CI defaults.

**Status:** DOCUMENTED gap · remediation requires distinct Morris GO if Product files must change.

## 11. Cursor REAL safety analysis (GAP B)

| Fact | Evidence |
|---|---|
| REAL OFF by default | `isStudioCursorRealEnabled` · README · compose returns undefined when flag ≠ 1 |
| Launch argv | `--sandbox disabled --force` (agent / ask modes) |
| Pathless non-mutating | Fail-closed `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` at Select/Start when REAL=1 |
| M4 RO reuse | Explicitly **not** aliased to Product generalist (would be new architecture) |
| Fake/DET | Remains admissible when REAL off |

**Candidate REAL mission shape (pending G-REAL + safety GO):** explicitly authorized **concrete-path bounded write** in an isolated managed test workspace — NOT pathless analysis — so Product gates can admit without claiming technical no-write sandbox.

**Do not:** change flags · remove guardrail · reuse M4 RO silently · launch now.

## 12. Auth / provider readiness (GAP C)

| Item | Status |
|---|---|
| Bootstrap script | `scripts/e2e-auth-bootstrap.ts` PRESENT · human GitHub OAuth · CDP to system browser |
| Session inject helper | `e2e/support/authenticatedStudioSession.ts` |
| Existing cookie | PRESENT in primary workspace auth dir · **age ~22 days** |
| Verdict | **BOOTSTRAP REQUIRED** (or interactive Morris OAuth) before LIVE UX claims |
| OpenAI LIVE | **NOT READY** — no local env key/provider |
| Better Auth config | Template only until `.env.local` |

No automated credential entry performed. No cookies printed.

## 13. Proposed bounded REAL mission (CANDIDATE — NOT CREATED / NOT LAUNCHED)

**Name:** LIVE-E2E-01 disposable Project write proof.

| Field | Plan |
|---|---|
| Project | New disposable Studio Project (create only under later LIVE GO) |
| Repository | Fresh git clone under configured `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` · unique dir `live-e2e-01-<utc>/` |
| Origin | Verify `origin` URL matches sealed identity; **no push** authorized |
| Base HEAD | Record SHA before launch |
| Allowlisted path | Single relative file e.g. `live-e2e/PROOF_01.txt` |
| Effect taxonomy | `filesystem.create` (or modify) only · no remote_git · no PR · no delete |
| Agent | Product generalist Cursor REAL (existing gateway) |
| Authorization | Authenticated Pilote + SHE Exécuter · HD/Confirm as Product requires |
| Confirmation | Existing Product Confirmation path only |
| Expected outcome | File exists with known marker string · FS observation / Evidence ingested |
| Evidence | Real Attempt Evidence / RB / CE honest Product Result |
| Nora | LIVE analysis of actual Evidence · post-Evidence recommendation |
| Restart | Browser reload + `npm start` process restart · same durable SQLite |
| Rollback | Delete disposable clone dir · Project remains as audit or archive per Morris |
| Cleanup owner | Morris / operator under post-LIVE GO |
| Cost/security | Isolated workspace only · no production branches · no secrets in file |
| STOP | Any scope widen · push attempt · path escape · REAL without G-REAL · auth failure |

**Anti-conflation:** `generic_materialization` Evidence ≠ Mission Evidence (EP-S2-05 remains NOT PROVEN).

If `.env.local` / managed root / G-REAL remain absent: **REAL TEST SCOPE NOT SAFELY EXECUTABLE** (authority + environment).

## 14. Proposed Pilote UAT journey (NOT EXECUTED)

1. Morris authenticates (bootstrap/OAuth).
2. Opens isolated Project in real `/studio`.
3. Requests Nora LIVE qualification.
4. Inspects EC (scope/effects/limits) via existing inspection UI.
5. Single **Exécuter** click (SHE).
6. Product HD/Confirm/Authorize transitions internally.
7. Gates admit or honestly refuse REAL.
8. If admitted (only after G-REAL): Cursor REAL bounded write.
9. Observe effects → Evidence/RB/CE.
10. Nora LIVE post-Evidence restitution.
11. Browser reload + process restart → resume without invented context.

Mapped to: `w2SingleHumanExecuteAction` · prepare/inspect · StartExecution · StudioCursorRealLaunchGateway · W3-C/F3 · OA SQLite remount.

## 15. Gate matrix G1–G13

| Gate | Status | Evidence | Missing | Severity | Min corrective | Owner | Next auth |
|---|---|---|---|---|---|---|---|
| G1 Git/architecture | **PASS** | main `2cc6368602197e18fe886c87c8ced0a1b434f5a2` · tree verified · R23 sources located | — | — | — | — | — |
| G2 Product runtime | **BLOCKED** | preflight FAIL: LOCAL_AUTHORITY + MANAGED_REPO | `.env.local` Product profile | P0 | Author `.env.local` from example + managed root + authority | Morris/operator | config GO if needed |
| G3 LIVE Nora | **BLOCKED** | no OpenAI/provider env | LIVE provider + key | P0 | Configure server-only OpenAI LIVE | Morris | secrets handling |
| G4 REAL Cursor gateway | **PASS** (code) / **BLOCKED** (arming) | gateway ON MAIN · flag OFF · bin via Cursor.app | G-REAL · bin path env optional | P0 auth / P1 ops | Distinct G-REAL; set `SFIA_CURSOR_BIN` if needed | Morris | **G-REAL** |
| G5 Auth/Pilote | **BLOCKED** | cookie ~22d old; Better Auth unset locally | Fresh session + `.env.local` OAuth | P0 | `npm run e2e:auth:bootstrap` after server up | Morris | interactive OAuth |
| G6 Isolated workspace | **BLOCKED** | managed root unconfigured | Absolute managed base + disposable clone | P0 | Create isolated dir under managed root | Morris | — |
| G7 Exact authorized effects | **PASS** (design) | candidate concrete-path write; pathless blocked | Execution under G-REAL | — | Keep candidate; do not launch | — | G-REAL |
| G8 Authority/SHE | **PASS** (code) / **BLOCKED** (local cfg) | SHE path ON MAIN; local authority unset | Local authority env for Pilot | P0 | Set TEMPORARY local authority per README | Morris | — |
| G9 Evidence/RB/CE | **PASS** (DET) | pipeline ON MAIN | LIVE instance proof | P1 | Run after REAL admit | — | LIVE GO |
| G10 Restart/recovery | **PASS** (DET) / **NOT CHECKED** (LIVE) | process remount DET | Browser+process LIVE | P1 | After runtime ready | — | LIVE GO |
| G11 Browser LIVE tooling | **PASS** | Playwright + Chromium + Brave | Running server | P1 | `npm start` after preflight PASS | — | — |
| G12 Security/reversibility | **PASS** (design) | disposable path; no push; guardrail intact | Operator discipline | — | Preserve BOUNDED_NON_MUTATING refuse | — | — |
| G13 G-REAL Morris authority | **BLOCKED** | explicitly NOT GRANTED | Distinct bounded G-REAL GO | P0 **authority** | Morris decision after Critical Review | Morris | **G-REAL** |

Note: G13 blocked is **authority**, not a Product defect.

## 16. P0 / P1 / P2 gaps

**P0**
1. `.env.local` absent → authority + managed root preflight FAIL.
2. OpenAI LIVE unconfigured.
3. Auth session revalidation / bootstrap required.
4. G-REAL not granted (expected).
5. No isolated managed workspace provisioned.

**P1**
1. Playwright LIVE campaign entry (separate from DET) not implemented.
2. Cursor bin PATH / `SFIA_CURSOR_BIN` hygiene for Product gateway.
3. LIVE browser remount + process restart not yet exercised.

**P2**
1. EP-S2-05 Mission Evidence (out of lot).
2. Late Evidence supersession policy (OPEN).
3. Optional harness polish after first LIVE.

## 17. Required remediation (qualified — NOT implemented)

1. Morris authors `app/.env.local` (Better Auth, GitHub OAuth, local Pilot authority, managed repo absolute path, OpenAI LIVE, CURSOR_REAL remains 0 until G-REAL).
2. `npm run preflight:runtime` → READY with `cursorReal: OFF`.
3. `npm run build && npm start` on :3020.
4. Auth bootstrap (Brave) → fresh cookie.
5. ChatGPT Critical LIVE Readiness Review of this pack.
6. If eligible: **bounded G-REAL GO** (concrete-path isolated write only).
7. Only then: LIVE-E2E execution + Pilote UAT.

## 18. Risks, debt, exits

| Risk | Debt | Exit |
|---|---|---|
| Accidental REAL without G-REAL | Flag discipline | Keep REAL=0; gate matrix |
| Pathless REAL overclaim | Guardrail | Keep BOUNDED_NON_MUTATING refuse |
| Stale auth false PASS | Cookie age | Bootstrap required |
| DET E2E mistaken for LIVE | Playwright defaults | Separate LIVE profile later |
| Managed root pointing at production repo | Isolation | Dedicated disposable clone only |

## 19. No-mutation verification

| Check | Result |
|---|---|
| Product source/test edits | NONE |
| `.env.local` created | NO |
| REAL flag set | NO (`SFIA_STUDIO_CURSOR_REAL` unset) |
| ExecutionAttempt created | NO |
| Cursor agent launched | NO |
| Playwright campaign run | NO |
| Product push/PR/merge | NO |
| Branch deletion | NO |
| Preflight only | YES (exit 1, expected) |

Historical dirty documentary files **preserved**.

## 20. Next Morris decisions

1. Independent ChatGPT Critical LIVE Readiness Review.
2. Author local Product `.env.local` (operator) — not a Product Delivery.
3. Auth bootstrap when server ready.
4. If review favorable **and** env READY: bounded **G-REAL** GO for LIVE-E2E-01 only.
5. Separate later: EP-S2-08 full exit / EP-S2-05 / L3 global — not implied.

## 21. Unique readiness verdict

**PREFLIGHT COMPLETE — REAL READINESS BLOCKED**

Blocked primarily by: missing `.env.local` Product profile (authority + managed root) · LIVE Nora provider unset · stale/unverified auth session · **G-REAL NOT GRANTED**.

Architecture and DET reusable components are sufficient to **design** a bounded LIVE campaign; they do **not** authorize or prove REAL execution.

MANDATORY NEXT:
ChatGPT Critical LIVE Readiness Review → then Morris bounded G-REAL GO only if eligible → then LIVE-E2E execution + Pilote UAT.
