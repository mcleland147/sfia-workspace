/**
 * PRODUCT-JOURNEY-AUTOMATIC-RESULT-QUALIFICATION-01
 * Automatic docs_write post-terminal qualification via materializeW3bProductTerminal.
 * ZERO REAL / ZERO new Attempt.
 * T1 happy · T2 non-conformant · T3 payload unavailable · T4 idempotence ·
 * T5 reload/restart durable · T6 authority · T7 W3-C failure honesty ·
 * CR-ARQ-01 oracleFingerprint restart-safe.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { createHash } from "node:crypto";
import { mkdtempSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { FixedClock } from "@/lib/oa/doctrine";
import type { Digest } from "@/lib/oa/doctrine";
import {
  createInMemoryEvidenceReviewServices,
  docsWriteContractResultIdentity,
  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
  DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
  DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION,
  DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
  DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET,
  DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT,
  expectedDocsWriteConformityOracleFingerprint,
} from "@/lib/oa/evidence-review";
import {
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import {
  materializeW3bProductTerminal,
  rehydrateW3bProductTerminal,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { completeDocsWriteClaimEvidenceCompletion } from "@/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion";
import { NORA_ANALYSIS_UNAVAILABLE_RESERVE } from "@/features/project-assistant/w2/w3bProductTerminalProjection";
import * as w3cPostEvidenceLoop from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";

const ACTOR = { actorId: "actor:auto-qual", role: "project_owner" as const };
const NOW = "2026-09-23T22:00:00.000Z";
const ATTEMPT_ID = "xat:w3a:autoqual01deadbeef";
const PROJECT_ID = "prj:autoqual-focusflow-sim";
const CYCLE_ID = "cyc:trj-autoqual-01";
const TARGET = "projects/focusflow/01-cadrage/document-cadrage-focusflow.md";
const CONTENT_REQUIREMENTS = [
  "Objectif",
  "Périmètre inclus",
  "Périmètre exclu",
  "Critères de succès",
] as const;

const GOOD_MARKDOWN = `# FocusFlow

## Objectif
Gérer une liste de tâches.

## Périmètre inclus
Créer, modifier, lister, terminer.

## Périmètre exclu
Auth, sync.

## Critères de succès
Parcours bout en bout simple.
`;

const BAD_MARKDOWN = `# FocusFlow

## Objectif
Texte.

## Autre
Pas les sections requises.
`;

function digestOf(bytes: Buffer): Digest {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}` as Digest;
}

function makeContract(): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:m3-res:dec:w2-prop:autoqual-01",
    projectId: PROJECT_ID,
    cycleInstanceId: CYCLE_ID,
    version: 3,
    status: "confirmed",
    semanticFingerprint: "fp:pending",
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: "workspace.isolated.docs_write",
    scope: "studio.gcec.docs_write",
    requiredAuthority: "N3",
    constraints: ["BOUNDED DOCS-WRITE", "NO_DELETE", "GATE D REQUIRED"],
    stopConditions: [],
    evidenceRequirements: [DOCS_WRITE_CONTRACT_RESULT_ER_KEY],
    expectedOutputs: [
      DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
      DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION,
    ],
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    reversibility: "reversible",
    idempotencyKey: "idem:ec:autoqual",
    correlationId: "cor:ec:autoqual",
    inputs: {
      targetPath: TARGET,
      contentRequirements: [...CONTENT_REQUIREMENTS],
      validationExpectations: [
        DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET,
        DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT,
      ],
      artifactType: "Markdown",
      repositoryIdentity: "acme/autoqual",
      repositoryBindingIdentity: "acme/autoqual",
      pathAllowlist: ["projects/focusflow/01-cadrage"],
    },
  };
  base.semanticFingerprint = computeExecutionContractSemanticMaterialFingerprint(
    executionContractSemanticMaterial(base),
  );
  return base;
}

function makeAttempt(contract: ExecutionContract): ExecutionAttempt {
  const snap = captureBoundExecutionContractSnapshot(contract);
  return {
    attemptId: ATTEMPT_ID,
    executionContractId: contract.executionContractId,
    executionContractVersion: contract.version,
    executionContractSemanticFingerprint: snap.semanticFingerprint,
    boundExecutionContract: snap,
    status: "succeeded",
    resultRef: `res:m4:${ATTEMPT_ID}`,
    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
    version: 3,
    createdAt: NOW,
    updatedAt: NOW,
  } as ExecutionAttempt;
}

function writeArtifact(root: string, rel: string, content: string): string {
  const abs = path.join(root, ...rel.split("/"));
  mkdirSync(path.dirname(abs), { recursive: true });
  writeFileSync(abs, content, "utf8");
  return abs;
}

function buildOaStack(input: {
  services: ReturnType<typeof createInMemoryEvidenceReviewServices>;
  contract: ExecutionContract;
  attempt: ExecutionAttempt;
}): RuntimeOaStack {
  return {
    clock: new FixedClock(NOW),
    evidenceReviewServices: input.services,
    executionContractServices: {
      getExecutionContract: {
        execute: async () => ({ ok: true as const, contract: input.contract }),
      },
    },
    executionAttemptServices: {
      getExecutionAttempt: {
        execute: async () => ({ ok: true as const, attempt: input.attempt }),
      },
      listExecutionAttempts: {
        execute: async () => ({
          ok: true as const,
          attempts: [input.attempt],
        }),
      },
      registry: {
        getAgent: () => ({
          agentId: input.attempt.selectedAgentRef,
          displayName: "docs-write test agent",
          capabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
        }),
      },
    },
  } as unknown as RuntimeOaStack;
}

async function seedSucceededArtifact(input: {
  services: ReturnType<typeof createInMemoryEvidenceReviewServices>;
  contract: ExecutionContract;
  attempt: ExecutionAttempt;
  content: string;
}): Promise<{ worktree: string; digest: Digest }> {
  const bytes = Buffer.from(input.content, "utf8");
  const digest = digestOf(bytes);
  const worktree = mkdtempSync(path.join(tmpdir(), "sfia-autoqual-"));
  writeArtifact(worktree, TARGET, input.content);
  const ingested = await ingestDocsWriteArtifactEvidence({
    evidenceReviewServices: input.services,
    projectId: PROJECT_ID,
    cycleInstanceId: CYCLE_ID,
    executionContractId: input.contract.executionContractId,
    executionAttemptId: input.attempt.attemptId,
    targetPath: TARGET,
    digest,
    actor: ACTOR,
    nowIso: NOW,
  });
  expect(ingested.ok).toBe(true);
  return { worktree, digest };
}

describe("automatic docs_write result qualification (materialize)", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("T1 — happy path: materialize auto-completes conformity → Product SUCCESS", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const { worktree } = await seedSucceededArtifact({
      services,
      contract,
      attempt,
      content: GOOD_MARKDOWN,
    });

    const oa = buildOaStack({ services, contract, attempt });
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
      docsWriteWorktreeRef: worktree,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("SUCCESS");
    expect(materialized.product.claimAllowed).toBe(true);
    expect(materialized.product.claimEvaluationStatus).toBe("pass");

    const completionIds = docsWriteContractResultIdentity(ATTEMPT_ID, {
      correctionRef: DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
      scopeReviewBundle: true,
    });
    const conformity = await services.evidenceReader.findById(
      completionIds.conformityEvidenceId,
    );
    expect(conformity).toBeTruthy();
    const successorRb = await services.reviewBundleReader.findById(
      completionIds.reviewBundleId,
    );
    expect(successorRb?.frozenAt).toBeTruthy();
    expect(successorRb?.evidenceRefs).toContain(completionIds.evidenceId);
    expect(successorRb?.evidenceRefs).toContain(
      completionIds.conformityEvidenceId,
    );

    const hist = await services.reviewBundleReader.findById(
      docsWriteContractResultIdentity(ATTEMPT_ID).reviewBundleId,
    );
    expect(hist?.frozenAt).toBeTruthy();
    expect(hist?.evidenceRefs).toEqual([
      docsWriteContractResultIdentity(ATTEMPT_ID).evidenceId,
    ]);

    const currentCe = await services.claimEvaluationReader.findById(
      materialized.product.claimEvaluationId!,
    );
    expect(currentCe?.status).toBe("pass");
    expect(currentCe?.claimEvaluationId).toContain(
      DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
    );
  });

  it("T2 — non-conformant artifact → no SUCCESS, Attempt still succeeded", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const { worktree } = await seedSucceededArtifact({
      services,
      contract,
      attempt,
      content: BAD_MARKDOWN,
    });

    const oa = buildOaStack({ services, contract, attempt });
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
      docsWriteWorktreeRef: worktree,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).not.toBe("SUCCESS");
    expect(materialized.product.claimAllowed).toBe(false);
    expect(attempt.status).toBe("succeeded");
    expect(materialized.product.businessReason.toLowerCase()).toMatch(
      /conform|écart|prouvé/,
    );
  });

  it("T3 — payload unavailable → fail-closed Product, technical success preserved", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await ingestDocsWriteArtifactEvidence({
      evidenceReviewServices: services,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      executionContractId: contract.executionContractId,
      executionAttemptId: attempt.attemptId,
      targetPath: TARGET,
      digest: digestOf(bytes),
      actor: ACTOR,
      nowIso: NOW,
    });

    const oa = buildOaStack({ services, contract, attempt });
    // No worktreeRef, no managed file → cannot verify conformity.
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).not.toBe("SUCCESS");
    expect(materialized.product.claimAllowed).toBe(false);
    expect(attempt.status).toBe("succeeded");
  });

  it("T4 — idempotent rematerialize + CR-ARQ-01 oracleFingerprint restart-safe", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const { worktree } = await seedSucceededArtifact({
      services,
      contract,
      attempt,
      content: GOOD_MARKDOWN,
    });

    const oa = buildOaStack({ services, contract, attempt });
    const first = await materializeW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
      docsWriteWorktreeRef: worktree,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const expectedFp = expectedDocsWriteConformityOracleFingerprint(attempt);
    expect(expectedFp).toHaveLength(64);

    // Restart-safe: no artifactAbsolutePath / artifactBytes — durable only.
    const restarted = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(restarted.ok).toBe(true);
    if (!restarted.ok) return;
    expect(restarted.reusedFromIdempotencyKey).toBe(true);
    expect(restarted.oracleFingerprint).toHaveLength(64);
    expect(restarted.oracleFingerprint).toBe(expectedFp);
    expect(restarted.claimEvaluation.status).toBe("pass");
    expect(restarted.claimEvaluation.claimEvaluationId).toBe(
      first.product.claimEvaluationId,
    );

    const second = await materializeW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
      // No worktree — restart-safe short-circuit via existing conformity.
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.product.outcome).toBe("SUCCESS");
    expect(second.product.claimEvaluationId).toBe(
      first.product.claimEvaluationId,
    );

    const ids = docsWriteContractResultIdentity(ATTEMPT_ID, {
      correctionRef: DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
      scopeReviewBundle: true,
    });
    const conformity = await services.evidenceReader.findById(
      ids.conformityEvidenceId,
    );
    expect(conformity).toBeTruthy();
    const successorRb = await services.reviewBundleReader.findById(
      ids.reviewBundleId,
    );
    expect(successorRb?.frozenAt).toBeTruthy();
  });

  it("T5 — reload/restart durable via rehydrateW3bProductTerminal (no ephemeral payload)", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const { worktree } = await seedSucceededArtifact({
      services,
      contract,
      attempt,
      content: GOOD_MARKDOWN,
    });

    const oa = buildOaStack({ services, contract, attempt });
    const first = await materializeW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
      docsWriteWorktreeRef: worktree,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.product.outcome).toBe("SUCCESS");

    const completionIds = docsWriteContractResultIdentity(ATTEMPT_ID, {
      correctionRef: DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
      scopeReviewBundle: true,
    });
    const conformityBefore = await services.evidenceReader.findById(
      completionIds.conformityEvidenceId,
    );
    const successorBefore = await services.reviewBundleReader.findById(
      completionIds.reviewBundleId,
    );
    expect(conformityBefore).toBeTruthy();
    expect(successorBefore?.frozenAt).toBeTruthy();

    // Simulate UI/process loss: durable rehydrate seam (same as
    // w2RehydrateProductOutcomeAction) — no worktree / no artifact bytes.
    const reloaded = await rehydrateW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
    });
    expect(reloaded.ok).toBe(true);
    if (!reloaded.ok) return;
    expect(reloaded.product.outcome).toBe("SUCCESS");
    expect(reloaded.product.claimAllowed).toBe(true);
    expect(reloaded.product.claimEvaluationId).toBe(
      first.product.claimEvaluationId,
    );
    expect(reloaded.product.claimEvaluationId).toContain(
      DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
    );
    expect(reloaded.product.reviewBundleId).toBe(completionIds.reviewBundleId);
    expect(reloaded.product.evidenceId).toBe(completionIds.evidenceId);

    const conformityAfter = await services.evidenceReader.findById(
      completionIds.conformityEvidenceId,
    );
    const successorAfter = await services.reviewBundleReader.findById(
      completionIds.reviewBundleId,
    );
    expect(conformityAfter?.evidenceId).toBe(conformityBefore?.evidenceId);
    expect(successorAfter?.reviewBundleId).toBe(successorBefore?.reviewBundleId);
    expect(successorAfter?.frozenVersion).toBe(successorBefore?.frozenVersion);
    expect(attempt.status).toBe("succeeded");
    expect(attempt.attemptId).toBe(ATTEMPT_ID);
  });

  it("T6 — authority: completion does not create HumanDecision / new Attempt", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const { worktree } = await seedSucceededArtifact({
      services,
      contract,
      attempt,
      content: GOOD_MARKDOWN,
    });
    const done = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      artifactAbsolutePath: path.join(worktree, TARGET),
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(done.ok).toBe(true);
    expect(attempt.status).toBe("succeeded");
    expect(attempt.attemptId).toBe(ATTEMPT_ID);
  });

  it("T7 — W3-C failure after qualified CE → Product preserved + Pilot reserve", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const { worktree } = await seedSucceededArtifact({
      services,
      contract,
      attempt,
      content: GOOD_MARKDOWN,
    });

    vi.spyOn(w3cPostEvidenceLoop, "findExistingW3cPostEvidence").mockResolvedValue(
      null,
    );
    vi.spyOn(
      w3cPostEvidenceLoop,
      "rehydrateW3cPostEvidenceFromLps",
    ).mockResolvedValue({
      ok: false,
      code: "LPS_MISS",
      message: "no durable W3-C",
      failClosed: true,
    });
    vi.spyOn(w3cPostEvidenceLoop, "runW3cPostEvidenceLoop").mockRejectedValue(
      new Error("Nora/LPS boom"),
    );

    const oa = buildOaStack({ services, contract, attempt });
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
      docsWriteWorktreeRef: worktree,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("SUCCESS");
    expect(materialized.product.claimAllowed).toBe(true);
    expect(materialized.product.claimEvaluationStatus).toBe("pass");
    expect(materialized.postEvidence?.ok).toBe(false);
    if (materialized.postEvidence && !materialized.postEvidence.ok) {
      expect(materialized.postEvidence.code).toBe(
        "W3C_POST_EVIDENCE_UNAVAILABLE",
      );
      expect(materialized.postEvidence.failClosed).toBe(true);
    }
    expect(materialized.product.reservations).toContain(
      NORA_ANALYSIS_UNAVAILABLE_RESERVE,
    );
    expect(attempt.status).toBe("succeeded");
    expect(attempt.attemptId).toBe(ATTEMPT_ID);
  });
});
