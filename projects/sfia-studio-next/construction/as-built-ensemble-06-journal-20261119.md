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
