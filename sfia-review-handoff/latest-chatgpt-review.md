# Review Pack FULL — VALIDATE + COMMIT / PUSH / PR — M4 PRE-REPROOF BOUNDING — NO REAL EXECUTION

## A. Métadonnées

| Champ | Valeur |
| --- | --- |
| Timestamp | 2026-08-14 12:55:50 CEST (+0200, Europe/Paris) |
| GO consumed | GO MORRIS — VALIDATE + COMMIT / PUSH / PR — M4 PRE-REPROOF BOUNDING — NO REAL EXECUTION |
| Repository | mcleland147/sfia-workspace |
| Cycle | 8 — Delivery / implémentation |
| Profil | Critical |
| Typologie | EVOL |
| CKC fallback | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` candidate — no execution authority |
| Incoming handoff | `3c56cb29367268231c1db26b4de7af5cfe0ef499` (content completeness repaired) |
| Bounding review ChatGPT | PASS WITH RESERVES — CANDIDATE TECHNICALLY COHERENT |
| Branch | `delivery/sfia-studio-m4-pre-reproof-bounding` |
| Project commit | `8900cd06be195b2dd9fa154a7153608fdde6f9a3` |
| Parent | `3575c8863d8a13b610dbfde96a33426a620b2c56` |
| Draft PR | [#346](https://github.com/mcleland147/sfia-workspace/pull/346) |

## B. Convergence Pre-check

| Item | Value |
| --- | --- |
| Capacités | V3-F05 + V3-F11 + V3-F12 (+ V3-F14/F15) |
| Milestone | M4 |
| Gateway argv/instruction | ADAPT — reviewed candidate now committed |
| timeout 60000 | KEEP / unresolved |
| AgentCapability / StartExecution / Gate D / ProcessRunner / journal | KEEP |
| M4 exit proof | NOT SATISFIED |
| M4 | NOT CLOSED |
| M5 | NOT AUTHORIZED |
| runtime v3 | NON ADOPTED |
| Next capability | M4 GOVERNED REAL COMPLETION PROOF — NOT executed |

## C. Local Git Truth initiale

```
branch = delivery/sfia-studio-m4-pre-reproof-bounding
HEAD = 3575c8863d8a13b610dbfde96a33426a620b2c56
origin/main = 3575c8863d8a13b610dbfde96a33426a620b2c56
origin/sfia/review-handoff = 3c56cb29367268231c1db26b4de7af5cfe0ef499
candidate remote before push = ABSENT
tracked modified EXACTLY 2 files (unstaged)
staged = empty
untracked = .tmp-sfia-review/**
SFIA_STUDIO_CURSOR_REAL = <unset>
OPS1_CURSOR_REAL = <unset>
```

## D. Candidate identity vs handoff 3c56cb29…

Compared working-tree diffs to handoff I.1 / I.2 (index/header-normalized for gateway partial presentation; R1 full-diff exact).

| File | Result |
| --- | --- |
| studioCursorRealLaunchGateway.ts | VERIFIED — hunk identical to handoff I.1 |
| m4RealOffCorrectionR1.test.ts | VERIFIED — full diff identical to handoff I.2 |

No recomposition / reformat / improvement. **candidate identity = VERIFIED**

## E. Diffs complets des deux fichiers (commit `8900cd06…`)

### E.1 gateway

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index bb4adc7..f46b4ef 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -173,8 +173,20 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
     }

     // Fixed argv shape — executable is separate; no user-controlled shell.
+    // --mode ask: local CLI help documents ask as read-only Q&A (no edits).
+    // Shell under ask remains unresolved by help alone; future REAL must observe.
     const instruction = [
-      "TÂCHE UNIQUE — lecture seule bornée.",
+      "TÂCHE UNIQUE — preuve read-only déterministe.",
+      "Lire uniquement le fichier README.md à la racine du workspace.",
+      "Ne modifier aucun fichier.",
+      "Ne créer aucun fichier.",
+      "Ne lancer aucune commande Shell.",
+      "Ne faire aucune recherche récursive, Glob ou Grep.",
+      "Ne consulter aucun autre fichier.",
+      "Si README.md peut être lu, répondre exactement :",
+      "M4_READ_ONLY_OK",
+      "Si README.md ne peut pas être lu, répondre exactement :",
+      "M4_READ_ONLY_UNAVAILABLE",
       `target=${request.target ?? ""}`,
       `action=${request.action ?? ""}`,
       `scope=${request.scope ?? ""}`,
@@ -185,6 +197,8 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
     const argv = [
       "agent",
       "--print",
+      "--mode",
+      "ask",
       "--workspace",
       workspacePath,
       "--trust",
```

### E.2 R1 test

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts
index e3a63f1..cb9b4bc 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts
@@ -13,6 +13,7 @@ import {
   NODE_CURSOR_STDERR_CAP_BYTES,
   NODE_CURSOR_STDOUT_CAP_BYTES,
   NodeCursorProcessRunner,
+  SFIA_STUDIO_CURSOR_REAL_FLAG,
   StudioCursorRealLaunchGateway,
 } from "@/lib/oa/execution-attempt";
 import { FakeProcessRunner } from "./support/fakeProcessRunner";
@@ -213,4 +214,83 @@ describe("M4 REAL-OFF correction R1", () => {
     }
     expect(runner.calls).toHaveLength(0);
   });
+
+  it("R1-10 pre-reproof bounding: argv --mode ask once + deterministic README instruction; timeout 60000", async () => {
+    // Gateway-local enablement via flag constant — does not set process.env.
+    // FakeProcessRunner only; no OS Cursor spawn.
+    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
+    const workspacePath = "/tmp/fake-exec-root/wt-pre-reproof";
+    const runner = new FakeProcessRunner({ processRef: "proc:sim:r1-10" });
+    const workspace = new FakeRealExecutionWorkspacePort({ workspacePath });
+    const gateway = new StudioCursorRealLaunchGateway({
+      processRunner: runner,
+      workspacePort: workspace,
+      env: {
+        ...process.env,
+        [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
+      },
+      resolveCursorBin: () => "/tmp/fake-cursor-bin",
+      // Omit defaultTimeoutMs — product default must remain 60_000.
+    });
+
+    const result = await gateway.launch({
+      attemptId: "xat:r1-10-pre-reproof",
+      executionContractId: "xct:pre-reproof",
+      executionContractVersion: 1,
+      semanticFingerprint: "fp:pre-reproof-bounding",
+      selectedAgentRef: "agt:m4.cursor.bounded_readonly",
+      adapterRef: gateway.gatewayId,
+      correlationId: "cor:r1-10",
+      baseHeadSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
+      action: "cursor.read_only.inspect",
+      target: "workspace.isolated.read",
+      scope: "studio.m4.real_off",
+    });
+
+    expect(result.outcome).toBe("ack");
+    expect(runner.calls).toHaveLength(1);
+    expect(workspace.prepares).toHaveLength(1);
+    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
+
+    const call = runner.calls[0];
+    expect(call.timeoutMs).toBe(60_000);
+    expect(call.executable).toBe("/tmp/fake-cursor-bin");
+    expect(call.cwd).toBe(workspacePath);
+
+    const argv = [...call.argv];
+    expect(argv.filter((a) => a === "--mode")).toHaveLength(1);
+    expect(argv.filter((a) => a === "ask")).toHaveLength(1);
+    const modeIdx = argv.indexOf("--mode");
+    expect(argv[modeIdx + 1]).toBe("ask");
+
+    expect(argv).toContain("--print");
+    expect(argv).toContain("--workspace");
+    expect(argv).toContain("--trust");
+    expect(argv).toContain("--sandbox");
+    expect(argv[argv.indexOf("--sandbox") + 1]).toBe("enabled");
+    expect(argv[0]).toBe("agent");
+    expect(argv[argv.indexOf("--workspace") + 1]).toBe(workspacePath);
+
+    const instruction = argv[argv.length - 1];
+    expect(typeof instruction).toBe("string");
+    expect(instruction).toContain("README.md");
+    expect(instruction).toContain("M4_READ_ONLY_OK");
+    expect(instruction).toContain("M4_READ_ONLY_UNAVAILABLE");
+    expect(instruction).toMatch(/Ne lancer aucune commande Shell/i);
+    expect(instruction).toMatch(/Glob/i);
+    expect(instruction).toMatch(/Grep/i);
+    expect(instruction).toMatch(/Ne consulter aucun autre fichier/i);
+    expect(instruction).toMatch(/Ne modifier aucun fichier/i);
+    expect(instruction).toMatch(/git remote/i);
+    expect(instruction).toMatch(/commit/i);
+    expect(instruction).toMatch(/push/i);
+    expect(instruction).toMatch(/PR/i);
+    expect(instruction).toMatch(/merge/i);
+    expect(instruction).toContain("target=workspace.isolated.read");
+    expect(instruction).toContain("action=cursor.read_only.inspect");
+    expect(instruction).toContain("scope=studio.m4.real_off");
+    expect(instruction).toContain("fingerprint=fp:pre-reproof-bounding");
+    expect(instruction).not.toMatch(/lecture seule bornée/);
+    expect(instruction).not.toMatch(/inspect(?:ion)?\s+(?:globale|libre|workspace)/i);
+  });
 });
```

## F. Validations

Working directory: `projects/sfia-studio/app`. Parent REAL flags unset before/after.

| Check | Result |
| --- | --- |
| `git diff --check` | PASS |
| `npx vitest run …/m4RealOffCorrectionR1.test.ts` | **10 PASS** |
| `npx vitest run __tests__/oa/execution-attempt` | **10 files / 131 PASS** |
| `npm run typecheck` (`tsc --noEmit`) | **PASS** |
| `npm run lint` (`next lint`) | **PASS** — “No ESLint warnings or errors”; tooling note: next lint deprecation warning only (not a candidate error) |

## G. Staging / commit / push

Staged EXACTLY:

```
M projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts
M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
```

Staged candidate matched handoff. Commit message:

```
fix(sfia-studio): bound m4 real completion reproof
```

| Field | Value |
| --- | --- |
| commit | `8900cd06be195b2dd9fa154a7153608fdde6f9a3` |
| parent | `3575c8863d8a13b610dbfde96a33426a620b2c56` |
| files | EXACTLY 2 |
| stats | +95 / −1 |
| amend | none |
| hook mutation | none observed (working tree clean except `.tmp-sfia-review/**`) |
| remote branch SHA | `8900cd06be195b2dd9fa154a7153608fdde6f9a3` — REMOTE VERIFIED |
| force push | none |

## H. Draft PR

| Field | Value |
| --- | --- |
| number | 346 |
| url | https://github.com/mcleland147/sfia-workspace/pull/346 |
| state | DRAFT |
| base | main |
| head | delivery/sfia-studio-m4-pre-reproof-bounding |
| head SHA | `8900cd06be195b2dd9fa154a7153608fdde6f9a3` |
| changed files | EXACTLY 2 (gateway + R1) |
| merge | NOT performed |

## I. CI state (at pack time)

Run: https://github.com/mcleland147/sfia-workspace/actions/runs/31794153908

| Check | Status |
| --- | --- |
| Detect SFIA Studio changes | SUCCESS / pass |
| Build and validate SFIA Studio | **PENDING** (QUEUED at observation) |

**CI = PENDING** — not claimed SUCCESS.

## J. ZERO REAL proof

| Control | Count |
| --- | --- |
| Gate D new | 0 |
| Attempt REAL new | 0 |
| StartExecution REAL | 0 |
| RetryExecutionAttempt REAL | 0 |
| REAL worktree | 0 |
| external Cursor Agent spawn | 0 |
| agent --print invocation | 0 |
| model task | 0 |
| login/logout | 0 |
| timeout modification | 0 |
| AgentCapability modification | 0 |
| architecture modification | 0 |
| merge | 0 |
| parent SFIA_STUDIO_CURSOR_REAL | unset |
| parent OPS1_CURSOR_REAL | unset |

## K. Réserves

1. Shell impossibility under `--mode ask` NOT runtime-proven.
2. Strict runtime tool-surface still requires future REAL observation.
3. timeout 60000 unchanged — NOT proven sufficient or defective.
4. CI Build job was PENDING at handoff write time.
5. next lint deprecation notice is tooling noise only.

## L. Anti-claims

- M4 EXIT PROOF NOT SATISFIED
- M4 NOT CLOSED
- M5 NOT AUTHORIZED
- runtime v3 NON ADOPTED
- STRICT RUNTIME READ-ONLY TOOL-SURFACE NOT PROVEN
- TIMEOUT 60000 NOT PROVEN SUFFICIENT OR DEFECTIVE
- no merge authorized by this cycle
- no REAL reproof authorized by this cycle

## M. Dette / exit / next

Dette: future REAL must observe tool-surface under `--mode ask`; timeout still unresolved.
Exit of this cycle: Draft PR created for Morris CI/review/merge decision.
Next capability after **separate** merge GO + stable base: M4 GOVERNED REAL COMPLETION PROOF (new identities only).

## N. Décisions

**Consommée:** GO MORRIS — VALIDATE + COMMIT / PUSH / PR — M4 PRE-REPROOF BOUNDING — NO REAL EXECUTION

Prior related GOs (history): bounding implement; handoff repair completeness.

**NON prises:** merge, REAL reproof, Gate D, Attempt, StartExecution REAL, timeout ADAPT, AgentCapability ADAPT, Roadmap update, M4 close, M5.

## O. Verdict

**M4 PRE-REPROOF BOUNDING PR CREATED — REVIEWED CANDIDATE COMMITTED AND PUSHED — NO REAL EXECUTION — M4 EXIT PROOF NOT SATISFIED — MORRIS MERGE DECISION REQUIRED**

Substatuses:
- candidate identity = VERIFIED
- validations = PASS
- project commit = CREATED
- project branch = PUSHED / REMOTE VERIFIED
- Draft PR = CREATED (#346)
- CI = PENDING
- Review Handoff = (filled after publish)
- ZERO REAL = PROVEN by cycle controls

## P. Review Handoff publication

- Message: `docs(review-handoff): publish m4 pre-reproof bounding pr readiness`
- Previous tip expected: `3c56cb29367268231c1db26b4de7af5cfe0ef499`
- Canonical: `sfia-review-handoff/latest-chatgpt-review.md`

Instruction ChatGPT:

Review Handoff publié. ChatGPT doit relire `sfia-review-handoff/latest-chatgpt-review.md` sur `origin/sfia/review-handoff`, vérifier Local Git Truth, identité de la candidate, validations, commit/parent, remote branch SHA, Draft PR/base/head/diff, CI, diff complet des deux fichiers, preuve ZERO REAL et réserves. Le rapport n'autorise aucun merge ni aucun reproof REAL. Le merge et toute future HumanDecision/ExecutionContract, Attempt REAL, Gate D ou exécution Cursor nécessitent des gates Morris distincts.
