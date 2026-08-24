/**
 * W2 Track C — effective authority evaluation at the product application path.
 *
 * Product order enforced here:
 *
 *   ExecutionContract PREPARED
 *   → Pilote INSPECTS
 *   → Confirmation only if required
 *   → effective authority / executor sufficiency
 *   → AUTHORIZED or BLOCKED
 *   → STOP BEFORE EXECUTE
 *
 * Hard properties:
 *   - fail-closed: every unresolved condition yields BLOCKED with a reason;
 *   - a stale inspection never authorizes (material amendment ⇒ re-inspection);
 *   - a Confirmation is required only when the contract's required authority
 *     demands one, and a missing required Confirmation blocks honestly —
 *     nothing is ever fabricated;
 *   - AgentCapability is an authority envelope, evaluated from the closed OA
 *     registry, never an invented capability catalog;
 *   - every evaluation is materialized as an AuthorityVerificationReceipt;
 *   - no ExecutionAttempt is created and no execution path is ever called.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR, registerLocalPiloteAuthority } from "@/lib/oa/decision";
import type {
  AgentCapabilitySufficiency,
  AuthorityVerificationBlockedReason,
  ExecutionContract,
} from "@/lib/oa/execution-contract";
import { agentMatchViolation } from "@/lib/oa/execution-attempt";
import type { AgentRegistryPort } from "@/lib/oa/execution-attempt";
import { readContractInspectionState } from "./inspectExecutionContract";
import type {
  AgentCapabilityOutcomeDto,
  ConfirmationRequirementDto,
  ContractInspectionStateDto,
  EvaluateExecutionAuthorizationResult,
} from "./types";

/**
 * Confirmation requirement from the canonical ExecutionContract lifecycle.
 *
 * Status is the primary owner (ValidateExecutionContract):
 * - validated ⇒ Confirmation not required (effect projection said so)
 * - confirmation_required ⇒ Confirmation required (authority class OR effects)
 * - confirmed ⇒ Confirmation obtained
 *
 * requiredAuthority alone does NOT decide Confirmation (C2 §10).
 */
export function resolveConfirmationRequirement(
  contract: Pick<ExecutionContract, "requiredAuthority" | "confirmationRef" | "status">,
): ConfirmationRequirementDto {
  const confirmationRef = contract.confirmationRef ?? null;

  switch (contract.status) {
    case "validated":
      // Validate wrote validated ⇒ effect Confirmation not required.
      return {
        required: false,
        satisfied: true,
        confirmationRef,
        statusLabel: "CONFIRMATION NON REQUISE",
        fabricated: false,
      };
    case "confirmation_required":
      return {
        required: true,
        satisfied: false,
        confirmationRef,
        statusLabel: "CONFIRMATION REQUISE — MANQUANTE",
        fabricated: false,
      };
    case "confirmed": {
      const satisfied = confirmationRef !== null;
      return {
        required: true,
        satisfied,
        confirmationRef,
        statusLabel: satisfied
          ? "CONFIRMATION REQUISE — OBTENUE"
          : "CONFIRMATION REQUISE — MANQUANTE",
        fabricated: false,
      };
    }
    default:
      // draft/proposed (and any other pre-validate status): unknown-not-yet.
      // Authorize must block via contract_state_conflict before confirmation.
      if (confirmationRef !== null) {
        return {
          required: true,
          satisfied: false,
          confirmationRef,
          statusLabel: "CONFIRMATION REQUISE — MANQUANTE",
          fabricated: false,
        };
      }
      return {
        required: false,
        satisfied: false,
        confirmationRef: null,
        statusLabel: "CONFIRMATION NON REQUISE",
        fabricated: false,
      };
  }
}

/**
 * AgentCapability as a governance envelope: does any registered executor
 * cover the contract's required capabilities and action/target/scope?
 * Deny-by-default, reusing the OA agent match invariant.
 */
export function evaluateAgentCapability(
  registry: AgentRegistryPort,
  contract: Pick<
    ExecutionContract,
    "requiredCapabilities" | "action" | "target" | "scope"
  >,
): AgentCapabilitySufficiency {
  const criteria = {
    requiredCapabilities: [...contract.requiredCapabilities],
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
  };
  // Prefer findCandidates (deny-by-default port API) so contract-shaped
  // fixture composition can adapt AFTER EC preparation (B4).
  const candidates = registry.findCandidates(criteria);
  const evaluatedAgentRefs = [
    ...new Set([
      ...registry.listAgents().map((agent) => agent.agentId),
      ...candidates.map((c) => c.agentId),
    ]),
  ];
  if (candidates.length > 0) {
    return {
      evaluatedAgentRefs,
      sufficientAgentRef: candidates[0].agentId,
      sufficient: true,
      reason: "sufficient",
    };
  }
  const agents = registry.listAgents();
  if (agents.length === 0) {
    return {
      evaluatedAgentRefs,
      sufficient: false,
      reason: "no_agent_registered",
    };
  }
  let firstViolation: AgentCapabilitySufficiency["reason"] = "scope_not_allowed";
  for (const agent of agents) {
    const violation = agentMatchViolation(agent, criteria);
    if (!violation) {
      return {
        evaluatedAgentRefs,
        sufficientAgentRef: agent.agentId,
        sufficient: true,
        reason: "sufficient",
      };
    }
    firstViolation =
      violation.detailCode === "AGENT_DISABLED"
        ? "agent_disabled"
        : violation.detailCode === "AGENT_UNHEALTHY"
          ? "agent_unhealthy"
          : violation.detailCode === "AGENT_CAPABILITY_MISMATCH"
            ? "capability_not_supported"
            : "scope_not_allowed";
  }
  return { evaluatedAgentRefs, sufficient: false, reason: firstViolation };
}

function capabilityDto(
  capability: AgentCapabilitySufficiency,
): AgentCapabilityOutcomeDto {
  return {
    sufficient: capability.sufficient,
    evaluatedAgentRefs: [...capability.evaluatedAgentRefs],
    sufficientAgentRef: capability.sufficientAgentRef ?? null,
    reason: capability.reason,
    statusLabel: capability.sufficient
      ? "EXÉCUTEUR SUFFISANT"
      : "EXÉCUTEUR INSUFFISANT — BLOQUÉ",
  };
}

const BLOCKED_TEXT: Record<
  AuthorityVerificationBlockedReason,
  { reasonText: string; nextAction: string }
> = {
  contract_not_found: {
    reasonText: "Contrat d'exécution introuvable.",
    nextAction: "Reprendre la préparation du contrat.",
  },
  inspection_required: {
    reasonText: "Le contrat n'a pas été inspecté.",
    nextAction: "Inspecter le contrat avant toute autorisation.",
  },
  reinspection_required_material_change: {
    reasonText:
      "Le contrat a changé de manière matérielle depuis la dernière inspection.",
    nextAction: "Réinspecter la version courante du contrat.",
  },
  confirmation_required: {
    reasonText: "Une confirmation requise est manquante.",
    nextAction: "Obtenir la confirmation requise après inspection.",
  },
  contract_not_confirmed: {
    reasonText: "Le contrat n'est pas au statut confirmé.",
    nextAction: "Poursuivre le cycle de gouvernance du contrat.",
  },
  decision_not_current: {
    reasonText: "La décision humaine rattachée n'est plus courante.",
    nextAction: "Reprendre la décision avant autorisation.",
  },
  authority_denied: {
    reasonText: "Autorité effective insuffisante.",
    nextAction: "Faire vérifier l'autorité requise.",
  },
  authority_scope_mismatch: {
    reasonText: "L'autorité présentée ne couvre pas le périmètre du contrat.",
    nextAction: "Obtenir une autorité au périmètre exact du contrat.",
  },
  executor_capability_insufficient: {
    reasonText: "Aucun exécuteur autorisé ne couvre ce contrat.",
    nextAction: "Aucune exécution possible — arrêt honnête.",
  },
  contract_state_conflict: {
    reasonText: "L'état du contrat interdit l'autorisation.",
    nextAction: "Requalifier le contrat.",
  },
  guardrail_refused: {
    reasonText: "Un garde-fou runtime refuse l'autorisation.",
    nextAction: "Lever le garde-fou avant toute autorisation.",
  },
};

function mapAuthorizationFailure(
  detailCode: string,
): AuthorityVerificationBlockedReason {
  switch (detailCode) {
    case "CONTRACT_NOT_FOUND":
      return "contract_not_found";
    case "AUTHORITY_SCOPE_MISMATCH":
      return "authority_scope_mismatch";
    case "AUTHORITY_DENIED":
      return "authority_denied";
    case "DECISION_NOT_CURRENT":
    case "DECISION_NOT_FOUND":
    case "DECISION_REQUIRED":
      return "decision_not_current";
    case "CONFIRMATION_REQUIRED":
      return "confirmation_required";
    case "CAPABILITY_MISSING":
      return "executor_capability_insufficient";
    default:
      return "contract_state_conflict";
  }
}

export type EvaluateExecutionAuthorizationInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  /** Hostile client fields — never trusted. */
  readonly claimedAuthorityLevel?: unknown;
  readonly canActAsMorris?: unknown;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
};

export async function evaluateExecutionAuthorization(
  input: EvaluateExecutionAuthorizationInput,
): Promise<EvaluateExecutionAuthorizationResult> {
  void input.claimedAuthorityLevel;
  void input.canActAsMorris;

  const { oa } = input;
  const contractResult =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!contractResult.ok) {
    return {
      ok: false,
      code: contractResult.error.detailCode,
      message: "Contrat d'exécution introuvable — évaluation impossible.",
    };
  }
  const contract = contractResult.contract;

  if (contract.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message:
        "Le contrat d'exécution n'appartient pas au projet demandé — évaluation refusée.",
    };
  }

  const inspectionResult = await readContractInspectionState({
    oa,
    executionContractId: input.executionContractId,
  });
  if (!inspectionResult.ok) {
    return inspectionResult;
  }
  const inspection: ContractInspectionStateDto = inspectionResult;
  const confirmation = resolveConfirmationRequirement(contract);
  const capability = evaluateAgentCapability(
    oa.executionAttemptServices.registry,
    contract,
  );

  const finish = async (
    outcome: "AUTHORIZED" | "BLOCKED",
    blockedReason: AuthorityVerificationBlockedReason | undefined,
    verifiedAuthorityLevel: string | null,
    blockedDetail?: string,
    authorityEvidenceIds: readonly string[] = [],
  ): Promise<EvaluateExecutionAuthorizationResult> => {
    const { receipt } =
      await oa.executionContractServices.recordAuthorityVerification.execute({
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        contractVersion: contract.version,
        semanticFingerprint: inspection.semanticFingerprint,
        actor: LOCAL_PILOTE_ACTOR,
        decisionRefs: [...(contract.decisionRefs ?? [])],
        confirmationRefs: confirmation.confirmationRef
          ? [confirmation.confirmationRef]
          : [],
        confirmationRequired: confirmation.required,
        inspectionAttestationRef: inspection.attestationRef ?? undefined,
        requiredAuthority: contract.requiredAuthority,
        verifiedAuthorityLevel: verifiedAuthorityLevel ?? undefined,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        agentCapability: capability,
        authorityEvidenceIds: [...authorityEvidenceIds],
        outcome: outcome === "AUTHORIZED" ? "authorized" : "blocked",
        blockedReason,
        blockedDetail,
      });

    const text = blockedReason ? BLOCKED_TEXT[blockedReason] : null;
    return {
      ok: true,
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
      outcome,
      outcomeLabel:
        outcome === "AUTHORIZED"
          ? "AUTORISÉ — STOP AVANT EXECUTE"
          : "BLOQUÉ — ACTION REQUISE",
      reasonCode: blockedReason ?? "effective_authority_established",
      reasonText:
        text?.reasonText ??
        "Autorité effective établie : décision, périmètre du contrat, inspection, confirmation requise et exécuteur suffisant.",
      nextAction:
        text?.nextAction ??
        "Aucune exécution n'est autorisée par ce cycle — arrêt avant Execute.",
      inspection,
      confirmation,
      agentCapability: capabilityDto(capability),
      authorityReceiptRef: receipt.receiptId,
      decisionRefs: [...(contract.decisionRefs ?? [])],
      requiredAuthority: contract.requiredAuthority,
      verifiedAuthorityLevel,
      executionPerformed: false,
      attemptCreated: false,
    };
  };

  // 1. Inspection must be sufficient for the exact current contract version.
  if (!inspection.inspectionSufficient) {
    return finish(
      "BLOCKED",
      inspection.reinspectionRequired
        ? "reinspection_required_material_change"
        : "inspection_required",
      null,
      inspection.reason,
    );
  }

  // 2. Pre-validate statuses are not authorization-ready (ValidateExecutionContract owns lifecycle).
  if (
    contract.status !== "validated" &&
    contract.status !== "confirmation_required" &&
    contract.status !== "confirmed"
  ) {
    return finish(
      "BLOCKED",
      "contract_state_conflict",
      null,
      `status_${contract.status}`,
    );
  }

  // 3. Confirmation only when required — never fabricated, never gratuitous.
  if (confirmation.required && !confirmation.satisfied) {
    return finish("BLOCKED", "confirmation_required", null, `status_${contract.status}`);
  }

  // 4. Effective authority through the existing OA gate (no parallel path).
  const authority = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: contract.scope,
    issuedAt: oa.clock.nowIso(),
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return finish("BLOCKED", "authority_denied", null, authority.code);
  }

  const checked =
    await oa.executionContractServices.checkExecutionAuthorization.execute({
      executionContractId: contract.executionContractId,
      action: contract.action,
      target: contract.target,
      scope: contract.scope,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
      correlationId: `w2-authz:${contract.executionContractId}`,
    });
  const authorityEvidenceIds = [authority.evidenceId];

  if (!checked.ok) {
    return finish(
      "BLOCKED",
      mapAuthorizationFailure(checked.error.detailCode),
      null,
      checked.error.detailCode,
      authorityEvidenceIds,
    );
  }

  // 5. Executor sufficiency — an authorized human still needs a capable agent.
  if (!capability.sufficient) {
    return finish(
      "BLOCKED",
      "executor_capability_insufficient",
      "N3",
      capability.reason,
      authorityEvidenceIds,
    );
  }

  // STOP BEFORE EXECUTE — nothing beyond this verdict is invoked.
  return finish("AUTHORIZED", undefined, "N3", undefined, authorityEvidenceIds);
}
