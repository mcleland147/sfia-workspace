/**
 * M4 bounded github.pr.create Cursor agent (GCEC PR-create executor).
 * Sibling of remote-push — SAME gateway adapter; does not widen push/commit.
 * Exact caps only — no auto-merge, no push/force, no merge capability.
 */
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
  M4_REAL_GATEWAY_ADAPTER_ID,
} from "../domain/realLaunchSafety";
import type { AgentDescriptor } from "../domain/types";

export const M4_BOUNDED_PR_CREATE_CAPABILITY =
  "cap:cursor.github.pr.create" as const;
export const M4_BOUNDED_PR_CREATE_ACTION =
  "cursor.github.pr.create.apply" as const;
export const M4_BOUNDED_PR_CREATE_TARGET =
  "workspace.isolated.github.pr.create" as const;
export const M4_BOUNDED_PR_CREATE_SCOPE =
  "studio.gcec.github.pr.create" as const;

export function createM4BoundedPrCreateCursorAgentDescriptor(
  nowIso: string,
  provenance?: ProvenanceRecord,
): AgentDescriptor {
  const defaultProvenance: ProvenanceRecord = {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:m4-bounded-pr-create-cursor-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:m4-bounded-pr-create-cursor-agent",
  };
  const descriptor: AgentDescriptor = {
    schemaVersion: "0.1.0-oa",
    agentId: M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
    agentType: "cursor_cli_bounded_pr_create",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    supportedCapabilities: [M4_BOUNDED_PR_CREATE_CAPABILITY],
    allowedActions: [M4_BOUNDED_PR_CREATE_ACTION],
    allowedTargets: [M4_BOUNDED_PR_CREATE_TARGET],
    allowedScopes: [M4_BOUNDED_PR_CREATE_SCOPE],
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

export function isM4BoundedPrCreateRealAgent(agent: AgentDescriptor): boolean {
  const hasWildcard = (values: readonly string[]) =>
    values.some((v) => v === "*" || v.includes("*"));
  return (
    agent.agentId === M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID &&
    agent.executionMode === "cursor_cli_real" &&
    agent.trustLevel === "bounded" &&
    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
    agent.enabled === true &&
    agent.supportedCapabilities.includes(M4_BOUNDED_PR_CREATE_CAPABILITY) &&
    agent.allowedActions.includes(M4_BOUNDED_PR_CREATE_ACTION) &&
    agent.allowedTargets.includes(M4_BOUNDED_PR_CREATE_TARGET) &&
    agent.allowedScopes.includes(M4_BOUNDED_PR_CREATE_SCOPE) &&
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
