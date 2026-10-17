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
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalAuthorityForExecutionClass,
} from "@/lib/oa/decision";
import {
  assertDecisionRefsAdmissibleForConfirm,
  materialityFromContractConstraints,
} from "@/lib/oa/execution-contract";
import { readContractInspectionState } from "./inspectExecutionContract";
import type { ConfirmForAuthorizationResult } from "./types";
import {
  analysisStubFromMaterialityFacts,
  parseStampedProductCurrentness,
  revalidateMaterialityAgainstCurrentProduct,
} from "./resolveAuthoritativeProductMateriality";
import { verifyGenericMissionHumanDecisionForContract } from "./verifyGenericMissionHumanDecisionForPrepare";

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
  /**
   * When true, caller already revalidated CURRENT materiality
   * (e.g. authorizeGenericPreparedContract). Avoid double Product read.
   */
  readonly skipMaterialityRevalidation?: boolean;
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
    if (inspection.reason === "inspected_facts_incomplete") {
      return {
        ok: false,
        code: "REINSPECTION_REQUIRED",
        message:
          "L'attestation d'inspection ne couvre pas les détails d'exécution requis — réinspecter avant de confirmer.",
      };
    }
    if (inspection.reason === "inspection_disclosure_incomplete") {
      return {
        ok: false,
        code: "INSPECTION_DISCLOSURE_INCOMPLETE",
        message:
          "Disclosure d'inspection incomplète — confirmation refusée.",
      };
    }
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

  // Confirmation ≠ HumanDecision (P2-D-03). Do not invent a dec: to unlock Confirm.
  //
  // R-CI-01 — Route materiality CURRENT revalidation only for G-D4 policy contracts.
  // Legacy W2 contracts (no MATERIALITY:* stamp, real decisionRefs) keep historical
  // HD freshness / project / inspection gates via OA Confirm — they must not be
  // forced through Product NON_STRUCTURAL revalidation that expects G-D4 stamps.
  const decisionRefs = contract.decisionRefs ?? [];
  const decisionRef = decisionRefs[0];
  const stamped = materialityFromContractConstraints(contract.constraints);
  const contractInputs = (contract.inputs ?? {}) as Record<string, unknown>;
  const factsRaw =
    contractInputs.materialityFacts &&
    typeof contractInputs.materialityFacts === "object"
      ? (contractInputs.materialityFacts as Record<string, unknown>)
      : null;
  const stampedCurrentness = parseStampedProductCurrentness(factsRaw);

  // Case D — empty refs without G-D4 stamp: never treat as legacy HD path.
  if (decisionRefs.length === 0 && stamped == null) {
    return {
      ok: false,
      code: "DECISION_REQUIRED",
      message:
        "Contrat sans décision humaine ni justification G-D4 NON_STRUCTURAL — confirmation refusée.",
    };
  }

  // G-D4 policy: explicit MATERIALITY stamp and/or Product currentness stamp at PREPARE.
  const requiresGd4CurrentMaterialityRevalidation =
    stamped != null || stampedCurrentness != null;

  // M-HD-01 CR-03 — structural/unknown + decisionRefs: verify each HD currently
  // (never skip currentness merely because decisionRefs.length > 0).
  const structuralHdResume =
    decisionRefs.length >= 1 &&
    (stamped === "structural" || stamped === "unknown");

  let recomputedMateriality = stamped ?? "unknown";
  if (requiresGd4CurrentMaterialityRevalidation) {
    if (structuralHdResume) {
      for (const ref of decisionRefs) {
        const hd = await verifyGenericMissionHumanDecisionForContract({
          oa,
          projectId: input.projectId,
          decisionId: ref,
          contract,
        });
        if (!hd.ok) {
          return {
            ok: false,
            code: hd.code,
            message: hd.message,
          };
        }
      }
      recomputedMateriality = stamped ?? "unknown";
    } else if (input.skipMaterialityRevalidation !== true) {
      // Cases B/C — G-D4 stamped NON_STRUCTURAL (or stamped facts without HD).
      const revalidated = await revalidateMaterialityAgainstCurrentProduct({
        oa,
        projectId: input.projectId,
        analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
        cycleInstanceId: contract.cycleInstanceId ?? null,
        stampedMateriality: stamped,
        stampedCurrentness,
      });
      if (!revalidated.ok) {
        const passThrough =
          revalidated.code === "MATERIALITY_CURRENT_MISMATCH" ||
          revalidated.code === "MATERIALITY_CURRENTNESS_STALE" ||
          revalidated.code === "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE" ||
          revalidated.code === "REPOSITORY_BINDING_STALE" ||
          revalidated.code === "REPOSITORY_BINDING_UNAVAILABLE" ||
          revalidated.code.startsWith("SCOPE_");
        return {
          ok: false,
          code:
            revalidated.code === "MATERIALITY_STRUCTURAL" ||
            revalidated.code === "MATERIALITY_UNKNOWN"
              ? "DECISION_REQUIRED"
              : passThrough
                ? revalidated.code
                : "DECISION_REQUIRED",
          message: revalidated.message,
        };
      }
      recomputedMateriality = revalidated.current.assessment.materiality;
    } else if (stamped !== "non_structural") {
      // skipMaterialityRevalidation only valid after a governed G-D4 CURRENT pass
      // that already established NON_STRUCTURAL (authorizeGenericPreparedContract).
      return {
        ok: false,
        code: "DECISION_REQUIRED",
        message:
          "Stamp de matérialité non NON_STRUCTURAL — HumanDecision requise.",
      };
    } else {
      recomputedMateriality = "non_structural";
    }

    const admissible = assertDecisionRefsAdmissibleForConfirm({
      decisionRefs,
      stampedMateriality: stamped,
      recomputed: {
        materiality:
          recomputedMateriality === "non_structural" ||
          recomputedMateriality === "structural" ||
          recomputedMateriality === "unknown"
            ? recomputedMateriality
            : "unknown",
        reasonCodes: ["current_product_revalidation"],
        humanDecisionRequired: recomputedMateriality !== "non_structural",
        constraintToken:
          recomputedMateriality === "structural"
            ? "MATERIALITY:STRUCTURAL"
            : recomputedMateriality === "unknown"
              ? "MATERIALITY:UNKNOWN"
              : "MATERIALITY:NON_STRUCTURAL",
      },
    });
    if (!admissible.ok) {
      return {
        ok: false,
        code: "DECISION_REQUIRED",
        message:
          stamped === "non_structural" &&
          recomputedMateriality !== "non_structural"
            ? "Matérialité structurelle détectée à la confirmation — HumanDecision requise."
            : "Contrat sans décision humaine rattachée alors qu'une HumanDecision est requise — confirmation refusée.",
      };
    }
  }
  // Case A — Legacy W2: no G-D4 stamp, decisionRefs non-empty.
  // OA ConfirmExecutionContract validates HD existence/freshness/project/supersession.
  // Do not invent MATERIALITY stamps or call Product NON_STRUCTURAL revalidation.

  const authority = registerLocalAuthorityForExecutionClass({
    authorityResolver: oa.authorityResolver,
    scope: contract.scope,
    issuedAt: oa.clock.nowIso(),
    requiredAuthority: contract.requiredAuthority,
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
    // Omit decisionRef when G-D4 non-structural empty refs — Confirmation ≠ HD.
    ...(decisionRef ? { decisionRef } : {}),
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
