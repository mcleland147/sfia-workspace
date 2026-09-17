# SFIA Studio — PRODUCT-DOCS-WRITE-REAL-PATH-COMPLETION-01 — PRE-MERGE CRITICAL REVIEW PACK

**Timestamp (UTC):** 2026-09-17T10:53:34Z
**Macro:** PRODUCT-DOCS-WRITE-REAL-PATH-COMPLETION-01
**Phase:** Delivery / pre-merge (ZERO REAL)
**Runtime v3:** NON ADOPTED
**Delivery Cursor REAL launches:** 0

---

## A. Morris GO (exact)

GO MORRIS — PRODUCT DOCS_WRITE REAL EXACT-PATH + COMPLETION CLOSURE — ONE MACRO DELIVERY + INTEGRATION + FRESH AUTHENTICATED REPROOF09 REAL — MAX 1 CURSOR DOCS_WRITE REAL SPAWN — NO RETRY — NO MICRO-CYCLES

Close in ONE macro lot the two FAIL REAL gaps post-PR #497:

1. **EXACT PATH CORRECTNESS** — sealed repo-relative target must not be reinterpreted as `.sandbox/...` at worktree root; pathAllowlist/exact target checks stay strong.
2. **REAL PROCESS COMPLETION INGESTION** — after Cursor REAL spawn, use existing observe/awaitCompletion → verifyWorkspaceFileEffects → RecordExecutionResult/Failure → Evidence/ReviewBundle pipeline; persist; restart without relaunch.

Conditional merge only after: bounded scope, Required Gate green on exact head, Critical pre-merge PASS, handoff remote-verified. Fresh REAL only after post-merge green. Max 1 Cursor REAL spawn. No retry.

## B. Macro qualification

| Field | Value |
|--------|--------|
| Project | SFIA Studio |
| Macro | PRODUCT-DOCS-WRITE-REAL-PATH-COMPLETION-01 |
| Trajectory | Product Proof / governed Product Journey |
| Phase A | Cycle 8 Delivery / EVOL / Critical |
| Phase B | Cycle 9 QA REAL / EVOL / Critical (post Critical PASS + merge) |
| Product Completion | CLOSED / COMPLETE |
| Runtime v3 | NON ADOPTED |
| Capability served | EC → Cursor docs_write REAL → exact verified effect → terminal Attempt → Evidence/RB → restart/no-relaunch |
| Incoming state | managed repo proven; local origin proven (#497); Cursor REAL spawn proven; exact path FAIL; terminal Attempt NOT PROVEN; REAL Evidence/RB NOT PROVEN |

## C. Sources read

PROCESS / CONVERGENCE / COMPLETION / V3 framing as listed in GO §3; forensic handoff tip `90581f3d` (FAIL REAL post-#497); product code listed in GO §3; discovery via gateway / StartExecution / settler / Product Execute callers.

## D. Initial Git Truth

| Item | Value |
|------|--------|
| Repo | mcleland147/sfia-workspace |
| origin/main (start) | `04bcfecbf0f40a7ba818b0ca074e7ea3722e635c` |
| Tree | `e94a3c09ccf9fa3293dfe0b3821456fee2527c79` |
| Handoff branch tip (start) | `90581f3d29154a2e48e1c339ecfd0515b9585319` |
| Delivery branch | `delivery/sfia-studio-docs-write-real-path-completion` |
| Delivery HEAD | `742339e56e79fba5217b5859894a72e32ac5d8ca` |
| Delivery tree | `b1ec95bc1896b5a72bcb778abcb0c2dd2292855e` |
| PR | https://github.com/mcleland147/sfia-workspace/pull/498 |
| Working tree for Delivery | clean of forensic/DB/sandbox artefacts in commit |

## E. Root cause — PATH

FAIL REAL sealed target: `projects/sfia-studio/.sandbox/gestion-de-taches.md`
Cursor wrote: `.sandbox/gestion-de-taches.md` at monorepo worktree root.

Studio did **not** strip `projects/sfia-studio/`. Gateway interpolated `spec.targetPath` **verbatim as relative** while `--workspace` / `cwd` = prepared monorepo worktree root. Cursor reinterpreted the relative path (nested-package / editor-root confusion). Fake port already resolved `worktreeRoot + relative`; REAL instruction did not.

## F. Root cause — COMPLETION

`StartExecution` correctly returns on spawn-ACK (`invoke` ≠ close). Existing settler `completeBoundedDocsWriteLaunch` → `completeBoundedReadOnlyLaunch` already supports `awaitIfPending`. Product callers (`finishBoundedDocsWriteAttempt`, `governedExecuteRecordResult`) **omitted** `awaitIfPending: true`, so after REAL spawn (`exitCode: null`) settler returned `running` → no `RecordExecutionResult` → no Evidence/RB. REAL harness already passed `awaitIfPending: true`. FakeDocsWrite sets `exitCode: 0` at launch, masking the Product gap in Fake journeys.

## G. Architecture reused (no parallel engines)

- `StudioCursorRealLaunchGateway` + `NodeCursorProcessRunner` invoke/observe/awaitCompletion
- `completeBoundedDocsWriteLaunch` / `completeBoundedReadOnlyLaunch`
- `verifyWorkspaceFileEffects` (unchanged contract; still repo-relative + worktree)
- `RecordExecutionResult` / `RecordExecutionFailure`
- `ingestDocsWriteArtifactEvidence` / ReviewBundle pipeline
- Gate D / launch safety journal frontier
- `#497` local-origin prepare/resume (unchanged)

## H. Modifications exact

1. **NEW** `resolveSealedDocsWriteWorktreePaths.ts` — fail-closed sealed rel → absolute under worktree; allowlist absolutization; reject `..`, escape, empty allowlist, target outside allowlist.
2. **`studioCursorRealLaunchGateway.ts`** — docs_write instruction embeds absolute EXACT AUTHORIZED FILE + AUTHORIZED ROOT(S); keeps sealed relative for disclosure; reject before spawn on path resolve failure.
3. **`executeConfirmedBoundedDocsWriteContract.ts`** — `awaitIfPending: true`.
4. **`governedExecuteAuthorizedContract.ts`** — `awaitIfPending: true`.
5. **`index.ts`** — export helper.
6. Tests: sealed paths unit + verify wrong-path; gateway absolute instruction + negatives; Product await wiring.

**NOT changed:** StartExecution spawn-ACK; NodeCursorProcessRunner; verifyWorkspaceFileEffects logic; schema/persistence; Gate D; origin remote gate; RO Product pending path (T-R3-PENDING preserved).

## I. Modified content / full diff (exploitable)

### I.1 Production — resolveSealedDocsWriteWorktreePaths.ts (FULL)

```typescript
/**
 * Resolve sealed repo-relative docsWrite paths under a prepared worktree root.
 * Canonical EC/docsWriteSpec paths stay repo-relative; absolute forms are for
 * Cursor external instruction only (and fail-closed confinement checks).
 */
import path from "node:path";

export type ResolveSealedDocsWriteWorktreePathsResult =
  | {
      ok: true;
      sealedTargetPath: string;
      absoluteTargetPath: string;
      sealedPathAllowlist: readonly string[];
      absolutePathAllowlist: readonly string[];
    }
  | { ok: false; reason: string };

function normalizeSealedRel(p: string): string | null {
  const n = p.replace(/\\/g, "/").replace(/^\.\//, "").replace(/\/+$/, "").trim();
  if (!n || n.startsWith("/") || n.split("/").includes("..")) {
    return null;
  }
  return n;
}

function resolveUnderWorktree(
  worktreeRoot: string,
  sealedRel: string,
): { abs: string; root: string } | null {
  const root = path.resolve(worktreeRoot);
  const abs = path.resolve(root, ...sealedRel.split("/"));
  if (abs !== root && !abs.startsWith(root + path.sep)) {
    return null;
  }
  return { abs, root };
}

export function resolveSealedDocsWriteWorktreePaths(input: {
  worktreeRoot: string;
  targetPath: string;
  pathAllowlist: readonly string[];
}): ResolveSealedDocsWriteWorktreePathsResult {
  const sealedTargetPath = normalizeSealedRel(input.targetPath);
  if (!sealedTargetPath) {
    return { ok: false, reason: "target_path_invalid" };
  }

  const targetResolved = resolveUnderWorktree(
    input.worktreeRoot,
    sealedTargetPath,
  );
  if (!targetResolved) {
    return { ok: false, reason: "target_path_escape" };
  }

  if (!input.pathAllowlist.length) {
    return { ok: false, reason: "path_allowlist_empty" };
  }

  const sealedPathAllowlist: string[] = [];
  const absolutePathAllowlist: string[] = [];
  for (const entry of input.pathAllowlist) {
    const sealed = normalizeSealedRel(entry);
    if (!sealed) {
      return { ok: false, reason: "path_allowlist_invalid" };
    }
    const allowResolved = resolveUnderWorktree(input.worktreeRoot, sealed);
    if (!allowResolved) {
      return { ok: false, reason: "path_allowlist_escape" };
    }
    sealedPathAllowlist.push(sealed);
    absolutePathAllowlist.push(allowResolved.abs);
  }

  const underAllowlist = sealedPathAllowlist.some(
    (root) =>
      sealedTargetPath === root || sealedTargetPath.startsWith(`${root}/`),
  );
  if (!underAllowlist) {
    return { ok: false, reason: "target_outside_allowlist" };
  }

  return {
    ok: true,
    sealedTargetPath,
    absoluteTargetPath: targetResolved.abs,
    sealedPathAllowlist,
    absolutePathAllowlist,
  };
}
```

### I.2 Production — studioCursorRealLaunchGateway.ts (docs_write instruction block)

```typescript
      const resolvedPaths = resolveSealedDocsWriteWorktreePaths({
        worktreeRoot: workspacePath,
        targetPath: spec.targetPath,
        pathAllowlist: spec.pathAllowlist,
      });
      if (!resolvedPaths.ok) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: resolvedPaths.reason,
          realProcessInvoked: false,
          detailCode: "REAL_WORKSPACE_INVALID",
        };
      }
      instruction = [
        "TÂCHE UNIQUE — bounded docs-write déterministe (GCEC).",
        `EXACT AUTHORIZED FILE (absolute path inside prepared worktree — modify exactly this file and no other): ${resolvedPaths.absoluteTargetPath}`,
        `Canonical sealed targetPath (repo-relative, do not reinterpret): ${resolvedPaths.sealedTargetPath}`,
        `AUTHORIZED ROOT(S) (absolute under prepared worktree): ${resolvedPaths.absolutePathAllowlist.join(", ")}`,
        `Canonical sealed pathAllowlist (repo-relative): ${resolvedPaths.sealedPathAllowlist.join(", ")}`,
        "Do not reinterpret relative paths against a nested subproject or editor root.",
        // ... remainder unchanged (repository, brief, scope, no Shell, etc.)
      ].join("\n");
```

### I.3 Production — Product awaitIfPending

`executeConfirmedBoundedDocsWriteContract.ts` / `governedExecuteAuthorizedContract.ts`:

```typescript
      awaitIfPending: true,
```

### I.4 Full `git diff origin/main...HEAD` summary

8 files, +366 / −2. Complete unified diff captured at Delivery HEAD `742339e5` (458 lines). Production-only delta is the helper + gateway instruction + two `awaitIfPending` lines + export.

## J. Tests Delivery (ZERO REAL)

| Suite | Result |
|-------|--------|
| docsWriteSealedWorktreePaths.d0 | 6 PASS |
| gcecCursorFullCapabilityParity.d0 | 16 PASS (incl. absolute instruction + reject wrong-path + traversal) |
| docsWriteProductAwaitCompletionWiring.d0 | 1 PASS |
| gcecCont01WorkspaceResume (incl. FRESH-LOCAL-ORIGIN) | 16 PASS |
| Related execution-attempt + Product Journey + liveManagedRepo | 534 PASS |
| Full Vitest | **4206 passed / 137 skipped / 0 failed** (377 files passed / 17 skipped) |
| typecheck | PASS |
| lint | PASS |
| build | PASS |

## K. Branch / commit / push

- Branch: `delivery/sfia-studio-docs-write-real-path-completion`
- Commit: `742339e56e79fba5217b5859894a72e32ac5d8ca`
- Subject: `fix(sfia-studio): close docs-write REAL path and completion`
- Pushed to origin
- No Review Pack / REAL artefacts in commit

## L. PR

- PR **#498** — https://github.com/mcleland147/sfia-workspace/pull/498
- Base: `04bcfecb` (main)
- Head: `742339e5`

## M. CI premerge

| Check | Conclusion |
|-------|------------|
| Detect SFIA Studio changes | SUCCESS |
| Build and validate SFIA Studio | SUCCESS (5m59s) |
| **SFIA Studio Required Gate** | **SUCCESS** |
| Workflow run | `35212829546` — conclusion **success** |
| Exact head | `742339e56e79fba5217b5859894a72e32ac5d8ca` |

## N. Critical premerge verdict — REQUESTED

**STOP — awaiting ChatGPT Critical pre-merge verdict = PASS before merge.**

All other §15 gates except ChatGPT Critical are green:

- exact PR head `742339e5` identified
- base main still `04bcfecb`
- diff bounded (8 files / +366 −2)
- local typecheck/lint/build/full Vitest PASS
- Required Gate PASS on exact head
- Full Review Pack complete (this document)
- Delivery REAL counter = 0

Agent self-check (non-substituting for ChatGPT):

- Scope strictly path instruction + Product await wiring + tests
- No schema/persistence/authority/Gate D redesign
- Path guards strengthened (pre-spawn reject), not weakened
- Sealed EC relative paths preserved for verify/Evidence
- RO async pending path preserved
- Delivery REAL = 0

## O–AD. Merge / REAL / Evidence / restart

**NOT EXECUTED YET** — gated on ChatGPT Critical PASS, then conditional Morris merge + post-merge green + fresh REAL.

## AA. Claims allowed (Delivery phase only)

- Delivery integrated to PR #498 at head `742339e5`
- Root causes identified and addressed in code under existing architecture
- Local validation green; ZERO REAL Delivery
- Origin-remote gate not reintroduced

## AB. Reservations / debt

- Absolute path in Cursor instruction reduces but does not mathematically guarantee agent compliance; independent `verifyWorkspaceFileEffects` remains the PASS criterion.
- Observation registry remains process-local (pre-existing); Product await on same Execute call closes the post-#497 Product gap.
- Fresh REAL still required for PASS REAL claim.

## AC. Runtime v3

NON ADOPTED.

## AD. Final Delivery verdict (pre-merge)

**STOP — PRODUCT DOCS_WRITE PATH/COMPLETION DELIVERY INTEGRATED / REQUIRED GATE GREEN — AWAITING CHATGPT CRITICAL PRE-MERGE PASS BEFORE MERGE** — PR #498 head `742339e56e79fba5217b5859894a72e32ac5d8ca` — ZERO REAL — RUNTIME V3 NON ADOPTED

NO SECOND REAL SPAWN. NO RETRY. RUNTIME V3 NON ADOPTED.
