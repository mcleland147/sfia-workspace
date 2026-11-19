# As-built — Ensemble 06 / Journal V4

| Métadonnée | Valeur |
|---|---|
| Date | 19/11/2026 — correctif final UX + mise à disposition RECETTE |
| Branche | `sfia/next-journal-delivery-20261119` |
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

## Autorité

- Pas de mutation D6 · pas de fixture RECETTE · pas de push produit
