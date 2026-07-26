# 13 — T-A6-D3 ClaimEvaluation Implementation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Sous-cycle** | T-A6-D3 — ClaimEvaluation |
| **Cycle** | Delivery — implémentation (Critical) |
| **Gate** | `GO IMPLEMENT T-A6 DELIVERY D3 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `589fe19b19b46275ee74a327c13645cdd0f534a1` |
| **HEAD final** | *(voir commit feat)* |
| **Horodatage** | 2026-07-26 10:31:00 CEST (+0200) |
| **Handoff source** | blob `16d91407e30e60d5605be3e0ca04552c115c4ec7` |
| **Statut** | **T-A6-D3 IMPLEMENTED — NOT VALIDATED** |
| **D1 / D2** | VALIDATED AFTER CORRECTION |
| **D4–D5** | **NON** |
| **Fake-only / mémoire** | **oui** |
| **Push / PR / merge** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D3 CLAIM EVALUATION IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 DELIVERY D3 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources / CKC

Delivery `01`…`12` · ClaimEvaluation schema `0.1.0-oa` · catalogue commandes · runtime D1/D2 · T-A3 AuthorityResolver RO · CKC `03-architecture-technique.md` (candidate, `executionAuthority=false`).

---

## 2. Périmètre D3

### Inclus

- Domaine ClaimEvaluation (`clm:`) + OCC runtime
- Commandes modeled : `EvaluateClaim` · `ConfirmClaimEvaluation` · `RejectClaimEvaluation`
- Intents EvaluateClaim : `evaluate` | `waive` | `dispute` (CreateClaim absorbé)
- Binding immuable `reviewBundleId` + `reviewBundleVersion` (= `frozenVersion`)
- Evidence assessments fail-closed (snapshot + verified + available)
- Authority via `ClaimAuthorityPort` / `FakeClaimAuthority` / adapter T-A3
- MemoryClaimEvaluationRepository · Audit `oa.claim_evaluation.*`

### Hors périmètre

MaturityAssessment · D5 · SQL/API/UI · T-A7 · modification modeled / T-A3–T-A5 · fermeture réserves

---

## 3. Architecture

Module inchangé : `app/lib/oa/evidence-review/**`

```
domain/claimEvaluation{Types,Errors,Invariants}.ts
application/{evaluateClaim,confirmClaimEvaluation,rejectClaimEvaluation,claimEvidenceAssessment}.ts
ports/{claimEvaluationRepository,reviewBundleReader,claimAuthorityPort}.ts
infrastructure/{memoryClaimEvaluation{Store,Repository},reviewBundleRepositoryReader,claimAuthorityAdapter}.ts
```

Adaptation D2 non-breaking : `ReviewBundle.frozenVersion` renseigné au freeze.

---

## 4. Lifecycle / outcomes

`pending` (non exposé en happy path) · `evaluating` · `pass` · `fail` · `not_proven` · `waived` · `disputed`

- non_critical + deterministic + Evidence OK ⇒ `pass` + `system_deterministic`
- critical / structural + Evidence OK ⇒ `evaluating` puis Confirm
- Evidence manquante / hors snapshot / unavailable / non verified / stale ⇒ `not_proven` (jamais PASS)
- requiredEvidenceRefs vide ⇒ `not_proven`
- synthesisOnly ou completeness≠complete ⇒ `not_proven`
- Critical : humain, ≠ system/agent, self-review interdite
- Structural : `confirmationAuthority=morris` + `canActAsMorris` + role `decision_maker`
- Waiver ≠ PASS ; system/agent interdits
- Dispute bloque Confirm (`CLAIM_DISPUTED`)
- Supersession : nouvel `clm:` + `supersedesClaimEvaluationId` ; ancien immuable

---

## 5. PASS invariants (C1 couvert techniquement, non validé)

- requiredEvidenceRefs non vide
- chaque ref ∈ `frozenEvidenceSnapshots`
- version Evidence live = version snapshot
- availability available · status verified · freshness ≠ stale
- ReviewBundle frozen + `frozenVersion` exact
- aucun Claim PASS ≠ autorité d’exécution
- aucune Maturity créée

---

## 6. Tests

| Suite | Résultat |
|-------|----------|
| evidence-review D1+D2+D3 | **101 PASS** (87→101, +14 D3) |
| T-A3 / T-A4 / T-A5 | 50 / 61 / 88 PASS |
| Modeled T-A6 | 27 PASS |
| typecheck / lint / diff-check | PASS |

---

## 7. Findings

Aucun Critical / Major ouvert à l’implémentation.

Observations : C1 couvert fail-closed sans validation de réserve · R-M01 OPEN · O-D3-1 intents waive/dispute via EvaluateClaim (commandes cataloguées).

---

## 8. Réserves

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 **OPEN** · C1–C4 **NOT VALIDATED**

---

## 9. Anti-claims

Pas D3 VALIDATED · D4 READY · Maturity · persistence réelle · T-A7 · R-M01 fermée · exécution réelle

---

## 10. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D3 CLAIM EVALUATION IMPLEMENTED — VALIDATION REQUIRES MORRIS GO`
