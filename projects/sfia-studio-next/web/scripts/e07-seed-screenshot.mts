import { config } from "dotenv";
config({ path: ".env.local" });
process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
delete process.env.STUDIO_DEV_HOLD_INITIAL_QUALIFICATION;

import { writeFileSync } from "fs";
import { eq } from "drizzle-orm";
import { db } from "../src/db/client.ts";
import { pilots, preparations } from "../src/db/schema.ts";
import { newId } from "../src/lib/ids.ts";
import {
  applyPreparationProjection,
  openOrCreatePreparation,
  updatePreview,
} from "../src/domains/preparation/service.ts";
import { draftProjectionFromQualification } from "../src/domains/preparation/projection.ts";
import { createProjectCommand } from "../src/domains/preparation/create-project.ts";
import {
  ensureInitialQualification,
  processInitialQualification,
} from "../src/domains/pilotage/initial-qualification.ts";
import {
  closeCycle,
  getPilotageProjection,
  openCycle,
  retainTrajectory,
} from "../src/domains/pilotage/service.ts";

async function pilotA() {
  const pilot =
    (
      await db
        .select()
        .from(pilots)
        .where(eq(pilots.displayName, "Pilot A (DEV)"))
        .limit(1)
    )[0] ?? null;
  if (!pilot) throw new Error("Pilot A (DEV) missing — run DEV login first");
  return pilot;
}

async function createNamedProject(
  pilotId: string,
  name: string,
  intention: string,
  opts: { process: boolean; qualifyProjection: boolean },
) {
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, name, intention);
  if (opts.qualifyProjection) {
    const draft = draftProjectionFromQualification({
      preparationId: prep.id,
      turnKey: `t-shot-${name.slice(0, 12)}`,
      qualificationStatus: "QUALIFIED",
      goal: intention,
      projectIntention: intention,
      desiredOutcome: "Rendre les décisions actionnables",
      proposedProjectName: name,
      allowGoalIntentionBootstrap: true,
    });
    if (!draft) throw new Error("draft missing");
    const refreshed = (
      await db.select().from(preparations).where(eq(preparations.id, prep.id))
    )[0]!;
    await applyPreparationProjection({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      draft,
    });
  }
  const after = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: after.creationRevision,
    projectName: name,
    previewSummary: after.previewSummary ?? "",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`create failed: ${JSON.stringify(created)}`);
  }
  await ensureInitialQualification({
    projectId: created.projectId,
    preparationId: prep.id,
    pilotId,
  });
  let iq = null;
  if (opts.process) {
    iq = await processInitialQualification(created.projectId, { pilotId, force: true });
  }
  return {
    projectId: created.projectId,
    prepId: prep.id,
    iqStatus: iq?.status ?? "PENDING",
  };
}

async function advanceToActiveFirstCycle(pilotId: string, projectId: string) {
  const before = await getPilotageProjection(pilotId, projectId);
  const proposedId = before.trajectory.proposed?.id;
  if (!proposedId) throw new Error("no proposed trajectory");
  const retained = await retainTrajectory(pilotId, projectId, {
    clientCommandKey: newId("idem"),
    expectedRevision: before.revision,
    sourceRef: newId("src"),
    trajectoryRevisionId: proposedId,
  });
  if (retained.status !== "APPLIED" && retained.status !== "ALREADY_APPLIED") {
    throw new Error(`retain failed: ${JSON.stringify(retained)}`);
  }
  const mid = await getPilotageProjection(pilotId, projectId);
  const opened = await openCycle(pilotId, projectId, {
    clientCommandKey: newId("idem"),
    expectedRevision: mid.revision,
    sourceRef: newId("src"),
    cycleType: "CADRAGE",
    objective: "Clarifier le besoin et le périmètre du premier cycle",
  });
  if (opened.status !== "APPLIED" && opened.status !== "ALREADY_APPLIED") {
    throw new Error(`open failed: ${JSON.stringify(opened)}`);
  }
  return getPilotageProjection(pilotId, projectId);
}

async function closeActiveAndLeaveBetween(pilotId: string, projectId: string) {
  const view = await getPilotageProjection(pilotId, projectId);
  if (!view.cycle) throw new Error("no active cycle to close");
  const closed = await closeCycle(pilotId, projectId, {
    clientCommandKey: newId("idem"),
    expectedRevision: view.revision,
    sourceRef: newId("src"),
    cycleId: view.cycle.id,
    balanceNote: "Cadrage clôturé avec acquis partiels — suite à qualifier.",
  });
  if (closed.status !== "APPLIED" && closed.status !== "ALREADY_APPLIED") {
    throw new Error(`close failed: ${JSON.stringify(closed)}`);
  }
  return getPilotageProjection(pilotId, projectId);
}

async function main() {
  const pilot = await pilotA();
  const stamp = Date.now().toString(36);

  const proposed = await createNamedProject(
    pilot.id,
    `Assistant de conduite ${stamp}`,
    "Cadrage puis conception fonctionnelle pour conduire les projets et clarifier les décisions",
    { process: true, qualifyProjection: true },
  );

  const analyzing = await createNamedProject(
    pilot.id,
    `Projet en qualification ${stamp}`,
    "Intention claire pour analyse en cours sans terminal immédiat, cadrage utile",
    { process: false, qualifyProjection: true },
  );

  const clarification = await createNamedProject(
    pilot.id,
    `Projet a preciser ${stamp}`,
    "x",
    { process: true, qualifyProjection: false },
  );

  // 09.09 — first ACTIVE, no CLOSED
  const firstActive = await createNamedProject(
    pilot.id,
    `Premier cycle actif ${stamp}`,
    "Cadrage d'une plateforme de suivi pour ouvrir le premier cycle",
    { process: true, qualifyProjection: true },
  );
  await advanceToActiveFirstCycle(pilot.id, firstActive.projectId);

  // 09.01 / 09.02 — CLOSED + ACTIVE + future
  const withHistory = await createNamedProject(
    pilot.id,
    `Projet avec historique ${stamp}`,
    "Cadrage puis conception fonctionnelle pour une trajectoire multi-cycles",
    { process: true, qualifyProjection: true },
  );
  await advanceToActiveFirstCycle(pilot.id, withHistory.projectId);
  await closeActiveAndLeaveBetween(pilot.id, withHistory.projectId);
  const afterClose = await getPilotageProjection(pilot.id, withHistory.projectId);
  const opened2 = await openCycle(pilot.id, withHistory.projectId, {
    clientCommandKey: newId("idem"),
    expectedRevision: afterClose.revision,
    sourceRef: newId("src"),
    cycleType: "CONCEPTION_FONCTIONNELLE",
    objective: "Décrire les décisions et parcours métier",
  });
  if (opened2.status !== "APPLIED" && opened2.status !== "ALREADY_APPLIED") {
    throw new Error(`open2 failed: ${JSON.stringify(opened2)}`);
  }

  // 09.08 — CLOSED only (between cycles)
  const between = await createNamedProject(
    pilot.id,
    `Entre deux cycles ${stamp}`,
    "Cadrage pour clôturer puis laisser la suite envisagée",
    { process: true, qualifyProjection: true },
  );
  await advanceToActiveFirstCycle(pilot.id, between.projectId);
  await closeActiveAndLeaveBetween(pilot.id, between.projectId);

  const payload = {
    pilotId: pilot.id,
    proposed,
    analyzing,
    clarification,
    firstActive,
    withHistory,
    between,
    urls: {
      projet06: `http://127.0.0.1:3100/projects/${proposed.projectId}?surface=projet`,
      projet01: `http://127.0.0.1:3100/projects/${withHistory.projectId}?surface=projet`,
      travail: `http://127.0.0.1:3100/projects/${proposed.projectId}?surface=travail`,
      traj11: `http://127.0.0.1:3100/projects/${proposed.projectId}?surface=pilotage`,
      traj10: `http://127.0.0.1:3100/projects/${analyzing.projectId}?surface=pilotage`,
      travailLock: `http://127.0.0.1:3100/projects/${analyzing.projectId}?surface=travail`,
      traj07: `http://127.0.0.1:3100/projects/${clarification.projectId}?surface=pilotage`,
      traj09: `http://127.0.0.1:3100/projects/${firstActive.projectId}?surface=pilotage`,
      traj02: `http://127.0.0.1:3100/projects/${withHistory.projectId}?surface=pilotage`,
      traj08: `http://127.0.0.1:3100/projects/${between.projectId}?surface=pilotage`,
      sasPrep: `http://127.0.0.1:3100/preparations/${analyzing.prepId}`,
    },
  };
  writeFileSync("/tmp/sfia-e07-shot-urls.json", JSON.stringify(payload, null, 2));
  console.log(JSON.stringify(payload, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
