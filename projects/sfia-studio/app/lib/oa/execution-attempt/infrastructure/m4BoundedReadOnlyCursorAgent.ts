/**
 * M4 bounded read-only Cursor agent descriptor (D-M4-03).
 * Static / deny-by-default registry entry — no live health probe.
 * Exact caps only — no wildcards, no unresolved.
 */
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  M4_REAL_GATEWAY_ADAPTER_ID,
} from "../domain/realLaunchSafety";
import type { AgentDescriptor } from "../domain/types";

export const M4_BOUNDED_RO_CAPABILITY = "cap:cursor.read_only" as const;
export const M4_BOUNDED_RO_ACTION = "cursor.read_only.inspect" as const;
export const M4_BOUNDED_RO_TARGET = "workspace.isolated.read" as const;
export const M4_BOUNDED_RO_SCOPE = "studio.m4.real_off" as const;

export function createM4BoundedReadOnlyCursorAgentDescriptor(
  nowIso: string,
  provenance?: ProvenanceRecord,
): AgentDescriptor {
  const defaultProvenance: ProvenanceRecord = {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:m4-bounded-ro-cursor-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:m4-bounded-ro-cursor-agent",
  };
  const descriptor: AgentDescriptor = {
    schemaVersion: "0.1.0-oa",
    agentId: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    agentType: "cursor_cli_bounded_readonly",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    supportedCapabilities: [M4_BOUNDED_RO_CAPABILITY],
    allowedActions: [M4_BOUNDED_RO_ACTION],
    allowedTargets: [M4_BOUNDED_RO_TARGET],
    allowedScopes: [M4_BOUNDED_RO_SCOPE],
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

export function isM4BoundedReadOnlyRealAgent(agent: AgentDescriptor): boolean {
  const hasWildcard = (values: readonly string[]) =>
    values.some((v) => v === "*" || v.includes("*"));
  return (
    agent.executionMode === "cursor_cli_real" &&
    agent.trustLevel === "bounded" &&
    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
    agent.enabled === true &&
    agent.supportedCapabilities.length > 0 &&
    agent.allowedActions.length > 0 &&
    agent.allowedTargets.length > 0 &&
    agent.allowedScopes.length > 0 &&
    !hasWildcard(agent.supportedCapabilities) &&
    !hasWildcard(agent.allowedActions) &&
    !hasWildcard(agent.allowedTargets) &&
    !hasWildcard(agent.allowedScopes) &&
    !agent.supportedCapabilities.includes("cap:unresolved") &&
    !agent.allowedActions.some((a) => a.includes("UNRESOLVED")) &&
    !agent.allowedTargets.some((t) => t.includes("UNRESOLVED")) &&
    !agent.allowedScopes.some((s) => s.includes("UNRESOLVED"))
  );
}
