# SFIA Studio V3.1-D2-C — Delivery Full Review Pack

- **Date/heure/fuseau:** 2026-08-03 09:27:41 CEST (+0200)
- **Rôle:** Cursor Delivery Critical
- **Cycle:** 8 — Delivery / implémentation
- **Typologie:** EVOL

## GO Morris consommé

```text
GO DELIVERY SFIA STUDIO V3.1-D2-C QUALIFYCYCLE BRIDGE —
IMPLEMENT THE VALIDATED BL-D2-C-01…07 PACKAGE USING THE ADOPTED FUNCTIONAL AND TECHNICAL ARCHITECTURE —
PRESERVE D2-A AND D2-B CONTRACTS —
CARRY R-QA-REV-01 AND R-QA-REV-02 WITHOUT LIFTING THEM —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

GO reçu le 2026-08-03 09:04 CEST (+0200).

## Git Truth initial et branche

- workspace/repository conformes: `mcleland147/sfia-workspace`
- branche initiale: `post-merge/sfia-studio-v3-1-d2-b-ckc-resolver`
- HEAD initial / remote: `deaed6f6fcd681a8f9bdd10114afda15f48904ec`
- origin/main: `5ca7a2603b000a468f6baea81ffc6c53acf0cd70`
- tracked clean, staged vide, `.tmp-sfia-review/**` seul non tracké
- aucune branche locale/distante ni PR D2-C préexistante
- branche créée localement: `delivery/sfia-studio-v3-1-d2-c-qualify-cycle-bridge`
- base/HEAD: `5ca7a2603b000a468f6baea81ffc6c53acf0cd70`, divergence `0/0`
- aucune branche distante D2-C créée

## Sources et CKC

Sources consultées: template canonique, carte synthétique CKC, docs cadrage/conception/FA/TA/backlog 15–19, backlog 08, framing README, handoff source, code/tests D2-A/D2-B/T-A2, configuration applicative.

CKC: cycle 8 qualifié, contrat détaillé absent, fallback carte synthétique, statut `method-candidate`, guidance expérimentale, aucune autorité d'exécution. Risque principal: scope creep. Preuve centrale: diff + tests.

Handoff source: tip `3892d76b369bf595b209e6c372b2d7d6ee95d37e`, blob `d73573a873b61d61161cc78f3e6a4b8439abd7ad`, titre `SFIA Studio V3.1-D2-B — Documentary Closure Accelerated Publication Final Review Pack`.

## Décisions consommées

FA-C · TA-P-A · ORCH-A · ERR-B · AUDIT-A · COMP-B · Result Projection unique · six signaux explicites · requestedProfile absent · QualifyCycle inchangé ×1/×0 · read-only · API additive · D2-D gated · D3 fermé.

## BL-D2-C-01…07

- **C-01:** contrat Success/Failure unique, builders purs, objets/tableaux frozen, preuve D2-B conservée.
- **C-02:** six booléens explicites, absence/undefined/clé supplémentaire rejetée, `requestedProfile` rejeté au type et runtime.
- **C-03:** CP D2-A → resolver/proof D2-B → signaux → QualifyCycle async exactement une fois → Success.
- **C-04:** erreurs catalogue/CKC/signaux/internal normalisées; aucun profil/proof/consumed sur Failure.
- **C-05:** événements additifs `qualification_started`, `qualification_succeeded`, `result_produced`, `request_failed`; payload minimal.
- **C-06:** `createCkcQualificationServices` séparée, read-only, sans repo/CreateCycle dans son résultat.
- **C-07:** tests unitaires, intégrés, adversariaux, frontières publiques et non-régression.

## Baseline avant modification

- catalogFingerprint: 8/8 PASS
- catalogProjection: 16/16 PASS
- catalogProjection QA: 37/37 PASS
- manifest: 5/5 PASS
- resolver: 14/14 PASS
- proof: 8/8 PASS
- resolver QA: 9/9 PASS

Verdict baseline: PASS, aucune correction D2-A/D2-B.

## Architecture effectivement implémentée

`QualifyCycleWithCkc.execute` projette le catalogue, résout/consomme CKC avec timestamp ClockPort, exige une preuve frozen `consumed=true`, rejette les six signaux incomplets/étendus et `requestedProfile`, appelle l'exécuteur T-A2 une seule fois, puis projette le résultat. Toutes exceptions/hostilités sont normalisées `D2_INTERNAL_ERROR`; aucun raw throw. Un `D2_INTERNAL_ERROR` resolver n'est jamais réaudité, préservant la politique anti-récursion D2-B.

Le Success reprend les métadonnées D2-A, la preuve D2-B originale, la recommandation T-A2 inchangée, `isMorrisDecision=false`, disclosures et timestamps. Failure est une forme fermée sans champs exploitables interdits.

## Contrats et preuves

- Request public: cycleTypeId, catalogVersion, catalogHash, correlationId, six signaux requis, objective?/scope?.
- `requestedProfile`: absent du type; preuve `@ts-expect-error`; rejet runtime.
- Signaux transmis à T-A2 par copie exacte des six propriétés; objective/scope non audités et non scorés par T-A2.
- QualifyCycle ×1: tests mock + événement T-A2 réel; ×0 sur catalogue, resolver, preuve ou signaux invalides.
- Audit hostile: fail-closed, message sûr, aucune réémission récursive après échec d'audit.
- Clock hostile: Failure sûre avec timestamp de secours déterministe; exception non exposée.
- Factory: uniquement audit, resolver, qualifyCycle, qualifyCycleWithCkc; aucun repository/store/CreateCycle exposé.

## Fichiers créés — contenu complet

### `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationResult.ts` (created — full content)

```typescript
import type { CkcConsumptionProof } from "./ckcConsumptionProof";
import type {
  CatalogProjectionErrorCode,
  CkcQualificationDetailedStatus,
  ValidatedCycleTypeProjection,
} from "./ckcQualificationContracts";
import type { CkcQualificationErrorCode } from "./ckcQualificationErrors";
import type {
  CycleProfile,
  QualifyCycleRecommendation,
} from "./types";

export type CkcQualificationResultErrorCode =
  | CatalogProjectionErrorCode
  | CkcQualificationErrorCode
  | "SIGNALS_INCOMPLETE";

export type CkcQualificationSuccessResult = {
  readonly state: "success";
  readonly cycleTypeId: string;
  readonly label: string;
  readonly shortDescription: string;
  readonly lifecycleStatus: ValidatedCycleTypeProjection["lifecycleStatus"];
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
  readonly detailedStatus: Extract<
    CkcQualificationDetailedStatus,
    | "resolved_detailed"
    | "resolved_synthetic"
    | "resolved_fallback_synthetic"
  >;
  readonly proof: CkcConsumptionProof;
  readonly recommendedProfile: CycleProfile;
  readonly rationale: string;
  readonly criticalSignalsPresent: boolean;
  readonly requiresJustificationForCritical: boolean;
  readonly capitalizationViaCycleTypeId: boolean;
  readonly isMorrisDecision: false;
  readonly disclosures: readonly string[];
  readonly resolvedAt: string;
  readonly qualifiedAt: string;
};

export type CkcQualificationFailureResult = {
  readonly state: "failure";
  readonly code: CkcQualificationResultErrorCode;
  readonly message: string;
  readonly blocking: true;
  readonly retryable: boolean;
  readonly recoverable: boolean;
  readonly correlationId: string;
  readonly cycleTypeId?: string;
  readonly failedAt: string;
};

export type CkcQualificationResult =
  | CkcQualificationSuccessResult
  | CkcQualificationFailureResult;

type FailureSource = {
  readonly code: CkcQualificationResultErrorCode;
  readonly message: string;
  readonly blocking: true;
  readonly retryable: boolean;
  readonly recoverable: boolean;
  readonly correlationId?: string;
  readonly cycleTypeId?: string;
};

/** Pure projection: it preserves the D2-B proof and T-A2 recommendation. */
export function createCkcQualificationSuccess(input: {
  readonly projection: ValidatedCycleTypeProjection;
  readonly proof: CkcConsumptionProof;
  readonly recommendation: QualifyCycleRecommendation;
  readonly qualifiedAt: string;
}): CkcQualificationSuccessResult {
  const { projection, proof, recommendation } = input;
  return Object.freeze({
    state: "success" as const,
    cycleTypeId: projection.cycleTypeId,
    label: projection.label,
    shortDescription: projection.shortDescription,
    lifecycleStatus: projection.lifecycleStatus,
    catalogVersion: projection.catalogVersion,
    catalogHash: projection.catalogHash,
    correlationId: projection.correlationId,
    detailedStatus: proof.detailedStatus,
    proof,
    recommendedProfile: recommendation.recommendedProfile,
    rationale: recommendation.rationale,
    criticalSignalsPresent: recommendation.criticalSignalsPresent,
    requiresJustificationForCritical:
      recommendation.requiresJustificationForCritical,
    capitalizationViaCycleTypeId:
      recommendation.capitalizationViaCycleTypeId,
    isMorrisDecision: false as const,
    disclosures: Object.freeze([...proof.disclosures]),
    resolvedAt: proof.resolvedAt,
    qualifiedAt: input.qualifiedAt,
  });
}

/** Pure fail-closed projection with no partial proof or recommendation fields. */
export function createCkcQualificationFailure(input: {
  readonly error: FailureSource;
  readonly failedAt: string;
  readonly correlationId: string;
  readonly cycleTypeId?: string;
}): CkcQualificationFailureResult {
  const cycleTypeId = input.error.cycleTypeId ?? input.cycleTypeId;
  return Object.freeze({
    state: "failure" as const,
    code: input.error.code,
    message: input.error.message,
    blocking: true as const,
    retryable: input.error.retryable,
    recoverable: input.error.recoverable,
    correlationId: input.error.correlationId ?? input.correlationId,
    ...(cycleTypeId ? { cycleTypeId } : {}),
    failedAt: input.failedAt,
  });
}

export function createSignalsIncompleteError(input: {
  readonly correlationId: string;
  readonly cycleTypeId: string;
}): FailureSource {
  return Object.freeze({
    code: "SIGNALS_INCOMPLETE" as const,
    message: "All six qualification signals must be explicit booleans.",
    blocking: true as const,
    retryable: true as const,
    recoverable: true as const,
    correlationId: input.correlationId,
    cycleTypeId: input.cycleTypeId,
  });
}

export function createInternalCkcQualificationFailure(input: {
  readonly failedAt: string;
  readonly correlationId: string;
  readonly cycleTypeId?: string;
}): CkcQualificationFailureResult {
  return createCkcQualificationFailure({
    error: Object.freeze({
      code: "D2_INTERNAL_ERROR" as const,
      message: "The CKC qualification could not be completed.",
      blocking: true as const,
      retryable: true,
      recoverable: true,
      correlationId: input.correlationId,
      ...(input.cycleTypeId ? { cycleTypeId: input.cycleTypeId } : {}),
    }),
    failedAt: input.failedAt,
    correlationId: input.correlationId,
    ...(input.cycleTypeId ? { cycleTypeId: input.cycleTypeId } : {}),
  });
}
```

### `projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycleWithCkc.ts` (created — full content)

```typescript
import type { ClockPort } from "@/lib/oa/doctrine";
import { projectSelectableCycleType } from "../domain/catalogProjection";
import {
  createCkcQualificationFailure,
  createCkcQualificationSuccess,
  createInternalCkcQualificationFailure,
  createSignalsIncompleteError,
  type CkcQualificationFailureResult,
  type CkcQualificationResult,
} from "../domain/ckcQualificationResult";
import type {
  CycleQualificationSignals,
  QualifyCycleRequest,
  QualifyCycleResult,
} from "../domain/types";
import type { CkcQualificationResolverPort } from "../ports/ckcQualificationResolver";
import type { CycleAuditPort } from "../ports/cycleAudit";

export type CkcQualificationSignals = {
  readonly structuralChange: boolean;
  readonly securityImpact: boolean;
  readonly architectureImpact: boolean;
  readonly dataImpact: boolean;
  readonly irreversible: boolean;
  readonly lowRiskBounded: boolean;
};

export type QualifyCycleWithCkcRequest = {
  readonly cycleTypeId: string;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
  readonly signals: CkcQualificationSignals;
  readonly objective?: string;
  readonly scope?: string;
};

export type QualifyCycleExecutor = {
  execute(request: QualifyCycleRequest): Promise<QualifyCycleResult>;
};

const SIGNAL_NAMES = [
  "structuralChange",
  "securityImpact",
  "architectureImpact",
  "dataImpact",
  "irreversible",
  "lowRiskBounded",
] as const;

function hasSixExplicitSignals(
  signals: unknown,
): signals is CkcQualificationSignals {
  if (!signals || typeof signals !== "object") {
    return false;
  }
  const keys = Object.keys(signals);
  return (
    keys.length === SIGNAL_NAMES.length &&
    keys.every((key) =>
      SIGNAL_NAMES.includes(key as (typeof SIGNAL_NAMES)[number]),
    ) &&
    SIGNAL_NAMES.every(
      (name) =>
        Object.prototype.hasOwnProperty.call(signals, name) &&
        typeof (signals as Record<string, unknown>)[name] === "boolean",
    )
  );
}

export class QualifyCycleWithCkc {
  constructor(
    private readonly resolver: CkcQualificationResolverPort,
    private readonly qualifyCycle: QualifyCycleExecutor,
    private readonly clock: ClockPort,
    private readonly audit?: CycleAuditPort,
  ) {}

  async execute(
    request: QualifyCycleWithCkcRequest,
  ): Promise<CkcQualificationResult> {
    try {
      return await this.executeInternal(request);
    } catch {
      return createInternalCkcQualificationFailure({
        failedAt: this.safeFailureTimestamp(),
        correlationId: request.correlationId,
        cycleTypeId: request.cycleTypeId,
      });
    }
  }

  private async executeInternal(
    request: QualifyCycleWithCkcRequest,
  ): Promise<CkcQualificationResult> {
    const projectionResult = projectSelectableCycleType({
      cycleTypeId: request.cycleTypeId,
      catalogVersion: request.catalogVersion,
      catalogHash: request.catalogHash,
      correlationId: request.correlationId,
    });
    if (!projectionResult.ok) {
      return this.fail(request, projectionResult.error);
    }

    const { projection } = projectionResult;
    let resolutionOutcome: ReturnType<CkcQualificationResolverPort["resolve"]>;
    try {
      resolutionOutcome = this.resolver.resolve({
        projection,
        resolvedAt: this.clock.nowIso(),
      });
    } catch {
      return this.internalFailure(request, this.auditHasFailed());
    }
    if (!resolutionOutcome.ok) {
      if (resolutionOutcome.error.code === "D2_INTERNAL_ERROR") {
        // The D2-B resolver uses this code for audit failure. Never re-emit.
        return createInternalCkcQualificationFailure({
          failedAt: this.safeFailureTimestamp(),
          correlationId: request.correlationId,
          cycleTypeId: request.cycleTypeId,
        });
      }
      return this.fail(request, resolutionOutcome.error);
    }
    if (
      resolutionOutcome.proof.consumed !== true ||
      !Object.isFrozen(resolutionOutcome.proof) ||
      !Object.isFrozen(resolutionOutcome.proof.disclosures)
    ) {
      return this.internalFailure(request);
    }

    if (
      Object.prototype.hasOwnProperty.call(request, "requestedProfile") ||
      !hasSixExplicitSignals(request.signals)
    ) {
      return this.fail(
        request,
        createSignalsIncompleteError({
          correlationId: request.correlationId,
          cycleTypeId: request.cycleTypeId,
        }),
        resolutionOutcome.resolution.detailedStatus,
      );
    }

    const startedAt = Date.now();
    if (
      !this.tryEmit({
        event: "oa.ckc.qualification_started",
        ts: this.clock.nowIso(),
        correlationId: request.correlationId,
        cycleTypeId: request.cycleTypeId,
        result: "started",
        detailedStatus: resolutionOutcome.resolution.detailedStatus,
      })
    ) {
      return this.internalFailure(request, true);
    }

    let qualification: QualifyCycleResult;
    try {
      const signals: CycleQualificationSignals = {
        structuralChange: request.signals.structuralChange,
        securityImpact: request.signals.securityImpact,
        architectureImpact: request.signals.architectureImpact,
        dataImpact: request.signals.dataImpact,
        irreversible: request.signals.irreversible,
        lowRiskBounded: request.signals.lowRiskBounded,
      };
      qualification = await this.qualifyCycle.execute({
        signals,
        cycleTypeId: request.cycleTypeId,
        ...(request.objective !== undefined
          ? { objective: request.objective }
          : {}),
        ...(request.scope !== undefined ? { scope: request.scope } : {}),
      });
    } catch {
      return this.internalFailure(request, this.auditHasFailed());
    }

    const qualifiedAt = this.clock.nowIso();
    if (
      !this.tryEmit({
        event: "oa.ckc.qualification_succeeded",
        ts: qualifiedAt,
        correlationId: request.correlationId,
        cycleTypeId: request.cycleTypeId,
        result: "ok",
        detailedStatus: resolutionOutcome.resolution.detailedStatus,
        recommendedProfile:
          qualification.recommendation.recommendedProfile,
        durationMs: Date.now() - startedAt,
      })
    ) {
      return this.internalFailure(request, true);
    }

    const result = createCkcQualificationSuccess({
      projection,
      proof: resolutionOutcome.proof,
      recommendation: qualification.recommendation,
      qualifiedAt,
    });
    if (
      !this.tryEmit({
        event: "oa.ckc.result_produced",
        ts: qualifiedAt,
        correlationId: request.correlationId,
        cycleTypeId: request.cycleTypeId,
        result: "ok",
        detailedStatus: result.detailedStatus,
        recommendedProfile: result.recommendedProfile,
        durationMs: Date.now() - startedAt,
      })
    ) {
      return this.internalFailure(request, true);
    }
    return result;
  }

  private fail(
    request: QualifyCycleWithCkcRequest,
    error: Parameters<typeof createCkcQualificationFailure>[0]["error"],
    detailedStatus?: string,
  ): CkcQualificationFailureResult {
    const failedAt = this.clock.nowIso();
    const failure = createCkcQualificationFailure({
      error,
      failedAt,
      correlationId: request.correlationId,
      cycleTypeId: request.cycleTypeId,
    });
    if (
      !this.tryEmit({
        event: "oa.ckc.request_failed",
        ts: failedAt,
        correlationId: request.correlationId,
        cycleTypeId: request.cycleTypeId,
        result: "error",
        ...(detailedStatus ? { detailedStatus } : {}),
        detailCode: failure.code,
      })
    ) {
      return this.internalFailure(request, true);
    }
    return failure;
  }

  private internalFailure(
    request: QualifyCycleWithCkcRequest,
    auditAlreadyFailed = false,
  ): CkcQualificationFailureResult {
    const failedAt = this.safeFailureTimestamp();
    const failure = createInternalCkcQualificationFailure({
      failedAt,
      correlationId: request.correlationId,
      cycleTypeId: request.cycleTypeId,
    });
    if (!auditAlreadyFailed) {
      if (
        !this.tryEmit({
          event: "oa.ckc.request_failed",
          ts: failedAt,
          correlationId: request.correlationId,
          cycleTypeId: request.cycleTypeId,
          result: "error",
          detailCode: "D2_INTERNAL_ERROR",
        })
      ) {
        // Morris FAIL-CLOSED: never recurse on an audit failure.
      }
    }
    return failure;
  }

  private safeFailureTimestamp(): string {
    try {
      return this.clock.nowIso();
    } catch {
      return "1970-01-01T00:00:00.000Z";
    }
  }

  private auditHasFailed(): boolean {
    const audit = this.audit as
      | (CycleAuditPort & { readonly hasFailed?: () => boolean })
      | undefined;
    return audit?.hasFailed?.() ?? false;
  }

  private tryEmit(
    event: Parameters<CycleAuditPort["append"]>[0],
  ): boolean {
    if (!this.audit) {
      return true;
    }
    try {
      this.audit.append(event);
      return true;
    } catch {
      return false;
    }
  }
}
```

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResult.test.ts` (created — full content)

```typescript
import { describe, expect, it } from "vitest";
import {
  CKC_PILOT_CADRAGE_PATH,
  CKC_SYNTHETIC_MAP_PATH,
  createCkcQualificationFailure,
  createCkcQualificationSuccess,
  createSignalsIncompleteError,
  type CkcConsumptionProof,
  type QualifyCycleRecommendation,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";

const projection: ValidatedCycleTypeProjection = Object.freeze({
  cycleTypeId: "cyc:framing",
  label: "Cadrage",
  shortDescription: "Clarifier le périmètre.",
  lifecycleStatus: "active",
  ckc: Object.freeze({
    mandatory: true,
    primaryLevel: "detailed",
    primaryReference: CKC_PILOT_CADRAGE_PATH,
    fallbackPolicy: "synthetic_map",
    fallbackReference: CKC_SYNTHETIC_MAP_PATH,
    executionAuthority: false,
    doctrineStatus: "method-candidate",
    unavailableBehavior: "fail-closed",
  }),
  catalogVersion: "3.1",
  catalogHash: "sha256:catalog",
  correlationId: "cor:d2-c-result",
});

const proof: CkcConsumptionProof = Object.freeze({
  cycleTypeId: projection.cycleTypeId,
  detailedStatus: "resolved_fallback_synthetic",
  level: "synthetic",
  status: "synthetic",
  source: "intra_v3_synthetic",
  expectedPrimaryReference: CKC_PILOT_CADRAGE_PATH,
  usedReference: CKC_SYNTHETIC_MAP_PATH,
  fallbackUsed: true,
  fallbackReference: CKC_SYNTHETIC_MAP_PATH,
  catalogVersion: projection.catalogVersion,
  catalogHash: projection.catalogHash,
  correlationId: projection.correlationId,
  resolvedAt: "2026-08-03T07:00:00.000Z",
  doctrineStatus: "method-candidate",
  executionAuthority: false,
  consumed: true,
  disclosures: Object.freeze(["CKC_FALLBACK_USED"]),
});

const recommendation: QualifyCycleRecommendation = Object.freeze({
  recommendedProfile: "Critical",
  rationale: "At least one critical signal is present.",
  criticalSignalsPresent: true,
  isMorrisDecision: false,
  requiresJustificationForCritical: true,
  capitalizationViaCycleTypeId: false,
});

describe("V3.1-D2-C Result Projection", () => {
  it("builds a frozen success while preserving the original proof", () => {
    const result = createCkcQualificationSuccess({
      projection,
      proof,
      recommendation,
      qualifiedAt: "2026-08-03T07:00:01.000Z",
    });

    expect(result).toMatchObject({
      state: "success",
      cycleTypeId: "cyc:framing",
      detailedStatus: "resolved_fallback_synthetic",
      recommendedProfile: "Critical",
      isMorrisDecision: false,
      disclosures: ["CKC_FALLBACK_USED"],
    });
    expect(result.proof).toBe(proof);
    expect(result.proof.consumed).toBe(true);
    expect(Object.isFrozen(result)).toBe(true);
    expect(Object.isFrozen(result.disclosures)).toBe(true);
  });

  it("builds a frozen failure with no exploitable partial result", () => {
    const result = createCkcQualificationFailure({
      error: createSignalsIncompleteError({
        correlationId: "cor:d2-c-result",
        cycleTypeId: "cyc:framing",
      }),
      failedAt: "2026-08-03T07:00:02.000Z",
      correlationId: "cor:d2-c-result",
      cycleTypeId: "cyc:framing",
    });

    expect(result).toEqual({
      state: "failure",
      code: "SIGNALS_INCOMPLETE",
      message: "All six qualification signals must be explicit booleans.",
      blocking: true,
      retryable: true,
      recoverable: true,
      correlationId: "cor:d2-c-result",
      cycleTypeId: "cyc:framing",
      failedAt: "2026-08-03T07:00:02.000Z",
    });
    expect(Object.isFrozen(result)).toBe(true);
    expect(result).not.toHaveProperty("proof");
    expect(result).not.toHaveProperty("consumed");
    expect(result).not.toHaveProperty("recommendedProfile");
    expect(result).not.toHaveProperty("rationale");
    expect(result).not.toHaveProperty("criticalSignalsPresent");
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.test.ts` (created — full content)

```typescript
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
```

### `projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.qa.test.ts` (created — full content)

```typescript
/**
 * V3.1-D2-C independent Delivery reinforcement.
 * @vitest-environment node
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { FixedClock } from "@/lib/oa/doctrine";
import {
  CKC_REFERENCE_MANIFEST,
  CkcQualificationResolver,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  MemoryCycleAuditJournal,
  createCkcQualificationServices,
  projectSelectableCycleType,
  type CkcReferenceManifest,
  type CycleAuditEvent,
  type CycleAuditPort,
  type QualifyCycleExecutor,
  type QualifyCycleWithCkcRequest,
} from "@/lib/oa/cycle";
import { describe, expect, it, vi } from "vitest";

const NOW = "2026-08-03T07:20:00.000Z";

function request(
  cycleTypeId: string,
  signalOverrides: Partial<QualifyCycleWithCkcRequest["signals"]> = {},
): QualifyCycleWithCkcRequest {
  return {
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:${cycleTypeId}`,
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: false,
      ...signalOverrides,
    },
  };
}

function projection(cycleTypeId = "cyc:delivery") {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: "cor:mutable-proof",
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

describe("V3.1-D2-C integrated A → B → C", () => {
  it.each([
    ["cyc:framing", { lowRiskBounded: true }, "Light"],
    ["cyc:technical-architecture", { securityImpact: true }, "Critical"],
    ["cyc:delivery", { lowRiskBounded: false }, "Standard"],
  ] as const)("qualifies %s as %s through the real read-only factory", async (
    cycleTypeId,
    signals,
    expectedProfile,
  ) => {
    const audit = new MemoryCycleAuditJournal();
    const services = createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit,
    });

    const result = await services.qualifyCycleWithCkc.execute(
      request(cycleTypeId, signals),
    );

    expect(result.state).toBe("success");
    if (result.state !== "success") throw new Error(result.message);
    expect(result.recommendedProfile).toBe(expectedProfile);
    expect(result.proof.consumed).toBe(true);
    expect(result.isMorrisDecision).toBe(false);
    expect(result.qualifiedAt).toBe(NOW);
    expect(audit.events.filter((event) => event.event === "oa.cycle.qualified"))
      .toHaveLength(1);
  });

  it("marks capitalization through cycleTypeId without a new profile enum", async () => {
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: new MemoryCycleAuditJournal(),
    }).qualifyCycleWithCkc.execute(request("cyc:capitalization"));

    expect(result.state).toBe("success");
    if (result.state !== "success") throw new Error(result.message);
    expect(result.recommendedProfile).toBe("Standard");
    expect(result.capitalizationViaCycleTypeId).toBe(true);
    expect(result.isMorrisDecision).toBe(false);
  });

  it("uses the authorized synthetic fallback and retains its disclosure", async () => {
    const manifest: CkcReferenceManifest = Object.freeze({
      entries: Object.freeze(
        CKC_REFERENCE_MANIFEST.entries.map((entry) =>
          entry.level === "detailed" &&
          entry.reference.includes("cadrage")
            ? Object.freeze({ ...entry, availability: "unavailable" as const })
            : entry,
        ),
      ),
    });
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: new MemoryCycleAuditJournal(),
      resolver: new CkcQualificationResolver(manifest),
    }).qualifyCycleWithCkc.execute(
      request("cyc:framing", { lowRiskBounded: true }),
    );

    expect(result.state).toBe("success");
    if (result.state !== "success") throw new Error(result.message);
    expect(result.detailedStatus).toBe("resolved_fallback_synthetic");
    expect(result.proof.fallbackUsed).toBe(true);
    expect(result.disclosures).toEqual(["CKC_FALLBACK_USED"]);
  });

  it("fails closed when the resolver cannot produce a consumable proof", async () => {
    const qualifyCycle = {
      execute: vi.fn<QualifyCycleExecutor["execute"]>(),
    };
    const resolver = new CkcQualificationResolver(
      Object.freeze({
        entries: Object.freeze(
          CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.level === "synthetic"
              ? Object.freeze({
                  ...entry,
                  availability: "unavailable" as const,
                })
              : entry,
          ),
        ),
      }),
    );
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: new MemoryCycleAuditJournal(),
      resolver,
      qualifyCycle,
    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));

    expect(result).toMatchObject({
      state: "failure",
      code: "CKC_SYNTHETIC_INVALID",
    });
    expect(result).not.toHaveProperty("proof");
    expect(result).not.toHaveProperty("recommendedProfile");
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });

  it("converts hostile audit behavior to a safe internal failure without recursion", async () => {
    const events: CycleAuditEvent[] = [];
    const audit: CycleAuditPort = {
      append(event) {
        events.push(event);
        if (event.event === "oa.cycle.qualified") {
          throw new Error("hostile raw secret");
        }
      },
    };
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit,
      resolver: new CkcQualificationResolver(),
    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));

    expect(result).toMatchObject({
      state: "failure",
      code: "D2_INTERNAL_ERROR",
      message: "The CKC qualification could not be completed.",
    });
    expect(result).not.toHaveProperty("proof");
    expect(result).not.toHaveProperty("recommendedProfile");
    expect(JSON.stringify(result)).not.toContain("hostile raw secret");
    expect(events.filter((event) => event.event === "oa.cycle.qualified"))
      .toHaveLength(1);
    expect(events.filter((event) => event.event === "oa.ckc.request_failed"))
      .toHaveLength(0);
  });

  it("does not re-emit after the D2-B resolver reports an audit failure", async () => {
    let appendCalls = 0;
    const audit: CycleAuditPort = {
      append() {
        appendCalls += 1;
        throw new Error("audit unavailable");
      },
    };
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit,
    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));

    expect(result).toMatchObject({
      state: "failure",
      code: "D2_INTERNAL_ERROR",
    });
    expect(appendCalls).toBe(1);
  });

  it("emits request_failed for an ordinary executor exception while audit is healthy", async () => {
    const audit = new MemoryCycleAuditJournal();
    const qualifyCycle = {
      execute: vi
        .fn<QualifyCycleExecutor["execute"]>()
        .mockRejectedValue(new Error("ordinary dependency failure")),
    };
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit,
      qualifyCycle,
    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));

    expect(result).toMatchObject({
      state: "failure",
      code: "D2_INTERNAL_ERROR",
    });
    expect(
      audit.events.filter((event) => event.event === "oa.ckc.request_failed"),
    ).toHaveLength(1);
    expect(JSON.stringify(result)).not.toContain("ordinary dependency failure");
  });

  it("rejects a mutable injected proof instead of exposing its alias", async () => {
    const canonical = new CkcQualificationResolver().resolve({
      projection: projection(),
      resolvedAt: NOW,
    });
    if (!canonical.ok) throw new Error(canonical.error.message);
    const mutableProof = {
      ...canonical.proof,
      disclosures: [...canonical.proof.disclosures],
    };
    const qualifyCycle = {
      execute: vi.fn<QualifyCycleExecutor["execute"]>(),
    };
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: new MemoryCycleAuditJournal(),
      resolver: {
        resolve: () => ({
          ok: true as const,
          resolution: canonical.resolution,
          proof: mutableProof,
        }),
      },
      qualifyCycle,
    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));

    expect(result).toMatchObject({
      state: "failure",
      code: "D2_INTERNAL_ERROR",
    });
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });

  it("normalizes a hostile clock without exposing the exception", async () => {
    const result = await createCkcQualificationServices({
      clock: {
        nowIso() {
          throw new Error("hostile clock secret");
        },
      },
      audit: new MemoryCycleAuditJournal(),
    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));

    expect(result).toMatchObject({
      state: "failure",
      code: "D2_INTERNAL_ERROR",
      message: "The CKC qualification could not be completed.",
      failedAt: "1970-01-01T00:00:00.000Z",
    });
    expect(JSON.stringify(result)).not.toContain("hostile clock secret");
  });

  it("keeps the factory and new modules read-only and free of forbidden imports", () => {
    const root = path.resolve(__dirname, "../../../lib/oa/cycle");
    const indexSource = readFileSync(path.join(root, "index.ts"), "utf8");
    const resultSource = readFileSync(
      path.join(root, "domain/ckcQualificationResult.ts"),
      "utf8",
    );
    const bridgeSource = readFileSync(
      path.join(root, "application/qualifyCycleWithCkc.ts"),
      "utf8",
    );

    expect(indexSource).toContain("createCkcQualificationServices");
    expect(indexSource).toContain("qualifyCycleWithCkc");
    const factory = createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: new MemoryCycleAuditJournal(),
    });
    expect(Object.keys(factory).sort()).toEqual([
      "audit",
      "qualifyCycleWithCkc",
      "resolver",
    ]);
    for (const source of [resultSource, bridgeSource]) {
      expect(source).not.toMatch(
        /CreateCycle|MemoryCycleStore|ProjectServices|Repository|node:crypto|node:fs|from ["']next|from ["']react|Markdown/,
      );
    }
  });
});
```

## Fichiers modifiés — diff utile complet

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
index 9400a6949608f7fd521b778f2b42c105509c8fcb..5dbce54a258a8ed726cbfcdfe747400febf2d523 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
@@ -613,7 +613,7 @@ describe("V3.1-D2-A QA — public fingerprint/catalog binding (critical)", () =>
 });

 describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
-  it("keeps the public boundary limited to adopted D2-A and D2-B exports", () => {
+  it("allows adopted D2-A/B/C exports while forbidding later-cycle wiring", () => {
     const source = readFileSync(
       path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
       "utf8",
@@ -638,8 +638,15 @@ describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
     expect(source).toContain(
       'export * from "./infrastructure/ckcQualificationResolver";',
     );
+    expect(source).toContain(
+      'export * from "./domain/ckcQualificationResult";',
+    );
+    expect(source).toContain(
+      'export * from "./application/qualifyCycleWithCkc";',
+    );
+    expect(source).toContain("createCkcQualificationServices");
     expect(source).not.toMatch(
-      /QualifyCycleBridge|qualifyCycleWithCkc|ckcQualificationResult|createD2|D2Factory|createCkcQualificationServices/,
+      /QualifyCycleBridge|createD2|D2Factory|D2-D|D3|createInMemoryCycleServices\([^)]*qualifyCycleWithCkc/,
     );
   });

diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 499b0cbb1f74f086562e87d3d5694aa73847ec31..6a4699fe42b4e336488978f1814ab1017965853e 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -13,6 +13,7 @@ export * from "./domain/cycleTypeCatalog";
 export * from "./domain/ckcQualificationContracts";
 export * from "./domain/ckcQualificationErrors";
 export * from "./domain/ckcConsumptionProof";
+export * from "./domain/ckcQualificationResult";
 export * from "./domain/catalogFingerprint";
 export * from "./domain/catalogProjection";

@@ -24,6 +25,7 @@ export * from "./ports/ckcQualificationResolver";
 export * from "./ports/cycleAudit";

 export { QualifyCycle } from "./application/qualifyCycle";
+export * from "./application/qualifyCycleWithCkc";
 export { CreateCycle } from "./application/createCycle";
 export { GetCycle } from "./application/getCycle";
 export { CreateInitialTrajectory } from "./application/createInitialTrajectory";
@@ -63,8 +65,13 @@ import { GetEpistemicState } from "./application/getEpistemicState";
 import { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
 import { ProposeTrajectoryVersion } from "./application/proposeTrajectoryVersion";
 import { QualifyCycle } from "./application/qualifyCycle";
+import {
+  QualifyCycleWithCkc,
+  type QualifyCycleExecutor,
+} from "./application/qualifyCycleWithCkc";
 import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
 import { UpdateEpistemicState } from "./application/updateEpistemicState";
+import { CkcQualificationResolver } from "./infrastructure/ckcQualificationResolver";
 import { MemoryCkcResolver } from "./infrastructure/memoryCkcResolver";
 import { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
 import { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
@@ -76,6 +83,7 @@ import {
 } from "./infrastructure/observability";
 import type { CycleAuditPort } from "./ports/cycleAudit";
 import type { CkcResolverPort } from "./ports/ckcResolver";
+import type { CkcQualificationResolverPort } from "./ports/ckcQualificationResolver";

 export type CycleServices = {
   store: MemoryCycleStore;
@@ -103,6 +111,64 @@ export type CreateInMemoryCycleServicesOptions = {
   ckcResolver?: CkcResolverPort;
 };

+export type CkcQualificationServices = {
+  readonly audit: CycleAuditPort;
+  readonly resolver: CkcQualificationResolverPort;
+  readonly qualifyCycleWithCkc: QualifyCycleWithCkc;
+};
+
+export type CreateCkcQualificationServicesOptions = {
+  readonly clock?: ClockPort;
+  readonly audit?: CycleAuditPort;
+  readonly resolver?: CkcQualificationResolverPort;
+  readonly qualifyCycle?: QualifyCycleExecutor;
+};
+
+function createFailureAwareAudit(audit: CycleAuditPort): CycleAuditPort & {
+  readonly hasFailed: () => boolean;
+} {
+  let failed = false;
+  return {
+    append(event): void {
+      if (failed) {
+        throw new Error("Audit sink unavailable.");
+      }
+      try {
+        audit.append(event);
+      } catch {
+        failed = true;
+        throw new Error("Audit sink unavailable.");
+      }
+    },
+    hasFailed: () => failed,
+  };
+}
+
+/** Read-only D2-A → D2-B → D2-C composition without repositories or mutation. */
+export function createCkcQualificationServices(
+  options: CreateCkcQualificationServicesOptions = {},
+): CkcQualificationServices {
+  const clock = options.clock ?? new SystemClock();
+  const audit = options.audit ?? new ConsoleCycleAuditJournal();
+  const failureAwareAudit = createFailureAwareAudit(audit);
+  const resolver =
+    options.resolver ??
+    new CkcQualificationResolver(undefined, failureAwareAudit);
+  const qualifyCycle =
+    options.qualifyCycle ?? new QualifyCycle(clock, failureAwareAudit);
+
+  return Object.freeze({
+    audit,
+    resolver,
+    qualifyCycleWithCkc: new QualifyCycleWithCkc(
+      resolver,
+      qualifyCycle,
+      clock,
+      failureAwareAudit,
+    ),
+  });
+}
+
 /** Factory for in-memory Cycle/Trajectory/Epistemic/CKC services. */
 export function createInMemoryCycleServices(
   options: CreateInMemoryCycleServicesOptions,
diff --git a/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts b/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
index fa3875b80c1dc375cadb1d150671880fd249ef56..b6d90df80ab89890ff311d986d56bfbb4ed43f39 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
@@ -94,6 +94,21 @@ export type CycleAuditEvent =
       detailCode?: string;
       durationMs?: number;
     }
+  | {
+      event:
+        | "oa.ckc.qualification_started"
+        | "oa.ckc.qualification_succeeded"
+        | "oa.ckc.result_produced"
+        | "oa.ckc.request_failed";
+      ts: string;
+      correlationId: string;
+      cycleTypeId: string;
+      result: "started" | "ok" | "error";
+      detailedStatus?: string;
+      recommendedProfile?: string;
+      detailCode?: string;
+      durationMs?: number;
+    }
   | {
       event: "oa.cycle.load_failed";
       ts: string;
```

## Revue ciblée et durcissements de suivi

La revue ciblée a conduit à: rejet runtime de `requestedProfile` et des signaux supplémentaires; copie exacte des six signaux; refus des preuves injectées mutables; absence de réémission après `D2_INTERNAL_ERROR` resolver; suivi interne de panne audit; émission `request_failed` pour exception ordinaire lorsque le sink reste sain. Le `qualifyCycle` brut reste une dépendance injectable interne mais n’est plus exposé par la façade D2-C, empêchant le contournement du bridge fail-closed.

## Tests et validations finales

Tests ciblés D2-C finaux:
- Result Projection: 2/2
- bridge unit: 13/13
- bridge QA/intégration: 12/12
- frontière publique: 37/37
- total ciblé: 64/64, 4/4 fichiers

Régressions D2-A/D2-B finales: 122/122, 8/8 fichiers.

Suite `__tests__/oa/cycle/`: 243/243, 15/15 fichiers.

Suite complète: 976/976, 101/101 fichiers.

- typecheck: PASS
- lint: PASS, aucune alerte/erreur
- build Next production: PASS (`Compiled successfully`)
- `git diff --check`: PASS
- aucun `--fix`, skip, only, snapshot update ou assertion affaiblie

## Fichiers protégés — blobs avant/après

- `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts`: `b7b42566f782a851c5eb77c99aaeba2d9fc386d7` (before = after)
- `projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts`: `3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb` (before = after)
- `projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts`: `b436ee328fa9dfdb1d6eb3bc165dad285723113d` (before = after)
- `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts`: `d03abd8038185007780fb74c01f1f151e751d543` (before = after)
- `projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts`: `065f0a7b695bcc6ef41663adde7f0eb38468dcb1` (before = after)
- `projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts`: `723f325b125417cbe5cb3f17ad4c462f4f4cd662` (before = after)
- `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts`: `40664df011729f751b41116ac33cee2c2d5a8525` (before = after)
- `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts`: `1abdb636424e49112e4ab62a00138c76686bc471` (before = after)
- `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts`: `9f245b1ccc7b08ef42fd27e78ec9d455b490597e` (before = after)
- `projects/sfia-studio/app/lib/oa/cycle/domain/invariants.ts`: `7ea06a9bdbdb7056215ac166980f8896ae64aabe` (before = after)
- `projects/sfia-studio/app/lib/oa/cycle/domain/qualification.ts`: `e6429d66c5fd06c63c313b7702558848af24bbc1` (before = after)
- `projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycle.ts`: `1a5e40c12c44ee8e47592e17a27511c1f5115246` (before = after)
- `projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts`: `ee18f4e07971c5610cccae3c99b73a2626c94307` (before = after)

`git diff --exit-code origin/main -- <13 protected paths>`: PASS. QualifyCycle, CreateCycle et contrats D2-A/D2-B inchangés.

## Git Truth final

```text
 M projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResult.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.qa.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycleWithCkc.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationResult.ts
```

- branche: `delivery/sfia-studio-v3-1-d2-c-qualify-cycle-bridge`
- HEAD = origin/main = `5ca7a2603b000a468f6baea81ffc6c53acf0cd70`
- divergence origin/main...HEAD: `0/0`
- exactement 8 fichiers projet autorisés (5 créés, 3 modifiés)
- staged vide; aucun commit propre
- aucune branche distante D2-C; aucune PR D2-C
- `.tmp-sfia-review/**` non tracké uniquement

## Réserves

### R-QA-REV-01 MINOR — OPEN NOT LIFTED

`oa.ckc.resolution_started` et événements d'échec D2-B associés peuvent porter un `ts` dérivé d'un `resolvedAt` invalide avant validation ISO. Aucun succès, aucune preuve, aucun `consumed=true`. Non corrigée, non fermée, non acceptée comme levée.

### R-QA-REV-02 MINOR — OPEN NOT LIFTED

Sondes adversariales D2-B historiques via `vite-node` temporaire hors include Vitest. Limitation d'outillage; package D2-B non muté. Non corrigée, non fermée, non levée.

Aucune nouvelle réserve D2-C identifiée. Les six constats de revue ont été traités, dont la suppression du `qualifyCycle` brut de la façade publique D2-C.

## Frontières et non-actions

- aucun D2-D, D3, UI, Figma, CreateCycle ou méthode
- aucune modification configuration/dépendance/workflow/prompt
- aucun commit, push ou PR projet
- main non modifiée, aucune branche supprimée
- R-QA-REV-01/02 portées sans modification

## Limites et prochaine gate candidate

Delivery locale uniquement; pas de claim PR-ready ou production-ready. Prochaine gate candidate: Cycle 9 QA/validation indépendante V3.1-D2-C, sur GO Morris distinct.

## Verdict

V3.1-D2-C QUALIFYCYCLE BRIDGE DELIVERY COMPLETE LOCALLY WITH RESERVES —
BL-D2-C-01…07 IMPLEMENTED —
D2-A AND D2-B CONTRACTS PRESERVED —
SIX SIGNALS VALIDATED FAIL-CLOSED —
QUALIFYCYCLE CALLED EXACTLY ONCE ON SUCCESS AND NEVER AFTER UPSTREAM FAILURE —
READ-ONLY SUCCESS/FAILURE RESULT CONTRACT IMPLEMENTED —
AUDIT EVENTS AND READ-ONLY FACTORY IMPLEMENTED —
R-QA-REV-01 AND R-QA-REV-02 CARRIED FORWARD WITHOUT LIFTING —
READY FOR INDEPENDENT QA —
NOT PR READY —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
