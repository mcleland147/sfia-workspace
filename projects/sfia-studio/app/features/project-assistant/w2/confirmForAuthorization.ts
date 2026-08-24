/**
 * W2 Track C / W3-A — scoped Confirmation captured for authorization, never for
 * execution.
 *
 * Product order: Confirmation only after sufficient inspection of the exact
 * contract version, and only when Validate left status `confirmation_required`
 * (authority class OR effect-driven Confirmation via EFFECT_CONFIRMATION_REQUIRED).
 *
 * Status is the primary owner. `validated` refuses Confirmation (nothing to
 * confirm). N1 + confirmation_required is allowed when effects require N1
 * Confirmation independently of requiredAuthority.
 *
 * Nothing in this module executes: it stops at contract status `confirmed`.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR, registerLocalPiloteAuthority } from "@/lib/oa/decision";
import { readContractInspectionState } from "./inspectExecutionContract";
import type { ConfirmForAuthorizationResult } from "./types";

export function w2ConfirmationActionRef(input: {
  executionContractId: string;
  contractVersion: number;
}): string {
  return `act:w2-authorize:${input.executionContractId}:v${input.contractVersion}`;
}

export type ConfirmForAuthorizationInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
};

export async function confirmExecutionContractForAuthorization(
  input: ConfirmForAuthorizationInput,
): Promise<ConfirmForAuthorizationResult> {
  const { oa } = input;
  const loaded =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: "Contrat d'exécution introuvable — confirmation impossible.",
    };
  }
  const contract = loaded.contract;

  if (contract.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message:
        "Le contrat d'exécution n'appartient pas au projet demandé — confirmation refusée.",
    };
  }

  // Status-first: validated means Validate established Confirmation not required.
  if (contract.status === "validated") {
    return {
      ok: false,
      code: "CONFIRMATION_NOT_REQUIRED",
      message:
        "Aucune confirmation n'est requise pour ce contrat — rien à confirmer.",
    };
  }
  if (contract.status === "confirmed") {
    return {
      ok: true,
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
      confirmationRef: contract.confirmationRef ?? null,
      statusLabel: "CONFIRMATION REQUISE — OBTENUE",
      alreadyConfirmed: true,
      executionPerformed: false,
    };
  }
  // Allow confirm only from confirmation_required (ValidateExecutionContract owner).
  // Includes N1 + effect-driven Confirmation (C2 §10).
  if (contract.status !== "confirmation_required") {
    return {
      ok: false,
      code: "STATE_CONFLICT",
      message: `Le contrat au statut ${contract.status} ne peut pas être confirmé.`,
    };
  }

  // Confirmation never precedes inspection.
  const inspection = await readContractInspectionState({
    oa,
    executionContractId: input.executionContractId,
  });
  if (!inspection.ok) {
    return inspection;
  }
  if (!inspection.inspectionSufficient) {
    return {
      ok: false,
      code: inspection.reinspectionRequired
        ? "REINSPECTION_REQUIRED"
        : "INSPECTION_REQUIRED",
      message: inspection.reinspectionRequired
        ? "Le contrat a changé depuis la dernière inspection — réinspecter avant de confirmer."
        : "Inspecter le contrat avant de confirmer.",
    };
  }

  const decisionRef = (contract.decisionRefs ?? [])[0];
  if (!decisionRef) {
    return {
      ok: false,
      code: "DECISION_REQUIRED",
      message:
        "Contrat sans décision humaine rattachée — aucune confirmation possible.",
    };
  }

  const authority = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: contract.scope,
    issuedAt: oa.clock.nowIso(),
    evidenceId: `evd:w2-cfm:${contract.executionContractId}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const confirmationId = `cfm:w2:${contract.executionContractId}:v${contract.version}`;
  const level =
    contract.requiredAuthority === "N1"
      ? "N1"
      : contract.requiredAuthority === "N2"
        ? "N2"
        : "N3";
  // Effect-driven Confirmation may request N1 while requiredAuthority is also N1.
  const effectLevelConstraint = contract.constraints.find((c) =>
    c.startsWith("EFFECT_CONFIRMATION_REQUIRED:"),
  );
  const effectLevel = effectLevelConstraint?.split(":")[1];
  const confirmationLevel =
    effectLevel === "N1" || effectLevel === "N2" || effectLevel === "N3"
      ? effectLevel
      : level;

  const requested = await oa.decisionServices.requestConfirmation.execute({
    confirmationId,
    level: confirmationLevel,
    actionRef: w2ConfirmationActionRef({
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
    }),
    requestedBy: LOCAL_PILOTE_ACTOR,
    requestedTo: LOCAL_PILOTE_ACTOR,
    scope: contract.scope,
    idempotencyKey: `idem:w2-cfm:${contract.executionContractId}:v${contract.version}`,
    decisionRef,
  });
  if (!requested.ok) {
    return {
      ok: false,
      code: requested.error.detailCode,
      message: requested.error.message,
    };
  }

  const granted = await oa.decisionServices.grantConfirmation.execute({
    confirmationId,
    actor: LOCAL_PILOTE_ACTOR,
    authorityEvidenceId: authority.evidenceId,
  });
  if (!granted.ok) {
    return {
      ok: false,
      code: granted.error.detailCode,
      message: granted.error.message,
    };
  }

  const confirmed =
    await oa.executionContractServices.confirmExecutionContract.execute({
      executionContractId: contract.executionContractId,
      confirmationId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
      expectedVersion: contract.version,
    });
  if (!confirmed.ok) {
    return {
      ok: false,
      code: confirmed.error.detailCode,
      message: confirmed.error.message,
    };
  }

  return {
    ok: true,
    executionContractId: confirmed.contract.executionContractId,
    contractVersion: confirmed.contract.version,
    confirmationRef: confirmed.contract.confirmationRef ?? confirmationId,
    statusLabel: "CONFIRMATION REQUISE — OBTENUE",
    alreadyConfirmed: false,
    executionPerformed: false,
  };
}
