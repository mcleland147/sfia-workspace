# PR Readiness — Chantiers360 v2 INC-01

**Projet :** Chantiers360 v2  
**Branche :** `delivery/chantiers360-v2-inc-01`  
**Date :** 2026-07-06  
**Base :** `main` @ `cadf25a` (PR #107)

## 1. Git

| Élément | Valeur |
|---------|--------|
| Branche | `delivery/chantiers360-v2-inc-01` |
| HEAD | `a94ca6c` (+ commit PR readiness) |
| Merge-base `main` | `cadf25a` |
| Fichiers vs `main` | 43 fichiers (+ QA, app INC-01, docs delivery) |

## 2. Résumé INC-01

Socle chantier MVP : persistance PostgreSQL (Drizzle), dashboard branché DB, création / liste / fiche / statut chantier (US-01 à US-04). Réutilisation visuelle spike Figma Fidelity (PR #104).

## 3. Périmètre livré (US-01 à US-04)

| US | Livrable |
|----|----------|
| US-01 | Création chantier — `/chantiers/nouveau`, champs obligatoires, statut « À démarrer » |
| US-02 | Liste chantiers — `/`, état vide, cartes, CTA |
| US-03 | Fiche chantier — `/chantiers/[id]`, retour dashboard, placeholders INC-02+ |
| US-04 | Modification statut — À démarrer, En cours, En retard, Terminé |

## 4. Hors périmètre confirmé

| Élément | Statut |
|---------|--------|
| Tâches / réserves / jalons / CR fonctionnels | ❌ Placeholders uniquement |
| Prochaines actions réelles | ❌ Mock panneaux droite |
| Auth / rôles / espace client | ❌ |
| Devis / facturation / compta | ❌ |
| INC-02+ | ❌ |
| Chantiers360 V0 | ❌ Non consulté |
| Notion / CMP | ❌ |
| `03-backlog/` modifié | ❌ |
| `04-design/` / captures modifiés | ❌ |

## 5. Fichiers principaux

| Zone | Contenu |
|------|---------|
| `app/lib/db/`, `drizzle/` | Schéma PostgreSQL `chantiers` |
| `app/lib/chantiers/` | Queries, actions, mappers |
| `app/app/chantiers/` | Routes création + fiche |
| `app/e2e/` | Playwright INC-01 (4 scénarios) |
| `app/docker-compose.test.yml` | PostgreSQL test port 5433 |
| `08-qa-test/inc-01/` | Artefacts QA-G0 à QA-G3 |
| `07-delivery-inc-01/` | Rapports delivery + ce document |

## 6. QA-G3 — Décision Morris

| Décision | Statut |
|----------|--------|
| **GO QA WITH RESERVES** | ✅ **Morris** (2026-07-06) |
| **GO PR readiness INC-01** | ✅ **Morris** (2026-07-06) |
| R-QA-01 (E2E non exécutés) | **Levée** — 4 passed documentés + validation manuelle Morris |

## 7. Résultats commandes

| Commande | Cycle PR readiness | Référence QA |
|----------|-------------------|--------------|
| `npm run lint` | ✅ PASS | — |
| `npm run build` | ✅ PASS (`DATABASE_URL` port 5433) | — |
| `npm run test:e2e` | ⚠️ Non rejoué intégralement — port 3000 occupé (instance validation Morris) | ✅ **4 passed** — `qa-execution-report.md` @ `a94ca6c` |

## 8. Réserves ouvertes (mineures — conservées)

| ID | Réserve | Gravité |
|----|---------|---------|
| R-QA-02 | Backlog « En pause » vs code « En retard » (D-INC01-4) | Mineure |
| R-QA-03 | Validation formulaire vide — HTML5 `required` uniquement | Mineure |
| R-QA-04 | Panneaux dashboard droite mockés — hors assertions E2E | Mineure |

## 9. Garde-fous

- INC-01 uniquement — pas d'INC-02
- Pas d'auth, pas de modification backlog/design/captures
- Pas de V0, Notion, CMP
- Chemins protégés méthode SFIA non touchés

## 10. Risques résiduels

| Risque | Mitigation |
|--------|------------|
| Écart statut En pause / En retard | Documenté R-QA-02 — arbitrage post-merge optionnel |
| Panneaux mock dashboard | INC-05+ ou acceptation visuelle |
| Auth absente | Décision M3 — post INC-01 |

## 11. Proposition titre PR

```
feat: deliver Chantiers360 v2 INC-01 foundation (US-01 to US-04)
```

## 12. Proposition description PR

```markdown
## Summary

- Deliver **INC-01** — chantier foundation for Chantiers360 v2 pilot (US-01 to US-04).
- PostgreSQL + Drizzle persistence, server actions, dashboard wired to DB.
- Reuse Figma Fidelity spike UI (PR #104) with real data layer.
- **QA/Test:** Playwright E2E (4 passed), Docker PostgreSQL test infra (port 5433).
- **Morris:** GO QA WITH RESERVES + GO PR readiness INC-01.

## Scope (INC-01)

- US-01 Create chantier
- US-02 List chantiers (empty state + cards)
- US-03 Chantier detail page
- US-04 Update chantier status (À démarrer, En cours, En retard, Terminé)

## Out of scope

- INC-02+ (tasks, reserves, milestones, reports)
- Auth, client portal, billing
- Backlog / design / captures unchanged
- Chantiers360 V0 not consulted

## QA reserves (minor — accepted)

- R-QA-02: backlog « En pause » vs implementation « En retard »
- R-QA-03: empty form — HTML5 required only
- R-QA-04: right dashboard panels mocked (spike)

## Test plan

- [ ] Review `07-delivery-inc-01/` and `08-qa-test/inc-01/`
- [ ] `cd app && npm run test:e2e:full` (Docker required)
- [ ] Manual walkthrough dashboard / create / detail / status
- [ ] Confirm no `03-backlog/` or `04-design/` changes

## Setup

```bash
cd projects/chantiers360-v2/app
cp .env.example .env
npm run db:test:up && npm run db:test:migrate  # or local PostgreSQL
npm run dev
```
```

## 13. Verdict

### **READY FOR PR** (with documented minor reserves)

Morris GO QA WITH RESERVES + GO PR readiness recorded. Push / PR creation = separate Morris action.

---

**Prochaine étape :** `git push` + `gh pr create` vers `main` — hors scope de ce document.
