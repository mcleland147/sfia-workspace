/**
 * Child-process worker for M2 restart proof (invoked via tsx).
 * Usage: tsx m2RestartProcessWorker.ts <create|read> <dbPath> <projectId>
 */
import path from "node:path";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
} from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";

const APP_ROOT = process.cwd();
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

async function main(): Promise<void> {
  const [, , mode, dbPath, projectId] = process.argv;
  if (!mode || !dbPath || !projectId) {
    throw new Error("usage: <create|read> <dbPath> <projectId>");
  }

  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T11:00:00.000Z",
    dbPath,
  });
  const cycles = createSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
  });

  try {
    if (mode === "create") {
      const created = await projects.createProject.execute({
        projectId,
        title: "M2 Process Restart",
        objective: "m2-process-restart-objective",
        context: "m2-process-restart-context",
        scope: "m2-process-restart-scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: ACTOR,
        lpsVersionId: "lps:m2-proc-v1",
        idempotencyKey: `idem:${projectId}`,
      });
      if (!created.ok) {
        console.error(JSON.stringify(created.error));
        process.exit(2);
      }

      const cycle = await cycles.createCycle.execute({
        cycleInstanceId: "cyc:m2-proc-1",
        cycleTypeId: "cyc:delivery",
        projectId,
        signals: {},
        createdBy: ACTOR,
        linkAsActiveCycle: true,
        expectedLpsVersion: 1,
        ckcResolutionRef: "ckc:m2-proc-bind",
        correlationId: "cor:m2-proc",
      });
      if (!cycle.ok) {
        console.error(JSON.stringify(cycle.error));
        process.exit(3);
      }

      const lps = await projects.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps.ok) {
        process.exit(4);
      }

      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          projectId,
          cycleInstanceId: cycle.cycle.cycleInstanceId,
          cycleTypeId: cycle.cycle.cycleTypeId,
          profile: cycle.cycle.profile,
          status: cycle.cycle.status,
          lpsVersion: lps.livingProjectState.version,
          lpsId: lps.livingProjectState.lpsVersionId,
          activeCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
          ckcResolutionRef: lps.livingProjectState.ckcResolutionRef,
          digest: lps.livingProjectState.doctrinePackageRef.digest,
        })}\n`,
      );
      return;
    }

    if (mode === "read") {
      const project = await projects.getProject.execute({ projectId });
      const lps = await projects.getCurrentLivingProjectState.execute({
        projectId,
      });
      const cycle = await cycles.cycles.findById("cyc:m2-proc-1");
      if (!project.ok || !lps.ok || !cycle) {
        process.stdout.write(`${JSON.stringify({ ok: false })}\n`);
        process.exit(5);
      }
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          projectId: project.project.projectId,
          cycleInstanceId: cycle.cycleInstanceId,
          cycleTypeId: cycle.cycleTypeId,
          profile: cycle.profile,
          status: cycle.status,
          lpsVersion: lps.livingProjectState.version,
          lpsId: lps.livingProjectState.lpsVersionId,
          activeCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
          ckcResolutionRef: lps.livingProjectState.ckcResolutionRef,
          digest: lps.livingProjectState.doctrinePackageRef.digest,
          doctrinePackageId:
            lps.livingProjectState.doctrinePackageRef.doctrinePackageId,
        })}\n`,
      );
      return;
    }

    throw new Error(`unknown mode ${mode}`);
  } finally {
    projects.dispose();
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.stack : String(err));
  process.exit(1);
});
