/**
 * M5 — Evidence + ReviewBundle Product SQLite durability.
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
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-ev-"));
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
    fixedNowIso: "2026-08-15T09:00:00.000Z",
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

describe("M5 Evidence/ReviewBundle durability", () => {
  it("persists Evidence + ReviewBundle across Product SQLite reopen", async () => {
    const dbPath = tempDbPath("ev-rb.sqlite");
    const projects = openProjects(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m5-ev",
      title: "M5 Evidence",
      objective: "m5-ev-objective",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m5-ev-v1",
      idempotencyKey: "idem:m5-ev-prj",
    });

    const services = createTestSqliteEvidenceReviewServices({
      productStore: projects.store,
      fixedNowIso: "2026-08-15T09:00:00.000Z",
    });

    const reg = await services.registerEvidence.execute({
      evidenceId: "ev:m5-durable",
      idempotencyKey: "idem:ev:m5-durable",
      actor: EV_ACTOR,
      type: "document",
      source: "fixture",
      sourceKind: "manual",
      bindings: { projectId: "prj:m5-ev" },
      classification: "internal",
      storageMode: "metadata_only",
      digest: EVIDENCE_DIGEST,
    });
    expect(reg.ok).toBe(true);

    const bundle = await services.createReviewBundle.execute({
      reviewBundleId: "rb:m5-durable",
      idempotencyKey: "idem:rb:m5-durable",
      actor: EV_ACTOR,
      projectId: "prj:m5-ev",
      evidenceIds: ["ev:m5-durable"],
    });
    expect(bundle.ok).toBe(true);

    projects.dispose();
    openServices.pop();

    const projects2 = openProjects(dbPath);
    const services2 = createTestSqliteEvidenceReviewServices({
      productStore: projects2.store,
    });
    const evidence = await services2.repository.findById("ev:m5-durable");
    expect(evidence?.status).toBe("available");
    expect(evidence?.bindings.projectId).toBe("prj:m5-ev");
    const rb = await services2.reviewBundleRepository.findById("rb:m5-durable");
    expect(rb?.evidenceRefs).toEqual(["ev:m5-durable"]);
    const byKey = await services2.repository.findByIdempotencyKey(
      "idem:ev:m5-durable",
    );
    expect(byKey?.evidence.evidenceId).toBe("ev:m5-durable");
  });

  it("createSuccessorAndMarkSuperseded is transactional on Product SQLite", async () => {
    const dbPath = tempDbPath("reopen.sqlite");
    const projects = openProjects(dbPath);
    const services = createTestSqliteEvidenceReviewServices({
      productStore: projects.store,
    });
    const reg = await services.registerEvidence.execute({
      evidenceId: "ev:m5-reopen",
      idempotencyKey: "idem:ev:m5-reopen",
      actor: EV_ACTOR,
      type: "document",
      source: "fixture",
      sourceKind: "manual",
      bindings: { projectId: "prj:m5-reopen" },
      classification: "internal",
      storageMode: "metadata_only",
      digest: EVIDENCE_DIGEST,
    });
    expect(reg.ok).toBe(true);
    const created = await services.createReviewBundle.execute({
      reviewBundleId: "rb:m5-src",
      idempotencyKey: "idem:rb:m5-src",
      actor: EV_ACTOR,
      projectId: "prj:m5-reopen",
      evidenceIds: ["ev:m5-reopen"],
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    // Freeze → start → complete so reopen is legal.
    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: "rb:m5-src",
      actor: EV_ACTOR,
      expectedVersion: 1,
      idempotencyKey: "idem:freeze:m5-src",
    });
    expect(frozen.ok).toBe(true);
    const started = await services.startReview.execute({
      reviewBundleId: "rb:m5-src",
      actor: EV_ACTOR,
      expectedVersion: 2,
      idempotencyKey: "idem:start:m5-src",
    });
    expect(started.ok).toBe(true);
    const completed = await services.completeReview.execute({
      reviewBundleId: "rb:m5-src",
      actor: EV_ACTOR,
      expectedVersion: 3,
      outcome: "accepted",
      idempotencyKey: "idem:complete:m5-src",
    });
    expect(completed.ok).toBe(true);

    const reopened = await services.reopenReview.execute({
      reviewBundleId: "rb:m5-src",
      successorReviewBundleId: "rb:m5-successor",
      actor: EV_ACTOR,
      expectedVersion: 4,
      reason: "revise",
      idempotencyKey: "idem:reopen:m5-src",
    });
    expect(reopened.ok).toBe(true);
    if (!reopened.ok) return;
    expect(reopened.reviewBundle.reviewBundleId).toBe("rb:m5-src");
    expect(reopened.reviewBundle.status).toBe("superseded");
    expect(reopened.successor?.reviewBundleId).toBe("rb:m5-successor");
    expect(reopened.successor?.status).toBe("draft");

    const superseded = await services.reviewBundleRepository.findById(
      "rb:m5-src",
    );
    expect(superseded?.status).toBe("superseded");
    const successor = await services.reviewBundleRepository.findById(
      "rb:m5-successor",
    );
    expect(successor?.status).toBe("draft");
  });

  it("concurrent Evidence update expectedVersion=1 → one win, one VERSION_CONFLICT", async () => {
    const dbPath = tempDbPath("ev-occ.sqlite");
    const projects = openProjects(dbPath);
    const services = createTestSqliteEvidenceReviewServices({
      productStore: projects.store,
    });
    const reg = await services.registerEvidence.execute({
      evidenceId: "ev:m5-occ",
      idempotencyKey: "idem:ev:m5-occ",
      actor: EV_ACTOR,
      type: "document",
      source: "fixture",
      sourceKind: "manual",
      bindings: { projectId: "prj:m5-occ" },
      classification: "internal",
      storageMode: "metadata_only",
      digest: EVIDENCE_DIGEST,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;

    const base = reg.evidence;
    const results = await Promise.allSettled([
      services.repository.update(
        {
          ...base,
          status: "stale",
          version: 2,
          updatedAt: "2026-08-15T09:01:00.000Z",
        },
        1,
      ),
      services.repository.update(
        {
          ...base,
          status: "stale",
          version: 2,
          updatedAt: "2026-08-15T09:02:00.000Z",
        },
        1,
      ),
    ]);

    const fulfilled = results.filter((r) => r.status === "fulfilled");
    const rejected = results.filter((r) => r.status === "rejected");
    expect(fulfilled).toHaveLength(1);
    expect(rejected).toHaveLength(1);
    expect(rejected[0]).toMatchObject({
      status: "rejected",
      reason: expect.objectContaining({ detailCode: "VERSION_CONFLICT" }),
    });
    const loaded = await services.repository.findById("ev:m5-occ");
    expect(loaded?.version).toBe(2);
  });

  it("concurrent createSuccessorAndMarkSuperseded → one wins, no orphan", async () => {
    const dbPath = tempDbPath("reopen-concurrent.sqlite");
    const projects = openProjects(dbPath);
    const services = createTestSqliteEvidenceReviewServices({
      productStore: projects.store,
    });
    const reg = await services.registerEvidence.execute({
      evidenceId: "ev:m5-conc",
      idempotencyKey: "idem:ev:m5-conc",
      actor: EV_ACTOR,
      type: "document",
      source: "fixture",
      sourceKind: "manual",
      bindings: { projectId: "prj:m5-conc" },
      classification: "internal",
      storageMode: "metadata_only",
      digest: EVIDENCE_DIGEST,
    });
    expect(reg.ok).toBe(true);

    const created = await services.createReviewBundle.execute({
      reviewBundleId: "rb:m5-conc-src",
      idempotencyKey: "idem:rb:m5-conc-src",
      actor: EV_ACTOR,
      projectId: "prj:m5-conc",
      evidenceIds: ["ev:m5-conc"],
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: "rb:m5-conc-src",
      actor: EV_ACTOR,
      expectedVersion: 1,
      idempotencyKey: "idem:freeze:m5-conc",
    });
    expect(frozen.ok).toBe(true);
    const started = await services.startReview.execute({
      reviewBundleId: "rb:m5-conc-src",
      actor: EV_ACTOR,
      expectedVersion: 2,
      idempotencyKey: "idem:start:m5-conc",
    });
    expect(started.ok).toBe(true);
    const completed = await services.completeReview.execute({
      reviewBundleId: "rb:m5-conc-src",
      actor: EV_ACTOR,
      expectedVersion: 3,
      outcome: "accepted",
      idempotencyKey: "idem:complete:m5-conc",
    });
    expect(completed.ok).toBe(true);

    const results = await Promise.allSettled([
      services.reopenReview.execute({
        reviewBundleId: "rb:m5-conc-src",
        successorReviewBundleId: "rb:m5-conc-a",
        actor: EV_ACTOR,
        expectedVersion: 4,
        reason: "revise-a",
        idempotencyKey: "idem:reopen:m5-conc-a",
      }),
      services.reopenReview.execute({
        reviewBundleId: "rb:m5-conc-src",
        successorReviewBundleId: "rb:m5-conc-b",
        actor: EV_ACTOR,
        expectedVersion: 4,
        reason: "revise-b",
        idempotencyKey: "idem:reopen:m5-conc-b",
      }),
    ]);

    const okResults = results.filter(
      (r) => r.status === "fulfilled" && r.value.ok,
    );
    const failResults = results.filter(
      (r) =>
        r.status === "fulfilled" && !r.value.ok,
    );
    expect(okResults).toHaveLength(1);
    expect(failResults).toHaveLength(1);
    if (failResults[0]?.status === "fulfilled" && !failResults[0].value.ok) {
      expect(failResults[0].value.error.detailCode).toBe("VERSION_CONFLICT");
    }

    const src = await services.reviewBundleRepository.findById("rb:m5-conc-src");
    expect(src?.status).toBe("superseded");

    const a = await services.reviewBundleRepository.findById("rb:m5-conc-a");
    const b = await services.reviewBundleRepository.findById("rb:m5-conc-b");
    const successors = [a, b].filter(Boolean);
    expect(successors).toHaveLength(1);
    expect(successors[0]?.status).toBe("draft");
  });
});
