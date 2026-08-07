/**
 * FinOps T1 — build a canonical usage ledger event (no Money).
 * Safe-integer token contract; structural failures return sanitized errors.
 */

import { classifyCostEvidenceFromSource } from "../domain/costEvidence";
import { computeUtcMonthPeriod } from "../domain/period";
import type { FinOpsSourceOfTruth } from "../domain/types";
import type { FinOpsCaptureUsageInput } from "../ports/finopsCapturePort";
import { deriveFinOpsIdentity } from "./identity";
import { resolveTotalTokens, validateSafeToken } from "./safeTokens";
import type {
  FinOpsUsageEvent,
  FinOpsUsageFingerprint,
  FinOpsUsageStatus,
  SanitizedFinOpsCaptureError,
} from "./types";

function periodStartDate(occurredAt: string): string {
  const period = computeUtcMonthPeriod(occurredAt);
  return period.periodStart.slice(0, 10);
}

export type BuildUsageEventResult =
  | {
      readonly ok: true;
      readonly event: FinOpsUsageEvent;
      readonly fingerprint: FinOpsUsageFingerprint;
    }
  | {
      readonly ok: false;
      readonly error: SanitizedFinOpsCaptureError;
    };

function validationFailed(message: string): BuildUsageEventResult {
  return {
    ok: false,
    error: {
      code: "FINOPS_VALIDATION_FAILED",
      message,
      retryable: false,
      technicalDetailsRedacted: true,
    },
  };
}

export function buildUsageEvent(input: {
  readonly projectId: string;
  readonly executionRunId: string;
  readonly correlationId: string;
  readonly provider: string;
  readonly usage: FinOpsCaptureUsageInput;
  readonly occurredAt: string;
}): BuildUsageEventResult {
  try {
    const projectId = input.projectId.trim();
    const executionRunId = input.executionRunId.trim();
    const provider = input.provider.trim();
    const correlationId = input.correlationId.trim();
    if (!projectId || !executionRunId || !provider || !correlationId) {
      return validationFailed("FinOps capture rejected invalid identity fields");
    }

    let usageStatus: FinOpsUsageStatus;
    let sourceOfTruth: FinOpsSourceOfTruth;
    let inputTokens: number | null = null;
    let outputTokens: number | null = null;
    let totalTokens: number | null = null;

    if (input.usage.status === "validated") {
      const i = validateSafeToken(input.usage.inputTokens);
      const o = validateSafeToken(input.usage.outputTokens);
      const t = validateSafeToken(input.usage.totalTokens);
      if (i === "invalid" || o === "invalid" || t === "invalid") {
        usageStatus = "invalid";
        sourceOfTruth = "UNKNOWN";
        inputTokens = null;
        outputTokens = null;
        totalTokens = null;
      } else {
        const resolved = resolveTotalTokens({
          inputTokens: i,
          outputTokens: o,
          totalTokens: t,
        });
        if (resolved === "invalid") {
          usageStatus = "invalid";
          sourceOfTruth = "UNKNOWN";
          inputTokens = null;
          outputTokens = null;
          totalTokens = null;
        } else {
          usageStatus = "validated";
          sourceOfTruth = "API_USAGE";
          inputTokens = i;
          outputTokens = o;
          totalTokens = resolved;
        }
      }
    } else if (input.usage.status === "unavailable") {
      usageStatus = "unavailable";
      sourceOfTruth = "UNKNOWN";
    } else {
      usageStatus = "invalid";
      sourceOfTruth = "UNKNOWN";
    }

    const evidenceClass = classifyCostEvidenceFromSource(sourceOfTruth);
    const model =
      typeof input.usage.model === "string" && input.usage.model.trim()
        ? input.usage.model.trim()
        : null;
    const providerRequestId =
      typeof input.usage.providerResponseId === "string" &&
      input.usage.providerResponseId.trim()
        ? input.usage.providerResponseId.trim()
        : null;

    const identity = deriveFinOpsIdentity({
      projectId,
      executionRunId,
      provider,
      providerRequestId,
      correlationId,
    });

    let periodStart: string;
    try {
      periodStart = periodStartDate(input.occurredAt);
    } catch {
      return validationFailed("FinOps capture rejected invalid occurredAt");
    }

    const event: FinOpsUsageEvent = {
      eventId: identity.eventId,
      dedupKey: identity.dedupKey,
      projectId,
      executionRunId,
      correlationId,
      provider,
      model,
      occurredAt: input.occurredAt,
      periodStart,
      sourceOfTruth,
      evidenceClass,
      inputTokens,
      outputTokens,
      totalTokens,
      providerRequestId,
      correctionRef: null,
      usageStatus,
    };

    const fingerprint: FinOpsUsageFingerprint = {
      projectId: event.projectId,
      executionRunId: event.executionRunId,
      provider: event.provider,
      providerRequestId: event.providerRequestId,
      correlationId: event.correlationId,
      usageStatus: event.usageStatus,
      inputTokens: event.inputTokens,
      outputTokens: event.outputTokens,
      totalTokens: event.totalTokens,
      model: event.model,
      sourceOfTruth: event.sourceOfTruth,
      evidenceClass: event.evidenceClass,
    };

    return { ok: true, event, fingerprint };
  } catch {
    return validationFailed("FinOps capture rejected invalid event structure");
  }
}
