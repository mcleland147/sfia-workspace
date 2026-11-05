import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  documents,
  documentRevisions,
  knowledgeSubjects,
  knowledgeAcquis,
  knowledgeSubjectEvents,
  knowledgeOpenPoints,
  pilots,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import {
  capitalizeAcquis,
  ensureSubject,
  listKnowledge,
  mergeSubjects,
  openPoint,
  splitSubject,
  maybeCapitalizeFromExchange,
} from "@/domains/knowledge/service";
import {
  reviseDocument,
  savePreparationDocument,
  listDocumentRevisions,
  diffMarkdown,
  MAX_DIFF_CELLS,
} from "@/domains/document/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("ML2 corrective C1–C5 integrity (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("C1 negative: refuse moving acquis belonging to another subject", async () => {
    const pilotId = await seedPilot("C1-foreign");
    const prep = await openOrCreatePreparation(pilotId);
    const s1 = await ensureSubject(pilotId, prep.id, "Source A");
    const s2 = await ensureSubject(pilotId, prep.id, "Source B");
    const aOnB = await capitalizeAcquis(pilotId, prep.id, {
      statement: "Acquis rattaché uniquement au sujet B pour test négatif.",
      kind: "HYPOTHESIS",
      subjectId: s2.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
    });
    const split = await splitSubject(pilotId, prep.id, s1.subjectId!, {
      newTitle: "Séparé illégal",
      acquisIds: [aOnB.acquisId!],
      openPointIds: [],
    });
    expect(split.status).toBe("FAILED");
    expect(split.reason).toBe("ACQUIS_NOT_IN_SOURCE_SUBJECT");
    const still = (
      await db.select().from(knowledgeAcquis).where(eq(knowledgeAcquis.id, aOnB.acquisId!))
    )[0];
    expect(still.subjectId).toBe(s2.subjectId);
  });

  it("C1 negative: refuse foreign pilot / other prep acquis id", async () => {
    const p1 = await seedPilot("C1-p1");
    const p2 = await seedPilot("C1-p2");
    const prep1 = await openOrCreatePreparation(p1);
    const prep2 = await openOrCreatePreparation(p2);
    const s1 = await ensureSubject(p1, prep1.id, "P1 Sujet");
    const s2 = await ensureSubject(p2, prep2.id, "P2 Sujet");
    const foreign = await capitalizeAcquis(p2, prep2.id, {
      statement: "Acquis d'un autre Pilote — ne doit pas migrer.",
      kind: "HYPOTHESIS",
      subjectId: s2.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
    });
    const split = await splitSubject(p1, prep1.id, s1.subjectId!, {
      newTitle: "Intrusion",
      acquisIds: [foreign.acquisId!],
      openPointIds: [],
    });
    expect(split.status).toBe("FAILED");
    expect(split.reason).toMatch(/FOREIGN|NOT_IN_SOURCE/);
  });

  it("C1: title collision does not reuse subject; creates new identity", async () => {
    const pilotId = await seedPilot("C1-title");
    const prep = await openOrCreatePreparation(pilotId);
    const source = await ensureSubject(pilotId, prep.id, "Thème");
    await ensureSubject(pilotId, prep.id, "Cible existante");
    const a = await capitalizeAcquis(pilotId, prep.id, {
      statement: "Acquis à déplacer malgré titre déjà présent ailleurs.",
      kind: "HYPOTHESIS",
      subjectId: source.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
    });
    const before = await listKnowledge(pilotId, prep.id);
    const existingTarget = before.subjects.find((s) => s.title === "Cible existante")!;
    const split = await splitSubject(pilotId, prep.id, source.subjectId!, {
      newTitle: "Cible existante",
      acquisIds: [a.acquisId!],
      openPointIds: [],
    });
    expect(split.status).toBe("AVAILABLE");
    if (split.status !== "AVAILABLE") throw new Error("expected AVAILABLE");
    expect(split.newSubjectId).not.toBe(existingTarget.id);
    expect(split.createdNewIdentity).toBe(true);
    const neo = (
      await db.select().from(knowledgeSubjects).where(eq(knowledgeSubjects.id, split.newSubjectId))
    )[0];
    expect(neo.originatedFromSubjectId).toBe(source.subjectId);
  });

  it("C1: merge rollback on injected failure — no residual MERGED/SPLIT events", async () => {
    const pilotId = await seedPilot("C1-rollback");
    const prep = await openOrCreatePreparation(pilotId);
    const a = await ensureSubject(pilotId, prep.id, "Keep");
    const b = await ensureSubject(pilotId, prep.id, "Absorb");
    const acq = await capitalizeAcquis(pilotId, prep.id, {
      statement: "Acquis sur absorb qui doit rester si rollback.",
      kind: "HYPOTHESIS",
      subjectId: b.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
    });
    const op = await openPoint(pilotId, prep.id, {
      statement: "Point ouvert absorbé à restaurer après rollback.",
      subjectId: b.subjectId,
      provenance: { sourceKind: "pilot" },
    });
    const eventsBefore = await db
      .select()
      .from(knowledgeSubjectEvents)
      .where(
        and(
          eq(knowledgeSubjectEvents.preparationId, prep.id),
          eq(knowledgeSubjectEvents.ownerPilotId, pilotId),
        ),
      );
    const beforeIds = new Set(eventsBefore.map((e) => e.id));
    const beforeMergedSplit = eventsBefore.filter(
      (e) => e.eventType === "MERGED" || e.eventType === "SPLIT",
    );

    const failed = await mergeSubjects(pilotId, prep.id, a.subjectId!, b.subjectId!, {
      injectFailureAfter: "move",
    });
    expect(failed.status).toBe("FAILED");
    if (failed.status !== "FAILED") throw new Error("expected FAILED");
    expect(failed.rolledBack).toBe(true);

    const bRow = (
      await db.select().from(knowledgeSubjects).where(eq(knowledgeSubjects.id, b.subjectId!))
    )[0];
    expect(bRow.status).toBe("ACTIVE");
    const acqRow = (
      await db.select().from(knowledgeAcquis).where(eq(knowledgeAcquis.id, acq.acquisId!))
    )[0];
    expect(acqRow.subjectId).toBe(b.subjectId);
    const opRow = (
      await db.select().from(knowledgeOpenPoints).where(eq(knowledgeOpenPoints.id, op.openPointId!))
    )[0];
    expect(opRow.subjectId).toBe(b.subjectId);

    const eventsAfter = await db
      .select()
      .from(knowledgeSubjectEvents)
      .where(
        and(
          eq(knowledgeSubjectEvents.preparationId, prep.id),
          eq(knowledgeSubjectEvents.ownerPilotId, pilotId),
        ),
      );
    const residualMutation = eventsAfter.filter(
      (e) =>
        !beforeIds.has(e.id) && (e.eventType === "MERGED" || e.eventType === "SPLIT"),
    );
    expect(residualMutation).toHaveLength(0);
    expect(
      eventsAfter.filter((e) => e.eventType === "MERGED" || e.eventType === "SPLIT"),
    ).toHaveLength(beforeMergedSplit.length);
  });

  it("C1: concurrent splits targeting the same Acquis — at most one valid assignment", async () => {
    const pilotId = await seedPilot("C1-same-acq");
    const prep = await openOrCreatePreparation(pilotId);
    const source = await ensureSubject(pilotId, prep.id, "Same acquis origin");
    const shared = await capitalizeAcquis(pilotId, prep.id, {
      statement: "Acquis unique ciblé par deux séparations concurrentes.",
      kind: "HYPOTHESIS",
      subjectId: source.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
    });
    const [r1, r2] = await Promise.all([
      splitSubject(pilotId, prep.id, source.subjectId!, {
        newTitle: "Branche A",
        acquisIds: [shared.acquisId!],
        openPointIds: [],
      }),
      splitSubject(pilotId, prep.id, source.subjectId!, {
        newTitle: "Branche B",
        acquisIds: [shared.acquisId!],
        openPointIds: [],
      }),
    ]);
    const available = [r1, r2].filter((r) => r.status === "AVAILABLE");
    const refused = [r1, r2].filter(
      (r) => r.status === "FAILED" || r.status === "CONFLICT",
    );
    expect(available.length).toBe(1);
    expect(refused.length).toBe(1);
    if (available[0].status !== "AVAILABLE") throw new Error("expected one AVAILABLE");
    const k = await listKnowledge(pilotId, prep.id);
    const row = k.acquis.find((x) => x.id === shared.acquisId)!;
    expect(row.subjectId).toBe(available[0].newSubjectId);
    // Exactly one SPLIT event; journal points at source with newSubjectId in payload
    const splitEvents = await db
      .select()
      .from(knowledgeSubjectEvents)
      .where(
        and(
          eq(knowledgeSubjectEvents.preparationId, prep.id),
          eq(knowledgeSubjectEvents.ownerPilotId, pilotId),
          eq(knowledgeSubjectEvents.eventType, "SPLIT"),
        ),
      );
    expect(splitEvents).toHaveLength(1);
    expect(splitEvents[0].subjectId).toBe(source.subjectId);
    const payload = JSON.parse(splitEvents[0].payloadJson) as { newSubjectId?: string };
    expect(payload.newSubjectId).toBe(available[0].newSubjectId);
  });

  it("C1: concurrent splits on same origin distinct acquis — serialize with coherent filiation", async () => {
    const pilotId = await seedPilot("C1-race");
    const prep = await openOrCreatePreparation(pilotId);
    const source = await ensureSubject(pilotId, prep.id, "Race origin");
    const a1 = await capitalizeAcquis(pilotId, prep.id, {
      statement: "Premier acquis concurrent pour split race test.",
      kind: "HYPOTHESIS",
      subjectId: source.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
    });
    const a2 = await capitalizeAcquis(pilotId, prep.id, {
      statement: "Second acquis concurrent pour split race test.",
      kind: "HYPOTHESIS",
      subjectId: source.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
    });
    const [r1, r2] = await Promise.all([
      splitSubject(pilotId, prep.id, source.subjectId!, {
        newTitle: "Race 1",
        acquisIds: [a1.acquisId!],
        openPointIds: [],
      }),
      splitSubject(pilotId, prep.id, source.subjectId!, {
        newTitle: "Race 2",
        acquisIds: [a2.acquisId!],
        openPointIds: [],
      }),
    ]);
    const statuses = [r1.status, r2.status];
    expect(statuses.every((s) => s === "AVAILABLE" || s === "FAILED" || s === "CONFLICT")).toBe(
      true,
    );
    expect(statuses.filter((s) => s === "AVAILABLE").length).toBeGreaterThanOrEqual(1);
    const k = await listKnowledge(pilotId, prep.id);
    const s1 = k.acquis.find((x) => x.id === a1.acquisId)!;
    const s2 = k.acquis.find((x) => x.id === a2.acquisId)!;
    expect(s1.subjectId).toBeTruthy();
    expect(s2.subjectId).toBeTruthy();
    // No double assignment of the same acquis identity
    expect(new Set([s1.id, s2.id]).size).toBe(2);
    if (r1.status === "AVAILABLE" && r2.status === "AVAILABLE") {
      expect(s1.subjectId).toBe(r1.newSubjectId);
      expect(s2.subjectId).toBe(r2.newSubjectId);
      expect(s1.subjectId).not.toBe(s2.subjectId);
    }
  });

  it("C1: concurrent split+merge on overlapping resources — serialized or explicit conflict", async () => {
    const pilotId = await seedPilot("C1-split-merge");
    const prep = await openOrCreatePreparation(pilotId);
    const keep = await ensureSubject(pilotId, prep.id, "Keep SM");
    const absorb = await ensureSubject(pilotId, prep.id, "Absorb SM");
    const shared = await capitalizeAcquis(pilotId, prep.id, {
      statement: "Acquis overlap split et merge concurrent.",
      kind: "HYPOTHESIS",
      subjectId: absorb.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
    });
    const [splitR, mergeR] = await Promise.all([
      splitSubject(pilotId, prep.id, absorb.subjectId!, {
        newTitle: "Split pendant merge",
        acquisIds: [shared.acquisId!],
        openPointIds: [],
      }),
      mergeSubjects(pilotId, prep.id, keep.subjectId!, absorb.subjectId!),
    ]);
    const outcomes = [splitR.status, mergeR.status];
    expect(
      outcomes.every((s) => s === "AVAILABLE" || s === "FAILED" || s === "CONFLICT"),
    ).toBe(true);
    expect(outcomes.filter((s) => s === "AVAILABLE").length).toBeGreaterThanOrEqual(1);
    // Final acquis has exactly one subject assignment — never lost, never duplicated
    const k = await listKnowledge(pilotId, prep.id);
    const row = k.acquis.find((x) => x.id === shared.acquisId)!;
    expect(row.subjectId).toBeTruthy();
    const absorbRow = (
      await db.select().from(knowledgeSubjects).where(eq(knowledgeSubjects.id, absorb.subjectId!))
    )[0];
    if (mergeR.status === "AVAILABLE" && splitR.status !== "AVAILABLE") {
      expect(absorbRow.status).toBe("MERGED");
      expect(row.subjectId).toBe(keep.subjectId);
    } else if (splitR.status === "AVAILABLE" && mergeR.status !== "AVAILABLE") {
      expect(absorbRow.status).toBe("ACTIVE");
      expect(row.subjectId).toBe(splitR.newSubjectId);
    } else if (splitR.status === "AVAILABLE" && mergeR.status === "AVAILABLE") {
      // Split moved first, then merge absorbed empty source — acquis stays on new subject
      expect(absorbRow.status).toBe("MERGED");
      expect(row.subjectId).toBe(splitR.newSubjectId);
      expect(row.subjectId).not.toBe(keep.subjectId);
    }
  });

  it("C2: concurrent revise same base → one AVAILABLE, one CONFLICT; no duplicate rev numbers", async () => {
    const pilotId = await seedPilot("C2-race");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Doc", "# v1\n", undefined, {
      correlationKey: `c2-create-${newId("k")}`,
    });
    expect(v1.status).toBe("AVAILABLE");
    if (v1.status !== "AVAILABLE") throw new Error("expected AVAILABLE");
    const [a, b] = await Promise.all([
      reviseDocument(pilotId, prep.id, {
        documentId: v1.documentId,
        baseRevisionId: v1.revisionId,
        contentMarkdown: "# v2a\n",
        correlationKey: `c2-a-${newId("k")}`,
      }),
      reviseDocument(pilotId, prep.id, {
        documentId: v1.documentId,
        baseRevisionId: v1.revisionId,
        contentMarkdown: "# v2b\n",
        correlationKey: `c2-b-${newId("k")}`,
      }),
    ]);
    const outcomes = [a.status, b.status].sort();
    expect(outcomes).toContain("AVAILABLE");
    expect(outcomes).toContain("CONFLICT");
    const list = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
    const nums = list.revisions.map((r) => r.revisionNumber);
    expect(new Set(nums).size).toBe(nums.length);
    expect(list.revisions.find((r) => r.id === v1.revisionId)?.contentMarkdown).toBe("# v1\n");
  });

  it("C2: failure after lock rolls back — no orphan AVAILABLE", async () => {
    const pilotId = await seedPilot("C2-fail");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Doc", "# base\n", undefined, {
      correlationKey: `c2-base-${newId("k")}`,
    });
    if (v1.status !== "AVAILABLE") throw new Error("expected AVAILABLE");
    const failed = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# should not commit\n",
      correlationKey: `c2-fail-${newId("k")}`,
      injectFailureAfterLock: true,
    });
    expect(failed.status).toBe("FAILED");
    expect("rolledBack" in failed && failed.rolledBack).toBe(true);
    const list = await listDocumentRevisions(pilotId, prep.id, v1.documentId!);
    expect(list.revisions).toHaveLength(1);
    expect(list.revisions[0].id).toBe(v1.revisionId);
  });

  it("C3: creation retry same correlation → one document; incompatible payload CONFLICT", async () => {
    const pilotId = await seedPilot("C3-idem");
    const prep = await openOrCreatePreparation(pilotId);
    const key = `create-${newId("idem")}`;
    const r1 = await savePreparationDocument(pilotId, prep.id, "T", "# one\n", undefined, {
      correlationKey: key,
    });
    const r2 = await savePreparationDocument(pilotId, prep.id, "T", "# one\n", undefined, {
      correlationKey: key,
    });
    const r3 = await savePreparationDocument(pilotId, prep.id, "T", "# one\n", undefined, {
      correlationKey: key,
    });
    expect(r1.status).toBe("AVAILABLE");
    if (r1.status !== "AVAILABLE") throw new Error("expected AVAILABLE");
    expect(r2.status).toBe("AVAILABLE");
    expect(r3.status).toBe("AVAILABLE");
    expect("idempotentReplay" in r2 && r2.idempotentReplay).toBe(true);
    expect("idempotentReplay" in r3 && r3.idempotentReplay).toBe(true);
    expect(r2.documentId).toBe(r1.documentId);
    expect(r3.documentId).toBe(r1.documentId);
    const docs = await db
      .select()
      .from(documents)
      .where(and(eq(documents.preparationId, prep.id), eq(documents.ownerPilotId, pilotId)));
    expect(docs.filter((d) => d.creationCorrelationKey === key)).toHaveLength(1);

    const bad = await savePreparationDocument(pilotId, prep.id, "T", "# OTHER\n", undefined, {
      correlationKey: key,
    });
    expect(bad.status).toBe("CONFLICT");
    if (bad.status !== "CONFLICT") throw new Error("expected CONFLICT");
    expect(bad.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
  });

  it("C3 concurrent: same key + same payload → one document, coherent AVAILABLE", async () => {
    const pilotId = await seedPilot("C3-conc-same");
    const prep = await openOrCreatePreparation(pilotId);
    const key = `conc-same-${newId("x")}`;
    const payload = "# concurrent same\n";
    const [a, b] = await Promise.all([
      savePreparationDocument(pilotId, prep.id, "T", payload, undefined, { correlationKey: key }),
      savePreparationDocument(pilotId, prep.id, "T", payload, undefined, { correlationKey: key }),
    ]);
    const statuses = [a.status, b.status];
    expect(statuses.every((s) => s === "AVAILABLE" || s === "UNKNOWN")).toBe(true);
    const docs = await db
      .select()
      .from(documents)
      .where(
        and(
          eq(documents.preparationId, prep.id),
          eq(documents.ownerPilotId, pilotId),
          eq(documents.creationCorrelationKey, key),
        ),
      );
    expect(docs).toHaveLength(1);
    const revs = await db
      .select()
      .from(documentRevisions)
      .where(eq(documentRevisions.documentId, docs[0].id));
    expect(revs).toHaveLength(1);
    // Final reconcile (ACK lost / restart) yields AVAILABLE with fingerprint match
    const again = await savePreparationDocument(pilotId, prep.id, "T", payload, undefined, {
      correlationKey: key,
    });
    expect(again.status).toBe("AVAILABLE");
    if (again.status !== "AVAILABLE") throw new Error("expected AVAILABLE");
    expect(again.documentId).toBe(docs[0].id);
    expect("idempotentReplay" in again && again.idempotentReplay).toBe(true);
    if (a.status === "AVAILABLE" && b.status === "AVAILABLE") {
      expect(a.documentId).toBe(b.documentId);
      expect(a.revisionId).toBe(b.revisionId);
    }
  });

  it("C3 concurrent: same key + incompatible payload → CONFLICT on loser path", async () => {
    const pilotId = await seedPilot("C3-conc-diff");
    const prep = await openOrCreatePreparation(pilotId);
    const key = `conc-diff-${newId("x")}`;
    const [a, b] = await Promise.all([
      savePreparationDocument(pilotId, prep.id, "T", "# payload-A\n", undefined, {
        correlationKey: key,
      }),
      savePreparationDocument(pilotId, prep.id, "T", "# payload-B\n", undefined, {
        correlationKey: key,
      }),
    ]);
    const docs = await db
      .select()
      .from(documents)
      .where(
        and(
          eq(documents.preparationId, prep.id),
          eq(documents.ownerPilotId, pilotId),
          eq(documents.creationCorrelationKey, key),
        ),
      );
    expect(docs).toHaveLength(1);
    const statuses = [a.status, b.status].sort();
    // Winner AVAILABLE (or UNKNOWN then settle); loser CONFLICT with CORRELATION_PAYLOAD_MISMATCH
    expect(statuses.includes("CONFLICT") || statuses.includes("AVAILABLE")).toBe(true);
    const conflicted = [a, b].filter((r) => r.status === "CONFLICT");
    if (conflicted.length > 0) {
      expect(conflicted.every((r) => r.reason === "CORRELATION_PAYLOAD_MISMATCH")).toBe(true);
    }
    // Deterministic post-settle: one payload wins; the other mismatches
    const settleA = await savePreparationDocument(pilotId, prep.id, "T", "# payload-A\n", undefined, {
      correlationKey: key,
    });
    const settleB = await savePreparationDocument(pilotId, prep.id, "T", "# payload-B\n", undefined, {
      correlationKey: key,
    });
    const settleStatuses = [settleA.status, settleB.status].sort();
    expect(settleStatuses).toContain("AVAILABLE");
    expect(settleStatuses).toContain("CONFLICT");
  });

  it("C3: cross-project / foreign pilot correlation key does not leak", async () => {
    const p1 = await seedPilot("C3-x1");
    const p2 = await seedPilot("C3-x2");
    const prep1 = await openOrCreatePreparation(p1);
    const prep2 = await openOrCreatePreparation(p2);
    const key = `shared-looking-${newId("x")}`;
    const first = await savePreparationDocument(p1, prep1.id, "T", "# p1\n", undefined, {
      correlationKey: key,
    });
    expect(first.status).toBe("AVAILABLE");
    const other = await savePreparationDocument(p2, prep2.id, "T", "# p1\n", undefined, {
      correlationKey: key,
    });
    expect(other.status).toBe("AVAILABLE");
    expect(other.documentId).not.toBe(first.documentId);
    await expect(
      savePreparationDocument(p2, prep1.id, "T", "# p1\n", undefined, {
        correlationKey: key,
      }),
    ).rejects.toMatchObject({ code: "NOT_FOUND" });
  });

  it("C3: two distinct correlation keys → two documents", async () => {
    const pilotId = await seedPilot("C3-two");
    const prep = await openOrCreatePreparation(pilotId);
    const a = await savePreparationDocument(pilotId, prep.id, "A", "# a\n", undefined, {
      correlationKey: `k-a-${newId("x")}`,
    });
    const b = await savePreparationDocument(pilotId, prep.id, "B", "# b\n", undefined, {
      correlationKey: `k-b-${newId("x")}`,
    });
    expect(a.documentId).not.toBe(b.documentId);
  });

  it("C3 ACK lost: re-read by correlation reconciles after commit", async () => {
    const pilotId = await seedPilot("C3-ack");
    const prep = await openOrCreatePreparation(pilotId);
    const key = `ack-${newId("x")}`;
    const first = await savePreparationDocument(pilotId, prep.id, "Ack", "# ack\n", undefined, {
      correlationKey: key,
    });
    // Simulate lost ACK: client retries without remembering documentId
    const again = await savePreparationDocument(pilotId, prep.id, "Ack", "# ack\n", undefined, {
      correlationKey: key,
    });
    if (first.status !== "AVAILABLE") throw new Error("expected AVAILABLE");
    if (again.status !== "AVAILABLE") throw new Error("expected AVAILABLE replay");
    expect(again.documentId).toBe(first.documentId);
    expect(again.revisionId).toBe(first.revisionId);
    expect("idempotentReplay" in again && again.idempotentReplay).toBe(true);
  });

  it("C4: ordered diff duplicate semantics + budget constant visible", () => {
    const d = diffMarkdown("x\nx\ny", "x\ny");
    expect(d.removed).toEqual(["x"]);
    expect(d.added).toEqual([]);
    expect(MAX_DIFF_CELLS).toBeGreaterThan(0);
  });

  it("C5: FACT without epistemic=established is skipped; keyword-only chatter not capitalised", async () => {
    const pilotId = await seedPilot("C5-epi");
    const prep = await openOrCreatePreparation(pilotId);
    const skip = await capitalizeAcquis(pilotId, prep.id, {
      statement: "Ceci serait un faux fait sans justification épistémique.",
      kind: "FACT",
      provenance: { sourceKind: "nora", epistemic: "hypothesized" },
    });
    expect(skip.status).toBe("SKIPPED");

    const soft = await maybeCapitalizeFromExchange(pilotId, prep.id, {
      userText: "bonjour option",
      assistantText: "salut",
      generationId: "g1",
      userMessageId: "m1",
    });
    expect(soft.capitalisations).toHaveLength(0);
    expect(soft.humanDecisionCreated).toBe(false);

    const ok = await capitalizeAcquis(pilotId, prep.id, {
      statement: "Fait établi avec provenance explicite pour le correctif.",
      kind: "FACT",
      provenance: { sourceKind: "document", epistemic: "established", sourceId: "doc1" },
    });
    expect(ok.status).toBe("AVAILABLE");
  });

  it("C5: open points preserved across split", async () => {
    const pilotId = await seedPilot("C5-op");
    const prep = await openOrCreatePreparation(pilotId);
    const s = await ensureSubject(pilotId, prep.id, "Avec ouvert");
    const a = await capitalizeAcquis(pilotId, prep.id, {
      statement: "Acquis déplacé lors de la séparation avec point ouvert.",
      kind: "HYPOTHESIS",
      subjectId: s.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
    });
    const op = await openPoint(pilotId, prep.id, {
      statement: "Point ouvert transversal à conserver après split.",
      subjectId: s.subjectId,
      provenance: { sourceKind: "pilot" },
    });
    const split = await splitSubject(pilotId, prep.id, s.subjectId!, {
      newTitle: "Nouveau",
      acquisIds: [a.acquisId!],
      openPointIds: [],
    });
    expect(split.status).toBe("AVAILABLE");
    const k = await listKnowledge(pilotId, prep.id);
    expect(k.openPoints.find((o) => o.id === op.openPointId)?.subjectId).toBe(s.subjectId);
    expect(k.openPoints.find((o) => o.id === op.openPointId)?.status).toBe("OPEN");
  });
});
