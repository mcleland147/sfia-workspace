/**
 * P5-S04 CP02 — Soft-fail observability · Pilot projection · recommendation
 * no-fallback · fail-closed Evidence. ZERO REAL.
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
  ABSENT_RECOMMENDATION_TEXT,
  createSqliteSynthesisServices,
  formatW3cRecommendationForSynthesis,
  presentProductOutcomeSubject,
  projectPilotRecommendationFromW3c,
  type ProductSynthesisProjection,
} from "@/lib/oa/synthesis";
import { clearW3bBoundaryArm } from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
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

const FORBIDDEN_PILOT =
  /ClaimEvaluation|ReviewBundle|ContractResult|HumanDecision|ProjectTrajectory|\bD5\b|\bW2\b|\bNOT_PROVEN\b|expectedOutputs|evaluate claim|cursor\.docs_write|workspace\.isolated|studio\.gcec|\bclm:|\brb:|\bxat:|\bxct:|\bev:/i;

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
      overrides.claimStatement ??
      "Temporary artifact produced for contract result xct:hidden",
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
  const db = tempProductDbPath(`s04-cp02-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `s04c2${suffix}`,
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

function installSynthesisInsertAbortTrigger(store: SqliteProductStore): void {
  store.db.exec(`
    CREATE TRIGGER IF NOT EXISTS test_cp02_abort_oa_syntheses_insert
    BEFORE INSERT ON oa_syntheses
    BEGIN
      SELECT RAISE(ABORT, 'TEST_CP02_SYNTHESIS_INSERT_ABORT');
    END;
  `);
}

function dropSynthesisInsertAbortTrigger(store: SqliteProductStore): void {
  store.db.exec(
    `DROP TRIGGER IF EXISTS test_cp02_abort_oa_syntheses_insert;`,
  );
}

function assertPilotSafeSections(syn: ProductSynthesisProjection): void {
  const joined = [
    syn.title,
    syn.subject,
    ...Object.values(syn.sections),
  ].join("\n");
  expect(joined).not.toMatch(FORBIDDEN_PILOT);
}

describe("P5-S04 CP02 Axis 1 soft-fail observability SF01–SF07", () => {
  it("SF01 — success attaches synthesisMaterialization materialized", async () => {
    const ctx = await authorizeAndSucceed("sf01");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.postEvidence?.ok).toBe(true);
    expect(materialized.synthesisMaterialization?.status).toBe("materialized");
    if (materialized.synthesisMaterialization?.status === "materialized") {
      expect(materialized.synthesisMaterialization.synthesisId).toMatch(/^syn:/);
    }
  });

  it("SF02–SF05 — SQLite abort → ok:true, CE/W3-C durable, no Synthesis, failed observability", async () => {
    const ctx = await authorizeAndSucceed("sf02");
    installSynthesisInsertAbortTrigger(ctx.store);

    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;

    // SF02 — ok stays true when only Synthesis fails
    expect(materialized.ok).toBe(true);
    // SF03 — CE durable
    expect(materialized.product.claimEvaluationId).toBeTruthy();
    const ce =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(
        materialized.product.claimEvaluationId!,
      );
    expect(ce).toBeTruthy();
    // SF04 — W3-C durable
    expect(materialized.postEvidence?.ok).toBe(true);
    // SF05 — no Synthesis row + failed observability
    expect(materialized.synthesisMaterialization?.status).toBe("failed");
    if (materialized.synthesisMaterialization?.status === "failed") {
      expect(materialized.synthesisMaterialization.retryable).toBe(true);
      expect(materialized.synthesisMaterialization.code.length).toBeGreaterThan(0);
      expect(materialized.synthesisMaterialization.message.length).toBeGreaterThan(
        0,
      );
    }
    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const listed = await svc.repository.listByProject(ctx.projectId);
    expect(listed).toHaveLength(0);

    dropSynthesisInsertAbortTrigger(ctx.store);
  });

  it("SF06–SF07 — drop trigger + rehydrate → Synthesis materializes, one current", async () => {
    const ctx = await authorizeAndSucceed("sf06");
    installSynthesisInsertAbortTrigger(ctx.store);
    const failed = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(failed.ok).toBe(true);
    if (!failed.ok) return;
    expect(failed.synthesisMaterialization?.status).toBe("failed");
    const ceId = failed.product.claimEvaluationId!;
    const ceBefore =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(ceBefore).toBeTruthy();

    dropSynthesisInsertAbortTrigger(ctx.store);

    const rehydrated = await rehydrateW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    // SF06 — Synthesis materializes
    expect(rehydrated.synthesisMaterialization?.status).toBe("materialized");
    const ceAfter =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(ceId);
    expect(ceAfter?.status).toBe(ceBefore!.status);

    // SF07 — one current
    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const listed = await svc.repository.listByProject(ctx.projectId);
    const current = listed.filter((s) => s.status === "current");
    expect(current).toHaveLength(1);
  });
});

describe("P5-S04 CP02 Axis 2 Pilot semantic projection PL01–PL09", () => {
  it("PL01 — PASS subject/title from product outcome, not claimStatement", () => {
    const store = new SqliteProductStore(tempProductDbPath("pl01.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:pl01",
        claimStatement: "Raw claim with xct:s04-1 and clm:hidden",
        status: "pass",
      }),
      generatedAt: NOW,
    });
    expect(built.subject).toBe("Résultat de l'action atteint");
    expect(built.title).toContain("Résultat de l'action atteint");
    expect(built.subject).not.toContain("xct:");
    expect(built.subject).not.toContain("Raw claim");
    store.close();
  });

  it("PL02 — FAIL / NOT_PROVEN subjects", () => {
    expect(presentProductOutcomeSubject("FAIL")).toBe(
      "Résultat de l'action en échec",
    );
    expect(presentProductOutcomeSubject("NOT_PROVEN")).toBe(
      "Résultat de l'action non prouvé",
    );
    const store = new SqliteProductStore(tempProductDbPath("pl02.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const fail = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:pl02f",
        status: "fail",
      }),
      generatedAt: NOW,
    });
    expect(fail.subject).toBe("Résultat de l'action en échec");
    const np = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:pl02n",
        status: "not_proven",
      }),
      generatedAt: NOW,
    });
    expect(np.subject).toBe("Résultat de l'action non prouvé");
    store.close();
  });

  it("PL03 — planned never surfaces raw action/target/scope machine codes", () => {
    const store = new SqliteProductStore(tempProductDbPath("pl03.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:pl03" }),
      executionContract: {
        executionContractId: "xct:s04-1",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.path",
        scope: "studio.gcec.scope",
      },
      generatedAt: NOW,
    });
    expect(built.sections.planned).toBe(
      "Un travail Product était prévu pour cette synthèse.",
    );
    expect(built.sections.planned).not.toMatch(
      /cursor\.docs_write|workspace\.isolated|studio\.gcec/,
    );
    store.close();
  });

  it("PL04 — planned uses human-readable title when present", () => {
    const store = new SqliteProductStore(tempProductDbPath("pl04.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:pl04" }),
      executionContract: {
        executionContractId: "xct:s04-1",
        action: "cursor.docs_write.apply",
        title: "Rédiger une note de cadrage",
      },
      generatedAt: NOW,
    });
    expect(built.sections.planned).toBe(
      "Travail prévu : Rédiger une note de cadrage.",
    );
    store.close();
  });

  it("PL05 — done distinguishes Attempt success from Product proof", () => {
    const store = new SqliteProductStore(tempProductDbPath("pl05.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const pass = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:pl05p",
        status: "pass",
      }),
      attempt: { attemptId: "xat:s04-1", status: "succeeded" },
      generatedAt: NOW,
    });
    expect(pass.sections.done).toContain("résultat Product est atteint");
    const np = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:pl05n",
        status: "not_proven",
      }),
      attempt: { attemptId: "xat:s04-1", status: "succeeded" },
      generatedAt: NOW,
    });
    expect(np.sections.done).toMatch(/sans preuve Product/);
    expect(np.sections.done).not.toMatch(FORBIDDEN_PILOT);
    store.close();
  });

  it("PL06 — recommendation adapter maps solicit_morris_* without Morris", () => {
    const arb = projectPilotRecommendationFromW3c({
      kind: "continue",
      headline: "Arbitrage Morris de coordination recommandé",
      nextStep: "coordinate_morris_arbitration",
      nextActionCode: "solicit_morris_arbitration",
    });
    expect(arb).toContain("arbitrage");
    expect(arb).not.toMatch(/Morris/i);
    expect(arb).not.toMatch(/\bD5\b|HumanDecision|ProjectTrajectory|\bW2\b/);

    const go = projectPilotRecommendationFromW3c({
      kind: "continue",
      headline: "Gate Morris next-cycle",
      nextActionCode: "solicit_morris_go",
    });
    expect(go).toMatch(/validation|cycle/i);
    expect(go).not.toMatch(/Morris/i);
  });

  it("PL07 — formatW3cRecommendationForSynthesis ignores rationale jargon", () => {
    const text = formatW3cRecommendationForSynthesis({
      kind: "recover",
      headline: "Qualification Evidence / résultat incomplète",
      nextStep: "complete_evidence",
      nextActionCode: "complete_evidence",
      rationale:
        "D5 HumanDecision ProjectTrajectory W2 NOT_PROVEN expectedOutputs evaluate claim",
    });
    expect(text).not.toMatch(FORBIDDEN_PILOT);
    expect(text).toContain("Compléter les éléments de preuve");
  });

  it("PL08 — ABSENT recommendation text", () => {
    expect(ABSENT_RECOMMENDATION_TEXT).toBe(
      "Aucune recommandation Product courante n'est disponible pour cette synthèse.",
    );
    const store = new SqliteProductStore(tempProductDbPath("pl08.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:pl08" }),
      generatedAt: NOW,
    });
    expect(built.sections.recommendation).toBe(ABSENT_RECOMMENDATION_TEXT);
    store.close();
  });

  it("PL09 — product-path sections stay Pilot-safe (negative lexicon)", async () => {
    const ctx = await authorizeAndSucceed("pl09");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const listed = await svc.repository.listByProject(ctx.projectId);
    const syn = listed.find((s) => s.status === "current");
    expect(syn).toBeTruthy();
    assertPilotSafeSections(syn!);
    expect(syn!.subject).toMatch(/^Résultat de l'action /);
  });
});

describe("P5-S04 CP02 Axis 3 recommendation no-fallback REC01–REC06", () => {
  it("REC01 — without input.recommendation → null / ABSENT, no W3-C scrape", async () => {
    const ctx = await authorizeAndSucceed("rec01");
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
      projectId: ctx.projectId,
      claimEvaluationId: ceId,
      // no recommendation
    });
    expect(lineage.ok).toBe(true);
    if (!lineage.ok) return;
    expect(lineage.input.recommendation).toBeNull();

    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const built = svc.build(lineage.input);
    expect(built.sections.recommendation).toBe(ABSENT_RECOMMENDATION_TEXT);
    expect(built.sourceBindings.recommendationRef).toBeNull();
  });

  it("REC02 — explicit recommendation is preserved", async () => {
    const ctx = await authorizeAndSucceed("rec02");
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
      projectId: ctx.projectId,
      claimEvaluationId: ceId,
      recommendation: {
        ref: "epi:w3c-rec:explicit",
        text: "Poursuivre avec la prochaine étape Pilot.",
      },
    });
    expect(lineage.ok).toBe(true);
    if (!lineage.ok) return;
    expect(lineage.input.recommendation?.text).toBe(
      "Poursuivre avec la prochaine étape Pilot.",
    );
    expect(lineage.input.recommendation?.ref).toBe("epi:w3c-rec:explicit");
  });

  it("REC03 — structured recommendation without text adapts via Pilot", async () => {
    const ctx = await authorizeAndSucceed("rec03");
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
      projectId: ctx.projectId,
      claimEvaluationId: ceId,
      recommendation: {
        ref: "epi:w3c-rec:struct",
        kind: "continue",
        nextActionCode: "confirm_claim_evaluation",
      },
    });
    expect(lineage.ok).toBe(true);
    if (!lineage.ok) return;
    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const built = svc.build(lineage.input);
    expect(built.sections.recommendation).toContain("Confirmation");
    expect(built.sections.recommendation).not.toMatch(FORBIDDEN_PILOT);
  });

  it("REC04 — product-path materialize still carries recommendationRef", async () => {
    const ctx = await authorizeAndSucceed("rec04");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const svc = createSqliteSynthesisServices({ productStore: ctx.store });
    const syn = (await svc.repository.listByProject(ctx.projectId)).find(
      (s) => s.status === "current",
    );
    expect(syn?.sourceBindings.recommendationRef).toMatch(/^epi:w3c-rec:/);
    expect(syn?.sections.recommendation).not.toBe(ABSENT_RECOMMENDATION_TEXT);
  });

  it("REC05 — empty recommendation object fields → ABSENT", () => {
    const store = new SqliteProductStore(tempProductDbPath("rec05.sqlite"));
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-c",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:rec05" }),
      recommendation: { ref: "epi:empty", kind: null, headline: "  ", nextStep: "" },
      generatedAt: NOW,
    });
    expect(built.sections.recommendation).toBe(ABSENT_RECOMMENDATION_TEXT);
    store.close();
  });

  it("REC06 — lineage recommendation equals input.recommendation only", async () => {
    const ctx = await authorizeAndSucceed("rec06");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ceId = materialized.product.claimEvaluationId!;
    const withNull = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: ceId,
      recommendation: null,
    });
    expect(withNull.ok).toBe(true);
    if (!withNull.ok) return;
    expect(withNull.input.recommendation).toBeNull();
  });
});

describe("P5-S04 CP02 Axis 4 fail-closed Evidence EV01–EV04", () => {
  it("EV01 — missing bound evidence → SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND", async () => {
    const ctx = await authorizeAndSucceed("ev01");
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

    const bad = structuredClone(ce!);
    bad.claimEvaluationId = `clm:ev01-${ctx.attemptId}`;
    bad.contractResultBindings = {
      ...ce!.contractResultBindings!,
      evidenceRefs: ["ev:missing-for-cp02"],
    };
    // Keep ReviewBundle evidenceRefs aligned so matcher reaches evidence load.
    const rbId = ce!.contractResultBindings!.reviewBundleId;
    const rb =
      await ctx.oa.evidenceReviewServices!.reviewBundleReader.findById(rbId);
    expect(rb).toBeTruthy();
    // Force mismatch path avoided: update CE to match RB with missing id —
    // instead mutate both bindings and RB evidenceRefs via direct payload.
    const rbPayload = structuredClone(rb!);
    (rbPayload as { evidenceRefs: string[] }).evidenceRefs = [
      "ev:missing-for-cp02",
    ];
    ctx.store.db
      .prepare(
        `UPDATE oa_review_bundles SET payload_json = ?, updated_at = ? WHERE review_bundle_id = ?`,
      )
      .run(JSON.stringify(rbPayload), NOW, rbId);

    bad.idempotencyKey = `idem:ev01-${ctx.attemptId}`;
    await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);

    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: bad.claimEvaluationId,
    });
    expect(lineage.ok).toBe(false);
    if (lineage.ok) return;
    expect(lineage.code).toBe("SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND");
  });

  it("EV02 — all bound evidence present → lineage ok", async () => {
    const ctx = await authorizeAndSucceed("ev02");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: materialized.product.claimEvaluationId!,
    });
    expect(lineage.ok).toBe(true);
    if (!lineage.ok) return;
    expect(lineage.input.evidence!.length).toBeGreaterThan(0);
  });

  it("EV03 — partial missing among multiple refs → fail-closed", async () => {
    const ctx = await authorizeAndSucceed("ev03");
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
    const existing = ce!.contractResultBindings!.evidenceRefs[0]!;
    const bad = structuredClone(ce!);
    bad.claimEvaluationId = `clm:ev03-${ctx.attemptId}`;
    bad.contractResultBindings = {
      ...ce!.contractResultBindings!,
      evidenceRefs: [existing, "ev:partial-missing-cp02"],
    };
    const rbId = ce!.contractResultBindings!.reviewBundleId;
    const rb =
      await ctx.oa.evidenceReviewServices!.reviewBundleReader.findById(rbId);
    const rbPayload = structuredClone(rb!);
    (rbPayload as { evidenceRefs: string[] }).evidenceRefs = [
      existing,
      "ev:partial-missing-cp02",
    ];
    ctx.store.db
      .prepare(
        `UPDATE oa_review_bundles SET payload_json = ?, updated_at = ? WHERE review_bundle_id = ?`,
      )
      .run(JSON.stringify(rbPayload), NOW, rbId);
    bad.idempotencyKey = `idem:ev03-${ctx.attemptId}`;
    await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);

    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: bad.claimEvaluationId,
    });
    expect(lineage.ok).toBe(false);
    if (!lineage.ok) {
      expect(lineage.code).toBe("SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND");
    }
  });

  it("EV04 — empty evidenceRefs → ok with empty evidence (no phantom filter)", async () => {
    const ctx = await authorizeAndSucceed("ev04");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: ctx.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    const ce =
      await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(
        materialized.product.claimEvaluationId!,
      );
    const bad = structuredClone(ce!);
    bad.claimEvaluationId = `clm:ev04-${ctx.attemptId}`;
    bad.contractResultBindings = {
      ...ce!.contractResultBindings!,
      evidenceRefs: [],
    };
    const rbId = ce!.contractResultBindings!.reviewBundleId;
    const rb =
      await ctx.oa.evidenceReviewServices!.reviewBundleReader.findById(rbId);
    const rbPayload = structuredClone(rb!);
    (rbPayload as { evidenceRefs: string[] }).evidenceRefs = [];
    ctx.store.db
      .prepare(
        `UPDATE oa_review_bundles SET payload_json = ?, updated_at = ? WHERE review_bundle_id = ?`,
      )
      .run(JSON.stringify(rbPayload), NOW, rbId);
    bad.idempotencyKey = `idem:ev04-${ctx.attemptId}`;
    await ctx.oa.evidenceReviewServices!.claimEvaluationRepository.create(bad);

    const lineage = await buildProductSynthesisLineageInput({
      oa: ctx.oa,
      projectId: ctx.projectId,
      claimEvaluationId: bad.claimEvaluationId,
    });
    expect(lineage.ok).toBe(true);
    if (!lineage.ok) return;
    expect(lineage.input.evidence).toEqual([]);
  });
});
