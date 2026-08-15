/**
 * M5-B W1 — LPS factual evidenceIds / reviewBundleIds append + carry-forward.
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
import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";
import {
  SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
  SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID,
} from "@/features/project-assistant/f3/systemFactualWriter";
import { LOCAL_MORRIS_ACTOR } from "@/features/project-assistant/f2/recordDecision";

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

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-w1-"));
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
    fixedNowIso: "2026-08-15T09:30:00.000Z",
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

describe("M5 W1 LPS evidence/RB append", () => {
  it("appends evidenceIds and reviewBundleIds factually", async () => {
    const dbPath = tempDbPath("w1.sqlite");
    const projects = openProjects(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m5-w1",
      title: "M5 W1",
      objective: "m5-w1-objective",
      context: "m5-w1-context",
      scope: "m5-w1-scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m5-w1-v1",
      idempotencyKey: "idem:m5-w1",
    });

    const linked = await appendEvidenceOutcomeToLps({
      projectId: "prj:m5-w1",
      evidenceId: "ev:m5-w1",
      reviewBundleId: "rb:m5-w1",
      projectServices: projects,
    });
    expect(linked.ok).toBe(true);
    if (!linked.ok) return;
    expect(linked.lpsVersion).toBe(2);

    const lps = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m5-w1",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.evidenceIds).toEqual(["ev:m5-w1"]);
    expect(lps.livingProjectState.reviewBundleIds).toEqual(["rb:m5-w1"]);
  });

  it("uses system factual writer provenance (not Morris)", async () => {
    const dbPath = tempDbPath("w1-prov.sqlite");
    const projects = openProjects(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m5-w1-prov",
      title: "M5 W1 provenance",
      objective: "m5-w1-prov-objective",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m5-w1-prov-v1",
      idempotencyKey: "idem:m5-w1-prov",
    });

    const seeded = await projects.appendLivingProjectStateVersion.execute({
      projectId: "prj:m5-w1-prov",
      expectedVersion: 1,
      objective: "m5-w1-prov-objective",
      createdBy: ACTOR,
      decisionIds: ["dec:keep"],
      trajectoryId: "trj:keep",
      trajectoryVersion: 3,
    });
    expect(seeded.ok).toBe(true);
    if (!seeded.ok) return;

    const linked = await appendEvidenceOutcomeToLps({
      projectId: "prj:m5-w1-prov",
      evidenceId: "ev:m5-w1-prov",
      reviewBundleId: "rb:m5-w1-prov",
      projectServices: projects,
    });
    expect(linked.ok).toBe(true);
    if (!linked.ok) return;

    const lps = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m5-w1-prov",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const state = lps.livingProjectState;
    expect(state.createdBy.role).toBe("system");
    expect(state.createdBy.authorityLevel).toBe("none");
    expect(state.createdBy.actorId).toBe(SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID);
    expect(state.createdBy.actorId).not.toBe(LOCAL_MORRIS_ACTOR.actorId);
    expect(state.createdBy.actorId).toBe(
      SFIA_STUDIO_SYSTEM_FACTUAL_WRITER.actorId,
    );
    expect(state.provenance?.actor.role).toBe("system");
    expect(state.provenance?.actor.actorId).toBe(
      SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID,
    );
    expect(state.decisionIds).toEqual(["dec:keep"]);
    expect(state.trajectoryId).toBe("trj:keep");
    expect(state.trajectoryVersion).toBe(3);
    expect(state.evidenceIds).toEqual(["ev:m5-w1-prov"]);
    expect(state.reviewBundleIds).toEqual(["rb:m5-w1-prov"]);
  });

  it("preserves evidenceIds/reviewBundleIds when omitted on later append", async () => {
    const dbPath = tempDbPath("carry.sqlite");
    const projects = openProjects(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m5-carry",
      title: "M5 carry",
      objective: "carry-objective",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m5-carry-v1",
      idempotencyKey: "idem:m5-carry",
    });

    await appendEvidenceOutcomeToLps({
      projectId: "prj:m5-carry",
      evidenceId: "ev:keep",
      reviewBundleId: "rb:keep",
      projectServices: projects,
    });

    const appended = await projects.appendLivingProjectStateVersion.execute({
      projectId: "prj:m5-carry",
      expectedVersion: 2,
      objective: "carry-objective-v3",
      createdBy: ACTOR,
      decisionIds: ["dec:1"],
    });
    expect(appended.ok).toBe(true);
    if (!appended.ok) return;
    expect(appended.livingProjectState.evidenceIds).toEqual(["ev:keep"]);
    expect(appended.livingProjectState.reviewBundleIds).toEqual(["rb:keep"]);
    expect(appended.livingProjectState.decisionIds).toEqual(["dec:1"]);
  });
});
