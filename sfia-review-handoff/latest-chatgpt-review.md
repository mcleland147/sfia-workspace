# Review Pack Full — SFIA v3.0 Framing (Studio Project Operating System)

## 1. Métadonnées

- **Date/heure/fuseau :** 2026-07-22 12:17:47 CEST
- **Cycle :** 1 — Cadrage (+ contributifs : conception, archi, UX, backlog, sécu, DevOps, QA, RUN, capitalisation)
- **Profil :** Critical
- **Gate consommé :** GO OUVERTURE CADRAGE SFIA v3.0 — STUDIO PROJECT OPERATING SYSTEM
- **Gate suivant :** GO VALIDATION CADRAGE SFIA v3.0
- **Repo :** mcleland147/sfia-workspace
- **Branche :** delivery/sfia-studio-control-tower-fast-track
- **HEAD :** 32e5271842b9a344a7e292614675c27ea8ed941b
- **Base origin/main :** 32e5271842b9a344a7e292614675c27ea8ed941b
- **Handoff précédent :** 90bf5c4b27772a88c646ba0efba4fd11d53f5717

## 2. État Git initial

- Branche delivery locale dirty (Control Tower + moteur SFIA non commités) — **préservée**
- Staged vide
- Aucun commit/push projet dans ce cycle
- Nouveaux fichiers uniquement sous `projects/sfia-studio/sfia-v3-framing/**` et `.tmp-sfia-review/**`

## 3. Sources consultées (lecture seule)

- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- method/.../2026-07-16-sfia-v2.6-baseline-release-manifest.md
- projects/sfia-studio/66–74 + README (lecture)
- handoff 90bf5c4 (canonical context engine)
- code ops1/** en lecture pour acquis réutilisables

## 4. Baseline / statut v3.0

- **Baseline active :** SFIA v2.6
- **SFIA v3.0 :** trajectoire **candidate** ouverte — **non** adoptée

## 5. Synthèse cadrage

- **Vision :** Studio = Project Operating System (pilotage projet bout en bout), pas chat généraliste
- **Principes candidats P1–P12 :** projet-first, cycle-aware, human-governed, AI-reasoned, deterministic-effects, git-truth, explainable-routing, no-free-chat, fail-closed, progressive-automation, doctrine-as-source, contracts-as-runtime
- **Gouvernance :** décideur humain habilité (plus de doctrine individu-nommée)
- **Rôles :** utilisateur / responsable / décideur / approbateur · Studio · moteur SFIA · GPT · Cursor · Git · GitHub
- **Modèle projet/cycle :** objets + états candidats documentés (04)
- **Conversation :** dual-channel (prose libre + contrôle structuré)
- **Routage/transitions :** conserver routing v2.6 ; adapter Studio-native
- **Automatisation :** élevée sur répétable/borné ; décision structurante jamais auto
- **Doctrine exécutable :** A Markdown · B contrats · C projections
- **Archi fonctionnelle / technique / UX :** candidates (09–11)
- **Gap v2.6→v3.0 :** matrice C/A/R/D/N (12)
- **Vertical slice :** créer projet → … → transition (13)
- **Recommandation trajectoire :** Option C/A-hybride — produit sous v2.6 d’abord ; adoption méthode v3 plus tard
- **Décisions non prises :** adoption baseline, modif canoniques, implémentation, commit/PR

## 6. Fichiers créés (contenu complet)


### `projects/sfia-studio/sfia-v3-framing/README.md`

```markdown
# SFIA v3.0 — Cadrage Studio Project Operating System

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidat** — cadrage ouvert ; **non** baseline |
| **Baseline opérationnelle** | **SFIA v2.6** (inchangée) |
| **Gate consommé** | `GO OUVERTURE CADRAGE SFIA v3.0 — STUDIO PROJECT OPERATING SYSTEM` |
| **Gate suivant** | `GO VALIDATION CADRAGE SFIA v3.0` |
| **Cycle** | 1 — Cadrage |
| **Profil** | Critical |
| **Branche locale** | `delivery/sfia-studio-control-tower-fast-track` |
| **HEAD** | `32e5271842b9a344a7e292614675c27ea8ed941b` |

> **Anti-claims :** SFIA v3.0 n’est **pas** adoptée. Les documents v2.6 ne sont **pas** modifiés. Aucune implémentation. Aucun commit/push/PR projet. Les travaux Control Tower (66–74 + code local) sont **préservés**.

## Intention

Ouvrir le cadrage produit et méthodologique d’un **Studio Project Operating System** : système de pilotage projet bout en bout, assisté par IA, gouverné par SFIA — sans chat libre hors projet/cycle.

## Index des livrables

| # | Fichier | Contenu |
|---|---------|---------|
| 01 | `01-sfia-v3-product-vision-and-positioning.md` | Vision et positionnement |
| 02 | `02-sfia-v3-principles-and-human-governance.md` | Principes candidats et gouvernance humaine |
| 03 | `03-sfia-v3-roles-and-responsibilities.md` | Rôles humain / Studio / GPT / Cursor / Git |
| 04 | `04-sfia-v3-project-and-cycle-domain-model.md` | Objets métier, états, relations |
| 05 | `05-sfia-v3-guided-reasoning-and-conversation-model.md` | Conversation guidée + canal de contrôle |
| 06 | `06-sfia-v3-cycle-routing-and-transition-model.md` | Cycles, routage, transitions |
| 07 | `07-sfia-v3-automation-and-human-decision-model.md` | Automatisation vs décisions humaines |
| 08 | `08-sfia-v3-executable-doctrine-and-contract-model.md` | Doctrine lisible / contrats / projections |
| 09 | `09-sfia-v3-functional-architecture.md` | Architecture fonctionnelle candidate |
| 10 | `10-sfia-v3-technical-architecture-candidate.md` | Architecture technique candidate + acquis |
| 11 | `11-sfia-v3-ux-information-architecture.md` | UX / IA / parcours (pas de Figma) |
| 12 | `12-sfia-v2.6-to-v3-gap-analysis.md` | Analyse d’écart v2.6 → v3.0 |
| 13 | `13-sfia-v3-target-vertical-slice.md` | Vertical slice produit cible |
| 14 | `14-sfia-v3-roadmap-and-decision-pack.md` | Roadmap et décisions humaines requises |

## Relation aux acquis Control Tower

Les documents `66`–`74` et le code OPS1/Control Tower local démontrent une **chaîne technique** (conversation, outils Git/GitHub read, ActionCandidate, gates, Cursor, rapport, contexte canonique). Ils constituent un **socle réutilisable**, pas l’architecture produit définitive v3.0.

## Verdict de ce pack

**SFIA v3.0 FRAMING READY — HUMAN DECISION REQUIRED**

```

### `projects/sfia-studio/sfia-v3-framing/01-sfia-v3-product-vision-and-positioning.md`

```markdown
# 01 — Vision produit et positionnement SFIA v3.0

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Baseline active | SFIA v2.6 |
| Gate | Ouverture cadrage SFIA v3.0 |

## 1. Positionnement exact candidat

**SFIA Studio v3.0 (candidat)** est un **Project Operating System** : système de pilotage projet bout en bout, assisté par IA et gouverné par la méthode SFIA versionnée dans Git.

Il n’est **pas** :

- un chat généraliste ;
- une simple interface ChatGPT ;
- un lanceur de prompts ;
- un écran de monitoring isolé ;
- une duplication de la doctrine SFIA en code.

Il **est** (candidat) :

- le cockpit où un utilisateur humain crée, reprend, pilote et clôture un projet ;
- le lieu où les cycles sont ouverts, conduits, validés et enchaînés ;
- la façade où les décisions humaines structurantes sont demandées, tracées et appliquées ;
- l’orchestrateur visible des effets déterministes (outils, Cursor, Git) sous contrats ;
- le point de collecte des preuves, validations, réserves et capitalisations.

## 2. Problème que v3.0 adresse

| Problème | Observation actuelle (v2.6 + Control Tower local) |
|----------|--------------------------------------------------|
| Fragmentation outils | ChatGPT, Cursor, Git, GitHub, Studio OPS1 encore partiellement séparés |
| Conversation hors projet | Risque de « chat libre » sans rattachement projet/cycle |
| Doctrine ≠ runtime | Méthode Markdown riche ; runtime encore partiel (OPS1/CT) |
| Démonstration produit | Vertical slice technique ≠ parcours produit complet (créer projet → clôturer) |
| Terminologie individu-centrique | « Morris décide » doit devenir rôle de décideur humain habilité |

## 3. Vision formulée

> SFIA Studio permet de **piloter un projet** de bout en bout sous méthode SFIA : qualifier, décider, exécuter sous contrat, prouver, valider, enchaîner — avec GPT qui raisonne librement dans un **contexte contraint**, et des effets **déterministes** validés par des policies et gates humains.

## 4. Ce que le produit doit permettre

1. Créer un projet
2. Reprendre un projet existant
3. Importer / consulter un projet finalisé
4. Ouvrir un cycle
5. Reprendre un cycle
6. Guider une réflexion (sans questionnaire rigide)
7. Consulter les sources projet et canoniques
8. Qualifier une demande
9. Préparer une décision humaine
10. Compiler une action
11. Orchestrer Cursor sous contrat
12. Contrôler Git (lecture / écritures gouvernées)
13. Collecter les preuves
14. Valider un résultat
15. Proposer la transition suivante
16. Capitaliser

## 5. Règle conversationnelle structurante

Toute conversation est rattachée à au moins un objet : **projet**, **cycle**, **décision**, **action**, **rapport** ou **réserve**.

Il n’existe **pas** de conversation libre sans contexte projet (sauf opérations bornées de création / import de projet).

## 6. Séparation liberté / contrainte

| Libre | Contraint |
|-------|-----------|
| Formulation naturelle GPT | Contexte injecté (sources, état, gates) |
| Analyse, challenge, reformulation | Outils exposés |
| Hypothèses et recommandations | Transitions d’état |
| Questions de clarification | Effets (écriture, Cursor, remote) |

## 7. Relation Control Tower

Control Tower (66–74) prouve une **chaîne d’intégration** (Studio ↔ GPT ↔ Git ↔ GitHub read ↔ Cursor).
v3.0 **généralise** cette chaîne en **système de projet**, pas seulement en démonstrateur d’outil.

## 8. Décisions humaines requises (hors validation ici)

- Valider ou reformuler cette vision (`GO VALIDATION CADRAGE SFIA v3.0`).
- Confirmer que v2.6 reste baseline jusqu’à un GO d’adoption v3.0 distinct.
- Trancher le périmètre MVP produit vs trajectoire complète.

## 9. Anti-claims

- Vision **candidate**, non baseline.
- Pas d’implémentation autorisée par ce document.
- Pas de monétisation / production claim.

```

### `projects/sfia-studio/sfia-v3-framing/02-sfia-v3-principles-and-human-governance.md`

```markdown
# 02 — Principes candidats et gouvernance humaine

| Champ | Valeur |
|-------|--------|
| Statut | **Candidats** — non promus en doctrine validée |
| Baseline | SFIA v2.6 |

## 1. Règle de lecture

Les principes ci-dessous sont **candidats**. Aucun n’est automatiquement validé. Toute promotion en doctrine v3.0 exige un GO humain explicite.

Terminologie cible : remplacer « Morris décide » par **« la décision structurante appartient à un décideur humain habilité »**.

## 2. Douze principes candidats

### P1 — Projet-first
Toute interaction Studio est rattachée à un projet, ou à une opération bornée de création / import.

**Raison :** éviter le chat orphelin.
**Risque si absent :** dérive conversationnelle, effets hors contexte.

### P2 — Cycle-aware
Toute conversation de travail est rattachée à un cycle actif ou à une phase de qualification de cycle.

**Raison :** SFIA est cycle-driven (routing guide v2.6).
**Risque :** actions sans typologie / profil / gates.

### P3 — Human-governed
Les arbitrages structurants exigent une décision humaine explicite (gate UI ou équivalent audité).

**Raison :** héritage L0 / fail-closed v2.6.
**Risque :** automatisation de décision.

### P4 — AI-reasoned
GPT conserve la liberté d’analyse, reformulation, questionnement et recommandation.

**Raison :** valeur SFIA = raisonnement, pas scripts de réponses.
**Risque inverse :** questionnaire rigide / réponses préfabriquées.

### P5 — Deterministic-effects
Les effets (fichiers, Git, Cursor, remote) passent par contrats et policies déterministes.

**Raison :** acquis OPS1 (allowlist, contractHash, revalidation).
**Risque :** prompt libre = exécution libre.

### P6 — Git-truth
Git reste la source de vérité documentaire et technique ; la mémoire conversationnelle ne remplace pas Git.

**Raison :** operating model + guardrails v2.6.
**Risque :** doctrine « dans le chat ».

### P7 — Explainable-routing
Chaque routage de cycle ou transition doit être explicable (sources, critères, alternatives écartées).

**Raison :** routing guide.
**Risque :** boîte noire.

### P8 — No-free-chat
Studio ne répond pas aux demandes sans relation cohérente avec le projet ou le cycle (sinon clarification / blocked).

**Raison :** gouvernance produit.
**Risque :** usage généraliste.

### P9 — Fail-closed
En cas d’incertitude sur une action ou une autorité : bloquer ou demander clarification.

**Raison :** guardrails + OPS1.
**Risque :** deny-by-default affaibli.

### P10 — Progressive-automation
Automatiser d’abord préparation, collecte, contrôle et exécution bornée — avant tout arbitrage structurant.

**Raison :** trajectoire L0–L5 à redécouper (voir doc 07).
**Risque :** L5 décisionnel.

### P11 — Doctrine-as-source
La doctrine reste versionnée et lisible dans Git (Markdown).

**Raison :** v2.6 baseline ; éviter seconde doctrine TS.
**Risque :** divergence Markdown/code.

### P12 — Contracts-as-runtime
Les objets structurés (états, gates, schémas) servent à l’exécution sans devenir une doctrine indépendante.

**Raison :** moteur de contexte canonique (74).
**Risque :** constantes métier dispersées.

## 3. Modèle de gouvernance humaine candidat

| Niveau | Qui | Quoi |
|--------|-----|------|
| L-H0 | Décideur humain habilité | Gates structurants, adoption baseline, merge doctrine |
| L-H1 | Approbateur opérationnel | GO action Cursor, GO write borné, GO remote selon policy |
| L-H2 | Responsable de projet | Trajectoire, priorités, clôture projet |
| L-S | Studio / moteurs | Préparation, contrôle, blocage, audit |
| L-A | Agents (GPT/Cursor) | Raisonnement / exécution sous contrat — **jamais** gate structurant |

## 4. Formes de décision humaine

1. **Gate explicite UI** (préféré pour effets).
2. **DecisionRequest** structurée (arbitrage documenté).
3. **Refus / report / refine** (pas seulement GO).
4. **Expiration / stale** → revalidation obligatoire.

Une phrase conversationnelle **n’équivaut jamais** à un gate.

## 5. Lien v2.6

Conserver : fail-closed, Git-truth, human validation first, prompt-as-contract, review handoff required pour rapports Cursor.
Adapter : terminologie individu → rôles ; orchestration manuelle → Studio-native.
Ne pas remplacer sans GO : documents canoniques v2.6.

## 6. Décisions humaines requises

- Valider / amender / rejeter P1–P12.
- Valider le modèle L-H0…L-A.
- Confirmer l’interdiction du free-chat hors projet.

```

### `projects/sfia-studio/sfia-v3-framing/03-sfia-v3-roles-and-responsibilities.md`

```markdown
# 03 — Rôles et responsabilités (candidats)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Note | Une personne peut cumuler plusieurs rôles humains |

## 1. Rôles humains

| Rôle | Finalité | Peut | Ne peut pas (candidat) |
|------|----------|------|-------------------------|
| **Utilisateur humain** | Utiliser Studio | Naviguer, converser, consulter | Valider un gate hors habilitation |
| **Responsable de projet** | Porter trajectoire et objectifs | Définir priorités, demander clôture | Contourner policies techniques |
| **Décideur humain** | Valider arbitrages structurants | Consommer gates structurants | Déléguer silencieusement à un agent |
| **Approbateur** | Valider une opération spécifique | GO Cursor, GO write, GO remote selon scope | Élargir le scope hors allowlist |

Le décideur n’est **pas** un individu nommé dans la doctrine produit.

## 2. Rôles système

### SFIA Studio
Interface de pilotage et **orchestrateur visible**.
Présente états, sources, décisions, actions, preuves.
Ne remplace pas le décideur. Ne réécrit pas la doctrine.

### Moteur SFIA
Contexte, routage, policies, états, transitions, contrats.
Compile et contrôle. Fail-closed.
Charge la doctrine depuis Git ; ne la duplique pas.

### GPT
Raisonnement, qualification, analyse, challenge, conversation guidée.
Produit des artefacts intermédiaires (clarification, options, ActionProposal…).
**Ne décide pas** les gates structurants. **N’exécute pas** Cursor seul.

### Cursor
Agent d’exécution bornée sous contrat (prompt instancié, allowlist, worktree).
Produit diffs / preuves.
**Ne choisit pas** le périmètre hors contrat.

### Git
Source de vérité, versionnement, auditabilité.
Baseline méthode, documents projet, historique.

### GitHub
Collaboration distante, revue, CI, publication.
Writes distants = gated (fermés par défaut hors GO).

## 3. Matrice RACI candidate (synthèse)

| Activité | Humain décideur | Studio | Moteur | GPT | Cursor | Git |
|----------|-----------------|--------|--------|-----|--------|-----|
| Qualifier cycle | C | I | A/R policies | R analyse | — | C sources |
| Décision gate | **A/R** | R UI | R enforce | C propose | — | C audit |
| Compiler action | C | I | **A/R** | R proposal | — | C |
| Exécuter | A (GO) | R orchestrate | R contract | I | **R** exec | R truth |
| Valider résultat | A/C | R display | R checks | R analyse | I | C |
| Transition cycle | A | R | R | C | — | C |

(R=Responsible, A=Accountable, C=Consulted, I=Informed — candidat)

## 4. Évolution depuis v2.6

| v2.6 | v3.0 candidat |
|------|----------------|
| ChatGPT hors Studio + copier-coller fréquent | GPT **dans** Studio, contextuel |
| « Morris (L0) » nommé | Décideur humain habilité (rôle) |
| Cursor via prompt manuel ou OPS1 | Cursor via Execution Orchestrator produit |
| Operating model boucle manuelle dominante | Boucle Studio-native, même principes |

## 5. Séparation des pouvoirs

- Qui **propose** ≠ qui **décide** ≠ qui **exécute**.
- GPT propose ; décideur tranche ; Cursor exécute ; Git enregistre.
- Studio/moteur **empêchent** la confusion des rôles (pas seulement « rappellent »).

## 6. Décisions humaines requises

- Valider la taxonomie des rôles humains.
- Valider que Studio = cockpit + façade d’orchestration (continuité AF-Option C reformulée Control Tower).
- Décider du modèle multi-utilisateurs (hors scope implémentation actuelle).

```

### `projects/sfia-studio/sfia-v3-framing/04-sfia-v3-project-and-cycle-domain-model.md`

```markdown
# 04 — Modèle domaine projet et cycle (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** — listes non figées |

## 1. Objets centraux

Pour chaque objet : finalité, propriétaire logique, id, cycle de vie, source de vérité, relations, mutation, audit, décision humaine.

### Workspace
- **Finalité :** conteneur multi-projets d’une organisation / utilisateur.
- **Propriétaire :** organisation / admin.
- **Id :** `ws-*`.
- **SoT :** Studio + Git org config.
- **Mutation :** admin.
- **Décision humaine :** création workspace.

### Project
- **Finalité :** unité de pilotage (ex. Campus360, SFIA Studio).
- **Propriétaire :** responsable de projet.
- **Id :** `proj-*` + chemin `projects/<key>/`.
- **SoT :** Git (docs) + ProjectState (runtime).
- **Relations :** Cycles, Baseline, Trajectory, Decisions.
- **Décision humaine :** création, clôture, archivage.

### ProjectState
États candidats : `DRAFT | FRAMING | ACTIVE | PAUSED | BLOCKED | DELIVERED | RUN | CLOSED | ARCHIVED`.
Mutations via Transition Engine + gates selon criticité.

### ProjectBaseline
Référence méthode applicable (`SFIA v2.6` aujourd’hui ; `v3.0` **candidate** seulement).
Ne change **pas** sans GO d’adoption.

### ProjectTrajectory
Intention produit / jalons / lots (candidats vs validés).
Options ≠ décisions.

### Cycle / CycleInstance / CycleState
- **Cycle :** type méthodologique (cadrage, delivery, QA…).
- **CycleInstance :** occurrence runtime liée à un Project.
- **États candidats :** `PROPOSED | QUALIFYING | READY | ACTIVE | DECISION_REQUIRED | EXECUTION_READY | EXECUTING | VALIDATING | BLOCKED | COMPLETED | CLOSED | CAPITALIZED`.

### GuidedSession
Conversation rattachée (projet/cycle/décision/action/rapport).
Remplace la notion « session OPS1 orpheline » à terme.

### SourceContext
Ensemble de sources chargées (canoniques + projet) avec digests.
Hérite du Canonical Context Engine (74).

### Hypothesis / Observation / Option / Recommendation
Artefacts de raisonnement. **Jamais** auto-promus en HumanDecision.

### HumanDecision / Gate / DecisionRequest
Décision auditable. Gate = point de contrôle UI/policy. DecisionRequest = demande structurée.

### ActionProposal / ActionCandidate / ExecutionContract / ExecutionAttempt
Chaîne déjà partiellement prouvée OPS1/CT : proposal → compile → candidate → gate → contract → attempt.

### Evidence / ValidationResult / Reserve
Preuves d’exécution, verdict de validation, réserves classifiées (héritage guardrails).

### TransitionProposal / TransitionDecision
Proposition d’enchaînement de cycle / d’état ; décision humaine pour transitions structurantes.

### ReviewPack / ReviewHandoff / CapitalizationRecord
Héritage v2.6 : pack de revue, publication handoff, capitalisation.

## 2. Relations clés

```
Workspace 1—* Project
Project 1—* CycleInstance
CycleInstance 1—* GuidedSession
GuidedSession *—* SourceContext
CycleInstance *—* HumanDecision
CycleInstance *—* ActionCandidate
ActionCandidate 1—* ExecutionContract
ExecutionContract 1—* ExecutionAttempt
ExecutionAttempt 1—* Evidence
CycleInstance *—* TransitionProposal
```

## 3. Règles de mutation (candidats)

1. Pas de mutation d’état projet/cycle sans événement audité.
2. Options / Recommendations ne mutent pas ProjectBaseline.
3. ActionCandidate n’implique aucune exécution.
4. ExecutionAttempt exige contractHash + gate lié.
5. CONTEXT_STALE bloque compilation / exécution jusqu’à requalification.
6. Chemins protégés (`method/`, `prompts/`, …) hors écriture sauf GO méthode dédié.

## 4. Identifiants et audit

Corrélation cible :

`workspaceId → projectId → cycleInstanceId → sessionId → contextId → proposalId → actionId → contractHash → attemptId → reportId / evidenceId`

## 5. Écart vs OPS1 actuel

| OPS1 aujourd’hui | Cible v3.0 |
|------------------|------------|
| CycleSession loosely bound | Project + CycleInstance first-class |
| Fixture/live mode session | GuidedSession contextualisée projet |
| ActionCandidate I3 | ActionCandidate issu du moteur SFIA |
| Pas de ProjectState | ProjectState Engine |

## 6. Décisions humaines requises

- Valider la liste d’états projet/cycle (ou la réduire).
- Valider le rattachement obligatoire conversation → objet.
- Décider du modèle d’import de projets finalisés.

```

### `projects/sfia-studio/sfia-v3-framing/05-sfia-v3-guided-reasoning-and-conversation-model.md`

```markdown
# 05 — Raisonnement guidé et modèle conversationnel (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |

## 1. Définition

Une **GuidedSession** est une conversation :

- toujours rattachée à un objet (projet / cycle / décision / action / rapport / réserve) ;
- **guidée** par le contexte et l’état ;
- **libre** dans le raisonnement GPT ;
- **bornée** dans les outils, transitions et effets.

## 2. Deux canaux obligatoires

### Canal conversationnel (humain-lisible)
Réponse naturelle GPT : explication, challenge, reformulation, questions.

### Canal de contrôle (machine-lisible)
Structure minimale candidate :

| Champ | Rôle |
|-------|------|
| `intent` | intention détectée / déclarée |
| `projectRelevance` | lien projet OK / doute / hors scope |
| `cycleRelevance` | lien cycle OK / qualification requise |
| `sourcesUsed[]` | path + digest |
| `missingInfo[]` | clarifications |
| `proposedTransition` | éventuelle |
| `actionProposal` | SfiaActionProposal ou null |
| `requiredGate` | si applicable |
| `status` | ok / clarification / decision_required / blocked / no_action |

Le canal de contrôle **n’est pas** un script de phrases. Il **contraint les effets**, pas le style.

## 3. Sorties autorisées du moteur / GPT

1. Réponse directe contextualisée
2. Question de clarification
3. Analyse
4. Hypothèses
5. Options
6. Recommandation
7. Demande de décision humaine (`DecisionRequest`)
8. Proposition de cycle
9. Proposition de transition
10. `ActionProposal`
11. `no_action`
12. `blocked`

## 4. Ce qu’il ne faut pas faire

- Arbre rigide de phrases préfabriquées.
- Questionnaire type wizard exclusif (le guidage peut **suggérer** des questions, pas imposer un script).
- Confondre recommandation et décision.
- Laisser GPT émettre commit/push/PR hors gates.
- Remplacer le canal de contrôle par du prose seul.

## 5. Guidage sans rigidité — mécanique candidate

1. Charger `SourceContext` (canonique + projet).
2. Injecter état (ProjectState, CycleState, open/closed gates).
3. Laisser GPT produire prose + structure.
4. Valider structure (schéma).
5. Compiler effets via Action Compiler / Transition Engine.
6. Si ambigu : `clarification_required` — **pas** d’effet.

## 6. Exemples (illustratifs)

**OK :** « D’après le routing guide et l’état FRAMING, je propose un cycle Delivery documentaire. Questions : … » + JSON contrôle.

**KO :** réponses génériques hors projet ; ou « j’ai commit & push » dans le texte avec effet réel.

## 7. Lien acquis

- Journal OPS1 = proto GuidedSession.
- Moteur contexte SFIA (74) = SourceContext runtime.
- SfiaActionProposal = canal de contrôle action.

## 8. Décisions humaines requises

- Valider le dual-channel.
- Valider l’interdiction du free-chat.
- Trancher le niveau d’UI pour afficher le canal de contrôle (compact vs détail).

```

### `projects/sfia-studio/sfia-v3-framing/06-sfia-v3-cycle-routing-and-transition-model.md`

```markdown
# 06 — Routage des cycles et modèle de transitions (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Source v2.6 | `sfia-cycle-routing-guide.md` (non modifié) |

## 1. Principe hérité (à conserver)

```
type de cycle → documents à lire → template → validation → décision
```

SFIA ne repose pas sur la mémoire implicite du modèle. Le routage est **explicite** et **explicable**.

## 2. Cycles existants — traitement candidat

### Conserver (pertinence haute)
Cadrage, conception fonctionnelle, architecture fonctionnelle/technique, UX/UI, backlog, delivery, QA/validation, sécurité, DevOps/intégration, capitalisation/REX, post-merge, PR readiness (process).

### Adapter (Studio-native)
- Qualification **dans** Studio (pas seulement ChatGPT externe).
- Review pack / handoff déclenchés depuis Validation Engine.
- Template Cursor **instancié** (pas collé manuellement).

### Fusionner (candidats à analyser)
- Certains micro-cycles documentaires redondants avec « GuidedSession de qualification ».
- Monitoring isolé → vues du cockpit (pas un cycle séparé obligatoire).

### Scinder (candidats)
- « Delivery » : préparation contrat vs exécution vs validation (déjà partiellement OPS1 I3–I6).
- « Cadrage » : vision produit vs méthode vs gap analysis (ce pack v3.0 en est l’illustration).

### Manquants Studio-specific (candidats)
- Project bootstrap / import.
- Role & permission setup (multi-user).
- Transition governance pack (enchaînement cycles).
- Evidence review cycle dédié si volume élevé.

### Transverses
Sécurité, observabilité, FinOps, GreenOps, accessibilité, RGPD : **blocs** activables dans un cycle plutôt que cycles isolés systématiques (héritage profils/blocs v2.6).

## 3. Conditions d’entrée / sortie (patron)

Pour chaque CycleInstance :

| Élément | Contenu |
|---------|---------|
| Entrée | ProjectState compatible, intention, sources mini, profil proposé |
| Infos requises | Objectif, périmètre, risques, gates ouverts/fermés |
| Conversation guidée | Dual-channel (doc 05) |
| Livrables | Docs / code / preuves selon type |
| Actions possibles | READ / propose / compile / execute-after-GO |
| Gates | Selon criticité + type d’effet |
| Validation | Critères explicites + ValidationResult |
| Transition | TransitionProposal → TransitionDecision |

## 4. Modèle de transition candidat

Chaque transition déclare :

1. **Déclencheur** (humain, validation OK, timer stale…)
2. **Préconditions** (états, preuves, digests)
3. **Acteurs** (décideur / moteur / GPT)
4. **Gate** (oui/non + kind)
5. **Objets d’entrée / sortie**
6. **Contrôles** (policy, allowlist, stale)
7. **Événements** audit
8. **Erreurs / reprise**
9. **Audit** corrélation ids

Exemple :

`ACTIVE + ValidationResult=PASS → TransitionProposal(cycle suivant) → DECISION_REQUIRED → TransitionDecision=GO → nouvel CycleInstance READY`

## 5. Profils et typologie

Conserver la distinction v2.6 :

- **Type de cycle** = nature du travail.
- **Profil** Light / Standard / Critical / Capitalization = profondeur / contrôles.
- **Typologie** INC / EVOL / RUN / CAPA / DOC = cadre consolidation.

Ne pas « Critical par défaut ».

## 6. Template Cursor — rôle futur

Le template Git `prompts/templates/sfia-cycle-execution-template.md` reste la **structure de référence**.
Studio **instancie** les sections applicables (acquis 74) ; ne réinvente pas la structure en constante TS.

## 7. Décisions humaines requises

- Valider la cartographie conserver/adapter/fusionner/scinder.
- Valider les états de cycle retenus.
- Décider quels cycles Studio-specific créer en premier.

```

### `projects/sfia-studio/sfia-v3-framing/07-sfia-v3-automation-and-human-decision-model.md`

```markdown
# 07 — Automatisation et décisions humaines (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Source | Grille L0–L5 v2.6 / operating model — à étendre, non remplacer silencieusement |

## 1. Principe candidat cardinal

> L’automatisation peut être élevée sur les opérations **répétables, bornées, contrôlables et réversibles**.
> La **décision structurante** ne doit **jamais** être déléguée automatiquement à un agent.

## 2. Redécoupage candidat (au-delà d’un seul axe L0–L5)

| Domaine | Exemple | Niveau candidat max sans GO structurant | Gate humain ? |
|---------|---------|------------------------------------------|---------------|
| Collecte | lire Git/GitHub, digests | Élevé | Non (policy read) |
| Qualification | proposer cycle/profil | Moyen | Clarification si doute |
| Raisonnement | analyse GPT | Élevé (prose) | Non pour prose seule |
| Préparation | ActionProposal, review pack draft | Moyen-élevé | Non jusqu’à effet |
| Exécution | Cursor sous contrat | Moyen | **Oui** GO action |
| Contrôle | allowlist, postcheck, stale | Élevé | Non (déterministe) |
| Transition | proposer cycle suivant | Moyen | **Oui** si structurant |
| Décision | adopter baseline, merge doctrine, remote write large | **Nul (agent)** | **Toujours** |

## 3. Grille risque / réversibilité

| Classe d’effet | Risque | Réversibilité | Automatisation candidate |
|----------------|-------|---------------|--------------------------|
| Lecture locale | Bas | N/A | Auto |
| CREATE markdown allowlisté | Moyen | Haute (revert Git) | Préparer auto ; exécuter après GO |
| MODIFY code allowlisté | Moyen-haut | Moyenne | GO + contrat |
| commit local | Haut | Moyenne | GO dédié |
| push / PR / merge | Très haut | Basse | GO dédiés séparés |
| modifier `method/` / `prompts/` | Critique | Basse | GO méthode + cycle dédié |
| L5 décisionnel | Interdit | — | Bloqué |

## 4. Conditions de supervision

Toute automatisation doit :

1. produire des **traces** (events) ;
2. pouvoir être **arrêtée** ;
3. être **bornée** (timeout, paths, ops) ;
4. échouer **fermé** ;
5. exposer le **pourquoi** (explainable).

## 5. Stop conditions candidats (automatisation)

- Autorité ambiguë.
- Contexte stale.
- Effet hors allowlist.
- Gate fermé.
- Divergence digest sources.
- Multi-écriture non déclarée.
- Demande de décision structurante détectée dans un flux « auto ».

## 6. Cartographie décisions humaines (non déléguables)

| Décision | Pourquoi humaine |
|----------|------------------|
| Adoption baseline méthode | Changement de doctrine |
| GO validation cadrage | Orientation produit |
| GO action Cursor | Effet workspace |
| GO commit / push / PR / merge | Effets Git/GitHub |
| Promotion option → décision | Gouvernance |
| Clôture projet / archivage | Responsabilité |
| Exception chemin protégé | Sécurité |

## 7. Lien Control Tower / OPS1

Déjà automatisable / prouvé partiellement : collecte read, compilation ActionCandidate, contrôles allowlist, exécution après GO, rapport, reinjection.
Toujours humain : gates, adoption v3.0, writes distants.

## 8. Décisions humaines requises

- Valider le redécoupage par domaine.
- Confirmer l’interdiction L5 décisionnel.
- Trancher le niveau d’auto pour transitions non structurantes (ex. purement documentaires).

```

### `projects/sfia-studio/sfia-v3-framing/08-sfia-v3-executable-doctrine-and-contract-model.md`

```markdown
# 08 — Doctrine exécutable et modèle de contrats (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |

## 1. Séparation en trois couches

### A. Doctrine lisible (Git Markdown)
Principes, rôles, gouvernance, cycles, responsabilités, règles narratives.
**SoT :** `method/**`, `prompts/**`, docs fondation.
**v2.6 :** baseline officielle — **non modifiée** par ce cadrage.

### B. Contrats structurés (runtime)
Schémas, états, gates, opérations, événements, validations.
**SoT :** schémas versionnés + stores Studio + hashes.
Exemples : `SfiaCanonicalContext`, `SfiaActionProposal`, `ExecutionContract`, `ValidationResult`.

### C. Projections
Vues dérivées : contexte GPT, prompt Cursor instancié, écrans Studio, rapports, review pack, timeline.
**Règle :** une projection **cite** doctrine + contrats ; elle ne devient pas une 4ᵉ baseline.

## 2. Flux de vérité

```
Doctrine Git (A)
   ↓ load + digest
Contrats runtime (B)
   ↓ project
Projections (C) → GPT / UI / Cursor / Review
   ↓ effects under gates
Git (preuves) → re-lecture (A/B)
```

## 3. Anti-patterns à éviter

| Anti-pattern | Contre-mesure |
|--------------|---------------|
| Duplication doctrine en TS | Loader allowlisté + digests (acquis 74) |
| Constantes métier dispersées | Policy Engine central + refs sources |
| Divergence Markdown/code | CONTEXT_STALE + revalidation digests |
| Prompts Cursor libres | Instantiation template Git réel |
| Règles implicites | Canal de contrôle + events |
| Décisions non tracées | HumanDecision + Gate records |

## 4. Contrats minimaux candidats

1. **SourceRef** — path, digest, blobSha, role
2. **ContextContract** — contextId, headSha, gates, ops
3. **ProposalContract** — kind, files, ops, exactContent
4. **CompilationContract** — status, denied*, actionId
5. **GateContract** — kind, actorRole, motif, linked hashes
6. **ExecutionContract** — objective, instructions, allowlist, hash
7. **EvidenceContract** — files touched, tests, redacted logs
8. **TransitionContract** — from/to, preconditions, decisionId

## 5. Rôle du template Cursor

- **A :** structure et obligations (dans Git).
- **B :** fields filled + digests tracés.
- **C :** promptText instancié envoyé à Cursor.

Ne jamais envoyer le template brut non lié.
Ne jamais reconstruire sa structure depuis une constante simplifiée comme SoT.

## 6. Review pack / handoff

Héritage v2.6 **à conserver** dans la cible :

- review pack proportionné light/full ;
- contenu exploitable des fichiers créés/modifiés ;
- handoff Git `sfia/review-handoff` publish-in-cycle pour rapports Cursor.

Studio doit **produire** ces artefacts ; ne pas les remplacer par un résumé UI seul.

## 7. Décisions humaines requises

- Valider la séparation A/B/C.
- Valider la liste des contrats minimaux.
- Décider où versionner les schémas (repo method vs studio packages) **sans** casser v2.6.

```

### `projects/sfia-studio/sfia-v3-framing/09-sfia-v3-functional-architecture.md`

```markdown
# 09 — Architecture fonctionnelle candidate SFIA v3.0

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** — non implémentée |

## 1. Vue d’ensemble

```
Humain (utilisateur / responsable / décideur / approbateur)
  → SFIA Studio (cockpit + façade)
    → Project State Engine
    → Cycle Router
    → Canonical Context Engine
    → Guided Reasoning Engine / GPT
    → Decision Engine  OR  Action Compiler
    → Gate humain
    → Execution Orchestrator
    → Cursor
    → Git / GitHub
    → Validation Engine
    → Transition Engine
    → Studio (feedback)
  ↔ Audit Trail (transverse)
  ↔ Source Resolver + Policy Engine (transverse)
```

## 2. Moteurs — responsabilités

| Moteur | Responsabilité | Entrées | Sorties | Décision humaine |
|--------|----------------|---------|---------|------------------|
| Project State Engine | États projet, lifecycle | events, decisions | ProjectState | clôture / archive |
| Cycle Router | Type/profil/sources | intention, context | cycle plan | si ambigu |
| Canonical Context Engine | Charger doctrine/projet | allowlist paths | SfiaCanonicalContext | non |
| Guided Reasoning Engine | Dual-channel GPT | context, message | prose + control | non (sauf gate) |
| Decision Engine | DecisionRequest / gates | options, risks | HumanDecision records | **oui** |
| Action Compiler | Proposal → Candidate | proposal+context | CompilationResult | non |
| Execution Orchestrator | Contrat → Cursor | GO+contract | Attempt+Evidence | GO avant run |
| Validation Engine | Critères / preuves | evidence | ValidationResult | validation structurante |
| Transition Engine | Enchaînements | validation, state | TransitionProposal | transitions structurantes |
| Source Resolver | Résoudre fichiers | refs | SourceRef | non |
| Policy Engine | Allow/deny ops/paths | request | allow/deny | policy change = humaine |
| Audit Trail | Corrélation / immutabilité | all | events | non |

## 3. Flux nominaux

### 3.1 Clarification
Message → Context → GPT → `clarification_required` → UI questions → (boucle) — **aucun effet**.

### 3.2 Décision
Analyse/options → DecisionRequest → Gate UI → HumanDecision → état mis à jour → audit.

### 3.3 Action
ActionProposal → Compiler → ActionCandidate → Gate → Contract → Cursor → Evidence → reinjection → analyse.

### 3.4 Blocage
Policy deny / stale / missing authority → `blocked` + raisons + reprise guidée.

### 3.5 Correction
CHANGES_REQUESTED / refine candidate / nouveau proposal — sans élargissement silencieux.

### 3.6 Validation
Evidence → Validation Engine → PASS/FAIL/PASS_WITH_RESERVES → décideur si besoin.

### 3.7 Clôture / capitalisation
Cycle COMPLETED → Transition CAPITALIZED / Project CLOSED — gates selon criticité.

### 3.8 Reprise
Session/projet PAUSED → reload context digests → requalify si stale → continuer.

## 4. Limites de cette architecture

- Candidate : pas de choix technique figé (DB, bus, multi-tenant).
- Ne remplace pas v2.6.
- Ne prescrit pas MCP universel.
- Réutilise la séparation cockpit / policies / exécuteurs (AF-Option C reformulée).

## 5. Observabilité fonctionnelle

États visibles : projet, cycle, contexte, proposal, compilation, gate, contrat, exécution, validation, transition.
Terminal UX candidat : `DECISION_REQUIRED` | `BLOCKED` | `EXECUTING` | `VALIDATING` | `READY_NEXT`.

## 6. Décisions humaines requises

- Valider ce schéma fonctionnel.
- Valider la liste des moteurs (fusion possibles : Decision⊂Transition ?).
- Trancher la frontière Studio UI vs services moteurs (monolithe logique vs packages).

```

### `projects/sfia-studio/sfia-v3-framing/10-sfia-v3-technical-architecture-candidate.md`

```markdown
# 10 — Architecture technique candidate (non implémentée)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Interdit ici | code, deps, commit |

## 1. Composants candidats

| Composant | Rôle | Frontière |
|-----------|------|-----------|
| Studio Web App | UI cockpit | browser |
| API / Server Actions | orchestration façade | serveur |
| Context Service | load sources + resolve | serveur |
| Conversation Service | GPT + tools | serveur |
| Policy Service | allow/deny | serveur |
| Execution Service | contracts + Cursor | serveur + worktrees |
| Evidence Service | postcheck + reports | serveur |
| Audit Store | events | DB locale→évolutive |
| Project Store | projects/cycles/state | DB + Git docs |
| Git Adapter | local read/write gated | process |
| GitHub Adapter | read ; write gated | CLI/API |
| Cursor Adapter | spawn borné | process |

## 2. Données

- **Git** : doctrine + docs projet + preuves commitables.
- **DB** : états runtime, sessions, events, contracts (OPS1 SQLite = proto).
- **Secrets** : serveur only ; jamais dans contexte GPT.
- **Worktrees** : isolation exécution (acquis OPS1).

## 3. Événements

Bus logique (au minimum table events) : `PROJECT_*`, `CYCLE_*`, `SFIA_*`, `TOOL_*`, `GATE_*`, `EXECUTION_*`, `VALIDATION_*`, `TRANSITION_*`.

## 4. Sécurité technique candidate

- AuthN/AuthZ multi-user (futur) ; proto single-operator aujourd’hui.
- Permissions par rôle (doc 03).
- Redaction secrets.
- Path containment.
- Timeout / sandbox Cursor.
- CONTEXT_STALE.
- Pas de shell libre GPT.

## 5. Multi-utilisateurs / permissions (cadrage)

Hors vertical slice immédiat, mais à prévoir :

- isolation projets ;
- habilitations de gate ;
- délégation / expiration ;
- non-répudiation des HumanDecision.

## 6. Inventaire acquis OPS1 / Control Tower / SFIA engine

| Acquis | Verdict candidat |
|--------|------------------|
| GitLocalReadAdapter | **Réutilisable** (étendre writes gated plus tard) |
| GitHubReadAdapter | **Réutilisable** ; write = nouveau gated |
| Tool Router | **Réutilisable** / isoler en Policy+Router |
| Session / event store | **Adapter** → Project/Cycle first-class |
| ActionCandidate + actionGate | **Réutilisable** cœur gouvernance |
| Allowlist | **Réutilisable** |
| contractHash + revalidation | **Réutilisable** |
| Cursor adapter + orchestrator | **Réutilisable** |
| Report + reinjection | **Réutilisable** |
| Canonical context loader/compiler | **Réutilisable** / généraliser multi-projet |
| Ops1SessionScreen | **Expérimental UI** → remplacer par cockpit projet |
| Fixture markers | **Test-only** — pas produit |

## 7. Résilience / reprise

- Rejouer lecture contexte par digests.
- Interrompre EXECUTING → état BLOCKED + evidence partielle.
- Pas d’auto-retry silencieux (héritage I5/I6).
- Continuation = nouvelle CycleInstance / session liée (parentId).

## 8. Évolutivité

- Commencer mono-opérateur + SQLite acceptable pour slice.
- Prévoir extraction services quand multi-projets / multi-users l’exige.
- Éviter plateforme MCP générique comme prérequis (Option C hybride validée CT).

## 9. Décisions humaines requises

- Valider réutilisation massive OPS1 vs rewrite.
- Trancher horizon multi-user.
- Confirmer « pas de MCP universel » pour la prochaine phase.

```

### `projects/sfia-studio/sfia-v3-framing/11-sfia-v3-ux-information-architecture.md`

```markdown
# 11 — UX / architecture d’information (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Hors scope | Maquettes HF, Figma |

## 1. Principes UX candidats

1. **Cockpit avant chat** — la conversation est un panneau du cycle, pas la page entière.
2. **État toujours visible** — projet, cycle, gates, contexte, terminal.
3. **Décision explicite** — boutons de gate, jamais « dire GO dans le chat ».
4. **Preuves à portée** — diffs, fichiers, tests, digests accessibles.
5. **Progressive disclosure** — canal de contrôle compact par défaut.
6. **Fail-closed perceptible** — blocked/stale/denied compréhensibles.
7. **Pas de dashboard fourre-tout** — une job par vue.

## 2. Architecture d’information

```
Accueil
├── Créer projet
├── Reprendre projet
└── Consulter / importer finalisé
Projet (cockpit)
├── Trajectoire
├── Cycles (liste)
├── Cycle actif
│   ├── Contexte SFIA
│   ├── Conversation guidée
│   ├── Décisions
│   ├── Actions
│   ├── Exécutions
│   ├── Preuves
│   └── Validation / transition
├── Risques / réserves
├── Capitalisation
└── Admin / rôles (futur)
```

## 3. Points d’entrée

| Entrée | Destination | Précondition |
|--------|-------------|--------------|
| Nouveau projet | Wizard léger + GuidedSession FRAMING | Auth |
| Reprendre projet | Cockpit projet | Project existant |
| Initier cycle | Cycle Router + qualification | Project ACTIVE/FRAMING |
| Poursuivre cycle | Cycle actif | CycleInstance ouverte |
| Traiter décision | Panneau DecisionRequest | DECISION_REQUIRED |
| Analyser résultat | Preuves + reinjection | Evidence disponible |
| Valider | Validation panel | VALIDATING |
| Clôturer | Transition CLOSE | Critères + gate |
| Capitaliser | CapitalizationRecord | COMPLETED |

## 4. Écrans candidats (responsabilité)

| Vue | Une job |
|-----|---------|
| Accueil | Choisir créer/reprendre |
| Création projet | Identité + baseline + intention |
| Cockpit projet | Santé + prochaines décisions |
| Trajectoire | Jalons candidats vs validés |
| Cycles | Historique + états |
| Cycle actif | Conduire le travail (chat + contrôle) |
| Décisions | Gates et DecisionRequests |
| Actions | ActionCandidates |
| Exécutions | Attempts + statut |
| Preuves | Evidence browser |
| Validation | ValidationResult |
| Réserves | Classification + suivi |
| Capitalisation | REX / assets |
| Admin | Rôles / permissions (futur) |

## 5. Conversation dans le cycle

- Panneau latéral ou inférieur, **jamais** page blanche type ChatGPT seul.
- Afficher : `contextId`, profil, gates fermés, ops interdites.
- Après proposal : panneau compilation + ActionCandidate.
- Boutons fixture **hors** parcours live produit.

## 6. Accessibilité / i18n (cadrage)

- Contrastes, focus gates, labels explicites.
- FR d’abord ; i18n plus tard.
- Pas de dépendance au seul code couleur pour blocked/GO.

## 7. Écart vs UI OPS1 actuelle

OPS1 = excellent **banc d’essai**.
v3.0 UX = **produit projet** ; l’écran session unique devient insuffisant.

## 8. Décisions humaines requises

- Valider IA et points d’entrée.
- Trancher densité du canal de contrôle.
- Prioriser vues du vertical slice (doc 13).

```

### `projects/sfia-studio/sfia-v3-framing/12-sfia-v2.6-to-v3-gap-analysis.md`

```markdown
# 12 — Analyse d’écart SFIA v2.6 → v3.0 (candidat)

| Champ | Valeur |
|-------|--------|
| Baseline | **v2.6 officielle** |
| v3.0 | **Trajectoire candidate uniquement** |

Légende : **C** conserver · **A** adapter · **R** remplacer · **D** déprécier · **N** créer.

## Matrice par domaine

| Domaine | Classe | Raison | Impact | Risque | Gate humain |
|---------|--------|--------|--------|--------|-------------|
| Doctrine Markdown v2.6 | **C** | Baseline opérationnelle | Stable | Divergence si fork précoce | Adoption v3.0 distinct |
| Rôles (« Morris L0 ») | **A** | Rôles génériques | Docs + UI | Confusion transition | Validation cadrage |
| Operating model ChatGPT↔Cursor | **A** | Studio-native loop | Process | Perte de clarté si mal migré | Validation archi |
| Cycles / routing guide | **C+A** | Garder routage ; adapter Studio | Méthode+produit | Sur-fusion cycles | Validation cycles |
| Profils / blocs | **C** | Toujours pertinents | Faible | Critical-by-default | — |
| Gates | **A** | UI produit + rôles | Gouvernance | Contournement chat | Validation gouvernance |
| Niveaux L0–L5 | **A** | Redécouper par domaine | Automation | L5 décisionnel | Validation automation |
| Template Cursor | **C+A** | Structure Git ; instantiation | Runtime | Prompt libre | — |
| Review pack / handoff | **C** | Preuve revue | Process | Pack incomplet | — |
| PR readiness / post-merge | **C** | Process Git | Delivery | Skip cleanup | — |
| Capitalisation | **A** | Intégrer CapitalizationRecord | Produit | Oubli REX | — |
| Gouvernance Git | **C** | Git-truth | — | — | — |
| Architecture Studio | **N/A** | Control Tower = proto ; v3 OS | Produit | Sur-ingénierie | Validation archi |
| UX | **N** | Cockpit projet | Produit | Chat-only relapse | Validation UX |
| Contrats runtime | **N/A** | Étendre 74 + OPS1 | Technique | Seconde doctrine | — |
| Observabilité | **A** | Timeline produit | Ops | Bruit events | — |
| Sécurité multi-user | **N** | Absent aujourd’hui | Sécurité | Fuite cross-project | Security review |

## Synthèse

- **Ne pas toucher** aux canoniques v2.6 dans cette phase.
- **Construire à côté** (`sfia-v3-framing/` puis, plus tard, lots méthode v3 sous GO).
- **Réutiliser** runtime OPS1/CT comme laboratoire d’exécution.
- **Remplacer progressivement** l’UI session-only par cockpit projet.
- **Déprécier** (plus tard) les pratiques copier-coller comme chemin nominal.

## Dette anticipée

- Double narration v2.6 opérationnelle + v3 candidate.
- Terminologie mixte pendant transition.
- UI OPS1 vs IA v3.
- Schémas runtime encore locaux à `app/lib/ops1/sfia`.

## Décisions humaines requises

- Approuver cette matrice.
- Décider l’ordre : produit Studio d’abord vs lots méthode v3 d’abord (recommandation doc 14).
- Ne **pas** merger de doctrine v3 dans `method/` sans GO d’adoption.

```

### `projects/sfia-studio/sfia-v3-framing/13-sfia-v3-target-vertical-slice.md`

```markdown
# 13 — Vertical slice produit cible (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Objectif | Démontrer la **valeur produit** réelle (pas seulement l’outil) |

## 1. Slice cible

```
Créer un projet
→ cadrage guidé par GPT (dual-channel)
→ sources + hypothèses + options
→ décision humaine (vision / trajectoire)
→ ouverture d’un cycle (ex. Delivery documentaire)
→ ActionProposal → ActionCandidate
→ gate humain
→ Cursor sous contrat
→ Git (preuves worktree / diff)
→ Evidence + Validation
→ TransitionProposal (cycle suivant ou clôture)
→ décision humaine
→ cycle suivant / capitalisation légère
```

## 2. Comparaison au démonstrateur actuel (Control Tower / OPS1)

| Étape | CT / OPS1 aujourd’hui | Slice v3.0 |
|-------|------------------------|------------|
| Créer projet | Non (session OPS1) | **Oui** first-class |
| Cadrage guidé | Partiel (chat) | GuidedSession + control channel |
| Décision trajectoire | Hors produit | DecisionRequest UI |
| Ouvrir cycle | Implicite | Cycle Router explicite |
| ActionCandidate | Oui (fixture/live compiler) | Oui, projet-lié |
| Gate | Oui | Oui + rôles |
| Cursor | Oui borné | Oui |
| Preuves / rapport | Oui | Oui |
| Transition cycle suivant | Continuation session | TransitionEngine projet |
| Capitalisation | Handoff méthode | CapitalizationRecord projet |

**Verdict comparatif :** CT prouve la **chaîne d’effets**. v3.0 slice doit prouver le **pilotage de projet**.

## 3. Prérequis

- Validation cadrage v3.0 (`GO VALIDATION CADRAGE SFIA v3.0`).
- GO d’exécution slice distinct (non ouvert ici).
- Réutilisation OPS1/CT/sfia engine.
- Baseline v2.6 inchangée.
- Projet pilote (ex. Campus360 ou sandbox dédié) — **sans** toucher canoniques.

## 4. Composants réutilisables

Context engine, action compiler, gates, allowlist, contract, Cursor adapter, report/reinjection, git/github read tools.

## 5. Écarts à construire (après GO exécution)

- Project / CycleInstance stores.
- UI cockpit (remplacer session-only).
- Decision Engine UI.
- Transition Engine minimal.
- Bootstrap projet.

## 6. Risques

| Risque | Mitigation |
|--------|------------|
| Rescope en « encore un chat OPS1 » | Critères succès projet-first |
| Implémenter avant validation cadrage | Gates fermés |
| Modifier v2.6 | Interdit |
| Sur-architecture multi-user | Slice mono-opérateur OK |
| Confondre live CT et slice v3 | Anti-claims explicites |

## 7. Critères de succès candidats

1. Un humain crée un projet dans Studio.
2. Une GuidedSession de cadrage produit options ≠ décisions.
3. Une HumanDecision ouvre un cycle.
4. Une ActionCandidate live est compilée sans bouton fixture.
5. Un GO humain lance Cursor ; preuves visibles.
6. Une TransitionProposal apparaît ; décision humaine requise.
7. Aucun commit/push/PR sans gates dédiés.
8. Aucune modification `method/` / `prompts/`.

## 8. Anti-claims

- Slice **non implémentée** ici.
- Ne valide pas MVP / production.
- Ne remplace pas la validation live du moteur SFIA CT si encore ouverte.

## 9. Effort candidat (ordre de grandeur)

- Après GO : plusieurs lots delivery (domaine projet → UI cockpit → transitions).
- Ne pas sous-estimer UX cockpit vs extension OPS1.

## 10. Décisions humaines requises

- Valider ce slice comme démonstrateur produit prioritaire.
- Choisir projet pilote.
- Ordonnancer vs finalisation live CT.

```

### `projects/sfia-studio/sfia-v3-framing/14-sfia-v3-roadmap-and-decision-pack.md`

```markdown
# 14 — Roadmap et decision pack SFIA v3.0 (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Gate actuel consommé | `GO OUVERTURE CADRAGE SFIA v3.0 — STUDIO PROJECT OPERATING SYSTEM` |
| Gate suivant | `GO VALIDATION CADRAGE SFIA v3.0` |

## 1. Options de trajectoire

### Option A — Produit Studio d’abord
Valider cadrage → implémenter vertical slice projet (doc 13) sous v2.6 → capitaliser → lots méthode v3.0 plus tard.

**Pour :** valeur démontrable ; doctrine stable.
**Contre :** double narration temporaire.

### Option B — Doctrine v3.0 d’abord
Rédiger/adopter packs méthode v3 dans `method/` avant produit.

**Pour :** clarté doctrinale.
**Contre :** risque architecture papier ; bloque valeur UI ; **interdit** sans GO adoption + touche canoniques.

### Option C — Parallel track contrôlé
Cadrage produit + sandbox méthode `sfia-v3-framing/` (déjà) ; runtime sous v2.6 ; adoption méthode seulement après preuve slice.

**Pour :** aligné fail-closed.
**Contre :** discipline de non-promotion requise.

## 2. Recommandation candidate (≠ décision)

**Option C / A-hybride :**
1) Valider ce cadrage.
2) Ne pas adopter v3.0 comme baseline.
3) Préparer un GO d’exécution du vertical slice **produit** réutilisant OPS1/CT.
4) Garder v2.6 comme SoT méthode.
5) N’ouvrir la modification `method/` qu’avec un GO d’adoption v3.0 distinct après preuves.

## 3. Roadmap candidate (jalons)

| Jalon | Contenu | GO humain |
|-------|---------|-----------|
| J0 | Ouverture cadrage (ce pack) | **Consommé** |
| J1 | Validation cadrage | `GO VALIDATION CADRAGE SFIA v3.0` |
| J2 | Plan d’exécution slice produit | GO plan / exécution (à nommer) |
| J3 | Slice projet implémentée locale | GO exécution |
| J4 | Validation live slice | GO validation live |
| J5 | Capitalisation → proposition lots méthode v3 | GO capitalisation |
| J6 | Adoption baseline v3.0 (éventuel) | **GO ADOPTION** dédié |
| — | commit/push/PR projet | GO séparés — fermés maintenant |

## 4. Décisions humaines requises maintenant

1. Valider / amender / rejeter la vision (01).
2. Valider principes P1–P12 (02).
3. Valider rôles génériques (03).
4. Valider objets/états (04) — ou demander réduction.
5. Valider dual-channel conversation (05).
6. Valider orientation cycles (06).
7. Valider modèle automation (07).
8. Valider couches doctrine/contrats (08).
9. Valider archi fonctionnelle (09) et technique candidate (10).
10. Valider IA UX (11).
11. Approuver gap matrix (12).
12. Approuver vertical slice (13).
13. Choisir option trajectoire A/B/C.
14. Décider priorité relative vs `GO VALIDATION LIVE MOTEUR SFIA CANONIQUE` (CT).

## 5. Décisions explicitement **non** prises

- Adoption SFIA v3.0 comme baseline.
- Modification des canoniques v2.6.
- Architecture technique définitive.
- Stack multi-user.
- Implémentation.
- Commit / push / PR / merge projet.
- Suppression des travaux Control Tower.
- Monétisation / MVP claim.

## 6. Réserves

| Id | Réserve |
|----|---------|
| V3-R01 | Tension AF-Option C historique vs Studio orchestrateur — déjà reformulée CT ; à reconfirmer au niveau OS |
| V3-R02 | Working tree dirty CT + moteur SFIA non commités — cadrage v3 ne doit pas les écraser |
| V3-R03 | Live validation moteur SFIA CT encore ouverte |
| V3-R04 | Risque de sur-modélisation d’états avant usage réel |

## 7. Dette

- Documents v3 framing hors `method/` (voulu).
- Pas de schémas JSON formels versionnés.
- Pas d’UI.
- Terminologie v2.6 encore « Morris » dans canoniques (non modifiés).

## 8. Anti-claims

Ce decision pack **ne valide pas** SFIA v3.0.
Il prépare uniquement `GO VALIDATION CADRAGE SFIA v3.0`.

## 9. Verdict pack cadrage

**SFIA v3.0 FRAMING READY — HUMAN DECISION REQUIRED**

```

## 7. Fichiers modifiés

Aucun fichier existant modifié dans ce cycle de cadrage v3.0.
(Les dirty files Control Tower / app préexistants sont inchangés par cette passe.)

## 8. Réserves / dette / anti-claims

- V3-R01 à V3-R04 (voir 14)
- Dette : framing hors method/ ; pas de schémas JSON ; pas d’UI
- Anti-claims : pas baseline v3 ; pas implémentation ; pas MVP/prod ; pas modif v2.6

## 9. État Git final

```
 M projects/sfia-studio/README.md
 M projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
 M projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts
 M projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
 M projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
 M projects/sfia-studio/app/lib/ops1/actions.ts
 M projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
 M projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
 M projects/sfia-studio/app/lib/ops1/conversation/service.ts
 M projects/sfia-studio/app/lib/ops1/conversation/types.ts
 M projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts
 M projects/sfia-studio/app/lib/ops1/types.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/66-control-tower-product-framing.md
?? projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md
?? projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md
?? projects/sfia-studio/69-control-tower-options-and-decision-pack.md
?? projects/sfia-studio/70-control-tower-fast-track-architecture-and-contract.md
?? projects/sfia-studio/71-control-tower-fast-track-backlog-and-delivery.md
?? projects/sfia-studio/72-control-tower-fast-track-decision-pack.md
?? projects/sfia-studio/73-control-tower-fast-track-delivery-report.md
?? projects/sfia-studio/74-sfia-canonical-context-engine-report.md
?? projects/sfia-studio/app/__tests__/ops1/controlTowerReinjection.test.ts
?? projects/sfia-studio/app/__tests__/ops1/controlTowerTools.test.ts
?? projects/sfia-studio/app/__tests__/ops1/sfia/
?? projects/sfia-studio/app/e2e/control-tower-fast-track.spec.ts
?? projects/sfia-studio/app/e2e/sfia-canonical-context-engine.spec.ts
?? projects/sfia-studio/app/lib/ops1/conversation/toolLoop.ts
?? projects/sfia-studio/app/lib/ops1/reportReinjection.ts
?? projects/sfia-studio/app/lib/ops1/sfia/
?? projects/sfia-studio/app/lib/ops1/tools/
?? projects/sfia-studio/sfia-v3-framing/
```

```
32e5271842b9a344a7e292614675c27ea8ed941b
delivery/sfia-studio-control-tower-fast-track
```

**VERDICT :** SFIA v3.0 FRAMING READY — HUMAN DECISION REQUIRED
