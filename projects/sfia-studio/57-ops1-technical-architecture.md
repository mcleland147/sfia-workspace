# SFIA Studio — Architecture technique OPS1 (validée avec amendements)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `57-ops1-technical-architecture.md` |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Standard |
| **Typologie** | DOC / TECH-ARCH / SECURITY / DEVOPS / OBSERVABILITY / FINOPS / VALIDATION |
| **Gate d’ouverture** | `GO G-OPS1-TECH-ARCH — OPEN TECHNICAL ARCHITECTURE CYCLE` — **consommé** |
| **Gate de validation** | `G-OPS1-TECH-ARCH-VAL` — **consommé** — Morris — 2026-07-20 19:17:11 CEST — **VALIDATION AVEC AMENDEMENTS** |
| **Statut** | `technical-architecture-validated-with-amendments` — **validé Morris avec amendements** (2026-07-20 19:17:11 CEST) |
| **Branche** | `design/sfia-studio-ops1-technical-architecture` |
| **Baseline Git** | `origin/main` @ `ac2bcbf52e6170668e1a5cc0071c572026938635` |
| **Companions** | [`58`](./58-ops1-technical-components-security-and-runtime.md) · [`59`](./59-ops1-technical-architecture-decision-pack.md) |
| **Héritage** | [`41`](./41-operational-vertical-slice-1-framing.md)–[`56`](./56-ops1-scenario-decision-pack.md) |
| **Autorité** | Morris (L0) |
| **Horodatage production** | 2026-07-20 18:55:53 CEST |
| **Horodatage validation Morris** | 2026-07-20 19:17:11 CEST |

> Architecture technique OPS1 **validée avec amendements** sous `GO G-OPS1-TECH-ARCH-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 19:17:11 CEST`.
> Décisions `OPS1-TECH-CAND-01…26` **validées avec amendements** — voir [`59`](./59-ops1-technical-architecture-decision-pack.md).
> Stack / fournisseur cloud **non finalisés**. Backlog / code / delivery / live / MVP **fermés**.

---

## 1. Objet et non-objectifs

### Objet

Définir une architecture technique **exploitable et bornée** pour une exécution Cursor réelle OPS1 : isolation, validation déterministe du contrat, ancrage Git, workspaces, persistance, états, preuves, CI documentaire minimale, observabilité et garde-fous FinOps (sans seuils numériques).

### Non-objectifs

- Implémentation, backlog, user stories, delivery, déploiement, live, production, MVP.
- Modification Campus360 / méthode / prompts / Figma.
- Choix irréversible de fournisseur cloud ou stack « finale ».
- Fixation de montants, token limits ou timeouts numériques définitifs (FD-CAND-15).

---

## 2. Principes structurants

1. **Git** = source de vérité documentaire et d’ancrage d’exécution.
2. **Fail-closed** et **default deny**.
3. Aucun effet d’exécution sans **gate Morris** valide + contrat gelé.
4. Séparation **conversation / décision / exécution**.
5. Isolation **par session d’exécution** (pas le working tree principal).
6. Preuves **immuables** (append-only) ; session `CLOSED` immuable.
7. Continuation **liée** — jamais de réouverture silencieuse (FD-CAND-13).
8. Aucun **remote Git** automatique ; aucun **retry** automatique.
9. Allowlist **1..n** exhaustive ; **aucune wildcard** ; `03` protégé par défaut.
10. Timeout ≠ GO ; STOP prioritaire.

---

## 3. Vue d’ensemble des composants (candidats)

| Composant | Rôle |
|-----------|------|
| **SFIA Studio UI** | Surfaces conversation, action, gate, rapport, clôture |
| **Conversation Service** | Messages multi-tours GPT réels |
| **Session Manager** | Cycle de vie session / continuation / CLOSE |
| **Context Builder** | Contexte Git sélectionné + condensation |
| **Action Contract Builder** | Contrat d’action + allowlist + hash |
| **Morris Gate Service** | Présentation et journalisation GO/NO-GO/CORRIGER/ABANDONNER/STOP |
| **Execution Orchestrator** | Enchaînement post-GO fail-closed |
| **Git Workspace Manager** | Worktree/workspace isolé, branche d’exécution |
| **Cursor Runner Adapter** | Lancement Cursor borné au contrat |
| **Policy / Allowlist Validator** | Résolution chemins, denylist, symlinks, hors allowlist |
| **Evidence and Report Collector** | Diffs, contrôles sortie, rapport consolidé + par fichier |
| **Audit Log** | Artefacts / événements append-only (immuables) |
| **Session Store** | SQLite opérationnel — sessions, états, locks, tentatives, index |
| **Metrics / FinOps Collector** | Compteurs et alertes (seuils OPEN) |

Les noms sont **candidats**, non définitifs.

---

## 4. Frontières de confiance

| Frontière | Entrées | Sorties | Contrôle | Identité | Confiance | Échec |
|-----------|---------|---------|----------|----------|-----------|-------|
| Navigateur / UI | Actions Morris, texte | Affichage états | CSRF/session app (hors détail) | Morris L0 | Moyenne | Refus UI |
| Service applicatif | Messages, décisions | Contrats, états | Authz Morris, schémas | Service | Haute (logique métier) | Fail-closed |
| Session Store | Entités | Lectures | ACL locale, immutabilité CLOSED | Store | Haute données | STOP/FAILED |
| Dépôt Git source | SHA, refs | Blobs, diffs | Lecture contrôlée | Git local | Haute vérité | Refus ancrage |
| Workspace isolé | Checkout SHA | Fichiers allowlistés | Path resolve, deny | Workspace | Basse (exécutable) | STOP |
| Processus Cursor | Contrat, prompt borné | Patches locaux | Allowlist, timeout | Runner | Basse | FAILED/STOPPED |
| Réseau | — | — | **Désactivé par défaut** ou allowlist réseau | — | Nulle par défaut | Refus |
| GitHub distant | — | — | **Bloqué** (pas de push/PR/merge auto) | — | Nulle OPS1 | Refus |
| Secrets / credentials | — | — | Absents env/prompt/rapport | — | Critique | STOP |

---

## 5. Flux nominal technique

1. Conversation GPT réelle (Conversation Service).
2. Qualification : action optionnelle vs `ACTION_NOT_REQUIRED`.
3. Action Contract Builder crée le contrat (reads/creates/modifies/denied).
4. Résolution `baseHeadSha` depuis `baseRef` (ex. `origin/main`).
5. Policy Validator vérifie chemins (normalisation, pas de `..`, pas hors racine, pas symlink sortant).
6. Canonicalisation + `contractHash`.
7. Morris Gate Service présente le gate.
8. Décision Morris journalisée (timestamp + fuseau).
9. GO ⇒ **gel** du contrat (immuable).
10. Git Workspace Manager crée workspace/worktree + branche d’exécution.
11. Cursor Runner exécute **uniquement** après revalidation HEAD + hash + allowlist.
12. Evidence Collector capture diffs et métadonnées.
13. Contrôles de sortie (voir §13).
14. Rapport consolidé + par fichier.
15. Reprise conversationnelle ; analyse GPT **candidate**.
16. Clôture `CLOSED` immuable ; continuation liée si nouvelle activité.

---

## 6. Flux alternatifs

| Cas | Comportement technique |
|-----|------------------------|
| NO-GO / ABANDONNER | Aucun workspace ; décision auditée ; chat peut continuer |
| CORRIGER avant GO | Invalidation contrat ; nouveau hash ; nouveau gate |
| Extension après GO | **Refus** ; nouveau contrat + gate obligatoires |
| STOP | Prioritaire ; arrêt / non-démarrage ; preuves conservées |
| HEAD divergent post-GO | Refus exécution / invalidation |
| Hash invalide | Refus |
| Hors allowlist / symlink sortant | Refus fail-closed |
| Working tree sale (hors isolé) | Refus démarrage |
| Timeout | ≠ GO ; STOPPED/FAILED selon politique |
| Échec Cursor | Rapport d’échec ; **pas** de retry auto |
| Rapport incomplet | `REPORT_INCOMPLETE` ; pas COMPLETED ; pas re-run même hash |
| Double exécution | Refus (idempotence `contractHash`) |
| Continuation | Nouvel id + `parentSessionId` ; historique source intact |

---

## 7. Isolation d’exécution — options comparées

### Option A — Worktree Git local isolé (**recommandation candidate**)

| | |
|--|--|
| **Bénéfices** | Proportionné OPS1 ; ancrage SHA natif ; diffs Git naturels ; faible coût |
| **Limites** | Moins isolé qu’un conteneur (même host) |
| **Sécurité** | Bonne si path/symlink/deny remote stricts |
| **Coût / complexité** | Faibles |
| **Adéquation OPS1** | **Haute** |

### Option B — Conteneur local éphémère

| | |
|--|--|
| **Bénéfices** | Isolation FS/réseau plus forte |
| **Limites** | Complexité Docker/runtime ; montage Git à concevoir |
| **Sécurité** | Meilleure surface |
| **Coût / complexité** | Moyens–élevés |
| **Adéquation OPS1** | Moyenne (upgrade possible) |

### Option C — VM / runner distant

| | |
|--|--|
| **Bénéfices** | Isolation maximale |
| **Limites** | Coût, ops, latence, overkill POC |
| **Sécurité** | Forte |
| **Coût / complexité** | Élevés |
| **Adéquation OPS1** | Faible à ce stade |

**Décision validée avec amendements :** Option A — **worktree Git local** retenu comme isolation **Git** OPS1.

### Amendement 1 — Limites du worktree (obligatoire)

Le worktree **n’est pas** une sandbox de sécurité forte. Il fournit l’isolation Git (arbre de fichiers + branche) mais **pas** une isolation OS/conteneur.

Le **runner** doit **également** imposer, en complément du worktree :

1. working directory **borné** à la racine du workspace d’exécution ;
2. environnement **filtré** (allowlist de variables) ;
3. **credentials absents** (pas de tokens GitHub / secrets dans l’env runner) ;
4. **réseau désactivé par défaut** ;
5. **commandes distantes refusées** (push / fetch write / PR / merge) ;
6. **contrôles pré et post-exécution** (HEAD, hash, allowlist, paths, symlinks, secrets, diff-check, rapport).

Le **conteneur** reste une **trajectoire candidate** avant élargissement hors OPS1 (pas une affirmation d’isolation forte actuelle).

**Interdit :** revendiquer « sandbox strong isolation » ou isolation OS forte via le seul worktree.

Exigences communes : workspace dédié · SHA explicite · branche dédiée · pas de working tree principal · résolution réelle des chemins · allowlist post-résolution · pas de wildcard · secrets absents · timeout · preuves avant cleanup · cleanup sous GO distinct.

---

## 8. Contrat d’action déterministe (schéma conceptuel)

| Champ | Rôle | Dans hash ? |
|-------|------|-------------|
| `contractId` | Identifiant | Oui |
| `sessionId` | Session | Oui |
| `parentSessionId` | Continuation | Oui si présent |
| `repository` | Repo | Oui |
| `baseRef` | Réf. autorisée | Oui |
| `baseHeadSha` | SHA ancré | Oui |
| `executionBranch` | Branche locale | Oui |
| `allowedReads[]` | Lecture | Oui (ordre trié) |
| `allowedCreates[]` | Création | Oui (trié) |
| `allowedModifies[]` | Modification | Oui (trié) |
| `deniedPaths[]` | Deny | Oui (trié) |
| `objective` | Objectif | Oui |
| `constraints` | Contraintes | Oui |
| `expectedReport` | Attentes preuve | Oui |
| `contractHash` | Empreinte | — (résultat) |
| `createdAt` | Création | Oui |
| `expiresAt` | Expiration **candidate** | Oui si présent |
| `gateDecision` | GO/… | Non (post-hash) ou hash « gated » distinct — **à arbitrer** |
| `gateActor` / `gateTimestamp` | Preuve décision | Hors hash contrat pré-gate |
| `executionStatus` | Runtime | Non |

**Canonicalisation candidate :** JSON canonique (clés ordonnées, tableaux triés, UTF-8, pas d’espaces non significatifs) → **SHA-256** (algorithme **candidat**).

Règles : invalidation = nouveau contrat + nouveau hash ; **aucune mutation** après GO ; revalidation HEAD **immédiatement** avant exécution.

---

## 9. Git et branches

| Usage | Convention candidate |
|-------|----------------------|
| Conception tech-arch | `design/sfia-studio-ops1-technical-architecture` |
| Exécution OPS1 | `scenario/campus360-<action-slug>-<session-id-court>` |
| Base | SHA explicite (`baseHeadSha`) |
| Localité | Locale ; **pas** de push/merge auto |
| Collision / sale | Refus ; nouveau nom / cleanup gouverné |
| Diff | Exclusivement vs `baseHeadSha` |
| Commits d’exécution | **Interdits** dans OPS1 sauf décision ultérieure |
| Cleanup | Après preuves + **GO Morris distinct** |

---

## 10. Persistance — entités conceptuelles

| Entité | Finalité | Immutabilité | Sensible |
|--------|----------|--------------|----------|
| `CycleSession` | Vie de session | CLOSED immuable | Moyen |
| `ConversationMessage` | Fil | Append-only | Oui (contenu) |
| `ConversationContextSnapshot` | Contexte condensé | Snapshot | Moyen |
| `ActionContract` | Contrat | Gelé post-GO | Moyen |
| `GateDecision` | Décision Morris | Immuable | Faible |
| `ExecutionAttempt` | Tentative | Append-only | Moyen |
| `ExecutionEvidence` | Diffs/preuves | Append-only | Moyen |
| `ExecutionReport` | Rapport | Immuable une fois scellé | Moyen |
| `AuditEvent` | Journal | Append-only | Faible |
| `ContinuationLink` | Lien parent→enfant | Immuable | Faible |

**Source de vérité fichiers :** Git. Store = orchestration / preuves applicatives, ne contredit pas Git.

### Stockage hybride validé avec amendements (Amendement 2)

Séparation **claire** — ne plus parler de « fichiers + SQLite optionnel » ambigu :

#### SQLite — source opérationnelle

Pour :

- sessions ;
- états ;
- locks ;
- idempotence ;
- tentatives d’exécution (`ExecutionAttempt`) ;
- index ;
- corrélations.

#### Fichiers append-only — artefacts immuables

Pour :

- contrats gelés ;
- décisions de gate ;
- rapports ;
- diffs ;
- preuves ;
- journaux exportables.

#### Règles

- **Git** reste la source de vérité **documentaire** ;
- **aucune base cloud** pour OPS1 ;
- SQLite **ne remplace pas** Git ;
- les artefacts append-only **ne doivent pas** devenir une source d’état concurrente (l’état runtime vit dans SQLite).

| Option écartée pour OPS1 | Motif |
|--------------------------|-------|
| SGBD cloud / géré distant | Hors proportion OPS1 |

---

## 11. États techniques (candidats)

`DRAFT` → `READY_FOR_GATE` → `GATE_APPROVED` | `GATE_REJECTED` | `CONTRACT_INVALIDATED` → `PREPARING_WORKSPACE` → `EXECUTING` → `COLLECTING_EVIDENCE` → `COMPLETED` | `REPORT_INCOMPLETE` | `STOPPED` | `FAILED` → session `CLOSED`.

- STOP prioritaire depuis EXECUTING / PREPARING.
- Timeout ≠ GATE_APPROVED.
- Pas de retry automatique.

### Amendement 3 — Idempotence et tentatives

| Identifiant | Rôle |
|-------------|------|
| `contractHash` | Identifiant **immuable** du contrat validé (pré-gate / gelé) |
| `executionAttemptId` | Identifiant **unique** de chaque tentative d’exécution |

Règles :

1. **Une seule** tentative **active** par contrat ;
2. **Aucun** retry automatique ;
3. Une **nouvelle** tentative exige une **décision Morris explicite** ;
4. **Toutes** les tentatives sont **conservées** (append-only) ;
5. Chaque tentative a son statut, ses preuves et son rapport ;
6. Réutilisation du **même** contrat seulement si : HEAD identique · hash valide · allowlist valide · **aucune** extension de périmètre ;
7. Sinon : **nouveau contrat** + **nouveau hash** + **nouveau gate**.

Pour `REPORT_INCOMPLETE` :

- interdit de passer silencieusement à `COMPLETED` ;
- interdit de relancer automatiquement ;
- nouvelle tentative uniquement sous décision Morris explicite ;
- conserver l’échec et les preuves de la tentative précédente.

- Verrou concurrent sur (`contractHash`, tentative active) en PREPARING/EXECUTING.
- Crash : reprise en lecture + décision Morris ; pas de resume opaque.

---

## 12. Contrôles de sortie (obligatoires)

HEAD de base inchangé · fichiers = allowlist · pas de symlink sortant · pas de protégé (`03` etc.) · diff lisible · `git diff --check` · scan secrets · rapport consolidé + par fichier · statut commande · durée · métriques conso · preuves négatives · **aucune** action distante.

Échec ⇒ `STOPPED` / `FAILED` / `REPORT_INCOMPLETE` — **jamais** `COMPLETED` silencieux.

---

## 13. CI documentaire — trajectoire clarifiée (Amendement 4)

### Dès l’implémentation du socle (contrôles locaux déterministes)

- schéma du contrat ;
- hash ;
- HEAD ;
- allowlist ;
- chemins ;
- symlinks ;
- secrets ;
- `git diff --check` ;
- format du rapport.

### Cycle Intégration / DevOps (contrôles PR)

- lint Markdown ;
- liens internes ;
- références documentaires ;
- statuts et gates ;
- fichiers protégés ;
- format des preuves ;
- tests négatifs automatisables.

### Hors périmètre actuel

- pipeline delivery complet ;
- déploiement ;
- release ;
- production.

**Pas d’affirmation « FULL CI IMPLEMENTED ».** La CI PR relève d’un cycle Intégration/DevOps distinct.

---

## 14. Sécurité — risques (synthèse)

| Risque | Préventif | Détectif | Fail-closed |
|--------|-----------|----------|-------------|
| Prompt injection doc | Contenu ≠ autorité | Audit | Ignorer claims fichier |
| Traversal / `..` | Normalize + root jail | Path audit | Refus |
| Symlink escape | `realpath` + prefix check | Scan | Refus |
| Command injection | Pas de shell libre | Allowlist cmds | STOP |
| Secrets | Env filtré ; absents prompt/rapport | Scan | STOP |
| Exfil réseau | Network deny | Logs | STOP |
| Git remote | Block push/fetch write | Wrapper Git | Refus |
| Hors allowlist | Validator | Diff gate | Refus |
| TOCTOU HEAD/fichiers | Revalidate pre-exec | Compare SHA | Invalidation |
| Substitution contrat | Hash + gel | Recalc | Refus |
| Rejeu / double exec | Idempotence lock | Attempt log | Refus |
| Falsification rapport | Scellage + audit | Hash preuves | FAILED |
| Confusion continuation | `parentSessionId` | Audit | STOP |

Dette résiduelle : worktree ≠ sandbox OS forte (mitigée par contrôles runner) ; seuils FinOps OPEN ; CI PR non branchée ici.

---

## 15. Observabilité et audit

Événements minimaux : session créée · contrat créé/invalidé · hash · gate affiché · décision Morris · HEAD vérifié · workspace créé · exécution start/end · STOP · contrôle échoué · rapport · clôture · continuation · cleanup demandé/exécuté.

Chaque événement : timestamp+fuseau · ids corrélés · acteur · statut · payload minimal · **sans secrets**.

---

## 16. FinOps et performance

`FD-CAND-15 — MAINTAINED UNTIL FINOPS/LIVE GATE`

Mécanismes uniquement : compteurs conversation / structuration / analyse · durée Cursor · nb fichiers · volume diff · retries (attendu 0 auto) · taille contexte · alertes · confirmation Morris avant dépassement · condensation contrôlée · lecture seule.

**Aucun** montant / token limit / timeout numérique définitif dans ce document.

---

## 17. RGPD technique proportionné

Données : messages, auteur décisions, métadonnées Git, rapports, logs, ids session, éventuel PII dans Markdown.

Contrôles : minimisation · pas de secrets · masquage logs · rétention **candidate** · accès Morris · export/suppression encadrés vs immutabilité preuves.

Pas de base légale ni durée définitive inventées.

---

## 18. Condition d’ouverture des cycles suivants

| Cycle | Condition candidate |
|-------|---------------------|
| Backlog OPS1 | Tech-arch **validée** Morris (`G-OPS1-TECH-ARCH-VAL`) + GO backlog distinct |
| Delivery / implémentation | Backlog + GO delivery distinct |
| Live | FinOps numériques + GO live |
| Cleanup branches | GO distinct |

---

## 19. Anti-claims

Pas de : READY FOR DELIVERY · READY FOR IMPLEMENTATION · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · LIVE READY · STACK FINALIZED · SANDBOX STRONG ISOLATION · FULL CI IMPLEMENTED.
La validation **avec amendements** n’équivaut pas à une stack finale ni à une isolation OS forte.

---

## 20. Verdict documentaire

`technical-architecture-validated-with-amendments`

`OPS1 TECHNICAL ARCHITECTURE VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL`

`GO G-OPS1-TECH-ARCH-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 19:17:11 CEST`

Stack / fournisseur **non finalisés**. Backlog / code / delivery / live / MVP **fermés**.
