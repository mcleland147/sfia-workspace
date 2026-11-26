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
