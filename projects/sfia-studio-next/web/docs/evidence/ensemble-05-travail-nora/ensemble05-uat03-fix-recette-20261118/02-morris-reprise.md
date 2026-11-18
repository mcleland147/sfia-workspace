# Fiche de reprise Morris — UAT-03

## Accès

| | |
| --- | --- |
| URL | **http://127.0.0.1:3200** |
| SHA servi | `90c3e59f4a355b463ea047cc45486906bde15680` |
| Build ID | `5C3be3-ils1iOmH3qXo4d` |
| Lane | RECETTE (LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004`) |
| Données | Projet / documents / conversations **conservés** |

## Correctif à retester

Rejouer **UAT-03** : composition `sequence` à **six étapes** avec descriptions `detail` utiles (résultats attendus / vigilances), sans contrainte artificielle à 400 caractères.

Les deux messages historiques `UNKNOWN` restent en place (non réécrits).

## Statut

`FIX DEPLOYED — MORRIS USER RETEST PENDING`
≠ `UAT ACCEPTED` tant que Morris n’a pas validé.

## Rollback

```bash
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-90c3e59f/ROLLBACK-TO-ba1e55ec.sh
```

Restaure `ba1e55ec` / `_eeb9Jy2hV242myk86VTu`. Aucune modification DB.

## Réserves hors scope

UX-01, UX-02, autres réserves matrice V0.9 — non traitées dans ce correctif.
