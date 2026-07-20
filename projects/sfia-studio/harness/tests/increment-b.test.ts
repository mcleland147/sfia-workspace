import { describe, expect, it } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import { createThinStudioAdapter } from "../src/adapter/thinStudioAdapter.js";
import { Orchestrator } from "../src/orchestrator.js";
import { GateValidator } from "../src/gate/gateValidator.js";
import { computeContractHash } from "../src/hash/contractHash.js";
import { resumeSessionFromProofDir } from "../src/session/resumeSession.js";
import { verifyProofPack } from "../src/proof/verifyProofPack.js";
import { makeContract, makeGo, makeRequest } from "../fixtures/builders.js";
import type { StudioAdapterRequest } from "../src/types/contracts.js";

const HARNESS_SRC = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../src");

function tmp(): string {
  return mkdtempSync(path.join(os.tmpdir(), "sfia-inc-b-"));
}

function baseReq(overrides: Partial<StudioAdapterRequest> = {}): StudioAdapterRequest {
  return {
    requestId: "req-inc-b-001",
    correlationId: "corr-inc-b-001",
    contractId: "ctr-inc-b-001",
    contractHash: "claimed-ignored-by-adapter",
    branch: "delivery/sfia-studio-poc-increment-b",
    head: "ee9487797ce44c8d864846030c54fac43ee33611",
    allowlist: ["projects/sfia-studio", "projects/sfia-studio/harness"],
    morrisDecision: "GO",
    decidedAt: "2026-07-20T00:10:00+02:00",
    action: "run-fixture",
    proofDir: tmp(),
    ...overrides,
  };
}

describe("Increment B — thin adapter (no authority)", () => {
  it("maps and forwards without validating GO itself", async () => {
    const adapter = createThinStudioAdapter();
    const src = readFileSync(
      path.join(HARNESS_SRC, "adapter/thinStudioAdapter.ts"),
      "utf8",
    );
    expect(src).not.toMatch(/GateValidator/);
    expect(src).not.toMatch(/assertGateOk/);
    expect(src).toMatch(/forward/);
    const res = await adapter.forward(baseReq());
    expect(res.statusSource).toBe("harness");
    expect(res.mode).toBe("fixture");
    expect(res.realGptClaimed).toBe(false);
    expect(res.realCursorClaimed).toBe(false);
    expect(res.remoteGitWrite).toBe(false);
    expect(res.ok).toBe(true);
    expect(res.goValid).toBe(true);
    expect(res.events.length).toBeGreaterThan(3);
    expect(res.proofPack?.ok).toBe(true);
    expect(res.report).toBeTruthy();
  });

  it("does not auto-retry after GO consume (replay refused)", async () => {
    const adapter = createThinStudioAdapter();
    const decisionId = "gate-once-only";
    const proof1 = tmp();
    const first = await adapter.forward(baseReq({ proofDir: proof1, decisionId }));
    expect(first.ok).toBe(true);
    const second = await adapter.forward(
      baseReq({ proofDir: tmp(), decisionId, correlationId: "corr-retry" }),
    );
    // Same Orchestrator instance inside adapter — replay blocked
    expect(second.ok).toBe(false);
    expect(second.errorCode).toBe("GATE_REPLAY");
    expect(second.stopOrTimeout).toBe("refusal");
  });
});

describe("Increment B — harness autonomy (no Studio)", () => {
  it("src tree has no React imports", () => {
    const walk = (dir: string): string[] => {
      const out: string[] = [];
      for (const ent of readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, ent.name);
        if (ent.isDirectory()) out.push(...walk(p));
        else if (/\.(ts|js)$/.test(ent.name)) out.push(p);
      }
      return out;
    };
    for (const file of walk(HARNESS_SRC)) {
      const text = readFileSync(file, "utf8");
      expect(text).not.toMatch(/from ["']react["']/);
      expect(text).not.toMatch(/from ["']react-dom["']/);
      expect(text).not.toMatch(/from ["']next\//);
      expect(text).not.toMatch(/from ["'][^"']*\/app\//);
      expect(text).not.toMatch(/import\(["'][^"']*sfia-studio\/app/);
    }
  });

  it("nominal + invalid GO + STOP + journal + proofs without Studio", async () => {
    const orch = new Orchestrator();
    const proofOk = tmp();
    const c = makeContract(proofOk);
    const ok = await orch.run({
      request: makeRequest(),
      contract: c,
      gate: makeGo(c),
      expectedBranch: "delivery/sfia-studio-poc-increment-b",
      expectedHead: "ee9487797ce44c8d864846030c54fac43ee33611",
      revalidateBeforeExecute: true,
    });
    expect(ok.ok).toBe(true);
    expect(verifyProofPack(proofOk, { requireSuccessArtifacts: true }).ok).toBe(true);

    const proofBad = tmp();
    const c2 = makeContract(proofBad);
    const bad = await orch.run({
      request: makeRequest(),
      contract: c2,
      gate: makeGo(c2, { contractHash: "0".repeat(64) }),
      expectedBranch: "delivery/sfia-studio-poc-increment-b",
      expectedHead: "ee9487797ce44c8d864846030c54fac43ee33611",
    });
    expect(bad.ok).toBe(false);
    expect(bad.errorCode).toBe("GATE_HASH_MISMATCH");

    const proofStop = tmp();
    const c3 = makeContract(proofStop);
    const stop = await orch.run({
      request: makeRequest(),
      contract: c3,
      gate: makeGo(c3, { decision: "STOP", decisionId: "stop-b" }),
    });
    expect(stop.errorCode).toBe("GATE_STOP");
    expect(stop.ok).toBe(false);
  });
});

describe("Increment B — gates & invalidation", () => {
  it("rejects branch / HEAD / allowlist / missing Morris", () => {
    const dir = tmp();
    const c = makeContract(dir);
    const v = new GateValidator();
    const hash = computeContractHash(c);
    const branch = "delivery/sfia-studio-poc-increment-b";
    const head = "ee9487797ce44c8d864846030c54fac43ee33611";

    expect(
      v.validate({
        gate: makeGo(c, { gitBranch: "other" }),
        contract: c,
        expectedHash: hash,
        expectedBranch: branch,
        expectedHead: head,
      }).ok,
    ).toBe(false);

    expect(
      v.validate({
        gate: makeGo(c, { gitHead: "a".repeat(40) }),
        contract: c,
        expectedHash: hash,
        expectedBranch: branch,
        expectedHead: head,
      }).ok,
    ).toBe(false);

    expect(
      v.validate({
        gate: makeGo(c, { allowlistSnapshot: ["evil"] }),
        contract: c,
        expectedHash: hash,
        expectedBranch: branch,
        expectedHead: head,
      }).ok,
    ).toBe(false);

    expect(
      v.validate({
        gate: makeGo(c, { decidedBy: "" }),
        contract: c,
        expectedHash: hash,
      }).ok,
    ).toBe(false);
  });

  it("adapter probes refuse without success", async () => {
    const adapter = createThinStudioAdapter();
    for (const action of [
      "probe-invalid-hash",
      "probe-invalid-branch",
      "probe-invalid-head",
      "probe-invalid-allowlist",
      "probe-missing-decider",
      "probe-timeout",
      "probe-incomplete-report",
      "probe-missing-proof",
      "probe-live-port",
      "probe-write-escape",
    ] as const) {
      const res = await adapter.forward(baseReq({ action, proofDir: tmp() }));
      expect(res.ok, action).toBe(false);
      expect(res.canonicalStatus === "CLOSED" || res.canonicalStatus === "REJECTED", action).toBe(
        true,
      );
      if (action === "probe-timeout") {
        expect(res.stopOrTimeout).toBe("timeout");
        expect(res.errorCode).toMatch(/TIMEOUT/);
      }
      if (action === "stop" as never) {
        /* n/a */
      }
    }
    const stop = await adapter.forward(baseReq({ action: "stop", proofDir: tmp() }));
    expect(stop.ok).toBe(false);
    expect(stop.stopOrTimeout).toBe("STOP");
  });
});

describe("Increment B — session resume", () => {
  it("reconstructs state from journal without implicit GO", async () => {
    const adapter = createThinStudioAdapter();
    const proofDir = tmp();
    const run = await adapter.forward(baseReq({ proofDir }));
    expect(run.ok).toBe(true);
    const resumed = resumeSessionFromProofDir(proofDir);
    expect(resumed.statusSource).toBe("harness");
    expect(resumed.canonicalStatus).toBe("CLOSED");
    expect(resumed.goValid).toBe(false);
    expect(resumed.events.length).toBeGreaterThan(0);
    expect(resumed.report).toBeTruthy();

    const stoppedDir = tmp();
    await adapter.forward(baseReq({ action: "stop", proofDir: stoppedDir }));
    const resumedStop = resumeSessionFromProofDir(stoppedDir);
    expect(resumedStop.ok).toBe(false);
    expect(resumedStop.stopOrTimeout).toBe("STOP");
    expect(resumedStop.refusalReason).toBeTruthy();
  });
});
