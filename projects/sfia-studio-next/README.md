# SFIA Studio Next — nouveau programme de construction

**Produit commercial :** SFIA Studio (nom conservé). **Programme interne :** SFIA Studio Next.

**Statut :** R0-A méthode validée par Morris le 2026-11-01 ; R0-B préparation de clôture engagée sur branche dédiée, pas encore intégrée à main. Naming validé ; trois images originales prêtes pour import Git, mais non publiées ; instructions ChatGPT prêtes, non appliquées. Aucun nouveau runtime implémenté ou adopté.

## Périmètres Git

- Référentiel unique : `mcleland147/sfia-workspace`.
- **Next :** `projects/sfia-studio-next/` — documentation, conception et, plus tard, nouveau code.
- **Historique :** `projects/sfia-studio/` — code et sources historiques consultables pour capitalisation ; pas de dépendance implicite à ses moteurs, Build Doctrine, Roadmap ou PRR.
- SFIA **v2.6** reste le processus externe ChatGPT–Cursor. La **doctrine produit SFIA v3 (30–37)** conserve son autorité tant qu'aucune décision explicite ne la supersède.

## Navigation canonique

| Répertoire | Destination |
| --- | --- |
| `governance/SEF.md` | Studio Engineering Framework v0.2 validé (méthode de construction Next) |
| `governance/roadmap.md` | État vivant du nouveau programme, preuves et réserves R0-B |
| `governance/decisions/` | Décisions humaines, portée et réserves |
| `governance/product-naming-conventions.md` | Convention de nommage orientée produit — **VALIDATED BY MORRIS 2026-11-01** |
| `cadrage/vision-cible/README.md` | Trois schémas de vision transmis par Morris : index et statut ; PNG binaires non encore dans Git |
| `governance/chatgpt-project-instructions-next.md` | Complément d'instructions Next prêt, non encore appliqué aux réglages ChatGPT |
| `conception-fonctionnelle/` | Exigences, règles et contrats fonctionnels (futurs R2) |
| `ux-ui/` | Contrats UX/UI et références visuelles (futurs R3) |
| `architecture-technique/` | Architecture et ADR (futurs R4), référence CURRENT une fois le runtime développé |
| `construction/` | Macro-lots de réalisation (R5) |
| `validation-qualite/` | Scénarios, preuves, réserves (R5/R6) |
| `capitalisation/` | Registre de savoir-faire historique et REX |

**Principe de dossier :** fichier directement dans son répertoire métier ; sous-dossier de macro-lot seulement si un ensemble conséquent d'artefacts le justifie. Pas de dossiers vides ou de micro-cycles documentaires.

## Frontières de gouvernance

- **Morris** : décisions produit/construction, autorité Git, gates, adoption.
- **ChatGPT** : qualifier, challenger, rédiger/revoir, intégrer des documents sur branche **sous mandat explicite et borné**.
- **Cursor** : interventions techniques sous contrat externe SFIA v2.6.
- Les décisions structurantes restent des décisions humaines ; une recommandation ne devient pas automatiquement une décision.
- Aucune PR, merge, modification d'ancien runtime ou promotion doctrine n'est impliquée par cette initialisation.

## Première trajectoire

R0-A validé → **R0-B initialisation en cours** → R1 cadrage du nouveau produit → R2 conception fonctionnelle → R3 UX → R4 architecture technique → R5 construction → R6 qualification/bascule.

Voir `governance/roadmap.md` pour la qualification vivante et les gates. Git et preuves primaires priment sur les résumés ; la documentation décrit honnêtement la portée prouvée.
