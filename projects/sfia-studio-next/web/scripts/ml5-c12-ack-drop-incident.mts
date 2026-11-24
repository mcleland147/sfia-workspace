/**
 * C12 T-04 — DROP_ACK after SCRIPTED send via prepare→authorize→dispatch.
 * Oracle: AMBIGUOUS + priorSend + second dispatch refused.
 */
import { config } from "dotenv";
config({ path: ".env.local", override: true });

import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "../src/db/client";
import { effectAttempts, pilots, preparations } from "../src/db/schema";
import { priorSendMayHaveOccurred } from "../src/domains/execution/cursor-claim";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
  prepareCursorExecution,
} from "../src/domains/execution/cursor-attempt-service";
import { createTechnicalContract } from "../src/domains/execution/technical-contract";
import type { TechnicalContractBody } from "../src/domains/execution/types";
import { createProjectCommand } from "../src/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "../src/domains/preparation/service";
import { newId } from "../src/lib/ids";

const OUT = join(process.cwd(), "../../../.tmp-sfia-review/browser/c12");

const body: TechnicalContractBody = {
  title: "C12 ACK-drop incident",
  engagements: {
    willDo: "touch",
    willNotDo: "nothing external",
    expectedResult: "AMBIGUOUS after DROP_ACK",
    pilotControl: "D6",
  },
  volets: {
    mission: "T-04",
    perimeter: "SCRIPTED fault",
    capabilitiesAuthority: "SCRIPTED",
    stopConditions: "n/a",
    proofsSources: "n/a",
    integrity: "fp",
  },
  instructionText: "create ACKDROP.txt with OK",
  risks: [],
  exclusions: [],
  acceptance: { criteria: ["no double send"], expectedProofs: [] },
  executor: { kind: "CURSOR_SDK_LOCAL", capabilities: [], permissionsNeeded: [] },
  stopConditions: [],
  reversibilityLimits: [],
  gitScope: null,
};

async function main() {
  mkdirSync(OUT, { recursive: true });
  process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
  process.env.SFIA_CURSOR_SCRIPTED_PHASED = "0";
  process.env.SFIA_CURSOR_FAULT_AFTER_SEND = "DROP_ACK";
  process.env.SFIA_CURSOR_WORKSPACE_ROOT =
    process.env.SFIA_CURSOR_WORKSPACE_ROOT || "/tmp/sfia-c12-cursor-live-ws";

  const pilot = (
    await db.select().from(pilots).where(eq(pilots.githubUserId, "dev-github-a")).limit(1)
  )[0];
  if (!pilot) throw new Error("no pilot");
  const prepForContract = await openOrCreatePreparation(pilot.id);
  const projectName = `C12-ACKDROP-${newId("nm").slice(-6)}`;
  await updatePreview(pilot.id, prepForContract.id, projectName, "incident");
  const refreshed2 = (
    await db
      .select()
      .from(preparations)
      .where(eq(preparations.id, prepForContract.id))
  )[0]!;
  const proj = await createProjectCommand({
    pilotId: pilot.id,
    preparationId: prepForContract.id,
    expectedCreationRevision: refreshed2.creationRevision,
    projectName,
    previewSummary: "ack drop",
    idempotencyKey: newId("idem"),
  });
  if (
    (proj.status !== "CREATED" && proj.status !== "ALREADY_CREATED") ||
    !("projectId" in proj) ||
    !proj.projectId
  ) {
    throw new Error(`no project: ${JSON.stringify(proj)}`);
  }

  const contract = await createTechnicalContract({
    pilotId: pilot.id,
    projectId: proj.projectId,
    preparationId: prepForContract.id,
    contractKey: `ackdrop-${newId("ck").slice(-6)}`,
    body,
    markReady: true,
    sourcesSufficient: true,
    unknownRestrictions: [],
  });

  const prepared = await prepareCursorExecution({
    pilotId: pilot.id,
    projectId: proj.projectId,
    contractId: contract.contractId,
    correlationKey: `ackdrop-${Date.now()}`,
    workspaceKey: "default",
  });

  await authorizeCursorExecution({
    pilotId: pilot.id,
    projectId: proj.projectId,
    attemptId: prepared.attemptId,
    statement: "Oui ACKDROP",
    inspectedFingerprint: contract.fingerprint,
    confirmed: true,
  });

  let dispatchErr: string | null = null;
  try {
    await dispatchCursorExecution({
      pilotId: pilot.id,
      projectId: proj.projectId,
      attemptId: prepared.attemptId,
    });
  } catch (e) {
    dispatchErr = String((e as Error)?.message ?? e);
  }

  const attempt = (
    await db
      .select()
      .from(effectAttempts)
      .where(eq(effectAttempts.id, prepared.attemptId))
      .limit(1)
  )[0];

  const prior = priorSendMayHaveOccurred(attempt?.resultJson);
  let secondOk = false;
  let secondErr: string | null = null;
  try {
    await dispatchCursorExecution({
      pilotId: pilot.id,
      projectId: proj.projectId,
      attemptId: prepared.attemptId,
    });
    secondOk = true;
  } catch (e) {
    secondErr = String((e as Error)?.message ?? e);
  }

  const result = {
    attemptId: prepared.attemptId,
    status: attempt?.status,
    dispatchErr,
    priorSendMayHaveOccurred: prior,
    secondDispatchSucceeded: secondOk,
    secondErr,
    oracle:
      attempt?.status === "AMBIGUOUS" && prior && !secondOk ? "PASS" : "FAIL",
  };
  writeFileSync(join(OUT, "ack-drop-incident.json"), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  delete process.env.SFIA_CURSOR_FAULT_AFTER_SEND;
  if (result.oracle !== "PASS") process.exit(1);
}

main().catch((e) => {
  console.error(e);
  delete process.env.SFIA_CURSOR_FAULT_AFTER_SEND;
  process.exit(1);
});
