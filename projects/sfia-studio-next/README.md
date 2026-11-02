# SFIA Studio Next — nouveau programme de construction

**Produit commercial :** SFIA Studio (nom conservé). **Programme interne :** SFIA Studio Next.

**Statut au 2026-11-01 :** R0-A méthode validée par Morris ; **R0-B CLOSED / ON MAIN** (PR #636–637) ; conventions de nommage validées, trois PNG originaux et routage SFIA v2.6 Next intégrés ; instructions ChatGPT Next-only documentées sur `main` (PR #638), activation des paramètres UI **non observée**. **R1 cadrage produit engagé au niveau vision : principes Pilote/Nora validés en conversation, document v0.14 sur branche R1 candidate, non encore publié sur `main`.** Aucun nouveau runtime implémenté ou adopté.

## Périmètres Git

- Référentiel unique : `mcleland147/sfia-workspace`.
- **Next :** `projects/sfia-studio-next/` — documentation, conception et, plus tard, nouveau code.
- **Historique :** `projects/sfia-studio/` — code et sources historiques consultables pour capitalisation ; pas de dépendance implicite à ses moteurs, Build Doctrine, Roadmap ou PRR.
- SFIA **v2.6** reste le processus externe ChatGPT–Cursor. La **doctrine produit SFIA v3 (30–37)** conserve son autorité tant qu'aucune décision explicite ne la supersède.

## Navigation canonique

| Répertoire | Destination |
| --- | --- |
| `governance/SEF.md` | Studio Engineering Framework v0.2 validé (méthode de construction Next) |
| `governance/roadmap.md` | État vivant du programme : R0-B clos, R1 en cadrage vision sur branche candidate, réserves et gates |
| `governance/decisions/` | Décisions humaines, portée et réserves |
| `governance/product-naming-conventions.md` | Convention de nommage orientée produit — **VALIDATED BY MORRIS 2026-11-01** |
| `cadrage/vision-produit.md` | **R1 — vision Pilote/Nora v0.14**, autonomie, mémoire, cycles/CKC ; Nora dans sas/projet seulement ; projets Studio individuels, sans mémoire/décisions automatiquement partagées ; collaboration Git et sources accessibles ; GitHub par utilisateur, projet sans Git obligatoire, Cursor CLI candidat ; boucle d'exécution sous GO ; carte IN/OUT et scénarios à valider (document vivant sur branche candidate) |
| `cadrage/vision-cible/README.md` | Trois schémas de vision fondateurs et PNG originaux intégrés sur `main` (R0-B) |
| `governance/chatgpt-project-instructions-next.md` | Version Next-only validée, publiée sur `main` ; application effective aux réglages ChatGPT non observée |
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
- Toute PR, merge, modification du runtime historique ou promotion doctrinale exige son **GO Morris spécifique** ; la validation des principes de vision n'autorise pas l'implémentation.

## Première trajectoire

R0-A validé → **R0-B clos sur `main`** → **R1 cadrage du produit en cours au niveau vision (v0.14 validée au niveau des orientations, Git sur branche candidate)** → R2 conception fonctionnelle → R3 UX → R4 architecture technique → R5 construction → R6 qualification/bascule.

Voir `governance/roadmap.md` pour la qualification vivante et les gates. Git et preuves primaires priment sur les résumés ; la documentation décrit honnêtement la portée prouvée.
