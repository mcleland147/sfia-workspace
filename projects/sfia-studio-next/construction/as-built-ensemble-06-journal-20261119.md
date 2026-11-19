# As-built — Ensemble 06 / Journal V4

| Métadonnée | Valeur |
|---|---|
| Date | 19/11/2026 — correctif final UX + mise à disposition RECETTE |
| Branche | `sfia/next-journal-delivery-20261119` |
| HEAD candidat | `3fc8af5fe97e2d03d139854d008b4724ab4cbd5c` |
| Tree | `57cdb89a693a58ff5c1098d762a22f1e1372c401` |
| Parent pixel | `6c658f9124b3ada48fb01047b2b0ffb7fa5703c3` |
| Base `main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Docs matrice | v0.7 §18 (`f0d2d033`) — lecture seule |
| Versioning | `NO RELEASE` / STABLE NOT AVAILABLE |

## Correctif final (libellés Figma + liserés + empty)

### Libellés statiques réconciliés (extraction MCP)

| Zone | Libellé Figma exact |
|---|---|
| Parent 40/60 | `EXPLORER LES SOUS-SUJETS` · `LA VISION GLOBALE` · `LA SYNTHÈSE` |
| Parent agrandi | `PARCOURS DU THÈME / SOUS-SUJETS` · `REPÈRES DU SUJET` |
| Autonome agrandi | `SOURCES ET HISTORIQUE` · `POUR ALLER PLUS LOIN` |
| Recherche | `SYNTHÈSE ACTUELLE` · `POURQUOI CE SUJET` · `CHEMIN D’ORIGINE` · `RÉFÉRENCE ESSENTIELLE` |
| Points ouverts | `POINTS SIGNIFICATIFS ENCORE OUVERTS` · `QUESTION ENCORE OUVERTE` · `CONTEXTE DU SUJET` · `ORIGINE ET SUIVI` |
| Décision | `LE CHOIX RETENU` · `LE RAISONNEMENT QUI A CONDUIT AU CHOIX` · `CONTEXTE ET SOURCES ESSENTIELLES` · `REPÈRES DE DÉCISION` · `AUTORITÉ / SOURCE` · `PORTÉE / VALIDITÉ` · `ÉVOLUTIONS` |

### Correctifs techniques

- Liserés : padding texte ≥18px hors barre 3px (C09)
- État vide : `flex: 0 0 auto` — hauteur < 320px assertée (C10)
- D6 : `REMPLACÉE` seulement si `supersededByDecisionId`

### Fichiers

- `ProjectJournal.tsx` · `tokens.css` · `StudioShell.tsx` · `studio-shell.css`
- `journal-v4-figma-captures.spec.ts` · `journal-v4-parcours.spec.ts`

## RECETTE (servie)

| Champ | Valeur |
|---|---|
| URL | `http://127.0.0.1:3200` |
| SOURCE_SHA | `3fc8af5fe97e2d03d139854d008b4724ab4cbd5c` |
| BUILD_ID | `VkuCNyaO0VIUbNtM2KJfO` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble06-recette-build-3fc8af5f` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` |
| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` / rôle `sfia_next_recette_ml4` |
| Migration 014 | tables D4 présentes (aucune migration nouvelle ce cycle) |
| Compteurs | projects=23 · messages=560 · conversations=196 · knowledge_subjects=4 |
| Rollback build | `…/3fc8af5f/ROLLBACK-TO-d5bf7eb7.sh` → BUILD `PV12SV9VToVGK-ReSxTqk` |
| Dump pré-E06 | `/Users/morris/Projects/sfia-recette-backups/ml4d-e06-journal-20261119-pre-d5bf7eb7/sfia_next_recette_ml4.dump` |
| Préflight note | `/Users/morris/Projects/sfia-recette-backups/ml4d-e06-journal-20261119-pre-3fc8af5f/` |

### Préflight — dérive observée

Avant cutover, `:3200` servait un build **ML3** (`ZCkIWQ341KK1KOHTD1a5L`, worktree `sfia-workspace-ml3-recette-build-61fe295b`) alors que le LaunchAgent `ml4d-ux004` pointait encore vers `d5bf7eb7` mais était en échec `EADDRINUSE`. Des agents KeepAlive concurrents (ml3, ml4, ml4d-ux003, recette générique) ont été **bootout** temporairement (plists conservés) pour libérer le port au profit de `ml4d-ux004`.

## Autorité

- Pas de mutation D6 · pas de fixture RECETTE · pas de push produit · pas de migration nouvelle
