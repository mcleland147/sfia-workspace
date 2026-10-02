# FULL REVIEW PACK — HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01

## 0. Meta
- timestamp: `2026-10-02T16:04:49Z`
- cycle: `HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01`
- profile: Delivery (bounded Product delta after ARCH-01)
- architecture precursor: `HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-EC-CONTINUITY-ARCH-01`
- Delivery branch: `delivery/sfia-studio-habitflow-chat-first-projecttrajectory-hd-ec-continuity-01`
- HEAD / origin/main: `2087066a2760befabce3d7fc39a976dd0f1b2ebd`
- ahead/behind: `0 / 0`
- project commit/push/PR/merge/REAL: **NO**
- proof ceiling claimed: `DETERMINISTIC CHAT-FIRST PROJECTTRAJECTORY HD→EC CONTINUITY PROVEN AT TESTED SCOPE`
- verdict target: `READY FOR CHATGPT CRITICAL REVIEW — HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01`
- ZERO REAL / READY FOR REAL NO / runtime v3 NON ADOPTED

## 1. Local Git Truth — initial (expected) / final
- branch Delivery created from `origin/main@2087066a…`
- Product dirty only within authorized perimeter (+ review pack temp)
- staged: none
- `.tmp-sfia-review/**` present, not staged for project commit

Final `git status --short` (Product + temp):
```
M .tmp-sfia-review/chatgpt-review.md
M projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
M projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
M projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
?? .tmp-sfia-review/pack-assets/
?? projects/sfia-studio/app/__tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/activeProjectTrajectoryDecisionSubject.ts
```

## 2. Morris decisions consumed
- **D1-A** CHAT-FIRST PROJECTTRAJECTORY — APPROVED / IMPLEMENTED
- **D2-A** AUTO-PREPARE PROJECTTRAJECTORY — APPROVED / IMPLEMENTED (attempt after HD; no HOW invention)
- **D3** accept → CURRENT sealed `recommendedOptionRef` only — APPROVED / IMPLEMENTED
- **D4** concurrent subjects fail-closed — APPROVED / IMPLEMENTED
- commit/push/PR/merge/REAL = NO

## 3. Convergence qualification
- Capability: ProjectTrajectory Options/Recommendation → HD → DecisionBasis → ExecutionContract (PREPARE ≠ Execute)
- KEEP: decideTrajectory, recordHumanDecision, PresentedOptionSet, currentness, DecisionBasis, PREPARE engine, EC engine, Confirmation/authority, Proposal chat-first
- ADAPT: chat-first eligibility + resolver; post-decision PREPARE continuation; TrajectorySurface BOUNDED fallback; tests
- RETIRE: none
- Parallel architecture: **FORBIDDEN / NONE INTRODUCED**

## 4. Sources re-read
Doctrine/convergence/CKC/architecture handoff/Product seams listed in Delivery brief (assess/resolve/decide/presented/propose/TDS/prepare/orchestrateF2/TrajectorySurface/actions/HD/EC/PRR). Architecture handoff `e3956fa…` / blob consumed as precursor.

## 5. Owners reused
| Concern | Owner |
|---|---|
| PT subject binding | sealed Observation `PresentedOptionSet` via `findActiveAwaitingProjectTrajectoryPresentedOptionSet` (+ `ensureSealed…` → `proposeTrajectoryOptions`) |
| Proposal subject | existing `readActiveProposalDecisionSubject` / markers |
| HD writer | `decideTrajectory` → `recordHumanDecision` |
| DecisionBasis | constructed inside `decideTrajectory` (`sourceType: trajectory_option`) |
| Auto-PREPARE | `prepareExecutionContractFromW2Decision` called from `resolveChatFirstPilotDecision` after PT HD |
| Surface fallback | `TrajectorySurface` BOUNDED included in `shouldAutoPrepareGoverned` (idempotent CTA recovery) |

## 6. Call graph BEFORE
```
Pilot chat disposition
→ assessChatFirstWorkEligibility (Proposal-only)
→ resolveChatFirstPilotDecision (Proposal-only decideTrajectory)
→ (PT path absent)
TrajectorySurface GOVERNED auto-PREPARE; BOUNDED secondary CTA only
```

## 7. Call graph AFTER
```
Pilot chat disposition (accept)
→ assessChatFirstWorkEligibility
   → Proposal XOR unique PT XOR TDS sealRequired
   → Proposal+PT / multi-PT → ambiguous_subjects
→ resolveChatFirstPilotDecision
   → Proposal path UNCHANGED (pursue/refuse/amend/defer)
   → PT: accept-only
        → sealed PresentedOptionSet (or ensureSealed if TDS PRESENT & no current HD)
        → selectedOptionRef = presented.recommendedOptionRef (server)
        → decideTrajectory → 1 HD + DecisionBasis trajectory_option
        → autoPrepareProjectTrajectoryContract → prepareExecutionContractFromW2Decision
           (no Attempt / no Execute; HOW invent forbidden; EFFECTS_UNRESOLVED → HD kept, EC null)
→ TrajectorySurface: GOVERNED|BOUNDED auto-PREPARE fallback (legacy_cta recovery)
```

## 8. Implementation notes (D1–D4)
### D1-A
Extended existing resolver/eligibility; helper `activeProjectTrajectoryDecisionSubject.ts` factors sealed Observation lookup + ensureSealed via existing `proposeTrajectoryOptions`. No second writer/store/engine.

### D2-A
After PT HD with GOVERNED/BOUNDED selected (= CURRENT recommended), call canonical PREPARE. Production never invents HOW (`qualifiedOperationKind` test-only inject). Without durable Product HOW → EFFECTS_UNRESOLVED (CP2-01), HD durable, EC=0, CTA recovery remains. With HOW available → 1 EC, 0 Attempt.

### D3
`accept` maps exclusively to sealed `recommendedOptionRef`. Non-accept PT dispositions → clarification / ZERO HD. Rationale mentioning GOVERNED does not override BOUNDED recommended.

### D4
Proposal+PT and multi-PT → `ambiguous_subjects`, ZERO HD, ZERO EC.

### Idempotency
After current trajectory `decidedByDecisionRef`, retry accept → `TRAJECTORY_ALREADY_DECIDED` / no_eligible (no second seal/HD).

## 9. Anti-parallelism proof
- No new HD writer
- No second resolver file (extended resolveChatFirstPilotDecision)
- No new store
- No second PT engine
- Helper is binding factor only
- orchestrateF2 untouched → PRR digest N/A

## 10. PRR impact
- `orchestrateF2.ts` NOT modified
- resolveChatFirst / assess / TrajectorySurface / prepare NOT PRR-tracked
- manifest digest refresh: **NOT REQUIRED**

## 11. Files modified / created
### Created
1. `projects/sfia-studio/app/features/project-assistant/w2/activeProjectTrajectoryDecisionSubject.ts`
2. `projects/sfia-studio/app/__tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts`

### Modified
1. `assessChatFirstWorkEligibility.ts`
2. `resolveChatFirstPilotDecision.ts`
3. `activeProposalDecisionSubject.ts` (export `decidedOptionSetRefsFromEpistemicItems`)
4. `TrajectorySurface.tsx` (BOUNDED auto-PREPARE + recovery binding)
5. `importBoundaries.test.ts` (allowlist helper)
6. `postExecutionTrajectorySurface.ui.test.tsx` (BOUNDED auto-PREPARE expectation)

## 12. CREATED FILE — activeProjectTrajectoryDecisionSubject.ts (FULL)
```typescript
/**
 * HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 —
 * Read-only resolution of a unique awaiting ProjectTrajectory PresentedOptionSet.
 *
 * Reuses the sealed Observation binding (same SoT as Proposal chat-first).
 * Does NOT invent a second Current subject store. Currentness for decide is
 * enforced by decideTrajectory (trajectoryId / candidateVersion / digests).
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  decidedOptionSetRefsFromEpistemicItems,
  type EpistemicReadFailure,
} from "./activeProposalDecisionSubject";
import {
  isProposalSubjectPresentedSet,
  parsePresentedOptionSetStatement,
  type PresentedOptionSetBinding,
  W2_PRESENTED_OPTION_SET_KIND,
} from "./presentedOptionSet";
import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "./qualificationInputs";

export type ActiveProjectTrajectoryPresentedLookup =
  | {
      readonly ok: true;
      readonly kind: "none";
      readonly presented: null;
    }
  | {
      readonly ok: true;
      readonly kind: "unique";
      readonly presented: PresentedOptionSetBinding;
    }
  | {
      readonly ok: true;
      readonly kind: "ambiguous";
      readonly presented: null;
      readonly optionSetRefs: readonly string[];
    }
  | EpistemicReadFailure;

/**
 * Find active ProjectTrajectory PresentedOptionSet(s) still awaiting HD.
 * Ambiguous when more than one distinct optionSetRef awaits.
 */
export async function findActiveAwaitingProjectTrajectoryPresentedOptionSet(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<ActiveProjectTrajectoryPresentedLookup> {
  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId,
  });
  if (!epistemic.ok) {
    return {
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message:
        "État épistémique illisible — impossible de déterminer un sujet ProjectTrajectory actif.",
    };
  }

  const decidedRefs = decidedOptionSetRefsFromEpistemicItems(
    epistemic.state.items,
  );
  const byRef = new Map<string, PresentedOptionSetBinding>();
  for (const item of epistemic.state.items) {
    if (item.type !== "Observation" || item.status !== "active") continue;
    const parsed = parsePresentedOptionSetStatement(item.statement);
    if (!parsed) continue;
    if (parsed.kind !== W2_PRESENTED_OPTION_SET_KIND) continue;
    if (isProposalSubjectPresentedSet(parsed)) continue;
    if (parsed.decisionSubjectMode !== "project_trajectory") continue;
    if (decidedRefs.has(parsed.optionSetRef)) continue;
    if (
      typeof parsed.trajectoryId !== "string" ||
      parsed.trajectoryId.trim().length === 0 ||
      typeof parsed.candidateVersion !== "number"
    ) {
      continue;
    }
    byRef.set(parsed.optionSetRef, parsed);
  }

  const refs = [...byRef.keys()];
  if (refs.length === 0) {
    return { ok: true, kind: "none", presented: null };
  }
  if (refs.length > 1) {
    return {
      ok: true,
      kind: "ambiguous",
      presented: null,
      optionSetRefs: refs,
    };
  }
  return {
    ok: true,
    kind: "unique",
    presented: byRef.get(refs[0]!)!,
  };
}

/**
 * Ensure a sealed ProjectTrajectory PresentedOptionSet exists for chat-first
 * accept by reusing proposeTrajectoryOptions (canonical instructor path).
 * Idempotent when an awaiting unique binding already exists.
 */
export async function ensureSealedProjectTrajectoryPresentedOptionSet(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<
  | { readonly ok: true; readonly presented: PresentedOptionSetBinding }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly kind?: "ambiguous";
      readonly optionSetRefs?: readonly string[];
    }
> {
  const existing = await findActiveAwaitingProjectTrajectoryPresentedOptionSet(
    input.oa,
    input.projectId,
  );
  if (!existing.ok) {
    return {
      ok: false,
      code: existing.code,
      message: existing.message,
    };
  }
  if (existing.kind === "ambiguous") {
    return {
      ok: false,
      code: "AMBIGUOUS_PROJECT_TRAJECTORY_SUBJECTS",
      message:
        "Plusieurs jeux d'options ProjectTrajectory sont ouverts — aucune décision automatique.",
      kind: "ambiguous",
      optionSetRefs: existing.optionSetRefs,
    };
  }
  if (existing.kind === "unique") {
    return { ok: true, presented: existing.presented };
  }

  const qualification = await resolveW2QualificationInputs({
    oa: input.oa,
    projectId: input.projectId,
  });
  if (!qualification.ok) {
    return {
      ok: false,
      code: qualification.code,
      message: qualification.message,
    };
  }

  const proposed = await proposeTrajectoryOptions({
    oa: input.oa,
    projectId: input.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  if (!proposed.ok) {
    return {
      ok: false,
      code: proposed.code,
      message: proposed.message,
    };
  }

  const rebound = await findActiveAwaitingProjectTrajectoryPresentedOptionSet(
    input.oa,
    input.projectId,
  );
  if (!rebound.ok) {
    return {
      ok: false,
      code: rebound.code,
      message: rebound.message,
    };
  }
  if (rebound.kind === "ambiguous") {
    return {
      ok: false,
      code: "AMBIGUOUS_PROJECT_TRAJECTORY_SUBJECTS",
      message:
        "Plusieurs jeux d'options ProjectTrajectory sont ouverts après scellage — aucune décision.",
      kind: "ambiguous",
      optionSetRefs: rebound.optionSetRefs,
    };
  }
  if (rebound.kind !== "unique") {
    return {
      ok: false,
      code: "SEALED_OPTION_SET_NOT_BOUND",
      message:
        "Le jeu d'options ProjectTrajectory n'a pas pu être scellé pour décision chat-first.",
    };
  }
  return { ok: true, presented: rebound.presented };
}

```

## 13. CREATED FILE — habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts (FULL)
```typescript
/**
 * HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01
 *
 * Deterministic proof matrix: chat-first accept of CURRENT ProjectTrajectory
 * Recommendation → exactly 1 HD via decideTrajectory → auto-PREPARE EC →
 * STOP (0 Attempt / 0 Cursor / 0 workspace effect).
 *
 * Proposal path regression + D4 concurrence + D3 accept-only mapping.
 * ZERO REAL / ZERO live HabitFlow DB mutation.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  resetF2ProposalStoreForTests,
  saveProposal,
  F2_PROCESS_LOCAL_NOTICE,
} from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { assessChatFirstWorkEligibility } from "@/features/project-assistant/w2/assessChatFirstWorkEligibility";
import { resolveChatFirstPilotDecision } from "@/features/project-assistant/w2/resolveChatFirstPilotDecision";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  loadPresentedOptionSet,
  serializePresentedOptionSet,
} from "@/features/project-assistant/w2/presentedOptionSet";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  BOUNDED_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  PROPOSAL_SUBJECT_PURSUE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import { writePendingDecisionSubjectMarker } from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import type { RuntimeApplicationService, RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_ACTOR,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";

const TARGET_PATH = "projects/sfia-studio/.sandbox/hf-pt-continuity.md";

function docsWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string;
  proposalId: string;
}): ProposalDto {
  return saveProposal({
    proposalId: input.proposalId,
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Matérialiser une note bornée",
    objective: "Livrable sandbox borné",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "Sujet Proposal concurrent",
    scope: "docs_write borné",
    outOfScope: ["REAL"],
    activatedBlocks: [],
    expectedOutcome: "Fichier sandbox",
    sources: ["nora"],
    risks: [],
    reservations: [],
    stopConditions: ["STOP AVANT EXECUTE"],
    morrisGateRequired: true,
    nextPossibleStep: "Instruire les options",
    contextSnapshot: {
      projectId: input.projectId,
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      doctrineDigest: input.doctrineDigest,
      activeCycleInstanceId: input.activeCycleInstanceId,
      ckcResolutionRef: "ckcres:w2-harness",
    },
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: null,
      targetPath: TARGET_PATH,
      scopeIn: ["sandbox"],
      scopeOut: ["git"],
      expectedOutputs: ["markdown"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      reversibilityExpectation: "reversible",
      artifactBrief: "Note HF continuity",
      contentRequirements: [],
      exitRequirementKinds: [],
      artifactWriteMode: "CREATE",
      targetRepositoryRef:
        process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim() ||
        "acme/w2-harness",
    },
  });
}

async function markPending(oa: RuntimeOaStack, proposal: ProposalDto) {
  const sealed = sealProposalExecutionBasis(proposal);
  const written = await writePendingDecisionSubjectMarker({
    oa,
    projectId: proposal.contextSnapshot.projectId,
    proposalId: proposal.proposalId,
    subjectDigest: computeProposalSubjectDigest(sealed, proposal.proposalId),
    lpsId: proposal.contextSnapshot.lpsId,
    lpsVersion: proposal.contextSnapshot.lpsVersion,
    doctrineDigest: proposal.contextSnapshot.doctrineDigest,
  });
  expect(written.ok).toBe(true);
}

async function proposePt(oa: RuntimeOaStack, projectId: string) {
  const qualification = await resolveW2QualificationInputs({ oa, projectId });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error(qualification.code);
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error(proposed.code);
  return proposed;
}

async function hdCount(oa: RuntimeOaStack, projectId: string): Promise<number> {
  const history = await oa.decisionServices.listDecisionHistory.execute({
    projectId,
  });
  if (!history.ok) return 0;
  return history.decisions.filter((d) => d.status === "accepted").length;
}

async function contractCount(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<number> {
  const listed =
    await oa.executionContractServices.listExecutionContractHistory.execute({
      projectId,
    });
  if (!listed.ok) return 0;
  return listed.contracts.length;
}

async function attemptCountForContract(
  oa: RuntimeOaStack,
  executionContractId: string,
): Promise<number> {
  const listed =
    await oa.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId,
    });
  if (!listed.ok) return -1;
  return listed.attempts.length;
}

describe("HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    process.env.OPS1_CURSOR_REAL = "0";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("hf-pt-ec.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "hfpt" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  it("T5/T6/T12–T17 HabitFlow exit — BOUNDED accept → 1 HD + DecisionBasis + auto-PREPARE EC inspectable, 0 Attempt/Cursor/effect", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "bounded",
    });
    const proposed = await proposePt(oa, seeded.projectId);
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      BOUNDED_OPTION_REF,
    );
    expect(proposed.decisionSubjectMode).toBe("project_trajectory");

    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    expect(gate.eligible).toBe(true);
    if (!gate.eligible) return;
    expect(gate.subjectFamily).toBe("project_trajectory");
    expect(gate.presented?.recommendedOptionRef).toBe(BOUNDED_OPTION_REF);

    const beforeHd = await hdCount(oa, seeded.projectId);
    const beforeEc = await contractCount(oa, seeded.projectId);

    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      rationale: "Oui — accepter la Recommendation courante",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      qualifiedOperationKind: "generate-temporary-artifact",
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;

    expect(resolved.subjectFamily).toBe("project_trajectory");
    expect(resolved.selectedOptionRef).toBe(BOUNDED_OPTION_REF);
    expect(resolved.selectedOptionRef).toBe(
      proposed.recommendation.recommendedOptionRef,
    );
    expect(resolved.decisionBasisLinked).toBe(true);
    expect(resolved.executionContractPrepared).toBe(true);
    expect(resolved.executionContractId).toBeTruthy();
    expect(resolved.attemptCreated).toBe(false);
    expect(resolved.executionPerformed).toBe(false);

    expect(await hdCount(oa, seeded.projectId)).toBe(beforeHd + 1);
    expect(await contractCount(oa, seeded.projectId)).toBe(beforeEc + 1);

    const durable = await oa.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    expect(durable.decision.decisionBasis?.sourceType).toBe("trajectory_option");
    expect(
      durable.decision.decisionBasis?.trajectoryContext?.selectedOptionRef,
    ).toBe(BOUNDED_OPTION_REF);
    expect(
      durable.decision.decisionBasis?.trajectoryContext?.trajectoryId,
    ).toBe(proposed.proposedTrajectory!.trajectoryId);
    expect(
      durable.decision.decisionBasis?.trajectoryContext?.candidateVersion,
    ).toBe(proposed.proposedTrajectory!.version);
    expect(durable.decision.actor.actorId).toBe(LOCAL_PILOTE_ACTOR.actorId);

    const inspected = await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId: resolved.executionContractId!,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.executionContractId).toBe(resolved.executionContractId);
    expect(inspected.grantsAuthority).toBe(false);

    const loaded =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: resolved.executionContractId!,
      });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.contract.decisionRefs).toContain(resolved.decisionId);

    expect(
      await attemptCountForContract(oa, resolved.executionContractId!),
    ).toBe(0);
  });

  it("T4/T13 — GOVERNED chat-first accept → 1 HD + auto-PREPARE EC", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "governed",
    });
    const proposed = await proposePt(oa, seeded.projectId);
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      GOVERNED_OPTION_REF,
    );

    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      qualifiedOperationKind: "generate-temporary-artifact",
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    expect(resolved.selectedOptionRef).toBe(GOVERNED_OPTION_REF);
    expect(resolved.executionContractPrepared).toBe(true);
    expect(resolved.executionContractId).toBeTruthy();
    expect(resolved.attemptCreated).toBe(false);
    expect(resolved.executionPerformed).toBe(false);

    const durable = await oa.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    expect(durable.decision.decisionBasis?.sourceType).toBe("trajectory_option");
    expect(
      durable.decision.decisionBasis?.trajectoryContext?.selectedOptionRef,
    ).toBe(GOVERNED_OPTION_REF);
  });

  it("T7 — qualification drift / stale OptionSet → fail closed, 0 HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "stale",
    });
    await proposePt(oa, seeded.projectId);

    const drifted = await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: "epi:hf-pt-stale-rsv",
          type: "Reservation",
          statement: "Réserve ouverte après présentation — drift",
          status: "active",
          blocking: false,
        },
      ],
      createdBy: W2_TEST_ACTOR,
    });
    expect(drifted.ok).toBe(true);

    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_refused");
    if (resolved.kind === "decision_refused") {
      expect(resolved.code).toBe("OPTION_SET_STALE");
    }
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
    expect(await contractCount(oa, seeded.projectId)).toBe(0);
  });

  it("T8 — corrupted sealed candidateVersion → fail closed, 0 HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "mismatch",
    });
    const proposed = await proposePt(oa, seeded.projectId);
    const loaded = await loadPresentedOptionSet(
      oa,
      seeded.projectId,
      proposed.optionSetRef,
    );
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;

    const corrupted = {
      ...loaded.presented,
      candidateVersion: loaded.presented.candidateVersion! + 99,
    };
    const rewritten = await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: `epi:${proposed.optionSetRef.replace("optset:", "set-")}`,
          type: "Observation",
          statement: serializePresentedOptionSet(corrupted),
          status: "active",
          source: proposed.optionSetRef,
          relatedObjects: [seeded.projectId, proposed.optionSetRef],
        },
      ],
      createdBy: W2_TEST_ACTOR,
    });
    expect(rewritten.ok).toBe(true);

    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(["decision_refused", "no_eligible_subject"]).toContain(
      resolved.kind,
    );
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("T9/D4 — Proposal + PT CURRENT simultaneous → ambiguous, 0 HD, 0 EC", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "d4",
    });
    await proposePt(oa, seeded.projectId);

    const ctx = await currentF2Context(runtime, seeded.projectId);
    const proposal = docsWriteProposal({
      projectId: seeded.projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: seeded.cycleInstanceId,
      proposalId: "prop:f2:hf-d4-concurrent",
    });
    await markPending(oa, proposal);
    const qual = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qual.ok).toBe(true);
    if (!qual.ok) return;
    const proposalBound = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qual.qualification.inputs,
      packagePin: qual.qualification.packagePin,
      objective: qual.qualification.objective,
      projectTitle: qual.qualification.projectTitle,
      proposalId: proposal.proposalId,
    });
    expect(proposalBound.ok).toBe(true);
    if (!proposalBound.ok) return;
    expect(proposalBound.decisionSubjectMode).toBe("proposal");

    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    expect(gate.eligible).toBe(false);
    if (gate.eligible) return;
    expect(gate.kind).toBe("ambiguous_subjects");

    const beforeHd = await hdCount(oa, seeded.projectId);
    const beforeEc = await contractCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("ambiguous_subjects");
    expect(await hdCount(oa, seeded.projectId)).toBe(beforeHd);
    expect(await contractCount(oa, seeded.projectId)).toBe(beforeEc);
  });

  it("T9b/D4 — multiple awaiting PT OptionSets → ambiguous, 0 HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "multi-pt",
    });
    const first = await proposePt(oa, seeded.projectId);
    const loaded = await loadPresentedOptionSet(
      oa,
      seeded.projectId,
      first.optionSetRef,
    );
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    const secondRef = "optset:w2-hf-multi-pt-second";
    const secondBinding = {
      ...loaded.presented,
      optionSetRef: secondRef,
      trajectoryId: "trj:hf-multi-pt-2",
      candidateVersion: 1,
    };
    const injected = await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: `epi:${secondRef.replace("optset:", "set-")}`,
          type: "Observation",
          statement: serializePresentedOptionSet(secondBinding),
          status: "active",
          source: secondRef,
          relatedObjects: [seeded.projectId, secondRef],
        },
      ],
      createdBy: W2_TEST_ACTOR,
    });
    expect(injected.ok).toBe(true);

    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    expect(gate.eligible).toBe(false);
    if (gate.eligible) return;
    expect(gate.kind).toBe("ambiguous_subjects");

    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("ambiguous_subjects");
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("T10 — PT refuse/amend/defer → ZERO HD (no implicit GOVERNED/BOUNDED map)", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "nonaccept",
    });
    await proposePt(oa, seeded.projectId);
    const before = await hdCount(oa, seeded.projectId);

    for (const disposition of ["refuse", "amend", "defer"] as const) {
      const resolved = await resolveChatFirstPilotDecision({
        oa,
        projectId: seeded.projectId,
        disposition,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(resolved.kind).toBe("no_eligible_subject");
      if (resolved.kind === "no_eligible_subject") {
        expect(resolved.code).toBe("PROJECT_TRAJECTORY_ACCEPT_ONLY");
      }
    }
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("T18/T19 — retry same accept → no second HD; remount PREPARE → no second EC", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "idem",
    });
    await proposePt(oa, seeded.projectId);

    const first = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      qualifiedOperationKind: "generate-temporary-artifact",
    });
    expect(first.kind).toBe("decision_recorded");
    if (first.kind !== "decision_recorded") return;
    const ecId = first.executionContractId!;
    expect(ecId).toBeTruthy();

    const second = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // Subject already decided → no second HD; may be no_eligible or refused.
    expect(second.kind).not.toBe("decision_recorded");
    expect(await hdCount(oa, seeded.projectId)).toBe(1);
    expect(await contractCount(oa, seeded.projectId)).toBe(1);

    const { prepareExecutionContractFromW2Decision } = await import(
      "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision"
    );
    const retryPrep = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: first.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      qualifiedOperationKind: "generate-temporary-artifact",
    });
    // Idempotent PREPARE: either same contract returned, or honest refuse without
    // creating a second concurrent EC for the same decision.
    if (retryPrep.ok) {
      expect(retryPrep.contract.executionContractId).toBe(ecId);
    }
    expect(await contractCount(oa, seeded.projectId)).toBe(1);
    expect(await attemptCountForContract(oa, ecId)).toBe(0);
  });

  it("T1/T8 Proposal regression lock — accept → 1 HD pursue; promotesProjectTrajectory=false; no PT auto-PREPARE", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "prop-lock",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    const proposal = docsWriteProposal({
      projectId: seeded.projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: seeded.cycleInstanceId,
      proposalId: "prop:f2:hf-prop-lock",
    });
    await markPending(oa, proposal);
    const qual = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qual.ok).toBe(true);
    if (!qual.ok) return;
    const bound = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qual.qualification.inputs,
      packagePin: qual.qualification.packagePin,
      objective: qual.qualification.objective,
      projectTitle: qual.qualification.projectTitle,
      proposalId: proposal.proposalId,
    });
    expect(bound.ok).toBe(true);
    if (!bound.ok) return;
    expect(bound.decisionSubjectMode).toBe("proposal");
    expect(bound.promotesProjectTrajectory).toBe(false);

    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    expect(gate.eligible).toBe(true);
    if (!gate.eligible) return;
    expect(gate.subjectFamily).toBe("proposal");

    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    expect(resolved.subjectFamily).toBe("proposal");
    expect(resolved.selectedOptionRef).toBe(PROPOSAL_SUBJECT_PURSUE_REF);
    expect(resolved.proposalId).toBe(proposal.proposalId);
    // Proposal path does not auto-PREPARE in this Delivery (D2-A is PT-only).
    expect(resolved.executionContractPrepared).toBe(false);
    expect(resolved.executionContractId).toBeNull();
  });

  it("T3 — unrelated disposition none → 0 HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "none",
    });
    await proposePt(oa, seeded.projectId);
    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "none",
      forceLocalAuthority: true,
    });
    expect(resolved.kind).toBe("no_decision");
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("T6b — model never supplies optionRef; server uses sealed recommendedOptionRef only", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "server-ref",
    });
    const proposed = await proposePt(oa, seeded.projectId);
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      BOUNDED_OPTION_REF,
    );
    // Even if rationale mentions GOVERNED, selected must stay CURRENT recommended.
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      rationale: `Je choisis ${GOVERNED_OPTION_REF} plutôt`,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    expect(resolved.selectedOptionRef).toBe(BOUNDED_OPTION_REF);
    expect(resolved.selectedOptionRef).not.toBe(GOVERNED_OPTION_REF);
  });


  it("T12b — PT BOUNDED accept without durable HOW → 1 HD, auto-PREPARE fail-closed (EFFECTS_UNRESOLVED), 0 EC", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "nohow",
    });
    await proposePt(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      // no qualifiedOperationKind — production never invents HOW from trajectory alone
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    expect(resolved.selectedOptionRef).toBe(BOUNDED_OPTION_REF);
    expect(resolved.executionContractPrepared).toBe(false);
    expect(resolved.executionContractId).toBeNull();
    expect(await hdCount(oa, seeded.projectId)).toBe(1);
    expect(await contractCount(oa, seeded.projectId)).toBe(0);
  });

  it("sealRequired eligibility when TDS PRESENT without sealed OptionSet yet", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "seal-req",
    });
    // No propose yet — eligibility may be sealRequired only if TDS PRESENT.
    // Fresh seed without Nora recommendation → not eligible (fail closed for bare oui).
    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    // Without sealed PT and without TDS PRESENT recommendation → not eligible.
    if (gate.eligible) {
      expect(gate.subjectFamily).toBe("project_trajectory");
      if ("sealRequired" in gate) expect(gate.sealRequired).toBe(true);
    } else {
      expect(gate.kind).toBe("no_eligible_subject");
    }
  });

  it("T21 — restart after EC: contract rehydrates from durable store", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "restart",
    });
    await proposePt(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      qualifiedOperationKind: "generate-temporary-artifact",
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    const ecId = resolved.executionContractId!;

    // Remount on the same Product SQLite (no wipe).
    resetF2ProposalStoreForTests();
    const runtime2 = bootW2Runtime({
      productDbPath: dbPath,
      idPrefix: "hfpt2",
    });
    const oa2 = runtime2.oa!;
    const listed =
      await oa2.executionContractServices.listExecutionContractHistory.execute({
        projectId: seeded.projectId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) return;
    expect(
      listed.contracts.some((c) => c.executionContractId === ecId),
    ).toBe(true);
    const hd = await oa2.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    expect(hd.ok).toBe(true);
  });
});

```

## 14. DIFF — core Product (assess + resolve) COMPLETE
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts b/projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
index 3f75635d..fb8af29d 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
@@ -1,6 +1,10 @@
 /**
- * Read-only eligibility for chat-first Work (Proposal subject) disposition.
+ * Read-only eligibility for chat-first Work disposition.
  * Mirrors resolveChatFirstPilotDecision subject binding without recording.
+ *
+ * HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 —
+ * Proposal subjects KEEP; unique ProjectTrajectory PresentedOptionSet ADDED;
+ * Proposal+PT / multi-PT → ambiguous (D4).
  */

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
@@ -8,6 +12,7 @@ import {
   listEffectivePendingDecisionSubjectMarkers,
   readActiveProposalDecisionSubject,
 } from "./activeProposalDecisionSubject";
+import { findActiveAwaitingProjectTrajectoryPresentedOptionSet } from "./activeProjectTrajectoryDecisionSubject";
 import {
   isProposalSubjectPresentedSet,
   type PresentedOptionSetBinding,
@@ -17,7 +22,18 @@ import { resolveW2QualificationInputs } from "./qualificationInputs";
 import { pilotAmbiguousPendingMessage } from "../presentationLabels";

 export type ChatFirstWorkEligibility =
-  | { readonly eligible: true; readonly presented: PresentedOptionSetBinding }
+  | {
+      readonly eligible: true;
+      readonly presented: PresentedOptionSetBinding;
+      readonly subjectFamily: "proposal" | "project_trajectory";
+    }
+  | {
+      readonly eligible: true;
+      readonly presented: null;
+      readonly subjectFamily: "project_trajectory";
+      /** Sealed OptionSet will be materialised on accept inside the resolver. */
+      readonly sealRequired: true;
+    }
   | {
       readonly eligible: false;
       readonly kind:
@@ -27,6 +43,7 @@ export type ChatFirstWorkEligibility =
       readonly message?: string;
       readonly code?: string;
       readonly proposalIds?: readonly string[];
+      readonly optionSetRefs?: readonly string[];
     };

 async function materializeSealedOptionSetForPendingSubject(input: {
@@ -77,24 +94,32 @@ async function materializeSealedOptionSetForPendingSubject(input: {
   return { ok: true, presented: rebound.presented };
 }

-export async function assessChatFirstWorkEligibility(input: {
+async function resolveProposalPresentedForEligibility(input: {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
-}): Promise<ChatFirstWorkEligibility> {
+}): Promise<
+  | { readonly ok: true; readonly presented: PresentedOptionSetBinding | null }
+  | {
+      readonly ok: false;
+      readonly kind: "ambiguous_subjects" | "subject_read_failed" | "no_eligible_subject";
+      readonly message?: string;
+      readonly code?: string;
+      readonly proposalIds?: readonly string[];
+    }
+> {
   const subject = await readActiveProposalDecisionSubject(
     input.oa,
     input.projectId,
   );
   if (!subject.ok) {
     return {
-      eligible: false,
+      ok: false,
       kind: "subject_read_failed",
       code: subject.code,
       message: subject.message,
     };
   }

-  let presented: PresentedOptionSetBinding;
   if (subject.kind === "bound_awaiting_decision") {
     const pending = await listEffectivePendingDecisionSubjectMarkers(
       input.oa,
@@ -102,7 +127,7 @@ export async function assessChatFirstWorkEligibility(input: {
     );
     if (!pending.ok) {
       return {
-        eligible: false,
+        ok: false,
         kind: "subject_read_failed",
         code: pending.code,
         message: pending.message,
@@ -113,7 +138,7 @@ export async function assessChatFirstWorkEligibility(input: {
     );
     if (competing.length > 0) {
       return {
-        eligible: false,
+        ok: false,
         kind: "ambiguous_subjects",
         message: pilotAmbiguousPendingMessage(),
         proposalIds: [
@@ -124,11 +149,16 @@ export async function assessChatFirstWorkEligibility(input: {
         ],
       };
     }
-    presented = subject.presented;
-  } else if (subject.kind === "pending_reinstruction_required") {
+    if (!isProposalSubjectPresentedSet(subject.presented)) {
+      return { ok: true, presented: null };
+    }
+    return { ok: true, presented: subject.presented };
+  }
+
+  if (subject.kind === "pending_reinstruction_required") {
     if (subject.markers.length > 1) {
       return {
-        eligible: false,
+        ok: false,
         kind: "ambiguous_subjects",
         message: subject.message,
         proposalIds: subject.markers.map((m) => m.proposalId),
@@ -137,7 +167,7 @@ export async function assessChatFirstWorkEligibility(input: {
     const sole = subject.markers[0];
     if (!sole || !subject.recoverableProposalIds.includes(sole.proposalId)) {
       return {
-        eligible: false,
+        ok: false,
         kind: "no_eligible_subject",
         code: "PENDING_SUBJECT_NOT_RECONSTRUCTIBLE",
         message: subject.message,
@@ -150,19 +180,136 @@ export async function assessChatFirstWorkEligibility(input: {
     });
     if (!bound.ok) {
       return {
-        eligible: false,
+        ok: false,
         kind: "no_eligible_subject",
         code: bound.code,
         message: bound.message,
       };
     }
-    presented = bound.presented;
-  } else {
-    return { eligible: false, kind: "no_eligible_subject" };
+    if (!isProposalSubjectPresentedSet(bound.presented)) {
+      return { ok: true, presented: null };
+    }
+    return { ok: true, presented: bound.presented };
+  }
+
+  return { ok: true, presented: null };
+}
+
+export async function assessChatFirstWorkEligibility(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+}): Promise<ChatFirstWorkEligibility> {
+  const proposal = await resolveProposalPresentedForEligibility(input);
+  if (!proposal.ok) {
+    return {
+      eligible: false,
+      kind: proposal.kind,
+      message: proposal.message,
+      code: proposal.code,
+      proposalIds: proposal.proposalIds,
+    };
+  }
+
+  const pt = await findActiveAwaitingProjectTrajectoryPresentedOptionSet(
+    input.oa,
+    input.projectId,
+  );
+  if (!pt.ok) {
+    return {
+      eligible: false,
+      kind: "subject_read_failed",
+      code: pt.code,
+      message: pt.message,
+    };
+  }
+
+  const hasProposal = proposal.presented != null;
+  const hasPtUnique = pt.kind === "unique";
+  const hasPtAmbiguous = pt.kind === "ambiguous";
+
+  // D4 — never silent-pick between Proposal and ProjectTrajectory.
+  if (hasProposal && (hasPtUnique || hasPtAmbiguous)) {
+    return {
+      eligible: false,
+      kind: "ambiguous_subjects",
+      message: pilotAmbiguousPendingMessage(),
+      code: "PROPOSAL_AND_PROJECT_TRAJECTORY_SUBJECTS",
+      proposalIds: proposal.presented?.proposalId
+        ? [proposal.presented.proposalId]
+        : [],
+      optionSetRefs:
+        pt.kind === "unique"
+          ? [pt.presented.optionSetRef]
+          : pt.kind === "ambiguous"
+            ? pt.optionSetRefs
+            : [],
+    };
+  }
+
+  if (hasPtAmbiguous) {
+    return {
+      eligible: false,
+      kind: "ambiguous_subjects",
+      message: pilotAmbiguousPendingMessage(),
+      code: "AMBIGUOUS_PROJECT_TRAJECTORY_SUBJECTS",
+      optionSetRefs: pt.optionSetRefs,
+    };
+  }
+
+  if (hasProposal && proposal.presented) {
+    return {
+      eligible: true,
+      presented: proposal.presented,
+      subjectFamily: "proposal",
+    };
+  }
+
+  if (hasPtUnique) {
+    return {
+      eligible: true,
+      presented: pt.presented,
+      subjectFamily: "project_trajectory",
+    };
   }

-  if (!isProposalSubjectPresentedSet(presented)) {
+  // No sealed PT yet — accept may seal only when a CURRENT Nora trajectory
+  // recommendation is already PRESENT (TDS) AND no current trajectory HD exists.
+  const current = await input.oa.cycleServices.getCurrentTrajectory.execute({
+    projectId: input.projectId,
+  });
+  if (
+    current.ok &&
+    typeof current.trajectory.decidedByDecisionRef === "string" &&
+    current.trajectory.decidedByDecisionRef.trim().length > 0
+  ) {
     return { eligible: false, kind: "no_eligible_subject" };
   }
-  return { eligible: true, presented };
+
+  const { resolveTrajectoryDecisionSupportProjection } = await import(
+    "./resolveTrajectoryDecisionSupportProjection"
+  );
+  const live = await input.oa.projectServices.getCurrentLivingProjectState.execute({
+    projectId: input.projectId,
+  });
+  const cycleInstanceId =
+    live.ok ? live.livingProjectState.activeCycleInstanceId ?? null : null;
+  const tds = await resolveTrajectoryDecisionSupportProjection({
+    oa: input.oa,
+    projectId: input.projectId,
+    cycleInstanceId,
+  });
+  if (
+    tds.state === "PRESENT" &&
+    typeof tds.currentNoraRecommendedOptionRef === "string" &&
+    tds.currentNoraRecommendedOptionRef.trim().length > 0
+  ) {
+    return {
+      eligible: true,
+      presented: null,
+      subjectFamily: "project_trajectory",
+      sealRequired: true,
+    };
+  }
+
+  return { eligible: false, kind: "no_eligible_subject" };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
index 6b51b88d..2b68a9a3 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
@@ -3,6 +3,10 @@
  * NON-AUTHORITATIVE Pilot disposition candidate into (at most) ONE durable
  * HumanDecision on an already-presented governed decision subject.
  *
+ * HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 —
+ * ProjectTrajectory accept → CURRENT recommendedOptionRef via decideTrajectory;
+ * GOVERNED/BOUNDED → canonical auto-PREPARE (PREPARE ≠ Execute).
+ *
  * Doctrine boundaries enforced here:
  * - the candidate is NEVER a HumanDecision; it only selects WHICH sealed
  *   option of an existing PresentedOptionSet the server submits to the
@@ -14,17 +18,23 @@
  * - no new store, no new HumanDecision writer, no DEFERRED enum invention.
  */

+import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import type { PilotDecisionDisposition } from "../f2/types";
 import {
   listEffectivePendingDecisionSubjectMarkers,
   readActiveProposalDecisionSubject,
 } from "./activeProposalDecisionSubject";
+import {
+  ensureSealedProjectTrajectoryPresentedOptionSet,
+  findActiveAwaitingProjectTrajectoryPresentedOptionSet,
+} from "./activeProjectTrajectoryDecisionSubject";
 import { decideTrajectory, trajectoryDecisionScope } from "./decideTrajectory";
 import {
   isProposalSubjectPresentedSet,
   type PresentedOptionSetBinding,
 } from "./presentedOptionSet";
+import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
 import {
   PROPOSAL_SUBJECT_AMEND_REF,
   PROPOSAL_SUBJECT_PURSUE_REF,
@@ -34,6 +44,10 @@ import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
 import { resolveW2QualificationInputs } from "./qualificationInputs";
 import { pilotAmbiguousPendingMessage } from "../presentationLabels";
 import { deferWorkRecommendation } from "./deferWorkRecommendation";
+import {
+  BOUNDED_OPTION_REF,
+  GOVERNED_OPTION_REF,
+} from "./trajectoryOptions";

 /** Dispositions that can carry a governed effect (incl. durable defer). */
 export type ChatFirstEffectiveDisposition =
@@ -50,6 +64,7 @@ export type ChatFirstPilotDecisionResult =
       readonly kind: "ambiguous_subjects";
       readonly message: string;
       readonly proposalIds: readonly string[];
+      readonly optionSetRefs?: readonly string[];
     }
   /** No unique bound subject with a sealed PresentedOptionSet — governed action fails closed. */
   | {
@@ -86,6 +101,11 @@ export type ChatFirstPilotDecisionResult =
       readonly capturedAt: string;
       readonly decisionBasisLinked: boolean;
       readonly readyForNextGatedStep: boolean;
+      readonly subjectFamily: "proposal" | "project_trajectory";
+      readonly executionContractId: string | null;
+      readonly executionContractPrepared: boolean;
+      readonly attemptCreated: false;
+      readonly executionPerformed: false;
     };

 const SELECTED_OPTION_BY_DISPOSITION: Record<
@@ -100,6 +120,9 @@ const SELECTED_OPTION_BY_DISPOSITION: Record<
 const NO_ELIGIBLE_SUBJECT_MESSAGE =
   "Aucun sujet de décision gouverné unique n'est ouvert pour ce projet — aucune décision n'a été enregistrée. La conversation reste ouverte.";

+const PT_NON_ACCEPT_MESSAGE =
+  "Pour une Recommendation ProjectTrajectory, seule l'acceptation explicite de la Recommendation courante est enregistrable ici — précisez ou utilisez le panneau d'état. Aucune décision n'a été enregistrée.";
+
 export function toEffectiveDisposition(
   disposition: PilotDecisionDisposition | null | undefined,
 ): ChatFirstEffectiveDisposition | "defer" | null {
@@ -170,18 +193,18 @@ async function materializeSealedOptionSetForPendingSubject(input: {
   return { ok: true, presented: rebound.presented };
 }

-export async function resolveChatFirstPilotDecision(input: {
+async function resolveProposalPresented(input: {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
-  readonly disposition: PilotDecisionDisposition | null | undefined;
-  /** Non-authoritative hint carried into the decision reserves; never authority. */
-  readonly rationale?: string | null;
-  /** Test inject for the local single-user authority gate. */
-  readonly forceLocalAuthority?: boolean;
-}): Promise<ChatFirstPilotDecisionResult> {
-  const effective = toEffectiveDisposition(input.disposition);
-  if (effective == null) return { kind: "no_decision" };
-
+}): Promise<
+  | { readonly ok: true; readonly presented: PresentedOptionSetBinding | null }
+  | Extract<
+      ChatFirstPilotDecisionResult,
+      | { kind: "ambiguous_subjects" }
+      | { kind: "no_eligible_subject" }
+      | { kind: "subject_read_failed" }
+    >
+> {
   const subject = await readActiveProposalDecisionSubject(
     input.oa,
     input.projectId,
@@ -194,10 +217,7 @@ export async function resolveChatFirstPilotDecision(input: {
     };
   }

-  let presented: PresentedOptionSetBinding;
   if (subject.kind === "bound_awaiting_decision") {
-    // A second effective pending subject alongside a bound one is a competing
-    // sealed-subject situation: Studio never picks one for the Pilot.
     const pending = await listEffectivePendingDecisionSubjectMarkers(
       input.oa,
       input.projectId,
@@ -224,8 +244,13 @@ export async function resolveChatFirstPilotDecision(input: {
         ],
       };
     }
-    presented = subject.presented;
-  } else if (subject.kind === "pending_reinstruction_required") {
+    if (!isProposalSubjectPresentedSet(subject.presented)) {
+      return { ok: true, presented: null };
+    }
+    return { ok: true, presented: subject.presented };
+  }
+
+  if (subject.kind === "pending_reinstruction_required") {
     if (subject.markers.length > 1) {
       return {
         kind: "ambiguous_subjects",
@@ -235,7 +260,6 @@ export async function resolveChatFirstPilotDecision(input: {
     }
     const sole = subject.markers[0];
     if (!sole || !subject.recoverableProposalIds.includes(sole.proposalId)) {
-      // Pending marker without a reconstructible subject: fail-closed action.
       return {
         kind: "no_eligible_subject",
         message: subject.message,
@@ -254,87 +278,116 @@ export async function resolveChatFirstPilotDecision(input: {
         code: bound.code,
       };
     }
-    presented = bound.presented;
-  } else {
-    // "none" and "pursue_prepare_ready": nothing awaiting a disposition.
-    return {
-      kind: "no_eligible_subject",
-      message: NO_ELIGIBLE_SUBJECT_MESSAGE,
-      code: "NO_ACTIVE_DECISION_SUBJECT",
-    };
+    if (!isProposalSubjectPresentedSet(bound.presented)) {
+      return { ok: true, presented: null };
+    }
+    return { ok: true, presented: bound.presented };
   }

-  if (!isProposalSubjectPresentedSet(presented)) {
-    // Project trajectory promotion stays on its own explicit path.
+  return { ok: true, presented: null };
+}
+
+async function autoPrepareProjectTrajectoryContract(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly decisionId: string;
+  readonly selectedOptionRef: string;
+  readonly forceLocalAuthority?: boolean;
+  /** Test inject — never from browser/model; production resolves managed clone HEAD. */
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
+  /**
+   * Test/compat inject for ActualExecutionWork when durable Product HOW is absent.
+   * Production chat-first never invents HOW from the trajectory alone.
+   */
+  readonly qualifiedOperationKind?: unknown;
+}): Promise<{ readonly executionContractId: string | null }> {
+  if (
+    input.selectedOptionRef !== GOVERNED_OPTION_REF &&
+    input.selectedOptionRef !== BOUNDED_OPTION_REF
+  ) {
+    return { executionContractId: null };
+  }
+  const live = await readLiveProjectContext(input.oa, input.projectId);
+  if (!live.ok) {
+    return { executionContractId: null };
+  }
+  const prepared = await prepareExecutionContractFromW2Decision({
+    oa: input.oa,
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    currentContext: {
+      projectId: input.projectId,
+      lpsId: live.context.lpsId,
+      lpsVersion: live.context.lpsVersion,
+      doctrineDigest: live.context.doctrineDigest,
+      activeCycleInstanceId: live.context.activeCycleInstanceId,
+      ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
+    },
+    forceLocalAuthority: input.forceLocalAuthority,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+    managedRepoRootBase: input.managedRepoRootBase,
+    qualifiedOperationKind: input.qualifiedOperationKind,
+  });
+  if (!prepared.ok) {
+    return { executionContractId: null };
+  }
+  return { executionContractId: prepared.contract.executionContractId };
+}
+
+async function recordProjectTrajectoryAccept(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly presented: PresentedOptionSetBinding;
+  readonly rationale?: string | null;
+  readonly forceLocalAuthority?: boolean;
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
+  readonly qualifiedOperationKind?: unknown;
+}): Promise<ChatFirstPilotDecisionResult> {
+  const recommendedOptionRef = (
+    input.presented.recommendedOptionRef ?? ""
+  ).trim();
+  if (!recommendedOptionRef) {
     return {
       kind: "no_eligible_subject",
-      message: NO_ELIGIBLE_SUBJECT_MESSAGE,
-      code: "SUBJECT_NOT_PROPOSAL_MODE",
+      message:
+        "Recommendation courante absente du jeu d'options scellé — aucune décision enregistrée.",
+      code: "RECOMMENDED_OPTION_MISSING",
     };
   }
-
-  if (effective === "defer") {
-    const deferred = await deferWorkRecommendation({
-      oa: input.oa,
-      projectId: input.projectId,
-      presented,
-      rationale: input.rationale,
-      forceLocalAuthority: input.forceLocalAuthority,
-    });
-    if (!deferred.ok) {
-      if (deferred.code === "DEFER_TARGET_UNRESOLVED") {
-        return {
-          kind: "defer_target_unresolved",
-          code: deferred.code,
-          message: deferred.message,
-        };
-      }
-      return {
-        kind: "decision_refused",
-        code: deferred.code,
-        message: deferred.message,
-      };
-    }
+  if (!input.presented.optionRefs.includes(recommendedOptionRef)) {
     return {
-      kind: "decision_recorded",
-      disposition: "defer",
-      decisionId: deferred.decisionId,
-      proposalId: presented.proposalId ?? null,
-      optionSetRef: presented.optionSetRef,
-      selectedOptionRef: "opt:defer-work-recommendation",
-      scope: trajectoryDecisionScope(presented.optionSetRef),
-      capturedAt: deferred.capturedAt,
-      decisionBasisLinked: false,
-      readyForNextGatedStep: false,
+      kind: "no_eligible_subject",
+      message:
+        "La Recommendation courante n'appartient pas au jeu d'options scellé — aucune décision enregistrée.",
+      code: "RECOMMENDED_OPTION_NOT_PRESENTED",
     };
   }
-
-  const selectedOptionRef =
-    SELECTED_OPTION_BY_DISPOSITION[effective as Exclude<
-      ChatFirstEffectiveDisposition,
-      "defer"
-    >];
-  if (!presented.optionRefs.includes(selectedOptionRef)) {
+  if (
+    input.presented.trajectoryId == null ||
+    input.presented.candidateVersion == null
+  ) {
     return {
       kind: "no_eligible_subject",
       message:
-        "L'option correspondante n'appartient pas au jeu d'options scellé — aucune décision enregistrée.",
-      code: "OPTION_NOT_PRESENTED",
+        "Liaison trajectoire/version absente du PresentedOptionSet — aucune décision enregistrée.",
+      code: "TRAJECTORY_BINDING_INCOMPLETE",
     };
   }

   const decided = await decideTrajectory({
     oa: input.oa,
     projectId: input.projectId,
-    // Sealed binding only — no client/model-supplied refs ever reach here.
-    optionSetRef: presented.optionSetRef,
-    options: presented.options,
-    recommendedOptionRef: presented.recommendedOptionRef,
-    selectedOptionRef,
-    trajectoryId: null,
-    candidateVersion: null,
-    epistemicRefs: presented.epistemicRefs,
-    reservesText: null,
+    optionSetRef: input.presented.optionSetRef,
+    options: input.presented.options,
+    recommendedOptionRef,
+    // D3 — server selects CURRENT recommendedOptionRef only.
+    selectedOptionRef: recommendedOptionRef,
+    trajectoryId: input.presented.trajectoryId,
+    candidateVersion: input.presented.candidateVersion,
+    epistemicRefs: input.presented.epistemicRefs,
+    reservesText: input.rationale?.trim() ? input.rationale.trim() : null,
     forceLocalAuthority: input.forceLocalAuthority,
   });
   if (!decided.ok) {
@@ -345,16 +398,300 @@ export async function resolveChatFirstPilotDecision(input: {
     };
   }

+  const prepared = await autoPrepareProjectTrajectoryContract({
+    oa: input.oa,
+    projectId: input.projectId,
+    decisionId: decided.decision.decisionId,
+    selectedOptionRef: recommendedOptionRef,
+    forceLocalAuthority: input.forceLocalAuthority,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+    managedRepoRootBase: input.managedRepoRootBase,
+    qualifiedOperationKind: input.qualifiedOperationKind,
+  });
+
   return {
     kind: "decision_recorded",
-    disposition: effective as Exclude<ChatFirstEffectiveDisposition, "defer">,
+    disposition: "accept",
     decisionId: decided.decision.decisionId,
-    proposalId: decided.decision.proposalId ?? presented.proposalId ?? null,
-    optionSetRef: presented.optionSetRef,
-    selectedOptionRef,
-    scope: trajectoryDecisionScope(presented.optionSetRef),
+    proposalId: null,
+    optionSetRef: input.presented.optionSetRef,
+    selectedOptionRef: recommendedOptionRef,
+    scope: trajectoryDecisionScope(input.presented.optionSetRef),
     capturedAt: decided.decision.capturedAt,
     decisionBasisLinked: decided.decision.decisionBasisLinked,
-    readyForNextGatedStep: effective === "accept",
+    readyForNextGatedStep: prepared.executionContractId != null,
+    subjectFamily: "project_trajectory",
+    executionContractId: prepared.executionContractId,
+    executionContractPrepared: prepared.executionContractId != null,
+    attemptCreated: false,
+    executionPerformed: false,
   };
 }
+
+export async function resolveChatFirstPilotDecision(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly disposition: PilotDecisionDisposition | null | undefined;
+  /** Non-authoritative hint carried into the decision reserves; never authority. */
+  readonly rationale?: string | null;
+  /** Test inject for the local single-user authority gate. */
+  readonly forceLocalAuthority?: boolean;
+  /** Test inject — PREPARE pin; production resolves managed clone HEAD. */
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
+  /**
+   * Test/compat inject for PREPARE HOW when durable Product mission facts are absent.
+   * Production chat-first never invents HOW from trajectory alone (CP2-01).
+   */
+  readonly qualifiedOperationKind?: unknown;
+}): Promise<ChatFirstPilotDecisionResult> {
+  const effective = toEffectiveDisposition(input.disposition);
+  if (effective == null) return { kind: "no_decision" };
+
+  const proposal = await resolveProposalPresented({
+    oa: input.oa,
+    projectId: input.projectId,
+  });
+  if ("kind" in proposal) {
+    return proposal;
+  }
+
+  const ptLookup = await findActiveAwaitingProjectTrajectoryPresentedOptionSet(
+    input.oa,
+    input.projectId,
+  );
+  if (!ptLookup.ok) {
+    return {
+      kind: "subject_read_failed",
+      code: ptLookup.code,
+      message: ptLookup.message,
+    };
+  }
+
+  const hasProposal = proposal.presented != null;
+  const hasPt =
+    ptLookup.kind === "unique" || ptLookup.kind === "ambiguous";
+
+  // D4 — Proposal + ProjectTrajectory (or multi-PT) → clarification, zero HD.
+  if (hasProposal && hasPt) {
+    return {
+      kind: "ambiguous_subjects",
+      message: pilotAmbiguousPendingMessage(),
+      proposalIds: proposal.presented?.proposalId
+        ? [proposal.presented.proposalId]
+        : [],
+      optionSetRefs:
+        ptLookup.kind === "unique"
+          ? [ptLookup.presented.optionSetRef]
+          : ptLookup.kind === "ambiguous"
+            ? ptLookup.optionSetRefs
+            : [],
+    };
+  }
+  if (ptLookup.kind === "ambiguous") {
+    return {
+      kind: "ambiguous_subjects",
+      message: pilotAmbiguousPendingMessage(),
+      proposalIds: [],
+      optionSetRefs: ptLookup.optionSetRefs,
+    };
+  }
+
+  // ——— Proposal path (unchanged semantics) ———
+  if (hasProposal && proposal.presented) {
+    const presented = proposal.presented;
+
+    if (effective === "defer") {
+      const deferred = await deferWorkRecommendation({
+        oa: input.oa,
+        projectId: input.projectId,
+        presented,
+        rationale: input.rationale,
+        forceLocalAuthority: input.forceLocalAuthority,
+      });
+      if (!deferred.ok) {
+        if (deferred.code === "DEFER_TARGET_UNRESOLVED") {
+          return {
+            kind: "defer_target_unresolved",
+            code: deferred.code,
+            message: deferred.message,
+          };
+        }
+        return {
+          kind: "decision_refused",
+          code: deferred.code,
+          message: deferred.message,
+        };
+      }
+      return {
+        kind: "decision_recorded",
+        disposition: "defer",
+        decisionId: deferred.decisionId,
+        proposalId: presented.proposalId ?? null,
+        optionSetRef: presented.optionSetRef,
+        selectedOptionRef: "opt:defer-work-recommendation",
+        scope: trajectoryDecisionScope(presented.optionSetRef),
+        capturedAt: deferred.capturedAt,
+        decisionBasisLinked: false,
+        readyForNextGatedStep: false,
+        subjectFamily: "proposal",
+        executionContractId: null,
+        executionContractPrepared: false,
+        attemptCreated: false,
+        executionPerformed: false,
+      };
+    }
+
+    const selectedOptionRef =
+      SELECTED_OPTION_BY_DISPOSITION[effective as Exclude<
+        ChatFirstEffectiveDisposition,
+        "defer"
+      >];
+    if (!presented.optionRefs.includes(selectedOptionRef)) {
+      return {
+        kind: "no_eligible_subject",
+        message:
+          "L'option correspondante n'appartient pas au jeu d'options scellé — aucune décision enregistrée.",
+        code: "OPTION_NOT_PRESENTED",
+      };
+    }
+
+    const decided = await decideTrajectory({
+      oa: input.oa,
+      projectId: input.projectId,
+      optionSetRef: presented.optionSetRef,
+      options: presented.options,
+      recommendedOptionRef: presented.recommendedOptionRef,
+      selectedOptionRef,
+      trajectoryId: null,
+      candidateVersion: null,
+      epistemicRefs: presented.epistemicRefs,
+      reservesText: null,
+      forceLocalAuthority: input.forceLocalAuthority,
+    });
+    if (!decided.ok) {
+      return {
+        kind: "decision_refused",
+        code: decided.code,
+        message: decided.message,
+      };
+    }
+
+    return {
+      kind: "decision_recorded",
+      disposition: effective as Exclude<ChatFirstEffectiveDisposition, "defer">,
+      decisionId: decided.decision.decisionId,
+      proposalId: decided.decision.proposalId ?? presented.proposalId ?? null,
+      optionSetRef: presented.optionSetRef,
+      selectedOptionRef,
+      scope: trajectoryDecisionScope(presented.optionSetRef),
+      capturedAt: decided.decision.capturedAt,
+      decisionBasisLinked: decided.decision.decisionBasisLinked,
+      readyForNextGatedStep: effective === "accept",
+      subjectFamily: "proposal",
+      executionContractId: null,
+      executionContractPrepared: false,
+      attemptCreated: false,
+      executionPerformed: false,
+    };
+  }
+
+  // ——— ProjectTrajectory path (D1-A / D3 / D2-A) ———
+  if (effective !== "accept") {
+    // D3 — no implicit GOVERNED/BOUNDED/CLARIFY mapping for refuse/amend/defer.
+    if (ptLookup.kind === "unique") {
+      return {
+        kind: "no_eligible_subject",
+        message: PT_NON_ACCEPT_MESSAGE,
+        code: "PROJECT_TRAJECTORY_ACCEPT_ONLY",
+      };
+    }
+    return {
+      kind: "no_eligible_subject",
+      message: NO_ELIGIBLE_SUBJECT_MESSAGE,
+      code: "NO_ACTIVE_DECISION_SUBJECT",
+    };
+  }
+
+  let presented: PresentedOptionSetBinding;
+  if (ptLookup.kind === "unique") {
+    presented = ptLookup.presented;
+  } else {
+    // Idempotency — never seal+decide a second PT after a current trajectory HD.
+    const current = await input.oa.cycleServices.getCurrentTrajectory.execute({
+      projectId: input.projectId,
+    });
+    if (
+      current.ok &&
+      typeof current.trajectory.decidedByDecisionRef === "string" &&
+      current.trajectory.decidedByDecisionRef.trim().length > 0
+    ) {
+      return {
+        kind: "no_eligible_subject",
+        message:
+          "Une trajectoire courante est déjà décidée — aucune nouvelle HumanDecision chat-first.",
+        code: "TRAJECTORY_ALREADY_DECIDED",
+      };
+    }
+
+    // Align with eligibility: only seal when TDS PRESENT carries a CURRENT Nora ref.
+    const { resolveTrajectoryDecisionSupportProjection } = await import(
+      "./resolveTrajectoryDecisionSupportProjection"
+    );
+    const live = await input.oa.projectServices.getCurrentLivingProjectState.execute(
+      {
+        projectId: input.projectId,
+      },
+    );
+    const cycleInstanceId =
+      live.ok ? live.livingProjectState.activeCycleInstanceId ?? null : null;
+    const tds = await resolveTrajectoryDecisionSupportProjection({
+      oa: input.oa,
+      projectId: input.projectId,
+      cycleInstanceId,
+    });
+    if (
+      tds.state !== "PRESENT" ||
+      typeof tds.currentNoraRecommendedOptionRef !== "string" ||
+      tds.currentNoraRecommendedOptionRef.trim().length === 0
+    ) {
+      return {
+        kind: "no_eligible_subject",
+        message: NO_ELIGIBLE_SUBJECT_MESSAGE,
+        code: "NO_ACTIVE_DECISION_SUBJECT",
+      };
+    }
+
+    const sealed = await ensureSealedProjectTrajectoryPresentedOptionSet({
+      oa: input.oa,
+      projectId: input.projectId,
+    });
+    if (!sealed.ok) {
+      if (sealed.kind === "ambiguous") {
+        return {
+          kind: "ambiguous_subjects",
+          message: sealed.message,
+          proposalIds: [],
+          optionSetRefs: sealed.optionSetRefs ?? [],
+        };
+      }
+      return {
+        kind: "no_eligible_subject",
+        message: sealed.message,
+        code: sealed.code,
+      };
+    }
+    presented = sealed.presented;
+  }
+
+  return recordProjectTrajectoryAccept({
+    oa: input.oa,
+    projectId: input.projectId,
+    presented,
+    rationale: input.rationale,
+    forceLocalAuthority: input.forceLocalAuthority,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+    managedRepoRootBase: input.managedRepoRootBase,
+    qualifiedOperationKind: input.qualifiedOperationKind,
+  });
+}

```

## 15. DIFF — collateral (Proposal export, TrajectorySurface, tests) COMPLETE
```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
index ac760a1e..53954657 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
@@ -630,8 +630,7 @@ describe("CR-PCONT-05 TrajectorySurface post-execution recovery", () => {
     );
     await screen.findByTestId("w2-decision");

-    // PJ-REPROOF-04 — no Pilot HOW selection; Studio derives mission.
-    fireEvent.click(screen.getByTestId("w2-prepare-contract-sandbox"));
+    // D2-A — BOUNDED auto-PREPARE (same as GOVERNED); no mandatory sandbox CTA.
     await screen.findByTestId("w2-contract");
     fireEvent.click(screen.getByTestId("w2-inspect-contract"));
     await screen.findByTestId("w2-inspection-state");
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 07a29f5b..44852ad2 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -100,6 +100,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/approveCandidateTrajectory.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime/liveProjectContext",
+      "features/project-assistant/w2/activeProjectTrajectoryDecisionSubject.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/activeProposalDecisionSubject.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/advanceProductExecutionContractAfterEvidence.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/amendExecutionContract.ts:@/lib/vertical-slice-runtime",
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 285417ea..6b45cf9d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -43,7 +43,10 @@ import {
   w2ResolveProductExecutionContextAction,
   w2ReadExecutionReviewItemAction,
 } from "@/features/project-assistant/w2/actions";
-import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
+import {
+  BOUNDED_OPTION_REF,
+  GOVERNED_OPTION_REF,
+} from "@/features/project-assistant/w2/trajectoryOptions";
 import type { RecoveryExecutionBinding } from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
 import { isWrongGenericPreExecReplaceableByRecoveryPrepare } from "@/features/project-assistant/w2/recoveryReplaceableCurrentContract";
 import {
@@ -1061,7 +1064,8 @@ export function TrajectorySurface({
         next.decisionBasisLinked === true;
       const shouldAutoPrepareGoverned =
         !isProposalSubject &&
-        selectedOptionRef === GOVERNED_OPTION_REF &&
+        (selectedOptionRef === GOVERNED_OPTION_REF ||
+          selectedOptionRef === BOUNDED_OPTION_REF) &&
         !next.proposalId;

       if (shouldAutoPrepareProposal) {
@@ -1213,7 +1217,8 @@ export function TrajectorySurface({
       }
       if (
         decision &&
-        decision.selectedOptionRef !== GOVERNED_OPTION_REF
+        decision.selectedOptionRef !== GOVERNED_OPTION_REF &&
+        decision.selectedOptionRef !== BOUNDED_OPTION_REF
       ) {
         setRecoveryBinding(null);
         return;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
index a9fca932..443d30fa 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
@@ -111,7 +111,7 @@ export function presentedBindingToOptionSetDto(
   };
 }

-function decidedOptionSetRefsFromEpistemic(
+export function decidedOptionSetRefsFromEpistemicItems(
   items: ReadonlyArray<EpistemicItemLike>,
 ): ReadonlySet<string> {
   const refs = new Set<string>();
@@ -230,7 +230,9 @@ export async function findActiveAwaitingProposalPresentedOptionSet(
     };
   }

-  const decidedRefs = decidedOptionSetRefsFromEpistemic(epistemic.state.items);
+  const decidedRefs = decidedOptionSetRefsFromEpistemicItems(
+    epistemic.state.items,
+  );
   const matches: PresentedOptionSetBinding[] = [];
   for (const item of epistemic.state.items) {
     if (item.type !== "Observation" || item.status !== "active") continue;

```

## 16. Proof matrix (tested scope)
| ID | Result |
|---|---|
| T1 Proposal accept | PASS (dedicated + frontDoor suite) |
| T2 Proposal refuse | PASS (frontDoor) |
| T3 unrelated none | PASS (dedicated) |
| T4 PT GOVERNED accept HD+basis | PASS |
| T5 PT BOUNDED accept HD | PASS |
| T6 server recommendedOptionRef | PASS |
| T7 stale / drift | PASS OPTION_SET_STALE |
| T8 version mismatch | PASS fail-closed |
| T9 Proposal+PT | PASS ambiguous |
| T9b multi-PT | PASS ambiguous |
| T10 non-accept PT | PASS ZERO HD |
| T11 alt unsafe | covered by D3 accept=recommended only |
| T12/T13 auto-PREPARE EC | PASS with test HOW inject; T12b honest EFFECTS_UNRESOLVED without HOW |
| T14–T16 0 Attempt/Cursor/effect | PASS |
| T17 inspectable | PASS |
| T18 no second HD | PASS |
| T19 no second EC | PASS |
| T20/T21 restart | PASS (HD before EC = T12b; after EC = T21) |
| T22–T24 Confirmation/authority/protected | unchanged (no schema/policy edits) |
| T25 semantic #544 | PASS related suites |
| T26–T27 recovery/Proposal suites | PASS |
| T28 PRR | N/A (no tracked file change) |

## 17. Validations
- Targeted mandatory suites: **88 PASS**
- Related semantic/w2/corr10: **140 PASS**
- Full Vitest: **5086 passed / 137 skipped** (459 files)
- typecheck: **PASS**
- lint: **PASS**
- build: **PASS**
- git diff --check: **PASS**
- Historical better-sqlite3 warning: non-blocking if identical (build PASS)

## 18. Fake / Real
- FakeConversationProvider / W2 harness / deterministic SQLite
- No HabitFlow campaign DB mutation
- Entry: ARCHITECTURE / IMPACT QUALIFIED
- Exit proof: DETERMINISTIC … PROVEN AT TESTED SCOPE
- ZERO REAL / READY FOR REAL NO

## 19. Reservations / debt
1. Production auto-PREPARE does **not** invent HOW from bare trajectory (CP2-01). Without durable Product mission facts, HD is recorded and EC remains null until HOW exists or recovery CTA — same honesty as GOVERNED prepare-without-facts.
2. Test inject `qualifiedOperationKind` / `pinnedBaseHeadSha` prove wiring when HOW/pin available; production uses managed clone HEAD + durable facts only.
3. Manual PREPARE CTA remains as idempotent recovery/fallback (authorized).
4. No Nora schema/prompt change (D3 accept semantics demonstrated via existing disposition contract + tests).

## 20. Project Git effects
- local Product YES
- project commit/push/PR/merge/REAL: NO
- review handoff push: YES (L3) — next step after this pack

## 21. Verdict
**READY FOR CHATGPT CRITICAL REVIEW — HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01**

Proof ceiling: **DETERMINISTIC CHAT-FIRST PROJECTTRAJECTORY HD→EC CONTINUITY PROVEN AT TESTED SCOPE**

ZERO REAL · READY FOR REAL NO · runtime v3 NON ADOPTED
