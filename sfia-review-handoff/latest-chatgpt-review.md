# SFIA REVIEW PACK FULL — AKG-M5 L3-S1 CRITICAL REVIEW CORRECTION PASS 01

**Profile:** CRITICAL
**Cycle type:** 8 — Delivery / implémentation (correction bornée)
**Timestamp (UTC):** 2026-10-26T16:49:11Z
**Timestamp (local):** 2026-10-26T17:50:00+01:00
**Mono-cycle:** AKG-M5 L3-S1 CRITICAL REVIEW CORRECTION PASS 01
**Process baseline:** SFIA v2.6

---

## 1. GO Morris

- **GO:** 2026-10-26 — CORRECTION LOCALE BORNÉE (Critical Review Correction Pass 01).
- **Décisions déjà adoptées (NE PAS ROUVRIR):**
  - AKG-M5-TC-2026-10-26 — T-C
  - AKG-M5-L3S1-2026-10-26 — L3-S1
  - D-P6-SHE-01 — Single Human Execute
- **Autorisé:** investigation locale; correction oracle intégré; tests DET; Review Pack FULL; publication handoff Git L3 bornée.
- **NON-GO:** commit/push/PR projet; merge; main; G-REAL; G-ACTIVATION; OA-exclusive ON; H4 LIVE; L3-S2; L4; v3 ADOPTED; Binding/docs_write restore; architecture structurante.

---

## 2. Git Truth

| Item | Value |
|------|-------|
| Repository | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s1-generic-det-integration` |
| Branch | `feat/akg-m5-l3-s1-generic-det-integration` |
| HEAD | `b20733c799aa4abef16a283dc2069fd61325367e` |
| origin/main | `b20733c799aa4abef16a283dc2069fd61325367e` |
| Prior handoff tip | `3b0e8a6b7a0d8d68fdb1b0aea881b4b4daee3e8c` |
| Prior handoff blob | `1a19c5386b34f6f3e9f9f11777c30defafb120ab` |

**Initial content drift check (Correction Pass start):**
Prior handoff embedded oracle sha16 `d296d690dac215aa` matched local untracked file exactly (`exact_match_embedded True`). No LOCAL CONTENT DRIFT STOP. Baseline matched — no BASELINE DRIFT.

**Final porcelain (project worktree, before handoff publish):**

```
 M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S1.genericExecutionIntegrated.d0.test.ts
```

**Oracle sha256 (full):** `6372ddf8af1a9adb0c8b0fcf62e33efd8c57613fefbd8350b94147189ed9f316`
**Oracle sha256_16:** `6372ddf8af1a9adb`

**Product runtime:** unchanged (ZERO Product code mutation this pass).
**Staged:** none.
**Project commits this pass:** none.

---

## 3. Sources relues

- Decision Pack 05 §7.2 / §7.5 / §8.1 / §8.2 (M5 Target Journey)
- `sfia-studio-generic-execution-review-result-architecture.md`
- Prior Review Handoff L3-S1 Delivery (`3b0e8a6b` / blob `1a19c538`)
- Product: `prepareGenericExecutionContractDraft`, `singleHumanExecutePreparedContract`, `governedExecuteAuthorizedContract`, `materializeW3bProductTerminal`, `w3bProductTerminalProjection`, `missionResultPayload` (stamp boundary)
- Oracles: GERRC frontDoor, productMissionEvidenceChain, p6.she, p6.projectScopedCursorSelection, p5.s03, w2Harness, TestOnlyRealExecutionLaunchPort

---

## 4. R23 — Investigation avant modification

### Classification

| Component | Class | Note |
|-----------|-------|------|
| `prepareGenericExecutionContractDraft` / solicit | KEEP | Honest `repositoryMutation:"write"` + scopeIn |
| `singleHumanExecutePreparedContract` | KEEP | SHE unchanged |
| `governedExecuteSelectAgent` / `Start` | KEEP | Idempotence via `findSucceededAttempt` |
| `settleDeterministicProductCursorSuccess` | KEEP | Order fixed: Start then settle |
| `materializeW3bProductTerminal` | KEEP | Tech Evidence + RB + CE without mission stamp |
| `finalizeGenericExecutionReview` | FREEZE / NON-CLAIM | Gated on PRODUCT_MISSION_FROM_DURABLE_CONTEXT |
| CycleInstance invent / stamp invent | FREEZE | Not done — L3-S2 / Morris |
| Product Binding / docs_write | RETIRE LATER (already retired) | Not restored |
| L3-S1 oracle suite | ADAPT | Single file corrected for R1–R6 |
| Runtime Product | KEEP — ZERO change | Prefer test-only |

### Key findings

1. **R1:** `materializeW3bProductTerminal` after Fake Cursor settle produces technical Evidence `ev:w3b:*`, frozen RB `rb:w3b:*`, CE `not_proven`, Product `UNCLAIMED` when stamp absent.
2. **R2:** `repositoryMutation:"none"` was dishonest; `write` + concrete non-protected `scopeIn` admits PREPARE without forcing NON_STRUCTURAL via false none claim.
3. **R3:** `cycleInstanceId:null` kept. Rich continuity via stamp NOT invented.
4. **R4:** Observe `TestOnlyRealExecutionLaunchPort.launchCallCount` + Attempt list; second Select/Start → `reusedExistingAttempt:true`, launch stays 1.
5. **R5:** Presentation Confirm residual only; Nora post-Evidence NOT in this oracle.
6. **R6:** Full `CI=true npm test` executed this pass (not extrapolated).

**Runtime modification necessary?** NO.

---

## 5. Réserves R1–R6 — actions

| Reserve | Action | Status |
|---------|--------|--------|
| R1 Evidence/RB/CE | Call `materializeW3bProductTerminal`; assert Evidence bound, RB frozen, CE `not_proven`, Product `UNCLAIMED` | CORRECTED |
| R2 Mission fidelity | `repositoryMutation:"write"`, `intentKind:"other"`, scopeIn notes path; assert no `MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED` | CORRECTED |
| R3 Post-exec continuity | Keep `cycleInstanceId:null`; do NOT stamp PRODUCT_MISSION_FROM_DURABLE_CONTEXT; qualify rich mission path NON-CLAIM | QUALIFIED / NON-CLAIM |
| R4 Double execute | Expand to Select→Start→settle→retry Select/Start; assert 1 Attempt, 1 launch, reuse | CORRECTED |
| R5 UX/Nora | Keep presentation Exécuter oracle; declare NORA POST-EVIDENCE NOT PROVEN BY L3-S1 INTEGRATED ORACLE | QUALIFIED |
| R6 Validations | Targeted + regressions + typecheck/build/lint + `CI=true npm test` | CORRECTED (CI RUN) |

---

## 6. Actions exactes

1. Git Truth + prior handoff content match check (PASS).
2. R23 map of materialize / mutation / idempotence (test-only).
3. Rewrite single oracle `akgM5L3S1.genericExecutionIntegrated.d0.test.ts`.
4. Run validations (below).
5. Write this Review Pack FULL (reset, mono-cycle).
6. Publish handoff via `scripts/sfia/publish-review-handoff.sh`.

---

## 7. Fichiers créés / modifiés

### Créé depuis main (untracked — present as full content)

`projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S1.genericExecutionIntegrated.d0.test.ts`

- sha256: `6372ddf8af1a9adb0c8b0fcf62e33efd8c57613fefbd8350b94147189ed9f316`
- sha256_16: `6372ddf8af1a9adb`
- Product code: none
- Other tests: none

### Review Pack (local temp, not staged)

`.tmp-sfia-review/chatgpt-review.md` — this file (reset for Correction Pass 01).

---

## 8. Contenu complet — oracle L3-S1 (créé depuis main)

Path: `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S1.genericExecutionIntegrated.d0.test.ts`

~~~typescript
/**
 * AKG-M5 / L3-S1 — Generic Execution Deterministic Integration
 * CRITICAL REVIEW CORRECTION PASS 01 (2026-10-26).
 *
 * Composed Product path (DET only, ZERO Cursor REAL / OpenAI LIVE):
 *   Project OA → Generic PREPARE → inspectable EC → SHE Exécuter →
 *   Select/Start Fake Cursor → Attempt terminal →
 *   materializeW3bProductTerminal (technical Evidence + frozen RB + CE) →
 *   honest Product Result at admitted scope.
 *
 * Decision Pack 05 §8.2 EP01–EP10 (Correction Pass 01 requalification):
 *   EP01–EP05, EP08–EP09: BEHAVIOR PROVEN AT TESTED SCOPE (this suite).
 *   EP06: technical Evidence ingested + bound to Attempt (NOT Mission Evidence /
 *         VerifiedChangeSet / FS→SHA materialization).
 *   EP07: ReviewBundle frozen + ClaimEvaluation not_proven + Product UNCLAIMED
 *         (technical SUCCESS ≠ Product PROVEN).
 *   EP10: NON-CLAIM — GENERIC FS→SHA / FS→Git→Review COMPLETE.
 *
 * R3 — cycleInstanceId remains null (S8 project-context). Rich mission continuity
 * via PRODUCT_MISSION_FROM_DURABLE_CONTEXT is NOT invented here (L3-S2 debt).
 *
 * R5 — Confirm CTA: presentation oracle only (nominal SHE → Exécuter).
 * NORA POST-EVIDENCE NOT PROVEN BY L3-S1 INTEGRATED ORACLE.
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
import { materializeW3bProductTerminal } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
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
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  settleDeterministicProductCursorSuccess,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const NOTES_PATH = "projects/demo/notes/project-notes.md";

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

function launchPortOf(oa: {
  executionAttemptServices?: {
    realBoundary?: { launchPort?: unknown };
  } | null;
}): TestOnlyRealExecutionLaunchPort {
  const port = oa.executionAttemptServices?.realBoundary?.launchPort;
  if (!(port instanceof TestOnlyRealExecutionLaunchPort)) {
    throw new Error("TestOnlyRealExecutionLaunchPort required");
  }
  return port;
}

/**
 * Honest MUTATING notes edit — repositoryMutation write + concrete scopeIn.
 * Materiality class is Product-owned (resolver); fixture does not force
 * NON_STRUCTURAL by declaring repositoryMutation:"none".
 */
function notesEditAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective:
      "Modifier une section de notes de projet dans le workspace isolé",
    expectedOutcome:
      "Notes mises à jour; restitution honnête Claim≠Fact au Pilote",
    scope: NOTES_PATH,
    repositoryMutation: "write",
    impactSignals: {
      structuralChange: false,
      architectureImpact: false,
    },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "other",
      scopeIn: [NOTES_PATH],
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

  it("EP01–EP09 nominal — mutating mission → SHE → Cursor DET → technical Evidence/RB/CE UNCLAIMED", async () => {
    const { projectId, oa } = await seedProject("nominal");
    const analysis = notesEditAnalysis();

    // R2 — mission/effect fidelity (honest mutating declaration).
    expect(
      (analysis as { repositoryMutationDeclared?: string }).repositoryMutationDeclared,
    ).toBe("write");
    expect(analysis.executionIntent?.intentKind).toBe("other");
    expect(analysis.executionIntent?.intentKind).not.toBe("read_only");
    expect(analysis.executionIntent?.scopeIn).toEqual([NOTES_PATH]);

    // EP02 — Generic PREPARE (no prior applicable HD; no docs_write).
    // R3 — cycleInstanceId null kept; no invented PRODUCT_MISSION_FROM_DURABLE_CONTEXT.
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
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
    // R2 — mutating mission must not receive the bounded non-mutating effect stamp.
    expect(constraints).not.toContain(
      "MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED",
    );
    const inputs = live.contract.inputs as Record<string, unknown>;
    expect(inputs.boundedNonMutatingAnalysis).toBe(false);
    expect(inputs.intentKind).toBe("other");
    expect(inputs.scopeIn).toEqual(expect.arrayContaining([NOTES_PATH]));
    expect(live.contract.cycleInstanceId ?? null).toBeNull();
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

    // EP05 — Cursor generalist Select → Start → DET settle (launch must precede settle).
    const port = launchPortOf(oa);
    const launchBefore = port.launchCallCount;
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
    const attemptId = selected.attempt!.attemptId;

    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(`start: ${started.message}`);
    expect(port.launchCallCount).toBe(launchBefore + 1);

    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId,
    });
    expect(settled.ok).toBe(true);
    if (!settled.ok) throw new Error(`settle: ${settled.code} ${settled.message}`);
    expect(settled.attempt.status).toBe("succeeded");
    expect(settled.attempt.resultRef).toBeTruthy();

    // EP06/EP07 — technical Evidence + frozen ReviewBundle + ClaimEvaluation.
    // Without PRODUCT_MISSION_FROM_DURABLE_CONTEXT: CE not_proven / Product UNCLAIMED.
    // Technical SUCCESS ≠ Product PROVEN. No invented Mission Evidence / FS→SHA.
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) throw new Error(`materialize: ${materialized.code}`);
    expect(materialized.product.evidenceId).toMatch(/^ev:w3b:/);
    expect(materialized.product.reviewBundleId).toMatch(/^rb:w3b:/);
    expect(materialized.product.claimEvaluationId).toMatch(/^clm:w3b:/);
    expect(materialized.product.claimEvaluationStatus).toBe("not_proven");
    expect(materialized.product.outcome).toBe("UNCLAIMED");
    expect(materialized.product.claimAllowed).toBe(false);
    expect(materialized.product.outcome).not.toBe("SUCCESS");
    expect(materialized.product.technicalDetail.attemptId).toBe(attemptId);
    expect(materialized.product.technicalDetail.attemptStatus).toBe("succeeded");

    const evidence =
      await oa.evidenceReviewServices!.evidenceReader.findById(
        materialized.product.evidenceId!,
      );
    expect(evidence).toBeTruthy();
    expect(evidence!.bindings.executionAttemptId).toBe(attemptId);
    expect(evidence!.bindings.executionContractId).toBe(
      she.executionContractId,
    );
    expect(evidence!.bindings.projectId).toBe(projectId);

    const rb = await oa.evidenceReviewServices!.reviewBundleReader.findById(
      materialized.product.reviewBundleId!,
    );
    expect(rb).toBeTruthy();
    expect(rb!.frozenAt).toBeTruthy();
    expect(
      rb!.frozenEvidenceSnapshots?.some(
        (s) => s.evidenceId === materialized.product.evidenceId,
      ),
    ).toBe(true);

    const ce = await oa.evidenceReviewServices!.claimEvaluationReader.findById(
      materialized.product.claimEvaluationId!,
    );
    expect(ce).toBeTruthy();
    expect(ce!.status).toBe("not_proven");

    // EP10 NON-CLAIM markers (Review Pack / anti-claims):
    void [
      "GENERIC_FS_SHA_MATERIALIZATION_NOT_PROVEN",
      "GENERIC_FS_GIT_REVIEW_COMPLETE_NOT_PROVEN",
      "MISSION_EVIDENCE_NOT_PROVEN",
      "PRODUCT_MISSION_FROM_DURABLE_CONTEXT_NOT_STAMPED",
      "NORA_POST_EVIDENCE_NOT_PROVEN_BY_L3S1_INTEGRATED_ORACLE",
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

  it("EP08 — Select/Start idempotence: one Attempt, one launch, reuse on retry", async () => {
    // R4 — go beyond double-SHE: prove Select→Start→settle then second Select/Start
    // does not create a second Attempt or second Cursor launch.
    const { projectId, oa } = await seedProject("double-start");
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
    const sheArgs = {
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true as const,
    };
    const firstShe = await singleHumanExecutePreparedContract(sheArgs);
    expect(firstShe.ok).toBe(true);
    if (!firstShe.ok) throw new Error(firstShe.message);
    expect(firstShe.executionAttemptCreated).toBe(false);

    const rebound =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: firstShe.executionContractId,
      });
    expect(rebound.ok).toBe(true);
    if (!rebound.ok) throw new Error("rebound get failed");
    const secondShe = await singleHumanExecutePreparedContract({
      ...sheArgs,
      executionContractId: firstShe.executionContractId,
      expectedVersion: rebound.contract.version,
      expectedSemanticFingerprint: rebound.contract.semanticFingerprint!,
    });
    expect(secondShe.executionAttemptCreated).toBe(false);

    const port = launchPortOf(oa);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: firstShe.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    const attemptId = selected.attempt!.attemptId;

    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: firstShe.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.message);
    expect(port.launchCallCount).toBe(1);

    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId,
    });
    expect(settled.ok).toBe(true);
    if (!settled.ok) throw new Error(settled.message);

    const listedAfter =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: firstShe.executionContractId,
      });
    expect(listedAfter.ok).toBe(true);
    if (!listedAfter.ok) throw new Error("list attempts");
    expect(listedAfter.attempts.length).toBe(1);
    expect(listedAfter.attempts[0]!.attemptId).toBe(attemptId);
    expect(listedAfter.attempts[0]!.status).toBe("succeeded");

    // Second Select/Start — reuse succeeded Attempt; no second launch.
    const reselect = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: firstShe.executionContractId,
      forceLocalAuthority: true,
    });
    expect(reselect.ok).toBe(true);
    if (!reselect.ok) throw new Error(reselect.message);
    expect(reselect.reusedExistingAttempt).toBe(true);
    expect(reselect.attempt?.attemptId).toBe(attemptId);

    const restart = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: firstShe.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    expect(restart.ok).toBe(true);
    if (!restart.ok) throw new Error(restart.message);
    expect(restart.reusedExistingAttempt).toBe(true);
    expect(port.launchCallCount).toBe(1);

    const listedFinal =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: firstShe.executionContractId,
      });
    expect(listedFinal.ok).toBe(true);
    if (!listedFinal.ok) throw new Error("list final");
    expect(listedFinal.attempts.length).toBe(1);
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
    // R5 — Presentation-level reachability oracle (p5.s03 fixture shape).
    // Static ExecutionSurface Confirm branch remains residual code path.
    // NORA POST-EVIDENCE NOT PROVEN BY L3-S1 INTEGRATED ORACLE.
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
            targetPath: NOTES_PATH,
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
~~~

---

## 9. Diff utile

`git diff` ne montre pas les untracked. Contenu intégral ci-dessus = vérité du fichier créé.

Aucun diff Product runtime.

Review Pack local: `.tmp-sfia-review/chatgpt-review.md` (ce document).

---

## 10. Résultats des tests et validations

### L3-S1 oracle (Correction Pass 01)

```
npx vitest run __tests__/project-assistant/akgM5L3S1.genericExecutionIntegrated.d0.test.ts
→ Test Files 1 passed | Tests 7 passed
```

Observed on nominal path: Evidence ingest `ev:w3b:*`, RB create+freeze `rb:w3b:*`, ClaimEvaluation `clm:w3b:*` with status `not_proven`, Product outcome `UNCLAIMED`.

### Régressions prioritaires

| Suite | Result |
|-------|--------|
| p6.she.singleHumanExecute.d0.test.ts | PASS |
| p6.projectScopedCursorSelection.d0.test.ts | PASS |
| p5.s03.pilotExecutionPresentation.d0.test.ts (`__tests__/pre-m6-product-ui/`) | PASS |
| genericExecutionReviewResultConvergence01.d0.test.ts | PASS |
| genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts | PASS |
| productMissionEvidenceChain.e2e.d0.test.ts | PASS |
| gitTargetIdentityRemoteFidelity.d0.test.ts (`__tests__/oa/execution-attempt/`) | PASS |
| missionResultContractResultSemantic.generic.d0.test.ts (`__tests__/oa/evidence-review/`) | PASS |

### Quality gates

| Gate | Result |
|------|--------|
| `npm run typecheck` | PASS |
| `npm run build` | PASS (pre-existing unused-var warnings only) |
| `npm run lint` | PASS (same pre-existing warnings) |
| `CI=true npm test` | **PASS** — 555 files passed / 22 skipped; **6020 tests passed** / 142 skipped; duration ~134s |

R6: full CI suite **RUN** this pass (not extrapolated from targeted only).

---

## 11. Evidence / ReviewBundle / ClaimEvaluation (R1)

On Generic PREPARE + SHE + Select/Start + Fake settle + `materializeW3bProductTerminal`:

| Artifact | Proven |
|----------|--------|
| Technical Evidence `ev:w3b:*` ingested | YES |
| Evidence.bindings.executionAttemptId = Attempt | YES |
| ReviewBundle `rb:w3b:*` created + frozenAt | YES |
| Frozen snapshot includes tech Evidence | YES |
| ClaimEvaluation `clm:w3b:*` status `not_proven` | YES |
| Product outcome `UNCLAIMED`, claimAllowed false | YES |
| Technical SUCCESS ≠ Product PROVEN | YES |
| Mission Evidence métier | ABSENT / NOT_PROVEN (honest) |
| FS→SHA / VerifiedChangeSet | NON-CLAIM |

---

## 12. Mission / effect fidelity (R2)

- Declared: `repositoryMutationDeclared = "write"`
- `executionIntent.intentKind = "other"` (not `read_only`)
- `scopeIn = ["projects/demo/notes/project-notes.md"]`
- EC constraints do **not** contain `MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED`
- `inputs.boundedNonMutatingAnalysis === false`
- Product admitted PREPARE (no structural gate change; no bypass)

---

## 13. Idempotence (R4)

Sequence tested: INSPECT facts → SHE Exécuter (×2, no Attempt) → Select → Start → settle → Select → Start.

| Check | Result |
|-------|--------|
| SHE never creates Attempt | PASS |
| First Start: launchCallCount = 1 | PASS |
| Attempts for EC after settle: length = 1 | PASS |
| Second Select: `reusedExistingAttempt === true` | PASS |
| Second Start: `reusedExistingAttempt === true` | PASS |
| launchCallCount stays 1 | PASS |

---

## 14. Fake / Real qualification

| Boundary | Mode |
|----------|------|
| Cursor agent | Fake DET — TestOnlyRealExecutionLaunchPort |
| OpenAI / Nora LIVE | NOT PROVEN / not invoked by this oracle |
| Git FS→SHA Product materialization | NON-CLAIM |
| SQLite Product temp | Real durable transitions in test DB |
| Max proof level | DETERMINISTIC PROVEN AT TESTED SCOPE |
| REAL BOUNDARY / E2E REAL / G-REAL | NOT PROVEN / NOT GRANTED |

---

## 15. R24 — Impact documentaire

**NO PRODUCT SEMANTIC IMPACT.**
Test-only correction. PRR remains READ-ONLY. No doctrine/roadmap/C1 edit. Digest ≠ semantic proof claim beyond tested DET scope.

---

## 16. EP01–EP10 (requalified Correction Pass 01)

| EP | Verdict | Scope note |
|----|---------|------------|
| EP01 Project OA contextualisé | **PASS** | projectWorkspaceKey; Binding absent |
| EP02 Generic PREPARE | **PASS** | solicit + mutating analysis admitted |
| EP03 EC inspectable | **PASS** | required facts; PRODUCT_GOVERNED |
| EP04 SHE / Exécuter | **PASS** | authorize; Attempt not created by SHE |
| EP05 Cursor generalist Attempt DET | **PASS** | Select/Start/settle succeeded + resultRef |
| EP06 Evidence vérifiable admise | **PASS** | technical Evidence ingested + bound (NOT Mission / FS→SHA) |
| EP07 ReviewBundle / Result honnêtes | **PASS** | RB frozen; CE not_proven; Product UNCLAIMED |
| EP08 Fail-closed | **PASS** | fingerprint/project/empty-facts + Select/Start idempotence |
| EP09 No docs_write admission | **PASS** | no docs_write constraint |
| EP10 FS→Git→Review complète | **NON-CLAIM** | accepted for L3-S1 |

---

## 17. NON-CLAIMS

- GENERIC FS→SHA MATERIALIZATION — NOT PROVEN
- GENERIC FS→Git→Review COMPLETE — NOT PROVEN
- Mission Evidence métier / VerifiedChangeSet — NOT PROVEN
- PRODUCT_MISSION_FROM_DURABLE_CONTEXT stamped on Generic PREPARE — NOT DONE / NON-CLAIM
- Nora LIVE / Nora post-Evidence restitution by this integrated oracle — NOT PROVEN
- E2E COMPLET / REAL READY / PR READY / runtime v3 ADOPTED / L3-S2 STARTED — NOT CLAIMED
- Confirm CTA full UX beyond presentation — REACHABILITY NOT FULLY PROVEN

---

## 18. Réserves restantes / dette

| Item | Status |
|------|--------|
| Rich mission continuity (stamp + CycleInstance + finalizeGenericExecutionReview) | L3-S2 debt — NON-CLAIM |
| Generic FS→SHA / VerifiedChangeSet producer | L3-S2 debt — EP10 NON-CLAIM |
| Nora post-Evidence integrated | NOT PROVEN by L3-S1 oracle |
| Confirm residual static ExecutionSurface | Residual reachability |
| Project Git Integration (commit/push/PR) | Requires Morris GO after ChatGPT CR |

**Blocking reserves R1–R6 from prior CR:** addressed at DET tested scope as above. Remaining items are explicit NON-CLAIM / L3-S2 — not silent gaps masquerading as PASS.

---

## 19. Next Gate Contract

1. ChatGPT Critical Review against this handoff (remote canonical).
2. Morris decision: Git Integration of untracked oracle (project commit) **iff** CR accepts.
3. Do **not** start L3-S2 without distinct Morris GO.
4. Do **not** claim E2E COMPLET / G-REAL.

---

## 20. Verdict (Cursor)

**LOCAL L3-S1 CORRECTION READY FOR CHATGPT CRITICAL REVIEW**

---

## 21. Instruction ChatGPT obligatoire

Avant revue: lire depuis Git branche `sfia/review-handoff` le fichier
`sfia-review-handoff/latest-chatgpt-review.md`.

Contrôler: cycle/branche/HEAD; fichier test complet; validations; R1–R6; EP01–EP10; NON-CLAIMS; décisions Morris; SHA/blob handoff; publication distante.

Le rapport Cursor seul ne remplace pas le handoff Git.

---

## 22. Git Review Index

| Path | Status | Role |
|------|--------|------|
| `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S1.genericExecutionIntegrated.d0.test.ts` | **untracked (created from main)** | L3-S1 Correction Pass 01 oracle — FULL content §8 |
| `.tmp-sfia-review/chatgpt-review.md` | local temp modified | This Review Pack (not project-committed) |
| Product runtime sources | unchanged | ZERO mutation |

**HEAD / base:** `b20733c799aa4abef16a283dc2069fd61325367e`
**Oracle digest sha256_16:** `6372ddf8af1a9adb`
**Oracle digest sha256:** `6372ddf8af1a9adb0c8b0fcf62e33efd8c57613fefbd8350b94147189ed9f316`

---

END OF REVIEW PACK — AKG-M5 L3-S1 CRITICAL REVIEW CORRECTION PASS 01
