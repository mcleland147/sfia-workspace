# SFIA Task Manager — Project Framing

**Projet :** SFIA Task Manager
**Chemin :** `projects/sfia-task-manager/00-framing/2026-08-19-project-framing.md`
**Version :** Bootstrap M1 — Cycle 1 — Cadrage
**Baseline process :** SFIA v2.6
**Statut :** BOOTSTRAP / FRAMING — en attente review Morris

---

## 1. Intention

Créer une application de gestion de tâches gouvernée par SFIA v2.6.

La tâche ne représente pas seulement une checkbox à terminer : elle doit être qualifiée, exécutée dans un cycle borné, accompagnée de preuves et clôturée par décision humaine.

## 2. Value proposition

Transformer une intention de travail en travail qualifié, exécuté dans un cycle SFIA borné, vérifié par des preuves et clôturé par une décision humaine, avec historique et prochaine action explicites.

## 3. Problem statement

Les gestionnaires de tâches classiques suivent principalement des états.

Le besoin ici est de suivre aussi :

- pourquoi le travail existe ;
- son périmètre ;
- son contrat d'exécution ;
- les gates ;
- les preuves ;
- les réserves ;
- la décision humaine ;
- la prochaine action ;
- l'historique de replanification.

## 4. Target users

| Utilisateur | Rôle |
|-------------|------|
| **Utilisateur opérationnel initial** | Personne pilotant du travail selon SFIA |
| **Morris** | Autorité de décision du projet actuel |
| **Cible produit élargie** | OPEN DECISION |

Ne pas inventer une cible commerciale définitive.

## 5. Functional model — validated M1 contract

Huit objets fonctionnels M1 :

| # | Objet | Rôle |
|---|-------|------|
| 1 | **Workspace** | Conteneur organisationnel de projets et travail |
| 2 | **Project** | Regroupement de Work Items sous une intention produit |
| 3 | **Work Item** | Unité de travail qualifiée et gouvernée |
| 4 | **Cycle** | Exécution bornée d'un Work Item selon un contrat SFIA |
| 5 | **Gate** | Point de contrôle avant progression |
| 6 | **Evidence** | Preuve attachée à l'exécution ou à la revue |
| 7 | **Decision** | Verdict humain structurant |
| 8 | **Activity** | Historique des événements structurels |

### Relation centrale

```
Workspace
  → Project
    → Work Item
      → Cycle(s)
        → Gates / Evidence / Decision
      → Activity history
```

### Invariant M1

Un Work Item possède **au maximum un Cycle actif** à un instant donné en M1.

Les anciens Cycles ne sont **jamais écrasés**.

## 6. Work Item contract

Champs fonctionnels approuvés :

| Champ | Description |
|-------|-------------|
| `title` | Intitulé du travail |
| `objective` | Intention et finalité |
| `project` | Projet parent |
| `type` | Nature du travail |
| `priority` | Priorité relative |
| `status` | État dans le workflow M1 |
| `in_scope` | Périmètre inclus |
| `out_of_scope` | Périmètre explicitement exclu |
| `dependencies` | Dépendances identifiées |
| `guardrails` | Garde-fous d'exécution |
| `exit_proof` | Preuve attendue pour clôture |
| `current_cycle` | Cycle actif (si existant) |
| `next_action` | Prochaine action explicite |

## 7. Cycle contract

Contrat minimal approuvé :

| Champ | Description |
|-------|-------------|
| `objective` | Objectif du cycle |
| `cycle_type` | Type de cycle SFIA |
| `profile` | Light / Standard / Critical / Capitalization |
| `blocks` | Blocs ou sections du contrat |
| `scope` | Périmètre d'exécution |
| `guardrails` | Garde-fous applicables |
| `allowed_files` | Fichiers autorisés |
| `forbidden_files` | Fichiers interdits |
| `protected_paths` | Chemins protégés |
| `gates` | Gates requis |
| `stop_conditions` | Conditions d'arrêt |
| `exit_proof` | Preuve de sortie attendue |
| `review_pack` | required / status / reference |
| `git_refs` | repo, ref, branch, HEAD, commit, PR, files (informationnel en M1) |
| `verdict` | Verdict du cycle |

**Note :** Ne pas créer `ExecutionContract` comme objet séparé en M1. Cette séparation reste candidate pour M3/M4.

## 8. Workflow M1

```
INBOX
  → QUALIFIED
  → READY
  → IN PROGRESS
  → REVIEW
  → DECISION PENDING
  → DONE
```

### Règles

- **Blocked** n'est **PAS** un état de lifecycle.
- **Blocked** est un **flag orthogonal** avec :
  - `reason`
  - `unblock condition`
  - `next action`

- **Replan** n'est **PAS** un état.
- **Replan** est un **résultat de décision**.
- Il ferme le Cycle courant sans supprimer son historique.
- Il renvoie le Work Item vers **Qualified** ou **Ready** selon le besoin.
- Un nouveau Cycle est ensuite créé si nécessaire.

## 9. Transition rules

| Transition | Condition |
|------------|-----------|
| **Inbox → Qualified** | Objective, project et nature du travail compris |
| **Qualified → Ready** | Profile, cycle, scope, exclusions, guardrails, dependencies et exit proof définis |
| **Ready → In Progress** | Cycle créé et gates prérequis satisfaits |
| **In Progress → Review** | Exécution terminée et evidence attendue disponible |
| **Review → Decision Pending** | Review terminée et réserves identifiées |
| **Decision Pending → Done** | Verdict humain positif + exit proof satisfaite |

## 10. Human verdicts

Verdicts M1 :

| Verdict | Effet |
|---------|-------|
| **GO** | Clôture positive |
| **GO WITH RESERVE** | Clôture avec réserve documentée |
| **REPLAN** | Nouvelle trajectoire — Cycle courant historisé |
| **NO-GO** | Refus de clôture — retour ou blocage selon contexte |

### Règle dure

L'application ne prend **jamais** automatiquement une décision structurante.

Une IA future peut recommander un verdict et exposer les preuves. Elle ne décide pas à la place de l'humain.

## 11. Product invariants

| ID | Invariant |
|----|-----------|
| **I1** | No Done without human verdict |
| **I2** | No Done without exit proof |
| **I3** | One active Cycle per Work Item |
| **I4** | Past Cycle never overwritten by replan |
| **I5** | Evidence and decisions remain historical |
| **I6** | Human gate never auto-approved |
| **I7** | Every unfinished Work Item has next_action |
| **I8** | Every blocked Work Item has reason + unblock condition |
| **I9** | SFIA profile explicit before Ready |
| **I10** | Scope and out-of-scope visible before execution |
| **I11** | Git refs in M1 are informational/manual, not executing actions |
| **I12** | Application never autonomously expands scope |

## 12. UX/UI contract — validated direction

L'expérience doit répondre rapidement à :

- Où en sommes-nous ?
- Pourquoi ?
- Qu'est-ce qui bloque ou manque ?
- Quelle est la prochaine action ?
- Quelle preuve est attendue ?
- Quelle décision doit être prise ?

### Hiérarchie UX cible

```
State
  → Next action
  → Risk / blocker
  → Evidence
  → Decision
  → History
```

### À éviter

Une UX centrée sur :

```
description
  → metadata
  → comments
  → subtasks
```

## 13. M1 screens

Cinq surfaces métier validées :

| # | Surface | Rôle |
|---|---------|------|
| 1 | **Workboard** | Vue kanban du workflow M1 |
| 2 | **Work Item** | Détail et qualification d'un item |
| 3 | **Cycle Workspace** | Exécution du cycle actif |
| 4 | **Review & Decision** | Comparaison preuve / verdict |
| 5 | **Project** | Vue projet et agrégation |

**Quick Inspector :** composant transversal du Workboard — **pas** sixième domaine métier.

## 14. Workboard

### Colonnes

Inbox · Qualified · Ready · In Progress · Review · Decision · Done

### Carte minimale

- title
- project
- SFIA profile
- blocked flag (si applicable)
- next action
- current gate (si applicable)

Ne pas dupliquer le status sous forme de badge si la colonne le rend déjà évident.

## 15. Work Item UX

La page doit rendre immédiatement accessibles :

- Intent
- Qualification
- Scope
- Dependencies
- Guardrails
- Exit Proof
- Current Cycle
- Next Action
- History

**Next Action** doit rester fortement visible.

## 16. Cycle Workspace UX

### Principe visuel

| Zone | Contenu |
|------|---------|
| **Zone principale** | Execution contract |
| **Zone contrôle** | gates, stop conditions, exit proof, evidence |

Lecture conceptuelle : à gauche, ce qui est autorisé ; à droite, ce qui permet de contrôler la sortie.

## 17. Review & Decision UX

Surface centrale.

Elle doit rendre comparables :

- **Expected exit proof** vs **Actual evidence**

Et afficher :

- validation results
- reservations
- guardrail violations
- review pack status
- Git refs
- human decision

Le système doit expliquer **pourquoi** un verdict est indisponible plutôt que désactiver silencieusement une action.

## 18. GO WITH RESERVE

Un GO WITH RESERVE doit obligatoirement porter :

- **reserve** — description de la réserve
- **follow-up / next action** — lorsque nécessaire

Éviter une réserve sans trajectoire de traitement.

## 19. REPLAN

REPLAN :

- clôt le Cycle courant comme historique ;
- conserve Evidence et Decision ;
- consigne reason ;
- définit Qualified ou Ready comme retour ;
- exige une next action ;
- ne réinitialise pas silencieusement l'historique.

## 20. Visual direction

Direction validée :

- sobre
- professionnelle
- relativement dense
- orientée contrôle et décision
- pas clone Jira
- pas interface AI futuriste
- couleur à rôle sémantique
- aucune information critique uniquement portée par la couleur

L'IA ne doit pas devenir le centre de l'interface. Les objets Work Item / Cycle / Evidence / Decision restent la structure principale.

## 21. Figma trajectory

**Cible Design Figma ultérieure** — hors scope du bootstrap actuel.

| Paramètre | Valeur |
|-----------|--------|
| Viewport | desktop-first 1440 × 1024 |

### Frames principales candidates

| Frame | Surface |
|-------|---------|
| 01 | Workboard |
| 02 | Work Item |
| 03 | Cycle Workspace |
| 04 | Review & Decision |
| 05 | Project |

### Variants critiques

| Frame | Variante |
|-------|----------|
| 06 | Work Item / Blocked |
| 07 | Work Item / Cannot Ready |
| 08 | Review / GO With Reserve |
| 09 | Review / Replan |
| 10 | Empty Workspace |

Responsive mobile complet hors exit proof M1.

Figma Design doit devenir la source de vérité visuelle avant delivery code.

## 22. M1 acceptance criteria

| ID | Critère |
|----|---------|
| AC01 | Project can be created |
| AC02 | Work Item can be created in Inbox |
| AC03 | SFIA qualification can be entered |
| AC04 | Ready impossible if required structural fields are missing |
| AC05 | SFIA Cycle can be created from Work Item |
| AC06 | Only one active Cycle |
| AC07 | Cycle transitions controlled |
| AC08 | Work Item can be blocked with reason + unblock condition |
| AC09 | Manual Evidence attachable |
| AC10 | Scope/guardrails/gates/exit proof visible in review |
| AC11 | Human decision recorded with verdict, author, date |
| AC12 | Done impossible without decision + exit proof |
| AC13 | REPLAN creates new trajectory without deleting old Cycle |
| AC14 | Workboard and Project show actual current state |
| AC15 | History reconstructs structural events |
| AC16 | No structural decision made automatically |

**Règle M1 :** M1 n'est READY que lorsque ces critères sont démontrés end-to-end.

Ce bootstrap documentaire ne démontre aucun de ces AC. Il ne doit donc **pas** déclarer M1 READY.

## 23. End-to-end exit proof target

Scénario produit cible :

```
Create Project
  → Create Work Item
  → Inbox
  → qualify Standard
  → define scope / out-of-scope / guardrails / exit proof
  → Ready
  → create Cycle
  → In Progress
  → add Evidence
  → Review
  → reservation
  → Decision Pending
  → GO WITH RESERVE
  → Done
```

À la fin, le produit devra pouvoir reconstruire :

```
initial intent
  → qualification
  → execution contract
  → actual work
  → evidence
  → decision
  → reservations
  → final state
```

Ce scénario est une **cible produit**, PAS une preuve obtenue dans ce bootstrap.

## 24. Initial out of scope

Explicitement hors M1 / hors cycle actuel :

- native Git sync
- automatic branch/commit/PR actions
- AI automatic qualification
- automatic SFIA contract generation
- Cursor execution integration
- Git write actions depuis le produit
- configurable Jira-like workflow
- multi-agent orchestration
- advanced analytics
- global L5 automation
- full mobile responsive
- autonomous structural decision
- architecture technique
- database/persistence choice
- frontend framework
- backend
- auth
- production/deployment

## 25. Automation trajectory

Trajectoire candidate :

```
L0 manuel assisté
  → L1 contrôle
  → L2 génération guidée
```

M1 reste essentiellement manuel.

Ne pas ouvrir L3/L4/L5 produit dans ce cycle.

## 26. Open decisions

| Décision | Statut |
|----------|--------|
| Cible utilisateur produit élargie | OPEN |
| Branding / nom produit définitif (si différent de SFIA Task Manager) | OPEN |
| Architecture technique | OPEN |
| Frontend stack | OPEN |
| Persistence / database | OPEN |
| Auth / multi-user strategy | OPEN |
| Hosting/deployment | OPEN |
| Niveau d'accessibilité cible | OPEN |
| Design tokens définitifs | OPEN |
| Référence/fileKey Figma | OPEN |
| Trajectoire native Git après M1 | OPEN |

Aucune de ces décisions ne doit être tranchée sans décision Morris explicite.

## 27. Risks

| Risque | Mitigation |
|--------|------------|
| Dérive vers un Jira clone | UX orientée contrôle/décision, pas subtasks/comments |
| Sur-conception avant preuve M1 | Bootstrap minimal ; M1 AC end-to-end requis |
| Architecture technique choisie trop tôt | Open decision explicite |
| Automatisation excessive de décisions humaines | Invariants I1, I6, I12 |
| Perte de l'historique lors d'un replan | Invariants I4, I5 |
| Confusion task status / Cycle status | Modèle Work Item + Cycle séparé |
| UI générique si Figma non validé avant delivery | Trajectoire Design-first |
| Expansion du scope vers Git automation trop tôt | Hors M1 explicite |

## 28. Next candidate cycle

Après validation Morris du bootstrap :

| Élément | Valeur |
|---------|--------|
| **Cycle candidat** | Cycle 2 — Conception fonctionnelle — Standard |
| **Objectif candidat** | Matérialiser dans un document projet dédié les règles métier, objets, parcours et cas limites du contrat fonctionnel M1 déjà approuvé |

Cette mention est une **recommandation de trajectoire uniquement**.

**NE PAS** ouvrir ni exécuter automatiquement le Cycle 2.

---

## Decision authority

| Rôle | Responsabilité |
|------|----------------|
| **Morris** | Arbitrages structurants, GO scope, validation bootstrap |
| **ChatGPT** | Cadrage, routing, prompts, analyse rapports |
| **Cursor** | Exécution cycles bornés (L3 documentaire) |
| **Git** | Source de vérité — Markdown versionné |

## Explicit separation

Ce projet n'est **pas** SFIA Studio v3 et ne doit pas être assimilé à SFIA Studio sans décision Morris dédiée.
