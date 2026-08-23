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
