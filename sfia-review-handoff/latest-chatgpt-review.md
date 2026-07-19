# ChatGPT Review Pack — SFIA Studio POC Architecture (POC-G7) — Cycle 6 Critical

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-19 13:30:33 CEST |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical — séparation Studio/orch., contracts, allowlist, Cursor, Git, preuves, stop |
| **Typologie** | EVOL / DOC / ARCH |
| **Décision Morris** | GO architecture POC — **POC-G7 OUVERT** (instruction) — **NON VALIDÉ** |
| **Branche** | `architecture/sfia-studio-poc-orchestration` (**locale**, non poussée) |
| **HEAD / origin/main** | `b882892d79709acd0637d0df872c16bbe16d7ed1` |
| **PR sync** | #220 **MERGED** |
| **Niveau** | **full** |
| **Handoff** | required |

---

## 1. Local Git Truth Check

PASS — main@`b882892…` ; 5 docs cadrage présents ; POC-G1…G6 validés ; G8/G9 fermés ; POC non lancé.

---

## 2. Sources consultées

- Template cycle + règles archi/sécurité
- `README`, `07`, `20`, `21`, `22`
- `11` AF-Option C / L0–L5 ; `18` tech P0
- `app/README.md`, `app/package.json` (lecture)
- Handoff précédent `sfia/review-handoff`

---

## 3. Analyse repo

Next 15 fixtures-only ; pas d’API/orchestrateur ; Git/Cursor simulés UI ; aucune API Cursor dans le repo → port Cursor + modes fixture/manual.

---

## 4. Options A/B/C

| Option | Verdict candidat |
|--------|------------------|
| A harness autonome | **Recommandée** |
| B harness + adaptateur Studio | Reportée |
| C orch. dans app | Écartée premier POC |

---

## 5. Recommandation

Option A — harness local autonome ; ports Git/Cursor ; Studio inchangé ; preuves locales.

---

## 6. ARCH-POC-CAND-01…12

Voir `25` — toutes **CANDIDATES** (non validées).

---

## 7. Gates

| Gate | Statut |
|------|--------|
| POC-G7 instruction | **OUVERT** |
| POC-G7 validation | **EN ATTENTE** Morris |
| POC-G8 / G9 | **FERMÉS** |
| Versionnement 23–25 | **NON ACCORDÉ** |
| POC | **NON LANCÉ** |

---

## 8. Fichiers

Créés : `23`, `24`, `25`  
Modifiés : `README`, `07`, `20`, `21`, `22`  
Aucun staged · aucun app/** · branche non poussée.

---

## 9. Contenu complet — 23

```markdown
# SFIA Studio — Architecture technique POC orchestration (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `23-poc-orchestration-technical-architecture.md` |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Typologie** | EVOL / DOC / ARCH |
| **Branche** | `architecture/sfia-studio-poc-orchestration` (**locale**, non poussée) |
| **Base** | `origin/main` @ `b882892d79709acd0637d0df872c16bbe16d7ed1` (PR #220) |
| **Statut** | **CANDIDATE** — POC-G7 **OUVERT** pour instruction ; architecture **NON VALIDÉE** |
| **Complète** | `24` (contrats/sécurité) · `25` (decision pack) |
| **POC** | **Non lancé** |
| **POC-G8 / G9** | **FERMÉS** |
| **Runtime / techno** | **Non sélectionnés** (recommandation candidate uniquement) |

> Architecture **candidate**. Morris valide, corrige ou rejette. Aucun code, backlog, delivery ou lancement POC dans ce cycle.

---

## 1. Contexte

### 1.1 Acquis Git

| Fait | Référence |
|------|-----------|
| Cadrage POC validé | PR #219 / `be713c45…` |
| Sync post-merge intégrée | PR #220 / `b882892…` — **MERGED** |
| Delivery P0 | PR #217 — app Next.js 15 fixtures-only |
| AF-Option C | Studio / orchestrateur **séparés** — VALIDÉE |
| Tech P0 | `18`/`19` — Runtime **non contractuel** en P0 |

### 1.2 Objectif de preuve (S1 — inchangé)

Démontrer localement, de façon déterministe, bornée, observable, stoppable, reproductible et réversible :

```text
Intention → qualification GPT → gate Morris (GO) → orchestrateur
  → (rejet hors allowlist obligatoire)
  → Cursor read-only borné → preuves → verdict candidat → décision Morris
```

Sans seconde vérité, sans écriture Git distante réelle, sans automatiser L0.

### 1.3 Question d’architecture

Quelle architecture technique **minimale** prouve S1 sous macOS local Morris, cohérente avec AF-Option C et le repo existant, sans préparer le MVP ?

---

## 2. Exigences

| ID | Exigence | Priorité |
|----|----------|----------|
| E1 | Séparation Studio / orchestrateur (AF-Option C) | Obligatoire |
| E2 | Git = seule vérité durable | Obligatoire |
| E3 | L0 exclusif Morris ; timeout ≠ GO | Obligatoire |
| E4 | Lecture Git réelle ; writes distantes **simulées** | Obligatoire |
| E5 | Rejet hors allowlist **obligatoire** dans la démo | Obligatoire |
| E6 | Cursor exécute un contrat ; n’arbitre pas | Obligatoire |
| E7 | Journal corrélé + preuve reconstructible | Obligatoire |
| E8 | Stop / reprise contrôlés | Obligatoire |
| E9 | Réversible ; workspace de preuve jetable | Obligatoire |
| E10 | Aucun secret réel | Obligatoire |
| E11 | L3 cible ; L4* plafond chemin ; L5 global interdit | Obligatoire |
| E12 | Techno POC ≠ Runtime produit | Obligatoire |
| E13 | Zéro modification `app/**` dans le premier POC si Option A | Recommandé |

---

## 3. Principes

| ID | Principe |
|----|----------|
| P1 | Repo-first — Git prime ; états dérivés |
| P2 | Décision ≠ exécution |
| P3 | Least privilege — allowlist explicite |
| P4 | Fail closed — doute = rejet / stop |
| P5 | Simplicité locale — pas de service managé |
| P6 | Preuve avant intégration UI |
| P7 | Adapter ports — Cursor/Git derrière interfaces |
| P8 | POC jetable — dette bornée |
| P9 | Incertitude Cursor documentée — pas d’API inventée |

---

## 4. Analyse repo (lecture seule)

| Observation | Implication POC |
|-------------|-----------------|
| `projects/sfia-studio/app/` = Next 15 / React 19 / TS / fixtures | UI P0 **ne** contient **pas** d’orchestrateur |
| Pas d’`app/api`, auth, BDD | Intégration UI = dette + risque seconde vérité |
| Git/Cursor **simulés** dans l’UI | Preuve S1 **ne** peut **pas** s’appuyer sur l’UI actuelle |
| Stack TS/npm dominante dans le monorepo | Harness Node/TS candidat **aligné** (non validé) |
| Aucune API Cursor versionnée dans le repo | Invocation Cursor = **incertitude** → port + modes fixture/manuel |

---

## 5. Options A / B / C

### 5.1 Option A — Harness local autonome (**recommandée candidate**)

**Description :** CLI / processus local hors `app/**`. Entrée = fixtures JSON + fichier GO Morris. Studio **non modifié**.

| Critère | Évaluation |
|---------|------------|
| Avantages | Preuve pure S1 ; zéro couplage UI ; AF-Option C stricte ; réversible ; testable |
| Inconvénients | Ne prouve pas le branchement UI↔orch. |
| Sécurité | Surface minimale |
| Dette | Faible si chemin dédié `poc-harness/` (candidat) |
| Aptitude S1 | **Forte** |
| MVP | Non préparé |

### 5.2 Option B — Harness + adaptateur Studio minimal

Intention depuis UI ou export fixture ; adaptateur → harness. Orchestration séparée.

| Critère | Évaluation |
|---------|------------|
| Avantages | Prépare intégration sans fondre Runtime dans Next |
| Inconvénients | Touche UI ou ajoute couche ; plus tôt |
| Aptitude S1 | Bonne mais **surdimensionnée** pour première preuve |
| Condition de bascule | Après GO Option A + besoin démo cockpit |

### 5.3 Option C — Orchestrateur dans l’application Studio

Route/composant Next local.

| Critère | Évaluation |
|---------|------------|
| Avantages | UX unifiée |
| Inconvénients | Couplage ; risque seconde vérité ; viole esprit AF-Option C ; touche `app/**` |
| Aptitude S1 | Possible mais **risquée** |
| Recommandation | **Écarter** pour premier POC |

### 5.4 Challenge obligatoire

| Question | Réponse |
|----------|---------|
| Utile maintenant ? | Oui — débloque POC-G8 après validation |
| Dette ? | Option A minimise |
| Plus simple ? | A > B > C |
| Repo-first ? | Oui |
| Prouve S1 ? | A oui ; B partiel UI ; C confond |
| Prépare MVP inutilement ? | C oui ; A non |
| Sépare décision/exécution ? | A/B oui ; C fragile |
| Git = vérité ? | A/B oui ; C risque UI |

---

## 6. Architecture logique candidate (Option A)

```text
[Morris] --GO/STOP fichier--> [Harness CLI]
[ChatGPT] --qualification/contrats (hors bande)--> artefacts locaux
[Harness Orchestrator]
   ├─ GateValidator (GO scope/expiry/revocation)
   ├─ PolicyEngine (allowlist/denylist)
   ├─ GitReaderPort (read-only réel)
   ├─ CursorExecutorPort (adapter ; modes: fixture|manual|future)
   ├─ EventJournal + ProofStore (local)
   └─ StateMachine (dérivée, reconstructible)
[Git repo] <--lecture-- GitReaderPort
[Cursor IDE / agent] <--contrat-- CursorExecutorPort (si mode réel futur)
```

Studio P0 reste **observateur / futur adaptateur** — hors chemin critique POC-G7 Option A.

---

## 7. Composants et responsabilités

| Composant | Responsabilité | Interdit |
|-----------|----------------|----------|
| **Harness CLI** | Entrée unique ; charge fixtures ; orchestre | Décider L0 |
| **Orchestrator core** | Appliquer contrat ; transitions | Auto-GO |
| **GateValidator** | Valider GO | Inventer GO |
| **PolicyEngine** | Allow/deny ; rejet | Élévation |
| **GitReaderPort** | `status`/`rev-parse`/`diff`/`log` lecture | push/commit/PR/merge |
| **CursorExecutorPort** | Exécuter contrat read-only ou simuler | Sortir allowlist |
| **EventJournal** | Événements ordonnés | Vérité produit |
| **ProofStore** | Artefacts locaux | Secrets |
| **Studio P0** | Hors POC A | Moteur d’exécution |
| **GPT** | Qualification hors bande | Commander orch. |
| **Morris** | GO / STOP / clôture | — |

---

## 8. Flux

### 8.1 Nominal

```text
LOAD fixtures → QUALIFY (artefacts GPT) → GATE_OPEN
  → Morris GO fichier → AUTHORIZED
  → PRECHECK Git + policy → ORCHESTRATING
  → EXECUTING (CursorPort) → PROOF_READY
  → verdict candidat GPT → Morris CLOSE → CLOSED
```

### 8.2 Rejet hors allowlist (obligatoire)

```text
AUTHORIZED → demande action deny → REJECTED
  → event orchestrator.rejected → pas Cursor write
  → correction contrat + **nouveau GO** → reprise
```

### 8.3 Stop / reprise

```text
ORCHESTRATING|EXECUTING → STOP Morris|sécurité → STOPPED
  → pas de retry auto → nouveau GO si reprise
```

Détails : document `24`.

---

## 9. Modèle d’état (technique)

États cadrage `21` confirmés : `DRAFT`, `QUALIFIED`, `GATE_OPEN`, `AUTHORIZED`, `ORCHESTRATING`, `EXECUTING`, `PROOF_READY`, `STOPPED`, `REJECTED`, `FAILED`, `CLOSED`.

| Règle | Contenu |
|-------|---------|
| Persistance | Journal + artefacts locaux ; **pas** BDD |
| Reconstruction | Depuis journal + Git HEAD observé |
| Auteur transitions L0 | Morris uniquement (`AUTHORIZED`, `CLOSED`, `STOPPED` volontaire) |
| Transitions interdites | `GATE_OPEN`→`EXECUTING` sans GO ; timeout→`AUTHORIZED` |

---

## 10. Git

| Autorisé (lecture) | Interdit (POC initial) |
|--------------------|------------------------|
| `rev-parse`, `status`, `diff`, `log`, `show`, `ls-files` | `commit`, `push`, `fetch` write, `merge`, `rebase`, `branch -D` remote, API GitHub write |

Preuve d’absence d’effet remote : capture `git status`/`rev-parse` avant/après + assertion `gitEffect: none-remote`.

---

## 11. Cursor — incertitude et stratégie

| Fait | Conséquence |
|------|-------------|
| Aucune API Cursor contractuelle dans le repo | **Ne pas inventer** |
| Cursor = outil opérateur / agent IDE | Invocation réelle = **hypothèse** |

**Port `CursorExecutorPort` :**

| Mode | Usage |
|------|-------|
| `fixture` | Replay déterministe pour tests / CI locale harness |
| `manual` | Opérateur exécute le contrat dans Cursor ; harness vérifie preuves |
| `adapter-future` | Placeholders seulement — **nécessite preuve technique** avant activation |

Le POC peut **compléter** S1 en mode `manual` + `fixture` pour le rejet ; le mode réel reste une **réserve** (ARCH-POC-CAND).

---

## 12. Persistance et environnement

| Élément | Choix candidat |
|---------|----------------|
| Preuves | `projects/sfia-studio/.poc-proof/<executionId>/` (gitignored candidat) |
| Journal | JSONL local ordonné |
| Config | Fichiers YAML/JSON versionnés sous harness |
| Runtime | Processus Node one-shot ; **pas** daemon permanent |
| OS | macOS local Morris |

---

## 13. Dépendances (candidates — non installées)

| Dépendance | Statut |
|------------|--------|
| Node/npm déjà présents (Studio) | Réutiliser |
| Libs nouvelles | **À justifier** en backlog ; zéro install ce cycle |
| Service cloud | **Non** |
| BDD | **Non** |

---

## 14. Stratégie de test (future — POC-G8/G9)

1. Tests unitaires PolicyEngine (allow/deny).
2. Tests GateValidator (expiry, revoke, scope).
3. Tests d’intégration GitReader (repo fixture).
4. Scénario S1 dry-run mode fixture.
5. Scénario rejet hors allowlist (obligatoire).
6. Scénario stop.
7. Assertion aucune mutation remote.
8. Démo manuelle mode `manual` (réserve Cursor).

Aucun test exécuté dans ce cycle.

---

## 15. Recommandation

**Recommander Option A — harness local autonome**, avec ports d’adaptation futurs (B), **sans** modifier `app/**` pour le premier POC.

| Prouve | Ne prouve pas |
|--------|---------------|
| Boucle orch. + gates + allowlist + rejet + journal | UX Studio branchée |
| Lecture Git réelle + absence write remote | API Cursor native |
| Stop/reprise | Performance / industrialisation |

**Bascule vers B :** après validation + exécution A réussie + besoin démo cockpit.
**Abandon :** si preuve S1 impossible sans write remote, ou si Cursor/manual insuffisant et aucun adapter viable.

---

## 16. Réserves

1. Invocation Cursor réelle non prouvée.
2. Chemin exact harness / gitignore à figer en backlog.
3. Allowlist chemins détaillée à finaliser.
4. Option B/C non écartées définitivement hors premier POC.
5. Clôture AF formelle toujours ouverte (séparée).

---

## 17. Hors périmètre

Code · backlog · delivery · MVP · Runtime produit · CI · modification `app/**` · écritures distantes · secrets · versionnement sans GO.

---

*Architecture POC CANDIDATE — POC-G7 ouvert instruction — NON VALIDÉE — Option A recommandée — POC NON LANCÉ — Morris décide.*
```

---

## 10. Contenu complet — 24

```markdown
# SFIA Studio — Contrats, sécurité et observabilité POC orchestration (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `24-poc-orchestration-contracts-security-and-observability.md` |
| **Complète** | `23` · `25` |
| **Statut** | **CANDIDATE** — POC-G7 instruction ; **NON VALIDÉ** |
| **POC** | **Non lancé** |
| **Base** | `main` @ `b882892…` |

> Contrats **conceptuels** — pas d’OpenAPI validée. Aucune API Cursor inventée.

---

## 1. Identifiants de corrélation

| ID | Portée |
|----|--------|
| `requestId` | Intention / demande |
| `cycleId` | Cycle SFIA de preuve |
| `gateId` | Décision Morris |
| `executionId` | Tentative d’exécution |
| `contractHash` | Empreinte du contrat allowlisté |

Tous les événements portent au minimum `requestId` + `executionId` (si pertinent) + timestamp Europe/Paris.

---

## 2. Contrats conceptuels

### 2.1 OrchestrationRequest

| Champ | Obligatoire | Invariant |
|-------|-------------|-----------|
| `requestId` | Oui | UUID/ULID stable |
| `cycleId` | Oui | |
| `scenario` | Oui | `S1` |
| `gateDecision` | Oui avant exec | Voir §3 |
| `allowlist` | Oui | Non vide |
| `denylist` | Oui | Inclut writes distantes |
| `executionContract` | Oui | `tool=cursor`, `mode=read-only` |
| `gitContext` | Oui | repo/branch/headSha observés |
| `proofDir` | Oui | Chemin local |

**Invariant :** absense de `gateDecision` valide ⇒ rejet ; pas d’exécution.

### 2.2 GateDecision (Morris)

| Champ | Obligatoire | Règle |
|-------|-------------|-------|
| `decision` | Oui | `GO` \| `CORRIGER` \| `STOP` \| `CLOSE` |
| `gateId` | Oui | |
| `scope` | Oui | Texte borné + `contractHash` |
| `issuedAt` | Oui | ISO + TZ |
| `expiresAt` | Oui | Après `issuedAt` |
| `revocable` | Oui | `true` pour POC |
| `revokedAt` | Si révoqué | |
| `operator` | Oui | Morris |

**Interdits :** timeout = GO ; GO implicite ; GO sans `contractHash` ; réutilisation après modification contrat.

### 2.3 Allowlist / Denylist

**Allowlist (candidate S1) :**

| Classe | Exemples |
|--------|----------|
| Paths read | `projects/sfia-studio/**`, `prompts/**`, `sfia/**` méthode (lecture) |
| Actions | `git.read.*`, `fs.read`, `cursor.analyze`, `proof.write.local` |
| Git | `rev-parse`, `status`, `diff`, `log`, `show`, `ls-files` |

**Denylist (obligatoire) :**

| Action |
|--------|
| `git.commit` / `git.push` / `git.merge` / `git.rebase` |
| `github.pr.create` / `github.merge` / `branch.delete.remote` |
| `shell.unrestricted` / `secret.read` / `fs.write` hors `proofDir` |
| Toute action absente de l’allowlist (**fail closed**) |

### 2.4 ExecutionContract (Cursor)

| Champ | Règle |
|-------|-------|
| `tool` | `cursor` |
| `mode` | `read-only` |
| `adapterMode` | `fixture` \| `manual` \| `adapter-future` |
| `inputs` | Chemins allowlistés |
| `outputs` | Uniquement sous `proofDir` |
| `timeoutSec` | Borne explicite |
| `stopSignal` | Supporté |

**Pas** de schéma d’API Cursor vendor — le contrat décrit l’intention ; l’adapter traduit ou simule.

### 2.5 OrchestrationResult

| Champ | Valeurs |
|-------|---------|
| `status` | `accepted` \| `rejected` \| `stopped` \| `completed` \| `failed` |
| `events[]` | Ordonnés |
| `proofs[]` | Chemins locaux |
| `gitEffect` | **Toujours** `none-remote` en POC initial |
| `error?` | Code + message redacted |

### 2.6 Event

| Champ | Obligatoire |
|-------|-------------|
| `ts` | Oui (Europe/Paris) |
| `type` | Oui |
| `requestId` | Oui |
| `executionId` | Si applicable |
| `payload` | Redacted |

Types minimaux : `gate.received`, `gate.rejected`, `policy.rejected`, `git.precheck`, `execution.started`, `execution.completed`, `execution.stopped`, `proof.written`, `orchestrator.rejected`, `orchestrator.failed`.

---

## 3. Gate Morris — contrôles

| Contrôle | Comportement |
|----------|--------------|
| Signature/fichier GO | Présent et lisible |
| `expiresAt` | Si dépassé ⇒ rejet |
| `revokedAt` | Si présent ⇒ rejet |
| `contractHash` | Doit matcher contrat courant |
| Scope | Doit couvrir S1 + allowlist |
| Absence de réponse | Reste `GATE_OPEN` — **jamais** GO |
| Modification contrat | Invalide GO précédent |

---

## 4. Modèle d’état — transitions

| De | Vers | Auteur | Condition |
|----|------|--------|-----------|
| DRAFT | QUALIFIED | Opérateur/GPT artefacts | Contrat candidat |
| QUALIFIED | GATE_OPEN | Harness | Dossier gate prêt |
| GATE_OPEN | AUTHORIZED | Morris | GO valide |
| AUTHORIZED | ORCHESTRATING | Orch. | Prechecks OK |
| ORCHESTRATING | EXECUTING | Orch. | CursorPort start |
| EXECUTING | PROOF_READY | Orch. | Collecte OK |
| PROOF_READY | CLOSED | Morris | CLOSE |
| * | REJECTED | Orch. | Policy/gate fail |
| * | STOPPED | Morris/sécurité | STOP |
| * | FAILED | Orch. | Erreur technique |
| REJECTED/STOPPED | GATE_OPEN/AUTHORIZED | Morris | Nouveau GO + contrat |

**Interdit :** GATE_OPEN→EXECUTING ; EXECUTING→CLOSED sans PROOF_READY/STOP/FAIL ; auto-AUTHORIZED.

**Réversibilité :** états dérivés ; reprise = nouveau `executionId` ; pas de mutation remote à annuler.

---

## 5. Sécurité

### 5.1 Menaces et contrôles

| Menace | Contrôle |
|--------|----------|
| Auto-arbitrage | GateValidator ; pas de timeout=GO |
| Write remote | Denylist + assertion gitEffect |
| Path traversal | Canonicalisation paths ; racines allowlist |
| Symlinks | Résolution + refus hors racines |
| Command injection | Pas de shell libre ; argv structurés |
| Prompt injection | CursorPort borné ; outputs sous proofDir |
| Secrets | Interdit en fixtures ; redaction journal |
| Privilege escalation | Fail closed deny |
| Log leakage | Redaction patterns |
| Dépendances | Aucune install ce cycle ; audit futur |

### 5.2 Least privilege

Processus harness = utilisateur Morris local ; pas de sudo ; working directory borné ; env filtré (pas de tokens GitHub write).

### 5.3 Stop sécurisé

| Trigger | Action |
|---------|--------|
| STOP Morris | Interrupt CursorPort ; flush journal ; STOPPED |
| Deny mid-flight | Abort ; REJECTED |
| Divergence Git inattendue | STOPPED/FAILED |
| Timeout | FAILED — **pas** COMPLETED |

---

## 6. Observabilité et preuve

### 6.1 Journal

- Format JSONL append-only local.
- Ordre strict ; monométrie `ts`.
- Corrélation IDs §1.
- Conservé sous `proofDir/events.jsonl`.

### 6.2 Preuves minimales S1

| Preuve | Obligatoire |
|--------|-------------|
| Fichier GO Morris | Oui |
| `orchestrator.rejected` hors allowlist | Oui |
| Git HEAD avant/après | Oui |
| Assertion `none-remote` | Oui |
| Artefacts Cursor/manual ou fixture | Oui |
| Absence de secrets | Oui (scan basique futur) |

### 6.3 Reconstruction

Un opérateur doit pouvoir rejouer le récit : IDs → événements → preuves → décisions, **sans** BDD.

### 6.4 Démo / reset

1. Créer workspace preuve / `proofDir` neuf.
2. Charger fixtures S1.
3. Exécuter nominal + rejet.
4. Archiver `proofDir` ou supprimer (réversible).
5. Vérifier remote inchangé.

---

## 7. Erreurs

| Code | Sens | Transition |
|------|------|------------|
| `GATE_INVALID` | GO manquant/expiré/hash | REJECTED |
| `POLICY_DENY` | Hors allowlist | REJECTED |
| `GIT_DIVERGENCE` | HEAD inattendu | STOPPED/FAILED |
| `CURSOR_TIMEOUT` | Timeout | FAILED |
| `CURSOR_OUT_OF_SCOPE` | Sortie contrat | STOPPED |
| `INTERNAL` | Bug harness | FAILED |

---

## 8. Stop et reprise

| Cas | Reprise |
|-----|---------|
| STOP volontair | Nouveau GO requis |
| REJECT policy | Corriger contrat + nouveau GO |
| FAILED technique | Diagnostic ; nouveau `executionId` |
| Idempotence read-only | Relance sans effet remote |

---

## 9. Réversibilité

| Autorisé | Interdit |
|----------|----------|
| Écriture locale `proofDir` | Commit/push/PR/merge |
| Fixtures | Secrets |
| Journal local | Vérité UI exclusive |

Nettoyage : supprimer `proofDir` ; checkout inchangé.

---

## 10. Critères d’acceptation architecture (pour validation Morris)

1. Option A/B/C comparées ; recommandation distincte de décision.
2. AF-Option C respectée.
3. Contrats §2 complets conceptuellement.
4. Rejet hors allowlist imposé.
5. Writes distantes absentes du chemin nominal.
6. Cursor via port + modes ; pas d’API inventée.
7. États/transitions cohérents avec `21`.
8. Sécurité §5 couverte.
9. Preuve/observabilité §6 couvertes.
10. POC-G8/G9 non ouverts ; POC non lancé.

---

*Contrats/sécurité CANDIDATES — POC-G7 instruction — NON VALIDÉS — Morris décide.*
```

---

## 11. Contenu complet — 25

```markdown
# SFIA Studio — Decision pack architecture POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `25-poc-orchestration-architecture-decision-pack.md` |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Statut** | **CANDIDATE** — POC-G7 **OUVERT** instruction ; décisions **NON VALIDÉES** |
| **Préfixe** | `ARCH-POC-CAND-*` (locaux ; ≠ D-VAL) |
| **POC** | **Non lancé** |
| **POC-G8 / G9** | **FERMÉS** |
| **Base** | `main` @ `b882892…` (PR #220 MERGED) |

> Morris valide / corrige / rejette. Aucun versionnement projet sans GO distinct.

---

## 1. Observations factuelles

1. PR #219 cadrage **MERGED** (`be713c45…`).
2. PR #220 sync post-merge **MERGED** (`b882892…`).
3. POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ**.
4. POC-G7 **OUVERT** pour instruction (présent cycle) — **pas encore VALIDÉ**.
5. App P0 : Next fixtures ; Git/Cursor simulés ; pas d’orchestrateur.
6. Aucune API Cursor dans le repo.
7. AF-Option C : Studio / orch. séparés.
8. S1 + rejet allowlist + writes distantes simulées = contrat cadrage.

---

## 2. Hypothèses

| ID | Hypothèse | Statut |
|----|----------|--------|
| H1 | Harness local suffit pour prouver S1 | Candidate |
| H2 | Node/TS aligné monorepo convient au harness | Candidate |
| H3 | Mode Cursor `manual`+`fixture` suffit pour première preuve | Candidate |
| H4 | Adapter UI (Option B) reportable | Candidate |
| H5 | Pas de service managé nécessaire | Candidate |
| H6 | Chemin preuves local gitignored acceptable | Candidate |

---

## 3. Options (rappel)

| Option | Intitulé | Verdict candidat |
|--------|----------|------------------|
| **A** | Harness local autonome | **Recommandée** |
| **B** | Harness + adaptateur Studio | Reportée (bascule conditionnelle) |
| **C** | Orch. dans app Studio | **Écartée** premier POC |

Détail : `23` §5.

---

## 4. Comparaison synthétique

| Critère | A | B | C |
|---------|---|---|---|
| Preuve S1 | ★★★ | ★★ | ★★ |
| AF-Option C | ★★★ | ★★★ | ★ |
| Simplicité | ★★★ | ★★ | ★ |
| Sécurité surface | ★★★ | ★★ | ★ |
| Dette UI | ★★★ | ★★ | ★ |
| Prépare MVP trop tôt | Non | Peu | Oui |

---

## 5. Impacts / risques / dette

| Thème | Impact |
|-------|--------|
| Positif | Preuve isolée ; zéro `app/**` ; fail closed |
| Risque | Cursor réel non prouvé |
| Risque | Démo sans UI moins « produit » |
| Dette évitée | Couplage Next/Runtime |
| Dette acceptée | Harness jetable à maintenir court terme |

---

## 6. Recommandation

**Option A** — harness local autonome, ports Git/Cursor, preuves locales, Studio inchangé.

Distinct de la **décision** Morris (ci-dessous).

---

## 7. Décisions candidates ARCH-POC-CAND-*

| ID | Décision candidate | Statut |
|----|--------------------|--------|
| **ARCH-POC-CAND-01** | Adopter Option A (harness local autonome) pour le premier POC S1 | **CANDIDATE** |
| **ARCH-POC-CAND-02** | Écarter Option C pour le premier POC | **CANDIDATE** |
| **ARCH-POC-CAND-03** | Reporter Option B jusqu’à preuve A + besoin cockpit | **CANDIDATE** |
| **ARCH-POC-CAND-04** | Orchestrateur = processus CLI local déterministe (forme) ; techno d’implémentation ouverte (TS/Node candidat) | **CANDIDATE** |
| **ARCH-POC-CAND-05** | Cursor via `CursorExecutorPort` modes `fixture`\|`manual`\|`adapter-future` ; pas d’API inventée | **CANDIDATE** |
| **ARCH-POC-CAND-06** | Git read réel ; denylist writes distantes ; `gitEffect=none-remote` | **CANDIDATE** |
| **ARCH-POC-CAND-07** | Contrats / états / transitions selon `24` (alignés `21`) | **CANDIDATE** |
| **ARCH-POC-CAND-08** | Preuves sous répertoire local dédié ; journal JSONL | **CANDIDATE** |
| **ARCH-POC-CAND-09** | Aucune modification `projects/sfia-studio/app/**` dans le premier POC (Option A) | **CANDIDATE** |
| **ARCH-POC-CAND-10** | Après validation + intégration archi → seule porte suivante = décision **POC-G8** (pas delivery direct) | **CANDIDATE** |
| **ARCH-POC-CAND-11** | Architecture POC ≠ Runtime produit ; L4* reste plafond chemin | **CANDIDATE** |
| **ARCH-POC-CAND-12** | Versionnement docs `23`–`25` = GO Morris distinct (commit/push/PR) | **CANDIDATE** |

Aucune ARCH-POC-CAND n’est **VALIDÉE**. Aucun nouveau D-VAL.

---

## 8. Gates

| Gate | Statut |
|------|--------|
| POC-G7 instruction | **OUVERT** (consommé pour ce cycle) |
| POC-G7 **validation** architecture | **ATTENDUE** — Morris |
| POC-G8 backlog | **FERMÉ** |
| POC-G9 delivery | **FERMÉ** |
| Versionnement `23`–`25` | **NON ACCORDÉ** ici |
| Lancement POC | **NON ACCORDÉ** |

---

## 9. Décision Morris attendue

Morris doit :

1. **VALIDER** / **CORRIGER** / **REJETER** l’architecture candidate (`23`/`24`/`25`).
2. Trancher les ARCH-POC-CAND-01…12 (en bloc ou unitairement).
3. Si GO validation : autoriser éventuellement **versionnement** (commit/push/draft PR) — gate distinct.
4. Après intégration seulement : décider ouverture **POC-G8**.

### Conséquences GO validation

- Architecture candidate devient référence pour backlog borné.
- POC reste non lancé jusqu’à POC-G9 + gates exécution.
- Techno d’implémentation peut rester ouverte si CAND-04 le prévoit.

### Conséquences NO-GO / correction

- Retour instruction ; pas de POC-G8.
- Options B/C réévaluables selon motif.

---

## 10. Séquence

```text
POC-G7 OUVERT (instruction) — EN COURS
  → validation Morris architecture
  → (GO) versionnement docs 23–25
  → post-merge archi
  → décision POC-G8 (backlog) — FERMÉE aujourd’hui
  → POC-G9 delivery — FERMÉE
  → exécution POC — NON LANCÉE
```

---

## 11. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Architecture | **CANDIDATE COMPLETE** |
| Validation | **REQUISE** |
| Recommandation | Option A |
| POC-G8/G9 | **FERMÉS** |
| POC | **Non lancé** |
| Runtime | **Ouvert** |
| Versionnement | **Non autorisé** ici |

**Verdict :** `ARCHITECTURE POC CANDIDATE COMPLETE WITH RESERVES — MORRIS VALIDATION REQUIRED`

---

*Decision pack ARCHITECTURE CANDIDATE — POC-G7 instruction — NON VALIDÉ — Morris décide.*
```

---

## 12. Diff complet — cinq fichiers modifiés

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 506595e..e4659bc 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,15 +4,15 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 9 — QA corrective (sync post-merge versionnée) ; historique post-merge / PR readiness conservé |
-| **Profil** | Standard |
+| **Cycle** | 6 — Architecture technique POC (POC-G7) ; historique cadrage / sync #220 conservé |
+| **Profil** | Critical |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | `poc-orchestration-framing-post-merge-integrated` ; sync **versionnée** ; draft PR #220 **ouverte** ; merge **non effectué** ; POC **non lancé** ; POC-G7…G9 **fermés** |
-| **Décisions** | POC-CAND-01…10 selon Morris 2026-07-19 ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; D-VAL/FD/AF/TA historiques inchangés |
+| **Statut** | `poc-architecture-candidate-in-instruction` ; POC-G7 **OUVERT** ; archi **CANDIDATE NON VALIDÉE** ; POC **non lancé** ; POC-G8/G9 **fermés** |
+| **Décisions** | POC-CAND historiques ; ARCH-POC-CAND-01…12 **candidates** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
 | **Destinataire** | Morris |
-| **Source de vérité** | `origin/main` @ `be713c45a63c243a4d75c51d27d215d05bb621f1` ; branche **poussée** `capitalization/sfia-studio-poc-framing-post-merge` ; draft PR #220 |
+| **Source de vérité** | `origin/main` @ `b882892d79709acd0637d0df872c16bbe16d7ed1` ; branche locale `architecture/sfia-studio-poc-orchestration` |
 
-> Cadrage POC **VALIDÉ** (2026-07-19) et **INTÉGRÉ** (PR #219 / `be713c45…`). POC-G10 **consommé**. Sync post-merge **versionnée** (commit + push + draft PR #220). **Merge #220 non autorisé**. POC **non lancé**. Architecture POC (POC-G7) **fermée**.
+> Cadrage **INTÉGRÉ** (#219). Sync #220 **MERGED** (`b882892…`). POC-G7 **ouvert** pour instruction (`23`–`25`). Architecture **non validée**. POC **non lancé**. Versionnement archi = GO distinct.
 
 ---
 
@@ -34,17 +34,17 @@
 | Branche Delivery | **Supprimée** (local + remote) |
 | Gate Morris Delivery P0 | **Aucune restante** |
 | App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
-| Prochaine orientation | Sync post-merge **versionnée** (PR #220 draft) ; prochaine décision = **GO merge #220** ou, après intégration, éventuel **POC-G7** — **fermé** |
+| Prochaine orientation | Architecture POC **CANDIDATE** (`23`–`25`) ; POC-G7 **ouvert instruction** ; validation Morris **requise** |
 | Produit complet / MVP / industrialisation | **Non atteints / non engagés** |
-| Décision Morris cadrage | **2026-07-19** — POC-G1…G6 **VALIDÉS** ; S1 ; L3+L4*/L0 ; writes distantes simulées |
+| Décision Morris cadrage | **2026-07-19** — POC-G1…G6 **VALIDÉS** ; S1 ; L3+L4*/L0 |
 | Intégration cadrage | **Fait Git** — PR #219 MERGED ; `be713c45…` ; POC-G10 **CONSOMMÉ** |
-| Sync post-merge | **Versionnée** — commit + push + draft PR #220 ; merge **non effectué** |
+| Sync post-merge | **MERGED** — PR #220 / `b882892…` |
+| Architecture POC | Docs `23`–`25` **CANDIDATES** — **NON VALIDÉES** |
 | POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** — outil orchestrateur ouvert |
-| Branche cadrage POC | `project/sfia-studio-poc-orchestration-framing` (**conservée**) |
-| Branche post-merge | `capitalization/sfia-studio-poc-framing-post-merge` (**poussée**) ; PR #220 |
-| Branches historiques | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |
+| Branche architecture | `architecture/sfia-studio-poc-orchestration` (**locale**) |
+| Branches historiques | conservées |
 
-> Cadrage **validé + intégré** ≠ POC lancé ≠ architecture validée ≠ merge #220 autorisé. GO commit / push / draft PR **consommé**.
+> Cadrage intégré ≠ architecture validée ≠ POC lancé ≠ POC-G8 ouvert.
 
 ### Trace factuelle — Delivery P0 (historique compact)
 
@@ -121,8 +121,8 @@ Pré-cadrage
   → post-merge / cleanup
   → capitalisation P0 (PR #218)
   → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219) — POC non lancé
-  → post-merge sync documentaire       ← **versionnée** ; draft PR #220 ouverte ; merge = GO Morris distinct
-  → architecture POC ciblée             ← prochaine décision **possible** (POC-G7) — **fermée**
+  → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
+  → architecture POC ciblée             ← POC-G7 **OUVERT** — `23`–`25` CANDIDATES — **NON VALIDÉE**
   → backlog POC borné                   ← POC-G8 fermé
   → delivery POC                        ← POC-G9 fermé
   → décision Morris : abandon / itération / préparation MVP
@@ -130,16 +130,15 @@ Pré-cadrage
 
 ### Précisions
 
-- Cadrage POC : **validé et intégré** (POC-G1…G6 ; POC-G10 **consommé**).
-- Sync post-merge : **versionnée** (GO commit / push / draft PR **consommé**) ; merge #220 **en attente**.
-- Scénario **S1** sélectionné (contrat de cadrage, **non exécuté**).
-- Architecture / backlog / delivery POC : **non lancés**.
-- Clôture formelle architecture fonctionnelle : **décision séparée**, toujours ouverte.
-- POC ≠ MVP ≠ industrialisation.
+- Cadrage POC : **validé et intégré** ; sync #220 **mergée**.
+- Architecture POC : **en instruction** (POC-G7) — **non validée**.
+- Scénario **S1** : contrat de cadrage (**non exécuté**).
+- Backlog / delivery POC : **non lancés**.
+- Clôture formelle AF : **ouverte** (séparée).
 
 ### Orientation Option B — état
 
-> Cadrage validé 2026-07-19 ; intégré via PR #219 (`be713c45…`). POC-G10 consommé. Sync post-merge versionnée (PR #220 draft). Prochaines décisions : **GO merge #220** ; éventuellement **POC-G7** après intégration — **fermée**.
+> POC-G7 ouvert. Recommandation candidate : harness local autonome (Option A). Validation Morris requise. POC-G8 fermé.
 
 ---
 
@@ -215,9 +214,10 @@ Pré-cadrage
 |-------|---------|
 | Statut | **VALIDÉ + INTÉGRÉ** — PR #219 / `be713c45…` — docs `20`/`21`/`22` |
 | Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
-| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7…G9 **FERMÉS** |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **OUVERT** (instruction) ; POC-G8/G9 **FERMÉS** |
 | POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** — outil ouvert |
-| Ne lance pas | POC ; architecture ; backlog ; delivery ; MVP |
+| Architecture | Docs `23`–`25` **CANDIDATES** |
+| Ne lance pas | POC ; backlog ; delivery ; MVP |
 
 ### 4.7 Sécurité (bornée)
 
@@ -265,9 +265,12 @@ Pré-cadrage
 | D-NEXT-16 | Validation POC-CAND / POC-G1…G6 | Morris | **FAIT** — 2026-07-19 |
 | D-NEXT-17 | POC-G10 versionnement cadrage | Morris | **CONSOMMÉ** — PR #219 **MERGED** (`be713c45…`) |
 | D-NEXT-18 | Architecture / delivery POC | Morris | **Fermée** — POC-G7…G9 non validés |
-| D-NEXT-19 | GO versionnement sync post-merge | Morris | **CONSOMMÉ / FAIT** — commit + push + draft PR #220 |
-| D-NEXT-20 | GO merge PR #220 | Morris | **Requis** — **non autorisé** ici |
-| D-NEXT-21 | Ouverture éventuelle POC-G7 | Morris | **Possible** après intégration — **non ouverte** |
+| D-NEXT-19 | GO versionnement sync post-merge | Morris | **CONSOMMÉ** — PR #220 **MERGED** (`b882892…`) |
+| D-NEXT-20 | GO merge PR #220 | Morris | **CONSOMMÉ** — **MERGED** |
+| D-NEXT-21 | Ouverture POC-G7 (instruction) | Morris | **OUVERTE** — architecture en instruction |
+| D-NEXT-22 | Validation architecture POC / ARCH-POC-CAND-* | Morris | **Requise** — **non validée** |
+| D-NEXT-23 | GO versionnement docs `23`–`25` | Morris | **Non accordé** |
+| D-NEXT-24 | Ouverture POC-G8 | Morris | **Fermée** |
 
 ---
 
@@ -329,9 +332,10 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 ## 8. Questions Morris
 
-1. Autorisez-vous le **merge** de la draft PR #220 ?
-2. Après intégration : ouvrez-vous éventuellement **POC-G7** (architecture POC) — décision distincte ?
-3. Clôture formelle architecture fonctionnelle (toujours séparée) ?
+1. Validez-vous / corrigez-vous / rejetez-vous l’architecture candidate `23`–`25` ?
+2. Tranchez-vous les ARCH-POC-CAND-01…12 (notamment Option A) ?
+3. Autorisez-vous le versionnement (commit / push / PR) des docs d’architecture ?
+4. Clôture formelle architecture fonctionnelle (toujours séparée) ?
 
 ---
 
@@ -339,13 +343,13 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Critère | État |
 |---------|------|
-| Cadrage POC `20`–`22` | **VALIDÉ + INTÉGRÉ** (PR #219) |
-| Sync post-merge | **Versionnée** — draft PR #220 |
-| POC-G10 | **CONSOMMÉ** |
+| Cadrage POC | **VALIDÉ + INTÉGRÉ** |
+| Sync #220 | **MERGED** |
+| Architecture POC | **CANDIDATE** — **NON VALIDÉE** |
+| POC-G7 | **OUVERT** (instruction) |
+| POC-G8…G9 | **Fermés** |
 | POC lancé | **Non** |
-| POC-G7…G9 | **Fermés** |
-| MVP / industrialisation | **Non engagés** |
-| Clôture AF formelle | **Ouverte** (séparée) |
+| Clôture AF formelle | **Ouverte** |
 
 ---
 
@@ -353,15 +357,12 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Élément | Valeur |
 |---------|--------|
-| Cadrage | **VALIDÉ + INTÉGRÉ** |
-| POC-G10 | **CONSOMMÉ** (PR #219) |
-| Sync post-merge | **Versionnée** (PR #220 draft) |
-| GO commit / push / draft PR | **Consommé** |
-| Merge #220 | **Non autorisé** |
+| Architecture | **CANDIDATE COMPLETE** |
+| Validation | **REQUISE** |
 | POC | **Non lancé** |
-| POC-G7 | **Fermé** |
+| Versionnement | **Non autorisé** |
 
-**Verdict :** `CORRECTION COMPLETE — PR #220 UPDATED — READY FOR MORRIS MERGE DECISION`
+**Verdict :** `ARCHITECTURE POC CANDIDATE COMPLETE WITH RESERVES — MORRIS VALIDATION REQUIRED`
 
 ---
 
@@ -369,10 +370,9 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Document | Usage |
 |----------|-------|
-| [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Cadrage POC **VALIDÉ + INTÉGRÉ** |
-| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | S1 contrat de cadrage |
-| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates |
-| [11-functional-architecture.md](./11-functional-architecture.md) | AF-Option C / L0–L5 |
+| [20](./20-poc-orchestration-framing.md) · [21](./21-poc-orchestration-scenario-and-boundaries.md) · [22](./22-poc-orchestration-decision-pack.md) | Cadrage |
+| [23](./23-poc-orchestration-technical-architecture.md) · [24](./24-poc-orchestration-contracts-security-and-observability.md) · [25](./25-poc-orchestration-architecture-decision-pack.md) | Architecture candidate |
+| [11-functional-architecture.md](./11-functional-architecture.md) | AF-Option C |
 | [app/README.md](./app/README.md) | Runtime P0 |
 
-*SFIA Studio — cadrage POC VALIDÉ + INTÉGRÉ (PR #219) — sync post-merge versionnée (PR #220 draft) — merge non autorisé — POC NON LANCÉ — POC-G7 fermé — Morris décide.*
+*SFIA Studio — architecture POC CANDIDATE — POC-G7 ouvert — NON VALIDÉE — POC NON LANCÉ — Morris décide.*
diff --git a/projects/sfia-studio/20-poc-orchestration-framing.md b/projects/sfia-studio/20-poc-orchestration-framing.md
index 15365a5..1b4ee8a 100644
--- a/projects/sfia-studio/20-poc-orchestration-framing.md
+++ b/projects/sfia-studio/20-poc-orchestration-framing.md
@@ -8,29 +8,28 @@
 | **Profil** | Critical |
 | **Typologie** | DOC / EVOL (cadrage) |
 | **Baseline méthode** | SFIA v2.6 — Option C méthode (**inchangée**) |
-| **Branche** | Historique : `project/sfia-studio-poc-orchestration-framing` ; sync : `capitalization/sfia-studio-poc-framing-post-merge` (**poussée**) ; draft PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) |
-| **Base / main** | `origin/main` @ `be713c45a63c243a4d75c51d27d215d05bb621f1` (PR #219) |
-| **Statut document** | **VALIDÉ PAR MORRIS** (2026-07-19) et **INTÉGRÉ** sur `main` — cycle de cadrage **terminé** |
+| **Branche** | Historique cadrage/sync ; architecture : `architecture/sfia-studio-poc-orchestration` (**locale**) |
+| **Base / main** | `origin/main` @ `b882892d79709acd0637d0df872c16bbe16d7ed1` (PR #220 MERGED) |
+| **Statut document** | **VALIDÉ + INTÉGRÉ** — cycle cadrage **terminé** ; sync #220 **MERGED** |
 | **POC** | **Non lancé** |
 | **MVP / industrialisation** | **Non engagés** |
-| **Architecture Runtime** | **Non validée** — aucune technologie sélectionnée ; outil orchestrateur **ouvert** |
+| **Architecture Runtime** | **Non validée** — voir candidats `23`–`25` |
 | **Destinataire** | Morris |
 
-> Cadrage **validé** le **2026-07-19** et **intégré** via PR [#219](https://github.com/mcleland147/sfia-workspace/pull/219) (`be713c45…`). Cette validation **ne lance pas** le POC, **ne valide pas** l’architecture technique, **ne sélectionne pas** de Runtime et **ne définit pas** le MVP. POC-G7 / G8 / G9 restent **fermés**. Critères = contrat de preuve, **pas** preuve réalisée.
+> Cadrage **validé** (2026-07-19) et **intégré** (#219). Sync post-merge **MERGED** (#220 / `b882892…`). POC-G7 **OUVERT** pour instruction d’architecture candidate (`23`–`25`) — **non validée**. POC-G8 / G9 **fermés**. POC **non lancé**.
 
 ### Décision Morris — validation du cadrage (2026-07-19)
 
 | Élément | Statut |
 |---------|--------|
 | POC-CAND-01…06, 08, 10 | **VALIDÉES** |
-| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** (orchestrateur local candidat ; outil ouvert) |
-| POC-CAND-09 / POC-G10 | **VALIDÉE** puis **CONSOMMÉE** (PR #219 mergée) |
+| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
+| POC-CAND-09 / POC-G10 | **CONSOMMÉE** (#219) |
 | POC-G1…G6 | **VALIDÉS** |
-| POC-G7…G9 | **FERMÉS / NON VALIDÉS** |
-| Scénario | **S1** sélectionné |
-| Automatisation | L3 cible + L4* plafond chemin d’exécution ; L0 arbitrage ; L5 global interdit |
-| Git | Lecture réelle autorisée (futur POC) ; écritures distantes **simulées** |
-| Intégration | PR #219 **MERGED** — `be713c45a63c243a4d75c51d27d215d05bb621f1` |
+| POC-G7 | **OUVERT** (instruction) — architecture **NON VALIDÉE** |
+| POC-G8…G9 | **FERMÉS** |
+| Scénario | **S1** |
+| Intégration | #219 + #220 sur `main` @ `b882892…` |
 
 ---
 
@@ -301,31 +300,30 @@ Pas de plateforme de supervision industrialisée.
 |-------------|--------|
 | POC-G1…G6 | **VALIDÉS** |
 | POC-G10 | **VALIDÉ / CONSOMMÉ / INTÉGRÉ** (PR #219) |
-| POC-G7…G9 | **FERMÉS / NON VALIDÉS** |
+| POC-G7 | **OUVERT** (instruction) — docs `23`–`25` **CANDIDATES** — **NON VALIDÉ** |
+| POC-G8…G9 | **FERMÉS / NON VALIDÉS** |
 | POC-CAND-01…06, 08, 10 | **VALIDÉES** |
 | POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
-| POC-CAND-09 | **VALIDÉE** puis **consommée** (via POC-G10 / #219) |
-
-**Cycle de cadrage :** **terminé** (validé + intégré). Critères de succès/échec/abandon = contrat — **pas** preuve réalisée.
-
-**Sync post-merge :** **versionnée** (commit + push + draft PR #220). **Merge #220** = GO Morris distinct — **non autorisé** ici.
+| Sync #220 | **MERGED** (`b882892…`) |
 
-**Prochaine décision Morris possible après merge #220 :** ouverture éventuelle de **POC-G7** (architecture POC ciblée) — **fermée** ici. Pas de backlog/delivery direct.
+**Cycle de cadrage :** **terminé**. **Architecture POC :** en instruction — **non validée**.
 
-**Toujours ouverts :** outil/techno orchestrateur ; harness vs UI ; clôture AF formelle ; MVP.
+**Toujours ouverts :** validation ARCH-POC-CAND-* ; outil/techno ; harness vs UI (Option B future) ; clôture AF ; MVP.
 
 ---
 
 ## 15. Documents liés
 
 | Document | Rôle |
-|----------|------|
-| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario + frontières + flux |
-| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | Options, reco, POC-CAND, gates |
-| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire produit |
-| [11-functional-architecture.md](./11-functional-architecture.md) | AF-Option C, niveaux L0–L5 |
-| [18-technical-architecture.md](./18-technical-architecture.md) | Contraintes techniques P0 |
+|----------|-------|
+| [21](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario S1 |
+| [22](./22-poc-orchestration-decision-pack.md) | POC-CAND |
+| [23](./23-poc-orchestration-technical-architecture.md) | Archi technique candidate |
+| [24](./24-poc-orchestration-contracts-security-and-observability.md) | Contrats / sécurité |
+| [25](./25-poc-orchestration-architecture-decision-pack.md) | ARCH-POC-CAND-* |
+| [07](./07-product-trajectory-and-decision-pack.md) | Trajectoire |
+| [11](./11-functional-architecture.md) | AF-Option C |
 
 ---
 
-*Cadrage VALIDÉ + INTÉGRÉ (PR #219 / be713c45…) — sync post-merge versionnée (PR #220 draft) — merge non autorisé — cycle cadrage TERMINÉ — POC NON LANCÉ — POC-G7/G8/G9 fermés — outil orchestrateur ouvert.*
+*Cadrage VALIDÉ + INTÉGRÉ — sync #220 MERGED — POC-G7 ouvert instruction — architecture NON VALIDÉE — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
index f0871d4..37b7c27 100644
--- a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
+++ b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
@@ -6,8 +6,8 @@
 | **Document** | `21-poc-orchestration-scenario-and-boundaries.md` |
 | **Cycle** | 1 — Cadrage POC orchestration (Option B) |
 | **Profil** | Critical |
-| **Statut document** | **VALIDÉ PAR MORRIS** (2026-07-19) et **INTÉGRÉ** sur `main` (PR #219) — S1 = **contrat de cadrage** (**non exécuté**) |
-| **Complète** | [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) |
+| **Statut document** | **VALIDÉ + INTÉGRÉ** (#219) ; sync #220 **MERGED** ; S1 = contrat (**non exécuté**) ; UI vs harness → voir archi candidate `23` |
+| **Complète** | [20](./20-poc-orchestration-framing.md) · archi [23](./23-poc-orchestration-technical-architecture.md) |
 | **POC** | **Non lancé** |
 
 ---
@@ -217,9 +217,9 @@ Le modèle d’état et le scénario restent un **contrat de cadrage**, pas une
 | Gate d’exécution | Avant Cursor | GO / CORRIGER / STOP |
 | Gate de clôture preuve | Après pack | CLOSING / ITERATE / ABANDON |
 
-Les gates produit POC-G1…G6 sont **VALIDÉS** (2026-07-19). POC-G10 est **CONSOMMÉ** (PR #219). POC-G7…G9 restent **FERMÉS / NON VALIDÉS**.
+Les gates produit POC-G1…G6 sont **VALIDÉS**. POC-G10 **CONSOMMÉ**. POC-G7 **OUVERT** (instruction architecture — **non validée**). POC-G8…G9 **FERMÉS**.
 
-UI Studio versus harness : **réserve d’architecture** (ouverte pour un futur cycle POC-G7 — **non ouvert** ici).
+UI Studio versus harness : tranché en **recommandation candidate** Option A (harness autonome) dans `23` — **non validé** Morris.
 
 ---
 
@@ -296,4 +296,4 @@ L’UI P0 **n’est pas** l’orchestrateur. Branchement réel UI↔orchestrateu
 
 ---
 
-*Scénario S1 VALIDÉ + INTÉGRÉ (PR #219) comme contrat de cadrage — NON EXÉCUTÉ — POC NON LANCÉ — rejet allowlist = exigence future — techno Runtime ouverte — Morris décide (POC-G7 fermé).*
+*Scénario S1 VALIDÉ + INTÉGRÉ — NON EXÉCUTÉ — POC-G7 ouvert (archi candidate) — POC NON LANCÉ — Morris décide.*
diff --git a/projects/sfia-studio/22-poc-orchestration-decision-pack.md b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
index 35c9873..cfdf68c 100644
--- a/projects/sfia-studio/22-poc-orchestration-decision-pack.md
+++ b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
@@ -4,128 +4,100 @@
 |------------|--------|
 | **Projet** | SFIA Studio |
 | **Document** | `22-poc-orchestration-decision-pack.md` |
-| **Cycle** | 1 — Cadrage POC orchestration (Option B) ; sync post-merge cycle 14 |
-| **Profil** | Critical (cadrage) / Standard (post-merge sync) |
-| **Statut document** | **VALIDÉ PAR MORRIS** (2026-07-19) et **INTÉGRÉ** sur `main` (PR #219) |
-| **Préfixe décisions** | `POC-CAND-*` — identifiants locaux (même après validation) |
+| **Cycle** | 1 — Cadrage (historique) ; état post-#220 + POC-G7 |
+| **Profil** | Critical |
+| **Statut document** | Cadrage **VALIDÉ + INTÉGRÉ** ; sync #220 **MERGED** ; POC-G7 **OUVERT** instruction |
+| **Préfixe** | `POC-CAND-*` |
 | **D-VAL nouvelles** | **Aucune** |
 | **POC** | **Non lancé** |
 | **Destinataire** | Morris |
 
-> Décision Morris du **2026-07-19** : validation du cadrage Option B. Intégration Git : PR [#219](https://github.com/mcleland147/sfia-workspace/pull/219) **MERGED** (`be713c45…`). POC-G7 / G8 / G9 **fermés**. Aucune architecture Runtime / techno sélectionnée. Aucune décision d’architecture POC prise. POC **non lancé**.
+> Cadrage Option B **VALIDÉ** (2026-07-19). PR #219 + #220 **MERGED** (`b882892…`). POC-G7 **ouvert** pour instruction d’architecture (`23`–`25`) — **non validée**. POC-G8 / G9 **fermés**. POC **non lancé**.
 
 ---
 
 ## 1. Observations factuelles
 
-1. Delivery P0 clôturé (PR #217) ; capitalisation intégrée (PR #218).
-2. Cadrage Option B produit, **validé Morris 2026-07-19**, puis **intégré** (PR #219).
-3. AF-Option C **VALIDÉE** (fond) et **opérationnalisée** pour le POC (POC-CAND-03).
-4. Baseline SFIA v2.6 / Option C méthode **inchangée**.
-5. POC / MVP / industrialisation **non engagés**.
-6. POC-G10 **consommé** par le versionnement et le merge du cadrage.
+1. Delivery P0 clôturé (#217) ; capitalisation (#218).
+2. Cadrage validé + intégré (#219).
+3. Sync post-merge **MERGED** (#220 / `b882892…`).
+4. POC-G7 **OUVERT** — architecture candidate produite localement.
+5. POC-G8 / G9 **FERMÉS** ; POC **non lancé**.
+6. Runtime / techno **non sélectionnés** (recommandation Option A = candidate).
 
 ---
 
-## 2. Hypothèses
+## 2–5. Historique
 
-H1–H8 du document `20` — dont H6 (orchestrateur local) **retenue avec réserve** (POC-CAND-07) : outil/forme **ouverts**.
+Inchangé — voir versions antérieures / docs `20`–`21`. Hypothèse H6 orchestrateur local = **ARCH-POC-CAND-04** candidate.
 
 ---
 
-## 3–5. Options (historique de cadrage)
+## 6. Décisions POC-CAND — inchangées
 
-Les options A/B/C de séquencement et S1–S4 / L-levels restent documentées comme **historique de qualification**. Les choix Morris sont dans §6–7.
+| ID | Statut |
+|----|--------|
+| POC-CAND-01…06, 08, 10 | **VALIDÉES** |
+| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
+| POC-CAND-09 | **CONSOMMÉE** (#219 / G10) |
 
 ---
 
-## 6. Décisions POC-CAND — état post-intégration PR #219
+## 7. Gates Morris — état courant
 
-> Identifiants locaux au cadrage. **Aucune D-VAL nouvelle.**
-
-| ID | Décision | Statut Morris |
-|----|----------|---------------|
-| **POC-CAND-01** | Problème + objectif de preuve acceptés | **VALIDÉE** |
-| **POC-CAND-02** | Scénario **S1** sélectionné (DOC read-only + rejet hors allowlist obligatoire) | **VALIDÉE** |
-| **POC-CAND-03** | Frontières Studio / orch. / Git / Cursor ; AF-Option C opérationnalisée ; Git = vérité | **VALIDÉE** |
-| **POC-CAND-04** | L3 cible après GO ; L4* plafond chemin d’orchestration (**≠** niveau produit/Runtime) ; arbitrage L0 ; L5 global interdit | **VALIDÉE** |
-| **POC-CAND-05** | Lecture Git réelle autorisée (futur POC) ; écritures distantes **simulées** ; aucun commit/push/PR/merge réel sans décision distincte | **VALIDÉE** |
-| **POC-CAND-06** | Critères succès / échec / abandon acceptés | **VALIDÉE** |
-| **POC-CAND-07** | Orchestrateur local déterministe = hypothèse candidate ; outil/techno/forme **ouverts** ; aucune archi Runtime validée | **VALIDÉE AVEC RÉSERVE** |
-| **POC-CAND-08** | Après intégration cadrage → prochaine étape candidate = **architecture POC ciblée** ; pas de backlog/delivery direct | **VALIDÉE** |
-| **POC-CAND-09** | Commit / push / draft PR du cadrage (via POC-G10) | **VALIDÉE** puis **consommée** (PR #219) |
-| **POC-CAND-10** | Aucun lancement POC tant que gates nécessaires non ouverts explicitement | **VALIDÉE** |
-
----
-
-## 7. Gates Morris — état post-intégration PR #219
-
-| Gate | Objet | Statut |
-|------|-------|--------|
-| **POC-G1** | Problème + objectif de preuve | **VALIDÉ** |
-| **POC-G2** | Scénario métier unique S1 | **VALIDÉ** |
-| **POC-G3** | Frontières d’autorité et de vérité | **VALIDÉ** |
-| **POC-G4** | Niveau maximal d’automatisation | **VALIDÉ** |
-| **POC-G5** | Lecture Git réelle ; écritures distantes simulées | **VALIDÉ** |
-| **POC-G6** | Critères succès / échec / abandon | **VALIDÉ** |
-| **POC-G7** | Architecture POC candidate | **FERMÉ / NON VALIDÉ** |
-| **POC-G8** | Backlog POC | **FERMÉ / NON VALIDÉ** |
-| **POC-G9** | Delivery POC | **FERMÉ / NON VALIDÉ** |
-| **POC-G10** | Commit / push / draft PR du cadrage | **VALIDÉ / CONSOMMÉ / INTÉGRÉ** (PR #219) |
+| Gate | Statut |
+|------|--------|
+| POC-G1…G6 | **VALIDÉS** |
+| POC-G10 | **CONSOMMÉ** |
+| **POC-G7** | **OUVERT** (instruction) — validation architecture **en attente** |
+| POC-G8 | **FERMÉ** |
+| POC-G9 | **FERMÉ** |
 
-**Merge #219 = fait Git.** N’ouvre **pas** POC-G7. N’autorise **pas** le lancement du POC.
+Architecture technique : voir `25` (ARCH-POC-CAND-*).
 
 ---
 
 ## 8. Impacts
 
-Cadrage validé + intégré → cycle de cadrage **clôturable** documentairement → sync post-merge **versionnée** (draft PR #220) → prochaine décision : **GO merge #220** ; après intégration, éventuel **POC-G7**. Pas de shortcut backlog/delivery.
+Cadrage intégré → sync #220 mergée → POC-G7 instruction (`23`–`25`) → **validation Morris** → (GO) versionnement archi → (plus tard) POC-G8.
 
 ---
 
 ## 9. Dette / ouverts
 
-- Outil / forme orchestrateur (réserve POC-CAND-07)
-- Harness vs UI P0 (réserve d’architecture)
-- Allowlist chemins détaillée (architecture)
-- Clôture formelle AF
-- MVP / industrialisation / réserves P0
-- GO merge draft PR #220 (requis ; non accordé ici)
+- Validation ARCH-POC-CAND-*
+- Cursor adapter réel
+- Allowlist détaillée
+- Clôture AF
+- POC-G8+
 
 ---
 
-## 10. Séquence après intégration du cadrage
+## 10. Séquence
 
 ```text
-Cadrage validé (2026-07-19)
-  → POC-G10 consommé — PR #219 MERGED (be713c45…)
-  → post-merge sync documentaire — versionnée ; draft PR #220 ouverte ; merge = GO Morris distinct
-  → décision distincte éventuelle architecture POC (POC-G7) — FERMÉE
-  → (plus tard) backlog POC (POC-G8) → delivery POC (POC-G9)
-  → décision post-POC : abandon / itération / préparation MVP
+#219/#220 MERGED
+  → POC-G7 OUVERT — architecture CANDIDATE (23–25)
+  → validation Morris
+  → (GO) versionnement archi
+  → POC-G8 (FERMÉ) → POC-G9 (FERMÉ) → POC (NON LANCÉ)
 ```
 
-POC-G7 / G8 / G9 **non ouverts**. Aucune architecture POC prise. Aucun lancement POC.
-
 ---
 
-## 11. Verdict documentaire
+## 11. Verdict
 
 | Élément | Valeur |
 |---------|--------|
-| Cadrage | **VALIDÉ + INTÉGRÉ** (PR #219) |
-| POC-G10 | **CONSOMMÉ** |
-| Sync post-merge | **Versionnée** — draft PR #220 |
-| GO commit / push / draft PR | **Consommé** |
-| Merge #220 | **Non autorisé** |
-| POC lancé | **Non** |
-| Architecture / backlog / delivery POC | **Non lancés** |
-| POC-G7…G9 | **Fermés** |
-| Runtime / techno | **Non sélectionnés** (outil ouvert) |
-| Prochaine décision Morris | **GO merge #220** ; éventuellement POC-G7 après intégration |
+| Cadrage | **INTÉGRÉ** |
+| Sync #220 | **MERGED** |
+| Architecture | **CANDIDATE** — **NON VALIDÉE** |
+| POC-G7 | **OUVERT** (instruction) |
+| POC-G8/G9 | **FERMÉS** |
+| POC | **Non lancé** |
 
-**Verdict :** `CORRECTION COMPLETE — PR #220 UPDATED — READY FOR MORRIS MERGE DECISION`
+**Verdict :** `ARCHITECTURE POC CANDIDATE COMPLETE WITH RESERVES — MORRIS VALIDATION REQUIRED`
 
 ---
 
-*Decision pack VALIDÉ + INTÉGRÉ (PR #219) — sync post-merge versionnée (PR #220 draft) — merge non autorisé — POC-G10 CONSOMMÉ — POC NON LANCÉ — POC-G7 fermé.*
+*POC-CAND pack — G7 ouvert instruction — archi NON VALIDÉE — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 1ef9944..93afb54 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,20 +4,21 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-orchestration-framing-post-merge-integrated` — cadrage Option B **VALIDÉ** et **INTÉGRÉ** (PR #219) ; POC **non lancé** ; POC-G7…G9 **fermés** |
+| **Statut** | `poc-architecture-candidate-in-instruction` — cadrage **INTÉGRÉ** ; sync #220 **MERGED** ; POC-G7 **OUVERT** (instruction) ; architecture **CANDIDATE NON VALIDÉE** ; POC **non lancé** ; POC-G8/G9 **fermés** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — QA corrective documentaire PR #220 (DOC / INC légère, Standard) |
-| **Typologie cycle** | DOC / INC légère — QA corrective Standard |
-| **Cycle projet** | 9 — QA / validation corrective ; sync post-merge **versionnée** ; draft PR #220 **ouverte** |
-| **Profil SFIA** | Standard |
-| **Branche post-merge** | `capitalization/sfia-studio-poc-framing-post-merge` (**poussée**) ; draft PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) |
-| **Base canonique** | `origin/main` @ `be713c45a63c243a4d75c51d27d215d05bb621f1` |
+| **Exécuteur** | Cursor — Architecture technique POC (EVOL/DOC/ARCH, Critical) |
+| **Typologie cycle** | EVOL / DOC / ARCH — Architecture technique Critical |
+| **Cycle projet** | 6 — Architecture technique POC ; POC-G7 **ouvert instruction** |
+| **Profil SFIA** | Critical |
+| **Branche architecture** | `architecture/sfia-studio-poc-orchestration` (**locale**, non poussée) |
+| **Base canonique** | `origin/main` @ `b882892d79709acd0637d0df872c16bbe16d7ed1` (PR #220) |
 | **Chemin** | `projects/sfia-studio/` |
 | **AF-Option C** | **VALIDÉE** + **opérationnalisée** pour le POC (POC-CAND-03) |
 | **Cadrage POC** | `20`–`22` — **VALIDÉS et INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
-| **POC** | **Non lancé** — architecture / backlog / delivery POC **non lancés** |
-| **Prochaine décision** | **GO merge** de la PR #220 (distinct) ; ouverture éventuelle **POC-G7** après intégration — **fermée** |
+| **Architecture POC** | `23`–`25` — **CANDIDATES** ; POC-G7 **OUVERT** instruction ; **NON VALIDÉE** |
+| **POC** | **Non lancé** — backlog / delivery POC **non lancés** (G8/G9 fermés) |
+| **Prochaine décision** | Validation Morris architecture candidate ; versionnement docs = GO distinct ; POC-G8 après intégration seulement |
 
 ---
 
@@ -47,11 +48,13 @@
 | Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
 | Automatisation | L3 + L4* / L0 — L5 global interdit (POC-G4) |
 | Git futur POC | Lecture réelle OK ; écritures distantes **simulées** (POC-G5) |
-| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7…G9 **fermés** |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **OUVERT** (instruction) ; POC-G8/G9 **fermés** |
+| Sync post-merge | PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) — **MERGED** (`b882892…`) |
+| Architecture POC | Docs `23`–`25` **CANDIDATES** — **NON VALIDÉES** |
 | Branche cadrage | `project/sfia-studio-poc-orchestration-framing` (**conservée**) |
 | Branches historiques | `functional-design`, `pre-framing`, `functional-architecture` **conservées** |
 
-> Cadrage **validé et intégré** sur `main`. POC **non lancé**. Architecture / backlog / delivery POC **non lancés**. POC-G7 = décision distincte future.
+> Cadrage **validé et intégré**. Sync #220 **mergée**. Architecture POC **en instruction** (POC-G7). POC **non lancé**. Backlog / delivery **fermés**.
 
 ---
 
@@ -128,14 +131,14 @@ Pré-cadrage
   → post-merge / cleanup
   → capitalisation P0 (PR #218)
   → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219 / `be713c45…`) — POC non lancé
-  → post-merge sync documentaire       ← **versionnée** ; draft PR #220 ouverte ; merge = GO Morris distinct
-  → architecture POC ciblée             ← prochaine décision **possible** (POC-G7) — **fermée**
+  → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
+  → architecture POC ciblée             ← POC-G7 **OUVERT** — docs `23`–`25` **CANDIDATES** — **NON VALIDÉE**
   → backlog POC borné                   ← POC-G8 **fermé**
   → delivery POC                        ← POC-G9 **fermé**
   → décision Morris : abandon / itération / préparation MVP
 ```
 
-Cadrage POC : **validé et intégré**. Sync post-merge : **versionnée** (draft PR #220). Architecture / backlog / delivery POC : **non lancés**. MVP / industrialisation : **non engagés**.
+Cadrage POC : **validé et intégré**. Sync #220 : **mergée**. Architecture POC : **candidate en instruction**. Backlog / delivery : **non lancés**. POC : **non lancé**.
 
 ---
 
@@ -219,10 +222,20 @@ Cadrage POC : **validé et intégré**. Sync post-merge : **versionnée** (draft
 |----------|--------|
 | PR | [#219](https://github.com/mcleland147/sfia-workspace/pull/219) — **MERGED** (squash) |
 | Merge | `be713c45a63c243a4d75c51d27d215d05bb621f1` |
-| Titre | `docs(sfia-studio): validate POC orchestration framing (#219)` |
+| Sync post-merge | PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) — **MERGED** (`b882892…`) |
 | POC-G10 | **CONSOMMÉ** |
 
-> POC **non lancé**. Runtime / techno **ouverts** (non sélectionnés). POC-G7 = décision distincte future (**fermée**).
+### Architecture POC orchestration — CANDIDATE (POC-G7 ouvert)
+
+| Document | Rôle |
+|----------|------|
+| [23-poc-orchestration-technical-architecture.md](./23-poc-orchestration-technical-architecture.md) | Architecture logique, options A/B/C, reco Option A |
+| [24-poc-orchestration-contracts-security-and-observability.md](./24-poc-orchestration-contracts-security-and-observability.md) | Contrats, sécurité, preuve, stop/reprise |
+| [25-poc-orchestration-architecture-decision-pack.md](./25-poc-orchestration-architecture-decision-pack.md) | ARCH-POC-CAND-* / gates |
+
+> Architecture **CANDIDATE** — **NON VALIDÉE**. POC-G8/G9 **fermés**. Runtime / techno **ouverts**. POC **non lancé**.
+
+> POC **non lancé**. Runtime / techno **ouverts** (non sélectionnés). POC-G7 = instruction ouverte ; validation = GO distinct.
 
 ---
 
@@ -322,7 +335,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Sync #212 + finalisation #213 | **INTÉGRÉES** |
 | Clôture formelle cycle architecture | **Non** — non automatique |
 | Sort des branches historiques | Conservées ; décisions distinctes |
-| Contenu / architecture du POC orchestration | Cadrage **VALIDÉ + INTÉGRÉ** (PR #219) ; architecture POC (POC-G7) **fermée** |
+| Contenu / architecture du POC orchestration | Cadrage **INTÉGRÉ** ; archi `23`–`25` **CANDIDATES** ; POC-G7 **ouvert instruction** ; **non validée** |
 | Définition MVP | **Non pris** |
 | Industrialisation | **Non engagée** |
 | Responsive / a11y complète / CI GitHub | **Ouverts** (réserves P0) |
@@ -333,18 +346,19 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 ### Orientation Morris — Option B (POC orchestration)
 
-> Cadrage **VALIDÉ** (2026-07-19) et **INTÉGRÉ** (PR #219 / `be713c45…`). Sync post-merge **versionnée** (draft PR #220). Scénario **S1**. L3+L4*/L0. Écritures distantes simulées. Orchestrateur local **avec réserve** (outil ouvert).
-> **POC non lancé.** Prochaines décisions : **GO merge #220** ; éventuellement **POC-G7** après intégration — **fermée**.
+> Cadrage **VALIDÉ + INTÉGRÉ**. Sync #220 **MERGED**. POC-G7 **OUVERT** — architecture candidate `23`–`25` (reco Option A harness).
+> **POC non lancé.** POC-G8/G9 **fermés**. Validation architecture + versionnement = GO distincts.
 
 ---
 
 ## 8. Prochaine décision
 
-1. **GO merge** de la draft PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) — **non autorisé** ici (GO commit / push / draft PR **consommé**).
-2. Décision distincte éventuelle **POC-G7** (architecture POC) après intégration — **fermée**.
-3. Clôture formelle architecture fonctionnelle (toujours séparée).
+1. **Valider / corriger / rejeter** l’architecture POC candidate (`23`–`25` / ARCH-POC-CAND-*).
+2. GO versionnement des docs d’architecture (commit / push / PR) — **non accordé** ici.
+3. Après intégration : décision éventuelle **POC-G8** — **fermée**.
+4. Clôture formelle architecture fonctionnelle (toujours séparée).
 
-**Verdict documentaire :** `CORRECTION COMPLETE — PR #220 UPDATED — READY FOR MORRIS MERGE DECISION`
+**Verdict documentaire :** `ARCHITECTURE POC CANDIDATE COMPLETE WITH RESERVES — MORRIS VALIDATION REQUIRED`
 
 ---
 
@@ -353,11 +367,11 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Élément | Source |
 |---------|--------|
 | Méthode | SFIA v2.6 — Option C méthode |
-| Socle intégré | `main` @ `be713c45…` (PR #219) |
-| Cadrage POC | `20`–`22` **validés et intégrés** sur `main` |
-| Sync post-merge | branche poussée + draft PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) — **merge non effectué** |
+| Socle intégré | `main` @ `b882892…` (PR #220) |
+| Cadrage POC | `20`–`22` sur `main` |
+| Architecture POC candidate | `23`–`25` (locale, non versionnée) |
 | Handoff | `sfia/review-handoff` |
 
 ---
 
-*SFIA Studio — cadrage POC VALIDÉ + INTÉGRÉ (PR #219) — sync post-merge versionnée (PR #220 draft) — merge non autorisé — POC NON LANCÉ — POC-G7/G8/G9 fermés — Morris décide.*
+*SFIA Studio — architecture POC CANDIDATE (POC-G7) — NON VALIDÉE — POC NON LANCÉ — POC-G8/G9 fermés — Morris décide.*
```

---

## 13. Validations

| Check | Résultat |
|-------|----------|
| `git diff --check` | PASS |
| 5 M + 3 A | PASS |
| Aucun staged | PASS |
| POC-G8/G9 fermés | PASS |
| POC non lancé | PASS |
| Runtime ouvert | PASS |
| Pas d’API Cursor inventée | PASS |
| Writes distantes simulées | PASS |

---

## 14. Décisions Morris requises

1. Valider / corriger / rejeter architecture `23`–`25`
2. Trancher ARCH-POC-CAND-01…12
3. GO versionnement (distinct)
4. Après intégration : éventuel POC-G8

---

## 15. Actions interdites restantes

commit/push/PR projet · merge · POC-G8/G9 · code · lancement POC · Runtime validé · clôture AF

---

## 16. Réserves

1. Cursor réel non prouvé (modes fixture/manual)
2. Chemin harness/gitignore à figer en backlog
3. Allowlist détaillée
4. Option B reportée
5. Clôture AF ouverte

---

## 17. Verdict

**`ARCHITECTURE POC CANDIDATE COMPLETE WITH RESERVES — MORRIS VALIDATION REQUIRED`**

POC-G7 = instruction ouverte. Architecture **non validée**. POC **non lancé**. POC-G8/G9 **fermés**.
