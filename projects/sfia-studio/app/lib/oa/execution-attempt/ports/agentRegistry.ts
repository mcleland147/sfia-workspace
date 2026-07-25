import type { AgentDescriptor } from "../domain/types";
import type { AgentMatchCriteria } from "../domain/invariants";

/**
 * Immutable, deny-by-default agent registry.
 *
 * NOT a live registry, NOT a health probe: `healthStatus` is a simulated
 * snapshot injected at construction. No secrets, endpoints or tokens.
 * No mutation API is exposed — the descriptor set is closed at construction.
 */
export interface AgentRegistryPort {
  getAgent(agentId: string): AgentDescriptor | null;
  listAgents(): AgentDescriptor[];
  /** Deterministic candidates (agentId lexicographic), deny-by-default. */
  findCandidates(criteria: AgentMatchCriteria): AgentDescriptor[];
}
