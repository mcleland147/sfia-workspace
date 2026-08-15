/**
 * C1/C2 — Product durable disclosure + direct rehydrate server action proof.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  projectAssistantRehydrateEvidenceOutcomeAction,
} from "@/features/project-assistant/actions";
import {
  F3_PROCESS_LOCAL_NOTICE,
  F3_PRODUCT_DURABLE_NOTICE,
  resolveF3EphemeralNotice,
  appendEvidenceOutcomeToLps,
} from "@/features/project-assistant/f3";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { Digest as EvidenceDigest } from "@/lib/oa/evidence-review";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const EVIDENCE_DIGEST =
  "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as EvidenceDigest;

const tempDirs: string[] = [];

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  nextProjectId(): string {
    this.project += 1;
    return `prj:c12-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:c12-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:c12-${this.correlation}`;
  }
}

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

function bootProductRuntime() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-c12-"));
  tempDirs.push(dir);
  const dbPath = path.join(dir, "oa-product.sqlite");
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: "2026-08-15T12:00:00.000Z",
    idSource: new FixedIdSource(),
    auditMode: "noop",
    productDbPath: dbPath,
  });
  expect(runtime.oa).toBeTruthy();
  expect(runtime.oa!.productDurablePath).toBe(true);
  return { runtime, dbPath };
}

describe("C1 F3 disclosure routing", () => {
  it("routes Product durable vs Memory process-local notices", () => {
    expect(resolveF3EphemeralNotice(true)).toBe(F3_PRODUCT_DURABLE_NOTICE);
    expect(resolveF3EphemeralNotice(false)).toBe(F3_PROCESS_LOCAL_NOTICE);
    expect(F3_PRODUCT_DURABLE_NOTICE).toMatch(/Product SQLite/i);
    expect(F3_PRODUCT_DURABLE_NOTICE).toMatch(/REAL/i);
    expect(F3_PRODUCT_DURABLE_NOTICE).not.toMatch(/efface/i);
    expect(F3_PRODUCT_DURABLE_NOTICE).not.toMatch(/non persisté/i);
    expect(F3_PRODUCT_DURABLE_NOTICE).not.toMatch(/M5 CLOSED/i);
    expect(F3_PRODUCT_DURABLE_NOTICE).not.toMatch(/ADOPTED/i);
    expect(F3_PROCESS_LOCAL_NOTICE).toMatch(/non persisté/i);
  });
});

describe("C2 projectAssistantRehydrateEvidenceOutcomeAction", () => {
  it("invokes the server action on Product SQLite and returns recommendation-only", async () => {
    const { runtime } = bootProductRuntime();
    const created = await runtime.createProject({
      name: "C2 Rehydrate",
      objective: "c2-rehydrate-objective",
      context: "c2",
      criticality: "STANDARD",
      constraints: ["FIXTURE ONLY"],
      shortReference: "C2R",
      idempotencyKey: `idem:c2-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;

    const evidence =
      await runtime.oa!.evidenceReviewServices.registerEvidence.execute({
        evidenceId: "ev:c2-action",
        idempotencyKey: "idem:ev:c2-action",
        actor: {
          actorId: "actor:morris",
          role: "decision_maker",
          authorityLevel: "N3",
        },
        type: "document",
        source: "fixture",
        sourceKind: "manual",
        bindings: { projectId },
        classification: "internal",
        storageMode: "metadata_only",
        digest: EVIDENCE_DIGEST,
      });
    expect(evidence.ok).toBe(true);
    if (!evidence.ok) return;

    const bundle =
      await runtime.oa!.evidenceReviewServices.createReviewBundle.execute({
        reviewBundleId: "rb:c2-action",
        idempotencyKey: "idem:rb:c2-action",
        actor: {
          actorId: "actor:morris",
          role: "decision_maker",
          authorityLevel: "N3",
        },
        projectId,
        evidenceIds: [evidence.evidence.evidenceId],
      });
    expect(bundle.ok).toBe(true);
    if (!bundle.ok) return;

    const linked = await appendEvidenceOutcomeToLps({
      projectId,
      evidenceId: evidence.evidence.evidenceId,
      reviewBundleId: bundle.reviewBundle.reviewBundleId,
      projectServices: runtime.oa!.projectServices,
    });
    expect(linked.ok).toBe(true);
    if (!linked.ok) return;

    const beforeLps =
      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(beforeLps.ok).toBe(true);
    if (!beforeLps.ok) return;
    const beforeVersion = beforeLps.livingProjectState.version;
    const beforeDecisionIds = [
      ...(beforeLps.livingProjectState.decisionIds ?? []),
    ];
    const beforeEvidenceIds = [
      ...(beforeLps.livingProjectState.evidenceIds ?? []),
    ];
    const beforeRbIds = [
      ...(beforeLps.livingProjectState.reviewBundleIds ?? []),
    ];
    const beforeTrajectoryId = beforeLps.livingProjectState.trajectoryId;
    const beforeTrajectoryVersion =
      beforeLps.livingProjectState.trajectoryVersion;

    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
      projectId,
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("ok");
    expect(result.project.projectId).toBe(projectId);
    expect(result.evidenceIds).toEqual(["ev:c2-action"]);
    expect(result.reviewBundleIds).toEqual(["rb:c2-action"]);
    expect(result.evidence.map((e) => e.evidenceId)).toEqual(["ev:c2-action"]);
    expect(result.reviewBundles.map((b) => b.reviewBundleId)).toEqual([
      "rb:c2-action",
    ]);
    expect(result.recommendation.kind).toBe("recommendation");
    expect(result.recommendation.executionAuthority).toBe(false);
    expect(result.recommendation.gateConsumed).toBe(false);
    expect(result.recommendation.decisionCreated).toBe(false);
    expect(result.recommendation.attemptAutoLaunchNextCycle).toBe(false);
    expect(result.ephemeralNotice).toBe(F3_PRODUCT_DURABLE_NOTICE);
    expect(result.ephemeralNotice).not.toBe(F3_PROCESS_LOCAL_NOTICE);
    expect(result.text).toContain(F3_PRODUCT_DURABLE_NOTICE);
    expect(result.text).not.toMatch(/efface/i);

    const afterLps =
      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(afterLps.ok).toBe(true);
    if (!afterLps.ok) return;
    expect(afterLps.livingProjectState.version).toBe(beforeVersion);
    expect(afterLps.livingProjectState.decisionIds ?? []).toEqual(
      beforeDecisionIds,
    );
    expect(afterLps.livingProjectState.evidenceIds ?? []).toEqual(
      beforeEvidenceIds,
    );
    expect(afterLps.livingProjectState.reviewBundleIds ?? []).toEqual(
      beforeRbIds,
    );
    expect(afterLps.livingProjectState.trajectoryId).toBe(beforeTrajectoryId);
    expect(afterLps.livingProjectState.trajectoryVersion).toBe(
      beforeTrajectoryVersion,
    );
  });

  it("fail-closes via server action when LPS has no evidence/RB refs", async () => {
    const { runtime } = bootProductRuntime();
    const created = await runtime.createProject({
      name: "C2 Empty",
      objective: "c2-empty",
      context: "c2",
      criticality: "STANDARD",
      constraints: ["FIXTURE ONLY"],
      shortReference: "C2E",
      idempotencyKey: `idem:c2-empty-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
      projectId: created.project.projectId,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("NO_EVIDENCE_OUTCOME_REFS");
  });
});
