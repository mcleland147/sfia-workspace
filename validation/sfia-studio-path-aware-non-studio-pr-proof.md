# Artefact temporaire — preuve CI path-aware hors Studio

**Date/heure :** 2026-07-27 07:27:01 CEST (+0200)

**Gate Morris :** `GO PROVE OPTION A PATH-AWARE REQUIRED CHECK ON NON-STUDIO PR — SFIA STUDIO V3-NATIVE`

**Base SHA :** `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513`

## Objectif

Déclencher une pull request vers `main` hors `projects/sfia-studio/**` et hors `.github/workflows/sfia-studio-ci.yml`, afin d'observer :

- `studio_changed=false` ;
- validation lourde Studio skipped ;
- `SFIA Studio Required Gate` success avec le message non-Studio.

## Anti-claims

- aucune modification SFIA Studio ;
- aucune activation M1 ;
- aucune intention de merge dans ce cycle ;
- fichier destiné uniquement à déclencher la preuve PR ;
- Option A non COMPLETE ;
- T-A7 non ouvert.
