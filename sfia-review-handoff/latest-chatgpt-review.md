# SFIA STUDIO — Review Pack (FULL)
## STUDIO-P6-TOOL-FIRST-GENERIC-EXECUTION — PR READINESS LOT COMPLET R1/R2

**Horodatage (UTC):** 2026-10-17T20:03:27Z
**Cycle:** 13 — PR readiness — Critical
**Typologie:** EVOL / QA / GIT INTEGRATION READINESS
**GO Morris consommé:** GO — PR READINESS TOOL-FIRST (audit + validations + draft PR body + handoff). **Aucune** intégration Git Product. **Aucune** modification code Product ce cycle.

**Verdict proposé:**
`CONTENT READY — GIT INTEGRATION PENDING — MORRIS COMMIT GO REQUIRED`

Hors scope: READY TO OPEN PR · READY FOR REAL · HQA PASS · P6 PASS · Runtime v3 ADOPTED · Product Git Integrated · FULL CI PASS · REAL BOUNDARY PROVEN.

---

## 1. Git Truth

### Initial / Final (identique — cycle read-only Product)
```
toplevel: /private/tmp/sfia-tf-safety-r1r2
branch:   fix/sfia-studio-p6-tool-first-safety-r1r2
HEAD:     e03c7b9fd3665b89a4083a937b82424c5e7f6406
origin/main (local+remote): e03c7b9fd3665b89a4083a937b82424c5e7f6406
ahead/behind origin/main: 0 / 0
staged:   (vide)
git diff --check: OK
```

### Worktrees contaminés (non utilisés)
- `…-safety-r1r2` (Projects) → optional-artifact @ `b4c1d862`
- `…-execution-contract*` @ `b4c1d862`
Préservés. Travail exclusivement `/tmp/sfia-tf-safety-r1r2`.

### Handoffs de reconstitution
| SHA | Cycle |
|---|---|
| `8273adad…` | Tool-first simplification |
| `6d0f32da…` | Safety closure R1/R2 |
| `4657d2e1…` | R2 Start test correction |

---

## 2. Convergence Pre-check

| Item | État |
|---|---|
| Capacité | V3-F05 |
| Milestone | P6 |
| Runtime v3 | NON ADOPTED |
| REAL pathless non-mut | FAIL-CLOSED (R2 KEEP) |
| Trajectoire | PR readiness → ChatGPT → Morris commit → CI → HQA contrôlée |

### Actifs
Nora Tool KEEP/ADAPT · Generic PREPARE KEEP/ADAPT · Materiality ADAPT · EC OA KEEP · Inspection/Auth KEEP · Cursor Generalist KEEP · R2 Gate KEEP fail-closed · Evidence KEEP.

---

## 3. Inventaire tracked + untracked (lot Product)

**Nombre exact de fichiers du lot Product/test : 15**
(+ 1 artefact éphémère `.tmp-sfia-review/chatgpt-review.md` — hors lot Product, régénéré ce cycle)

| Statut | Fichier | Rôle |
|---|---|---|
| M | `…/orchestrateTurn.ts` | Wire `repositoryMutation` |
| M | `…/w2/resolveAuthoritativeProductMateriality.ts` | R1 positive claim |
| M | `…/w2/prepareGenericExecutionContractDraft.ts` | Pathless stamp / launch pin |
| A (??) | `…/w2/boundedNonMutatingRealLaunchGate.ts` | R2 gate |
| M | `…/w2/governedExecuteAuthorizedContract.ts` | R2 Select+Start |
| M | `…/productExecutionAgentsTools.ts` | Tool param |
| M | `…/ExecutionSurface.tsx` | Exécuter fold Confirm |
| M | `…/pilotExecutionPresentation.ts` | CTA execute |
| A (??) | `…/p6.toolFirst.executionContractSimplification.d0.test.ts` | A–J |
| A (??) | `…/p6.toolFirst.safetyClosureR1R2.d0.test.ts` | R1/R2 + Start |
| M | `…/p6.der16.genericNoraToolInvocation.d0.test.ts` | Oracle tool |
| M | `…/p5.s03.durableExecutionActionContinuity.ui.test.tsx` | UI |
| M | `…/p5.s03.executionReconcileContinuity.ui.test.tsx` | UI |
| M | `…/p5.s03.pilotExecutionPresentation.d0.test.ts` | UI oracle |
| M | `…/p6.r02.actionAvailability.d0.test.ts` | UI oracle |

**Fichiers manquants vs handoff :** aucun.
**Fichiers supplémentaires Product :** aucun (hors `.tmp-sfia-review`).
**Chemins interdits touchés :** aucun (`lib/oa/**`, doctrine, method, prompts, .github, scripts/sfia).

`git diff --stat` (tracked only, hors revue) ≈ 12 fichiers Product/test + review tmp ; **untracked 3** indispensables au lot.

---

## 4. Matrice de conformité (audit §4)

| Contrôle | Résultat | Preuve |
|---|---|---|
| Interfaces/imports cohérents | PASS | gate import + Select/Start wiring; typecheck PASS |
| Pas de moteur Generic parallèle | PASS | réutilise solicit/prepare/authorize/governedExecute |
| Invariants OA conservés | PASS | aucun touch lib/oa/** |
| Pas de HD systématique | PASS | G-D4 + tool-first A/B; HD structurel KEEP |
| CycleInstance facultatif | PASS | tool-first B/C |
| Artifact facultatif | PASS | pathless scopeIn=[] |
| Pas de faux chemin fichier | PASS | R1 pathless; no invented target |
| Inspect ≠ Execute | PASS | UI Inspect distinct; Exécuter post-attest |
| Pas de lancement avant clic | PASS | PREPARE crée EC only; Attempt at Select |
| Confirm serveur si requis | PASS | fold UI; confirmForAuthorization KEEP |
| Version/fingerprint | PASS | authorizeGenericPreparedContract binding |
| R1 claim positif | PASS | qualifyBounded… + safety suite |
| R2 REAL before effect | PASS | Select+Start exact code; TestOnly port 0 calls |
| Contrats structurels | PASS | M-HD suites PASS |
| Chemins protégés | PASS | aucun touch doctrine/oa/protected |
| Pas de dérive doc/archi | PASS | pas de modification convergence/framing |
| Pas de capacité REAL sans preuve | PASS | R2 fail-closed; GO REAL NON |

---

## 5. Validations (sélection locale — pas FULL CI)

| Commande / suite | Résultat |
|---|---|
| Lot batch 21 files | **288/288 PASS** |
| Tool-first A–J | 11 PASS |
| R1/R2 Safety | 5 PASS |
| G-D4 | 10 PASS |
| DER16 | 28 PASS |
| M-HD01/02 | 141 PASS (agrégé suites listées) |
| Materiality HQA / O1 / Select / UI / importBoundaries | inclus dans 288 |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `git diff --check` | PASS |
| Secrets scan lot | PASS (aucun pattern) |
| Full CI | **NON exécutée** |
| Cursor REAL | **NON lancé** |

---

## 6. Readiness

### A. CONTENT READINESS — **READY**
Lot cohérent, tests déterministes verts, gates R1/R2 prouvés, pas de moteur parallèle, OA non modifié.

### B. GIT READINESS — **NOT READY TO OPEN PR**
Branche `fix/sfia-studio-p6-tool-first-safety-r1r2` @ `e03c7b9` = `origin/main`, **0 commits ahead**, modifications **uncommitted**.
→ `CONTENT READY — GIT INTEGRATION PENDING`.

### C. GOVERNANCE READINESS — **READY WITH RESERVES**
Décisions Morris R1/R2 acceptables pour intégration **si** dette REAL no-write documentée et R2 conservé. Reprise HQA sous gates Fake d'abord ; REAL pathless non-mutatif reste bloqué.

---

## 7. Risques / réserves / dette

| Item | Niveau | Note |
|---|---|---|
| REAL no-write absent | Dette | R2 fail-closed jusqu'à GO architecture |
| Intégration non commitée | Gate | Morris COMMIT GO requis |
| Full CI non jouée | Réserve | à jouer après commit/PR |
| Contaminated WTs locaux | Ops | ne pas confondre avec `/tmp/sfia-tf-safety-r1r2` |

**Condition de sortie dette REAL :** capacité no-write enforceable (sandbox ou agent RO Product-bound) + GO Morris distinct + preuve Bounded REAL.

---

## 8. Draft PR body (non publié)

```markdown
## Summary

Close the HQA Generic Execution gap that blocked ordinary pathless analysis at PREPARE, while preserving governed Inspect → Exécuter and fail-closed Cursor REAL for non-mutating pathless missions.

- **Tool-first ordinary path:** Nora `request_generic_execution_prepare` → Product PREPARE without systematic HumanDecision / mandatory CycleInstance / mandatory Artifact / invented file path; contract remains inspectable; Pilot **Exécuter** folds server Confirm (when required) after inspection attestation — Inspect ≠ Execute preserved.
- **R1:** Pathless `NON_STRUCTURAL` requires a **positive** structured non-mutating claim (`intentKind=read_only` **or** `repositoryMutationDeclared ∈ {none,read}`). Absent / unknown / write / docs_write / elevated / structural → fail-closed.
- **R2:** Cursor REAL generalist has no technical no-write sandbox. Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` refuses Select **and** Start (valid Attempt) when REAL is armed for pathless non-mutating contracts. Fake/DET remains admissible. Ordinary write contracts unchanged.

## Context (HQA)

HQA pathless analysis previously failed closed as `MATERIALITY_UNKNOWN` (no concrete WHERE). Operators were pushed into framing / HD / artificial documentary paths. This lot restores the ordinary Nora→Cursor governed path under Product authority.

## Root causes

1. Materiality treated empty scope / absent mutation as insufficient **without** a positive non-mutating qualification path (then over-admitted on absence — fixed by R1).
2. Contract could stamp `NO_REPOSITORY_MUTATION_*` without REAL launch enforcement (fixed by R2 fail-closed Option B).
3. UX required a separate Confirmer CTA for ordinary missions after inspect (folded into Exécuter; server confirm retained).

## Test plan

- [x] Tool-first A–J (`p6.toolFirst.executionContractSimplification.d0.test.ts`)
- [x] R1/R2 safety closure including Start on valid Attempt + exact R2 code (`p6.toolFirst.safetyClosureR1R2.d0.test.ts`)
- [x] G-D4, D-ER-16…19, M-HD01/02, materiality HQA, inspection Select, project-scoped Cursor Select, O1 continuity
- [x] UI: durable/reconcile continuity, pilotExecutionPresentation, R02 action availability
- [x] Import boundaries
- [x] `npm run typecheck` / `lint` / `build`
- [ ] Full CI on PR (not claimed locally)
- [ ] Cursor REAL (GO REAL = NON; pathless non-mutating intentionally blocked)

## Limitations / debt

- **REAL no-write enforcement** on generalist remains absent (`--sandbox disabled`). Pathless non-mutating REAL launch is **Product fail-closed** until a distinct Morris architecture GO (sandbox or Product-bound RO agent).
- Fake/DET ≠ REAL BOUNDARY PROVEN. HQA PASS / P6 PASS / Runtime v3 ADOPTED **not** claimed.

## Integration conditions

1. ChatGPT review of this PR-readiness pack.
2. Morris **commit GO** on worktree `/tmp/sfia-tf-safety-r1r2` branch `fix/sfia-studio-p6-tool-first-safety-r1r2` (currently uncommitted vs `e03c7b9`).
3. Open PR to `main` only after commits exist and CI is green.
4. Do **not** lift R2 gate without architecture decision.

## Post-merge HQA resume conditions

- Re-run Generic Execution HQA under Fake/DET first.
- Pathless non-mutating REAL remains blocked by R2 until no-write enforceable.
- Structural / protected-path / HD paths must remain green.

```

---

## 9. Gates Morris restants

1. Revue ChatGPT de ce pack PR readiness.
2. **COMMIT GO** Product (puis push branche + PR) — cycle Git distinct.
3. CI verte.
4. (Plus tard) GO architecture REAL no-write si besoin HQA REAL pathless.
5. Reprise HQA contrôlée post-merge.

---

## 10. Verdict

**CONTENT READY — GIT INTEGRATION PENDING — MORRIS COMMIT GO REQUIRED**

---

## 11. Contenu exploitable — NOUVEAUX FICHIERS (complets)

### 11.a boundedNonMutatingRealLaunchGate.ts

```typescript
/**
 * R2 — Tool-first safety closure: pathless non-mutating missions vs Cursor REAL.
 *
 * Product may stamp NO_REPOSITORY_MUTATION_* on a bounded analysis EC.
 * Cursor REAL generalist currently launches with `--sandbox disabled --force`
 * (full write capability) — a contract string / prompt is NOT enforcement.
 *
 * M4 bounded read-only (`cap:cursor.read_only`) exists but is a distinct
 * agent/action/target/scope — reusing it for Product generalist would be a
 * new architecture (Morris GO required). Until then: fail-closed at Product
 * Select/Start when REAL is armed for these contracts.
 *
 * Fake/DET (SFIA_STUDIO_CURSOR_REAL ≠ "1") remains admissible.
 */

import type { ExecutionContract } from "@/lib/oa/execution-contract";

export const BOUNDED_NON_MUTATING_REAL_BLOCK_CODE =
  "BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE" as const;

export function isBoundedPathlessNonMutatingContract(
  contract: ExecutionContract,
): boolean {
  const constraints = contract.constraints ?? [];
  const stops = contract.stopConditions ?? [];
  const inputs =
    contract.inputs && typeof contract.inputs === "object"
      ? (contract.inputs as Record<string, unknown>)
      : null;
  const stamped =
    inputs?.boundedNonMutatingAnalysis === true ||
    constraints.includes("MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED") ||
    stops.includes("NO_REPOSITORY_MUTATION_FOR_BOUNDED_ANALYSIS");
  if (!stamped) return false;
  const scopeIn = Array.isArray(inputs?.scopeIn) ? inputs!.scopeIn : [];
  const concrete = scopeIn.filter(
    (p) => typeof p === "string" && p.trim().length > 0 && !p.includes(" "),
  );
  return concrete.length === 0;
}

/**
 * When REAL Cursor is armed, pathless non-mutating ECs cannot launch —
 * no technical no-write enforcement exists on the generalist REAL boundary.
 */
export function assertBoundedNonMutatingCursorRealAdmissible(
  contract: ExecutionContract,
):
  | { readonly ok: true }
  | {
      readonly ok: false;
      readonly code: typeof BOUNDED_NON_MUTATING_REAL_BLOCK_CODE;
      readonly message: string;
    } {
  if (!isBoundedPathlessNonMutatingContract(contract)) {
    return { ok: true };
  }
  if (process.env.SFIA_STUDIO_CURSOR_REAL !== "1") {
    return { ok: true };
  }
  return {
    ok: false,
    code: BOUNDED_NON_MUTATING_REAL_BLOCK_CODE,
    message:
      "Mission pathless non mutative : la frontière Cursor REAL généraliste " +
      "n'applique pas de sandbox no-write technique (--sandbox disabled). " +
      "Lancement REAL refusé avant Select/Start — aucun effet. " +
      "Fake/DET reste admissible ; enforcement REAL requiert un GO Morris " +
      "(capacité read-only enforceable ou sandbox).",
  };
}

```

### 11.b p6.toolFirst.executionContractSimplification.d0.test.ts

```typescript
/**
 * STUDIO-P6-GENERIC-EXECUTION-TOOL-FIRST-SIMPLIFICATION-01
 *
 * Deterministic Product end-to-end (Fake Cursor / Fake provider boundaries):
 * Nora tool / solicit → Product PREPARE → OA EC → inspect → authorize →
 * Select/Start → Evidence continuity.
 *
 * Scenarios A–J. ZERO Cursor REAL. PREPARE ≠ AUTHORIZE ≠ EXECUTE.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { qualifyBoundedNonMutatingAnalysisMission } from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { settleDeterministicProductCursorSuccess } from "./w2Harness";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

/** Oracle — CPM earliest-finish critical path for planning A–H (CAS A). */
function criticalPathOracleAtoH(): {
  durationDays: number;
  path: readonly string[];
} {
  const tasks: Record<string, { d: number; preds: string[] }> = {
    A: { d: 2, preds: [] },
    B: { d: 4, preds: ["A"] },
    C: { d: 3, preds: ["A"] },
    D: { d: 5, preds: ["C"] },
    E: { d: 4, preds: ["B", "D"] },
    F: { d: 2, preds: ["C"] },
    G: { d: 3, preds: ["E", "F"] },
    H: { d: 1, preds: ["G"] },
  };
  const es: Record<string, number> = {};
  const ef: Record<string, number> = {};
  const order = ["A", "B", "C", "D", "E", "F", "G", "H"];
  for (const id of order) {
    const t = tasks[id]!;
    const start = t.preds.reduce((m, p) => Math.max(m, ef[p] ?? 0), 0);
    es[id] = start;
    ef[id] = start + t.d;
  }
  const durationDays = ef.H!;
  // Backward pass for critical path (float = 0).
  const lf: Record<string, number> = { H: durationDays };
  const ls: Record<string, number> = { H: durationDays - tasks.H!.d };
  for (const id of [...order].reverse()) {
    for (const p of tasks[id]!.preds) {
      const cand = ls[id]!;
      lf[p] = lf[p] == null ? cand : Math.min(lf[p]!, cand);
      ls[p] = lf[p]! - tasks[p]!.d;
    }
  }
  const critical = order.filter((id) => ls[id] === es[id]);
  return { durationDays, path: critical };
}

const PLANNING_SCOPE = [
  "A 2j sans dépendance",
  "B 4j après A",
  "C 3j après A",
  "D 5j après C",
  "E 4j après B et D",
  "F 2j après C",
  "G 3j après E et F",
  "H 1j après G",
].join("; ");

describe("P6 tool-first Generic Execution contract simplification A–J", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    resetPendingGenericPrepareOfferStoreForTests();
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-tool-first.sqlite"),
      idPrefix: "tf01",
    });
  });

  afterEach(() => {
    resetPendingGenericPrepareOfferStoreForTests();
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
  });

  async function seedProject(input: {
    suffix: string;
    withCycle: boolean;
    framingCycle?: boolean;
  }) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `TF ${input.suffix}`,
      objective: "Tool-first simplification",
      context: "det tool-first",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `TF${input.suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:tf-${input.suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });

    let cycleInstanceId: string | null = null;
    if (input.withCycle) {
      cycleInstanceId = `cyc:tf-${input.suffix}`;
      await oa.cycleServices.createCycle.execute({
        cycleInstanceId,
        cycleTypeId: input.framingCycle ? "cyc:framing" : "cyc:delivery",
        projectId,
        signals: { lowRiskBounded: true },
        createdBy: {
          actorId: "actor:nora-f2",
          role: "agent",
          displayName: "Nora F2",
          authorityLevel: "N1",
        },
        linkAsActiveCycle: false,
      });
      const auth = registerLocalPiloteAuthority({
        authorityResolver: oa.authorityResolver,
        scope: `pilot-lifecycle:${cycleInstanceId}`,
        issuedAt: "2026-10-17T10:00:00.000Z",
        forceEnable: true,
      });
      if (!auth.ok) throw new Error("auth");
      const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps1.ok) throw new Error("lps1");
      const started = await oa.cycleServices.pilotLifecycle.start({
        cycleInstanceId,
        projectId,
        createdBy: {
          actorId: LOCAL_PILOTE_ACTOR.actorId,
          role: LOCAL_PILOTE_ACTOR.role,
          displayName: LOCAL_PILOTE_ACTOR.displayName,
          authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
        },
        authorityEvidenceId: auth.evidenceId,
        expectedLpsVersion: lps1.livingProjectState.version,
      });
      if (!started.ok) throw new Error("start");
    }

    const identity = `acme/tf-${input.suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, cycleInstanceId, oa };
  }

  async function countAttempts(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    const contracts =
      await oa.executionContractServices.contracts.listByProject(projectId);
    let total = 0;
    for (const c of contracts) {
      total += (
        await oa.executionAttemptServices!.attempts.listByContract(
          c.executionContractId,
        )
      ).length;
    }
    return total;
  }

  it("unit — pathless analysis qualifies only with positive non-mutating claim", () => {
    const analysis = buildIntentAnalysisFromSolicitedMission({
      objective: "Calculer le chemin critique du planning A–H",
      expectedOutcome: "Durée minimale et chemin critique",
      scope: PLANNING_SCOPE,
      repositoryMutation: "none",
    });
    const ok = qualifyBoundedNonMutatingAnalysisMission({
      analysis,
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: false,
    });
    expect(ok.ok).toBe(true);

    // R1 — absence is NOT a positive claim.
    const absent = qualifyBoundedNonMutatingAnalysisMission({
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Calculer le chemin critique",
        expectedOutcome: "18 jours",
        scope: PLANNING_SCOPE,
      }),
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: false,
    });
    expect(absent.ok).toBe(false);
    expect(absent.basis).toBe("repository_mutation_claim_absent");

    const unknown = qualifyBoundedNonMutatingAnalysisMission({
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Calculer le chemin critique",
        expectedOutcome: "18 jours",
        scope: PLANNING_SCOPE,
        repositoryMutation: "unknown",
      }),
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: false,
    });
    expect(unknown.ok).toBe(false);
    expect(unknown.basis).toBe("repository_mutation_unknown");

    const write = qualifyBoundedNonMutatingAnalysisMission({
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Écrire une note",
        expectedOutcome: "note.md",
        scope: "livrable documentaire",
        repositoryMutation: "write",
      }),
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: true,
    });
    expect(write.ok).toBe(false);
  });

  it("CAS A — pathless analysis PREPARE → inspect → authorize → Select/Start; oracle 18j", async () => {
    const oracle = criticalPathOracleAtoH();
    expect(oracle.durationDays).toBe(18);
    expect(oracle.path).toEqual(["A", "C", "D", "E", "G", "H"]);

    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "a",
      withCycle: false,
    });
    const decisionsBefore =
      await oa.decisionServices.decisions.listByProject(projectId);

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective:
          "Calculer le chemin critique de ce planning A–H (analyse sans écriture fichier)",
        expectedOutcome: `Durée minimale ${oracle.durationDays} jours ; chemin critique ${oracle.path.join(" → ")}`,
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
        contextNotes: "Mission d'analyse conversationnelle — aucune mutation repo.",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.materiality).toBe("non_structural");
    expect(await countAttempts(oa, projectId)).toBe(0);

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");
    expect(loaded.contract.constraints).toContain(
      "MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED",
    );
    expect(loaded.contract.constraints).toContain(
      "NO_INVENTED_DOCUMENTARY_OR_GIT_TARGET",
    );
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.boundedNonMutatingAnalysis).toBe(true);
    expect(inputs.resolvedAuthoritativeTargetPath ?? null).toBeNull();
    expect(inputs.targetPath ?? null).toBeNull();
    const scopeIn = Array.isArray(inputs.scopeIn) ? inputs.scopeIn : [];
    expect(scopeIn).toEqual([]);
    expect(await countAttempts(oa, projectId)).toBe(0);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: loaded.contract.version,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);

    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) throw new Error(authorized.message);
    expect(authorized.executionAttemptCreated).toBe(false);
    expect(authorized.humanDecisionCreated).toBe(false);

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);

    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.message);

    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId: started.attemptId,
    });
    expect(settled.ok).toBe(true);
    if (!settled.ok) throw new Error(settled.message);
    expect(settled.attempt.status).toBe("succeeded");

    const decisionsAfter =
      await oa.decisionServices.decisions.listByProject(projectId);
    expect(decisionsAfter.length).toBe(decisionsBefore.length);
    void cycleInstanceId;
  });

  it("CAS B — same pathless mission without CycleInstance; no artificial cycle", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "b",
      withCycle: false,
    });
    const cyclesBefore = (await oa.cycleServices.cycles.listByProject(projectId))
      .length;
    expect(cyclesBefore).toBe(0);

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique A–H",
        expectedOutcome: "18 jours ; A→C→D→E→G→H",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.projectContextOnly).toBe(true);
    expect(prep.cycleInstanceId).toBeNull();
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
  });

  it("CAS C — active framing cycle retained; no parasitic NEW_CYCLE prepare diversion", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "c",
      withCycle: true,
      framingCycle: true,
    });
    expect(cycleInstanceId).toBeTruthy();
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId,
      mission: {
        objective: "Calculer le chemin critique A–H dans le cycle de cadrage",
        expectedOutcome: "18 jours ; A→C→D→E→G→H",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.cycleInstanceId).toBe(cycleInstanceId);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.cycleInstanceId).toBe(cycleInstanceId);
    // Cycle still active — not replaced.
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    expect(lps.livingProjectState.activeCycleInstanceId).toBe(cycleInstanceId);
  });

  it("CAS D — git read of existing path keeps repositoryBinding / pathRoot", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "d",
      withCycle: false,
    });
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Analyser projects/demo/src/schedule.ts",
        expectedOutcome: "Résumé des dépendances du fichier",
        scope: "projects/demo/src/schedule.ts",
        repositoryMutation: "read",
      }),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // With concrete path, path-bound materiality applies (may need scopeIn on analysis).
    const analysisWithPath = {
      ...buildIntentAnalysisFromSolicitedMission({
        objective: "Analyser projects/demo/src/schedule.ts",
        expectedOutcome: "Résumé des dépendances du fichier",
        scope: "projects/demo/src/schedule.ts",
        repositoryMutation: "read",
      }),
      executionIntent: {
        intentKind: "read_only" as const,
        scopeIn: ["projects/demo/src/schedule.ts"],
        scopeOut: [],
        expectedOutputs: ["Résumé des dépendances du fichier"],
        requiredCapabilities: [],
      },
    };
    const prep2 = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: analysisWithPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep2.ok).toBe(true);
    if (!prep2.ok) throw new Error(prep2.message);
    expect(prep2.materiality.materiality).toBe("non_structural");
    const inputs = prep2.contract.inputs as Record<string, unknown>;
    expect(inputs.pathRoot).toBe("projects/demo");
    expect(inputs.scopeIn).toEqual(["projects/demo/src/schedule.ts"]);
    void prep;
  });

  it("CAS E — ordinary write prepare names files/effects; no Attempt before authorize", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "e",
      withCycle: false,
    });
    const analysis = {
      ...buildIntentAnalysisFromSolicitedMission({
        objective: "Corriger le tri dans projects/demo/src/sort.ts",
        expectedOutcome: "Tests verts sur le tri",
        scope: "projects/demo/src/sort.ts",
        repositoryMutation: "write",
      }),
      executionIntent: {
        intentKind: "other" as const,
        scopeIn: ["projects/demo/src/sort.ts"],
        scopeOut: [],
        expectedOutputs: ["projects/demo/src/sort.ts"],
        requiredCapabilities: [],
      },
    };
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(await countAttempts(oa, projectId)).toBe(0);
    const inputs = prep.contract.inputs as Record<string, unknown>;
    expect(inputs.scopeIn).toEqual(["projects/demo/src/sort.ts"]);
  });

  it("CAS F — protected / structural remains blocking via Nora tool path", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "f",
      withCycle: false,
    });
    // Prefer a known Product-protected path; fall back to structural signals alone.
    const candidates = [
      ".env",
      "secrets/token",
      "projects/sfia-studio/sfia-v3-framing/30-overview.md",
      "projects/demo/.git/config",
    ];
    const protectedPath =
      candidates.find((p) => Boolean(classifyStudioProductProtectedPath(p))) ??
      null;

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: {
        ...buildIntentAnalysisFromSolicitedMission({
          objective: "Modifier une zone structurelle / protégée",
          expectedOutcome: "Changement structurel appliqué",
          scope: protectedPath ?? "architecture runtime v3",
        }),
        signals: {
          structuralChange: true,
          securityImpact: true,
          architectureImpact: true,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
        executionIntent: {
          intentKind: "other",
          scopeIn: protectedPath ? [protectedPath] : [],
          scopeOut: [],
          expectedOutputs: [],
          requiredCapabilities: ["cap:elevated.admin"],
        },
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected block");
    expect(
      prep.code === "STRUCTURAL_HUMAN_DECISION_REQUIRED" ||
        prep.code === "MATERIALITY_UNKNOWN" ||
        prep.code === "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE",
    ).toBe(true);
  });

  it("CAS G — stale version after inspect refuses authorize", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "g",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);

    const stale = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion + 1,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(stale.ok).toBe(false);
    if (stale.ok) throw new Error("expected stale");
    expect(stale.code).toBe("VERSION_MISMATCH");
  });

  it("CAS H — concurrent second Select does not duplicate Attempt when first accepted", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "h",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(authorized.message);

    const s1 = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(s1.ok).toBe(true);
    if (!s1.ok) throw new Error(s1.message);
    const s2 = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    // Second select must not invent a second concurrent Attempt identity —
    // either reuse / terminal / fail-closed; never silent duplicate launch.
    expect(s2.ok).toBe(true);
    if (!s2.ok) throw new Error(s2.message);
    expect(s2.attemptId).toBe(s1.attemptId);
    expect(await countAttempts(oa, projectId)).toBe(1);
  });

  it("CAS I — reload durable contract; no invented authorization; reinspect required after clear attestation path", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "i",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    // Reload without inspect → authorize refused.
    const blocked = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: 1,
      expectedSemanticFingerprint: "not-inspected",
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) throw new Error("expected block");
    expect(
      blocked.code === "INSPECTION_REQUIRED" ||
        blocked.code === "VERSION_MISMATCH" ||
        blocked.code === "FINGERPRINT_MISMATCH" ||
        blocked.code === "INSPECTION_INSUFFICIENT",
    ).toBe(true);
  });

  it("CAS J — after deterministic succeed, Attempt succeeded and EC reloadable", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "j",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(authorized.message);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error(selected.message);
    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    if (!started.ok) throw new Error(started.message);
    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId: started.attemptId,
    });
    expect(settled.ok).toBe(true);
    if (!settled.ok) throw new Error(settled.message);
    expect(settled.attempt.status).toBe("succeeded");

    const reloaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(reloaded.ok).toBe(true);
    if (!reloaded.ok) throw new Error("reload");
    expect(reloaded.contract.executionContractId).toBe(prep.executionContractId);
  });
});

```

### 11.c p6.toolFirst.safetyClosureR1R2.d0.test.ts

```typescript
/**
 * TOOL-FIRST SAFETY CLOSURE R1/R2
 *
 * R1 — positive non-mutating claim required for pathless NON_STRUCTURAL.
 * R2 — Cursor REAL generalist has no no-write sandbox → fail-closed before Select.
 *
 * Fake DET (CURSOR_REAL≠1) remains admissible for pathless non-mutating.
 * ZERO Cursor REAL effects in this suite.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { qualifyBoundedNonMutatingAnalysisMission } from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import {
  assertBoundedNonMutatingCursorRealAdmissible,
  BOUNDED_NON_MUTATING_REAL_BLOCK_CODE,
  isBoundedPathlessNonMutatingContract,
} from "@/features/project-assistant/w2/boundedNonMutatingRealLaunchGate";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

const PLANNING_SCOPE =
  "A 2j; B 4j après A; C 3j après A; D 5j après C; E 4j après B et D; F 2j après C; G 3j après E et F; H 1j après G";

describe("P6 tool-first safety closure R1/R2", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousCursorReal: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousCursorReal = process.env.SFIA_STUDIO_CURSOR_REAL;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    resetPendingGenericPrepareOfferStoreForTests();
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-tf-r1r2.sqlite"),
      idPrefix: "r12",
    });
  });

  afterEach(() => {
    resetPendingGenericPrepareOfferStoreForTests();
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_CURSOR_REAL", previousCursorReal);
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `R12 ${suffix}`,
      objective: "Safety closure R1/R2",
      context: "det r1r2",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `R1${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:r12-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const identity = `acme/r12-${suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  async function countAttempts(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    const contracts =
      await oa.executionContractServices.contracts.listByProject(projectId);
    let total = 0;
    for (const c of contracts) {
      total += (
        await oa.executionAttemptServices!.attempts.listByContract(
          c.executionContractId,
        )
      ).length;
    }
    return total;
  }

  // ---------------------------------------------------------------------------
  // R1
  // ---------------------------------------------------------------------------

  it("R1+ — explicit none → PREPARE NON_STRUCTURAL, no HD, no Attempt, no fake path", async () => {
    const { projectId, oa } = await seedProject("r1p");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique A–H",
        expectedOutcome: "18 jours ; A→C→D→E→G→H",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.materiality).toBe("non_structural");
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(await countAttempts(oa, projectId)).toBe(0);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.boundedNonMutatingAnalysis).toBe(true);
    expect(inputs.targetPath ?? null).toBeNull();
    expect(inputs.scopeIn).toEqual([]);
  });

  it("R1− — repositoryMutation absent → MATERIALITY_UNKNOWN (no silent NON_STRUCTURAL)", async () => {
    const { projectId, oa } = await seedProject("r1a");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique A–H",
        expectedOutcome: "18 jours",
        scope: PLANNING_SCOPE,
        // no repositoryMutation
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected block");
    expect(prep.code).toBe("MATERIALITY_UNKNOWN");
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("R1− — unknown / write / docs_write / elevated / structural blocked", async () => {
    const { projectId, oa } = await seedProject("r1n");

    const unk = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse",
        expectedOutcome: "Résultat",
        scope: PLANNING_SCOPE,
        repositoryMutation: "unknown",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(unk.ok).toBe(false);
    if (!unk.ok) expect(unk.code).toBe("MATERIALITY_UNKNOWN");

    const write = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Modifier le dépôt",
        expectedOutcome: "Fichiers changés",
        scope: PLANNING_SCOPE,
        repositoryMutation: "write",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(write.ok).toBe(false);

    const elevated = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: {
        ...buildIntentAnalysisFromSolicitedMission({
          objective: "Opération admin",
          expectedOutcome: "Done",
          scope: PLANNING_SCOPE,
          repositoryMutation: "none",
        }),
        executionIntent: {
          intentKind: "read_only",
          scopeIn: [],
          scopeOut: [],
          expectedOutputs: [],
          requiredCapabilities: ["cap:elevated.admin"],
        },
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(elevated.ok).toBe(false);
    if (!elevated.ok) {
      expect(elevated.code).toBe("CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE");
    }

    const structural = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Changement structurel",
        expectedOutcome: "Architecture modifiée",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
        impactSignals: { structuralChange: true, architectureImpact: true },
      }),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(structural.ok).toBe(false);
    if (!structural.ok) {
      expect(structural.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
    }

    // Nora model claim alone (read_only without Product-verified coherence) —
    // docs_write intent contradicts non-mutating.
    const disguised = qualifyBoundedNonMutatingAnalysisMission({
      analysis: {
        ...buildIntentAnalysisFromSolicitedMission({
          objective: "Rédiger un livrable",
          expectedOutcome: "note.md",
          scope: "document",
          repositoryMutation: "none",
        }),
        executionIntent: {
          intentKind: "docs_write",
          scopeIn: [],
          scopeOut: [],
          expectedOutputs: ["note.md"],
          requiredCapabilities: [],
        },
      },
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: false,
    });
    expect(disguised.ok).toBe(false);
    expect(disguised.basis).toBe("intent_kind_docs_write");
  });

  // ---------------------------------------------------------------------------
  // R2
  // ---------------------------------------------------------------------------

  it("R2 — Fake DET pathless non-mutating still Select/Start admissible", async () => {
    const { projectId, oa } = await seedProject("r2f");
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(isBoundedPathlessNonMutatingContract(loaded.contract)).toBe(true);
    expect(assertBoundedNonMutatingCursorRealAdmissible(loaded.contract).ok).toBe(
      true,
    );

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(authorized.message);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
  });

  it("R2 — REAL armed → Select refused BEFORE Attempt; Start refuses on valid Attempt with exact R2 code; ordinary write unaffected", async () => {
    const { projectId, oa } = await seedProject("r2r");

    // ZERO REAL harness guarantee: TestOnly launch port never spawns Cursor.
    const launchPort = oa.executionAttemptServices?.realBoundary?.launchPort;
    expect(launchPort).toBeInstanceOf(TestOnlyRealExecutionLaunchPort);
    const testOnlyPort = launchPort as TestOnlyRealExecutionLaunchPort;
    const launchCountAtEntry = testOnlyPort.launchCallCount;

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(authorized.message);

    // --- Select under REAL: refuse BEFORE any Attempt (existing assertion).
    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
    const beforeSelectBlock = await countAttempts(oa, projectId);
    const selectedBlocked = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selectedBlocked.ok).toBe(false);
    if (selectedBlocked.ok) throw new Error("expected REAL Select block");
    expect(selectedBlocked.code).toBe(BOUNDED_NON_MUTATING_REAL_BLOCK_CODE);
    expect(await countAttempts(oa, projectId)).toBe(beforeSelectBlock);
    expect(testOnlyPort.launchCallCount).toBe(launchCountAtEntry);

    // --- Select under Fake/DET: create a real accepted Attempt (no external launch).
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(typeof selected.attemptId).toBe("string");
    expect(selected.attemptId.length).toBeGreaterThan(0);
    expect(selected.attemptId).not.toBe("xat:none");
    expect(selected.attemptStatus).toBe("accepted");
    expect(selected.realExecution).toBe(false);
    expect(testOnlyPort.launchCallCount).toBe(launchCountAtEntry);

    const attemptId = selected.attemptId;
    const loadedAttempt =
      await oa.executionAttemptServices!.getExecutionAttempt.execute({
        attemptId,
      });
    expect(loadedAttempt.ok).toBe(true);
    if (!loadedAttempt.ok) {
      throw new Error(
        `getExecutionAttempt failed: ${JSON.stringify(loadedAttempt.error)}`,
      );
    }
    expect(loadedAttempt.attempt.status).toBe("accepted");
    expect(loadedAttempt.attempt.executionContractId).toBe(
      prep.executionContractId,
    );

    const attemptsAfterSelect = await countAttempts(oa, projectId);
    expect(attemptsAfterSelect).toBe(beforeSelectBlock + 1);

    // --- Arm REAL, Start with the valid AttemptId: gate R2 exact code only.
    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
    const launchBeforeStart = testOnlyPort.launchCallCount;
    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(false);
    if (started.ok) throw new Error("expected REAL Start block");
    expect(started.code).toBe(BOUNDED_NON_MUTATING_REAL_BLOCK_CODE);

    // Attempt unchanged — not running; no extra Attempt; no launch ACK.
    const afterStart =
      await oa.executionAttemptServices!.getExecutionAttempt.execute({
        attemptId,
      });
    expect(afterStart.ok).toBe(true);
    if (!afterStart.ok) {
      throw new Error(
        `getExecutionAttempt after Start failed: ${JSON.stringify(afterStart.error)}`,
      );
    }
    expect(afterStart.attempt.status).toBe("accepted");
    expect(afterStart.attempt.status).not.toBe("running");
    expect(await countAttempts(oa, projectId)).toBe(attemptsAfterSelect);
    expect(testOnlyPort.launchCallCount).toBe(launchBeforeStart);
    expect(testOnlyPort.calls.length).toBe(0);

    // Ordinary write mission with concrete paths is NOT blocked by this gate.
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    const writePrep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: {
        ...buildIntentAnalysisFromSolicitedMission({
          objective: "Corriger projects/demo/src/sort.ts",
          expectedOutcome: "Tests verts",
          scope: "projects/demo/src/sort.ts",
          repositoryMutation: "write",
        }),
        executionIntent: {
          intentKind: "other",
          scopeIn: ["projects/demo/src/sort.ts"],
          scopeOut: [],
          expectedOutputs: ["projects/demo/src/sort.ts"],
          requiredCapabilities: [],
        },
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(writePrep.ok).toBe(true);
    if (!writePrep.ok) throw new Error(writePrep.message);
    expect(isBoundedPathlessNonMutatingContract(writePrep.contract)).toBe(false);
    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
    expect(
      assertBoundedNonMutatingCursorRealAdmissible(writePrep.contract).ok,
    ).toBe(true);
  });
});

```

---

## 12. Contenu exploitable — DIFFS TRACKED LOT (complets vs HEAD)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
index f411edfe..c9f0aeb9 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
@@ -194,7 +194,7 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     });
   });

-  it("E1 — fresh mount confirmation_required → Confirmer invokes confirm only", async () => {
+  it("E1 — fresh mount confirmation_required → Exécuter folds Confirm then Authorize+Execute", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection(),
@@ -202,6 +202,15 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     readCurrentContinuityMock.mockResolvedValue(
       activeCurrent({ status: "confirmation_required" }),
     );
+    confirmMock.mockResolvedValue({
+      ok: true,
+      executionContractId: "xct:cp01",
+      contractVersion: 1,
+      confirmationRef: "cfm:1",
+      statusLabel: "CONFIRMATION REQUISE — OBTENUE",
+      alreadyConfirmed: false,
+      executionPerformed: false,
+    });

     render(
       <ExecutionSurface
@@ -215,27 +224,28 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
         "À confirmer",
       );
     });
-    const confirmBtn = screen.getByTestId("project-execution-confirm");
-    expect(confirmBtn).toBeTruthy();
-    expect((confirmBtn as HTMLButtonElement).disabled).toBe(false);
-    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
+    // Tool-first: no separate Confirmer CTA — Exécuter folds Confirm after inspect.
+    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
+    const executeBtn = screen.getByTestId("project-execution-execute");
+    expect((executeBtn as HTMLButtonElement).disabled).toBe(false);

-    fireEvent.click(confirmBtn);
+    fireEvent.click(executeBtn);

     await waitFor(() => {
       expect(confirmMock).toHaveBeenCalledTimes(1);
+      expect(authorizeMock).toHaveBeenCalledTimes(1);
+      expect(
+        reconcileMock.mock.calls.some(
+          (call) => (call[0] as { intent?: string }).intent === "execute",
+        ),
+      ).toBe(true);
     });
     expect(confirmMock).toHaveBeenCalledWith({
       projectId: "prj:cp01",
       executionContractId: "xct:cp01",
     });
-    // R1 — Confirm must not record inspection as a side effect.
+    // R1 — Exécuter never records inspection as a side effect.
     expect(inspectMock).not.toHaveBeenCalled();
-    expect(reconcileMock).not.toHaveBeenCalled();
-    expect(authorizeMock).not.toHaveBeenCalled();
-    // Canonical reread after confirm (≥ initial load + post-confirm).
-    expect(deriveContinuityMock.mock.calls.length).toBeGreaterThanOrEqual(2);
-    expect(readCurrentContinuityMock.mock.calls.length).toBeGreaterThanOrEqual(2);
   });

   it("E2 — fresh mount confirmed → Exécuter authorizes then reconciles execute", async () => {
@@ -287,13 +297,16 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     );
   });

-  it("E3 — Confirmer never creates Attempt via reconcile execute", async () => {
+  it("E3 — without inspection sufficient, confirmation_required shows Inspect not Exécuter", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection(),
     });
     readCurrentContinuityMock.mockResolvedValue(
-      activeCurrent({ status: "confirmation_required" }),
+      activeCurrent({
+        status: "confirmation_required",
+        inspectionSufficient: false,
+      }),
     );

     render(
@@ -303,15 +316,11 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
       />,
     );
     await waitFor(() => {
-      expect(screen.getByTestId("project-execution-confirm")).toBeTruthy();
-    });
-    fireEvent.click(screen.getByTestId("project-execution-confirm"));
-    await waitFor(() => {
-      expect(confirmMock).toHaveBeenCalled();
+      expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
     });
-    expect(reconcileMock).not.toHaveBeenCalledWith(
-      expect.objectContaining({ intent: "execute" }),
-    );
+    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
+    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
+    expect(confirmMock).not.toHaveBeenCalled();
     expect(reconcileMock).not.toHaveBeenCalled();
   });

diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
index 9a645178..600c8414 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
@@ -561,7 +561,7 @@ describe("P5-S03 CP02 execution reconcile continuity", () => {
     expect(staleContinues).toHaveLength(0);
   });

-  it("CP01 regression — Confirmer never reconcile execute/continue", async () => {
+  it("CP01 regression — without inspection, confirmation_required shows Inspect (no silent execute)", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection({
@@ -576,6 +576,12 @@ describe("P5-S03 CP02 execution reconcile continuity", () => {
         status: "confirmation_required",
         effectConfirmationRequired: true,
       },
+      inspection: {
+        ...current.inspection,
+        inspectionSufficient: false,
+        attestationRef: null,
+        attestedVersion: null,
+      },
     });

     render(
@@ -583,13 +589,10 @@ describe("P5-S03 CP02 execution reconcile continuity", () => {
     );
     await flush(0);
     await flush(0);
-    expect(screen.getByTestId("project-execution-confirm")).toBeTruthy();
-
-    await act(async () => {
-      fireEvent.click(screen.getByTestId("project-execution-confirm"));
-      await vi.advanceTimersByTimeAsync(0);
-    });
-    expect(confirmMock).toHaveBeenCalled();
+    expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
+    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
+    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
+    expect(confirmMock).not.toHaveBeenCalled();
     expect(authorizeMock).not.toHaveBeenCalled();
     expect(reconcileMock).not.toHaveBeenCalled();
   });
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
index d99cb047..3327da36 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
@@ -153,7 +153,7 @@ describe("P5-S03 pilotExecutionPresentation", () => {
     expect(deriveExecutionTabBadge(view)).toBe(1);
   });

-  it("confirmation_required → À confirmer, no direct execute", () => {
+  it("confirmation_required → À confirmer; Exécuter folds Confirm (tool-first)", () => {
     const view = presentPilotExecution({
       continuityProjection: {
         ok: true,
@@ -168,9 +168,12 @@ describe("P5-S03 pilotExecutionPresentation", () => {
       }),
     });
     expect(view.status).toBe("a_confirmer");
-    expect(view.cta.kind).toBe("confirm");
-    expect(view.cta.kind === "confirm" && view.cta.enabled).toBe(true);
-    expect(view.cta.kind === "execute").toBe(false);
+    // Tool-first ordinary path: no separate Confirmer CTA — Exécuter carries
+    // confirm-then-authorize after inspection. Inspect ≠ Execute preserved.
+    expect(view.cta.kind).toBe("execute");
+    expect(view.cta.kind === "execute" && view.cta.enabled).toBe(true);
+    expect(view.cta.kind === "confirm").toBe(false);
+    expect(view.attentionNote).toMatch(/confirmation|Exécuter/i);
   });

   it("insufficient inspection → Inspect CTA (Confirm not enabled)", () => {
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
index 5fa9e4d2..73ba9f0a 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
@@ -179,7 +179,7 @@ describe("P6 R02 — action availability / currentness", () => {
     expect(view.cta.kind === "inspect" && view.cta.enabled).toBe(true);
   });

-  it("UI05 — active + inspection sufficient → Confirm enabled", () => {
+  it("UI05 — active + inspection sufficient → Exécuter folds Confirm (tool-first)", () => {
     const view = presentPilotExecution({
       continuityProjection: { ok: true, projection: baseProjection() },
       preExecutionContinuity: activePre({
@@ -187,8 +187,9 @@ describe("P6 R02 — action availability / currentness", () => {
         inspectionSufficient: true,
       }),
     });
-    expect(view.cta.kind).toBe("confirm");
-    expect(view.cta.kind === "confirm" && view.cta.enabled).toBe(true);
+    expect(view.cta.kind).toBe("execute");
+    expect(view.cta.kind === "execute" && view.cta.enabled).toBe(true);
+    expect(view.status).toBe("a_confirmer");
   });

   it("UI06 — fingerprint drift → reinspect, Confirm not enabled", () => {
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
index a26c6b72..d5e6b3f9 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
@@ -1697,7 +1697,14 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
         .parameters.properties,
     );
     expect(propKeys.sort()).toEqual(
-      ["contextNotes", "expectedOutcome", "impactSignals", "objective", "scope"].sort(),
+      [
+        "contextNotes",
+        "expectedOutcome",
+        "impactSignals",
+        "objective",
+        "repositoryMutation",
+        "scope",
+      ].sort(),
     );
     expect(propKeys.join(",")).not.toMatch(/decision|authority|hd/i);

diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
index 63695e06..34ef0684 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
@@ -521,13 +521,6 @@ export function ExecutionSurface({
         );
         return;
       }
-      if (active.contract.status === "confirmation_required") {
-        setError(
-          "Confirmation encore requise — Exécuter refuse d’agir.",
-        );
-        return;
-      }
-
       // Execute never records inspection as a side effect.
       if (!active.inspection.inspectionSufficient) {
         setError(
@@ -536,12 +529,43 @@ export function ExecutionSurface({
         return;
       }

+      // Tool-first / CR-P6-02 — one Pilot "Exécuter" gesture: Confirm (when
+      // required) then Authorize with exact binding to the inspected attestation.
+      // Inspect ≠ Confirm ≠ Authorize ≠ Execute remain distinct server acts.
+      let expectedVersion =
+        active.inspection.attestedVersion ?? active.contract.version;
+      let expectedSemanticFingerprint =
+        active.inspection.attestedSemanticFingerprint ||
+        active.inspection.semanticFingerprint ||
+        active.contract.semanticFingerprint ||
+        undefined;
+
+      if (active.contract.status === "confirmation_required") {
+        const confirmed = await w2ConfirmExecutionContractAction({
+          projectId,
+          executionContractId: active.contract.executionContractId,
+        });
+        if (!confirmed.ok) {
+          setError(confirmed.message);
+          await refreshExecutionContinuity();
+          return;
+        }
+        // Prefer attested binding; fall back to Confirm version bump when present.
+        expectedVersion =
+          active.inspection.attestedVersion ??
+          confirmed.contractVersion ??
+          expectedVersion;
+        expectedSemanticFingerprint =
+          active.inspection.attestedSemanticFingerprint ||
+          active.inspection.semanticFingerprint ||
+          expectedSemanticFingerprint;
+      }
+
       const auth = await w2AuthorizeExecutionContractAction({
         projectId,
         executionContractId: active.contract.executionContractId,
-        expectedVersion: active.contract.version,
-        expectedSemanticFingerprint:
-          active.contract.semanticFingerprint || undefined,
+        expectedVersion,
+        expectedSemanticFingerprint,
       });
       if (!auth.ok) {
         setError(auth.message);
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
index 2723e203..efc39460 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
@@ -652,13 +652,15 @@ export function presentPilotExecution(
       attentionNote =
         "Version ou empreinte modifiée — réexamen requis avant confirmation.";
     } else if (needsConfirm) {
+      // Tool-first ordinary path — one Pilot "Exécuter" gesture folds Confirm
+      // after inspection attestation (Trajectory CR-P6-02 pattern). Inspect ≠ Execute.
       cta = {
-        kind: "confirm",
-        label: "Confirmer",
+        kind: "execute",
+        label: "Exécuter",
         enabled: durableActionable && !busy,
       };
       attentionNote =
-        "Aucun effet ne sera produit tant que la confirmation n’est pas donnée.";
+        "Après inspection, Exécuter porte la confirmation de la version affichée puis l’autorisation — aucun effet avant ce clic.";
     } else if (!inspectionSufficient || !inspectionAlignedWithContract) {
       cta = {
         kind: "inspect",
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index a36e9bb0..68703ff4 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -551,6 +551,7 @@ export async function orchestrateProjectAssistantTurn(input: {
               expectedOutcome: args.expectedOutcome,
               scope: args.scope,
               contextNotes: args.contextNotes,
+              repositoryMutation: args.repositoryMutation,
               impactSignals: args.impactSignals,
             },
             sessionDbPath: input.sessionDbPath,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index f832fbb7..c6bbdfcb 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -64,6 +64,7 @@ import { advanceProductExecutionContractAfterEvidence } from "./advanceProductEx
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
 import { evaluateProductRealReadiness } from "./evaluateProductRealReadiness";
 import { resolveProductExecutionEligibility } from "./resolveProductExecutionEligibility";
+import { assertBoundedNonMutatingCursorRealAdmissible } from "./boundedNonMutatingRealLaunchGate";
 import type {
   GovernedExecuteAuthorizedContractResult,
   GovernedExecuteAttemptProjection,
@@ -775,6 +776,18 @@ export async function governedExecuteSelectAgent(
   const boundary = executionBoundaryFailure(input.oa, contract);
   if (boundary) return boundary;

+  // R2 — pathless non-mutating + REAL armed → refuse BEFORE Attempt/Select.
+  const realNonMutatingGate = assertBoundedNonMutatingCursorRealAdmissible(
+    contract,
+  );
+  if (!realNonMutatingGate.ok) {
+    return {
+      ok: false,
+      code: realNonMutatingGate.code,
+      message: realNonMutatingGate.message,
+    };
+  }
+
   const adapterId = adapterIdForContract(contract);
   const launchCountBefore = launchCountBeforeFor(input.oa, contract);

@@ -967,6 +980,18 @@ export async function governedExecuteStart(
   const boundary = executionBoundaryFailure(input.oa, contract);
   if (boundary) return boundary;

+  // R2 — defense in depth: refuse Start before any REAL effect.
+  const realNonMutatingGate = assertBoundedNonMutatingCursorRealAdmissible(
+    contract,
+  );
+  if (!realNonMutatingGate.ok) {
+    return {
+      ok: false,
+      code: realNonMutatingGate.code,
+      message: realNonMutatingGate.message,
+    };
+  }
+
   const adapterId = adapterIdForContract(contract);
   const launchCountBefore = launchCountBeforeFor(input.oa, contract);

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 995d5120..7c157e92 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -647,6 +647,9 @@ export async function prepareGenericExecutionContractDraft(
     projectId: input.projectId,
     analysis,
     cycleInstanceId: input.cycleInstanceId,
+    isDocumentaryWriteMission:
+      documentaryBind.kind === "resolved" ||
+      productDocumentaryTargetResolution === "resolved_product",
   });
   const materiality = materialityResolution.assessment;
   const hdRequired =
@@ -766,13 +769,17 @@ export async function prepareGenericExecutionContractDraft(
       ? [resolvedAuthoritativeTargetPath]
       : [expectedOutcome];

-  // D — source grounding / trusted launch when mission implies repository work.
+  // D — source grounding / trusted launch when mission implies repository work
+  // OR bounded pathless analysis (Cursor still needs Project binding — ≠ inventing
+  // a documentary/Git mission target; scopeIn stays empty).
   const impliesGit = missionImpliesRepositoryWork(analysis);
+  const needsLaunchContext =
+    impliesGit || materialityResolution.facts.boundedNonMutatingAnalysis === true;
   let launchInputs: Record<string, unknown> = {};
   let sourcesToRead: string[] = [];
   let sourceGroundingPayload: unknown = null;

-  if (impliesGit) {
+  if (needsLaunchContext) {
     const launch = await resolveTrustedProductLaunchContext({
       oa: input.oa,
       projectId: input.projectId,
@@ -789,6 +796,12 @@ export async function prepareGenericExecutionContractDraft(
     launchInputs = {
       ...launchContextAsContractInputs(launch.context),
       trustedLaunchContextPinnedAtPrepare: true,
+      ...(materialityResolution.facts.boundedNonMutatingAnalysis
+        ? {
+            launchContextForBoundedAnalysisOnly: true,
+            missionScopeInEmptyByDesign: true,
+          }
+        : {}),
     };
     // Declared READ sources only — mutation scopeIn is NOT a read claim
     // (search ≠ read). Empty declared → honesty NOT_APPLICABLE when no reader.
@@ -863,6 +876,9 @@ export async function prepareGenericExecutionContractDraft(
     "CONTEXT_STALE",
     "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
     "PROTECTED_PATH_GATES_REMAIN_APPLICABLE",
+    ...(materialityResolution.facts.boundedNonMutatingAnalysis
+      ? ["NO_REPOSITORY_MUTATION_FOR_BOUNDED_ANALYSIS"]
+      : []),
   ];
   const stopSeen = new Set<string>();
   const mergedStops = stopConditions.filter((s) => {
@@ -878,6 +894,8 @@ export async function prepareGenericExecutionContractDraft(
     ? [...sealedHdEffects.reservations]
     : [...(analysis.reservations ?? [])];

+  const boundedNonMutating =
+    materialityResolution.facts.boundedNonMutatingAnalysis === true;
   const constraints = [
     "PRODUCT_GOVERNED",
     "NO_ATTEMPT_AT_PREPARE",
@@ -887,6 +905,12 @@ export async function prepareGenericExecutionContractDraft(
     "CURSOR_DETERMINES_HOW",
     "GENERIC_MISSION_NO_TASK_CATALOG",
     materiality.constraintToken,
+    ...(boundedNonMutating
+      ? [
+          "MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED",
+          "NO_INVENTED_DOCUMENTARY_OR_GIT_TARGET",
+        ]
+      : []),
     ...outOfScope.map((s) => `OUT_OF_SCOPE:${s}`),
     ...sealedOrAnalysisRisks.map((s) => `RISK:${s}`),
     ...sealedOrAnalysisReservations.map((s) => `RESERVATION:${s}`),
@@ -959,8 +983,12 @@ export async function prepareGenericExecutionContractDraft(
       executionAttemptCreated: false,
       prepareStatus: "draft_inspectable",
       materialityFacts,
+      boundedNonMutatingAnalysis: boundedNonMutating,
+      repositoryMutationDeclared: boundedNonMutating ? "none" : null,
       // Intent fidelity — inspectable mission effects (Pass 02 / EC↔HD).
-      intentKind: stampedIntentKind,
+      intentKind: boundedNonMutating
+        ? stampedIntentKind ?? "read_only"
+        : stampedIntentKind,
       artifactType: stampedArtifactType,
       requestedOperation: stampedRequestedOperation,
       reversibilityExpectation: stampedRevExpectation,
@@ -1229,6 +1257,11 @@ export type SolicitGenericPrepareMissionFields = {
   readonly expectedOutcome?: string | null;
   readonly scope?: string | null;
   readonly contextNotes?: string | null;
+  /**
+   * Optional repository-mutation claim. Product verifies; "write" without paths
+   * stays fail-closed. "none"|"read" strengthens pathless non-mutating admission.
+   */
+  readonly repositoryMutation?: "none" | "read" | "write" | "unknown" | null;
   /** Conservative-only: a true flag can only make Product MORE cautious. */
   readonly impactSignals?: {
     readonly structuralChange?: boolean;
@@ -1258,7 +1291,8 @@ export function buildIntentAnalysisFromSolicitedMission(
     sig?.dataImpact === true ||
     sig?.irreversible === true;
   const notes = fields.contextNotes?.trim() || null;
-  return {
+  const mutation = fields.repositoryMutation ?? null;
+  const base: IntentAnalysisDto = {
     parseOk: true,
     intentClass: "execution_request",
     candidateCycleTypeId: null,
@@ -1284,8 +1318,29 @@ export function buildIntentAnalysisFromSolicitedMission(
     expectedOutcome,
     criticalJustification: null,
     requestedOperation: null,
-    executionIntent: null,
+    executionIntent:
+      mutation === "none" || mutation === "read"
+        ? ({
+            intentKind: "read_only",
+            scopeIn: [],
+            scopeOut: [],
+            expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
+            requiredCapabilities: [],
+          } as IntentAnalysisDto["executionIntent"])
+        : null,
   };
+  if (
+    mutation === "none" ||
+    mutation === "read" ||
+    mutation === "write" ||
+    mutation === "unknown"
+  ) {
+    return {
+      ...base,
+      repositoryMutationDeclared: mutation,
+    } as IntentAnalysisDto;
+  }
+  return base;
 }

 export type SolicitGenericExecutionPrepareInput = {
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
index 985ae3dd..cc28654c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
@@ -45,6 +45,8 @@ export type AuthoritativeMaterialityResolution = {
     readonly authorityEnvelopeBasis: string;
     readonly concreteMissionPaths: readonly string[];
     readonly pathsOutsidePathRoot: readonly string[];
+    readonly boundedNonMutatingAnalysis: boolean;
+    readonly boundedNonMutatingAnalysisBasis: string | null;
   };
   readonly productContextSufficient: boolean;
   readonly liveReadOk: boolean;
@@ -109,16 +111,133 @@ export function pathsOutsideAuthorizedPathRoot(input: {
   });
 }

+/**
+ * Product-owned bounded non-mutating analysis (tool-first ordinary mission).
+ *
+ * R1 safety closure — positive Product facts only:
+ * never keyword absence alone, never “pathless ⇒ safe”, never
+ * `repositoryMutation` absent/unknown as sufficient authority.
+ *
+ * Requires ALL of:
+ * - live Product context;
+ * - empty concrete WHERE (no invented documentary/Git target);
+ * - no structural / write / materialization contradiction;
+ * - generalist envelope only;
+ * - AND an explicit structured non-mutating claim:
+ *   `executionIntent.intentKind === "read_only"`
+ *   OR `repositoryMutationDeclared` ∈ {none, read}.
+ */
+export function qualifyBoundedNonMutatingAnalysisMission(input: {
+  readonly analysis: IntentAnalysisDto;
+  readonly liveOk: boolean;
+  readonly concretePaths: readonly string[];
+  readonly protectedPathHits: readonly string[];
+  readonly positiveStructuralSignal: boolean;
+  readonly requestedCapabilities: readonly string[];
+  readonly isDocumentaryWriteMission: boolean;
+}): { readonly ok: boolean; readonly basis: string } {
+  if (!input.liveOk) {
+    return { ok: false, basis: "live_lps_unavailable" };
+  }
+  if (input.concretePaths.length > 0) {
+    return { ok: false, basis: "concrete_paths_present_use_path_materiality" };
+  }
+  if (input.protectedPathHits.length > 0) {
+    return { ok: false, basis: "protected_path_hits" };
+  }
+  if (input.positiveStructuralSignal) {
+    return { ok: false, basis: "positive_structural_signal" };
+  }
+  if (input.isDocumentaryWriteMission) {
+    return { ok: false, basis: "documentary_write_mission" };
+  }
+  const ei = input.analysis.executionIntent;
+  const intentKind = ei?.intentKind?.trim() || null;
+  if (intentKind === "docs_write") {
+    return { ok: false, basis: "intent_kind_docs_write" };
+  }
+  const elevated = input.requestedCapabilities.filter(
+    (c) => c.trim().length > 0 && !isCapabilityWithinGenericPrepareEnvelope(c),
+  );
+  if (elevated.length > 0) {
+    return { ok: false, basis: "elevated_capabilities" };
+  }
+  if (
+    input.requestedCapabilities.some(
+      (c) => c.trim() === "cap:cursor.docs_write",
+    )
+  ) {
+    return { ok: false, basis: "docs_write_capability_proposed" };
+  }
+  const materialization = (
+    input.analysis as { artifactMaterializationOperation?: string | null }
+  ).artifactMaterializationOperation;
+  if (
+    typeof materialization === "string" &&
+    materialization.trim().length > 0
+  ) {
+    return { ok: false, basis: "artifact_materialization_operation" };
+  }
+  if (ei?.targetPath?.trim() || ei?.artifactFileName?.trim()) {
+    return { ok: false, basis: "write_target_candidate_present" };
+  }
+  if (ei?.artifactWriteMode === "CREATE" || ei?.artifactWriteMode === "UPDATE") {
+    return { ok: false, basis: "artifact_write_mode" };
+  }
+  const objective = (
+    input.analysis.objective ??
+    input.analysis.rephrasedRequest ??
+    ""
+  ).trim();
+  const expectedOutcome = (input.analysis.expectedOutcome ?? "").trim();
+  const scopeNarrative = (input.analysis.scope ?? "").trim();
+  if (!objective || (!expectedOutcome && !scopeNarrative)) {
+    return { ok: false, basis: "mission_data_insufficient" };
+  }
+
+  // Positive structured non-mutating claim (Product-owned — not lexical).
+  const declaredMutation = (
+    input.analysis as {
+      repositoryMutationDeclared?: "none" | "read" | "write" | "unknown" | null;
+    }
+  ).repositoryMutationDeclared;
+  const readOnlyIntent = intentKind === "read_only";
+  const explicitNone =
+    declaredMutation === "none" || declaredMutation === "read";
+  if (declaredMutation === "write") {
+    return { ok: false, basis: "repository_mutation_declared_write" };
+  }
+  if (declaredMutation === "unknown") {
+    return { ok: false, basis: "repository_mutation_unknown" };
+  }
+  // R1 — absence is NOT a positive claim (fail-closed → UNKNOWN upstream).
+  if (declaredMutation == null && !readOnlyIntent) {
+    return { ok: false, basis: "repository_mutation_claim_absent" };
+  }
+  if (readOnlyIntent || explicitNone) {
+    return {
+      ok: true,
+      basis: readOnlyIntent
+        ? "read_only_intent_pathless_verified"
+        : "declared_non_mutating_pathless_verified",
+    };
+  }
+  return { ok: false, basis: "non_mutating_claim_absent" };
+}
+
 /**
  * Structural mutation: Product-path evidence only.
  * Protected path in scope → structural (distinct from Morris gate at launch).
- * Without concrete non-protected paths → cannot claim non-structural (UNKNOWN upstream).
+ * Pathless missions may qualify as bounded non-mutating analysis (tool-first).
+ * Otherwise without concrete non-protected paths → cannot claim non-structural.
  */
 function deriveStructuralProjectMutation(input: {
   readonly protectedPathHits: readonly string[];
   readonly concretePaths: readonly string[];
   readonly liveOk: boolean;
   readonly positiveStructuralSignal: boolean;
+  readonly boundedNonMutatingAnalysis: boolean;
+  readonly boundedNonMutatingBasis: string;
 }): { readonly value: boolean; readonly basis: string } {
   if (!input.liveOk) {
     return { value: true, basis: "live_lps_unavailable_fail_closed" };
@@ -130,6 +249,12 @@ function deriveStructuralProjectMutation(input: {
     return { value: true, basis: "positive_structural_model_signal" };
   }
   if (input.concretePaths.length === 0) {
+    if (input.boundedNonMutatingAnalysis) {
+      return {
+        value: false,
+        basis: `bounded_non_mutating_analysis:${input.boundedNonMutatingBasis}`,
+      };
+    }
     // Cannot prove non-mutation without concrete WHERE — escalate via insufficient context.
     return { value: true, basis: "no_concrete_mission_paths_fail_closed" };
   }
@@ -219,6 +344,11 @@ export async function resolveAuthoritativeProductMateriality(input: {
   readonly projectId: string;
   readonly analysis: IntentAnalysisDto;
   readonly cycleInstanceId?: string | null;
+  /**
+   * When true, documentary write bind already claimed this mission —
+   * never qualify as pathless analysis (avoids circular import).
+   */
+  readonly isDocumentaryWriteMission?: boolean;
 }): Promise<AuthoritativeMaterialityResolution> {
   const live = await readLiveProjectContext(input.oa, input.projectId);
   const liveOk = live.ok;
@@ -257,11 +387,23 @@ export async function resolveAuthoritativeProductMateriality(input: {
       input.analysis.signals?.irreversible,
   );

+  const bounded = qualifyBoundedNonMutatingAnalysisMission({
+    analysis: input.analysis,
+    liveOk,
+    concretePaths,
+    protectedPathHits,
+    positiveStructuralSignal,
+    requestedCapabilities,
+    isDocumentaryWriteMission: input.isDocumentaryWriteMission === true,
+  });
+
   const structural = deriveStructuralProjectMutation({
     protectedPathHits,
     concretePaths,
     liveOk,
     positiveStructuralSignal,
+    boundedNonMutatingAnalysis: bounded.ok,
+    boundedNonMutatingBasis: bounded.basis,
   });
   const cycle = deriveCycleOrTrajectoryMutation({
     liveActiveCycleId: liveOk ? live.context.activeCycleInstanceId : null,
@@ -289,15 +431,22 @@ export async function resolveAuthoritativeProductMateriality(input: {
       }
     : null;

-  // Sufficient for NON_STRUCTURAL only when live Product + concrete WHERE
-  // + non-mutation bases are derived from Product facts (not keyword absence).
+  const cycleAnchored =
+    cycle.basis === "active_cycle_anchored_matches_requested" ||
+    cycle.basis === "project_context_no_active_cycle_none_mutated";
+  const authorityOk =
+    authority.basis === "paths_within_path_root_and_generalist_capability_only";
+
+  // Sufficient for NON_STRUCTURAL when live Product + (concrete WHERE OR
+  // bounded pathless non-mutating analysis) + non-mutation bases from Product facts.
   const productContextSufficient =
     liveOk &&
-    concretePaths.length > 0 &&
-    structural.basis === "live_lps_ok_concrete_non_protected_paths_only" &&
-    (cycle.basis === "active_cycle_anchored_matches_requested" ||
-      cycle.basis === "project_context_no_active_cycle_none_mutated") &&
-    authority.basis === "paths_within_path_root_and_generalist_capability_only";
+    cycleAnchored &&
+    authorityOk &&
+    ((concretePaths.length > 0 &&
+      structural.basis === "live_lps_ok_concrete_non_protected_paths_only") ||
+      (bounded.ok &&
+        structural.basis.startsWith("bounded_non_mutating_analysis:")));

   const facts: AuthoritativeMaterialityResolution["facts"] = {
     modelSignals: input.analysis.signals
@@ -326,6 +475,8 @@ export async function resolveAuthoritativeProductMateriality(input: {
     authorityEnvelopeBasis: authority.basis,
     concreteMissionPaths: concretePaths,
     pathsOutsidePathRoot: outsideRoot,
+    boundedNonMutatingAnalysis: bounded.ok,
+    boundedNonMutatingAnalysisBasis: bounded.ok ? bounded.basis : null,
   };

   const assessment = assessExecutionMaterialityOrUnknown({
@@ -350,6 +501,11 @@ export function assertAuthorizedMissionScopeEnforceable(input: {
   readonly scopeIn: readonly string[];
   readonly pathRoot: string | null;
   readonly allowProtectedWithExplicitGate?: boolean;
+  /**
+   * Tool-first pathless analysis — empty WHERE is admissible only when Product
+   * stamped bounded non-mutating analysis (no invented documentary/Git target).
+   */
+  readonly allowEmptyScopeForBoundedNonMutatingAnalysis?: boolean;
 }):
   | { readonly ok: true }
   | { readonly ok: false; readonly code: string; readonly message: string } {
@@ -357,6 +513,9 @@ export function assertAuthorizedMissionScopeEnforceable(input: {
     .map((p) => p.trim())
     .filter((p) => p.length > 0 && !p.includes(" "));
   if (paths.length === 0) {
+    if (input.allowEmptyScopeForBoundedNonMutatingAnalysis === true) {
+      return { ok: true };
+    }
     return {
       ok: false,
       code: "MISSION_SCOPE_EMPTY",
@@ -529,9 +688,16 @@ export async function revalidateMaterialityAgainstCurrentProduct(input: {
   }

   // WHERE enforcement at authorize time (CR-P6-03).
+  // Pathless bounded non-mutating analysis may have empty concreteMissionPaths.
+  const allowEmptyScope =
+    current.facts.boundedNonMutatingAnalysis === true &&
+    current.facts.structuralTruthBasis.startsWith(
+      "bounded_non_mutating_analysis:",
+    );
   const scopeCheck = assertAuthorizedMissionScopeEnforceable({
     scopeIn: current.facts.concreteMissionPaths,
     pathRoot: current.facts.productCurrentness?.pathRoot ?? null,
+    allowEmptyScopeForBoundedNonMutatingAnalysis: allowEmptyScope,
   });
   if (!scopeCheck.ok) {
     return {
@@ -568,9 +734,19 @@ export function analysisStubFromMaterialityFacts(
   const protectedHits = Array.isArray(facts?.protectedPathHits)
     ? (facts!.protectedPathHits as string[])
     : [];
-  return {
+  const bounded =
+    facts?.boundedNonMutatingAnalysis === true ||
+    (typeof facts?.structuralTruthBasis === "string" &&
+      facts.structuralTruthBasis.startsWith("bounded_non_mutating_analysis:"));
+  const intentKind =
+    bounded && scopeIn.length === 0
+      ? "read_only"
+      : scopeIn.length > 0
+        ? "other"
+        : "other";
+  const stub = {
     parseOk: true,
-    intentClass: "actionable",
+    intentClass: "actionable" as const,
     candidateCycleTypeId: null,
     signals: {
       structuralChange: modelSignals?.structuralChange === true,
@@ -588,7 +764,7 @@ export function analysisStubFromMaterialityFacts(
             claimedEvidenceIds: [],
           }
         : null,
-    challengeResponseAssessment: "sufficient",
+    challengeResponseAssessment: "sufficient" as const,
     objective:
       typeof contractInputs?.objective === "string"
         ? contractInputs.objective
@@ -615,11 +791,18 @@ export function analysisStubFromMaterialityFacts(
     criticalJustification: null,
     requestedOperation: null,
     executionIntent: {
-      intentKind: "other",
+      intentKind,
       scopeIn: scopeIn.length > 0 ? scopeIn : protectedHits,
       scopeOut: [],
     } as IntentAnalysisDto["executionIntent"],
   };
+  if (bounded && scopeIn.length === 0) {
+    return {
+      ...stub,
+      repositoryMutationDeclared: "none" as const,
+    } as IntentAnalysisDto;
+  }
+  return stub;
 }

 export function parseStampedProductCurrentness(
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
index 945607b6..e867cdfb 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
@@ -40,6 +40,8 @@ export type SolicitGenericPrepareToolArgs = {
   readonly expectedOutcome?: string;
   readonly scope?: string;
   readonly contextNotes?: string;
+  /** Optional mutation claim — Product verifies (none|read strengthens pathless). */
+  readonly repositoryMutation?: "none" | "read" | "write" | "unknown";
   /** Conservative-only impact flags — can only make Product more cautious. */
   readonly impactSignals?: {
     readonly structuralChange?: boolean;
@@ -216,6 +218,13 @@ export function createProductExecutionAgentsTools(
           type: "string",
           description: "Optional short notes (constraints, risks, reservations).",
         },
+        repositoryMutation: {
+          type: "string",
+          enum: ["none", "read", "write", "unknown"],
+          description:
+            "Optional: declare whether the mission mutates the repository. " +
+            "Use none/read for analysis/compute without file writes. Product verifies; write without paths stays blocked.",
+        },
         impactSignals: {
           type: "object",
           additionalProperties: false,
@@ -250,11 +259,20 @@ export function createProductExecutionAgentsTools(
           ? (args as Record<string, unknown>)
           : {};
       try {
+        const mutationRaw = str(o.repositoryMutation);
+        const repositoryMutation =
+          mutationRaw === "none" ||
+          mutationRaw === "read" ||
+          mutationRaw === "write" ||
+          mutationRaw === "unknown"
+            ? mutationRaw
+            : undefined;
         const result = await solicit({
           objective: str(o.objective),
           expectedOutcome: str(o.expectedOutcome),
           scope: str(o.scope),
           contextNotes: str(o.contextNotes),
+          repositoryMutation,
           impactSignals: parseImpactSignals(o.impactSignals),
         });
         const base =

```

---

## 13. Fin du Review Pack FULL
