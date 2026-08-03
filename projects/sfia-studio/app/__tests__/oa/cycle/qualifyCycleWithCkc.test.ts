import { FixedClock } from "@/lib/oa/doctrine";
import {
  CkcQualificationResolver,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  MemoryCycleAuditJournal,
  QualifyCycleWithCkc,
  type QualifyCycleExecutor,
  type QualifyCycleWithCkcRequest,
} from "@/lib/oa/cycle";
import { describe, expect, it, vi } from "vitest";

const NOW = "2026-08-03T07:10:00.000Z";

function request(
  overrides: Partial<QualifyCycleWithCkcRequest> = {},
): QualifyCycleWithCkcRequest {
  return {
    cycleTypeId: "cyc:delivery",
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: "cor:d2-c",
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: false,
    },
    ...overrides,
  };
}

function executor(profile: "Light" | "Standard" | "Critical" = "Standard") {
  const execute = vi.fn<QualifyCycleExecutor["execute"]>().mockResolvedValue({
    ok: true,
    recommendation: {
      recommendedProfile: profile,
      rationale: `T-A2 ${profile}`,
      criticalSignalsPresent: profile === "Critical",
      isMorrisDecision: false,
      requiresJustificationForCritical: profile === "Critical",
      capitalizationViaCycleTypeId: false,
    },
  });
  return { execute } satisfies QualifyCycleExecutor;
}

describe("V3.1-D2-C QualifyCycleWithCkc", () => {
  it("orchestrates projection, resolution, proof and QualifyCycle exactly once", async () => {
    const qualifyCycle = executor("Standard");
    const audit = new MemoryCycleAuditJournal();
    const useCase = new QualifyCycleWithCkc(
      new CkcQualificationResolver(),
      qualifyCycle,
      new FixedClock(NOW),
      audit,
    );

    const result = await useCase.execute(
      request({ objective: "ignored by scoring", scope: "read-only" }),
    );

    expect(result.state).toBe("success");
    if (result.state !== "success") throw new Error(result.message);
    expect(result.recommendedProfile).toBe("Standard");
    expect(result.proof.consumed).toBe(true);
    expect(result.isMorrisDecision).toBe(false);
    expect(qualifyCycle.execute).toHaveBeenCalledTimes(1);
    expect(qualifyCycle.execute).toHaveBeenCalledWith({
      signals: request().signals,
      cycleTypeId: "cyc:delivery",
      objective: "ignored by scoring",
      scope: "read-only",
    });
    expect(audit.events.map(({ event }) => event)).toEqual([
      "oa.ckc.qualification_started",
      "oa.ckc.qualification_succeeded",
      "oa.ckc.result_produced",
    ]);
    for (const event of audit.events) {
      expect(event).not.toHaveProperty("objective");
      expect(event).not.toHaveProperty("scope");
      expect(event).not.toHaveProperty("signals");
      expect(event).not.toHaveProperty("proof");
    }
  });

  it.each([
    "structuralChange",
    "securityImpact",
    "architectureImpact",
    "dataImpact",
    "irreversible",
    "lowRiskBounded",
  ] as const)("rejects missing %s before QualifyCycle", async (missing) => {
    const qualifyCycle = executor();
    const signals = { ...request().signals } as Record<string, boolean>;
    delete signals[missing];
    const useCase = new QualifyCycleWithCkc(
      new CkcQualificationResolver(),
      qualifyCycle,
      new FixedClock(NOW),
    );

    const result = await useCase.execute(
      request({
        signals: signals as QualifyCycleWithCkcRequest["signals"],
      }),
    );

    expect(result).toMatchObject({
      state: "failure",
      code: "SIGNALS_INCOMPLETE",
      blocking: true,
    });
    expect(result).not.toHaveProperty("proof");
    expect(result).not.toHaveProperty("recommendedProfile");
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });

  it("distinguishes explicit false from absence", async () => {
    const qualifyCycle = executor("Light");
    const useCase = new QualifyCycleWithCkc(
      new CkcQualificationResolver(),
      qualifyCycle,
      new FixedClock(NOW),
    );

    const result = await useCase.execute(
      request({
        signals: {
          structuralChange: false,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      }),
    );
    expect(result.state).toBe("success");
    expect(qualifyCycle.execute).toHaveBeenCalledTimes(1);
  });

  it.each([
    ["unknown type", { cycleTypeId: "cyc:missing" }, "CYCLE_TYPE_UNKNOWN"],
    [
      "catalog version",
      { catalogVersion: "stale" },
      "CATALOG_VERSION_INCOMPATIBLE",
    ],
    [
      "catalog hash",
      { catalogHash: "sha256:stale" },
      "CATALOG_FINGERPRINT_STALE",
    ],
  ] as const)("fails closed for %s without QualifyCycle", async (_label, overrides, code) => {
    const qualifyCycle = executor();
    const result = await new QualifyCycleWithCkc(
      new CkcQualificationResolver(),
      qualifyCycle,
      new FixedClock(NOW),
    ).execute(request(overrides));

    expect(result).toMatchObject({ state: "failure", code });
    expect(result).not.toHaveProperty("proof");
    expect(result).not.toHaveProperty("consumed");
    expect(result).not.toHaveProperty("recommendedProfile");
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });

  it("rejects requestedProfile at the public TypeScript boundary", () => {
    const invalid: QualifyCycleWithCkcRequest = {
      ...request(),
      // @ts-expect-error requestedProfile is deliberately not a D2-C input.
      requestedProfile: "Critical",
    };
    expect(invalid).toHaveProperty("requestedProfile");
  });

  it("rejects runtime requestedProfile and extra signal keys without QualifyCycle", async () => {
    const qualifyCycle = executor();
    const useCase = new QualifyCycleWithCkc(
      new CkcQualificationResolver(),
      qualifyCycle,
      new FixedClock(NOW),
    );
    const withRequestedProfile = {
      ...request(),
      requestedProfile: "Critical",
    } as unknown as QualifyCycleWithCkcRequest;
    const withExtraSignal = {
      ...request(),
      signals: { ...request().signals, inventedScore: true },
    } as unknown as QualifyCycleWithCkcRequest;

    await expect(useCase.execute(withRequestedProfile)).resolves.toMatchObject({
      state: "failure",
      code: "SIGNALS_INCOMPLETE",
    });
    await expect(useCase.execute(withExtraSignal)).resolves.toMatchObject({
      state: "failure",
      code: "SIGNALS_INCOMPLETE",
    });
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });
});
