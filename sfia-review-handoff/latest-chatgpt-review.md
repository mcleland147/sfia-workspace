# JOURNAL V4 — TECHNICAL QA + RECETTE AVAILABILITY — REVIEW PACK FULL

- **Date/heure** : 2026-11-19 11:35:44 CET
- **Profil** : CRITICAL — SFIA v2.6 §9.1
- **Processus** : SFIA v2.6 · Cycle 8 Delivery / Intégration QA
- **Macro-lot** : Ensemble 06 — Journal V4
- **Repository** : mcleland147/sfia-workspace
- **Branche** : `sfia/next-journal-delivery-20261119`
- **HEAD candidat** : `d5bf7eb762a21cc309744bb703926e2c0bc844ed`
- **Tree** : `f5c05cb94f5137d06a26107b7003ab1bf073f923`
- **origin/main** : `d3d199adb782462b93467934f5f1e8a0c98fb492`
- **Merge-base** : `d3d199adb782462b93467934f5f1e8a0c98fb492` (= HEAD ancestor of Journal commits)
- **Handoff Journal précédent** : `45bd3d375a097e0d01754ab4c985b700d2fd69ca`
- **Handoff E05 UAT** : `dc9fd0ba16bef2f056a4f9cc294bf3506c09fa7d`
- **Branche documentaire** : `sfia/next-journal-conception-fonctionnelle-ux-20261119` @ `44d61a5c…` (référence, non fusionnée)
- **Versioning** : NO RELEASE / STABLE NOT AVAILABLE / Product Version NOT AVAILABLE
- **Push projet / PR / merge** : NON
- **VISUAL / UAT Morris** : PENDING — environnement prêt

## 1. Git Truth Check

```
 M projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
 M projects/sfia-studio-next/construction/delivery-history.md
?? projects/.tmp-sfia-review/
?? projects/sfia-studio-next/.tmp-sfia-review/
?? projects/sfia-studio-next/construction/ensemble-06-journal-recette-manifest.md
```

### Commits Journal (origin/main..HEAD)
```
d5bf7eb7 fix(next): Journal §5 oracle proofs and partial CampusFlow LIVE harness
a122bf27 fix(next): resolve Journal E06-01..06 security, honesty and seeded BROWSER proofs
782c93ec feat(next): complete Journal V4 J-C04/06/13/14 and BROWSER proofs locally
78c3c3b0 feat(next): implement Journal V4 D4 revisions and project shell locally
6879d34e docs(next): scope D4 in-domain evolution and full Journal acceptance contract v0.3
b4980a44 docs(next): deepen Journal architecture review, project scope and identity invariants v0.2
33d2eac2 docs(next): fix Journal contract SFIA v2.6 canonical source links
4539e2fe docs(next): add integrated Journal architecture candidate, as-is audit and consistency gates
40505850 docs(next): freeze validated Journal functional UX v1.0 and R1 R2 coverage
d0e15ac6 docs(next): link V4 Journal search, open points and contextual D6 decision Figma reviews
f1c2739a docs(next): consolidate Journal search, D6 decision contextual narratives and 40-60 UX
e8528a61 docs(next): track split Journal subject viewer and unresolved search/points UX
3056ca91 docs(next): align Journal Figma candidate references to redesigned page 05 visual direction
ee9277d9 docs(next): reference candidate Figma Journal layouts after R1 R2 audit
2cd5d42f docs(next): audit Journal target against R1 R2 functional requirements
e7f09d83 docs(next): specify unobtrusive confirmed Journal memory updates
0c5dbe38 docs(next): clarify living Journal knowledge and adaptive subject hierarchy
2b163abb docs(next): init journal functional and UX working contract
```

### Ascendance Ensemble 05
```
5c94c867 IS ANCESTOR OF HEAD — YES
```

### Worktrees (extrait pertinent)
```
/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023                              45bd3d37 [sfia/review-handoff]
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-208aaa40       208aaa40 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-34a5e102       34a5e102 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-811f9b41       5c94c867 (detached HEAD) prunable
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-90c3e59f       90c3e59f (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-ba1e55ec       ba1e55ec (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-bd3854ac       bd3854ac (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-e224d627       e224d627 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble06-recette-build-d5bf7eb7       d5bf7eb7 (detached HEAD)
/Users/morris/Projects/sfia-wt-journal-delivery-20261119                                d5bf7eb7 [sfia/next-journal-delivery-20261119]
```

### Diff stat candidat vs main (périmètre studio-next)
```
 .../as-built-ensemble-06-journal-20261119.md       |   65 ++
 .../contrat-technique-journal.md                   |  484 ++++++++
 .../journal-contrat-fonctionnel-ux-candidat.md     |  529 +++++++++
 .../construction/delivery-history.md               |   65 ++
 .../web/playwright.journal-live.config.ts          |   25 +
 .../sfia-studio-next/web/scripts/db-migrate.sh     |    3 +-
 .../src/app/api/dev/e2e/journal-fixture/route.ts   |   58 +
 .../app/api/projects/[projectId]/journal/route.ts  |   56 +
 .../projects/[projectId]/journal/search/route.ts   |   30 +
 .../[projectId]/messages/[messageId]/route.ts      |   93 ++
 .../src/app/preparations/[preparationId]/page.tsx  |   18 +-
 .../web/src/app/projects/[projectId]/page.tsx      |  243 ++++-
 .../web/src/components/figma/NoraConversation.tsx  |   31 +
 .../web/src/components/figma/ProjectJournal.tsx    |  844 ++++++++++++--
 .../web/src/components/figma/tokens.css            |  169 +++
 .../src/db/migrations/014_journal_d4_revisions.sql |   80 ++
 projects/sfia-studio-next/web/src/db/schema.ts     |   91 ++
 .../web/src/domains/conversation/service.ts        |    4 +-
 .../web/src/domains/knowledge/journal-cognition.ts |  621 +++++++++++
 .../web/src/domains/knowledge/journal-e2e-seed.ts  |  329 ++++++
 .../web/src/domains/knowledge/journal.ts           | 1152 ++++++++++++++++++++
 .../web/src/domains/knowledge/service.ts           |   48 +-
 .../web/src/domains/preparation/project-context.ts |   28 +-
 .../tests/e2e/journal-nora-live-campusflow.spec.ts |  397 +++++++
 .../web/tests/e2e/journal-v4-parcours.spec.ts      |  173 +++
 .../integration/journal-d4-revisions.pg.test.ts    |  591 ++++++++++
 .../web/tests/unit/journal-cognition.test.ts       |  144 +++
 .../web/tests/unit/ml4c-e2e-fixture-gate.test.ts   |   20 +
 28 files changed, 6251 insertions(+), 140 deletions(-)
```

### Name-status delivery code (depuis tip docs 6879d34e)
```
A	projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
M	projects/sfia-studio-next/construction/delivery-history.md
A	projects/sfia-studio-next/web/playwright.journal-live.config.ts
M	projects/sfia-studio-next/web/scripts/db-migrate.sh
A	projects/sfia-studio-next/web/src/app/api/dev/e2e/journal-fixture/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/search/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/messages/[messageId]/route.ts
M	projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
M	projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
M	projects/sfia-studio-next/web/src/components/figma/tokens.css
A	projects/sfia-studio-next/web/src/db/migrations/014_journal_d4_revisions.sql
M	projects/sfia-studio-next/web/src/db/schema.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
A	projects/sfia-studio-next/web/src/domains/knowledge/journal-cognition.ts
A	projects/sfia-studio-next/web/src/domains/knowledge/journal-e2e-seed.ts
A	projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
M	projects/sfia-studio-next/web/src/domains/knowledge/service.ts
M	projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
A	projects/sfia-studio-next/web/tests/e2e/journal-nora-live-campusflow.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
A	projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/journal-cognition.test.ts
M	projects/sfia-studio-next/web/tests/unit/ml4c-e2e-fixture-gate.test.ts
```

### Modifications locales ce cycle (docs RECETTE — non commit produit)
```
 M projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
 M projects/sfia-studio-next/construction/delivery-history.md
?? projects/sfia-studio-next/construction/ensemble-06-journal-recette-manifest.md
```

**Écart Git** : artefacts `.tmp-sfia-review/` untracked (preuves locales) ; manifeste/as-built/delivery-history mis à jour localement — **aucun reset/rebase/merge** ; candidat code figé `d5bf7eb7` inchangé.

## 2. Sources consultées (Git)

- `governance/environnements-recette-et-promotions.md` (ENV-01)
- `governance/product-versioning.md`
- `governance/SEF.md` / `roadmap.md`
- Contrats Journal (branche documentaire) : fonctionnel UX v1.0, technique v0.3 §16, matrice v0.4 §15
- Manifestes E05 historiques + as-built E05
- Handoffs `45bd3d37` (Journal) / `dc9fd0ba` (E05)
- Migration `014_journal_d4_revisions.sql`
- Scripts démarrage / LaunchAgent RECETTE
- `scripts/sfia/publish-review-handoff.sh`
- Template SFIA v2.6 §9.1

## 3. Inventaire runtime RECETTE AVANT

| Champ | Valeur |
|---|---|
| URL | http://127.0.0.1:3200 |
| SHA | 5c94c86737f0965c71a7e058e3f1e45ff4415024 |
| BUILD_ID | IEINNuPl0bHWJOWkh0ZhG |
| Worktree | /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-5c94c867 |
| Service | com.sfia.studio.next.recette.ml4d-ux004 |
| DB | sfia_next_recette_ml4 |
| 014 | ABSENT |
| Counts | projects=23 messages=560 |

## 4. Qualification environnements

| Lane | Preuve |
|---|---|
| DEV | Postgres :5433 · tests Journal unit/PG/Playwright sur candidat |
| RECETTE | Même lane logique · port 3200 · DB sfia_next_recette_ml4 · STUDIO_LANE=RECETTE |
| STABLE | Non touchée |
| Isolation | Pas de bascule silencieuse DEV ; fixtures E2E 403 en production |

## 5. Blast radius

- **Ajout** : domaine Journal D4, API journal/search/message, UI ProjectJournal V4, migration 014, tests Journal
- **Modification** : page projet (surface journal + viewerOpenRef), NoraConversation (hooks mineurs), schema Drizzle, knowledge/service, db-migrate
- **Préservé** : surfaces E05 Travail/composition (ascendance SHA), LaunchAgent label, URL/port/DB
- **Hors mandat** : STABLE, push produit, UAT utilisateur, campagne conversation auto RECETTE

## 6. Contrat DB / migration 014

Fichier : `projects/sfia-studio-next/web/src/db/migrations/014_journal_d4_revisions.sql`

### FULL CONTENT migration 014
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

### Application RECETTE

- Backup dump : `/Users/morris/Projects/sfia-recette-backups/ml4d-e06-journal-20261119-pre-d5bf7eb7/sfia_next_recette_ml4.dump`
- Appliquée **une fois**, additive, après backup
- Tables vérifiées présentes : `knowledge_subject_summary_revisions`, `knowledge_decision_explanation_revisions`, `knowledge_open_point_events`
- Counts post : projects=23 messages=560 conversations=196 knowledge_subjects=4 summary_revisions=0
- Aucun DROP/TRUNCATE/reset

## 7. Identités build / SHA

| | Avant | Après |
|---|---|---|
| SOURCE_SHA | 5c94c86737f0965c71a7e058e3f1e45ff4415024 | d5bf7eb762a21cc309744bb703926e2c0bc844ed |
| BUILD_ID | IEINNuPl0bHWJOWkh0ZhG | PV12SV9VToVGK-ReSxTqk |
| Worktree | …ensemble05-recette-build-5c94c867 | …ensemble06-recette-build-d5bf7eb7 |
| Script | start-recette-ensemble05-5c94c867.sh | start-recette-ensemble06-d5bf7eb7.sh |
| Service | com.sfia.studio.next.recette.ml4d-ux004 | **même** |

Preuve HTML `/login` contient marqueur BUILD `PV12SV9VToVGK-ReSxTqk`.
LaunchAgent `program` pointe worktree ensemble06.

## 8. Sauvegarde / rollback

- Dump PG pré-cutover + counts-before
- Worktree E05 **conservé** (non écrasé)
- `ROLLBACK-TO-5c94c867.sh` rebascule LaunchAgent sur E05
- Schéma 014 reste compatible avec code E05 (tables non lues)
- Rollback données : dump disponible — **non exécuté** (pas de mandat)

## 9. Tests DEV

| Suite | Résultat | Statut preuve |
|---|---|---|
| tsc --noEmit (rejoué cutover) | PASS | DETERMINISTIC PROVEN |
| vitest journal-cognition + fixture-gate | 14/14 PASS | DETERMINISTIC PROVEN |
| Cycles 1–4 même SHA : lint/build/PG journal-d4/Playwright journal-v4/ML3 PG | PASS (documentés handoff 45bd3d37) | DETERMINISTIC PROVEN (prior cycle, même HEAD) |
| Full unit (env) | 3 FAIL hors Journal (cognitive-policy, github-app-oauth) préexistants | NON-BLOQUANT / hors blast |
| ML2/ML4C/E05 Playwright complets | NOT RUN | RÉSERVE non bloquante |
| LIVE 20 tours | E01 only PARTIAL | REAL BOUNDARY PARTIAL (cycle 4) |

## 10. Smoke RECETTE — RUNTIME PROVEN

### HTTP / API
```
POST /api/dev/e2e/journal-fixture → 403 E2E_FIXTURE_FORBIDDEN NODE_ENV_PRODUCTION
POST /api/dev/e2e/s05-fixture → 403 E2E_FIXTURE_FORBIDDEN NODE_ENV_PRODUCTION
GET /api/projects/proj_absent/journal → 401 SESSION_INVALID
```

### Browser (Playwright headless, non destructif)
```json
{
  "afterLogin": "http://127.0.0.1:3200/portfolio",
  "projectUrl": "http://127.0.0.1:3200/projects/proj_4f0e3d47-7279-4434-b287-39a445c18b32?surface=travail",
  "loadState": "ready",
  "hasNavJournal": true,
  "hasNavTravail": true,
  "hasNavProjet": true,
  "journalUrl": "http://127.0.0.1:3200/projects/proj_4f0e3d47-7279-4434-b287-39a445c18b32?surface=journal",
  "hasProjectJournal": true,
  "hasTabSubjects": true,
  "hasTabDecisions": true,
  "hasSearch": true,
  "decisionsTabActive": true,
  "travailUrl": "http://127.0.0.1:3200/projects/proj_4f0e3d47-7279-4434-b287-39a445c18b32?surface=travail",
  "hasNora": true,
  "messageCount": 8,
  "journalApiStatus": 200,
  "journalApiKeys": [
    "knowledge",
    "decisions",
    "restrictions",
    "contradictions",
    "sourceLinks"
  ],
  "journalHasSubjects": false,
  "ok": true
}```

### DB après
```
 has_014 | projects | messages
---------+----------+----------
 t       |       23 |      560
(1 row)

```

Captures locales : login/portfolio/journal/travail PNG sous `.tmp-sfia-review/recette-smoke-20261119/` (non commit).

## 11. Contrôle Ensemble 05

- Projet historique ouvert (`proj_4f0e3d47-…`)
- Travail : `nora-workspace` + 8 messages
- Navigation rail Projet/Travail/Journal intacte
- Aucune réécriture visuelle E05
- UAT utilisateur E05 **non rejouée** (hors mandat) — réserve

## 12. Fake / Real Qualification

| Frontière | Statut |
|---|---|
| PostgreSQL DEV | DETERMINISTIC PROVEN (cycles Journal) |
| PostgreSQL RECETTE | DB MIGRATION VERIFIED + counts preserved |
| Next build/runtime RECETTE | RUNTIME RECETTE PROVEN (SHA+BUILD_ID) |
| Auth RECETTE | BROWSER/SMOKE PROVEN (Pilote A DEV login) |
| API + navigateur | BROWSER/SMOKE PROVEN |
| Migration 014 | DB MIGRATION VERIFIED |
| UAT fonctionnelle/esthétique Morris | HORS PÉRIMÈTRE — PENDING |
| LIVE conversation RECETTE | NON EXÉCUTÉ (interdit) |
| ADOPTED / Gate C / STABLE | NON |

## 13. Inventaire fichiers créés/modifiés — ce cycle docs

### CREATE FULL `projects/sfia-studio-next/construction/ensemble-06-journal-recette-manifest.md`
```markdown
# Manifeste RECETTE — Ensemble 06 Journal V4 (non secret)

| Champ | Valeur |
|---|---|
| Date / heure (Europe/Paris) | 2026-11-19 ~11:33 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 |
| Type | Cycle 8 Delivery / Intégration QA · **NO RELEASE** · **NO PRODUCT PUSH** |
| Product Versioning | **NOT AVAILABLE** / `NO RELEASE` / `0.0.0-dev` |
| Dernière STABLE | NOT AVAILABLE |
| Gate Morris UAT | **OUVERT** — campagne utilisateur Morris après mise à disposition |

## Identité Git candidat

| Champ | Valeur |
|---|---|
| Dépôt | `mcleland147/sfia-workspace` |
| Branche locale | `sfia/next-journal-delivery-20261119` |
| Base `origin/main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Candidate SHA | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| Candidate tree | `f5c05cb94f5137d06a26107b7003ab1bf073f923` |
| Ascendance E05 UAT | `5c94c86737f0965c71a7e058e3f1e45ff4415024` **est ancêtre** de HEAD |
| BUILD_ID candidat servi | `PV12SV9VToVGK-ReSxTqk` |
| Push produit / PR / merge | **AUCUN** |

## RECETTE — identité avant cutover

| Champ | Valeur |
|---|---|
| URL / port | `http://127.0.0.1:3200` |
| SOURCE_SHA | `5c94c86737f0965c71a7e058e3f1e45ff4415024` |
| BUILD_ID | `IEINNuPl0bHWJOWkh0ZhG` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-5c94c867` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` |
| DB | `sfia_next_recette_ml4` @ PostgreSQL Docker `sfia-next-recette-pg` |
| Schéma Journal 014 | **ABSENT** (tables D4 revisions absentes) |
| Compteurs | projects=23 · messages=560 |

## RECETTE — identité après cutover (servie)

| Champ | Valeur |
|---|---|
| URL / port | `http://127.0.0.1:3200` (inchangé) |
| SOURCE_SHA | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| BUILD_ID | `PV12SV9VToVGK-ReSxTqk` (HTML `/login` + `.next/BUILD_ID`) |
| Worktree runtime | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble06-recette-build-d5bf7eb7` |
| Script démarrage | `start-recette-ensemble06-d5bf7eb7.sh` |
| Service / LaunchAgent | **même** `com.sfia.studio.next.recette.ml4d-ux004` |
| Config non secrète | `~/.config/sfia-studio-next/recette/.env.local` · `STUDIO_LANE=RECETTE` · `STUDIO_DEV_TEST_LOGIN=1` |
| DB | **même** `sfia_next_recette_ml4` (aucun reset) |
| Schéma Journal 014 | **PRÉSENT** — tables `knowledge_subject_summary_revisions`, `knowledge_decision_explanation_revisions`, `knowledge_open_point_events` |
| Compteurs après | projects=23 · messages=560 · conversations=196 · knowledge_subjects=4 · summary_revisions=0 |

## Migration 014

| Contrôle | Résultat |
|---|---|
| Fichier | `web/src/db/migrations/014_journal_d4_revisions.sql` |
| Nature | Additive `CREATE TABLE IF NOT EXISTS` + index — **non destructive** |
| Nécessité | Oui (objets absents avant cutover) |
| Application | Une fois, sur RECETTE uniquement, après backup |
| Effet données E05 | Aucune perte constatée (compteurs identiques) |
| DROP/TRUNCATE/reset | **Non exécutés** |

## Sauvegarde et rollback

| Élément | Emplacement |
|---|---|
| Dump PostgreSQL pré-cutover | `/Users/morris/Projects/sfia-recette-backups/ml4d-e06-journal-20261119-pre-d5bf7eb7/sfia_next_recette_ml4.dump` |
| Compteurs avant | `…/counts-before.txt` (23 / 560) |
| Build précédent intact | worktree `…ensemble05-recette-build-5c94c867` + BUILD `IEINNuPl0bHWJOWkh0ZhG` |
| Script rollback build | `…ensemble06…/ROLLBACK-TO-5c94c867.sh` (repointe LaunchAgent sur E05) |
| Compatibilité schéma | Retour code E05 **compatible** avec schéma 014 (tables additives non lues par E05) — rollback données **non** automatique |

## Smoke technique RECETTE (non destructif)

| Contrôle | Résultat |
|---|---|
| HTTP `/login` | 200 |
| Login Pilote A (DEV) → portfolio | OK |
| Ouverture projet existant | `proj_4f0e3d47-…` · load-state `ready` |
| Nav Projet / Travail / Journal | Présents (rail) |
| Surface Journal | `project-journal` · onglets Sujets/Décisions · recherche |
| Surface Travail / Nora | `nora-workspace` · 8 messages historiques |
| API `GET …/journal` authentifiée | 200 · clés knowledge/decisions/restrictions/… |
| API journal non authentifiée | 401 `SESSION_INVALID` |
| Fixtures E2E (`journal-fixture`, `s05-fixture`) | **403** `E2E_FIXTURE_FORBIDDEN` / `NODE_ENV_PRODUCTION` |
| Injection données / seeds RECETTE | **Aucune** |

Preuves locales (non commit) : `projects/sfia-studio-next/.tmp-sfia-review/recette-smoke-20261119/`

## Non-régression Ensemble 05 (technique)

| Capacité | Observation smoke |
|---|---|
| Portfolio + projet historique | Accessible |
| Travail / conversation | Consultable (messages présents) |
| Navigation surfaces | Continuum Projet/Travail/Journal |
| Visionneuse / composition E05 | Non rejouée en campagne UAT — **préservée par ascendance Git + absence de régression smoke navigation** |
| Campagne UAT Morris E05 | **Non rejouée** ce cycle (hors mandat) |

## Qualification DEV (candidat `d5bf7eb7`)

| Suite | Résultat |
|---|---|
| `tsc --noEmit` | PASS (rejoué cutover) |
| Journal unit + fixture-gate | 14/14 PASS (rejoué) |
| Cycles delivery antérieurs (même SHA) | lint/build/PG journal-d4 / Playwright journal-v4 / ML3 PG — PASS documentés |
| Full unit suite (env lane) | 3 FAIL préexistants hors Journal (`cognitive-policy`, `github-app-user-oauth`) — **non bloquants Journal / non introduits** |
| ML2 / ML4C / E05 Playwright complets | **NOT RUN** ce cycle — réserve non bloquante (ascendance E05 + smoke surfaces) |
| LIVE Nora 20 tours | **PARTIAL** (E01 seul, arrêt Morris cycle 4) — hors smoke RECETTE |

## Capacités mises à disposition

| Capacité | État |
|---|---|
| Journal V4 shell (Sujets / Décisions) | Disponible en RECETTE |
| Persistance D4 révisions (014) | Schéma disponible |
| Ensemble 05 Travail Nora | Toujours accessible |
| Recette utilisateur / esthétique | **À faire par Morris** — non exécutée ici |
| STABLE / Gate C / ADOPTED | **Non** |

## Réserves

1. UAT fonctionnelle/visuelle Morris **non démarrée**.
2. Suites Playwright ML2/ML4C/E05 exhaustives **non rejouées** sur ce cutover.
3. LIVE Nora CampusFlow **non** rejouée en RECETTE (interdit par mandat).
4. Isolation cookies multi-ports 127.0.0.1 : profil navigateur distinct recommandé (ENV-01).
5. Rollback build ≠ rollback données ; dump disponible si mandat explicite.
6. Code candidat **local non poussé** sur GitHub produit.

## Verdict disponibilité

**RECETTE TECHNICALLY AVAILABLE — READY FOR MORRIS USER ACCEPTANCE**

Avec réserves techniques listées (UAT Morris ouverte ; pas d’acceptation utilisateur déclarée).
```

### FULL CURRENT `projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md`
```markdown
# As-built — Ensemble 06 / Journal V4

| Métadonnée | Valeur |
|---|---|
| Date | 19/11/2026 (qualification + mise à disposition RECETTE) |
| Branche | `sfia/next-journal-delivery-20261119` |
| Candidate SHA | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| Candidate tree | `f5c05cb94f5137d06a26107b7003ab1bf073f923` |
| Base `main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Versioning | `NO RELEASE` / `0.0.0-dev` / STABLE NOT AVAILABLE |
| Manifeste RECETTE | `construction/ensemble-06-journal-recette-manifest.md` |

## Cycles 1–4 (DEV — conservés)

- Migration additive `014` + Journal D4/UI/API
- E06-01..06 : scope projet, UNVERIFIED Git, message chrono, seed BROWSER, resolve source réelle
- §5 oracles J-C05/07/08/11/13/14/16 + LIVE CampusFlow **PARTIAL** (E01 seul, arrêt Morris)

## Cycle cutover RECETTE (même GO)

### Identité runtime

| | Avant | Après |
|---|---|---|
| URL | `http://127.0.0.1:3200` | **identique** |
| SHA | `5c94c867…` | `d5bf7eb7…` |
| BUILD_ID | `IEINNuPl0bHWJOWkh0ZhG` | `PV12SV9VToVGK-ReSxTqk` |
| Worktree | `…ensemble05-recette-build-5c94c867` | `…ensemble06-recette-build-d5bf7eb7` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` | **même label** |
| DB | `sfia_next_recette_ml4` | **même** · 014 appliquée |

### Migration 014

Appliquée une fois sur RECETTE après dump `ml4d-e06-journal-20261119-pre-d5bf7eb7`. Tables D4 présentes ; compteurs projects/messages inchangés (23/560).

### Smoke RECETTE

Login → portfolio → projet → Journal (onglets + search) → Travail (Nora + messages) · fixtures 403 · journal API 401/200 · **PASS technique**.

## Preuves

| Commande / contrôle | Résultat |
|---|---|
| `tsc --noEmit` (cutover) | PASS |
| Vitest journal-cognition + fixture-gate | 14/14 PASS |
| PG journal-d4 / Playwright journal-v4 (cycles 1–4) | PASS (même candidat) |
| Smoke browser RECETTE | PASS non destructif |
| LIVE 20 tours | PARTIAL E01 only (cycle 4) |
| ML2/ML4C/E05 e2e complets | NOT RUN — réserve |
| VISUAL / UAT Morris | **PENDING** |

## Autorité / frontières

- D6 non muté depuis vues Journal lecture
- Aucun push projet / PR / merge
- Aucune fixture/seed en RECETTE
- Revue utilisateur Morris **après** mise à disposition uniquement
```

### DIFF utile `delivery-history.md` (entrée RECETTE)
```
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index c8a6bd2d..f7d34fa0 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,23 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-19-JOURNAL-V4-RECETTE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-19 ~11:33 CET |
+| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 qualification + RECETTE |
+| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
+| GO Morris | Qualification technique + mise à disposition sur RECETTE existante |
+| Candidate | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` · tree `f5c05cb94f5137d06a26107b7003ab1bf073f923` · BUILD `PV12SV9VToVGK-ReSxTqk` |
+| Parent RECETTE | `5c94c867…` / `IEINNuPl0bHWJOWkh0ZhG` |
+| Scope | QA DEV · migration 014 additive RECETTE · cutover même `:3200` / LaunchAgent · smoke · manifeste |
+| DB | `sfia_next_recette_ml4` · 014 applied · counts 23/560 preserved |
+| Rollback | `ROLLBACK-TO-5c94c867.sh` + dump `ml4d-e06-journal-20261119-pre-d5bf7eb7` |
+| Manifeste | `construction/ensemble-06-journal-recette-manifest.md` |
+| Verdict Cursor | `RECETTE TECHNICALLY AVAILABLE — READY FOR MORRIS USER ACCEPTANCE` |
+
+
 ## delivery_id: DELIV-2026-11-19-JOURNAL-V4-LIVE-PARTIAL

 | Field | Value |
```

## 14. Git Review Index — candidat produit figé `d5bf7eb7`

Contenu produit Journal déjà publié dans handoffs antérieurs (`45bd3d37` et précédents) au même HEAD.
Ce cycle **ne modifie pas** le code candidat ; il qualifie et déploie.

### Créations majeures (référence SHA d5bf7eb7 — contenus dans Git local)

| Path | Lines (approx) | Handoff antérieur couverture |
|---|---|---|
| web/src/domains/knowledge/journal.ts | 1151 | cycles 1–3 FULL/partial |
| web/src/domains/knowledge/journal-cognition.ts | 621 | cycles 1–3 |
| web/src/domains/knowledge/journal-e2e-seed.ts | 329 | cycles 2–4 |
| web/src/components/figma/ProjectJournal.tsx | 771 | cycles 1–4 diffs |
| web/src/db/migrations/014_journal_d4_revisions.sql | 80 | FULL ci-dessus |
| web/tests/integration/journal-d4-revisions.pg.test.ts | 591 | cycles 1–4 |
| web/tests/e2e/journal-v4-parcours.spec.ts | 173 | cycles 3–4 |
| web/tests/e2e/journal-nora-live-campusflow.spec.ts | 397 | cycle 4 FULL |
| API journal / search / message / fixture | routes | cycles 1–3 |

### Diff stat vs main (rappel)
```
28 files changed, 6251 insertions(+), 140 deletions(-)
```

Pour relecture immuable du code : `git show d5bf7eb7:<path>` sur worktree delivery.

## 15. Manifeste non secret

Voir §13 CREATE FULL `ensemble-06-journal-recette-manifest.md`.

## 16. Réserves / risques / exits

1. UAT Morris non démarrée — verdict ≠ acceptation utilisateur.
2. Playwright ML2/ML4C/E05 complets NOT RUN ce cutover.
3. LIVE Nora non rejouée en RECETTE.
4. 3 unit fails env hors Journal (oauth/policy) — non introduits.
5. Candidat code **non poussé** GitHub produit.
6. Cookies 127.0.0.1 multi-ports — profil navigateur distinct recommandé.
7. Rollback build ≠ rollback données.

## 17. Critères de sortie

| # | Critère | État |
|---|---|---|
| 1 | Candidat Git figé | PASS d5bf7eb7 |
| 2 | QA DEV | PASS (avec réserves suites transverses) |
| 3 | Suites transverses | PASS ou réserve non bloquante |
| 4 | RECETTE identifiée | PASS |
| 5 | Backup/rollback | PASS |
| 6 | Migration 014 | PASS applied |
| 7 | Données préservées | PASS 23/560 |
| 8 | Build servi | PASS |
| 9 | SHA/BUILD_ID | PASS |
| 10 | Smoke | PASS |
| 11 | E05 fonctionnel (smoke) | PASS technique |
| 12 | Hors mandat | PASS |
| 13 | Manifeste/as-built | PASS |
| 14 | Review Pack + Handoff | EN COURS → PASS après publish |

## 18. Verdict

**RECETTE TECHNICALLY AVAILABLE — READY FOR MORRIS USER ACCEPTANCE**

Avec réserves §16. Ne signifie PAS : UAT acceptée, esthétique validée, Gate C, STABLE, ADOPTED.

### Instruction ChatGPT obligatoire

> **Instruction ChatGPT obligatoire :**
>
> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
>
> branche : `sfia/review-handoff`
> fichier : `sfia-review-handoff/latest-chatgpt-review.md`
>
> ChatGPT doit vérifier sa cohérence avec le rapport Cursor, notamment :
> - le cycle et le profil ;
> - la branche projet ;
> - le HEAD initial et final ;
> - la base main ;
> - les sources consultées ;
> - les fichiers créés ou modifiés ;
> - le contenu complet des fichiers créés ;
> - les sections complètes modifiées ou le diff utile ;
> - l'identité du contenu avant et après synchronisation, si applicable ;
> - les validations réalisées ;
> - la mergeabilité ou le statut Git attendu ;
> - les risques, réserves et écarts ;
> - les décisions Morris ;
> - le verdict du review pack ;
> - le commit et la vérification distante du handoff.
>
> **Après cette vérification**, ChatGPT doit produire une **synthèse globale du cycle** à destination de Morris comprenant **au minimum** :
> 1. l'objectif et le périmètre du cycle ;
> 2. les actions et changements réellement réalisés ;
> 3. les principaux résultats et validations ;
> 4. les risques, réserves, écarts ou éléments non couverts ;
> 5. la distinction entre observations, recommandations et décisions déjà validées ;
> 6. le verdict ChatGPT ;
> 7. la prochaine décision ou action attendue de Morris.
>
> La synthèse doit être compréhensible sans devoir relire l'intégralité du rapport Cursor ou du review pack, tout en restant fidèle au contenu du handoff Git.
>
> Elle ne doit **pas** transformer une recommandation, une hypothèse ou un résultat technique en décision validée sans GO Morris.
>
> Si le handoff est absent, obsolète, incohérent, incomplet ou synthesis-only, ChatGPT doit répondre :
>
> **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING**
>
> Si Cursor annonce un handoff publié mais que le fichier distant reste ancien, absent ou incomplet, ChatGPT doit répondre :
>
> **REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED**
>
> **Le rapport Cursor seul ne remplace pas le handoff Git.** ChatGPT doit lire depuis Git :
> branche `sfia/review-handoff` · fichier `sfia-review-handoff/latest-chatgpt-review.md`
> (jamais le fichier racine historique comme canonique).
