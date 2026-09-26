/**
 * CORR-01 — reseal an incomplete recovery docs_write successor via immutable
 * ExecutionContract supersession (never mutate confirmed EC inputs in place).
 */
import {
  LOCAL_PILOTE_ACTOR,
} from "@/lib/oa/decision";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import { projectExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  canonicalM3PrepareContractId,
  safeDecisionSegment,
} from "@/features/project-assistant/f3/resolveM3ExecutionContract";
import type { RecoveryExecutionBinding } from "./resolveRecoveryExecutionBinding";
import type { AmendedExecutionContractDto } from "./types";

export const RECOVERY_WRITE_MODE_RESEAL_SUPERSESSION_REASON =
  "w2_recovery_docs_write_mode_reseal — incomplete successor lacked sealed artifactWriteMode; supersede with current managed-repo CREATE|UPDATE" as const;

export function canonicalRecoveryWriteModeResealSuccessorId(
  decisionId: string,
): string {
  return `xct:m3-rwm-reseal:${safeDecisionSegment(decisionId)}`;
}

export function canonicalRecoveryWriteModeResealIdempotencyKey(
  decisionId: string,
): string {
  return `idem:m3-rwm-reseal:${decisionId}`;
}

const PRE_EXEC_SUPERSEDABLE = new Set([
  "draft",
  "proposed",
  "validated",
  "confirmation_required",
  "confirmed",
]);

const TA5_STATUSES = new Set(["executing", "completed", "failed"]);

export function isSealedArtifactWriteMode(
  mode: unknown,
): mode is "CREATE" | "UPDATE" {
  return mode === "CREATE" || mode === "UPDATE";
}

type AttemptSafetyFields = {
  readonly status?: unknown;
  readonly stopReason?: unknown;
  readonly startedAt?: unknown;
  readonly launchedAt?: unknown;
  readonly irreversibleEffectsPossible?: unknown;
  readonly processDiagnostic?: { readonly realProcessInvoked?: unknown };
};

/**
 * CORR-01 safety hardening — auto-repair via T-A4 is allowed ONLY when the
 * complete Attempt set for the EC proves a strict pre-start UNRESOLVED failure
 * with no launch, no start, no irreversible-effect flag, and no REAL process.
 *
 * UNKNOWN ≠ SAFE. One "safe" Attempt never overrides a contradictory Attempt.
 */
function isStrictPreStartUnresolvedFailure(
  attempt: AttemptSafetyFields,
): boolean {
  if (attempt.status !== "failed") return false;
  const stop = String(attempt.stopReason ?? "");
  if (!stop.includes("ARTIFACT_WRITE_MODE_UNRESOLVED")) return false;
  if (attempt.startedAt != null && String(attempt.startedAt).trim() !== "") {
    return false;
  }
  if (attempt.launchedAt != null && String(attempt.launchedAt).trim() !== "") {
    return false;
  }
  if (attempt.irreversibleEffectsPossible === true) return false;
  if (attempt.processDiagnostic?.realProcessInvoked === true) return false;
  return true;
}

function hasContradictoryLaunchOrEffectEvidence(
  attempt: AttemptSafetyFields,
): boolean {
  if (attempt.startedAt != null && String(attempt.startedAt).trim() !== "") {
    return true;
  }
  if (attempt.launchedAt != null && String(attempt.launchedAt).trim() !== "") {
    return true;
  }
  if (attempt.irreversibleEffectsPossible === true) return true;
  if (attempt.processDiagnostic?.realProcessInvoked === true) return true;
  return false;
}

export async function hasDeterministicPreStartWriteModeFailure(input: {
  readonly oa: RuntimeOaStack;
  readonly executionContractId: string;
}): Promise<boolean> {
  if (!input.oa.executionAttemptServices) return false;
  const listed =
    await input.oa.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId: input.executionContractId,
    });
  if (!listed.ok || listed.attempts.length === 0) return false;

  const attempts = listed.attempts as readonly AttemptSafetyFields[];
  const hasSafeUnresolved = attempts.some(isStrictPreStartUnresolvedFailure);
  if (!hasSafeUnresolved) return false;

  // Complete history: any contradictory launch/effect evidence fails closed.
  if (attempts.some(hasContradictoryLaunchOrEffectEvidence)) return false;

  return true;
}

export type CurrentRecoverySuccessorClass =
  | { readonly kind: "none" }
  | { readonly kind: "sealed_reuse"; readonly contract: ExecutionContract }
  | {
      readonly kind: "incomplete_repairable";
      readonly contract: ExecutionContract;
    }
  | {
      readonly kind: "ta5_refused";
      readonly code: "TA5_STATUS_REFUSED";
      readonly message: string;
      readonly status: string;
    }
  | {
      readonly kind: "refused";
      readonly code: string;
      readonly message: string;
    };

export async function classifyCurrentRecoveryDocsWriteSuccessor(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
  readonly continuityDecisionRef: string | null;
  readonly continuityContract: {
    readonly executionContractId: string;
    readonly action: string;
    readonly target: string;
    readonly status: string;
  } | null;
}): Promise<CurrentRecoverySuccessorClass> {
  // Path 1 — continuity still sees a pre-execution current contract.
  if (input.continuityContract) {
    if (input.continuityDecisionRef !== input.decisionId) {
      return {
        kind: "refused",
        code: "RECOVERY_SUCCESSOR_DECISION_MISMATCH",
        message:
          "Le contrat courant appartient à une autre HumanDecision — repair write-mode refusé.",
      };
    }
    const summary = input.continuityContract;
    if (
      summary.action !== M4_BOUNDED_DOCS_WRITE_ACTION ||
      summary.target !== M4_BOUNDED_DOCS_WRITE_TARGET
    ) {
      // Fall through to tip-scan — recovery incomplete may be post-Attempt.
    } else if (TA5_STATUSES.has(summary.status)) {
      return {
        kind: "ta5_refused",
        code: "TA5_STATUS_REFUSED",
        status: summary.status,
        message: `Successor recovery en statut T-A5 (${summary.status}) — supersession T-A4 refusée; nouvelle HumanDecision recovery requise.`,
      };
    } else {
      const fromContinuity = await classifyDurableCandidate({
        oa: input.oa,
        projectId: input.projectId,
        decisionId: input.decisionId,
        executionContractId: summary.executionContractId,
        requirePreStartFailure: false,
      });
      if (fromContinuity.kind !== "none") return fromContinuity;
    }
  }

  // Path 2 — natural StudyFlow class: confirmed incomplete successor already has
  // a terminal failed Attempt, so continuity kind=none. Scan tip lineage.
  return findIncompleteRecoverySuccessorTip({
    oa: input.oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
  });
}

async function classifyDurableCandidate(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
  readonly executionContractId: string;
  readonly requirePreStartFailure: boolean;
}): Promise<CurrentRecoverySuccessorClass> {
  if (!input.oa.executionContractServices) {
    return {
      kind: "refused",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services EC indisponibles.",
    };
  }
  const durable =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!durable.ok) {
    return {
      kind: "refused",
      code: durable.error.detailCode,
      message: durable.error.message,
    };
  }
  const contract = durable.contract;
  if (contract.projectId !== input.projectId) {
    return {
      kind: "refused",
      code: "RECOVERY_SUCCESSOR_PROJECT_MISMATCH",
      message: "Successor recovery hors projet courant — repair refusé.",
    };
  }
  if (
    contract.action !== M4_BOUNDED_DOCS_WRITE_ACTION ||
    contract.target !== M4_BOUNDED_DOCS_WRITE_TARGET
  ) {
    return { kind: "none" };
  }
  if (TA5_STATUSES.has(contract.status)) {
    return {
      kind: "ta5_refused",
      code: "TA5_STATUS_REFUSED",
      status: contract.status,
      message: `Successor recovery en statut T-A5 (${contract.status}) — supersession T-A4 refusée; nouvelle HumanDecision recovery requise.`,
    };
  }
  if (!PRE_EXEC_SUPERSEDABLE.has(contract.status)) {
    return {
      kind: "refused",
      code: "RECOVERY_SUCCESSOR_NOT_SUPERSEDABLE",
      message: `Successor recovery statut ${contract.status} non supersedable pour reseal.`,
    };
  }
  const refs = contract.decisionRefs ?? [];
  if (!refs.includes(input.decisionId)) {
    return {
      kind: "refused",
      code: "RECOVERY_SUCCESSOR_DECISION_MISMATCH",
      message:
        "Successor recovery non rattaché à la HumanDecision courante — repair refusé.",
    };
  }
  const tip =
    await input.oa.executionContractServices.contracts.listSuperseding(
      contract.executionContractId,
    );
  if (tip.length > 0) {
    return { kind: "none" };
  }
  if (isSealedArtifactWriteMode(contract.inputs?.artifactWriteMode)) {
    return { kind: "sealed_reuse", contract };
  }
  const preStart = await hasDeterministicPreStartWriteModeFailure({
    oa: input.oa,
    executionContractId: contract.executionContractId,
  });
  if (!preStart) {
    if (input.requirePreStartFailure) {
      return {
        kind: "refused",
        code: "RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS",
        message:
          "Successor sans artifactWriteMode mais Attempt pre-start UNRESOLVED non prouvé — repair fail-closed.",
      };
    }
    // Continuity path may see incomplete before Attempt exists (tests) —
    // still refuse ambiguous repair without proof.
    return {
      kind: "refused",
      code: "RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS",
      message:
        "Successor sans artifactWriteMode mais Attempt pre-start UNRESOLVED non prouvé — repair fail-closed.",
    };
  }
  return { kind: "incomplete_repairable", contract };
}

async function findIncompleteRecoverySuccessorTip(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
}): Promise<CurrentRecoverySuccessorClass> {
  if (!input.oa.executionContractServices) {
    return {
      kind: "refused",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services EC indisponibles.",
    };
  }
  const listed =
    await input.oa.executionContractServices.listExecutionContractHistory.execute(
      {
        projectId: input.projectId,
      },
    );
  if (!listed.ok) {
    return {
      kind: "refused",
      code: listed.error.detailCode,
      message: listed.error.message,
    };
  }

  const candidates: ExecutionContract[] = [];
  for (const contract of listed.contracts) {
    if (contract.projectId !== input.projectId) continue;
    if (
      contract.action !== M4_BOUNDED_DOCS_WRITE_ACTION ||
      contract.target !== M4_BOUNDED_DOCS_WRITE_TARGET
    ) {
      continue;
    }
    if (!(contract.decisionRefs ?? []).includes(input.decisionId)) continue;
    const superseding =
      await input.oa.executionContractServices.contracts.listSuperseding(
        contract.executionContractId,
      );
    if (superseding.length > 0) continue;

    // CLASS D — tip is T-A5: never T-A4 supersede for write-mode reseal.
    if (TA5_STATUSES.has(contract.status)) {
      return {
        kind: "ta5_refused",
        code: "TA5_STATUS_REFUSED",
        status: contract.status,
        message: `Successor recovery en statut T-A5 (${contract.status}) — supersession T-A4 refusée; nouvelle HumanDecision recovery requise.`,
      };
    }

    if (!PRE_EXEC_SUPERSEDABLE.has(contract.status)) continue;
    if (isSealedArtifactWriteMode(contract.inputs?.artifactWriteMode)) continue;
    const preStart = await hasDeterministicPreStartWriteModeFailure({
      oa: input.oa,
      executionContractId: contract.executionContractId,
    });
    if (!preStart) {
      // CLASS E — incomplete tip without deterministic pre-start proof.
      return {
        kind: "refused",
        code: "RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS",
        message:
          "Successor sans artifactWriteMode mais Attempt pre-start UNRESOLVED non prouvé — repair fail-closed.",
      };
    }
    candidates.push(contract);
  }

  if (candidates.length === 0) return { kind: "none" };
  if (candidates.length > 1) {
    return {
      kind: "refused",
      code: "RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS",
      message:
        "Plusieurs successors incomplets repairables — fail-closed.",
    };
  }
  return { kind: "incomplete_repairable", contract: candidates[0]! };
}

function toAmendedDto(contract: ExecutionContract): AmendedExecutionContractDto {
  const disclosure =
    projectExecutionContractInspectionDisclosure(contract).disclosure;
  return {
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
    supersedesExecutionContractId:
      contract.supersedesExecutionContractId ?? null,
    supersessionReason: contract.supersessionReason ?? null,
    inspectionDisclosure: disclosure,
  };
}

async function loadValidatedRepairSuccessor(input: {
  readonly oa: RuntimeOaStack;
  readonly repairId: string;
  readonly incompleteId: string;
  readonly expectedMode: "CREATE" | "UPDATE";
  readonly authorityEvidenceId: string;
}): Promise<
  | { readonly ok: true; readonly successor: ExecutionContract }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const loaded =
    await input.oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: input.repairId,
    });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: loaded.error.message,
    };
  }
  let successor = loaded.contract;
  if (successor.supersedesExecutionContractId !== input.incompleteId) {
    return {
      ok: false,
      code: "RECOVERY_RESEAL_LINEAGE_MISMATCH",
      message:
        "Successeur reseal existant ne supersède pas le successor incomplet attendu.",
    };
  }
  if (successor.inputs?.artifactWriteMode !== input.expectedMode) {
    return {
      ok: false,
      code: "RECOVERY_RESEAL_MODE_DRIFT",
      message:
        "Successeur reseal mode ≠ current repository seal — fail-closed.",
    };
  }
  if (successor.status === "draft" || successor.status === "proposed") {
    const validated =
      await input.oa.executionContractServices!.validateExecutionContract.execute(
        {
          executionContractId: successor.executionContractId,
          actor: LOCAL_PILOTE_ACTOR,
          authorityEvidenceId: input.authorityEvidenceId,
        },
      );
    if (!validated.ok) {
      return {
        ok: false,
        code: validated.error.detailCode,
        message: validated.error.message,
      };
    }
    successor = validated.contract;
  }
  return { ok: true, successor };
}

export type RepairIncompleteRecoverySuccessorResult =
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
      readonly repairedFromExecutionContractId: string;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

/**
 * Seal already resolved → supersede incomplete successor → validate to
 * confirmation_required. Idempotent on the deterministic repair id.
 */
export async function repairIncompleteRecoveryDocsWriteSuccessor(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
  readonly incomplete: ExecutionContract;
  readonly binding: RecoveryExecutionBinding;
  readonly sealedMode: "CREATE" | "UPDATE";
  readonly sealedInputs: Record<string, unknown>;
  readonly evidenceRequirements: readonly string[];
  readonly authorityEvidenceId: string;
  readonly cancelledWrongGenericContractId: string | null;
}): Promise<RepairIncompleteRecoverySuccessorResult> {
  const { oa, incomplete } = input;
  if (!oa.executionContractServices) {
    return {
      ok: false,
      code: "OA_STACK_UNAVAILABLE",
      message: "Services EC indisponibles.",
    };
  }

  const repairId = canonicalRecoveryWriteModeResealSuccessorId(input.decisionId);
  const idempotencyKey = canonicalRecoveryWriteModeResealIdempotencyKey(
    input.decisionId,
  );
  const prepareContractId = canonicalM3PrepareContractId(input.decisionId);

  const existing = await oa.executionContractServices.getExecutionContract.execute({
    executionContractId: repairId,
  });
  if (existing.ok) {
    const loaded = await loadValidatedRepairSuccessor({
      oa,
      repairId,
      incompleteId: incomplete.executionContractId,
      expectedMode: input.sealedMode,
      authorityEvidenceId: input.authorityEvidenceId,
    });
    if (!loaded.ok) return loaded;
    return {
      ok: true,
      decisionId: input.decisionId,
      binding: input.binding,
      prepareContractId,
      successor: toAmendedDto(loaded.successor),
      cancelledWrongGenericContractId: input.cancelledWrongGenericContractId,
      reusedFromIdempotency: true,
      executionPerformed: false,
      attemptCreated: false,
      confirmationRequired: true,
      repairedFromExecutionContractId: incomplete.executionContractId,
    };
  }

  const successorConstraints = Array.from(
    new Set(
      [...incomplete.constraints].filter(
        (c) =>
          c !== "PREPARE_ONLY" &&
          c !== "NO_CURSOR_REAL" &&
          c !== "NO_ATTEMPT" &&
          c !== "NO_GATE_D" &&
          c !== "NO_ATTEMPT_AT_PREPARE",
      ),
    ),
  );

  const superseded =
    await oa.executionContractServices.supersedeExecutionContract.execute({
      newExecutionContractId: repairId,
      supersedesExecutionContractId: incomplete.executionContractId,
      supersessionReason: RECOVERY_WRITE_MODE_RESEAL_SUPERSESSION_REASON,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: input.authorityEvidenceId,
      expectedVersion: incomplete.version,
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      scope: incomplete.scope,
      decisionRefs: [input.decisionId],
      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
      requiredAuthority: "N2",
      constraints: successorConstraints,
      stopConditions: [...incomplete.stopConditions],
      evidenceRequirements: [...input.evidenceRequirements],
      reversibility: incomplete.reversibility,
      expectedOutputs:
        incomplete.expectedOutputs && incomplete.expectedOutputs.length > 0
          ? [...incomplete.expectedOutputs]
          : input.binding.expectedOutputs.length > 0
            ? [...input.binding.expectedOutputs]
            : undefined,
      inputs: {
        ...(incomplete.inputs ?? {}),
        ...input.sealedInputs,
        artifactWriteMode: input.sealedMode,
      },
      idempotencyKey,
      correlationId: `cor:m3-rwm-reseal:${input.decisionId}`,
      status: "draft",
    });

  if (!superseded.ok) {
    if (superseded.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
      const raced = await loadValidatedRepairSuccessor({
        oa,
        repairId,
        incompleteId: incomplete.executionContractId,
        expectedMode: input.sealedMode,
        authorityEvidenceId: input.authorityEvidenceId,
      });
      if (!raced.ok) return raced;
      return {
        ok: true,
        decisionId: input.decisionId,
        binding: input.binding,
        prepareContractId,
        successor: toAmendedDto(raced.successor),
        cancelledWrongGenericContractId: input.cancelledWrongGenericContractId,
        reusedFromIdempotency: true,
        executionPerformed: false,
        attemptCreated: false,
        confirmationRequired: true,
        repairedFromExecutionContractId: incomplete.executionContractId,
      };
    }
    return {
      ok: false,
      code: superseded.error.detailCode,
      message: superseded.error.message,
    };
  }

  const validated =
    await oa.executionContractServices.validateExecutionContract.execute({
      executionContractId: repairId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: input.authorityEvidenceId,
    });
  if (!validated.ok) {
    return {
      ok: false,
      code: validated.error.detailCode,
      message: validated.error.message,
    };
  }

  return {
    ok: true,
    decisionId: input.decisionId,
    binding: input.binding,
    prepareContractId,
    successor: toAmendedDto(validated.contract),
    cancelledWrongGenericContractId: input.cancelledWrongGenericContractId,
    reusedFromIdempotency: false,
    executionPerformed: false,
    attemptCreated: false,
    confirmationRequired: true,
    repairedFromExecutionContractId: incomplete.executionContractId,
  };
}
