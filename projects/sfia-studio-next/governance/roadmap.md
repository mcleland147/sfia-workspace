# SFIA Studio Next — Living Roadmap

**Nature :** feuille de route de construction Next ; distincte de `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`.

**État courant au 2026-11-01 :** R0-A **VALIDATED BY MORRIS** (SEF v0.2) ; **THREE ORIGINAL PNG INTEGRATED ON CANDIDATE BRANCH** `docs/sfia-studio-next-r0b-foundation-01` @ `3d3d09eca427e6dcaaec589a6a64561227f8a622` ; **R0-B NOT CLOSED** — pas de merge à `main`. La documentation Next n'est pas encore la baseline publiée sur main.

| Jalon | Statut | Résultat/exit |
| --- | --- | --- |
| R0-A — méthode et rebaseline | **VALIDATED — CONVERSATION** ; publication Git candidate | SEF v0.2 approuvé, frontières et périmètre Next décidés |
| R0-B — bootstrap gouverné | **READY FOR MORRIS PR/MERGE GATE** | Source Git Next, SEF + décision, roadmap, convention naming **VALIDATED BY MORRIS**, vision + 3 PNG originaux intégrés sur branche candidate avec preuve distante, routage Next qualifié statiquement |
| R1 — cadrage produit | **NOT STARTED / NOT AUTHORIZED AS DELIVERY** | Vision, outcomes, capability map, frontières et exigences, REX explicite |
| R2 — conception fonctionnelle | **NOT STARTED** | Règles, processus, décisions, contrats et exceptions |
| R3 — UX/UI | **NOT STARTED** | Parcours, maquettes et contrats UX approuvés |
| R4 — architecture technique | **NOT STARTED** | Architecture, ADR, contrats, responsabilités et choix de persistence |
| R5 — reconstruction par macro-capacités | **NOT STARTED** | Code neuf, preuves verticales, documents synchronisés |
| R6 — qualification et bascule | **NOT STARTED** | Tests E2E/REAL applicables, gouvernance de transition, GO adoption |

## Chemin critique

1. **Routage SFIA v2.6 Next : CANDIDATE ON R0-B BRANCH** — guide partagé `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.0b et template partagé `prompts/templates/sfia-cycle-execution-template.md` §2.0.H modifiés sur branche, testés par contrôles statiques (présence sources, frontières, arrêt et absence de suppression du routage historique). **Pas actif sur `main`** ; la couche 1 Instructions projet ChatGPT est **rédigée sous `governance/chatgpt-project-instructions-next.md`**, mais **NON APPLIQUÉE** dans l'interface du projet ChatGPT (action Morris requise après revue/intégration).
2. **THREE ORIGINAL PNG INTEGRATED ON CANDIDATE BRANCH** — commit binaire `3d3d09eca427e6dcaaec589a6a64561227f8a622` ; octets relus depuis `origin/docs/sfia-studio-next-r0b-foundation-01` ; SHA-256 distants :
   - `01-pilote-nora-capacites.png` → `df80a9470c32d5f18aa0a21087300648f80dde5beec4f3fbba68d3d61073f1ef`
   - `02-cockpit-architecture-conceptuelle.png` → `1c12dedcca1ec1060636d9197b9e6039ef8aaa6edd99763a4cc74e710b139f50`
   - `03-mission-execution-restitution.png` → `b84363a0a3e70eb94013d998975f8646c83daf67013ffb5888e60d704d5fcede`
   Index navigable : `cadrage/vision-cible/README.md` (VISION FONDATRICE, non architecture validée / non REAL).
3. **R0-B Git integration : READY FOR MORRIS PR/MERGE GATE** — documents Next + PNG + deux fichiers routing/template partagés déjà sur branche. Aucun changement dans `projects/sfia-studio/` pour ce lot. **GO PR/merge Morris distincts** toujours nécessaires. **R0-B NOT CLOSED**.
4. **Nomenclature : VALIDATED BY MORRIS (2026-11-01)** — règles et principe fondateur adoptés pour la construction Next ; préciser le glossaire R1/R2 et les conventions techniques R4, sans micro-cycle documentaire dédié. *Réserve lecture seule :* guide/template partagés indiquent encore « CANDIDATE » pour le naming — écart documentaire non corrigé dans ce lot (chemins partagés hors allowlist).
5. **R1 : NON AUTORISÉ EN DELIVERY** — cadrage produit conditionné par les gates de sortie R0-B et la validation de sa trajectoire.

**Dépendance structurante :** décisions historiques H7/H8 et G0-A/B conservées en tant qu'historique ; leur portée pour la nouvelle architecture reste à arbitrer, sans supersession implicite. Ancien runtime v3 **NON ADOPTED**.

**Règle de mise à jour :** un statut ne devient PASSED/READY/ADOPTED qu'après preuve et décision ; mettre à jour cette roadmap dans le même macro-lot que le changement, sans cycle documentaire artificiel.

## R0-B — critères de clôture et réserves factuelles (2026-11-01)

| Contrôle | État | Preuve / suite |
| --- | --- | --- |
| R0-A SEF v0.2 | **VALIDATED MORRIS**, présent sur branche | `governance/SEF.md` + décision du 2026-11-01 |
| Convention nommage | **VALIDATED MORRIS**, présente sur branche | `governance/product-naming-conventions.md` + décision ; guide/template partagés encore libellés CANDIDATE (écart signalé, non modifié) |
| Routage v2.6 Next | **MODIFIED ON BRANCH / STATIC CHECK PASS** | Guide §4.3.0b + template §2.0.H ; **pas encore sur `main`** ; effets LIVE/REAL Cursor non prouvés |
| Trois schémas | **THREE ORIGINAL PNG INTEGRATED ON CANDIDATE BRANCH** | Branche `docs/sfia-studio-next-r0b-foundation-01` @ `3d3d09ec…` ; SHA-256 distants = pack |
| Instructions ChatGPT Next | **DRAFT READY / NOT APPLIED** | `governance/chatgpt-project-instructions-next.md` à appliquer par Morris dans les réglages du projet |
| CI/validation intégration | **NOT EXECUTED / NOT PROVEN** | Vérifier CI et impact des deux chemins de méthode partagés lors de l'intégration / PR |
| PR / merge / main | **NOT AUTHORIZED / NOT DONE** | GO Morris séparé puis vérification post-merge |

**Verdict : R0-B READY FOR MORRIS PR/MERGE GATE — NOT CLOSED — NOT ON MAIN.** Prochain gate : décision Morris distincte de PR/merge, puis CI/intégration et application éventuelle des instructions ChatGPT.
