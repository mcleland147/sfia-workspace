import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { db } from "@/db/client";
import { pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import {
  capitalizeAcquis,
  ensureSubject,
  listKnowledge,
  openPoint,
  selectRelevantKnowledgeContext,
  splitSubject,
  renameSubject,
  maybeCapitalizeFromExchange,
} from "@/domains/knowledge/service";
import {
  compareDocumentRevisions,
  listDocumentRevisions,
  reviseDocument,
  savePreparationDocument,
} from "@/domains/document/service";
import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("ML2 D4 knowledge + document concurrency (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("Q15/Q16: selective capitalisation — not every phrase", async () => {
    const pilotId = await seedPilot("ML2-cap");
    const prep = await openOrCreatePreparation(pilotId);
    const thin = await capitalizeAcquis(pilotId, prep.id, {
      statement: "ok",
      provenance: { sourceKind: "pilot" },
    });
    expect(thin.status).toBe("SKIPPED");

    const sub = await ensureSubject(pilotId, prep.id, "Architecture options");
    expect(sub.status).toBe("AVAILABLE");
    const cap = await capitalizeAcquis(pilotId, prep.id, {
      statement: "Option A est l'hypothèse privilégiée pour démarrer, coûts à confirmer.",
      kind: "HYPOTHESIS",
      subjectId: sub.subjectId,
      provenance: { sourceKind: "nora", generationId: "gen-test" },
    });
    expect(cap.status).toBe("AVAILABLE");
    const op = await openPoint(pilotId, prep.id, {
      statement: "Quels volumes et quel budget prévoir ?",
      subjectId: sub.subjectId,
      provenance: { sourceKind: "message", sourceId: "msg1" },
    });
    expect(op.status).toBe("AVAILABLE");
    const k = await listKnowledge(pilotId, prep.id);
    expect(k.acquis.filter((a) => a.status === "CURRENT")).toHaveLength(1);
    expect(k.openPoints.filter((o) => o.status === "OPEN")).toHaveLength(1);
  });

  it("Q17/Q28: rename + split preserve filiation and open points", async () => {
    const pilotId = await seedPilot("ML2-split");
    const prep = await openOrCreatePreparation(pilotId);
    const s = await ensureSubject(pilotId, prep.id, "Thème source");
    const a1 = await capitalizeAcquis(pilotId, prep.id, {
      statement: "Acquis durable numéro un pour le thème source.",
      subjectId: s.subjectId,
      provenance: { sourceKind: "pilot" },
    });
    const a2 = await capitalizeAcquis(pilotId, prep.id, {
      statement: "Acquis durable numéro deux restant sur le thème source.",
      subjectId: s.subjectId,
      provenance: { sourceKind: "pilot" },
    });
    await openPoint(pilotId, prep.id, {
      statement: "Point ouvert transversal à conserver.",
      subjectId: s.subjectId,
      provenance: { sourceKind: "pilot" },
    });
    await renameSubject(pilotId, prep.id, s.subjectId!, "Thème renommé");
    const split = await splitSubject(pilotId, prep.id, s.subjectId!, {
      newTitle: "Thème séparé",
      acquisIds: [a1.acquisId!],
      openPointIds: [],
    });
    expect(split.status).toBe("AVAILABLE");
    expect(split.filiationPreserved).toBe(true);
    const k = await listKnowledge(pilotId, prep.id);
    const neo = k.subjects.find((x) => x.id === split.newSubjectId);
    expect(neo?.originatedFromSubjectId).toBe(s.subjectId);
    expect(k.acquis.find((x) => x.id === a1.acquisId)?.subjectId).toBe(split.newSubjectId);
    expect(k.acquis.find((x) => x.id === a2.acquisId)?.subjectId).toBe(s.subjectId);
    expect(k.openPoints.filter((o) => o.status === "OPEN")).toHaveLength(1);
  });

  it("Q10–Q14: revise with base control + CONFLICT + diff + idempotent correlation", async () => {
    const pilotId = await seedPilot("ML2-doc");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Spec", "# Spec\n\nSection A\n");
    expect(v1.status).toBe("AVAILABLE");
    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId!,
      baseRevisionId: v1.revisionId!,
      contentMarkdown: "# Spec\n\nSection A révisée\n",
      correlationKey: "corr-rev-1",
      scope: "section",
    });
    expect(v2.status).toBe("AVAILABLE");

    const conflict = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId!,
      baseRevisionId: v1.revisionId!, // stale
      contentMarkdown: "# Spec\n\noverwrite?\n",
      correlationKey: "corr-rev-stale",
    });
    expect(conflict.status).toBe("CONFLICT");

    const replay = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId!,
      baseRevisionId: v2.revisionId!,
      contentMarkdown: "ignored on replay",
      correlationKey: "corr-rev-1",
    });
    expect(replay.status).toBe("AVAILABLE");
    expect(replay.idempotentReplay).toBe(true);
    expect(replay.revisionId).toBe(v2.revisionId);

    const list = await listDocumentRevisions(pilotId, prep.id, v1.documentId!);
    expect(list.revisions.length).toBeGreaterThanOrEqual(2);
    const cmp = await compareDocumentRevisions(
      pilotId,
      prep.id,
      v1.documentId!,
      v1.revisionId!,
      v2.revisionId!,
    );
    expect(cmp.status).toBe("AVAILABLE");
    if (cmp.status === "AVAILABLE") {
      expect(cmp.diff.added.length + cmp.diff.removed.length).toBeGreaterThan(0);
    }
  });

  it("Q19/Q20: D4 context recovered beyond six-message window", async () => {
    const pilotId = await seedPilot("ML2-reprise");
    const prep = await openOrCreatePreparation(pilotId);
    await capitalizeAcquis(pilotId, prep.id, {
      statement: "L'hypothèse architecture modulaire reste privilégiée pour Atlas.",
      kind: "HYPOTHESIS",
      provenance: { sourceKind: "nora", note: "old exchange" },
    });
    await openPoint(pilotId, prep.id, {
      statement: "Budget cloud encore inconnu.",
      provenance: { sourceKind: "message" },
    });

    // Flood recent messages (fixture Nora)
    for (let i = 0; i < 8; i++) {
      await postUserMessageAndNora(pilotId, prep.id, `échange de remplissage ${i} sans rapport`);
    }
    const msgs = await listMessages(pilotId, prep.id);
    expect(msgs.length).toBeGreaterThanOrEqual(16);

    const selected = await selectRelevantKnowledgeContext(
      pilotId,
      prep.id,
      "reprends l'architecture modulaire et le budget",
    );
    expect(selected.snippets.some((s) => /architecture modulaire|modulaire/i.test(s))).toBe(true);
    expect(selected.snippets.some((s) => /Budget|budget/i.test(s))).toBe(true);
    expect(selected.counts.acquisCurrent).toBeGreaterThanOrEqual(1);
  });

  it("Q04/Q06: explicit document intent persists AVAILABLE; chatter does not", async () => {
    const pilotId = await seedPilot("ML2-docintent");
    const prep = await openOrCreatePreparation(pilotId);
    const chat = await postUserMessageAndNora(pilotId, prep.id, "Bonjour Nora, comment vas-tu ?");
    expect(chat.documentSave).toBeNull();
    expect(chat.humanDecisionCreated).toBe(false);

    const docReq = await postUserMessageAndNora(
      pilotId,
      prep.id,
      "Rédige un document de synthèse sur les options A et B",
    );
    expect(docReq.documentSave?.status).toBe("AVAILABLE");
    expect(docReq.humanDecisionCreated).toBe(false);
  });

  it("negative: recommendation capitalisation ≠ HumanDecision", async () => {
    const pilotId = await seedPilot("ML2-nod6");
    const prep = await openOrCreatePreparation(pilotId);
    const r = await maybeCapitalizeFromExchange(pilotId, prep.id, {
      userText: "Quelle option retenir ?",
      assistantText:
        "Recommandation conditionnelle: approfondir A. Point ouvert: coûts à clarifier.",
      generationId: "gen-x",
      userMessageId: "msg-x",
    });
    expect(r.capitalisations.length).toBeGreaterThan(0);
    // No D6 table write exists in ML2 — assert flag absence via conversation contract
    const k = await listKnowledge(pilotId, prep.id);
    expect(k.acquis.every((a) => a.kind !== "HUMAN_DECISION")).toBe(true);
  });
});
