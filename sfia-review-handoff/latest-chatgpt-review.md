# PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — CRITICAL CORRECTION PASS 01
# ChatGPT Review Pack (FULL)

## 1. Timestamp
2026-09-28T16:16:17+0200

## 2. Macro / cycle / profile
- Macro: PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01
- Cycle: 8 — Delivery / implémentation
- Profile: CRITICAL
- Pass: CRITICAL CORRECTION PASS 01
- Typologie: EVOL
- Gate consumed: GO MORRIS — LOCAL CORRECTION PASS PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01

## 3. Branch + HEAD + origin/main
- Branch: `delivery/sfia-studio-product-continuity-shared-knowledge-01`
- HEAD (uncommitted candidate): `5ed9cd24cad7110aee6f6c26dd34226e69e1531b`
- origin/main: `5ed9cd24cad7110aee6f6c26dd34226e69e1531b`
- Previous handoff (entry proof): `b92e3fc8f32fab9badfdd5bcba170888c4191d6c` on `sfia/review-handoff`
- Working tree:
```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraSentinels.ts
?? projects/sfia-studio/app/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection.ts
?? projects/sfia-studio/app/features/project-assistant/w2/reconcileGovernedExecution.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
```

## 4. Sources + previous handoff
Previous handoff b92e3fc8 consulted as entry proof (NOT READY — CORRECTION PASS REQUIRED).
Mandatory method / doctrine / runtime-ref sources re-read as required by cycle prompt.
Code local (uncommitted candidate) is SoT for this pass.

## 5. Morris decisions consumed
- GO MORRIS — LOCAL CORRECTION PASS PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01
- Architecture Option A KEEP (no redesign)
- No project commit / push / PR / REAL

## 6. Findings ChatGPT CR-01→CR-05 (entry)

| ID | Finding | Correction |
|---|---|---|
| CR-01 | noraCognitiveCompletion was provider.complete wrapper — superficial convergence | Rewrote as shared Agents core `runNoraCognitiveCore` → `runNoraAgentsTurn`; conversation + post_execution both invoke |
| CR-02 | R2 ACCEPTED restart unproven | Added runtime A→B restart test after SELECT-only |
| CR-03 | R3 RUNNING restart unproven | Added runtime A→B restart test after Start leaves RUNNING |
| CR-04 | Evidence prefix heuristic (ev:docs-write / ev:w3b) | Canonical CE → RB → contractResultBindings.evidenceRefs; ambiguous without CE → EVIDENCE_LINEAGE_AMBIGUOUS; verdict via projectContractResultVerdict |
| CR-05 | TECHNICAL_TERMINAL / PRODUCT_QUALIFIED unreachable | Removed from union; every remaining stage has derivation test |

## 7. NORA COGNITIVE SEAM MAP — BEFORE CORRECTION
- Conversation: runNoraCognitiveTurn → MW policies → runNoraAgentsTurn (Agents Runner)
- Post-Evidence: analyzePostEvidenceWithProvider → runNoraCognitiveCompletion → resolveConversationProvider().complete(...)
- Shared file existed but was NOT a real shared core (wrapper only)
- Client graph risk: presentationLabels imported postEvidenceNoraAnalysis sentinels

## 8. NORA COGNITIVE SEAM MAP — AFTER CORRECTION
```
runNoraCognitiveCore(mode)
  ├── conversation  → runNoraAgentsTurn (caller supplies Memory B / tools / MW6)
  └── post_execution → runNoraAgentsTurn with tools/search/session/Journal/Product tools OFF
```
- Conversation: runNoraCognitiveTurn → runNoraCognitiveCore(conversation)
- Post-Evidence: analyzePostEvidenceWithProvider → runNoraCognitiveCompletion(post_execution) → runNoraCognitiveCore → runNoraAgentsTurn
- observeNoraCognitiveCore() test observer proves both modes hit the same seam
- Client-safe sentinels extracted to postEvidenceNoraSentinels.ts (presentationLabels no longer pulls Agents)

## 9. Architecture finalisée
Option A unchanged. NO new store / engine / bus / OA Knowledge domain.

## 10. Exact shared seam proof (CR-01)
- Shared function: `runNoraCognitiveCore` in noraCognitiveCompletion.ts
- Invokes: `runNoraAgentsTurn` (NOT bare provider.complete)
- Modes observed: conversation + post_execution (T-C1 behavioral)
- postEvidence does not call provider.complete (T-C2 spy)
- Policies: contract-first system prompt retained; CLAIM≠Evidence; FULL/PARTIAL; NOT_PROVEN; no MW5/tools/hosted search in post_execution defaults

## 11. R2 ACCEPTED restart
Runtime A: authorize → governedExecuteSelectAgent → ATTEMPT_ACCEPTED (1 Attempt).
Dispose. Runtime B: same attemptId, stage ATTEMPT_ACCEPTED, no Evidence invented.
Continue: same Attempt, listAttempts length 1.

## 12. R3 RUNNING restart
Runtime A: Select → Start → RUNNING (Fake docs_write).
Dispose. Runtime B: same attemptId, stage RUNNING, no Evidence/RB/CE invented.
Continue: same Attempt; honest progression or await — never second Attempt / invented SUCCESS from restart alone.

## 13. Evidence lineage BEFORE/AFTER
BEFORE: prefer startsWith("ev:docs-write:") / "ev:w3b:" / bound[0]
AFTER:
1. resolveCurrentContractResultClaimEvaluation
2. validate CE bindings project/attempt
3. RB via claimEvaluation.reviewBundleId
4. Evidence via bindings.evidenceRefs (ordered)
5. No CE + 0 Evidence → honest absence
6. No CE + 1 Evidence → project that one
7. No CE + N Evidence → EVIDENCE_LINEAGE_AMBIGUOUS (fail-closed)
Verdict: projectContractResultVerdict(status) → PASS|FAIL|NOT_PROVEN

## 14. Continuity stages final
PRE_EXECUTION | ATTEMPT_ACCEPTED | RUNNING | PRODUCT_MATERIALIZATION_PENDING | POST_EVIDENCE_PENDING | POST_EVIDENCE_COMPLETE | RECOVERY_REQUIRED
(Removed unreachable TECHNICAL_TERMINAL + PRODUCT_QUALIFIED)

## 15. Fichiers créés

- `projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/reconcileGovernedExecution.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraSentinels.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts`

## 16. Fichiers modifiés

- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`
- `projects/sfia-studio/app/features/project-assistant/w2/actions.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts`
- `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts`
- `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts`
- `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`
- `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`
- `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`
- `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

## 17–18. Contenu créé + diffs


### CREATED FULL: `projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts`
```typescript
/**
 * PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — Shared Product Resolution (READ-ONLY).
 *
 * Composes existing OA Product Truth into a typed ProductExecutionContext.
 * NOT a store. NOT a parallel knowledge domain. Fail-closed on lineage mismatch.
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type { ClaimEvaluation, Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
import {
  projectContractResultVerdict,
  resolveCurrentContractResultClaimEvaluation,
} from "@/lib/oa/evidence-review";
import type { ContractResultVerdict } from "@/lib/oa/evidence-review/domain/contractResultTypes";
import {
  loadDocsWriteArtifactReviewMaterial,
  resolveProductEvidenceRefsRoot,
} from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
import {
  findExistingW3cPostEvidence,
  projectW3cExecutionReportSurfaceFromDurable,
} from "./w3cPostEvidenceLoop";
import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";

export type ProductExecutionContextQuery =
  | { readonly kind: "latest" }
  | { readonly kind: "byExecutionContractId"; readonly executionContractId: string }
  | { readonly kind: "byAttemptId"; readonly attemptId: string };

export type ProductExecutionContext = {
  readonly projectId: string;
  readonly activeCycleInstanceId: string | null;
  readonly executionContract: {
    readonly kind: "PRODUCT_CONTRACT";
    readonly executionContractId: string;
    readonly version: number;
    readonly status: string;
    readonly action: string;
    readonly objective: string | null;
    readonly decisionId: string | null;
    readonly cycleInstanceId: string | null;
  } | null;
  readonly attempt: {
    readonly kind: "PRODUCT_EXECUTION_FACT";
    readonly attemptId: string;
    readonly status: string;
    readonly selectedAgentRef: string | null;
    readonly executionContractId: string;
  } | null;
  readonly cursorReport: {
    readonly kind: "EXECUTOR_CLAIM";
    readonly present: boolean;
    readonly status: string | null;
    readonly summary: string | null;
    readonly disclosure: "CLAIM_NOT_EVIDENCE";
  };
  readonly artifact: {
    readonly kind: "ARTIFACT";
    readonly present: boolean;
    readonly completeness: "FULL" | "PARTIAL" | null;
    readonly preview: string | null;
  };
  readonly evidence: {
    readonly kind: "EVIDENCE";
    readonly evidenceId: string | null;
    readonly status: string | null;
  };
  readonly reviewBundle: {
    readonly kind: "REVIEW";
    readonly reviewBundleId: string | null;
    readonly status: string | null;
    readonly frozen: boolean;
  };
  readonly claimEvaluation: {
    readonly kind: "PRODUCT_QUALIFICATION";
    readonly claimEvaluationId: string | null;
    readonly status: string | null;
    /** Canonical ContractResultVerdict (PASS|FAIL|NOT_PROVEN) — never raw status. */
    readonly contractResultVerdict: ContractResultVerdict | null;
  };
  readonly postEvidence: {
    readonly kind: "RECOMMENDATION";
    readonly present: boolean;
    readonly recommendationKind: string | null;
    readonly headline: string | null;
    readonly requiresHumanDecision: boolean | null;
  };
  readonly provenance: {
    readonly bindingsOk: true;
    readonly readOnly: true;
    readonly query: ProductExecutionContextQuery;
  };
  readonly disclosures: readonly string[];
};

export type ResolveProductExecutionContextResult =
  | { readonly ok: true; readonly context: ProductExecutionContext }
  | { readonly ok: false; readonly code: string; readonly message: string };

async function listProjectContracts(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<ExecutionContract[]> {
  const repo = oa.executionContractServices?.contracts;
  if (!repo?.listByProject) return [];
  return repo.listByProject(projectId);
}

async function listAttemptsForContract(
  oa: RuntimeOaStack,
  executionContractId: string,
): Promise<ExecutionAttempt[]> {
  if (!oa.executionAttemptServices) return [];
  const listed =
    await oa.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId,
    });
  if (!listed.ok) return [];
  return listed.attempts;
}

function pickLatestAttempt(
  attempts: readonly ExecutionAttempt[],
): ExecutionAttempt | null {
  if (attempts.length === 0) return null;
  return [...attempts].sort((a, b) => {
    const at = a.updatedAt ?? a.createdAt ?? "";
    const bt = b.updatedAt ?? b.createdAt ?? "";
    return bt.localeCompare(at);
  })[0]!;
}

function contractSummary(
  c: ExecutionContract,
): NonNullable<ProductExecutionContext["executionContract"]> {
  const objective =
    typeof c.inputs?.objective === "string"
      ? (c.inputs.objective as string)
      : typeof c.inputs?.what === "string"
        ? (c.inputs.what as string)
        : null;
  const decisionId =
    Array.isArray(c.decisionRefs) && c.decisionRefs.length > 0
      ? String(c.decisionRefs[0])
      : null;
  return {
    kind: "PRODUCT_CONTRACT",
    executionContractId: c.executionContractId,
    version: c.version,
    status: c.status,
    action: c.action,
    objective,
    decisionId,
    cycleInstanceId: c.cycleInstanceId ?? null,
  };
}

async function resolveEvidenceLineage(input: {
  oa: RuntimeOaStack;
  projectId: string;
  attemptId: string;
}): Promise<
  | {
      ok: true;
      evidence: Evidence | null;
      evidenceIds: readonly string[];
      reviewBundle: ReviewBundle | null;
      claimEvaluation: ClaimEvaluation | null;
    }
  | { ok: false; code: string; message: string }
> {
  const services = input.oa.evidenceReviewServices;
  if (!services) {
    return {
      ok: true,
      evidence: null,
      evidenceIds: [],
      reviewBundle: null,
      claimEvaluation: null,
    };
  }

  // 1) Canonical current Contract Result CE for this Attempt (fail-closed).
  const resolvedCe = await resolveCurrentContractResultClaimEvaluation({
    repo: services.claimEvaluationRepository,
    projectId: input.projectId,
    executionAttemptId: input.attemptId,
  });
  if (resolvedCe.status === "ambiguous") {
    return {
      ok: false,
      code: "CLAIM_EVALUATION_AMBIGUOUS",
      message:
        "Plusieurs ClaimEvaluation Contract Result actives pour cet Attempt — fail-closed.",
    };
  }

  if (resolvedCe.status === "one") {
    const claimEvaluation = resolvedCe.claimEvaluation;
    const bindings = claimEvaluation.contractResultBindings;
    if (!bindings) {
      return {
        ok: false,
        code: "CONTRACT_RESULT_BINDINGS_MISSING",
        message:
          "ClaimEvaluation Contract Result sans bindings canoniques — fail-closed.",
      };
    }
    if (bindings.projectId !== input.projectId) {
      return {
        ok: false,
        code: "EVIDENCE_PROJECT_MISMATCH",
        message: "CE bindings.projectId hors Project — fail-closed.",
      };
    }
    if (bindings.executionAttemptId !== input.attemptId) {
      return {
        ok: false,
        code: "ATTEMPT_CONTRACT_MISMATCH",
        message: "CE bindings.executionAttemptId mismatch — fail-closed.",
      };
    }

    // 2) ReviewBundle via claimEvaluation.reviewBundleId
    const rbId = claimEvaluation.reviewBundleId?.trim();
    if (!rbId) {
      return {
        ok: false,
        code: "REVIEW_BUNDLE_MISSING",
        message: "ClaimEvaluation sans reviewBundleId — fail-closed.",
      };
    }
    const reviewBundle = await services.reviewBundleReader.findById(rbId);
    if (!reviewBundle) {
      return {
        ok: false,
        code: "REVIEW_BUNDLE_NOT_FOUND",
        message: `ReviewBundle ${rbId} introuvable — fail-closed.`,
      };
    }
    if (reviewBundle.projectId !== input.projectId) {
      return {
        ok: false,
        code: "REVIEW_BUNDLE_PROJECT_MISMATCH",
        message: "ReviewBundle hors Project — fail-closed.",
      };
    }
    if (bindings.reviewBundleId !== reviewBundle.reviewBundleId) {
      return {
        ok: false,
        code: "CONTRACT_RESULT_BINDINGS_MISMATCH",
        message: "CE bindings.reviewBundleId ≠ ReviewBundle — fail-closed.",
      };
    }

    // 3) Evidence via contractResultBindings.evidenceRefs (canonical order)
    const evidenceRefs = [...bindings.evidenceRefs];
    if (evidenceRefs.length === 0) {
      return {
        ok: false,
        code: "CONTRACT_RESULT_EVIDENCE_REFS_EMPTY",
        message: "CE bindings.evidenceRefs vide — fail-closed.",
      };
    }
    const loaded: Evidence[] = [];
    for (const evidenceId of evidenceRefs) {
      const evidence = await services.evidenceReader.findById(evidenceId);
      if (!evidence) {
        return {
          ok: false,
          code: "EVIDENCE_NOT_FOUND",
          message: `Evidence ${evidenceId} référencée par CE introuvable — fail-closed.`,
        };
      }
      if (
        evidence.bindings?.projectId &&
        evidence.bindings.projectId !== input.projectId
      ) {
        return {
          ok: false,
          code: "EVIDENCE_PROJECT_MISMATCH",
          message: "Evidence hors Project — fail-closed.",
        };
      }
      if (
        evidence.bindings?.executionAttemptId &&
        evidence.bindings.executionAttemptId !== input.attemptId
      ) {
        return {
          ok: false,
          code: "ATTEMPT_CONTRACT_MISMATCH",
          message: "Evidence Attempt binding mismatch — fail-closed.",
        };
      }
      loaded.push(evidence);
    }

    // Primary Evidence for compact projection = first canonical evidenceRef.
    // Full ordered set preserved in evidenceIds (never prefix-preferred).
    return {
      ok: true,
      evidence: loaded[0] ?? null,
      evidenceIds: evidenceRefs,
      reviewBundle,
      claimEvaluation,
    };
  }

  // No CE yet — pre-qualification window.
  const allEvidence = await services.repository.listByProject(input.projectId);
  const bound = allEvidence.filter(
    (e) => e.bindings?.executionAttemptId === input.attemptId,
  );
  for (const evidence of bound) {
    if (
      evidence.bindings?.projectId &&
      evidence.bindings.projectId !== input.projectId
    ) {
      return {
        ok: false,
        code: "EVIDENCE_PROJECT_MISMATCH",
        message: "Evidence hors Project — fail-closed.",
      };
    }
  }

  if (bound.length === 0) {
    return {
      ok: true,
      evidence: null,
      evidenceIds: [],
      reviewBundle: null,
      claimEvaluation: null,
    };
  }
  if (bound.length === 1) {
    return {
      ok: true,
      evidence: bound[0]!,
      evidenceIds: [bound[0]!.evidenceId],
      reviewBundle: null,
      claimEvaluation: null,
    };
  }

  // Multiple Evidence linked to Attempt without CE lineage — NEVER prefix-prefer.
  return {
    ok: false,
    code: "EVIDENCE_LINEAGE_AMBIGUOUS",
    message:
      "Plusieurs Evidence liées à l'Attempt sans ClaimEvaluation/bindings canoniques — fail-closed (pas de préférence de préfixe).",
  };
}

/**
 * READ-ONLY Product Resolution — project-bound, fail-closed.
 */
export async function resolveProductExecutionContext(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly query?: ProductExecutionContextQuery;
}): Promise<ResolveProductExecutionContextResult> {
  const projectId = input.projectId.trim();
  if (!projectId) {
    return {
      ok: false,
      code: "PROJECT_ID_REQUIRED",
      message: "projectId requis pour Product Resolution.",
    };
  }
  const query: ProductExecutionContextQuery = input.query ?? { kind: "latest" };

  const project = await input.oa.projectServices.getProject.execute({ projectId });
  if (!project.ok) {
    return {
      ok: false,
      code: "PROJECT_NOT_FOUND",
      message: "Projet introuvable — Product Resolution refusée.",
    };
  }

  let contract: ExecutionContract | null = null;
  let attempt: ExecutionAttempt | null = null;

  if (query.kind === "byAttemptId") {
    if (!input.oa.executionAttemptServices) {
      return {
        ok: false,
        code: "ATTEMPT_STACK_UNAVAILABLE",
        message: "Services Attempt indisponibles.",
      };
    }
    const loaded =
      await input.oa.executionAttemptServices.getExecutionAttempt.execute({
        attemptId: query.attemptId,
      });
    if (!loaded.ok) {
      return {
        ok: false,
        code: "ATTEMPT_NOT_FOUND",
        message: "Attempt introuvable.",
      };
    }
    attempt = loaded.attempt;
    const ec =
      await input.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: attempt.executionContractId,
      });
    if (!ec.ok) {
      return {
        ok: false,
        code: "EXECUTION_CONTRACT_NOT_FOUND",
        message: "ExecutionContract lié introuvable.",
      };
    }
    contract = ec.contract;
    if (contract.projectId !== projectId) {
      return {
        ok: false,
        code: "CROSS_PROJECT_REF_REJECTED",
        message: "Attempt / EC hors Project courant — fail-closed.",
      };
    }
  } else if (query.kind === "byExecutionContractId") {
    const ec =
      await input.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: query.executionContractId,
      });
    if (!ec.ok) {
      return {
        ok: false,
        code: "EXECUTION_CONTRACT_NOT_FOUND",
        message: "ExecutionContract introuvable.",
      };
    }
    contract = ec.contract;
    if (contract.projectId !== projectId) {
      return {
        ok: false,
        code: "CROSS_PROJECT_REF_REJECTED",
        message: "ExecutionContract hors Project courant — fail-closed.",
      };
    }
    attempt = pickLatestAttempt(
      await listAttemptsForContract(input.oa, contract.executionContractId),
    );
  } else {
    const contracts = (await listProjectContracts(input.oa, projectId)).filter(
      (c) => c.projectId === projectId,
    );
    let best: {
      contract: ExecutionContract;
      attempt: ExecutionAttempt | null;
    } | null = null;
    for (const c of contracts) {
      const latestAttempt = pickLatestAttempt(
        await listAttemptsForContract(input.oa, c.executionContractId),
      );
      if (!best) {
        best = { contract: c, attempt: latestAttempt };
        continue;
      }
      const bestHas = Boolean(best.attempt);
      const curHas = Boolean(latestAttempt);
      if (curHas && !bestHas) {
        best = { contract: c, attempt: latestAttempt };
        continue;
      }
      if (curHas && bestHas) {
        const bt = best.attempt!.updatedAt ?? best.attempt!.createdAt ?? "";
        const ct = latestAttempt!.updatedAt ?? latestAttempt!.createdAt ?? "";
        if (ct.localeCompare(bt) > 0) {
          best = { contract: c, attempt: latestAttempt };
        }
      } else if (!curHas && !bestHas && c.version >= best.contract.version) {
        best = { contract: c, attempt: null };
      }
    }
    contract = best?.contract ?? null;
    attempt = best?.attempt ?? null;
  }

  if (
    attempt &&
    contract &&
    attempt.executionContractId !== contract.executionContractId
  ) {
    return {
      ok: false,
      code: "ATTEMPT_CONTRACT_MISMATCH",
      message: "Attempt non lié à l'ExecutionContract résolu.",
    };
  }

  let cursorReport: ProductExecutionContext["cursorReport"] = {
    kind: "EXECUTOR_CLAIM",
    present: false,
    status: null,
    summary: null,
    disclosure: "CLAIM_NOT_EVIDENCE",
  };
  let artifact: ProductExecutionContext["artifact"] = {
    kind: "ARTIFACT",
    present: false,
    completeness: null,
    preview: null,
  };
  let evidenceBlock: ProductExecutionContext["evidence"] = {
    kind: "EVIDENCE",
    evidenceId: null,
    status: null,
  };
  let reviewBlock: ProductExecutionContext["reviewBundle"] = {
    kind: "REVIEW",
    reviewBundleId: null,
    status: null,
    frozen: false,
  };
  let claimBlock: ProductExecutionContext["claimEvaluation"] = {
    kind: "PRODUCT_QUALIFICATION",
    claimEvaluationId: null,
    status: null,
    contractResultVerdict: null,
  };
  let postEvidenceBlock: ProductExecutionContext["postEvidence"] = {
    kind: "RECOMMENDATION",
    present: false,
    recommendationKind: null,
    headline: null,
    requiresHumanDecision: null,
  };

  if (attempt) {
    const targetPath =
      typeof contract?.inputs?.targetPath === "string"
        ? (contract.inputs.targetPath as string)
        : undefined;
    const durableSurface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId: attempt.attemptId,
      targetPath,
      refsRoot: resolveProductEvidenceRefsRoot(),
    });
    if (durableSurface.executionReport || durableSurface.cursorReportSummary) {
      cursorReport = {
        kind: "EXECUTOR_CLAIM",
        present: true,
        status: durableSurface.executionReport?.cursorStatus ?? null,
        summary: durableSurface.cursorReportSummary ?? null,
        disclosure: "CLAIM_NOT_EVIDENCE",
      };
    }
    if (durableSurface.artifactReviewMaterial) {
      artifact = {
        kind: "ARTIFACT",
        present: true,
        completeness: durableSurface.artifactReviewCompleteness ?? null,
        preview: durableSurface.artifactReviewMaterial.slice(0, 2000),
      };
    } else {
      const loaded = loadDocsWriteArtifactReviewMaterial({
        refsRoot: resolveProductEvidenceRefsRoot(),
        attemptId: attempt.attemptId,
        ...(targetPath ? { targetPath } : {}),
      });
      if (loaded.ok) {
        artifact = {
          kind: "ARTIFACT",
          present: true,
          completeness: loaded.completeness,
          preview: loaded.artifactText.slice(0, 2000),
        };
        if (loaded.cursorReport && !cursorReport.present) {
          cursorReport = {
            kind: "EXECUTOR_CLAIM",
            present: true,
            status: loaded.cursorReport.status,
            summary: `status=${loaded.cursorReport.status}`,
            disclosure: "CLAIM_NOT_EVIDENCE",
          };
        }
      }
    }

    const lineage = await resolveEvidenceLineage({
      oa: input.oa,
      projectId,
      attemptId: attempt.attemptId,
    });
    if (!lineage.ok) return lineage;

    if (lineage.evidence) {
      evidenceBlock = {
        kind: "EVIDENCE",
        evidenceId: lineage.evidence.evidenceId,
        status: lineage.evidence.status,
      };
    }
    if (lineage.reviewBundle) {
      if (lineage.reviewBundle.projectId !== projectId) {
        return {
          ok: false,
          code: "REVIEW_BUNDLE_PROJECT_MISMATCH",
          message: "ReviewBundle hors Project — fail-closed.",
        };
      }
      reviewBlock = {
        kind: "REVIEW",
        reviewBundleId: lineage.reviewBundle.reviewBundleId,
        status: lineage.reviewBundle.status,
        frozen:
          Boolean(lineage.reviewBundle.frozenAt) ||
          lineage.reviewBundle.status === "ready_for_review",
      };
    }
    if (lineage.claimEvaluation) {
      const status = lineage.claimEvaluation.status;
      claimBlock = {
        kind: "PRODUCT_QUALIFICATION",
        claimEvaluationId: lineage.claimEvaluation.claimEvaluationId,
        status,
        contractResultVerdict: projectContractResultVerdict(status),
      };
    }

    if (lineage.evidence) {
      const productStub = {
        evidenceId: lineage.evidence.evidenceId,
        reviewBundleId: lineage.reviewBundle?.reviewBundleId ?? null,
        claimEvaluationId: lineage.claimEvaluation?.claimEvaluationId ?? null,
        outcome: "UNCLAIMED",
        technicalDetail: { attemptId: attempt.attemptId },
      } as unknown as W3BProductTerminalProjection & {
        technicalDetail: { attemptId: string };
      };
      try {
        const existing = await findExistingW3cPostEvidence({
          oa: input.oa,
          projectId,
          evidenceId: lineage.evidence.evidenceId,
          attemptId: attempt.attemptId,
          product: productStub,
        });
        if (existing?.ok) {
          postEvidenceBlock = {
            kind: "RECOMMENDATION",
            present: true,
            recommendationKind: existing.recommendation?.kind ?? null,
            headline: existing.recommendation?.headline ?? null,
            requiresHumanDecision:
              existing.recommendation?.requiresHumanDecision ?? null,
          };
        }
      } catch {
        // honest absence
      }
    }
  }

  let activeCycleInstanceId: string | null = contract?.cycleInstanceId ?? null;
  try {
    const cycles = await input.oa.cycleServices.cycles.listByProject(projectId);
    const active = cycles.find((c) => {
      const s = String(c.status);
      return (
        s === "active" ||
        s === "in_progress" ||
        s === "open" ||
        s === "running"
      );
    });
    if (active) activeCycleInstanceId = active.cycleInstanceId;
  } catch {
    // optional
  }

  return {
    ok: true,
    context: {
      projectId,
      activeCycleInstanceId,
      executionContract: contract ? contractSummary(contract) : null,
      attempt: attempt
        ? {
            kind: "PRODUCT_EXECUTION_FACT",
            attemptId: attempt.attemptId,
            status: attempt.status,
            selectedAgentRef: attempt.selectedAgentRef ?? null,
            executionContractId: attempt.executionContractId,
          }
        : null,
      cursorReport,
      artifact,
      evidence: evidenceBlock,
      reviewBundle: reviewBlock,
      claimEvaluation: claimBlock,
      postEvidence: postEvidenceBlock,
      provenance: {
        bindingsOk: true,
        readOnly: true,
        query,
      },
      disclosures: [
        "Product Resolution is READ-ONLY — not Truth C / HumanDecision / Evidence authority.",
        "CursorExecutionReport is an EXECUTOR CLAIM, never Evidence by itself.",
        "Artifact preview may be PARTIAL — never invent FULL.",
        "Attempt technical succeeded ≠ Product Result PROVEN.",
      ],
    },
  };
}
```


### CREATED FULL: `projects/sfia-studio/app/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection.ts`
```typescript
/**
 * PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — canonical Execution Continuity Projection.
 *
 * READ-ONLY, derived from Product Truth via Shared Product Resolution.
 * Not a persisted state machine. Distinguishes technical vs product vs post-Evidence.
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  resolveProductExecutionContext,
  type ProductExecutionContext,
  type ProductExecutionContextQuery,
} from "./resolveProductExecutionContext";

export type GovernedExecutionContinuityStage =
  | "PRE_EXECUTION"
  | "ATTEMPT_ACCEPTED"
  | "RUNNING"
  | "PRODUCT_MATERIALIZATION_PENDING"
  | "POST_EVIDENCE_PENDING"
  | "POST_EVIDENCE_COMPLETE"
  | "RECOVERY_REQUIRED";

export type GovernedExecutionNextDeterministicAction =
  | "NONE"
  | "AWAIT_EXTERNAL"
  | "RECORD_RESULT"
  | "MATERIALIZE_PRODUCT"
  | "RUN_POST_EVIDENCE"
  | "HUMAN_DECISION_REQUIRED";

export type GovernedExecutionContinuityProjection = {
  readonly projectId: string;
  readonly activeCycleInstanceId: string | null;
  readonly executionContractId: string | null;
  readonly executionContractVersion: number | null;
  readonly executionContractStatus: string | null;
  readonly attemptId: string | null;
  readonly attemptStatus: string | null;
  readonly stage: GovernedExecutionContinuityStage;
  readonly productOutcome: string | null;
  readonly evidenceId: string | null;
  readonly reviewBundleId: string | null;
  readonly claimEvaluationId: string | null;
  readonly claimEvaluationStatus: string | null;
  readonly postEvidencePresent: boolean;
  readonly nextDeterministicAction: GovernedExecutionNextDeterministicAction;
  readonly humanDecisionRequired: boolean;
  readonly recoveryRequired: boolean;
  readonly reason: string | null;
  readonly blockingCode: string | null;
  readonly context: ProductExecutionContext | null;
};

export type DeriveGovernedExecutionContinuityResult =
  | { readonly ok: true; readonly projection: GovernedExecutionContinuityProjection }
  | { readonly ok: false; readonly code: string; readonly message: string };

const TERMINAL = new Set(["succeeded", "failed", "timeout", "cancelled"]);
const ACCEPTED = new Set(["accepted", "selected"]);
const RUNNING = new Set(["running", "awaiting_result", "pending"]);

/**
 * Pure stage derivation from an already-resolved ProductExecutionContext.
 * Exported for deterministic stage-matrix tests (CR-05).
 */
export function deriveGovernedExecutionContinuityFromContext(
  ctx: ProductExecutionContext,
): GovernedExecutionContinuityProjection {
  const base = {
    projectId: ctx.projectId,
    activeCycleInstanceId: ctx.activeCycleInstanceId,
    executionContractId: ctx.executionContract?.executionContractId ?? null,
    executionContractVersion: ctx.executionContract?.version ?? null,
    executionContractStatus: ctx.executionContract?.status ?? null,
    attemptId: ctx.attempt?.attemptId ?? null,
    attemptStatus: ctx.attempt?.status ?? null,
    productOutcome: null as string | null,
    evidenceId: ctx.evidence.evidenceId,
    reviewBundleId: ctx.reviewBundle.reviewBundleId,
    claimEvaluationId: ctx.claimEvaluation.claimEvaluationId,
    claimEvaluationStatus: ctx.claimEvaluation.status,
    postEvidencePresent: ctx.postEvidence.present,
    context: ctx,
  };

  if (!ctx.executionContract) {
    return {
      ...base,
      stage: "PRE_EXECUTION",
      nextDeterministicAction: "NONE",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: "Aucun ExecutionContract résolu.",
      blockingCode: null,
    };
  }

  if (!ctx.attempt) {
    return {
      ...base,
      stage: "PRE_EXECUTION",
      nextDeterministicAction: "NONE",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: "EC présent — aucun Attempt (Execute explicite requis pour initier).",
      blockingCode: null,
    };
  }

  const status = ctx.attempt.status;

  if (ACCEPTED.has(status)) {
    return {
      ...base,
      stage: "ATTEMPT_ACCEPTED",
      nextDeterministicAction: "AWAIT_EXTERNAL",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: "Attempt accepted — progression technique selon contrat Execute/continue.",
      blockingCode: null,
    };
  }

  if (RUNNING.has(status)) {
    return {
      ...base,
      stage: "RUNNING",
      nextDeterministicAction: "AWAIT_EXTERNAL",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: "Attempt running — pas de terminal inventé.",
      blockingCode: null,
    };
  }

  if (!TERMINAL.has(status)) {
    return {
      ...base,
      stage: "RECOVERY_REQUIRED",
      nextDeterministicAction: "NONE",
      humanDecisionRequired: true,
      recoveryRequired: true,
      reason: `Statut Attempt non qualifiable: ${status}`,
      blockingCode: "ATTEMPT_STATUS_UNKNOWN",
    };
  }

  // Technical terminal
  const hasEvidence = Boolean(ctx.evidence.evidenceId);
  const hasRb = Boolean(ctx.reviewBundle.reviewBundleId);
  const hasCe = Boolean(ctx.claimEvaluation.claimEvaluationId);
  const productQualified = hasEvidence && hasRb && hasCe;

  if (!productQualified) {
    return {
      ...base,
      stage: "PRODUCT_MATERIALIZATION_PENDING",
      nextDeterministicAction: "MATERIALIZE_PRODUCT",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason:
        "Attempt terminal — Evidence/RB/CE incomplets → materialize product déterministe.",
      blockingCode: null,
    };
  }

  if (!ctx.postEvidence.present) {
    return {
      ...base,
      stage: "POST_EVIDENCE_PENDING",
      productOutcome: ctx.claimEvaluation.contractResultVerdict,
      nextDeterministicAction: "RUN_POST_EVIDENCE",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: "Product qualified — post-Evidence Recommendation absente.",
      blockingCode: null,
    };
  }

  const hd = ctx.postEvidence.requiresHumanDecision === true;
  return {
    ...base,
    stage: "POST_EVIDENCE_COMPLETE",
    productOutcome: ctx.claimEvaluation.contractResultVerdict,
    nextDeterministicAction: hd ? "HUMAN_DECISION_REQUIRED" : "NONE",
    humanDecisionRequired: hd,
    recoveryRequired: false,
    reason: hd
      ? "Post-Evidence complete — HumanDecision requise."
      : "Post-Evidence complete — état stable.",
    blockingCode: null,
  };
}

/**
 * Canonical continuity projection. Prefer this over UI-local phase inference.
 */
export async function deriveGovernedExecutionContinuityProjection(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly query?: ProductExecutionContextQuery;
}): Promise<DeriveGovernedExecutionContinuityResult> {
  const resolved = await resolveProductExecutionContext({
    oa: input.oa,
    projectId: input.projectId,
    query: input.query,
  });
  if (!resolved.ok) {
    if (
      resolved.code === "CROSS_PROJECT_REF_REJECTED" ||
      resolved.code === "EVIDENCE_PROJECT_MISMATCH" ||
      resolved.code === "REVIEW_BUNDLE_PROJECT_MISMATCH" ||
      resolved.code === "ATTEMPT_CONTRACT_MISMATCH"
    ) {
      return {
        ok: true,
        projection: {
          projectId: input.projectId,
          activeCycleInstanceId: null,
          executionContractId: null,
          executionContractVersion: null,
          executionContractStatus: null,
          attemptId: null,
          attemptStatus: null,
          stage: "RECOVERY_REQUIRED",
          productOutcome: null,
          evidenceId: null,
          reviewBundleId: null,
          claimEvaluationId: null,
          claimEvaluationStatus: null,
          postEvidencePresent: false,
          nextDeterministicAction: "NONE",
          humanDecisionRequired: true,
          recoveryRequired: true,
          reason: resolved.message,
          blockingCode: resolved.code,
          context: null,
        },
      };
    }
    return resolved;
  }
  return { ok: true, projection: deriveGovernedExecutionContinuityFromContext(resolved.context) };
}
```


### CREATED FULL: `projects/sfia-studio/app/features/project-assistant/w2/reconcileGovernedExecution.ts`
```typescript
/**
 * PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — server-side Reconciler.
 *
 * Idempotent, bounded, no second truth. Derives continuity → applies one
 * deterministic allowed transition at a time → re-derives.
 *
 * INITIATION vs CONTINUATION:
 * - intent=observe / continue without Attempt → never creates Attempt
 * - intent=execute → may initiate Attempt after existing authority checks
 * - existing Attempt → continues deterministic steps of the same EC
 *
 * REHYDRATE remains separate and read-only.
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  governedExecuteAuthorizedContract,
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "./governedExecuteAuthorizedContract";
import { materializeW3bProductTerminal } from "./materializeW3bProductTerminal";
import {
  deriveGovernedExecutionContinuityProjection,
  type GovernedExecutionContinuityProjection,
} from "./deriveGovernedExecutionContinuityProjection";

export type ReconcileGovernedExecutionIntent =
  | "observe"
  | "execute"
  | "continue";

export type ReconcileGovernedExecutionResult =
  | {
      readonly ok: true;
      readonly intent: ReconcileGovernedExecutionIntent;
      readonly projection: GovernedExecutionContinuityProjection;
      readonly transitionsApplied: readonly string[];
      readonly stoppedReason: string;
      readonly product?: unknown;
      readonly postEvidence?: unknown;
      readonly executeResult?: unknown;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly projection?: GovernedExecutionContinuityProjection;
      readonly transitionsApplied?: readonly string[];
    };

const MAX_TRANSITIONS = 6;

async function readProjection(
  oa: RuntimeOaStack,
  projectId: string,
  executionContractId: string,
): Promise<
  | { ok: true; projection: GovernedExecutionContinuityProjection }
  | { ok: false; code: string; message: string }
> {
  return deriveGovernedExecutionContinuityProjection({
    oa,
    projectId,
    query: { kind: "byExecutionContractId", executionContractId },
  });
}

/**
 * Server-owned reconcile/continue for governed execution continuity.
 */
export async function reconcileGovernedExecution(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  readonly intent: ReconcileGovernedExecutionIntent;
  readonly forceLocalAuthority?: boolean;
}): Promise<ReconcileGovernedExecutionResult> {
  const transitions: string[] = [];
  const { oa, projectId, executionContractId, intent } = input;

  let derived = await readProjection(oa, projectId, executionContractId);
  if (!derived.ok) {
    return {
      ok: false,
      code: derived.code,
      message: derived.message,
    };
  }

  if (intent === "observe") {
    return {
      ok: true,
      intent,
      projection: derived.projection,
      transitionsApplied: [],
      stoppedReason: "observe_only",
    };
  }

  // Execute may initiate; continue must not create Attempt.
  if (intent === "continue" && !derived.projection.attemptId) {
    return {
      ok: true,
      intent,
      projection: derived.projection,
      transitionsApplied: [],
      stoppedReason: "no_attempt_continue_is_read_stable",
    };
  }

  let executeResult: unknown;
  let product: unknown;
  let postEvidence: unknown;

  if (intent === "execute" && !derived.projection.attemptId) {
    // Full governed initiation — reuses existing authority/select/start/record path.
    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: input.forceLocalAuthority,
    });
    transitions.push("governedExecuteAuthorizedContract");
    executeResult = executed;
    if (!executed.ok) {
      const afterFail = await readProjection(oa, projectId, executionContractId);
      return {
        ok: false,
        code: executed.code,
        message: executed.message,
        projection: afterFail.ok ? afterFail.projection : derived.projection,
        transitionsApplied: transitions,
      };
    }
    derived = await readProjection(oa, projectId, executionContractId);
    if (!derived.ok) {
      return {
        ok: false,
        code: derived.code,
        message: derived.message,
        transitionsApplied: transitions,
      };
    }
  } else if (intent === "execute" && derived.projection.attemptId) {
    // Attempt already exists — treat as continue of same EC (no second Attempt).
    transitions.push("execute_redelegated_to_continue");
  } else if (intent === "continue" && derived.projection.stage === "ATTEMPT_ACCEPTED") {
    const attemptId = derived.projection.attemptId!;
    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId,
      attemptId,
      forceLocalAuthority: input.forceLocalAuthority,
    });
    transitions.push("governedExecuteStart");
    if (!started.ok) {
      const after = await readProjection(oa, projectId, executionContractId);
      return {
        ok: false,
        code: started.code,
        message: started.message,
        projection: after.ok ? after.projection : derived.projection,
        transitionsApplied: transitions,
      };
    }
    derived = await readProjection(oa, projectId, executionContractId);
    if (!derived.ok) {
      return {
        ok: false,
        code: derived.code,
        message: derived.message,
        transitionsApplied: transitions,
      };
    }
  } else if (intent === "continue" && derived.projection.stage === "RUNNING") {
    const attemptId = derived.projection.attemptId!;
    const recorded = await governedExecuteRecordResult({
      oa,
      projectId,
      executionContractId,
      attemptId,
      forceLocalAuthority: input.forceLocalAuthority,
    });
    transitions.push("governedExecuteRecordResult");
    if (!recorded.ok) {
      // Honest: may still be running / await external — do not invent terminal.
      const after = await readProjection(oa, projectId, executionContractId);
      if (after.ok && after.projection.stage === "RUNNING") {
        return {
          ok: true,
          intent,
          projection: after.projection,
          transitionsApplied: transitions,
          stoppedReason: "still_running_or_await_external",
          executeResult: recorded,
        };
      }
      return {
        ok: false,
        code: recorded.code,
        message: recorded.message,
        projection: after.ok ? after.projection : derived.projection,
        transitionsApplied: transitions,
      };
    }
    derived = await readProjection(oa, projectId, executionContractId);
    if (!derived.ok) {
      return {
        ok: false,
        code: derived.code,
        message: derived.message,
        transitionsApplied: transitions,
      };
    }
  }

  // Bounded deterministic product/post-evidence continuation loop
  for (let i = 0; i < MAX_TRANSITIONS; i++) {
    const p = derived.projection;
    if (p.recoveryRequired) {
      return {
        ok: true,
        intent,
        projection: p,
        transitionsApplied: transitions,
        stoppedReason: "recovery_required",
        executeResult,
        product,
        postEvidence,
      };
    }
    if (p.humanDecisionRequired || p.nextDeterministicAction === "HUMAN_DECISION_REQUIRED") {
      return {
        ok: true,
        intent,
        projection: p,
        transitionsApplied: transitions,
        stoppedReason: "human_decision_required",
        executeResult,
        product,
        postEvidence,
      };
    }
    if (p.nextDeterministicAction === "AWAIT_EXTERNAL") {
      return {
        ok: true,
        intent,
        projection: p,
        transitionsApplied: transitions,
        stoppedReason: "await_external",
        executeResult,
        product,
        postEvidence,
      };
    }
    if (p.nextDeterministicAction === "NONE") {
      return {
        ok: true,
        intent,
        projection: p,
        transitionsApplied: transitions,
        stoppedReason: "stable",
        executeResult,
        product,
        postEvidence,
      };
    }

    if (
      p.nextDeterministicAction === "MATERIALIZE_PRODUCT" ||
      p.nextDeterministicAction === "RUN_POST_EVIDENCE"
    ) {
      if (!p.attemptId) {
        return {
          ok: false,
          code: "RECONCILE_ATTEMPT_MISSING",
          message: "Materialize requis mais attemptId absent.",
          projection: p,
          transitionsApplied: transitions,
        };
      }
      const materialized = await materializeW3bProductTerminal({
        oa,
        projectId,
        attemptId: p.attemptId,
      });
      transitions.push(
        p.nextDeterministicAction === "RUN_POST_EVIDENCE"
          ? "materializeW3bProductTerminal(postEvidence)"
          : "materializeW3bProductTerminal",
      );
      product = materialized.ok ? materialized.product : materialized.product;
      postEvidence = materialized.postEvidence;
      if (!materialized.ok && !materialized.product) {
        const after = await readProjection(oa, projectId, executionContractId);
        return {
          ok: false,
          code: materialized.code,
          message: materialized.message,
          projection: after.ok ? after.projection : p,
          transitionsApplied: transitions,
        };
      }
      derived = await readProjection(oa, projectId, executionContractId);
      if (!derived.ok) {
        return {
          ok: false,
          code: derived.code,
          message: derived.message,
          transitionsApplied: transitions,
        };
      }
      continue;
    }

    // Unknown next action — fail closed rather than invent
    return {
      ok: true,
      intent,
      projection: p,
      transitionsApplied: transitions,
      stoppedReason: `unhandled_next:${p.nextDeterministicAction}`,
      executeResult,
      product,
      postEvidence,
    };
  }

  return {
    ok: true,
    intent,
    projection: derived.projection,
    transitionsApplied: transitions,
    stoppedReason: "transition_limit_reached",
    executeResult,
    product,
    postEvidence,
  };
}

/** @internal — select-only path retained for phased Fake realism tests */
export async function reconcileSelectOnlyForTests(input: {
  oa: RuntimeOaStack;
  projectId: string;
  executionContractId: string;
  forceLocalAuthority?: boolean;
}) {
  return governedExecuteSelectAgent(input);
}
```


### CREATED FULL: `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts`
```typescript
/**
 * Shared Nora cognitive core seam (PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 CORRECTION).
 *
 * BOTH conversation and post_execution invoke this seam, which dispatches to the
 * common Agents Runner path (`runNoraAgentsTurn`). This is NOT a provider.complete
 * wrapper and NOT a second Nora engine.
 *
 * Mode differences (applied here, not in a parallel runtime):
 * - conversation: Memory B / tools / Journal / Product tools / MW6 as caller supplies
 * - post_execution: no tools, no hosted search, no session/Memory B, no Journal,
 *   no Product execution tools, no MW5 (MW5 lives above in conversational turn)
 */
import { resolveConversationProvider } from "@/lib/platform/ai";
import {
  runNoraAgentsTurn,
  type RunNoraAgentsTurnInput,
} from "./runNoraAgentsTurn";

export type NoraCognitiveCompletionMode =
  | "conversation"
  | "post_execution";

/** @deprecated alias — prefer NoraCognitiveCompletionMode */
export type NoraCognitiveMode = NoraCognitiveCompletionMode;

export type NoraCognitiveCoreInvocation = {
  readonly mode: NoraCognitiveCompletionMode;
  readonly correlationId: string;
  readonly projectId: string;
};

type CoreObserver = (invocation: NoraCognitiveCoreInvocation) => void;

const coreObservers = new Set<CoreObserver>();

/**
 * TEST-ONLY — observe every shared-core invocation (conversation + post_execution).
 * Production must not register observers.
 */
export function observeNoraCognitiveCore(observer: CoreObserver): () => void {
  coreObservers.add(observer);
  return () => {
    coreObservers.delete(observer);
  };
}

function notifyCore(invocation: NoraCognitiveCoreInvocation): void {
  for (const observer of coreObservers) {
    try {
      observer(invocation);
    } catch {
      // observers must never break cognition
    }
  }
}

export type NoraCognitiveCompletionResult =
  | {
      readonly ok: true;
      readonly text: string;
      readonly providerId: string | null;
      readonly mode: NoraCognitiveCompletionMode;
      readonly cognitiveRuntime: "agents";
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly providerId: string | null;
      readonly mode: NoraCognitiveCompletionMode;
      readonly cognitiveRuntime: "agents";
    };

/**
 * Shared Agents-backed cognitive execution for both modes.
 * Conversation callers pass through with their full tool/session policy.
 * Post-execution callers get fail-closed defaults (no tools / no MW6 / no Memory B).
 */
export async function runNoraCognitiveCore(
  input: RunNoraAgentsTurnInput & {
    readonly cognitiveMode: NoraCognitiveCompletionMode;
  },
): Promise<Awaited<ReturnType<typeof runNoraAgentsTurn>>> {
  notifyCore({
    mode: input.cognitiveMode,
    correlationId: input.correlationId,
    projectId: input.projectId,
  });

  if (input.cognitiveMode === "post_execution") {
    return runNoraAgentsTurn({
      ...input,
      enableTools: false,
      enableHostedWebSearch: false,
      session: null,
      memoryBAvailability: "unavailable",
      cycleJournalTools: null,
      productExecutionTools: null,
      deterministicHostedWebSearchCalls: undefined,
      campaignBudget: undefined,
      governedAuthority: undefined,
      currentProductContext: undefined,
    });
  }

  return runNoraAgentsTurn(input);
}

/**
 * Post-execution / bounded text completion entry — routes through shared Agents core.
 * Replaces the former provider.complete-only wrapper.
 */
export async function runNoraCognitiveCompletion(input: {
  readonly mode: "post_execution" | "conversation_completion";
  readonly system: string;
  readonly user: string;
  readonly maxChars?: number;
  readonly projectId?: string;
  readonly correlationId?: string;
}): Promise<NoraCognitiveCompletionResult> {
  const mode: NoraCognitiveCompletionMode =
    input.mode === "conversation_completion" ? "conversation" : "post_execution";
  let providerId: string | null = null;
  try {
    const provider = resolveConversationProvider();
    providerId = provider.providerId;
    const turn = await runNoraCognitiveCore({
      cognitiveMode: mode,
      correlationId:
        input.correlationId?.trim() ||
        `cor:nora-core:${mode}:${Date.now().toString(36)}`,
      projectId: input.projectId?.trim() || "prj:nora-cognitive-core",
      systemInstructions: input.system,
      userContent: input.user,
      provider,
      enableTools: false,
      enableHostedWebSearch: false,
      session: null,
      memoryBAvailability: "unavailable",
    });
    const text = turn.text.trim();
    if (!text) {
      return {
        ok: false,
        code: "NORA_COGNITIVE_COMPLETION_EMPTY",
        message: "Shared Nora Agents cognitive core returned empty text.",
        providerId,
        mode,
        cognitiveRuntime: "agents",
      };
    }
    const max = input.maxChars ?? 4000;
    return {
      ok: true,
      text: text.slice(0, max),
      providerId,
      mode,
      cognitiveRuntime: "agents",
    };
  } catch (err) {
    return {
      ok: false,
      code: "NORA_COGNITIVE_COMPLETION_UNAVAILABLE",
      message: err instanceof Error ? err.message : "cognitive_completion_failed",
      providerId,
      mode,
      cognitiveRuntime: "agents",
    };
  }
}
```


### CREATED FULL: `projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts`
```typescript
/**
 * Product Execution Context Agents tools — READ-ONLY, project-bound.
 * Pattern harvested from cycleJournalAgentsTools.ts.
 * Model cannot switch projectId / paths / SQL / credentials.
 */
import { tool } from "@openai/agents";
import type { NoraTurnBudget } from "./turnBudget";
import {
  TOOL_TURN_BUDGET_EXCEEDED_RESULT,
  claimToolSlot,
} from "./turnBudget";
import type {
  ProductExecutionContext,
  ProductExecutionContextQuery,
  ResolveProductExecutionContextResult,
} from "@/features/project-assistant/w2/resolveProductExecutionContext";

export type ProductExecutionToolContext = {
  readonly projectId: string;
  readonly resolve: (
    query: ProductExecutionContextQuery,
  ) => Promise<ResolveProductExecutionContextResult>;
  readonly budget?: NoraTurnBudget;
};

function requireProject(ctx: ProductExecutionToolContext): string | null {
  const p = ctx.projectId.trim();
  return p || null;
}

function boundContextJson(context: ProductExecutionContext): string {
  // Drop large artifact preview from default tool payload — keep summary + completeness.
  const bounded = {
    ...context,
    artifact: {
      kind: context.artifact.kind,
      present: context.artifact.present,
      completeness: context.artifact.completeness,
      preview:
        context.artifact.preview && context.artifact.preview.length > 800
          ? `${context.artifact.preview.slice(0, 800)}…`
          : context.artifact.preview,
    },
  };
  return JSON.stringify(bounded);
}

/**
 * Same-turn Product Resolution tools for Nora Agents Runner.
 * Bound to one projectId — server validates lineage.
 */
export function createProductExecutionAgentsTools(
  ctx: ProductExecutionToolContext,
) {
  const get = tool({
    name: "product_execution_context_get",
    description:
      "Resolve durable Product execution facts for the CURRENT Project only " +
      "(ExecutionContract, Attempt, CursorExecutionReport CLAIM, Artifact summary, " +
      "Evidence, ReviewBundle, ClaimEvaluation, post-Evidence Recommendation). " +
      "Use when the Pilot asks what happened in the last execution — do NOT ask the Pilot for Attempt/EC IDs Studio already holds. " +
      "READ-ONLY. Never Evidence authority. Cursor report is CLAIM not Evidence.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: [],
      properties: {
        selector: {
          type: "string",
          description:
            'Use "latest" (default), or omit. Do not invent foreign project ids.',
        },
        executionContractId: {
          type: "string",
          description:
            "Optional EC id known to belong to this Project. Rejected if foreign.",
        },
        attemptId: {
          type: "string",
          description:
            "Optional Attempt id known to belong to this Project. Rejected if foreign.",
        },
      },
    } as never,
    strict: false,
    execute: async (args: unknown) => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      const projectId = requireProject(ctx);
      if (!projectId) {
        return JSON.stringify({
          ok: false,
          code: "PRODUCT_PROJECT_REQUIRED",
          context: null,
        });
      }
      const o =
        args && typeof args === "object"
          ? (args as Record<string, unknown>)
          : {};
      let query: ProductExecutionContextQuery = { kind: "latest" };
      if (typeof o.attemptId === "string" && o.attemptId.trim()) {
        query = { kind: "byAttemptId", attemptId: o.attemptId.trim() };
      } else if (
        typeof o.executionContractId === "string" &&
        o.executionContractId.trim()
      ) {
        query = {
          kind: "byExecutionContractId",
          executionContractId: o.executionContractId.trim(),
        };
      }
      const resolved = await ctx.resolve(query);
      if (!resolved.ok) {
        return JSON.stringify({
          ok: false,
          code: resolved.code,
          message: resolved.message,
          projectId,
          context: null,
        });
      }
      return JSON.stringify({
        ok: true,
        projectId,
        context: JSON.parse(boundContextJson(resolved.context)),
        disclosure:
          "Product Resolution projection — READ-ONLY; CursorExecutionReport=CLAIM; Attempt succeeded ≠ Product PROVEN.",
      });
    },
  });

  return [get];
}
```


### CREATED FULL: `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraSentinels.ts`
```typescript
/**
 * Client-safe post-Evidence markers — no Node / Agents / provider imports.
 * presentationLabels and UI may import from here only.
 */
export const POST_EVIDENCE_NORA_SENTINEL =
  "[[SFIA_POST_EVIDENCE_NORA_ANALYSIS]]" as const;
export const POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL =
  "[[SFIA_POST_EVIDENCE_NORA_UNAVAILABLE]]" as const;
/** Exact post-Evidence Recommendation payload — durable in existing LPS context. */
export const W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL =
  "[[W3C_POST_EVIDENCE_RECOMMENDATION_V1]]" as const;
```


### CREATED FULL: `projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts`
```typescript
/**
 * PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — CRITICAL CORRECTION PASS 01 proofs.
 *
 * @vitest-environment node
 */
import { describe, expect, it, vi } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { classifyDocsWriteClaimCompletionFailure } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import {
  deriveGovernedExecutionContinuityFromContext,
  type GovernedExecutionContinuityStage,
} from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import type { ProductExecutionContext } from "@/features/project-assistant/w2/resolveProductExecutionContext";
import { projectContractResultVerdict } from "@/lib/oa/evidence-review";
import {
  observeNoraCognitiveCore,
  runNoraCognitiveCompletion,
  runNoraCognitiveCore,
} from "@/lib/nora-cognitive-runtime/noraCognitiveCompletion";
import { createProductExecutionAgentsTools } from "@/lib/nora-cognitive-runtime/productExecutionAgentsTools";
import { analyzePostEvidenceWithProvider } from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import type { ClaimEvaluationStatus } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";

function emptyContext(
  overrides: Partial<ProductExecutionContext> & {
    attempt?: ProductExecutionContext["attempt"];
    executionContract?: ProductExecutionContext["executionContract"];
  } = {},
): ProductExecutionContext {
  return {
    projectId: "prj:stage",
    activeCycleInstanceId: null,
    executionContract: overrides.executionContract ?? null,
    attempt: overrides.attempt ?? null,
    cursorReport: {
      kind: "EXECUTOR_CLAIM",
      present: false,
      status: null,
      summary: null,
      disclosure: "CLAIM_NOT_EVIDENCE",
    },
    artifact: {
      kind: "ARTIFACT",
      present: false,
      completeness: null,
      preview: null,
    },
    evidence: {
      kind: "EVIDENCE",
      evidenceId: null,
      status: null,
      ...(overrides.evidence ?? {}),
    },
    reviewBundle: {
      kind: "REVIEW",
      reviewBundleId: null,
      status: null,
      frozen: false,
      ...(overrides.reviewBundle ?? {}),
    },
    claimEvaluation: {
      kind: "PRODUCT_QUALIFICATION",
      claimEvaluationId: null,
      status: null,
      contractResultVerdict: null,
      ...(overrides.claimEvaluation ?? {}),
    },
    postEvidence: {
      kind: "RECOMMENDATION",
      present: false,
      recommendationKind: null,
      headline: null,
      requiresHumanDecision: null,
      ...(overrides.postEvidence ?? {}),
    },
    provenance: {
      bindingsOk: true,
      readOnly: true,
      query: { kind: "latest" },
    },
    disclosures: [],
    ...overrides,
  };
}

describe("PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 CORRECTION PASS 01", () => {
  it("T-A — closed claim classifier still fail-closed on unknown (R3 non-regression)", () => {
    expect(classifyDocsWriteClaimCompletionFailure("CONFORMITY_HEADINGS_MISSING")).toBe(
      "CONFORMITY_INSUFFICIENCY",
    );
    expect(classifyDocsWriteClaimCompletionFailure("UNKNOWN_X")).toBe("CONTINUITY_FAILURE");
  });

  it("T-UI — TrajectorySurface no longer owns Select→Start→Complete→Materialize chain", () => {
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx",
      ),
      "utf8",
    );
    expect(src).toContain("w2ReconcileGovernedExecutionAction");
    expect(src).toContain("runServerReconcile");
    expect(src).not.toMatch(/w2GovernedExecuteSelectAction/);
    expect(src).not.toMatch(/w2GovernedExecuteStartAction/);
    expect(src).not.toMatch(/w2GovernedExecuteCompleteAction/);
    expect(src).not.toMatch(/w2MaterializeProductOutcomeAction/);
  });

  it("T-C1 — conversation + post_execution both invoke shared Nora cognitive core", async () => {
    const provider = new FakeConversationProvider({
      scripted: ["CORE_SHARED_REPLY", "CORE_POST_EXEC_REPLY"],
    });
    setConversationProviderForTests(provider);

    const invocations: string[] = [];
    const stop = observeNoraCognitiveCore((inv) => {
      invocations.push(inv.mode);
    });

    try {
      // Conversation mode via shared core → Agents Runner
      const conv = await runNoraCognitiveCore({
        cognitiveMode: "conversation",
        correlationId: "cor:t-c1-conv",
        projectId: "prj:t-c1",
        systemInstructions: "sys",
        userContent: "hello",
        provider,
        enableTools: false,
        enableHostedWebSearch: false,
        session: null,
        memoryBAvailability: "unavailable",
      });
      expect(conv.text).toBeTruthy();

      // Post-execution mode via shared completion → same core → Agents Runner
      const post = await runNoraCognitiveCompletion({
        mode: "post_execution",
        system: "sys post",
        user: "facts",
        projectId: "prj:t-c1",
        correlationId: "cor:t-c1-post",
      });
      expect(post.ok).toBe(true);
      if (post.ok) {
        expect(post.cognitiveRuntime).toBe("agents");
        expect(post.mode).toBe("post_execution");
      }
    } finally {
      stop();
      setConversationProviderForTests(null);
    }

    expect(invocations).toEqual(["conversation", "post_execution"]);
  });

  it("T-C2/T-C3 — postEvidence uses shared core; no provider.complete; policies held", async () => {
    const provider = new FakeConversationProvider({
      scripted: [
        "Analyse contract-first: Cursor CLAIM ≠ Evidence; Artifact PARTIAL; NOT_PROVEN.",
      ],
    });
    setConversationProviderForTests(provider);
    const invocations: string[] = [];
    const stop = observeNoraCognitiveCore((inv) => invocations.push(inv.mode));
    const completeSpy = vi.spyOn(provider, "complete");

    try {
      const result = await analyzePostEvidenceWithProvider({
        projectId: "prj:t-c2",
        executionContractId: "xct:t-c2",
        executionContractStatus: "confirmed",
        executionContractAction: "cursor.docs_write.apply",
        attemptId: "xat:t-c2",
        attemptStatus: "succeeded",
        selectedAgentRef: "agt:fake",
        adapterRef: "adp:fake",
        executionMode: "deterministic_fake",
        realProcessInvoked: false,
        evidenceId: "ev:docs-write:xat:t-c2",
        reviewBundleId: "rb:docs-write:xat:t-c2",
        technicalResultRef: "res:t-c2",
        reservations: [],
        productOutcome: "UNCLAIMED",
        claimEvaluationId: "clm:docs-write:xat:t-c2",
        claimEvaluationStatus: "not_proven",
        contractResultVerdict: "NOT_PROVEN",
        artifactReviewCompleteness: "PARTIAL",
        artifactReviewMaterial: "# Partial body",
        cursorReportSummary: "CLAIM succeeded",
      });
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.text).toMatch(/CLAIM|NOT_PROVEN|PARTIAL|contract/i);
      }
    } finally {
      stop();
      completeSpy.mockRestore();
      setConversationProviderForTests(null);
    }

    expect(invocations).toContain("post_execution");
    // Shared Agents path — Fake may still use completeRound adapter, but the
    // postEvidence module must NOT call provider.complete directly.
    const analysisSrc = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/f3/postEvidenceNoraAnalysis.ts",
      ),
      "utf8",
    );
    expect(analysisSrc).not.toMatch(/provider\.complete\(/);
    expect(analysisSrc).toContain("runNoraCognitiveCompletion");
    expect(completeSpy).not.toHaveBeenCalled();

    // Core file must route through runNoraAgentsTurn (not bare complete).
    const coreSrc = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../lib/nora-cognitive-runtime/noraCognitiveCompletion.ts",
      ),
      "utf8",
    );
    expect(coreSrc).toContain("runNoraAgentsTurn");
    expect(coreSrc).toContain("runNoraCognitiveCore");
  });

  it("T-E3 — ContractResult verdict projection is canonical", () => {
    const cases: Array<[ClaimEvaluationStatus, "PASS" | "FAIL" | "NOT_PROVEN"]> = [
      ["pass", "PASS"],
      ["fail", "FAIL"],
      ["not_proven", "NOT_PROVEN"],
      ["pending", "NOT_PROVEN"],
      ["evaluating", "NOT_PROVEN"],
      ["waived", "NOT_PROVEN"],
    ];
    for (const [status, verdict] of cases) {
      expect(projectContractResultVerdict(status)).toBe(verdict);
    }
  });

  it("T-STAGES — every continuity stage has a real derivation condition", () => {
    const ec = {
      kind: "PRODUCT_CONTRACT" as const,
      executionContractId: "xct:1",
      version: 1,
      status: "confirmed",
      action: "cursor.docs_write.apply",
      objective: null,
      decisionId: null,
      cycleInstanceId: null,
    };
    const matrix: Array<{
      stage: GovernedExecutionContinuityStage;
      ctx: ProductExecutionContext;
    }> = [
      {
        stage: "PRE_EXECUTION",
        ctx: emptyContext({ executionContract: null, attempt: null }),
      },
      {
        stage: "PRE_EXECUTION",
        ctx: emptyContext({
          executionContract: ec,
          attempt: null,
        }),
      },
      {
        stage: "ATTEMPT_ACCEPTED",
        ctx: emptyContext({
          executionContract: ec,
          attempt: {
            kind: "PRODUCT_EXECUTION_FACT",
            attemptId: "xat:1",
            status: "accepted",
            selectedAgentRef: "agt:x",
            executionContractId: "xct:1",
          },
        }),
      },
      {
        stage: "RUNNING",
        ctx: emptyContext({
          executionContract: ec,
          attempt: {
            kind: "PRODUCT_EXECUTION_FACT",
            attemptId: "xat:1",
            status: "running",
            selectedAgentRef: "agt:x",
            executionContractId: "xct:1",
          },
        }),
      },
      {
        stage: "PRODUCT_MATERIALIZATION_PENDING",
        ctx: emptyContext({
          executionContract: ec,
          attempt: {
            kind: "PRODUCT_EXECUTION_FACT",
            attemptId: "xat:1",
            status: "succeeded",
            selectedAgentRef: "agt:x",
            executionContractId: "xct:1",
          },
        }),
      },
      {
        stage: "POST_EVIDENCE_PENDING",
        ctx: emptyContext({
          executionContract: ec,
          attempt: {
            kind: "PRODUCT_EXECUTION_FACT",
            attemptId: "xat:1",
            status: "succeeded",
            selectedAgentRef: "agt:x",
            executionContractId: "xct:1",
          },
          evidence: {
            kind: "EVIDENCE",
            evidenceId: "ev:1",
            status: "verified",
          },
          reviewBundle: {
            kind: "REVIEW",
            reviewBundleId: "rb:1",
            status: "ready_for_review",
            frozen: true,
          },
          claimEvaluation: {
            kind: "PRODUCT_QUALIFICATION",
            claimEvaluationId: "clm:1",
            status: "not_proven",
            contractResultVerdict: "NOT_PROVEN",
          },
        }),
      },
      {
        stage: "POST_EVIDENCE_COMPLETE",
        ctx: emptyContext({
          executionContract: ec,
          attempt: {
            kind: "PRODUCT_EXECUTION_FACT",
            attemptId: "xat:1",
            status: "succeeded",
            selectedAgentRef: "agt:x",
            executionContractId: "xct:1",
          },
          evidence: {
            kind: "EVIDENCE",
            evidenceId: "ev:1",
            status: "verified",
          },
          reviewBundle: {
            kind: "REVIEW",
            reviewBundleId: "rb:1",
            status: "ready_for_review",
            frozen: true,
          },
          claimEvaluation: {
            kind: "PRODUCT_QUALIFICATION",
            claimEvaluationId: "clm:1",
            status: "not_proven",
            contractResultVerdict: "NOT_PROVEN",
          },
          postEvidence: {
            kind: "RECOMMENDATION",
            present: true,
            recommendationKind: "clarify",
            headline: "Diagnose",
            requiresHumanDecision: true,
          },
        }),
      },
      {
        stage: "RECOVERY_REQUIRED",
        ctx: emptyContext({
          executionContract: ec,
          attempt: {
            kind: "PRODUCT_EXECUTION_FACT",
            attemptId: "xat:1",
            status: "weird_unknown",
            selectedAgentRef: "agt:x",
            executionContractId: "xct:1",
          },
        }),
      },
    ];

    const seen = new Set<GovernedExecutionContinuityStage>();
    for (const row of matrix) {
      const projection = deriveGovernedExecutionContinuityFromContext(row.ctx);
      expect(projection.stage).toBe(row.stage);
      seen.add(projection.stage);
    }
    // Every union member must be covered (CR-05 — no dead stages).
    const all: GovernedExecutionContinuityStage[] = [
      "PRE_EXECUTION",
      "ATTEMPT_ACCEPTED",
      "RUNNING",
      "PRODUCT_MATERIALIZATION_PENDING",
      "POST_EVIDENCE_PENDING",
      "POST_EVIDENCE_COMPLETE",
      "RECOVERY_REQUIRED",
    ];
    for (const s of all) expect(seen.has(s)).toBe(true);
    expect(all).not.toContain("TECHNICAL_TERMINAL" as never);
    expect(all).not.toContain("PRODUCT_QUALIFIED" as never);
  });

  it("T-D — product_execution_context_get tool is project-bound and read-only", async () => {
    const calls: unknown[] = [];
    const tools = createProductExecutionAgentsTools({
      projectId: "proj-a",
      resolve: async (query) => {
        calls.push(query);
        return {
          ok: false,
          code: "CROSS_PROJECT_REF_REJECTED",
          message: "hostile",
        };
      },
    });
    expect(tools).toHaveLength(1);
    const tool = tools[0]!;
    expect(tool.name).toBe("product_execution_context_get");
    const { RunContext } = await import("@openai/agents");
    const runCtx = new RunContext({});
    const raw = await tool.invoke(
      runCtx,
      JSON.stringify({ attemptId: "xat:foreign" }),
    );
    const parsed = JSON.parse(String(raw)) as { ok: boolean; code?: string };
    expect(parsed.ok).toBe(false);
    expect(parsed.code).toBe("CROSS_PROJECT_REF_REJECTED");
    expect(calls).toEqual([{ kind: "byAttemptId", attemptId: "xat:foreign" }]);
  });

  it("T-E2 source — resolveEvidenceLineage no longer uses prefix preference", () => {
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/w2/resolveProductExecutionContext.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/startsWith\("ev:docs-write:"\)/);
    expect(src).not.toMatch(/startsWith\("ev:w3b:"\)/);
    expect(src).toContain("EVIDENCE_LINEAGE_AMBIGUOUS");
    expect(src).toContain("projectContractResultVerdict");
    expect(src).toContain("resolveCurrentContractResultClaimEvaluation");
    expect(src).toContain("contractResultBindings");
  });
});
```


### MODIFIED DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 9ad23381..6d02f3f2 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -29,11 +29,7 @@ import {
   w2ConfirmExecutionContractAction,
   w2DecideTrajectoryAction,
   w2GovernedExecuteCancelAction,
-  w2GovernedExecuteCompleteAction,
-  w2GovernedExecuteSelectAction,
-  w2GovernedExecuteStartAction,
   w2InspectExecutionContractAction,
-  w2MaterializeProductOutcomeAction,
   w2PrepareExecutionContractAction,
   w2PrepareRecoveryDocsWriteAction,
   w2ProposeTrajectoryOptionsAction,
@@ -41,6 +37,7 @@ import {
   w2ReadCurrentGovernedExecutionContinuityAction,
   w2ReadRecoveryExecutionBindingAction,
   w2ReadRecoveryOwnedDecisionContinuityAction,
+  w2ReconcileGovernedExecutionAction,
   w2RehydrateProductOutcomeAction,
   w2RematerializeDocsWriteEvidenceAction,
 } from "@/features/project-assistant/w2/actions";
@@ -1663,6 +1660,96 @@ export function TrajectorySurface({
    * orchestrate confirm (if required) + authorize + Attempt.
    * Never auto for N3 / Morris gates. Never Recommendation→HD.
    */
+
+  /** Apply server Reconciler result onto UI projection — UI is not workflow owner. */
+  const applyReconcileResult = useCallback(
+    (reconciled: Awaited<ReturnType<typeof w2ReconcileGovernedExecutionAction>>) => {
+      if (!reconciled.ok) {
+        setError(reconciled.message);
+        const proj = reconciled.projection;
+        if (proj?.attemptId) {
+          paintAttemptPhase(
+            proj.stage === "RUNNING"
+              ? "running"
+              : proj.stage === "ATTEMPT_ACCEPTED"
+                ? "accepted"
+                : "terminal",
+            {
+              attemptId: proj.attemptId,
+              attemptStatus: proj.attemptStatus ?? "unknown",
+              selectedAgentRef: "agt:reconciler-projection",
+              adapterId: "reconciler",
+            },
+            null,
+          );
+        }
+        return;
+      }
+      const proj = reconciled.projection;
+      if (proj.attemptId) {
+        const phase =
+          proj.stage === "RUNNING"
+            ? "running"
+            : proj.stage === "ATTEMPT_ACCEPTED"
+              ? "accepted"
+              : "terminal";
+        paintAttemptPhase(
+          phase,
+          {
+            attemptId: proj.attemptId,
+            attemptStatus: proj.attemptStatus ?? "unknown",
+            selectedAgentRef: "agt:reconciler-projection",
+            adapterId: "reconciler",
+          },
+          null,
+        );
+      }
+      const pending =
+        proj.stage === "PRODUCT_MATERIALIZATION_PENDING" ||
+        proj.stage === "POST_EVIDENCE_PENDING";
+      setProductEvidencePending(pending);
+      if (reconciled.product) {
+        setProductOutcome(reconciled.product as never);
+        setProductEvidencePending(false);
+      }
+      if (reconciled.postEvidence) {
+        setPostEvidence(reconciled.postEvidence as never);
+      }
+    },
+    [],
+  );
+
+  /**
+   * Server-owned execute/continue — TrajectorySurface does not sequence
+   * Select→Start→Complete→Materialize locally anymore.
+   */
+  const runServerReconcile = useCallback(
+    async (intent: "execute" | "continue") => {
+      if (!contract) return;
+      setProductEvidencePending(true);
+      let reconciled = await w2ReconcileGovernedExecutionAction({
+        projectId,
+        executionContractId: contract.executionContractId,
+        intent,
+      });
+      // Bounded poll while Attempt still running (async REAL / Fake pending).
+      for (let i = 0; i < 8; i++) {
+        if (!reconciled.ok) break;
+        if (reconciled.projection.stage !== "RUNNING") break;
+        await yieldBrowserPaint();
+        reconciled = await w2ReconcileGovernedExecutionAction({
+          projectId,
+          executionContractId: contract.executionContractId,
+          intent: "continue",
+        });
+      }
+      applyReconcileResult(reconciled);
+      onDurableFactsChanged?.();
+    },
+    [applyReconcileResult, contract, projectId, onDurableFactsChanged],
+  );
+
+
   const executeAsPilot = useCallback(async () => {
     if (continuityMutationBlocked) return;
     if (!contract) return;
@@ -1725,112 +1812,8 @@ export function TrajectorySurface({
       setProductEvidencePending(false);
     });

-    const selected = await w2GovernedExecuteSelectAction({
-      projectId,
-      executionContractId: contract.executionContractId,
-    });
-    if (!selected.ok) {
-      setBusy(null);
-      setError(selected.message);
-      if (selected.attempt) {
-        paintAttemptPhase("accepted", selected.attempt, null);
-      }
-      return;
-    }
-    paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
-    await yieldBrowserPaint();
-
-    if (selected.phase === "terminal") {
-      setBusy(null);
-      paintAttemptPhase("terminal", selected.attempt, selected.statusLabel);
-      onDurableFactsChanged?.();
-      return;
-    }
-
-    const started = await w2GovernedExecuteStartAction({
-      projectId,
-      executionContractId: contract.executionContractId,
-      attemptId: selected.attemptId,
-    });
-    if (!started.ok) {
-      setBusy(null);
-      setError(started.message);
-      if (started.attempt) {
-        flushSync(() => {
-          setAttempt(started.attempt!);
-        });
-      }
-      return;
-    }
-
-    if (started.phase === "terminal") {
-      paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
-      flushSync(() => {
-        setProductEvidencePending(true);
-      });
-      await yieldBrowserPaint();
-      const materializedEarly = await w2MaterializeProductOutcomeAction({
-        projectId,
-        attemptId: started.attemptId,
-      });
-      setBusy(null);
-      if (!materializedEarly.ok) {
-        setError(materializedEarly.message);
-        if (materializedEarly.product) setProductOutcome(materializedEarly.product);
-        if (materializedEarly.postEvidence)
-          setPostEvidence(materializedEarly.postEvidence);
-        return;
-      }
-      flushSync(() => {
-        setProductEvidencePending(false);
-        setProductOutcome(materializedEarly.product);
-        setPostEvidence(materializedEarly.postEvidence ?? null);
-      });
-      onDurableFactsChanged?.();
-      return;
-    }
-
-    paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
-    await yieldBrowserPaint();
-
-    const completed = await w2GovernedExecuteCompleteAction({
-      projectId,
-      executionContractId: contract.executionContractId,
-      attemptId: started.attemptId,
-    });
-    if (!completed.ok) {
-      setBusy(null);
-      setError(completed.message);
-      if (completed.attempt) {
-        flushSync(() => {
-          setAttempt(completed.attempt!);
-        });
-      }
-      return;
-    }
-    paintAttemptPhase(completed.phase, completed.attempt, completed.statusLabel);
-    flushSync(() => {
-      setProductEvidencePending(true);
-    });
-    await yieldBrowserPaint();
-
-    const materialized = await w2MaterializeProductOutcomeAction({
-      projectId,
-      attemptId: completed.attemptId,
-    });
+    await runServerReconcile("execute");
     setBusy(null);
-    if (!materialized.ok) {
-      setError(materialized.message);
-      if (materialized.product) setProductOutcome(materialized.product);
-      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
-      return;
-    }
-    flushSync(() => {
-      setProductEvidencePending(false);
-      setProductOutcome(materialized.product);
-      setPostEvidence(materialized.postEvidence ?? null);
-    });
-    onDurableFactsChanged?.();
   }, [
     continuityMutationBlocked,
     contract,
@@ -1838,6 +1821,7 @@ export function TrajectorySurface({
     projectId,
     inspectPreparedContractId,
     onDurableFactsChanged,
+    runServerReconcile,
   ]);

   const governedExecute = useCallback(async () => {
@@ -1859,120 +1843,15 @@ export function TrajectorySurface({
       setProductOutcome(null);
       setProductEvidencePending(false);
     });
-
-    const selected = await w2GovernedExecuteSelectAction({
-      projectId,
-      executionContractId: contract.executionContractId,
-    });
-    if (!selected.ok) {
-      setBusy(null);
-      setError(selected.message);
-      if (selected.attempt) {
-        paintAttemptPhase("accepted", selected.attempt, null);
-      }
-      return;
-    }
-    paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
-    await yieldBrowserPaint();
-
-    if (selected.phase === "terminal") {
-      setBusy(null);
-      paintAttemptPhase("terminal", selected.attempt, selected.statusLabel);
-      onDurableFactsChanged?.();
-      return;
-    }
-
-    const started = await w2GovernedExecuteStartAction({
-      projectId,
-      executionContractId: contract.executionContractId,
-      attemptId: selected.attemptId,
-    });
-    if (!started.ok) {
-      setBusy(null);
-      setError(started.message);
-      if (started.attempt) {
-        flushSync(() => {
-          setAttempt(started.attempt!);
-        });
-      }
-      return;
-    }
-
-    // Adapter FAIL / governed STOP may terminate at Start — materialize without Complete.
-    if (started.phase === "terminal") {
-      paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
-      flushSync(() => {
-        setProductEvidencePending(true);
-      });
-      await yieldBrowserPaint();
-      const materializedEarly = await w2MaterializeProductOutcomeAction({
-        projectId,
-        attemptId: started.attemptId,
-      });
-      setBusy(null);
-      if (!materializedEarly.ok) {
-        setError(materializedEarly.message);
-        if (materializedEarly.product) setProductOutcome(materializedEarly.product);
-        if (materializedEarly.postEvidence)
-          setPostEvidence(materializedEarly.postEvidence);
-        return;
-      }
-      flushSync(() => {
-        setProductEvidencePending(false);
-        setProductOutcome(materializedEarly.product);
-        setPostEvidence(materializedEarly.postEvidence ?? null);
-      });
-      onDurableFactsChanged?.();
-      return;
-    }
-
-    paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
-    await yieldBrowserPaint();
-
-    const completed = await w2GovernedExecuteCompleteAction({
-      projectId,
-      executionContractId: contract.executionContractId,
-      attemptId: started.attemptId,
-    });
-    if (!completed.ok) {
-      setBusy(null);
-      setError(completed.message);
-      if (completed.attempt) {
-        flushSync(() => {
-          setAttempt(completed.attempt!);
-        });
-      }
-      return;
-    }
-    paintAttemptPhase(completed.phase, completed.attempt, completed.statusLabel);
-    flushSync(() => {
-      setProductEvidencePending(true);
-    });
-    await yieldBrowserPaint();
-
-    const materialized = await w2MaterializeProductOutcomeAction({
-      projectId,
-      attemptId: completed.attemptId,
-    });
+    await runServerReconcile("execute");
     setBusy(null);
-    if (!materialized.ok) {
-      setError(materialized.message);
-      if (materialized.product) setProductOutcome(materialized.product);
-      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
-      return;
-    }
-    flushSync(() => {
-      setProductEvidencePending(false);
-      setProductOutcome(materialized.product);
-      setPostEvidence(materialized.postEvidence ?? null);
-    });
-    onDurableFactsChanged?.();
   }, [
     continuityMutationBlocked,
     contract,
     authorization,
     projectId,
     onDurableFactsChanged,
+    runServerReconcile,
   ]);

   const stopRunningExecution = useCallback(async () => {
@@ -1990,39 +1869,28 @@ export function TrajectorySurface({
       return;
     }
     paintAttemptPhase(cancelled.phase, cancelled.attempt, cancelled.statusLabel);
-    flushSync(() => {
-      setProductEvidencePending(true);
-    });
-    await yieldBrowserPaint();
-    const materialized = await w2MaterializeProductOutcomeAction({
-      projectId,
-      attemptId: cancelled.attemptId,
-    });
+    await runServerReconcile("continue");
     setBusy(null);
-    if (!materialized.ok) {
-      setError(materialized.message);
-      if (materialized.product) setProductOutcome(materialized.product);
-      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
-      return;
-    }
-    flushSync(() => {
-      setProductEvidencePending(false);
-      setProductOutcome(materialized.product);
-      setPostEvidence(materialized.postEvidence ?? null);
-    });
-    onDurableFactsChanged?.();
   }, [
     contract,
     attempt,
     attemptPhase,
     projectId,
     onDurableFactsChanged,
+    runServerReconcile,
   ]);

+  /** Recovery-only — nominal path uses server Reconciler; rehydrate stays read-only. */
   const rehydrateProduct = useCallback(async () => {
     if (!attempt?.attemptId) return;
     setBusy("execute");
     setError(null);
+    if (contract?.executionContractId) {
+      // Prefer continue reconcile (deterministic remaining steps) over bare rehydrate.
+      await runServerReconcile("continue");
+      setBusy(null);
+      return;
+    }
     const result = await w2RehydrateProductOutcomeAction({
       projectId,
       attemptId: attempt.attemptId,
@@ -2035,7 +1903,7 @@ export function TrajectorySurface({
     setProductOutcome(result.product);
     setPostEvidence(result.postEvidence ?? null);
     setProductEvidencePending(false);
-  }, [attempt, projectId]);
+  }, [attempt, projectId, contract, runServerReconcile]);

   /**
    * JOURNEY-INTEGRITY — CTA exclusivity on the mutating primary action.

```


### MODIFIED DIFF: `projects/sfia-studio/app/features/project-assistant/w2/actions.ts`
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index 973eb507..27355ff0 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -39,6 +39,13 @@ import { inspectExecutionContract } from "./inspectExecutionContract";
 import { loadPresentedOptionSet } from "./presentedOptionSet";
 import { readActiveProposalDecisionSubject } from "./activeProposalDecisionSubject";
 import { readCurrentGovernedExecutionContinuity } from "./readCurrentGovernedExecutionContinuity";
+import { deriveGovernedExecutionContinuityProjection } from "./deriveGovernedExecutionContinuityProjection";
+import {
+  reconcileGovernedExecution,
+  type ReconcileGovernedExecutionIntent,
+  type ReconcileGovernedExecutionResult,
+} from "./reconcileGovernedExecution";
+import { resolveProductExecutionContext } from "./resolveProductExecutionContext";
 import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
 import { createNoraSessionContractSourceGroundingReader } from "./resolveContractSourceGrounding";
 import { prepareDocsWriteRecoverySuccessorFromDecision } from "./prepareDocsWriteRecoverySuccessor";
@@ -726,6 +733,98 @@ export async function w2GovernedExecuteAction(input: {
   });
 }

+/**
+ * PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — server Reconciler entry.
+ * observe = read-only projection; execute = may initiate Attempt;
+ * continue = never creates Attempt, advances deterministic steps only.
+ */
+export async function w2ReconcileGovernedExecutionAction(input: {
+  projectId: string;
+  executionContractId: string;
+  intent: ReconcileGovernedExecutionIntent;
+  /** Hostile — ignored for authority widening. */
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+  authorityReceiptRef?: unknown;
+  real?: unknown;
+}): Promise<ReconcileGovernedExecutionResult> {
+  void input.canActAsMorris;
+  void input.claimedAuthorityLevel;
+  void input.authorityReceiptRef;
+  void input.real;
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA indisponibles — reconcile refusé.",
+    };
+  }
+  return reconcileGovernedExecution({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    intent: input.intent,
+  });
+}
+
+/** Canonical continuity projection (post-execution aware). */
+export async function w2DeriveGovernedExecutionContinuityAction(input: {
+  projectId: string;
+  executionContractId?: string;
+}): Promise<
+  | Awaited<ReturnType<typeof deriveGovernedExecutionContinuityProjection>>
+> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA indisponibles.",
+    };
+  }
+  return deriveGovernedExecutionContinuityProjection({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    query: input.executionContractId
+      ? {
+          kind: "byExecutionContractId",
+          executionContractId: input.executionContractId,
+        }
+      : { kind: "latest" },
+  });
+}
+
+/** Shared Product Resolution — READ-ONLY. */
+export async function w2ResolveProductExecutionContextAction(input: {
+  projectId: string;
+  executionContractId?: string;
+  attemptId?: string;
+}): Promise<Awaited<ReturnType<typeof resolveProductExecutionContext>>> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA indisponibles.",
+    };
+  }
+  const query =
+    input.attemptId
+      ? ({ kind: "byAttemptId", attemptId: input.attemptId } as const)
+      : input.executionContractId
+        ? ({
+            kind: "byExecutionContractId",
+            executionContractId: input.executionContractId,
+          } as const)
+        : ({ kind: "latest" } as const);
+  return resolveProductExecutionContext({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    query,
+  });
+}
+
 export async function w2ReadProjectHistoryAction(input: {
   projectId: string;
 }): Promise<ReadW2ProjectHistoryResult> {

```


### MODIFIED DIFF: `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts`
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
index 31363dd8..d4fae268 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
@@ -1,6 +1,6 @@
 /**
  * GAP-4 — bounded post-Evidence Nora/provider analysis.
- * Uses resolveConversationProvider() only. Never instantiates OpenAI here.
+ * Uses shared runNoraCognitiveCompletion (mode=post_execution). Never instantiates OpenAI here.
  * Result is a Recommendation, never a HumanDecision / GO / new contract.
  *
  * W3-D / US-P1-14: when a resolved product-native CKC prompt section is supplied,
@@ -12,21 +12,24 @@
  * client presentation graph (presentationLabels → postEvidenceNoraAnalysis).
  */

-import { resolveConversationProvider } from "@/lib/platform/ai";
 import { buildPostEvidenceNarrativePolicyDisclosure } from "@/lib/nora-cognitive-runtime/postEvidenceNarrativePolicy";
+import { runNoraCognitiveCompletion } from "@/lib/nora-cognitive-runtime/noraCognitiveCompletion";
+import {
+  POST_EVIDENCE_NORA_SENTINEL,
+  POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL,
+  W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL,
+} from "./postEvidenceNoraSentinels";
+
+export {
+  POST_EVIDENCE_NORA_SENTINEL,
+  POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL,
+  W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL,
+} from "./postEvidenceNoraSentinels";

 /** Same marker string as f2/ckcCognitiveContext — keep in sync (string only). */
 const CKC_COGNITIVE_REASONING_SYSTEM_MARKER =
   "SFIA Studio CKC COGNITIVE REASONING" as const;

-export const POST_EVIDENCE_NORA_SENTINEL =
-  "[[SFIA_POST_EVIDENCE_NORA_ANALYSIS]]" as const;
-export const POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL =
-  "[[SFIA_POST_EVIDENCE_NORA_UNAVAILABLE]]" as const;
-/** Exact post-Evidence Recommendation payload — durable in existing LPS context. */
-export const W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL =
-  "[[W3C_POST_EVIDENCE_RECOMMENDATION_V1]]" as const;
-
 export type PostEvidenceAnalysisFacts = {
   projectId: string;
   executionContractId: string;
@@ -189,40 +192,31 @@ export async function analyzePostEvidenceWithProvider(
   facts: PostEvidenceAnalysisFacts,
   options?: AnalyzePostEvidenceOptions,
 ): Promise<PostEvidenceAnalysisResult> {
-  let providerId: string | null = null;
-  try {
-    const provider = resolveConversationProvider();
-    providerId = provider.providerId;
-    const completion = await provider.complete([
-      {
-        role: "system",
-        content: buildPostEvidenceSystemPrompt(options?.ckcPromptSection),
-      },
-      {
-        role: "user",
-        content: `Faits durables post-Evidence (bornés):\n${boundedFactsJson(facts)}`,
-      },
-    ]);
-    const text = completion.text.trim();
-    if (!text) {
-      return {
-        ok: false,
-        code: "POST_EVIDENCE_ANALYSIS_UNAVAILABLE",
-        message: "Provider post-Evidence a renvoyé un texte vide.",
-        providerId,
-      };
-    }
-    return { ok: true, text: text.slice(0, 4000), providerId };
-  } catch (err) {
-    const message =
-      err instanceof Error ? err.message : "provider_post_evidence_failed";
+  // Shared Nora cognitive CORE (Agents Runner) — mode=post_execution.
+  // Same seam as conversation (runNoraCognitiveTurn → runNoraCognitiveCore).
+  // No Memory B / MW5 / hosted search / tools — applied by core mode defaults.
+  // This module must NOT be imported by client presentation (use postEvidenceNoraSentinels).
+  const completion = await runNoraCognitiveCompletion({
+    mode: "post_execution",
+    system: buildPostEvidenceSystemPrompt(options?.ckcPromptSection),
+    user: `Faits durables post-Evidence (bornés):\n${boundedFactsJson(facts)}`,
+    maxChars: 4000,
+    projectId: facts.projectId,
+    correlationId: `cor:w3c-post-evidence:${facts.attemptId}`,
+  });
+  if (!completion.ok) {
     return {
       ok: false,
       code: "POST_EVIDENCE_ANALYSIS_UNAVAILABLE",
-      message,
-      providerId,
+      message: completion.message,
+      providerId: completion.providerId,
     };
   }
+  return {
+    ok: true,
+    text: completion.text,
+    providerId: completion.providerId ?? "unknown",
+  };
 }

 /** Evidence-scoped LPS marker — binds Nora text to a specific W3-B evidenceId. */

```


### MODIFIED DIFF: `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts`
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
index eece1707..54076f12 100644
--- a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
+++ b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
@@ -12,7 +12,7 @@ import {
 import {
   POST_EVIDENCE_NORA_SENTINEL,
   POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL,
-} from "./f3/postEvidenceNoraAnalysis";
+} from "./f3/postEvidenceNoraSentinels";
 import type { F3Mode } from "./f3/types";

 export type RecommendationFreshness =

```


### MODIFIED DIFF: `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 8ddfd88a..08b3e5bd 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -424,6 +424,31 @@ export async function orchestrateProjectAssistantTurn(input: {
       outputType: NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
       cycleJournalCycleInstanceId:
         input.studioCognitiveContext?.activeCycle?.cycleInstanceId ?? null,
+      productExecutionTools: {
+        projectId: project.projectId,
+        resolve: async (query) => {
+          // Dynamic imports — keep orchestrateTurn loadable in jsdom without
+          // evaluating vertical-slice-runtime serverGuard at module load.
+          const [{ getRuntimeApplicationService }, { resolveProductExecutionContext }] =
+            await Promise.all([
+              import("@/lib/vertical-slice-runtime"),
+              import("./w2/resolveProductExecutionContext"),
+            ]);
+          const oa = getRuntimeApplicationService().oa;
+          if (!oa) {
+            return {
+              ok: false as const,
+              code: "OA_UNAVAILABLE",
+              message: "OA runtime indisponible pour Product Resolution.",
+            };
+          }
+          return resolveProductExecutionContext({
+            oa,
+            projectId: project.projectId,
+            query,
+          });
+        },
+      },
     });

     let assistantText = turn.text;

```


### MODIFIED DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 4c9f7cf1..39085a42 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -404,3 +404,16 @@ export {
   createCycleJournalAgentsTools,
   type CycleJournalToolContext,
 } from "./cycleJournalAgentsTools";
+export {
+  createProductExecutionAgentsTools,
+  type ProductExecutionToolContext,
+} from "./productExecutionAgentsTools";
+export {
+  runNoraCognitiveCompletion,
+  runNoraCognitiveCore,
+  observeNoraCognitiveCore,
+  type NoraCognitiveCompletionMode,
+  type NoraCognitiveMode,
+  type NoraCognitiveCompletionResult,
+  type NoraCognitiveCoreInvocation,
+} from "./noraCognitiveCompletion";

```


### MODIFIED DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
index d1e13af3..0ed5ec8c 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
@@ -140,13 +140,14 @@ export function toolDefinitionsFromModelRequest(
     }
     const name = String(t.name ?? "");
     if (!name) continue;
-    // CYCLE JOURNAL — Agents-local READ-ONLY tools on the same Runner.
+    // CYCLE JOURNAL / PRODUCT RESOLUTION — Agents-local READ-ONLY tools on the same Runner.
     // Executed by Agents SDK tool.invoke, not via ConversationProvider.completeRound.
     // Skip from Fake/provider ToolDefinition projection (same pattern as hosted web_search).
     if (
       name === "cycle_journal_search" ||
       name === "cycle_journal_get_entry" ||
-      name === "cycle_journal_get_sources"
+      name === "cycle_journal_get_sources" ||
+      name === "product_execution_context_get"
     ) {
       continue;
     }

```


### MODIFIED DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index d07acc73..a3b5117e 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -44,6 +44,10 @@ import {
   createCycleJournalAgentsTools,
   type CycleJournalToolContext,
 } from "./cycleJournalAgentsTools";
+import {
+  createProductExecutionAgentsTools,
+  type ProductExecutionToolContext,
+} from "./productExecutionAgentsTools";
 import type { MemoryBAvailability } from "./memoryBAvailability";
 import {
   createNoraTurnBudget,
@@ -159,6 +163,11 @@ export type RunNoraAgentsTurnInput = {
    * Never Truth C. Optional; omitted when no active cycle / session.
    */
   cycleJournalTools?: CycleJournalToolContext | null;
+  /**
+   * PRODUCT EXECUTION CONTEXT — same-turn READ-ONLY tools bound to projectId.
+   * Never authority / HD / Evidence. Optional.
+   */
+  productExecutionTools?: ProductExecutionToolContext | null;
 };

 export type RunNoraAgentsTurnHostedSearchObserve = {
@@ -500,9 +509,19 @@ export async function runNoraAgentsTurn(
           budget,
         })
       : [];
+  const productTools =
+    input.productExecutionTools &&
+    input.productExecutionTools.projectId.trim() &&
+    enableTools
+      ? createProductExecutionAgentsTools({
+          ...input.productExecutionTools,
+          budget,
+        })
+      : [];
   const tools = [
     ...sfiaTools,
     ...journalTools,
+    ...productTools,
     ...(hostedTool ? [hostedTool] : []),
   ];


```


### MODIFIED DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index 58785632..8ccd697e 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -20,10 +20,10 @@ import {
 } from "./memoryBCompaction";
 import { resolveNoraSessionSqlitePath } from "./sessionPaths";
 import {
-  runNoraAgentsTurn,
   shouldUseProviderAgentsModelAdapter,
   type RunNoraAgentsTurnHostedSearchObserve,
 } from "./runNoraAgentsTurn";
+import { runNoraCognitiveCore } from "./noraCognitiveCompletion";
 import type { NoraCognitiveTurnResult } from "./types";
 import {
   decideCognitiveStrategy,
@@ -217,6 +217,11 @@ export type RunNoraCognitiveTurnInput = {
    * Bound to ProductSqliteSession from Memory B probe when available.
    */
   cycleJournalCycleInstanceId?: string | null;
+  /**
+   * PRODUCT-CONTINUITY — optional READ-ONLY Product Execution tools.
+   * Bound by caller to projectId; never inject foreign OA handles via model args.
+   */
+  productExecutionTools?: import("./productExecutionAgentsTools").ProductExecutionToolContext | null;
 };

 /**
@@ -722,7 +727,8 @@ export async function runNoraCognitiveTurn(
       systemInstructions,
       readDisclosure,
     );
-    const turn = await runNoraAgentsTurn({
+    const turn = await runNoraCognitiveCore({
+      cognitiveMode: "conversation",
       correlationId: input.correlationId,
       projectId: input.projectId,
       systemInstructions,
@@ -889,7 +895,8 @@ export async function runNoraCognitiveTurn(
   }

   try {
-    const turn = await runNoraAgentsTurn({
+    const turn = await runNoraCognitiveCore({
+      cognitiveMode: "conversation",
       correlationId: input.correlationId,
       projectId: input.projectId,
       systemInstructions,
@@ -932,6 +939,7 @@ export async function runNoraCognitiveTurn(
               cycleInstanceId: input.cycleJournalCycleInstanceId.trim(),
             }
           : null,
+      productExecutionTools: input.productExecutionTools ?? null,
     });
     const observations = [
       ...(input.sourceObservationFacts ?? []),

```


### MODIFIED DIFF: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx`
```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
index efa8d5a1..6bbdbec7 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
@@ -20,6 +20,7 @@ const {
   executeStartMock,
   executeCompleteMock,
   materializeMock,
+  reconcileMock,
   readActiveDecisionSubjectMock,
   readGovernedExecutionContinuityMock,
   readRecoveryExecutionBindingMock,
@@ -38,6 +39,7 @@ const {
   executeStartMock: vi.fn(),
   executeCompleteMock: vi.fn(),
   materializeMock: vi.fn(),
+  reconcileMock: vi.fn(),
   readActiveDecisionSubjectMock: vi.fn(),
   readGovernedExecutionContinuityMock: vi.fn(),
   readRecoveryExecutionBindingMock: vi.fn(),
@@ -77,6 +79,8 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2GovernedExecuteCancelAction: vi.fn(),
   w2MaterializeProductOutcomeAction: (...args: unknown[]) =>
     materializeMock(...args),
+  w2ReconcileGovernedExecutionAction: (...args: unknown[]) =>
+    reconcileMock(...args),
   w2RehydrateProductOutcomeAction: vi.fn(),
   w2RematerializeDocsWriteEvidenceAction: vi.fn(),
   w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
@@ -187,6 +191,7 @@ beforeEach(() => {
     executeStartMock,
     executeCompleteMock,
     materializeMock,
+    reconcileMock,
     readActiveDecisionSubjectMock,
     readGovernedExecutionContinuityMock,
     readRecoveryExecutionBindingMock,
@@ -388,6 +393,100 @@ describe("CR-PCONT-05 TrajectorySurface post-execution recovery", () => {
       attemptCreated: false,
     });

+    reconcileMock.mockResolvedValue({
+      ok: true,
+      intent: "execute",
+      transitionsApplied: [
+        "governedExecuteAuthorizedContract",
+        "materializeW3bProductTerminal",
+      ],
+      stoppedReason: "stable",
+      projection: {
+        projectId: "proj-pcont-ui",
+        activeCycleInstanceId: null,
+        executionContractId: "xct:pcont-ui",
+        executionContractVersion: 1,
+        executionContractStatus: "confirmed",
+        attemptId: ATTEMPT_ID,
+        attemptStatus: "succeeded",
+        stage: "POST_EVIDENCE_COMPLETE",
+        productOutcome: "NOT_PROVEN",
+        evidenceId: "ev:docs-write:pcont-ui",
+        reviewBundleId: "rb:docs-write:pcont-ui",
+        claimEvaluationId: "ce:pcont-ui",
+        claimEvaluationStatus: "not_proven",
+        postEvidencePresent: true,
+        nextDeterministicAction: "HUMAN_DECISION_REQUIRED",
+        humanDecisionRequired: true,
+        recoveryRequired: false,
+        reason: "Post-Evidence complete",
+        blockingCode: null,
+        context: null,
+      },
+      product: {
+        outcome: "UNCLAIMED",
+        businessHeadline:
+          "Exécution technique réussie — résultat produit non prouvé",
+        businessReason: "ClaimEvaluation not_proven",
+        claimAllowed: false,
+        evidenceId: "ev:docs-write:pcont-ui",
+        reviewBundleId: "rb:docs-write:pcont-ui",
+        claimEvaluationId: "ce:pcont-ui",
+        claimEvaluationStatus: "not_proven",
+        contractResultVerdict: "NOT_PROVEN",
+        evidenceStatus: "available",
+        evidenceSummary: "Artifact available",
+        reviewBundleCompleteness: "partial",
+        governedBoundary: "Fake docs_write",
+        technicalDetail: {
+          attemptId: ATTEMPT_ID,
+          attemptStatus: "succeeded",
+          resultRef: "res:pcont-ui",
+          errorRef: null,
+          stopReason: null,
+          executionContractId: "xct:pcont-ui",
+          executionContractVersion: 1,
+        },
+        reservations: [],
+        antiClaims: {
+          ready: false,
+          w3Closed: false,
+          productCompletionComplete: false,
+          runtimeV3Adopted: false,
+          realProven: false,
+          cycleAutoClosed: false,
+          projectAutoArchived: false,
+        },
+        cycleInstanceClosed: false,
+        projectArchived: false,
+        noraInvoked: false,
+        replanInvoked: false,
+        realExecution: false,
+      },
+      postEvidence: {
+        ok: true,
+        recommendation: {
+          kind: "clarify",
+          headline: "Diagnostiquer le gap Evidence",
+          rationale: "NOT_PROVEN — diagnostiquer le gap Evidence.",
+          nextStep: "Revoir les expectedOutputs",
+          requiresHumanDecision: true,
+        },
+        analysisText: "Analyse post-Evidence",
+        noraInvoked: true,
+        lpsVersion: 3,
+        executionReport: {
+          cursorStatus: "succeeded",
+          workPerformedSummary: "Wrote functional design",
+          artifactsSummary: "créé:docs/x.md",
+          validationsSummary: null,
+          blockersSummary: null,
+          reservationsSummary: null,
+          artifactReviewCompleteness: "FULL",
+        },
+      },
+    });
+
     executeSelectMock.mockResolvedValue({
       ok: true,
       phase: "accepted",
@@ -583,7 +682,8 @@ describe("CR-PCONT-05 TrajectorySurface post-execution recovery", () => {
     expect(screen.getByTestId("w3c-post-evidence")).toBeVisible();
     expect(screen.queryByTestId("w2-error")).toBeNull();
     expect(screen.queryByText(/Contradiction de continuité/)).toBeNull();
-    expect(executeSelectMock).toHaveBeenCalledTimes(1);
+    expect(reconcileMock).toHaveBeenCalled();
+    expect(executeSelectMock).toHaveBeenCalledTimes(0);
     expect(proposeMock).toHaveBeenCalledTimes(2);
     expect(proposeMock.mock.calls[1]![0]).toEqual(
       expect.objectContaining({ projectId: "prj:pcont-ui" }),

```


### MODIFIED DIFF: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx`
```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
index 8c309b1d..3b14d484 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
@@ -10,7 +10,7 @@ import type { GetProjectSuccess } from "@/features/pre-m6-product-ui/types";
 import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
 import type { F3ExecutePayload } from "@/features/project-assistant/f3/types";
 import type { F3M3ResolvedPayload } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
-import { POST_EVIDENCE_NORA_SENTINEL } from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
+import { POST_EVIDENCE_NORA_SENTINEL } from "@/features/project-assistant/f3/postEvidenceNoraSentinels";
 import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";

 const F3_LABELS = {

```


### MODIFIED DIFF: `projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts`
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts
index 03bee296..9ebece02 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts
@@ -31,6 +31,8 @@ import { confirmExecutionContractForAuthorization } from "@/features/project-ass
 import {
   classifyDocsWriteClaimCompletionFailure,
   governedExecuteAuthorizedContract,
+  governedExecuteSelectAgent,
+  governedExecuteStart,
 } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
 import * as claimCompletionMod from "@/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion";
 import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
@@ -38,6 +40,9 @@ import {
   materializeProductOutcomeFromAttempt,
   rehydrateProductOutcomeFromAttempt,
 } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
+import { reconcileGovernedExecution } from "@/features/project-assistant/w2/reconcileGovernedExecution";
+import { resolveProductExecutionContext } from "@/features/project-assistant/w2/resolveProductExecutionContext";
+import { deriveGovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
 import {
   NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
@@ -935,3 +940,434 @@ describe("POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 integrated (R1–R4)"
     );
   });
 });
+
+describe("PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 reconciler integrated", () => {
+  it("R1 — observe/continue after authorize never creates Attempt", async () => {
+    const ctx = await bootHandoffJourney("pcont-r1");
+    const executionContractId = await prepareInspectConfirmAuthorize(ctx);
+
+    const observed = await reconcileGovernedExecution({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId,
+      intent: "observe",
+      forceLocalAuthority: true,
+    });
+    expect(observed.ok).toBe(true);
+    if (!observed.ok) return;
+    expect(observed.projection.stage).toBe("PRE_EXECUTION");
+    expect(observed.projection.attemptId).toBeNull();
+    expect(observed.transitionsApplied).toEqual([]);
+
+    const continued = await reconcileGovernedExecution({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId,
+      intent: "continue",
+      forceLocalAuthority: true,
+    });
+    expect(continued.ok).toBe(true);
+    if (!continued.ok) return;
+    expect(continued.stoppedReason).toBe("no_attempt_continue_is_read_stable");
+    expect(continued.projection.attemptId).toBeNull();
+
+    const listed =
+      await ctx.oa.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId,
+      });
+    expect(listed.ok).toBe(true);
+    if (!listed.ok) return;
+    expect(listed.attempts).toHaveLength(0);
+  });
+
+  it("R4/R5/R6 — terminal→restart→continue materializes; idempotent; resolve latest", async () => {
+    const nora = new FakeConversationProvider({
+      scripted: Array(12).fill("PCONT_RECONCILE_NORA"),
+    });
+    setConversationProviderForTests(nora);
+
+    const ctx = await bootHandoffJourney("pcont-r456");
+    const executionContractId = await prepareInspectConfirmAuthorize(ctx);
+
+    const claimSpy = vi
+      .spyOn(claimCompletionMod, "completeDocsWriteClaimEvidenceCompletion")
+      .mockResolvedValue({
+        ok: false,
+        code: "CONFORMITY_HEADINGS_MISSING",
+        message: "missing required headings (pcont harness)",
+      });
+
+    let executed: Awaited<
+      ReturnType<typeof governedExecuteAuthorizedContract>
+    >;
+    try {
+      executed = await governedExecuteAuthorizedContract({
+        oa: ctx.oa,
+        projectId: ctx.projectId,
+        executionContractId,
+        forceLocalAuthority: true,
+        missionResultRefsRoot: ctx.refsRoot,
+      });
+    } finally {
+      claimSpy.mockRestore();
+    }
+    expect(executed.ok).toBe(true);
+    if (!executed.ok) throw new Error(JSON.stringify(executed));
+    expect(executed.attemptStatus).toBe("succeeded");
+
+    const beforeMat = await deriveGovernedExecutionContinuityProjection({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      query: { kind: "byExecutionContractId", executionContractId },
+    });
+    expect(beforeMat.ok).toBe(true);
+    if (!beforeMat.ok) return;
+    expect(beforeMat.projection.stage).toBe("PRODUCT_MATERIALIZATION_PENDING");
+    expect(beforeMat.projection.nextDeterministicAction).toBe(
+      "MATERIALIZE_PRODUCT",
+    );
+
+    // TRUE RESTART — dispose runtime A, reopen B on same SQLite.
+    const runtimeB = reopenRuntimeOnSameDb(ctx);
+    const oaB = runtimeB.oa!;
+
+    const reconciled = await reconcileGovernedExecution({
+      oa: oaB,
+      projectId: ctx.projectId,
+      executionContractId,
+      intent: "continue",
+      forceLocalAuthority: true,
+    });
+    expect(reconciled.ok).toBe(true);
+    if (!reconciled.ok) throw new Error(JSON.stringify(reconciled));
+    expect(reconciled.projection.stage).toMatch(
+      /^(POST_EVIDENCE_COMPLETE|POST_EVIDENCE_PENDING)$/,
+    );
+    expect(reconciled.projection.evidenceId).toBeTruthy();
+    expect(reconciled.projection.reviewBundleId).toBeTruthy();
+    expect(reconciled.projection.claimEvaluationId).toBeTruthy();
+    expect(reconciled.transitionsApplied.some((t) =>
+      t.includes("materializeW3bProductTerminal"),
+    )).toBe(true);
+
+    const attemptId = reconciled.projection.attemptId!;
+    const evidenceId = reconciled.projection.evidenceId!;
+    const rbId = reconciled.projection.reviewBundleId!;
+    const ceId = reconciled.projection.claimEvaluationId!;
+
+    // Idempotence — second continue must not duplicate durable objects.
+    const again = await reconcileGovernedExecution({
+      oa: oaB,
+      projectId: ctx.projectId,
+      executionContractId,
+      intent: "continue",
+      forceLocalAuthority: true,
+    });
+    expect(again.ok).toBe(true);
+    if (!again.ok) return;
+    expect(again.projection.attemptId).toBe(attemptId);
+    expect(again.projection.evidenceId).toBe(evidenceId);
+    expect(again.projection.reviewBundleId).toBe(rbId);
+    expect(again.projection.claimEvaluationId).toBe(ceId);
+    expect(again.projection.stage).toBe("POST_EVIDENCE_COMPLETE");
+
+    const listed =
+      await oaB.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId,
+      });
+    expect(listed.ok).toBe(true);
+    if (!listed.ok) return;
+    expect(listed.attempts.filter((a) => a.status === "succeeded")).toHaveLength(
+      1,
+    );
+
+    const resolved = await resolveProductExecutionContext({
+      oa: oaB,
+      projectId: ctx.projectId,
+      query: { kind: "latest" },
+    });
+    expect(resolved.ok).toBe(true);
+    if (!resolved.ok) return;
+    expect(resolved.context.attempt?.attemptId).toBe(attemptId);
+    expect(resolved.context.cursorReport.disclosure).toBe("CLAIM_NOT_EVIDENCE");
+    expect(resolved.context.provenance.readOnly).toBe(true);
+
+    const hostile = await resolveProductExecutionContext({
+      oa: oaB,
+      projectId: "prj:hostile-other",
+      query: {
+        kind: "byExecutionContractId",
+        executionContractId,
+      },
+    });
+    expect(hostile.ok).toBe(false);
+    if (hostile.ok) return;
+    expect(hostile.code).toMatch(/CROSS_PROJECT|NOT_FOUND|REJECTED/);
+  });
+
+  it("execute intent initiates Attempt; re-execute does not create a second", async () => {
+    const nora = new FakeConversationProvider({
+      scripted: Array(12).fill("PCONT_EXECUTE_NORA"),
+    });
+    setConversationProviderForTests(nora);
+
+    const ctx = await bootHandoffJourney("pcont-exec");
+    const executionContractId = await prepareInspectConfirmAuthorize(ctx);
+
+    const claimSpy = vi
+      .spyOn(claimCompletionMod, "completeDocsWriteClaimEvidenceCompletion")
+      .mockResolvedValue({
+        ok: false,
+        code: "CONFORMITY_HEADINGS_MISSING",
+        message: "pcont execute harness",
+      });
+
+    let first: Awaited<ReturnType<typeof reconcileGovernedExecution>>;
+    try {
+      first = await reconcileGovernedExecution({
+        oa: ctx.oa,
+        projectId: ctx.projectId,
+        executionContractId,
+        intent: "execute",
+        forceLocalAuthority: true,
+      });
+    } finally {
+      claimSpy.mockRestore();
+    }
+    expect(first.ok).toBe(true);
+    if (!first.ok) throw new Error(JSON.stringify(first));
+    expect(first.projection.attemptId).toBeTruthy();
+    const attemptId = first.projection.attemptId!;
+
+    const second = await reconcileGovernedExecution({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId,
+      intent: "execute",
+      forceLocalAuthority: true,
+    });
+    expect(second.ok).toBe(true);
+    if (!second.ok) return;
+    expect(second.projection.attemptId).toBe(attemptId);
+    expect(
+      second.transitionsApplied.includes("execute_redelegated_to_continue") ||
+        second.projection.stage === "POST_EVIDENCE_COMPLETE" ||
+        second.stoppedReason === "human_decision_required" ||
+        second.stoppedReason === "stable",
+    ).toBe(true);
+
+    const listed =
+      await ctx.oa.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId,
+      });
+    expect(listed.ok).toBe(true);
+    if (!listed.ok) return;
+    expect(listed.attempts).toHaveLength(1);
+  });
+
+  it("R2 — ACCEPTED restart: same Attempt, continue without duplicate", async () => {
+    const ctx = await bootHandoffJourney("pcont-r2");
+    const executionContractId = await prepareInspectConfirmAuthorize(ctx);
+
+    // Harness-only SELECT to freeze durable ATTEMPT_ACCEPTED (not product path).
+    const selected = await governedExecuteSelectAgent({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(selected.ok).toBe(true);
+    if (!selected.ok) throw new Error(JSON.stringify(selected));
+    expect(selected.phase).toBe("accepted");
+    expect(selected.attemptStatus).toMatch(/^(accepted|selected)$/);
+    const attemptId = selected.attemptId!;
+
+    const listedA =
+      await ctx.oa.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId,
+      });
+    expect(listedA.ok).toBe(true);
+    if (!listedA.ok) return;
+    expect(listedA.attempts).toHaveLength(1);
+
+    const projA = await deriveGovernedExecutionContinuityProjection({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      query: { kind: "byExecutionContractId", executionContractId },
+    });
+    expect(projA.ok).toBe(true);
+    if (!projA.ok) return;
+    expect(projA.projection.stage).toBe("ATTEMPT_ACCEPTED");
+    expect(projA.projection.attemptId).toBe(attemptId);
+    expect(projA.projection.evidenceId).toBeNull();
+
+    // TRUE RESTART
+    const runtimeB = reopenRuntimeOnSameDb(ctx);
+    const oaB = runtimeB.oa!;
+
+    const projB = await deriveGovernedExecutionContinuityProjection({
+      oa: oaB,
+      projectId: ctx.projectId,
+      query: { kind: "byExecutionContractId", executionContractId },
+    });
+    expect(projB.ok).toBe(true);
+    if (!projB.ok) return;
+    expect(projB.projection.stage).toBe("ATTEMPT_ACCEPTED");
+    expect(projB.projection.attemptId).toBe(attemptId);
+    expect(projB.projection.evidenceId).toBeNull();
+    expect(projB.projection.claimEvaluationId).toBeNull();
+
+    const listedB =
+      await oaB.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId,
+      });
+    expect(listedB.ok).toBe(true);
+    if (!listedB.ok) return;
+    expect(listedB.attempts).toHaveLength(1);
+    expect(listedB.attempts[0]!.attemptId).toBe(attemptId);
+
+    const claimSpy = vi
+      .spyOn(claimCompletionMod, "completeDocsWriteClaimEvidenceCompletion")
+      .mockResolvedValue({
+        ok: false,
+        code: "CONFORMITY_HEADINGS_MISSING",
+        message: "r2 harness",
+      });
+    let continued: Awaited<ReturnType<typeof reconcileGovernedExecution>>;
+    try {
+      continued = await reconcileGovernedExecution({
+        oa: oaB,
+        projectId: ctx.projectId,
+        executionContractId,
+        intent: "continue",
+        forceLocalAuthority: true,
+      });
+    } finally {
+      claimSpy.mockRestore();
+    }
+    expect(continued.ok).toBe(true);
+    if (!continued.ok) throw new Error(JSON.stringify(continued));
+    expect(continued.projection.attemptId).toBe(attemptId);
+
+    const listedAfter =
+      await oaB.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId,
+      });
+    expect(listedAfter.ok).toBe(true);
+    if (!listedAfter.ok) return;
+    expect(listedAfter.attempts).toHaveLength(1);
+    expect(listedAfter.attempts[0]!.attemptId).toBe(attemptId);
+  });
+
+  it("R3 — RUNNING restart: same Attempt, honest continue, no duplicate", async () => {
+    const ctx = await bootHandoffJourney("pcont-r3");
+    const executionContractId = await prepareInspectConfirmAuthorize(ctx);
+
+    const selected = await governedExecuteSelectAgent({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(selected.ok).toBe(true);
+    if (!selected.ok) throw new Error(JSON.stringify(selected));
+    const attemptId = selected.attemptId!;
+
+    const started = await governedExecuteStart({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId,
+      attemptId,
+      forceLocalAuthority: true,
+    });
+    expect(started.ok).toBe(true);
+    if (!started.ok) throw new Error(JSON.stringify(started));
+    // Fake docs_write Start leaves RUNNING (Complete/record is separate).
+    expect(started.phase).toBe("running");
+    expect(started.attemptStatus).toBe("running");
+    expect(started.attemptId).toBe(attemptId);
+
+    const projA = await deriveGovernedExecutionContinuityProjection({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      query: { kind: "byExecutionContractId", executionContractId },
+    });
+    expect(projA.ok).toBe(true);
+    if (!projA.ok) return;
+    expect(projA.projection.stage).toBe("RUNNING");
+    expect(projA.projection.attemptId).toBe(attemptId);
+    expect(projA.projection.evidenceId).toBeNull();
+    expect(projA.projection.claimEvaluationId).toBeNull();
+
+    // TRUE RESTART while RUNNING — Product Truth alone must rehydrate RUNNING.
+    const runtimeB = reopenRuntimeOnSameDb(ctx);
+    const oaB = runtimeB.oa!;
+
+    const projB = await deriveGovernedExecutionContinuityProjection({
+      oa: oaB,
+      projectId: ctx.projectId,
+      query: { kind: "byExecutionContractId", executionContractId },
+    });
+    expect(projB.ok).toBe(true);
+    if (!projB.ok) return;
+    expect(projB.projection.stage).toBe("RUNNING");
+    expect(projB.projection.attemptId).toBe(attemptId);
+    expect(projB.projection.evidenceId).toBeNull();
+    expect(projB.projection.reviewBundleId).toBeNull();
+    expect(projB.projection.claimEvaluationId).toBeNull();
+
+    const listedB =
+      await oaB.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId,
+      });
+    expect(listedB.ok).toBe(true);
+    if (!listedB.ok) return;
+    expect(listedB.attempts).toHaveLength(1);
+    expect(listedB.attempts[0]!.attemptId).toBe(attemptId);
+    expect(listedB.attempts[0]!.status).toBe("running");
+
+    const claimSpy = vi
+      .spyOn(claimCompletionMod, "completeDocsWriteClaimEvidenceCompletion")
+      .mockResolvedValue({
+        ok: false,
+        code: "CONFORMITY_HEADINGS_MISSING",
+        message: "r3 harness",
+      });
+    let continued: Awaited<ReturnType<typeof reconcileGovernedExecution>>;
+    try {
+      continued = await reconcileGovernedExecution({
+        oa: oaB,
+        projectId: ctx.projectId,
+        executionContractId,
+        intent: "continue",
+        forceLocalAuthority: true,
+      });
+    } finally {
+      claimSpy.mockRestore();
+    }
+    expect(continued.ok).toBe(true);
+    if (!continued.ok) throw new Error(JSON.stringify(continued));
+    // Accept honest outcomes: progressed terminal/product OR still running/await.
+    expect(continued.projection.attemptId).toBe(attemptId);
+    expect(
+      continued.projection.stage === "RUNNING" ||
+        continued.projection.stage === "PRODUCT_MATERIALIZATION_PENDING" ||
+        continued.projection.stage === "POST_EVIDENCE_PENDING" ||
+        continued.projection.stage === "POST_EVIDENCE_COMPLETE" ||
+        continued.projection.stage === "RECOVERY_REQUIRED" ||
+        continued.stoppedReason === "still_running_or_await_external" ||
+        continued.stoppedReason === "await_external" ||
+        continued.stoppedReason === "human_decision_required" ||
+        continued.stoppedReason === "stable",
+    ).toBe(true);
+
+    const listedAfter =
+      await oaB.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId,
+      });
+    expect(listedAfter.ok).toBe(true);
+    if (!listedAfter.ok) return;
+    expect(listedAfter.attempts).toHaveLength(1);
+    expect(listedAfter.attempts[0]!.attemptId).toBe(attemptId);
+  });
+});

```


### MODIFIED DIFF: `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`
```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 923718e4..07a29f5b 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -78,6 +78,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/actions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/composeMw6GovernedAuthority.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/mw6GovernedNoraTurn.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/orchestrateTurn.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime/paths",
       "features/project-assistant/f2/activeCycleGovernedContinuation.ts:@/lib/vertical-slice-runtime/managedRepoRootBaseConfig",
@@ -124,14 +125,17 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/w2/qualificationInputs.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/reconcileGovernedExecution.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/assessChatFirstWorkEligibility.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveChatFirstPilotDecision.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/deferWorkRecommendation.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/deriveGovernedExecutionContinuityProjection.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/disposeWorkRecommendation.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveDocsWriteArtifactAbsolutePath.ts:@/lib/vertical-slice-runtime/managedRepoRootBaseConfig",
       "features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/resolveProductExecutionContext.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveProposalDecisionSubject.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveRecoveryExecutionBinding.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts:@/lib/vertical-slice-runtime",

```


### MODIFIED DIFF: `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index b03c384b..80c8df4b 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -84,6 +84,14 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Docs_write durable artifact (POST-EXECUTION-…-01):** when hot-worktree bytes are available at completion, Artifact Evidence uses `external_payload_ref` under existing `mission-result-refs/refs/attempts/…/docs-write-artifact` (same filesystem Evidence layout as MissionResult — **no new store/table**). CursorExecutionReport claim is persisted alongside as `cursor-execution-report.json` on the nominal path (CLAIM, not Evidence). Independent digest verify retained.
 - **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (Fake); docs_write durable review material AS-IMPLEMENTED at tested scope

+## F11b — Product Continuity / Shared Knowledge (PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01)
+
+- **Shared Product Resolution (READ-ONLY):** `resolveProductExecutionContext` composes Project-bound EC / Attempt / Cursor CLAIM / Artifact / Evidence / RB / CE / post-Evidence Recommendation without a new store or knowledge domain. Evidence/RB/CE resolved via current Contract Result CE + `contractResultBindings.evidenceRefs` (never ID-prefix heuristics; ambiguous multi-Evidence without CE → `EVIDENCE_LINEAGE_AMBIGUOUS`).
+- **Execution Continuity Projection:** `deriveGovernedExecutionContinuityProjection` derives reachable stages only: PRE_EXECUTION | ATTEMPT_ACCEPTED | RUNNING | PRODUCT_MATERIALIZATION_PENDING | POST_EVIDENCE_PENDING | POST_EVIDENCE_COMPLETE | RECOVERY_REQUIRED.
+- **Server Reconciler:** `reconcileGovernedExecution` (intent observe|execute|continue) owns deterministic next steps; TrajectorySurface is command+projection only (no Select→Start→Complete→Materialize ownership). Restart after ACCEPTED and during RUNNING reuses the same Attempt (deterministic tested scope).
+- **Nora:** `product_execution_context_get` tool (project-bound); W3-C and conversation both invoke shared `runNoraCognitiveCore` → Agents Runner (`runNoraAgentsTurn`); post_execution mode disables tools/Memory B/hosted search/MW5.
+- **Status:** DETERMINISTIC at tested scope (incl. CORRECTION PASS 01); ZERO REAL this macro; runtime v3 NON ADOPTED
+
 ## F12 — ContractResult / ClaimEvaluation
 - **Paths:** claim evaluation tables/services; docs_write automatic `completeDocsWriteClaimEvidenceCompletion` while hot worktree / durable absolute path available
 - **Claim-completion propagation:** RecordResult **consumes** the completion result via closed `classifyDocsWriteClaimCompletionFailure` — only `CONFORMITY_HEADINGS_MISSING` / `ARTIFACT_EMPTY` → Product NOT_PROVEN/UNCLAIMED; all oracle/integrity/lineage/unknown codes → `POST_EXECUTION_CONTINUITY_ADVANCE_FAILED`. No startsWith/includes catch-alls.

```


### MODIFIED DIFF: `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index f28f2841..91921721 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -34,6 +34,10 @@

 ## Next macro

+`PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01` **local candidate** on branch `delivery/sfia-studio-product-continuity-shared-knowledge-01`. Capacité suivante après revue: **SprintBoard REAL re-proof bornée** (Gate Morris distinct).
+
+## Prior overlay retained
+
 `POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01` **local candidate** on branch `feat/sfia-studio-post-execution-handoff-01`. Capacité suivante après revue: **reprise SprintBoard REAL bornée** (Gate Morris distinct) — ne pas auto-sélectionner READY FOR REAL / END-TO-END REAL.

 ## POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 overlay
@@ -49,6 +53,22 @@
 | Fresh + **restart/rehydrate** executionReport surface | AS-IMPLEMENTED — shared `projectW3cExecutionReportSurfaceFromDurable`; LPS keeps Recommendation only |
 | Pilot UX Rapport d'exécution + Nora recommendation | AS-IMPLEMENTED projection; rehydrate not nominal |
 | Attempt succeeded ≠ Product PASS | PRESERVED — NOT_PROVEN honesty retained |
+
+## PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 overlay
+
+| Item | Status |
+|---|---|
+| Shared Product Resolution READ-ONLY | AS-IMPLEMENTED at tested scope — CE bindings lineage; no prefix preference |
+| Canonical Execution Continuity Projection | AS-IMPLEMENTED — reachable stages only (TECHNICAL_TERMINAL / PRODUCT_QUALIFIED removed) |
+| Server Reconciler (observe/execute/continue) | AS-IMPLEMENTED — no Attempt on observe/continue-without-Attempt |
+| ACCEPTED / RUNNING restart | AS-IMPLEMENTED at deterministic tested scope (R2/R3) |
+| TrajectorySurface workflow ownership removed | AS-IMPLEMENTED — command + projection |
+| Nora product_execution_context_get | AS-IMPLEMENTED — project-bound tool |
+| W3-C shared Nora cognitive core (Agents) | AS-IMPLEMENTED — conversation + post_execution via `runNoraCognitiveCore` → `runNoraAgentsTurn` |
+| New store / workflow engine / event bus | NONE |
+| REAL / READY FOR REAL / runtime v3 ADOPTED | NOT claimed — ZERO REAL |
+
+
 | REAL SprintBoard / Cursor REAL re-proof | NOT PROVEN — ZERO REAL this macro |
 | New store/table / parallel engines | NONE |


```


### MODIFIED DIFF: `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index ce3d4659..352a405d 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "114c6504cc5256c7"
+      "sha256_16": "8927493dfc871934"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -43,7 +43,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "1bb22b461f3d7efd"
+      "sha256_16": "9f686c6e1197035d"
     }
   ],
   "components": [
@@ -582,7 +582,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "992416c411b262cc"
+      "sha256_16": "44ae65a43da3f02e"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
@@ -622,7 +622,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts",
-      "sha256_16": "4e1da407cf383fd8"
+      "sha256_16": "fc46c393f14d66ae"
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts",

```


## 19. Tests
Targeted CORRECTION PASS + R1–R8 integrated: PASS
Full suite counts: see validations section (filled after suite completes — placeholder updated by publisher if needed).

Key tests:
- T-C1/T-C2/T-C3 shared cognitive core behavioral
- R2 ACCEPTED restart
- R3 RUNNING restart
- T-STAGES every stage derivation
- T-E2/T-E3 lineage + verdict
- Existing R1/R4–R6/R8/idempotence/UI/Nora tool

## 20. Validations
- typecheck: PASS
- lint: PASS
- build: PASS (after client sentinel split)
- full Vitest: Test Files 453 passed | 17 skipped (470); Tests 4983 passed | 137 skipped (5120)
- conformance: digests refreshed for changed tracked sources/volumes

## 21. Fake/Real
ZERO REAL. FakeDocsWriteLaunchPort + FakeConversationProvider.
Proof level: DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE
Claims: ACCEPTED/RUNNING RESTART CONTINUITY PROVEN AT DETERMINISTIC TESTED SCOPE
SHARED NORA COGNITIVE SEAM PROVEN AT DETERMINISTIC TESTED SCOPE
CANONICAL PRODUCT EVIDENCE LINEAGE PROVEN AT TESTED SCOPE

## 22. Réserves
Non-bloquantes:
- REAL SprintBoard re-proof still Gate Morris distinct
- Fake RUNNING continue may complete via existing boundary (honest) — not a simulated SUCCESS
- Historical SprintBoard same-project NOT_PROVEN lifecycle arbitration remains out of scope

Bloquantes: none

## 23. Debt / exit
- postEvidenceNoraSentinels.ts: permanent client/server split for markers (exit: keep)
- observeNoraCognitiveCore: test observer only (exit: never register in production)

## 24. Claims
Autorisé si validations green:
- PRODUCT CONTINUITY / SHARED KNOWLEDGE LOCAL CANDIDATE CORRECTED
- SHARED NORA COGNITIVE SEAM PROVEN AT DETERMINISTIC TESTED SCOPE
- ACCEPTED RESTART CONTINUITY PROVEN AT DETERMINISTIC TESTED SCOPE
- RUNNING RESTART CONTINUITY PROVEN AT DETERMINISTIC TESTED SCOPE
- CANONICAL PRODUCT EVIDENCE LINEAGE PROVEN AT TESTED SCOPE
- DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE
- NO NEW STORE / NO PARALLEL ENGINE
- READY FOR MORRIS GO — LOCAL PROJECT COMMIT

Interdit: REAL PROVEN / READY FOR REAL / MINIBOARD REAL FIXED / RUNTIME V3 ADOPTED

## 25. Verdict
**READY FOR MORRIS GO — LOCAL PROJECT COMMIT**

## Diff stat
```
.tmp-sfia-review/chatgpt-review.md                 | 6981 +++++++++-----------
 .../postExecutionTrajectorySurface.ui.test.tsx     |  102 +-
 .../uatUxSemanticReserves.ui.test.tsx              |    2 +-
 .../postExecutionHandoff.integrated.d0.test.ts     |  436 ++
 .../importBoundaries.test.ts                       |    4 +
 .../surfaces/TrajectorySurface.tsx                 |  342 +-
 .../f3/postEvidenceNoraAnalysis.ts                 |   72 +-
 .../features/project-assistant/orchestrateTurn.ts  |   25 +
 .../project-assistant/presentationLabels.ts        |    2 +-
 .../app/features/project-assistant/w2/actions.ts   |   99 +
 .../app/lib/nora-cognitive-runtime/index.ts        |   13 +
 .../nora-cognitive-runtime/providerAgentsModel.ts  |    5 +-
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |   19 +
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts |   14 +-
 .../03-end-to-end-flow-catalog.md                  |    8 +
 ...9-known-gaps-reserves-and-current-boundaries.md |   20 +
 .../production-runtime-reference.manifest.json     |    8 +-
 17 files changed, 3846 insertions(+), 4306 deletions(-)
```

## Diff name-status
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
M	projects/sfia-studio/app/features/project-assistant/w2/actions.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```
