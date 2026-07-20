# 63 — OPS1 Integration / DevOps Foundation

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `63-ops1-integration-devops-foundation.md` |
| **Projet** | SFIA Studio — Vertical Slice Opérationnel 1 (OPS1) |
| **Cycle** | 7 — Intégration / DevOps |
| **Profil** | Standard |
| **Typologie** | DOC / DEVOPS / INTEGRATION / QA / SECURITY |
| **Statut** | `devops-foundation-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 21:27:26 CEST) |
| **Gate ouverture** | `G-OPS1-DEVOPS` **consommé** — 2026-07-20 21:06:00 CEST |
| **Gate validation** | `G-OPS1-DEVOPS-VAL` **consommé** — 2026-07-20 21:27:26 CEST |
| **Décision Morris validation** | `GO G-OPS1-DEVOPS-VAL — VALIDATION AVEC RÉSERVES` |
| **Décision Morris ouverture** | `GO G-OPS1-DEVOPS — OPEN INTEGRATION / DEVOPS CYCLE` |
| **Branche** | `devops/sfia-studio-ops1-foundation` |
| **Base** | `origin/main` @ `6584646066dbd6f7002b20200e513026e3a880df` |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor (documentaire) |

> Socle Intégration / DevOps OPS1 **validé avec réserves** sous `G-OPS1-DEVOPS-VAL` (2026-07-20 21:27:26 CEST).
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
6. decision pack `65` validé avec réserves sous `G-OPS1-DEVOPS-VAL`.

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
| `.sfia-exec/**` | **Ignoré** via root `.gitignore` `projects/sfia-studio/.sfia-exec/**` — preuve `git check-ignore` (2026-07-20 21:16:34 CEST) ; dossier **non créé** |
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

### 4.1 Isolation worktree (réserve structurelle)

Statut : `ACCEPTED STRUCTURAL RESERVATION`.

- Worktree = **isolation Git** uniquement — **interdit** de revendiquer « sandbox strong isolation ».
- Compensations : network deny · env filtré · secrets absents · remote Git deny · preuves négatives.
- Isolation OS réelle (container/VM) = trajectoire future sous gate Morris distinct — **non** ajoutée automatiquement.


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

### 5.2 `.gitignore` runtime OPS1

| Règle | État |
|-------|------|
| `projects/sfia-studio/.sfia-exec/**` (root `.gitignore`) | **APPLIQUÉE** — `CLOSED — EVIDENCE PROVIDED` (2026-07-20 21:16:34 CEST) |
| `*.sqlite*` patterns supplémentaires | **CANDIDATE** optionnel (déjà couvert sous `.sfia-exec/**`) |
| `.gitkeep` sous `.sfia-exec` | **Non créé** — non nécessaire tant que le dossier n’existe pas |
| Docs `63`–`65` / code versionné | **Non ignorés** |

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
| Node | **Aucune version canonique Studio** démontrée (pas de `.nvmrc` / `.node-version` / `engines` dans `app/package.json` ; CI Interv360 Node 20 = **autre projet** ; harness `engines.node >=20` = package harness, pas Studio ; local observé `v24.16.0` ≠ décision). Pin = **TREATED — REMAINS OPEN** — choix sous `G-OPS1-DEVOPS-VAL` ou gate Node distinct. **`package.json` non modifié.** |

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

### 8.1 Scanner secrets — état et contrat futur

| Élément | État / exigence |
|---------|-----------------|
| Aujourd’hui | `.env*` ignoré (**PARTIAL**) ; **aucun** scanner OPS1 automatisé ; grep manuel ≠ scanner complet |
| Statut réserve | `DEFERRED — DISTINCT IMPLEMENTATION GATE` |
| Gate | `GO IMPLEMENT OPS1 SECRET SCANNING` |
| Contrôle minimal pré-delivery (manuel) | revue diff + absence `.env` tracké + patterns évidents ; **non** présenté comme EXISTS outillé |
| Scanner futur — entrées | tree allowlisté + `git diff` ; exclusions contrôlées (fixtures faux positifs documentés) |
| Sorties / codes | exit `0` clean · `≠0` secret ou erreur ; rapport redacted |
| Preuve | rapport scan + SHA + liste paths scannés |
| Faux positifs | allowlist revue Morris ; pas de disable global |

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

### 10.1 Périmètre minimal suites d’intégration runtime (CANDIDATE — non créées)

Statut : `DEFERRED — DELIVERY I1 OR DEVOPS IMPLEMENTATION GATE`.

Couvrir au minimum : `realpath` · allowlist · symlink escape · canonicalisation/`contractHash` · SQLite schema/integrity · locks/`executionAttemptId` · append-only · `REPORT_INCOMPLETE` · `METRICS_INCOMPLETE` · remote Git deny · network/env deny.

Mapping : E05–E10 · E13–E15 · TECH-CAND-03…06 · 12 · 14…17 · 26.

**Aucun fichier de test créé dans ce cycle.**


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
| Implémentation | **uniquement** après `G-OPS1-DEVOPS-VAL` **et** `GO IMPLEMENT OPS1 CI` distinct |
| Path filters | `projects/sfia-studio/**` + fichier workflow |
| Install | `npm ci` |
| Jobs qualité | lint · typecheck · unit · build · E2E selon stratégie validée |
| Doc/protected guard | deny method/prompts/protected |
| Incomplete | fail-closed |
| Statut réserve | `DEFERRED — GO IMPLEMENT OPS1 CI REQUIRED` |

### 11.1 Locaux vs CI PR

| Besoin | Exigence |
|--------|----------|
| Avant Delivery I1 | **Contrôles locaux** socle (EXISTS + runtime tests quand livrés) — CI PR **pas** nécessairement préalable |
| Avant PR readiness / intégration lot | CI PR candidate sous `GO IMPLEMENT OPS1 CI` |


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
| Commit accidentel runtime (mitigé) | `.sfia-exec/**` ignoré — garder discipline paths |

---

## 15. Dette résiduelle (après traitement réserves)

- Pin Node / `engines` Studio **non figé** (pas de preuve canonique — Cas B).
- Pas de script racine monorepo pour contrôles OPS1.
- Pas de suite intégration runtime (paths/sqlite/runner).
- Pas de scanner secrets outillé OPS1 (`.env*` ignore = PARTIAL seulement).
- CI Studio non implémentée.
- Dettes structurelles : isolation OS (worktree ≠ sandbox), FinOps numériques, stack/fournisseur.

---


## 16. Matrice de traitement des réserves (2026-07-20 21:16:34 CEST)

Gate consommé : `GO TREAT OPS1 DEVOPS RESERVATIONS`.

| Réserve | Nature | Traitement dans ce cycle | Preuve | Statut après cycle | Gate suivant |
|---------|--------|--------------------------|--------|--------------------|--------------|
| `.sfia-exec/**` absent du `.gitignore` | Config Git faible risque | Ajout règle root `.gitignore` `projects/sfia-studio/.sfia-exec/**` ; docs alignés ; dossier non créé | `git check-ignore -v` positif sur `…/state.sqlite` et `…/artifacts/report.json` | `CLOSED — EVIDENCE PROVIDED` | — |
| Version Node non figée | Config engines | Recherche canonique (nvmrc/CI Studio/tooling/docs) ; **aucune** version inventée ; `app/package.json` **inchangé** | Absence `.nvmrc`/`.node-version`/engines Studio ; Interv360 Node 20 hors périmètre Studio ; harness `>=20` ≠ pin Studio ; local `v24.16.0` = observation | `TREATED — REMAINS OPEN` | `G-OPS1-DEVOPS-VAL` ou gate sélection Node |
| Scanner secrets non outillé | Sécurité outillage | Spécification contrôle minimal + critères scanner futur ; **pas** d’install outil | `.env*` ignoré (PARTIAL) ; aucun scanner OPS1 automatisé | `DEFERRED — DISTINCT IMPLEMENTATION GATE` | `GO IMPLEMENT OPS1 SECRET SCANNING` |
| Suites intégration runtime absentes | QA runtime | Périmètre minimal documenté (realpath, allowlist, symlink, hash, sqlite, locks, append-only, incomplete, remote/network deny) ; **pas** de code/tests | Inventaire EXISTS = unit/E2E UI seulement | `DEFERRED — DELIVERY I1 OR DEVOPS IMPLEMENTATION GATE` | GO Delivery I1 ou GO implémentation tests |
| CI SFIA Studio non implémentée | CI | Stratégie candidate précisée ; distinction contrôles locaux vs CI PR ; **aucun** `.github/**` | Workflow Studio absent ; Interv360 ≠ Studio | `DEFERRED — GO IMPLEMENT OPS1 CI REQUIRED` | `GO IMPLEMENT OPS1 CI` (après VAL) |
| Worktree ≠ sandbox OS forte | Isolation structurelle | Rappel politique + contrôles (network/env/secrets/remote) ; **aucune** claim sandbox forte ; pas de Docker auto | Amendement TECH-CAND-01 | `ACCEPTED STRUCTURAL RESERVATION` | Éventuel gate isolation OS futur |
| Stack / fournisseur non finalisés | Archi produit | Non arbitrés ; éléments déjà validés conservés | Docs `57`–`59` | `TREATED — REMAINS OPEN` | Gates archi / fournisseur distincts |
| FD-CAND-15 | FinOps | Routage hors DevOps | Décisions backlog/tech | `OUTSIDE DEVOPS CYCLE` | Gate FinOps / live |
| UX-R01…R04 | UX | Routage hors DevOps | Décisions UX/backlog | `OUTSIDE DEVOPS CYCLE` | Gates UX / delivery |

### 16.1 Résumé

| Catégorie | Items |
|-----------|-------|
| Fermées avec preuve | `.sfia-exec` ignore |
| Traitées / restent ouvertes | Node pin · stack/fournisseur |
| Différées (gate implémentation) | Scanner secrets · suites intégration · CI Studio |
| Structurelle acceptée | Worktree ≠ sandbox OS |
| Hors cycle DevOps | FD-CAND-15 · UX-R01…R04 |

## 17. Réserves maintenues / routées

- `FD-CAND-15` — **OUTSIDE DEVOPS CYCLE** (FinOps/live)
- `UX-R01…R04` — **OUTSIDE DEVOPS CYCLE** (UX/delivery)
- Stack / fournisseur — **TREATED — REMAINS OPEN**
- Worktree ≠ sandbox OS forte — **ACCEPTED STRUCTURAL RESERVATION**
- CI PR — **DEFERRED — GO IMPLEMENT OPS1 CI REQUIRED**
- Scanner secrets — **DEFERRED — DISTINCT IMPLEMENTATION GATE**
- Suites intégration runtime — **DEFERRED — DELIVERY I1 OR DEVOPS IMPLEMENTATION GATE**
- Node engines Studio — **TREATED — REMAINS OPEN**
- GPT live / Cursor live / Delivery I1 / MVP / production — **fermés**


## 18. Hors périmètre (ce cycle)

Code applicatif · workflows GitHub · `package.json`/lockfiles · SQLite réel · runner · Delivery I1 · live · déploiement · release · production · L4/L5 · modification méthode.

---

## 19. Gates

| Gate | État |
|------|------|
| `G-OPS1-DEVOPS` | **consommé** (ouverture) |
| `G-OPS1-DEVOPS-VAL` | **consommé** — validation avec réserves (2026-07-20 21:27:26 CEST) |
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

## 20. Critères de validation du cycle documentaire

- Docs `63`–`65` + README cohérents ;
- commandes EXISTS vs CANDIDATE non confondues ;
- décisions `65` toutes `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL` ;
- invariants `57`–`62` respectés ;
- aucun code / CI / dépendance modifiés ;
- review pack + handoff publiés.

**Verdict documentaire :** `OPS1 INTEGRATION DEVOPS FOUNDATION VALIDATED WITH RESERVATIONS`

---

*Document validé avec réserves — 2026-07-20 21:27:26 CEST — CI / Delivery I1 / live / MVP non ouverts.*
