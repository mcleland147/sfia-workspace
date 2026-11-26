# Procédure candidate — qualification Admin LIVE bornée

| Champ | Valeur |
|---|---|
| Statut | **CANDIDATE — NOT EXECUTED** |
| Gates | G-ADMIN-SECRET puis G-ADMIN-LIVE — **Morris GO requis** |
| Date | 2026-11-26 |

## Critères de readiness (tous requis avant demande de clé)

1. Transport LIVE fail-closed (GO + DEV + processus collecteur + registry)
2. Destination `https://api.openai.com/v1` + `redirect:error` + body borné à la lecture
3. Secret inaccessible au produit / Nora / navigateur / Git / CLI argv
4. Permissions PG exercées (`sfia_admin_collector_login` write snapshots ; `sfia_finops_reader_login` SELECT only)
5. Intégrité snapshots (partial ↛ complete ; older ↛ newer)
6. Séparation TEST_SUBSTITUTED / LIVE (provenance durable ; TEST exclu des projections)
7. Collecte + persistance intégrées
8. Lecture FinOps cloisonnée
9. Procédure de provisionnement (ci-dessous)
10. Enveloppe LIVE précise

## Enveloppe LIVE minimale proposée

| Paramètre | Valeur |
|---|---|
| Organisation | celle autorisée DEV uniquement |
| Projet OpenAI | un `project_id` DEV explicite (`--project-id`) |
| Endpoints | GET `/organization/costs` et/ou un Usage path allowlisté |
| Fenêtre | `start_time` + `end_time` UTC **courte et terminée** |
| Granularité | `1d` (ou `1h` si mandat) |
| Pages | max 20 (défaut 10) |
| Retries | max 3 ; re-check GO avant chaque retry |
| Données | volume borné ; pas de balayage org entier |

## Provisionnement secret (Morris)

1. Créer la clé Admin sur le portail OpenAI (hors chat).
2. Stocker **uniquement** dans le secret store local de l’opérateur (Keychain / fichier env isolé non versionné, hors `.env.local` partagé).
3. Exporter dans le **seul** processus collecteur :
   - `SFIA_ADMIN_COLLECTOR_PROCESS=1`
   - `STUDIO_LANE=DEV`
   - `SFIA_ADMIN_USAGE_LIVE=1`
   - `OPENAI_ADMIN_KEY` (jamais argv, jamais chat, jamais Git)
4. Lancer `scripts/finops-admin-collect.mts` avec `--start-time` `--end-time` `--project-id`.
5. Vérifier `collection_provenance=LIVE` en PG ; lecture produit FinOps.
6. Révocation : retirer la variable d’env ; révoquer la clé sur le portail ; `SFIA_ADMIN_USAGE_LIVE` unset.

## STOP

- Fuite de secret, effet hors enveloppe, 401/403 inattendus, contamination RECETTE, balayage org non filtré.

## Non-présomptions

- Les coûts peuvent arriver en retard — prévoir rejeu idempotent.
- Permissions compte ≠ documentation SDK.
- Aucun appel LIVE dans le cycle de préparation.
