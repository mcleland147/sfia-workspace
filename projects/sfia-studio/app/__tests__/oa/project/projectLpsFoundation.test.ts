/**
 * T-A1 Project / LPS Foundation — create, get, append, concurrency.
 * @vitest-environment node
 */
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  MAX_LPS_SNAPSHOT_BYTES,
  createTestProjectServices,
  type ActorReference,
} from "@/lib/oa/project";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

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

function buildServices() {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  return createTestProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-07-24T05:00:00.000Z",
  });
}

describe("T-A1 CreateProject", () => {
  it("creates project + LPS v1 with resolved doctrine and provenance", async () => {
    const svc = buildServices();
    const result = await svc.createProject.execute({
      projectId: "prj:campus360-oa",
      title: "Campus360 Option A",
      objective: "Conduire Option A conversation → exécution gouvernée",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:t-a1-create",
      lpsVersionId: "lps:campus360-v1",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.project.status).toBe("active");
    expect(result.project.doctrinePackageRef?.status).toBe("resolved");
    expect(result.project.doctrinePackageRef?.digest).toBe(VALID_DIGEST);
    expect(result.project.currentLpsVersionId).toBe("lps:campus360-v1");
    expect(result.project.provenance?.provenanceRecordId).toMatch(/^prv:/);
    expect(result.project.updatedAt).toBe("2026-07-24T05:00:00.000Z");

    expect(result.livingProjectState.version).toBe(1);
    expect(result.livingProjectState.status).toBe("active");
    expect(result.livingProjectState.supersedesLpsVersionId).toBeUndefined();
    expect(result.livingProjectState.doctrinePackageRef.digest).toBe(
      VALID_DIGEST,
    );
    expect(result.livingProjectState.provenance?.provenanceRecordId).toMatch(
      /^prv:/,
    );
    expect(result.livingProjectState.uiOwnership).toBe(false);

    const createdEvents = svc.audit.events.filter(
      (e) => e.event === "oa.project.created" && e.result === "ok",
    );
    expect(createdEvents).toHaveLength(1);
  });

  it("rejects invalid project id", async () => {
    const svc = buildServices();
    const result = await svc.createProject.execute({
      projectId: "not-a-valid-id",
      title: "X",
      objective: "Y",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PROJECT_INVALID");
    expect(result.error.code).toBe("STATE_CONFLICT");
  });

  it("rejects duplicate project id", async () => {
    const svc = buildServices();
    const first = await svc.createProject.execute({
      projectId: "prj:dup",
      title: "One",
      objective: "Obj",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
    });
    expect(first.ok).toBe(true);

    const second = await svc.createProject.execute({
      projectId: "prj:dup",
      title: "Two",
      objective: "Obj2",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
    });
    expect(second.ok).toBe(false);
    if (second.ok) return;
    expect(second.error.detailCode).toBe("PROJECT_ALREADY_EXISTS");
  });

  it("returns existing project for same idempotency key", async () => {
    const svc = buildServices();
    const a = await svc.createProject.execute({
      projectId: "prj:idem",
      title: "Idem",
      objective: "Obj",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      idempotencyKey: "idem:create-1",
      lpsVersionId: "lps:idem-v1",
    });
    expect(a.ok).toBe(true);

    const b = await svc.createProject.execute({
      projectId: "prj:idem-other",
      title: "Other",
      objective: "Other",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      idempotencyKey: "idem:create-1",
    });
    expect(b.ok).toBe(true);
    if (!b.ok) return;
    expect(b.reusedFromIdempotencyKey).toBe(true);
    expect(b.project.projectId).toBe("prj:idem");
  });

  it("fails closed when doctrine is unresolved", async () => {
    const svc = buildServices();
    const result = await svc.createProject.execute({
      projectId: "prj:missing-doc",
      title: "Missing",
      objective: "Obj",
      doctrinePackagePin: {
        doctrinePackageId: "pkg:does-not-exist",
        version: "1.0.0",
        digest: VALID_DIGEST,
      },
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("DOCTRINE_UNRESOLVED");
    expect(result.error.code).toBe("DOCTRINE_UNRESOLVED");
    expect(await svc.projects.exists("prj:missing-doc")).toBe(false);
  });

  it("fails closed on doctrine digest mismatch", async () => {
    const svc = buildServices();
    const result = await svc.createProject.execute({
      projectId: "prj:bad-digest",
      title: "Bad digest",
      objective: "Obj",
      doctrinePackagePin: {
        ...VALID_PIN,
        digest:
          "sha256:0000000000000000000000000000000000000000000000000000000000000000" as Digest,
      },
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("DOCTRINE_UNRESOLVED");
    expect(await svc.projects.exists("prj:bad-digest")).toBe(false);
  });

  it("rolls back atomically when LPS save fails after project save", async () => {
    const svc = buildServices();
    svc.store.failNextSave = "lps";
    const result = await svc.createProject.execute({
      projectId: "prj:atomic-fail",
      title: "Atomic",
      objective: "Obj",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:atomic-v1",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");
    expect(await svc.projects.exists("prj:atomic-fail")).toBe(false);
    expect(await svc.lps.findById("lps:atomic-v1")).toBeNull();
  });

  it("rejects oversized LPS snapshot", async () => {
    const svc = buildServices();
    const oversized = "x".repeat(MAX_LPS_SNAPSHOT_BYTES);
    const result = await svc.createProject.execute({
      projectId: "prj:huge",
      title: "Huge",
      objective: oversized,
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("LPS_INVALID");
  });
});

describe("T-A1 GetProject / Get LPS", () => {
  it("gets project and current / historical LPS", async () => {
    const svc = buildServices();
    const created = await svc.createProject.execute({
      projectId: "prj:get",
      title: "Get",
      objective: "v1",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:get-v1",
    });
    expect(created.ok).toBe(true);

    const appended = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:get",
      expectedVersion: 1,
      objective: "v2",
      createdBy: ACTOR,
      lpsVersionId: "lps:get-v2",
    });
    expect(appended.ok).toBe(true);

    const project = await svc.getProject.execute({ projectId: "prj:get" });
    expect(project.ok).toBe(true);
    if (!project.ok) return;
    expect(project.project.currentLpsVersionId).toBe("lps:get-v2");

    const current = await svc.getCurrentLivingProjectState.execute({
      projectId: "prj:get",
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.livingProjectState.version).toBe(2);
    expect(current.livingProjectState.objective).toBe("v2");

    const historical = await svc.getLivingProjectStateVersion.execute({
      projectId: "prj:get",
      version: 1,
    });
    expect(historical.ok).toBe(true);
    if (!historical.ok) return;
    expect(historical.livingProjectState.lpsVersionId).toBe("lps:get-v1");
    expect(historical.livingProjectState.status).toBe("superseded");
  });

  it("returns PROJECT_NOT_FOUND", async () => {
    const svc = buildServices();
    const result = await svc.getProject.execute({
      projectId: "prj:absent",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PROJECT_NOT_FOUND");
  });
});

describe("T-A1 AppendLivingProjectStateVersion", () => {
  it("appends with monotonic version and supersedes previous", async () => {
    const svc = buildServices();
    await svc.createProject.execute({
      projectId: "prj:append",
      title: "Append",
      objective: "v1",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:append-v1",
    });

    const result = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:append",
      expectedVersion: 1,
      objective: "v2 clarified",
      createdBy: ACTOR,
      correlationId: "cor:t-a1-append",
      lpsVersionId: "lps:append-v2",
      doctrinePackagePin: VALID_PIN,
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.livingProjectState.version).toBe(2);
    expect(result.livingProjectState.supersedesLpsVersionId).toBe(
      "lps:append-v1",
    );
    expect(result.project.currentLpsVersionId).toBe("lps:append-v2");
    expect(result.project.updatedAt).toBe("2026-07-24T05:00:00.000Z");
    expect(result.livingProjectState.provenance).toBeDefined();

    const prev = await svc.lps.findById("lps:append-v1");
    expect(prev?.status).toBe("superseded");

    const events = svc.audit.events.filter(
      (e) => e.event === "oa.lps.version_appended",
    );
    expect(events).toHaveLength(1);
  });

  it("conflicts when expectedVersion is stale", async () => {
    const svc = buildServices();
    await svc.createProject.execute({
      projectId: "prj:conflict",
      title: "Conflict",
      objective: "v1",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
    });

    const result = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:conflict",
      expectedVersion: 99,
      objective: "stale",
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("LPS_VERSION_CONFLICT");
    expect(result.error.code).toBe("STATE_CONFLICT");
    expect(result.error.currentVersion).toBe(1);
    expect(result.error.expectedVersion).toBe(99);

    const conflicts = svc.audit.events.filter(
      (e) => e.event === "oa.lps.version_conflict",
    );
    expect(conflicts).toHaveLength(1);
  });

  it("refuses non-monotonic expectedVersion below current after append", async () => {
    const svc = buildServices();
    await svc.createProject.execute({
      projectId: "prj:mono",
      title: "Mono",
      objective: "v1",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
    });
    const a = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:mono",
      expectedVersion: 1,
      objective: "v2",
      createdBy: ACTOR,
    });
    expect(a.ok).toBe(true);

    // Attempt to append as if still on v1 (non-monotonic / stale).
    const b = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:mono",
      expectedVersion: 1,
      objective: "v3-bad",
      createdBy: ACTOR,
    });
    expect(b.ok).toBe(false);
    if (b.ok) return;
    expect(b.error.detailCode).toBe("LPS_VERSION_CONFLICT");
  });

  it("rejects append when project is absent", async () => {
    const svc = buildServices();
    const result = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:ghost",
      expectedVersion: 1,
      objective: "nope",
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PROJECT_NOT_FOUND");
  });

  it("rejects doctrine pin mismatch on append", async () => {
    const svc = buildServices();
    await svc.createProject.execute({
      projectId: "prj:pin-mismatch",
      title: "Pin",
      objective: "v1",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
    });

    const result = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:pin-mismatch",
      expectedVersion: 1,
      objective: "v2",
      createdBy: ACTOR,
      doctrinePackagePin: {
        doctrinePackageId: "pkg:studio-v3-oa",
        version: "9.9.9",
        digest: VALID_DIGEST,
      },
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("DOCTRINE_UNRESOLVED");
  });

  it("requires provenance on successful create and append", async () => {
    const svc = buildServices();
    const created = await svc.createProject.execute({
      projectId: "prj:prov",
      title: "Prov",
      objective: "v1",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    expect(created.project.provenance?.actor.actorId).toBe("actor:morris");
    expect(created.livingProjectState.provenance?.source).toBe("system");

    const appended = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:prov",
      expectedVersion: 1,
      objective: "v2",
      createdBy: ACTOR,
    });
    expect(appended.ok).toBe(true);
    if (!appended.ok) return;
    expect(appended.livingProjectState.provenance?.provenanceRecordId).toMatch(
      /^prv:/,
    );
  });
});
