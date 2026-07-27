# 04 — Reservations, Risks and Stop Conditions

| Champ | Valeur |
|-------|--------|
| **Document** | `04-reservations-risks-and-stop-conditions.md` |
| **Statut** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
| **T-A7** | **NOT OPEN** |
| **Réserves fermées dans ce cycle** | **aucune** |

---

## 1. Registre des réserves et findings

| ID | Statut | Définition | Preuve | Bloque framing T-A7 ? | Bloque delivery T-A7 ? | Bloque cutover ? | Bloque real execution ? | Bloque production ? | Obligatoire Option A COMPLETE ? | Décision Morris | Cycle recommandé |
|----|--------|------------|--------|----------------------|------------------------|------------------|-------------------------|---------------------|---------------------------------|-----------------|------------------|
| **B5** | OPEN | LPS satellite ids non carry-forward | T-A2/T-A3 docs · doc 23 | **Non** | **Oui** candidat | **Oui** | Indirect | Indirect | **Oui** candidat | D-T-A7-F08 | reserve closure / T-A1 |
| **R1** | OPEN | Atomicité Project↔Cycle absente | T-A2 docs | **Non** | **Oui** | **Oui** | **Oui** | **Oui** | **Oui** si persistence | D-T-A7-F08 · F10 | architecture persistence |
| **R-T-A3-1** | OPEN **HARD** | Pas d’API publique Critical acknowledge | T-A3 · Confirm fail-closed | **Non** | **Oui** si Critical path requis | **Oui** si activation | **Oui** | **Oui** | **Oui** real-exec / product large | D-T-A7-F08 · F09 | authority |
| **R-T-A3-2** | OPEN **HARD** | Atomicité Decision↔LPS/Epistemic résiduelle | T-A3/T-A4 Option B | **Non** | **Oui** | **Oui** | **Oui** | **Oui** | **Oui** persistence | D-T-A7-F08 · F09 | architecture |
| **R-T-A3-3** | OPEN | Authority registry in-memory | T-A3 | **Non** | Partiel | **Oui** | Partiel | **Oui** (IAM) | **Oui** production | D-T-A7-F10 | IAM |
| **R-T-A3-4** | OPEN | Enum mapping `AUTHORITY_SCOPE_MISMATCH` | T-A3 | **Non** | **Non** | **Non** | **Non** | Low | Non | dette ultérieure | hygiene |
| **R-M01** | OPEN | ClaimEvaluator readiness — closure Morris | T-A6 | **Non** | **Oui** candidat T-A6 COMPLETE | Indirect | Indirect | **Oui** | **Oui** T-A6 COMPLETE | D-T-A7-F04 · F08 | modeled/delivery |
| **U-M02** | OPEN | Evidence blob vendor / payloads / retention | T-A6 · D-T-A6-09 | **Non** | **Oui** si Evidence physique | **Oui** | **Oui** | **Oui** | **Oui** production / Evidence | D-T-A7-F10 | RGPD/persistence |
| **C1** | RECOMMENDED — NOT VALIDATED | Evidence status jointure PASS | T-A6 20-pr-readiness | **Non** | Dette | Indirect | Indirect | Indirect | Partiel | D-T-A7-F04 · F08 | T-A6 debt |
| **C2** | RECOMMENDED — NOT VALIDATED | Self-review Critical | T-A6 | **Non** | Dette | Indirect | Indirect | Indirect | Partiel | D-T-A7-F04 | T-A6 debt |
| **C3** | RECOMMENDED — NOT VALIDATED | Bornes taille/nombre | T-A6 | **Non** | Dette | Indirect | Indirect | Indirect | Partiel | D-T-A7-F04 | T-A6 debt |
| **C4** | RECOMMENDED — NOT VALIDATED | LPS satellite → fusion B5 candidate | T-A6 | **Non** | Via B5 | Via B5 | Indirect | Indirect | Via B5 | D-T-A7-F08 | merge into B5 |
| **F-CI-01** | OPEN | Node engines pin absent | docs 24/31 | **Non** | **Non** | **Non** | **Non** | Partiel | Non | tooling | config |
| **F-CI-02** | OPEN | npm audit historique | docs 24/31 | **Non** | **Non** | **Non** | **Non** | **Oui** conditionnel | Non | security | deps |
| **F-CI-03** | MITIGATED | Node local/CI | docs 31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | — | — |
| **F-CI-04** | OPEN Minor | actionlint absent | docs 24/31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | tooling | — |
| **F-CI-05** | MITIGATED | node:sqlite/Node20 | docs 31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | — | — |
| **F-CI-06/06B** | MITIGATED non CLOSED | whitespace | docs 29/31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | hygiene | — |
| **F-A6-PM-G01** | **CLOSED** | merge T-A6 sans CI formelle | doc 24 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | — | supersédé |
| **M1 loose** | NOT DECIDED | approvals=0 · strict=false · conversation resolution=false · bypass | doc 24/33 · D3 | **Non** | **Non** | **Recommandé avant** | **Non** | **Oui** | Non (distinct COMPLETE) | D-T-A7-F12 | governance |

### Point critique R-T-A3-1 / R-T-A3-2

Git **ne démontre pas** que R-T-A3-1/2 bloquent un cadrage read-only. Ils restent **HARD** pour :

- exécution réelle ;
- Confirm Critical réel ;
- persistence saine ;
- delivery/cutover si le périmètre active ces chemins.

---

## 2. Risques du cadrage

| Risque | Mitigation documentaire |
|--------|-------------------------|
| Confusion framing / open / delivery / cutover | niveaux A–D + anti-claims |
| Claim COMPLETE implicite | matrices `NOT DECIDED` + T6-C15 / OA-22 |
| Fermeture implicite de réserve | registre OPEN inchangé |
| Retrait prématuré MethodMode | stop conditions §3 |
| Sous-estimer persistence/IAM/RGPD | préconditions P18–P21 |
| Hardening M1 prématuré | D-T-A7-F12 · NOT JUSTIFIED NOW pour framing |

---

## 3. Stop conditions (obligatoires)

1. **Pas de delivery** sans validation Morris du framing (D-T-A7-F01…F03).
2. **Pas de modification** `method/**` ou OPS1 sans gate dédié.
3. **Pas de suppression MethodMode** sans preuve des remplacements (P03–P09).
4. **Pas de cutover** sans rollback éprouvé et GO cutover distinct.
5. **Pas d’exécution réelle** sans autorité (R-T-A3-1), atomicité (R-T-A3-2/R1), persistence, IAM et sécurité adaptées.
6. **Pas de migration Evidence** sans politique RGPD/rétention (U-M02).
7. **Pas de claim Option A COMPLETE** sans critères validés + preuves + GO Morris.
8. **Pas de claim production ready** sans E2E, RUN et observabilité.
9. **Pas de fermeture de réserve** par simple cadrage.
10. **Divergence de `main`** affectant Option A / T-A6 / T-A7 / réserves = **re-review obligatoire** avant tout acte suivant.
11. **Pas de push projet** de cette branche sous le gate courant.
12. **Pas de double write** ni présentation OPS1 comme v3.

---

## 4. Dette acceptable temporairement

| Item | Acceptable pendant framing | Acceptable jusqu’à delivery | Acceptable jusqu’à production |
|------|----------------------------|-----------------------------|-------------------------------|
| B5 / R1 OPEN | oui | non (sauf acceptation) | non |
| R-T-A3-1/2 OPEN | oui | non si Critical/persistence | non |
| R-T-A3-4 | oui | oui | oui (low) |
| C1–C4 NOT VALIDATED | oui | à arbitrer | à arbitrer |
| F-CI-01/04 | oui | oui | partiel |
| M1 loose | oui | oui | **non recommandé** |
| Absence API/UI | oui | non pour cutover opérable | non |
| Absence persistence | oui (mémoire) | non pour cutover durable | non |

---

## 5. Anti-claims

Pas RESERVE CLOSED · Pas HARD résolu · Pas READY FOR CUTOVER · Pas PRODUCTION READY · Pas DATABASE SELECTED · Pas IAM SELECTED · Pas DECIDED.

---

## 6. Verdict

`RESERVATIONS AND STOP CONDITIONS FRAMED — HARD BLOCKERS CLASSIFIED FOR EXECUTION NOT FRAMING — NO RESERVE CLOSED`
