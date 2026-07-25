/**
 * Immutable in-memory agent registry.
 *
 * The descriptor set is closed at construction: descriptors are deep-cloned
 * and deeply frozen, and no mutation API is exposed. `healthStatus` and
 * `enabled` are simulated fixtures — never a live probe. Selection is
 * deterministic (agentId lexicographic) and deny-by-default.
 */
import { agentMatchViolation, isOaIdentifier } from "../domain/invariants";
import type { AgentMatchCriteria } from "../domain/invariants";
import type { AgentDescriptor } from "../domain/types";
import type { AgentRegistryPort } from "../ports/agentRegistry";

function deepFreeze<T>(value: T): T {
  if (value && typeof value === "object") {
    for (const nested of Object.values(value as Record<string, unknown>)) {
      deepFreeze(nested);
    }
    Object.freeze(value);
  }
  return value;
}

export class MemoryAgentRegistry implements AgentRegistryPort {
  private readonly byId: ReadonlyMap<string, AgentDescriptor>;

  constructor(descriptors: readonly AgentDescriptor[]) {
    const map = new Map<string, AgentDescriptor>();
    for (const descriptor of descriptors) {
      if (!isOaIdentifier(descriptor.agentId)) {
        throw new Error("agent_registry_invalid_agent_id");
      }
      if (descriptor.schemaVersion !== "0.1.0-oa") {
        throw new Error("agent_registry_invalid_schema_version");
      }
      if (map.has(descriptor.agentId)) {
        throw new Error("agent_registry_duplicate_agent_id");
      }
      map.set(descriptor.agentId, deepFreeze(structuredClone(descriptor)));
    }
    this.byId = map;
  }

  getAgent(agentId: string): AgentDescriptor | null {
    const found = this.byId.get(agentId);
    return found ? structuredClone(found) : null;
  }

  listAgents(): AgentDescriptor[] {
    return [...this.byId.values()]
      .map((descriptor) => structuredClone(descriptor))
      .sort((a, b) => (a.agentId < b.agentId ? -1 : 1));
  }

  findCandidates(criteria: AgentMatchCriteria): AgentDescriptor[] {
    return this.listAgents().filter(
      (descriptor) => agentMatchViolation(descriptor, criteria) === null,
    );
  }
}
