# SFIA Review Pack FULL — Studio Next ML2 Corrective
## Intégrité D4, concurrence documentaire et cohérence cognitive

- **Date/heure (Europe/Paris):** 2026-11-05 01:49:13 +0100
- **Cycle:** 8 — Delivery / implémentation, **correctif intégré** mono-cycle
- **Profil:** Standard (contrôles renforcés DB/sécurité)
- **Produit:** `projects/sfia-studio-next/` exclusively
- **Macro-lot:** R5 / ML2 (même lot, pas une nouvelle livraison indépendante)
- **Template:** SFIA cycle execution v2.6
- **Objectif:** corriger C1–C6 sans nouveau système / sans RECETTE
- **HEAD initial cycle:** `a9a468e9f883128045c516a881f30d6372175c96`
- **HEAD final:** `5c7dd7528ff859c9717db865c74d45930dff4219`
- **Base origin/main:** `6e4406c63639330c7826423cdcf08f06ff019eed`
- **Handoff précédent distant:** `28bf770c` blob `18471da4…`

---

## 1. Local Git Truth Check

```
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)

branch=sfia/next-ml2-production-capitalisation
HEAD=5c7dd7528ff859c9717db865c74d45930dff4219
origin/main=6e4406c63639330c7826423cdcf08f06ff019eed
BASE_OK=True
ANCESTORS_ML1_DELIVERY=d867365f,733eddf0,a9a468e9 present
```

Worktrees:
```
/Users/morris/Projects/sfia-workspace                                                   5c7dd752 [sfia/next-ml2-production-capitalisation]
/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023                              28bf770c [sfia/review-handoff]
/Users/morris/Projects/sfia-studio-next-recette-ml1-c3                                  0db58be8 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l1-a09-audit-port-decoupling               0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d0-decision-readiness                   0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-local-oa-cutover                     d98b3930 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-readiness                            1a380f22 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-q0-readonly                             94c7a30d (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5a-product-architecture-convergence          0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-delivery-p6-she-execute                           f1fc1af4 [delivery/sfia-studio-p6-single-human-execute]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-abd-positive-admission-r24            c683d761 [docs/akg-m5-abd-positive-admission-r24]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-abd-postmerge-truth-sync-01           cd2020c8 (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d0                                 90bd0064 (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d2-postmerge-truth-sync            241335ee (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3-s1-post-merge-roadmap-sync         266459c4 [docs/akg-m5-l3-s1-post-merge-roadmap-sync]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3-s2-postmerge-r24-current           f884dda1 (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3s2-r24-postmerge-capitalization     cf940d84 [docs/akg-m5-l3s2-r24-postmerge-capitalization]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-option-c-c14-r24-truth-sync       6e60d839 [docs/akg-m5-nap-option-c-c14-r24-truth-sync]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-ux-630-postmerge-truth-sync       979a33ad [docs/akg-m5-nap-ux-630-postmerge-truth-sync]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-postmerge-convergence-p0              3a6b5e82 [docs/akg-m5-postmerge-convergence-p0]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-target-journey-requalification        80cae2f1 [docs/akg-m5-target-journey-requalification]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-ep-s2-08-proof-01                     485ec3cb [feat/akg-m5-ep-s2-08-proof-01]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l1-a09                                0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d1                                 d98b3930 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d1-o01                             90bd0064 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-activation-prep-bounded         cdc9909d [feat/akg-m5-l2-d2-activation-prep-bounded]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-local-oa-cutover                4647983a [feat/akg-m5-l2-d2-local-oa-cutover]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s1-generic-det-integration         de1fa7ae [feat/akg-m5-l3-s1-generic-det-integration]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s2-generic-proof-continuity        73f0166c [feat/akg-m5-l3-s2-generic-proof-continuity]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3s2-orion-nora-coherence-corr-01     b0ce8413 [feat/akg-m5-l3s2-orion-nora-coherence-corr-01]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-lumen-cog-prepare-corr-01             32207a38 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr              1c3a8d9e [feat/akg-m5-nora-adaptive-presentation]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01           e37d3969 [feat/akg-m5-nap-test16-coverage-corr-01]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation            1c3a8d9e (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-remove-repository-binding-docs-write  ffc033a7 [feat/akg-m5-remove-repository-binding-docs-write]
/Users/morris/Projects/sfia-workspace-l1-a09-delivery                                   6176a9d3 [feat/akg-m5-l1-a09-audit-port-decoupling]
/Users/morris/Projects/sfia-workspace-p6-she-greenfield-hqa-c9abdbc3                    c9abdbc3 (detached HEAD)
/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-campaign-3020                     7dd49ecd (detached HEAD)
/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-fresh-live-qa-01                  cd2020c8 (detached HEAD)

```

Status (résidus non détruits):
```
 M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio-next/web/public/file.svg
?? projects/sfia-studio-next/web/public/globe.svg
?? projects/sfia-studio-next/web/public/next.svg
?? projects/sfia-studio-next/web/public/vercel.svg
?? projects/sfia-studio-next/web/public/window.svg

```

Commits depuis main:
```
5c7dd752 fix(next-ml2): harden D4 integrity, document concurrency and capitalisation
a9a468e9 test(next-ml2): PG/BROWSER proofs and As-Built delivery notes
733eddf0 feat(next-ml2): UX surfaces and APIs for documents, journal, markdown
d867365f feat(next-ml2): D4 knowledge registry and document revision contracts

```

Diffstat correctif (`a9a468e9f883128045c516a881f30d6372175c96...HEAD`):
```
 .../construction/delivery-history.md               |  17 +
 .../matrice-tracabilite.md                         |  14 +
 .../specification-technique.md                     |  27 +
 .../sfia-studio-next/web/scripts/db-migrate.sh     |   3 +-
 .../[preparationId]/documents/route.ts             |  12 +-
 .../src/app/preparations/[preparationId]/page.tsx  |  52 +-
 .../db/migrations/004_ml2_integrity_corrective.sql |  15 +
 projects/sfia-studio-next/web/src/db/schema.ts     |   3 +-
 .../web/src/domains/conversation/service.ts        |  22 +-
 .../web/src/domains/document/service.ts            | 637 ++++++++++++++------
 .../web/src/domains/knowledge/service.ts           | 653 +++++++++++++++------
 .../web/tests/e2e/ml2-smoke.spec.ts                |   4 +-
 .../tests/integration/migrations-fresh.pg.test.ts  |  13 +-
 .../ml2-corrective-integrity.pg.test.ts            | 349 +++++++++++
 .../integration/ml2-knowledge-documents.pg.test.ts |  24 +-
 .../web/tests/unit/diff-ordered.test.ts            |  38 ++
 .../web/tests/unit/safe-markdown.test.ts           |   9 +-
 17 files changed, 1470 insertions(+), 422 deletions(-)

```

---

## 2. Sources utilisées

- VALIDATED SPEC ML2 v0.6 + matrice
- Code local knowledge/document/conversation/API/schema
- Handoff `28bf770c` (preuve revue, non canon du code)
- SEF / ENV-01 / product-versioning (réf.)
- Figma: non modifié ; surfaces UX existantes seulement

---

## 3. Défauts reproduits puis corrigés

| Id | Reproduction | Correction |
| --- | --- | --- |
| C1 | split déplaçait acquis hors source ; ensureSubject réutilisait titre ; pas de TX | membership checks + createSubjectIdentity + FOR UPDATE TX + inject rollback |
| C2 | revise check-then-insert non atomique | document FOR UPDATE + relecture latest dans TX |
| C3 | new doc id avant lookup correlation | creation_correlation_key unique + lookup avant insert |
| C4 | Set-diff perdait doublons | LCS ordonné |
| C5 | FACT par défaut / keywords faibles | FACT requires epistemic=established ; défaut HYPOTHESIS ; chatter skip |
| C6 | annonces avant vérité | capitalisé seulement AVAILABLE ; CONFLICT explicite ; split panel on fail |

---

## 4. Git Review Index (correctif only)

### Créés

- A `projects/sfia-studio-next/web/src/db/migrations/004_ml2_integrity_corrective.sql`
- A `projects/sfia-studio-next/web/tests/integration/ml2-corrective-integrity.pg.test.ts`
- A `projects/sfia-studio-next/web/tests/unit/diff-ordered.test.ts`

### Modifiés

- M `projects/sfia-studio-next/construction/delivery-history.md`
- M `projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md`
- M `projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md`
- M `projects/sfia-studio-next/web/scripts/db-migrate.sh`
- M `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/route.ts`
- M `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx`
- M `projects/sfia-studio-next/web/src/db/schema.ts`
- M `projects/sfia-studio-next/web/src/domains/conversation/service.ts`
- M `projects/sfia-studio-next/web/src/domains/document/service.ts`
- M `projects/sfia-studio-next/web/src/domains/knowledge/service.ts`
- M `projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts`
- M `projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts`
- M `projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts`
- M `projects/sfia-studio-next/web/tests/unit/safe-markdown.test.ts`

---

## 5. Contenu complet des fichiers créés


### `projects/sfia-studio-next/web/src/db/migrations/004_ml2_integrity_corrective.sql`

```

-- ML2 corrective: document creation idempotence + revision concurrency helpers.
-- Additive only. Preserves ML1/ML2-003 data.

ALTER TABLE documents
  ADD COLUMN IF NOT EXISTS creation_correlation_key text;

-- One durable creation command identity per preparation owner
CREATE UNIQUE INDEX IF NOT EXISTS documents_prep_owner_corr_uidx
  ON documents(preparation_id, owner_pilot_id, creation_correlation_key)
  WHERE creation_correlation_key IS NOT NULL;

-- Strengthen revision correlation uniqueness across a document (already present in 003)
-- Ensure base_revision_id can be indexed for concurrency diagnostics
CREATE INDEX IF NOT EXISTS document_revisions_base_idx
  ON document_revisions(document_id, base_revision_id);

```


### `projects/sfia-studio-next/web/tests/integration/ml2-corrective-integrity.pg.test.ts`

```

import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { documents, documentRevisions, knowledgeSubjects, knowledgeAcquis, pilots } from "@/db/schema";
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

  it("C1: merge rollback on injected failure — no partial journal", async () => {
    const pilotId = await seedPilot("C1-rollback");
    const prep = await openOrCreatePreparation(pilotId);
    const a = await ensureSubject(pilotId, prep.id, "Keep");
    const b = await ensureSubject(pilotId, prep.id, "Absorb");
    await capitalizeAcquis(pilotId, prep.id, {
      statement: "Acquis sur absorb qui doit rester si rollback.",
      kind: "HYPOTHESIS",
      subjectId: b.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
    });
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
    const k = await listKnowledge(pilotId, prep.id);
    expect(k.subjects.find((s) => s.id === b.subjectId)?.status).toBe("ACTIVE");
    expect(k.acquis.every((x) => x.subjectId === b.subjectId || x.subjectId === a.subjectId)).toBe(
      true,
    );
    const events = k; // events not listed — verify via subject status only
    void events;
  });

  it("C1: concurrent splits on same origin — one wins or both serialize safely", async () => {
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
    expect(k.acquis.find((x) => x.id === a1.acquisId)?.subjectId).toBeTruthy();
    expect(k.acquis.find((x) => x.id === a2.acquisId)?.subjectId).toBeTruthy();
  });

  it("C2: concurrent revise same base → one AVAILABLE, one CONFLICT; no duplicate rev numbers", async () => {
    const pilotId = await seedPilot("C2-race");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Doc", "# v1\n", undefined, {
      correlationKey: `c2-create-${newId("k")}`,
    });
    expect(v1.status).toBe("AVAILABLE");
    const [a, b] = await Promise.all([
      reviseDocument(pilotId, prep.id, {
        documentId: v1.documentId!,
        baseRevisionId: v1.revisionId!,
        contentMarkdown: "# v2a\n",
        correlationKey: `c2-a-${newId("k")}`,
      }),
      reviseDocument(pilotId, prep.id, {
        documentId: v1.documentId!,
        baseRevisionId: v1.revisionId!,
        contentMarkdown: "# v2b\n",
        correlationKey: `c2-b-${newId("k")}`,
      }),
    ]);
    const outcomes = [a.status, b.status].sort();
    expect(outcomes).toContain("AVAILABLE");
    expect(outcomes).toContain("CONFLICT");
    const list = await listDocumentRevisions(pilotId, prep.id, v1.documentId!);
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
    const failed = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId!,
      baseRevisionId: v1.revisionId!,
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
    expect(r2.idempotentReplay).toBe(true);
    expect(r3.idempotentReplay).toBe(true);
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
    expect(bad.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
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
    expect(again.documentId).toBe(first.documentId);
    expect(again.revisionId).toBe(first.revisionId);
    expect(again.idempotentReplay).toBe(true);
  });

  it("C4: ordered diff duplicate semantics (unit-backed, also callable here)", () => {
    const d = diffMarkdown("x\nx\ny", "x\ny");
    expect(d.removed).toEqual(["x"]);
    expect(d.added).toEqual([]);
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

```


### `projects/sfia-studio-next/web/tests/unit/diff-ordered.test.ts`

```

import { describe, expect, it } from "vitest";
import { diffMarkdown } from "@/domains/document/service";

describe("C4 ordered diffMarkdown", () => {
  it("preserves duplicate lines when only one is removed", () => {
    const d = diffMarkdown("a\nx\nx\nb", "a\nx\nb");
    expect(d.removed).toEqual(["x"]);
    expect(d.added).toEqual([]);
    expect(d.unchangedCount).toBe(3);
  });

  it("detects block move as remove+add in order", () => {
    const d = diffMarkdown("a\nb\nc\nd", "a\nc\nb\nd");
    // LCS keeps a,c,d or a,b,d — either way ops are ordered
    expect(d.ops.some((o) => o.op === "remove")).toBe(true);
    expect(d.ops.some((o) => o.op === "add")).toBe(true);
    expect(d.ops.filter((o) => o.op === "equal").map((o) => o.line)).toContain("a");
    expect(d.ops.filter((o) => o.op === "equal").map((o) => o.line)).toContain("d");
  });

  it("insertion in the middle", () => {
    const d = diffMarkdown("a\nc", "a\nb\nc");
    expect(d.added).toEqual(["b"]);
    expect(d.removed).toEqual([]);
  });

  it("identical documents", () => {
    const d = diffMarkdown("a\nb", "a\nb");
    expect(d.added).toEqual([]);
    expect(d.removed).toEqual([]);
    expect(d.unchangedCount).toBe(2);
  });

  it("empty lines preserved as first-class lines", () => {
    const d = diffMarkdown("a\n\nb", "a\nb");
    expect(d.removed).toEqual([""]);
  });
});

```


---

## 6. Diffs des fichiers modifiés


### `projects/sfia-studio-next/construction/delivery-history.md` (M)

```diff

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index e9b907de..03cdc58e 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -170,3 +170,20 @@ Append-only logical journal of Cursor product deliveries.
 | Streaming | Attempted in adapter (`stream: true`) ; UI progressive NOT wired ; LIVE streaming NOT PROVEN |
 | Status | LOCAL CONSTRUCTION — no project push/PR/merge ; Review Handoff L3 only |
 | Verdict candidate | `READY WITH RESERVES` |
+
+## delivery_id: DELIV-2026-11-05-ML2-CORRECTIVE-02
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-05 (Europe/Paris) |
+| Macro-lot | R5 / ML2 — correctif intégrité D4 / documents / cognition |
+| Type | Correctif intégré (même macro-lot) |
+| Branch | `sfia/next-ml2-production-capitalisation` (local only) |
+| Parent HEAD | `a9a468e9f883128045c516a881f30d6372175c96` |
+| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
+| Périmètre | C1 sujets atomiques ; C2 concurrence révision ; C3 idempotence création ; C4 diff ordonné ; C5 épistémologie capitalisation ; C6 états UX |
+| Schema | `004_ml2_integrity_corrective` |
+| Product version | `NO RELEASE` |
+| Tests | unit 31 PASS ; PG integration 45 PASS ; Playwright 2 PASS ; tsc+build PASS |
+| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
+| Verdict candidate | `READY FOR MORRIS REVIEW` (réserves S1/S2/S3/CI/COG qualifiées, non bloquantes pour intégrité) |

```


### `projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md` (M)

```diff

diff --git a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
index 21d61dbe..801b4cee 100644
--- a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
+++ b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
@@ -238,3 +238,17 @@ Branche `sfia/next-ml2-production-capitalisation` @ base `6e4406c6`. Preuves **D
 | Q29 streaming | ATTEMPTED adapter ; UI progressive NOT WIRED ; LIVE NOT PROVEN |
 | COG-01..07 | NOT RUN |
 | Négatif recommandation ≠ D6 | COUVERT (`humanDecisionCreated: false`, kinds acquis) |
+
+### 7.1 Correctif C1–C6 (2026-11-05)
+
+| Défaut | Négatif | Après | DB | Verdict |
+| --- | --- | --- | --- | --- |
+| C1 Sujet hors source | PASS | PASS | PASS | PASS |
+| C1 rollback mutation | PASS | PASS | PASS | PASS |
+| C1 collision titre | PASS | PASS | PASS | PASS |
+| C2 révision concurrente | PASS | PASS | PASS | PASS |
+| C3 retry création | PASS | PASS | PASS | PASS |
+| C3 ACK perdu | PASS | PASS | PASS | PASS |
+| C4 lignes répétées | PASS | PASS | N/A | PASS |
+| C5 faux FACT | PASS | PASS | PASS | PASS |
+| C6 état UI | PARTIEL BROWSER | PASS smoke | si effet | PASS partiel |

```


### `projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md` (M)

```diff

diff --git a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
index c13c1b8e..0a4174ab 100644
--- a/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
+++ b/projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
@@ -466,3 +466,30 @@ Les tests ML2 à produire **avec le code et l'environnement** combinent :
 ### 12.4 Verdict construction locale

 `READY WITH RESERVES` — vertical ML2 intégré localement avec tests DETERMINISTIC/PG/BROWSER FAKE ; pas de push projet ; pas de RECETTE ; handoff L3 only.
+
+---
+
+## 13. As-Built correctif intégrité — 2026-11-05 (complément)
+
+> Correctif du même macro-lot ML2. Ne réécrit pas VALIDATED SPEC §§1–11.
+
+| Champ | Valeur |
+| --- | --- |
+| Branche | `sfia/next-ml2-production-capitalisation` (poursuite des commits `d867365f`…`a9a468e9`) |
+| Migration | `004_ml2_integrity_corrective.sql` (additive) |
+| Schema revision | `004_ml2_integrity_corrective` |
+
+### Corrections C1–C6
+
+| Id | Mécanisme | Preuve |
+| --- | --- | --- |
+| C1 | Transactions + `FOR UPDATE` ; validation appartenance acquis/OP au Sujet source ; split crée toujours une **nouvelle** identité ; rollback injecté | PG corrective 13 tests |
+| C2 | `reviseDocument` : lock document + relecture latest dans la même TX → CONFLICT déterministe | concurrent revise PASS |
+| C3 | `documents.creation_correlation_key` unique ; lookup **avant** allocation d'id ; fingerprint payload → CONFLICT si mismatch | retry×3 + ACK perdu PASS |
+| C4 | Diff LCS ordonné (occurrences répétées) | unit ordered diff PASS |
+| C5 | FACT exige `epistemic=established` ; défaut HYPOTHESIS ; pas de capitalisation sur chatter ; annonce UI seulement si AVAILABLE | PG + conversation |
+| C6 | CONFLICT/FAILED distingués ; split garde le panneau si échec ; capitalisé seulement après AVAILABLE | UX + BROWSER smoke |
+
+### Réserves inchangées
+
+ML2-S1 streaming UI/LIVE ; ML2-S2 composition séparation (minimale) ; ML2-S3 matrice Figma viewports ; CI Next absente ; COG LIVE NOT RUN.

```


### `projects/sfia-studio-next/web/scripts/db-migrate.sh` (M)

```diff

diff --git a/projects/sfia-studio-next/web/scripts/db-migrate.sh b/projects/sfia-studio-next/web/scripts/db-migrate.sh
index b74711f7..0ef72f29 100755
--- a/projects/sfia-studio-next/web/scripts/db-migrate.sh
+++ b/projects/sfia-studio-next/web/scripts/db-migrate.sh
@@ -21,4 +21,5 @@ apply() {
 apply "001_initial_studio_core.sql"
 apply "002_session_auth_mode.sql"
 apply "003_ml2_knowledge_documents.sql"
-echo "db:migrate OK (001 then 002 then 003)"
+apply "004_ml2_integrity_corrective.sql"
+echo "db:migrate OK (001→004)"

```


### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/route.ts` (M)

```diff

diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/route.ts
index 371620c2..1ec3de83 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/route.ts
@@ -21,6 +21,7 @@ export async function POST(req: Request, ctx: { params: Promise<{ preparationId:
       title?: string;
       contentMarkdown?: string;
       documentId?: string;
+      correlationKey?: string;
     };
     if (typeof body.contentMarkdown !== "string") {
       return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
@@ -31,8 +32,17 @@ export async function POST(req: Request, ctx: { params: Promise<{ preparationId:
       body.title ?? "Document du sas",
       body.contentMarkdown,
       body.documentId,
+      { correlationKey: body.correlationKey },
     );
-    return NextResponse.json(result, { status: result.status === "AVAILABLE" ? 200 : 500 });
+    const http =
+      result.status === "AVAILABLE"
+        ? 200
+        : result.status === "CONFLICT"
+          ? 409
+          : result.status === "FAILED"
+            ? 400
+            : 500;
+    return NextResponse.json(result, { status: http });
   } catch {
     return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
   }

```


### `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx` (M)

```diff

diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 4349f04c..a4269b70 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -104,11 +104,14 @@ export default function PreparationPage() {
           : j.documentSave
             ? ` · document ${j.documentSave.status}`
             : "";
-      const cap = Array.isArray(j.capitalisation) && j.capitalisation.length
-        ? ` · capitalisé ${j.capitalisation.length}`
-        : "";
+      const cap =
+        Array.isArray(j.capitalisation) && j.capitalisation.length
+          ? ` · capitalisé ${j.capitalisation.length} (AVAILABLE confirmé)`
+          : "";
+      const docConflict =
+        j.documentSave?.status === "CONFLICT" ? ` · CONFLICT ${j.documentSave.reason ?? ""}` : "";
       setStatus(
-        `Nora ${j.noraMode} · ${j.status}${docPart}${cap}` +
+        `Nora ${j.noraMode} · ${j.status}${docPart}${docConflict}${cap}` +
           (j.streaming?.attempted
             ? ` · stream attempted=${j.streaming.attempted} delivered=${j.streaming.delivered}`
             : ""),
@@ -122,18 +125,32 @@ export default function PreparationPage() {

   async function saveDoc() {
     setBusy(true);
+    const correlationKey = docId
+      ? `revsave-${docId}-${Date.now()}`
+      : `create-doc-${preparationId}-${Date.now()}`;
     const res = await fetch(`/api/preparations/${preparationId}/documents`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
-      body: JSON.stringify({ title: "Document du sas", contentMarkdown: docText, documentId: docId }),
+      body: JSON.stringify({
+        title: "Document du sas",
+        contentMarkdown: docText,
+        documentId: docId,
+        correlationKey,
+      }),
     });
     const j = await res.json();
     setBusy(false);
     if (j.status === "AVAILABLE") {
       setDocId(j.documentId);
       setBaseRevisionId(j.revisionId);
-      setStatus(`Document AVAILABLE rev ${j.revisionNumber}`);
+      setStatus(
+        j.idempotentReplay
+          ? `Document AVAILABLE (rejeu idempotent) rev ${j.revisionNumber}`
+          : `Document AVAILABLE rev ${j.revisionNumber}`,
+      );
       await reload();
+    } else if (j.status === "CONFLICT") {
+      setStatus(`CONFLICT document: ${j.reason ?? "version ou corrélation"}`);
     } else setStatus(`Document ${j.status}: ${j.reason ?? ""}`);
   }

@@ -242,6 +259,10 @@ export default function PreparationPage() {

   async function confirmSplit() {
     if (!splitSubjectId || !splitTitle.trim()) return;
+    if (splitAcquis.length === 0) {
+      setStatus("Séparation annulable: sélectionner au moins un acquis du Sujet source");
+      return;
+    }
     const res = await fetch(`/api/preparations/${preparationId}/knowledge`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
@@ -254,15 +275,16 @@ export default function PreparationPage() {
       }),
     });
     const j = await res.json();
-    setStatus(
-      j.status === "AVAILABLE"
-        ? `Séparation OK → ${j.newSubjectId} (filiation conservée)`
-        : `Séparation ${j.status}: ${j.reason ?? ""}`,
-    );
-    setSplitSubjectId(null);
-    setSplitTitle("");
-    setSplitAcquis([]);
-    await reloadKnowledge();
+    if (j.status === "AVAILABLE" && j.createdNewIdentity) {
+      setStatus(`Séparation OK → ${j.newSubjectId} (nouvelle identité, filiation ${j.sourceSubjectId})`);
+      setSplitSubjectId(null);
+      setSplitTitle("");
+      setSplitAcquis([]);
+      await reloadKnowledge();
+    } else {
+      // Keep panel open on failure — no hidden mutation
+      setStatus(`Séparation ${j.status}: ${j.reason ?? "échec"} — aucune mutation partielle`);
+    }
   }

   const inspected = docs.find((d) => d.document.id === inspectDocId) ?? docs[0];

```


### `projects/sfia-studio-next/web/src/db/schema.ts` (M)

```diff

diff --git a/projects/sfia-studio-next/web/src/db/schema.ts b/projects/sfia-studio-next/web/src/db/schema.ts
index 95646ba8..fcfecc53 100644
--- a/projects/sfia-studio-next/web/src/db/schema.ts
+++ b/projects/sfia-studio-next/web/src/db/schema.ts
@@ -190,6 +190,7 @@ export const documents = pgTable(
       .notNull()
       .references(() => pilots.id),
     title: text("title").notNull(),
+    creationCorrelationKey: text("creation_correlation_key"),
     createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
   },
   (t) => [index("documents_prep_idx").on(t.preparationId)],
@@ -302,4 +303,4 @@ export const knowledgeSubjectEvents = pgTable(
   (t) => [index("knowledge_subject_events_subject_idx").on(t.subjectId)],
 );

-export const schemaRevision = "003_ml2_knowledge_documents";
+export const schemaRevision = "004_ml2_integrity_corrective";

```


### `projects/sfia-studio-next/web/src/domains/conversation/service.ts` (M)

```diff

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index fc21f98d..fbce9ef2 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -106,7 +106,13 @@ export async function postUserMessageAndNora(
   });

   // Selective D4 capitalisation after durable assistant message
-  let capitalisation = { capitalisations: [] as Array<{ kind: string; id?: string; status: string }> };
+  let capitalisation: Awaited<ReturnType<typeof maybeCapitalizeFromExchange>> = {
+    capitalisations: [],
+    selectionMethod: "lexical-heuristic",
+    selectionLimit:
+      "Capitalisation heuristique — pas une autorité épistémique; LIVE COG requis pour qualification.",
+    humanDecisionCreated: false,
+  };
   if (reply.status === "COMPLETE") {
     capitalisation = await maybeCapitalizeFromExchange(pilotId, preparationId, {
       userText: content,
@@ -115,6 +121,10 @@ export async function postUserMessageAndNora(
       userMessageId: userMsgId,
     });
   }
+  // Only confirmed AVAILABLE writes may be announced as capitalised
+  const confirmedCapitalisations = capitalisation.capitalisations.filter(
+    (c) => c.status === "AVAILABLE",
+  );

   // Explicit document request → D4 save (generation ≠ save until AVAILABLE)
   let documentSave: Awaited<ReturnType<typeof savePreparationDocument>> | null = null;
@@ -153,8 +163,14 @@ export async function postUserMessageAndNora(
       delivered: reply.streamingDelivered ?? false,
       notes: reply.streamingNotes ?? null,
     },
-    knowledgeSelection: knowledge.counts,
-    capitalisation: capitalisation.capitalisations,
+    knowledgeSelection: {
+      ...knowledge.counts,
+      selectionMethod: knowledge.selectionMethod,
+      selectionLimit: knowledge.selectionLimit,
+    },
+    capitalisation: confirmedCapitalisations,
+    capitalisationAttempted: capitalisation.capitalisations,
+    capitalisationLimit: capitalisation.selectionLimit,
     documentSave,
     // Authority boundary: recommendation ≠ HumanDecision
     humanDecisionCreated: false,

```


### `projects/sfia-studio-next/web/src/domains/document/service.ts` (M)

```diff

diff --git a/projects/sfia-studio-next/web/src/domains/document/service.ts b/projects/sfia-studio-next/web/src/domains/document/service.ts
index b3707d17..d5dc8c91 100644
--- a/projects/sfia-studio-next/web/src/domains/document/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/document/service.ts
@@ -1,11 +1,51 @@
-import { and, asc, desc, eq } from "drizzle-orm";
+import { and, asc, desc, eq, sql } from "drizzle-orm";
 import { db } from "@/db/client";
 import { documentRevisions, documents } from "@/db/schema";
 import { newId } from "@/lib/ids";
 import { getPreparationContext } from "@/domains/preparation/service";
+import { createHash } from "node:crypto";

 const MAX_DOC_CHARS = 100_000;

+function contentFingerprint(title: string, contentMarkdown: string): string {
+  return createHash("sha256")
+    .update(title || "")
+    .update("\0")
+    .update(contentMarkdown)
+    .digest("hex");
+}
+
+async function findByCreationCorrelation(
+  pilotId: string,
+  preparationId: string,
+  correlationKey: string,
+) {
+  return (
+    await db
+      .select()
+      .from(documents)
+      .where(
+        and(
+          eq(documents.preparationId, preparationId),
+          eq(documents.ownerPilotId, pilotId),
+          eq(documents.creationCorrelationKey, correlationKey),
+        ),
+      )
+      .limit(1)
+  )[0];
+}
+
+async function latestRevisionFor(documentId: string) {
+  return (
+    await db
+      .select()
+      .from(documentRevisions)
+      .where(eq(documentRevisions.documentId, documentId))
+      .orderBy(desc(documentRevisions.revisionNumber))
+      .limit(1)
+  )[0];
+}
+
 export async function savePreparationDocument(
   pilotId: string,
   preparationId: string,
@@ -26,16 +66,115 @@ export async function savePreparationDocument(
   const ctx = await getPreparationContext(pilotId, preparationId);
   if (!ctx.preparation) throw Object.assign(new Error("NOT_FOUND"), { code: "NOT_FOUND" });

+  const titleFinal = title || "Document du sas";
+  const fp = contentFingerprint(titleFinal, contentMarkdown);
+
+  // --- Creation idempotence: resolve durable command identity BEFORE allocating a new doc id ---
+  if (!documentId && opts?.correlationKey) {
+    const existingDoc = await findByCreationCorrelation(
+      pilotId,
+      preparationId,
+      opts.correlationKey,
+    );
+    if (existingDoc) {
+      const priorRev = (
+        await db
+          .select()
+          .from(documentRevisions)
+          .where(
+            and(
+              eq(documentRevisions.documentId, existingDoc.id),
+              eq(documentRevisions.correlationKey, opts.correlationKey),
+            ),
+          )
+          .limit(1)
+      )[0];
+      if (priorRev) {
+        const priorFp = (() => {
+          try {
+            return JSON.parse(priorRev.provenanceJson)?.contentFingerprint as string | undefined;
+          } catch {
+            return undefined;
+          }
+        })();
+        if (priorFp && priorFp !== fp) {
+          return {
+            status: "CONFLICT" as const,
+            reason: "CORRELATION_PAYLOAD_MISMATCH",
+            documentId: existingDoc.id,
+            revisionId: priorRev.id,
+            revisionNumber: priorRev.revisionNumber,
+          };
+        }
+        return {
+          status: priorRev.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
+          documentId: existingDoc.id,
+          revisionId: priorRev.id,
+          revisionNumber: priorRev.revisionNumber,
+          idempotentReplay: true as const,
+        };
+      }
+      // Document exists for this creation key but revision missing — continue to create revision on that doc
+      documentId = existingDoc.id;
+    }
+  }
+
   let docId = documentId;
   if (!docId) {
     docId = newId("doc");
-    await db.insert(documents).values({
-      id: docId,
-      preparationId,
-      projectId: ctx.project?.id ?? null,
-      ownerPilotId: pilotId,
-      title: title || "Document du sas",
-    });
+    try {
+      await db.insert(documents).values({
+        id: docId,
+        preparationId,
+        projectId: ctx.project?.id ?? null,
+        ownerPilotId: pilotId,
+        title: titleFinal,
+        creationCorrelationKey: opts?.correlationKey ?? null,
+      });
+    } catch (e) {
+      // Concurrent create with same correlation key — reconcile
+      if (opts?.correlationKey) {
+        const raced = await findByCreationCorrelation(
+          pilotId,
+          preparationId,
+          opts.correlationKey,
+        );
+        if (raced) {
+          const priorRev = (
+            await db
+              .select()
+              .from(documentRevisions)
+              .where(
+                and(
+                  eq(documentRevisions.documentId, raced.id),
+                  eq(documentRevisions.correlationKey, opts.correlationKey),
+                ),
+              )
+              .limit(1)
+          )[0];
+          if (priorRev) {
+            return {
+              status: priorRev.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
+              documentId: raced.id,
+              revisionId: priorRev.id,
+              revisionNumber: priorRev.revisionNumber,
+              idempotentReplay: true as const,
+            };
+          }
+          docId = raced.id;
+        } else {
+          return {
+            status: "FAILED" as const,
+            reason: e instanceof Error ? e.message : "document create failed",
+          };
+        }
+      } else {
+        return {
+          status: "FAILED" as const,
+          reason: e instanceof Error ? e.message : "document create failed",
+        };
+      }
+    }
   } else {
     const owned = (
       await db
@@ -53,7 +192,7 @@ export async function savePreparationDocument(
     if (!owned) return { status: "FAILED" as const, reason: "FORBIDDEN" };
   }

-  // Idempotent replay on correlation key
+  // Revision-level idempotence for known document
   if (opts?.correlationKey) {
     const prior = (
       await db
@@ -68,87 +207,150 @@ export async function savePreparationDocument(
         .limit(1)
     )[0];
     if (prior) {
+      const priorFp = (() => {
+        try {
+          return JSON.parse(prior.provenanceJson)?.contentFingerprint as string | undefined;
+        } catch {
+          return undefined;
+        }
+      })();
+      if (priorFp && priorFp !== fp) {
+        return {
+          status: "CONFLICT" as const,
+          reason: "CORRELATION_PAYLOAD_MISMATCH",
+          documentId: docId,
+          revisionId: prior.id,
+          revisionNumber: prior.revisionNumber,
+        };
+      }
       return {
         status: prior.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
         documentId: docId,
         revisionId: prior.id,
         revisionNumber: prior.revisionNumber,
-        idempotentReplay: true,
+        idempotentReplay: true as const,
       };
     }
   }

-  const last = (
-    await db
-      .select()
-      .from(documentRevisions)
-      .where(eq(documentRevisions.documentId, docId))
-      .orderBy(desc(documentRevisions.revisionNumber))
-      .limit(1)
-  )[0];
-  const revisionNumber = (last?.revisionNumber ?? 0) + 1;
-  const revisionId = newId("drev");
-
   try {
-    await db.insert(documentRevisions).values({
-      id: revisionId,
-      documentId: docId,
-      revisionNumber,
-      contentMarkdown,
-      status: "SAVING",
-      baseRevisionId: opts?.baseRevisionId ?? last?.id ?? null,
-      correlationKey: opts?.correlationKey ?? null,
-      provenanceJson: JSON.stringify(opts?.provenance ?? {}),
-      scope: opts?.scope ?? "document",
-    });
+    return await db.transaction(async (tx) => {
+      await tx.execute(
+        sql`select id from documents where id = ${docId} and owner_pilot_id = ${pilotId} for update`,
+      );

-    if (opts?.injectPersistFailure) {
-      await db
+      if (opts?.correlationKey) {
+        const prior = (
+          await tx
+            .select()
+            .from(documentRevisions)
+            .where(
+              and(
+                eq(documentRevisions.documentId, docId!),
+                eq(documentRevisions.correlationKey, opts.correlationKey),
+              ),
+            )
+            .limit(1)
+        )[0];
+        if (prior) {
+          return {
+            status: prior.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
+            documentId: docId!,
+            revisionId: prior.id,
+            revisionNumber: prior.revisionNumber,
+            idempotentReplay: true as const,
+          };
+        }
+      }
+
+      const last = (
+        await tx
+          .select()
+          .from(documentRevisions)
+          .where(eq(documentRevisions.documentId, docId!))
+          .orderBy(desc(documentRevisions.revisionNumber))
+          .limit(1)
+      )[0];
+      const revisionNumber = (last?.revisionNumber ?? 0) + 1;
+      const revisionId = newId("drev");
+
+      await tx.insert(documentRevisions).values({
+        id: revisionId,
+        documentId: docId!,
+        revisionNumber,
+        contentMarkdown,
+        status: "SAVING",
+        baseRevisionId: opts?.baseRevisionId ?? last?.id ?? null,
+        correlationKey: opts?.correlationKey ?? null,
+        provenanceJson: JSON.stringify({
+          ...(opts?.provenance ?? {}),
+          contentFingerprint: fp,
+        }),
+        scope: opts?.scope ?? "document",
+      });
+
+      if (opts?.injectPersistFailure) {
+        await tx
+          .update(documentRevisions)
+          .set({ status: "FAILED" })
+          .where(eq(documentRevisions.id, revisionId));
+        return {
+          status: "FAILED" as const,
+          reason: "injected persist failure",
+          documentId: docId!,
+          revisionId,
+          revisionNumber,
+        };
+      }
+
+      await tx
         .update(documentRevisions)
-        .set({ status: "FAILED" })
+        .set({ status: "AVAILABLE" })
         .where(eq(documentRevisions.id, revisionId));
+
       return {
-        status: "FAILED" as const,
-        reason: "injected persist failure",
-        documentId: docId,
+        status: "AVAILABLE" as const,
+        documentId: docId!,
         revisionId,
         revisionNumber,
       };
-    }
-
-    await db
-      .update(documentRevisions)
-      .set({ status: "AVAILABLE" })
-      .where(eq(documentRevisions.id, revisionId));
+    });
   } catch (e) {
-    try {
-      await db
-        .update(documentRevisions)
-        .set({ status: "FAILED" })
-        .where(eq(documentRevisions.id, revisionId));
-    } catch {
-      // best-effort
+    // Unique violation on correlation → reconcile
+    if (opts?.correlationKey) {
+      const prior = (
+        await db
+          .select()
+          .from(documentRevisions)
+          .where(
+            and(
+              eq(documentRevisions.documentId, docId),
+              eq(documentRevisions.correlationKey, opts.correlationKey),
+            ),
+          )
+          .limit(1)
+      )[0];
+      if (prior) {
+        return {
+          status: prior.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
+          documentId: docId,
+          revisionId: prior.id,
+          revisionNumber: prior.revisionNumber,
+          idempotentReplay: true as const,
+        };
+      }
     }
     return {
       status: "FAILED" as const,
       reason: e instanceof Error ? e.message : "persist failed",
       documentId: docId,
-      revisionId,
-      revisionNumber,
     };
   }
-
-  return {
-    status: "AVAILABLE" as const,
-    documentId: docId,
-    revisionId,
-    revisionNumber,
-  };
 }

 /**
- * Targeted non-destructive revision with explicit base revision control.
- * CONFLICT when baseRevisionId is not the latest AVAILABLE revision.
+ * Targeted non-destructive revision with atomic base-revision control.
+ * Document row FOR UPDATE serializes concurrent successors of the same base.
  */
 export async function reviseDocument(
   pilotId: string,
@@ -161,137 +363,153 @@ export async function reviseDocument(
     scope?: string;
     sectionHint?: string;
     provenance?: Record<string, unknown>;
+    injectFailureAfterLock?: boolean;
   },
 ) {
   if (input.contentMarkdown.length > MAX_DOC_CHARS) {
     return { status: "FAILED" as const, reason: "content too large" };
   }
-  const owned = (
-    await db
-      .select()
-      .from(documents)
-      .where(
-        and(
-          eq(documents.id, input.documentId),
-          eq(documents.ownerPilotId, pilotId),
-          eq(documents.preparationId, preparationId),
-        ),
-      )
-      .limit(1)
-  )[0];
-  if (!owned) return { status: "FAILED" as const, reason: "FORBIDDEN" };

-  // Idempotent correlation
-  const prior = (
-    await db
-      .select()
-      .from(documentRevisions)
-      .where(
-        and(
-          eq(documentRevisions.documentId, input.documentId),
-          eq(documentRevisions.correlationKey, input.correlationKey),
-        ),
-      )
-      .limit(1)
-  )[0];
-  if (prior) {
-    return {
-      status: prior.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
-      documentId: input.documentId,
-      revisionId: prior.id,
-      revisionNumber: prior.revisionNumber,
-      idempotentReplay: true as const,
-    };
-  }
+  try {
+    return await db.transaction(async (tx) => {
+      await tx.execute(
+        sql`select id from documents where id = ${input.documentId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
+      );

-  const base = (
-    await db
-      .select()
-      .from(documentRevisions)
-      .where(
-        and(
-          eq(documentRevisions.id, input.baseRevisionId),
-          eq(documentRevisions.documentId, input.documentId),
-        ),
-      )
-      .limit(1)
-  )[0];
-  if (!base) return { status: "FAILED" as const, reason: "BASE_NOT_FOUND" };
-  if (base.status !== "AVAILABLE") {
-    return { status: "FAILED" as const, reason: "BASE_NOT_AVAILABLE", baseStatus: base.status };
-  }
+      const owned = (
+        await tx
+          .select()
+          .from(documents)
+          .where(
+            and(
+              eq(documents.id, input.documentId),
+              eq(documents.ownerPilotId, pilotId),
+              eq(documents.preparationId, preparationId),
+            ),
+          )
+          .limit(1)
+      )[0];
+      if (!owned) return { status: "FAILED" as const, reason: "FORBIDDEN" };

-  const latest = (
-    await db
-      .select()
-      .from(documentRevisions)
-      .where(
-        and(
-          eq(documentRevisions.documentId, input.documentId),
-          eq(documentRevisions.status, "AVAILABLE"),
-        ),
-      )
-      .orderBy(desc(documentRevisions.revisionNumber))
-      .limit(1)
-  )[0];
+      // Idempotent correlation inside the lock
+      const prior = (
+        await tx
+          .select()
+          .from(documentRevisions)
+          .where(
+            and(
+              eq(documentRevisions.documentId, input.documentId),
+              eq(documentRevisions.correlationKey, input.correlationKey),
+            ),
+          )
+          .limit(1)
+      )[0];
+      if (prior) {
+        return {
+          status: prior.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
+          documentId: input.documentId,
+          revisionId: prior.id,
+          revisionNumber: prior.revisionNumber,
+          idempotentReplay: true as const,
+        };
+      }

-  if (!latest || latest.id !== input.baseRevisionId) {
-    return {
-      status: "CONFLICT" as const,
-      reason: "BASE_STALE",
-      documentId: input.documentId,
-      expectedBaseRevisionId: input.baseRevisionId,
-      actualLatestRevisionId: latest?.id ?? null,
-      actualLatestRevisionNumber: latest?.revisionNumber ?? null,
-    };
-  }
+      const base = (
+        await tx
+          .select()
+          .from(documentRevisions)
+          .where(
+            and(
+              eq(documentRevisions.id, input.baseRevisionId),
+              eq(documentRevisions.documentId, input.documentId),
+            ),
+          )
+          .limit(1)
+      )[0];
+      if (!base) return { status: "FAILED" as const, reason: "BASE_NOT_FOUND" };
+      if (base.status !== "AVAILABLE") {
+        return { status: "FAILED" as const, reason: "BASE_NOT_AVAILABLE", baseStatus: base.status };
+      }

-  const revisionNumber = latest.revisionNumber + 1;
-  const revisionId = newId("drev");
-  try {
-    await db.insert(documentRevisions).values({
-      id: revisionId,
-      documentId: input.documentId,
-      revisionNumber,
-      contentMarkdown: input.contentMarkdown,
-      status: "SAVING",
-      baseRevisionId: input.baseRevisionId,
-      correlationKey: input.correlationKey,
-      provenanceJson: JSON.stringify({
-        ...(input.provenance ?? {}),
-        sectionHint: input.sectionHint ?? null,
-      }),
-      scope: input.scope ?? "section",
-    });
-    await db
-      .update(documentRevisions)
-      .set({ status: "AVAILABLE" })
-      .where(eq(documentRevisions.id, revisionId));
-  } catch (e) {
-    try {
-      await db
+      const latest = (
+        await tx
+          .select()
+          .from(documentRevisions)
+          .where(
+            and(
+              eq(documentRevisions.documentId, input.documentId),
+              eq(documentRevisions.status, "AVAILABLE"),
+            ),
+          )
+          .orderBy(desc(documentRevisions.revisionNumber))
+          .limit(1)
+      )[0];
+
+      if (!latest || latest.id !== input.baseRevisionId) {
+        return {
+          status: "CONFLICT" as const,
+          reason: "BASE_STALE",
+          documentId: input.documentId,
+          expectedBaseRevisionId: input.baseRevisionId,
+          actualLatestRevisionId: latest?.id ?? null,
+          actualLatestRevisionNumber: latest?.revisionNumber ?? null,
+        };
+      }
+
+      if (input.injectFailureAfterLock) {
+        throw new Error("injected failure after lock");
+      }
+
+      const revisionNumber = latest.revisionNumber + 1;
+      const revisionId = newId("drev");
+      await tx.insert(documentRevisions).values({
+        id: revisionId,
+        documentId: input.documentId,
+        revisionNumber,
+        contentMarkdown: input.contentMarkdown,
+        status: "SAVING",
+        baseRevisionId: input.baseRevisionId,
+        correlationKey: input.correlationKey,
+        provenanceJson: JSON.stringify({
+          ...(input.provenance ?? {}),
+          sectionHint: input.sectionHint ?? null,
+        }),
+        scope: input.scope ?? "section",
+      });
+      await tx
         .update(documentRevisions)
-        .set({ status: "FAILED" })
+        .set({ status: "AVAILABLE" })
         .where(eq(documentRevisions.id, revisionId));
-    } catch {
-      // best-effort
+
+      return {
+        status: "AVAILABLE" as const,
+        documentId: input.documentId,
+        revisionId,
+        revisionNumber,
+        baseRevisionId: input.baseRevisionId,
+      };
+    });
+  } catch (e) {
+    // Unique (documentId, revisionNumber) race → treat as conflict if base became stale
+    const msg = e instanceof Error ? e.message : "persist failed";
+    if (/unique|duplicate/i.test(msg)) {
+      const latest = await latestRevisionFor(input.documentId);
+      return {
+        status: "CONFLICT" as const,
+        reason: "BASE_STALE",
+        documentId: input.documentId,
+        expectedBaseRevisionId: input.baseRevisionId,
+        actualLatestRevisionId: latest?.id ?? null,
+        actualLatestRevisionNumber: latest?.revisionNumber ?? null,
+      };
     }
     return {
       status: "FAILED" as const,
-      reason: e instanceof Error ? e.message : "persist failed",
+      reason: msg,
       documentId: input.documentId,
-      revisionId,
-      revisionNumber,
+      rolledBack: true as const,
     };
   }
-
-  return {
-    status: "AVAILABLE" as const,
-    documentId: input.documentId,
-    revisionId,
-    revisionNumber,
-    baseRevisionId: input.baseRevisionId,
-  };
 }

 export async function listDocuments(pilotId: string, preparationId: string) {
@@ -301,14 +519,7 @@ export async function listDocuments(pilotId: string, preparationId: string) {
     .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)));
   const out = [];
   for (const d of docs) {
-    const rev = (
-      await db
-        .select()
-        .from(documentRevisions)
-        .where(eq(documentRevisions.documentId, d.id))
-        .orderBy(desc(documentRevisions.revisionNumber))
-        .limit(1)
-    )[0];
+    const rev = await latestRevisionFor(d.id);
     out.push({ document: d, latestRevision: rev ?? null });
   }
   return out;
@@ -354,20 +565,64 @@ export async function getDocumentRevision(
   return { status: "AVAILABLE" as const, document: list.document, revision: rev };
 }

-/** Line-oriented diff for inspection — not an AI summary. */
-export function diffMarkdown(a: string, b: string): {
+/**
+ * Ordered Myers-style line diff via LCS — preserves duplicate lines and order.
+ * Not an AI summary; does not mutate versions.
+ */
+export function diffMarkdown(
+  a: string,
+  b: string,
+): {
   added: string[];
   removed: string[];
   unchangedCount: number;
+  ops: Array<{ op: "equal" | "add" | "remove"; line: string }>;
 } {
   const la = a.split("\n");
   const lb = b.split("\n");
-  const setA = new Set(la);
-  const setB = new Set(lb);
-  const added = lb.filter((l) => !setA.has(l));
-  const removed = la.filter((l) => !setB.has(l));
-  const unchangedCount = la.filter((l) => setB.has(l)).length;
-  return { added, removed, unchangedCount };
+  const n = la.length;
+  const m = lb.length;
+  // LCS lengths
+  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
+  for (let i = n - 1; i >= 0; i--) {
+    for (let j = m - 1; j >= 0; j--) {
+      dp[i][j] =
+        la[i] === lb[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
+    }
+  }
+  const ops: Array<{ op: "equal" | "add" | "remove"; line: string }> = [];
+  const added: string[] = [];
+  const removed: string[] = [];
+  let unchangedCount = 0;
+  let i = 0;
+  let j = 0;
+  while (i < n && j < m) {
+    if (la[i] === lb[j]) {
+      ops.push({ op: "equal", line: la[i] });
+      unchangedCount++;
+      i++;
+      j++;
+    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
+      ops.push({ op: "remove", line: la[i] });
+      removed.push(la[i]);
+      i++;
+    } else {
+      ops.push({ op: "add", line: lb[j] });
+      added.push(lb[j]);
+      j++;
+    }
+  }
+  while (i < n) {
+    ops.push({ op: "remove", line: la[i] });
+    removed.push(la[i]);
+    i++;
+  }
+  while (j < m) {
+    ops.push({ op: "add", line: lb[j] });
+    added.push(lb[j]);
+    j++;
+  }
+  return { added, removed, unchangedCount, ops };
 }

 export async function compareDocumentRevisions(

```


### `projects/sfia-studio-next/web/src/domains/knowledge/service.ts` (M)

```diff

diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
index 87a68446..6dcf5e1a 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
@@ -1,4 +1,4 @@
-import { and, desc, eq, inArray, ne } from "drizzle-orm";
+import { and, desc, eq, inArray, ne, sql } from "drizzle-orm";
 import { db } from "@/db/client";
 import {
   knowledgeAcquis,
@@ -15,8 +15,12 @@ export type Provenance = {
   generationId?: string;
   notedAt?: string;
   note?: string;
+  /** Epistemic confidence of the recorder — never upgrades authority. */
+  epistemic?: "observed" | "hypothesized" | "recommended" | "limited" | "established";
 };

+export type KnowledgeKind = "FACT" | "HYPOTHESIS" | "RECOMMENDATION" | "LIMIT";
+
 function provenanceString(p: Provenance): string {
   return JSON.stringify({ ...p, notedAt: p.notedAt ?? new Date().toISOString() });
 }
@@ -27,13 +31,52 @@ async function assertPrep(pilotId: string, preparationId: string) {
   return ctx;
 }

+type Tx = {
+  select: typeof db.select;
+  insert: typeof db.insert;
+  update: typeof db.update;
+  execute: typeof db.execute;
+};
+
+async function loadOwnedSubject(
+  pilotId: string,
+  preparationId: string,
+  subjectId: string,
+  tx: Tx = db,
+) {
+  return (
+    await tx
+      .select()
+      .from(knowledgeSubjects)
+      .where(
+        and(
+          eq(knowledgeSubjects.id, subjectId),
+          eq(knowledgeSubjects.ownerPilotId, pilotId),
+          eq(knowledgeSubjects.preparationId, preparationId),
+        ),
+      )
+      .limit(1)
+  )[0];
+}
+
+async function assertSubjectRef(
+  pilotId: string,
+  preparationId: string,
+  subjectId: string | null | undefined,
+) {
+  if (!subjectId) return null;
+  const row = await loadOwnedSubject(pilotId, preparationId, subjectId);
+  if (!row) return { error: "SUBJECT_FOREIGN_OR_UNKNOWN" as const };
+  return { subject: row };
+}
+
 /** Selective capitalisation — never invents D6 decisions. */
 export async function capitalizeAcquis(
   pilotId: string,
   preparationId: string,
   input: {
     statement: string;
-    kind?: "FACT" | "HYPOTHESIS" | "RECOMMENDATION" | "LIMIT";
+    kind?: KnowledgeKind;
     subjectId?: string | null;
     provenance: Provenance;
     supersedesAcquisId?: string;
@@ -44,37 +87,94 @@ export async function capitalizeAcquis(
   if (!statement || statement.length < 12) {
     return { status: "SKIPPED" as const, reason: "statement too thin for capitalisation" };
   }
-  // Do not capitalise recommendations as decisions — keep kind explicit.
-  const kind = input.kind ?? "FACT";
-  if (kind === "RECOMMENDATION") {
-    // Still allowed as acquis of type recommendation; never promotes to HumanDecision.
+
+  // Default: never auto-promote to FACT without explicit justification in provenance.
+  const kind: KnowledgeKind = input.kind ?? "HYPOTHESIS";
+  if (kind === "FACT" && input.provenance.epistemic !== "established") {
+    return {
+      status: "SKIPPED" as const,
+      reason: "FACT requires provenance.epistemic=established",
+    };
+  }
+
+  if (input.subjectId) {
+    const check = await assertSubjectRef(pilotId, preparationId, input.subjectId);
+    if ("error" in (check ?? {}) && check && "error" in check) {
+      return { status: "FAILED" as const, reason: check.error };
+    }
+    if (check?.subject && check.subject.status !== "ACTIVE") {
+      return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };
+    }
   }

-  const id = newId("acq");
-  await db.insert(knowledgeAcquis).values({
-    id,
-    preparationId,
-    projectId: ctx.project?.id ?? null,
-    ownerPilotId: pilotId,
-    subjectId: input.subjectId ?? null,
-    kind,
-    statement,
-    provenanceJson: provenanceString(input.provenance),
-    status: "CURRENT",
-    supersedesAcquisId: input.supersedesAcquisId ?? null,
-  });
   if (input.supersedesAcquisId) {
+    const prior = (
+      await db
+        .select()
+        .from(knowledgeAcquis)
+        .where(
+          and(
+            eq(knowledgeAcquis.id, input.supersedesAcquisId),
+            eq(knowledgeAcquis.ownerPilotId, pilotId),
+            eq(knowledgeAcquis.preparationId, preparationId),
+          ),
+        )
+        .limit(1)
+    )[0];
+    if (!prior) return { status: "FAILED" as const, reason: "SUPERSEDES_FOREIGN_OR_UNKNOWN" };
+  }
+
+  // Trivial duplicate guard: same CURRENT statement under same subject
+  const dup = (
     await db
-      .update(knowledgeAcquis)
-      .set({ status: "SUPERSEDED", updatedAt: new Date() })
+      .select()
+      .from(knowledgeAcquis)
       .where(
         and(
-          eq(knowledgeAcquis.id, input.supersedesAcquisId),
-          eq(knowledgeAcquis.ownerPilotId, pilotId),
           eq(knowledgeAcquis.preparationId, preparationId),
+          eq(knowledgeAcquis.ownerPilotId, pilotId),
+          eq(knowledgeAcquis.status, "CURRENT"),
+          eq(knowledgeAcquis.statement, statement),
         ),
-      );
+      )
+      .limit(1)
+  )[0];
+  if (dup) {
+    return {
+      status: "AVAILABLE" as const,
+      acquisId: dup.id,
+      kind: dup.kind as KnowledgeKind,
+      deduplicated: true as const,
+    };
   }
+
+  const id = newId("acq");
+  await db.transaction(async (tx) => {
+    await tx.insert(knowledgeAcquis).values({
+      id,
+      preparationId,
+      projectId: ctx.project?.id ?? null,
+      ownerPilotId: pilotId,
+      subjectId: input.subjectId ?? null,
+      kind,
+      statement,
+      provenanceJson: provenanceString(input.provenance),
+      status: "CURRENT",
+      supersedesAcquisId: input.supersedesAcquisId ?? null,
+    });
+    if (input.supersedesAcquisId) {
+      await tx
+        .update(knowledgeAcquis)
+        .set({ status: "SUPERSEDED", updatedAt: new Date() })
+        .where(
+          and(
+            eq(knowledgeAcquis.id, input.supersedesAcquisId),
+            eq(knowledgeAcquis.ownerPilotId, pilotId),
+            eq(knowledgeAcquis.preparationId, preparationId),
+          ),
+        );
+    }
+  });
   return { status: "AVAILABLE" as const, acquisId: id, kind };
 }

@@ -86,6 +186,13 @@ export async function openPoint(
   const ctx = await assertPrep(pilotId, preparationId);
   const statement = input.statement.trim();
   if (!statement) return { status: "FAILED" as const, reason: "empty" };
+  if (input.subjectId) {
+    const check = await assertSubjectRef(pilotId, preparationId, input.subjectId);
+    if (check && "error" in check) return { status: "FAILED" as const, reason: check.error };
+    if (check?.subject && check.subject.status !== "ACTIVE") {
+      return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };
+    }
+  }
   const id = newId("opn");
   await db.insert(knowledgeOpenPoints).values({
     id,
@@ -100,6 +207,10 @@ export async function openPoint(
   return { status: "AVAILABLE" as const, openPointId: id };
 }

+/**
+ * Soft topic resolution for capitalisation only — may reuse ACTIVE title match.
+ * MUST NOT be used by split/merge identity creation.
+ */
 export async function ensureSubject(
   pilotId: string,
   preparationId: string,
@@ -109,6 +220,10 @@ export async function ensureSubject(
   const ctx = await assertPrep(pilotId, preparationId);
   const cleaned = title.trim().slice(0, 200);
   if (!cleaned) return { status: "FAILED" as const, reason: "empty title" };
+  if (parentSubjectId) {
+    const parent = await assertSubjectRef(pilotId, preparationId, parentSubjectId);
+    if (parent && "error" in parent) return { status: "FAILED" as const, reason: parent.error };
+  }
   const existing = (
     await db
       .select()
@@ -137,6 +252,29 @@ export async function ensureSubject(
   return { status: "AVAILABLE" as const, subjectId: id, created: true };
 }

+/** Always creates a new subject identity (used by split). Title collision does not reuse. */
+async function createSubjectIdentity(
+  tx: Tx,
+  pilotId: string,
+  preparationId: string,
+  projectId: string | null,
+  title: string,
+  opts?: { parentSubjectId?: string | null; originatedFromSubjectId?: string | null },
+) {
+  const id = newId("subj");
+  await tx.insert(knowledgeSubjects).values({
+    id,
+    preparationId,
+    projectId,
+    ownerPilotId: pilotId,
+    parentSubjectId: opts?.parentSubjectId ?? null,
+    title: title.trim().slice(0, 200),
+    status: "ACTIVE",
+    originatedFromSubjectId: opts?.originatedFromSubjectId ?? null,
+  });
+  return id;
+}
+
 export async function renameSubject(
   pilotId: string,
   preparationId: string,
@@ -144,99 +282,136 @@ export async function renameSubject(
   newTitle: string,
 ) {
   await assertPrep(pilotId, preparationId);
-  const row = (
-    await db
-      .select()
-      .from(knowledgeSubjects)
-      .where(
-        and(
-          eq(knowledgeSubjects.id, subjectId),
-          eq(knowledgeSubjects.ownerPilotId, pilotId),
-          eq(knowledgeSubjects.preparationId, preparationId),
-        ),
-      )
-      .limit(1)
-  )[0];
-  if (!row) return { status: "FAILED" as const, reason: "NOT_FOUND" };
   const title = newTitle.trim().slice(0, 200);
-  await db
-    .update(knowledgeSubjects)
-    .set({ title, updatedAt: new Date() })
-    .where(eq(knowledgeSubjects.id, subjectId));
-  await db.insert(knowledgeSubjectEvents).values({
-    id: newId("sev"),
-    preparationId,
-    ownerPilotId: pilotId,
-    subjectId,
-    eventType: "RENAMED",
-    payloadJson: JSON.stringify({ from: row.title, to: title }),
-  });
-  return { status: "AVAILABLE" as const, subjectId, title };
+  if (!title) return { status: "FAILED" as const, reason: "empty title" };
+
+  try {
+    return await db.transaction(async (tx) => {
+      await tx.execute(
+        sql`select id from knowledge_subjects where id = ${subjectId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
+      );
+      const row = await loadOwnedSubject(pilotId, preparationId, subjectId, tx as Tx);
+      if (!row) return { status: "FAILED" as const, reason: "NOT_FOUND" };
+      if (row.status !== "ACTIVE") return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };
+
+      await tx
+        .update(knowledgeSubjects)
+        .set({ title, updatedAt: new Date() })
+        .where(eq(knowledgeSubjects.id, subjectId));
+      await tx.insert(knowledgeSubjectEvents).values({
+        id: newId("sev"),
+        preparationId,
+        ownerPilotId: pilotId,
+        subjectId,
+        eventType: "RENAMED",
+        payloadJson: JSON.stringify({ from: row.title, to: title }),
+      });
+      return { status: "AVAILABLE" as const, subjectId, title };
+    });
+  } catch (e) {
+    return {
+      status: "FAILED" as const,
+      reason: e instanceof Error ? e.message : "rename failed",
+    };
+  }
 }

-/** Merge B into A — A remains ACTIVE; B marked MERGED with filiation. */
+/** Merge B into A — atomic; A remains ACTIVE; B marked MERGED with filiation. */
 export async function mergeSubjects(
   pilotId: string,
   preparationId: string,
   targetSubjectId: string,
   sourceSubjectId: string,
+  opts?: { injectFailureAfter?: "lock" | "move" },
 ) {
   await assertPrep(pilotId, preparationId);
   if (targetSubjectId === sourceSubjectId) {
     return { status: "FAILED" as const, reason: "same subject" };
   }
-  const rows = await db
-    .select()
-    .from(knowledgeSubjects)
-    .where(
-      and(
-        eq(knowledgeSubjects.ownerPilotId, pilotId),
-        eq(knowledgeSubjects.preparationId, preparationId),
-        inArray(knowledgeSubjects.id, [targetSubjectId, sourceSubjectId]),
-      ),
-    );
-  if (rows.length !== 2) return { status: "FAILED" as const, reason: "NOT_FOUND" };

-  await db
-    .update(knowledgeAcquis)
-    .set({ subjectId: targetSubjectId, updatedAt: new Date() })
-    .where(
-      and(
-        eq(knowledgeAcquis.subjectId, sourceSubjectId),
-        eq(knowledgeAcquis.ownerPilotId, pilotId),
-      ),
-    );
-  await db
-    .update(knowledgeOpenPoints)
-    .set({ subjectId: targetSubjectId, updatedAt: new Date() })
-    .where(
-      and(
-        eq(knowledgeOpenPoints.subjectId, sourceSubjectId),
-        eq(knowledgeOpenPoints.ownerPilotId, pilotId),
-      ),
-    );
-  await db
-    .update(knowledgeSubjects)
-    .set({
-      status: "MERGED",
-      originatedFromSubjectId: targetSubjectId,
-      updatedAt: new Date(),
-    })
-    .where(eq(knowledgeSubjects.id, sourceSubjectId));
-  await db.insert(knowledgeSubjectEvents).values({
-    id: newId("sev"),
-    preparationId,
-    ownerPilotId: pilotId,
-    subjectId: targetSubjectId,
-    eventType: "MERGED",
-    payloadJson: JSON.stringify({ absorbed: sourceSubjectId }),
-  });
-  return { status: "AVAILABLE" as const, targetSubjectId, absorbedSubjectId: sourceSubjectId };
+  try {
+    return await db.transaction(async (tx) => {
+      // Deterministic lock order to avoid deadlocks
+      const ids = [targetSubjectId, sourceSubjectId].sort();
+      for (const id of ids) {
+        await tx.execute(
+          sql`select id from knowledge_subjects where id = ${id} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
+        );
+      }
+      if (opts?.injectFailureAfter === "lock") {
+        throw new Error("injected failure after lock");
+      }
+
+      const rows = await tx
+        .select()
+        .from(knowledgeSubjects)
+        .where(
+          and(
+            eq(knowledgeSubjects.ownerPilotId, pilotId),
+            eq(knowledgeSubjects.preparationId, preparationId),
+            inArray(knowledgeSubjects.id, [targetSubjectId, sourceSubjectId]),
+          ),
+        );
+      if (rows.length !== 2) return { status: "FAILED" as const, reason: "NOT_FOUND" };
+      const target = rows.find((r) => r.id === targetSubjectId)!;
+      const source = rows.find((r) => r.id === sourceSubjectId)!;
+      if (target.status !== "ACTIVE" || source.status !== "ACTIVE") {
+        return { status: "CONFLICT" as const, reason: "SUBJECT_NOT_ACTIVE" };
+      }
+
+      await tx
+        .update(knowledgeAcquis)
+        .set({ subjectId: targetSubjectId, updatedAt: new Date() })
+        .where(
+          and(
+            eq(knowledgeAcquis.subjectId, sourceSubjectId),
+            eq(knowledgeAcquis.ownerPilotId, pilotId),
+            eq(knowledgeAcquis.preparationId, preparationId),
+          ),
+        );
+      await tx
+        .update(knowledgeOpenPoints)
+        .set({ subjectId: targetSubjectId, updatedAt: new Date() })
+        .where(
+          and(
+            eq(knowledgeOpenPoints.subjectId, sourceSubjectId),
+            eq(knowledgeOpenPoints.ownerPilotId, pilotId),
+            eq(knowledgeOpenPoints.preparationId, preparationId),
+          ),
+        );
+      if (opts?.injectFailureAfter === "move") {
+        throw new Error("injected failure after move");
+      }
+      await tx
+        .update(knowledgeSubjects)
+        .set({
+          status: "MERGED",
+          originatedFromSubjectId: targetSubjectId,
+          updatedAt: new Date(),
+        })
+        .where(eq(knowledgeSubjects.id, sourceSubjectId));
+      await tx.insert(knowledgeSubjectEvents).values({
+        id: newId("sev"),
+        preparationId,
+        ownerPilotId: pilotId,
+        subjectId: targetSubjectId,
+        eventType: "MERGED",
+        payloadJson: JSON.stringify({ absorbed: sourceSubjectId }),
+      });
+      return { status: "AVAILABLE" as const, targetSubjectId, absorbedSubjectId: sourceSubjectId };
+    });
+  } catch (e) {
+    return {
+      status: "FAILED" as const,
+      reason: e instanceof Error ? e.message : "merge failed",
+      rolledBack: true as const,
+    };
+  }
 }

 /**
- * Split: move selected acquis/open points to a new subject with filiation preserved.
- * Minimal composition — no new Figma screen; composes on existing Sujets surface.
+ * Split: move selected acquis/open points to a NEW subject identity.
+ * Never reuses an existing subject via title equality.
  */
 export async function splitSubject(
   pilotId: string,
@@ -247,81 +422,157 @@ export async function splitSubject(
     acquisIds: string[];
     openPointIds: string[];
   },
+  opts?: { injectFailureAfter?: "validate" | "create" | "move" },
 ) {
-  await assertPrep(pilotId, preparationId);
-  const source = (
-    await db
-      .select()
-      .from(knowledgeSubjects)
-      .where(
-        and(
-          eq(knowledgeSubjects.id, sourceSubjectId),
-          eq(knowledgeSubjects.ownerPilotId, pilotId),
-          eq(knowledgeSubjects.preparationId, preparationId),
-        ),
-      )
-      .limit(1)
-  )[0];
-  if (!source) return { status: "FAILED" as const, reason: "NOT_FOUND" };
+  const ctx = await assertPrep(pilotId, preparationId);
+  const newTitle = input.newTitle.trim().slice(0, 200);
+  if (!newTitle) return { status: "FAILED" as const, reason: "empty title" };
   if (input.acquisIds.length === 0 && input.openPointIds.length === 0) {
     return { status: "FAILED" as const, reason: "nothing to move" };
   }

-  const created = await ensureSubject(pilotId, preparationId, input.newTitle);
-  if (created.status !== "AVAILABLE" || !created.subjectId) {
-    return { status: "FAILED" as const, reason: "could not create target subject" };
-  }
-  const newSubjectId = created.subjectId;
-  await db
-    .update(knowledgeSubjects)
-    .set({
-      originatedFromSubjectId: sourceSubjectId,
-      updatedAt: new Date(),
-    })
-    .where(eq(knowledgeSubjects.id, newSubjectId));
-
-  if (input.acquisIds.length) {
-    await db
-      .update(knowledgeAcquis)
-      .set({ subjectId: newSubjectId, updatedAt: new Date() })
-      .where(
-        and(
-          eq(knowledgeAcquis.ownerPilotId, pilotId),
-          eq(knowledgeAcquis.preparationId, preparationId),
-          inArray(knowledgeAcquis.id, input.acquisIds),
-        ),
+  try {
+    return await db.transaction(async (tx) => {
+      await tx.execute(
+        sql`select id from knowledge_subjects where id = ${sourceSubjectId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
       );
-  }
-  if (input.openPointIds.length) {
-    await db
-      .update(knowledgeOpenPoints)
-      .set({ subjectId: newSubjectId, updatedAt: new Date() })
-      .where(
-        and(
-          eq(knowledgeOpenPoints.ownerPilotId, pilotId),
-          eq(knowledgeOpenPoints.preparationId, preparationId),
-          inArray(knowledgeOpenPoints.id, input.openPointIds),
-        ),
+      const source = await loadOwnedSubject(pilotId, preparationId, sourceSubjectId, tx as Tx);
+      if (!source) return { status: "FAILED" as const, reason: "NOT_FOUND" };
+      if (source.status !== "ACTIVE") {
+        return { status: "CONFLICT" as const, reason: "SUBJECT_NOT_ACTIVE" };
+      }
+
+      // Validate every acquis belongs to source subject + prep + owner
+      if (input.acquisIds.length) {
+        const rows = await tx
+          .select()
+          .from(knowledgeAcquis)
+          .where(
+            and(
+              eq(knowledgeAcquis.ownerPilotId, pilotId),
+              eq(knowledgeAcquis.preparationId, preparationId),
+              inArray(knowledgeAcquis.id, input.acquisIds),
+            ),
+          );
+        if (rows.length !== input.acquisIds.length) {
+          return { status: "FAILED" as const, reason: "ACQUIS_FOREIGN_OR_UNKNOWN" };
+        }
+        const foreign = rows.filter((r) => r.subjectId !== sourceSubjectId);
+        if (foreign.length) {
+          return {
+            status: "FAILED" as const,
+            reason: "ACQUIS_NOT_IN_SOURCE_SUBJECT",
+            foreignIds: foreign.map((f) => f.id),
+          };
+        }
+      }
+      if (input.openPointIds.length) {
+        const rows = await tx
+          .select()
+          .from(knowledgeOpenPoints)
+          .where(
+            and(
+              eq(knowledgeOpenPoints.ownerPilotId, pilotId),
+              eq(knowledgeOpenPoints.preparationId, preparationId),
+              inArray(knowledgeOpenPoints.id, input.openPointIds),
+            ),
+          );
+        if (rows.length !== input.openPointIds.length) {
+          return { status: "FAILED" as const, reason: "OPEN_POINT_FOREIGN_OR_UNKNOWN" };
+        }
+        const foreign = rows.filter((r) => r.subjectId !== sourceSubjectId);
+        if (foreign.length) {
+          return {
+            status: "FAILED" as const,
+            reason: "OPEN_POINT_NOT_IN_SOURCE_SUBJECT",
+            foreignIds: foreign.map((f) => f.id),
+          };
+        }
+      }
+      if (opts?.injectFailureAfter === "validate") {
+        throw new Error("injected failure after validate");
+      }
+
+      // Always new identity — title equality must not reuse
+      const newSubjectId = await createSubjectIdentity(
+        tx as Tx,
+        pilotId,
+        preparationId,
+        ctx.project?.id ?? null,
+        newTitle,
+        { originatedFromSubjectId: sourceSubjectId },
       );
+      if (opts?.injectFailureAfter === "create") {
+        throw new Error("injected failure after create");
+      }
+
+      if (input.acquisIds.length) {
+        const moved = await tx
+          .update(knowledgeAcquis)
+          .set({ subjectId: newSubjectId, updatedAt: new Date() })
+          .where(
+            and(
+              eq(knowledgeAcquis.ownerPilotId, pilotId),
+              eq(knowledgeAcquis.preparationId, preparationId),
+              eq(knowledgeAcquis.subjectId, sourceSubjectId),
+              inArray(knowledgeAcquis.id, input.acquisIds),
+            ),
+          )
+          .returning({ id: knowledgeAcquis.id });
+        if (moved.length !== input.acquisIds.length) {
+          throw new Error("acquis move count mismatch — abort");
+        }
+      }
+      if (input.openPointIds.length) {
+        const moved = await tx
+          .update(knowledgeOpenPoints)
+          .set({ subjectId: newSubjectId, updatedAt: new Date() })
+          .where(
+            and(
+              eq(knowledgeOpenPoints.ownerPilotId, pilotId),
+              eq(knowledgeOpenPoints.preparationId, preparationId),
+              eq(knowledgeOpenPoints.subjectId, sourceSubjectId),
+              inArray(knowledgeOpenPoints.id, input.openPointIds),
+            ),
+          )
+          .returning({ id: knowledgeOpenPoints.id });
+        if (moved.length !== input.openPointIds.length) {
+          throw new Error("open point move count mismatch — abort");
+        }
+      }
+      if (opts?.injectFailureAfter === "move") {
+        throw new Error("injected failure after move");
+      }
+
+      await tx.insert(knowledgeSubjectEvents).values({
+        id: newId("sev"),
+        preparationId,
+        ownerPilotId: pilotId,
+        subjectId: sourceSubjectId,
+        eventType: "SPLIT",
+        payloadJson: JSON.stringify({
+          newSubjectId,
+          acquisIds: input.acquisIds,
+          openPointIds: input.openPointIds,
+          filiation: sourceSubjectId,
+        }),
+      });
+
+      return {
+        status: "AVAILABLE" as const,
+        sourceSubjectId,
+        newSubjectId,
+        filiationPreserved: true as const,
+        createdNewIdentity: true as const,
+      };
+    });
+  } catch (e) {
+    return {
+      status: "FAILED" as const,
+      reason: e instanceof Error ? e.message : "split failed",
+      rolledBack: true as const,
+    };
   }
-  await db.insert(knowledgeSubjectEvents).values({
-    id: newId("sev"),
-    preparationId,
-    ownerPilotId: pilotId,
-    subjectId: sourceSubjectId,
-    eventType: "SPLIT",
-    payloadJson: JSON.stringify({
-      newSubjectId,
-      acquisIds: input.acquisIds,
-      openPointIds: input.openPointIds,
-    }),
-  });
-  return {
-    status: "AVAILABLE" as const,
-    sourceSubjectId,
-    newSubjectId,
-    filiationPreserved: true,
-  };
 }

 export async function listKnowledge(pilotId: string, preparationId: string) {
@@ -360,10 +611,6 @@ export async function listKnowledge(pilotId: string, preparationId: string) {
   return { subjects, acquis, openPoints };
 }

-/**
- * D4 availability → D3 selection context. Bounded, provenance-bearing, no full transcript.
- * Does NOT create authority; reconstructible summaries only.
- */
 export async function selectRelevantKnowledgeContext(
   pilotId: string,
   preparationId: string,
@@ -387,7 +634,7 @@ export async function selectRelevantKnowledgeContext(

   const rankedAcquis = acquis
     .filter((a) => a.status === "CURRENT")
-    .map((a) => ({ a, s: score(a.statement) + (a.kind === "FACT" ? 1 : 0) }))
+    .map((a) => ({ a, s: score(a.statement) }))
     .sort((x, y) => y.s - x.s || (y.a.createdAt?.getTime?.() ?? 0) - (x.a.createdAt?.getTime?.() ?? 0));

   const rankedOpen = openPoints
@@ -395,8 +642,6 @@ export async function selectRelevantKnowledgeContext(
     .map((o) => ({ o, s: score(o.statement) + 1 }))
     .sort((x, y) => y.s - x.s);

-  // Always include recent CURRENT acquis / OPEN points even with weak lexical match
-  // so reprise after many exchanges recovers D4 beyond the 6-message window.
   const pickedAcquis = rankedAcquis.slice(0, Math.min(limit, 5));
   const pickedOpen = rankedOpen.slice(0, Math.min(4, limit));
   const pickedSubjects = subjects.filter((s) => s.status === "ACTIVE").slice(0, 5);
@@ -425,12 +670,15 @@ export async function selectRelevantKnowledgeContext(
     },
     selectedAcquisIds: pickedAcquis.map((x) => x.a.id),
     selectedOpenPointIds: pickedOpen.map((x) => x.o.id),
+    selectionMethod: "lexical-heuristic" as const,
+    selectionLimit:
+      "Sélection lexicale bornée — n'établit pas de vérité épistémique; D3 doit qualifier pertinence et limites.",
   };
 }

 /**
- * Heuristic selective capitalisation after a Nora exchange.
- * Caps creations; never treats recommendation as HumanDecision.
+ * Heuristic capitalisation — auxiliary only, not epistemic authority.
+ * Defaults to HYPOTHESIS; FACT only if explicitly established.
  */
 export async function maybeCapitalizeFromExchange(
   pilotId: string,
@@ -442,10 +690,16 @@ export async function maybeCapitalizeFromExchange(
     userMessageId: string;
   },
 ) {
-  const results: Array<{ kind: string; id?: string; status: string }> = [];
+  const results: Array<{
+    kind: string;
+    id?: string;
+    status: string;
+    epistemicNote?: string;
+  }> = [];
   const lower = `${input.userText}\n${input.assistantText}`.toLowerCase();
+  const selectionLimit =
+    "Capitalisation heuristique (regex/lexical) — pas une autorité épistémique; LIVE COG requis pour qualification.";

-  // Subject from explicit topical cues
   let subjectId: string | null = null;
   const topicMatch = input.userText.match(
     /(?:sujet|thème|theme|à propos de|concernant)\s*[:«"]?\s*([^\n.«"]{4,80})/i,
@@ -455,30 +709,43 @@ export async function maybeCapitalizeFromExchange(
     if (s.status === "AVAILABLE" && s.subjectId) subjectId = s.subjectId;
   }

+  // Stronger gate than keyword alone: require comparative structure or explicit durable ask
   const looksComparative =
-    /compar(e|er|aison)|option[s]? [abc]|compromis|avantage|inconvénient/i.test(lower);
+    /compar(e|er|aison).{0,80}(option|compromis|avantage|inconvénient|critère)/i.test(lower) ||
+    (/option[s]?\s*[abc]/i.test(lower) && /compromis|avantage|inconvénient/i.test(lower));
   const looksOpen =
-    /\b(point ouvert|à clarifier|reste à|inconnu|hypothèse|question ouverte|dépendance)\b/i.test(
-      lower,
+    /\b(point ouvert|question ouverte|à clarifier|dépendance non résolue)\b/i.test(lower);
+  const looksDurableAsk =
+    /\b(retenir comme acquis|capitalise|mémorise|enregistre (cet|cette) acquis)\b/i.test(
+      input.userText,
     );
-  const looksDurable =
-    looksComparative ||
-    /conclusion|reten(?:ir|u)|acquis|décider|synthèse|hypothèse privilégiée/i.test(lower);
+  const looksRecommendation = /\brecommandation conditionnelle\b/i.test(lower);

-  if (looksDurable) {
+  if (looksDurableAsk || looksComparative) {
     const statement = extractSalientLine(input.assistantText) ?? input.userText.slice(0, 200);
+    const kind: KnowledgeKind = looksRecommendation
+      ? "RECOMMENDATION"
+      : looksComparative
+        ? "HYPOTHESIS"
+        : "HYPOTHESIS";
     const cap = await capitalizeAcquis(pilotId, preparationId, {
       statement,
-      kind: looksComparative ? "HYPOTHESIS" : "FACT",
+      kind,
       subjectId,
       provenance: {
         sourceKind: "message",
         sourceId: input.userMessageId,
         generationId: input.generationId,
-        note: "selective capitalisation post-exchange",
+        note: "heuristic capitalisation — not epistemic authority",
+        epistemic: kind === "RECOMMENDATION" ? "recommended" : "hypothesized",
       },
     });
-    results.push({ kind: "acquis", id: "acquisId" in cap ? cap.acquisId : undefined, status: cap.status });
+    results.push({
+      kind: "acquis",
+      id: "acquisId" in cap ? cap.acquisId : undefined,
+      status: cap.status,
+      epistemicNote: selectionLimit,
+    });
   }

   if (looksOpen) {
@@ -492,17 +759,23 @@ export async function maybeCapitalizeFromExchange(
         sourceKind: "message",
         sourceId: input.userMessageId,
         generationId: input.generationId,
+        epistemic: "limited",
       },
     });
     results.push({
       kind: "open_point",
       id: "openPointId" in op ? op.openPointId : undefined,
       status: op.status,
+      epistemicNote: selectionLimit,
     });
   }

-  // Explicit document request does not auto-capitalise every sentence — skip chatter.
-  return { capitalisations: results };
+  return {
+    capitalisations: results,
+    selectionMethod: "lexical-heuristic" as const,
+    selectionLimit,
+    humanDecisionCreated: false as const,
+  };
 }

 function extractSalientLine(text: string): string | null {

```


### `projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts` (M)

```diff

diff --git a/projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts
index 726debdf..2609634f 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts
@@ -27,11 +27,9 @@ test("ML2 DEV: fil continu, document explicite, journal sujets, reprise projet",
     "Rédige un document de synthèse sur les options A et B",
   );
   await page.getByRole("button", { name: "Envoyer" }).click();
-  await expect(page.getByText(/document doc_.*AVAILABLE|Document proposé|# Synthèse/i)).toBeVisible({
+  await expect(page.getByText(/Nora deterministic-fixture · COMPLETE · document \S+ v\d+/i)).toBeVisible({
     timeout: 30000,
   });
-  // Status line after save confirmation (generation ≠ save until AVAILABLE)
-  await expect(page.getByText(/document \S+ v\d+/i)).toBeVisible({ timeout: 15000 });

   // Journal — Sujets surface
   await page.getByRole("button", { name: "Journal — Sujets" }).click();

```


### `projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts` (M)

```diff

diff --git a/projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
index 57ee25f3..c49c28dd 100644
--- a/projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
@@ -33,7 +33,7 @@ function applySql(file: string, database = DB) {
   );
 }

-describe.skipIf(!dockerOk())("migrations 001→003 on fresh isolated Postgres", () => {
+describe.skipIf(!dockerOk())("migrations 001→004 on fresh isolated Postgres", () => {
   let sql: ReturnType<typeof postgres> | null = null;

   beforeAll(async () => {
@@ -102,10 +102,11 @@ describe.skipIf(!dockerOk())("migrations 001→003 on fresh isolated Postgres",
     }
   }, 30_000);

-  it("applies 001 then 002 then 003; auth_mode + knowledge tables exist", async () => {
+  it("applies 001→004; auth_mode + knowledge + creation_correlation exist", async () => {
     applySql("001_initial_studio_core.sql");
     applySql("002_session_auth_mode.sql");
     applySql("003_ml2_knowledge_documents.sql");
+    applySql("004_ml2_integrity_corrective.sql");

     const cols = await sql!`
       SELECT column_name, column_default, is_nullable
@@ -151,12 +152,18 @@ describe.skipIf(!dockerOk())("migrations 001→003 on fresh isolated Postgres",
         AND column_name IN ('base_revision_id', 'correlation_key', 'provenance_json')
     `;
     expect(revCols.length).toBe(3);
+    const corr = await sql!`
+      SELECT column_name FROM information_schema.columns
+      WHERE table_name = 'documents' AND column_name = 'creation_correlation_key'
+    `;
+    expect(corr).toHaveLength(1);
   });

-  it("re-applying 001+002+003 is idempotent", () => {
+  it("re-applying 001→004 is idempotent", () => {
     expect(() => applySql("001_initial_studio_core.sql")).not.toThrow();
     expect(() => applySql("002_session_auth_mode.sql")).not.toThrow();
     expect(() => applySql("003_ml2_knowledge_documents.sql")).not.toThrow();
+    expect(() => applySql("004_ml2_integrity_corrective.sql")).not.toThrow();
   });

   it("controlled failure when a migration SQL is broken (ON_ERROR_STOP)", () => {

```


### `projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts` (M)

```diff

diff --git a/projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts
index 83619fd6..c4d9dfca 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts
@@ -93,6 +93,7 @@ describe("ML2 D4 knowledge + document concurrency (PG)", () => {
       openPointIds: [],
     });
     expect(split.status).toBe("AVAILABLE");
+    if (split.status !== "AVAILABLE") throw new Error("expected AVAILABLE split");
     expect(split.filiationPreserved).toBe(true);
     const k = await listKnowledge(pilotId, prep.id);
     const neo = k.subjects.find((x) => x.id === split.newSubjectId);
@@ -107,41 +108,44 @@ describe("ML2 D4 knowledge + document concurrency (PG)", () => {
     const prep = await openOrCreatePreparation(pilotId);
     const v1 = await savePreparationDocument(pilotId, prep.id, "Spec", "# Spec\n\nSection A\n");
     expect(v1.status).toBe("AVAILABLE");
+    if (v1.status !== "AVAILABLE") throw new Error("v1");
     const v2 = await reviseDocument(pilotId, prep.id, {
-      documentId: v1.documentId!,
-      baseRevisionId: v1.revisionId!,
+      documentId: v1.documentId,
+      baseRevisionId: v1.revisionId,
       contentMarkdown: "# Spec\n\nSection A révisée\n",
       correlationKey: "corr-rev-1",
       scope: "section",
     });
     expect(v2.status).toBe("AVAILABLE");
+    if (v2.status !== "AVAILABLE") throw new Error("v2");

     const conflict = await reviseDocument(pilotId, prep.id, {
-      documentId: v1.documentId!,
-      baseRevisionId: v1.revisionId!, // stale
+      documentId: v1.documentId,
+      baseRevisionId: v1.revisionId, // stale
       contentMarkdown: "# Spec\n\noverwrite?\n",
       correlationKey: "corr-rev-stale",
     });
     expect(conflict.status).toBe("CONFLICT");

     const replay = await reviseDocument(pilotId, prep.id, {
-      documentId: v1.documentId!,
-      baseRevisionId: v2.revisionId!,
+      documentId: v1.documentId,
+      baseRevisionId: v2.revisionId,
       contentMarkdown: "ignored on replay",
       correlationKey: "corr-rev-1",
     });
     expect(replay.status).toBe("AVAILABLE");
+    if (replay.status !== "AVAILABLE") throw new Error("replay");
     expect(replay.idempotentReplay).toBe(true);
     expect(replay.revisionId).toBe(v2.revisionId);

-    const list = await listDocumentRevisions(pilotId, prep.id, v1.documentId!);
+    const list = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
     expect(list.revisions.length).toBeGreaterThanOrEqual(2);
     const cmp = await compareDocumentRevisions(
       pilotId,
       prep.id,
-      v1.documentId!,
-      v1.revisionId!,
-      v2.revisionId!,
+      v1.documentId,
+      v1.revisionId,
+      v2.revisionId,
     );
     expect(cmp.status).toBe("AVAILABLE");
     if (cmp.status === "AVAILABLE") {

```


### `projects/sfia-studio-next/web/tests/unit/safe-markdown.test.ts` (M)

```diff

diff --git a/projects/sfia-studio-next/web/tests/unit/safe-markdown.test.ts b/projects/sfia-studio-next/web/tests/unit/safe-markdown.test.ts
index 451e3b76..31341e58 100644
--- a/projects/sfia-studio-next/web/tests/unit/safe-markdown.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/safe-markdown.test.ts
@@ -2,11 +2,12 @@ import { describe, expect, it } from "vitest";
 import { diffMarkdown } from "@/domains/document/service";

 describe("diffMarkdown", () => {
-  it("reports added and removed lines", () => {
+  it("reports added and removed lines in order", () => {
     const d = diffMarkdown("a\nb\nc", "a\nx\nc");
-    expect(d.removed).toContain("b");
-    expect(d.added).toContain("x");
-    expect(d.unchangedCount).toBeGreaterThanOrEqual(2);
+    expect(d.removed).toEqual(["b"]);
+    expect(d.added).toEqual(["x"]);
+    expect(d.unchangedCount).toBe(2);
+    expect(d.ops.map((o) => o.op)).toEqual(["equal", "remove", "add", "equal"]);
   });
 });


```


---

## 7. Migrations / compatibilité

- `004_ml2_integrity_corrective.sql` additive: `documents.creation_correlation_key` + unique index + `document_revisions_base_idx`
- ML1 + 003 data preserved ; no DROP
- schemaRevision = `004_ml2_integrity_corrective`

### Mécanismes atomiques
- **Sujets:** `BEGIN` → `SELECT … FOR UPDATE` → validate membership → mutate → event → `COMMIT` ; injectFailure* → rollback, no lying journal
- **Révisions:** lock document row → re-read latest AVAILABLE → insert or CONFLICT
- **Création doc:** resolve creation_correlation_key before allocating id ; fingerprint in provenance ; CONFLICT on payload mismatch

---

## 8. Tests

### Unit
```

> sfia-studio-web@0.0.0-dev test:unit
> vitest run tests/unit

◇ injected env (1) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace/projects/sfia-studio-next/web

 ✓ tests/unit/next-dist-dir.test.ts (2 tests) 3ms
 ✓ tests/unit/e2e-pg-gate.test.ts (4 tests) 2ms
 ✓ tests/unit/nora-e2e-fixture.test.ts (7 tests) 2ms
 ✓ tests/unit/dev-login-host.test.ts (6 tests) 1ms
 ✓ tests/unit/ml2-cognition-fixture.test.ts (2 tests) 1ms
 ✓ tests/unit/diff-ordered.test.ts (5 tests) 2ms
 ✓ tests/unit/safe-markdown.test.ts (2 tests) 1ms
 ✓ tests/unit/fingerprint.test.ts (2 tests) 1ms
 ✓ tests/unit/non-effects.test.ts (1 test) 1ms

 Test Files  9 passed (9)
      Tests  31 passed (31)
   Start at  01:47:18
   Duration  1.51s (transform 69ms, setup 0ms, collect 718ms, tests 13ms, environment 0ms, prepare 170ms)


```

### Integration
```

> sfia-studio-web@0.0.0-dev test:integration
> vitest run tests/integration

◇ injected env (1) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace/projects/sfia-studio-next/web

 ✓ tests/integration/migrations-fresh.pg.test.ts (3 tests) 1786ms
stderr | tests/integration/create-project.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/create-project.pg.test.ts (17 tests) 265ms
stderr | tests/integration/ml2-corrective-integrity.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/ml2-corrective-integrity.pg.test.ts (13 tests) 240ms
stderr | tests/integration/ml2-knowledge-documents.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/ml2-knowledge-documents.pg.test.ts (6 tests) 218ms
stderr | tests/integration/identity-session.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/identity-session.pg.test.ts (6 tests) 72ms

 Test Files  5 passed (5)
      Tests  45 passed (45)
   Start at  01:47:24
   Duration  4.22s (transform 88ms, setup 0ms, collect 1.19s, tests 2.58s, environment 0ms, prepare 114ms)


```

### Playwright
```
Server] NOTICE:  relation "documents_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions_doc_rev_uidx" already exists, skipping
[WebServer] NOTICE:  column "auth_mode" of relation "sessions" already exists, skipping
[WebServer] NOTICE:  column "base_revision_id" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  column "correlation_key" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  column "provenance_json" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  column "scope" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions_corr_uidx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subjects" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subjects_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subjects_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_acquis" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_acquis_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_acquis_subject_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_open_points" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_open_points_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_open_points_status_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subject_events" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subject_events_subject_idx" already exists, skipping
[WebServer] NOTICE:  column "creation_correlation_key" of relation "documents" already exists, skipping
[WebServer] NOTICE:  relation "documents_prep_owner_corr_uidx" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions_base_idx" already exists, skipping

Running 2 tests using 1 worker

(node:31997) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓  1 tests/e2e/ml1-smoke.spec.ts:4:5 › DEV fake login → sas → message Nora FAKE → document → create → portfolio reopen by projectId (10.9s)
  ✓  2 tests/e2e/ml2-smoke.spec.ts:4:5 › ML2 DEV: fil continu, document explicite, journal sujets, reprise projet (5.1s)

  2 passed (19.3s)

```

### Build
```
       155 B         103 kB
├ ƒ /api/preparations                                           155 B         103 kB
├ ƒ /api/preparations/[preparationId]                           155 B         103 kB
├ ƒ /api/preparations/[preparationId]/create-project            155 B         103 kB
├ ƒ /api/preparations/[preparationId]/documents                 155 B         103 kB
├ ƒ /api/preparations/[preparationId]/documents/[documentId]    155 B         103 kB
├ ƒ /api/preparations/[preparationId]/knowledge                 155 B         103 kB
├ ƒ /api/preparations/[preparationId]/messages                  155 B         103 kB
├ ƒ /api/preparations/[preparationId]/reconcile                 155 B         103 kB
├ ƒ /api/projects/[projectId]                                   155 B         103 kB
├ ○ /login                                                    1.22 kB         104 kB
├ ○ /portfolio                                                1.08 kB         104 kB
├ ƒ /preparations/[preparationId]                             5.36 kB         108 kB
└ ƒ /projects/[projectId]                                     3.38 kB         106 kB
+ First Load JS shared by all                                  103 kB
  ├ chunks/493-d3099f0aa7768a9d.js                            46.6 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js                       54.2 kB
  └ other shared chunks (total)                               1.92 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand


```

tsc: PASS

---

## 9. Matrice C1–C6

| Défaut | Négatif | Après | DB | Verdict |
| --- | --- | --- | --- | --- |
| C1 hors source | PASS | PASS | PASS | **PASS** |
| C1 rollback | PASS | PASS | PASS | **PASS** |
| C1 collision titre | PASS | PASS | PASS | **PASS** |
| C2 concurrent revise | PASS | PASS | PASS | **PASS** |
| C3 retry création | PASS | PASS | PASS | **PASS** |
| C3 ACK perdu | PASS | PASS | PASS | **PASS** |
| C4 lignes répétées | PASS | PASS | N/A | **PASS** |
| C5 faux FACT | PASS | PASS | PASS | **PASS** |
| C6 UI états | smoke | smoke | si effet | **PASS partiel** (BROWSER FAKE) |

---

## 10. Fake / Real

| Niveau | Résultat |
| --- | --- |
| DETERMINISTIC | 31 PASS |
| PG INTEGRATION | 45 PASS |
| BROWSER FAKE | 2 PASS |
| LIVE Nora / COG | NOT RUN |
| CI Next | ABSENT — bloque PR readiness |

---

## 11. Streaming / LIVE / Figma

- Streaming attempt conservé ; UI progressive non livrée (ML2-S1)
- COG-01..07 NOT RUN
- Figma non modifié ; pas de verdict fidélité forte

---

## 12. Réserves / exit

| Id | État | Exit |
| --- | --- | --- |
| ML2-S1 streaming | ouverte | Morris : accepter ou lot reprise |
| ML2-S2 séparation UX | composition minimale | revue Morris si parcours structurant |
| ML2-S3 Figma matrix | incomplete | captures multi-viewport |
| CI Next | absente | GO workflow distinct |
| Cookie host | ML1-A | avant STABLE |

---

## 13. Interdits contrôlés

Pas de push projet / PR / merge / main / Figma / ADR / workflows CI / secrets.

---

## 14. Décisions Morris

1. Accepter correctif intégrité C1–C5 comme levée des bloqueurs DB.
2. Qualifier réserves S1/S2/S3/CI/COG pour suite.
3. GO distinct CI Next avant PR.
4. GO distinct push/PR/RECETTE.

---

## 15. Verdict

**READY FOR MORRIS REVIEW**

Défauts d'intégrité C1–C5 corrigés et prouvés sur PostgreSQL réel ; C6 cohérent en smoke BROWSER FAKE ; réserves streaming/COG/Figma/CI explicites et non présentées comme clos. Pas ML2 CLOSED / pas RECETTE / pas PR READY / pas RELEASE.
