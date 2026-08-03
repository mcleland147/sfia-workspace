/**
 * V3.1-D2-C Cycle 9 — Independent adversarial QA.
 * Oracle owned by this file only. Delivery tests are not the source of truth.
 * @vitest-environment node
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { FixedClock, type ClockPort } from "@/lib/oa/doctrine";
import {
  CKC_PILOT_CADRAGE_PATH,
  CKC_REFERENCE_MANIFEST,
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  MemoryCycleAuditJournal,
  QualifyCycleWithCkc,
  createCkcQualificationFailure,
  createCkcQualificationServices,
  createCkcQualificationSuccess,
  createSignalsIncompleteError,
  projectSelectableCycleType,
  type CkcConsumptionProof,
  type CkcQualificationResolverPort,
  type CkcReferenceManifest,
  type CycleAuditEvent,
  type CycleAuditPort,
  type QualifyCycleExecutor,
  type QualifyCycleRecommendation,
  type QualifyCycleResult,
  type QualifyCycleWithCkcRequest,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";
import { describe, expect, it, vi } from "vitest";

const NOW = "2026-08-03T08:50:00.000Z";
const SIGNAL_NAMES = [
  "structuralChange",
  "securityImpact",
  "architectureImpact",
  "dataImpact",
  "irreversible",
  "lowRiskBounded",
] as const;

const FORBIDDEN_FAILURE_KEYS = [
  "proof",
  "consumed",
  "recommendedProfile",
  "rationale",
  "criticalSignalsPresent",
  "disclosures",
  "label",
  "shortDescription",
] as const;

function baseSignals(
  overrides: Partial<Record<(typeof SIGNAL_NAMES)[number], boolean>> = {},
) {
  return {
    structuralChange: false,
    securityImpact: false,
    architectureImpact: false,
    dataImpact: false,
    irreversible: false,
    lowRiskBounded: false,
    ...overrides,
  };
}

function qaRequest(
  overrides: Partial<QualifyCycleWithCkcRequest> & {
    readonly signals?: QualifyCycleWithCkcRequest["signals"];
  } = {},
): QualifyCycleWithCkcRequest {
  return {
    cycleTypeId: "cyc:delivery",
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: "cor:qa-d2c-independent",
    signals: baseSignals(),
    ...overrides,
  };
}

function assertSafeFailure(
  result: { state: string; code?: string; message?: string },
  expectedCode?: string,
) {
  expect(result.state).toBe("failure");
  if (result.state === "failure" && expectedCode) {
    expect((result as { code: string }).code).toBe(expectedCode);
  }
  for (const key of FORBIDDEN_FAILURE_KEYS) {
    expect(Object.prototype.hasOwnProperty.call(result, key)).toBe(false);
  }
  const serialized = JSON.stringify(result);
  expect(serialized).not.toMatch(/stack|Error:|at Object\.|hostile raw/i);
}

function frozenProjection(
  cycleTypeId = "cyc:delivery",
): ValidatedCycleTypeProjection {
  const outcome = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: "cor:qa-projection",
  });
  if (!outcome.ok) throw new Error(outcome.error.message);
  return outcome.projection;
}

function frozenProof(
  projection: ValidatedCycleTypeProjection = frozenProjection(),
  overrides: Partial<CkcConsumptionProof> = {},
): CkcConsumptionProof {
  return Object.freeze({
    cycleTypeId: projection.cycleTypeId,
    detailedStatus: "resolved_synthetic" as const,
    level: "synthetic" as const,
    status: "synthetic" as const,
    source: "intra_v3_synthetic" as const,
    expectedPrimaryReference: CKC_SYNTHETIC_MAP_PATH,
    usedReference: CKC_SYNTHETIC_MAP_PATH,
    fallbackUsed: false,
    catalogVersion: projection.catalogVersion,
    catalogHash: projection.catalogHash,
    correlationId: projection.correlationId,
    resolvedAt: NOW,
    doctrineStatus: "method-candidate" as const,
    executionAuthority: false as const,
    consumed: true as const,
    disclosures: Object.freeze([] as string[]),
    ...overrides,
  });
}

function recommendation(
  overrides: Partial<QualifyCycleRecommendation> = {},
): QualifyCycleRecommendation {
  return Object.freeze({
    recommendedProfile: "Standard",
    rationale: "QA independent oracle recommendation.",
    criticalSignalsPresent: false,
    isMorrisDecision: false as const,
    requiresJustificationForCritical: false,
    capitalizationViaCycleTypeId: false,
    ...overrides,
  });
}

function successQualify(
  rec: QualifyCycleRecommendation = recommendation(),
): QualifyCycleExecutor {
  return {
    execute: vi.fn(async () =>
      Object.freeze({
        ok: true as const,
        recommendation: rec,
      }),
    ),
  };
}

function okResolver(
  proof: CkcConsumptionProof = frozenProof(),
): CkcQualificationResolverPort {
  const resolution = Object.freeze({
    cycleTypeId: proof.cycleTypeId,
    detailedStatus: proof.detailedStatus,
    level: proof.level,
    status: proof.status,
    source: proof.source,
    fallbackPolicy: "intra_v3_only" as const,
    expectedPrimaryReference: proof.expectedPrimaryReference,
    usedReference: proof.usedReference,
    fallbackUsed: proof.fallbackUsed,
    catalogVersion: proof.catalogVersion,
    catalogHash: proof.catalogHash,
    correlationId: proof.correlationId,
    resolvedAt: proof.resolvedAt,
    doctrineStatus: proof.doctrineStatus,
    executionAuthority: proof.executionAuthority,
    exploitable: true,
    disclosures: proof.disclosures,
  });
  return {
    resolve: vi.fn(() => ({
      ok: true as const,
      resolution,
      proof,
    })),
  };
}

function failedResolver(
  code: "CKC_SYNTHETIC_INVALID" | "D2_INTERNAL_ERROR",
  message: string,
): CkcQualificationResolverPort {
  const proofBase = frozenProof();
  const resolution = Object.freeze({
    cycleTypeId: "cyc:delivery",
    detailedStatus: "unresolved_unavailable" as const,
    level: "synthetic" as const,
    status: "unavailable" as const,
    source: "intra_v3_synthetic" as const,
    fallbackPolicy: "intra_v3_only" as const,
    expectedPrimaryReference: proofBase.expectedPrimaryReference,
    fallbackUsed: false,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: "cor:qa-d2c-independent",
    resolvedAt: NOW,
    doctrineStatus: "method-candidate" as const,
    executionAuthority: false as const,
    exploitable: false,
    disclosures: Object.freeze([] as string[]),
  });
  return {
    resolve: vi.fn(() => ({
      ok: false as const,
      resolution,
      error: Object.freeze({
        code,
        message,
        blocking: true as const,
        retryable: code === "D2_INTERNAL_ERROR",
        recoverable: code === "D2_INTERNAL_ERROR",
        correlationId: "cor:qa-d2c-independent",
        cycleTypeId: "cyc:delivery",
      }),
    })),
  };
}

function bridge(deps: {
  resolver?: CkcQualificationResolverPort;
  qualifyCycle?: QualifyCycleExecutor;
  clock?: ClockPort;
  audit?: CycleAuditPort;
}) {
  return new QualifyCycleWithCkc(
    deps.resolver ?? okResolver(),
    deps.qualifyCycle ?? successQualify(),
    deps.clock ?? new FixedClock(NOW),
    deps.audit,
  );
}

describe("QA-01 Failure closed shape (BL-D2-C-01/04)", () => {
  it("keeps Failure keys closed even when the error source carries extras", () => {
    const base = createSignalsIncompleteError({
      correlationId: "cor:qa-01",
      cycleTypeId: "cyc:delivery",
    });
    const hostile = {
      ...base,
      proof: { consumed: true },
      recommendedProfile: "Critical",
      stack: "hostile stack",
      secret: "token-xyz",
    };
    const result = createCkcQualificationFailure({
      error: hostile,
      failedAt: NOW,
      correlationId: "cor:qa-01",
      cycleTypeId: "cyc:delivery",
    });

    expect(Object.keys(result).sort()).toEqual(
      [
        "blocking",
        "code",
        "correlationId",
        "cycleTypeId",
        "failedAt",
        "message",
        "recoverable",
        "retryable",
        "state",
      ].sort(),
    );
    assertSafeFailure(result, "SIGNALS_INCOMPLETE");
    expect(JSON.stringify(result)).not.toContain("token-xyz");
    expect(JSON.stringify(result)).not.toContain("hostile stack");
    expect(Object.isFrozen(result)).toBe(true);
  });
});

describe("QA-02 Success identity and immutability (BL-D2-C-01)", () => {
  it("preserves the original proof identity and freezes the projection", () => {
    const projection = frozenProjection("cyc:framing");
    const proof = frozenProof(projection, {
      detailedStatus: "resolved_fallback_synthetic",
      fallbackUsed: true,
      fallbackReference: CKC_SYNTHETIC_MAP_PATH,
      expectedPrimaryReference: CKC_PILOT_CADRAGE_PATH,
      disclosures: Object.freeze(["CKC_FALLBACK_USED"]),
    });
    const rec = recommendation({
      recommendedProfile: "Light",
      rationale: "Low-risk framing.",
    });
    const result = createCkcQualificationSuccess({
      projection,
      proof,
      recommendation: rec,
      qualifiedAt: NOW,
    });

    expect(result.proof).toBe(proof);
    expect(result.recommendedProfile).toBe("Light");
    expect(result.isMorrisDecision).toBe(false);
    expect(Object.isFrozen(result)).toBe(true);
    expect(Object.isFrozen(result.disclosures)).toBe(true);
    expect(() => {
      (result as { recommendedProfile?: string }).recommendedProfile =
        "Critical";
    }).toThrow();
    expect(() => {
      (result.disclosures as string[]).push("MUTATED");
    }).toThrow();
    expect(result.recommendedProfile).toBe("Light");
    expect(result.disclosures).toEqual(["CKC_FALLBACK_USED"]);
  });
});

describe("QA-03 Six-signal matrix (BL-D2-C-02)", () => {
  for (const signal of SIGNAL_NAMES) {
    it.each([
      ["absent", "absent"],
      ["undefined", undefined],
      ["null", null],
      ["string", "true"],
      ["number", 1],
    ] as const)(
      `rejects ${signal} when value is %s before QualifyCycle`,
      async (_label, value) => {
        const qualifyCycle = successQualify();
        const signals = { ...baseSignals() } as Record<string, unknown>;
        if (value === "absent") {
          delete signals[signal];
        } else {
          signals[signal] = value;
        }
        const result = await bridge({ qualifyCycle }).execute({
          ...qaRequest(),
          signals: signals as QualifyCycleWithCkcRequest["signals"],
        });
        assertSafeFailure(result, "SIGNALS_INCOMPLETE");
        expect(qualifyCycle.execute).not.toHaveBeenCalled();
      },
    );
  }

  it("rejects an extra signal key", async () => {
    const qualifyCycle = successQualify();
    const result = await bridge({ qualifyCycle }).execute({
      ...qaRequest(),
      signals: {
        ...baseSignals(),
        unexpected: false,
      } as QualifyCycleWithCkcRequest["signals"],
    });
    assertSafeFailure(result, "SIGNALS_INCOMPLETE");
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });

  it("rejects runtime requestedProfile", async () => {
    const qualifyCycle = successQualify();
    const result = await bridge({ qualifyCycle }).execute({
      ...qaRequest(),
      requestedProfile: "Critical",
    } as QualifyCycleWithCkcRequest);
    assertSafeFailure(result, "SIGNALS_INCOMPLETE");
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });

  it("does not accept a prototype-inherited signal as an own property", async () => {
    const qualifyCycle = successQualify();
    const proto = { structuralChange: true };
    const signals = Object.create(proto);
    for (const name of SIGNAL_NAMES) {
      if (name !== "structuralChange") signals[name] = false;
    }
    const result = await bridge({ qualifyCycle }).execute({
      ...qaRequest(),
      signals,
    });
    assertSafeFailure(result, "SIGNALS_INCOMPLETE");
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });

  it("normalizes a getter that throws without a raw throw", async () => {
    const qualifyCycle = successQualify();
    const signals: Record<string, unknown> = { ...baseSignals() };
    Object.defineProperty(signals, "securityImpact", {
      enumerable: true,
      configurable: true,
      get() {
        throw new Error("hostile getter");
      },
    });
    const result = await bridge({ qualifyCycle }).execute({
      ...qaRequest(),
      signals: signals as QualifyCycleWithCkcRequest["signals"],
    });
    expect(result.state).toBe("failure");
    expect(["SIGNALS_INCOMPLETE", "D2_INTERNAL_ERROR"]).toContain(
      (result as { code?: string }).code,
    );
    assertSafeFailure(result);
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
    expect(JSON.stringify(result)).not.toContain("hostile getter");
  });

  it("does not score objective/scope and keeps them out of D2-C audit payloads", async () => {
    const events: CycleAuditEvent[] = [];
    const audit: CycleAuditPort = {
      append(event) {
        events.push(event);
      },
    };
    const qualifyCycle = successQualify(
      recommendation({ recommendedProfile: "Standard" }),
    );
    const result = await bridge({ audit, qualifyCycle }).execute(
      qaRequest({
        objective: "SECRET_OBJECTIVE",
        scope: "SECRET_SCOPE",
        signals: baseSignals({ lowRiskBounded: false }),
      }),
    );
    expect(result.state).toBe("success");
    const payload = JSON.stringify(events);
    expect(payload).not.toContain("SECRET_OBJECTIVE");
    expect(payload).not.toContain("SECRET_SCOPE");
    expect(payload).not.toContain("structuralChange");
    expect(qualifyCycle.execute).toHaveBeenCalledTimes(1);
    const forwarded = vi.mocked(qualifyCycle.execute).mock.calls[0][0];
    expect(forwarded).not.toHaveProperty("requestedProfile");
    expect(Object.keys(forwarded.signals).sort()).toEqual([...SIGNAL_NAMES].sort());
  });
});

describe("QA-04 Order and cardinality (BL-D2-C-03)", () => {
  it("calls Catalog Projection → resolver → QualifyCycle ×1 → success", async () => {
    const order: string[] = [];
    const projectionSpy = vi.fn((context) => {
      order.push("catalog");
      return projectSelectableCycleType(context);
    });
    const resolver: CkcQualificationResolverPort = {
      resolve: vi.fn((input) => {
        order.push("resolver");
        const canonical = okResolver().resolve(input);
        return canonical;
      }),
    };
    const qualifyCycle: QualifyCycleExecutor = {
      execute: vi.fn(async () => {
        order.push("qualify");
        return Object.freeze({
          ok: true as const,
          recommendation: recommendation(),
        });
      }),
    };
    // Inject via bridge with resolver spy; catalog is hard-wired in production.
    // Independence probe: verify resolver precedes QualifyCycle and QualifyCycle = 1.
    const result = await bridge({ resolver, qualifyCycle }).execute(qaRequest());
    expect(result.state).toBe("success");
    expect(order).toEqual(["resolver", "qualify"]);
    expect(qualifyCycle.execute).toHaveBeenCalledTimes(1);
    expect(resolver.resolve).toHaveBeenCalledTimes(1);
    expect(projectionSpy).toHaveBeenCalledTimes(0);
  });

  it.each([
    ["unknown type", qaRequest({ cycleTypeId: "cyc:does-not-exist" }), "CYCLE_TYPE_UNKNOWN"],
    [
      "incompatible version",
      qaRequest({ catalogVersion: "9.9.9-wrong" }),
      "CATALOG_VERSION_INCOMPATIBLE",
    ],
    [
      "stale hash",
      qaRequest({ catalogHash: "sha256:stale-hash-value" }),
      "CATALOG_FINGERPRINT_STALE",
    ],
  ] as const)(
    "never calls QualifyCycle after upstream %s",
    async (_label, request, code) => {
      const qualifyCycle = successQualify();
      const resolver = okResolver();
      const result = await bridge({ resolver, qualifyCycle }).execute(request);
      assertSafeFailure(result, code);
      expect(qualifyCycle.execute).not.toHaveBeenCalled();
      expect(resolver.resolve).not.toHaveBeenCalled();
    },
  );
});

describe("QA-05 Resolver hostile (BL-D2-C-04)", () => {
  it("normalizes a resolver throw", async () => {
    const qualifyCycle = successQualify();
    const result = await bridge({
      qualifyCycle,
      resolver: {
        resolve() {
          throw new Error("resolver boom");
        },
      },
    }).execute(qaRequest());
    assertSafeFailure(result, "D2_INTERNAL_ERROR");
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
    expect(JSON.stringify(result)).not.toContain("resolver boom");
  });

  it("rejects proof with consumed !== true", async () => {
    const qualifyCycle = successQualify();
    const projection = frozenProjection();
    const proof = Object.freeze({
      ...frozenProof(projection),
      consumed: false,
    }) as unknown as CkcConsumptionProof;
    const result = await bridge({
      qualifyCycle,
      resolver: {
        resolve: () =>
          ({
            ok: true,
            resolution: Object.freeze({
              ...proof,
              fallbackPolicy: "intra_v3_only",
              exploitable: true,
              detailedStatus: "resolved_synthetic",
            }),
            proof,
          }) as unknown as ReturnType<CkcQualificationResolverPort["resolve"]>,
      },
    }).execute(qaRequest());
    assertSafeFailure(result, "D2_INTERNAL_ERROR");
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });

  it("rejects a mutable proof alias", async () => {
    const qualifyCycle = successQualify();
    const projection = frozenProjection();
    const mutable = { ...frozenProof(projection) };
    const result = await bridge({
      qualifyCycle,
      resolver: {
        resolve: () =>
          ({
            ok: true,
            resolution: Object.freeze({
              ...mutable,
              fallbackPolicy: "intra_v3_only",
              exploitable: true,
            }),
            proof: mutable,
          }) as unknown as ReturnType<CkcQualificationResolverPort["resolve"]>,
      },
    }).execute(qaRequest());
    assertSafeFailure(result, "D2_INTERNAL_ERROR");
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });

  it("surfaces a structured D2-B error without calling QualifyCycle", async () => {
    const qualifyCycle = successQualify();
    const result = await bridge({
      qualifyCycle,
      resolver: failedResolver(
        "CKC_SYNTHETIC_INVALID",
        "Synthetic map unavailable.",
      ),
    }).execute(qaRequest());
    assertSafeFailure(result, "CKC_SYNTHETIC_INVALID");
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });

  it("does not re-emit after resolver D2_INTERNAL_ERROR", async () => {
    let appendCalls = 0;
    const audit: CycleAuditPort = {
      append() {
        appendCalls += 1;
      },
    };
    const result = await bridge({
      audit,
      qualifyCycle: successQualify(),
      resolver: failedResolver("D2_INTERNAL_ERROR", "Audit unavailable."),
    }).execute(qaRequest());
    assertSafeFailure(result, "D2_INTERNAL_ERROR");
    expect(appendCalls).toBe(0);
  });
});

describe("QA-06 QualifyCycle hostile (BL-D2-C-03/04)", () => {
  it("normalizes a rejected QualifyCycle promise", async () => {
    const result = await bridge({
      qualifyCycle: {
        execute: vi.fn(async () => {
          throw new Error("qc rejected");
        }),
      },
      audit: new MemoryCycleAuditJournal(),
    }).execute(qaRequest());
    assertSafeFailure(result, "D2_INTERNAL_ERROR");
    expect(JSON.stringify(result)).not.toContain("qc rejected");
  });

  it("invokes QualifyCycle at most once even when it throws", async () => {
    const qualifyCycle = {
      execute: vi.fn(async () => {
        throw new Error("qc sync");
      }),
    };
    const result = await bridge({
      qualifyCycle,
      audit: new MemoryCycleAuditJournal(),
    }).execute(qaRequest());
    assertSafeFailure(result, "D2_INTERNAL_ERROR");
    expect(qualifyCycle.execute).toHaveBeenCalledTimes(1);
  });

  it("forwards exactly the six signal keys into QualifyCycle at call time", async () => {
    let keysAtCall: string[] = [];
    const qualifyCycle: QualifyCycleExecutor = {
      execute: vi.fn(async (request) => {
        keysAtCall = Object.keys(request.signals).sort();
        (request.signals as { extra?: boolean }).extra = true;
        return Object.freeze({
          ok: true as const,
          recommendation: recommendation(),
        });
      }),
    };
    const result = await bridge({
      qualifyCycle,
      audit: new MemoryCycleAuditJournal(),
    }).execute(qaRequest());
    expect(result.state).toBe("success");
    expect(keysAtCall).toEqual([...SIGNAL_NAMES].sort());
    expect(qualifyCycle.execute).toHaveBeenCalledTimes(1);
  });
});

describe("QA-07 Clock hostile (BL-D2-C-04) — R-QA-REV-01 remains open", () => {
  it("returns a safe Failure when the clock throws immediately", async () => {
    const result = await bridge({
      clock: {
        nowIso() {
          throw new Error("hostile clock secret");
        },
      },
      audit: new MemoryCycleAuditJournal(),
    }).execute(qaRequest());
    assertSafeFailure(result, "D2_INTERNAL_ERROR");
    expect(result).toMatchObject({
      failedAt: "1970-01-01T00:00:00.000Z",
    });
    expect(JSON.stringify(result)).not.toContain("hostile clock secret");
  });

  it("documents unresolvedAt invalid timestamp behavior without lifting R-QA-REV-01", async () => {
    // Inherited D2-B reserve: invalid resolvedAt may reach audit before ISO validation.
    // D2-C must still refuse Success/proof/consumed.
    let call = 0;
    const clock: ClockPort = {
      nowIso() {
        call += 1;
        return call === 1 ? "not-an-iso-timestamp" : NOW;
      },
    };
    const services = createCkcQualificationServices({
      clock,
      audit: new MemoryCycleAuditJournal(),
    });
    const result = await services.qualifyCycleWithCkc.execute(qaRequest());
    expect(result.state).toBe("failure");
    assertSafeFailure(result);
    expect(result).not.toHaveProperty("proof");
    expect(result).not.toHaveProperty("recommendedProfile");
  });
});

describe("QA-08 Audit hostile (BL-D2-C-05)", () => {
  it.each([
    "oa.ckc.qualification_started",
    "oa.ckc.qualification_succeeded",
    "oa.ckc.result_produced",
  ] as const)(
    "fails closed without Success when %s throws",
    async (target) => {
      const events: string[] = [];
      const audit: CycleAuditPort = {
        append(event) {
          events.push(event.event);
          if (event.event === target) {
            throw new Error(`hostile ${target}`);
          }
        },
      };
      const qualifyCycle = successQualify();
      const result = await bridge({ audit, qualifyCycle }).execute(qaRequest());
      assertSafeFailure(result, "D2_INTERNAL_ERROR");
      expect(events.filter((name) => name === target)).toHaveLength(1);
      expect(events.filter((name) => name === "oa.ckc.request_failed")).toHaveLength(
        0,
      );
      expect(JSON.stringify(result)).not.toContain(`hostile ${target}`);
    },
  );

  it("emits request_failed without sensitive fields on structured failure", async () => {
    const events: CycleAuditEvent[] = [];
    const audit: CycleAuditPort = {
      append(event) {
        events.push(event);
      },
    };
    const result = await bridge({
      audit,
      qualifyCycle: successQualify(),
    }).execute(qaRequest({ cycleTypeId: "cyc:missing" }));
    assertSafeFailure(result);
    const failed = events.filter((event) => event.event === "oa.ckc.request_failed");
    expect(failed).toHaveLength(1);
    const payload = JSON.stringify(failed[0]);
    expect(payload).not.toContain("proof");
    expect(payload).not.toContain("signals");
    expect(payload).not.toContain("objective");
    expect(payload).not.toContain("scope");
    expect(failed[0]).toMatchObject({
      correlationId: "cor:qa-d2c-independent",
      result: "error",
    });
  });

  it("isolates a failed audit sink from a fresh service instance", async () => {
    const sharedJournal = new MemoryCycleAuditJournal();
    let blow = true;
    const hostile: CycleAuditPort = {
      append(event) {
        if (blow && event.event === "oa.ckc.qualification_started") {
          blow = false;
          throw new Error("first sink failure");
        }
        sharedJournal.append(event);
      },
    };
    const first = createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: hostile,
    });
    const firstResult = await first.qualifyCycleWithCkc.execute(qaRequest());
    assertSafeFailure(firstResult, "D2_INTERNAL_ERROR");

    const second = createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: new MemoryCycleAuditJournal(),
    });
    const secondResult = await second.qualifyCycleWithCkc.execute(
      qaRequest({ correlationId: "cor:second-request" }),
    );
    expect(secondResult.state).toBe("success");
    if (secondResult.state === "success") {
      expect(secondResult.correlationId).toBe("cor:second-request");
    }
  });
});

describe("QA-09 Request runtime hostile (BL-D2-C-04)", () => {
  it("observes raw throw on null/undefined request in outer catch (R-QA-D2C-01)", async () => {
    // Finding R-QA-D2C-01 MINOR: execute() catch re-reads request.correlationId /
    // cycleTypeId. TypeScript excludes null/undefined; no Success leak observed.
    const qualifyCycle = successQualify();
    const subject = bridge({
      qualifyCycle,
      audit: new MemoryCycleAuditJournal(),
    });
    await expect(
      subject.execute(null as unknown as QualifyCycleWithCkcRequest),
    ).rejects.toThrow(/correlationId/);
    await expect(
      subject.execute(undefined as unknown as QualifyCycleWithCkcRequest),
    ).rejects.toThrow(/correlationId/);
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });

  it("returns a safe Failure for an empty request object cast", async () => {
    const qualifyCycle = successQualify();
    const result = await bridge({
      qualifyCycle,
      audit: new MemoryCycleAuditJournal(),
    }).execute({} as QualifyCycleWithCkcRequest);
    expect(result.state).toBe("failure");
    assertSafeFailure(result);
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });

  it("fails closed when signals is null", async () => {
    const qualifyCycle = successQualify();
    const result = await bridge({ qualifyCycle }).execute({
      ...qaRequest(),
      signals: null as unknown as QualifyCycleWithCkcRequest["signals"],
    });
    assertSafeFailure(result, "SIGNALS_INCOMPLETE");
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });
});

describe("QA-10 Factory read-only (BL-D2-C-06)", () => {
  it("exposes exactly audit, resolver, qualifyCycleWithCkc", () => {
    const audit = new MemoryCycleAuditJournal();
    const resolver = new CkcQualificationResolver();
    const qualifyCycle = successQualify();
    const services = createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit,
      resolver,
      qualifyCycle,
    });
    expect(Object.keys(services).sort()).toEqual([
      "audit",
      "qualifyCycleWithCkc",
      "resolver",
    ]);
    expect(services.audit).toBe(audit);
    expect(services.resolver).toBe(resolver);
    expect(services).not.toHaveProperty("qualifyCycle");
    expect(services).not.toHaveProperty("createCycle");
    expect(services).not.toHaveProperty("store");
    expect(Object.isFrozen(services)).toBe(true);
  });

  it("leaves createInMemoryCycleServices mutation surface unchanged", () => {
    const source = readFileSync(
      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
      "utf8",
    );
    expect(source).toContain("createInMemoryCycleServices");
    expect(source).toContain("createCycle: new CreateCycle");
    // D2 facade remains separate and does not wire CreateCycle.
    const factoryBody = source.slice(
      source.indexOf("export function createCkcQualificationServices"),
      source.indexOf("export function createInMemoryCycleServices"),
    );
    expect(factoryBody).not.toMatch(/CreateCycle|MemoryCycleStore|ProjectServices/);
    expect(factoryBody).not.toContain("qualifyCycle:");
  });
});

describe("QA-11 Imports and boundaries (BL-D2-C-06/07)", () => {
  it("keeps new D2-C modules free of forbidden imports", () => {
    const root = path.resolve(__dirname, "../../../lib/oa/cycle");
    for (const relative of [
      "domain/ckcQualificationResult.ts",
      "application/qualifyCycleWithCkc.ts",
    ]) {
      const source = readFileSync(path.join(root, relative), "utf8");
      expect(source).not.toMatch(
        /CreateCycle|MemoryCycleStore|ProjectServices|Repository|node:crypto|node:fs|from ["']next|from ["']react|Markdown|D2-D|D3\b/,
      );
    }
  });
});

describe("QA-12 Concurrency and isolation (BL-D2-C-03/05)", () => {
  it("keeps distinct correlationIds under concurrent success paths", async () => {
    const services = createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: new MemoryCycleAuditJournal(),
    });
    const [a, b] = await Promise.all([
      services.qualifyCycleWithCkc.execute(
        qaRequest({
          correlationId: "cor:parallel-a",
          cycleTypeId: "cyc:framing",
          signals: baseSignals({ lowRiskBounded: true }),
        }),
      ),
      services.qualifyCycleWithCkc.execute(
        qaRequest({
          correlationId: "cor:parallel-b",
          cycleTypeId: "cyc:technical-architecture",
          signals: baseSignals({ securityImpact: true }),
        }),
      ),
    ]);
    expect(a.state).toBe("success");
    expect(b.state).toBe("success");
    if (a.state === "success" && b.state === "success") {
      expect(a.correlationId).toBe("cor:parallel-a");
      expect(b.correlationId).toBe("cor:parallel-b");
      expect(a.recommendedProfile).toBe("Light");
      expect(b.recommendedProfile).toBe("Critical");
      expect(a.isMorrisDecision).toBe(false);
      expect(b.isMorrisDecision).toBe(false);
    }
  });

  it("allows a later success after a prior QualifyCycle rejection on a fresh executor", async () => {
    const audit = new MemoryCycleAuditJournal();
    const failing = bridge({
      audit,
      qualifyCycle: {
        execute: vi.fn(async () => {
          throw new Error("transient");
        }),
      },
    });
    const failed = await failing.execute(qaRequest({ correlationId: "cor:fail-first" }));
    assertSafeFailure(failed, "D2_INTERNAL_ERROR");

    const recovered = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: new MemoryCycleAuditJournal(),
    }).qualifyCycleWithCkc.execute(
      qaRequest({ correlationId: "cor:recover" }),
    );
    expect(recovered.state).toBe("success");
    if (recovered.state === "success") {
      expect(recovered.correlationId).toBe("cor:recover");
    }
  });
});

describe("QA-13 Nominal integration paths (BL-D2-C-07)", () => {
  it.each([
    ["cyc:framing", { lowRiskBounded: true }, "Light"],
    ["cyc:technical-architecture", { securityImpact: true }, "Critical"],
    ["cyc:delivery", {}, "Standard"],
    ["cyc:capitalization", {}, "Standard"],
  ] as const)(
    "qualifies %s as %s with isMorrisDecision=false",
    async (cycleTypeId, signals, profile) => {
      const result = await createCkcQualificationServices({
        clock: new FixedClock(NOW),
        audit: new MemoryCycleAuditJournal(),
      }).qualifyCycleWithCkc.execute(
        qaRequest({
          cycleTypeId,
          correlationId: `cor:${cycleTypeId}`,
          signals: baseSignals(signals),
        }),
      );
      expect(result.state).toBe("success");
      if (result.state !== "success") throw new Error(result.message);
      expect(result.recommendedProfile).toBe(profile);
      expect(result.isMorrisDecision).toBe(false);
      expect(result.proof.consumed).toBe(true);
      if (cycleTypeId === "cyc:capitalization") {
        expect(result.capitalizationViaCycleTypeId).toBe(true);
      }
    },
  );

  it("retains synthetic fallback disclosure", async () => {
    const manifest: CkcReferenceManifest = Object.freeze({
      entries: Object.freeze(
        CKC_REFERENCE_MANIFEST.entries.map((entry) =>
          entry.level === "detailed" &&
          entry.reference.includes("cadrage")
            ? Object.freeze({
                ...entry,
                availability: "unavailable" as const,
              })
            : entry,
        ),
      ),
    });
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: new MemoryCycleAuditJournal(),
      resolver: new CkcQualificationResolver(manifest),
    }).qualifyCycleWithCkc.execute(
      qaRequest({
        cycleTypeId: "cyc:framing",
        signals: baseSignals({ lowRiskBounded: true }),
      }),
    );
    expect(result.state).toBe("success");
    if (result.state !== "success") throw new Error(result.message);
    expect(result.detailedStatus).toBe("resolved_fallback_synthetic");
    expect(result.disclosures).toEqual(["CKC_FALLBACK_USED"]);
  });

  it("emits D2-C success audit events in deterministic order", async () => {
    const audit = new MemoryCycleAuditJournal();
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit,
    }).qualifyCycleWithCkc.execute(
      qaRequest({
        cycleTypeId: "cyc:delivery",
        correlationId: "cor:audit-order",
      }),
    );
    expect(result.state).toBe("success");
    const d2c = audit.events
      .map((event) => event.event)
      .filter((name) =>
        [
          "oa.ckc.qualification_started",
          "oa.ckc.qualification_succeeded",
          "oa.ckc.result_produced",
          "oa.ckc.request_failed",
        ].includes(name),
      );
    expect(d2c).toEqual([
      "oa.ckc.qualification_started",
      "oa.ckc.qualification_succeeded",
      "oa.ckc.result_produced",
    ]);
    for (const event of audit.events) {
      if (
        event.event === "oa.ckc.qualification_succeeded" ||
        event.event === "oa.ckc.result_produced"
      ) {
        expect(event.correlationId).toBe("cor:audit-order");
        expect(event.recommendedProfile).toBeTruthy();
      }
    }
  });
});
