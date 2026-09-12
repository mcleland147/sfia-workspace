/**
 * D-GCEC-AGENT-01 — AttemptExecutionProfile derivation (AP matrix).
 * ZERO REAL. @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  M4_BOUNDED_LOCAL_COMMIT_ACTION,
  M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
  M4_BOUNDED_LOCAL_COMMIT_SCOPE,
  M4_BOUNDED_LOCAL_COMMIT_TARGET,
  resolveAttemptExecutionProfile,
} from "@/lib/oa/execution-attempt";

const NOW = "2026-09-11T20:00:00.000Z";
const PROJECT = "prj:ap";
const CYCLE = "cyc:ap";
const EC = "xct:ap";
const PATH = "docs/functional-design.md";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const H0 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";

function contract(partial: Record<string, unknown> = {}) {
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
      commitMessage: "docs: add task manager functional design",
    },
    ...partial,
  };
}

function attempt(id: string, status: ExecutionAttempt["status"] = "succeeded"): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: id,
    executionContractId: EC,
    executionContractVersion: 1,
    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
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

function artifactEv(attemptId: string): Evidence {
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
  };
}

function commitEv(attemptId: string): Evidence {
  return {
    ...artifactEv(attemptId),
    evidenceId: `ev:commit:${attemptId}`,
    type: "other",
    source: "git:local_commit",
    location: `git:local_commit?repo=acme%2Fwidget&commitSha=${H1}&parentSha=${H0}`,
  };
}

describe("D-GCEC-AGENT-01 AttemptExecutionProfile AP", () => {
  it("AP-01 initial docs-write state → docs-write profile", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [],
      evidence: [],
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.profile.kind).toBe("docs_write");
    expect(r.profile.criteria).toEqual({
      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    });
  });

  it("AP-02 verified FS + outstanding commit → local-commit profile", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.profile.kind).toBe("local_commit");
    expect(r.profile.criteria.action).toBe(M4_BOUNDED_LOCAL_COMMIT_ACTION);
    expect(r.profile.criteria.requiredCapabilities).toEqual([
      M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
    ]);
    expect(r.profile.criteria.target).toBe(M4_BOUNDED_LOCAL_COMMIT_TARGET);
    expect(r.profile.criteria.scope).toBe(M4_BOUNDED_LOCAL_COMMIT_SCOPE);
  });

  it("AP-03 verifiedEffects alone without Evidence does not fabricate commit profile", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [],
      claimedVerifiedEffects: ["filesystem.create", "filesystem.modify"],
      authorizedEffects: ["git.commit"],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.reason).toMatch(/without_verified_fs_evidence|without_verified_fs_lineage/);
    }
  });

  it("AP-04 zero eligible / empty authorized → fail closed", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
      authorizedEffects: [],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/zero_eligible/);
  });

  it("AP-05 mixed incompatible authorized slice → fail closed", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
      authorizedEffects: ["git.commit", "filesystem.modify"],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/ambiguous/);
  });

  it("AP-06 caller cannot inject profile", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      claimedProfile: { kind: "local_commit" },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/client_injection/);
  });

  it("AP-07/08 requestedAgentRef / gitCommitSpec cannot redefine profile", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [],
      evidence: [],
      claimedRequestedAgentRef: "agt:m4.cursor.bounded_local_commit",
      claimedGitCommitSpec: { exactPaths: [PATH] },
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.profile.kind).toBe("docs_write");
  });

  it("AP-09 restart recomputation yields same local-commit profile", () => {
    const input = {
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
    };
    const a = resolveAttemptExecutionProfile(input);
    const b = resolveAttemptExecutionProfile(input);
    expect(a).toEqual(b);
    expect(a.ok && a.profile.kind).toBe("local_commit");
  });

  it("AP-13 post-commit → fail closed (GCEC-PUSH not ready)", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a"), attempt("xat:b")],
      evidence: [artifactEv("xat:a"), commitEv("xat:b")],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/effect_not_supported/);
  });

  it("AP-10 M4 + authorized git.push → FAIL CLOSED", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a"), commitEv("xat:b")],
      authorizedEffects: ["git.push"],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/effect_not_supported/);
  });

  it("AP-11 M4 + PR create → FAIL CLOSED", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      authorizedEffects: ["github.pr.create"],
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/effect_not_supported/);
  });

  it("AP-12 M4 + merge → FAIL CLOSED", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      authorizedEffects: ["github.pr.merge"],
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/effect_not_supported/);
  });

  it("AP-14 non-M4 historical contract → contract_legacy still works", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract({
        action: "fixture.action",
        target: "fixture.target",
        scope: "fixture.scope",
        requiredCapabilities: ["cap:fixture"],
        evidenceRequirements: [],
        expectedOutputs: [],
        inputs: {},
      }),
      attempts: [],
      evidence: [],
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.profile.kind).toBe("contract_legacy");
  });

  it("AP-16 validation-only M4 slice → fail closed", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
      authorizedEffects: ["validation.run"],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/effect_not_supported/);
  });
});
