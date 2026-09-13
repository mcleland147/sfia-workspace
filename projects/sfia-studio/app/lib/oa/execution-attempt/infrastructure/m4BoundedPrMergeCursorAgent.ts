/**
 * M4 bounded github.pr.merge Cursor agent (GCEC PR-merge executor).
 * Sibling of PR-create — SAME gateway adapter; does not widen create/push.
 * Exact caps only — PREP-ready for merge continuation; REAL merge not claimed here.
 */
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID,
  M4_REAL_GATEWAY_ADAPTER_ID,
} from "../domain/realLaunchSafety";
import type { AgentDescriptor } from "../domain/types";

export const M4_BOUNDED_PR_MERGE_CAPABILITY =
  "cap:cursor.github.pr.merge" as const;
export const M4_BOUNDED_PR_MERGE_ACTION =
  "cursor.github.pr.merge.apply" as const;
export const M4_BOUNDED_PR_MERGE_TARGET =
  "workspace.isolated.github.pr.merge" as const;
export const M4_BOUNDED_PR_MERGE_SCOPE =
  "studio.gcec.github.pr.merge" as const;

export function createM4BoundedPrMergeCursorAgentDescriptor(
  nowIso: string,
  provenance?: ProvenanceRecord,
): AgentDescriptor {
  const defaultProvenance: ProvenanceRecord = {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:m4-bounded-pr-merge-cursor-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:m4-bounded-pr-merge-cursor-agent",
  };
  const descriptor: AgentDescriptor = {
    schemaVersion: "0.1.0-oa",
    agentId: M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID,
    agentType: "cursor_cli_bounded_pr_merge",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    supportedCapabilities: [M4_BOUNDED_PR_MERGE_CAPABILITY],
    allowedActions: [M4_BOUNDED_PR_MERGE_ACTION],
    allowedTargets: [M4_BOUNDED_PR_MERGE_TARGET],
    allowedScopes: [M4_BOUNDED_PR_MERGE_SCOPE],
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

export function isM4BoundedPrMergeRealAgent(agent: AgentDescriptor): boolean {
  const hasWildcard = (values: readonly string[]) =>
    values.some((v) => v === "*" || v.includes("*"));
  return (
    agent.agentId === M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID &&
    agent.executionMode === "cursor_cli_real" &&
    agent.trustLevel === "bounded" &&
    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
    agent.enabled === true &&
    agent.supportedCapabilities.includes(M4_BOUNDED_PR_MERGE_CAPABILITY) &&
    agent.allowedActions.includes(M4_BOUNDED_PR_MERGE_ACTION) &&
    agent.allowedTargets.includes(M4_BOUNDED_PR_MERGE_TARGET) &&
    agent.allowedScopes.includes(M4_BOUNDED_PR_MERGE_SCOPE) &&
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
