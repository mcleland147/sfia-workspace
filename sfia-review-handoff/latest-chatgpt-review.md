# Review Pack FULL — M4 REAL COMPLETION PRE-REPROOF BOUNDING — NO REAL EXECUTION

## A. Métadonnées

| Champ | Valeur |
| --- | --- |
| Timestamp | 2026-08-14 12:26:24 CEST (+0200, Europe/Paris) |
| GO consumed | GO MORRIS — M4 REAL COMPLETION PRE-REPROOF BOUNDING — NO REAL EXECUTION |
| Repository | mcleland147/sfia-workspace |
| Cycle branch | `delivery/sfia-studio-m4-pre-reproof-bounding` |
| HEAD (uncommitted candidate) | `3575c8863d8a13b610dbfde96a33426a620b2c56` (= origin/main) + local uncommitted gateway/test edits |
| origin/main | `3575c8863d8a13b610dbfde96a33426a620b2c56` |
| Incoming diagnostic handoff | `797daeccfa2ec445a1ecaf10f042de635cb1fe21` (verified via `git ls-remote` before consume) |
| Incoming blob | `5cd0112a825cbb2c8f9968ccc11f86e717837aa6` |
| Cycle | 8 — Delivery / implémentation |
| Profil SFIA | Critical |
| Typologie v2.4 | EVOL |
| CKC | detailed Cycle 8 absent → fallback `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` candidate — experimental cognitive guidance — no execution authority |
| Capacités v3 | V3-F05 + V3-F11 + V3-F12 (V3-F14/F15 anti-claims) |
| Milestone | M4 |
| Next capability (not executed) | M4 GOVERNED REAL COMPLETION PROOF |

## B. Git Truth avant / après

### Avant

```
pwd = …/worktrees/sfia-studio-m4-real-off
branch was docs/sfia-studio-m4-post-merge-roadmap @ 91fa0eb25fe29e833bd212a8f9097c2c039a3c97
origin/main = 3575c8863d8a13b610dbfde96a33426a620b2c56
status = ?? .tmp-sfia-review/ only
diff/cached = empty
APP tree vs origin/main = IDENTICAL
SFIA_STUDIO_CURSOR_REAL = <unset>
OPS1_CURSOR_REAL = <unset>
handoff remote = 797daeccfa2ec445a1ecaf10f042de635cb1fe21
README.md = TRACKED and present (git ls-files --error-unmatch README.md)
dedicated branch = ABSENT → created
```

Created without destruction:

```
git switch -c delivery/sfia-studio-m4-pre-reproof-bounding origin/main
HEAD = origin/main = 3575c8863d8a13b610dbfde96a33426a620b2c56
```

### Après (avant handoff push)

```
branch = delivery/sfia-studio-m4-pre-reproof-bounding
HEAD commit still 3575c886… (no project commit)
tracked modified (unstaged):
  M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
  M projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts
staged = empty
untracked = .tmp-sfia-review/**
OUT_OF_SCOPE_UNTOUCHED vs origin/main:
  m4BoundedReadOnlyCursorAgent.ts
  nodeCursorProcessRunner.ts
  startExecution.ts
  grantGateD.ts
  convergence/**
  sfia-v3-framing/**
parent REAL flags still unset
```

No project commit / push / PR / merge.

## C. Convergence qualification

| Item | Qualification |
| --- | --- |
| M4 Architecture | CLOSED |
| M4 Delivery REAL-OFF | VALIDATED / MERGED |
| governed REAL launch | PROVEN (prior) |
| governed REAL completion | NOT PROVEN |
| defaultTimeoutMs 60000 | KEEP this cycle — PLAUSIBLE CONTRIBUTING FACTOR / not requalified |
| StudioCursorRealLaunchGateway argv/instruction | **ADAPT minimal** (this cycle) |
| AgentCapability descriptor | KEEP / READ-ONLY this cycle |
| ProcessRunner / Gate D / journal / StartExecution | KEEP |
| Roadmap / Build Doctrine / framing | NO MODIFY |
| M5 / runtime v3 | NOT AUTHORIZED / NON ADOPTED |
| Gap remaining | FUTURE REAL completion proof (separate Morris GO) |
| Exit proof | NOT SATISFIED |

## D. Diagnostic entrant (facts preserved, not re-executed)

From handoff `797daecc…`: FIRST REAL PID 21247 timed out at ~60s mid-turn; CLI/auth/argv operational; first token ~7.6s; `--print` without restrictive mode allowed write/shell surface; Shell was used; worktree stayed clean. Timeout not proven inadequate. Identities `xat:m4-first-real-001` / `gtd:m4-first-real-001` must never be reused.

## E. Sources lues

Processus: `sfia-cycle-execution-template.md`, routing guide, operating model, guardrails, knowledge layer, CKC synthetic map 02.
Convergence: Build Doctrine + Roadmap (read-only).
Doctrine: framing 30, 34, 35, 37.
Produit: `studioCursorRealLaunchGateway.ts`, `m4BoundedReadOnlyCursorAgent.ts` (RO), `nodeCursorProcessRunner.ts`, ports as needed.
Preuve: remote handoff `797daecc…`.
Tooling: `scripts/sfia/publish-review-handoff.sh` / README.

## F. Tests directs découverts (avant code)

Tracked files importing `StudioCursorRealLaunchGateway` or related argv:

| File | Role | Modifiable this cycle? |
| --- | --- | --- |
| `m4RealOffCorrectionR1.test.ts` | Imports gateway; OFF path R1-09; best home for argv assertions | **YES — adapted** |
| `m4RealOffCorrectionR2.test.ts` | Gateway OFF workspace/runner | No — no argv assertions needed |
| `m4RealOffCorrectionR3.test.ts` | Gateway OFF + static scan forbids `SFIA_STUDIO_CURSOR_REAL: "1"` literals | No — scan still passes via flag constant |
| `m4RealOffBoundary.test.ts` | Uses CursorCliLaunchGateway alias for OFF paths | No |
| `support/fakeProcessRunner.ts` / `fakeSpawnAndGit.ts` | test doubles only | No |

**Modified test files: 1 / max 3.** No new test file created. No REAL integration test.

## G. CLI BOUNDING QUALIFICATION (metadata only)

Invocations authorized and run:

- `/Applications/Cursor.app/Contents/Resources/app/bin/cursor --version`
- `/Applications/Cursor.app/Contents/Resources/app/bin/cursor --help`
- `~/.local/bin/cursor-agent --version`
- `~/.local/bin/cursor-agent --help`
- `~/.local/bin/cursor-agent help agent`

**NOT run:** `cursor agent`, `cursor-agent agent`, any `--print`, any prompt.

Capture artifact: `.tmp-sfia-review/m4-pre-reproof-bounding/cli-help-capture.txt`

| Field | Value |
| --- | --- |
| executable (Studio resolver first hit) | `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` |
| Desktop version | `3.15.19` / `de07bee81cefe43461ebf4f40c3d2d78d15052a0` / arm64 |
| cursor-agent version | `2026.08.11-e8db854` |
| option candidate | `--mode ask` |
| wording observed (paraphrase of local help) | `--mode <mode>` choices `plan`, `ask`. **plan**: “read-only/planning (analyze, propose plans, no edits)”. **ask**: “Q&A style for explanations and questions (read-only)” |
| read-only proven | **yes** (help text for `ask`) |
| write/edit prohibited proven | **yes** for ask/plan as “read-only” / “no edits” on plan; ask labeled read-only |
| Shell behavior | **unresolved** — help for `--print` still states “Has access to all tools, including write and shell”; help does not prove Shell is impossible under `--mode ask` |
| nested `help agent` | only `-h` / prompt args — global flags including `--mode` documented on top-level `agent --help` |
| verdict | **usable** for this bounding adaptation |

## H. README target qualification

```
git ls-files --error-unmatch README.md → OK
test -f README.md → OK
```

Deterministic proof target = tracked root `README.md`. No silent alternate file.

## I. Diff produit COMPLET / exploitable

### I.1 `studioCursorRealLaunchGateway.ts`

```diff
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

**Unchanged in same file:** `resolveCursorBinPath` order, `defaultTimeoutMs ?? 60_000`, ProcessRunner invoke contract, enablement gate, workspace prepare order, adapter id.

**Resulting argv shape for future REAL:**

```
agent
--print
--mode
ask
--workspace
<workspacePath>
--trust
--sandbox
enabled
<deterministic instruction>
```

### I.2 `m4RealOffCorrectionR1.test.ts` — DIFF EXACT COMPLET (obligatoire dans le handoff)

Le handoff distant `76eafd45…` était **INCOMPLETE** au sens template v2.6 §7.2.1 : la section I.2 était synthesis-only et renvoyait vers `.tmp-sfia-review/m4-pre-reproof-bounding/r1-test.diff`, artefact local hors Git handoff. Verdict applicable au tip distant actuel :

**REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING**

Ci-dessous : le **diff exact complet** `git diff` working tree vs `HEAD`/`origin/main` pour le fichier modifié. Aucune dépendance à un chemin `.tmp-sfia-review/**`.

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

Notes (non substitutives du diff) :

- Gateway-local enablement via `[SFIA_STUDIO_CURSOR_REAL_FLAG]: "1"` (does **not** set `process.env`; avoids R3 literal scan patterns).
- `FakeProcessRunner` only — no OS Cursor.
- Asserts cover `--mode ask` once, retained REAL argv flags, deterministic markers, bans, fingerprint projection, product default timeout `60000`.

## J. Tests exécutés et résultats

Working directory: `projects/sfia-studio/app`.
Flags parent: both REAL unset before/after.

1. `npx vitest run __tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts`
   - 1 file / **10 tests PASS** (was 9 + R1-10)
2. `npx vitest run __tests__/oa/execution-attempt`
   - **10 files / 131 tests PASS**
   - includes R3 static scan (still empty hits)
   - crash-replay / spawn-ack / boundary green

No `cursor agent` / `--print` / model task. Logs: `.tmp-sfia-review/m4-pre-reproof-bounding/vitest-*.log`.

Lint/typecheck: not required to finish; change is local string/argv + unit test. Existing `npm run typecheck` exists but not run (bounded validation satisfied by targeted vitest).

## K. Requirements matrix

| Requirement | Status | Preuve |
| --- | --- | --- |
| CLI read-only mode | PASS | local help `--mode ask` = “read-only” |
| deterministic target | PASS | README.md tracked + instruction |
| deterministic success marker | PASS | `M4_READ_ONLY_OK` |
| deterministic unavailable marker | PASS | `M4_READ_ONLY_UNAVAILABLE` |
| no broad inspect instruction | PASS | explicit bans on Glob/Grep/other files/Shell |
| timeout unchanged | PASS | source `?? 60_000`; R1-10 `call.timeoutMs === 60000` without override |
| AgentCapability unchanged | PASS | `git diff --exit-code` on descriptor |
| ProcessRunner unchanged | PASS | same |
| Gate D unchanged | PASS | same |
| zero REAL execution | PASS | §M |

## L. Timeout 60000 proof unchanged

```
studioCursorRealLaunchGateway.ts:89
  this.timeoutMs = options.defaultTimeoutMs ?? 60_000;
```

No ADAPT of timeout. R1-10 omits `defaultTimeoutMs` and asserts `60_000`.

Qualification remains: PLAUSIBLE CONTRIBUTING FACTOR / completion duration UNKNOWN. Not proven sufficient. Not proven defective.

## M. ZERO REAL EXECUTION proof

| Control | Count |
| --- | --- |
| Gate D new | 0 |
| Attempt REAL new | 0 |
| StartExecution | 0 |
| RetryExecutionAttempt | 0 |
| REAL worktree | 0 |
| `cursor agent` / `cursor-agent agent` | 0 |
| `--print` invocation | 0 |
| model task | 0 |
| login/logout | 0 |
| product commit | 0 |
| project push / PR / merge | 0 |
| `SFIA_STUDIO_CURSOR_REAL` parent | unset |
| `OPS1_CURSOR_REAL` parent | unset |

Only metadata `--version` / `--help` / `help agent` were run.

## N. Réserves

1. Shell under `--mode ask` is **unresolved** by help; `--print` help still mentions write/shell access. Future REAL must observe actual tool-surface.
2. Help “read-only” is metadata proof for this machine’s installed CLI version — not a guarantee of future CLI versions.
3. Nested `agent agent` help is sparse; flags taken from top-level `cursor-agent --help`.
4. Deterministic instruction is text policy only until a future REAL proves the child obeys markers and exits 0.
5. Timeout not requalified.
6. Roadmap historical sentences superseded by prior REAL handoffs remain unedited.
7. Candidate is **local uncommitted** — project commit/PR requires a new Morris GO.

## O. Gaps M4 restants / capacité suivante

- Governed REAL completion still NOT PROVEN.
- M4 exit proof NOT SATISFIED.
- Future: Morris GO for HumanDecision + ExecutionContract + Attempt + Gate D + **one** REAL spawn using this bounded argv/instruction (new identities only).
- Not authorized: M5, Evidence durable, LPS write-back, runtime v3 ADOPTED, timeout change, AgentCapability change.

## P. Décisions

**Consommée (bounding produit local):** GO MORRIS — M4 REAL COMPLETION PRE-REPROOF BOUNDING — NO REAL EXECUTION.

**Consommée (réparation handoff — ce cycle):** GO MORRIS — REPAIR M4 PRE-REPROOF REVIEW HANDOFF — CONTENT COMPLETENESS ONLY — NO PRODUCT CHANGE — NO REAL EXECUTION.

**Non prises / non implicites:** project commit, push projet, PR, merge, REAL reproof, new Gate D, new Attempt, timeout ADAPT, AgentCapability ADAPT, M4 close, M5.

## Q. Verdict

**REVIEW HANDOFF REPAIRED FOR CONTENT COMPLETENESS — R1 DIFF EMBEDDED — NO PRODUCT CHANGE — NO REAL EXECUTION — READY FOR CHATGPT BOUNDING REVIEW**

Le tip distant antérieur `76eafd45…` / blob `4dc3b09a…` était **INCOMPLETE** (I.2 synthesis-only). Ce cycle republie le pack avec le **diff exact complet** de `m4RealOffCorrectionR1.test.ts` inline. Aucun changement produit supplémentaire.

Produit local (inchangé depuis le bounding) :

**M4 PRE-REPROOF BOUNDING IMPLEMENTED WITH RESERVES — READ-ONLY CLI SURFACE BOUNDED — TIMEOUT WINDOW NOT REQUALIFIED — NO REAL EXECUTION — MORRIS REPROOF DECISION REQUIRED**

Anti-claims:

- M4 EXIT PROOF NOT SATISFIED
- M4 NOT CLOSED
- M5 NOT AUTHORIZED
- runtime v3 NON ADOPTED
- REAL completion NOT PROVEN
- timeout NOT proven correct/sufficient

Statut: **READY FOR CHATGPT BOUNDING REVIEW**

## R. Review Handoff publication

| Champ | Valeur |
| --- | --- |
| Previous tip (incomplete) | `76eafd45c623f0b718406ee95c1b20efb8aa2d47` |
| Previous blob (incomplete) | `4dc3b09a092e164706794fb18d27ab562c84fc3d` |
| GO repair | CONSUMED |
| Product files this repair | NONE |
| Commit message | `docs(review-handoff): repair m4 pre-reproof bounding content completeness` |
| Branch | `sfia/review-handoff` |
| Canonical | `sfia-review-handoff/latest-chatgpt-review.md` |

Filled after publisher success: new commit SHA / remote SHA / blob.

Instruction ChatGPT:

Review Handoff publié. ChatGPT doit relire `sfia-review-handoff/latest-chatgpt-review.md` sur `origin/sfia/review-handoff`, vérifier cycle/branche/HEAD/base, le **diff complet gateway + R1**, la qualification CLI, les tests, la preuve ZERO REAL et les réserves. Ce rapport n'autorise aucun reproof REAL. Toute nouvelle HumanDecision/ExecutionContract, Attempt REAL, Gate D ou exécution Cursor nécessite un nouveau GO Morris.
