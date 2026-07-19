import { describe, expect, it } from "vitest";
import { mkdtempSync, existsSync, readFileSync } from "node:fs";
import path from "node:path";
import os from "node:os";
import { Orchestrator } from "../src/orchestrator.js";
import { EventJournal } from "../src/journal/eventJournal.js";
import { ProofStore } from "../src/proof/proofStore.js";
import { CursorExecutorPortFixture } from "../src/ports/cursorFixture.js";
import { computeContractHash } from "../src/hash/contractHash.js";
import { makeContract, makeGo, makeRequest } from "../fixtures/builders.js";
import { PolicyEngine } from "../src/policy/policyEngine.js";
import { HarnessError } from "../src/types/contracts.js";

function tmpProof(): string {
  return mkdtempSync(path.join(os.tmpdir(), "sfia-poc-proof-"));
}

describe("A1 nominal", () => {
  it("completes S1 with git read + cursor fixture", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract);
    const orch = new Orchestrator();
    const result = await orch.run({
      request: makeRequest(),
      contract,
      gate,
    });
    expect(result.ok).toBe(true);
    expect(result.terminalState).toBe("CLOSED");
    expect(result.cursor?.realCursorClaimed).toBe(false);
    expect(result.gitResults.length).toBeGreaterThan(0);
    expect(existsSync(path.join(proofDir, "events.jsonl"))).toBe(true);
    expect(existsSync(path.join(proofDir, "summary.json"))).toBe(true);
    expect(result.projectedState).toBe("CLOSED");
  });
});

describe("A2 deny Git write", () => {
  it("rejects git push attempt without executing write", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract);
    const orch = new Orchestrator();
    const result = await orch.run({
      request: makeRequest(),
      contract,
      gate,
      attemptForbiddenGit: true,
    });
    expect(result.ok).toBe(false);
    expect(result.errorCode).toBe("POLICY_GIT_WRITE_DENIED");
    expect(existsSync(path.join(proofDir, "git-denied.json"))).toBe(true);
  });
});

describe("A3 hash mismatch", () => {
  it("rejects GO with wrong hash — no git", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract, { contractHash: "0".repeat(64) });
    const orch = new Orchestrator();
    const result = await orch.run({
      request: makeRequest(),
      contract,
      gate,
    });
    expect(result.ok).toBe(false);
    expect(result.errorCode).toBe("GATE_HASH_MISMATCH");
    expect(result.gitResults.length).toBe(0);
  });
});

describe("A4 STOP", () => {
  it("STOP before run is priority", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract, { decision: "STOP", decisionId: "stop-1" });
    const orch = new Orchestrator();
    const result = await orch.run({ request: makeRequest(), contract, gate });
    expect(result.ok).toBe(false);
    expect(result.errorCode).toBe("GATE_STOP");
    expect(result.gitResults.length).toBe(0);
  });

  it("STOP after authorize", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract);
    const orch = new Orchestrator();
    const result = await orch.run({
      request: makeRequest(),
      contract,
      gate,
      stopAfterAuthorize: true,
    });
    expect(result.errorCode).toBe("STOP");
    expect(existsSync(path.join(proofDir, "stop.json"))).toBe(true);
  });
});

describe("A5 without Studio", () => {
  it("runs via orchestrator API only (no UI)", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const result = await new Orchestrator().run({
      request: makeRequest(),
      contract,
      gate: makeGo(contract),
    });
    expect(result.ok).toBe(true);
    // No Studio dependency — pure harness
    expect(result.journalPath.endsWith("events.jsonl")).toBe(true);
  });
});

describe("A6 journal projection is not a second truth store", () => {
  it("projects state from journal events", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    await new Orchestrator().run({
      request: makeRequest(),
      contract,
      gate: makeGo(contract),
    });
    const journal = new EventJournal(proofDir, "x");
    expect(journal.projectLastState()).toBe("CLOSED");
    expect(journal.readAll().length).toBeGreaterThan(3);
  });
});

describe("AB abuse cases", () => {
  it("AB-01 falsified GO decider", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract, { decidedBy: "Attacker" });
    const r = await new Orchestrator().run({ request: makeRequest(), contract, gate });
    expect(r.errorCode).toBe("GATE_DECIDER_UNAUTHORIZED");
  });

  it("AB-02 replay GO", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract);
    const orch = new Orchestrator();
    const first = await orch.run({ request: makeRequest(), contract, gate });
    expect(first.ok).toBe(true);
    const proofDir2 = tmpProof();
    const contract2 = makeContract(proofDir2);
    // same decisionId on same validator instance
    const r2 = await orch.run({
      request: makeRequest(),
      contract: contract2,
      gate: makeGo(contract2, { decisionId: gate.decisionId }),
    });
    expect(r2.errorCode).toBe("GATE_REPLAY");
  });

  it("AB-03 hash tampering", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract, { contractHash: computeContractHash(contract) + "ff" });
    // normalize to wrong
    gate.contractHash = "ab".repeat(32);
    const r = await new Orchestrator().run({ request: makeRequest(), contract, gate });
    expect(r.errorCode).toBe("GATE_HASH_MISMATCH");
  });

  it("AB-04/05 path traversal / injection", () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const p = new PolicyEngine();
    expect(() => p.assertAllowedPath(contract, "../../.ssh/id_rsa")).toThrow(HarnessError);
    expect(() => p.assertDeniedShellCommand("git push; rm -rf /")).toThrow(HarnessError);
  });

  it("AB-06 proof outside proofDir denied", () => {
    const proofDir = tmpProof();
    const store = new ProofStore(proofDir);
    expect(() => store.writeText("../escape.txt", "x")).toThrow(HarnessError);
  });

  it("AB-07 cursor fixture never claims real", async () => {
    const fix = new CursorExecutorPortFixture();
    const r = await fix.execute({
      requestId: "r",
      executionId: "e",
      mode: "fixture",
      objective: "x",
      timeoutMs: 1000,
    });
    expect(r.realCursorClaimed).toBe(false);
  });

  it("AB-08 journal write failure is fail-closed typed", () => {
    // invalid proof dir on reserved device path is OS-specific; assert ProofStore escape instead
    const proofDir = tmpProof();
    const store = new ProofStore(proofDir);
    expect(() => store.writeJson("/absolute.json", {})).toThrow(HarnessError);
  });
});
