/**
 * W3-A — BOUNDED deterministic fixture agent (Morris B2/B3 / B4).
 *
 * HISTORICAL / DETERMINISTIC SUBSTITUTE for Cursor on Product fixture path.
 * NOT a Product task-category catalogue. NOT Pilot HOW choices.
 *
 * PJ-REPROOF-04: canonical Product execution is
 *   ExecutionContract → cursorMissionPrompt → generalist Cursor.
 * Fixture agent remains only for deterministic adapter_sync_fixture Attempts
 * when REAL Cursor is off. Supported actions/capabilities are technical
 * sufficiency declarations for the fixture adapter — not mission types.
 *
 * SUPPORTED (deterministic fixture sufficiency):
 * - product:generate-temporary-artifact / cap:product-temp-artifact (HISTORICAL)
 * - product:simulate / cap:product-simulate (HISTORICAL)
 * - product:read / cap:product-read (HISTORICAL internal effect-control mapping)
 * - scopes: product:temporary-local-artifact, product:simulate-sandbox, product:read-only
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
import {
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
  STUDIO_CURSOR_GENERALIST_SCOPE,
  STUDIO_CURSOR_GENERALIST_TARGET,
} from "@/lib/oa/execution-attempt/infrastructure/studioCursorGeneralistAgent";
import { F3_RUNTIME_ADAPTER_ID } from "./f3FixtureWiring";

export const W3A_BOUNDED_FIXTURE_AGENT_ID = "agt:w3a-bounded-fixture" as const;

/** Explicit fixture support — independent of requested EC capabilities. */
export const W3A_FIXTURE_SUPPORTED_ACTIONS = [
  "product:generate-temporary-artifact",
  "product:simulate",
  "product:read",
] as const;

export const W3A_FIXTURE_SUPPORTED_CAPABILITIES = [
  "cap:product-temp-artifact",
  "cap:product-simulate",
  "cap:product-read",
] as const;

/** Must match W3A_PRODUCT_TARGET_WORKSPACE — duplicated to avoid @/features import. */
export const W3A_FIXTURE_STABLE_TARGET = "product:project-workspace" as const;

/** Must match W3A_PRODUCT_SCOPE TEMP_ARTIFACT / SIMULATE / READ — no @/features import. */
export const W3A_FIXTURE_ALLOWED_SCOPES = [
  "product:temporary-local-artifact",
  "product:simulate-sandbox",
  "product:read-only",
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
 *
 * PJ-REPROOF-04: also declares the ONE Studio generalist technical quartet so
 * contract_legacy normal matching can select this fixture when REAL Cursor is
 * off. Historical product:* tokens remain for adapter_sync_fixture semantics —
 * they are NOT Product mission types and do NOT expand the generalist matcher.
 */
export function createW3ABoundedFixtureAgentDescriptor(
  nowIso = "2026-08-11T00:00:00.000Z",
): AgentDescriptor {
  return Object.freeze({
    schemaVersion: "0.1.0-oa",
    agentId: W3A_BOUNDED_FIXTURE_AGENT_ID,
    agentType: "product_bounded_fixture",
    adapterRef: F3_RUNTIME_ADAPTER_ID,
    supportedCapabilities: [
      ...W3A_FIXTURE_SUPPORTED_CAPABILITIES,
      STUDIO_CURSOR_GENERALIST_CAPABILITY,
    ],
    allowedActions: [
      ...W3A_FIXTURE_SUPPORTED_ACTIONS,
      STUDIO_CURSOR_GENERALIST_ACTION,
    ],
    allowedTargets: [
      W3A_FIXTURE_STABLE_TARGET,
      STUDIO_CURSOR_GENERALIST_TARGET,
    ],
    allowedScopes: [
      ...W3A_FIXTURE_ALLOWED_SCOPES,
      STUDIO_CURSOR_GENERALIST_SCOPE,
    ],
    trustLevel: "fixture",
    executionMode: "adapter_sync_fixture",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    createdAt: nowIso,
    provenance: fixtureProvenance(nowIso),
  });
}
