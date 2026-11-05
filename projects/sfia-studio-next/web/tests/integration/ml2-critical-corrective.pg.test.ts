import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";
process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";

import { and, eq } from "drizzle-orm";
import { mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { db } from "@/db/client";
import {
  conversationTurnCommands,
  documentRevisions,
  knowledgeAcquis,
} from "@/db/schema";
import { createDevTestSession } from "@/domains/identity/session";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";
import {
  injectStaleRunningForTests,
  reconcileRunningCommand,
  reserveTurnCommand,
} from "@/domains/conversation/turn-command";
import {
  readProjectDocumentRevision,
  searchProjectResources,
} from "@/domains/conversation/d4-read-tools";
import {
  getDocumentRevision,
  savePreparationDocument,
} from "@/domains/document/service";
import { capitalizeAcquis, ensureSubject } from "@/domains/knowledge/service";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";
import { newOperationId, queryObsByOperationId } from "@/lib/observability";

describe("ML2 Critical corrective — turn / D4 / search (PG)", () => {
  let pilotId: string;
  let preparationId: string;
  let conversationId: string;
  let obsDir: string;
  const prevObs = process.env.SFIA_OBS_DIR;
  const prevBase = process.env.SFIA_OBS_BASE;

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    obsDir = mkdtempSync(join(tmpdir(), "sfia-obs-crit-"));
    process.env.SFIA_OBS_DIR = obsDir;
    process.env.SFIA_OBS_BASE = obsDir;
    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
    pilotId = sess.pilotId;
    const prep = await openOrCreatePreparation(pilotId);
    preparationId = prep.id;
    const ctx = await openOrCreatePreparation(pilotId, preparationId);
    void ctx;
    const { getConversationId } = await import("@/domains/conversation/service");
    const cid = await getConversationId(pilotId, preparationId);
    if (!cid) throw new Error("conversation missing");
    conversationId = cid;
  });

  afterAll(() => {
    if (prevObs === undefined) delete process.env.SFIA_OBS_DIR;
    else process.env.SFIA_OBS_DIR = prevObs;
    if (prevBase === undefined) delete process.env.SFIA_OBS_BASE;
    else process.env.SFIA_OBS_BASE = prevBase;
    rmSync(obsDir, { recursive: true, force: true });
  });

  it("FIX-TURN-01: concurrent same key+fingerprint → single turn, no second assistant", async () => {
    const key = `crit-conc-${Date.now()}`;
    const content = "Compare option Alpha et option Beta pour le sas critique.";
    const settled = await Promise.allSettled([
      postUserMessageAndNora(pilotId, preparationId, content, { clientTurnKey: key }),
      postUserMessageAndNora(pilotId, preparationId, content, { clientTurnKey: key }),
    ]);
    const fulfilled = settled
      .filter((s): s is PromiseFulfilledResult<Awaited<ReturnType<typeof postUserMessageAndNora>>> => s.status === "fulfilled")
      .map((s) => s.value);
    const rejected = settled.filter((s) => s.status === "rejected");
    for (const r of rejected) {
      if (r.status !== "rejected") continue;
      expect(r.reason).toSatisfy(
        (e: unknown) => e instanceof StudioError && (e.code === "TURN_IN_PROGRESS" || e.code === "PAYLOAD_MISMATCH"),
      );
    }
    expect(fulfilled.length).toBeGreaterThanOrEqual(1);
    const msgs = await listMessages(pilotId, preparationId);
    const users = msgs.filter((m) => m.role === "user" && m.content === content);
    expect(users.length).toBe(1);
    const cmds = await db
      .select()
      .from(conversationTurnCommands)
      .where(
        and(
          eq(conversationTurnCommands.conversationId, conversationId),
          eq(conversationTurnCommands.clientTurnKey, key),
        ),
      );
    expect(cmds).toHaveLength(1);
  });

  it("FIX-TURN-01b: same key divergent payload → 409", async () => {
    const key = `crit-mismatch-${Date.now()}`;
    await postUserMessageAndNora(pilotId, preparationId, "Intention stable critique A", {
      clientTurnKey: key,
    });
    await expect(
      postUserMessageAndNora(pilotId, preparationId, "Intention divergente critique B", {
        clientTurnKey: key,
      }),
    ).rejects.toSatisfy((e: unknown) => e instanceof StudioError && e.code === "PAYLOAD_MISMATCH");
  });

  it("FIX-TURN-02: stale RUNNING reconciles to UNKNOWN; thread usable", async () => {
    const key = `crit-stale-${Date.now()}`;
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: key,
      content: "Tour orphelin injecté pour reprise",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh");
    await injectStaleRunningForTests(reserved.commandId);
    const recon = await reconcileRunningCommand(reserved.commandId);
    expect(recon.status).toBe("UNKNOWN");
    expect(recon.reconciled).toBe(true);

    const next = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Compare reprise après orphan RUNNING",
      { clientTurnKey: `crit-after-stale-${Date.now()}` },
    );
    expect(next.idempotentReplay).toBe(false);
    expect(next.status).toBe("COMPLETE");
  });

  it("FIX-TURN-03: replaying UNKNOWN does not invent COMPLETE result", async () => {
    const key = `crit-unknown-replay-${Date.now()}`;
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: key,
      content: "Contenu unknown replay",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh");
    await injectStaleRunningForTests(reserved.commandId);
    const first = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: key,
      content: "Contenu unknown replay",
    });
    expect(first.kind).toBe("replay");
    if (first.kind !== "replay") throw new Error("expected replay");
    expect(first.status).toBe("UNKNOWN");
    const second = await postUserMessageAndNora(pilotId, preparationId, "Contenu unknown replay", {
      clientTurnKey: key,
    });
    expect(second.idempotentReplay).toBe(true);
    expect(second.status).toBe("UNKNOWN");
    expect(second.noraMode).not.toBe("deterministic-fixture");
  });

  it("FIX-D4-01: SAVING/UNKNOWN never served as AVAILABLE content", async () => {
    const doc = await savePreparationDocument(
      pilotId,
      preparationId,
      "Doc critique",
      "# Available body\nSecret-ish content should not leak from SAVING\n",
      undefined,
      { correlationKey: `crit-doc-${newId("k")}` },
    );
    expect(doc.status).toBe("AVAILABLE");
    if (doc.status !== "AVAILABLE") throw new Error("expected AVAILABLE");

    // Inject SAVING revision row (newer than AVAILABLE)
    const savingId = newId("drev");
    await db.insert(documentRevisions).values({
      id: savingId,
      documentId: doc.documentId,
      revisionNumber: doc.revisionNumber + 1,
      contentMarkdown: "# SAVING SECRET BODY MUST NOT APPEAR\n",
      status: "SAVING",
      correlationKey: `saving-${newId("k")}`,
      provenanceJson: "{}",
      scope: "document",
    });

    const scope = {
      pilotId,
      preparationId,
      operationId: newOperationId(),
      generationId: newId("gen"),
      budget: { remainingCalls: 5, remainingChars: 50_000 },
    };
    const readLatest = await readProjectDocumentRevision(scope, {
      documentId: doc.documentId,
    });
    expect(readLatest.status).toBe("STALE");
    expect(JSON.stringify(readLatest)).not.toContain("SAVING SECRET");

    const readSaving = await readProjectDocumentRevision(scope, {
      documentId: doc.documentId,
      revisionId: savingId,
    });
    expect(readSaving.status).toBe("STALE");
    expect(JSON.stringify(readSaving)).not.toContain("SAVING SECRET");

    const pub = await getDocumentRevision(pilotId, preparationId, doc.documentId, savingId);
    expect(pub.status).toBe("SAVING");
    if ("revision" in pub && pub.revision) {
      expect(pub.revision.contentMarkdown).toBe("");
    }
  });

  it("FIX-D4-02: other preparation/pilot cannot read document content", async () => {
    const other = await createDevTestSession("b", { host: "127.0.0.1:3100" });
    const otherPrep = await openOrCreatePreparation(other.pilotId);
    const doc = await savePreparationDocument(
      pilotId,
      preparationId,
      "Privé",
      "# private body\n",
      undefined,
      { correlationKey: `crit-priv-${newId("k")}` },
    );
    if (doc.status !== "AVAILABLE") throw new Error("expected AVAILABLE");
    const scope = {
      pilotId: other.pilotId,
      preparationId: otherPrep.id,
      operationId: newOperationId(),
      generationId: newId("gen"),
      budget: { remainingCalls: 3, remainingChars: 20_000 },
    };
    const denied = await readProjectDocumentRevision(scope, { documentId: doc.documentId });
    expect(denied.status).toBe("DENIED");
    expect(JSON.stringify(denied)).not.toContain("private body");
  });

  it("FIX-D4-03: search finds resource beyond former LIMIT 40 sample", async () => {
    const subject = await ensureSubject(pilotId, preparationId, `Crit bulk ${Date.now()}`);
    const marker = `UNIQUE_MARKER_${Date.now()}_BEYOND40`;
    for (let i = 0; i < 45; i++) {
      await db.insert(knowledgeAcquis).values({
        id: newId("acq"),
        preparationId,
        ownerPilotId: pilotId,
        subjectId: subject.subjectId!,
        kind: "HYPOTHESIS",
        statement:
          i === 44
            ? `Acquis cible ${marker} pour pagination`
            : `Acquis filler ${i} ${newId("x")}`,
        provenanceJson: JSON.stringify({ sourceKind: "pilot", epistemic: "hypothesized" }),
        status: "CURRENT",
      });
    }
    const scope = {
      pilotId,
      preparationId,
      operationId: newOperationId(),
      generationId: newId("gen"),
      budget: { remainingCalls: 5, remainingChars: 200_000 },
    };
    const found = await searchProjectResources(scope, {
      query: marker,
      types: ["acquis"],
      limit: 10,
      offset: 0,
    });
    expect(found.status).toBe("AVAILABLE");
    if (found.status !== "AVAILABLE" || !("items" in found)) throw new Error("expected AVAILABLE items");
    expect(found.items.some((it) => String(it.preview ?? "").includes(marker))).toBe(true);
    expect(found.totalMatchedExact).toBe(true);
    expect((found.totalMatched ?? 0) >= 1).toBe(true);
  });

  it("FIX-D4-04: search charges returned envelope against char budget", async () => {
    await capitalizeAcquis(pilotId, preparationId, {
      statement: "Petit acquis pour budget chars critique.",
      kind: "HYPOTHESIS",
      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
    });
    const scope = {
      pilotId,
      preparationId,
      operationId: newOperationId(),
      generationId: newId("gen"),
      budget: { remainingCalls: 2, remainingChars: 80 },
    };
    const before = scope.budget.remainingChars;
    const result = await searchProjectResources(scope, {
      query: "budget",
      types: ["acquis"],
      limit: 5,
    });
    expect(scope.budget.remainingChars).toBeLessThan(before);
    expect("charsCharged" in result && Number(result.charsCharged) > 0).toBe(true);
  });

  it("obs correlation after turn remains queryable", async () => {
    const key = `crit-obs-${Date.now()}`;
    const turn = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Compare pour corrélation obs",
      { clientTurnKey: key },
    );
    const obs = queryObsByOperationId(String(turn.operationId));
    expect(obs.status).toBe("AVAILABLE");
    expect(obs.events.some((e) => e.event_name.startsWith("d3.turn"))).toBe(true);
  });
});
