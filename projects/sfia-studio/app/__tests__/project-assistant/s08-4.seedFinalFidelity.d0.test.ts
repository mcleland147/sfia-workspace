// @ts-nocheck — QA seed harness; narrow W2 result narrowing deferred
/**
 * @vitest-environment node
 *
 * S08-4 — deterministic canonical-density Product SQLite for final fidelity capture.
 *
 * Run (from projects/sfia-studio/app):
 *   S08_4_FIDELITY_SEED=1 npx vitest run __tests__/project-assistant/s08-4.seedFinalFidelity.d0.test.ts
 *
 * Artifacts:
 *   .tmp-sfia-review/visual/s08-4/final-fidelity/states/canonical-product.sqlite
 *   .tmp-sfia-review/visual/s08-4/final-fidelity/states/manifest.json
 *   .tmp-sfia-review/visual/s08-4/final-fidelity/states/companion-nora-session.sqlite (journal / transcript)
 */
import fs from "node:fs";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  settleDeterministicProductCursorSuccess,
  W2_TEST_ACTOR,
  W2_TEST_PINNED_BASE_HEAD_SHA,
  type SeededW2Project,
} from "./w2Harness";
import {
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { clearW3bBoundaryArm } from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import {
  F2_PROCESS_LOCAL_NOTICE,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import { writePendingDecisionSubjectMarker } from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
import { readActiveProposalDecisionSubject } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { materializeW3bProductTerminal } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { createSqliteSynthesisServices } from "@/lib/oa/synthesis";
import { SqliteProductStore } from "@/lib/oa/project";
import { ProductSqliteSession } from "@/lib/nora-cognitive-runtime/productSqliteSession";
import {
  appendPilotTranscriptTurn,
  listCycleJournalEntries,
  materializeCycleJournalDelta,
} from "@/lib/nora-cognitive-runtime/cycleJournalStore";

const STATES_DIR = path.resolve(
  __dirname,
  "../../../../../.tmp-sfia-review/visual/s08-4/final-fidelity/states",
);
const PRODUCT_DB = path.join(STATES_DIR, "canonical-product.sqlite");
const SESSION_DB = path.join(STATES_DIR, "companion-nora-session.sqlite");
const MANIFEST_PATH = path.join(STATES_DIR, "manifest.json");
const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";

const runSeed = process.env.S08_4_FIDELITY_SEED === "1";

async function seedNamedQualifiedProject(
  runtime: RuntimeApplicationService,
  input: {
    readonly name: string;
    readonly suffix: string;
    readonly objective?: string;
    readonly profile?: "Standard" | "Critical";
    readonly reservations?: readonly { statement: string; blocking?: boolean }[];
  },
): Promise<SeededW2Project> {
  const suffix = input.suffix;
  const created = await runtime.createProject({
    name: input.name,
    objective:
      input.objective ??
      "Jalon S08-4 — densité canonique Product sans OpenAI",
    context: "Seed fidélité S08-4 — aucune exécution REAL",
    criticality: input.profile === "Critical" ? "HIGH" : "STANDARD",
    constraints: ["AUCUNE EXÉCUTION REAL"],
    shortReference: suffix.slice(0, 8).toUpperCase(),
    idempotencyKey: `s084-fidelity-${suffix}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("seedNamed: createProject failed");
  const projectId = created.project.projectId;

  const overview = await runtime.getProject(projectId);
  expect(overview.ok).toBe(true);
  if (!overview.ok) throw new Error("seedNamed: getProject failed");

  const oa = runtime.oa;
  if (!oa) throw new Error("seedNamed: OA unavailable");

  const cycleInstanceId = `cyc:inst:w2-${suffix}`;
  const cycle = await oa.cycleServices.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: "cyc:delivery",
    projectId,
    signals: input.profile === "Critical" ? { irreversible: true } : {},
    justification:
      input.profile === "Critical"
        ? "Signal irréversible déclaré pour la preuve S08-4"
        : undefined,
    objective: "Continuité cycle pour capture Studio",
    scope: "s08-4-fidelity",
    createdBy: W2_TEST_ACTOR,
    linkAsActiveCycle: true,
    expectedLpsVersion: overview.livingState.version,
    ckcResolutionRef: "ckcres:w2-harness",
  });
  expect(cycle.ok).toBe(true);
  if (!cycle.ok) {
    throw new Error(
      `seedNamed: createCycle failed (${cycle.code}: ${cycle.message})`,
    );
  }

  if (input.reservations?.length) {
    const updated = await oa.cycleServices.updateEpistemicState.execute({
      projectId,
      items: input.reservations.map((reservation, index) => ({
        epistemicItemId: `epi:s084-rsv-${suffix}-${index + 1}`,
        type: "Reservation" as const,
        statement: reservation.statement,
        status: "active" as const,
        blocking: reservation.blocking === true,
      })),
      createdBy: W2_TEST_ACTOR,
    });
    expect(updated.ok).toBe(true);
  }

  if (oa.projectServices.setProjectRepositoryBinding) {
    const identity = `acme/s084-${suffix}`;
    const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
      projectId,
      actor: W2_TEST_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: `projects/s084-${suffix}`,
      },
    });
    expect(bound.ok).toBe(true);
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
  }

  const after = await runtime.getProject(projectId);
  if (!after.ok) throw new Error("seedNamed: getProject(after) failed");

  return {
    projectId,
    cycleInstanceId,
    lpsVersion: after.livingState.version,
  };
}

async function seedGovernedExecuteThroughSuccess(
  runtime: RuntimeApplicationService,
  projectId: string,
): Promise<{ attemptId: string; executionContractId: string }> {
  const oa = runtime.oa!;
  const qualification = await resolveW2QualificationInputs({ oa, projectId });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error(qualification.code);
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error("propose");
  const decided = await decideTrajectory({
    oa,
    projectId,
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
  const context = await currentF2Context(runtime, projectId);
  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
    qualifiedOperationKind: "generate-temporary-artifact",
    pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error(prepared.code);
  const executionContractId = prepared.contract.executionContractId;
  await inspectExecutionContract({ oa, projectId, executionContractId });
  const confirmed = await confirmExecutionContractForAuthorization({
    oa,
    projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  if (!confirmed.ok) {
    throw new Error(
      `confirmExecutionContract: ${confirmed.code}: ${confirmed.message}`,
    );
  }
  const authorized = await evaluateExecutionAuthorization({
    oa,
    projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok && authorized.outcome === "AUTHORIZED").toBe(true);
  const selected = await governedExecuteSelectAgent({
    oa,
    projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(selected.code);
  const started = await governedExecuteStart({
    oa,
    projectId,
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
    projectId,
    executionContractId,
    attemptId: started.attemptId,
    forceLocalAuthority: true,
  });
  expect(projected.ok).toBe(true);
  if (!projected.ok) throw new Error(projected.code);
  return {
    attemptId: started.attemptId,
    executionContractId,
  };
}

function seedCompanionJournal(input: {
  projectId: string;
  cycleInstanceId: string;
}): readonly string[] {
  if (fs.existsSync(SESSION_DB)) fs.unlinkSync(SESSION_DB);
  const session = new ProductSqliteSession({
    projectId: input.projectId,
    dbPath: SESSION_DB,
    sessionKey: "f1-default",
  });
  session.ensurePilotTranscriptAndJournalSchema();
  const t1 = appendPilotTranscriptTurn(session, {
    role: "user",
    content:
      "Je veux que l’expérience reste centrée sur la conversation, avec des surfaces structurées seulement quand elles ajoutent de la valeur.",
    logicalTurnId: "ltu:s084-nora-1",
  });
  appendPilotTranscriptTurn(session, {
    role: "assistant",
    content:
      "Je proposerais d’adopter l’architecture conversation-first pour l’espace projet, puis de décider explicitement avant toute préparation d’action.",
    logicalTurnId: "ltu:s084-nora-1",
  });
  appendPilotTranscriptTurn(session, {
    role: "user",
    content: "Où en sommes-nous sur la complétion Nora ?",
    logicalTurnId: "ltu:s084-nora-2",
  });
  appendPilotTranscriptTurn(session, {
    role: "assistant",
    content:
      "Le cycle actif couvre la continuité conversationnelle et les réservations ouvertes. Une recommandation et une synthèse Product sont disponibles pour relecture.",
    logicalTurnId: "ltu:s084-nora-2",
  });
  const created = materializeCycleJournalDelta({
    session,
    cycleInstanceId: input.cycleInstanceId,
    logicalTurnId: "ltu:s084-nora-1",
    boundSourceTurnIds: [t1.turnId],
    delta: {
      operations: [
        {
          op: "CREATE",
          targetEntryId: null,
          title: "Complétion Nora",
          currentSummary: "Aligner journal, décisions et synthèse Product",
          sourceTurnRefs: [],
          relatedEntryIds: [],
        },
        {
          op: "CREATE",
          targetEntryId: null,
          title: "Continuité conversation",
          currentSummary: "Transcript pilote et sujets de cycle persistants",
          sourceTurnRefs: [],
          relatedEntryIds: [],
        },
      ],
    },
  });
  expect(created.applied).toBe(2);
  const entries = listCycleJournalEntries(session, input.cycleInstanceId);
  expect(entries.length).toBeGreaterThanOrEqual(2);
  return entries.map((e) => e.journalEntryId);
}

describe.runIf(runSeed)("S08-4 seed final fidelity canonical Product DB", () => {
  beforeAll(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
    setConversationProviderForTests(null);
    clearW3bBoundaryArm();
    fs.mkdirSync(STATES_DIR, { recursive: true });
    for (const p of [PRODUCT_DB, SESSION_DB]) {
      if (fs.existsSync(p)) fs.unlinkSync(p);
    }
  });

  afterAll(() => {
    clearW3bBoundaryArm();
    cleanupW2TempDirs();
    resetRuntimeApplicationServiceForTests();
  });

  it("writes canonical-product.sqlite + manifest.json", async () => {
    resetRuntimeApplicationServiceForTests();
    const runtime = bootW2Runtime({
      productDbPath: PRODUCT_DB,
      idPrefix: "s084f",
    });
    const oa = runtime.oa!;

    const productSimplification = await runtime.createProject({
      name: "Product Simplification",
      objective: "Réduire la surface opératoire sans perdre la vérité Product",
      context: "Liste projets — densité canonique S08-4",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "SIMPL",
      idempotencyKey: "s084-fidelity-simpl",
    });
    expect(productSimplification.ok).toBe(true);

    const noraCompletion = await seedNamedQualifiedProject(runtime, {
      name: "Nora Completion",
      suffix: "nora",
      profile: "Standard",
      reservations: [
        {
          statement:
            "La recommandation W3-C doit rester non autoritaire jusqu'à revue pilote.",
          blocking: false,
        },
      ],
    });

    await oa.cycleServices.updateEpistemicState.execute({
      projectId: noraCompletion.projectId,
      items: [
        {
          epistemicItemId: "epi:s084-rec-nora",
          type: "Recommendation",
          statement:
            "Poursuivre la boucle post-preuve et matérialiser la synthèse dérivée.",
          status: "active",
          authority: "none",
        },
      ],
      createdBy: W2_TEST_ACTOR,
    });

    const journalEntryIds = seedCompanionJournal({
      projectId: noraCompletion.projectId,
      cycleInstanceId: noraCompletion.cycleInstanceId,
    });

    const executeFacts = await seedGovernedExecuteThroughSuccess(
      runtime,
      noraCompletion.projectId,
    );
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId: noraCompletion.projectId,
      attemptId: executeFacts.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) throw new Error("w3b materialize");
    expect(materialized.postEvidence?.ok).toBe(true);
    expect(materialized.synthesisMaterialization?.status).toBe("materialized");

    const store = oa.projectServices.store as SqliteProductStore;
    const synthesisSvc = createSqliteSynthesisServices({ productStore: store });
    const syntheses = await synthesisSvc.repository.listByProject(
      noraCompletion.projectId,
    );
    const currentSynthesis = syntheses.find((s) => s.status === "current");
    expect(currentSynthesis).toBeTruthy();

    const knowledgeCoreProject = await seedNamedQualifiedProject(runtime, {
      name: "Knowledge Core",
      suffix: "kcore",
      profile: "Critical",
    });

    const kcCtx = await currentF2Context(runtime, knowledgeCoreProject.projectId);
    const kcProposal = saveProposal({
      proposalId: "prop:f2:s084-kcore-decision",
      status: "DECISION_REQUIRED",
      rephrasedRequest: "Choisir la direction de l'espace projet",
      objective: "Conserver la conversation comme surface principale",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      rationale:
        "Deux directions plausibles — la première privilégie la conversation ; la seconde densifie le contexte persistant.",
      scope: "docs_write borné — cycle actif",
      outOfScope: ["nouveau cycle", "REAL"],
      activatedBlocks: [],
      expectedOutcome: "Direction retenue sans exécution",
      sources: ["nora"],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
      morrisGateRequired: true,
      nextPossibleStep: "Décider la direction",
      contextSnapshot: {
        projectId: knowledgeCoreProject.projectId,
        lpsId: kcCtx.lpsId,
        lpsVersion: kcCtx.lpsVersion,
        doctrineDigest: kcCtx.doctrineDigest,
        activeCycleInstanceId: knowledgeCoreProject.cycleInstanceId,
        ckcResolutionRef: "ckcres:w2-harness",
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
      requestedOperation: null,
      executionIntent: {
        intentKind: "docs_write",
        artifactType: null,
        targetPath: TARGET_PATH,
        scopeIn: ["sandbox"],
        scopeOut: ["git"],
        expectedOutputs: ["markdown"],
        requiredCapabilities: ["cap:cursor.docs_write"],
        validationExpectations: [],
        evidenceRequirements: [],
        requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
        reversibilityExpectation: "reversible",
        artifactBrief: "Note gestion de tâches",
        contentRequirements: [],
        exitRequirementKinds: [],
        artifactWriteMode: "CREATE",
        targetRepositoryRef:
          process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim() ||
          "acme/w2-harness",
      },
    });
    const kcSealed = sealProposalExecutionBasis(kcProposal);
    const kcDigest = computeProposalSubjectDigest(kcSealed, kcProposal.proposalId);
    await writePendingDecisionSubjectMarker({
      oa,
      projectId: knowledgeCoreProject.projectId,
      proposalId: kcProposal.proposalId,
      subjectDigest: kcDigest,
      lpsId: kcCtx.lpsId,
      lpsVersion: kcCtx.lpsVersion,
      doctrineDigest: kcCtx.doctrineDigest,
    });
    const kcQual = await resolveW2QualificationInputs({
      oa,
      projectId: knowledgeCoreProject.projectId,
    });
    expect(kcQual.ok).toBe(true);
    if (!kcQual.ok) throw new Error(kcQual.code);
    const kcProposed = await proposeTrajectoryOptions({
      oa,
      projectId: knowledgeCoreProject.projectId,
      ...kcQual.qualification.inputs,
      packagePin: kcQual.qualification.packagePin,
      objective: kcQual.qualification.objective,
      projectTitle: kcQual.qualification.projectTitle,
      proposalId: kcProposal.proposalId,
    });
    expect(kcProposed.ok).toBe(true);
    const kcSubject = await readActiveProposalDecisionSubject(
      oa,
      knowledgeCoreProject.projectId,
    );
    expect(kcSubject.ok && kcSubject.kind === "bound_awaiting_decision").toBe(
      true,
    );

    const runtimeV3 = await seedNamedQualifiedProject(runtime, {
      name: "Runtime v3",
      suffix: "rtv3",
      profile: "Critical",
    });
    const rtQual = await resolveW2QualificationInputs({
      oa,
      projectId: runtimeV3.projectId,
    });
    expect(rtQual.ok).toBe(true);
    if (!rtQual.ok) throw new Error(rtQual.code);
    const rtProposed = await proposeTrajectoryOptions({
      oa,
      projectId: runtimeV3.projectId,
      ...rtQual.qualification.inputs,
      packagePin: rtQual.qualification.packagePin,
      objective: rtQual.qualification.objective,
      projectTitle: rtQual.qualification.projectTitle,
    });
    expect(rtProposed.ok).toBe(true);
    const rtDecided = await decideTrajectory({
      oa,
      projectId: runtimeV3.projectId,
      optionSetRef: rtProposed.optionSetRef,
      options: rtProposed.options,
      recommendedOptionRef: rtProposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: rtProposed.proposedTrajectory!.trajectoryId,
      candidateVersion: rtProposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(rtDecided.ok).toBe(true);
    if (!rtDecided.ok) throw new Error("rt decide");
    const rtCtx = await currentF2Context(runtime, runtimeV3.projectId);
    const rtPrepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: runtimeV3.projectId,
      decisionId: rtDecided.decision.decisionId,
      currentContext: rtCtx,
      forceLocalAuthority: true,
      qualifiedOperationKind: "generate-temporary-artifact",
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(rtPrepared.ok).toBe(true);
    if (!rtPrepared.ok) throw new Error(rtPrepared.code);
    expect(rtPrepared.contract.status).toBe("confirmation_required");
    const rtInspected = await inspectExecutionContract({
      oa,
      projectId: runtimeV3.projectId,
      executionContractId: rtPrepared.contract.executionContractId,
    });
    expect(rtInspected.ok).toBe(true);
    const rtContinuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: runtimeV3.projectId,
    });
    expect(rtContinuity.ok && rtContinuity.kind === "active").toBe(true);

    const listed = await oa.projectServices.listProjects.execute();
    expect(listed.ok).toBe(true);
    if (!listed.ok) throw new Error("listProjects");
    expect(listed.projects.length).toBeGreaterThanOrEqual(4);

    // W2 harness freezes clock at W2_FIXED_NOW; bump wall-clock updated_at so
    // Projects « À reprendre » (14-day window) has canonical density at capture time.
    {
      const { DatabaseSync } = await import("node:sqlite");
      const touchDb = new DatabaseSync(PRODUCT_DB);
      const now = Date.now();
      const stamps = [
        new Date(now - 6 * 60_000).toISOString(),
        new Date(now - 24 * 60 * 60_000).toISOString(),
        new Date(now - 3 * 24 * 60 * 60_000).toISOString(),
        new Date(now - 5 * 24 * 60 * 60_000).toISOString(),
      ];
      const preferred = [
        "Product Simplification",
        "Nora Completion",
        "Runtime v3",
        "Knowledge Core",
      ] as const;
      const rows = touchDb.prepare("SELECT project_id, payload_json FROM oa_projects").all() as {
        project_id: string;
        payload_json: string;
      }[];
      const byName = new Map<string, (typeof rows)[number]>();
      for (const row of rows) {
        const payload = JSON.parse(row.payload_json || "{}") as { name?: string; title?: string };
        byName.set(payload.name || payload.title || row.project_id, row);
      }
      preferred.forEach((name, i) => {
        const row = byName.get(name);
        if (!row) return;
        const payload = JSON.parse(row.payload_json || "{}") as Record<string, unknown>;
        payload.updatedAt = stamps[i];
        touchDb
          .prepare(
            "UPDATE oa_projects SET updated_at = ?, payload_json = ? WHERE project_id = ?",
          )
          .run(stamps[i], JSON.stringify(payload), row.project_id);
      });
      touchDb.close();
    }

    const manifest = {
      seededAt: new Date().toISOString(),
      providerReal: false,
      productionVisualBypass: false,
      productDbPath: PRODUCT_DB,
      companionSessionDbPath: SESSION_DB,
      studioEnv: {
        SFIA_STUDIO_PRODUCT_DB_PATH: PRODUCT_DB,
        SFIA_STUDIO_NORA_SESSION_DB_PATH: SESSION_DB,
        OPS1_CONVERSATION_PROVIDER: "fake",
      },
      projectIds: {
        productSimplification: productSimplification.project!.projectId,
        noraCompletion: noraCompletion.projectId,
        knowledgeCore: knowledgeCoreProject.projectId,
        runtimeV3: runtimeV3.projectId,
      },
      scenarios: {
        productSimplification: {
          role: "projects_list_density",
          name: "Product Simplification",
        },
        noraCompletion: {
          role: "rich_workspace",
          name: "Nora Completion",
          synthesisId: currentSynthesis!.synthesisId,
          journalEntryIds,
          attemptId: executeFacts.attemptId,
          postEvidenceOk: materialized.postEvidence?.ok === true,
        },
        knowledgeCore: {
          role: "decision",
          name: "Knowledge Core",
          subjectKind: kcSubject.ok ? kcSubject.kind : null,
          proposalId: kcProposal.proposalId,
          optionCount: kcProposed.options?.length ?? 0,
        },
        runtimeV3: {
          role: "confirmation",
          name: "Runtime v3",
          executionContractId: rtPrepared.contract.executionContractId,
          contractStatus: rtPrepared.contract.status,
          inspectionSufficient:
            rtContinuity.kind === "active"
              ? rtContinuity.inspection.inspectionSufficient
              : false,
        },
      },
      guarantees: [
        "≥4 Product projects including Product Simplification, Nora Completion, Runtime v3, Knowledge Core",
        "Nora Completion: governed execute + W3-B terminal + W3-C (fake provider) + current Product synthesis row",
        "Nora Completion: companion session journal subjects + pilot transcript (separate SQLite)",
        "Knowledge Core: bound_awaiting_decision with ≥2 trajectory options",
        "Runtime v3: active governed continuity at confirmation_required",
      ],
      limitations: [
        "Cycle journal and pilot transcript live in companion-nora-session.sqlite, not canonical-product.sqlite",
        "W3-C post-evidence uses OPS1_CONVERSATION_PROVIDER=fake (deterministic, not OpenAI REAL)",
        "Product Simplification is list-density only (no active cycle)",
        "Conversation turns beyond seeded transcript require live Nora turns (not seeded here)",
      ],
    };

    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
    expect(fs.existsSync(PRODUCT_DB)).toBe(true);
    expect(fs.statSync(PRODUCT_DB).size).toBeGreaterThan(0);
  });
});
