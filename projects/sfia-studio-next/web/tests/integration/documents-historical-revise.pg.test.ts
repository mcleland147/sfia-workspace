/**
 * DOC-TECH / DOC-UAT-09–10 — historical source revise (V2→V4) with observed head concurrency.
 */
import { describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { db } from "@/db/client";
import { pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  compareDocumentRevisions,
  listDocumentRevisions,
  reviseDocument,
  savePreparationDocument,
} from "@/domains/document/service";
import { openOrCreatePreparation } from "@/domains/preparation/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("documents historical revise (V2→V4)", () => {
  it("V1→V2→V3 then historical V2→V4 with confirmation; V1–V3 intact", async () => {
    const pilotId = await seedPilot("DOC-hist");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(
      pilotId,
      prep.id,
      "Parcours",
      "# V1\n\nobjet initial\n",
    );
    expect(v1.status).toBe("AVAILABLE");
    if (v1.status !== "AVAILABLE") throw new Error("v1");

    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# V2\n\nverification ressources\n",
      correlationKey: "hist-v2",
    });
    expect(v2.status).toBe("AVAILABLE");
    if (v2.status !== "AVAILABLE") throw new Error("v2");

    const v3 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v2.revisionId,
      contentMarkdown: "# V3\n\nconfirmation responsabilites\n",
      correlationKey: "hist-v3",
    });
    expect(v3.status).toBe("AVAILABLE");
    if (v3.status !== "AVAILABLE") throw new Error("v3");

    const withoutConfirm = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId,
      confirmedHistoricalSource: false,
      contentMarkdown: "# V4 from V2 without confirm\n",
      correlationKey: "hist-v4-noconfirm",
    });
    expect(withoutConfirm.status).toBe("FAILED");
    if (withoutConfirm.status === "FAILED") {
      expect(withoutConfirm.reason).toBe("HISTORICAL_CONFIRMATION_REQUIRED");
    }

    const v4 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId,
      confirmedHistoricalSource: true,
      contentMarkdown: "# V4 from V2\n\nproposition Nora\n",
      correlationKey: "hist-v4",
    });
    expect(v4.status).toBe("AVAILABLE");
    if (v4.status !== "AVAILABLE") throw new Error("v4");
    expect(v4.revisionNumber).toBe(4);
    expect("baseRevisionId" in v4 ? v4.baseRevisionId : null).toBe(v2.revisionId);

    const list = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
    expect(list.status).toBe("AVAILABLE");
    if (list.status !== "AVAILABLE") throw new Error("list");
    const byNum = Object.fromEntries(list.revisions.map((r) => [r.revisionNumber, r]));
    expect(byNum[1]?.contentMarkdown).toContain("objet initial");
    expect(byNum[2]?.contentMarkdown).toContain("verification");
    expect(byNum[3]?.contentMarkdown).toContain("confirmation");
    expect(byNum[4]?.contentMarkdown).toContain("proposition Nora");
    expect(byNum[4]?.baseRevisionId).toBe(v2.revisionId);
  });

  it("concurrent head after historical confirmation → CONFLICT, next is V5", async () => {
    const pilotId = await seedPilot("DOC-hist-race");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Race", "# A\n");
    if (v1.status !== "AVAILABLE") throw new Error("v1");
    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# B\n",
      correlationKey: "race-v2",
    });
    if (v2.status !== "AVAILABLE") throw new Error("v2");
    const v3 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v2.revisionId,
      contentMarkdown: "# C\n",
      correlationKey: "race-v3",
    });
    if (v3.status !== "AVAILABLE") throw new Error("v3");

    // Concurrent V4 from head while another actor still holds observedHead=V3 + source=V2.
    const concurrentV4 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v3.revisionId,
      contentMarkdown: "# D concurrent\n",
      correlationKey: "race-v4-head",
    });
    expect(concurrentV4.status).toBe("AVAILABLE");
    if (concurrentV4.status !== "AVAILABLE") throw new Error("v4 concurrent");

    const staleHistorical = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId, // stale — actual head is V4
      confirmedHistoricalSource: true,
      contentMarkdown: "# from V2 stale head\n",
      correlationKey: "race-v4-hist-stale",
    });
    expect(staleHistorical.status).toBe("CONFLICT");
    if (staleHistorical.status === "CONFLICT") {
      expect(staleHistorical.reason).toBe("BASE_STALE");
      expect(
        "actualLatestRevisionId" in staleHistorical
          ? staleHistorical.actualLatestRevisionId
          : null,
      ).toBe(concurrentV4.revisionId);
    }

    const v5 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: concurrentV4.revisionId,
      confirmedHistoricalSource: true,
      contentMarkdown: "# V5 from V2 after requalify\n",
      correlationKey: "race-v5",
    });
    expect(v5.status).toBe("AVAILABLE");
    if (v5.status !== "AVAILABLE") throw new Error("v5");
    expect(v5.revisionNumber).toBe(5);
  });

  it("legacy baseRevisionId-only still requires head match (BASE_STALE)", async () => {
    const pilotId = await seedPilot("DOC-legacy");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Legacy", "# L1\n");
    if (v1.status !== "AVAILABLE") throw new Error("v1");
    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# L2\n",
      correlationKey: "leg-v2",
    });
    if (v2.status !== "AVAILABLE") throw new Error("v2");

    const stale = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# stale\n",
      correlationKey: "leg-stale",
    });
    expect(stale.status).toBe("CONFLICT");
    if (stale.status === "CONFLICT") expect(stale.reason).toBe("BASE_STALE");
  });

  it("idempotent replay of historical V4 correlation", async () => {
    const pilotId = await seedPilot("DOC-hist-idem");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Idem", "# I1\n");
    if (v1.status !== "AVAILABLE") throw new Error("v1");
    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# I2\n",
      correlationKey: "idem-v2",
    });
    if (v2.status !== "AVAILABLE") throw new Error("v2");
    const v3 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v2.revisionId,
      contentMarkdown: "# I3\n",
      correlationKey: "idem-v3",
    });
    if (v3.status !== "AVAILABLE") throw new Error("v3");

    const payload = "# I4 historical\n";
    const first = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId,
      confirmedHistoricalSource: true,
      contentMarkdown: payload,
      correlationKey: "idem-v4",
    });
    expect(first.status).toBe("AVAILABLE");
    if (first.status !== "AVAILABLE") throw new Error("first");

    const replay = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId,
      confirmedHistoricalSource: true,
      contentMarkdown: payload,
      correlationKey: "idem-v4",
    });
    expect(replay.status).toBe("AVAILABLE");
    if (replay.status !== "AVAILABLE") throw new Error("replay");
    expect(replay.revisionId).toBe(first.revisionId);
    expect("idempotentReplay" in replay && replay.idempotentReplay).toBe(true);

    const cmp = await compareDocumentRevisions(
      pilotId,
      prep.id,
      v1.documentId,
      v2.revisionId,
      first.revisionId,
    );
    expect(["AVAILABLE", "DEGRADED"]).toContain(cmp.status);
  });
});
