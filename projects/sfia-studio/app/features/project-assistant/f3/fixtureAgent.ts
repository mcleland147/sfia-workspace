/**
 * Closed fixture AgentDescriptor + explicit TestExecutionAdapter factory.
 * Never silent NoOp. externalEffects=false. adapterRef === adapterId.
 */

import {
  TestExecutionAdapter,
  type AgentDescriptor,
} from "@/lib/oa/execution-attempt";
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  F3_ACTION,
  F3_ADAPTER_ID,
  F3_AGENT_ID,
  F3_AGENT_TYPE,
  F3_CAPABILITY,
  F3_SCOPE,
  F3_TARGET,
} from "./constants";

function fixtureProvenance(nowIso: string): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:f3-fixture-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:f3-fixture-agent",
  };
}

export function createF3FixtureAgentDescriptor(
  nowIso = "2026-08-11T00:00:00.000Z",
): AgentDescriptor {
  return Object.freeze({
    schemaVersion: "0.1.0-oa",
    agentId: F3_AGENT_ID,
    agentType: F3_AGENT_TYPE,
    adapterRef: F3_ADAPTER_ID,
    supportedCapabilities: [F3_CAPABILITY],
    allowedActions: [F3_ACTION],
    allowedTargets: [F3_TARGET],
    allowedScopes: [F3_SCOPE],
    trustLevel: "fixture",
    executionMode: "adapter_sync_fixture",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    createdAt: nowIso,
    provenance: fixtureProvenance(nowIso),
  });
}

/**
 * Explicit TestExecutionAdapter only — callers must inject this into
 * createInMemoryExecutionAttemptServices (never rely on NoOp default).
 */
export function createF3TestExecutionAdapter(): TestExecutionAdapter {
  return new TestExecutionAdapter({ adapterId: F3_ADAPTER_ID });
}

export function assertF3AdapterIdentity(adapter: TestExecutionAdapter): void {
  if (adapter.adapterId !== F3_ADAPTER_ID) {
    throw new Error("f3_adapter_identity_mismatch");
  }
  if (adapter.externalEffects !== false) {
    throw new Error("f3_adapter_external_effects_must_be_false");
  }
}
