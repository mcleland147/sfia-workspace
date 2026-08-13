/**
 * Child-process worker for M1 restart proof (invoked via tsx).
 * Usage: tsx m1RestartProcessWorker.ts <create|read> <dbPath> <projectId>
 */
import path from "node:path";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import { createTestSqliteProductProjectServices } from "@/lib/oa/project";

/** Spawn sets cwd to projects/sfia-studio/app */
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

async function main(): Promise<void> {
  const [, , mode, dbPath, projectId] = process.argv;
  if (!mode || !dbPath || !projectId) {
    throw new Error("usage: <create|read> <dbPath> <projectId>");
  }

  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T06:30:00.000Z",
    dbPath,
  });

  try {
    if (mode === "create") {
      const result = await svc.createProject.execute({
        projectId,
        title: "Process Restart",
        objective: "process-restart-objective",
        context: "process-restart-context",
        scope: "process-restart-scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: {
          actorId: "actor:morris",
          role: "project_owner",
          displayName: "Morris",
          authorityLevel: "N3",
        },
        lpsVersionId: "lps:m1-proc-v1",
        idempotencyKey: `idem:${projectId}`,
      });
      if (!result.ok) {
        console.error(JSON.stringify(result.error));
        process.exit(2);
      }
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          currentLpsVersionId: result.project.currentLpsVersionId,
          digest: result.livingProjectState.doctrinePackageRef.digest,
          context: result.livingProjectState.context,
        })}\n`,
      );
      return;
    }

    if (mode === "read") {
      const project = await svc.getProject.execute({ projectId });
      const lps = await svc.getCurrentLivingProjectState.execute({ projectId });
      if (!project.ok || !lps.ok) {
        process.stdout.write(`${JSON.stringify({ ok: false })}\n`);
        process.exit(3);
      }
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          projectId: project.project.projectId,
          currentLpsVersionId: project.project.currentLpsVersionId,
          version: lps.livingProjectState.version,
          objective: lps.livingProjectState.objective,
          context: lps.livingProjectState.context,
          scope: lps.livingProjectState.scope,
          digest: lps.livingProjectState.doctrinePackageRef.digest,
          doctrinePackageId:
            lps.livingProjectState.doctrinePackageRef.doctrinePackageId,
          doctrineVersion: lps.livingProjectState.doctrinePackageRef.version,
        })}\n`,
      );
      return;
    }

    throw new Error(`unknown mode ${mode}`);
  } finally {
    svc.dispose();
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.stack : String(err));
  process.exit(1);
});
