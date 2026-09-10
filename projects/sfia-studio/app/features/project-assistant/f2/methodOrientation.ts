/**
 * CORR-PROOF-03 E1 — pure / read-only method orientation + F1 method context.
 *
 * Non-mutating. No provider call. No persistence. No Cycle / LPS / Proposal /
 * HumanDecision / ExecutionContract. Hypothesis lens only.
 */

import {
  getCycleTypeById,
  isKnownCycleTypeId,
} from "@/lib/oa/cycle";
import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import type { ProjectAssistantContextDto } from "../types";
import {
  buildCkcApplicationLensSection,
  loadProductCkcCognitiveContent,
} from "./ckcCognitiveContext";
import type { IntentAnalysisDto } from "./types";

export type MethodOrientationState =
  | "RESOLVED_FROM_INTENT_CANDIDATE"
  | "UNRESOLVED";

export type MethodOrientation = {
  readonly state: MethodOrientationState;
  /** Known catalog cycle id when resolved; never invented. */
  readonly candidateCycleTypeId: string | null;
};

/**
 * Bounded F1 method context — guidance only, non-authoritative.
 * Optional trajectory reserved for a later slice (not populated here).
 */
export type AdvisoryMethodContext = {
  readonly orientation: MethodOrientation;
  readonly cycleLabel: string | null;
  /** Internal CKC lens text for the system prompt (do not expose mechanics to Pilote). */
  readonly ckcLensSection: string | null;
  readonly ckcLoaded: boolean;
  readonly doctrinePinPresent: boolean;
  readonly sourceLimit: "none" | "ckc_unavailable" | "doctrine_unavailable";
  /** Reserved — ProjectTrajectory-on-F1 deferred from CORR-PROOF-03 E1. */
  readonly trajectory?: null;
  /**
   * D-GF-ACW-01 — when true, method CKC comes from the active CycleInstance
   * (authoritative for in-cycle work). Intent candidate orientation remains secondary.
   */
  readonly activeCycleCkcAuthoritative?: boolean;
};

/** Active-cycle CKC grounding passed into method composition (D-GF-ACW-01). */
export type ActiveCycleCkcMethodInput = {
  readonly cycleTypeId: string;
  readonly cycleLabel: string | null;
  readonly ckcLensSection: string | null;
  readonly ckcLoaded: boolean;
  readonly sourceLimit: "none" | "ckc_unavailable" | "doctrine_unavailable";
};

export function resolveMethodOrientation(
  analysis: IntentAnalysisDto,
): MethodOrientation {
  const candidate = analysis.candidateCycleTypeId?.trim() ?? null;
  if (
    analysis.parseOk === true &&
    candidate != null &&
    candidate.length > 0 &&
    isKnownCycleTypeId(candidate)
  ) {
    return Object.freeze({
      state: "RESOLVED_FROM_INTENT_CANDIDATE" as const,
      candidateCycleTypeId: candidate,
    });
  }
  return Object.freeze({
    state: "UNRESOLVED" as const,
    candidateCycleTypeId: null,
  });
}

export function doctrinePackagePinFromProjectContext(
  project: ProjectAssistantContextDto,
): DoctrinePackagePin | null {
  const id = project.doctrineId?.trim();
  const version = project.doctrineVersion?.trim();
  const digest = project.doctrineDigest?.trim();
  if (!id || !version || !digest) return null;
  return Object.freeze({
    doctrinePackageId: id,
    version,
    digest: digest as DoctrinePackagePin["digest"],
  });
}

/**
 * Read-only composition for ordinary F1 advisory.
 * Does NOT call reasonWithResolvedCkcContext. Does NOT qualify or create cycles.
 *
 * When `activeCycleCkc` is present: its CKC lens is authoritative for in-cycle
 * method grounding; intent orientation is still computed as secondary.
 * When absent: current behavior (intent candidate CKC).
 */
export function composeAdvisoryMethodContext(input: {
  analysis: IntentAnalysisDto;
  project: ProjectAssistantContextDto;
  registryRoot: string;
  activeCycleCkc?: ActiveCycleCkcMethodInput | null;
}): AdvisoryMethodContext {
  const orientation = resolveMethodOrientation(input.analysis);
  const packagePin = doctrinePackagePinFromProjectContext(input.project);
  const active = input.activeCycleCkc ?? null;

  if (active) {
    return Object.freeze({
      orientation,
      cycleLabel: active.cycleLabel,
      ckcLensSection: active.ckcLensSection,
      ckcLoaded: active.ckcLoaded,
      doctrinePinPresent: Boolean(packagePin),
      sourceLimit: packagePin
        ? active.sourceLimit
        : ("doctrine_unavailable" as const),
      trajectory: null,
      activeCycleCkcAuthoritative: true,
    });
  }

  if (!packagePin) {
    return Object.freeze({
      orientation,
      cycleLabel: null,
      ckcLensSection: null,
      ckcLoaded: false,
      doctrinePinPresent: false,
      sourceLimit: "doctrine_unavailable" as const,
      trajectory: null,
    });
  }

  if (orientation.state !== "RESOLVED_FROM_INTENT_CANDIDATE") {
    return Object.freeze({
      orientation,
      cycleLabel: null,
      ckcLensSection: null,
      ckcLoaded: false,
      doctrinePinPresent: true,
      sourceLimit: "none" as const,
      trajectory: null,
    });
  }

  const cycleTypeId = orientation.candidateCycleTypeId!;
  const cycleDef = getCycleTypeById(cycleTypeId);
  const cycleLabel = cycleDef?.label ?? null;

  const ckcContent = loadProductCkcCognitiveContent({
    registryRoot: input.registryRoot,
    cycleTypeId,
    packagePin,
  });

  if (!ckcContent) {
    return Object.freeze({
      orientation,
      cycleLabel,
      ckcLensSection: null,
      ckcLoaded: false,
      doctrinePinPresent: true,
      sourceLimit: "ckc_unavailable" as const,
      trajectory: null,
    });
  }

  // CORR-PROOF-04 — richer application lens (no digests). Pilote prose must not
  // echo CKC IDs — enforced by F1 system-prompt identity & source rules.
  const ckcLensSection = buildCkcApplicationLensSection(ckcContent).replace(
    `cycle « ${ckcContent.cycleTypeId} »`,
    `cycle « ${cycleLabel ?? cycleTypeId} »`,
  );

  return Object.freeze({
    orientation,
    cycleLabel,
    ckcLensSection,
    ckcLoaded: true,
    doctrinePinPresent: true,
    sourceLimit: "none" as const,
    trajectory: null,
  });
}
