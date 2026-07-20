# Review Pack — OPS1 Integration / DevOps Foundation

## Métadonnées

| Champ | Valeur |
|---|---|
| Date / heure / fuseau | 2026-07-20 21:06:00 CEST |
| Repository | `mcleland147/sfia-workspace` |
| État initial | detached HEAD sur `origin/main` tip |
| Branche créée | `devops/sfia-studio-ops1-foundation` |
| HEAD / base / merge-base | `6584646066dbd6f7002b20200e513026e3a880df` |
| Gate consommée | `GO G-OPS1-DEVOPS — OPEN INTEGRATION / DEVOPS CYCLE` |
| Gate attendue | `G-OPS1-DEVOPS-VAL` |
| Profil | Standard — Cycle 7 Intégration / DevOps |
| Commit / push / PR projet | **aucun** |
| Verdict | `OPS1 INTEGRATION DEVOPS FOUNDATION DOCUMENTED — READY FOR CHATGPT REVIEW` |

## Rôle du cycle

Documenter le socle d’intégration, contrôles locaux et CI **candidate** pour rendre un futur lot delivery OPS1 exécutable/vérifiable/gouverné — **sans** code, CI, deps, delivery ni live.

## Sources consultées

Méthode template ; docs `41`,`43`,`45`,`46`,`48`,`49`,`51`,`52`,`54`,`55`,`56`,`57`,`58`,`59`,`60`,`61`,`62`, README ; `app/package.json`+lock+configs ; `harness/package.json` ; `.github/workflows/interv360-ci.yml` (lecture) ; structures `app/**` et `harness/**` (lecture).

## État réel repository / commandes

### EXISTS
- npm ci (pratique lockfile app)
- npm run lint
- npm run typecheck
- npm test
- npm run test:e2e
- npm run build
- git status / rev-parse / diff --check
- harness typecheck/test/build (NOT REQUIRED OPS1 delivery)
- workflow interv360-ci.yml (NOT REQUIRED OPS1)

### CANDIDATE
- ops1:controls monorepo script
- secrets scanner outillé
- integration suite paths/sqlite/runner
- git remote-deny wrapper
- network/env policy enforcement
- markdown link check
- .github/workflows/sfia-studio-ops1-ci.yml
- cleanup .sfia-exec gouverné
- engines.node pin

CI Studio : **absente**. CI Interv360 : autre projet.

## Fichiers créés / modifiés

| Statut | Fichier |
|---|---|
| A | `projects/sfia-studio/63-ops1-integration-devops-foundation.md` |
| A | `projects/sfia-studio/64-ops1-local-controls-ci-and-evidence-contract.md` |
| A | `projects/sfia-studio/65-ops1-integration-devops-decision-pack.md` |
| M | `projects/sfia-studio/README.md` |

## Décisions candidates (24)

- OPS1-DEVOPS-CAND-01 — Structure du repository OPS1
- OPS1-DEVOPS-CAND-02 — Frontières Studio / runtime
- OPS1-DEVOPS-CAND-03 — Emplacement SQLite
- OPS1-DEVOPS-CAND-04 — Emplacement artefacts append-only
- OPS1-DEVOPS-CAND-05 — Politique fichiers temporaires et `.gitignore`
- OPS1-DEVOPS-CAND-06 — Installation déterministe
- OPS1-DEVOPS-CAND-07 — Gestion des dépendances
- OPS1-DEVOPS-CAND-08 — Commandes locales socle
- OPS1-DEVOPS-CAND-09 — Stratégie de tests
- OPS1-DEVOPS-CAND-10 — Stratégie CI PR candidate
- OPS1-DEVOPS-CAND-11 — Permissions CI
- OPS1-DEVOPS-CAND-12 — Politique secrets
- OPS1-DEVOPS-CAND-13 — Politique réseau
- OPS1-DEVOPS-CAND-14 — Politique cache CI
- OPS1-DEVOPS-CAND-15 — Politique artefacts CI
- OPS1-DEVOPS-CAND-16 — Politique rétention locale runtime
- OPS1-DEVOPS-CAND-17 — Contrôle fichiers protégés
- OPS1-DEVOPS-CAND-18 — Contrôle Git remote
- OPS1-DEVOPS-CAND-19 — Gestion `REPORT_INCOMPLETE`
- OPS1-DEVOPS-CAND-20 — Gestion `METRICS_INCOMPLETE`
- OPS1-DEVOPS-CAND-21 — Gates vers Delivery I1
- OPS1-DEVOPS-CAND-22 — Critères d’ouverture CI implémentée
- OPS1-DEVOPS-CAND-23 — Rollback
- OPS1-DEVOPS-CAND-24 — Dette et réserves

Toutes : `AWAITING G-OPS1-DEVOPS-VAL`.

## Stratégie CI candidate (résumé)

PR path-filtered `projects/sfia-studio/**` ; permissions read ; pas de secrets socle ; jobs doc-guard + app-quality (+ e2e optionnel) ; fail-closed secrets/protected ; **non implémentée**.

## Secrets / réseau

Deny network default ; no secrets in env/prompt/report ; `.env*` ignored ; live exceptions under distinct gates.

## Stockage / artefacts

SQLite + append-only under `.sfia-exec/<executionId>/` ; not versioned ; no auto-retry ; REPORT/METRICS_INCOMPLETE strict.

## Gates Delivery I1

Require `G-OPS1-DEVOPS-VAL` + distinct GO Delivery I1 + DoR + allowlist + rollback — **not opened**.

## Réserves maintenues

FD-CAND-15 · UX-R01…R04 · stack/fournisseur · worktree≠sandbox · CI non implémentée · live/delivery/MVP fermés.

## Garde-fous / fichiers protégés

Aucun touch `01`–`62`, `app/**`, `harness/**`, `.github/**`, package.json/lockfiles, method/prompts.

## Contrôles exécutés

- 3 créés + 1 modifié ; staged vide ; `git diff --check` clean
- 24 CAND awaiting ; 0 validated
- EXISTS vs CANDIDATE distingués
- invariants tech-arch/backlog respectés

## Risques / dette

Confusion harness=runtime ; claim CI Studio ; ignore `.sfia-exec` manquant ; engines Node non pin ; suites integration absentes.

## Décision Morris consommée / attendue

- Consommée : `G-OPS1-DEVOPS` ouverture
- Attendue : `G-OPS1-DEVOPS-VAL`

## Verdict

`OPS1 INTEGRATION DEVOPS FOUNDATION DOCUMENTED — READY FOR CHATGPT REVIEW`

---

# Contenu complet — 63

# 63 — OPS1 Integration / DevOps Foundation

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `63-ops1-integration-devops-foundation.md` |
| **Projet** | SFIA Studio — Vertical Slice Opérationnel 1 (OPS1) |
| **Cycle** | 7 — Intégration / DevOps |
| **Profil** | Standard |
| **Typologie** | DOC / DEVOPS / INTEGRATION / QA / SECURITY |
| **Statut** | `devops-foundation-candidate` — **candidat** en attente de `G-OPS1-DEVOPS-VAL` |
| **Gate ouverture** | `G-OPS1-DEVOPS` **consommé** — 2026-07-20 21:06:00 CEST |
| **Gate validation** | `G-OPS1-DEVOPS-VAL` — **AWAITING** |
| **Décision Morris ouverture** | `GO G-OPS1-DEVOPS — OPEN INTEGRATION / DEVOPS CYCLE` |
| **Branche** | `devops/sfia-studio-ops1-foundation` (locale ; **aucun push projet** dans ce cycle) |
| **Base** | `origin/main` @ `6584646066dbd6f7002b20200e513026e3a880df` |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor (documentaire) |

> Socle documentaire d’intégration et de contrôles locaux pour préparer des lots delivery OPS1 **exécutables, vérifiables et gouvernés**.
> **N’implémente pas** de CI, de code, de SQLite, de runner, ni de delivery.
> CI PR, Delivery I1, GPT live, Cursor live, MVP et production restent **fermés** jusqu’à GO Morris distincts.

---

## 1. Objectif

Transformer les décisions déjà validées (architecture technique `57`–`59`, scénario `54`–`56`, backlog `60`–`62`) en un **contrat documentaire** Intégration / DevOps :

1. structure technique candidate (sans création de dossiers/code) ;
2. commandes et contrôles locaux (existants vs candidats) ;
3. stratégie CI PR **candidate** (non implémentée) ;
4. secrets / réseau / artefacts / SQLite ;
5. gates vers Delivery I1 ;
6. decision pack `65` soumis à `G-OPS1-DEVOPS-VAL`.

---

## 2. Sources

| Famille | Documents |
|---------|-----------|
| Méthode | `prompts/templates/sfia-cycle-execution-template.md` ; garde-fous SFIA |
| Cadrage / conception | `41`, `43`, `45`, `46`, `48`, `49` |
| UX / scénario | `51`, `52`, `54`, `55` (allowlist Campus360), `56` |
| Architecture technique | `57`, `58`, `59` (`OPS1-TECH-CAND-01…26`) |
| Backlog | `60`, `61`, `62` (`OPS1-BACKLOG-CAND-01…20`) |
| Projet | `README.md` |
| Existant technique (lecture seule) | `app/package.json`, `package-lock.json`, configs TS/lint/test/build/Playwright, `app/**`, `harness/**`, `.github/workflows/**` |

---

## 3. État réel du repository (constat)

### 3.1 Application Studio (`projects/sfia-studio/app`)

| Élément | Constat |
|---------|---------|
| Stack | Next.js 15 · React 19 · TypeScript · Vitest · Playwright · ESLint (`eslint-config-next`) |
| Lockfile | `package-lock.json` **présent** (installation déterministe via `npm ci` possible) |
| Scripts **existants** | `dev`, `build`, `start`, `lint`, `typecheck`, `test`, `test:watch`, `test:e2e` |
| Tests | `__tests__/` (Vitest) · `e2e/` (Playwright) · fixtures UI P0 |
| Nature P0 | Fixtures locales ; pas d’API/auth/BDD/orchestration réelle OPS1 |
| `.gitignore` app | `node_modules/`, `.next/`, `coverage/`, `playwright-report/`, `test-results/`, `.env*` |

### 3.2 Harness historique (`projects/sfia-studio/harness`)

| Élément | Constat |
|---------|---------|
| Rôle | Harness POC S1 (Option B) — **historique** ; ≠ runtime OPS1 validé |
| Scripts | `typecheck`, `test`, `build`, `cli`, spikes Cursor/GPT |
| Limite | Ne pas présenter le harness comme le runtime OPS1 cible |

### 3.3 CI GitHub

| Élément | Constat |
|---------|---------|
| Workflow existant | `.github/workflows/interv360-ci.yml` — **Interv360 uniquement** |
| Workflow SFIA Studio / OPS1 | **ABSENT** |
| Conclusion | Aucune CI PR OPS1 **n’existe** ; toute CI Studio = **CANDIDATE** |

### 3.4 Ignore / runtime

| Élément | Constat |
|---------|---------|
| Root `.gitignore` | `node_modules/`, `.env*`, `.sandbox/**` (Increment D) |
| `.sfia-exec/**` | **Non** listé aujourd’hui — politique d’ignore = **candidate** (`OPS1-DEVOPS-CAND-05`) |
| SQLite / artefacts OPS1 | **Non créés** |

---

## 4. Principes d’intégration

1. **Git = vérité documentaire** ; SQLite = état opérationnel local ; fichiers append-only = preuves immuables (`OPS1-TECH-CAND-12`).
2. **Morris L0** ; chat ≠ GO ; fail-closed / default deny.
3. **Studio ≠ orchestrateur** (AF-Option C) — cockpit vs runtime d’exécution.
4. **Worktree = isolation Git**, pas sandbox OS forte (`OPS1-TECH-CAND-01` Amendement 1).
5. **Réseau désactivé par défaut** ; secrets absents d’env/prompt/rapport (`OPS1-TECH-CAND-03/04`).
6. **Aucun effet Git distant** du runner (`OPS1-TECH-CAND-26`).
7. **`contractHash` ≠ `executionAttemptId`** ; **aucun retry automatique** (`OPS1-TECH-CAND-14…17`).
8. **`REPORT_INCOMPLETE` / `METRICS_INCOMPLETE`** explicites — jamais COMPLETED silencieux.
9. **Contrôles locaux obligatoires** avant delivery ; **CI PR = cycle distinct** d’implémentation après validation du présent pack (`OPS1-TECH-CAND-20`, `OPS1-BACKLOG-CAND-18`).
10. Séparation des cycles : backlog ≠ DevOps doc ≠ CI implémentée ≠ delivery ≠ live.

---

## 5. Structure technique candidate (sans création)

> Chemins **candidats** — aucun dossier/fichier de code créé dans ce cycle.

| Rôle | Emplacement candidat | Versionné ? |
|------|----------------------|-------------|
| Studio UI / domaine P0+ | `projects/sfia-studio/app/**` | Oui (code) |
| Contrats / docs OPS1 | `projects/sfia-studio/NN-*.md` | Oui |
| Runtime / runner OPS1 (futur) | `projects/sfia-studio/runtime/` **ou** module dédié hors UI (à trancher en delivery) — **≠** réécrire le harness POC comme vérité | Code futur versionné |
| Worktree d’exécution | `.sfia-exec/<executionId>/` via `git worktree add` depuis `baseHeadSha` (`58`) | Non (état runtime) |
| SQLite opérationnel | `.sfia-exec/<executionId>/state/ops1.sqlite` (ou `data/ops1.sqlite` sous racine exec) | Non |
| Artefacts append-only | `.sfia-exec/<executionId>/artifacts/` — contrats gelés, gate decisions, rapports, diffs, preuves, logs exportables | Non (preuves locales) ; exports sélectionnés versionnables sous décision Morris |
| Fixtures tests | `app/fixtures/**`, futurs `runtime/fixtures/**` | Oui |
| Tests unitaires | `app/__tests__/**` ; futurs tests runtime colocalisés | Oui |
| Tests intégration | candidats `app/__tests__/integration/**` ou `runtime/tests/integration/**` | Oui |
| Tests E2E | `app/e2e/**` (Playwright existant) | Oui |
| Temporaires | `.tmp-sfia-review/**`, `app/test-results/**`, caches build | Non |
| Campus360 (cible action) | `projects/campus360/**` selon allowlist gelée | Oui (contenu métier) |

### 5.1 Séparation versionné / runtime / temporaire

| Classe | Exemples | Règle |
|--------|----------|-------|
| **Versionné** | code Studio, docs, fixtures, tests, configs | Revue PR ; pas de secrets |
| **Runtime** | SQLite, locks, worktrees `.sfia-exec`, tentatives | Local ; purge gouvernée ; pas de commit automatique |
| **Temporaire** | `.next/`, coverage, playwright-report, `.tmp-*` | Ignoré ; nettoyable |
| **Append-only preuves** | contrats, rapports, PN | Immuables une fois écrits ; pas de rewrite |

### 5.2 `.gitignore` futur (candidat)

Ajouter / confirmer (cycle d’implémentation distinct) :

- `.sfia-exec/`
- `**/*.sqlite` / `**/*.sqlite-journal` / `**/*.db`
- conservation éventuelle de `.gitkeep` sous racines vides autorisées
- ne pas ignorer les docs `63`–`65` ni le code versionné

### 5.3 Branches et worktrees

| Usage | Convention candidate |
|-------|----------------------|
| Documentaire DevOps | `devops/sfia-studio-ops1-*` |
| Delivery lots | sous GO delivery distinct (ex. `delivery/sfia-studio-ops1-i1`) |
| Exécution scénario | `scenario/campus360-<slug>-<id>` **locale** (`OPS1-TECH-CAND-10`) |
| Worktree exec | `.sfia-exec/<executionId>/` lié à la branche d’exécution |
| Handoff revue | `sfia/review-handoff` (L3 borné) |

---

## 6. Dépendances et installation

| Règle | Détail |
|-------|--------|
| Déterminisme | `npm ci` dans `projects/sfia-studio/app` (lockfile présent) — **EXISTS** comme pratique ; script dédié racine = **CANDIDATE** |
| Interdit ce cycle | `npm install` modifiant le lockfile ; ajout de packages |
| Harness | installation séparée si réutilisé pour spikes — hors socle OPS1 delivery tant que non sélectionné |
| Node | CI Interv360 utilise Node 20 — **référence de fait** ; pin Studio = **CANDIDATE** (engines non déclarés dans `package.json` Studio) |

---

## 7. Configuration

| Domaine | État |
|---------|------|
| `tsconfig.json` / `eslint.config.mjs` / `vitest.config.ts` / `playwright.config.ts` / `next.config.ts` | **EXISTENT** (app P0) |
| Config runner OPS1 (env allowlist, network deny, path root) | **CANDIDATE** — non créée |
| Secrets | `.env*` ignorés ; **aucun secret** requis pour contrôles socle locaux/CI de base |
| Feature flags live | **fermés** (gates live distincts) |

---

## 8. Secrets et réseau

| Règle | Obligation |
|-------|------------|
| Secrets interdits | tokens API, credentials Git, clés SSH, cookies, contenus `.env` dans prompts/rapports/artefacts/logs CI |
| Variables non sensibles OK | `NODE_ENV`, chemins relatifs de projet, flags `FIXTURE_MODE=1`, versions outil |
| Filtrage env runner | allowlist stricte (`OPS1-TECH-CAND-04`) |
| Réseau | **deny by default** ; exceptions live sous gate Morris + preuve |
| Tests fournisseur externe | hors CI socle ; séparés fixture vs live |
| Redaction | masquage systématique patterns secret ; échec = stop |
| Pré/post | scan secrets avant/après exécution candidate |

---

## 9. Stockage SQLite et artefacts

| Artefact | Store | Versionné | Append-only | Conservation candidate |
|----------|-------|-----------|-------------|------------------------|
| Sessions / états / locks / attempts | SQLite | Non | N/A (mutable contrôlé) | durée lot + revue Morris ; purge sous GO cleanup |
| Contrat gelé | fichier | Non (sauf export décidé) | Oui | correlé `contractHash` |
| Gate decision | fichier | Idem | Oui | correlé attempt |
| Rapport / diff / preuves / PN | fichier | Idem | Oui | idem |
| Métriques | SQLite + extrait rapport | Non | partiel | `METRICS_INCOMPLETE` si manquantes |
| `REPORT_INCOMPLETE` | rapport | Non | Oui | bloque COMPLETED |
| Logs exportables | fichier | Non | Oui | redacted |

**Corrélation :** `executionId` · `contractHash` · `executionAttemptId` · `baseHeadSha` · timestamps.

**Crash recovery :** pas de reprise opaque ; nouvel attempt = décision Morris (`OPS1-TECH-CAND-16`).

**Retry automatique :** **interdit**.

---

## 10. Stratégie de tests

| Couche | Outil actuel | Portée OPS1 |
|--------|--------------|-------------|
| Unitaire | Vitest (`npm test`) — **EXISTS** | schémas, hash, mapping, redaction (à étendre en delivery) |
| Intégration | **PARTIAL / CANDIDATE** | paths, allowlist, sqlite, runner wrappers |
| E2E UI | Playwright (`npm run test:e2e`) — **EXISTS** (P0) | surfaces Studio ; pas live GPT |
| Contrôles sécurité locaux | **CANDIDATE** | secrets, remote Git, symlinks, realpath |
| Live | **NOT REQUIRED** tant que gates live fermés | séparé |

Fixture ≠ live : tout test non-live doit être étiqueté (`OPS1-US-E02-03`).

---

## 11. Stratégie CI PR candidate (non implémentée)

> Aucun fichier `.github/**` créé ou modifié dans ce cycle.

| Élément | Proposition candidate |
|---------|------------------------|
| Triggers | `pull_request` sur chemins `projects/sfia-studio/**` (+ workflow file) ; pas de `workflow_dispatch` large sans besoin |
| Permissions | `contents: read` minimal ; pas `write` ; pas `id-token` sauf besoin futur justifié |
| Secrets | **aucun** pour jobs socle |
| Forks | pas de secrets ; jobs read-only ; option skip E2E lourds |
| Jobs suggérés | `doc-guard` → `app-quality` (lint/typecheck/unit/build) → `e2e` optionnel ; fail-fast sur secrets/protected |
| Artefacts | logs junit / rapports test retenus courte durée (ex. 7–14 j) |
| Cache | `npm` cache scoped ; pas de cache cross-fork sensible |
| Path filters | ignorer hors `projects/sfia-studio/**` |
| Anti-remote | asserts documentaires + futurs tests runner |
| Incomplete | job rouge si rapport/métriques déclarés incomplets là où exigés |
| Implémentation | **uniquement** après `G-OPS1-DEVOPS-VAL` **et** GO Morris d’implémentation CI distinct |

---

## 12. Observabilité des contrôles

Chaque contrôle produit : statut PASS/FAIL/INCOMPLETE · commande · SHA · timestamp · artefact preuve · corrélation IDs.

États incomplets :

- `REPORT_INCOMPLETE` — couverture preuve insuffisante ;
- `METRICS_INCOMPLETE` — métriques obligatoires absentes (cause explicite).

---

## 13. Rollback

| Couche | Rollback |
|--------|----------|
| Documentaire DevOps | revert commits docs / fermer PR future sans merge |
| Runtime local | supprimer worktree `.sfia-exec/<id>` sous GO cleanup ; SQLite non versionné |
| Delivery futur | revert PR lot ; pas de remote auto |
| CI future | désactiver workflow ; pas de force-push |

---

## 14. Risques

| Risque | Mitigation |
|--------|------------|
| Confusion harness POC = runtime OPS1 | frontière documentaire explicite |
| Claim « CI existante Studio » | Interv360 ≠ Studio ; CI Studio = CANDIDATE |
| Worktree pris pour sandbox forte | amendement tech-arch rappelé |
| Secrets dans CI | jobs sans secrets ; scan |
| Ouverture delivery via DevOps doc | gates séparés `G-OPS1-DEVOPS-VAL` ≠ GO Delivery I1 |
| Ignore manquant `.sfia-exec` | CAND-05 |

---

## 15. Dette

- Pin Node/`engines` non déclaré Studio.
- Pas de script racine monorepo pour contrôles OPS1.
- Pas de suite intégration paths/sqlite.
- Pas d’entrée `.gitignore` `.sfia-exec`.
- Dettes tech-arch : isolation OS, FinOps numériques, stack/fournisseur.

---

## 16. Réserves maintenues

- `FD-CAND-15` — seuils FinOps numériques **OPEN**
- `UX-R01…R04` **OPEN**
- Stack / fournisseur **non finalisés**
- Worktree ≠ sandbox OS forte
- CI PR **non implémentée**
- GPT live / Cursor live **fermés**
- Delivery I1 / MVP / production **fermés**

---

## 17. Hors périmètre (ce cycle)

Code applicatif · workflows GitHub · `package.json`/lockfiles · SQLite réel · runner · Delivery I1 · live · déploiement · release · production · L4/L5 · modification méthode.

---

## 18. Gates

| Gate | État |
|------|------|
| `G-OPS1-DEVOPS` | **consommé** (ouverture) |
| `G-OPS1-DEVOPS-VAL` | **AWAITING** |
| GO implémentation CI | **non ouvert** |
| GO Delivery I1 | **non ouvert** |
| Gates live | **non ouverts** |

### Conditions minimales avant Delivery I1 (rappel)

1. `G-OPS1-DEVOPS-VAL` consommé (présent pack) ;
2. structure / commandes / tests / stockage / secrets-réseau / chemins validés ou réserves acceptées ;
3. périmètre exact lot I1 + allowlist delivery ;
4. rollback + preuves attendues ;
5. **nouveau GO Morris delivery** explicite (`OPS1-BACKLOG-CAND-17`, `OPS1-TECH-CAND-24`).

---

## 19. Critères de validation du cycle documentaire

- Docs `63`–`65` + README cohérents ;
- commandes EXISTS vs CANDIDATE non confondues ;
- décisions `65` toutes `AWAITING G-OPS1-DEVOPS-VAL` ;
- invariants `57`–`62` respectés ;
- aucun code / CI / dépendance modifiés ;
- review pack + handoff publiés.

**Verdict documentaire candidat :** `OPS1 INTEGRATION DEVOPS FOUNDATION DOCUMENTED — AWAITING G-OPS1-DEVOPS-VAL`

---

*Document candidat — 2026-07-20 21:06:00 CEST — aucune validation Morris de contenu tant que `G-OPS1-DEVOPS-VAL` non consommé.*


---

# Contenu complet — 64

# 64 — OPS1 Local Controls, CI and Evidence Contract

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `64-ops1-local-controls-ci-and-evidence-contract.md` |
| **Complément** | [`63`](./63-ops1-integration-devops-foundation.md) · [`65`](./65-ops1-integration-devops-decision-pack.md) |
| **Statut** | contrat **candidat** — `G-OPS1-DEVOPS-VAL` AWAITING |
| **Horodatage** | 2026-07-20 21:06:00 CEST |
| **Base** | `origin/main` @ `6584646…` |

> Matrice des contrôles locaux et CI candidats pour OPS1.
> Statuts commande : **EXISTS** · **PARTIAL** · **CANDIDATE** · **NOT REQUIRED OPS1**.
> Une commande **CANDIDATE** n’existe pas encore dans le repository comme automatisation OPS1.

---

## 1. Légende des statuts

| Statut | Signification |
|--------|----------------|
| **EXISTS** | Commande ou pratique vérifiable aujourd’hui dans le repo |
| **PARTIAL** | Socle partiel (ex. ignore `.env`) sans outillage complet |
| **CANDIDATE** | À créer dans un futur delivery ou cycle d’implémentation CI/DevOps |
| **NOT REQUIRED OPS1** | Existe éventuellement ailleurs ; hors obligation OPS1 delivery |

Codes retour attendus (convention) : `0` = PASS ; `≠0` = FAIL/STOP ; états métier `REPORT_INCOMPLETE` / `METRICS_INCOMPLETE` ≠ succès silencieux.

---

## 2. Matrice des contrôles

| Contrôle | Portée | Commande actuelle ou candidate | Entrées | Résultat attendu | Preuve | Stop condition | Statut |
|----------|--------|-------------------------------|---------|------------------|--------|----------------|--------|

| Branche / HEAD / base | Git local | `git branch --show-current` · `git rev-parse HEAD` · `git rev-parse origin/main` · `git merge-base` | repo cloné | HEAD = base attendue ou descendante compatible | stdout capturé + SHA | divergence non autorisée / base inconnue | EXISTS |
| Working tree clean (projet) | Git local | `git status --short` | repo | pas de modifs hors allowlist cycle | status dump | modifs hors allowlist | EXISTS |
| Staged vide (pré-commit cycle) | Git local | `git diff --cached --name-only` | index | sortie vide hors staging volontaire | stdout | staging parasite | EXISTS |
| Allowlist fichiers cycle | Doc/Git | revue `git diff --name-status` vs allowlist cycle | diff | uniquement fichiers autorisés | diff name-status | fichier hors allowlist | EXISTS (manuel) / CANDIDATE (script) |
| Fichiers protégés 01–62 / method / prompts | Doc/Git | `git diff` + path denylist | diff | aucun touch protégé | diff | modification protégée | EXISTS (manuel) / CANDIDATE (script) |
| Chemins / realpath / racine | Runtime futur | contrôle runner candidat (realpath + prefix root) | chemins contrat | tous chemins sous racine autorisée | log validation paths | échappe racine | CANDIDATE |
| Allowlist Campus360 | Runtime/scénario | validation listes `allowedReads/Modifies/Creates` | contrat gelé | sous-ensemble exhaustif ; pas de wildcard nu | contrat + preuve négative | path hors allowlist / wildcard | CANDIDATE (runtime) ; règles EXISTS en docs `55` |
| Symlinks | Runtime | detect symlink escape post-realpath | paths | deny escape | log | symlink escape | CANDIDATE |
| Environnement filtré | Runtime | env allowlist runner | process env | uniquement vars non sensibles autorisées | dump redacted env keys | secret ou var interdite | CANDIDATE |
| Secrets scan | Local/CI | scan patterns (gitleaks/candidate) + grep `.env` | tree + diff | 0 secret | rapport scan | secret détecté | PARTIAL (gitignore `.env`) / CANDIDATE (scan outillé) |
| Réseau deny default | Runtime | policy network off + probe | runner | pas d’egress sauf exception gate | preuve config + PN si besoin | egress non autorisé | CANDIDATE |
| Remote Git bloqué | Runtime/Git | wrapper git deny push/fetch remote write | commandes git | remote write refuse | log deny + PN-09 | push/PR/merge auto | CANDIDATE (runtime) ; politique EXISTS `OPS1-TECH-CAND-26` |
| Canonicalisation contrat | Runtime | canonical JSON/MD déterministe | contrat | bytes stables | contrat canonique + hash | divergence canon | CANDIDATE |
| Hash SHA-256 `contractHash` | Runtime | sha256(canon) | contrat | hash stable ; ≠ attemptId | fichier hash | mismatch / confusion IDs | CANDIDATE |
| Gate Morris présent | Fonctionnel | vérif artefact gate decision | session | GO explicite avant exec | gateDecision append-only | exec sans gate | CANDIDATE (impl) ; règle EXISTS docs |
| SQLite opérationnel | Runtime | init schema + integrity_check | path sqlite | schema OK ; hors git | log + schema version | sqlite versionné / corrupt | CANDIDATE |
| Append-only artefacts | Runtime | write-once files under artifacts/ | payloads | pas de rewrite | fs evidence | mutation preuve | CANDIDATE |
| Locks / attempts | Runtime | lock session + `executionAttemptId` | sqlite | un attempt actif ; pas retry auto | rows attempt | double exec / retry auto | CANDIDATE |
| Rapport `REPORT_INCOMPLETE` | Runtime/QA | génération rapport strict | preuves | COMPLETED seulement si couverture OK | rapport | COMPLETED silencieux / incomplete ignoré | CANDIDATE |
| Métriques `METRICS_INCOMPLETE` | Obs | collecte métriques déclarées | rapport | manquantes → état explicite + cause | section metrics | métriques absentes silencieuses | CANDIDATE |
| Lint | App Studio | `npm run lint` (cwd `app`) | sources TS/JS | exit 0 | log lint | lint errors | EXISTS |
| Typecheck | App Studio | `npm run typecheck` | tsconfig | exit 0 | log tsc | erreurs TS | EXISTS |
| Tests unitaires | App Studio | `npm test` (vitest run) | __tests__ | exit 0 | rapport vitest | échec test | EXISTS |
| Tests intégration | App/Runtime | suite intégration candidate | fixtures + fs | exit 0 | rapport | échec / suite absente si exigée | CANDIDATE (Studio) ; PARTIAL si seuls unitaires |
| E2E | App Studio | `npm run test:e2e` | playwright.config + e2e/ | exit 0 | playwright-report/ (non versionné) | échec E2E | EXISTS |
| Build | App Studio | `npm run build` | sources | build Next OK | log build | échec build | EXISTS |
| Installation déterministe | App Studio | `npm ci` | package-lock.json | node_modules aligné lock | log npm ci | lock drift / install ad hoc | EXISTS (commande npm) ; script wrapper CANDIDATE |
| Diff check whitespace | Git | `git diff --check` | diff | clean | stdout | whitespace errors | EXISTS |
| Markdown / liens docs | Docs | lychee/markdown-link-check **candidat** | docs md | liens OK | rapport liens | lien cassé | CANDIDATE |
| Contrôle fichiers protégés CI | CI future | path filter job | PR files | deny method/prompts/.github studio edits hors GO | check annotation | touch protégé | CANDIDATE |
| Anti-effet distant CI | CI/docs | pas de credentials push ; permissions read | workflow | aucun push depuis job | workflow yaml futur | permission write injustifiée | CANDIDATE |
| Artefacts CI rétention | CI | upload-artifact courte | rapports | retention 7–14j candidate | meta artifact | rétention infinie secrets | CANDIDATE |
| Cleanup worktree/runtime | Ops local | script cleanup sous GO | `.sfia-exec` | suppression gouvernée | preuve cleanup | cleanup sans GO / fuite données | CANDIDATE |
| Harness typecheck/test (hist.) | Harness POC | `npm run typecheck` / `npm test` (cwd harness) | harness/ | vert si utilisé | logs | N/A OPS1 delivery tant que non sélectionné | EXISTS mais NOT REQUIRED OPS1 delivery |
| CI Interv360 | Autre projet | workflow `interv360-ci.yml` | interv360 paths | N/A Studio | — | ne pas invoquer comme CI Studio | EXISTS (autre projet) / NOT REQUIRED OPS1 |


---

## 3. Graphe logique des contrôles (ordre)

```text
[0] Truth Git (branche/HEAD/base/status/staged)
        ↓
[1] Allowlist cycle + fichiers protégés + diff --check
        ↓
[2] Install déterministe (npm ci) — si code touché
        ↓
[3] Secrets scan (local)
        ↓
[4] Lint → Typecheck → Unit → (Integration) → Build → E2E
        ↓
[5] (Runtime delivery) Path/realpath/symlink/allowlist Campus360
        ↓
[6] Env filter + network deny + remote Git deny
        ↓
[7] Contract canon + contractHash + gateDecision
        ↓
[8] SQLite + locks + attemptId (≠ hash)
        ↓
[9] Append-only artefacts + rapport
        ↓
[10] Metrics completeness → PASS | REPORT_INCOMPLETE | METRICS_INCOMPLETE
        ↓
[11] Cleanup gouverné (GO distinct) — hors chemin nominal happy-path
```

CI PR candidate (futur) rejoue un sous-ensemble **sans secrets** des étapes [1]–[4] (+ doc-guard), jamais les effets runtime distants.

---

## 4. Règles fail-closed

1. Toute absence de preuve exigée ⇒ **FAIL** ou **INCOMPLETE**, jamais PASS implicite.
2. Secret détecté ⇒ **STOP** immédiat.
3. Path/symlink/allowlist violation ⇒ **STOP** ; pas d’exécution.
4. Remote Git write tenté ⇒ **STOP** + preuve négative.
5. Retry automatique après échec attempt ⇒ **STOP** (interdit).
6. `COMPLETED` avec preuves/métriques manquantes ⇒ **STOP** / invalidation.

---

## 5. Convention de rapport de contrôle

```text
controlId: <id>
status: PASS | FAIL | REPORT_INCOMPLETE | METRICS_INCOMPLETE
command: <cmd or N/A>
exitCode: <n>
headSha: <sha>
contractHash: <sha|null>
executionAttemptId: <id|null>
artifactPath: <path|null>
notes: <redacted>
```

---

## 6. États incomplets

| État | Quand | Effet |
|------|-------|-------|
| `REPORT_INCOMPLETE` | preuves/couverture insuffisantes | bloque clôture SUCCESS ; pas de retry auto |
| `METRICS_INCOMPLETE` | métriques obligatoires absentes | explicite + cause ; pas COMPLETED masquant |

---

## 7. Matrice contrôle → backlog stories

| Contrôle (groupe) | Stories |
|-------------------|---------|
| Git HEAD/base/working tree | E05-02 · E15-01 |
| Allowlist / paths / symlinks / realpath | E06-01 · E06-02 · E06-03 |
| Contract hash / canon / gate | E05-01 · E05-03 · E04-* |
| Worktree / runner / env / network / remote | E07-01 · E07-02 · E07-03 · E14-01 · E14-02 |
| SQLite / append-only | E08-01 · E08-02 |
| Locks / attempts / recovery / no retry | E09-01…E09-04 |
| Rapport / PN remote | E10-01 · E10-02 |
| Observabilité / métriques | E13-01 · E13-02 |
| Lint/typecheck/unit/E2E/build locaux | E15-01 |
| CI PR | **E15-02** (sous GO DevOps impl + VAL) |
| Fixture ≠ live | E02-03 |
| FinOps placeholder | E16-01 (FD-CAND-15) |
| Anti-claims I7 | E17-01 · E17-02 |

---

## 8. Matrice contrôle → décisions techniques

| Contrôle (groupe) | `OPS1-TECH-CAND` |
|-------------------|------------------|
| Isolation worktree / runner | 01 · 02 |
| Network / secrets | 03 · 04 |
| Paths / symlinks | 05 · 06 |
| Canon / hash / HEAD | 07 · 08 · 09 · 25 |
| Branche exec / no commit auto | 10 · 11 |
| SQLite + append-only | 12 |
| Idempotence / lock / recovery / incomplete | 14 · 15 · 16 · 17 |
| Audit / obs | 18 · 19 |
| CI local vs PR | **20** |
| Cleanup GO | 21 |
| FinOps | 22 |
| Delivery open | 24 |
| Remote block | **26** |

---

## 9. Matrice contrôles → preuves delivery futures

| Preuve delivery | Contrôles sources |
|-----------------|-------------------|
| Journal session I1 | HEAD/base · rapport · metrics |
| Contrat + hash | canon · hash · gate |
| Preuve négative remote | remote deny · PN |
| Preuve paths | realpath · allowlist · symlink |
| Rapport clôture | REPORT/METRICS completeness |
| Qualité code lot | lint · typecheck · unit · build · e2e |

---

## 10. Inventaire commandes

### 10.1 EXISTS (Studio `app/`)

- `npm ci` (pratique lockfile)
- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run test:e2e`
- `npm run build`
- `npm run dev` / `start` (runtime dev — pas contrôle CI socle obligatoire)
- Git : `status`, `diff`, `rev-parse`, `diff --check`

### 10.2 EXISTS ailleurs / NOT REQUIRED OPS1 delivery

- Harness : `typecheck`, `test`, `build`, spikes
- CI Interv360 workflow

### 10.3 CANDIDATE (à ne pas présenter comme existantes)

- Script monorepo `ops1:controls`
- Scanner secrets outillé
- Suite intégration paths/sqlite/runner
- Wrapper git deny-remote
- Network/env policy enforcement
- Markdown link check CI
- Workflow `.github/workflows/sfia-studio-ops1-ci.yml`
- Cleanup `.sfia-exec` gouverné
- Pin `engines.node`

---

## 11. Hors périmètre

Implémentation CI · modification `.github/**` · installation deps · delivery I1 · live · déploiement.

---

*Contrat candidat — 2026-07-20 21:06:00 CEST — AWAITING `G-OPS1-DEVOPS-VAL`.*

---

# Contenu complet — 65

# 65 — OPS1 Integration / DevOps Decision Pack

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `65-ops1-integration-devops-decision-pack.md` |
| **Compléments** | [`63`](./63-ops1-integration-devops-foundation.md) · [`64`](./64-ops1-local-controls-ci-and-evidence-contract.md) |
| **Statut** | décision pack **candidat** |
| **Gate validation** | `G-OPS1-DEVOPS-VAL` — **AWAITING** |
| **Horodatage** | 2026-07-20 21:06:00 CEST |
| **Nombre de candidats** | 24 (`OPS1-DEVOPS-CAND-01…24`) |

> Toutes les décisions Morris ci-dessous valent **`AWAITING G-OPS1-DEVOPS-VAL`**.
> Aucune n’est validée. Aucune n’ouvre CI, delivery, live, MVP ou production.

---

## Synthèse

| Indicateur | Valeur |
|------------|--------|
| Décisions candidates | 24 |
| Validées | 0 |
| `AWAITING G-OPS1-DEVOPS-VAL` | 24 |
| CI implémentée | Non |
| Delivery I1 | Non ouvert |
| Réserves levées | 0 |

---

## OPS1-DEVOPS-CAND-01 — Structure du repository OPS1

| Champ | Contenu |
|-------|---------|
| **Sujet** | Structure du repository OPS1 |
| **Proposition** | Conserver `projects/sfia-studio/app/**` comme Studio ; docs `NN-*.md` ; runtime OPS1 futur dans module dédié (ex. `projects/sfia-studio/runtime/`) distinct du harness POC ; état exec sous `.sfia-exec/<executionId>/`. |
| **Alternatives** | Tout fusionner dans `app/` · Réutiliser `harness/` comme runtime OPS1 sans frontière |
| **Justification** | Respecte AF-Option C et tech-arch ; évite confusion POC/OPS1 |
| **Impacts** | Clarté delivery ; ignore policies |
| **Risques** | Confusion harness=runtime |
| **Dette** | Migration harness ultérieure possible |
| **Réserve** | Ne pas créer les dossiers dans ce cycle |
| **Recommandation** | Adopter la structure candidate documentée |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-02 — Frontières Studio / runtime

| Champ | Contenu |
|-------|---------|
| **Sujet** | Frontières Studio / runtime |
| **Proposition** | Studio = cockpit UI/domaine ; runtime/runner = exécution gouvernée (contrats, paths, git wrapper) ; pas d’auto-GO UI. |
| **Alternatives** | Orchestrateur monolithique dans Next.js |
| **Justification** | Aligné décisions archi fonctionnelle + technique |
| **Impacts** | Séparation tests UI vs contrôles runtime |
| **Risques** | Fuite d’autorité vers UI |
| **Dette** | Adapters à concevoir en delivery |
| **Réserve** | — |
| **Recommandation** | Maintenir séparation stricte |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-03 — Emplacement SQLite

| Champ | Contenu |
|-------|---------|
| **Sujet** | Emplacement SQLite |
| **Proposition** | SQLite local non versionné sous `.sfia-exec/<executionId>/state/ops1.sqlite` (chemin exact figé à l’implémentation). |
| **Alternatives** | SQLite dans `app/` versionné · DB cloud |
| **Justification** | OPS1-TECH-CAND-12 ; pas de store Git opérationnel |
| **Impacts** | gitignore ; backup/purge |
| **Risques** | Commit accidentel DB |
| **Dette** | Outil admin local futur |
| **Réserve** | FD-CAND-15 indépendant |
| **Recommandation** | Adopter emplacement sous `.sfia-exec` |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-04 — Emplacement artefacts append-only

| Champ | Contenu |
|-------|---------|
| **Sujet** | Emplacement artefacts append-only |
| **Proposition** | `.sfia-exec/<executionId>/artifacts/` pour contrats, gateDecision, rapports, diffs, preuves, logs redacted. |
| **Alternatives** | Commit systématique des artefacts · stdout only |
| **Justification** | Preuves immuables corrélées hash/attempt |
| **Impacts** | Rétention ; exports Morris |
| **Risques** | Rewrite de preuves |
| **Dette** | Export sélectif versionné sous GO |
| **Réserve** | — |
| **Recommandation** | Adopter artifacts/ append-only |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-05 — Politique fichiers temporaires et `.gitignore`

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique fichiers temporaires et `.gitignore` |
| **Proposition** | Ignorer `.sfia-exec/`, `*.sqlite*`, caches build/test déjà ignorés côté app ; conserver docs/code versionnés. |
| **Alternatives** | Versionner worktrees exec |
| **Justification** | Évite bruit git et fuites |
| **Impacts** | Update root/app gitignore en cycle implémentation |
| **Risques** | Oublier ignore ⇒ commit runtime |
| **Dette** | Dette ignore actuelle |
| **Réserve** | Aucune création ignore dans ce cycle |
| **Recommandation** | Valider politique ; implémentation ultérieure |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-06 — Installation déterministe

| Champ | Contenu |
|-------|---------|
| **Sujet** | Installation déterministe |
| **Proposition** | `npm ci` dans `projects/sfia-studio/app` comme standard ; interdiction de modifier lockfile hors GO deps. |
| **Alternatives** | `npm install` libre · pnpm sans lock partagé |
| **Justification** | Lockfile déjà présent |
| **Impacts** | Reproductibilité locale/CI |
| **Risques** | Drift lockfile |
| **Dette** | Pin Node engines manquant |
| **Réserve** | Pas d’install dans ce cycle |
| **Recommandation** | Adopter npm ci comme norme Studio |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-07 — Gestion des dépendances

| Champ | Contenu |
|-------|---------|
| **Sujet** | Gestion des dépendances |
| **Proposition** | Ajout/maj deps uniquement sous GO Morris delivery/deps ; audit vulnerabilities (ex. postcss via Next) tracé en dette. |
| **Alternatives** | Upgrade Continu automatique |
| **Justification** | Gouvernance POC maintenu |
| **Impacts** | Sécurité supply-chain |
| **Risques** | CVE non traités |
| **Dette** | Dette moderate postcss ouverte |
| **Réserve** | — |
| **Recommandation** | Gel deps hors GO explicite |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-08 — Commandes locales socle

| Champ | Contenu |
|-------|---------|
| **Sujet** | Commandes locales socle |
| **Proposition** | Socle obligatoire avant delivery code : `npm ci`, `lint`, `typecheck`, `test`, `build`, `test:e2e` (+ `git diff --check`) quand le lot touche `app/**`. |
| **Alternatives** | Uniquement E2E · skip typecheck |
| **Justification** | Commandes EXISTS déjà |
| **Impacts** | DoD qualité |
| **Risques** | False sense si runtime non testé |
| **Dette** | Scripts agrégateurs candidats |
| **Réserve** | — |
| **Recommandation** | Contractualiser le socle EXISTS |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-09 — Stratégie de tests

| Champ | Contenu |
|-------|---------|
| **Sujet** | Stratégie de tests |
| **Proposition** | Pyramide : unit EXISTS → integration CANDIDATE (paths/sqlite/runner) → E2E UI EXISTS ; fixture≠live ; live hors CI socle. |
| **Alternatives** | E2E only · live in CI |
| **Justification** | Aligné E15 / tech-arch |
| **Impacts** | Couverture contrôles |
| **Risques** | Trous integration |
| **Dette** | Suites à créer en delivery |
| **Réserve** | — |
| **Recommandation** | Adopter pyramide documentée |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-10 — Stratégie CI PR candidate

| Champ | Contenu |
|-------|---------|
| **Sujet** | Stratégie CI PR candidate |
| **Proposition** | CI PR Studio path-filtered, sans secrets, permissions read, jobs doc-guard + app-quality (+ e2e optionnel) ; **non implémentée** tant que GO implémentation distinct après VAL. |
| **Alternatives** | Réutiliser Interv360 CI · CI avec secrets GPT |
| **Justification** | OPS1-TECH-CAND-20 · BACKLOG-CAND-18 |
| **Impacts** | Qualité PR |
| **Risques** | Scope creep workflow monorepo |
| **Dette** | YAML à écrire plus tard |
| **Réserve** | Aucun fichier .github modifié maintenant |
| **Recommandation** | Valider stratégie ; n’implémenter qu’après GO CI |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-11 — Permissions CI

| Champ | Contenu |
|-------|---------|
| **Sujet** | Permissions CI |
| **Proposition** | `contents: read` minimal ; pas de `pull-requests: write` ni secrets ; forks sans credentials. |
| **Alternatives** | Permissions write pour commentaires |
| **Justification** | Moindre privilège |
| **Impacts** | Surface d’attaque |
| **Risques** | Escalade future |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Adopter least privilege |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-12 — Politique secrets

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique secrets |
| **Proposition** | Interdit secrets dans env runner, prompts, rapports, artefacts, logs CI ; `.env*` ignoré ; scan CANDIDATE. |
| **Alternatives** | Secrets en variables repo pour E2E live |
| **Justification** | OPS1-TECH-CAND-04 |
| **Impacts** | Conformité |
| **Risques** | Fuite via artefacts |
| **Dette** | Scanner à brancher |
| **Réserve** | — |
| **Recommandation** | Fail-closed secrets |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-13 — Politique réseau

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique réseau |
| **Proposition** | Deny by default runner ; CI socle sans besoin egress fournisseur ; live = exception gate Morris. |
| **Alternatives** | Network on by default |
| **Justification** | OPS1-TECH-CAND-03 |
| **Impacts** | Isolation |
| **Risques** | Tests live mal classés |
| **Dette** | Contrôle technique OS limité (dette sandbox) |
| **Réserve** | Worktree ≠ sandbox forte rappelée |
| **Recommandation** | Adopter deny default |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-14 — Politique cache CI

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique cache CI |
| **Proposition** | Cache npm scoped au workflow Studio ; pas de cache partagé forks ; invalidation sur lockfile. |
| **Alternatives** | Cache global monorepo permissif |
| **Justification** | Perf vs isolation |
| **Impacts** | Temps jobs |
| **Risques** | Poisoning cache |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Cache npm scoped only |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-15 — Politique artefacts CI

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique artefacts CI |
| **Proposition** | Uploader rapports test/lint en artefacts courte durée ; redaction ; pas de sqlite/runtime. |
| **Alternatives** | Artefacts illimités |
| **Justification** | Preuve PR |
| **Impacts** | Stockage Actions |
| **Risques** | Fuite données |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Rétention courte + redaction |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-16 — Politique rétention locale runtime

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique rétention locale runtime |
| **Proposition** | Conserver `.sfia-exec/<id>` jusqu’à revue/cleanup GO (`OPS1-TECH-CAND-21`) ; purge explicite ; pas de TTL silencieux détruisant preuves requises. |
| **Alternatives** | Purge auto 24h |
| **Justification** | Traçabilité |
| **Impacts** | Disque local |
| **Risques** | Perte preuves |
| **Dette** | Procédure cleanup |
| **Réserve** | — |
| **Recommandation** | Cleanup seulement sous GO |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-17 — Contrôle fichiers protégés

| Champ | Contenu |
|-------|---------|
| **Sujet** | Contrôle fichiers protégés |
| **Proposition** | Denylist : `method/**`, `prompts/**`, `.github/**` (hors GO CI), `01`–`62` hors cycles autorisés, secrets, lockfiles non allowlistés, Campus360 hors contrat. |
| **Alternatives** | Allow all under projects/ |
| **Justification** | Scénario + tech-arch |
| **Impacts** | Gouvernance |
| **Risques** | Modification opportuniste |
| **Dette** | Script guard CANDIDATE |
| **Réserve** | — |
| **Recommandation** | Fail-closed protected paths |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-18 — Contrôle Git remote

| Champ | Contenu |
|-------|---------|
| **Sujet** | Contrôle Git remote |
| **Proposition** | Runner : deny push/fetch-write/PR/merge ; preuves négatives ; humains seuls sous GO. |
| **Alternatives** | Auto-push branche scenario |
| **Justification** | OPS1-TECH-CAND-26 · PN-09 |
| **Impacts** | Sécurité |
| **Risques** | Wrapper incomplet |
| **Dette** | Implémentation delivery |
| **Réserve** | — |
| **Recommandation** | Bloquer remote par défaut |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-19 — Gestion `REPORT_INCOMPLETE`

| Champ | Contenu |
|-------|---------|
| **Sujet** | Gestion `REPORT_INCOMPLETE` |
| **Proposition** | Rapport STRICT : incomplete ⇒ non SUCCESS ; pas retry auto ; nouvel attempt = Morris (`OPS1-TECH-CAND-17`). |
| **Alternatives** | COMPLETED soft |
| **Justification** | Invariant validé tech-arch |
| **Impacts** | DoD preuves |
| **Risques** | Masquage échecs |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Enforcer REPORT_INCOMPLETE |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-20 — Gestion `METRICS_INCOMPLETE`

| Champ | Contenu |
|-------|---------|
| **Sujet** | Gestion `METRICS_INCOMPLETE` |
| **Proposition** | Métriques obligatoires absentes ⇒ `METRICS_INCOMPLETE` + cause ; aligné E13-02 / BACKLOG-CAND-13. |
| **Alternatives** | Omettre section metrics |
| **Justification** | Revue backlog corrections |
| **Impacts** | Observabilité |
| **Risques** | FinOps incomplets (FD-CAND-15) |
| **Dette** | Seuils numériques absents |
| **Réserve** | FD-CAND-15 OPEN |
| **Recommandation** | Exiger état explicite |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-21 — Gates vers Delivery I1

| Champ | Contenu |
|-------|---------|
| **Sujet** | Gates vers Delivery I1 |
| **Proposition** | I1 nécessite : `G-OPS1-DEVOPS-VAL` consommé ; socle contrôles/commandes accepté ; DoR backlog ; allowlist lot ; rollback ; **GO Delivery I1** distinct. |
| **Alternatives** | Ouvrir I1 dès docs DevOps écrits |
| **Justification** | BACKLOG-CAND-17 · TECH-CAND-24 |
| **Impacts** | Séquencement sûr |
| **Risques** | Ouverture prématurée |
| **Dette** | — |
| **Réserve** | I1 = E01+E12 session |
| **Recommandation** | Ne pas ouvrir I1 dans ce cycle |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-22 — Critères d’ouverture CI implémentée

| Champ | Contenu |
|-------|---------|
| **Sujet** | Critères d’ouverture CI implémentée |
| **Proposition** | Créer workflow Studio seulement après `G-OPS1-DEVOPS-VAL` **et** `GO IMPLEMENT OPS1 CI` (nom indicatif) distinct ; YAML minimal conforme CAND-10/11. |
| **Alternatives** | Implémenter CI dans le cycle de validation doc |
| **Justification** | Séparation doc vs impl |
| **Impacts** | Contrôle changement .github |
| **Risques** | PR CI trop large |
| **Dette** | — |
| **Réserve** | Aucun YAML maintenant |
| **Recommandation** | Exiger GO implémentation CI séparé |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-23 — Rollback

| Champ | Contenu |
|-------|---------|
| **Sujet** | Rollback |
| **Proposition** | Docs : revert ; runtime : delete worktree sous GO ; CI : disable workflow ; delivery : revert PR ; jamais force-push main. |
| **Alternatives** | Reset hard partagé |
| **Justification** | Sécurité Git |
| **Impacts** | Récupération |
| **Risques** | Manipulation historique |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Adopter rollback non destructif |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

## OPS1-DEVOPS-CAND-24 — Dette et réserves

| Champ | Contenu |
|-------|---------|
| **Sujet** | Dette et réserves |
| **Proposition** | Maintenir ouvertes : FD-CAND-15, UX-R01…R04, stack/fournisseur, sandbox OS, CI non implémentée, live fermés ; tracer dette engines Node + suites integration + ignore `.sfia-exec`. |
| **Alternatives** | Lever réserves implicitement |
| **Justification** | Cohérence packs validés |
| **Impacts** | Transparence |
| **Risques** | Oubli réserves |
| **Dette** | Liste dette §15 doc 63 |
| **Réserve** | Aucune levée ici |
| **Recommandation** | Conserver réserves explicites |
| **Décision Morris** | `AWAITING G-OPS1-DEVOPS-VAL` |

---

## Traceabilité vers sources

| Candidat | Sources principales |
|----------|---------------------|
| 01–05 | `57`–`58` · TECH-CAND-01/12/21 |
| 06–09 | `app/package.json` · TECH-CAND-20 · E15 |
| 10–16 | TECH-CAND-03/04/20/26 · BACKLOG-CAND-18 |
| 17–20 | `55` · TECH-CAND-05/06/17/26 · E13 |
| 21–24 | BACKLOG-CAND-17/18 · TECH-CAND-24 · réserves FD/UX |

---

## Anti-claims

Interdit de conclure de ce pack :

- `FULL CI IMPLEMENTED`
- `READY FOR DELIVERY` / `READY FOR IMPLEMENTATION`
- `SANDBOX STRONG ISOLATION`
- `STACK FINALIZED`
- `LIVE READY`
- levée de `FD-CAND-15` ou `UX-R01…R04`

---

## Gate Morris attendu

`G-OPS1-DEVOPS-VAL` — validation sans réserve / avec réserves ou amendements / correction / rejet.

Décisions futures **distinctes** possibles après VAL : GO implémentation CI · GO Delivery I1 · gates live.

---

*Pack candidat — 2026-07-20 21:06:00 CEST — 0 décisions validées.*


---

# Diff README

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index d1b4ad6..0411b13 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,7 +4,7 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-ops1-framing-validated-with-reservations` — A–E **CLOSED_WITH_RESERVATIONS** ; cadrage OPS1 **VALIDATED WITH RESERVATIONS** (`41`–`44` intégrés sur `main` via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235), squash `b686eb1`) ; cleanup branche documentaire effectué ; **POC maintenu** ; backlog OPS1 **validé avec réserves** (`60`–`62`) ; live / delivery / code / DevOps / MVP / production **fermés** |
+| **Statut** | `poc-ops1-framing-validated-with-reservations` — A–E **CLOSED_WITH_RESERVATIONS** ; cadrage OPS1 **VALIDATED WITH RESERVATIONS** (`41`–`44` intégrés sur `main` via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235), squash `b686eb1`) ; cleanup branche documentaire effectué ; **POC maintenu** ; backlog OPS1 **validé avec réserves** (`60`–`62` sur `main`) ; cycle Intégration / DevOps **documentaire ouvert** (`63`–`65` ; `G-OPS1-DEVOPS-VAL` **AWAITING**) ; CI implémentée / live / delivery / code / MVP / production **fermés** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
 | **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
@@ -21,7 +21,7 @@
 | **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
 | **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
 | **POC** | **Non lancé** (pas d’industrialisation / daemon) |
-| **Prochaine décision** | Choix Morris : revue PR / merge éventuel / GO delivery ou DevOps — **non automatiques** ; backlog OPS1 **validé avec réserves** |
+| **Prochaine décision** | `G-OPS1-DEVOPS-VAL` (validation pack `63`–`65`) — **non automatique** ; CI implémentée / Delivery I1 / live **fermés** tant que GO distincts non consommés |
 
 ---
 
@@ -370,11 +370,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 1. Scénario OPS1 **validé avec amendements** — docs [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md).
 2. Architecture technique OPS1 — docs [`57`](./57-ops1-technical-architecture.md)–[`59`](./59-ops1-technical-architecture-decision-pack.md) **validés avec amendements**.
-3. Backlog OPS1 — docs [`60`](./60-ops1-backlog-framing-and-prioritization.md)–[`62`](./62-ops1-backlog-decision-pack.md) **validés avec réserves** · `G-OPS1-BACKLOG-VAL` consommé (2026-07-20 20:52:00 CEST) · 17 epics / 41 stories / 20 décisions · corrections de revue intégrées.
-4. Delivery / code / Intégration-DevOps / live GPT-Cursor / MVP / production — **FERMÉS** (GO Morris distincts requis ; non ouverts automatiquement).
-5. Réserves restantes : FD-CAND-15 · UX-R01…R04 · stack/fournisseur non finalisés · worktree ≠ sandbox OS forte · CI PR = cycle DevOps distinct · gates live distincts.
+3. Backlog OPS1 — docs [`60`](./60-ops1-backlog-framing-and-prioritization.md)–[`62`](./62-ops1-backlog-decision-pack.md) **validés avec réserves** · `G-OPS1-BACKLOG-VAL` consommé (2026-07-20 20:52:00 CEST) · intégrés sur `main` (PR [#244](https://github.com/mcleland147/sfia-workspace/pull/244) / `6584646…`) · 17 epics / 41 stories / 20 décisions.
+4. Intégration / DevOps OPS1 — docs [`63`](./63-ops1-integration-devops-foundation.md)–[`65`](./65-ops1-integration-devops-decision-pack.md) **candidats** · gate ouverture `G-OPS1-DEVOPS` consommée · **`G-OPS1-DEVOPS-VAL` AWAITING** · CI **non implémentée** · aucun code / `.github/**` modifié dans ce cycle.
+5. Delivery / code / CI implémentée / live GPT-Cursor / MVP / production — **FERMÉS** (GO Morris distincts requis ; non ouverts automatiquement).
+6. Réserves restantes : FD-CAND-15 · UX-R01…R04 · stack/fournisseur non finalisés · worktree ≠ sandbox OS forte · CI PR = implémentation sous GO distinct · gates live distincts.
 
-**Verdict documentaire courant :** `SFIA STUDIO OPS1 BACKLOG VALIDATED WITH RESERVATIONS`
+**Verdict documentaire courant :** `SFIA STUDIO OPS1 INTEGRATION DEVOPS FOUNDATION DOCUMENTED — AWAITING G-OPS1-DEVOPS-VAL`
 
 
 ---
@@ -391,7 +392,8 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | UX/UI OPS1 | Docs `51`–`53` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-UX-VAL` 2026-07-20 16:52 CEST) ; Figma page `61:2` référence desktop ; UX-R01…UX-R04 ouvertes |
 | Scénario OPS1 | Docs `54`–`56` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-SCENARIO-VAL` — 2026-07-20 18:34:47 CEST) ; FD-CAND-13/20/26 levées (OPS1) ; FD-CAND-15 maintenue ; UX-R01…R04 maintenues |
 | Architecture technique OPS1 | Docs `57`–`59` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-TECH-ARCH-VAL` — 2026-07-20 19:17:11 CEST) ; 26 CAND validées ; stack non finalisée |
-| Backlog OPS1 | Docs `60`–`62` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-BACKLOG-VAL` — 2026-07-20 20:52:00 CEST) ; 17 epics / 41 stories / 20 décisions ; delivery/code/DevOps/live/MVP fermés |
+| Backlog OPS1 | Docs `60`–`62` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-BACKLOG-VAL` — 2026-07-20 20:52:00 CEST) ; intégrés sur `main` (PR #244) ; 17 epics / 41 stories / 20 décisions |
+| Intégration / DevOps OPS1 | Docs `63`–`65` — **CANDIDATE** (`G-OPS1-DEVOPS` ouvert ; `G-OPS1-DEVOPS-VAL` **AWAITING**) ; CI implémentée / delivery / live / MVP **fermés** |
 | Handoff | `sfia/review-handoff` |
 
 ---
@@ -467,4 +469,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [61-ops1-epics-stories-and-acceptance-criteria.md](./61-ops1-epics-stories-and-acceptance-criteria.md) | 17 epics / 41 stories — **VALIDATED WITH RESERVATIONS** |
 | [62-ops1-backlog-decision-pack.md](./62-ops1-backlog-decision-pack.md) | `OPS1-BACKLOG-CAND-01`…`20` — **VALIDATED WITH RESERVATIONS** (2026-07-20 20:52:00 CEST) |
 
-*SFIA Studio — POC maintenu — OPS1 backlog VALIDATED WITH RESERVATIONS — non encore intégré sur `main` tant que PR non mergée — delivery / MVP non ouverts.*
+### Intégration / DevOps OPS1 (candidat — `G-OPS1-DEVOPS-VAL` AWAITING)
+
+| Document | Rôle |
+|----------|------|
+| [63-ops1-integration-devops-foundation.md](./63-ops1-integration-devops-foundation.md) | Socle intégration / structure / CI candidate / secrets·réseau / stockage |
+| [64-ops1-local-controls-ci-and-evidence-contract.md](./64-ops1-local-controls-ci-and-evidence-contract.md) | Matrice contrôles / commandes / preuves / stop conditions |
+| [65-ops1-integration-devops-decision-pack.md](./65-ops1-integration-devops-decision-pack.md) | `OPS1-DEVOPS-CAND-01`…`24` — **AWAITING G-OPS1-DEVOPS-VAL** |
+
+*SFIA Studio — POC maintenu — backlog OPS1 VALIDATED WITH RESERVATIONS (sur `main`) — Intégration/DevOps documentaire candidat — CI / delivery / live / MVP non ouverts.*

```
