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
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  type GitCommandRunner,
} from "@/lib/oa/execution-attempt";
import { selectProductM3ResolutionProfile } from "./selectProductM3ResolutionProfile";
import {
  resolveBoundedReadOnlyBaseHeadSha,
  validateBaseHeadSha,
} from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";

export type PrepareAndResolveM3Deps = PrepareM3Deps &
  ResolveM3Deps & {
    /**
     * Server/test only. Never accepted from the client.
     * Selects the bounded read-only M3 profile without requiring the live REAL flag.
     */
    preferBoundedReadOnlyProfile?: boolean;
    /**
     * Server/test only. Never accepted from the client.
     * Selects the bounded docs-write M3 profile (GCEC first vertical).
     * When omitted, docs-write prepare contracts auto-select this profile
     * (DecisionBasis intent) — never client REAL flags.
     */
    preferBoundedDocsWriteProfile?: boolean;
    /**
     * Server/test only contract-bound workspace pin for the REAL successor.
     * Never accepted from the client. If omitted on the bounded profile,
     * HEAD is resolved server-side via gitCommandRunner / default resolver.
     */
    boundedReadOnlyBaseHeadSha?: string;
    /**
     * Alias for bounded docs-write / read-only base HEAD pin.
     * Same semantics as boundedReadOnlyBaseHeadSha.
     */
    boundedDocsWriteBaseHeadSha?: string;
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
  mode:
    | "M3_RESOLVED_FIXTURE"
    | "M3_RESOLVED_BOUNDED_READ_ONLY"
    | "M3_RESOLVED_BOUNDED_DOCS_WRITE";
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

  const preparedContract = prepared.payload.contract;
  const decisionLoaded =
    await input.deps.decisionServices.getHumanDecision.execute({
      decisionId: input.decisionId,
    });
  if (!decisionLoaded.ok) {
    return {
      ok: false,
      code: decisionLoaded.error.detailCode,
      message: decisionLoaded.error.message,
    };
  }
  const executionBasis = decisionLoaded.decision.decisionBasis?.executionBasis;
  const basisDocsWriteIntent =
    executionBasis?.intentKind === "docs_write" ||
    executionBasis?.requestedOperation?.trim() === M4_BOUNDED_DOCS_WRITE_ACTION;
  const basisRequestedOp = executionBasis?.requestedOperation?.trim() ?? "";
  const basisOpCompatible =
    basisRequestedOp === "" ||
    basisRequestedOp === M4_BOUNDED_DOCS_WRITE_ACTION;
  const actionIsDocsWrite =
    preparedContract.action === M4_BOUNDED_DOCS_WRITE_ACTION;
  const capabilityIsDocsWrite = preparedContract.requiredCapabilities.includes(
    M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  );

  // B2 — no authority widening: capability alone / action alone / incompatible
  // DecisionBasis never promote to bounded_docs_write. Explicit server prefer
  // remains a test escape hatch; client REAL flags never participate.
  if (input.deps.preferBoundedDocsWriteProfile === true) {
    // explicit server/test opt-in — still require coherent prepare action+cap
    if (!actionIsDocsWrite || !capabilityIsDocsWrite) {
      return {
        ok: false,
        code: "DOCS_WRITE_PROFILE_PREPARE_INCOHERENT",
        message:
          "preferBoundedDocsWriteProfile refusé — PREPARE action/capability docs_write incohérents.",
      };
    }
  } else if (input.deps.preferBoundedDocsWriteProfile !== false) {
    const partialDocsWriteMarker =
      basisDocsWriteIntent || actionIsDocsWrite || capabilityIsDocsWrite;
    const fullCanonicalDocsWrite =
      basisDocsWriteIntent &&
      basisOpCompatible &&
      actionIsDocsWrite &&
      capabilityIsDocsWrite;
    if (partialDocsWriteMarker && !fullCanonicalDocsWrite) {
      return {
        ok: false,
        code: "DOCS_WRITE_INTENT_INCOHERENT",
        message:
          "Intention docs_write incohérente (DecisionBasis / action / capability) — fail-closed, aucune promotion automatique.",
      };
    }
  }

  const preferDocsWrite =
    input.deps.preferBoundedDocsWriteProfile === true ||
    (input.deps.preferBoundedDocsWriteProfile !== false &&
      basisDocsWriteIntent &&
      basisOpCompatible &&
      actionIsDocsWrite &&
      capabilityIsDocsWrite);

  const selected = selectProductM3ResolutionProfile({
    preferBoundedReadOnlyProfile: input.deps.preferBoundedReadOnlyProfile === true,
    preferBoundedDocsWriteProfile: preferDocsWrite,
  });

  let resolution = selected.profile;
  if (
    selected.kind === "bounded_read_only" ||
    selected.kind === "bounded_docs_write"
  ) {
    let sha: string | null = null;
    const pinned =
      selected.kind === "bounded_docs_write"
        ? (input.deps.boundedDocsWriteBaseHeadSha ??
          input.deps.boundedReadOnlyBaseHeadSha)
        : input.deps.boundedReadOnlyBaseHeadSha;
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
  const docsWriteSelected = selected.kind === "bounded_docs_write";
  const readOnlySelected = selected.kind === "bounded_read_only";
  return {
    ok: true,
    payload: {
      turnKind: "f3_m3_resolved",
      mode: fixtureSelected
        ? "M3_RESOLVED_FIXTURE"
        : docsWriteSelected
          ? "M3_RESOLVED_BOUNDED_DOCS_WRITE"
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
          : docsWriteSelected
            ? "G-UX-15 resolveM3ExecutionContract — bounded docs-write M4 profile (server-selected from DecisionBasis; ZERO LIVE Cursor; Fake boundary in tests)"
            : "G-UX-15 resolveM3ExecutionContract — bounded read-only M4 profile (server-selected; ZERO LIVE in this cycle)",
        "NO Proposal authority",
        "Confirmation required before StartExecution",
        fixtureSelected
          ? "NO CURSOR REAL"
          : readOnlySelected || docsWriteSelected
            ? "CURSOR REAL NOT EXECUTED AT PREPARE"
            : "CURSOR REAL NOT EXECUTED AT PREPARE",
        "Profile is server-side; client adapter/command/real fields are ignored",
        ...resolved.disclosures,
      ],
    },
  };
}
