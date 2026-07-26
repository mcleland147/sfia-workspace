# 15 — T-A6-D4 MaturityAssessment Implementation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Sous-cycle** | T-A6-D4 — MaturityAssessment |
| **Cycle** | Delivery — implémentation (Critical) |
| **Gate** | `GO IMPLEMENT T-A6 DELIVERY D4 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `f935bc00ab2cac314f0ef09db939ef53d7ae05eb` |
| **HEAD final** | `3d7ec5de4361bc0dec3a627203b87c2bde84a6e1` |
| **Horodatage** | 2026-07-26 11:01:00 CEST (+0200) |
| **Handoff source** | blob `0b12a48c6e88ffcca0440b8a1dca611f28c6663b` |
| **Statut** | **T-A6-D4 IMPLEMENTED — NOT VALIDATED** |
| **D1 / D2 / D3** | VALIDATED AFTER CORRECTION |
| **D5** | **NON** |
| **Fake-only / mémoire** | **oui** |
| **Push / PR / merge** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D4 MATURITY ASSESSMENT IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 DELIVERY D4 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources / CKC

Delivery `01`…`14` · schema MaturityAssessment `0.2.0-oa` · catalogue Propose/Confirm/Downgrade · runtime D1–D3 · T-A3 Authority RO · CKC `03-architecture-technique.md` (candidate, `executionAuthority=false`).

---

## 2. Périmètre D4

### Inclus

- Domaine MaturityAssessment (`mat:`) + OCC runtime
- Commandes modeled : `ProposeMaturity` · `ConfirmMaturity` · `DowngradeMaturity`
- Bindings ClaimEvaluation exacts (id + version) immuables
- Calcul déterministe fail-closed · critères · gaps
- `autoPromoted=false` const
- HARD `blockingReservationRefs` ⇒ status `blocked` / refuse Confirm
- Downgrade explicite par supersession atomique
- MemoryMaturityAssessmentRepository · ClaimEvaluationReader RO · Audit `oa.maturity_assessment.*`

### Hors périmètre

D5 coordination · SQL/API/UI · T-A7 · modification modeled / T-A3–T-A5 · fermeture réserves · Decision Morris · executionAuthority

---

## 3. Architecture

Module inchangé : `app/lib/oa/evidence-review/**`

```
domain/maturityAssessment{Types,Errors,Invariants}.ts
application/{proposeMaturity,confirmMaturity,downgradeMaturity,maturityCalculation}.ts
ports/{maturityAssessmentRepository,claimEvaluationReader}.ts
infrastructure/{memoryMaturityAssessment{Store,Repository},claimEvaluationRepositoryReader}.ts
```

Adaptation D3 non-breaking : reader RO + `isSuperseded` scan mémoire.

---

## 4. Domaine / niveaux / critères

**Niveaux :** DOCUMENTED · VALIDATED · MODELED · IMPLEMENTED · ADOPTED  
**Status :** proposed · confirmed · rejected · superseded · blocked

**Seuils explicites (pas de moyenne) :**

| Niveau | Critère |
|--------|---------|
| DOCUMENTED | ≥1 claim eligible PASS |
| VALIDATED | + confirmation (system_deterministic non_critical ou humain) |
| MODELED | + claimType technique\|maturite_support\|conformite |
| IMPLEMENTED | + criticality critical\|structural confirmée |
| ADOPTED | + structural + confirmationAuthority=morris |

**Éligibilité positive interdite pour :** disputed · waived · superseded · not_pass · Critical/structural non confirmés · mauvaise version · claim absente.

---

## 5. Binding ClaimEvaluation

Chaque assessment conserve `claimEvaluationRefs` + `claimBindings[]` (id, version, status, criticality, confirmation, eligible, reviewBundle id/version). Aucune mutation ClaimEvaluation. Snapshot historique stable.

---

## 6. Commandes

| Commande | Comportement |
|----------|--------------|
| ProposeMaturity | lit claims exactes · calcule · proposed\|blocked · autoPromoted=false · OCC v1 |
| ConfirmMaturity | humain · ≠ system/agent · IMPLEMENTED/ADOPTED ⇒ Morris · pas HARD reserve · self-review refusée |
| DowngradeMaturity | humain · target < source · successor + source superseded atomique · motif sûr |

Aucune gate D5 · aucune Decision · `executionAuthority` inchangé false.

---

## 7. Repository / OCC / idempotence

MemoryMaturityAssessmentRepository · create/update/expectedVersion · createSuccessorAndMarkSuperseded · idempotency index · copies défensives.

---

## 8. Sécurité / audit

Actors/motifs filtrés · audit refs-only · fake-only · U-M02 OPEN.

Événements : proposed · calculated · confirmed · downgraded · superseded · operation_rejected · authority_rejected · idempotency_conflict · concurrent_modification_rejected.

---

## 9. Tests

| Suite | Résultat |
|-------|----------|
| evidence-review D1–D4 | **119 PASS** (105→119, +14 D4) |
| T-A3 / T-A4 / T-A5 | 50 / 61 / 88 PASS |
| Modeled T-A6 | 27 PASS |
| typecheck / lint / build / diff-check | PASS |

---

## 10. Findings

Aucun Critical / Major ouvert à l’implémentation.

Observations : O-D4-1 seuils runtime documentés (modeled ne fixe pas de formule numérique) · O-D4-2 C1–C4 NOT VALIDATED · O-D4-3 D5 absent.

---

## 11. Réserves

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 **OPEN**  
C1–C4 **RECOMMENDED — NOT VALIDATED**

---

## 12. Anti-claims

Pas D4 VALIDATED · D5 READY · DELIVERY COMPLETE · persistence réelle · T-A7 · R-M01 fermée · C1–C4 validées · exécution réelle · Decision Morris créée.

---

## 13. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D4 MATURITY ASSESSMENT IMPLEMENTED — VALIDATION REQUIRES MORRIS GO`
