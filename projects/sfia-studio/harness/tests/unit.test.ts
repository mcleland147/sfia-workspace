import { describe, expect, it } from "vitest";
import { canonicalize } from "../src/hash/canonicalize.js";
import { computeContractHash } from "../src/hash/contractHash.js";
import { StateMachine } from "../src/state/machine.js";
import { GateValidator } from "../src/gate/gateValidator.js";
import { PolicyEngine } from "../src/policy/policyEngine.js";
import { HarnessError } from "../src/types/contracts.js";
import { makeContract, makeGo, makeRequest } from "../fixtures/builders.js";
import path from "node:path";
import os from "node:os";
import { mkdtempSync } from "node:fs";

describe("canonicalize + contractHash", () => {
  it("same contract different key order → same hash", () => {
    const a = { b: 1, a: 2 };
    const b = { a: 2, b: 1 };
    expect(canonicalize(a)).toBe(canonicalize(b));
  });

  it("security field change → different hash", () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-hash-"));
    const c1 = makeContract(dir);
    const c2 = makeContract(dir, { gitEffect: "none-remote", timeoutMs: c1.timeoutMs + 1 });
    expect(computeContractHash(c1)).not.toBe(computeContractHash(c2));
  });
});

describe("StateMachine", () => {
  it("allows nominal path", () => {
    const m = new StateMachine();
    m.transition("CONTRACT_VALIDATED");
    m.transition("AWAITING_GATE");
    m.transition("AUTHORIZED");
    m.transition("RUNNING");
    m.transition("COMPLETED");
    m.transition("CLOSED");
    expect(m.current).toBe("CLOSED");
  });

  it("denies illegal transition", () => {
    const m = new StateMachine();
    expect(() => m.transition("RUNNING")).toThrow(HarnessError);
  });
});

describe("GateValidator", () => {
  it("accepts valid GO", () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-gate-"));
    const c = makeContract(dir);
    const g = makeGo(c);
    const v = new GateValidator();
    expect(v.validate({ gate: g, contract: c, expectedHash: computeContractHash(c) }).ok).toBe(true);
  });

  it("rejects hash mismatch", () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-gate-"));
    const c = makeContract(dir);
    const g = makeGo(c, { contractHash: "deadbeef" });
    const v = new GateValidator();
    const r = v.validate({ gate: g, contract: c, expectedHash: computeContractHash(c) });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("GATE_HASH_MISMATCH");
  });

  it("rejects replay of consumed GO", () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-gate-"));
    const c = makeContract(dir);
    const g = makeGo(c);
    const v = new GateValidator();
    v.consume(g.decisionId);
    const r = v.validate({ gate: g, contract: c, expectedHash: computeContractHash(c) });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("GATE_REPLAY");
  });

  it("rejects unauthorized decider", () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-gate-"));
    const c = makeContract(dir);
    const g = makeGo(c, { decidedBy: "NotMorris" });
    const v = new GateValidator();
    const r = v.validate({ gate: g, contract: c, expectedHash: computeContractHash(c) });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("GATE_DECIDER_UNAUTHORIZED");
  });
});

describe("PolicyEngine", () => {
  it("denies path traversal", () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-pol-"));
    const c = makeContract(dir);
    const p = new PolicyEngine();
    expect(() => p.assertAllowedPath(c, "../secrets")).toThrow(HarnessError);
  });

  it("denies git push shell", () => {
    const p = new PolicyEngine();
    expect(() => p.assertDeniedShellCommand("git push origin main")).toThrow(HarnessError);
  });

  it("requires none-remote and fixture", () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-pol-"));
    const p = new PolicyEngine();
    expect(() =>
      p.assertContract(makeContract(dir, { cursorMode: "fixture", gitEffect: "none-remote" })),
    ).not.toThrow();
  });
});

describe("request fixture smoke", () => {
  it("builds request", () => {
    expect(makeRequest().operator).toBe("Morris");
  });
});
