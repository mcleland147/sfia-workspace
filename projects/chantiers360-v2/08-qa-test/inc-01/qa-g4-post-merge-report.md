# QA-G4 Post-Merge Report — INC-01

**Date :** 2026-07-06  
**Branche :** `main`  
**Commit main :** `128d6fc` — docs: add QA-G4 post-merge report (#109)  
**PR delivery :** [#108](https://github.com/mcleland147/sfia-workspace/pull/108) — `1b9e41f`  
**PR QA-G4 :** [#109](https://github.com/mcleland147/sfia-workspace/pull/109) — `128d6fc`  
**Date merge PR #108 :** 2026-07-06 08:42 UTC  
**Date merge PR #109 :** 2026-07-06 08:54 UTC  
**Standard :** SFIA v2.0 Delivery QA/Test (PR #107)  
**Type de cycle :** Contrôle post-merge — pas de nouveau delivery

---

## 1. Branche / commit main

| Élément | Valeur |
|---------|--------|
| Branche | `main` |
| HEAD | `128d6fc` (PR #109) — delivery INC-01 `1b9e41f` (PR #108) |
| Synchronisation | `git pull` — fast-forward depuis `cadf25a` |
| Artefacts INC-01 | `app/`, `07-delivery-inc-01/`, `08-qa-test/inc-01/` — présents |

## 2. PR #108 / commit merge

| Élément | Valeur |
|---------|--------|
| PR | #108 |
| Titre | feat: deliver Chantiers360 v2 INC-01 foundation (US-01 to US-04) |
| Merge commit | `1b9e41f` |
| Merged at | 2026-07-06T08:42:26Z |

## 3. Périmètre INC-01 confirmé

| Livrable | Statut |
|----------|--------|
| US-01 — création chantier | ✅ |
| US-02 — liste chantiers | ✅ |
| US-03 — fiche chantier | ✅ |
| US-04 — modification statut | ✅ |
| PostgreSQL + Drizzle | ✅ `lib/db/`, migration `0000_initial.sql` |
| PostgreSQL test reproductible | ✅ `docker-compose.test.yml`, `test:e2e:full` |
| Tests Playwright E2E | ✅ `e2e/inc-01.spec.ts` (4 tests) |
| Rapports QA INC-01 | ✅ `08-qa-test/inc-01/` |

## 4. Hors scope confirmé

| Exclusion | Statut |
|-----------|--------|
| INC-02 fonctionnel | ✅ Placeholders / labels uniquement |
| Tâches, réserves, jalons, CR fonctionnels | ✅ Absents |
| Prochaines actions réelles | ✅ Absentes |
| Auth | ✅ Absente |
| Espace client | ✅ Absent |
| Devis / facturation / compta | ✅ Absents |
| Chantiers360 V0 | ✅ Non consulté |
| Notion / CMP | ✅ Non modifié |
| `03-backlog/` modifié | ✅ Non |
| `04-design/` / captures modifiés | ✅ Non |

## 5. Commandes exécutées et résultats

Répertoire : `projects/chantiers360-v2/app`  
Environnement : post-merge `main` @ `1b9e41f`

| Commande | Résultat | Détail |
|----------|----------|--------|
| `npm install` | ✅ PASS | Dépendances à jour |
| `npm run lint` | ✅ PASS | No ESLint warnings or errors |
| `npm run build` | ✅ PASS | Next.js 15.5.20 — routes `/`, `/chantiers/nouveau`, `/chantiers/[id]` |
| `npm run db:test:up` | ✅ PASS | Container `chantiers360-v2-test-db` healthy (port 5433) |
| `npm run db:test:migrate` | ✅ PASS | Migrations appliquées |
| `npm run test:e2e:full` | ⚠️ **Échec environnemental** | Port **3000** occupé (`EADDRINUSE`) — instance dev Morris/Cursor (PID node 72004) ; serveur existant répond HTTP 500 |
| Fallback E2E post-merge | ✅ PASS | Dev dédié port **3001** + `TEST_DATABASE_URL` + `npx playwright test` — voir §6 |

## 6. Résultat E2E post-merge

### `test:e2e:full` (commande standard)

```
Error: listen EADDRINUSE: address already in use 127.0.0.1:3000
Error: Process from config.webServer exited early.
```

**Cause :** port 3000 occupé par une instance dev locale préexistante — **environnemental**, pas une régression code sur `main`.

### Fallback documenté (même jour, même commit)

```bash
npm run db:test:up && npm run db:test:migrate
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/chantiers360_v2_test \
  npm run dev -- --hostname 127.0.0.1 --port 3001 &
TEST_DATABASE_URL=postgresql://postgres:postgres@localhost:5433/chantiers360_v2_test \
  PLAYWRIGHT_BASE_URL=http://127.0.0.1:3001 npx playwright test
```

```
Running 4 tests using 1 worker

  ✓  US-02 — liste vide et CTA création
  ✓  US-01 — création chantier et champs obligatoires
  ✓  US-03 — fiche chantier, retour dashboard, placeholders INC-02+
  ✓  US-04 — modification des statuts sur fiche et liste

  4 passed (4.4s)
Exit code: 0
```

**Conclusion E2E post-merge :** comportement INC-01 validé sur `main` — **4 passed** (fallback port 3001). Réserve environnementale port 3000 documentée — alignée avec le cycle PR readiness.

## 7. Réserves restantes

| # | Réserve | Gravité | Statut post-merge |
|---|---------|---------|-------------------|
| R-QA-01 | E2E Playwright exécutés | — | **Levée** — confirmée (4 passed post-merge) |
| R-QA-02 | Backlog « En pause » vs code « En retard » | Mineure | **Ouverte** — inchangée |
| R-QA-03 | Validation formulaire vide — HTML5 `required` | Mineure | **Ouverte** — inchangée |
| R-QA-04 | Panneaux dashboard droite mockés | Mineure | **Ouverte** — inchangée |

## 8. Nouvelles réserves éventuelles

| # | Réserve | Gravité | Statut |
|---|---------|---------|--------|
| R-QA-05 | `test:e2e:full` échoue si port 3000 occupé | **Environnementale** | Documentée — non bloquante ; workaround port 3001 ou libérer port 3000 |

**Aucune nouvelle réserve bloquante fonctionnelle identifiée.**

## 9. Verdict QA-G4

### **QA-G4 OK WITH RESERVES**

| Critère | Statut |
|---------|--------|
| Merge PR #108 sur `main` confirmé | ✅ |
| Périmètre INC-01 intact post-merge | ✅ |
| Hors scope respecté | ✅ |
| lint / build post-merge | ✅ PASS |
| E2E US-01 à US-04 | ✅ **4 passed** (fallback documenté) |
| Réserves mineures R-QA-02 à R-QA-04 | Acceptées — inchangées |
| Aucune régression bloquante | ✅ |

## 10. Décision Morris

| # | Question | Statut |
|---|----------|--------|
| D1 | Clôture INC-01 ? | ✅ **CLOSED WITH RESERVES** — Morris (2026-07-06) — `inc-01-closure-report.md` |
| D2 | Capitalisation post-INC-01 ? | ✅ **Intégrée** — PR #111 `ff32170` — `09-capitalization/inc-01-capitalization-report.md` |
| D3 | GO INC-02 ? | **Décision séparée** — non accordé |

## 11. Réserves capitalisation (post-merge PR #111)

| # | Réserve | Statut |
|---|---------|--------|
| R-CAP-01 | IDs prompts delivery | **Levée** — `sfia-v2-delivery-qa-test-standard.md` §17 aligné `PROMPT-QA-D-001` à `008` |
| R-CAP-02 | prompt-catalog | **Ouverte** — index `delivery-qa-test` — cycle séparé |
| R-CAP-03 | routing/checklist v1.1 | **Ouverte** — cycle séparé (hors scope micro-alignement) |

---

**Documents liés :** `qa-readiness.md`, `qa-reserves.md`, `qa-execution-report.md`, `local-e2e-runbook.md`, `07-delivery-inc-01/delivery-inc-01-validation-report.md`, `09-capitalization/inc-01-capitalization-report.md`

**INC-02 :** non lancé — aucune implémentation ajoutée dans ce cycle.
