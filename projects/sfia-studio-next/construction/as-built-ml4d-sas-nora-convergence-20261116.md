# As-built — ML4D Sas Nora convergence + correctifs post-recette (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Macro-lot | R5 / ML4D — Sas conversationnel + projection + création + garanties |
| Type | EVOL / PATCH candidat · **NO RELEASE** |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Parent | `ec7405f323f86a0533dc507a1bfffc60ca1e5d0e` |
| Candidat | SHA post-commit (ce cycle) |
| Contrats | docs@`22ee5540` (fonctionnel + technique) |
| Figma | `itgvCulInEnFY6DvgIegvP` 607:* — lecture seule |
| Lane | **DEV only** — RECETTE **inchangée** |
| RECETTE servie | `ec7405f3` / `67akzrr6bFEp4YOh7aHD7` @ `:3200` |
| Build DEV | `jw9G3w66bIZxtpzFshlr6` |
| Package | `0.0.0-dev` |

## Correctifs post-recette Morris (C1–C4)

| Id | Anomalie | Cause vérifiée | Correction |
| --- | --- | --- | --- |
| C1 | Intention = demande de renommage | `goal` mappé dans `intention` | Champ structuré `projectIntention` ; `goal` = tour local ; merge conserve l'intention si vide |
| C2 | Question résolue encore ouverte | merge sticky `draft.openQuestions.length > 0 ? draft : prior` + dump D4 OPEN dans l'UI | Remplacement courant par clarifications du tour ; aperçu = projection seulement |
| C3 | Première intention trop longtemps + bande vide | EXPLORING→first_intention ; `max-height: 655px` | Présentation clarification après 1er échange ; workspace flex remplit la hauteur shell |
| C4 | « Ajuster l'aperçu » | Parcours manuel UI | Supprimé du Sas ; API PATCH conservée (dette technique / tests) |

## Architecture (inchangée dans ses autorités)

1. Qualification D3 unique → draft projection D2 après COMPLETE.
2. `projectIntention` / `desiredOutcome` / `initialScope` / `proposedProjectName` / `clarifications` / assessment structurés.
3. Création = D2 `canCreate` + clic Pilote uniquement.
4. Pas de second LLM, pas de parse Markdown, pas de lexique de résolution.
5. D4 global hors périmètre — dette compteurs/sujets transmise à la revue espace projet.

## Preuves

| Niveau | Résultat |
| --- | --- |
| UNIT (405) | PASS |
| PG create-project + preparation-patch | PASS |
| BROWSER FAKE Sas T1→T7 + chat-first (6) | PASS |
| next build DEV | PASS (`jw9G3w66bIZxtpzFshlr6`) |
| Nora LIVE nouveau candidat | **NOT PROVEN** |
| Morris UX candidat | **PENDING** (GO RECETTE ultérieur) |
| RECETTE | **inchangée** |

## Manifeste candidat RECETTE (non déployé)

- source_sha: (HEAD post-commit)
- tree_web: (post-commit)
- build_dev: `jw9G3w66bIZxtpzFshlr6`
- schema: 013 present — aucune migration
- previous_recette: `ec7405f3` / `67akzrr6bFEp4YOh7aHD7`
- go_recette: **REQUIS** (mandat distinct)

## Rollback

Revert commit local. RECETTE non touchée. `projection_json` v1 compatible.
