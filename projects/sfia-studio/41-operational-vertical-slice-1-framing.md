# SFIA Studio — Cadrage du Vertical Slice Opérationnel 1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `41-operational-vertical-slice-1-framing.md` |
| **Cycle** | 1 — Cadrage, validation |
| **Profil** | Standard |
| **Typologie** | POC / CADRAGE / PRODUIT / VALIDATION |
| **Baseline** | SFIA v2.6 opérationnelle sur `main` |
| **Gates consommés** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` · `G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT` · `G-OPS1-FRAMING-VAL` |
| **Statut** | `framing-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 12:21 CEST) ; POC **maintenu** ; conception, architecture, UX finale, backlog, delivery, GPT live, Cursor réel, MVP **fermés** |
| **Companions** | [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Base Git de cadrage** | `origin/main` @ `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |
| **Autorité** | Morris (L0) |

> Ce document cadre la **prochaine marche du POC** après le vertical slice A–E.
> **Cadrage validé avec réserves** sous `G-OPS1-FRAMING-VAL` — conversation GPT réelle et libre au centre ; action Markdown gouvernée.
> La validation **n’ouvre pas** conception détaillée, architecture technique, UX finale, backlog, delivery, live ni MVP.
> Aucun claim MVP, production-ready ou industrialisation.
> Documents sur branche documentaire / draft PR — **non mergés** tant qu’un GO Morris de merge distinct n’est pas émis.

---

## 1. Contexte

### 1.1 Intention produit (inchangée)

SFIA Studio vise une plateforme métier permettant de **qualifier, lancer, suivre et clôturer** les cycles SFIA, en orchestrant Git, GPT et Cursor sous contrôle Morris.

### 1.2 Décision Morris structurante (cadrage initial)

- SFIA Studio reste en phase POC ;
- le POC doit maintenant dépasser la démonstration A–E et permettre de dérouler un vrai cycle depuis l’interface ;
- le MVP futur devra permettre de piloter au minimum un projet de bout en bout, faute de quoi il n’aurait pas de valeur suffisante pour une mise en production ;
- le présent cycle autorise uniquement le cadrage du Vertical Slice Opérationnel 1 ;
- aucune conception détaillée, architecture technique, UX finale, backlog ou delivery n’est encore validé.

### 1.3 Décision Morris d’amendement — conversation réelle

**L’objectif n’est pas de produire une démonstration complètement simulée.**

Morris doit pouvoir échanger **librement et réellement** avec ChatGPT depuis SFIA Studio, avec plusieurs allers-retours, comme il le fait actuellement dans ChatGPT pour piloter SFIA :

- expliquer un besoin ;
- poser des questions ;
- préciser ou modifier l’objectif ;
- challenger une proposition ;
- discuter du cycle, du profil et du périmètre ;
- préparer une décision ;
- donner un GO, un NO-GO, demander une correction ou abandonner ;
- poursuivre l’échange après un rapport Cursor.

La capacité d’**action** derrière cette conversation peut, pour le premier slice, rester limitée à :

- un seul cycle documentaire ;
- un seul fichier Markdown non protégé ;
- une branche locale dédiée ;
- une exécution Cursor bornée ;
- aucun commit, push, PR ou merge automatique.

### 1.4 Formulation structurante obligatoire

```text
Conversation réelle et libre
  → compréhension et qualification GPT
  → action proposée et explicitée
  → gate Morris
  → exécution strictement bornée
```

**La liberté conversationnelle ne doit jamais devenir une autorisation d’exécution implicite.**

### 1.5 État factuel du POC A–E

| Incrément | Capacité | Nature de la preuve |
|-----------|----------|---------------------|
| **A** | Cockpit UI 10 états / 4 routes P0 | Mock / mapping UX |
| **B** | Connexion Studio ↔ harness | Ports fixture |
| **C** | Qualification GPT | Live borné (appels ponctuels) |
| **D** | Exécution Cursor sandbox | Live borné sous GO |
| **E** | Analyse GPT + clôture Morris | Live + `CLOSED_WITH_RESERVATIONS` |

**Prouvé :** briques gouvernées, enchaînables sous fixture ou live contrôlé.

**Non prouvé :** une **conversation réelle, libre, contextuelle et multi-tours** dans Studio, pouvant aboutir (ou non) à une action gouvernée, puis reprendre après exécution — sans script ni formulaire unique.

### 1.6 Distinctions obligatoires

| Terme | Définition |
|-------|------------|
| **POC A–E** | Preuve incrémentale des briques ; clôturée `CLOSED_WITH_RESERVATIONS` |
| **OPS1** | POC suivant : conversation **réelle** + action **étroite** (Markdown) depuis Studio |
| **MVP futur** | Piloter au minimum un **projet bout en bout** — **fermé** ici |
| **Produit cible** | Plateforme multi-cycles / multi-projets — hors slice |

---

## 2. Problème utilisateur

### 2.1 Problème

Le cadrage initial OPS1 risqueait d’être lu comme une **suite de formulaires de qualification** (multi-tours techniques) plutôt que comme le **chat réel** que Morris utilise déjà hors Studio.

Le problème amendé est :

> Morris peut-il **discuter librement et réellement** avec ChatGPT dans SFIA Studio, conserver le contexte, challenger et reformuler, puis — seulement si pertinent — transformer l’échange en **action structurée** soumise à gate, exécutée de façon étroite, puis **reprendre la conversation** sur le résultat ?

### 2.2 Deux espaces fonctionnels complémentaires

#### A. Conversation projet réelle

Morris échange avec ChatGPT de manière **libre et multi-tours** sur besoin, contexte, options, risques, cycles, profil, blocs, périmètre, décisions, résultat Cursor et suite.

Cette conversation :

- utilise un **GPT réel** dans la preuve opératoire du slice ;
- **n’est pas** une fixture métier ;
- **n’est pas** un script pré-écrit ;
- **n’est pas** limitée à une succession rigide de formulaires ;
- conserve le **contexte de session** ;
- peut reformuler, objecter, changer de direction ;
- peut conclure qu’**aucune action n’est nécessaire** ;
- **ne peut pas** créer seule une autorisation d’exécution.

#### B. Action gouvernée

Lorsqu’un échange aboutit à une action possible :

- GPT formule une **proposition d’action structurée** (séparée du dialogue) ;
- Studio affiche cycle, profil, périmètre, effets, fichiers, risques, preuves ;
- Morris valide, refuse, corrige ou abandonne ;
- le harness revalide gate et contrat ;
- Cursor exécute **uniquement** le périmètre autorisé ;
- **aucune intention implicite** issue du chat ne vaut GO.

### 2.3 Liberté conversationnelle bornée par la gouvernance

**« Bornée » ne signifie pas** : questions pré-définies, nombre fixe de messages scénarisés, réponses mockées, chemin unique, qualification single-shot obligatoire.

**Les bornes acceptables portent sur :** budget tokens, nombre d’appels ou durée de session, modèles autorisés, outils accessibles, sources consultables, données sensibles, effets Git, actions Cursor, timeouts, absence de retry automatique, gates humains.

> **La conversation est libre dans son contenu.
> L’exécution est fermée par défaut dans ses effets.**

### 2.4 Utilisateur et valeur

| Acteur | Rôle |
|--------|------|
| **Morris** | Discute, corrige, décide, GO/NO-GO/STOP, clôture |
| **GPT** | Converse, clarifie, propose (candidat) — **ne décide pas**, n’exécute pas |
| **Cursor** | Exécute un contrat borné après GO |
| **Harness** | Applique contrats, allowlist, plafonds, fail-closed |
| **Git** | Vérité technique / documentaire |
| **Studio** | Cockpit conversation + gates — ≠ seconde vérité Git |

| Valeur | Description |
|--------|-------------|
| **Continuité conversationnelle** | Même qualité d’échange qu’un ChatGPT externe, dans Studio |
| **Gouvernance** | Chat libre ≠ exécution libre |
| **Opérabilité** | Action étroite réellement exécutable après GO |
| **Reprise** | Session et fil de discussion récupérables |
| **Preuve POC** | Faisabilité conversation+action — **≠ MVP** |

### 2.5 Début / fin / résultat observable

| Borne | Description |
|-------|-------------|
| **Début** | Morris ouvre une session et **engage une conversation réelle** (demande éventuellement imprécise) |
| **Fin** | Clôture Morris ; historique conversation→(action?)→exécution?→analyse→décision consultable ; reprise possible |

Résultat observable : fil multi-tours non prédéterminé ; corrections Morris ; éventuelle action structurée + GO ; exécution Markdown bornée ; conversation post-rapport ; aucune action distante auto ; session reprise.

### 2.6 Niveau de réalisme

| Niveau | Attendu |
|--------|---------|
| **Conversation** | GPT **réel**, libre, multi-tours, non scénarisé pour la preuve opératoire |
| **Action** | Un Markdown non protégé, branche locale, Cursor après GO |
| **Fixtures** | Autorisées pour **tests automatisés** uniquement — pas pour la preuve métier du scénario pilote |
| **Git distant** | Aucun effet automatique |

---

## 3. Intention OPS1 (amendée)

### 3.1 Formulation

> Permettre à Morris, depuis SFIA Studio, d’avoir une **conversation GPT réelle et libre**, puis — si et seulement si une action est pertinente — de la transformer en **proposition structurée**, de la **gouverner par gate**, d’exécuter un **Cursor borné** (Markdown), de **reprendre la conversation** sur le rapport, et de **clôturer** avec historique et reprise.

### 3.2 Différence avec A–E et avec le cadrage initial

| Dimension | A–E | Cadrage OPS1 initial (risque) | OPS1 amendé |
|-----------|-----|-------------------------------|-------------|
| GPT | Qualif / analyse ponctuelles | Multi-tours vus comme qualif/cadrage | **Chat libre réel** comme socle |
| Action | Sandbox démo | Action = suite naturelle du formulaire | Action **facultative**, séparée, gouvernée |
| Preuve | Incréments | Cycle pilotable | Conversation utilisable **et** action étroite |
| Claim | CLOSED_WITH_RESERVATIONS | ≠ MVP | ≠ MVP |

---

## 4. Scénario pilote (candidat amendé)

### 4.1 Recommandation

**Action :** un cycle documentaire Markdown non protégé, branche locale dédiée, sans push auto.
**Conversation :** dynamique **non prédéterminée** (chemins multiples cohérents).

### 4.2 Dynamique attendue (non scriptée)

Exemple de dynamique — **ne pas figer les phrases** :

1. Morris formule une demande initiale **imprécise** ;
2. ChatGPT clarifie ou propose une clarification ;
3. Morris corrige un élément ;
4. ChatGPT reformule l’objectif et peut proposer un cycle ;
5. Morris challenge ou modifie le périmètre ;
6. ChatGPT produit une **proposition d’action structurée** (ou conclut qu’aucune action n’est nécessaire) ;
7. Si action : Morris donne un **GO explicite** ;
8. Cursor modifie uniquement le Markdown autorisé ;
9. Le rapport remonte ;
10. Morris **échange à nouveau** avec ChatGPT sur le résultat ;
11. Morris valide, demande correction, refuse ou abandonne ;
12. Cycle clôturé et consultable.

La preuve porte sur la capacité à gérer **plusieurs chemins conversationnels**, pas un dialogue unique.

### 4.3 Bornes d’action du scénario

| Champ | Proposition candidate |
|-------|------------------------|
| Repository | `sfia-workspace` |
| Branche | Locale dédiée (sans push) |
| Fichier | Un seul Markdown non protégé |
| Interdits | `method/**`, `prompts/**`, `app/**`, `harness/**`, secrets, lockfiles, `.github/**` |
| Effets distants | Aucun automatique |

Limitation Markdown = limite d’**action**, **pas** limite de **conversation**.

---

## 5. Périmètre (synthèse)

| Capacité | Statut |
|----------|--------|
| Conversation GPT réelle, libre, multi-tours | **Obligatoire** (preuve opératoire) |
| Contexte de session conservé | **Obligatoire** |
| Absence possible d’action | **Obligatoire** |
| Action candidate structurée séparée du chat | **Obligatoire** |
| Gates GO/NO-GO/CORRIGER/ABANDONNER | **Obligatoire** |
| Exécution Markdown bornée | **Obligatoire** (si action autorisée) |
| Conversation post-exécution | **Obligatoire** |
| Historique + reprise | **Obligatoire** |
| Chat simulé / scripté comme preuve | **Interdit** |
| Fixtures dans tests automatisés | **Autorisées** (tests seulement) |
| Multi-projets / remote auto / MVP | **Hors périmètre** |

Détail : [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md).

---

## 6. Exclusions

Identiques au cadrage initial (multi-cycle, auth complète, remote auto, L5, industrialisation, MVP, production, ouverture auto conception/backlog/delivery), **plus** :

- conversation métier simulée présentée comme preuve OPS1 ;
- UX « formulaire déguisé en chat » comme expérience cible.

---

## 7. Challenges (réponses de cadrage)

| Question | Réponse de cadrage |
|----------|-------------------|
| Chat libre = chat illimité ? | **Non.** Libre en contenu ; borné en budget, outils, données, effets. |
| Limiter les coûts sans formulaire ? | Plafonds, alertes, condensation contrôlée du contexte, confirmation avant appel coûteux — **sans** questions pré-définies. |
| Contexte conversationnel vs vérité Git | Le chat est **donnée de session** ; Git (HEAD, diffs, fichiers) **prime** en cas de conflit. |
| Proposition GPT ≠ GO | Action structurée visuelle séparée + gate explicite + harness indépendant du texte. |
| Changement total d’objectif | Rester en conversation ; invalider action candidate ; éventuellement **nouvelle session/cycle** si rupture (règle à figer en conception). |
| Nouvelle session vs nouveau cycle | Changement mineur = même session ; rupture de projet/cycle/repo = nouvelle session (candidat). |
| Prompt injection via fichiers | Contenu fichiers = **non fiable** comme autorité ; outils allowlistés ; harness valide contrats hors texte GPT. |
| Preuve d’utilisabilité conversation | Démo live non scénarisée avec corrections Morris + reprise — pas seulement tests verts. |

---

## 8. Risques

| Risque | Mitigation |
|--------|------------|
| Conversation simulée présentée comme succès | Critères `43` + OPS1-CAND-03/04 |
| Chat = GO implicite | Séparation action + gate |
| Coût conversation libre | FinOps distinct ; plafonds À définir |
| Dérive MVP | Distinctions §1.6 |
| Prompt injection | Default deny ; validation harness |
| Sur-spécification stack | Non tranché |

---

## 9. Trajectoire candidate (conversation-first)

Voir détail et comparaison d’options dans [`44`](./44-operational-vertical-slice-1-decision-pack.md).

1. **I1** — Session + journal conversationnel (fixture OK pour tests de persistance)
2. **I2** — Conversation GPT **réelle et libre** (sans Cursor) — gate `G-OPS1-LIVE-CONVERSATION`
3. **I3** — Proposition d’action + gates (sans exécution)
4. **I4** — Contrat documentaire + Cursor Markdown borné
5. **I5** — Rapport + conversation post-exécution
6. **I6** — Clôture, historique, reprise complète
7. **I7** — Démonstration opératoire OPS1 (GPT réel + Cursor réel + chat non scénarisé)

---

## 10. Point d’arrêt du POC

OPS1 réussi = preuve de **conversation réelle utilisable** + **action gouvernée étroite**.
≠ ouverture MVP. Trajectoire post-slice = GO Morris distinct (`G-OPS1-MVP-TRAJECTORY`).

---

## 11. Décisions non prises

Stack, protocole, Figma, plafonds numériques, noms techniques définitifs, fichier Markdown exact, ouverture conception/backlog/delivery, commit des docs cadrage.

---

## 12. Validation Morris — 2026-07-20

| Champ | Valeur |
|-------|--------|
| Autorité | Morris (L0) |
| Gate | `G-OPS1-FRAMING-VAL` **consommé** |
| Date/heure/fuseau | 2026-07-20 12:21 CEST |
| Décision | Cadrage OPS1 amendé **validé avec réserves** |
| POC | **Reste ouvert** (phase POC maintenue) |
| Conception / archi / UX / backlog / delivery / live / MVP | **Restent fermés** — GO distincts requis |
| OPS1-CAND-01…14 | Validées selon [`44`](./44-operational-vertical-slice-1-decision-pack.md) |

Formulation structurante **validée** :

```text
Conversation réelle et libre
  → compréhension et qualification GPT
  → action facultative proposée et structurée
  → gate Morris explicite
  → exécution strictement bornée
  → rapport et preuves
  → reprise de la conversation
  → décision Morris finale
```

## 13. Verdict documentaire

`framing-validated-with-reservations`

`SFIA STUDIO OPS1 FRAMING VALIDATED WITH RESERVATIONS`

Gates suivants : **fermés** — voir [`44`](./44-operational-vertical-slice-1-decision-pack.md). Prochaine étape = décision Morris distincte sur l’ouverture éventuelle de la conception fonctionnelle OPS1.
