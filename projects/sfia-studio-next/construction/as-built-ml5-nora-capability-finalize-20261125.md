# As-built — Finalisation Nora × Studio + cutover RECETTE (2026-11-25)

## Mandat

GO Morris explicite : trois écarts ChatGPT (`99fb720b`) + bascule RECETTE dans le même delivery.
Base tip `85930fda` · handoff précédent référencé pour acquis inchangés.

## Écart 1 — Simplification documentaire

### Avant
Chemins concurrents : `documentProposal` × fence LEGACY × `PRIOR_ASSISTANT_MESSAGE` × confront privilégiant la fence partielle.

### Après
- **Une autorité canonique** pour les productions courantes : `documentProposal` (C20).
- Fence = transport / rehydration uniquement — **ne remplace plus** le corps canonique.
- LEGACY fence : compatibilité de **lecture** historique ; plus d'autorité concurrente d'écriture nominale.
- Révision précise : `extractFragmentIds` + `applyTargetedFragmentRevision` + `assertFragmentScope` (RM-03 / R04 sans altérer les autres règles/scénarios).
- PREPARE documentaire préservé (`documentaryMaterializeIntents`).

### Réserve
Création « pour inspection seule » sans enregistrement : le modèle candidat/conserve existant couvre la révision ; une création CREATE PREPARE avec inspection OPEN sans write reste bornée par `effectConditionStatus` / conservation explicite — pas de second stockage introduit.

## Écart 2 — Guidance cognitive

### Supprimé
Fallback déterministe `CONCEPTION_FONCTIONNELLE → DELIVERY` dans `buildCognitiveForecast`.

### Remplacé par
- Catalogue enrichi (finalité CKI + pertinence + id) transmis à Nora.
- Échec de structure → **CLARIFICATION / STRUCTURED_FALLBACK honnête** (aucune substitution de cycles).
- D5 valide le catalogue ; D5 ne choisit pas.

## Écart 3 — Activité LIVE contextualisée

- Objectif initial via `projectMissionHeadlineFromUserAsk` (pas « Nora engage le travail demandé » générique).
- Titres de groupes contextualisés depuis les summaries métier des événements.
- Plafonds 40/60 retirés du journal ; UI paginée (« Afficher la suite ») avec accès réel.
- Marque ✓ uniquement si `state === done` — l'inactivité n'invente plus le succès.

## Protections préservées

Conducteur D3, checkpoints, continuity, Git RO, HumanDecision, CAS/fencing, OPERATIONAL_PROVISIONAL 2M/1M/120.

## Identité candidat (cutover)

| Champ | Valeur |
| --- | --- |
| SHA | `b21df867acd4f63934612ef6dee77e78ecf3b863` |
| Tree | `2fefa9a41e38624c55cb1be6ca1ebfd944bcc92a` |
| Web tree | `eea7b17bceb55b7ce1e31c742c84819e75696d36` |
| BUILD_ID RECETTE | `gzqaaKhie0CqcfpgrvMMp` |
| Digest | `af8c516356774e017dceb85530d5a0c97490269d173fd978c916a2f9495c5f83` |
| URL | `http://127.0.0.1:3200` |
| PG | `:5434` / `sfia_next_recette_ml4` |
| Précédent | `ca0b114c` / `RkthxGW_bZUygxYbwP9Hq` |
| Backup | `…/ml5-20261125T190405Z-pre-b21df867acd4` |
