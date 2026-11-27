/**
 * E1 B.7 cognitive reuse + B.8 owner projection coherence (PG).
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  capitalizeAcquis,
  ensureSubject,
  openPoint,
  selectRelevantKnowledgeContext,
} from "@/domains/knowledge/service";
import { getJournalProjection } from "@/domains/knowledge/journal";
import { savePreparationDocument } from "@/domains/document/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { getOwnedProjectContext } from "@/domains/preparation/project-context";
import { openKnowledgePoints } from "@/domains/preparation/project-activity-projection";
import {
  CONTINUATION_KNOWLEDGE_OMIT_MARKER,
  resolveContinuationKnowledgeSnippets,
} from "@/domains/conversation/segment-context-efficiency";
import { insertHumanDecision, markDecisionState } from "@/domains/decisions/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedLinkedProject(pilotId: string, name: string) {
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, name, "e1-b7-b8");
  const { preparations } = await import("@/db/schema");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "e1-b7-b8",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`project create failed: ${created.status}`);
  }
  return { prep, projectId: created.projectId! };
}

describe("E1 B.7/B.8 continuity (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    delete process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
  });

  it("B.7 — capitalise then PREFERRED selection + continuation omit without losing target", async () => {
    const pilotId = await seedPilot("e1-b7-reuse");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Réutilisation cognitive");
    const subj = await ensureSubject(pilotId, prep.id, "Intégration Git");
    const acq = await capitalizeAcquis(pilotId, prep.id, {
      statement:
        "La connexion GitHub est obligatoire pour toute livraison sur le dépôt MaintiPlan.",
      kind: "FACT",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "pilot", sourceId: "b7-seed", epistemic: "established" },
    });
    expect(acq.status).toBe("AVAILABLE");
    const pt = await openPoint(pilotId, prep.id, {
      statement: "Quelle branche protégée pour la release MaintiPlan ?",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-b7" },
    });
    expect(pt.status).toBe("AVAILABLE");

    const selected = await selectRelevantKnowledgeContext(
      pilotId,
      prep.id,
      "Je reprends le fil sur GitHub et la branche de release",
      {
        projectId,
        preferredAcquisIds: [acq.acquisId!],
        preferredOpenPointIds: [pt.openPointId!],
        preferredSubjectIds: [subj.subjectId!],
        limit: 8,
      },
    );
    expect(
      selected.selectionMethod === "semantic-preferred-then-bounded" ||
        selected.selectionMethod === "reactivation-then-preferred-bounded",
    ).toBe(true);
    expect(
      selected.snippets.some(
        (s) => s.includes(acq.acquisId!) && s.includes("/PREFERRED]"),
      ),
    ).toBe(true);
    expect(
      selected.snippets.some(
        (s) =>
          s.includes(pt.openPointId!) &&
          (s.includes("/PREFERRED]") || s.includes("POINT_OUVERT_REACTIVATE")),
      ),
    ).toBe(true);

    const withBulkNoise = [
      ...selected.snippets,
      "ACQUIS[FACT/noise-acq/AVAILABLE] subject=∅: bruit journal non préféré",
    ];
    const continued = resolveContinuationKnowledgeSnippets(withBulkNoise, {
      useContinuation: true,
      hasPriorAcquis: true,
    });
    expect(continued[0]).toBe(CONTINUATION_KNOWLEDGE_OMIT_MARKER);
    expect(continued.some((s) => s.includes(acq.acquisId!) && s.includes("PREFERRED"))).toBe(
      true,
    );
    expect(continued.some((s) => s.includes("noise-acq"))).toBe(false);
  });

  it("B.7 — foreign preferred ids do not cross-project contaminate", async () => {
    const pilotA = await seedPilot("e1-b7-iso-a");
    const pilotB = await seedPilot("e1-b7-iso-b");
    const worldA = await seedLinkedProject(pilotA, "Projet A");
    const worldB = await seedLinkedProject(pilotB, "Projet B");
    const acqB = await capitalizeAcquis(pilotB, worldB.prep.id, {
      statement: "Secret projet B — token d'isolation cognitive e1-b7.",
      provenance: { sourceKind: "pilot", sourceId: "iso" },
    });
    expect(acqB.status).toBe("AVAILABLE");

    const selectedA = await selectRelevantKnowledgeContext(
      pilotA,
      worldA.prep.id,
      "Rappelle le secret",
      {
        projectId: worldA.projectId,
        preferredAcquisIds: [acqB.acquisId!],
      },
    );
    expect(selectedA.snippets.some((s) => s.includes(acqB.acquisId!))).toBe(false);
    expect(selectedA.selectedAcquisIds).not.toContain(acqB.acquisId);
  });

  it("B.8 — activity/Journal/Trajectoire share owner counts (decisions, docs, open points)", async () => {
    const pilotId = await seedPilot("e1-b8-proj");
    const { prep, projectId } = await seedLinkedProject(pilotId, "MaintiPlan projection");
    const subj = await ensureSubject(pilotId, prep.id, "Dépôt");
    await openPoint(pilotId, prep.id, {
      statement: "Valider le workflow de release sur GitHub.",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "pilot", sourceId: "b8" },
    });
    const doc = await savePreparationDocument(
      pilotId,
      prep.id,
      "Guide release",
      "# guide\nProcédure.",
      undefined,
      { correlationKey: `b8-${newId("doc")}`, provenance: { sourceKind: "pilot" } },
    );
    expect(doc.status).toBe("AVAILABLE");

    const dApplicable = await db.transaction((tx) =>
      insertHumanDecision(tx, {
        projectId,
        pilotId,
        sourceKind: "message",
        sourceRef: "m-b8",
        kind: "RECORD_DECISION",
        objectRef: "github",
        statement: "GitHub est obligatoire pour MaintiPlan.",
      }),
    );
    const dStaleLine = await db.transaction((tx) =>
      insertHumanDecision(tx, {
        projectId,
        pilotId,
        sourceKind: "message",
        sourceRef: "m-b8-revise-fail",
        kind: "RECORD_DECISION",
        objectRef: "github",
        statement: "Tentative révision non retenue",
        supersedesDecisionId: dApplicable,
      }),
    );
    await db.transaction((tx) => markDecisionState(tx, dStaleLine, "REVISED"));

    const ctx = await getOwnedProjectContext(pilotId, projectId);
    const journal = await getJournalProjection(pilotId, projectId);

    expect(ctx.activity.applicableDecisions.count).toBe(1);
    expect(ctx.activity.applicableDecisions.examples[0]?.id).toBe(dApplicable);
    expect(ctx.activity.documentsInProgress.count).toBeGreaterThanOrEqual(1);
    expect(ctx.activity.openPointsCount).toBe(1);
    expect(ctx.knowledge.openPoints[0]?.shortTitle?.length).toBeGreaterThan(5);
    expect(openKnowledgePoints(ctx.knowledge.openPoints)).toHaveLength(1);

    const journalApplicable = journal.decisions.filter((d) => d.applicable);
    expect(journalApplicable).toHaveLength(1);
    expect(journalApplicable[0]?.id).toBe(dApplicable);
  });
});