/**
 * T-A5 registry immutability / deny-by-default and the two fake adapters.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  DEFAULT_ATTEMPT_POLICY,
  isInjectableExecutionAdapter,
  MemoryAgentRegistry,
  MemoryExecutionAttemptAuditJournal,
  NoOpExecutionAdapter,
  resolveAttemptPolicy,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import {
  agentDescriptor,
  CONTRACT_ACTION,
  CONTRACT_CAPABILITY,
  CONTRACT_SCOPE,
  CONTRACT_TARGET,
  defaultAgents,
} from "./helpers";

const criteria = {
  requiredCapabilities: [CONTRACT_CAPABILITY],
  action: CONTRACT_ACTION,
  target: CONTRACT_TARGET,
  scope: CONTRACT_SCOPE,
};

describe("T-A5 MemoryAgentRegistry", () => {
  it("keeps only matching agents (deny-by-default)", () => {
    const registry = new MemoryAgentRegistry(defaultAgents());
    expect(registry.findCandidates(criteria).map((a) => a.agentId)).toEqual([
      "agt:alpha",
      "agt:beta",
    ]);
  });

  it("denies a disabled agent", () => {
    const registry = new MemoryAgentRegistry([
      agentDescriptor({ agentId: "agt:disabled", enabled: false }),
    ]);
    expect(registry.findCandidates(criteria)).toHaveLength(0);
  });

  it("denies a non-healthy agent (simulated health, never probed)", () => {
    const registry = new MemoryAgentRegistry([
      agentDescriptor({ agentId: "agt:sick", healthStatus: "unhealthy" }),
      agentDescriptor({ agentId: "agt:unknown", healthStatus: "unknown" }),
    ]);
    expect(registry.findCandidates(criteria)).toHaveLength(0);
  });

  it("denies a capability, action, target or scope mismatch", () => {
    const registry = new MemoryAgentRegistry([
      agentDescriptor({ agentId: "agt:cap", supportedCapabilities: [] }),
      agentDescriptor({ agentId: "agt:act", allowedActions: ["delete-all"] }),
      agentDescriptor({ agentId: "agt:tgt", allowedTargets: ["/"] }),
      agentDescriptor({ agentId: "agt:scp", allowedScopes: ["*"] }),
    ]);
    expect(registry.findCandidates(criteria)).toHaveLength(0);
  });

  it("returns immutable clones and exposes no mutation API", () => {
    const source = defaultAgents();
    const registry = new MemoryAgentRegistry(source);
    const found = registry.getAgent("agt:alpha");
    expect(found).not.toBeNull();
    if (found) {
      found.enabled = false;
      found.allowedScopes.push("everything");
    }
    expect(registry.getAgent("agt:alpha")?.enabled).toBe(true);
    expect(registry.getAgent("agt:alpha")?.allowedScopes).toEqual([
      CONTRACT_SCOPE,
    ]);
    expect(
      Object.keys(registry).some((key) => /add|register|set|remove/i.test(key)),
    ).toBe(false);
  });

  it("is not affected by mutating the source array after construction", () => {
    const source = defaultAgents();
    const registry = new MemoryAgentRegistry(source);
    source[0].enabled = false;
    source.push(agentDescriptor({ agentId: "agt:smuggled" }));
    expect(registry.getAgent("agt:alpha")?.enabled).toBe(true);
    expect(registry.getAgent("agt:smuggled")).toBeNull();
  });

  it("refuses a duplicate agentId, a bad identifier or a wrong schemaVersion", () => {
    expect(
      () =>
        new MemoryAgentRegistry([
          agentDescriptor({ agentId: "agt:alpha" }),
          agentDescriptor({ agentId: "agt:alpha" }),
        ]),
    ).toThrow(/duplicate/);
    expect(
      () => new MemoryAgentRegistry([agentDescriptor({ agentId: "AGENT" })]),
    ).toThrow(/invalid_agent_id/);
    expect(
      () =>
        new MemoryAgentRegistry([
          agentDescriptor({
            agentId: "agt:alpha",
            schemaVersion: "9.9.9" as "0.1.0-oa",
          }),
        ]),
    ).toThrow(/schema_version/);
  });

  it("lists agents deterministically", () => {
    const registry = new MemoryAgentRegistry([
      agentDescriptor({ agentId: "agt:zulu" }),
      agentDescriptor({ agentId: "agt:alpha" }),
    ]);
    expect(registry.listAgents().map((a) => a.agentId)).toEqual([
      "agt:alpha",
      "agt:zulu",
    ]);
  });
});

describe("T-A5 execution adapters", () => {
  const launchRequest = {
    attemptId: "xat:a1",
    executionContractId: "xct:oa-001",
    executionContractVersion: 3,
    selectedAgentRef: "agt:alpha",
    adapterRef: "adp:test-fixture",
    correlationId: "cor:test",
  };

  it("declares no external effects", () => {
    expect(new TestExecutionAdapter().externalEffects).toBe(false);
    expect(new NoOpExecutionAdapter().externalEffects).toBe(false);
  });

  it("acks deterministically by default and journals the call", async () => {
    const adapter = new TestExecutionAdapter();
    const result = await adapter.launch(launchRequest);
    expect(result.outcome).toBe("ack");
    expect(adapter.launchCallCount).toBe(1);
    expect(adapter.calls[0]).toMatchObject({
      kind: "launch",
      attemptId: "xat:a1",
      replayed: false,
    });
  });

  it("replays a memoized launch outcome instead of relaunching", async () => {
    const adapter = new TestExecutionAdapter();
    await adapter.launch(launchRequest);
    const replay = await adapter.launch(launchRequest);
    expect(replay.outcome).toBe("ack");
    expect(adapter.calls[1]).toMatchObject({ replayed: true });
  });

  it("honours per-attempt scripted reject and fail fixtures", async () => {
    const adapter = new TestExecutionAdapter({
      launchFixtures: {
        "xat:a1": { outcome: "reject", reason: "policy" },
        "xat:a2": { outcome: "fail", reason: "boom" },
      },
    });
    const rejected = await adapter.launch(launchRequest);
    const failed = await adapter.launch({
      ...launchRequest,
      attemptId: "xat:a2",
    });
    expect(rejected.outcome).toBe("reject");
    expect(failed.outcome).toBe("fail");
  });

  it("can be scripted to throw", async () => {
    const adapter = new TestExecutionAdapter({
      defaultLaunch: { outcome: "throw", reason: "kaboom" },
    });
    await expect(adapter.launch(launchRequest)).rejects.toThrow(/kaboom/);
  });

  it("scripts cancel outcomes with an irreversibility flag", async () => {
    const adapter = new TestExecutionAdapter({
      cancelFixtures: {
        "xat:a1": {
          outcome: "fail",
          reason: "already_committing",
          irreversibleEffectsPossible: true,
        },
      },
    });
    const result = await adapter.cancel({
      attemptId: "xat:a1",
      executionContractId: "xct:oa-001",
      selectedAgentRef: "agt:alpha",
      adapterRef: "adp:test-fixture",
      correlationId: "cor:test",
      reason: "stop",
    });
    expect(result.outcome).toBe("fail");
    expect(
      result.outcome === "fail" ? result.irreversibleEffectsPossible : false,
    ).toBe(true);
    expect(adapter.cancelCallCount).toBe(1);
  });

  it("NoOpExecutionAdapter always acks without effect", async () => {
    const adapter = new NoOpExecutionAdapter();
    expect((await adapter.launch(launchRequest)).outcome).toBe("ack");
    expect(
      (
        await adapter.cancel({
          attemptId: "xat:a1",
          executionContractId: "xct:oa-001",
          selectedAgentRef: "agt:alpha",
          adapterRef: "adp:noop",
          correlationId: "cor:test",
          reason: "stop",
        })
      ).outcome,
    ).toBe("ack");
  });

  it("recognises only the two closed injectable adapters", () => {
    expect(isInjectableExecutionAdapter(new TestExecutionAdapter())).toBe(true);
    expect(isInjectableExecutionAdapter(new NoOpExecutionAdapter())).toBe(true);
    const rogue = {
      adapterId: "adp:shell",
      externalEffects: false,
      launch: async () => ({ outcome: "ack" }),
      cancel: async () => ({ outcome: "ack" }),
    };
    expect(isInjectableExecutionAdapter(rogue)).toBe(false);
  });
});

describe("T-A5 policy and audit journal", () => {
  it("exposes bounded frozen defaults", () => {
    expect(Object.isFrozen(DEFAULT_ATTEMPT_POLICY)).toBe(true);
    expect(DEFAULT_ATTEMPT_POLICY.maxResultRecordingAttempts).toBeGreaterThan(0);
    expect(DEFAULT_ATTEMPT_POLICY.attemptTimeoutMs).toBeGreaterThan(0);
  });

  it("refuses non-positive or unbounded overrides", () => {
    expect(() => resolveAttemptPolicy({ attemptTimeoutMs: 0 })).toThrow();
    expect(() => resolveAttemptPolicy({ defaultSelectionTtlMs: -1 })).toThrow();
    expect(() =>
      resolveAttemptPolicy({ maxResultRecordingAttempts: 0 }),
    ).toThrow();
    expect(() => resolveAttemptPolicy({ defaultMaxRetriesBudget: -1 })).toThrow();
  });

  it("appends audit events without mutation", () => {
    const journal = new MemoryExecutionAttemptAuditJournal();
    const event = {
      event: "oa.execution_attempt.accepted" as const,
      ts: "2026-07-25T06:00:00.000Z",
      result: "ok" as const,
      durationMs: 0,
    };
    journal.append(event);
    expect(journal.events).toHaveLength(1);
    expect(journal.events[0]).not.toBe(event);
  });
});
