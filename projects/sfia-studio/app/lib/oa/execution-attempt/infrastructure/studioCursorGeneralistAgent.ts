/**
 * PJ-REPROOF-04 — Studio Cursor generalist executor (canonical Product path).
 *
 * ONE agent identity for ANY authorized ExecutionContract mission.
 * Cursor determines HOW from the projected prompt.
 *
 * Do NOT grow supportedCapabilities / allowedActions by Product task type.
 * Exact non-wildcard technical tokens satisfy REAL allowlist shape only.
 */
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
} from "../domain/realLaunchSafety";
import type { AgentDescriptor } from "../domain/types";

/** Single generic Product capability — not a task catalogue. */
export const STUDIO_CURSOR_GENERALIST_CAPABILITY =
  "cap:studio.cursor.generalist" as const;
export const STUDIO_CURSOR_GENERALIST_ACTION =
  "studio.cursor.generalist.execute" as const;
export const STUDIO_CURSOR_GENERALIST_TARGET =
  "studio.cursor.generalist.workspace" as const;
export const STUDIO_CURSOR_GENERALIST_SCOPE =
  "studio.cursor.generalist.authorized_contract" as const;

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
