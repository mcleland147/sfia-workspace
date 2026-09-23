# PRODUCT-JOURNEY-REAL-BEHAVIOR-REPROOF-01
# MANAGED REPO + TRUSTED HEAD ENVIRONMENT PREFLIGHT
# ZERO PRODUCT EXECUTE

## 1. Timestamp
2026-09-23T16:14:00+02:00 (Europe/Paris)

## 2. Morris GO
GO Morris managed-repo + trusted HEAD environment preflight —
PRODUCT-JOURNEY-REAL-BEHAVIOR-REPROOF-01 —
ZERO PRODUCT EXECUTE
— **CONSUMED**

Authorized: qualify main; session DB/managed env; create managed clone if absent; pin to qualified main; readiness + RO launch proofs; Review Pack; L3 handoff.
NOT authorized: Product Execute; EC/Attempt/mission; Cursor agent/auth probe; SFIA_STUDIO_CURSOR_REAL=1; DB mutation; project Git; REAL budget consumption.

## 3. Git Truth
- Repo: `mcleland147/sfia-workspace`
- `origin/main`: `66ffc0d2370d9ed7014348fd25994ce1cda3b3ad` — MATCH
- Local worktree stayed on source branch (another WT owns main)
- Tracked dirty: `.tmp-sfia-review/**` only
- `SFIA_STUDIO_CURSOR_REAL`: **unset**

## 4. Sources
cycle template / routing / doctrine / roadmap / C1 / framing 34+36;
`evaluateProductRealReadiness.ts`; `resolveTrustedProductLaunchContext.ts`;
`managedProjectRepositoryResolver.ts`; `managedRepoRootBaseConfig.ts`;
`studioGitWorktreeWorkspace.ts`; prior handoff `9c33556e`.

## 5. Qualified main SHA
`66ffc0d2370d9ed7014348fd25994ce1cda3b3ad`

## 6. DB path
`/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/pwr-dpc09-real-reproof-01/product/oa-product.sqlite`
Session: `SFIA_STUDIO_PRODUCT_DB_PATH` (not written to `.env` / profile / tracked file)

## 7. Project facts
- projectId: `prj:21e87219-9d46-483a-8206-722e25f2fb24`
- title: Batch Cookinb
- Decision: `dec:w2-trj:62b92385-7602-4d4f-b892-df9e2013c4a8`
- Option: `opt:trajectory:clarify-first`
- Legacy EC: `xct:w3a:dec:w2-trj:62b92385-7602-4d4f-b892-df9e2013c4a8`

## 8. Repository binding
- provider: github
- identity: `mcleland147/sfia-workspace`
- defaultBranch: main
- pathRoot: `projects/batch-cookinb`
- remoteUrl: `https://github.com/mcleland147/sfia-workspace.git`

## 9. Managed base
`/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/managed-repos`
Session: `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE`
Contained under `projects/sfia-studio/.sfia-exec/` (Git-ignored).

## 10. Managed target path
`/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/managed-repos/mcleland147__sfia-workspace`

## 11. Target existed before pass
**NO** (`exists_before=False`)

## 12. Clone command / creation
```
mkdir -p "$MANAGED_BASE"
git clone --no-checkout "$REPO_ROOT" "$MANAGED_REPO"
# initial --no-local attempt failed mid-pin; completed THIS-PASS authorized creation via:
git -C "$MANAGED_REPO" fetch "$REPO_ROOT" 66ffc0d2370d9ed7014348fd25994ce1cda3b3ad
git -C "$MANAGED_REPO" checkout --detach 66ffc0d2370d9ed7014348fd25994ce1cda3b3ad
```
No branch created. No commit. No push. No GitHub network fetch from managed clone.

## 13. Managed clone origin metadata
```
origin  /Users/morris/Projects/sfia-workspace (fetch)
origin  /Users/morris/Projects/sfia-workspace (push)
```

## 14. Managed HEAD
`66ffc0d2370d9ed7014348fd25994ce1cda3b3ad`

## 15. Managed clean status
`git status --porcelain` = **empty** (clean)

## 16. Tree equality
Both trees: `400d608e2a0be9b182925c46cd204a24cb1e0034` — **EQUAL**

## 17. pathRoot
`projects/batch-cookinb`

## 18. pathRoot physical state
**ABSENT** (acceptable) — not created

## 19. pathRoot containment
`pathRootContainmentValid = true`
No `PROJECT_PATH_ROOT_ABSENT` blocker

## 20. Resolver proof
`ManagedProjectRepositoryResolver.resolveLocalRepoRoot({identity}, managedBase)`
→ exact managed target path

## 21. Trusted HEAD proof
`resolveBoundedReadOnlyBaseHeadSha({ startDir: managedRepo })`
→ ok=true, sha=`66ffc0d2370d9ed7014348fd25994ce1cda3b3ad`

## 22. Cursor binary
Resolved: `/Applications/Cursor.app/Contents/Resources/app/bin/cursor`
`--version`: **3.21.16** (arm64)
executable=true

## 23. Prior auth evidence reference
Prior environment preflight (2026-09-23): Cursor CLI auth metadata PASS.
Not re-probed this pass.

## 24. Auth calls this pass
**0** (no `--list-models`, no `agent`, no provider contact)

## 25. Actual evaluateProductRealReadiness output
```json
{
  "readyForDeterministicPreReal": true,
  "readyForProductRealExecute": false,
  "productDb": {
    "explicitConfigPresent": true,
    "exists": true,
    "accessible": true,
    "expectedProjectFound": true
  },
  "managedRepository": {
    "managedRepoRootBaseConfigured": true,
    "projectBindingIdentity": "mcleland147/sfia-workspace",
    "resolvedManagedRepoPath": ".../managed-repos/mcleland147__sfia-workspace",
    "repoExists": true,
    "pathRoot": "projects/batch-cookinb",
    "pathRootExists": false,
    "pathRootContainmentValid": true,
    "trustedBaseHeadSha": "66ffc0d2370d9ed7014348fd25994ce1cda3b3ad"
  },
  "contractReadiness": {
    "launchContextResolvable": true,
    "noProcessCwdFallback": true,
    "baseHeadShaFullSha": true
  },
  "cursorBinary": { "executable": true },
  "auth": { "state": "EXTERNAL_PREFLIGHT_REQUIRED", "proven": false },
  "blockers": []
}
```
No fake bin / fake HEAD / fake resolver injections.

## 26. Trusted launch context proof (safe RO)
Full `resolveTrustedProductLaunchContext` via RuntimeOaStack skipped to avoid Product migration/write risk.
RO parity using same modules + durable Project binding (sqlite3 RO) + `launchContextAsContractInputs`:
```json
{
  "ok": true,
  "baseHeadSha": "66ffc0d2370d9ed7014348fd25994ce1cda3b3ad",
  "repositoryBindingIdentity": "mcleland147/sfia-workspace",
  "defaultBranch": "main",
  "pathRoot": "projects/batch-cookinb",
  "managedRepoRoot": ".../mcleland147__sfia-workspace"
}
```
DB SHA unchanged before/after: `b04695cf6b2fb8baf745f74e24d5923f00dd1543eb6ecab840125d3a356c195c`

## 27. Readiness matrix A–S
| Dim | Result |
|-----|--------|
| A qualified main | PASS |
| B Product DB explicit | PASS |
| C expected Project | PASS |
| D durable repository binding | PASS |
| E managed root configured | PASS |
| F managed clone resolver | PASS |
| G managed clone clean | PASS |
| H qualified main commit exists | PASS |
| I managed clone HEAD exact main | PASS |
| J pathRoot containment valid | PASS |
| K pathRoot physical | **ABSENT-ACCEPTABLE** |
| L trusted launch HEAD | PASS |
| M Cursor binary | PASS |
| N prior external auth evidence | **VALID-FOR-CAMPAIGN** |
| O deterministic pre-REAL readiness | PASS |
| P Product Execute | **0** |
| Q Product Attempt | **0** |
| R mission spawn | **0** |
| S legacy attempts | **0** |

## 28. Product Execute count
0

## 29. Attempt count
0

## 30. Mission spawn count
0

## 31. Managed clone commit / push counts
commits created: **0** · pushes: **0** · clone creation count: **1**

## 32. Legacy fingerprint
`ca296bb5609fb21edc19b75b64013a9020fef3097a81ee116a149c7ede20ccac` — MATCH

## 33. Legacy attempts
**0**

## 34. Product binding immutability
binding unchanged; pathRoot unchanged; Decision unchanged; DB SHA unchanged; no successor EC created this pass.

## 35. ZERO PRODUCT EXECUTE
Confirmed.

## 36. REAL budget
1 spawn / 0 retry — **UNUSED**

## 37. Product Journey state
**PAUSED**

## 38. Runtime v3 state
**NON ADOPTED**

## 39. Remaining blocker
None for managed-repo / trusted-HEAD / deterministic pre-REAL.
`readyForProductRealExecute=false` remains correct (auth not inferred).
Campaign auth evidence is prior external proof only.

## 40. Morris decision required next
**GO Morris REAL Product Journey behavioral reproof — 1 spawn / 0 retry**
(distinct decision; not auto-launched)

## 41. Verdict
**PRODUCT-JOURNEY-REAL-BEHAVIOR-REPROOF-01
MANAGED REPO + TRUSTED HEAD ENVIRONMENT PREFLIGHT PASS —
DETERMINISTIC PRE-REAL READINESS PASS —
QUALIFIED MAIN PINNED —
ZERO PRODUCT EXECUTE —
REAL BUDGET 1/0 UNUSED —
READY FOR MORRIS PRODUCT REAL GO**
