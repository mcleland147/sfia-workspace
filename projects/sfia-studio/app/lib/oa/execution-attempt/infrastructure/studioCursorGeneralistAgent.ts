/**
 * PJ-REPROOF-04 / PJ-REPROOF-05 — Studio Cursor generalist executor
 * (AgentDescriptor owner for the canonical Product path).
 *
 * ONE agent identity for ANY authorized ExecutionContract mission.
 * Cursor determines HOW from the projected prompt.
 *
 * Contract-surface quartet tokens are owned by execution-contract domain
 * (`generalistExecutionSurface`). This module builds the AgentDescriptor and
 * re-exports the quartet for historical consumers — it does NOT redefine the
 * string literals.
 *
 * Do NOT grow supportedCapabilities / allowedActions by Product task type.
 * Exact non-wildcard technical tokens satisfy REAL allowlist shape only.
 */
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
  STUDIO_CURSOR_GENERALIST_SCOPE,
  STUDIO_CURSOR_GENERALIST_TARGET,
} from "@/lib/oa/execution-contract/domain/generalistExecutionSurface";
import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
} from "../domain/realLaunchSafety";
import type { AgentDescriptor } from "../domain/types";

/** Compatibility re-exports — canonical source is execution-contract domain. */
export {
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
  STUDIO_CURSOR_GENERALIST_SCOPE,
  STUDIO_CURSOR_GENERALIST_TARGET,
};

export function createStudioCursorGeneralistAgentDescriptor(
  nowIso: string,
  provenance?: ProvenanceRecord,
): AgentDescriptor {
  const defaultProvenance: ProvenanceRecord = {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:studio-cursor-generalist-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:studio-cursor-generalist-agent",
  };
  const descriptor: AgentDescriptor = {
    schemaVersion: "0.1.0-oa",
    agentId: STUDIO_CURSOR_GENERALIST_AGENT_ID,
    agentType: "cursor_cli_generalist",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    supportedCapabilities: [STUDIO_CURSOR_GENERALIST_CAPABILITY],
    allowedActions: [STUDIO_CURSOR_GENERALIST_ACTION],
    allowedTargets: [STUDIO_CURSOR_GENERALIST_TARGET],
    allowedScopes: [STUDIO_CURSOR_GENERALIST_SCOPE],
    trustLevel: "bounded",
    executionMode: "cursor_cli_real",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    provenance: provenance ?? defaultProvenance,
    createdAt: nowIso,
  };
  return Object.freeze(descriptor);
}

export function isStudioCursorGeneralistAgent(
  agent: Pick<AgentDescriptor, "agentId">,
): boolean {
  return agent.agentId === STUDIO_CURSOR_GENERALIST_AGENT_ID;
}

export function isStudioCursorGeneralistRealAgent(
  agent: AgentDescriptor,
): boolean {
  const hasWildcard = (values: readonly string[]) =>
    values.some((v) => v === "*" || v.includes("*"));
  return (
    isStudioCursorGeneralistAgent(agent) &&
    agent.executionMode === "cursor_cli_real" &&
    agent.trustLevel === "bounded" &&
    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
    agent.enabled === true &&
    agent.supportedCapabilities.length === 1 &&
    agent.supportedCapabilities[0] === STUDIO_CURSOR_GENERALIST_CAPABILITY &&
    agent.allowedActions.length === 1 &&
    agent.allowedActions[0] === STUDIO_CURSOR_GENERALIST_ACTION &&
    agent.allowedTargets.length === 1 &&
    agent.allowedTargets[0] === STUDIO_CURSOR_GENERALIST_TARGET &&
    agent.allowedScopes.length === 1 &&
    agent.allowedScopes[0] === STUDIO_CURSOR_GENERALIST_SCOPE &&
    !hasWildcard(agent.supportedCapabilities) &&
    !hasWildcard(agent.allowedActions) &&
    !hasWildcard(agent.allowedTargets) &&
    !hasWildcard(agent.allowedScopes)
  );
}
