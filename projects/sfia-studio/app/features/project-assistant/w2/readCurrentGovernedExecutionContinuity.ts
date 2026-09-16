/**
 * W2 — read-only current governed ExecutionContract continuity projection.
 *
 * Restart-safe Product continuation: resolve the unique current pre-execution
 * ExecutionContract for a Project from durable OA truth, verify decision
 * lineage, project allowlisted inspection disclosure, and evaluate current
 * inspection sufficiency WITHOUT recording a new attestation.
 *
 * NEVER writes EC / Inspection / Confirmation / Authority / Attempt / LPS /
 * Epistemic / trajectory state.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import { projectExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
import { readContractInspectionState } from "./inspectExecutionContract";
import type {
  ContractInspectionStateDto,
  CurrentGovernedExecutionContinuityResult,
  W2Failure,
} from "./types";

const PRE_EXECUTION_STATUSES = new Set<ExecutionContract["status"]>([
  "draft",
  "proposed",
  "validated",
  "confirmation_required",
  "confirmed",
]);

const TERMINAL_STATUSES = new Set<ExecutionContract["status"]>([
  "completed",
  "failed",
  "cancelled",
  "superseded",
]);

function fail(
  code: string,
  message: string,
): W2Failure {
  return { ok: false, code, message };
}

function projectOwned(contract: ExecutionContract, projectId: string): boolean {
  return contract.projectId === projectId;
}

async function isCurrentInSupersessionLineage(
  oa: RuntimeOaStack,
  contract: ExecutionContract,
): Promise<boolean> {
  if (contract.status === "superseded") return false;
  const successors =
    await oa.executionContractServices.contracts.listSuperseding(
      contract.executionContractId,
    );
  return successors.length === 0;
}

/**
 * Typed Project/cycle context for continuity — Project read failure must NOT
 * collapse to "no active cycle".
 */
async function readProjectActiveCycleContext(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<
  | { ok: true; activeCycleInstanceId: string | null }
  | W2Failure
> {
  const loaded = await oa.projectServices.getProject.execute({ projectId });
  if (!loaded.ok) {
    return fail(
      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
      "Lecture du projet impossible — continuation gouvernée refusée.",
    );
  }
  return {
    ok: true,
    activeCycleInstanceId: loaded.project.activeCycleInstanceId ?? null,
  };
}

async function verifyDecisionLineage(
  oa: RuntimeOaStack,
  projectId: string,
  contract: ExecutionContract,
): Promise<
  | { ok: true; decisionRef: string }
  | W2Failure
> {
  const refs = contract.decisionRefs ?? [];
  if (refs.length === 0) {
    return fail(
      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
      "Contrat d'exécution sans décision rattachée — continuation refusée.",
    );
  }

  let primaryRef: string | null = null;
  for (const decisionId of refs) {
    const got = await oa.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    if (!got.ok) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Décision rattachée au contrat introuvable — continuation refusée.",
      );
    }
    const decision = got.decision;
    if (decision.projectId !== projectId) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Décision rattachée hors projet — continuation refusée.",
      );
    }
    if (decision.status !== "accepted") {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Décision rattachée non effective — continuation refusée.",
      );
    }
    if (!decision.decisionBasis) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "DecisionBasis absente sur la décision rattachée — continuation refusée.",
      );
    }
    if (primaryRef == null) primaryRef = decision.decisionId;
  }

  return { ok: true, decisionRef: primaryRef! };
}

function toContinuityContractProjection(contract: ExecutionContract): {
  ok: true;
  contract: Extract<
    CurrentGovernedExecutionContinuityResult,
    { ok: true; kind: "active" }
  >["contract"];
} | W2Failure {
  const disclosureResult =
    projectExecutionContractInspectionDisclosure(contract);
  // Incomplete disclosure is still projected honestly; inspection fails closed.
  const disclosure = disclosureResult.disclosure;

  return {
    ok: true,
    contract: {
      executionContractId: contract.executionContractId,
      version: contract.version,
      status: contract.status,
      action: contract.action,
      target: contract.target,
      scope: contract.scope,
      requiredAuthority: contract.requiredAuthority,
      constraints: [...contract.constraints],
      stopConditions: [...contract.stopConditions],
      requiredCapabilities: [...contract.requiredCapabilities],
      reversibility: contract.reversibility,
      semanticFingerprint: contract.semanticFingerprint ?? "",
      effectConfirmationRequired: contract.status === "confirmation_required",
      effectConfirmationLevel: null,
      inspectionDisclosure: disclosure,
    },
  };
}

/**
 * Resolve the unique current pre-execution governed ExecutionContract for a
 * Project and return Product-ready contract + current inspection state.
 */
export async function readCurrentGovernedExecutionContinuity(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<CurrentGovernedExecutionContinuityResult> {
  const { oa, projectId } = input;
  if (!projectId.startsWith("prj:")) {
    return fail(
      "CONTRACT_INVALID",
      "Identifiant de projet invalide — continuation refusée.",
    );
  }

  const listed =
    await oa.executionContractServices.listExecutionContractHistory.execute({
      projectId,
    });
  if (!listed.ok) {
    return fail(
      listed.error.detailCode,
      listed.error.message ??
        "Lecture de l'historique des contrats d'exécution impossible.",
    );
  }

  const owned = listed.contracts.filter((c) => projectOwned(c, projectId));

  // Detect unsupported executing-current contracts before pre-execution filter.
  for (const contract of owned) {
    if (contract.status !== "executing") continue;
    if (!(await isCurrentInSupersessionLineage(oa, contract))) continue;
    return fail(
      "EXECUTION_CONTINUITY_UNSUPPORTED",
      "Un contrat en cours d'exécution est courant — la continuité pré-exécution ne s'applique pas.",
    );
  }

  const preExecution: ExecutionContract[] = [];
  for (const contract of owned) {
    if (TERMINAL_STATUSES.has(contract.status)) continue;
    if (!PRE_EXECUTION_STATUSES.has(contract.status)) continue;
    if (!(await isCurrentInSupersessionLineage(oa, contract))) continue;
    preExecution.push(contract);
  }

  if (preExecution.length === 0) {
    return { ok: true, kind: "none" };
  }

  if (preExecution.length > 1) {
    return fail(
      "EXECUTION_CONTINUITY_AMBIGUOUS",
      "Plusieurs contrats d'exécution courants non terminés — continuation refusée.",
    );
  }

  const candidate = preExecution[0]!;

  const projectCycle = await readProjectActiveCycleContext(oa, projectId);
  if (!projectCycle.ok) return projectCycle;

  // Explicit EC cycle linkage is durable execution context — must match the
  // Project's current active cycle. Missing active cycle is integrity failure
  // (not "compatible null"). Cycle-unlinked ECs remain compatible.
  if (candidate.cycleInstanceId) {
    if (!projectCycle.activeCycleInstanceId) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Le contrat courant est lié à un cycle, mais le projet n'a pas de cycle actif — continuation refusée.",
      );
    }
    if (candidate.cycleInstanceId !== projectCycle.activeCycleInstanceId) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Le contrat courant n'est pas cohérent avec le cycle actif du projet — continuation refusée.",
      );
    }
  }

  const lineage = await verifyDecisionLineage(oa, projectId, candidate);
  if (!lineage.ok) return lineage;

  const projected = toContinuityContractProjection(candidate);
  if (!projected.ok) return projected;

  const inspection = await readContractInspectionState({
    oa,
    executionContractId: candidate.executionContractId,
  });
  if (!inspection.ok) {
    return fail(
      inspection.code,
      inspection.message,
    );
  }

  const inspectionDto: ContractInspectionStateDto = {
    executionContractId: inspection.executionContractId,
    contractVersion: inspection.contractVersion,
    semanticFingerprint: inspection.semanticFingerprint,
    statusLabel: inspection.statusLabel,
    inspectionSufficient: inspection.inspectionSufficient,
    attestationRef: inspection.attestationRef,
    attestedVersion: inspection.attestedVersion,
    staleAttestationRef: inspection.staleAttestationRef,
    reinspectionRequired: inspection.reinspectionRequired,
    reason: inspection.reason,
    grantsAuthority: false,
  };

  return {
    ok: true,
    kind: "active",
    decisionRef: lineage.decisionRef,
    contract: projected.contract,
    inspection: inspectionDto,
  };
}
