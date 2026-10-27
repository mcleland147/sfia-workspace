/**
 * AKG-M5 L3-S2 Option B — Lot A (generic FS materialization) + Lot C (report surface)
 * DET proofs at tested scope.
 *
 * NON-CLAIMS:
 * - chat-first Generic PREPARE null-cycle Mission Evidence (S8 residual)
 * - FS→Git→Review COMPLETE E2E
 * - REAL Cursor / OpenAI LIVE / F19 COMPLETE
 *
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  ingestGenericFilesystemMaterializationArtifactEvidence,
  selectPrimaryGenericMaterializationPath,
} from "@/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence";
import {
  genericExecutionReviewMaterialRefsRelative,
  persistGenericExecutionReviewMaterial,
} from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { projectW3cExecutionReportSurfaceFromDurable } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { isFsAnchorSupersededByVerifiedLocalCommit } from "@/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation";
import {
  GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE,
  evidenceLocationMatchesLogicalPath,
} from "@/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources";
import {
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
} from "@/lib/oa/execution-attempt";
import { M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID } from "@/lib/oa/execution-attempt/domain/realLaunchSafety";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

const tmpRoots: string[] = [];

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
  delete process.env.SFIA_STUDIO_CURSOR_REAL;
});

afterEach(() => {
  cleanupW2TempDirs();
  for (const root of tmpRoots.splice(0)) {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

describe("AKG-M5 L3-S2 CORR-S2-01 — strict Evidence path matching", () => {
  const req = "docs/note.md";

  it("positives: exact logical + durable marker layouts", () => {
    expect(evidenceLocationMatchesLogicalPath(req, req)).toBe(true);
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/${req}`,
        req,
      ),
    ).toBe(true);
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/docs-write-artifact/${req}`,
        req,
      ),
    ).toBe(true);
    expect(
      evidenceLocationMatchesLogicalPath(`/var/data/${req}`, req),
    ).toBe(true);
  });

  it("negatives: prefix/suffix segment collisions must not match", () => {
    expect(evidenceLocationMatchesLogicalPath("xdocs/note.md", req)).toBe(
      false,
    );
    expect(evidenceLocationMatchesLogicalPath("autresdocs/note.md", req)).toBe(
      false,
    );
    expect(evidenceLocationMatchesLogicalPath("docs/note.md.bak", req)).toBe(
      false,
    );
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/x${req}`,
        req,
      ),
    ).toBe(false);
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/${req}.bak`,
        req,
      ),
    ).toBe(false);
    expect(evidenceLocationMatchesLogicalPath("../docs/note.md", req)).toBe(
      false,
    );
    expect(evidenceLocationMatchesLogicalPath(req, "../docs/note.md")).toBe(
      false,
    );
  });
});

describe("AKG-M5 L3-S2 Option B — Lot A path selection", () => {
  it("EP-S2-04 selectPrimary prefers unique preferred path", () => {
    expect(
      selectPrimaryGenericMaterializationPath({
        observedPaths: ["docs/a.md", "docs/b.md"],
        preferredPaths: ["docs/b.md"],
      }),
    ).toEqual({ ok: true, logicalPath: "docs/b.md" });
  });

  it("EP-S2-09 ambiguous multi-path without preferred → fail-closed", () => {
    const r = selectPrimaryGenericMaterializationPath({
      observedPaths: ["docs/a.md", "docs/b.md"],
      preferredPaths: [],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("AMBIGUOUS");
  });

  it("EP-S2-10 source token is generic_materialization (not docs_write)", () => {
    expect(GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE).toBe(
      "execution_attempt:generic_materialization",
    );
    expect(GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE.includes("docs_write")).toBe(
      false,
    );
  });
});

describe("AKG-M5 L3-S2 CORR-S2-02 — distinct preferred path selection", () => {
  it("A: same path in targetPath + expectedOutputs → unique selection", () => {
    expect(
      selectPrimaryGenericMaterializationPath({
        observedPaths: ["docs/note.md"],
        preferredPaths: ["docs/note.md", "docs/note.md"],
      }),
    ).toEqual({ ok: true, logicalPath: "docs/note.md" });
  });

  it("B: two distinct preferred+observed paths → AMBIGUOUS", () => {
    const r = selectPrimaryGenericMaterializationPath({
      observedPaths: ["docs/a.md", "docs/b.md"],
      preferredPaths: ["docs/a.md", "docs/b.md"],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("AMBIGUOUS");
  });

  it("C: no observed path → NONE", () => {
    const r = selectPrimaryGenericMaterializationPath({
      observedPaths: [],
      preferredPaths: ["docs/note.md"],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("NONE");
  });

  it("D: single observed without preferred → select that path", () => {
    expect(
      selectPrimaryGenericMaterializationPath({
        observedPaths: ["docs/solo.md"],
        preferredPaths: [],
      }),
    ).toEqual({ ok: true, logicalPath: "docs/solo.md" });
  });

  it("E: malformed preferred paths ignored; honest NONE/AMBIGUOUS", () => {
    const none = selectPrimaryGenericMaterializationPath({
      observedPaths: ["../evil.md", "docs/ok.md"],
      preferredPaths: ["../evil.md"],
    });
    // malformed preferred dropped; single valid observed remains → select
    expect(none).toEqual({ ok: true, logicalPath: "docs/ok.md" });
    const badOnly = selectPrimaryGenericMaterializationPath({
      observedPaths: ["../evil.md"],
      preferredPaths: ["../evil.md"],
    });
    expect(badOnly.ok).toBe(false);
    if (!badOnly.ok) expect(badOnly.code).toBe("NONE");
  });
});

describe("AKG-M5 L3-S2 Option B — Lot C durable report surface", () => {
  it("EP-S2-08 projects PARTIAL surface from GERM without inventing Cursor report", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-germ-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-surface";
    const report = {
      schemaVersion: "oa.cursor-execution-report.1" as const,
      reportId: "rpt:l3s2",
      attemptId,
      executionContractId: "xct:l3s2",
      repositoryRef: "repo:test",
      baseSha: "abc123",
      status: "succeeded" as const,
      workPerformed: ["edited docs/note.md"],
      authorizedEffectsExecuted: ["filesystem.modify" as const],
      blockers: ["example-blocker"],
      reservations: ["example-reservation"],
    };
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: report,
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "modified: docs/note.md",
          text: "# note\n",
          summary: "sha256:deadbeef",
        },
      ],
      completeness: "PARTIAL",
      blockers: ["VERIFICATION_UNAVAILABLE — worktree observation not performed"],
      reservations: ["Studio VerifiedChangeSet not available — FACTS incomplete"],
    });
    expect(persisted.ok).toBe(true);

    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.executionReport).not.toBeNull();
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.blockersSummary).toContain("VERIFICATION_UNAVAILABLE");
    expect(surface.artifactReviewMaterial).toContain("# note");
  });

  it("EP-S2-08 missing GERM → null report (no invented Cursor claim)", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-empty-"));
    tmpRoots.push(refsRoot);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId: "xat:missing",
      refsRoot,
    });
    expect(surface.executionReport).toBeNull();
    expect(surface.artifactReviewMaterial).toBeUndefined();
    expect(surface.artifactReviewCompleteness).toBeUndefined();
  });
});

describe("AKG-M5 L3-S2 CORR-S2-03 — FULL/PARTIAL honesty on truncated bytes", () => {
  const baseReport = (attemptId: string) => ({
    schemaVersion: "oa.cursor-execution-report.1" as const,
    reportId: "rpt:l3s2-corr03",
    attemptId,
    executionContractId: "xct:l3s2",
    repositoryRef: "repo:test",
    baseSha: "abc123",
    status: "succeeded" as const,
    workPerformed: ["edited docs/note.md"],
    authorizedEffectsExecuted: ["filesystem.modify" as const],
    blockers: ["keep-blocker"],
    reservations: ["keep-reservation"],
  });

  it("A: manifest FULL + content truncated by byteCap → PARTIAL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-trunc-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-trunc";
    const big = "X".repeat(13_000);
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(attemptId),
      reviewEndOf: null,
      verifiedChangeSet: {
        schemaVersion: "oa.studio-verified-changeset.1",
        worktreePath: "<disposed-or-ephemeral>",
        claimFactMismatch: false,
        unclaimedObservedPaths: [],
        claimedMissingPaths: [],
        all: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        created: [],
        modified: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        deleted: [],
        renamed: [],
      } as never,
      verificationStatus: "OBSERVED",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "modified: docs/note.md",
          text: big,
          summary: "sha256:big",
        },
      ],
      completeness: "FULL",
      blockers: [],
      reservations: [],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.artifactReviewMaterial?.length).toBeLessThanOrEqual(12_000);
  });

  it("B: manifest PARTIAL + short content → stays PARTIAL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-partial-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-partial";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(attemptId),
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "file",
          text: "short",
        },
      ],
      completeness: "PARTIAL",
      blockers: ["keep-blocker"],
      reservations: ["keep-reservation"],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.blockersSummary).toContain("keep-blocker");
  });

  it("C: manifest FULL + short complete content → FULL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-full-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-full";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(attemptId),
      reviewEndOf: {
        schemaVersion: "oa.cursor-review-end-of.1" as const,
        attemptId,
        executionContractId: "xct:l3s2",
        status: "approved" as const,
        summary: "ok",
      } as never,
      verifiedChangeSet: {
        schemaVersion: "oa.studio-verified-changeset.1",
        worktreePath: "<disposed-or-ephemeral>",
        claimFactMismatch: false,
        unclaimedObservedPaths: [],
        claimedMissingPaths: [],
        all: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        created: [],
        modified: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        deleted: [],
        renamed: [],
      } as never,
      verificationStatus: "OBSERVED",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "file",
          text: "short-complete",
        },
      ],
      completeness: "FULL",
      blockers: [],
      reservations: [],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("FULL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("FULL");
  });

  it("E: Cursor CLAIM absent → executionReport null (material may still be PARTIAL)", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-noclaim-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-noclaim";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: null,
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "file",
          text: "material-only",
        },
      ],
      completeness: "PARTIAL",
      blockers: ["no-claim"],
      reservations: [],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.executionReport).toBeNull();
    expect(surface.artifactReviewMaterial).toContain("material-only");
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
  });
});

describe("AKG-M5 L3-S2 R-S2-04 — missing/unreadable expected content honesty", () => {
  const baseReport = (attemptId: string) => ({
    schemaVersion: "oa.cursor-execution-report.1" as const,
    reportId: "rpt:l3s2-rs204",
    attemptId,
    executionContractId: "xct:l3s2",
    repositoryRef: "repo:test",
    baseSha: "abc123",
    status: "succeeded" as const,
    workPerformed: ["edited docs/note.md"],
    authorizedEffectsExecuted: ["filesystem.modify" as const],
    blockers: ["keep-blocker"],
    reservations: ["keep-reservation"],
  });

  function persistFullWithItem(input: {
    refsRoot: string;
    attemptId: string;
    text: string;
  }) {
    return persistGenericExecutionReviewMaterial({
      refsRoot: input.refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId: input.attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(input.attemptId),
      reviewEndOf: null,
      verifiedChangeSet: {
        schemaVersion: "oa.studio-verified-changeset.1",
        worktreePath: "<disposed-or-ephemeral>",
        claimFactMismatch: false,
        unclaimedObservedPaths: [],
        claimedMissingPaths: [],
        all: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        created: [],
        modified: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        deleted: [],
        renamed: [],
      } as never,
      verificationStatus: "OBSERVED",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "file",
          text: input.text,
        },
      ],
      completeness: "FULL",
      blockers: ["keep-blocker"],
      reservations: ["keep-reservation"],
    });
  }

  it("T1: manifest FULL + complete short content → FULL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t1-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t1";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "complete" }).ok).toBe(
      true,
    );
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewMaterial).toBe("complete");
    expect(surface.artifactReviewCompleteness).toBe("FULL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("FULL");
  });

  it("T2: manifest FULL + content > 12_000 bytes → PARTIAL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t2-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t2";
    expect(
      persistFullWithItem({
        refsRoot,
        attemptId,
        text: "Y".repeat(13_000),
      }).ok,
    ).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
  });

  it("T3: manifest PARTIAL + short content → PARTIAL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t3-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t3";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(attemptId),
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        { kind: "file", logicalPath: "docs/note.md", label: "file", text: "short" },
      ],
      completeness: "PARTIAL",
      blockers: ["keep-blocker"],
      reservations: ["keep-reservation"],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
  });

  it("T4: manifest FULL + contentRef + missing file → never FULL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t4-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t4";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "will-delete" }).ok).toBe(
      true,
    );
    const rel = genericExecutionReviewMaterialRefsRelative(attemptId);
    const itemPath = path.join(refsRoot, rel.itemsDir, "ri:001.bin");
    expect(fs.existsSync(itemPath)).toBe(true);
    fs.unlinkSync(itemPath);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewMaterial).toBeUndefined();
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.blockersSummary).toContain("EXECUTION_REVIEW_ITEM_MISSING");
    expect(surface.blockersSummary).toContain("keep-blocker");
    expect(surface.executionReport?.reservationsSummary).toContain(
      "keep-reservation",
    );
    expect(surface.executionReport?.reservationsSummary).toContain(
      "EXECUTION_REVIEW_ITEM_MISSING",
    );
  });

  it("T5: manifest FULL + invalid contentRef → fail-closed never fictional FULL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t5-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t5";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "ok" }).ok).toBe(true);
    const rel = genericExecutionReviewMaterialRefsRelative(attemptId);
    const manifestAbs = path.join(refsRoot, rel.manifest);
    const manifest = JSON.parse(fs.readFileSync(manifestAbs, "utf8")) as {
      reviewItems: Array<{ contentRef?: string }>;
      completeness: string;
    };
    expect(manifest.completeness).toBe("FULL");
    manifest.reviewItems[0]!.contentRef = "../evil.bin";
    fs.writeFileSync(manifestAbs, `${JSON.stringify(manifest)}\n`, "utf8");
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewMaterial).toBeUndefined();
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.blockersSummary).toContain("EXECUTION_REVIEW_ITEM_REF_DENIED");
  });

  it("T6: GERM absent → no invented report", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t6-"));
    tmpRoots.push(refsRoot);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId: "xat:rs204-missing",
      refsRoot,
    });
    expect(surface.executionReport).toBeNull();
    expect(surface.artifactReviewCompleteness).toBeUndefined();
    expect(surface.artifactReviewMaterial).toBeUndefined();
  });

  it("T7: Cursor CLAIM absent → executionReport null", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t7-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t7";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: null,
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        { kind: "file", logicalPath: "docs/note.md", label: "file", text: "x" },
      ],
      completeness: "PARTIAL",
      blockers: [],
      reservations: [],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.executionReport).toBeNull();
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
  });

  it("T8: blockers / reservations / workPerformed preserved when present", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t8-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t8";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "body" }).ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.blockersSummary).toContain("keep-blocker");
    expect(surface.executionReport?.reservationsSummary).toContain(
      "keep-reservation",
    );
    expect(surface.workPerformedSummary).toContain("edited docs/note.md");
  });

  it("T9: fresh projection == re-read at equal durable facts", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t9-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t9";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "stable" }).ok).toBe(
      true,
    );
    const a = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    const b = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(b).toEqual(a);
  });

  it("T10: projection is pure — no HumanDecision / new execution side effects", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t10-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t10";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "pure" }).ok).toBe(true);
    const before = walkSnapshot(refsRoot);
    projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    const after = walkSnapshot(refsRoot);
    expect(after).toEqual(before);
  });
});

function walkSnapshot(root: string): string[] {
  const out: string[] = [];
  const walk = (dir: string) => {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(abs);
      else {
        const st = fs.statSync(abs);
        out.push(`${path.relative(root, abs)}:${st.size}:${st.mtimeMs}`);
      }
    }
  };
  walk(root);
  return out.sort();
}

describe("AKG-M5 L3-S2 Option B — Lot A ingest + FS→SHA supersession", () => {
  it("EP-S2-03/04 stamps verified generic_materialization Evidence for supersession", async () => {
    const db = tempProductDbPath("l3s2-mat.sqlite");
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: "l3s2m",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "mat" });
    const oa = runtime.oa!;
    expect(oa.evidenceReviewServices).toBeTruthy();
    const refsRoot = path.join(path.dirname(db), "mission-result-refs");
    fs.mkdirSync(refsRoot, { recursive: true });

    const bytes = Buffer.from("# hello\n", "utf8");
    const digest = `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
    const stamped = await ingestGenericFilesystemMaterializationArtifactEvidence({
      evidenceReviewServices: oa.evidenceReviewServices!,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      executionContractId: "xct:l3s2-mat",
      executionAttemptId: "xat:a",
      logicalPath: "docs/note.md",
      artifactBytes: bytes,
      digest,
      refsRoot,
    });
    expect(stamped.ok).toBe(true);
    if (!stamped.ok) return;
    expect(stamped.evidenceStatus).toBe("verified");

    const loaded = await oa.evidenceReviewServices!.evidenceReader.findById(
      stamped.evidenceId,
    );
    expect(loaded).toBeTruthy();
    expect(loaded!.source).toBe(GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE);
    expect(loaded!.status).toBe("verified");
    expect(loaded!.type).toBe("artifact");

    const now = "2026-10-26T00:00:00.000Z";
    const attempts: ExecutionAttempt[] = [
      {
        schemaVersion: "0.2.0-oa",
        attemptId: "xat:a",
        executionContractId: "xct:l3s2-mat",
        executionContractVersion: 1,
        selectedAgentRef: STUDIO_CURSOR_GENERALIST_AGENT_ID,
        status: "succeeded",
        idempotencyKey: "idem:a",
        correlationId: "cor:a",
        version: 1,
        createdAt: now,
        launchedAt: now,
        startedAt: now,
        completedAt: now,
        resultRef: "res:a",
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: "prv:a",
          actor: { actorId: "actor:test", role: "system" },
          source: "system",
          timestamp: now,
          correlationId: "cor:a",
        },
      },
      {
        schemaVersion: "0.2.0-oa",
        attemptId: "xat:b",
        executionContractId: "xct:l3s2-mat",
        executionContractVersion: 1,
        selectedAgentRef: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
        status: "succeeded",
        idempotencyKey: "idem:b",
        correlationId: "cor:b",
        version: 1,
        createdAt: now,
        launchedAt: now,
        startedAt: now,
        completedAt: now,
        resultRef: "res:b",
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: "prv:b",
          actor: { actorId: "actor:test", role: "system" },
          source: "system",
          timestamp: now,
          correlationId: "cor:b",
        },
      },
    ];
    const commitEv = {
      ...loaded!,
      evidenceId: "ev:commit",
      type: "other" as const,
      source: "git:local_commit",
      location: `git:local_commit?repo=${encodeURIComponent("repo:test")}&commitSha=deadbeef&parentSha=base001&path=${encodeURIComponent("docs/note.md")}`,
      bindings: {
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: "xct:l3s2-mat",
        executionAttemptId: "xat:b",
      },
    } as Evidence;

    expect(
      isFsAnchorSupersededByVerifiedLocalCommit({
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: "xct:l3s2-mat",
        priorAttemptId: "xat:a",
        expectedParentSha: "base001",
        repositoryRef: "repo:test",
        requiredPaths: ["docs/note.md"],
        attempts,
        evidence: [loaded!, commitEv],
      }),
    ).toBe(true);
  });
});
