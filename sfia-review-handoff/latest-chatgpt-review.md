# SFIA Review Pack — Cycle 1 Cadrage Critical — POC orchestration Option B

- **Date / heure :** 2026-07-19 12:38:27 CEST (UTC+0200)
- **Cycle :** 1 — Cadrage POC orchestration (Option B)
- **Profil :** Critical
- **Typologie :** DOC / EVOL
- **Repository :** `/Users/morris/Projects/sfia-workspace`
- **Branche projet :** `project/sfia-studio-poc-orchestration-framing` — **locale, non poussée**
- **HEAD / origin/main / merge-base :** `aa8dbd4606c52df7662276a99c873b4d93e001ba`
- **Décision Morris consommée :** GO cadrage Option B uniquement
- **Commit / push / PR projet :** **aucun**
- **POC / MVP / industrialisation :** **non lancés / non engagés**

## Verdict

**POC ORCHESTRATION FRAMING READY FOR MORRIS REVIEW**

Handoff Git : à publier sur `sfia/review-handoff`.

Instruction ChatGPT : lire `sfia/review-handoff/sfia-review-handoff/latest-chatgpt-review.md` puis vérifier cycle, profil, branche, HEAD, fichiers, contenu complet, hypothèses, options, reco, POC-CAND, gates, réserves, validations, verdict.

---

## 1. Local Git Truth Check

```
branche initiale : main
HEAD = origin/main = aa8dbd4606c52df7662276a99c873b4d93e001ba
status : ?? .tmp-sfia-review/ uniquement
staged : aucun
```

PASS — branche créée ensuite depuis main.

## 2. Sources consultées

Méthode : template cycle ; routing guide ; operating model (via brief) ; AF L0–L5 dans `11`.

Studio : README, `04`–`13`, `18`, `19`, `app/README`, `07`.

Découverte : `18-technical-architecture.md` et `19-technical-architecture-decision-pack.md` confirmés ; **aucun** cadrage POC préexistant ; numéros **20–22 libres**.

## 3. Périmètre

Créés : `20`, `21`, `22`.  
Modifiés : README, `07`.  
Interdit respecté : pas d’`app/**`, pas de méthode, pas de push projet.

## 4. Scénarios / recommandation

Étudiés : S1–S4.  
**Recommandé (≠ validé) :** S1 DOC read-only gouverné + rejet allowlist.  
Automatisation reco : L3+L4* exécution ; L0 arbitrage ; L5 global interdit.  
Actions write distantes : **simulées**.

## 5. POC-CAND (toutes CANDIDATE)

POC-CAND-01…10 — voir doc `22` (aucune validée).

## 6. Gates POC-G1…G10

Tous **PROPOSÉ / NON VALIDÉ**.

## 7. Validations

```
git branch --show-current → project/sfia-studio-poc-orchestration-framing
git rev-parse HEAD → aa8dbd4…
git merge-base HEAD origin/main → aa8dbd4…
git diff --check → OK (après fix trailing whitespace)
git diff --name-only → README, 07, 20, 21, 22 (20–22 untracked)
SCOPE_OK — hors app/méthode/01–19 (sauf README/07)
aucun staged
POC non lancé ; MVP non engagé ; baseline v2.6 inchangée
```

## 8. Fichier créé — 20-poc-orchestration-framing.md (complet)

```markdown
# SFIA Studio — Cadrage POC orchestration (Option B)

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `20-poc-orchestration-framing.md` |
| **Cycle** | 1 — Cadrage POC orchestration (Option B) |
| **Profil** | Critical |
| **Typologie** | DOC / EVOL (cadrage) |
| **Baseline méthode** | SFIA v2.6 — Option C méthode (**inchangée**) |
| **Branche** | `project/sfia-studio-poc-orchestration-framing` |
| **Base** | `origin/main` @ `aa8dbd4606c52df7662276a99c873b4d93e001ba` |
| **Statut document** | **BROUILLON DE CADRAGE** — soumis à revue Morris ; **non validé** |
| **POC** | **Non lancé** |
| **MVP / industrialisation** | **Non engagés** |
| **Destinataire** | Morris |

> Ce document définit le **contrat de cadrage** d’un POC d’orchestration déterministe borné. Il ne lance pas le POC, ne valide aucune architecture Runtime, ne sélectionne aucune technologie et ne définit pas le MVP.

---

## 1. Contexte

### 1.1 Acquis factuels

- Delivery P0 **CLÔTURÉ** (PR #217) — app Next.js 15 sous `projects/sfia-studio/app/` ; 4 écrans ; fixtures ; Git/Cursor/Runtime **simulés**.
- Capitalisation post-P0 **INTÉGRÉE** (PR #218) — statut `p0-delivery-integrated-next-poc-orchestration-framing`.
- Architecture fonctionnelle **VALIDÉE** / **INTÉGRÉE** — **AF-Option C** : Studio et orchestrateur déterministe **candidat séparés**.
- Architecture technique P0 **VALIDÉE** — pas d’API, auth, BDD, Runtime contractuel en P0.
- Décision Morris : **Option B** — exécuter le **cadrage** du POC orchestration (pas le POC lui-même).

### 1.2 Formulation structurante (D-VAL-3 — inchangée)

> Le POC est une étape technique de validation de faisabilité.  
> Il ne constitue ni le produit cible, ni le MVP, ni la limite de la trajectoire.

### 1.3 Runtime candidat

Un mécanisme d’orchestration déterministe, **éventuellement** nommé « SFIA Runtime », doit **appliquer** contrats, permissions, gates et stop conditions.  
Nom **non contractuel**. Architecture Runtime **non validée**. Aucune technologie sélectionnée dans ce cadrage.

---

## 2. Problème technique à prouver

**Problème :** aujourd’hui, SFIA Studio P0 **représente** un cockpit gouverné, mais **ne démontre pas** qu’un orchestrateur déterministe séparé peut :

1. recevoir un contrat d’exécution borné ;
2. vérifier les préconditions (Git, gates, allowlist) ;
3. **refuser** toute action hors contrat sans arbitrage automatique ;
4. déclencher une exécution Cursor **uniquement après GO Morris** ;
5. collecter un résultat / preuve reconstructible ;
6. s’arrêter proprement (stop) et permettre une reprise contrôlée ;

…sans créer de seconde source de vérité face à Git, et sans automatiser l’arbitrage Morris.

---

## 3. Objectif de preuve

Démontrer, sur **un scénario métier unique**, que la boucle suivante est **faisable techniquement** en local (macOS) de façon **reproductible, bornée et réversible** :

```text
Intention Studio
  → qualification / contrat candidat (GPT)
  → gate Morris (GO explicite)
  → orchestrateur candidat (applique, ne décide pas)
  → exécution Cursor bornée (read-only / sandbox)
  → collecte preuve / pack
  → verdict candidat (GPT)
  → décision Morris tracée
```

**Résultat observable attendu :** un journal corrélé (demande → cycle → GO → actions → résultat → stop éventuel) + un review pack / preuve locale, sans push/PR/merge réels, sans secret réel, sans L5 global.

**Verdicts de preuve futurs (post-delivery POC — non applicables ici) :**

| Verdict | Signification |
|---------|---------------|
| `FEASIBILITY CONFIRMED` | Boucle démontrée sans écart structurant |
| `FEASIBILITY CONFIRMED WITH RESERVES` | Démontrée avec réserves non bloquantes |
| `FEASIBILITY NOT DEMONSTRATED` | Échec de preuve — abandon ou re-cadrage |

---

## 4. Périmètre du cadrage (ce cycle)

| Inclus | Exclu |
|--------|-------|
| Problème, objectif, scénario candidat | Développement / code POC |
| Frontières Studio / orch. / Git / Cursor | Branchement GitHub / Cursor réel |
| Niveaux d’automatisation candidats | Choix d’outil Runtime |
| Actions read-only / simulées / interdites | API, BDD, auth, CI/CD |
| Gates, stops, preuves, critères | Backlog / delivery POC |
| Sécurité, réversibilité, démo macOS | MVP / industrialisation |
| Décisions **candidates** POC-CAND-* | Validation de POC-CAND / D-VAL nouvelles |

---

## 5. Hors périmètre (rappel strict)

- Modification de `projects/sfia-studio/app/**`
- Push / PR / merge du présent cadrage sans GO distinct (POC-G10)
- Lancement du POC (POC-G9)
- Architecture technique détaillée du POC
- Définition du MVP
- Industrialisation
- Correction responsive / a11y / postcss P0
- Clôture formelle architecture fonctionnelle
- Évolution méthode SFIA (v2.7 / v3.0)

---

## 6. Hypothèses de cadrage

| ID | Hypothèse | Statut |
|----|-----------|--------|
| H1 | AF-Option C reste le cadre d’autorité (Studio ≠ orchestrateur) | Reprise d’acquis validé |
| H2 | Git reste la seule vérité durable | Reprise d’acquis validé |
| H3 | Un seul scénario métier suffit pour la première preuve | **Hypothèse de cadrage** |
| H4 | La première preuve peut s’appuyer sur lecture Git réelle + exécution Cursor **read-only** | **Hypothèse** |
| H5 | Toute écriture Git distante (commit/push/PR/merge) reste **simulée** dans le premier POC | **Hypothèse / garde-fou** |
| H6 | L’orchestrateur peut être un module local déterministe (script/service local) — technologie **non choisie** | **Hypothèse ouverte** |
| H7 | La surface UI P0 peut servir de cockpit humain sans être le moteur d’orchestration | **Hypothèse** |
| H8 | macOS local de Morris suffit comme environnement de preuve | Reprise D-VAL / cadrage |

---

## 7. Contraintes

### 7.1 Autorité et vérité

- Morris = seule autorité structurante (L0).
- ChatGPT qualifie / structure — ne décide pas.
- Cursor exécute un contrat borné — n’arbitre pas.
- Orchestrateur **applique** — n’autorise pas, ne crée pas de GO.
- Git prime ; Studio et orchestrateur ≠ seconde vérité.

### 7.2 Automatisation

- L5 **global** interdit.
- Arbitrage reste L0.
- Exécution après GO : L3 cible ; L4* orchestration contrôlée = **plafond candidat** (non validé).

### 7.3 Sécurité

- Aucun secret / token / identifiant réel dans fixtures ou journaux.
- Permissions minimales (least privilege).
- Séparation lecture / simulation / écriture.
- Isolation locale ; arrêt sécurisé (stop) obligatoire.
- Pas d’exécution de commandes système hors allowlist explicite (à détailler en architecture POC).

### 7.4 Réversibilité

- Toute action du POC initial doit être **réversible** ou **sans effet durable hors workspace local de preuve**.
- Actions destructives exclues.
- Force push, rewrite history, delete branch : **interdits**.

### 7.5 FinOps (qualification qualitative)

| Option | Nature | Coût potentiel |
|--------|--------|----------------|
| Orchestrateur 100 % local | Local | Faible / nul variable |
| Appels GPT | Service | Variable selon volume |
| Agent Cursor | Local / licence existante | Selon usage Morris |
| Service managé Runtime | Managé | **Non retenu pour le 1er POC** — engagement financier à arbitrer plus tard |

Aucun budget ni fournisseur validé.

---

## 8. Niveaux d’automatisation (candidats)

| Niveau | Rôle | Position cadrage POC |
|--------|------|----------------------|
| **L0** | Arbitrage Morris | **Obligatoire** |
| **L1–L2** | Qualification, drafting, verdict candidat | Autorisé |
| **L3** | Exécution bornée **après GO** | **Cible recommandée** |
| **L4\*** | Orchestration contrôlée candidate | **Plafond recommandé** — à prouver, pas à valider comme Runtime produit |
| **L5 global** | Auto-arbitrage | **Interdit** |
| **L5 ciblé read-only** | Consultation bornée (AF-15) | Possible uniquement si périmètre lecture explicite |

\*L4 = orchestration contrôlée **candidate**, non validée techniquement (aligné `11` §17).

**Recommandation (≠ décision) :** plafond **L3 + L4\* sur le chemin d’exécution uniquement** ; arbitrage **strictement L0**.

---

## 9. Critères de succès, d’échec et d’abandon

### 9.1 Succès (preuves futures — POC delivery)

- Boucle complète exécutée au moins une fois en local.
- GO Morris explicite avant toute exécution Cursor non triviale.
- Orchestrateur refuse une action hors allowlist (preuve de déterminisme négatif).
- Journal corrélé disponible et reconstructible.
- Aucune écriture Git distante réelle.
- Aucun secret réel exposé.
- Stop déclenchable et effectif.

### 9.2 Échec

- Impossible de séparer décision et exécution.
- Orchestrateur peut contourner un gate.
- Seconde vérité d’état durable hors Git.
- Dépendance à une techno non arbitré pour « réussir ».
- Preuve non reproductible.

### 9.3 Abandon

- Preuve nécessite écriture distante non réversible.
- Coût / complexité disproportionnés vs objectif de faisabilité.
- Contradiction avec AF-Option C non résoluble sans changer le produit.
- Morris décide `STOP` / abandon explicite.

---

## 10. Risques et réserves

| Risque | Impact | Mitigation cadrage |
|--------|--------|-------------------|
| Confusion POC / MVP | Haute | Formulations D-VAL-3 répétées ; critères faisabilité seulement |
| Seconde vérité UI/orch. | Haute | Git prime ; états dérivés = observation |
| Auto-arbitrage implicite | Haute | L5 interdit ; timeout ≠ GO |
| Fuite de secrets | Haute | Fixtures synthétiques ; pas de `.env` réel |
| Surarchitecture Runtime | Moyenne | Techno = hypothèse ; architecture POC cycle séparé |
| Élargissement scénario | Moyenne | Un seul scénario recommandé (doc `21`) |
| Coût GPT variable | Faible–moyen | Volume borné ; FinOps qualitatif |

**Réserves maintenues hors POC :** responsive P0, a11y complète, CI Studio, postcss, clôture formelle AF, branches historiques.

---

## 11. Stratégie de démonstration (macOS local)

1. Préparer un workspace de preuve isolé (clone ou worktree dédié — **à arbitrer en architecture POC**).
2. Charger fixtures / données de test synthétiques (doc `21`).
3. Déclencher le scénario depuis Studio (UI ou harness — **non choisi ici**).
4. Obtenir un GO Morris simulé puis réel (selon maturité) sur gate unique.
5. Montrer refus orchestrateur sur action hors contrat.
6. Montrer exécution read-only autorisée après GO.
7. Produire journal + pack de preuve.
8. Arrêter (stop) et montrer absence d’effet distant.

**Environnement :** macOS local Morris = contrainte de preuve (pas plateforme produit).

---

## 12. Observabilité minimale (preuve)

Événements minimaux à journaliser :

- `intent.received`
- `qualification.produced`
- `gate.requested` / `gate.decided` (GO / CORRIGER / STOP)
- `orchestrator.accepted` / `orchestrator.rejected`
- `execution.started` / `execution.finished` / `execution.stopped`
- `proof.collected`
- `verdict.candidate.produced`

Corrélation : `requestId` · `cycleId` · `gateId` · `executionId`.

Pas de plateforme de supervision industrialisée.

---

## 13. Éléments reportés après ce cadrage

| Élément | Cycle ultérieur candidat |
|---------|--------------------------|
| Architecture POC ciblée | Après POC-G7 |
| Choix techno orchestrateur | Architecture POC |
| Backlog POC borné | Après POC-G8 |
| Delivery POC | Après POC-G9 |
| Intégration réelle Git/Cursor | GO distincts (POC-G5+) |
| Décision post-POC (abandon / itération / MVP) | DF-G6 / DF-G7 (proposés) |

---

## 14. Décisions Morris nécessaires (hors validation de ce document)

Voir `22-poc-orchestration-decision-pack.md` (POC-CAND-* et gates POC-G1…G10).

Minimum avant architecture / delivery :

1. Valider problème + objectif de preuve (POC-G1).
2. Sélectionner le scénario unique (POC-G2).
3. Valider frontières (POC-G3).
4. Valider plafond d’automatisation (POC-G4).
5. Valider quelles actions réelles (s’il en existe) sont admissibles (POC-G5).
6. Valider critères succès / échec / abandon (POC-G6).
7. Autoriser versionnement du cadrage (POC-G10) — **distinct** du lancement POC.

---

## 15. Documents liés

| Document | Rôle |
|----------|------|
| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario + frontières + flux |
| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | Options, reco, POC-CAND, gates |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire produit |
| [11-functional-architecture.md](./11-functional-architecture.md) | AF-Option C, niveaux L0–L5 |
| [18-technical-architecture.md](./18-technical-architecture.md) | Contraintes techniques P0 |

---

*Document de cadrage — non validé — POC non lancé — Option C méthode préservée — Morris décide.*

```

## 9. Fichier créé — 21-poc-orchestration-scenario-and-boundaries.md (complet)

```markdown
# SFIA Studio — Scénario et frontières POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `21-poc-orchestration-scenario-and-boundaries.md` |
| **Cycle** | 1 — Cadrage POC orchestration (Option B) |
| **Profil** | Critical |
| **Statut document** | **BROUILLON** — scénario **recommandé**, **non sélectionné** par Morris |
| **Complète** | [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) |
| **POC** | **Non lancé** |

---

## 1. Scénarios étudiés (limité)

| ID | Intitulé | Couverture preuve | Risque | Retenu ? |
|----|----------|-------------------|--------|----------|
| **S1** | Cycle DOC gouverné read-only (intention → gate → exécution Cursor lecture → pack → décision) | Git + GPT + Cursor + gates + stops | Faible | **Recommandé** |
| **S2** | Pre-check Git + détection divergence HEAD + stop + reprise lecture | Vérité Git / stops | Moyen | Variante stress |
| **S3** | Allowlist orchestrateur + rejet d’écriture simulée hors contrat | Déterminisme négatif | Moyen | Complément de S1 |
| **S4** | PR readiness locale sans push/PR/merge | Diff / review | Plus large | Reporté |

**Recommandation (≠ décision Morris) :** retenir **S1** comme scénario unique du premier POC, avec **élément de S3** (rejet hors allowlist) comme assertion obligatoire dans le flux nominal.

---

## 2. Scénario recommandé S1 — « DOC read-only gouverné »

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

Morris (ou opérateur sous son autorité) ouvre une **nouvelle demande** de type DOC dans Studio (surface P0 `/nouvelle-demande` ou harness équivalent — **non choisi**).

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

Aligné **AF-Option C** (VALIDÉE) — sans la réécrire.

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

Les gates produit POC-G1…G10 restent dans `22` — **tous NON VALIDÉS** sauf le GO cadrage déjà consommé.

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

*Scénario recommandé S1 — non sélectionné — POC non lancé — Morris décide (POC-G2).*

```

## 10. Fichier créé — 22-poc-orchestration-decision-pack.md (complet)

```markdown
# SFIA Studio — Decision pack POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `22-poc-orchestration-decision-pack.md` |
| **Cycle** | 1 — Cadrage POC orchestration (Option B) |
| **Profil** | Critical |
| **Statut document** | **BROUILLON** — décisions **candidates** uniquement |
| **Préfixe décisions** | `POC-CAND-*` — **aucune validée** |
| **D-VAL nouvelles** | **Aucune** |
| **POC** | **Non lancé** |
| **Destinataire** | Morris |

---

## 1. Observations factuelles

1. Delivery P0 clôturé et intégré (PR #217) ; capitalisation intégrée (PR #218).
2. Option B Morris : cadrage POC orchestration **autorisé** ; POC **non autorisé** à ce stade.
3. AF-Option C **VALIDÉE** : Studio / orchestrateur séparés ; orchestrateur n’arbitre pas.
4. P0 : Git/Cursor/Runtime **simulés** ; pas d’API/auth/BDD.
5. D-VAL-3 : POC = faisabilité ≠ MVP ≠ produit.
6. Niveaux L0–L5 documentés dans `11` : L5 global interdit ; L4* candidat.
7. Aucun document `20`–`22` n’existait avant ce cycle ; numérotation libre.
8. Baseline SFIA v2.6 / Option C méthode **inchangée**.

---

## 2. Hypothèses (reprises)

Voir `20` §6 (H1–H8). Les hypothèses **ne sont pas** des décisions.

---

## 3. Options de cadrage

### Option A — Reporter le POC

| | |
|--|--|
| Contenu | Ne pas cadrer ; attendre autre jalon (ex. clôture AF formelle) |
| Bénéfice | Moins de charge documentaire |
| Risque | Perte de momentum ; frontières non operationalisées |
| Alignement Option B | **Non** — contredit le GO cadrage |

### Option B — Cadrer un POC orchestration borné (ce cycle)

| | |
|--|--|
| Contenu | Contrat de preuve + scénario unique + gates candidats |
| Bénéfice | Décision Morris éclairée avant architecture/delivery |
| Risque | Sur-cadrage si trop de scénarios |
| Alignement | **Oui** — décision Morris consommée |

### Option C — Cadrer directement architecture + backlog

| | |
|--|--|
| Contenu | Aller au-delà du cadrage |
| Risque | Validation techno prématurée ; hors périmètre |
| Alignement | **Non** — STOP / hors prompt |

**Recommandation Cursor :** **Option B** (exécuter / finaliser le présent cadrage) — **≠** validation Morris des POC-CAND.

---

## 4. Options de scénario

| Option | Scénario | Reco |
|--------|----------|------|
| S1 | DOC read-only gouverné + rejet allowlist | **Recommandé** |
| S2 | Focus divergence Git | Secondaire |
| S3 | Focus rejet seul | Insuffisant seul |
| S4 | PR readiness | Trop large pour 1er POC |

**Recommandation :** S1 (détail `21`) — **POC-CAND-02**.

---

## 5. Options d’automatisation

| Option | Plafond | Reco |
|--------|---------|------|
| A | L2 max (pas d’exécution) | Trop faible pour prouver orchestration |
| B | L3 après GO | Nécessaire mais incomplet sans orchestration |
| C | L3 + L4* exécution ; L0 arbitrage | **Recommandé** |
| D | L5 ciblé write | **Rejeté** pour POC initial |

**Recommandation :** Option C — **POC-CAND-04**.

---

## 6. Décisions candidates (POC-CAND)

> Aucune POC-CAND n’est validée. Aucune D-VAL nouvelle.

| ID | Décision candidate | Options | Recommandation Cursor | Statut |
|----|--------------------|---------|----------------------|--------|
| **POC-CAND-01** | Valider problème + objectif de preuve (`20` §2–3) | Accepter / amender / rejeter | Accepter | **CANDIDATE** |
| **POC-CAND-02** | Sélectionner scénario unique S1 (`21`) | S1 / S2 / S3 / S4 / autre | **S1** | **CANDIDATE** |
| **POC-CAND-03** | Valider frontières Studio / orch. / Git / Cursor (`21` §5) | Accepter AF-Option C opérationnalisée / amender | Accepter | **CANDIDATE** |
| **POC-CAND-04** | Plafond automatisation L3+L4* ; arbitrage L0 ; L5 global interdit | A/B/C/D ci-dessus | **C** | **CANDIDATE** |
| **POC-CAND-05** | Actions distantes d’écriture : **simulées** au POC initial | Simulées / read-only Git réel+write simulé / write réel borné | Simulées (+ lecture Git réelle autorisée) | **CANDIDATE** |
| **POC-CAND-06** | Critères succès / échec / abandon (`20` §9) | Accepter / amender | Accepter | **CANDIDATE** |
| **POC-CAND-07** | Orchestrateur = composant local déterministe **sans** choix d’outil | Local / managé / indécis | Local candidat ; outil **ouvert** | **CANDIDATE** |
| **POC-CAND-08** | Après validation cadrage : enchaîner architecture POC ciblée (pas delivery direct) | Archi→backlog→delivery / delivery immédiat | Archi d’abord | **CANDIDATE** |
| **POC-CAND-09** | Autoriser commit / push / PR du cadrage `20`–`22` + README/`07` | GO / NO-GO | Attendre revue | **CANDIDATE** (POC-G10) |
| **POC-CAND-10** | Ne pas lancer le POC tant que POC-G1…G6 non validés | Strict / assouplir | Strict | **CANDIDATE** |

---

## 7. Gates Morris proposés

| Gate | Objet | Statut |
|------|-------|--------|
| **POC-G1** | Problème + objectif de preuve | **PROPOSÉ / NON VALIDÉ** |
| **POC-G2** | Scénario métier unique | **PROPOSÉ / NON VALIDÉ** |
| **POC-G3** | Frontières Studio / orch. / Git / Cursor | **PROPOSÉ / NON VALIDÉ** |
| **POC-G4** | Niveau max d’automatisation | **PROPOSÉ / NON VALIDÉ** |
| **POC-G5** | Actions réelles éventuellement admissibles | **PROPOSÉ / NON VALIDÉ** |
| **POC-G6** | Critères succès / échec / abandon | **PROPOSÉ / NON VALIDÉ** |
| **POC-G7** | Architecture POC candidate | **PROPOSÉ / NON VALIDÉ** |
| **POC-G8** | Backlog POC | **PROPOSÉ / NON VALIDÉ** |
| **POC-G9** | Delivery POC | **PROPOSÉ / NON VALIDÉ** |
| **POC-G10** | Commit / push / PR du présent cadrage | **PROPOSÉ / NON VALIDÉ** |

**Exception consommée :** GO exécuter le **cadrage documentaire local** (Option B) — ne valide aucun gate POC-G1…G10.

---

## 8. Impacts

| Domaine | Impact si POC-CAND acceptées |
|---------|------------------------------|
| Produit | Clarifie la prochaine preuve sans engager le MVP |
| Gouvernance | Renforce AF-Option C dans un scénario opérationnel |
| Technique | Prépare un cycle architecture POC borné |
| Sécurité | Figera lecture vs simulation vs écriture |
| Coût | Reste local / variable GPT borné |
| Méthode | Aucune — v2.6 préservée |

---

## 9. Dette potentielle

- Harness de preuve vs intégration UI P0 non tranché.
- Contrat d’événements non schématisé.
- Allowlist chemins à détailler.
- Risque de dérive « mini-Runtime » si architecture non bornée.
- Dualité simulation P0 UI vs orchestrateur réel à synchroniser.

---

## 10. Éléments restant ouverts

- Choix d’outil / forme de l’orchestrateur
- Architecture POC détaillée
- Backlog et estimation
- Actions Git réelles éventuelles (POC-G5)
- Clôture formelle architecture fonctionnelle
- MVP / industrialisation
- Réserves P0 (responsive, a11y, CI, postcss)

---

## 11. Séquence proposée après validation du cadrage

```text
Validation Morris du cadrage (POC-G1…G6, POC-G10)
  → architecture POC ciblée (POC-G7)
  → backlog POC borné (POC-G8)
  → delivery POC (POC-G9)
  → décision Morris post-POC : abandon / itération / préparation MVP
```

Aucune de ces étapes n’est engagée par ce document.

---

## 12. Questions Morris (revue)

1. Validez-vous l’objectif de preuve (`POC-CAND-01`) ?
2. Sélectionnez-vous **S1** (`POC-CAND-02`) ?
3. Confirmez-vous le plafond **L3+L4\*** / L0 (`POC-CAND-04`) ?
4. Confirmez-vous **aucune écriture Git distante** au premier POC (`POC-CAND-05`) ?
5. Autorisez-vous **commit / push / PR** du cadrage (`POC-CAND-09` / POC-G10) ?
6. Après intégration du cadrage : GO architecture POC ou autre priorité ?

---

## 13. Verdict documentaire (local)

| Élément | Valeur |
|---------|--------|
| Cadrage produit | Complet pour revue |
| POC lancé | **Non** |
| Décisions validées | **Aucune POC-CAND** |
| Gates validés | **Aucun POC-G*** |
| Ready for commit projet | **Non** — attend POC-G10 |

**Verdict de cycle proposé :** `POC ORCHESTRATION FRAMING READY FOR MORRIS REVIEW`

---

*Decision pack candidat — non validé — Morris décide.*

```

## 11. Diff README.md

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index bbc2c1d..b8e5e13 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,40 +4,22 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `p0-delivery-integrated-next-poc-orchestration-framing` — Delivery P0 **CLÔTURÉ** et intégré sur `main` ; prochaine orientation = **cadrage POC orchestration** (Option B) — **non lancé** |
+| **Statut** | `poc-orchestration-framing-ready-for-review` — cadrage Option B **produit localement** (`20`–`22`) ; **soumis à revue** ; POC **non lancé** ; Delivery P0 **CLÔTURÉ** |
 | **Baseline méthode** | **SFIA v2.6** (consommée — **Option C méthode** validée ; baseline inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — capitalisation post-Delivery P0 (DOC / CAPA légère, Standard) |
-| **Typologie cycle** | DOC / CAPA légère — synchronisation statut produit + trajectoire |
-| **Cycle projet** | 15 — Capitalisation / REX ; Delivery P0 **clôturé** ; UX/UI **clôturé** ; architecture fonctionnelle **intégrée** (clôture formelle **ouverte**) |
-| **Profil SFIA** | Standard (capitalisation) |
-| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée**) |
-| **Branche Delivery P0** | `project/sfia-studio-delivery-p0-implementation` — **supprimée** (local + remote) après cleanup post-merge |
-| **Figma UX** | [lrjA1WEyRpL05vKR8k29LO](https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO) — P0-00C…P0-03C @ 1440×1024 (référence initiale) |
-| **App P0** | `projects/sfia-studio/app/` — Next.js 15 / React 19 / TypeScript ; 4 routes ; fixtures locales |
-| **PR Delivery P0** | [#217](https://github.com/mcleland147/sfia-workspace/pull/217) — **MERGED** (squash) |
-| **Commit projet Delivery** | `c37b065fc59b60d01f5896aa7ebd3c130a636457` |
-| **Merge Delivery** | `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
-| **Périmètre Delivery** | 77 fichiers ; +12830 / −0 |
-| **PR architecture** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
-| **Merge architecture** | `84e48636bb78808774b51f67329167f8e9749a6b` |
-| **Acceptation Morris #211** | **OUI** — 2026-07-18 (régularisation documentaire ; sans D-VAL-12) |
-| **PR sync / finalisation archi** | [#212](https://github.com/mcleland147/sfia-workspace/pull/212) / [#213](https://github.com/mcleland147/sfia-workspace/pull/213) — **MERGED** |
-| **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; intégrée à `main`) |
-| **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
+| **Exécuteur** | Cursor — cadrage POC orchestration Option B (DOC, Critical) |
+| **Typologie cycle** | DOC / EVOL — cadrage Critical |
+| **Cycle projet** | 1 — Cadrage POC orchestration (Option B) ; Delivery P0 **clôturé** ; capitalisation P0 **intégrée** (PR #218) |
+| **Profil SFIA** | Critical |
+| **Branche cadrage POC** | `project/sfia-studio-poc-orchestration-framing` — **locale** ; **non poussée** |
+| **Base canonique** | `origin/main` @ `aa8dbd4606c52df7662276a99c873b4d93e001ba` |
 | **Chemin** | `projects/sfia-studio/` |
-| **Base canonique** | `origin/main` @ `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
-| **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
-| **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
 | **AF-Option C** | **VALIDÉE** — Studio / orchestrateur candidat séparés — **≠** Option C méthode |
-| **AF-CAND-01…10, 11A, 12** | **VALIDÉES** — ≠ D-VAL |
-| **AF-CAND-11B** | **VALIDÉE** — UX/UI sélectionné, exécuté et **clôturé** |
-| **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
-| **Architecture fonctionnelle** | **VALIDÉE** et **INTÉGRÉE** sur `main` — clôture formelle **NON PRONONCÉE** |
-| **Architecture technique P0** | **VALIDÉE** et **INTÉGRÉE** (`18`/`19` ; TA-DEC-01…18) — Delivery P0 **exécuté** depuis |
-| **UX/UI** | **CLÔTURÉ** — Option B ; 4 frames Figma ; docs `14`–`16` |
-| **Delivery P0** | **CLÔTURÉ** — implémenté, validé visuellement, mergé (#217), post-mergé, cleanup branche effectué ; **aucune gate Morris restante** |
-| **Prochain cycle** | **Cadrage POC orchestration** (Option B Morris) — **sélectionné**, **non démarré** ; POC / MVP / industrialisation **non lancés** |
+| **Delivery P0** | **CLÔTURÉ** — PR #217 ; merge `759ab0b…` |
+| **Capitalisation P0** | **INTÉGRÉE** — PR #218 ; merge `aa8dbd4…` |
+| **Cadrage POC** | Documents `20`–`22` — **brouillons** ; POC-CAND **candidates** ; gates POC-G* **non validés** |
+| **App P0** | `projects/sfia-studio/app/` — Next.js 15 ; fixtures ; Git/Cursor/Runtime simulés |
+| **Prochain cycle** | Attente validation Morris du cadrage (POC-G1…G6) + éventuel POC-G10 ; **POC non lancé** ; MVP / industrialisation **non engagés** |
 
 ---
 
@@ -63,10 +45,11 @@
 | App sur `main` | Disponible — desktop 1440×1024 ; pas d’API / auth / BDD / orchestration réelle |
 | Git / Cursor / Runtime | **Simulés ou désactivés** en P0 |
 | Produit complet / MVP / industrialisation | **Non atteints** |
-| Prochaine orientation | **Option B — cadrage POC orchestration** — sélectionnée, **non lancée** |
+| Cadrage POC orchestration (Option B) | **Exécuté localement** (`20`–`22`) — **soumis à revue** — **non validé** — POC **non lancé** |
+| Branche cadrage | `project/sfia-studio-poc-orchestration-framing` — locale, non poussée |
 | Branches historiques | `functional-design`, `pre-framing`, `functional-architecture` **conservées** |
 
-> Historique antérieur (PR #207–#216) : inchangé dans son rôle. La capitalisation synchronise le statut **après** clôture Delivery P0 ; elle ne réécrit pas les décisions D-VAL / AF-CAND / TA-DEC.
+> Capitalisation P0 intégrée (PR #218). Cadrage POC Option B **en revue** — ne lance pas le POC et ne valide aucune POC-CAND.
 
 ---
 
@@ -141,14 +124,15 @@ Pré-cadrage
   → Delivery P0
   → PR #217 / intégration main
   → post-merge / cleanup
-  → cadrage POC orchestration          ← prochaine étape validée (Option B) — non démarrée
-  → architecture POC ciblée             ← candidate (après cadrage)
+  → capitalisation P0 (PR #218)
+  → cadrage POC orchestration          ← **exécuté localement** (`20`–`22`) — en revue — POC non lancé
+  → architecture POC ciblée             ← candidate (après POC-G7)
   → backlog POC borné                   ← candidate
   → delivery POC                        ← candidate
   → décision Morris : abandon / itération / préparation MVP
 ```
 
-Étapes jusqu’au cleanup P0 : **terminées**. Cadrage POC orchestration : **sélectionné**, **non démarré**. Étapes suivantes : **candidates**, soumises aux résultats du cadrage. POC / MVP / industrialisation : **non engagés**. Clôture formelle architecture fonctionnelle : **non automatique**.
+Étapes jusqu’à la capitalisation P0 : **terminées**. Cadrage POC : **produit**, **non validé**, POC **non lancé**. Étapes suivantes : **candidates**. MVP / industrialisation : **non engagés**.
 
 ---
 
@@ -218,7 +202,17 @@ Pré-cadrage
 | [app/README.md](./app/README.md) | Runtime P0 — stack, routes, contraintes |
 | `projects/sfia-studio/app/**` | 77 fichiers intégrés sur `main` @ `759ab0b…` |
 
-> Delivery P0 **CLÔTURÉ**. Aucune API, auth, BDD ni orchestration réelle. Git / Cursor / Runtime **simulés**. Prochaine orientation : **cadrage POC orchestration** (non lancé).
+> Delivery P0 **CLÔTURÉ**. Aucune API, auth, BDD ni orchestration réelle. Git / Cursor / Runtime **simulés**. Cadrage POC Option B : documents `20`–`22` en revue — POC **non lancé**.
+
+### Cadrage POC orchestration — EN REVUE (Option B)
+
+| Document | Rôle |
+|----------|------|
+| [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Problème, objectif de preuve, contraintes, critères |
+| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario S1 recommandé, frontières, actions |
+| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND-01…10, gates POC-G1…G10 |
+
+> Statut : **brouillons locaux**. Aucune POC-CAND validée. Aucun gate POC-G* validé. Cycle **non clôturé**.
 
 ---
 
@@ -329,22 +323,22 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 ### Orientation Morris — Option B (POC orchestration)
 
-> Le prochain cycle SFIA Studio sera un cycle de **cadrage** visant à définir un POC d’orchestration borné entre SFIA Studio et un mécanisme d’orchestration déterministe candidat. Ce cycle devra valider la faisabilité technique **sans** préjuger de l’architecture produit finale, du MVP ni de l’industrialisation.
-
-**Décision consommée :** Option B sélectionnée comme prochaine orientation — **cadrage uniquement** ; POC **non lancé** ; aucune techno Runtime sélectionnée ; aucune intégration Studio ↔ Git ↔ Cursor ↔ orchestrateur autorisée dans ce cycle de capitalisation.
+> Le cadrage visant à définir un POC d’orchestration borné est **produit localement** (`20`–`22`) et **soumis à revue**. Il ne préjuge pas de l’architecture produit finale, du MVP ni de l’industrialisation.
 
-**Sujets préparés pour le futur cadrage POC :** objectif de preuve ; scénario métier unique ; frontières Studio / orchestrateur ; niveau d’automatisation maximal ; actions read-only ou simulées ; gates Morris ; stop conditions ; données de test ; preuves attendues ; critères de succès et d’abandon ; sécurité et réversibilité ; périmètre Git ; stratégie de démonstration.
+**POC-CAND** (candidates — voir `22`) : POC-CAND-01…10.
+**Gates** POC-G1…G10 : **PROPOSÉS / NON VALIDÉS**.
 
 ---
 
 ## 8. Prochaine décision
 
-1. **GO commit / push / PR** de la présente capitalisation documentaire.
-2. Après intégration : **GO cadrage POC orchestration**.
-3. Clôture formelle du cycle architecture fonctionnelle (décision **distincte**, toujours ouverte).
-4. Sort des branches historiques (`pre-framing` / `functional-design` / `functional-architecture`).
+1. Revue ChatGPT / Morris du cadrage `20`–`22`.
+2. Validation des POC-CAND / gates POC-G1…G6 (décisions distinctes).
+3. **POC-G10** — GO commit / push / PR du cadrage (si accepté).
+4. Ensuite seulement : architecture POC (POC-G7) — **pas** le delivery POC.
+5. Clôture formelle architecture fonctionnelle (toujours ouverte, distincte).
 
-**Verdict documentaire :** `CAPITALIZATION COMPLETE — P0 STATUS SYNCHRONIZED — POC ORCHESTRATION FRAMING READY`
+**Verdict documentaire local :** `POC ORCHESTRATION FRAMING READY FOR MORRIS REVIEW`
 
 ---
 
@@ -354,17 +348,13 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 |---------|--------|
 | Méthode | SFIA v2.6 sur `main` — **Option C méthode** |
 | Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
-| Cadrage validé | `projects/sfia-studio/` **`01`–`07`** sur **`main`** |
-| Conception fonctionnelle | **`08`–`10`** sur **`main`** |
-| Architecture fonctionnelle | **`11`–`13`** sur **`main`** |
-| UX/UI | **`14`–`16`** sur **`main`** |
-| Architecture technique P0 | **`18`–`19`** sur **`main`** |
-| Delivery P0 / app | `projects/sfia-studio/app/` — PR #217 / merge `759ab0b…` |
-| Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
+| Socle produit | `01`–`19` + app P0 sur **`main`** @ `aa8dbd4…` (via PR #218) |
+| Cadrage POC (local) | `20`–`22` sur branche `project/sfia-studio-poc-orchestration-framing` — **non poussée** |
+| Review pack | `.tmp-sfia-review/chatgpt-review.md` |
 | Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
 
-> `main` @ `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` est la source de vérité du **cadrage**, de la **conception**, de l’**architecture**, de l’**UX/UI**, de l’**architecture technique P0** et du **Delivery P0** intégrés.
+> `main` @ `aa8dbd4…` = vérité intégrée jusqu’à capitalisation P0. Le cadrage POC `20`–`22` est **local** jusqu’à POC-G10.
 
 ---
 
-*SFIA Studio — Delivery P0 CLÔTURÉ (PR #217) — prochaine orientation = cadrage POC orchestration (Option B, non lancé) — clôture architecture fonctionnelle NON PRONONCÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — cadrage POC orchestration EN REVUE (`20`–`22`) — POC NON LANCÉ — Delivery P0 CLÔTURÉ — clôture architecture fonctionnelle NON PRONONCÉE — Option C méthode préservée — Morris décide.*

```

## 12. Diff 07-product-trajectory-and-decision-pack.md

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 08babef..7af1f77 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,15 +4,15 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 15 — Capitalisation / REX (post-Delivery P0) ; historique cadrage / conception conservé |
-| **Profil** | Capitalization — Standard |
+| **Cycle** | 1 — Cadrage POC orchestration (Option B) ; historique capitalisation / Delivery P0 conservé |
+| **Profil** | Critical (cadrage POC) |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | `p0-delivery-integrated-next-poc-orchestration-framing` ; Delivery P0 **clôturé** ; UX/UI **clôturé** ; architecture fonctionnelle intégrée (clôture formelle **ouverte**) |
-| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND / AF-CAND / TA-DEC historiques inchangés ; **Option B — POC orchestration** = prochaine orientation Morris (**cadrage**, non lancé) |
+| **Statut** | `poc-orchestration-framing-ready-for-review` ; docs `20`–`22` **brouillons locaux** ; POC **non lancé** ; Delivery P0 **clôturé** |
+| **Décisions** | D-VAL / FD-CAND / AF-CAND / TA-DEC inchangées ; **POC-CAND-01…10 candidates** ; gates POC-G* **non validés** |
 | **Destinataire** | Morris |
-| **Source de vérité** | Git `main` @ `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` — cadrage → Delivery P0 intégrés |
+| **Source de vérité** | Git `main` @ `aa8dbd4606c52df7662276a99c873b4d93e001ba` ; cadrage POC local sur `project/sfia-studio-poc-orchestration-framing` |
 
-> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Delivery P0 **CLÔTURÉ** (PR #217). Prochaine orientation : **cadrage POC orchestration** (Option B) — **non démarré**. Clôture formelle architecture fonctionnelle **non prononcée**. **Pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
+> Delivery P0 **CLÔTURÉ**. Capitalisation **INTÉGRÉE** (PR #218). Cadrage POC Option B **produit localement** — **en revue** — POC **non lancé**. **Pas de D-VAL-12.** Aucune POC-CAND validée.
 
 ---
 
@@ -34,11 +34,12 @@
 | Branche Delivery | **Supprimée** (local + remote) |
 | Gate Morris Delivery P0 | **Aucune restante** |
 | App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
-| Prochaine orientation | **Option B — cadrage POC orchestration** — sélectionnée, **non démarrée** |
+| Prochaine orientation | **Cadrage POC** — **exécuté localement** (`20`–`22`) — en revue — POC **non lancé** |
 | Produit complet / MVP / industrialisation | **Non atteints / non engagés** |
 | Branches historiques | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |
+| Branche cadrage POC | `project/sfia-studio-poc-orchestration-framing` — locale, **non poussée** |
 
-> Les lignes « Delivery autorisé — non exécuté » des versions antérieures de ce document étaient **exactes à leur date**. Elles sont **obsolètes** après PR #217 et remplacées ici par l’état factuel ci-dessus.
+> Les lignes « Delivery autorisé — non exécuté » des versions antérieures étaient **exactes à leur date**. Obsolètes après PR #217. Le cadrage POC est désormais **produit** mais **non validé**.
 
 ### Trace factuelle — Delivery P0 (historique compact)
 
@@ -113,7 +114,8 @@ Pré-cadrage
   → Delivery P0
   → PR #217 / intégration main
   → post-merge / cleanup
-  → cadrage POC orchestration          ← prochaine étape validée (Option B) — non démarrée
+  → capitalisation P0 (PR #218)
+  → cadrage POC orchestration          ← exécuté localement (`20`–`22`) — en revue — POC non lancé
   → architecture POC ciblée             ← candidate
   → backlog POC borné                   ← candidate
   → delivery POC                        ← candidate
@@ -122,35 +124,16 @@ Pré-cadrage
 
 ### Précisions
 
-- Étapes jusqu’au cleanup P0 : **terminées**.
-- Cadrage POC orchestration : **sélectionné** (Option B Morris), **non démarré**.
-- Étapes post-cadrage POC : **candidates**, soumises aux résultats du cadrage.
-- POC ≠ MVP ≠ industrialisation — **aucun** de ces jalons n’est engagé.
-- Architecture **fonctionnelle** : VALIDÉE / INTÉGRÉE ; clôture formelle **non prononcée**.
-- Architecture **technique P0** : VALIDÉE / INTÉGRÉE ; Delivery P0 **exécuté**.
-- Desktop P0 uniquement (1440×1024) ; responsive / a11y complète / CI / Runtime réel **ouverts**.
+- Étapes jusqu’à capitalisation P0 : **terminées**.
+- Cadrage POC orchestration : **produit localement**, **non validé**, POC **non lancé**.
+- Étapes post-cadrage : **candidates** (POC-G7…).
+- POC ≠ MVP ≠ industrialisation — **aucun** engagé.
+- Scénario recommandé (non sélectionné) : **S1** DOC read-only gouverné — voir `21`.
+- POC-CAND-01…10 : **candidates** — voir `22`.
 
-### Orientation Option B — cadrage POC orchestration
+### Orientation Option B — état
 
-> Le prochain cycle SFIA Studio sera un cycle de cadrage visant à définir un POC d’orchestration borné entre SFIA Studio et un mécanisme d’orchestration déterministe candidat. Ce cycle devra valider la faisabilité technique sans préjuger de l’architecture produit finale, du MVP ni de l’industrialisation.
-
-**Sujets du futur cadrage (préparation — non exécution) :**
-
-1. Objectif de preuve
-2. Scénario métier unique
-3. Frontières Studio / orchestrateur
-4. Niveau d’automatisation maximal
-5. Actions read-only ou simulées
-6. Gates Morris
-7. Stop conditions
-8. Données de test
-9. Preuves attendues
-10. Critères de succès et d’abandon
-11. Sécurité et réversibilité
-12. Périmètre Git
-13. Stratégie de démonstration
-
-**Hors ce cycle de capitalisation :** architecture détaillée ; schéma API ; contrat JSON ; backlog complet ; choix d’outil Runtime ; code ; planning détaillé.
+> Le cadrage d’un POC d’orchestration borné est **disponible pour revue Morris** (`20`–`22`). Aucune technologie Runtime n’est sélectionnée. Aucune intégration réelle Studio ↔ Git ↔ Cursor ↔ orchestrateur n’est autorisée avant gates distincts.
 
 ---
 
@@ -220,20 +203,22 @@ Pré-cadrage
 | Livrable | `projects/sfia-studio/app/` sur `main` @ `759ab0b…` |
 | Ne lance pas | POC orchestration ; Git/Cursor réels ; CI Studio |
 
-### 4.6 Cadrage POC orchestration (prochain)
+### 4.6 Cadrage POC orchestration (Option B)
 
 | Champ | Contenu |
 |-------|---------|
-| Statut | **Sélectionné** (Option B Morris) — **non démarré** |
-| Objectif | Définir un POC d’orchestration borné (faisabilité) |
-| Ne lance pas | Architecture POC détaillée ; code ; outil Runtime ; MVP |
+| Statut | **Exécuté localement** — docs `20`/`21`/`22` — **en revue** — **non validé** |
+| Scénario recommandé | S1 — DOC read-only gouverné (`21`) — **non sélectionné** |
+| Décisions | POC-CAND-01…10 **candidates** |
+| Gates | POC-G1…G10 **PROPOSÉS / NON VALIDÉS** |
+| Ne lance pas | POC ; architecture Runtime ; backlog ; delivery ; MVP |
 
 ### 4.7 Sécurité (bornée)
 
 | Champ | Contenu |
 |-------|---------|
 | Déclencheur | Avant POC à permissions élevées |
-| Pourquoi pas maintenant | Identification déjà faite au cadrage ; sujets à rouvrir dans le cadrage POC |
+| Dans le cadrage | Secrets interdits ; write distant simulé ; L5 interdit |
 
 ---
 
@@ -269,9 +254,12 @@ Pré-cadrage
 | D-NEXT-10 | **D-VAL-11** — clôture cadrage documentaire | Morris | **VALIDÉE** — 2026-07-18 |
 | D-NEXT-11 | Sort de la branche projet historique | Morris | Conservée ; décision distincte |
 | D-NEXT-12 | Sort de `project/sfia-studio-functional-design` | Morris | Conservée ; décision distincte |
-| D-NEXT-13 | GO capitalisation documentaire post-P0 | Morris | **Consommée** (ce cycle) |
-| D-NEXT-14 | GO commit / push / PR capitalisation | Morris | **Attendue** |
-| D-NEXT-15 | GO cadrage POC orchestration | Morris | **Attendue** après intégration capitalisation |
+| D-NEXT-13 | GO capitalisation documentaire post-P0 | Morris | **Consommée** + **intégrée** (PR #218) |
+| D-NEXT-14 | GO commit / push / PR capitalisation | Morris | **FAIT** (PR #218) |
+| D-NEXT-15 | GO cadrage POC orchestration | Morris | **Consommée** — cadrage local produit |
+| D-NEXT-16 | Validation POC-CAND / POC-G1…G6 | Morris | **Ouverte** |
+| D-NEXT-17 | POC-G10 versionnement cadrage | Morris | **Ouverte** |
+| D-NEXT-18 | Architecture / delivery POC | Morris | **Bloquée** tant que gates non validés |
 
 ---
 
@@ -333,11 +321,11 @@ Les gates DF-G4+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 ## 8. Questions Morris
 
-1. Autorisez-vous **commit / push / PR** de la capitalisation documentaire (README + `07`) ?
-2. Après intégration : autorisez-vous le **GO cadrage POC orchestration** ?
-3. Clôturez-vous formellement le cycle architecture fonctionnelle (décision **distincte**) ?
-4. Quel sort pour les branches historiques restantes ?
-5. Quelles réserves P0 (responsive / a11y / CI / postcss) prioriser avant ou pendant le POC ?
+1. Validez-vous le cadrage `20`–`22` (POC-G1…G6 / POC-CAND) ?
+2. Sélectionnez-vous le scénario **S1** ?
+3. Autorisez-vous **commit / push / PR** du cadrage (POC-G10) ?
+4. Après intégration : GO architecture POC (POC-G7) ou autre priorité ?
+5. Clôture formelle architecture fonctionnelle (distincte) ?
 
 ---
 
@@ -345,17 +333,12 @@ Les gates DF-G4+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Critère | État |
 |---------|------|
-| 04–07 complets et cohérents | **Oui** (07 synchronisé post-P0) |
-| Alignement D-VAL-1…11 / G1–G7 / DF-G1 | **Oui** |
-| DF-G1 validé | **Oui** (D-VAL-9) |
-| Clôture formelle cadrage | **FAIT** (D-VAL-11) |
-| Cycle conception | **CLÔTURÉ** |
-| Architecture fonctionnelle | **VALIDÉE** / **INTÉGRÉE** — clôture formelle ouverte |
-| UX/UI | **CLÔTURÉ** |
-| Architecture technique P0 | **VALIDÉE** / **INTÉGRÉE** |
-| Delivery P0 | **CLÔTURÉ** (PR #217) |
-| Prochain cycle | **Cadrage POC orchestration** — sélectionné, non lancé |
-| MVP / industrialisation / Runtime réel | **Non engagés** |
+| 04–07 cohérents | **Oui** (07 mis à jour pour référencer `20`–`22`) |
+| Delivery P0 | **CLÔTURÉ** |
+| Capitalisation P0 | **INTÉGRÉE** (PR #218) |
+| Cadrage POC `20`–`22` | **Produit localement** — **non validé** |
+| POC lancé | **Non** |
+| MVP / industrialisation | **Non engagés** |
 
 ---
 
@@ -363,13 +346,13 @@ Les gates DF-G4+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Élément | Valeur |
 |---------|--------|
-| Delivery P0 | **CLÔTURÉ** — `759ab0b…` / PR #217 |
-| Statut produit | `p0-delivery-integrated-next-poc-orchestration-framing` |
-| Option B POC | **Sélectionnée** — cadrage **non démarré** |
-| Ready for POC code / Runtime | **Non** |
-| Ready for Morris capitalisation review | **Oui** |
+| Cadrage POC | **READY FOR MORRIS REVIEW** (local) |
+| Statut | `poc-orchestration-framing-ready-for-review` |
+| POC-CAND validées | **Aucune** |
+| Ready for POC delivery | **Non** |
+| Ready for commit projet | **Non** — attend POC-G10 |
 
-**Verdict :** `CAPITALIZATION COMPLETE — P0 STATUS SYNCHRONIZED — POC ORCHESTRATION FRAMING READY`
+**Verdict :** `POC ORCHESTRATION FRAMING READY FOR MORRIS REVIEW`
 
 ---
 
@@ -380,17 +363,12 @@ Les gates DF-G4+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 | [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
 | [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
 | [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
-| [08-functional-design.md](./08-functional-design.md) | Conception — contrat **validé / intégré** |
-| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Conception — parcours **validés** |
-| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Conception — pack de **validation / clôture** |
-| [11-functional-architecture.md](./11-functional-architecture.md) | Architecture — **VALIDÉE** et **INTÉGRÉE** |
-| [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux / frontières — D10 → AF-01 / AF-15 |
-| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option / AF-CAND |
-| [14-ux-ui-contract.md](./14-ux-ui-contract.md) | UX/UI — contrat |
-| [15-ux-ui-flows-and-screens.md](./15-ux-ui-flows-and-screens.md) | UX/UI — écrans P0 |
-| [16-ux-ui-decision-pack.md](./16-ux-ui-decision-pack.md) | UX/UI — décisions |
-| [18-technical-architecture.md](./18-technical-architecture.md) | Architecture technique P0 |
-| [19-technical-architecture-decision-pack.md](./19-technical-architecture-decision-pack.md) | TA-DEC (historique « delivery autorisé ») |
-| [app/README.md](./app/README.md) | Runtime P0 intégré |
-
-*SFIA Studio — Delivery P0 CLÔTURÉ (PR #217) — prochaine orientation = cadrage POC orchestration (Option B, non lancé) — clôture architecture fonctionnelle NON PRONONCÉE — Morris décide.*
+| [08-functional-design.md](./08-functional-design.md) | Conception |
+| [11-functional-architecture.md](./11-functional-architecture.md) | AF-Option C / L0–L5 |
+| [18-technical-architecture.md](./18-technical-architecture.md) | Tech P0 |
+| [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Cadrage POC |
+| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario / frontières |
+| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates |
+| [app/README.md](./app/README.md) | Runtime P0 |
+
+*SFIA Studio — cadrage POC EN REVUE — POC NON LANCÉ — Morris décide.*

```

## 13. Réserves

- Techno orchestrateur non choisie (volontaire)
- Contrat d’événements conceptuel seulement
- Harness vs UI P0 non tranché
- Write Git distant exclu du 1er POC (garde-fou)
- Clôture AF formelle toujours ouverte
- Réserves P0 hors scope

## 14. Stop conditions

Aucune STOP rencontrée.

## 15. Décisions Morris requises

1. Valider POC-CAND-01…06 (ou amender)
2. Sélectionner S1 (POC-G2)
3. POC-G10 commit/push/PR cadrage
4. Ensuite POC-G7 architecture — pas delivery immédiat

## 16. Verdict final

**POC ORCHESTRATION FRAMING READY FOR MORRIS REVIEW**
