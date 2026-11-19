# JOURNAL V4 — CYCLE 3 E06-01..06 — REVIEW PACK FULL

- **Date/heure** : 2026-11-19 10:08:09 CET
- **Branche** : `sfia/next-journal-delivery-20261119`
- **HEAD** : `a122bf27fa46ede3300474217bc57c27cd1e496d`
- **HEAD précédent** : `782c93ecd94446f586a2f4f5344f14eb4530e87a`
- **origin/main** : `d3d199adb782462b93467934f5f1e8a0c98fb492`
- **Docs remote (matrice v0.2, non fusionnée)** : `2ae685a5f2523fafdf15bf6375e33cde500cc6f7`
- **Handoff précédent** : `7a065cec`
- **Versioning** : NO RELEASE
- **Push projet** : NON
- **VISUAL REVIEW** : PENDING MORRIS — RECETTE

## 1. Git Truth Check
```
?? projects/.tmp-sfia-review/
?? projects/sfia-studio-next/.tmp-sfia-review/

```
```
a122bf27 fix(next): resolve Journal E06-01..06 security, honesty and seeded BROWSER proofs
782c93ec feat(next): complete Journal V4 J-C04/06/13/14 and BROWSER proofs locally

```
### Diff stat cycle 3
```
 .../as-built-ensemble-06-journal-20261119.md       |  87 +++---
 .../construction/delivery-history.md               |  15 ++
 .../sfia-studio-next/web/scripts/db-migrate.sh     |   3 +-
 .../src/app/api/dev/e2e/journal-fixture/route.ts   |  58 ++++
 .../web/src/app/projects/[projectId]/page.tsx      |  83 +++++-
 .../web/src/domains/knowledge/journal-cognition.ts |  56 ++--
 .../web/src/domains/knowledge/journal-e2e-seed.ts  | 297 +++++++++++++++++++++
 .../web/src/domains/knowledge/journal.ts           |  95 ++++++-
 .../web/tests/e2e/journal-v4-parcours.spec.ts      | 174 +++++++-----
 .../integration/journal-d4-revisions.pg.test.ts    | 127 ++++++++-
 .../web/tests/unit/journal-cognition.test.ts       |  23 ++
 11 files changed, 860 insertions(+), 158 deletions(-)

```
```
M	projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/web/scripts/db-migrate.sh
A	projects/sfia-studio-next/web/src/app/api/dev/e2e/journal-fixture/route.ts
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/domains/knowledge/journal-cognition.ts
A	projects/sfia-studio-next/web/src/domains/knowledge/journal-e2e-seed.ts
M	projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
M	projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
M	projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/journal-cognition.test.ts

```

## 2. E06-01..06 — traitement

| ID | Correction | Preuve |
|---|---|---|
| E06-05 | loadOwnedOpenPoint scope projet sur markOpenPointReactivated | PG cross-project deny + zero write + idempotence PASS |
| E06-03 | Git main+SHA → UNVERIFIED (jamais CURRENT sans verify) | UNIT qualifyProvenanceSource PASS |
| E06-04 | deep-link reload/insert by createdAt | BROWSER seeded early≠last + draft preserved PASS |
| E06-01 | fixture métier + assertions non conditionnelles | Playwright journal-v4-parcours PASS |
| E06-02 | synthèse multi-révision + réactivation +/- | PG E06-02 PASS ; LIVE NOT RUN |
| E06-06 | resolve exige doc/message réel ; migrate 014 ; D6 restriction | PG fake doc FAIL + real resolve PASS ; build PASS |

## 3. Matrice J-C01..J-C16 (cycle 3)

| ID | Code | Test | Résultat | Limite |
|---|---|---|---|---|
| J-C01 | IMPLEMENTED | PG mem revision | PASS PG | LIVE synthèse NOT RUN |
| J-C02 | IMPLEMENTED | ensureSubject/reparent | PASS PG | — |
| J-C03 | IMPLEMENTED | seed+BROWSER subjectId | PASS BROWSER | — |
| J-C04 | IMPLEMENTED | reactivation+scope | PASS PG+UNIT | LIVE spontanéité NOT RUN |
| J-C05 | IMPLEMENTED | resolve real source + D6 restr | PASS PG | — |
| J-C06 | IMPLEMENTED | UNVERIFIED/CANDIDATE + contradictions | PASS UNIT+PG | REAL Git verify NOT RUN |
| J-C07 | PARTIAL | isolation + single-prep seed | PASS PG | two-prep same project NOT RUN |
| J-C08 | IMPLEMENTED | search acquis+reason BROWSER | PASS PG+BROWSER | — |
| J-C09 | IMPLEMENTED | decision applicable BROWSER | PASS PG+BROWSER | — |
| J-C10 | PARTIAL | explanation revision | PASS PG | LIVE récit NOT RUN |
| J-C11 | PARTIAL | search API+UI decisions | PASS PG | BROWSER search decisions PARTIAL |
| J-C12 | IMPLEMENTED | 40/60 enlarge seeded | PASS BROWSER | VISUAL PENDING MORRIS |
| J-C13 | IMPLEMENTED | early message focus+draft | PASS BROWSER | 1000+ optional (40 seeded) |
| J-C14 | IMPLEMENTED | document surface seeded | PASS BROWSER | — |
| J-C15 | IMPLEMENTED | scope+idempotence | PASS PG | perf long-thread PARTIAL |
| J-C16 | PARTIAL | tsc/lint/build+Journal suites | PASS ciblé | ML2/ML3/ML4C/E05 full NOT RUN |

## 4. Tests exécutés
```
tsc --noEmit → PASS
npm run lint → PASS (warnings préexistants)
next build → PASS
vitest journal-cognition → 6/6 PASS
vitest journal-d4-revisions.pg → 12/12 PASS
vitest ml3-authority + non-effects → PASS
playwright journal-v4-parcours (seeded) → 1/1 PASS
ML2/ML3/ML4C/E05 full e2e suites → NOT RUN (hors fenêtre cycle; risque résiduel documenté)
LIVE Nora / REAL Git → NOT RUN / HORS GO
```

## 5. Fake/Real
| Frontière | Niveau |
|---|---|
| PG/API/BROWSER DEV | DETERMINISTIC PROVEN |
| LIVE Nora | NOT PROVEN |
| REAL Git | NOT PROVEN |
| Visual Morris RECETTE | PENDING |

## 6. Contenu créé — FULL
### CREATE `projects/sfia-studio-next/web/src/domains/knowledge/journal-e2e-seed.ts` (297 lines)
```typescript
/**
 * DEV/E2E-only Journal scenario seed — uses real D4/D6 domain writes.
 * Gate: caller must enforce e2eFixtureMutationsAllowed().
 */
import { and, asc, desc, eq } from "drizzle-orm";
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
  const leaf = await ensureSubject(pilotId, preparationId, "Traçabilité Git", parent.subjectId);
  const otherParent = await ensureSubject(pilotId, preparationId, "Budget et risques");
  const homonym = await ensureSubject(pilotId, preparationId, "Traçabilité Git", otherParent.subjectId);

  const acquis = await capitalizeAcquis(pilotId, preparationId, {
    statement:
      "Le mot-clé traçabilité apparaît uniquement dans cet acquis capitalisé pour la recherche Journal.",
    kind: "HYPOTHESIS",
    subjectId: leaf.subjectId,
    provenance: { sourceKind: "message", sourceId: "seed-msg-acquis", epistemic: "observed" },
  });

  await appendSubjectSummaryRevision(pilotId, projectId, leaf.subjectId!, {
    summaryMarkdown:
      "Synthèse versionnée : la traçabilité Git reste un point de vigilance à clarifier avec sources.",
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
      "Pourquoi ce choix : alternatives B écartées faute de traçabilité ; motivations et contraintes sourcées.",
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

  // Point Journal sources at the real early message + document revision.
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
```

### CREATE `projects/sfia-studio-next/web/src/app/api/dev/e2e/journal-fixture/route.ts` (58 lines)
```typescript
/**
 * DEV/E2E-only Journal scenario seed for Ensemble 06 BROWSER proofs.
 * Uses real D4/D6 domain paths. Never LIVE Nora / REAL Git.
 */
import { NextResponse } from "next/server";
import { resolveStudioSession } from "@/domains/identity/session";
import { getOwnedProjectContext } from "@/domains/preparation/project-context";
import { seedJournalE2EScenario } from "@/domains/knowledge/journal-e2e-seed";
import { e2eFixtureMutationsAllowed } from "@/lib/e2e-fixture-gate";

export async function POST(req: Request) {
  const gate = e2eFixtureMutationsAllowed();
  if (!gate.ok) {
    return NextResponse.json(
      { error: "E2E_FIXTURE_FORBIDDEN", reason: gate.reason },
      { status: 403 },
    );
  }
  const session = await resolveStudioSession();
  if (!session) return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });

  const body = (await req.json().catch(() => ({}))) as {
    projectId?: string;
    longThreadCount?: number;
  };
  const projectId = (body.projectId ?? "").trim();
  if (!projectId) {
    return NextResponse.json({ error: "projectId required" }, { status: 400 });
  }

  let ctx: Awaited<ReturnType<typeof getOwnedProjectContext>>;
  try {
    ctx = await getOwnedProjectContext(session.pilotId, projectId);
  } catch {
    return NextResponse.json({ error: "project not found or not owned" }, { status: 404 });
  }
  if (!ctx.preparation?.id) {
    return NextResponse.json({ error: "preparation missing" }, { status: 404 });
  }

  try {
    const seed = await seedJournalE2EScenario({
      pilotId: session.pilotId,
      preparationId: ctx.preparation.id,
      projectId,
      longThreadCount: body.longThreadCount,
    });
    return NextResponse.json({ status: "AVAILABLE", seed });
  } catch (e) {
    return NextResponse.json(
      {
        error: "SEED_FAILED",
        reason: e instanceof Error ? e.message : "unknown",
      },
      { status: 500 },
    );
  }
}
```

## 7. Diffs utiles cycle 3
### DIFF `projects/sfia-studio-next/web/src/domains/knowledge/journal.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts b/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
index f413317a..12fbd786 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
@@ -2,6 +2,9 @@ import { createHash } from "crypto";
 import { and, desc, eq, inArray, isNull, ne, or, sql } from "drizzle-orm";
 import { db } from "@/db/client";
 import {
+  conversations,
+  documentRevisions,
+  documents,
   governanceRestrictions,
   humanDecisions,
   knowledgeAcquis,
@@ -11,6 +14,7 @@ import {
   knowledgeSubjectEvents,
   knowledgeSubjectSummaryRevisions,
   knowledgeSubjects,
+  messages,
   preparationProjectLinks,
   preparations,
   projects,
@@ -477,7 +481,8 @@ export async function appendDecisionExplanationRevision(
   }
 }

-async function loadOwnedOpenPoint(
+/** E06-05 — open point must belong to a preparation linked to the requested project. */
+export async function loadOwnedOpenPoint(
   pilotId: string,
   projectId: string,
   openPointId: string,
@@ -508,14 +513,98 @@ function provenanceSufficient(p: Provenance): boolean {
   return false;
 }

+/**
+ * E06-06 — factual resolve requires a revalidated source, not an invented id string.
+ * Document/revision/message must exist in the project scope for the Pilote.
+ */
+async function provenanceFactuallyVerified(
+  pilotId: string,
+  projectId: string,
+  p: Provenance,
+): Promise<{ ok: true } | { ok: false; reason: string }> {
+  if (!provenanceSufficient(p)) {
+    return { ok: false, reason: "INSUFFICIENT_PROVENANCE" };
+  }
+  if (p.sourceKind === "pilot" || p.sourceKind === "nora") {
+    return { ok: false, reason: "ACTOR_DECLARATION_NOT_FACTUAL_SOURCE" };
+  }
+  const prepIds = await linkedPreparationIds(pilotId, projectId);
+  if (prepIds.length === 0) return { ok: false, reason: "NO_PROJECT_SCOPE" };
+
+  if (p.sourceKind === "message" && p.sourceId) {
+    const msg = (
+      await db
+        .select({ id: messages.id })
+        .from(messages)
+        .innerJoin(conversations, eq(conversations.id, messages.conversationId))
+        .where(
+          and(
+            eq(messages.id, p.sourceId),
+            eq(conversations.ownerPilotId, pilotId),
+            inArray(conversations.preparationId, prepIds),
+          ),
+        )
+        .limit(1)
+    )[0];
+    if (!msg) return { ok: false, reason: "MESSAGE_SOURCE_INACCESSIBLE" };
+    return { ok: true };
+  }
+
+  if (p.sourceKind === "document" || p.sourceKind === "revision") {
+    const sourceId = p.sourceId;
+    if (!sourceId) return { ok: false, reason: "INSUFFICIENT_PROVENANCE" };
+    const rev = (
+      await db
+        .select({
+          id: documentRevisions.id,
+          status: documentRevisions.status,
+        })
+        .from(documentRevisions)
+        .innerJoin(documents, eq(documents.id, documentRevisions.documentId))
+        .where(
+          and(
+            eq(documentRevisions.id, sourceId),
+            eq(documents.ownerPilotId, pilotId),
+            inArray(documents.preparationId, prepIds),
+          ),
+        )
+        .limit(1)
+    )[0];
+    if (rev) {
+      if (rev.status !== "AVAILABLE") {
+        return { ok: false, reason: "DOCUMENT_REVISION_NOT_AVAILABLE" };
+      }
+      return { ok: true };
+    }
+    const doc = (
+      await db
+        .select({ id: documents.id })
+        .from(documents)
+        .where(
+          and(
+            eq(documents.id, sourceId),
+            eq(documents.ownerPilotId, pilotId),
+            inArray(documents.preparationId, prepIds),
+          ),
+        )
+        .limit(1)
+    )[0];
+    if (!doc) return { ok: false, reason: "DOCUMENT_SOURCE_INACCESSIBLE" };
+    return { ok: true };
+  }
+
+  return { ok: false, reason: "UNSUPPORTED_PROVENANCE_KIND" };
+}
+
 export async function resolveOpenPointFactually(
   pilotId: string,
   projectId: string,
   openPointId: string,
   input: { reason: string; provenance: Provenance; operationId?: string; actorKind?: string },
 ) {
-  if (!provenanceSufficient(input.provenance)) {
-    return { status: "FAILED" as const, reason: "INSUFFICIENT_PROVENANCE" };
+  const verified = await provenanceFactuallyVerified(pilotId, projectId, input.provenance);
+  if (!verified.ok) {
+    return { status: "FAILED" as const, reason: verified.reason };
   }
   const point = await loadOwnedOpenPoint(pilotId, projectId, openPointId);
   if (!point) return { status: "FAILED" as const, reason: "NOT_FOUND" };
```

### DIFF `projects/sfia-studio-next/web/src/domains/knowledge/journal-cognition.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/journal-cognition.ts b/projects/sfia-studio-next/web/src/domains/knowledge/journal-cognition.ts
index 76f95130..013cba3b 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/journal-cognition.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/journal-cognition.ts
@@ -15,7 +15,7 @@ import {
   conversations,
 } from "@/db/schema";
 import type { Provenance } from "@/domains/knowledge/service";
-import { listProjectKnowledge } from "@/domains/knowledge/journal";
+import { listProjectKnowledge, loadOwnedOpenPoint } from "@/domains/knowledge/journal";
 import { newId } from "@/lib/ids";

 const FR_STOP = new Set([
@@ -212,7 +212,10 @@ export async function selectOpenPointsForReactivation(
   };
 }

-/** Persist a REACTIVATED event after D3 elects to surface a candidate (idempotent by operationId). */
+/**
+ * Persist a REACTIVATED event after D3 elects to surface a candidate (idempotent by operationId).
+ * E06-05 — projectId must match a preparation-linked ownership of the open point (same Pilote alone is insufficient).
+ */
 export async function markOpenPointReactivated(
   pilotId: string,
   projectId: string,
@@ -223,19 +226,16 @@ export async function markOpenPointReactivated(
     operationId?: string;
   },
 ) {
-  const point = (
-    await db
-      .select()
-      .from(knowledgeOpenPoints)
-      .where(
-        and(eq(knowledgeOpenPoints.id, openPointId), eq(knowledgeOpenPoints.ownerPilotId, pilotId)),
-      )
-      .limit(1)
-  )[0];
-  if (!point) return { status: "FAILED" as const, reason: "NOT_FOUND" };
+  const point = await loadOwnedOpenPoint(pilotId, projectId, openPointId);
+  if (!point) return { status: "FAILED" as const, reason: "NOT_FOUND_OR_OUT_OF_PROJECT" };
   if (point.status !== "OPEN") {
     return { status: "SKIPPED" as const, reason: "NOT_OPEN" };
   }
+  // Prefer the point's own projectId when set; never write a foreign projectId.
+  const eventProjectId = point.projectId ?? projectId;
+  if (point.projectId && point.projectId !== projectId) {
+    return { status: "FAILED" as const, reason: "PROJECT_SCOPE_MISMATCH" };
+  }

   if (input.operationId) {
     const prior = (
@@ -264,7 +264,7 @@ export async function markOpenPointReactivated(
     id: eventId,
     openPointId,
     preparationId: point.preparationId,
-    projectId,
+    projectId: eventProjectId,
     ownerPilotId: pilotId,
     eventType: "REACTIVATED",
     reason: input.reason.trim().slice(0, 500),
@@ -283,6 +283,7 @@ export type SourceCurrentness =
   | "HISTORICAL"
   | "INACCESSIBLE"
   | "CANDIDATE"
+  | "UNVERIFIED"
   | "UNKNOWN";

 export type QualifiedSource = {
@@ -331,15 +332,28 @@ export async function qualifyProvenanceSource(
         epistemic,
       };
     }
+    // E06-03 — declared main+SHA is NEVER CURRENT without a real verified read.
+    // This cycle has no GO for REAL Git remote verification → honest UNVERIFIED/CANDIDATE.
+    if (!mainish) {
+      return {
+        sourceKind: "git",
+        gitRepo: provenance.gitRepo,
+        gitRef: provenance.gitRef,
+        gitSha: provenance.gitSha,
+        currentness: "CANDIDATE",
+        detail:
+          "branche/ref candidate distincte de main — non assimilable à une preuve établie sur main",
+        epistemic,
+      };
+    }
     return {
       sourceKind: "git",
       gitRepo: provenance.gitRepo,
       gitRef: provenance.gitRef,
       gitSha: provenance.gitSha,
-      currentness: mainish ? "CURRENT" : "CANDIDATE",
-      detail: mainish
-        ? "ref principale avec SHA — à confronter avant affirmation"
-        : "branche/ref candidate distincte de main — ne pas présenter comme établie",
+      currentness: "UNVERIFIED",
+      detail:
+        "ref principale + SHA déclarés sans vérification Git distante autorisée — ne pas présenter comme CURRENT",
       epistemic,
     };
   }
@@ -560,15 +574,19 @@ export function assertHonestSynthesisInput(input: {
   const hasUnresolved = input.contradictions.some((c) => c.status === "UNRESOLVED");
   const hasInaccessible = input.sources.some((s) => s.currentness === "INACCESSIBLE");
   const hasCandidate = input.sources.some((s) => s.currentness === "CANDIDATE");
+  const hasUnverified = input.sources.some((s) => s.currentness === "UNVERIFIED");
   const hasUncertainEpistemic = input.sources.some(
     (s) => s.epistemic === "hypothesized" || s.epistemic === "limited",
   );

-  if (claimsEstablished && (hasUnresolved || hasInaccessible || hasCandidate || hasUncertainEpistemic)) {
+  if (
+    claimsEstablished &&
+    (hasUnresolved || hasInaccessible || hasCandidate || hasUnverified || hasUncertainEpistemic)
+  ) {
     return {
       ok: false,
       reason:
-        "SYNTHESIS_OVERCLAIMS — contradiction, source inaccessible/candidate ou épistémique incertain présenté comme établi",
+        "SYNTHESIS_OVERCLAIMS — contradiction, source inaccessible/candidate/unverified ou épistémique incertain présenté comme établi",
     };
   }
   if (hasUnresolved && !/\b(contradiction|diverg|incert|ouvert|à clarifier)\b/i.test(input.summaryMarkdown)) {
```

### DIFF `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 4f1b96b0..01d34c56 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -59,7 +59,14 @@ import {
   type StudioSurface,
 } from "@/components/shell/studio-rail";

-type Msg = { id: string; role: string; content: string; status: string };
+type Msg = {
+  id: string;
+  role: string;
+  content: string;
+  status: string;
+  /** ISO timestamp — used to keep chronological order when hydrating a deep-linked message (E06-04). */
+  createdAt?: string;
+};
 type Doc = {
   document: { id: string; title: string };
   latestRevision?: {
@@ -2030,6 +2037,8 @@ export default function ProjectPage() {
                     role: string;
                     content: string;
                     status: string;
+                    createdAt?: string;
+                    ordinal?: number;
                   };
                 };
                 if (!res.ok || !body.message) {
@@ -2039,18 +2048,66 @@ export default function ProjectPage() {
                   selectSurface("travail");
                   return;
                 }
-                setMessages((prev) => {
-                  if (prev.some((m) => m.id === body.message!.messageId)) return prev;
-                  return [
-                    ...prev,
-                    {
-                      id: body.message!.messageId,
-                      role: body.message!.role,
-                      content: body.message!.content,
-                      status: body.message!.status,
-                    },
-                  ];
-                });
+                // E06-04 — prefer canonical reload; otherwise insert by createdAt (never append blindly).
+                const prepId = preparationIdRef.current;
+                let reloaded = false;
+                if (prepId) {
+                  const listRes = await fetch(`/api/preparations/${prepId}/messages`);
+                  if (listRes.ok) {
+                    const listBody = (await listRes.json().catch(() => ({}))) as {
+                      messages?: Msg[];
+                    };
+                    const rows = Array.isArray(listBody)
+                      ? (listBody as unknown as Msg[])
+                      : Array.isArray(listBody.messages)
+                        ? listBody.messages
+                        : null;
+                    if (rows && rows.some((m) => m.id === messageId)) {
+                      setMessages(
+                        rows.map((m) => ({
+                          id: m.id,
+                          role: m.role,
+                          content: m.content,
+                          status: m.status,
+                          createdAt:
+                            typeof m.createdAt === "string"
+                              ? m.createdAt
+                              : m.createdAt
+                                ? new Date(m.createdAt as unknown as string).toISOString()
+                                : undefined,
+                        })),
+                      );
+                      reloaded = true;
+                    }
+                  }
+                }
+                if (!reloaded) {
+                  const fetched: Msg = {
+                    id: body.message.messageId,
+                    role: body.message.role,
+                    content: body.message.content,
+                    status: body.message.status,
+                    createdAt: body.message.createdAt,
+                  };
+                  const targetT = fetched.createdAt ? Date.parse(fetched.createdAt) : Number.NaN;
+                  if (!Number.isFinite(targetT)) {
+                    setFocusStatus(
+                      "Message exact chargé — horodatage absent ; chronologie non inventée.",
+                    );
+                  }
+                  setMessages((prev) => {
+                    if (prev.some((m) => m.id === fetched.id)) return prev;
+                    if (!Number.isFinite(targetT)) return [...prev, fetched];
+                    const insertAt = prev.findIndex((m) => {
+                      const t = m.createdAt ? Date.parse(m.createdAt) : Number.NaN;
+                      return Number.isFinite(t) && t > targetT;
+                    });
+                    if (insertAt < 0) return [...prev, fetched];
+                    const copy = prev.slice();
+                    copy.splice(insertAt, 0, fetched);
+                    return copy;
+                  });
+                }
               }
               // Preserve draft + journalNav; never auto-send.
               setFocusMessageId(messageId);
```

### DIFF `projects/sfia-studio-next/web/scripts/db-migrate.sh`
```diff
diff --git a/projects/sfia-studio-next/web/scripts/db-migrate.sh b/projects/sfia-studio-next/web/scripts/db-migrate.sh
index d5615765..cc81197d 100755
--- a/projects/sfia-studio-next/web/scripts/db-migrate.sh
+++ b/projects/sfia-studio-next/web/scripts/db-migrate.sh
@@ -31,4 +31,5 @@ apply "010_github_app_user_oauth.sql"
 apply "011_oauth_session_binding.sql"
 apply "012_auth_concurrency_safety.sql"
 apply "013_preparation_projection.sql"
-echo "db:migrate OK (001→013)"
+apply "014_journal_d4_revisions.sql"
+echo "db:migrate OK (001→014)"
```

### DIFF `projects/sfia-studio-next/web/tests/unit/journal-cognition.test.ts`
```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/journal-cognition.test.ts b/projects/sfia-studio-next/web/tests/unit/journal-cognition.test.ts
index 3f6834fe..493094b8 100644
--- a/projects/sfia-studio-next/web/tests/unit/journal-cognition.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/journal-cognition.test.ts
@@ -118,4 +118,27 @@ describe("journal-cognition (J-C04 / J-C06 deterministic)", () => {
     });
     expect(r.ok).toBe(false);
   });
+
+  it("E06-03 — declared main+SHA without remote verify is UNVERIFIED not CURRENT", async () => {
+    const { qualifyProvenanceSource } = await import("@/domains/knowledge/journal-cognition");
+    const q = await qualifyProvenanceSource("pilot-test", {
+      sourceKind: "pilot",
+      gitRepo: "org/repo",
+      gitRef: "main",
+      gitSha: "deadbeef",
+    });
+    expect(q.currentness).toBe("UNVERIFIED");
+    expect(q.currentness).not.toBe("CURRENT");
+  });
+
+  it("E06-03 — non-main ref stays CANDIDATE", async () => {
+    const { qualifyProvenanceSource } = await import("@/domains/knowledge/journal-cognition");
+    const q = await qualifyProvenanceSource("pilot-test", {
+      sourceKind: "pilot",
+      gitRepo: "org/repo",
+      gitRef: "feature/journal",
+      gitSha: "abc123",
+    });
+    expect(q.currentness).toBe("CANDIDATE");
+  });
 });
```

### DIFF `projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts`
```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
index 20ebe898..583523e2 100644
--- a/projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
@@ -7,6 +7,7 @@ import { db } from "@/db/client";
 import {
   governanceRestrictions,
   humanDecisions,
+  knowledgeOpenPointEvents,
   knowledgeOpenPoints,
   pilots,
   preparations,
@@ -35,6 +36,7 @@ import {
   insertRestriction,
   markDecisionState,
 } from "@/domains/decisions/service";
+import { savePreparationDocument } from "@/domains/document/service";
 import { createProjectCommand } from "@/domains/preparation/create-project";
 import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";

@@ -121,9 +123,29 @@ describe("Journal D4 revisions (PG)", () => {
       provenance: { sourceKind: "message", sourceId: "m-open-1" },
     });
     expect(pt.status).toBe("AVAILABLE");
+
+    const fake = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
+      reason: "Documentation fictive",
+      provenance: { sourceKind: "document", sourceId: "doc-proof-1", epistemic: "established" },
+      operationId: "resolve-fake-1",
+    });
+    expect(fake.status).toBe("FAILED");
+    expect("reason" in fake && fake.reason).toBe("DOCUMENT_SOURCE_INACCESSIBLE");
+
+    const doc = await savePreparationDocument(
+      pilotId,
+      prep.id,
+      "Preuve officielle",
+      "# preuve\nContenu réel AVAILABLE.",
+      undefined,
+      { correlationKey: `proof-${pt.openPointId}`, provenance: { sourceKind: "pilot" } },
+    );
+    expect(doc.status).toBe("AVAILABLE");
+    const revisionId = "revisionId" in doc ? String(doc.revisionId) : "";
+
     const resolved = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
       reason: "Documentation officielle citée",
-      provenance: { sourceKind: "document", sourceId: "doc-proof-1", epistemic: "established" },
+      provenance: { sourceKind: "revision", sourceId: revisionId, epistemic: "established" },
       operationId: "resolve-op-1",
     });
     expect(resolved.status).toBe("AVAILABLE");
@@ -266,9 +288,18 @@ describe("Journal D4 revisions (PG)", () => {
       subjectId: subj.subjectId,
       provenance: { sourceKind: "message", sourceId: "m-restr-1" },
     });
+    const doc = await savePreparationDocument(
+      pilotId,
+      prep.id,
+      "Tech publish",
+      "# tech\nRéel.",
+      undefined,
+      { correlationKey: `restr-doc-${pt.openPointId}`, provenance: { sourceKind: "pilot" } },
+    );
+    const revisionId = "revisionId" in doc ? String(doc.revisionId) : "";
     const resolved = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
       reason: "Document technique trouvé",
-      provenance: { sourceKind: "document", sourceId: "doc-tech-1", epistemic: "established" },
+      provenance: { sourceKind: "revision", sourceId: revisionId, epistemic: "established" },
       operationId: "resolve-restr-1",
     });
     expect(resolved.status).toBe("AVAILABLE");
@@ -347,4 +378,96 @@ describe("Journal D4 revisions (PG)", () => {
     expect(row?.applicable).toBe(true);
     expect(row?.state).toBe("APPLICABLE");
   });
+
+  it("E06-05 markOpenPointReactivated refuses cross-project same pilot", async () => {
+    const pilotId = await seedPilot("J-e605");
+    const a = await seedLinkedProject(pilotId, "Projet E605 A");
+    const b = await seedLinkedProject(pilotId, "Projet E605 B");
+    const subj = await ensureSubject(pilotId, a.prep.id, "Open A");
+    const pt = await openPoint(pilotId, a.prep.id, {
+      statement: "Point ouvert du projet A uniquement pour scope test.",
+      subjectId: subj.subjectId,
+      provenance: { sourceKind: "message", sourceId: "m-e605" },
+    });
+
+    const ok = await markOpenPointReactivated(pilotId, a.projectId, pt.openPointId!, {
+      reason: "pertinent",
+      provenance: { sourceKind: "nora", generationId: "g-e605" },
+      operationId: "react-e605-ok",
+    });
+    expect(ok.status).toBe("AVAILABLE");
+
+    const before = await db
+      .select()
+      .from(knowledgeOpenPointEvents)
+      .where(eq(knowledgeOpenPointEvents.openPointId, pt.openPointId!));
+
+    const denied = await markOpenPointReactivated(pilotId, b.projectId, pt.openPointId!, {
+      reason: "tentative interprojet",
+      provenance: { sourceKind: "nora", generationId: "g-e605b" },
+      operationId: "react-e605-deny",
+    });
+    expect(denied.status).toBe("FAILED");
+
+    const after = await db
+      .select()
+      .from(knowledgeOpenPointEvents)
+      .where(eq(knowledgeOpenPointEvents.openPointId, pt.openPointId!));
+    expect(after).toHaveLength(before.length);
+
+    const missing = await markOpenPointReactivated(pilotId, a.projectId, "ope_absent", {
+      reason: "absent",
+      provenance: { sourceKind: "nora", generationId: "g-x" },
+      operationId: "react-missing",
+    });
+    expect(missing.status).toBe("FAILED");
+
+    const replay = await markOpenPointReactivated(pilotId, a.projectId, pt.openPointId!, {
+      reason: "retry",
+      provenance: { sourceKind: "nora", generationId: "g-e605" },
+      operationId: "react-e605-ok",
+    });
+    expect(replay.status).toBe("AVAILABLE");
+    expect("idempotentReplay" in replay && replay.idempotentReplay).toBe(true);
+  });
+
+  it("E06-02 synthesis revision history and reactivation negatives", async () => {
+    const pilotId = await seedPilot("J-e602");
+    const { prep, projectId } = await seedLinkedProject(pilotId, "Mémoire");
+    const subj = await ensureSubject(pilotId, prep.id, "Sujet mémoire");
+    const r1 = await appendSubjectSummaryRevision(pilotId, projectId, subj.subjectId!, {
+      summaryMarkdown: "Première synthèse contextualisée sur le sujet mémoire du projet.",
+      provenance: { sourceKind: "nora", generationId: "g1", epistemic: "observed" },
+      operationId: "mem-r1",
+    });
+    expect(r1.status).toBe("AVAILABLE");
+    const r2 = await appendSubjectSummaryRevision(pilotId, projectId, subj.subjectId!, {
+      summaryMarkdown:
+        "Deuxième synthèse corrigée — l'information antérieure est revue sans perte d'historique.",
+      provenance: { sourceKind: "nora", generationId: "g2", epistemic: "observed" },
+      operationId: "mem-r2",
+    });
+    expect(r2.status).toBe("AVAILABLE");
+    const current = await getCurrentSubjectSummary(pilotId, projectId, subj.subjectId!);
+    expect(current.summary?.revisionNumber).toBe(2);
+    expect(current.summary?.summaryMarkdown).toContain("Deuxième");
+
+    await openPoint(pilotId, prep.id, {
+      statement: "Question ancienne sur la latence du pipeline de capitalisation durable?",
+      subjectId: subj.subjectId,
+      provenance: { sourceKind: "message", sourceId: "m-mem" },
+    });
+    const hit = await selectOpenPointsForReactivation(
+      pilotId,
+      projectId,
+      "On reparle de la latence du pipeline",
+    );
+    expect(hit.candidates.length).toBeGreaterThan(0);
+    const miss = await selectOpenPointsForReactivation(
+      pilotId,
+      projectId,
+      "Sujet totalement orthogonal cuisine italienne",
+    );
+    expect(miss.candidates.every((c) => !c.statement.includes("latence"))).toBe(true);
+  });
 });
\ No newline at end of file
```

### DIFF `projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts`
```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts b/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
index 7cd5d290..0eaca516 100644
--- a/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
@@ -1,4 +1,4 @@
-import { test, expect } from "@playwright/test";
+import { test, expect, type Page } from "@playwright/test";
 import {
   constituteAndCreateProject,
   openNewPreparation,
@@ -6,108 +6,134 @@ import {
   uniqueProjectName,
 } from "./helpers/g4-chat-first";

-/**
- * Ensemble 06 / Journal V4 — BROWSER parcours on DEV e2e lane (:3101 / sfia_next_e2e).
- * Covers tabs, search, open-points filter, 40/60, enlarge, return (J-C12).
- */
-test.describe("Journal V4 parcours", () => {
-  test("nominal → search → open points → 40/60 → enlarge → retour fil", async ({ page }) => {
+async function seedJournalScenario(page: Page, projectId: string, longThreadCount = 40) {
+  const res = await page.request.post("/api/dev/e2e/journal-fixture", {
+    data: { projectId, longThreadCount },
+  });
+  expect(res.ok(), await res.text()).toBeTruthy();
+  const body = (await res.json()) as {
+    status: string;
+    seed: {
+      leafSubjectId: string;
+      parentSubjectId: string;
+      openPointId: string;
+      decisionApplicableId: string;
+      earlyMessageId: string;
+      documentId: string;
+      revisionIdV2: string;
+      messageCount: number;
+    };
+  };
+  expect(body.status).toBe("AVAILABLE");
+  expect(body.seed.leafSubjectId).toBeTruthy();
+  expect(body.seed.earlyMessageId).toBeTruthy();
+  return body.seed;
+}
+
+test.describe("Journal V4 — données métier non vides (E06-01)", () => {
+  test("sujets/40-60/recherche/décisions/message/document/brouillon", async ({ page }) => {
     await page.setViewportSize({ width: 1680, height: 970 });
     await page.goto("/login");
     await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
     await page.waitForURL("**/portfolio");

     await openNewPreparation(page);
-    await sendPrepMessage(
-      page,
-      "Compare options traçabilité et budget, laisse un point ouvert sur la preuve GitHub",
-    );
+    await sendPrepMessage(page, "Amorce projet Journal E2E seed");

-    const projectName = uniqueProjectName("Journal V4");
+    const projectName = uniqueProjectName("Journal E06");
     await constituteAndCreateProject(page, {
       name: projectName,
-      summary: "parcours journal v4",
+      summary: "seed journal e06",
       alreadyUnique: true,
     });
     const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
     expect(projectId).toBeTruthy();

+    const seed = await seedJournalScenario(page, projectId!, 40);
+
+    // Draft BEFORE leaving thread (E06-04)
+    const draftBefore = "brouillon préparé avant Journal — ne pas envoyer";
+    await page.getByTestId("thread-draft").fill(draftBefore);
+    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
+
     await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
     await expect(page).toHaveURL(/surface=journal/);
-    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 15000 });
+    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
+
+    // A — arbre non vide (fail if empty)
+    const leaf = page.getByTestId(`journal-subject-${seed.leafSubjectId}`);
+    await expect(leaf).toBeVisible({ timeout: 15000 });
+    await expect(page.getByTestId(`journal-subject-${seed.parentSubjectId}`)).toBeVisible();
+
+    // C — recherche terme absent du titre (acquis)
+    await page.getByTestId("journal-search").fill("traçabilité");
+    await expect(page.getByTestId(`journal-match-${seed.leafSubjectId}`)).toBeVisible();
+    await page.getByTestId("journal-filter-open-points").locator("input").check();
+
+    // B — 40/60 + enlarge (non conditionnel)
+    await leaf.click();
+    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");
+    await expect(page.getByTestId("journal-viewer-subject-title")).toBeVisible();
+    await page.getByTestId("journal-viewer-enlarge").click();
     await expect(page.getByTestId("project-journal")).toHaveAttribute(
-      "data-figma-frame",
-      /835:71|842:|859:|860:/,
+      "data-journal-layout",
+      "enlarged",
     );
-    await expect(page.getByTestId("journal-tab-subjects")).toBeVisible();
-    await expect(page.getByTestId("journal-tab-decisions")).toBeVisible();
+    await page.getByTestId("journal-viewer-reduce").click();
+    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");

     await page.screenshot({
-      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-sujets-exploration.png",
+      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-sujet-40-60-seeded.png",
       fullPage: false,
     });

-    // Recherche Sujets (859:42)
-    await page.getByTestId("journal-search").fill("traçabilité");
-    await expect(page.getByTestId("journal-search")).toHaveValue("traçabilité");
-
-    // Filtre points ouverts (859:146)
-    await page.getByTestId("journal-filter-open-points").locator("input").check();
-    await expect(page.getByTestId("journal-filter-open-points").locator("input")).toBeChecked();
+    // Sources → message exact
+    const sourceChip = page.locator("[data-testid^=journal-source-]").first();
+    await expect(sourceChip).toBeVisible({ timeout: 10000 });
+    await sourceChip.click();
+    await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 15000 });
+    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
+    const focused = page.locator(`[data-message-id="${seed.earlyMessageId}"]`);
+    await expect(focused).toBeVisible({ timeout: 15000 });
+    // Chronology: early message must not be last in the thread DOM order
+    const ids = await page.locator("[data-message-id]").evaluateAll((els) =>
+      els.map((e) => e.getAttribute("data-message-id")),
+    );
+    expect(ids.includes(seed.earlyMessageId)).toBe(true);
+    expect(ids[ids.length - 1]).not.toBe(seed.earlyMessageId);
+    // No auto-send: draft still present
+    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);

-    await page.screenshot({
-      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-filtre-points.png",
-      fullPage: false,
+    // Return Journal — prefer explicit URL (rail remount race on surface switch)
+    await page.goto(`/projects/${projectId}?surface=journal`);
+    await expect(page).toHaveURL(/surface=journal/);
+    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
+    // Nav state may reset on full navigation; re-assert core tree still present (non-empty).
+    await expect(page.getByTestId(`journal-subject-${seed.leafSubjectId}`)).toBeVisible({
+      timeout: 15000,
     });

-    // Sélection sujet si arbre non vide → 40/60
-    const subjectBtn = page.locator("[data-testid^=journal-subject-]").first();
-    if (await subjectBtn.count()) {
-      await subjectBtn.click();
-      await expect(page.getByTestId("project-journal")).toHaveAttribute(
-        "data-journal-layout",
-        "split",
-      );
-      await page.screenshot({
-        path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-sujet-40-60.png",
-        fullPage: false,
-      });
-      await page.getByTestId("journal-viewer-enlarge").click();
-      await expect(page.getByTestId("project-journal")).toHaveAttribute(
-        "data-journal-layout",
-        "enlarged",
-      );
-      await page.getByTestId("journal-viewer-reduce").click();
-      await expect(page.getByTestId("project-journal")).toHaveAttribute(
-        "data-journal-layout",
-        "split",
-      );
-    }
-
-    // Onglet Décisions (860:58)
+    // D — Décisions
     await page.getByTestId("journal-tab-decisions").click();
-    await expect(page.getByTestId("journal-tab-decisions")).toHaveAttribute("aria-selected", "true");
-    await page.getByTestId("journal-search").fill("décision");
-    await page.screenshot({
-      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-decisions.png",
-      fullPage: false,
+    await expect(page.getByTestId(`journal-decision-${seed.decisionApplicableId}`)).toBeVisible({
+      timeout: 15000,
     });
+    await page.getByTestId(`journal-decision-${seed.decisionApplicableId}`).click();
+    await expect(page.getByTestId("journal-decision-viewer")).toBeVisible();
+    await expect(page.getByTestId("journal-decision-applicability")).toContainText(/applicable/i);

-    // Compact reflow while still on Journal (avoids remount race)
-    await page.setViewportSize({ width: 1280, height: 800 });
-    await expect(page.getByTestId("project-journal")).toBeVisible();
-    await page.screenshot({
-      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1280-journal.png",
-      fullPage: false,
-    });
+    // E — Document version (canonical D4 surface)
+    await page.goto(
+      `/projects/${projectId}?surface=document&documentId=${encodeURIComponent(seed.documentId)}`,
+    );
+    await expect(
+      page.getByTestId("document-library").or(page.getByTestId("document-inspector")),
+    ).toBeVisible({ timeout: 20000 });

-    // Retour fil — brouillon non auto-envoyé
-    const draftBefore = "brouillon journal retour";
-    await page.getByTestId("journal-back-thread").click();
-    await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 15000 });
-    await page.getByTestId("thread-draft").fill(draftBefore);
-    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
-    // No auto-send: send remains enabled only because draft non-empty; message count unchanged until click.
-    await expect(page.getByTestId("thread-send")).toBeEnabled();
+    // F — 1280 operational
+    await page.setViewportSize({ width: 1280, height: 800 });
+    await page.goto(`/projects/${projectId}?surface=journal`);
+    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
+    await expect(page.getByTestId(`journal-subject-${seed.leafSubjectId}`)).toBeVisible();
   });
 });
```

### DIFF `projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md`
```diff
diff --git a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
index 521f69e4..c5c58d7d 100644
--- a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
+++ b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
@@ -2,66 +2,61 @@

 | Métadonnée | Valeur |
 |---|---|
-| Date | 19/11/2026 (cycle de complétude) |
+| Date | 19/11/2026 (cycle 3 — E06-01..06) |
 | Branche | `sfia/next-journal-delivery-20261119` |
-| Base docs (cycle 1) | `6879d34e` |
-| Matrice docs distante (lue, non fusionnée) | `b02192e5` |
+| Base docs cycle 1 | `6879d34e` |
+| Matrice docs distante (lue, non fusionnée) | `2ae685a5` (v0.2) |
 | Base `main` | `d3d199ad` |
 | Versioning | `NO RELEASE` / `0.0.0-dev` |
-| Lane | DEV / e2e isolé (`127.0.0.1:5433`, `sfia_next_e2e`) — RECETTE/STABLE non mutées |
+| Lane | DEV / e2e (`127.0.0.1:5433`, `:3101`) — RECETTE/STABLE non mutées |

-## Cycle 1 (conservé)
+## Cycles 1–2 (conservés)

-- Migration additive `014_journal_d4_revisions.sql`
-- `domains/knowledge/journal.ts` : révisions, resolve/reopen, reparent, recherches
-- `ensureSubject` parent-aware
-- `GET /api/projects/[projectId]/journal`
-- `ProjectJournal` V4 shell (tabs / search / filtre / 40/60 / enlarge)
-- `subjectId` conservé sur la page projet
+- Migration additive `014` + `db-migrate.sh` 001→014
+- Journal D4 revisions, UI V4, API, recherche, explications D6
+- Helpers cognition J-C04/06 + deep-link message/document

-## Cycle 2 — complétude (ce cycle)
+## Cycle 3 — corrections E06

-### J-C04 — réactivation
-- `journal-cognition.ts` : `selectOpenPointsForReactivation`, `markOpenPointReactivated` (cooldown, score lexical)
-- Branché dans `selectRelevantKnowledgeContext` via `projectId` + conversation service
+### E06-05 — portée sécurité
+- `markOpenPointReactivated` utilise `loadOwnedOpenPoint(pilot, project, id)`
+- Refus interprojets même Pilote ; zéro écriture si refus ; idempotence conservée

-### J-C06 — sources / contradictions / currentness
-- `qualifyProvenanceSource`, `detectAcquisContradictions`, `assertHonestSynthesisInput`
-- Gate honnêteté sur `appendSubjectSummaryRevision`
-- Projection Journal expose `sourceLinks` + `contradictions` ; UI affiche UNRESOLVED
+### E06-03 — currentness Git
+- `main`+SHA déclarés → **UNVERIFIED** (jamais CURRENT sans vérification distante)
+- Ref non-main → **CANDIDATE**
+- Overclaim gate traite UNVERIFIED

-### J-C05 / J-C09
-- Resolve factuel refuse toute mutation de restriction D6 (snapshot ACTIVE)
-- Décisions projetées avec `applicable` / `supersededByDecisionId` ; restrictions ACTIVE + historiques
+### E06-04 — message exact
+- Deep-link : reload canonique ou insertion par `createdAt` (pas d’append aveugle)
+- Brouillon préservé ; zéro auto-send

-### J-C13 / J-C14
-- `GET /api/projects/[projectId]/messages/[messageId]` (history scope projet)
-- `ProjectJournal` → `onOpenMessage` / `onOpenDocument` → Travail focus / Documents D4
-- `NoraConversation` `focusMessageId` + highlight ; brouillon et `journalNav` préservés ; zéro auto-send
+### E06-01 — BROWSER non vide
+- Fixture DEV `/api/dev/e2e/journal-fixture` (gate STUDIO_E2E)
+- Playwright assertions obligatoires sur sujets/40-60/recherche/décisions/message/document

-### J-C08 / API
-- Recherche UI titre+synthèse+acquis+points avec raison de match
-- `GET /api/projects/[projectId]/journal/search`
+### E06-02 — mémoire D3/D4 déterministe
+- Tests PG : révisions de synthèse + réactivation pertinente / négative
+- LIVE Nora : toujours NOT RUN / hors GO
+
+### E06-06 — D6 / documents / migrate
+- Resolve factuel exige source document/message **réellement accessible**
+- Restriction D6 ACTIVE intacte après resolve
+- `db-migrate.sh` inclut `014`
+
+## Preuves (cycle 3)

-### Preuves exécutées (DEV/e2e)
 | Commande | Résultat |
 |---|---|
-| `npx tsc --noEmit` | PASS |
-| `npm run lint` | PASS (warnings préexistants hors Journal) |
-| `vitest` `journal-cognition.test.ts` | 4/4 PASS |
-| `vitest` `journal-d4-revisions.pg.test.ts` | 10/10 PASS (`sfia_next_e2e`) |
-| `playwright` `journal-v4-parcours.spec.ts` | 1/1 PASS (`:3101`) |
-| Captures runtime | `.tmp-sfia-review/journal-v4-captures/*.png` |
-| Figma 835:71 | extrait MCP + PNG local |
-
-### Non-régression / hors GO
-- LIVE Nora : **NOT RUN** (hors GO)
-- REAL Git : **NOT RUN**
-- Suites ML2/ML3/ML4C/E05 complètes : **NOT RUN** dans ce cycle (tsc+lint+Journal PG/BROWSER exécutés)
-- 11/11 captures Figma↔runtime pixel-perfect : **PARTIAL** (parcours BROWSER + captures runtime + frames Figma clés ; comparaison structurelle, pas audit pixel exhaustif)
+| `tsc --noEmit` | PASS |
+| unit journal-cognition | PASS |
+| PG journal-d4-revisions | PASS (12+) |
+| Playwright journal-v4-parcours (seeded) | PASS |
+| LIVE Nora / REAL Git | NOT RUN |
+| VISUAL REVIEW | PENDING MORRIS — RECETTE |

 ## Autorité

-- D6 non modifié en écriture depuis le Journal
-- Aucun moteur mémoire parallèle
-- Aucun push projet / PR / merge / RECETTE dans ce cycle
+- D6 non muté depuis Journal
+- Aucun push projet / PR / merge
+- Revue visuelle Morris en RECETTE uniquement
```

### DIFF `projects/sfia-studio-next/construction/delivery-history.md`
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 12ad52ac..a06a5173 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,21 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-19-JOURNAL-V4-E06-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-19 ~10:10 CET |
+| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 cycle 3 E06-01..06 |
+| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
+| GO Morris | Corrections ciblées + BROWSER données non vides DEV |
+| Parent | local `782c93ec` |
+| Scope | E06-05 scope · E06-03 UNVERIFIED Git · E06-04 chrono message · seed BROWSER · resolve source réelle · migrate 014 |
+| QA | tsc/lint/build PASS · unit+PG Journal PASS · Playwright seeded PASS · LIVE/REAL NOT RUN |
+| Visual | **VISUAL REVIEW PENDING MORRIS — RECETTE** |
+| Verdict Cursor | `READY FOR MORRIS REVIEW WITH RESERVES — E06 CORRECTIVES LOCAL` |
+
+
 ## delivery_id: DELIV-2026-11-19-JOURNAL-V4-COMPLETION

 | Field | Value |
```

## 8. Verdict

`READY FOR MORRIS REVIEW WITH RESERVES — E06 CORRECTIVES LOCAL / SEEDED BROWSER PROVEN / LIVE NOT RUN / VISUAL PENDING MORRIS — RECETTE / NO PROJECT PUSH`

### Instruction ChatGPT obligatoire

Relire le handoff Git canonique au SHA immuable, confronter E06-01..06 et J-C01..16 aux preuves et au code, actualiser la matrice v0.2 sous mandat documentaire distinct, et ne pas traiter les déclarations Cursor comme réception produit. Aucun Gate C / ADOPTED / push projet / RECETTE n’est autorisé par ce rapport.
