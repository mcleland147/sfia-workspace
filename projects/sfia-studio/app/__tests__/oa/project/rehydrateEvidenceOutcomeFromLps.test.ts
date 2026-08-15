/**
 * M5 rehydrateEvidenceOutcomeFromLps — read-only LPS → RecommendNextGate.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import {
  createTestSqliteEvidenceReviewServices,
  type ActorReference as EvidenceActor,
  type Digest as EvidenceDigest,
} from "@/lib/oa/evidence-review";
import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";
import { rehydrateEvidenceOutcomeFromLps } from "@/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const EVIDENCE_DIGEST =
  "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as EvidenceDigest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const EV_ACTOR: EvidenceActor = {
  actorId: "actor:morris",
  role: "decision_maker",
  authorityLevel: "N3",
};

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-reh-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function openProjects(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-15T11:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("rehydrateEvidenceOutcomeFromLps", () => {
  it("reads LPS refs and returns recommendation-only DTO", async () => {
    const dbPath = tempDbPath("rehydrate.sqlite");
    const projects = openProjects(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m5-reh",
      title: "M5 rehydrate",
      objective: "m5-reh-objective",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m5-reh-v1",
      idempotencyKey: "idem:m5-reh",
    });

    const evidence = createTestSqliteEvidenceReviewServices({
      productStore: projects.store,
      fixedNowIso: "2026-08-15T11:00:00.000Z",
    });
    const reg = await evidence.registerEvidence.execute({
      evidenceId: "ev:m5-reh",
      idempotencyKey: "idem:ev:m5-reh",
      actor: EV_ACTOR,
      type: "document",
      source: "fixture",
      sourceKind: "manual",
      bindings: {
        projectId: "prj:m5-reh",
        executionContractId: "xct:m5-reh",
      },
      classification: "internal",
      storageMode: "metadata_only",
      digest: EVIDENCE_DIGEST,
    });
    expect(reg.ok).toBe(true);

    const bundle = await evidence.createReviewBundle.execute({
      reviewBundleId: "rb:m5-reh",
      idempotencyKey: "idem:rb:m5-reh",
      actor: EV_ACTOR,
      projectId: "prj:m5-reh",
      executionContractId: "xct:m5-reh",
      evidenceIds: ["ev:m5-reh"],
    });
    expect(bundle.ok).toBe(true);

    const linked = await appendEvidenceOutcomeToLps({
      projectId: "prj:m5-reh",
      evidenceId: "ev:m5-reh",
      reviewBundleId: "rb:m5-reh",
      projectServices: projects,
    });
    expect(linked.ok).toBe(true);

    const lpsBefore = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m5-reh",
    });
    expect(lpsBefore.ok).toBe(true);
    if (!lpsBefore.ok) return;
    const versionBefore = lpsBefore.livingProjectState.version;

    const rehydrated = await rehydrateEvidenceOutcomeFromLps({
      projectId: "prj:m5-reh",
      deps: {
        projectServices: projects,
        evidenceReviewServices: evidence,
      },
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;

    expect(rehydrated.evidenceIds).toEqual(["ev:m5-reh"]);
    expect(rehydrated.reviewBundleIds).toEqual(["rb:m5-reh"]);
    expect(rehydrated.evidence).toHaveLength(1);
    expect(rehydrated.reviewBundles).toHaveLength(1);
    expect(rehydrated.subjectRef).toBe("xct:m5-reh");
    expect(rehydrated.recommendation.kind).toBe("recommendation");
    expect(rehydrated.recommendation.executionAuthority).toBe(false);
    expect(rehydrated.recommendation.gateConsumed).toBe(false);
    expect(rehydrated.recommendation.decisionCreated).toBe(false);
    expect(rehydrated.recommendation.attemptAutoLaunchNextCycle).toBe(false);

    const lpsAfter = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m5-reh",
    });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) return;
    expect(lpsAfter.livingProjectState.version).toBe(versionBefore);
    expect(lpsAfter.livingProjectState.decisionIds ?? []).toEqual(
      lpsBefore.livingProjectState.decisionIds ?? [],
    );
  });

  it("fails closed when LPS has no evidence/RB refs", async () => {
    const dbPath = tempDbPath("empty.sqlite");
    const projects = openProjects(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m5-empty",
      title: "M5 empty",
      objective: "empty",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m5-empty-v1",
      idempotencyKey: "idem:m5-empty",
    });
    const evidence = createTestSqliteEvidenceReviewServices({
      productStore: projects.store,
    });
    const result = await rehydrateEvidenceOutcomeFromLps({
      projectId: "prj:m5-empty",
      deps: {
        projectServices: projects,
        evidenceReviewServices: evidence,
      },
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("NO_EVIDENCE_OUTCOME_REFS");
  });
});
