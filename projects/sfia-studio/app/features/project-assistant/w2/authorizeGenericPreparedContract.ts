/**
 * Authority Continuity — Product path after generic PREPARE:
 * Require prior Pilot inspection attestation → Confirm (when required) → Authorize.
 * STOP BEFORE ExecutionAttempt / Cursor REAL.
 *
 * Does NOT record inspection itself (Q09/Q10 — no auto-attestation).
 * Requires expectedVersion + expectedSemanticFingerprint of the inspected contract.
 * Revalidates materiality against CURRENT Product (stamp is historical only).
 *
 * Reuses readContractInspectionState / confirmForAuthorization / evaluateExecutionAuthorization.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  materialityFromContractConstraints,
} from "@/lib/oa/execution-contract";
import {
  readContractInspectionState,
} from "./inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
import type {
  ContractInspectionStateDto,
  EvaluateExecutionAuthorizationResult,
} from "./types";
import {
  analysisStubFromMaterialityFacts,
  parseStampedProductCurrentness,
  revalidateMaterialityAgainstCurrentProduct,
} from "./resolveAuthoritativeProductMateriality";
import { verifyGenericMissionHumanDecisionForContract } from "./verifyGenericMissionHumanDecisionForPrepare";

export type AuthorizeGenericPreparedContractInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  /**
   * Exact contract version the Pilote inspected and is authorizing.
   * Required — server never invents inspection from authorize alone.
   */
  readonly expectedVersion: number;
  /**
   * Semantic fingerprint of the inspected contract version.
   * Stale / amended contracts BLOCK.
   */
  readonly expectedSemanticFingerprint: string;
  readonly forceLocalAuthority?: boolean;
};

export type AuthorizeGenericPreparedContractResult =
  | {
      readonly ok: true;
      readonly executionContractId: string;
      readonly contractVersion: number;
      readonly status: string;
      readonly semanticFingerprint: string;
      readonly inspection: ContractInspectionStateDto;
      readonly confirmationRef: string | null;
      readonly authorization: EvaluateExecutionAuthorizationResult & {
        readonly ok: true;
      };
      readonly executionAttemptCreated: false;
      readonly humanDecisionCreated: false;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

export async function authorizeGenericPreparedContract(
  input: AuthorizeGenericPreparedContractInput,
): Promise<AuthorizeGenericPreparedContractResult> {
  const loaded =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: "Contrat introuvable — autorisation impossible.",
    };
  }
  if (loaded.contract.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "Contrat hors projet — autorisation refusée.",
    };
  }

  // Q09/Q10 — NEVER record inspection here. Require a prior Pilote attestation.
  const inspection = await readContractInspectionState({
    oa: input.oa,
    executionContractId: input.executionContractId,
  });
  if (!inspection.ok) {
    return {
      ok: false,
      code: inspection.code,
      message: inspection.message,
    };
  }
  if (!inspection.inspectionSufficient) {
    return {
      ok: false,
      code: inspection.reinspectionRequired
        ? "REINSPECTION_REQUIRED"
        : "INSPECTION_REQUIRED",
      message: inspection.reinspectionRequired
        ? "Le contrat a changé depuis la dernière inspection — réinspecter avant d'autoriser."
        : "Inspection Pilote requise avant autorisation — aucun acte d'inspection n'est inventé ici.",
    };
  }
  const attestedVersion =
    inspection.attestedVersion ?? inspection.contractVersion;
  if (
    attestedVersion !== input.expectedVersion &&
    inspection.contractVersion !== input.expectedVersion
  ) {
    return {
      ok: false,
      code: "VERSION_MISMATCH",
      message:
        "Version du contrat différente de celle inspectée — réinspection requise.",
    };
  }
  const expectedFp = input.expectedSemanticFingerprint;
  const attestedFp = inspection.attestedSemanticFingerprint;
  if (
    expectedFp !== inspection.semanticFingerprint &&
    expectedFp !== attestedFp
  ) {
    return {
      ok: false,
      code: "FINGERPRINT_MISMATCH",
      message:
        "Empreinte sémantique différente du contrat inspecté — réinspection requise.",
    };
  }

  // A2 — CURRENT Product materiality revalidation (stamp ≠ authority).
  const contractInputs = (loaded.contract.inputs ?? {}) as Record<
    string,
    unknown
  >;
  const factsRaw = (
    contractInputs.materialityFacts &&
    typeof contractInputs.materialityFacts === "object"
      ? (contractInputs.materialityFacts as Record<string, unknown>)
      : null
  );
  const stamped = materialityFromContractConstraints(loaded.contract.constraints);
  const decisionRefs = loaded.contract.decisionRefs ?? [];
  // M-HD-01 CR-03 — structural/unknown: re-verify each HD currently (not refs length).
  const structuralHdResume =
    decisionRefs.length >= 1 &&
    (stamped === "structural" || stamped === "unknown");
  if (structuralHdResume) {
    for (const ref of decisionRefs) {
      const hd = await verifyGenericMissionHumanDecisionForContract({
        oa: input.oa,
        projectId: input.projectId,
        decisionId: ref,
        contract: loaded.contract,
      });
      if (!hd.ok) {
        return {
          ok: false,
          code: hd.code,
          message: hd.message,
        };
      }
    }
  } else {
    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
      oa: input.oa,
      projectId: input.projectId,
      analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
      cycleInstanceId: loaded.contract.cycleInstanceId ?? null,
      stampedMateriality: stamped,
      stampedCurrentness: parseStampedProductCurrentness(factsRaw),
    });
    if (!revalidated.ok) {
      return {
        ok: false,
        code: revalidated.code,
        message: revalidated.message,
      };
    }
  }

  let confirmationRef: string | null = loaded.contract.confirmationRef ?? null;

  const mid =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!mid.ok) {
    return {
      ok: false,
      code: mid.error.detailCode,
      message: "Contrat introuvable après contrôle d'inspection.",
    };
  }

  if (mid.contract.status === "confirmation_required") {
    const confirmed = await confirmExecutionContractForAuthorization({
      oa: input.oa,
      projectId: input.projectId,
      executionContractId: input.executionContractId,
      forceLocalAuthority: input.forceLocalAuthority,
      // Skip duplicate CURRENT revalidation — already done above.
      skipMaterialityRevalidation: true,
    });
    if (!confirmed.ok) {
      return {
        ok: false,
        code: confirmed.code,
        message: confirmed.message,
      };
    }
    confirmationRef = confirmed.confirmationRef;
  }

  const authorization = await evaluateExecutionAuthorization({
    oa: input.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    expectedVersion: input.expectedVersion,
    expectedSemanticFingerprint: input.expectedSemanticFingerprint,
    forceLocalAuthority: input.forceLocalAuthority,
  });
  if (!authorization.ok) {
    return {
      ok: false,
      code: authorization.code,
      message: authorization.message,
    };
  }

  const after =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!after.ok) {
    return {
      ok: false,
      code: after.error.detailCode,
      message: "Contrat introuvable après autorisation.",
    };
  }

  return {
    ok: true,
    executionContractId: after.contract.executionContractId,
    contractVersion: after.contract.version,
    status: after.contract.status,
    semanticFingerprint: inspection.semanticFingerprint,
    inspection,
    confirmationRef,
    authorization,
    executionAttemptCreated: false,
    humanDecisionCreated: false,
  };
}
