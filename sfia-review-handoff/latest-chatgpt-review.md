# PRODUCT-JOURNEY-AUTHENTICATED-PREFLIGHT-02 — Review Pack (FULL)

## A. Timestamp
2026-09-15T19:32:43Z

## B. Git truth
- Repository: mcleland147/sfia-workspace
- `origin/main` = `3166fbc141dbd387f67b6d1d0e0424c881b97df6` (MATCH)
- PR #489 Product commit: `aaef685403c7d671b87b0438994ed89d5e5f40fb` (ancestor of main)
- Pre-merge main: `bceb79a814c2d1e468c8e05dfdb461104375c3fa`
- Post-merge CI: 35010958295 SUCCESS (prior handoff)

## C. Morris GO consumed
AUTHORIZED: Git/dogfood alignment; DB backup; fake cognition; REAL OFF; runtime start; normal auth observation; READ-ONLY Product open; evidence; Review Handoff.

NOT performed: auth bypass/fake session; Product mutation; Nora send; Recovery/Reformuler/Instruire clicks; HD/PREPARE/Inspect/Confirm/Authorize/Execute; Cursor/docs_write REAL; OpenAI LIVE; source modification; DB repair.

## D. SFIA qualification
- Cycle 9 — QA / validation — RUN — Critical
- Capabilities: V3-F02 / V3-F04 under observation; V3-F11/F12 NOT exercised

## E. Convergence qualification
- Lot A/B + deterministic Nora parity: INTEGRATED on main
- Gap closed this preflight: authenticated Product UI projection (previous NO_SESSION)
- Lot D/E: NOT AUTHORIZED; runtime v3 NON ADOPTED

## F. Post-PR489 source/handoff verification
- Prior handoff commit `2d591f09…` / blob `205fa3e9…` — post-merge READY FOR NEXT MORRIS GATE
- Dogfood aligned HEAD = `3166fbc141dbd387f67b6d1d0e0424c881b97df6`

## G. Historical dogfood worktree pre-state
- Path: `/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d`
- HEAD before: `bceb79a814c2d1e468c8e05dfdb461104375c3fa` (detached)
- Dirt: `.tmp-sfia-review/*` only (review material) — tracked Product source clean
- Old runtime PID 71100 (dogfood next-server) stopped cleanly

## H. Product DB identification and backup
- Symlink: `…/preflight-35b1371d/projects/sfia-studio/.sfia-exec/product/oa-product.sqlite`
  → `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/product/oa-product.sqlite`
- Type: SQLite Product DB
- Size: 3067904 bytes
- WAL/SHM: absent at backup time
- Backup: `/tmp/sfia-studio-authenticated-reproof-preflight-3166fbc-20260915T192832Z.sqlite`
- Backup SHA-256: `4e15aadd12cf3cf2caa7ee83ea4430201419399db045e86d37bc29ab802ec939`
- Method: `sqlite3 .backup`

## I. Product semantic BEFORE snapshot
- Project: Gestion de tâches / `prj:ae9bd0de-e24d-474f-880d-ff5ea56dbaf6`
- LPS: `lps:66c018f8cc277708` / **v16**
- Active cycle: `cyc:trj-0a9c5104b7b6a3debe95eb8d`
- Binding durable: github / mcleland147/sfia-workspace / https://github.com/mcleland147/sfia-workspace.git / main / `projects/sfia-studio/.sandbox`
- Pending Decision Subject ACTIVE: `prop:f2:4a90b644-3eb7-43b8-9e83-b140cfeb9a9c` — **no proposalSnapshot** (unreconstructible)
- Resolved pending: `prop:f2:195b23b4-…`
- Recoverable Proposal IDs via snapshot: **NONE** for active pending
- Active PresentedOptionSets: `epi:set-w2-1efef3790988`, `epi:set-w2-565470646757`
- HumanDecisions: 5 historical (latest accepted for resolved prop 195b23b4; DecisionBasis present on that HD)
- ExecutionContract: 0
- Attempts for project: 0
- Target artifact: ABSENT
- Material divergence vs freeze: **NO** (matches failed-campaign legacy pending-without-snapshot)

## J. Exact code alignment to main
- `git checkout --detach 3166fbc141dbd387f67b6d1d0e0424c881b97df6`
- HEAD after: `3166fbc141dbd387f67b6d1d0e0424c881b97df6`

## K. PR489 marker verification
- `isF2IntentAnalysisContext` YES
- `matchNaturalArtifactMaterialization` YES
- `buildArtifactMaterializationAnalysis` YES
- natural matcher only inside `if (isF2IntentAnalysisContext(messages))` YES
- provider + application-path tests present YES

## L. Cognition Fake/Real audit
- Launch: `OPS1_CONVERSATION_PROVIDER=fake`
- Confirmed in next-server environ
- `SFIA_STUDIO_CURSOR_REAL` absent
- OpenAI LIVE not selected (fake forced); OPENAI_API_KEY may exist in `.env.local` but unused under fake
- `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1` present (PREPARE/Inspect dogfood authority only; Execute not authorized this cycle)

## M. Authentication implementation discovery
- Better Auth + GitHub social sign-in
- Login client: `authClient.signIn.social({ provider: "github" })`
- Guard: NO_SESSION → redirect `/login`
- Base URL: `BETTER_AUTH_URL=http://localhost:3020`

## N. Required auth env NAMES + presence only
| Name | Presence |
|---|---|
| BETTER_AUTH_SECRET | PRESENT_REDACTED |
| BETTER_AUTH_URL | PRESENT |
| GITHUB_CLIENT_ID | PRESENT |
| GITHUB_CLIENT_SECRET | PRESENT_REDACTED |
| SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS | PRESENT |
Required auth config present: **YES**

## O. Execution REAL env audit
- SFIA_STUDIO_CURSOR_REAL: absent/OFF
- docs_write REAL / GCEC REAL opt-ins: absent
- Cognition: fake

## P. Runtime launch
- Command: `OPS1_CONVERSATION_PROVIDER=fake npm run dev` (= `next dev --port 3020`)
- Worktree: dogfood `…/projects/sfia-studio/app`
- HEAD: `3166fbc1…`
- PID: `44788`
- Port: 3020
- Cognition: fake
- Auth: Better Auth / GitHub
- Health: Ready; protected routes require session

## Q. Authentication method
**Existing authenticated session found** on `localhost:3020` (avatar « P », Déconnexion available on /synthese).
Note: `127.0.0.1` requests still redirect NO_SESSION (cookie host scoping) — Product URL used `http://localhost:3020/...`.
Morris interactive re-login: **NOT required** this cycle.
No credentials typed by Cursor. No OAuth approved by Cursor.

## R. Authentication outcome
- Authenticated Product workspace loaded: **YES**
- Fake/bypass session: **NO**
- New GitHub OAuth contact this cycle: **NO** (session reuse)

## S. Authenticated screenshot/evidence path
`/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d/.tmp-sfia-review/sfia-authenticated-preflight-02-product-projection.png`

## T. Durable Product truth
(See section I — unchanged after preflight; see Z)

## U. Authenticated UI projection
Observed READ-ONLY:
- Project title: Gestion de tâches
- Authenticated avatar present
- Recovery surface: Reprendre / Repartir
- LPS: État enregistré · v16
- Cycle: En cours · active (cyc:framing · Light in historique)
- Trajectory: décidée courante v3 referenced in historique
- Nora panel present; send disabled until input
- Decision Subject: « Reformulez votre demande » + CTA **Reformuler avec Nora** (CASE A fail-closed reformulation)
- No « Instruire les options »
- Repository binding region: message **« Aucun binding configuré — renseignez le dépôt lié. »**; provider field `github`; identity/remoteUrl/defaultBranch/pathRoot **empty** in form
- No acme/widget
- No PREPARE button
- No Execute button (only explanatory text mentioning Exécuter)
- artifact_missing / reserves visible in finalization conditions
- Additional CTAs: Définir le livrable avec Nora; Enregistrer le binding; Vérifier les conditions de finalisation; Clôturer l'étape…

## V. UI ↔ durable truth coherence
| Fact | Durable | UI | Coherent? |
|---|---|---|---|
| Project identity | Gestion de tâches | Gestion de tâches | YES |
| LPS v16 | YES | YES | YES |
| Active cycle | cyc:trj-0a9c5104… | active cycle shown | YES |
| Pending Proposal without snapshot | prop:f2:4a90b644… | Reformuler guidance | YES (CASE A) |
| No Instruire for unreconstructible | — | Instruire absent | YES |
| RepositoryBinding | full mcleland147/…/.sandbox | **Aucun binding configuré** + empty fields | **NO** |
| No PREPARE/Execute at this stage | EC=0 | no PREPARE/Execute buttons | YES |

**Blocking incoherence:** durable RepositoryBinding exists and is non-sample truth, but authenticated UI presents unbound empty binding and invites Save.

## W. Exact sole primary next-action family
Durable CASE A expectation: **Reformuler avec Nora**.

UI also presents Recovery primary family (**Reprendre l'état enregistré** / Repartir) as dominant first-viewport CTA, plus lifecycle « Définir le livrable avec Nora ».

⇒ Competing next-action families visible → ownership not uniquely Pilot-safe for Manual Action 1 without ChatGPT arbitration.

## X. Negative CTA checks
| Check | Result |
|---|---|
| no acme/widget | PASS |
| no Instruire while unreconstructible pending owns subject | PASS |
| no sandbox operation selector as Proposal execute path | PASS (not observed) |
| no PREPARE button | PASS |
| no Execute button | PASS |
| target artifact not written by preflight | PASS (still absent) |
| binding UI honest vs durable | **FAIL** |

## Y. Product semantic AFTER snapshot
Identical to BEFORE on compared Product-business keys (title, binding, cycle, LPS, pending, option sets, HD, EC, updatedAt).

## Z. Before/after semantic comparison
SEMANTIC_MUTATION = **False**

## AA. Product mutation = ZERO
**YES**

## AB. OpenAI LIVE = ZERO
**YES**

## AC. Cursor/docs_write REAL = ZERO
**YES**

## AD. Authentication external boundary used?
This cycle: **NO** new OAuth (existing local session reused). Session identity boundary is Better Auth/GitHub historically.

## AE. Source diff = ZERO
Tracked Product source: **none**. Only `.tmp-sfia-review` review material.

## AF. Recommended Manual Action 1 for ChatGPT only
**Do NOT authorize Manual Action 1 yet.**

ChatGPT should requalify because authenticated UI presents RepositoryBinding as unbound while durable state holds `mcleland147/sfia-workspace` + `.sandbox`, and Recovery vs Reformuler compete as next-action families.

Candidate reformulation once coherence is restored (NOT executed now): sole family **Reformuler avec Nora** for pending `prop:f2:4a90b644-…` without snapshot.

## AG. Remaining reserves
- Binding UI vs durable incoherence (blocker)
- Competing Recovery vs Reformuler CTA ownership
- Authenticated session host note: use `localhost` not `127.0.0.1`
- Campaign still must stop at Inspect; Gate D not authorized

## AH. Verdict
**MANUAL REPROOF BLOCKED — AUTHENTICATED PRODUCT PROJECTION INCOHERENT**

Supporting:
- MAIN 3166fbc aligned; PR489 markers present; fake cognition; REAL OFF
- Normal authenticated session observed; Product workspace readable
- Durable CASE A pending-without-snapshot + Reformuler surface present
- Binding UI contradicts durable RepositoryBinding
- ZERO Product semantic mutation; ZERO OpenAI/Cursor execution REAL
