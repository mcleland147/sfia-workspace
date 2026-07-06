# Runbook — Exécution locale E2E Playwright INC-01

**Projet :** Chantiers360 v2  
**Incrément :** INC-01  
**Branche :** `delivery/chantiers360-v2-inc-01`  
**Objectif :** lever la réserve **R-QA-01** et fournir les preuves pour validation **QA-G3** par Morris.

> Morris valide les **preuves** (logs, rapport) — pas besoin de dérouler chaque test manuellement si `npm run test:e2e` affiche **4 passed**.

**Références :** `qa-execution-report.md`, `qa-readiness.md`, `test-scenarios.md`

---

## 1. Objectif

Exécuter localement les 4 tests Playwright US-01 à US-04 contre une base PostgreSQL **dédiée aux tests**, puis mettre à jour les rapports QA pour permettre la décision Morris sur QA-G3.

**Hors scope :** PR readiness INC-01, INC-02, modification du code métier.

---

## 2. Checklist prérequis

| # | Prérequis | Vérification |
|---|-----------|--------------|
| 1 | Node.js 18+ / npm | `node -v` / `npm -v` |
| 2 | Branche `delivery/chantiers360-v2-inc-01` @ `7984cc6`+ | `git log -1 --oneline` |
| 3 | Dépendances installées | `npm install` dans `app/` |
| 4 | Docker installé et démarré | `docker info` — ou PostgreSQL natif sur port 5433 |
| 5 | Base `chantiers360_v2_test` | Auto via `npm run db:test:up` (Docker) |
| 6 | Fichier `.env.test` | copié depuis `.env.test.example` |
| 7 | Migrations sur DB test | table `chantiers` présente |
| 8 | Playwright + Chromium | `npx playwright install chromium` (première fois) |
| 9 | Port **3000** libre | pas de `next dev` concurrent sur 3000 |

---

## 3. Configuration inspectée (repo)

| Fichier | Rôle |
|---------|------|
| `package.json` | Scripts `test:e2e`, `db:migrate`, `db:push` |
| `playwright.config.ts` | Charge `.env.test` puis `.env` ; démarre `next dev` sur 3000 si URL DB définie |
| `e2e/inc-01.spec.ts` | 4 tests — skip si pas de `TEST_DATABASE_URL` / `DATABASE_URL` |
| `e2e/helpers/db.ts` | `TRUNCATE chantiers` avant chaque test |
| `drizzle.config.ts` | Migration via `DATABASE_URL` |
| `drizzle/0000_initial.sql` | Schéma table `chantiers` |

**Variables d'environnement :**

| Variable | Usage |
|----------|--------|
| `TEST_DATABASE_URL` | Prioritaire — tests + reset DB + serveur dev Playwright |
| `DATABASE_URL` | Fallback si `TEST_DATABASE_URL` absent |
| `PLAYWRIGHT_BASE_URL` | Défaut `http://127.0.0.1:3000` |

---

## 4. Mode opératoire — Docker (recommandé)

Répertoire : **`projects/chantiers360-v2/app`**

```bash
cd projects/chantiers360-v2/app

npm install
cp .env.test.example .env.test

# Tout-en-un : PostgreSQL Docker + migrations + tests E2E
npm run test:e2e:full
```

| Script | Action |
|--------|--------|
| `npm run db:test:up` | Démarre Postgres sur **localhost:5433** |
| `npm run db:test:migrate` | Applique migrations Drizzle |
| `npm run test:e2e` | Lance Playwright (lit `.env.test`) |
| `npm run db:test:down` | Arrête container — **conserve le volume** |
| `npm run db:test:down:clean` | Arrête + supprime volume (**destructif**) |

## 4bis. Mode opératoire — PostgreSQL natif (sans Docker)

```bash
cd projects/chantiers360-v2/app

# 1. Dépendances
npm install

# 2. Config test (non versionné)
cp .env.test.example .env.test
# Adapter TEST_DATABASE_URL si user/mot de passe/port différents

# 3. Base PostgreSQL dédiée
createdb chantiers360_v2_test
# Si createdb absent : créer la base via pgAdmin / psql :
#   psql postgres -c "CREATE DATABASE chantiers360_v2_test;"

# 4. Migrations sur la DB test
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/chantiers360_v2_test npm run db:migrate
# Alternative si .env.test chargé :
#   export $(grep -v '^#' .env.test | xargs) && DATABASE_URL="$TEST_DATABASE_URL" npm run db:migrate

# 5. Navigateur Playwright (une fois)
npx playwright install chromium

# 6. Contrôles techniques recommandés
npm run lint
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/chantiers360_v2_test npm run build

# 7. Tests E2E (lit .env.test via playwright.config.ts)
npm run test:e2e
```

### Variante — variables en ligne (sans `.env.test`)

```bash
TEST_DATABASE_URL=postgresql://postgres:postgres@localhost:5432/chantiers360_v2_test \
  npm run test:e2e
```

### Variante — DB dev partagée (non recommandée)

Utiliser `chantiers360_v2` au lieu de `chantiers360_v2_test` : les tests **tronquent** la table `chantiers` — risque de perte de données dev.

---

## 5. Résultat attendu (succès)

```
Running 4 tests using 1 worker

  ✓  US-02 — liste vide et CTA création
  ✓  US-01 — création chantier et champs obligatoires
  ✓  US-03 — fiche chantier, retour dashboard, placeholders INC-02+
  ✓  US-04 — modification des statuts sur fiche et liste

  4 passed
```

Exit code **0**.

**Option debug visuel :** `npm run test:e2e:ui`

---

## 6. Après exécution — mise à jour des rapports QA

Morris ou Cursor (cycle dédié) met à jour :

### 6.1 `qa-execution-report.md`

Remplacer / compléter :

| Champ | Valeur |
|-------|--------|
| Date | date d'exécution locale |
| Commit | `git rev-parse --short HEAD` |
| Environnement | machine Morris — PostgreSQL local |
| `npm run test:e2e` | **PASS** — 4 passed (coller extrait logs) |

### 6.2 `qa-reserves.md`

| Réserve | Action si 4 passed |
|---------|-------------------|
| **R-QA-01** | Marquer **levée** — exécution locale confirmée |

Conserver R-QA-02 / R-QA-03 si toujours pertinentes (mineures).

### 6.3 `qa-readiness.md`

| Si résultat | Verdict proposé |
|-------------|-----------------|
| 4 passed, lint/build OK | **GO QA** |
| passed avec réserves mineures acceptées | **GO QA WITH RESERVES** |
| échec bloquant non résolu | **NO-GO QA** |

Cocher la décision Morris :

- [ ] GO QA
- [ ] GO QA WITH RESERVES
- [ ] NO-GO QA
- [ ] GO PR readiness INC-01 — **uniquement après GO QA**

### 6.4 Modèle à coller dans `qa-execution-report.md`

```markdown
## Exécution locale Morris — YYYY-MM-DD

**Commit :** `<hash>`
**Commande :** `npm run test:e2e`
**Résultat :** 4 passed (US-01, US-02, US-03, US-04)

\`\`\`
(coller sortie terminal)
\`\`\`
```

---

## 7. En cas d'échec

| Symptôme | Cause probable | Action |
|----------|----------------|--------|
| `4 skipped` | Pas de `TEST_DATABASE_URL` / `DATABASE_URL` | Vérifier `.env.test` ou export inline |
| `connection refused` PostgreSQL | Postgres arrêté ou mauvais host/port | `pg_isready` ; corriger URL |
| `relation "chantiers" does not exist` | Migrations non appliquées | `npm run db:migrate` avec bon `DATABASE_URL` |
| `port 3000 already in use` | Autre serveur sur 3000 | Arrêter le processus ou changer `PLAYWRIGHT_BASE_URL` + port dev |
| Timeout webServer | Premier build Next lent | Relancer ; vérifier `npm run dev` manuellement |
| Test US-04 fail statut liste | Assertion UI | Noter dans `qa-reserves.md` — ne pas masquer |
| `playwright: command not found` | Binaire non installé | `npm install` puis `npx playwright test` |

**Ne pas** déclarer QA-G3 **GO** si `test:e2e` est en échec ou skipped sans justification Morris.

---

## 8. Commandes de référence rapide

```bash
cd projects/chantiers360-v2/app
cp .env.test.example .env.test
npm run test:e2e:full
git rev-parse --short HEAD
```

---

## 9. Prochaine étape après GO QA Morris

1. Cycle **PR readiness INC-01** (séparé)
2. Morris Gate — GO push + PR
3. Post-merge — **QA-G4** (`PROMPT-QA-D-008`)
