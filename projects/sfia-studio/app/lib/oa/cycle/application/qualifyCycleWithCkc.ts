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
