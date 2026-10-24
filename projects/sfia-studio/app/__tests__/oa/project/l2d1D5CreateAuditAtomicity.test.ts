/**
 * L2-D1 / D5 — CreateProject success audit joins Product UnitOfWork.
 * Oracles Q5.1–Q5.7 (deterministic, temp SQLite only).
 * CORR-01: Q5.3 observes node:sqlite DatabaseSync.isTransaction during success
 * append; Q5.4 covers audit-failure → rollback → clean retry → single create.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  FixedClock,
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  CreateProject,
  createTestSqliteProductProjectServices,
  SqliteProjectAuditJournal,
  type ActorReference,
  type ProjectAuditEvent,
  type ProjectAuditJournalPort,
  type SqliteProductProjectServices,
  type SqliteProductStore,
} from "@/lib/oa/project";
import { createLocalVerticalSliceServices } from "@/lib/vertical-slice-core";

/** node:sqlite DatabaseSync exposes isTransaction (runtime); narrow for tests. */
function sqliteIsTransaction(store: SqliteProductStore): boolean {
  return (store.db as { isTransaction?: boolean }).isTransaction === true;
}

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");

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

const tempDirs: string[] = [];
const openServices: SqliteProductProjectServices[] = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-l2d1-d5-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function buildSqliteServices(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-10-24T08:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

class ThrowingAuditJournal implements ProjectAuditJournalPort {
  constructor(
    private readonly inner: ProjectAuditJournalPort,
    private readonly shouldThrow: () => boolean,
  ) {}
  append(event: ProjectAuditEvent): void {
    if (this.shouldThrow()) {
      throw new Error("forced_audit_append_failure");
    }
    this.inner.append(event);
  }
}

/**
 * Observes whether the Product SQLite connection is inside an open transaction
 * at the moment a contractual success create-audit is appended, then delegates
 * to the real SqliteProjectAuditJournal (no fake txn boolean).
 */
class TransactionObservingAuditJournal implements ProjectAuditJournalPort {
  readonly observations: Array<{
    event: ProjectAuditEvent;
    isTransaction: boolean;
  }> = [];

  constructor(
    private readonly inner: ProjectAuditJournalPort,
    private readonly store: SqliteProductStore,
  ) {}

  append(event: ProjectAuditEvent): void {
    const isTxn = sqliteIsTransaction(this.store);
    this.observations.push({ event, isTransaction: isTxn });
    this.inner.append(event);
  }

  successCreateObservations() {
    return this.observations.filter(
      (o) =>
        o.event.event === "oa.project.created" &&
        o.event.result === "ok" &&
        !("reusedFromIdempotencyKey" in o.event && o.event.reusedFromIdempotencyKey),
    );
  }
}

afterEach(() => {
  while (openServices.length) {
    const svc = openServices.pop();
    try {
      svc?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("L2-D1 D5 CreateProject audit atomicity", () => {
  it("Q5.1 — create success + durable oa.project.created", async () => {
    const dbPath = tempDbPath("q51.sqlite");
    const svc = buildSqliteServices(dbPath);
    const created = await svc.createProject.execute({
      projectId: "prj:d5-q51",
      title: "D5 Q51",
      objective: "durable audit with create",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:d5-q51",
      lpsVersionId: "lps:d5-q51",
      idempotencyKey: "idem:d5-q51",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const events = (svc.audit as SqliteProjectAuditJournal).listAll();
    const okCreate = events.filter(
      (e) =>
        e.event === "oa.project.created" &&
        e.result === "ok" &&
        e.projectId === "prj:d5-q51",
    );
    expect(okCreate.length).toBe(1);

    svc.dispose();
    const svc2 = buildSqliteServices(dbPath);
    const got = await svc2.getProject.execute({ projectId: "prj:d5-q51" });
    expect(got.ok).toBe(true);
    const events2 = (svc2.audit as SqliteProjectAuditJournal).listAll();
    expect(
      events2.some(
        (e) =>
          e.event === "oa.project.created" && e.projectId === "prj:d5-q51",
      ),
    ).toBe(true);
  });

  it("Q5.2 — audit failure inside txn: no partial Project", async () => {
    const dbPath = tempDbPath("q52.sqlite");
    const { resolver } = createTestDoctrineResolver({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
    });
    const base = createTestSqliteProductProjectServices({
      doctrineResolver: resolver,
      fixedNowIso: "2026-10-24T08:00:00.000Z",
      dbPath,
    });
    openServices.push(base);
    let failAudit = false;
    const throwing = new ThrowingAuditJournal(base.audit, () => failAudit);
    const create = new CreateProject(
      base.projects,
      base.lps,
      resolver,
      new FixedClock("2026-10-24T08:00:00.000Z"),
      throwing,
      base.store,
    );

    failAudit = true;
    const result = await create.execute({
      projectId: "prj:d5-q52",
      title: "D5 Q52",
      objective: "audit fails in txn",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:d5-q52",
      lpsVersionId: "lps:d5-q52",
      idempotencyKey: "idem:d5-q52",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");

    const got = await base.getProject.execute({ projectId: "prj:d5-q52" });
    expect(got.ok).toBe(false);

    base.dispose();
    const reopen = buildSqliteServices(dbPath);
    const got2 = await reopen.getProject.execute({ projectId: "prj:d5-q52" });
    expect(got2.ok).toBe(false);
    const durable = (reopen.audit as SqliteProjectAuditJournal)
      .listAll()
      .filter(
        (e) =>
          e.event === "oa.project.created" &&
          e.result === "ok" &&
          "projectId" in e &&
          e.projectId === "prj:d5-q52",
      );
    expect(durable.length).toBe(0);
  });

  it("Q5.3 — success audit append observed inside Product SQLite transaction", async () => {
    // CR-D1-02: observe DatabaseSync.isTransaction at contractual success append
    // (node:sqlite equivalent of better-sqlite3 inTransaction). Not a fake flag.
    const dbPath = tempDbPath("q53.sqlite");
    const { resolver } = createTestDoctrineResolver({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
    });
    const base = createTestSqliteProductProjectServices({
      doctrineResolver: resolver,
      fixedNowIso: "2026-10-24T08:00:00.000Z",
      dbPath,
    });
    openServices.push(base);
    const observing = new TransactionObservingAuditJournal(base.audit, base.store);
    const create = new CreateProject(
      base.projects,
      base.lps,
      resolver,
      new FixedClock("2026-10-24T08:00:00.000Z"),
      observing,
      base.store,
    );

    expect(sqliteIsTransaction(base.store)).toBe(false);

    const created = await create.execute({
      projectId: "prj:d5-q53",
      title: "D5 Q53",
      objective: "txn boundary proof",
      context: "ctx-q53",
      scope: "scope-q53",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:d5-q53",
      lpsVersionId: "lps:d5-q53",
      idempotencyKey: "idem:d5-q53",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    // Transaction must be closed after create returns.
    expect(sqliteIsTransaction(base.store)).toBe(false);

    const successObs = observing.successCreateObservations();
    expect(successObs.length).toBe(1);
    const firstSuccess = successObs[0];
    expect(firstSuccess?.isTransaction).toBe(true);
    expect(firstSuccess?.event.correlationId).toBe("cor:d5-q53");
    expect(
      firstSuccess &&
        "projectId" in firstSuccess.event &&
        firstSuccess.event.projectId,
    ).toBe("prj:d5-q53");

    const got = await base.getProject.execute({ projectId: "prj:d5-q53" });
    expect(got.ok).toBe(true);
    const lps = await base.getCurrentLivingProjectState.execute({
      projectId: "prj:d5-q53",
    });
    expect(lps.ok).toBe(true);
    if (lps.ok) {
      expect(lps.livingProjectState.version).toBe(1);
      expect(lps.livingProjectState.lpsVersionId).toBe("lps:d5-q53");
    }

    const durableOk = (base.audit as SqliteProjectAuditJournal)
      .listAll()
      .filter(
        (e) =>
          e.event === "oa.project.created" &&
          e.result === "ok" &&
          e.projectId === "prj:d5-q53",
      );
    expect(durableOk.length).toBe(1);
    expect(durableOk[0]?.correlationId).toBe("cor:d5-q53");

    base.dispose();
    const reopen = buildSqliteServices(dbPath);
    const got2 = await reopen.getProject.execute({ projectId: "prj:d5-q53" });
    expect(got2.ok).toBe(true);
    const events2 = (reopen.audit as SqliteProjectAuditJournal).listAll();
    expect(
      events2.some(
        (e) =>
          e.event === "oa.project.created" &&
          e.result === "ok" &&
          e.projectId === "prj:d5-q53" &&
          e.correlationId === "cor:d5-q53",
      ),
    ).toBe(true);
  });

  it("Q5.4 — audit failure rollback then clean retry → single durable create", async () => {
    // CR-D1-01: FAILED CONTRACTUAL AUDIT → ATOMIC ROLLBACK → CLEAN RETRY →
    // DURABLE SINGLE CREATE (not merely success→retry→reuse).
    const dbPath = tempDbPath("q54.sqlite");
    const { resolver } = createTestDoctrineResolver({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
    });
    const base = createTestSqliteProductProjectServices({
      doctrineResolver: resolver,
      fixedNowIso: "2026-10-24T08:00:00.000Z",
      dbPath,
    });
    openServices.push(base);
    let failAudit = false;
    const throwing = new ThrowingAuditJournal(base.audit, () => failAudit);
    const create = new CreateProject(
      base.projects,
      base.lps,
      resolver,
      new FixedClock("2026-10-24T08:00:00.000Z"),
      throwing,
      base.store,
    );

    const req = {
      projectId: "prj:d5-q54",
      title: "D5 Q54",
      objective: "fail then retry",
      context: "ctx-q54",
      scope: "scope-q54",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:d5-q54-attempt1",
      lpsVersionId: "lps:d5-q54",
      idempotencyKey: "idem:d5-q54",
    };

    failAudit = true;
    const failed = await create.execute(req);
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.error.detailCode).toBe("PERSISTENCE_FAILURE");

    expect((await base.getProject.execute({ projectId: "prj:d5-q54" })).ok).toBe(
      false,
    );
    expect(
      (
        await base.getCurrentLivingProjectState.execute({
          projectId: "prj:d5-q54",
        })
      ).ok,
    ).toBe(false);
    expect(await base.projects.findIdempotency("idem:d5-q54")).toBeNull();

    const afterFail = (base.audit as SqliteProjectAuditJournal).listAll();
    const successAfterFail = afterFail.filter(
      (e) =>
        e.event === "oa.project.created" &&
        e.result === "ok" &&
        e.projectId === "prj:d5-q54",
    );
    expect(successAfterFail.length).toBe(0);
    // Best-effort failure audit may exist; do not treat as contractual success.

    failAudit = false;
    const recovered = await create.execute({
      ...req,
      correlationId: "cor:d5-q54-attempt2",
    });
    expect(recovered.ok).toBe(true);
    if (!recovered.ok) return;
    expect(recovered.reusedFromIdempotencyKey).toBeFalsy();
    expect(recovered.project.projectId).toBe("prj:d5-q54");
    expect(recovered.livingProjectState.version).toBe(1);
    expect(recovered.livingProjectState.lpsVersionId).toBe("lps:d5-q54");
    expect(await base.projects.findIdempotency("idem:d5-q54")).toBe(
      "prj:d5-q54",
    );

    const afterSuccess = (base.audit as SqliteProjectAuditJournal).listAll();
    const createOkEvents = afterSuccess.filter(
      (e) =>
        e.event === "oa.project.created" &&
        e.result === "ok" &&
        e.projectId === "prj:d5-q54" &&
        !("reusedFromIdempotencyKey" in e && e.reusedFromIdempotencyKey),
    );
    expect(createOkEvents.length).toBe(1);
    expect(createOkEvents[0]?.correlationId).toBe("cor:d5-q54-attempt2");

    const reused = await create.execute({
      ...req,
      correlationId: "cor:d5-q54-reuse",
    });
    expect(reused.ok).toBe(true);
    if (!reused.ok) return;
    expect(reused.reusedFromIdempotencyKey).toBe(true);

    const listed = await base.listProjects.execute({});
    expect(listed.ok).toBe(true);
    if (listed.ok) {
      const matches = listed.projects.filter((p) => p.projectId === "prj:d5-q54");
      expect(matches.length).toBe(1);
    }
    const lpsAgain = await base.getCurrentLivingProjectState.execute({
      projectId: "prj:d5-q54",
    });
    expect(lpsAgain.ok).toBe(true);
    if (lpsAgain.ok) {
      expect(lpsAgain.livingProjectState.version).toBe(1);
      expect(lpsAgain.livingProjectState.lpsVersionId).toBe("lps:d5-q54");
    }

    const finalEvents = (base.audit as SqliteProjectAuditJournal).listAll();
    const effectiveCreates = finalEvents.filter(
      (e) =>
        e.event === "oa.project.created" &&
        e.result === "ok" &&
        e.projectId === "prj:d5-q54" &&
        !("reusedFromIdempotencyKey" in e && e.reusedFromIdempotencyKey),
    );
    expect(effectiveCreates.length).toBe(1);

    base.dispose();
    const reopen = buildSqliteServices(dbPath);
    expect((await reopen.getProject.execute({ projectId: "prj:d5-q54" })).ok).toBe(
      true,
    );
    expect(await reopen.projects.findIdempotency("idem:d5-q54")).toBe(
      "prj:d5-q54",
    );
    const reopenOk = (reopen.audit as SqliteProjectAuditJournal)
      .listAll()
      .filter(
        (e) =>
          e.event === "oa.project.created" &&
          e.result === "ok" &&
          e.projectId === "prj:d5-q54" &&
          !("reusedFromIdempotencyKey" in e && e.reusedFromIdempotencyKey),
      );
    expect(reopenOk.length).toBe(1);
  });

  it("Q5.5 — restart: Project/LPS/audit coherent", async () => {
    const dbPath = tempDbPath("q55.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    const created = await svc1.createProject.execute({
      projectId: "prj:d5-q55",
      title: "D5 Q55",
      objective: "restart",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:d5-q55",
      lpsVersionId: "lps:d5-q55",
      idempotencyKey: "idem:d5-q55",
    });
    expect(created.ok).toBe(true);
    svc1.dispose();

    const svc2 = buildSqliteServices(dbPath);
    const got = await svc2.getProject.execute({ projectId: "prj:d5-q55" });
    expect(got.ok).toBe(true);
    const lps = await svc2.getCurrentLivingProjectState.execute({
      projectId: "prj:d5-q55",
    });
    expect(lps.ok).toBe(true);
    const audits = (svc2.audit as SqliteProjectAuditJournal).listAll();
    expect(
      audits.some(
        (e) =>
          e.event === "oa.project.created" &&
          e.result === "ok" &&
          e.projectId === "prj:d5-q55",
      ),
    ).toBe(true);
  });

  it("Q5.6 — concurrent double create same id: one wins", async () => {
    const dbPath = tempDbPath("q56.sqlite");
    const svc = buildSqliteServices(dbPath);
    const mk = (suffix: string) =>
      svc.createProject.execute({
        projectId: "prj:d5-q56",
        title: "D5 Q56",
        objective: "race",
        context: "ctx",
        scope: "scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: ACTOR,
        correlationId: `cor:d5-q56-${suffix}`,
        lpsVersionId: `lps:d5-q56-${suffix}`,
        idempotencyKey: `idem:d5-q56-${suffix}`,
      });
    const [a, b] = await Promise.all([mk("a"), mk("b")]);
    const oks = [a, b].filter((r) => r.ok);
    const fails = [a, b].filter((r) => !r.ok);
    expect(oks.length).toBe(1);
    expect(fails.length).toBe(1);
    if (!fails[0] || fails[0].ok) return;
    expect(fails[0].error.detailCode).toBe("PROJECT_ALREADY_EXISTS");
  });

  it("Q5.7 — Studio composition defaults durable OA audit (not Memory)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-l2d1-compose-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa-product.sqlite");
    const services = createLocalVerticalSliceServices({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS,
      nowIso: "2026-10-24T08:00:00.000Z",
      productDbPath: dbPath,
    });
    expect(services.projectServices.audit).toBeInstanceOf(
      SqliteProjectAuditJournal,
    );
    const created = await services.facade.createProject({
      name: "Compose D5",
      objective: "studio path durable audit",
      context: "composition context for local project create",
      perceivedCriticality: "STANDARD",
      constraints: [],
      shortReference: "D5",
      idempotencyKey: "idem:compose-d5",
    });
    expect(created.ok).toBe(true);
    const journal = services.projectServices.audit as SqliteProjectAuditJournal;
    expect(
      journal.listAll().some((e) => e.event === "oa.project.created"),
    ).toBe(true);
    services.projectServices.dispose?.();
  });
});
