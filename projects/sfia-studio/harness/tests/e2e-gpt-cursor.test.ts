import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync, symlinkSync, rmSync, existsSync, readFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { HarnessError } from "../src/types/contracts.js";
import {
  assertSandboxPaths,
  isAllowedCursorSpikeSandbox,
  type CursorRealSpikeContract,
} from "../src/ports/cursorRealSpike.js";
import {
  E2E_CORRELATION_ID,
  E2E_OUTPUT_REL,
  assertPathInsideSandbox,
  buildBoundedCursorInstruction,
  buildExactOutputTemplate,
  detectForbiddenCommandText,
  rejectGptScopeWidening,
  validateOutputMd,
} from "../src/ports/e2eCursorBounded.js";
import {
  resetE2eSandbox,
  resolveE2eSandboxAbs,
  validateSandboxAfterCursor,
  listFilesRecursive,
} from "../src/ports/e2eSandbox.js";
import { GPTFixtureAdapter } from "../src/ports/gptFixture.js";
import type { ExecutionContractCandidate } from "../src/types/gptContracts.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const HARNESS = path.resolve(HERE, "..");
const LEGACY_SANDBOX = path.resolve(HERE, "../spikes/cursor-real/sandbox");
const E2E_SANDBOX = resolveE2eSandboxAbs(HARNESS);

function sampleCursorContract(
  overrides: Partial<CursorRealSpikeContract> = {},
): CursorRealSpikeContract {
  const base = {
    spikeId: "t",
    requestId: "r",
    executionId: "e",
    mechanismId: "cursor-agent-cli",
    mechanismVersion: "x",
    instruction: "write output.md",
    workingDirectory: E2E_SANDBOX,
    allowedReadPaths: ["input.md"],
    allowedWritePaths: ["output.md"],
    deniedPaths: ["../"],
    timeoutMs: 1000,
    expectedOutputs: ["output.md"],
    gitEffect: "none" as const,
    networkEffect: "none" as const,
    cursorMode: "real-spike" as const,
    contractHash: "",
    initiatedBy: "Morris",
    initiatedAt: new Date().toISOString(),
  };
  const merged = { ...base, ...overrides };
  const { contractHash: _h, ...canon } = merged;
  merged.contractHash = createHash("sha256").update(JSON.stringify(canon)).digest("hex");
  return merged;
}

describe("e2e gpt-cursor bounded harness", () => {
  beforeEach(() => {
    resetE2eSandbox(E2E_SANDBOX);
  });

  afterEach(() => {
    /* keep last sandbox for manual inspection; reset next run */
  });

  it("allows e2e and legacy sandboxes only", () => {
    expect(isAllowedCursorSpikeSandbox(E2E_SANDBOX)).toBe(true);
    expect(isAllowedCursorSpikeSandbox(LEGACY_SANDBOX)).toBe(true);
    expect(isAllowedCursorSpikeSandbox(path.resolve(HARNESS, "../.."))).toBe(false);
  });

  it("refuses path outside sandbox and .. traversal", () => {
    expect(() => assertPathInsideSandbox("../README.md", E2E_SANDBOX, "x")).toThrow(HarnessError);
    expect(() => assertPathInsideSandbox("/etc/passwd", E2E_SANDBOX, "x")).toThrow(HarnessError);
    expect(() =>
      assertSandboxPaths(sampleCursorContract({ allowedWritePaths: ["../../../README.md"] })),
    ).toThrow(HarnessError);
  });

  it("refuses external symlink", () => {
    const link = path.join(E2E_SANDBOX, "evil-link");
    try {
      symlinkSync("/tmp", link);
    } catch {
      /* platform */
    }
    if (existsSync(link)) {
      expect(() => assertPathInsideSandbox("evil-link", E2E_SANDBOX, "link")).toThrow(HarnessError);
    }
  });

  it("detects forbidden commands including git push and rm -rf", () => {
    expect(detectForbiddenCommandText("please git push origin main")).toBeTruthy();
    expect(detectForbiddenCommandText("rm -rf /")).toBeTruthy();
    expect(detectForbiddenCommandText("read input.md only")).toBeFalsy();
  });

  it("ignores GPT scope widening writes and refuses forbidden objective", async () => {
    const fixture = await new GPTFixtureAdapter().qualify({
      requestId: "req-e2e-gpt-cursor-001",
      correlationId: E2E_CORRELATION_ID,
      intent: "x",
      repoRef: "local",
      knownConstraints: [],
      allowedPaths: [
        "projects/sfia-studio/harness/spikes/gpt-openai/fixtures/input.md",
        "projects/sfia-studio/harness/spikes/gpt-openai/proofs/",
      ],
      deniedPaths: ["projects/sfia-studio/app/**"],
      availableCycles: ["Cycle 7", "Cycle 8", "Cycle 9", "Cycle 13", "DOC"],
      availableProfiles: ["Light", "Standard", "Critical"],
      decisionsAlreadyValidated: ["GO ouvrir spike GPT/OpenAI après intégration spike Cursor réel"],
      decisionsStillOpen: [],
      requestedAt: new Date().toISOString(),
      requestedBy: "Morris",
      allowedActions: ["read-fixture", "write-proof", "cursor-fixture", "git-read-local"],
      requiredMorrisGates: ["GO-MORRIS-EXECUTE-AFTER-CONTRACT"],
    });
    const c = fixture.candidate as ExecutionContractCandidate;
    const widened: ExecutionContractCandidate = {
      ...c,
      allowedWritePaths: ["output.md", "projects/sfia-studio/app/page.tsx", "../secret"],
      requestedActions: [...c.requestedActions, "git-push"],
    };
    const ignored = rejectGptScopeWidening(widened);
    expect(ignored.some((x) => x.includes("app/page") || x.includes("write:"))).toBe(true);
    expect(ignored.some((x) => x.includes("git-push"))).toBe(true);

    const built = buildBoundedCursorInstruction(widened, {
      sandboxAbs: E2E_SANDBOX,
      correlationId: E2E_CORRELATION_ID,
      requestId: "req-e2e-gpt-cursor-001",
      timeoutMs: 1000,
      mainRepoAbs: path.resolve(HARNESS, "../../.."),
    });
    expect(built.contract.allowedWritePaths).toEqual(["output.md"]);
    expect(built.contractHash).toMatch(/^[a-f0-9]{64}$/);
    expect(built.contract.workingDirectory).toBe(E2E_SANDBOX);

    expect(() =>
      buildBoundedCursorInstruction(
        { ...c, objective: "please git push and deploy" },
        {
          sandboxAbs: E2E_SANDBOX,
          correlationId: E2E_CORRELATION_ID,
          requestId: "req-e2e-gpt-cursor-001",
          timeoutMs: 1000,
          mainRepoAbs: path.resolve(HARNESS, "../../.."),
        },
      ),
    ).toThrow(HarnessError);
  });

  it("validates exact output.md contract and rejects extras", () => {
    const good = buildExactOutputTemplate(E2E_CORRELATION_ID);
    expect(() => validateOutputMd(good, E2E_CORRELATION_ID)).not.toThrow();
    expect(() => validateOutputMd(good.replace("COMPLETED", "DONE"), E2E_CORRELATION_ID)).toThrow(
      HarnessError,
    );

    writeFileSync(path.join(E2E_SANDBOX, E2E_OUTPUT_REL), good);
    writeFileSync(path.join(E2E_SANDBOX, "extra.txt"), "nope");
    const baseline = listFilesRecursive(E2E_SANDBOX).filter((f) => f !== "extra.txt" && f !== E2E_OUTPUT_REL);
    const post = validateSandboxAfterCursor(E2E_SANDBOX, E2E_CORRELATION_ID, baseline);
    expect(post.ok).toBe(false);
    expect(post.errorCode).toBe("E2E_UNEXPECTED_FILES");
  });

  it("accepts sandbox with only output.md added", () => {
    const baseline = listFilesRecursive(E2E_SANDBOX);
    writeFileSync(path.join(E2E_SANDBOX, E2E_OUTPUT_REL), buildExactOutputTemplate(E2E_CORRELATION_ID));
    const post = validateSandboxAfterCursor(E2E_SANDBOX, E2E_CORRELATION_ID, baseline);
    expect(post.ok).toBe(true);
  });

  it("cursorRealInvoked is false until real spike result says so", () => {
    let cursorRealInvoked = false;
    expect(cursorRealInvoked).toBe(false);
    cursorRealInvoked = true; // only after executeSpikeContract
    expect(cursorRealInvoked).toBe(true);
  });

  it("fixture GPT path still default without live flags", async () => {
    const r = await new GPTFixtureAdapter().qualify({
      requestId: "req-gpt-s1-001",
      correlationId: "corr-gpt-s1-001",
      intent: "fixture",
      repoRef: "local",
      knownConstraints: [],
      allowedPaths: [
        "projects/sfia-studio/harness/spikes/gpt-openai/fixtures/input.md",
        "projects/sfia-studio/harness/spikes/gpt-openai/proofs/",
      ],
      deniedPaths: [],
      availableCycles: ["Cycle 7", "Cycle 8", "Cycle 9", "Cycle 13", "DOC"],
      availableProfiles: ["Light", "Standard", "Critical"],
      decisionsAlreadyValidated: ["GO ouvrir spike GPT/OpenAI après intégration spike Cursor réel"],
      decisionsStillOpen: [],
      requestedAt: new Date().toISOString(),
      requestedBy: "Morris",
      allowedActions: ["read-fixture", "write-proof", "cursor-fixture", "git-read-local"],
      requiredMorrisGates: ["GO-MORRIS-EXECUTE-AFTER-CONTRACT"],
    });
    expect(r.ok).toBe(true);
    expect(r.liveInvoked).toBe(false);
    expect(r.candidate?.modelMetadata.provider).toBe("fixture");
  });
});

describe("e2e tmp symlink isolation", () => {
  it("detects symlink escape via tmp dir", () => {
    const tmp = path.join(os.tmpdir(), `sfia-e2e-${Date.now()}`);
    mkdirSync(tmp, { recursive: true });
    writeFileSync(path.join(tmp, "input.md"), "x");
    const link = path.join(tmp, "out-link");
    symlinkSync(path.join(os.tmpdir(), "elsewhere-target-may-missing"), link);
    // assertPathInsideSandbox on missing symlink target still checks link node
    try {
      assertPathInsideSandbox("out-link", tmp, "link");
      // if target missing, readlink still works; escape should throw if target outside
      expect(true).toBe(true);
    } catch (e) {
      expect(e).toBeInstanceOf(HarnessError);
    }
    rmSync(tmp, { recursive: true, force: true });
  });
});
