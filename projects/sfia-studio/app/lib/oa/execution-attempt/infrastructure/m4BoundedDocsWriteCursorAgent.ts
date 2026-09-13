/**
 * M4 bounded docs-write Cursor agent descriptor (D-GCEC-03).
 * Sibling of m4BoundedReadOnlyCursorAgent — does not mutate the RO descriptor.
 * Static / deny-by-default registry entry — no live health probe.
 * Exact caps only — no wildcards, no unresolved.
 */
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_REAL_GATEWAY_ADAPTER_ID,
} from "../domain/realLaunchSafety";
import type { AgentDescriptor } from "../domain/types";
import { isM4BoundedLocalCommitRealAgent } from "./m4BoundedLocalCommitCursorAgent";
import { isM4BoundedPrCreateRealAgent } from "./m4BoundedPrCreateCursorAgent";
import { isM4BoundedPrMergeRealAgent } from "./m4BoundedPrMergeCursorAgent";
import { isM4BoundedRemotePushRealAgent } from "./m4BoundedRemotePushCursorAgent";
import { isM4BoundedReadOnlyRealAgent } from "./m4BoundedReadOnlyCursorAgent";

export const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write" as const;
export const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
export const M4_BOUNDED_DOCS_WRITE_TARGET =
  "workspace.isolated.docs_write" as const;
export const M4_BOUNDED_DOCS_WRITE_SCOPE = "studio.gcec.docs_write" as const;

export function createM4BoundedDocsWriteCursorAgentDescriptor(
  nowIso: string,
  provenance?: ProvenanceRecord,
): AgentDescriptor {
  const defaultProvenance: ProvenanceRecord = {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:m4-bounded-docs-write-cursor-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:m4-bounded-docs-write-cursor-agent",
  };
  const descriptor: AgentDescriptor = {
    schemaVersion: "0.1.0-oa",
    agentId: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    agentType: "cursor_cli_bounded_docs_write",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    supportedCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    allowedActions: [M4_BOUNDED_DOCS_WRITE_ACTION],
    allowedTargets: [M4_BOUNDED_DOCS_WRITE_TARGET],
    allowedScopes: [M4_BOUNDED_DOCS_WRITE_SCOPE],
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

/**
 * Strict docs-write REAL allowlist — agentId + cap + action + target exact.
 * Does not loosen the RO predicate body.
 */
export function isM4BoundedDocsWriteRealAgent(
  agent: AgentDescriptor,
): boolean {
  const hasWildcard = (values: readonly string[]) =>
    values.some((v) => v === "*" || v.includes("*"));
  return (
    agent.agentId === M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID &&
    agent.executionMode === "cursor_cli_real" &&
    agent.trustLevel === "bounded" &&
    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
    agent.enabled === true &&
    agent.supportedCapabilities.includes(M4_BOUNDED_DOCS_WRITE_CAPABILITY) &&
    agent.allowedActions.includes(M4_BOUNDED_DOCS_WRITE_ACTION) &&
    agent.allowedTargets.includes(M4_BOUNDED_DOCS_WRITE_TARGET) &&
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

/** REAL Cursor allowlist — RO | docs-write | local-commit | push | PR create | PR merge. */
export function isM4AuthorizedCursorRealAgent(
  agent: AgentDescriptor,
): boolean {
  return (
    isM4BoundedReadOnlyRealAgent(agent) ||
    isM4BoundedDocsWriteRealAgent(agent) ||
    isM4BoundedLocalCommitRealAgent(agent) ||
    isM4BoundedRemotePushRealAgent(agent) ||
    isM4BoundedPrCreateRealAgent(agent) ||
    isM4BoundedPrMergeRealAgent(agent)
  );
}
