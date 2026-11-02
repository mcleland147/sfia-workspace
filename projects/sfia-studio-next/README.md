# SFIA Studio Next — nouveau programme de construction

**Produit commercial :** SFIA Studio (nom conservé). **Programme interne :** SFIA Studio Next.

**Statut au 2026-11-02 :** R0-A SEF v0.2 validé ; R0-B intégré et clôturé ; R1 `CLOSED WITH CARRIED RESERVES` ([PR #639](https://github.com/mcleland147/sfia-workspace/pull/639)). **R2 `CLOSED BY MORRIS — WITH CARRIED RESERVES`**, [PR #640](https://github.com/mcleland147/sfia-workspace/pull/640) mergée et [`main@455bb706ecdb13cc046b65b531e72ce96f4a4455`](https://github.com/mcleland147/sfia-workspace/commit/455bb706ecdb13cc046b65b531e72ce96f4a4455) vérifié. Neuf specs `VALIDATED SPEC`, 300 règles, 241 scénarios documentaires ; quinze CKI et 50 relations `VALIDATED CONTENT v0.2`. **R3 UX NOT STARTED**. Next `N/A — NON IMPLÉMENTÉ` ; aucune preuve LIVE/REAL ni `ADOPTED`.

## Périmètres Git

- Référentiel unique : `mcleland147/sfia-workspace`.
- **Next :** `projects/sfia-studio-next/` — documentation, conception et, plus tard, nouveau code.
- **Historique :** `projects/sfia-studio/` — code et sources historiques consultables pour capitalisation ; pas de dépendance implicite à ses moteurs, Build Doctrine, Roadmap ou PRR.
- SFIA **v2.6** reste le processus externe ChatGPT–Cursor. Les sources de l'ancien Studio v3 (30–37) sont consultables pour capitalisation, **sans autorité produit automatique dans Next**, conformément à la vision R1.

## Navigation canonique

| Répertoire | Destination |
| --- | --- |
| `governance/SEF.md` | Studio Engineering Framework v0.2 validé (méthode de construction Next) |
| `governance/roadmap.md` | [Roadmap Next](governance/roadmap.md) — R2 mergé et post-merge vérifié ; R3 UX à engager sous GO distinct |
| `governance/decisions/` | Décisions humaines, dont [sortie R2 avec réserves](governance/decisions/2026-11-02-r2-functional-exit.md) |
| `governance/product-naming-conventions.md` | Convention de nommage orientée produit — **VALIDATED BY MORRIS 2026-11-01** |
| `cadrage/vision-produit.md` | **R1 — vision Pilote/Nora v0.15, CLOSED WITH CARRIED RESERVES** ; 9 domaines IN/OUT, 7 E2E et reprise méthodologique R2 ; décisions, mémoire vivante, cycles/CKC, Git facultatif et réalisation gouvernée |
| `cadrage/vision-cible/README.md` | Trois schémas de vision fondateurs et PNG originaux intégrés sur `main` (R0-B) |
| `governance/chatgpt-project-instructions-next.md` | Version Next-only validée, publiée sur `main` ; application effective aux réglages ChatGPT non observée |
| `conception-fonctionnelle/` | [Référentiel fonctionnel R2](conception-fonctionnelle/README.md) — neuf domaines validés globalement et individuellement, clôture avec réserves, intégré sur `main` |
| [`cki/`](cki/README.md) | **Cycle Knowledge Intelligence Next** — 15 spécialités et [matrice centrale](cki/relations-methodologiques-cki.md) `VALIDATED CONTENT v0.2` par Morris ; guidance non contraignante, aucun runtime adopté |
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

R0-A validé → **R0-B intégré** → **R1 clos et mergé (#639)** → **R2 clos par Morris avec réserves, mergé et vérifié (#640)** → **R3 UX non engagé (prochaine capacité)** → R4 architecture → R5 construction → R6 qualification/bascule.

Voir `governance/roadmap.md` pour la qualification vivante et les gates. Git et preuves primaires priment sur les résumés ; la documentation décrit honnêtement la portée prouvée.
