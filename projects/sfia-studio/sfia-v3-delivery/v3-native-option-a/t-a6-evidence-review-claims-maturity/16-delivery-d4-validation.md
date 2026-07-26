# 16 — T-A6-D4 MaturityAssessment Validation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Sous-cycle** | T-A6-D4 — MaturityAssessment |
| **Cycle** | QA / validation (Critical) |
| **Gate** | `GO VALIDATE T-A6 DELIVERY D4 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `357fe58fdad60859e2410be3d1e553b39a157308` |
| **HEAD final** | `07a2e1f70beddbb42709a28262031b79ec4d05d2` |
| **Horodatage** | 2026-07-26 11:19:00 CEST (+0200) |
| **Handoff source** | blob `45bd2affb52a547f2837e1504fee585ef32f4683` |
| **Statut** | **T-A6-D4 VALIDATED AFTER CORRECTION** |
| **D1 / D2 / D3** | VALIDATED AFTER CORRECTION (non régressés) |
| **D5** | **NON** |
| **Fake-only / mémoire** | **oui** |
| **Push / PR / merge** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D4 MATURITY ASSESSMENT VALIDATED AFTER CORRECTION — D5 REQUIRES MORRIS GO` |
| **Gate suivant** | `GO IMPLEMENT T-A6 DELIVERY D5 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources / CKC

Delivery `01`…`15` · README · handoff D4 · runtime `evidence-review/**` · schema MaturityAssessment `0.2.0-oa` · ClaimEvaluation D3 · T-A3 RO · CKC `04-qa-validation.md` (candidate, `executionAuthority=false`).

---

## 2. Méthode (7 niveaux)

1. Conformité décisions Morris  
2. Domaine MaturityAssessment vs `0.2.0-oa`  
3. Binding ClaimEvaluation exacts  
4. Calcul / promotion fail-closed  
5. Confirmation / autorité  
6. Downgrade / supersession / OCC / idempotence  
7. Sécurité / audit / non-régression  

---

## 3. Conformité décisions

| Décision | Résultat |
|----------|----------|
| Module unique `evidence-review/**` | **PASS** |
| Maturity autonome · OCC propre | **PASS** |
| Use cases spécialisés · sync fail-closed | **PASS** (Confirm renforcé) |
| Mémoire / fake-only | **PASS** |
| D4 only · D1–D3 non breaking | **PASS** |
| D5 / Decision / executionAuthority absents | **PASS** |

---

## 4. Domaine / niveaux / critères / gaps

| Zone | Résultat |
|------|----------|
| ID `mat:` · statuses · niveaux modeled | **PASS** |
| Critères eligible/confirmed/modeled/implemented/adopted/no_hard_reserve | **PASS** |
| Gaps explicites | **PASS** |
| `autoPromoted=false` | **PASS** |
| DOCUMENTED exige ≥1 eligible PASS | **PASS** (après F-A6-D4-02) |
| Copies défensives | **PASS** |

---

## 5. Binding / éligibilité / promotion

| Invariant | Résultat |
|-----------|----------|
| ClaimEvaluationReader RO · id+version exacts | **PASS** |
| disputed/waived/superseded/non confirmé exclus | **PASS** |
| Confirm re-assess bindings avant confirm | **PASS** (après F-A6-D4-01) |
| Propose refuse si aucun eligible (hors blocked HARD) | **PASS** (après F-A6-D4-02) |
| Aucune moyenne / auto-promotion | **PASS** |

---

## 6. Commandes

| Commande | Résultat |
|----------|----------|
| ProposeMaturity | **PASS** |
| ConfirmMaturity | **PASS** (re-assess + Morris IMPLEMENTED/ADOPTED) |
| DowngradeMaturity | **PASS** (explicite · atomique · humain) |

---

## 7. Findings

### Critical

Aucun.

### Major (corrigés)

| ID | Fichier | Invariant | Preuve | Impact | Correction | Blocker D4 | Blocker D5 |
|----|---------|-----------|--------|--------|------------|------------|------------|
| **F-A6-D4-01** | `confirmMaturity.ts` | Confirm exige claims encore éligibles aux versions exactes | Confirm promo `proposed`→`confirmed` sans relire ClaimEvaluation ; claim superseded post-propose ⇒ faux confirm | Confirmation indue / maturité figée sur claims périmées | Inject `ClaimEvaluationReader` ; `reassessStoredBindings` + recalcul avant authority/update | oui (avant) | oui |
| **F-A6-D4-02** | `maturityCalculation.ts` / `proposeMaturity.ts` | DOCUMENTED ⇒ ≥1 eligible PASS | Calcul assignait DOCUMENTED avec `supportedLevel` même sans eligible ; Propose waived-only réussissait | Fausse maturité DOCUMENTED | `supportedLevel=null` sans eligible ; Propose fail `MATURITY_CLAIM_NOT_ELIGIBLE` (sauf blocked HARD) | oui (avant) | oui |

### Minor / Observations

| ID | Note |
|----|------|
| O-D4-1 | Seuils runtime documentés (modeled sans formule numérique) |
| O-D4-2 | C1–C4 NOT VALIDATED |
| O-D4-3 | Downgrade peut enregistrer un successeur avec gaps après invalidation (DEL-07) |
| O-D4-4 | Replay idempotent peut ré-émettre audit ok — acceptable |

---

## 8. Corrections

Commit : `fix(sfia-studio): correct T-A6 D4 validation findings`

- Confirm re-assess ClaimEvaluation  
- supportedLevel null / Propose fail-closed sans eligible  
- Tests adversariaux `adversarialMaturityValidation.test.ts` (+3)  
- Tests lifecycle/domain mis à jour  

---

## 9. Tests (réexécution propre)

| Suite | Commande | Avant | Après | Résultat |
|-------|----------|-------|-------|----------|
| evidence-review D1–D4 | `npm test -- __tests__/oa/evidence-review` | 119 | **122** | **PASS** (+3 adversariaux) |
| T-A3 | `npm test -- __tests__/oa/decision` | 50 | 50 | **PASS** |
| T-A4 | `npm test -- __tests__/oa/execution-contract` | 61 | 61 | **PASS** |
| T-A5 | `npm test -- __tests__/oa/execution-attempt` | 88 | 88 | **PASS** |
| Modeled T-A6 | `node --test …/evidence-review-maturity-governance.test.mjs` | 27 | 27 | **PASS** |
| typecheck / lint / build / diff-check | — | — | — | **PASS** |

Durées : evidence-review ~0.77s · T-A3 ~0.4s · T-A4 ~0.5s · T-A5 ~0.5s · modeled ~0.15s. Skipped : 0.

---

## 10. Sécurité / audit / réserves

Actors/motifs filtrés · audit refs-only · fake-only · U-M02 **OPEN**.

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 **OPEN**  
C1–C4 **RECOMMENDED — NOT VALIDATED**

---

## 11. Anti-claims

Pas D5 READY · DELIVERY COMPLETE · persistence réelle · T-A7 · R-M01/U-M02 fermées · C1–C4 validées · exécution réelle · Decision Morris créée.

---

## 12. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D4 MATURITY ASSESSMENT VALIDATED AFTER CORRECTION — D5 REQUIRES MORRIS GO`
