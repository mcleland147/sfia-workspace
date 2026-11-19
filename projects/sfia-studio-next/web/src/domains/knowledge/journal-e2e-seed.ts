/**
 * DEV/E2E-only Journal scenario seed — uses real D4/D6 domain writes.
 * Gate: caller must enforce e2eFixtureMutationsAllowed().
 */
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, knowledgeAcquis, knowledgeOpenPoints, messages } from "@/db/schema";
import {
  appendDecisionExplanationRevision,
  appendSubjectSummaryRevision,
  resolveOpenPointFactually,
} from "@/domains/knowledge/journal";
import { capitalizeAcquis, ensureSubject, openPoint } from "@/domains/knowledge/service";
import {
  insertHumanDecision,
  insertRestriction,
  markDecisionState,
} from "@/domains/decisions/service";
import { savePreparationDocument } from "@/domains/document/service";
import { newId } from "@/lib/ids";

export type JournalE2ESeedResult = {
  projectId: string;
  preparationId: string;
  parentSubjectId: string;
  leafSubjectId: string;
  otherParentId: string;
  homonymLeafId: string;
  acquisId: string;
  documentAcquisId: string;
  openPointId: string;
  resolvedOpenPointId: string;
  decisionApplicableId: string;
  decisionHistoricalId: string;
  restrictionId: string;
  documentId: string;
  revisionIdV1: string;
  revisionIdV2: string;
  earlyMessageId: string;
  lateMessageId: string;
  messageCount: number;
};

async function ensureConversation(pilotId: string, preparationId: string) {
  const existing = (
    await db
      .select()
      .from(conversations)
      .where(
        and(eq(conversations.preparationId, preparationId), eq(conversations.ownerPilotId, pilotId)),
      )
      .limit(1)
  )[0];
  if (existing) return existing;
  const id = newId("conv");
  await db.insert(conversations).values({
    id,
    preparationId,
    ownerPilotId: pilotId,
    projectId: null,
  });
  return (await db.select().from(conversations).where(eq(conversations.id, id)))[0]!;
}

/** Insert a chronological message (no Nora call). */
async function insertThreadMessage(input: {
  conversationId: string;
  role: "user" | "assistant";
  content: string;
  ordinal: number;
  createdAt: Date;
}) {
  const id = newId("msg");
  await db.insert(messages).values({
    id,
    conversationId: input.conversationId,
    role: input.role,
    content: input.content,
    status: "COMPLETE",
    ordinal: input.ordinal,
    createdAt: input.createdAt,
  });
  return id;
}

export async function seedJournalE2EScenario(input: {
  pilotId: string;
  preparationId: string;
  projectId: string;
  /** Default 24 — enough to exercise deep-link without 60s insert; set 1001 for long-thread proof. */
  longThreadCount?: number;
}): Promise<JournalE2ESeedResult> {
  const { pilotId, preparationId, projectId } = input;
  const longThreadCount = input.longThreadCount ?? 24;

  const parent = await ensureSubject(pilotId, preparationId, "Architecture cible");
  // J-C08 — leaf/homonym titles must NOT contain the acquis-only search token.
  const leaf = await ensureSubject(pilotId, preparationId, "Continuité Git", parent.subjectId);
  const otherParent = await ensureSubject(pilotId, preparationId, "Budget et risques");
  const homonym = await ensureSubject(pilotId, preparationId, "Continuité Git", otherParent.subjectId);

  const acquis = await capitalizeAcquis(pilotId, preparationId, {
    statement:
      "Le mot-clé traçabilité apparaît uniquement dans cet acquis capitalisé pour la recherche Journal.",
    kind: "HYPOTHESIS",
    subjectId: leaf.subjectId,
    provenance: { sourceKind: "message", sourceId: "seed-msg-acquis", epistemic: "observed" },
  });

  await appendSubjectSummaryRevision(pilotId, projectId, leaf.subjectId!, {
    summaryMarkdown:
      "Synthèse versionnée : la continuité des preuves Git reste un point de vigilance à clarifier avec sources.",
    provenance: { sourceKind: "nora", generationId: "seed-sum-1", epistemic: "limited" },
    operationId: `seed-sum-${leaf.subjectId}`,
    enforceHonesty: true,
  });

  const open = await openPoint(pilotId, preparationId, {
    statement: "Quelle preuve pour la connexion GitHub du dépôt officiel?",
    subjectId: leaf.subjectId,
    provenance: { sourceKind: "message", sourceId: "seed-msg-open" },
  });

  const openResolved = await openPoint(pilotId, preparationId, {
    statement: "Le détail technique de publication est-il documenté?",
    subjectId: otherParent.subjectId,
    provenance: { sourceKind: "message", sourceId: "seed-msg-open-2" },
  });

  const doc1 = await savePreparationDocument(
    pilotId,
    preparationId,
    "Preuve technique publication",
    "# v1\nDocument canonique initial pour Journal E2E.",
    undefined,
    { correlationKey: `journal-e2e-doc-${projectId}-v1`, provenance: { sourceKind: "pilot" } },
  );
  if (!("documentId" in doc1) || !doc1.documentId || !("revisionId" in doc1) || !doc1.revisionId) {
    throw new Error(`doc create failed: ${doc1.status}`);
  }
  const documentId = String(doc1.documentId);
  const revisionIdV1 = String(doc1.revisionId);

  const doc2 = await savePreparationDocument(
    pilotId,
    preparationId,
    "Preuve technique publication",
    "# v2\nDocument canonique révisé — version exacte pour J-C14.",
    documentId,
    {
      correlationKey: `journal-e2e-doc-${projectId}-v2`,
      baseRevisionId: revisionIdV1,
      provenance: { sourceKind: "pilot" },
    },
  );
  const revisionIdV2 =
    "revisionId" in doc2 && doc2.revisionId ? String(doc2.revisionId) : revisionIdV1;

  const resolved = await resolveOpenPointFactually(pilotId, projectId, openResolved.openPointId!, {
    reason: "Document technique AVAILABLE trouvé",
    provenance: {
      sourceKind: "revision",
      sourceId: revisionIdV2 || revisionIdV1,
      epistemic: "established",
    },
    operationId: `seed-resolve-${openResolved.openPointId}`,
  });
  if (resolved.status !== "AVAILABLE") {
    throw new Error(`resolve seed failed: ${resolved.status} ${"reason" in resolved ? resolved.reason : ""}`);
  }

  const decisionApplicableId = await db.transaction(async (tx) =>
    insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: "pilotage",
      sourceRef: "seed-cmd-applicable",
      kind: "TRAJECTORY",
      objectRef: "traj-seed",
      statement: "Décision applicable du projet Journal E2E — conserver la trajectoire A.",
    }),
  );
  await appendDecisionExplanationRevision(pilotId, projectId, decisionApplicableId, {
    explanationMarkdown:
      "Pourquoi ce choix : alternatives B écartées faute de preuves solides ; motivations et contraintes sourcées. Token exclusif explication : multicritèreorion.",
    provenance: { sourceKind: "message", sourceId: "seed-msg-expl", epistemic: "observed" },
    operationId: `seed-expl-${decisionApplicableId}`,
    preparationId,
  });

  const decisionHistoricalId = await db.transaction(async (tx) =>
    insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: "pilotage",
      sourceRef: "seed-cmd-hist",
      kind: "RISK_ACCEPTANCE",
      objectRef: "risk-seed",
      statement: "Ancien acte de risque — sera marqué REVISED.",
    }),
  );
  await db.transaction(async (tx) => markDecisionState(tx, decisionHistoricalId, "REVISED"));

  const restrictionId = await db.transaction(async (tx) =>
    insertRestriction(tx, {
      projectId,
      targetKind: "ACTION",
      targetRef: "publish",
      originDecisionId: decisionApplicableId,
    }),
  );

  const conv = await ensureConversation(pilotId, preparationId);
  // Align conversation project scope when possible.
  await db
    .update(conversations)
    .set({ projectId })
    .where(eq(conversations.id, conv.id));

  const maxOrdRow = (
    await db
      .select({ ordinal: messages.ordinal })
      .from(messages)
      .where(eq(messages.conversationId, conv.id))
      .orderBy(desc(messages.ordinal))
      .limit(1)
  )[0];
  let ordinal = (maxOrdRow?.ordinal ?? -1) + 1;
  // Anchor early message in the past relative to any existing Nora turns.
  const base = Date.now() - (longThreadCount + 5) * 60_000;
  let earlyMessageId = "";
  let lateMessageId = "";
  for (let i = 0; i < longThreadCount; i++) {
    const id = await insertThreadMessage({
      conversationId: conv.id,
      role: i % 2 === 0 ? "user" : "assistant",
      content:
        i === 0
          ? "Message ANCIEN seed — ancre Journal E06-04 pour deep-link exact."
          : i === longThreadCount - 1
            ? "Message RÉCENT seed — fin de fil pour contraste chronologique."
            : `Message seed #${i} pour fil long Journal.`,
      ordinal: ordinal++,
      createdAt: new Date(base + i * 60_000),
    });
    if (i === 0) earlyMessageId = id;
    if (i === longThreadCount - 1) lateMessageId = id;
  }

  // Point Journal sources at the real early message + document revision (J-C13 / J-C14).
  if (acquis.status === "AVAILABLE" && "acquisId" in acquis && earlyMessageId) {
    await db
      .update(knowledgeAcquis)
      .set({
        provenanceJson: JSON.stringify({
          sourceKind: "message",
          sourceId: earlyMessageId,
          epistemic: "observed",
          notedAt: new Date().toISOString(),
        }),
      })
      .where(eq(knowledgeAcquis.id, String(acquis.acquisId)));
  }
  // Dedicated acquis with exact document revision provenance for J-C14 click path.
  const docAcquis = await capitalizeAcquis(pilotId, preparationId, {
    statement: "La publication technique est documentée dans la révision canonique v2.",
    kind: "FACT",
    subjectId: otherParent.subjectId,
    provenance: {
      sourceKind: "revision",
      sourceId: revisionIdV2 || revisionIdV1,
      epistemic: "established",
    },
  });
  if (docAcquis.status === "AVAILABLE" && "acquisId" in docAcquis) {
    await db
      .update(knowledgeAcquis)
      .set({
        provenanceJson: JSON.stringify({
          sourceKind: "revision",
          sourceId: revisionIdV2 || revisionIdV1,
          documentId,
          revisionId: revisionIdV2 || revisionIdV1,
          epistemic: "established",
          notedAt: new Date().toISOString(),
        }),
      })
      .where(eq(knowledgeAcquis.id, String(docAcquis.acquisId)));
  }
  if (open.openPointId && earlyMessageId) {
    await db
      .update(knowledgeOpenPoints)
      .set({
        provenanceJson: JSON.stringify({
          sourceKind: "message",
          sourceId: earlyMessageId,
          epistemic: "observed",
          notedAt: new Date().toISOString(),
        }),
      })
      .where(eq(knowledgeOpenPoints.id, open.openPointId));
  }

  return {
    projectId,
    preparationId,
    parentSubjectId: parent.subjectId!,
    leafSubjectId: leaf.subjectId!,
    otherParentId: otherParent.subjectId!,
    homonymLeafId: homonym.subjectId!,
    acquisId:
      acquis.status === "AVAILABLE" && "acquisId" in acquis ? String(acquis.acquisId) : "",
    documentAcquisId:
      docAcquis.status === "AVAILABLE" && "acquisId" in docAcquis
        ? String(docAcquis.acquisId)
        : "",
    openPointId: open.openPointId!,
    resolvedOpenPointId: openResolved.openPointId!,
    decisionApplicableId,
    decisionHistoricalId,
    restrictionId,
    documentId,
    revisionIdV1,
    revisionIdV2,
    earlyMessageId,
    lateMessageId,
    messageCount: ordinal,
  };
}
