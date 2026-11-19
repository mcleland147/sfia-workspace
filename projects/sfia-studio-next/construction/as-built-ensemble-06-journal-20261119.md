# As-built — Ensemble 06 / Journal V4 (candidat local)

| Métadonnée | Valeur |
|---|---|
| Date | 19/11/2026 |
| Branche | `sfia/next-journal-delivery-20261119` |
| Base docs | `6879d34e` (contrats Journal v1.0 + technique v0.3) |
| Base `main` | `d3d199ad` |
| Versioning | `NO RELEASE` / `0.0.0-dev` |
| Lane | DEV only (`127.0.0.1:5433`) — RECETTE/STABLE non mutées |

## Réalisé

### D4 (§16)
- Migration additive `014_journal_d4_revisions.sql` : `knowledge_subject_summary_revisions`, `knowledge_decision_explanation_revisions`, `knowledge_open_point_events`.
- Domaine `domains/knowledge/journal.ts` : listes projet-scopées, révisions immuables, résolution factuelle OPEN/RESOLVED, reparent anti-cycle, recherches Sujets/Décisions.
- `ensureSubject` : réutilisation de titre limitée au même parent (homonymes sous parents distincts autorisés).

### Projection / API
- `getOwnedProjectContext` hydrate via `listProjectKnowledge` (toutes préparations liées du projet propriétaire).
- `GET /api/projects/[projectId]/journal` — projection Journal (tabs, recherche, détails).
- `page.tsx` projet : **ne strip plus** `subjectId` ; passe `parentSubjectId` et résumés.

### UI V4
- `ProjectJournal.tsx` : onglets Sujets/Décisions, recherche, filtre Points ouverts, arbre, 40/60, agrandissement, décisions D6 lecture seule + explications.
- Tokens CSS : tabs / split / enlarge.

### Preuves exécutées
- `tsc --noEmit` PASS
- `vitest` `journal-d4-revisions.pg.test.ts` : 6/6 PASS sur `sfia_next_e2e`

## Non réalisé / PARTIAL (honnête)

- J-C04 réactivation Nora LIVE : NOT IMPLEMENTED
- J-C06 currentness/contradictions runtime : NOT IMPLEMENTED
- J-C13 deep-link message 1000+ / brouillon : NOT IMPLEMENTED (callback non câblé)
- J-C14 ouverture document/version depuis Journal : NOT IMPLEMENTED
- Captures Figma↔runtime BROWSER : NOT RUN
- LIVE Nora / REAL Git : NOT RUN / hors GO

## Autorité

- D6 non modifié en écriture depuis le Journal.
- Aucun moteur mémoire parallèle.
- Aucun push projet / PR / merge dans ce cycle.
