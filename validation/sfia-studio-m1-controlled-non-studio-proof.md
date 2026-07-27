# Artefact temporaire de preuve M1 — hors SFIA Studio

| Champ | Valeur |
|---|---|
| Date/heure/fuseau | 2026-07-27 10:01:01 CEST (+0200) |
| Gate Morris consommé | `GO VERIFY OPTION A M1 RULESET WITH CONTROLLED PRS — SFIA STUDIO V3-NATIVE` |
| Base SHA | `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513` |
| Branche | `qa/sfia-studio-m1-controlled-non-studio-proof` |
| Chemin | `validation/sfia-studio-m1-controlled-non-studio-proof.md` |

## Objectif

Démontrer en conditions GitHub réelles qu'une pull request vers `main` ne modifiant aucun chemin SFIA Studio :

1. déclenche toujours le workflow path-aware ;
2. produit `studio_changed=false` ;
3. laisse la validation lourde skipped ;
4. fait réussir `SFIA Studio Required Gate` ;
5. n'est pas bloquée par un check absent ou pending sous le ruleset M1.

## Anti-claims

- hors Studio : aucun chemin sous `projects/sfia-studio/**` ni `.github/workflows/sfia-studio-ci.yml` ;
- aucune modification applicative ;
- aucun merge autorisé dans ce cycle ;
- branche et PR destinées à être fermées et supprimées sous gates séparés ;
- Option A non COMPLETE ;
- T-A7 non ouvert ;
- bypass B2 non utilisé.
