# 18 — T-A6-D5 Bounded Coordination Validation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Sous-cycle** | T-A6-D5 — RecommendNextGate / coordination bornée |
| **Cycle** | QA / validation (Critical) |
| **Gate** | `GO VALIDATE T-A6 DELIVERY D5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `b2c582f06d6ac0ebe1f7d28d07ea32dd632cebf1` |
| **HEAD final** | `41e473c1a61fa620645fe6445d6e33442d6e791d` |
| **Horodatage** | 2026-07-26 11:54:00 CEST (+0200) |
| **Handoff source** | blob `9ee232de38c9a68fe684c55ed807bbf2dfd15cbc` |
| **Statut** | **T-A6-D5 VALIDATED AFTER CORRECTION** |
| **D1 / D2 / D3 / D4** | VALIDATED (non régressés) |
| **Fake-only / read-only** | **oui** |
| **Persistence D5** | **aucune** |
| **Push / PR / merge** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D5 BOUNDED COORDINATION VALIDATED AFTER CORRECTION — NEXT T-A6 STEP REQUIRES MORRIS FRAMING AND GO` |
| **Suite candidate** | `GO FRAME NEXT T-A6 STEP — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed** · cadrage requis) |

---

## 1. Sources / CKC

Delivery `01`…`17` · README · handoff D5 impl · runtime `evidence-review/**` · `T_A7_AUTO_LAUNCH_FORBIDDEN` · CKC `04-qa-validation.md` (candidate, `executionAuthority=false`).

---

## 2. Méthode (8 niveaux)

1. Conformité décisions Morris  
2. Contrat D5 `RecommendNextGate`  
3. Read-only strict  
4. Cohérence cross-aggregate  
5. Recommandations / gate candidat  
6. Autorité / anti-claims / réserves  
7. Fail-closed / déterminisme / sécurité / audit  
8. Non-régression  

---

## 3. Contrat D5

| Élément | Résultat |
|---------|----------|
| Canonique `RecommendNextGate` | **PASS** |
| Pas d’agrégat / repo / persistence D5 | **PASS** |
| Pas LaunchT-A7 / ConfirmGate / CreateDecision | **PASS** |
| `T_A7_AUTO_LAUNCH_FORBIDDEN` | **PASS** |
| Calcul à la demande · L1 RO | **PASS** |

---

## 4. Read-only / readers / versions

| Invariant | Résultat |
|-----------|----------|
| D1–D4 non mutés | **PASS** |
| Readers RO · copies défensives | **PASS** |
| Versions exactes obligatoires (maturité + evidence) | **PASS** (après F-A6-D5-01/02) |
| Pas de lookup implicite « latest » | **PASS** (après correction) |

---

## 5. Cohérence / recommandations / gate

| Invariant | Résultat |
|-----------|----------|
| disputed/waived/superseded/non confirmé exclus | **PASS** |
| Evidence superseded bloque positif | **PASS** (après F-A6-D5-03) |
| HARD / R-M01 → blocked, réserve non fermée | **PASS** |
| Maturité proposed → requires_human_decision | **PASS** |
| Maturité confirmed + chaîne saine → gate_candidate | **PASS** |
| `SOLICIT_MORRIS_GO_FOR_NEXT_CYCLE` · jamais consommé | **PASS** |
| `kind=recommendation` · `executionAuthority=false` · `gateConsumed=false` · `decisionCreated=false` | **PASS** |

---

## 6. Persistence / OCC / idempotence

| Item | Statut |
|------|--------|
| Persistence D5 | **N/A — absente** |
| OCC D5 | **N/A — read-only** |
| Idempotence mutante | **N/A — read-only** |

---

## 7. Findings

### Critical

Aucun.

### Major (corrigés)

| ID | Fichier | Invariant | Preuve | Impact | Correction |
|----|---------|-----------|--------|--------|------------|
| **F-A6-D5-01** | `recommendNextGate.ts` | Version maturité exacte | `maturityAssessmentId` sans version accepté (latest implicite) | Gate/reco sur version non figée | Exiger `maturityAssessmentVersion` ≥ 1 |
| **F-A6-D5-02** | `recommendNextGate.ts` | Evidence version exacte | `version:0` / refs id-only sans snapshot | Lookup implicite latest | Exiger version ≥ 1 ou snapshot gelé |
| **F-A6-D5-03** | `recommendNextGate.ts` | Evidence superseded non positive | status `superseded` non bloqué | `gate_candidate` indû | Blocker `evidence_superseded` |

### Observations

| ID | Note |
|----|------|
| O-D5-1 | Pas de schema modeled dédié RecommendNextGate (contrat delivery) |
| O-D5-2 | C1–C4 NOT VALIDATED (gap explicite) |
| O-D5-3 | R-M01 OPEN |
| O-D5-4 | Audit replay read-only peut ré-émettre — acceptable |

---

## 8. Corrections

Commit : `fix(sfia-studio): correct T-A6 D5 validation findings`

- Version maturité obligatoire  
- Versions Evidence exactes (snapshots gelés)  
- Blocker `evidence_superseded`  
- Tests adversariaux +4  

---

## 9. Tests (réexécution propre)

| Suite | Commande | Avant | Après | Résultat |
|-------|----------|-------|-------|----------|
| evidence-review D1–D5 | `npm test -- __tests__/oa/evidence-review` | 136 | **140** | **PASS** (+4) |
| T-A3 | `npm test -- __tests__/oa/decision` | 50 | 50 | PASS |
| T-A4 | `npm test -- __tests__/oa/execution-contract` | 61 | 61 | PASS |
| T-A5 | `npm test -- __tests__/oa/execution-attempt` | 88 | 88 | PASS |
| Modeled T-A6 | `node --test …/evidence-review-maturity-governance.test.mjs` | 27 | 27 | PASS |
| typecheck / lint / build / diff-check | — | — | — | PASS |

Durées : evidence-review ~0.70s. Skipped : 0.

---

## 10. Réserves / anti-claims

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 **OPEN**  
C1–C4 **RECOMMENDED — NOT VALIDATED**

Pas T-A6 COMPLETE · Option A COMPLETE · runtime ready · production ready · gate consommé · décision Morris créée · T-A7 · persistence réelle · exécution réelle.

---

## 11. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D5 BOUNDED COORDINATION VALIDATED AFTER CORRECTION — NEXT T-A6 STEP REQUIRES MORRIS FRAMING AND GO`
