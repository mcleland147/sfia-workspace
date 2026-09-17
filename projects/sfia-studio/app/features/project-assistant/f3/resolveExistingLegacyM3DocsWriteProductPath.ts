/**
 * Legacy pre-#493 M3 PREPARE → canonical M4 docs_write successor rematerialization.
 *
 * Does NOT call prepareM3FromDecision (would fail on existing canonical id).
 * Routes the EXISTING durable original into resolveM3ExecutionContract.
 *
 * ZERO StartExecution / Attempt / external launch.
 */

import type { F2ContextSnapshot } from "../f2/types";
import type { ExecutionAttemptServices } from "@/lib/oa/execution-attempt";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  type GitCommandRunner,
} from "@/lib/oa/execution-attempt";
import {
  resolveBoundedReadOnlyBaseHeadSha,
  validateBaseHeadSha,
} from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
import { isLegacyDocsWritePrepareContractView } from "./legacyDocsWritePrepareContractView";
import {
  BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
  boundedDocsWriteM3ResolutionProfile,
} from "./boundedDocsWriteM3ResolutionProfile";
import { qualifyDocsWriteM3Intent } from "./qualifyDocsWriteM3Intent";
import {
  canonicalM3PrepareContractId,
  canonicalM3PrepareIdempotencyKey,
  resolveM3ExecutionContract,
  type ResolveM3Deps,
  type ResolveM3Success,
} from "./resolveM3ExecutionContract";
import type { PrepareM3Deps } from "./prepareM3FromDecision";
import {
  isProposalSubjectOptionRef,
  PROPOSAL_SUBJECT_PURSUE_REF,
} from "../w2/proposalSubjectOptions";

export type ResolveExistingLegacyM3DocsWriteDeps = PrepareM3Deps &
  ResolveM3Deps & {
    executionAttemptServices: Pick<
      ExecutionAttemptServices,
      "listExecutionAttempts"
    >;
    /**
     * Server/test only contract-bound workspace pin.
     * Never accepted from the client.
     */
    boundedDocsWriteBaseHeadSha?: string;
    boundedReadOnlyBaseHeadSha?: string;
    resolveBoundedReadOnlyHead?: () => Promise<string | null> | string | null;
    gitCommandRunner?: GitCommandRunner;
    gitStartDir?: string;
  };

export type F3M3LegacyResolvedPayload = {
  turnKind: "f3_m3_legacy_docs_write_resolved";
  mode: "M3_RESOLVED_BOUNDED_DOCS_WRITE";
  decisionId: string;
  projectId: string;
  original: ResolveM3Success["original"];
  successor: ResolveM3Success["successor"];
  reusedFromIdempotency: boolean;
  executionPerformed: false;
  attemptCreated: false;
  confirmationRequired: true;
  realExecution: false;
  disclosures: string[];
};

const LEGACY_PREPARE_MARKERS = [
  "PREPARE_ONLY",
  "NO_CURSOR_REAL",
  "NO_ATTEMPT",
  "NO_GATE_D",
] as const;

function fail(code: string, message: string) {
  return { ok: false as const, code, message };
}

export { isLegacyDocsWritePrepareContractView };

export async function resolveExistingLegacyM3DocsWriteProductPath(input: {
  projectId: string;
  decisionId: string;
  currentContext: F2ContextSnapshot;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  baseHeadSha?: unknown;
  workspace?: unknown;
  profile?: unknown;
  action?: unknown;
  target?: unknown;
  scope?: unknown;
  deps: ResolveExistingLegacyM3DocsWriteDeps;
}): Promise<
  | { ok: true; payload: F3M3LegacyResolvedPayload }
  | { ok: false; code: string; message: string }
> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.baseHeadSha;
  void input.workspace;
  void input.profile;
  void input.action;
  void input.target;
  void input.scope;

  const loaded = await input.deps.decisionServices.getHumanDecision.execute({
    decisionId: input.decisionId,
  });
  if (!loaded.ok) {
    return fail(loaded.error.detailCode, loaded.error.message);
  }

  const decision = loaded.decision;
  if (decision.projectId !== input.projectId) {
    return fail("PROJECT_MISMATCH", "Decision does not belong to this project.");
  }
  if (decision.status !== "accepted") {
    return fail(
      "DECISION_NOT_CURRENT",
      `Decision status ${decision.status} is not accepted for legacy rematerialization.`,
    );
  }
  if (!decision.decisionBasis) {
    return fail(
      "DECISION_BASIS_REQUIRED",
      "HumanDecision lacks DecisionBasis — cannot rematerialize legacy M3.",
    );
  }
  const basis = decision.decisionBasis;
  if (basis.projectId !== input.projectId) {
    return fail(
      "DECISION_BASIS_PROJECT_MISMATCH",
      "DecisionBasis projectId does not match.",
    );
  }

  if (
    basis.sourceType === "proposal" &&
    isProposalSubjectOptionRef(decision.selectedOptionId) &&
    decision.selectedOptionId !== PROPOSAL_SUBJECT_PURSUE_REF
  ) {
    return fail(
      "PREPARE_NOT_APPLICABLE",
      "Rematérialisation M3 réservée à la poursuite du sujet Proposal — amend/refuse n'ouvrent aucune exécution.",
    );
  }

  const ctx = basis.proposalContext;
  if (
    ctx.doctrineDigest !== undefined &&
    ctx.doctrineDigest !== input.currentContext.doctrineDigest
  ) {
    return fail(
      "CONTEXT_STALE",
      "DecisionBasis doctrine digest is stale — re-decide before rematerialization.",
    );
  }
  if (ctx.lpsVersion > input.currentContext.lpsVersion) {
    return fail(
      "CONTEXT_STALE",
      "DecisionBasis LPS version is ahead of current context — inconsistent state.",
    );
  }

  const canonicalId = canonicalM3PrepareContractId(input.decisionId);
  const originalResult =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: canonicalId,
    });
  if (!originalResult.ok) {
    return fail(originalResult.error.detailCode, originalResult.error.message);
  }
  const original = originalResult.contract;

  if (original.projectId !== input.projectId) {
    return fail(
      "CONTRACT_PROJECT_MISMATCH",
      "Original ExecutionContract does not belong to this project.",
    );
  }
  if (
    !original.decisionRefs ||
    original.decisionRefs.length === 0 ||
    !original.decisionRefs.includes(input.decisionId)
  ) {
    return fail(
      "DECISION_CONTRACT_MISMATCH",
      "Original contract is not linked to this HumanDecision.",
    );
  }
  if (original.executionContractId !== canonicalId) {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      "Loaded contract id is not the canonical M3 PREPARE contract for this decision.",
    );
  }
  if (original.idempotencyKey !== canonicalM3PrepareIdempotencyKey(input.decisionId)) {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      "Loaded contract idempotencyKey is not the canonical M3 PREPARE identity.",
    );
  }
  if (original.requiredAuthority !== "MORRIS") {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      "Canonical M3 PREPARE contract must require MORRIS authority.",
    );
  }

  if (original.action !== M4_BOUNDED_DOCS_WRITE_ACTION) {
    return fail(
      "LEGACY_DOCS_WRITE_ACTION_MISMATCH",
      "Legacy rematerialization requires action cursor.docs_write.apply.",
    );
  }
  if (original.target !== M4_BOUNDED_DOCS_WRITE_TARGET) {
    return fail(
      "LEGACY_DOCS_WRITE_TARGET_MISMATCH",
      "Legacy rematerialization requires target workspace.isolated.docs_write.",
    );
  }
  if (
    !(original.requiredCapabilities ?? []).includes(
      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
    )
  ) {
    return fail(
      "LEGACY_DOCS_WRITE_CAPABILITY_MISMATCH",
      "Legacy rematerialization requires cap:cursor.docs_write.",
    );
  }

  const constraints = original.constraints ?? [];
  const hasPrepareOnly = constraints.includes("PREPARE_ONLY");
  if (!hasPrepareOnly && original.status !== "superseded") {
    // Already-current non-prepare original is not this recovery path.
    // Superseded originals are handled by resolver idempotent reuse below.
    return fail(
      "LEGACY_PREPARE_MARKERS_ABSENT",
      "Original is not a legacy PREPARE_ONLY docs_write contract.",
    );
  }
  if (hasPrepareOnly) {
    // Prefer presence of the historical prepare cluster when still on original.
    const missingMarkers = LEGACY_PREPARE_MARKERS.filter(
      (m) => m !== "PREPARE_ONLY" && !constraints.includes(m),
    );
    // PREPARE_ONLY alone is sufficient eligibility; other markers are historical
    // signals, not hard requirements (older fixtures may omit some).
    void missingMarkers;
  }

  // Already M4 machine profile without prepare markers → not a legacy recovery.
  if (
    original.scope === M4_BOUNDED_DOCS_WRITE_SCOPE &&
    !hasPrepareOnly &&
    original.status !== "superseded"
  ) {
    return fail(
      "LEGACY_ALREADY_M4_CURRENT",
      "Contract already carries canonical M4 docs_write scope — no legacy rematerialization.",
    );
  }

  const intent = qualifyDocsWriteM3Intent({
    executionBasis: basis.executionBasis,
    action: original.action,
    requiredCapabilities: original.requiredCapabilities ?? [],
  });
  if (!intent.ok) return intent;
  if (!intent.preferDocsWrite) {
    return fail(
      "DECISION_BASIS_NOT_DOCS_WRITE",
      "DecisionBasis does not carry coherent docs_write intent for rematerialization.",
    );
  }

  if (
    original.status === "executing" ||
    original.status === "completed" ||
    original.status === "failed" ||
    original.status === "cancelled"
  ) {
    return fail(
      "LEGACY_CONTRACT_LIFECYCLE_REFUSED",
      `Cannot rematerialize contract in status ${original.status}.`,
    );
  }

  const listed =
    await input.deps.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId: canonicalId,
    });
  if (!listed.ok) {
    return fail(
      "LEGACY_ATTEMPT_SAFETY_UNPROVEN",
      listed.error.message ??
        "Cannot prove absence of prior Attempt for legacy original.",
    );
  }
  if (listed.attempts.length > 0) {
    return fail(
      "LEGACY_PRIOR_ATTEMPT_EXISTS",
      "Prior ExecutionAttempt exists on the legacy original — rematerialization refused.",
    );
  }

  // Target path / repository must remain sealed on DecisionBasis (durable truth).
  const eb = basis.executionBasis;
  const targetPath = eb?.targetPath?.trim() ?? "";
  const targetRepositoryRef = eb?.targetRepositoryRef?.trim() ?? "";
  if (!targetPath || !targetRepositoryRef) {
    return fail(
      "DECISION_BASIS_TARGET_INCOMPLETE",
      "DecisionBasis lacks sealed targetPath / targetRepositoryRef.",
    );
  }
  const originalInputs = (original.inputs ?? {}) as Record<string, unknown>;
  const sealedPath =
    typeof originalInputs.targetPath === "string"
      ? originalInputs.targetPath.trim()
      : "";
  const sealedRepo =
    typeof originalInputs.targetRepositoryRef === "string"
      ? originalInputs.targetRepositoryRef.trim()
      : typeof originalInputs.repositoryRef === "string"
        ? String(originalInputs.repositoryRef).trim()
        : "";
  if (sealedPath && sealedPath !== targetPath) {
    return fail(
      "DECISION_BASIS_TARGET_PATH_DRIFT",
      "Durable DecisionBasis targetPath does not match original contract inputs.",
    );
  }
  if (sealedRepo && sealedRepo !== targetRepositoryRef) {
    return fail(
      "DECISION_BASIS_REPOSITORY_DRIFT",
      "Durable DecisionBasis targetRepositoryRef does not match original contract inputs.",
    );
  }

  let sha: string | null = null;
  const pinned =
    input.deps.boundedDocsWriteBaseHeadSha ??
    input.deps.boundedReadOnlyBaseHeadSha;
  if (pinned !== undefined) {
    sha = validateBaseHeadSha(pinned);
  } else if (input.deps.resolveBoundedReadOnlyHead) {
    sha = validateBaseHeadSha(await input.deps.resolveBoundedReadOnlyHead());
  } else {
    const resolved = await resolveBoundedReadOnlyBaseHeadSha({
      gitRunner: input.deps.gitCommandRunner,
      startDir: input.deps.gitStartDir,
    });
    if (!resolved.ok) {
      return fail(resolved.code, resolved.message);
    }
    sha = resolved.sha;
  }
  if (!sha) {
    return fail(
      "BASE_HEAD_SHA_INVALID",
      "baseHeadSha server-side invalide ou absent — fail-closed avant Confirmation / Gate D.",
    );
  }

  const profile = boundedDocsWriteM3ResolutionProfile();
  const resolution = {
    ...profile,
    inputs: {
      ...(profile.inputs ?? {}),
      baseHeadSha: sha,
    },
  };

  const resolved = await resolveM3ExecutionContract({
    projectId: input.projectId,
    decisionId: input.decisionId,
    originalExecutionContractId: canonicalId,
    expectedOriginalVersion: original.version,
    resolution,
    supersessionReason: BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
    deps: input.deps,
  });
  if (!resolved.ok) return resolved;

  return {
    ok: true,
    payload: {
      turnKind: "f3_m3_legacy_docs_write_resolved",
      mode: "M3_RESOLVED_BOUNDED_DOCS_WRITE",
      decisionId: input.decisionId,
      projectId: input.projectId,
      original: resolved.original,
      successor: resolved.successor,
      reusedFromIdempotency: resolved.reusedFromIdempotency,
      executionPerformed: false,
      attemptCreated: false,
      confirmationRequired: true,
      realExecution: false,
      disclosures: [
        "LEGACY M3 PREPARE rematerialized via existing G-UX-15 resolve (no re-PREPARE)",
        "G-UX-15 resolveM3ExecutionContract — bounded docs-write M4 profile (server-selected from DecisionBasis; ZERO LIVE Cursor)",
        "NO Proposal authority",
        "Confirmation required before StartExecution",
        "CURSOR REAL NOT EXECUTED AT REMATERIALIZATION",
        "Profile is server-side; client adapter/command/real/profile fields are ignored",
        "PRIOR ATTEMPT COUNT VERIFIED ZERO ON ORIGINAL",
        ...resolved.disclosures,
      ],
    },
  };
}
