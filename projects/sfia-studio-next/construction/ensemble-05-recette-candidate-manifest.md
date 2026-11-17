# Manifeste candidat RECETTE — Ensemble 05 Travail avec Nora

| Champ | Valeur |
|---|---|
| Date | 2026-11-17 |
| Macro-lot | R5 / ML4D Ensemble 05 |
| Gate Morris | **PENDING** — déploiement non autorisé dans ce cycle |
| Version produit | **NOT AVAILABLE** (NO RELEASE) |
| Classe prévisionnelle | MINOR potentielle (à confirmer au gate) |
| Dernière STABLE | NOT AVAILABLE |

## Identité Git candidat

| Champ | Valeur |
|---|---|
| Dépôt | `mcleland147/sfia-workspace` |
| Branche source | `feat/next-ml4d-project-space-20261116` |
| Base `main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Parent tip avant gel | `cb638613890bff769b3cbbcc99449b430c89faa6` |
| Commit candidat (gel local) | `1a820ad489f001bfeef4a9958d1de92e6ab1b5f7` |
| Tree candidat | `58baf7b016ddf6a76328120a8a4329185a6880bd` |
| BUILD_ID identifié (build local DEV) | `jYz7jUBt1ewRBNp6HbCgs` |
| Schéma composition | `e05-visual-composition-v1` |
| Schéma projection | `e05-turn-projection-v1` |

## RECETTE actuelle (protégée — non modifiée)

| Champ | Valeur observée |
|---|---|
| URL | `http://127.0.0.1:3200` |
| HTTP | 200 |
| SOURCE_SHA | `cb638613890bff769b3cbbcc99449b430c89faa6` |
| BUILD_ID | `slh3bItXudDCIEaR2WYho` |
| Worktree rollback | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3` |
| DB | `sfia_next_recette_ml4` (ne pas modifier) |

## Capacités

| Capacité | État |
|---|---|
| Grammaire visuelle native | Présente (React/CSS/SVG) |
| Composition ordonnée + fail-closed P1-A | Présente |
| Provenance canonique P1-B | Présente |
| Ancres choices/refs | Présentes |
| Finitions UX V01–V03 | Markdown sûr, dépendances lisibles, refs dédupliquées |
| T05 visionneuse agrandie | Préservée |
| Consultation D4 | Mécanisme existant |
| Git D9 REAL | Non exécuté / non autorisé ce cycle |

## Tests effectués (DEV)

| Suite | Résultat |
|---|---|
| Vitest E05 visual + projection | 32 PASS |
| Playwright E05 | 7 PASS |
| `next build` | PASS · BUILD_ID `jYz7jUBt1ewRBNp6HbCgs` |
| LIVE Nora form-choice | **NOT EXECUTED** |

## Tests restant à effectuer (RECETTE — après GO Morris)

Protocole R01–R08 (demandes naturelles Nora LIVE) — tableau de réception à remplir en session Morris, non prérempli PASS.

## Nora LIVE — préflight (préparation)

| Contrôle | Observation |
|---|---|
| DEV `.env.local` OPENAI_API_KEY | SET (présence) |
| DEV `STUDIO_FORCE_NORA_FIXTURE` | `1` — fixtures actives en DEV |
| RECETTE `~/.config/sfia-studio-next/recette/.env.local` | Présent · `STUDIO_LANE=RECETTE` · OPENAI_API_KEY SET · fixture ABSENT |
| Script start RECETTE | Unset explicite de `STUDIO_FORCE_NORA_FIXTURE` (chemin LIVE prévu) |
| Preuve LIVE exécutée ce cycle | **Aucune** — configuration prête, comportement LIVE non démontré ici |

`DETERMINISTIC ≠ LIVE`. Si le fournisseur échoue au basculement : `RECETTE VISUAL GRAMMAR — LIVE CAPABILITY NOT READY`.

## Rollback

| Élément | Disponibilité |
|---|---|
| Build précédent | `slh3bItXudDCIEaR2WYho` dans worktree `…ensemble04-recette-build-984d77a3` |
| SOURCE_SHA précédent | `cb638613` |
| Restauration | Non exécutée ; disponible pour GO Morris futur |
| Données utilisateur RECETTE | À préserver (pas d’effacement) |

## Isolation / cookies

Deux ports `127.0.0.1` ne séparent pas les cookies. Utiliser un profil navigateur distinct pour RECETTE (réserve ENV-01).

## Réserves

1. LIVE non prouvé ce cycle.
2. Esthétique non pixel-certifiée Figma.
3. Aucun déploiement effectué.

## Verdict préparation

Candidat technique prêt pour **GO Morris de déploiement RECETTE** distinct — ce cycle ne remplace pas `:3200`.
