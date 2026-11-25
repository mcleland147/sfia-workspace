/**
 * T2 — conserve-only nominal path through postUserMessageAndNora
 * (no provider) → D4 v2 persisted with exact candidate bytes.
 */
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

const prevFixture = process.env.STUDIO_FORCE_NORA_FIXTURE;
const prevLane = process.env.STUDIO_LANE;
beforeAll(() => {
  process.env.STUDIO_LANE = "DEV";
  process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
});
afterAll(() => {
  if (prevFixture === undefined) delete process.env.STUDIO_FORCE_NORA_FIXTURE;
  else process.env.STUDIO_FORCE_NORA_FIXTURE = prevFixture;
  if (prevLane === undefined) delete process.env.STUDIO_LANE;
  else process.env.STUDIO_LANE = prevLane;
});

import { db } from "@/db/client";
import { pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { contentSha256 } from "@/domains/conversation/document-command";
import {
  DOC_CONSERVE_PROPOSAL,
  stashPendingDocumentCandidate,
} from "@/domains/conversation/document-candidate";
import { postUserMessageAndNora } from "@/domains/conversation/service";
import {
  getDocumentRevision,
  listDocumentRevisions,
  savePreparationDocument,
} from "@/domains/document/service";
import {
  getPreparationContext,
  openOrCreatePreparation,
} from "@/domains/preparation/service";
import { commitTurnTerminal, reserveTurnCommand } from "@/domains/conversation/turn-command";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("T2 conserve-only nominal via postUserMessageAndNora", () => {
  it(
    "persists v2 from sealed candidate without provider; v1 retained; refuse bad identity",
    async () => {
      const pilotId = await seedPilot("CONSERVE-ONLY");
      const prep = await openOrCreatePreparation(pilotId);
      const ctx = await getPreparationContext(pilotId, prep.id);
      expect(ctx.conversation?.id).toBeTruthy();

      const v1 = await savePreparationDocument(
        pilotId,
        prep.id,
        "Conservable",
        "# Conservable\n\n## Section 1\n\nAlpha.\n\n## Section 4\n\nAncien contenu.\n",
      );
      expect(v1.status).toBe("AVAILABLE");
      if (v1.status !== "AVAILABLE") throw new Error("v1");

      const reserved = await reserveTurnCommand({
        conversationId: ctx.conversation!.id,
        ownerPilotId: pilotId,
        clientTurnKey: `co-prop-${newId("ck")}`,
        content: "propose section 4",
      });
      if (reserved.kind !== "fresh") throw new Error("expected fresh");

      const candidateBody =
        "# Conservable\n\n## Section 1\n\nAlpha.\n\n## Section 4\n\nNouveau contenu ciblé.\n";
      const title = "Conservable";
      const stashed = await stashPendingDocumentCandidate({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        preparationId: prep.id,
        pilotId,
        documentId: v1.documentId,
        sourceRevisionId: v1.revisionId,
        observedHeadRevisionId: v1.revisionId,
        title,
        contentMarkdown: candidateBody,
      });
      expect(stashed.ok).toBe(true);
      if (!stashed.ok) throw new Error(stashed.reason);
      const candidateSha = stashed.candidate.contentSha256;
      expect(candidateSha).toBe(contentSha256(title, candidateBody));

      await commitTurnTerminal({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        status: "COMPLETE",
        conversationId: ctx.conversation!.id,
        assistant: {
          id: newId("msg"),
          content: "proposition prête",
          messageStatus: "COMPLETE",
          generationId: newId("gen"),
          ordinal: reserved.ordinalAssistant,
        },
        generationId: newId("gen"),
        resultJson: JSON.stringify({ status: "COMPLETE" }),
      });

      const before = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
      const beforeCount = before.revisions?.length ?? 0;

      // Wrong content hash — refuse without mutation.
      const badHash = await postUserMessageAndNora(
        pilotId,
        prep.id,
        DOC_CONSERVE_PROPOSAL,
        {
          documentFocus: {
            documentId: v1.documentId,
            sourceRevisionId: v1.revisionId,
            observedHeadRevisionId: v1.revisionId,
            conserveProposal: true,
            pendingCandidateId: stashed.candidate.id,
            pendingCandidateContentSha256: contentSha256(title, "# forged\n"),
          },
        },
      );
      expect(badHash.noraMode).toBe("deterministic-fixture");
      expect(badHash.documentSave?.status).not.toBe("AVAILABLE");
      expect(badHash.documentSave?.reason).toMatch(/CANDIDATE|SHA|HASH|MISMATCH|NOT_FOUND|REQUIRED/i);

      const mid = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
      expect(mid.revisions?.length ?? 0).toBe(beforeCount);

      const conserved = await postUserMessageAndNora(
        pilotId,
        prep.id,
        DOC_CONSERVE_PROPOSAL,
        {
          documentFocus: {
            documentId: v1.documentId,
            sourceRevisionId: v1.revisionId,
            observedHeadRevisionId: v1.revisionId,
            conserveProposal: true,
            pendingCandidateId: stashed.candidate.id,
            pendingCandidateContentSha256: candidateSha,
          },
        },
      );

      expect(conserved.noraMode).toBe("deterministic-fixture");
      expect(conserved.documentSave?.status).toBe("AVAILABLE");
      expect(conserved.documentSave?.act).toBe("REVISE");
      const newRevId = conserved.documentSave?.revisionId;
      expect(newRevId).toBeTruthy();

      const after = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
      expect(after.revisions?.length ?? 0).toBe(beforeCount + 1);

      const v2 = await getDocumentRevision(pilotId, prep.id, v1.documentId, newRevId!);
      expect(v2.status).toBe("AVAILABLE");
      if (v2.status !== "AVAILABLE") throw new Error("v2 load");
      expect(v2.revision.contentMarkdown).toBe(candidateBody);

      const stillV1 = await getDocumentRevision(
        pilotId,
        prep.id,
        v1.documentId,
        v1.revisionId,
      );
      expect(stillV1.status).toBe("AVAILABLE");
      if (stillV1.status !== "AVAILABLE") throw new Error("v1 load");
      expect(stillV1.revision.contentMarkdown).toContain("Ancien contenu");

      // Consumed candidate — second conserve must not write again.
      const repeat = await postUserMessageAndNora(
        pilotId,
        prep.id,
        DOC_CONSERVE_PROPOSAL,
        {
          documentFocus: {
            documentId: v1.documentId,
            sourceRevisionId: v1.revisionId,
            observedHeadRevisionId: newRevId!,
            conserveProposal: true,
            pendingCandidateId: stashed.candidate.id,
            pendingCandidateContentSha256: candidateSha,
          },
        },
      );
      expect(repeat.documentSave?.status).not.toBe("AVAILABLE");
    },
    30_000,
  );
});
