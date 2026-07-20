# SFIA Studio — Review Pack — OPS1 Framing Validation

- **Date/heure/fuseau :** 2026-07-20 12:23:04 CEST
- **Repo :** mcleland147/sfia-workspace
- **Branche :** `main`
- **HEAD :** `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25`
- **origin/main :** `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25`
- **Cycle :** 1 — Cadrage, validation
- **Profil :** Standard
- **Gate consommé :** G-OPS1-FRAMING-VAL
- **Gates antérieurs :** G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING · G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT

## 1. Truth Check

- main = origin/main = `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` ; 0/0
- staged vide
- Modifié : `projects/sfia-studio/README.md`
- Non trackés : docs `41`–`44`, `.tmp-sfia-review/`, `projects/.tmp-sfia-review/`
- Aucun `app/**` / `harness/**` / `method/**` / `prompts/**`

## 2. Décision Morris

Cadrage amendé OPS1 **validé avec réserves**.

SFIA Studio reste en phase POC.

OPS1 doit permettre une conversation ChatGPT réelle, libre, contextuelle, multi-tours, non scénarisée, persistée et reprenable, pouvant aboutir ou non à une action, pouvant reprendre après rapport Cursor.

Limites d’action : un scénario documentaire ; un Markdown non protégé ; branche locale dédiée ; Cursor borné sous GO ; aucune action Git distante automatique.

Conversation ≠ GO implicite.

Formulation structurante validée :

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

## 3. Fichiers lus

- template SFIA v2.6 / routing guide (contexte méthode)
- README + docs 41–44 locaux
- handoff amendé précédent (contexte)

## 4. Mapping OPS1-CAND avant → après

| ID | Avant | Après |
|----|-------|-------|
| 01–09, 11–12 | candidat | **VALIDÉ** |
| 10 | candidat (trajectoire) | **VALIDÉ AVEC RÉSERVE** (cadrage ≠ backlog delivery) |
| 13 | candidat (états) | **VALIDÉ AVEC RÉSERVE** (noms ajustables) |
| 14 | candidat (FinOps) | **VALIDÉ AVEC RÉSERVE** (valeurs À définir) |

## 5. Décisions VALIDÉES

OPS1-CAND-01, 02, 03, 04, 05, 06, 07, 08, 09, 11, 12.

## 6. Décisions VALIDÉES AVEC RÉSERVE

- **10** — trajectoire I1–I7 conversation-first = trajectoire de cadrage, non backlog définitif  
- **13** — machine d’états = base conception ; noms ajustables  
- **14** — principes FinOps ; valeurs numériques À définir  

## 7. Réserves maintenues

Fichier Markdown exact ; convention branche ; plafonds FinOps ; stack/BDD ; protocole/API ; archi technique ; UX/Figma ; CI ; isolation OS ; aucun backlog/delivery ; aucun claim MVP/production.

## 8. Statut avant / après

| Doc | Avant | Après |
|-----|-------|-------|
| 41–44 | `framing-candidate-amended` | `framing-validated-with-reservations` |
| README | OPS1 amendé ouvert | OPS1 **VALIDATED WITH RESERVATIONS** ; prochaine = éventuelle conception |

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

## 10. Contenu substantiel — 41

```markdown
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
> Documents locaux **non versionnés / non mergés** tant qu’un GO documentaire distinct n’est pas émis.

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

Morris échange avec ChatGPT de manière **libre et multi-tours** sur besoin, contexte, options, 

… [extrait — fichier local complet] …

ycle | Changement mineur = même session ; rupture de projet/cycle/repo = nouvelle session (candidat). |
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

```

## 11. Contenu substantiel — 42

```markdown
# SFIA Studio — Flux, états et modèle de session du Vertical Slice Opérationnel 1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `42-operational-vertical-slice-1-flow-and-session-model.md` |
| **Cycle** | 1 — Cadrage, validation |
| **Profil** | Standard |
| **Statut** | `framing-validated-with-reservations` — modèle et états **validés au niveau cadrage** (2026-07-20) ; noms / schémas techniques **non définitifs** |
| **Gates** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` · `G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT` · `G-OPS1-FRAMING-VAL` |
| **Companions** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Base Git** | `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |

> Parcours, couches d’état, `CycleSession`, contrats conversation / action / analyse, persistance et reprise.  
> **Validé au niveau cadrage** (`G-OPS1-FRAMING-VAL`) : séparation conversation / action ; `CycleSession` conceptuel ; couches d’états ; contrats comme **base de conception** ; persistance et reprise **obligatoires**.  
> Les noms de champs, statuts et contrats **ne sont pas** des schémas techniques définitifs.  
> Aucune stack / BDD / protocole figé. Conception / delivery / live **non ouverts**.

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

#

… [extrait — fichier local complet] …

Contrat d’analyse / conversation post-exécution

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

## 10. Éléments validés au niveau cadrage (G-OPS1-FRAMING-VAL)

| Élément | Statut cadrage | Réserve |
|---------|----------------|---------|
| Séparation conversation / action | **Validé** | — |
| Modèle conceptuel `CycleSession` | **Validé** | Noms de champs ajustables en conception |
| Couches d’états (conversation / action / exécution) | **Validé** | Libellés d’états ajustables |
| Contrats fonctionnels (conversation / action / analyse) | **Validé** comme base de conception | Protocole / API non décidés |
| Persistance + reprise obligatoires | **Validé** | Stack / BDD non décidées |
| Chat ≠ GO ; GPT seul ≠ AUTHORIZED | **Validé** | — |

## 11. Verdict documentaire

`framing-validated-with-reservations`

`OPS1 FLOW AND SESSION MODEL VALIDATED AT FRAMING LEVEL — READY FOR DISTINCT FUNCTIONAL DESIGN GO`

```

## 12. Contenu substantiel — 43

```markdown
# SFIA Studio — Périmètre, NFR et critères de succès du Vertical Slice Opérationnel 1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `43-operational-vertical-slice-1-scope-and-success-criteria.md` |
| **Cycle** | 1 — Cadrage, validation |
| **Profil** | Standard |
| **Statut** | `framing-validated-with-reservations` — critères de succès = **contrat validé** du slice (2026-07-20) |
| **Gates** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` · `G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT` · `G-OPS1-FRAMING-VAL` |
| **Companions** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Base Git** | `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |

> Contrat de périmètre, NFR et critères de réussite — **validé avec réserves** (`G-OPS1-FRAMING-VAL`).  
> Les critères §6 constituent le **contrat de succès validé** du Vertical Slice Opérationnel 1.  
> Succès OPS1 ≠ MVP ≠ production-ready ≠ industrialisation.  
> Limitation Markdown = limite d’**action**, pas de **conversation**.  
> Conception / backlog / delivery / live **non ouverts** par cette validation.

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

## 6. Critères de réussite — contrat de succès validé (`G-OPS1-FRAMING-VAL`)

Les critères ci-dessous constituent le **co

… [extrait — fichier local complet] …

ile.  
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

Verdict de succès OPS1 (après preuve opératoire) : `OPERATIONAL VERTICAL SLICE 1 PROVEN WITH RESERVES` — **≠ MVP**.

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

`framing-validated-with-reservations`

`OPS1 SCOPE AND SUCCESS CRITERIA VALIDATED — SUCCESS CONTRACT SET — NOT MVP`

```

## 13. Contenu substantiel — 44

```markdown
# SFIA Studio — Decision pack Vertical Slice Opérationnel 1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `44-operational-vertical-slice-1-decision-pack.md` |
| **Cycle** | 1 — Cadrage, validation |
| **Profil** | Standard |
| **Statut** | `framing-validated-with-reservations` — `OPS1-CAND-01`…`14` **validées** (2026-07-20) ; conception / backlog / delivery / live / MVP **fermés** |
| **Gates consommés** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` · `G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT` · `G-OPS1-FRAMING-VAL` |
| **Companions** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) |
| **Base Git** | `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |
| **Autorité** | Morris (L0) |

> Pack de décisions du cadrage OPS1.  
> **Validé avec réserves** sous `G-OPS1-FRAMING-VAL` (2026-07-20).  
> Aucune ouverture automatique de conception, architecture, UX, backlog, delivery, GPT live, Cursor réel, MVP ou production.

---

## 1. Synthèse

Après A–E (`CLOSED_WITH_RESERVATIONS`), le cadrage OPS1 amendé est **validé** : conversation ChatGPT **réelle, libre, multi-tours** comme socle ; action **étroite** (Markdown) gouvernée ; chat ≠ GO.

Livrables :

| Doc | Rôle | Statut cadrage |
|-----|------|----------------|
| `41` | Intention, scénario, trajectoire | Validé avec réserves |
| `42` | Flux, états, CycleSession, contrats | Validé au niveau cadrage |
| `43` | Périmètre, NFR, critères de succès | Contrat de succès validé |
| `44` | Ce pack — `OPS1-CAND-*` | Décisions validées |

---

## 2. Décision Morris — 2026-07-20

| Champ | Valeur |
|-------|--------|
| Autorité | Morris (L0) |
| Gate | `G-OPS1-FRAMING-VAL` **consommé** |
| Date/heure/fuseau | 2026-07-20 12:21 CEST |
| Décision | Cadrage amendé OPS1 **validé avec réserves** |
| POC | **Reste en phase POC** |
| Trajectoire | Conversation-first I1–I7 **validée au niveau produit/cadrage** — **pas** backlog ni découpage delivery définitif |
| Gates suivants | **Aucun ouvert automatiquement** |
| Prochain cycle | Soumis à un **nouveau GO Morris** (typiquement conception fonctionnelle OPS1) |

### Formulation structurante validée

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

### Invariants validés

- Conversation réelle, libre dans son contenu, contextuelle, multi-tours, non scénarisée, persistée et reprenable.  
- Peut aboutir **ou non** à une action ; peut reprendre après rapport Cursor.  
- Action limitée : un scénario documentaire, un Markdown non protégé, branche locale dédiée, Cursor borné sous GO, **aucune** action Git distante automatique.  
- La conversation **ne constitue jamais** un GO implicite.

---

## 3. Observations (pré-validation — conservées)

1. A–E a prouvé des briques, pas un chat Studio libre.  
2. Le risque du cadrage initial (formulaires) a été corrigé par l’amendement conversation réelle.  
3. Fixtures légitimes pour tests ; illégitimes comme preuve métier du scénario pilote.  
4. Invariants : Morris L0 ; Git vérité ; AF-Option C ; Option B ; no remote auto ; ≠ MVP.

---

## 4. Options retenues (statut post-validation)

| Sujet | Option retenue | Statut |
|-------|----------------|--------|
| Conversation | Réelle, libre, contextuelle + bornes budget/outils/effets | **Validée** |
| Chat simulé / scripté comme preuve | Rejetée | Confirmé |
| Chat illimité | Rejetée | Confirmé |
| Action pilote | Markdown local réversible | **Validée** |
| Séquencement | S1 — I1 puis I2 | **Validée** (cadrage) |
| Fusion I1+I2 | Non retenue pour le cadrage | Confirmé |

---

## 5. Décisions `OPS1-CAND-*` — statut après `G-OPS1-FRAMING-VAL`

| ID | Décision (version amendée) | Statut | Réserve |
|----|----------------------------|--------|---------|
| **OPS1-CAND-01** | Scénario d’**action** = Markdown non protégé, branche locale, sans push auto | **VALIDÉ** | Fichier Markdown exact et convention de branche **non choisis** |
| **OPS1-CAND-02** | Périmètre obligatoire = matrice doc `43` (conversation + action séparées) | **VALIDÉ** | — |
| **OPS1-CAND-03** | Conversation GPT **réelle, libre, contextuelle et multi-tours** obligatoire pour la preuve OPS1 ; bornes = budget, outils, données, effets — jamais dialogue pré-écrit ni single-shot | **VALIDÉ** | — |
| **OPS1-CAND-04** | Fixtures **uniquement** pour tests / intégration contrôlée ; preuve opératoire = GPT live (+ Cursor live sous GO) | **VALIDÉ** | — |
| **OPS1-CAND-05** | Action candidate **structurée et séparée** du dialogue ; intention chat ≠ GO | **VALIDÉ** | — |
| **OPS1-CAND-06** | Conversation peut conclure **sans action** ; conversation **post-exécution** obligatoire dans le BeB | **VALIDÉ** | — |
| **OPS1-CAND-07** | Modèle conceptuel `CycleSession` avec journal conversationnel | **VALIDÉ** | Noms de champs ajustables en conception |
| **OPS1-CAND-08** | Persistance minimale + reprise obligatoire ; stack non figée | **VALIDÉ** | Stack / BDD **non décidées** |
| **OPS1-CAND-09** | Aucune action Git distante automatique | **VALIDÉ** | — |
| **OPS1-CAND-10** | Trajectoire **conversation-first** I1→I7 ; option S1 (I1 avant I2) | **VALIDÉ AVEC RÉSERVE** | Trajectoire de **cadrage** validée — **non** backlog ni déc

… [extrait — fichier local complet] …

ation GPT réelle et libre | Trajectoire validée |
| **I3** | Proposition d’action structurée et gates | Trajectoire validée |
| **I4** | Contrat documentaire et Cursor borné | Trajectoire validée |
| **I5** | Rapport, preuves et conversation post-exécution | Trajectoire validée |
| **I6** | Clôture, historique et reprise complète | Trajectoire validée |
| **I7** | Démonstration opératoire OPS1 | Trajectoire validée |

**Statut global :** trajectoire produit **validée pour préparer la conception** ; noms et découpage delivery **non définitifs** ; chaque incrément futur soumis à qualification et GO Morris ; **aucun** gate live ou delivery ouvert par `G-OPS1-FRAMING-VAL`.

---

## 7. Réserves maintenues

- Fichier Markdown exact du scénario pilote **non choisi**  
- Branche locale et convention de nommage **non figées**  
- Plafonds FinOps numériques **À définir**  
- Stack de persistance / BDD **non décidées**  
- Protocole et API **non décidés**  
- Architecture technique **non validée**  
- UX/UI finale et Figma **non validés**  
- CI distante SFIA Studio **non prouvée**  
- Isolation OS/réseau **non industrialisée**  
- Aucun backlog ou delivery **ouvert**  
- Aucun claim MVP, production-ready ou industrialisation  

---

## 8. Décisions explicitement non prises / non ouvertes

- Stack / BDD / protocole / API  
- Maquettes Figma / UX finale  
- Backlog stories / delivery  
- Code `app/**` / `harness/**`  
- Valeurs numériques FinOps  
- Ouverture MVP  
- Modification méthode ou prompts  
- Commit / push / PR des documents de cadrage (hors handoff review)  
- GPT live / Cursor réel  

---

## 9. Gates Morris futurs (tous **fermés**)

| Gate | Objet | Statut |
|------|-------|--------|
| `G-OPS1-FRAMING-VAL` | Validation cadrage | **Consommé** |
| `G-OPS1-SCENARIO-VAL` | Scénario pilote (fichier/branche) | Fermé |
| `G-OPS1-SESSION-VAL` | Précisions session (si besoin) | Fermé |
| `G-OPS1-FUNC-DESIGN` | Conception fonctionnelle OPS1 | Fermé |
| `G-OPS1-FUNC-ARCH` | Architecture fonctionnelle | Fermé |
| `G-OPS1-UX` | UX/UI | Fermé |
| `G-OPS1-BACKLOG` | Backlog | Fermé |
| `G-OPS1-DEL-SESSION` | Delivery I1 | Fermé |
| `G-OPS1-LIVE-CONVERSATION` | GPT live conversationnel | Fermé |
| `G-OPS1-ACTION-GATE` | Delivery I3 | Fermé |
| `G-OPS1-LIVE-CURSOR` | Cursor réel | Fermé |
| `G-OPS1-PILOT-DEMO` | Démo I7 | Fermé |
| `G-OPS1-MVP-TRAJECTORY` | Trajectoire MVP | Fermé |
| `G-MVP-CLAIM` / `G-PRODUCTION-CLAIM` | Claims | Fermés |

---

## 10. Prochaine étape

La prochaine étape reste une **décision Morris distincte** sur l’ouverture éventuelle de la **conception fonctionnelle OPS1** (`G-OPS1-FUNC-DESIGN`).

Aucun cycle suivant n’est ouvert automatiquement par `G-OPS1-FRAMING-VAL`.

---

## 11. Verdict

`SFIA STUDIO OPS1 FRAMING VALIDATED WITH RESERVATIONS`

### Interdits (sans nouveau GO)

CONCEPTION OPENED · BACKLOG OPENED · READY FOR DELIVERY · GPT LIVE · CURSOR LIVE · MVP DEFINED · PRODUCTION READY · INDUSTRIALIZATION STARTED · FRAMING DOCS MERGED

```

## 14. Diff README (extrait)

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index d5b722c..4100594 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,7 +4,7 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-s1-harness-delivery-local` — POC-G9 **CONSOMMÉ** (harness-only) ; POC-G8 **CONSOMMÉ** ; Option B **INTÉGRÉE** ; POC **non lancé** ; `app/**` **intact** |
+| **Statut** | `poc-ops1-framing-validated-with-reservations` — A–E **CLOSED_WITH_RESERVATIONS** ; cadrage OPS1 **VALIDATED WITH RESERVATIONS** (`41`–`44` locaux) : conversation GPT réelle et libre + action Markdown gouvernée ; **POC maintenu** ; MVP / production / delivery **fermés** ; docs cadrage **non versionnés / non mergés** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
 | **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
@@ -21,7 +21,7 @@
 | **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
 | **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
 | **POC** | **Non lancé** (pas d’industrialisation / daemon) |
-| **Prochaine décision** | Sync doc post-merge #226 / CI SFIA Studio / traitement réserves — **Morris** ; UI Studio / Docker — **FERMÉS** |
+| **Prochaine décision** | Ouverture **éventuelle** de la conception fonctionnelle OPS1 — **G-OPS1-FUNC-DESIGN** (GO distinct) ; backlog / delivery / live / MVP — **FERMÉS** |
 
 ---
 
@@ -142,10 +142,12 @@ Pré-cadrage
   → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
   → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`) — allowlist initiale **validée** harness-only
   → delivery harness-only                ← POC-G9 **CONSOMMÉ** ; draft PR Cycle 13 ; merge **fermé**
-  → décision Morris : abandon / itération / préparation MVP
+  → vertical slice POC A–E               ← **CLOSED_WITH_RESERVATIONS** (docs `32`–`40` ; delivery #229–#234 ; main @ `6a4c4a7`)
+  → cadrage Vertical Slice Opérationnel 1 ← **VALIDATED WITH RESERVATIONS** (docs `41`–`44` locaux ; `G-OPS1-FRAMING-VAL`) — conversation réelle libre + action Markdown gouvernée
+  → décision Morris : ouverture éventuelle conception fonctionnelle OPS1 (`G-OPS1-FUNC-DESIGN`) — **non ouverte**
 ```
 
-Architecture Option B **intégrée**. Backlog S1 **intégré**. Harness-only local (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**.
+Architecture Option B **intégrée**. A–E **CLOSED_WITH_RESERVATIONS**. Cadrage OPS1 **validé avec réserves**. **POC maintenu**. MVP / production / industrialisation / delivery OPS1 **non ouverts**. Docs `41`–`44` **locaux non mergés**.
 
 ---
 
@@ -366,11 +368,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 ## 8. Prochaine décision
 
-1. Review ChatGPT de la draft PR harness-only.
-2. Merge delivery — **FERMÉ**. Cursor réel / UI Studio / Docker / élargissement allowlist — **FERMÉS**.
-3. Clôture formelle AF (séparée).
+1. Ouverture **éventuelle** de la conception fonctionnelle OPS1 — gate **`G-OPS1-FUNC-DESIGN`** (décision Morris distincte).
+2. Backlog / delivery / live GPT-Cursor / MVP — **FERMÉS**.
+3. Réserves cadrage OPS1 maintenues (fichier Markdown exact, branche, plafonds FinOps, stack, CI, sandbox OS).
+
+**Verdict documentaire courant :** `SFIA STUDIO OPS1 FRAMING VALIDATED WITH RESERVATIONS`
 
-**Verdict documentaire :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`
 
 ---
 
@@ -379,9 +382,9 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Élément | Source |
 |---------|--------|
 | Méthode | SFIA v2.6 — Option C méthode |
-| Socle | `main` @ `60e6880…` (PR #222 MERGED) |
-| Architecture POC | `23`–`25` **intégrés** |
-| Backlog POC | `26`–`28` **intégrés** (#223) ; harness versionné via draft PR |
+| Socle applicatif / harness A–E | `main` @ `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` (PR #234 MERGED) |
+| Vertical slice A–E | Docs `32`–`40` ; clôture `CLOSED_WITH_RESERVATIONS` |
+| Cadrage OPS1 | Docs `41`–`44` — **VALIDATED WITH RESERVATIONS** (locaux, non versionnés / non mergés) |
 | Handoff | `sfia/review-handoff` |
 
 ---
@@ -403,4 +406,19 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [27-poc-orchestration-allowlist-and-acceptance.md](./27-poc-orchestration-allowlist-and-acceptance.md) | Allowlist / denylist / critères |
 | [28-poc-orchestration-delivery-gate-pack.md](./28-poc-orchestration-delivery-gate-pack.md) | Prérequis POC-G9 |
 
-*SFIA Studio — Option B — POC-G9 harness-only local — app/** intact — POC NON LANCÉ.*
+### Vertical slice POC A–E (clôturé avec réserves)
+
+| Document | Rôle |
+|----------|------|
+| [32](./32-poc-vertical-slice-functional-design.md)–[40](./40-poc-vertical-slice-backlog-decision-pack.md) | Conception, UX, backlog A–E |
+
+### Vertical Slice Opérationnel 1 (cadrage candidat)
+
+| Document | Rôle |
+|----------|------|
+| [41-operational-vertical-slice-1-framing.md](./41-operational-vertical-slice-1-framing.md) | Cadrage validé avec réserves — conversation réelle / scénario |
+| [42-operational-vertical-slice-1-flow-and-session-model.md](./42-operational-vertical-slice-1-flow-and-session-model.md) | Flux / CycleSession / contrats — validés au niveau cadrage |
+| [43-operational-vertical-slice-1-scope-and-success-criteria.md](./43-operational-vertical-slice-1-scope-and-success-criteria.md) | Contrat de succès validé (live vs fixtures) |
+| [44-operational-vertical-slice-1-decision-pack.md](./44-operational-vertical-slice-1-decision-pack.md) | `OPS1-CAND-01`…`14` **VALIDÉ(E)S** / avec réserves |
+
+*SFIA Studio — POC maintenu — A–E CLOSED_WITH_RESERVATIONS — OPS1 framing VALIDATED WITH RESERVATIONS — MVP / delivery non ouverts.*

```

## 15. Contrôles

| Contrôle | Résultat |
|----------|----------|
| git diff --check | OK |
| Statuts README + 41–44 cohérents | OK (`framing-validated-with-reservations`) |
| OPS1-CAND-01…14 | OK (11 VALIDÉ + 3 AVEC RÉSERVE) |
| TODO/TBD/placeholder | aucun |
| Liens relatifs | OK |
| Secrets | aucun |
| Claims MVP/production positifs | absents |
| Code / live / commit main / PR | absents |

## 16. Décisions non prises / gates fermés

Conception, archi, UX, backlog, delivery, live GPT/Cursor, MVP, stack, plafonds numériques, commit docs.

Gates fermés : G-OPS1-FUNC-DESIGN, LIVE-CONVERSATION, LIVE-CURSOR, BACKLOG, DEL-*, PILOT-DEMO, MVP-TRAJECTORY, G-MVP-CLAIM.

## 17. Verdict

**SFIA STUDIO OPS1 FRAMING VALIDATED WITH RESERVATIONS**
