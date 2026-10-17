# SFIA STUDIO — Review Pack (LIGHT)
## STUDIO-P6-TOOL-FIRST-R2-TEST-CORRECTION

**Horodatage (UTC):** 2026-10-17T19:55:20Z
**Cycle:** 9 — QA / validation — Critical
**Typologie:** QA / régression / sécurité
**GO Morris consommé:** Correction ciblée du test R2 uniquement. Aucun changement d'architecture. Aucune modification du code Product.

**Verdict proposé:**
`R2 START GATE — DETERMINISTIC NEGATIVE TEST PASS — READY FOR CHATGPT REVIEW`

Hors scope: READY FOR REAL · HQA PASS · P6 PASS · Product Git Integrated · Runtime v3 ADOPTED · REAL BOUNDARY PROVEN.

---

## 1. Git Truth

### Références rapportées (vérifiées)
- Worktree: `/tmp/sfia-tf-safety-r1r2` — **présent et intact**
- Branch: `fix/sfia-studio-p6-tool-first-safety-r1r2`
- HEAD / origin/main: `e03c7b9fd3665b89a4083a937b82424c5e7f6406`
- Handoff précédent: `6d0f32da4c308b7a08970f91a12a9df391e3cf13`

### Workspace Cursor (non utilisé)
`/Users/morris/Projects/sfia-workspace-p6-tool-first-safety-r1r2` est le worktree contaminé `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862` — **préservé, non utilisé**. Travail exclusivement sous `/tmp/sfia-tf-safety-r1r2`.

### Final
- HEAD inchangé: `e03c7b9fd3665b89a4083a937b82424c5e7f6406`
- staged: vide
- **Seul fichier modifié ce cycle:** `projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts`
- Aucun commit/push/PR Product
- Autres deltas locaux cycle 8 **préservés** (non touchés)

---

## 2. Sources

- Handoff `6d0f32da` (réserve ChatGPT: Start avec `xat:none` + assertion trop large)
- `boundedNonMutatingRealLaunchGate.ts` (READ ONLY — KEEP)
- `governedExecuteAuthorizedContract.ts` Select/Start (READ ONLY — KEEP)
- Harness `TestOnlyRealExecutionLaunchPort` (ZERO REAL — jamais de spawn Cursor)

---

## 3. Convergence

| Item | État |
|---|---|
| Capacité | V3-F05 |
| Milestone | P6 |
| R1 | CLOSED (inchangé) |
| R2 gate Product | KEEP / FAIL-CLOSED |
| Test R2 Start | **ADAPT** (ce cycle) |
| Dette | Enforcement REAL no-write toujours absent |

---

## 4. Test avant correction (faiblesse)

Le bloc Start acceptait pratiquement n'importe quel code:

```typescript
    // Start also refuses (defense in depth) — no Attempt to continue.
    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      attemptId: "xat:none",
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(
        started.code === BOUNDED_NON_MUTATING_REAL_BLOCK_CODE ||
          started.code === "ATTEMPT_NOT_FOUND" ||
          started.code === "NOT_AUTHORIZED" ||
          typeof started.code === "string",
      ).toBe(true);
    }
```

Problème: `attemptId: "xat:none"` → refus non attribuable au gate R2 (`ATTEMPT_NOT_FOUND` etc. suffisaient).

---

## 5. Test après correction

Scénario strict:
1. REAL=1 → Select refuse code R2 exact (conservé)
2. REAL=0 → Select accepte → AttemptId réel `accepted`, port TestOnly, `launchCallCount` inchangé
3. REAL=1 → Start(AttemptId valide) → `started.code === "BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE"` **uniquement**
4. Attempt reste `accepted` (pas `running`), pas de nouvel Attempt, `launchPort.calls.length === 0`
5. Write ordinaire non bloqué par le gate (conservé)

### Bloc R2 corrigé (extrait)

```typescript
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

### Fichier de test complet (seul fichier amendé ce cycle)

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

## 6. Preuve ZERO REAL

- `bootW2Runtime` compose `TestOnlyRealExecutionLaunchPort` — never enables production Cursor REAL spawn
- Test assert `launchPort instanceof TestOnlyRealExecutionLaunchPort` avant toute action
- `launchCallCount` et `calls.length` restent 0 après Select Fake et après Start REAL refusé
- Aucun processus Cursor externe

---

## 7. Résultats exacts

| Suite | Résultat |
|---|---|
| `p6.toolFirst.safetyClosureR1R2.d0.test.ts` | 5/5 PASS |
| tool-first A–J | 11/11 PASS |
| G-D4 | 10/10 PASS |
| DER16 | 28/28 PASS |
| inspectionBindingSelect | 15/15 PASS |
| projectScopedCursorSelection | 14/14 PASS |
| Batch Select/Start concerné | 78/78 PASS |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `git diff --check` | PASS |

**Code exact Start:** `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE`
**AttemptId:** réel `xat:w3a:…` (log: `xat:w3a:e15235396bd838b1`) — jamais `xat:none`
**État Attempt après refus:** `accepted` (non `running`)

---

## 8. Périmètre respecté

- Product / gate R2 / OA / UI / doctrine: **non modifiés**
- Fichier unique: `__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts`

---

## 9. Réserves

- Enforcement REAL no-write technique toujours absent (dette cycle 8)
- Ce cycle ne prouve que le **refus Start déterministe** avec Attempt valide + code R2 exact

---

## 10. Verdict

**R2 START GATE — DETERMINISTIC NEGATIVE TEST PASS — READY FOR CHATGPT REVIEW**

---

## 11. Fin du Review Pack LIGHT
