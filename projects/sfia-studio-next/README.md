# SFIA Studio Next — nouveau programme de construction

**Produit commercial :** SFIA Studio (nom conservé). **Programme interne :** SFIA Studio Next.

**Statut au 2026-11-02 :** R0-A SEF v0.2 validé ; R0-B intégré et clôturé ; **R1 CLOSED BY MORRIS WITH CARRIED RESERVES**, décision [R1 formal exit](governance/decisions/2026-11-02-r1-cadrage-formal-exit.md) et [vision v0.15](cadrage/vision-produit.md) (§§2.29–2.39). **Intégration Git R1 vérifiée via PR #639, `main@8751775edc314e8fc7f0855104e5000290be9839` ; R2 EN REVUE DE SORTIE sur la branche `sfia/next-r2-functional-specs`**. Neuf domaines et sept scénarios validés ; quatre qualifications méthodologiques R2 documentées. Aucun runtime Next implémenté/adopté.

## Périmètres Git

- Référentiel unique : `mcleland147/sfia-workspace`.
- **Next :** `projects/sfia-studio-next/` — documentation, conception et, plus tard, nouveau code.
- **Historique :** `projects/sfia-studio/` — code et sources historiques consultables pour capitalisation ; pas de dépendance implicite à ses moteurs, Build Doctrine, Roadmap ou PRR.
- SFIA **v2.6** reste le processus externe ChatGPT–Cursor. Les sources de l'ancien Studio v3 (30–37) sont consultables pour capitalisation, **sans autorité produit automatique dans Next**, conformément à la vision R1.

## Navigation canonique

| Répertoire | Destination |
| --- | --- |
| `governance/SEF.md` | Studio Engineering Framework v0.2 validé (méthode de construction Next) |
| `governance/roadmap.md` | Roadmap Next ; **mentions pré-merge R1/R2 obsolètes sur `main`** à requalifier dans un mandat distinct ; R2 engagé sur branche candidate |
| `governance/decisions/` | Décisions humaines, portée et réserves |
| `governance/product-naming-conventions.md` | Convention de nommage orientée produit — **VALIDATED BY MORRIS 2026-11-01** |
| `cadrage/vision-produit.md` | **R1 — vision Pilote/Nora v0.15, CLOSED WITH CARRIED RESERVES** ; 9 domaines IN/OUT, 7 E2E et reprise méthodologique R2 ; décisions, mémoire vivante, cycles/CKC, Git facultatif et réalisation gouvernée |
| `cadrage/vision-cible/README.md` | Trois schémas de vision fondateurs et PNG originaux intégrés sur `main` (R0-B) |
| `governance/chatgpt-project-instructions-next.md` | Version Next-only validée, publiée sur `main` ; application effective aux réglages ChatGPT non observée |
| `conception-fonctionnelle/` | [Spécifications fonctionnelles R2](conception-fonctionnelle/README.md) — neuf domaines D1–D9 `VALIDATED SPEC` individuellement ; 300 règles et 241 scénarios documentaires ; revue de sortie préparée |
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

R0-A validé → **R0-B clos sur `main`** → **R1 clos par Morris avec réserves, PR #639 intégrée et vérifiée** → **R2 conception fonctionnelle en revue formelle de sortie sur branche candidate, CKI validés en contenu ; R3 UX non engagé** → R3 UX → R4 architecture technique → R5 construction → R6 qualification/bascule.

Voir `governance/roadmap.md` pour la qualification vivante et les gates. Git et preuves primaires priment sur les résumés ; la documentation décrit honnêtement la portée prouvée.
