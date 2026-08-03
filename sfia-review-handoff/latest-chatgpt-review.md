# SFIA Studio V3.1-D2-C — Independent QA Full Review Pack

Date/heure du rapport : 2026-08-03 10:27:34 CEST (+0200)
Rôle Cursor : QA indépendante (Cycle 9)
Cycle : Cycle 9 — QA / validation
Profil SFIA : Standard
Typologie v2.4 : EVOL — phase QA

## GO Morris consommé

Formulation réelle : `GO cycle 9 — QA indépendante D2-C`
Date/heure GO : 2026-08-03 09:50 CEST (+0200)

Interprétation bornée :
GO QA INDÉPENDANTE SFIA STUDIO V3.1-D2-C QUALIFYCYCLE BRIDGE —
VALIDATE THE LOCAL EIGHT-FILE D2-C DELIVERY PACKAGE AGAINST BL-D2-C-01…07 AND THE ADOPTED FUNCTIONAL AND TECHNICAL CONTRACTS —
ADD INDEPENDENT ADVERSARIAL QA EVIDENCE ONLY —
PRESERVE ALL DELIVERY FILES AND EXISTING TEST ORACLES —
CLASSIFY FINDINGS AND PRODUCE PASS / PASS WITH RESERVES / FAIL —
CARRY R-QA-REV-01 AND R-QA-REV-02 WITHOUT LIFTING THEM —
NO CORRECTION — NO PROJECT COMMIT — NO PROJECT PUSH — NO PROJECT PR —
NO D2-D — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION

## Local Git Truth Check initial

- workspace : `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge`
- branche : `delivery/sfia-studio-v3-1-d2-c-qualify-cycle-bridge`
- HEAD : `5ca7a2603b000a468f6baea81ffc6c53acf0cd70`
- origin/main : `5ca7a2603b000a468f6baea81ffc6c53acf0cd70`
- divergence origin/main...HEAD : `0/0`
- branche distante D2-C : absente
- PR D2-C : absente
- staged : vide
- handoff source tip : `5be426889f49be869eb59b0c55c7d561578142b0`
- handoff source blob : `c047edd8bd18f74bfab919782e72cfeb9801795b`
- handoff titre : `SFIA Studio V3.1-D2-C — Delivery Full Review Pack`
- package projet : exactement huit fichiers Delivery + `.tmp-sfia-review/**`

## Sources lues

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` (candidate 0.1.0 — experimental cognitive guidance, aucune autorité d’exécution)
- `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` @ tip/blob ci-dessus
- docs 16/17/18/19 D2 framing (functional design, architecture, technical architecture, backlog)
- huit fichiers Delivery D2-C
- tests `__tests__/oa/cycle/**`
- contrats protégés D2-A/D2-B/T-A2 listés dans le GO
- scripts package / vitest en lecture seule

## Référentiel attendu

BL-D2-C-01…07 + contrats FA/TA/COMP/ERR/AUDIT adoptés :
Result Projection pure ; six signaux explicites ; orchestration CP→resolver→signals→QC×1→projection ; fail-closed ; audit additif ; factory read-only ; intégration/non-régression.

## Matrice BL-D2-C → probes QA

| Story | Probes | Résultat |
|-------|--------|----------|
| BL-D2-C-01 Result Projection | QA-01, QA-02 | PASS |
| BL-D2-C-02 Six signaux | QA-03 | PASS |
| BL-D2-C-03 Orchestration | QA-04, QA-06, QA-12, QA-13 | PASS |
| BL-D2-C-04 Fail-closed | QA-05, QA-07, QA-09 | PASS WITH MINOR R-QA-D2C-01 |
| BL-D2-C-05 Audit | QA-08, QA-13 order | PASS |
| BL-D2-C-06 Factory | QA-10, QA-11 | PASS |
| BL-D2-C-07 Intégration | QA-12, QA-13 + non-régression | PASS |

## Empreinte package Delivery

- SOURCE_DIFF_HASH_REPORTED_BY_DELIVERY = `7e17876946239e4a5679e05c6720093a88ca4e5e95bd12234171ca148ab436bc`
- DELIVERY_PACKAGE_HASH_BEFORE = `23e8ae0c0f5b52be5de05bdf417ce87ab86b72adb18c7a5836e62446a404bfb5`
- DELIVERY_PACKAGE_HASH_AFTER = `23e8ae0c0f5b52be5de05bdf417ce87ab86b72adb18c7a5836e62446a404bfb5`
- hashes identiques : **oui**
- contrats protégés vs origin/main : **aucun diff**

## Baseline Delivery avant probes

- ciblés Delivery 4 fichiers : **64/64 PASS**
- suite `__tests__/oa/cycle/` : **243/243 PASS**

## Fichier QA créé

- chemin : `projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.independent.qa.test.ts`
- nature : Vitest indépendant, oracle propre, aucun skip/only/todo
- sha256 : `6db51af01260ef18b649e642c546812882c716302697bcc91c56953c964ffbec`
- lignes : 1030

### Contenu complet

```typescript
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
```

## Liste exhaustive des scénarios et résultats

### QA-01 Failure closed shape — PASS
- Object.keys Failure fermés malgré source hostile avec proof/recommendedProfile/stack/secret
- pas de fuite token/stack ; objet frozen

### QA-02 Success identity/immutability — PASS
- `result.proof` identité conservée ; disclosures frozen ; mutation rejetée ; isMorrisDecision=false

### QA-03 Six-signal matrix — PASS (36 cas + extras)
- chaque signal : absent/undefined/null/string/number → SIGNALS_INCOMPLETE ; QualifyCycle=0
- clé supplémentaire / requestedProfile / prototype hérité → SIGNALS_INCOMPLETE ; QC=0
- getter hostile → Failure sûre (SIGNALS_INCOMPLETE ou D2_INTERNAL_ERROR) ; pas de raw throw ; QC=0
- objective/scope non scorés ; absents des payloads audit D2-C ; six clés exactes forwardées

### QA-04 Ordre et cardinalité — PASS
- succès : resolver puis QualifyCycle ×1
- type inconnu / version incompatible / hash stale (`CATALOG_FINGERPRINT_STALE`) : QC=0 et resolver=0

### QA-05 Resolver hostile — PASS
- throw → D2_INTERNAL_ERROR ; QC=0
- consumed≠true → D2_INTERNAL_ERROR ; QC=0
- proof mutable → D2_INTERNAL_ERROR ; QC=0
- CKC_SYNTHETIC_INVALID structuré → Failure ; QC=0
- D2_INTERNAL_ERROR resolver → aucune réémission audit

### QA-06 QualifyCycle hostile — PASS
- Promise rejetée → D2_INTERNAL_ERROR sûr
- throw → QC appelé exactement 1 fois
- à l’entrée de QC, exactement les six clés signaux

### QA-07 Clock hostile — PASS (R-QA-REV-01 OPEN)
- clock throw immédiat → Failure D2_INTERNAL_ERROR + failedAt epoch fallback ; pas de secret
- resolvedAt invalide via factory réelle → Failure sans proof/profil ; réserve héritée non levée

### QA-08 Audit hostile — PASS
- throw sur qualification_started / succeeded / result_produced → Failure ; pas de Success ; pas de request_failed récursif
- request_failed sans proof/signals/objective/scope
- nouvelle instance de service après panne → Success isolé

### QA-09 Request runtime hostile — PASS probes + finding MINOR
- null/undefined : raw throw observé dans le catch externe (R-QA-D2C-01)
- `{}` → Failure sûre ; QC=0
- signals=null → SIGNALS_INCOMPLETE ; QC=0

### QA-10 Factory — PASS
- clés exactes : audit, resolver, qualifyCycleWithCkc
- pas de qualifyCycle brut / CreateCycle / store
- services frozen ; deps injectées respectées
- createCkcQualificationServices sans CreateCycle/MemoryCycleStore/ProjectServices

### QA-11 Imports/frontières — PASS
- `ckcQualificationResult.ts` et `qualifyCycleWithCkc.ts` sans CreateCycle/repos/React/Next/fs/crypto/Markdown/D2-D/D3

### QA-12 Concurrence/isolation — PASS
- parallel framing Light + technical-architecture Critical ; correlationIds distincts ; isMorrisDecision=false
- recovery après QC rejection via nouvelle instance → Success

### QA-13 Nominal intégration — PASS
- framing/Light ; technical-architecture/Critical ; delivery/Standard ; capitalization/Standard + capitalizationViaCycleTypeId
- fallback synthetic + disclosure CKC_FALLBACK_USED
- ordre audit : started → succeeded → result_produced

## Ordre et cardinalité QualifyCycle

| Famille | QualifyCycle |
|---------|--------------|
| succès nominal | ×1 |
| catalogue KO / signaux KO / resolver KO / proof invalide | ×0 |
| QC throw/reject | ×1 max |
| audit/clock hostile avant QC | ×0 |

## Non-régression et validations finales

| Contrôle | Résultat |
|----------|----------|
| Independent QA | 70/70 PASS |
| Delivery+independent ciblés | 134/134 PASS |
| Régressions D2-A/D2-B | 122/122 PASS |
| Suite `__tests__/oa/cycle/` | 313/313 PASS |
| Suite complète | 1046/1046 PASS |
| typecheck | PASS |
| lint | PASS |
| build | PASS (`Compiled successfully`) |
| git diff --check | PASS |
| protected contracts vs main | PASS (no diff) |

## Findings

### R-QA-D2C-01 MINOR — OPEN

- catégorie : réserve
- exigence : BL-D2-C-04 fail-closed / pas de raw throw sur erreur interne
- scénario : `execute(null)` et `execute(undefined)` via cast QA
- fichier/symbole : `application/qualifyCycleWithCkc.ts` → `execute` catch
- expected : Failure `D2_INTERNAL_ERROR` sans throw
- actual : TypeError `Cannot read properties of null (reading 'correlationId')` car le catch relit `request.correlationId` / `cycleTypeId`
- preuve : probe QA-09 `observes raw throw on null/undefined request in outer catch`
- sévérité : MINOR
- impact : formes exclues par TypeScript ; aucun Success/proof/profil exposé ; pas de chemin typé normal
- bloquant : non
- correction candidate : catch ne doit pas relire une request potentiellement nulle ; utiliser valeurs optionnelles sûres
- gate Morris : QA-G3 accept/reject ; pas de correction dans ce cycle

## Réserves héritées

### R-QA-REV-01 MINOR — OPEN NOT LIFTED
- observé : timestamp invalide au resolvedAt produit Failure sans Success/proof/consumed
- non corrigé ; non fermé ; non levé

### R-QA-REV-02 MINOR — OPEN NOT LIFTED
- campagne actuelle : probes dans Vitest versionné `qualifyCycleWithCkc.independent.qa.test.ts`
- historique D2-B vite-node hors include : non réécrit ; réserve historique non levée

## Limites de campagne

- pas de schema validation externe runtime au-delà du contrat TypeScript pour request null/undefined (documenté via R-QA-D2C-01)
- pas de fuzzing réseau / UI / D3
- pas de charge performance instrumentée au-delà de l’absence d’I/O anormale
- confiance structurelle au port resolver pour les champs non revalidés hors consumed/frozen/disclosures — documentée, non élevée en finding hors contrats

## Anti-claims

Interdits et non affirmés :
- sans bug
- couverture totale
- production ready
- live product validated
- validé globalement sans réserve
- GO PR implicite
- GO merge implicite

## Non-actions confirmées

- aucune correction produit
- aucun des huit fichiers Delivery modifié
- aucun test Delivery modifié
- aucun commit / push / PR projet
- aucun D2-D / D3 / UI / CreateCycle
- aucune promotion méthode
- QA-G3 non décidé

## Git Truth final

- branche : `delivery/sfia-studio-v3-1-d2-c-qualify-cycle-bridge`
- HEAD : `5ca7a2603b000a468f6baea81ffc6c53acf0cd70`
- divergence : `0/0`
- neuf fichiers projet : huit Delivery inchangés + un test QA indépendant
- staged vide
- aucune branche/PR D2-C distante
- origin/main inchangé
- `.tmp-sfia-review/**` seul autre non tracké

## Review Handoff

- mode : publish-in-cycle
- branche : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- tip avant : `5be426889f49be869eb59b0c55c7d561578142b0`
- blob avant : `c047edd8bd18f74bfab919782e72cfeb9801795b`
- commit attendu : `docs(review-handoff): publish SFIA Studio V3.1-D2-C independent QA report`

## Verdict

V3.1-D2-C INDEPENDENT QA PASS WITH RESERVES —
BL-D2-C-01…07 INDEPENDENTLY VALIDATED —
DELIVERY PACKAGE UNCHANGED —
QUALIFYCYCLE CALLED EXACTLY ONCE ON SUCCESS AND NEVER AFTER UPSTREAM FAILURE —
SUCCESS/FAILURE CONTRACT VERIFIED FAIL-CLOSED —
AUDIT, FACTORY, HOSTILE INPUTS AND NON-REGRESSION VERIFIED —
R-QA-REV-01 AND R-QA-REV-02 REMAIN OPEN NOT LIFTED —
R-QA-D2C-01 MINOR OPEN —
QA-G3 MORRIS DECISION REQUIRED —
NOT PR READY —
NO CORRECTION —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PROJECT PR —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION

## Prochaine gate candidate

GO QA-G3 SFIA STUDIO V3.1-D2-C —
ACCEPT OR REJECT THE INDEPENDENT QA VERDICT AND RESERVES —
NO AUTOMATIC PR READINESS
