# SFIA Studio — PRODUCT CONTINUITY
## EC REHYDRATION — CRITICAL REVIEW MICRO-REMEDIATION — FULL Review Pack

**Timestamp (UTC):** 2026-09-16T10:45:00Z
**Review Pack:** FULL
**Cycle:** 8 — Delivery
**Typology:** RUN
**Profile:** Critical

**Verdict:**
`PRODUCT-CONTINUITY-EC-REHYDRATION — CRITICAL FAIL-CLOSED GAPS FIXED — SUBJECT CONTINUITY ERROR/PENDING BLOCKS GOVERNED EC ACTIONS — AUTHORITATIVE NONE CLEARS STALE CLIENT EC — PROJECT/CYCLE CONTEXT FAILS CLOSED — CORE RESTART-SAFE EC + INSPECTION REHYDRATION DESIGN PRESERVED — EXACT DOCS_WRITE TARGET + LEGACY INCOMPLETE INSPECTION BEHAVIOR PRESERVED — ZERO DOGFOOD MUTATION — ZERO REAL — NO PRODUCT GIT — READY FOR CHATGPT CRITICAL REVIEW`

---

## A. Timestamp
2026-09-16T10:45:00Z

## B. Git truth
- origin/main = `c2c8280b7cfaa1b3a5656fb55b1e46ba73b23130`
- worktree = `/Users/morris/Projects/sfia-studio-ec-rehydration-continuity`
- branch = `fix/sfia-studio-ec-rehydration-continuity`
- HEAD = `c2c8280b7cfaa1b3a5656fb55b1e46ba73b23130`
- Product commits ahead of main = 0
- Candidate remains LOCAL DIRTY (9 Product/test paths)

## C. Morris GO consumed
Bounded Critical Review micro-remediation only: close three ChatGPT Critical Review
fail-closed findings on the existing local dirty candidate; deterministic tests;
full validation; FULL Review Pack; Review Handoff L3.
NOT authorized: Product commit/push/PR; dogfood; Inspect/Confirm/Authorize/Execute;
LIVE/REAL; schema/persistence/architecture redesign.

## D. Cycle / RUN / Critical
Cycle 8 Delivery · RUN · Critical — Pilot backward-step on restart remains Critical;
this lot closes fail-closed composition gaps without redesigning the accepted resolver.

## E. Convergence
- V3-F02 semantic inter-session continuity
- V3-F11 native durable inspectable ExecutionContract
- V3-F12 effect / Confirmation / authority governance
- A3 / Product Completion trajectory continuity
- runtime v3 **NON ADOPTED**

## F. Prior handoff
- tip `208e9221bdf6c713236f14e2b5727806fa357621`
- blob `ca463eb26a7180fdf58468aa118c8ffc1f3522a5`

## G. ChatGPT Critical Review FAIL consumed
`PRODUCT-CONTINUITY-EC-REHYDRATION — CHATGPT CRITICAL REVIEW FAIL`
- CORE DURABLE REHYDRATION DESIGN ACCEPTED
- BLOCKER 1: Decision-Subject read error can still expose governed EC actions
- BLOCKER 2: durable `kind:none` does not clear stale client EC state
- GAP 3: Project/cycle read failure collapses to null

## H. PRE-MICRO 9-path list + SHA-256
- `readCurrentGovernedExecutionContinuity.ts` = `da8447d10123bb30878f11ca0a6cd4e381acc95c50bb6cf4f6e06fee5bd3af0b`
- `actions.ts` = `f11e86a09b4e6df5161c578464bdbaa91d3ae53e7c2820a80536238ba3817591`
- `types.ts` = `7c6ce2c143636a204639ff504a0c2bc7287e05ff3e4b156ddd6752011f30ad23`
- `TrajectorySurface.tsx` = `b44375f204b41a857b7b90082b46896c7482e4fef6cc5eae01b3745bd4472e07`
- `ecRehydrationContinuity.d0.test.ts` = `2b14c526c185c32260d91fe4feb18737b39ce7dc38c3eb627c0369ef35566618`
- `trajectorySurface.ui.test.tsx` = `a7e9a00a4f12c120479645c176207e332b20e7f89d920d4a5868f75b5bc22b47`
- `productJourneyProjectionCoherence.ui.test.tsx` = `1b65d27c5e028cc293b3816459117afe410907a47249a16f473742b78cac24ad`
- `preCycleTrajectoryCta.ui.test.tsx` = `f2ea18c60e634e4705dd25c9d2cdcda35dcb6a388cd12903cb743b7f6b1d782a`
- `importBoundaries.test.ts` = `f2615fea1df62725dc39d91511722ef3c1d84a2fdeec92611192c7e32a1c0676`

## I. Blocker 1 exact root cause
`useEffect` launched governed EC rehydration whenever `subjectReadStatus !== "pending"`,
including `subjectReadStatus === "error"`. A successful EC read could then
`setContract` / `setInspection` / `setError(null)` while Decision Subject truth was unresolved.
`continuityReadsUnresolved` hid generic Instruire but did **not** disable Inspect/Confirm/Authorize.

## J. Blocker 1 correction
1. Governed continuity discovery runs only when `subjectReadStatus === "ready"`.
2. On `subjectReadStatus === "error"`: clear contract/inspection/authorization/amendment UI;
   set `executionContinuityReadStatus = "error"`; do **not** invoke the governed read;
   preserve the Decision Subject error (no later `setError(null)` from continuity).
3. `governedContinuationBlocked = continuityReadsUnresolved` gates Inspect / Amend /
   Confirm / Authorize / Execute disable predicates.

## K. subject error/pending action-gate tests
- `EC rehydration micro — subject ERROR does not invoke governed continuity or expose EC actions`
- `EC rehydration micro — refresh subject pending disables governed EC mutating actions`

## L. Blocker 2 exact root cause
`result.kind === "none"` only set continuity status to ready and intentionally kept
any existing local contract, allowing React state to outrank durable "no current EC".

## M. Blocker 2 correction
On authoritative `kind: "none"`, clear `contract`, `inspection`, `authorization`,
`amendmentDraft`, and `amendmentNotice`. Server durable truth wins.

## N. active→none stale-clear test
- `EC rehydration micro — active then authoritative none clears stale EC card` — PASS

## O. Gap 3 exact root cause
`resolveActiveCycleInstanceId()` returned `null` both when `getProject` failed and when
the Project had no active cycle — collapsing distinct integrity states.

Additionally, cycle coherence only failed when **both** candidate and active cycle
existed and differed, allowing explicit EC cycle link + missing Project active cycle.

## P. typed Project read correction
Replaced nullable helper with `readProjectActiveCycleContext`:
- `{ ok: true, activeCycleInstanceId: string | null }`
- `{ ok: false, code: EXECUTION_CONTINUITY_INTEGRITY_FAILED, ... }` when Project read fails

## Q. explicit cycle-link coherence rule
- candidate.cycleInstanceId present + Project active missing → INTEGRITY_FAILED
- candidate.cycleInstanceId present + active differs → INTEGRITY_FAILED
- candidate.cycleInstanceId present + active matches → continue
- candidate has no cycleInstanceId → preserve prior compatibility

## R. project-read-failure tests
- P1 Project read fails → INTEGRITY_FAILED — PASS

## S. cycle null/mismatch/match/no-link tests
- P2 explicit cycle + active null → INTEGRITY_FAILED — PASS
- P3 explicit cycle + mismatch → INTEGRITY_FAILED — PASS
- P4 explicit cycle + match → active — PASS
- P5 no cycle link + active null → active (compat) — PASS

## T. core accepted resolver design preserved
listExecutionContractHistory · project-owned filter · supersession · pre-execution statuses ·
executing→UNSUPPORTED · multi-current→AMBIGUOUS · decisionRefs→getHumanDecision ·
accepted+DecisionBasis · PR491 disclosure · readContractInspectionState ·
legacy inspected_facts_incomplete · projectId-only action · no raw inputs ·
no conversation replay · no opaque-id parsing · no new persistence.

## U. exact micro production diff
Changed production files vs PRE-MICRO pins (only):
1. `readCurrentGovernedExecutionContinuity.ts`
2. `TrajectorySurface.tsx`

Full current content of both files is included below (complete reviewable source).

## V. exact micro test diff
Changed test files vs PRE-MICRO pins (only):
1. `ecRehydrationContinuity.d0.test.ts` (P1–P5)
2. `trajectorySurface.ui.test.tsx` (subject error/pending + active→none)

## W. POST-MICRO 9-path SHA-256
- `readCurrentGovernedExecutionContinuity.ts` = `992c44552b7845c3b2c88c6e0ed56974f8c96bb0d1ba7cc5bb0503a6763ba278` (CHANGED)
- `actions.ts` = `f11e86a09b4e6df5161c578464bdbaa91d3ae53e7c2820a80536238ba3817591` (UNCHANGED)
- `types.ts` = `7c6ce2c143636a204639ff504a0c2bc7287e05ff3e4b156ddd6752011f30ad23` (UNCHANGED)
- `TrajectorySurface.tsx` = `3b2f62e7c89379520a925faf0850925766d5383d071c67947f562755b4871bad` (CHANGED)
- `ecRehydrationContinuity.d0.test.ts` = `da8ca7d51562c14b3a7704b60424528d72a8fb7e49b9a2a281c4e4e3da874fe8` (CHANGED)
- `trajectorySurface.ui.test.tsx` = `4690aaa76bd0a377b141686655beb4ec13614e16ef2ec16221cb3cd942e00cd9` (CHANGED)
- `productJourneyProjectionCoherence.ui.test.tsx` = `1b65d27c5e028cc293b3816459117afe410907a47249a16f473742b78cac24ad` (UNCHANGED)
- `preCycleTrajectoryCta.ui.test.tsx` = `f2ea18c60e634e4705dd25c9d2cdcda35dcb6a388cd12903cb743b7f6b1d782a` (UNCHANGED)
- `importBoundaries.test.ts` = `f2615fea1df62725dc39d91511722ef3c1d84a2fdeec92611192c7e32a1c0676` (UNCHANGED)

## X. unchanged-five hash equality verdict
YES — byte-identical PRE→POST for:
- `actions.ts`
- `types.ts`
- `productJourneyProjectionCoherence.ui.test.tsx`
- `preCycleTrajectoryCta.ui.test.tsx`
- `importBoundaries.test.ts`

## Y. total candidate path count = 9
YES — exactly the previously reviewed 9 Product/test paths; no tenth path.

## Z. focused validation exact result
Direct micro + prior Critical Review regression set:
- ecRehydrationContinuity.d0.test.ts — 14 passed
- trajectorySurface.ui.test.tsx — 29 passed
- ecInspectionDisclosure.d0.test.ts — 9 passed
- productProofJourneyIntegrity.d0.test.ts — 13 passed
- productProofJourneyIntegrity.applicationPath.d0.test.ts — 6 passed
- proposalSubjectIntegrity.d0.test.ts — 5 passed
- productJourneyProjectionCoherence.ui.test.tsx — 3 passed
- preCycleTrajectoryCta.ui.test.tsx — 3 passed
- importBoundaries.test.ts — 5 passed
- w2EabcDelivery.test.ts — 39 passed
- executionContractGovernance.test.ts — 22 passed
- m3ExecutionContractPrepare.test.ts — 13 passed
- corrProof10.decisionContextContinuity.d0.test.ts — 45 passed
- corrProof11.reinstructionPilotLanguage.d0.test.ts — 18 passed
- repositoryBindingProjection.d0.test.ts — 2 passed
- repositoryBindingForm.ui.test.tsx — 5 passed
**Focused aggregate: 0 failed.**

## AA. full Vitest exact result
**4143 passed / 137 skipped / 0 failed**
(Test Files 373 passed | 17 skipped)

## AB. typecheck
PASS (`tsc --noEmit`)

## AC. lint
PASS (`next lint` — no warnings or errors)

## AD. build
PASS (`next build`)

## AE. diff-check
PASS (`git diff --check`)

## AF. DB/schema/migration = NONE
YES

## AG. semantic Product persistence write from read = ZERO
YES (read-only continuation; tests prove no Decision/EC/Inspection/Confirmation/Authority/Attempt/LPS writes)

## AH. dogfood mutation = ZERO
YES — dogfood worktree untouched

## AI. OpenAI LIVE = ZERO
YES

## AJ. Cursor/docs_write REAL = ZERO
YES

## AK. Product commit/push/PR = NONE
YES — candidate remains LOCAL DIRTY

## AL. remaining reserve
Authenticated restart reproof after Critical Review + Product Git integration + new Morris GO

## AM. next gate
ChatGPT Critical Review

## AN. verdict
`PRODUCT-CONTINUITY-EC-REHYDRATION — CRITICAL FAIL-CLOSED GAPS FIXED — SUBJECT CONTINUITY ERROR/PENDING BLOCKS GOVERNED EC ACTIONS — AUTHORITATIVE NONE CLEARS STALE CLIENT EC — PROJECT/CYCLE CONTEXT FAILS CLOSED — CORE RESTART-SAFE EC + INSPECTION REHYDRATION DESIGN PRESERVED — EXACT DOCS_WRITE TARGET + LEGACY INCOMPLETE INSPECTION BEHAVIOR PRESERVED — ZERO DOGFOOD MUTATION — ZERO REAL — NO PRODUCT GIT — READY FOR CHATGPT CRITICAL REVIEW`

---

## COMPLETE REVIEWABLE SOURCE — micro production file 1
### `projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts`

```typescript
/**
 * W2 — read-only current governed ExecutionContract continuity projection.
 *
 * Restart-safe Product continuation: resolve the unique current pre-execution
 * ExecutionContract for a Project from durable OA truth, verify decision
 * lineage, project allowlisted inspection disclosure, and evaluate current
 * inspection sufficiency WITHOUT recording a new attestation.
 *
 * NEVER writes EC / Inspection / Confirmation / Authority / Attempt / LPS /
 * Epistemic / trajectory state.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import { projectExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
import { readContractInspectionState } from "./inspectExecutionContract";
import type {
  ContractInspectionStateDto,
  CurrentGovernedExecutionContinuityResult,
  W2Failure,
} from "./types";

const PRE_EXECUTION_STATUSES = new Set<ExecutionContract["status"]>([
  "draft",
  "proposed",
  "validated",
  "confirmation_required",
  "confirmed",
]);

const TERMINAL_STATUSES = new Set<ExecutionContract["status"]>([
  "completed",
  "failed",
  "cancelled",
  "superseded",
]);

function fail(
  code: string,
  message: string,
): W2Failure {
  return { ok: false, code, message };
}

function projectOwned(contract: ExecutionContract, projectId: string): boolean {
  return contract.projectId === projectId;
}

async function isCurrentInSupersessionLineage(
  oa: RuntimeOaStack,
  contract: ExecutionContract,
): Promise<boolean> {
  if (contract.status === "superseded") return false;
  const successors =
    await oa.executionContractServices.contracts.listSuperseding(
      contract.executionContractId,
    );
  return successors.length === 0;
}

/**
 * Typed Project/cycle context for continuity — Project read failure must NOT
 * collapse to "no active cycle".
 */
async function readProjectActiveCycleContext(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<
  | { ok: true; activeCycleInstanceId: string | null }
  | W2Failure
> {
  const loaded = await oa.projectServices.getProject.execute({ projectId });
  if (!loaded.ok) {
    return fail(
      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
      "Lecture du projet impossible — continuation gouvernée refusée.",
    );
  }
  return {
    ok: true,
    activeCycleInstanceId: loaded.project.activeCycleInstanceId ?? null,
  };
}

async function verifyDecisionLineage(
  oa: RuntimeOaStack,
  projectId: string,
  contract: ExecutionContract,
): Promise<
  | { ok: true; decisionRef: string }
  | W2Failure
> {
  const refs = contract.decisionRefs ?? [];
  if (refs.length === 0) {
    return fail(
      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
      "Contrat d'exécution sans décision rattachée — continuation refusée.",
    );
  }

  let primaryRef: string | null = null;
  for (const decisionId of refs) {
    const got = await oa.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    if (!got.ok) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Décision rattachée au contrat introuvable — continuation refusée.",
      );
    }
    const decision = got.decision;
    if (decision.projectId !== projectId) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Décision rattachée hors projet — continuation refusée.",
      );
    }
    if (decision.status !== "accepted") {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Décision rattachée non effective — continuation refusée.",
      );
    }
    if (!decision.decisionBasis) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "DecisionBasis absente sur la décision rattachée — continuation refusée.",
      );
    }
    if (primaryRef == null) primaryRef = decision.decisionId;
  }

  return { ok: true, decisionRef: primaryRef! };
}

function toContinuityContractProjection(contract: ExecutionContract): {
  ok: true;
  contract: Extract<
    CurrentGovernedExecutionContinuityResult,
    { ok: true; kind: "active" }
  >["contract"];
} | W2Failure {
  const disclosureResult =
    projectExecutionContractInspectionDisclosure(contract);
  // Incomplete disclosure is still projected honestly; inspection fails closed.
  const disclosure = disclosureResult.disclosure;

  return {
    ok: true,
    contract: {
      executionContractId: contract.executionContractId,
      version: contract.version,
      status: contract.status,
      action: contract.action,
      target: contract.target,
      scope: contract.scope,
      requiredAuthority: contract.requiredAuthority,
      constraints: [...contract.constraints],
      stopConditions: [...contract.stopConditions],
      requiredCapabilities: [...contract.requiredCapabilities],
      reversibility: contract.reversibility,
      semanticFingerprint: contract.semanticFingerprint ?? "",
      effectConfirmationRequired: contract.status === "confirmation_required",
      effectConfirmationLevel: null,
      inspectionDisclosure: disclosure,
    },
  };
}

/**
 * Resolve the unique current pre-execution governed ExecutionContract for a
 * Project and return Product-ready contract + current inspection state.
 */
export async function readCurrentGovernedExecutionContinuity(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<CurrentGovernedExecutionContinuityResult> {
  const { oa, projectId } = input;
  if (!projectId.startsWith("prj:")) {
    return fail(
      "CONTRACT_INVALID",
      "Identifiant de projet invalide — continuation refusée.",
    );
  }

  const listed =
    await oa.executionContractServices.listExecutionContractHistory.execute({
      projectId,
    });
  if (!listed.ok) {
    return fail(
      listed.error.detailCode,
      listed.error.message ??
        "Lecture de l'historique des contrats d'exécution impossible.",
    );
  }

  const owned = listed.contracts.filter((c) => projectOwned(c, projectId));

  // Detect unsupported executing-current contracts before pre-execution filter.
  for (const contract of owned) {
    if (contract.status !== "executing") continue;
    if (!(await isCurrentInSupersessionLineage(oa, contract))) continue;
    return fail(
      "EXECUTION_CONTINUITY_UNSUPPORTED",
      "Un contrat en cours d'exécution est courant — la continuité pré-exécution ne s'applique pas.",
    );
  }

  const preExecution: ExecutionContract[] = [];
  for (const contract of owned) {
    if (TERMINAL_STATUSES.has(contract.status)) continue;
    if (!PRE_EXECUTION_STATUSES.has(contract.status)) continue;
    if (!(await isCurrentInSupersessionLineage(oa, contract))) continue;
    preExecution.push(contract);
  }

  if (preExecution.length === 0) {
    return { ok: true, kind: "none" };
  }

  if (preExecution.length > 1) {
    return fail(
      "EXECUTION_CONTINUITY_AMBIGUOUS",
      "Plusieurs contrats d'exécution courants non terminés — continuation refusée.",
    );
  }

  const candidate = preExecution[0]!;

  const projectCycle = await readProjectActiveCycleContext(oa, projectId);
  if (!projectCycle.ok) return projectCycle;

  // Explicit EC cycle linkage is durable execution context — must match the
  // Project's current active cycle. Missing active cycle is integrity failure
  // (not "compatible null"). Cycle-unlinked ECs remain compatible.
  if (candidate.cycleInstanceId) {
    if (!projectCycle.activeCycleInstanceId) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Le contrat courant est lié à un cycle, mais le projet n'a pas de cycle actif — continuation refusée.",
      );
    }
    if (candidate.cycleInstanceId !== projectCycle.activeCycleInstanceId) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Le contrat courant n'est pas cohérent avec le cycle actif du projet — continuation refusée.",
      );
    }
  }

  const lineage = await verifyDecisionLineage(oa, projectId, candidate);
  if (!lineage.ok) return lineage;

  const projected = toContinuityContractProjection(candidate);
  if (!projected.ok) return projected;

  const inspection = await readContractInspectionState({
    oa,
    executionContractId: candidate.executionContractId,
  });
  if (!inspection.ok) {
    return fail(
      inspection.code,
      inspection.message,
    );
  }

  const inspectionDto: ContractInspectionStateDto = {
    executionContractId: inspection.executionContractId,
    contractVersion: inspection.contractVersion,
    semanticFingerprint: inspection.semanticFingerprint,
    statusLabel: inspection.statusLabel,
    inspectionSufficient: inspection.inspectionSufficient,
    attestationRef: inspection.attestationRef,
    attestedVersion: inspection.attestedVersion,
    staleAttestationRef: inspection.staleAttestationRef,
    reinspectionRequired: inspection.reinspectionRequired,
    reason: inspection.reason,
    grantsAuthority: false,
  };

  return {
    ok: true,
    kind: "active",
    decisionRef: lineage.decisionRef,
    contract: projected.contract,
    inspection: inspectionDto,
  };
}

```

---

## COMPLETE REVIEWABLE SOURCE — micro production file 2
### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

```tsx
"use client";

/**
 * W2 / W3-A product surface — Options, Recommendation, HumanDecision, decided
 * trajectory, contract inspection, effective authority, and (W3-A) fixture
 * governed Execute after AUTHORIZED.
 *
 * The surface never derives truth: every state shown here comes from a server
 * action over the product application path.
 */

import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
import {
  w2AmendExecutionContractAction,
  w2AuthorizeExecutionContractAction,
  w2ConfirmExecutionContractAction,
  w2DecideTrajectoryAction,
  w2GovernedExecuteCancelAction,
  w2GovernedExecuteCompleteAction,
  w2GovernedExecuteSelectAction,
  w2GovernedExecuteStartAction,
  w2InspectExecutionContractAction,
  w2MaterializeProductOutcomeAction,
  w2PrepareExecutionContractAction,
  w2ProposeTrajectoryOptionsAction,
  w2ReadActiveDecisionSubjectAction,
  w2ReadCurrentGovernedExecutionContinuityAction,
  w2RehydrateProductOutcomeAction,
} from "@/features/project-assistant/w2/actions";
import {
  projectAssistantApprovePreCycleCandidateTrajectoryAction,
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction,
  projectAssistantReadPreCycleCandidateTrajectoryAction,
  prepareCycleFromValidatedTrajectoryAction,
  readPreparedTrajectoryCycleAction,
  startPreparedTrajectoryCycleAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import type {
  AmendExecutionContractSuccess,
  ContractInspectionStateDto,
  DecidedTrajectoryDto,
  ExecutionAuthorizationOutcomeDto,
  GovernedExecuteAttemptProjection,
  GovernedExecutePhaseSuccess,
  TrajectoryDecisionRecordDto,
  TrajectoryOptionSetDto,
  W3BProductOutcomeDto,
  W3cPostEvidenceLoopDto,
} from "@/features/project-assistant/w2/types";
import {
  W4C_NEXT_ACTION_LEAD,
  W4C_POST_EVIDENCE_HEADING,
  W4C_PRODUCT_OUTCOME_LABELS,
  pilotAmbiguousPendingTitle,
  pilotLostPendingTitle,
  pilotPrepareNotApplicableMessage,
  pilotProposalOptionLabel,
  pilotRecoverablePendingTitle,
} from "@/features/project-assistant/presentationLabels";
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
import type { ExecutionContractStatus } from "@/lib/oa/execution-contract/domain/types";
import styles from "./TrajectorySurface.module.css";

/**
 * Presentation-only labels for ExecutionContractStatus.
 * Exhaustive over the domain union; never surfaces the raw enum as primary copy.
 */
const EXECUTION_CONTRACT_STATUS_LABELS: Record<ExecutionContractStatus, string> =
  {
    draft: "Brouillon",
    proposed: "Proposé",
    validated: "Validé",
    confirmation_required: "Confirmation requise",
    confirmed: "Confirmation enregistrée",
    executing: "Exécution en cours",
    completed: "Exécution terminée",
    failed: "Échec d'exécution",
    cancelled: "Annulé",
    superseded: "Remplacé",
  };

function executionContractStatusLabel(status: string): string {
  if (Object.prototype.hasOwnProperty.call(EXECUTION_CONTRACT_STATUS_LABELS, status)) {
    return EXECUTION_CONTRACT_STATUS_LABELS[status as ExecutionContractStatus];
  }
  return "État du contrat indisponible";
}

function toInspectionDisclosureView(
  disclosure:
    | {
        readonly action: string;
        readonly technicalTarget: string;
        readonly scope: string;
        readonly targetRepositoryRef: string | null;
        readonly targetPath: string | null;
        readonly scopeIn: readonly string[] | null;
        readonly scopeOut: readonly string[] | null;
        readonly createOrModify: boolean | null;
        readonly noDelete: boolean | null;
        readonly contentRequirements: readonly string[] | null;
        readonly validationExpectations: readonly string[] | null;
        readonly expectedOutputs: readonly string[] | null;
        readonly evidenceRequirements: readonly string[];
        readonly disclosureComplete: boolean;
      }
    | null
    | undefined,
): InspectionDisclosureView | null {
  if (!disclosure) return null;
  return {
    action: disclosure.action,
    technicalTarget: disclosure.technicalTarget,
    scope: disclosure.scope,
    targetRepositoryRef: disclosure.targetRepositoryRef,
    targetPath: disclosure.targetPath,
    scopeIn: disclosure.scopeIn,
    scopeOut: disclosure.scopeOut,
    createOrModify: disclosure.createOrModify,
    noDelete: disclosure.noDelete,
    contentRequirements: disclosure.contentRequirements,
    validationExpectations: disclosure.validationExpectations,
    expectedOutputs: disclosure.expectedOutputs,
    evidenceRequirements: [...disclosure.evidenceRequirements],
    disclosureComplete: disclosure.disclosureComplete,
  };
}

/** Explicit Pilot-qualified operation — never inferred from W2 trajectory alone. */
type QualifiedOperationKind = "generate-temporary-artifact" | "simulate" | "read";

type InspectionDisclosureView = {
  readonly action: string;
  readonly technicalTarget: string;
  readonly scope: string;
  readonly targetRepositoryRef: string | null;
  readonly targetPath: string | null;
  readonly scopeIn: readonly string[] | null;
  readonly scopeOut: readonly string[] | null;
  readonly createOrModify: boolean | null;
  readonly noDelete: boolean | null;
  readonly contentRequirements: readonly string[] | null;
  readonly validationExpectations: readonly string[] | null;
  readonly expectedOutputs: readonly string[] | null;
  readonly evidenceRequirements: readonly string[];
  readonly disclosureComplete: boolean;
};

type PreparedContract = {
  readonly executionContractId: string;
  readonly version: number;
  readonly status: string;
  readonly action: string;
  readonly target: string;
  readonly scope: string;
  readonly requiredAuthority: string;
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly requiredCapabilities: readonly string[];
  readonly reversibility: string;
  readonly semanticFingerprint: string;
  readonly effectConfirmationRequired?: boolean;
  readonly effectConfirmationLevel?: string | null;
  readonly inspectionDisclosure?: InspectionDisclosureView | null;
};

type AmendmentNotice = {
  readonly priorExecutionContractId: string;
  readonly additionalConstraint: string;
  readonly statusLabel: string;
  readonly priorInspectionDoesNotCoverSuccessor: true;
};

type Busy =
  | null
  | "options"
  | "decision"
  | "qualify"
  | "contract"
  | "inspection"
  | "confirmation"
  | "authorization"
  | "amendment"
  | "execute"
  | "approve-candidate"
  | "prepare-cycle"
  | "start-cycle";

/**
 * Yield so React can commit and the browser can paint each Attempt phase.
 * Double rAF only — no fixed-duration sleep / business latency (R09-R).
 */
function yieldBrowserPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resolve();
      });
    });
  });
}

export function TrajectorySurface({
  projectId,
  onDurableFactsChanged,
  durableRefreshSignal = 0,
  composition = "standalone",
  activeProposalId = null,
  onRequestReformulateWithNora,
  onProposalSubjectOwnershipChange,
}: {
  projectId: string;
  onDurableFactsChanged?: () => void;
  /** Increment after Lifecycle bridge / durable mutations to rehydrate candidate. */
  durableRefreshSignal?: number;
  /**
   * H-01 Option A: embed visually in the LPS piloting region.
   * Presentation-only — does not change ProjectTrajectory domain identity.
   */
  composition?: "standalone" | "lps-embedded";
  /**
   * CORR-PROOF-10 — opaque Proposal subject from Conversation/Nora.
   * Server resolves; client never sends objective/path/operation.
   */
  activeProposalId?: string | null;
  /**
   * CORR-PROOF-11 — arm explicit reinstruction + focus conversation.
   * Called with the effective pending proposalId to supersede.
   */
  onRequestReformulateWithNora?: (proposalId: string) => void;
  /**
   * JOURNEY-INTEGRITY — notify parent whether Proposal-specific journey owns
   * the next business action. Fail-closed: UNKNOWN until subject read resolves.
   */
  onProposalSubjectOwnershipChange?: (
    ownership: "UNKNOWN" | "OWNED" | "NONE",
  ) => void;
}) {
  const [busy, setBusy] = useState<Busy>(null);
  const [error, setError] = useState<string | null>(null);
  const [subjectReadStatus, setSubjectReadStatus] = useState<
    "pending" | "ready" | "error"
  >("pending");
  const [executionContinuityReadStatus, setExecutionContinuityReadStatus] =
    useState<"pending" | "ready" | "error">("pending");
  const [executionContinuityConflict, setExecutionContinuityConflict] =
    useState(false);
  const [pendingReinstruction, setPendingReinstruction] = useState<{
    readonly message: string;
    readonly proposalIds: readonly string[];
    readonly recoverableProposalIds: readonly string[];
  } | null>(null);
  const [preCycleCandidate, setPreCycleCandidate] = useState<{
    trajectoryId: string;
    version: number;
    status: "candidate";
    steps: readonly { stepId: string; order: number; label: string; state: string }[];
    catalogLabel: string | null;
    targetCycleTypeId: string | null;
    provenanceStatus?: string;
    provenanceObservationId?: string | null;
    recommendationId?: string | null;
    semanticKey?: string | null;
  } | null>(null);
  const [approvalPresentation, setApprovalPresentation] = useState<{
    presentationDigest: string;
    targetCycleSelectable: boolean;
    catalogLabel: string | null;
    targetCycleTypeId: string;
    approvalOptionLabel: string;
  } | null>(null);
  const [greenfieldDecided, setGreenfieldDecided] = useState<{
    trajectoryId: string;
    version: number;
    status: string;
    decidedByDecisionRef: string | null;
    targetCycleTypeId: string | null;
    catalogLabel: string | null;
    completedMatchingCycle?: boolean;
    prepareBlockedReason?: "cycle_type_already_completed";
  } | null>(null);
  const [preparedCycle, setPreparedCycle] = useState<{
    cycleInstanceId: string;
    cycleTypeId: string;
    catalogLabel: string | null;
    profile: string;
    status: string;
  } | null>(null);
  const [activeCycleInstanceId, setActiveCycleInstanceId] = useState<
    string | null
  >(null);
  const [hasCurrentNextCycleRecommendation, setHasCurrentNextCycleRecommendation] =
    useState(false);
  const [optionSet, setOptionSet] = useState<TrajectoryOptionSetDto | null>(
    null,
  );
  const [decision, setDecision] = useState<TrajectoryDecisionRecordDto | null>(
    null,
  );
  const [decided, setDecided] = useState<DecidedTrajectoryDto | null>(null);
  const [contract, setContract] = useState<PreparedContract | null>(null);
  const [inspection, setInspection] =
    useState<ContractInspectionStateDto | null>(null);
  const [authorization, setAuthorization] =
    useState<ExecutionAuthorizationOutcomeDto | null>(null);
  const [amendmentDraft, setAmendmentDraft] = useState("");
  const [amendmentNotice, setAmendmentNotice] =
    useState<AmendmentNotice | null>(null);
  const [attempt, setAttempt] =
    useState<GovernedExecuteAttemptProjection | null>(null);
  const [attemptPhase, setAttemptPhase] = useState<
    GovernedExecutePhaseSuccess["phase"] | null
  >(null);
  /** Append-only paint trail — proves R09 sequence even with a sync adapter. */
  const [attemptPhaseHistory, setAttemptPhaseHistory] = useState<string[]>([]);
  const [attemptStatusLabel, setAttemptStatusLabel] = useState<string | null>(
    null,
  );
  const [productOutcome, setProductOutcome] =
    useState<W3BProductOutcomeDto | null>(null);
  const [postEvidence, setPostEvidence] =
    useState<W3cPostEvidenceLoopDto | null>(null);
  const [productEvidencePending, setProductEvidencePending] = useState(false);
  const [qualifiedOperationKind, setQualifiedOperationKind] =
    useState<QualifiedOperationKind | null>(null);

  const decidedOptionRef = decision?.selectedOptionRef ?? null;
  const decisionDefersExecution =
    decidedOptionRef === PROPOSAL_SUBJECT_AMEND_REF ||
    decidedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF;
  const hasProposalDecisionSubject = Boolean(decision?.proposalId);
  const proposalPursue =
    hasProposalDecisionSubject &&
    decidedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF;
  const proposalBackedPrepareReady =
    proposalPursue && decision?.decisionBasisLinked === true;
  const proposalBackedPrepareBlocked =
    proposalPursue && decision?.decisionBasisLinked !== true;

  function paintAttemptPhase(
    phase: GovernedExecutePhaseSuccess["phase"],
    nextAttempt: GovernedExecuteAttemptProjection | null,
    statusLabel: string | null,
  ): void {
    flushSync(() => {
      if (nextAttempt) setAttempt(nextAttempt);
      setAttemptPhase(phase);
      if (statusLabel !== null) setAttemptStatusLabel(statusLabel);
      setAttemptPhaseHistory((prev) =>
        prev[prev.length - 1] === phase ? prev : [...prev, phase],
      );
    });
  }

  const proposeOptions = useCallback(async () => {
    setBusy("options");
    setError(null);
    const recoverableSole =
      pendingReinstruction?.proposalIds.length === 1 &&
      pendingReinstruction.recoverableProposalIds.length === 1
        ? pendingReinstruction.recoverableProposalIds[0]!
        : null;
    const proposalIdForPropose = activeProposalId ?? recoverableSole;
    setPendingReinstruction(null);
    const result = await w2ProposeTrajectoryOptionsAction({
      projectId,
      proposalId: proposalIdForPropose,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...set } = result;
    setOptionSet(set);
    setDecision(null);
    setDecided(null);
    setContract(null);
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    setProductOutcome(null);
    setPostEvidence(null);
    onDurableFactsChanged?.();
  }, [
    projectId,
    activeProposalId,
    pendingReinstruction,
    onDurableFactsChanged,
  ]);

  /** CORR-PROOF-10 — rehydrate bound Proposal OptionSet from durable Epistemic. */
  const rehydrateActiveDecisionSubject = useCallback(async () => {
    setSubjectReadStatus("pending");
    const result = await w2ReadActiveDecisionSubjectAction({ projectId });
    if (!result.ok) {
      setError(result.message);
      setPendingReinstruction(null);
      setSubjectReadStatus("error");
      return;
    }
    if (result.kind === "bound_awaiting_decision") {
      setOptionSet(result.optionSet);
      setError(null);
      setPendingReinstruction(null);
      setSubjectReadStatus("ready");
      return;
    }
    if (result.kind === "pending_reinstruction_required") {
      setOptionSet(null);
      setPendingReinstruction({
        message: result.message,
        proposalIds: result.proposalIds,
        recoverableProposalIds: result.recoverableProposalIds,
      });
      setError(null);
      setSubjectReadStatus("ready");
      return;
    }
    setPendingReinstruction(null);
    setSubjectReadStatus("ready");
    // kind === "none" — leave local optionSet as-is for trajectory path
  }, [projectId]);

  /** Restart-safe governed EC + inspection continuity from durable truth. */
  const rehydrateGovernedExecutionContinuity = useCallback(async () => {
    setExecutionContinuityReadStatus("pending");
    setExecutionContinuityConflict(false);
    const result = await w2ReadCurrentGovernedExecutionContinuityAction({
      projectId,
    });
    if (!result.ok) {
      setError(result.message);
      setContract(null);
      setInspection(null);
      setAuthorization(null);
      setAmendmentDraft("");
      setAmendmentNotice(null);
      setExecutionContinuityReadStatus("error");
      return;
    }
    if (result.kind === "none") {
      // Server durable truth wins — clear any stale client EC projection.
      setContract(null);
      setInspection(null);
      setAuthorization(null);
      setAmendmentDraft("");
      setAmendmentNotice(null);
      setExecutionContinuityReadStatus("ready");
      return;
    }

    // Fail-closed contradiction: unresolved Proposal Decision Subject + current EC.
    const subjectCompetes =
      pendingReinstruction != null ||
      (optionSet != null && decision == null);
    if (subjectCompetes) {
      setExecutionContinuityConflict(true);
      setError(
        "Contradiction de continuité — un sujet de décision Proposal non résolu coexiste avec un contrat d'exécution courant. Aucune action générique n'est proposée.",
      );
      setContract(null);
      setInspection(null);
      setAuthorization(null);
      setAmendmentDraft("");
      setAmendmentNotice(null);
      setExecutionContinuityReadStatus("ready");
      return;
    }

    setContract({
      executionContractId: result.contract.executionContractId,
      version: result.contract.version,
      status: result.contract.status,
      action: result.contract.action,
      target: result.contract.target,
      scope: result.contract.scope,
      requiredAuthority: result.contract.requiredAuthority,
      constraints: [...result.contract.constraints],
      stopConditions: [...result.contract.stopConditions],
      requiredCapabilities: [...result.contract.requiredCapabilities],
      reversibility: result.contract.reversibility,
      semanticFingerprint: result.contract.semanticFingerprint,
      effectConfirmationRequired: result.contract.effectConfirmationRequired,
      effectConfirmationLevel: result.contract.effectConfirmationLevel ?? null,
      inspectionDisclosure: toInspectionDisclosureView(
        result.contract.inspectionDisclosure,
      ),
    });
    setInspection(result.inspection);
    setAuthorization(null);
    setError(null);
    setExecutionContinuityReadStatus("ready");
  }, [projectId, pendingReinstruction, optionSet, decision]);

  const refreshPreCycleCandidate = useCallback(async () => {
    const result = await projectAssistantReadPreCycleCandidateTrajectoryAction({
      projectId,
    });
    if (!result.ok) {
      setPreCycleCandidate(null);
      setActiveCycleInstanceId(null);
      setHasCurrentNextCycleRecommendation(false);
      setApprovalPresentation(null);
      setGreenfieldDecided(null);
      setPreparedCycle(null);
      return;
    }
    setActiveCycleInstanceId(result.activeCycleInstanceId ?? null);
    setPreCycleCandidate(result.candidate ?? null);
    setHasCurrentNextCycleRecommendation(
      result.hasCurrentNextCycleRecommendation === true,
    );

    const approval =
      await projectAssistantReadCandidateTrajectoryApprovalPresentationAction({
        projectId,
      });
    if (!approval.ok) {
      setApprovalPresentation(null);
      setGreenfieldDecided(null);
      setPreparedCycle(null);
      return;
    }
    setGreenfieldDecided(approval.alreadyDecided ?? null);
    if (approval.presentation) {
      setApprovalPresentation({
        presentationDigest: approval.presentation.presentationDigest,
        targetCycleSelectable: approval.presentation.targetCycleSelectable,
        catalogLabel: approval.presentation.catalogLabel,
        targetCycleTypeId: approval.presentation.targetCycleTypeId,
        approvalOptionLabel: approval.presentation.approvalOptionLabel,
      });
    } else {
      setApprovalPresentation(null);
    }

    if (approval.alreadyDecided && !result.activeCycleInstanceId) {
      const prepared = await readPreparedTrajectoryCycleAction({ projectId });
      if (prepared.ok && prepared.prepared) {
        setPreparedCycle({
          cycleInstanceId: prepared.prepared.cycleInstanceId,
          cycleTypeId: prepared.prepared.cycleTypeId,
          catalogLabel: prepared.prepared.catalogLabel,
          profile: prepared.prepared.profile,
          status: prepared.prepared.status,
        });
      } else {
        setPreparedCycle(null);
      }
    } else {
      setPreparedCycle(null);
    }
  }, [projectId]);

  const approveCandidate = useCallback(async () => {
    if (!approvalPresentation) return;
    setBusy("approve-candidate");
    setError(null);
    const result = await projectAssistantApprovePreCycleCandidateTrajectoryAction({
      projectId,
      presentationDigest: approvalPresentation.presentationDigest,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message ?? result.code ?? "Approbation refusée.");
      await refreshPreCycleCandidate();
      return;
    }
    setGreenfieldDecided({
      trajectoryId: result.trajectoryId!,
      version: result.trajectoryVersion!,
      status: result.status!,
      decidedByDecisionRef: result.decidedByDecisionRef ?? null,
      targetCycleTypeId: result.targetCycleTypeId ?? null,
      catalogLabel: result.catalogLabel ?? null,
    });
    setPreCycleCandidate(null);
    setApprovalPresentation(null);
    setPreparedCycle(null);
    onDurableFactsChanged?.();
    await refreshPreCycleCandidate();
  }, [
    approvalPresentation,
    projectId,
    onDurableFactsChanged,
    refreshPreCycleCandidate,
  ]);

  const prepareValidatedCycle = useCallback(async () => {
    setBusy("prepare-cycle");
    setError(null);
    const result = await prepareCycleFromValidatedTrajectoryAction({
      projectId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message ?? result.code ?? "Préparation du cycle refusée.");
      await refreshPreCycleCandidate();
      return;
    }
    setPreparedCycle({
      cycleInstanceId: result.cycleInstanceId!,
      cycleTypeId: result.cycleTypeId!,
      catalogLabel: result.catalogLabel ?? null,
      profile: result.profile!,
      status: result.status!,
    });
    onDurableFactsChanged?.();
    await refreshPreCycleCandidate();
  }, [projectId, onDurableFactsChanged, refreshPreCycleCandidate]);

  const startPreparedCycle = useCallback(async () => {
    if (!preparedCycle) return;
    setBusy("start-cycle");
    setError(null);
    const result = await startPreparedTrajectoryCycleAction({
      projectId,
      cycleInstanceId: preparedCycle.cycleInstanceId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message ?? result.code ?? "Démarrage du cycle refusé.");
      await refreshPreCycleCandidate();
      return;
    }
    setPreparedCycle(null);
    setActiveCycleInstanceId(result.activeCycleInstanceId ?? null);
    onDurableFactsChanged?.();
    await refreshPreCycleCandidate();
  }, [
    preparedCycle,
    projectId,
    onDurableFactsChanged,
    refreshPreCycleCandidate,
  ]);

  useEffect(() => {
    void refreshPreCycleCandidate();
  }, [refreshPreCycleCandidate]);

  useEffect(() => {
    if (durableRefreshSignal > 0) {
      void refreshPreCycleCandidate();
    }
  }, [durableRefreshSignal, refreshPreCycleCandidate]);

  useEffect(() => {
    void rehydrateActiveDecisionSubject();
  }, [rehydrateActiveDecisionSubject, durableRefreshSignal]);

  useEffect(() => {
    // Governed EC discovery is actionable only after Decision Subject continuity
    // is ready. Subject error must not accept a later EC continuation as truth.
    if (subjectReadStatus === "pending") return;
    if (subjectReadStatus === "error") {
      setContract(null);
      setInspection(null);
      setAuthorization(null);
      setAmendmentDraft("");
      setAmendmentNotice(null);
      setExecutionContinuityConflict(false);
      setExecutionContinuityReadStatus("error");
      return;
    }
    void rehydrateGovernedExecutionContinuity();
  }, [
    subjectReadStatus,
    durableRefreshSignal,
    rehydrateGovernedExecutionContinuity,
  ]);

  const decide = useCallback(
    async (selectedOptionRef: string) => {
      if (!optionSet) return;
      setBusy("decision");
      setError(null);
      const isProposalSubject =
        optionSet.decisionSubjectMode === "proposal" ||
        Boolean(optionSet.proposalId);
      let result;
      if (isProposalSubject) {
        // Hostile trajectory fields omitted — decide loads sealed presented set.
        result = await w2DecideTrajectoryAction({
          projectId,
          optionSetRef: optionSet.optionSetRef,
          selectedOptionRef,
        });
      } else {
        const proposed = optionSet.proposedTrajectory;
        if (!proposed) {
          setBusy(null);
          setError(
            "Trajectoire proposée absente — réinstruire les options Project.",
          );
          return;
        }
        result = await w2DecideTrajectoryAction({
          projectId,
          optionSetRef: optionSet.optionSetRef,
          trajectoryId: proposed.trajectoryId,
          candidateVersion: proposed.version,
          selectedOptionRef,
        });
      }
      setBusy(null);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setDecision(result.decision);
      setDecided(result.trajectory ?? null);
      onDurableFactsChanged?.();
    },
    [optionSet, projectId, onDurableFactsChanged],
  );

  const prepareContract = useCallback(async () => {
    if (!decision || !qualifiedOperationKind) return;
    setBusy("contract");
    setError(null);
    const result = await w2PrepareExecutionContractAction({
      projectId,
      decisionId: decision.decisionId,
      qualifiedOperationKind,
    });
    setBusy(null);
    if (!result.ok) {
      setError(
        result.code === "PREPARE_NOT_APPLICABLE"
          ? pilotPrepareNotApplicableMessage()
          : result.message,
      );
      return;
    }
    const prepared = result.contract;
    setContract({
      executionContractId: prepared.executionContractId,
      version: prepared.version,
      status: prepared.status,
      action: prepared.action,
      target: prepared.target,
      scope: prepared.scope,
      requiredAuthority: prepared.requiredAuthority,
      constraints: [...prepared.constraints],
      stopConditions: [...prepared.stopConditions],
      requiredCapabilities: [...prepared.requiredCapabilities],
      reversibility: prepared.reversibility,
      semanticFingerprint: prepared.semanticFingerprint,
      effectConfirmationRequired: prepared.effectConfirmationRequired,
      effectConfirmationLevel: prepared.effectConfirmationLevel ?? null,
      inspectionDisclosure: toInspectionDisclosureView(
        prepared.inspectionDisclosure,
      ),
    });
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    onDurableFactsChanged?.();
  }, [decision, projectId, qualifiedOperationKind, onDurableFactsChanged]);

  /**
   * JOURNEY-INTEGRITY / Lot A-B final — Proposal-backed PREPARE.
   *
   * After pursue on a Proposal Decision Subject, the sealed DecisionBasis already
   * carries the decided operation (e.g. cursor.docs_write.apply). The Pilot must
   * not re-select a sandbox op. Client sends only projectId + decisionId; the
   * server resolves targetPath / operation / binding from durable lineage.
   */
  const prepareProposalBackedContract = useCallback(async () => {
    if (!decision?.proposalId || !decision.decisionBasisLinked) return;
    if (decisionDefersExecution) return;
    setBusy("contract");
    setError(null);
    const result = await projectAssistantPrepareM3Action({
      projectId,
      decisionId: decision.decisionId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const prepared = result.f3.contract;
    setContract({
      executionContractId: prepared.executionContractId,
      version: prepared.version,
      status: prepared.status,
      action: prepared.action,
      target: prepared.target,
      scope: prepared.scope,
      requiredAuthority: prepared.requiredAuthority,
      constraints: [...prepared.constraints],
      stopConditions: [...prepared.stopConditions],
      requiredCapabilities: [...prepared.requiredCapabilities],
      reversibility: prepared.reversibility,
      semanticFingerprint: prepared.semanticFingerprint,
      inspectionDisclosure: toInspectionDisclosureView(
        prepared.inspectionDisclosure,
      ),
    });
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    onDurableFactsChanged?.();
  }, [decision, decisionDefersExecution, projectId, onDurableFactsChanged]);

  const inspect = useCallback(async () => {
    if (!contract) return;
    setBusy("inspection");
    setError(null);
    const result = await w2InspectExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...state } = result;
    setInspection(state);
    setAuthorization(null);
    if (amendmentNotice && state.inspectionSufficient) {
      setAmendmentNotice({
        ...amendmentNotice,
        statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
      });
    }
  }, [contract, projectId, amendmentNotice]);

  const amendContract = useCallback(async () => {
    if (!contract || !inspection?.inspectionSufficient) return;
    const constraint = amendmentDraft.trim();
    if (!constraint) {
      setError("Indiquez une contrainte d'exécution supplémentaire.");
      return;
    }
    setBusy("amendment");
    setError(null);
    const result = await w2AmendExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
      additionalConstraint: constraint,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const amended = result as AmendExecutionContractSuccess;
    setContract({
      executionContractId: amended.successor.executionContractId,
      version: amended.successor.version,
      status: amended.successor.status,
      action: amended.successor.action,
      target: amended.successor.target,
      scope: amended.successor.scope,
      requiredAuthority: amended.successor.requiredAuthority,
      constraints: [...amended.successor.constraints],
      stopConditions: [...amended.successor.stopConditions],
      requiredCapabilities: [...amended.successor.requiredCapabilities],
      reversibility: amended.successor.reversibility,
      semanticFingerprint: amended.successor.semanticFingerprint,
      inspectionDisclosure: toInspectionDisclosureView(
        amended.successor.inspectionDisclosure,
      ),
    });
    setInspection(amended.successorInspection);
    setAuthorization(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    setAmendmentDraft("");
    setAmendmentNotice({
      priorExecutionContractId: amended.priorExecutionContractId,
      additionalConstraint: amended.additionalConstraint,
      statusLabel: amended.statusLabel,
      priorInspectionDoesNotCoverSuccessor: true,
    });
    onDurableFactsChanged?.();
  }, [
    contract,
    inspection,
    amendmentDraft,
    projectId,
    onDurableFactsChanged,
  ]);

  const confirmForAuthorization = useCallback(async () => {
    if (!contract) return;
    setBusy("confirmation");
    setError(null);
    const result = await w2ConfirmExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setContract({ ...contract, status: "confirmed" });
    setAuthorization(null);
  }, [contract, projectId]);

  const authorize = useCallback(async () => {
    if (!contract) return;
    setBusy("authorization");
    setError(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptPhaseHistory([]);
    setAttemptStatusLabel(null);
    const result = await w2AuthorizeExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...outcome } = result;
    setAuthorization(outcome);
    setInspection(outcome.inspection);
  }, [contract, projectId]);

  const governedExecute = useCallback(async () => {
    if (!contract || authorization?.outcome !== "AUTHORIZED") return;
    setBusy("execute");
    setError(null);
    flushSync(() => {
      setAttempt(null);
      setAttemptPhase(null);
      setAttemptPhaseHistory([]);
      setAttemptStatusLabel(null);
      setProductOutcome(null);
      setProductEvidencePending(false);
    });

    const selected = await w2GovernedExecuteSelectAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    if (!selected.ok) {
      setBusy(null);
      setError(selected.message);
      if (selected.attempt) {
        paintAttemptPhase("accepted", selected.attempt, null);
      }
      return;
    }
    paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
    await yieldBrowserPaint();

    if (selected.phase === "terminal") {
      setBusy(null);
      paintAttemptPhase("terminal", selected.attempt, selected.statusLabel);
      onDurableFactsChanged?.();
      return;
    }

    const started = await w2GovernedExecuteStartAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: selected.attemptId,
    });
    if (!started.ok) {
      setBusy(null);
      setError(started.message);
      if (started.attempt) {
        flushSync(() => {
          setAttempt(started.attempt!);
        });
      }
      return;
    }

    // Adapter FAIL / governed STOP may terminate at Start — materialize without Complete.
    if (started.phase === "terminal") {
      paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
      flushSync(() => {
        setProductEvidencePending(true);
      });
      await yieldBrowserPaint();
      const materializedEarly = await w2MaterializeProductOutcomeAction({
        projectId,
        attemptId: started.attemptId,
      });
      setBusy(null);
      if (!materializedEarly.ok) {
        setError(materializedEarly.message);
        if (materializedEarly.product) setProductOutcome(materializedEarly.product);
        if (materializedEarly.postEvidence)
          setPostEvidence(materializedEarly.postEvidence);
        return;
      }
      flushSync(() => {
        setProductEvidencePending(false);
        setProductOutcome(materializedEarly.product);
        setPostEvidence(materializedEarly.postEvidence ?? null);
      });
      onDurableFactsChanged?.();
      return;
    }

    paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
    await yieldBrowserPaint();

    const completed = await w2GovernedExecuteCompleteAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: started.attemptId,
    });
    if (!completed.ok) {
      setBusy(null);
      setError(completed.message);
      if (completed.attempt) {
        flushSync(() => {
          setAttempt(completed.attempt!);
        });
      }
      return;
    }
    paintAttemptPhase(completed.phase, completed.attempt, completed.statusLabel);
    flushSync(() => {
      setProductEvidencePending(true);
    });
    await yieldBrowserPaint();

    const materialized = await w2MaterializeProductOutcomeAction({
      projectId,
      attemptId: completed.attemptId,
    });
    setBusy(null);
    if (!materialized.ok) {
      setError(materialized.message);
      if (materialized.product) setProductOutcome(materialized.product);
      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
      return;
    }
    flushSync(() => {
      setProductEvidencePending(false);
      setProductOutcome(materialized.product);
      setPostEvidence(materialized.postEvidence ?? null);
    });
    onDurableFactsChanged?.();
  }, [contract, authorization, projectId, onDurableFactsChanged]);

  const stopRunningExecution = useCallback(async () => {
    if (!contract || !attempt?.attemptId || attemptPhase !== "running") return;
    setBusy("execute");
    setError(null);
    const cancelled = await w2GovernedExecuteCancelAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: attempt.attemptId,
    });
    if (!cancelled.ok) {
      setBusy(null);
      setError(cancelled.message);
      return;
    }
    paintAttemptPhase(cancelled.phase, cancelled.attempt, cancelled.statusLabel);
    flushSync(() => {
      setProductEvidencePending(true);
    });
    await yieldBrowserPaint();
    const materialized = await w2MaterializeProductOutcomeAction({
      projectId,
      attemptId: cancelled.attemptId,
    });
    setBusy(null);
    if (!materialized.ok) {
      setError(materialized.message);
      if (materialized.product) setProductOutcome(materialized.product);
      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
      return;
    }
    flushSync(() => {
      setProductEvidencePending(false);
      setProductOutcome(materialized.product);
      setPostEvidence(materialized.postEvidence ?? null);
    });
    onDurableFactsChanged?.();
  }, [
    contract,
    attempt,
    attemptPhase,
    projectId,
    onDurableFactsChanged,
  ]);

  const rehydrateProduct = useCallback(async () => {
    if (!attempt?.attemptId) return;
    setBusy("execute");
    setError(null);
    const result = await w2RehydrateProductOutcomeAction({
      projectId,
      attemptId: attempt.attemptId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setProductOutcome(result.product);
    setPostEvidence(result.postEvidence ?? null);
    setProductEvidencePending(false);
  }, [attempt, projectId]);

  /**
   * JOURNEY-INTEGRITY — CTA exclusivity on the mutating primary action.
   *
   * While a Proposal decision subject still owns the next useful action, the
   * generic ProjectTrajectory instruct CTA must not offer a competing subject.
   * Informational blocks above remain visible; only the mutating CTA is strict.
   *
   * Continuity conflict (unresolved Proposal subject + current EC) owns nothing
   * mutably — fail closed until Pilot resolves via a qualified next GO.
   */
  const proposalSubjectOwnsNextAction =
    !executionContinuityConflict &&
    // reformulate / instruct the pending subject
    (pendingReinstruction != null ||
      // options presented, awaiting the HumanDecision
      (optionSet != null && decision == null) ||
      // amend / refuse: next move is with Nora, never a new generic instruction
      (decision != null && decisionDefersExecution) ||
      // pursue decided but no contract yet: PREPARE owns the next action
      (decision != null && contract == null) ||
      // contract prepared / rehydrated: Inspect (then confirm / authorize) owns
      contract != null);

  const continuityReadsUnresolved =
    subjectReadStatus === "pending" ||
    subjectReadStatus === "error" ||
    executionContinuityReadStatus === "pending" ||
    executionContinuityReadStatus === "error" ||
    executionContinuityConflict;

  /** Fail-closed gate for Inspect / Amend / Confirm / Authorize / Execute. */
  const governedContinuationBlocked = continuityReadsUnresolved;

  useEffect(() => {
    if (!onProposalSubjectOwnershipChange) return;
    if (continuityReadsUnresolved) {
      onProposalSubjectOwnershipChange("UNKNOWN");
      return;
    }
    onProposalSubjectOwnershipChange(
      proposalSubjectOwnsNextAction ? "OWNED" : "NONE",
    );
  }, [
    onProposalSubjectOwnershipChange,
    proposalSubjectOwnsNextAction,
    continuityReadsUnresolved,
  ]);

  return (
    <section
      className={[
        styles.root,
        composition === "lps-embedded" ? styles.embedded : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-testid="w2-trajectory-panel"
      data-composition={composition}
      aria-labelledby="w2-trajectory-title"
    >
      <header className={styles.head}>
        <p className={styles.eyebrow}>Trajectoire du projet</p>
        <h2 id="w2-trajectory-title" className={styles.title}>
          Options, recommandation, puis votre décision
        </h2>
        <p className={styles.note}>
          Nora instruit des options et recommande. La décision vous appartient :
          une recommandation ne décide jamais et ne rend jamais une trajectoire
          courante. L&apos;exécution n&apos;est possible qu&apos;après une
          autorisation vérifiée, via une action Exécuter explicite et distincte.
        </p>
      </header>

      {error ? (
        <p className={styles.error} role="alert" data-testid="w2-error">
          {error}
        </p>
      ) : null}

      {pendingReinstruction ? (
        <section
          className={styles.block}
          aria-labelledby="w2-pending-reinstruction-title"
          data-testid="w2-pending-reinstruction"
        >
          {pendingReinstruction.proposalIds.length > 1 ? (
            <>
              <h3
                id="w2-pending-reinstruction-title"
                className={styles.blockTitle}
              >
                {pilotAmbiguousPendingTitle()}
              </h3>
              <p
                className={styles.blockBody}
                data-testid="w2-pending-reinstruction-body"
              >
                {pendingReinstruction.message}
              </p>
            </>
          ) : pendingReinstruction.proposalIds.length === 1 &&
            pendingReinstruction.recoverableProposalIds.length === 1 ? (
            <>
              <h3
                id="w2-pending-reinstruction-title"
                className={styles.blockTitle}
              >
                {pilotRecoverablePendingTitle()}
              </h3>
              <p
                className={styles.blockBody}
                data-testid="w2-pending-reinstruction-body"
              >
                {pendingReinstruction.message}
              </p>
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.primaryAction}
                  data-testid="w2-instruct-recoverable-options"
                  onClick={() => {
                    if (
                      pendingReinstruction.proposalIds.length !== 1 ||
                      pendingReinstruction.recoverableProposalIds.length !== 1
                    ) {
                      return;
                    }
                    void proposeOptions();
                  }}
                  disabled={busy !== null}
                >
                  Instruire les options
                </button>
              </div>
            </>
          ) : pendingReinstruction.proposalIds.length === 1 &&
            pendingReinstruction.recoverableProposalIds.length === 0 ? (
            <>
              <h3
                id="w2-pending-reinstruction-title"
                className={styles.blockTitle}
              >
                {pilotLostPendingTitle()}
              </h3>
              <p
                className={styles.blockBody}
                data-testid="w2-pending-reinstruction-body"
              >
                {pendingReinstruction.message}
              </p>
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.primaryAction}
                  data-testid="w2-reformulate-with-nora"
                  onClick={() => {
                    if (pendingReinstruction.proposalIds.length !== 1) return;
                    const soleId = pendingReinstruction.proposalIds[0];
                    if (soleId) onRequestReformulateWithNora?.(soleId);
                  }}
                  disabled={busy !== null || !onRequestReformulateWithNora}
                >
                  Reformuler avec Nora
                </button>
              </div>
            </>
          ) : (
            <>
              <h3
                id="w2-pending-reinstruction-title"
                className={styles.blockTitle}
              >
                {pilotLostPendingTitle()}
              </h3>
              <p
                className={styles.blockBody}
                data-testid="w2-pending-reinstruction-body"
              >
                {pendingReinstruction.message}
              </p>
            </>
          )}
          <details data-testid="w2-technical-details">
            <summary>Détails techniques</summary>
            <p className={styles.blockNote}>
              Propositions en attente :{" "}
              {pendingReinstruction.proposalIds.join(", ") || "—"}
            </p>
          </details>
        </section>
      ) : null}

      {preCycleCandidate && !activeCycleInstanceId ? (
        <section
          className={styles.block}
          aria-labelledby="pre-cycle-candidate-title"
          data-testid="pre-cycle-candidate-trajectory"
        >
          <h3 id="pre-cycle-candidate-title" className={styles.blockTitle}>
            Trajectoire proposée
          </h3>
          <p className={styles.blockNote}>
            Cycle proposé :{" "}
            {approvalPresentation?.catalogLabel ??
              preCycleCandidate.catalogLabel ??
              preCycleCandidate.steps[0]?.label ??
              "—"}
          </p>
          <p className={styles.blockNote} data-testid="pre-cycle-candidate-status">
            En attente de décision · Nora recommande cette trajectoire ; le
            Pilote décide · Aucun cycle démarré
          </p>
          <ul className={styles.optionList} data-testid="pre-cycle-candidate-steps">
            {preCycleCandidate.steps.map((step) => (
              <li key={step.stepId} className={styles.option}>
                <div className={styles.optionHead}>
                  <span className={styles.optionBadge}>Étape {step.order}</span>
                  <span className={styles.optionLabel}>{step.label}</span>
                </div>
                <p className={styles.optionIntent}>En attente</p>
              </li>
            ))}
          </ul>
          {approvalPresentation &&
          !approvalPresentation.targetCycleSelectable ? (
            <p
              className={styles.blockNote}
              role="status"
              data-testid="pre-cycle-candidate-not-selectable"
            >
              Le cycle proposé n&apos;est plus sélectionnable. La proposition
              doit être réévaluée avant toute validation.
            </p>
          ) : null}
          {approvalPresentation?.targetCycleSelectable ? (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.primaryAction}
                data-testid="pre-cycle-validate-trajectory"
                onClick={() => void approveCandidate()}
                disabled={busy !== null}
              >
                Valider cette trajectoire
              </button>
              <p className={styles.blockNote} data-testid="pre-cycle-validate-hint">
                Valider rendra cette trajectoire décidée/courante. Cela ne
                démarre pas encore le cycle.
              </p>
              {busy === "approve-candidate" ? (
                <span
                  className={styles.busy}
                  role="status"
                  data-testid="pre-cycle-approve-busy"
                >
                  Validation en cours…
                </span>
              ) : null}
            </div>
          ) : null}
        </section>
      ) : null}

      {greenfieldDecided && !activeCycleInstanceId && !preCycleCandidate ? (
        <section
          className={styles.block}
          aria-labelledby="pre-cycle-decided-title"
          data-testid="pre-cycle-decided-trajectory"
        >
          <h3 id="pre-cycle-decided-title" className={styles.blockTitle}>
            Décision humaine enregistrée
          </h3>
          <p className={styles.blockNote}>
            Trajectoire décidée / courante · Cycle :{" "}
            {greenfieldDecided.catalogLabel ?? "—"} · Aucun cycle démarré
          </p>
          {/*
            FIGMA SOURCE NOT APPLICABLE — D-GF-START-01 prepare/start CTAs follow
            existing TrajectorySurface action patterns (no Figma handoff).
          */}
          {greenfieldDecided.prepareBlockedReason ||
          greenfieldDecided.completedMatchingCycle ? (
            <p
              className={styles.blockNote}
              data-testid="pre-cycle-prepare-blocked"
            >
              Ce type de cycle est déjà terminé pour ce projet — aucune
              préparation disponible.
            </p>
          ) : !preparedCycle ? (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.primaryAction}
                data-testid="pre-cycle-prepare-cycle"
                onClick={() => void prepareValidatedCycle()}
                disabled={busy !== null}
              >
                Préparer le cycle
              </button>
              {busy === "prepare-cycle" ? (
                <span
                  className={styles.busy}
                  role="status"
                  data-testid="pre-cycle-prepare-busy"
                >
                  Préparation en cours…
                </span>
              ) : null}
            </div>
          ) : (
            <div className={styles.actions}>
              <p
                className={styles.blockNote}
                data-testid="pre-cycle-prepared-cycle"
              >
                Cycle préparé · {preparedCycle.catalogLabel ?? preparedCycle.cycleTypeId}{" "}
                · profil {preparedCycle.profile} · {preparedCycle.status}
              </p>
              <button
                type="button"
                className={styles.primaryAction}
                data-testid="pre-cycle-start-cycle"
                onClick={() => void startPreparedCycle()}
                disabled={busy !== null}
              >
                {preparedCycle.cycleTypeId === "cyc:framing" ||
                preparedCycle.catalogLabel === "Cadrage"
                  ? "Démarrer le cadrage"
                  : "Démarrer le cycle"}
              </button>
              {busy === "start-cycle" ? (
                <span
                  className={styles.busy}
                  role="status"
                  data-testid="pre-cycle-start-busy"
                >
                  Démarrage en cours…
                </span>
              ) : null}
            </div>
          )}
        </section>
      ) : null}

      {/*
        W2 OptionSet requires an active CycleInstance.
        JOURNEY-INTEGRITY — whenever a Proposal decision subject owns the next
        action (pending, options awaiting decision, decision taken, contract
        prepared), the generic trajectory instruct CTA is hidden so two
        decision subjects can never compete for the same primary action.
        Continuity reads must both resolve; pending/error/conflict stay fail-closed.
      */}
      {activeCycleInstanceId &&
      !proposalSubjectOwnsNextAction &&
      !continuityReadsUnresolved ? (
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primaryAction}
          data-testid="w2-propose-options"
          onClick={() => void proposeOptions()}
          disabled={busy !== null}
        >
          Instruire les options
        </button>
        {busy ? (
          <span className={styles.busy} role="status" data-testid="w2-busy">
            Traitement en cours…
          </span>
        ) : null}
      </div>
      ) : null}

      {!activeCycleInstanceId &&
      !preCycleCandidate &&
      hasCurrentNextCycleRecommendation ? (
        <p
          className={styles.blockNote}
          data-testid="pre-cycle-prepare-trajectory-hint"
        >
          Préparez d&apos;abord la trajectoire depuis la recommandation lifecycle
          courante — les options W2 nécessitent un cycle actif.
        </p>
      ) : null}

      {optionSet ? (
        <>
          <section
            className={styles.block}
            aria-labelledby="w2-options-title"
            data-testid="w2-options"
          >
            <h3 id="w2-options-title" className={styles.blockTitle}>
              <span className={styles.sectionKind} data-kind="option">
                Option
              </span>
              Options proposées
            </h3>
            {optionSet.proposalId ? (
              <>
                <p
                  className={styles.blockNote}
                  data-testid="w2-decision-subject"
                >
                  Proposition à examiner
                  {optionSet.promotesProjectTrajectory === false
                    ? " — arbitrage sur cette proposition (pas une promotion de trajectoire projet)."
                    : null}
                </p>
                <details data-testid="w2-technical-details">
                  <summary>Détails techniques</summary>
                  <p className={styles.blockNote}>
                    Proposal <code>{optionSet.proposalId}</code>
                  </p>
                </details>
              </>
            ) : (
              <p
                className={styles.blockNote}
                data-testid="w2-decision-subject-trajectory"
              >
                Sujet de décision : trajectoire Project (chemin de cycle).
              </p>
            )}
            <p className={styles.blockNote} data-testid="w2-proposed-trajectory">
              {optionSet.proposedTrajectory
                ? `${optionSet.proposedTrajectory.statusLabel} · version ${optionSet.proposedTrajectory.version} · pas encore courante`
                : optionSet.decisionSubjectMode === "proposal"
                  ? "Proposition — aucune trajectoire projet proposée."
                  : "Aucune trajectoire proposée."}
            </p>
            <ul className={styles.optionList}>
              {optionSet.options.map((option) => {
                const isRecommended =
                  option.optionRef ===
                  optionSet.recommendation.recommendedOptionRef;
                return (
                  <li
                    key={option.optionRef}
                    className={styles.option}
                    data-testid={`w2-option-${option.optionRef}`}
                  >
                    <div className={styles.optionHead}>
                      <span className={styles.optionBadge}>{option.kind}</span>
                      {isRecommended ? (
                        <span className={styles.recommendedBadge}>
                          Recommandée — pas décidée
                        </span>
                      ) : null}
                      <span className={styles.optionLabel}>{option.label}</span>
                    </div>
                    <p className={styles.optionIntent}>{option.intent}</p>
                    <ul className={styles.impacts}>
                      {option.impacts.map((impact) => (
                        <li key={impact}>{impact}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className={styles.decideAction}
                      data-testid={`w2-decide-${option.optionRef}`}
                      onClick={() => void decide(option.optionRef)}
                      disabled={busy !== null || decision !== null}
                      aria-label={`Décider: ${option.label}`}
                    >
                      Décider cette option
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          <section
            className={styles.recommendation}
            aria-labelledby="w2-reco-title"
            data-testid="w2-recommendation"
          >
            <h3 id="w2-reco-title" className={styles.recoTitle}>
              <span className={styles.sectionKind} data-kind="recommendation">
                Recommandation
              </span>
              {optionSet.recommendation.label}
            </h3>
            <p className={styles.blockBody}>
              {optionSet.recommendation.rationale}
            </p>
            <p className={styles.blockNote}>
              Cette recommandation ne promeut aucune trajectoire.
              {optionSet.recommendation.ckcAttribution
                ? " Contexte de cycle rattaché."
                : " Aucun contexte de cycle rattaché."}
            </p>
          </section>
        </>
      ) : null}

      {decision ? (
        <section
          className={styles.decision}
          aria-labelledby="w2-decision-title"
          data-testid="w2-decision"
        >
          <h3 id="w2-decision-title" className={styles.blockTitle}>
            <span className={styles.sectionKind} data-kind="decision">
              Décision humaine
            </span>
            {optionSet?.decisionSubjectMode === "proposal" ||
            decision.proposalId
              ? `Votre décision — ${decision.statusLabel}`
              : `Décision de trajectoire — ${decision.statusLabel}`}
          </h3>
          <dl className={styles.facts}>
            <div>
              <dt>Option retenue</dt>
              <dd data-testid="w2-decided-option">
                {optionSet?.decisionSubjectMode === "proposal" ||
                decision.proposalId
                  ? pilotProposalOptionLabel(decision.selectedOptionRef)
                  : decision.selectedOptionRef}
              </dd>
            </div>
            <div>
              <dt>Décideur</dt>
              <dd>{decision.actorRole}</dd>
            </div>
            <div>
              <dt>Base de décision</dt>
              <dd data-testid="w2-decision-basis">
                {decision.decisionBasisLinked ? "Reliée" : "Absente"}
              </dd>
            </div>
            <div>
              <dt>Trajectoire</dt>
              <dd data-testid="w2-decided-trajectory">
                {decided
                  ? `${decided.statusLabel} · version ${decided.version}`
                  : "Aucune promotion ProjectTrajectory"}
              </dd>
            </div>
          </dl>
          <details data-testid="w2-technical-details">
            <summary>Détails techniques</summary>
            <p className={styles.blockNote}>
              Réf. option : <code>{decision.selectedOptionRef}</code>
              {decision.proposalId ? (
                <>
                  {" "}
                  · Proposal <code>{decision.proposalId}</code>
                </>
              ) : null}
            </p>
          </details>
          {decision.selectedOptionRef === PROPOSAL_SUBJECT_AMEND_REF ? (
            <p
              className={styles.blockBody}
              data-testid="w2-amend-next-action"
            >
              Modifiez la proposition avec Nora, puis reformulez explicitement
              si une nouvelle instruction est requise. Aucune préparation
              d&apos;exécution ici.
            </p>
          ) : null}
          {decision.selectedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF ? (
            <p
              className={styles.blockBody}
              data-testid="w2-refuse-next-action"
            >
              Vous avez choisi de ne pas poursuivre cette proposition.
              Reformulez avec Nora si vous souhaitez un nouveau sujet. Aucune
              préparation d&apos;exécution ici.
            </p>
          ) : null}
          {/*
            JOURNEY-INTEGRITY Lot A-B fail-closed:
            · Proposal pursue + linked DecisionBasis → M3 PREPARE (no selector).
            · Proposal pursue + missing DecisionBasis → fail-closed requalify
              (NEVER sandbox fallback — subject still owns the journey).
            · Non-Proposal only → W2 sandbox selector remains.
            Contract prepared → Inspect owns next action; no re-PREPARE.
          */}
          {!decisionDefersExecution &&
          !contract &&
          proposalBackedPrepareReady ? (
          <div
            className={styles.actions}
            data-testid="w2-proposal-backed-prepare"
          >
            <p className={styles.blockNote} data-testid="w2-proposal-backed-prepare-note">
              La décision porte déjà l&apos;opération scellée. Préparez le
              contrat d&apos;exécution à partir de cette décision — sans
              resélection technique.
            </p>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-prepare-contract"
              onClick={() => void prepareProposalBackedContract()}
              disabled={busy !== null}
            >
              Préparer le contrat d&apos;exécution
            </button>
          </div>
          ) : null}
          {!decisionDefersExecution &&
          !contract &&
          proposalBackedPrepareBlocked ? (
          <div
            className={styles.block}
            data-testid="w2-proposal-prepare-blocked"
            role="status"
          >
            <p className={styles.blockBody}>
              Cette décision ne dispose plus d&apos;une base d&apos;exécution
              exploitable. Réinstruisez ou requalifiez le sujet avec Nora avant
              de préparer un contrat.
            </p>
          </div>
          ) : null}
          {!decisionDefersExecution &&
          !contract &&
          !hasProposalDecisionSubject ? (
          <div
            className={styles.actions}
            data-testid="w3a-qualify-execution-work"
          >
            <p className={styles.blockNote}>
              Qualifier le travail d&apos;exécution réel (indépendant de
              l&apos;option de trajectoire déjà décidée).
            </p>
            <label className={styles.amendmentLabel} htmlFor="w3a-operation-kind">
              Opération d&apos;exécution
            </label>
            <select
              id="w3a-operation-kind"
              className={styles.amendmentInput}
              data-testid="w3a-operation-kind"
              value={qualifiedOperationKind ?? ""}
              disabled={busy !== null}
              onChange={(event) => {
                const value = event.target.value;
                if (
                  value === "generate-temporary-artifact" ||
                  value === "simulate" ||
                  value === "read"
                ) {
                  setQualifiedOperationKind(value);
                  setContract(null);
                  setInspection(null);
                  setAuthorization(null);
                  setAttempt(null);
                  setAttemptPhase(null);
                } else {
                  setQualifiedOperationKind(null);
                }
              }}
            >
              <option value="">— Choisir —</option>
              <option value="generate-temporary-artifact">
                Générer un artefact temporaire local (réversible)
              </option>
              <option value="simulate">Simuler (sandbox)</option>
              <option value="read">Lecture seule</option>
            </select>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-prepare-contract-sandbox"
              onClick={() => void prepareContract()}
              disabled={busy !== null || qualifiedOperationKind === null}
              title={
                qualifiedOperationKind === null
                  ? "Qualifier d'abord le travail d'exécution"
                  : undefined
              }
            >
              Préparer le contrat d&apos;exécution
            </button>
          </div>
          ) : null}
        </section>
      ) : null}

      {contract ? (
        <section
          className={styles.contract}
          aria-labelledby="w2-contract-title"
          data-testid="w2-contract"
        >
          <h3 id="w2-contract-title" className={styles.blockTitle}>
            Contrat d&apos;exécution — résumé
          </h3>
          <p className={styles.blockNote}>
            Relisez d&apos;abord ce qui sera tenté. Inspectez le détail avant
            toute confirmation. Confirmer n&apos;exécute pas.
          </p>
          <dl className={styles.facts} data-testid="w2-contract-facts">
            <div>
              <dt>Ce qui sera fait</dt>
              <dd data-testid="w2-contract-action">{contract.action}</dd>
            </div>
            <div>
              <dt>Cible technique</dt>
              <dd data-testid="w2-contract-target">{contract.target}</dd>
            </div>
            {contract.inspectionDisclosure?.targetPath ? (
              <div>
                <dt>Cible exacte</dt>
                <dd data-testid="w2-contract-exact-target">
                  {contract.inspectionDisclosure.targetPath}
                </dd>
              </div>
            ) : null}
            {contract.inspectionDisclosure?.targetRepositoryRef ? (
              <div>
                <dt>Repository</dt>
                <dd data-testid="w2-contract-repository">
                  {contract.inspectionDisclosure.targetRepositoryRef}
                </dd>
              </div>
            ) : null}
            <div>
              <dt>Périmètre</dt>
              <dd data-testid="w2-contract-scope">{contract.scope}</dd>
            </div>
            <div>
              <dt>État du contrat</dt>
              <dd
                data-testid="w2-contract-status"
                data-status={contract.status}
              >
                {executionContractStatusLabel(contract.status)}
              </dd>
            </div>
            <div>
              <dt>Prochaine action utile</dt>
              <dd>
                {inspection?.inspectionSufficient
                  ? contract.status === "confirmation_required"
                    ? "Confirmer si requis, puis statuer sur l'autorisation"
                    : "Statuer sur l'autorisation"
                  : "Inspecter le détail du contrat"}
              </dd>
            </div>
          </dl>
          <details className={styles.contractLevel2}>
            <summary>Détails métier du contrat</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Version</dt>
                <dd data-testid="w2-contract-version">v{contract.version}</dd>
              </div>
              <div>
                <dt>Autorité requise</dt>
                <dd data-testid="w2-contract-authority">
                  {contract.requiredAuthority}
                </dd>
              </div>
              <div>
                <dt>Capacités</dt>
                <dd data-testid="w2-contract-capabilities">
                  {contract.requiredCapabilities.length
                    ? contract.requiredCapabilities.join(", ")
                    : "Aucune"}
                </dd>
              </div>
              <div>
                <dt>Réversibilité</dt>
                <dd data-testid="w2-contract-reversibility">
                  {contract.reversibility}
                </dd>
              </div>
              {contract.inspectionDisclosure?.scopeIn ? (
                <div>
                  <dt>Périmètre IN</dt>
                  <dd data-testid="w2-contract-scope-in">
                    {contract.inspectionDisclosure.scopeIn.join(" · ")}
                  </dd>
                </div>
              ) : null}
              {contract.inspectionDisclosure?.scopeOut ? (
                <div>
                  <dt>Périmètre OUT</dt>
                  <dd data-testid="w2-contract-scope-out">
                    {contract.inspectionDisclosure.scopeOut.join(" · ")}
                  </dd>
                </div>
              ) : null}
              {contract.inspectionDisclosure?.createOrModify !== null &&
              contract.inspectionDisclosure?.createOrModify !== undefined ? (
                <div>
                  <dt>Mutation</dt>
                  <dd data-testid="w2-contract-mutation">
                    {contract.inspectionDisclosure.createOrModify
                      ? "Création / modification"
                      : "Sans création / modification"}
                    {contract.inspectionDisclosure.noDelete
                      ? " · aucune suppression"
                      : ""}
                  </dd>
                </div>
              ) : null}
              {contract.inspectionDisclosure?.expectedOutputs ? (
                <div>
                  <dt>Sorties attendues</dt>
                  <dd data-testid="w2-contract-expected-outputs">
                    {contract.inspectionDisclosure.expectedOutputs.join(" · ")}
                  </dd>
                </div>
              ) : null}
              {contract.inspectionDisclosure?.contentRequirements ? (
                <div>
                  <dt>Exigences de contenu</dt>
                  <dd data-testid="w2-contract-content-requirements">
                    {contract.inspectionDisclosure.contentRequirements.join(
                      " · ",
                    )}
                  </dd>
                </div>
              ) : null}
              {contract.inspectionDisclosure?.validationExpectations ? (
                <div>
                  <dt>Attentes de validation</dt>
                  <dd data-testid="w2-contract-validation-expectations">
                    {contract.inspectionDisclosure.validationExpectations.join(
                      " · ",
                    )}
                  </dd>
                </div>
              ) : null}
              {contract.inspectionDisclosure?.evidenceRequirements.length ? (
                <div>
                  <dt>Preuves requises</dt>
                  <dd data-testid="w2-contract-evidence-requirements">
                    {contract.inspectionDisclosure.evidenceRequirements.join(
                      " · ",
                    )}
                  </dd>
                </div>
              ) : null}
              <div>
                <dt>Contraintes</dt>
                <dd data-testid="w2-contract-constraints">
                  {contract.constraints.length
                    ? contract.constraints.join(" · ")
                    : "Aucune"}
                </dd>
              </div>
              <div>
                <dt>Conditions d&apos;arrêt</dt>
                <dd data-testid="w2-contract-stops">
                  {contract.stopConditions.length
                    ? contract.stopConditions.join(" · ")
                    : "Aucune"}
                </dd>
              </div>
            </dl>
          </details>
          <details className={styles.technicalDetails}>
            <summary>Détails techniques du contrat</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Statut technique</dt>
                <dd
                  className={styles.code}
                  data-testid="w2-contract-status-tech"
                >
                  {contract.status}
                </dd>
              </div>
              <div>
                <dt>Empreinte sémantique</dt>
                <dd className={styles.code} data-testid="w2-contract-fingerprint">
                  {contract.semanticFingerprint.slice(0, 12)}…
                </dd>
              </div>
              <div>
                <dt>Identifiant contrat</dt>
                <dd className={styles.code} data-testid="w2-contract-id-tech">
                  {contract.executionContractId}
                </dd>
              </div>
            </dl>
          </details>

          {amendmentNotice ? (
            <div
              className={styles.amendmentNotice}
              data-testid="w2-amendment-notice"
              role="status"
            >
              <p className={styles.blockBody} data-testid="w2-amendment-status">
                {amendmentNotice.statusLabel}
              </p>
              <p className={styles.blockNote}>
                L&apos;inspection précédente couvrait le contrat précédent, pas
                le successeur amendé.
              </p>
              <p className={styles.blockNote} data-testid="w2-amendment-lineage">
                Successeur de {amendmentNotice.priorExecutionContractId} ·
                contrainte ajoutée : {amendmentNotice.additionalConstraint}
              </p>
            </div>
          ) : null}

          {inspection?.inspectionSufficient ? (
            <div
              className={styles.amendmentForm}
              data-testid="w2-amendment-form"
            >
              <p className={styles.blockTitle}>Amender le contrat</p>
              <label className={styles.amendmentLabel} htmlFor="w2-amend-constraint">
                Contrainte d&apos;exécution supplémentaire
              </label>
              <input
                id="w2-amend-constraint"
                className={styles.amendmentInput}
                data-testid="w2-amend-constraint"
                type="text"
                value={amendmentDraft}
                onChange={(event) => setAmendmentDraft(event.target.value)}
                disabled={busy !== null || governedContinuationBlocked}
                placeholder="Ex. : borner strictement le slice livré"
              />
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w2-amend-contract"
                onClick={() => void amendContract()}
                disabled={
                  busy !== null ||
                  governedContinuationBlocked ||
                  amendmentDraft.trim().length === 0
                }
              >
                Appliquer l&apos;amendement
              </button>
            </div>
          ) : null}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-inspect-contract"
              onClick={() => void inspect()}
              disabled={busy !== null || governedContinuationBlocked}
            >
              Inspecter le contrat
            </button>
            {contract.status === "confirmation_required" ? (
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w2-confirm-contract"
                onClick={() => void confirmForAuthorization()}
                disabled={
                  busy !== null ||
                  governedContinuationBlocked ||
                  inspection === null ||
                  !inspection.inspectionSufficient
                }
                title={
                  inspection === null || !inspection.inspectionSufficient
                    ? "Inspection suffisante requise avant de confirmer"
                    : undefined
                }
              >
                Confirmer mon consentement
              </button>
            ) : null}
            <button
              type="button"
              className={styles.secondaryAction}
              data-testid="w2-authorize-contract"
              onClick={() => void authorize()}
              disabled={busy !== null || governedContinuationBlocked}
            >
              Statuer sur l&apos;autorisation
            </button>
          </div>

          {inspection ? (
            <p
              className={styles.inspection}
              data-testid="w2-inspection-state"
              role="status"
            >
              {inspection.statusLabel}
              {inspection.reinspectionRequired
                ? " — l'inspection précédente ne suffit plus"
                : ""}
              {" · inspecter n'autorise pas"}
            </p>
          ) : null}
        </section>
      ) : null}

      {authorization ? (
        <section
          className={
            authorization.outcome === "AUTHORIZED"
              ? styles.authorized
              : styles.blocked
          }
          aria-labelledby="w2-authorization-title"
          data-testid="w2-authorization"
          role="status"
        >
          <h3 id="w2-authorization-title" className={styles.blockTitle}>
            <span
              data-testid="w2-authorization-outcome"
              data-outcome={authorization.outcome}
            >
              {authorization.outcome === "AUTHORIZED"
                ? "Autorisation vérifiée — l'exécution peut être lancée"
                : "Exécution bloquée"}
            </span>
          </h3>
          <p className={styles.blockBody} data-testid="w2-authorization-reason">
            {authorization.reasonText}
          </p>
          <p className={styles.blockNote} data-testid="w2-authorization-next">
            Prochaine action : {authorization.nextAction}
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Confirmation</dt>
              <dd data-testid="w2-confirmation-state">
                {authorization.confirmation.statusLabel}
              </dd>
            </div>
            <div>
              <dt>Exécuteur</dt>
              <dd data-testid="w2-executor-state">
                {authorization.agentCapability.statusLabel}
              </dd>
            </div>
            <div>
              <dt>Inspection</dt>
              <dd>{authorization.inspection.statusLabel}</dd>
            </div>
          </dl>
          <details className={styles.technicalDetails}>
            <summary>Détails techniques d&apos;autorité</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Verdict technique</dt>
                <dd data-testid="w2-authorization-outcome-tech">
                  {authorization.outcomeLabel}
                </dd>
              </div>
              <div>
                <dt>Trace d&apos;autorité</dt>
                <dd className={styles.code} data-testid="w2-authority-receipt">
                  {authorization.authorityReceiptRef}
                </dd>
              </div>
            </dl>
          </details>
          {authorization.outcome === "AUTHORIZED" && !attempt ? (
            <>
              <p
                className={styles.stopNotice}
                data-testid="w2-stop-before-execute"
              >
                Autorisation évaluée — aucune tentative lancée tant que vous
                n&apos;exécutez pas explicitement.
              </p>
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.primaryAction}
                  data-testid="w3a-governed-execute"
                  onClick={() => void governedExecute()}
                  disabled={busy !== null || governedContinuationBlocked}
                >
                  Exécuter
                </button>
              </div>
            </>
          ) : null}
          {authorization.outcome === "BLOCKED" ? (
            <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
              Aucune exécution n&apos;a été lancée : arrêt avant exécution.
            </p>
          ) : null}
        </section>
      ) : null}

      {attempt || attemptPhaseHistory.length > 0 ? (
        <section
          className={styles.attempt}
          aria-labelledby="w3a-attempt-title"
          data-testid="w3a-attempt"
          role="status"
        >
          <h3 id="w3a-attempt-title" className={styles.blockTitle}>
            Tentative d&apos;exécution
          </h3>
          <p className={styles.blockBody} data-testid="w3a-attempt-status">
            {attemptStatusLabel ?? "Tentative en cours"} · phase{" "}
            <span data-testid="w3a-attempt-lifecycle">
              {attemptPhase ?? "—"}
            </span>{" "}
            · historique{" "}
            <code data-testid="w3a-attempt-phase-history">
              {attemptPhaseHistory.join("|")}
            </code>{" "}
            · statut technique{" "}
            <span data-testid="w3a-attempt-technical-status">
              {attempt?.attemptStatus ?? "—"}
            </span>
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Attempt</dt>
              <dd className={styles.code} data-testid="w3a-attempt-id">
                {attempt?.attemptId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>Adapter</dt>
              <dd data-testid="w3a-attempt-adapter">
                {attempt?.adapterId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>Effets externes</dt>
              <dd data-testid="w3a-attempt-real">non</dd>
            </div>
            <div>
              <dt>Cycle auto-fermé</dt>
              <dd data-testid="w3a-cycle-closed">non</dd>
            </div>
          </dl>
          {attemptPhase === "running" ? (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w3b-stop-running"
                onClick={() => void stopRunningExecution()}
                disabled={busy !== null}
              >
                Arrêter l&apos;exécution
              </button>
            </div>
          ) : null}
          <p className={styles.blockNote} data-testid="w3a-terminal-honesty">
            {productOutcome?.claimAllowed
              ? "Terminal technique consommé — résultat produit qualifié ci-dessous."
              : productEvidencePending
                ? "Terminal technique — Evidence en cours / claim produit non encore émis."
                : "Terminal technique — résultat produit non encore qualifié."}
          </p>
          {productEvidencePending ? (
            <p
              className={styles.blockNote}
              data-testid="w3b-evidence-pending"
            >
              Evidence requise avant tout claim de résultat produit.
            </p>
          ) : null}
          {attempt?.attemptId && !productOutcome ? (
            <button
              type="button"
              className={styles.secondaryAction}
              data-testid="w3b-rehydrate-product"
              onClick={() => void rehydrateProduct()}
              disabled={busy !== null}
            >
              Recharger résultat produit (durable)
            </button>
          ) : null}
        </section>
      ) : null}

      {productOutcome ? (
        <section
          className={styles.productOutcome}
          aria-labelledby="w3b-product-title"
          data-testid="w3b-product-outcome"
          data-outcome={productOutcome.outcome}
          role="status"
        >
          <h3 id="w3b-product-title" className={styles.blockTitle}>
            Résultat
          </h3>
          <p
            className={styles.productHeadline}
            data-testid="w3b-product-headline"
          >
            <span
              data-testid="w3b-product-outcome-kind"
              data-kind={productOutcome.outcome}
            >
              {W4C_PRODUCT_OUTCOME_LABELS[productOutcome.outcome]}
            </span>
            {" — "}
            {productOutcome.businessHeadline}
          </p>
          <p className={styles.blockBody} data-testid="w3b-product-reason">
            {productOutcome.businessReason}
          </p>
          {productOutcome.governedBoundary ? (
            <p className={styles.blockBody} data-testid="w3b-governed-boundary">
              Frontière : {productOutcome.governedBoundary}
            </p>
          ) : null}
          <p className={styles.blockBody} data-testid="w3b-evidence-summary">
            {productOutcome.evidenceSummary ??
              "Aucune preuve enregistrée — aucun résultat produit revendiqué."}
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Preuve disponible</dt>
              <dd data-testid="w3b-review-bundle-completeness">
                {productOutcome.reviewBundleCompleteness ?? "—"}
              </dd>
            </div>
          </dl>
          {postEvidence && postEvidence.ok ? (
            <section
              className={styles.postEvidence}
              data-testid="w3c-post-evidence"
              aria-label={W4C_POST_EVIDENCE_HEADING}
            >
              <h4 className={styles.blockTitle}>{W4C_POST_EVIDENCE_HEADING}</h4>
              <p
                className={styles.productHeadline}
                data-testid="w3c-recommendation-headline"
              >
                {postEvidence.recommendation.headline}
              </p>
              <p className={styles.blockBody} data-testid="w3c-recommendation-rationale">
                {postEvidence.recommendation.rationale}
              </p>
              <p className={styles.blockBody} data-testid="w3c-next-step">
                <strong>{W4C_NEXT_ACTION_LEAD} :</strong>{" "}
                {postEvidence.recommendation.nextStep}
              </p>
              <p className={styles.blockBody} data-testid="w3c-nora-analysis">
                {postEvidence.analysisText ??
                  postEvidence.analysisUnavailableReason ??
                  "Analyse indisponible"}
              </p>
              <dl className={styles.facts}>
                <div>
                  <dt>Orientation</dt>
                  <dd data-testid="w3c-recommendation-kind">
                    {postEvidence.recommendation.kind}
                  </dd>
                </div>
                <div>
                  <dt>Décision humaine</dt>
                  <dd data-testid="w3c-requires-human-decision">
                    {postEvidence.recommendation.requiresHumanDecision
                      ? "oui"
                      : "non"}
                  </dd>
                </div>
              </dl>
              <details className={styles.technicalDetails}>
                <summary>Détail de recommandation (secondaire)</summary>
                <dl className={styles.facts}>
                  <div>
                    <dt>Authority</dt>
                    <dd data-testid="w3c-recommendation-authority">
                      none — Recommendation ≠ HumanDecision
                    </dd>
                  </div>
                  <div>
                    <dt>LPS version</dt>
                    <dd data-testid="w3c-lps-version">
                      {postEvidence.lpsVersion ?? "—"}
                    </dd>
                  </div>
                </dl>
              </details>
              {postEvidence.recommendation.kind === "recover" ||
              postEvidence.recommendation.kind === "replan" ||
              postEvidence.recommendation.requiresHumanDecision ? (
                <button
                  type="button"
                  className={styles.secondaryAction}
                  data-testid="w3c-propose-trajectory"
                  onClick={() => void proposeOptions()}
                  disabled={busy !== null}
                >
                  Proposer des options de trajectoire
                </button>
              ) : null}
            </section>
          ) : null}
          <details className={styles.technicalDetails}>
            <summary data-testid="w3b-technical-details-toggle">
              Détail technique (secondaire)
            </summary>
            <dl className={styles.facts}>
              <div>
                <dt>Evidence ID</dt>
                <dd className={styles.code} data-testid="w3b-evidence-id">
                  {productOutcome.evidenceId ?? "—"}
                </dd>
              </div>
              <div>
                <dt>ReviewBundle ID</dt>
                <dd className={styles.code} data-testid="w3b-review-bundle-id">
                  {productOutcome.reviewBundleId ?? "—"}
                </dd>
              </div>
              <div>
                <dt>Claim autorisé</dt>
                <dd data-testid="w3b-claim-allowed">
                  {productOutcome.claimAllowed ? "oui" : "non"}
                </dd>
              </div>
              <div>
                <dt>Apprentissage / replan</dt>
                <dd data-testid="w3b-nora-replan">
                  {`analyse: ${
                    postEvidence && postEvidence.ok && postEvidence.noraInvoked
                      ? "oui"
                      : "non"
                  } · replan auto: non`}
                </dd>
              </div>
              <div>
                <dt>Cycle auto-fermé</dt>
                <dd data-testid="w3b-cycle-closed">non</dd>
              </div>
              <div>
                <dt>READY</dt>
                <dd data-testid="w3b-ready">non</dd>
              </div>
              <div>
                <dt>Attempt</dt>
                <dd
                  className={styles.code}
                  data-testid="w3b-technical-attempt-id"
                >
                  {productOutcome.technicalDetail.attemptId}
                </dd>
              </div>
              <div>
                <dt>Statut technique</dt>
                <dd data-testid="w3b-technical-status">
                  {productOutcome.technicalDetail.attemptStatus}
                </dd>
              </div>
              <div>
                <dt>resultRef</dt>
                <dd className={styles.code} data-testid="w3b-technical-result-ref">
                  {productOutcome.technicalDetail.resultRef ?? "—"}
                </dd>
              </div>
              <div>
                <dt>errorRef / stopReason</dt>
                <dd
                  className={styles.code}
                  data-testid="w3b-technical-error-or-stop"
                >
                  {productOutcome.technicalDetail.errorRef ??
                    productOutcome.technicalDetail.stopReason ??
                    "—"}
                </dd>
              </div>
            </dl>
          </details>
          {(() => {
            const visibleReservations = filterProductReservationsForDisplay(
              productOutcome.reservations,
              Boolean(postEvidence && postEvidence.ok),
            );
            if (visibleReservations.length === 0) return null;
            return (
              <ul data-testid="w3b-reservations" className={styles.blockNote}>
                {visibleReservations.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            );
          })()}
          <button
            type="button"
            className={styles.secondaryAction}
            data-testid="w3b-rehydrate-product"
            onClick={() => void rehydrateProduct()}
            disabled={busy !== null || !attempt?.attemptId}
          >
            Recharger résultat produit (durable)
          </button>
        </section>
      ) : null}
    </section>
  );
}

```

---

## COMPLETE REVIEWABLE SOURCE — micro test file 1
### `projects/sfia-studio/app/__tests__/project-assistant/ecRehydrationContinuity.d0.test.ts`

```typescript
/**
 * Restart-safe governed ExecutionContract + inspection continuity (D0).
 * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  computeInspectionFingerprint,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
import {
  baseBuildRequest,
  buildStack,
  MORRIS_ACTOR,
  registerMorris,
  seedProject,
  type Stack,
} from "../oa/execution-contract/helpers";

const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";
const TARGET_REPO = "mcleland147/sfia-workspace";
const TECH_TARGET = "workspace.isolated.docs_write";
const DOCS_WRITE_ACTION = "cursor.docs_write.apply";
const PROJECT_ID = "prj:campus360-oa";
const DECISION_ID = "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411";
const EC_ID = "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411";
const PROP_ID = "prop:f2:edba677a-123f-4f5e-baad-50533a65a3a0";

const LEGACY_INSPECTED_FACTS = [
  "action",
  "target",
  "scope",
  "requiredAuthority",
  "requiredCapabilities",
  "constraints",
  "stopConditions",
  "reversibility",
  "semanticFingerprint",
] as const;

function stubOa(
  stack: Stack,
  nowIso: string,
  projectRead?:
    | { ok: true; activeCycleInstanceId: string | null }
    | { ok: false },
) {
  const base = {
    executionContractServices: stack.execution,
    decisionServices: stack.decisions,
    authorityResolver: stack.decisions.authority,
    clock: { nowIso: () => nowIso },
    projectServices: stack.projects,
    cycleServices: stack.cycles,
    executionAttemptServices: {
      registry: {
        listAgents: () => [],
        findCandidates: () => [],
      },
    },
  } as unknown as Parameters<
    typeof readCurrentGovernedExecutionContinuity
  >[0]["oa"];

  if (!projectRead) return base;

  return {
    ...base,
    projectServices: {
      ...stack.projects,
      getProject: {
        execute: async () => {
          if (!projectRead.ok) {
            return {
              ok: false as const,
              error: {
                code: "PROJECT_NOT_FOUND" as const,
                message: "Project unavailable",
              },
            };
          }
          return {
            ok: true as const,
            project: {
              projectId: PROJECT_ID,
              activeCycleInstanceId:
                projectRead.activeCycleInstanceId ?? undefined,
            },
          };
        },
      },
    },
  } as unknown as typeof base;
}

async function seedDecisionWithBasis(
  stack: Stack,
  opts: {
    decisionId?: string;
    selectedOptionId?: string;
    sourceRef?: string;
  } = {},
): Promise<string> {
  const decisionId = opts.decisionId ?? DECISION_ID;
  const selectedOptionId =
    opts.selectedOptionId ?? "opt:proposal-subject:pursue";
  const sourceRef = opts.sourceRef ?? PROP_ID;

  try {
    registerMorris(stack.decisions.authority, "docs_write borné — cycle actif");
  } catch {
    /* already registered */
  }
  try {
    stack.decisions.authority.register({
      evidenceId: `evd:morris-continuity-${decisionId.replace(/[^a-z0-9]/gi, "")}`,
      actorId: "actor:morris",
      level: "N3",
      scope: `W2 Proposal subject arbitration for ${sourceRef}`,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });
  } catch {
    /* already registered */
  }

  const recorded = await stack.decisions.recordHumanDecision.execute({
    decisionId,
    projectId: PROJECT_ID,
    subject: `W2 Proposal subject arbitration for ${sourceRef}`,
    options: [
      {
        optionId: "opt:proposal-subject:pursue",
        label: "Poursuivre",
        recommended: true,
      },
      { optionId: "opt:proposal-subject:amend", label: "Amender" },
      { optionId: "opt:proposal-subject:refuse", label: "Refuser" },
    ],
    selectedOptionId,
    actor: MORRIS_ACTOR,
    authority: "morris",
    reversible: true,
    authorityEvidenceId: `evd:morris-continuity-${decisionId.replace(/[^a-z0-9]/gi, "")}`,
    decisionBasis: {
      sourceType: "proposal",
      sourceRef,
      sourceDigest:
        "2035bb9b58e77d6a97c71760b730fd041f5710e3809669d0cb57f2d376356bde",
      projectId: PROJECT_ID,
      proposalContext: {
        lpsId: "lps:3a8e02537e45d5b9",
        lpsVersion: 17,
      },
      executionBasis: {
        requestedOperation: DOCS_WRITE_ACTION,
        targetPath: TARGET_PATH,
        targetRepositoryRef: TARGET_REPO,
      },
    },
  });
  expect(recorded.ok).toBe(true);
  return decisionId;
}

async function buildValidatedDocsWriteEc(
  stack: Stack,
  opts: {
    executionContractId?: string;
    decisionId?: string;
    idempotencyKey?: string;
  } = {},
): Promise<ExecutionContract> {
  const decisionId = opts.decisionId ?? DECISION_ID;
  const executionContractId = opts.executionContractId ?? EC_ID;
  const scope = "docs_write borné — cycle actif — aucune exécution automatique";
  const authorityEvidenceId = `evd:morris-${executionContractId.replace(/[^a-z0-9]/gi, "")}`;
  try {
    stack.decisions.authority.register({
      evidenceId: authorityEvidenceId,
      actorId: "actor:morris",
      level: "N3",
      scope,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });
  } catch {
    /* already registered */
  }

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      executionContractId,
      projectId: PROJECT_ID,
      decisionRefs: [decisionId],
      action: DOCS_WRITE_ACTION,
      target: TECH_TARGET,
      scope,
      inputs: {
        objective: "Matérialiser le livrable requis du cycle actif",
        targetPath: TARGET_PATH,
        targetRepositoryRef: TARGET_REPO,
        repositoryRef: TARGET_REPO,
        repositoryIdentity: TARGET_REPO,
        scopeIn: ["projects/sfia-studio/.sandbox"],
        scopeOut: [],
        createOrModify: true,
        noDelete: true,
        contentRequirements: ["fiche de cadrage"],
        expectedOutputs: [TARGET_PATH],
      },
      expectedOutputs: [TARGET_PATH],
      evidenceRequirements: ["evreq:git-working-tree"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      requiredAuthority: "MORRIS",
      constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL"],
      stopConditions: ["AUTHORITY_DENIED"],
      reversibility: "reversible",
      idempotencyKey: opts.idempotencyKey ?? `idem:${executionContractId}`,
      authorityEvidenceId,
      actor: MORRIS_ACTOR,
    }),
  );
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");

  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId,
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");
  return validated.contract;
}

function semanticSnapshot(stack: Stack) {
  return {
    decisions: stack.decisions.audit.events.length,
    executionEvents: stack.execution.audit.events.length,
  };
}

describe("EC rehydration continuity — readCurrentGovernedExecutionContinuity", () => {
  it("campaign shape — active EC + legacy incomplete inspection; ZERO semantic writes", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    expect(contract.status).toBe("confirmation_required");
    expect(contract.version).toBeGreaterThanOrEqual(1);

    const fingerprint = computeInspectionFingerprint(contract);
    await stack.execution.inspectionAttestations.append({
      schemaVersion: "0.1.0-oa",
      attestationId: "insp:05042f3b6040838e",
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
      inspectionFingerprint: fingerprint,
      semanticFingerprint: contract.semanticFingerprint ?? fingerprint,
      projectId: PROJECT_ID,
      actor: LOCAL_PILOTE_ACTOR,
      inspectedAt: "2026-09-16T02:03:03.581Z",
      inspectedFacts: [...LEGACY_INSPECTED_FACTS],
      grantsAuthority: false,
      isConfirmation: false,
    });

    const beforeAttestations =
      await stack.execution.inspectionAttestations.listByContract(
        contract.executionContractId,
      );
    const beforeDecision = await stack.decisions.getHumanDecision.execute({
      decisionId: DECISION_ID,
    });
    expect(beforeDecision.ok).toBe(true);
    const beforeSnap = semanticSnapshot(stack);

    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });

    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("active");
    if (read.kind !== "active") return;

    expect(read.decisionRef).toBe(DECISION_ID);
    expect(read.contract.executionContractId).toBe(EC_ID);
    expect(read.contract.status).toBe("confirmation_required");
    expect(read.contract.action).toBe(DOCS_WRITE_ACTION);
    expect(read.contract.target).toBe(TECH_TARGET);
    expect(read.contract.inspectionDisclosure.targetPath).toBe(TARGET_PATH);
    expect(read.contract.inspectionDisclosure.targetRepositoryRef).toBe(
      TARGET_REPO,
    );
    expect(read.contract.inspectionDisclosure).not.toHaveProperty("inputs");
    expect(read.inspection.inspectionSufficient).toBe(false);
    expect(read.inspection.reinspectionRequired).toBe(true);
    expect(read.inspection.reason).toBe("inspected_facts_incomplete");
    expect(read.inspection.statusLabel).toBe(
      "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS",
    );
    expect(read.inspection.grantsAuthority).toBe(false);

    const afterAttestations =
      await stack.execution.inspectionAttestations.listByContract(
        contract.executionContractId,
      );
    expect(afterAttestations.length).toBe(beforeAttestations.length);
    const afterDecision = await stack.decisions.getHumanDecision.execute({
      decisionId: DECISION_ID,
    });
    expect(afterDecision.ok).toBe(true);
    if (beforeDecision.ok && afterDecision.ok) {
      expect(afterDecision.decision.version).toBe(beforeDecision.decision.version);
      expect(afterDecision.decision.status).toBe(beforeDecision.decision.status);
    }
    const listed = await stack.execution.listExecutionContractHistory.execute({
      projectId: PROJECT_ID,
    });
    expect(listed.ok).toBe(true);
    if (listed.ok) {
      expect(listed.contracts).toHaveLength(1);
      expect(listed.contracts[0]!.executionContractId).toBe(EC_ID);
    }
    // Audit bookkeeping may grow; decision/EC/attestation counts stay stable.
    expect(afterAttestations.length).toBe(1);
    void beforeSnap;
  });

  it("G1 — no EC → kind none", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read).toEqual({ ok: true, kind: "none" });
  });

  it("G2 — only terminal historical ECs → none", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    await stack.execution.contracts.save({
      ...contract,
      status: "completed",
    });
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read).toEqual({ ok: true, kind: "none" });
  });

  it("G3 — superseded prior + valid successor → successor only", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const prior = await buildValidatedDocsWriteEc(stack, {
      executionContractId: "xct:prior",
      idempotencyKey: "idem:prior",
    });
    const superseded = await stack.execution.supersedeExecutionContract.execute({
      newExecutionContractId: "xct:successor",
      supersedesExecutionContractId: prior.executionContractId,
      supersessionReason: "Scope narrowed after review",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: `evd:morris-${prior.executionContractId.replace(/[^a-z0-9]/gi, "")}`,
      expectedVersion: prior.version,
      idempotencyKey: "idem:successor",
      constraints: [...prior.constraints, "EXTRA_CONSTRAINT"],
    });
    expect(superseded.ok).toBe(true);
    if (!superseded.ok) return;

    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(true);
    if (!read.ok || read.kind !== "active") return;
    expect(read.contract.executionContractId).toBe("xct:successor");
  });

  it("G4 — two unresolved current candidates → AMBIGUOUS", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack, { decisionId: "dec:w2-prop:continuity-a" });
    await seedDecisionWithBasis(stack, {
      decisionId: "dec:w2-prop:continuity-b",
      sourceRef: "prop:f2:other",
    });
    await buildValidatedDocsWriteEc(stack, {
      executionContractId: "xct:a",
      decisionId: "dec:w2-prop:continuity-a",
      idempotencyKey: "idem:continuity-a",
    });
    await buildValidatedDocsWriteEc(stack, {
      executionContractId: "xct:b",
      decisionId: "dec:w2-prop:continuity-b",
      idempotencyKey: "idem:continuity-b",
    });

    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(false);
    if (read.ok) return;
    expect(read.code).toBe("EXECUTION_CONTINUITY_AMBIGUOUS");
  });

  it("G5 — missing decisionRef → INTEGRITY_FAILED", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    await stack.execution.contracts.save({
      ...contract,
      decisionRefs: [],
    });
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(false);
    if (read.ok) return;
    expect(read.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
  });

  it("G6 — EC of another project never projected", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedProject(stack.projects, "prj:other");
    await seedDecisionWithBasis(stack);
    await buildValidatedDocsWriteEc(stack);
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: "prj:other",
    });
    expect(read).toEqual({ ok: true, kind: "none" });
  });

  it("G8 — fresh sufficient attestation remains sufficient; read does not record", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const inspected = await inspectExecutionContract({
      oa,
      projectId: PROJECT_ID,
      executionContractId: contract.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    const before =
      await stack.execution.inspectionAttestations.listByContract(
        contract.executionContractId,
      );

    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(true);
    if (!read.ok || read.kind !== "active") return;
    expect(read.inspection.inspectionSufficient).toBe(true);
    expect(read.inspection.reason).toBe("inspected");

    const after =
      await stack.execution.inspectionAttestations.listByContract(
        contract.executionContractId,
      );
    expect(after.length).toBe(before.length);
  });

  it("executing current contract → UNSUPPORTED fail-closed", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    await stack.execution.contracts.save({
      ...contract,
      status: "executing",
    });
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(false);
    if (read.ok) return;
    expect(read.code).toBe("EXECUTION_CONTINUITY_UNSUPPORTED");
  });

  it("P1 — Project read fails → INTEGRITY_FAILED; no contract projection", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    await buildValidatedDocsWriteEc(stack);
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", { ok: false });
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(false);
    if (read.ok) return;
    expect(read.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
  });

  it("P2 — explicit EC cycle + Project activeCycle null → INTEGRITY_FAILED", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    await stack.execution.contracts.save({
      ...contract,
      cycleInstanceId: "cyc:A",
    });
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", {
      ok: true,
      activeCycleInstanceId: null,
    });
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(false);
    if (read.ok) return;
    expect(read.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
  });

  it("P3 — explicit EC cycle + mismatched active cycle → INTEGRITY_FAILED", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    await stack.execution.contracts.save({
      ...contract,
      cycleInstanceId: "cyc:A",
    });
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", {
      ok: true,
      activeCycleInstanceId: "cyc:B",
    });
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(false);
    if (read.ok) return;
    expect(read.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
  });

  it("P4 — explicit EC cycle + matching active cycle → active continuity", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    await stack.execution.contracts.save({
      ...contract,
      cycleInstanceId: "cyc:A",
    });
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", {
      ok: true,
      activeCycleInstanceId: "cyc:A",
    });
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(true);
    if (!read.ok || read.kind !== "active") return;
    expect(read.contract.executionContractId).toBe(EC_ID);
  });

  it("P5 — EC without cycleInstanceId + Project active null remains compatible", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    await buildValidatedDocsWriteEc(stack);
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", {
      ok: true,
      activeCycleInstanceId: null,
    });
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(true);
    if (!read.ok || read.kind !== "active") return;
    expect(read.contract.executionContractId).toBe(EC_ID);
  });
});

```

---

## COMPLETE REVIEWABLE SOURCE — micro test file 2
### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`

```tsx
/** @vitest-environment jsdom */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
import {
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";

const {
  proposeMock,
  decideMock,
  inspectMock,
  authorizeMock,
  amendMock,
  prepareContractMock,
  prepareM3Mock,
  executeSelectMock,
  executeStartMock,
  executeCompleteMock,
  readActiveDecisionSubjectMock,
  readGovernedExecutionContinuityMock,
  readPreCycleMock,
  readApprovalMock,
  prepareCycleMock,
  readPreparedCycleMock,
  startPreparedCycleMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  decideMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  amendMock: vi.fn(),
  prepareContractMock: vi.fn(),
  prepareM3Mock: vi.fn(),
  executeSelectMock: vi.fn(),
  executeStartMock: vi.fn(),
  executeCompleteMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  readGovernedExecutionContinuityMock: vi.fn(),
  readPreCycleMock: vi.fn(),
  readApprovalMock: vi.fn(),
  prepareCycleMock: vi.fn(),
  readPreparedCycleMock: vi.fn(),
  startPreparedCycleMock: vi.fn(),
}));

/**
 * JOURNEY-INTEGRITY Lot A-B — the Proposal-backed PREPARE routes the very same
 * application entrypoint the AP23 application-path proof exercises
 * (productProofJourneyIntegrity.applicationPath.d0.test.ts).
 */
vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantPrepareM3Action: (...args: unknown[]) =>
    prepareM3Mock(...args),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: (...args: unknown[]) => proposeMock(...args),
  w2DecideTrajectoryAction: (...args: unknown[]) => decideMock(...args),
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2AmendExecutionContractAction: (...args: unknown[]) => amendMock(...args),
  w2PrepareExecutionContractAction: (...args: unknown[]) =>
    prepareContractMock(...args),
  w2GovernedExecuteSelectAction: (...args: unknown[]) =>
    executeSelectMock(...args),
  w2GovernedExecuteStartAction: (...args: unknown[]) =>
    executeStartMock(...args),
  w2GovernedExecuteCompleteAction: (...args: unknown[]) =>
    executeCompleteMock(...args),
  w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
    readActiveDecisionSubjectMock(...args),
  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
    readGovernedExecutionContinuityMock(...args),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: (...args: unknown[]) =>
    readPreCycleMock(...args),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: (
    ...args: unknown[]
  ) => readApprovalMock(...args),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: (...args: unknown[]) =>
    prepareCycleMock(...args),
  readPreparedTrajectoryCycleAction: (...args: unknown[]) =>
    readPreparedCycleMock(...args),
  startPreparedTrajectoryCycleAction: (...args: unknown[]) =>
    startPreparedCycleMock(...args),
}));

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  proposeMock.mockReset();
  decideMock.mockReset();
  inspectMock.mockReset();
  authorizeMock.mockReset();
  amendMock.mockReset();
  prepareContractMock.mockReset();
  prepareM3Mock.mockReset();
  executeSelectMock.mockReset();
  executeStartMock.mockReset();
  executeCompleteMock.mockReset();
  readActiveDecisionSubjectMock.mockReset();
  readGovernedExecutionContinuityMock.mockReset();
  readPreCycleMock.mockReset();
  readApprovalMock.mockReset();
  prepareCycleMock.mockReset();
  readPreparedCycleMock.mockReset();
  startPreparedCycleMock.mockReset();
  readActiveDecisionSubjectMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readGovernedExecutionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readPreCycleMock.mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: "cycinst:test-active",
    hasCurrentNextCycleRecommendation: false,
  });
  readApprovalMock.mockResolvedValue({
    ok: true,
    presentation: null,
    alreadyDecided: null,
    activeCycleInstanceId: "cycinst:test-active",
  });
  readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });
});

describe("W2 TrajectorySurface", () => {
  it("CORR-PROOF-11 — amend decision hides prepare; shows next-action", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-proposal",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      decisionSubjectMode: "proposal",
      proposalId: "prop:f2:ui-amend",
      promotesProjectTrajectory: false,
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:proposal-subject:amend",
          label: "Amender le sujet avant d'engager",
          intent: "Modifier",
          impacts: [],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: "opt:proposal-subject:pursue",
          label: "Poursuivre le sujet proposé",
          intent: "Continuer",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:proposal-subject:pursue",
        rationale: "Continuer.",
        isHumanDecision: false,
        ckcAttribution: false,
      },
      epistemicRefs: [],
      proposedTrajectory: null,
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:amend",
        selectedOptionRef: "opt:proposal-subject:amend",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-08-23T04:30:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: "prop:f2:ui-amend",
      },
      trajectory: null,
      livingProjectStateVersion: 3,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId("w2-decide-opt:proposal-subject:amend"));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-amend-next-action")).toBeVisible();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
    expect(screen.getByTestId("w2-decided-option")).toHaveTextContent("Modifier");
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(prepareContractMock).not.toHaveBeenCalled();
  });

  it("CORR-PROOF-11 — pursue on proposal subject still shows prepare", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-proposal-pursue",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      decisionSubjectMode: "proposal",
      proposalId: "prop:f2:ui-pursue",
      promotesProjectTrajectory: false,
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:proposal-subject:pursue",
          label: "Poursuivre le sujet proposé",
          intent: "Continuer",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:proposal-subject:pursue",
        rationale: "Continuer.",
        isHumanDecision: false,
        ckcAttribution: false,
      },
      epistemicRefs: [],
      proposedTrajectory: null,
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:pursue",
        selectedOptionRef: "opt:proposal-subject:pursue",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-08-23T04:30:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: "prop:f2:ui-pursue",
      },
      trajectory: null,
      livingProjectStateVersion: 3,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId("w2-decide-opt:proposal-subject:pursue"));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-proposal-backed-prepare")).toBeVisible();
    expect(screen.getByTestId("w2-prepare-contract")).toBeVisible();
    expect(screen.queryByTestId("w2-amend-next-action")).toBeNull();
  });
  it("labels Options and Recommendation distinctly and never auto-decides", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Trajectoire gouvernée par gates",
          intent: "Instruire puis décider",
          impacts: ["Chaque frontière est explicite"],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer un périmètre réversible",
          impacts: ["Chemin plus court"],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Aucun signal critique.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);

    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-propose-options"));
    expect(await screen.findByTestId("w2-options")).toBeVisible();
    expect(screen.getAllByText("OPTION").length).toBeGreaterThan(0);
    expect(screen.getByTestId("w2-recommendation")).toHaveTextContent(
      "RECOMMANDATION — PAS UNE DÉCISION",
    );
    expect(screen.getByTestId("w2-proposed-trajectory")).toHaveTextContent(
      "TRAJECTOIRE PROPOSÉE",
    );
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    expect(screen.queryByTestId("w2-authorization")).toBeNull();
    expect(proposeMock).toHaveBeenCalledWith({
      projectId: "prj:w2-ui",
      proposalId: null,
    });
  });

  it("records an explicit Pilote decision and shows STOP BEFORE EXECUTE on the verdict", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Bornée.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:w2-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-08-23T04:30:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
      },
      trajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "validated",
        statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
        isCurrent: true,
        decidedByDecisionRef: "dec:w2-ui",
        decidedOptionRef: "opt:trajectory:bounded-direct",
      },
      livingProjectStateVersion: 3,
      executionPerformed: false,
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:bounded-direct"),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-decision-basis")).toHaveTextContent("Reliée");
    expect(screen.getByTestId("w2-decided-trajectory")).toHaveTextContent(
      "TRAJECTOIRE DÉCIDÉE / COURANTE",
    );
    expect(decideMock).toHaveBeenCalledWith(
      expect.objectContaining({
        projectId: "prj:w2-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
      }),
    );

    prepareContractMock.mockResolvedValue({
      ok: true,
      decisionId: "dec:w2-ui",
      f3SemanticOverwrite: false,
      executionPerformed: false,
      attemptCreated: false,
      contract: {
        executionContractId: "xct:w2-ui",
        version: 1,
        status: "confirmation_required",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        requiredAuthority: "N1",
        constraints: [
          "PRODUCT_GOVERNED",
          "EFFECT_CLASS:generate-temporary-artifact",
          "EFFECT_CONFIRMATION_REQUIRED:N1",
        ],
        stopConditions: ["EFFECTS_UNRESOLVED"],
        requiredCapabilities: ["cap:product-temp-artifact"],
        reversibility: "reversible",
        semanticFingerprint: "abc123def456",
        effectClass: "generate-temporary-artifact",
        effectConfirmationRequired: true,
        effectConfirmationLevel: "N1",
      },
    });

    // Generic ProjectTrajectory decision — no sealed Proposal operation, so the
    // legacy sandbox qualification selector still owns the PREPARE affordance.
    expect(screen.getByTestId("w3a-qualify-execution-work")).toBeVisible();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    fireEvent.change(screen.getByTestId("w3a-operation-kind"), {
      target: { value: "generate-temporary-artifact" },
    });
    fireEvent.click(screen.getByTestId("w2-prepare-contract-sandbox"));
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
      "product:generate-temporary-artifact",
    );
    expect(screen.getByTestId("w2-contract-scope")).toHaveTextContent(
      "product:temporary-local-artifact",
    );
    expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
      "cap:product-temp-artifact",
    );
    // W4-BR-CORR-01 — primary status is business label; raw enum remains audit-only.
    expect(screen.getByTestId("w2-contract-status")).toHaveTextContent(
      "Confirmation requise",
    );
    expect(screen.getByTestId("w2-contract-status")).toHaveAttribute(
      "data-status",
      "confirmation_required",
    );
    expect(screen.getByTestId("w2-contract-status")).not.toHaveTextContent(
      "confirmation_required",
    );
    expect(screen.getByTestId("w2-contract-status-tech")).toHaveTextContent(
      "confirmation_required",
    );
    // E3 — Confirmation affordance requires sufficient inspection, not mere presence.
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();

    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui",
      contractVersion: 1,
      semanticFingerprint: "abc123def456",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:test",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(await screen.findByTestId("w2-inspection-state")).toHaveTextContent(
      "INSPECTÉ",
    );
    expect(screen.getByTestId("w2-confirm-contract")).not.toBeDisabled();

    // Amendment affordance appears only after sufficient inspection.
    expect(screen.getByTestId("w2-amendment-form")).toBeVisible();
    expect(screen.queryByTestId("w2-amendment-notice")).toBeNull();

    amendMock.mockResolvedValue({
      ok: true,
      priorExecutionContractId: "xct:w2-ui",
      priorContractVersion: 1,
      priorInspectionAttestationRef: "att:test",
      successor: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        version: 1,
        status: "confirmation_required",
        action: "w2:inspect-only",
        target: "studio",
        scope: "w2-ui",
        requiredAuthority: "MORRIS",
        constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
        stopConditions: ["STOP AVANT EXECUTE"],
        requiredCapabilities: ["cap:f3-fixture-docs"],
        reversibility: "reversible",
        semanticFingerprint: "fff111aaa222",
        supersedesExecutionContractId: "xct:w2-ui",
        supersessionReason: "w2_constraint_amendment",
      },
      supersedesExecutionContractId: "xct:w2-ui",
      materialAmendment: true,
      priorInspectionDoesNotCoverSuccessor: true,
      reinspectionRequired: true,
      statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION REQUISE",
      successorInspection: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        contractVersion: 1,
        semanticFingerprint: "fff111aaa222",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      additionalConstraint: "BORNER LE SLICE",
      replayed: false,
      humanDecisionCreated: false,
      authorityGranted: false,
      confirmationGranted: false,
      executionPerformed: false,
      attemptCreated: false,
    });

    fireEvent.change(screen.getByTestId("w2-amend-constraint"), {
      target: { value: "BORNER LE SLICE" },
    });
    fireEvent.click(screen.getByTestId("w2-amend-contract"));
    expect(await screen.findByTestId("w2-amendment-notice")).toBeVisible();
    expect(screen.getByTestId("w2-amendment-status")).toHaveTextContent(
      /réinspection requise/i,
    );
    expect(screen.getByTestId("w2-contract-constraints")).toHaveTextContent(
      "BORNER LE SLICE",
    );
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      "NON INSPECTÉ",
    );
    expect(screen.queryByTestId("w2-amendment-form")).toBeNull();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(amendMock).toHaveBeenCalledWith({
      projectId: "prj:w2-ui",
      executionContractId: "xct:w2-ui",
      additionalConstraint: "BORNER LE SLICE",
    });

    // R1 — UI consumes application statusLabel (not a hardcoded false required).
    amendMock.mockResolvedValue({
      ok: true,
      priorExecutionContractId: "xct:w2-ui",
      priorContractVersion: 1,
      priorInspectionAttestationRef: "att:test",
      successor: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        version: 1,
        status: "confirmation_required",
        action: "w2:inspect-only",
        target: "studio",
        scope: "w2-ui",
        requiredAuthority: "MORRIS",
        constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
        stopConditions: ["STOP AVANT EXECUTE"],
        requiredCapabilities: ["cap:f3-fixture-docs"],
        reversibility: "reversible",
        semanticFingerprint: "fff111aaa222",
        supersedesExecutionContractId: "xct:w2-ui",
        supersessionReason: "w2_constraint_amendment",
      },
      supersedesExecutionContractId: "xct:w2-ui",
      materialAmendment: true,
      priorInspectionDoesNotCoverSuccessor: true,
      reinspectionRequired: false,
      statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
      successorInspection: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        contractVersion: 1,
        semanticFingerprint: "fff111aaa222",
        statusLabel: "INSPECTÉ",
        inspectionSufficient: true,
        attestationRef: "att:successor",
        attestedVersion: 1,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "inspected",
        grantsAuthority: false,
      },
      additionalConstraint: "BORNER LE SLICE",
      replayed: true,
      humanDecisionCreated: false,
      authorityGranted: false,
      confirmationGranted: false,
      executionPerformed: false,
      attemptCreated: false,
    });
    // Re-open form by mocking a second inspect-sufficient path isn't needed —
    // call amend again via preparing another inspect cycle: force form by
    // clicking inspect mock first then amend with already-satisfied truth.
    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui:amd:deadbeef",
      contractVersion: 1,
      semanticFingerprint: "fff111aaa222",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:successor",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(await screen.findByTestId("w2-amendment-form")).toBeVisible();
    fireEvent.change(screen.getByTestId("w2-amend-constraint"), {
      target: { value: "BORNER LE SLICE" },
    });
    fireEvent.click(screen.getByTestId("w2-amend-contract"));
    expect(await screen.findByTestId("w2-amendment-status")).toHaveTextContent(
      "RÉINSPECTION DÉJÀ SATISFAITE",
    );
    expect(screen.getByTestId("w2-amendment-status")).not.toHaveTextContent(
      "RÉINSPECTION REQUISE",
    );
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      "INSPECTÉ",
    );

    authorizeMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui",
      contractVersion: 1,
      outcome: "BLOCKED",
      outcomeLabel: "BLOQUÉ — ACTION REQUISE",
      reasonCode: "inspection_required",
      reasonText: "Le contrat n'a pas été inspecté.",
      nextAction: "Inspecter le contrat avant toute autorisation.",
      inspection: {
        executionContractId: "xct:w2-ui",
        contractVersion: 1,
        semanticFingerprint: "abc",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      confirmation: {
        required: true,
        satisfied: false,
        confirmationRef: null,
        statusLabel: "CONFIRMATION REQUISE — MANQUANTE",
        fabricated: false,
      },
      agentCapability: {
        sufficient: false,
        evaluatedAgentRefs: [],
        sufficientAgentRef: null,
        reason: "no_agent_registered",
        statusLabel: "EXÉCUTEUR INSUFFISANT — BLOQUÉ",
      },
      authorityReceiptRef: "avr:test",
      decisionRefs: ["dec:w2-ui"],
      requiredAuthority: "MORRIS",
      verifiedAuthorityLevel: null,
      executionPerformed: false,
      attemptCreated: false,
    });

    fireEvent.click(screen.getByTestId("w2-authorize-contract"));
    expect(await screen.findByTestId("w2-authorization")).toBeVisible();
    expect(screen.getByTestId("w2-authorization-outcome")).toHaveTextContent(
      "Exécution bloquée",
    );
    expect(screen.getByTestId("w2-stop-before-execute")).toHaveTextContent(
      "arrêt avant exécution",
    );
    expect(screen.getByTestId("w2-confirmation-state")).toHaveTextContent(
      "CONFIRMATION REQUISE — MANQUANTE",
    );
    // W3-A: BLOCKED must not expose Execute CTA.
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });
});

describe("D-GF-START-01 TrajectorySurface prepare/start CTAs", () => {
  it("shows Préparer le cycle after greenfield decided with no prepared cycle", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui",
        targetCycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
      },
      activeCycleInstanceId: null,
    });
    readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });

    render(<TrajectorySurface projectId="prj:gf-prep" />);
    expect(await screen.findByTestId("pre-cycle-decided-trajectory")).toBeVisible();
    expect(screen.getByTestId("pre-cycle-prepare-cycle")).toHaveTextContent(
      "Préparer le cycle",
    );
    expect(screen.queryByTestId("pre-cycle-start-cycle")).toBeNull();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
  });

  it("hides Préparer le cycle when prepareBlockedReason is set", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui-blocked",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui-blocked",
        targetCycleTypeId: "cyc:functional-design",
        catalogLabel: "Conception fonctionnelle",
        completedMatchingCycle: true,
        prepareBlockedReason: "cycle_type_already_completed",
      },
      activeCycleInstanceId: null,
    });
    readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });

    render(<TrajectorySurface projectId="prj:gf-prep-blocked" />);
    expect(await screen.findByTestId("pre-cycle-decided-trajectory")).toBeVisible();
    expect(screen.getByTestId("pre-cycle-prepare-blocked")).toBeVisible();
    expect(screen.queryByTestId("pre-cycle-prepare-cycle")).toBeNull();
    expect(screen.queryByTestId("pre-cycle-start-cycle")).toBeNull();
  });

  it("shows profile + Démarrer le cadrage when prepared; clears CTAs after active", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui",
        targetCycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
      },
      activeCycleInstanceId: null,
    });
    readPreparedCycleMock.mockResolvedValue({
      ok: true,
      prepared: {
        cycleInstanceId: "cyc:trj-prepared",
        cycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
        profile: "Light",
        status: "acknowledged",
        trajectoryId: "trj:gf-ui",
        trajectoryVersion: 1,
        trajectoryStepId: "stp:1",
        ckcResolutionRef: "ckc:m2-x",
        qualificationSignals: null,
        isActive: false,
      },
    });

    render(<TrajectorySurface projectId="prj:gf-start" />);
    expect(await screen.findByTestId("pre-cycle-prepared-cycle")).toHaveTextContent(
      "profil Light",
    );
    expect(screen.getByTestId("pre-cycle-start-cycle")).toHaveTextContent(
      "Démarrer le cadrage",
    );
    expect(screen.queryByTestId("pre-cycle-prepare-cycle")).toBeNull();

    startPreparedCycleMock.mockResolvedValue({
      ok: true,
      cycleInstanceId: "cyc:trj-prepared",
      catalogLabel: "Cadrage",
      activeCycleInstanceId: "cyc:trj-prepared",
    });
    fireEvent.click(screen.getByTestId("pre-cycle-start-cycle"));

    await waitFor(() => {
      expect(startPreparedCycleMock).toHaveBeenCalled();
    });

    // After START refresh: active cycle → no prepare/start CTAs
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: "cyc:trj-prepared",
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui",
        targetCycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
      },
      activeCycleInstanceId: "cyc:trj-prepared",
    });
    readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });

    // Re-render via durableRefreshSignal path: remount
    cleanup();
    render(<TrajectorySurface projectId="prj:gf-start" />);
    await waitFor(() => {
      expect(screen.queryByTestId("pre-cycle-prepare-cycle")).toBeNull();
      expect(screen.queryByTestId("pre-cycle-start-cycle")).toBeNull();
    });
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
  });
});

describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
  it("U01 — multiple pending: ambiguous title, no CTAs, no first-id arbitration", async () => {
    const reformulate = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Plusieurs demandes sont en attente. Studio ne peut pas déterminer laquelle remplacer sans votre choix. Aucune action ne sera exécutée.",
      proposalIds: ["prop:a", "prop:b"],
      recoverableProposalIds: [],
    });

    render(
      <TrajectorySurface
        projectId="prj:ambig"
        onRequestReformulateWithNora={reformulate}
      />,
    );

    expect(await screen.findByTestId("w2-pending-reinstruction")).toBeVisible();
    expect(screen.getByTestId("w2-pending-reinstruction")).toHaveTextContent(
      "Plusieurs demandes sont en attente",
    );
    expect(screen.getByTestId("w2-technical-details")).toHaveTextContent(
      "prop:a",
    );
    expect(screen.getByTestId("w2-technical-details")).toHaveTextContent(
      "prop:b",
    );
    expect(screen.queryByTestId("w2-reformulate-with-nora")).toBeNull();
    expect(screen.queryByTestId("w2-instruct-recoverable-options")).toBeNull();
    // JOURNEY-INTEGRITY — pending owns next action; hide generic instruct CTA
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(reformulate).not.toHaveBeenCalled();
  });

  it("U02 — single recoverable: Proposition à instruire + instruct CTA", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Une proposition attend encore votre instruction. Examinez ses options pour continuer.",
      proposalIds: ["prop:solo"],
      recoverableProposalIds: ["prop:solo"],
    });

    render(<TrajectorySurface projectId="prj:recoverable" />);

    expect(await screen.findByTestId("w2-pending-reinstruction")).toHaveTextContent(
      "Proposition à instruire",
    );
    expect(screen.getByTestId("w2-instruct-recoverable-options")).toBeVisible();
    expect(screen.queryByTestId("w2-reformulate-with-nora")).toBeNull();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    const body = screen.getByTestId("w2-pending-reinstruction-body").textContent ?? "";
    expect(body).not.toMatch(/fallback|process-local|ProjectTrajectory/i);
  });

  it("U03 — single non-recoverable: Reformulez + sole ID callback", async () => {
    const reformulate = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
      proposalIds: ["prop:lost-only"],
      recoverableProposalIds: [],
    });

    render(
      <TrajectorySurface
        projectId="prj:lost"
        onRequestReformulateWithNora={reformulate}
      />,
    );

    expect(await screen.findByTestId("w2-pending-reinstruction")).toHaveTextContent(
      "Reformulez votre demande",
    );
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    fireEvent.click(screen.getByTestId("w2-reformulate-with-nora"));
    expect(reformulate).toHaveBeenCalledTimes(1);
    expect(reformulate).toHaveBeenCalledWith("prop:lost-only");
  });

  it("U04 — primary pending copy excludes engine jargon", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
      proposalIds: ["prop:x"],
      recoverableProposalIds: [],
    });

    render(<TrajectorySurface projectId="prj:jargon" />);
    const body = (await screen.findByTestId("w2-pending-reinstruction-body"))
      .textContent ?? "";
    expect(body).not.toMatch(/fallback/i);
    expect(body).not.toMatch(/process-local/i);
    expect(body).not.toMatch(/ProjectTrajectory/i);
    expect(body).not.toMatch(/\bpending\b/i);
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
  });

  it("JOURNEY-INTEGRITY — pending_reinstruction hides generic w2-propose-options", async () => {
    // Active cycle is present (beforeEach mocks), yet pending must win CTA exclusivity.
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
      proposalIds: ["prop:pending-owns"],
      recoverableProposalIds: [],
    });

    render(<TrajectorySurface projectId="prj:pending-cta" />);
    expect(await screen.findByTestId("w2-pending-reinstruction")).toBeVisible();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(proposeMock).not.toHaveBeenCalled();
  });

  it("JOURNEY-INTEGRITY — ownership callback: CASE A unrecoverable → OWNED", async () => {
    const onOwnership = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
      proposalIds: ["prop:case-a"],
      recoverableProposalIds: [],
    });

    render(
      <TrajectorySurface
        projectId="prj:own-a"
        onProposalSubjectOwnershipChange={onOwnership}
        onRequestReformulateWithNora={vi.fn()}
      />,
    );
    expect(await screen.findByTestId("w2-reformulate-with-nora")).toBeVisible();
    await waitFor(() => {
      expect(onOwnership).toHaveBeenCalledWith("OWNED");
    });
    expect(onOwnership).toHaveBeenCalledWith("UNKNOWN");
  });

  it("JOURNEY-INTEGRITY — ownership callback: kind none → NONE", async () => {
    const onOwnership = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    render(
      <TrajectorySurface
        projectId="prj:own-none"
        onProposalSubjectOwnershipChange={onOwnership}
      />,
    );
    await waitFor(() => {
      expect(onOwnership).toHaveBeenCalledWith("NONE");
    });
  });

  it("JOURNEY-INTEGRITY — ownership callback: read error → UNKNOWN fail-closed", async () => {
    const onOwnership = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "READ_FAILED",
      message: "Decision Subject illisible",
    });

    render(
      <TrajectorySurface
        projectId="prj:own-err"
        onProposalSubjectOwnershipChange={onOwnership}
      />,
    );
    await waitFor(() => {
      expect(onOwnership).toHaveBeenCalledWith("UNKNOWN");
    });
    expect(onOwnership).not.toHaveBeenCalledWith("NONE");
  });
});

describe("JOURNEY-INTEGRITY — CTA exclusivity on the mutating primary action", () => {
  const PROPOSAL_OPTION_SET = {
    ok: true,
    optionSetRef: "optset:cta-exclusivity",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    decisionSubjectMode: "proposal",
    proposalId: "prop:f2:cta",
    promotesProjectTrajectory: false,
    options: [
      {
        kind: "OPTION",
        optionRef: "opt:proposal-subject:pursue",
        label: "Poursuivre le sujet proposé",
        intent: "Continuer",
        impacts: [],
        reservations: [],
        steps: [],
      },
      {
        kind: "OPTION",
        optionRef: "opt:proposal-subject:amend",
        label: "Amender le sujet avant d'engager",
        intent: "Modifier",
        impacts: [],
        reservations: [],
        steps: [],
      },
    ],
    recommendation: {
      label: "RECOMMANDATION — PAS UNE DÉCISION",
      recommendedOptionRef: "opt:proposal-subject:pursue",
      rationale: "Continuer.",
      isHumanDecision: false,
      ckcAttribution: false,
    },
    epistemicRefs: [],
    proposedTrajectory: null,
    phase: "OPTIONS_PROPOSED",
    autoDecisionPerformed: false,
    executionPerformed: false,
    ckcCognitionCompletedBeforeMutation: true,
  } as const;

  it("an OptionSet awaiting the decision hides the generic instruct CTA", async () => {
    proposeMock.mockResolvedValue(PROPOSAL_OPTION_SET);

    render(<TrajectorySurface projectId="prj:cta-optionset" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");

    // The presented subject owns the next action until the Pilote decides.
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    const surface = screen.getByTestId("w2-trajectory-panel").textContent ?? "";
    expect(surface).not.toMatch(/Réinstruire/i);
    expect(proposeMock).toHaveBeenCalledTimes(1);
  });

  it("no decision subject at all: the generic instruct CTA stays reachable", async () => {
    render(<TrajectorySurface projectId="prj:cta-none" />);

    const cta = await screen.findByTestId("w2-propose-options");
    expect(cta).toBeVisible();
    expect(cta).toHaveTextContent("Instruire les options");
    expect(screen.queryByTestId("w2-pending-reinstruction")).toBeNull();
    expect(screen.queryByTestId("w2-options")).toBeNull();
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    expect(screen.queryByTestId("w2-contract")).toBeNull();
  });
});

/**
 * JOURNEY-INTEGRITY Lot A-B final — the Pilot decides the operation ONCE.
 *
 * After pursue on a Proposal decision subject the sealed DecisionBasis already
 * carries targetPath / requestedOperation, so the surface must:
 *  - offer the Proposal-backed PREPARE (never the sandbox op selector), and
 *  - send projectId + decisionId ONLY — the server re-resolves the rest from
 *    durable lineage (same contract as AP23 in
 *    __tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts).
 */
describe("JOURNEY-INTEGRITY — Proposal-backed PREPARE (sealed operation)", () => {
  function proposalOptionSet(proposalId: string) {
    return {
      ok: true,
      optionSetRef: `optset:${proposalId}`,
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      decisionSubjectMode: "proposal",
      proposalId,
      promotesProjectTrajectory: false,
      options: [
        {
          kind: "OPTION",
          optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
          label: "Poursuivre le sujet proposé",
          intent: "Continuer",
          impacts: [],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: PROPOSAL_SUBJECT_REFUSE_REF,
          label: "Ne pas poursuivre / refuser",
          intent: "Refuser",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
        rationale: "Continuer.",
        isHumanDecision: false,
        ckcAttribution: false,
      },
      epistemicRefs: [],
      proposedTrajectory: null,
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    };
  }

  function proposalDecision(input: {
    decisionId: string;
    proposalId: string;
    selectedOptionRef: string;
  }) {
    return {
      ok: true,
      decision: {
        decisionId: input.decisionId,
        selectedOptionRef: input.selectedOptionRef,
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-15T16:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: input.proposalId,
      },
      trajectory: null,
      livingProjectStateVersion: 4,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    };
  }

  const M3_PREPARED = {
    ok: true,
    status: "ok",
    mode: "m3_prepare",
    presentation: "unconfirmed",
    text: "Contrat préparé.",
    ephemeralNotice: "",
    f3: {
      turnKind: "f3_m3_prepare",
      mode: "M3_PREPARE",
      decisionId: "dec:sealed-pursue",
      projectId: "prj:sealed",
      contract: {
        executionContractId: "xct:sealed-docs-write",
        version: 1,
        status: "confirmation_required",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "product:artifact-materialization",
        requiredAuthority: "N3",
        constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
        stopConditions: ["STOP AVANT EXECUTE"],
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibility: "reversible",
        semanticFingerprint: "sealed0fingerprint",
        inspectionDisclosure: {
          action: "cursor.docs_write.apply",
          technicalTarget: "workspace.isolated.docs_write",
          scope: "product:artifact-materialization",
          targetRepositoryRef: "mcleland147/sfia-workspace",
          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
          scopeIn: ["projects/sfia-studio/.sandbox/"],
          scopeOut: ["projects/sfia-studio/app/"],
          createOrModify: true,
          noDelete: true,
          objective: "Matérialiser la note",
          artifactType: "markdown",
          artifactBrief: null,
          contentRequirements: null,
          validationExpectations: null,
          expectedOutputs: ["note markdown"],
          evidenceRequirements: ["evreq:git-working-tree"],
          requiredAuthority: "N3",
          requiredCapabilities: ["cap:cursor.docs_write"],
          constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
          stopConditions: ["STOP AVANT EXECUTE"],
          reversibility: "reversible",
          contractVersion: 1,
          executionContractId: "xct:sealed-docs-write",
          semanticFingerprint: "sealed0fingerprint",
          disclosureComplete: true,
          incompletenessCode: null,
        },
      },
      executionPerformed: false,
      attemptCreated: false,
      cursorReal: false,
      executionAllowed: false,
      disclosures: [],
    },
  };

  async function decidePursue(projectId: string, proposalId: string) {
    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
    decideMock.mockResolvedValue(
      proposalDecision({
        decisionId: "dec:sealed-pursue",
        proposalId,
        selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      }),
    );

    render(<TrajectorySurface projectId={projectId} />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
  }

  it("pursue on a sealed subject offers PREPARE without any operation re-selection", async () => {
    await decidePursue("prj:sealed", "prop:f2:sealed");

    expect(screen.getByTestId("w2-proposal-backed-prepare")).toBeVisible();
    expect(screen.getByTestId("w2-prepare-contract")).toBeVisible();
    // The Pilot must never qualify the operation twice.
    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.getByTestId("w2-decision-basis")).toHaveTextContent("Reliée");
  });

  it("PREPARE sends projectId + decisionId only, then maps the sealed contract", async () => {
    await decidePursue("prj:sealed", "prop:f2:sealed");

    prepareM3Mock.mockResolvedValue(M3_PREPARED);
    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
    expect(await screen.findByTestId("w2-contract")).toBeVisible();

    expect(prepareM3Mock).toHaveBeenCalledTimes(1);
    expect(prepareM3Mock).toHaveBeenCalledWith({
      projectId: "prj:sealed",
      decisionId: "dec:sealed-pursue",
    });
    // Exact-shape assertion above already forbids extra keys; assert the
    // dangerous ones explicitly so a regression names itself.
    const sent = prepareM3Mock.mock.calls[0]![0] as Record<string, unknown>;
    expect(Object.keys(sent).sort()).toEqual(["decisionId", "projectId"]);
    for (const forbidden of [
      "targetPath",
      "operation",
      "qualifiedOperationKind",
      "requestedOperation",
      "authority",
      "canActAsMorris",
      "claimedAuthorityLevel",
      "real",
      "mode",
      "command",
    ]) {
      expect(sent).not.toHaveProperty(forbidden);
    }
    // The sandbox PREPARE application path was never touched.
    expect(prepareContractMock).not.toHaveBeenCalled();

    expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
      "cursor.docs_write.apply",
    );
    expect(screen.getByTestId("w2-contract-target")).toHaveTextContent(
      "workspace.isolated.docs_write",
    );
    expect(screen.getByTestId("w2-contract-exact-target")).toHaveTextContent(
      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    );
    expect(screen.getByTestId("w2-contract-repository")).toHaveTextContent(
      "mcleland147/sfia-workspace",
    );
    expect(screen.getByTestId("w2-contract-authority")).toHaveTextContent("N3");
    expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
      "cap:cursor.docs_write",
    );
    expect(screen.getByTestId("w2-contract-id-tech")).toHaveTextContent(
      "xct:sealed-docs-write",
    );

    // Pre-inspection: exact path + repo visible BEFORE Inspect click.
    expect(screen.getByTestId("w2-inspect-contract")).toBeVisible();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(screen.queryByTestId("w2-inspection-state")).toBeNull();

    // Inspect owns the next action; PREPARE is not offered again.
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();

    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:sealed-docs-write",
      contractVersion: 1,
      semanticFingerprint: "sealed0fingerprint",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:sealed",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(await screen.findByTestId("w2-inspection-state")).toHaveTextContent(
      "INSPECTÉ",
    );
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      "inspecter n'autorise pas",
    );
  });

  it("refuse on a sealed subject exposes no PREPARE path at all", async () => {
    const proposalId = "prop:f2:sealed-refuse";
    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
    decideMock.mockResolvedValue(
      proposalDecision({
        decisionId: "dec:sealed-refuse",
        proposalId,
        selectedOptionRef: PROPOSAL_SUBJECT_REFUSE_REF,
      }),
    );

    render(<TrajectorySurface projectId="prj:sealed-refuse" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_REFUSE_REF}`));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();

    expect(screen.getByTestId("w2-refuse-next-action")).toBeVisible();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(prepareContractMock).not.toHaveBeenCalled();
  });

  it("a Proposal pursue without linked DecisionBasis fails closed (never sandbox)", async () => {
    const proposalId = "prop:f2:unlinked";
    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
    const unlinked = proposalDecision({
      decisionId: "dec:unlinked",
      proposalId,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    });
    decideMock.mockResolvedValue({
      ...unlinked,
      decision: { ...unlinked.decision, decisionBasisLinked: false },
    });

    render(<TrajectorySurface projectId="prj:unlinked" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();

    // Proposal subject still owns the journey — fail closed, no sandbox fallback.
    expect(screen.getByTestId("w2-proposal-prepare-blocked")).toBeVisible();
    expect(screen.getByTestId("w2-proposal-prepare-blocked").textContent).toMatch(
      /base d.exécution exploitable/i,
    );
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(prepareContractMock).not.toHaveBeenCalled();
  });

  it("EC rehydration — fresh mount projects durable EC + incomplete inspection; hides instruct", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
      contract: {
        executionContractId: "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
        version: 2,
        status: "confirmation_required",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "docs_write borné — cycle actif — aucune exécution automatique",
        requiredAuthority: "MORRIS",
        constraints: ["PREPARE_ONLY"],
        stopConditions: ["AUTHORITY_DENIED"],
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibility: "reversible",
        semanticFingerprint: "fp-campaign",
        effectConfirmationRequired: true,
        effectConfirmationLevel: null,
        inspectionDisclosure: {
          action: "cursor.docs_write.apply",
          technicalTarget: "workspace.isolated.docs_write",
          scope: "docs_write borné — cycle actif — aucune exécution automatique",
          targetRepositoryRef: "mcleland147/sfia-workspace",
          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
          scopeIn: ["projects/sfia-studio/.sandbox"],
          scopeOut: [],
          createOrModify: true,
          noDelete: true,
          objective: null,
          artifactType: null,
          artifactBrief: null,
          contentRequirements: null,
          validationExpectations: null,
          expectedOutputs: ["projects/sfia-studio/.sandbox/gestion-de-taches.md"],
          evidenceRequirements: [],
          requiredAuthority: "MORRIS",
          requiredCapabilities: ["cap:cursor.docs_write"],
          constraints: ["PREPARE_ONLY"],
          stopConditions: ["AUTHORITY_DENIED"],
          reversibility: "reversible",
          contractVersion: 2,
          executionContractId:
            "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
          semanticFingerprint: "fp-campaign",
          disclosureComplete: true,
          incompletenessCode: null,
        },
      },
      inspection: {
        executionContractId:
          "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
        contractVersion: 2,
        semanticFingerprint: "fp-campaign",
        statusLabel: "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: 2,
        staleAttestationRef: "insp:05042f3b6040838e",
        reinspectionRequired: true,
        reason: "inspected_facts_incomplete",
        grantsAuthority: false,
      },
    });

    render(<TrajectorySurface projectId="prj:ae9bd0de-e24d-474f-880d-ff5ea56dbaf6" />);

    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-contract-action").textContent).toBe(
      "cursor.docs_write.apply",
    );
    expect(screen.getByTestId("w2-contract-target").textContent).toBe(
      "workspace.isolated.docs_write",
    );
    expect(screen.getByTestId("w2-contract-exact-target").textContent).toBe(
      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    );
    expect(screen.getByTestId("w2-contract-repository").textContent).toBe(
      "mcleland147/sfia-workspace",
    );
    expect(screen.getByTestId("w2-contract-status").textContent).toMatch(
      /Confirmation requise/i,
    );
    expect(screen.getByTestId("w2-inspection-state").textContent).toMatch(
      /RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS/,
    );
    expect(screen.getByTestId("w2-inspect-contract")).toBeVisible();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
    expect(inspectMock).not.toHaveBeenCalled();
  });

  it("EC rehydration — pending continuity hides generic Instruire les options", async () => {
    let resolveContinuity: (value: unknown) => void = () => {};
    readGovernedExecutionContinuityMock.mockReturnValue(
      new Promise((resolve) => {
        resolveContinuity = resolve;
      }),
    );

    render(<TrajectorySurface projectId="prj:pending-continuity" />);
    await waitFor(() => {
      expect(readActiveDecisionSubjectMock).toHaveBeenCalled();
    });
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();

    resolveContinuity({ ok: true, kind: "none" });
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
  });

  it("EC rehydration — continuity error/ambiguity hides instruct and shows fail-closed", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: false,
      code: "EXECUTION_CONTINUITY_AMBIGUOUS",
      message:
        "Plusieurs contrats d'exécution courants non terminés — continuation refusée.",
    });

    render(<TrajectorySurface projectId="prj:ambiguous-continuity" />);
    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(/Plusieurs contrats/);
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-contract")).toBeNull();
  });

  it("EC rehydration — kind none + subject none still shows Instruire after both resolve", async () => {
    render(<TrajectorySurface projectId="prj:none-none" />);
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
  });

  it("EC rehydration — bound subject + active EC conflict fails closed", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: {
        optionSetRef: "optset:conflict",
        cycleTypeId: "cyc:framing",
        recommendedProfile: "Light",
        decisionSubjectMode: "proposal",
        proposalId: "prop:f2:conflict",
        promotesProjectTrajectory: false,
        options: [
          {
            kind: "OPTION",
            optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
            label: "Poursuivre",
            intent: "Poursuivre le sujet",
            impacts: ["HumanDecision"],
            recommended: true,
          },
        ],
        recommendation: {
          kind: "RECOMMENDATION",
          recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
          rationale: "test",
        },
        epistemicRefs: [],
        proposedTrajectory: null,
        phase: "OPTIONS_PROPOSED",
        autoDecisionPerformed: false,
        executionPerformed: false,
        ckcCognitionCompletedBeforeMutation: true,
      },
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:conflict",
      contract: {
        executionContractId: "xct:conflict",
        version: 1,
        status: "confirmation_required",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "s",
        requiredAuthority: "MORRIS",
        constraints: [],
        stopConditions: [],
        requiredCapabilities: [],
        reversibility: "reversible",
        semanticFingerprint: "fp",
        inspectionDisclosure: {
          action: "cursor.docs_write.apply",
          technicalTarget: "workspace.isolated.docs_write",
          scope: "s",
          targetRepositoryRef: "mcleland147/sfia-workspace",
          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
          scopeIn: null,
          scopeOut: null,
          createOrModify: null,
          noDelete: null,
          objective: null,
          artifactType: null,
          artifactBrief: null,
          contentRequirements: null,
          validationExpectations: null,
          expectedOutputs: null,
          evidenceRequirements: [],
          requiredAuthority: "MORRIS",
          requiredCapabilities: [],
          constraints: [],
          stopConditions: [],
          reversibility: "reversible",
          contractVersion: 1,
          executionContractId: "xct:conflict",
          semanticFingerprint: "fp",
          disclosureComplete: true,
          incompletenessCode: null,
        },
      },
      inspection: {
        executionContractId: "xct:conflict",
        contractVersion: 1,
        semanticFingerprint: "fp",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
    });

    render(<TrajectorySurface projectId="prj:conflict" />);
    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(/Contradiction/);
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
  });

  it("EC rehydration micro — subject ERROR does not invoke governed continuity or expose EC actions", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });
    readGovernedExecutionContinuityMock.mockResolvedValue(
      campaignActiveContinuityResult(),
    );

    render(<TrajectorySurface projectId="prj:subject-error-blocks-ec" />);

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /sujet de décision impossible/,
    );
    expect(readGovernedExecutionContinuityMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(screen.queryByTestId("w2-confirm-contract")).toBeNull();
    expect(screen.queryByTestId("w2-authorize-contract")).toBeNull();
    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
    expect(inspectMock).not.toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();
  });

  it("EC rehydration micro — refresh subject pending disables governed EC mutating actions", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue(
      campaignActiveContinuityResult(),
    );

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:subject-pending-blocks-ec"
        durableRefreshSignal={0}
      />,
    );

    expect(await screen.findByTestId("w2-inspect-contract")).toBeEnabled();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(screen.getByTestId("w2-authorize-contract")).toBeEnabled();

    let resolveSubject: (value: unknown) => void = () => {};
    readActiveDecisionSubjectMock.mockReturnValue(
      new Promise((resolve) => {
        resolveSubject = resolve;
      }),
    );

    rerender(
      <TrajectorySurface
        projectId="prj:subject-pending-blocks-ec"
        durableRefreshSignal={1}
      />,
    );

    await waitFor(() => {
      expect(readActiveDecisionSubjectMock.mock.calls.length).toBeGreaterThan(1);
    });

    expect(screen.getByTestId("w2-inspect-contract")).toBeDisabled();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(screen.getByTestId("w2-authorize-contract")).toBeDisabled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    fireEvent.click(screen.getByTestId("w2-authorize-contract"));
    expect(inspectMock).not.toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();

    resolveSubject({ ok: true, kind: "none" });
  });

  it("EC rehydration micro — active then authoritative none clears stale EC card", async () => {
    readGovernedExecutionContinuityMock
      .mockResolvedValueOnce(campaignActiveContinuityResult())
      .mockResolvedValue({ ok: true, kind: "none" });

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:active-then-none"
        durableRefreshSignal={0}
      />,
    );

    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-contract-exact-target").textContent).toBe(
      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    );
    expect(screen.getByTestId("w2-inspection-state").textContent).toMatch(
      /RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS/,
    );

    rerender(
      <TrajectorySurface
        projectId="prj:active-then-none"
        durableRefreshSignal={1}
      />,
    );

    await waitFor(() => {
      expect(screen.queryByTestId("w2-contract")).toBeNull();
    });
    expect(screen.queryByTestId("w2-contract-exact-target")).toBeNull();
    expect(screen.queryByTestId("w2-inspection-state")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(screen.queryByTestId("w2-confirm-contract")).toBeNull();
    expect(screen.queryByTestId("w2-authorize-contract")).toBeNull();
    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
    expect(inspectMock).not.toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
  });
});

function campaignActiveContinuityResult() {
  return {
    ok: true as const,
    kind: "active" as const,
    decisionRef: "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
    contract: {
      executionContractId:
        "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
      version: 2,
      status: "confirmation_required",
      action: "cursor.docs_write.apply",
      target: "workspace.isolated.docs_write",
      scope: "docs_write borné — cycle actif — aucune exécution automatique",
      requiredAuthority: "MORRIS",
      constraints: ["PREPARE_ONLY"],
      stopConditions: ["AUTHORITY_DENIED"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      reversibility: "reversible",
      semanticFingerprint: "fp-campaign",
      effectConfirmationRequired: true,
      effectConfirmationLevel: null,
      inspectionDisclosure: {
        action: "cursor.docs_write.apply",
        technicalTarget: "workspace.isolated.docs_write",
        scope: "docs_write borné — cycle actif — aucune exécution automatique",
        targetRepositoryRef: "mcleland147/sfia-workspace",
        targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
        scopeIn: ["projects/sfia-studio/.sandbox"],
        scopeOut: [],
        createOrModify: true,
        noDelete: true,
        objective: null,
        artifactType: null,
        artifactBrief: null,
        contentRequirements: null,
        validationExpectations: null,
        expectedOutputs: [
          "projects/sfia-studio/.sandbox/gestion-de-taches.md",
        ],
        evidenceRequirements: [],
        requiredAuthority: "MORRIS",
        requiredCapabilities: ["cap:cursor.docs_write"],
        constraints: ["PREPARE_ONLY"],
        stopConditions: ["AUTHORITY_DENIED"],
        reversibility: "reversible",
        contractVersion: 2,
        executionContractId:
          "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
        semanticFingerprint: "fp-campaign",
        disclosureComplete: true,
        incompletenessCode: null,
      },
    },
    inspection: {
      executionContractId:
        "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
      contractVersion: 2,
      semanticFingerprint: "fp-campaign",
      statusLabel: "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS",
      inspectionSufficient: false,
      attestationRef: null,
      attestedVersion: 2,
      staleAttestationRef: "insp:05042f3b6040838e",
      reinspectionRequired: true,
      reason: "inspected_facts_incomplete",
      grantsAuthority: false,
    },
  };
}

```

---

## FULL candidate unified diff vs origin/main (all 9 paths, including new files)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
index 596106c0..d6eebb67 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
@@ -38,6 +38,10 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2RehydrateProductOutcomeAction: vi.fn(),
   w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
     readActiveDecisionSubjectMock(...args),
+  w2ReadCurrentGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
+    ok: true,
+    kind: "none",
+  }),
   w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
     ok: false,
     code: "UNUSED",
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
index 3ccc476c..49d22f19 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
@@ -71,6 +71,10 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2GovernedExecuteCompleteAction: vi.fn(),
   w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
     readActiveDecisionSubjectMock(...args),
+  w2ReadCurrentGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
+    ok: true,
+    kind: "none",
+  }),
   w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
     ok: false,
     code: "UNUSED",
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 9f3673ff..f8bb2d15 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -19,6 +19,7 @@ const {
   executeStartMock,
   executeCompleteMock,
   readActiveDecisionSubjectMock,
+  readGovernedExecutionContinuityMock,
   readPreCycleMock,
   readApprovalMock,
   prepareCycleMock,
@@ -36,6 +37,7 @@ const {
   executeStartMock: vi.fn(),
   executeCompleteMock: vi.fn(),
   readActiveDecisionSubjectMock: vi.fn(),
+  readGovernedExecutionContinuityMock: vi.fn(),
   readPreCycleMock: vi.fn(),
   readApprovalMock: vi.fn(),
   prepareCycleMock: vi.fn(),
@@ -71,6 +73,8 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
     executeCompleteMock(...args),
   w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
     readActiveDecisionSubjectMock(...args),
+  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
+    readGovernedExecutionContinuityMock(...args),
   w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
     ok: false,
     code: "UNUSED",
@@ -110,6 +114,7 @@ beforeEach(() => {
   executeStartMock.mockReset();
   executeCompleteMock.mockReset();
   readActiveDecisionSubjectMock.mockReset();
+  readGovernedExecutionContinuityMock.mockReset();
   readPreCycleMock.mockReset();
   readApprovalMock.mockReset();
   prepareCycleMock.mockReset();
@@ -119,6 +124,10 @@ beforeEach(() => {
     ok: true,
     kind: "none",
   });
+  readGovernedExecutionContinuityMock.mockResolvedValue({
+    ok: true,
+    kind: "none",
+  });
   readPreCycleMock.mockResolvedValue({
     ok: true,
     candidate: null,
@@ -1455,4 +1464,424 @@ describe("JOURNEY-INTEGRITY — Proposal-backed PREPARE (sealed operation)", ()
     expect(prepareM3Mock).not.toHaveBeenCalled();
     expect(prepareContractMock).not.toHaveBeenCalled();
   });
+
+  it("EC rehydration — fresh mount projects durable EC + incomplete inspection; hides instruct", async () => {
+    readGovernedExecutionContinuityMock.mockResolvedValue({
+      ok: true,
+      kind: "active",
+      decisionRef: "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+      contract: {
+        executionContractId: "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+        version: 2,
+        status: "confirmation_required",
+        action: "cursor.docs_write.apply",
+        target: "workspace.isolated.docs_write",
+        scope: "docs_write borné — cycle actif — aucune exécution automatique",
+        requiredAuthority: "MORRIS",
+        constraints: ["PREPARE_ONLY"],
+        stopConditions: ["AUTHORITY_DENIED"],
+        requiredCapabilities: ["cap:cursor.docs_write"],
+        reversibility: "reversible",
+        semanticFingerprint: "fp-campaign",
+        effectConfirmationRequired: true,
+        effectConfirmationLevel: null,
+        inspectionDisclosure: {
+          action: "cursor.docs_write.apply",
+          technicalTarget: "workspace.isolated.docs_write",
+          scope: "docs_write borné — cycle actif — aucune exécution automatique",
+          targetRepositoryRef: "mcleland147/sfia-workspace",
+          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+          scopeIn: ["projects/sfia-studio/.sandbox"],
+          scopeOut: [],
+          createOrModify: true,
+          noDelete: true,
+          objective: null,
+          artifactType: null,
+          artifactBrief: null,
+          contentRequirements: null,
+          validationExpectations: null,
+          expectedOutputs: ["projects/sfia-studio/.sandbox/gestion-de-taches.md"],
+          evidenceRequirements: [],
+          requiredAuthority: "MORRIS",
+          requiredCapabilities: ["cap:cursor.docs_write"],
+          constraints: ["PREPARE_ONLY"],
+          stopConditions: ["AUTHORITY_DENIED"],
+          reversibility: "reversible",
+          contractVersion: 2,
+          executionContractId:
+            "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+          semanticFingerprint: "fp-campaign",
+          disclosureComplete: true,
+          incompletenessCode: null,
+        },
+      },
+      inspection: {
+        executionContractId:
+          "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+        contractVersion: 2,
+        semanticFingerprint: "fp-campaign",
+        statusLabel: "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS",
+        inspectionSufficient: false,
+        attestationRef: null,
+        attestedVersion: 2,
+        staleAttestationRef: "insp:05042f3b6040838e",
+        reinspectionRequired: true,
+        reason: "inspected_facts_incomplete",
+        grantsAuthority: false,
+      },
+    });
+
+    render(<TrajectorySurface projectId="prj:ae9bd0de-e24d-474f-880d-ff5ea56dbaf6" />);
+
+    expect(await screen.findByTestId("w2-contract")).toBeVisible();
+    expect(screen.getByTestId("w2-contract-action").textContent).toBe(
+      "cursor.docs_write.apply",
+    );
+    expect(screen.getByTestId("w2-contract-target").textContent).toBe(
+      "workspace.isolated.docs_write",
+    );
+    expect(screen.getByTestId("w2-contract-exact-target").textContent).toBe(
+      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+    );
+    expect(screen.getByTestId("w2-contract-repository").textContent).toBe(
+      "mcleland147/sfia-workspace",
+    );
+    expect(screen.getByTestId("w2-contract-status").textContent).toMatch(
+      /Confirmation requise/i,
+    );
+    expect(screen.getByTestId("w2-inspection-state").textContent).toMatch(
+      /RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS/,
+    );
+    expect(screen.getByTestId("w2-inspect-contract")).toBeVisible();
+    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
+    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
+    expect(inspectMock).not.toHaveBeenCalled();
+  });
+
+  it("EC rehydration — pending continuity hides generic Instruire les options", async () => {
+    let resolveContinuity: (value: unknown) => void = () => {};
+    readGovernedExecutionContinuityMock.mockReturnValue(
+      new Promise((resolve) => {
+        resolveContinuity = resolve;
+      }),
+    );
+
+    render(<TrajectorySurface projectId="prj:pending-continuity" />);
+    await waitFor(() => {
+      expect(readActiveDecisionSubjectMock).toHaveBeenCalled();
+    });
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+
+    resolveContinuity({ ok: true, kind: "none" });
+    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
+  });
+
+  it("EC rehydration — continuity error/ambiguity hides instruct and shows fail-closed", async () => {
+    readGovernedExecutionContinuityMock.mockResolvedValue({
+      ok: false,
+      code: "EXECUTION_CONTINUITY_AMBIGUOUS",
+      message:
+        "Plusieurs contrats d'exécution courants non terminés — continuation refusée.",
+    });
+
+    render(<TrajectorySurface projectId="prj:ambiguous-continuity" />);
+    expect(await screen.findByTestId("w2-error")).toBeVisible();
+    expect(screen.getByTestId("w2-error").textContent).toMatch(/Plusieurs contrats/);
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(screen.queryByTestId("w2-contract")).toBeNull();
+  });
+
+  it("EC rehydration — kind none + subject none still shows Instruire after both resolve", async () => {
+    render(<TrajectorySurface projectId="prj:none-none" />);
+    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
+  });
+
+  it("EC rehydration — bound subject + active EC conflict fails closed", async () => {
+    readActiveDecisionSubjectMock.mockResolvedValue({
+      ok: true,
+      kind: "bound_awaiting_decision",
+      optionSet: {
+        optionSetRef: "optset:conflict",
+        cycleTypeId: "cyc:framing",
+        recommendedProfile: "Light",
+        decisionSubjectMode: "proposal",
+        proposalId: "prop:f2:conflict",
+        promotesProjectTrajectory: false,
+        options: [
+          {
+            kind: "OPTION",
+            optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+            label: "Poursuivre",
+            intent: "Poursuivre le sujet",
+            impacts: ["HumanDecision"],
+            recommended: true,
+          },
+        ],
+        recommendation: {
+          kind: "RECOMMENDATION",
+          recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+          rationale: "test",
+        },
+        epistemicRefs: [],
+        proposedTrajectory: null,
+        phase: "OPTIONS_PROPOSED",
+        autoDecisionPerformed: false,
+        executionPerformed: false,
+        ckcCognitionCompletedBeforeMutation: true,
+      },
+    });
+    readGovernedExecutionContinuityMock.mockResolvedValue({
+      ok: true,
+      kind: "active",
+      decisionRef: "dec:conflict",
+      contract: {
+        executionContractId: "xct:conflict",
+        version: 1,
+        status: "confirmation_required",
+        action: "cursor.docs_write.apply",
+        target: "workspace.isolated.docs_write",
+        scope: "s",
+        requiredAuthority: "MORRIS",
+        constraints: [],
+        stopConditions: [],
+        requiredCapabilities: [],
+        reversibility: "reversible",
+        semanticFingerprint: "fp",
+        inspectionDisclosure: {
+          action: "cursor.docs_write.apply",
+          technicalTarget: "workspace.isolated.docs_write",
+          scope: "s",
+          targetRepositoryRef: "mcleland147/sfia-workspace",
+          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+          scopeIn: null,
+          scopeOut: null,
+          createOrModify: null,
+          noDelete: null,
+          objective: null,
+          artifactType: null,
+          artifactBrief: null,
+          contentRequirements: null,
+          validationExpectations: null,
+          expectedOutputs: null,
+          evidenceRequirements: [],
+          requiredAuthority: "MORRIS",
+          requiredCapabilities: [],
+          constraints: [],
+          stopConditions: [],
+          reversibility: "reversible",
+          contractVersion: 1,
+          executionContractId: "xct:conflict",
+          semanticFingerprint: "fp",
+          disclosureComplete: true,
+          incompletenessCode: null,
+        },
+      },
+      inspection: {
+        executionContractId: "xct:conflict",
+        contractVersion: 1,
+        semanticFingerprint: "fp",
+        statusLabel: "NON INSPECTÉ",
+        inspectionSufficient: false,
+        attestationRef: null,
+        attestedVersion: null,
+        staleAttestationRef: null,
+        reinspectionRequired: false,
+        reason: "no_attestation",
+        grantsAuthority: false,
+      },
+    });
+
+    render(<TrajectorySurface projectId="prj:conflict" />);
+    expect(await screen.findByTestId("w2-error")).toBeVisible();
+    expect(screen.getByTestId("w2-error").textContent).toMatch(/Contradiction/);
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
+  });
+
+  it("EC rehydration micro — subject ERROR does not invoke governed continuity or expose EC actions", async () => {
+    readActiveDecisionSubjectMock.mockResolvedValue({
+      ok: false,
+      code: "SUBJECT_READ_FAILED",
+      message: "Lecture du sujet de décision impossible.",
+    });
+    readGovernedExecutionContinuityMock.mockResolvedValue(
+      campaignActiveContinuityResult(),
+    );
+
+    render(<TrajectorySurface projectId="prj:subject-error-blocks-ec" />);
+
+    expect(await screen.findByTestId("w2-error")).toBeVisible();
+    expect(screen.getByTestId("w2-error").textContent).toMatch(
+      /sujet de décision impossible/,
+    );
+    expect(readGovernedExecutionContinuityMock).not.toHaveBeenCalled();
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-confirm-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-authorize-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
+    expect(inspectMock).not.toHaveBeenCalled();
+    expect(authorizeMock).not.toHaveBeenCalled();
+  });
+
+  it("EC rehydration micro — refresh subject pending disables governed EC mutating actions", async () => {
+    readGovernedExecutionContinuityMock.mockResolvedValue(
+      campaignActiveContinuityResult(),
+    );
+
+    const { rerender } = render(
+      <TrajectorySurface
+        projectId="prj:subject-pending-blocks-ec"
+        durableRefreshSignal={0}
+      />,
+    );
+
+    expect(await screen.findByTestId("w2-inspect-contract")).toBeEnabled();
+    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
+    expect(screen.getByTestId("w2-authorize-contract")).toBeEnabled();
+
+    let resolveSubject: (value: unknown) => void = () => {};
+    readActiveDecisionSubjectMock.mockReturnValue(
+      new Promise((resolve) => {
+        resolveSubject = resolve;
+      }),
+    );
+
+    rerender(
+      <TrajectorySurface
+        projectId="prj:subject-pending-blocks-ec"
+        durableRefreshSignal={1}
+      />,
+    );
+
+    await waitFor(() => {
+      expect(readActiveDecisionSubjectMock.mock.calls.length).toBeGreaterThan(1);
+    });
+
+    expect(screen.getByTestId("w2-inspect-contract")).toBeDisabled();
+    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
+    expect(screen.getByTestId("w2-authorize-contract")).toBeDisabled();
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
+    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
+    fireEvent.click(screen.getByTestId("w2-authorize-contract"));
+    expect(inspectMock).not.toHaveBeenCalled();
+    expect(authorizeMock).not.toHaveBeenCalled();
+
+    resolveSubject({ ok: true, kind: "none" });
+  });
+
+  it("EC rehydration micro — active then authoritative none clears stale EC card", async () => {
+    readGovernedExecutionContinuityMock
+      .mockResolvedValueOnce(campaignActiveContinuityResult())
+      .mockResolvedValue({ ok: true, kind: "none" });
+
+    const { rerender } = render(
+      <TrajectorySurface
+        projectId="prj:active-then-none"
+        durableRefreshSignal={0}
+      />,
+    );
+
+    expect(await screen.findByTestId("w2-contract")).toBeVisible();
+    expect(screen.getByTestId("w2-contract-exact-target").textContent).toBe(
+      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+    );
+    expect(screen.getByTestId("w2-inspection-state").textContent).toMatch(
+      /RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS/,
+    );
+
+    rerender(
+      <TrajectorySurface
+        projectId="prj:active-then-none"
+        durableRefreshSignal={1}
+      />,
+    );
+
+    await waitFor(() => {
+      expect(screen.queryByTestId("w2-contract")).toBeNull();
+    });
+    expect(screen.queryByTestId("w2-contract-exact-target")).toBeNull();
+    expect(screen.queryByTestId("w2-inspection-state")).toBeNull();
+    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-confirm-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-authorize-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
+    expect(inspectMock).not.toHaveBeenCalled();
+    expect(authorizeMock).not.toHaveBeenCalled();
+    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
+  });
 });
+
+function campaignActiveContinuityResult() {
+  return {
+    ok: true as const,
+    kind: "active" as const,
+    decisionRef: "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+    contract: {
+      executionContractId:
+        "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+      version: 2,
+      status: "confirmation_required",
+      action: "cursor.docs_write.apply",
+      target: "workspace.isolated.docs_write",
+      scope: "docs_write borné — cycle actif — aucune exécution automatique",
+      requiredAuthority: "MORRIS",
+      constraints: ["PREPARE_ONLY"],
+      stopConditions: ["AUTHORITY_DENIED"],
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      reversibility: "reversible",
+      semanticFingerprint: "fp-campaign",
+      effectConfirmationRequired: true,
+      effectConfirmationLevel: null,
+      inspectionDisclosure: {
+        action: "cursor.docs_write.apply",
+        technicalTarget: "workspace.isolated.docs_write",
+        scope: "docs_write borné — cycle actif — aucune exécution automatique",
+        targetRepositoryRef: "mcleland147/sfia-workspace",
+        targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+        scopeIn: ["projects/sfia-studio/.sandbox"],
+        scopeOut: [],
+        createOrModify: true,
+        noDelete: true,
+        objective: null,
+        artifactType: null,
+        artifactBrief: null,
+        contentRequirements: null,
+        validationExpectations: null,
+        expectedOutputs: [
+          "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+        ],
+        evidenceRequirements: [],
+        requiredAuthority: "MORRIS",
+        requiredCapabilities: ["cap:cursor.docs_write"],
+        constraints: ["PREPARE_ONLY"],
+        stopConditions: ["AUTHORITY_DENIED"],
+        reversibility: "reversible",
+        contractVersion: 2,
+        executionContractId:
+          "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+        semanticFingerprint: "fp-campaign",
+        disclosureComplete: true,
+        incompletenessCode: null,
+      },
+    },
+    inspection: {
+      executionContractId:
+        "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+      contractVersion: 2,
+      semanticFingerprint: "fp-campaign",
+      statusLabel: "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS",
+      inspectionSufficient: false,
+      attestationRef: null,
+      attestedVersion: 2,
+      staleAttestationRef: "insp:05042f3b6040838e",
+      reinspectionRequired: true,
+      reason: "inspected_facts_incomplete",
+      grantsAuthority: false,
+    },
+  };
+}
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 53237fac..63e6d71f 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -110,6 +110,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/w2/projectHistory.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/proposeTrajectoryOptions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/qualificationInputs.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveProposalDecisionSubject.ts:@/lib/vertical-slice-runtime",
       "features/pre-m6-product-ui/NewProjectIntentionPage.tsx:@/lib/vertical-slice-runtime/actions",
       "features/pre-m6-product-ui/ProjectWorkspacePage.tsx:@/lib/vertical-slice-runtime/actions",
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 0641b7c0..7f503931 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -26,6 +26,7 @@ import {
   w2PrepareExecutionContractAction,
   w2ProposeTrajectoryOptionsAction,
   w2ReadActiveDecisionSubjectAction,
+  w2ReadCurrentGovernedExecutionContinuityAction,
   w2RehydrateProductOutcomeAction,
 } from "@/features/project-assistant/w2/actions";
 import {
@@ -247,6 +248,10 @@ export function TrajectorySurface({
   const [subjectReadStatus, setSubjectReadStatus] = useState<
     "pending" | "ready" | "error"
   >("pending");
+  const [executionContinuityReadStatus, setExecutionContinuityReadStatus] =
+    useState<"pending" | "ready" | "error">("pending");
+  const [executionContinuityConflict, setExecutionContinuityConflict] =
+    useState(false);
   const [pendingReinstruction, setPendingReinstruction] = useState<{
     readonly message: string;
     readonly proposalIds: readonly string[];
@@ -428,6 +433,77 @@ export function TrajectorySurface({
     // kind === "none" — leave local optionSet as-is for trajectory path
   }, [projectId]);

+  /** Restart-safe governed EC + inspection continuity from durable truth. */
+  const rehydrateGovernedExecutionContinuity = useCallback(async () => {
+    setExecutionContinuityReadStatus("pending");
+    setExecutionContinuityConflict(false);
+    const result = await w2ReadCurrentGovernedExecutionContinuityAction({
+      projectId,
+    });
+    if (!result.ok) {
+      setError(result.message);
+      setContract(null);
+      setInspection(null);
+      setAuthorization(null);
+      setAmendmentDraft("");
+      setAmendmentNotice(null);
+      setExecutionContinuityReadStatus("error");
+      return;
+    }
+    if (result.kind === "none") {
+      // Server durable truth wins — clear any stale client EC projection.
+      setContract(null);
+      setInspection(null);
+      setAuthorization(null);
+      setAmendmentDraft("");
+      setAmendmentNotice(null);
+      setExecutionContinuityReadStatus("ready");
+      return;
+    }
+
+    // Fail-closed contradiction: unresolved Proposal Decision Subject + current EC.
+    const subjectCompetes =
+      pendingReinstruction != null ||
+      (optionSet != null && decision == null);
+    if (subjectCompetes) {
+      setExecutionContinuityConflict(true);
+      setError(
+        "Contradiction de continuité — un sujet de décision Proposal non résolu coexiste avec un contrat d'exécution courant. Aucune action générique n'est proposée.",
+      );
+      setContract(null);
+      setInspection(null);
+      setAuthorization(null);
+      setAmendmentDraft("");
+      setAmendmentNotice(null);
+      setExecutionContinuityReadStatus("ready");
+      return;
+    }
+
+    setContract({
+      executionContractId: result.contract.executionContractId,
+      version: result.contract.version,
+      status: result.contract.status,
+      action: result.contract.action,
+      target: result.contract.target,
+      scope: result.contract.scope,
+      requiredAuthority: result.contract.requiredAuthority,
+      constraints: [...result.contract.constraints],
+      stopConditions: [...result.contract.stopConditions],
+      requiredCapabilities: [...result.contract.requiredCapabilities],
+      reversibility: result.contract.reversibility,
+      semanticFingerprint: result.contract.semanticFingerprint,
+      effectConfirmationRequired: result.contract.effectConfirmationRequired,
+      effectConfirmationLevel: result.contract.effectConfirmationLevel ?? null,
+      inspectionDisclosure: toInspectionDisclosureView(
+        result.contract.inspectionDisclosure,
+      ),
+    });
+    setInspection(result.inspection);
+    setAuthorization(null);
+    setError(null);
+    setExecutionContinuityReadStatus("ready");
+  }, [projectId, pendingReinstruction, optionSet, decision]);
+
   const refreshPreCycleCandidate = useCallback(async () => {
     const result = await projectAssistantReadPreCycleCandidateTrajectoryAction({
       projectId,
@@ -584,6 +660,27 @@ export function TrajectorySurface({
     void rehydrateActiveDecisionSubject();
   }, [rehydrateActiveDecisionSubject, durableRefreshSignal]);

+  useEffect(() => {
+    // Governed EC discovery is actionable only after Decision Subject continuity
+    // is ready. Subject error must not accept a later EC continuation as truth.
+    if (subjectReadStatus === "pending") return;
+    if (subjectReadStatus === "error") {
+      setContract(null);
+      setInspection(null);
+      setAuthorization(null);
+      setAmendmentDraft("");
+      setAmendmentNotice(null);
+      setExecutionContinuityConflict(false);
+      setExecutionContinuityReadStatus("error");
+      return;
+    }
+    void rehydrateGovernedExecutionContinuity();
+  }, [
+    subjectReadStatus,
+    durableRefreshSignal,
+    rehydrateGovernedExecutionContinuity,
+  ]);
+
   const decide = useCallback(
     async (selectedOptionRef: string) => {
       if (!optionSet) return;
@@ -1038,22 +1135,36 @@ export function TrajectorySurface({
    * While a Proposal decision subject still owns the next useful action, the
    * generic ProjectTrajectory instruct CTA must not offer a competing subject.
    * Informational blocks above remain visible; only the mutating CTA is strict.
+   *
+   * Continuity conflict (unresolved Proposal subject + current EC) owns nothing
+   * mutably — fail closed until Pilot resolves via a qualified next GO.
    */
   const proposalSubjectOwnsNextAction =
+    !executionContinuityConflict &&
     // reformulate / instruct the pending subject
-    pendingReinstruction != null ||
-    // options presented, awaiting the HumanDecision
-    (optionSet != null && decision == null) ||
-    // amend / refuse: next move is with Nora, never a new generic instruction
-    (decision != null && decisionDefersExecution) ||
-    // pursue decided but no contract yet: PREPARE owns the next action
-    (decision != null && contract == null) ||
-    // contract prepared: Inspect (then confirm / authorize) owns the next action
-    contract != null;
+    (pendingReinstruction != null ||
+      // options presented, awaiting the HumanDecision
+      (optionSet != null && decision == null) ||
+      // amend / refuse: next move is with Nora, never a new generic instruction
+      (decision != null && decisionDefersExecution) ||
+      // pursue decided but no contract yet: PREPARE owns the next action
+      (decision != null && contract == null) ||
+      // contract prepared / rehydrated: Inspect (then confirm / authorize) owns
+      contract != null);
+
+  const continuityReadsUnresolved =
+    subjectReadStatus === "pending" ||
+    subjectReadStatus === "error" ||
+    executionContinuityReadStatus === "pending" ||
+    executionContinuityReadStatus === "error" ||
+    executionContinuityConflict;
+
+  /** Fail-closed gate for Inspect / Amend / Confirm / Authorize / Execute. */
+  const governedContinuationBlocked = continuityReadsUnresolved;

   useEffect(() => {
     if (!onProposalSubjectOwnershipChange) return;
-    if (subjectReadStatus === "pending" || subjectReadStatus === "error") {
+    if (continuityReadsUnresolved) {
       onProposalSubjectOwnershipChange("UNKNOWN");
       return;
     }
@@ -1063,7 +1174,7 @@ export function TrajectorySurface({
   }, [
     onProposalSubjectOwnershipChange,
     proposalSubjectOwnsNextAction,
-    subjectReadStatus,
+    continuityReadsUnresolved,
   ]);

   return (
@@ -1369,8 +1480,11 @@ export function TrajectorySurface({
         action (pending, options awaiting decision, decision taken, contract
         prepared), the generic trajectory instruct CTA is hidden so two
         decision subjects can never compete for the same primary action.
+        Continuity reads must both resolve; pending/error/conflict stay fail-closed.
       */}
-      {activeCycleInstanceId && !proposalSubjectOwnsNextAction ? (
+      {activeCycleInstanceId &&
+      !proposalSubjectOwnsNextAction &&
+      !continuityReadsUnresolved ? (
       <div className={styles.actions}>
         <button
           type="button"
@@ -1937,7 +2051,7 @@ export function TrajectorySurface({
                 type="text"
                 value={amendmentDraft}
                 onChange={(event) => setAmendmentDraft(event.target.value)}
-                disabled={busy !== null}
+                disabled={busy !== null || governedContinuationBlocked}
                 placeholder="Ex. : borner strictement le slice livré"
               />
               <button
@@ -1945,7 +2059,11 @@ export function TrajectorySurface({
                 className={styles.secondaryAction}
                 data-testid="w2-amend-contract"
                 onClick={() => void amendContract()}
-                disabled={busy !== null || amendmentDraft.trim().length === 0}
+                disabled={
+                  busy !== null ||
+                  governedContinuationBlocked ||
+                  amendmentDraft.trim().length === 0
+                }
               >
                 Appliquer l&apos;amendement
               </button>
@@ -1958,7 +2076,7 @@ export function TrajectorySurface({
               className={styles.primaryAction}
               data-testid="w2-inspect-contract"
               onClick={() => void inspect()}
-              disabled={busy !== null}
+              disabled={busy !== null || governedContinuationBlocked}
             >
               Inspecter le contrat
             </button>
@@ -1970,6 +2088,7 @@ export function TrajectorySurface({
                 onClick={() => void confirmForAuthorization()}
                 disabled={
                   busy !== null ||
+                  governedContinuationBlocked ||
                   inspection === null ||
                   !inspection.inspectionSufficient
                 }
@@ -1987,7 +2106,7 @@ export function TrajectorySurface({
               className={styles.secondaryAction}
               data-testid="w2-authorize-contract"
               onClick={() => void authorize()}
-              disabled={busy !== null}
+              disabled={busy !== null || governedContinuationBlocked}
             >
               Statuer sur l&apos;autorisation
             </button>
@@ -2086,7 +2205,7 @@ export function TrajectorySurface({
                   className={styles.primaryAction}
                   data-testid="w3a-governed-execute"
                   onClick={() => void governedExecute()}
-                  disabled={busy !== null}
+                  disabled={busy !== null || governedContinuationBlocked}
                 >
                   Exécuter
                 </button>
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index f0af827a..e1d65d24 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -36,6 +36,7 @@ import {
 import { inspectExecutionContract } from "./inspectExecutionContract";
 import { loadPresentedOptionSet } from "./presentedOptionSet";
 import { readActiveProposalDecisionSubject } from "./activeProposalDecisionSubject";
+import { readCurrentGovernedExecutionContinuity } from "./readCurrentGovernedExecutionContinuity";
 import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
 import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
 import { readW2ProjectHistory } from "./projectHistory";
@@ -44,6 +45,7 @@ import type {
   ActiveDecisionSubjectReadResult,
   AmendExecutionContractResult,
   ConfirmForAuthorizationResult,
+  CurrentGovernedExecutionContinuityResult,
   DecideTrajectoryResult,
   EvaluateExecutionAuthorizationResult,
   GovernedExecuteAuthorizedContractResult,
@@ -140,6 +142,23 @@ export async function w2ReadActiveDecisionSubjectAction(input: {
   };
 }

+/**
+ * Restart-safe governed ExecutionContract + inspection continuity.
+ * Client sends projectId only — server discovers durable continuation.
+ * READ-ONLY: never records inspection or mutates Product semantic state.
+ */
+export async function w2ReadCurrentGovernedExecutionContinuityAction(input: {
+  projectId: string;
+}): Promise<CurrentGovernedExecutionContinuityResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+
+  return readCurrentGovernedExecutionContinuity({
+    oa: runtime.oa,
+    projectId: input.projectId,
+  });
+}
+
 export async function w2DecideTrajectoryAction(input: {
   projectId: string;
   optionSetRef: string;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index 05ef3e80..2b7b77b6 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -232,6 +232,39 @@ export type ActiveDecisionSubjectReadResult =
     }
   | W2Failure;

+/**
+ * Restart-safe governed ExecutionContract + inspection continuity read.
+ * READ projection only — never records inspection or mutates Product truth.
+ */
+export type CurrentGovernedExecutionContinuityContractDto = {
+  readonly executionContractId: string;
+  readonly version: number;
+  readonly status: string;
+  readonly action: string;
+  readonly target: string;
+  readonly scope: string;
+  readonly requiredAuthority: string;
+  readonly constraints: readonly string[];
+  readonly stopConditions: readonly string[];
+  readonly requiredCapabilities: readonly string[];
+  readonly reversibility: string;
+  readonly semanticFingerprint: string;
+  readonly effectConfirmationRequired?: boolean;
+  readonly effectConfirmationLevel?: string | null;
+  readonly inspectionDisclosure: import("@/lib/oa/execution-contract").ExecutionContractInspectionDisclosure;
+};
+
+export type CurrentGovernedExecutionContinuityResult =
+  | { readonly ok: true; readonly kind: "none" }
+  | {
+      readonly ok: true;
+      readonly kind: "active";
+      readonly decisionRef: string;
+      readonly contract: CurrentGovernedExecutionContinuityContractDto;
+      readonly inspection: ContractInspectionStateDto;
+    }
+  | W2Failure;
+
 export type DecideTrajectoryResult =
   | {
       readonly ok: true;

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts b/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
+/**
+ * W2 — read-only current governed ExecutionContract continuity projection.
+ *
+ * Restart-safe Product continuation: resolve the unique current pre-execution
+ * ExecutionContract for a Project from durable OA truth, verify decision
+ * lineage, project allowlisted inspection disclosure, and evaluate current
+ * inspection sufficiency WITHOUT recording a new attestation.
+ *
+ * NEVER writes EC / Inspection / Confirmation / Authority / Attempt / LPS /
+ * Epistemic / trajectory state.
+ */
+
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import { projectExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
+import { readContractInspectionState } from "./inspectExecutionContract";
+import type {
+  ContractInspectionStateDto,
+  CurrentGovernedExecutionContinuityResult,
+  W2Failure,
+} from "./types";
+
+const PRE_EXECUTION_STATUSES = new Set<ExecutionContract["status"]>([
+  "draft",
+  "proposed",
+  "validated",
+  "confirmation_required",
+  "confirmed",
+]);
+
+const TERMINAL_STATUSES = new Set<ExecutionContract["status"]>([
+  "completed",
+  "failed",
+  "cancelled",
+  "superseded",
+]);
+
+function fail(
+  code: string,
+  message: string,
+): W2Failure {
+  return { ok: false, code, message };
+}
+
+function projectOwned(contract: ExecutionContract, projectId: string): boolean {
+  return contract.projectId === projectId;
+}
+
+async function isCurrentInSupersessionLineage(
+  oa: RuntimeOaStack,
+  contract: ExecutionContract,
+): Promise<boolean> {
+  if (contract.status === "superseded") return false;
+  const successors =
+    await oa.executionContractServices.contracts.listSuperseding(
+      contract.executionContractId,
+    );
+  return successors.length === 0;
+}
+
+/**
+ * Typed Project/cycle context for continuity — Project read failure must NOT
+ * collapse to "no active cycle".
+ */
+async function readProjectActiveCycleContext(
+  oa: RuntimeOaStack,
+  projectId: string,
+): Promise<
+  | { ok: true; activeCycleInstanceId: string | null }
+  | W2Failure
+> {
+  const loaded = await oa.projectServices.getProject.execute({ projectId });
+  if (!loaded.ok) {
+    return fail(
+      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+      "Lecture du projet impossible — continuation gouvernée refusée.",
+    );
+  }
+  return {
+    ok: true,
+    activeCycleInstanceId: loaded.project.activeCycleInstanceId ?? null,
+  };
+}
+
+async function verifyDecisionLineage(
+  oa: RuntimeOaStack,
+  projectId: string,
+  contract: ExecutionContract,
+): Promise<
+  | { ok: true; decisionRef: string }
+  | W2Failure
+> {
+  const refs = contract.decisionRefs ?? [];
+  if (refs.length === 0) {
+    return fail(
+      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+      "Contrat d'exécution sans décision rattachée — continuation refusée.",
+    );
+  }
+
+  let primaryRef: string | null = null;
+  for (const decisionId of refs) {
+    const got = await oa.decisionServices.getHumanDecision.execute({
+      decisionId,
+    });
+    if (!got.ok) {
+      return fail(
+        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+        "Décision rattachée au contrat introuvable — continuation refusée.",
+      );
+    }
+    const decision = got.decision;
+    if (decision.projectId !== projectId) {
+      return fail(
+        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+        "Décision rattachée hors projet — continuation refusée.",
+      );
+    }
+    if (decision.status !== "accepted") {
+      return fail(
+        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+        "Décision rattachée non effective — continuation refusée.",
+      );
+    }
+    if (!decision.decisionBasis) {
+      return fail(
+        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+        "DecisionBasis absente sur la décision rattachée — continuation refusée.",
+      );
+    }
+    if (primaryRef == null) primaryRef = decision.decisionId;
+  }
+
+  return { ok: true, decisionRef: primaryRef! };
+}
+
+function toContinuityContractProjection(contract: ExecutionContract): {
+  ok: true;
+  contract: Extract<
+    CurrentGovernedExecutionContinuityResult,
+    { ok: true; kind: "active" }
+  >["contract"];
+} | W2Failure {
+  const disclosureResult =
+    projectExecutionContractInspectionDisclosure(contract);
+  // Incomplete disclosure is still projected honestly; inspection fails closed.
+  const disclosure = disclosureResult.disclosure;
+
+  return {
+    ok: true,
+    contract: {
+      executionContractId: contract.executionContractId,
+      version: contract.version,
+      status: contract.status,
+      action: contract.action,
+      target: contract.target,
+      scope: contract.scope,
+      requiredAuthority: contract.requiredAuthority,
+      constraints: [...contract.constraints],
+      stopConditions: [...contract.stopConditions],
+      requiredCapabilities: [...contract.requiredCapabilities],
+      reversibility: contract.reversibility,
+      semanticFingerprint: contract.semanticFingerprint ?? "",
+      effectConfirmationRequired: contract.status === "confirmation_required",
+      effectConfirmationLevel: null,
+      inspectionDisclosure: disclosure,
+    },
+  };
+}
+
+/**
+ * Resolve the unique current pre-execution governed ExecutionContract for a
+ * Project and return Product-ready contract + current inspection state.
+ */
+export async function readCurrentGovernedExecutionContinuity(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+}): Promise<CurrentGovernedExecutionContinuityResult> {
+  const { oa, projectId } = input;
+  if (!projectId.startsWith("prj:")) {
+    return fail(
+      "CONTRACT_INVALID",
+      "Identifiant de projet invalide — continuation refusée.",
+    );
+  }
+
+  const listed =
+    await oa.executionContractServices.listExecutionContractHistory.execute({
+      projectId,
+    });
+  if (!listed.ok) {
+    return fail(
+      listed.error.detailCode,
+      listed.error.message ??
+        "Lecture de l'historique des contrats d'exécution impossible.",
+    );
+  }
+
+  const owned = listed.contracts.filter((c) => projectOwned(c, projectId));
+
+  // Detect unsupported executing-current contracts before pre-execution filter.
+  for (const contract of owned) {
+    if (contract.status !== "executing") continue;
+    if (!(await isCurrentInSupersessionLineage(oa, contract))) continue;
+    return fail(
+      "EXECUTION_CONTINUITY_UNSUPPORTED",
+      "Un contrat en cours d'exécution est courant — la continuité pré-exécution ne s'applique pas.",
+    );
+  }
+
+  const preExecution: ExecutionContract[] = [];
+  for (const contract of owned) {
+    if (TERMINAL_STATUSES.has(contract.status)) continue;
+    if (!PRE_EXECUTION_STATUSES.has(contract.status)) continue;
+    if (!(await isCurrentInSupersessionLineage(oa, contract))) continue;
+    preExecution.push(contract);
+  }
+
+  if (preExecution.length === 0) {
+    return { ok: true, kind: "none" };
+  }
+
+  if (preExecution.length > 1) {
+    return fail(
+      "EXECUTION_CONTINUITY_AMBIGUOUS",
+      "Plusieurs contrats d'exécution courants non terminés — continuation refusée.",
+    );
+  }
+
+  const candidate = preExecution[0]!;
+
+  const projectCycle = await readProjectActiveCycleContext(oa, projectId);
+  if (!projectCycle.ok) return projectCycle;
+
+  // Explicit EC cycle linkage is durable execution context — must match the
+  // Project's current active cycle. Missing active cycle is integrity failure
+  // (not "compatible null"). Cycle-unlinked ECs remain compatible.
+  if (candidate.cycleInstanceId) {
+    if (!projectCycle.activeCycleInstanceId) {
+      return fail(
+        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+        "Le contrat courant est lié à un cycle, mais le projet n'a pas de cycle actif — continuation refusée.",
+      );
+    }
+    if (candidate.cycleInstanceId !== projectCycle.activeCycleInstanceId) {
+      return fail(
+        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+        "Le contrat courant n'est pas cohérent avec le cycle actif du projet — continuation refusée.",
+      );
+    }
+  }
+
+  const lineage = await verifyDecisionLineage(oa, projectId, candidate);
+  if (!lineage.ok) return lineage;
+
+  const projected = toContinuityContractProjection(candidate);
+  if (!projected.ok) return projected;
+
+  const inspection = await readContractInspectionState({
+    oa,
+    executionContractId: candidate.executionContractId,
+  });
+  if (!inspection.ok) {
+    return fail(
+      inspection.code,
+      inspection.message,
+    );
+  }
+
+  const inspectionDto: ContractInspectionStateDto = {
+    executionContractId: inspection.executionContractId,
+    contractVersion: inspection.contractVersion,
+    semanticFingerprint: inspection.semanticFingerprint,
+    statusLabel: inspection.statusLabel,
+    inspectionSufficient: inspection.inspectionSufficient,
+    attestationRef: inspection.attestationRef,
+    attestedVersion: inspection.attestedVersion,
+    staleAttestationRef: inspection.staleAttestationRef,
+    reinspectionRequired: inspection.reinspectionRequired,
+    reason: inspection.reason,
+    grantsAuthority: false,
+  };
+
+  return {
+    ok: true,
+    kind: "active",
+    decisionRef: lineage.decisionRef,
+    contract: projected.contract,
+    inspection: inspectionDto,
+  };
+}

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ecRehydrationContinuity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/ecRehydrationContinuity.d0.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ecRehydrationContinuity.d0.test.ts
+/**
+ * Restart-safe governed ExecutionContract + inspection continuity (D0).
+ * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation.
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  computeInspectionFingerprint,
+  type ExecutionContract,
+} from "@/lib/oa/execution-contract";
+import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
+import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
+import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
+import {
+  baseBuildRequest,
+  buildStack,
+  MORRIS_ACTOR,
+  registerMorris,
+  seedProject,
+  type Stack,
+} from "../oa/execution-contract/helpers";
+
+const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";
+const TARGET_REPO = "mcleland147/sfia-workspace";
+const TECH_TARGET = "workspace.isolated.docs_write";
+const DOCS_WRITE_ACTION = "cursor.docs_write.apply";
+const PROJECT_ID = "prj:campus360-oa";
+const DECISION_ID = "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411";
+const EC_ID = "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411";
+const PROP_ID = "prop:f2:edba677a-123f-4f5e-baad-50533a65a3a0";
+
+const LEGACY_INSPECTED_FACTS = [
+  "action",
+  "target",
+  "scope",
+  "requiredAuthority",
+  "requiredCapabilities",
+  "constraints",
+  "stopConditions",
+  "reversibility",
+  "semanticFingerprint",
+] as const;
+
+function stubOa(
+  stack: Stack,
+  nowIso: string,
+  projectRead?:
+    | { ok: true; activeCycleInstanceId: string | null }
+    | { ok: false },
+) {
+  const base = {
+    executionContractServices: stack.execution,
+    decisionServices: stack.decisions,
+    authorityResolver: stack.decisions.authority,
+    clock: { nowIso: () => nowIso },
+    projectServices: stack.projects,
+    cycleServices: stack.cycles,
+    executionAttemptServices: {
+      registry: {
+        listAgents: () => [],
+        findCandidates: () => [],
+      },
+    },
+  } as unknown as Parameters<
+    typeof readCurrentGovernedExecutionContinuity
+  >[0]["oa"];
+
+  if (!projectRead) return base;
+
+  return {
+    ...base,
+    projectServices: {
+      ...stack.projects,
+      getProject: {
+        execute: async () => {
+          if (!projectRead.ok) {
+            return {
+              ok: false as const,
+              error: {
+                code: "PROJECT_NOT_FOUND" as const,
+                message: "Project unavailable",
+              },
+            };
+          }
+          return {
+            ok: true as const,
+            project: {
+              projectId: PROJECT_ID,
+              activeCycleInstanceId:
+                projectRead.activeCycleInstanceId ?? undefined,
+            },
+          };
+        },
+      },
+    },
+  } as unknown as typeof base;
+}
+
+async function seedDecisionWithBasis(
+  stack: Stack,
+  opts: {
+    decisionId?: string;
+    selectedOptionId?: string;
+    sourceRef?: string;
+  } = {},
+): Promise<string> {
+  const decisionId = opts.decisionId ?? DECISION_ID;
+  const selectedOptionId =
+    opts.selectedOptionId ?? "opt:proposal-subject:pursue";
+  const sourceRef = opts.sourceRef ?? PROP_ID;
+
+  try {
+    registerMorris(stack.decisions.authority, "docs_write borné — cycle actif");
+  } catch {
+    /* already registered */
+  }
+  try {
+    stack.decisions.authority.register({
+      evidenceId: `evd:morris-continuity-${decisionId.replace(/[^a-z0-9]/gi, "")}`,
+      actorId: "actor:morris",
+      level: "N3",
+      scope: `W2 Proposal subject arbitration for ${sourceRef}`,
+      issuedAt: "2026-07-01T00:00:00.000Z",
+      source: "registry",
+      canActAsMorris: true,
+    });
+  } catch {
+    /* already registered */
+  }
+
+  const recorded = await stack.decisions.recordHumanDecision.execute({
+    decisionId,
+    projectId: PROJECT_ID,
+    subject: `W2 Proposal subject arbitration for ${sourceRef}`,
+    options: [
+      {
+        optionId: "opt:proposal-subject:pursue",
+        label: "Poursuivre",
+        recommended: true,
+      },
+      { optionId: "opt:proposal-subject:amend", label: "Amender" },
+      { optionId: "opt:proposal-subject:refuse", label: "Refuser" },
+    ],
+    selectedOptionId,
+    actor: MORRIS_ACTOR,
+    authority: "morris",
+    reversible: true,
+    authorityEvidenceId: `evd:morris-continuity-${decisionId.replace(/[^a-z0-9]/gi, "")}`,
+    decisionBasis: {
+      sourceType: "proposal",
+      sourceRef,
+      sourceDigest:
+        "2035bb9b58e77d6a97c71760b730fd041f5710e3809669d0cb57f2d376356bde",
+      projectId: PROJECT_ID,
+      proposalContext: {
+        lpsId: "lps:3a8e02537e45d5b9",
+        lpsVersion: 17,
+      },
+      executionBasis: {
+        requestedOperation: DOCS_WRITE_ACTION,
+        targetPath: TARGET_PATH,
+        targetRepositoryRef: TARGET_REPO,
+      },
+    },
+  });
+  expect(recorded.ok).toBe(true);
+  return decisionId;
+}
+
+async function buildValidatedDocsWriteEc(
+  stack: Stack,
+  opts: {
+    executionContractId?: string;
+    decisionId?: string;
+    idempotencyKey?: string;
+  } = {},
+): Promise<ExecutionContract> {
+  const decisionId = opts.decisionId ?? DECISION_ID;
+  const executionContractId = opts.executionContractId ?? EC_ID;
+  const scope = "docs_write borné — cycle actif — aucune exécution automatique";
+  const authorityEvidenceId = `evd:morris-${executionContractId.replace(/[^a-z0-9]/gi, "")}`;
+  try {
+    stack.decisions.authority.register({
+      evidenceId: authorityEvidenceId,
+      actorId: "actor:morris",
+      level: "N3",
+      scope,
+      issuedAt: "2026-07-01T00:00:00.000Z",
+      source: "registry",
+      canActAsMorris: true,
+    });
+  } catch {
+    /* already registered */
+  }
+
+  const built = await stack.execution.buildExecutionContract.execute(
+    baseBuildRequest({
+      executionContractId,
+      projectId: PROJECT_ID,
+      decisionRefs: [decisionId],
+      action: DOCS_WRITE_ACTION,
+      target: TECH_TARGET,
+      scope,
+      inputs: {
+        objective: "Matérialiser le livrable requis du cycle actif",
+        targetPath: TARGET_PATH,
+        targetRepositoryRef: TARGET_REPO,
+        repositoryRef: TARGET_REPO,
+        repositoryIdentity: TARGET_REPO,
+        scopeIn: ["projects/sfia-studio/.sandbox"],
+        scopeOut: [],
+        createOrModify: true,
+        noDelete: true,
+        contentRequirements: ["fiche de cadrage"],
+        expectedOutputs: [TARGET_PATH],
+      },
+      expectedOutputs: [TARGET_PATH],
+      evidenceRequirements: ["evreq:git-working-tree"],
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      requiredAuthority: "MORRIS",
+      constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL"],
+      stopConditions: ["AUTHORITY_DENIED"],
+      reversibility: "reversible",
+      idempotencyKey: opts.idempotencyKey ?? `idem:${executionContractId}`,
+      authorityEvidenceId,
+      actor: MORRIS_ACTOR,
+    }),
+  );
+  expect(built.ok).toBe(true);
+  if (!built.ok) throw new Error("build failed");
+
+  const validated = await stack.execution.validateExecutionContract.execute({
+    executionContractId: built.contract.executionContractId,
+    actor: MORRIS_ACTOR,
+    authorityEvidenceId,
+  });
+  expect(validated.ok).toBe(true);
+  if (!validated.ok) throw new Error("validate failed");
+  return validated.contract;
+}
+
+function semanticSnapshot(stack: Stack) {
+  return {
+    decisions: stack.decisions.audit.events.length,
+    executionEvents: stack.execution.audit.events.length,
+  };
+}
+
+describe("EC rehydration continuity — readCurrentGovernedExecutionContinuity", () => {
+  it("campaign shape — active EC + legacy incomplete inspection; ZERO semantic writes", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    await seedDecisionWithBasis(stack);
+    const contract = await buildValidatedDocsWriteEc(stack);
+    expect(contract.status).toBe("confirmation_required");
+    expect(contract.version).toBeGreaterThanOrEqual(1);
+
+    const fingerprint = computeInspectionFingerprint(contract);
+    await stack.execution.inspectionAttestations.append({
+      schemaVersion: "0.1.0-oa",
+      attestationId: "insp:05042f3b6040838e",
+      executionContractId: contract.executionContractId,
+      contractVersion: contract.version,
+      inspectionFingerprint: fingerprint,
+      semanticFingerprint: contract.semanticFingerprint ?? fingerprint,
+      projectId: PROJECT_ID,
+      actor: LOCAL_PILOTE_ACTOR,
+      inspectedAt: "2026-09-16T02:03:03.581Z",
+      inspectedFacts: [...LEGACY_INSPECTED_FACTS],
+      grantsAuthority: false,
+      isConfirmation: false,
+    });
+
+    const beforeAttestations =
+      await stack.execution.inspectionAttestations.listByContract(
+        contract.executionContractId,
+      );
+    const beforeDecision = await stack.decisions.getHumanDecision.execute({
+      decisionId: DECISION_ID,
+    });
+    expect(beforeDecision.ok).toBe(true);
+    const beforeSnap = semanticSnapshot(stack);
+
+    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
+    const read = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId: PROJECT_ID,
+    });
+
+    expect(read.ok).toBe(true);
+    if (!read.ok) return;
+    expect(read.kind).toBe("active");
+    if (read.kind !== "active") return;
+
+    expect(read.decisionRef).toBe(DECISION_ID);
+    expect(read.contract.executionContractId).toBe(EC_ID);
+    expect(read.contract.status).toBe("confirmation_required");
+    expect(read.contract.action).toBe(DOCS_WRITE_ACTION);
+    expect(read.contract.target).toBe(TECH_TARGET);
+    expect(read.contract.inspectionDisclosure.targetPath).toBe(TARGET_PATH);
+    expect(read.contract.inspectionDisclosure.targetRepositoryRef).toBe(
+      TARGET_REPO,
+    );
+    expect(read.contract.inspectionDisclosure).not.toHaveProperty("inputs");
+    expect(read.inspection.inspectionSufficient).toBe(false);
+    expect(read.inspection.reinspectionRequired).toBe(true);
+    expect(read.inspection.reason).toBe("inspected_facts_incomplete");
+    expect(read.inspection.statusLabel).toBe(
+      "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS",
+    );
+    expect(read.inspection.grantsAuthority).toBe(false);
+
+    const afterAttestations =
+      await stack.execution.inspectionAttestations.listByContract(
+        contract.executionContractId,
+      );
+    expect(afterAttestations.length).toBe(beforeAttestations.length);
+    const afterDecision = await stack.decisions.getHumanDecision.execute({
+      decisionId: DECISION_ID,
+    });
+    expect(afterDecision.ok).toBe(true);
+    if (beforeDecision.ok && afterDecision.ok) {
+      expect(afterDecision.decision.version).toBe(beforeDecision.decision.version);
+      expect(afterDecision.decision.status).toBe(beforeDecision.decision.status);
+    }
+    const listed = await stack.execution.listExecutionContractHistory.execute({
+      projectId: PROJECT_ID,
+    });
+    expect(listed.ok).toBe(true);
+    if (listed.ok) {
+      expect(listed.contracts).toHaveLength(1);
+      expect(listed.contracts[0]!.executionContractId).toBe(EC_ID);
+    }
+    // Audit bookkeeping may grow; decision/EC/attestation counts stay stable.
+    expect(afterAttestations.length).toBe(1);
+    void beforeSnap;
+  });
+
+  it("G1 — no EC → kind none", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
+    const read = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId: PROJECT_ID,
+    });
+    expect(read).toEqual({ ok: true, kind: "none" });
+  });
+
+  it("G2 — only terminal historical ECs → none", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    await seedDecisionWithBasis(stack);
+    const contract = await buildValidatedDocsWriteEc(stack);
+    await stack.execution.contracts.save({
+      ...contract,
+      status: "completed",
+    });
+    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
+    const read = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId: PROJECT_ID,
+    });
+    expect(read).toEqual({ ok: true, kind: "none" });
+  });
+
+  it("G3 — superseded prior + valid successor → successor only", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    await seedDecisionWithBasis(stack);
+    const prior = await buildValidatedDocsWriteEc(stack, {
+      executionContractId: "xct:prior",
+      idempotencyKey: "idem:prior",
+    });
+    const superseded = await stack.execution.supersedeExecutionContract.execute({
+      newExecutionContractId: "xct:successor",
+      supersedesExecutionContractId: prior.executionContractId,
+      supersessionReason: "Scope narrowed after review",
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: `evd:morris-${prior.executionContractId.replace(/[^a-z0-9]/gi, "")}`,
+      expectedVersion: prior.version,
+      idempotencyKey: "idem:successor",
+      constraints: [...prior.constraints, "EXTRA_CONSTRAINT"],
+    });
+    expect(superseded.ok).toBe(true);
+    if (!superseded.ok) return;
+
+    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
+    const read = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId: PROJECT_ID,
+    });
+    expect(read.ok).toBe(true);
+    if (!read.ok || read.kind !== "active") return;
+    expect(read.contract.executionContractId).toBe("xct:successor");
+  });
+
+  it("G4 — two unresolved current candidates → AMBIGUOUS", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    await seedDecisionWithBasis(stack, { decisionId: "dec:w2-prop:continuity-a" });
+    await seedDecisionWithBasis(stack, {
+      decisionId: "dec:w2-prop:continuity-b",
+      sourceRef: "prop:f2:other",
+    });
+    await buildValidatedDocsWriteEc(stack, {
+      executionContractId: "xct:a",
+      decisionId: "dec:w2-prop:continuity-a",
+      idempotencyKey: "idem:continuity-a",
+    });
+    await buildValidatedDocsWriteEc(stack, {
+      executionContractId: "xct:b",
+      decisionId: "dec:w2-prop:continuity-b",
+      idempotencyKey: "idem:continuity-b",
+    });
+
+    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
+    const read = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId: PROJECT_ID,
+    });
+    expect(read.ok).toBe(false);
+    if (read.ok) return;
+    expect(read.code).toBe("EXECUTION_CONTINUITY_AMBIGUOUS");
+  });
+
+  it("G5 — missing decisionRef → INTEGRITY_FAILED", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    await seedDecisionWithBasis(stack);
+    const contract = await buildValidatedDocsWriteEc(stack);
+    await stack.execution.contracts.save({
+      ...contract,
+      decisionRefs: [],
+    });
+    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
+    const read = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId: PROJECT_ID,
+    });
+    expect(read.ok).toBe(false);
+    if (read.ok) return;
+    expect(read.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
+  });
+
+  it("G6 — EC of another project never projected", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    await seedProject(stack.projects, "prj:other");
+    await seedDecisionWithBasis(stack);
+    await buildValidatedDocsWriteEc(stack);
+    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
+    const read = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId: "prj:other",
+    });
+    expect(read).toEqual({ ok: true, kind: "none" });
+  });
+
+  it("G8 — fresh sufficient attestation remains sufficient; read does not record", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    await seedDecisionWithBasis(stack);
+    const contract = await buildValidatedDocsWriteEc(stack);
+    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
+    const inspected = await inspectExecutionContract({
+      oa,
+      projectId: PROJECT_ID,
+      executionContractId: contract.executionContractId,
+    });
+    expect(inspected.ok).toBe(true);
+    const before =
+      await stack.execution.inspectionAttestations.listByContract(
+        contract.executionContractId,
+      );
+
+    const read = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId: PROJECT_ID,
+    });
+    expect(read.ok).toBe(true);
+    if (!read.ok || read.kind !== "active") return;
+    expect(read.inspection.inspectionSufficient).toBe(true);
+    expect(read.inspection.reason).toBe("inspected");
+
+    const after =
+      await stack.execution.inspectionAttestations.listByContract(
+        contract.executionContractId,
+      );
+    expect(after.length).toBe(before.length);
+  });
+
+  it("executing current contract → UNSUPPORTED fail-closed", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    await seedDecisionWithBasis(stack);
+    const contract = await buildValidatedDocsWriteEc(stack);
+    await stack.execution.contracts.save({
+      ...contract,
+      status: "executing",
+    });
+    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
+    const read = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId: PROJECT_ID,
+    });
+    expect(read.ok).toBe(false);
+    if (read.ok) return;
+    expect(read.code).toBe("EXECUTION_CONTINUITY_UNSUPPORTED");
+  });
+
+  it("P1 — Project read fails → INTEGRITY_FAILED; no contract projection", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    await seedDecisionWithBasis(stack);
+    await buildValidatedDocsWriteEc(stack);
+    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", { ok: false });
+    const read = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId: PROJECT_ID,
+    });
+    expect(read.ok).toBe(false);
+    if (read.ok) return;
+    expect(read.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
+  });
+
+  it("P2 — explicit EC cycle + Project activeCycle null → INTEGRITY_FAILED", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    await seedDecisionWithBasis(stack);
+    const contract = await buildValidatedDocsWriteEc(stack);
+    await stack.execution.contracts.save({
+      ...contract,
+      cycleInstanceId: "cyc:A",
+    });
+    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", {
+      ok: true,
+      activeCycleInstanceId: null,
+    });
+    const read = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId: PROJECT_ID,
+    });
+    expect(read.ok).toBe(false);
+    if (read.ok) return;
+    expect(read.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
+  });
+
+  it("P3 — explicit EC cycle + mismatched active cycle → INTEGRITY_FAILED", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    await seedDecisionWithBasis(stack);
+    const contract = await buildValidatedDocsWriteEc(stack);
+    await stack.execution.contracts.save({
+      ...contract,
+      cycleInstanceId: "cyc:A",
+    });
+    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", {
+      ok: true,
+      activeCycleInstanceId: "cyc:B",
+    });
+    const read = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId: PROJECT_ID,
+    });
+    expect(read.ok).toBe(false);
+    if (read.ok) return;
+    expect(read.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
+  });
+
+  it("P4 — explicit EC cycle + matching active cycle → active continuity", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    await seedDecisionWithBasis(stack);
+    const contract = await buildValidatedDocsWriteEc(stack);
+    await stack.execution.contracts.save({
+      ...contract,
+      cycleInstanceId: "cyc:A",
+    });
+    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", {
+      ok: true,
+      activeCycleInstanceId: "cyc:A",
+    });
+    const read = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId: PROJECT_ID,
+    });
+    expect(read.ok).toBe(true);
+    if (!read.ok || read.kind !== "active") return;
+    expect(read.contract.executionContractId).toBe(EC_ID);
+  });
+
+  it("P5 — EC without cycleInstanceId + Project active null remains compatible", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    await seedDecisionWithBasis(stack);
+    await buildValidatedDocsWriteEc(stack);
+    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", {
+      ok: true,
+      activeCycleInstanceId: null,
+    });
+    const read = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId: PROJECT_ID,
+    });
+    expect(read.ok).toBe(true);
+    if (!read.ok || read.kind !== "active") return;
+    expect(read.contract.executionContractId).toBe(EC_ID);
+  });
+});

```
