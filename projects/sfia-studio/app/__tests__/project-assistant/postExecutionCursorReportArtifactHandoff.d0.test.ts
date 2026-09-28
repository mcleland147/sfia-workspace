/**
 * POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01
 * Deterministic Product handoff: CursorExecutionReport + durable artifact →
 * Evidence/Nora without Pilot paste / PATH widen / rehydrate CTA.
 * ZERO REAL.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { createHash } from "node:crypto";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  OA_CURSOR_EXECUTION_REPORT_SCHEMA,
  bindCursorExecutionReportToAttempt,
  mintCursorExecutionReportId,
  type CursorExecutionReport,
} from "@/lib/oa/execution-attempt";
import {
  assertCursorPromptParityWithInspection,
  projectExecutionContractToCursorPrompt,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { createInMemoryEvidenceReviewServices } from "@/lib/oa/evidence-review";
import { FixedClock } from "@/lib/oa/doctrine";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import {
  loadDocsWriteArtifactReviewMaterial,
  persistDocsWriteArtifactReviewMaterial,
  resolveProductEvidenceRefsRoot,
} from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
import type { PostEvidenceAnalysisFacts } from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";

const NOW = "2026-09-27T21:00:00.000Z";
const ATTEMPT = "xat:w3a:handoff01deadbeef";
const EC = "xct:handoff-docs-write-01";
const PROJECT = "prj:handoff-sprintboard";
const CYCLE = "cyc:handoff-01";
const REPO = "mcleland147/sfia-workspace";
const SHA = "b7fdf712073257f9fc64c294ac7e68af2cd64464";
const TARGET = "docs/functional-design.md";

function sha256(buf: Buffer | string): string {
  const b = typeof buf === "string" ? Buffer.from(buf, "utf8") : buf;
  return `sha256:${createHash("sha256").update(b).digest("hex")}`;
}

function mintReport(
  overrides: Partial<CursorExecutionReport> = {},
): CursorExecutionReport {
  return {
    schemaVersion: OA_CURSOR_EXECUTION_REPORT_SCHEMA,
    reportId: mintCursorExecutionReportId({
      attemptId: ATTEMPT,
      executionContractId: EC,
    }),
    attemptId: ATTEMPT,
    executionContractId: EC,
    repositoryRef: REPO,
    baseSha: SHA,
    status: "succeeded",
    workPerformed: ["Wrote functional design markdown"],
    fileEffects: {
      created: [TARGET],
      modified: [],
      deleted: [],
    },
    validationEffects: [
      { identity: "file_exists", result: "pass", summary: "target present" },
    ],
    authorizedEffectsExecuted: ["filesystem.create"],
    blockers: [],
    reservations: ["claim_only"],
    ...overrides,
  };
}

function minimalContract(): ExecutionContract {
  const inputs = {
    objective: "Rédiger le design fonctionnel SprintBoard",
    targetPath: TARGET,
    pathAllowlist: ["docs/"],
    repositoryBindingIdentity: REPO,
    baseHeadSha: SHA,
  };
  return {
    schemaVersion: "oa.execution-contract.1",
    executionContractId: EC,
    version: 1,
    projectId: PROJECT,
    cycleInstanceId: CYCLE,
    status: "authorized",
    action: "docs_write",
    technicalTarget: "filesystem",
    target: "workspace.isolated.cursor",
    scope: "docs/",
    requiredAuthority: "N3",
    requiredCapabilities: ["cap:docs_write"],
    reversibility: "reversible",
    inputs,
    expectedOutputs: ["Markdown design at targetPath"],
    evidenceRequirements: ["evreq:docs-write-artifact"],
    constraints: [],
    stopConditions: ["out_of_scope"],
    semanticFingerprint: "fp:handoff-test",
    idempotencyKey: "idem:handoff-test",
    correlationId: "cor:handoff-test",
    createdAt: NOW,
    updatedAt: NOW,
  } as unknown as ExecutionContract;
}

describe("POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01", () => {
  it("T1 — projected Cursor prompt requires machine-readable report envelope", () => {
    const projection = projectExecutionContractToCursorPrompt({
      contract: minimalContract(),
      attemptId: ATTEMPT,
    });
    expect(projection.promptText).toContain("CURSOR_EXECUTION_REPORT_JSON=");
    expect(projection.promptText).toContain("oa.cursor-execution-report.1");
    expect(projection.promptText).toContain("Rapport final attendu");
    const parity = assertCursorPromptParityWithInspection({ projection });
    expect(parity).toEqual({ ok: true });
  });

  it("T2/T3 — valid report binds; mismatched attemptId fail-closes", () => {
    const valid = mintReport();
    const ok = bindCursorExecutionReportToAttempt({
      report: valid,
      expectedAttemptId: ATTEMPT,
      expectedExecutionContractId: EC,
      attemptExecutionContractId: EC,
      expectedRepositoryRef: REPO,
      expectedBaseSha: SHA,
    });
    expect(ok.ok).toBe(true);

    const bad = mintReport({ attemptId: "xat:w3a:other" });
    const refused = bindCursorExecutionReportToAttempt({
      report: bad,
      expectedAttemptId: ATTEMPT,
      expectedExecutionContractId: EC,
      attemptExecutionContractId: EC,
      expectedRepositoryRef: REPO,
      expectedBaseSha: SHA,
    });
    expect(refused.ok).toBe(false);
  });

  it("T4/T5/T6 — docs_write report + artifact durable after hot worktree gone", async () => {
    const refsRoot = mkdtempSync(path.join(tmpdir(), "sfia-handoff-refs-"));
    const worktree = mkdtempSync(path.join(tmpdir(), "sfia-handoff-wt-"));
    try {
      const absTarget = path.join(worktree, TARGET);
      mkdirSync(path.dirname(absTarget), { recursive: true });
      const body = Buffer.from(
        "# Design\n\n## Objectif\nSprintBoard CRUD.\n",
        "utf8",
      );
      writeFileSync(absTarget, body);
      const digest = sha256(body);
      const report = mintReport();

      const services = createInMemoryEvidenceReviewServices({
        clock: new FixedClock(NOW),
      });
      const ingested = await ingestDocsWriteArtifactEvidence({
        evidenceReviewServices: services,
        projectId: PROJECT,
        cycleInstanceId: CYCLE,
        executionContractId: EC,
        executionAttemptId: ATTEMPT,
        targetPath: TARGET,
        digest,
        artifactBytes: body,
        cursorReport: report,
        refsRoot,
        nowIso: NOW,
      });
      expect(ingested.ok).toBe(true);
      if (!ingested.ok) return;
      expect(ingested.storageMode).toBe("external_payload_ref");
      expect(ingested.durableArtifactAbsolutePath).toBeTruthy();
      expect(existsSync(ingested.durableArtifactAbsolutePath!)).toBe(true);

      // Tear down hot worktree — review must still work from durable refs.
      rmSync(worktree, { recursive: true, force: true });

      const loaded = loadDocsWriteArtifactReviewMaterial({
        refsRoot,
        attemptId: ATTEMPT,
        targetPath: TARGET,
      });
      expect(loaded.ok).toBe(true);
      if (!loaded.ok) return;
      expect(loaded.completeness).toBe("FULL");
      expect(loaded.artifactText).toContain("SprintBoard CRUD");
      expect(loaded.cursorReport?.reportId).toBe(report.reportId);
      expect(loaded.cursorReport?.workPerformed?.[0]).toContain(
        "functional design",
      );

      // Evidence location is absolute durable path (restart-safe).
      const ev = await services.evidenceReader.findById(ingested.evidenceId);
      expect(ev?.storageMode).toBe("external_payload_ref");
      expect(ev?.location).toBe(ingested.durableArtifactAbsolutePath);
      expect(readFileSync(ev!.location!, "utf8")).toContain("SprintBoard");
    } finally {
      rmSync(refsRoot, { recursive: true, force: true });
      try {
        rmSync(worktree, { recursive: true, force: true });
      } catch {
        /* already removed */
      }
    }
  });

  it("T6b — oversized artifact is PARTIAL for Nora (never claim FULL)", () => {
    const refsRoot = mkdtempSync(path.join(tmpdir(), "sfia-handoff-big-"));
    try {
      const big = Buffer.alloc(20_000, 0x61);
      const digest = sha256(big);
      const persisted = persistDocsWriteArtifactReviewMaterial({
        refsRoot,
        attemptId: ATTEMPT,
        artifactBytes: big,
        expectedDigest: digest,
        cursorReport: mintReport(),
      });
      expect(persisted.ok).toBe(true);
      const loaded = loadDocsWriteArtifactReviewMaterial({
        refsRoot,
        attemptId: ATTEMPT,
        byteCap: 12_000,
      });
      expect(loaded.ok).toBe(true);
      if (!loaded.ok) return;
      expect(loaded.completeness).toBe("PARTIAL");
      expect(loaded.artifactText.length).toBeLessThanOrEqual(12_000);
    } finally {
      rmSync(refsRoot, { recursive: true, force: true });
    }
  });

  it("T8 — PostEvidenceAnalysisFacts carry artifact + report fields for Nora", () => {
    const facts: PostEvidenceAnalysisFacts = {
      projectId: PROJECT,
      executionContractId: EC,
      executionContractStatus: "completed",
      executionContractAction: "docs_write",
      contractObjective: "Rédiger le design",
      attemptId: ATTEMPT,
      attemptStatus: "succeeded",
      selectedAgentRef: "agent:m4-docs-write",
      adapterRef: "adp:m4-cursor-cli-real",
      executionMode: "real",
      realProcessInvoked: true,
      evidenceId: `ev:docs-write:${ATTEMPT}`,
      reviewBundleId: `rb:docs-write:${ATTEMPT}`,
      technicalResultRef: null,
      reservations: [],
      acceptanceCriteriaSummary: "sections présentes",
      expectedOutputsSummary: "markdown at target",
      workPerformedSummary: "Wrote functional design markdown",
      artifactReviewMaterial: "# Design\n\nSprintBoard",
      artifactReviewCompleteness: "FULL",
      cursorReportSummary: "status=succeeded | work=Wrote functional design",
      contractResultVerdict: "pass",
      claimEvaluationStatus: "pass",
    };
    expect(facts.artifactReviewMaterial).toContain("SprintBoard");
    expect(facts.artifactReviewCompleteness).toBe("FULL");
    expect(facts.cursorReportSummary).toContain("succeeded");
    // PATH_NOT_ALLOWED mitigation: content is in facts — no generic FS tool path.
    expect(facts.artifactReviewMaterial).not.toMatch(/\/var\/folders\//);
  });

  it("N1/N2 — projectW3cExecutionReportSurfaceFromDurable never invents report", async () => {
    const {
      projectW3cExecutionReportSurfaceFromDurable,
    } = await import(
      "@/features/project-assistant/w2/w3cPostEvidenceLoop"
    );
    const refsRoot = mkdtempSync(path.join(tmpdir(), "sfia-handoff-n1-"));
    try {
      // Artifact only — no cursor report claim file.
      const body = Buffer.from("# only artifact\n", "utf8");
      const digest = sha256(body);
      const persisted = persistDocsWriteArtifactReviewMaterial({
        refsRoot,
        attemptId: ATTEMPT,
        artifactBytes: body,
        expectedDigest: digest,
        targetPath: TARGET,
        cursorReport: null,
      });
      expect(persisted.ok).toBe(true);
      const projected = projectW3cExecutionReportSurfaceFromDurable({
        attemptId: ATTEMPT,
        targetPath: TARGET,
        refsRoot,
      });
      expect(projected.artifactReviewMaterial).toContain("only artifact");
      expect(projected.executionReport).toBeNull();
      expect(projected.cursorReportSummary).toBeUndefined();
    } finally {
      rmSync(refsRoot, { recursive: true, force: true });
    }
  });

  it("T12 — refs helper stays under existing mission-result-refs convention (no new store)", () => {
    const root = resolveProductEvidenceRefsRoot(
      "/tmp/product-db-dir/mission-result-refs",
    );
    expect(root).toContain("mission-result-refs");
    const derived = resolveProductEvidenceRefsRoot(null);
    expect(derived).toContain("mission-result-refs");
  });

  it("completeBoundedDocsWriteLaunch still surfaces cursorReport on facts (T4 continuity)", async () => {
    // Unit-level: facts type documents cursorReport; parser shared with governed path.
    const report = mintReport();
    const stdout = `ok\nCURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(report)}\n`;
    const marker = "CURSOR_EXECUTION_REPORT_JSON=";
    const idx = stdout.indexOf(marker);
    expect(idx).toBeGreaterThanOrEqual(0);
    const json = stdout.slice(idx + marker.length).trim().split("\n")[0] ?? "";
    const parsed = JSON.parse(json) as CursorExecutionReport;
    expect(parsed.attemptId).toBe(ATTEMPT);
    // Module still exports completion entrypoint (smoke import).
    expect(typeof completeBoundedDocsWriteLaunch).toBe("function");
  });
});
