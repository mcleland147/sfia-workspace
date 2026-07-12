---
status: candidate
version: v2.0
cycle_type: SFIA v2.0 capitalization / pilot selection decision
scope: Framework for selecting the SFIA v2.0 pilot project — decision only, no execution
baseline: SFIA foundation v1.1 (closed)
references:
  - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md
  - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md
  - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md
---

# SFIA v2.0 — Pilot Selection Decision

**Version :** v2.0 (candidate)
**Statut :** Candidate — validation Morris requise
**Branche :** `method/sfia-v2-pilot-selection-decision`
**Base :** `main` @ `daef5d7` (post PR #92)
**Zone :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/`

> **Ce document est un framework de décision.** Il ne crée aucun projet dans `projects/`, ne lance aucun bootstrap réel et ne sélectionne aucun pilote sans validation Morris.

## 1. Purpose

Ce document définit les **critères et le processus de décision** pour sélectionner le projet pilote SFIA v2.0.

**Objectifs :**

- choisir un **projet pilote neuf** ;
- éviter de **rouvrir Interv360** trop tôt ;
- tester **SFIA v1.1 + SFIA v2.0** sur une chaîne projet réelle ;
- vérifier la capacité SFIA à **couvrir plusieurs rôles projet** ;
- préparer le futur **bootstrap réel** ;
- éviter un pilote trop documentaire, trop technique ou trop risqué ;
- documenter les **critères de décision Morris**.

**Vision impérative :** le pilote ne doit pas être choisi uniquement parce qu'il est intéressant fonctionnellement. Il doit permettre de tester la capacité de SFIA à couvrir une **chaîne de production projet complète** — rôles, méthodes, livrables, gates, niveaux d'automatisation et cycles associés.

## 2. Reference baseline

| Élément | Statut |
|---------|--------|
| **SFIA v1.1** | Baseline stable — méthode opérable, clôturée |
| **Vision v2.0** | PR #90 — automation + delivery |
| **Automation levels** | PR #91 — L0–L5 + trajectoire cycle de vie projet |
| **Bootstrap standard** | PR #92 — structure minimale, guardrails |
| **Git** | **Source de vérité** — Markdown, PR, traçabilité |
| **Notion** | **Dormant / optionnel** — non dépendance v2.0 |
| **Interv360** | Référence historique — **pas le pilote par défaut** |
| **Cycle courant** | **Décision de sélection** — pas d'exécution projet |
| **Morris** | Autorité de décision — sélection finale du pilote |

## 3. Pilot selection doctrine

> **Le projet pilote SFIA v2.0 doit permettre de tester la chaîne de production projet de bout en bout, en mobilisant les rôles déjà identifiés, leurs méthodes associées, les cycles SFIA v1.1 existants et les extensions d'automatisation SFIA v2.0.**

| Principe | Application |
|----------|-------------|
| **Pas un simple exercice documentaire** | Le pilote doit produire de la valeur réelle ou quasi réelle |
| **Pas un projet technique lancé trop vite** | Pas d'`app/` ou `backend/` au bootstrap |
| **Laboratoire contrôlé** | Périmètre borné, cycles courts, gates Morris |
| **Tester la méthode autant que le produit** | Couverture SFIA v1.1 + v2.0 explicite |
| **Assez concret pour tester le delivery** | Implémentation bornée, validation, PR, post-merge |
| **Assez borné pour éviter la dette** | Bootstrap minimal, extensions progressives |
| **Morris aux décisions structurantes** | Sélection, scope, architecture, merge |

**Doctrine centrale (héritée v2.0) :** automatiser l'exécution répétable, jamais l'arbitrage structurant.

## 4. Strategic vision inherited from previous cycles

### 4.1 Vision centre de service IA

SFIA v2.0 prépare la capacité de Morris à piloter un **mini-centre de service IA**, où ChatGPT, Cursor, Git et la méthode SFIA permettent de couvrir progressivement plusieurs rôles projet :

| Aspect | Détail |
|--------|--------|
| **Objectif** | Augmenter la capacité de cadrage, production, validation et capitalisation de Morris |
| **Ce n'est pas** | Remplacer Morris ou activer L5 global |
| **Chaîne à tester** | ChatGPT ↔ Cursor ↔ Git ↔ Markdown ↔ PR |
| **Pilote** | Doit préfigurer cette orchestration sur un projet réel borné |

Le pilote doit permettre de vérifier que SFIA peut mobiliser les rôles suivants (voir §6) avec les méthodes et cycles associés — pas seulement produire un livrable isolé.

### 4.2 Discipline repo-first

| Règle | Application au pilote |
|-------|----------------------|
| **Cycles courts** | Un cycle = un périmètre explicite, diff borné |
| **Création documentaire minimale** | Bootstrap standard §5 — deux fichiers initiaux |
| **Actions live sous validation Morris** | Push, PR, merge, scope change — gate L0 |
| **Branches anciennes** | Nettoyage dans un cycle dédié — pas mélangé à la sélection |
| **Notion / CMP** | Hors scope pilote v2.0 |
| **Chemins protégés** | Hors scope — Interv360 non rouvert par défaut |
| **Post-merge check** | Systématique après chaque merge pilote |
| **Capitalisation contrôlée** | Routing matrix, pas de duplication méthode |

## 5. Chain of production to test

Le pilote doit permettre de **traverser progressivement** la chaîne de production projet. Il n'a pas besoin de produire toute la chaîne dès le premier cycle, mais doit **pouvoir la parcourir** au fil des cycles SFIA.

| Maillon de la chaîne projet | Ce que le pilote doit permettre de tester | Niveau SFIA attendu |
|----------------------------|-------------------------------------------|---------------------|
| Intention / opportunité | Formuler et qualifier l'idée | L2 |
| Qualification initiale | Vérifier adéquation SFIA + pilote | L2 |
| Cadrage | Scope, utilisateurs, périmètre | L2–L3 |
| Décision | Arbitrages structurants initiaux | L0–L2 |
| Architecture fonctionnelle | Domaines, capacités, flux | L2–L3 |
| UX/UI fonctionnelle Markdown | Wireframes repo-first, parcours, screen map | L2–L3 |
| Design Figma MVP | Validation visuelle écrans — Git source de vérité | L2–L3 |
| Backlog MVP | Priorités, user stories — **idéalement après Figma** | L2–L3 |
| Architecture technique légère | Stack, contraintes — **après Figma et backlog** | L0–L2 |
| Implémentation bornée | Exécution Cursor contrôlée | L3–L4 |
| Validation / tests | GO/NO-GO, conformité | L2–L4 |
| PR readiness | Diff, guardrails, rapport | L3–L4 |
| PR / merge | Intégration Git | L0 |
| Post-merge check | Vérification post-merge | L4 / L5 ciblé |
| Capitalisation | Apprentissages méthode | L2–L3 |

**Règle :** un candidat pilote faible sur plusieurs maillons de cette chaîne doit être reclassé ou rejeté, même s'il est fonctionnellement intéressant.

**Rattrapage :** si le backlog a été produit avant Figma, le pilote peut appliquer le cycle Design Figma MVP en rattrapage puis un micro-cycle Backlog Alignment — voir `sfia-v2-design-figma-cycle-standard.md` §8.

## 6. Roles and methods to mobilize

| Rôle / capacité | Méthode ou contribution SFIA à tester | Attendu dans le pilote |
|-----------------|--------------------------------------|------------------------|
| **Product / vision** | Cadrage, intention, valeur | Vision claire, utilisateurs identifiés |
| **Chef de projet / PMO** | Cycle routing, gates, risques | Étapes, risques, planning cycles |
| **Business analyst** | Framing, besoins, règles | Besoins, règles métier, processus |
| **Architecte fonctionnel** | Decision Engine, domaines | Domaines, capacités, flux |
| **UX/UI (Markdown)** | Wireframes repo-first, parcours | Screen map, wireframes textuels testables |
| **Design Figma** | Validation visuelle MVP | Écrans Figma + docs `04-design/` — gate Morris |
| **Architecte technique** | Architecture légère, contraintes | Stack, contraintes — **après Figma et backlog** |
| **Delivery lead** | Backlog, découpage cycles | Découpage en cycles Cursor |
| **Développeur Cursor** | Repository Execution Engine | Exécution bornée sous garde-fous |
| **QA / validation** | Validation Checklist, Validation Engine | Tests, conformité, non-régression |
| **Release / Git manager** | PR readiness, post-merge | PR, merge, post-merge check |
| **Knowledge manager** | Knowledge Layer, capitalisation | Capitalisation méthode et projet |

**Critère minimum :** le pilote doit mobiliser **au moins 6 rôles** de manière explicite sur la durée du pilote, dont Product, Delivery lead, Développeur Cursor, QA/validation et Release/Git manager.

## 7. SFIA v1.1 + v2.0 coverage

| Couche SFIA | Ce que le pilote doit tester | Critère de couverture |
|-------------|------------------------------|----------------------|
| **Cycle Routing Guide** | Sélection type de cycle | ≥3 types de cycles utilisés |
| **ChatGPT ↔ Cursor Operating Model** | Orchestration rôles | Chaîne complète sur au moins 1 cycle |
| **Rules & Guardrails** | Respect garde-fous | Aucune violation chemins protégés |
| **Knowledge Layer** | Références, capitalisation | Liens SFIA dans README projet |
| **Decision Engine** | Décisions structurantes | Décisions documentées, gate Morris |
| **Validation Checklist** | GO/NO-GO cycles | Checklist appliquée avant PR |
| **Repository Execution Engine** | Exécution Cursor | Exécution bornée L3 |
| **Prompt Generation Engine** | Génération prompts | Templates utilisés |
| **Validation Engine** | Rapports validation | Rapport structuré par cycle |
| **Prompt templates / context pack** | Templates 01–10 | ≥2 templates mobilisés |
| **Automation levels v2.0** | Niveaux L par étape | Niveaux respectés par maillon |
| **Project Bootstrap Standard v2.0** | Bootstrap minimal | Structure §5 appliquée au bootstrap réel |
| **Post-merge / capitalization** | Post-merge check, routing | Capitalisation documentée |

**But :** s'assurer que le pilote teste la **méthode SFIA complète**, pas seulement un livrable isolé.

## 8. Candidate project profile

**Profil idéal du projet pilote SFIA v2.0 :**

| Caractéristique | Détail |
|-----------------|--------|
| **Projet neuf** | Pas de reprise Interv360 |
| **Besoin réel ou quasi réel** | Valeur pour Morris ou pour SFIA |
| **Périmètre borné** | Livrable MVP ou équivalent en cycles courts |
| **Bootstrap minimal compatible** | README + project-framing suffisants au départ |
| **Cycles courts** | Itérations Cursor de quelques fichiers max |
| **Cadrage fonctionnel possible** | Problème, utilisateurs, scope identifiables |
| **Architecture légère possible** | Sans app/backend immédiat |
| **Découpage delivery** | Backlog ou phases identifiables |
| **Cursor exécuteur contrôlé** | Diff borné, rapports structurés |
| **Capitalisation méthode** | Apprentissages réutilisables pour v2.0 |
| **Sans app/backend immédiat** | Pas de code applicatif au bootstrap |
| **Sans Notion/CMP** | Repo-first uniquement |
| **Sans L5 global** | Gates Morris conservés |

## 9. Anti-patterns

| Anti-pattern | Pourquoi l'éviter |
|--------------|-------------------|
| Projet purement documentaire | Ne teste pas le delivery ni Cursor |
| Projet trop technique dès le départ | Impose app/backend, chemins protégés |
| Projet trop large ou trop flou | Dette, scope creep, cycles incontrôlables |
| Projet sans utilisateur cible | Cadrage impossible, valeur floue |
| Projet exigeant app/backend immédiat | Violation bootstrap standard |
| Projet nécessitant L5 global | Hors gouvernance SFIA actuelle |
| Projet dépendant de Notion/CMP | Trajectoire dormant, risque tooling |
| Projet imposant de rouvrir Interv360 | Chemins protégés, confusion capitalisation |
| Projet ne permettant pas de tester le delivery | Méthode non validée bout en bout |
| Projet sans potentiel de capitalisation | Pas d'apprentissage v2.0 |

## 10. Why Interv360 is not the default pilot

| Aspect | Détail |
|--------|--------|
| **Référence utile** | Interv360 a capitalisé de la méthode et illustre une structure complète |
| **Charge historique** | Projet déjà dense — phases, archives, chemins protégés |
| **Chemins protégés** | `app/`, `backend/`, exports — modification interdite sans cycle dédié |
| **Risque de mélange** | Capitalisation + reprise existant + delivery v2.0 = confusion |
| **Bootstrap standard** | Le premier pilote v2.0 doit tester le bootstrap **neuf** |
| **Usage futur** | Interv360 pourra servir de **benchmark** ou référence comparative plus tard |

**Décision de principe :** Interv360 **n'est pas** le pilote par défaut du cycle 4. Un projet neuf est préférable pour valider la trajectoire v2.0 de bout en bout.

## 11. Selection criteria

Grille de scoring — **score max 5 par critère** :

| Critère | Score max | Pourquoi |
|---------|-----------|----------|
| Projet neuf | 5 | Teste bootstrap standard sans dette historique |
| Périmètre clair et borné | 5 | Cycles courts, diff contrôlé |
| Valeur réelle pour Morris / SFIA | 5 | Motivation et apprentissage concrets |
| Capacité à tester le cycle de vie projet | 5 | Chaîne §5 traversable |
| Capacité à tester les rôles centre de service IA | 5 | §6 mobilisable |
| Couverture SFIA v1.1 | 5 | §7 — méthode opérable |
| Couverture SFIA v2.0 | 5 | §7 — automation + delivery |
| Compatible bootstrap minimal | 5 | §5 bootstrap standard |
| Compatible repo-first | 5 | Git, PR, post-merge |
| Faible risque initial | 5 | Premier pilote — prudence |
| Permet architecture fonctionnelle | 5 | Cadrage testable |
| Permet UX/UI ou parcours | 5 | Design framing possible |
| Permet architecture technique légère | 5 | Sans app/backend immédiat |
| Permet backlog / découpage delivery | 5 | Cycles Cursor planifiables |
| Permet delivery incrémental | 5 | Implémentation bornée L3–L4 |
| Permet validation / tests | 5 | Checklist, GO/NO-GO |
| Permet PR readiness / post-merge | 5 | Boucle Git complète |
| Permet capitalisation méthode | 5 | Apprentissages v2.0 |
| N'exige pas app/backend immédiat | 5 | Guardrail bootstrap |
| N'exige pas L5 global | 5 | Gouvernance Morris |
| N'ouvre pas Notion/CMP | 5 | Trajectoire dormant |
| Ne réactive pas Interv360 trop tôt | 5 | Pilote neuf préféré |

**Score total max :** 110 points (22 critères × 5).

**Règle — critères forts obligatoires :** un candidat doit être **≥4/5** sur :

- valeur réelle ;
- périmètre borné ;
- chaîne de production testable ;
- couverture rôles ;
- couverture SFIA v1.1 + v2.0 ;
- faible risque ;
- repo-first.

**Seuil recommandé :** score global **≥80/110** pour être retenu comme pilote, sous réserve de validation Morris et absence de critère bloquant (§12).

## 12. Blocking criteria

Un candidat est **rejeté immédiatement** si :

| # | Critère bloquant |
|---|------------------|
| 1 | Projet uniquement documentaire — pas de delivery testable |
| 2 | Projet incapable de tester une chaîne de production (§5) |
| 3 | Projet incapable de mobiliser plusieurs rôles (§6) |
| 4 | Projet ne testant pas SFIA v1.1 + v2.0 conjointement |
| 5 | Projet trop risqué pour un premier pilote v2.0 |
| 6 | Projet imposant L5 global |
| 7 | Projet dépendant de Notion ou CMP |
| 8 | Projet imposant `app/` ou `backend/` dès le bootstrap |
| 9 | Projet imposant modification d'un chemin protégé |
| 10 | Projet nécessitant de rouvrir Interv360 immédiatement |

**Action :** critère bloquant détecté → candidat **exclu** sans scoring complet.

## 13. Candidate examples

**Aucun projet sélectionné dans ce cycle.** Placeholders pour candidats proposés par Morris :

| Candidate | Description | Strengths | Risks | Preliminary fit |
|-----------|-------------|-----------|-------|-----------------|
| **Candidate A** | À définir par Morris | — | — | À évaluer |
| **Candidate B** | À définir par Morris | — | — | À évaluer |
| **Candidate C** | À définir par Morris | — | — | À évaluer |

**Règles :**

- ne pas inventer de projet réel sans input Morris ;
- ne pas sélectionner de pilote final dans ce document ;
- compléter ce tableau lors d'un cycle de scoring ou de décision Morris.

## 14. Recommended decision process

| Step | Action | Niveau SFIA | Gate |
|------|--------|-------------|------|
| 1 | Morris propose **2 à 5 idées** de projets candidats | L0–L2 | Morris |
| 2 | ChatGPT aide à **qualifier** les candidats (§8, §9, §12) | L2 | Morris valide qualification |
| 3 | Cursor produit une **grille comparative** read-only / documentation-only | L2 / L5 ciblé | Morris |
| 4 | **Scoring** selon §11 — cycle dédié ou intégré | L2 | Morris |
| 5 | Morris **choisit le pilote** | L0 | **Décision structurante** |
| 6 | Cycle **bootstrap réel** ouvert uniquement après GO | L3 | Morris — GO bootstrap |
| 7 | Projet créé selon `sfia-v2-project-bootstrap-standard.md` | L3 | Morris — avant commit |

**Règle :** aucun dossier `projects/<project-name>/` ne doit être créé avant l'étape 6 et le GO Morris explicite.

## 15. Decision template

Template à compléter **après** sélection Morris :

| Décision | Valeur |
|----------|--------|
| **Projet pilote retenu** | À décider |
| **Nom repo cible** | `projects/<project-name>/` — À décider |
| **Pourquoi ce projet** | À compléter |
| **Score global** | /110 — À compléter |
| **Rôles couverts** | Liste §6 — À compléter |
| **Couverture SFIA v1.1** | §7 — À compléter |
| **Couverture SFIA v2.0** | §7 — À compléter |
| **Niveau d'automatisation initial** | Typ. L3 — À décider |
| **Gate Morris** | **Requis** |
| **Prochain cycle** | Bootstrap minimal réel — `sfia-v2-real-project-bootstrap.md` (nom indicatif) |

## 16. Guardrails

Checklist — **obligatoire** pour ce cycle et les cycles suivants :

| # | Garde-fou | Statut cycle courant |
|---|-----------|---------------------|
| 1 | Aucun projet créé dans `projects/` | ✅ |
| 2 | Aucune modification Interv360 | ✅ |
| 3 | Aucun `app/` ou `backend/` | ✅ |
| 4 | Aucun chemin protégé touché | ✅ |
| 5 | Aucun Notion / CMP | ✅ |
| 6 | Aucun push / PR / merge sans validation | ✅ |
| 7 | Pas de sélection définitive sans Morris | ✅ |
| 8 | Pas de L5 global | ✅ |
| 9 | Repo-first | ✅ |
| 10 | Bootstrap réel différé | ✅ |

## 17. Next recommended cycle

**Deux options selon décision Morris :**

| Option | Document | Condition |
|--------|----------|-----------|
| **A — Scoring** | `sfia-v2-pilot-selection-scoring.md` | Morris a proposé 2–5 candidats, scoring détaillé requis |
| **B — Bootstrap direct** | `sfia-v2-real-project-bootstrap.md` (nom indicatif) | Morris a déjà choisi le pilote et valide le GO bootstrap |

**Règles communes :**

- le **choix final** du projet pilote doit venir de **Morris** ;
- le **bootstrap réel** ne peut commencer qu'après décision explicite documentée (§15) ;
- **aucun projet** ne doit être créé sous `projects/` avant ce GO.

**Ordre validé SFIA v2.0 :**

1. Vision automation + delivery — ✅ PR #90
2. Automation levels L0–L5 — ✅ PR #91
3. Project bootstrap standard — ✅ PR #92
4. **Choix projet pilote — ce document**
5. Bootstrap minimal réel — après décision Morris
6. Cycles projet semi-automatisés
7. Validation / PR readiness
8. Post-merge / capitalisation
9. Optimisation L4 puis L5 ciblé

## 18. Decision provisional

**Décision proposée : SFIA V2.0 PILOT SELECTION FRAMEWORK DOCUMENTED — PENDING MORRIS CANDIDATES**

| Élément | Statut |
|---------|--------|
| Framework de sélection créé | Oui |
| Projet pilote sélectionné | **Non** — en attente Morris |
| Projet créé sous `projects/` | **Non** |
| Bootstrap réel lancé | **Non** |
| Interv360 rouvert | **Non** |
| Candidats A/B/C | Placeholders — à compléter par Morris |

**Prochaine action Morris :** proposer **2 à 5 candidats pilotes** pour scoring ou sélection directe.

---

**Références :**

- `sfia-v2-automation-and-delivery-vision.md`
- `sfia-v2-automation-levels.md`
- `sfia-v2-project-bootstrap-standard.md`
- `sfia-cycle-routing-guide.md`
- `sfia-chatgpt-cursor-operating-model.md`
- `sfia-rules-and-guardrails.md`
- `sfia-notion-publication-track-pause-decision.md`
