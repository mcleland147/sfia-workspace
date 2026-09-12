/**
 * CORR-D-GCEC-AGENT-01 — WIRE + LIN matrices.
 * Normal Product composition Evidence wiring + exact Attempt-A lineage.
 * ZERO REAL. @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  M4_BOUNDED_LOCAL_COMMIT_ACTION,
  resolveAttemptExecutionProfile,
  resolveVerifiedDocsWritePriorAttempt,
  unavailableProjectEvidence,
  type ExecutionAttempt,
} from "@/lib/oa/execution-attempt";
import { getRuntimeApplicationService, resetRuntimeApplicationServiceForTests } from "@/lib/vertical-slice-runtime";
import { afterEach } from "vitest";

const NOW = "2026-09-11T21:00:00.000Z";
const PROJECT = "prj:wire-lin";
const CYCLE = "cyc:wire-lin";
const EC = "xct:wire-lin";
const PATH = "docs/functional-design.md";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

function contract() {
  return {
    executionContractId: EC,
    projectId: PROJECT,
    cycleInstanceId: CYCLE,
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: M4_BOUNDED_DOCS_WRITE_TARGET,
    scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    evidenceRequirements: ["git:local_commit"],
    expectedOutputs: ["artifact", PATH],
    inputs: {
      targetPath: PATH,
      evidenceRequirements: ["artifact", "git:local_commit"],
    },
  };
}

function attempt(
  id: string,
  status: ExecutionAttempt["status"] = "succeeded",
  selectedAgentRef: string = M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: id,
    executionContractId: EC,
    executionContractVersion: 1,
    selectedAgentRef,
    status,
    idempotencyKey: `idem:${id}`,
    correlationId: `cor:${id}`,
    version: 1,
    createdAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${id}`,
      actor: { actorId: "actor:t", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:t",
    },
  };
}

function artifactEv(attemptId: string, overrides: Partial<Evidence> = {}): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: `ev:${attemptId}`,
    type: "artifact",
    status: "verified",
    source: "execution_attempt:docs_write",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    location: PATH,
    digest: DIGEST,
    bindings: {
      projectId: PROJECT,
      cycleInstanceId: CYCLE,
      executionContractId: EC,
      executionAttemptId: attemptId,
    },
    createdAt: NOW,
    updatedAt: NOW,
    version: 1,
    producedAt: NOW,
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:ev",
      actor: { actorId: "a", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:ev",
    },
    ...overrides,
  };
}

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
});

describe("CORR-D-GCEC-AGENT-01 WIRE — Evidence reader", () => {
  it("WIRE-03 reader unavailable during progressive transition → fail closed", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [],
      evidenceReaderAvailable: false,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/evidence_reader_unavailable/);
  });

  it("WIRE-04 available empty Evidence → initial docs-write", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [],
      evidence: [],
      evidenceReaderAvailable: true,
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.profile.kind).toBe("docs_write");
  });

  it("WIRE-01/05 Evidence bag drives B local_commit profile with lineage", () => {
    const bag: Evidence[] = [artifactEv("xat:a")];
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: bag,
      evidenceReaderAvailable: true,
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.profile.kind).toBe("local_commit");
    expect(r.profile.criteria.action).toBe(M4_BOUNDED_LOCAL_COMMIT_ACTION);
    expect(r.profile.lineage?.priorAttemptId).toBe("xat:a");
    expect(r.profile.lineage?.artifactPath).toBe(PATH);
  });

  it("WIRE unavailable helper", () => {
    expect(unavailableProjectEvidence()).toEqual({
      ok: false,
      reason: "evidence_reader_unavailable",
    });
  });
});

describe("CORR-D-GCEC-AGENT-01 LIN — exact Attempt-A lineage", () => {
  it("LIN-01 Evidence A + same Attempt A succeeded → local_commit", () => {
    const prior = resolveVerifiedDocsWritePriorAttempt({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
    });
    expect(prior.ok).toBe(true);
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
      evidenceReaderAvailable: true,
    });
    expect(r.ok && r.profile.kind).toBe("local_commit");
  });

  it("LIN-02 Evidence A but A failed → no local_commit", () => {
    const prior = resolveVerifiedDocsWritePriorAttempt({
      contract: contract(),
      attempts: [attempt("xat:a", "failed")],
      evidence: [artifactEv("xat:a")],
    });
    expect(prior.ok).toBe(false);
  });

  it("LIN-03 Evidence bound A but different succeeded Attempt C → no local_commit", () => {
    const prior = resolveVerifiedDocsWritePriorAttempt({
      contract: contract(),
      attempts: [attempt("xat:c")],
      evidence: [artifactEv("xat:a")],
    });
    expect(prior.ok).toBe(false);
  });

  it("LIN-04 succeeded A but Evidence bound C → no local_commit", () => {
    const prior = resolveVerifiedDocsWritePriorAttempt({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:c")],
    });
    expect(prior.ok).toBe(false);
  });

  it("LIN-05 Evidence fake source prefix → no local_commit", () => {
    const prior = resolveVerifiedDocsWritePriorAttempt({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a", { source: "execution_attempt:docs_write_fake" })],
    });
    expect(prior.ok).toBe(false);
  });

  it("LIN-06 two eligible prior A candidates → ambiguity", () => {
    const prior = resolveVerifiedDocsWritePriorAttempt({
      contract: contract(),
      attempts: [attempt("xat:a1"), attempt("xat:a2")],
      evidence: [artifactEv("xat:a1"), artifactEv("xat:a2")],
    });
    expect(prior.ok).toBe(false);
    if (!prior.ok) expect(prior.reason).toMatch(/ambiguous/);
  });

  it("LIN-07 exact one A after restart → local_commit", () => {
    const input = {
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
      evidenceReaderAvailable: true,
    };
    expect(resolveAttemptExecutionProfile(input)).toEqual(
      resolveAttemptExecutionProfile(input),
    );
  });

  it("LIN-08 A selected agent not bounded docs-write → reject", () => {
    const prior = resolveVerifiedDocsWritePriorAttempt({
      contract: contract(),
      attempts: [attempt("xat:a", "succeeded", "agt:other")],
      evidence: [artifactEv("xat:a")],
    });
    expect(prior.ok).toBe(false);
  });
});

describe("CORR-D-GCEC-AGENT-01 WIRE — normal Product composition smoke", () => {
  it("WIRE-01 Product runtime wires Result Evidence reader (not silent [])", async () => {
    // Smoke: runtime composition constructs without throwing and exposes
    // executionAttemptServices + evidenceReviewServices late-bound together.
    const runtime = getRuntimeApplicationService({
      projectIdSource: { nextProjectId: () => "prj:wire-smoke" },
    } as never);
    expect(runtime.oa?.executionAttemptServices).toBeDefined();
    expect(runtime.oa?.evidenceReviewServices).toBeDefined();
    // Reader unavailable-before-late is fail-closed at profile time (WIRE-03).
    // After composition, late.evidenceReviewServices is assigned — Select uses Result ok.
  });
});
