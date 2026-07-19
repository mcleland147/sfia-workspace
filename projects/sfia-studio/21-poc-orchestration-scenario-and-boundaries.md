# SFIA Studio — Scénario et frontières POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `21-poc-orchestration-scenario-and-boundaries.md` |
| **Cycle** | 1 — Cadrage POC orchestration (Option B) |
| **Profil** | Critical |
| **Statut document** | **VALIDÉ + INTÉGRÉ** (#219) ; sync #220 **MERGED** ; S1 = contrat (**non exécuté**) ; UI vs harness → voir archi candidate `23` |
| **Complète** | [20](./20-poc-orchestration-framing.md) · archi [23](./23-poc-orchestration-technical-architecture.md) |
| **POC** | **Non lancé** |

---

## 1. Scénarios étudiés (limité)

| ID | Intitulé | Couverture preuve | Risque | Retenu ? |
|----|----------|-------------------|--------|----------|
| **S1** | Cycle DOC gouverné read-only (intention → gate → exécution Cursor lecture → pack → décision) | Git + GPT + Cursor + gates + stops | Faible | **SÉLECTIONNÉ / VALIDÉ / INTÉGRÉ** |
| **S2** | Pre-check Git + détection divergence HEAD + stop + reprise lecture | Vérité Git / stops | Moyen | Non retenu |
| **S3** | Allowlist orchestrateur + rejet d’écriture simulée hors contrat | Déterminisme négatif | Moyen | **Intégré à S1** (rejet obligatoire — exigence future du POC) |
| **S4** | PR readiness locale sans push/PR/merge | Diff / review | Plus large | Reporté |

**Décision Morris (POC-CAND-02 / POC-G2) — 2026-07-19 :** scénario **S1** sélectionné, avec **rejet obligatoire** d’une action hors allowlist (élément S3) dans le flux de preuve. Intégré sur `main` via PR #219. **S1 n’est pas exécuté.**

---

## 2. Scénario S1 — « DOC read-only gouverné » (SÉLECTIONNÉ)

### 2.1 Objectif métier du scénario (preuve)

Prouver qu’une demande documentaire SFIA peut être **qualifiée**, **autorisée par Morris**, **exécutée de façon bornée** (lecture / analyse), **stoppable**, et **tracée**, via un orchestrateur déterministe séparé de Studio.

### 2.2 Acteurs

| Acteur | Rôle |
|--------|------|
| **Morris** | Décideur L0 — GO / CORRIGER / STOP |
| **ChatGPT** | Qualification, contrat candidat, verdict candidat |
| **Cursor** | Exécuteur du contrat borné (read-only) |
| **Git** | Source de vérité (lecture) |
| **SFIA Studio** | Surface de pilotage / représentation (cockpit) |
| **Orchestrateur candidat** | Applique contrats, allowlist, gates, stops — **ne décide pas** |

### 2.3 Déclencheur

Morris (ou opérateur sous son autorité) ouvre une **nouvelle demande** de type DOC dans Studio (surface P0 `/nouvelle-demande` **ou** harness équivalent — **choix ouvert** pour le cycle architecture POC ; non tranché ici).

### 2.4 Préconditions

- Workspace de preuve local disponible.
- Branche / HEAD de preuve connus (lecture Git possible).
- Aucun secret réel chargé.
- Contrat d’allowlist initial défini (lecture fichiers projet / méthode ; pas d’écriture distante).
- Orchestrateur candidat démarrable localement (techno **non choisie**).

### 2.5 Entrée

| Champ | Exemple (fixture) |
|-------|-------------------|
| Titre | « Capitaliser une règle de gate SFIA » |
| Type | DOC / CAPA légère |
| Profil proposé | Standard |
| Repo | `sfia-workspace` (preuve) |
| Branche observée | `main` (lecture) |
| Contraintes | Read-only ; pas de push |

### 2.6 Déroulement nominal

```text
1. Studio enregistre l’intention (état dérivé local / fixture)
2. GPT produit qualification + contrat Cursor candidat
3. Studio présente le dossier de gate à Morris
4. Morris décide GO (portée, durée, révocabilité explicites)
5. Orchestrateur vérifie : GO valide + allowlist + préconditions Git
6. Orchestrateur accepte l’exécution
7. Cursor exécute read-only (lecture sources, analyse, rédaction pack local)
8. Orchestrateur collecte résultat + preuves
9. GPT produit verdict candidat (faisabilité / conformité contrat)
10. Morris décide suite (CLOTURER / CORRIGER / STOP) — tracée
11. Journal corrélé finalisé
```

### 2.7 Variante obligatoire (déterminisme négatif)

Après l’étape 5, injecter une demande d’action **hors allowlist** (ex. `git push` simulé demandé par contrat altéré) :

- Orchestrateur **rejette** ;
- Aucune exécution Cursor write ;
- Événement `orchestrator.rejected` journalisé ;
- Flux peut reprendre après correction du contrat + nouveau GO si nécessaire.

### 2.8 Sortie et preuve produite

| Artefact | Description |
|----------|-------------|
| Journal d’événements | Corrélé `requestId` / `cycleId` / `gateId` / `executionId` |
| Review pack / preuve locale | Contenu produit en local (chemin de preuve à fixer en archi POC) |
| Trace de GO | Décision Morris horodatée |
| Trace de rejet | Au moins un rejet hors allowlist |
| Diff Git distant | **Aucun** (attendu vide côté remote) |

### 2.9 Postconditions

- Repo distant inchangé.
- Aucun secret dans les artefacts.
- État Studio reconstructible depuis Git + journal (pas de vérité exclusive UI).

---

## 3. Modèle d’état minimal (candidat)

| État | Signification |
|------|---------------|
| `DRAFT` | Intention saisie |
| `QUALIFIED` | Contrat candidat disponible |
| `GATE_OPEN` | Attente décision Morris |
| `AUTHORIZED` | GO reçu, non révoqué |
| `ORCHESTRATING` | Orchestrateur actif |
| `EXECUTING` | Cursor en cours |
| `PROOF_READY` | Preuves collectées |
| `STOPPED` | Stop appliqué |
| `REJECTED` | Rejet orchestrateur |
| `CLOSED` | Décision Morris de clôture |

Les états Studio/orchestrateur sont **dérivés / observationnels** — Git reste la vérité durable.

---

## 4. Contrat d’entrée / sortie (candidat — non API)

### 4.1 Entrée orchestrateur (conceptuelle)

```text
OrchestrationRequest {
  requestId, cycleId,
  gateDecision { decision, scope, expiresAt, revocable },
  allowlist { paths[], actions[] },
  denylist { actions[] },
  executionContract { tool: "cursor", mode: "read-only", ... },
  gitContext { repo, branch, headSha }  // observation
}
```

### 4.2 Sortie orchestrateur (conceptuelle)

```text
OrchestrationResult {
  requestId, executionId,
  status: accepted|rejected|stopped|completed|failed,
  events[],
  proofs[],
  gitEffect: "none-remote",
  error?
}
```

Aucun schéma JSON/OpenAPI validé ici — **contrat candidat** pour architecture POC.

---

## 5. Frontières d’autorité

| Frontière | Règle candidate |
|-----------|-----------------|
| **Studio → Orchestrateur** | Studio soumet une requête après GO ; n’exécute pas lui-même les actions outils |
| **Orchestrateur → Cursor** | Passe uniquement un contrat allowlisté ; pas d’élévation de privilèges |
| **Orchestrateur → Git** | Lecture autorisée ; écriture distante **interdite** au POC initial |
| **GPT → Orchestrateur** | Aucun canal d’autorité ; GPT ne commande pas l’orchestrateur |
| **Morris → tous** | Seul émetteur de GO / STOP structurants |
| **Studio / Git** | Studio représente ; Git prime |
| **Orchestrateur / vérité** | Journal = preuve d’exécution ; ≠ vérité produit |

Aligné **AF-Option C** — **VALIDÉ PAR MORRIS** (POC-CAND-03 / POC-G3, 2026-07-19) : Studio et orchestrateur séparés ; Git = source de vérité ; orchestrateur n’arbitre pas.
Le modèle d’état et le scénario restent un **contrat de cadrage**, pas une architecture technique finale. Aucune technologie sélectionnée.

---

## 6. Actions : read-only, simulées, interdites

### 6.1 Read-only / autorisées (POC initial recommandé)

- `git status`, `git rev-parse`, `git log` (lecture)
- `git diff` local
- Lecture fichiers allowlistés
- Génération d’artefacts **locaux** de preuve
- Journalisation
- Stop / reject

### 6.2 Simulées (obligatoires au POC initial)

- `git commit`
- `git push`
- Création PR / ready-for-review / merge
- Delete branch
- Invocation Cursor en mode écriture hors sandbox
- Appels GitHub API
- « Runtime cloud »

### 6.3 Interdites

- Auto-GO, auto-merge, auto-push
- Force push / rewrite history
- L5 global / timeout = GO
- Secrets réels
- Exécution shell non allowlistée
- Toute action non réversible
- Création d’une vérité durable hors Git

---

## 7. Gates Morris dans le scénario

| Gate | Moment | Décision typique |
|------|--------|------------------|
| Gate scénario (POC-G2) | Avant delivery | Sélection S1 |
| Gate d’exécution | Avant Cursor | GO / CORRIGER / STOP |
| Gate de clôture preuve | Après pack | CLOSING / ITERATE / ABANDON |

Les gates POC-G1…G6 **VALIDÉS**. POC-G10 **CONSOMMÉ**. POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ**. POC-G9 **CONSOMMÉ** (harness-only).

UI Studio versus harness : **Option B minimale** — Studio cockpit + adaptateur fin ; harness autonome (cœur). Option A conservée pour tests hors UI.

---

## 8. Stop conditions (scénario)

Stop immédiat si :

- GO absent, expiré ou révoqué ;
- action hors allowlist demandée ;
- divergence Git inattendue sur le workspace de preuve ;
- tentative d’écriture distante ;
- secret détecté dans le contexte ;
- orchestrateur indisponible / non déterministe ;
- Cursor sort du contrat ;
- opérateur Morris émet STOP.

---

## 9. Reprise et idempotence minimale

| Situation | Reprise |
|-----------|---------|
| STOP pendant exécution | Pas de retry auto ; nouveau GO requis |
| REJECT hors allowlist | Corriger contrat → nouveau GO |
| Échec Cursor read-only | Relancer avec même `requestId` / nouvel `executionId` si aucune écriture |
| Preuve partielle | Marquer `failed` ; ne pas inventer d’état Git |

**Idempotence :** relancer une exécution read-only ne doit pas muter le remote ; les artefacts locaux doivent être versionnés par `executionId`.

---

## 10. Données et fixtures de test

| Donnée | Nature |
|--------|--------|
| Demande DOC exemple | Fixture synthétique FR |
| Allowlist chemins | `projects/sfia-studio/**` lecture + méthode lecture |
| GO Morris de démo | Structure de décision mock puis réel |
| Branche de preuve | Locale, jetable |
| Secrets | **Aucun** — placeholders uniquement |

---

## 11. Observabilité et journalisation

Voir `20` §12. Compléments scénario :

- Preuve de **rejet** obligatoire dans la démo.
- Preuve de **stop** (au moins en dry-run documenté si non exécuté en live).
- Corrélation affichable dans un extrait de journal (fichier local).

---

## 12. Surface Studio P0 (hypothèse d’usage)

| Route P0 | Usage candidat dans S1 |
|----------|------------------------|
| `/nouvelle-demande` | Saisie intention |
| `/cycle-actif` | Suivi étapes / stops |
| `/decision` | Gate Morris |
| `/synthese` | Observation portefeuille (hors chemin critique) |

L’UI P0 **n’est pas** l’orchestrateur. Branchement réel UI↔orchestrateur = architecture / delivery futurs.

---

## 13. Ce que ce document ne tranche pas

- Implémentation de l’orchestrateur
- Protocole (files, HTTP local, CLI…)
- Emplacement exact des preuves
- Harness vs UI pour le déclenchement
- Périmètre exact des chemins allowlist (détail archi POC)

---

*Scénario S1 VALIDÉ — harness-only local produit — Option B — POC-G9 CONSOMMÉ — POC NON LANCÉ (pas industrialisé).*
