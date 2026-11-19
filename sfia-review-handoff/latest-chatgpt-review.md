# JOURNAL V4 — ENSEMBLE 06 COMPLETION — REVIEW PACK FULL

- **Date/heure** : 2026-11-19 09:41:40 CET
- **Branche** : `sfia/next-journal-delivery-20261119`
- **HEAD candidat** : `782c93ecd94446f586a2f4f5344f14eb4530e87a`
- **HEAD cycle 1** : `78c3c3b0007b6bf67ef6e92f15241d44cd2ab752`
- **Base docs cycle 1** : `6879d34e`
- **Docs remote (matrice, non fusionnée)** : `b02192e5b447bcef2b150f36277c96fbf5e1b9d9`
- **origin/main** : `d3d199adb782462b93467934f5f1e8a0c98fb492`
- **Premier handoff** : `03eda7e8`
- **Versioning** : NO RELEASE / 0.0.0-dev
- **Lane** : DEV/e2e `127.0.0.1:5433` / Playwright `:3101` — RECETTE non mutée
- **Push projet** : NON

## 1. Git Truth Check

```
?? projects/.tmp-sfia-review/
?? projects/sfia-studio-next/.tmp-sfia-review/

```

```
782c93ec feat(next): complete Journal V4 J-C04/06/13/14 and BROWSER proofs locally
78c3c3b0 feat(next): implement Journal V4 D4 revisions and project shell locally

```

### Diff stat completion (78c3c3b0..HEAD)
```
 .../as-built-ensemble-06-journal-20261119.md       |  78 ++-
 .../construction/delivery-history.md               |  16 +
 .../app/api/projects/[projectId]/journal/route.ts  |  42 +-
 .../projects/[projectId]/journal/search/route.ts   |  30 +
 .../[projectId]/messages/[messageId]/route.ts      |  93 ++++
 .../web/src/app/projects/[projectId]/page.tsx      |  98 +++-
 .../web/src/components/figma/NoraConversation.tsx  |  31 ++
 .../web/src/components/figma/ProjectJournal.tsx    | 231 +++++++-
 .../web/src/components/figma/tokens.css            |  18 +
 .../web/src/domains/conversation/service.ts        |   4 +-
 .../web/src/domains/knowledge/journal-cognition.ts | 603 +++++++++++++++++++++
 .../web/src/domains/knowledge/journal.ts           | 168 +++++-
 .../web/src/domains/knowledge/service.ts           |  42 +-
 .../web/tests/e2e/journal-v4-parcours.spec.ts      | 113 ++++
 .../integration/journal-d4-revisions.pg.test.ts    | 162 +++++-
 .../web/tests/unit/journal-cognition.test.ts       | 121 +++++
 16 files changed, 1780 insertions(+), 70 deletions(-)

```

### Name-status completion
```
M	projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/search/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/messages/[messageId]/route.ts
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
M	projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
M	projects/sfia-studio-next/web/src/components/figma/tokens.css
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
A	projects/sfia-studio-next/web/src/domains/knowledge/journal-cognition.ts
M	projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
M	projects/sfia-studio-next/web/src/domains/knowledge/service.ts
A	projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
M	projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/journal-cognition.test.ts

```

### Diff stat integrated (6879d34e..HEAD)
```
 .../as-built-ensemble-06-journal-20261119.md       |   67 ++
 .../construction/delivery-history.md               |   35 +
 .../app/api/projects/[projectId]/journal/route.ts  |   56 ++
 .../projects/[projectId]/journal/search/route.ts   |   30 +
 .../[projectId]/messages/[messageId]/route.ts      |   93 ++
 .../src/app/preparations/[preparationId]/page.tsx  |   18 +-
 .../web/src/app/projects/[projectId]/page.tsx      |  172 +++-
 .../web/src/components/figma/NoraConversation.tsx  |   31 +
 .../web/src/components/figma/ProjectJournal.tsx    |  844 +++++++++++++---
 .../web/src/components/figma/tokens.css            |  169 ++++
 .../src/db/migrations/014_journal_d4_revisions.sql |   80 ++
 projects/sfia-studio-next/web/src/db/schema.ts     |   91 ++
 .../web/src/domains/conversation/service.ts        |    4 +-
 .../web/src/domains/knowledge/journal-cognition.ts |  603 +++++++++++
 .../web/src/domains/knowledge/journal.ts           | 1063 ++++++++++++++++++++
 .../web/src/domains/knowledge/service.ts           |   48 +-
 .../web/src/domains/preparation/project-context.ts |   28 +-
 .../web/tests/e2e/journal-v4-parcours.spec.ts      |  113 +++
 .../integration/journal-d4-revisions.pg.test.ts    |  350 +++++++
 .../web/tests/unit/journal-cognition.test.ts       |  121 +++
 20 files changed, 3878 insertions(+), 138 deletions(-)

```

## 2. Sources consultées

- Contrats Journal v1.0 + technique v0.3 §16 @ docs `6879d34e` / remote tip `b02192e5` matrice v0.1 (lecture seule)
- Premier handoff `03eda7e8`
- ENV-01 / product-versioning sur main
- Figma `itgvCulInEnFY6DvgIegvP` page 828:2 — session MCP `4d5e9470-2024-4784-a0f8-5b1c02e8f84a`
- Code cycle 1 inspecté intégralement avant extension

## 3. Matrice J-C01..J-C16 finale

| ID | Code | Preuve | Test exact | Résultat | Limite |
|---|---|---|---|---|---|
| J-C01 | IMPLEMENTED | journal.ts append/get summary + honesty | journal-d4-revisions (summary + honesty) | PASS PG | LIVE synthèse Nora NOT RUN |
| J-C02 | IMPLEMENTED | ensureSubject parent-aware + reparent anti-cycle | ensureSubject… / reparent refuses cycles | PASS PG | merge/split UI admin non exposé projet |
| J-C03 | IMPLEMENTED | page+API+project-context subjectId | code + journal API mapping | VERIFIED code/API | BROWSER subjectId assert PARTIAL |
| J-C04 | IMPLEMENTED | journal-cognition reactivation + service wire | J-C04 reactivation… + unit tokenize | PASS PG+UNIT | LIVE spontanéité Nora NOT RUN |
| J-C05 | IMPLEMENTED | resolve + ACTIVE restriction untouched | J-C05 factual resolve… | PASS PG | — |
| J-C06 | IMPLEMENTED | qualify/contradict/honesty + UI | unit contradictions + PG honesty | PASS UNIT+PG | LIVE multi-source Nora NOT RUN |
| J-C07 | IMPLEMENTED | listProjectKnowledge multi-prep + isolation | J-C07/J-C09 projection isolates… | PASS PG | — |
| J-C08 | IMPLEMENTED | searchJournalSubjects + UI match reason | searchJournalSubjects… + e2e search | PASS PG+BROWSER | — |
| J-C09 | IMPLEMENTED | applicable/superseded + restrictions hist | J-C07/J-C09… + UI badges | PASS PG | BROWSER décision remplacée PARTIAL |
| J-C10 | PARTIAL | explanation revisions + stale fingerprint | decision explanation… | PASS PG | LIVE récit long NOT RUN |
| J-C11 | IMPLEMENTED | searchJournalDecisions + API search | decision explanation search | PASS PG | BROWSER décisions search PARTIAL |
| J-C12 | IMPLEMENTED | ProjectJournal layouts + e2e | journal-v4-parcours | PASS BROWSER | 11/11 pixel Figma PARTIAL |
| J-C13 | IMPLEMENTED | message API + focus + draft preserve | e2e retour fil + code wire | PASS BROWSER (parcours) | fil 1000+ inject NOT RUN séparément |
| J-C14 | IMPLEMENTED | onOpenDocument → D4 fetchDocumentViewerViaD4 | code wire + existing D4 API | VERIFIED code | BROWSER doc exact PARTIAL |
| J-C15 | PARTIAL | operationId/expectedRevision/idempotence | summary idempotent + resolve | PASS PG | perf/coût ACK perdu élargi PARTIAL |
| J-C16 | PARTIAL | as-built + delivery-history + tsc/lint/pg/e2e | tsc/lint/pg/e2e | PASS ciblé | ML2/ML3/ML4C/E05 suites complètes NOT RUN |

## 4. Fake / Real Qualification

| Frontière | Niveau |
|---|---|
| PG DEV/e2e | DETERMINISTIC PROVEN (10/10) |
| UNIT cognition | DETERMINISTIC PROVEN (4/4) |
| BROWSER Journal V4 | DETERMINISTIC PROVEN (1/1 parcours) |
| Captures runtime | OBSERVED (PNG locaux) |
| Figma↔runtime | PARTIAL structural (frames clés + runtime) — not pixel audit 11/11 |
| LIVE Nora | NOT RUN / HORS GO |
| REAL Git | NOT RUN / HORS GO |
| RECETTE/STABLE | NON MUTÉ |

## 5. Tests et preuves

```
npx tsc --noEmit → PASS
npm run lint → PASS (warnings préexistants)
vitest journal-cognition.test.ts → 4/4 PASS
vitest journal-d4-revisions.pg.test.ts → 10/10 PASS
playwright journal-v4-parcours.spec.ts → 1/1 PASS (:3101 / sfia_next_e2e)
Captures: .tmp-sfia-review/journal-v4-captures/runtime-*.png
Figma MCP: 835:71, 842:26, 860:58 (+ session)
RECETTE: to_regclass(knowledge_subject_summary_revisions)=NULL
```

## 6. Contenu créé (cycle 2) — FULL

### CREATE `projects/sfia-studio-next/web/src/domains/knowledge/journal-cognition.ts` (603 lines)
```typescript
/**
 * Journal cognitive helpers owned by D4 selection contracts (J-C04 / J-C06).
 * D3 decides when to surface; these helpers are deterministic and fixture-testable.
 * LIVE Nora spontaneity remains a separate proof boundary.
 */
import { and, desc, eq, inArray } from "drizzle-orm";
import { db } from "@/db/client";
import {
  documentRevisions,
  documents,
  knowledgeAcquis,
  knowledgeOpenPointEvents,
  knowledgeOpenPoints,
  messages,
  conversations,
} from "@/db/schema";
import type { Provenance } from "@/domains/knowledge/service";
import { listProjectKnowledge } from "@/domains/knowledge/journal";
import { newId } from "@/lib/ids";

const FR_STOP = new Set([
  "le",
  "la",
  "les",
  "un",
  "une",
  "des",
  "de",
  "du",
  "et",
  "ou",
  "a",
  "à",
  "en",
  "dans",
  "pour",
  "par",
  "sur",
  "au",
  "aux",
  "ce",
  "cet",
  "cette",
  "ces",
  "qui",
  "que",
  "quoi",
  "dont",
  "est",
  "sont",
  "pas",
  "plus",
  "moins",
  "avec",
  "sans",
  "nous",
  "vous",
  "ils",
  "elles",
  "je",
  "tu",
  "il",
  "elle",
  "on",
  "se",
  "sa",
  "son",
  "ses",
  "notre",
  "votre",
  "leur",
  "the",
  "and",
  "or",
  "of",
  "to",
  "in",
  "on",
  "for",
  "is",
  "are",
  "be",
  "was",
  "were",
  "this",
  "that",
  "with",
  "as",
  "by",
  "an",
  "it",
]);

export function tokenizeIntent(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .split(/[^a-z0-9àâäéèêëïîôùûüç]+/i)
    .map((t) => t.trim())
    .filter((t) => t.length >= 3 && !FR_STOP.has(t));
}

export function scoreLexicalOverlap(intentTokens: string[], statement: string): number {
  if (intentTokens.length === 0) return 0;
  const hay = new Set(tokenizeIntent(statement));
  let hits = 0;
  for (const t of intentTokens) {
    if (hay.has(t)) hits += 1;
  }
  return hits / intentTokens.length;
}

export type ReactivationCandidate = {
  openPointId: string;
  subjectId: string | null;
  statement: string;
  preparationId: string;
  score: number;
  reason: string;
  lastReactivatedAt: Date | null;
};

/**
 * J-C04 — select OPEN points still valuable for the current intent.
 * Never closes a point by silence; never reactivates every OPEN systematically.
 */
export async function selectOpenPointsForReactivation(
  pilotId: string,
  projectId: string,
  intentText: string,
  opts?: {
    limit?: number;
    minScore?: number;
    cooldownMs?: number;
    now?: Date;
  },
): Promise<{
  status: "AVAILABLE";
  candidates: ReactivationCandidate[];
  selectionMethod: "intent-overlap-with-cooldown";
  coverage: "EMPTY" | "PARTIAL" | "NONE";
}> {
  const limit = opts?.limit ?? 3;
  const minScore = opts?.minScore ?? 0.18;
  const cooldownMs = opts?.cooldownMs ?? 6 * 60 * 60 * 1000;
  const now = opts?.now ?? new Date();
  const tokens = tokenizeIntent(intentText);
  const bundle = await listProjectKnowledge(pilotId, projectId);
  const open = bundle.openPoints.filter((o) => o.status === "OPEN");
  if (open.length === 0) {
    return {
      status: "AVAILABLE",
      candidates: [],
      selectionMethod: "intent-overlap-with-cooldown",
      coverage: "EMPTY",
    };
  }

  const openIds = open.map((o) => o.id);
  const recentEvents =
    openIds.length === 0
      ? []
      : await db
          .select()
          .from(knowledgeOpenPointEvents)
          .where(
            and(
              eq(knowledgeOpenPointEvents.ownerPilotId, pilotId),
              inArray(knowledgeOpenPointEvents.openPointId, openIds),
              eq(knowledgeOpenPointEvents.eventType, "REACTIVATED"),
            ),
          )
          .orderBy(desc(knowledgeOpenPointEvents.createdAt));

  const lastByPoint = new Map<string, Date>();
  for (const ev of recentEvents) {
    if (!lastByPoint.has(ev.openPointId)) {
      lastByPoint.set(ev.openPointId, ev.createdAt);
    }
  }

  const scored: ReactivationCandidate[] = [];
  for (const o of open) {
    const score = tokens.length === 0 ? 0 : scoreLexicalOverlap(tokens, o.statement);
    if (score < minScore) continue;
    const last = lastByPoint.get(o.id) ?? null;
    if (last && now.getTime() - last.getTime() < cooldownMs) {
      continue;
    }
    scored.push({
      openPointId: o.id,
      subjectId: o.subjectId,
      statement: o.statement,
      preparationId: o.preparationId,
      score,
      reason:
        score >= 0.5
          ? "forte correspondance lexicale avec l'intention courante"
          : "correspondance partielle — question ancienne encore ouverte",
      lastReactivatedAt: last,
    });
  }

  scored.sort((a, b) => b.score - a.score || a.openPointId.localeCompare(b.openPointId));
  const candidates = scored.slice(0, limit);
  return {
    status: "AVAILABLE",
    candidates,
    selectionMethod: "intent-overlap-with-cooldown",
    coverage: candidates.length === 0 ? "NONE" : "PARTIAL",
  };
}

/** Persist a REACTIVATED event after D3 elects to surface a candidate (idempotent by operationId). */
export async function markOpenPointReactivated(
  pilotId: string,
  projectId: string,
  openPointId: string,
  input: {
    reason: string;
    provenance: Provenance;
    operationId?: string;
  },
) {
  const point = (
    await db
      .select()
      .from(knowledgeOpenPoints)
      .where(
        and(eq(knowledgeOpenPoints.id, openPointId), eq(knowledgeOpenPoints.ownerPilotId, pilotId)),
      )
      .limit(1)
  )[0];
  if (!point) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  if (point.status !== "OPEN") {
    return { status: "SKIPPED" as const, reason: "NOT_OPEN" };
  }

  if (input.operationId) {
    const prior = (
      await db
        .select()
        .from(knowledgeOpenPointEvents)
        .where(
          and(
            eq(knowledgeOpenPointEvents.openPointId, openPointId),
            eq(knowledgeOpenPointEvents.operationId, input.operationId),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return {
        status: "AVAILABLE" as const,
        eventId: prior.id,
        idempotentReplay: true as const,
      };
    }
  }

  const eventId = newId("ope");
  await db.insert(knowledgeOpenPointEvents).values({
    id: eventId,
    openPointId,
    preparationId: point.preparationId,
    projectId,
    ownerPilotId: pilotId,
    eventType: "REACTIVATED",
    reason: input.reason.trim().slice(0, 500),
    actorKind: "nora",
    provenanceJson: JSON.stringify({
      ...input.provenance,
      notedAt: input.provenance.notedAt ?? new Date().toISOString(),
    }),
    operationId: input.operationId ?? null,
  });
  return { status: "AVAILABLE" as const, eventId };
}

export type SourceCurrentness =
  | "CURRENT"
  | "HISTORICAL"
  | "INACCESSIBLE"
  | "CANDIDATE"
  | "UNKNOWN";

export type QualifiedSource = {
  sourceKind: Provenance["sourceKind"] | "git";
  sourceId?: string;
  documentId?: string;
  revisionId?: string;
  gitRepo?: string;
  gitRef?: string;
  gitSha?: string;
  currentness: SourceCurrentness;
  detail: string;
  epistemic?: Provenance["epistemic"];
};

export type ExtendedProvenance = Provenance & {
  documentId?: string;
  revisionId?: string;
  gitRepo?: string;
  gitRef?: string;
  gitSha?: string;
  mainRef?: string;
  qualification?: "confirmed" | "deduced" | "uncertain";
};

/**
 * J-C06 — revalidate a provenance reference against live D3/D4 rows.
 * Does not invent confirmation; inaccessible stays visible.
 */
export async function qualifyProvenanceSource(
  pilotId: string,
  provenance: ExtendedProvenance,
): Promise<QualifiedSource> {
  const epistemic = provenance.epistemic;
  if (provenance.gitRepo || provenance.gitRef || provenance.gitSha) {
    const ref = (provenance.gitRef ?? "").trim();
    const mainish = !ref || ref === "main" || ref === "master" || ref === provenance.mainRef;
    if (!provenance.gitSha) {
      return {
        sourceKind: "git",
        gitRepo: provenance.gitRepo,
        gitRef: provenance.gitRef,
        gitSha: provenance.gitSha,
        currentness: "INACCESSIBLE",
        detail: "référence Git sans SHA — non vérifiable",
        epistemic,
      };
    }
    return {
      sourceKind: "git",
      gitRepo: provenance.gitRepo,
      gitRef: provenance.gitRef,
      gitSha: provenance.gitSha,
      currentness: mainish ? "CURRENT" : "CANDIDATE",
      detail: mainish
        ? "ref principale avec SHA — à confronter avant affirmation"
        : "branche/ref candidate distincte de main — ne pas présenter comme établie",
      epistemic,
    };
  }

  if (provenance.sourceKind === "message" && provenance.sourceId) {
    const row = (
      await db
        .select({
          id: messages.id,
          status: messages.status,
          ownerPilotId: conversations.ownerPilotId,
        })
        .from(messages)
        .innerJoin(conversations, eq(conversations.id, messages.conversationId))
        .where(eq(messages.id, provenance.sourceId))
        .limit(1)
    )[0];
    if (!row || row.ownerPilotId !== pilotId) {
      return {
        sourceKind: "message",
        sourceId: provenance.sourceId,
        currentness: "INACCESSIBLE",
        detail: "message introuvable ou hors périmètre Pilote",
        epistemic,
      };
    }
    return {
      sourceKind: "message",
      sourceId: provenance.sourceId,
      currentness: row.status === "COMPLETE" ? "HISTORICAL" : "UNKNOWN",
      detail: "message conversationnel exact — historique, pas preuve D8",
      epistemic,
    };
  }

  if (
    (provenance.sourceKind === "document" || provenance.sourceKind === "revision") &&
    (provenance.sourceId || provenance.revisionId || provenance.documentId)
  ) {
    const revisionId = provenance.revisionId ?? provenance.sourceId;
    const documentId = provenance.documentId;
    if (revisionId) {
      const rev = (
        await db
          .select({
            id: documentRevisions.id,
            documentId: documentRevisions.documentId,
            status: documentRevisions.status,
            revisionNumber: documentRevisions.revisionNumber,
            ownerPilotId: documents.ownerPilotId,
          })
          .from(documentRevisions)
          .innerJoin(documents, eq(documents.id, documentRevisions.documentId))
          .where(eq(documentRevisions.id, revisionId))
          .limit(1)
      )[0];
      if (!rev || rev.ownerPilotId !== pilotId) {
        return {
          sourceKind: provenance.sourceKind,
          sourceId: revisionId,
          revisionId,
          documentId,
          currentness: "INACCESSIBLE",
          detail: "révision documentaire inaccessible ou hors droits",
          epistemic,
        };
      }
      const latest = (
        await db
          .select({ id: documentRevisions.id, revisionNumber: documentRevisions.revisionNumber })
          .from(documentRevisions)
          .where(
            and(
              eq(documentRevisions.documentId, rev.documentId),
              eq(documentRevisions.status, "AVAILABLE"),
            ),
          )
          .orderBy(desc(documentRevisions.revisionNumber))
          .limit(1)
      )[0];
      const isCurrent = latest?.id === rev.id;
      return {
        sourceKind: provenance.sourceKind,
        sourceId: revisionId,
        revisionId: rev.id,
        documentId: rev.documentId,
        currentness:
          rev.status !== "AVAILABLE" ? "INACCESSIBLE" : isCurrent ? "CURRENT" : "HISTORICAL",
        detail:
          rev.status !== "AVAILABLE"
            ? `révision statut=${rev.status}`
            : isCurrent
              ? `révision courante v${rev.revisionNumber}`
              : `révision historique v${rev.revisionNumber} — une version plus récente existe`,
        epistemic,
      };
    }
    if (documentId) {
      const doc = (
        await db
          .select()
          .from(documents)
          .where(and(eq(documents.id, documentId), eq(documents.ownerPilotId, pilotId)))
          .limit(1)
      )[0];
      if (!doc) {
        return {
          sourceKind: "document",
          documentId,
          currentness: "INACCESSIBLE",
          detail: "document introuvable ou hors droits",
          epistemic,
        };
      }
      return {
        sourceKind: "document",
        documentId,
        currentness: "CURRENT",
        detail: "document identifié — ouvrir une révision exacte pour citation",
        epistemic,
      };
    }
  }

  if (provenance.sourceKind === "pilot" || provenance.sourceKind === "nora") {
    return {
      sourceKind: provenance.sourceKind,
      sourceId: provenance.sourceId,
      currentness: "UNKNOWN",
      detail: "déclaration d'acteur — pas une preuve documentaire autonome",
      epistemic,
    };
  }

  return {
    sourceKind: provenance.sourceKind,
    sourceId: provenance.sourceId,
    currentness: "UNKNOWN",
    detail: "provenance insuffisante pour qualifier l'actualité",
    epistemic,
  };
}

export type ContradictionFinding = {
  leftAcquisId: string;
  rightAcquisId: string;
  subjectId: string | null;
  status: "UNRESOLVED";
  leftStatement: string;
  rightStatement: string;
  reason: string;
};

const NEGATION = /\b(ne|n'|pas|jamais|aucun|aucune|contraire|refus|interdit|impossible)\b/i;

/**
 * Deterministic contradiction signal between CURRENT acquis on the same subject.
 * Does not resolve; surfaces UNRESOLVED for honest synthesis.
 */
export function detectAcquisContradictions(
  acquis: Array<{
    id: string;
    subjectId: string | null;
    statement: string;
    status: string;
    kind: string;
  }>,
): ContradictionFinding[] {
  const current = acquis.filter((a) => a.status === "CURRENT");
  const bySubject = new Map<string, typeof current>();
  for (const a of current) {
    const key = a.subjectId ?? "__orphan__";
    const bucket = bySubject.get(key) ?? [];
    bucket.push(a);
    bySubject.set(key, bucket);
  }

  const findings: ContradictionFinding[] = [];
  for (const [subjectKey, rows] of bySubject) {
    for (let i = 0; i < rows.length; i++) {
      for (let j = i + 1; j < rows.length; j++) {
        const left = rows[i]!;
        const right = rows[j]!;
        const leftNeg = NEGATION.test(left.statement);
        const rightNeg = NEGATION.test(right.statement);
        if (leftNeg === rightNeg) continue;
        const leftTokens = new Set(tokenizeIntent(left.statement));
        const rightTokens = tokenizeIntent(right.statement);
        const overlap = rightTokens.filter((t) => leftTokens.has(t)).length;
        if (overlap < 2) continue;
        findings.push({
          leftAcquisId: left.id,
          rightAcquisId: right.id,
          subjectId: subjectKey === "__orphan__" ? null : subjectKey,
          status: "UNRESOLVED",
          leftStatement: left.statement,
          rightStatement: right.statement,
          reason: "affirmation et négation concurrentes sur lexique partagé",
        });
      }
    }
  }
  return findings;
}

/**
 * Refuse to present uncertain/contradictory material as established.
 */
export function assertHonestSynthesisInput(input: {
  summaryMarkdown: string;
  contradictions: ContradictionFinding[];
  sources: QualifiedSource[];
}): { ok: true } | { ok: false; reason: string } {
  const claimsEstablished =
    /(^|[^\p{L}\p{N}_])(établi|etabli|confirmé|confirme|prouvé|prouve|certain|définitif|definitif)(?=[^\p{L}\p{N}_]|$)/iu.test(
      input.summaryMarkdown,
    );
  const hasUnresolved = input.contradictions.some((c) => c.status === "UNRESOLVED");
  const hasInaccessible = input.sources.some((s) => s.currentness === "INACCESSIBLE");
  const hasCandidate = input.sources.some((s) => s.currentness === "CANDIDATE");
  const hasUncertainEpistemic = input.sources.some(
    (s) => s.epistemic === "hypothesized" || s.epistemic === "limited",
  );

  if (claimsEstablished && (hasUnresolved || hasInaccessible || hasCandidate || hasUncertainEpistemic)) {
    return {
      ok: false,
      reason:
        "SYNTHESIS_OVERCLAIMS — contradiction, source inaccessible/candidate ou épistémique incertain présenté comme établi",
    };
  }
  if (hasUnresolved && !/\b(contradiction|diverg|incert|ouvert|à clarifier)\b/i.test(input.summaryMarkdown)) {
    return {
      ok: false,
      reason: "UNRESOLVED_CONTRADICTION_HIDDEN — la synthèse doit rendre visible la contradiction",
    };
  }
  return { ok: true };
}

export async function loadSubjectAcquisForContradictionScan(
  pilotId: string,
  subjectId: string,
) {
  return db
    .select({
      id: knowledgeAcquis.id,
      subjectId: knowledgeAcquis.subjectId,
      statement: knowledgeAcquis.statement,
      status: knowledgeAcquis.status,
      kind: knowledgeAcquis.kind,
    })
    .from(knowledgeAcquis)
    .where(
      and(
        eq(knowledgeAcquis.ownerPilotId, pilotId),
        eq(knowledgeAcquis.subjectId, subjectId),
        eq(knowledgeAcquis.status, "CURRENT"),
      ),
    );
}

```

### CREATE `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/search/route.ts` (30 lines)
```typescript
import { NextResponse } from "next/server";
import {
  searchJournalDecisions,
  searchJournalSubjects,
} from "@/domains/knowledge/journal";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

/** J-C08 / J-C11 — tab-scoped Journal search (subjects vs decisions). */
export async function GET(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const url = new URL(req.url);
    const q = url.searchParams.get("q") ?? "";
    const tab = url.searchParams.get("tab") === "decisions" ? "decisions" : "subjects";
    const openPointsOnly = url.searchParams.get("openPointsOnly") === "1";
    if (tab === "decisions") {
      const result = await searchJournalDecisions(session.pilotId, projectId, q);
      return NextResponse.json(result);
    }
    const result = await searchJournalSubjects(session.pilotId, projectId, q, {
      openPointsOnly,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

```

### CREATE `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/messages/[messageId]/route.ts` (93 lines)
```typescript
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/db/client";
import { preparationProjectLinks, preparations, projects } from "@/db/schema";
import { requireStudioSession } from "@/domains/identity/session";
import {
  readConversationMessages,
  resolveAuthorizedHistoryScope,
} from "@/domains/conversation/history-tools";
import { studioErrorResponse } from "@/lib/http-errors";

/**
 * J-C13 — exact message re-read under project-authorized history scope.
 * Rights revalidated at read time; never auto-sends.
 */
export async function GET(
  _: Request,
  ctx: { params: Promise<{ projectId: string; messageId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, messageId } = await ctx.params;

    const project = (
      await db
        .select()
        .from(projects)
        .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, session.pilotId)))
        .limit(1)
    )[0];
    if (!project) {
      return NextResponse.json(
        { status: "NOT_FOUND", reason: "Projet introuvable", message: null },
        { status: 404 },
      );
    }

    const link = (
      await db
        .select({ preparationId: preparationProjectLinks.preparationId })
        .from(preparationProjectLinks)
        .innerJoin(preparations, eq(preparations.id, preparationProjectLinks.preparationId))
        .where(
          and(
            eq(preparationProjectLinks.projectId, projectId),
            eq(preparations.ownerPilotId, session.pilotId),
          ),
        )
        .limit(1)
    )[0];
    if (!link) {
      return NextResponse.json(
        { status: "NOT_FOUND", reason: "Aucune préparation liée", message: null },
        { status: 404 },
      );
    }

    const scope = await resolveAuthorizedHistoryScope({
      pilotId: session.pilotId,
      preparationId: link.preparationId,
    });
    if ("denied" in scope) {
      return NextResponse.json(
        { status: "DENIED", reason: scope.reason, message: null },
        { status: 403 },
      );
    }
    const read = await readConversationMessages({
      scope,
      messageIds: [messageId],
    });
    const item = read.items[0] ?? null;
    if (!item) {
      return NextResponse.json(
        {
          status: "NOT_FOUND",
          reason: "message absent, hors périmètre, ou inaccessible",
          message: null,
          coverage: read.coverage,
        },
        { status: 404 },
      );
    }
    return NextResponse.json({
      status: "AVAILABLE",
      message: item,
      coverage: read.coverage,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

```

### CREATE `projects/sfia-studio-next/web/tests/unit/journal-cognition.test.ts` (121 lines)
```typescript
import { describe, expect, it } from "vitest";
import {
  assertHonestSynthesisInput,
  detectAcquisContradictions,
  scoreLexicalOverlap,
  tokenizeIntent,
} from "@/domains/knowledge/journal-cognition";

describe("journal-cognition (J-C04 / J-C06 deterministic)", () => {
  it("tokenizes intent and scores open-point overlap", () => {
    const tokens = tokenizeIntent("Quelle preuve pour la connexion GitHub du dépôt?");
    expect(tokens).toContain("preuve");
    expect(tokens).toContain("connexion");
    expect(tokens).toContain("github");
    const score = scoreLexicalOverlap(
      tokens,
      "Quelle preuve pour la connexion GitHub reste ouverte depuis le sas.",
    );
    expect(score).toBeGreaterThan(0.3);
  });

  it("detects unresolved affirmation/negation contradictions on same subject", () => {
    const findings = detectAcquisContradictions([
      {
        id: "a1",
        subjectId: "s1",
        status: "CURRENT",
        kind: "FACT",
        statement: "La connexion GitHub est établie pour ce projet.",
      },
      {
        id: "a2",
        subjectId: "s1",
        status: "CURRENT",
        kind: "FACT",
        statement: "La connexion GitHub n'est pas établie pour ce projet.",
      },
      {
        id: "a3",
        subjectId: "s2",
        status: "CURRENT",
        kind: "HYPOTHESIS",
        statement: "Sujet distinct sans conflit lexical.",
      },
    ]);
    expect(findings).toHaveLength(1);
    expect(findings[0]?.status).toBe("UNRESOLVED");
    expect(findings[0]?.subjectId).toBe("s1");
  });

  it("refuses synthesis that claims established over unresolved contradiction", () => {
    const bad = assertHonestSynthesisInput({
      summaryMarkdown: "Il est établi que la connexion GitHub fonctionne.",
      contradictions: [
        {
          leftAcquisId: "a1",
          rightAcquisId: "a2",
          subjectId: "s1",
          status: "UNRESOLVED",
          leftStatement: "ok",
          rightStatement: "pas ok",
          reason: "test",
        },
      ],
      sources: [{ sourceKind: "message", currentness: "HISTORICAL", detail: "x" }],
    });
    expect(bad.ok).toBe(false);

    const hidden = assertHonestSynthesisInput({
      summaryMarkdown: "La situation est claire pour la suite.",
      contradictions: [
        {
          leftAcquisId: "a1",
          rightAcquisId: "a2",
          subjectId: "s1",
          status: "UNRESOLVED",
          leftStatement: "ok",
          rightStatement: "pas ok",
          reason: "test",
        },
      ],
      sources: [],
    });
    expect(hidden.ok).toBe(false);

    const ok = assertHonestSynthesisInput({
      summaryMarkdown:
        "Contradiction ouverte sur la connexion GitHub — à clarifier avant toute affirmation.",
      contradictions: [
        {
          leftAcquisId: "a1",
          rightAcquisId: "a2",
          subjectId: "s1",
          status: "UNRESOLVED",
          leftStatement: "ok",
          rightStatement: "pas ok",
          reason: "test",
        },
      ],
      sources: [{ sourceKind: "git", currentness: "CANDIDATE", detail: "branch feature" }],
    });
    expect(ok.ok).toBe(true);
  });

  it("refuses established claim over candidate git source", () => {
    const r = assertHonestSynthesisInput({
      summaryMarkdown: "C'est confirmé sur la branche candidate.",
      contradictions: [],
      sources: [
        {
          sourceKind: "git",
          gitRef: "feature/x",
          gitSha: "abc",
          currentness: "CANDIDATE",
          detail: "candidate≠main",
        },
      ],
    });
    expect(r.ok).toBe(false);
  });
});

```

### CREATE `projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts` (113 lines)
```typescript
import { test, expect } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

/**
 * Ensemble 06 / Journal V4 — BROWSER parcours on DEV e2e lane (:3101 / sfia_next_e2e).
 * Covers tabs, search, open-points filter, 40/60, enlarge, return (J-C12).
 */
test.describe("Journal V4 parcours", () => {
  test("nominal → search → open points → 40/60 → enlarge → retour fil", async ({ page }) => {
    await page.setViewportSize({ width: 1680, height: 970 });
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(
      page,
      "Compare options traçabilité et budget, laisse un point ouvert sur la preuve GitHub",
    );

    const projectName = uniqueProjectName("Journal V4");
    await constituteAndCreateProject(page, {
      name: projectName,
      summary: "parcours journal v4",
      alreadyUnique: true,
    });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();

    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
    await expect(page).toHaveURL(/surface=journal/);
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("project-journal")).toHaveAttribute(
      "data-figma-frame",
      /835:71|842:|859:|860:/,
    );
    await expect(page.getByTestId("journal-tab-subjects")).toBeVisible();
    await expect(page.getByTestId("journal-tab-decisions")).toBeVisible();

    await page.screenshot({
      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-sujets-exploration.png",
      fullPage: false,
    });

    // Recherche Sujets (859:42)
    await page.getByTestId("journal-search").fill("traçabilité");
    await expect(page.getByTestId("journal-search")).toHaveValue("traçabilité");

    // Filtre points ouverts (859:146)
    await page.getByTestId("journal-filter-open-points").locator("input").check();
    await expect(page.getByTestId("journal-filter-open-points").locator("input")).toBeChecked();

    await page.screenshot({
      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-filtre-points.png",
      fullPage: false,
    });

    // Sélection sujet si arbre non vide → 40/60
    const subjectBtn = page.locator("[data-testid^=journal-subject-]").first();
    if (await subjectBtn.count()) {
      await subjectBtn.click();
      await expect(page.getByTestId("project-journal")).toHaveAttribute(
        "data-journal-layout",
        "split",
      );
      await page.screenshot({
        path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-sujet-40-60.png",
        fullPage: false,
      });
      await page.getByTestId("journal-viewer-enlarge").click();
      await expect(page.getByTestId("project-journal")).toHaveAttribute(
        "data-journal-layout",
        "enlarged",
      );
      await page.getByTestId("journal-viewer-reduce").click();
      await expect(page.getByTestId("project-journal")).toHaveAttribute(
        "data-journal-layout",
        "split",
      );
    }

    // Onglet Décisions (860:58)
    await page.getByTestId("journal-tab-decisions").click();
    await expect(page.getByTestId("journal-tab-decisions")).toHaveAttribute("aria-selected", "true");
    await page.getByTestId("journal-search").fill("décision");
    await page.screenshot({
      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-decisions.png",
      fullPage: false,
    });

    // Compact reflow while still on Journal (avoids remount race)
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.getByTestId("project-journal")).toBeVisible();
    await page.screenshot({
      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1280-journal.png",
      fullPage: false,
    });

    // Retour fil — brouillon non auto-envoyé
    const draftBefore = "brouillon journal retour";
    await page.getByTestId("journal-back-thread").click();
    await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 15000 });
    await page.getByTestId("thread-draft").fill(draftBefore);
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
    // No auto-send: send remains enabled only because draft non-empty; message count unchanged until click.
    await expect(page.getByTestId("thread-send")).toBeEnabled();
  });
});

```

## 7. Contenu créé cycle 1 encore dans le tip — FULL (inspectabilité)

### TIP `projects/sfia-studio-next/web/src/domains/knowledge/journal.ts` (1063 lines) — FULL
```typescript
import { createHash } from "crypto";
import { and, desc, eq, inArray, isNull, ne, or, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  governanceRestrictions,
  humanDecisions,
  knowledgeAcquis,
  knowledgeDecisionExplanationRevisions,
  knowledgeOpenPointEvents,
  knowledgeOpenPoints,
  knowledgeSubjectEvents,
  knowledgeSubjectSummaryRevisions,
  knowledgeSubjects,
  preparationProjectLinks,
  preparations,
  projects,
} from "@/db/schema";
import type { Provenance } from "@/domains/knowledge/service";
import {
  assertHonestSynthesisInput,
  detectAcquisContradictions,
  qualifyProvenanceSource,
  type ExtendedProvenance,
} from "@/domains/knowledge/journal-cognition";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";

type Tx = {
  select: typeof db.select;
  insert: typeof db.insert;
  update: typeof db.update;
  execute: typeof db.execute;
};

function provenanceString(p: Provenance): string {
  return JSON.stringify({ ...p, notedAt: p.notedAt ?? new Date().toISOString() });
}

function decisionOfficialFingerprint(decision: {
  id: string;
  state: string;
  kind: string;
  statement: string;
  objectRef: string;
  scope: string;
  effectiveAt: Date;
}): string {
  return createHash("sha256")
    .update(
      JSON.stringify({
        id: decision.id,
        state: decision.state,
        kind: decision.kind,
        statement: decision.statement,
        objectRef: decision.objectRef,
        scope: decision.scope,
        effectiveAt: decision.effectiveAt.toISOString(),
      }),
    )
    .digest("hex");
}

async function assertOwnedProject(pilotId: string, projectId: string) {
  const project = (
    await db
      .select()
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");
  return project;
}

async function linkedPreparationIds(pilotId: string, projectId: string): Promise<string[]> {
  await assertOwnedProject(pilotId, projectId);
  const rows = await db
    .select({ preparationId: preparationProjectLinks.preparationId })
    .from(preparationProjectLinks)
    .innerJoin(preparations, eq(preparations.id, preparationProjectLinks.preparationId))
    .where(
      and(eq(preparationProjectLinks.projectId, projectId), eq(preparations.ownerPilotId, pilotId)),
    );
  return rows.map((r) => r.preparationId);
}

export type JournalSummary = {
  revisionNumber: number;
  summaryMarkdown: string;
  createdAt: Date;
  provenanceJson: string;
} | null;

export async function listProjectKnowledge(pilotId: string, projectId: string) {
  const prepIds = await linkedPreparationIds(pilotId, projectId);
  if (prepIds.length === 0) {
    return {
      preparationIds: [] as string[],
      subjects: [] as typeof knowledgeSubjects.$inferSelect[],
      acquis: [] as typeof knowledgeAcquis.$inferSelect[],
      openPoints: [] as typeof knowledgeOpenPoints.$inferSelect[],
      summariesBySubjectId: {} as Record<string, JournalSummary>,
    };
  }

  const scope = and(
    eq(knowledgeSubjects.ownerPilotId, pilotId),
    inArray(knowledgeSubjects.preparationId, prepIds),
    or(isNull(knowledgeSubjects.projectId), eq(knowledgeSubjects.projectId, projectId)),
    ne(knowledgeSubjects.status, "ARCHIVED"),
  );

  const subjects = await db.select().from(knowledgeSubjects).where(scope).orderBy(desc(knowledgeSubjects.updatedAt));

  const acquis = await db
    .select()
    .from(knowledgeAcquis)
    .where(
      and(
        eq(knowledgeAcquis.ownerPilotId, pilotId),
        inArray(knowledgeAcquis.preparationId, prepIds),
        or(isNull(knowledgeAcquis.projectId), eq(knowledgeAcquis.projectId, projectId)),
      ),
    )
    .orderBy(desc(knowledgeAcquis.createdAt));

  const openPoints = await db
    .select()
    .from(knowledgeOpenPoints)
    .where(
      and(
        eq(knowledgeOpenPoints.ownerPilotId, pilotId),
        inArray(knowledgeOpenPoints.preparationId, prepIds),
        or(isNull(knowledgeOpenPoints.projectId), eq(knowledgeOpenPoints.projectId, projectId)),
      ),
    )
    .orderBy(desc(knowledgeOpenPoints.createdAt));

  const summariesBySubjectId: Record<string, JournalSummary> = {};
  const subjectIds = subjects.map((s) => s.id);
  if (subjectIds.length > 0) {
    const revRows = await db
      .select()
      .from(knowledgeSubjectSummaryRevisions)
      .where(
        and(
          eq(knowledgeSubjectSummaryRevisions.ownerPilotId, pilotId),
          inArray(knowledgeSubjectSummaryRevisions.subjectId, subjectIds),
        ),
      )
      .orderBy(desc(knowledgeSubjectSummaryRevisions.revisionNumber));
    for (const row of revRows) {
      if (summariesBySubjectId[row.subjectId]) continue;
      summariesBySubjectId[row.subjectId] = {
        revisionNumber: row.revisionNumber,
        summaryMarkdown: row.summaryMarkdown,
        createdAt: row.createdAt,
        provenanceJson: row.provenanceJson,
      };
    }
    for (const id of subjectIds) {
      if (!(id in summariesBySubjectId)) summariesBySubjectId[id] = null;
    }
  }

  return { preparationIds: prepIds, subjects, acquis, openPoints, summariesBySubjectId };
}

async function loadOwnedSubjectForProject(
  pilotId: string,
  projectId: string,
  subjectId: string,
  tx: Tx = db,
) {
  const prepIds = await linkedPreparationIds(pilotId, projectId);
  if (prepIds.length === 0) return null;
  return (
    await tx
      .select()
      .from(knowledgeSubjects)
      .where(
        and(
          eq(knowledgeSubjects.id, subjectId),
          eq(knowledgeSubjects.ownerPilotId, pilotId),
          inArray(knowledgeSubjects.preparationId, prepIds),
          or(isNull(knowledgeSubjects.projectId), eq(knowledgeSubjects.projectId, projectId)),
        ),
      )
      .limit(1)
  )[0];
}

export async function getCurrentSubjectSummary(pilotId: string, projectId: string, subjectId: string) {
  const subject = await loadOwnedSubjectForProject(pilotId, projectId, subjectId);
  if (!subject) return { status: "NOT_FOUND" as const };
  const row = (
    await db
      .select()
      .from(knowledgeSubjectSummaryRevisions)
      .where(
        and(
          eq(knowledgeSubjectSummaryRevisions.subjectId, subjectId),
          eq(knowledgeSubjectSummaryRevisions.ownerPilotId, pilotId),
        ),
      )
      .orderBy(desc(knowledgeSubjectSummaryRevisions.revisionNumber))
      .limit(1)
  )[0];
  if (!row) {
    return { status: "AVAILABLE" as const, summary: null };
  }
  return {
    status: "AVAILABLE" as const,
    summary: {
      revisionNumber: row.revisionNumber,
      summaryMarkdown: row.summaryMarkdown,
      createdAt: row.createdAt,
      provenanceJson: row.provenanceJson,
    },
  };
}

export async function appendSubjectSummaryRevision(
  pilotId: string,
  projectId: string,
  subjectId: string,
  input: {
    summaryMarkdown: string;
    provenance: Provenance;
    operationId?: string;
    idempotencyKey?: string;
    expectedRevision?: number;
    sourceFingerprint?: string;
    /** Optional qualified sources already evaluated by D3/D4 (J-C06). */
    qualifiedSources?: Awaited<ReturnType<typeof qualifyProvenanceSource>>[];
    /** When true (default), refuse overclaiming established facts over unresolved contradictions. */
    enforceHonesty?: boolean;
  },
) {
  const markdown = input.summaryMarkdown.trim();
  if (!markdown || markdown.length < 12) {
    return { status: "SKIPPED" as const, reason: "summary too thin for durable revision" };
  }

  const subject = await loadOwnedSubjectForProject(pilotId, projectId, subjectId);
  if (!subject) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  if (subject.status !== "ACTIVE") return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };

  if (input.enforceHonesty !== false) {
    const acquisRows = await db
      .select({
        id: knowledgeAcquis.id,
        subjectId: knowledgeAcquis.subjectId,
        statement: knowledgeAcquis.statement,
        status: knowledgeAcquis.status,
        kind: knowledgeAcquis.kind,
      })
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.ownerPilotId, pilotId),
          eq(knowledgeAcquis.subjectId, subjectId),
          eq(knowledgeAcquis.status, "CURRENT"),
        ),
      );
    const contradictions = detectAcquisContradictions(acquisRows);
    const sources =
      input.qualifiedSources ??
      (await Promise.all([
        qualifyProvenanceSource(pilotId, input.provenance as ExtendedProvenance),
      ]));
    const honesty = assertHonestSynthesisInput({
      summaryMarkdown: markdown,
      contradictions,
      sources,
    });
    if (!honesty.ok) {
      return { status: "SKIPPED" as const, reason: honesty.reason };
    }
  }

  if (input.operationId) {
    const prior = (
      await db
        .select()
        .from(knowledgeSubjectSummaryRevisions)
        .where(
          and(
            eq(knowledgeSubjectSummaryRevisions.subjectId, subjectId),
            eq(knowledgeSubjectSummaryRevisions.operationId, input.operationId),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return {
        status: "AVAILABLE" as const,
        revisionId: prior.id,
        revisionNumber: prior.revisionNumber,
        idempotentReplay: true as const,
      };
    }
  }

  try {
    return await db.transaction(async (tx) => {
      await tx.execute(
        sql`select id from knowledge_subjects where id = ${subjectId} and owner_pilot_id = ${pilotId} for update`,
      );
      const current = (
        await tx
          .select({ revisionNumber: knowledgeSubjectSummaryRevisions.revisionNumber })
          .from(knowledgeSubjectSummaryRevisions)
          .where(eq(knowledgeSubjectSummaryRevisions.subjectId, subjectId))
          .orderBy(desc(knowledgeSubjectSummaryRevisions.revisionNumber))
          .limit(1)
      )[0];
      const nextRev = (current?.revisionNumber ?? 0) + 1;
      if (input.expectedRevision != null && input.expectedRevision !== (current?.revisionNumber ?? 0)) {
        return { status: "CONFLICT" as const, reason: "EXPECTED_REVISION_MISMATCH" };
      }
      const id = newId("ksr");
      await tx.insert(knowledgeSubjectSummaryRevisions).values({
        id,
        subjectId,
        preparationId: subject.preparationId,
        projectId,
        ownerPilotId: pilotId,
        revisionNumber: nextRev,
        summaryMarkdown: markdown,
        provenanceJson: provenanceString(input.provenance),
        operationId: input.operationId ?? null,
        idempotencyKey: input.idempotencyKey ?? null,
        expectedRevision: input.expectedRevision ?? null,
        sourceFingerprint: input.sourceFingerprint ?? null,
      });
      return { status: "AVAILABLE" as const, revisionId: id, revisionNumber: nextRev };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "summary revision failed",
    };
  }
}

async function loadOwnedDecision(pilotId: string, projectId: string, decisionId: string) {
  await assertOwnedProject(pilotId, projectId);
  return (
    await db
      .select()
      .from(humanDecisions)
      .where(and(eq(humanDecisions.id, decisionId), eq(humanDecisions.projectId, projectId)))
      .limit(1)
  )[0];
}

export async function getCurrentDecisionExplanation(
  pilotId: string,
  projectId: string,
  decisionId: string,
) {
  const decision = await loadOwnedDecision(pilotId, projectId, decisionId);
  if (!decision) return { status: "NOT_FOUND" as const };
  const fingerprint = decisionOfficialFingerprint(decision);
  const row = (
    await db
      .select()
      .from(knowledgeDecisionExplanationRevisions)
      .where(
        and(
          eq(knowledgeDecisionExplanationRevisions.decisionId, decisionId),
          eq(knowledgeDecisionExplanationRevisions.ownerPilotId, pilotId),
        ),
      )
      .orderBy(desc(knowledgeDecisionExplanationRevisions.revisionNumber))
      .limit(1)
  )[0];
  if (!row) {
    return { status: "AVAILABLE" as const, explanation: null, decisionState: decision.state };
  }
  return {
    status: "AVAILABLE" as const,
    decisionState: decision.state,
    explanation: {
      revisionNumber: row.revisionNumber,
      explanationMarkdown: row.explanationMarkdown,
      officialDecisionFingerprint: row.officialDecisionFingerprint,
      createdAt: row.createdAt,
      provenanceJson: row.provenanceJson,
      potentiallyStale: row.officialDecisionFingerprint !== fingerprint,
    },
  };
}

export async function appendDecisionExplanationRevision(
  pilotId: string,
  projectId: string,
  decisionId: string,
  input: {
    explanationMarkdown: string;
    provenance: Provenance;
    preparationId?: string | null;
    operationId?: string;
    idempotencyKey?: string;
    expectedRevision?: number;
  },
) {
  const markdown = input.explanationMarkdown.trim();
  if (!markdown || markdown.length < 12) {
    return { status: "SKIPPED" as const, reason: "explanation too thin for durable revision" };
  }
  const decision = await loadOwnedDecision(pilotId, projectId, decisionId);
  if (!decision) return { status: "FAILED" as const, reason: "NOT_FOUND" };

  if (input.operationId) {
    const prior = (
      await db
        .select()
        .from(knowledgeDecisionExplanationRevisions)
        .where(
          and(
            eq(knowledgeDecisionExplanationRevisions.decisionId, decisionId),
            eq(knowledgeDecisionExplanationRevisions.operationId, input.operationId),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return {
        status: "AVAILABLE" as const,
        revisionId: prior.id,
        revisionNumber: prior.revisionNumber,
        idempotentReplay: true as const,
      };
    }
  }

  const fingerprint = decisionOfficialFingerprint(decision);

  try {
    return await db.transaction(async (tx) => {
      const current = (
        await tx
          .select({ revisionNumber: knowledgeDecisionExplanationRevisions.revisionNumber })
          .from(knowledgeDecisionExplanationRevisions)
          .where(eq(knowledgeDecisionExplanationRevisions.decisionId, decisionId))
          .orderBy(desc(knowledgeDecisionExplanationRevisions.revisionNumber))
          .limit(1)
      )[0];
      const nextRev = (current?.revisionNumber ?? 0) + 1;
      if (input.expectedRevision != null && input.expectedRevision !== (current?.revisionNumber ?? 0)) {
        return { status: "CONFLICT" as const, reason: "EXPECTED_REVISION_MISMATCH" };
      }
      const id = newId("der");
      await tx.insert(knowledgeDecisionExplanationRevisions).values({
        id,
        decisionId,
        preparationId: input.preparationId ?? null,
        projectId,
        ownerPilotId: pilotId,
        revisionNumber: nextRev,
        officialDecisionFingerprint: fingerprint,
        explanationMarkdown: markdown,
        provenanceJson: provenanceString(input.provenance),
        operationId: input.operationId ?? null,
        idempotencyKey: input.idempotencyKey ?? null,
        expectedRevision: input.expectedRevision ?? null,
      });
      return { status: "AVAILABLE" as const, revisionId: id, revisionNumber: nextRev };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "explanation revision failed",
    };
  }
}

async function loadOwnedOpenPoint(
  pilotId: string,
  projectId: string,
  openPointId: string,
  tx: Tx = db,
) {
  const prepIds = await linkedPreparationIds(pilotId, projectId);
  if (prepIds.length === 0) return null;
  return (
    await tx
      .select()
      .from(knowledgeOpenPoints)
      .where(
        and(
          eq(knowledgeOpenPoints.id, openPointId),
          eq(knowledgeOpenPoints.ownerPilotId, pilotId),
          inArray(knowledgeOpenPoints.preparationId, prepIds),
        ),
      )
      .limit(1)
  )[0];
}

function provenanceSufficient(p: Provenance): boolean {
  if (p.sourceKind === "pilot" || p.sourceKind === "nora") return Boolean(p.sourceId || p.generationId);
  if (p.sourceKind === "document" || p.sourceKind === "revision" || p.sourceKind === "message") {
    return Boolean(p.sourceId);
  }
  return false;
}

export async function resolveOpenPointFactually(
  pilotId: string,
  projectId: string,
  openPointId: string,
  input: { reason: string; provenance: Provenance; operationId?: string; actorKind?: string },
) {
  if (!provenanceSufficient(input.provenance)) {
    return { status: "FAILED" as const, reason: "INSUFFICIENT_PROVENANCE" };
  }
  const point = await loadOwnedOpenPoint(pilotId, projectId, openPointId);
  if (!point) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  if (point.status === "RESOLVED") {
    return { status: "AVAILABLE" as const, openPointId, alreadyResolved: true as const };
  }

  // J-C05 — factual D4 resolve never mutates D6 restrictions. Snapshot ACTIVE count for callers/tests.
  const activeRestrictionsBefore = await db
    .select({ id: governanceRestrictions.id })
    .from(governanceRestrictions)
    .where(
      and(
        eq(governanceRestrictions.projectId, projectId),
        eq(governanceRestrictions.status, "ACTIVE"),
      ),
    );

  if (input.operationId) {
    const prior = (
      await db
        .select()
        .from(knowledgeOpenPointEvents)
        .where(
          and(
            eq(knowledgeOpenPointEvents.openPointId, openPointId),
            eq(knowledgeOpenPointEvents.operationId, input.operationId),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return { status: "AVAILABLE" as const, openPointId, eventId: prior.id, idempotentReplay: true as const };
    }
  }

  try {
    return await db.transaction(async (tx) => {
      await tx.execute(
        sql`select id from knowledge_open_points where id = ${openPointId} and owner_pilot_id = ${pilotId} for update`,
      );
      const eventId = newId("ope");
      await tx
        .update(knowledgeOpenPoints)
        .set({ status: "RESOLVED", updatedAt: new Date() })
        .where(eq(knowledgeOpenPoints.id, openPointId));
      await tx.insert(knowledgeOpenPointEvents).values({
        id: eventId,
        openPointId,
        preparationId: point.preparationId,
        projectId,
        ownerPilotId: pilotId,
        eventType: "RESOLVED",
        reason: input.reason.trim().slice(0, 500),
        actorKind: input.actorKind ?? "pilot",
        provenanceJson: provenanceString(input.provenance),
        operationId: input.operationId ?? null,
      });
      const activeRestrictionsAfter = await tx
        .select({ id: governanceRestrictions.id })
        .from(governanceRestrictions)
        .where(
          and(
            eq(governanceRestrictions.projectId, projectId),
            eq(governanceRestrictions.status, "ACTIVE"),
          ),
        );
      if (activeRestrictionsAfter.length !== activeRestrictionsBefore.length) {
        throw new Error("D6_RESTRICTION_MUTATION_FORBIDDEN");
      }
      return {
        status: "AVAILABLE" as const,
        openPointId,
        eventId,
        activeRestrictionIds: activeRestrictionsAfter.map((r) => r.id),
      };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "resolve failed",
    };
  }
}

export async function reopenOpenPoint(
  pilotId: string,
  projectId: string,
  openPointId: string,
  input: { reason: string; provenance: Provenance; operationId?: string; actorKind?: string },
) {
  const point = await loadOwnedOpenPoint(pilotId, projectId, openPointId);
  if (!point) return { status: "FAILED" as const, reason: "NOT_FOUND" };

  if (input.operationId) {
    const prior = (
      await db
        .select()
        .from(knowledgeOpenPointEvents)
        .where(
          and(
            eq(knowledgeOpenPointEvents.openPointId, openPointId),
            eq(knowledgeOpenPointEvents.operationId, input.operationId),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return { status: "AVAILABLE" as const, openPointId, eventId: prior.id, idempotentReplay: true as const };
    }
  }

  try {
    return await db.transaction(async (tx) => {
      await tx.execute(
        sql`select id from knowledge_open_points where id = ${openPointId} and owner_pilot_id = ${pilotId} for update`,
      );
      const eventId = newId("ope");
      await tx
        .update(knowledgeOpenPoints)
        .set({ status: "OPEN", updatedAt: new Date() })
        .where(eq(knowledgeOpenPoints.id, openPointId));
      await tx.insert(knowledgeOpenPointEvents).values({
        id: eventId,
        openPointId,
        preparationId: point.preparationId,
        projectId,
        ownerPilotId: pilotId,
        eventType: "REOPENED",
        reason: input.reason.trim().slice(0, 500),
        actorKind: input.actorKind ?? "pilot",
        provenanceJson: provenanceString(input.provenance),
        operationId: input.operationId ?? null,
      });
      return { status: "AVAILABLE" as const, openPointId, eventId };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "reopen failed",
    };
  }
}

async function wouldCreateCycle(
  pilotId: string,
  projectId: string,
  subjectId: string,
  newParentId: string,
): Promise<boolean> {
  if (newParentId === subjectId) return true;
  let current: string | null = newParentId;
  const visited = new Set<string>();
  while (current) {
    if (current === subjectId) return true;
    if (visited.has(current)) return true;
    visited.add(current);
    const row = await loadOwnedSubjectForProject(pilotId, projectId, current);
    if (!row) return true;
    current = row.parentSubjectId;
  }
  return false;
}

export async function reparentSubject(
  pilotId: string,
  projectId: string,
  subjectId: string,
  newParentSubjectId: string | null,
) {
  const subject = await loadOwnedSubjectForProject(pilotId, projectId, subjectId);
  if (!subject) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  if (subject.status !== "ACTIVE") return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };

  if (newParentSubjectId) {
    const parent = await loadOwnedSubjectForProject(pilotId, projectId, newParentSubjectId);
    if (!parent) return { status: "FAILED" as const, reason: "PARENT_NOT_FOUND" };
    if (parent.preparationId !== subject.preparationId) {
      return { status: "FAILED" as const, reason: "CROSS_PREPARATION_PARENT" };
    }
    if (parent.status !== "ACTIVE") return { status: "FAILED" as const, reason: "PARENT_NOT_ACTIVE" };
    if (await wouldCreateCycle(pilotId, projectId, subjectId, newParentSubjectId)) {
      return { status: "FAILED" as const, reason: "CYCLE_OR_INVALID_TREE" };
    }
  }

  try {
    return await db.transaction(async (tx) => {
      await tx.execute(
        sql`select id from knowledge_subjects where id = ${subjectId} and owner_pilot_id = ${pilotId} for update`,
      );
      await tx
        .update(knowledgeSubjects)
        .set({ parentSubjectId: newParentSubjectId, updatedAt: new Date() })
        .where(eq(knowledgeSubjects.id, subjectId));
      await tx.insert(knowledgeSubjectEvents).values({
        id: newId("sev"),
        preparationId: subject.preparationId,
        ownerPilotId: pilotId,
        subjectId,
        eventType: "REPARENTED",
        payloadJson: JSON.stringify({
          from: subject.parentSubjectId,
          to: newParentSubjectId,
        }),
      });
      return { status: "AVAILABLE" as const, subjectId, parentSubjectId: newParentSubjectId };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "reparent failed",
    };
  }
}

function subjectPathTitles(
  subjectId: string,
  byId: Map<string, { id: string; title: string; parentSubjectId: string | null }>,
): string[] {
  const path: string[] = [];
  let current: string | null = subjectId;
  const guard = new Set<string>();
  while (current && !guard.has(current)) {
    guard.add(current);
    const row = byId.get(current);
    if (!row) break;
    path.unshift(row.title);
    current = row.parentSubjectId;
  }
  return path;
}

export async function searchJournalSubjects(
  pilotId: string,
  projectId: string,
  query: string,
  opts?: { openPointsOnly?: boolean; limit?: number },
) {
  const q = query.trim().toLowerCase();
  const limit = opts?.limit ?? 24;
  const bundle = await listProjectKnowledge(pilotId, projectId);
  if (!q && !opts?.openPointsOnly) {
    return { status: "AVAILABLE" as const, results: [], coverage: "EMPTY_QUERY" as const };
  }

  const byId = new Map(
    bundle.subjects.map((s) => [
      s.id,
      { id: s.id, title: s.title, parentSubjectId: s.parentSubjectId },
    ]),
  );

  type Hit = {
    subjectId: string;
    title: string;
    path: string[];
    matchKind: "title" | "acquis" | "open_point" | "summary";
    snippet: string;
    openPointId?: string;
  };
  const hits: Hit[] = [];

  const seen = new Set<string>();

  const pushHit = (hit: Hit) => {
    const key = `${hit.subjectId}:${hit.matchKind}:${hit.openPointId ?? hit.snippet.slice(0, 40)}`;
    if (seen.has(key)) return;
    seen.add(key);
    hits.push(hit);
  };

  for (const s of bundle.subjects) {
    if (opts?.openPointsOnly) {
      const openForSubject = bundle.openPoints.filter(
        (o) => o.subjectId === s.id && o.status === "OPEN",
      );
      if (openForSubject.length === 0) continue;
      for (const o of openForSubject) {
        if (q && !o.statement.toLowerCase().includes(q) && !s.title.toLowerCase().includes(q)) continue;
        pushHit({
          subjectId: s.id,
          title: s.title,
          path: subjectPathTitles(s.id, byId),
          matchKind: "open_point",
          snippet: o.statement.slice(0, 280),
          openPointId: o.id,
        });
      }
      continue;
    }
    if (q && s.title.toLowerCase().includes(q)) {
      pushHit({
        subjectId: s.id,
        title: s.title,
        path: subjectPathTitles(s.id, byId),
        matchKind: "title",
        snippet: s.title,
      });
    }
    const summary = bundle.summariesBySubjectId[s.id];
    if (q && summary?.summaryMarkdown.toLowerCase().includes(q)) {
      pushHit({
        subjectId: s.id,
        title: s.title,
        path: subjectPathTitles(s.id, byId),
        matchKind: "summary",
        snippet: summary.summaryMarkdown.slice(0, 280),
      });
    }
    for (const a of bundle.acquis) {
      if (a.subjectId !== s.id || a.status !== "CURRENT") continue;
      if (!q || !a.statement.toLowerCase().includes(q)) continue;
      pushHit({
        subjectId: s.id,
        title: s.title,
        path: subjectPathTitles(s.id, byId),
        matchKind: "acquis",
        snippet: a.statement.slice(0, 280),
      });
    }
    for (const o of bundle.openPoints) {
      if (o.subjectId !== s.id || o.status !== "OPEN") continue;
      if (!q || !o.statement.toLowerCase().includes(q)) continue;
      pushHit({
        subjectId: s.id,
        title: s.title,
        path: subjectPathTitles(s.id, byId),
        matchKind: "open_point",
        snippet: o.statement.slice(0, 280),
        openPointId: o.id,
      });
    }
  }

  return {
    status: "AVAILABLE" as const,
    results: hits.slice(0, limit),
    coverage: hits.length === 0 ? ("NONE" as const) : ("PARTIAL" as const),
  };
}

export async function searchJournalDecisions(
  pilotId: string,
  projectId: string,
  query: string,
  opts?: { limit?: number },
) {
  const q = query.trim().toLowerCase();
  const limit = opts?.limit ?? 24;
  if (!q) {
    return { status: "AVAILABLE" as const, results: [], coverage: "EMPTY_QUERY" as const };
  }

  await assertOwnedProject(pilotId, projectId);
  const decisions = await db
    .select()
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId))
    .orderBy(desc(humanDecisions.createdAt));

  type Row = {
    decisionId: string;
    kind: string;
    state: string;
    statement: string;
    matchKind: "statement" | "explanation";
    snippet: string;
    explanationStale?: boolean;
  };
  const results: Row[] = [];

  for (const d of decisions) {
    if (d.statement.toLowerCase().includes(q)) {
      results.push({
        decisionId: d.id,
        kind: d.kind,
        state: d.state,
        statement: d.statement,
        matchKind: "statement",
        snippet: d.statement.slice(0, 280),
      });
    }
    const expl = await getCurrentDecisionExplanation(pilotId, projectId, d.id);
    if (
      expl.status === "AVAILABLE" &&
      expl.explanation?.explanationMarkdown.toLowerCase().includes(q)
    ) {
      results.push({
        decisionId: d.id,
        kind: d.kind,
        state: d.state,
        statement: d.statement,
        matchKind: "explanation",
        snippet: expl.explanation.explanationMarkdown.slice(0, 280),
        explanationStale: expl.explanation.potentiallyStale,
      });
    }
    if (results.length >= limit) break;
  }

  return {
    status: "AVAILABLE" as const,
    results: results.slice(0, limit),
    coverage: results.length === 0 ? ("NONE" as const) : ("PARTIAL" as const),
  };
}

export async function getJournalProjection(pilotId: string, projectId: string) {
  const knowledge = await listProjectKnowledge(pilotId, projectId);
  const decisionRows = await db
    .select({
      id: humanDecisions.id,
      kind: humanDecisions.kind,
      state: humanDecisions.state,
      scope: humanDecisions.scope,
      statement: humanDecisions.statement,
      objectRef: humanDecisions.objectRef,
      sourceKind: humanDecisions.sourceKind,
      sourceRef: humanDecisions.sourceRef,
      supersedesDecisionId: humanDecisions.supersedesDecisionId,
      effectiveAt: humanDecisions.effectiveAt,
      createdAt: humanDecisions.createdAt,
    })
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId))
    .orderBy(desc(humanDecisions.createdAt));

  const supersededBy = new Map<string, string>();
  for (const d of decisionRows) {
    if (d.supersedesDecisionId) {
      supersededBy.set(d.supersedesDecisionId, d.id);
    }
  }

  const decisions = [];
  for (const d of decisionRows) {
    const expl = await getCurrentDecisionExplanation(pilotId, projectId, d.id);
    const applicable = d.state === "APPLICABLE" && !supersededBy.has(d.id);
    decisions.push({
      ...d,
      applicable,
      supersededByDecisionId: supersededBy.get(d.id) ?? null,
      explanation:
        expl.status === "AVAILABLE" && expl.explanation
          ? {
              revisionNumber: expl.explanation.revisionNumber,
              explanationMarkdown: expl.explanation.explanationMarkdown,
              potentiallyStale: expl.explanation.potentiallyStale,
            }
          : null,
    });
  }

  const restrictions = await db
    .select({
      id: governanceRestrictions.id,
      targetKind: governanceRestrictions.targetKind,
      targetRef: governanceRestrictions.targetRef,
      status: governanceRestrictions.status,
      originDecisionId: governanceRestrictions.originDecisionId,
    })
    .from(governanceRestrictions)
    .where(eq(governanceRestrictions.projectId, projectId));

  const contradictions = detectAcquisContradictions(
    knowledge.acquis.map((a) => ({
      id: a.id,
      subjectId: a.subjectId,
      statement: a.statement,
      status: a.status,
      kind: a.kind,
    })),
  );

  const sourceLinks: Array<{
    ownerKind: "acquis" | "open_point" | "summary";
    ownerId: string;
    subjectId: string | null;
    sourceKind: string;
    sourceId?: string;
    documentId?: string;
    revisionId?: string;
    currentness: string;
    detail: string;
  }> = [];

  for (const a of knowledge.acquis) {
    if (a.status !== "CURRENT") continue;
    try {
      const prov = JSON.parse(a.provenanceJson) as ExtendedProvenance;
      const q = await qualifyProvenanceSource(pilotId, prov);
      sourceLinks.push({
        ownerKind: "acquis",
        ownerId: a.id,
        subjectId: a.subjectId,
        sourceKind: q.sourceKind,
        sourceId: q.sourceId,
        documentId: q.documentId,
        revisionId: q.revisionId,
        currentness: q.currentness,
        detail: q.detail,
      });
    } catch {
      /* provenance JSON corrupt — omit rather than invent */
    }
  }
  for (const o of knowledge.openPoints) {
    try {
      const prov = JSON.parse(o.provenanceJson) as ExtendedProvenance;
      const q = await qualifyProvenanceSource(pilotId, prov);
      sourceLinks.push({
        ownerKind: "open_point",
        ownerId: o.id,
        subjectId: o.subjectId,
        sourceKind: q.sourceKind,
        sourceId: q.sourceId,
        documentId: q.documentId,
        revisionId: q.revisionId,
        currentness: q.currentness,
        detail: q.detail,
      });
    } catch {
      /* omit */
    }
  }

  return {
    knowledge: {
      ...knowledge,
      acquis: knowledge.acquis.map((a) => ({
        ...a,
        provenanceJson: a.provenanceJson,
      })),
      openPoints: knowledge.openPoints.map((o) => ({
        ...o,
        provenanceJson: o.provenanceJson,
      })),
    },
    decisions,
    restrictions,
    contradictions,
    sourceLinks,
  };
}
```

### TIP `projects/sfia-studio-next/web/src/db/migrations/014_journal_d4_revisions.sql` (80 lines) — FULL
```sql
-- Ensemble 06 / Journal — additive D4 revision tables (technical contract §16).
-- DEV lane only under ENV-01. No RECETTE/STABLE mutation in this cycle.
-- Reversible: DROP TABLE IF EXISTS the three new tables (no column drops on legacy rows).

-- A. Immutable subject summary revisions
CREATE TABLE IF NOT EXISTS knowledge_subject_summary_revisions (
  id text PRIMARY KEY,
  subject_id text NOT NULL REFERENCES knowledge_subjects(id),
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  revision_number integer NOT NULL,
  summary_markdown text NOT NULL,
  provenance_json text NOT NULL DEFAULT '{}',
  operation_id text,
  idempotency_key text,
  expected_revision integer,
  source_fingerprint text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT knowledge_subject_summary_revisions_rev_pos CHECK (revision_number > 0)
);
CREATE UNIQUE INDEX IF NOT EXISTS knowledge_subject_summary_revisions_subj_rev_uidx
  ON knowledge_subject_summary_revisions(subject_id, revision_number);
CREATE UNIQUE INDEX IF NOT EXISTS knowledge_subject_summary_revisions_subj_op_uidx
  ON knowledge_subject_summary_revisions(subject_id, operation_id)
  WHERE operation_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS knowledge_subject_summary_revisions_subj_idx
  ON knowledge_subject_summary_revisions(subject_id);

-- B. Immutable decision explanation revisions (narrative only — D6 remains authority)
CREATE TABLE IF NOT EXISTS knowledge_decision_explanation_revisions (
  id text PRIMARY KEY,
  decision_id text NOT NULL REFERENCES human_decisions(id),
  preparation_id text REFERENCES preparations(id),
  project_id text NOT NULL REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  revision_number integer NOT NULL,
  official_decision_fingerprint text NOT NULL,
  explanation_markdown text NOT NULL,
  provenance_json text NOT NULL DEFAULT '{}',
  operation_id text,
  idempotency_key text,
  expected_revision integer,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT knowledge_decision_explanation_revisions_rev_pos CHECK (revision_number > 0)
);
CREATE UNIQUE INDEX IF NOT EXISTS knowledge_decision_explanation_revisions_dec_rev_uidx
  ON knowledge_decision_explanation_revisions(decision_id, revision_number);
CREATE UNIQUE INDEX IF NOT EXISTS knowledge_decision_explanation_revisions_dec_op_uidx
  ON knowledge_decision_explanation_revisions(decision_id, operation_id)
  WHERE operation_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS knowledge_decision_explanation_revisions_dec_idx
  ON knowledge_decision_explanation_revisions(decision_id);

-- C. Open-point factual event history (current row stays on knowledge_open_points)
CREATE TABLE IF NOT EXISTS knowledge_open_point_events (
  id text PRIMARY KEY,
  open_point_id text NOT NULL REFERENCES knowledge_open_points(id),
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  event_type text NOT NULL, -- OPENED | RESOLVED | REOPENED
  reason text NOT NULL DEFAULT '',
  actor_kind text NOT NULL DEFAULT 'system', -- pilot | nora | system
  provenance_json text NOT NULL DEFAULT '{}',
  operation_id text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS knowledge_open_point_events_point_idx
  ON knowledge_open_point_events(open_point_id);
CREATE UNIQUE INDEX IF NOT EXISTS knowledge_open_point_events_op_uidx
  ON knowledge_open_point_events(open_point_id, operation_id)
  WHERE operation_id IS NOT NULL;

COMMENT ON TABLE knowledge_subject_summary_revisions IS
  'D4 immutable subject synthesis revisions (Journal §16A); current = max revision_number';
COMMENT ON TABLE knowledge_decision_explanation_revisions IS
  'D4 immutable decision explanations; never authorizes HumanDecision (D6)';
COMMENT ON TABLE knowledge_open_point_events IS
  'D4 factual open-point lifecycle events; does not lift D6 restrictions';

```

### TIP `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/route.ts` (56 lines) — FULL
```typescript
import { NextResponse } from "next/server";
import { getJournalProjection } from "@/domains/knowledge/journal";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(_: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const projection = await getJournalProjection(session.pilotId, projectId);
    const k = projection.knowledge;
    return NextResponse.json({
      ...projection,
      knowledge: {
        preparationIds: k.preparationIds,
        subjects: k.subjects.map((s) => ({
          id: s.id,
          title: s.title,
          status: s.status,
          parentSubjectId: s.parentSubjectId,
          originatedFromSubjectId: s.originatedFromSubjectId,
          summary: k.summariesBySubjectId[s.id]
            ? {
                revisionNumber: k.summariesBySubjectId[s.id]!.revisionNumber,
                summaryMarkdown: k.summariesBySubjectId[s.id]!.summaryMarkdown,
              }
            : null,
        })),
        acquis: k.acquis.map((a) => ({
          id: a.id,
          kind: a.kind,
          statement: a.statement,
          status: a.status,
          subjectId: a.subjectId,
          provenanceJson: a.provenanceJson,
        })),
        openPoints: k.openPoints.map((o) => ({
          id: o.id,
          statement: o.statement,
          status: o.status,
          subjectId: o.subjectId,
          provenanceJson: o.provenanceJson,
        })),
      },
      decisions: projection.decisions.map((d) => ({
        ...d,
        effectiveAt:
          d.effectiveAt instanceof Date ? d.effectiveAt.toISOString() : d.effectiveAt,
        createdAt: d.createdAt instanceof Date ? d.createdAt.toISOString() : d.createdAt,
      })),
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### TIP `projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts` (350 lines) — FULL
```typescript
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  governanceRestrictions,
  humanDecisions,
  knowledgeOpenPoints,
  pilots,
  preparations,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { capitalizeAcquis, ensureSubject, openPoint } from "@/domains/knowledge/service";
import {
  appendDecisionExplanationRevision,
  appendSubjectSummaryRevision,
  getCurrentDecisionExplanation,
  getCurrentSubjectSummary,
  getJournalProjection,
  listProjectKnowledge,
  reopenOpenPoint,
  reparentSubject,
  resolveOpenPointFactually,
  searchJournalDecisions,
  searchJournalSubjects,
} from "@/domains/knowledge/journal";
import {
  markOpenPointReactivated,
  selectOpenPointsForReactivation,
} from "@/domains/knowledge/journal-cognition";
import {
  insertHumanDecision,
  insertRestriction,
  markDecisionState,
} from "@/domains/decisions/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedLinkedProject(pilotId: string, name: string) {
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, name, "Journal delivery test");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "Journal delivery test",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`project create failed: ${created.status}`);
  }
  return { prep, projectId: created.projectId! };
}

describe("Journal D4 revisions (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    if (process.env.DATABASE_URL.includes("sfia_next_e2e")) {
      expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    }
  });

  it("ensureSubject reuses title only under same parent", async () => {
    const pilotId = await seedPilot("J-homonym");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Homonymes");
    const parent = await ensureSubject(pilotId, prep.id, "Thème parent");
    const leafA = await ensureSubject(pilotId, prep.id, "Traçabilité", parent.subjectId);
    const leafB = await ensureSubject(pilotId, prep.id, "Traçabilité", null);
    expect(leafA.status).toBe("AVAILABLE");
    expect(leafB.status).toBe("AVAILABLE");
    expect(leafA.subjectId).not.toBe(leafB.subjectId);

    const bundle = await listProjectKnowledge(pilotId, projectId);
    expect(bundle.subjects.filter((s) => s.title === "Traçabilité")).toHaveLength(2);
  });

  it("summary revisions are immutable and idempotent by operationId", async () => {
    const pilotId = await seedPilot("J-summary");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Synthèse");
    const subj = await ensureSubject(pilotId, prep.id, "Synthèse cible");
    const op = "op-summary-1";
    const first = await appendSubjectSummaryRevision(pilotId, projectId, subj.subjectId!, {
      summaryMarkdown: "Synthèse durable sur la traçabilité des décisions du projet.",
      provenance: { sourceKind: "pilot", sourceId: "msg-1", epistemic: "established" },
      operationId: op,
    });
    expect(first.status).toBe("AVAILABLE");
    const replay = await appendSubjectSummaryRevision(pilotId, projectId, subj.subjectId!, {
      summaryMarkdown: "Autre texte qui ne doit pas créer une deuxième écriture.",
      provenance: { sourceKind: "pilot", sourceId: "msg-2" },
      operationId: op,
    });
    expect(replay.status).toBe("AVAILABLE");
    expect("idempotentReplay" in replay && replay.idempotentReplay).toBe(true);
    const current = await getCurrentSubjectSummary(pilotId, projectId, subj.subjectId!);
    expect(current.status).toBe("AVAILABLE");
    expect(current.summary?.revisionNumber).toBe(1);
    expect(current.summary?.summaryMarkdown).toContain("traçabilité");
  });

  it("factual open-point resolve and reopen keep D4 events", async () => {
    const pilotId = await seedPilot("J-open");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Points");
    const subj = await ensureSubject(pilotId, prep.id, "Questions");
    const pt = await openPoint(pilotId, prep.id, {
      statement: "Quelle preuve pour la connexion GitHub?",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-open-1" },
    });
    expect(pt.status).toBe("AVAILABLE");
    const resolved = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
      reason: "Documentation officielle citée",
      provenance: { sourceKind: "document", sourceId: "doc-proof-1", epistemic: "established" },
      operationId: "resolve-op-1",
    });
    expect(resolved.status).toBe("AVAILABLE");
    const row = (
      await db.select().from(knowledgeOpenPoints).where(eq(knowledgeOpenPoints.id, pt.openPointId!))
    )[0];
    expect(row.status).toBe("RESOLVED");

    const reopened = await reopenOpenPoint(pilotId, projectId, pt.openPointId!, {
      reason: "Nouvelle contradiction",
      provenance: { sourceKind: "message", sourceId: "m-contra-1" },
      operationId: "reopen-op-1",
    });
    expect(reopened.status).toBe("AVAILABLE");
    expect(
      (await db.select().from(knowledgeOpenPoints).where(eq(knowledgeOpenPoints.id, pt.openPointId!)))[0]
        .status,
    ).toBe("OPEN");
  });

  it("reparent refuses cycles", async () => {
    const pilotId = await seedPilot("J-tree");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Arbre");
    const root = await ensureSubject(pilotId, prep.id, "Racine");
    const child = await ensureSubject(pilotId, prep.id, "Enfant", root.subjectId);
    const cycle = await reparentSubject(pilotId, projectId, root.subjectId!, child.subjectId!);
    expect(cycle.status).toBe("FAILED");
    if (cycle.status !== "FAILED") throw new Error("expected FAILED");
    expect(cycle.reason).toBe("CYCLE_OR_INVALID_TREE");
  });

  it("searchJournalSubjects matches acquis text, not only titles", async () => {
    const pilotId = await seedPilot("J-search");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Recherche");
    const subj = await ensureSubject(pilotId, prep.id, "Titre neutre");
    await capitalizeAcquis(pilotId, prep.id, {
      statement: "Le mot-clé traçabilité apparaît uniquement dans cet acquis capitalisé.",
      kind: "HYPOTHESIS",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
    });
    const hits = await searchJournalSubjects(pilotId, projectId, "traçabilité");
    expect(hits.results.some((r) => r.matchKind === "acquis")).toBe(true);
  });

  it("decision explanation is narrative only and can go stale after D6 state change", async () => {
    const pilotId = await seedPilot("J-d6");
    const { projectId } = await seedLinkedProject(pilotId, "Décisions");
    const decisionId = await db.transaction(async (tx) =>
      insertHumanDecision(tx, {
        projectId,
        pilotId,
        sourceKind: "pilotage",
        sourceRef: "cmd-test",
        kind: "TRAJECTORY",
        objectRef: "traj",
        statement: "Acte applicable initial pour test journal",
      }),
    );
    const wrote = await appendDecisionExplanationRevision(pilotId, projectId, decisionId, {
      explanationMarkdown:
        "Contexte long : alternatives envisagées, compromis et limites explicitement sourcées ici.",
      provenance: { sourceKind: "message", sourceId: "m-exp-1", epistemic: "observed" },
      operationId: "exp-op-1",
    });
    expect(wrote.status).toBe("AVAILABLE");
    const fresh = await getCurrentDecisionExplanation(pilotId, projectId, decisionId);
    expect(fresh.status).toBe("AVAILABLE");
    expect(fresh.explanation?.potentiallyStale).toBe(false);

    await db.transaction(async (tx) => markDecisionState(tx, decisionId, "REVISED"));
    const after = await getCurrentDecisionExplanation(pilotId, projectId, decisionId);
    expect(after.explanation?.potentiallyStale).toBe(true);

    const decisionSearch = await searchJournalDecisions(pilotId, projectId, "alternatives");
    expect(decisionSearch.results.some((r) => r.matchKind === "explanation")).toBe(true);

    const act = (await db.select().from(humanDecisions).where(eq(humanDecisions.id, decisionId)))[0];
    expect(act.state).toBe("REVISED");
  });

  it("J-C04 reactivation selects intent-matching OPEN points with cooldown", async () => {
    const pilotId = await seedPilot("J-react");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Réactivation");
    const subj = await ensureSubject(pilotId, prep.id, "GitHub");
    const pt = await openPoint(pilotId, prep.id, {
      statement: "Quelle preuve pour la connexion GitHub du dépôt officiel?",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-react-1" },
    });
    expect(pt.status).toBe("AVAILABLE");
    const first = await selectOpenPointsForReactivation(
      pilotId,
      projectId,
      "On reparle de la preuve GitHub pour avancer",
    );
    expect(first.candidates.some((c) => c.openPointId === pt.openPointId)).toBe(true);

    const marked = await markOpenPointReactivated(pilotId, projectId, pt.openPointId!, {
      reason: "réintroduit dans le contexte courant",
      provenance: { sourceKind: "nora", generationId: "gen-r1" },
      operationId: "react-op-1",
    });
    expect(marked.status).toBe("AVAILABLE");

    const cooled = await selectOpenPointsForReactivation(
      pilotId,
      projectId,
      "preuve GitHub encore pertinente",
      { now: new Date() },
    );
    expect(cooled.candidates.some((c) => c.openPointId === pt.openPointId)).toBe(false);
  });

  it("J-C05 factual resolve leaves ACTIVE D6 restriction untouched", async () => {
    const pilotId = await seedPilot("J-d6-restr");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Restriction");
    const decisionId = await db.transaction(async (tx) =>
      insertHumanDecision(tx, {
        projectId,
        pilotId,
        sourceKind: "pilotage",
        sourceRef: "cmd-restr",
        kind: "RISK_ACCEPTANCE",
        objectRef: "risk",
        statement: "Risque accepté sous restriction ACTIVE",
      }),
    );
    const restrictionId = await db.transaction(async (tx) =>
      insertRestriction(tx, {
        projectId,
        targetKind: "ACTION",
        targetRef: "publish",
        originDecisionId: decisionId,
      }),
    );
    const subj = await ensureSubject(pilotId, prep.id, "Publication");
    const pt = await openPoint(pilotId, prep.id, {
      statement: "Le détail technique de publication est-il documenté?",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-restr-1" },
    });
    const resolved = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
      reason: "Document technique trouvé",
      provenance: { sourceKind: "document", sourceId: "doc-tech-1", epistemic: "established" },
      operationId: "resolve-restr-1",
    });
    expect(resolved.status).toBe("AVAILABLE");
    const restr = (
      await db
        .select()
        .from(governanceRestrictions)
        .where(eq(governanceRestrictions.id, restrictionId))
    )[0];
    expect(restr.status).toBe("ACTIVE");
  });

  it("J-C06 honesty gate skips overclaiming summary when contradiction open", async () => {
    const pilotId = await seedPilot("J-honest");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Honnêteté");
    const subj = await ensureSubject(pilotId, prep.id, "Connexion");
    await capitalizeAcquis(pilotId, prep.id, {
      statement: "La connexion GitHub est établie pour ce projet durable.",
      kind: "HYPOTHESIS",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-h1", epistemic: "observed" },
    });
    await capitalizeAcquis(pilotId, prep.id, {
      statement: "La connexion GitHub n'est pas établie pour ce projet durable.",
      kind: "HYPOTHESIS",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-h2", epistemic: "observed" },
    });
    const skipped = await appendSubjectSummaryRevision(pilotId, projectId, subj.subjectId!, {
      summaryMarkdown: "Il est établi que la connexion GitHub fonctionne sans réserve.",
      provenance: { sourceKind: "nora", generationId: "g-h1", epistemic: "established" },
      operationId: "sum-overclaim",
    });
    expect(skipped.status).toBe("SKIPPED");

    const ok = await appendSubjectSummaryRevision(pilotId, projectId, subj.subjectId!, {
      summaryMarkdown:
        "Contradiction ouverte sur la connexion GitHub — incertitude à clarifier avant conclusion.",
      provenance: { sourceKind: "nora", generationId: "g-h2", epistemic: "limited" },
      operationId: "sum-honest",
    });
    expect(ok.status).toBe("AVAILABLE");
  });

  it("J-C07 / J-C09 projection isolates foreign project and exposes applicability", async () => {
    const pilotA = await seedPilot("J-iso-a");
    const pilotB = await seedPilot("J-iso-b");
    const a = await seedLinkedProject(pilotA, "Projet A iso");
    const b = await seedLinkedProject(pilotB, "Projet B iso");
    const subj = await ensureSubject(pilotA, a.prep.id, "Secret A");
    await capitalizeAcquis(pilotA, a.prep.id, {
      statement: "Acquis privé du projet A jamais visible ailleurs.",
      kind: "HYPOTHESIS",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "observed" },
    });
    await expect(listProjectKnowledge(pilotB, a.projectId)).rejects.toMatchObject({
      code: "NOT_FOUND",
    });
    const other = await listProjectKnowledge(pilotB, b.projectId);
    expect(other.subjects.every((s) => s.title !== "Secret A")).toBe(true);

    const decisionId = await db.transaction(async (tx) =>
      insertHumanDecision(tx, {
        projectId: a.projectId,
        pilotId: pilotA,
        sourceKind: "pilotage",
        sourceRef: "cmd-iso",
        kind: "TRAJECTORY",
        objectRef: "traj",
        statement: "Décision applicable du projet A",
      }),
    );
    const proj = await getJournalProjection(pilotA, a.projectId);
    const row = proj.decisions.find((d) => d.id === decisionId);
    expect(row?.applicable).toBe(true);
    expect(row?.state).toBe("APPLICABLE");
  });
});
```

### TIP `projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md` (67 lines) — FULL
```markdown
# As-built — Ensemble 06 / Journal V4 (candidat local)

| Métadonnée | Valeur |
|---|---|
| Date | 19/11/2026 (cycle de complétude) |
| Branche | `sfia/next-journal-delivery-20261119` |
| Base docs (cycle 1) | `6879d34e` |
| Matrice docs distante (lue, non fusionnée) | `b02192e5` |
| Base `main` | `d3d199ad` |
| Versioning | `NO RELEASE` / `0.0.0-dev` |
| Lane | DEV / e2e isolé (`127.0.0.1:5433`, `sfia_next_e2e`) — RECETTE/STABLE non mutées |

## Cycle 1 (conservé)

- Migration additive `014_journal_d4_revisions.sql`
- `domains/knowledge/journal.ts` : révisions, resolve/reopen, reparent, recherches
- `ensureSubject` parent-aware
- `GET /api/projects/[projectId]/journal`
- `ProjectJournal` V4 shell (tabs / search / filtre / 40/60 / enlarge)
- `subjectId` conservé sur la page projet

## Cycle 2 — complétude (ce cycle)

### J-C04 — réactivation
- `journal-cognition.ts` : `selectOpenPointsForReactivation`, `markOpenPointReactivated` (cooldown, score lexical)
- Branché dans `selectRelevantKnowledgeContext` via `projectId` + conversation service

### J-C06 — sources / contradictions / currentness
- `qualifyProvenanceSource`, `detectAcquisContradictions`, `assertHonestSynthesisInput`
- Gate honnêteté sur `appendSubjectSummaryRevision`
- Projection Journal expose `sourceLinks` + `contradictions` ; UI affiche UNRESOLVED

### J-C05 / J-C09
- Resolve factuel refuse toute mutation de restriction D6 (snapshot ACTIVE)
- Décisions projetées avec `applicable` / `supersededByDecisionId` ; restrictions ACTIVE + historiques

### J-C13 / J-C14
- `GET /api/projects/[projectId]/messages/[messageId]` (history scope projet)
- `ProjectJournal` → `onOpenMessage` / `onOpenDocument` → Travail focus / Documents D4
- `NoraConversation` `focusMessageId` + highlight ; brouillon et `journalNav` préservés ; zéro auto-send

### J-C08 / API
- Recherche UI titre+synthèse+acquis+points avec raison de match
- `GET /api/projects/[projectId]/journal/search`

### Preuves exécutées (DEV/e2e)
| Commande | Résultat |
|---|---|
| `npx tsc --noEmit` | PASS |
| `npm run lint` | PASS (warnings préexistants hors Journal) |
| `vitest` `journal-cognition.test.ts` | 4/4 PASS |
| `vitest` `journal-d4-revisions.pg.test.ts` | 10/10 PASS (`sfia_next_e2e`) |
| `playwright` `journal-v4-parcours.spec.ts` | 1/1 PASS (`:3101`) |
| Captures runtime | `.tmp-sfia-review/journal-v4-captures/*.png` |
| Figma 835:71 | extrait MCP + PNG local |

### Non-régression / hors GO
- LIVE Nora : **NOT RUN** (hors GO)
- REAL Git : **NOT RUN**
- Suites ML2/ML3/ML4C/E05 complètes : **NOT RUN** dans ce cycle (tsc+lint+Journal PG/BROWSER exécutés)
- 11/11 captures Figma↔runtime pixel-perfect : **PARTIAL** (parcours BROWSER + captures runtime + frames Figma clés ; comparaison structurelle, pas audit pixel exhaustif)

## Autorité

- D6 non modifié en écriture depuis le Journal
- Aucun moteur mémoire parallèle
- Aucun push projet / PR / merge / RECETTE dans ce cycle

```

## 8. Fichiers modifiés — diff utile completion (78c3c3b0..HEAD)

### DIFF `projects/sfia-studio-next/web/src/domains/knowledge/journal.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts b/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
index ffc6d2ea..f413317a 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
@@ -16,6 +16,12 @@ import {
   projects,
 } from "@/db/schema";
 import type { Provenance } from "@/domains/knowledge/service";
+import {
+  assertHonestSynthesisInput,
+  detectAcquisContradictions,
+  qualifyProvenanceSource,
+  type ExtendedProvenance,
+} from "@/domains/knowledge/journal-cognition";
 import { StudioError } from "@/lib/http-errors";
 import { newId } from "@/lib/ids";

@@ -225,6 +231,10 @@ export async function appendSubjectSummaryRevision(
     idempotencyKey?: string;
     expectedRevision?: number;
     sourceFingerprint?: string;
+    /** Optional qualified sources already evaluated by D3/D4 (J-C06). */
+    qualifiedSources?: Awaited<ReturnType<typeof qualifyProvenanceSource>>[];
+    /** When true (default), refuse overclaiming established facts over unresolved contradictions. */
+    enforceHonesty?: boolean;
   },
 ) {
   const markdown = input.summaryMarkdown.trim();
@@ -236,6 +246,39 @@ export async function appendSubjectSummaryRevision(
   if (!subject) return { status: "FAILED" as const, reason: "NOT_FOUND" };
   if (subject.status !== "ACTIVE") return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };

+  if (input.enforceHonesty !== false) {
+    const acquisRows = await db
+      .select({
+        id: knowledgeAcquis.id,
+        subjectId: knowledgeAcquis.subjectId,
+        statement: knowledgeAcquis.statement,
+        status: knowledgeAcquis.status,
+        kind: knowledgeAcquis.kind,
+      })
+      .from(knowledgeAcquis)
+      .where(
+        and(
+          eq(knowledgeAcquis.ownerPilotId, pilotId),
+          eq(knowledgeAcquis.subjectId, subjectId),
+          eq(knowledgeAcquis.status, "CURRENT"),
+        ),
+      );
+    const contradictions = detectAcquisContradictions(acquisRows);
+    const sources =
+      input.qualifiedSources ??
+      (await Promise.all([
+        qualifyProvenanceSource(pilotId, input.provenance as ExtendedProvenance),
+      ]));
+    const honesty = assertHonestSynthesisInput({
+      summaryMarkdown: markdown,
+      contradictions,
+      sources,
+    });
+    if (!honesty.ok) {
+      return { status: "SKIPPED" as const, reason: honesty.reason };
+    }
+  }
+
   if (input.operationId) {
     const prior = (
       await db
@@ -480,6 +523,17 @@ export async function resolveOpenPointFactually(
     return { status: "AVAILABLE" as const, openPointId, alreadyResolved: true as const };
   }

+  // J-C05 — factual D4 resolve never mutates D6 restrictions. Snapshot ACTIVE count for callers/tests.
+  const activeRestrictionsBefore = await db
+    .select({ id: governanceRestrictions.id })
+    .from(governanceRestrictions)
+    .where(
+      and(
+        eq(governanceRestrictions.projectId, projectId),
+        eq(governanceRestrictions.status, "ACTIVE"),
+      ),
+    );
+
   if (input.operationId) {
     const prior = (
       await db
@@ -520,7 +574,24 @@ export async function resolveOpenPointFactually(
         provenanceJson: provenanceString(input.provenance),
         operationId: input.operationId ?? null,
       });
-      return { status: "AVAILABLE" as const, openPointId, eventId };
+      const activeRestrictionsAfter = await tx
+        .select({ id: governanceRestrictions.id })
+        .from(governanceRestrictions)
+        .where(
+          and(
+            eq(governanceRestrictions.projectId, projectId),
+            eq(governanceRestrictions.status, "ACTIVE"),
+          ),
+        );
+      if (activeRestrictionsAfter.length !== activeRestrictionsBefore.length) {
+        throw new Error("D6_RESTRICTION_MUTATION_FORBIDDEN");
+      }
+      return {
+        status: "AVAILABLE" as const,
+        openPointId,
+        eventId,
+        activeRestrictionIds: activeRestrictionsAfter.map((r) => r.id),
+      };
     });
   } catch (e) {
     return {
@@ -865,6 +936,7 @@ export async function getJournalProjection(pilotId: string, projectId: string) {
       objectRef: humanDecisions.objectRef,
       sourceKind: humanDecisions.sourceKind,
       sourceRef: humanDecisions.sourceRef,
+      supersedesDecisionId: humanDecisions.supersedesDecisionId,
       effectiveAt: humanDecisions.effectiveAt,
       createdAt: humanDecisions.createdAt,
     })
@@ -872,11 +944,21 @@ export async function getJournalProjection(pilotId: string, projectId: string) {
     .where(eq(humanDecisions.projectId, projectId))
     .orderBy(desc(humanDecisions.createdAt));

+  const supersededBy = new Map<string, string>();
+  for (const d of decisionRows) {
+    if (d.supersedesDecisionId) {
+      supersededBy.set(d.supersedesDecisionId, d.id);
+    }
+  }
+
   const decisions = [];
   for (const d of decisionRows) {
     const expl = await getCurrentDecisionExplanation(pilotId, projectId, d.id);
+    const applicable = d.state === "APPLICABLE" && !supersededBy.has(d.id);
     decisions.push({
       ...d,
+      applicable,
+      supersededByDecisionId: supersededBy.get(d.id) ?? null,
       explanation:
         expl.status === "AVAILABLE" && expl.explanation
           ? {
@@ -897,9 +979,85 @@ export async function getJournalProjection(pilotId: string, projectId: string) {
       originDecisionId: governanceRestrictions.originDecisionId,
     })
     .from(governanceRestrictions)
-    .where(
-      and(eq(governanceRestrictions.projectId, projectId), eq(governanceRestrictions.status, "ACTIVE")),
-    );
+    .where(eq(governanceRestrictions.projectId, projectId));
+
+  const contradictions = detectAcquisContradictions(
+    knowledge.acquis.map((a) => ({
+      id: a.id,
+      subjectId: a.subjectId,
+      statement: a.statement,
+      status: a.status,
+      kind: a.kind,
+    })),
+  );
+
+  const sourceLinks: Array<{
+    ownerKind: "acquis" | "open_point" | "summary";
+    ownerId: string;
+    subjectId: string | null;
+    sourceKind: string;
+    sourceId?: string;
+    documentId?: string;
+    revisionId?: string;
+    currentness: string;
+    detail: string;
+  }> = [];

-  return { knowledge, decisions, restrictions };
+  for (const a of knowledge.acquis) {
+    if (a.status !== "CURRENT") continue;
+    try {
+      const prov = JSON.parse(a.provenanceJson) as ExtendedProvenance;
+      const q = await qualifyProvenanceSource(pilotId, prov);
+      sourceLinks.push({
+        ownerKind: "acquis",
+        ownerId: a.id,
+        subjectId: a.subjectId,
+        sourceKind: q.sourceKind,
+        sourceId: q.sourceId,
+        documentId: q.documentId,
+        revisionId: q.revisionId,
+        currentness: q.currentness,
+        detail: q.detail,
+      });
+    } catch {
+      /* provenance JSON corrupt — omit rather than invent */
+    }
+  }
+  for (const o of knowledge.openPoints) {
+    try {
+      const prov = JSON.parse(o.provenanceJson) as ExtendedProvenance;
+      const q = await qualifyProvenanceSource(pilotId, prov);
+      sourceLinks.push({
+        ownerKind: "open_point",
+        ownerId: o.id,
+        subjectId: o.subjectId,
+        sourceKind: q.sourceKind,
+        sourceId: q.sourceId,
+        documentId: q.documentId,
+        revisionId: q.revisionId,
+        currentness: q.currentness,
+        detail: q.detail,
+      });
+    } catch {
+      /* omit */
+    }
+  }
+
+  return {
+    knowledge: {
+      ...knowledge,
+      acquis: knowledge.acquis.map((a) => ({
+        ...a,
+        provenanceJson: a.provenanceJson,
+      })),
+      openPoints: knowledge.openPoints.map((o) => ({
+        ...o,
+        provenanceJson: o.provenanceJson,
+      })),
+    },
+    decisions,
+    restrictions,
+    contradictions,
+    sourceLinks,
+  };
 }
\ No newline at end of file

```

### DIFF `projects/sfia-studio-next/web/src/domains/knowledge/service.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
index 26fecec7..533ec6a8 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
@@ -669,12 +669,14 @@ export async function listKnowledge(pilotId: string, preparationId: string) {
 export async function selectRelevantKnowledgeContext(
   pilotId: string,
   preparationId: string,
-  _userText: string,
+  userText: string,
   opts?: {
     limit?: number;
     preferredAcquisIds?: string[];
     preferredOpenPointIds?: string[];
     preferredSubjectIds?: string[];
+    /** When set, also scan project-scoped OPEN points for J-C04 reactivation. */
+    projectId?: string | null;
   },
 ) {
   const { subjects, acquis, openPoints } = await listKnowledge(pilotId, preparationId);
@@ -698,6 +700,26 @@ export async function selectRelevantKnowledgeContext(
   const pickedSubjects = preferThenRest(activeSubjects, prefS, 5);

   const snippets: string[] = [];
+  const reactivatedOpenPointIds: string[] = [];
+
+  if (opts?.projectId) {
+    const { selectOpenPointsForReactivation } = await import(
+      "@/domains/knowledge/journal-cognition"
+    );
+    const reactivation = await selectOpenPointsForReactivation(
+      pilotId,
+      opts.projectId,
+      userText,
+      { limit: 2 },
+    );
+    for (const c of reactivation.candidates) {
+      reactivatedOpenPointIds.push(c.openPointId);
+      snippets.push(
+        `POINT_OUVERT_REACTIVATE[${c.openPointId}/${c.score.toFixed(2)}] subject=${c.subjectId ?? "∅"}: ${c.statement.slice(0, 240)} | reason=${c.reason}`,
+      );
+    }
+  }
+
   for (const a of pickedAcquis) {
     const mark = prefA.has(a.id) ? "PREFERRED" : "AVAILABLE";
     snippets.push(
@@ -705,6 +727,7 @@ export async function selectRelevantKnowledgeContext(
     );
   }
   for (const o of pickedOpen) {
+    if (reactivatedOpenPointIds.includes(o.id)) continue;
     const mark = prefO.has(o.id) ? "PREFERRED" : "AVAILABLE";
     snippets.push(
       `POINT_OUVERT[${o.id}/${mark}] subject=${o.subjectId ?? "∅"}: ${o.statement.slice(0, 240)} | provenance=${o.provenanceJson.slice(0, 120)}`,
@@ -721,15 +744,22 @@ export async function selectRelevantKnowledgeContext(
       subjects: subjects.length,
       acquisCurrent: acquis.filter((a) => a.status === "CURRENT").length,
       openPoints: openPoints.filter((o) => o.status === "OPEN").length,
+      reactivatedOpenPoints: reactivatedOpenPointIds.length,
     },
     selectedAcquisIds: pickedAcquis.map((a) => a.id),
-    selectedOpenPointIds: pickedOpen.map((o) => o.id),
+    selectedOpenPointIds: [
+      ...reactivatedOpenPointIds,
+      ...pickedOpen.map((a) => a.id).filter((id) => !reactivatedOpenPointIds.includes(id)),
+    ],
+    reactivatedOpenPointIds,
     selectionMethod:
-      prefA.size || prefO.size || prefS.size
-        ? ("semantic-preferred-then-bounded" as const)
-        : ("bounded-resource-listing" as const),
+      reactivatedOpenPointIds.length > 0
+        ? ("reactivation-then-preferred-bounded" as const)
+        : prefA.size || prefO.size || prefS.size
+          ? ("semantic-preferred-then-bounded" as const)
+          : ("bounded-resource-listing" as const),
     selectionLimit:
-      "RG-KNOW-011: ids préférés Nora d'abord, sinon listing borné droits/état — pas de scoring lexical métier.",
+      "RG-KNOW-011 + J-C04: réactivation contextuelle des points ouverts projet, puis ids préférés / listing borné — pas de clôture par silence.",
   };
 }


```

### DIFF `projects/sfia-studio-next/web/src/domains/conversation/service.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 4cfc23d6..f64156eb 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -919,7 +919,9 @@ export async function postUserMessageAndNora(

   // F4: pre-Nora context ONLY feeds generation. Post-qual preferred ids are resume hints,
   // never claimed as having nourished the reply already produced.
-  const knowledgeForNora = await selectRelevantKnowledgeContext(pilotId, preparationId, content);
+  const knowledgeForNora = await selectRelevantKnowledgeContext(pilotId, preparationId, content, {
+    projectId: ctx.project?.id ?? null,
+  });
   let knowledgeResumeHints: Awaited<ReturnType<typeof selectRelevantKnowledgeContext>> | null =
     null;


```

### DIFF `projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
index e3321554..5aa093b8 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
@@ -1,6 +1,6 @@
 "use client";

-import { useMemo, useState } from "react";
+import { useEffect, useMemo, useState } from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";

 export type JournalSubject = {
@@ -39,6 +39,8 @@ export type JournalDecision = {
   objectRef: string;
   effectiveAt: string;
   createdAt: string;
+  applicable?: boolean;
+  supersededByDecisionId?: string | null;
   explanation?: {
     revisionNumber: number;
     explanationMarkdown: string;
@@ -54,6 +56,37 @@ export type JournalRestriction = {
   originDecisionId: string | null;
 };

+export type JournalSourceLink = {
+  ownerKind: "acquis" | "open_point" | "summary";
+  ownerId: string;
+  subjectId: string | null;
+  sourceKind: string;
+  sourceId?: string;
+  documentId?: string;
+  revisionId?: string;
+  currentness: string;
+  detail: string;
+};
+
+export type JournalContradiction = {
+  leftAcquisId: string;
+  rightAcquisId: string;
+  subjectId: string | null;
+  status: "UNRESOLVED";
+  leftStatement: string;
+  rightStatement: string;
+  reason: string;
+};
+
+export type JournalNavState = {
+  tab: "subjects" | "decisions";
+  search: string;
+  openPointsOnly: boolean;
+  selectedSubjectId: string | null;
+  selectedDecisionId: string | null;
+  layout: "full" | "split" | "enlarged";
+};
+
 type Tab = "subjects" | "decisions";
 type LayoutMode = "full" | "split" | "enlarged";

@@ -96,25 +129,29 @@ function SubjectTreeNodes(props: {
   openPointsOnly: boolean;
   openBySubject: Map<string, number>;
   search: string;
+  matchBySubject: Map<string, string>;
   onSelect: (id: string) => void;
 }) {
   const nodes = props.tree.get(props.parentId) ?? [];
   if (nodes.length === 0) return null;
+  const q = props.search.trim().toLowerCase();
+  const nodeVisible = (s: JournalSubject): boolean => {
+    const openCount = props.openBySubject.get(s.id) ?? 0;
+    if (props.openPointsOnly && openCount === 0) {
+      const childOpen = (props.tree.get(s.id) ?? []).some((c) => nodeVisible(c));
+      if (!childOpen) return false;
+    }
+    if (!q) return true;
+    if (props.matchBySubject.has(s.id)) return true;
+    const children = props.tree.get(s.id) ?? [];
+    return children.some((c) => nodeVisible(c));
+  };
   return (
   <ul className="journal-tree-level" data-depth={props.depth}>
       {nodes.map((s) => {
+        if (!nodeVisible(s)) return null;
         const openCount = props.openBySubject.get(s.id) ?? 0;
-        if (props.openPointsOnly && openCount === 0) {
-          const childOpen = (props.tree.get(s.id) ?? []).some(
-            (c) => (props.openBySubject.get(c.id) ?? 0) > 0,
-          );
-          if (!childOpen) return null;
-        }
-        const hay = `${s.title} ${s.summary?.summaryMarkdown ?? ""}`.toLowerCase();
-        if (props.search.trim() && !hay.includes(props.search.trim().toLowerCase())) {
-          const childVisible = (props.tree.get(s.id) ?? []).length > 0;
-          if (!childVisible) return null;
-        }
+        const matchReason = props.matchBySubject.get(s.id);
         return (
           <li key={s.id}>
             <button
@@ -125,6 +162,11 @@ function SubjectTreeNodes(props: {
               onClick={() => props.onSelect(s.id)}
             >
               <span className="journal-tree-title">{s.title}</span>
+              {matchReason ? (
+                <span className="fig-tag fig-tag-muted" data-testid={`journal-match-${s.id}`}>
+                  {matchReason}
+                </span>
+              ) : null}
               {openCount > 0 ? (
                 <span className="fig-tag fig-tag-warn" data-testid={`journal-open-count-${s.id}`}>
                   {openCount}
@@ -139,6 +181,7 @@ function SubjectTreeNodes(props: {
               openPointsOnly={props.openPointsOnly}
               openBySubject={props.openBySubject}
               search={props.search}
+              matchBySubject={props.matchBySubject}
               onSelect={props.onSelect}
             />
           </li>
@@ -154,21 +197,46 @@ export function ProjectJournal(props: {
   openPoints: JournalOpenPoint[];
   decisions?: JournalDecision[];
   restrictions?: JournalRestriction[];
+  sourceLinks?: JournalSourceLink[];
+  contradictions?: JournalContradiction[];
   frameId?: string;
+  initialNav?: JournalNavState | null;
+  onNavChange?: (nav: JournalNavState) => void;
+  onOpenMessage?: (messageId: string) => void;
+  onOpenDocument?: (documentId: string, revisionId?: string | null) => void;
   onBackToThread?: () => void;
   /** Sas-only mutation affordance — project Journal stays read-oriented. */
   onRenameSubject?: (id: string, title: string) => void;
   splitSlot?: React.ReactNode;
 }) {
-  const [tab, setTab] = useState<Tab>("subjects");
-  const [search, setSearch] = useState("");
-  const [openPointsOnly, setOpenPointsOnly] = useState(false);
-  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
-  const [selectedDecisionId, setSelectedDecisionId] = useState<string | null>(null);
-  const [layout, setLayout] = useState<LayoutMode>("full");
+  const [tab, setTab] = useState<Tab>(props.initialNav?.tab ?? "subjects");
+  const [search, setSearch] = useState(props.initialNav?.search ?? "");
+  const [openPointsOnly, setOpenPointsOnly] = useState(props.initialNav?.openPointsOnly ?? false);
+  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(
+    props.initialNav?.selectedSubjectId ?? null,
+  );
+  const [selectedDecisionId, setSelectedDecisionId] = useState<string | null>(
+    props.initialNav?.selectedDecisionId ?? null,
+  );
+  const [layout, setLayout] = useState<LayoutMode>(props.initialNav?.layout ?? "full");

   const decisions = useMemo(() => props.decisions ?? [], [props.decisions]);
   const restrictions = props.restrictions ?? [];
+  const sourceLinks = props.sourceLinks ?? [];
+  const contradictions = props.contradictions ?? [];
+
+  useEffect(() => {
+    props.onNavChange?.({
+      tab,
+      search,
+      openPointsOnly,
+      selectedSubjectId,
+      selectedDecisionId,
+      layout,
+    });
+    // Intentionally sync outward on nav field changes only.
+    // eslint-disable-next-line react-hooks/exhaustive-deps
+  }, [tab, search, openPointsOnly, selectedSubjectId, selectedDecisionId, layout]);

   const tree = useMemo(() => buildSubjectTree(props.subjects), [props.subjects]);
   const byId = useMemo(
@@ -185,6 +253,28 @@ export function ProjectJournal(props: {
     return map;
   }, [props.openPoints]);

+  /** J-C08 — match title, summary, acquis and open points (reason surfaced on node). */
+  const matchBySubject = useMemo(() => {
+    const q = search.trim().toLowerCase();
+    const map = new Map<string, string>();
+    if (!q) return map;
+    for (const s of props.subjects) {
+      if (s.title.toLowerCase().includes(q)) map.set(s.id, "titre");
+      else if ((s.summary?.summaryMarkdown ?? "").toLowerCase().includes(q)) map.set(s.id, "synthèse");
+    }
+    for (const a of props.acquis) {
+      if (a.status !== "CURRENT" || !a.subjectId) continue;
+      if (a.statement.toLowerCase().includes(q) && !map.has(a.subjectId)) map.set(a.subjectId, "acquis");
+    }
+    for (const o of props.openPoints) {
+      if (o.status !== "OPEN" || !o.subjectId) continue;
+      if (o.statement.toLowerCase().includes(q) && !map.has(o.subjectId)) {
+        map.set(o.subjectId, "point ouvert");
+      }
+    }
+    return map;
+  }, [search, props.subjects, props.acquis, props.openPoints]);
+
   const currentAcquis = props.acquis.filter((a) => a.status === "CURRENT");
   const openPoints = props.openPoints.filter((o) => o.status === "OPEN");
   const emptySubjects =
@@ -198,6 +288,14 @@ export function ProjectJournal(props: {
     ? openPoints.filter((o) => o.subjectId === selectedSubjectId)
     : [];
   const childSubjects = selectedSubjectId ? tree.get(selectedSubjectId) ?? [] : [];
+  const selectedSources = selectedSubjectId
+    ? sourceLinks.filter((s) => s.subjectId === selectedSubjectId)
+    : [];
+  const selectedContradictions = selectedSubjectId
+    ? contradictions.filter((c) => c.subjectId === selectedSubjectId)
+    : [];
+  const activeRestrictions = restrictions.filter((r) => r.status === "ACTIVE");
+  const historicalRestrictions = restrictions.filter((r) => r.status !== "ACTIVE");

   const selectedDecision =
     selectedDecisionId != null
@@ -233,9 +331,7 @@ export function ProjectJournal(props: {
   };

   const showSearchEmpty =
-    tab === "subjects" &&
-    search.trim().length > 0 &&
-    !props.subjects.some((s) => s.title.toLowerCase().includes(search.trim().toLowerCase()));
+    tab === "subjects" && search.trim().length > 0 && matchBySubject.size === 0;

   const showDecisionSearchEmpty =
     tab === "decisions" && search.trim().length > 0 && filteredDecisions.length === 0;
@@ -347,6 +443,7 @@ export function ProjectJournal(props: {
                     openPointsOnly={openPointsOnly}
                     openBySubject={openBySubject}
                     search={search}
+                    matchBySubject={matchBySubject}
                     onSelect={pickSubject}
                   />
                 )}
@@ -450,6 +547,39 @@ export function ProjectJournal(props: {
                         ))
                       )}
                     </section>
+                    {selectedContradictions.length > 0 ? (
+                      <section className="space-y-2" data-testid="journal-contradictions">
+                        <h4 className="text-sm font-medium">Contradictions non résolues</h4>
+                        {selectedContradictions.map((c) => (
+                          <div
+                            key={`${c.leftAcquisId}-${c.rightAcquisId}`}
+                            className="fig-msg text-sm"
+                            data-testid={`journal-contradiction-${c.leftAcquisId}`}
+                          >
+                            <span className="fig-tag fig-tag-warn mr-2">UNRESOLVED</span>
+                            {c.reason}
+                            <p className="text-xs muted mt-1">A · {c.leftStatement.slice(0, 160)}</p>
+                            <p className="text-xs muted">B · {c.rightStatement.slice(0, 160)}</p>
+                          </div>
+                        ))}
+                      </section>
+                    ) : null}
+                    {selectedSources.length > 0 ? (
+                      <section className="space-y-2" data-testid="journal-sources">
+                        <h4 className="text-sm font-medium">Sources</h4>
+                        <ul className="journal-source-list">
+                          {selectedSources.map((s) => (
+                            <li key={`${s.ownerKind}-${s.ownerId}-${s.sourceId ?? s.revisionId ?? s.documentId}`}>
+                              <SourceChip
+                                link={s}
+                                onOpenMessage={props.onOpenMessage}
+                                onOpenDocument={props.onOpenDocument}
+                              />
+                            </li>
+                          ))}
+                        </ul>
+                      </section>
+                    ) : null}
                   </div>
                 </>
               ) : (
@@ -473,8 +603,13 @@ export function ProjectJournal(props: {
                   <section className="space-y-2">
                     <h4 className="text-sm font-medium">Choix retenu (D6)</h4>
                     <p className="text-sm">{selectedDecision.statement || "—"}</p>
-                    <p className="text-xs muted">
-                      {selectedDecision.scope} · {selectedDecision.state} · effet{" "}
+                    <p className="text-xs muted" data-testid="journal-decision-applicability">
+                      {selectedDecision.scope} · état={selectedDecision.state}
+                      {selectedDecision.applicable === false ? " · non applicable / historique" : " · applicable"}
+                      {selectedDecision.supersededByDecisionId
+                        ? ` · remplacé par ${selectedDecision.supersededByDecisionId}`
+                        : ""}
+                      {" · effet "}
                       {new Date(selectedDecision.effectiveAt).toLocaleString("fr-FR")}
                     </p>
                   </section>
@@ -495,11 +630,11 @@ export function ProjectJournal(props: {
                       </p>
                     )}
                   </section>
-                  {restrictions.length > 0 ? (
+                  {activeRestrictions.length > 0 ? (
                     <section className="space-y-2">
                       <h4 className="text-sm font-medium">Restrictions D6 actives</h4>
                       <ul className="journal-restriction-list">
-                        {restrictions.map((r) => (
+                        {activeRestrictions.map((r) => (
                           <li key={r.id} className="text-xs muted" data-testid={`journal-restriction-${r.id}`}>
                             {r.targetKind} · {r.targetRef} ({r.status})
                           </li>
@@ -507,6 +642,18 @@ export function ProjectJournal(props: {
                       </ul>
                     </section>
                   ) : null}
+                  {historicalRestrictions.length > 0 ? (
+                    <section className="space-y-2">
+                      <h4 className="text-sm font-medium">Restrictions historiques</h4>
+                      <ul className="journal-restriction-list">
+                        {historicalRestrictions.map((r) => (
+                          <li key={r.id} className="text-xs muted" data-testid={`journal-restriction-hist-${r.id}`}>
+                            {r.targetKind} · {r.targetRef} ({r.status})
+                          </li>
+                        ))}
+                      </ul>
+                    </section>
+                  ) : null}
                 </div>
               </>
             ) : (
@@ -550,6 +697,35 @@ function JournalLayoutActions(props: {
   );
 }

+function SourceChip(props: {
+  link: JournalSourceLink;
+  onOpenMessage?: (messageId: string) => void;
+  onOpenDocument?: (documentId: string, revisionId?: string | null) => void;
+}) {
+  const s = props.link;
+  const label = `${s.sourceKind} · ${s.currentness}`;
+  const canMessage = s.sourceKind === "message" && Boolean(s.sourceId) && props.onOpenMessage;
+  const docId = s.documentId ?? (s.sourceKind === "document" ? s.sourceId : undefined);
+  const canDoc = Boolean(docId) && Boolean(props.onOpenDocument);
+  return (
+    <button
+      type="button"
+      className="btn secondary journal-source-chip"
+      data-testid={`journal-source-${s.ownerId}`}
+      data-currentness={s.currentness}
+      disabled={!canMessage && !canDoc}
+      title={s.detail}
+      onClick={() => {
+        if (canMessage && s.sourceId) props.onOpenMessage?.(s.sourceId);
+        else if (canDoc && docId) props.onOpenDocument?.(docId, s.revisionId ?? null);
+      }}
+    >
+      <span className="font-medium text-xs">{label}</span>
+      <span className="text-xs muted block">{s.detail.slice(0, 120)}</span>
+    </button>
+  );
+}
+
 function DecisionList(props: {
   decisions: JournalDecision[];
   selectedId: string | null;
@@ -582,6 +758,11 @@ function DecisionList(props: {
           >
             <span className="font-medium text-sm">{d.kind}</span>
             <span className="fig-tag fig-tag-muted">{d.state}</span>
+            {d.applicable === false ? (
+              <span className="fig-tag fig-tag-warn">historique</span>
+            ) : (
+              <span className="fig-tag fig-tag-ok">applicable</span>
+            )}
             <span className="text-xs muted block mt-1">{d.statement.slice(0, 120)}</span>
           </button>
         </li>

```

### DIFF `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index 1a98c4b6..14d68846 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -42,6 +42,10 @@ export function NoraConversation(props: {
   choiceFrozen?: boolean;
   forceStickToken?: number;
   layoutMode?: "normal" | "split" | "enlarged";
+  /** J-C13 — scroll/highlight exact message without sending. */
+  focusMessageId?: string | null;
+  onFocusMessageHandled?: () => void;
+  focusStatus?: string | null;
 }) {
   const n = props.messages.length;
   const frame = n === 0 ? "161:216" : n <= 2 ? "161:288" : "94:214";
@@ -73,6 +77,28 @@ export function NoraConversation(props: {
     el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
   }, [props.draft]);

+  useEffect(() => {
+    const targetId = props.focusMessageId?.trim();
+    if (!targetId) return;
+    const root = threadRef.current;
+    if (!root) return;
+    const node = root.querySelector(`[data-message-id="${CSS.escape(targetId)}"]`) as HTMLElement | null;
+    if (!node) {
+      props.onFocusMessageHandled?.();
+      return;
+    }
+    node.scrollIntoView({ block: "center", behavior: "smooth" });
+    node.setAttribute("data-journal-focus", "1");
+    node.classList.add("is-journal-focus");
+    const t = window.setTimeout(() => {
+      node.classList.remove("is-journal-focus");
+      node.removeAttribute("data-journal-focus");
+      props.onFocusMessageHandled?.();
+    }, 2400);
+    return () => window.clearTimeout(t);
+    // eslint-disable-next-line react-hooks/exhaustive-deps
+  }, [props.focusMessageId, props.messages.length]);
+
   const projectionByMessage = new Map(
     (props.projections ?? []).map((p) => [p.messageId ?? "", p]),
   );
@@ -103,6 +129,11 @@ export function NoraConversation(props: {
           {props.unresolvedPending ? (
             <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
           ) : null}
+          {props.focusStatus ? (
+            <span className="fig-tag fig-tag-warn" data-testid="nora-focus-status">
+              {props.focusStatus}
+            </span>
+          ) : null}
           {newBelow ? (
             <button
               type="button"

```

### DIFF `projects/sfia-studio-next/web/src/components/figma/tokens.css`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index f61f7631..494dbde7 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -3697,3 +3697,21 @@
   padding-left: 1.2rem;
   margin: 0;
 }
+.journal-source-list {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 8px;
+}
+.journal-source-chip {
+  width: 100%;
+  text-align: left;
+}
+.fig-msg.is-journal-focus,
+.fig-msg[data-journal-focus="1"] {
+  outline: 2px solid var(--fig-accent-soft);
+  outline-offset: 2px;
+  background: var(--fig-accent-bg);
+}

```

### DIFF `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 40cb6a55..4f1b96b0 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -8,8 +8,11 @@ import { NoraConversation } from "@/components/figma/NoraConversation";
 import { TravailViewer, type TravailViewerResource } from "@/components/figma/TravailViewer";
 import {
   ProjectJournal,
+  type JournalContradiction,
   type JournalDecision,
+  type JournalNavState,
   type JournalRestriction,
+  type JournalSourceLink,
 } from "@/components/figma/ProjectJournal";
 import { ProjectOverview } from "@/components/figma/ProjectOverview";
 import {
@@ -150,6 +153,11 @@ export default function ProjectPage() {
   const [knowledge, setKnowledge] = useState<Knowledge | null>(null);
   const [journalDecisions, setJournalDecisions] = useState<JournalDecision[]>([]);
   const [journalRestrictions, setJournalRestrictions] = useState<JournalRestriction[]>([]);
+  const [journalSources, setJournalSources] = useState<JournalSourceLink[]>([]);
+  const [journalContradictions, setJournalContradictions] = useState<JournalContradiction[]>([]);
+  const [journalNav, setJournalNav] = useState<JournalNavState | null>(null);
+  const [focusMessageId, setFocusMessageId] = useState<string | null>(null);
+  const [focusStatus, setFocusStatus] = useState<string | null>(null);
   const [preparationId, setPreparationId] = useState<string | null>(null);
   const [projectName, setProjectName] = useState<string | null>(null);
   const [statusHint, setStatusHint] = useState("Chargement…");
@@ -231,6 +239,7 @@ export default function ProjectPage() {
       const res = await fetch(`/api/projects/${params.projectId}/journal`);
       if (!res.ok || cancelled) return;
       const body = (await res.json()) as {
+        knowledge?: Knowledge;
         decisions?: Array<{
           id: string;
           kind: string;
@@ -240,11 +249,16 @@ export default function ProjectPage() {
           objectRef: string;
           effectiveAt: string;
           createdAt: string;
+          applicable?: boolean;
+          supersededByDecisionId?: string | null;
           explanation?: JournalDecision["explanation"];
         }>;
         restrictions?: JournalRestriction[];
+        sourceLinks?: JournalSourceLink[];
+        contradictions?: JournalContradiction[];
       };
       if (cancelled) return;
+      if (body.knowledge) setKnowledge(body.knowledge);
       setJournalDecisions(
         (body.decisions ?? []).map((d) => ({
           id: d.id,
@@ -253,12 +267,22 @@ export default function ProjectPage() {
           scope: d.scope,
           statement: d.statement,
           objectRef: d.objectRef,
-          effectiveAt: d.effectiveAt,
-          createdAt: d.createdAt,
+          effectiveAt:
+            typeof d.effectiveAt === "string"
+              ? d.effectiveAt
+              : new Date(d.effectiveAt as unknown as string).toISOString(),
+          createdAt:
+            typeof d.createdAt === "string"
+              ? d.createdAt
+              : new Date(d.createdAt as unknown as string).toISOString(),
+          applicable: d.applicable,
+          supersededByDecisionId: d.supersededByDecisionId ?? null,
           explanation: d.explanation ?? null,
         })),
       );
       setJournalRestrictions(body.restrictions ?? []);
+      setJournalSources(body.sourceLinks ?? []);
+      setJournalContradictions(body.contradictions ?? []);
     })();
     return () => {
       cancelled = true;
@@ -1689,6 +1713,11 @@ export default function ProjectPage() {
           choiceFrozen={choiceFrozen}
           forceStickToken={forceStickToken}
           layoutMode={travailLayout}
+          focusMessageId={focusMessageId}
+          focusStatus={focusStatus}
+          onFocusMessageHandled={() => {
+            setFocusMessageId(null);
+          }}
           onDraft={(v) => {
             setDraft(v);
             persistDraft(v);
@@ -1981,6 +2010,71 @@ export default function ProjectPage() {
           openPoints={knowledge?.openPoints ?? []}
           decisions={journalDecisions}
           restrictions={journalRestrictions}
+          sourceLinks={journalSources}
+          contradictions={journalContradictions}
+          initialNav={journalNav}
+          onNavChange={setJournalNav}
+          onOpenMessage={(messageId) => {
+            void (async () => {
+              setFocusStatus(null);
+              const local = messages.find((m) => m.id === messageId);
+              if (!local) {
+                const res = await fetch(
+                  `/api/projects/${params.projectId}/messages/${encodeURIComponent(messageId)}`,
+                );
+                const body = (await res.json().catch(() => ({}))) as {
+                  status?: string;
+                  reason?: string;
+                  message?: {
+                    messageId: string;
+                    role: string;
+                    content: string;
+                    status: string;
+                  };
+                };
+                if (!res.ok || !body.message) {
+                  setFocusStatus(
+                    body.reason ?? "Message introuvable ou accès refusé — retour Journal possible.",
+                  );
+                  selectSurface("travail");
+                  return;
+                }
+                setMessages((prev) => {
+                  if (prev.some((m) => m.id === body.message!.messageId)) return prev;
+                  return [
+                    ...prev,
+                    {
+                      id: body.message!.messageId,
+                      role: body.message!.role,
+                      content: body.message!.content,
+                      status: body.message!.status,
+                    },
+                  ];
+                });
+              }
+              // Preserve draft + journalNav; never auto-send.
+              setFocusMessageId(messageId);
+              selectSurface("travail");
+            })();
+          }}
+          onOpenDocument={(documentId, revisionId) => {
+            void fetchDocumentViewerViaD4({
+              documentId,
+              titleHint:
+                documents.find((d) => d.document.id === documentId)?.document.title ?? "Document",
+              revisionId: revisionId ?? null,
+              versionSource: revisionId ? "exact" : "current",
+              seq: ++viewerRequestSeqRef.current,
+              projectIdAtStart: params.projectId,
+            });
+            selectSurface("document");
+            // Keep inspect aligned when opening from Journal (J-C14).
+            const match = documents.find((d) => d.document.id === documentId);
+            if (match) {
+              setInspect(match);
+              syncSurfaceUrl("document", documentId, "push");
+            }
+          }}
           onBackToThread={() => selectSurface("travail")}
         />
       ) : null}

```

### DIFF `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/route.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/route.ts
index 6f955b67..e15548ca 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/route.ts
@@ -8,7 +8,47 @@ export async function GET(_: Request, ctx: { params: Promise<{ projectId: string
     const session = await requireStudioSession();
     const { projectId } = await ctx.params;
     const projection = await getJournalProjection(session.pilotId, projectId);
-    return NextResponse.json(projection);
+    const k = projection.knowledge;
+    return NextResponse.json({
+      ...projection,
+      knowledge: {
+        preparationIds: k.preparationIds,
+        subjects: k.subjects.map((s) => ({
+          id: s.id,
+          title: s.title,
+          status: s.status,
+          parentSubjectId: s.parentSubjectId,
+          originatedFromSubjectId: s.originatedFromSubjectId,
+          summary: k.summariesBySubjectId[s.id]
+            ? {
+                revisionNumber: k.summariesBySubjectId[s.id]!.revisionNumber,
+                summaryMarkdown: k.summariesBySubjectId[s.id]!.summaryMarkdown,
+              }
+            : null,
+        })),
+        acquis: k.acquis.map((a) => ({
+          id: a.id,
+          kind: a.kind,
+          statement: a.statement,
+          status: a.status,
+          subjectId: a.subjectId,
+          provenanceJson: a.provenanceJson,
+        })),
+        openPoints: k.openPoints.map((o) => ({
+          id: o.id,
+          statement: o.statement,
+          status: o.status,
+          subjectId: o.subjectId,
+          provenanceJson: o.provenanceJson,
+        })),
+      },
+      decisions: projection.decisions.map((d) => ({
+        ...d,
+        effectiveAt:
+          d.effectiveAt instanceof Date ? d.effectiveAt.toISOString() : d.effectiveAt,
+        createdAt: d.createdAt instanceof Date ? d.createdAt.toISOString() : d.createdAt,
+      })),
+    });
   } catch (e) {
     const mapped = studioErrorResponse(e);
     return NextResponse.json(mapped.body, { status: mapped.status });

```

### DIFF `projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts`
```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
index 0bc5e2b7..20ebe898 100644
--- a/projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
@@ -4,7 +4,13 @@ config({ path: ".env.local" });

 import { eq } from "drizzle-orm";
 import { db } from "@/db/client";
-import { humanDecisions, knowledgeOpenPoints, pilots, preparations } from "@/db/schema";
+import {
+  governanceRestrictions,
+  humanDecisions,
+  knowledgeOpenPoints,
+  pilots,
+  preparations,
+} from "@/db/schema";
 import { newId } from "@/lib/ids";
 import { capitalizeAcquis, ensureSubject, openPoint } from "@/domains/knowledge/service";
 import {
@@ -12,6 +18,7 @@ import {
   appendSubjectSummaryRevision,
   getCurrentDecisionExplanation,
   getCurrentSubjectSummary,
+  getJournalProjection,
   listProjectKnowledge,
   reopenOpenPoint,
   reparentSubject,
@@ -19,7 +26,15 @@ import {
   searchJournalDecisions,
   searchJournalSubjects,
 } from "@/domains/knowledge/journal";
-import { insertHumanDecision, markDecisionState } from "@/domains/decisions/service";
+import {
+  markOpenPointReactivated,
+  selectOpenPointsForReactivation,
+} from "@/domains/knowledge/journal-cognition";
+import {
+  insertHumanDecision,
+  insertRestriction,
+  markDecisionState,
+} from "@/domains/decisions/service";
 import { createProjectCommand } from "@/domains/preparation/create-project";
 import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";

@@ -189,4 +204,147 @@ describe("Journal D4 revisions (PG)", () => {
     const act = (await db.select().from(humanDecisions).where(eq(humanDecisions.id, decisionId)))[0];
     expect(act.state).toBe("REVISED");
   });
+
+  it("J-C04 reactivation selects intent-matching OPEN points with cooldown", async () => {
+    const pilotId = await seedPilot("J-react");
+    const { prep, projectId } = await seedLinkedProject(pilotId, "Réactivation");
+    const subj = await ensureSubject(pilotId, prep.id, "GitHub");
+    const pt = await openPoint(pilotId, prep.id, {
+      statement: "Quelle preuve pour la connexion GitHub du dépôt officiel?",
+      subjectId: subj.subjectId,
+      provenance: { sourceKind: "message", sourceId: "m-react-1" },
+    });
+    expect(pt.status).toBe("AVAILABLE");
+    const first = await selectOpenPointsForReactivation(
+      pilotId,
+      projectId,
+      "On reparle de la preuve GitHub pour avancer",
+    );
+    expect(first.candidates.some((c) => c.openPointId === pt.openPointId)).toBe(true);
+
+    const marked = await markOpenPointReactivated(pilotId, projectId, pt.openPointId!, {
+      reason: "réintroduit dans le contexte courant",
+      provenance: { sourceKind: "nora", generationId: "gen-r1" },
+      operationId: "react-op-1",
+    });
+    expect(marked.status).toBe("AVAILABLE");
+
+    const cooled = await selectOpenPointsForReactivation(
+      pilotId,
+      projectId,
+      "preuve GitHub encore pertinente",
+      { now: new Date() },
+    );
+    expect(cooled.candidates.some((c) => c.openPointId === pt.openPointId)).toBe(false);
+  });
+
+  it("J-C05 factual resolve leaves ACTIVE D6 restriction untouched", async () => {
+    const pilotId = await seedPilot("J-d6-restr");
+    const { prep, projectId } = await seedLinkedProject(pilotId, "Restriction");
+    const decisionId = await db.transaction(async (tx) =>
+      insertHumanDecision(tx, {
+        projectId,
+        pilotId,
+        sourceKind: "pilotage",
+        sourceRef: "cmd-restr",
+        kind: "RISK_ACCEPTANCE",
+        objectRef: "risk",
+        statement: "Risque accepté sous restriction ACTIVE",
+      }),
+    );
+    const restrictionId = await db.transaction(async (tx) =>
+      insertRestriction(tx, {
+        projectId,
+        targetKind: "ACTION",
+        targetRef: "publish",
+        originDecisionId: decisionId,
+      }),
+    );
+    const subj = await ensureSubject(pilotId, prep.id, "Publication");
+    const pt = await openPoint(pilotId, prep.id, {
+      statement: "Le détail technique de publication est-il documenté?",
+      subjectId: subj.subjectId,
+      provenance: { sourceKind: "message", sourceId: "m-restr-1" },
+    });
+    const resolved = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
+      reason: "Document technique trouvé",
+      provenance: { sourceKind: "document", sourceId: "doc-tech-1", epistemic: "established" },
+      operationId: "resolve-restr-1",
+    });
+    expect(resolved.status).toBe("AVAILABLE");
+    const restr = (
+      await db
+        .select()
+        .from(governanceRestrictions)
+        .where(eq(governanceRestrictions.id, restrictionId))
+    )[0];
+    expect(restr.status).toBe("ACTIVE");
+  });
+
+  it("J-C06 honesty gate skips overclaiming summary when contradiction open", async () => {
+    const pilotId = await seedPilot("J-honest");
+    const { prep, projectId } = await seedLinkedProject(pilotId, "Honnêteté");
+    const subj = await ensureSubject(pilotId, prep.id, "Connexion");
+    await capitalizeAcquis(pilotId, prep.id, {
+      statement: "La connexion GitHub est établie pour ce projet durable.",
+      kind: "HYPOTHESIS",
+      subjectId: subj.subjectId,
+      provenance: { sourceKind: "message", sourceId: "m-h1", epistemic: "observed" },
+    });
+    await capitalizeAcquis(pilotId, prep.id, {
+      statement: "La connexion GitHub n'est pas établie pour ce projet durable.",
+      kind: "HYPOTHESIS",
+      subjectId: subj.subjectId,
+      provenance: { sourceKind: "message", sourceId: "m-h2", epistemic: "observed" },
+    });
+    const skipped = await appendSubjectSummaryRevision(pilotId, projectId, subj.subjectId!, {
+      summaryMarkdown: "Il est établi que la connexion GitHub fonctionne sans réserve.",
+      provenance: { sourceKind: "nora", generationId: "g-h1", epistemic: "established" },
+      operationId: "sum-overclaim",
+    });
+    expect(skipped.status).toBe("SKIPPED");
+
+    const ok = await appendSubjectSummaryRevision(pilotId, projectId, subj.subjectId!, {
+      summaryMarkdown:
+        "Contradiction ouverte sur la connexion GitHub — incertitude à clarifier avant conclusion.",
+      provenance: { sourceKind: "nora", generationId: "g-h2", epistemic: "limited" },
+      operationId: "sum-honest",
+    });
+    expect(ok.status).toBe("AVAILABLE");
+  });
+
+  it("J-C07 / J-C09 projection isolates foreign project and exposes applicability", async () => {
+    const pilotA = await seedPilot("J-iso-a");
+    const pilotB = await seedPilot("J-iso-b");
+    const a = await seedLinkedProject(pilotA, "Projet A iso");
+    const b = await seedLinkedProject(pilotB, "Projet B iso");
+    const subj = await ensureSubject(pilotA, a.prep.id, "Secret A");
+    await capitalizeAcquis(pilotA, a.prep.id, {
+      statement: "Acquis privé du projet A jamais visible ailleurs.",
+      kind: "HYPOTHESIS",
+      subjectId: subj.subjectId,
+      provenance: { sourceKind: "pilot", epistemic: "observed" },
+    });
+    await expect(listProjectKnowledge(pilotB, a.projectId)).rejects.toMatchObject({
+      code: "NOT_FOUND",
+    });
+    const other = await listProjectKnowledge(pilotB, b.projectId);
+    expect(other.subjects.every((s) => s.title !== "Secret A")).toBe(true);
+
+    const decisionId = await db.transaction(async (tx) =>
+      insertHumanDecision(tx, {
+        projectId: a.projectId,
+        pilotId: pilotA,
+        sourceKind: "pilotage",
+        sourceRef: "cmd-iso",
+        kind: "TRAJECTORY",
+        objectRef: "traj",
+        statement: "Décision applicable du projet A",
+      }),
+    );
+    const proj = await getJournalProjection(pilotA, a.projectId);
+    const row = proj.decisions.find((d) => d.id === decisionId);
+    expect(row?.applicable).toBe(true);
+    expect(row?.state).toBe("APPLICABLE");
+  });
 });
\ No newline at end of file

```

### DIFF `projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md`
```diff
diff --git a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
index 4d24840c..521f69e4 100644
--- a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
+++ b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
@@ -2,44 +2,66 @@

 | Métadonnée | Valeur |
 |---|---|
-| Date | 19/11/2026 |
+| Date | 19/11/2026 (cycle de complétude) |
 | Branche | `sfia/next-journal-delivery-20261119` |
-| Base docs | `6879d34e` (contrats Journal v1.0 + technique v0.3) |
+| Base docs (cycle 1) | `6879d34e` |
+| Matrice docs distante (lue, non fusionnée) | `b02192e5` |
 | Base `main` | `d3d199ad` |
 | Versioning | `NO RELEASE` / `0.0.0-dev` |
-| Lane | DEV only (`127.0.0.1:5433`) — RECETTE/STABLE non mutées |
+| Lane | DEV / e2e isolé (`127.0.0.1:5433`, `sfia_next_e2e`) — RECETTE/STABLE non mutées |

-## Réalisé
+## Cycle 1 (conservé)

-### D4 (§16)
-- Migration additive `014_journal_d4_revisions.sql` : `knowledge_subject_summary_revisions`, `knowledge_decision_explanation_revisions`, `knowledge_open_point_events`.
-- Domaine `domains/knowledge/journal.ts` : listes projet-scopées, révisions immuables, résolution factuelle OPEN/RESOLVED, reparent anti-cycle, recherches Sujets/Décisions.
-- `ensureSubject` : réutilisation de titre limitée au même parent (homonymes sous parents distincts autorisés).
+- Migration additive `014_journal_d4_revisions.sql`
+- `domains/knowledge/journal.ts` : révisions, resolve/reopen, reparent, recherches
+- `ensureSubject` parent-aware
+- `GET /api/projects/[projectId]/journal`
+- `ProjectJournal` V4 shell (tabs / search / filtre / 40/60 / enlarge)
+- `subjectId` conservé sur la page projet

-### Projection / API
-- `getOwnedProjectContext` hydrate via `listProjectKnowledge` (toutes préparations liées du projet propriétaire).
-- `GET /api/projects/[projectId]/journal` — projection Journal (tabs, recherche, détails).
-- `page.tsx` projet : **ne strip plus** `subjectId` ; passe `parentSubjectId` et résumés.
+## Cycle 2 — complétude (ce cycle)

-### UI V4
-- `ProjectJournal.tsx` : onglets Sujets/Décisions, recherche, filtre Points ouverts, arbre, 40/60, agrandissement, décisions D6 lecture seule + explications.
-- Tokens CSS : tabs / split / enlarge.
+### J-C04 — réactivation
+- `journal-cognition.ts` : `selectOpenPointsForReactivation`, `markOpenPointReactivated` (cooldown, score lexical)
+- Branché dans `selectRelevantKnowledgeContext` via `projectId` + conversation service

-### Preuves exécutées
-- `tsc --noEmit` PASS
-- `vitest` `journal-d4-revisions.pg.test.ts` : 6/6 PASS sur `sfia_next_e2e`
+### J-C06 — sources / contradictions / currentness
+- `qualifyProvenanceSource`, `detectAcquisContradictions`, `assertHonestSynthesisInput`
+- Gate honnêteté sur `appendSubjectSummaryRevision`
+- Projection Journal expose `sourceLinks` + `contradictions` ; UI affiche UNRESOLVED

-## Non réalisé / PARTIAL (honnête)
+### J-C05 / J-C09
+- Resolve factuel refuse toute mutation de restriction D6 (snapshot ACTIVE)
+- Décisions projetées avec `applicable` / `supersededByDecisionId` ; restrictions ACTIVE + historiques

-- J-C04 réactivation Nora LIVE : NOT IMPLEMENTED
-- J-C06 currentness/contradictions runtime : NOT IMPLEMENTED
-- J-C13 deep-link message 1000+ / brouillon : NOT IMPLEMENTED (callback non câblé)
-- J-C14 ouverture document/version depuis Journal : NOT IMPLEMENTED
-- Captures Figma↔runtime BROWSER : NOT RUN
-- LIVE Nora / REAL Git : NOT RUN / hors GO
+### J-C13 / J-C14
+- `GET /api/projects/[projectId]/messages/[messageId]` (history scope projet)
+- `ProjectJournal` → `onOpenMessage` / `onOpenDocument` → Travail focus / Documents D4
+- `NoraConversation` `focusMessageId` + highlight ; brouillon et `journalNav` préservés ; zéro auto-send
+
+### J-C08 / API
+- Recherche UI titre+synthèse+acquis+points avec raison de match
+- `GET /api/projects/[projectId]/journal/search`
+
+### Preuves exécutées (DEV/e2e)
+| Commande | Résultat |
+|---|---|
+| `npx tsc --noEmit` | PASS |
+| `npm run lint` | PASS (warnings préexistants hors Journal) |
+| `vitest` `journal-cognition.test.ts` | 4/4 PASS |
+| `vitest` `journal-d4-revisions.pg.test.ts` | 10/10 PASS (`sfia_next_e2e`) |
+| `playwright` `journal-v4-parcours.spec.ts` | 1/1 PASS (`:3101`) |
+| Captures runtime | `.tmp-sfia-review/journal-v4-captures/*.png` |
+| Figma 835:71 | extrait MCP + PNG local |
+
+### Non-régression / hors GO
+- LIVE Nora : **NOT RUN** (hors GO)
+- REAL Git : **NOT RUN**
+- Suites ML2/ML3/ML4C/E05 complètes : **NOT RUN** dans ce cycle (tsc+lint+Journal PG/BROWSER exécutés)
+- 11/11 captures Figma↔runtime pixel-perfect : **PARTIAL** (parcours BROWSER + captures runtime + frames Figma clés ; comparaison structurelle, pas audit pixel exhaustif)

 ## Autorité

-- D6 non modifié en écriture depuis le Journal.
-- Aucun moteur mémoire parallèle.
-- Aucun push projet / PR / merge dans ce cycle.
+- D6 non modifié en écriture depuis le Journal
+- Aucun moteur mémoire parallèle
+- Aucun push projet / PR / merge / RECETTE dans ce cycle

```

### DIFF `projects/sfia-studio-next/construction/delivery-history.md`
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index d209ae3f..12ad52ac 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,22 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-19-JOURNAL-V4-COMPLETION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-19 ~09:40 CET |
+| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 completion |
+| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
+| GO Morris | Complétude J-C04/06/13/14 + PARTIAL + BROWSER DEV |
+| Candidate local | `sfia/next-journal-delivery-20261119` (post-78c3c3b0) |
+| Scope | Réactivation D3/D4 · sources/contradictions · message/doc deep-link · UI search reason · PG+BROWSER |
+| QA | tsc PASS · lint PASS · unit 4/4 · PG 10/10 · Playwright journal-v4 1/1 |
+| Lane | DEV/e2e `:5433` / `:3101` — RECETTE intacte (014 absente) |
+| Preuves | `.tmp-sfia-review/journal-v4-captures/` (local, non commit) |
+| Verdict Cursor | `READY FOR MORRIS REVIEW WITH RESERVES — JOURNAL V4 COMPLETION LOCAL` |
+
+
 ## delivery_id: DELIV-2026-11-18-UX01-07-RECETTE

 | Field | Value |

```

## 9. Git Review Index

| Path | Role |
|---|---|
| `projects/sfia-studio-next/web/src/domains/knowledge/journal-cognition.ts` | CREATE cycle2 |
| `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/search/route.ts` | CREATE cycle2 |
| `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/messages/[messageId]/route.ts` | CREATE cycle2 |
| `projects/sfia-studio-next/web/tests/unit/journal-cognition.test.ts` | CREATE cycle2 |
| `projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts` | CREATE cycle2 |
| `projects/sfia-studio-next/web/src/domains/knowledge/journal.ts` | CREATE cycle1 / tip |
| `projects/sfia-studio-next/web/src/db/migrations/014_journal_d4_revisions.sql` | CREATE cycle1 / tip |
| `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/route.ts` | CREATE cycle1 / tip |
| `projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts` | CREATE cycle1 / tip |
| `projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md` | CREATE cycle1 / tip |
| `projects/sfia-studio-next/web/src/domains/knowledge/service.ts` | MODIFY |
| `projects/sfia-studio-next/web/src/domains/conversation/service.ts` | MODIFY |
| `projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx` | MODIFY |
| `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx` | MODIFY |
| `projects/sfia-studio-next/web/src/components/figma/tokens.css` | MODIFY |
| `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx` | MODIFY |
| `projects/sfia-studio-next/web/src/db/schema.ts` | MODIFY |
| `projects/sfia-studio-next/web/src/domains/preparation/project-context.ts` | MODIFY |
| `projects/sfia-studio-next/construction/delivery-history.md` | MODIFY |
| `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx` | MODIFY |

## 10. Blast radius

- D3 conversation service: knowledge context only (+projectId reactivation)
- D4 knowledge: journal + cognition + selective context
- D6: read-only projection; resolve never lifts restrictions
- UI: ProjectJournal, NoraConversation focus, project page wiring
- DB: no new migration this cycle (014 already present DEV/e2e)

## 11. Contradictions code/doc

- Matrice documentaire remote @b02192e5 still reflects cycle-1 incompleteness — to be updated by ChatGPT on docs branch under separate mandate (Cursor must not edit matrix on docs branch).
- As-built local synchronized with cycle-2 code.

## 12. Risques / réserves / exit

| Réserve | Exit |
|---|---|
| LIVE Nora spontanéité J-C04/J-C06/J-C10 | GO LIVE + secrets/coûts |
| Fil 1000+ message deep-link stress | GO + fixture longue dédiée |
| Figma 11/11 pixel audit | GO capture exhaustive + revue visuelle Morris |
| Suites ML2/ML3/ML4C/E05 complètes | GO non-régression pack |
| Push/PR/merge/RECETTE | GO Morris distinct |

## 13. Review Pack content coverage

- created full: YES (cycle2 + tip cycle1)
- modified useful diff: YES (completion delta)
- synthesis only: NO
- verdict pack: COMPLETE FOR CHATGPT REVIEW

## 14. Verdict

`READY FOR MORRIS REVIEW WITH RESERVES — JOURNAL V4 COMPLETION LOCAL / BROWSER PROVEN / LIVE NOT RUN / NO PROJECT PUSH`

### Instruction ChatGPT obligatoire

Relire ce handoff Git canonique, confronter le code et les preuves aux contrats Journal v1.0 / technique v0.3 / matrice v0.1, actualiser la matrice de convergence sous mandat documentaire distinct, et ne pas traiter les déclarations Cursor comme réception produit. Aucun Gate C / ADOPTED / push projet n'est autorisé par ce rapport.
