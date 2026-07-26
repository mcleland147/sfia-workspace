# SFIA Review Pack — FULL — T-A6 D5 Bounded Coordination Validation

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 11:55:13 CEST (+0200) |
| **Cycle** | QA / validation / T-A6-D5 RecommendNextGate |
| **Profil** | Critical |
| **Gate** | `GO VALIDATE T-A6 DELIVERY D5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **Base** | origin/main @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `b2c582f06d6ac0ebe1f7d28d07ea32dd632cebf1` |
| **HEAD final** | `96f8ac87e4e4a95ee7f3d75082af8a5b06649b9e` |
| **Commits** | `098473b` fix · `f8e62b8` validate docs · record/point HEAD |
| **Push projet / PR / merge** | **NON** |
| **Modeled / T-A3–T-A5 / packages** | **NON** modifiés |
| **D1–D4 régressés** | **NON** (140 PASS D1–D5) |
| **Décision / gate consommé par D5** | **NON** |
| **SQL / API / UI / T-A7 / adapter / exécution** | **ABSENTS** |
| **Niveau** | FULL |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D5 BOUNDED COORDINATION VALIDATED AFTER CORRECTION — NEXT T-A6 STEP REQUIRES MORRIS FRAMING AND GO` |

---

## 1. Truth Check

PASS — branche/HEAD/merge-base exacts au départ · staged vide · untracked `.tmp-sfia-review/` · handoff source blob `9ee232de…`.

### Status final

```
## framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
?? .tmp-sfia-review/
```

---

## 2. Handoff source / CKC

| Item | Valeur |
|------|--------|
| Handoff source | blob `9ee232de38c9a68fe684c55ed807bbf2dfd15cbc` |
| Verdict source | D5 BOUNDED COORDINATION IMPLEMENTED — VALIDATION REQUIRES MORRIS GO |
| CKC | `04-qa-validation.md` candidate · `executionAuthority=false` |

---

## 3. Contrat D5 / corrections

Canonique **RecommendNextGate** · pas d'agrégat/repo/persistence D5 · `T_A7_AUTO_LAUNCH_FORBIDDEN`.

### Major corrigés

| ID | Correction |
|----|------------|
| **F-A6-D5-01** | `maturityAssessmentVersion` obligatoire |
| **F-A6-D5-02** | Evidence versions exactes (snapshots gelés ; refuse version 0) |
| **F-A6-D5-03** | Blocker `evidence_superseded` |

---

## 4. Read-only / anti-claims

D1–D4 non mutés · `kind=recommendation` · `executionAuthority=false` · `gateConsumed=false` · `decisionCreated=false` · gate candidat `SOLICIT_MORRIS_GO_FOR_NEXT_CYCLE` jamais consommé.

Persistence D5 / OCC / idempotence mutante : **N/A**.

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 **OPEN** · C1–C4 **NOT VALIDATED**.

---

## 5. Tests

| Suite | Commande | Avant | Après | Résultat |
|-------|----------|-------|-------|----------|
| evidence-review D1–D5 | `npm test -- __tests__/oa/evidence-review` | 136 | **140** | PASS |
| T-A3 | `npm test -- __tests__/oa/decision` | 50 | 50 | PASS |
| T-A4 | `npm test -- __tests__/oa/execution-contract` | 61 | 61 | PASS |
| T-A5 | `npm test -- __tests__/oa/execution-attempt` | 88 | 88 | PASS |
| Modeled T-A6 | node --test modeled | 27 | 27 | PASS |
| lint / build / diff-check | — | — | — | PASS |

---

## 6. Contenu complet — 18-delivery-d5-validation.md

```markdown
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
| **HEAD final** | `ac4ad922c7af4a8e4d835681c60d22d96a44c5e3` |
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
```

## 7. Contenu complet — README
```markdown
# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Profil** | Critical |
| **Gate D1 validate** | `GO VALIDATE T-A6 DELIVERY D1` (**CONSUMED**) |
| **Gate D2 validate** | `GO VALIDATE T-A6 DELIVERY D2` (**CONSUMED**) |
| **Gate D3 validate** | `GO VALIDATE T-A6 DELIVERY D3` (**CONSUMED**) |
| **Gate D4 validate** | `GO VALIDATE T-A6 DELIVERY D4` (**CONSUMED**) |
| **Gate D5 implement** | `GO IMPLEMENT T-A6 DELIVERY D5` (**CONSUMED**) |
| **Gate D5 validate** | `GO VALIDATE T-A6 DELIVERY D5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Modeled** | Evidence/RB/Maturity `0.2.0-oa` · ClaimEvaluation `0.1.0-oa` |
| **Runtime D1** | **VALIDATED** (après correction) |
| **Runtime D2** | **VALIDATED AFTER CORRECTION** |
| **Runtime D3** | **VALIDATED AFTER CORRECTION** |
| **Runtime D4** | **VALIDATED AFTER CORRECTION** |
| **Runtime D5** | RecommendNextGate — **T-A6-D5 VALIDATED AFTER CORRECTION** |
| **Fake-only / mémoire** | **oui** |
| **D5 read-only** | **oui** |
| **Persistence D5 / réelle** | **NON** |
| **Décision / gate consommé par D5** | **NON** |
| **`executionAuthority`** | **false** |
| **Push / PR / merge** | **NONE** |
| **T-A7** | **NON** ouvert |
| **T-A6 COMPLETE / Option A COMPLETE** | **NON** |
| **Statut pack** | **T-A6-D5 VALIDATED AFTER CORRECTION** |
| **Horodatage D5 validate** | 2026-07-26 11:54:00 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D5 BOUNDED COORDINATION VALIDATED AFTER CORRECTION — NEXT T-A6 STEP REQUIRES MORRIS FRAMING AND GO` |
| **Suite candidate** | `GO FRAME NEXT T-A6 STEP — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed** · cadrage Morris requis) |

## Livrables

1. [README.md](./README.md)
2. [01](./01-framing.md) … [17-delivery-d5-implementation.md](./17-delivery-d5-implementation.md)
3. [18-delivery-d5-validation.md](./18-delivery-d5-validation.md)
4. Runtime : `app/lib/oa/evidence-review/**` (D1–D5)
5. Tests : `app/__tests__/oa/evidence-review/**`

## D5 validé (après correction)

`RecommendNextGate` · versions exactes · fail-closed · `executionAuthority=false` · aucun gate/décision · 140 tests D1–D5 PASS

## Réserves (OPEN)

B5 · R1 · R-T-A3-1..4 (HARD 1–2) · R-M01 · U-M02 **OPEN**
C1–C4 **RECOMMENDED — NOT VALIDATED**

## Anti-claims

Pas T-A6 COMPLETE / Option A COMPLETE / DELIVERY COMPLETE / runtime ready / production ready / persistence réelle / T-A7 / R-M01 fermée / C1–C4 validées / exécution réelle / gate consommé / décision Morris créée
```

## 8. Diff utile corrections (098473b)
```
commit 098473bcb31024949b7b0e65c377a9d5ddb2eae5
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Jul 26 11:54:47 2026 +0200

    fix(sfia-studio): correct T-A6 D5 validation findings
    
    Require exact maturity and evidence versions, and block superseded
    evidence from positive gate recommendations.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../adversarialCoordinationValidation.test.ts      | 118 ++++++++++++++
 .../application/recommendNextGate.ts               | 181 +++++++++++++++------
 .../oa/evidence-review/domain/coordinationTypes.ts |   1 +
 3 files changed, 246 insertions(+), 54 deletions(-)
```

Diff complet fix :
```diff
commit 098473bcb31024949b7b0e65c377a9d5ddb2eae5
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Jul 26 11:54:47 2026 +0200

    fix(sfia-studio): correct T-A6 D5 validation findings
    
    Require exact maturity and evidence versions, and block superseded
    evidence from positive gate recommendations.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/recommendNextGate.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/recommendNextGate.ts
index b0f37c8..92ea42b 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/recommendNextGate.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/recommendNextGate.ts
@@ -184,8 +184,18 @@ export class RecommendNextGate {
       const bundleMap = new Map<string, ReviewBundle>();
       const evidenceMap = new Map<string, Evidence>();
 
-      // --- Load maturity (exact version) ---
+      // --- Load maturity (exact version required — no implicit latest) ---
       if (request.maturityAssessmentId) {
+        if (
+          request.maturityAssessmentVersion === undefined ||
+          !Number.isInteger(request.maturityAssessmentVersion) ||
+          request.maturityAssessmentVersion < 1
+        ) {
+          return fail(
+            "COORDINATION_INVALID",
+            "maturity_assessment_version_required",
+          );
+        }
         maturityAssessment = await this.maturity.findById(
           request.maturityAssessmentId,
         );
@@ -194,10 +204,10 @@ export class RecommendNextGate {
             code: "source_missing",
             sourceKind: "maturity_assessment",
             sourceId: request.maturityAssessmentId,
+            sourceVersion: request.maturityAssessmentVersion,
           });
         } else {
           if (
-            request.maturityAssessmentVersion !== undefined &&
             maturityAssessment.version !== request.maturityAssessmentVersion
           ) {
             blockers.push({
@@ -476,19 +486,30 @@ export class RecommendNextGate {
         });
       }
 
-      // Collect evidence refs
+      // Collect evidence refs — prefer exact frozen snapshot versions; never imply latest.
       const evidenceRefs: VersionedRef[] = [];
       if (request.evidenceRefs) {
-        evidenceRefs.push(...request.evidenceRefs);
-      }
-      if (maturityAssessment?.evidenceRefs) {
-        for (const id of maturityAssessment.evidenceRefs) {
-          evidenceRefs.push({ id, version: 0 }); // version 0 = any (id-only from maturity)
+        for (const ref of request.evidenceRefs) {
+          if (!Number.isInteger(ref.version) || ref.version < 1) {
+            blockers.push({
+              code: "version_mismatch",
+              sourceKind: "evidence",
+              sourceId: ref.id,
+              detail: "exact_version_required",
+            });
+          } else {
+            evidenceRefs.push(ref);
+          }
         }
       }
+      const frozenVersionByEvidenceId = new Map<string, number>();
       for (const bundle of bundleMap.values()) {
         if (bundle.frozenEvidenceSnapshots?.length) {
           for (const snap of bundle.frozenEvidenceSnapshots) {
+            frozenVersionByEvidenceId.set(
+              snap.evidenceId,
+              snap.evidenceVersion,
+            );
             evidenceRefs.push({
               id: snap.evidenceId,
               version: snap.evidenceVersion,
@@ -496,16 +517,48 @@ export class RecommendNextGate {
           }
         } else {
           for (const id of bundle.evidenceRefs) {
-            evidenceRefs.push({ id, version: 0 });
+            // Unfrozen / snapshot-less bundle already blocked; still require exact version.
+            blockers.push({
+              code: "version_mismatch",
+              sourceKind: "evidence",
+              sourceId: id,
+              detail: "frozen_snapshot_version_required",
+            });
           }
         }
       }
-      for (const claim of claimMap.values()) {
-        for (const id of claim.requiredEvidenceRefs) {
-          evidenceRefs.push({ id, version: 0 });
+      if (maturityAssessment?.evidenceRefs) {
+        for (const id of maturityAssessment.evidenceRefs) {
+          const frozenVersion = frozenVersionByEvidenceId.get(id);
+          if (frozenVersion !== undefined) {
+            evidenceRefs.push({ id, version: frozenVersion });
+          } else {
+            blockers.push({
+              code: "version_mismatch",
+              sourceKind: "evidence",
+              sourceId: id,
+              detail: "exact_version_required_for_maturity_evidence_ref",
+            });
+          }
         }
-        for (const id of claim.providedEvidenceRefs ?? []) {
-          evidenceRefs.push({ id, version: 0 });
+      }
+      for (const claim of claimMap.values()) {
+        const ids = [
+          ...claim.requiredEvidenceRefs,
+          ...(claim.providedEvidenceRefs ?? []),
+        ];
+        for (const id of ids) {
+          const frozenVersion = frozenVersionByEvidenceId.get(id);
+          if (frozenVersion !== undefined) {
+            evidenceRefs.push({ id, version: frozenVersion });
+          } else {
+            blockers.push({
+              code: "version_mismatch",
+              sourceKind: "evidence",
+              sourceId: id,
+              detail: "exact_version_required_for_claim_evidence_ref",
+            });
+          }
         }
       }
       const uniqueEvidenceRefs = dedupeEvidenceRefs(sortRefs(evidenceRefs));
@@ -517,11 +570,11 @@ export class RecommendNextGate {
             code: "source_missing",
             sourceKind: "evidence",
             sourceId: ref.id,
-            sourceVersion: ref.version || undefined,
+            sourceVersion: ref.version,
           });
           continue;
         }
-        if (ref.version > 0 && evidence.version !== ref.version) {
+        if (evidence.version !== ref.version) {
           blockers.push({
             code: "version_mismatch",
             sourceKind: "evidence",
@@ -530,6 +583,14 @@ export class RecommendNextGate {
             detail: `expected_version=${ref.version}`,
           });
         }
+        if (evidence.status === "superseded") {
+          blockers.push({
+            code: "evidence_superseded",
+            sourceKind: "evidence",
+            sourceId: evidence.evidenceId,
+            sourceVersion: evidence.version,
+          });
+        }
         if (
           evidence.status === "unavailable" ||
           evidence.availability === "unavailable"
@@ -546,42 +607,36 @@ export class RecommendNextGate {
             sourceId: evidence.evidenceId,
           });
         } else if (
-          evidence.status !== "verified" &&
-          evidence.status !== "available"
+          evidence.status === "incomplete" ||
+          evidence.status === "expected"
         ) {
-          if (
-            evidence.status === "incomplete" ||
-            evidence.status === "expected"
-          ) {
-            gaps.push({
-              code: "evidence_incomplete",
-              sourceKind: "evidence",
-              sourceId: evidence.evidenceId,
-              detail: `status=${evidence.status}`,
-            });
-          }
+          gaps.push({
+            code: "evidence_incomplete",
+            sourceKind: "evidence",
+            sourceId: evidence.evidenceId,
+            detail: `status=${evidence.status}`,
+          });
+          blockers.push({
+            code: "evidence_not_verified",
+            sourceKind: "evidence",
+            sourceId: evidence.evidenceId,
+            sourceVersion: evidence.version,
+            detail: `status=${evidence.status}`,
+          });
         }
-        if (
-          evidence.status !== "verified" &&
-          evidence.status !== "unavailable" &&
-          evidence.status !== "rejected" &&
-          evidence.status !== "superseded"
-        ) {
-          // available but not verified is a soft gap for positive recommendation
-          if (evidence.status === "available") {
-            gaps.push({
-              code: "evidence_incomplete",
-              sourceKind: "evidence",
-              sourceId: evidence.evidenceId,
-              detail: "not_verified",
-            });
-            blockers.push({
-              code: "evidence_not_verified",
-              sourceKind: "evidence",
-              sourceId: evidence.evidenceId,
```

---

## 9. Suite candidate / verdict

**Suite candidate (NOT consumed) :** `GO FRAME NEXT T-A6 STEP — SFIA STUDIO V3-NATIVE — OPTION A`  
(cadrage repo-informed + GO Morris séparés — non inventé comme gate validé)

Pas T-A6 COMPLETE · Option A COMPLETE · runtime ready · production ready · R-M01 fermée · C1–C4 validées · T-A7 · exécution réelle.

**Verdict exact :**
`SFIA STUDIO V3-NATIVE OPTION A T-A6 D5 BOUNDED COORDINATION VALIDATED AFTER CORRECTION — NEXT T-A6 STEP REQUIRES MORRIS FRAMING AND GO`
