# SFIA STUDIO — AKG-M5 / L3-S1
## REVIEW PACK FULL — Cycle 8 Delivery / Implementation — CRITICAL

| Field | Value |
| --- | --- |
| **Horodatage UTC** | 2026-10-26T16:16:05Z |
| **Horodatage Europe/Paris** | 2026-10-26T17:16:05+0100 |
| **Chantier** | AKG-M5 — Product Transformation |
| **Lot** | L3-S1 — Generic Execution Deterministic Integration |
| **GO Morris** | LOCAL DETERMINISTIC DELIVERY ONLY (2026-10-26) |
| **Trajectory decisions** | AKG-M5-TC-2026-10-26 T-C ADOPTED · AKG-M5-L3S1-2026-10-26 L3-S1 ADOPTED · D-P6-SHE-01 ADOPTED — **not reopened** |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s1-generic-det-integration` |
| **Branch** | `feat/akg-m5-l3-s1-generic-det-integration` |
| **HEAD (unchanged / no project commit)** | `b20733c799aa4abef16a283dc2069fd61325367e` (= origin/main post-#620) |
| **Non-GO** | Project commit/push/PR/merge · H4 LIVE · G-ACTIVATION · G-REAL · REAL · runtime v3 · L3-S2/L4 start · Binding/docs_write restore |

---

## CP01 — Horodatage
See metadata table.

## CP02 — Git Truth

| Check | Result |
| --- | --- |
| Remote main | `b20733c799aa4abef16a283dc2069fd61325367e` MATCH expected baseline |
| Prior handoff | `bb9117ce` / blob `6759fd0e…` |
| PR #620 | MERGED · post-merge CI `40349163426` SUCCESS (ancestry) |
| Docs WT preexist | preserved dirty Review Pack only — not used |
| New worktree | created clean from `origin/main` |
| Branch | `feat/akg-m5-l3-s1-generic-det-integration` local only · **no push** |
| Project commit | **NONE** |
| Staged | empty |
| Dirty Product | **1 untracked test file only** |

## CP03 — GO / Sources

GO: Local DET Delivery L3-S1 only.
Sources read: Decision Pack 05 §7/§8 · D-ER · SHE · prepareGeneric · governedExecute · w2Harness · p6.she · GERRC · PCC · p5.s03 · gitTargetIdentity · PRR volumes (R23).

## CP04 — Convergence Pre-check

T-C / L3-S1 already on main via #620. Exclusive DEFAULT OFF. Binding/docs_write RETIRED. SHE TARGET ADOPTED. No parallel architecture.

## CP05 — R23 architecture map

| Component | Class |
| --- | --- |
| OA Project / projectWorkspaceKey | KEEP |
| Generic PREPARE / solicitGenericExecutionPrepare | KEEP |
| SHE singleHumanExecutePreparedContract | KEEP (no Attempt) |
| governedExecute Select/Start | KEEP |
| settleDeterministicProductCursorSuccess | KEEP (Fake Cursor boundary) |
| finalizeGenericExecutionReview gate (`PRODUCT_MISSION_FROM_DURABLE_CONTEXT`) | KNOWN GAP for Generic PREPARE path — **NON-CLAIM** EP06 rich VCS / EP10 |
| Confirm CTA ExecutionSurface static | RESIDUAL · presentation Exécuter proven |
| Product Binding / docs_write | RETIRE (done) |
| Integrated Generic+SHE+Attempt oracle | **COMPLETE** (this lot — test-only) |

**Break point:** Generic PREPARE does not stamp `PRODUCT_MISSION_FROM_DURABLE_CONTEXT` / `EFFECT_CLASS:local-write` → `finalizeGenericExecutionReview` after RecordResult does not run for Generic+SHE. L3-S1 admits NON-CLAIM for generic FS→SHA / VCS honesty; Attempt-level DET Result proven.

**Code Product changes:** **NONE** — gap closed at integration-oracle layer per GO (reuse existing modules; no second orchestration).

## CP06 — Modifications

| Path | Status | sha256_16 |
| --- | --- | --- |
| `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S1.genericExecutionIntegrated.d0.test.ts` | **CREATED** | `d296d690dac215aa` |

Product runtime/source: **unchanged**.

### COMPLETE FILE — akgM5L3S1.genericExecutionIntegrated.d0.test.ts

```typescript
/**
 * AKG-M5 / L3-S1 — Generic Execution Deterministic Integration.
 *
 * Composed Product path (DET only, ZERO Cursor REAL / OpenAI LIVE):
 *   Project OA → Generic PREPARE → inspectable EC → SHE Exécuter →
 *   Select/Start Fake Cursor → Attempt terminal → honest Result at
 *   admitted Attempt scope.
 *
 * Decision Pack 05 §8.2 EP01–EP10:
 *   EP01–EP05, EP08–EP09: BEHAVIOR PROVEN AT TESTED SCOPE (this suite).
 *   EP06: Attempt-level result Evidence at Fake Cursor DET scope —
 *         NOT generic VerifiedChangeSet / FS→SHA materialization.
 *   EP07: Attempt/Result honesty at admitted scope (≠ full ReviewBundle VCS).
 *   EP10: NON-CLAIM — GENERIC FS→SHA / FS→Git→Review COMPLETE.
 *
 * Confirm CTA: presentation oracle — nominal SHE path exposes Exécuter,
 * never a separate Confirm CTA (static ExecutionSurface Confirm residual
 * remains REACHABILITY NOT FULLY PROVEN beyond presentation).
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  singleHumanExecutePreparedContract,
} from "@/features/project-assistant/w2/singleHumanExecutePreparedContract";
import {
  GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
} from "@/features/project-assistant/w2/genericMissionSubject";
import { requiredInspectedFactsForContract } from "@/lib/oa/execution-contract";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import {
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
} from "@/lib/oa/execution-attempt";
import {
  ensureManagedRepoCloneSkeleton,
} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  presentPilotExecution,
} from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";
import type {
  IntentAnalysisDto,
} from "@/features/project-assistant/f2/types";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  settleDeterministicProductCursorSuccess,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function requiredFactsOrThrow(
  contract: Parameters<typeof requiredInspectedFactsForContract>[0],
): readonly string[] {
  const facts = requiredInspectedFactsForContract(contract);
  if (Array.isArray(facts)) return facts;
  const incomplete = facts as { incomplete: true; code: string };
  throw new Error(`inspection disclosure incomplete: ${incomplete.code}`);
}

/** Representative NON_STRUCTURAL notes edit — no docs_write taxonomy. */
function notesEditAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective:
      "Modifier une section de notes de projet dans le workspace isolé",
    expectedOutcome:
      "Notes mises à jour; restitution honnête Claim≠Fact au Pilote",
    scope: "projects/demo/notes/project-notes.md",
    repositoryMutation: "none",
    impactSignals: {
      structuralChange: false,
      architectureImpact: false,
    },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "other",
      scopeIn: ["projects/demo/notes/project-notes.md"],
      requiredCapabilities: [],
    },
  };
}

describe("AKG-M5 L3-S1 — Generic Execution Deterministic Integration", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousPilot: string | undefined;
  let previousExclusive: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousExclusive = process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    // L3-S1 governed residual: exclusive DEFAULT OFF (do not activate).
    delete process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("akg-m5-l3s1.sqlite"),
      idPrefix: "l3s1",
    });
  });

  afterEach(() => {
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
    restoreEnvVar("SFIA_STUDIO_LOCAL_OA_EXCLUSIVE", previousExclusive);
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "demo",
      objective: "L3-S1 Generic DET Integration",
      context: "akg-m5 l3-s1 notes edit",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "L3-S1 DET ONLY"],
      shortReference: `L3${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:l3s1-${suffix}`,
    });
    if (!created.ok) {
      throw new Error(`createProject: ${created.error?.message ?? "fail"}`);
    }
    const projectId = created.project.projectId;
    // EP01 — projectWorkspaceKey preserved (no Product RepositoryBinding).
    expect(created.project.projectWorkspaceKey).toBeTruthy();
    expect(
      (created.project as { repositoryBinding?: unknown }).repositoryBinding,
    ).toBeUndefined();

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
    const identity = `acme/l3s1-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa, workspaceKey: created.project.projectWorkspaceKey };
  }

  it("EP01–EP09 nominal — Project→PREPARE→SHE→Cursor DET Attempt (FS→SHA NON-CLAIM)", async () => {
    const { projectId, oa } = await seedProject("nominal");

    // EP02 — Generic PREPARE (no prior applicable HD; no docs_write).
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(`prepare: ${prep.message}`);

    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");

    // EP03 — inspectable EC; EP09 — no docs_write admission residue.
    const constraints = live.contract.constraints ?? [];
    expect(constraints.some((c) => /docs_write/i.test(c))).toBe(false);
    expect(constraints).toEqual(
      expect.arrayContaining(["PRODUCT_GOVERNED"]),
    );
    const facts = requiredFactsOrThrow(live.contract);
    expect(facts.length).toBeGreaterThan(0);

    // EP04 — SHE: one Exécuter; no Attempt from SHE module.
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(`she: ${she.code} ${she.message}`);
    expect(she.executionAttemptCreated).toBe(false);
    expect(she.authorization.outcome).toBe("AUTHORIZED");
    expect(she.authorization.executionEligible).toBe(true);

    // EP05 — Cursor generalist Select → Start → DET settle.
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(`select: ${selected.message}`);
    expect(selected.attempt).toBeTruthy();
    expect(selected.attempt!.selectedAgentRef).toBe(
      STUDIO_CURSOR_GENERALIST_AGENT_ID,
    );

    // Match SHE suite ordering: settle then Start (Fake port / TestOnly).
    await settleDeterministicProductCursorSuccess({
      oa,
      attemptId: selected.attempt!.attemptId,
    });
    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId: selected.attempt!.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(`start: ${started.message}`);

    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId: selected.attempt!.attemptId,
    });
    const loaded = await oa.executionAttemptServices!.getExecutionAttempt.execute({
      attemptId: selected.attempt!.attemptId,
    });
    const attemptAfter =
      settled.ok && settled.attempt
        ? settled.attempt
        : loaded.ok
          ? loaded.attempt
          : null;
    expect(attemptAfter).toBeTruthy();
    expect(attemptAfter!.status).toBe("succeeded");
    expect(attemptAfter!.resultRef).toBeTruthy();

    // EP06/EP07 at admitted Attempt DET scope (NOT generic FS→SHA / VCS).
    // EP10 NON-CLAIM markers for Review Pack:
    void [
      "GENERIC_FS_SHA_MATERIALIZATION_NOT_PROVEN",
      "GENERIC_FS_GIT_REVIEW_COMPLETE_NOT_PROVEN",
      "E2E_COMPLET_NOT_CLAIMED",
    ];
  });

  it("EP08 — fingerprint mismatch on Exécuter → refuse (no Attempt)", async () => {
    const { projectId, oa } = await seedProject("stale-fp");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("get EC failed");
    const facts = requiredFactsOrThrow(live.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: "deadbeef".repeat(8),
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(false);
    if (she.ok) throw new Error("expected refuse");
    expect(she.executionAttemptCreated).toBe(false);
  });

  it("EP08 — project mismatch → Exécuter refuse", async () => {
    const a = await seedProject("proj-a");
    const b = await seedProject("proj-b");
    const prep = await solicitGenericExecutionPrepare({
      oa: a.oa,
      projectId: a.projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const live = await a.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("get");
    const facts = requiredFactsOrThrow(live.contract);
    const she = await singleHumanExecutePreparedContract({
      oa: a.oa,
      projectId: b.projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(false);
    if (she.ok) throw new Error("expected project mismatch refuse");
  });

  it("EP08 — double Exécuter is idempotent (no second Cursor invent)", async () => {
    const { projectId, oa } = await seedProject("double");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(prep.message);
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("get");
    const facts = requiredFactsOrThrow(live.contract);
    const args = {
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true as const,
    };
    const first = await singleHumanExecutePreparedContract(args);
    expect(first.ok).toBe(true);
    if (!first.ok) throw new Error(first.message);
    const rebound =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: first.executionContractId,
      });
    expect(rebound.ok).toBe(true);
    if (!rebound.ok) throw new Error("rebound get failed");
    const second = await singleHumanExecutePreparedContract({
      ...args,
      executionContractId: first.executionContractId,
      expectedVersion: rebound.contract.version,
      expectedSemanticFingerprint: rebound.contract.semanticFingerprint!,
    });
    // Idempotent authorize or honest refuse — never invents Attempt.
    expect(second.executionAttemptCreated).toBe(false);
  });

  it("EP08/EP09 — empty presented facts refuse; exclusive remains OFF", async () => {
    expect(process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE).toBeUndefined();
    const { projectId, oa } = await seedProject("empty-facts");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(prep.message);
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("get");
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: [],
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(false);
    if (she.ok) throw new Error("expected empty facts refuse");
    expect(she.executionAttemptCreated).toBe(false);
  });

  it("Confirm CTA presentation — nominal SHE path uses Exécuter (no separate Confirm)", () => {
    // Presentation-level reachability oracle (p5.s03 fixture shape).
    // Static ExecutionSurface Confirm branch remains residual code path.
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: {
          projectId: "prj:l3s1",
          activeCycleInstanceId: "cyc:1",
          executionContractId: "xct:l3s1",
          executionContractVersion: 1,
          executionContractStatus: "confirmation_required",
          attemptId: null,
          attemptStatus: null,
          stage: "PRE_EXECUTION",
          productOutcome: null,
          evidenceId: null,
          reviewBundleId: null,
          claimEvaluationId: null,
          claimEvaluationStatus: null,
          postEvidencePresent: false,
          nextDeterministicAction: "NONE",
          humanDecisionRequired: false,
          recoveryRequired: false,
          reason: null,
          blockingCode: null,
          context: null,
        },
      },
      preExecutionContinuity: {
        ok: true,
        kind: "active",
        decisionRef: "dec:1",
        requiredInspectedFacts: [
          "action",
          "target",
          "scope",
          "requiredAuthority",
          "requiredCapabilities",
          "constraints",
          "stopConditions",
          "reversibility",
          "evidenceRequirements",
          "semanticFingerprint",
          "inputs.targetRepositoryRef",
          "inputs.targetPath",
        ],
        contract: {
          executionContractId: "xct:l3s1",
          version: 1,
          status: "confirmation_required",
          action: "cursor.generalist.apply",
          target: "workspace.isolated.generic",
          scope: "studio.generic.notes",
          requiredAuthority: "N2",
          constraints: [],
          stopConditions: [],
          requiredCapabilities: [],
          reversibility: "reversible",
          semanticFingerprint: "fp",
          effectConfirmationRequired: true,
          inspectionDisclosure: {
            action: "cursor.generalist.apply",
            technicalTarget: "workspace.isolated.generic",
            scope: "studio.generic.notes",
            targetRepositoryRef: "acme/demo",
            targetPath: "projects/demo/notes/project-notes.md",
            scopeIn: null,
            scopeOut: null,
            createOrModify: true,
            noDelete: true,
            objective: null,
            artifactType: null,
            artifactBrief: null,
            contentRequirements: null,
            validationExpectations: null,
            expectedOutputs: null,
            sourceGrounding: null,
            acceptanceCriteria: null,
            validationPlan: null,
            reportRequirements: null,
            evidenceRequirements: [],
            requiredAuthority: "N2",
            requiredCapabilities: [],
            constraints: [],
            stopConditions: [],
            reversibility: "reversible",
            contractVersion: 1,
            executionContractId: "xct:l3s1",
            semanticFingerprint: "fp",
            disclosureComplete: true,
            incompletenessCode: null,
          },
        },
        inspection: {
          executionContractId: "xct:l3s1",
          contractVersion: 1,
          semanticFingerprint: "fp",
          statusLabel: "INSPECTÉ",
          inspectionSufficient: true,
          attestationRef: "att:1",
          attestedVersion: 1,
          staleAttestationRef: null,
          reinspectionRequired: false,
          reason: "inspected",
          grantsAuthority: false,
        },
      },
    });
    expect(view.status).toBe("a_confirmer");
    expect(view.cta.kind).toBe("execute");
    expect(view.cta.kind === "confirm").toBe(false);
  });

  it("STRUCTURAL PREPARE → SHE binds authorize-inspected-execute (not ACCEPT_PREPARE)", async () => {
    const { projectId, oa } = await seedProject("struct");
    const structural = buildIntentAnalysisFromSolicitedMission({
      objective: "Ajuster le graphe d'autorité générique (borné)",
      expectedOutcome: "Contrat inspectable puis Exécuter",
      scope: "projects/demo/src/authority",
      impactSignals: { structuralChange: true, architectureImpact: true },
    });
    const analysis: IntentAnalysisDto = {
      ...structural,
      executionIntent: {
        intentKind: "other",
        scopeIn: ["projects/demo/src/authority"],
        requiredCapabilities: [],
      },
    };
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("get");
    const facts = requiredFactsOrThrow(live.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(she.message);
    expect(she.humanDecisionOptionId).toBe(
      GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
    );
    expect(she.executionAttemptCreated).toBe(false);
  });
});

```

## CP07 — Tests / validations executed

| Suite | Result |
| --- | --- |
| `akgM5L3S1.genericExecutionIntegrated.d0.test.ts` | **7/7 PASS** |
| `p6.she.singleHumanExecute.d0.test.ts` | **13/13 PASS** |
| `p5.s03.pilotExecutionPresentation.d0.test.ts` | **10/10 PASS** |
| `gitTargetIdentityRemoteFidelity.d0.test.ts` | **9/9 PASS** |
| `npm run typecheck` | **PASS** (exit 0) |
| `npm run build` | **PASS** |
| `npm run lint` | **PASS** (pre-existing warnings only; no new) |
| `CI=true npm test` (full) | **NOT RUN** — time/env; targeted suites + typecheck/build executed instead |

DET ≠ REAL. ZERO Cursor REAL. ZERO OpenAI LIVE.

## CP08 — SHE / authority / currentness

- PREPARE without prior applicable HD under SHE: proven.
- Exécuter unique; `executionAttemptCreated: false` from SHE module: proven.
- Fingerprint mismatch refuse: proven.
- Project mismatch refuse: proven.
- Empty presented facts refuse: proven.
- Double Exécuter no Attempt invent: proven.
- STRUCTURAL HD = `authorize-inspected-execute` (≠ ACCEPT_PREPARE): proven.
- Confirm presentation = Exécuter (not separate Confirm): proven at presentation layer.

## CP09 — Git fidelity / Cursor DET

- Sealed identity / managed repo skeleton reused (w2Harness).
- Select → `agt:studio.cursor.generalist` proven.
- TestOnly Fake settle → Attempt `succeeded` + `resultRef` proven.
- CORR-02 suite regression PASS.
- No Product RepositoryBinding restored.

## CP10 — Evidence / Review / Result

| Claim | Status |
| --- | --- |
| Attempt terminal Result (Fake DET) | PROVEN AT TESTED SCOPE |
| Mission/VerifiedChangeSet via finalizeGenericExecutionReview on Generic PREPARE | **NOT PROVEN** — gate requires `PRODUCT_MISSION_FROM_DURABLE_CONTEXT` |
| GENERIC FS→SHA MATERIALIZATION | **NOT PROVEN** — **NON-CLAIM** |
| GENERIC FS→GIT→REVIEW COMPLETE | **NOT PROVEN** — **NON-CLAIM** |
| E2E COMPLET | **NOT CLAIMED** |

Closing lot proposed: **L3-S2 — Generic Materialization Evidence and FS→SHA Closure**.

## CP11 — Fake / Real

| Boundary | Substitution |
| --- | --- |
| Cursor | TestOnlyRealExecutionLaunchPort / settleDeterministicProductCursorSuccess |
| OpenAI/Nora | Not exercised this lot (no Nora post-Evidence claim) |
| Git | managed repo skeleton + pinned DET SHA |
| Product persistence | temp SQLite via bootW2Runtime |

Entry level achieved: **DETERMINISTIC PROVEN AT INTEGRATED L3-S1 TESTED SCOPE** (EP01–EP05, EP08–EP09; EP06 Attempt-scope; EP07 Attempt honesty; EP10 NON-CLAIM).

NOT: REAL BOUNDARY · END-TO-END REAL · H4 LIVE · FS→SHA GENERIC COMPLETE.

## CP12 — R24

**NO SEMANTIC IMPACT** on Product runtime (test-only addition).
PRR 03/07/08/09: optional documentary note that L3-S1 DET integrated oracle exists and FS→SHA generic remains KNOWN GAP — **sync NOT applied** (protected sources READ-ONLY). Gate: distinct Morris DOC sync if desired.

## CP13 — Exit proofs EP01–EP10

| EP | Status |
| --- | --- |
| EP01 Project OA contextualisé | **PASS** |
| EP02 Generic PREPARE | **PASS** |
| EP03 EC inspectable | **PASS** |
| EP04 SHE / Exécuter | **PASS** |
| EP05 Cursor generalist Attempt DET | **PASS** |
| EP06 Evidence vérifiable (admitted Attempt scope) | **PASS AT ATTEMPT SCOPE** · rich VCS **NON-CLAIM** |
| EP07 ReviewBundle/Result honest (admitted) | **PASS AT ATTEMPT/RESULT SCOPE** · full RB VCS **NON-CLAIM** |
| EP08 Fail-closed refusals | **PASS** (fingerprint · project · empty facts · double) |
| EP09 No docs_write dependency | **PASS** |
| EP10 FS→Git→Review complete | **NON-CLAIM** (governed L3-S1) |

**Exit candidate:** L3-S1 DETERMINISTIC INTEGRATION PROVEN AT TESTED SCOPE WITH GOVERNED FS→SHA NON-CLAIM.

## CP14 — Gaps / debts

1. Generic PREPARE → finalizeGenericExecutionReview stamp/gate ADAPT (L3-S2).
2. Confirm ExecutionSurface static residual — presentation non-Confirm proven; full UI non-accessibility still NOT FULLY PROVEN beyond presentation.
3. L2 exclusive OFF residual — accepted for L3-S1.
4. Roadmap tip lag post-#620 (historical) — outside this GO.
5. Full `CI=true npm test` NOT RUN this cycle.

## CP15 — Next Gate / Verdict

Next Morris gates (distinct):
1. ChatGPT Critical Review of this pack/handoff.
2. Optional project Git Integration GO (commit/push/Draft PR) — **NOT this cycle**.
3. L3-S2 design/Delivery GO — **NOT authorized**.
4. L4 — **NOT authorized**.

### Verdict Cursor

**LOCAL DELIVERY READY FOR CHATGPT CRITICAL REVIEW**

≠ PR READY · ≠ REAL READY · ≠ runtime v3 ADOPTED · ≠ E2E COMPLET · ≠ project commit/push.

**FIN REVIEW PACK FULL.**
