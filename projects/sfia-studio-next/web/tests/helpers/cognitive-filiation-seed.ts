/**
 * Shared seed for PG tests that need READY contract + cognitive filiation (C19+).
 */
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { cognitiveWorks, pilots, preparations } from "@/db/schema";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
} from "@/domains/conversation/investigation-state";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { newId } from "@/lib/ids";

export async function seedPilotProjectWithCognitiveFiliation(
  label = `seed-${newId("nm").slice(-8)}`,
) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (
    (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") ||
    !("projectId" in created) ||
    !created.projectId
  ) {
    throw new Error(`seed fail: ${JSON.stringify(created)}`);
  }
  const projectId = created.projectId;
  const inv = evaluateContractReadiness({
    ...createEmptyInvestigation(label),
    desiredOutcome: "contrat applicable",
    questions: [
      {
        id: "q1",
        text: "Cible ?",
        status: "ANSWERED",
        importance: "DETERMINANT",
        answerSummary: "sandbox",
      },
    ],
    sources: [{ kind: "GIT", ref: "local@deadbeef", coverage: "VERIFIED" }],
    contradictions: [],
  });
  const workId = newId("cgw");
  const revision = 1;
  await db.insert(cognitiveWorks).values({
    id: workId,
    ownerPilotId: pilotId,
    preparationId: prep.id,
    projectId,
    status: "COMPLETE",
    revision,
    objective: label,
    expectedOutcome: inv.desiredOutcome,
    stateJson: JSON.stringify({
      ...inv,
      cognitiveWorkId: workId,
      cognitiveRevision: revision,
    }),
    resourcesJson: JSON.stringify({
      tokensUsed: 10,
      tokensBudget: 50_000,
      toolCalls: 1,
      toolCallBudget: 40,
    }),
    productionJson: JSON.stringify({
      kind: "DOCUMENT",
      status: "COMPLETE",
      contentMarkdown: "# ok",
    }),
  });
  return {
    pilotId,
    projectId,
    preparationId: prep.id,
    cognitiveWorkId: workId,
    cognitiveRevision: revision,
  };
}
