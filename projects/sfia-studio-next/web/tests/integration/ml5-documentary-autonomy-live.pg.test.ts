/**
 * Bounded LIVE (DEV) — Nora documentary autonomy smoke.
 * Real provider; WEB LIVE blocked; one short create + revise + conserve path.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { db } from "@/db/client";
import { pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { eq } from "drizzle-orm";
import { preparations } from "@/db/schema";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { listDocuments, getDocumentRevision, listDocumentRevisions } from "@/domains/document/service";
import { postUserMessageAndNora } from "@/domains/conversation/service";
import { DOC_CONSERVE_PROPOSAL } from "@/domains/conversation/document-candidate";

describe("ML5 LIVE documentary autonomy (DEV bounded)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    if (!process.env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY required for LIVE");
    process.env.STUDIO_LANE = "DEV";
    delete process.env.STUDIO_E2E;
    delete process.env.STUDIO_FORCE_NORA_FIXTURE;
    process.env.SFIA_WEB_SEARCH_LIVE = "0";
    process.env.SFIA_WEB_SEARCH_ENABLED = "0";
    process.env.SFIA_COG_PROFILE_TYPE = "OPERATIONAL_PROVISIONAL";
  });

  it(
    "create short CF → revise two rules → inspect candidate → conserve V2",
    async () => {
      const pilotId = newId("pilot");
      await db.insert(pilots).values({
        id: pilotId,
        displayName: "ML5-Autonomy-LIVE",
        githubUserId: `gh-${pilotId}`,
      });
      const prep = await openOrCreatePreparation(pilotId);
      const label = `AutonomyLive-${Date.now().toString(36)}`;
      await updatePreview(pilotId, prep.id, label, "LIVE documentary autonomy smoke");
      const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
      const created = await createProjectCommand({
        pilotId,
        preparationId: prep.id,
        expectedCreationRevision: refreshed.creationRevision,
        projectName: label,
        previewSummary: "LIVE documentary autonomy smoke",
        idempotencyKey: newId("idem"),
      });
      expect(created.status).toBe("CREATED");

      const t0 = Date.now();
      const createTurn = await postUserMessageAndNora(
        pilotId,
        prep.id,
        "Rédige un court document de conception fonctionnelle pour un outil fictif TicketLite. Inclus une section Règles avec RM-01 et RM-02, et une section Scénarios avec REC-01 et REC-02. Texte compact.",
      );
      console.log(
        JSON.stringify({
          phase: "create",
          ms: Date.now() - t0,
          status: createTurn.status,
          documentSave: createTurn.documentSave,
          pending: createTurn.pendingDocumentCandidate?.candidateId ?? null,
          tools: createTurn.toolCallsObserved,
          mode: createTurn.noraMode,
        }),
      );

      const docsAfterCreate = await listDocuments(pilotId, prep.id);
      expect(docsAfterCreate.length).toBeGreaterThanOrEqual(1);
      const doc = docsAfterCreate[0]!;
      const documentId = doc.document.id;
      const v1Id = doc.latestRevision!.id;
      const v1Body = (
        await getDocumentRevision(pilotId, prep.id, documentId, v1Id)
      );
      expect(v1Body.status).toBe("AVAILABLE");
      if (v1Body.status !== "AVAILABLE") return;
      const v1Content = v1Body.revision.contentMarkdown;

      const t1 = Date.now();
      const reviseTurn = await postUserMessageAndNora(
        pilotId,
        prep.id,
        `Sur le document ${documentId}, révise uniquement RM-02 pour exiger aussi le lieu, et REC-02 pour mentionner l'absence de lieu. Préserve tout le reste. Compare ta proposition à la V1 avant de présenter.`,
      );
      console.log(
        JSON.stringify({
          phase: "revise",
          ms: Date.now() - t1,
          status: reviseTurn.status,
          documentSave: reviseTurn.documentSave,
          pendingId: reviseTurn.pendingDocumentCandidate?.candidateId ?? null,
          pendingSha: reviseTurn.pendingDocumentCandidate?.contentSha256 ?? null,
          tools: reviseTurn.toolCallsObserved,
          mode: reviseTurn.noraMode,
        }),
      );

      // Prefer pending candidate path; if Nora wrote directly (unexpected), still verify.
      const cand = reviseTurn.pendingDocumentCandidate;
      if (cand?.candidateId && reviseTurn.documentSave?.reason === "PROPOSAL_PENDING_CONSERVATION") {
        const t2 = Date.now();
        const conserve = await postUserMessageAndNora(pilotId, prep.id, DOC_CONSERVE_PROPOSAL, {
          documentFocus: {
            documentId: cand.documentId,
            sourceRevisionId: cand.sourceRevisionId,
            observedHeadRevisionId: cand.observedHeadRevisionId,
            conserveProposal: true,
            pendingCandidateId: cand.candidateId,
            pendingCandidateContentSha256: cand.contentSha256,
          },
        });
        console.log(
          JSON.stringify({
            phase: "conserve",
            ms: Date.now() - t2,
            status: conserve.status,
            documentSave: conserve.documentSave,
            mode: conserve.noraMode,
          }),
        );
        expect(conserve.documentSave?.status).toBe("AVAILABLE");
        expect(conserve.documentSave?.revisionNumber).toBe(2);
        const v2 = await getDocumentRevision(
          pilotId,
          prep.id,
          documentId,
          conserve.documentSave!.revisionId!,
        );
        expect(v2.status).toBe("AVAILABLE");
        if (v2.status !== "AVAILABLE") return;
        expect(v2.revision.contentMarkdown).toBe(cand.contentMarkdown);
        const stillV1 = await getDocumentRevision(pilotId, prep.id, documentId, v1Id);
        expect(stillV1.status).toBe("AVAILABLE");
        if (stillV1.status === "AVAILABLE") {
          expect(stillV1.revision.contentMarkdown).toBe(v1Content);
        }
      } else if (reviseTurn.documentSave?.status === "AVAILABLE") {
        // Direct write path — still require V2 ≠ V1 and V1 intact
        expect(reviseTurn.documentSave.revisionNumber).toBe(2);
        const v2 = await getDocumentRevision(
          pilotId,
          prep.id,
          documentId,
          reviseTurn.documentSave.revisionId!,
        );
        expect(v2.status).toBe("AVAILABLE");
        if (v2.status === "AVAILABLE") {
          expect(v2.revision.contentMarkdown).not.toBe(v1Content);
        }
        const stillV1 = await getDocumentRevision(pilotId, prep.id, documentId, v1Id);
        if (stillV1.status === "AVAILABLE") {
          expect(stillV1.revision.contentMarkdown).toBe(v1Content);
        }
      } else {
        console.log("LIVE revise did not yield pending or AVAILABLE — dump:", {
          documentSave: reviseTurn.documentSave,
          pending: cand,
        });
        expect.fail("expected pending conservation or AVAILABLE revise");
      }

      const listed = await listDocumentRevisions(pilotId, prep.id, documentId);
      expect(listed.status).toBe("AVAILABLE");
      if (listed.status === "AVAILABLE") {
        expect(listed.revisions.some((r) => r.revisionNumber === 1)).toBe(true);
        expect(listed.revisions.some((r) => r.revisionNumber === 2)).toBe(true);
      }
    },
    600_000,
  );
});
