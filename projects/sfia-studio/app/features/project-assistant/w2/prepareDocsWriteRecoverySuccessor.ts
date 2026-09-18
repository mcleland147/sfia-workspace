/**
 * Checkpoint F / R8 — prepare + resolve a bounded docs_write successor EC from
 * a coherent RecoveryExecutionBinding after recovery trajectory HD.
 *
 * Does NOT mutate HumanDecision. Does NOT Execute. Does NOT create Attempts.
 * Clears wrong pre-exec generic EC via Cancel (existing pre-exec lifecycle).
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { F2ContextSnapshot } from "@/features/project-assistant/f2/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";
import {
  resolveBoundedReadOnlyBaseHeadSha,
  validateBaseHeadSha,
} from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
import {
  boundedDocsWriteM3ResolutionProfile,
  BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
  BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
  resolveDocsWriteEvidenceRequirementsForBoundedProfile,
} from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import {
  canonicalM3PrepareContractId,
  resolveM3ExecutionContract,
} from "@/features/project-assistant/f3/resolveM3ExecutionContract";
import { readCurrentGovernedExecutionContinuity } from "./readCurrentGovernedExecutionContinuity";
import {
  resolveRecoveryExecutionBinding,
  type RecoveryExecutionBinding,
} from "./resolveRecoveryExecutionBinding";
import type { AmendedExecutionContractDto } from "./types";

export const RECOVERY_WRONG_GENERIC_CANCEL_REASON =
  "w2_recovery_docs_write_reprepare — clear unconsumed generic fixture EC before docs_write successor" as const;

export type PrepareDocsWriteRecoverySuccessorResult =
  | {
      readonly ok: true;
      readonly decisionId: string;
      readonly binding: RecoveryExecutionBinding;
      readonly prepareContractId: string;
      readonly successor: AmendedExecutionContractDto;
      readonly cancelledWrongGenericContractId: string | null;
      readonly reusedFromIdempotency: boolean;
      readonly executionPerformed: false;
      readonly attemptCreated: false;
      readonly confirmationRequired: true;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

function toSuccessorDto(successor: {
  executionContractId: string;
  version: number;
  status: string;
  action: string;
  target: string;
  scope: string;
  requiredAuthority: string;
  constraints: readonly string[];
  stopConditions: readonly string[];
  requiredCapabilities: readonly string[];
  reversibility: string;
  semanticFingerprint: string;
  supersedesExecutionContractId: string;
  supersessionReason: string;
  inspectionDisclosure: AmendedExecutionContractDto["inspectionDisclosure"];
}): AmendedExecutionContractDto {
  return {
    executionContractId: successor.executionContractId,
    version: successor.version,
    status: successor.status,
    action: successor.action,
    target: successor.target,
    scope: successor.scope,
    requiredAuthority: successor.requiredAuthority,
    constraints: [...successor.constraints],
    stopConditions: [...successor.stopConditions],
    requiredCapabilities: [...successor.requiredCapabilities],
    reversibility: successor.reversibility,
    semanticFingerprint: successor.semanticFingerprint,
    supersedesExecutionContractId: successor.supersedesExecutionContractId,
    supersessionReason: successor.supersessionReason,
    inspectionDisclosure: successor.inspectionDisclosure,
  };
}

async function cancelWrongGenericCurrentIfNeeded(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly recoveryDecisionId: string;
  readonly forceLocalAuthority: boolean;
}): Promise<
  | { readonly ok: true; readonly cancelledId: string | null }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const continuity = await readCurrentGovernedExecutionContinuity({
    oa: input.oa,
    projectId: input.projectId,
  });
  if (!continuity.ok) {
    return {
      ok: false,
      code: continuity.code,
      message: continuity.message,
    };
  }
  if (continuity.kind === "none") {
    return { ok: true, cancelledId: null };
  }

  const current = continuity.contract;
  const isDocsWrite =
    current.action === M4_BOUNDED_DOCS_WRITE_ACTION &&
    current.target === M4_BOUNDED_DOCS_WRITE_TARGET;
  if (isDocsWrite) {
    return { ok: true, cancelledId: null };
  }

  // Only clear unconsumed wrong generic when it belongs to this recovery HD.
  if (continuity.decisionRef !== input.recoveryDecisionId) {
    return {
      ok: false,
      code: "EXECUTION_CONTINUITY_AMBIGUOUS",
      message:
        "Un contrat pré-exécution courant d'une autre décision bloque le prepare recovery.",
    };
  }

  // Authority must match the wrong generic EC scope (not docs_write).
  const cancelAuthority = registerLocalPiloteAuthority({
    authorityResolver: input.oa.authorityResolver,
    scope: current.scope,
    issuedAt: input.oa.clock.nowIso(),
    evidenceId: `evd:m3-rec-cancel:${current.executionContractId}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!cancelAuthority.ok) {
    return {
      ok: false,
      code: cancelAuthority.code,
      message: cancelAuthority.message,
    };
  }

  const cancelled =
    await input.oa.executionContractServices!.cancelExecutionContract.execute({
      executionContractId: current.executionContractId,
      reason: RECOVERY_WRONG_GENERIC_CANCEL_REASON,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: cancelAuthority.evidenceId,
      expectedVersion: current.version,
    });
  if (!cancelled.ok) {
    return {
      ok: false,
      code: cancelled.error.detailCode,
      message: cancelled.error.message,
    };
  }
  return { ok: true, cancelledId: current.executionContractId };
}

/**
 * Explicit Pilot PREPARE after recovery trajectory HD (governed retry).
 */
export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
  readonly currentContext: F2ContextSnapshot;
  readonly forceLocalAuthority?: boolean;
  /** Server/test only — pin base HEAD; never from client. */
  readonly boundedDocsWriteBaseHeadSha?: string;
}): Promise<PrepareDocsWriteRecoverySuccessorResult> {
  const { oa } = input;
  if (!oa.executionContractServices || !oa.decisionServices) {
    return {
      ok: false,
      code: "OA_STACK_UNAVAILABLE",
      message: "Services EC / Decision indisponibles.",
    };
  }

  const bound = await resolveRecoveryExecutionBinding({
    oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
  });
  if (!bound.ok) return bound;
  if (!bound.binding) {
    return {
      ok: false,
      code: "RECOVERY_EXECUTION_BINDING_REQUIRED",
      message:
        "Aucun RecoveryExecutionBinding docs_write cohérent — prepare recovery refusé.",
    };
  }
  const binding = bound.binding;

  const issuedAt = oa.clock.nowIso();
  const authority = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: binding.scope || "studio.gcec.docs_write",
    issuedAt,
    evidenceId: `evd:m3-rec-prep:${input.decisionId}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const prepareId = canonicalM3PrepareContractId(input.decisionId);

  // Idempotent reuse: current docs_write already linked to this recovery HD.
  const continuityBefore = await readCurrentGovernedExecutionContinuity({
    oa,
    projectId: input.projectId,
  });
  if (
    continuityBefore.ok &&
    continuityBefore.kind === "active" &&
    continuityBefore.decisionRef === input.decisionId &&
    continuityBefore.contract.action === M4_BOUNDED_DOCS_WRITE_ACTION &&
    continuityBefore.contract.target === M4_BOUNDED_DOCS_WRITE_TARGET
  ) {
    const c = continuityBefore.contract;
    return {
      ok: true,
      decisionId: input.decisionId,
      binding,
      prepareContractId: prepareId,
      successor: {
        executionContractId: c.executionContractId,
        version: c.version,
        status: c.status,
        action: c.action,
        target: c.target,
        scope: c.scope,
        requiredAuthority: c.requiredAuthority,
        constraints: [...c.constraints],
        stopConditions: [...c.stopConditions],
        requiredCapabilities: [...c.requiredCapabilities],
        reversibility: c.reversibility,
        semanticFingerprint: c.semanticFingerprint,
        supersedesExecutionContractId: null,
        supersessionReason: null,
        inspectionDisclosure: c.inspectionDisclosure,
      },
      cancelledWrongGenericContractId: null,
      reusedFromIdempotency: true,
      executionPerformed: false,
      attemptCreated: false,
      confirmationRequired: true,
    };
  }

  const cleared = await cancelWrongGenericCurrentIfNeeded({
    oa,
    projectId: input.projectId,
    recoveryDecisionId: input.decisionId,
    forceLocalAuthority: input.forceLocalAuthority === true,
  });
  if (!cleared.ok) return cleared;

  // If prepare already exists (after cancel of wrong generic), resolve path may
  // still be pending — try get + resolve rather than rebuild.
  const existingPrepare =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prepareId,
    });

  const evidenceFromSource =
    resolveDocsWriteEvidenceRequirementsForBoundedProfile({
      fromPrepare:
        binding.evidenceRequirements.length > 0
          ? binding.evidenceRequirements
          : [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
      constraints: binding.constraints,
    });

  const profile = boundedDocsWriteM3ResolutionProfile();
  const inputs = {
    ...binding.inputs,
    targetPath: binding.targetPath,
  };

  // Unresolved M3 PREPARE shape (PREPARE_ONLY) so resolveM3 can supersede —
  // same pattern as prepareM3FromDecision docs_write path.
  const prepareConstraints = Array.from(
    new Set([
      "PREPARE_ONLY",
      "NO_CURSOR_REAL",
      "NO_ATTEMPT",
      "NO_GATE_D",
      ...binding.constraints.filter(
        (c) =>
          !c.startsWith("FIXTURE_") &&
          c !== "NO_REAL" &&
          c !== "SCOPE_OUT:REAL" &&
          c !== "SCOPE_OUT:CURSOR_REAL" &&
          c !== "NO_ATTEMPT_AT_PREPARE",
      ),
    ]),
  );
  const prepareStops = Array.from(
    new Set([
      "AUTHORITY_DENIED",
      "CONTEXT_STALE",
      "DECISION_NOT_CURRENT",
      ...binding.stopConditions,
    ]),
  );

  let prepareContract = existingPrepare.ok ? existingPrepare.contract : null;

  if (
    prepareContract &&
    (prepareContract.status === "cancelled" ||
      prepareContract.status === "superseded" ||
      prepareContract.status === "failed" ||
      prepareContract.status === "completed" ||
      prepareContract.status === "executing")
  ) {
    // Terminal / superseded prepare — only reuse via continuity/idempotent path above.
    if (prepareContract.status === "superseded") {
      // Resolve will recover existing successor.
    } else {
      prepareContract = null;
    }
  }

  if (!prepareContract) {
    const built =
      await oa.executionContractServices.buildExecutionContract.execute({
        executionContractId: prepareId,
        projectId: input.projectId,
        cycleInstanceId:
          binding.cycleInstanceId ??
          input.currentContext.activeCycleInstanceId ??
          undefined,
        decisionRefs: [input.decisionId],
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: M4_BOUNDED_DOCS_WRITE_TARGET,
        scope: profile.scope ?? "studio.gcec.docs_write",
        inputs,
        expectedOutputs:
          binding.expectedOutputs.length > 0
            ? [...binding.expectedOutputs]
            : undefined,
        requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
        requiredAuthority: "MORRIS",
        constraints: prepareConstraints,
        stopConditions: prepareStops,
        evidenceRequirements: evidenceFromSource,
        reversibility: "reversible",
        // Canonical M3 PREPARE identity — required by resolveM3ExecutionContract.
        idempotencyKey: `idem:m3-prep:${input.decisionId}`,
        correlationId: `cor:m3-rec-prep:${input.decisionId}`,
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      });

    if (!built.ok) {
      return {
        ok: false,
        code: built.error.detailCode,
        message: built.error.message,
      };
    }

    const validated =
      await oa.executionContractServices.validateExecutionContract.execute({
        executionContractId: built.contract.executionContractId,
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      });
    if (!validated.ok) {
      return {
        ok: false,
        code: validated.error.detailCode,
        message: validated.error.message,
      };
    }
    prepareContract = validated.contract;
  }

  let sha: string | null = null;
  if (input.boundedDocsWriteBaseHeadSha !== undefined) {
    sha = validateBaseHeadSha(input.boundedDocsWriteBaseHeadSha);
  } else {
    const resolvedSha = await resolveBoundedReadOnlyBaseHeadSha({});
    if (!resolvedSha.ok) {
      return {
        ok: false,
        code: resolvedSha.code,
        message: resolvedSha.message,
      };
    }
    sha = resolvedSha.sha;
  }
  if (!sha) {
    return {
      ok: false,
      code: "BASE_HEAD_SHA_INVALID",
      message:
        "baseHeadSha server-side invalide — fail-closed avant Confirmation / Gate D.",
    };
  }

  const resolution = {
    ...profile,
    evidenceRequirements: evidenceFromSource,
    inputs: {
      ...(profile.inputs ?? {}),
      ...inputs,
      baseHeadSha: sha,
    },
  };

  const resolved = await resolveM3ExecutionContract({
    projectId: input.projectId,
    decisionId: input.decisionId,
    originalExecutionContractId: prepareContract.executionContractId,
    expectedOriginalVersion: prepareContract.version,
    resolution,
    supersessionReason: BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
    deps: {
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      executionContractServices: oa.executionContractServices,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: input.forceLocalAuthority === true,
    },
  });
  if (!resolved.ok) {
    return {
      ok: false,
      code: resolved.code,
      message: resolved.message,
    };
  }

  return {
    ok: true,
    decisionId: input.decisionId,
    binding,
    prepareContractId: prepareId,
    successor: toSuccessorDto(resolved.successor),
    cancelledWrongGenericContractId: cleared.cancelledId,
    reusedFromIdempotency: resolved.reusedFromIdempotency,
    executionPerformed: false,
    attemptCreated: false,
    confirmationRequired: true,
  };
}
