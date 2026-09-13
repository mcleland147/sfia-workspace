/**
 * M4 bounded remote git.push Cursor agent (GCEC git.push executor).
 * Sibling of local-commit — SAME gateway adapter; does not widen commit/docs-write.
 * Exact caps only — no force/delete/tags, no PR/merge capability.
 */
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
  M4_REAL_GATEWAY_ADAPTER_ID,
} from "../domain/realLaunchSafety";
import type { AgentDescriptor } from "../domain/types";

export const M4_BOUNDED_REMOTE_PUSH_CAPABILITY =
  "cap:cursor.git.remote_push" as const;
export const M4_BOUNDED_REMOTE_PUSH_ACTION =
  "cursor.git.remote_push.apply" as const;
export const M4_BOUNDED_REMOTE_PUSH_TARGET =
  "workspace.isolated.git.remote_push" as const;
export const M4_BOUNDED_REMOTE_PUSH_SCOPE =
  "studio.gcec.git.remote_push" as const;

export function createM4BoundedRemotePushCursorAgentDescriptor(
  nowIso: string,
  provenance?: ProvenanceRecord,
): AgentDescriptor {
  const defaultProvenance: ProvenanceRecord = {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:m4-bounded-remote-push-cursor-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:m4-bounded-remote-push-cursor-agent",
  };
  const descriptor: AgentDescriptor = {
    schemaVersion: "0.1.0-oa",
    agentId: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
    agentType: "cursor_cli_bounded_remote_push",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    supportedCapabilities: [M4_BOUNDED_REMOTE_PUSH_CAPABILITY],
    allowedActions: [M4_BOUNDED_REMOTE_PUSH_ACTION],
    allowedTargets: [M4_BOUNDED_REMOTE_PUSH_TARGET],
    allowedScopes: [M4_BOUNDED_REMOTE_PUSH_SCOPE],
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

export function isM4BoundedRemotePushRealAgent(
  agent: AgentDescriptor,
): boolean {
  const hasWildcard = (values: readonly string[]) =>
    values.some((v) => v === "*" || v.includes("*"));
  return (
    agent.agentId === M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID &&
    agent.executionMode === "cursor_cli_real" &&
    agent.trustLevel === "bounded" &&
    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
    agent.enabled === true &&
    agent.supportedCapabilities.includes(M4_BOUNDED_REMOTE_PUSH_CAPABILITY) &&
    agent.allowedActions.includes(M4_BOUNDED_REMOTE_PUSH_ACTION) &&
    agent.allowedTargets.includes(M4_BOUNDED_REMOTE_PUSH_TARGET) &&
    agent.allowedScopes.includes(M4_BOUNDED_REMOTE_PUSH_SCOPE) &&
    agent.allowedScopes.length === 1 &&
    agent.supportedCapabilities.length === 1 &&
    agent.allowedActions.length === 1 &&
    agent.allowedTargets.length === 1 &&
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
