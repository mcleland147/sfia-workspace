/**
 * GAP-5 — provenance derived from the Attempt / selected agent, never from
 * SFIA_STUDIO_CURSOR_REAL or any other environment flag.
 */

import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  type AgentDescriptor,
} from "@/lib/oa/execution-attempt";
import { F3_ADAPTER_ID, F3_MODE } from "./constants";
import type { F3Mode } from "./types";

export const F3_REAL_MODE = "CURSOR_CLI_REAL" as const;

export type DerivedAttemptProvenance = {
  mode: F3Mode;
  adapterRef: string;
  executionMode: string;
  realProcessInvoked: boolean;
  realExecution: boolean;
  externalEffects: boolean;
  evidenceId: string;
  reviewBundleId: string;
};

function safeAttemptSegment(attemptId: string): string {
  return attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
}

export function isBoundedReadOnlyRealAgent(
  agent: Pick<AgentDescriptor, "adapterRef" | "executionMode"> | null,
): boolean {
  return (
    agent !== null &&
    agent.executionMode === "cursor_cli_real" &&
    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID
  );
}

export function deriveAttemptProvenance(input: {
  attempt: {
    attemptId: string;
    selectedAgentRef: string;
    status: string;
    resultRef?: string;
    launchedAt?: string;
    irreversibleEffectsPossible?: boolean;
  };
  agent: Pick<
    AgentDescriptor,
    "adapterRef" | "executionMode" | "agentId"
  > | null;
}): DerivedAttemptProvenance {
  const segment = safeAttemptSegment(input.attempt.attemptId);
  const realAgent = isBoundedReadOnlyRealAgent(input.agent);
  const realProcessInvoked =
    realAgent &&
    (input.attempt.irreversibleEffectsPossible === true ||
      input.attempt.status === "running" ||
      input.attempt.status === "succeeded" ||
      Boolean(input.attempt.launchedAt));

  if (realAgent) {
    return {
      mode: F3_REAL_MODE,
      adapterRef: input.agent!.adapterRef,
      executionMode: input.agent!.executionMode,
      realProcessInvoked,
      realExecution: realProcessInvoked,
      externalEffects: true,
      evidenceId: `ev:m4-bounded-ro:${segment}`,
      reviewBundleId: `rb:m4-bounded-ro:${segment}`,
    };
  }

  return {
    mode: F3_MODE,
    adapterRef: input.agent?.adapterRef ?? F3_ADAPTER_ID,
    executionMode: input.agent?.executionMode ?? "adapter_sync_fixture",
    realProcessInvoked: false,
    realExecution: false,
    externalEffects: false,
    evidenceId: `ev:f3-fixture:${segment}`,
    reviewBundleId: `rb:f3-fixture:${segment}`,
  };
}
