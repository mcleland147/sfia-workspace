# PRODUCT-JOURNEY-REAL-BEHAVIOR-REPROOF-01
# REAL ENVIRONMENT PREFLIGHT
# ZERO PRODUCT EXECUTE

## 1. Timestamp
2026-09-23T14:10:00+02:00 (Europe/Paris)

## 2. Git Truth
- Workspace: `/Users/morris/Projects/sfia-workspace`
- Current worktree branch (historical): `fix/sfia-studio-product-journey-real-behavior-readiness-01`
- Authoritative **origin/main**: `2543a5bb9f62a23863ec4e74928ac6fc1a6b542a` — **MATCH**
- `SFIA_STUDIO_CURSOR_REAL`: unset
- No project source mutation; no Product Execute

## 3. Morris GO
GO Morris Product Journey REAL environment preflight — ZERO PRODUCT EXECUTE
— **CONSUMED**

## 4. SAME MACRO / NO MICRO-CYCLE
PRODUCT-JOURNEY-REAL-BEHAVIOR-REPROOF-01 — QA / validation — CRITICAL.
No Product Execute. No mission spawn. No successor EC.

## 5. Sources
- cycle template / routing / doctrine / roadmap / cadrage / framing 34+36 (from main)
- `evaluateProductRealReadiness.ts`, managedRepoRootBaseConfig, ManagedProjectRepositoryResolver
- `resolveStudioCursorBinPath` (studioCursorRealLaunchGateway)
- Historical R11 capitalization (list-models / auth forensic)
- Latest handoff post-merge `6f6d447d`

## 6. Qualified main
`2543a5bb9f62a23863ec4e74928ac6fc1a6b542a` — PASS

## 7. DB candidate
`projects/sfia-studio/.sfia-exec/pwr-dpc09-real-reproof-01/product/oa-product.sqlite`
Absolute:
`/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/pwr-dpc09-real-reproof-01/product/oa-product.sqlite`
Exists / readable / SQLite RO open — PASS

## 8. Explicit DB path
Session-only:
`export SFIA_STUDIO_PRODUCT_DB_PATH=<absolute campaign DB>`
Not written to `.env` / profile / tracked files.
`resolveProductSqlitePath()` selected exactly this path — PASS

## 9. Expected Project found
`prj:21e87219-9d46-483a-8206-722e25f2fb24` — PASS
title = **Batch Cookinb**
status = active

## 10. Durable Project status
active; activeCycleInstance present (`cyc:trj-36aa59ca7db349999c3298e5` active)

## 11. Repository binding identity
Durable (from `payload_json.repositoryBinding`):
- provider: github
- identity: **mcleland147/sfia-workspace**
- remoteUrl: https://github.com/mcleland147/sfia-workspace.git
- defaultBranch: main
- pathRoot: **projects/batch-cookinb**

Decision:
- `dec:w2-trj:62b92385-7602-4d4f-b892-df9e2013c4a8` accepted
- selectedOptionId = `opt:trajectory:clarify-first`

## 12. pathRoot
Durable: `projects/batch-cookinb`

## 13. Git main pathRoot existence
`git cat-file -e origin/main:projects/batch-cookinb`
→ **ABSENT**
Top-level under `projects/` on main: campus360, chantiers360-v2, interv360, sfia-studio, sfia-task-manager, task-tracker.
**Blocker: PROJECT_PATH_ROOT_ABSENT_ON_QUALIFIED_MAIN**

No mkdir / no clone to manufacture the path / no DB mutation.

## 14. Managed root env
`SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` was **unset** at start.
Not configured for this campaign (honest — no valid pathRoot to host).

## 15. Managed resolver result
`evaluateProductRealReadiness` →
`managedRepoRootBaseConfigured=false`
`resolvedManagedRepoPath=null`
`repoExists=false`
blocker: **MANAGED_REPO_ROOT_BASE_UNCONFIGURED**

## 16. Managed clone state
**NOT CREATED** — pathRoot absent on qualified main makes a clone non-honest for this binding.
BLOCKED (by design)

## 17. Managed pathRoot state
`pathRootExists=false` (evaluator); authoritative Git main confirms ABSENT.
BLOCKED

## 18. Trusted HEAD
Not resolved — managed repo absent / not created.
BLOCKED

## 19. evaluateProductRealReadiness complete result
```
readyForDeterministicPreReal: false
readyForProductRealExecute: false
productDb:
  explicitConfigPresent: true
  resolvedPath: <campaign DB absolute>
  exists: true
  accessible: true
  expectedProjectFound: true
  isDefaultPath: false
managedRepository:
  managedRepoRootBaseConfigured: false
  projectBindingIdentity: mcleland147/sfia-workspace
  pathRoot: projects/batch-cookinb
  pathRootExists: false
  trustedBaseHeadSha: null
contractReadiness:
  launchContextResolvable: false
  noProcessCwdFallback: true
  baseHeadShaFullSha: false
cursorBinary:
  configuredOverride: false
  resolvedExecutablePathPresent: true
  executable: true
  resolvedPath: /Applications/Cursor.app/Contents/Resources/app/bin/cursor
auth:
  state: EXTERNAL_PREFLIGHT_REQUIRED
  proven: false
blockers: [MANAGED_REPO_ROOT_BASE_UNCONFIGURED]
```
Note: evaluator correctly keeps `auth.proven=false` (Product code never authenticates).
External CLI auth preflight is recorded separately below (not Product auth.proven).

## 20. Cursor resolver
Canonical `resolveStudioCursorBinPath` / `resolveCursorBinPath`:
candidates: `SFIA_CURSOR_BIN` (unset) → Cursor.app bin → `~/.local/bin/cursor-agent`

## 21. Cursor binary / version
- Path: `/Applications/Cursor.app/Contents/Resources/app/bin/cursor`
- Executable: yes
- Version: **3.21.16** (8ae78e8eee1e63479c7e0504b664bc0a80c68000, arm64)

## 22. Auth probe command class
Top-level `cursor --list-models` is **NOT** a known option (Electron warning; not valid auth forensic).
Supported historical forensic (R11 / agent CLI help): `cursor agent --list-models`
Also observed: `cursor agent status` → Logged in (read-only status).

## 23. Auth probe exit/status
- `cursor agent --list-models` → **exit 0**, model catalogue returned (sanitized; no tokens)
- Classification: **PROVEN FOR CLI SESSION AT PREFLIGHT TIME** (provider metadata call)
- Does **NOT** prove Product mission success / Product REAL boundary / agent capability E2E

## 24. Credentials redaction
Review Pack contains no tokens/secrets/session material.
SENSITIVE_LEAK scan on list-models output: no

## 25. Product Execute count
**0**

## 26. Product Attempt count
**0** (legacy EC attempts remain 0; total attempts table not increased by this pass)

## 27. Product mission spawn count
**0** (no `agent` mission prompt / workspace / Product Start)

## 28. Auth preflight CLI process count
Recorded:
1. `cursor --version` (local metadata)
2. `cursor --help` / `cursor agent --help` (local help)
3. `cursor --list-models` (invalid top-level; Electron warning)
4. `cursor agent status` (auth status)
5. `cursor agent --list-models` (auth metadata catalogue)
Provider-contacting auth probes ≈ **2** (status + list-models).
**≠ Product mission spawn.**

## 29. Legacy EC fingerprint
`ca296bb5609fb21edc19b75b64013a9020fef3097a81ee116a149c7ede20ccac` — MATCH
status validated

## 30. Legacy attempt count
**0** — MATCH (unchanged; DB not mutated)

## 31. Readiness matrix A–M

| Dim | Item | Result |
|-----|------|--------|
| A | qualified main | **PASS** |
| B | explicit Product DB | **PASS** |
| C | expected Project in DB | **PASS** |
| D | durable repository identity | **PASS** (`mcleland147/sfia-workspace`) |
| E | durable pathRoot exists on qualified repo | **FAIL** (`projects/batch-cookinb` ABSENT on main) |
| F | managed repo resolver | **BLOCKED** (base unconfigured; clone not honest to create) |
| G | managed pathRoot | **BLOCKED** |
| H | trusted full HEAD | **BLOCKED** |
| I | Cursor binary | **PASS** |
| J | Cursor auth metadata probe | **PASS** (CLI session list-models) |
| K | Product Execute count | **0** PASS |
| L | Product mission spawn count | **0** PASS |
| M | legacy EC attempts | **0** PASS |

## 32. Blockers
1. **PROJECT_PATH_ROOT_ABSENT_ON_QUALIFIED_MAIN** — durable `pathRoot=projects/batch-cookinb` does not exist on `origin/main @ 2543a5bb…`
2. **MANAGED_REPO_ROOT_BASE_UNCONFIGURED** — not configured; clone intentionally not created while pathRoot is invalid on authoritative source

## 33. Decisions required from Morris
Do **NOT** auto-choose. Options to decide:
- **A.** Durable Project binding/pathRoot is stale/invalid → requalify binding
- **B.** Expected workspace should point elsewhere (different pathRoot)
- **C.** Another authoritative managed source must be qualified (historical campaign)
- **D.** Future REAL should use a **fresh Project** rather than historical Batch Cookinb

No silent Project/DB mutation performed.

## 34. REAL budget
1 spawn / 0 retry — **UNUSED**

## 35. Product Journey state
**PAUSED**

## 36. Runtime v3 state
**NON ADOPTED**

## 37. Final verdict
**STOP — PRODUCT JOURNEY REAL ENVIRONMENT NOT READY —**
**ZERO PRODUCT EXECUTE —**
**PRODUCT REAL BUDGET 1/0 UNUSED**

### Language clarification
ZERO PRODUCT REAL EXECUTION
+ AUTH PREFLIGHT CLI PROCESS EXECUTED (status / list-models)

### Forbidden claims
- REAL PROVEN
- READY FOR REAL EXECUTION
- Product Journey COMPLETE
- runtime v3 ADOPTED
- READY FOR MORRIS PRODUCT REAL GO (blocked by pathRoot/managed)
