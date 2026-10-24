# SFIA Studio — AKG-M5 / L2-D2-P1 — G-ENV + H4 Environment Qualification

**Date / heure:** 2026-10-24 14:15 Europe/Paris (CEST)
**Cycle:** 1 — Cadrage
**Profil:** Critical
**Typologie:** DOC / READ-ONLY
**GO Morris:** L2-D2-P1 — G-ENV / H4 PREPARATION — **CONSUMED**
**NON autorisé / NON effectué:** cutover · freeze · ouverture DB user/prod · migration · backup DB réelle · inventaire SQL · code/PRR/Roadmap edit · création d’env · commit/push/PR/merge projet · L2-D2 Delivery

**Instruction ChatGPT:** lire `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` ; vérifier env réellement prouvé, owners, H4 checklist, writers D1 (CR-D2-01), absence de staging inventé, décisions Morris minimales. Critical Review ≠ GO Delivery.

---

## 1. Verdict

**L2-D2-P1 ENVIRONMENT QUALIFICATION COMPLETE**
**— H4 GAPS EXPLICIT**
**— MORRIS ENVIRONMENT DECISION REQUIRED**
**— NO CUTOVER AUTHORITY**

**STAGING NOT VERIFIED — OWNER INPUT REQUIRED.** Aucun staging/production déployé n’est démontré dans Git/CI/docs. Candidat documenté : **Product local-dev** (config `.env.example` / localhost:3020) avec H4 majoritairement **UNKNOWN**. CI = validation isolée éphémère ≠ cutover réel.

---

## 2. GO Morris P1

Qualification G-ENV/H4 only. N’adopte pas H1/D4/D6/R-CUT. Handoff L2-D2 readiness tip `e19007bc…` réutilisé.

---

## 3. Git Truth

| Item | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-readiness` |
| Mode | **detached** `origin/main` |
| HEAD / origin/main | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` — **ALIGNED** |
| Status projet | clean (seul `.tmp-sfia-review/chatgpt-review.md` dirty) |
| Handoff parent | `e19007bc…` (L2-D2 Readiness) |
| P6 dirty | **non touché** · **aucun probe P6** ce cycle |
| Projet push/PR | **NON** |

---

## 4. Sources Git précises

- Process Cycle 1 + CKC 01-cadrage (lecture)
- Build Doctrine / Roadmap CURRENT TIP L2-D1 / C1
- M4 01/02/03/14 · M5 01/03/04 (H4 §08 checklist)
- PRR 01/03/04/05/06/07/08/09
- `app/.env.example` (placeholders only)
- `.github/workflows/sfia-studio-ci.yml`
- `lib/d1/{paths,db,commands,actions,methodModeHold}.ts`
- `lib/oa/project/infrastructure/sqlite/paths.ts`
- Handoff L2-D2 Readiness FULL (réserves CR-D2-01/02)

---

## 5. Convergence Pre-check / R23

| Item | Qualification |
|---|---|
| Capacité v3 | O-01 |
| Milestone | AKG-M5 / L2-D2-P1 |
| TO-BE | OA Truth C unique |
| AS-IS | D1 + OA coexistent (COVERAGE VERIFIED) |
| Dette | Dual surface · données D1 historiques |
| Dépendances | H1 · H4 · D4 · R-CUT (ouverts) |
| Sortie P1 | Env identifiable + lacunes H4 |
| Next | Morris G-ENV / G-OWNER / G-H4-ACCESS |

---

## 6. Environments Inventory

| ID | Nom | Provenance | Existence | Scope | Owner | Runtime | D1 store | OA store | Users | Cutover pertinence | Risk data | Gate avant investigation active |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| E-LOCAL | Product local-dev | `.env.example` BETTER_AUTH_URL=`http://localhost:3020` · PRR 05 · paths default `.sfia-exec/...` | **DOCUMENTED** (config) · instance machine **NOT VERIFIED** ce cycle | Single-user Product local profile | **UNKNOWN** (Pilote temporaire) | Local Next | Default `D1_SQLITE_PATH`/`OPS1_EXEC_ROOT`/`.sfia-exec/local-i1/state/d1.sqlite` | `SFIA_STUDIO_PRODUCT_DB_PATH` / `.sfia-exec/product/oa-product.sqlite` | UNKNOWN | Préparation possible · **faible** comme preuve cutover réel | Medium (fichiers peuvent exister hors WT) | GO inventaire RO / owner |
| E-CI | CI ephemeral | `sfia-studio-ci.yml` `runs-on: ubuntu-latest` | **VERIFIED** (workflow Git) | PR/push tests | GitHub Actions | Ephemeral | Temp test paths | Temp | None | **Non** (pas de D1 historique durable) | Low | N/A protocol dry-run only |
| E-STAGING | Staging représentatif | Recherche workflows/docs/deploy | **STAGING NOT VERIFIED** | — | **OWNER INPUT REQUIRED** | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | Serait prioritaire **si** prouvé | — | Owner name + proof of deployment |
| E-PROD | Production | PRR boundaries / REAL gates docs | **NOT VERIFIED** as deployed instance | — | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | **NOT first env** without reinforced gates | High | Explicit GO + H4 + backups |

Règle respectée : configuration ≠ instance déployée. Absence repo ≠ absence externe. Aucun environnement créé.

### Volumes (rappel — NON COURANTS)

| Snapshot | Valeur | Statut P1 |
|---|---|---|
| D1 Q0 | 131 | **HISTORICAL** |
| OA Q0 | 43 | **HISTORICAL** |
| Overlap | 0 | **HISTORICAL** |
| Production | UNKNOWN | **UNKNOWN** (≠ 0) |
| Fichiers SQLite P6 (rapport L2-D2) | EXISTS sizes | **NOT RE-PROBED** · **NOT OPENED** · volumes **UNKNOWN** |

---

## 7. Owners / data authority

| Domaine | Status |
|---|---|
| Env local-dev ownership | **UNKNOWN** — Pilote temporaire (doc D0) |
| Staging ownership | **UNKNOWN** — staging not verified |
| Production ownership | **UNKNOWN** |
| D1 historical data policy (D6) | **UNASSIGNED** |
| Conservation obligations | **UNKNOWN** / none demonstrated |

---

## 8. Writers / readers (delta utile) + CR-D2-01

| Path | W/R | DB | Garde-fou actuel | Env usage connu | Risque si D1 RO | Oracle futur |
|---|---|---|---|---|---|---|
| `commands.createProject` / `actionCreateProject` | **Writer** | D1 | authz mono-operator · **pas** MethodModeHold | Routes `/projects/new` · features/d1 | Create legacy bloqué seulement après freeze | **Q8 must include createProject** |
| `selectMethodMode` / `actionSelectMethodMode` | Writer (blocked) | D1 | `assertMethodModeTransitionAllowed` when hold ACTIVE | Cockpit badges | Already blocked when hold active | Q6/Q8 transition |
| Intake + confirmation execute | Writers | D1 | Confirmation flows | `/nouvelle-demande` | Legacy intake writes | Q8 intake/confirm |
| `listWorkspaceProjects` / `getProject` / audit | Readers | D1 | NOT_FOUND | `/workspace` `/projects/[id]` | Deep-link read | Q7/Q10/Q12 |
| OA CreateProject / List / Get | W/R | OA Product | D5 txn audit (L2-D1) | `/studio` | Nominal Product | Q1–Q5 HISTORICAL |

### CR-D2-01 — MethodModeHold ≠ freeze writers

**FAIT CODE (COVERAGE VERIFIED @ `1a380f22`):** `createProject` (`commands.ts`) écrit `methodMode: input.methodMode` et appelle `repo.createProjectAtomic` **sans** `assertMethodModeTransitionAllowed`. Le hold n’est invoqué que dans `selectMethodMode`.
**Implication:** hold ACTIVE **ne freeze pas** createProject D1. Q8 cutover doit prouver l’absence de **tous** writers D1 post-freeze, y compris create/intake/confirmation — pas seulement selectMethodMode.
**P1:** aucune correction code.

### CR-D2-02 — Q1–Q4 oracles (lien précis)

| Q | Oracle existant (historique) | Niveau |
|---|---|---|
| Q1 Create | `createProjectUi` + Q5.1/Q5.7 + L2-D1 CI | PASS HISTORICAL AT TESTED SCOPE |
| Q2 List/Get | `studioProjectsHome` + Q5 list/get | PASS HISTORICAL (UI list = mock action) |
| Q3 Resume | `m1RestartProcessProof` + Q5.5 + `automaticProjectResume.ui` | PASS HISTORICAL persist / UI mock séparée |
| Q4 Idempotence | Q5.4 CORR-01 | PASS HISTORICAL |
| Comprendre E2E | — | **KNOWN GAP** (inchangé) |

---

## 9. H4 checklist par environnement

### E-LOCAL (Product local-dev)

| # | Critère | Statut | Source / preuve | Manque | Owner attendu | Next | Gate |
|---|---|---|---|---|---|---|---|
| 1 | Nom/périmètre | **PARTIAL** | local-dev / localhost:3020 DOCUMENTED | Instance machine named | Morris/Pilote | Name machine profile | G-ENV |
| 2 | Owners | **UNKNOWN** | D0 UNASSIGNED | Named owner | Morris | G-OWNER | G-OWNER |
| 3 | Writers D1 | **VERIFIED** (code) | commands/actions inventory | Usage effectif sur instance | — | Optional runtime probe under GO | — |
| 4 | Readers/routes | **VERIFIED** (code) | routes D1 list | Usage réel | — | — | D4 later |
| 5 | Volumes/identités | **UNKNOWN** | Q0 HISTORICAL only | Current aggregates | Data owner | **G-H4-ACCESS** RO inventory | H4 |
| 6 | Users/parcours | **UNKNOWN** | — | Who uses local D1 | Owner | Qualify | H4 |
| 7 | Conservation | **UNKNOWN** | none demonstrated | Policy | D6 owner | G-H4-POLICY | D6 |
| 8 | Backup/RO | **UNKNOWN** | — | Backup plan | Owner | Decide if inventory needs RO copy | H4 |
| 9 | D4 links | **BLOCKED** | D4 not decided | Policy A/B/C | Morris | Separate gate | D4 |
| 10 | Fallback | **PARTIAL** | R-CUT designed | Env-specific plan | — | After G-ENV | R-CUT |
| 11 | Q7–Q12 | **NOT APPLICABLE** yet | Tests cutover NOT PRESENT | Write tests under Delivery | Eng | After env chosen | L2-D2 |
| 12 | Q8 post-freeze | **NOT APPLICABLE** | Freeze not done | Must cover createProject | Eng | Delivery | L2-D2 |
| 13 | STOP | **VERIFIED** (doc) | Writer leak · dual-write · open user DB | — | — | — | — |
| 14 | GO env-scoped | **BLOCKED** | No Delivery GO | Morris | After Critical + decisions | G-DELIV |

**H4-env PASS E-LOCAL: NON.**

### E-CI

| Synthèse | **NOT APPLICABLE** as cutover env — ephemeral, no historical D1. Useful only for protocol dry-run. |

### E-STAGING / E-PROD

| Synthèse | Checklist **BLOCKED** — environment **NOT VERIFIED**. All 14 criteria UNKNOWN/BLOCKED until owner proves existence. |

**H4 GLOBAL PASS: NON.**

---

## 10. Options environnement + recommandation

| Option | Applicabilité | Valeur cutover | Risque | Reco |
|---|---|---|---|---|
| A — Local-dev named + RO inventory GO | Config DOCUMENTED | Faible→moyenne | Data on developer machine | Candidate **préparation** seulement |
| B — Staging if owner proves deploy | **NOT VERIFIED** today | Haute | Depends | **Priorité** dès que prouvé |
| C — CI fixture protocol only | VERIFIED | **Non** (≠ réel) | Low | Prep oracles, not cutover proof |
| D — Production first | NOT VERIFIED · NOT AUTHORIZED | Max | High | **Reject** as first |

**Recommandation Cursor (≠ ADOPTED):** ne pas inventer de staging. Morris doit (1) nommer un owner et prouver staging **ou** (2) autoriser explicitement un inventaire RO borné sur un local-dev nommé sous G-H4-ACCESS, en acceptant que cela ≠ preuve cutover représentatif. Ne pas traiter fixture CI comme cutover.

---

## 11. Morris decision packet (P1)

| ID | Question | Fait prouvé | Hypothèse | Reco | Décision déjà Morris | Nouvelle décision |
|---|---|---|---|---|---|---|
| **G-ENV** | Premier périmètre ? | Local-dev DOCUMENTED · Staging NOT VERIFIED · CI ephemeral | Staging may exist hors repo | Prefer staging if proven else decide local-dev prep | L2-D2 env-scoped concept (D0) | **REQUIRED** |
| **G-OWNER** | Qui possède env + data D1 ? | UNASSIGNED in docs | Pilote = Morris temporaire | Name owner | — | **REQUIRED** |
| **G-H4-ACCESS** | Quelle lecture inventaire autoriser ensuite ? | No DB opened P1 · P6 files reported EXISTS previously | Aggregates possible without PII dump | Authorize RO count/identity aggregates only on named env | — | **REQUIRED** before inventory |
| **G-H4-POLICY** | Conservation sur périmètre ? | none demonstrated | May be none | Document none vs retain | D6 OPEN | **REQUIRED** with/after inventory |

H1 / D4 / O-01 : gouvernés, **hors** décisions principales P1.

---

## 12. Critical path / next capability

```
L2-D2 Readiness (done)
  → L2-D2-P1 G-ENV/H4 (THIS)
    → Morris: G-ENV + G-OWNER + G-H4-ACCESS (+ G-H4-POLICY)
      → P2 candidate: authorized RO inventory on named env
        → then D4/H1/R-CUT packaging
          → L2-D2 Delivery env-scoped (NOT AUTHORIZED)
```

---

## 13. Dette / exit / STOP

| Dette | Exit |
|---|---|
| Staging unverified | Owner proves deploy URL/runtime |
| Volumes UNKNOWN | G-H4-ACCESS aggregates |
| Q8 incomplete if hold-only | Include createProject writers |
| O-01 comprendre gap | Separate oracle (B) |

STOP déjà respectés: no DB open · no P6 probe · no secrets · no invented staging · no H4 PASS · no cutover.

---

## 14. R24 / Fake-Real

**NO PRODUCT SEMANTIC IMPACT.** Fichiers projet modifiés: **NONE**.
Tests exécutés: **NONE**.
REAL GO: **NON ACCORDÉ**. Pas de REAL/P6/v3 promotion.

---

## 15. Verdict

**L2-D2-P1 ENVIRONMENT QUALIFICATION COMPLETE — H4 GAPS EXPLICIT — MORRIS ENVIRONMENT DECISION REQUIRED — NO CUTOVER AUTHORITY**

Non-claims: pas ENV READY FOR CUTOVER · pas H4 GLOBAL PASS · pas R-CUT PROVEN · pas L2-D2 DELIVERY AUTHORIZED · pas staging inventé.

---

## 16. Review Handoff L3

| Item | Valeur |
|---|---|
| Verdict publish | _PENDING_PUBLISH_ |
| Commit FULL | _PENDING_PUBLISH_ |
| Blob FULL | _PENDING_PUBLISH_ |
| Parent | `e19007bcba0801c982fc5063ec92a628a4b7441d` |
| Investigation HEAD | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` detached · **no project push** |

---

**Fin pack FULL L2-D2-P1.**
