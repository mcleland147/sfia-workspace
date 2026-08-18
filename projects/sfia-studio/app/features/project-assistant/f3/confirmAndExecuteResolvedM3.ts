/**
 * Confirm + fixture-safe execute for a *resolved* durable M3 successor contract.
 *
 * Preconditions (NO Proposal validation):
 * - validateResolvedM3ExecutionBoundary (exact canonical PREPARE lineage)
 * - registerM3LocalMorrisAuthority
 * Then SHARED confirm/select/start/evidence pipeline.
 */

import type {
  DecisionServices,
  MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import {
  LOCAL_MORRIS_M3_ACTOR,
  registerM3LocalMorrisAuthority,
} from "@/lib/oa/decision";
import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
import type {
  ExecutionAttemptServices,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import { F3_ADAPTER_ID } from "./constants";
import { executeConfirmedBoundedReadOnlyContract } from "./executeConfirmedBoundedReadOnlyContract";
import { executeConfirmedFixtureSafeContract } from "./executeConfirmedFixtureSafeContract";
import { authorizedM3ResolutionKind } from "./selectProductM3ResolutionProfile";
import type { F3ExecutePayload } from "./types";
import { validateResolvedM3ExecutionBoundary } from "./validateResolvedM3ExecutionBoundary";

export type ConfirmExecuteResolvedM3Deps = {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  executionContractServices: ExecutionContractServices;
  executionAttemptServices: ExecutionAttemptServices;
  evidenceReviewServices: EvidenceReviewServices;
  fixtureAdapter: TestExecutionAdapter;
  nowIso: () => string;
  projectServices?: ProjectServices;
  productDurablePath?: boolean;
  /** Test inject — bypasses M3 local Morris env gate. */
  forceM3Authority?: boolean;
};

export async function confirmAndExecuteResolvedM3(input: {
  projectId: string;
  decisionId: string;
  executionContractId: string;
  expectedContractVersion: number;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  deps: ConfirmExecuteResolvedM3Deps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;

  const boundary = await validateResolvedM3ExecutionBoundary({
    projectId: input.projectId,
    decisionId: input.decisionId,
    executionContractId: input.executionContractId,
    deps: {
      decisionServices: input.deps.decisionServices,
      executionContractServices: input.deps.executionContractServices,
      authorityResolver: input.deps.authorityResolver,
    },
  });
  if (!boundary.ok) {
    return boundary;
  }

  const contract = boundary.successor;
  const auth = registerM3LocalMorrisAuthority({
    authorityResolver: input.deps.authorityResolver,
    scope: contract.scope,
    issuedAt: input.deps.nowIso(),
    evidenceId: `evd:m3-cfm:${contract.executionContractId}`,
    forceEnable: input.deps.forceM3Authority === true,
  });
  if (!auth.ok) {
    return {
      ok: false,
      code: auth.code,
      message: auth.message,
    };
  }

  // E2E QA harness — armed terminal outcome (hard-gated; no-op when disabled).
  const { consumeArmedTerminalForConfirm } = await import(
    "@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl"
  );
  const armed = consumeArmedTerminalForConfirm({
    projectId: input.projectId,
    decisionId: input.decisionId,
    executionContractId: input.executionContractId,
  });
  if (armed) {
    const { getRuntimeApplicationService } = await import(
      "@/lib/vertical-slice-runtime"
    );
    const { runE2eArmedTerminalAttempt } = await import(
      "./e2eOptionATerminalAttempt"
    );
    return runE2eArmedTerminalAttempt({
      armed,
      expectedContractVersion: input.expectedContractVersion,
      runtime: getRuntimeApplicationService(),
    });
  }

  const attemptId = `xat:m3:${contract.executionContractId.replace(/^xct:/, "")}`;
  const kind = authorizedM3ResolutionKind(contract);

  if (kind === "bounded_read_only") {
    return executeConfirmedBoundedReadOnlyContract({
      projectId: input.projectId,
      decisionId: input.decisionId,
      proposal: null,
      contract,
      expectedContractVersion: input.expectedContractVersion,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
      identities: {
        confirmationId: `cfm:m3:${contract.executionContractId}:v${contract.version}`,
        confirmationIdempotencyKey: `idem:m3-cfm:${contract.executionContractId}:v${contract.version}`,
        confirmationLevel: "N3",
        attemptId,
        attemptIdempotencyKey: `idem:m3-att:${contract.executionContractId}`,
        grantId: `gd:m3:${contract.executionContractId.replace(/^xct:/, "")}`,
      },
      extraDisclosures: [
        "M3 resolved successor — Confirmation was process-local (non durable)",
        "NO Proposal authority",
        "REAL branch is server-routed from durable contract; client fields ignored",
      ],
      deps: {
        decisionServices: input.deps.decisionServices,
        executionContractServices: input.deps.executionContractServices,
        executionAttemptServices: input.deps.executionAttemptServices,
        evidenceReviewServices: input.deps.evidenceReviewServices,
        projectServices: input.deps.projectServices,
        productDurablePath: input.deps.productDurablePath,
        nowIso: input.deps.nowIso,
      },
    });
  }

  if (kind !== "fixture") {
    return {
      ok: false,
      code: "M3_SUCCESSOR_GOVERNANCE_MISMATCH",
      message:
        "Successor n'est ni fixture-safe ni bounded read-only — refus fail-closed.",
    };
  }

  if (input.deps.fixtureAdapter.adapterId !== F3_ADAPTER_ID) {
    return {
      ok: false,
      code: "ADAPTER_IDENTITY_MISMATCH",
      message: "Adapter F3 identity mismatch — REAL/NoOp interdit.",
    };
  }
  if (input.deps.fixtureAdapter.externalEffects !== false) {
    return {
      ok: false,
      code: "EXTERNAL_EFFECTS_FORBIDDEN",
      message: "externalEffects doit rester false (FIXTURE only).",
    };
  }

  return executeConfirmedFixtureSafeContract({
    projectId: input.projectId,
    decisionId: input.decisionId,
    proposal: null,
    contract,
    expectedContractVersion: input.expectedContractVersion,
    actor: LOCAL_MORRIS_M3_ACTOR,
    authorityEvidenceId: auth.evidenceId,
    identities: {
      confirmationId: `cfm:m3:${contract.executionContractId}:v${contract.version}`,
      confirmationIdempotencyKey: `idem:m3-cfm:${contract.executionContractId}:v${contract.version}`,
      confirmationLevel: "N3",
      attemptId,
      attemptIdempotencyKey: `idem:m3-att:${contract.executionContractId}`,
      resultRef: `res:m3-fixture:${attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`,
    },
    extraDisclosures: [
      "M3 resolved successor — Confirmation was process-local (non durable)",
      "NO Proposal authority",
    ],
    deps: {
      decisionServices: input.deps.decisionServices,
      executionContractServices: input.deps.executionContractServices,
      executionAttemptServices: input.deps.executionAttemptServices,
      evidenceReviewServices: input.deps.evidenceReviewServices,
      fixtureAdapter: input.deps.fixtureAdapter,
      projectServices: input.deps.projectServices,
      productDurablePath: input.deps.productDurablePath,
    },
  });
}
