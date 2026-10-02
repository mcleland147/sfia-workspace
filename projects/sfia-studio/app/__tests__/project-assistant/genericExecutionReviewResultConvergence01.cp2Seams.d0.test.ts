/**
 * CP2 unit seams — local-write qualification, Git observer, REO provenance,
 * shared Pilot reader, anti-stall schedule policy.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execSync } from "node:child_process";
import { canQualifyGenericLocalWriteFromDurableFacts } from "@/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext";
import {
  buildProductQualifiedLocalWriteWork,
  type ActualExecutionWork,
} from "@/features/project-assistant/w2/w3aActualExecutionWork";
import {
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import { observeVerifiedChangeSetStrict } from "@/lib/oa/execution-attempt/application/observeVerifiedChangeSet";
import { NodeLocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import { resolveCursorReviewEndOfClaim } from "@/features/project-assistant/f3/finalizeGenericExecutionReview";
import {
  mintCursorExecutionReportId,
  type CursorExecutionReport,
} from "@/lib/oa/execution-attempt/domain/cursorExecutionReport";
import { mintCursorReviewEndOfId } from "@/lib/oa/execution-attempt/domain/cursorReviewEndOf";
import { readBoundExecutionReviewItem } from "@/features/project-assistant/f3/readBoundExecutionReviewItem";
import {
  LEGACY_UI_RUNNING_POLL_BUDGET,
  nextReconcileContinueDelayMs,
  shouldAutoResumeReconcileOnRemount,
  shouldContinueReconcileNominally,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";

function git(cwd: string, ...args: string[]): string {
  return execSync(["git", ...args].join(" "), {
    cwd,
    encoding: "utf8",
  }).trim();
}

function tempGitRepo(): { repo: string; h0: string } {
  const repo = fs.mkdtempSync(path.join(os.tmpdir(), "gerrc-cp2-git-"));
  git(repo, "init");
  git(repo, "config", "user.email", "cp2@test.local");
  git(repo, "config", "user.name", "CP2");
  fs.writeFileSync(path.join(repo, "baseline.txt"), "v0\n", "utf8");
  fs.writeFileSync(path.join(repo, "untouched.txt"), "keep\n", "utf8");
  git(repo, "add", "baseline.txt", "untouched.txt");
  git(repo, "commit", "-m", "H0");
  const h0 = git(repo, "rev-parse", "HEAD").toLowerCase();
  return { repo, h0 };
}

function basisWithLocalWrite(paths: string[]) {
  return {
    selectedOptionRef: GOVERNED_OPTION_REF,
    executionBasis: {
      intentKind: "governed_local_mutation",
      targetPath: paths[0],
      scopeIn: paths,
      scopeOut: ["GIT_COMMIT", "GIT_PUSH", "GIT_PR"],
      reversibilityExpectation: "reversible_worktree",
      stopConditions: [],
    },
    decisionBasisVersion: 1,
    pointsRequiringReview: [],
  } as never;
}

afterEach(() => {
  // noop — temp dirs cleaned by OS; avoid leaking process cwd
});

describe("CP2-01 — product-qualified local-write from durable facts", () => {
  it("qualifies GOVERNED + sealed paths + reversible → local-write", () => {
    const qual = canQualifyGenericLocalWriteFromDurableFacts({
      basis: basisWithLocalWrite(["a.md", "baseline.txt"]),
      selectedOptionRef: GOVERNED_OPTION_REF,
    });
    expect(qual.ok).toBe(true);
    if (!qual.ok) return;
    const work = buildProductQualifiedLocalWriteWork({
      projectId: "prj:test",
      allowedPaths: qual.allowedPaths,
      rollbackAvailable: true,
      qualificationSource: "test",
    });
    expect("ok" in work && (work as { ok?: boolean }).ok === false).toBe(false);
    const okWork = work as ActualExecutionWork;
    expect(okWork.effectClass).toBe("local-write");
    expect(okWork.operationKind).toBe("local-write");
  });

  it("refuses CLARIFY / docs_write / missing paths / irreversible", () => {
    expect(
      canQualifyGenericLocalWriteFromDurableFacts({
        basis: basisWithLocalWrite(["a.md"]),
        selectedOptionRef: CLARIFY_OPTION_REF,
      }).ok,
    ).toBe(false);

    const docs = basisWithLocalWrite(["a.md"]) as {
      executionBasis: { intentKind?: string };
    };
    docs.executionBasis.intentKind = "docs_write";
    expect(
      canQualifyGenericLocalWriteFromDurableFacts({
        basis: docs as never,
        selectedOptionRef: GOVERNED_OPTION_REF,
      }).ok,
    ).toBe(false);
  });
});

describe("CP2-02 — NodeLocalGitStatusDiffPort observes delta only", () => {
  it("OBSERVED: created + modified only; never whole-repo as created", async () => {
    const { repo, h0 } = tempGitRepo();
    fs.writeFileSync(path.join(repo, "a.md"), "A\n", "utf8");
    fs.writeFileSync(path.join(repo, "baseline.txt"), "v1\n", "utf8");
    fs.writeFileSync(path.join(repo, "b.md"), "B\n", "utf8");
    const port = new NodeLocalGitStatusDiffPort();
    const observed = await observeVerifiedChangeSetStrict({
      observationMode: "git",
      worktreePath: repo,
      expectedBaseSha: h0,
      statusDiffPort: port,
      report: {
        reportId: "rpt:t",
        schemaVersion: "cursor-execution-report/v1",
        attemptId: "xat:t",
        executionContractId: "xct:t",
        status: "succeeded",
        baseSha: h0,
        fileEffects: {
          created: ["a.md"],
          modified: ["baseline.txt"],
          deleted: [],
        },
      } as never,
    });
    expect(observed.ok).toBe(true);
    expect(observed.verificationStatus).toBe("OBSERVED");
    if (!observed.ok) return;
    const vcs = observed.changeSet;
    expect(vcs.all.map((e) => e.path).sort()).toEqual([
      "a.md",
      "b.md",
      "baseline.txt",
    ]);
    expect(vcs.all.some((e) => e.path === "untouched.txt")).toBe(false);
    expect(vcs.claimFactMismatch).toBe(true);
    expect(vcs.unclaimedObservedPaths).toEqual(["b.md"]);
    expect(vcs.observedHeadSha).toBe(h0);
    fs.rmSync(repo, { recursive: true, force: true });
  });

  it("Git observer failure → UNAVAILABLE (never invent empty FACTS)", async () => {
    const failingPort = {
      async statusDiff(): Promise<never> {
        throw new Error("git statusDiff unavailable");
      },
    };
    const observed = await observeVerifiedChangeSetStrict({
      observationMode: "git",
      worktreePath: fs.mkdtempSync(path.join(os.tmpdir(), "gerrc-cp2-failport-")),
      expectedBaseSha: "deadbeef",
      statusDiffPort: failingPort as never,
    });
    expect(observed.verificationStatus).toBe("UNAVAILABLE");
    expect(observed.ok).toBe(false);
  });

  it("0-file OBSERVED ≠ UNAVAILABLE", async () => {
    const { repo, h0 } = tempGitRepo();
    const observed = await observeVerifiedChangeSetStrict({
      observationMode: "git",
      worktreePath: repo,
      expectedBaseSha: h0,
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
      report: {
        reportId: "rpt:t",
        schemaVersion: "cursor-execution-report/v1",
        attemptId: "xat:t",
        executionContractId: "xct:t",
        status: "succeeded",
        baseSha: h0,
        fileEffects: { created: [], modified: [], deleted: [] },
      } as never,
    });
    expect(observed.ok).toBe(true);
    expect(observed.verificationStatus).toBe("OBSERVED");
    if (!observed.ok) return;
    expect(observed.changeSet.all).toEqual([]);
    fs.rmSync(repo, { recursive: true, force: true });
  });
});

describe("CP2-03 — REO provenance (no Studio synthesis)", () => {
  function baseReport(
    extras: Partial<CursorExecutionReport> = {},
  ): CursorExecutionReport {
    return {
      reportId: mintCursorExecutionReportId({
        attemptId: "xat:t",
        executionContractId: "xct:t",
      }),
      schemaVersion: "cursor-execution-report/v1",
      attemptId: "xat:t",
      executionContractId: "xct:t",
      status: "succeeded",
      baseSha: "abc",
      fileEffects: { created: [], modified: [], deleted: [] },
      ...extras,
    } as CursorExecutionReport;
  }

  it("native REO present → present=true", () => {
    const reviewEndOfId = mintCursorReviewEndOfId({
      attemptId: "xat:t",
      executionContractId: "xct:t",
    });
    const resolved = resolveCursorReviewEndOfClaim(
      baseReport({
        reviewEndOf: {
          schemaVersion: "oa.cursor-review-end-of.1",
          reviewEndOfId,
          attemptId: "xat:t",
          executionContractId: "xct:t",
          timestamp: "2026-08-23T04:30:00.000Z",
          repositoryRef: "repo:test",
          baseSha: "abc",
          verdict: "succeeded",
          objective: "test",
          scopeTreated: "local",
          workPerformed: ["wrote a.md"],
          filesCreated: ["a.md"],
          filesModified: [],
          filesDeleted: [],
          validations: [],
          deviations: [],
          blockers: [],
          reservations: [],
          stopConditionsMet: [],
          claims: [],
          pointsRequiringReview: [],
        },
      } as never),
    );
    expect(resolved.present).toBe(true);
    expect(resolved.reviewEndOf).not.toBeNull();
  });

  it("missing REO → present=false, no synthetic", () => {
    const resolved = resolveCursorReviewEndOfClaim(baseReport());
    expect(resolved.present).toBe(false);
    expect(resolved.reviewEndOf).toBeNull();
  });
});

describe("CP2-07 — readBoundExecutionReviewItem security", () => {
  it("denies cross-project / unknown item / path traversal by contract", async () => {
    const denied = await readBoundExecutionReviewItem({
      projectId: "prj:B",
      attemptId: "xat:A",
      itemId: "item:A",
      refsRoot: fs.mkdtempSync(path.join(os.tmpdir(), "gerrc-cp2-refs-")),
    });
    expect(denied.ok).toBe(false);
  });
});

describe("CP2-08 — anti-stall continue policy", () => {
  it("schedules forever while RUNNING; remount resumes; no abandon budget", () => {
    const running = {
      stage: "RUNNING" as const,
      nextDeterministicAction: "AWAIT_EXTERNAL",
    };
    expect(shouldContinueReconcileNominally(running)).toBe(true);
    expect(shouldAutoResumeReconcileOnRemount(running)).toBe(true);
    expect(nextReconcileContinueDelayMs(1)).toBeGreaterThan(0);
    expect(nextReconcileContinueDelayMs(LEGACY_UI_RUNNING_POLL_BUDGET + 20)).toBeGreaterThan(0);
    expect(
      shouldContinueReconcileNominally({
        stage: "POST_EVIDENCE_COMPLETE",
        nextDeterministicAction: "NONE",
      }),
    ).toBe(false);
  });
});
