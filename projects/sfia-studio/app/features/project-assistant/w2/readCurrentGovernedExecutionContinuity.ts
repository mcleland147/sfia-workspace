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
import {
  assertDecisionRefsAdmissibleForConfirm,
  materialityFromContractConstraints,
  projectExecutionContractInspectionDisclosure,
  requiredInspectedFactsForContract,
} from "@/lib/oa/execution-contract";
import { readContractInspectionState } from "./inspectExecutionContract";
import {
  analysisStubFromMaterialityFacts,
  parseStampedProductCurrentness,
  resolveAuthoritativeProductMateriality,
  revalidateMaterialityAgainstCurrentProduct,
} from "./resolveAuthoritativeProductMateriality";
import type {
  ContractInspectionStateDto,
  CurrentGovernedExecutionContinuityResult,
  W2Failure,
} from "./types";

/**
 * D-P6-SHE-01 GAP-01 — Product PREPARE stamped deferred structural authority.
 * Server-owned input only; never trust a client-only claim.
 */
function isSheDeferredStructuralPrepare(
  contract: ExecutionContract,
): boolean {
  return contract.inputs?.sheDeferredStructuralAuthority === true;
}

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

const TERMINAL_ATTEMPT_STATUSES = new Set<string>([
  "succeeded",
  "failed",
  "timeout",
  "cancelled",
]);

/**
 * D-MORRIS-PCONT-01 / CR-PCONT-06 — confirmed/validated EC with a terminal
 * Attempt is in post-execution / Evidence phase, not pre-execution current.
 *
 * UNKNOWN ≠ NO TERMINAL ATTEMPT: missing Attempt services or list failure is
 * fail-closed (integrity failure), never treated as "no terminal Attempt".
 */
async function readTerminalAttemptPresence(
  oa: RuntimeOaStack,
  executionContractId: string,
): Promise<
  | { ok: true; hasTerminal: boolean }
  | W2Failure
> {
  const attempts = oa.executionAttemptServices;
  if (!attempts) {
    return fail(
      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
      "Services Attempt indisponibles — continuité pré-exécution refusée (UNKNOWN ≠ absent).",
    );
  }
  const listed = await attempts.listExecutionAttempts.execute({
    executionContractId,
  });
  if (!listed.ok) {
    return fail(
      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
      "Lecture des Attempts impossible — continuité pré-exécution refusée (UNKNOWN ≠ absent).",
    );
  }
  return {
    ok: true,
    hasTerminal: listed.attempts.some((a) =>
      TERMINAL_ATTEMPT_STATUSES.has(a.status),
    ),
  };
}

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

/**
 * SHE STRUCTURAL/UNKNOWN deferred PREPARE — READ/INSPECT continuity only (GAP-01).
 * Does NOT unlock Confirm/Authorize/Execute. Currentness: LPS/doctrine/cycle/repo.
 */
async function verifySheDeferredPrepareReadLineage(
  oa: RuntimeOaStack,
  projectId: string,
  contract: ExecutionContract,
  stamped: string,
): Promise<{ ok: true; decisionRef: null } | W2Failure> {
  if (stamped !== "structural" && stamped !== "unknown") {
    return fail(
      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
      "Provenance SHE différée incohérente avec la matérialité stampée — continuation refusée.",
    );
  }
  const contractInputs = (contract.inputs ?? {}) as Record<string, unknown>;
  const factsRaw =
    contractInputs.materialityFacts &&
    typeof contractInputs.materialityFacts === "object"
      ? (contractInputs.materialityFacts as Record<string, unknown>)
      : null;
  const stampedCurrentness = parseStampedProductCurrentness(factsRaw);
  if (stampedCurrentness == null) {
    return fail(
      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
      "Faits de matérialité / currentness absents sur le contrat SHE — continuation refusée.",
    );
  }
  const analysis = analysisStubFromMaterialityFacts(factsRaw, contractInputs);
  const current = await resolveAuthoritativeProductMateriality({
    oa,
    projectId,
    analysis,
    cycleInstanceId: contract.cycleInstanceId ?? null,
  });
  if (!current.liveReadOk || !current.facts.productCurrentness) {
    return fail(
      "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
      "Contexte Product courant indisponible — continuité SHE refusée (fail-closed).",
    );
  }
  const c = current.facts.productCurrentness;
  if (
    stampedCurrentness.lpsVersion !== c.lpsVersion ||
    stampedCurrentness.doctrineDigest !== c.doctrineDigest ||
    stampedCurrentness.activeCycleInstanceId !== c.activeCycleInstanceId ||
    stampedCurrentness.projectId !== c.projectId
  ) {
    return fail(
      "MATERIALITY_CURRENTNESS_STALE",
      "LPS / doctrine / cycle actifs ont changé depuis PREPARE — réinspection requise.",
    );
  }
  const stampedIdentity = stampedCurrentness.repositoryIdentity?.trim() || null;
  const currentIdentity = c.repositoryIdentity?.trim() || null;
  const stampedRoot = stampedCurrentness.pathRoot?.trim() || null;
  const currentRoot = c.pathRoot?.trim() || null;
  if (stampedIdentity !== null || stampedRoot !== null) {
    if (stampedIdentity !== null && currentIdentity === null) {
      return fail(
        "REPOSITORY_BINDING_UNAVAILABLE",
        "Repository binding Product courant indisponible — continuité refusée.",
      );
    }
    if (stampedIdentity !== currentIdentity) {
      return fail(
        "REPOSITORY_BINDING_STALE",
        "Repository identity Product a changé depuis PREPARE — continuité refusée.",
      );
    }
    if (stampedRoot !== currentRoot) {
      return fail(
        "REPOSITORY_BINDING_STALE",
        "pathRoot Product a changé depuis PREPARE — continuité refusée.",
      );
    }
  }
  return { ok: true, decisionRef: null };
}

/**
 * HD-bound lineage OR admissible empty-refs:
 *   - G-D4 NON_STRUCTURAL + CURRENT (Confirm-admissible), OR
 *   - SHE deferred STRUCTURAL/UNKNOWN PREPARE (READ/INSPECT only — GAP-01).
 * Never invents a HumanDecision. READ-ONLY: no HD / Confirm / Auth / Attempt writes.
 */
async function verifyDecisionLineage(
  oa: RuntimeOaStack,
  projectId: string,
  contract: ExecutionContract,
): Promise<
  | { ok: true; decisionRef: string | null }
  | W2Failure
> {
  const refs = contract.decisionRefs ?? [];

  // Empty refs — G-D4 NON_STRUCTURAL OR SHE deferred STRUCTURAL/UNKNOWN (read-only).
  if (refs.length === 0) {
    const stamped = materialityFromContractConstraints(contract.constraints);
    if (stamped == null) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Contrat d'exécution sans décision rattachée ni justification G-D4 — continuation refusée.",
      );
    }

    // GAP-01 — Product SHE PREPARE provenance (server input), not client stamp alone.
    if (isSheDeferredStructuralPrepare(contract)) {
      return verifySheDeferredPrepareReadLineage(
        oa,
        projectId,
        contract,
        stamped,
      );
    }

    const contractInputs = (contract.inputs ?? {}) as Record<string, unknown>;
    const factsRaw =
      contractInputs.materialityFacts &&
      typeof contractInputs.materialityFacts === "object"
        ? (contractInputs.materialityFacts as Record<string, unknown>)
        : null;
    const stampedCurrentness = parseStampedProductCurrentness(factsRaw);

    // Stamp alone is never sufficient — prepare-time currentness witness required.
    if (stampedCurrentness == null) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Faits de matérialité / currentness absents sur le contrat — continuation sans décision refusée.",
      );
    }

    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
      oa,
      projectId,
      analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
      cycleInstanceId: contract.cycleInstanceId ?? null,
      stampedMateriality: stamped,
      stampedCurrentness,
    });
    if (!revalidated.ok) {
      return fail(
        revalidated.code === "MATERIALITY_CURRENTNESS_STALE" ||
          revalidated.code === "MATERIALITY_CURRENT_MISMATCH" ||
          revalidated.code === "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE" ||
          revalidated.code === "REPOSITORY_BINDING_STALE" ||
          revalidated.code === "REPOSITORY_BINDING_UNAVAILABLE" ||
          revalidated.code.startsWith("SCOPE_") ||
          revalidated.code === "MATERIALITY_STRUCTURAL" ||
          revalidated.code === "MATERIALITY_UNKNOWN"
          ? revalidated.code
          : "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        revalidated.message,
      );
    }

    const recomputed = revalidated.current.assessment;
    const admissible = assertDecisionRefsAdmissibleForConfirm({
      decisionRefs: refs,
      stampedMateriality: stamped,
      recomputed,
    });
    if (!admissible.ok) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Contrat sans décision humaine non admissible pour la continuité G-D4 — continuation refusée.",
      );
    }

    return { ok: true, decisionRef: null };
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
    // Post-execution Evidence phase: terminal Attempt ⇒ not pre-execution current.
    // Attempt reader UNKNOWN ⇒ fail-closed (never kind=active by default).
    const terminal = await readTerminalAttemptPresence(
      oa,
      contract.executionContractId,
    );
    if (!terminal.ok) return terminal;
    if (terminal.hasTerminal) continue;
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
    attestedSemanticFingerprint: inspection.attestedSemanticFingerprint,
    statusLabel: inspection.statusLabel,
    inspectionSufficient: inspection.inspectionSufficient,
    attestationRef: inspection.attestationRef,
    attestedVersion: inspection.attestedVersion,
    staleAttestationRef: inspection.staleAttestationRef,
    reinspectionRequired: inspection.reinspectionRequired,
    reason: inspection.reason,
    grantsAuthority: false,
  };

  const requiredFacts = requiredInspectedFactsForContract(candidate);
  const requiredInspectedFacts = Array.isArray(requiredFacts)
    ? requiredFacts
    : null;

  return {
    ok: true,
    kind: "active",
    decisionRef: lineage.decisionRef,
    contract: projected.contract,
    inspection: inspectionDto,
    requiredInspectedFacts,
  };
}
