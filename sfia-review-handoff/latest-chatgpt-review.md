# SFIA Studio — Review Pack — OPS1 Framing Versioning

- **Date/heure/fuseau :** 2026-07-20 12:31:23 CEST
- **Repo :** mcleland147/sfia-workspace
- **Branche :** `docs/sfia-studio-ops1-framing`
- **HEAD initiale / base :** `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25`
- **Commit :** `c95010dce848ae5c6290044d65ac1dfb95cc2954`
- **Parent :** `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25`
- **origin/main :** `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` (inchangé)
- **Cycle :** 8 — Delivery / implémentation documentaire
- **Profil :** Standard
- **Gate :** G-OPS1-FRAMING-VERSIONING

## 1. Truth Check initial

- main = origin/main = `6a4c4a7` ; 0/0
- staged vide ; README modifié + 41–44 untracked ; `.tmp-sfia-review` untracked
- branche distante `docs/sfia-studio-ops1-framing` absente avant création

## 2. Sources consultées

- template SFIA v2.6 / routing guide
- README + docs 41–44
- handoff validation précédent

## 3. Contrôles documentaires

- Statuts `framing-validated-with-reservations` / VALIDATED WITH RESERVATIONS : OK
- Formulation conversation → gate → exécution : OK
- OPS1-CAND 01–09,11,12 VALIDÉ ; 10/13/14 VALIDÉ AVEC RÉSERVE : OK
- Trajectoire I1–I7 : OK
- Réserves maintenues : OK
- Correction mineure : trailing whitespace retiré pour `git diff --check` ; README « draft PR / non mergés »

## 4. Branche / commit / push

- Branche créée : `docs/sfia-studio-ops1-framing` depuis `6a4c4a7`
- Fichiers staged (5 uniquement) :
  - README.md (M)
  - 41, 42, 43, 44 (A)
- Message : `docs(sfia-studio): validate OPS1 operational slice framing`
- Commit : `c95010dce848ae5c6290044d65ac1dfb95cc2954`
- Parent : `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25`
- Push : origin/docs/sfia-studio-ops1-framing = `c95010dce848ae5c6290044d65ac1dfb95cc2954`

## 5. Draft PR

- **#235** — https://github.com/mcleland147/sfia-workspace/pull/235
- Titre : docs(sfia-studio): validate OPS1 operational slice framing
- Base : main · Head : docs/sfia-studio-ops1-framing
- **isDraft = true** · state OPEN
- **Merge non effectué**

## 6. Diff commit

```
c95010d docs(sfia-studio): validate OPS1 operational slice framing
A	projects/sfia-studio/41-operational-vertical-slice-1-framing.md
A	projects/sfia-studio/42-operational-vertical-slice-1-flow-and-session-model.md
A	projects/sfia-studio/43-operational-vertical-slice-1-scope-and-success-criteria.md
A	projects/sfia-studio/44-operational-vertical-slice-1-decision-pack.md
M	projects/sfia-studio/README.md

```

## 7. Contenu substantiel — 41

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
| **OPS1** |

… [extrait — fichier complet dans le commit] …

mme succès | Critères `43` + OPS1-CAND-03/04 |
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

## 8. Contenu substantiel — 42

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
| `CONVERSATION_ACTIVE` | Proposi

… [extrait — fichier complet dans le commit] …

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

## 9. Contenu substantiel — 43

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

… [extrait — fichier complet dans le commit] …

 une limitation de la conversation.
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

## 10. Contenu substantiel — 44

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
| **OPS1-CAND-03** | Conversation GPT **réelle, libre, contextuelle et multi-tours** obligatoire pour la preuve OPS1 ; bornes = budget, outils, données, effets — jamais dia

… [extrait — fichier complet dans le commit] …

t **validée pour préparer la conception** ; noms et découpage delivery **non définitifs** ; chaque incrément futur soumis à qualification et GO Morris ; **aucun** gate live ou delivery ouvert par `G-OPS1-FRAMING-VAL`.

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

## 11. Garde-fous respectés

- Pas de merge
- Pas de push main
- Pas de code / live / backlog / delivery
- Pas de force-push
- `.tmp-sfia-review` non commités
- MVP/production claims absents

## 12. git status final

```
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/

```

## 13. Gates restant fermés

G-OPS1-FRAMING-MERGE (implicite) · G-OPS1-FUNC-DESIGN · LIVE-CONVERSATION · LIVE-CURSOR · BACKLOG · DEL-* · MVP-CLAIM

## 14. Verdict

**SFIA STUDIO OPS1 FRAMING VERSIONED — DRAFT PR READY FOR MORRIS REVIEW**
