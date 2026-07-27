# 03 — T-A6 and Option A Completion Criteria

| Champ | Valeur |
|-------|--------|
| **Document** | `03-t-a6-and-option-a-completion-criteria.md` |
| **Statut** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
| **Matrices** | `RECOMMENDATION — NOT DECIDED` |
| **T-A6 COMPLETE** | **NOT DECLARED** |
| **Option A COMPLETE** | **NOT DECLARED** |

> Aucune déclaration COMPLETE n’est autorisée par ce document. Les matrices sont des **propositions** pour arbitrage Morris (D-T-A7-F04…F07).

---

## 1. Ambiguïté de vocabulaire (rappel)

| Terme | Sens |
|-------|------|
| Foundation complete (design) | FD · FA · UX · Modeled · AT VALIDATED — **déjà vrai** (design) ; ≠ product COMPLETE |
| T-A6 D1–D5 VALIDATED | use cases techniques delivery — **≠** T-A6 COMPLETE |
| T-A6 COMPLETE | clôture slice Evidence/Review/Claims/Maturity — **à décider** |
| Option A product complete | capacité produit Option A sans nécessairement production — **à décider** |
| Option A production ready | RUN/IAM/RGPD/E2E/ops — **distinct** |
| M1 REX D1–D7 | décisions gouvernance CI — **≠** T-A6 D1–D5 |

---

## 2. Critères candidats T-A6 COMPLETE

**Label obligatoire :** `RECOMMENDATION — NOT DECIDED`

| ID | Critère affirmatif | Preuve attendue | Preuve actuelle | État | Blocker | Réserve | Owner | Gate |
|----|--------------------|-----------------|-----------------|------|---------|---------|-------|------|
| T6-C01 | D1 Evidence runtime fail-closed intégré | tests Evidence + module sur main | D1 VALIDATED · PR #267 | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
| T6-C02 | D2 ReviewBundle lifecycle intégré | tests ReviewBundle | D2 VALIDATED | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
| T6-C03 | D3 ClaimEvaluation fail-closed | tests ClaimEvaluation | D3 VALIDATED | **SATISFIED** | non | R-M01 | Morris | D-T-A7-F04 |
| T6-C04 | D4 MaturityAssessment sans auto-promotion | tests Maturity | D4 VALIDATED | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
| T6-C05 | D5 RecommendNextGate read-only, no T-A7 launch | tests + `T_A7_AUTO_LAUNCH_FORBIDDEN` | D5 VALIDATED | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
| T6-C06 | Modeled/runtime alignment Evidence/RB/Claim/Maturity | schemas + runtime + modeled tests | matérialisé + governance tests CI | **SATISFIED** | non | R-M01 closure | Morris | D-T-A7-F04 |
| T6-C07 | Non-régression T-A3–T-A5 | suites Vitest pass | documenté post-merge | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
| T6-C08 | Erreurs fail-closed documentées | codes + tests adversariaux | présents | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
| T6-C09 | Autorité humaine respectée (pas auto-ack Critical) | tests Critical fail-closed | présent | **SATISFIED** | non | R-T-A3-1 (hors T-A6 mémoire) | Morris | D-T-A7-F04 |
| T6-C10 | Périmètre mémoire justifié **ou** persistence réelle | décision Morris explicite | fake-only justifié docs ; persistence absente | **PARTIAL** | si COMPLETE exige persistence | U-M02 · R1 | Morris | D-T-A7-F04 · F07 |
| T6-C11 | Réserves T-A6 traitées ou acceptées formellement | registre réserves CLOSED ou ACCEPTED | R-M01 · U-M02 · C1–C4 OPEN / NOT VALIDATED | **MISSING** | **oui** candidate | R-M01 · U-M02 · C1–C4 | Morris | D-T-A7-F04 · F08 |
| T6-C12 | Tests T-A6 observés sous CI Required Gate | CI success sur paths Studio | workflow + gate M1 actifs post-#268 | **SATISFIED** | non | F-CI-* residual | Morris | D-T-A7-F04 |
| T6-C13 | Documentation delivery + post-merge présents | docs 01–22 + README | présents sur main | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
| T6-C14 | Post-merge review complète | doc 22 | COMPLETE (CI unavailable à l’époque ; gap gouvernance fermé via F-A6) | **SATISFIED** | non | F-A6 CLOSED | Morris | D-T-A7-F04 |
| T6-C15 | Décision Morris explicite `T-A6 COMPLETE` | gate + verdict | **absente** | **MISSING** | **oui** | — | Morris | D-T-A7-F04 |

### Synthèse T-A6

- Techniquement : D1–D5 et CI/docs largement **SATISFIED**.
- Gouvernance : T6-C11 + T6-C15 **MISSING** → **T-A6 COMPLETE NOT DECLARED**.
- T6-C10 dépend de D-T-A7-F07 (product vs production) : mémoire peut rester acceptable pour un COMPLETE étroit.

---

## 3. Critères candidats Option A COMPLETE

**Label obligatoire :** `RECOMMENDATION — NOT DECIDED`

### 3.1 Couches

| Couche | Libellé | Définition candidate | Nécessaire pour foundation? | Product complete? | Production ready? | T-A7 framing? | T-A7 delivery? | T-A7 cutover? |
|--------|---------|----------------------|----------------------------|-------------------|-------------------|---------------|----------------|---------------|
| **A** | Foundation complete | FD · FA · UX · Modeled · AT VALIDATED | **définition** | prérequis | prérequis | utile | prérequis | prérequis |
| **B** | Integrated runtime complete | T-A0…T-A6 intégrés + tests mémoire + CI | non | prérequis candidat | prérequis | utile | prérequis | prérequis |
| **C** | Product completion | chaîne fonctionnelle Option A opérable selon critères Morris (peut exclure prod) | non | **définition** | prérequis | non | probable | **oui** |
| **D** | Real-execution readiness | Critical ack · atomicité · adapter réel · persistence | non | optionnel (D-T-A7-F07) | prérequis | non | selon périmètre | **oui** si activation |
| **E** | Production readiness | IAM · RGPD · RUN · E2E · hardening · deps | non | **non implicite** | **définition** | non | non | recommandé |
| **F** | Legacy cutover complete | MethodMode/method/** retirés · OPS1 isolé · preuves | non | optionnel (peut être hors product étroit) | souvent requis | non | — | **définition cutover** |

**Règle soumise à Morris (D-T-A7-F07) :** `production ready` n’est **pas** une condition implicite d’une définition étroite de `product complete`.

### 3.2 Matrice dimensionnelle Option A

| ID | Dimension | Critère affirmatif | Preuve attendue | Preuve actuelle | État | Couches | Blocker product? | Blocker production? | Owner |
|----|-----------|--------------------|-----------------|-----------------|------|---------|------------------|---------------------|-------|
| OA-01 | FD/FA/UX/Modeled/AT | fondation design VALIDATED | packs design | VALIDATED | **SATISFIED** | A | non | non | Morris |
| OA-02 | T-A0…T-A6 intégrés | merges #261–#267 | Git | OUI | **SATISFIED** | B | non | non | Morris |
| OA-03 | T-A6 COMPLETE | critères T6 + GO Morris | matrices + décision | NON | **MISSING** | B/C | **oui** candidat | oui | Morris |
| OA-04 | T-A7 | cutover complete **ou** hors product étroit | pack + preuves | NOT OPEN | **N/A ou MISSING** | C/F | selon F06/F07 | oui cutover | Morris |
| OA-05 | Persistence | DB SELECTED + repos durables | ADR + migrations | absente | **MISSING** | C/D/E | selon F07 | **oui** | Morris |
| OA-06 | Atomicité | R1 + R-T-A3-2 résolus ou acceptés | design + tests | OPEN HARD | **MISSING** | D/E | selon F07 | **oui** | Morris |
| OA-07 | Autorité | Critical ack + supersession | API + tests | R-T-A3-1 OPEN | **MISSING** | D | **oui** real-exec | oui | Morris |
| OA-08 | IAM | provider + mapping authority | design + runtime | NOT DECIDED | **MISSING** | D/E | selon F07 | **oui** | Morris |
| OA-09 | Sécurité | fail-closed + deps + secrets | CI + audit | PARTIAL | **PARTIAL** | E | non immédiat | **oui** | Morris |
| OA-10 | RGPD / Evidence retention | politique + vendor + purge | docs + preuves | U-M02 OPEN | **MISSING** | D/E | selon F07 | **oui** | Morris |
| OA-11 | API/UI | surfaces Option A branchées `lib/oa` | code + tests | absentes | **MISSING** | C | **oui** candidat | oui | Morris |
| OA-12 | Adapters réels | adapter non-Test/NoOp | code + tests | absents | **MISSING** | D | real-exec | oui | Morris |
| OA-13 | Worker/queue/scheduler | exécution asynchrone contrôlée | code + RUN | absents | **MISSING** | D/E | real-exec | oui | Morris |
| OA-14 | Tests E2E | parcours Option A | Playwright/CI | exclus CI | **MISSING** | E | non | **oui** | Morris |
| OA-15 | CI | Required Gate path-aware | ruleset + runs | SATISFIED M1 | **SATISFIED** | B/E | non | partiel | Morris |
| OA-16 | Observabilité | metrics/traces/audit | stack RUN | console/memory | **PARTIAL** | E | non | **oui** | Morris |
| OA-17 | RUN | health/backup/restore/runbooks | pack RUN | conceptuel AT-10 | **MISSING** | E | non | **oui** | Morris |
| OA-18 | Rollback | hold + restore éprouvés | preuves | non cutover | **MISSING** | F/E | cutover | oui | Morris |
| OA-19 | Documentation | index + packs cohérents | docs | packs présents ; pas d’index delivery racine | **PARTIAL** | A–F | non | non | Morris |
| OA-20 | Réserves | CLOSED ou ACCEPTED formellement | registre | OPEN | **MISSING** | C–F | **oui** | oui | Morris |
| OA-21 | Dette C1–C4 / F-CI | traitée ou acceptée | décisions | NOT VALIDATED / OPEN | **MISSING** | C/E | partiel | partiel | Morris |
| OA-22 | Décisions Morris | critères F04–F07 décidés + COMPLETE GO | gates | NOT DECIDED | **MISSING** | toutes | **oui** | oui | Morris |

### 3.3 Définitions candidates à trancher

| Option de définition | Inclut | Exclut typiquement | Dette |
|----------------------|--------|--------------------|-------|
| **Étroite — fondation+runtime intégré** | A+B + T-A6 COMPLETE mémoire justifié | persistence · IAM · UI · cutover | risque de sous-estimer produit |
| **Produit opérable** | A+B+C (+ OA-11) | production E · cutover F optionnel | nécessite UI/API |
| **Produit + cutover** | A+B+C+F | production E | blast radius élevé |
| **Production ready** | A–E (+ F souvent) | — | plus long ; le plus sûr |

**Recommandation Cursor/ChatGPT (non Morris) :** distinguer explicitement **product complete** (C) et **production ready** (E) ; ne pas exiger E pour C ; exiger F seulement si Option A est définie comme « v3 native sans MethodMode ».

---

## 4. Liens T-A7

| Question | Réponse candidate |
|----------|-------------------|
| Option A doit-elle être COMPLETE avant framing T-A7 ? | **Non** |
| Option A doit-elle être COMPLETE avant delivery T-A7 ? | **Probablement oui pour couches A–B et critères T-A6** — D-T-A7-F03/F08 |
| Option A doit-elle être COMPLETE avant cutover ? | **Oui au sens product/cutover décidé** — D-T-A7-F06/F09 |
| T-A7 framing peut-il coexister avec réserves OPEN ? | **Oui** |

---

## 5. Anti-claims

Pas T-A6 COMPLETE · Pas Option A COMPLETE · Pas PRODUCTION READY · Pas READY FOR CUTOVER · Pas critères DECIDED · Pas RESERVE CLOSED.

---

## 6. Verdict

`T-A6 AND OPTION A COMPLETION MATRICES PROPOSED — RECOMMENDATION NOT DECIDED — NO COMPLETE DECLARATION`
