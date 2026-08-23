/**
 * W2 Track C — thin product application seam: Pilote material amendment of an
 * already-inspected ExecutionContract by appending ONE tightening constraint.
 *
 * Reuses exclusively:
 *   supersedeExecutionContract → validateExecutionContract → inspection state
 *
 * R1 recovery:
 *   durable draft|proposed successor is revalidated on replay BEFORE success;
 *   governed identity is fail-closed; reinspectionRequired reflects CURRENT
 *   successor inspection truth (never forged across EC IDs).
 */

import { createHash } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { canonicalizeJson } from "@/lib/oa/doctrine";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import { readContractInspectionState } from "./inspectExecutionContract";
import type {
  AmendExecutionContractResult,
  AmendedExecutionContractDto,
  ContractInspectionStateDto,
  W2Failure,
} from "./types";

export const W2_CONSTRAINT_AMENDMENT_REASON = "w2_constraint_amendment";

export type AmendExecutionContractInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  readonly additionalConstraint: string;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
};

function fail(code: string, message: string): W2Failure {
  return { ok: false, code, message };
}

function normalizeConstraint(raw: string): string | null {
  const trimmed = raw.replace(/\u0000/g, "").trim();
  if (!trimmed) return null;
  return trimmed.replace(/\s+/g, " ");
}

function amendmentDigest(
  priorExecutionContractId: string,
  normalizedConstraint: string,
): string {
  return createHash("sha256")
    .update("w2-constraint-amend\n", "utf8")
    .update(priorExecutionContractId, "utf8")
    .update("\n", "utf8")
    .update(normalizedConstraint, "utf8")
    .digest("hex")
    .slice(0, 16);
}

function successorIdFor(
  priorExecutionContractId: string,
  digest: string,
): string {
  const base = priorExecutionContractId.slice(0, 72);
  return `${base}:amd:${digest}`;
}

function idempotencyKeyFor(digest: string): string {
  return `idem:w2-constraint-amend:${digest}`;
}

function sameStringList(
  left: readonly string[] | undefined,
  right: readonly string[] | undefined,
): boolean {
  const a = left ?? [];
  const b = right ?? [];
  if (a.length !== b.length) return false;
  return a.every((value, index) => value === b[index]);
}

function sameOptionalMaterial(left: unknown, right: unknown): boolean {
  if (left === undefined && right === undefined) return true;
  if (left === undefined || right === undefined) return false;
  return canonicalizeJson(left) === canonicalizeJson(right);
}

/**
 * Fail-closed governed identity for a deterministic W2 constraint successor.
 * Exported for R1 unit proof of the application guard (no OA mutation).
 */
export function verifyGovernedAmendmentSuccessor(input: {
  readonly prior: ExecutionContract;
  readonly successor: ExecutionContract;
  readonly expectedSuccessorId: string;
  readonly expectedIdempotencyKey: string;
  readonly normalizedConstraint: string;
}): W2Failure | null {
  const { prior, successor } = input;
  const expectedConstraints = [...prior.constraints, input.normalizedConstraint];

  if (successor.executionContractId !== input.expectedSuccessorId) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "Identité successeur déterministe mismatch.",
    );
  }
  if (successor.projectId !== prior.projectId) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "projectId successeur incompatible avec le prédécesseur.",
    );
  }
  if ((successor.cycleInstanceId ?? null) !== (prior.cycleInstanceId ?? null)) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "cycleInstanceId successeur incompatible.",
    );
  }
  if (successor.supersedesExecutionContractId !== prior.executionContractId) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "Lignage supersedesExecutionContractId incorrect.",
    );
  }
  if (successor.supersessionReason !== W2_CONSTRAINT_AMENDMENT_REASON) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "supersessionReason d'amendement W2 incorrect.",
    );
  }
  if (successor.idempotencyKey !== input.expectedIdempotencyKey) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "idempotencyKey d'amendement mismatch.",
    );
  }
  if (successor.requiredAuthority !== prior.requiredAuthority) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "requiredAuthority ne peut pas dériver silencieusement.",
    );
  }
  if (!sameStringList(successor.decisionRefs, prior.decisionRefs)) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "decisionRefs successeur incompatibles.",
    );
  }
  if (successor.scope !== prior.scope) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "scope successeur incompatible.",
    );
  }
  if (successor.action !== prior.action || successor.target !== prior.target) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "action/target ne peuvent pas dériver silencieusement.",
    );
  }
  if (
    !sameStringList(successor.requiredCapabilities, prior.requiredCapabilities)
  ) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "requiredCapabilities successeur incompatibles.",
    );
  }
  if (!sameStringList(successor.stopConditions, prior.stopConditions)) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "stopConditions successeur incompatibles.",
    );
  }
  if (
    !sameStringList(
      successor.evidenceRequirements,
      prior.evidenceRequirements,
    )
  ) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "evidenceRequirements successeur incompatibles.",
    );
  }
  if (successor.reversibility !== prior.reversibility) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "reversibility successeur incompatible.",
    );
  }
  if (
    (successor.executionWindowClass ?? null) !==
    (prior.executionWindowClass ?? null)
  ) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "executionWindowClass successeur incompatible.",
    );
  }
  if (!sameStringList(successor.constraints, expectedConstraints)) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "contraintes successeur ≠ prédécesseur + contrainte d'amendement.",
    );
  }
  if (
    !sameOptionalMaterial(
      successor.doctrinePackageRef,
      prior.doctrinePackageRef,
    )
  ) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "doctrinePackageRef successeur incompatible.",
    );
  }
  if (!sameOptionalMaterial(successor.inputs, prior.inputs)) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "inputs successeur incompatibles.",
    );
  }
  if (
    !sameOptionalMaterial(successor.expectedOutputs, prior.expectedOutputs)
  ) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "expectedOutputs successeur incompatibles.",
    );
  }
  if (
    !sameOptionalMaterial(successor.adapterExportRef, prior.adapterExportRef)
  ) {
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "adapterExportRef successeur incompatible.",
    );
  }
  return null;
}

function toContractDto(contract: ExecutionContract): AmendedExecutionContractDto {
  return {
    executionContractId: contract.executionContractId,
    version: contract.version,
    status: contract.status,
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    requiredAuthority: contract.requiredAuthority,
    constraints: [...(contract.constraints ?? [])],
    stopConditions: [...(contract.stopConditions ?? [])],
    requiredCapabilities: [...(contract.requiredCapabilities ?? [])],
    reversibility: contract.reversibility ?? "non précisée",
    semanticFingerprint: contract.semanticFingerprint ?? "",
    supersedesExecutionContractId: contract.supersedesExecutionContractId ?? null,
    supersessionReason: contract.supersessionReason ?? null,
  };
}

function successPayload(input: {
  prior: ExecutionContract;
  priorInspectionAttestationRef: string | null;
  successor: ExecutionContract;
  successorInspection: ContractInspectionStateDto;
  replayed: boolean;
  additionalConstraint: string;
}): AmendExecutionContractResult {
  const reinspectionRequired = !input.successorInspection.inspectionSufficient;
  return {
    ok: true,
    priorExecutionContractId: input.prior.executionContractId,
    priorContractVersion: input.prior.version,
    priorInspectionAttestationRef: input.priorInspectionAttestationRef,
    successor: toContractDto(input.successor),
    supersedesExecutionContractId: input.prior.executionContractId,
    materialAmendment: true,
    priorInspectionDoesNotCoverSuccessor: true,
    reinspectionRequired,
    statusLabel: reinspectionRequired
      ? "CONTRAT AMENDÉ — RÉINSPECTION REQUISE"
      : "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
    successorInspection: input.successorInspection,
    additionalConstraint: input.additionalConstraint,
    replayed: input.replayed,
    humanDecisionCreated: false,
    authorityGranted: false,
    confirmationGranted: false,
    executionPerformed: false,
    attemptCreated: false,
  };
}

async function loadContract(
  oa: RuntimeOaStack,
  executionContractId: string,
): Promise<
  | { ok: true; contract: ExecutionContract }
  | { ok: false; code: string; message: string }
> {
  const loaded = await oa.executionContractServices.getExecutionContract.execute({
    executionContractId,
  });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: "Contrat d'exécution introuvable — amendement impossible.",
    };
  }
  return { ok: true, contract: loaded.contract };
}

async function registerPiloteAuthority(
  input: AmendExecutionContractInput,
  scope: string,
  digest: string,
): Promise<
  | { ok: true; evidenceId: string }
  | { ok: false; code: string; message: string }
> {
  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.oa.authorityResolver,
    scope,
    issuedAt: input.oa.clock.nowIso(),
    evidenceId: `evd:w2-amend:${digest}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return fail(authority.code, authority.message);
  }
  return { ok: true, evidenceId: authority.evidenceId };
}

/**
 * Recover an existing deterministic successor: identity → status policy →
 * validate draft|proposed → current inspection truth.
 */
async function recoverExistingSuccessor(input: {
  readonly amendInput: AmendExecutionContractInput;
  readonly prior: ExecutionContract;
  readonly successor: ExecutionContract;
  readonly expectedSuccessorId: string;
  readonly expectedIdempotencyKey: string;
  readonly normalizedConstraint: string;
  readonly digest: string;
}): Promise<AmendExecutionContractResult> {
  const identity = verifyGovernedAmendmentSuccessor({
    prior: input.prior,
    successor: input.successor,
    expectedSuccessorId: input.expectedSuccessorId,
    expectedIdempotencyKey: input.expectedIdempotencyKey,
    normalizedConstraint: input.normalizedConstraint,
  });
  if (identity) return identity;

  let successor = input.successor;
  const status = successor.status;

  if (status === "draft" || status === "proposed") {
    const authority = await registerPiloteAuthority(
      input.amendInput,
      input.prior.scope,
      input.digest,
    );
    if (!authority.ok) return authority;

    const validated =
      await input.amendInput.oa.executionContractServices.validateExecutionContract.execute(
        {
          executionContractId: successor.executionContractId,
          actor: LOCAL_PILOTE_ACTOR,
          authorityEvidenceId: authority.evidenceId,
        },
      );
    if (!validated.ok) {
      return fail(
        validated.error.detailCode,
        `Validation du contrat amendé refusée (${validated.error.detailCode}).`,
      );
    }
    successor = validated.contract;
  } else if (
    status === "validated" ||
    status === "confirmation_required" ||
    status === "confirmed"
  ) {
    // Already past validation — use durable state as-is.
  } else if (
    status === "cancelled" ||
    status === "superseded" ||
    status === "executing" ||
    status === "completed" ||
    status === "failed"
  ) {
    return fail(
      "CONTRACT_STATE_CONFLICT",
      `Successeur d'amendement dans un état incompatible (${status}).`,
    );
  } else {
    return fail(
      "CONTRACT_STATE_CONFLICT",
      `Statut successeur inconnu/incompatible (${String(status)}).`,
    );
  }

  const successorInspection = await readContractInspectionState({
    oa: input.amendInput.oa,
    executionContractId: successor.executionContractId,
  });
  if (!successorInspection.ok) return successorInspection;

  const priorInspection = await readContractInspectionState({
    oa: input.amendInput.oa,
    executionContractId: input.prior.executionContractId,
  });

  return successPayload({
    prior: input.prior,
    priorInspectionAttestationRef: priorInspection.ok
      ? priorInspection.attestationRef ?? priorInspection.staleAttestationRef
      : null,
    successor,
    successorInspection,
    replayed: true,
    additionalConstraint: input.normalizedConstraint,
  });
}

/**
 * Append one tightening execution constraint via OA supersession.
 */
export async function amendExecutionContractWithConstraint(
  input: AmendExecutionContractInput,
): Promise<AmendExecutionContractResult> {
  const normalized = normalizeConstraint(input.additionalConstraint);
  if (!normalized) {
    return fail(
      "CONSTRAINT_EMPTY",
      "La contrainte d'exécution supplémentaire est vide — amendement refusé.",
    );
  }

  const priorLoad = await loadContract(input.oa, input.executionContractId);
  if (!priorLoad.ok) return fail(priorLoad.code, priorLoad.message);
  let prior = priorLoad.contract;

  if (prior.projectId !== input.projectId) {
    return fail(
      "PROJECT_MISMATCH",
      "Le contrat n'appartient pas au projet demandé — amendement refusé.",
    );
  }

  const digest = amendmentDigest(prior.executionContractId, normalized);
  const newExecutionContractId = successorIdFor(
    prior.executionContractId,
    digest,
  );
  const idempotencyKey = idempotencyKeyFor(digest);

  // Replay / recovery path: deterministic successor already durable.
  const existingSuccessor = await loadContract(
    input.oa,
    newExecutionContractId,
  );
  if (existingSuccessor.ok) {
    const priorRefresh = await loadContract(
      input.oa,
      prior.executionContractId,
    );
    if (priorRefresh.ok) prior = priorRefresh.contract;

    return recoverExistingSuccessor({
      amendInput: input,
      prior,
      successor: existingSuccessor.contract,
      expectedSuccessorId: newExecutionContractId,
      expectedIdempotencyKey: idempotencyKey,
      normalizedConstraint: normalized,
      digest,
    });
  }

  if (
    prior.status === "superseded" ||
    prior.status === "cancelled" ||
    prior.status === "executing" ||
    prior.status === "completed" ||
    prior.status === "failed"
  ) {
    return fail(
      "CONTRACT_STATE_CONFLICT",
      `Le contrat (statut ${prior.status}) ne peut pas être amendé.`,
    );
  }

  if (prior.constraints.includes(normalized)) {
    return fail(
      "CONSTRAINT_DUPLICATE",
      "Cette contrainte est déjà présente sur le contrat — amendement refusé.",
    );
  }

  const priorInspection = await readContractInspectionState({
    oa: input.oa,
    executionContractId: prior.executionContractId,
  });
  if (!priorInspection.ok) return priorInspection;
  if (!priorInspection.inspectionSufficient) {
    return fail(
      "INSPECTION_REQUIRED_BEFORE_AMENDMENT",
      "Le contrat doit être inspecté avant un amendement matériel.",
    );
  }

  const authority = await registerPiloteAuthority(
    input,
    prior.scope,
    digest,
  );
  if (!authority.ok) return authority;

  const superseded =
    await input.oa.executionContractServices.supersedeExecutionContract.execute({
      newExecutionContractId,
      supersedesExecutionContractId: prior.executionContractId,
      supersessionReason: W2_CONSTRAINT_AMENDMENT_REASON,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
      expectedVersion: prior.version,
      constraints: [...prior.constraints, normalized],
      idempotencyKey,
      correlationId: `cor:w2-amend:${digest}`,
      status: "draft",
    });

  if (!superseded.ok) {
    // Bounded race recovery: reload expected successor once — no recursion.
    if (superseded.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
      const raced = await loadContract(input.oa, newExecutionContractId);
      if (!raced.ok) {
        return fail(
          "AMENDMENT_RECOVERY_FAILED",
          "Course supersession: successeur déterministe introuvable après CONTRACT_ALREADY_EXISTS.",
        );
      }
      const priorRefresh = await loadContract(
        input.oa,
        prior.executionContractId,
      );
      if (priorRefresh.ok) prior = priorRefresh.contract;
      return recoverExistingSuccessor({
        amendInput: input,
        prior,
        successor: raced.contract,
        expectedSuccessorId: newExecutionContractId,
        expectedIdempotencyKey: idempotencyKey,
        normalizedConstraint: normalized,
        digest,
      });
    }
    return fail(
      superseded.error.detailCode,
      `Amendement refusé (${superseded.error.detailCode}).`,
    );
  }

  const validated =
    await input.oa.executionContractServices.validateExecutionContract.execute({
      executionContractId: superseded.contract.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
  if (!validated.ok) {
    return fail(
      validated.error.detailCode,
      `Validation du contrat amendé refusée (${validated.error.detailCode}).`,
    );
  }

  const priorAfter = superseded.supersededContract ?? prior;
  const successorInspection = await readContractInspectionState({
    oa: input.oa,
    executionContractId: validated.contract.executionContractId,
  });
  if (!successorInspection.ok) return successorInspection;

  // Fresh create path: successor must not inherit sufficient inspection.
  if (successorInspection.inspectionSufficient) {
    return fail(
      "INSPECTION_INVARIANT_VIOLATED",
      "Le successeur ne doit pas hériter d'une inspection suffisante — arrêt fail-closed.",
    );
  }

  return successPayload({
    prior: priorAfter,
    priorInspectionAttestationRef: priorInspection.attestationRef,
    successor: validated.contract,
    successorInspection,
    replayed: false,
    additionalConstraint: normalized,
  });
}
