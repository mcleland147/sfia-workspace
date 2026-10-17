/**
 * M-HD-01 — Generic Mission Subject seal + presentationDigest.
 *
 * Occurrence identity (missionSubjectId) is distinct from the semantic
 * presentationDigest. Digests use full SHA-256 over canonical JSON.
 * presentedAtIso is metadata only — excluded from the seal.
 * No PresentedMission store; durability lives in OA HumanDecision.decisionBasis.
 */

import { randomBytes } from "node:crypto";
import {
  computeDecisionBasisSourceDigest,
  type DecisionBasis,
  type DecisionBasisGenericMissionContext,
} from "@/lib/oa/decision";

export const GENERIC_MISSION_SUBJECT_SCHEMA_VERSION = "0.1.0-gms" as const;

export const GENERIC_MISSION_OPTION_ACCEPT_PREPARE =
  "opt:generic-mission:accept-prepare" as const;
export const GENERIC_MISSION_OPTION_REFUSE =
  "opt:generic-mission:refuse" as const;
export const GENERIC_MISSION_OPTION_REQUEST_AMEND =
  "opt:generic-mission:request-amend" as const;

export const GENERIC_MISSION_PRESENTED_OPTIONS = [
  {
    optionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
    label: "Accepter — autoriser la préparation de cette mission",
  },
  {
    optionId: GENERIC_MISSION_OPTION_REFUSE,
    label: "Refuser cette mission structurante",
  },
  {
    optionId: GENERIC_MISSION_OPTION_REQUEST_AMEND,
    label: "Demander un amendement — nouvelle présentation requise",
  },
] as const;

export type GenericMissionImpactSignals = {
  readonly structuralChange: boolean;
  readonly securityImpact: boolean;
  readonly architectureImpact: boolean;
  readonly dataImpact: boolean;
  readonly irreversible: boolean;
};

export type GenericMissionEffectsSeal = {
  readonly intentKind: string | null;
  readonly artifactType: string | null;
  readonly requestedOperation: string | null;
  readonly requiredCapabilities: readonly string[];
  readonly expectedOutputs: readonly string[];
  readonly reversibilityExpectation:
    | "reversible"
    | "irreversible"
    | "unknown"
    | null;
  readonly stopConditions: readonly string[];
  readonly risks: readonly string[];
  readonly reservations: readonly string[];
};

/** Material fields sealed into presentationDigest (no digests, no presentedAt). */
export type GenericMissionSealPayload = {
  readonly schemaVersion: typeof GENERIC_MISSION_SUBJECT_SCHEMA_VERSION;
  readonly missionSubjectId: string;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly materialityReasonCodes: readonly string[];
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
  readonly effects: GenericMissionEffectsSeal;
  readonly impactSignals: GenericMissionImpactSignals;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest?: string;
  readonly optionRefs: readonly string[];
};

export type GenericMissionSubject = GenericMissionSealPayload & {
  readonly presentedAtIso: string;
  readonly presentationDigest: string;
};

export function newGenericMissionSubjectId(): string {
  return `gms:${randomBytes(16).toString("hex")}`;
}

export function computeGenericMissionPresentationDigest(
  payload: GenericMissionSealPayload,
): string {
  return computeDecisionBasisSourceDigest(payload);
}

export function buildGenericMissionSubject(input: {
  readonly missionSubjectId?: string;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly materialityReasonCodes: readonly string[];
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
  readonly effects: GenericMissionEffectsSeal;
  readonly impactSignals: GenericMissionImpactSignals;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest?: string;
  readonly optionRefs?: readonly string[];
  readonly presentedAtIso: string;
}): GenericMissionSubject {
  const missionSubjectId =
    input.missionSubjectId?.trim() || newGenericMissionSubjectId();
  const optionRefs =
    input.optionRefs && input.optionRefs.length > 0
      ? [...input.optionRefs]
      : GENERIC_MISSION_PRESENTED_OPTIONS.map((o) => o.optionId);
  const seal: GenericMissionSealPayload = {
    schemaVersion: GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
    missionSubjectId,
    projectId: input.projectId.trim(),
    cycleInstanceId: input.cycleInstanceId?.trim() || null,
    objective: input.objective.trim(),
    expectedOutcome: input.expectedOutcome.trim(),
    scopeNarrative: input.scopeNarrative.trim(),
    scopeIn: [...input.scopeIn],
    scopeOut: [...input.scopeOut],
    materiality: input.materiality,
    materialityReasonCodes: [...input.materialityReasonCodes],
    repositoryBindingIdentity: input.repositoryBindingIdentity,
    pathRoot: input.pathRoot,
    effects: {
      intentKind: input.effects.intentKind,
      artifactType: input.effects.artifactType,
      requestedOperation: input.effects.requestedOperation,
      requiredCapabilities: [...input.effects.requiredCapabilities],
      expectedOutputs: [...input.effects.expectedOutputs],
      reversibilityExpectation: input.effects.reversibilityExpectation,
      stopConditions: [...input.effects.stopConditions],
      risks: [...input.effects.risks],
      reservations: [...input.effects.reservations],
    },
    impactSignals: { ...input.impactSignals },
    lpsId: input.lpsId,
    lpsVersion: input.lpsVersion,
    ...(input.doctrineDigest
      ? { doctrineDigest: input.doctrineDigest }
      : {}),
    optionRefs,
  };
  return {
    ...seal,
    presentedAtIso: input.presentedAtIso,
    presentationDigest: computeGenericMissionPresentationDigest(seal),
  };
}

/** Rebuild seal payload from durable genericMissionContext (+ LPS anchors). */
export function sealPayloadFromGenericMissionContext(input: {
  readonly ctx: DecisionBasisGenericMissionContext;
  readonly projectId: string;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest?: string;
}): GenericMissionSealPayload {
  const ctx = input.ctx;
  return {
    schemaVersion: GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
    missionSubjectId: ctx.missionSubjectId,
    projectId: input.projectId,
    cycleInstanceId: ctx.cycleInstanceId,
    objective: ctx.objective,
    expectedOutcome: ctx.expectedOutcome,
    scopeNarrative: ctx.scopeNarrative,
    scopeIn: [...ctx.scopeIn],
    scopeOut: [...ctx.scopeOut],
    materiality: ctx.materiality,
    materialityReasonCodes: [...ctx.materialityReasonCodes],
    repositoryBindingIdentity: ctx.repositoryBindingIdentity,
    pathRoot: ctx.pathRoot,
    effects: {
      intentKind: ctx.intentKind,
      artifactType: ctx.artifactType,
      requestedOperation: ctx.requestedOperation,
      requiredCapabilities: [...ctx.requiredCapabilities],
      expectedOutputs: [...ctx.expectedOutputs],
      reversibilityExpectation: ctx.reversibilityExpectation,
      stopConditions: [...ctx.stopConditions],
      risks: [...ctx.risks],
      reservations: [...ctx.reservations],
    },
    impactSignals: { ...ctx.impactSignals },
    lpsId: input.lpsId,
    lpsVersion: input.lpsVersion,
    ...(input.doctrineDigest
      ? { doctrineDigest: input.doctrineDigest }
      : {}),
    optionRefs: [...ctx.optionRefs],
  };
}

/**
 * Integrity check: recompute digest from durable snapshot fields.
 * Does not compare CURRENT Product facts (see materialCurrentnessMatch).
 */
export function verifyGenericMissionSnapshotIntegrity(input: {
  readonly basis: DecisionBasis;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const basis = input.basis;
  if (basis.sourceType !== "generic_mission") {
    return { ok: false, reason: "source_type_not_generic_mission" };
  }
  const ctx = basis.genericMissionContext;
  if (!ctx) {
    return { ok: false, reason: "generic_mission_context_absent" };
  }
  const payload = sealPayloadFromGenericMissionContext({
    ctx,
    projectId: basis.projectId,
    lpsId: basis.proposalContext.lpsId,
    lpsVersion: basis.proposalContext.lpsVersion,
    doctrineDigest: basis.proposalContext.doctrineDigest,
  });
  const recomputed = computeGenericMissionPresentationDigest(payload);
  if (recomputed !== basis.sourceDigest || recomputed !== ctx.presentationDigest) {
    return { ok: false, reason: "presentation_digest_integrity_failed" };
  }
  return { ok: true };
}

function sameStringArr(a: readonly string[], b: readonly string[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function normNullStr(v: string | null | undefined): string | null {
  if (v == null) return null;
  const t = v.trim();
  return t.length > 0 ? t : null;
}

/**
 * CURRENT mission material snapshot compared against sealed HD context.
 *
 * Integrity fields (digest): all seal payload fields including LPS anchors.
 * Currentness fields (requalify before PREPARE/Confirm/Authorize): mission
 * content, scope, effects, repo binding, materiality, impact signals, cycle.
 * Metadata not requiring raw equality at resume: presentedAtIso (never in seal),
 * optionRefs (fixed closed set; selectedOption checked separately),
 * materialityReasonCodes (diagnostic; materiality class is authoritative).
 */
export type GenericMissionCurrentMaterial = {
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
  readonly requiredCapabilities: readonly string[];
  readonly expectedOutputs: readonly string[];
  readonly intentKind: string | null;
  readonly artifactType: string | null;
  readonly requestedOperation: string | null;
  readonly reversibilityExpectation:
    | "reversible"
    | "irreversible"
    | "unknown"
    | null;
  readonly stopConditions: readonly string[];
  readonly risks: readonly string[];
  readonly reservations: readonly string[];
  readonly impactSignals: GenericMissionImpactSignals;
  readonly cycleInstanceId: string | null;
};

/** Material fields that must match between sealed HD and CURRENT requalification. */
export function materialCurrentnessMatch(input: {
  readonly sealed: DecisionBasisGenericMissionContext;
  readonly current: GenericMissionCurrentMaterial;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const s = input.sealed;
  const c = input.current;
  if (s.objective.trim() !== c.objective.trim()) {
    return { ok: false, reason: "objective_drift" };
  }
  if (s.expectedOutcome.trim() !== c.expectedOutcome.trim()) {
    return { ok: false, reason: "expected_outcome_drift" };
  }
  if (s.scopeNarrative.trim() !== c.scopeNarrative.trim()) {
    return { ok: false, reason: "scope_narrative_drift" };
  }
  if (!sameStringArr(s.scopeIn, c.scopeIn) || !sameStringArr(s.scopeOut, c.scopeOut)) {
    return { ok: false, reason: "scope_arrays_drift" };
  }
  if (s.materiality !== c.materiality) {
    return { ok: false, reason: "materiality_drift" };
  }
  if (s.repositoryBindingIdentity !== c.repositoryBindingIdentity) {
    return { ok: false, reason: "repository_binding_drift" };
  }
  if (s.pathRoot !== c.pathRoot) {
    return { ok: false, reason: "path_root_drift" };
  }
  if (!sameStringArr(s.requiredCapabilities, c.requiredCapabilities)) {
    return { ok: false, reason: "capabilities_drift" };
  }
  if (!sameStringArr(s.expectedOutputs, c.expectedOutputs)) {
    return { ok: false, reason: "expected_outputs_drift" };
  }
  if (normNullStr(s.intentKind) !== normNullStr(c.intentKind)) {
    return { ok: false, reason: "intent_kind_drift" };
  }
  if (normNullStr(s.artifactType) !== normNullStr(c.artifactType)) {
    return { ok: false, reason: "artifact_type_drift" };
  }
  if (normNullStr(s.requestedOperation) !== normNullStr(c.requestedOperation)) {
    return { ok: false, reason: "requested_operation_drift" };
  }
  if (s.reversibilityExpectation !== c.reversibilityExpectation) {
    return { ok: false, reason: "reversibility_drift" };
  }
  // Suppression of a sealed stop condition is refused; added Product stops OK.
  for (const stop of s.stopConditions) {
    if (!c.stopConditions.includes(stop)) {
      return { ok: false, reason: "stop_conditions_drift" };
    }
  }
  if (!sameStringArr(s.risks, c.risks)) {
    return { ok: false, reason: "risks_drift" };
  }
  if (!sameStringArr(s.reservations, c.reservations)) {
    return { ok: false, reason: "reservations_drift" };
  }
  const sig = s.impactSignals;
  const cs = c.impactSignals;
  if (
    sig.structuralChange !== cs.structuralChange ||
    sig.securityImpact !== cs.securityImpact ||
    sig.architectureImpact !== cs.architectureImpact ||
    sig.dataImpact !== cs.dataImpact ||
    sig.irreversible !== cs.irreversible
  ) {
    return { ok: false, reason: "impact_signals_drift" };
  }
  if ((s.cycleInstanceId ?? null) !== (c.cycleInstanceId ?? null)) {
    return { ok: false, reason: "cycle_drift" };
  }
  return { ok: true };
}

/**
 * Conservative projection: sealed reversibilityExpectation → OA Reversibility.
 * Does not invent a wider authority than the Pilot accepted.
 * - irreversible → irreversible
 * - reversible → reversible
 * - unknown / null → partially_reversible (mid, never silently irreversible)
 */
export type OaReversibility =
  | "reversible"
  | "partially_reversible"
  | "irreversible";

export function mapReversibilityExpectationToOa(
  expectation: "reversible" | "irreversible" | "unknown" | null | undefined,
): OaReversibility {
  if (expectation === "irreversible") return "irreversible";
  if (expectation === "reversible") return "reversible";
  return "partially_reversible";
}

/** Independent EC field projection for EC↔HD binding (not rebuilt from HD alone). */
export type ExecutionContractEffectProjection = {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly decisionRefs: readonly string[];
  readonly status: string;
  readonly version: number;
  readonly semanticFingerprint?: string;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly intentKind: string | null;
  readonly artifactType: string | null;
  readonly requestedOperation: string | null;
  readonly expectedOutputs: readonly string[];
  readonly requiredCapabilities: readonly string[];
  readonly stopConditions: readonly string[];
  readonly reversibility: OaReversibility;
  readonly reversibilityExpectation:
    | "reversible"
    | "irreversible"
    | "unknown"
    | null;
  readonly risks: readonly string[];
  readonly reservations: readonly string[];
  readonly materiality: string | null;
  readonly missionSubjectId: string | null;
  readonly presentationDigest: string | null;
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
};

function risksFromConstraints(constraints: readonly string[]): string[] {
  return constraints
    .filter((c) => c.startsWith("RISK:"))
    .map((c) => c.slice("RISK:".length));
}

function reservationsFromConstraints(constraints: readonly string[]): string[] {
  return constraints
    .filter((c) => c.startsWith("RESERVATION:"))
    .map((c) => c.slice("RESERVATION:".length));
}

export function normalizeMaterialityClass(
  raw: string | null | undefined,
): "structural" | "non_structural" | "unknown" | null {
  if (raw == null) return null;
  if (typeof raw !== "string") return null;
  const t = raw.trim().toLowerCase();
  if (t === "structural" || t === "non_structural" || t === "unknown") {
    return t;
  }
  return null;
}

/**
 * CURRENT Product materiality vs sealed HD/EC class.
 * Exact match required, with one documented conservative case:
 * sealed `unknown` was a fail-closed insufficiency stamp (not a non_structural
 * claim). Current `structural` remains covered by the accepted HD.
 * Degradation structural→non_structural/unknown is always refused.
 */
export function materialityContinuityCompatible(input: {
  readonly sealed: string | null | undefined;
  readonly current: string | null | undefined;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const sealed = normalizeMaterialityClass(input.sealed ?? null);
  const current = normalizeMaterialityClass(input.current ?? null);
  if (sealed == null) {
    return { ok: false, reason: "sealed_materiality_absent" };
  }
  if (current == null) {
    return { ok: false, reason: "current_materiality_absent" };
  }
  if (sealed === current) return { ok: true };
  if (sealed === "unknown" && current === "structural") return { ok: true };
  if (sealed === "structural" && current !== "structural") {
    return { ok: false, reason: "structural_materiality_degraded" };
  }
  return {
    ok: false,
    reason: `materiality_continuity_${sealed}_vs_${current}`,
  };
}

function materialityClassesFromConstraints(
  constraints: readonly string[],
): Array<"structural" | "non_structural" | "unknown"> {
  const out: Array<"structural" | "non_structural" | "unknown"> = [];
  for (const c of constraints) {
    if (!c.startsWith("MATERIALITY:")) continue;
    const cls = normalizeMaterialityClass(c.slice("MATERIALITY:".length));
    if (cls) out.push(cls);
  }
  return out;
}

function sortedCopy(arr: readonly string[]): string[] {
  return [...arr].map((s) => String(s)).sort();
}

function sameSortedStringArr(a: readonly string[], b: readonly string[]): boolean {
  const aa = sortedCopy(a);
  const bb = sortedCopy(b);
  return aa.length === bb.length && aa.every((v, i) => v === bb[i]);
}

/**
 * Fail-closed dual-representation check for Generic Mission ECs.
 * Never silently picks the favorable side when two representations diverge.
 * Legacy contracts without generic_mission stamps skip dual-rep requirements.
 */
export function assertExecutionContractInternalConsistency(input: {
  readonly constraints?: readonly string[] | null;
  readonly inputs?: Record<string, unknown> | null;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const constraints = [...(input.constraints ?? [])];
  const inputs = input.inputs ?? {};
  const isGenericMissionStamped = Boolean(
    (typeof inputs.missionSubjectId === "string" &&
      inputs.missionSubjectId.trim()) ||
      (typeof inputs.presentationDigest === "string" &&
        inputs.presentationDigest.trim()),
  );

  const materialityFacts = (inputs.materialityFacts ?? null) as
    | {
        assessedMateriality?: unknown;
        productCurrentness?: {
          repositoryIdentity?: string | null;
          pathRoot?: string | null;
        };
      }
    | null;

  // A1 — materiality facts vs MATERIALITY:* constraints
  const constraintClasses = materialityClassesFromConstraints(constraints);
  const uniqueConstraint = new Set(constraintClasses);
  if (uniqueConstraint.size > 1) {
    return { ok: false, reason: "materiality_constraint_conflict" };
  }
  // Malformed MATERIALITY tokens (present but not a known class)
  for (const c of constraints) {
    if (!c.startsWith("MATERIALITY:")) continue;
    const raw = c.slice("MATERIALITY:".length);
    if (normalizeMaterialityClass(raw) == null) {
      return { ok: false, reason: "materiality_constraint_malformed" };
    }
  }
  const fromConstraint = constraintClasses[0] ?? null;

  if (
    materialityFacts != null &&
    "assessedMateriality" in materialityFacts &&
    materialityFacts.assessedMateriality !== undefined &&
    materialityFacts.assessedMateriality !== null
  ) {
    if (typeof materialityFacts.assessedMateriality !== "string") {
      return { ok: false, reason: "materiality_facts_malformed" };
    }
    const assessed = normalizeMaterialityClass(
      materialityFacts.assessedMateriality,
    );
    if (assessed == null) {
      // Explicit invalid value must not be normalized into absence.
      return { ok: false, reason: "materiality_facts_malformed" };
    }
    if (fromConstraint != null && assessed !== fromConstraint) {
      return { ok: false, reason: "materiality_facts_vs_constraint_conflict" };
    }
  } else if (isGenericMissionStamped && fromConstraint == null) {
    return { ok: false, reason: "materiality_absent_on_generic_mission_ec" };
  }

  // A2 — inputs.risks vs RISK:*
  if (Array.isArray(inputs.risks)) {
    const fromInputs = inputs.risks.map((r) => String(r));
    const fromC = risksFromConstraints(constraints);
    if (isGenericMissionStamped || fromC.length > 0) {
      if (!sameSortedStringArr(fromInputs, fromC)) {
        return { ok: false, reason: "risks_inputs_vs_constraints_conflict" };
      }
    }
  }

  // A3 — inputs.reservations vs RESERVATION:*
  if (Array.isArray(inputs.reservations)) {
    const fromInputs = inputs.reservations.map((r) => String(r));
    const fromC = reservationsFromConstraints(constraints);
    if (isGenericMissionStamped || fromC.length > 0) {
      if (!sameSortedStringArr(fromInputs, fromC)) {
        return {
          ok: false,
          reason: "reservations_inputs_vs_constraints_conflict",
        };
      }
    }
  }

  // A4 — materialityFacts.productCurrentness vs inputs repo/pathRoot
  const currentness = materialityFacts?.productCurrentness;
  if (
    currentness &&
    Object.prototype.hasOwnProperty.call(currentness, "repositoryIdentity") &&
    Object.prototype.hasOwnProperty.call(inputs, "repositoryBindingIdentity")
  ) {
    const a = currentness.repositoryIdentity ?? null;
    const b =
      typeof inputs.repositoryBindingIdentity === "string" ||
      inputs.repositoryBindingIdentity === null
        ? (inputs.repositoryBindingIdentity as string | null)
        : undefined;
    if (b !== undefined && a !== b) {
      return { ok: false, reason: "repository_identity_dual_conflict" };
    }
  }
  if (
    currentness &&
    Object.prototype.hasOwnProperty.call(currentness, "pathRoot") &&
    Object.prototype.hasOwnProperty.call(inputs, "pathRoot")
  ) {
    const a = currentness.pathRoot ?? null;
    const b =
      typeof inputs.pathRoot === "string" || inputs.pathRoot === null
        ? (inputs.pathRoot as string | null)
        : undefined;
    if (b !== undefined && a !== b) {
      return { ok: false, reason: "path_root_dual_conflict" };
    }
  }

  return { ok: true };
}

/**
 * Project EC native fields + inputs into a single authoritative effect view.
 * Callers MUST run assertExecutionContractInternalConsistency first for
 * generic_mission ECs — this projector does not silently pick a favorable side.
 */
export function projectExecutionContractEffects(input: {
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  readonly decisionRefs?: readonly string[] | null;
  readonly status: string;
  readonly version: number;
  readonly semanticFingerprint?: string;
  readonly expectedOutputs?: readonly string[] | null;
  readonly requiredCapabilities?: readonly string[] | null;
  readonly stopConditions?: readonly string[] | null;
  readonly reversibility: OaReversibility;
  readonly constraints?: readonly string[] | null;
  readonly inputs?: Record<string, unknown> | null;
}): ExecutionContractEffectProjection {
  const inputs = input.inputs ?? {};
  const constraints = [...(input.constraints ?? [])];
  const materialityFacts = (inputs.materialityFacts ?? null) as
    | {
        assessedMateriality?: string;
        productCurrentness?: {
          repositoryIdentity?: string | null;
          pathRoot?: string | null;
        };
      }
    | null;
  const assessed = normalizeMaterialityClass(
    typeof materialityFacts?.assessedMateriality === "string"
      ? materialityFacts.assessedMateriality
      : null,
  );
  const fromConstraint =
    materialityClassesFromConstraints(constraints)[0] ?? null;
  const materiality = assessed ?? fromConstraint;
  const revExpRaw = inputs.reversibilityExpectation;
  const revExp =
    revExpRaw === "reversible" ||
    revExpRaw === "irreversible" ||
    revExpRaw === "unknown"
      ? revExpRaw
      : null;
  // After internal consistency, inputs and constraints agree when both present.
  const inputRisks = Array.isArray(inputs.risks)
    ? (inputs.risks as string[])
    : risksFromConstraints(constraints);
  const inputReservations = Array.isArray(inputs.reservations)
    ? (inputs.reservations as string[])
    : reservationsFromConstraints(constraints);
  const currentness = materialityFacts?.productCurrentness;
  const repoFromInputs =
    typeof inputs.repositoryBindingIdentity === "string" ||
    inputs.repositoryBindingIdentity === null
      ? (inputs.repositoryBindingIdentity as string | null)
      : undefined;
  const pathFromInputs =
    typeof inputs.pathRoot === "string" || inputs.pathRoot === null
      ? (inputs.pathRoot as string | null)
      : undefined;
  return {
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId?.trim() || null,
    decisionRefs: [...(input.decisionRefs ?? [])],
    status: input.status,
    version: input.version,
    semanticFingerprint: input.semanticFingerprint,
    objective: String(inputs.objective ?? "").trim(),
    expectedOutcome: String(inputs.expectedOutcome ?? "").trim(),
    scopeNarrative: String(
      inputs.missionScopeNarrative ?? inputs.scope ?? "",
    ).trim(),
    scopeIn: Array.isArray(inputs.scopeIn) ? (inputs.scopeIn as string[]) : [],
    scopeOut: Array.isArray(inputs.scopeOut)
      ? (inputs.scopeOut as string[])
      : [],
    intentKind: normNullStr(
      typeof inputs.intentKind === "string" ? inputs.intentKind : null,
    ),
    artifactType: normNullStr(
      typeof inputs.artifactType === "string" ? inputs.artifactType : null,
    ),
    requestedOperation: normNullStr(
      typeof inputs.requestedOperation === "string"
        ? inputs.requestedOperation
        : null,
    ),
    expectedOutputs: [...(input.expectedOutputs ?? [])],
    requiredCapabilities: [...(input.requiredCapabilities ?? [])],
    stopConditions: [...(input.stopConditions ?? [])],
    reversibility: input.reversibility,
    reversibilityExpectation: revExp,
    risks: inputRisks,
    reservations: inputReservations,
    materiality,
    missionSubjectId: normNullStr(
      typeof inputs.missionSubjectId === "string"
        ? inputs.missionSubjectId
        : null,
    ),
    presentationDigest: normNullStr(
      typeof inputs.presentationDigest === "string"
        ? inputs.presentationDigest
        : null,
    ),
    repositoryBindingIdentity:
      repoFromInputs !== undefined
        ? repoFromInputs
        : currentness?.repositoryIdentity !== undefined
          ? currentness.repositoryIdentity ?? null
          : null,
    pathRoot:
      pathFromInputs !== undefined
        ? pathFromInputs
        : currentness?.pathRoot !== undefined
          ? currentness.pathRoot ?? null
          : null,
  };
}

/**
 * Compare EC projection against sealed HD context.
 * Reads EC fields independently — sealed values are the acceptance baseline,
 * not a reconstruction substituted for missing EC fields.
 */
export function compareExecutionContractToSealedHumanDecision(input: {
  readonly sealed: DecisionBasisGenericMissionContext;
  readonly ec: ExecutionContractEffectProjection;
  readonly decisionId: string;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const s = input.sealed;
  const e = input.ec;

  if (!e.decisionRefs.includes(input.decisionId)) {
    return { ok: false, reason: "decision_ref_absent" };
  }
  if ((e.cycleInstanceId ?? null) !== (s.cycleInstanceId ?? null)) {
    return { ok: false, reason: "cycle_mismatch" };
  }
  if (!e.missionSubjectId) {
    return { ok: false, reason: "mission_subject_id_absent" };
  }
  if (e.missionSubjectId !== s.missionSubjectId) {
    return { ok: false, reason: "mission_subject_id_mismatch" };
  }
  if (!e.presentationDigest) {
    return { ok: false, reason: "presentation_digest_absent" };
  }
  if (e.presentationDigest !== s.presentationDigest) {
    return { ok: false, reason: "presentation_digest_mismatch" };
  }
  if (e.objective.trim() !== s.objective.trim()) {
    return { ok: false, reason: "objective_mismatch" };
  }
  if (e.expectedOutcome.trim() !== s.expectedOutcome.trim()) {
    return { ok: false, reason: "expected_outcome_mismatch" };
  }
  if (e.scopeNarrative.trim() !== s.scopeNarrative.trim()) {
    return { ok: false, reason: "scope_narrative_mismatch" };
  }
  if (
    !sameStringArr(e.scopeIn, s.scopeIn) ||
    !sameStringArr(e.scopeOut, s.scopeOut)
  ) {
    return { ok: false, reason: "scope_arrays_mismatch" };
  }
  if (normNullStr(e.intentKind) !== normNullStr(s.intentKind)) {
    return { ok: false, reason: "intent_kind_mismatch" };
  }
  if (normNullStr(e.artifactType) !== normNullStr(s.artifactType)) {
    return { ok: false, reason: "artifact_type_mismatch" };
  }
  if (
    normNullStr(e.requestedOperation) !== normNullStr(s.requestedOperation)
  ) {
    return { ok: false, reason: "requested_operation_mismatch" };
  }
  if (!sameStringArr(e.expectedOutputs, s.expectedOutputs)) {
    return { ok: false, reason: "expected_outputs_mismatch" };
  }
  if (!sameStringArr(e.requiredCapabilities, s.requiredCapabilities)) {
    return { ok: false, reason: "capabilities_mismatch" };
  }
  // Every sealed stop must remain on the EC (EC may add system stops).
  for (const stop of s.stopConditions) {
    if (!e.stopConditions.includes(stop)) {
      return { ok: false, reason: "stop_conditions_missing" };
    }
  }
  if (e.reversibilityExpectation !== s.reversibilityExpectation) {
    return { ok: false, reason: "reversibility_expectation_mismatch" };
  }
  const expectedOaRev = mapReversibilityExpectationToOa(
    s.reversibilityExpectation,
  );
  if (e.reversibility !== expectedOaRev) {
    return { ok: false, reason: "oa_reversibility_mismatch" };
  }
  for (const risk of s.risks) {
    if (!e.risks.includes(risk)) {
      return { ok: false, reason: "risks_missing" };
    }
  }
  for (const reservation of s.reservations) {
    if (!e.reservations.includes(reservation)) {
      return { ok: false, reason: "reservations_missing" };
    }
  }
  if (!e.materiality) {
    return { ok: false, reason: "materiality_absent" };
  }
  if (e.materiality !== s.materiality) {
    return { ok: false, reason: "materiality_mismatch" };
  }
  // Structural sealed must never appear as non_structural on EC.
  if (s.materiality === "structural" && e.materiality === "non_structural") {
    return { ok: false, reason: "materiality_degraded" };
  }
  if (e.repositoryBindingIdentity !== s.repositoryBindingIdentity) {
    return { ok: false, reason: "repository_binding_mismatch" };
  }
  if (e.pathRoot !== s.pathRoot) {
    return { ok: false, reason: "path_root_mismatch" };
  }
  if (
    e.status === "superseded" ||
    e.status === "cancelled" ||
    e.status === "failed"
  ) {
    return { ok: false, reason: "ec_status_not_reusable" };
  }
  return { ok: true };
}

export type LpsMaterialSnapshot = {
  readonly version: number;
  readonly objective: string;
  readonly context?: string;
  readonly scope?: string;
  readonly constraints?: readonly string[];
  readonly doctrineDigest: string;
  readonly activeCycleInstanceId?: string | null;
  readonly trajectoryId?: string | null;
  readonly trajectoryVersion?: number | null;
  readonly decisionIds?: readonly string[];
};

/**
 * CR-04 — LPS transition after Record HD.
 *
 * Same version → OK.
 * Later version → OK only when material LPS fields are unchanged vs sealed
 * snapshot AND decisionId ∈ current.decisionIds.
 * version supérieure alone is never sufficient.
 */
export function evaluateLpsTransitionAfterHumanDecision(input: {
  readonly sealed: LpsMaterialSnapshot;
  readonly current: LpsMaterialSnapshot;
  readonly decisionId: string;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  if (input.current.version < input.sealed.version) {
    return { ok: false, reason: "lps_version_regressed" };
  }
  if (input.current.version === input.sealed.version) {
    return { ok: true };
  }
  // Material LPS fields must be identical aside from decisionIds growth.
  if (input.sealed.objective.trim() !== input.current.objective.trim()) {
    return { ok: false, reason: "lps_objective_drift" };
  }
  if ((input.sealed.context ?? "") !== (input.current.context ?? "")) {
    return { ok: false, reason: "lps_context_drift" };
  }
  if ((input.sealed.scope ?? "") !== (input.current.scope ?? "")) {
    return { ok: false, reason: "lps_scope_drift" };
  }
  const sealedConstraints = [...(input.sealed.constraints ?? [])].sort();
  const currentConstraints = [...(input.current.constraints ?? [])].sort();
  if (!sameStringArr(sealedConstraints, currentConstraints)) {
    return { ok: false, reason: "lps_constraints_drift" };
  }
  if (input.sealed.doctrineDigest !== input.current.doctrineDigest) {
    return { ok: false, reason: "lps_doctrine_drift" };
  }
  if (
    (input.sealed.activeCycleInstanceId ?? null) !==
    (input.current.activeCycleInstanceId ?? null)
  ) {
    return { ok: false, reason: "lps_cycle_drift" };
  }
  if ((input.sealed.trajectoryId ?? null) !== (input.current.trajectoryId ?? null)) {
    return { ok: false, reason: "lps_trajectory_drift" };
  }
  if (
    (input.sealed.trajectoryVersion ?? null) !==
    (input.current.trajectoryVersion ?? null)
  ) {
    return { ok: false, reason: "lps_trajectory_version_drift" };
  }
  const currentIds = input.current.decisionIds ?? [];
  if (!currentIds.includes(input.decisionId)) {
    return { ok: false, reason: "lps_decision_not_linked" };
  }
  // Sealed decisionIds must remain a prefix subset of current (HD append only).
  const sealedIds = input.sealed.decisionIds ?? [];
  for (let i = 0; i < sealedIds.length; i += 1) {
    if (currentIds[i] !== sealedIds[i]) {
      return { ok: false, reason: "lps_decision_history_rewritten" };
    }
  }
  return { ok: true };
}

/**
 * @deprecated Prefer evaluateLpsTransitionAfterHumanDecision (CR-04).
 * Kept for call-site migration; permissive version-only check is insufficient.
 */
export function isLegitimateLpsTransitionAfterHumanDecision(input: {
  readonly sealedLpsVersion: number;
  readonly currentLpsVersion: number;
  readonly currentDecisionIds: readonly string[] | undefined;
  readonly decisionId: string;
}): boolean {
  if (input.currentLpsVersion === input.sealedLpsVersion) return true;
  if (input.currentLpsVersion < input.sealedLpsVersion) return false;
  const ids = input.currentDecisionIds ?? [];
  return ids.includes(input.decisionId);
}

export function decisionBasisFromGenericMissionSubject(input: {
  readonly subject: GenericMissionSubject;
  readonly selectedOptionRef: string;
  readonly recommendedOptionRef?: string;
}): DecisionBasis {
  const s = input.subject;
  const ctx: DecisionBasisGenericMissionContext = {
    missionSubjectId: s.missionSubjectId,
    presentationDigest: s.presentationDigest,
    subjectSchemaVersion: GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
    objective: s.objective,
    expectedOutcome: s.expectedOutcome,
    scopeNarrative: s.scopeNarrative,
    scopeIn: [...s.scopeIn],
    scopeOut: [...s.scopeOut],
    materiality: s.materiality,
    materialityReasonCodes: [...s.materialityReasonCodes],
    repositoryBindingIdentity: s.repositoryBindingIdentity,
    pathRoot: s.pathRoot,
    requiredCapabilities: [...s.effects.requiredCapabilities],
    expectedOutputs: [...s.effects.expectedOutputs],
    reversibilityExpectation: s.effects.reversibilityExpectation,
    stopConditions: [...s.effects.stopConditions],
    risks: [...s.effects.risks],
    reservations: [...s.effects.reservations],
    intentKind: s.effects.intentKind,
    artifactType: s.effects.artifactType,
    requestedOperation: s.effects.requestedOperation,
    impactSignals: { ...s.impactSignals },
    optionRefs: [...s.optionRefs],
    selectedOptionRef: input.selectedOptionRef,
    ...(input.recommendedOptionRef
      ? { recommendedOptionRef: input.recommendedOptionRef }
      : {}),
    cycleInstanceId: s.cycleInstanceId,
  };
  return {
    sourceType: "generic_mission",
    sourceRef: s.missionSubjectId,
    sourceDigest: s.presentationDigest,
    projectId: s.projectId,
    ...(s.cycleInstanceId ? { cycleInstanceId: s.cycleInstanceId } : {}),
    proposalContext: {
      lpsId: s.lpsId,
      lpsVersion: s.lpsVersion,
      ...(s.doctrineDigest ? { doctrineDigest: s.doctrineDigest } : {}),
      ...(s.cycleInstanceId
        ? { activeCycleInstanceId: s.cycleInstanceId }
        : {}),
    },
    genericMissionContext: ctx,
    executionBasis: {
      objective: s.objective,
      scope: s.scopeNarrative,
      expectedOutcome: s.expectedOutcome,
      scopeIn: [...s.scopeIn],
      scopeOut: [...s.scopeOut],
      outOfScope: [...s.scopeOut],
      requiredCapabilities: [...s.effects.requiredCapabilities],
      expectedOutputs: [...s.effects.expectedOutputs],
      stopConditions: [...s.effects.stopConditions],
      risks: [...s.effects.risks],
      reservations: [...s.effects.reservations],
      ...(s.effects.intentKind
        ? { intentKind: s.effects.intentKind }
        : {}),
      ...(s.effects.artifactType
        ? { artifactType: s.effects.artifactType }
        : {}),
      ...(s.effects.requestedOperation
        ? { requestedOperation: s.effects.requestedOperation }
        : {}),
      ...(s.effects.reversibilityExpectation
        ? { reversibilityExpectation: s.effects.reversibilityExpectation }
        : {}),
    },
  };
}
