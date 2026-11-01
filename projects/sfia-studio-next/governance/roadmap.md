# SFIA Studio Next — Living Roadmap

**Nature :** feuille de route de construction Next ; distincte de `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`.

**État courant au 2026-11-01 :** R0-A **VALIDATED BY MORRIS** (SEF v0.2) ; **R0-B CLOSURE PREPARATION IN PROGRESS** sur branche documentaire, pas de merge à `main`. La documentation Next n'est pas encore la baseline publiée sur main.

| Jalon | Statut | Résultat/exit |
| --- | --- | --- |
| R0-A — méthode et rebaseline | **VALIDATED — CONVERSATION** ; publication Git candidate | SEF v0.2 approuvé, frontières et périmètre Next décidés |
| R0-B — bootstrap gouverné | **IN PROGRESS** | Source Git Next, SEF + décision, roadmap, convention naming **VALIDATED BY MORRIS**, vision référencée, preuves d'intégration et routage qualifié |
| R1 — cadrage produit | **NOT STARTED / NOT AUTHORIZED AS DELIVERY** | Vision, outcomes, capability map, frontières et exigences, REX explicite |
| R2 — conception fonctionnelle | **NOT STARTED** | Règles, processus, décisions, contrats et exceptions |
| R3 — UX/UI | **NOT STARTED** | Parcours, maquettes et contrats UX approuvés |
| R4 — architecture technique | **NOT STARTED** | Architecture, ADR, contrats, responsabilités et choix de persistence |
| R5 — reconstruction par macro-capacités | **NOT STARTED** | Code neuf, preuves verticales, documents synchronisés |
| R6 — qualification et bascule | **NOT STARTED** | Tests E2E/REAL applicables, gouvernance de transition, GO adoption |

## Chemin critique

1. **Routage SFIA v2.6 Next : CANDIDATE ON R0-B BRANCH** — guide partagé `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.0b et template partagé `prompts/templates/sfia-cycle-execution-template.md` §2.0.H modifiés sur branche, testés par contrôles statiques (présence sources, frontières, arrêt et absence de suppression du routage historique). **Pas actif sur `main`** ; la couche 1 Instructions projet ChatGPT est **rédigée sous `governance/chatgpt-project-instructions-next.md`**, mais **NON APPLIQUÉE** dans l'interface du projet ChatGPT (action Morris requise après revue/intégration).
2. **Intégration binaire trois schémas : PENDING** — trois PNG originaux inspectés et SHA-256 contrôlés ; archive avec les chemins/noms cibles et **script d'import local validé par test isolé**. L'API de modification Git actuellement disponible n'accepte pas directement les octets binaires locaux : `assets/*.png` sont **absents de cette branche**. Une importation via le worktree Cursor reste nécessaire, puis commit/push autorisés et vérification Git distante des octets et empreintes avant tout claim INTEGRATED.
3. **R0-B Git integration : PENDING** — revue consolidée du macro-lot (documents Next + deux fichiers routing/template partagés). Aucun changement dans `projects/sfia-studio/`. **GO PR/merge Morris distincts** toujours nécessaires.
4. **Nomenclature : VALIDATED BY MORRIS (2026-11-01)** — règles et principe fondateur adoptés pour la construction Next ; préciser le glossaire R1/R2 et les conventions techniques R4, sans micro-cycle documentaire dédié.
5. **R1 : NON AUTORISÉ EN DELIVERY** — cadrage produit conditionné par les gates de sortie R0-B et la validation de sa trajectoire.

**Dépendance structurante :** décisions historiques H7/H8 et G0-A/B conservées en tant qu'historique ; leur portée pour la nouvelle architecture reste à arbitrer, sans supersession implicite. Ancien runtime v3 **NON ADOPTED**.

**Règle de mise à jour :** un statut ne devient PASSED/READY/ADOPTED qu'après preuve et décision ; mettre à jour cette roadmap dans le même macro-lot que le changement, sans cycle documentaire artificiel.

## R0-B — critères de clôture et réserves factuelles (2026-11-01)

| Contrôle | État | Preuve / suite |
| --- | --- | --- |
| R0-A SEF v0.2 | **VALIDATED MORRIS**, présent sur branche | `governance/SEF.md` + décision du 2026-11-01 |
| Convention nommage | **VALIDATED MORRIS**, présente sur branche | `governance/product-naming-conventions.md` + décision |
| Routage v2.6 Next | **MODIFIED ON BRANCH / STATIC CHECK PASS** | Guide §4.3.0b + template §2.0.H ; effets applicatifs non testés en Cursor |
| Trois schémas | **SOURCE CONTENT VERIFIED, NOT IN GIT** | Originaux SHA-256 contrôlés, script d'import local testé en environnement isolé ; import Git et relecture distante requis |
| Instructions ChatGPT Next | **DRAFT READY / NOT APPLIED** | `governance/chatgpt-project-instructions-next.md` à appliquer par Morris dans les réglages du projet |
| CI/validation intégration | **NOT EXECUTED / NOT PROVEN** | Vérifier CI et impact des deux chemins de méthode partagés lors de l'intégration |
| PR / merge / main | **NOT AUTHORIZED / NOT DONE** | GO Morris séparé puis vérification post-merge |

**Verdict : R0-B NOT CLOSED — CLOSURE PACK IN PROGRESS.** Le GO Morris de poursuite autorise la préparation de clôture mais n'autorise pas implicitement PR, merge ou adoption runtime. Prochain gate : finir l'import binaire + qualification du routage, contrôle de l'intégration et décision Morris de PR/merge distincte.
