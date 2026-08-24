/**
 * W3-A — BOUNDED deterministic fixture agent (Morris B2/B3 / B4).
 *
 * Fixture capabilities are DECLARED UP FRONT and independent of the contract.
 * They must NOT be synthesized from EC criteria (that made sufficiency tautological).
 * They must NOT shape EC action/target/scope.
 *
 * SUPPORTED (deterministic W3-A proof):
 * - product:generate-temporary-artifact / cap:product-temp-artifact
 * - product:simulate / cap:product-simulate
 * - scopes: product:temporary-local-artifact, product:simulate-sandbox
 * - target: product:project-workspace
 *
 * UNSUPPORTED (must yield SC-CAP / no Attempt):
 * - local-write, commit, push, PR, merge, critical-delete, doctrine/baseline
 * - any REAL / Cursor path
 * - W2 trajectory option intent strings as scopes
 *
 * TestExecutionAdapter remains the external-executor substitute only.
 */

import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import type { AgentDescriptor } from "@/lib/oa/execution-attempt";
import { F3_RUNTIME_ADAPTER_ID } from "./f3FixtureWiring";

export const W3A_BOUNDED_FIXTURE_AGENT_ID = "agt:w3a-bounded-fixture" as const;

/** Explicit fixture support — independent of requested EC capabilities. */
export const W3A_FIXTURE_SUPPORTED_ACTIONS = [
  "product:generate-temporary-artifact",
  "product:simulate",
] as const;

export const W3A_FIXTURE_SUPPORTED_CAPABILITIES = [
  "cap:product-temp-artifact",
  "cap:product-simulate",
] as const;

/** Must match W3A_PRODUCT_TARGET_WORKSPACE — duplicated to avoid @/features import. */
export const W3A_FIXTURE_STABLE_TARGET = "product:project-workspace" as const;

/** Must match W3A_PRODUCT_SCOPE TEMP_ARTIFACT / SIMULATE — no @/features import. */
export const W3A_FIXTURE_ALLOWED_SCOPES = [
  "product:temporary-local-artifact",
  "product:simulate-sandbox",
] as const;

function fixtureProvenance(nowIso: string): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:w3a-bounded-fixture-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:w3a-bounded-fixture-agent",
  };
}

/**
 * Bounded fixture AgentDescriptor — support declared independently of EC.
 */
export function createW3ABoundedFixtureAgentDescriptor(
  nowIso = "2026-08-11T00:00:00.000Z",
): AgentDescriptor {
  return Object.freeze({
    schemaVersion: "0.1.0-oa",
    agentId: W3A_BOUNDED_FIXTURE_AGENT_ID,
    agentType: "product_bounded_fixture",
    adapterRef: F3_RUNTIME_ADAPTER_ID,
    supportedCapabilities: [...W3A_FIXTURE_SUPPORTED_CAPABILITIES],
    allowedActions: [...W3A_FIXTURE_SUPPORTED_ACTIONS],
    allowedTargets: [W3A_FIXTURE_STABLE_TARGET],
    allowedScopes: [...W3A_FIXTURE_ALLOWED_SCOPES],
    trustLevel: "fixture",
    executionMode: "adapter_sync_fixture",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    createdAt: nowIso,
    provenance: fixtureProvenance(nowIso),
  });
}
