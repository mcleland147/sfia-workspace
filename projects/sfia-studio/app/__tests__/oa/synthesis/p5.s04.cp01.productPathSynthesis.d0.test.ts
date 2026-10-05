/**
 * P5-S04 CP01 — Product-path Synthesis materialization + lineage/currentness.
 * ZERO REAL.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  materializeW3bProductTerminal,
  rehydrateW3bProductTerminal,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { buildProductSynthesisLineageInput } from "@/features/project-assistant/buildProductSynthesisLineageInput";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import {
  CLAIM_EVALUATION_SCHEMA_VERSION,
  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
  type ClaimEvaluation,
} from "@/lib/oa/evidence-review";
import { SqliteProductStore } from "@/lib/oa/project";
import {
  createSqliteSynthesisServices,
  type ProductSynthesisProjection,
} from "@/lib/oa/synthesis";
import {
  clearW3bBoundaryArm,
} from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  settleDeterministicProductCursorSuccess,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "../../project-assistant/w2Harness";

const NOW = "2026-10-05T12:00:00.000Z";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
  setConversationProviderForTests(null);
  clearW3bBoundaryArm();
});

afterEach(() => {
  clearW3bBoundaryArm();
  cleanupW2TempDirs();
});

function makeClaimEvaluation(
  overrides: Partial<ClaimEvaluation> & { claimEvaluationId: string },
): ClaimEvaluation {
  const projectId = overrides.contractResultBindings?.projectId ?? "prj:s04-c";
  const status = overrides.status ?? "pass";
  const base: ClaimEvaluation = {
    schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
    claimEvaluationId: overrides.claimEvaluationId,
    claimType: "technique",
    claimStatement:
      overrides.claimStatement ?? "Temporary artifact produced for contract result",
    criticality: "non_critical",
    evaluationMethod: "deterministic",
    requiredEvidenceRefs: overrides.requiredEvidenceRefs ?? ["ev:s04-1"],
    reviewBundleId: overrides.reviewBundleId ?? "rb:s04-1",
    reviewBundleVersion: overrides.reviewBundleVersion ?? 2,
    status,
    proposedBy: LOCAL_PILOTE_ACTOR,
    proposedAt: NOW,
    evaluatedAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${overrides.claimEvaluationId}`,
      actor: LOCAL_PILOTE_ACTOR,
      source: "review",
      timestamp: NOW,
      correlationId: `cor:${overrides.claimEvaluationId}`,
      projectId,
    },
    version: 1,
    subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
    contractResultBindings: {
      projectId,
      cycleInstanceId: "cyc:s04-1",
      executionContractId: "xct:s04-1",
      executionContractVersion: 1,
      executionContractSemanticFingerprint: "fp:s04-contract",
      executionAttemptId: "xat:s04-1",
      reviewBundleId: overrides.reviewBundleId ?? "rb:s04-1",
      reviewBundleVersion: 2,
      evidenceRefs: ["ev:s04-1"],
    },
  };
  return { ...base, ...overrides, status };
}

async function authorizeAndSucceed(suffix: string) {
  const db = tempProductDbPath(`s04-cp01-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `s04${suffix}`,
  });
  const seeded = await seedQualifiedProject(runtime, { suffix });
  const oa = runtime.oa!;
  const qualification = await resolveW2QualificationInputs({
    oa,
    projectId: seeded.projectId,
  });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error("qual");
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId: seeded.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error("propose");
  const decided = await decideTrajectory({
    oa,
    projectId: seeded.projectId,
    optionSetRef: proposed.optionSetRef,
    options: proposed.options,
    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
    selectedOptionRef: GOVERNED_OPTION_REF,
    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
    candidateVersion: proposed.proposedTrajectory!.version,
    forceLocalAuthority: true,
  });
  expect(decided.ok).toBe(true);
  if (!decided.ok) throw new Error("decide");
  const context = await currentF2Context(runtime, seeded.projectId);
  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
    qualifiedOperationKind: "generate-temporary-artifact",
    pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error(prepared.code);
  const executionContractId = prepared.contract.executionContractId;
  await inspectExecutionContract({
    oa,
    projectId: seeded.projectId,
    executionContractId,
  });
  const confirmed = await confirmExecutionContractForAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error(confirmed.code);
  const authorized = await evaluateExecutionAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok && authorized.outcome === "AUTHORIZED").toBe(true);

  const selected = await governedExecuteSelectAgent({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(selected.code);
  const started = await governedExecuteStart({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    attemptId: selected.attemptId,
    forceLocalAuthority: true,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(started.code);

  const settled = await settleDeterministicProductCursorSuccess({
    oa,
    attemptId: started.attemptId,
  });
  expect(settled.ok).toBe(true);
  if (!settled.ok) throw new Error(settled.code);
  const projected = await governedExecuteRecordResult({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    attemptId: started.attemptId,
    forceLocalAuthority: true,
  });
  expect(projected.ok).toBe(true);
  if (!projected.ok) throw new Error(projected.code);

  return {
    oa,
    projectId: seeded.projectId,
    attemptId: started.attemptId,
    executionContractId,
    db,
    store: oa.projectServices.store as SqliteProductStore,
  };
}

describe("P5-S04 CP01 currentness C01–C08", () => {
  it("C01 — same semantics + different generatedAt → same fingerprint", () => {
    const store = new SqliteProductStore(tempProductDbPath("c01.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:c01" });
    const a = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      evidence: [{ evidenceId: "ev:s04-1", status: "verified", type: "artifact" }],
      recommendation: { text: "Continuer.", ref: "epi:w3c-rec:c01" },
      generatedAt: NOW,
    });
    const b = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      evidence: [{ evidenceId: "ev:s04-1", status: "verified", type: "artifact" }],
      recommendation: { text: "Continuer.", ref: "epi:w3c-rec:c01" },
      generatedAt: "2026-10-05T18:00:00.000Z",
    });
    expect(b.sourceFingerprint).toBe(a.sourceFingerprint);
    store.close();
  });

  it("C02 — ReviewBundle frozenVersion change → different fingerprint", () => {
    const store = new SqliteProductStore(tempProductDbPath("c02.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:c02" });
    const a = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      reviewBundle: {
        reviewBundleId: "rb:s04-1",
        status: "frozen",
        completeness: "complete",
        frozenVersion: 1,
      },
      generatedAt: NOW,
    });
    const b = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      reviewBundle: {
        reviewBundleId: "rb:s04-1",
        status: "frozen",
        completeness: "complete",
        frozenVersion: 2,
      },
      generatedAt: NOW,
    });
    expect(b.sourceFingerprint).not.toBe(a.sourceFingerprint);
    store.close();
  });

  it("C03 — EC version / semanticFingerprint change → different fingerprint", () => {
    const store = new SqliteProductStore(tempProductDbPath("c03.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:c03" });
    const a = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      executionContract: {
        executionContractId: "xct:s04-1",
        action: "product:generate-temporary-artifact",
        executionContractVersion: 1,
        semanticFingerprint: "fp:v1",
      },
      generatedAt: NOW,
    });
    const b = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      executionContract: {
        executionContractId: "xct:s04-1",
        action: "product:generate-temporary-artifact",
        executionContractVersion: 2,
        semanticFingerprint: "fp:v2",
      },
      generatedAt: NOW,
    });
    expect(b.sourceFingerprint).not.toBe(a.sourceFingerprint);
    store.close();
  });

  it("C04 — Attempt status change → different fingerprint", () => {
    const store = new SqliteProductStore(tempProductDbPath("c04.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:c04" });
    const a = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      attempt: { attemptId: "xat:s04-1", status: "succeeded" },
      generatedAt: NOW,
    });
    const b = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      attempt: { attemptId: "xat:s04-1", status: "failed" },
      generatedAt: NOW,
    });
    expect(b.sourceFingerprint).not.toBe(a.sourceFingerprint);
    store.close();
  });

  it("C05 — Evidence status/type change → different fingerprint", () => {
    const store = new SqliteProductStore(tempProductDbPath("c05.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:c05" });
    const a = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      evidence: [{ evidenceId: "ev:s04-1", status: "verified", type: "artifact" }],
      generatedAt: NOW,
    });
    const b = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      evidence: [{ evidenceId: "ev:s04-1", status: "draft", type: "artifact" }],
      generatedAt: NOW,
    });
    expect(b.sourceFingerprint).not.toBe(a.sourceFingerprint);
    store.close();
  });

  it("C06 — recommendation text change → different fingerprint", () => {
    const store = new SqliteProductStore(tempProductDbPath("c06.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:c06" });
    const a = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      recommendation: { text: "Continuer.", ref: "epi:w3c-rec:c06" },
      generatedAt: NOW,
    });
    const b = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: ce,
      recommendation: { text: "Replanifier.", ref: "epi:w3c-rec:c06" },
      generatedAt: NOW,
    });
    expect(b.sourceFingerprint).not.toBe(a.sourceFingerprint);
    store.close();
  });

  it("C07 — CE supersession produces Synthesis successor", async () => {
    const store = new SqliteProductStore(tempProductDbPath("c07.sqlite"));
    store.db
      .prepare(
        `INSERT INTO oa_projects(project_id, status, current_lps_version_id, payload_json, created_at, updated_at)
         VALUES (?, 'active', NULL, ?, ?, ?)`,
      )
      .run(
        "prj:s04-c",
        JSON.stringify({ projectId: "prj:s04-c", title: "C07", status: "active" }),
        NOW,
        NOW,
      );
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ceA = makeClaimEvaluation({ claimEvaluationId: "clm:c07-a" });
    const synA = await svc.materialize({
      projectId: "prj:s04-c",
      claimEvaluation: ceA,
      evidence: [{ evidenceId: "ev:s04-1" }],
      generatedAt: NOW,
    });
    const ceB = makeClaimEvaluation({
      claimEvaluationId: "clm:c07-b",
      supersedesClaimEvaluationId: "clm:c07-a",
      claimStatement: "Corrected contract result claim",
    });
    const synB = await svc.materialize({
      projectId: "prj:s04-c",
      claimEvaluation: ceB,
      evidence: [{ evidenceId: "ev:s04-1" }],
      generatedAt: "2026-10-05T13:00:00.000Z",
    });
    expect(synB.synthesisId).not.toBe(synA.synthesisId);
    expect(synB.supersedes).toBe(synA.synthesisId);
    expect(synB.status).toBe("current");
    const old = await svc.repository.findById(synA.synthesisId);
    expect(old?.status).toBe("superseded");
    store.close();
  });

  it("C08 — unrelated generatedAt does not supersede", async () => {
    const store = new SqliteProductStore(tempProductDbPath("c08.sqlite"));
    store.db
      .prepare(
        `INSERT INTO oa_projects(project_id, status, current_lps_version_id, payload_json, created_at, updated_at)
         VALUES (?, 'active', NULL, ?, ?, ?)`,
      )
      .run(
        "prj:s04-c",
        JSON.stringify({ projectId: "prj:s04-c", title: "C08", status: "active" }),
        NOW,
        NOW,
      );
    const svc = createSqliteSynthesisServices({ productStore: store });
    const input = {
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:c08" }),
      evidence: [{ evidenceId: "ev:s04-1" }],
      generatedAt: NOW,
    };
    const a = await svc.materialize(input);
    const b = await svc.materialize({
      ...input,
      generatedAt: "2026-10-05T20:00:00.000Z",
    });
    expect(b.synthesisId).toBe(a.synthesisId);
    expect(b.status).toBe("current");
    const listed = await svc.repository.listByProject("prj:s04-c");
    expect(listed).toHaveLength(1);
    store.close();
  });
});

describe("P5-S04 CP01 lineage L01–L09 + product-path P01–P05", () => {
  it("L01 — generic/non Contract-Result CE rejected", async () => {
    const ctx = await authorizeAndSucceed("l01");
    const ceId = `clm:generic-${ctx.attemptId}`;
    const generic: ClaimEvaluation = {
      ...makeClaimEvaluation({
        claimEvaluationId: ceId,
        claimStatement: "generic claim",
      }),
      subjectKind: undefined,
      contractResultBindings: undefined,
      status: "pending",
      evaluatedAt: undefined,
    };
    ctx.store.db
      .prepare(
        `INSERT INTO oa_claim_evaluations(
           claim_evaluation_id, project_id, status, idempotency_key, version,
           payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        ceId,
        ctx.projectId,
        generic.status,
        `idem:generic-${ctx.attemptId}`,
        1,
        JSON.stringify(generic),
        NOW,
        NOW,
      );
    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: ceId,
    });
    expect(lineage.ok).toBe(false);
    if (lineage.ok) return;
    expect(lineage.code).toBe(
      "SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_SUBJECT",
    );
  });

  it("L02 — Contract Result CE without bindings rejected", async () => {
    const ctx = await authorizeAndSucceed("l02");
    const ceId = `clm:nobind-${ctx.attemptId}`;
    const noBind: ClaimEvaluation = {
      ...makeClaimEvaluation({ claimEvaluationId: ceId }),
      subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
      contractResultBindings: undefined,
      status: "pending",
      evaluatedAt: undefined,
    };
    ctx.store.db
      .prepare(
        `INSERT INTO oa_claim_evaluations(
           claim_evaluation_id, project_id, status, idempotency_key, version,
           payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        ceId,
        ctx.projectId,
        noBind.status,
        `idem:nobind-${ctx.attemptId}`,
        1,
        JSON.stringify(noBind),
        NOW,
        NOW,
      );
    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: ceId,
    });
    expect(lineage.ok).toBe(false);
    if (lineage.ok) return;
    expect(lineage.code).toBe(
      "SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_BINDINGS",
    );
  });

  it("L03 — project mismatch rejected", async () => {
    const ctx = await authorizeAndSucceed("l03");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;
    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: "prj:other-project",
      claimEvaluationId: ceId,
    });
    expect(lineage.ok).toBe(false);
    if (lineage.ok) return;
    expect(lineage.code).toBe("CLAIM_EVALUATION_PROJECT_MISMATCH");
  });

  it("L04–L08 — binding mismatches rejected; L09 fully canonical accepted", async () => {
    const ctx = await authorizeAndSucceed("lxx");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;
    const ce =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(ce?.contractResultBindings).toBeTruthy();
    const bindings = ce!.contractResultBindings!;

    // L09 — canonical accepted
    const okLineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: ceId,
    });
    expect(okLineage.ok).toBe(true);

    // L04 — Attempt binding mismatch
    {
      const bad = structuredClone(ce!);
      bad.claimEvaluationId = `clm:l04-${ctx.attemptId}`;
      bad.contractResultBindings = {
        ...bindings,
        executionAttemptId: "xat:not-this-attempt",
      };
      bad.idempotencyKey = `idem:l04-${ctx.attemptId}`;
      await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);
      const lineage = await buildProductSynthesisLineageInput({
        oa: ctx.oa,
        projectId: ctx.projectId,
        claimEvaluationId: bad.claimEvaluationId,
      });
      expect(lineage.ok).toBe(false);
      if (!lineage.ok) {
        expect(lineage.code).toBe("SYNTHESIS_LINEAGE_BINDINGS_MISMATCH");
      }
    }

    // L05 — EC version / fingerprint mismatch
    {
      const bad = structuredClone(ce!);
      bad.claimEvaluationId = `clm:l05-${ctx.attemptId}`;
      bad.contractResultBindings = {
        ...bindings,
        executionContractVersion: bindings.executionContractVersion + 99,
        executionContractSemanticFingerprint: "fp:wrong",
      };
      bad.idempotencyKey = `idem:l05-${ctx.attemptId}`;
      await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);
      const lineage = await buildProductSynthesisLineageInput({
        oa: ctx.oa,
        projectId: ctx.projectId,
        claimEvaluationId: bad.claimEvaluationId,
      });
      expect(lineage.ok).toBe(false);
      if (!lineage.ok) {
        expect(lineage.code).toBe("SYNTHESIS_LINEAGE_BINDINGS_MISMATCH");
      }
    }

    // L06 — ReviewBundle version mismatch
    {
      const bad = structuredClone(ce!);
      bad.claimEvaluationId = `clm:l06-${ctx.attemptId}`;
      bad.contractResultBindings = {
        ...bindings,
        reviewBundleVersion: (bindings.reviewBundleVersion ?? 1) + 50,
      };
      bad.idempotencyKey = `idem:l06-${ctx.attemptId}`;
      await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);
      const lineage = await buildProductSynthesisLineageInput({
        oa: ctx.oa,
        projectId: ctx.projectId,
        claimEvaluationId: bad.claimEvaluationId,
      });
      expect(lineage.ok).toBe(false);
      if (!lineage.ok) {
        expect(lineage.code).toBe("SYNTHESIS_LINEAGE_BINDINGS_MISMATCH");
      }
    }

    // L07 — Evidence refs/order mismatch
    {
      const bad = structuredClone(ce!);
      bad.claimEvaluationId = `clm:l07-${ctx.attemptId}`;
      bad.contractResultBindings = {
        ...bindings,
        evidenceRefs: [...bindings.evidenceRefs, "ev:extra-mismatch"],
      };
      bad.idempotencyKey = `idem:l07-${ctx.attemptId}`;
      await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);
      const lineage = await buildProductSynthesisLineageInput({
        oa: ctx.oa,
        projectId: ctx.projectId,
        claimEvaluationId: bad.claimEvaluationId,
      });
      expect(lineage.ok).toBe(false);
      if (!lineage.ok) {
        expect(lineage.code).toBe("SYNTHESIS_LINEAGE_BINDINGS_MISMATCH");
      }
    }

    // L08 — cycle mismatch when bound
    if (bindings.cycleInstanceId) {
      const bad = structuredClone(ce!);
      bad.claimEvaluationId = `clm:l08-${ctx.attemptId}`;
      bad.contractResultBindings = {
        ...bindings,
        cycleInstanceId: "cyc:wrong-cycle",
      };
      bad.idempotencyKey = `idem:l08-${ctx.attemptId}`;
      await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);
      const lineage = await buildProductSynthesisLineageInput({
        oa: ctx.oa,
        projectId: ctx.projectId,
        claimEvaluationId: bad.claimEvaluationId,
      });
      expect(lineage.ok).toBe(false);
      if (!lineage.ok) {
        expect(lineage.code).toBe("SYNTHESIS_LINEAGE_BINDINGS_MISMATCH");
      }
    }
  });

  it("P01 — governed Product path auto-materializes Synthesis", async () => {
    const ctx = await authorizeAndSucceed("p01");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.postEvidence?.ok).toBe(true);

    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const listed = await svc.repository.listByProject(ctx.projectId);
    const current = listed.filter((s) => s.status === "current");
    expect(current.length).toBeGreaterThanOrEqual(1);
    const syn = current[0]!;
    expect(syn.authority).toBe("none");
    expect(syn.sourceBindings.claimEvaluationId).toBe(
      materialized.product.claimEvaluationId,
    );
    const joined = Object.values(syn.sections).join("\n");
    expect(joined).not.toMatch(/ClaimEvaluation/);
    expect(joined).not.toMatch(/NON-AUTORITATIVE/);
  });

  it("P02 — rehydrate/idempotence returns same Synthesis", async () => {
    const ctx = await authorizeAndSucceed("p02");
    const first = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const second = await rehydrateW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(second.ok).toBe(true);

    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const listed = await svc.repository.listByProject(ctx.projectId);
    const current = listed.filter((s) => s.status === "current");
    expect(current).toHaveLength(1);
  });

  it("P03 — W3-C recommendation propagates into Synthesis", async () => {
    const ctx = await authorizeAndSucceed("p03");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok || !materialized.postEvidence?.ok) return;

    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const listed = await svc.repository.listByProject(ctx.projectId);
    const syn = listed.find((s) => s.status === "current");
    expect(syn).toBeTruthy();
    expect(syn!.sections.recommendation.length).toBeGreaterThan(0);
    expect(syn!.sections.recommendation).not.toBe(
      "Aucune recommandation Product courante n'est disponible pour cette synthèse.",
    );
    expect(syn!.sections.recommendation).not.toMatch(
      /\b(D5|HumanDecision|ProjectTrajectory|W2|Morris|NOT_PROVEN|evaluate claim)\b/i,
    );
    expect(syn!.sourceBindings.recommendationRef).toMatch(/^epi:w3c-rec:/);
    expect(materialized.postEvidence.recommendation.authority).toBe("none");
    expect(materialized.synthesisMaterialization?.status).toBe("materialized");
  });

  it("P04 — mismatched lineage → no Synthesis; Truth C intact", async () => {
    const ctx = await authorizeAndSucceed("p04");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;
    const ce =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(ce).toBeTruthy();

    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    await svc.repository.deleteAllByProject(ctx.projectId);

    const bad = structuredClone(ce!);
    bad.claimEvaluationId = `clm:p04-bad-${ctx.attemptId}`;
    bad.contractResultBindings = {
      ...ce!.contractResultBindings!,
      executionAttemptId: "xat:stale",
    };
    bad.idempotencyKey = `idem:p04-bad-${ctx.attemptId}`;
    await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);

    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: bad.claimEvaluationId,
    });
    expect(lineage.ok).toBe(false);

    const listed = await svc.repository.listByProject(ctx.projectId);
    expect(listed).toHaveLength(0);

    const stillThere =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(stillThere?.status).toBe(ce!.status);
  });

  it("P05 — Synthesis soft-fail leaves CE / W3-C intact", async () => {
    const ctx = await authorizeAndSucceed("p05");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;
    const before =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(before).toBeTruthy();
    expect(materialized.postEvidence?.ok).toBe(true);

    // Soft-fail path: call lineage with wrong project — must not mutate CE.
    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: "prj:wrong",
      claimEvaluationId: ceId,
    });
    expect(lineage.ok).toBe(false);

    const after =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(after?.status).toBe(before!.status);
    expect(after?.claimEvaluationId).toBe(ceId);
    expect(materialized.product.outcome).toBeTruthy();
  });
});

describe("P5-S04 CP01 Pilot language regression", () => {
  it("nominal sections exclude OA jargon", () => {
    const store = new SqliteProductStore(tempProductDbPath("pilot.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:pilot" }),
      executionContract: {
        executionContractId: "xct:s04-1",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
      },
      attempt: { attemptId: "xat:s04-1", status: "succeeded" },
      evidence: [{ evidenceId: "ev:s04-1", status: "verified", type: "artifact" }],
      reviewBundle: {
        reviewBundleId: "rb:s04-1",
        status: "frozen",
        completeness: "complete",
        frozenVersion: 2,
      },
      generatedAt: NOW,
    }) as ProductSynthesisProjection;
    const joined = Object.values(built.sections).join("\n");
    expect(joined).not.toMatch(/ClaimEvaluation|ReviewBundle|Statut CE|deterministic|non_critical|canonical PASS|\bclm:|\brb:|\bxat:|\bev:|\bcursor\.docs_write|\bNOT_PROVEN\b|expectedOutputs|HumanDecision|ProjectTrajectory|\bD5\b|\bW2\b/);
    expect(built.subject).toBe("Résultat de l'action atteint");
    expect(built.sections.planned).not.toMatch(/product:generate-temporary-artifact|cursor\./);
    expect(built.authority).toBe("none");
    store.close();
  });
});
