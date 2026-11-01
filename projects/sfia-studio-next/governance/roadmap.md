# SFIA Studio Next — Living Roadmap

**Nature :** feuille de route de construction Next ; distincte de `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`.

**État courant au 2026-11-01 :** R0-A **VALIDATED BY MORRIS** (SEF v0.2) ; **R0-B INITIALIZATION IN PROGRESS** sur branche documentaire, pas de merge à `main`. La documentation Next n'est pas encore la baseline publiée sur main.

| Jalon | Statut | Résultat/exit |
| --- | --- | --- |
| R0-A — méthode et rebaseline | **VALIDATED — CONVERSATION** ; publication Git candidate | SEF v0.2 approuvé, frontières et périmètre Next décidés |
| R0-B — bootstrap gouverné | **IN PROGRESS** | Source Git Next, SEF + décision, roadmap, convention naming candidate, vision référencée, preuves d'intégration et routage qualifié |
| R1 — cadrage produit | **NOT STARTED / NOT AUTHORIZED AS DELIVERY** | Vision, outcomes, capability map, frontières et exigences, REX explicite |
| R2 — conception fonctionnelle | **NOT STARTED** | Règles, processus, décisions, contrats et exceptions |
| R3 — UX/UI | **NOT STARTED** | Parcours, maquettes et contrats UX approuvés |
| R4 — architecture technique | **NOT STARTED** | Architecture, ADR, contrats, responsabilités et choix de persistence |
| R5 — reconstruction par macro-capacités | **NOT STARTED** | Code neuf, preuves verticales, documents synchronisés |
| R6 — qualification et bascule | **NOT STARTED** | Tests E2E/REAL applicables, gouvernance de transition, GO adoption |

## Chemin critique

1. **Routage SFIA v2.6 Next : CANDIDATE ON R0-B BRANCH** — guide partagé `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.0b et template partagé `prompts/templates/sfia-cycle-execution-template.md` §2.0.H modifiés sur branche, testés par contrôles statiques (présence sources, frontières, arrêt et absence de suppression du routage historique). **Pas actif sur `main`** ; la couche 1 Instructions projet ChatGPT externe reste à aligner après intégration Git.
2. **Intégration binaire trois schémas : PENDING** — trois PNG originaux présents dans les sources conversation, empaquetés avec les noms cibles et SHA-256 vérifiés. Le canal de modification Git actuellement disponible ne sait pas lire directement les octets binaires locaux : `assets/*.png` **absents du repo**. Un pack source prêt pour une importation Git contrôlée a été constitué ; ne jamais le déclarer intégré avant relecture distante par chemin et empreinte.
3. **R0-B Git integration : PENDING** — revue consolidée du macro-lot (six documents Next + deux fichiers routing/template partagés), puis gate Morris spécifique avant toute PR/merge ; aucun changement dans `projects/sfia-studio/`.
4. **Nomenclature : CANDIDATE** — principe de cohérence métier demandé par Morris ; revue des règles précises avec R0-B/R1, pas de cycle documentaire isolé.
5. **R1 : NON AUTORISÉ EN DELIVERY** — cadrage produit conditionné par les gates de sortie R0-B et la validation de sa trajectoire.

**Dépendance structurante :** décisions historiques H7/H8 et G0-A/B conservées en tant qu'historique ; leur portée pour la nouvelle architecture reste à arbitrer, sans supersession implicite. Ancien runtime v3 **NON ADOPTED**.

**Règle de mise à jour :** un statut ne devient PASSED/READY/ADOPTED qu'après preuve et décision ; mettre à jour cette roadmap dans le même macro-lot que le changement, sans cycle documentaire artificiel.
