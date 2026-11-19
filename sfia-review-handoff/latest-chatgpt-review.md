# JOURNAL V4 — ENSEMBLE 06 DELIVERY — REVIEW PACK FULL

```text
TIMESTAMP: 2026-11-19 09:01:26 +0100
MACRO: Ensemble 06 — Journal cohérent du projet
CYCLE: 8 Delivery / CRITICAL / EVOL
BRANCH: sfia/next-journal-delivery-20261119
HEAD_BASE: 6879d34eb38fbd1d8f899c6f8713ccc98f0ae178
MAIN: d3d199adb782462b93467934f5f1e8a0c98fb492
LOCAL_HEAD: 78c3c3b0007b6bf67ef6e92f15241d44cd2ab752
NO RELEASE / NO PROJECT PUSH / NO PR / NO MERGE
```

## 1. Git Truth Check

| Check | Result |
|---|---|
| origin/main | `d3d199ad` MATCH |
| docs candidate | `6879d34e` MATCH ; 2 documentary files vs main |
| Delivery branch | from docs candidate |
| RECETTE | not mutated |

## 2. Sources

- Journal UX v1.0 + technique v0.3 §16
- ENV-01 / SEF / E06 reprise
- Figma 828:2 session 08327c13 (835:71, 842:26, 859:42, 860:58)

## 3. Matrice J-C01..J-C16 finale

| ID | État | Code | Test | Preuve |
|---|---|---|---|---|
| J-C01 | PARTIAL | journal.ts summary revisions | journal-d4-revisions PASS | PG |
| J-C02 | PARTIAL | reparent + ensureSubject parent-aware | PG PASS | PG |
| J-C03 | IMPLEMENTED | page.tsx keeps subjectId | — | code |
| J-C04 | NOT IMPLEMENTED | — | — | Nora LIVE hors GO |
| J-C05 | PARTIAL | resolve/reopen open point | PG PASS | PG |
| J-C06 | NOT IMPLEMENTED | — | — | currentness |
| J-C07 | PARTIAL | listProjectKnowledge | — | code |
| J-C08 | PARTIAL | searchJournalSubjects + UI | PG PASS | PG; BROWSER NOT RUN |
| J-C09 | PARTIAL | decisions+restrictions RO | — | code; BROWSER NOT RUN |
| J-C10 | PARTIAL | explanation revisions | PG PASS | PG; LIVE NOT RUN |
| J-C11 | PARTIAL | searchJournalDecisions | PG | PG; BROWSER NOT RUN |
| J-C12 | PARTIAL | tabs/40/60/enlarge | — | code; runtime captures NOT RUN |
| J-C13 | NOT IMPLEMENTED | — | — | message deep-link |
| J-C14 | NOT IMPLEMENTED | — | — | doc version open |
| J-C15 | PARTIAL | operationId/expectedRevision | PG | PG |
| J-C16 | PARTIAL | as-built + delivery-history | tsc+PG | ML2/ML3/E05 suite NOT RUN |

**Verdict couverture :** SCOPE INCOMPLETE for global PASS; candidate READY FOR MORRIS REVIEW WITH RESERVES.

## 4. Migration 014 (full)

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

## 5. journal.ts excerpt (first 100 lines)

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
```

## 6. Diff stat

```text
 .../construction/delivery-history.md               |  19 +
 .../src/app/preparations/[preparationId]/page.tsx  |  18 +-
 .../web/src/app/projects/[projectId]/page.tsx      |  78 ++-
 .../web/src/components/figma/ProjectJournal.tsx    | 663 +++++++++++++++++----
 .../web/src/components/figma/tokens.css            | 151 +++++
 projects/sfia-studio-next/web/src/db/schema.ts     |  91 +++
 .../web/src/domains/knowledge/service.ts           |   6 +-
 .../web/src/domains/preparation/project-context.ts |  28 +-
 8 files changed, 923 insertions(+), 131 deletions(-)
```

## 7. Status

```text
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/db/schema.ts
 M projects/sfia-studio-next/web/src/domains/knowledge/service.ts
 M projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
?? projects/sfia-studio-next/.tmp-sfia-review/
?? projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/
?? projects/sfia-studio-next/web/src/db/migrations/014_journal_d4_revisions.sql
?? projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
?? projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
```

## 8. Tests exécutés

| Commande | Résultat |
|---|---|
| tsc --noEmit | PASS |
| vitest journal-d4-revisions.pg.test.ts | 6/6 PASS (sfia_next_e2e) |
| Playwright Journal V4 | NOT RUN |
| LIVE Nora / REAL Git | NOT RUN |

## 9. Fake/Real

- DB DEV REAL (014 on sfia_next_dev + sfia_next_e2e)
- RECETTE/STABLE untouched
- Figma extract done; runtime match NON PROVEN
- Deterministic PG ≠ LIVE PROVEN

## 10. Verdict

`READY FOR MORRIS REVIEW WITH RESERVES — JOURNAL V4 CORE LOCAL / J-C PARTIAL / NO PROJECT PUSH`
