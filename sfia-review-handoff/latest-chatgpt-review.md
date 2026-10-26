# SFIA REVIEW PACK FULL — AKG-M5 L3-S1 PROJECT GIT INTEGRATION / DRAFT PR

**Profile:** CRITICAL
**Cycle type:** 13 — PR readiness
**Timestamp (UTC):** 2026-10-26T17:45:12Z
**Timestamp (local):** 2026-10-26T18:45:00+01:00
**Mono-cycle:** AKG-M5 L3-S1 PROJECT GIT INTEGRATION / DRAFT PR CRITICAL
**Process baseline:** SFIA v2.6

---

## 1. GO Morris

- **GO:** 2026-10-26 — PROJECT GIT INTEGRATION + DRAFT PR (Cycle 13).
- **Autorisé:** commit mono-fichier oracle; push branche; Draft PR; Review Pack FULL; handoff L3.
- **NON-GO:** undraft; merge; main; force push; L3-S2; REAL; OA-exclusive; runtime change; docs protégées.
- **Décisions inchangées:** T-C / L3-S1 / D-P6-SHE-01 ADOPTED.
- **Prior handoff (Correction Pass 01):** `111c649afffab73389a3eb8d7ca64c5ccb4d775f` / blob `e14fe883d24257c9a55f839f649c782736822935`

---

## 2. Git Truth initial

| Item | Value |
|------|-------|
| Repository | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s1-generic-det-integration` |
| Branch | `feat/akg-m5-l3-s1-generic-det-integration` |
| HEAD avant | `b20733c799aa4abef16a283dc2069fd61325367e` |
| origin/main | `b20733c799aa4abef16a283dc2069fd61325367e` |
| Remote feat branch (avant push) | ABSENT |
| Prior handoff tip | `111c649afffab73389a3eb8d7ca64c5ccb4d775f` |
| Porcelain initial | `M .tmp-sfia-review/chatgpt-review.md`; `??` oracle |
| Staged initial | none |

No BASELINE DRIFT. No PROJECT BRANCH MISMATCH. No unexpected project diffs.

---

## 3. Sources consultées

- Correction Pass 01 handoff (`111c649a` / blob `e14fe883`) — oracle §8 référence
- Decision Pack 05 / Generic Execution architecture (référence; non re-analysés hors intégrité)
- `scripts/sfia/publish-review-handoff.sh` + README
- CKC Cycle 13 via carte synthétique (candidate guidance)

PRR READ-ONLY. Roadmap non modifiée (retard documentaire connu vs merge #620 — non traité ici).

---

## 4. Intégrité oracle

| Check | Result |
|-------|--------|
| Path | `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S1.genericExecutionIntegrated.d0.test.ts` |
| SHA256 | `6372ddf8af1a9adb0c8b0fcf62e33efd8c57613fefbd8350b94147189ed9f316` |
| Match attendu Correction Pass 01 | **EXACT** |
| Secrets / paths sensibles | none observed |
| Second oracle parallèle | none |
| docs_write Product restored | no |
| Reformatting this cycle | **NONE** — contenu inchangé |

---

## 5. Validations pré-commit (ce cycle)

```
npx vitest run __tests__/project-assistant/akgM5L3S1.genericExecutionIntegrated.d0.test.ts
→ Test Files 1 passed | Tests 7 passed (2026-10-26)
npm run typecheck → PASS
git diff --check → clean (no unexpected project mutations from commands)
```

`CI=true npm test` : **NOT RUN THIS CYCLE.**
Previous Correction Pass 01 reported 6020 PASS / 142 SKIPPED — **PREVIOUS LOCAL RUN — REPORTED BY CURSOR.**

---

## 6. Commit projet

| Item | Value |
|------|-------|
| Commit | `de1fa7aefa0cc08c0afb6e2fbc307287f305427d` |
| Parent / base | `b20733c799aa4abef16a283dc2069fd61325367e` |
| Message | `test(studio): cover AKG-M5 L3-S1 generic DET integration` |
| Files | **A** oracle only (734 lines) |
| Review Pack in commit | **NO** |
| Product runtime | **ZERO** |

Staging contrôlé avant commit:

```
A projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S1.genericExecutionIntegrated.d0.test.ts
```

Post-commit SHA256 revalidé: EXACT match.

---

## 7. Push projet

| Item | Value |
|------|-------|
| Remote | `origin` https://github.com/mcleland147/sfia-workspace.git |
| Branch | `feat/akg-m5-l3-s1-generic-det-integration` (new upstream) |
| Remote SHA | `de1fa7aefa0cc08c0afb6e2fbc307287f305427d` |
| Local = remote | **YES** |
| Force push | **NO** |

---

## 8. Draft PR

| Item | Value |
|------|-------|
| Number | #621 |
| URL | https://github.com/mcleland147/sfia-workspace/pull/621 |
| isDraft | **true** |
| state | OPEN |
| baseRefName | main |
| headRefName | feat/akg-m5-l3-s1-generic-det-integration |
| headRefOid | `de1fa7aefa0cc08c0afb6e2fbc307287f305427d` |
| Changed files | **1** — oracle ADDED (+734) |
| Protected / Product files | **none** |
| Existing PR duplicate check | none before create |
| Merge / undraft | **NOT DONE** |

### CI GitHub

`statusCheckRollup` at verification time: **[]** → **CI NOT RUN / PENDING** (no checks observed yet).

**CI PENDING ≠ CI PASS.** Not claimed as PASS.

---

## 9. Contenu complet — fichier intégré (créé depuis main)

Path: `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S1.genericExecutionIntegrated.d0.test.ts`

sha256: `6372ddf8af1a9adb0c8b0fcf62e33efd8c57613fefbd8350b94147189ed9f316`

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

## 10. EP01–EP10 (inchangés vs Correction Pass 01 CR)

| EP | Verdict |
|----|---------|
| EP01–EP05, EP08–EP09 | PASS |
| EP06 | PASS — technical Evidence |
| EP07 | PASS — RB frozen; CE not_proven; Product UNCLAIMED |
| EP10 | NON-CLAIM |

Ce cycle n'élève pas le niveau de preuve fonctionnel — **PROJECT GIT-INTEGRATED TEST CANDIDATE** seulement.

---

## 11. NON-CLAIMS

- DET only / Fake Cursor
- technical Evidence only; no Mission Evidence
- no real file mutation observed
- no generic FS→SHA / no full FS→Git→Review
- no integrated Nora post-Evidence
- no E2E COMPLET / no REAL / G-REAL NOT GRANTED
- runtime v3 NON ADOPTED
- L3-S2 NOT STARTED
- READY TO MERGE / L3 PRODUCT COMPLETE — **NOT CLAIMED**
- CI globale GitHub PASS — **NOT CLAIMED** (PENDING/NOT RUN at verification)

---

## 12. R23 / R24

**R23:** Product comportement inchangé. KEEP Generic PREPARE / SHE / governedExecute / materializeW3bProductTerminal / Evidence Review OA. ADAPT = oracle déjà validé, maintenant Git-intégré.

**R24: NO PRODUCT SEMANTIC IMPACT.** PRR READ-ONLY. Pas de nouveau digest PRR. Pas de sync documentaire.

---

## 13. Fake / Real

| | |
|--|--|
| Max prior proof | DETERMINISTIC PROVEN AT TESTED SCOPE |
| This cycle proof | PROJECT GIT-INTEGRATED TEST CANDIDATE |
| Fake | TestOnlyRealExecutionLaunchPort |
| REAL / E2E REAL / G-REAL | NOT PROVEN / NOT GRANTED |

---

## 14. Gaps L3-S2 / réserves

- Generic Materialization Evidence / FS→SHA closure — **PROPOSÉ / PAS AUTORISÉ**
- Nora post-Evidence; Confirm UX runtime; rich mission stamp continuity
- CI GitHub checks: gate ouvert (PENDING/NOT RUN)

---

## 15. Next Gate

1. ChatGPT Critical PR Review (handoff + PR #621 diff + checks).
2. Morris GO distinct pour undraft/merge **iff** CR accepte.
3. Ne pas start L3-S2.

---

## 16. Verdict (Cursor)

**DRAFT PR CREATED — READY FOR CHATGPT CRITICAL PR REVIEW**

---

## 17. Instruction ChatGPT obligatoire

Avant Critical PR Review: lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`; vérifier SHA/blob; Draft PR #621 base/head/files/CI; EP/NON-CLAIMS; R23/R24.

Merge NOT GRANTED sans nouvelle décision Morris.

---

## 18. Git Review Index

| Item | Value |
|------|-------|
| base branch | main |
| HEAD avant | `b20733c799aa4abef16a283dc2069fd61325367e` |
| HEAD après | `de1fa7aefa0cc08c0afb6e2fbc307287f305427d` |
| Fichier créé | oracle L3-S1 (FULL §9) |
| Fichiers modifiés Product | none |
| Commit projet | `de1fa7aefa0cc08c0afb6e2fbc307287f305427d` |
| Push | origin/feat/akg-m5-l3-s1-generic-det-integration = HEAD |
| Draft PR | #621 https://github.com/mcleland147/sfia-workspace/pull/621 |
| PR files | oracle only |
| CI GitHub | NOT RUN / PENDING (rollup empty) |
| Décisions Morris | GO Git Integration + Draft PR 2026-10-26 |
| Fake/Real | DET candidate; REAL NOT PROVEN |
| Réserves | CI pending; L3-S2 not started; EP10 NON-CLAIM |
| Verdict | DRAFT PR CREATED — READY FOR CHATGPT CRITICAL PR REVIEW |

---

END OF REVIEW PACK — AKG-M5 L3-S1 PROJECT GIT INTEGRATION / DRAFT PR
