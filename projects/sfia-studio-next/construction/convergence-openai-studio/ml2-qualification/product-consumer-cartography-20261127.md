# ML2 — Cartographie produit des consommateurs

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| HEAD baseline | `e784232b` → local `56572cf8` + worktree delivery |
| Statut | PRODUCT INTEGRATION INSTRUCTION |

## Capacité → consommateurs

| Capacité | Consommateurs | Action |
|---|---|---|
| Lexical + embeddings locaux | Nora `search_project_resources` ; Journal API ; `selectRelevantKnowledgeContext` ; reprise cognitive | **ADAPT** — service commun `hybridKnowledgeSearch` |
| Decisions bornés | D8 critères ; jugements annexes Nora | **ADAPT** — `runBoundedJudgment` ; jamais D6 |
| Vision ponctuelle | Git PDF scanné ; inspect document `SCANNED_NO_TEXT` | **ADAPT** — après extract vide |
| PDF extract + viewer | inchangé | **KEEP** |
| semantic-qualification | Nora turn | **KEEP** |
| FinOps/OBS | toutes émissions ML2 | **ADAPT** — `recordProviderUsageObservation` |

## Non concernés (justifiés)

| Domaine | Motif |
|---|---|
| Audio / Realtime | Macro-lot 3 |
| Images génératives | DEFER doctrine |
| VS / File Search / fileId | DEFER DATA-01 |
| Continuity native V2–V4 | DEFER ; D3 V1 KEEP |
| Cursor realization D7/D8 exécution | hors ML2 cognition doc |

## Persistance

Fichier actuel = preuve ML2 I2. **Priorité produit :** table PG `derived_embedding_chunks` (migration **027 candidate**, GO distinct). Adapter commun ; backend file tant que 027 non appliquée.
