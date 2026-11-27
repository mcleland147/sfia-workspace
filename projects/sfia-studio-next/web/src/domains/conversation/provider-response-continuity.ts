/**
 * Macro-lot 1 — native Responses continuity helpers (previous_response_id).
 *
 * D3 remains SoT for work identity, acquis, checkpoints, lease/fencing.
 * A provider chain is an optional optimization — never a durable business truth.
 *
 * Activation: SFIA_PROVIDER_CONTINUITY_MODE=native|off (default off until proven).
 * No external Conversations/background sessions without separate DATA-01 GO.
 */

export type ProviderContinuityMode = "off" | "native";

export type StudioContinuitySnapshot = {
  workId: string;
  acquisFingerprint: string | null;
  sourceVersions: string[];
  checkpointId: string | null;
  budgets: {
    tokensConsumed: number;
    tokensBudget: number | null;
    restitutionsRemaining: number | null;
  };
  rightsOk: boolean;
};

export type ProviderChainRef = {
  previousResponseId: string;
  boundWorkId: string;
  boundLane: string;
  boundAcquisFingerprint: string | null;
  boundSourceVersions: string[];
  createdAtMs: number;
};

export type ContinuityPlan =
  | {
      mode: "studio_rebuild";
      reason:
        | "MODE_OFF"
        | "NO_CHAIN"
        | "WORK_MISMATCH"
        | "LANE_MISMATCH"
        | "RIGHTS_CHANGED"
        | "SOURCES_CHANGED"
        | "ACQUIS_CHANGED"
        | "PROVIDER_UNAVAILABLE";
      previousResponseId: null;
      preserveBudgets: true;
    }
  | {
      mode: "native_previous_response";
      reason: "CHAIN_COMPATIBLE";
      previousResponseId: string;
      preserveBudgets: true;
      /** Prior tokens remain billable — not free. */
      priorTokensStillBilled: true;
    };

export function resolveProviderContinuityMode(
  env: NodeJS.ProcessEnv = process.env,
): ProviderContinuityMode {
  const raw = (env.SFIA_PROVIDER_CONTINUITY_MODE ?? "off").trim().toLowerCase();
  return raw === "native" ? "native" : "off";
}

function sameStringSet(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const sa = [...a].sort();
  const sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}

/**
 * Decide whether a provider chain may be attached to the next Responses call.
 * Always preserves Studio budgets (no reset on chain change / compaction).
 */
export function planProviderContinuity(input: {
  mode: ProviderContinuityMode;
  studio: StudioContinuitySnapshot;
  chain: ProviderChainRef | null;
  lane: string;
}): ContinuityPlan {
  if (input.mode !== "native") {
    return {
      mode: "studio_rebuild",
      reason: "MODE_OFF",
      previousResponseId: null,
      preserveBudgets: true,
    };
  }
  if (!input.chain) {
    return {
      mode: "studio_rebuild",
      reason: "NO_CHAIN",
      previousResponseId: null,
      preserveBudgets: true,
    };
  }
  if (input.chain.boundWorkId !== input.studio.workId) {
    return {
      mode: "studio_rebuild",
      reason: "WORK_MISMATCH",
      previousResponseId: null,
      preserveBudgets: true,
    };
  }
  if (input.chain.boundLane !== input.lane) {
    return {
      mode: "studio_rebuild",
      reason: "LANE_MISMATCH",
      previousResponseId: null,
      preserveBudgets: true,
    };
  }
  if (!input.studio.rightsOk) {
    return {
      mode: "studio_rebuild",
      reason: "RIGHTS_CHANGED",
      previousResponseId: null,
      preserveBudgets: true,
    };
  }
  if (
    !sameStringSet(
      input.chain.boundSourceVersions,
      input.studio.sourceVersions,
    )
  ) {
    return {
      mode: "studio_rebuild",
      reason: "SOURCES_CHANGED",
      previousResponseId: null,
      preserveBudgets: true,
    };
  }
  if (
    (input.chain.boundAcquisFingerprint ?? null) !==
    (input.studio.acquisFingerprint ?? null)
  ) {
    return {
      mode: "studio_rebuild",
      reason: "ACQUIS_CHANGED",
      previousResponseId: null,
      preserveBudgets: true,
    };
  }
  return {
    mode: "native_previous_response",
    reason: "CHAIN_COMPATIBLE",
    previousResponseId: input.chain.previousResponseId,
    preserveBudgets: true,
    priorTokensStillBilled: true,
  };
}

/**
 * Build Studio continuity snapshot from the real D3 work owner — not placeholders.
 * Lease/ownerToken alone never prove business rights; callers must pass rightsOk.
 */
export function buildStudioContinuityFromWork(
  work: {
    id: string;
    revision: number;
    ownerToken: string | null;
    leaseUntil: Date | null;
    state: {
      intentSummary?: string;
      conclusions?: string[];
      sources?: Array<{ ref: string; versionOrSha?: string | null }>;
    };
    resources: {
      inputTokens?: number | null;
      outputTokens?: number | null;
      segmentCalls?: number;
    };
  },
  policy?: {
    maxTokens?: number | null;
    maxSegments?: number | null;
    reserveForRestitution?: number | null;
    /** Explicit business rights — required for rightsOk=true. */
    rightsOk?: boolean;
  } | null,
  opts?: {
    /** Real checkpoint revision id when loaded from D3 SoT. */
    checkpointRevision?: number | null;
  },
): StudioContinuitySnapshot {
  const conclusions = work.state.conclusions ?? [];
  const acquisFingerprint =
    conclusions.length > 0
      ? `acq:${work.revision}:${conclusions
          .slice(0, 3)
          .map((c) => c.slice(0, 40))
          .join("|")}`
      : work.state.intentSummary
        ? `acq:${work.revision}:intent:${work.state.intentSummary.slice(0, 64)}`
        : null;
  const sourceVersions = (work.state.sources ?? [])
    .map((s) => {
      const ver = (s.versionOrSha ?? "").trim();
      return ver ? `${s.ref}@${ver}` : s.ref;
    })
    .filter(Boolean)
    .slice(0, 64);
  const tokensIn = Math.max(0, Number(work.resources.inputTokens ?? 0) || 0);
  const tokensOut = Math.max(0, Number(work.resources.outputTokens ?? 0) || 0);
  const tokensConsumed = tokensIn + tokensOut;
  const leaseOk =
    work.leaseUntil == null || work.leaseUntil.getTime() > Date.now();
  const fencingOk = Boolean(work.ownerToken) && leaseOk;
  // Business rights must be supplied by the D3 owner path — lease ≠ habilitation.
  const rightsOk =
    fencingOk && policy?.rightsOk === true;
  const tokensBudget =
    policy?.maxTokens != null && Number.isFinite(policy.maxTokens)
      ? Math.max(0, Number(policy.maxTokens))
      : null;
  const reserve =
    policy?.reserveForRestitution != null &&
    Number.isFinite(policy.reserveForRestitution)
      ? Math.max(0, Number(policy.reserveForRestitution))
      : 12_000;
  const restitutionsRemaining =
    tokensBudget != null
      ? Math.max(0, tokensBudget - tokensConsumed - reserve)
      : null;
  const ckptRev =
    opts?.checkpointRevision != null
      ? opts.checkpointRevision
      : work.revision;
  return {
    workId: work.id,
    acquisFingerprint,
    sourceVersions,
    checkpointId: `ckpt:${work.id}:r${ckptRev}`,
    budgets: {
      tokensConsumed,
      tokensBudget,
      restitutionsRemaining,
    },
    rightsOk,
  };
}

/**
 * Attach previous_response_id only when plan allows. Never invent store=true
 * or Conversations persistence here.
 */
export function applyContinuityToResponsesBody(
  body: Record<string, unknown>,
  plan: ContinuityPlan,
): Record<string, unknown> {
  if (plan.mode !== "native_previous_response") {
    const { previous_response_id: _drop, ...rest } = body;
    return rest;
  }
  return {
    ...body,
    previous_response_id: plan.previousResponseId,
  };
}
