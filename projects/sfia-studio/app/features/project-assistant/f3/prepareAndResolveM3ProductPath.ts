/**
 * Canonical post-GO product path (PRE-M6 Option A / QA-PRE-M6-01):
 * accepted HumanDecision + DecisionBasis
 * → prepareM3FromDecision
 * → resolveM3ExecutionContract (fixture-safe G-UX-15 profile, ZERO REAL)
 * → present resolved successor for explicit Confirmation.
 *
 * Does NOT confirm. Does NOT start. Does NOT validate Proposal.
 */

import type { F2ContextSnapshot } from "../f2/types";
import {
  prepareM3FromDecision,
  type F3M3PreparePayload,
  type PrepareM3Deps,
} from "./prepareM3FromDecision";
import {
  resolveM3ExecutionContract,
  type ResolveM3Deps,
  type ResolveM3Success,
} from "./resolveM3ExecutionContract";
import { selectProductM3ResolutionProfile } from "./selectProductM3ResolutionProfile";
import {
  resolveBoundedReadOnlyBaseHeadSha,
  validateBaseHeadSha,
} from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
import type { GitCommandRunner } from "@/lib/oa/execution-attempt";

export type PrepareAndResolveM3Deps = PrepareM3Deps &
  ResolveM3Deps & {
    /**
     * Server/test only. Never accepted from the client.
     * Selects the bounded read-only M3 profile without requiring the live REAL flag.
     */
    preferBoundedReadOnlyProfile?: boolean;
    /**
     * Server/test only contract-bound workspace pin for the REAL successor.
     * Never accepted from the client. If omitted on the bounded profile,
     * HEAD is resolved server-side via gitCommandRunner / default resolver.
     */
    boundedReadOnlyBaseHeadSha?: string;
    /**
     * Server/test Git HEAD resolver. Never from the client.
     * Used when boundedReadOnlyBaseHeadSha is not provided.
     */
    resolveBoundedReadOnlyHead?: () => Promise<string | null> | string | null;
    gitCommandRunner?: GitCommandRunner;
    gitStartDir?: string;
  };

export type F3M3ResolvedPayload = {
  turnKind: "f3_m3_resolved";
  mode: "M3_RESOLVED_FIXTURE" | "M3_RESOLVED_BOUNDED_READ_ONLY";
  decisionId: string;
  projectId: string;
  prepare: F3M3PreparePayload;
  original: ResolveM3Success["original"];
  successor: ResolveM3Success["successor"];
  reusedFromIdempotency: boolean;
  executionPerformed: false;
  attemptCreated: false;
  confirmationRequired: true;
  realExecution: false;
  disclosures: string[];
};

export async function prepareAndResolveM3ProductPath(input: {
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
  deps: PrepareAndResolveM3Deps;
}): Promise<
  | { ok: true; payload: F3M3ResolvedPayload }
  | { ok: false; code: string; message: string }
> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.baseHeadSha;
  void input.workspace;

  const prepared = await prepareM3FromDecision({
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: input.currentContext,
    deps: input.deps,
  });
  if (!prepared.ok) {
    return prepared;
  }

  const selected = selectProductM3ResolutionProfile({
    preferBoundedReadOnlyProfile: input.deps.preferBoundedReadOnlyProfile === true,
  });

  let resolution = selected.profile;
  if (selected.kind === "bounded_read_only") {
    let sha: string | null = null;
    if (input.deps.boundedReadOnlyBaseHeadSha !== undefined) {
      sha = validateBaseHeadSha(input.deps.boundedReadOnlyBaseHeadSha);
    } else if (input.deps.resolveBoundedReadOnlyHead) {
      sha = validateBaseHeadSha(await input.deps.resolveBoundedReadOnlyHead());
    } else {
      const resolved = await resolveBoundedReadOnlyBaseHeadSha({
        gitRunner: input.deps.gitCommandRunner,
        startDir: input.deps.gitStartDir,
      });
      if (!resolved.ok) {
        return {
          ok: false,
          code: resolved.code,
          message: resolved.message,
        };
      }
      sha = resolved.sha;
    }
    if (!sha) {
      return {
        ok: false,
        code: "BASE_HEAD_SHA_INVALID",
        message:
          "baseHeadSha server-side invalide ou absent — fail-closed avant Confirmation / Gate D.",
      };
    }
    resolution = {
      ...selected.profile,
      inputs: {
        ...(selected.profile.inputs ?? {}),
        baseHeadSha: sha,
      },
    };
  }

  const resolved = await resolveM3ExecutionContract({
    projectId: input.projectId,
    decisionId: input.decisionId,
    originalExecutionContractId: prepared.payload.contract.executionContractId,
    expectedOriginalVersion: prepared.payload.contract.version,
    resolution,
    supersessionReason: selected.supersessionReason,
    deps: input.deps,
  });
  if (!resolved.ok) {
    return resolved;
  }

  const fixtureSelected = selected.kind === "fixture";
  return {
    ok: true,
    payload: {
      turnKind: "f3_m3_resolved",
      mode: fixtureSelected
        ? "M3_RESOLVED_FIXTURE"
        : "M3_RESOLVED_BOUNDED_READ_ONLY",
      decisionId: input.decisionId,
      projectId: input.projectId,
      prepare: prepared.payload,
      original: resolved.original,
      successor: resolved.successor,
      reusedFromIdempotency: resolved.reusedFromIdempotency,
      executionPerformed: false,
      attemptCreated: false,
      confirmationRequired: true,
      realExecution: false,
      disclosures: [
        "M3 durable PREPARE from HumanDecision + DecisionBasis",
        fixtureSelected
          ? "G-UX-15 resolveM3ExecutionContract — fixture-safe ZERO REAL profile"
          : "G-UX-15 resolveM3ExecutionContract — bounded read-only M4 profile (server-selected; ZERO LIVE in this cycle)",
        "NO Proposal authority",
        "Confirmation required before StartExecution",
        fixtureSelected ? "NO CURSOR REAL" : "CURSOR REAL NOT EXECUTED AT PREPARE",
        "Profile is server-side; client adapter/command/real fields are ignored",
        ...resolved.disclosures,
      ],
    },
  };
}
