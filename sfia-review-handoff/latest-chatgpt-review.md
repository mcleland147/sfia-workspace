# ChatGPT Review Pack — FULL
# Cycle 8 Delivery requalification — DETERMINISTIC BROWSER PROOF TOOLING
# ZERO REAL — not Cycle 9 formal QA verdict

## 1. Timestamp Europe/Paris

2026-08-17T14:49:50.401394+02:00

## 2. Cycle

8 — Delivery / implémentation

Requalification CE : DETERMINISTIC BROWSER PROOF TOOLING.
Ce cycle n’est PAS le Cycle 9 QA formel.

## 3. Profil

Critical

Justification : tooling qui doit représenter fidèlement une frontière d’exécution Cursor asynchrone et conditionne la qualité de la prochaine preuve browser Pre-M6.

## 4. Typologie v2.4

INC — bounded Pre-M6 deterministic proof tooling

## 5. GO Morris exact

```
GO MORRIS —
RESUME SFIA STUDIO
CYCLE 8 DELIVERY REQUALIFICATION
DETERMINISTIC BROWSER PROOF TOOLING
ZERO REAL
```

Autorisé : inspection locale Pre-M6 ; extension minimale E2E/QA ; double déterministe TEST-ONLY de la frontière Cursor ; composition TEST/E2E ; QA control existant uniquement pour piloter cette frontière (ici : env fail-closed, reset singleton existant) ; tests déterministes/Playwright nécessaires ; DB QA isolée ; runtime browser local ; screenshots ; Vitest/Playwright/typecheck/lint/build ; FULL review pack ; Review Handoff publish-in-cycle.

Interdit et respecté : Cursor REAL ; SFIA_STUDIO_CURSOR_REAL=1 ; OPS1_CURSOR_REAL=1 ; OpenAI LIVE ; NodeCursorProcessRunner réel ; subprocess Cursor CLI ; nouveau REAL worktree ; reprise/cleanup ancien Attempt REAL ; worker/queue/scheduler/poller ; nouveau store ; migration ; Product persistence ; refonte UI ; nouvelle primitive domaine ; chemin produit parallèle ; commit projet ; push projet ; PR ; merge ; Roadmap sync ; M6 ; UAT ; runtime v3 ADOPTED.

## 6. Local Git Truth

Repository : mcleland147/sfia-workspace
Workspace : worktree Studio `…/sfia-studio-m4-real-off`
Branche locale : `delivery/sfia-studio-pre-m6-ui-option-a` (absente d’origin)
HEAD : `0d33478566627a9bf507d5a06323962d349308ee`
origin/main : `a3ac418f3bc2ebb006cbc58f902f13629871014d`
origin/sfia/review-handoff (avant ce publish) : `702f38fccf38c3f5450e54c2c24b81897c04638a`
git fetch origin main sfia/review-handoff : OK
git diff --cached : vide
Aucun reset / clean / stash / rebase / merge / checkout destructif.

## 7. Divergence HEAD 0d334 vs origin/main a3ac

origin/main est en avance du candidat local à cause de PR #360 (méthodologique uniquement).
Aucun merge/rebase/cherry-pick de origin/main dans le candidat dirty.

## 8. PR #360 n’a changé aucun app/**

`git diff --name-status 0d334785…..origin/main` :

```
M	docs/foundation/sfia-engineering-principles.md
M	method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
M	method/sfia-fast-track/core/sfia-rules-and-guardrails.md
M	projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
M	prompts/templates/sfia-cycle-execution-template.md
```

`git diff --name-status 0d334785…..origin/main -- projects/sfia-studio/app/**` : vide.

## 9. Identité candidat PRE

Mesurée, non inventée.

- Cycle 9 baseline historique : 979 fichiers, manifest `a396bf199111dac671f0cf6f7751a99449840330c14c76d57c00901d13c91873`
- Candidat Cycle 9 / entrée ce cycle : 980 fichiers, manifest `f34f41c3db0eef7e108514cfee7d78ba736c5717e0d5977b80069b3e77ce41ff`
- Recompute PRE ce cycle : count 980, mismatch 0, missing 0, SHA identique
- Cycle 8 seven files : 7/7 match (hashes §10 identity.json Cycle 9)
- Preuve : `.tmp-sfia-review/deterministic-browser-boundary-tooling/pre/identity.json`

Identité d’entrée : **VERIFIED**.

## 10. Sources

Lues depuis origin/main @ `a3ac418f…` (git show) et handoffs `git show` :

1. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` — R1–R21, A5, A6, A10, A13, A15
2. Roadmap — READ ONLY
3. `34-agent-capabilities-reversibility-and-execution-governance.md` — READ ONLY
4. `35-artifact-evidence-debt-and-controlled-learning.md` — READ ONLY
5. `prompts/templates/sfia-cycle-execution-template.md` — Repo-informed, Delivery, §6.16, Review pack/handoff
6. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
7. sfia-v2.5 §4.8
8. CKC synthetic map Cycle 8 — contrat détaillé absent ; guidance candidate ; aucune autorité d’exécution
9. Parent handoff `702f38fccf38c3f5450e54c2c24b81897c04638a`
10. Cycle 9 tooling gap `7821ab49ffb854c89664620ee0a8e3024c321e15`
11. Cycle 8 async reachability `4a089060d04530a83f4d1326b1de0bbbdf523f6f`
12. FIRST REAL `5d55c393a65df5813735a75e5e579c2b0bd35896`

## 11. Build Doctrine R21

origin/main :

> R21 Fidélité Fake/Real. Un fake/fixture substitue une **frontière externe**, pas un second chemin produit. Preuve déterministe ≠ preuve REAL. REAL-shaped deterministic reste DETERMINISTIC PROVEN. Les realism gaps restent visibles. Une frontière REAL significative se prouve **progressivement** (déterministe → REAL borné → end-to-end REAL). Aucun claim supérieur à la preuve. Aucun REAL automatique.

A5 challenge avant chantier : seam existant `composeStudioProductRealBoundary` + `completeBoundedReadOnlyLaunch` observe-pending.
A6 fixture : le chemin fixture Option A est FREEZE comme preuve B1–B3.
A10 preuve de sortie : tooling capable de running → refresh → terminal sans REAL externe.
A13 anti-pattern évité : pas de seed Attempt/Evidence.
A15 : pas d’évolution doctrine/runtime v3.

## 12. Roadmap

READ ONLY. Non modifiée. Pre-M6 NON COMPLETE. M6 non autorisé.

## 13. v3 framing 34/35

V3-F05 conversation → décision → exécution → preuve → état.
34 : exécution gouvernée, réversibilité, Gate D existant conservé.
35 : Evidence / ReviewBundle / dette d’apprentissage — chaîne canonique inchangée.
Runtime v3 NON ADOPTED.

## 14. Current handoff 702f38…

Cycle 14 post-merge PR #360. Doctrine Fake/Real intégrée sur main. Pre-M6 NON COMPLETE. NOT READY FOR REAL.

## 15. Blocker handoff 7821ab… (Cycle 9)

Gap : DETERMINISTIC BROWSER PROOF TOOLING. Browser N1/N2/N5 PASS ; B1/B2/B3 NOT PROVEN IN BROWSER. QA control ne peut pas seeder running REAL-shaped. Fixture path terminal immédiat.

## 16. Cycle 8 handoff 4a089…

Reachability UI running + « Actualiser le résultat ». Product fix FREEZE ce cycle.

## 17. FIRST REAL handoff 5d55…

Spawn ACK REAL sélectif. Full REAL product loop NOT PROVEN. Ancien worktree READ ONLY.

## 18. Convergence qualification

- Capacité v3 principale : V3-F05 (+ F02, F11, F12, F14, F15)
- Milestone : PRE-M6 — NON COMPLETE
- Runtime v3 : NON ADOPTED
- KEEP : Option A, HumanDecision, Contract, Confirmation, Attempt, Evidence, RB, LPS, canonical action, async continuation, one-launch, Cycle 8 refresh UI, Playwright/QA control existants
- ADAPT : E2E boundary tooling + substitution déterministe
- COMPLETE : tooling browser capable de running → refresh → terminal sans REAL externe
- FREEZE : legacy presentation ; old fixture-only path as B1–B3 proof
- HARVEST : TestOnlyRealExecutionLaunchPort semantics (copied beside seam, not imported from `__tests__`)
- REPLACE : aucun
- Gap ciblé : DETERMINISTIC BROWSER PROOF TOOLING GAP
- Trajectoire : FIRST REAL → Cycle 8 UI → Cycle 9 gap → Fake/Real on main → **ce CE Delivery tooling** → Cycle 9 deterministic browser QA (futur) → éventuellement REAL borné Morris — jamais automatique
- Exit proof : tooling traverse le chemin produit REAL-shaped déterministe avec même orchestration / Contract / Attempt / launch=1 / running / refresh / pending / terminal / Evidence / RB / Nora / LPS / reload, ZERO external REAL
- Capacité suivante : CYCLE 9 — DETERMINISTIC BROWSER QA — ZERO REAL

## 19. Fake / Real Qualification

Applicable : OUI
Frontière externe : Cursor CLI / subprocess / NodeCursorProcessRunner / StudioCursorRealLaunchGateway
Fake : `TestOnlyDeterministicCursorLaunchPort` + `MemoryLaunchSafetyJournal` via `composeDeterministicCursorBoundary`
Placement : port/adapter externe au seam `composeStudioProductRealBoundary`
Ne seede PAS Attempt running, Contract executing, Evidence, ReviewBundle, résultat terminal pour B1–B3

Parité préservée : contrat launch ACK, processRef logique, running, pending, terminal success, same Attempt/Contract, launch count=1, Evidence/RB/Nora/LPS downstream

Différences acceptées (REALISM GAPS) : aucun processus OS, aucun Cursor CLI, aucun stdout réel, aucun timing OS, aucun réseau, aucune conso OpenAI/Cursor

États représentés : spawn ACK simulé, running, pending configurable (observe counter=2), terminal success, processRef stable `proc:det:{attemptId}`

Preuve d’entrée : domain one-launch DETERMINISTIC PROVEN ; component running-refresh DETERMINISTIC PROVEN ; browser running→refresh NOT PROVEN (avant ce cycle)

Preuve ce cycle : DETERMINISTIC PROVEN pour la **capacité du tooling**. Pas le verdict formel Cycle 9 de toute la candidate.
Hors scope : REAL BOUNDARY PROVEN, END-TO-END REAL PROVEN
Gate Morris REAL : NON
DETERMINISTIC PROVEN ⇏ READY FOR REAL

## 20. Discovery du seam

Voir `.tmp-sfia-review/deterministic-browser-boundary-tooling/discovery.md`

Chemin produit :
Option A UI → prepareAndResolveM3ProductPath → selectProductM3ResolutionProfile → Confirmation → confirmAndExecuteResolvedM3 → executeConfirmedBoundedReadOnlyContract → StartExecution(launchPort) → completeBoundedReadOnlyLaunch(observe) → ingestEvidenceAndRecommend → Nora/LPS

Seam : `composeStudioProductRealBoundary` retournait undefined sauf `SFIA_STUDIO_CURSOR_REAL=1`.
`selectProductM3ResolutionProfile` choisissait bounded seulement si preferBoundedReadOnly OU REAL flag.
Sans adapter le sélecteur, un fake injecté sans REAL flag restait sur le chemin fixture.

T-R3-ASYNC intact (relancé PASS). Cycle 8 product files byte-identical.

## 21. KEEP / ADAPT / COMPLETE / FORBIDDEN

KEEP : UI Cycle 8, confirmAndExecuteResolvedM3, executeConfirmedBoundedReadOnlyContract, completeBoundedReadOnlyLaunch, persistence, T-R3-ASYNC, specs fixture Option A, QA control fail-closed existant, reset singleton.

ADAPT : composeStudioProductRealBoundary ; selectProductM3ResolutionProfile (justifié : seam de sélection du profil bounded SANS flag REAL) ; importBoundaries allowlist ; playwright.config port isolé.

COMPLETE : deterministicExternalLaunchBoundary.ts ; unit/integration ; Playwright tooling spec.

FORBIDDEN TO TOUCH (respecté, hashes POST identiques PRE pour les watch files Cycle 8 UI + confirm/execute/complete) :
useProductConversation.ts, ConversationSurface.tsx, ProjectAssistantPanel.tsx, presentationLabels.ts, confirmAndExecuteResolvedM3, executeConfirmedBoundedReadOnlyContract, completeBoundedReadOnlyLaunch, persistence/migrations.

## 22. Plan fichiers exact PRE-mutation (7)

1. NEW `lib/vertical-slice-runtime/deterministicExternalLaunchBoundary.ts` (renommé depuis le nom de travail `deterministicCursorBoundary.ts` pour ne pas violer `project-assistant/importBoundaries.test.ts` `/from @\/lib\/.*cursor/i`)
2. ADAPT `lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts`
3. ADAPT `features/project-assistant/f3/selectProductM3ResolutionProfile.ts`
4. ADAPT `__tests__/vertical-slice-runtime/importBoundaries.test.ts`
5. NEW `__tests__/vertical-slice-runtime/deterministicCursorBoundary.test.ts`
6. NEW `e2e/studio-option-a-deterministic-cursor-boundary.spec.ts`
7. ADAPT `playwright.config.ts`

QA control non étendu : env process-level + reset singleton existant.

## 23. Diffs complets des fichiers créés/modifiés

### 23.a NEW — deterministicExternalLaunchBoundary.ts (contenu complet)

```ts
/**
 * TEST/E2E-ONLY deterministic Cursor external-boundary double.
 *
 * Substitutes NodeCursorProcessRunner / StudioCursorRealLaunchGateway /
 * subprocess Cursor CLI. It does NOT seed ExecutionAttempt, ExecutionContract,
 * Evidence, or ReviewBundle — those remain product orchestration outputs.
 *
 * Fail-closed. Mutually exclusive with SFIA_STUDIO_CURSOR_REAL=1.
 */
import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  MemoryLaunchSafetyJournal,
  type RealBoundaryWiring,
  type RealExecutionLaunchPort,
  type RealLaunchRequest,
  type RealLaunchResult,
  type RealProcessObservation,
} from "@/lib/oa/execution-attempt";

export const SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG =
  "SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY" as const;

export const DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE =
  "DETERMINISTIC AND REAL EXECUTION MODES NOT MUTUALLY EXCLUSIVE" as const;

const DETERMINISTIC_STDOUT =
  "DETERMINISTIC_TEST_BOUNDARY_CURSOR_COMPLETION\nZERO REAL\n";

export type DeterministicCursorBoundaryEnv = NodeJS.ProcessEnv;

export function isDeterministicCursorBoundaryEnabled(
  env: DeterministicCursorBoundaryEnv = process.env,
): boolean {
  if (env.NODE_ENV === "production") return false;
  if (env[SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG] !== "1") {
    return false;
  }
  if (env.SFIA_STUDIO_E2E_QA_CONTROL !== "1") return false;
  if (env.OPS1_CONVERSATION_PROVIDER !== "fake") return false;
  if (env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL !== "1") return false;
  if (env.SFIA_STUDIO_CURSOR_REAL === "1") return false;
  if (env.OPS1_CURSOR_REAL === "1") return false;
  return true;
}

export function assertDeterministicAndRealMutuallyExclusive(
  env: DeterministicCursorBoundaryEnv = process.env,
): void {
  if (
    env[SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG] === "1" &&
    (env.SFIA_STUDIO_CURSOR_REAL === "1" || env.OPS1_CURSOR_REAL === "1")
  ) {
    throw new Error(DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE);
  }
}

function pendingObserveLimitFromEnv(
  env: DeterministicCursorBoundaryEnv,
): number {
  const raw = env.SFIA_STUDIO_E2E_DETERMINISTIC_PENDING_OBSERVES;
  if (!raw) return 2;
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed < 1) return 2;
  return parsed;
}

export type TestOnlyDeterministicCursorLaunchPortOptions = {
  readonly gatewayId?: string;
  /** How many observe() calls stay pending before terminal success. Default 2. */
  readonly pendingObserveLimit?: number;
  readonly completionStdout?: string;
};

/**
 * Simulated external Cursor ACK / observe / completion.
 * realProcessInvoked on the ACK is the launch-port contract (spawn ACK),
 * not a claim that an OS Cursor process exists.
 */
export class TestOnlyDeterministicCursorLaunchPort
  implements RealExecutionLaunchPort
{
  readonly gatewayId: string;
  readonly externalEffects = true as const;
  readonly calls: RealLaunchRequest[] = [];
  readonly simulatedTechnicalAckCount = { value: 0 };
  private readonly pendingObserveLimit: number;
  private readonly completionStdout: string;
  private observeCount = 0;
  private readonly observations = new Map<string, RealProcessObservation>();

  constructor(options: TestOnlyDeterministicCursorLaunchPortOptions = {}) {
    this.gatewayId = options.gatewayId ?? M4_REAL_GATEWAY_ADAPTER_ID;
    this.pendingObserveLimit = options.pendingObserveLimit ?? 2;
    this.completionStdout = options.completionStdout ?? DETERMINISTIC_STDOUT;
  }

  get launchCallCount(): number {
    return this.calls.length;
  }

  get simulatedAckCount(): number {
    return this.simulatedTechnicalAckCount.value;
  }

  get observeCallCount(): number {
    return this.observeCount;
  }

  reset(): void {
    this.calls.length = 0;
    this.simulatedTechnicalAckCount.value = 0;
    this.observeCount = 0;
    this.observations.clear();
  }

  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
    this.calls.push(structuredClone(request));
    this.simulatedTechnicalAckCount.value += 1;
    const processRef = `proc:det:${request.attemptId}`;
    this.observations.set(processRef, {
      processRef,
      exitCode: null,
      timedOut: false,
      stdout: "",
      stderr: "",
      durationMs: 0,
      realProcessInvoked: true,
    });
    return {
      outcome: "ack",
      gatewayId: this.gatewayId,
      attemptId: request.attemptId,
      realProcessInvoked: true,
      processRef,
    };
  }

  async observe(processRef: string): Promise<RealProcessObservation | null> {
    const current = this.observations.get(processRef);
    if (!current) return null;
    this.observeCount += 1;
    if (this.observeCount <= this.pendingObserveLimit) {
      const pending: RealProcessObservation = {
        ...current,
        exitCode: null,
        timedOut: false,
        realProcessInvoked: true,
      };
      this.observations.set(processRef, pending);
      return pending;
    }
    const done: RealProcessObservation = {
      processRef,
      exitCode: 0,
      timedOut: false,
      stdout: this.completionStdout,
      stderr: "",
      durationMs: 1,
      realProcessInvoked: true,
    };
    this.observations.set(processRef, done);
    return done;
  }

  async awaitCompletion(
    processRef: string,
  ): Promise<RealProcessObservation | null> {
    const current = this.observations.get(processRef);
    if (!current) return null;
    if (current.exitCode !== null || current.timedOut) return current;
    return this.observe(processRef);
  }
}

export function composeDeterministicCursorBoundary(
  env: DeterministicCursorBoundaryEnv = process.env,
): RealBoundaryWiring {
  const launchPort = new TestOnlyDeterministicCursorLaunchPort({
    pendingObserveLimit: pendingObserveLimitFromEnv(env),
  });
  return Object.freeze({
    launchPort,
    safetyJournal: new MemoryLaunchSafetyJournal(),
  });
}

```

### 23.b ADAPT — composeStudioProductRealBoundary.ts (fichier complet post-mutation)

Changement utile vs Cycle 9 candidate :
- import `assertDeterministicAndRealMutuallyExclusive`, `composeDeterministicCursorBoundary`, `isDeterministicCursorBoundaryEnabled`
- au début de `composeStudioProductRealBoundary` : mutex puis branche déterministe fail-closed AVANT la construction REAL (NodeCursorProcessRunner / worktrees / sqlite journal)

```ts
/**
 * R1 — product live REAL boundary composition, OFF-by-default.
 *
 * When SFIA_STUDIO_CURSOR_REAL !== "1", returns undefined and constructs
 * nothing (no safety DB, no worktree dir, no Cursor bin search, no git, no process)
 * unless the fail-closed TEST/E2E deterministic Cursor boundary is enabled.
 *
 * The deterministic path substitutes only the external Cursor/process adapter.
 * It does not construct NodeCursorProcessRunner, worktrees, or safety sqlite.
 *
 * When the REAL flag is "1", constructs existing M4 classes only. Construction
 * does not launch a process, search the Cursor binary, or run git.
 * Launch remains gated by HumanDecision → Contract → Confirmation →
 * agent selection → Gate D → StartExecution.
 */
import fs from "node:fs";
import path from "node:path";
import {
  isStudioCursorRealEnabled,
  NodeCursorProcessRunner,
  NodeGitCommandRunner,
  SqliteRealLaunchSafetyJournal,
  StudioCursorRealLaunchGateway,
  StudioGitWorktreeWorkspace,
  type GitCommandRunner,
  type ProcessRunner,
  type RealBoundaryWiring,
  type RealExecutionLaunchPort,
  type RealExecutionWorkspacePort,
  type RealLaunchSafetyJournalPort,
} from "@/lib/oa/execution-attempt";
import {
  assertDeterministicAndRealMutuallyExclusive,
  composeDeterministicCursorBoundary,
  isDeterministicCursorBoundaryEnabled,
} from "./deterministicExternalLaunchBoundary";

export type ComposeStudioProductRealBoundaryInput = {
  readonly env?: NodeJS.ProcessEnv;
  readonly processRunner?: ProcessRunner;
  readonly workspacePort?: RealExecutionWorkspacePort;
  readonly gitRunner?: GitCommandRunner;
  readonly safetyJournal?: RealLaunchSafetyJournalPort;
  readonly resolveCursorBin?: () => string | null;
  readonly repoRoot?: string;
  readonly studioRoot?: string;
  readonly execRoot?: string;
  readonly safetyJournalPath?: string;
};

export function resolveStudioSfiaExecRoot(studioRoot?: string): string {
  const root = path.resolve(studioRoot ?? path.resolve(process.cwd(), ".."));
  return path.join(root, ".sfia-exec");
}

/**
 * Filesystem-only git toplevel discovery. Does not spawn git.
 */
export function findGitToplevelByDotGit(startDir: string): string | null {
  let dir = path.resolve(startDir);
  for (;;) {
    if (fs.existsSync(path.join(dir, ".git"))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

export function composeStudioProductRealBoundary(
  input: ComposeStudioProductRealBoundaryInput = {},
): RealBoundaryWiring | undefined {
  const env = input.env ?? process.env;
  assertDeterministicAndRealMutuallyExclusive(env);
  if (isDeterministicCursorBoundaryEnabled(env)) {
    return composeDeterministicCursorBoundary(env);
  }
  if (!isStudioCursorRealEnabled(env)) {
    return undefined;
  }

  const studioRoot = path.resolve(
    input.studioRoot ?? path.resolve(process.cwd(), ".."),
  );
  const execBase = resolveStudioSfiaExecRoot(studioRoot);
  const execRoot = path.resolve(
    input.execRoot ?? path.join(execBase, "m4-worktrees"),
  );
  const safetyJournalPath = path.resolve(
    input.safetyJournalPath ??
      path.join(execBase, "m4", "launch-safety.sqlite"),
  );
  const repoRoot = path.resolve(
    input.repoRoot ??
      findGitToplevelByDotGit(process.cwd()) ??
      path.resolve(process.cwd(), "../.."),
  );

  const processRunner = input.processRunner ?? new NodeCursorProcessRunner();
  const gitRunner = input.gitRunner ?? new NodeGitCommandRunner();
  const workspacePort =
    input.workspacePort ??
    new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner,
    });
  const safetyJournal =
    input.safetyJournal ??
    (() => {
      fs.mkdirSync(path.dirname(safetyJournalPath), { recursive: true });
      return new SqliteRealLaunchSafetyJournal({
        databasePath: safetyJournalPath,
      });
    })();
  const launchPort: RealExecutionLaunchPort =
    new StudioCursorRealLaunchGateway({
      processRunner,
      workspacePort,
      env,
      resolveCursorBin: input.resolveCursorBin,
    });

  return Object.freeze({
    launchPort,
    safetyJournal,
  });
}

```

### 23.c ADAPT — selectProductM3ResolutionProfile.ts (fichier complet post-mutation)

Changement utile : import helper + `useBounded` inclut `isDeterministicCursorBoundaryEnabled(env)` sans activer `SFIA_STUDIO_CURSOR_REAL`.

```ts
/**
 * Server-side M3 profile selection (GAP-1 / GAP-2).
 * Never reads client adapter/command/real fields.
 */

import type { ExecutionContract } from "@/lib/oa/execution-contract";
import { isStudioCursorRealEnabled } from "@/lib/oa/execution-attempt";
import { isDeterministicCursorBoundaryEnabled } from "@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary";
import {
  BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON,
  boundedReadOnlyM3ResolutionProfile,
} from "./boundedReadOnlyM3ResolutionProfile";
import {
  FIXTURE_SAFE_M3_SUPERSESSION_REASON,
  fixtureSafeM3ResolutionProfile,
} from "./fixtureSafeM3ResolutionProfile";
import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";

export type ProductM3ResolutionKind = "fixture" | "bounded_read_only";

export type SelectedProductM3Resolution = {
  kind: ProductM3ResolutionKind;
  profile: M3ResolvedExecutionFields;
  supersessionReason: string;
};

function sortedEqual(a: readonly string[], b: readonly string[]): boolean {
  if (a.length !== b.length) return false;
  const left = [...a].sort();
  const right = [...b].sort();
  return left.every((v, i) => v === right[i]);
}

export function profileMatchesContract(
  contract: Pick<
    ExecutionContract,
    | "action"
    | "target"
    | "scope"
    | "reversibility"
    | "requiredCapabilities"
    | "constraints"
    | "stopConditions"
  >,
  profile: M3ResolvedExecutionFields,
): boolean {
  return (
    contract.action === profile.action &&
    contract.target === profile.target &&
    contract.scope === (profile.scope ?? contract.scope) &&
    contract.reversibility === profile.reversibility &&
    sortedEqual(contract.requiredCapabilities, profile.requiredCapabilities) &&
    sortedEqual(contract.constraints, profile.constraints ?? []) &&
    sortedEqual(contract.stopConditions, profile.stopConditions ?? [])
  );
}

export function authorizedM3ResolutionKind(
  contract: Pick<
    ExecutionContract,
    | "action"
    | "target"
    | "scope"
    | "reversibility"
    | "requiredCapabilities"
    | "constraints"
    | "stopConditions"
  >,
): ProductM3ResolutionKind | null {
  if (profileMatchesContract(contract, fixtureSafeM3ResolutionProfile())) {
    return "fixture";
  }
  if (profileMatchesContract(contract, boundedReadOnlyM3ResolutionProfile())) {
    return "bounded_read_only";
  }
  return null;
}

/**
 * @param preferBoundedReadOnlyProfile Server/test only. Never from the client.
 * @param env Optional env snapshot for isStudioCursorRealEnabled /
 *   fail-closed deterministic Cursor boundary (TEST/E2E only).
 */
export function selectProductM3ResolutionProfile(input?: {
  preferBoundedReadOnlyProfile?: boolean;
  env?: NodeJS.ProcessEnv;
}): SelectedProductM3Resolution {
  const env = input?.env ?? process.env;
  const useBounded =
    input?.preferBoundedReadOnlyProfile === true ||
    isStudioCursorRealEnabled(env) ||
    isDeterministicCursorBoundaryEnabled(env);
  if (useBounded) {
    return {
      kind: "bounded_read_only",
      profile: boundedReadOnlyM3ResolutionProfile(),
      supersessionReason: BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON,
    };
  }
  return {
    kind: "fixture",
    profile: fixtureSafeM3ResolutionProfile(),
    supersessionReason: FIXTURE_SAFE_M3_SUPERSESSION_REASON,
  };
}

```

### 23.d ADAPT — importBoundaries.test.ts (delta utile ce cycle)

Ajout allowlist unique vs candidate Cycle 9 :

```
features/project-assistant/f3/selectProductM3ResolutionProfile.ts:@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary
```

Note : `git diff HEAD` sur ce fichier mélange la dirty Option A déjà présente sur le candidat Pre-M6 (non commise) et ce delta. Le delta **de ce cycle** est la ligne ci-dessus.

### 23.e ADAPT — playwright.config.ts (fichier complet)

```ts
import { defineConfig, devices } from "@playwright/test";

const playwrightPort = process.env.PLAYWRIGHT_PORT?.trim() || "3020";
const baseURL =
  process.env.PLAYWRIGHT_BASE_URL?.trim() ||
  `http://127.0.0.1:${playwrightPort}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [["list"]],
  use: {
    ...devices["Desktop Chrome"],
    baseURL,
    trace: "on-first-retry",
    viewport: { width: 1440, height: 1024 },
  },
  webServer: {
    command: `npm run dev -- --hostname 127.0.0.1 --port ${playwrightPort}`,
    url: baseURL,
    reuseExistingServer:
      process.env.PLAYWRIGHT_FORCE_WEBSERVER === "1" ? false : !process.env.CI,
    timeout: 180_000,
    env: {
      ...process.env,
      OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
      D1_INTAKE_PROVIDER: process.env.D1_INTAKE_PROVIDER || "fake",
      // Default E2E: fake provider. Real live capture/smoke: OPS1_ALLOW_LIVE_SMOKE=1
      // without forcing fake (secrets must already be in the environment).
      ...(process.env.OPS1_ALLOW_LIVE_SMOKE === "1"
        ? {
            OPS1_CONVERSATION_PROVIDER: "",
          }
        : {
            OPS1_CONVERSATION_PROVIDER: "fake",
            OPENAI_API_KEY:
              process.env.OPENAI_API_KEY || "sk-e2e-fake-not-a-real-key",
            OPENAI_MODEL: process.env.OPENAI_MODEL || "fake-e2e-model",
          }),
    },
  },
});

```

Delta : `PLAYWRIGHT_PORT` / `PLAYWRIGHT_BASE_URL` / `PLAYWRIGHT_FORCE_WEBSERVER` pour isoler Next+DB QA sans toucher 3020/canonical DB.

### 23.f NEW — deterministicCursorBoundary.test.ts (contenu complet)

```ts
/**
 * Fail-closed deterministic Cursor boundary — TEST/E2E composition.
 * ZERO Cursor REAL process. ZERO OpenAI live.
 * @vitest-environment node
 */
import path from "node:path";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  confirmAndExecuteResolvedM3,
  prepareAndResolveM3ProductPath,
  rehydrateEvidenceOutcomeFromLps,
  selectProductM3ResolutionProfile,
} from "@/features/project-assistant/f3";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import {
  assertStudioCursorRealOffForTests,
  isStudioCursorRealEnabled,
  StudioCursorRealLaunchGateway,
} from "@/lib/oa/execution-attempt";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  composeStudioProductRealBoundary,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";
import {
  DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE,
  isDeterministicCursorBoundaryEnabled,
  TestOnlyDeterministicCursorLaunchPort,
} from "@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import { FakeGitCommandRunner } from "../oa/execution-attempt/support/fakeSpawnAndGit";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);
const TEST_BOUNDED_BASE_HEAD_SHA =
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";

const DET_ENV_KEYS = [
  "SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY",
  "SFIA_STUDIO_E2E_QA_CONTROL",
  "OPS1_CONVERSATION_PROVIDER",
  "OPS1_E2E_ALLOW_DIRTY_PRINCIPAL",
  "SFIA_STUDIO_CURSOR_REAL",
  "OPS1_CURSOR_REAL",
  "SFIA_STUDIO_E2E_DETERMINISTIC_PENDING_OBSERVES",
] as const;

function clearDetEnv(): void {
  for (const key of DET_ENV_KEYS) {
    delete process.env[key];
  }
}

function armDetEnv(overrides: Record<string, string> = {}): NodeJS.ProcessEnv {
  const next: Record<string, string> = {
    SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY: "1",
    SFIA_STUDIO_E2E_QA_CONTROL: "1",
    OPS1_CONVERSATION_PROVIDER: "fake",
    OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
    ...overrides,
  };
  Object.assign(process.env, next);
  return { ...process.env, ...next };
}

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:det-${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:det-${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:det-${this.prefix}-${this.correlation}`;
  }
}

class CapturingFakeProvider extends FakeConversationProvider {
  readonly completeCalls: ProviderChatMessage[][] = [];
  override async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.completeCalls.push(messages.map((m) => ({ ...m })));
    return super.complete(messages);
  }
}

function createRuntime(prefix: string): RuntimeApplicationService {
  resetRuntimeApplicationServiceForTests();
  const dir = mkdtempSync(path.join(os.tmpdir(), `sfia-det-${prefix}-`));
  return getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: "2026-08-17T12:00:00.000Z",
    idSource: new FixedIdSource(prefix),
    auditMode: "noop",
    productDbPath: path.join(dir, "oa-product.sqlite"),
  });
}

async function seedGo(runtime: RuntimeApplicationService, label: string) {
  const created = await runtime.createProject({
    name: `DET ${label}`,
    objective: "Deterministic cursor boundary tooling",
    context: "ZERO REAL",
    criticality: "STANDARD",
    constraints: ["TEST BOUNDARY ONLY"],
    shortReference: "DET",
    idempotencyKey: `det-${label}-${Date.now()}-${Math.random()}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.project.projectId;
  const overview = await runtime.getProject(projectId);
  if (!overview.ok) throw new Error("overview failed");
  const proposalSnapshot = {
    projectId,
    lpsId: overview.livingState.id,
    lpsVersion: overview.livingState.version,
    doctrineDigest: overview.doctrine.digest,
  };
  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Deterministic boundary",
    objective: "B1-B3 tooling",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "tooling",
    scope: "boundary",
    outOfScope: ["LIVE REAL"],
    activatedBlocks: ["prepare"],
    expectedOutcome: "tooling",
    sources: [],
    risks: [],
    reservations: [],
    stopConditions: ["ZERO LIVE"],
    morrisGateRequired: true,
    nextPossibleStep: "GO",
    contextSnapshot: proposalSnapshot,
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
  });
  const go = await recordF2Decision({
    proposalId: proposal.proposalId,
    projectId,
    decisionKind: "GO",
    currentContext: proposalSnapshot,
    decisionServices: runtime.oa!.decisionServices,
    authorityResolver: runtime.oa!.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
    forceM3Authority: true,
  });
  if (!go.ok) throw new Error("go failed");
  const after = await runtime.getProject(projectId);
  if (!after.ok) throw new Error("overview after failed");
  return {
    projectId,
    decisionId: go.decision.decisionId,
    currentContext: {
      projectId,
      lpsId: after.livingState.id,
      lpsVersion: after.livingState.version,
      doctrineDigest: after.doctrine.digest,
    },
  };
}

describe("deterministic Cursor external-boundary substitution", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
    clearDetEnv();
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    assertStudioCursorRealOffForTests();
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    clearDetEnv();
    assertStudioCursorRealOffForTests();
    expect(isStudioCursorRealEnabled()).toBe(false);
  });

  it("N8 — refuses without QA env", () => {
    expect(
      isDeterministicCursorBoundaryEnabled({
        NODE_ENV: "test",
        SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY: "1",
        OPS1_CONVERSATION_PROVIDER: "fake",
        OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
      }),
    ).toBe(false);
    expect(
      composeStudioProductRealBoundary({
        env: {
          NODE_ENV: "test",
          SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY: "1",
          OPS1_CONVERSATION_PROVIDER: "fake",
          OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
        },
      }),
    ).toBeUndefined();
  });

  it("N9 — DETERMINISTIC + REAL is invalid", () => {
    expect(() =>
      composeStudioProductRealBoundary({
        env: {
          NODE_ENV: "test",
          SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY: "1",
          SFIA_STUDIO_CURSOR_REAL: "1",
        },
      }),
    ).toThrow(DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE);
  });

  it("N10 — production cannot enable the fake boundary", () => {
    expect(
      isDeterministicCursorBoundaryEnabled({
        NODE_ENV: "production",
        SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY: "1",
        SFIA_STUDIO_E2E_QA_CONTROL: "1",
        OPS1_CONVERSATION_PROVIDER: "fake",
        OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
      }),
    ).toBe(false);
    expect(
      composeStudioProductRealBoundary({
        env: {
          NODE_ENV: "production",
          SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY: "1",
          SFIA_STUDIO_E2E_QA_CONTROL: "1",
          OPS1_CONVERSATION_PROVIDER: "fake",
          OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
        },
      }),
    ).toBeUndefined();
  });

  it("selects bounded M3 profile without the REAL flag", () => {
    const env = armDetEnv();
    const selected = selectProductM3ResolutionProfile({ env });
    expect(selected.kind).toBe("bounded_read_only");
    expect(selectProductM3ResolutionProfile({ env: { NODE_ENV: "test" } }).kind).toBe(
      "fixture",
    );
  });

  it("composes TestOnly port, never StudioCursorRealLaunchGateway", () => {
    const boundary = composeStudioProductRealBoundary({ env: armDetEnv() });
    expect(boundary).toBeDefined();
    expect(boundary!.launchPort).toBeInstanceOf(TestOnlyDeterministicCursorLaunchPort);
    expect(boundary!.launchPort).not.toBeInstanceOf(StudioCursorRealLaunchGateway);
  });

  it("observe counter: pending, pending, then terminal — launch count 1", async () => {
    const port = new TestOnlyDeterministicCursorLaunchPort({
      pendingObserveLimit: 2,
    });
    const ack = await port.launch({
      attemptId: "xat:det-1",
      executionContractId: "xct:det-1",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4.cursor.bounded_readonly",
      adapterRef: "adp:m4-cursor-cli-real",
      correlationId: "cor:det",
      baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
    });
    expect(ack.outcome).toBe("ack");
    if (ack.outcome !== "ack") return;
    const first = await port.observe(ack.processRef);
    const second = await port.observe(ack.processRef);
    const third = await port.observe(ack.processRef);
    expect(first?.exitCode).toBeNull();
    expect(second?.exitCode).toBeNull();
    expect(third?.exitCode).toBe(0);
    expect(port.launchCallCount).toBe(1);
    port.reset();
    expect(port.launchCallCount).toBe(0);
    expect(port.observeCallCount).toBe(0);
  });

  it("same product orchestration: running → pending refresh → terminal Evidence/RB/Nora", async () => {
    armDetEnv();
    const provider = new CapturingFakeProvider({
      scripted: ["[TEST/FAKE] Nora deterministic-boundary analysis"],
    });
    setConversationProviderForTests(provider);
    const runtime = createRuntime("orch");
    const launchPort = runtime.oa!.executionAttemptServices.realBoundary
      ?.launchPort;
    expect(launchPort).toBeInstanceOf(TestOnlyDeterministicCursorLaunchPort);
    const port = launchPort as TestOnlyDeterministicCursorLaunchPort;
    const journal = runtime.oa!.executionAttemptServices.realBoundary!.safetyJournal;

    const seeded = await seedGo(runtime, "orch");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_READ_ONLY");

    const confirmDeps = {
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      executionContractServices: runtime.oa!.executionContractServices,
      executionAttemptServices: runtime.oa!.executionAttemptServices,
      evidenceReviewServices: runtime.oa!.evidenceReviewServices,
      fixtureAdapter: runtime.oa!.fixtureAdapter,
      nowIso: () => runtime.oa!.clock.nowIso(),
      projectServices: runtime.oa!.projectServices,
      productDurablePath: runtime.oa!.productDurablePath,
      forceM3Authority: true,
    };

    const first = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.payload.attempt.status).toBe("running");
    expect(first.payload.contract.status).toBe("executing");
    expect(first.payload.evidence.evidenceId).toBe("ev:pending-real");
    expect(port.launchCallCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);

    const attemptId = first.payload.attempt.attemptId;
    const contractId = first.payload.contract.executionContractId;

    const second = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: contractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.payload.reusedExistingAttempt).toBe(true);
    expect(second.payload.attempt.attemptId).toBe(attemptId);
    expect(second.payload.attempt.status).toBe("running");
    expect(port.launchCallCount).toBe(1);

    const third = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: contractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps,
    });
    expect(third.ok).toBe(true);
    if (!third.ok) return;
    expect(third.payload.reusedExistingAttempt).toBe(true);
    expect(third.payload.attempt.attemptId).toBe(attemptId);
    expect(third.payload.attempt.status).toBe("succeeded");
    expect(third.payload.evidence.evidenceId.startsWith("ev:m4-bounded-ro:")).toBe(
      true,
    );
    expect(
      third.payload.reviewBundle.reviewBundleId.startsWith("rb:m4-bounded-ro:"),
    ).toBe(true);
    expect(port.launchCallCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
    expect(provider.completeCalls.length).toBe(1);
    expect(third.payload.recommendation.analysisStatus).toBe("available");

    const frontiers = await journal.findFrontierByAttempt(attemptId);
    expect(frontiers.filter((row) => row.kind === "CREATED")).toHaveLength(1);
    expect(frontiers.filter((row) => row.kind === "LAUNCHED")).toHaveLength(1);

    const rehydrated = await rehydrateEvidenceOutcomeFromLps({
      projectId: seeded.projectId,
      deps: {
        projectServices: runtime.oa!.projectServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
      },
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    expect(rehydrated.evidence.map((row) => row.evidenceId)).toContain(
      third.payload.evidence.evidenceId,
    );
    expect(rehydrated.reviewBundles.map((row) => row.reviewBundleId)).toContain(
      third.payload.reviewBundle.reviewBundleId,
    );
  });
});

```

### 23.g NEW — studio-option-a-deterministic-cursor-boundary.spec.ts (contenu complet)

```ts
/**
 * Cycle 8 Delivery — deterministic Cursor boundary browser TOOLING proof.
 * ZERO REAL. Not the formal Cycle 9 QA verdict.
 *
 * Requires Next started with:
 *   SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY=1
 *   SFIA_STUDIO_E2E_QA_CONTROL=1
 *   SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1
 *   OPS1_CONVERSATION_PROVIDER=fake
 *   isolated SFIA_STUDIO_PRODUCT_DB_PATH
 *   SFIA_STUDIO_CURSOR_REAL unset
 *
 * Screenshots: .tmp-sfia-review/deterministic-browser-boundary-tooling/screenshots/
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/deterministic-browser-boundary-tooling/screenshots",
);
const BANNER =
  "DETERMINISTIC / TEST BOUNDARY — ZERO REAL — not REAL proof";

function runId(): string {
  return `det-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

async function stamp(page: Page): Promise<void> {
  await page.evaluate((text) => {
    const id = "sfia-det-banner";
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement("div");
      el.id = id;
      el.setAttribute("data-testid", "sfia-det-banner");
      el.style.cssText =
        "position:fixed;top:0;left:0;right:0;z-index:2147483647;background:#111;color:#f6c90e;font:12px/1.35 ui-monospace,monospace;padding:8px 12px;pointer-events:none";
      document.body.appendChild(el);
    }
    el.textContent = text;
  }, BANNER);
}

async function capture(page: Page, id: string, state: string): Promise<string> {
  await stamp(page);
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

async function createUniqueProject(page: Page, suffix: string) {
  const name = `QA DET boundary ${suffix}`;
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible();
  await page.locator("#project-name").fill(name);
  await page
    .locator("#project-objective")
    .fill("Deterministic browser proof tooling — ZERO REAL");
  await page
    .locator("#project-context")
    .fill("E2E TEST BOUNDARY — Cursor CLI not invoked.");
  await page.getByTestId("create-project-submit").click();
  await expect(page.getByTestId("open-project-workspace")).toBeVisible({
    timeout: 30_000,
  });
  await page.getByTestId("open-project-workspace").click();
  await expect(page.getByTestId("project-principal")).toBeVisible({
    timeout: 30_000,
  });
  const url = page.url();
  const rawId = url.split("/studio/projects/")[1]?.split(/[?#]/)[0];
  if (!rawId) throw new Error("projectId missing from URL");
  return { name, projectId: decodeURIComponent(rawId) };
}

async function sendGatedStandard(page: Page) {
  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 15_000 });
  await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
    timeout: 45_000,
  });
}

test.describe("deterministic Cursor boundary browser tooling", () => {
  test.describe.configure({ timeout: 240_000 });

  test("B1–B4 running → pending refresh → terminal → reload", async ({
    page,
  }) => {
    test.setTimeout(240_000);
    await page.setViewportSize({ width: 1440, height: 1024 });
    const created = await createUniqueProject(page, runId());
    await sendGatedStandard(page);
    await page.getByTestId("f2-decide-GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });
    const decisionId = (
      await page.getByTestId("f2-decision-id").textContent()
    )?.trim();
    if (!decisionId) throw new Error("decisionId missing");

    await page.getByTestId("f3-prepare-button").click();
    await expect(page.getByTestId("project-assistant-f3-contract")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-contract-action")).toContainText(
      "cursor.read_only.inspect",
    );
    const executionContractId = (
      await page.getByTestId("f3-contract-id").textContent()
    )?.trim();
    if (!executionContractId) throw new Error("executionContractId missing");

    // N1 — before Confirmation, refresh absent.
    await expect(page.getByTestId("f3-refresh-running-button")).toHaveCount(0);
    await expect(page.getByTestId("f3-confirm-execute-button")).toBeVisible();

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });

    // B1
    await expect(page.getByTestId("f3-attempt-status")).toContainText(/running/i);
    await expect(page.getByTestId("f3-running-refresh-title")).toContainText(
      "Exécution en cours",
    );
    await expect(page.getByTestId("f3-refresh-running-button")).toBeVisible();
    await expect(page.getByTestId("f3-refresh-running-button")).toContainText(
      "Actualiser le résultat",
    );
    await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
    await expect(
      page.getByTestId("project-assistant-panel").getByRole("button", {
        name: /Relancer|Réessayer|Confirmer l’exécution/i,
      }),
    ).toHaveCount(0);
    const attemptIdB1 = (
      await page.getByTestId("f3-attempt-id").textContent()
    )?.trim();
    if (!attemptIdB1) throw new Error("attemptId missing after confirm");
    await capture(page, "01-running-refresh-available", "B1 running");

    // N6 — second confirm control is gone; refresh is the only action.
    await page.getByTestId("f3-refresh-running-button").click();
    await expect(page.getByTestId("f3-attempt-id")).toHaveText(attemptIdB1, {
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-attempt-status")).toContainText(/running/i);
    await expect(page.getByTestId("f3-refresh-running-button")).toBeVisible();
    await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
    await capture(page, "02-pending-same-attempt", "B2 pending same Attempt");

    await page.getByTestId("f3-refresh-running-button").click();
    await expect(page.getByTestId("f3-attempt-status")).toContainText(
      /succeeded/i,
      { timeout: 45_000 },
    );
    await expect(page.getByTestId("f3-attempt-id")).toHaveText(attemptIdB1);
    await expect(page.getByTestId("f3-evidence-id")).toBeVisible();
    await expect(page.getByTestId("f3-evidence-id")).not.toHaveText(
      "ev:pending-real",
    );
    await expect(page.getByTestId("f3-review-bundle-id")).toBeVisible();
    await expect(page.getByTestId("f3-review-bundle-id")).not.toHaveText(
      "rb:pending-real",
    );
    await expect(page.getByTestId("f3-recommendation-card")).toBeVisible();
    await expect(page.getByTestId("f3-refresh-running-button")).toHaveCount(0);
    await capture(page, "03-terminal-evidence", "B3 terminal Evidence");

    await expect(page.getByTestId("living-project-state-panel")).toBeVisible();
    await capture(page, "04-post-evidence-lps", "B3 LPS after Evidence");

    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-assistant-empty")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("living-project-state-panel")).toBeVisible();
    await expect(page.getByTestId("project-history-panel")).toBeVisible();
    await capture(page, "05-reloaded-terminal", "B4 reload durable LPS");

    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    const campaign = {
      classification: [
        "UI-DRIVEN",
        "HARNESS-ARMED-BOUNDARY",
        "DOMAIN-INTEGRATION-PROVEN",
        "DETERMINISTIC PROVEN",
      ],
      banner: BANNER,
      projectId: created.projectId,
      decisionId,
      executionContractId,
      attemptId: attemptIdB1,
      note: "ZERO REAL — TEST BOUNDARY — not REAL proof",
    };
    fs.writeFileSync(
      path.join(CAPTURE_ROOT, "campaign-ids.json"),
      `${JSON.stringify(campaign, null, 2)}\n`,
    );
  });
});

```

## 24. Pourquoi c’est une boundary substitution

Le fake implémente `RealExecutionLaunchPort` (launch / observe / awaitCompletion) et est branché au **seul** seam qui construit le gateway REAL.
StartExecution, Gate D, completeBoundedReadOnlyLaunch, RecordExecutionResult, ingestEvidenceAndRecommend restent le produit.
Aucun second orchestrateur. Aucune route E2E spéciale de seed.

## 25. Preuve qu’il ne seede pas B1–B3

Le test d’orchestration unit appelle `prepareAndResolveM3ProductPath` + `confirmAndExecuteResolvedM3` trois fois.
Après confirm #1 : Attempt `running`, Evidence `ev:pending-real` (payload pending produit, pas un seed harness).
Après confirm #2 : même Attempt, toujours running, `reusedExistingAttempt=true`, launchCallCount=1.
Après confirm #3 : succeeded, Evidence `ev:m4-bounded-ro:…`, RB `rb:m4-bounded-ro:…`, Nora once, LPS rehydrate.
Frontiers : 1 CREATED, 1 LAUNCHED.
Fixture adapter launchCallCount=0.

Browser : Confirmation UI réelle → refresh UI réelle → Evidence/RB visibles. QA control n’a pas armé `attempt_failed` ni seed terminal.

## 26. Fail-closed env matrix

| Condition | Résultat |
|---|---|
| DETERMINISTIC=1 sans SFIA_STUDIO_E2E_QA_CONTROL | N8 refuse (undefined) |
| DETERMINISTIC=1 + SFIA_STUDIO_CURSOR_REAL=1 | N9 throw MUTUALLY EXCLUSIVE |
| NODE_ENV=production + tous flags TEST | N10 refuse (undefined) |
| QA_CONTROL + fake provider + dirty principal + DETERMINISTIC=1 + REAL unset | compose TestOnly port |
| Fixture Option A specs sans DETERMINISTIC | chemin fixture inchangé (17 Playwright PASS) |

## 27. IDs campagne browser tooling

Source : `screenshots/campaign-ids.json`

- Project : `prj:2e3321b2-00f8-4015-993c-335798a2b1ab`
- Decision : `dec:f2:e204bf65-c807-4da2-ad93-4725296c46ed`
- Contract : `xct:m3-res:dec:f2:e204bf65-c807-4da2-ad93-4725296c46ed`
- Attempt : `xat:m3:m3-res:dec:f2:e204bf65-c807-4da2-ad93-4725296c46ed`

DB isolée : `.tmp-sfia-review/deterministic-browser-boundary-tooling/runtime/qa-product.sqlite`
Port Next : 3021

## 28. Launch count

Unit/integration compose seam : **1**
Browser : même Attempt ID de B1 à B3 ; pas de second Confirmation ; bouton Relancer/Réessayer absent.
T-R3-ASYNC (inchangé) : launchCallCount=1, reusedExistingAttempt=true.

## 29. B1 / B2 / B3 / B4

Playwright `studio-option-a-deterministic-cursor-boundary.spec.ts` **PASS** (3.7s).

- B1 : Attempt running ; titre « Exécution en cours » ; « Actualiser le résultat » ; pas de Confirmation
- B2 : refresh ; même Attempt ID ; toujours running ; pas de nouveau confirm
- B3 : refresh terminal ; succeeded ; Evidence ID ≠ pending ; ReviewBundle ID ≠ pending ; recommandation Nora ; LPS
- B4 : reload ; project principal + LPS + history ; conversation process-local empty (`project-assistant-empty`). **Ne ferme pas G-UX-09.**

## 30. Negatives

- N1 : refresh absent avant Confirmation (spec tooling PASS)
- N2–N5 : specs Option A fixture existantes PASS (17 tests) — refresh absent sur fixture/terminal
- N6 : confirm disparaît après launch ; seul refresh
- N7 : aucun bouton Relancer / Réessayer / Confirmer l’exécution pendant running (le help text « sans la relancer » n’est pas une action)
- N8–N10 : unit PASS

## 31. Evidence / ReviewBundle / Nora / LPS

Unit : Evidence `ev:m4-bounded-ro:…` available ; RB `rb:m4-bounded-ro:…` draft ; Nora `completeCalls.length=1` ; rehydrate LPS contient Evidence+RB.
Browser B3/B4 : Evidence/RB cards + history « ce qui est réellement enregistré » + LPS v4 après terminal.

## 32. Screenshots + hashes

Dossier : `.tmp-sfia-review/deterministic-browser-boundary-tooling/screenshots/`
Label overlay : `DETERMINISTIC / TEST BOUNDARY — ZERO REAL — not REAL proof`
Classification : UI-DRIVEN / HARNESS-ARMED-BOUNDARY / DOMAIN-INTEGRATION-PROVEN / DETERMINISTIC PROVEN

| Fichier | bytes | SHA256 |
|---|---:|---|
| 01-running-refresh-available.png | 408901 | `08d5b62938e39c3061a904e6c565a3db4fec885be615fb60d8a99e63c1b4fdac` |
| 02-pending-same-attempt.png | 405774 | `7f09b4cfaa5bbf64562b528b61e7cd9d7a7da685941f8b1d61c61d982becbdc0` |
| 03-terminal-evidence.png | 484645 | `34044c3812cc464279dac5dd36028d04b8e8088d736a6f6f30c9c597152a1bfa` |
| 04-post-evidence-lps.png | 490660 | `a874d63d657cd27c07dca58e7301ae0373b224a41f08cdff0900e25623a5235d` |
| 05-reloaded-terminal.png | 310050 | `764ba0f08b2d158822f9b58820e7566f99687b015388fbfd13cd4d8bab376cab` |

Jamais « REAL proof ».

## 33. Targeted tests

ZERO REAL. Agrégat 9 files / 81 tests PASS puis +rename import path.

Inclut : runningAttemptRefresh.ui.test.tsx, presentationLabels, ProjectAssistantPanel, preM6 residual (T-R3-ASYNC), amend, qa-pre-m6-01 hardening + postGo, deterministicCursorBoundary, importBoundaries runtime.

## 34. Full Vitest

- Test Files : **193 passed | 13 skipped** (206)
- Tests : **1824 passed | 131 skipped** (1955)
- Failed : **0**
- Duration : 13.32s
- 13 fichiers skip : FinOps Postgres `describe.skip` si DATABASE_URL unset. Non bloquant.
  `commands/skip-classification.json`

Delta vs Cycle 9 (192/1817) : +1 fichier test / +7 tests du boundary.

## 35. typecheck / lint / build

| Commande | Exit |
|---|---|
| `npx tsc --noEmit` | 0 |
| `npm run lint` | 0 (0 warning / 0 error) |
| `npm run build` | 0 |

Build après arrêt Next. Aucun npm install. Aucun lockfile.

Playwright Option A existant sans DET flag : **17 passed**.

## 36. Candidate PRE/POST manifests

- PRE : 980 / `f34f41c3db0eef7e108514cfee7d78ba736c5717e0d5977b80069b3e77ce41ff`
- POST : 983 / `4633999fae3a7afb494f638623899726e7e10ebdfcc516d8e47792a6da4b331b`
- Drift autorisé : 4 fichiers adaptés + 3 fichiers créés (budget 7)
- unauthorized_count : **0**
- FAIL UNAUTHORIZED CANDIDATE DRIFT : non

## 37. Canonical Product DB PRE/POST

Path : `projects/sfia-studio/.sfia-exec/product/oa-product.sqlite`
SHA256 PRE = POST = `766405130d750cc0cf28595f7e95f77cdc510361c71cd1966ea3ac7c0ecd6ebd`
**byte-identical**

QA a utilisé DB isolée sous `.tmp-sfia-review/deterministic-browser-boundary-tooling/runtime/`.

## 38. Historical REAL worktree PRE/POST

Path : `projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_453ff36a-ac4b-459c-9d75-6f3-7dda85f19447a529bfe21555`
HEAD PRE = POST = `0d33478566627a9bf507d5a06323962d349308ee`
porcelain PRE = POST = vide
Nouveau REAL worktree : **0**

## 39. ZERO REAL proof

- SFIA_STUDIO_CURSOR_REAL unset
- OPS1_CURSOR_REAL unset
- OPS1_CONVERSATION_PROVIDER=fake
- OPENAI_API_KEY=sk-e2e-fake-not-a-real-key
- compose déterministe ne construit pas NodeCursorProcessRunner / StudioGitWorktreeWorkspace / SqliteRealLaunchSafetyJournal
- Cursor CLI command count : 0
- OpenAI LIVE : 0
- External Cursor process : 0
- Context projet campagne : « E2E TEST BOUNDARY — Cursor CLI not invoked. »

## 40. Realism gaps restants

- Aucun processus OS Cursor
- Aucun stdout/stderr CLI réel
- Aucun timing/panne OS réelle
- Aucun worktree git d’exécution créé par ce chemin
- `realProcessInvoked=true` est le contrat d’ACK du port, pas un process OS
- Disclosures produit existants (« REAL process ACK », chips conversation « M3 FIXTURE » / « AUCUNE EXÉCUTION RÉELLE ») restent le wording Cycle 8 — **non rouverts**. Le cartouche d’exécution Option A montre néanmoins running + Actualiser.
- Conversation process-local non durable (G-UX-09 ouvert)
- Full REAL product loop NOT PROVEN

## 41. Réserves

- Ce cycle prouve le **tooling**, pas le verdict formel Cycle 9 de toute la candidate.
- importBoundaries.test.ts vs HEAD mélange dirty Option A historique ; le delta de ce cycle est une ligne.
- B2 dépend d’un compteur d’observe TEST (default 2) — configurable, pas un scheduler produit.
- QA control n’a pas été étendu (budget) ; l’armement est l’env fail-closed.

## 42. Anti-claims

Même en PASS, ce pack ne déclare PAS :

- READY FOR REAL
- REAL BOUNDARY PROVEN
- END-TO-END REAL PROVEN
- FULL REAL PRODUCT LOOP PROVEN
- Pre-M6 COMPLETE
- M6 AUTHORIZED
- UAT READY
- production ready
- runtime v3 ADOPTED
- G-UX-11 CLOSED
- browser QA final PASS

Seul statut de sortie positif : **READY FOR CYCLE 9 DETERMINISTIC BROWSER QA**

## 43. Verdict

PASS —
DETERMINISTIC BROWSER PROOF TOOLING COMPLETED
FAKE CURSOR EXTERNAL BOUNDARY SUBSTITUTION VERIFIED
SAME PRODUCT ORCHESTRATION PRESERVED
RUNNING / REFRESH / TERMINAL STATES REPRODUCIBLE
SAME ATTEMPT / ONE LOGICAL LAUNCH PRESERVED
ZERO REAL
NO PRODUCT ARCHITECTURE EXPANSION
PRE-M6 REMAINS NON COMPLETE
RUNTIME V3 REMAINS NON ADOPTED
READY FOR CYCLE 9 DETERMINISTIC BROWSER QA
NOT READY FOR REAL

## 44. Capacité suivante

CYCLE 9 — DETERMINISTIC BROWSER QA — ZERO REAL

Morris GO/NO-GO requis. Ne pas lancer automatiquement. Ne pas lancer REAL.
