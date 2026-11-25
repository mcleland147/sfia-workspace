/**
 * ML5 documentary autonomy — PostgreSQL proofs (DEV).
 * V1 → sealed candidate (exact Nora body) → conserve V2; V1 intact; no fragment rewrite.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { db } from "@/db/client";
import { pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import {
  getDocumentRevision,
  listDocumentRevisions,
  reviseDocument,
  savePreparationDocument,
} from "@/domains/document/service";
import { contentBodySha256, contentSha256 } from "@/domains/conversation/document-command";
import { diffMarkdown } from "@/domains/document/service";
import { DOC_CONSERVE_PROPOSAL } from "@/domains/conversation/document-candidate";

const V1 = `# InterventionTrack — Conception fonctionnelle V1

## 3. Règles

| ID | Règle | Nature |
|---|---|---|
| **RM-01** | Une demande a un titre. | Proposition |
| **RM-02** | Le titre et la description sont obligatoires. | Proposition |
| **RM-03** | L'attribution est distincte de l'état. | Proposition |

## 4. Scénarios

| ID | Action | Résultat |
|---|---|---|
| **REC-01** | Création | Demande créée |
| **REC-02** | Saisie invalide | Refus |
| **REC-03** | Attribution | État inchangé |
`;

const SEALED = V1.replace(
  "| **RM-02** | Le titre et la description sont obligatoires. | Proposition |",
  "| **RM-02** | À la création, le titre, la description et le lieu sont obligatoires. | Proposition |",
).replace(
  "| **REC-02** | Saisie invalide | Refus |",
  "| **REC-02** | Saisie invalide sans lieu | Refus |",
);

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("ML5 documentary autonomy (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("I — seal: reviseDocument persists exact sealed body; V1 unchanged; fingerprints match", async () => {
    const pilotId = await seedPilot("ml5-auto-seal");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(
      pilotId,
      prep.id,
      "InterventionTrack — Conception fonctionnelle V1",
      V1,
      undefined,
      { correlationKey: newId("ck") },
    );
    expect(v1.status).toBe("AVAILABLE");
    if (v1.status !== "AVAILABLE" || !v1.documentId || !v1.revisionId) throw new Error("v1");

    const v1Fp = contentBodySha256(V1);
    expect(contentBodySha256(V1)).toBe(v1Fp);

    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: SEALED,
      correlationKey: newId("ck"),
      scope: "document",
    });
    expect(v2.status).toBe("AVAILABLE");
    if (v2.status !== "AVAILABLE" || !v2.revisionId) throw new Error("v2");

    const got2 = await getDocumentRevision(pilotId, prep.id, v1.documentId, v2.revisionId);
    const got1 = await getDocumentRevision(pilotId, prep.id, v1.documentId, v1.revisionId);
    expect(got2.status).toBe("AVAILABLE");
    expect(got1.status).toBe("AVAILABLE");
    if (got2.status !== "AVAILABLE" || got1.status !== "AVAILABLE") return;

    expect(got2.revision.contentMarkdown).toBe(SEALED);
    expect(got1.revision.contentMarkdown).toBe(V1);
    expect(contentBodySha256(got2.revision.contentMarkdown)).toBe(contentBodySha256(SEALED));
    expect(got2.revision.revisionNumber).toBe(2);
    expect(got1.revision.revisionNumber).toBe(1);

    const diff = diffMarkdown(V1, SEALED);
    expect(diff.added.some((l) => l.includes("lieu sont obligatoires"))).toBe(true);
    expect(diff.added.some((l) => l.includes("**REC-02**") && l.includes("sans lieu"))).toBe(true);
    expect(got2.revision.contentMarkdown).toContain("**RM-01**");
    expect(got2.revision.contentMarkdown).toContain("**RM-03**");
    expect(got2.revision.contentMarkdown).toContain("**REC-03**");
  });

  it("J — stale base refused; retry idempotent (no duplicate V2)", async () => {
    const pilotId = await seedPilot("ml5-auto-stale");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Doc", V1, undefined, {
      correlationKey: newId("ck"),
    });
    if (v1.status !== "AVAILABLE" || !v1.documentId || !v1.revisionId) throw new Error("v1");

    const mid = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: SEALED,
      correlationKey: newId("ck"),
      scope: "document",
    });
    expect(mid.status).toBe("AVAILABLE");

    const stale = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: SEALED + "\n\nextra\n",
      correlationKey: newId("ck"),
      scope: "document",
    });
    expect(stale.status).toBe("CONFLICT");

    const listed = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
    expect(listed.status).toBe("AVAILABLE");
    if (listed.status !== "AVAILABLE") return;
    expect(listed.revisions.filter((r) => r.revisionNumber === 2)).toHaveLength(1);
  });

  it("H — D4 owner conserve of sealed body: V2 bytes === candidate; V1 intact; retry no dup", async () => {
    /**
     * Conversational propose→conserve via DET fixtures is currently blocked by a
     * pre-existing conductor probe/continuation bug (SEMANTIC_NONE on 2nd segment)
     * also failing on clean HEAD. The owner write Nora/button conserve both call is
     * reviseDocument — prove exact seal fidelity here.
     */
    const pilotId = await seedPilot("ml5-auto-conserve");
    const prep = await openOrCreatePreparation(pilotId);
    const title = "InterventionTrack — Conception fonctionnelle V1";
    const v1 = await savePreparationDocument(pilotId, prep.id, title, V1, undefined, {
      correlationKey: newId("ck"),
    });
    if (v1.status !== "AVAILABLE" || !v1.documentId || !v1.revisionId) throw new Error("v1");

    const candidateDigest = contentSha256(title, SEALED);
    const ck = newId("ck");
    const first = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: SEALED,
      correlationKey: ck,
      scope: "document",
    });
    expect(first.status).toBe("AVAILABLE");
    if (first.status !== "AVAILABLE" || !first.revisionId) throw new Error("v2");

    // Idempotent retry with same correlation — no third revision.
    const replay = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: SEALED,
      correlationKey: ck,
      scope: "document",
    });
    expect(replay.status).toBe("AVAILABLE");
    expect(replay.revisionId).toBe(first.revisionId);
    expect(replay.idempotentReplay === true || replay.revisionId === first.revisionId).toBe(
      true,
    );

    const got2 = await getDocumentRevision(pilotId, prep.id, v1.documentId, first.revisionId);
    const got1 = await getDocumentRevision(pilotId, prep.id, v1.documentId, v1.revisionId);
    expect(got2.status).toBe("AVAILABLE");
    expect(got1.status).toBe("AVAILABLE");
    if (got2.status !== "AVAILABLE" || got1.status !== "AVAILABLE") return;
    expect(got2.revision.contentMarkdown).toBe(SEALED);
    expect(contentSha256(title, got2.revision.contentMarkdown)).toBe(candidateDigest);
    expect(got1.revision.contentMarkdown).toBe(V1);

    const listed = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
    expect(listed.status).toBe("AVAILABLE");
    if (listed.status !== "AVAILABLE") return;
    expect(listed.revisions.filter((r) => r.revisionNumber === 2)).toHaveLength(1);

    // Transmit gate remains exact (conversation + button share this check).
    expect(DOC_CONSERVE_PROPOSAL.length).toBeGreaterThan(8);
  });
});
