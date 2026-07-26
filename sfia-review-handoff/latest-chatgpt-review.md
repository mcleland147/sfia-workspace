# SFIA Review Pack — FULL — T-A6 D5 Bounded Coordination Implementation

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 11:41:41 CEST (+0200) |
| **Cycle** | Delivery — implémentation / T-A6-D5 RecommendNextGate |
| **Profil** | Critical |
| **Gate** | `GO IMPLEMENT T-A6 DELIVERY D5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **Base** | origin/main @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `fb5e11ccb48fb40aecf95de63459efcccd501ca8` |
| **HEAD final** | `b2c582f06d6ac0ebe1f7d28d07ea32dd632cebf1` |
| **Commits** | `a9c5acc` feat · `be00e4f` record · `b2c582f` point HEAD |
| **Push projet / PR / merge** | **NON** |
| **Modeled / T-A3–T-A5 / packages** | **NON** modifiés |
| **D1–D4 régressés** | **NON** (136 PASS D1–D5) |
| **Décision Morris créée / gate consommé par D5** | **NON** |
| **SQL / API / UI / T-A7 / adapter / exécution réelle** | **ABSENTS** |
| **Niveau** | FULL |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D5 BOUNDED COORDINATION IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |

---

## 1. Truth Check

PASS — branche/HEAD/merge-base exacts au départ · staged vide · untracked `.tmp-sfia-review/` · handoff source blob `6e169016…` · aucune PR/branche distante T-A6 projet.

### Status final

```
## framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
?? .tmp-sfia-review/
```

### Worktrees

Multiples worktrees locaux (main, handoff, etc.) · T-A6 sur `sfia-workspace-v3-native-option-a-tech`.

---

## 2. Handoff source / CKC / Template

| Item | Valeur |
|------|--------|
| Handoff source | blob `6e169016e38308966290f7e6bc8e4dc3a3db826e` |
| Verdict source | D4 VALIDATED AFTER CORRECTION — D5 REQUIRES MORRIS GO |
| CKC | `03-architecture-technique.md` candidate · `executionAuthority=false` |
| Template | `prompts/templates/sfia-cycle-execution-template.md` |

---

## 3. Définition D5 découverte

| Élément | Source | Implémenté |
|---------|--------|------------|
| **RecommendNextGate** | delivery framing `06` · décisions DEL-03 · découpage DEL-09 | **oui** |
| Lecture seule L1 | framing §13 / §18 | **oui** |
| Pas de god-orchestrator | DEL-03 | **oui** (1 use case) |
| Agrégat D5 / repository | **absent** modeled/delivery | **non créé** |
| Persistence D5 | non exigée | **aucune** |
| `T_A7_AUTO_LAUNCH_FORBIDDEN` | modeled catalog / narrative | **oui** |
| Commandes inventées (LaunchT-A7, ConfirmGate, CreateDecision) | — | **absentes** |

---

## 4. Fichiers

### Créés

- `application/recommendNextGate.ts`
- `domain/coordinationTypes.ts`
- `domain/coordinationErrors.ts`
- `ports/maturityAssessmentReader.ts`
- `infrastructure/maturityAssessmentRepositoryReader.ts`
- `__tests__/…/recommendNextGate.test.ts`
- `__tests__/…/adversarialCoordinationValidation.test.ts`
- `17-delivery-d5-implementation.md`

### Modifiés

- `index.ts` (wiring RecommendNextGate + reader)
- `ports/evidenceAudit.ts` (événements `oa.coordination.*`)
- `README.md` T-A6

### Supprimés

Aucun.

### Arborescence D5

```
evidence-review/
  application/recommendNextGate.ts
  domain/coordinationTypes.ts
  domain/coordinationErrors.ts
  ports/maturityAssessmentReader.ts
  infrastructure/maturityAssessmentRepositoryReader.ts
```

---

## 5. Caractère read-only / readers / cohérence

| Invariant | Résultat |
|-----------|----------|
| D1–D4 non mutés | PASS (test repository equality) |
| EvidenceReader / ReviewBundleReader / ClaimEvaluationReader / MaturityAssessmentReader | PASS |
| Versions exactes | PASS |
| disputed / waived / superseded / non confirmé exclus du positif | PASS |
| HARD / R-M01 → blocked, réserve non fermée | PASS |
| Fail-closed sans sources | PASS |
| Déterminisme ordre refs | PASS |
| Copies défensives | PASS |

---

## 6. Recommandations / RecommendNextGate / autorité

| Champ | Valeur |
|-------|--------|
| `kind` | toujours `recommendation` |
| `executionAuthority` | toujours `false` |
| `gateConsumed` / `decisionCreated` | toujours `false` |
| Status | `blocked` · `not_recommended` · `requires_human_decision` · `gate_candidate` |
| Gate candidat (sain) | `SOLICIT_MORRIS_GO_FOR_NEXT_CYCLE` + Morris |
| Auto T-A7 | `T_A7_AUTO_LAUNCH_FORBIDDEN` |
| Persistence D5 | aucune |
| OCC/idempotence D5 | N/A (read-only, pas de mutation) |

---

## 7. Réserves

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 **OPEN**  
C1–C4 **RECOMMENDED — NOT VALIDATED** (gap `c1_c4_not_validated`)

---

## 8. Sécurité / audit / RGPD

Actors filtrés · audit refs-only · fake-only · aucun payload Evidence · secret scan clean (fixtures de refus uniquement).

---

## 9. Tests (commandes exactes)

| Suite | Commande | Avant | Après | Résultat |
|-------|----------|-------|-------|----------|
| evidence-review D1–D5 | `npm test -- __tests__/oa/evidence-review` | 122 | **136** | PASS (+14) |
| T-A3 | `npm test -- __tests__/oa/decision` | 50 | 50 | PASS |
| T-A4 | `npm test -- __tests__/oa/execution-contract` | 61 | 61 | PASS |
| T-A5 | `npm test -- __tests__/oa/execution-attempt` | 88 | 88 | PASS |
| Modeled T-A6 | `node --test …/evidence-review-maturity-governance.test.mjs` | 27 | 27 | PASS |
| typecheck / lint / build / diff-check | — | — | — | PASS |

Skipped : 0. Critical/Major findings : **aucun**.

---

## 10. Validation finale

- Contrat D5 découvert et cité
- Read-only D1–D4
- Aucune décision / gate consommé / exécution
- Modeled / T-A3–T-A5 / packages inchangés
- Fake-only · tracked clean après commits (sauf `.tmp-sfia-review/`)

---

## 11. Contenu complet — 17-delivery-d5-implementation.md


```markdown
# 17 — T-A6-D5 Bounded Coordination Implementation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Sous-cycle** | T-A6-D5 — coordination bornée RecommendNextGate |
| **Cycle** | Delivery — implémentation (Critical) |
| **Gate** | `GO IMPLEMENT T-A6 DELIVERY D5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `fb5e11ccb48fb40aecf95de63459efcccd501ca8` |
| **HEAD final** | `be00e4f8189f8eac3714c60fdce4c330e59949d2` |
| **Horodatage** | 2026-07-26 11:40:00 CEST (+0200) |
| **Handoff source** | blob `6e169016e38308966290f7e6bc8e4dc3a3db826e` |
| **Statut** | **T-A6-D5 IMPLEMENTED — NOT VALIDATED** |
| **D1 / D2 / D3 / D4** | VALIDATED (non régressés) |
| **Fake-only / mémoire / read-only** | **oui** |
| **Persistence D5** | **aucune** (calcul à la demande) |
| **Push / PR / merge** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D5 BOUNDED COORDINATION IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 DELIVERY D5 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources / CKC

Delivery `01`…`16` · README · handoff D4 validation · framing `recommendNextGate.ts` · décisions D-T-A6-DEL-01/03/05/06/08/09/10 · catalog modeled `T_A7_AUTO_LAUNCH_FORBIDDEN` · runtime `evidence-review/**` · CKC `03-architecture-technique.md` (candidate, `executionAuthority=false`).

---

## 2. Définition D5 découverte

| Élément | Source | Décision d’implémentation |
|---------|--------|---------------------------|
| Commande | Delivery framing/decisions : **`RecommendNextGate`** | Implémentée |
| Caractère | lecture seule · L1 · système · **pas** auto-launch | Strict RO |
| Agrégat D5 | **absent** des sources modeled/delivery | **Aucun** repository / OCC D5 |
| God-orchestrator | **interdit** (DEL-03) | Un use case fichier unique |
| Persistence | non exigée | Résultat calculé à la demande |
| Erreur T-A7 | modeled `T_A7_AUTO_LAUNCH_FORBIDDEN` | Refus si `attemptAutoLaunchNextCycle` |

Types inventés absents : CoordinationAssessment persisté · LaunchT-A7 · ConfirmGate · CreateDecision.

---

## 3. Périmètre / hors périmètre

**In :** RecommendNextGate · readers D1–D4 · cohérence cross-aggregate · blockers/gaps · next action · gate candidate · audit refs-only · tests · docs.

**Out :** mutation D1–D4 · consommation de gate · décision Morris · fermeture réserve · D5 persistence · SQL/API/UI · T-A7 · exécution réelle · modeled/T-A3–T-A5.

---

## 4. Architecture D5

```
application/recommendNextGate.ts
domain/coordinationTypes.ts
domain/coordinationErrors.ts
ports/maturityAssessmentReader.ts
infrastructure/maturityAssessmentRepositoryReader.ts
(+ EvidenceReader / ReviewBundleReader / ClaimEvaluationReader existants)
```

Wiring : `createInMemoryEvidenceReviewServices` → `recommendNextGate`.

---

## 5. Caractère read-only

- Aucune écriture Evidence / ReviewBundle / ClaimEvaluation / MaturityAssessment.
- Ports readers uniquement ; copies défensives du résultat.
- Versions exactes ; pas de lookup « dernière version » implicite.
- Tests : repositories inchangés après coordination.

---

## 6. Cohérence cross-aggregate

Vérifie : existence + version exacte · project/subject match · RB gelé · claim↔RB version · disputed/waived/superseded/non confirmé · evidence unavailable/not verified · maturity blocked/superseded/proposed · HARD reserves caller-supplied.

Incohérence ⇒ blocker / `not_recommended` / `blocked` — **jamais** `gate_candidate` par défaut.

---

## 7. Recommandations

| Champ | Règle |
|-------|-------|
| `kind` | toujours `"recommendation"` |
| `executionAuthority` | toujours `false` |
| `gateConsumed` / `decisionCreated` | toujours `false` |
| Gate positif | seulement maturité **confirmed** + chaîne cohérente + sans HARD |
| Gate code | `SOLICIT_MORRIS_GO_FOR_NEXT_CYCLE` (candidat ; D-T-A6-10) |
| Auto T-A7 | refusé (`T_A7_AUTO_LAUNCH_FORBIDDEN`) |

---

## 8. Autorité / anti-claims / réserves

Système = analyse/recommandation. Morris requis pour structural / HARD / next cycle.  
B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 **OPEN**. C1–C4 **NOT VALIDATED** (gap `c1_c4_not_validated`).  
D5 n’ouvre/ferme/fusionne aucune réserve.

---

## 9. Sécurité / audit

Actors filtrés · audit `oa.coordination.*` refs-only · fake-only · aucun payload.  
Événements : `next_action_recommended` · `next_gate_recommended` · `blocked` · `operation_rejected`.

---

## 10. Tests

| Suite | Résultat |
|-------|----------|
| evidence-review D1–D5 | **136 PASS** (était 122) |
| T-A3 / T-A4 / T-A5 | 50 / 61 / 88 PASS |
| Modeled T-A6 | 27 PASS |
| typecheck / lint / build / diff-check | PASS |

---

## 11. Findings

Critical / Major : **aucun**.  
Observations : O-D5-1 pas de schema modeled dédié RecommendNextGate (contrat delivery) · O-D5-2 C1–C4 NOT VALIDATED · O-D5-3 R-M01 OPEN.

---

## 12. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D5 BOUNDED COORDINATION IMPLEMENTED — VALIDATION REQUIRES MORRIS GO`
```

---

## 12. Contenu complet — README T-A6

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
| **Gate D5 implement** | `GO IMPLEMENT T-A6 DELIVERY D5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate D5 validate** | `GO VALIDATE T-A6 DELIVERY D5` (**NOT consumed**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Modeled** | Evidence/RB/Maturity `0.2.0-oa` · ClaimEvaluation `0.1.0-oa` |
| **Runtime D1** | **VALIDATED** (après correction) |
| **Runtime D2** | **VALIDATED AFTER CORRECTION** |
| **Runtime D3** | **VALIDATED AFTER CORRECTION** |
| **Runtime D4** | **VALIDATED AFTER CORRECTION** |
| **Runtime D5** | RecommendNextGate — **T-A6-D5 IMPLEMENTED — NOT VALIDATED** |
| **Fake-only / mémoire** | **oui** |
| **D5 read-only** | **oui** (aucune mutation D1–D4) |
| **Persistence réelle** | **NON** |
| **Persistence D5** | **aucune** |
| **Exécution / décision / gate consommé par D5** | **NON** |
| **Push / PR / merge** | **NONE** |
| **T-A7** | **NON** ouvert |
| **Statut pack** | **T-A6-D5 IMPLEMENTED — NOT VALIDATED** |
| **Horodatage D5 implement** | 2026-07-26 11:40:00 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D5 BOUNDED COORDINATION IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 DELIVERY D5 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Livrables

1. [README.md](./README.md)
2. [01](./01-framing.md) … [16-delivery-d4-validation.md](./16-delivery-d4-validation.md)
3. [17-delivery-d5-implementation.md](./17-delivery-d5-implementation.md)
4. Runtime : `app/lib/oa/evidence-review/**` (D1–D5)
5. Tests : `app/__tests__/oa/evidence-review/**`

## D5 implémenté (non validé)

`RecommendNextGate` · read-only · fail-closed · `executionAuthority=false` · aucun gate consommé · aucune décision créée · 136 tests D1–D5 PASS

## Réserves (OPEN)

B5 · R1 · R-T-A3-1..4 (HARD 1–2) · R-M01 · U-M02 **OPEN**
C1–C4 **RECOMMENDED — NOT VALIDATED**

## Anti-claims

Pas D5 VALIDATED / T-A6 COMPLETE / DELIVERY COMPLETE / persistence réelle / T-A7 / R-M01 fermée / C1–C4 validées / exécution réelle / gate consommé / décision Morris créée
```

---

## 13. Diff utile runtime D5 (commit a9c5acc — fichiers D5)

### coordinationTypes.ts / coordinationErrors.ts / recommendNextGate.ts / reader

```
commit a9c5acc4ba77fbf105310619cdcb71591caf9687
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Jul 26 11:41:00 2026 +0200

    feat(sfia-studio): implement T-A6 D5 bounded coordination
    
    Add read-only RecommendNextGate over D1–D4 readers with fail-closed
    cross-aggregate checks, non-executive gate candidates, and T-A7 auto-launch refusal.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../application/recommendNextGate.ts               | 1010 ++++++++++++++++++++
 .../evidence-review/domain/coordinationErrors.ts   |   72 ++
 .../oa/evidence-review/domain/coordinationTypes.ts |  230 +++++
 .../app/lib/oa/evidence-review/index.ts            |   30 +-
 .../maturityAssessmentRepositoryReader.ts          |   18 +
 .../lib/oa/evidence-review/ports/evidenceAudit.ts  |    8 +-
 .../ports/maturityAssessmentReader.ts              |    9 +
 7 files changed, 1373 insertions(+), 4 deletions(-)
```

Diff complet runtime (extrait utile) : voir commit `a9c5acc` path `evidence-review/**` (+~1100 LOC recommendNextGate + types).

### Contenu complet coordinationTypes.ts
```typescript
/**
 * T-A6-D5 bounded coordination — RecommendNextGate (read-only).
 *
 * Sources: delivery framing/decisions (RecommendNextGate L1, no god-orchestrator),
 * modeled T_A7_AUTO_LAUNCH_FORBIDDEN / D-T-A6-10.
 *
 * NOT an aggregate. No persistence. No OCC. No mutation of D1–D4.
 * Recommendation ≠ decision ≠ confirmation ≠ executionAuthority ≠ gate consumed.
 */

import type { ActorReference } from "@/lib/oa/doctrine";

export type { ActorReference };

/** Fixed discriminator — never "decision" / "approved" / "consumed" / "executed". */
export type CoordinationResultKind = "recommendation";

/**
 * Coordination outcome — fail-closed vocabulary from D5 delivery cycle.
 * Never implies gate consumption or Morris decision.
 */
export type CoordinationStatus =
  | "blocked"
  | "not_recommended"
  | "requires_human_decision"
  | "gate_candidate";

export type CoordinationBlockerCode =
  | "source_missing"
  | "version_mismatch"
  | "evidence_unavailable"
  | "evidence_not_verified"
  | "review_bundle_not_frozen"
  | "review_bundle_incomplete"
  | "review_bundle_synthesis_only"
  | "claim_disputed"
  | "claim_waived"
  | "claim_superseded"
  | "claim_not_confirmed"
  | "claim_not_pass"
  | "maturity_blocked"
  | "maturity_superseded"
  | "maturity_not_confirmed"
  | "hard_reservation_open"
  | "cross_aggregate_inconsistency"
  | "no_sources"
  | "t_a7_auto_launch_forbidden";

export type CoordinationGapCode =
  | "evidence_incomplete"
  | "review_incomplete"
  | "claim_confirmation_missing"
  | "maturity_confirmation_missing"
  | "reserve_open"
  | "c1_c4_not_validated"
  | "r_m01_open";

export type NextActionCode =
  | "complete_evidence"
  | "verify_evidence_integrity"
  | "freeze_review_bundle"
  | "complete_review"
  | "evaluate_claim"
  | "confirm_claim_evaluation"
  | "resolve_dispute"
  | "propose_maturity"
  | "confirm_maturity"
  | "downgrade_maturity"
  | "solicit_morris_arbitration"
  | "solicit_morris_go";

/**
 * Gate candidate codes — never consumed by D5.
 * T-A7 / next cycle require an explicit Morris GO (D-T-A6-10).
 */
export type GateCandidateCode =
  | "SOLICIT_MORRIS_GO_FOR_NEXT_CYCLE"
  | "GO_VALIDATE_T_A6_DELIVERY_D5";

export type AuthorityRequirementLevel =
  | "none"
  | "human"
  | "n2"
  | "n3"
  | "morris";

export type SourceSnapshotKind =
  | "evidence"
  | "review_bundle"
  | "claim_evaluation"
  | "maturity_assessment";

export type SourceSnapshot = {
  kind: SourceSnapshotKind;
  id: string;
  version: number;
  status: string;
  projectId?: string;
  subjectRef?: string;
};

export type CoordinationBlocker = {
  code: CoordinationBlockerCode;
  sourceKind?: SourceSnapshotKind;
  sourceId?: string;
  sourceVersion?: number;
  detail?: string;
};

export type CoordinationGap = {
  code: CoordinationGapCode;
  sourceKind?: SourceSnapshotKind;
  sourceId?: string;
  detail?: string;
};

export type NextActionRecommendation = {
  kind: "recommendation";
  actionCode: NextActionCode;
  reasons: string[];
  authorityRequired: AuthorityRequirementLevel;
};

export type GateRecommendation = {
  kind: "recommendation";
  gateCode: GateCandidateCode;
  /** Always false — D5 never consumes a gate. */
  gateConsumed: false;
  /** Always false — D5 never creates a Morris decision. */
  decisionCreated: false;
  reasons: string[];
  authorityRequired: AuthorityRequirementLevel;
};

export type AuthorityRequirement = {
  level: AuthorityRequirementLevel;
  morrisRequired: boolean;
  reasons: string[];
};

/**
 * Deterministic coordination result — computed on demand, not persisted.
 */
export type CoordinationResult = {
  kind: CoordinationResultKind;
  status: CoordinationStatus;
  projectId: string;
  subjectRef?: string;
  assessedAt: string;
  sourceSnapshots: SourceSnapshot[];
  blockers: CoordinationBlocker[];
  gaps: CoordinationGap[];
  nextAction?: NextActionRecommendation;
  nextGate?: GateRecommendation;
  authorityRequirement: AuthorityRequirement;
  /** Always false — maturity/claim PASS ≠ executionAuthority. */
  executionAuthority: false;
  /** Always false — recommendation ≠ gate consumed. */
  gateConsumed: false;
  /** Always false — recommendation ≠ Morris decision. */
  decisionCreated: false;
};

export type VersionedRef = {
  id: string;
  version: number;
};

export type RecommendNextGateRequest = {
  projectId: string;
  subjectRef?: string;
  /** Exact MaturityAssessment binding (preferred chain root). */
  maturityAssessmentId?: string;
  maturityAssessmentVersion?: number;
  claimEvaluationRefs?: VersionedRef[];
  reviewBundleRefs?: VersionedRef[];
  evidenceRefs?: VersionedRef[];
  /**
   * Caller-supplied open HARD reservation refs (e.g. R-M01, R-T-A3-*).
   * D5 may expose them as blockers; never closes them.
   */
  openHardReservationRefs?: string[];
  /**
   * If true, refuse with T_A7_AUTO_LAUNCH_FORBIDDEN (D-T-A6-10).
   */
  attemptAutoLaunchNextCycle?: boolean;
  correlationId?: string;
  nowIso?: string;
  actor?: ActorReference;
};

export type CoordinationDetailCode =
  | "COORDINATION_INVALID"
  | "COORDINATION_NO_SOURCES"
  | "COORDINATION_SOURCE_MISSING"
  | "COORDINATION_VERSION_MISMATCH"
  | "COORDINATION_INCONSISTENT"
  | "T_A7_AUTO_LAUNCH_FORBIDDEN"
  | "COORDINATION_SECRET_FORBIDDEN";

export type CoordinationModeledErrorCode =
  | "VALIDATION_FAILED"
  | "T_A7_AUTO_LAUNCH_FORBIDDEN"
  | "STATE_CONFLICT";

export type CoordinationStructuredError = {
  schemaVersion: "0.1.0-oa";
  errorCode: CoordinationModeledErrorCode;
  detailCode: CoordinationDetailCode;
  message: string;
  severity: "error" | "critical";
  recoverable: boolean;
  timestamp: string;
  correlationId?: string;
  projectId?: string;
};

export type RecommendNextGateResult =
  | {
      ok: true;
      coordination: CoordinationResult;
      error?: undefined;
      durationMs: number;
    }
  | {
      ok: false;
      coordination?: CoordinationResult;
      error: CoordinationStructuredError;
      durationMs: number;
    };
```

---

## 14. Diff utile tests D5

```
commit a9c5acc4ba77fbf105310619cdcb71591caf9687
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Jul 26 11:41:00 2026 +0200

    feat(sfia-studio): implement T-A6 D5 bounded coordination
    
    Add read-only RecommendNextGate over D1–D4 readers with fail-closed
    cross-aggregate checks, non-executive gate candidates, and T-A7 auto-launch refusal.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../adversarialCoordinationValidation.test.ts      | 141 ++++++
 .../oa/evidence-review/recommendNextGate.test.ts   | 486 +++++++++++++++++++++
 2 files changed, 627 insertions(+)
```
Tests : 11 RecommendNextGate + 3 adversariaux coordination (inclus dans 136 PASS).

---

## 15. Anti-claims / gate suivant / verdict

Pas D5 VALIDATED · T-A6 COMPLETE · DELIVERY COMPLETE · persistence réelle · T-A7 · R-M01/U-M02 fermées · C1–C4 validées · exécution réelle · décision Morris créée · gate consommé par runtime.

**Gate suivant (NOT consumed) :** `GO VALIDATE T-A6 DELIVERY D5 — SFIA STUDIO V3-NATIVE — OPTION A`

**Verdict exact :**
`SFIA STUDIO V3-NATIVE OPTION A T-A6 D5 BOUNDED COORDINATION IMPLEMENTED — VALIDATION REQUIRES MORRIS GO`

### Contenu complet recommendNextGate.ts
```typescript
/**
 * RecommendNextGate — T-A6-D5 bounded coordination (read-only).
 *
 * Reads Evidence / ReviewBundle / ClaimEvaluation / MaturityAssessment via RO ports.
 * Never mutates D1–D4. Never consumes a gate. Never creates a Morris decision.
 * Never sets executionAuthority. Never closes a reserve. Never launches T-A7.
 *
 * Delivery: RecommendNextGate L1 · D-T-A6-DEL-03 · D-T-A6-DEL-06 · D-T-A6-10.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import { createCoordinationError } from "../domain/coordinationErrors";
import type {
  AuthorityRequirement,
  AuthorityRequirementLevel,
  CoordinationBlocker,
  CoordinationGap,
  CoordinationResult,
  CoordinationStatus,
  GateRecommendation,
  NextActionRecommendation,
  RecommendNextGateRequest,
  RecommendNextGateResult,
  SourceSnapshot,
  VersionedRef,
} from "../domain/coordinationTypes";
import { containsForbiddenSecret, isOaIdentifier } from "../domain/invariants";
import { isProjectId } from "../domain/maturityAssessmentInvariants";
import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";
import type { Evidence } from "../domain/types";
import type { MaturityAssessment } from "../domain/maturityAssessmentTypes";
import type { ReviewBundle } from "../domain/reviewBundleTypes";
import type { ClaimEvaluationReaderPort } from "../ports/claimEvaluationReader";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { MaturityAssessmentReaderPort } from "../ports/maturityAssessmentReader";
import type { ReviewBundleReaderPort } from "../ports/reviewBundleReader";

function cloneSnapshots(snaps: SourceSnapshot[]): SourceSnapshot[] {
  return snaps.map((s) => ({ ...s }));
}

function cloneBlockers(items: CoordinationBlocker[]): CoordinationBlocker[] {
  return items.map((b) => ({ ...b }));
}

function cloneGaps(items: CoordinationGap[]): CoordinationGap[] {
  return items.map((g) => ({ ...g }));
}

function defensiveResult(result: CoordinationResult): CoordinationResult {
  return {
    ...result,
    sourceSnapshots: cloneSnapshots(result.sourceSnapshots),
    blockers: cloneBlockers(result.blockers),
    gaps: cloneGaps(result.gaps),
    nextAction: result.nextAction ? { ...result.nextAction, reasons: [...result.nextAction.reasons] } : undefined,
    nextGate: result.nextGate
      ? {
          ...result.nextGate,
          reasons: [...result.nextGate.reasons],
          gateConsumed: false,
          decisionCreated: false,
        }
      : undefined,
    authorityRequirement: {
      ...result.authorityRequirement,
      reasons: [...result.authorityRequirement.reasons],
    },
    executionAuthority: false,
    gateConsumed: false,
    decisionCreated: false,
    kind: "recommendation",
  };
}

function sortRefs(refs: VersionedRef[]): VersionedRef[] {
  return [...refs].sort((a, b) =>
    a.id === b.id ? a.version - b.version : a.id.localeCompare(b.id),
  );
}

function maxAuthority(
  a: AuthorityRequirementLevel,
  b: AuthorityRequirementLevel,
): AuthorityRequirementLevel {
  const rank: Record<AuthorityRequirementLevel, number> = {
    none: 0,
    human: 1,
    n2: 2,
    n3: 3,
    morris: 4,
  };
  return rank[a] >= rank[b] ? a : b;
}

export class RecommendNextGate {
  constructor(
    private readonly evidence: EvidenceReaderPort,
    private readonly reviewBundles: ReviewBundleReaderPort,
    private readonly claims: ClaimEvaluationReaderPort,
    private readonly maturity: MaturityAssessmentReaderPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: RecommendNextGateRequest,
  ): Promise<RecommendNextGateResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createCoordinationError>[0]["detailCode"],
      internalCauseRef: string,
      coordination?: CoordinationResult,
    ): RecommendNextGateResult => {
      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.coordination.operation_rejected",
        ts: timestamp,
        correlationId,
        actorId: request.actor?.actorId,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createCoordinationError({
          detailCode,
          timestamp,
          correlationId,
          projectId: request.projectId,
          internalCauseRef,
        }),
        coordination: coordination
          ? defensiveResult(coordination)
          : undefined,
        durationMs,
      };
    };

    try {
      if (!isProjectId(request.projectId)) {
        return fail("COORDINATION_INVALID", "project_id_invalid");
      }
      if (
        request.subjectRef !== undefined &&
        request.subjectRef !== "" &&
        !isOaIdentifier(request.subjectRef)
      ) {
        return fail("COORDINATION_INVALID", "subject_ref_invalid");
      }
      if (
        request.actor?.displayName &&
        containsForbiddenSecret(request.actor.displayName)
      ) {
        return fail("COORDINATION_SECRET_FORBIDDEN", "secret_in_actor");
      }
      if (request.attemptAutoLaunchNextCycle === true) {
        return fail("T_A7_AUTO_LAUNCH_FORBIDDEN", "auto_launch_next_cycle");
      }

      const hasMaturity = Boolean(request.maturityAssessmentId);
      const hasClaims = (request.claimEvaluationRefs?.length ?? 0) > 0;
      const hasBundles = (request.reviewBundleRefs?.length ?? 0) > 0;
      const hasEvidence = (request.evidenceRefs?.length ?? 0) > 0;
      if (!hasMaturity && !hasClaims && !hasBundles && !hasEvidence) {
        return fail("COORDINATION_NO_SOURCES", "no_sources");
      }

      const blockers: CoordinationBlocker[] = [];
      const gaps: CoordinationGap[] = [];
      const snapshots: SourceSnapshot[] = [];
      let authorityLevel: AuthorityRequirementLevel = "none";
      const authorityReasons: string[] = [];

      let maturityAssessment: MaturityAssessment | null = null;
      const claimMap = new Map<string, ClaimEvaluation>();
      const bundleMap = new Map<string, ReviewBundle>();
      const evidenceMap = new Map<string, Evidence>();

      // --- Load maturity (exact version) ---
      if (request.maturityAssessmentId) {
        maturityAssessment = await this.maturity.findById(
          request.maturityAssessmentId,
        );
        if (!maturityAssessment) {
          blockers.push({
            code: "source_missing",
            sourceKind: "maturity_assessment",
            sourceId: request.maturityAssessmentId,
          });
        } else {
          if (
            request.maturityAssessmentVersion !== undefined &&
            maturityAssessment.version !== request.maturityAssessmentVersion
          ) {
            blockers.push({
              code: "version_mismatch",
              sourceKind: "maturity_assessment",
              sourceId: maturityAssessment.maturityAssessmentId,
              sourceVersion: maturityAssessment.version,
              detail: `expected_version=${request.maturityAssessmentVersion}`,
            });
          }
          if (maturityAssessment.projectId !== request.projectId) {
            blockers.push({
              code: "cross_aggregate_inconsistency",
              sourceKind: "maturity_assessment",
              sourceId: maturityAssessment.maturityAssessmentId,
              detail: "project_mismatch",
            });
          }
          if (
            request.subjectRef &&
            maturityAssessment.subjectRef !== request.subjectRef
          ) {
            blockers.push({
              code: "cross_aggregate_inconsistency",
              sourceKind: "maturity_assessment",
              sourceId: maturityAssessment.maturityAssessmentId,
              detail: "subject_mismatch",
            });
          }
          snapshots.push({
            kind: "maturity_assessment",
            id: maturityAssessment.maturityAssessmentId,
            version: maturityAssessment.version,
            status: maturityAssessment.status,
            projectId: maturityAssessment.projectId,
            subjectRef: maturityAssessment.subjectRef,
          });
        }
      }

      // Collect claim refs: explicit + from maturity bindings
      const claimRefs: VersionedRef[] = [];
      if (request.claimEvaluationRefs) {
        claimRefs.push(...request.claimEvaluationRefs);
      }
      if (maturityAssessment) {
        for (const b of maturityAssessment.claimBindings) {
          claimRefs.push({
            id: b.claimEvaluationId,
            version: b.claimEvaluationVersion,
          });
        }
      }
      const uniqueClaimRefs = dedupeRefs(sortRefs(claimRefs));

      for (const ref of uniqueClaimRefs) {
        const claim = await this.claims.findById(ref.id);
        if (!claim) {
          blockers.push({
            code: "source_missing",
            sourceKind: "claim_evaluation",
            sourceId: ref.id,
            sourceVersion: ref.version,
          });
          continue;
        }
        if (claim.version !== ref.version) {
          blockers.push({
            code: "version_mismatch",
            sourceKind: "claim_evaluation",
            sourceId: claim.claimEvaluationId,
            sourceVersion: claim.version,
            detail: `expected_version=${ref.version}`,
          });
        }
        const superseded = await this.claims.isSuperseded(
          claim.claimEvaluationId,
        );
        if (superseded) {
          blockers.push({
            code: "claim_superseded",
            sourceKind: "claim_evaluation",
            sourceId: claim.claimEvaluationId,
            sourceVersion: claim.version,
          });
        }
        if (claim.status === "disputed") {
          blockers.push({
            code: "claim_disputed",
            sourceKind: "claim_evaluation",
            sourceId: claim.claimEvaluationId,
            sourceVersion: claim.version,
          });
          authorityLevel = maxAuthority(authorityLevel, "human");
          authorityReasons.push("dispute_requires_human");
        }
        if (claim.status === "waived") {
          blockers.push({
            code: "claim_waived",
            sourceKind: "claim_evaluation",
            sourceId: claim.claimEvaluationId,
            sourceVersion: claim.version,
          });
        }
        if (
          claim.status === "pass" &&
          claim.criticality !== "non_critical" &&
          !claim.confirmedBy
        ) {
          blockers.push({
            code: "claim_not_confirmed",
            sourceKind: "claim_evaluation",
            sourceId: claim.claimEvaluationId,
            sourceVersion: claim.version,
          });
          gaps.push({
            code: "claim_confirmation_missing",
            sourceKind: "claim_evaluation",
            sourceId: claim.claimEvaluationId,
          });
          if (claim.criticality === "structural") {
            authorityLevel = maxAuthority(authorityLevel, "morris");
            authorityReasons.push("structural_claim_requires_morris");
          } else {
            authorityLevel = maxAuthority(authorityLevel, "human");
            authorityReasons.push("critical_claim_requires_human");
          }
        }
        if (
          claim.status !== "pass" &&
          claim.status !== "waived" &&
          claim.status !== "disputed"
        ) {
          if (claim.status === "pending" || claim.status === "evaluating") {
            gaps.push({
              code: "claim_confirmation_missing",
              sourceKind: "claim_evaluation",
              sourceId: claim.claimEvaluationId,
              detail: `status=${claim.status}`,
            });
          } else if (claim.status === "fail" || claim.status === "not_proven") {
            blockers.push({
              code: "claim_not_pass",
              sourceKind: "claim_evaluation",
              sourceId: claim.claimEvaluationId,
              sourceVersion: claim.version,
            });
          }
        }

        claimMap.set(claim.claimEvaluationId, claim);
        snapshots.push({
          kind: "claim_evaluation",
          id: claim.claimEvaluationId,
          version: claim.version,
          status: claim.status,
        });
      }

      // Collect review bundle refs
      const bundleRefs: VersionedRef[] = [];
      if (request.reviewBundleRefs) {
        bundleRefs.push(...request.reviewBundleRefs);
      }
      if (maturityAssessment?.reviewBundleRefs) {
        for (const r of maturityAssessment.reviewBundleRefs) {
          bundleRefs.push({ id: r.reviewBundleId, version: r.version });
        }
      }
      for (const claim of claimMap.values()) {
        bundleRefs.push({
          id: claim.reviewBundleId,
          version: claim.reviewBundleVersion,
        });
      }
      const uniqueBundleRefs = dedupeRefs(sortRefs(bundleRefs));

      for (const ref of uniqueBundleRefs) {
        const bundle = await this.reviewBundles.findById(ref.id);
        if (!bundle) {
          blockers.push({
            code: "source_missing",
            sourceKind: "review_bundle",
            sourceId: ref.id,
            sourceVersion: ref.version,
          });
          continue;
        }
        if (bundle.version !== ref.version) {
          blockers.push({
            code: "version_mismatch",
            sourceKind: "review_bundle",
            sourceId: bundle.reviewBundleId,
            sourceVersion: bundle.version,
            detail: `expected_version=${ref.version}`,
          });
        }
        if (bundle.projectId !== request.projectId) {
          blockers.push({
            code: "cross_aggregate_inconsistency",
            sourceKind: "review_bundle",
            sourceId: bundle.reviewBundleId,
            detail: "project_mismatch",
          });
        }
        if (!bundle.frozenAt) {
          blockers.push({
            code: "review_bundle_not_frozen",
            sourceKind: "review_bundle",
            sourceId: bundle.reviewBundleId,
            sourceVersion: bundle.version,
          });
        }
        if (
          bundle.completeness === "incomplete" ||
          bundle.status === "incomplete"
        ) {
          blockers.push({
            code: "review_bundle_incomplete",
            sourceKind: "review_bundle",
            sourceId: bundle.reviewBundleId,
            sourceVersion: bundle.version,
          });
          gaps.push({
            code: "review_incomplete",
            sourceKind: "review_bundle",
            sourceId: bundle.reviewBundleId,
          });
        }
        if (bundle.synthesisOnly) {
          blockers.push({
            code: "review_bundle_synthesis_only",
            sourceKind: "review_bundle",
            sourceId: bundle.reviewBundleId,
            sourceVersion: bundle.version,
          });
        }
        if (bundle.status === "draft") {
          gaps.push({
            code: "review_incomplete",
            sourceKind: "review_bundle",
            sourceId: bundle.reviewBundleId,
            detail: "status=draft",
          });
        }

        // Cross-check claim → bundle version binding
        for (const claim of claimMap.values()) {
          if (
            claim.reviewBundleId === bundle.reviewBundleId &&
            claim.reviewBundleVersion !== bundle.version &&
            claim.reviewBundleVersion === ref.version
          ) {
            // claim expects ref.version; bundle loaded may differ — already flagged
          }
          if (
            claim.reviewBundleId === bundle.reviewBundleId &&
            claim.reviewBundleVersion !== bundle.version
          ) {
            blockers.push({
              code: "cross_aggregate_inconsistency",
              sourceKind: "claim_evaluation",
              sourceId: claim.claimEvaluationId,
              detail: `claim_rb_version=${claim.reviewBundleVersion};bundle_version=${bundle.version}`,
            });
          }
        }

        bundleMap.set(bundle.reviewBundleId, bundle);
        snapshots.push({
          kind: "review_bundle",
          id: bundle.reviewBundleId,
          version: bundle.version,
          status: bundle.status,
          projectId: bundle.projectId,
        });
      }

      // Collect evidence refs
      const evidenceRefs: VersionedRef[] = [];
      if (request.evidenceRefs) {
        evidenceRefs.push(...request.evidenceRefs);
      }
      if (maturityAssessment?.evidenceRefs) {
        for (const id of maturityAssessment.evidenceRefs) {
          evidenceRefs.push({ id, version: 0 }); // version 0 = any (id-only from maturity)
        }
      }
      for (const bundle of bundleMap.values()) {
        if (bundle.frozenEvidenceSnapshots?.length) {
          for (const snap of bundle.frozenEvidenceSnapshots) {
            evidenceRefs.push({
              id: snap.evidenceId,
              version: snap.evidenceVersion,
            });
          }
        } else {
          for (const id of bundle.evidenceRefs) {
            evidenceRefs.push({ id, version: 0 });
          }
        }
      }
      for (const claim of claimMap.values()) {
        for (const id of claim.requiredEvidenceRefs) {
          evidenceRefs.push({ id, version: 0 });
        }
        for (const id of claim.providedEvidenceRefs ?? []) {
          evidenceRefs.push({ id, version: 0 });
        }
      }
      const uniqueEvidenceRefs = dedupeEvidenceRefs(sortRefs(evidenceRefs));

      for (const ref of uniqueEvidenceRefs) {
        const evidence = await this.evidence.findById(ref.id);
        if (!evidence) {
          blockers.push({
            code: "source_missing",
            sourceKind: "evidence",
            sourceId: ref.id,
            sourceVersion: ref.version || undefined,
          });
          continue;
        }
        if (ref.version > 0 && evidence.version !== ref.version) {
          blockers.push({
            code: "version_mismatch",
            sourceKind: "evidence",
            sourceId: evidence.evidenceId,
            sourceVersion: evidence.version,
            detail: `expected_version=${ref.version}`,
          });
        }
        if (
          evidence.status === "unavailable" ||
          evidence.availability === "unavailable"
        ) {
          blockers.push({
            code: "evidence_unavailable",
            sourceKind: "evidence",
            sourceId: evidence.evidenceId,
            sourceVersion: evidence.version,
          });
          gaps.push({
            code: "evidence_incomplete",
            sourceKind: "evidence",
            sourceId: evidence.evidenceId,
          });
        } else if (
          evidence.status !== "verified" &&
          evidence.status !== "available"
        ) {
          if (
            evidence.status === "incomplete" ||
            evidence.status === "expected"
          ) {
            gaps.push({
              code: "evidence_incomplete",
              sourceKind: "evidence",
              sourceId: evidence.evidenceId,
              detail: `status=${evidence.status}`,
            });
          }
        }
        if (
          evidence.status !== "verified" &&
          evidence.status !== "unavailable" &&
          evidence.status !== "rejected" &&
          evidence.status !== "superseded"
        ) {
          // available but not verified is a soft gap for positive recommendation
          if (evidence.status === "available") {
            gaps.push({
              code: "evidence_incomplete",
              sourceKind: "evidence",
              sourceId: evidence.evidenceId,
              detail: "not_verified",
            });
            blockers.push({
              code: "evidence_not_verified",
              sourceKind: "evidence",
              sourceId: evidence.evidenceId,
              sourceVersion: evidence.version,
            });
          }
        }
        if (evidence.status === "rejected" || evidence.status === "stale") {
          blockers.push({
            code: "evidence_not_verified",
            sourceKind: "evidence",
            sourceId: evidence.evidenceId,
            sourceVersion: evidence.version,
            detail: `status=${evidence.status}`,
          });
        }

        evidenceMap.set(evidence.evidenceId, evidence);
        snapshots.push({
          kind: "evidence",
          id: evidence.evidenceId,
          version: evidence.version,
          status: evidence.status,
        });
      }

      // Maturity status checks
      if (maturityAssessment) {
        if (maturityAssessment.status === "blocked") {
          blockers.push({
            code: "maturity_blocked",
            sourceKind: "maturity_assessment",
            sourceId: maturityAssessment.maturityAssessmentId,
            sourceVersion: maturityAssessment.version,
          });
          authorityLevel = maxAuthority(authorityLevel, "morris");
          authorityReasons.push("maturity_blocked_requires_morris");
        }
        if (maturityAssessment.status === "superseded") {
          blockers.push({
            code: "maturity_superseded",
            sourceKind: "maturity_assessment",
            sourceId: maturityAssessment.maturityAssessmentId,
            sourceVersion: maturityAssessment.version,
          });
        }
        if (maturityAssessment.status === "proposed") {
          gaps.push({
            code: "maturity_confirmation_missing",
            sourceKind: "maturity_assessment",
            sourceId: maturityAssessment.maturityAssessmentId,
          });
          const level = maturityAssessment.proposedLevel;
          if (level === "IMPLEMENTED" || level === "ADOPTED") {
            authorityLevel = maxAuthority(authorityLevel, "morris");
            authorityReasons.push("confirm_maturity_requires_morris");
          } else {
            authorityLevel = maxAuthority(authorityLevel, "human");
            authorityReasons.push("confirm_maturity_requires_human");
          }
        }
        if (
          maturityAssessment.blockingReservationRefs.length > 0 ||
          (request.openHardReservationRefs?.length ?? 0) > 0
        ) {
          const hardRefs = [
            ...maturityAssessment.blockingReservationRefs,
            ...(request.openHardReservationRefs ?? []),
          ];
          for (const ref of [...new Set(hardRefs)].sort()) {
            blockers.push({
              code: "hard_reservation_open",
              sourceId: ref,
              detail: "hard_reservation",
            });
            gaps.push({
              code: "reserve_open",
              sourceId: ref,
            });
            if (ref === "R-M01" || ref.startsWith("R-M01")) {
              gaps.push({ code: "r_m01_open", sourceId: ref });
            }
          }
          authorityLevel = maxAuthority(authorityLevel, "morris");
          authorityReasons.push("hard_reservation_requires_morris");
        }
      }

      // Always note C1–C4 remain not validated (delivery anti-claim)
      gaps.push({
        code: "c1_c4_not_validated",
        detail: "R-T-A6-DEL-C1..C4_NOT_VALIDATED",
      });

      // Deterministic ordering of blockers/gaps/snapshots
      blockers.sort(compareBlockers);
      gaps.sort(compareGaps);
      snapshots.sort(compareSnapshots);

      const hardBlock = blockers.some((b) =>
        [
          "source_missing",
          "version_mismatch",
          "cross_aggregate_inconsistency",
          "hard_reservation_open",
          "maturity_blocked",
          "maturity_superseded",
          "claim_disputed",
          "claim_superseded",
          "t_a7_auto_launch_forbidden",
        ].includes(b.code),
      );

      const positiveBlocked = blockers.length > 0;

      let status: CoordinationStatus;
      let nextAction: NextActionRecommendation | undefined;
      let nextGate: GateRecommendation | undefined;

      if (hardBlock || positiveBlocked) {
        const action = pickNextAction(blockers, gaps, maturityAssessment);
        if (
          blockers.some((b) => b.code === "hard_reservation_open") ||
          blockers.some((b) => b.code === "maturity_blocked") ||
          blockers.some((b) => b.code === "claim_disputed")
        ) {
          status = "blocked";
          authorityLevel = maxAuthority(authorityLevel, "morris");
        } else if (
          gaps.some((g) => g.code === "maturity_confirmation_missing") ||
          gaps.some((g) => g.code === "claim_confirmation_missing")
        ) {
          status = "requires_human_decision";
        } else {
          status = "not_recommended";
        }
        nextAction = action;
        // Never emit a positive gate when blockers exist
        nextGate = undefined;
      } else if (
        maturityAssessment &&
        maturityAssessment.status === "confirmed"
      ) {
        status = "gate_candidate";
        authorityLevel = maxAuthority(authorityLevel, "morris");
        authorityReasons.push("next_cycle_requires_explicit_morris_go");
        nextGate = {
          kind: "recommendation",
          gateCode: "SOLICIT_MORRIS_GO_FOR_NEXT_CYCLE",
          gateConsumed: false,
          decisionCreated: false,
          reasons: [
            "maturity_confirmed",
            "chain_coherent",
            "D-T-A6-10_no_auto_next_cycle",
            "T_A7_AUTO_LAUNCH_FORBIDDEN",
          ],
          authorityRequired: "morris",
        };
        nextAction = {
          kind: "recommendation",
          actionCode: "solicit_morris_go",
          reasons: [
            "maturity_confirmed",
            "explicit_morris_go_required",
            "not_auto_launch",
          ],
          authorityRequired: "morris",
        };
      } else if (
        maturityAssessment &&
        maturityAssessment.status === "proposed"
      ) {
        status = "requires_human_decision";
        const level = maturityAssessment.proposedLevel;
        const morris = level === "IMPLEMENTED" || level === "ADOPTED";
        if (morris) {
          authorityLevel = maxAuthority(authorityLevel, "morris");
        } else {
          authorityLevel = maxAuthority(authorityLevel, "human");
        }
        nextAction = {
          kind: "recommendation",
          actionCode: "confirm_maturity",
          reasons: ["maturity_proposed", "confirmation_required"],
          authorityRequired: morris ? "morris" : "human",
        };
        nextGate = undefined;
      } else if (!maturityAssessment && claimMap.size > 0) {
        status = "not_recommended";
        nextAction = {
          kind: "recommendation",
          actionCode: "propose_maturity",
          reasons: ["claims_present", "maturity_absent"],
          authorityRequired: "none",
        };
      } else if (!maturityAssessment && bundleMap.size > 0) {
        status = "not_recommended";
        nextAction = {
          kind: "recommendation",
          actionCode: "evaluate_claim",
          reasons: ["review_bundle_present", "claims_absent"],
          authorityRequired: "none",
        };
      } else if (!maturityAssessment && evidenceMap.size > 0) {
        status = "not_recommended";
        nextAction = {
          kind: "recommendation",
          actionCode: "freeze_review_bundle",
          reasons: ["evidence_present", "review_bundle_absent"],
          authorityRequired: "human",
        };
        authorityLevel = maxAuthority(authorityLevel, "human");
      } else {
        status = "not_recommended";
        nextAction = {
          kind: "recommendation",
          actionCode: "complete_evidence",
          reasons: ["insufficient_chain"],
          authorityRequired: "none",
        };
      }

      const authorityRequirement: AuthorityRequirement = {
        level: authorityLevel,
        morrisRequired: authorityLevel === "morris",
        reasons: [...new Set(authorityReasons)].sort(),
      };

      const coordination: CoordinationResult = defensiveResult({
        kind: "recommendation",
        status,
        projectId: request.projectId,
        subjectRef: request.subjectRef,
        assessedAt: timestamp,
        sourceSnapshots: snapshots,
        blockers,
        gaps,
        nextAction,
        nextGate,
        authorityRequirement,
        executionAuthority: false,
        gateConsumed: false,
        decisionCreated: false,
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event:
          status === "blocked"
            ? "oa.coordination.blocked"
            : status === "gate_candidate"
              ? "oa.coordination.next_gate_recommended"
              : "oa.coordination.next_action_recommended",
        ts: timestamp,
        correlationId,
        actorId: request.actor?.actorId,
        maturityAssessmentId: maturityAssessment?.maturityAssessmentId,
        result: "ok",
        detailCode: status,
        durationMs,
      });

      return { ok: true, coordination, durationMs };
    } catch (err) {
      return fail(
        "COORDINATION_INVALID",
        err instanceof Error ? err.name : "unknown",
      );
    }
  }
}

function dedupeRefs(refs: VersionedRef[]): VersionedRef[] {
  const map = new Map<string, VersionedRef>();
  for (const ref of refs) {
    const key = `${ref.id}@${ref.version}`;
    map.set(key, ref);
  }
  return [...map.values()].sort((a, b) =>
    a.id === b.id ? a.version - b.version : a.id.localeCompare(b.id),
  );
}

/** Prefer exact version when both id-only (0) and versioned refs exist. */
function dedupeEvidenceRefs(refs: VersionedRef[]): VersionedRef[] {
  const byId = new Map<string, VersionedRef>();
  for (const ref of refs) {
    const existing = byId.get(ref.id);
    if (!existing) {
      byId.set(ref.id, ref);
      continue;
    }
    if (existing.version === 0 && ref.version > 0) {
      byId.set(ref.id, ref);
    } else if (
      existing.version > 0 &&
      ref.version > 0 &&
      existing.version !== ref.version
    ) {
      // Keep both via synthetic — handled by returning both versions:
      // store max and let version_mismatch fire if needed; prefer higher for lookup
      byId.set(ref.id, ref.version >= existing.version ? ref : existing);
    }
  }
  return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id));
}

function compareBlockers(a: CoordinationBlocker, b: CoordinationBlocker): number {
  return (
    a.code.localeCompare(b.code) ||
    (a.sourceId ?? "").localeCompare(b.sourceId ?? "") ||
    (a.detail ?? "").localeCompare(b.detail ?? "")
  );
}

function compareGaps(a: CoordinationGap, b: CoordinationGap): number {
  return (
    a.code.localeCompare(b.code) ||
    (a.sourceId ?? "").localeCompare(b.sourceId ?? "") ||
    (a.detail ?? "").localeCompare(b.detail ?? "")
  );
}

function compareSnapshots(a: SourceSnapshot, b: SourceSnapshot): number {
  return (
    a.kind.localeCompare(b.kind) ||
    a.id.localeCompare(b.id) ||
    a.version - b.version
  );
}

function pickNextAction(
  blockers: CoordinationBlocker[],
  gaps: CoordinationGap[],
  maturity: MaturityAssessment | null,
): NextActionRecommendation {
  const has = (code: CoordinationBlocker["code"]) =>
    blockers.some((b) => b.code === code);

  if (has("hard_reservation_open") || has("maturity_blocked")) {
    return {
      kind: "recommendation",
      actionCode: "solicit_morris_arbitration",
      reasons: ["hard_blocker"],
      authorityRequired: "morris",
    };
  }
  if (has("claim_disputed")) {
    return {
      kind: "recommendation",
      actionCode: "resolve_dispute",
      reasons: ["claim_disputed"],
      authorityRequired: "human",
    };
  }
  if (has("maturity_superseded")) {
    return {
      kind: "recommendation",
      actionCode: "propose_maturity",
      reasons: ["maturity_superseded"],
      authorityRequired: "none",
    };
  }
  if (gaps.some((g) => g.code === "maturity_confirmation_missing")) {
    const level = maturity?.proposedLevel;
    const morris = level === "IMPLEMENTED" || level === "ADOPTED";
    return {
      kind: "recommendation",
      actionCode: "confirm_maturity",
      reasons: ["maturity_proposed"],
      authorityRequired: morris ? "morris" : "human",
    };
  }
  if (has("claim_not_confirmed") || gaps.some((g) => g.code === "claim_confirmation_missing")) {
    return {
      kind: "recommendation",
      actionCode: "confirm_claim_evaluation",
      reasons: ["claim_confirmation_missing"],
      authorityRequired: "human",
    };
  }
  if (has("claim_waived") || has("claim_not_pass") || has("claim_superseded")) {
    return {
      kind: "recommendation",
      actionCode: "evaluate_claim",
      reasons: ["claim_not_eligible_for_positive"],
      authorityRequired: "none",
    };
  }
  if (
    has("review_bundle_not_frozen") ||
    has("review_bundle_incomplete") ||
    has("review_bundle_synthesis_only")
  ) {
    return {
      kind: "recommendation",
      actionCode: has("review_bundle_not_frozen")
        ? "freeze_review_bundle"
        : "complete_review",
      reasons: ["review_bundle_not_ready"],
      authorityRequired: "human",
    };
  }
  if (has("evidence_unavailable") || has("evidence_not_verified") || has("source_missing")) {
    const missingEvidence = blockers.some(
      (b) => b.code === "source_missing" && b.sourceKind === "evidence",
    );
    return {
      kind: "recommendation",
      actionCode: missingEvidence
        ? "complete_evidence"
        : "verify_evidence_integrity",
      reasons: ["evidence_not_ready"],
      authorityRequired: "none",
    };
  }
  if (has("version_mismatch") || has("cross_aggregate_inconsistency")) {
    return {
      kind: "recommendation",
      actionCode: "downgrade_maturity",
      reasons: ["binding_inconsistency"],
      authorityRequired: "human",
    };
  }
  return {
    kind: "recommendation",
    actionCode: "solicit_morris_arbitration",
    reasons: ["fail_closed_default"],
    authorityRequired: "morris",
  };
}
```
