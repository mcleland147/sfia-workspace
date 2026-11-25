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
