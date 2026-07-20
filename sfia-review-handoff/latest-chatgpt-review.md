# SFIA Studio — Review Pack — OPS1 Framing Amendment (real free-form conversation)

- **Date/heure/fuseau :** 2026-07-20 12:16:20 CEST
- **Repo :** mcleland147/sfia-workspace
- **Branche :** `main`
- **HEAD :** `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25`
- **origin/main :** `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25`
- **Cycle :** 1 — Cadrage, amendement
- **Profil :** Standard
- **Gate consommé :** G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT
- **Gate antérieur :** G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING

## 1. Truth Check

- main @ `6a4c4a7` = origin/main ; 0/0
- tracked : README modifié (cadrage) ; docs 41–44 untracked ; `.tmp-sfia-review` untracked
- aucun code app/harness ; staged vide

## 2. Décision Morris (exacte — reprise)

L’objectif n’est pas de produire une démonstration complètement simulée.

Morris doit pouvoir échanger librement et réellement avec ChatGPT depuis SFIA Studio, avec plusieurs allers-retours, comme il le fait actuellement dans ChatGPT pour piloter SFIA :
- expliquer un besoin ; poser des questions ; préciser ou modifier l’objectif ; challenger une proposition ;
- discuter du cycle, du profil et du périmètre ; préparer une décision ;
- donner un GO, un NO-GO, demander une correction ou abandonner ;
- poursuivre l’échange après un rapport Cursor.

La capacité d’action peut rester limitée à : un cycle documentaire ; un Markdown non protégé ; branche locale ; Cursor borné ; aucun commit/push/PR/merge automatique.

Formulation structurante :
Conversation réelle et libre → compréhension et qualification GPT → action proposée et explicitée → gate Morris → exécution strictement bornée.
La liberté conversationnelle ne doit jamais devenir une autorisation d’exécution implicite.

## 3. Problème détecté dans le cadrage initial

Formulations initiales traitaient la conversation surtout comme « échanges successifs / multi-tours qualification+cadrage », ce qui pouvait être lu comme :
- parcours de formulaires ;
- single-path ;
- conversation non libre ;
- action = suite automatique du dialogue.

## 4. Distinction conversation / action

**A. Conversation projet réelle** — GPT live, libre, multi-tours, contextuelle ; peut ne proposer aucune action ; ne crée jamais un GO.

**B. Action gouvernée** — proposition structurée séparée ; gate explicite ; Cursor Markdown borné ; harness revalide indépendamment du texte.

## 5. Amendements par document

| Doc | Amendements majeurs |
|-----|---------------------|
| 41 | Décision amendement ; deux espaces A/B ; liberté ≠ illimité ; scénario non scripté ; challenges ; trajectoire conversation-first |
| 42 | Couches d’état ; CONVERSATION_ACTIVE / ACTION_* / POST_EXECUTION ; CycleSession journal ; contrats conversation/action/analyse ; sécurité injection |
| 43 | Critères live vs fixtures ; UX chat réel ; FinOps conversation séparée ; 17 critères obligatoires amendés |
| 44 | OPS1-CAND-03 réécrit ; CAND-04..06 ajoutés (fixtures/tests, séparation action, post-exec) ; trajectoire I1–I7 adaptée ; option S1 vs S2 |
| README | Statut amendé ; conversation réelle libre mentionnée ; verdict courant |

## 6. Trajectoire précédente vs adaptée

**Avant :** I1 session → I2 conversation+qualif → I3 cadrage+gates → I4 exec → I5 rapport → I6 analyse → I7 démo.

**Après :** I1 journal → **I2 conversation GPT réelle libre (sans Cursor)** → I3 action+gates → I4 Cursor Markdown → I5 post-exec chat → I6 clôture → I7 démo opératoire.

Option S1 (I1 puis I2) recommandée vs fusion I1+I2.

## 7. OPS1-CAND modifiés / ajoutés

- **03** réécrit (conversation réelle libre ; bornes budget/outils/effets)
- **04** fixtures = tests seulement
- **05** action séparée ; chat ≠ GO
- **06** pas d’action possible ; post-exec obligatoire
- **07–14** renumérotés / alignés (session, persistance, git, trajectoire, critères, POC/MVP, états, FinOps)

## 8. Décisions non prises

Stack, Figma, backlog, delivery, live, plafonds numériques, MVP, commit docs cadrage.

## 9. Diff / status

```
 projects/sfia-studio/README.md | 42 ++++++++++++++++++++++++++++++------------
 1 file changed, 30 insertions(+), 12 deletions(-)

```

```
 M projects/sfia-studio/README.md
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/41-operational-vertical-slice-1-framing.md
?? projects/sfia-studio/42-operational-vertical-slice-1-flow-and-session-model.md
?? projects/sfia-studio/43-operational-vertical-slice-1-scope-and-success-criteria.md
?? projects/sfia-studio/44-operational-vertical-slice-1-decision-pack.md

```

Nouveaux / réécrits (untracked) : 41, 42, 43, 44.

## 10. Contenu substantiel — 41

```markdown
# SFIA Studio — Cadrage du Vertical Slice Opérationnel 1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `41-operational-vertical-slice-1-framing.md` |
| **Cycle** | 1 — Cadrage, amendement |
| **Profil** | Standard |
| **Typologie** | POC / CADRAGE / PRODUIT / AMENDEMENT |
| **Baseline** | SFIA v2.6 opérationnelle sur `main` |
| **Gates consommés** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` · `G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT` |
| **Statut** | `framing-candidate-amended` — **non validé** ; conception, architecture, UX finale, backlog et delivery **non ouverts** |
| **Companions** | [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Base Git de cadrage** | `origin/main` @ `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |
| **Autorité** | Morris (L0) |

> Ce document cadre la **prochaine marche du POC** après le vertical slice A–E, **amendé** pour placer une **conversation GPT réelle et libre** au centre du slice.  
> Il **ne** livre pas de conception détaillée, d’architecture technique, d’UX finale, de backlog ni de delivery.  
> Aucun claim MVP, production-ready ou industrialisation.

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
- Morris valide, refuse, corri

… [extrait — fichier local complet] …

re auto conception/backlog/delivery), **plus** :

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

## 12. Verdict documentaire

`OPERATIONAL VERTICAL SLICE 1 FRAMING AMENDED — REAL FREE-FORM CONVERSATION — AWAITING MORRIS VALIDATION`

```

## 11. Contenu substantiel — 42

```markdown
# SFIA Studio — Flux, états et modèle de session du Vertical Slice Opérationnel 1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `42-operational-vertical-slice-1-flow-and-session-model.md` |
| **Cycle** | 1 — Cadrage, amendement |
| **Profil** | Standard |
| **Statut** | `framing-candidate-amended` — modèle et états **candidats** |
| **Gates** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` · `G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT` |
| **Companions** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Base Git** | `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |

> Parcours, couches d’état, `CycleSession`, contrats conversation / action / analyse, persistance et reprise.  
> **Amendé** : conversation libre réelle ≠ machine à formulaires ; aucune réponse GPT seule n’autorise une exécution.  
> Aucune stack / BDD / protocole figé.

---

## 1. Parcours bout en bout (cible amendée)

```text
Session ouverte
  → CONVERSATION RÉELLE ET LIBRE (multi-tours, non scénarisée)
      ↳ compréhension / clarification / challenge / reformulation
      ↳ éventuellement : aucune action nécessaire
      ↳ éventuellement : proposition d’action structurée (séparée du dialogue)
  → gate Morris explicite (si action)
  → exécution Cursor strictement bornée (Markdown)
  → rapport + preuves + diff
  → CONVERSATION POST-EXÉCUTION (réelle)
  → analyse GPT candidate (si pertinente)
  → décision Morris finale
  → clôture + historique + reprise
```

Formulation structurante :

```text
Conversation réelle et libre
  → compréhension et qualification GPT
  → action proposée et explicitée
  → gate Morris
  → exécution strictement bornée
```

---

## 2. Couches d’état (éviter la rigidité message → transition)

Quatre couches **indépendantes conceptuellement** :

| Couche | Rôle |
|--------|------|
| **État global de session** | Cycle de vie macro (ouverte, clôturée, abandonnée, STOP, FAILED) |
| **Phase conversationnelle** | Où en est le dialogue (actif, post-exec, etc.) |
| **Statut d’action candidate** | Aucune / candidate / raffinement / gate / autorisée / refusée |
| **Statut d’exécution** | Idle / pending / executing / report / failed |

**Règle :** la conversation peut rester **active** dans plusieurs états globaux.  
**Règle :** une réponse GPT seule **ne** fait **jamais** passer une action à `AUTHORIZED`.

### 2.1 États candidats (couches fusionnées pour lisibilité)

| État / phase | Intention |
|--------------|-----------|
| `CONVERSATION_ACTIVE` | Dialogue libre en cours |
| `ACTION_NOT_REQUIRED` | GPT ou Morris concluent qu’aucune action n’est nécessaire (conversation peut continuer) |
| `ACTION_CANDIDATE` | Proposition d’action structurée affichée, non autorisée |
| `ACTION_REFINEMENT` | Correction / challenge de l’action via conversation ou panneau |
| `MORRIS_ACTION_GATE` | Attente GO / NO-GO / CORRIGER / ABANDONNER |
| `ACTION_AUTHORIZED` | GO ancré consommé — exécution pas encore démarrée |
| `EXECUTION_PENDING` | Harness prépare / revalide |
| `EXECUTING` | Cursor en cours |
| `REPORT_AVAILABLE` | Rapport + preuves disponibles |
| `POST_EXECUTION_CONVERSATION` | Reprise du chat réel sur le résultat |
| `MORRIS_FINAL_DECISION` | CLOSE / CORRECT / RELAUNCH / ABANDON |
| `CLOSED` | Clôturé |
| `ABANDONED` | Abandon explicite |
| `STOPPED` | STOP prioritaire |
| `FAILED` | Échec fail-closed |

Les états A–E historiques (`qualification_en_cours`, etc.) restent un **héritage de mapping UX** ; OPS1 ne les traite plus comme une file unique de formulaires.

### 2.2 Transitions essentielles

| Depuis | Déclencheur | Autorité | Vers | Notes |
|--------|-------------|----------|------|-------|
| (start) | Ouvrir session / message | Morris | `CONVERSATION_ACTIVE` | GPT réel sous GO live conversation |
| `CONVERSATION_ACTIVE` | Message Morris/GPT | — | `CONVERSATION_ACTIVE` | **Pas** de transition d’autorisation |
| `CONVERSATION_ACTIVE` | Signal « pas d’action » | GPT/Morris | `ACTION_NOT_REQUIRED` | Chat peut continuer |
| `CONVERSATION_ACTIVE` | Proposition structurée émise | GPT→Harness validate | `ACTION_CANDIDATE` | Objet séparé du texte |
| `ACTION_CANDIDATE` | Corriger / discuter | Morris | `ACTION_REFINEMENT` / `CONVERSATION_ACTIVE` | |
| `ACTION_CANDIDATE` | Soumettre au gate | Morris | `MORRIS_ACTION_GATE` | |
| `MORRIS_ACTION_GATE` | GO ancré | Morris | `ACTION_AUTHORIZED` | contractHash + HEAD + allowlist |
| `MORRIS_ACTION_GATE` | NO-GO / Abandon | Morris | `CONVERSATION_ACTIVE` / `ABANDONED` | |
| `ACTION_AUTHORIZED` | Start harness | Harness | `EXECUTION_PENDING` → `EXECUTING` | Revalidation obligatoire |
| `EXECUTING` | Fin OK | Cursor | `REPORT_AVAILABLE` | |
| `EXECUTING` | STOP | Morris | `STOPPED` | |
| `REPORT_AVAILABLE` | Reprendre chat | Morris | `POST_EXECUTION_CONVERSATION` | **Obligatoire** dans le BeB |
| `POST_EXECUTION_CONVERSATION` | Décision finale | Morris | `MORRIS_FINAL_DECISION` → `CLOSED` / … | Verdict GPT reste candidat |

**Timeout ≠ GO. STOP prioritaire. Pas de retry automatique.**

---

## 3. Modèle conceptuel candidat — `CycleSession`

Nom **candidat**. Champs conceptuels (noms techniques non figés).

### 3.1 Champs session

| Champ | Description |
|-------|-------------|
| `sessionId` | Identifiant de session |
| `projectId` / `repository` | Projet / dépôt |
| `conversationMessages[]` | Journal des messages |
| `conversationContext` | Contexte utile condensé (dérivé, non vérité Git) |
| `conversationPhase` | Phase conversationnelle courante |
| `proposedActions[]` | Actions candidates structurées |
| `selectedAction` | Action retenue pour gate (si une) |
| `qualificationCandidate` | Qualification structurée éventuelle (peut émerger du dialogue) |
| `validatedQualification` | Qualification validée Morris (si distincte) |
| `gates[]` | Ouverts / consommés / refusés |
| `executionContract` | Contrat Cursor + hash |
| `exec

… [extrait — fichier local complet] …

e conversationnelle ; clarification ; observation ; hypothèse ; option ; recommandation ; **proposition d’action structurée facultative** ; signal d’absence d’action ; réserves ; sources utilisées |
| **Règles** | Pas d’obligation de produire qualification/action à chaque tour ; pas de retry auto ; timeout ; sanitization |

### 5.2 Contrat d’action (séparé du dialogue)

| Champ | Contenu |
|-------|---------|
| Objectif | Intention actionnable |
| Cycle / profil | Typologie SFIA proposée |
| Périmètre | Fichiers autorisés / interdits |
| Effets | Locaux attendus ; remote = aucun auto |
| Risques | Liste |
| Preuves attendues | Diff, rapport, etc. |
| Gate requis | GO Morris ancré |

### 5.3 Contrat d’analyse / conversation post-exécution

Après rapport : GPT peut expliquer, challenger, proposer la suite ; verdict reste **candidat** ; nouvelle exécution = nouveau gate.

### 5.4 Studio ↔ harness ↔ Cursor

Inchangés dans l’esprit Option B : ancrage `contractHash` + HEAD + allowlist ; fail-closed ; idempotence ; secrets exclus.

---

## 6. Persistance et reprise

| Élément | Survivre redémarrage ? | Source |
|---------|------------------------|--------|
| Journal messages (`real`) | Oui | Session + preuves |
| Actions / gates / contrats | Oui | Session + preuves |
| Rapports / diffs | Oui | Preuves (+ Git) |
| Draft UI non soumis | Non obligatoire | UI |
| Git HEAD / fichiers | Oui | Git |

Reprise : recharger sans inventer ; si ambiguïté → état sûr (`STOPPED`/`FAILED`/lecture seule).  
Double exécution : verrou sur `contractHash` en `EXECUTING`.

---

## 7. Sécurité conversationnelle (cadrage)

- Pas d’exposition de secrets dans le chat.  
- Contexte Git **explicitement sélectionné** — pas le dépôt entier automatique.  
- Outils GPT allowlistés.  
- Action proposée = non exécutable avant gate.  
- Réponses textuelles ≠ commandes.  
- Contenu utilisateur et fichiers = **données**, jamais autorité système.  
- Prompt injection dans fichiers = non fiable.  
- Harness valide les contrats **hors** confiance au texte GPT.

---

## 8. UX/UI (exigences de cadrage)

Espace conversationnel réel :

- fil lisible Morris / GPT / système ;  
- indicateur de phase ;  
- sources / refs utilisées ;  
- **propositions d’action séparées visuellement** du dialogue ;  
- panneau de gate **indépendant** ;  
- poursuivre la discussion **sans** exécuter ;  
- capacités indisponibles affichées clairement ;  
- reprise après rapport Cursor ;  
- historique décisions / actions.

**Éviter** une UX qui transforme le chat en assistant de formulaire.

Routes P0 réutilisables ; manques : panneau chat, historique sessions, séparation action/gate. Pas de Figma dans ce cycle.

---

## 9. Alignement A–E

A–E fournit cockpit, ports, live ponctuels. OPS1 **réorganise** autour du chat libre et de l’action facultative — sans invalider les preuves A–E, sans claim MVP.

---

## 10. Verdict documentaire

`OPS1 FLOW AND SESSION MODEL AMENDED — CONVERSATION-FIRST — AWAITING MORRIS VALIDATION`

```

## 12. Contenu substantiel — 43

```markdown
# SFIA Studio — Périmètre, NFR et critères de succès du Vertical Slice Opérationnel 1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `43-operational-vertical-slice-1-scope-and-success-criteria.md` |
| **Cycle** | 1 — Cadrage, amendement |
| **Profil** | Standard |
| **Statut** | `framing-candidate-amended` — non validé |
| **Gates** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` · `G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT` |
| **Companions** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Base Git** | `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |

> Contrat de périmètre, NFR et critères de réussite — **amendé conversation réelle**.  
> Succès du slice ≠ MVP ≠ production-ready ≠ industrialisation.  
> Limitation Markdown = limite d’**action**, pas de **conversation**.

---

## 1. In-scope

| Domaine | Inclus |
|---------|--------|
| Conversation | GPT **réel**, libre, contextuel, multi-tours, non scénarisé (preuve opératoire) |
| Action | Proposition structurée facultative ; gate ; Cursor Markdown borné |
| Post-exec | Reprise de conversation réelle sur le rapport |
| Session | Journal, historique, reprise |
| Gouvernance | Morris L0 ; harness fail-closed ; no remote auto |
| Méthode | Consommation SFIA v2.6 + template (sans modifier `method/**` / `prompts/**`) |

---

## 2. Out-of-scope

- Conversation métier **simulée / mockée / scriptée** comme preuve OPS1  
- Chat illimité sans plafonds FinOps  
- Multi-projets, 15 cycles, auth complète, collaboration multi-users  
- Commit / push / PR / merge automatiques  
- Déploiement, production, L5, industrialisation  
- Claim MVP / production-ready  
- Conception / architecture / UX finale / backlog / delivery dans **ce** cycle documentaire  
- Modification Figma  
- Appels GPT live / Cursor réel **pendant le cycle de cadrage** lui-même  

---

## 3. Capacités — matrice

| Capacité | Statut | Preuve attendue |
|----------|--------|-----------------|
| Conversation GPT réelle multi-tours | **Obligatoire** | Fil `originKind=real`, non prédéterminé |
| Conservation du contexte de session | **Obligatoire** | Reprise + continuité thématique |
| Correction / contestation Morris dans le chat | **Obligatoire** | Tours de correction visibles |
| Réponse GPT sans proposer d’action | **Obligatoire** | Cas `ACTION_NOT_REQUIRED` |
| Proposition d’action structurée séparée | **Obligatoire** | Objet action ≠ bulle chat |
| Gates GO/NO-GO/CORRIGER/ABANDONNER | **Obligatoire** | Décision ancrée |
| Aucune action avant gate explicite | **Obligatoire** | Preuve négative |
| Exécution Markdown bornée | **Obligatoire** (si GO) | Diff allowlisté |
| Conversation post-rapport | **Obligatoire** | Phase `POST_EXECUTION_CONVERSATION` |
| Analyse GPT candidate | **Obligatoire** | `candidateOnly` |
| Décision finale + clôture | **Obligatoire** | `MorrisFinalDecision` + summary |
| Historique + reprise session | **Obligatoire** | Fermer / rouvrir |
| Fixtures pour tests automatisés | **Autorisées** | Hors preuve opératoire |
| Fixture comme preuve métier scénario | **Interdite** | — |
| Single-shot qualif comme expérience cible | **Interdite** | — |

---

## 4. UX/UI (cadrage amendé)

| Surface | Besoin |
|---------|--------|
| Fil de discussion | Lisibilité ; auteurs distincts ; horodatage fuseau |
| Contexte | Indicateur de phase ; refs/sources |
| Action | Carte / panneau **séparé** du dialogue |
| Gate | Panneau indépendant ; motif |
| Continuer sans exécuter | Action claire |
| Capacités fermées | Affichage explicite (ex. remote Git) |
| Post-exec | Reprise chat + diff/preuves côte à côte |
| Historique | Sessions + décisions + actions |

Éviter le « chat formulaire ». Pas de Figma ici. Socle : 4 routes P0 + panneaux manquants.

---

## 5. NFR

### 5.1 Sécurité

- Secrets exclus du chat et des logs  
- Contexte Git **sélectionné** explicitement  
- Pas d’ingestion automatique du repository entier  
- Outils allowlistés  
- Action non exécutable avant gate  
- Texte GPT ≠ commande  
- Contenu utilisateur / fichiers = données non autoritaires  
- Anti prompt-injection : harness valide hors confiance au texte  
- Default deny ; fail-closed ; no remote auto  

### 5.2 Observabilité

- Corrélation `sessionId` / `messageId` / `actionId` / `contractHash`  
- Horodatage fuseau  
- `originKind` réel/fixture/système  
- Compteurs et durées  
- Preuves référencées  

### 5.3 FinOps

Candidats (valeurs **À définir** sous GO distinct) :

- budget par session ;  
- budget journalier ;  
- nombre max d’appels ;  
- alerte de seuil ;  
- coût estimé affiché ;  
- condensation contrôlée du contexte ;  
- **aucun retry automatique** ;  
- confirmation avant appel coûteux / changement de modèle ;  
- **comptage séparé** : conversation · qualification/action structurée · analyse.  

Libre ≠ illimité.

### 5.4 Résilience

Timeouts ; idempotence ; reprise sans invention ; anti double-exécution ; rapports incomplets bloquent ; STOP prioritaire.

---

## 6. Critères de réussite

### 6.1 Obligatoires (amendés)

1. GPT **réel** utilisé pour les échanges du scénario pilote.  
2. Aucune réponse **métier** du scénario pilote ne provient d’une fixture.  
3. Conversation de **plusieurs tours non prédéterminés**.  
4. Morris peut **corriger ou contester** ChatGPT.  
5. ChatGPT **conserve le contexte** utile.  
6. ChatGPT peut répondre **sans** proposer d’action.  
7. ChatGPT peut proposer une **action structurée** après discussion.  
8. **Aucune action** ne démarre avant gate explicite.  
9. La conversation peut **reprendre après** le rapport Cursor.  
10. La session complète peut être **fermée puis reprise**.  
11. Les tests automatisés **peuvent** utiliser des fixtures, mais la **preuve opératoire finale** doit être live.  
12. La limitation au Markdown **n’est pas** présentée comme une limitation de la conversation.  
13. Aucune décision structurante sans Morris.  
14. Aucune action Git distante automatique.  
15. Rapport, preuves et diff consultables.  
16. Analyse / verdict GPT restent **candidats**.  
17. Clôture Morris explicite.

### 6.2 Souhaitables

Coût visible par tour ; condensation de contexte explicite ; export pack ; harness autonome de non-régression.

### 6.3 Hors critères

Multi-cycles projet ; auth entreprise ; CI complète ; MVP défini ; production-ready.

### 6.4 Niveaux de preuve (distinction)

| Niveau | Usage | GPT / Cursor |
|--------|-------|--------------|
| **Tests automatisés** | Non-régression | Fixtures autorisées |
| **Intégration contrôlée** | Adaptateurs / ports | Modes contrôlés |
| **Démonstration opératoire OPS1** | Acceptation slice | **GPT réel + Cursor réel** sous gates |

### 6.5 Anti-claims

Interdits : `MVP DEFINED/READY`, `PRODUCTION READY`, `INDUSTRIALIZATION COMPLETE`, `STUDIO COMPLETE`, `L5 GLOBAL PROVEN`, « conversation simulée = OPS1 prouvé ».

Verdict de succès candidat : `OPERATIONAL VERTICAL SLICE 1 PROVEN WITH RESERVES` — **≠ MVP**.

---

## 7. Preuves attendues

| Preuve | Description |
|--------|-------------|
| Journal conversationnel | Multi-tours `real`, corrections Morris |
| Action candidate | Structure séparée + gate |
| Preuve négative | Tentative d’exec sans GO refusée |
| Rapport + diff Markdown | Allowlist respectée |
| Post-exec chat | Reprise réelle |
| CycleSummary | État final + réserves |
| FinOps | Compteurs conversation / structuré / analyse |

---

## 8. Limites acceptées

Un seul scénario d’action Markdown ; pas de CI obligatoire ; sandbox OS non industrialisée ; plafonds numériques À définir ; store session non productisé ; pas de multi-user.

---

## 9. Hypothèses

| ID | Hypothèse |
|----|-----------|
| H1 | Option B + AF-Option C inchangées |
| H2 | Chat libre + plafonds suffit sans questions pré-définies |
| H3 | Markdown borne l’action sans borner le dialogue |
| H4 | I1 peut établir la persistance avant live conversation (I2) |
| H5 | Live conversation et live Cursor restent des GO distincts |

---

## 10. Dette

| Évitée | Acceptée |
|--------|----------|
| Chat simulé comme succès | Store session minimal |
| Auto-GO depuis texte | UX chat non encore Figma |
| BDD imposée | Plafonds À définir |

---

## 11. Verdict documentaire

`OPS1 SCOPE AND SUCCESS CRITERIA AMENDED — REAL CONVERSATION REQUIRED — AWAITING MORRIS VALIDATION`

```

## 13. Contenu substantiel — 44

```markdown
# SFIA Studio — Decision pack Vertical Slice Opérationnel 1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `44-operational-vertical-slice-1-decision-pack.md` |
| **Cycle** | 1 — Cadrage, amendement |
| **Profil** | Standard |
| **Statut** | `framing-candidate-amended` — décisions **candidates** ; aucune validée ici |
| **Gates consommés** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` · `G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT` |
| **Companions** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) |
| **Base Git** | `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |

> Pack de décisions amendé : **conversation réelle et libre** comme socle OPS1 ; **action étroite** gouvernée.  
> Valider ou refuser chaque `OPS1-CAND-*`. Aucune ouverture auto conception / backlog / delivery.

---

## 1. Synthèse

Le cadrage initial OPS1 plaçait correctement l’opérabilité, mais formulait la conversation surtout comme **échanges de qualification/cadrage**, ce qui pouvait être lu comme un parcours **scénarisé / formulaire**.

L’amendement Morris impose :

> Conversation réelle et libre → compréhension/qualification → action proposée et explicitée → gate Morris → exécution strictement bornée.

La liberté conversationnelle **n’est jamais** une autorisation d’exécution implicite. L’action du premier slice reste un **Markdown** local.

---

## 2. Observations

1. A–E a prouvé des briques (dont GPT/Cursor live ponctuels), pas un chat Studio libre.  
2. Le risque du cadrage initial : « multi-tours » ≈ qualification structurée single-path.  
3. Morris utilise déjà ChatGPT hors Studio pour piloter SFIA — OPS1 doit **rapprocher** cette expérience, pas la remplacer par une démo.  
4. Fixtures restent légitimes pour **tests** ; illégitimes comme preuve métier du scénario pilote.  
5. Invariants : Morris L0 ; Git vérité ; AF-Option C ; Option B ; no remote auto ; ≠ MVP.

---

## 3. Hypothèses

| ID | Hypothèse |
|----|-----------|
| H1 | Contenu libre + plafonds FinOps = gouvernable sans script |
| H2 | Séparation visuelle/contrat action empêche le GO implicite |
| H3 | I1 (persistance) avant I2 (live chat) réduit la dette de reprise |
| H4 | Regrouper I1+I2 accélère la valeur mais augmente risque FinOps/refonte |
| H5 | Markdown borne l’action sans borner le dialogue |

---

## 4. Options

### 4.1 Nature de la conversation

| Option | Description | Verdict cadrage |
|--------|-------------|-----------------|
| A | Multi-tours de qualification structurée | **Insuffisant** (cadrage initial) |
| **B** | Conversation **réelle, libre, contextuelle** + bornes budget/outils/effets | **Recommandée** |
| C | Chat illimité sans plafonds | **Rejetée** (FinOps) |
| D | Chat simulé / scripté pour la démo | **Rejetée** (non-conforme amendement) |

### 4.2 Séquencement I1 / I2

| Option | Description | Valeur rapide | Complexité | Dette | Testabilité | Risque FinOps | Risque refonte persistance |
|--------|-------------|---------------|------------|-------|-------------|---------------|----------------------------|
| **S1 (recommandée)** | I1 session/journal **puis** I2 live conversation | Moyenne | Maîtrisée | Faible | Forte (fixture puis live) | Différé à I2 | Faible |
| S2 | I1+I2 fusionnés (session+live d’emblée) | Plus rapide | Élevée | Moyenne | Plus dure | Immédiat | Plus élevé |
| S3 | Live conversation avant persistance | Rapide démo | Faible court terme | **Élevée** (reprise) | Faible | Immédiat | Élevé |

**Recommandation :** S1 — établir le journal et la reprise avant le live conversationnel.

### 4.3 Scénario d’action

Markdown local (recommandé) vs code `app/**` (écarté) vs multi-cycles (hors slice) — inchangé.

---

## 5. Recommandation

1. Valider le cadrage **amendé** `41`–`44`.  
2. Retenir conversation **réelle libre** + action Markdown étroite.  
3. Trajectoire **conversation-first** S1 (I1 puis I2…).  
4. Fixtures = tests seulement.  
5. Action structurée séparée ; chat ≠ GO.  
6. Anti-claims MVP / production.  
7. GO live conversation distinct (`G-OPS1-LIVE-CONVERSATION`).

---

## 6. Décisions candidates `OPS1-CAND-*` (renumérotées après amendement)

| ID | Décision candidate | Impact | Risque si non tranché | Dette |
|----|-------------------|--------|----------------------|-------|
| **OPS1-CAND-01** | Scénario d’**action** = Markdown non protégé, branche locale, sans push auto | Borne l’exécution | Scope action flou | Faible |
| **OPS1-CAND-02** | Périmètre obligatoire = matrice doc `43` (conversation + action séparées) | Contrat BeB | Scope creep | Discipline |
| **OPS1-CAND-03** | Conversation GPT **réelle, libre, contextuelle et multi-tours** obligatoire pour la preuve OPS1. Les bornes portent sur budget, outils, données et effets — **jamais** sur un dialogue pré-écrit ou une qualification single-shot | Socle produit | Retour au formulaire | FinOps |
| **OPS1-CAND-04** | Fixtures autorisées **uniquement** pour tests automatisés / intégration contrôlée ; preuve opératoire = GPT **live** (et Cursor live sous GO) | Intégrité de preuve | « Vert = prouvé » faux | Discipline QA |
| **OPS1-CAND-05** | Action candidate **structurée et séparée** du dialogue ; aucune intention chat ≠ GO | Autorité | GO implicite | Faible |
| **OPS1-CAND-06** | La conversation peut conclure **sans action** ; la conversation **post-exécution** est obligatoire dans le BeB | Opérabilité | Chat = pipeline forcé | Faible |
| **OPS1-CAND-07** | Modèle `CycleSession` avec journal conversationnel (`conversationMessages`, phases, `originKind`, actions proposées) | Reprise | États dispersés | Renommage OK |
| **OPS1-CAND-08** | Persistance minimale + reprise obligatoire ; stack non figée | Continuité | Perte de fil | Choix tech ultérieur |
| **OPS1-CAND-09** | Aucune action Git distante automatique | Sécurité | Contournement | Volontaire |
| **OPS1-CAND-10** | Trajectoire **conversat

… [extrait — fichier local complet] …

e + Cursor borné | Branche locale ; template ; allowlist ; Cursor réel ; rapport ; no remote auto | Diff Markdown autorisé | `G-OPS1-LIVE-CURSOR` | Remote write |
| **I5** | Rapport + conversation post-exécution | Diff, preuves, chat réel sur résultat, analyse candidate, éventuel nouveau gate | Reprise dialogue post-rapport | (lié I5) | Clôture auto |
| **I6** | Clôture + historique + reprise complète | Décision finale Morris ; consultation bout en bout | Pack session complet | `G-OPS1-CLOSURE` | — |
| **I7** | Démonstration opératoire OPS1 | GPT réel + Cursor réel + chat non scénarisé + Markdown + gates + reprise | Critères `43` satisfaits | `G-OPS1-PILOT-DEMO` | MVP claim |

---

## 8. Réserves

CI distante ; sandbox OS ; plafonds numériques ; store session ; règles exactes « nouvelle session vs nouveau cycle » ; fichier Markdown exact du pilote.

---

## 9. Questions ouvertes

1. Fichier Markdown cible du pilote ?  
2. Nom de la branche locale dédiée ?  
3. Seuil de confirmation « appel coûteux » ?  
4. Condensation de contexte : manuelle, semi-auto, ou les deux ?  
5. Faut-il un écran chat plein page ou un panneau dans `/cycle-actif` ?

---

## 10. Impacts / dette

| Thème | Impact | Dette |
|-------|--------|-------|
| Chat libre | UX + FinOps centraux | Plafonds |
| Séparation action | Complexité UI | Faible |
| I1 avant I2 | Preuve reprise solide | Time-to-live légèrement différé |
| Pas de remote | Sécurité | Démo moins « merge » |

---

## 11. Gates futurs (tous **fermés**)

| Gate | Objet |
|------|-------|
| `G-OPS1-FRAMING-VAL` | Validation cadrage amendé `41`–`44` |
| `G-OPS1-SCENARIO-VAL` | Scénario pilote |
| `G-OPS1-SESSION-VAL` | Modèle session / journal |
| `G-OPS1-FUNC-DESIGN` | Conception fonctionnelle |
| `G-OPS1-FUNC-ARCH` | Architecture fonctionnelle |
| `G-OPS1-UX` | UX/UI |
| `G-OPS1-BACKLOG` | Backlog |
| `G-OPS1-DEL-SESSION` | Delivery I1 |
| `G-OPS1-LIVE-CONVERSATION` | GPT live conversationnel (I2) |
| `G-OPS1-ACTION-GATE` | Delivery I3 |
| `G-OPS1-LIVE-CURSOR` | Cursor réel (I4) |
| `G-OPS1-PILOT-DEMO` | Démo I7 |
| `G-OPS1-MVP-TRAJECTORY` | Trajectoire MVP |
| `G-MVP-CLAIM` / `G-PRODUCTION-CLAIM` | **Fermés** |

Aucun ouvert par l’amendement courant.

---

## 12. Décisions non prises

Stack, protocole, Figma, backlog, code, plafonds numériques, ouverture MVP, modification méthode/prompts, commit/PR des docs cadrage.

---

## 13. Prochaine étape

Après `G-OPS1-FRAMING-VAL` : éventuellement scénario/session ; puis conception sous GO distinct — **pas** de delivery automatique.

---

## 14. Proposition de validation Morris

Valider, amender ou refuser `OPS1-CAND-01`…`14` **sans** ouvrir conception, live, delivery, MVP.

---

## 15. Verdict

`SFIA STUDIO OPS1 FRAMING AMENDED — REAL FREE-FORM GPT CONVERSATION READY FOR MORRIS REVIEW`

### Interdits (sans nouveau GO)

CONCEPTION OPENED · BACKLOG OPENED · READY FOR DELIVERY · SIMULATED CONVERSATION ACCEPTED AS PROOF · MVP DEFINED · PRODUCTION READY · GPT LIVE · CURSOR LIVE

```

## 14. Contrôles

| Contrôle | Résultat |
|----------|----------|
| git diff --check | OK |
| Liens relatifs | OK |
| OPS1-CAND 01–14 cohérents | OK |
| Trajectoire I1–I7 conversation-first | OK |
| TODO/TBD/placeholder | aucun |
| Mock/fixture = tests ou historique seulement | OK |
| Claims MVP/production positifs | absents |
| Secrets | aucun |
| Code / live / commit main / PR | absents |

## 15. Réserves

CI ; sandbox OS ; plafonds À définir ; fichier Markdown exact ; règle nouvelle session vs cycle.

## 16. Gates futurs (fermés)

G-OPS1-FRAMING-VAL, LIVE-CONVERSATION, ACTION-GATE, LIVE-CURSOR, PILOT-DEMO, MVP-TRAJECTORY ; G-MVP-CLAIM fermé.

## 17. Verdict

**SFIA STUDIO OPS1 FRAMING AMENDED — REAL FREE-FORM GPT CONVERSATION READY FOR MORRIS REVIEW**
