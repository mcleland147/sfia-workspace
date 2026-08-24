/**
 * IngestExecutionAttemptEvidence — T-A5 read-only bridge tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { SYSTEM_ACTOR, buildServices } from "./helpers";

describe("T-A6-D1 IngestExecutionAttemptEvidence", () => {
  it("ingests succeeded Attempt with resultRef as non-verified Evidence", async () => {
    const s = buildServices();
    s.fakeAttempts.seed({
      attemptId: "xat:oa-ok-001",
      executionContractId: "xct:oa-001",
      executionContractVersion: 3,
      status: "succeeded",
      resultRef: "res:attempt-stdout-001",
      completedAt: "2026-07-26T01:00:00.000Z",
      selectedAgentRef: "agt:alpha",
    });
    const before = structuredClone(s.fakeAttempts.getRaw("xat:oa-ok-001")!);
    const result = await s.ingestExecutionAttemptEvidence.execute({
      evidenceId: "ev:from-attempt-001",
      executionAttemptId: "xat:oa-ok-001",
      idempotencyKey: "idem-ingest-ok-001",
      actor: SYSTEM_ACTOR,
      classification: "internal",
      bindings: { projectId: "prj:campus360-oa" },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.evidence.status).toBe("available");
    expect(result.evidence.status).not.toBe("verified");
    expect(result.evidence.sourceKind).toBe("execution_attempt");
    expect(result.evidence.bindings.executionAttemptId).toBe("xat:oa-ok-001");
    expect(result.evidence.bindings.executionContractId).toBe("xct:oa-001");
    expect(result.evidence.technicalResultRef).toBe("res:attempt-stdout-001");
    // Attempt unchanged
    expect(s.fakeAttempts.getRaw("xat:oa-ok-001")).toEqual(before);
    const audit = JSON.stringify(s.memoryAudit.events);
    expect(audit).not.toMatch(/PASS|payload|secret/i);
  });

  it("ingests failed Attempt with errorRef as diagnostic Evidence", async () => {
    const s = buildServices();
    s.fakeAttempts.seed({
      attemptId: "xat:fail-001",
      executionContractId: "xct:oa-001",
      executionContractVersion: 1,
      status: "failed",
      errorRef: "err:boom",
      failedAt: "2026-07-26T01:00:00.000Z",
    });
    const result = await s.ingestExecutionAttemptEvidence.execute({
      evidenceId: "ev:fail-ingest",
      executionAttemptId: "xat:fail-001",
      idempotencyKey: "idem-ingest-fail-001",
      actor: SYSTEM_ACTOR,
      classification: "internal",
      bindings: { projectId: "prj:campus360-oa" },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.evidence.status).toBe("available");
    expect(result.evidence.technicalResultRef).toBeUndefined();
    expect(result.evidence.source).toContain("failed");
  });

  it("ingests cancelled Attempt with stopReason as governed-stop Evidence", async () => {
    const s = buildServices();
    s.fakeAttempts.seed({
      attemptId: "xat:cancel-001",
      executionContractId: "xct:oa-001",
      executionContractVersion: 1,
      status: "cancelled",
      stopReason: "Arrêt gouverné Pilote",
      cancelledAt: "2026-07-26T01:00:00.000Z",
    });
    const result = await s.ingestExecutionAttemptEvidence.execute({
      evidenceId: "ev:cancel-ingest",
      executionAttemptId: "xat:cancel-001",
      idempotencyKey: "idem-ingest-cancel-001",
      actor: SYSTEM_ACTOR,
      classification: "internal",
      bindings: { projectId: "prj:campus360-oa" },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.evidence.status).toBe("available");
    expect(result.evidence.location).toContain("governed-stop");
  });

  it("refuses running Attempt", async () => {
    const s = buildServices();
    s.fakeAttempts.seed({
      attemptId: "xat:run-001",
      executionContractId: "xct:oa-001",
      executionContractVersion: 1,
      status: "running",
    });
    const result = await s.ingestExecutionAttemptEvidence.execute({
      evidenceId: "ev:run-ingest",
      executionAttemptId: "xat:run-001",
      idempotencyKey: "idem-ingest-run-001",
      actor: SYSTEM_ACTOR,
      classification: "internal",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("ATTEMPT_STATUS_REFUSED");
  });

  it("refuses missing Attempt", async () => {
    const s = buildServices();
    const result = await s.ingestExecutionAttemptEvidence.execute({
      evidenceId: "ev:missing-attempt",
      executionAttemptId: "xat:missing-001",
      idempotencyKey: "idem-ingest-missing-001",
      actor: SYSTEM_ACTOR,
      classification: "internal",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("ATTEMPT_NOT_FOUND");
  });

  it("refuses succeeded Attempt without resultRef", async () => {
    const s = buildServices();
    s.fakeAttempts.seed({
      attemptId: "xat:no-result-001",
      executionContractId: "xct:oa-001",
      executionContractVersion: 1,
      status: "succeeded",
      completedAt: "2026-07-26T01:00:00.000Z",
    });
    const result = await s.ingestExecutionAttemptEvidence.execute({
      evidenceId: "ev:no-result",
      executionAttemptId: "xat:no-result-001",
      idempotencyKey: "idem-ingest-noresult-001",
      actor: SYSTEM_ACTOR,
      classification: "internal",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("ATTEMPT_RESULT_UNAVAILABLE");
  });

  it("replays idempotent ingest", async () => {
    const s = buildServices();
    s.fakeAttempts.seed({
      attemptId: "xat:oa-ok-002",
      executionContractId: "xct:oa-001",
      executionContractVersion: 1,
      status: "succeeded",
      resultRef: "res:ok-002",
      completedAt: "2026-07-26T01:00:00.000Z",
    });
    const req = {
      evidenceId: "ev:idem-ingest",
      executionAttemptId: "xat:oa-ok-002",
      idempotencyKey: "idem-ingest-replay-001",
      actor: SYSTEM_ACTOR,
      classification: "internal" as const,
      bindings: { projectId: "prj:campus360-oa" },
    };
    const first = await s.ingestExecutionAttemptEvidence.execute(req);
    const second = await s.ingestExecutionAttemptEvidence.execute(req);
    expect(first.ok && second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.reusedFromIdempotencyKey).toBe(true);
  });

  it("never treats Attempt succeeded as PASS", async () => {
    const s = buildServices();
    s.fakeAttempts.seed({
      attemptId: "xat:oa-ok-003",
      executionContractId: "xct:oa-001",
      executionContractVersion: 1,
      status: "succeeded",
      resultRef: "res:ok-003",
      completedAt: "2026-07-26T01:00:00.000Z",
    });
    const result = await s.ingestExecutionAttemptEvidence.execute({
      evidenceId: "ev:no-pass",
      executionAttemptId: "xat:oa-ok-003",
      idempotencyKey: "idem-ingest-nopass-001",
      actor: SYSTEM_ACTOR,
      classification: "internal",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.evidence.status).not.toBe("verified");
    // Anti-claim: no PASS field exists on Evidence
    expect(
      Object.prototype.hasOwnProperty.call(result.evidence, "pass"),
    ).toBe(false);
  });
});
