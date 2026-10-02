/**
 * GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 — deterministic core proofs.
 * Correction Pass 02 unit seams (CP2-01 … CP2-08):
 * - CP2-01 durable-fact local-write qualification (no docs_write taxonomy)
 * - CP2-02 Git observation mode — no full-repo fallback, HEAD integrity
 * - CP2-03 no synthetic Cursor Review End Of
 * - CP2-04 Verification Evidence prerequisites (ER keys / payload facts)
 * - CP2-07 shared bound reader security (Nora tool + Pilot action primitive)
 * - CP2-08 reconcile continue policy — no total-budget abandonment
 * ZERO REAL. Fake/filesystem/temp-Git only.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import {
  mintCursorExecutionReportId,
  type CursorExecutionReport,
} from "@/lib/oa/execution-attempt/domain/cursorExecutionReport";
import {
  mintCursorReviewEndOfId,
  type CursorReviewEndOf,
} from "@/lib/oa/execution-attempt/domain/cursorReviewEndOf";
import {
  observeVerifiedChangeSet,
  observeVerifiedChangeSetStrict,
} from "@/lib/oa/execution-attempt/application/observeVerifiedChangeSet";
import { NodeLocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import {
  CURSOR_REVIEW_END_OF_MISSING,
  finalizeGenericExecutionReview,
  presentationSummaryFromCursorReport,
  resolveCursorReviewEndOfClaim,
} from "@/features/project-assistant/f3/finalizeGenericExecutionReview";
import {
  genericExecutionReviewMaterialRefsRelative,
  loadGenericExecutionReviewMaterial,
  persistGenericExecutionReviewMaterial,
  digestUtf8,
} from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { readBoundExecutionReviewItem } from "@/features/project-assistant/f3/readBoundExecutionReviewItem";
import {
  EXECUTION_REVIEW_VERIFICATION_ER_KEY,
  OA_EXECUTION_REVIEW_VERIFICATION_SCHEMA,
  digestExecutionReviewVerificationPayload,
  executionReviewVerificationEvidenceIdForAttempt,
  isExecutionReviewVerificationEvidenceId,
  isExecutionReviewVerificationPayload,
  persistExecutionReviewVerificationPayload,
  type ExecutionReviewVerificationPayload,
} from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
import {
  missionRequiresStudioVerification,
  verificationEvidenceFactsHold,
} from "@/lib/oa/evidence-review/application/missionResultContractResultSemantic";
import {
  LEGACY_UI_RUNNING_POLL_BUDGET,
  NOMINAL_RECONCILE_CONTINUE_BUDGET,
  RECONCILE_CONTINUE_BACKOFF_MAX_MS,
  nextReconcileContinueDelayMs,
  shouldContinueReconcileNominally,
  shouldAutoResumeReconcileOnRemount,
  nominalContinueIterationsRemaining,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";
import {
  canQualifyGenericLocalWriteFromDurableFacts,
  deriveActualExecutionWorkFromProductContext,
} from "@/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import type { DecisionBasis } from "@/lib/oa/decision";
import { createExecutionReviewAgentsTools } from "@/lib/nora-cognitive-runtime/executionReviewAgentsTools";
import { GENERIC_PRODUCT_REPORT_REQUIREMENTS } from "@/features/project-assistant/w2/missionContractSemanticInputs";
import {
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
} from "@/lib/oa/execution-contract/domain/generalistExecutionSurface";

function tmpRoot(label: string): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), `gerrc-${label}-`));
}

function baseReport(
  attemptId: string,
  executionContractId: string,
  overrides: Partial<CursorExecutionReport> = {},
): CursorExecutionReport {
  return {
    schemaVersion: "oa.cursor-execution-report.1",
    reportId: mintCursorExecutionReportId({ attemptId, executionContractId }),
    attemptId,
    executionContractId,
    repositoryRef: "repo:test",
    baseSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    status: "succeeded",
    authorizedEffectsExecuted: ["filesystem.create", "filesystem.modify"],
    workPerformed: ["wrote notes"],
    fileEffects: {
      created: ["projects/demo/a.md"],
      modified: [],
      deleted: [],
    },
    ...overrides,
  };
}

describe("GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 core", () => {
  it("EP — reportRequirements demand Report + Review End Of (generic Product)", () => {
    const joined = GENERIC_PRODUCT_REPORT_REQUIREMENTS.join("\n");
    expect(joined).toMatch(/Review End Of/i);
    expect(joined).toMatch(/reportId/);
    expect(STUDIO_CURSOR_GENERALIST_CAPABILITY).toBe(
      "cap:studio.cursor.generalist",
    );
    expect(STUDIO_CURSOR_GENERALIST_ACTION).toBe(
      "studio.cursor.generalist.execute",
    );
  });

  it("EP-03/04/05 — VerifiedChangeSet detects unclaimed observed file", async () => {
    const wt = tmpRoot("wt");
    fs.writeFileSync(path.join(wt, "a.md"), "A\n");
    fs.writeFileSync(path.join(wt, "b.md"), "B\n");
    const report = baseReport("att:1", "ec:1", {
      fileEffects: { created: ["a.md"], modified: [], deleted: [] },
    });
    const cs = await observeVerifiedChangeSet({
      worktreePath: wt,
      report,
      nameStatusText: "A\ta.md\nA\tb.md\n",
    });
    expect(cs.claimFactMismatch).toBe(true);
    expect(cs.unclaimedObservedPaths).toContain("b.md");
    expect(cs.created.map((e) => e.path).sort()).toEqual(["a.md", "b.md"]);
  });

  it("EP-06/07/17 — Review Material durable; 0 Artifact / 0 file valid", () => {
    const refs = tmpRoot("refs");
    const report = baseReport("att:zero", "ec:zero", {
      fileEffects: { created: [], modified: [], deleted: [] },
      authorizedEffectsExecuted: ["validation.run"],
      validationEffects: [
        { identity: "unit", result: "pass", summary: "ok" },
      ],
    });
    const reo: CursorReviewEndOf = {
      schemaVersion: "oa.cursor-review-end-of.1",
      reviewEndOfId: mintCursorReviewEndOfId({
        attemptId: "att:zero",
        executionContractId: "ec:zero",
      }),
      attemptId: "att:zero",
      executionContractId: "ec:zero",
      timestamp: new Date().toISOString(),
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      verdict: "succeeded",
      objective: "validate only",
      scopeTreated: "no files",
      workPerformed: ["ran validation"],
      filesCreated: [],
      filesModified: [],
      filesDeleted: [],
      validations: ["unit:pass"],
      deviations: [],
      blockers: [],
      reservations: [],
      stopConditionsMet: [],
      claims: ["validation pass"],
      pointsRequiringReview: [],
    };
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot: refs,
      projectId: "prj:zero",
      executionContractId: "ec:zero",
      attemptId: "att:zero",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      reviewEndOf: reo,
      reviewItems: [
        {
          kind: "validation",
          label: "unit",
          text: "pass",
          summary: "pass",
        },
      ],
    });
    expect(persisted.ok).toBe(true);
    if (!persisted.ok) return;
    expect(persisted.manifest.reviewItems.length).toBe(1);
    expect(
      persisted.manifest.reviewItems.every((i) => i.kind !== "artifact"),
    ).toBe(true);
    const loaded = loadGenericExecutionReviewMaterial({
      refsRoot: refs,
      attemptId: "att:zero",
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.reviewEndOf?.verdict).toBe("succeeded");
    expect(loaded.cursorReport?.status).toBe("succeeded");
  });

  it("EP-06 — finalize after observation persists mismatch + review items", async () => {
    const refs = tmpRoot("fin");
    const wt = tmpRoot("fin-wt");
    fs.mkdirSync(path.join(wt, "projects/demo"), { recursive: true });
    fs.writeFileSync(path.join(wt, "projects/demo/a.md"), "A\n");
    fs.writeFileSync(path.join(wt, "projects/demo/b.md"), "B\n");
    const report = baseReport("att:fin", "ec:fin", {
      fileEffects: {
        created: ["projects/demo/a.md"],
        modified: [],
        deleted: [],
      },
      reviewEndOf: {
        schemaVersion: "oa.cursor-review-end-of.1",
        reviewEndOfId: mintCursorReviewEndOfId({
          attemptId: "att:fin",
          executionContractId: "ec:fin",
        }),
        attemptId: "att:fin",
        executionContractId: "ec:fin",
        timestamp: new Date().toISOString(),
        repositoryRef: "repo:test",
        baseSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        verdict: "succeeded",
        objective: "write notes",
        scopeTreated: "demo",
        workPerformed: ["a.md"],
        filesCreated: ["projects/demo/a.md"],
        filesModified: [],
        filesDeleted: [],
        validations: [],
        deviations: [],
        blockers: [],
        reservations: [],
        stopConditionsMet: [],
        claims: ["created a.md"],
        pointsRequiringReview: ["confirm b.md unexpected"],
      },
    });
    const finalized = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:fin",
      executionContractId: "ec:fin",
      attemptId: "att:fin",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      worktreePath: wt,
      nameStatusText:
        "A\tprojects/demo/a.md\nA\tprojects/demo/b.md\n",
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.claimFactMismatch).toBe(true);
    expect(finalized.manifest.completeness).toBe("PARTIAL");
    expect(finalized.reviewEndOf?.pointsRequiringReview.length).toBeGreaterThan(
      0,
    );
    expect(finalized.manifest.reviewItems.length).toBeGreaterThanOrEqual(2);
  });

  it("CR-02 — no worktree ⇒ verification UNAVAILABLE (not empty FACTS)", async () => {
    const refs = tmpRoot("noobs");
    const report = baseReport("att:noobs", "ec:noobs");
    const finalized = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:noobs",
      executionContractId: "ec:noobs",
      attemptId: "att:noobs",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      // no worktreePath
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.verificationStatus).toBe("UNAVAILABLE");
    expect(finalized.verifiedChangeSet).toBeNull();
    expect(finalized.manifest.verifiedEffects.verifiedChangeSetRef).toBeNull();
    expect(finalized.manifest.completeness).toBe("PARTIAL");
    expect(finalized.manifest.blockers.some((b) => b.includes("VERIFICATION_UNAVAILABLE"))).toBe(true);
  });

  it("CR-02 — observed zero-file is VerifiedChangeSet empty OBSERVED", async () => {
    const refs = tmpRoot("zeroobs");
    const wt = tmpRoot("zero-wt");
    const report = baseReport("att:zeroobs", "ec:zeroobs", {
      fileEffects: { created: [], modified: [], deleted: [] },
      authorizedEffectsExecuted: ["validation.run"],
      validationEffects: [{ identity: "v1", result: "pass" }],
    });
    const finalized = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:zeroobs",
      executionContractId: "ec:zeroobs",
      attemptId: "att:zeroobs",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      worktreePath: wt,
      nameStatusText: "",
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.verificationStatus).toBe("OBSERVED");
    expect(finalized.verifiedChangeSet).not.toBeNull();
    expect(finalized.verifiedChangeSet!.all).toEqual([]);
    expect(finalized.manifest.verifiedEffects.gitFacts).toContain("verified_zero_change");
  });

  it("EP-18/CR-04/CP2-08 — anti-stall: remount resume policy; NO total continue budget", () => {
    // CP2-08: budget is not a correctness bearer — infinite, not a number to exhaust.
    expect(NOMINAL_RECONCILE_CONTINUE_BUDGET).toBe(Number.POSITIVE_INFINITY);
    expect(NOMINAL_RECONCILE_CONTINUE_BUDGET).toBeGreaterThan(
      LEGACY_UI_RUNNING_POLL_BUDGET,
    );
    expect(shouldAutoResumeReconcileOnRemount({ stage: "RUNNING" })).toBe(true);
    expect(
      shouldAutoResumeReconcileOnRemount({
        stage: "PRODUCT_MATERIALIZATION_PENDING",
        nextDeterministicAction: "MATERIALIZE_PRODUCT",
      }),
    ).toBe(true);
    expect(shouldContinueReconcileNominally({ stage: "RUNNING" })).toBe(true);
    expect(
      shouldContinueReconcileNominally({
        stage: "PRODUCT_MATERIALIZATION_PENDING",
        nextDeterministicAction: "MATERIALIZE_PRODUCT",
      }),
    ).toBe(true);
    expect(
      shouldContinueReconcileNominally({
        stage: "POST_EVIDENCE_COMPLETE",
        nextDeterministicAction: "NONE",
      }),
    ).toBe(false);
    // Past ANY historical budget (8 legacy, 120 abandonment) → still continues.
    for (const used of [0, 8, 9, 120, 121, 10_000]) {
      expect(
        nominalContinueIterationsRemaining(used, { stage: "RUNNING" }),
      ).toBe(Number.POSITIVE_INFINITY);
    }
    expect(
      nominalContinueIterationsRemaining(0, {
        stage: "POST_EVIDENCE_COMPLETE",
        nextDeterministicAction: "NONE",
      }),
    ).toBe(0);
  });

  it("EP-10 — Nora execution review tools are Attempt/Project-bound", async () => {
    const refs = tmpRoot("nora");
    const report = baseReport("att:nora", "ec:nora");
    persistGenericExecutionReviewMaterial({
      refsRoot: refs,
      projectId: "prj:nora",
      executionContractId: "ec:nora",
      attemptId: "att:nora",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      reviewItems: [
        { kind: "log", label: "note", text: "hello review", summary: "log" },
      ],
    });
    const tools = createExecutionReviewAgentsTools({
      projectId: "prj:nora",
      attemptId: "att:nora",
      refsRoot: refs,
    });
    expect(tools).toHaveLength(2);
    expect(tools[0]!.name).toBe("execution_review_get_manifest");
    expect(tools[1]!.name).toBe("execution_review_read_item");
    const { RunContext } = await import("@openai/agents");
    const runCtx = new RunContext({});
    const manifestJson = await tools[0]!.invoke(runCtx, JSON.stringify({}));
    const manifest = JSON.parse(String(manifestJson)) as {
      ok: boolean;
      executorClaims?: { disclosure?: string };
      reviewItems?: { itemId: string }[];
    };
    expect(manifest.ok).toBe(true);
    expect(manifest.executorClaims?.disclosure).toBe("CLAIM_NOT_EVIDENCE");
    const itemId = manifest.reviewItems![0]!.itemId;
    const readJson = await tools[1]!.invoke(
      runCtx,
      JSON.stringify({ itemId }),
    );
    const read = JSON.parse(String(readJson)) as {
      ok: boolean;
      content?: string;
    };
    expect(read.ok).toBe(true);
    expect(read.content).toContain("hello review");

    const foreign = createExecutionReviewAgentsTools({
      projectId: "prj:other",
      attemptId: "att:nora",
      refsRoot: refs,
    });
    const denied = JSON.parse(
      String(await foreign[0]!.invoke(runCtx, JSON.stringify({}))),
    ) as { ok: boolean; code?: string };
    expect(denied.ok).toBe(false);
    expect(denied.code).toBe("EXECUTION_REVIEW_PROJECT_MISMATCH");
  });
});


describe("GENERIC-EXECUTION-REVIEW-RESULT — Product Resolution surface", () => {
  it("loads executionReview after finalize into Product Resolution fields", async () => {
    const refs = tmpRoot("res");
    process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT = refs;
    const report = baseReport("att:res", "ec:res", {
      fileEffects: { created: ["x.md"], modified: [], deleted: [] },
    });
    const finalized = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:res",
      executionContractId: "ec:res",
      attemptId: "att:res",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      nameStatusText: "A\tx.md\nA\ty.md\n",
      worktreePath: (() => {
        const wt = tmpRoot("res-wt");
        fs.writeFileSync(path.join(wt, "x.md"), "x");
        fs.writeFileSync(path.join(wt, "y.md"), "y");
        return wt;
      })(),
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    const loaded = loadGenericExecutionReviewMaterial({
      refsRoot: refs,
      attemptId: "att:res",
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.manifest.projectId).toBe("prj:res");
    expect(loaded.verifiedChangeSet?.claimFactMismatch).toBe(true);
    expect(loaded.manifest.reviewItems.length).toBeGreaterThan(0);
  });
});

/* -------------------------------------------------------------------------- */
/* Correction Pass 02 — unit seams                                            */
/* -------------------------------------------------------------------------- */

function git(cwd: string, ...args: string[]): string {
  return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
}

/** Real temp Git repo: baseline.txt + untouched.txt committed at H0. */
function makeGitRepo(label: string): { repo: string; h0: string } {
  const repo = tmpRoot(`git-${label}`);
  git(repo, "init", "-q");
  git(repo, "config", "user.email", "gerrc@example.test");
  git(repo, "config", "user.name", "gerrc");
  git(repo, "config", "commit.gpgsign", "false");
  fs.writeFileSync(path.join(repo, "baseline.txt"), "base\n");
  fs.writeFileSync(path.join(repo, "untouched.txt"), "untouched\n");
  fs.mkdirSync(path.join(repo, "deep/nested"), { recursive: true });
  fs.writeFileSync(path.join(repo, "deep/nested/old.txt"), "old\n");
  git(repo, "add", "-A");
  git(repo, "commit", "-q", "-m", "H0");
  return { repo, h0: git(repo, "rev-parse", "HEAD").toLowerCase() };
}

function sealedBasis(
  executionBasis: DecisionBasis["executionBasis"],
): DecisionBasis {
  return {
    sourceType: "trajectory_option",
    sourceRef: "optset:cp2",
    sourceDigest: "a".repeat(64),
    projectId: "prj:cp2",
    proposalContext: { lpsId: "lps:cp2", lpsVersion: 1 },
    trajectoryContext: {
      trajectoryId: "trj:cp2",
      candidateVersion: 1,
      optionRefs: [GOVERNED_OPTION_REF],
      selectedOptionRef: GOVERNED_OPTION_REF,
      recommendedOptionRef: GOVERNED_OPTION_REF,
    },
    executionBasis: {
      objective: "write a.md and update baseline.txt",
      requestedOperation: `w2:decide-trajectory:${GOVERNED_OPTION_REF}`,
      ...executionBasis,
    },
  };
}

const LOCAL_WRITE_FACTS: DecisionBasis["executionBasis"] = {
  targetPath: "a.md",
  scopeIn: ["a.md", "baseline.txt"],
  reversibilityExpectation: "reversible",
};

describe("CP2-01 — durable-fact local-write qualification (no docs_write taxonomy)", () => {
  it("GOVERNED + sealed targetPath/scopeIn + reversible ⇒ qualified local-write", () => {
    const q = canQualifyGenericLocalWriteFromDurableFacts({
      basis: sealedBasis(LOCAL_WRITE_FACTS),
      selectedOptionRef: GOVERNED_OPTION_REF,
    });
    expect(q.ok).toBe(true);
    if (!q.ok) return;
    expect([...q.allowedPaths].sort()).toEqual(["a.md", "baseline.txt"]);
    expect(q.rollbackAvailable).toBe(true);
    // BOUNDED provenance qualifies too.
    expect(
      canQualifyGenericLocalWriteFromDurableFacts({
        basis: sealedBasis(LOCAL_WRITE_FACTS),
        selectedOptionRef: BOUNDED_OPTION_REF,
      }).ok,
    ).toBe(true);
  });

  it("fail-closed: no sealed paths / irreversible / CLARIFY / docs_write sealed", () => {
    const deny = (
      eb: DecisionBasis["executionBasis"],
      option: string = GOVERNED_OPTION_REF,
    ) =>
      canQualifyGenericLocalWriteFromDurableFacts({
        basis: sealedBasis(eb),
        selectedOptionRef: option,
      });
    expect(deny({}).ok).toBe(false); // no durable paths
    expect(deny({ reversibilityExpectation: "reversible" }).ok).toBe(false);
    expect(
      deny({ ...LOCAL_WRITE_FACTS, reversibilityExpectation: "irreversible" })
        .ok,
    ).toBe(false);
    expect(deny(LOCAL_WRITE_FACTS, CLARIFY_OPTION_REF).ok).toBe(false);
    expect(deny({ ...LOCAL_WRITE_FACTS, intentKind: "docs_write" }).ok).toBe(
      false,
    );
    expect(
      deny({
        ...LOCAL_WRITE_FACTS,
        requestedOperation: "cursor.docs_write.apply",
      }).ok,
    ).toBe(false);
    // Pseudo-refs are not repository files.
    expect(
      deny({ scopeIn: ["product:project-workspace", "attempt:xat:1"] }).ok,
    ).toBe(false);
  });

  it("derive: durable facts ⇒ local-write work (generic quartet surface); hostile client kind never wins", () => {
    const derived = deriveActualExecutionWorkFromProductContext({
      projectId: "prj:cp2",
      projectTitle: "cp2",
      projectObjective: "obj",
      basis: sealedBasis(LOCAL_WRITE_FACTS),
      selectedOptionRef: GOVERNED_OPTION_REF,
      recoveryContext: null,
      clientOperationKind: "read", // hostile/compat — must not override
    });
    expect(derived.ok).toBe(true);
    if (!derived.ok || !("work" in derived)) return;
    expect(derived.work.effectClass).toBe("local-write");
    expect(derived.work.notes).toContain("PRODUCT_QUALIFIED_LOCAL_WRITE");
    expect(derived.work.notes).toContain("NOT_DOCS_WRITE_PRODUCT_TAXONOMY");
    expect(derived.mission.authorizesMutatingEffects).toBe(true);
    expect(derived.mission.evidenceRequirements).toEqual(
      expect.arrayContaining([
        "evreq:local-write",
        "evreq:studio-verified-changeset",
      ]),
    );
    expect(derived.mission.scopeOut).toEqual(
      expect.arrayContaining(["GIT_COMMIT", "GIT_PUSH", "GIT_PR", "GIT_MERGE"]),
    );
  });

  it("derive: GOVERNED without durable facts ⇒ EFFECTS_UNRESOLVED; docs_write sealed ⇒ PREPARE route; hostile local-write kind refused", () => {
    const none = deriveActualExecutionWorkFromProductContext({
      projectId: "prj:cp2",
      projectTitle: null,
      projectObjective: null,
      basis: sealedBasis({}),
      selectedOptionRef: GOVERNED_OPTION_REF,
      recoveryContext: null,
    });
    expect(none.ok).toBe(false);
    if (!none.ok) expect(none.code).toBe("EFFECTS_UNRESOLVED");

    const docs = deriveActualExecutionWorkFromProductContext({
      projectId: "prj:cp2",
      projectTitle: null,
      projectObjective: null,
      basis: sealedBasis({
        ...LOCAL_WRITE_FACTS,
        intentKind: "docs_write",
        requestedOperation: "cursor.docs_write.apply",
      }),
      selectedOptionRef: GOVERNED_OPTION_REF,
      recoveryContext: null,
    });
    expect(docs.ok).toBe(false);
    if (!docs.ok) expect(docs.code).toBe("PREPARE_ROUTE_DOCS_WRITE");

    const hostile = deriveActualExecutionWorkFromProductContext({
      projectId: "prj:cp2",
      projectTitle: null,
      projectObjective: null,
      basis: sealedBasis({}),
      selectedOptionRef: GOVERNED_OPTION_REF,
      recoveryContext: null,
      clientOperationKind: "local-write",
    });
    expect(hostile.ok).toBe(false);
    if (!hostile.ok) expect(hostile.code).toBe("PREPARATION_BLOCKED");
  });
});

describe("CP2-02 — Git observation: no full-repo fallback, HEAD integrity", () => {
  it("git mode without a Git port ⇒ UNAVAILABLE (never a recursive scan)", async () => {
    const { repo } = makeGitRepo("noport");
    fs.writeFileSync(path.join(repo, "a.md"), "A\n");
    const r = await observeVerifiedChangeSetStrict({
      worktreePath: repo,
      observationMode: "git",
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe("GIT_OBSERVER_REQUIRED");
    expect(r.verificationStatus).toBe("UNAVAILABLE");
    // Default (no mode, no status text) is also Git mode ⇒ also UNAVAILABLE.
    const dflt = await observeVerifiedChangeSetStrict({ worktreePath: repo });
    expect(dflt.ok).toBe(false);
  });

  it("real Git worktree: ONLY the 3 deltas are observed (not the whole repo); HEAD = H0", async () => {
    const { repo, h0 } = makeGitRepo("deltas");
    fs.writeFileSync(path.join(repo, "a.md"), "A\n");
    fs.appendFileSync(path.join(repo, "baseline.txt"), "changed\n");
    fs.writeFileSync(path.join(repo, "b.md"), "B-unclaimed\n");
    const r = await observeVerifiedChangeSetStrict({
      worktreePath: repo,
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
      observationMode: "git",
      expectedBaseSha: h0,
      report: baseReport("att:g", "ec:g", {
        fileEffects: {
          created: ["a.md"],
          modified: ["baseline.txt"],
          deleted: [],
        },
      }),
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    const cs = r.changeSet;
    expect(cs.all.map((e) => e.path).sort()).toEqual([
      "a.md",
      "b.md",
      "baseline.txt",
    ]);
    // Committed-and-untouched files are NOT reported as created.
    expect(cs.all.map((e) => e.path)).not.toContain("untouched.txt");
    expect(cs.all.map((e) => e.path)).not.toContain("deep/nested/old.txt");
    expect(cs.created.map((e) => e.path).sort()).toEqual(["a.md", "b.md"]);
    expect(cs.modified.map((e) => e.path)).toEqual(["baseline.txt"]);
    expect(cs.claimFactMismatch).toBe(true);
    expect(cs.unclaimedObservedPaths).toEqual(["b.md"]);
    expect(cs.claimedMissingPaths).toEqual([]);
    expect(cs.observedHeadSha).toBe(h0);
    expect(cs.all.every((e) => e.afterDigest?.startsWith("sha256:"))).toBe(
      true,
    );
  });

  it("claimed file absent from Git FACTS ⇒ claimedMissingPaths mismatch", async () => {
    const { repo, h0 } = makeGitRepo("missing");
    fs.writeFileSync(path.join(repo, "a.md"), "A\n");
    const r = await observeVerifiedChangeSetStrict({
      worktreePath: repo,
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
      observationMode: "git",
      expectedBaseSha: h0,
      report: baseReport("att:cm", "ec:cm", {
        fileEffects: {
          created: ["a.md", "ghost.md"],
          modified: [],
          deleted: [],
        },
      }),
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.changeSet.claimedMissingPaths).toEqual(["ghost.md"]);
    expect(r.changeSet.claimFactMismatch).toBe(true);
  });

  it("clean Git worktree ⇒ OBSERVED verified zero change — committed files are never listed", async () => {
    const { repo, h0 } = makeGitRepo("clean");
    const r = await observeVerifiedChangeSetStrict({
      worktreePath: repo,
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
      observationMode: "git",
      expectedBaseSha: h0,
      report: baseReport("att:z", "ec:z", {
        fileEffects: { created: [], modified: [], deleted: [] },
      }),
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.verificationStatus).toBe("OBSERVED");
    expect(r.changeSet.all).toEqual([]);
    expect(r.changeSet.claimFactMismatch).toBe(false);
    expect(r.changeSet.observedHeadSha).toBe(h0);
  });

  it("HEAD ≠ expected baseSha ⇒ GIT_HEAD_MISMATCH (FACTS integrity refused)", async () => {
    const { repo } = makeGitRepo("head");
    const r = await observeVerifiedChangeSetStrict({
      worktreePath: repo,
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
      observationMode: "git",
      expectedBaseSha: "b".repeat(40),
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe("GIT_HEAD_MISMATCH");
    expect(r.verificationStatus).toBe("UNAVAILABLE");
  });

  it("throwing Git port ⇒ GIT_OBSERVATION_FAILED; finalize ⇒ UNAVAILABLE with no VerifiedChangeSet", async () => {
    const { repo } = makeGitRepo("throw");
    const failing = {
      statusDiff: async () => {
        throw new Error("boom");
      },
    };
    const strict = await observeVerifiedChangeSetStrict({
      worktreePath: repo,
      statusDiffPort: failing,
      observationMode: "git",
    });
    expect(strict.ok).toBe(false);
    if (!strict.ok) expect(strict.code).toBe("GIT_OBSERVATION_FAILED");

    const refs = tmpRoot("throw-refs");
    const report = baseReport("att:throw", "ec:throw");
    const fin = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:throw",
      executionContractId: "ec:throw",
      attemptId: "att:throw",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      worktreePath: repo,
      statusDiffPort: failing,
    });
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.verificationStatus).toBe("UNAVAILABLE");
    expect(fin.verifiedChangeSet).toBeNull();
    expect(fin.manifest.verifiedEffects.verifiedChangeSetRef).toBeNull();
  });

  it("finalize default (Git worktree, no port, no injected status) uses NodeLocalGitStatusDiffPort", async () => {
    const { repo, h0 } = makeGitRepo("fin");
    fs.writeFileSync(path.join(repo, "a.md"), "A\n");
    fs.appendFileSync(path.join(repo, "baseline.txt"), "changed\n");
    fs.writeFileSync(path.join(repo, "b.md"), "B\n");
    const refs = tmpRoot("fin-refs");
    const report = baseReport("att:fgit", "ec:fgit", {
      baseSha: h0,
      fileEffects: {
        created: ["a.md"],
        modified: ["baseline.txt"],
        deleted: [],
      },
    });
    const fin = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:fgit",
      executionContractId: "ec:fgit",
      attemptId: "att:fgit",
      repositoryRef: "repo:test",
      baseSha: h0,
      cursorReport: report,
      worktreePath: repo,
    });
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.verificationStatus).toBe("OBSERVED");
    expect(fin.verifiedChangeSet!.all.map((e) => e.path).sort()).toEqual([
      "a.md",
      "b.md",
      "baseline.txt",
    ]);
    expect(fin.claimFactMismatch).toBe(true);
    expect(fin.manifest.blockers.some((b) => b.includes("b.md"))).toBe(true);
    // Durable VerifiedChangeSet strips ephemeral worktree path.
    const loaded = loadGenericExecutionReviewMaterial({
      refsRoot: refs,
      attemptId: "att:fgit",
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.verifiedChangeSet?.worktreePath).not.toContain(repo);
    expect(loaded.verifiedChangeSet?.observedHeadSha).toBe(h0);
  });

  it("test_non_git is an explicit, separate mode (injected status) — never inferred for a Git worktree", async () => {
    const { repo } = makeGitRepo("tng");
    const wt = tmpRoot("tng-wt");
    fs.writeFileSync(path.join(wt, "x.md"), "x");
    const r = await observeVerifiedChangeSetStrict({
      worktreePath: wt,
      nameStatusText: "A\tx.md\n",
      observationMode: "test_non_git",
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.changeSet.all.map((e) => e.path)).toEqual(["x.md"]);
    expect(r.changeSet.observedHeadSha).toBeNull();
    // Without the explicit flag a Git-shaped call with no port refuses.
    const gitShaped = await observeVerifiedChangeSetStrict({
      worktreePath: repo,
      observationMode: "git",
      nameStatusText: "A\tx.md\n",
    });
    expect(gitShaped.ok).toBe(false);
    // Legacy helper cannot express UNAVAILABLE ⇒ empty, mismatch=false (callers MUST use strict).
    const legacy = await observeVerifiedChangeSet({
      worktreePath: repo,
      observationMode: "git",
    });
    expect(legacy.all).toEqual([]);
  });

  // CP2-02 / T-06: NodeLocalGitStatusDiffPort must fail closed on non-Git cwd
  // (never parse stderr as porcelain ⇒ bogus OBSERVED paths).
  it("non-Git directory under git mode ⇒ UNAVAILABLE (not bogus OBSERVED path)", async () => {
    const nonGit = tmpRoot("nongit");
    fs.writeFileSync(path.join(nonGit, "x.txt"), "x");
    const r = await observeVerifiedChangeSetStrict({
      worktreePath: nonGit,
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
      observationMode: "git",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.verificationStatus).toBe("UNAVAILABLE");
      expect(r.code).toBe("GIT_OBSERVATION_FAILED");
    }
  });
});

describe("CP2-03 — no synthetic Cursor Review End Of", () => {
  const nativeReo = (attemptId: string, executionContractId: string): CursorReviewEndOf => ({
    schemaVersion: "oa.cursor-review-end-of.1",
    reviewEndOfId: mintCursorReviewEndOfId({ attemptId, executionContractId }),
    attemptId,
    executionContractId,
    timestamp: new Date().toISOString(),
    repositoryRef: "repo:test",
    baseSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    verdict: "succeeded",
    objective: "o",
    scopeTreated: "s",
    workPerformed: ["w"],
    filesCreated: [],
    filesModified: [],
    filesDeleted: [],
    validations: [],
    deviations: [],
    blockers: [],
    reservations: [],
    stopConditionsMet: [],
    claims: ["c"],
    pointsRequiringReview: [],
  });

  it("report without reviewEndOf ⇒ null REO, PARTIAL, CURSOR_REVIEW_END_OF_MISSING, nothing on disk", async () => {
    const refs = tmpRoot("reo-missing");
    const report = baseReport("att:noreo", "ec:noreo");
    expect(report.reviewEndOf).toBeUndefined();
    expect(resolveCursorReviewEndOfClaim(report)).toEqual({
      reviewEndOf: null,
      present: false,
      bindingCode: null,
    });
    const fin = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:noreo",
      executionContractId: "ec:noreo",
      attemptId: "att:noreo",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      worktreePath: tmpRoot("noreo-wt"),
      nameStatusText: "",
      observationMode: "test_non_git",
    });
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.reviewEndOf).toBeNull();
    expect(fin.reviewEndOfPresent).toBe(false);
    expect(fin.manifest.executorClaims.cursorReviewEndOfRef).toBeNull();
    expect(fin.manifest.completeness).toBe("PARTIAL");
    expect(fin.manifest.blockers).toContain(CURSOR_REVIEW_END_OF_MISSING);
    expect(
      fin.manifest.reservations.some((r) => /did not synthesize/i.test(r)),
    ).toBe(true);
    const rel = genericExecutionReviewMaterialRefsRelative("att:noreo");
    expect(fs.existsSync(path.join(refs, rel.reviewEndOf))).toBe(false);
    const loaded = loadGenericExecutionReviewMaterial({
      refsRoot: refs,
      attemptId: "att:noreo",
    });
    expect(loaded.ok && loaded.reviewEndOf).toBeNull();
  });

  it("malformed reviewEndOf is treated as missing — never repaired into a REO", async () => {
    const report = baseReport("att:badreo", "ec:badreo", {
      reviewEndOf: { schemaVersion: "oa.cursor-review-end-of.1" } as never,
    });
    expect(resolveCursorReviewEndOfClaim(report).present).toBe(false);
    expect(resolveCursorReviewEndOfClaim(report).reviewEndOf).toBeNull();
  });

  it("native reviewEndOf ⇒ present, referenced, no missing blocker", async () => {
    const refs = tmpRoot("reo-native");
    const report = baseReport("att:reo", "ec:reo", {
      reviewEndOf: nativeReo("att:reo", "ec:reo"),
    });
    const fin = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:reo",
      executionContractId: "ec:reo",
      attemptId: "att:reo",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      worktreePath: tmpRoot("reo-wt"),
      nameStatusText: "A\tprojects/demo/a.md\n",
      observationMode: "test_non_git",
    });
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.reviewEndOfPresent).toBe(true);
    expect(fin.manifest.executorClaims.cursorReviewEndOfRef).not.toBeNull();
    expect(fin.manifest.blockers).not.toContain(CURSOR_REVIEW_END_OF_MISSING);
    expect(fin.reviewEndOf?.reviewEndOfId).toBe(
      mintCursorReviewEndOfId({
        attemptId: "att:reo",
        executionContractId: "ec:reo",
      }),
    );
  });

  it("report-derived presentation summary is NOT a CursorReviewEndOf", () => {
    const summary = presentationSummaryFromCursorReport(
      baseReport("att:pres", "ec:pres"),
    );
    expect(summary.kind).toBe("presentation_only_report_summary");
    expect(summary).not.toHaveProperty("schemaVersion");
    expect(summary).not.toHaveProperty("reviewEndOfId");
    expect(summary.note).toMatch(/NOT CursorReviewEndOf/);
  });
});

describe("CP2-04 — Verification Evidence prerequisites", () => {
  function payload(
    over: Partial<ExecutionReviewVerificationPayload> = {},
  ): ExecutionReviewVerificationPayload {
    return {
      schemaVersion: OA_EXECUTION_REVIEW_VERIFICATION_SCHEMA,
      attemptId: "att:v",
      executionContractId: "ec:v",
      projectId: "prj:v",
      repositoryRef: "repo:test",
      baseSha: "a".repeat(40),
      reviewMaterialId: "erm:att:v",
      verificationStatus: "OBSERVED",
      verifiedChangeSetDigest: "sha256:" + "c".repeat(64),
      verifiedChangeSetRef: "refs/attempts/att:v/execution-review/verified-changeset.json",
      claimFactMismatch: false,
      unclaimedObservedPaths: [],
      claimedMissingPaths: [],
      observedPathCount: 3,
      completeness: "FULL",
      reviewEndOfPresent: true,
      ...over,
    };
  }

  function evidenceFor(
    refs: string,
    p: ExecutionReviewVerificationPayload,
  ) {
    // CP3-04 — when OBSERVED, durable VCS bytes must exist and match digest.
    if (
      p.verificationStatus === "OBSERVED" &&
      p.verifiedChangeSetRef &&
      p.verifiedChangeSetDigest
    ) {
      const vcsAbs = path.join(refs, p.verifiedChangeSetRef);
      fs.mkdirSync(path.dirname(vcsAbs), { recursive: true });
      // Write bytes whose digest equals the declared digest, OR recompute.
      const body = `${JSON.stringify({
        schemaVersion: "oa.verified-change-set.1",
        worktreePath: "<disposed-or-ephemeral>",
        all: [],
        created: [],
        modified: [],
        deleted: [],
        renamed: [],
        claimFactMismatch: p.claimFactMismatch,
        unclaimedObservedPaths: p.unclaimedObservedPaths,
        claimedMissingPaths: p.claimedMissingPaths,
      })}\n`;
      fs.writeFileSync(vcsAbs, body, "utf8");
      p = {
        ...p,
        verifiedChangeSetDigest: digestUtf8(body),
      };
    }
    const persisted = persistExecutionReviewVerificationPayload({
      refsRoot: refs,
      attemptId: p.attemptId,
      payload: p,
    });
    if (!persisted.ok) throw new Error(persisted.message);
    const evidence = {
      evidenceId: executionReviewVerificationEvidenceIdForAttempt(p.attemptId),
      status: "verified",
      sourceKind: "execution_attempt",
      provenance: { source: "execution_adapter" },
      digest: persisted.digest,
      location: persisted.absolutePath,
      bindings: {
        executionAttemptId: p.attemptId,
        executionContractId: p.executionContractId,
      },
    };
    return evidence as never;
  }

  const attempt = {
    attemptId: "att:v",
    executionContractId: "ec:v",
    status: "succeeded",
  } as never;

  it("ids / guards / ER keys", () => {
    const id = executionReviewVerificationEvidenceIdForAttempt("xat:abc");
    expect(id.startsWith("ev:execution-review:")).toBe(true);
    expect(isExecutionReviewVerificationEvidenceId(id)).toBe(true);
    expect(isExecutionReviewVerificationEvidenceId("ev:mission-result:x")).toBe(
      false,
    );
    expect(isExecutionReviewVerificationPayload(payload())).toBe(true);
    expect(isExecutionReviewVerificationPayload({ schemaVersion: "x" })).toBe(
      false,
    );
    // Payload digest is deterministic and content-sensitive.
    expect(digestExecutionReviewVerificationPayload(payload())).toBe(
      digestExecutionReviewVerificationPayload(payload()),
    );
    expect(digestExecutionReviewVerificationPayload(payload())).not.toBe(
      digestExecutionReviewVerificationPayload(
        payload({ claimFactMismatch: true }),
      ),
    );
  });

  it("missionResultContractResultSemantic requires verification for studio-verified-changeset ER only", () => {
    const mat = (ers: string[]) =>
      ({ evidenceRequirements: ers }) as never;
    expect(
      missionRequiresStudioVerification(
        mat([EXECUTION_REVIEW_VERIFICATION_ER_KEY]),
      ),
    ).toBe(true);
    // Historical local-write ER alone must NOT force verification (compat).
    expect(missionRequiresStudioVerification(mat(["evreq:local-write"]))).toBe(
      false,
    );
    expect(
      missionRequiresStudioVerification(
        mat(["evreq:mission-result-for-nora-reevaluation"]),
      ),
    ).toBe(false);
    expect(missionRequiresStudioVerification(mat([]))).toBe(false);
  });

  it("verification facts hold ONLY for OBSERVED + no CLAIM/FACT mismatch + intact digest", () => {
    const refs = tmpRoot("vev");
    expect(
      verificationEvidenceFactsHold({
        attempt,
        evidence: evidenceFor(refs, payload()),
      }),
    ).toBe(true);
    expect(
      verificationEvidenceFactsHold({
        attempt,
        evidence: evidenceFor(
          tmpRoot("vev-mm"),
          payload({ claimFactMismatch: true, unclaimedObservedPaths: ["b.md"] }),
        ),
      }),
    ).toBe(false);
    expect(
      verificationEvidenceFactsHold({
        attempt,
        evidence: evidenceFor(
          tmpRoot("vev-un"),
          payload({ verificationStatus: "UNAVAILABLE", verifiedChangeSetDigest: null }),
        ),
      }),
    ).toBe(false);

    // Tamper after digest ⇒ refused.
    const tamperRefs = tmpRoot("vev-tamper");
    const ev = evidenceFor(tamperRefs, payload()) as unknown as {
      location: string;
    };
    fs.writeFileSync(
      ev.location,
      `${JSON.stringify(payload({ claimFactMismatch: false, observedPathCount: 99 }))}\n`,
    );
    expect(
      verificationEvidenceFactsHold({ attempt, evidence: ev as never }),
    ).toBe(false);

    // Attempt not succeeded ⇒ refused.
    expect(
      verificationEvidenceFactsHold({
        attempt: { ...(attempt as object), status: "failed" } as never,
        evidence: evidenceFor(tmpRoot("vev-fail"), payload()),
      }),
    ).toBe(false);
  });
});

describe("CP2-07 — shared bound reader security (Nora tool + Pilot action primitive)", () => {
  function seed(label: string) {
    const refs = tmpRoot(`sec-${label}`);
    const attemptId = `att:sec-${label}`;
    const report = baseReport(attemptId, `ec:sec-${label}`);
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot: refs,
      projectId: "prj:sec",
      executionContractId: `ec:sec-${label}`,
      attemptId,
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      reviewItems: [
        { kind: "log", label: "note", text: "hello secure review", summary: "log" },
        { kind: "other", label: "no-content", summary: "no bytes" },
      ],
    });
    if (!persisted.ok) throw new Error(persisted.message);
    return {
      refs,
      attemptId,
      itemId: persisted.manifest.reviewItems[0]!.itemId,
      emptyItemId: persisted.manifest.reviewItems[1]!.itemId,
    };
  }

  it("project + attempt + itemId bound ⇒ ok; content only through server-owned contentRef", () => {
    const s = seed("ok");
    const r = readBoundExecutionReviewItem({
      projectId: "prj:sec",
      attemptId: s.attemptId,
      itemId: s.itemId,
      refsRoot: s.refs,
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.content).toContain("hello secure review");
    expect(r.completeness).toBe("FULL");
    const none = readBoundExecutionReviewItem({
      projectId: "prj:sec",
      attemptId: s.attemptId,
      itemId: s.emptyItemId,
      refsRoot: s.refs,
    });
    expect(none.ok && none.content).toBeNull();
    expect(none.ok && none.completeness).toBe("PARTIAL");
  });

  it("project mismatch / unknown attempt / unknown item ⇒ fail-closed with distinct codes", () => {
    const s = seed("deny");
    const code = (input: { projectId: string; attemptId: string; itemId: string }) => {
      const r = readBoundExecutionReviewItem({ ...input, refsRoot: s.refs });
      return r.ok ? "OK" : r.code;
    };
    expect(
      code({ projectId: "prj:OTHER", attemptId: s.attemptId, itemId: s.itemId }),
    ).toBe("EXECUTION_REVIEW_PROJECT_MISMATCH");
    expect(
      code({ projectId: "prj:sec", attemptId: "att:unknown", itemId: s.itemId }),
    ).toBe("EXECUTION_REVIEW_MATERIAL_MISSING");
    expect(
      code({ projectId: "prj:sec", attemptId: s.attemptId, itemId: "ri:999" }),
    ).toBe("EXECUTION_REVIEW_ITEM_NOT_FOUND");
    expect(code({ projectId: "", attemptId: s.attemptId, itemId: s.itemId })).toBe(
      "EXECUTION_REVIEW_BINDING_REQUIRED",
    );
    expect(code({ projectId: "prj:sec", attemptId: s.attemptId, itemId: " " })).toBe(
      "EXECUTION_REVIEW_BINDING_REQUIRED",
    );
  });

  it("path-like / injection itemIds are rejected before any filesystem access", () => {
    const s = seed("inject");
    for (const itemId of [
      "../../etc/passwd",
      "..",
      "a/b",
      "a\\b",
      "ri:001/../ri:002",
      "ri:001\0",
      "/abs/path",
    ]) {
      const r = readBoundExecutionReviewItem({
        projectId: "prj:sec",
        attemptId: s.attemptId,
        itemId,
        refsRoot: s.refs,
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.code).toBe("EXECUTION_REVIEW_ITEM_ID_INVALID");
    }
  });

  it("tampered manifest contentRef escaping execution-review/items is denied", () => {
    const s = seed("tamper");
    const rel = genericExecutionReviewMaterialRefsRelative(s.attemptId);
    const manifestPath = path.join(s.refs, rel.manifest);
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as {
      reviewItems: { itemId: string; contentRef?: string }[];
    };
    fs.writeFileSync(path.join(s.refs, "secret.txt"), "TOP-SECRET");
    manifest.reviewItems[0]!.contentRef = "../../../../secret.txt";
    fs.writeFileSync(manifestPath, JSON.stringify(manifest));
    const r = readBoundExecutionReviewItem({
      projectId: "prj:sec",
      attemptId: s.attemptId,
      itemId: s.itemId,
      refsRoot: s.refs,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("EXECUTION_REVIEW_ITEM_REF_DENIED");
    // Absolute ref too.
    manifest.reviewItems[0]!.contentRef = path.join(s.refs, "secret.txt");
    fs.writeFileSync(manifestPath, JSON.stringify(manifest));
    const abs = readBoundExecutionReviewItem({
      projectId: "prj:sec",
      attemptId: s.attemptId,
      itemId: s.itemId,
      refsRoot: s.refs,
    });
    expect(abs.ok).toBe(false);
  });

  it("Nora tool read_item and the shared reader return identical verdicts (single primitive)", async () => {
    const s = seed("tool");
    const { RunContext } = await import("@openai/agents");
    const tools = createExecutionReviewAgentsTools({
      projectId: "prj:sec",
      attemptId: s.attemptId,
      refsRoot: s.refs,
    });
    const ctx = new RunContext({});
    for (const itemId of [s.itemId, "ri:999", "../x"]) {
      const viaTool = JSON.parse(
        String(await tools[1]!.invoke(ctx, JSON.stringify({ itemId }))),
      ) as { ok: boolean; code?: string };
      const viaReader = readBoundExecutionReviewItem({
        projectId: "prj:sec",
        attemptId: s.attemptId,
        itemId,
        refsRoot: s.refs,
      });
      expect(viaTool.ok).toBe(viaReader.ok);
      if (!viaReader.ok) expect(viaTool.code).toBe(viaReader.code);
    }
    const foreign = createExecutionReviewAgentsTools({
      projectId: "prj:OTHER",
      attemptId: s.attemptId,
      refsRoot: s.refs,
    });
    const denied = JSON.parse(
      String(
        await foreign[1]!.invoke(ctx, JSON.stringify({ itemId: s.itemId })),
      ),
    ) as { ok: boolean; code?: string };
    expect(denied.ok).toBe(false);
    expect(denied.code).toBe("EXECUTION_REVIEW_PROJECT_MISMATCH");
  });
});

describe("CP2-08 — reconcile continue policy: no 120 abandonment", () => {
  it("backoff is positive, non-decreasing, capped — and defined for arbitrarily large attempt indices", () => {
    let prev = 0;
    for (let i = 1; i <= 2000; i++) {
      const d = nextReconcileContinueDelayMs(i);
      expect(d).toBeGreaterThan(0);
      expect(d).toBeLessThanOrEqual(RECONCILE_CONTINUE_BACKOFF_MAX_MS);
      expect(d).toBeGreaterThanOrEqual(prev);
      prev = d;
    }
    expect(nextReconcileContinueDelayMs(0)).toBeGreaterThan(0);
    expect(nextReconcileContinueDelayMs(120)).toBe(
      RECONCILE_CONTINUE_BACKOFF_MAX_MS,
    );
    expect(nextReconcileContinueDelayMs(121)).toBe(
      RECONCILE_CONTINUE_BACKOFF_MAX_MS,
    );
  });

  it("continue predicate depends only on durable projection — never on a counter", () => {
    expect(shouldContinueReconcileNominally(null)).toBe(false);
    expect(shouldContinueReconcileNominally(undefined)).toBe(false);
    expect(
      shouldContinueReconcileNominally({ stage: "RUNNING", recoveryRequired: true }),
    ).toBe(false);
    for (const next of ["AWAIT_EXTERNAL", "MATERIALIZE_PRODUCT", "RUN_POST_EVIDENCE"]) {
      expect(
        shouldContinueReconcileNominally({
          stage: "SOMETHING_ELSE",
          nextDeterministicAction: next,
        }),
      ).toBe(true);
    }
    expect(
      shouldContinueReconcileNominally({
        stage: "POST_EVIDENCE_COMPLETE",
        nextDeterministicAction: "HUMAN_DECISION_REQUIRED",
      }),
    ).toBe(false);
  });

  it("TrajectorySurface no longer embeds the legacy bounded poll loop or a 120 total budget", () => {
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/for\s*\(\s*let i = 0;\s*i < 8;/);
    expect(src).not.toMatch(/(MAX|BUDGET)[A-Z_]*\s*=\s*120\b/);
    expect(src).toMatch(/reconcileContinuePolicy/);
    expect(src).toMatch(/nextReconcileContinueDelayMs/);
    expect(src).toMatch(/shouldAutoResumeReconcileOnRemount/);
  });
});
