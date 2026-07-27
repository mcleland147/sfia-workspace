# Artefact temporaire de preuve M1 — hors SFIA Studio

| Champ | Valeur |
|---|---|
| Date/heure/fuseau | 2026-07-27 10:01:01 CEST (+0200) |
| Gate Morris consommé |  |
| Base SHA |  |
| Branche |  |
| Chemin |  |

## Objectif

Démontrer en conditions GitHub réelles qu'une pull request vers  ne modifiant aucun chemin SFIA Studio :

1. déclenche toujours le workflow path-aware ;
2. produit  ;
3. laisse la validation lourde skipped ;
4. fait réussir  ;
5. n'est pas bloquée par un check absent ou pending sous le ruleset M1.

## Anti-claims

- hors Studio : aucun chemin sous  ni  ;
- aucune modification applicative ;
- aucun merge autorisé dans ce cycle ;
- branche et PR destinées à être fermées et supprimées sous gates séparés ;
- Option A non COMPLETE ;
- T-A7 non ouvert ;
- bypass B2 non utilisé.
