/**
 * W1 — Confirmation SQLite durability.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  DEFAULT_PRODUCT_DOCTRINE_PIN,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
} from "@/lib/oa/project";
import { createTestSqliteCycleServices } from "@/lib/oa/cycle";
import {
  MemoryAuthorityResolver,
  createTestSqliteDecisionServices,
} from "@/lib/oa/decision";

const APP_ROOT = path.resolve(__dirname, "../../..");
const PRODUCT_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "decision_maker",
  displayName: "Morris",
  authorityLevel: "N3",
};

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w1-conf-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

async function boot(dbPath: string, createProject = true) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: PRODUCT_ROOT,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-22T12:00:00.000Z",
    dbPath,
  });
  openServices.push(projects);
  if (createProject) {
    await projects.createProject.execute({
      projectId: "prj:w1-conf",
      title: "Confirmation durability",
      objective: "obj",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:w1-conf-v1",
      idempotencyKey: "idem:w1-conf",
    });
  }
  const cycles = createTestSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
  });
  const authority = new MemoryAuthorityResolver();
  authority.register({
    evidenceId: "evd:morris-n3",
    actorId: "actor:morris",
    level: "N3",
    scope: "w1-scope",
    issuedAt: "2026-08-01T00:00:00.000Z",
    source: "registry",
    canActAsMorris: true,
  });
  const decisions = createTestSqliteDecisionServices({
    projectServices: projects,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
    fixedNowIso: "2026-08-22T12:00:00.000Z",
  });
  return { projects, decisions };
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

describe("W1 confirmation durability", () => {
  it("requested confirmation is process-local and absent after reopen", async () => {
    const dbPath = tempDbPath("conf-requested.sqlite");
    const { projects, decisions } = await boot(dbPath);
    const confirmationId = "cfm:w1-requested";
    const requested = await decisions.requestConfirmation.execute({
      confirmationId,
      level: "N3",
      scope: "w1-scope",
      actionRef: "act:prepare",
      requestedBy: ACTOR,
      requestedTo: ACTOR,
      idempotencyKey: "idem:cnf:w1-requested",
      expiresAt: "2026-12-31T23:59:59.000Z",
    });
    expect(requested.ok).toBe(true);
    const inMemory = await decisions.confirmations.findById(confirmationId);
    expect(inMemory?.status).toBe("requested");

    projects.dispose();
    openServices.pop();

    const { decisions: decisions2 } = await boot(dbPath, false);
    const afterRestart = await decisions2.confirmations.findById(confirmationId);
    expect(afterRestart).toBeNull();
  });

  it("persists granted confirmation across reopen and CAS-consumes once", async () => {
    const dbPath = tempDbPath("conf.sqlite");
    const { projects, decisions } = await boot(dbPath);
    const confirmationId = "cfm:w1-durable";
    await decisions.requestConfirmation.execute({
      confirmationId,
      level: "N3",
      scope: "w1-scope",
      actionRef: "act:prepare",
      requestedBy: ACTOR,
      requestedTo: ACTOR,
      idempotencyKey: "idem:cnf:w1",
      expiresAt: "2026-12-31T23:59:59.000Z",
    });
    const granted = await decisions.grantConfirmation.execute({
      confirmationId,
      actor: ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(granted.ok).toBe(true);
    projects.dispose();
    openServices.pop();

    const { decisions: decisions2 } = await boot(dbPath, false);
    const loaded = await decisions2.confirmations.findById(confirmationId);
    expect(loaded?.status).toBe("granted");
    expect(loaded?.status).not.toBe("consumed");

    const consumed = await decisions2.consumeConfirmation.execute({
      confirmationId,
      actor: ACTOR,
    });
    expect(consumed.ok).toBe(true);
    const second = await decisions2.consumeConfirmation.execute({
      confirmationId,
      actor: ACTOR,
    });
    expect(second.ok).toBe(false);
    if (second.ok) return;
    expect(second.error.detailCode).toBe("CONFIRMATION_ALREADY_CONSUMED");

    const afterConsume = await decisions2.confirmations.findById(confirmationId);
    expect(afterConsume?.status).toBe("consumed");
  });
});
