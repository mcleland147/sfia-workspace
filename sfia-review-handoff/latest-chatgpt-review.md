# SFIA STUDIO — P6 PRODUCT END-TO-END EXIT QUALIFICATION
## Cycle 9 — QA / VALIDATION — Review Pack FULL

**A. Horodatage (Europe/Paris):** 2026-10-14 23:22:07 CEST
**B. GO Morris:** REPO-FIRST QUALIFICATION / READ-ONLY PRODUCT ANALYSIS — AUTHORIZED / CONSUMED (2026-10-14)
**C. Cycle / profil:** Cycle 9 — CRITICAL — QA / AUDIT READ-ONLY — SOURCE-BACKED QUALIFICATION
**D. Repository:** mcleland147/sfia-workspace

---

## D. Git Truth initial (VERIFIE)

| Check | Value | Class |
|---|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-nora-ux-cumulative-closure` | VERIFIE |
| Branch locale | `delivery/sfia-studio-p6-nora-ux-cumulative-closure` | VERIFIE |
| HEAD local | `52b01855d4321bb3f90b2b65f2a4eed2e1b18e47` | VERIFIE |
| origin/main | `b555819d8c3711fd2782b5ee7926517b6b3b8615` | VERIFIE (= ChatGPT `b555819d8c3711fd2782b5ee7926517b6b3b8615`) |
| Sources lues depuis | `origin/main` (= main tip) | VERIFIE |
| Dirty Product | aucun fichier Product | VERIFIE |
| Dirty local | `.tmp-sfia-review/chatgpt-review.md` seulement (artefact pack) | VERIFIE |
| PR #582 / #583 | sur main (log tip: Merge #583 → #582 parent chain) | VERIFIE |
| Worktree Human QA T2 | `sfia-workspace-p6-t2-real-qa-eec68a41` @ `eec68a41` (≠ main tip) | VERIFIE |
| Serveur :3020 | NON TOUCHE (hors GO) | NON EXECUTE |

Status short:
```
M .tmp-sfia-review/chatgpt-review.md
```

Worktrees pertinents (extrait):
```
/Users/morris/Projects/sfia-workspace                                                                                                                                                                                                                                              980064c0 [qa/sfia-studio-p6-global-integrated-product-qa]
/Users/morris/Projects/sfia-workspace-p6-campaign-continuation-qa                                                                                                                                                                                                                  d8ceb8ad (detached HEAD)
/Users/morris/Projects/sfia-workspace-p6-evidence-o2                                                                                                                                                                                                                               22e699da [delivery/sfia-studio-p6-o2-linked-evidence-wiring]
/Users/morris/Projects/sfia-workspace-p6-hqa-01                                                                                                                                                                                                                                    8f61da8f [fix/studio-p6-hqa-01-conversation-recommendations]
/Users/morris/Projects/sfia-workspace-p6-hqa-02                                                                                                                                                                                                                                    6f68ea24 [fix/studio-p6-hqa-02-work-recommendation-materialization]
/Users/morris/Projects/sfia-workspace-p6-min09-documentary-cognitive-reliability-01                                                                                                                                                                                                9b855d8d [fix/p6-min09-documentary-cognitive-reliability-01]
/Users/morris/Projects/sfia-workspace-p6-nora-extended-execution-live-activity                                                                                                                                                                                                     3d8acf34 (detached HEAD)
/Users/morris/Projects/sfia-workspace-p6-nora-ux-cumulative-closure                                                                                                                                                                                                                52b01855 [delivery/sfia-studio-p6-nora-ux-cumulative-closure]
/Users/morris/Projects/sfia-workspace-p6-real-observability-option-b                                                                                                                                                                                                               b6eb7862 (detached HEAD)
/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa                                                                                                                                                                                                                            d8ceb8ad (detached HEAD)
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41                                                                                                                                                                                                                       eec68a41 (detached HEAD)
/Users/morris/Projects/sfia-wt-p6-hqa-rec01                                                                                                                                                                                                                                        de8573bd [fix/studio-p6-hqa-rec01-qualification-signals]
```

---

## E. Convergence Pre-check

| Item | Statut | Temporalite |
|---|---|---|
| Build Doctrine | VALIDATED / ACTIVE ON MAIN | CURRENT |
| Roadmap | VALIDATED / ACTIVE (timestamps tip P6 campaign; anciennes tip P5 HISTORICAL/SUPERSEDED) | CURRENT tip + HISTORICAL rows |
| C1 Product Completion | VALIDATED / INTEGRATED | CURRENT |
| Runtime v3 | NON ADOPTED | CURRENT |
| P6 | STARTED / GLOBAL PASS NOT CLAIMED | CURRENT (doc §B/§AV) |
| PR #582 Nora Extended | INTEGRATED on main | CURRENT |
| PR #583 Nora UX Closure | INTEGRATED on main + post-merge tip | CURRENT |
| Phase 1 P6 | PASS / REQUALIFIED (doc) | CURRENT doc claim |
| Phase 5 Human QA | BATCH PREPARING (doc §B) | CURRENT doc |
| Phase 6 | INTERIM ONLY ≠ P6 PASS | CURRENT doc |
| P7 | NOT AUTHORIZED BY THIS GO | CURRENT |

Classification guidance (non-decision Morris): KEEP / ADAPT / COMPLETE / HARVEST / FREEZE / RETIRE LATER — voir §H.

---

## F. Sources canoniques consultees (depuis `origin/main`)

| Source | Path | Usage |
|---|---|---|
| Build Doctrine | `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` | gouvernance construction |
| Roadmap | `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` | trajectoire / tip vs historical |
| C1 | `projects/sfia-studio/product-completion/01-product-completion-cadrage.md` | boucle F, EC L, AgentCapability M, continuity Q, trajectory X |
| PS01 | `.../01-chat-first-product-simplification-cadrage.md` | boucle / exit |
| PS02 | `.../02-...-functional-operating-model.md` | HD/Confirmation/Execution/Review/Trajectory |
| PS04 | `.../04-...-semantic-projection-cognitive-architecture.md` | Synthesis / Nora / Resolution |
| PS05 | `.../05-...-integrated-delivery.md` | P5-S03/S04/S05 integrated claims |
| P6 | `.../07-...-p6-global-integrated-product-qa.md` | MIN/BAR/campaign/Human QA |
| CKC QA | `.../ckc/09-qa-validation.md` (`ckc:studio:qa-validation`) | guidance cognitive ONLY |
| Method v2.6 | `prompts/templates/sfia-cycle-execution-template.md` + routing guide | PROCESSUS EXTERNE (non runtime) |

CKC: `ckc:studio:qa-validation` — CONTENT VALIDATED BY MORRIS · **PAS** runtime-adopted · aucune autorite d'execution.

---

## G. Capacité v3 / trajectoire P6

**Capacité cible:** Pilote conduit un travail bout-en-bout avec Nora et reçoit une restitution fondée sur résultats Product vérifiés.

**Trajectoire:** Qualification repo-first (ce cycle) → scénario Human QA validé ChatGPT → GO Morris Human QA → Evidence → P6 Consolidation → P6 Exit Review.

**Next capability:** P6 END-TO-END HUMAN QA (Execution/Review/Synthesis/Nora continuity), puis consolidation. **P7 NOT AUTHORIZED.**

---

## H. Classification actifs (guidance — pas decision Morris)

| Actif | Classe | Maturite | Notes |
|---|---|---|---|
| ConversationSurface + Nora live activity/sources | KEEP | INTEGRATED (PR #582/#583) | UX presentiel Pilote |
| TrajectorySurface (HD / EC prep / confirm / authorize / launch) | KEEP | INTEGRATED | front door decision+EC |
| ExecutionSurface (continuity / confirm / authorize / reconcile) | KEEP | INTEGRATED (P5-S03) | object-native Exécution |
| SynthesesSurface + synthesisPresentation | KEEP | INTEGRATED (P5-S04) | 9 sections P3 |
| JournalSurface / History / LPS / Recovery | KEEP | INTEGRATED | projections derivees |
| W2 prepare/inspect/confirm/authorize/execute/reconcile | KEEP | INTEGRATED | server actions |
| W3-B materialize terminal | KEEP | INTEGRATED | Product outcome |
| W3-C post-Evidence loop | KEEP | INTEGRATED | Recommendation authority:none |
| Evidence / ReviewBundle / ClaimEvaluation / ContractResultVerdict | KEEP | INTEGRATED (lib/oa/evidence-review) | DET+adversarial suites |
| Product Synthesis builder + oa_syntheses | KEEP | INTEGRATED | soft-fail after W3-C |
| docs_write REAL bounded path | KEEP | INTEGRATED / REAL-BOUNDARY partial | representative REAL executor path |
| Generic Cursor REAL | KEEP / ADAPT | PARTIAL | present in governedExecute; envelope-gated |
| Runtime v3 native Option A schemas | FREEZE / HARVEST | MODELED | NON ADOPTED |
| Preview QA `/dev/nora-ux-closure` | RETIRE LATER | RETIRED from main tip | absent on main |
| Parallel cockpit / second QA architecture | RETIRE LATER | FORBIDDEN | none for this cycle |

---
## I. Carte Execution Product (CURRENT wiring)

### Pipeline TARGET (C1 §F.1)
```
Pilote → Nora qualification → LPS/Trajectory/Recommendation
→ HumanDecision → Confirmation? → ExecutionContract
→ Executor → Evidence/RB → Nora analysis → LPS/Trajectory → decision
```

### Pipeline CURRENT (code on main) — VERIFIE

```
Conversation / Nora turn (orchestrateTurn / F2)
  → Trajectory options / Recommendation (OA cycle + W2)
  → HumanDecision (w2DecideTrajectoryAction / chat-first decision subjects)
  → prepareExecutionContractFromW2Decision (TrajectorySurface)
  → inspectExecutionContract
  → confirmForAuthorization (si applicable; ≠ HD)
  → authorizeExecutionContract (effective authority)
  → governedExecuteAuthorizedContract / reconcileGovernedExecution
       (ExecutionSurface: confirm → authorize → reconcile intent=execute|continue)
  → Attempt progression / cancel
  → materializeW3bProductTerminal (Executor claim → Studio verification path)
  → runW3cPostEvidenceLoop (CE/RB/Evidence durable → Recommendation authority:none)
  → maybeMaterializeProductSynthesisAfterW3c (soft-fail; oa_syntheses)
  → SynthesesSurface / Journal / LPS projections
```

### Points d'entrée Product (surfaces)

| Surface | Path | Role |
|---|---|---|
| Project workspace | `features/pre-m6-product-ui/ProjectWorkspacePage.tsx` | compose surfaces |
| Conversation | `.../ConversationSurface.tsx` | intention / Nora / sources |
| Trajectory | `.../TrajectorySurface.tsx` | HD, prepare EC, confirm, authorize, launch/cancel |
| Execution | `.../ExecutionSurface.tsx` | continuity, confirm, authorize, reconcile |
| Syntheses | `.../SynthesesSurface.tsx` | consultation Synthèse Product-derived |
| Journal / History / LPS / Recovery | `.../JournalSurface.tsx` etc. | continuity projections |

### Implémentations serveur clés

| Maillon | Path |
|---|---|
| Resolve context | `w2/resolveProductExecutionContext.ts` |
| Continuity projection | `w2/deriveGovernedExecutionContinuityProjection.ts` |
| Reconcile | `w2/reconcileGovernedExecution.ts` |
| Prepare EC | `w2/prepareExecutionContractFromW2Decision.ts` |
| Inspect | `w2/inspectExecutionContract.ts` |
| Confirm | `w2/confirmForAuthorization.ts` |
| Authorize | `w2/authorizeExecutionContract.ts` |
| Execute | `w2/governedExecuteAuthorizedContract.ts` |
| W3-B | `w2/materializeW3bProductTerminal.ts` |
| W3-C | `w2/w3cPostEvidenceLoop.ts` |
| Synthesis hook | `w2/maybeMaterializeProductSynthesisAfterW3c.ts` |
| Actions facade | `w2/actions.ts` |
| Evidence/RB/CE/CRV | `lib/oa/evidence-review/application/*` |
| Synthesis builder | `lib/oa/synthesis/application/buildProductSynthesis.ts` |
| Synthesis SQLite | `lib/oa/synthesis/infrastructure/sqlite/sqliteSynthesisRepository.ts` (`oa_syntheses`) |

### Extraits critiques

#### ExecutionSurface authority path

```36:54:projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx

/**
 * P5-S03 Exécution — durable Product continuity + W2 governed actions.
 *
 * Authority path (restart-safe):
 *   w2ReadCurrent… / w2Derive…
 *   → Confirm via w2ConfirmExecutionContractAction (no Attempt)
 *   → Execute via authorize + reconciler intent=execute
 *   → Continue via reconciler intent=continue (canonical policy)
 *
 * Conversation process-local F3 state is NEVER the authority oracle.
 * Continuation scheduling is presentation-only; Product truth stays server-owned.
 */
export function ExecutionSurface({
  projectId,
  onReturnToConversation,
  onPresentationChange,
  onDurableFactsChanged,
}: ExecutionSurfaceProps) {
```
#### W3-C — Recommendation only (INV-13/14/15)

```1:72:projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
/**
 * W3-C — Post-Evidence loop after W3-B terminal materialize.
 * Consumes durable Evidence / RB / CE (no re-ingest). Recommendation only —
 * never HumanDecision, never auto trajectory mutation, never auto new cycle.
 *
 * HumanDecision of trajectory only via explicit W2 propose + decide — Recovery
 * CTA ≠ automatic HD. D5 NextActionCode has no ProjectTrajectory replan signal;
 * W3-C never invents kind:"replan" / requiresHumanDecision from D5 alone.
 */

import { createHash } from "node:crypto";
import {
  resolveProductDoctrineRegistryRoot,
  type RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";
import type { EpistemicItem } from "@/lib/oa/cycle";
import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "@/features/project-assistant/f3/systemFactualWriter";
import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";
import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
import { resolveDurableBoundaryProofMode } from "@/features/project-assistant/f3/resolveDurableBoundaryProofMode";
import {
  analyzePostEvidenceWithProvider,
  extractW3cPostEvidenceAnalysisForEvidence,
  extractW3cRecommendationPayloadJsonForEvidence,
  formatPostEvidenceAnalysisForLps,
  formatW3cRecommendationPayloadForLps,
  lastW3cEvidenceIdInLpsContext,
} from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
import {
  loadDocsWriteArtifactReviewMaterial,
  resolveProductEvidenceRefsRoot,
} from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import {
  buildCkcCognitivePromptSection,
  loadProductCkcCognitiveContent,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import type { NextActionCode } from "@/lib/oa/evidence-review/domain/coordinationTypes";
import { resolveCurrentContractResultClaimEvaluation } from "@/lib/oa/evidence-review";
import {
  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
  CONTRACT_VALIDATION_PLAN_INPUT_KEY,
  describeContractAcceptanceCriteria,
  parseContractAcceptanceCriteria,
  parseContractStringListInput,
} from "@/lib/oa/execution-contract";
import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";
import { resolveW2QualificationInputs } from "./qualificationInputs";

export type W3cRecommendationKind =
  | "continue"
  | "recover"
  | "replan"
  | "fail_closed";

export type W3cPostEvidenceRecommendation = {
  kind: W3cRecommendationKind;
  headline: string;
  rationale: string;
  nextStep: string;
  requiresHumanDecision: boolean;
  /** Always recommendation — never authority */
  authority: "none";
  gateConsumed: false;
  decisionCreated: false;
  attemptAutoLaunchNextCycle: false;
  recommendNextGateStatus: string | null;
  nextActionCode: string | null;
};

export type W3cExecutionReportSurface = {
  readonly cursorStatus: string | null;
```
#### Synthesis soft-fail after W3-C (INV-11/12/20)

```1:100:projects/sfia-studio/app/features/project-assistant/w2/maybeMaterializeProductSynthesisAfterW3c.ts
/**
 * Soft-fail Synthesis materialization after durable W3-C success/rehydrate.
 * NEVER mutates Truth C (CE / Contract Result / Recommendation / Attempt).
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import {
  createSqliteSynthesisServices,
  isSynthesisDomainError,
  type ProductSynthesisProjection,
} from "@/lib/oa/synthesis";
import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";
import {
  w3cRecommendationEpistemicId,
  type W3cPostEvidenceLoopSuccess,
} from "./w3cPostEvidenceLoop";
import {
  buildProductSynthesisLineageInput,
  synthesisErrorMessage,
} from "../buildProductSynthesisLineageInput";

export type MaybeMaterializeProductSynthesisAfterW3cResult =
  | {
      readonly ok: true;
      readonly synthesis: ProductSynthesisProjection;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      /** Soft-fail: authoritative Product facts remain intact. */
      readonly softFailed: true;
    };

export async function maybeMaterializeProductSynthesisAfterW3c(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly product: W3BProductTerminalProjection;
  readonly postEvidence: W3cPostEvidenceLoopSuccess;
}): Promise<MaybeMaterializeProductSynthesisAfterW3cResult> {
  try {
    const claimEvaluationId =
      input.product.claimEvaluationId ??
      input.postEvidence.claimEvaluationId ??
      null;
    if (!claimEvaluationId) {
      return {
        ok: false,
        softFailed: true,
        code: "SYNTHESIS_LINEAGE_REQUIRES_CLAIM_EVALUATION",
        message: "ClaimEvaluation absente pour la synthèse dérivée.",
      };
    }

    const store = input.oa.projectServices.store;
    if (!(store instanceof SqliteProductStore)) {
      return {
        ok: false,
        softFailed: true,
        code: "PRODUCT_SQLITE_UNAVAILABLE",
        message: "Persistance Product SQLite indisponible pour la synthèse.",
      };
    }

    const evidenceId =
      input.postEvidence.evidenceId ||
      input.product.evidenceId ||
      "";
    // Pass structured W3-C fields — Pilot adapter derives text (no raw rationale).
    const recommendation = {
      ref: w3cRecommendationEpistemicId(evidenceId, claimEvaluationId),
      kind: input.postEvidence.recommendation.kind,
      headline: input.postEvidence.recommendation.headline,
      nextStep: input.postEvidence.recommendation.nextStep,
      nextActionCode: input.postEvidence.recommendation.nextActionCode,
    };

    const lineage = await buildProductSynthesisLineageInput({
      oa: input.oa,
      projectId: input.projectId,
      claimEvaluationId,
      recommendation,
    });
    if (!lineage.ok) {
      return {
        ok: false,
        softFailed: true,
        code: lineage.code,
        message: lineage.message,
      };
    }

    const services = createSqliteSynthesisServices({ productStore: store });
    const synthesis = await services.materialize(lineage.input);
    return { ok: true, synthesis };
  } catch (err) {
    return {
      ok: false,
      softFailed: true,
      code: isSynthesisDomainError(err)
```
#### Synthesis sections (9 P3) + authority:none

```1:80:projects/sfia-studio/app/lib/oa/synthesis/domain/types.ts
export type SynthesisStatus = "current" | "superseded" | "stale_source";
export type SynthesisVerdictLabel =
  | "atteint"
  | "non_prouve"
  | "echec"
  | "indetermine";

export type SynthesisSourceBindings = {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly executionContractId: string | null;
  readonly attemptId: string | null;
  readonly evidenceIds: readonly string[];
  readonly reviewBundleId: string | null;
  readonly claimEvaluationId: string;
  readonly recommendationRef: string | null;
};

export type SynthesisSections = {
  readonly summary: string;
  readonly planned: string;
  readonly done: string;
  readonly evaluation: string;
  readonly gaps: string;
  readonly impact: string;
  readonly verdict: string;
  readonly recommendation: string;
  readonly verified: string;
};

export type ProductSynthesisProjection = {
  readonly synthesisId: string;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly title: string;
  readonly subject: string;
  readonly status: SynthesisStatus;
  readonly verdictLabel: SynthesisVerdictLabel;
  readonly canonicalVerdict: "PASS" | "NOT_PROVEN" | "FAIL";
  readonly sections: SynthesisSections;
  readonly sourceBindings: SynthesisSourceBindings;
  readonly sourceFingerprint: string;
  readonly generatedAt: string;
  readonly generatedBy: "deterministic_product_synthesis_builder_s04";
  readonly authority: "none"; // never Truth C
  readonly supersedes: string | null;
  readonly version: number;
};

export type SynthesisDetailCode =
  | "SYNTHESIS_INVALID"
  | "SYNTHESIS_NOT_FOUND"
  | "SYNTHESIS_ALREADY_EXISTS"
  | "SYNTHESIS_LINEAGE_REQUIRES_CLAIM_EVALUATION"
  | "SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_SUBJECT"
  | "SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_BINDINGS"
  | "SYNTHESIS_LINEAGE_BINDINGS_MISMATCH"
  | "SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND"
  | "SYNTHESIS_AUTHORITY_FORBIDDEN"
  | "SYNTHESIS_PERSISTENCE_FAILED";
```
---

## J. Carte Review / Evidence

| Etape | Implementation | SoT | Tests (exemples) |
|---|---|---|---|
| Ingest Attempt Evidence | `ingestExecutionAttemptEvidence.ts` | durable Evidence | evidence-review lifecycle |
| ReviewBundle create/freeze | `createReviewBundle.ts` / `freezeReviewBundle.ts` | durable RB | `reviewBundleLifecycle.test.ts`, adversarial RB |
| Evaluate Claim | `evaluateClaim.ts` | ClaimEvaluation | `claimEvaluationLifecycle.test.ts`, adversarial CE |
| ContractResultVerdict | `evaluateContractResult.ts` + `contractResultVerdictProjection.ts` | CE/CRV | contract-result suites |
| Resolve current CE | `resolveCurrentContractResultClaimEvaluation.ts` | currentness | used by W3-C |
| Docs-write claim completion | `completeDocsWriteClaimEvidenceCompletion.ts` | artifact refs | `postExecutionHandoff.integrated.d0.test.ts` |
| Generic review material | `persistGenericExecutionReviewMaterial.ts` | durable refs | GCE / frontDoor DET |

**Maturité:** INTEGRATED for domain + Product W3-B/W3-C wiring. **END-TO-END-REAL Human QA** for full ReviewBundle Pilote journey: NOT PROVEN by this cycle (qualification only).

---

## K. Carte Synthesis

| Question | Reponse (SOURCE-BACKED) |
|---|---|
| Declencheur | `maybeMaterializeProductSynthesisAfterW3c` après W3-C success/rehydrate |
| Prefixe vérité | ClaimEvaluation + Contract Result bindings + Evidence ids (lineage fail-closed) |
| 9 sections | summary/planned/done/evaluation/gaps/impact/verdict/recommendation/verified |
| Verdict canonique | `canonicalVerdict: PASS \| NOT_PROVEN \| FAIL` + label FR; `authority: "none"` |
| Nora redaction | enrichment possible en W3-C; builder déterministe Product-derived (generatedBy builder_s04) |
| Persistance | `oa_syntheses` via SqliteProductStore |
| Surface Pilote | `SynthesesSurface` + `synthesisPresentation.ts` |
| Soft-fail | Oui — ne mute pas Truth C |
| Reload | rehydrate via Product SQLite + search services |
| Journal cohérence | Journal = projection dérivée (≠ Truth C); tests P5-S04 / journal HQA |

Tests: `p5.s04.productDerivedSynthesis.d0.test.ts`, `p5.s04.cp01.productPathSynthesis.d0.test.ts`, `p5.s04.synthesesSurface.ui.test.tsx`.

---

## L. Carte Nora Continuity

| Element | Path / wiring | Maturite |
|---|---|---|
| Cognitive context / CKC guidance | `f2/ckcCognitiveContext.ts`, doctrine package CKC | INTEGRATED guidance; CKC not authority |
| Post-Evidence analysis | `f3/postEvidenceNoraAnalysis.ts` + W3-C | INTEGRATED |
| Recommendation post-Evidence | W3-C payload in LPS epistemic | INTEGRATED DET; REAL partial |
| Live activity / sources UX | ConversationSurface + presenters (PR #583) | INTEGRATED; browser source regroup capture NOT INDEPENDENTLY VERIFIED |
| Journal | JournalSurface | INTEGRATED |
| Trajectory continuity | TrajectorySurface + decide/propose | INTEGRATED |
| Recovery | RecoverySurface + recovery W2 helpers | INTEGRATED DET; REAL HQA partial |
| Reload | server-owned continuity reads (not process-local F3 oracle) | INTEGRATED principle in ExecutionSurface |

---

## M. Matrice TARGET vs CURRENT

| Maillon | TARGET | CURRENT | Gap |
|---|---|---|---|
| Intention conversationnelle | Product | ConversationSurface + Nora | none structural |
| Qualification Nora | Product | F2/orchestrate + CKC guidance | none structural |
| Recommendation / currentness | Product | OA lifecycle + W2 subjects | none structural |
| HumanDecision | Product durable | W2 decide / decision subjects | none structural |
| Confirmation | si applicable | confirmForAuthorization on Trajectory+Execution | none structural |
| EC prepare/inspect | native | prepare+inspect W2 + UI | none structural |
| Authority / AgentCapability | envelope | authorizeExecutionContract + capability policy | none structural |
| Launch / Attempt | governed | governedExecute + reconcile | none structural |
| Executor Claim | bounded | docs_write claim completion + generic report paths | REAL envelope-gated |
| Studio Verification | independent | W3-B materialize / CE path | none structural |
| Evidence / RB / CE / CRV | durable | evidence-review package | none structural |
| Product Resolution | post-evidence | W3-C + advance helpers | none structural |
| Synthesis | Product-derived | builder + oa_syntheses + surface | none structural |
| Nora post-Evidence | recommendation only | W3-C authority:none | none structural |
| LPS / Trajectory | governed | durable OA + UI | none structural |
| Recovery | no auto re-launch | reconcileContinuePolicy + recovery helpers | none structural |
| **Human QA E2E REAL journey** | P6-MIN-03..08 style | DET strong; REAL smokes/partial; full Pilote E2E pending | **prep + Morris GO** |

**Premier maillon bloquant pour un faux SUCCESS?** Aucun trou de wiring Product démontré sur main. **Premier gap opérable:** absence de Human QA E2E REAL exécuté/autorisé pour ce parcours + préparation QA (runtime main-aligned, projet, enveloppe effets).

---
## N. Matrice des 20 invariants

| ID | Invariant | CODE | TEST | Preuve | Statut | Gap |
|---|---|---|---|---|---|---|
| INV-01 | EC ≠ autorité | C1 M; authorizeExecutionContract | auth suites / postExecution | DET | PROVEN DET | REAL HQA pending |
| INV-02 | Préparation ≠ lancement | prepare vs governedExecute/reconcile | TrajectorySurface separate CTAs | DET | PROVEN DET |  |
| INV-03 | Recommendation ≠ HD | W3-C authority:none; decideTrajectory | w3c + decision tests | DET | PROVEN DET |  |
| INV-04 | Confirmation ≠ HD | confirmForAuthorization vs decide | decisionConfirmationAuthority | DET | PROVEN DET |  |
| INV-05 | Aucun effet hors autorité | authorize + capability fail-closed | auth + governedExecute | DET+REAL-BOUNDARY partial | PARTIALLY PROVEN | full E2E REAL HQA |
| INV-06 | Executor Claim ≠ Product Fact | W3-B materialize / CE | postExecutionHandoff | DET | PROVEN DET |  |
| INV-07 | SUCCESS tech ≠ Cycle closure | CRV + review blocking path | corrProof05 / MIN-04 design | DET | PROVEN DET for policy | HQA MIN-04 |
| INV-08 | Artifact ≠ Deliverable validé | review policy / completeness | artifactCompleteness | DET | PROVEN DET |  |
| INV-09 | Review ≠ Validation | start/completeReview vs CE confirm | reviewBundleLifecycle | DET | PROVEN DET |  |
| INV-10 | Evidence dispo ≠ vérifiée | verifyEvidenceIntegrity / CE | evidence-review | DET | PROVEN DET |  |
| INV-11 | Synthèse ≠ Product SoT | authority:none soft-fail | p5.s04* | DET | PROVEN DET |  |
| INV-12 | Synthèse depuis Product Resolution | lineage requires CE/CR bindings | buildProductSynthesisLineageInput | DET | PROVEN DET |  |
| INV-13 | Nora ≠ verdict Product | W3-C recommendation only | w3cPostEvidenceLoop header | DET | PROVEN DET |  |
| INV-14 | Nora ne consomme pas HD | W3-C never HD | w3c comments + tests | DET | PROVEN DET |  |
| INV-15 | Post-Evidence Rec ≠ narration Synthèse | W3-C before/independent of soft-fail synth | maybeMaterialize soft-fail | DET | PROVEN DET |  |
| INV-16 | Recovery ≠ auto relaunch | reconcileContinuePolicy + recovery CTA≠HD | p5.s03 reconcile tests | DET | PROVEN DET | HQA MIN-06 |
| INV-17 | Trajectory gouvernée | decideTrajectory / propose options | trajectory durability tests | DET | PROVEN DET |  |
| INV-18 | Preuves inspectables | Evidence refs + surfaces | handoff + UI tests | DET | PROVEN DET | HQA inspect path |
| INV-19 | STOP/FAIL ≠ SUCCESS silencieux | normalize outcomes / fail-closed | governedExecute + W3-C | DET | PROVEN DET | REAL timeout reserve |
| INV-20 | Synthesis rebuildable | rebuildProductSynthesis + soft-fail | p5.s04 | DET | PROVEN DET |  |

---

## O. Matrice P6-MIN (manifest existant — pas de nouvel ID)

| ID | Scenario | Coverage existante (main) | Realism | Statut qualifie |
|---|---|---|---|---|
| P6-MIN-01 | Exit SANS Execution | cycle/lifecycle DET; MUST-PROVE in P6 doc | DET + historical campaign | PARTIALLY PROVEN (AUTO); HUMAN E2E pending |
| P6-MIN-02 | Artifact/exec optionnel | same family | DET | PARTIALLY PROVEN |
| **P6-MIN-03** | Deliverable→review→validation→Exit | docs_write + CE/RB + W3 path DET; REAL smokes historical | DET strong / E2E-REAL NOT for this journey | **PRIORITY — NOT E2E-REAL PROVEN** |
| **P6-MIN-04** | SUCCESS+Artifact+blocking review → OPEN | corrProof05 / review blocking DET | DET | PARTIALLY PROVEN; HUMAN pending |
| **P6-MIN-05** | Correction → subsequent EC → exit | recovery successor helpers + DET | DET | PARTIALLY PROVEN |
| **P6-MIN-06** | Interruption / recovery | p5.s03 reconcile/continuity UI+DET | DET | PARTIALLY PROVEN |
| **P6-MIN-07** | Rec/HD/currentness | decision durability + HQA rec01 DET | DET + some HQA DET | PARTIALLY PROVEN |
| **P6-MIN-08** | Journal coherence | journal UI HQA tests | DET/UI | PARTIALLY PROVEN |
| P6-MIN-09 | Guided Document Review | p6.nora.min09 documentary DET/REAL-boundary tests | DET + documentary REAL suites | PARTIALLY PROVEN |

Primary scenario ID for Morris journey: **P6-MIN-03** (with continuity checks overlapping MIN-06/07/08). No concurrent canonical ID invented.

---

## P. Matrice P6-BAR

| Bar | Level | Auto/Human | Proof class | Justification |
|---|---|---|---|---|
| P6-BAR-01 USABLE | PARTIALLY PROVEN | BOTH | DET + historical REAL smokes | Product surfaces exist; full representative Human journey pending |
| P6-BAR-02 GOVERNED | PARTIALLY PROVEN | AUTO | DET + REAL-BOUNDARY partial | authorize/confirm/capability wired; HQA authority envelope pending |
| P6-BAR-03 RESTART-SAFE | PARTIALLY PROVEN | AUTO | DET | continuity/rehydrate tests; Human reload E2E pending |
| P6-BAR-04 GENERIC | PARTIALLY PROVEN | AUTO | DET | generic + docs_write paths; contrasted Human situations pending |
| P6-BAR-05 PRODUCT EXPERIENCE | PARTIALLY PROVEN | HUMAN needed | UI DET + PR #583 | UX integrated; source browser capture reserve |
| P6-BAR-06 ARTIFACT ROUTING | PARTIALLY PROVEN | AUTO | DET/REAL-BOUNDARY | docs_write honesty path; broader routing HQA pending |
| P6-BAR-07 COGNITION | PARTIALLY PROVEN | AUTO/HUMAN | DET + REAL cognitive suites | Nora path exists; not reclassified as Execution proof |
| P6-BAR-08 SIMPLIFICATION | PARTIALLY PROVEN | AUTO | DET UI | no parallel cockpit found for this path |
| P6-BAR-09 EVIDENCE | PARTIALLY PROVEN | AUTO | DET | RB/CE suites; Human inspect Evidence pending |
| P6-BAR-10 NON-REGRESSION | PROVEN (CI tip) | AUTO | DET CI | post-merge CI reported SUCCESS for #583 tip — CI ≠ E2E-REAL Product journey |
| P6-BAR-11 MATURITY HONESTY | PROVEN (this pack) | AUTO | SOURCE-BACKED | claims narrowed; no P6 PASS |
| P6-BAR-12 CLOSED LOOP | PARTIALLY PROVEN | AUTO | DET W3-C→synth→surfaces | Human closed-loop pending |

---

## Q. Preuves existantes (accessibles)

| Preuve | Class | Access |
|---|---|---|
| origin/main `b555819d` + PR #582/#583 | CURRENT | Git |
| P6 contract §B/§AV campaign status | CURRENT doc | Git |
| DET postExecutionHandoff / frontDoor / continuity / synthesis / UI p5.s03/s04 | CURRENT | Git tests |
| evidence-review adversarial + lifecycle | CURRENT | Git tests |
| p6-campaign-evidence ledger wiring DET | CURRENT | Git lib+tests |
| Nora documentary / cognitive REAL suites (p6.nora.*, p5.s02/s05) | HISTORICAL/CURRENT tests | Git; ≠ Execution Review E2E Human |
| Human QA T2/T3 conversation/UX favorable (prior cycles) | HISTORICAL | prior handoffs/worktrees; NOT re-run here |
| CI 38630968210 SUCCESS / Required Gate PASS | RAPPORTÉ ChatGPT / tip merge | NOT re-fetched as live Actions in this pack body; tip commit present |

---

## R. Statuts de maturité (honnêtes)

- **Wiring Product Execution→Review→Synthesis→Nora:** INTEGRATED on main.
- **Deterministic proof of chain:** STRONG.
- **REAL-BOUNDARY (docs_write / Nora provider):** PARTIAL / historical+suites — NOT consumed by this GO.
- **END-TO-END-REAL Pilote journey for P6-MIN-03 family:** NOT PROVEN.
- **P6 GLOBAL PASS:** NOT CLAIMED / NOT PROVEN.
- **Runtime v3:** NON ADOPTED.

---

## S. Realism gaps

1. Full Human Pilote E2E with REAL executor effects not executed under this GO.
2. T2 worktree `:3020` is at `eec68a41` — **behind** main tip `b555819d` (missing UX #583 at least).
3. Updated browser capture for post-#583 source regrouping: NOT INDEPENDENTLY VERIFIED.
4. Generic Cursor REAL vs docs_write sealed path — envelope must be explicit before Human QA.
5. P6 doc §AS contains older gate rows that conflict with §B/§AV tip — treat §B/§AV as campaign tip; §AS as potentially stale subsection (TEMPORAL QUALIFIED).

---

## T. Human QA prioritaire

**Scenario ID:** P6-MIN-03 — Deliverable production → review → validation path, extended to include Synthesis consultation + Nora post-Evidence recommendation + Journal/Trajectory coherence (overlaps MIN-06/07/08 checks without inventing a new canonical ID).

**Class:** **B — REQUIRES BOUNDED QA PREPARATION** (no Product code change demonstrated necessary; setup + Morris GO required).

Not A: runtime/project/envelope not verified ready without prep.
Not C: no verified Product wiring gap on main.
Not D: evidence sufficient for design review.

---

## U. HUMAN QA EXECUTION CONTRACT (protocole de test — PAS un EC Product)

### Objectif
Qualifier en situation Pilote réelle (GO ultérieur) le parcours Execution / Review / Synthesis / Nora continuity sur Product main-aligned.

### Capacité P6
Closed loop Evidence → Nora/LPS/Trajectory/next action (BAR-12) via MIN-03 spine.

### Situation initiale (à préparer)
1. Runtime Studio **aligné `origin/main` (`b555819d` ou tip courant)** — ne pas utiliser un worktree antérieur (`eec68a41`) comme oracle du tip.
2. Auth Pilote valide (Better Auth / allowlist).
3. Project Product avec repositoryBinding + managed repo root utilisable pour **docs_write** (chemin représentatif REAL le plus prouvé).
4. Cycle / Trajectory prêts à recevoir une intention de production documentaire bornée.
5. Isolation: DB Product/Nora dédiées QA; **ne pas muter** bases Human QA historiques sans GO.
6. Enveloppe REAL explicite (OpenAI + executor docs_write) — **GO Morris distinct** avant effets.

### Preconditions
- `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY` / auth secrets configurés (server-owned).
- Managed repo path writable only inside authorized envelope.
- Pas de Confirmation inventée; HD prises par Morris-as-Pilote.
- Capture plan: screens + product ids (contractId, attemptId, evidenceId, reviewBundleId, claimEvaluationId, synthesisId).

### Parcours utilisateur (ordre indicatif — respecter UI réelle)
1. Ouvrir Project → Conversation.
2. Exprimer intention de travail concret borné (docs_write représentatif).
3. Observer qualification / Recommendation Nora; vérifier currentness.
4. Prendre HumanDecision structurante (Trajectory) — pas confondre avec Confirmation.
5. Préparer ExecutionContract; **inspecter** (objectif, scope, authority, evidence obligations).
6. Confirmer si l'UI l'exige (Confirmation ≠ HD).
7. Autoriser / lancer depuis Trajectory ou Execution surface.
8. Suivre progression Exécution; tester STOP/cancel si GO le permet (sinon observer nominal).
9. À terminaison: Examiner résultat / Evidence / ReviewBundle / verdict (PASS/NOT_PROVEN/FAIL).
10. Ouvrir Synthèses: 9 sections; vérifier verdict non autoritaire; inspecter bindings.
11. Revenir Conversation: Recommendation post-Evidence; aucune HD auto; suite proposée.
12. Vérifier Journal / LPS / Trajectory cohérence.
13. Reload navigateur: continuité sans inventer autorité; pas de relaunch auto.
14. Décision Pilote éventuelle sur la suite (HD explicite seulement).

### Observations attendues
- EC inspectable avant launch.
- Aucun effet avant authorize/launch.
- Claim exécuteur ≠ fait Product tant que vérification/CE incomplets.
- SUCCESS technique n'implique pas Exit Proof / Cycle closure.
- Synthèse `authority: none`; soft-fail n'efface pas Truth C.
- Nora post-Evidence = Recommendation only.

### Preuves à capturer
UI screens (Conversation working/stop, EC inspect, Execution running/terminal, Evidence/Result, Syntheses 9 sections, Journal, post-reload). Product ids. Git/product DB queries read-only si utiles. Logs sans secrets.

### PASS / FAIL (Human QA)
**PASS** si parcours complète les maillons 1–13 sans violation d'invariants et avec preuves inspectables.
**FAIL** si autorité élargie, SUCCESS silencieux, Synthèse traitée comme Truth C, HD inventée, relaunch auto, Evidence absente présentée comme vérifiée.
**STOP** si enveloppe/autorité/runtime non prêts.

### Limites
- Ce protocole n'autorise aucun effet maintenant.
- Ne prouve pas P6 GLOBAL PASS seul.
- Ne prouve pas runtime v3 adoption.

### Gates
1. ChatGPT Critical Qualification Review of this pack.
2. Morris Human QA GO (enveloppe + runtime + projet).
3. Ensuite seulement: exécution du protocole.

---

## V. Risques / securite

- Confusion Confirmation/HD/EC/autorité → faux GO.
- Utiliser worktree stale `:3020` comme tip → fausse non-régression UX.
- REAL OpenAI/executor sans enveloppe → effets hors scope.
- Secrets/.env/DB QA — non exposés; non mutés ici.
- Synthèse / Journal mal lus comme Truth C.

---

## W. Dependances

Product OA stack · SqliteProductStore · evidence-review · W2/W3 · pre-m6 surfaces · auth · managed repo · (pour REAL) OpenAI + launch ports · Pilot authority env.

---

## X. Defauts bloquants Product

**Aucun gap de wiring Product démontré sur `origin/main` pour la chaîne cible.**

Gaps opératoires (non-code):
- Human QA E2E non encore exécuté pour ce parcours.
- Runtime tip alignment / isolation / enveloppe à préparer.
- Capture navigateur sources post-#583 manquante (non bloquante pour design review).

---

## Y. Dette / exit

| Item | Status |
|---|---|
| Product parallel architecture | NONE for this path |
| Preview QA route | RETIRED on main |
| Source browser capture post-#583 | OPEN reserve (non-blocking design) |
| P6 Human QA batch | PREPARING (doc) |
| Exit proof this cycle | SOURCE-BACKED QUALIFICATION + Handoff L3 |

---

## Z. Gates

| Gate | Status |
|---|---|
| GO Qualification (ce cycle) | CONSUMED |
| ChatGPT Critical Qualification Review | NEXT |
| Morris Human QA GO | DISTINCT / NOT AUTHORIZED HERE |
| Draft→Ready / merge / REAL / :3020 mutation | NOT AUTHORIZED |
| P6 PASS / P7 / runtime v3 | NOT AUTHORIZED |

---

## AA. Next capability

P6 HUMAN QA DESIGN REVIEW → (si PASS) Morris Human QA GO pour P6-MIN-03 spine → Evidence → P6 Consolidation / Exit Review.

---

## AB. Verdict

**P6 PRODUCT END-TO-END QUALIFICATION — SOURCE-BACKED / COMPLETE.**

**Parcours prioritaire class:** **B — REQUIRES BOUNDED QA PREPARATION.**

**Central:** **READY FOR P6 HUMAN QA DESIGN REVIEW.**

Anti-claims: NOT P6 GLOBAL PASS · NOT P7 READY · NOT RUNTIME V3 ADOPTED · NOT END-TO-END-REAL PROVEN · NOT HUMAN QA PASS.

---

## AC. Git Truth final

Re-vérifié en fin de cycle: aucun fichier Product modifié; pack temporaire local; handoff publié séparément.

---

## AD. Instruction ChatGPT

Lire `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff`.

Vérifier: main tip, sources, TARGET vs CURRENT, invariants, chaînes Execution/Evidence/Synthesis/Nora, P6-MIN/BAR, scénario Human QA, absence de code change Product, handoff remote.

Produire: **CHATGPT CRITICAL QUALIFICATION REVIEW — P6 EXECUTION / REVIEW / SYNTHESIS.**

Recommander **UN SEUL** parcours Human QA prioritaire (P6-MIN-03 spine). Décision d'exécuter = GO Morris distinct.

---

## Git Review Index

1. Qualification READ-ONLY — zero Product file change
2. Sources from `origin/main` = `b555819d8c3711fd2782b5ee7926517b6b3b8615`
3. Primary scenario: P6-MIN-03 (+ continuity MIN-06/07/08 checks)
4. Journey class: B — bounded QA preparation
5. Verdict: READY FOR P6 HUMAN QA DESIGN REVIEW

---

## Annex — Actions facade (EC/Execution)

```text
175:export async function w2ReadCurrentGovernedExecutionContinuityAction(input: {
204:export async function w2DecideTrajectoryAction(input: {
260:export async function w2InspectExecutionContractAction(input: {
276:export async function w2ConfirmExecutionContractAction(input: {
290:export async function w2AuthorizeExecutionContractAction(input: {
379:export async function w2PrepareExecutionContractAction(input: {
480:export async function w2PrepareRecoveryDocsWriteAction(input: {
541:export async function w2GovernedExecuteSelectAction(input: {
565:export async function w2GovernedExecuteStartAction(input: {
589:export async function w2GovernedExecuteCompleteAction(input: {
616:export async function w2GovernedExecuteCancelAction(input: {
640:export async function w2MaterializeProductOutcomeAction(input: {
718:export async function w2GovernedExecuteAction(input: {
748:export async function w2ReconcileGovernedExecutionAction(input: {
779:export async function w2DeriveGovernedExecutionContinuityAction(input: {
806:export async function w2ResolveProductExecutionContextAction(input: {
839:export async function w2ReadExecutionReviewItemAction(input: {
```

## Annex — C1 boucle cible (référence)

```markdown
### F.1 Boucle cible

```text
Pilote
  → Studio / Nora
  → contexte v3 / DoctrinePackage / CKC
  → qualification
  → analyse / clarification
  → Living Project State
  → ProjectTrajectory / options / recommandation
  → HumanDecision du Pilote
  → Confirmation si nécessaire
  → ExecutionContract natif
  → Cursor / agent
  → Evidence / ReviewBundle / Git
  → analyse Nora
  → LPS / ProjectTrajectory / replanification
  → décision Pilote
  → cycle suivant
```
```

## Annex — P6 campaign tip (§B excerpt)

Doc path: `projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md`

Key tip claims used: Phase 5 HUMAN QA BATCH PREPARING · P6 READY for broad QA ≠ P6 PASS · Next = Morris Human QA batch then consolidation.

---

## Manifest d'absence de changement Product

| Check | Result |
|---|---|
| TypeScript/CSS/routes/tests Product modified | NO |
| DB writes / migrations / OpenAI calls | NO |
| :3020 / Human QA DB mutation | NO |
| Project commit/push/PR/merge | NO |
| Only artifact | `.tmp-sfia-review/chatgpt-review.md` (+ handoff L3) |

END OF REVIEW PACK FULL — P6 E2E EXIT QUALIFICATION
