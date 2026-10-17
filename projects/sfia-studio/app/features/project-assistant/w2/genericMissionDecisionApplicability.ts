/**
 * M-HD-02 — applicable durable HumanDecision vs CURRENT sealed presentation.
 * No seal / offer / UI imports — safe for Record + Continuity.
 */

import type { HumanDecision } from "@/lib/oa/decision";
import {
  materialCurrentnessMatch,
  verifyGenericMissionSnapshotIntegrity,
  type GenericMissionCurrentMaterial,
  type GenericMissionSubject,
  type LpsMaterialSnapshot,
} from "./genericMissionSubject";

/** Map OA LPS current read → material snapshot. Never invent from sealed subject. */
export function lpsMaterialSnapshotFromLivingProjectState(lps: {
  readonly version: number;
  readonly objective: string;
  readonly context?: string;
  readonly scope?: string;
  readonly constraints?: readonly string[];
  readonly doctrinePackageRef?: unknown;
  readonly activeCycleInstanceId?: string | null;
  readonly trajectoryId?: string | null;
  readonly trajectoryVersion?: number | null;
  readonly decisionIds?: readonly string[];
}): LpsMaterialSnapshot {
  const ref = lps.doctrinePackageRef as
    | { digest?: string; contentDigest?: string; packageDigest?: string }
    | null
    | undefined;
  return {
    version: lps.version,
    objective: lps.objective,
    context: lps.context,
    scope: lps.scope,
    constraints: lps.constraints ? [...lps.constraints] : undefined,
    doctrineDigest:
      (typeof ref?.digest === "string" ? ref.digest.trim() : "") ||
      (typeof ref?.contentDigest === "string" ? ref.contentDigest.trim() : "") ||
      (typeof ref?.packageDigest === "string" ? ref.packageDigest.trim() : "") ||
      "",
    activeCycleInstanceId: lps.activeCycleInstanceId ?? null,
    trajectoryId: lps.trajectoryId ?? null,
    trajectoryVersion: lps.trajectoryVersion ?? null,
    decisionIds: lps.decisionIds ? [...lps.decisionIds] : undefined,
  };
}

const INAPPLICABLE_STATUSES = new Set<HumanDecision["status"]>([
  "superseded",
  "revoked",
  "proposed",
  "required",
]);

function currentMaterialFromSubject(
  subject: GenericMissionSubject,
): GenericMissionCurrentMaterial {
  return {
    objective: subject.objective,
    expectedOutcome: subject.expectedOutcome,
    scopeNarrative: subject.scopeNarrative,
    scopeIn: subject.scopeIn,
    scopeOut: subject.scopeOut,
    materiality: subject.materiality,
    repositoryBindingIdentity: subject.repositoryBindingIdentity,
    pathRoot: subject.pathRoot,
    requiredCapabilities: subject.effects.requiredCapabilities,
    expectedOutputs: subject.effects.expectedOutputs,
    intentKind: subject.effects.intentKind,
    artifactType: subject.effects.artifactType,
    requestedOperation: subject.effects.requestedOperation,
    reversibilityExpectation: subject.effects.reversibilityExpectation,
    stopConditions: subject.effects.stopConditions,
    risks: subject.effects.risks,
    reservations: subject.effects.reservations,
    impactSignals: subject.impactSignals,
    cycleInstanceId: subject.cycleInstanceId,
  };
}

/**
 * Decide whether a durable HD is currently applicable to the sealed presentation.
 * Historical ≠ applicable. Digest / material mismatch → inapplicable.
 */
export function assessApplicableGenericMissionDecision(input: {
  readonly decision: HumanDecision;
  readonly subject: GenericMissionSubject;
  readonly currentLps?: LpsMaterialSnapshot | null;
}):
  | { readonly applicable: true; readonly decision: HumanDecision }
  | { readonly applicable: false; readonly reason: string } {
  const d = input.decision;
  if (d.projectId !== input.subject.projectId) {
    return { applicable: false, reason: "project_mismatch" };
  }
  if (d.subject !== input.subject.missionSubjectId) {
    return { applicable: false, reason: "subject_mismatch" };
  }
  if (INAPPLICABLE_STATUSES.has(d.status)) {
    return { applicable: false, reason: `status_${d.status}` };
  }
  if (
    d.status !== "accepted" &&
    d.status !== "refused" &&
    d.status !== "amended"
  ) {
    return { applicable: false, reason: `status_${d.status}` };
  }
  const basis = d.decisionBasis;
  if (!basis) {
    return { applicable: false, reason: "decision_basis_absent" };
  }
  const integrity = verifyGenericMissionSnapshotIntegrity({ basis });
  if (!integrity.ok) {
    return { applicable: false, reason: integrity.reason };
  }
  if (basis.sourceType !== "generic_mission") {
    return { applicable: false, reason: "source_type_not_generic_mission" };
  }
  const ctx = basis.genericMissionContext;
  if (!ctx) {
    return { applicable: false, reason: "generic_mission_context_absent" };
  }
  if (ctx.missionSubjectId !== input.subject.missionSubjectId) {
    return { applicable: false, reason: "mission_subject_id_mismatch" };
  }
  const material = materialCurrentnessMatch({
    sealed: ctx,
    current: currentMaterialFromSubject(input.subject),
  });
  if (!material.ok) {
    return { applicable: false, reason: material.reason };
  }

  const digestMatches =
    ctx.presentationDigest === input.subject.presentationDigest;
  const sealedVersion = basis.proposalContext.lpsVersion;
  const currentVersion = input.currentLps?.version ?? input.subject.lpsVersion;

  // Digest may diverge solely from LPS anchors after a linked Record HD bump.
  // Material effects already matched — require linked LPS when digest differs.
  if (!digestMatches) {
    if (d.status !== "accepted") {
      return { applicable: false, reason: "presentation_digest_mismatch" };
    }
    if (currentVersion <= sealedVersion) {
      return { applicable: false, reason: "presentation_digest_mismatch" };
    }
    const ids = input.currentLps?.decisionIds ?? [];
    if (!ids.includes(d.decisionId)) {
      return { applicable: false, reason: "lps_material_bump_unlinked" };
    }
  }

  // LPS: accepted HD may legitimately bump version when decisionId is linked.
  // Unlinked material bump / doctrine drift → inapplicable (not a silent GO).
  if (d.status === "accepted" && input.currentLps) {
    if (input.currentLps.version < sealedVersion) {
      return { applicable: false, reason: "lps_version_regressed" };
    }
    if (input.currentLps.version > sealedVersion) {
      const ids = input.currentLps.decisionIds ?? [];
      if (!ids.includes(d.decisionId)) {
        return { applicable: false, reason: "lps_material_bump_unlinked" };
      }
      const sealedDoctrine = basis.proposalContext.doctrineDigest ?? "";
      if (
        sealedDoctrine &&
        sealedDoctrine !== (input.currentLps.doctrineDigest ?? "")
      ) {
        return { applicable: false, reason: "lps_doctrine_drift" };
      }
      const sealedCycle =
        basis.proposalContext.activeCycleInstanceId ??
        ctx.cycleInstanceId ??
        null;
      if (
        (sealedCycle ?? null) !==
        (input.currentLps.activeCycleInstanceId ?? null)
      ) {
        return { applicable: false, reason: "lps_cycle_drift" };
      }
    }
  }

  return { applicable: true, decision: d };
}

/**
 * Select the single applicable durable HD for the CURRENT sealed presentation.
 * Ambiguous applicable set → fail-closed.
 */
export function selectApplicableGenericMissionDecision(input: {
  readonly decisions: readonly HumanDecision[];
  readonly subject: GenericMissionSubject;
  readonly currentLps?: LpsMaterialSnapshot | null;
}):
  | { readonly ok: true; readonly decision: HumanDecision | null }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const applicable: HumanDecision[] = [];
  for (const d of input.decisions) {
    const assessed = assessApplicableGenericMissionDecision({
      decision: d,
      subject: input.subject,
      currentLps: input.currentLps,
    });
    if (assessed.applicable) applicable.push(assessed.decision);
  }
  if (applicable.length === 0) {
    return { ok: true, decision: null };
  }
  if (applicable.length === 1) {
    return { ok: true, decision: applicable[0]! };
  }
  // Prefer most recent effectiveAt among identical status/option — still fail if mixed.
  const statuses = new Set(applicable.map((d) => d.status));
  const options = new Set(applicable.map((d) => d.selectedOptionId));
  if (statuses.size > 1 || options.size > 1) {
    return {
      ok: false,
      code: "OA_DECISION_HISTORY_AMBIGUOUS",
      message:
        "Plusieurs HumanDecisions applicables ambiguës — nouvelle présentation requise.",
    };
  }
  const latest = applicable.reduce((a, b) =>
    (a.effectiveAt ?? "") >= (b.effectiveAt ?? "") ? a : b,
  );
  return { ok: true, decision: latest };
}
