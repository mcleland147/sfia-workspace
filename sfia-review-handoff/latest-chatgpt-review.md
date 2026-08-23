# REVIEW PACK FULL — W2-G3 — A3 FINAL CLEANUP

REPUBLICATION WITH COMPLETE MODIFIED FILE BODIES.

## A. Metadata

| Field | Value |
|---|---|
| Timestamp (UTC) | 2026-08-23T08:22:06Z |
| Repo | mcleland147/sfia-workspace |
| Branch | `delivery/sfia-studio-w2-g3-umbrella-a` |
| HEAD | `3a86f8190deb34e37bede868a6e765b0440fc839` |
| origin/main | `3a86f8190deb34e37bede868a6e765b0440fc839` |
| Drift | NONE |
| Incoming handoff | commit `943fc5b5054752a3a655331a264e6dc16163f3fa` |
| Incoming blob | `bbb37426a5fb2302460c1238c79a18fb7b46ec6c` |
| Decision | D-W2-A3-01 unchanged / A3-EPI-01 + H1 + H2 consumed |
| Gates | Phase B OUT · Execute OUT · REAL OUT · Project Git OUT · C6 CLOSED |

## B. Local Git Truth

- Delivery W2-G3 + prior A1/A2/A3/A4/B/C/E local uncommitted, intact
- Staged empty
- Out-of-scope preserved: eventops-poc/, flex-office-demo/

## C. Scope

- **A3-EPI-01 BLOCKING**: supersede Observation + Recommendation + Options on X→Y (and idempotent refresh)
- **A3-H1 TEST-ONLY**: sequential stale OCC → TRAJECTORY_VERSION_CONFLICT + currentVersion=2
- **A3-H2 TEST-ONLY**: stale expectedLpsVersion → LPS_VERSION_CONFLICT + full UoW rollback
- Non-goals: A3 versioning rebuild, Track D, Phase B, Execute, REAL, UI redesign, C6

## D. Source alignment

Build Doctrine reuse · D-W2-01/D-W2-03 · doctrine 33 · D-W2-A3-01 KEEP · EpistemicItem.supersedes + UpdateEpistemicState KEEP

## E. Before state (problem)

Material X→Y could leave:
- Observation X = superseded
- Recommendation X = **active** (forbidden)
- Options X = **active** (forbidden)
while Y items were also active → contradictory epistemic truth.

## F. A3-EPI-01 implementation

- Load prior PresentedOptionSet binding when reinstruction/idempotent refresh
- Deterministic IDs: `optionSetObservationId`, `optionSetRecommendationId`, `optionSetOptionId`
- Each Y Option with matching optionRef supersedes X Option
- Y Recommendation supersedes X Recommendation
- Y Observation supersedes X Observation
- Fail-closed if prior Option has no optionRef match (`EPISTEMIC_OPTION_RETIREMENT_UNSUPPORTED`)
- No delete; status-only retirement via existing UpdateEpistemicState

## G. A3-H1

Sequential: writer A expectedVersion=1 → v2 PASS; writer B expectedVersion=1 → TRAJECTORY_VERSION_CONFLICT currentVersion=2; no v3.
Production OA code: **unchanged** for H1.

## H. A3-H2

expectedVersion=1 correct + expectedLpsVersion=1 stale → LPS_VERSION_CONFLICT after markSuperseded+save path; rollback → v1 candidate intact, v2 absent, LPS unchanged, current none.
Production OA code: **unchanged** for H2.

## I. Non-regression / QA

| Suite | Result |
|---|---|
| w2EabcDelivery | **28/28 PASS** |
| OA trajectory + adversarial | **47/47 PASS** |
| UI sample (trajectory/labels/W1) | **45/45 PASS** |
| Playwright /studio correction | **1/1 PASS** |
| In-scope tsc | clean |

Known out-of-scope reserve: uatUxSemanticReserves Morris label (preexisting).

## J. Modified content this micro-pass

FULL bodies in section N below:
1. proposeTrajectoryOptions.ts
2. presentedOptionSet.ts
3. w2EabcDelivery.test.ts

OA cycle proposeTrajectoryVersion: **not modified** this pass.

## K. Consolidated state

- Prior Delivery + A3 versioning still uncommitted
- This cleanup = epistemic supersession + proof tests only
- git project integration NOT AUTHORIZED

## L. Architecture

same SoT · no new status · no parallel engine · C6 CLOSED · candidate ≠ current

## M. Verdict

READY FOR CHATGPT RE-REVIEW — W2-G3 A3 FINAL CLEANUP APPLIED

≠ Git integration authorization.

---

# N. FULL MODIFIED CONTENT

## FILE: `projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts`

### A3-EPI-01 PRIMARY — proposeTrajectoryOptions (FULL FILE)

```typescript
/**
 * W2 Track A — product application path: publish trajectory Options and the
 * accompanying Recommendation, and materialise the PROPOSED trajectory.
 *
 * Durability follows D-W2-01: what must survive is materialised as durable
 * Epistemic items (Option / Recommendation / presented OptionSet Observation)
 * plus one durable `candidate` ProjectTrajectory version. Nothing here promotes
 * the trajectory and nothing here records a decision — PROPOSED ≠ DECIDED.
 *
 * D-W2-A3-01 — material reinstruction mints a new candidate version on the same
 * ProjectTrajectory SoT; exact semantic idempotence may reuse the same version.
 *
 * Reuses existing OA use cases only. No parallel engine, no second store.
 */

import { randomBytes } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type { ProjectTrajectory, TrajectoryStep } from "@/lib/oa/cycle";
import {
  computeOptionSetDigest,
  computeQualificationDigest,
  findLatestOptionSetBindingForTrajectory,
  optionSetObservationId,
  optionSetOptionId,
  optionSetRecommendationId,
  serializePresentedOptionSet,
  type PresentedOptionSetBinding,
} from "./presentedOptionSet";
import {
  deriveTrajectoryOptions,
  deriveTrajectoryRecommendation,
  type TrajectoryOptionInputs,
} from "./trajectoryOptions";
import type {
  ProposeTrajectoryOptionsResult,
  TrajectoryOptionDto,
  TrajectoryRecommendationDto,
} from "./types";

/** Nora proposes; it never decides. Kept N1 so it can never satisfy a gate. */
const NORA_OPTION_AUTHOR = Object.freeze({
  actorId: "actor:nora-w2",
  role: "agent" as const,
  displayName: "Nora W2",
  authorityLevel: "N1" as const,
});

function shortId(): string {
  return randomBytes(6).toString("hex");
}

/**
 * Server-side lineage head for the project: current if any, then probe forward
 * so an undecided candidate ahead of current is preferred (D-W2-A3-01 CAS B).
 */
async function resolveLatestTrajectory(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<ProjectTrajectory | null> {
  const current = await oa.cycleServices.getCurrentTrajectory.execute({
    projectId,
  });
  let latest: ProjectTrajectory | null = current.ok ? current.trajectory : null;
  let probe = latest ? latest.version + 1 : 1;
  while (probe <= (latest?.version ?? 0) + 64) {
    const next = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId,
      version: probe,
    });
    if (!next.ok) break;
    latest = next.trajectory;
    probe += 1;
  }
  return latest;
}

function optionStatement(option: TrajectoryOptionDto): string {
  const steps = option.steps.map((s) => `${s.order}. ${s.label}`).join(" | ");
  return `OPTION ${option.label} — ${option.intent} Étapes: ${steps}`;
}

function recommendationStatement(
  recommendation: TrajectoryRecommendationDto,
  options: readonly TrajectoryOptionDto[],
): string {
  const target = options.find(
    (o) => o.optionRef === recommendation.recommendedOptionRef,
  );
  return `${recommendation.label} — option recommandée: ${target?.label ?? recommendation.recommendedOptionRef}. ${recommendation.rationale}`;
}

/**
 * A3-EPI-01 — when presenting a successor OptionSet, declare supersedes links
 * so UpdateEpistemicState retires the prior set's Observation, Recommendation,
 * and corresponding Options (by optionRef). No delete; history stays durable.
 */
function withPriorSetSupersedes<T extends object>(
  item: T,
  priorEpistemicItemId: string | undefined,
): T & { supersedes?: string } {
  if (!priorEpistemicItemId) return item;
  return { ...item, supersedes: priorEpistemicItemId };
}

export type ProposeTrajectoryOptionsInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  /** Durable qualification truth already produced by W1. */
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly criticalSignalsPresent: boolean;
  readonly irreversible: boolean;
  readonly reservations: readonly string[];
  /** W1 bounded CKC seam attribution, or null when unavailable. */
  readonly ckcAttribution: string | null;
  readonly correlationId?: string;
};

export async function proposeTrajectoryOptions(
  input: ProposeTrajectoryOptionsInput,
): Promise<ProposeTrajectoryOptionsResult> {
  const { oa } = input;
  const live = await readLiveProjectContext(oa, input.projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const inputs: TrajectoryOptionInputs = {
    cycleTypeId: input.cycleTypeId,
    recommendedProfile: input.recommendedProfile,
    criticalSignalsPresent: input.criticalSignalsPresent,
    irreversible: input.irreversible,
    reservations: input.reservations,
    ckcAttribution: input.ckcAttribution,
  };
  const options = deriveTrajectoryOptions(inputs);
  const recommendation = deriveTrajectoryRecommendation(inputs);
  const optionSetRef = `optset:w2-${shortId()}`;
  const correlationId = input.correlationId ?? `cor:w2-opt-${shortId()}`;
  const qualificationDigest = computeQualificationDigest({
    cycleTypeId: input.cycleTypeId,
    recommendedProfile: input.recommendedProfile,
    criticalSignalsPresent: input.criticalSignalsPresent,
    irreversible: input.irreversible,
    reservations: input.reservations,
    ckcAttribution: input.ckcAttribution,
  });
  const optionSetDigest = computeOptionSetDigest({
    cycleTypeId: input.cycleTypeId,
    recommendedProfile: input.recommendedProfile,
    criticalSignalsPresent: input.criticalSignalsPresent,
    irreversible: input.irreversible,
    reservations: input.reservations,
    options,
    recommendedOptionRef: recommendation.recommendedOptionRef,
  });

  // The proposed trajectory mirrors the recommended option's outline for
  // presentation. Decide seals the Pilote-selected option's steps (A1).
  const proposedSteps: TrajectoryStep[] = structuredClone(
    (options.find((o) => o.optionRef === recommendation.recommendedOptionRef) ??
      options[0]!).steps,
  ) as TrajectoryStep[];

  const latest = await resolveLatestTrajectory(oa, input.projectId);

  let proposedTrajectoryId: string;
  let proposedVersion: number;
  /** Prior candidate version whose OptionSet Observation should be superseded. */
  let observationSupersedeVersion: number | null = null;

  const existingCandidate =
    latest !== null && latest.status === "candidate" ? latest : null;

  let reuseExistingCandidate = false;
  if (existingCandidate) {
    const prior = await findLatestOptionSetBindingForTrajectory(
      oa,
      input.projectId,
      existingCandidate.trajectoryId,
      existingCandidate.version,
    );
    reuseExistingCandidate =
      prior !== null &&
      prior.optionSetDigest === optionSetDigest &&
      prior.qualificationDigest === qualificationDigest;
  }

  if (reuseExistingCandidate && existingCandidate) {
    // A3-1 — exact semantic idempotence: same SoT version, no artificial bump.
    proposedTrajectoryId = existingCandidate.trajectoryId;
    proposedVersion = existingCandidate.version;
    observationSupersedeVersion = existingCandidate.version;
  } else if (latest) {
    // D-W2-A3-01 — OCC against lineage HEAD (latest), never client-invented.
    // Material change on an undecided candidate → vN+1 + supersede vN.
    // First propose after a decided current → candidate ahead of current.
    const liveAfterHead = await readLiveProjectContext(oa, input.projectId);
    if (!liveAfterHead.ok) {
      return {
        ok: false,
        code: liveAfterHead.code,
        message: liveAfterHead.message,
      };
    }
    const proposed = await oa.cycleServices.proposeTrajectoryVersion.execute({
      trajectoryId: latest.trajectoryId,
      projectId: input.projectId,
      expectedVersion: latest.version,
      steps: proposedSteps,
      status: "candidate",
      createdBy: NORA_OPTION_AUTHOR,
      correlationId,
      expectedLpsVersion: liveAfterHead.context.lpsVersion,
    });
    if (!proposed.ok) {
      return {
        ok: false,
        code: proposed.error.detailCode,
        message: `Proposition d'une nouvelle version de trajectoire échouée (${proposed.error.detailCode}).`,
      };
    }
    proposedTrajectoryId = proposed.trajectory.trajectoryId;
    proposedVersion = proposed.trajectory.version;
    observationSupersedeVersion =
      existingCandidate !== null ? existingCandidate.version : null;
  } else {
    const trajectoryId = `trj:w2-${shortId()}`;
    const created = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId,
      projectId: input.projectId,
      steps: proposedSteps,
      status: "candidate",
      createdBy: NORA_OPTION_AUTHOR,
      correlationId,
      expectedLpsVersion: live.context.lpsVersion,
    });
    if (!created.ok) {
      return {
        ok: false,
        code: created.error.detailCode,
        message: `Création de la trajectoire proposée échouée (${created.error.detailCode}).`,
      };
    }
    proposedTrajectoryId = created.trajectory.trajectoryId;
    proposedVersion = created.trajectory.version;
  }

  const priorBinding =
    observationSupersedeVersion !== null
      ? await findLatestOptionSetBindingForTrajectory(
          oa,
          input.projectId,
          proposedTrajectoryId,
          observationSupersedeVersion,
        )
      : null;

  const priorOptionRefs = new Set(
    priorBinding?.options.map((o) => o.optionRef) ?? [],
  );
  // Current W2 catalogue always re-emits the same structuring optionRefs.
  // If a prior Option cannot be retired via an optionRef-matched replacement,
  // that would require a Morris retirement semantic — fail closed here.
  if (priorBinding) {
    for (const priorOption of priorBinding.options) {
      if (!options.some((o) => o.optionRef === priorOption.optionRef)) {
        return {
          ok: false,
          code: "EPISTEMIC_OPTION_RETIREMENT_UNSUPPORTED",
          message:
            "Une Option antérieure n'a pas d'équivalent optionRef dans le nouvel OptionSet — retraite épistémique non supportée sans décision Morris.",
        };
      }
    }
  }

  const optionEpistemicItems = options.map((option) => {
    const priorOptionId =
      priorBinding && priorOptionRefs.has(option.optionRef)
        ? optionSetOptionId(priorBinding.optionSetRef, option.optionRef)
        : undefined;
    return withPriorSetSupersedes(
      {
        epistemicItemId: optionSetOptionId(optionSetRef, option.optionRef),
        type: "Option" as const,
        statement: optionStatement(option),
        status: "active" as const,
        source: optionSetRef,
        relatedObjects: [input.projectId, option.optionRef, optionSetRef],
      },
      priorOptionId,
    );
  });

  const recommendationItem = withPriorSetSupersedes(
    {
      epistemicItemId: optionSetRecommendationId(optionSetRef),
      type: "Recommendation" as const,
      // Process/qualification source — CKC attribution is context only.
      statement: [
        recommendationStatement(recommendation, options),
        input.ckcAttribution
          ? ` CKC context (not semantic cause): ${input.ckcAttribution}.`
          : " CKC context: none.",
      ].join(""),
      status: "active" as const,
      source: optionSetRef,
      relatedObjects: [
        input.projectId,
        recommendation.recommendedOptionRef,
        optionSetRef,
        ...(input.ckcAttribution ? [input.ckcAttribution] : []),
      ],
    },
    priorBinding
      ? optionSetRecommendationId(priorBinding.optionSetRef)
      : undefined,
  );

  const epistemicRefs = [
    ...optionEpistemicItems.map((i) => i.epistemicItemId),
    recommendationItem.epistemicItemId,
    optionSetObservationId(optionSetRef),
  ];

  const presentedBinding: PresentedOptionSetBinding = {
    kind: "w2_presented_option_set",
    optionSetRef,
    optionSetDigest,
    qualificationDigest,
    trajectoryId: proposedTrajectoryId,
    candidateVersion: proposedVersion,
    optionRefs: options.map((o) => o.optionRef),
    recommendedOptionRef: recommendation.recommendedOptionRef,
    options,
    recommendation,
    epistemicRefs,
    cycleTypeId: input.cycleTypeId,
    recommendedProfile: input.recommendedProfile,
    criticalSignalsPresent: input.criticalSignalsPresent,
    irreversible: input.irreversible,
    reservations: [...input.reservations],
    ckcAttribution: input.ckcAttribution,
  };

  const observationItem = withPriorSetSupersedes(
    {
      epistemicItemId: optionSetObservationId(optionSetRef),
      type: "Observation" as const,
      statement: serializePresentedOptionSet(presentedBinding),
      status: "active" as const,
      source: optionSetRef,
      relatedObjects: [input.projectId, optionSetRef, proposedTrajectoryId],
    },
    priorBinding
      ? optionSetObservationId(priorBinding.optionSetRef)
      : undefined,
  );

  const materialized = await oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    items: [...optionEpistemicItems, recommendationItem, observationItem],
    createdBy: NORA_OPTION_AUTHOR,
    correlationId,
  });
  if (!materialized.ok) {
    return {
      ok: false,
      code: materialized.error.detailCode,
      message: `Matérialisation des options échouée (${materialized.error.detailCode}).`,
    };
  }

  return {
    ok: true,
    optionSetRef,
    cycleTypeId: input.cycleTypeId,
    recommendedProfile: input.recommendedProfile,
    options,
    recommendation,
    epistemicRefs,
    proposedTrajectory: {
      trajectoryId: proposedTrajectoryId,
      version: proposedVersion,
      status: "candidate",
      statusLabel: "TRAJECTOIRE PROPOSÉE",
      isCurrent: false,
    },
    phase: "OPTIONS_PROPOSED",
    autoDecisionPerformed: false,
    executionPerformed: false,
  };
}

/** Exposed for the read model / tests: the Pilote is the decision-maker. */
export const W2_DECISION_ACTOR = LOCAL_PILOTE_ACTOR;
```

END FILE `projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts` — 399 lines

---

## FILE: `projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts`

### A3-EPI-01 — presentedOptionSet ID helpers (FULL FILE)

```typescript
/**
 * W2 Track A — durable presented OptionSet binding.
 *
 * Propose materialises an Epistemic Observation that pins the exact OptionSet
 * shown to the Pilote. Decide loads that Observation and never re-derives
 * options from live qualification (A2).
 */

import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { TrajectoryOptionDto, TrajectoryRecommendationDto } from "./types";

export const W2_PRESENTED_OPTION_SET_KIND = "w2_presented_option_set" as const;

export type OptionSetDigestInputs = {
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly criticalSignalsPresent: boolean;
  readonly irreversible: boolean;
  readonly reservations: readonly string[];
  readonly options: readonly TrajectoryOptionDto[];
  readonly recommendedOptionRef: string;
};

export type QualificationDigestInputs = {
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly criticalSignalsPresent: boolean;
  readonly irreversible: boolean;
  readonly reservations: readonly string[];
  readonly ckcAttribution: string | null;
};

export type PresentedOptionSetBinding = {
  readonly kind: typeof W2_PRESENTED_OPTION_SET_KIND;
  readonly optionSetRef: string;
  readonly optionSetDigest: string;
  readonly qualificationDigest: string;
  readonly trajectoryId: string;
  readonly candidateVersion: number;
  readonly optionRefs: readonly string[];
  readonly recommendedOptionRef: string;
  readonly options: readonly TrajectoryOptionDto[];
  readonly recommendation: TrajectoryRecommendationDto;
  readonly epistemicRefs: readonly string[];
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly criticalSignalsPresent: boolean;
  readonly irreversible: boolean;
  readonly reservations: readonly string[];
  readonly ckcAttribution: string | null;
};

export function computeQualificationDigest(
  inputs: QualificationDigestInputs,
): string {
  return computeDecisionBasisSourceDigest({
    cycleTypeId: inputs.cycleTypeId,
    recommendedProfile: inputs.recommendedProfile,
    criticalSignalsPresent: inputs.criticalSignalsPresent,
    irreversible: inputs.irreversible,
    reservations: [...inputs.reservations],
    ckcAttribution: inputs.ckcAttribution,
  });
}

export function computeOptionSetDigest(inputs: OptionSetDigestInputs): string {
  return computeDecisionBasisSourceDigest({
    cycleTypeId: inputs.cycleTypeId,
    recommendedProfile: inputs.recommendedProfile,
    criticalSignalsPresent: inputs.criticalSignalsPresent,
    irreversible: inputs.irreversible,
    reservations: [...inputs.reservations],
    options: inputs.options.map((o) => ({
      optionRef: o.optionRef,
      label: o.label,
      stepIds: o.steps.map((s) => s.stepId),
    })),
    recommendedOptionRef: inputs.recommendedOptionRef,
  });
}

export function optionSetObservationId(optionSetRef: string): string {
  return `epi:${optionSetRef.replace("optset:", "set-")}`;
}

/** Deterministic Recommendation EpistemicItem id for a presented OptionSet. */
export function optionSetRecommendationId(optionSetRef: string): string {
  return `epi:${optionSetRef.replace("optset:", "rec-")}`;
}

/** Deterministic Option EpistemicItem id for a presented Option within a set. */
export function optionSetOptionId(
  optionSetRef: string,
  optionRef: string,
): string {
  const slug = optionRef.replace(/[^a-zA-Z0-9]/g, "-");
  return `epi:${optionSetRef.replace("optset:", "opt-")}-${slug}`;
}

export function serializePresentedOptionSet(
  binding: PresentedOptionSetBinding,
): string {
  return JSON.stringify(binding);
}

function isPresentedBinding(value: unknown): value is PresentedOptionSetBinding {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    v.kind === W2_PRESENTED_OPTION_SET_KIND &&
    typeof v.optionSetRef === "string" &&
    typeof v.optionSetDigest === "string" &&
    typeof v.qualificationDigest === "string" &&
    typeof v.trajectoryId === "string" &&
    typeof v.candidateVersion === "number" &&
    Array.isArray(v.options) &&
    typeof v.recommendedOptionRef === "string"
  );
}

export function parsePresentedOptionSetStatement(
  statement: string,
): PresentedOptionSetBinding | null {
  try {
    const parsed: unknown = JSON.parse(statement);
    return isPresentedBinding(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export type LoadPresentedOptionSetResult =
  | { readonly ok: true; readonly presented: PresentedOptionSetBinding }
  | { readonly ok: false; readonly code: string; readonly message: string };

/**
 * Fail-closed load of the exact OptionSet presented at propose time.
 */
export async function loadPresentedOptionSet(
  oa: RuntimeOaStack,
  projectId: string,
  optionSetRef: string,
): Promise<LoadPresentedOptionSetResult> {
  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId,
  });
  if (!epistemic.ok) {
    return {
      ok: false,
      code: "OPTION_SET_STALE",
      message:
        "État épistémique illisible — le jeu d'options présenté est indisponible.",
    };
  }

  const observationId = optionSetObservationId(optionSetRef);
  const item = epistemic.state.items.find(
    (i) =>
      i.epistemicItemId === observationId &&
      i.type === "Observation" &&
      i.status === "active",
  );
  if (!item) {
    return {
      ok: false,
      code: "OPTION_SET_STALE",
      message:
        "Jeu d'options présenté introuvable — aucune décision possible sur cette référence.",
    };
  }

  const presented = parsePresentedOptionSetStatement(item.statement);
  if (!presented || presented.optionSetRef !== optionSetRef) {
    return {
      ok: false,
      code: "OPTION_SET_STALE",
      message:
        "Liaison du jeu d'options présenté illisible ou incohérente — fail-closed.",
    };
  }

  return { ok: true, presented };
}

/**
 * Find the latest active OptionSet Observation bound to a trajectory version.
 */
export async function findLatestOptionSetBindingForTrajectory(
  oa: RuntimeOaStack,
  projectId: string,
  trajectoryId: string,
  candidateVersion: number,
): Promise<PresentedOptionSetBinding | null> {
  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId,
  });
  if (!epistemic.ok) return null;

  const matches: PresentedOptionSetBinding[] = [];
  for (const item of epistemic.state.items) {
    if (item.type !== "Observation" || item.status !== "active") continue;
    if (!item.relatedObjects?.includes(trajectoryId)) continue;
    const parsed = parsePresentedOptionSetStatement(item.statement);
    if (!parsed) continue;
    if (
      parsed.trajectoryId === trajectoryId &&
      parsed.candidateVersion === candidateVersion
    ) {
      matches.push(parsed);
    }
  }
  return matches.length > 0 ? matches[matches.length - 1]! : null;
}
```

END FILE `projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts` — 214 lines

---

## FILE: `projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts`

### A3-EPI-01 + H1 + H2 tests (FULL FILE)

```typescript
// @vitest-environment node
/**
 * W2-G3 E+A+B+C — deterministic product-native proof.
 * No Execute · no REAL · no Phase B / Track D.
 */
import { afterEach, describe, expect, it } from "vitest";
import { RUNTIME_DISCLOSURES } from "@/lib/vertical-slice-runtime/disclosures";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
import {
  F3_ACTION,
  F3_CAPABILITY,
  F3_SCOPE,
  F3_TARGET,
} from "@/features/project-assistant/f3/constants";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { assertDecisionAuthorizesPromotion, decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import {
  inspectExecutionContract,
  readContractInspectionState,
} from "@/features/project-assistant/w2/inspectExecutionContract";
import { readW2ProjectHistory } from "@/features/project-assistant/w2/projectHistory";
import {
  computeOptionSetDigest,
  computeQualificationDigest,
  loadPresentedOptionSet,
  optionSetObservationId,
  optionSetOptionId,
  optionSetRecommendationId,
} from "@/features/project-assistant/w2/presentedOptionSet";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
  deriveTrajectoryOptions,
  deriveTrajectoryRecommendation,
} from "@/features/project-assistant/w2/trajectoryOptions";
import { w1RestartHonestyMessage } from "@/features/project-assistant/presentationLabels";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { TrajectoryStep } from "@/lib/oa/cycle";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

afterEach(() => {
  cleanupW2TempDirs();
});

describe("W2 Track E — disclosure honesty", () => {
  it("states trajectory / epistemic / granted confirmation as durable and Phase B as not implemented", () => {
    expect(RUNTIME_DISCLOSURES.projectTrajectoryRestartSafe).toBe(true);
    expect(RUNTIME_DISCLOSURES.materializedEpistemicRestartSafe).toBe(true);
    expect(RUNTIME_DISCLOSURES.grantedConfirmationRestartSafe).toBe(true);
    expect(RUNTIME_DISCLOSURES.requestedConfirmationRestartSafe).toBe(false);
    expect(RUNTIME_DISCLOSURES.w2Cognition).toBe("IN_PROGRESS_NOT_COMPLETE");
    expect(RUNTIME_DISCLOSURES.ckcPhaseBCognition).toBe(
      "NOT_AUTHORIZED_NOT_IMPLEMENTED",
    );
    const joined = RUNTIME_DISCLOSURES.messages.join(" ");
    expect(joined).toMatch(/ProjectTrajectory versions/);
    expect(joined).not.toMatch(/Trajectory\/Epistemic Memory remain process-local/);
    expect(joined).toMatch(/CKC Phase B cognition integration is NOT authorized/);
    expect(joined).toMatch(/Runtime v3 is not ADOPTED/);
    expect(w1RestartHonestyMessage()).toMatch(/trajectoire effective\/décidée/i);
    expect(w1RestartHonestyMessage()).toMatch(/confirmation demandée/i);
  });
});

describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
  it("derives deterministic Options and a Recommendation that never decides", () => {
    const inputs = {
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      criticalSignalsPresent: false,
      irreversible: false,
      reservations: [] as string[],
      ckcAttribution: null,
    };
    const options = deriveTrajectoryOptions(inputs);
    const recommendation = deriveTrajectoryRecommendation(inputs);
    expect(options).toHaveLength(3);
    expect(options.map((o) => o.kind)).toEqual(["OPTION", "OPTION", "OPTION"]);
    expect(options.map((o) => o.optionRef)).toEqual([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]);
    expect(recommendation.isHumanDecision).toBe(false);
    expect(recommendation.promotesTrajectory).toBe(false);
    expect(recommendation.label).toBe("RECOMMANDATION — PAS UNE DÉCISION");
    expect(recommendation.recommendedOptionRef).toBe(BOUNDED_OPTION_REF);
    expect(
      deriveTrajectoryRecommendation({
        ...inputs,
        recommendedProfile: "Critical",
        criticalSignalsPresent: true,
      }).recommendedOptionRef,
    ).toBe(GOVERNED_OPTION_REF);
    expect(
      deriveTrajectoryRecommendation({
        ...inputs,
        reservations: ["Réserve ouverte"],
      }).recommendedOptionRef,
    ).toBe(CLARIFY_OPTION_REF);
  });

  it("refuses promotion without an accepted structuring HumanDecision", () => {
    const refused = assertDecisionAuthorizesPromotion({
      decision: null,
      projectId: "prj:w2-a",
      trajectoryId: "trj:w2-a",
      candidateVersion: 1,
      selectedOptionRef: GOVERNED_OPTION_REF,
    });
    expect(refused.ok).toBe(false);
    if (!refused.ok) expect(refused.code).toBe("DECISION_REQUIRED");
  });

  it("proposes a candidate that is not current, then promotes only after Pilote HD", async () => {
    const db = tempProductDbPath("w2-a.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a" });
    const oa = runtime.oa!;

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);
    expect(proposed.recommendation.isHumanDecision).toBe(false);
    expect(proposed.recommendation.promotesTrajectory).toBe(false);
    expect(proposed.proposedTrajectory.isCurrent).toBe(false);
    expect(proposed.proposedTrajectory.status).toBe("candidate");

    const before = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(before.ok).toBe(false);

    const selectedOption = proposed.options[0]!; // GOVERNED — not the Standard recommendation
    expect(selectedOption.optionRef).not.toBe(
      proposed.recommendation.recommendedOptionRef,
    );

    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: selectedOption.optionRef,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      epistemicRefs: proposed.epistemicRefs,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.executionPerformed).toBe(false);
    expect(decided.decision.actorRole).toBe("Pilote");
    expect(decided.decision.decisionBasisLinked).toBe(true);
    expect(decided.trajectory.isCurrent).toBe(true);
    expect(decided.trajectory.statusLabel).toBe("TRAJECTOIRE DÉCIDÉE / COURANTE");
    expect(decided.trajectory.decidedByDecisionRef).toBe(
      decided.decision.decisionId,
    );

    const current = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.version).toBe(decided.trajectory.version);
    expect(current.trajectory.decidedByDecisionRef).toBe(
      decided.decision.decisionId,
    );
    // A1 — decided trajectory content equals the selected option steps.
    expect(current.trajectory.steps.map((s) => s.stepId)).toEqual(
      selectedOption.steps.map((s) => s.stepId),
    );
    expect(current.trajectory.decidedOptionRef).toBe(selectedOption.optionRef);

    const durable = await oa.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    expect(durable.decision.actor.actorId).toBe(LOCAL_PILOTE_ACTOR.actorId);
    expect(durable.decision.decisionBasis?.sourceType).toBe("trajectory_option");
    expect(durable.decision.decisionBasis?.trajectoryContext?.selectedOptionRef).toBe(
      selectedOption.optionRef,
    );
    expect(durable.decision.decisionBasis?.trajectoryContext?.optionSetDigest).toBeTruthy();

    const unknown = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: "opt:trajectory:invented",
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(unknown.ok).toBe(false);
    if (!unknown.ok) expect(unknown.code).toBe("OPTION_NOT_PRESENTED");
  });

  it("A2-1 — happy path: unchanged qualification allows decide on presented X", async () => {
    const db = tempProductDbPath("w2-a2-1.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a21" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a21" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const loaded = await loadPresentedOptionSet(
      oa,
      seeded.projectId,
      proposed.optionSetRef,
    );
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.presented.qualificationDigest).toBe(
      computeQualificationDigest(qualification.qualification.inputs),
    );

    const epistemic = await oa.cycleServices.getEpistemicState.execute({
      projectId: seeded.projectId,
    });
    expect(epistemic.ok).toBe(true);
    if (!epistemic.ok) return;
    const recommendation = epistemic.state.items.find(
      (i) => i.type === "Recommendation" && i.status === "active",
    );
    expect(recommendation?.source).toBe(proposed.optionSetRef);

    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: proposed.recommendation.recommendedOptionRef,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.decision.selectedOptionRef).toBe(
      proposed.recommendation.recommendedOptionRef,
    );
    expect(decided.trajectory.isCurrent).toBe(true);
  });

  it("A2-2 — reservation drift makes presented X OPTION_SET_STALE (no HD, no current)", async () => {
    const db = tempProductDbPath("w2-a2-2.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a22" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a22" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: "epi:w2-rsv-a2-drift",
          type: "Reservation",
          statement: "Réserve ouverte après propose",
          status: "active",
          blocking: false,
        },
      ],
      createdBy: LOCAL_PILOTE_ACTOR,
    });
    const driftedQual = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(driftedQual.ok).toBe(true);
    if (!driftedQual.ok) return;
    expect(
      computeQualificationDigest(driftedQual.qualification.inputs),
    ).not.toBe(computeQualificationDigest(qualification.qualification.inputs));
    expect(
      deriveTrajectoryRecommendation(driftedQual.qualification.inputs)
        .recommendedOptionRef,
    ).toBe(CLARIFY_OPTION_REF);
    expect(proposed.recommendation.recommendedOptionRef).not.toBe(
      CLARIFY_OPTION_REF,
    );

    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: proposed.recommendation.recommendedOptionRef,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(false);
    if (!decided.ok) expect(decided.code).toBe("OPTION_SET_STALE");

    const history = await oa.decisionServices.listDecisionHistory.execute({
      projectId: seeded.projectId,
    });
    const accepted = history.ok
      ? history.decisions.filter((d) => d.status === "accepted")
      : [];
    expect(accepted).toHaveLength(0);

    const current = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);
  });

  it("A2-5 — hostile client cannot supply a forged current or presented digest", async () => {
    const db = tempProductDbPath("w2-a2-5.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a25" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a25" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: "epi:w2-rsv-a25",
          type: "Reservation",
          statement: "Drift hostile",
          status: "active",
          blocking: false,
        },
      ],
      createdBy: LOCAL_PILOTE_ACTOR,
    });

    // Client-supplied options / digest hints are ignored; decide reloads durable
    // presented set and recomputes live qualification server-side.
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: proposed.recommendation.recommendedOptionRef,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      epistemicRefs: proposed.epistemicRefs,
      canActAsMorris: true,
      claimedAuthorityLevel: "N3",
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(false);
    if (!decided.ok) expect(decided.code).toBe("OPTION_SET_STALE");

    const mismatch = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: proposed.recommendation.recommendedOptionRef,
      trajectoryId: "trj:w2-forged",
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(mismatch.ok).toBe(false);
    if (!mismatch.ok) expect(mismatch.code).toBe("TRAJECTORY_MISMATCH");

    const missing = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: "optset:w2-missing",
      selectedOptionRef: proposed.recommendation.recommendedOptionRef,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) expect(missing.code).toBe("OPTION_SET_STALE");
  });

  it("A2-6 — restart Product SQLite still detects durable qualification drift", async () => {
    const db = tempProductDbPath("w2-a2-6.sqlite");
    const runtime1 = bootW2Runtime({ productDbPath: db, idPrefix: "w2a26" });
    const seeded = await seedQualifiedProject(runtime1, { suffix: "a26" });
    const oa1 = runtime1.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa: oa1,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa: oa1,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    await oa1.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: "epi:w2-rsv-a26",
          type: "Reservation",
          statement: "Drift durable avant restart",
          status: "active",
          blocking: false,
        },
      ],
      createdBy: LOCAL_PILOTE_ACTOR,
    });

    const runtime2 = bootW2Runtime({ productDbPath: db, idPrefix: "w2a26b" });
    const oa2 = runtime2.oa!;
    const decided = await decideTrajectory({
      oa: oa2,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: proposed.recommendation.recommendedOptionRef,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(false);
    if (!decided.ok) expect(decided.code).toBe("OPTION_SET_STALE");
  });

  it("A3-1 — exact semantic idempotence reuses same candidate version", async () => {
    const db = tempProductDbPath("w2-a3-1.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a31" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a31" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const first = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const second = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;

    expect(second.proposedTrajectory.trajectoryId).toBe(
      first.proposedTrajectory.trajectoryId,
    );
    expect(second.proposedTrajectory.version).toBe(
      first.proposedTrajectory.version,
    );
    expect(second.proposedTrajectory.version).toBe(1);

    const loadedFirst = await loadPresentedOptionSet(
      oa,
      seeded.projectId,
      first.optionSetRef,
    );
    // First observation superseded by exact re-propose Observation refresh.
    expect(loadedFirst.ok).toBe(false);

    const loadedSecond = await loadPresentedOptionSet(
      oa,
      seeded.projectId,
      second.optionSetRef,
    );
    expect(loadedSecond.ok).toBe(true);
    if (!loadedSecond.ok) return;
    expect(loadedSecond.presented.optionSetDigest).toBe(
      computeOptionSetDigest({
        cycleTypeId: qualification.qualification.inputs.cycleTypeId,
        recommendedProfile: qualification.qualification.inputs.recommendedProfile,
        criticalSignalsPresent:
          qualification.qualification.inputs.criticalSignalsPresent,
        irreversible: qualification.qualification.inputs.irreversible,
        reservations: qualification.qualification.inputs.reservations,
        options: second.options,
        recommendedOptionRef: second.recommendation.recommendedOptionRef,
      }),
    );

    const v1 = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 1,
    });
    expect(v1.ok).toBe(true);
    if (!v1.ok) return;
    expect(v1.trajectory.status).toBe("candidate");

    const v2 = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 2,
    });
    expect(v2.ok).toBe(false);
  });

  it("A3-2 — first candidate reinstruction mints T@v2 and supersedes T@v1", async () => {
    const db = tempProductDbPath("w2-a3-2.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a32" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a32" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const first = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.proposedTrajectory.version).toBe(1);
    const v1StepsBefore = (
      await oa.cycleServices.getTrajectoryVersion.execute({
        projectId: seeded.projectId,
        version: 1,
      })
    );
    expect(v1StepsBefore.ok).toBe(true);
    if (!v1StepsBefore.ok) return;
    const historicSteps = structuredClone(v1StepsBefore.trajectory.steps);

    await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: "epi:w2-rsv-a32",
          type: "Reservation",
          statement: "Réserve qui change le digest matériel",
          status: "active",
          blocking: false,
        },
      ],
      createdBy: LOCAL_PILOTE_ACTOR,
    });
    const requal = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(requal.ok).toBe(true);
    if (!requal.ok) return;

    const second = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...requal.qualification.inputs,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.optionSetRef).not.toBe(first.optionSetRef);
    expect(second.proposedTrajectory.trajectoryId).toBe(
      first.proposedTrajectory.trajectoryId,
    );
    expect(second.proposedTrajectory.version).toBe(2);

    const loadedX = await loadPresentedOptionSet(
      oa,
      seeded.projectId,
      first.optionSetRef,
    );
    const loadedY = await loadPresentedOptionSet(
      oa,
      seeded.projectId,
      second.optionSetRef,
    );
    expect(loadedX.ok).toBe(false);
    expect(loadedY.ok).toBe(true);
    if (!loadedY.ok) return;
    const firstDigest = computeOptionSetDigest({
      cycleTypeId: qualification.qualification.inputs.cycleTypeId,
      recommendedProfile: qualification.qualification.inputs.recommendedProfile,
      criticalSignalsPresent:
        qualification.qualification.inputs.criticalSignalsPresent,
      irreversible: qualification.qualification.inputs.irreversible,
      reservations: qualification.qualification.inputs.reservations,
      options: first.options,
      recommendedOptionRef: first.recommendation.recommendedOptionRef,
    });
    expect(loadedY.presented.optionSetDigest).not.toBe(firstDigest);
    expect(loadedY.presented.candidateVersion).toBe(2);
    expect(loadedY.presented.qualificationDigest).toBe(
      computeQualificationDigest(requal.qualification.inputs),
    );

    const v1 = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 1,
    });
    expect(v1.ok).toBe(true);
    if (!v1.ok) return;
    expect(v1.trajectory.status).toBe("superseded");
    expect(v1.trajectory.steps).toEqual(historicSteps);

    const v2 = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 2,
    });
    expect(v2.ok).toBe(true);
    if (!v2.ok) return;
    expect(v2.trajectory.status).toBe("candidate");
    expect(v2.trajectory.supersedesTrajectoryVersion).toBe(1);

    const current = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);
  });

  it("A3-3/A3-4 — old X refused; fresh Y decidable with selected steps", async () => {
    const db = tempProductDbPath("w2-a3-34.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a34" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a34" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const first = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: "epi:w2-rsv-a34",
          type: "Reservation",
          statement: "Drift pour Y",
          status: "active",
          blocking: false,
        },
      ],
      createdBy: LOCAL_PILOTE_ACTOR,
    });
    const requal = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(requal.ok).toBe(true);
    if (!requal.ok) return;
    const second = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...requal.qualification.inputs,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;

    const staleDecide = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: first.optionSetRef,
      selectedOptionRef: first.recommendation.recommendedOptionRef,
      trajectoryId: first.proposedTrajectory.trajectoryId,
      candidateVersion: first.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(staleDecide.ok).toBe(false);
    if (!staleDecide.ok) expect(staleDecide.code).toBe("OPTION_SET_STALE");

    const historyAfterStale =
      await oa.decisionServices.listDecisionHistory.execute({
        projectId: seeded.projectId,
      });
    expect(
      historyAfterStale.ok
        ? historyAfterStale.decisions.filter((d) => d.status === "accepted")
        : [],
    ).toHaveLength(0);

    const selected = second.options.find(
      (o) => o.optionRef !== second.recommendation.recommendedOptionRef,
    )!;
    const freshDecide = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: second.optionSetRef,
      selectedOptionRef: selected.optionRef,
      trajectoryId: second.proposedTrajectory.trajectoryId,
      candidateVersion: second.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(freshDecide.ok).toBe(true);
    if (!freshDecide.ok) return;
    expect(freshDecide.decision.selectedOptionRef).toBe(selected.optionRef);
    expect(freshDecide.trajectory.isCurrent).toBe(true);
    expect(freshDecide.trajectory.decidedOptionRef).toBe(selected.optionRef);

    const current = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.steps.map((s) => s.stepId)).toEqual(
      selected.steps.map((s) => s.stepId),
    );
  });

  it("A3-5 — history honesty survives Product SQLite restart", async () => {
    const db = tempProductDbPath("w2-a3-5.sqlite");
    const runtime1 = bootW2Runtime({ productDbPath: db, idPrefix: "w2a35" });
    const seeded = await seedQualifiedProject(runtime1, { suffix: "a35" });
    const oa1 = runtime1.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa: oa1,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const first = await proposeTrajectoryOptions({
      oa: oa1,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const v1Before = await oa1.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 1,
    });
    expect(v1Before.ok).toBe(true);
    if (!v1Before.ok) return;
    const v1Steps = structuredClone(v1Before.trajectory.steps);

    await oa1.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: "epi:w2-rsv-a35",
          type: "Reservation",
          statement: "Drift restart",
          status: "active",
          blocking: false,
        },
      ],
      createdBy: LOCAL_PILOTE_ACTOR,
    });
    const requal = await resolveW2QualificationInputs({
      oa: oa1,
      projectId: seeded.projectId,
    });
    expect(requal.ok).toBe(true);
    if (!requal.ok) return;
    const second = await proposeTrajectoryOptions({
      oa: oa1,
      projectId: seeded.projectId,
      ...requal.qualification.inputs,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;

    const runtime2 = bootW2Runtime({ productDbPath: db, idPrefix: "w2a35b" });
    const oa2 = runtime2.oa!;
    const v1 = await oa2.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 1,
    });
    const v2 = await oa2.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 2,
    });
    expect(v1.ok).toBe(true);
    expect(v2.ok).toBe(true);
    if (!v1.ok || !v2.ok) return;
    expect(v1.trajectory.status).toBe("superseded");
    expect(v1.trajectory.steps).toEqual(v1Steps);
    expect(v2.trajectory.status).toBe("candidate");
    expect(v2.trajectory.supersedesTrajectoryVersion).toBe(1);
    expect(v2.trajectory.trajectoryId).toBe(v1.trajectory.trajectoryId);

    const x = await loadPresentedOptionSet(oa2, seeded.projectId, first.optionSetRef);
    const y = await loadPresentedOptionSet(oa2, seeded.projectId, second.optionSetRef);
    expect(x.ok).toBe(false);
    expect(y.ok).toBe(true);
    if (!y.ok) return;
    expect(y.presented.candidateVersion).toBe(2);

    const current = await oa2.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);
  });

  it("A3-6 — OCC concurrency: only one writer produces vN+1", async () => {
    const db = tempProductDbPath("w2-a3-6.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a36" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a36" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const first = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const steps = structuredClone(
      first.options[0]!.steps,
    ) as TrajectoryStep[];
    const lps = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const [a, b] = await Promise.all([
      oa.cycleServices.proposeTrajectoryVersion.execute({
        trajectoryId: first.proposedTrajectory.trajectoryId,
        projectId: seeded.projectId,
        expectedVersion: 1,
        steps,
        status: "candidate",
        createdBy: LOCAL_PILOTE_ACTOR,
        expectedLpsVersion: lps.qualification.lpsVersion,
      }),
      oa.cycleServices.proposeTrajectoryVersion.execute({
        trajectoryId: first.proposedTrajectory.trajectoryId,
        projectId: seeded.projectId,
        expectedVersion: 1,
        steps: structuredClone(steps),
        status: "candidate",
        createdBy: LOCAL_PILOTE_ACTOR,
        expectedLpsVersion: lps.qualification.lpsVersion,
      }),
    ]);

    const oks = [a, b].filter((r) => r.ok);
    const fails = [a, b].filter((r) => !r.ok);
    expect(oks).toHaveLength(1);
    expect(fails).toHaveLength(1);
    if (fails[0]?.ok === false) {
      expect(
        fails[0].error.detailCode === "TRAJECTORY_VERSION_CONFLICT" ||
          fails[0].error.detailCode === "LPS_VERSION_CONFLICT" ||
          fails[0].error.detailCode === "PERSISTENCE_FAILURE",
      ).toBe(true);
    }
    if (oks[0]?.ok) {
      expect(oks[0].trajectory.version).toBe(2);
    }

    const v3 = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 3,
    });
    expect(v3.ok).toBe(false);
  });

  it("A3-7 — current exists then one candidate propose remains correct", async () => {
    const db = tempProductDbPath("w2-a3-7.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a37" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a37" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const first = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: first.optionSetRef,
      selectedOptionRef: first.recommendation.recommendedOptionRef,
      trajectoryId: first.proposedTrajectory.trajectoryId,
      candidateVersion: first.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const current = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.version).toBe(decided.trajectory.version);

    const requal = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(requal.ok).toBe(true);
    if (!requal.ok) return;
    const second = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...requal.qualification.inputs,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.proposedTrajectory.trajectoryId).toBe(
      current.trajectory.trajectoryId,
    );
    expect(second.proposedTrajectory.version).toBe(current.trajectory.version + 1);
    expect(second.proposedTrajectory.status).toBe("candidate");

    const stillCurrent = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(stillCurrent.ok).toBe(true);
    if (!stillCurrent.ok) return;
    expect(stillCurrent.trajectory.version).toBe(current.trajectory.version);
    expect(stillCurrent.trajectory.status).not.toBe("superseded");
  });

  it("A3-8 — current + undecided candidate reinstruction mints next candidate", async () => {
    const db = tempProductDbPath("w2-a3-8.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a38" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a38" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const first = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: first.optionSetRef,
      selectedOptionRef: first.recommendation.recommendedOptionRef,
      trajectoryId: first.proposedTrajectory.trajectoryId,
      candidateVersion: first.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const afterDecideQual = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(afterDecideQual.ok).toBe(true);
    if (!afterDecideQual.ok) return;
    const x = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...afterDecideQual.qualification.inputs,
    });
    expect(x.ok).toBe(true);
    if (!x.ok) return;
    expect(x.proposedTrajectory.version).toBe(decided.trajectory.version + 1);
    const xVersion = x.proposedTrajectory.version;

    await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: "epi:w2-rsv-a38",
          type: "Reservation",
          statement: "Drift before HD on undecided candidate",
          status: "active",
          blocking: false,
        },
      ],
      createdBy: LOCAL_PILOTE_ACTOR,
    });
    const requal = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(requal.ok).toBe(true);
    if (!requal.ok) return;
    const y = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...requal.qualification.inputs,
    });
    expect(y.ok).toBe(true);
    if (!y.ok) return;
    expect(y.proposedTrajectory.trajectoryId).toBe(x.proposedTrajectory.trajectoryId);
    expect(y.proposedTrajectory.version).toBe(xVersion + 1);
    expect(y.proposedTrajectory.version).not.toBe(xVersion);

    const priorCandidate = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: xVersion,
    });
    expect(priorCandidate.ok).toBe(true);
    if (!priorCandidate.ok) return;
    expect(priorCandidate.trajectory.status).toBe("superseded");

    const newCandidate = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: y.proposedTrajectory.version,
    });
    expect(newCandidate.ok).toBe(true);
    if (!newCandidate.ok) return;
    expect(newCandidate.trajectory.status).toBe("candidate");
    expect(newCandidate.trajectory.supersedesTrajectoryVersion).toBe(xVersion);

    const current = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.version).toBe(decided.trajectory.version);
  });

  it("A3-6b — reinstruction atomicity: trajectory save failure leaves prior candidate intact", async () => {
    const db = tempProductDbPath("w2-a3-6b.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a36b" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a36b" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const first = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const store = oa.projectServices.store as { failNextSave?: string | null };
    store.failNextSave = "trajectory";
    const failed = await oa.cycleServices.proposeTrajectoryVersion.execute({
      trajectoryId: first.proposedTrajectory.trajectoryId,
      projectId: seeded.projectId,
      expectedVersion: 1,
      steps: structuredClone(first.options[0]!.steps) as TrajectoryStep[],
      status: "candidate",
      createdBy: LOCAL_PILOTE_ACTOR,
      expectedLpsVersion: qualification.qualification.lpsVersion,
    });
    store.failNextSave = null;
    expect(failed.ok).toBe(false);

    const v1 = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 1,
    });
    expect(v1.ok).toBe(true);
    if (!v1.ok) return;
    expect(v1.trajectory.status).toBe("candidate");

    const v2 = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 2,
    });
    expect(v2.ok).toBe(false);
  });

  it("A3-EPI-01 — material X→Y supersedes Observation+Recommendation+Options of X", async () => {
    const db = tempProductDbPath("w2-epi-1.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2epi1" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "epi1" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const first = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: "epi:w2-rsv-epi1",
          type: "Reservation",
          statement: "Drift matériel EPI",
          status: "active",
          blocking: false,
        },
      ],
      createdBy: LOCAL_PILOTE_ACTOR,
    });
    const requal = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(requal.ok).toBe(true);
    if (!requal.ok) return;
    const second = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...requal.qualification.inputs,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;

    const epistemic = await oa.cycleServices.getEpistemicState.execute({
      projectId: seeded.projectId,
    });
    expect(epistemic.ok).toBe(true);
    if (!epistemic.ok) return;
    const byId = (id: string) =>
      epistemic.state.items.find((i) => i.epistemicItemId === id);

    expect(byId(optionSetObservationId(first.optionSetRef))?.status).toBe(
      "superseded",
    );
    expect(byId(optionSetRecommendationId(first.optionSetRef))?.status).toBe(
      "superseded",
    );
    for (const option of first.options) {
      expect(
        byId(optionSetOptionId(first.optionSetRef, option.optionRef))?.status,
      ).toBe("superseded");
    }

    expect(byId(optionSetObservationId(second.optionSetRef))?.status).toBe(
      "active",
    );
    expect(byId(optionSetRecommendationId(second.optionSetRef))?.status).toBe(
      "active",
    );
    for (const option of second.options) {
      expect(
        byId(optionSetOptionId(second.optionSetRef, option.optionRef))?.status,
      ).toBe("active");
    }

    const activeRecs = epistemic.state.items.filter(
      (i) =>
        i.type === "Recommendation" &&
        i.status === "active" &&
        typeof i.source === "string" &&
        i.source.startsWith("optset:"),
    );
    expect(activeRecs).toHaveLength(1);
    expect(activeRecs[0]?.source).toBe(second.optionSetRef);

    for (const option of second.options) {
      const activeForRef = epistemic.state.items.filter(
        (i) =>
          i.type === "Option" &&
          i.status === "active" &&
          i.relatedObjects?.includes(option.optionRef) &&
          typeof i.source === "string" &&
          i.source.startsWith("optset:"),
      );
      expect(activeForRef).toHaveLength(1);
      expect(activeForRef[0]?.source).toBe(second.optionSetRef);
    }
  });

  it("A3-EPI-04 — epistemic supersession survives Product SQLite restart", async () => {
    const db = tempProductDbPath("w2-epi-4.sqlite");
    const runtime1 = bootW2Runtime({ productDbPath: db, idPrefix: "w2epi4" });
    const seeded = await seedQualifiedProject(runtime1, { suffix: "epi4" });
    const oa1 = runtime1.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa: oa1,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const first = await proposeTrajectoryOptions({
      oa: oa1,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    await oa1.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: "epi:w2-rsv-epi4",
          type: "Reservation",
          statement: "Drift restart EPI",
          status: "active",
          blocking: false,
        },
      ],
      createdBy: LOCAL_PILOTE_ACTOR,
    });
    const requal = await resolveW2QualificationInputs({
      oa: oa1,
      projectId: seeded.projectId,
    });
    expect(requal.ok).toBe(true);
    if (!requal.ok) return;
    const second = await proposeTrajectoryOptions({
      oa: oa1,
      projectId: seeded.projectId,
      ...requal.qualification.inputs,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;

    const runtime2 = bootW2Runtime({ productDbPath: db, idPrefix: "w2epi4b" });
    const epistemic = await runtime2.oa!.cycleServices.getEpistemicState.execute({
      projectId: seeded.projectId,
    });
    expect(epistemic.ok).toBe(true);
    if (!epistemic.ok) return;
    const byId = (id: string) =>
      epistemic.state.items.find((i) => i.epistemicItemId === id);
    expect(byId(optionSetRecommendationId(first.optionSetRef))?.status).toBe(
      "superseded",
    );
    expect(byId(optionSetRecommendationId(second.optionSetRef))?.status).toBe(
      "active",
    );
    expect(byId(optionSetObservationId(first.optionSetRef))?.status).toBe(
      "superseded",
    );
    expect(byId(optionSetObservationId(second.optionSetRef))?.status).toBe(
      "active",
    );
  });

  it("A3-EPI-05 — idempotent refresh supersedes prior epistemic without trajectory bump", async () => {
    const db = tempProductDbPath("w2-epi-5.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2epi5" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "epi5" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const first = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const second = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.proposedTrajectory.version).toBe(
      first.proposedTrajectory.version,
    );

    const epistemic = await oa.cycleServices.getEpistemicState.execute({
      projectId: seeded.projectId,
    });
    expect(epistemic.ok).toBe(true);
    if (!epistemic.ok) return;
    expect(
      epistemic.state.items.find(
        (i) => i.epistemicItemId === optionSetObservationId(first.optionSetRef),
      )?.status,
    ).toBe("superseded");
    expect(
      epistemic.state.items.find(
        (i) =>
          i.epistemicItemId === optionSetRecommendationId(first.optionSetRef),
      )?.status,
    ).toBe("superseded");
    for (const option of first.options) {
      expect(
        epistemic.state.items.find(
          (i) =>
            i.epistemicItemId ===
            optionSetOptionId(first.optionSetRef, option.optionRef),
        )?.status,
      ).toBe("superseded");
    }
    const activeRecs = epistemic.state.items.filter(
      (i) =>
        i.type === "Recommendation" &&
        i.status === "active" &&
        typeof i.source === "string" &&
        i.source.startsWith("optset:"),
    );
    expect(activeRecs).toHaveLength(1);
    expect(activeRecs[0]?.source).toBe(second.optionSetRef);
  });

  it("A3-H1 — sequential stale expectedVersion yields TRAJECTORY_VERSION_CONFLICT", async () => {
    const db = tempProductDbPath("w2-a3-h1.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a3h1" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a3h1" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const first = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const afterFirst = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(afterFirst.ok).toBe(true);
    if (!afterFirst.ok) return;
    const steps = structuredClone(first.options[0]!.steps) as TrajectoryStep[];

    const writerA = await oa.cycleServices.proposeTrajectoryVersion.execute({
      trajectoryId: first.proposedTrajectory.trajectoryId,
      projectId: seeded.projectId,
      expectedVersion: 1,
      steps,
      status: "candidate",
      createdBy: LOCAL_PILOTE_ACTOR,
      expectedLpsVersion: afterFirst.qualification.lpsVersion,
    });
    expect(writerA.ok).toBe(true);
    if (!writerA.ok) return;
    expect(writerA.trajectory.version).toBe(2);

    const afterA = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(afterA.ok).toBe(true);
    if (!afterA.ok) return;

    const writerB = await oa.cycleServices.proposeTrajectoryVersion.execute({
      trajectoryId: first.proposedTrajectory.trajectoryId,
      projectId: seeded.projectId,
      expectedVersion: 1,
      steps: structuredClone(steps),
      status: "candidate",
      createdBy: LOCAL_PILOTE_ACTOR,
      expectedLpsVersion: afterA.qualification.lpsVersion,
    });
    expect(writerB.ok).toBe(false);
    if (!writerB.ok) {
      expect(writerB.error.detailCode).toBe("TRAJECTORY_VERSION_CONFLICT");
      expect(writerB.error.currentVersion).toBe(2);
    }

    const v2 = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 2,
    });
    expect(v2.ok).toBe(true);
    if (!v2.ok) return;
    expect(v2.trajectory.status).toBe("candidate");

    const v3 = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 3,
    });
    expect(v3.ok).toBe(false);
  });

  it("A3-H2 — LPS_VERSION_CONFLICT after trajectory mutations rolls back supersession", async () => {
    const db = tempProductDbPath("w2-a3-h2.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a3h2" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a3h2" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const first = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const v1Before = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 1,
    });
    expect(v1Before.ok).toBe(true);
    if (!v1Before.ok) return;
    const historicSteps = structuredClone(v1Before.trajectory.steps);

    const live = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) return;
    expect(live.qualification.lpsVersion).toBeGreaterThan(1);

    const failed = await oa.cycleServices.proposeTrajectoryVersion.execute({
      trajectoryId: first.proposedTrajectory.trajectoryId,
      projectId: seeded.projectId,
      expectedVersion: 1,
      steps: structuredClone(first.options[0]!.steps) as TrajectoryStep[],
      status: "candidate",
      createdBy: LOCAL_PILOTE_ACTOR,
      // Stale but syntactically valid — OCC on trajectory passes; LPS append fails.
      expectedLpsVersion: 1,
    });
    expect(failed.ok).toBe(false);
    if (!failed.ok) {
      expect(failed.error.detailCode).toBe("LPS_VERSION_CONFLICT");
    }

    const v1 = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 1,
    });
    expect(v1.ok).toBe(true);
    if (!v1.ok) return;
    expect(v1.trajectory.status).toBe("candidate");
    expect(v1.trajectory.steps).toEqual(historicSteps);

    const v2 = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: seeded.projectId,
      version: 2,
    });
    expect(v2.ok).toBe(false);

    const lpsAfter = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) return;
    expect(lpsAfter.qualification.lpsVersion).toBe(live.qualification.lpsVersion);

    const current = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);
  });

  it("A4 — HD+promote share one Product UoW (promote failure rolls back HD)", async () => {
    const db = tempProductDbPath("w2-a4.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a4" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a4" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const store = oa.projectServices.store as {
      failNextSave?: string | null;
    };
    store.failNextSave = "trajectory";

    const failed = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: proposed.recommendation.recommendedOptionRef,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(failed.ok).toBe(false);
    store.failNextSave = null;

    const history = await oa.decisionServices.listDecisionHistory.execute({
      projectId: seeded.projectId,
    });
    const accepted = history.ok
      ? history.decisions.filter((d) => d.status === "accepted")
      : [];
    expect(accepted).toHaveLength(0);

    const current = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);

    const recovered = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: proposed.recommendation.recommendedOptionRef,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(recovered.ok).toBe(true);
  });

  it("keeps decided/current after Product SQLite restart", async () => {
    const db = tempProductDbPath("w2-restart.sqlite");
    const first = bootW2Runtime({ productDbPath: db, idPrefix: "w2r" });
    const seeded = await seedQualifiedProject(first, { suffix: "r" });
    const qualification = await resolveW2QualificationInputs({
      oa: first.oa!,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa: first.oa!,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const decided = await decideTrajectory({
      oa: first.oa!,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: proposed.recommendation.recommendedOptionRef,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const restarted = bootW2Runtime({ productDbPath: db, idPrefix: "w2r2" });
    const current = await restarted.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.decidedByDecisionRef).toBe(
      decided.decision.decisionId,
    );
    const history = await readW2ProjectHistory({
      oa: restarted.oa!,
      projectId: seeded.projectId,
    });
    expect(history.ok).toBe(true);
    if (!history.ok) return;
    expect(history.history.trajectory.effectiveCurrent?.isEffectiveCurrent).toBe(
      true,
    );
    expect(history.history.decisions[0]?.decisionId).toBe(
      decided.decision.decisionId,
    );
  });
});

describe("W2 Track B1 — CKC provenance honesty", () => {

  it("B1 — Recommendation epistemic source is optionSetRef, not ckcAttribution", async () => {
    const db = tempProductDbPath("w2-b1.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2b1" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "b1" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    expect(qualification.qualification.inputs.ckcAttribution).toBeTruthy();

    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const epistemic = await oa.cycleServices.getEpistemicState.execute({
      projectId: seeded.projectId,
    });
    expect(epistemic.ok).toBe(true);
    if (!epistemic.ok) return;
    const recommendation = epistemic.state.items.find(
      (i) => i.type === "Recommendation" && i.status === "active",
    );
    expect(recommendation).toBeTruthy();
    expect(recommendation?.source).toBe(proposed.optionSetRef);
    expect(recommendation?.source).not.toBe(
      qualification.qualification.inputs.ckcAttribution,
    );
    // CKC may appear as related context, never as epistemic source.
    expect(recommendation?.relatedObjects).toContain(
      qualification.qualification.inputs.ckcAttribution,
    );
  });

});

describe("W2 Track B — minimal history", () => {
  it("projects durable anchors only and reports process-local absences", async () => {
    const db = tempProductDbPath("w2-b.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2b" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "b" });
    const history = await readW2ProjectHistory({
      oa: runtime.oa!,
      projectId: seeded.projectId,
    });
    expect(history.ok).toBe(true);
    if (!history.ok) return;
    expect(history.history.projectId).toBe(seeded.projectId);
    expect(history.history.cycle.activeCycleInstanceId).toBe(
      seeded.cycleInstanceId,
    );
    expect(history.history.absent.join(" ")).toMatch(/Conversation/);
    expect(history.history.absent.join(" ")).toMatch(/Proposition F2/);
    expect(history.history.absent.join(" ")).not.toMatch(/transcript/i);
  });
});

describe("W2 Track C — inspection binding + authorization mechanism proofs", () => {
  it("C1 / D-W2-04-R1 — confirm (binding only) keeps inspection; material change invalidates; grantsAuthority always false", async () => {
    const db = tempProductDbPath("w2-c1.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2c1" });
    // Standard profile: Critical cycles fail-close confirm until acknowledged (R-T-A3-1).
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "c1",
      profile: "Standard",
    });
    const oa = runtime.oa!;

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const context = await currentF2Context(runtime, seeded.projectId);
    const prepared = await prepareM3FromDecision({
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: context,
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executionContractId = prepared.payload.contract.executionContractId;

    const inspected = await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.inspectionSufficient).toBe(true);
    expect(inspected.grantsAuthority).toBe(false);

    const confirmed = await confirmExecutionContractForAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(confirmed.executionPerformed).toBe(false);

    const afterConfirm = await readContractInspectionState({
      oa,
      executionContractId,
    });
    expect(afterConfirm.ok).toBe(true);
    if (!afterConfirm.ok) return;
    expect(afterConfirm.inspectionSufficient).toBe(true);
    expect(afterConfirm.grantsAuthority).toBe(false);

    const amendAuthority = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: prepared.payload.contract.scope,
      issuedAt: oa.clock.nowIso(),
      forceEnable: true,
    });
    expect(amendAuthority.ok).toBe(true);
    if (!amendAuthority.ok) return;

    const successor = await oa.executionContractServices.supersedeExecutionContract.execute({
      newExecutionContractId: `${executionContractId}:amended`,
      supersedesExecutionContractId: executionContractId,
      supersessionReason: "scope_change",
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: amendAuthority.evidenceId,
      action: "w2:amended-action",
      target: prepared.payload.contract.target,
      scope: prepared.payload.contract.scope,
      requiredAuthority: "MORRIS",
    });
    expect(successor.ok).toBe(true);
    if (!successor.ok) return;

    const afterMaterial = await readContractInspectionState({
      oa,
      executionContractId: successor.contract.executionContractId,
    });
    expect(afterMaterial.ok).toBe(true);
    if (!afterMaterial.ok) return;
    expect(afterMaterial.inspectionSufficient).toBe(false);
    expect(afterMaterial.grantsAuthority).toBe(false);
  });

  it("NEGATIVE AUTHORIZATION MECHANISM PROOF — uninspected and stale-after-supersede stay BLOCKED", async () => {
    const db = tempProductDbPath("w2-c-neg.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2cn" });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "cn",
      profile: "Critical",
    });
    const oa = runtime.oa!;

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const context = await currentF2Context(runtime, seeded.projectId);
    const prepared = await prepareM3FromDecision({
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: context,
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.executionPerformed).toBe(false);
    expect(prepared.payload.attemptCreated).toBe(false);
    expect(prepared.payload.executionAllowed).toBe(false);
    const executionContractId = prepared.payload.contract.executionContractId;

    const unread = await readContractInspectionState({
      oa,
      executionContractId,
    });
    expect(unread.ok).toBe(true);
    if (!unread.ok) return;
    expect(unread.inspectionSufficient).toBe(false);
    expect(unread.grantsAuthority).toBe(false);

    const blockedUninspected = await evaluateExecutionAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(blockedUninspected.ok).toBe(true);
    if (!blockedUninspected.ok) return;
    expect(blockedUninspected.outcome).toBe("BLOCKED");
    expect(blockedUninspected.reasonCode).toBe("inspection_required");
    expect(blockedUninspected.executionPerformed).toBe(false);
    expect(blockedUninspected.attemptCreated).toBe(false);
    expect(blockedUninspected.authorityReceiptRef).toMatch(/^avr:/);

    const inspected = await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.inspectionSufficient).toBe(true);
    expect(inspected.grantsAuthority).toBe(false);

    const amendAuthority = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: prepared.payload.contract.scope,
      issuedAt: oa.clock.nowIso(),
      forceEnable: true,
    });
    expect(amendAuthority.ok).toBe(true);
    if (!amendAuthority.ok) return;

    const successor = await oa.executionContractServices.supersedeExecutionContract.execute({
      newExecutionContractId: `${executionContractId}:amended`,
      supersedesExecutionContractId: executionContractId,
      supersessionReason: "scope_change",
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: amendAuthority.evidenceId,
      action: "w2:amended-action",
      target: prepared.payload.contract.target,
      scope: prepared.payload.contract.scope,
      requiredAuthority: "MORRIS",
    });
    expect(successor.ok).toBe(true);
    if (!successor.ok) return;

    const blockedStale = await evaluateExecutionAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId: successor.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(blockedStale.ok).toBe(true);
    if (!blockedStale.ok) return;
    expect(blockedStale.outcome).toBe("BLOCKED");
    expect(blockedStale.reasonCode).toMatch(/inspection|reinspection/);
    expect(blockedStale.executionPerformed).toBe(false);
    expect(blockedStale.attemptCreated).toBe(false);
  });

  it("POSITIVE AUTHORIZATION MECHANISM PROOF — inspect+confirm+AUTHORIZE on capable EC (not full /studio E2E)", async () => {
    const db = tempProductDbPath("w2-c-pos.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2cp" });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "cp",
      profile: "Critical",
    });
    const oa = runtime.oa!;

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    // Capable EC via OA build+validate with F3 fixture envelope (prepareM3 yields unresolved caps).
    const scope = F3_SCOPE;
    const authority = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: oa.clock.nowIso(),
      forceEnable: true,
    });
    expect(authority.ok).toBe(true);
    if (!authority.ok) return;

    const executionContractId = `xct:w2-pos:${decided.decision.decisionId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 40)}`;
    const built = await oa.executionContractServices.buildExecutionContract.execute({
      executionContractId,
      projectId: seeded.projectId,
      decisionRefs: [decided.decision.decisionId],
      action: F3_ACTION,
      target: F3_TARGET,
      scope,
      requiredCapabilities: [F3_CAPABILITY],
      requiredAuthority: "N2",
      constraints: ["W2_POS_PROOF", "NO_EXECUTE"],
      stopConditions: ["AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:w2-pos-proof"],
      reversibility: "reversible",
      idempotencyKey: `idem:w2-pos:${decided.decision.decisionId}`,
      correlationId: `cor:w2-pos:${decided.decision.decisionId}`,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;

    const validated = await oa.executionContractServices.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    expect(validated.contract.status).toBe("confirmation_required");

    const inspected = await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.inspectionSufficient).toBe(true);
    expect(inspected.grantsAuthority).toBe(false);

    const confirmed = await confirmExecutionContractForAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(confirmed.executionPerformed).toBe(false);

    const authorized = await evaluateExecutionAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) return;
    expect(authorized.outcome).toBe("AUTHORIZED");
    expect(authorized.executionPerformed).toBe(false);
    expect(authorized.attemptCreated).toBe(false);
    expect(authorized.confirmation.fabricated).toBe(false);
    expect(authorized.agentCapability.sufficient).toBe(true);
    expect(authorized.authorityReceiptRef).toMatch(/^avr:/);
  });
});
```

END FILE `projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts` — 2085 lines

---

## O. Instruction ChatGPT

Review FULL FILE bodies in section N.
If PASS: next gate = READY FOR MORRIS GIT INTEGRATION DECISION — W2-G3 E+A+B+C
No project Git integration before that re-review.
