# 03 — T-A6 and Option A Completion Criteria

| Champ | Valeur |
|-------|--------|
| **Document** | `03-t-a6-and-option-a-completion-criteria.md` |
| **Statut** | **COMPLETION DEFINITIONS ADOPTED BY MORRIS — NOT DECLARED SATISFIED** |
| **Décisions** | F04 · F05 · F06 · F07 — **`DECIDED — ADOPTED BY MORRIS`** (A4.1 · A2.1 · A3.2 · A2.1 · 2026-07-28) |
| **Matrices critères** | critères **DEFINED** · satisfaction **non déclarée** |
| **T-A6 COMPLETE** | **DEFINITION DEFINED (A4.1) — NOT DECLARED** |
| **Option A product complete** | **DEFINITION DEFINED (A3.2) — NOT DECLARED** |
| **Option A COMPLETE** | **NOT DECLARED** |
| **Production ready** | **NOT DECLARED** · **≠** product complete (A2.1 / F07) |

> Aucune déclaration COMPLETE n’est autorisée par ce document. Les définitions sont **adoptées** ; les preuves de satisfaction restent à produire sous gates ultérieurs.

---

## 1. Taxonomie normative (A2.1 / F05 · F07)

| # | Terme | Sens normatif |
|---|-------|---------------|
| 1 | Foundation complete | FD · FA · UX · Modeled · AT VALIDATED — **déjà vrai** (design) ; ≠ product COMPLETE |
| 2 | Integrated runtime complete | T-A0…T-A6 intégrés + tests mémoire + CI |
| 3 | Product complete | capacité produit Option A opérable (A3.2) — **sans** production implicite |
| 4 | Real-execution ready | Critical ack · atomicité · adapter réel · persistence |
| 5 | Production ready | RUN/IAM/RGPD/E2E/ops |
| 6 | Legacy cutover complete | MethodMode/method/** retirés · OPS1 isolé · preuves |

**Norme F07 :** `product complete ≠ production ready`. Aucune complétude supérieure n’est déduite automatiquement. T-A6 D1–D5 VALIDATED ≠ T-A6 COMPLETE. M1 REX D1–D7 ≠ T-A6 D1–D5.

---

## 2. Critères T-A6 COMPLETE — définition **A4.1** (F04)

**Statut définition :** `DECIDED — ADOPTED BY MORRIS`
**Statut déclaration :** `NOT DECLARED`

T-A6 peut être déclaré COMPLETE dans un **périmètre mémoire borné** si et seulement si :

1. D1–D5 sont validés ;
2. documentation et CI applicables sont conformes ;
3. les réserves sont fermées, acceptées ou explicitement bornées selon décision Morris ;
4. U-M02 reste OPEN uniquement avec **acceptation explicite** du périmètre mémoire ;
5. R-M01 et C1–C4 sont arbitrés ou bornés ;
6. **T6-C15** reste obligatoire ;
7. un **GO Morris dédié** déclare ultérieurement T-A6 COMPLETE.

Cette décision **définit** les critères. Elle **ne déclare pas** T-A6 COMPLETE. Elle ne sélectionne aucune persistance. Elle n’autorise aucune exécution réelle.

| ID | Critère affirmatif | Preuve attendue | Preuve actuelle | État | Blocker | Réserve | Owner | Gate |
|----|--------------------|-----------------|-----------------|------|---------|---------|-------|------|
| T6-C01 | D1 Evidence runtime fail-closed intégré | tests Evidence + module sur main | D1 VALIDATED · PR #267 | **SATISFIED** | non | — | Morris | GO DECLARE T-A6 COMPLETE (ultérieur) |
| T6-C02 | D2 ReviewBundle lifecycle intégré | tests ReviewBundle | D2 VALIDATED | **SATISFIED** | non | — | Morris | idem |
| T6-C03 | D3 ClaimEvaluation fail-closed | tests ClaimEvaluation | D3 VALIDATED | **SATISFIED** | non | R-M01 | Morris | idem |
| T6-C04 | D4 MaturityAssessment sans auto-promotion | tests Maturity | D4 VALIDATED | **SATISFIED** | non | — | Morris | idem |
| T6-C05 | D5 RecommendNextGate read-only, no T-A7 launch | tests + `T_A7_AUTO_LAUNCH_FORBIDDEN` | D5 VALIDATED | **SATISFIED** | non | — | Morris | idem |
| T6-C06 | Modeled/runtime alignment Evidence/RB/Claim/Maturity | schemas + runtime + modeled tests | matérialisé + governance tests CI | **SATISFIED** | non | R-M01 | Morris | idem |
| T6-C07 | Non-régression T-A3–T-A5 | suites Vitest pass | documenté post-merge | **SATISFIED** | non | — | Morris | idem |
| T6-C08 | Erreurs fail-closed documentées | codes + tests adversariaux | présents | **SATISFIED** | non | — | Morris | idem |
| T6-C09 | Autorité humaine respectée (pas auto-ack Critical) | tests Critical fail-closed | présent | **SATISFIED** | non | R-T-A3-1 (hors T-A6 mémoire) | Morris | idem |
| T6-C10 | Périmètre mémoire justifié (A4.1) — persistence **non** requise pour COMPLETE mémoire | décision F04 A4.1 | fake-only justifié docs ; persistence absente | **SATISFIED pour définition mémoire** | non pour COMPLETE mémoire | U-M02 · R1 | Morris | F04 DECIDED |
| T6-C11 | Réserves T-A6 traitées, acceptées ou bornées formellement | registre CLOSED / ACCEPTED / BORNÉ | R-M01 · U-M02 · C1–C4 OPEN / NOT VALIDATED | **MISSING** | **oui** pour déclaration | R-M01 · U-M02 · C1–C4 | Morris | A5.2 / F08 (ultérieur) |
| T6-C12 | Tests T-A6 observés sous CI Required Gate | CI success sur paths Studio | workflow + gate M1 actifs post-#268 | **SATISFIED** | non | F-CI-* residual | Morris | idem |
| T6-C13 | Documentation delivery + post-merge présents | docs 01–22 + README | présents sur main | **SATISFIED** | non | — | Morris | idem |
| T6-C14 | Post-merge review complète | doc 22 | COMPLETE (CI unavailable à l’époque ; gap gouvernance fermé via F-A6) | **SATISFIED** | non | F-A6 CLOSED | Morris | idem |
| T6-C15 | Décision Morris explicite `T-A6 COMPLETE` | gate + verdict | **absente** | **MISSING** | **oui** | — | Morris | `GO DECLARE T-A6 COMPLETE` |

### Synthèse T-A6

- Définition A4.1 : **ADOPTED**.
- Techniquement : D1–D5 et CI/docs largement **SATISFIED**.
- Gouvernance : T6-C11 + T6-C15 **MISSING** → **T-A6 COMPLETE NOT DECLARED**.
- Persistence réelle : **NOT SELECTED** · non requise pour COMPLETE mémoire.

---

## 3. Critères Option A — définitions **A2.1 / A3.2**

### 3.1 Couches (taxonomie ADOPTED)

| Couche | Libellé | Définition | Product complete (A3.2) ? | Production ready ? | Cutover ? |
|--------|---------|------------|---------------------------|--------------------|-----------|
| **A** | Foundation complete | FD · FA · UX · Modeled · AT VALIDATED | prérequis | prérequis | prérequis |
| **B** | Integrated runtime complete | T-A0…T-A6 intégrés + tests mémoire + CI | prérequis | prérequis | prérequis |
| **C** | Product completion | chaîne fonctionnelle + **API/UI minimale utilisable** (A3.2) | **définition** | prérequis · **non implicite** | distinct |
| **D** | Real-execution readiness | Critical ack · atomicité · adapter réel · persistence | **non inclus** auto | prérequis | si activation |
| **E** | Production readiness | IAM · RGPD · RUN · E2E · hardening · deps | **non inclus** (F07) | **définition** | recommandé |
| **F** | Legacy cutover complete | MethodMode/method/** · OPS1 · preuves | **non inclus** (A3.2) | souvent requis | **définition cutover** |

**Règle F07 (ADOPTED) :** `production ready` n’est **pas** une condition de `product complete`.

### 3.2 Définition normative Option A product complete — **A3.2** (F06)

**Inclut :** foundation complete · integrated runtime complete · surface **API ou UI minimale réellement utilisable** · produit démontrable et opérable.

**N’inclut pas automatiquement :** cutover legacy · production readiness · persistance réelle · IAM complet · RGPD production · observabilité production.

**Statut :** définition **DEFINED** · critères **NOT DECLARED SATISFIED** · Option A **NOT COMPLETE** · implémentation API/UI **NOT AUTHORIZED** dans ce cycle.

### 3.3 Matrice dimensionnelle Option A

| ID | Dimension | Critère affirmatif | Preuve attendue | Preuve actuelle | État | Couches | Blocker product (A3.2)? | Blocker production? | Owner |
|----|-----------|--------------------|-----------------|-----------------|------|---------|-------------------------|---------------------|-------|
| OA-01 | FD/FA/UX/Modeled/AT | fondation design VALIDATED | packs design | VALIDATED | **SATISFIED** | A | non | non | Morris |
| OA-02 | T-A0…T-A6 intégrés | merges #261–#267 | Git | OUI | **SATISFIED** | B | non | non | Morris |
| OA-03 | T-A6 COMPLETE | critères T6 + GO Morris | matrices + décision | NON | **MISSING** | B/C | **oui** candidat | oui | Morris |
| OA-04 | T-A7 cutover | hors product A3.2 | — | NOT OPEN | **N/A (A3.2 exclut F)** | F | non (product) | oui cutover | Morris |
| OA-05 | Persistence | DB SELECTED + repos durables | ADR + migrations | absente | **MISSING** | D/E | non (product A3.2) | **oui** | Morris |
| OA-06 | Atomicité | R1 + R-T-A3-2 résolus ou acceptés | design + tests | OPEN HARD | **MISSING** | D/E | non immédiat product | **oui** | Morris |
| OA-07 | Autorité | Critical ack + supersession | API + tests | R-T-A3-1 OPEN | **MISSING** | D | real-exec | oui | Morris |
| OA-08 | IAM | provider + mapping authority | design + runtime | NOT DECIDED | **MISSING** | D/E | non (product) | **oui** | Morris |
| OA-09 | Sécurité | fail-closed + deps + secrets | CI + audit | PARTIAL | **PARTIAL** | E | non immédiat | **oui** | Morris |
| OA-10 | RGPD / Evidence retention | politique + vendor + purge | docs + preuves | U-M02 OPEN | **MISSING** | D/E | non (product) | **oui** | Morris |
| OA-11 | API/UI | surfaces Option A branchées `lib/oa` | code + tests | absentes | **MISSING** | C | **oui** (A3.2) | oui | Morris |
| OA-12 | Adapters réels | adapter non-Test/NoOp | code + tests | absents | **MISSING** | D | real-exec | oui | Morris |
| OA-13 | Worker/queue/scheduler | exécution asynchrone contrôlée | code + RUN | absents | **MISSING** | D/E | real-exec | oui | Morris |
| OA-14 | Tests E2E | parcours Option A | Playwright/CI | exclus CI | **MISSING** | E | non | **oui** | Morris |
| OA-15 | CI | Required Gate path-aware | ruleset + runs | SATISFIED M1 | **SATISFIED** | B/E | non | partiel | Morris |
| OA-16 | Observabilité | metrics/traces/audit | stack RUN | console/memory | **PARTIAL** | E | non | **oui** | Morris |
| OA-17 | RUN | health/backup/restore/runbooks | pack RUN | conceptuel AT-10 | **MISSING** | E | non | **oui** | Morris |
| OA-18 | Rollback | hold + restore éprouvés | preuves | non cutover | **MISSING** | F/E | cutover | oui | Morris |
| OA-19 | Documentation | index + packs cohérents | docs | packs présents ; pas d’index delivery racine | **PARTIAL** | A–F | non | non | Morris |
| OA-20 | Réserves | CLOSED ou ACCEPTED formellement | registre | OPEN | **MISSING** | C–F | partiel | oui | Morris |
| OA-21 | Dette C1–C4 / F-CI | traitée ou acceptée | décisions | NOT VALIDATED / OPEN | **MISSING** | C/E | partiel | partiel | Morris |
| OA-22 | Décisions Morris F04–F07 | définitions adoptées + COMPLETE GO ultérieur | gates | F04–F07 **DECIDED** ; COMPLETE GO absent | **PARTIAL** (défs OK · GO manquant) | toutes | **oui** pour claim COMPLETE | oui | Morris |

---

## 4. Liens T-A7

| Question | Réponse après décisions |
|----------|-------------------------|
| Option A COMPLETE avant framing T-A7 ? | **Non** — framing VALIDATED indépendamment |
| Option A COMPLETE avant delivery T-A7 ? | **Selon F03/F08** — encore `NOT DECIDED` |
| Option A COMPLETE avant cutover ? | **Selon F06/F09** — product A3.2 ≠ cutover ; F09 `NOT DECIDED` |
| T-A7 framing avec réserves OPEN ? | **Oui** |

---

## 5. Anti-claims

Pas T-A6 COMPLETE déclaré · Pas Option A COMPLETE · Pas PRODUCTION READY · Pas READY FOR CUTOVER · Pas critères SATISFIED globaux · Pas RESERVE CLOSED · Définition ≠ déclaration · F03/F08–F13 NOT DECIDED.

---

## 6. Verdict

`T-A6 AND OPTION A COMPLETION DEFINITIONS ADOPTED BY MORRIS — A4.1 A2.1 A3.2 — DEFINITIONS DEFINED — SATISFACTION NOT DECLARED — OPTION A NOT COMPLETE`
