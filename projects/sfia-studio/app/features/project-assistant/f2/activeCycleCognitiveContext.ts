/**
 * D-GF-ACW-01 — server-owned active CycleInstance + exact CKC grounding.
 *
 * Generic path: LPS.activeCycleInstanceId → CycleInstance → cycleTypeId →
 * Product CKC registry. No cycleTypeId branching. No label reverse-mapping.
 * Fail-closed before model call when binding/ref is incoherent.
 */

import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import type { CycleInstance, CycleInstanceStatus, CycleProfile } from "@/lib/oa/cycle";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
} from "@/lib/oa/cycle/domain/catalogFingerprint";
import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
import { mintPrepareCycleCorrelationId } from "@/lib/oa/cycle/application/lifecycleRecommendation/prepareCycleFromValidatedTrajectory";
import { projectCkcResolutionRef } from "@/lib/oa/cycle/application/lifecycleRecommendation/ckcResolutionRef";
import { classifyTrajectoryBinding } from "@/lib/oa/cycle/application/lifecycleRecommendation/assertTrajectoryBoundCycleStartReady";
import type { GetCycle } from "@/lib/oa/cycle/application/getCycle";
import {
  buildCkcApplicationLensSection,
  loadProductCkcCognitiveContent,
  type ProductCkcCognitiveContent,
} from "./ckcCognitiveContext";
import { doctrinePackagePinFromProjectContext } from "./methodOrientation";
import type { ProjectAssistantContextDto } from "../types";

export type ActiveCycleCognitiveProjection = {
  readonly cycleInstanceId: string;
  readonly cycleTypeId: string;
  readonly profile: CycleProfile;
  readonly status: CycleInstanceStatus;
  readonly trajectoryId: string | null;
  readonly trajectoryVersion: number | null;
  readonly trajectoryStepId: string | null;
  readonly ckcResolutionRef: string | null;
  readonly cycleLabel: string | null;
  /** True only when status === "active" — gates active-cycle work materialization. */
  readonly workEligible: boolean;
};

/**
 * CR-ACW-01 — sealed active-cycle context for ACW materialization.
 * Derived ONLY from studioCognitiveContext.activeCycle (server projection).
 * Compared inside Product UoW before any Epistemic/LPS write.
 */
export type ActiveCycleWorkContextSeal = {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly cycleTypeId: string;
  readonly profile: CycleProfile;
  readonly status: "active";
  readonly trajectoryId: string | null;
  readonly trajectoryVersion: number | null;
  readonly trajectoryStepId: string | null;
  readonly ckcResolutionRef: string | null;
};

/**
 * Build ACW context seal from studio activeCycle projection.
 * Returns null when projection missing or not work-eligible.
 */
export function buildActiveCycleWorkContextSeal(input: {
  projectId: string;
  activeCycle: ActiveCycleCognitiveProjection | null | undefined;
}): ActiveCycleWorkContextSeal | null {
  const ac = input.activeCycle;
  if (!ac || ac.workEligible !== true || ac.status !== "active") {
    return null;
  }
  return Object.freeze({
    projectId: input.projectId,
    cycleInstanceId: ac.cycleInstanceId,
    cycleTypeId: ac.cycleTypeId,
    profile: ac.profile,
    status: "active" as const,
    trajectoryId: ac.trajectoryId,
    trajectoryVersion: ac.trajectoryVersion,
    trajectoryStepId: ac.trajectoryStepId,
    ckcResolutionRef: ac.ckcResolutionRef,
  });
}

export type ActiveCycleCkcGrounding = {
  readonly cycleTypeId: string;
  readonly cycleLabel: string | null;
  readonly ckcLensSection: string | null;
  readonly ckcLoaded: boolean;
  readonly ckcId: string | null;
  readonly sourceLimit: "none" | "ckc_unavailable" | "doctrine_unavailable";
  readonly durableCkcResolutionRef: string | null;
};

export type ResolveActiveCycleCognitiveOk = {
  readonly ok: true;
  readonly projection: ActiveCycleCognitiveProjection | null;
  readonly ckc: ActiveCycleCkcGrounding | null;
};

export type ResolveActiveCycleCognitiveErr = {
  readonly ok: false;
  readonly code: string;
  readonly reason: string;
};

export type ResolveActiveCycleCognitiveResult =
  | ResolveActiveCycleCognitiveOk
  | ResolveActiveCycleCognitiveErr;

function expectedTrajectoryBoundCkcRef(cycle: CycleInstance): string | null {
  const binding = classifyTrajectoryBinding(cycle);
  if (binding !== "COMPLETE_TRAJECTORY_BOUND") return null;
  const trajectoryId = cycle.trajectoryId!.trim();
  const trajectoryVersion = cycle.trajectoryVersion!;
  const stepId = cycle.trajectoryStepId!.trim();
  const correlationId = mintPrepareCycleCorrelationId({
    projectId: cycle.projectId,
    trajectoryId,
    trajectoryVersion,
    stepId,
  });
  return projectCkcResolutionRef({
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId,
  });
}

function projectActiveCycle(cycle: CycleInstance): ActiveCycleCognitiveProjection {
  const entry = getCycleTypeById(cycle.cycleTypeId);
  return Object.freeze({
    cycleInstanceId: cycle.cycleInstanceId,
    cycleTypeId: cycle.cycleTypeId,
    profile: cycle.profile,
    status: cycle.status,
    trajectoryId: cycle.trajectoryId?.trim() || null,
    trajectoryVersion:
      typeof cycle.trajectoryVersion === "number" ? cycle.trajectoryVersion : null,
    trajectoryStepId: cycle.trajectoryStepId?.trim() || null,
    ckcResolutionRef: cycle.ckcResolutionRef?.trim() || null,
    cycleLabel: entry?.label ?? null,
    workEligible: cycle.status === "active",
  });
}

function buildCkcGrounding(input: {
  projection: ActiveCycleCognitiveProjection;
  packagePin: DoctrinePackagePin | null;
  registryRoot: string;
}): ActiveCycleCkcGrounding {
  if (!input.packagePin) {
    return Object.freeze({
      cycleTypeId: input.projection.cycleTypeId,
      cycleLabel: input.projection.cycleLabel,
      ckcLensSection: null,
      ckcLoaded: false,
      ckcId: null,
      sourceLimit: "doctrine_unavailable" as const,
      durableCkcResolutionRef: input.projection.ckcResolutionRef,
    });
  }

  const ckcContent: ProductCkcCognitiveContent | null =
    loadProductCkcCognitiveContent({
      registryRoot: input.registryRoot,
      cycleTypeId: input.projection.cycleTypeId,
      packagePin: input.packagePin,
    });

  if (!ckcContent) {
    return Object.freeze({
      cycleTypeId: input.projection.cycleTypeId,
      cycleLabel: input.projection.cycleLabel,
      ckcLensSection: null,
      ckcLoaded: false,
      ckcId: null,
      sourceLimit: "ckc_unavailable" as const,
      durableCkcResolutionRef: input.projection.ckcResolutionRef,
    });
  }

  const label = input.projection.cycleLabel ?? input.projection.cycleTypeId;
  const ckcLensSection = buildCkcApplicationLensSection(ckcContent).replace(
    `cycle « ${ckcContent.cycleTypeId} »`,
    `cycle « ${label} »`,
  );

  return Object.freeze({
    cycleTypeId: input.projection.cycleTypeId,
    cycleLabel: input.projection.cycleLabel,
    ckcLensSection,
    ckcLoaded: true,
    ckcId: ckcContent.ckcId,
    sourceLimit: "none" as const,
    durableCkcResolutionRef: input.projection.ckcResolutionRef,
  });
}

/**
 * Resolve server-owned active-cycle identity + exact CKC lens.
 * When LPS has no activeCycleInstanceId → ok with null projection (pre-cycle path).
 */
export async function resolveActiveCycleCognitiveContext(input: {
  project: ProjectAssistantContextDto;
  activeCycleInstanceId?: string | null;
  registryRoot: string;
  getCycle: GetCycle;
}): Promise<ResolveActiveCycleCognitiveResult> {
  const activeId =
    (input.activeCycleInstanceId ?? input.project.activeCycleInstanceId ?? null)
      ?.trim() || null;

  if (!activeId) {
    return { ok: true, projection: null, ckc: null };
  }

  const loaded = await input.getCycle.execute({ cycleInstanceId: activeId });
  if (!loaded.ok) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_NOT_FOUND",
      reason: "lps_active_cycle_instance_missing",
    };
  }

  const cycle = loaded.cycle;
  if (cycle.projectId !== input.project.projectId) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_PROJECT_MISMATCH",
      reason: "cycle_project_id_mismatch",
    };
  }

  const binding = classifyTrajectoryBinding(cycle);
  if (binding === "INCOMPLETE_TRAJECTORY_BINDING") {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_TRAJECTORY_BINDING_INCOMPLETE",
      reason: "incomplete_trajectory_binding",
    };
  }

  const durableRef = cycle.ckcResolutionRef?.trim() || null;
  const lpsRef = input.project.ckcResolutionRef?.trim() || null;

  if (binding === "COMPLETE_TRAJECTORY_BOUND") {
    if (!durableRef) {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_CKC_REF_MISSING",
        reason: "trajectory_bound_cycle_missing_ckc_resolution_ref",
      };
    }
    const expected = expectedTrajectoryBoundCkcRef(cycle);
    if (expected && expected !== durableRef) {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_CKC_REF_DRIFT",
        reason: "durable_ckc_resolution_ref_diverges_from_expected",
      };
    }
  }

  if (lpsRef && durableRef && lpsRef !== durableRef) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_CKC_REF_DRIFT",
      reason: "lps_ckc_resolution_ref_diverges_from_cycle",
    };
  }

  const projection = projectActiveCycle(cycle);
  const packagePin = doctrinePackagePinFromProjectContext(input.project);
  const ckc = buildCkcGrounding({
    projection,
    packagePin,
    registryRoot: input.registryRoot,
  });

  // Trajectory-bound greenfield active cycles must have loadable CKC.
  // LEGACY_UNBOUND may degrade to ckc_unavailable without blocking the turn
  // (historical F2/LR fixtures use non-product doctrine pins).
  if (
    projection.workEligible &&
    !ckc.ckcLoaded &&
    binding === "COMPLETE_TRAJECTORY_BOUND"
  ) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_CKC_UNAVAILABLE",
      reason:
        ckc.sourceLimit === "doctrine_unavailable"
          ? "doctrine_pin_unavailable"
          : "ckc_content_unavailable_for_active_cycle_type",
    };
  }

  return { ok: true, projection, ckc };
}
