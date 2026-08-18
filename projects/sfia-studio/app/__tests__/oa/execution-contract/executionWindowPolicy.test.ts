/**
 * ARCH-WOP-1 — central Pre-M6 execution window catalog.
 * ZERO REAL. Fake clock only. No client timeout.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  computeExecutionContractSemanticFingerprint,
  DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
  EXECUTION_WINDOW_CLASSES,
  PRE_M6_EXECUTION_WINDOW_CAP_MS,
  PRE_M6_EXECUTION_WINDOW_MS,
  assertResolvedTimeoutMs,
  resolveExecutionWindowClass,
  resolveExecutionWindowForStart,
  type ExecutionWindowClass,
} from "@/lib/oa/execution-contract";
import { boundedReadOnlyM3ResolutionProfile } from "@/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile";
import {
  MORRIS_ACTOR,
  baseBuildRequest,
  buildStack,
  registerMorris,
  seedProject,
  seedAcceptedDecision,
} from "./helpers";

const CATALOG: ReadonlyArray<readonly [ExecutionWindowClass, number]> = [
  ["short", 5 * 60 * 1000],
  ["standard", 15 * 60 * 1000],
  ["long", 30 * 60 * 1000],
  ["extended", 60 * 60 * 1000],
];

const FINGERPRINT_BASE = {
  executionContractId: "xct:window-fp",
  projectId: "prj:window-fp",
  action: "cursor.read_only.inspect",
  target: "workspace.isolated.read",
  scope: "studio.m4.real_off",
  requiredCapabilities: ["cap:cursor.bounded_readonly"],
  requiredAuthority: "N2" as const,
  constraints: ["BOUNDED READ-ONLY"],
  stopConditions: ["AUTHORITY_DENIED"],
  evidenceRequirements: ["evreq:stdout"],
  reversibility: "reversible" as const,
  idempotencyKey: "idem-window-fp-01",
};

describe("Pre-M6 execution window policy (ARCH-WOP-1)", () => {
  it("maps the four governed classes and nothing else", () => {
    expect([...EXECUTION_WINDOW_CLASSES]).toEqual([
      "short",
      "standard",
      "long",
      "extended",
    ]);
    for (const [cls, ms] of CATALOG) {
      expect(PRE_M6_EXECUTION_WINDOW_MS[cls]).toBe(ms);
      const resolved = resolveExecutionWindowClass(cls);
      expect(resolved).toEqual({
        ok: true,
        executionWindowClass: cls,
        resolvedMaxDurationMs: ms,
      });
      expect(ms).toBeLessThanOrEqual(PRE_M6_EXECUTION_WINDOW_CAP_MS);
    }
  });

  it("defaults bounded read-only M3 to standard = 15 min", () => {
    expect(DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS).toBe("standard");
    expect(PRE_M6_EXECUTION_WINDOW_MS.standard).toBe(15 * 60 * 1000);
    expect(boundedReadOnlyM3ResolutionProfile().executionWindowClass).toBe(
      "standard",
    );
  });

  it("rejects invalid classes and cannot generate >60 min", () => {
    expect(resolveExecutionWindowClass("huge")).toEqual({
      ok: false,
      reason: "execution_window_class_invalid",
    });
    expect(resolveExecutionWindowClass(61 * 60 * 1000)).toEqual({
      ok: false,
      reason: "execution_window_class_invalid",
    });
    expect(PRE_M6_EXECUTION_WINDOW_CAP_MS).toBe(60 * 60 * 1000);
    expect(assertResolvedTimeoutMs(PRE_M6_EXECUTION_WINDOW_CAP_MS + 1)).toBe(
      false,
    );
    expect(assertResolvedTimeoutMs(0)).toBe(false);
    expect(assertResolvedTimeoutMs(PRE_M6_EXECUTION_WINDOW_MS.standard)).toBe(
      true,
    );
  });

  it("legacy missing class resolves to standard at Start without rewriting the contract", () => {
    const missing = resolveExecutionWindowForStart({
      defaultClassIfMissing: DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
    });
    expect(missing).toEqual({
      ok: true,
      executionWindowClass: "standard",
      resolvedMaxDurationMs: 15 * 60 * 1000,
    });
    expect(
      resolveExecutionWindowForStart({ executionWindowClass: undefined }),
    ).toEqual({ ok: false, reason: "execution_window_class_missing" });
  });

  it("fingerprint changes when class changes; legacy omit stays valid", () => {
    const legacy = computeExecutionContractSemanticFingerprint(FINGERPRINT_BASE);
    const standard = computeExecutionContractSemanticFingerprint({
      ...FINGERPRINT_BASE,
      executionWindowClass: "standard",
    });
    const long = computeExecutionContractSemanticFingerprint({
      ...FINGERPRINT_BASE,
      executionWindowClass: "long",
    });
    expect(legacy).toMatch(/^[a-f0-9]{64}$/);
    expect(standard).not.toBe(legacy);
    expect(long).not.toBe(standard);
    expect(long).not.toBe(legacy);
  });

  it("persists class on new contracts and leaves historical omit untouched", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const withClass = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:window-new",
        idempotencyKey: "idem-window-new-01",
        executionWindowClass: "long",
      }),
    );
    expect(withClass.ok).toBe(true);
    if (!withClass.ok) return;
    expect(withClass.contract.executionWindowClass).toBe("long");
    const reloaded = await stack.execution.contracts.findById("xct:window-new");
    expect(reloaded?.executionWindowClass).toBe("long");

    const legacy = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:window-legacy",
        idempotencyKey: "idem-window-legacy-01",
      }),
    );
    expect(legacy.ok).toBe(true);
    if (!legacy.ok) return;
    expect(legacy.contract.executionWindowClass).toBeUndefined();

    const invalid = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:window-invalid",
        idempotencyKey: "idem-window-invalid-01",
        executionWindowClass: "huge" as never,
      }),
    );
    expect(invalid.ok).toBe(false);
  });
});
