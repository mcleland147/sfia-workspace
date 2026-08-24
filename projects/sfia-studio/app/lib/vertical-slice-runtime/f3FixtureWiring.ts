/**
 * F3 fixture identity + closed registry/adapter wiring for RuntimeOaStack.
 * Lives under vertical-slice-runtime so lib never imports @/features/*.
 */

import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  TestExecutionAdapter,
  type AgentDescriptor,
  type ExecutionAttemptRepositoryPort,
} from "@/lib/oa/execution-attempt";
import type {
  ExecutionAttemptReaderPort,
  ExecutionAttemptSnapshot,
} from "@/lib/oa/evidence-review";

export const F3_RUNTIME_ADAPTER_ID = "adp:f3-test-fixture" as const;
export const F3_RUNTIME_AGENT_ID = "agt:f3-fixture" as const;
export const F3_RUNTIME_AGENT_TYPE = "fixture_docs_writer" as const;
export const F3_RUNTIME_ACTION = "fixture-docs-prepare" as const;
export const F3_RUNTIME_TARGET = "sfia-studio/f3-fixture-only" as const;
export const F3_RUNTIME_SCOPE = "f3-fixture:docs+metadata-only" as const;
export const F3_RUNTIME_CAPABILITY = "cap:f3-fixture-docs" as const;

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
    agentId: F3_RUNTIME_AGENT_ID,
    agentType: F3_RUNTIME_AGENT_TYPE,
    adapterRef: F3_RUNTIME_ADAPTER_ID,
    supportedCapabilities: [F3_RUNTIME_CAPABILITY],
    allowedActions: [F3_RUNTIME_ACTION],
    allowedTargets: [F3_RUNTIME_TARGET],
    allowedScopes: [F3_RUNTIME_SCOPE],
    trustLevel: "fixture",
    executionMode: "adapter_sync_fixture",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    createdAt: nowIso,
    provenance: fixtureProvenance(nowIso),
  });
}

/** Explicit TestExecutionAdapter — never silent NoOp. */
export function createF3TestExecutionAdapter(): TestExecutionAdapter {
  return new TestExecutionAdapter({ adapterId: F3_RUNTIME_ADAPTER_ID });
}

export function createAttemptReaderBridge(
  attempts: ExecutionAttemptRepositoryPort,
): ExecutionAttemptReaderPort {
  return {
    async findById(
      attemptId: string,
    ): Promise<ExecutionAttemptSnapshot | null> {
      const attempt = await attempts.findById(attemptId);
      if (!attempt) return null;
      return {
        attemptId: attempt.attemptId,
        executionContractId: attempt.executionContractId,
        executionContractVersion: attempt.executionContractVersion,
        status: attempt.status,
        resultRef: attempt.resultRef,
        errorRef: attempt.errorRef,
        stopReason: attempt.stopReason,
        cancelledAt: attempt.cancelledAt,
        failedAt: attempt.failedAt,
        timedOutAt: attempt.timedOutAt,
        stopOrigin: attempt.stopOrigin,
        stopCode: attempt.stopCode,
        stopSourceRef: attempt.stopSourceRef,
        stopObservedAt: attempt.stopObservedAt,
        completedAt: attempt.completedAt,
        selectedAgentRef: attempt.selectedAgentRef,
      };
    },
  };
}
