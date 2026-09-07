# ChatGPT Review Pack — CORR-PROOF-04 RECOVERY + STATUS-AWARE DELIVERY

1. UTC timestamp: `2026-09-07T06:00:35Z`
2. Cycle ID: `SFIA-STUDIO-PRODUCT-PROOF-CORR-04-RECOVERY-AND-STATUS-AWARE-DELIVERY-01`
3. Morris decisions consumed:
   - GO MORRIS — CORR-PROOF-04 REVIEWED CANDIDATE RECOVERY
   - GO MORRIS — CORR-PROOF-04 OPTION D TARGETED DELIVERY CORRECTION
4. Repo: `mcleland147/sfia-workspace` · baseline `origin/main` = `1f48dd81c870d3337efd5f2d02af6be0d8602b44`
5. Recovery handoff commit `f040fed02c30eed561c4a22f6a6f5913922f18fe` · blob `761aaa088cabfd6a3138f23852059b4a43e90bca` · path `sfia-review-handoff/latest-chatgpt-review.md`
6. Polluted worktree `/Users/morris/Projects/sfia-wt-corr04-d-envelope` — **UNTOUCHED / QUARANTINED** (list-only via `git worktree list --porcelain`).
7. Recovery branch/worktree: `recovery/sfia-studio-proof-corr-04-option-d-ac7376d9` @ `/Users/morris/Projects/sfia-wt-corr04-recovery-ac7376d9`
8. Recovery Git truth: HEAD=`1f48dd81…` at creation CLEAN; staged EMPTY throughout Product mutation.
9. Handoff extraction: `git show f040fed0:sfia-review-handoff/latest-chatgpt-review.md` → `/tmp/corr04-reviewed-handoff.md`; NEW bodies from §16; MODIFIED via `git apply` of §17 unified diffs.
10. Exact 16 recovery paths: see §61 final hashes (same set).
11–15. Recovery individual SHA + manifest:

```
PASS 72087b3d8f0dad96065e8b676bf7c5765ff63303a85a048b1a91fed01323a28a 72087b3d8f0dad96065e8b676bf7c5765ff63303a85a048b1a91fed01323a28a projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
PASS d016620da7e0d6abbd8a7de1766a6a9a0b89467b2e1b21b7ec06b523b753a3c7 d016620da7e0d6abbd8a7de1766a6a9a0b89467b2e1b21b7ec06b523b753a3c7 projects/sfia-studio/app/__tests__/oa/evidence-review/evidenceRepository.test.ts
PASS f243ade9705efd5e4f18f8b08326e8405b360a9cbd103c260ce952d38745572c f243ade9705efd5e4f18f8b08326e8405b360a9cbd103c260ce952d38745572c projects/sfia-studio/app/__tests__/project-assistant/corrProof04.d.hybridContextEnvelope.d0.test.ts
PASS 80a310e8437c4455ccf3f5547868cd3325edf8871a60e3b0c2878cf5c1b24743 80a310e8437c4455ccf3f5547868cd3325edf8871a60e3b0c2878cf5c1b24743 projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
PASS 343703a5dd1918ec344e24a579cd95e054d29b07dbdf29fae0a3155cbe8bbdc8 343703a5dd1918ec344e24a579cd95e054d29b07dbdf29fae0a3155cbe8bbdc8 projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
PASS 2726d7bce5383437dc5db006d79c941e300e3c095e765fbc25df1ed4ba1aec1c 2726d7bce5383437dc5db006d79c941e300e3c095e765fbc25df1ed4ba1aec1c projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
PASS 0e89d17001449cdeee4bc3081caecbfa1d3e94a2a0fcb9f46e6cbba019e30e90 0e89d17001449cdeee4bc3081caecbfa1d3e94a2a0fcb9f46e6cbba019e30e90 projects/sfia-studio/app/features/project-assistant/f2/methodOrientation.ts
PASS d01ca51b02d4eb2a2d37436fd3bde41ddf1b16bbebba4cf12c901c0e68ff2691 d01ca51b02d4eb2a2d37436fd3bde41ddf1b16bbebba4cf12c901c0e68ff2691 projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
PASS 3826939386509c8918d0a84df68a5625ad5e0f1a5f0f282fa6b11414381e5a45 3826939386509c8918d0a84df68a5625ad5e0f1a5f0f282fa6b11414381e5a45 projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
PASS ef3658d9138ee8d7a740ef0b812b1d3923f4df3b71f3b93c54d9300ce6f6d4e7 ef3658d9138ee8d7a740ef0b812b1d3923f4df3b71f3b93c54d9300ce6f6d4e7 projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
PASS 1a3734ae08b719902f384b4e01701f1962cb36bcdf516b4a76529e3bd79aee75 1a3734ae08b719902f384b4e01701f1962cb36bcdf516b4a76529e3bd79aee75 projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceRepository.ts
PASS fda3bf9d861823c12c2ab4266cf64710fee3e64aff516536a85f41dc23df538a fda3bf9d861823c12c2ab4266cf64710fee3e64aff516536a85f41dc23df538a projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts
PASS d7f5df8da401efa4044bd00fac8bbeeb732c0e9c49453acacc2b35837eb6d4ac d7f5df8da401efa4044bd00fac8bbeeb732c0e9c49453acacc2b35837eb6d4ac projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts
PASS 553e6196da5a5bc749ffaac91cab54d11e14e4d61b180e14c169434ea4c48498 553e6196da5a5bc749ffaac91cab54d11e14e4d61b180e14c169434ea4c48498 projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts
PASS 6f003dfe782bbd0de580ad85e9e98d9c2fcafbeecc10e0d20c0226369b63a8c2 6f003dfe782bbd0de580ad85e9e98d9c2fcafbeecc10e0d20c0226369b63a8c2 projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceRepository.ts
PASS 37f2b24a44bfbf6a6417db88a8bbe46daa71df9c42a19eeda7b14e85dcbd804d 37f2b24a44bfbf6a6417db88a8bbe46daa71df9c42a19eeda7b14e85dcbd804d projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts
```

Recovered reviewed manifest SHA256 = `ac7376d95c4fc0bbd2be1baa0570657c31849a0c08abc2edc07b40fdac68c2d7`

16. **RECOVERY PASS before correction** — EXACT REVIEWED CANDIDATE RESTORED
17. Semantic correction before Recovery PASS: **ZERO**

```
# Recovery Verdict
PASS — EXACT REVIEWED CANDIDATE RESTORED
16/16 individual SHA PASS
manifest=ac7376d95c4fc0bbd2be1baa0570657c31849a0c08abc2edc07b40fdac68c2d7
staged=EMPTY
product_commit=NONE
```

18. Domain Decision files read (C1):
   - `lib/oa/decision/domain/types.ts`
   - `lib/oa/decision/domain/invariants.ts`
   - `application/recordHumanDecision.ts` / `supersedeHumanDecision.ts` / `listDecisionHistory.ts`
   - `infrastructure/memoryDecisionRepository.ts`
   - Decision tests (accepted/proposed/required/refused/amended/superseded/revoked/supersession)
19–21. HumanDecision mapping + amended disposition:

# HumanDecision / Evidence domain mapping (CORR-PROOF-04 status-aware)

## HumanDecisionStatus → lifecycle

| Raw status | Lifecycle | Repo evidence | Cognitive consequence |
| --- | --- | --- | --- |
| accepted | CURRENT | `findAcceptedBySubject` filters `status === 'accepted'`; supersede writes replacement as `accepted` | Effective current HD; constrain reasoning; do not reopen as free Option |
| amended | CURRENT | `mw5ProductAuthorityFacts.ts` CONSUMED_HD_STATUSES = accepted\|amended; `resolveMw5ProductAuthorityFromOa` requires accepted\|amended; `isSupersedableStatus` includes amended | Effective consumed HD for authority; treat as current |
| proposed | PENDING | listed in HumanDecisionStatus; supersedable but not accepted; Critical cycle stays proposed (recordHumanDecision comment) | Visible unresolved; not decided/current |
| required | PENDING | supersedable alongside proposed; not accepted | Human decision still required; not GO |
| refused | NON_ACTIVE | supersede rejects prior refused; Confirmation refuse path | Historical; never current GO |
| superseded | NON_ACTIVE | supersede sets prior.status = superseded | Historical provenance only |
| revoked | NON_ACTIVE | supersede rejects prior revoked | Historical; never current GO |

## Presence rule
`decisions.state = PRESENT` means records exist only. Never means all CURRENT.

## Evidence

| Dimension | Values | Cognitive rule |
| --- | --- | --- |
| status | expected, available, verified, incomplete, stale, rejected, superseded, unavailable | raw preserved; stance derived deterministically |
| availability | available, unavailable, unknown | unavailable → NON_SUPPORTING; unknown → UNCERTAIN |
| freshness | fresh, aging, stale, unknown (optional) | stale → WEAKENED; unknown → UNCERTAIN |

PRESENT Evidence ≠ Fact.


22. Evidence domain files read: `lib/oa/evidence-review/domain/types.ts` + lifecycle/verification tests.
23. Evidence lifecycle: status/availability/freshness preserved; stance derived deterministically; PRESENT ≠ Fact.
24. Source authority BEFORE correction (reviewed candidate): blanket Project/LPS/HD/Evidence as factual project authority; PRESENT HD → “respecter ; ne pas rouvrir”.
25. Source authority AFTER correction: CURRENT LPS + CURRENT HD = project authority where applicable; Evidence = epistemic support by status/availability/freshness; CKC = guidance; Conversation = continuity; Trajectory Recommendation ≠ HD.
26. Targeted files changed AFTER Recovery PASS:
   - `features/project-assistant/f2/studioCognitiveContext.ts` (status-aware)
   - `__tests__/project-assistant/studioCognitiveContext.test.ts` (status-aware)
   - `__tests__/project-assistant/corrProof04.d.hybridContextEnvelope.d0.test.ts` (status-aware + A/B/C)
   - `features/project-assistant/f2/ckcCognitiveContext.ts` (W3D-07 Fake causal condensed regression fix within 16-file scope)

27. Full current `studioCognitiveContext.ts`:
```ts
/**
 * CORR-PROOF-04 Option D — Hybrid Context Envelope (composer-first slice).
 *
 * Pure / read-only Studio cognitive context composition for ordinary F1.
 * Assembles authoritative Project/LPS + method/CKC + conditional HD/Evidence/
 * ReviewBundle + conditional ProjectTrajectory when readable.
 *
 * MUST NOT: call a model, score maturity, select trajectory, create HD/Evidence/
 * Cycle/LPS mutations, invent Recommendations, or become a second planner.
 */

import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
import type { ProjectTrajectory } from "@/lib/oa/cycle";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ProjectAssistantContextDto } from "../types";
import type { IntentAnalysisDto } from "./types";
import {
  composeAdvisoryMethodContext,
  type AdvisoryMethodContext,
} from "./methodOrientation";

/** Conservative composition budgets — implementation policy, not doctrine. */
export const STUDIO_COGNITIVE_CONTEXT_BUDGET = Object.freeze({
  maxDecisions: 8,
  maxEvidence: 8,
  maxReviewBundles: 4,
  decisionSubjectChars: 160,
  decisionOptionChars: 120,
  evidenceLabelChars: 120,
  reviewLabelChars: 120,
  trajectoryStepChars: 100,
  maxTrajectorySteps: 6,
});

export type PresenceState = "PRESENT" | "NONE" | "UNAVAILABLE";
export type TrajectoryPresenceState =
  | "PRESENT"
  | "ABSENT"
  | "DEFERRED"
  | "UNAVAILABLE";

export type StudioProjectTruthProjection = {
  readonly projectId: string;
  readonly name: string;
  readonly objective: string;
  readonly context: string;
  readonly constraints: readonly string[];
  readonly criticality: string;
  readonly shortReference: string | null;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly activeCycleInstanceId: string | null;
  readonly doctrineId: string;
  readonly doctrineVersion: string;
  readonly doctrineStatus: string;
};

/**
 * Deterministic cognitive lifecycle for HumanDecision.
 * Derived from existing domain contract only (see domain-mapping.md).
 * PRESENT ≠ CURRENT.
 */
export type DecisionCognitiveLifecycle = "CURRENT" | "PENDING" | "NON_ACTIVE";

/**
 * Domain-derived mapping (CORR-PROOF-04 status-aware):
 * - accepted → CURRENT (findAcceptedBySubject / supersede writes accepted)
 * - amended → CURRENT (MW5 CONSUMED_HD_STATUSES; supersedable like accepted)
 * - proposed | required → PENDING (supersedable but not accepted)
 * - refused | superseded | revoked → NON_ACTIVE (terminal / history)
 */
export function classifyHumanDecisionLifecycle(
  status: HumanDecision["status"],
): DecisionCognitiveLifecycle {
  switch (status) {
    case "accepted":
    case "amended":
      return "CURRENT";
    case "proposed":
    case "required":
      return "PENDING";
    case "refused":
    case "superseded":
    case "revoked":
      return "NON_ACTIVE";
    default: {
      const _exhaustive: never = status;
      void _exhaustive;
      return "NON_ACTIVE";
    }
  }
}

export type StudioDecisionProjection = {
  readonly subject: string;
  readonly selectedOptionLabel: string | null;
  /** Raw domain HumanDecisionStatus — always preserved. */
  readonly status: HumanDecision["status"];
  /** Deterministic cognitive class — never invents beyond domain mapping. */
  readonly lifecycle: DecisionCognitiveLifecycle;
  readonly effectiveAt: string;
  readonly reversible: boolean;
  readonly supersedesPresent: boolean;
};

/**
 * Deterministic epistemic stance from Evidence status/availability/freshness.
 * Does NOT claim which proposition is proven. Presence ≠ Fact.
 */
export type EvidenceEpistemicStance =
  | "STRONGER_SUPPORT"
  | "LIMITED_SUPPORT"
  | "PENDING_SUPPORT"
  | "WEAKENED_SUPPORT"
  | "NON_SUPPORTING"
  | "UNCERTAIN_SUPPORT";

export function classifyEvidenceEpistemicStance(input: {
  status: Evidence["status"];
  availability: Evidence["availability"];
  freshness: Evidence["freshness"] | null | undefined;
}): EvidenceEpistemicStance {
  const { status, availability, freshness } = input;
  if (
    status === "rejected" ||
    status === "superseded" ||
    status === "unavailable" ||
    availability === "unavailable"
  ) {
    return "NON_SUPPORTING";
  }
  if (status === "stale" || freshness === "stale") {
    return "WEAKENED_SUPPORT";
  }
  if (status === "expected") {
    return "PENDING_SUPPORT";
  }
  if (availability === "unknown" || freshness === "unknown") {
    return "UNCERTAIN_SUPPORT";
  }
  if (status === "verified" && availability === "available") {
    return "STRONGER_SUPPORT";
  }
  if (status === "incomplete" || status === "available") {
    return "LIMITED_SUPPORT";
  }
  return "UNCERTAIN_SUPPORT";
}

export type StudioEvidenceProjection = {
  readonly type: string;
  /** Raw EvidenceStatus — always preserved. */
  readonly status: Evidence["status"];
  /** Raw EvidenceAvailability — always preserved. */
  readonly availability: Evidence["availability"];
  /** Raw freshness when present. */
  readonly freshness: Evidence["freshness"] | null;
  readonly sourceKind: string;
  readonly producedAt: string | null;
  /** Deterministic stance — never converts Evidence into Fact. */
  readonly epistemicStance: EvidenceEpistemicStance;
};

export type StudioReviewProjection = {
  readonly status: string;
  readonly evidenceRefCount: number;
  readonly completeness: string;
  readonly supersedesPresent: boolean;
  readonly createdAt: string;
};

export type StudioTrajectoryProjection = {
  readonly status: string;
  readonly version: number;
  readonly stepSummaries: readonly string[];
  readonly decidedByDecisionPresent: boolean;
};

export type StudioCognitiveContext = {
  readonly projectTruth: StudioProjectTruthProjection;
  readonly method: AdvisoryMethodContext;
  readonly decisions: {
    readonly state: PresenceState;
    readonly items: readonly StudioDecisionProjection[];
  };
  readonly evidence: {
    readonly state: PresenceState;
    readonly items: readonly StudioEvidenceProjection[];
  };
  readonly review: {
    readonly state: PresenceState;
    readonly items: readonly StudioReviewProjection[];
  };
  readonly trajectory: {
    readonly state: TrajectoryPresenceState;
    readonly current: StudioTrajectoryProjection | null;
  };
  readonly limits: {
    readonly oaAvailable: boolean;
    readonly truthOutranksConversation: true;
    readonly composerDoesNotScoreMaturity: true;
    readonly composerDoesNotSelectTrajectory: true;
  };
};

function clip(text: string, max: number): string {
  const compact = text.replace(/\s+/g, " ").trim();
  return compact.length <= max ? compact : `${compact.slice(0, max - 1)}…`;
}

function projectDecision(d: HumanDecision): StudioDecisionProjection {
  const selected =
    d.options.find((o) => o.optionId === d.selectedOptionId)?.label ?? null;
  return Object.freeze({
    subject: clip(d.subject, STUDIO_COGNITIVE_CONTEXT_BUDGET.decisionSubjectChars),
    selectedOptionLabel: selected
      ? clip(selected, STUDIO_COGNITIVE_CONTEXT_BUDGET.decisionOptionChars)
      : null,
    status: d.status,
    lifecycle: classifyHumanDecisionLifecycle(d.status),
    effectiveAt: d.effectiveAt,
    reversible: d.reversible,
    supersedesPresent: Boolean(d.supersedes),
  });
}

function projectEvidence(e: Evidence): StudioEvidenceProjection {
  const freshness = e.freshness ?? null;
  return Object.freeze({
    type: e.type,
    status: e.status,
    availability: e.availability,
    freshness,
    sourceKind: e.sourceKind,
    producedAt: e.producedAt ?? null,
    epistemicStance: classifyEvidenceEpistemicStance({
      status: e.status,
      availability: e.availability,
      freshness,
    }),
  });
}

function projectReview(r: ReviewBundle): StudioReviewProjection {
  return Object.freeze({
    status: r.status,
    evidenceRefCount: r.evidenceRefs.length,
    completeness: r.completeness,
    supersedesPresent: Boolean(r.supersedesReviewBundleId),
    createdAt: r.createdAt,
  });
}

function projectTrajectory(t: ProjectTrajectory): StudioTrajectoryProjection {
  const steps = t.steps
    .slice(0, STUDIO_COGNITIVE_CONTEXT_BUDGET.maxTrajectorySteps)
    .map((s) =>
      clip(
        `${s.order}:${s.label}[${s.state}]`,
        STUDIO_COGNITIVE_CONTEXT_BUDGET.trajectoryStepChars,
      ),
    );
  return Object.freeze({
    status: t.status,
    version: t.version,
    stepSummaries: Object.freeze(steps),
    decidedByDecisionPresent: Boolean(t.decidedByDecisionRef),
  });
}

/**
 * Read-only composition. No provider call. No persistence. No Recommendation.
 */
export async function composeStudioCognitiveContext(input: {
  analysis: IntentAnalysisDto;
  project: ProjectAssistantContextDto;
  registryRoot: string;
  truthCContext?: string | null;
  oa: RuntimeOaStack | null;
  activeCycleInstanceId?: string | null;
}): Promise<StudioCognitiveContext> {
  const method = composeAdvisoryMethodContext({
    analysis: input.analysis,
    project: input.project,
    registryRoot: input.registryRoot,
  });

  const contextBody =
    input.truthCContext != null && input.truthCContext !== ""
      ? input.truthCContext
      : input.project.contextSummary;

  const projectTruth: StudioProjectTruthProjection = Object.freeze({
    projectId: input.project.projectId,
    name: input.project.name,
    objective: input.project.objective,
    context: contextBody,
    constraints: Object.freeze([...input.project.constraints]),
    criticality: input.project.criticality,
    shortReference: input.project.shortReference ?? null,
    lpsId: input.project.lpsId,
    lpsVersion: input.project.lpsVersion,
    activeCycleInstanceId:
      input.activeCycleInstanceId ??
      input.project.activeCycleInstanceId ??
      null,
    doctrineId: input.project.doctrineId,
    doctrineVersion: input.project.doctrineVersion,
    doctrineStatus: input.project.doctrineStatus,
  });

  if (!input.oa) {
    return Object.freeze({
      projectTruth,
      method,
      decisions: Object.freeze({ state: "UNAVAILABLE" as const, items: Object.freeze([]) }),
      evidence: Object.freeze({ state: "UNAVAILABLE" as const, items: Object.freeze([]) }),
      review: Object.freeze({ state: "UNAVAILABLE" as const, items: Object.freeze([]) }),
      trajectory: Object.freeze({
        state: "UNAVAILABLE" as const,
        current: null,
      }),
      limits: Object.freeze({
        oaAvailable: false,
        truthOutranksConversation: true as const,
        composerDoesNotScoreMaturity: true as const,
        composerDoesNotSelectTrajectory: true as const,
      }),
    });
  }

  const oa = input.oa;
  const budget = STUDIO_COGNITIVE_CONTEXT_BUDGET;
  const projectId = input.project.projectId;

  let decisionsState: PresenceState = "NONE";
  let decisionItems: StudioDecisionProjection[] = [];
  try {
    const history = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
    });
    if (!history.ok) {
      decisionsState = "UNAVAILABLE";
    } else if (history.decisions.length === 0) {
      decisionsState = "NONE";
    } else {
      decisionsState = "PRESENT";
      const sorted = [...history.decisions].sort((a, b) =>
        b.effectiveAt.localeCompare(a.effectiveAt),
      );
      decisionItems = sorted.slice(0, budget.maxDecisions).map(projectDecision);
    }
  } catch {
    decisionsState = "UNAVAILABLE";
  }

  let evidenceState: PresenceState = "NONE";
  let evidenceItems: StudioEvidenceProjection[] = [];
  try {
    const listed =
      await oa.evidenceReviewServices.repository.listByProject(projectId);
    if (listed.length === 0) {
      evidenceState = "NONE";
    } else {
      evidenceState = "PRESENT";
      evidenceItems = listed.slice(0, budget.maxEvidence).map(projectEvidence);
    }
  } catch {
    evidenceState = "UNAVAILABLE";
  }

  let reviewState: PresenceState = "NONE";
  let reviewItems: StudioReviewProjection[] = [];
  try {
    const listed =
      await oa.evidenceReviewServices.reviewBundleRepository.listByProject(
        projectId,
      );
    if (listed.length === 0) {
      reviewState = "NONE";
    } else {
      reviewState = "PRESENT";
      reviewItems = listed
        .slice(0, budget.maxReviewBundles)
        .map(projectReview);
    }
  } catch {
    reviewState = "UNAVAILABLE";
  }

  let trajectoryState: TrajectoryPresenceState = "ABSENT";
  let trajectoryCurrent: StudioTrajectoryProjection | null = null;
  try {
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    if (traj.ok) {
      trajectoryState = "PRESENT";
      trajectoryCurrent = projectTrajectory(traj.trajectory);
    } else if (traj.error?.detailCode === "TRAJECTORY_NOT_FOUND") {
      trajectoryState = "ABSENT";
    } else {
      trajectoryState = "UNAVAILABLE";
    }
  } catch {
    trajectoryState = "UNAVAILABLE";
  }

  return Object.freeze({
    projectTruth,
    method,
    decisions: Object.freeze({
      state: decisionsState,
      items: Object.freeze(decisionItems),
    }),
    evidence: Object.freeze({
      state: evidenceState,
      items: Object.freeze(evidenceItems),
    }),
    review: Object.freeze({
      state: reviewState,
      items: Object.freeze(reviewItems),
    }),
    trajectory: Object.freeze({
      state: trajectoryState,
      current: trajectoryCurrent,
    }),
    limits: Object.freeze({
      oaAvailable: true,
      truthOutranksConversation: true as const,
      composerDoesNotScoreMaturity: true as const,
      composerDoesNotSelectTrajectory: true as const,
    }),
  });
}

/**
 * Render StudioCognitiveContext into F1 system-prompt sections.
 * Business-first; no digests / repository mechanics / F1-F2-MW5 jargon.
 */
export function buildStudioCognitivePromptSections(
  ctx: StudioCognitiveContext,
): string[] {
  const lines: string[] = [
    "=== STUDIO COGNITIVE CONTEXT (autorité / guidance séparées) ===",
    "Présence d'un enregistrement ≠ autorité courante / fait établi.",
    "Autorité projet courante = Truth C / LPS courant + HumanDecisions CURRENT (effective).",
    "Evidence = support épistémique (poids selon status/availability/freshness) — jamais un Fact automatique.",
    "DoctrinePackage/CKC = guidance méthodologique seulement — ne remplace jamais la vérité projet.",
    "Conversation = continuité ; outrankée par vérité Project courante + doctrine Studio.",
    "Recommendation / ProjectTrajectory ≠ HumanDecision sauf décision séparée.",
    "Ne réécris pas l'historique Session. Ne score pas de bande de maturité comme fait.",
    "",
  ];

  lines.push("— Vérité projet (Truth C / LPS) —");
  lines.push(`Nom : ${ctx.projectTruth.name}`);
  lines.push(`Objectif : ${ctx.projectTruth.objective}`);
  lines.push(`Contexte : ${ctx.projectTruth.context}`);
  lines.push(
    `Contraintes : ${
      ctx.projectTruth.constraints.length > 0
        ? ctx.projectTruth.constraints.join("; ")
        : "(aucune)"
    }`,
  );
  lines.push(`Criticité : ${ctx.projectTruth.criticality}`);
  if (ctx.projectTruth.activeCycleInstanceId) {
    lines.push(
      `Cycle actif (identité) : présent — ne pas inventer d'activation.`,
    );
  } else {
    lines.push("Cycle actif : aucun.");
  }
  lines.push("");

  // Method / CKC (reuse AdvisoryMethodContext rendering via caller + lens text)
  lines.push("— Méthode (guidance) —");
  if (ctx.method.orientation.state === "RESOLVED_FROM_INTENT_CANDIDATE") {
    lines.push(
      `État orientation : RESOLVED_FROM_INTENT_CANDIDATE` +
        (ctx.method.cycleLabel
          ? ` · cycle candidat « ${ctx.method.cycleLabel} »`
          : "") +
        " (hypothèse non durable).",
    );
  } else {
    lines.push(
      "État orientation : UNRESOLVED — n'invente pas de cycle ; question ciblée seulement si matérielle.",
    );
  }
  if (ctx.method.sourceLimit === "doctrine_unavailable") {
    lines.push("Limite : DoctrinePackage non résolu.");
  } else if (ctx.method.sourceLimit === "ckc_unavailable") {
    lines.push(
      "Limite : CKC détaillée indisponible — dégradation gouvernée ; pas de Skills Framework public.",
    );
  }
  if (ctx.method.ckcLensSection?.trim()) {
    lines.push(ctx.method.ckcLensSection.trim());
  }
  lines.push("");

  lines.push("— HumanDecisions —");
  if (ctx.decisions.state === "NONE") {
    lines.push("État enregistrements : NONE — aucune HumanDecision.");
  } else if (ctx.decisions.state === "UNAVAILABLE") {
    lines.push("État enregistrements : UNAVAILABLE — ne pas inventer de décision.");
  } else {
    lines.push(
      "État enregistrements : PRESENT — des HumanDecisions existent ; PRESENT ≠ toutes CURRENT.",
    );
    const current = ctx.decisions.items.filter((d) => d.lifecycle === "CURRENT");
    const pending = ctx.decisions.items.filter((d) => d.lifecycle === "PENDING");
    const nonActive = ctx.decisions.items.filter(
      (d) => d.lifecycle === "NON_ACTIVE",
    );
    lines.push("CURRENT (effective) — respecter ; ne pas rouvrir comme Option libre sans contradiction/replan:");
    if (current.length === 0) {
      lines.push("• (aucune HumanDecision CURRENT)");
    } else {
      for (const d of current) {
        lines.push(
          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=CURRENT]` +
            (d.supersedesPresent ? " (remplace une décision antérieure)" : ""),
        );
      }
    }
    lines.push("PENDING — non décidé ; ne pas narrer comme GO/current:");
    if (pending.length === 0) {
      lines.push("• (aucune HumanDecision PENDING)");
    } else {
      for (const d of pending) {
        lines.push(
          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=PENDING]`,
        );
      }
    }
    lines.push("NON_ACTIVE — historique / provenance seulement ; jamais GO courant:");
    if (nonActive.length === 0) {
      lines.push("• (aucune HumanDecision NON_ACTIVE)");
    } else {
      for (const d of nonActive) {
        lines.push(
          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=NON_ACTIVE]`,
        );
      }
    }
  }
  lines.push("");

  lines.push("— Evidence —");
  if (ctx.evidence.state === "NONE") {
    lines.push("État enregistrements : NONE — aucune Evidence projet liée.");
  } else if (ctx.evidence.state === "UNAVAILABLE") {
    lines.push("État enregistrements : UNAVAILABLE — ne pas inventer d'Evidence.");
  } else {
    lines.push(
      "État enregistrements : PRESENT — des Evidence existent ; PRESENT ≠ Fact / preuve établie.",
    );
    lines.push(
      "Règles : Evidence = support, pas la proposition ; status/availability/freshness pèsent ; rejected/superseded/unavailable = non-support courant ; stale = affaibli ; expected/incomplete/unverified ≠ verified ; unknown reste incertitude ; même verified ne prouve pas une claim utilisateur non liée.",
    );
    for (const e of ctx.evidence.items) {
      lines.push(
        `• type=${e.type} status=${e.status} availability=${e.availability}` +
          (e.freshness ? ` freshness=${e.freshness}` : "") +
          ` stance=${e.epistemicStance}`,
      );
    }
  }
  lines.push("");

  lines.push("— ReviewBundle —");
  if (ctx.review.state === "NONE") {
    lines.push("État enregistrements : NONE.");
  } else if (ctx.review.state === "UNAVAILABLE") {
    lines.push("État enregistrements : UNAVAILABLE.");
  } else {
    lines.push(
      "État enregistrements : PRESENT — pas une validation Fact automatique ; lire status/completeness.",
    );
    for (const r of ctx.review.items) {
      lines.push(
        `• status=${r.status} evidenceRefs=${r.evidenceRefCount} completeness=${r.completeness}` +
          (r.supersedesPresent ? " (supersédé/lié)" : ""),
      );
    }
  }
  lines.push("");

  lines.push("— ProjectTrajectory —");
  if (ctx.trajectory.state === "ABSENT") {
    lines.push("État : ABSENT — n'invente pas de trajectoire.");
  } else if (ctx.trajectory.state === "UNAVAILABLE") {
    lines.push("État : UNAVAILABLE — n'invente pas de trajectoire.");
  } else if (ctx.trajectory.state === "DEFERRED") {
    lines.push("État : DEFERRED — non consommé dans ce tour.");
  } else if (ctx.trajectory.current) {
    const t = ctx.trajectory.current;
    lines.push(
      `État : PRESENT · status=${t.status} version=${t.version}` +
        (t.decidedByDecisionPresent
          ? " · liée à une HumanDecision"
          : " · Recommendation/candidate ≠ HumanDecision"),
    );
    if (t.stepSummaries.length > 0) {
      lines.push(`Étapes : ${t.stepSummaries.join(" → ")}`);
    }
  }
  lines.push("");

  return lines;
}
```

28. Exploitable diffs (status-aware vs recovered reviewed bodies):
### DIFF ckcCognitiveContext.ts.diff
```diff
--- /tmp/corr04-recovered-snap/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts	2026-09-07 07:59:23
+++ /Users/morris/Projects/sfia-wt-corr04-recovery-ac7376d9/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts	2026-09-07 07:57:49
@@ -169,11 +169,16 @@
   pushCondensed(condensed, maturityBehavior, 200);
   pushCondensed(condensed, maturitySignals, 180);
   pushCondensed(condensed, evidenceExpectations, 180);
-  pushCondensed(condensed, decisionTrajectoryReplan, 200);
-  pushCondensed(condensed, resumeAnchors, 160);
-  pushCondensed(condensed, guidanceStrategy ?? signals, 220);
-  pushCondensed(condensed, risksAntiPatterns, 160);
+  // Condensed feeds Fake CKC causal keys (buildCkcCognitivePromptSection).
+  // Do NOT include guidanceStrategy / resumeAnchors / risksAntiPatterns here:
+  // shared template rows contain « risque résiduel » and would false-trigger
+  // Fake security before QA (W3D-07). Those sections remain in the F1 lens.
+  pushCondensed(condensed, signals, 220);
   pushCondensed(condensed, antiClaims, 160);
+  // Keep strategy available as fallback only when Signals absent.
+  if (!signals?.trim()) {
+    pushCondensed(condensed, guidanceStrategy, 220);
+  }

   if (condensed.length === 0) {
     const firstMeaningful = markdown
```

### DIFF corrProof04.d.hybridContextEnvelope.d0.test.ts.diff
```diff
--- /tmp/recovered-corrProof04.d.hybridContextEnvelope.d0.test.ts	2026-09-07 07:59:56
+++ /tmp/current-corrProof04.d.hybridContextEnvelope.d0.test.ts	2026-09-07 07:59:56
@@ -172,21 +172,36 @@
       "Nora Studio-grounded (FAKE). Identité SFIA Studio — pas Skills Framework public.",
     );

-    if (/HumanDecisions[\s\S]*État : PRESENT/i.test(sys)) {
-      const m = sys.match(/• ([^\n]+→[^\n]+)/);
-      parts.push(
-        `Décision enregistrée respectée : ${m?.[1] ?? "HumanDecision PRESENT"}.`,
-      );
-      parts.push("Je ne rouvre pas cette HumanDecision comme Option libre.");
-    } else if (/HumanDecisions[\s\S]*État : NONE/i.test(sys)) {
+    if (/HumanDecisions[\s\S]*État enregistrements : PRESENT/i.test(sys)) {
+      if (/lifecycle=CURRENT/i.test(sys)) {
+        parts.push("HumanDecision CURRENT effective — respectée, non rouverte.");
+      }
+      if (/lifecycle=PENDING/i.test(sys)) {
+        parts.push("HumanDecision PENDING — non décidée, pas un GO courant.");
+      }
+      if (/lifecycle=NON_ACTIVE/i.test(sys)) {
+        parts.push("HumanDecision NON_ACTIVE — historique seulement.");
+      }
+      if (!/lifecycle=CURRENT/i.test(sys)) {
+        parts.push("Aucune HumanDecision CURRENT — présence ≠ autorité courante.");
+      }
+    } else if (/HumanDecisions[\s\S]*État enregistrements : NONE/i.test(sys)) {
       parts.push("Aucune HumanDecision enregistrée (NONE).");
     }

-    if (/Evidence[\s\S]*État : PRESENT/i.test(sys)) {
-      parts.push(
-        "Evidence projet présente — je distingue claims evidencées vs déclarées.",
-      );
-    } else if (/Evidence[\s\S]*État : NONE/i.test(sys)) {
+    if (/Evidence[\s\S]*État enregistrements : PRESENT/i.test(sys)) {
+      if (/stance=STRONGER_SUPPORT/i.test(sys)) {
+        parts.push(
+          "Evidence STRONGER_SUPPORT — support plus fort, pas un Fact automatique.",
+        );
+      }
+      if (/stance=NON_SUPPORTING|stance=WEAKENED_SUPPORT/i.test(sys)) {
+        parts.push(
+          "Evidence non-supporting/weakened — présence ≠ claim établie.",
+        );
+      }
+      parts.push("Evidence présente — support épistémique seulement, pas Fact.");
+    } else if (/Evidence[\s\S]*État enregistrements : NONE/i.test(sys)) {
       parts.push("Aucune Evidence projet liée (NONE).");
     }

@@ -389,8 +404,8 @@
     if (!a.ok) return;
     const sysA = provider.lastSystemPrompt;
     expect(sysA).toMatch(/STUDIO COGNITIVE CONTEXT/i);
-    expect(sysA).toMatch(/HumanDecisions[\s\S]*État : NONE/i);
-    expect(sysA).toMatch(/Evidence[\s\S]*État : NONE/i);
+    expect(sysA).toMatch(/HumanDecisions[\s\S]*État enregistrements : NONE/i);
+    expect(sysA).toMatch(/Evidence[\s\S]*État enregistrements : NONE/i);
     expect(sysA).toMatch(/Analysis dimensions|Maturity/i);
     expect(sysA).toMatch(/CONTEXT-FIRST/i);
     expect(a.text).toMatch(/Aucune HumanDecision|NONE/i);
@@ -401,16 +416,82 @@
     expect(b.ok).toBe(true);
     if (!b.ok) return;
     const sysB = provider.lastSystemPrompt;
-    expect(sysB).toMatch(/HumanDecisions[\s\S]*État : PRESENT/i);
+    expect(sysB).toMatch(/HumanDecisions[\s\S]*État enregistrements : PRESENT/i);
+    expect(sysB).toMatch(/lifecycle=CURRENT/);
     expect(sysB).toMatch(/Périmètre MVP contrats validé/);
-    expect(sysB).toMatch(/Evidence[\s\S]*État : PRESENT/i);
-    expect(b.text).toMatch(/Décision enregistrée|HumanDecision PRESENT|MVP/i);
-    expect(b.text).toMatch(/Evidence projet présente/i);
+    expect(sysB).toMatch(/Evidence[\s\S]*État enregistrements : PRESENT/i);
+    expect(b.text).toMatch(/HumanDecision CURRENT|MVP/i);
+    expect(b.text).toMatch(/Evidence présente|STRONGER_SUPPORT|support épistémique/i);
     // Core attributable delta: answers differ because Studio state differs.
     expect(a.text).not.toEqual(b.text);
     expect(sysA).not.toEqual(sysB);
   });

+  it("C10 — same prompt State A/B/C attributable differential", async () => {
+    const prompt =
+      "ok si on utilise la méthodologie SFIA, comment je dois piloter ce projet ?";
+
+    const a = await send(prompt);
+    expect(a.ok).toBe(true);
+    if (!a.ok) return;
+    const textA = a.text;
+    const sysA = provider.lastSystemPrompt;
+
+    await seedDecisionAndEvidence();
+    const b = await send(prompt);
+    expect(b.ok).toBe(true);
+    if (!b.ok) return;
+    const textB = b.text;
+    const sysB = provider.lastSystemPrompt;
+    expect(sysB).toMatch(/lifecycle=CURRENT/);
+
+    const oa = getRuntimeApplicationService().oa!;
+    const evId = `ev:d4-${projectId}`;
+    const found = await oa.evidenceReviewServices.repository.findById(evId);
+    expect(found).toBeTruthy();
+    if (!found) return;
+    await oa.evidenceReviewServices.repository.update(
+      {
+        ...found,
+        version: found.version + 1,
+        status: "rejected",
+        availability: "available",
+        freshness: "stale",
+      },
+      found.version,
+    );
+
+    // State C HD: convert effective accepted → refused (NON_ACTIVE) via repository
+    // so PENDING/NON_ACTIVE semantics apply without inventing a new domain rule.
+    const decId = `dec:d4-${projectId}`;
+    const prior = await oa.decisionServices.decisions.findById(decId);
+    expect(prior).toBeTruthy();
+    if (!prior) return;
+    await oa.decisionServices.decisions.save({
+      ...prior,
+      status: "refused",
+      version: prior.version + 1,
+    });
+
+    const c = await send(prompt);
+    expect(c.ok).toBe(true);
+    if (!c.ok) return;
+    const textC = c.text;
+    const sysC = provider.lastSystemPrompt;
+    expect(sysC).toMatch(/lifecycle=NON_ACTIVE/);
+    expect(sysC).not.toMatch(/lifecycle=CURRENT/);
+    expect(sysC).toMatch(/stance=NON_SUPPORTING|stance=WEAKENED_SUPPORT/);
+    expect(sysC).toMatch(/PRESENT ≠ Fact/);
+    expect(textC).toMatch(
+      /NON_ACTIVE|non-supporting|weakened|présence ≠|support épistémique/i,
+    );
+
+    expect(textA).not.toEqual(textB);
+    expect(textB).not.toEqual(textC);
+    expect(sysA).not.toEqual(sysB);
+    expect(sysB).not.toEqual(sysC);
+  });
+
   it("S1/S3/S5/S6/S7 — method application + next move + what not to do", async () => {
     const r = await send(
       "comment je dois piloter ce projet avec SFIA ?",
```

### DIFF studioCognitiveContext.test.ts.diff
```diff
--- /tmp/recovered-studioCognitiveContext.test.ts	2026-09-07 07:59:56
+++ /tmp/current-studioCognitiveContext.test.ts	2026-09-07 07:59:56
@@ -9,8 +9,14 @@
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import {
   composeStudioCognitiveContext,
+  buildStudioCognitivePromptSections,
+  classifyHumanDecisionLifecycle,
+  classifyEvidenceEpistemicStance,
   STUDIO_COGNITIVE_CONTEXT_BUDGET,
+  type StudioCognitiveContext,
 } from "@/features/project-assistant/f2/studioCognitiveContext";
+import type { HumanDecision } from "@/lib/oa/decision";
+import type { Evidence } from "@/lib/oa/evidence-review";
 import {
   extractCkcGuidanceFromMarkdown,
   loadProductCkcCognitiveContent,
@@ -305,4 +311,405 @@
       expect(ctx.trajectory.current?.stepSummaries.length).toBeGreaterThan(0);
     }
   });
+
+
+  it("C-status — HumanDecision lifecycle mapping for every domain status", () => {
+    const cases: Array<[HumanDecision["status"], "CURRENT" | "PENDING" | "NON_ACTIVE"]> = [
+      ["accepted", "CURRENT"],
+      ["amended", "CURRENT"],
+      ["proposed", "PENDING"],
+      ["required", "PENDING"],
+      ["refused", "NON_ACTIVE"],
+      ["superseded", "NON_ACTIVE"],
+      ["revoked", "NON_ACTIVE"],
+    ];
+    for (const [status, lifecycle] of cases) {
+      expect(classifyHumanDecisionLifecycle(status)).toBe(lifecycle);
+    }
+  });
+
+  it("C-status — Evidence epistemic stance from status/availability/freshness", () => {
+    expect(
+      classifyEvidenceEpistemicStance({
+        status: "verified",
+        availability: "available",
+        freshness: "fresh",
+      }),
+    ).toBe("STRONGER_SUPPORT");
+    expect(
+      classifyEvidenceEpistemicStance({
+        status: "available",
+        availability: "available",
+        freshness: "fresh",
+      }),
+    ).toBe("LIMITED_SUPPORT");
+    expect(
+      classifyEvidenceEpistemicStance({
+        status: "expected",
+        availability: "available",
+        freshness: null,
+      }),
+    ).toBe("PENDING_SUPPORT");
+    expect(
+      classifyEvidenceEpistemicStance({
+        status: "incomplete",
+        availability: "available",
+        freshness: "aging",
+      }),
+    ).toBe("LIMITED_SUPPORT");
+    expect(
+      classifyEvidenceEpistemicStance({
+        status: "stale",
+        availability: "available",
+        freshness: "fresh",
+      }),
+    ).toBe("WEAKENED_SUPPORT");
+    expect(
+      classifyEvidenceEpistemicStance({
+        status: "verified",
+        availability: "available",
+        freshness: "stale",
+      }),
+    ).toBe("WEAKENED_SUPPORT");
+    expect(
+      classifyEvidenceEpistemicStance({
+        status: "rejected",
+        availability: "available",
+        freshness: "fresh",
+      }),
+    ).toBe("NON_SUPPORTING");
+    expect(
+      classifyEvidenceEpistemicStance({
+        status: "superseded",
+        availability: "available",
+        freshness: "fresh",
+      }),
+    ).toBe("NON_SUPPORTING");
+    expect(
+      classifyEvidenceEpistemicStance({
+        status: "unavailable",
+        availability: "unavailable",
+        freshness: null,
+      }),
+    ).toBe("NON_SUPPORTING");
+    expect(
+      classifyEvidenceEpistemicStance({
+        status: "verified",
+        availability: "unavailable",
+        freshness: "fresh",
+      }),
+    ).toBe("NON_SUPPORTING");
+    expect(
+      classifyEvidenceEpistemicStance({
+        status: "verified",
+        availability: "unknown",
+        freshness: "fresh",
+      }),
+    ).toBe("UNCERTAIN_SUPPORT");
+    expect(
+      classifyEvidenceEpistemicStance({
+        status: "available",
+        availability: "available",
+        freshness: "unknown",
+      }),
+    ).toBe("UNCERTAIN_SUPPORT");
+  });
+
+  it("C-status — PRESENT decisions prompt distinguishes CURRENT/PENDING/NON_ACTIVE", () => {
+    const method = {
+      orientation: {
+        state: "UNRESOLVED" as const,
+        candidateCycleTypeId: null,
+      },
+      cycleLabel: null,
+      ckcLensSection: null,
+      ckcLoaded: false,
+      doctrinePinPresent: true,
+      sourceLimit: "none" as const,
+      trajectory: null,
+    };
+    const ctx = {
+      projectTruth: {
+        projectId: "prj:x",
+        name: "X",
+        objective: "O",
+        context: "C",
+        constraints: [],
+        criticality: "STANDARD",
+        shortReference: null,
+        lpsId: "lps:x",
+        lpsVersion: 1,
+        activeCycleInstanceId: null,
+        doctrineId: "pkg:x",
+        doctrineVersion: "1",
+        doctrineStatus: "resolved",
+      },
+      method,
+      decisions: {
+        state: "PRESENT" as const,
+        items: [
+          {
+            subject: "Scope MVP accepté",
+            selectedOptionLabel: "GO",
+            status: "accepted" as const,
+            lifecycle: "CURRENT" as const,
+            effectiveAt: "2026-09-07T00:00:00.000Z",
+            reversible: true,
+            supersedesPresent: false,
+          },
+          {
+            subject: "Architecture proposée",
+            selectedOptionLabel: "Option A",
+            status: "proposed" as const,
+            lifecycle: "PENDING" as const,
+            effectiveAt: "2026-09-07T00:00:00.000Z",
+            reversible: true,
+            supersedesPresent: false,
+          },
+          {
+            subject: "Ancien périmètre",
+            selectedOptionLabel: "GO old",
+            status: "superseded" as const,
+            lifecycle: "NON_ACTIVE" as const,
+            effectiveAt: "2026-09-01T00:00:00.000Z",
+            reversible: true,
+            supersedesPresent: false,
+          },
+          {
+            subject: "Refus sponsor",
+            selectedOptionLabel: "NO-GO",
+            status: "refused" as const,
+            lifecycle: "NON_ACTIVE" as const,
+            effectiveAt: "2026-09-02T00:00:00.000Z",
+            reversible: false,
+            supersedesPresent: false,
+          },
+        ],
+      },
+      evidence: {
+        state: "PRESENT" as const,
+        items: [
+          {
+            type: "document",
+            status: "verified" as const,
+            availability: "available" as const,
+            freshness: "fresh" as const,
+            sourceKind: "manual",
+            producedAt: "2026-09-07T00:00:00.000Z",
+            epistemicStance: "STRONGER_SUPPORT" as const,
+          },
+          {
+            type: "document",
+            status: "rejected" as const,
+            availability: "available" as const,
+            freshness: "fresh" as const,
+            sourceKind: "manual",
+            producedAt: "2026-09-07T00:00:00.000Z",
+            epistemicStance: "NON_SUPPORTING" as const,
+          },
+          {
+            type: "document",
+            status: "stale" as const,
+            availability: "available" as const,
+            freshness: "stale" as const,
+            sourceKind: "manual",
+            producedAt: "2026-01-01T00:00:00.000Z",
+            epistemicStance: "WEAKENED_SUPPORT" as const,
+          },
+        ],
+      },
+      review: { state: "NONE" as const, items: [] },
+      trajectory: { state: "ABSENT" as const, current: null },
+      limits: {
+        oaAvailable: true,
+        truthOutranksConversation: true as const,
+        composerDoesNotScoreMaturity: true as const,
+        composerDoesNotSelectTrajectory: true as const,
+      },
+    } satisfies StudioCognitiveContext;
+
+    const prompt = buildStudioCognitivePromptSections(ctx).join("\n");
+    expect(prompt).toMatch(/PRESENT ≠ toutes CURRENT/);
+    expect(prompt).toMatch(/lifecycle=CURRENT/);
+    expect(prompt).toMatch(/lifecycle=PENDING/);
+    expect(prompt).toMatch(/lifecycle=NON_ACTIVE/);
+    expect(prompt).not.toMatch(
+      /État : PRESENT — respecter ; ne pas rouvrir comme Option libre/,
+    );
+    expect(prompt).toMatch(/PRESENT ≠ Fact/);
+    expect(prompt).toMatch(/stance=STRONGER_SUPPORT/);
+    expect(prompt).toMatch(/stance=NON_SUPPORTING/);
+    expect(prompt).toMatch(/stance=WEAKENED_SUPPORT/);
+    expect(prompt).not.toMatch(
+      /Project\/LPS\/HumanDecision\/Evidence = autorité factuelle projet/,
+    );
+    expect(prompt).toMatch(/Truth C \/ LPS courant \+ HumanDecisions CURRENT/);
+  });
+
+  it("C-status — accepted HD from OA is CURRENT in compose projection", async () => {
+    const runtime = getRuntimeApplicationService();
+    const oa = runtime.oa!;
+    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
+      await import(
+        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
+      );
+    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+    const scope = `decision:c04-cur-${projectId}`;
+    const reg = registerM3LocalMorrisAuthority({
+      authorityResolver: oa.authorityResolver,
+      scope,
+      issuedAt: "2026-09-07T06:00:00.000Z",
+      forceEnable: true,
+      evidenceId: `evd:c04-cur-${projectId}`,
+    });
+    expect(reg.ok).toBe(true);
+    if (!reg.ok) return;
+    const recorded = await oa.decisionServices.recordHumanDecision.execute({
+      decisionId: `dec:c04-cur-${projectId}`,
+      projectId,
+      subject: "Décision CURRENT test",
+      options: [{ optionId: "opt:go", label: "GO" }],
+      selectedOptionId: "opt:go",
+      actor: LOCAL_MORRIS_M3_ACTOR,
+      authority: "morris",
+      reversible: true,
+      scope,
+      authorityEvidenceId: reg.evidenceId,
+      linkToLivingProjectState: true,
+      expectedLpsVersion: lps.livingProjectState.version,
+      decisionBasis: {
+        sourceType: "proposal",
+        sourceRef: "prop:c04-cur",
+        sourceDigest: "d".repeat(64),
+        projectId,
+        proposalContext: {
+          lpsId: lps.livingProjectState.lpsVersionId,
+          lpsVersion: lps.livingProjectState.version,
+          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
+        },
+        executionBasis: {
+          objective: "Test CURRENT",
+          scope: "test",
+          requestedOperation: "test",
+        },
+      },
+    });
+    expect(recorded.ok).toBe(true);
+    const ctx = await composeStudioCognitiveContext({
+      analysis: analysisStub({
+        intentClass: "informative",
+        parseOk: true,
+        candidateCycleTypeId: "cyc:framing",
+      }),
+      project: projectDto(projectId),
+      registryRoot: resolveProductDoctrineRegistryRoot(),
+      oa,
+    });
+    expect(ctx.decisions.state).toBe("PRESENT");
+    expect(ctx.decisions.items.some((d) => d.lifecycle === "CURRENT")).toBe(
+      true,
+    );
+    expect(ctx.decisions.items.every((d) => d.status.length > 0)).toBe(true);
+    const prompt = buildStudioCognitivePromptSections(ctx).join("\n");
+    expect(prompt).toMatch(/lifecycle=CURRENT/);
+  });
+
+
+  it("C-status — supersession: prior NON_ACTIVE, replacement CURRENT, never both CURRENT same subject", async () => {
+    const runtime = getRuntimeApplicationService();
+    const oa = runtime.oa!;
+    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
+      await import(
+        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
+      );
+    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+    const scope = `decision:c04-sup-${projectId}`;
+    const reg = registerM3LocalMorrisAuthority({
+      authorityResolver: oa.authorityResolver,
+      scope,
+      issuedAt: "2026-09-07T06:10:00.000Z",
+      forceEnable: true,
+      evidenceId: `evd:c04-sup-${projectId}`,
+    });
+    expect(reg.ok).toBe(true);
+    if (!reg.ok) return;
+    const firstId = `dec:c04-sup-a-${projectId}`;
+    const first = await oa.decisionServices.recordHumanDecision.execute({
+      decisionId: firstId,
+      projectId,
+      subject: "Sujet supersession",
+      options: [{ optionId: "opt:a", label: "A" }],
+      selectedOptionId: "opt:a",
+      actor: LOCAL_MORRIS_M3_ACTOR,
+      authority: "morris",
+      reversible: true,
+      scope,
+      authorityEvidenceId: reg.evidenceId,
+      linkToLivingProjectState: true,
+      expectedLpsVersion: lps.livingProjectState.version,
+      decisionBasis: {
+        sourceType: "proposal",
+        sourceRef: "prop:c04-sup-a",
+        sourceDigest: "e".repeat(64),
+        projectId,
+        proposalContext: {
+          lpsId: lps.livingProjectState.lpsVersionId,
+          lpsVersion: lps.livingProjectState.version,
+          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
+        },
+        executionBasis: {
+          objective: "Supersession",
+          scope: "test",
+          requestedOperation: "test",
+        },
+      },
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+    const secondId = `dec:c04-sup-b-${projectId}`;
+    const second = await oa.decisionServices.supersedeHumanDecision.execute({
+      newDecisionId: secondId,
+      supersedesDecisionId: firstId,
+      selectedOptionId: "opt:a",
+      actor: LOCAL_MORRIS_M3_ACTOR,
+      authority: "morris",
+      reversible: true,
+      reason: "Remplacement autorisé pour preuve supersession",
+      scope,
+      authorityEvidenceId: reg.evidenceId,
+    });
+    expect(second.ok).toBe(true);
+    const ctx = await composeStudioCognitiveContext({
+      analysis: analysisStub({
+        intentClass: "informative",
+        parseOk: true,
+        candidateCycleTypeId: "cyc:framing",
+      }),
+      project: projectDto(projectId),
+      registryRoot: resolveProductDoctrineRegistryRoot(),
+      oa,
+    });
+    const items = ctx.decisions.items.filter((d) =>
+      d.subject.includes("Sujet supersession"),
+    );
+    expect(items.length).toBeGreaterThanOrEqual(2);
+    const currents = items.filter((d) => d.lifecycle === "CURRENT");
+    const nonActives = items.filter((d) => d.lifecycle === "NON_ACTIVE");
+    expect(currents.length).toBe(1);
+    expect(nonActives.some((d) => d.status === "superseded")).toBe(true);
+    expect(currents[0]?.status).toBe("accepted");
+    const prompt = buildStudioCognitivePromptSections(ctx).join("\n");
+    expect(prompt).toMatch(/lifecycle=CURRENT/);
+    expect(prompt).toMatch(/lifecycle=NON_ACTIVE/);
+    expect(prompt).toMatch(/raw=superseded/);
+  });
+
 });
```

### DIFF studioCognitiveContext.ts.diff
```diff
--- /tmp/recovered-studioCognitiveContext.ts	2026-09-07 07:59:56
+++ /tmp/current-studioCognitiveContext.ts	2026-09-07 07:59:56
@@ -57,22 +57,110 @@
   readonly doctrineStatus: string;
 };

+/**
+ * Deterministic cognitive lifecycle for HumanDecision.
+ * Derived from existing domain contract only (see domain-mapping.md).
+ * PRESENT ≠ CURRENT.
+ */
+export type DecisionCognitiveLifecycle = "CURRENT" | "PENDING" | "NON_ACTIVE";
+
+/**
+ * Domain-derived mapping (CORR-PROOF-04 status-aware):
+ * - accepted → CURRENT (findAcceptedBySubject / supersede writes accepted)
+ * - amended → CURRENT (MW5 CONSUMED_HD_STATUSES; supersedable like accepted)
+ * - proposed | required → PENDING (supersedable but not accepted)
+ * - refused | superseded | revoked → NON_ACTIVE (terminal / history)
+ */
+export function classifyHumanDecisionLifecycle(
+  status: HumanDecision["status"],
+): DecisionCognitiveLifecycle {
+  switch (status) {
+    case "accepted":
+    case "amended":
+      return "CURRENT";
+    case "proposed":
+    case "required":
+      return "PENDING";
+    case "refused":
+    case "superseded":
+    case "revoked":
+      return "NON_ACTIVE";
+    default: {
+      const _exhaustive: never = status;
+      void _exhaustive;
+      return "NON_ACTIVE";
+    }
+  }
+}
+
 export type StudioDecisionProjection = {
   readonly subject: string;
   readonly selectedOptionLabel: string | null;
-  readonly status: string;
+  /** Raw domain HumanDecisionStatus — always preserved. */
+  readonly status: HumanDecision["status"];
+  /** Deterministic cognitive class — never invents beyond domain mapping. */
+  readonly lifecycle: DecisionCognitiveLifecycle;
   readonly effectiveAt: string;
   readonly reversible: boolean;
   readonly supersedesPresent: boolean;
 };

+/**
+ * Deterministic epistemic stance from Evidence status/availability/freshness.
+ * Does NOT claim which proposition is proven. Presence ≠ Fact.
+ */
+export type EvidenceEpistemicStance =
+  | "STRONGER_SUPPORT"
+  | "LIMITED_SUPPORT"
+  | "PENDING_SUPPORT"
+  | "WEAKENED_SUPPORT"
+  | "NON_SUPPORTING"
+  | "UNCERTAIN_SUPPORT";
+
+export function classifyEvidenceEpistemicStance(input: {
+  status: Evidence["status"];
+  availability: Evidence["availability"];
+  freshness: Evidence["freshness"] | null | undefined;
+}): EvidenceEpistemicStance {
+  const { status, availability, freshness } = input;
+  if (
+    status === "rejected" ||
+    status === "superseded" ||
+    status === "unavailable" ||
+    availability === "unavailable"
+  ) {
+    return "NON_SUPPORTING";
+  }
+  if (status === "stale" || freshness === "stale") {
+    return "WEAKENED_SUPPORT";
+  }
+  if (status === "expected") {
+    return "PENDING_SUPPORT";
+  }
+  if (availability === "unknown" || freshness === "unknown") {
+    return "UNCERTAIN_SUPPORT";
+  }
+  if (status === "verified" && availability === "available") {
+    return "STRONGER_SUPPORT";
+  }
+  if (status === "incomplete" || status === "available") {
+    return "LIMITED_SUPPORT";
+  }
+  return "UNCERTAIN_SUPPORT";
+}
+
 export type StudioEvidenceProjection = {
   readonly type: string;
-  readonly status: string;
-  readonly availability: string;
-  readonly freshness: string | null;
+  /** Raw EvidenceStatus — always preserved. */
+  readonly status: Evidence["status"];
+  /** Raw EvidenceAvailability — always preserved. */
+  readonly availability: Evidence["availability"];
+  /** Raw freshness when present. */
+  readonly freshness: Evidence["freshness"] | null;
   readonly sourceKind: string;
   readonly producedAt: string | null;
+  /** Deterministic stance — never converts Evidence into Fact. */
+  readonly epistemicStance: EvidenceEpistemicStance;
 };

 export type StudioReviewProjection = {
@@ -131,6 +219,7 @@
       ? clip(selected, STUDIO_COGNITIVE_CONTEXT_BUDGET.decisionOptionChars)
       : null,
     status: d.status,
+    lifecycle: classifyHumanDecisionLifecycle(d.status),
     effectiveAt: d.effectiveAt,
     reversible: d.reversible,
     supersedesPresent: Boolean(d.supersedes),
@@ -138,13 +227,19 @@
 }

 function projectEvidence(e: Evidence): StudioEvidenceProjection {
+  const freshness = e.freshness ?? null;
   return Object.freeze({
     type: e.type,
     status: e.status,
     availability: e.availability,
-    freshness: e.freshness ?? null,
+    freshness,
     sourceKind: e.sourceKind,
     producedAt: e.producedAt ?? null,
+    epistemicStance: classifyEvidenceEpistemicStance({
+      status: e.status,
+      availability: e.availability,
+      freshness,
+    }),
   });
 }

@@ -350,11 +445,13 @@
 ): string[] {
   const lines: string[] = [
     "=== STUDIO COGNITIVE CONTEXT (autorité / guidance séparées) ===",
-    "Project/LPS/HumanDecision/Evidence = autorité factuelle projet.",
+    "Présence d'un enregistrement ≠ autorité courante / fait établi.",
+    "Autorité projet courante = Truth C / LPS courant + HumanDecisions CURRENT (effective).",
+    "Evidence = support épistémique (poids selon status/availability/freshness) — jamais un Fact automatique.",
     "DoctrinePackage/CKC = guidance méthodologique seulement — ne remplace jamais la vérité projet.",
-    "Vérité Project courante et doctrine Studio OUTRANKENT les prémisses conversationnelles obsolètes.",
+    "Conversation = continuité ; outrankée par vérité Project courante + doctrine Studio.",
+    "Recommendation / ProjectTrajectory ≠ HumanDecision sauf décision séparée.",
     "Ne réécris pas l'historique Session. Ne score pas de bande de maturité comme fait.",
-    "Ne traite jamais une Recommendation / trajectoire candidate comme HumanDecision.",
     "",
   ];

@@ -408,31 +505,69 @@

   lines.push("— HumanDecisions —");
   if (ctx.decisions.state === "NONE") {
-    lines.push("État : NONE — aucune HumanDecision enregistrée.");
+    lines.push("État enregistrements : NONE — aucune HumanDecision.");
   } else if (ctx.decisions.state === "UNAVAILABLE") {
-    lines.push("État : UNAVAILABLE — ne pas inventer de décision.");
+    lines.push("État enregistrements : UNAVAILABLE — ne pas inventer de décision.");
   } else {
-    lines.push("État : PRESENT — respecter ; ne pas rouvrir comme Option libre.");
-    for (const d of ctx.decisions.items) {
-      lines.push(
-        `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [${d.status}]` +
-          (d.supersedesPresent ? " (supersède une décision antérieure)" : ""),
-      );
+    lines.push(
+      "État enregistrements : PRESENT — des HumanDecisions existent ; PRESENT ≠ toutes CURRENT.",
+    );
+    const current = ctx.decisions.items.filter((d) => d.lifecycle === "CURRENT");
+    const pending = ctx.decisions.items.filter((d) => d.lifecycle === "PENDING");
+    const nonActive = ctx.decisions.items.filter(
+      (d) => d.lifecycle === "NON_ACTIVE",
+    );
+    lines.push("CURRENT (effective) — respecter ; ne pas rouvrir comme Option libre sans contradiction/replan:");
+    if (current.length === 0) {
+      lines.push("• (aucune HumanDecision CURRENT)");
+    } else {
+      for (const d of current) {
+        lines.push(
+          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=CURRENT]` +
+            (d.supersedesPresent ? " (remplace une décision antérieure)" : ""),
+        );
+      }
+    }
+    lines.push("PENDING — non décidé ; ne pas narrer comme GO/current:");
+    if (pending.length === 0) {
+      lines.push("• (aucune HumanDecision PENDING)");
+    } else {
+      for (const d of pending) {
+        lines.push(
+          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=PENDING]`,
+        );
+      }
     }
+    lines.push("NON_ACTIVE — historique / provenance seulement ; jamais GO courant:");
+    if (nonActive.length === 0) {
+      lines.push("• (aucune HumanDecision NON_ACTIVE)");
+    } else {
+      for (const d of nonActive) {
+        lines.push(
+          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=NON_ACTIVE]`,
+        );
+      }
+    }
   }
   lines.push("");

   lines.push("— Evidence —");
   if (ctx.evidence.state === "NONE") {
-    lines.push("État : NONE — aucune Evidence projet liée.");
+    lines.push("État enregistrements : NONE — aucune Evidence projet liée.");
   } else if (ctx.evidence.state === "UNAVAILABLE") {
-    lines.push("État : UNAVAILABLE — ne pas inventer d'Evidence.");
+    lines.push("État enregistrements : UNAVAILABLE — ne pas inventer d'Evidence.");
   } else {
-    lines.push("État : PRESENT — claims sourcées vs déclarées seulement.");
+    lines.push(
+      "État enregistrements : PRESENT — des Evidence existent ; PRESENT ≠ Fact / preuve établie.",
+    );
+    lines.push(
+      "Règles : Evidence = support, pas la proposition ; status/availability/freshness pèsent ; rejected/superseded/unavailable = non-support courant ; stale = affaibli ; expected/incomplete/unverified ≠ verified ; unknown reste incertitude ; même verified ne prouve pas une claim utilisateur non liée.",
+    );
     for (const e of ctx.evidence.items) {
       lines.push(
         `• type=${e.type} status=${e.status} availability=${e.availability}` +
-          (e.freshness ? ` freshness=${e.freshness}` : ""),
+          (e.freshness ? ` freshness=${e.freshness}` : "") +
+          ` stance=${e.epistemicStance}`,
       );
     }
   }
@@ -440,11 +575,13 @@

   lines.push("— ReviewBundle —");
   if (ctx.review.state === "NONE") {
-    lines.push("État : NONE.");
+    lines.push("État enregistrements : NONE.");
   } else if (ctx.review.state === "UNAVAILABLE") {
-    lines.push("État : UNAVAILABLE.");
+    lines.push("État enregistrements : UNAVAILABLE.");
   } else {
-    lines.push("État : PRESENT.");
+    lines.push(
+      "État enregistrements : PRESENT — pas une validation Fact automatique ; lire status/completeness.",
+    );
     for (const r of ctx.review.items) {
       lines.push(
         `• status=${r.status} evidenceRefs=${r.evidenceRefCount} completeness=${r.completeness}` +
```

29–33. Decision CURRENT / PENDING / NON_ACTIVE / supersession / mixed-history: proved in `studioCognitiveContext.test.ts` (C-status mapping + OA compose + supersession + mixed prompt) and corrProof04 C10.
34–41. Evidence verified/unverified/stale/rejected/superseded/unavailable/unknown + presence anti-promotion: unit stance tests + prompt markers `PRESENT ≠ Fact` / stance=*.
42. Same-prompt A/B/C: corrProof04 `C10 — same prompt State A/B/C attributable differential` PASS.
43. Hybrid Context Envelope: PRESERVED (composer-first Option D).
44. Composer: PURE READ-ONLY.
45. One Agent / One Runner / One ProductSqliteSession: PASS (corrProof04 invariants).
46. Extra context/method LLM: ZERO (`reasonWithResolvedCkcContext` not on ordinary F1).
47. transitionReadiness: UNCHANGED.
48. Durable F2: UNCHANGED.
49. CKC product markdown / DoctrinePackage: UNCHANGED (only condensed projection policy in ckcCognitiveContext.ts).
50. ProjectTrajectory: UNCHANGED CONDITIONAL read path.

51. Recovery R1–R6 matrix: ALL PASS (exact source, clean WT, 16 files, 16/16 SHA, manifest ac7376d9…, zero semantic pre-PASS).
52. Corrective C1–C15 matrix: ALL PASS (domain mapping, no silent ambiguous, PRESENT≠CURRENT, lifecycle, supersession, PRESENT≠Fact, status/availability/freshness material, A/B/C, hybrid preserved, regressions, still 16 files, new manifest, staged EMPTY).

53. Targeted tests:
```
npx vitest run __tests__/project-assistant/studioCognitiveContext.test.ts __tests__/project-assistant/corrProof04.d.hybridContextEnvelope.d0.test.ts
exit 0 · Test Files 2 passed · Tests 18 passed · Duration 1.47s
```
54. Full project-assistant:
```
npx vitest run __tests__/project-assistant/
exit 0 · Test Files 44 passed · Tests 506 passed · Duration 7.23s
```
55. Full Decision:
```
npx vitest run __tests__/oa/decision/
exit 0 · Test Files 8 passed · Tests 59 passed · Duration 3.74s
```
56. Full Evidence/ReviewBundle:
```
npx vitest run __tests__/oa/evidence-review/
exit 0 · Test Files 22 passed · Tests 200 passed · Duration 2.16s
```
57. CKC + CORR-PROOF-01/02/03:
```
npx vitest run __tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts \
  __tests__/project-assistant/corrProof02.b1.advisory.d0.test.ts \
  __tests__/project-assistant/corrProof03.e1.methodGroundedAdvisory.d0.test.ts \
  __tests__/project-assistant/methodOrientation.test.ts \
  __tests__/project-assistant/w1CkcSemanticSeam.test.ts
exit 0 · Test Files 5 passed · Tests 80 passed · Duration 1.80s
```
58. `npm run typecheck` → exit 0
59. `npm run lint` → exit 0 · No ESLint warnings or errors
60. `git diff --check` → exit 0 PASS

61. Final 16 hashes / 62. status-aware manifest:
```
72087b3d8f0dad96065e8b676bf7c5765ff63303a85a048b1a91fed01323a28a  projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
d016620da7e0d6abbd8a7de1766a6a9a0b89467b2e1b21b7ec06b523b753a3c7  projects/sfia-studio/app/__tests__/oa/evidence-review/evidenceRepository.test.ts
94c0cf189df70be16da0b104eaed89a0c597908a93351bcfbebdc09a1245c83e  projects/sfia-studio/app/__tests__/project-assistant/corrProof04.d.hybridContextEnvelope.d0.test.ts
a866d30cca5b13ed2c98d115739765d6e997b495125899441074df2bb58b65d3  projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
343703a5dd1918ec344e24a579cd95e054d29b07dbdf29fae0a3155cbe8bbdc8  projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
2e5995e89f2596f63bd110ffed69d12bda317149f19d4586f4bbc3a62ebfee08  projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
0e89d17001449cdeee4bc3081caecbfa1d3e94a2a0fcb9f46e6cbba019e30e90  projects/sfia-studio/app/features/project-assistant/f2/methodOrientation.ts
d01ca51b02d4eb2a2d37436fd3bde41ddf1b16bbebba4cf12c901c0e68ff2691  projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
db1748036cce800a1416ef24698020509e1ea6f5c75dc0903b329b081ad14474  projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
ef3658d9138ee8d7a740ef0b812b1d3923f4df3b71f3b93c54d9300ce6f6d4e7  projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
1a3734ae08b719902f384b4e01701f1962cb36bcdf516b4a76529e3bd79aee75  projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceRepository.ts
fda3bf9d861823c12c2ab4266cf64710fee3e64aff516536a85f41dc23df538a  projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts
d7f5df8da401efa4044bd00fac8bbeeb732c0e9c49453acacc2b35837eb6d4ac  projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts
553e6196da5a5bc749ffaac91cab54d11e14e4d61b180e14c169434ea4c48498  projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts
6f003dfe782bbd0de580ad85e9e98d9c2fcafbeecc10e0d20c0226369b63a8c2  projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceRepository.ts
37f2b24a44bfbf6a6417db88a8bbe46daa71df9c42a19eeda7b14e85dcbd804d  projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts
```
`CORR_PROOF_04_OPTION_D_STATUS_AWARE_CANDIDATE_MANIFEST_SHA256` = `456f55611926d1e117f8090c5e5a1ea6255ce788a284dfe7c04c72f58acd2ef4`

SUPERSEDED LOCAL REVIEW CANDIDATE BY STATUS-AWARE CORRECTED CANDIDATE:
`ac7376d95c4fc0bbd2be1baa0570657c31849a0c08abc2edc07b40fdac68c2d7` (recovery proof retained).

63. Staged: EMPTY
64. No product commit/push/PR
65. ZERO REAL
66. ZERO hosted web_search
67. Stage B: NOT AUTHORIZED
68. Production routing: NOT SELECTED
69. runtime v3: NON ADOPTED
70. Proof ceiling: STATUS-AWARE DETERMINISTIC PROVEN CANDIDATE
71. Product Proof: OPEN / BLOCKED (`STUDIO_GROUNDED_REASONING_DEPTH_GAP`; delivery blocker addressed as status-aware candidate pending Critical Delivery Review)
72. Reserves:
   - REAL professional reasoning depth NOT PROVEN
   - Fake ConversationProvider only for deterministic cognition
   - Condensed CKC Fake-causal projection deliberately excludes shared-template sections that false-trigger security Fake keys (F1 application lens still projects them)
73. Next Morris gate: ChatGPT Critical Delivery Review → separate Product Git only if accepted
74. Review Handoff: publish via `scripts/sfia/publish-review-handoff.sh` (this pack) parent `f040fed0…`

## Final Cursor verdict
PASS WITH RESERVES — READY FOR CHATGPT CORR-PROOF-04 RECOVERY + STATUS-AWARE CRITICAL DELIVERY REVIEW
