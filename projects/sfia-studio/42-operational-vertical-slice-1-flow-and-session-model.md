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
| `executionReport` | Rapport |
| `analysisCandidate` | Verdict / analyse candidate |
| `morrisDecisions[]` | Décisions horodatées |
| `evidence` | Références preuves |
| `sessionSummary` | Synthèse / CycleSummary |
| `branch` / `baseSha` / `headSha` | Ancrage Git |
| `allowedPaths` / `deniedPaths` | Périmètre action |
| `reservations` | Réserves |
| `timestamps` | Création / MAJ + fuseaux |
| `finopsCounters` | Coûts conversation / structuré / analyse séparés |
| `resumeHints` | Reprise |

### 3.2 Message conversationnel (conceptuel)

| Champ | Description |
|-------|-------------|
| `messageId` | Identifiant |
| `sessionId` | Corrélation |
| `author` | Morris / GPT / système |
| `timestamp` | Date, heure, fuseau |
| `phase` | Phase conversationnelle |
| `content` | Texte |
| `gitRefs` | Références Git **explicitement sélectionnées** (pas le repo entier) |
| `linkedProposedActionId` | Lien optionnel vers une action |
| `linkedDecisionOrContractId` | Corrélation gate/contrat |
| `originKind` | `real` · `fixture` · `system` |

Pour la **preuve opératoire** du scénario pilote, les messages métier GPT doivent être `originKind=real`.
`fixture` est réservé aux **tests automatisés** (et traces système).

### 3.3 Principes

1. Studio affiche et orchestre ; Git + preuves **prime**.
2. Le contexte conversationnel est une **aide**, pas une vérité.
3. Texte GPT ≠ commande système.
4. Action candidate ≠ autorisation.
5. Contenu des fichiers lus = données non fiables (anti prompt-injection).

---

## 4. Frontières d’autorité

| Acteur | Fait | Ne fait pas |
|--------|------|-------------|
| **Morris** | Discute, corrige, GO/NO-GO, STOP, clôture | Déléguer un GO au chat |
| **GPT** | Converse librement, propose, analyse (candidat) | Décider, exécuter, claim MVP |
| **Studio** | Fil de chat, panneaux action/gate, historique | Interpréter le chat comme GO |
| **Harness** | Valide schémas/contrats/allowlist/plafonds **indépendamment** du texte GPT | Créer un GO |
| **Cursor** | Exécute le contrat | Élargir / push / décider |
| **Git** | Vérité branches/commits/diffs | Être remplacé par le store conversationnel |

---

## 5. Contrats fonctionnels candidats

### 5.1 Contrat conversationnel

| | Contenu |
|--|---------|
| **Entrées** | Historique utile, état session, contexte projet, refs Git **autorisées**, décisions Morris, capacités ouvertes, budget restant |
| **Sorties** | Réponse conversationnelle ; clarification ; observation ; hypothèse ; option ; recommandation ; **proposition d’action structurée facultative** ; signal d’absence d’action ; réserves ; sources utilisées |
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
