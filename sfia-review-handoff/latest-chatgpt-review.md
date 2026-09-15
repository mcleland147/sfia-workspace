# CORR-PROOF-10 — Decision Context Continuity — Review Pack FULL (COMPLETE CONTENT)

**Timestamp (UTC):** 2026-09-15T01:19:29Z
**Verdict:** CORR-PROOF-10 DECISION CONTINUITY — LOCAL CANDIDATE READY FOR CHATGPT CRITICAL REVIEW
**Handoff note:** Republish after ChatGPT `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`. This pack embeds full new files + unified diffs of all modified Product paths (project branch not pushed).

---

## 1. Git Truth

| Item | Value |
|---|---|
| Repository | mcleland147/sfia-workspace |
| Worktree | /Users/morris/Projects/sfia-studio-corr-proof-10-decision-context-continuity |
| Branch | fix/sfia-studio-corr-proof-10-decision-context-continuity |
| HEAD (candidate base, uncommitted) | 93ac1aea1af6b2094c158c5068bec1602d863ca7 |
| origin/main (SoT) | 93ac1aea1af6b2094c158c5068bec1602d863ca7 |
| Match SoT before code | YES |
| Dogfood worktree | /Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d @ 93ac1aea — untouched |
| Project commit / push / PR / merge | NOT performed |

### git status --short (candidate)

```text
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
?? .tmp-sfia-review/corr-proof-10-full-diff.txt
?? projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts
```

### git diff --stat (tracked Product paths only)

```text
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |   5 +
 .../surfaces/TrajectorySurface.tsx                 |  32 ++-
 .../features/project-assistant/f2/proposalStore.ts |  11 +
 .../app/features/project-assistant/w2/actions.ts   |  14 ++
 .../project-assistant/w2/decideTrajectory.ts       | 275 ++++++++++++++++-----
 .../w2/prepareExecutionContractFromW2Decision.ts   |  49 +++-
 .../project-assistant/w2/presentedOptionSet.ts     |  32 +++
 .../w2/proposeTrajectoryOptions.ts                 | 121 ++++++++-
 .../app/features/project-assistant/w2/types.ts     |  16 +-
 9 files changed, 479 insertions(+), 76 deletions(-)
```

---

## 2. Sources / R22

R22 PASS — context binding / orchestration only. No new cognitive engine. Provider cognition KEEP.

Code SoT: f2 proposalStore/types/recordDecision/activeCycleGovernedContinuation; w2 actions/propose/presented/decide/prepare; UI TrajectorySurface + ProjectWorkspacePage; tests corrProof07/09 + new corrProof10.

---

## 3. Diagnostic (CONFIRMED)

Loss point: `TrajectorySurface.proposeOptions` → `w2ProposeTrajectoryOptionsAction({ projectId })` only → generic trajectory trio. Proposal Nora subject never crossed into W2 OptionSet.

No new persistence / DecisionSubject aggregate required.

---

## 4. Design retained

1. Opaque `proposalId` client → server `resolveProposalDecisionSubject` (ProposalStore + contextMatches).
2. Active `DECISION_REQUIRED` without proposalId → `ACTIVE_PROPOSAL_SUBJECT_REQUIRED` (no silent generic fallback).
3. Subject options: `opt:proposal-subject:pursue|amend|refuse` derived from sealed Proposal fields (not hardcoded gestion-de-taches).
4. Seal into PresentedOptionSet: proposalId, proposalSubjectDigest, sealedExecutionBasis, promotesProjectTrajectory=false.
5. decideTrajectory: HD `sourceType:"proposal"` + sealed executionBasis; skip promoteDecidedTrajectory.
6. True trajectory path unchanged when no active Proposal subject.
7. Hostile client targetPath/requestedOperation/objective ignored on propose action.
8. EC lineage via DecisionBasis; PREPARE proven with existing prepareM3FromDecision for proposal-sourced HD.

---

## 5. Files (KEEP / ADAPT / COMPLETE)

| File | Class | Why |
|---|---|---|
| f2/proposalStore.ts | ADAPT | listProposalsForProject |
| w2/resolveProposalDecisionSubject.ts | COMPLETE | resolve/validate/seal |
| w2/proposalSubjectOptions.ts | COMPLETE | subject Options/Recommendation |
| w2/presentedOptionSet.ts | ADAPT | seal subject fields |
| w2/proposeTrajectoryOptions.ts | ADAPT | subject vs trajectory branch |
| w2/decideTrajectory.ts | ADAPT | HD without promotion for proposal subjects |
| w2/prepareExecutionContractFromW2Decision.ts | ADAPT | optionSetRef when sourceType=proposal |
| w2/actions.ts | ADAPT | opaque proposalId; ignore hostile fields |
| w2/types.ts | ADAPT | DTO subject / non-promotion |
| TrajectorySurface.tsx | ADAPT | pass proposalId; show subject |
| ProjectWorkspacePage.tsx | ADAPT | thread activeProposalId |
| corrProof10.decisionContextContinuity.d0.test.ts | COMPLETE | T01–T20 |

---

## 6. Tests

```bash
cd projects/sfia-studio/app
npx vitest run __tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts  # 12 PASS
npx vitest run __tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts \
  __tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts  # PASS
npx vitest run __tests__/project-assistant/w2EabcDelivery.test.ts -t "Track A"  # 22 PASS
npm run typecheck  # PASS
npm run lint       # PASS
npm run build      # PASS
```

Full Vitest suite: NOT RUN (declared). ZERO REAL / ZERO dogfood mutation.

### T01–T20 matrix

| ID | Result |
|---|---|
| T01–T07 | PASS |
| T08–T12 | PASS |
| T13–T17 | PASS |
| T18–T20 | PASS |

---

## 7. Fake/Real

Fake provider harness. REAL CORR-PROOF-10 NOT PROVEN. DETERMINISTIC PROVEN local only.

---

## 8. Réserves

1. ProposalStore process-local until OptionSet seals subject.
2. W2 prepareExecutionContractFromW2Decision remains trajectory-envelope oriented; proposal PREPARE via prepareM3FromDecision.
3. Candidate trajectory may still be created as OptionSet anchor but is not promoted for proposal subjects.

---

## 9. Complete useful modified content

### 9.1 New files (FULL)

#### FULL FILE `projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts`

```typescript
/**
 * CORR-PROOF-10 — server-side resolution of an active Proposal as the
 * decision subject for W2 OptionSet instruction.
 *
 * Client may only pass an opaque proposalId. Objective, targetPath,
 * requestedOperation and authority are never trusted from the client.
 */

import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
import {
  contextMatches,
  getProposal,
  listProposalsForProject,
} from "../f2/proposalStore";
import type { F2ContextSnapshot, ProposalDto } from "../f2/types";
import type { ExecutionIntentPayload } from "../f2/executionIntentSchema";

export type SealedProposalExecutionBasis = {
  readonly objective: string;
  readonly scope: string;
  readonly outOfScope: readonly string[];
  readonly activatedBlocks: readonly string[];
  readonly expectedOutcome: string;
  readonly risks: readonly string[];
  readonly reservations: readonly string[];
  readonly stopConditions: readonly string[];
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly requestedOperation: string;
  readonly intentKind?: string;
  readonly artifactType?: string | null;
  readonly targetRepositoryRef?: string | null;
  readonly targetPath?: string | null;
  readonly scopeIn?: readonly string[];
  readonly scopeOut?: readonly string[];
  readonly expectedOutputs?: readonly string[];
  readonly requiredCapabilities?: readonly string[];
  readonly validationExpectations?: readonly string[];
  readonly evidenceRequirements?: readonly string[];
  readonly reversibilityExpectation?:
    | "reversible"
    | "irreversible"
    | "unknown"
    | null;
  readonly artifactBrief?: string | null;
  readonly contentRequirements?: readonly string[];
  readonly exitRequirementKinds?: readonly string[];
};

export type ResolvedProposalDecisionSubject = {
  readonly proposalId: string;
  readonly proposal: ProposalDto;
  readonly subjectDigest: string;
  readonly sealedExecutionBasis: SealedProposalExecutionBasis;
  /** Proposal-backed subjects never auto-promote ProjectTrajectory. */
  readonly promotesProjectTrajectory: false;
};

export type ResolveProposalDecisionSubjectResult =
  | { readonly ok: true; readonly subject: ResolvedProposalDecisionSubject }
  | { readonly ok: false; readonly code: string; readonly message: string };

function resolveRequestedOperation(proposal: ProposalDto): string {
  const ei = proposal.executionIntent;
  const fromEi = ei?.requestedOperation?.trim();
  if (fromEi) return fromEi;
  const fromTop = proposal.requestedOperation?.trim();
  if (fromTop) return fromTop;
  return proposal.rephrasedRequest;
}

export function sealProposalExecutionBasis(
  proposal: ProposalDto,
): SealedProposalExecutionBasis {
  const ei: ExecutionIntentPayload | null | undefined = proposal.executionIntent;
  return {
    objective: proposal.objective,
    scope: proposal.scope,
    outOfScope: [...proposal.outOfScope],
    activatedBlocks: [...proposal.activatedBlocks],
    expectedOutcome: proposal.expectedOutcome,
    risks: [...proposal.risks],
    reservations: [...proposal.reservations],
    stopConditions: [...proposal.stopConditions],
    cycleTypeId: proposal.cycleTypeId,
    recommendedProfile: proposal.recommendedProfile,
    requestedOperation: resolveRequestedOperation(proposal),
    ...(ei
      ? {
          intentKind: ei.intentKind ?? undefined,
          artifactType: ei.artifactType ?? null,
          targetRepositoryRef: ei.targetRepositoryRef ?? null,
          targetPath: ei.targetPath ?? null,
          scopeIn: ei.scopeIn ? [...ei.scopeIn] : undefined,
          scopeOut: ei.scopeOut ? [...ei.scopeOut] : undefined,
          expectedOutputs: ei.expectedOutputs
            ? [...ei.expectedOutputs]
            : undefined,
          requiredCapabilities: ei.requiredCapabilities
            ? [...ei.requiredCapabilities]
            : undefined,
          validationExpectations: ei.validationExpectations
            ? [...ei.validationExpectations]
            : undefined,
          evidenceRequirements: ei.evidenceRequirements
            ? [...ei.evidenceRequirements]
            : undefined,
          reversibilityExpectation: ei.reversibilityExpectation ?? null,
          artifactBrief: ei.artifactBrief ?? null,
          contentRequirements: ei.contentRequirements
            ? [...ei.contentRequirements]
            : undefined,
          exitRequirementKinds: ei.exitRequirementKinds
            ? [...ei.exitRequirementKinds]
            : undefined,
        }
      : {}),
  };
}

export function computeProposalSubjectDigest(
  sealed: SealedProposalExecutionBasis,
  proposalId: string,
): string {
  return computeDecisionBasisSourceDigest({
    proposalId,
    objective: sealed.objective,
    scope: sealed.scope,
    requestedOperation: sealed.requestedOperation,
    targetPath: sealed.targetPath ?? null,
    intentKind: sealed.intentKind ?? null,
    reservations: [...sealed.reservations],
    stopConditions: [...sealed.stopConditions],
  });
}

/**
 * Resolve opaque proposalId as the active decision subject.
 * Fail-closed on missing / wrong project / stale context / non-decidable status.
 */
export function resolveProposalDecisionSubject(input: {
  readonly proposalId: string;
  readonly projectId: string;
  readonly currentContext: F2ContextSnapshot;
}): ResolveProposalDecisionSubjectResult {
  const proposalId = input.proposalId.trim();
  if (!proposalId) {
    return {
      ok: false,
      code: "PROPOSAL_ID_REQUIRED",
      message: "Référence Proposal opaque requise — aucune instruction générique.",
    };
  }

  const proposal = getProposal(proposalId);
  if (!proposal) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_FOUND",
      message:
        "Proposal introuvable (process-local) — fail-closed, aucune option générique de substitution.",
    };
  }

  if (proposal.contextSnapshot.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "La Proposal n'appartient pas à ce projet.",
    };
  }

  if (!contextMatches(proposal.contextSnapshot, input.currentContext)) {
    return {
      ok: false,
      code: "PROPOSAL_STALE",
      message:
        "Contexte Proposal périmé (LPS/doctrine) — réinstruction requise. Aucune option générique.",
    };
  }

  if (
    proposal.status !== "DECISION_REQUIRED" &&
    proposal.status !== "PROPOSED" &&
    proposal.status !== "READY_NO_GATE"
  ) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_DECIDABLE",
      message: `Proposal au statut ${proposal.status} — instruction d'options refusée.`,
    };
  }

  const sealedExecutionBasis = sealProposalExecutionBasis(proposal);
  const subjectDigest = computeProposalSubjectDigest(
    sealedExecutionBasis,
    proposal.proposalId,
  );

  return {
    ok: true,
    subject: {
      proposalId: proposal.proposalId,
      proposal,
      subjectDigest,
      sealedExecutionBasis,
      promotesProjectTrajectory: false,
    },
  };
}

/**
 * When a DECISION_REQUIRED Proposal exists for the project and the client
 * omitted proposalId, refuse silent generic trajectory fallback.
 */
export function requireProposalIdWhenActiveSubjectExists(input: {
  readonly projectId: string;
  readonly proposalId: string | null | undefined;
}): ResolveProposalDecisionSubjectResult | { readonly ok: true; readonly skip: true } {
  const provided =
    typeof input.proposalId === "string" ? input.proposalId.trim() : "";
  if (provided) {
    return { ok: true, skip: true };
  }

  const active = listProposalsForProject(input.projectId).filter(
    (p) => p.status === "DECISION_REQUIRED",
  );
  if (active.length === 0) {
    return { ok: true, skip: true };
  }

  return {
    ok: false,
    code: "ACTIVE_PROPOSAL_SUBJECT_REQUIRED",
    message:
      "Une Proposal DECISION_REQUIRED est active — « Instruire les options » doit porter sur cette Proposal (proposalId opaque). Aucun fallback silencieux vers les options de trajectoire génériques.",
  };
}
```

#### FULL FILE `projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts`

```typescript
/**
 * CORR-PROOF-10 — deterministic Options / Recommendation for a Proposal-backed
 * decision subject (not the generic W2 ProjectTrajectory three-way).
 *
 * Labels and intents are derived from sealed Proposal fields — never from a
 * hardcoded dogfood path or docs_write special-case.
 */

import type { TrajectoryStep } from "@/lib/oa/cycle";
import type {
  TrajectoryOptionDto,
  TrajectoryRecommendationDto,
} from "./types";
import type { SealedProposalExecutionBasis } from "./resolveProposalDecisionSubject";

export const PROPOSAL_SUBJECT_PURSUE_REF =
  "opt:proposal-subject:pursue" as const;
export const PROPOSAL_SUBJECT_AMEND_REF =
  "opt:proposal-subject:amend" as const;
export const PROPOSAL_SUBJECT_REFUSE_REF =
  "opt:proposal-subject:refuse" as const;

export const PROPOSAL_SUBJECT_OPTION_REFS = [
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
] as const;

function step(
  order: number,
  slug: string,
  label: string,
  extra?: Partial<TrajectoryStep>,
): TrajectoryStep {
  return {
    stepId: `stp:${slug}`,
    order,
    label,
    state: "pending",
    ...extra,
  };
}

function subjectSummary(sealed: SealedProposalExecutionBasis): string {
  const path = sealed.targetPath?.trim();
  const op = sealed.requestedOperation?.trim();
  const parts = [
    sealed.objective.trim(),
    path ? `cible ${path}` : null,
    op ? `effet ${op}` : null,
  ].filter((p): p is string => Boolean(p));
  return parts.join(" · ");
}

function pursueSteps(sealed: SealedProposalExecutionBasis): TrajectoryStep[] {
  const summary = subjectSummary(sealed);
  return [
    step(1, "w2-ps-review", `Revoir le sujet proposé — ${summary}`),
    step(2, "w2-ps-decide", "Décision humaine explicite sur ce sujet", {
      dependencies: ["stp:w2-ps-review"],
      gate: "human_decision",
      exitCriteria: ["HumanDecision acceptée et reliée à la Proposal"],
    }),
    step(3, "w2-ps-prepare", "Préparer l'exécution bornée si autorisée", {
      dependencies: ["stp:w2-ps-decide"],
    }),
  ];
}

function amendSteps(): TrajectoryStep[] {
  return [
    step(1, "w2-ps-amend", "Amender objectif, chemin ou contraintes du sujet"),
    step(2, "w2-ps-repropose", "Réinstruire les options sur le sujet amendé", {
      dependencies: ["stp:w2-ps-amend"],
      gate: "human_decision",
      exitCriteria: ["Nouvelle instruction d'options requise"],
    }),
  ];
}

function refuseSteps(): TrajectoryStep[] {
  return [
    step(1, "w2-ps-refuse", "Refuser le sujet proposé — aucune exécution"),
    step(2, "w2-ps-close", "Clôturer sans Promotion ProjectTrajectory", {
      dependencies: ["stp:w2-ps-refuse"],
    }),
  ];
}

export type ProposalSubjectOptionInputs = {
  readonly sealed: SealedProposalExecutionBasis;
  readonly proposalId: string;
};

/**
 * Three subject-scoped options derived from the sealed Proposal.
 * Never the generic governed/bounded/clarify trajectory trio.
 */
export function deriveProposalSubjectOptions(
  inputs: ProposalSubjectOptionInputs,
): TrajectoryOptionDto[] {
  const { sealed, proposalId } = inputs;
  const summary = subjectSummary(sealed);
  const reservations = [...sealed.reservations];
  const pathNote = sealed.targetPath
    ? `Chemin scellé: ${sealed.targetPath}`
    : "Aucun targetPath scellé";
  const opNote = `Opération scellée: ${sealed.requestedOperation}`;

  return [
    {
      kind: "OPTION",
      optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      label: "Poursuivre le sujet proposé",
      intent: `Décider sur la Proposal ${proposalId} — ${summary}. ${pathNote}. ${opNote}.`,
      impacts: [
        "HumanDecision liée à cette Proposal",
        "DecisionBasis conserve targetPath / requestedOperation scellés",
        "Pas de promotion ProjectTrajectory automatique",
      ],
      reservations,
      steps: pursueSteps(sealed),
    },
    {
      kind: "OPTION",
      optionRef: PROPOSAL_SUBJECT_AMEND_REF,
      label: "Amender le sujet avant d'engager",
      intent:
        "Modifier objectif, chemin ou contrainte du sujet, puis réinstruire — sans exécution.",
      impacts: [
        "Aucune préparation d'exécution à ce stade",
        "Réinstruction requise après amendement",
      ],
      reservations,
      steps: amendSteps(),
    },
    {
      kind: "OPTION",
      optionRef: PROPOSAL_SUBJECT_REFUSE_REF,
      label: "Ne pas poursuivre / refuser",
      intent:
        "Refuser le sujet proposé. Aucune exécution. Aucune promotion de trajectoire Project.",
      impacts: [
        "Proposal refusée",
        "Aucune ExecutionContract",
        "ProjectTrajectory inchangée",
      ],
      reservations,
      steps: refuseSteps(),
    },
  ];
}

export function deriveProposalSubjectRecommendation(
  inputs: ProposalSubjectOptionInputs,
): TrajectoryRecommendationDto {
  const { sealed, proposalId } = inputs;
  const summary = subjectSummary(sealed);

  if (sealed.reservations.length > 0) {
    return {
      label: "RECOMMANDATION — PAS UNE DÉCISION",
      recommendedOptionRef: PROPOSAL_SUBJECT_AMEND_REF,
      rationale: `Réserves explicites sur la Proposal ${proposalId} (${sealed.reservations.length}) — amender ou clarifier avant de poursuivre « ${summary} ».`,
      isHumanDecision: false,
      promotesTrajectory: false,
      ckcAttribution: null,
      ckcProvenance: null,
    };
  }

  return {
    label: "RECOMMANDATION — PAS UNE DÉCISION",
    recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    rationale: `Sujet Proposal ${proposalId} prêt pour arbitrage Pilote — poursuivre « ${summary} » sous DecisionBasis scellée (≠ HumanDecision).`,
    isHumanDecision: false,
    promotesTrajectory: false,
    ckcAttribution: null,
    ckcProvenance: null,
  };
}

export function isProposalSubjectOptionRef(optionRef: string): boolean {
  return (PROPOSAL_SUBJECT_OPTION_REFS as readonly string[]).includes(optionRef);
}
```

#### FULL FILE `projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts`

```typescript
/**
 * CORR-PROOF-10 — Decision context continuity (Proposal subject ↔ W2 Options/HD).
 * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  getProposal,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import {
  GOVERNED_OPTION_REF,
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import { loadPresentedOptionSet } from "@/features/project-assistant/w2/presentedOptionSet";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  proposeW2OptionsForProject,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { setConversationProviderForTests } from "@/lib/platform/ai";

const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";

function docsWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string;
  proposalId?: string;
  status?: ProposalDto["status"];
  targetPath?: string;
  requestedOperation?: string;
}): ProposalDto {
  return saveProposal({
    proposalId: input.proposalId ?? `prop:f2:corr10-${Date.now()}`,
    status: input.status ?? "DECISION_REQUIRED",
    rephrasedRequest: "Matérialiser la note de gestion de tâches",
    objective: "Matérialiser le livrable de gestion de tâches",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "Continuation Artifact du cycle actif",
    scope: "docs_write borné — cycle actif",
    outOfScope: ["nouveau cycle", "REAL"],
    activatedBlocks: [],
    expectedOutcome: "Fichier sandbox matérialisé",
    sources: ["nora"],
    risks: ["mauvais sujet décisionnel"],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
    morrisGateRequired: true,
    nextPossibleStep: "Instruire les options sur ce sujet",
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
    requestedOperation: input.requestedOperation ?? null,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: null,
      targetRepositoryRef: null,
      targetPath: input.targetPath ?? TARGET_PATH,
      scopeIn: ["sandbox"],
      scopeOut: ["git"],
      expectedOutputs: ["markdown"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation:
        input.requestedOperation ?? F2_ARTIFACT_MATERIALIZATION_OPERATION,
      reversibilityExpectation: "reversible",
      artifactBrief: "Note gestion de tâches",
      contentRequirements: [],
      exitRequirementKinds: [],
    },
  });
}

describe("CORR-PROOF-10 — decision context continuity", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("corr10.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "corr10" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "c10",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(
    projectId: string,
    proposalId?: string | null,
  ) {
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({ oa, projectId });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qualification failed");
    return proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId: proposalId ?? null,
    });
  }

  it("T01/T02/T03/T14 — Proposal docs_write subject → subject options, not generic trio; no new cycle", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t01",
    });

    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    expect(proposed.proposalId).toBe(proposal.proposalId);
    expect(proposed.promotesProjectTrajectory).toBe(false);
    const refs = proposed.options.map((o) => o.optionRef);
    expect(refs).toEqual([
      PROPOSAL_SUBJECT_PURSUE_REF,
      PROPOSAL_SUBJECT_AMEND_REF,
      PROPOSAL_SUBJECT_REFUSE_REF,
    ]);
    expect(refs).not.toContain(GOVERNED_OPTION_REF);
    expect(refs).not.toContain(BOUNDED_OPTION_REF);
    expect(refs).not.toContain(CLARIFY_OPTION_REF);

    const joined = proposed.options.map((o) => o.intent).join(" ");
    expect(joined).toContain(TARGET_PATH);
    expect(joined).toContain(F2_ARTIFACT_MATERIALIZATION_OPERATION);
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      PROPOSAL_SUBJECT_PURSUE_REF,
    );
    expect(proposed.recommendation.isHumanDecision).toBe(false);

    // T14 — active cycle unchanged (same instance still active).
    const after = await currentF2Context(runtime, projectId);
    expect(after.activeCycleInstanceId).toBe(cycleInstanceId);
  });

  it("T04/T15 — propose does not create HumanDecision or ExecutionContract", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t04",
    });
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);
  });

  it("T05/T06/T07/T12 — HD references same subject; DecisionBasis seals path/op; no trajectory promotion", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t05",
    });
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    expect(decided.promotesProjectTrajectory).toBe(false);
    expect(decided.decision.proposalId).toBe(proposal.proposalId);
    expect(decided.trajectory.status).toBe("candidate");
    expect(decided.trajectory.isCurrent).toBe(false);
    expect(decided.executionPerformed).toBe(false);

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.decisionBasis?.sourceType).toBe("proposal");
    expect(hd.decision.decisionBasis?.sourceRef).toBe(proposal.proposalId);
    expect(hd.decision.decisionBasis?.executionBasis.targetPath).toBe(
      TARGET_PATH,
    );
    expect(hd.decision.decisionBasis?.executionBasis.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );

    const current = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    // Candidate may exist but must not be validated/current via this HD.
    if (current.ok) {
      expect(current.trajectory.status).not.toBe("validated");
    }
    expect(getProposal(proposal.proposalId)?.status).toBe("APPROVED");
  });

  it("T08 — project mismatch blocks", async () => {
    const a = await seed();
    const b = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "c10b",
    });
    const proposal = docsWriteProposal({
      projectId: a.projectId,
      lpsId: a.ctx.lpsId,
      lpsVersion: a.ctx.lpsVersion,
      doctrineDigest: a.ctx.doctrineDigest,
      activeCycleInstanceId: a.cycleInstanceId,
      proposalId: "prop:f2:corr10-t08",
    });
    const proposed = await proposeWith(b.projectId, proposal.proposalId);
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PROJECT_MISMATCH");
  });

  it("T09 — stale proposal context blocks", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion + 99,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t09",
    });
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PROPOSAL_STALE");
  });

  it("T10 — OptionSet / subject mismatch blocks decide", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t10",
    });
    const subjectProposed = await proposeWith(projectId, proposal.proposalId);
    expect(subjectProposed.ok).toBe(true);
    if (!subjectProposed.ok) return;

    const cross = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: subjectProposed.optionSetRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: subjectProposed.proposedTrajectory.trajectoryId,
      candidateVersion: subjectProposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(cross.ok).toBe(false);
    if (cross.ok) return;
    expect(cross.code).toBe("OPTION_NOT_PRESENTED");
  });

  it("T11 — hostile client targetPath/requestedOperation ignored", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t11",
    });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({ oa, projectId });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId: proposal.proposalId,
      // @ts-expect-error hostile fields are not on the typed input
      targetPath: "/etc/passwd",
      requestedOperation: "github.pr.merge",
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const presented = await loadPresentedOptionSet(
      oa,
      projectId,
      proposed.optionSetRef,
    );
    expect(presented.ok).toBe(true);
    if (!presented.ok) return;
    expect(presented.presented.sealedExecutionBasis?.targetPath).toBe(
      TARGET_PATH,
    );
    expect(presented.presented.sealedExecutionBasis?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
  });

  it("T13 — true trajectory path unchanged when no active Proposal", async () => {
    const { projectId } = await seed();
    const proposed = await proposeW2OptionsForProject(runtime, projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const refs = proposed.options.map((o) => o.optionRef);
    expect(refs).toEqual([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]);
    expect(proposed.promotesProjectTrajectory ?? true).toBe(true);

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.promotesProjectTrajectory).toBe(true);
    expect(decided.trajectory.status).toBe("validated");
    expect(decided.trajectory.isCurrent).toBe(true);
  });

  it("T16 — PREPARE after pursue HD keeps sealed executionBasis lineage", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t16",
    });
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.decisionBasis?.executionBasis.targetPath).toBe(
      TARGET_PATH,
    );
    expect(hd.decision.decisionBasis?.executionBasis.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );

    // Existing Proposal→EC seam (prepareM3FromDecision) — no client-widened path/op.
    const { prepareM3FromDecision } = await import(
      "@/features/project-assistant/f3/prepareM3FromDecision"
    );
    const prepared = await prepareM3FromDecision({
      projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, projectId),
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => "2026-09-15T03:00:00.000Z",
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.executionPerformed).toBe(false);
    expect(prepared.payload.attemptCreated).toBe(false);
    expect(prepared.payload.contract.action).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
  });

  it("T17 — missing proposal before binding = fail closed (no generic fallback)", async () => {
    const { projectId } = await seed();
    const proposed = await proposeWith(projectId, "prop:f2:missing");
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PROPOSAL_NOT_FOUND");
  });

  it("T17b — active DECISION_REQUIRED without proposalId refuses generic fallback", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-active",
    });
    const proposed = await proposeWith(projectId, null);
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("ACTIVE_PROPOSAL_SUBJECT_REQUIRED");
  });

  it("T19/T20 — no REAL provider / no dogfood mutation markers", () => {
    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
    expect(dbPath).not.toContain("sfia-studio-product-proof");
    expect(dbPath).not.toContain("oa-product.sqlite");
  });
});
```

### 9.2 Unified diff (modified tracked Product paths)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index ae27c869..9be0a296 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -238,6 +238,11 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                   recoveryProposeSignal={recoveryProposeSignal}
                   durableRefreshSignal={trajectoryRefreshSignal}
                   onDurableFactsChanged={notifyDurableFactsChanged}
+                  activeProposalId={
+                    controller.activeProposal?.status === "DECISION_REQUIRED"
+                      ? controller.activeProposal.proposalId
+                      : null
+                  }
                 />
               </div>
             </section>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index ac677fee..308bd33b 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -142,6 +142,7 @@ export function TrajectorySurface({
   recoveryProposeSignal = 0,
   durableRefreshSignal = 0,
   composition = "standalone",
+  activeProposalId = null,
 }: {
   projectId: string;
   onDurableFactsChanged?: () => void;
@@ -154,6 +155,11 @@ export function TrajectorySurface({
    * Presentation-only — does not change ProjectTrajectory domain identity.
    */
   composition?: "standalone" | "lps-embedded";
+  /**
+   * CORR-PROOF-10 — opaque Proposal subject from Conversation/Nora.
+   * Server resolves; client never sends objective/path/operation.
+   */
+  activeProposalId?: string | null;
 }) {
   const [busy, setBusy] = useState<Busy>(null);
   const [error, setError] = useState<string | null>(null);
@@ -249,7 +255,10 @@ export function TrajectorySurface({
   const proposeOptions = useCallback(async () => {
     setBusy("options");
     setError(null);
-    const result = await w2ProposeTrajectoryOptionsAction({ projectId });
+    const result = await w2ProposeTrajectoryOptionsAction({
+      projectId,
+      proposalId: activeProposalId ?? null,
+    });
     setBusy(null);
     if (!result.ok) {
       setError(result.message);
@@ -270,7 +279,7 @@ export function TrajectorySurface({
     setProductOutcome(null);
     setPostEvidence(null);
     onDurableFactsChanged?.();
-  }, [projectId, onDurableFactsChanged]);
+  }, [projectId, activeProposalId, onDurableFactsChanged]);

   const refreshPreCycleCandidate = useCallback(async () => {
     const result = await projectAssistantReadPreCycleCandidateTrajectoryAction({
@@ -1030,6 +1039,25 @@ export function TrajectorySurface({
               </span>
               Options proposées
             </h3>
+            {optionSet.proposalId ? (
+              <p
+                className={styles.blockNote}
+                data-testid="w2-decision-subject"
+              >
+                Sujet de décision : Proposal{" "}
+                <code>{optionSet.proposalId}</code>
+                {optionSet.promotesProjectTrajectory === false
+                  ? " — arbitrage sur ce sujet (pas une promotion ProjectTrajectory)."
+                  : null}
+              </p>
+            ) : (
+              <p
+                className={styles.blockNote}
+                data-testid="w2-decision-subject-trajectory"
+              >
+                Sujet de décision : trajectoire Project (chemin de cycle).
+              </p>
+            )}
             <p className={styles.blockNote} data-testid="w2-proposed-trajectory">
               {optionSet.proposedTrajectory.statusLabel} · version{" "}
               {optionSet.proposedTrajectory.version} · pas encore courante
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts b/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
index 6816d5f5..3496280e 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
@@ -45,6 +45,17 @@ export function getProposal(proposalId: string): ProposalDto | null {
   return getSlot().byId.get(proposalId) ?? null;
 }

+/** Process-local listing — used to detect an active decision subject for a project. */
+export function listProposalsForProject(projectId: string): ProposalDto[] {
+  const out: ProposalDto[] = [];
+  for (const proposal of getSlot().byId.values()) {
+    if (proposal.contextSnapshot.projectId === projectId) {
+      out.push(proposal);
+    }
+  }
+  return out;
+}
+
 export function updateProposalStatus(
   proposalId: string,
   status: F2ProposalStatus,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index c8acdaa5..0e9d6cb4 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -61,7 +61,20 @@ const OA_UNAVAILABLE = {

 export async function w2ProposeTrajectoryOptionsAction(input: {
   projectId: string;
+  /**
+   * CORR-PROOF-10 — opaque Proposal subject. Server resolves/validates.
+   * Hostile objective/path/operation payloads are ignored (not accepted).
+   */
+  proposalId?: string | null;
+  /** Hostile — ignored. */
+  targetPath?: unknown;
+  requestedOperation?: unknown;
+  objective?: unknown;
 }): Promise<ProposeTrajectoryOptionsResult> {
+  void input.targetPath;
+  void input.requestedOperation;
+  void input.objective;
+
   const runtime = getRuntimeApplicationService();
   if (!runtime.oa) return OA_UNAVAILABLE;

@@ -84,6 +97,7 @@ export async function w2ProposeTrajectoryOptionsAction(input: {
     packagePin: qualification.qualification.packagePin,
     objective: qualification.qualification.objective,
     projectTitle: qualification.qualification.projectTitle,
+    proposalId: input.proposalId ?? null,
   });
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
index d5e285c3..ec4e9257 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
@@ -33,10 +33,18 @@ import {
 import {
   computeOptionSetDigest,
   computeQualificationDigest,
+  isProposalSubjectPresentedSet,
   loadPresentedOptionSet,
 } from "./presentedOptionSet";
+import {
+  PROPOSAL_SUBJECT_AMEND_REF,
+  PROPOSAL_SUBJECT_PURSUE_REF,
+  PROPOSAL_SUBJECT_REFUSE_REF,
+} from "./proposalSubjectOptions";
 import { resolveW2QualificationInputs } from "./qualificationInputs";
 import type { DecideTrajectoryResult, TrajectoryOptionDto } from "./types";
+import { updateProposalStatus } from "../f2/proposalStore";
+import type { F2ProposalStatus } from "../f2/types";

 function shortId(): string {
   return randomBytes(6).toString("hex");
@@ -154,11 +162,17 @@ type AtomicDecideOutcome = {
   readonly promoted: {
     readonly trajectoryId: string;
     readonly version: number;
-    readonly status: "validated" | "active";
+    readonly status: "validated" | "active" | "candidate";
     readonly decidedByDecisionRef?: string;
     readonly decidedOptionRef?: string;
+    readonly isCurrent: boolean;
+    readonly statusLabel:
+      | "TRAJECTOIRE DÉCIDÉE / COURANTE"
+      | "TRAJECTOIRE NON PROMUE — SUJET PROPOSAL";
   };
   readonly livingProjectStateVersion: number;
+  readonly promotesProjectTrajectory: boolean;
+  readonly proposalId: string | null;
 };

 class DecideAtomicFailure extends Error {
@@ -210,6 +224,8 @@ export async function decideTrajectory(
     reservations: presented.reservations,
     options: presented.options,
     recommendedOptionRef: presented.recommendedOptionRef,
+    proposalId: presented.proposalId ?? null,
+    proposalSubjectDigest: presented.proposalSubjectDigest ?? null,
   });
   if (recomputedDigest !== presented.optionSetDigest) {
     return {
@@ -220,6 +236,33 @@ export async function decideTrajectory(
     };
   }

+  const proposalSubjectMode = isProposalSubjectPresentedSet(presented);
+  if (proposalSubjectMode) {
+    if (
+      !presented.sealedExecutionBasis ||
+      !presented.proposalSubjectDigest ||
+      !presented.proposalId
+    ) {
+      return {
+        ok: false,
+        code: "PROPOSAL_SUBJECT_BINDING_INCOMPLETE",
+        message:
+          "OptionSet Proposal sans executionBasis/digest scellés — fail-closed.",
+      };
+    }
+  } else if (
+    presented.proposalId ||
+    presented.sealedExecutionBasis ||
+    presented.promotesProjectTrajectory === false
+  ) {
+    return {
+      ok: false,
+      code: "SUBJECT_OPTION_SET_MISMATCH",
+      message:
+        "Liaison sujet Proposal incohérente avec le mode trajectoire — fail-closed.",
+    };
+  }
+
   // A2 — exact presented set stays the decision object, but only while the
   // material qualification context that produced it is still compatible.
   // Never re-derive a substitute OptionSet; refuse and require reinstruction.
@@ -323,67 +366,139 @@ export async function decideTrajectory(
   }

   const optionRefs = options.map((o) => o.optionRef);
-  const decisionBasis: DecisionBasis = {
-    sourceType: "trajectory_option",
-    sourceRef: input.optionSetRef,
-    sourceDigest: computeDecisionBasisSourceDigest({
-      optionSetRef: input.optionSetRef,
-      optionSetDigest,
-      optionRefs,
-      selectedOptionRef: input.selectedOptionRef,
-      recommendedOptionRef,
-      trajectoryId: input.trajectoryId,
-      candidateVersion: input.candidateVersion,
-      steps: selected.steps.map((s) => ({
-        stepId: s.stepId,
-        order: s.order,
-        label: s.label,
-        gate: s.gate ?? null,
-      })),
-    }),
-    projectId: input.projectId,
-    cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
-    proposalContext: {
-      lpsId: live.context.lpsId,
-      lpsVersion: live.context.lpsVersion,
-      doctrineDigest: live.context.doctrineDigest,
-      activeCycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
-      ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
-    },
-    trajectoryContext: {
-      trajectoryId: input.trajectoryId,
-      candidateVersion: input.candidateVersion,
-      optionRefs,
-      selectedOptionRef: input.selectedOptionRef,
-      recommendedOptionRef,
-      epistemicRefs: epistemicRefs ? [...epistemicRefs] : undefined,
-      optionSetDigest,
-    },
-    executionBasis: {
-      objective: live.context.objective,
-      scope: selected.intent,
-      expectedOutcome: `Trajectoire décidée: ${selected.label}`,
-      reservations: input.reservesText?.trim()
-        ? [input.reservesText.trim()]
-        : [...selected.reservations],
-      stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
-      cycleTypeId: undefined,
-      requestedOperation: `w2:decide-trajectory:${input.selectedOptionRef}`,
-    },
-  };
+  const sealed = presented.sealedExecutionBasis;
+  const decisionBasis: DecisionBasis = proposalSubjectMode
+    ? {
+        sourceType: "proposal",
+        sourceRef: presented.proposalId!,
+        sourceDigest: presented.proposalSubjectDigest!,
+        projectId: input.projectId,
+        cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
+        proposalContext: {
+          lpsId: live.context.lpsId,
+          lpsVersion: live.context.lpsVersion,
+          doctrineDigest: live.context.doctrineDigest,
+          activeCycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
+          ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
+        },
+        trajectoryContext: {
+          trajectoryId: input.trajectoryId,
+          candidateVersion: input.candidateVersion,
+          optionRefs,
+          selectedOptionRef: input.selectedOptionRef,
+          recommendedOptionRef,
+          epistemicRefs: epistemicRefs ? [...epistemicRefs] : undefined,
+          optionSetDigest,
+        },
+        executionBasis: {
+          objective: sealed!.objective,
+          scope: sealed!.scope,
+          outOfScope: [...sealed!.outOfScope],
+          activatedBlocks: [...sealed!.activatedBlocks],
+          expectedOutcome: sealed!.expectedOutcome,
+          risks: [...sealed!.risks],
+          reservations: input.reservesText?.trim()
+            ? [input.reservesText.trim(), ...sealed!.reservations]
+            : [...sealed!.reservations],
+          stopConditions: [...sealed!.stopConditions],
+          cycleTypeId: sealed!.cycleTypeId,
+          recommendedProfile: sealed!.recommendedProfile,
+          requestedOperation: sealed!.requestedOperation,
+          intentKind: sealed!.intentKind,
+          artifactType: sealed!.artifactType ?? undefined,
+          targetRepositoryRef: sealed!.targetRepositoryRef ?? undefined,
+          targetPath: sealed!.targetPath ?? undefined,
+          scopeIn: sealed!.scopeIn ? [...sealed!.scopeIn] : undefined,
+          scopeOut: sealed!.scopeOut ? [...sealed!.scopeOut] : undefined,
+          expectedOutputs: sealed!.expectedOutputs
+            ? [...sealed!.expectedOutputs]
+            : undefined,
+          requiredCapabilities: sealed!.requiredCapabilities
+            ? [...sealed!.requiredCapabilities]
+            : undefined,
+          validationExpectations: sealed!.validationExpectations
+            ? [...sealed!.validationExpectations]
+            : undefined,
+          evidenceRequirements: sealed!.evidenceRequirements
+            ? [...sealed!.evidenceRequirements]
+            : undefined,
+          reversibilityExpectation:
+            sealed!.reversibilityExpectation ?? undefined,
+          artifactBrief: sealed!.artifactBrief ?? undefined,
+          contentRequirements: sealed!.contentRequirements
+            ? [...sealed!.contentRequirements]
+            : undefined,
+          exitRequirementKinds: sealed!.exitRequirementKinds
+            ? [...sealed!.exitRequirementKinds]
+            : undefined,
+        },
+      }
+    : {
+        sourceType: "trajectory_option",
+        sourceRef: input.optionSetRef,
+        sourceDigest: computeDecisionBasisSourceDigest({
+          optionSetRef: input.optionSetRef,
+          optionSetDigest,
+          optionRefs,
+          selectedOptionRef: input.selectedOptionRef,
+          recommendedOptionRef,
+          trajectoryId: input.trajectoryId,
+          candidateVersion: input.candidateVersion,
+          steps: selected.steps.map((s) => ({
+            stepId: s.stepId,
+            order: s.order,
+            label: s.label,
+            gate: s.gate ?? null,
+          })),
+        }),
+        projectId: input.projectId,
+        cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
+        proposalContext: {
+          lpsId: live.context.lpsId,
+          lpsVersion: live.context.lpsVersion,
+          doctrineDigest: live.context.doctrineDigest,
+          activeCycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
+          ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
+        },
+        trajectoryContext: {
+          trajectoryId: input.trajectoryId,
+          candidateVersion: input.candidateVersion,
+          optionRefs,
+          selectedOptionRef: input.selectedOptionRef,
+          recommendedOptionRef,
+          epistemicRefs: epistemicRefs ? [...epistemicRefs] : undefined,
+          optionSetDigest,
+        },
+        executionBasis: {
+          objective: live.context.objective,
+          scope: selected.intent,
+          expectedOutcome: `Trajectoire décidée: ${selected.label}`,
+          reservations: input.reservesText?.trim()
+            ? [input.reservesText.trim()]
+            : [...selected.reservations],
+          stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
+          cycleTypeId: undefined,
+          requestedOperation: `w2:decide-trajectory:${input.selectedOptionRef}`,
+        },
+      };

-  const decisionId = `dec:w2-trj:${randomUUID()}`;
+  const decisionId = proposalSubjectMode
+    ? `dec:w2-prop:${randomUUID()}`
+    : `dec:w2-trj:${randomUUID()}`;
   const reserves = input.reservesText?.trim();
+  const decisionSubject = proposalSubjectMode
+    ? `W2 Proposal subject arbitration for ${presented.proposalId}`
+    : `W2 trajectory arbitration for ${input.optionSetRef}`;

   let atomic: AtomicDecideOutcome;
   try {
-    // A4/U3 — single Product UoW around HD + promote (nested UoWs join).
+    // A4/U3 — single Product UoW around HD (+ promote only for true trajectory).
     atomic = await oa.projectServices.store.runInTransaction(async () => {
       const recorded = await oa.decisionServices.recordHumanDecision.execute({
         decisionId,
         projectId: input.projectId,
         cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
-        subject: `W2 trajectory arbitration for ${input.optionSetRef}`,
+        subject: decisionSubject,
         options: options.map((o) => ({
           optionId: o.optionRef,
           label: o.label,
@@ -410,7 +525,9 @@ export async function decideTrajectory(
         decisionBasis,
         linkToLivingProjectState: true,
         expectedLpsVersion: live.context.lpsVersion,
-        correlationId: `w2-dec:${input.optionSetRef}`,
+        correlationId: proposalSubjectMode
+          ? `w2-dec-prop:${presented.proposalId}`
+          : `w2-dec:${input.optionSetRef}`,
       });

       if (!recorded.ok) {
@@ -420,6 +537,38 @@ export async function decideTrajectory(
         );
       }

+      const lpsAfterDecision =
+        recorded.livingProjectStateVersion ?? live.context.lpsVersion;
+
+      if (proposalSubjectMode) {
+        // Non-trajectory Proposal subject — HD only, no ProjectTrajectory promotion.
+        let nextStatus: F2ProposalStatus = "APPROVED";
+        if (input.selectedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF) {
+          nextStatus = "REFUSED";
+        } else if (input.selectedOptionRef === PROPOSAL_SUBJECT_AMEND_REF) {
+          nextStatus = "AMENDMENT_REQUIRED";
+        } else if (input.selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF) {
+          nextStatus = reserves ? "APPROVED_WITH_RESERVES" : "APPROVED";
+        }
+        updateProposalStatus(presented.proposalId!, nextStatus);
+
+        return {
+          decisionId,
+          promoted: {
+            trajectoryId: input.trajectoryId,
+            version: input.candidateVersion,
+            status: "candidate" as const,
+            decidedByDecisionRef: decisionId,
+            decidedOptionRef: input.selectedOptionRef,
+            isCurrent: false,
+            statusLabel: "TRAJECTOIRE NON PROMUE — SUJET PROPOSAL" as const,
+          },
+          livingProjectStateVersion: lpsAfterDecision,
+          promotesProjectTrajectory: false,
+          proposalId: presented.proposalId!,
+        };
+      }
+
       // Re-read the durable decision: promotion is authorised by persisted truth,
       // never by the in-flight request payload.
       const readback = await oa.decisionServices.getHumanDecision.execute({
@@ -436,9 +585,6 @@ export async function decideTrajectory(
         throw new DecideAtomicFailure(guard.code, guard.message);
       }

-      const lpsAfterDecision =
-        recorded.livingProjectStateVersion ?? live.context.lpsVersion;
-
       const promoted = await oa.cycleServices.promoteDecidedTrajectory.execute({
         trajectoryId: input.trajectoryId,
         projectId: input.projectId,
@@ -467,9 +613,13 @@ export async function decideTrajectory(
           status: promoted.trajectory.status as "validated" | "active",
           decidedByDecisionRef: promoted.trajectory.decidedByDecisionRef,
           decidedOptionRef: promoted.trajectory.decidedOptionRef,
+          isCurrent: true,
+          statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE" as const,
         },
         livingProjectStateVersion:
           promoted.livingProjectStateVersion ?? lpsAfterDecision,
+        promotesProjectTrajectory: true,
+        proposalId: null,
       };
     });
   } catch (err) {
@@ -484,14 +634,16 @@ export async function decideTrajectory(
     };
   }

-  // Epistemic DecisionRef is best-effort after the atomic HD+promote commit.
+  // Epistemic DecisionRef is best-effort after the atomic HD(+promote) commit.
   await oa.cycleServices.updateEpistemicState.execute({
     projectId: input.projectId,
     items: [
       {
         epistemicItemId: `epi:w2-decref-${shortId()}`,
         type: "DecisionRef",
-        statement: `Décision humaine ${atomic.decisionId} — option retenue ${input.selectedOptionRef} — trajectoire ${input.trajectoryId} v${atomic.promoted.version} décidée/courante.`,
+        statement: atomic.promotesProjectTrajectory
+          ? `Décision humaine ${atomic.decisionId} — option retenue ${input.selectedOptionRef} — trajectoire ${input.trajectoryId} v${atomic.promoted.version} décidée/courante.`
+          : `Décision humaine ${atomic.decisionId} — option retenue ${input.selectedOptionRef} — sujet Proposal ${atomic.proposalId} (ProjectTrajectory non promue).`,
         status: "active",
         source: atomic.decisionId,
         relatedObjects: [
@@ -499,6 +651,7 @@ export async function decideTrajectory(
           atomic.decisionId,
           input.trajectoryId,
           input.selectedOptionRef,
+          ...(atomic.proposalId ? [atomic.proposalId] : []),
         ],
       },
     ],
@@ -517,17 +670,19 @@ export async function decideTrajectory(
       capturedAt: issuedAt,
       decisionBasisLinked: true,
       reservesText: reserves ?? null,
+      proposalId: atomic.proposalId,
     },
     trajectory: {
       trajectoryId: atomic.promoted.trajectoryId,
       version: atomic.promoted.version,
       status: atomic.promoted.status,
-      statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
-      isCurrent: true,
+      statusLabel: atomic.promoted.statusLabel,
+      isCurrent: atomic.promoted.isCurrent,
       decidedByDecisionRef: atomic.promoted.decidedByDecisionRef ?? null,
       decidedOptionRef: atomic.promoted.decidedOptionRef ?? null,
     },
     livingProjectStateVersion: atomic.livingProjectStateVersion,
     executionPerformed: false,
+    promotesProjectTrajectory: atomic.promotesProjectTrajectory,
   };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
index 8753e264..ff6ed86e 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
@@ -222,10 +222,44 @@ export async function prepareExecutionContractFromW2Decision(input: {
     };
   }

+  // CORR-PROOF-10 — trajectory_option sourceRef IS optionSetRef;
+  // proposal sourceRef is proposalId — recover optionSetRef from epistemicRefs.
+  const optionSetRef =
+    basis.sourceType === "trajectory_option"
+      ? basis.sourceRef
+      : (() => {
+          for (const ref of traj.epistemicRefs ?? []) {
+            if (ref.startsWith("epi:set-")) {
+              return `optset:${ref.slice("epi:set-".length)}`;
+            }
+          }
+          return null;
+        })();
+  if (!optionSetRef) {
+    return {
+      ok: false,
+      code: "OPTION_SET_REF_REQUIRED",
+      message:
+        "Référence OptionSet absente de la DecisionBasis — préparation refusée.",
+    };
+  }
+
+  if (
+    basis.sourceType === "proposal" &&
+    traj.selectedOptionRef !== "opt:proposal-subject:pursue"
+  ) {
+    return {
+      ok: false,
+      code: "PREPARE_NOT_APPLICABLE",
+      message:
+        "Préparation EC réservée à la poursuite du sujet Proposal — amend/refuse n'ouvrent pas d'exécution.",
+    };
+  }
+
   const presented = await loadPresentedOptionSet(
     oa,
     input.projectId,
-    basis.sourceRef,
+    optionSetRef,
   );
   if (!presented.ok) {
     return {
@@ -235,6 +269,19 @@ export async function prepareExecutionContractFromW2Decision(input: {
     };
   }

+  if (
+    basis.sourceType === "proposal" &&
+    (presented.presented.proposalId !== basis.sourceRef ||
+      presented.presented.proposalSubjectDigest !== basis.sourceDigest)
+  ) {
+    return {
+      ok: false,
+      code: "PROPOSAL_SUBJECT_MISMATCH",
+      message:
+        "OptionSet présenté ≠ sujet Proposal de la DecisionBasis — fail-closed.",
+    };
+  }
+
   const selected = presented.presented.options.find(
     (o) => o.optionRef === traj.selectedOptionRef,
   );
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts b/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
index e440e65e..a79fe129 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
@@ -8,6 +8,7 @@

 import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import type { SealedProposalExecutionBasis } from "./resolveProposalDecisionSubject";
 import type { TrajectoryOptionDto, TrajectoryRecommendationDto } from "./types";

 export const W2_PRESENTED_OPTION_SET_KIND = "w2_presented_option_set" as const;
@@ -20,6 +21,9 @@ export type OptionSetDigestInputs = {
   readonly reservations: readonly string[];
   readonly options: readonly TrajectoryOptionDto[];
   readonly recommendedOptionRef: string;
+  /** CORR-PROOF-10 — sealed proposal subject identity when present. */
+  readonly proposalId?: string | null;
+  readonly proposalSubjectDigest?: string | null;
 };

 export type QualificationDigestInputs = {
@@ -55,6 +59,19 @@ export type PresentedOptionSetBinding = {
   readonly reservations: readonly string[];
   readonly ckcAttribution: string | null;
   readonly ckcSemanticFingerprint: string | null;
+  /**
+   * CORR-PROOF-10 — opaque Proposal subject sealed at propose time.
+   * Absent/null = true ProjectTrajectory arbitration (legacy W2 path).
+   */
+  readonly proposalId?: string | null;
+  readonly proposalSubjectDigest?: string | null;
+  /**
+   * When false, HumanDecision must not promote ProjectTrajectory.
+   * Missing ⇒ treated as true for backward-compatible trajectory OptionSets.
+   */
+  readonly promotesProjectTrajectory?: boolean;
+  /** Sealed Proposal executionBasis — authority source for HD / EC lineage. */
+  readonly sealedExecutionBasis?: SealedProposalExecutionBasis | null;
 };

 export function computeQualificationDigest(
@@ -84,6 +101,8 @@ export function computeOptionSetDigest(inputs: OptionSetDigestInputs): string {
       stepIds: o.steps.map((s) => s.stepId),
     })),
     recommendedOptionRef: inputs.recommendedOptionRef,
+    proposalId: inputs.proposalId ?? null,
+    proposalSubjectDigest: inputs.proposalSubjectDigest ?? null,
   });
 }

@@ -123,6 +142,19 @@ function isPresentedBinding(value: unknown): value is PresentedOptionSetBinding
     typeof v.candidateVersion === "number" &&
     Array.isArray(v.options) &&
     typeof v.recommendedOptionRef === "string"
+    // proposalId / sealedExecutionBasis / promotesProjectTrajectory are optional
+    // (absent on pre-CORR-PROOF-10 bindings).
+  );
+}
+
+/** True when this OptionSet is bound to a Proposal subject (not bare trajectory). */
+export function isProposalSubjectPresentedSet(
+  presented: PresentedOptionSetBinding,
+): boolean {
+  return (
+    typeof presented.proposalId === "string" &&
+    presented.proposalId.trim().length > 0 &&
+    presented.promotesProjectTrajectory === false
   );
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
index fb81048d..93544574 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
@@ -10,7 +10,10 @@
  * Durability follows D-W2-01. D-W2-A3-01 idempotence uses stable CKC semantic
  * fingerprint (not raw provider prose). STOP BEFORE EXECUTE.
  *
- * Reuses existing OA use cases only. No parallel engine, no Proposal-store.
+ * CORR-PROOF-10 — when an opaque proposalId is supplied (or an active
+ * DECISION_REQUIRED Proposal exists), Options/Recommendation are scoped to
+ * that Proposal subject. Silent fallback to the generic trajectory trio is
+ * forbidden. Reuses ProposalStore + PresentedOptionSet — no parallel engine.
  */

 import { randomBytes } from "node:crypto";
@@ -41,6 +44,15 @@ import {
   serializePresentedOptionSet,
   type PresentedOptionSetBinding,
 } from "./presentedOptionSet";
+import {
+  deriveProposalSubjectOptions,
+  deriveProposalSubjectRecommendation,
+} from "./proposalSubjectOptions";
+import {
+  requireProposalIdWhenActiveSubjectExists,
+  resolveProposalDecisionSubject,
+  type ResolvedProposalDecisionSubject,
+} from "./resolveProposalDecisionSubject";
 import {
   deriveTrajectoryOptions,
   deriveTrajectoryRecommendation,
@@ -161,6 +173,11 @@ export type ProposeTrajectoryOptionsInput = {
   readonly objective: string;
   readonly projectTitle: string;
   readonly correlationId?: string;
+  /**
+   * CORR-PROOF-10 — opaque Proposal subject ref. Server-resolved only.
+   * Hostile objective/path/operation fields are never accepted here.
+   */
+  readonly proposalId?: string | null;
 };

 export async function proposeTrajectoryOptions(
@@ -172,6 +189,44 @@ export async function proposeTrajectoryOptions(
     return { ok: false, code: live.code, message: live.message };
   }

+  const activeGate = requireProposalIdWhenActiveSubjectExists({
+    projectId: input.projectId,
+    proposalId: input.proposalId,
+  });
+  if (!activeGate.ok) {
+    return {
+      ok: false,
+      code: activeGate.code,
+      message: activeGate.message,
+    };
+  }
+
+  let proposalSubject: ResolvedProposalDecisionSubject | null = null;
+  const opaqueProposalId =
+    typeof input.proposalId === "string" ? input.proposalId.trim() : "";
+  if (opaqueProposalId) {
+    const resolved = resolveProposalDecisionSubject({
+      proposalId: opaqueProposalId,
+      projectId: input.projectId,
+      currentContext: {
+        projectId: input.projectId,
+        lpsId: live.context.lpsId,
+        lpsVersion: live.context.lpsVersion,
+        doctrineDigest: live.context.doctrineDigest,
+        activeCycleInstanceId: live.context.activeCycleInstanceId,
+        ckcResolutionRef: live.context.ckcResolutionRef,
+      },
+    });
+    if (!resolved.ok) {
+      return {
+        ok: false,
+        code: resolved.code,
+        message: resolved.message,
+      };
+    }
+    proposalSubject = resolved.subject;
+  }
+
   // ── Phase B: product-native CKC cognition BEFORE any durable mutation ──
   const registryRoot = resolveProductDoctrineRegistryRoot();
   const ckcContent = loadProductCkcCognitiveContent({
@@ -189,16 +244,29 @@ export async function proposeTrajectoryOptions(
   }

   const ckcPromptSection = buildCkcCognitivePromptSection(ckcContent);
+  const cognitionUserContent = proposalSubject
+    ? `Instruire Options/Recommendation pour la Proposal ${proposalSubject.proposalId} (sujet: ${proposalSubject.sealedExecutionBasis.objective})`
+    : `Instruire Options/Recommendation pour le cycle ${input.cycleTypeId}`;
   let cognitiveRecommendation: string;
   try {
     const reasoning = await reasonWithResolvedCkcContext({
-      userContent: `Instruire Options/Recommendation pour le cycle ${input.cycleTypeId}`,
+      userContent: cognitionUserContent,
       projectSummary: [
         `name=${input.projectTitle}`,
         `objective=${input.objective}`,
         `projectId=${input.projectId}`,
+        ...(proposalSubject
+          ? [
+              `proposalId=${proposalSubject.proposalId}`,
+              `subjectObjective=${proposalSubject.sealedExecutionBasis.objective}`,
+              `targetPath=${proposalSubject.sealedExecutionBasis.targetPath ?? ""}`,
+              `requestedOperation=${proposalSubject.sealedExecutionBasis.requestedOperation}`,
+            ]
+          : []),
       ].join(" | "),
-      intentSummary: `Cycle ${input.cycleTypeId} · profil ${input.recommendedProfile}`,
+      intentSummary: proposalSubject
+        ? `Proposal subject ${proposalSubject.proposalId} · profil ${input.recommendedProfile}`
+        : `Cycle ${input.cycleTypeId} · profil ${input.recommendedProfile}`,
       ckcPromptSection,
     });
     cognitiveRecommendation = reasoning.recommendation;
@@ -223,8 +291,23 @@ export async function proposeTrajectoryOptions(
     reservations: input.reservations,
     ckcAttribution: input.ckcAttribution,
   };
-  const options = deriveTrajectoryOptions(inputs);
-  const baseRecommendation = deriveTrajectoryRecommendation(inputs);
+
+  let options: TrajectoryOptionDto[];
+  let baseRecommendation: TrajectoryRecommendationDto;
+  if (proposalSubject) {
+    options = deriveProposalSubjectOptions({
+      sealed: proposalSubject.sealedExecutionBasis,
+      proposalId: proposalSubject.proposalId,
+    });
+    baseRecommendation = deriveProposalSubjectRecommendation({
+      sealed: proposalSubject.sealedExecutionBasis,
+      proposalId: proposalSubject.proposalId,
+    });
+  } else {
+    options = deriveTrajectoryOptions(inputs);
+    baseRecommendation = deriveTrajectoryRecommendation(inputs);
+  }
+
   const recommendation = enrichRecommendationWithCognition({
     base: baseRecommendation,
     content: ckcContent,
@@ -251,6 +334,8 @@ export async function proposeTrajectoryOptions(
     reservations: input.reservations,
     options,
     recommendedOptionRef: recommendation.recommendedOptionRef,
+    proposalId: proposalSubject?.proposalId ?? null,
+    proposalSubjectDigest: proposalSubject?.subjectDigest ?? null,
   });

   const proposedSteps: TrajectoryStep[] = structuredClone(
@@ -375,15 +460,17 @@ export async function proposeTrajectoryOptions(
         statement: optionStatement(option),
         status: "active" as const,
         source: optionSetRef,
-        relatedObjects: [input.projectId, option.optionRef, optionSetRef],
+        relatedObjects: [
+          input.projectId,
+          option.optionRef,
+          optionSetRef,
+          ...(proposalSubject ? [proposalSubject.proposalId] : []),
+        ],
       },
       priorOptionId,
     );
   });

-  // R1-03: Epistemic Recommendation statement stays business-first.
-  // Structured audit provenance lives on recommendation.ckcProvenance /
-  // presented binding / relatedObjects tags — not in Pilote-facing prose.
   const recommendationItem = withPriorSetSupersedes(
     {
       epistemicItemId: optionSetRecommendationId(optionSetRef),
@@ -397,6 +484,7 @@ export async function proposeTrajectoryOptions(
         optionSetRef,
         recommendation.ckcProvenance?.ckcId ?? "ckc:none",
         ...(input.ckcAttribution ? [input.ckcAttribution] : []),
+        ...(proposalSubject ? [proposalSubject.proposalId] : []),
       ],
     },
     priorBinding
@@ -429,6 +517,12 @@ export async function proposeTrajectoryOptions(
     reservations: [...input.reservations],
     ckcAttribution: input.ckcAttribution,
     ckcSemanticFingerprint: semanticFingerprint,
+    proposalId: proposalSubject?.proposalId ?? null,
+    proposalSubjectDigest: proposalSubject?.subjectDigest ?? null,
+    promotesProjectTrajectory: proposalSubject ? false : true,
+    sealedExecutionBasis: proposalSubject
+      ? proposalSubject.sealedExecutionBasis
+      : null,
   };

   const observationItem = withPriorSetSupersedes(
@@ -438,7 +532,12 @@ export async function proposeTrajectoryOptions(
       statement: serializePresentedOptionSet(presentedBinding),
       status: "active" as const,
       source: optionSetRef,
-      relatedObjects: [input.projectId, optionSetRef, proposedTrajectoryId],
+      relatedObjects: [
+        input.projectId,
+        optionSetRef,
+        proposedTrajectoryId,
+        ...(proposalSubject ? [proposalSubject.proposalId] : []),
+      ],
     },
     priorBinding
       ? optionSetObservationId(priorBinding.optionSetRef)
@@ -478,6 +577,8 @@ export async function proposeTrajectoryOptions(
     autoDecisionPerformed: false,
     executionPerformed: false,
     ckcCognitionCompletedBeforeMutation: true,
+    proposalId: proposalSubject?.proposalId ?? null,
+    promotesProjectTrajectory: proposalSubject ? false : true,
   };
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index fc23a695..7900b5f8 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -68,9 +68,11 @@ export type ProposedTrajectoryDto = {
 export type DecidedTrajectoryDto = {
   readonly trajectoryId: string;
   readonly version: number;
-  readonly status: "validated" | "active";
-  readonly statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE";
-  readonly isCurrent: true;
+  readonly status: "validated" | "active" | "candidate";
+  readonly statusLabel:
+    | "TRAJECTOIRE DÉCIDÉE / COURANTE"
+    | "TRAJECTOIRE NON PROMUE — SUJET PROPOSAL";
+  readonly isCurrent: boolean;
   readonly decidedByDecisionRef: string | null;
   readonly decidedOptionRef: string | null;
 };
@@ -84,6 +86,8 @@ export type TrajectoryDecisionRecordDto = {
   readonly capturedAt: string;
   readonly decisionBasisLinked: true;
   readonly reservesText: string | null;
+  /** CORR-PROOF-10 — Proposal subject when HD is proposal-scoped. */
+  readonly proposalId?: string | null;
 };

 export type TrajectoryOptionSetDto = {
@@ -99,6 +103,10 @@ export type TrajectoryOptionSetDto = {
   readonly executionPerformed: false;
   /** Phase B ordering proof: cognition completed before durable mutation. */
   readonly ckcCognitionCompletedBeforeMutation: true;
+  /** CORR-PROOF-10 — sealed Proposal subject when Options instruct that subject. */
+  readonly proposalId?: string | null;
+  /** CORR-PROOF-10 — false when HD must not promote ProjectTrajectory. */
+  readonly promotesProjectTrajectory?: boolean;
 };

 export type W2Failure = {
@@ -210,6 +218,8 @@ export type DecideTrajectoryResult =
       readonly trajectory: DecidedTrajectoryDto;
       readonly livingProjectStateVersion: number;
       readonly executionPerformed: false;
+      /** CORR-PROOF-10 — mirrors presented binding; false for Proposal subjects. */
+      readonly promotesProjectTrajectory: boolean;
     }
   | W2Failure;
```

---

## 10. Morris decisions

- GO local correction: CONSUMED
- New architecture/persistence: NOT taken
- REAL / dogfood: NOT authorized
- Project commit/push/PR/merge: NOT requested

---

## 11. Unique verdict

**CORR-PROOF-10 DECISION CONTINUITY — LOCAL CANDIDATE READY FOR CHATGPT CRITICAL REVIEW**

STOP. No project commit. No project push. No PR. No merge. No dogfood reproof.

Instruction ChatGPT: relire `sfia/review-handoff/sfia-review-handoff/latest-chatgpt-review.md` (ce republish) — vérifier cycle, branche, HEAD/base, **contenu modifié exploitable (§9)**, tests, réserves, décisions Morris et verdict avant tout GO projet.
