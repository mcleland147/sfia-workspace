/**
 * GAP-5 / Critical Review B1 — provenance from Attempt + selected agent profile
 * + actual launch-boundary proof mode. Never from:
 * - SFIA_STUDIO_CURSOR_REAL / env flags
 * - contract kind alone
 * - agent descriptor alone
 * - status succeeded alone
 *
 * Distinctions:
 * 1. machine/executor profile (agent.executionMode / adapterRef contract id)
 * 2. boundaryProofMode (deterministic_fake | cursor_real) from composed launch port
 * 3. realExecution / Cursor REAL claim — only when boundaryProofMode === cursor_real
 *    AND a launch was observed on the Attempt
 * 4. port-level realProcessInvoked ACK ≠ Cursor OS REAL proof when fake
 */

import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  type AgentDescriptor,
  type BoundaryProofMode,
} from "@/lib/oa/execution-attempt";
import { F3_ADAPTER_ID, F3_MODE } from "./constants";
import type { F3Mode } from "./types";

export const F3_REAL_MODE = "CURSOR_CLI_REAL" as const;
/** M4-shaped agent profile executed via deterministic Fake boundary (ZERO Cursor OS). */
export const F3_BOUNDED_M4_DETERMINISTIC_MODE =
  "BOUNDED_M4_DETERMINISTIC" as const;

export type DerivedAttemptProvenance = {
  mode: F3Mode;
  /** Contractual adapter identity (may be M4_REAL_GATEWAY_ADAPTER_ID for Fake and REAL). */
  adapterRef: string;
  executionMode: string;
  /** Actual composed boundary proof mode (or fixture when no REAL port). */
  boundaryProofMode: BoundaryProofMode | "fixture";
  /**
   * Port-contract ACK that a launch path ran.
   * On deterministic_fake this may be true without implying Cursor OS REAL.
   */
  realProcessInvoked: boolean;
  /** True only when Cursor REAL boundary proof mode + observed launch. */
  realExecution: boolean;
  /**
   * Product-observable effects outside pure fixture adapter.
   * Deterministic Fake docs-write may mutate isolated temp FS → true.
   * Cursor REAL → true. Pure F3 fixture → false.
   */
  externalEffects: boolean;
  evidenceId: string;
  reviewBundleId: string;
};

function safeAttemptSegment(attemptId: string): string {
  return attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
}

/** M4-shaped Cursor CLI agent profile (machine executor), not a REAL proof. */
export function isBoundedReadOnlyRealAgent(
  agent: Pick<AgentDescriptor, "adapterRef" | "executionMode"> | null,
): boolean {
  return (
    agent !== null &&
    agent.executionMode === "cursor_cli_real" &&
    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID
  );
}

export function attemptLaunchObserved(attempt: {
  status: string;
  resultRef?: string;
  launchedAt?: string;
  irreversibleEffectsPossible?: boolean;
}): boolean {
  return (
    attempt.irreversibleEffectsPossible === true ||
    attempt.status === "running" ||
    attempt.status === "succeeded" ||
    attempt.status === "failed" ||
    attempt.status === "timeout" ||
    Boolean(attempt.launchedAt) ||
    Boolean(attempt.resultRef)
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
  /**
   * From RealExecutionLaunchPort.boundaryProofMode when a realBoundary is
   * composed. Omit / null → fixture path (no M4 launch port).
   */
  boundaryProofMode?: BoundaryProofMode | null;
}): DerivedAttemptProvenance {
  const segment = safeAttemptSegment(input.attempt.attemptId);
  const m4Profile = isBoundedReadOnlyRealAgent(input.agent);
  const launched = attemptLaunchObserved(input.attempt);
  const proof: BoundaryProofMode | "fixture" =
    input.boundaryProofMode === "cursor_real" ||
    input.boundaryProofMode === "deterministic_fake"
      ? input.boundaryProofMode
      : "fixture";

  const cursorRealProven =
    m4Profile && proof === "cursor_real" && launched;
  const deterministicM4 =
    m4Profile && proof === "deterministic_fake";

  if (cursorRealProven) {
    return {
      mode: F3_REAL_MODE,
      adapterRef: input.agent!.adapterRef,
      executionMode: input.agent!.executionMode,
      boundaryProofMode: "cursor_real",
      realProcessInvoked: true,
      realExecution: true,
      externalEffects: true,
      evidenceId: `ev:m4-bounded-ro:${segment}`,
      reviewBundleId: `rb:m4-bounded-ro:${segment}`,
    };
  }

  if (deterministicM4) {
    return {
      mode: F3_BOUNDED_M4_DETERMINISTIC_MODE,
      adapterRef: input.agent!.adapterRef,
      executionMode: input.agent!.executionMode,
      boundaryProofMode: "deterministic_fake",
      // Port may ACK launch; Cursor OS REAL remains false.
      realProcessInvoked: launched,
      realExecution: false,
      externalEffects: launched,
      // Evidence ID namespace stays M4 contractual (same as REAL path).
      // Fake vs Real is carried by boundaryProofMode / realExecution / mode —
      // not by renaming the Evidence prefix (avoids LPS/rehydrate drift).
      evidenceId: `ev:m4-bounded-ro:${segment}`,
      reviewBundleId: `rb:m4-bounded-ro:${segment}`,
    };
  }

  // M4-shaped agent selected but not yet launched / no boundary composed:
  // never claim Cursor REAL from agent identity alone.
  if (m4Profile) {
    return {
      mode: F3_BOUNDED_M4_DETERMINISTIC_MODE,
      adapterRef: input.agent!.adapterRef,
      executionMode: input.agent!.executionMode,
      boundaryProofMode: proof,
      realProcessInvoked: false,
      realExecution: false,
      externalEffects: false,
      evidenceId: `ev:m4-bounded-ro:${segment}`,
      reviewBundleId: `rb:m4-bounded-ro:${segment}`,
    };
  }

  return {
    mode: F3_MODE,
    adapterRef: input.agent?.adapterRef ?? F3_ADAPTER_ID,
    executionMode: input.agent?.executionMode ?? "adapter_sync_fixture",
    boundaryProofMode: "fixture",
    realProcessInvoked: false,
    realExecution: false,
    externalEffects: false,
    evidenceId: `ev:f3-fixture:${segment}`,
    reviewBundleId: `rb:f3-fixture:${segment}`,
  };
}
