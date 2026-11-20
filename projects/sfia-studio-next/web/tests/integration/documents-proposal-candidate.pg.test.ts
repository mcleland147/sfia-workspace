/**
 * F1 — pending candidate exact content is what D4 persists on conserve.
 */
import { describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { db } from "@/db/client";
import { pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { contentSha256 } from "@/domains/conversation/document-command";
import {
  loadPendingDocumentCandidate,
  stashPendingDocumentCandidate,
} from "@/domains/conversation/document-candidate";
import {
  getDocumentRevision,
  listDocumentRevisions,
  reviseDocument,
  savePreparationDocument,
} from "@/domains/document/service";
import { getPreparationContext, openOrCreatePreparation } from "@/domains/preparation/service";
import { commitTurnTerminal, reserveTurnCommand } from "@/domains/conversation/turn-command";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("documents proposal candidate exact conserve (F1)", () => {
  it("candidate hash identity; D4 V4 body equals sealed candidate; V1–V3 intact", async () => {
    const pilotId = await seedPilot("DOC-cand");
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    expect(ctx.conversation?.id).toBeTruthy();

    const v1 = await savePreparationDocument(pilotId, prep.id, "Parcours", "# V1\n\nobjet\n");
    expect(v1.status).toBe("AVAILABLE");
    if (v1.status !== "AVAILABLE") throw new Error("v1");
    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# V2\n\nhistorique\n",
      correlationKey: "cand-v2",
    });
    expect(v2.status).toBe("AVAILABLE");
    if (v2.status !== "AVAILABLE") throw new Error("v2");
    const v3 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v2.revisionId,
      contentMarkdown: "# V3\n\ncourante\n",
      correlationKey: "cand-v3",
    });
    expect(v3.status).toBe("AVAILABLE");
    if (v3.status !== "AVAILABLE") throw new Error("v3");

    const reserved = await reserveTurnCommand({
      conversationId: ctx.conversation!.id,
      ownerPilotId: pilotId,
      clientTurnKey: `cand-${newId("ck")}`,
      content: "propose",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh turn");

    const candidateBody =
      "# Parcours\n\n## Responsabilités\n\nChaque centre valide — candidat exact P.\n";
    const title = "Parcours";
    const stashed = await stashPendingDocumentCandidate({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      preparationId: prep.id,
      pilotId,
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId,
      title,
      contentMarkdown: candidateBody,
    });
    expect(stashed.ok).toBe(true);
    if (!stashed.ok) throw new Error(stashed.reason);

    const loaded = await loadPendingDocumentCandidate({
      pilotId,
      preparationId: prep.id,
      candidateId: stashed.candidate.id,
      expectedContentSha256: stashed.candidate.contentSha256,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error(loaded.reason);
    expect(loaded.candidate.contentMarkdown).toBe(candidateBody);
    expect(loaded.candidate.contentSha256).toBe(contentSha256(title, candidateBody));

    const mismatch = await loadPendingDocumentCandidate({
      pilotId,
      preparationId: prep.id,
      candidateId: stashed.candidate.id,
      expectedContentSha256: contentSha256(title, "# forged\n"),
    });
    expect(mismatch.ok).toBe(false);

    await commitTurnTerminal({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      status: "COMPLETE",
      conversationId: ctx.conversation!.id,
      assistant: {
        id: newId("msg"),
        content: "proposition",
        messageStatus: "COMPLETE",
        generationId: newId("gen"),
        ordinal: reserved.ordinalAssistant,
      },
      generationId: newId("gen"),
      resultJson: JSON.stringify({ status: "COMPLETE" }),
    });

    // New proposal supersedes prior candidate — old authorization must refuse.
    const reserved2 = await reserveTurnCommand({
      conversationId: ctx.conversation!.id,
      ownerPilotId: pilotId,
      clientTurnKey: `cand2-${newId("ck")}`,
      content: "propose2",
    });
    if (reserved2.kind !== "fresh") throw new Error("expected fresh turn 2");
    const p2Body = "# Parcours\n\n## Responsabilités\n\nP2 — candidat suivant.\n";
    const stashed2 = await stashPendingDocumentCandidate({
      commandId: reserved2.commandId,
      ownerToken: reserved2.ownerToken,
      preparationId: prep.id,
      pilotId,
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId,
      title,
      contentMarkdown: p2Body,
    });
    expect(stashed2.ok).toBe(true);
    if (!stashed2.ok) throw new Error(stashed2.reason);
    const oldAfterSupersede = await loadPendingDocumentCandidate({
      pilotId,
      preparationId: prep.id,
      candidateId: stashed.candidate.id,
    });
    expect(oldAfterSupersede.ok).toBe(false);
    if (!oldAfterSupersede.ok) {
      expect(oldAfterSupersede.reason).toBe("CANDIDATE_SUPERSEDED");
    }
    const loadedP2 = await loadPendingDocumentCandidate({
      pilotId,
      preparationId: prep.id,
      candidateId: stashed2.candidate.id,
      expectedContentSha256: stashed2.candidate.contentSha256,
    });
    expect(loadedP2.ok).toBe(true);
    if (!loadedP2.ok) throw new Error(loadedP2.reason);

    await commitTurnTerminal({
      commandId: reserved2.commandId,
      ownerToken: reserved2.ownerToken,
      status: "COMPLETE",
      conversationId: ctx.conversation!.id,
      assistant: {
        id: newId("msg"),
        content: "proposition2",
        messageStatus: "COMPLETE",
        generationId: newId("gen"),
        ordinal: reserved2.ordinalAssistant,
      },
      generationId: newId("gen"),
      resultJson: JSON.stringify({ status: "COMPLETE" }),
    });

    const v4 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId,
      confirmedHistoricalSource: true,
      contentMarkdown: loadedP2.candidate.contentMarkdown,
      correlationKey: `cand-v4-${stashed2.candidate.contentSha256.slice(0, 16)}`,
    });
    expect(v4.status).toBe("AVAILABLE");
    if (v4.status !== "AVAILABLE") throw new Error("v4");
    expect(v4.revisionNumber).toBe(4);

    const got = await getDocumentRevision(pilotId, prep.id, v1.documentId, v4.revisionId);
    expect(got.status).toBe("AVAILABLE");
    if (got.status !== "AVAILABLE") throw new Error("got");
    expect(got.revision?.contentMarkdown).toBe(p2Body);

    const list = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
    expect(list.status).toBe("AVAILABLE");
    if (list.status !== "AVAILABLE") throw new Error("list");
    const byNum = Object.fromEntries(list.revisions.map((r) => [r.revisionNumber, r]));
    expect(byNum[1]?.contentMarkdown).toContain("objet");
    expect(byNum[2]?.contentMarkdown).toContain("historique");
    expect(byNum[3]?.contentMarkdown).toContain("courante");
    expect(byNum[4]?.contentMarkdown).toContain("P2 — candidat suivant");
  });
});
