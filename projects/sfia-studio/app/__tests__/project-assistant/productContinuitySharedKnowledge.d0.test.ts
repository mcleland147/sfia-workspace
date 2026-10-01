/**
 * PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — CRITICAL CORRECTION PASS 01 proofs.
 *
 * @vitest-environment node
 */
import { describe, expect, it, vi } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { classifyDocsWriteClaimCompletionFailure } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import {
  deriveGovernedExecutionContinuityFromContext,
  type GovernedExecutionContinuityStage,
} from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import type { ProductExecutionContext } from "@/features/project-assistant/w2/resolveProductExecutionContext";
import { projectContractResultVerdict } from "@/lib/oa/evidence-review";
import {
  observeNoraCognitiveCore,
  runNoraCognitiveCompletion,
  runNoraCognitiveCore,
} from "@/lib/nora-cognitive-runtime/noraCognitiveCompletion";
import { createProductExecutionAgentsTools } from "@/lib/nora-cognitive-runtime/productExecutionAgentsTools";
import { analyzePostEvidenceWithProvider } from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import type { ClaimEvaluationStatus } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";

function emptyContext(
  overrides: Partial<ProductExecutionContext> & {
    attempt?: ProductExecutionContext["attempt"];
    executionContract?: ProductExecutionContext["executionContract"];
  } = {},
): ProductExecutionContext {
  return {
    projectId: "prj:stage",
    activeCycleInstanceId: null,
    executionContract: overrides.executionContract ?? null,
    attempt: overrides.attempt ?? null,
    cursorReport: {
      kind: "EXECUTOR_CLAIM",
      present: false,
      status: null,
      summary: null,
      disclosure: "CLAIM_NOT_EVIDENCE",
    },
    artifact: {
      kind: "ARTIFACT",
      present: false,
      completeness: null,
      preview: null,
    },
    executionReview: {
      kind: "EXECUTION_REVIEW_MATERIAL",
      present: false,
      completeness: null,
      reviewMaterialId: null,
      reviewItemCount: 0,
      claimFactMismatch: false,
      verificationStatus: null,
      retentionState: null,
      reviewEndOfPresent: false,
      verifiedChangeSetPresent: false,
      blockers: [],
      reviewItemSummaries: [],
    },
    evidence: {
      kind: "EVIDENCE",
      evidenceId: null,
      status: null,
      evidenceIds: [],
      ...(overrides.evidence ?? {}),
    },
    reviewBundle: {
      kind: "REVIEW",
      reviewBundleId: null,
      status: null,
      frozen: false,
      ...(overrides.reviewBundle ?? {}),
    },
    claimEvaluation: {
      kind: "PRODUCT_QUALIFICATION",
      claimEvaluationId: null,
      status: null,
      contractResultVerdict: null,
      ...(overrides.claimEvaluation ?? {}),
    },
    postEvidence: {
      kind: "RECOMMENDATION",
      present: false,
      recommendationKind: null,
      headline: null,
      requiresHumanDecision: null,
      ...(overrides.postEvidence ?? {}),
    },
    provenance: {
      bindingsOk: true,
      readOnly: true,
      query: { kind: "latest" },
    },
    disclosures: [],
    ...overrides,
  };
}

describe("PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 CORRECTION PASS 01", () => {
  it("T-A — closed claim classifier still fail-closed on unknown (R3 non-regression)", () => {
    expect(classifyDocsWriteClaimCompletionFailure("CONFORMITY_HEADINGS_MISSING")).toBe(
      "CONFORMITY_INSUFFICIENCY",
    );
    expect(classifyDocsWriteClaimCompletionFailure("UNKNOWN_X")).toBe("CONTINUITY_FAILURE");
  });

  it("T-UI — TrajectorySurface no longer owns Select→Start→Complete→Materialize chain", () => {
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx",
      ),
      "utf8",
    );
    expect(src).toContain("w2ReconcileGovernedExecutionAction");
    expect(src).toContain("runServerReconcile");
    expect(src).not.toMatch(/w2GovernedExecuteSelectAction/);
    expect(src).not.toMatch(/w2GovernedExecuteStartAction/);
    expect(src).not.toMatch(/w2GovernedExecuteCompleteAction/);
    expect(src).not.toMatch(/w2MaterializeProductOutcomeAction/);
  });

  it("T-C1 — conversation + post_execution both invoke shared Nora cognitive core", async () => {
    const provider = new FakeConversationProvider({
      scripted: ["CORE_SHARED_REPLY", "CORE_POST_EXEC_REPLY"],
    });
    setConversationProviderForTests(provider);

    const invocations: string[] = [];
    const stop = observeNoraCognitiveCore((inv) => {
      invocations.push(inv.mode);
    });

    try {
      // Conversation mode via shared core → Agents Runner
      const conv = await runNoraCognitiveCore({
        cognitiveMode: "conversation",
        correlationId: "cor:t-c1-conv",
        projectId: "prj:t-c1",
        systemInstructions: "sys",
        userContent: "hello",
        provider,
        enableTools: false,
        enableHostedWebSearch: false,
        session: null,
        memoryBAvailability: "unavailable",
      });
      expect(conv.text).toBeTruthy();

      // Post-execution mode via shared completion → same core → Agents Runner
      const post = await runNoraCognitiveCompletion({
        mode: "post_execution",
        system: "sys post",
        user: "facts",
        projectId: "prj:t-c1",
        correlationId: "cor:t-c1-post",
      });
      expect(post.ok).toBe(true);
      if (post.ok) {
        expect(post.cognitiveRuntime).toBe("agents");
        expect(post.mode).toBe("post_execution");
      }
    } finally {
      stop();
      setConversationProviderForTests(null);
    }

    expect(invocations).toEqual(["conversation", "post_execution"]);
  });

  it("T-C2/T-C3 — postEvidence uses shared core; no provider.complete; policies held", async () => {
    const provider = new FakeConversationProvider({
      scripted: [
        "Analyse contract-first: Cursor CLAIM ≠ Evidence; Artifact PARTIAL; NOT_PROVEN.",
      ],
    });
    setConversationProviderForTests(provider);
    const invocations: string[] = [];
    const stop = observeNoraCognitiveCore((inv) => invocations.push(inv.mode));
    const completeSpy = vi.spyOn(provider, "complete");

    try {
      const result = await analyzePostEvidenceWithProvider({
        projectId: "prj:t-c2",
        executionContractId: "xct:t-c2",
        executionContractStatus: "confirmed",
        executionContractAction: "cursor.docs_write.apply",
        attemptId: "xat:t-c2",
        attemptStatus: "succeeded",
        selectedAgentRef: "agt:fake",
        adapterRef: "adp:fake",
        executionMode: "deterministic_fake",
        realProcessInvoked: false,
        evidenceId: "ev:docs-write:xat:t-c2",
        reviewBundleId: "rb:docs-write:xat:t-c2",
        technicalResultRef: "res:t-c2",
        reservations: [],
        productOutcome: "UNCLAIMED",
        claimEvaluationId: "clm:docs-write:xat:t-c2",
        claimEvaluationStatus: "not_proven",
        contractResultVerdict: "NOT_PROVEN",
        artifactReviewCompleteness: "PARTIAL",
        artifactReviewMaterial: "# Partial body",
        cursorReportSummary: "CLAIM succeeded",
      });
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.text).toMatch(/CLAIM|NOT_PROVEN|PARTIAL|contract/i);
      }
    } finally {
      stop();
      completeSpy.mockRestore();
      setConversationProviderForTests(null);
    }

    expect(invocations).toContain("post_execution");
    // Shared Agents path — Fake may still use completeRound adapter, but the
    // postEvidence module must NOT call provider.complete directly.
    const analysisSrc = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/f3/postEvidenceNoraAnalysis.ts",
      ),
      "utf8",
    );
    expect(analysisSrc).not.toMatch(/provider\.complete\(/);
    expect(analysisSrc).toContain("runNoraCognitiveCompletion");
    expect(completeSpy).not.toHaveBeenCalled();

    // Core file must route through runNoraAgentsTurn (not bare complete).
    const coreSrc = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../lib/nora-cognitive-runtime/noraCognitiveCompletion.ts",
      ),
      "utf8",
    );
    expect(coreSrc).toContain("runNoraAgentsTurn");
    expect(coreSrc).toContain("runNoraCognitiveCore");
  });

  it("T-E3 — ContractResult verdict projection is canonical", () => {
    const cases: Array<[ClaimEvaluationStatus, "PASS" | "FAIL" | "NOT_PROVEN"]> = [
      ["pass", "PASS"],
      ["fail", "FAIL"],
      ["not_proven", "NOT_PROVEN"],
      ["pending", "NOT_PROVEN"],
      ["evaluating", "NOT_PROVEN"],
      ["waived", "NOT_PROVEN"],
    ];
    for (const [status, verdict] of cases) {
      expect(projectContractResultVerdict(status)).toBe(verdict);
    }
  });

  it("T-STAGES — every continuity stage has a real derivation condition", () => {
    const ec = {
      kind: "PRODUCT_CONTRACT" as const,
      executionContractId: "xct:1",
      version: 1,
      status: "confirmed",
      action: "cursor.docs_write.apply",
      objective: null,
      decisionId: null,
      cycleInstanceId: null,
    };
    const matrix: Array<{
      stage: GovernedExecutionContinuityStage;
      ctx: ProductExecutionContext;
    }> = [
      {
        stage: "PRE_EXECUTION",
        ctx: emptyContext({ executionContract: null, attempt: null }),
      },
      {
        stage: "PRE_EXECUTION",
        ctx: emptyContext({
          executionContract: ec,
          attempt: null,
        }),
      },
      {
        stage: "ATTEMPT_ACCEPTED",
        ctx: emptyContext({
          executionContract: ec,
          attempt: {
            kind: "PRODUCT_EXECUTION_FACT",
            attemptId: "xat:1",
            status: "accepted",
            selectedAgentRef: "agt:x",
            executionContractId: "xct:1",
          },
        }),
      },
      {
        stage: "RUNNING",
        ctx: emptyContext({
          executionContract: ec,
          attempt: {
            kind: "PRODUCT_EXECUTION_FACT",
            attemptId: "xat:1",
            status: "running",
            selectedAgentRef: "agt:x",
            executionContractId: "xct:1",
          },
        }),
      },
      {
        stage: "PRODUCT_MATERIALIZATION_PENDING",
        ctx: emptyContext({
          executionContract: ec,
          attempt: {
            kind: "PRODUCT_EXECUTION_FACT",
            attemptId: "xat:1",
            status: "succeeded",
            selectedAgentRef: "agt:x",
            executionContractId: "xct:1",
          },
        }),
      },
      {
        stage: "POST_EVIDENCE_PENDING",
        ctx: emptyContext({
          executionContract: ec,
          attempt: {
            kind: "PRODUCT_EXECUTION_FACT",
            attemptId: "xat:1",
            status: "succeeded",
            selectedAgentRef: "agt:x",
            executionContractId: "xct:1",
          },
          evidence: {
            kind: "EVIDENCE",
            evidenceId: "ev:1",
            status: "verified",
            evidenceIds: ["ev:1"],
          },
          reviewBundle: {
            kind: "REVIEW",
            reviewBundleId: "rb:1",
            status: "ready_for_review",
            frozen: true,
          },
          claimEvaluation: {
            kind: "PRODUCT_QUALIFICATION",
            claimEvaluationId: "clm:1",
            status: "not_proven",
            contractResultVerdict: "NOT_PROVEN",
          },
        }),
      },
      {
        stage: "POST_EVIDENCE_COMPLETE",
        ctx: emptyContext({
          executionContract: ec,
          attempt: {
            kind: "PRODUCT_EXECUTION_FACT",
            attemptId: "xat:1",
            status: "succeeded",
            selectedAgentRef: "agt:x",
            executionContractId: "xct:1",
          },
          evidence: {
            kind: "EVIDENCE",
            evidenceId: "ev:1",
            status: "verified",
            evidenceIds: ["ev:1"],
          },
          reviewBundle: {
            kind: "REVIEW",
            reviewBundleId: "rb:1",
            status: "ready_for_review",
            frozen: true,
          },
          claimEvaluation: {
            kind: "PRODUCT_QUALIFICATION",
            claimEvaluationId: "clm:1",
            status: "not_proven",
            contractResultVerdict: "NOT_PROVEN",
          },
          postEvidence: {
            kind: "RECOMMENDATION",
            present: true,
            recommendationKind: "clarify",
            headline: "Diagnose",
            requiresHumanDecision: true,
          },
        }),
      },
      {
        stage: "RECOVERY_REQUIRED",
        ctx: emptyContext({
          executionContract: ec,
          attempt: {
            kind: "PRODUCT_EXECUTION_FACT",
            attemptId: "xat:1",
            status: "weird_unknown",
            selectedAgentRef: "agt:x",
            executionContractId: "xct:1",
          },
        }),
      },
    ];

    const seen = new Set<GovernedExecutionContinuityStage>();
    for (const row of matrix) {
      const projection = deriveGovernedExecutionContinuityFromContext(row.ctx);
      expect(projection.stage).toBe(row.stage);
      seen.add(projection.stage);
    }
    // Every union member must be covered (CR-05 — no dead stages).
    const all: GovernedExecutionContinuityStage[] = [
      "PRE_EXECUTION",
      "ATTEMPT_ACCEPTED",
      "RUNNING",
      "PRODUCT_MATERIALIZATION_PENDING",
      "POST_EVIDENCE_PENDING",
      "POST_EVIDENCE_COMPLETE",
      "RECOVERY_REQUIRED",
    ];
    for (const s of all) expect(seen.has(s)).toBe(true);
    expect(all).not.toContain("TECHNICAL_TERMINAL" as never);
    expect(all).not.toContain("PRODUCT_QUALIFIED" as never);
  });

  it("T-D — product_execution_context_get tool is project-bound and read-only", async () => {
    const calls: unknown[] = [];
    const tools = createProductExecutionAgentsTools({
      projectId: "proj-a",
      resolve: async (query) => {
        calls.push(query);
        return {
          ok: false,
          code: "CROSS_PROJECT_REF_REJECTED",
          message: "hostile",
        };
      },
    });
    expect(tools).toHaveLength(1);
    const tool = tools[0]!;
    expect(tool.name).toBe("product_execution_context_get");
    const { RunContext } = await import("@openai/agents");
    const runCtx = new RunContext({});
    const raw = await tool.invoke(
      runCtx,
      JSON.stringify({ attemptId: "xat:foreign" }),
    );
    const parsed = JSON.parse(String(raw)) as { ok: boolean; code?: string };
    expect(parsed.ok).toBe(false);
    expect(parsed.code).toBe("CROSS_PROJECT_REF_REJECTED");
    expect(calls).toEqual([{ kind: "byAttemptId", attemptId: "xat:foreign" }]);
  });

  it("T-E2 source — resolveEvidenceLineage uses canonical bindings helper", () => {
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/w2/resolveProductExecutionContext.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/startsWith\("ev:docs-write:"\)/);
    expect(src).not.toMatch(/startsWith\("ev:w3b:"\)/);
    expect(src).toContain("EVIDENCE_LINEAGE_AMBIGUOUS");
    expect(src).toContain("projectContractResultVerdict");
    expect(src).toContain("resolveCurrentContractResultClaimEvaluation");
    expect(src).toContain("contractResultBindingsMatchCurrentFacts");
    expect(src).toContain("CONTRACT_RESULT_BINDINGS_MISMATCH");
    expect(src).toContain("boundExecutionContract");
  });
});
