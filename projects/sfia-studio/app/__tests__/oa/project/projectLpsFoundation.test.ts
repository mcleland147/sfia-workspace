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
  measureLpsSnapshotBytes,
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

  it("rolls back atomically when project save fails before LPS", async () => {
    const svc = buildServices();
    svc.store.failNextSave = "project";
    const result = await svc.createProject.execute({
      projectId: "prj:atomic-proj-fail",
      title: "Atomic",
      objective: "Obj",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:atomic-proj-v1",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");
    expect(await svc.projects.exists("prj:atomic-proj-fail")).toBe(false);
    expect(await svc.lps.findById("lps:atomic-proj-v1")).toBeNull();
  });

  it("accepts snapshot at UTF-8 byte limit and rejects limit+1", async () => {
    const svc = buildServices();
    const empty = measureLpsSnapshotBytes({
      objective: "",
      constraints: [],
      stakeholders: [],
      epistemicItemIds: [],
      decisionIds: [],
    });
    const nLimit = MAX_LPS_SNAPSHOT_BYTES - empty;

    const atLimitMinus1 = await svc.createProject.execute({
      projectId: "prj:snap-lim-minus-1",
      title: "Lim",
      objective: "x".repeat(nLimit - 1),
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
    });
    expect(atLimitMinus1.ok).toBe(true);

    const atLimit = await svc.createProject.execute({
      projectId: "prj:snap-lim",
      title: "Lim",
      objective: "x".repeat(nLimit),
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
    });
    expect(atLimit.ok).toBe(true);
    expect(
      measureLpsSnapshotBytes({
        objective: "x".repeat(nLimit),
        constraints: [],
        stakeholders: [],
        epistemicItemIds: [],
        decisionIds: [],
      }),
    ).toBe(MAX_LPS_SNAPSHOT_BYTES);

    const over = await svc.createProject.execute({
      projectId: "prj:snap-lim-plus-1",
      title: "Lim",
      objective: "x".repeat(nLimit + 1),
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
    });
    expect(over.ok).toBe(false);
    if (over.ok) return;
    expect(over.error.detailCode).toBe("LPS_INVALID");
  });

  it("measures Unicode snapshot size in UTF-8 JSON bytes", async () => {
    const svc = buildServices();
    const emoji = "😀";
    const empty = measureLpsSnapshotBytes({
      objective: "",
      constraints: [],
      stakeholders: [],
      epistemicItemIds: [],
      decisionIds: [],
    });
    const one = measureLpsSnapshotBytes({
      objective: emoji,
      constraints: [],
      stakeholders: [],
      epistemicItemIds: [],
      decisionIds: [],
    });
    expect(one - empty).toBe(Buffer.byteLength(emoji, "utf8"));

    // Build a payload that exceeds the limit via multi-byte Unicode.
    let objective = "";
    while (
      measureLpsSnapshotBytes({
        objective,
        constraints: [],
        stakeholders: [],
        epistemicItemIds: [],
        decisionIds: [],
      }) <= MAX_LPS_SNAPSHOT_BYTES
    ) {
      objective += emoji.repeat(1000);
    }
    const result = await svc.createProject.execute({
      projectId: "prj:snap-unicode-over",
      title: "Unicode",
      objective,
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("LPS_INVALID");
  });

  it("does not alias returned or input objects into the store", async () => {
    const svc = buildServices();
    const actor = { ...ACTOR, displayName: "Before" };
    const created = await svc.createProject.execute({
      projectId: "prj:alias",
      title: "Alias",
      objective: "orig",
      doctrinePackagePin: VALID_PIN,
      createdBy: actor,
      lpsVersionId: "lps:alias-v1",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    created.project.title = "MUTATED_TITLE";
    created.livingProjectState.objective = "MUTATED_OBJ";
    created.project.createdBy.displayName = "HACKED";
    actor.displayName = "AFTER_INPUT";

    const stored = await svc.projects.findById("prj:alias");
    const storedLps = await svc.lps.findById("lps:alias-v1");
    expect(stored?.title).toBe("Alias");
    expect(storedLps?.objective).toBe("orig");
    expect(stored?.createdBy.displayName).toBe("Before");
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

  it("treats __proto__ objective text as data without prototype pollution", async () => {
    const svc = buildServices();
    const result = await svc.createProject.execute({
      projectId: "prj:proto",
      title: "Proto",
      objective: "__proto__",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      context: "constructor",
      lpsVersionId: "lps:proto-v1",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.livingProjectState.objective).toBe("__proto__");
    expect(
      Object.prototype.hasOwnProperty.call(result.livingProjectState, "__proto__"),
    ).toBe(false);
    expect(({} as { polluted?: boolean }).polluted).toBeUndefined();

    const stored = await svc.lps.findById("lps:proto-v1");
    expect(stored?.objective).toBe("__proto__");
    // Mutating a path-like key on a plain returned object must not pollute Object.prototype.
    const probe = JSON.parse(
      '{"__proto__":{"polluted":true},"objective":"x"}',
    ) as Record<string, unknown>;
    const cloned = structuredClone({
      objective: String(probe.objective),
      meta: probe,
    });
    expect(({} as { polluted?: boolean }).polluted).toBeUndefined();
    expect(Object.getPrototypeOf(cloned)).toBe(Object.prototype);
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
    expect(result.error.retryable).toBe(true);
    expect(result.error.currentVersion).toBe(1);
    expect(result.error.expectedVersion).toBe(99);

    const conflicts = svc.audit.events.filter(
      (e) => e.event === "oa.lps.version_conflict",
    );
    expect(conflicts).toHaveLength(1);
  });

  it("rejects expectedVersion below 1 as LPS_INVALID", async () => {
    const svc = buildServices();
    await svc.createProject.execute({
      projectId: "prj:low-ver",
      title: "Low",
      objective: "v1",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
    });
    const result = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:low-ver",
      expectedVersion: 0,
      objective: "bad",
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("LPS_INVALID");
  });

  it("allows only one winner on concurrent double-append with same expectedVersion", async () => {
    const svc = buildServices();
    await svc.createProject.execute({
      projectId: "prj:race",
      title: "Race",
      objective: "v1",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:race-v1",
    });

    const [a, b] = await Promise.all([
      svc.appendLivingProjectStateVersion.execute({
        projectId: "prj:race",
        expectedVersion: 1,
        objective: "A",
        createdBy: ACTOR,
        lpsVersionId: "lps:race-a",
      }),
      svc.appendLivingProjectStateVersion.execute({
        projectId: "prj:race",
        expectedVersion: 1,
        objective: "B",
        createdBy: ACTOR,
        lpsVersionId: "lps:race-b",
      }),
    ]);

    const outcomes = [a, b];
    const wins = outcomes.filter((r) => r.ok);
    const conflicts = outcomes.filter(
      (r) => !r.ok && r.error.detailCode === "LPS_VERSION_CONFLICT",
    );
    expect(wins).toHaveLength(1);
    expect(conflicts).toHaveLength(1);
    expect(svc.store.lpsById.size).toBe(2);

    const current = await svc.lps.findCurrentByProjectId("prj:race");
    expect(current?.version).toBe(2);
    expect(current?.lpsVersionId).toBe(
      wins[0] && wins[0].ok ? wins[0].livingProjectState.lpsVersionId : "",
    );
  });

  it("rolls back append when LPS save fails after supersede", async () => {
    const svc = buildServices();
    await svc.createProject.execute({
      projectId: "prj:append-atomic",
      title: "Atomic",
      objective: "v1",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:append-atomic-v1",
    });
    svc.store.failNextSave = "lps";
    const result = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:append-atomic",
      expectedVersion: 1,
      objective: "v2",
      createdBy: ACTOR,
      lpsVersionId: "lps:append-atomic-v2",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");
    expect(await svc.lps.findById("lps:append-atomic-v2")).toBeNull();
    const prev = await svc.lps.findById("lps:append-atomic-v1");
    expect(prev?.status).toBe("active");
    expect(
      (await svc.projects.findById("prj:append-atomic"))?.currentLpsVersionId,
    ).toBe("lps:append-atomic-v1");
  });

  it("rolls back append when project update fails after LPS save", async () => {
    const svc = buildServices();
    await svc.createProject.execute({
      projectId: "prj:append-proj-fail",
      title: "Atomic",
      objective: "v1",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:append-proj-v1",
    });
    svc.store.failNextSave = "project";
    const result = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:append-proj-fail",
      expectedVersion: 1,
      objective: "v2",
      createdBy: ACTOR,
      lpsVersionId: "lps:append-proj-v2",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");
    expect(await svc.lps.findById("lps:append-proj-v2")).toBeNull();
    expect((await svc.lps.findById("lps:append-proj-v1"))?.status).toBe(
      "active",
    );
    expect(
      (await svc.projects.findById("prj:append-proj-fail"))?.currentLpsVersionId,
    ).toBe("lps:append-proj-v1");
  });

  it("keeps historical LPS immutable after append and caller mutation", async () => {
    const svc = buildServices();
    await svc.createProject.execute({
      projectId: "prj:hist-immut",
      title: "Hist",
      objective: "v1",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:hist-v1",
    });
    const appended = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:hist-immut",
      expectedVersion: 1,
      objective: "v2",
      createdBy: ACTOR,
      lpsVersionId: "lps:hist-v2",
    });
    expect(appended.ok).toBe(true);

    const hist = await svc.lps.findById("lps:hist-v1");
    expect(hist?.status).toBe("superseded");
    if (hist) hist.objective = "MUTATED_HIST";
    const hist2 = await svc.lps.findById("lps:hist-v1");
    expect(hist2?.objective).toBe("v1");
    expect(hist2?.status).toBe("superseded");
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
