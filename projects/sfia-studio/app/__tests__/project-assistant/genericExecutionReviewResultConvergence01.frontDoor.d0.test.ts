/**
 * GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 — CORRECTION PASS 04
 * Front-door Product E2E oracle (CP4-01 + CP3 spine).
 *
 * Product path (MD-CP4-01 — no durableLocalWriteSeal injection):
 *   saveProposal(executionIntent non-docs_write)
 *   → proposeTrajectoryOptions(proposalId) → PresentedOptionSet.sealedExecutionBasis
 *   → decideTrajectory(opt:proposal-subject:pursue)
 *   → DecisionBasis.executionBasis from sealed Product facts
 *   → prepare (generic Cursor quartet, EFFECT_CLASS:local-write, Confirmation N2,
 *     NOT docs_write) → inspect → confirm → authorize → select agent → start
 *   → (Fake Cursor) → record → finalize Review Material from REAL temp Git
 *   → Verification Evidence → Mission Evidence → Resolution → Nora / Pilot.
 *
 * ZERO REAL: Cursor is TestOnlyRealExecutionLaunchPort; only temp Git is real.
 * Anti-regression: this MAIN oracle MUST NOT contain durableLocalWriteSeal.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { RunContext } from "@openai/agents";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import type {
  ProviderInputItem,
  ProviderRoundResult,
} from "@/lib/platform/ai/types";
import type { ToolDefinition } from "@/lib/platform/tools/types";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import {
  mintCursorExecutionReportId,
  mintCursorReviewEndOfId,
} from "@/lib/oa/execution-attempt";
import { CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY } from "@/lib/oa/execution-contract";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { reconcileGovernedExecution } from "@/features/project-assistant/w2/reconcileGovernedExecution";
import { materializeW3bProductTerminal } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { resolveProductExecutionContext } from "@/features/project-assistant/w2/resolveProductExecutionContext";
import { deriveGovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import {
  canQualifyGenericLocalWriteFromDurableFacts,
  classifyProtectedRepositoryPath,
} from "@/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext";
import { applyVerifiedChangeSetProductHonesty } from "@/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty";
import {
  w2ReadExecutionReviewItemAction,
} from "@/features/project-assistant/w2/actions";
import { loadGenericExecutionReviewMaterial, digestUtf8 } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import {
  executionReviewVerificationEvidenceIdForAttempt,
  executionReviewVerificationLocationForAttempt,
  isExecutionReviewVerificationPayload,
  type ExecutionReviewVerificationPayload,
} from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
import { CURSOR_REVIEW_END_OF_MISSING } from "@/features/project-assistant/f3/finalizeGenericExecutionReview";
import { observeNoraCognitiveCore } from "@/lib/nora-cognitive-runtime/noraCognitiveCompletion";
import { createExecutionReviewAgentsTools } from "@/lib/nora-cognitive-runtime/executionReviewAgentsTools";
import {
  LEGACY_UI_RUNNING_POLL_BUDGET,
  nextReconcileContinueDelayMs,
  shouldAutoResumeReconcileOnRemount,
  shouldContinueReconcileNominally,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

const ENV_KEYS = [
  "SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT",
  "SFIA_STUDIO_PRODUCT_DB_PATH",
  "OPS1_CONVERSATION_PROVIDER",
] as const;
const envBefore: Partial<Record<(typeof ENV_KEYS)[number], string | undefined>> =
  {};
const extraTempDirs: string[] = [];

beforeEach(() => {
  for (const k of ENV_KEYS) envBefore[k] = process.env[k];
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
  delete process.env.SFIA_STUDIO_CURSOR_REAL;
});

afterEach(() => {
  setConversationProviderForTests(null);
  cleanupW2TempDirs();
  for (const k of ENV_KEYS) {
    if (envBefore[k] === undefined) delete process.env[k];
    else process.env[k] = envBefore[k];
  }
  while (extraTempDirs.length) {
    const d = extraTempDirs.pop()!;
    try {
      fs.rmSync(d, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

/* -------------------------------------------------------------------------- */
/* Real temp Git repository                                                    */
/* -------------------------------------------------------------------------- */

function git(cwd: string, ...args: string[]): string {
  return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
}

/** baseline.txt (+ untouched.txt) committed at H0 — a REAL Git worktree. */
function createGitWorktree(label: string): { repo: string; h0: string } {
  const repo = fs.mkdtempSync(path.join(os.tmpdir(), `gerrc-cp2-${label}-`));
  extraTempDirs.push(repo);
  git(repo, "init", "-q");
  git(repo, "config", "user.email", "gerrc@example.test");
  git(repo, "config", "user.name", "gerrc");
  git(repo, "config", "commit.gpgsign", "false");
  fs.writeFileSync(path.join(repo, "baseline.txt"), "baseline\n");
  fs.writeFileSync(path.join(repo, "untouched.txt"), "untouched\n");
  git(repo, "add", "-A");
  git(repo, "commit", "-q", "-m", "H0");
  return { repo, h0: git(repo, "rev-parse", "HEAD").toLowerCase() };
}

/** Fake Cursor "work": a.md created, baseline.txt modified, b.md created (unclaimed). */
function fakeCursorMutatesWorktree(repo: string): void {
  fs.writeFileSync(path.join(repo, "a.md"), "A-content\n");
  fs.appendFileSync(path.join(repo, "baseline.txt"), "modified by cursor\n");
  fs.writeFileSync(path.join(repo, "b.md"), "B-unclaimed\n");
}

/* -------------------------------------------------------------------------- */
/* Product path: Proposal sealedExecutionBasis → pursue → generic local-write  */
/* -------------------------------------------------------------------------- */

type AuthorizedCtx = Awaited<ReturnType<typeof authorizeProductLocalWrite>>;

function genericLocalWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string;
  targetPath?: string;
  scopeIn?: readonly string[];
  reversibilityExpectation?: "reversible" | "irreversible" | "unknown";
  intentKind?: "docs_write" | "read_only" | "other" | null;
}): ProposalDto {
  const targetPath = input.targetPath ?? "a.md";
  const scopeIn = input.scopeIn ?? ["a.md", "baseline.txt"];
  return saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Exécuter une mutation locale bornée (generic local-write)",
    objective: "Créer a.md et modifier baseline.txt dans le worktree isolé",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "CP4 Product Proposal carrier for generic local-write",
    scope: "bounded local-write — isolated worktree",
    outOfScope: ["specialized Product write taxonomy", "REAL", "git commit/push/PR"],
    activatedBlocks: [],
    expectedOutcome: "Fichiers créés/modifiés + Report + Review End Of",
    sources: ["nora"],
    risks: ["CLAIM/FACT mismatch"],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
    morrisGateRequired: true,
    nextPossibleStep: "Instruire les options sur ce sujet",
    contextSnapshot: {
      projectId: input.projectId,
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      doctrineDigest: input.doctrineDigest,
      activeCycleInstanceId: input.activeCycleInstanceId,
      ckcResolutionRef: "ckcres:w2-harness",
    },
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: "studio.cursor.generalist.execute",
    executionIntent: {
      intentKind: input.intentKind === undefined ? "other" : input.intentKind,
      artifactType: null,
      targetPath,
      scopeIn: [...scopeIn],
      scopeOut: ["GIT_COMMIT", "GIT_PUSH", "GIT_PR"],
      expectedOutputs: [
        "a.md créé",
        "baseline.txt modifié",
        "CursorExecutionReport + Cursor Review End Of",
      ],
      requiredCapabilities: ["cap:studio.cursor.generalist"],
      validationExpectations: [],
      evidenceRequirements: [
        "evreq:local-write",
        "evreq:studio-verified-changeset",
      ],
      requestedOperation: "studio.cursor.generalist.execute",
      reversibilityExpectation: input.reversibilityExpectation ?? "reversible",
      artifactBrief: null,
      contentRequirements: [],
      exitRequirementKinds: [],
      artifactWriteMode: null,
      targetRepositoryRef: "acme/w2-harness",
    },
  });
}

async function authorizeProductLocalWrite(
  suffix: string,
  fixture: { h0: string },
  overrides?: {
    targetPath?: string;
    scopeIn?: readonly string[];
  },
) {
  const db = tempProductDbPath(`gerrc-cp4-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `g4${suffix}`,
  });
  const seeded = await seedQualifiedProject(runtime, { suffix });
  const oa = runtime.oa!;
  const context = await currentF2Context(runtime, seeded.projectId);
  const proposal = genericLocalWriteProposal({
    projectId: seeded.projectId,
    lpsId: context.lpsId,
    lpsVersion: context.lpsVersion,
    doctrineDigest: context.doctrineDigest,
    activeCycleInstanceId: context.activeCycleInstanceId!,
    targetPath: overrides?.targetPath,
    scopeIn: overrides?.scopeIn,
  });

  const qualification = await resolveW2QualificationInputs({
    oa,
    projectId: seeded.projectId,
  });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error("qualification");

  // Product path: propose with proposalId → PresentedOptionSet.sealedExecutionBasis
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId: seeded.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
    proposalId: proposal.proposalId,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error("propose");
  expect(proposed.decisionSubjectMode).toBe("proposal");
  expect(proposed.proposalId).toBe(proposal.proposalId);
  // sealedExecutionBasis is persisted on PresentedOptionSet (Epistemic), not
  // re-exported on the propose() return — DecisionBasis after decide proves it.

  // CP4-01 — NO durableLocalWriteSeal. Facts come from sealed PresentedOptionSet.
  const decided = await decideTrajectory({
    oa,
    projectId: seeded.projectId,
    optionSetRef: proposed.optionSetRef,
    options: proposed.options,
    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
    selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    forceLocalAuthority: true,
  });
  expect(decided.ok).toBe(true);
  if (!decided.ok) throw new Error("decide");
  expect(decided.decision.selectedOptionRef).toBe(PROPOSAL_SUBJECT_PURSUE_REF);

  const row = await oa.decisionServices.decisions.findById(
    decided.decision.decisionId,
  );
  expect(row?.status).toBe("accepted");
  expect(row!.decisionBasis!.sourceType).toBe("proposal");
  const sealed = row!.decisionBasis!.executionBasis;
  expect(sealed.targetPath).toBe(overrides?.targetPath ?? "a.md");
  expect(sealed.scopeIn).toEqual(
    overrides?.scopeIn ?? ["a.md", "baseline.txt"],
  );
  expect(sealed.reversibilityExpectation).toBe("reversible");
  expect(sealed.intentKind).not.toBe("docs_write");

  const paths = sealed.scopeIn ?? [];
  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
    pinnedBaseHeadSha: fixture.h0,
    sourceGroundingReader: async () =>
      paths.map((p) => ({
        pathOrRef: p,
        coverage: "full" as const,
        origin: "remembered_prior_read" as const,
        rememberedAtIso: "2026-09-01T00:00:00.000Z",
        cycleInstanceId: null,
        repositoryHeadSha: fixture.h0,
      })),
  });
  if (!prepared.ok) {
    throw new Error(`prepare ${prepared.code}: ${prepared.message}`);
  }
  expect(prepared.ok).toBe(true);
  const executionContractId = prepared.contract.executionContractId;
  await inspectExecutionContract({
    oa,
    projectId: seeded.projectId,
    executionContractId,
  });
  expect(prepared.contract.effectConfirmationRequired).toBe(true);
  const confirmed = await confirmExecutionContractForAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(confirmed.ok).toBe(true);
  const authorized = await evaluateExecutionAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok).toBe(true);
  if (!authorized.ok) throw new Error("auth");

  const live =
    (await oa.executionContractServices.contracts.findById(
      executionContractId,
    )) ?? prepared.contract;
  const inputs = (live as { inputs?: Record<string, unknown> }).inputs ?? {};
  const repositoryRef =
    typeof inputs.repositoryBindingIdentity === "string"
      ? inputs.repositoryBindingIdentity
      : "acme/w2-harness";
  const baseSha =
    typeof inputs.baseHeadSha === "string" ? inputs.baseHeadSha : fixture.h0;
  const refsRoot = path.join(path.dirname(db), "mission-result-refs");
  process.env.SFIA_STUDIO_PRODUCT_DB_PATH = db;
  process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT = refsRoot;
  return {
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    executionContractId,
    prepared,
    contract: live as typeof prepared.contract,
    inputs,
    repositoryRef,
    baseSha,
    refsRoot,
    db,
    proposalId: proposal.proposalId,
  };
}

/** @deprecated alias — CP4 Product path is Proposal pursue, not GOVERNED+seal. */
const authorizeGovernedLocalWrite = authorizeProductLocalWrite;

function launchPortOf(ctx: AuthorizedCtx): TestOnlyRealExecutionLaunchPort {
  const port = ctx.oa.executionAttemptServices?.realBoundary?.launchPort;
  if (!(port instanceof TestOnlyRealExecutionLaunchPort)) {
    throw new Error("TestOnlyRealExecutionLaunchPort required");
  }
  return port;
}

/* -------------------------------------------------------------------------- */
/* Cursor CLAIM report                                                         */
/* -------------------------------------------------------------------------- */

function cursorReportStdout(input: {
  attemptId: string;
  ctx: AuthorizedCtx;
  created: string[];
  modified: string[];
  withReviewEndOf: boolean;
}): string {
  const { attemptId, ctx } = input;
  const body: Record<string, unknown> = {
    schemaVersion: "oa.cursor-execution-report.1",
    reportId: mintCursorExecutionReportId({
      attemptId,
      executionContractId: ctx.executionContractId,
    }),
    attemptId,
    executionContractId: ctx.executionContractId,
    repositoryRef: ctx.repositoryRef,
    baseSha: ctx.baseSha,
    status: "succeeded",
    authorizedEffectsExecuted: [
      ...(input.created.length ? ["filesystem.create"] : []),
      ...(input.modified.length ? ["filesystem.modify"] : []),
    ],
    workPerformed: [
      `created ${input.created.join(",") || "nothing"}`,
      `modified ${input.modified.join(",") || "nothing"}`,
    ],
    fileEffects: {
      created: input.created,
      modified: input.modified,
      deleted: [],
    },
    missionResult: {
      diagnosticSummary: "Cursor CLAIM — see Studio VerifiedChangeSet for FACTS.",
      recommendedNextProductStep: "Review Studio VerifiedChangeSet.",
    },
  };
  if (input.withReviewEndOf) {
    body.reviewEndOf = {
      schemaVersion: "oa.cursor-review-end-of.1",
      reviewEndOfId: mintCursorReviewEndOfId({
        attemptId,
        executionContractId: ctx.executionContractId,
      }),
      attemptId,
      executionContractId: ctx.executionContractId,
      timestamp: new Date().toISOString(),
      repositoryRef: ctx.repositoryRef,
      baseSha: ctx.baseSha,
      verdict: "succeeded",
      objective: "write a.md and update baseline.txt",
      scopeTreated: "a.md, baseline.txt",
      workPerformed: ["Cursor-native review end-of"],
      filesCreated: input.created,
      filesModified: input.modified,
      filesDeleted: [],
      validations: [],
      deviations: [],
      blockers: [],
      reservations: [],
      stopConditionsMet: [],
      claims: [
        `created ${input.created.join(",") || "nothing"}`,
        `modified ${input.modified.join(",") || "nothing"}`,
      ],
      pointsRequiringReview: ["confirm completeness vs worktree"],
    };
  }
  return `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(body)}`;
}

type ScenarioResult = {
  attemptId: string;
  loaded: Extract<
    ReturnType<typeof loadGenericExecutionReviewMaterial>,
    { ok: true }
  >;
  verificationPayload: ExecutionReviewVerificationPayload;
  verificationEvidence: { evidenceId: string; status: string } | null;
};

/** Select → Start → Fake Cursor boundary completes → record (server finalize). */
async function runAttemptToTerminal(
  ctx: AuthorizedCtx,
  scenario: {
    worktreeRef: string | null;
    mutate?: () => void;
    created: string[];
    modified: string[];
    withReviewEndOf: boolean;
  },
): Promise<ScenarioResult> {
  const port = launchPortOf(ctx);
  const launchBefore = port.launchCallCount;
  const selected = await governedExecuteSelectAgent({
    oa: ctx.oa,
    projectId: ctx.projectId,
    executionContractId: ctx.executionContractId,
    forceLocalAuthority: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error("select");
  expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  const started = await governedExecuteStart({
    oa: ctx.oa,
    projectId: ctx.projectId,
    executionContractId: ctx.executionContractId,
    attemptId: selected.attemptId,
    forceLocalAuthority: true,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error("start");
  expect(started.phase).toBe("running");
  expect(port.launchCallCount).toBe(launchBefore + 1);

  // The Fake Cursor does its work inside the worktree.
  scenario.mutate?.();
  setTimeout(() => {
    port.resolveSimulatedCompletion(`proc:sim:${started.attemptId}`, {
      exitCode: 0,
      timedOut: false,
      stdout: cursorReportStdout({
        attemptId: started.attemptId,
        ctx,
        created: scenario.created,
        modified: scenario.modified,
        withReviewEndOf: scenario.withReviewEndOf,
      }),
      stderr: "",
      durationMs: 5,
      ...(scenario.worktreeRef ? { worktreeRef: scenario.worktreeRef } : {}),
    });
  }, 15);

  const terminal = await governedExecuteRecordResult({
    oa: ctx.oa,
    projectId: ctx.projectId,
    executionContractId: ctx.executionContractId,
    attemptId: started.attemptId,
    forceLocalAuthority: true,
    awaitIfPending: true,
    missionResultRefsRoot: ctx.refsRoot,
  });
  expect(terminal.ok).toBe(true);
  if (!terminal.ok) throw new Error(`record ${terminal.code}`);
  expect(terminal.attemptStatus).toBe("succeeded");
  expect(port.launchCallCount).toBe(launchBefore + 1); // exactly one launch

  const loaded = loadGenericExecutionReviewMaterial({
    refsRoot: ctx.refsRoot,
    attemptId: started.attemptId,
  });
  expect(loaded.ok).toBe(true);
  if (!loaded.ok) throw new Error("load");

  // CP2-04 — Verification Evidence via the existing Evidence stack.
  const verificationEvidenceId = executionReviewVerificationEvidenceIdForAttempt(
    started.attemptId,
  );
  expect(verificationEvidenceId.startsWith("ev:execution-review:")).toBe(true);
  const verificationEvidence =
    (await ctx.oa.evidenceReviewServices!.evidenceReader.findById(
      verificationEvidenceId,
    )) ?? null;
  const payloadPath = path.join(
    ctx.refsRoot,
    executionReviewVerificationLocationForAttempt(started.attemptId),
  );
  expect(fs.existsSync(payloadPath)).toBe(true);
  const payload = JSON.parse(fs.readFileSync(payloadPath, "utf8")) as unknown;
  expect(isExecutionReviewVerificationPayload(payload)).toBe(true);
  return {
    attemptId: started.attemptId,
    loaded,
    verificationPayload: payload as ExecutionReviewVerificationPayload,
    verificationEvidence: verificationEvidence
      ? {
          evidenceId: verificationEvidence.evidenceId,
          status: verificationEvidence.status,
        }
      : null,
  };
}

async function productVerdictOf(ctx: AuthorizedCtx, attemptId: string) {
  const materialized = await materializeW3bProductTerminal({
    oa: ctx.oa,
    projectId: ctx.projectId,
    attemptId,
  });
  expect(materialized.ok).toBe(true);
  if (!materialized.ok) throw new Error("materialize");
  const resolved = await resolveProductExecutionContext({
    oa: ctx.oa,
    projectId: ctx.projectId,
    query: { kind: "byAttemptId", attemptId },
  });
  expect(resolved.ok).toBe(true);
  if (!resolved.ok) throw new Error("resolve");
  return { product: materialized.product, context: resolved.context };
}

/* -------------------------------------------------------------------------- */
/* Nora: FakeConversationProvider with a tool script                           */
/* -------------------------------------------------------------------------- */

/**
 * Round 1 = scripted tool call `execution_review_get_manifest`
 * (FakeConversationProvider toolScript). Round 2 (after the Agents Runner
 * executed the tool) composes the final answer ONLY from the tool output that
 * came back through the Runner — the prompt never contains `b.md`.
 */
class ReviewManifestToolProvider extends FakeConversationProvider {
  readonly rounds: ProviderInputItem[][] = [];

  constructor() {
    super({
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "call:cp2-manifest",
              name: "execution_review_get_manifest",
              argumentsJson: "{}",
            },
          ],
        },
      ],
    });
  }

  override async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    this.rounds.push(input.items.map((i) => ({ ...i })));
    const out = input.items.find((i) => i.type === "function_call_output");
    if (!out || out.type !== "function_call_output") {
      return super.completeRound(input);
    }
    // Agents tool output envelope: {"type":"text","text":"<json>"}.
    const envelope = JSON.parse(out.output) as { text?: string };
    const manifest = JSON.parse(
      typeof envelope.text === "string" ? envelope.text : out.output,
    ) as {
      ok: boolean;
      blockers?: string[];
      verifiedEffects?: {
        claimFactMismatch?: boolean;
        unclaimedObservedPaths?: string[];
      };
    };
    const unclaimed = manifest.verifiedEffects?.unclaimedObservedPaths ?? [];
    const mismatchBlockers = (manifest.blockers ?? []).filter((b) =>
      b.includes("CLAIM_FACT_MISMATCH"),
    );
    const text =
      `[TEST/FAKE] Revue Nora (outil manifest) — ` +
      (manifest.verifiedEffects?.claimFactMismatch
        ? `${mismatchBlockers.join(" | ") || "CLAIM_FACT_MISMATCH"}; ` +
          `fichiers observés non déclarés: ${unclaimed.join(", ")}. ` +
          `Le CLAIM Cursor est incomplet — résultat produit non prouvé.`
        : `aucun écart CLAIM/FACT.`);
    return {
      kind: "message",
      text,
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "fake-cp2-final",
      },
    };
  }
}

/* ========================================================================== */
/* Tests                                                                       */
/* ========================================================================== */

describe("GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 CP4 front-door", () => {
  it("CP4-01/10 prepare — Proposal pursue sealed facts ⇒ generic quartet, EFFECT_CLASS:local-write, Confirmation N2, NOT docs_write", async () => {
    const fx = createGitWorktree("prep");
    const ctx = await authorizeGovernedLocalWrite("prep", fx);
    const c = ctx.prepared.contract;

    expect(c.action).toBe("studio.cursor.generalist.execute");
    expect(c.target).toBe("studio.cursor.generalist.workspace");
    expect(c.scope).toBe("studio.cursor.generalist.authorized_contract");
    expect(c.requiredCapabilities).toEqual(["cap:studio.cursor.generalist"]);
    expect(c.constraints).toContain("EFFECT_CLASS:local-write");
    expect(c.constraints).toContain("EFFECT_CONFIRMATION_REQUIRED:N2");
    expect(c.constraints).toContain("PRODUCT_MISSION_FROM_DURABLE_CONTEXT");
    expect(c.constraints).toEqual(
      expect.arrayContaining([
        "MISSION_SCOPE_IN:a.md",
        "MISSION_SCOPE_IN:baseline.txt",
        "SCOPE_OUT:GIT_COMMIT",
        "SCOPE_OUT:GIT_PUSH",
        "SCOPE_OUT:GIT_PR",
      ]),
    );
    expect(c.effectClass).toBe("local-write");
    expect(c.effectConfirmationRequired).toBe(true);
    expect(c.effectConfirmationLevel).toBe("N2");
    expect(c.requiredAuthority).toBe("N2");
    expect(c.status).toBe("confirmation_required");
    expect(c.reversibility).toBe("reversible");

    // NO docs_write Product taxonomy anywhere on the durable EC.
    const durable = JSON.stringify(ctx.contract);
    expect(durable).not.toMatch(/docs_write/i);
    expect(durable).not.toMatch(/cursor\.docs_write/i);
    expect(c.action).not.toMatch(/docs_write/);
    expect(c.requiredCapabilities.join(",")).not.toMatch(/docs_write/);

    // ER keys demand Studio verification + local-write; report asks for native REO.
    const disclosure = c.inspectionDisclosure as unknown as {
      evidenceRequirements?: string[];
    };
    expect(disclosure.evidenceRequirements).toEqual(
      expect.arrayContaining([
        "evreq:local-write",
        "evreq:studio-verified-changeset",
      ]),
    );
    const reportReq = (
      ctx.inputs[CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY] as string[]
    ).join("\n");
    expect(reportReq).toMatch(/Review End Of/i);
    expect(reportReq).toMatch(/fileEffects/);

    // Repo identity pinned to the real Git HEAD (H0).
    expect(ctx.baseSha).toBe(fx.h0);
  }, 60_000);

  it("CP4-01 anti-regression — MAIN front-door source has zero durableLocalWriteSeal injection", () => {
    const src = fs.readFileSync(__filename, "utf8");
    // Forbidden: property injection of durableLocalWriteSeal into decideTrajectory.
    expect(src).not.toMatch(/\bdurableLocalWriteSeal\s*:/);
  });

  it("CP4-02 Option C — ordinary app path ALLOW; method/prompts/.github/framing/Doctrine/Roadmap/D-ER/C1 DENY", () => {
    expect(classifyProtectedRepositoryPath("projects/sfia-studio/app/example.ts")).toBeNull();
    expect(classifyProtectedRepositoryPath("a.md")).toBeNull();
    expect(classifyProtectedRepositoryPath("method/sfia-fast-track/core/x.md")).toBe("method/");
    expect(classifyProtectedRepositoryPath("prompts/templates/x.md")).toBe("prompts/");
    expect(classifyProtectedRepositoryPath(".github/workflows/ci.yml")).toBe(".github/");
    expect(
      classifyProtectedRepositoryPath(
        "projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md",
      ),
    ).toBe("projects/sfia-studio/sfia-v3-framing/");
    expect(
      classifyProtectedRepositoryPath(
        "projects/sfia-studio/sfia-v3-framing/subdir/future.md",
      ),
    ).toBe("projects/sfia-studio/sfia-v3-framing/");
    expect(
      classifyProtectedRepositoryPath(
        "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
      ),
    ).toBe(
      "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
    );
    expect(
      classifyProtectedRepositoryPath(
        "projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md",
      ),
    ).toBe(
      "projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md",
    );
    expect(
      classifyProtectedRepositoryPath(
        "projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md",
      ),
    ).toBe(
      "projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md",
    );
    expect(
      classifyProtectedRepositoryPath(
        "projects/sfia-studio/product-completion/01-product-completion-cadrage.md",
      ),
    ).toBe(
      "projects/sfia-studio/product-completion/01-product-completion-cadrage.md",
    );
    // Bounded set — ordinary convergence asset is NOT blanket-denied.
    expect(
      classifyProtectedRepositoryPath(
        "projects/sfia-studio/convergence/some-other-capitalisation.md",
      ),
    ).toBeNull();
  });

  it("CP4-02 — protected Proposal target FAIL-CLOSED before Cursor (no mutating EC)", async () => {
    const db = tempProductDbPath("gerrc-cp4-prot.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "g4prot" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "prot" });
    const oa = runtime.oa!;
    const context = await currentF2Context(runtime, seeded.projectId);
    const proposal = genericLocalWriteProposal({
      projectId: seeded.projectId,
      lpsId: context.lpsId,
      lpsVersion: context.lpsVersion,
      doctrineDigest: context.doctrineDigest,
      activeCycleInstanceId: context.activeCycleInstanceId!,
      targetPath:
        "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
      scopeIn: [
        "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
      ],
    });
    const q = await resolveW2QualificationInputs({ oa, projectId: seeded.projectId });
    if (!q.ok) throw new Error("q");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...q.qualification.inputs,
      packagePin: q.qualification.packagePin,
      objective: q.qualification.objective,
      projectTitle: q.qualification.projectTitle,
      proposalId: proposal.proposalId,
    });
    if (!proposed.ok) throw new Error("p");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error("d");
    // HumanDecision may exist — ExecutionAuthority must not.
    const row = await oa.decisionServices.decisions.findById(
      decided.decision.decisionId,
    );
    expect(row?.decisionBasis?.executionBasis.targetPath).toContain(
      "build-doctrine",
    );
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: "a".repeat(40),
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) expect(prepared.code).toBe("EFFECTS_UNRESOLVED");
  }, 60_000);

  it("CP4-01 — ordinary projects/sfia-studio/app path qualifies (Option C not blanket Studio deny)", () => {
    const q = canQualifyGenericLocalWriteFromDurableFacts({
      basis: {
        sourceType: "proposal",
        sourceRef: "prop:x",
        sourceDigest: "d".repeat(64),
        projectId: "prj:x",
        executionBasis: {
          targetPath: "projects/sfia-studio/app/example.ts",
          scopeIn: ["projects/sfia-studio/app/example.ts"],
          reversibilityExpectation: "reversible",
          intentKind: "other",
        },
      } as never,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    });
    expect(q.ok).toBe(true);
  });

    it("CP2-01 negative — GOVERNED WITHOUT durable local-write facts fails closed (no invented HOW)", async () => {
    const db = tempProductDbPath("gerrc-cp2-neg.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "g2neg" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "neg" });
    const oa = runtime.oa!;
    const q = await resolveW2QualificationInputs({ oa, projectId: seeded.projectId });
    if (!q.ok) throw new Error("q");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...q.qualification.inputs,
      packagePin: q.qualification.packagePin,
      objective: q.qualification.objective,
      projectTitle: q.qualification.projectTitle,
    });
    if (!proposed.ok) throw new Error("p");
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
    if (!decided.ok) throw new Error("d");
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: "a".repeat(40),
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) expect(prepared.code).toBe("EFFECTS_UNRESOLVED");
  }, 60_000);

  it("CP2-10 MAIN — real Git worktree: Cursor CLAIM omits b.md ⇒ VerifiedChangeSet = exactly 3 deltas, mismatch, HEAD=H0, Verification Evidence, no PASS, Nora tool, Pilot reader, remount", async () => {
    const fx = createGitWorktree("main");
    const ctx = await authorizeGovernedLocalWrite("main", fx);
    const run = await runAttemptToTerminal(ctx, {
      worktreeRef: fx.repo,
      mutate: () => fakeCursorMutatesWorktree(fx.repo),
      created: ["a.md"],
      modified: ["baseline.txt"], // CLAIM omits b.md
      withReviewEndOf: true,
    });
    const { loaded, attemptId } = run;

    // ── Review Material: FACTS from NodeLocalGitStatusDiffPort, not the whole repo.
    expect(loaded.manifest.verifiedEffects.verificationStatus).toBe("OBSERVED");
    const vcs = loaded.verifiedChangeSet!;
    expect(vcs).not.toBeNull();
    expect(vcs.all.map((e) => e.path).sort()).toEqual([
      "a.md",
      "b.md",
      "baseline.txt",
    ]);
    expect(vcs.all).toHaveLength(3);
    expect(vcs.all.map((e) => e.path)).not.toContain("untouched.txt");
    expect(vcs.created.map((e) => e.path).sort()).toEqual(["a.md", "b.md"]);
    expect(vcs.modified.map((e) => e.path)).toEqual(["baseline.txt"]);
    expect(vcs.claimFactMismatch).toBe(true);
    expect(vcs.unclaimedObservedPaths).toEqual(["b.md"]);
    expect(vcs.claimedMissingPaths).toEqual([]);
    expect(vcs.observedHeadSha).toBe(fx.h0); // HEAD unchanged = H0
    expect(git(fx.repo, "rev-parse", "HEAD").toLowerCase()).toBe(fx.h0);
    expect(loaded.manifest.verifiedEffects.claimFactMismatch).toBe(true);
    expect(loaded.manifest.completeness).toBe("PARTIAL");
    expect(
      loaded.manifest.blockers.some(
        (b) => b.includes("CLAIM_FACT_MISMATCH") && b.includes("b.md"),
      ),
    ).toBe(true);

    // Native REO is a CLAIM, persisted as received (never synthesized).
    expect(loaded.reviewEndOf).not.toBeNull();
    expect(loaded.reviewEndOf!.reviewEndOfId).toBe(
      mintCursorReviewEndOfId({
        attemptId,
        executionContractId: ctx.executionContractId,
      }),
    );
    expect(loaded.manifest.blockers).not.toContain(CURSOR_REVIEW_END_OF_MISSING);

    // ── CP2-04: Verification Evidence ingested through the Evidence stack.
    expect(run.verificationEvidence).not.toBeNull();
    expect(run.verificationEvidence!.evidenceId).toMatch(
      /^ev:execution-review:/,
    );
    expect(run.verificationEvidence!.status).toBe("verified");
    expect(run.verificationPayload.claimFactMismatch).toBe(true);
    expect(run.verificationPayload.verificationStatus).toBe("OBSERVED");
    expect(run.verificationPayload.unclaimedObservedPaths).toEqual(["b.md"]);
    expect(run.verificationPayload.observedPathCount).toBe(3);

    // ── ContractResult / Product outcome ≠ PASS under mismatch.
    // CP3-07 — install Fake Nora provider BEFORE W3-B/W3-C so the nominal
    // runW3cPostEvidenceLoop (via materialize) actually exercises Deep Review tools.
    const provider = new ReviewManifestToolProvider();
    setConversationProviderForTests(provider);
    const coreCalls: string[] = [];
    const stop = observeNoraCognitiveCore((inv) => coreCalls.push(inv.mode));
    const { product, context } = await productVerdictOf(ctx, attemptId);
    stop();
    expect(context.claimEvaluation.contractResultVerdict).not.toBe("PASS");
    expect(product.contractResultVerdict).not.toBe("PASS");
    expect(product.outcome).not.toBe("SUCCESS");
    expect(product.claimAllowed).toBe(false);
    const honest = applyVerifiedChangeSetProductHonesty({
      attemptId,
      product: { ...product, outcome: "SUCCESS", claimAllowed: true },
      refsRoot: ctx.refsRoot,
    });
    expect(honest.outcome).not.toBe("SUCCESS"); // even a forged PASS is downgraded
    expect(honest.claimAllowed).toBe(false);
    expect(context.attempt?.status).toBe("succeeded"); // technical success preserved
    expect(context.executionReview.present).toBe(true);
    expect(context.executionReview.claimFactMismatch).toBe(true);
    expect(context.executionReview.verificationStatus).toBe("OBSERVED");
    expect(context.executionReview.verifiedChangeSetPresent).toBe(true);
    expect(context.executionReview.reviewEndOfPresent).toBe(true);

    // CP3-04 — Verification Evidence digest == durable verified-changeset.json bytes.
    expect(run.verificationPayload.verifiedChangeSetDigest).toBeTruthy();
    expect(run.verificationPayload.verifiedChangeSetRef).toBeTruthy();
    const durableVcsAbs = path.join(
      ctx.refsRoot,
      run.verificationPayload.verifiedChangeSetRef!,
    );
    expect(fs.existsSync(durableVcsAbs)).toBe(true);
    const durableDigest = digestUtf8(fs.readFileSync(durableVcsAbs));
    expect(run.verificationPayload.verifiedChangeSetDigest).toBe(durableDigest);

    // ── CP3-07 Nora via nominal W3-C (not direct analyzePostEvidenceWithProvider).
    expect(coreCalls).toContain("post_execution");
    expect(provider.rounds.length).toBeGreaterThanOrEqual(2);
    const promptText = provider.rounds[0]!
      .filter((i) => i.type === "message")
      .map((i) => (i.type === "message" ? i.content : ""))
      .join("\n");
    expect(promptText).not.toMatch(/\bb\.md\b/);
    const secondRound = provider.rounds[1]!;
    const toolCall = secondRound.find(
      (i) => i.type === "function_call" && i.name === "execution_review_get_manifest",
    );
    expect(toolCall).toBeDefined();
    const toolOut = secondRound.find((i) => i.type === "function_call_output");
    expect(toolOut && toolOut.type === "function_call_output").toBe(true);
    if (toolOut && toolOut.type === "function_call_output") {
      const envelope = JSON.parse(toolOut.output) as { type?: string; text?: string };
      const rawJson = typeof envelope.text === "string" ? envelope.text : toolOut.output;
      const parsed = JSON.parse(rawJson) as {
        ok: boolean;
        verifiedEffects: { claimFactMismatch: boolean; unclaimedObservedPaths: string[] };
      };
      expect(parsed.ok).toBe(true);
      expect(parsed.verifiedEffects.claimFactMismatch).toBe(true);
      expect(parsed.verifiedEffects.unclaimedObservedPaths).toEqual(["b.md"]);
    }
    // Final Nora answer grounded on tool output (W3-C / Agents Runner).
    const finalMessages = provider.rounds
      .flat()
      .filter((i) => i.type === "message")
      .map((i) => (i.type === "message" ? i.content : ""));
    // The tool output round embeds CLAIM_FACT_MISMATCH + b.md; Fake final uses it.
    expect(toolOut).toBeDefined();
    expect(
      finalMessages.some(
        (m) => /b\.md/.test(m) || /CLAIM_FACT_MISMATCH/.test(m),
      ) ||
        (toolOut &&
          toolOut.type === "function_call_output" &&
          /b\.md/.test(toolOut.output)),
    ).toBe(true);
    const worktreeSnapshot = fs.readdirSync(fx.repo);
    expect(worktreeSnapshot).toContain("b.md");
    fs.rmSync(fx.repo, { recursive: true, force: true });
    const reloaded = loadGenericExecutionReviewMaterial({
      refsRoot: ctx.refsRoot,
      attemptId,
    });
    expect(reloaded.ok && reloaded.verifiedChangeSet?.unclaimedObservedPaths).toEqual(
      ["b.md"],
    );

    // ── Pilot: server action — security (same shared reader as the Nora tool).
    const items = loaded.manifest.reviewItems;
    const bItem = items.find((i) => i.logicalPath === "b.md");
    expect(bItem).toBeDefined();
    const okRead = await w2ReadExecutionReviewItemAction({
      projectId: ctx.projectId,
      attemptId,
      itemId: bItem!.itemId,
    });
    expect(okRead.ok).toBe(true);
    if (okRead.ok) {
      expect(okRead.content).toContain("B-unclaimed");
      expect(okRead.claimFactMismatch).toBe(true);
      expect(okRead.logicalPath).toBe("b.md");
    }

    // CP3-08 — tamper item bytes after persistence ⇒ integrity DENY.
    expect(bItem!.contentRef).toBeTruthy();
    const itemAbs = path.join(ctx.refsRoot, bItem!.contentRef!);
    fs.writeFileSync(itemAbs, Buffer.from("TAMPERED-CONTENT"));
    const tampered = await w2ReadExecutionReviewItemAction({
      projectId: ctx.projectId,
      attemptId,
      itemId: bItem!.itemId,
    });
    expect(tampered.ok).toBe(false);
    if (!tampered.ok) {
      expect(tampered.code).toBe("EXECUTION_REVIEW_ITEM_INTEGRITY_MISMATCH");
    }
    // restore for any later reads
    fs.writeFileSync(itemAbs, Buffer.from("B-unclaimed\n"));

    // Project mismatch ⇒ deny.
    const wrongProject = await w2ReadExecutionReviewItemAction({
      projectId: "prj:not-this-project",
      attemptId,
      itemId: bItem!.itemId,
    });
    expect(wrongProject.ok).toBe(false);
    // Unknown item ⇒ deny.
    const unknownItem = await w2ReadExecutionReviewItemAction({
      projectId: ctx.projectId,
      attemptId,
      itemId: "ri:999",
    });
    expect(unknownItem.ok).toBe(false);
    if (!unknownItem.ok) {
      expect(unknownItem.code).toBe("EXECUTION_REVIEW_ITEM_NOT_FOUND");
    }
    // Path-like itemId ⇒ deny. Unknown attempt ⇒ deny.
    const pathy = await w2ReadExecutionReviewItemAction({
      projectId: ctx.projectId,
      attemptId,
      itemId: "../../secret",
    });
    expect(pathy.ok).toBe(false);
    const wrongAttempt = await w2ReadExecutionReviewItemAction({
      projectId: ctx.projectId,
      attemptId: "xat:does-not-exist",
      itemId: bItem!.itemId,
    });
    expect(wrongAttempt.ok).toBe(false);

    // Nora tool read_item agrees with the Pilot action (single primitive).
    const tools = createExecutionReviewAgentsTools({
      projectId: ctx.projectId,
      attemptId,
      refsRoot: ctx.refsRoot,
    });
    const viaTool = JSON.parse(
      String(
        await tools[1]!.invoke(
          new RunContext({}),
          JSON.stringify({ itemId: "ri:999" }),
        ),
      ),
    ) as { ok: boolean; code?: string };
    expect(viaTool.ok).toBe(false);
    expect(viaTool.code).toBe("EXECUTION_REVIEW_ITEM_NOT_FOUND");

    // ── Remount continuity (policy-level): a terminal+stable projection no
    // longer auto-resumes; nothing relaunches.
    const stable = await deriveGovernedExecutionContinuityProjection({
      oa: ctx.oa,
      projectId: ctx.projectId,
      query: { kind: "byExecutionContractId", executionContractId: ctx.executionContractId },
    });
    expect(stable.ok).toBe(true);
    if (stable.ok) {
      expect(stable.projection.attemptId).toBe(attemptId);
    }
  }, 90_000);

  it("CP2-03 missing REO — Cursor omits Review End Of ⇒ PARTIAL + CURSOR_REVIEW_END_OF_MISSING, NEVER synthesized", async () => {
    const fx = createGitWorktree("noreo");
    const ctx = await authorizeGovernedLocalWrite("noreo", fx);
    const run = await runAttemptToTerminal(ctx, {
      worktreeRef: fx.repo,
      mutate: () => {
        fs.writeFileSync(path.join(fx.repo, "a.md"), "A\n");
        fs.appendFileSync(path.join(fx.repo, "baseline.txt"), "m\n");
      },
      created: ["a.md"],
      modified: ["baseline.txt"], // claims match FACTS
      withReviewEndOf: false,
    });
    const { loaded } = run;
    expect(loaded.reviewEndOf).toBeNull();
    expect(loaded.manifest.executorClaims.cursorReviewEndOfRef).toBeNull();
    expect(loaded.manifest.completeness).toBe("PARTIAL");
    expect(loaded.manifest.blockers).toContain(CURSOR_REVIEW_END_OF_MISSING);
    // FACTS side is intact and honest: observed, no mismatch.
    expect(loaded.manifest.verifiedEffects.verificationStatus).toBe("OBSERVED");
    expect(loaded.verifiedChangeSet!.all.map((e) => e.path).sort()).toEqual([
      "a.md",
      "baseline.txt",
    ]);
    expect(loaded.verifiedChangeSet!.claimFactMismatch).toBe(false);
    expect(run.verificationPayload.reviewEndOfPresent).toBe(false);
    expect(run.verificationPayload.completeness).toBe("PARTIAL");
    // CP3-06 — required REO absent ⇒ ContractResult / Product cannot PASS.
    const { product, context } = await productVerdictOf(ctx, run.attemptId);
    expect(context.claimEvaluation.contractResultVerdict).not.toBe("PASS");
    expect(product.contractResultVerdict).not.toBe("PASS");
    expect(product.outcome).not.toBe("SUCCESS");
    // No REO artifact on disk.
    const reoFile = path.join(
      ctx.refsRoot,
      "refs",
      "attempts",
      run.attemptId.replace(/[^a-zA-Z0-9:_-]/g, ""),
      "execution-review",
      "cursor-review-end-of.json",
    );
    expect(fs.existsSync(reoFile)).toBe(false);

    expect(context.executionReview.reviewEndOfPresent).toBe(false);
    expect(context.executionReview.blockers).toContain(
      CURSOR_REVIEW_END_OF_MISSING,
    );
    expect(context.executionReview.completeness).toBe("PARTIAL");
  }, 90_000);

  it("CP2-02 UNAVAILABLE — no worktree ⇒ verification UNAVAILABLE, no VerifiedChangeSet, Verification Evidence says so, no PASS", async () => {
    const fx = createGitWorktree("nowt");
    const ctx = await authorizeGovernedLocalWrite("nowt", fx);
    const run = await runAttemptToTerminal(ctx, {
      worktreeRef: null, // observation never ran
      created: ["a.md"],
      modified: ["baseline.txt"],
      withReviewEndOf: true,
    });
    const { loaded } = run;
    expect(loaded.manifest.verifiedEffects.verificationStatus).toBe("UNAVAILABLE");
    expect(loaded.manifest.verifiedEffects.verifiedChangeSetRef).toBeNull();
    expect(loaded.verifiedChangeSet).toBeNull(); // never an invented empty FACT set
    expect(loaded.manifest.completeness).toBe("PARTIAL");
    expect(
      loaded.manifest.blockers.some((b) => b.includes("VERIFICATION_UNAVAILABLE")),
    ).toBe(true);
    expect(run.verificationPayload.verificationStatus).toBe("UNAVAILABLE");
    expect(run.verificationPayload.verifiedChangeSetDigest).toBeNull();
    expect(run.verificationPayload.observedPathCount).toBe(0);

    const { product, context } = await productVerdictOf(ctx, run.attemptId);
    expect(context.executionReview.verificationStatus).toBe("UNAVAILABLE");
    expect(context.executionReview.verifiedChangeSetPresent).toBe(false);
    expect(product.contractResultVerdict).not.toBe("PASS");
    expect(product.outcome).not.toBe("SUCCESS");
    expect(product.claimAllowed).toBe(false);
  }, 90_000);

  it("CP2-02 zero-change OBSERVED — clean Git status ⇒ VerifiedChangeSet empty (verified zero change), committed files never listed", async () => {
    const fx = createGitWorktree("zero");
    const ctx = await authorizeGovernedLocalWrite("zero", fx);
    const run = await runAttemptToTerminal(ctx, {
      worktreeRef: fx.repo,
      // Fake Cursor changes nothing.
      created: [],
      modified: [],
      withReviewEndOf: true,
    });
    const { loaded } = run;
    expect(loaded.manifest.verifiedEffects.verificationStatus).toBe("OBSERVED");
    expect(loaded.verifiedChangeSet).not.toBeNull();
    expect(loaded.verifiedChangeSet!.all).toEqual([]); // NOT baseline.txt / untouched.txt
    expect(loaded.verifiedChangeSet!.claimFactMismatch).toBe(false);
    expect(loaded.verifiedChangeSet!.observedHeadSha).toBe(fx.h0);
    expect(loaded.manifest.verifiedEffects.gitFacts).toContain(
      "verified_zero_change",
    );
    expect(run.verificationPayload.verificationStatus).toBe("OBSERVED");
    expect(run.verificationPayload.observedPathCount).toBe(0);
    expect(run.verificationPayload.claimFactMismatch).toBe(false);
    expect(run.verificationEvidence?.status).toBe("verified");
  }, 90_000);

  async function remountJourney() {
    const fx = createGitWorktree("remount");
    const ctx = await authorizeGovernedLocalWrite("remount", fx);
    const port = launchPortOf(ctx);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error("select");
    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    if (!started.ok) throw new Error("start");
    const attemptId = started.attemptId;

    // « Remount »: a fresh durable derivation (no client state) must say RUNNING
    // + auto-resume — this is exactly what TrajectorySurface consumes on mount
    // (proven component-side in the trajectorySurface test).
    const derive = async () => {
      const d = await deriveGovernedExecutionContinuityProjection({
        oa: ctx.oa,
        projectId: ctx.projectId,
        query: {
          kind: "byExecutionContractId",
          executionContractId: ctx.executionContractId,
        },
      });
      if (!d.ok) throw new Error(d.code);
      return d.projection;
    };
    const remounted = await derive();
    expect(remounted.stage).toBe("RUNNING");
    expect(remounted.attemptId).toBe(attemptId);
    expect(shouldAutoResumeReconcileOnRemount(remounted)).toBe(true);

    // Policy-driven scheduler harness. SCHEDULING decisions come ONLY from
    // reconcileContinuePolicy (continue? how long to back off?). Server steps
    // are the owner's transitions; they are NOT a stand-in for UI behavior
    // (the mounted component is proven in the trajectorySurface test).
    // NB: reconcile "continue" on a RUNNING Attempt AWAITS the executor (server
    // owner semantics), so while the Fake process is still running the harness
    // only re-derives the durable projection ("observe", read-only) per tick.
    //
    // Fake Nora boundary required for the post-Evidence continue step after
    // materialization (otherwise POST_EVIDENCE_PENDING never clears).
    setConversationProviderForTests(
      new FakeConversationProvider({
        scripted: [
          "[TEST/FAKE] Post-Evidence remount — Review Material observé; mismatch b.md.",
        ],
      }),
    );
    const delays: number[] = [];
    const stages: string[] = [];
    const COMPLETES_AT_TICK = LEGACY_UI_RUNNING_POLL_BUDGET + 4;
    let projection = remounted;
    let tick = 0;
    let finalProjection = projection;
    while (shouldContinueReconcileNominally(projection) && tick < 60) {
      tick += 1;
      delays.push(nextReconcileContinueDelayMs(tick)); // would-be setTimeout
      if (tick < COMPLETES_AT_TICK) {
        const observed = await reconcileGovernedExecution({
          oa: ctx.oa,
          projectId: ctx.projectId,
          executionContractId: ctx.executionContractId,
          intent: "observe",
        });
        expect(observed.ok).toBe(true);
        projection = observed.projection!;
        // Still RUNNING, still the same single Attempt; nothing relaunched.
        expect(projection.stage).toBe("RUNNING");
      } else {
        if (tick === COMPLETES_AT_TICK) {
          // The Cursor process only now finishes (well past the legacy budget).
          fakeCursorMutatesWorktree(fx.repo);
          port.resolveSimulatedCompletion(`proc:sim:${attemptId}`, {
            exitCode: 0,
            timedOut: false,
            stdout: cursorReportStdout({
              attemptId,
              ctx,
              created: ["a.md"],
              modified: ["baseline.txt"],
              withReviewEndOf: true,
            }),
            stderr: "",
            durationMs: 5,
            worktreeRef: fx.repo,
          });
        }
        const reconciled = await reconcileGovernedExecution({
          oa: ctx.oa,
          projectId: ctx.projectId,
          executionContractId: ctx.executionContractId,
          intent: "continue", // never "execute" ⇒ never a second Attempt
        });
        expect(reconciled.ok || reconciled.projection?.attemptId).toBeTruthy();
        projection = reconciled.projection ?? projection;
      }
      stages.push(projection.stage);
      finalProjection = projection;
      if (projection.stage !== "RECOVERY_REQUIRED") {
        expect(projection.attemptId).toBe(attemptId);
      }
    }

    const runningSteps = stages.filter((s) => s === "RUNNING").length;
    expect(runningSteps).toBeGreaterThan(LEGACY_UI_RUNNING_POLL_BUDGET);
    expect(tick).toBeLessThan(60); // loop ended on its own (policy said stop)
    expect(delays.every((d) => d > 0)).toBe(true);
    expect(port.launchCallCount).toBe(1); // single launch for the whole journey
    return { ctx, attemptId, finalProjection, runningSteps };
  }

  it("CP2-08 remount continuity — durable RUNNING auto-resumes by POLICY past the legacy budget; same Attempt, one launch; late completion finalizes Review Material + Verification Evidence", async () => {
    const { ctx, attemptId, runningSteps } = await remountJourney();
    expect(runningSteps).toBeGreaterThan(LEGACY_UI_RUNNING_POLL_BUDGET);
    const loaded = loadGenericExecutionReviewMaterial({
      refsRoot: ctx.refsRoot,
      attemptId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.manifest.verifiedEffects.verificationStatus).toBe("OBSERVED");
    expect(loaded.verifiedChangeSet?.unclaimedObservedPaths).toEqual(["b.md"]);
    const ev = await ctx.oa.evidenceReviewServices!.evidenceReader.findById(
      executionReviewVerificationEvidenceIdForAttempt(attemptId),
    );
    expect(ev?.status).toBe("verified");
    const attempt = await ctx.oa.executionAttemptServices!.getExecutionAttempt.execute({
      attemptId,
    });
    expect(attempt.ok && attempt.attempt.status).toBe("succeeded");
  }, 120_000);

  // Nominal remount path: after late Fake completion the Reconciler must reach
  // a terminal Product stage (mission + verification Evidence pair is not ambiguous).
  it("CP2-08 remount → terminal Product — no RECOVERY_REQUIRED / EVIDENCE_LINEAGE_AMBIGUOUS", async () => {
    const { finalProjection } = await remountJourney();
    expect(finalProjection.stage).not.toBe("RECOVERY_REQUIRED");
    expect(finalProjection.blockingCode).not.toBe("EVIDENCE_LINEAGE_AMBIGUOUS");
    expect(finalProjection.productOutcome).toBeDefined();
  }, 120_000);
});
