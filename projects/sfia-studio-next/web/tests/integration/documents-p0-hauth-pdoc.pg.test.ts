/**
 * P0-B — historical authorization must bind to the sealed candidate.
 */
import { describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { db } from "@/db/client";
import { pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  assertHistoricalAuthBoundToCandidate,
  loadHistoricalSourceAuthorization,
  loadPendingDocumentCandidate,
  stashHistoricalSourceAuthorization,
  stashPendingDocumentCandidate,
} from "@/domains/conversation/document-candidate";
import { reviseDocument, savePreparationDocument } from "@/domains/document/service";
import { getPreparationContext, openOrCreatePreparation } from "@/domains/preparation/service";
import { commitTurnTerminal, reserveTurnCommand } from "@/domains/conversation/turn-command";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("documents P0-B hauth ↔ pdoc binding", () => {
  it("matching hauth allows; foreign hauth refuses; current-head needs no hauth", async () => {
    const pilotId = await seedPilot("DOC-p0b");
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    expect(ctx.conversation?.id).toBeTruthy();

    const v1 = await savePreparationDocument(pilotId, prep.id, "Parcours", "# V1\n\na\n");
    expect(v1.status).toBe("AVAILABLE");
    if (v1.status !== "AVAILABLE") throw new Error("v1");
    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# V2\n\nb\n",
      correlationKey: "p0b-v2",
    });
    expect(v2.status).toBe("AVAILABLE");
    if (v2.status !== "AVAILABLE") throw new Error("v2");
    const v3 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v2.revisionId,
      contentMarkdown: "# V3\n\nc\n",
      correlationKey: "p0b-v3",
    });
    expect(v3.status).toBe("AVAILABLE");
    if (v3.status !== "AVAILABLE") throw new Error("v3");

    const reserved = await reserveTurnCommand({
      conversationId: ctx.conversation!.id,
      ownerPilotId: pilotId,
      clientTurnKey: `p0b-${newId("ck")}`,
      content: "hist",
    });
    if (reserved.kind !== "fresh") throw new Error("fresh");

    const authOk = await stashHistoricalSourceAuthorization({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      preparationId: prep.id,
      pilotId,
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId,
      choice: "USE_SOURCE",
    });
    expect(authOk.ok).toBe(true);
    if (!authOk.ok) throw new Error(authOk.reason);

    const authOther = await stashHistoricalSourceAuthorization({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      preparationId: prep.id,
      pilotId,
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId,
      choice: "USE_SOURCE",
    });
    expect(authOther.ok).toBe(true);
    if (!authOther.ok) throw new Error(authOther.reason);

    const body = "# Parcours\n\n## Responsabilités\n\nP exact.\n";
    const stashed = await stashPendingDocumentCandidate({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      preparationId: prep.id,
      pilotId,
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId,
      title: "Parcours",
      contentMarkdown: body,
      historicalAuthorizationId: authOk.authorization.id,
    });
    expect(stashed.ok).toBe(true);
    if (!stashed.ok) throw new Error(stashed.reason);

    await commitTurnTerminal({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      status: "COMPLETE",
      conversationId: ctx.conversation!.id,
      assistant: {
        id: newId("msg"),
        content: "ok",
        messageStatus: "COMPLETE",
        generationId: newId("gen"),
        ordinal: reserved.ordinalAssistant,
      },
      generationId: newId("gen"),
      resultJson: JSON.stringify({ status: "COMPLETE" }),
    });

    const loadedCand = await loadPendingDocumentCandidate({
      pilotId,
      preparationId: prep.id,
      candidateId: stashed.candidate.id,
    });
    expect(loadedCand.ok).toBe(true);
    if (!loadedCand.ok) throw new Error(loadedCand.reason);

    const loadedAuth = await loadHistoricalSourceAuthorization({
      pilotId,
      preparationId: prep.id,
      authorizationId: authOk.authorization.id,
    });
    expect(loadedAuth.ok).toBe(true);
    if (!loadedAuth.ok) throw new Error(loadedAuth.reason);

    // B1
    expect(
      assertHistoricalAuthBoundToCandidate({
        sourceIsHistorical: true,
        candidate: loadedCand.candidate,
        authorization: loadedAuth.authorization,
        actualHeadRevisionId: v3.revisionId,
      }),
    ).toEqual({ ok: true });

    // B2 — other hauth
    const otherLoaded = await loadHistoricalSourceAuthorization({
      pilotId,
      preparationId: prep.id,
      authorizationId: authOther.authorization.id,
    });
    expect(otherLoaded.ok).toBe(true);
    if (!otherLoaded.ok) throw new Error(otherLoaded.reason);
    const mismatch = assertHistoricalAuthBoundToCandidate({
      sourceIsHistorical: true,
      candidate: loadedCand.candidate,
      authorization: otherLoaded.authorization,
      actualHeadRevisionId: v3.revisionId,
    });
    expect(mismatch.ok).toBe(false);
    if (!mismatch.ok) expect(mismatch.reason).toBe("HISTORICAL_AUTH_CANDIDATE_MISMATCH");

    // B7 — current head
    expect(
      assertHistoricalAuthBoundToCandidate({
        sourceIsHistorical: false,
        candidate: { ...loadedCand.candidate, historicalAuthorizationId: null },
        authorization: null,
        actualHeadRevisionId: v3.revisionId,
      }),
    ).toEqual({ ok: true });
  });
});
