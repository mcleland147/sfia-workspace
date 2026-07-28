# 16 — Morris decision pack — F11.2 / F13.4 completion

| Champ | Valeur |
|-------|--------|
| **Document** | `16-morris-f11-f13-completion-decision-pack.md` |
| **Date cadrage N3** | 2026-07-28 22:45:18 CEST (+0200) |
| **Date décisions D1–D8** | 2026-07-28 22:58:09 CEST (+0200) |
| **N3** | `DECIDED — ADOPTED BY MORRIS` (cadrage) |
| **D1–D8** | `DECIDED — ADOPTED BY MORRIS` |
| **Gate L-F11F13** | `DECIDED — ADOPTED BY MORRIS — IMPLEMENTATION AUTHORIZED LOCALLY` |
| **Push / PR projet** | **non autorisés** par ce gate |

> Note d’intégrité : dans le handoff N3 (`62904dbd…` / blob `d11efa52…`), D1–D8 figuraient comme **recommandations** (`RECOMMENDED — NOT DECIDED`). Elles sont enregistrées ici comme **décisions Morris adoptées** avant l’implémentation L-F11F13.

---

## 1. Décisions D1–D8 (adoptées)

| ID | Décision | Statut |
|----|----------|--------|
| **D1** | F11 complete = **internal-only** (pas HTTP, pas UI) | `DECIDED — ADOPTED BY MORRIS` |
| **D2** | Audit lecture F11/F13 = **différé explicitement** | `DECIDED — ADOPTED BY MORRIS` |
| **D3** | F13 data = **seed enrichi + liaison explicite au SHA Git** | `DECIDED — ADOPTED BY MORRIS` |
| **D4** | Pagination F13 = **prefix-only formalisée** | `DECIDED — ADOPTED BY MORRIS` |
| **D5** | Rétention F13 = **Git-only** | `DECIDED — ADOPTED BY MORRIS` |
| **D6** | Lot technique = **L-F11F13 interne** | `DECIDED — ADOPTED BY MORRIS` |
| **D7** | IAM = **reste NOT SELECTED** | `DECIDED — ADOPTED BY MORRIS` |
| **D8** | Persistence = **reste NOT SELECTED** | `DECIDED — ADOPTED BY MORRIS` |

### Gate consommé

`GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — INTERNAL-ONLY F11 CONTRACT — F13 SEED ENRICHED AND TIED TO GIT SHA — PREFIX-ONLY PAGINATION — AUDIT DEFERRED EXPLICITLY — GIT-ONLY RETENTION — IAM AND PERSISTENCE REMAIN NOT SELECTED — NO HTTP UI DELIVERY OR CUTOVER`

**Autorité :** implémentation **locale** uniquement · pas de push/PR/merge/delivery/cutover.

---

## 2. Impacts / exclusions

| Inclus | Exclu |
|--------|-------|
| Contrat F11 interne | HTTP / UI / IAM product |
| Seed F13 + SHA | Store / migration / cache durable |
| Prefix-only ≤50 | Multi-page complexe / scan non borné |
| Audit différé documenté | Journal d’audit persistant |
| Rétention Git-only | Rétention applicative |

B5 / R1 / R-M01 / HARD restent **OPEN** / **OPEN HARD**.

---

## 3. Recommandation historique N3 (archive)

Avant adoption Morris, le pack N3 recommandait D1=internal-only, D6=L-F11F13, D7/D8=NOT SELECTED, etc. (`RECOMMENDED — NOT DECIDED`).

Cette section ne constitue **pas** l’état courant des décisions.

---

## 4. Gate candidat suivant (non consommé)

`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED`

---

## 5. Verdict document

`D1–D8 DECIDED — L-F11F13 IMPLEMENTATION AUTHORIZED LOCALLY — IAM AND PERSISTENCE REMAIN NOT SELECTED — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER`
