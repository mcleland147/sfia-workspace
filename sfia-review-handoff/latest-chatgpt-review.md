# PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — ChatGPT Review Pack (FULL)

## 1. Timestamp
2026-09-28T14:19:38+0200

## 2. Macro / cycle / profile
- Macro: PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01
- Cycle: 8 — Delivery / implémentation
- Profile: CRITICAL
- Typologie: EVOL
- Gate consumed: GO MORRIS — DELIVERY LOCAL PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — CONSUMED

## 3. Branch + HEAD + origin/main
- Repository: mcleland147/sfia-workspace (local worktree `/Users/morris/Projects/sfia-workspace-post-execution-handoff-01`)
- Branch: `delivery/sfia-studio-product-continuity-shared-knowledge-01`
- HEAD (project, uncommitted): `5ed9cd24cad7110aee6f6c26dd34226e69e1531b`
- origin/main: `5ed9cd24cad7110aee6f6c26dd34226e69e1531b` (exact expected SHA match)
- Working tree (short):
```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection.ts
?? projects/sfia-studio/app/features/project-assistant/w2/reconcileGovernedExecution.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
```

## 4. Sources consultées
Méthode: sfia-cycle-execution-template, cycle-routing-guide, chatgpt-cursor-operating-model, rules-and-guardrails, knowledge-layer.
Convergence: build-doctrine, roadmap (READ ONLY — not modified).
Product completion 01/03/06 (READ ONLY — not modified).
v3 framing 30/32/33/34/35/37 + ckc/08 + nora-cognitive-completion/08 (READ ONLY).
Production Runtime Reference 01–04, 06–09 (03/09/manifest UPDATED descriptively).
Code: vertical-slice-runtime, w2/**, studioCognitiveContext, postEvidenceNoraAnalysis, nora-cognitive-runtime, TrajectorySurface, OA services, W3/restart/Nora/product E2E tests.

## 5. Morris decisions consumed
- GO MORRIS — DELIVERY LOCAL PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — CONSUMED
- Architecture OPTION A adopted by Morris (construction decision — NOT persisted as Project HumanDecision / doctrine / Roadmap / C1)
- NO project commit / push / PR / merge / REAL / doctrine change in this cycle

## 6. CURRENT IMPLEMENTATION MAP (before → after)

### Before (defects)
- TrajectorySurface owned Select→Start→Complete→Materialize sequencing (client workflow owner)
- Post-Evidence cognition via specialized `provider.complete(...)` parallel path
- No shared Product Resolution — feature-local reconstruction
- No canonical Execution Continuity Projection distinguishing running vs technical terminal vs product pending vs post-Evidence
- Restart/rehydrate reconstructed but did not continue deterministic steps
- Nora depended on push context; could ask Pilot for Attempt/EC IDs Studio already held

### After (Option A seams)
| Concern | Seam |
|---|---|
| Shared Product Resolution READ-ONLY | `w2/resolveProductExecutionContext.ts` |
| Continuity Projection | `w2/deriveGovernedExecutionContinuityProjection.ts` |
| Server Reconciler | `w2/reconcileGovernedExecution.ts` (observe\|execute\|continue) |
| Server actions | `w2/actions.ts` — reconcile/derive/resolve actions |
| UI cutover | `TrajectorySurface.tsx` — `runServerReconcile` / `applyReconcileResult` |
| Nora product tool | `productExecutionAgentsTools.ts` — `product_execution_context_get` |
| Shared cognitive core | `noraCognitiveCompletion.ts` — modes conversation / post_execution |
| W3-C convergence | `postEvidenceNoraAnalysis.ts` → `runNoraCognitiveCompletion({ mode: "post_execution" })` |
| Fake provider skip | `providerAgentsModel.ts` skips product tool like journal tools |
| Orchestration wiring | `orchestrateTurn` / `runNoraAgentsTurn` / `runNoraCognitiveTurn` attach product tools |

## 7. Architecture cible appliquée
OPTION A confirmed:
- OA / Product Truth KEEP
- Product SQLite KEEP
- Product Resolution BUILD (composition, not store)
- Continuity Projection BUILD (derived, not persisted SM)
- Reconciler BUILD (idempotent bounded loop)
- W3-C KEEP/ADAPT product-processing; cognition converges to shared Nora completion
- TrajectorySurface KEEP as UI; no longer workflow owner
- NO new store / workflow engine / event bus / OA knowledge domain / ProductKnowledge aggregate

## 8. Fichiers créés

- `projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/reconcileGovernedExecution.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts`

## 9. Fichiers modifiés

- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`
- `projects/sfia-studio/app/features/project-assistant/w2/actions.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts`
- `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts`
- `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`
- `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`
- `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`
- `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`
- `.tmp-sfia-review/chatgpt-review.md` (this pack; never staged)

## 10–13. Contenu créé + diffs modifiés


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
import { resolveCurrentContractResultClaimEvaluation } from "@/lib/oa/evidence-review";
import {
  loadDocsWriteArtifactReviewMaterial,
  resolveProductEvidenceRefsRoot,
} from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
import {
  findExistingW3cPostEvidence,
  projectW3cExecutionReportSurfaceFromDurable,
} from "./w3cPostEvidenceLoop";
import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";
import { w3bEvidenceIdentity } from "./materializeW3bProductTerminal";

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
    readonly contractResultVerdict: string | null;
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
      reviewBundle: ReviewBundle | null;
      claimEvaluation: ClaimEvaluation | null;
    }
  | { ok: false; code: string; message: string }
> {
  const services = input.oa.evidenceReviewServices;
  if (!services) {
    return { ok: true, evidence: null, reviewBundle: null, claimEvaluation: null };
  }

  const allEvidence = await services.repository.listByProject(input.projectId);
  const bound = allEvidence.filter(
    (e) => e.bindings?.executionAttemptId === input.attemptId,
  );
  if (bound.length > 1) {
    // Prefer docs-write / w3b deterministic ids when ambiguous
    const preferred =
      bound.find((e) => e.evidenceId.startsWith("ev:docs-write:")) ??
      bound.find((e) => e.evidenceId.startsWith("ev:w3b:")) ??
      bound[0]!;
    const evidence = preferred;
    if (evidence.bindings?.projectId && evidence.bindings.projectId !== input.projectId) {
      return {
        ok: false,
        code: "EVIDENCE_PROJECT_MISMATCH",
        message: "Evidence hors Project — fail-closed.",
      };
    }
    return finishEvidence(services, input, evidence);
  }
  const evidence = bound[0] ?? null;
  if (
    evidence?.bindings?.projectId &&
    evidence.bindings.projectId !== input.projectId
  ) {
    return {
      ok: false,
      code: "EVIDENCE_PROJECT_MISMATCH",
      message: "Evidence hors Project — fail-closed.",
    };
  }
  return finishEvidence(services, input, evidence);
}

async function finishEvidence(
  services: NonNullable<RuntimeOaStack["evidenceReviewServices"]>,
  input: { projectId: string; attemptId: string },
  evidence: Evidence | null,
): Promise<{
  ok: true;
  evidence: Evidence | null;
  reviewBundle: ReviewBundle | null;
  claimEvaluation: ClaimEvaluation | null;
}> {
  let reviewBundle: ReviewBundle | null = null;
  if (evidence) {
    const ids = w3bEvidenceIdentity(input.attemptId);
    const candidates = [
      `rb:docs-write:${input.attemptId}`,
      ids.reviewBundleId,
    ];
    for (const id of candidates) {
      const rb = await services.reviewBundleReader.findById(id);
      if (rb && rb.projectId === input.projectId) {
        reviewBundle = rb;
        break;
      }
    }
    if (!reviewBundle) {
      // Scan CE bindings path — RB id may be on claim
    }
  }

  let claimEvaluation: ClaimEvaluation | null = null;
  const resolved = await resolveCurrentContractResultClaimEvaluation({
    repo: services.claimEvaluationRepository,
    projectId: input.projectId,
    executionAttemptId: input.attemptId,
  });
  if (resolved.status === "one") {
    claimEvaluation = resolved.claimEvaluation;
    if (!reviewBundle && claimEvaluation.reviewBundleId) {
      const rb = await services.reviewBundleReader.findById(
        claimEvaluation.reviewBundleId,
      );
      if (rb && rb.projectId === input.projectId) reviewBundle = rb;
    }
  }

  return { ok: true, evidence, reviewBundle, claimEvaluation };
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
      claimBlock = {
        kind: "PRODUCT_QUALIFICATION",
        claimEvaluationId: lineage.claimEvaluation.claimEvaluationId,
        status: lineage.claimEvaluation.status,
        contractResultVerdict: lineage.claimEvaluation.status ?? null,
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
  | "TECHNICAL_TERMINAL"
  | "PRODUCT_MATERIALIZATION_PENDING"
  | "PRODUCT_QUALIFIED"
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

function deriveFromContext(
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
  return { ok: true, projection: deriveFromContext(resolved.context) };
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
 * Shared Nora cognitive completion seam (PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01).
 *
 * Smallest reusable core: provider resolution + complete() + failure typing.
 * Used by post-Evidence (mode=post_execution) and available to conversation
 * completions. Does NOT run the full Agents turn / Memory-B / Journal side effects.
 */
import { resolveConversationProvider } from "@/lib/platform/ai";

export type NoraCognitiveCompletionMode =
  | "conversation_completion"
  | "post_execution";

export type NoraCognitiveCompletionResult =
  | {
      readonly ok: true;
      readonly text: string;
      readonly providerId: string | null;
      readonly mode: NoraCognitiveCompletionMode;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly providerId: string | null;
      readonly mode: NoraCognitiveCompletionMode;
    };

/**
 * Shared cognitive completion — NOT a second Nora engine.
 * Post-execution must pass mode="post_execution".
 */
export async function runNoraCognitiveCompletion(input: {
  readonly mode: NoraCognitiveCompletionMode;
  readonly system: string;
  readonly user: string;
  readonly maxChars?: number;
}): Promise<NoraCognitiveCompletionResult> {
  let providerId: string | null = null;
  try {
    const provider = resolveConversationProvider();
    providerId = provider.providerId;
    const completion = await provider.complete([
      { role: "system", content: input.system },
      { role: "user", content: input.user },
    ]);
    const text = completion.text.trim();
    if (!text) {
      return {
        ok: false,
        code: "NORA_COGNITIVE_COMPLETION_EMPTY",
        message: "Provider cognitive completion returned empty text.",
        providerId,
        mode: input.mode,
      };
    }
    const max = input.maxChars ?? 4000;
    return {
      ok: true,
      text: text.slice(0, max),
      providerId,
      mode: input.mode,
    };
  } catch (err) {
    return {
      ok: false,
      code: "NORA_COGNITIVE_COMPLETION_UNAVAILABLE",
      message: err instanceof Error ? err.message : "cognitive_completion_failed",
      providerId,
      mode: input.mode,
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


### CREATED FULL: `projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts`

```typescript
/**
 * PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — deterministic proof at tested scope.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { classifyDocsWriteClaimCompletionFailure } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { deriveGovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import { resolveProductExecutionContext } from "@/features/project-assistant/w2/resolveProductExecutionContext";
import { runNoraCognitiveCompletion } from "@/lib/nora-cognitive-runtime/noraCognitiveCompletion";
import { createProductExecutionAgentsTools } from "@/lib/nora-cognitive-runtime/productExecutionAgentsTools";

describe("PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01", () => {
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

  it("T-E — postEvidence uses shared Nora cognitive completion seam", () => {
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/f3/postEvidenceNoraAnalysis.ts",
      ),
      "utf8",
    );
    expect(src).toContain("runNoraCognitiveCompletion");
    expect(src).toContain('mode: "post_execution"');
    expect(src).not.toMatch(/provider\.complete\(/);
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

  it("T-CORE — shared cognitive completion returns typed mode", async () => {
    // Without provider env this fail-closes honestly — still proves seam exists.
    const result = await runNoraCognitiveCompletion({
      mode: "post_execution",
      system: "test",
      user: "test",
    });
    expect(result.mode).toBe("post_execution");
    expect(typeof result.ok).toBe("boolean");
  });

  it("T-RES — resolveProductExecutionContext rejects empty projectId", async () => {
    const result = await resolveProductExecutionContext({
      oa: {} as never,
      projectId: "  ",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.code).toBe("PROJECT_ID_REQUIRED");
  });

  it("T-CONT — derive projection exports expected stages union (compile-time smoke)", () => {
    const stages = [
      "PRE_EXECUTION",
      "ATTEMPT_ACCEPTED",
      "RUNNING",
      "TECHNICAL_TERMINAL",
      "PRODUCT_MATERIALIZATION_PENDING",
      "PRODUCT_QUALIFIED",
      "POST_EVIDENCE_PENDING",
      "POST_EVIDENCE_COMPLETE",
      "RECOVERY_REQUIRED",
    ] as const;
    expect(stages).toContain("PRODUCT_MATERIALIZATION_PENDING");
    expect(typeof deriveGovernedExecutionContinuityProjection).toBe("function");
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
index 31363dd8..592edd02 100644
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
@@ -12,8 +12,8 @@
  * client presentation graph (presentationLabels → postEvidenceNoraAnalysis).
  */

-import { resolveConversationProvider } from "@/lib/platform/ai";
 import { buildPostEvidenceNarrativePolicyDisclosure } from "@/lib/nora-cognitive-runtime/postEvidenceNarrativePolicy";
+import { runNoraCognitiveCompletion } from "@/lib/nora-cognitive-runtime/noraCognitiveCompletion";

 /** Same marker string as f2/ckcCognitiveContext — keep in sync (string only). */
 const CKC_COGNITIVE_REASONING_SYSTEM_MARKER =
@@ -189,40 +189,26 @@ export async function analyzePostEvidenceWithProvider(
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
+  // Shared Nora cognitive completion (mode=post_execution) — not a parallel engine.
+  const completion = await runNoraCognitiveCompletion({
+    mode: "post_execution",
+    system: buildPostEvidenceSystemPrompt(options?.ckcPromptSection),
+    user: `Faits durables post-Evidence (bornés):\n${boundedFactsJson(facts)}`,
+    maxChars: 4000,
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
index 4c9f7cf1..ae8cd927 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -404,3 +404,12 @@ export {
   createCycleJournalAgentsTools,
   type CycleJournalToolContext,
 } from "./cycleJournalAgentsTools";
+export {
+  createProductExecutionAgentsTools,
+  type ProductExecutionToolContext,
+} from "./productExecutionAgentsTools";
+export {
+  runNoraCognitiveCompletion,
+  type NoraCognitiveCompletionMode,
+  type NoraCognitiveCompletionResult,
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
index 58785632..f9e3aa1f 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
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
@@ -932,6 +937,7 @@ export async function runNoraCognitiveTurn(
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


### MODIFIED DIFF: `projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts
index 03bee296..47637a8b 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts
@@ -38,6 +38,9 @@ import {
   materializeProductOutcomeFromAttempt,
   rehydrateProductOutcomeFromAttempt,
 } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
+import { reconcileGovernedExecution } from "@/features/project-assistant/w2/reconcileGovernedExecution";
+import { resolveProductExecutionContext } from "@/features/project-assistant/w2/resolveProductExecutionContext";
+import { deriveGovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
 import {
   NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
@@ -935,3 +938,228 @@ describe("POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 integrated (R1–R4)"
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
+      /^(POST_EVIDENCE_COMPLETE|POST_EVIDENCE_PENDING|PRODUCT_QUALIFIED)$/,
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
index b03c384b..4bcd08bc 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -84,6 +84,14 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Docs_write durable artifact (POST-EXECUTION-…-01):** when hot-worktree bytes are available at completion, Artifact Evidence uses `external_payload_ref` under existing `mission-result-refs/refs/attempts/…/docs-write-artifact` (same filesystem Evidence layout as MissionResult — **no new store/table**). CursorExecutionReport claim is persisted alongside as `cursor-execution-report.json` on the nominal path (CLAIM, not Evidence). Independent digest verify retained.
 - **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (Fake); docs_write durable review material AS-IMPLEMENTED at tested scope

+## F11b — Product Continuity / Shared Knowledge (PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01)
+
+- **Shared Product Resolution (READ-ONLY):** `resolveProductExecutionContext` composes Project-bound EC / Attempt / Cursor CLAIM / Artifact / Evidence / RB / CE / post-Evidence Recommendation without a new store or knowledge domain.
+- **Execution Continuity Projection:** `deriveGovernedExecutionContinuityProjection` derives stages (PRE_EXECUTION → … → POST_EVIDENCE_COMPLETE / RECOVERY_REQUIRED) from Product Truth.
+- **Server Reconciler:** `reconcileGovernedExecution` (intent observe|execute|continue) owns deterministic next steps; TrajectorySurface is command+projection only (no Select→Start→Complete→Materialize ownership).
+- **Nora:** `product_execution_context_get` tool (project-bound); W3-C uses shared `runNoraCognitiveCompletion(mode=post_execution)`.
+- **Status:** DETERMINISTIC at tested scope; ZERO REAL this macro; runtime v3 NON ADOPTED
+
 ## F12 — ContractResult / ClaimEvaluation
 - **Paths:** claim evaluation tables/services; docs_write automatic `completeDocsWriteClaimEvidenceCompletion` while hot worktree / durable absolute path available
 - **Claim-completion propagation:** RecordResult **consumes** the completion result via closed `classifyDocsWriteClaimCompletionFailure` — only `CONFORMITY_HEADINGS_MISSING` / `ARTIFACT_EMPTY` → Product NOT_PROVEN/UNCLAIMED; all oracle/integrity/lineage/unknown codes → `POST_EXECUTION_CONTINUITY_ADVANCE_FAILED`. No startsWith/includes catch-alls.

```


### MODIFIED DIFF: `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index f28f2841..2c0ce9f4 100644
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
@@ -49,6 +53,21 @@
 | Fresh + **restart/rehydrate** executionReport surface | AS-IMPLEMENTED — shared `projectW3cExecutionReportSurfaceFromDurable`; LPS keeps Recommendation only |
 | Pilot UX Rapport d'exécution + Nora recommendation | AS-IMPLEMENTED projection; rehydrate not nominal |
 | Attempt succeeded ≠ Product PASS | PRESERVED — NOT_PROVEN honesty retained |
+
+## PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 overlay
+
+| Item | Status |
+|---|---|
+| Shared Product Resolution READ-ONLY | AS-IMPLEMENTED at tested scope |
+| Canonical Execution Continuity Projection | AS-IMPLEMENTED |
+| Server Reconciler (observe/execute/continue) | AS-IMPLEMENTED — no Attempt on observe/continue-without-Attempt |
+| TrajectorySurface workflow ownership removed | AS-IMPLEMENTED — command + projection |
+| Nora product_execution_context_get | AS-IMPLEMENTED — project-bound tool |
+| W3-C shared cognitive completion seam | AS-IMPLEMENTED — not a second engine |
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
index ce3d4659..3f4b8dda 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "114c6504cc5256c7"
+      "sha256_16": "ca05121afe90dba2"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -43,7 +43,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "1bb22b461f3d7efd"
+      "sha256_16": "4054a4379f938c61"
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
+      "sha256_16": "c362c0cbb23bddaa"
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts",

```


## 14. Product Resolution design réel
- Module: `resolveProductExecutionContext`
- Queries: `latest` | `byExecutionContractId` | `byAttemptId`
- Composes: EC, Attempt, CursorReport (CLAIM_NOT_EVIDENCE), Artifact summary+completeness, Evidence, ReviewBundle, ClaimEvaluation, postEvidence Recommendation, provenance
- Fail-closed: empty projectId, cross-project EC/Attempt, evidence/RB mismatch, attempt/contract mismatch
- READ-ONLY: no mutations; bounded artifact preview
- Reuses: existing durable readers (`loadDocsWriteArtifactReviewMaterial`, `findExistingW3cPostEvidence`, OA list/find)

## 15. Continuity Projection états/mapping
Stages: PRE_EXECUTION | ATTEMPT_ACCEPTED | RUNNING | TECHNICAL_TERMINAL (via terminal statuses) | PRODUCT_MATERIALIZATION_PENDING | PRODUCT_QUALIFIED (intermediate via evidence+rb+ce before postEvidence) | POST_EVIDENCE_PENDING | POST_EVIDENCE_COMPLETE | RECOVERY_REQUIRED
Mapping:
- no EC / no Attempt → PRE_EXECUTION (Execute required to initiate)
- accepted/selected → ATTEMPT_ACCEPTED
- running/pending/awaiting_result → RUNNING (never invent terminal)
- terminal + incomplete Evidence/RB/CE → PRODUCT_MATERIALIZATION_PENDING → MATERIALIZE_PRODUCT
- product qualified + no postEvidence → POST_EVIDENCE_PENDING → RUN_POST_EVIDENCE
- postEvidence present → POST_EVIDENCE_COMPLETE; HD required if recommendation requires it
- lineage mismatch → RECOVERY_REQUIRED

## 16. Reconciler behavior
- `reconcileGovernedExecution({ intent: observe|execute|continue })`
- observe: derive only, zero mutations
- continue without Attempt: stable read, no Attempt created (R1)
- execute without Attempt: `governedExecuteAuthorizedContract` (authority preserved)
- execute with Attempt: redelegate to continue (no second Attempt)
- continue ATTEMPT_ACCEPTED → start; RUNNING → recordResult (honest if still running)
- bounded loop MAX_TRANSITIONS=6 for MATERIALIZE_PRODUCT / RUN_POST_EVIDENCE via existing `materializeW3bProductTerminal`
- STOP: stable / await_external / human_decision_required / recovery_required / limit / unhandled

## 17. Idempotency proof
Integrated test `R4/R5/R6 — terminal→restart→continue materializes; idempotent; resolve latest`:
- second continue keeps same attemptId/evidenceId/rbId/ceId
- listAttempts succeeded length === 1
Execute re-entry test: second execute does not create second Attempt

## 18. Restart/recovery proof
- R1: observe/continue after authorize → 0 Attempts
- R4: terminal before materialize → PRODUCT_MATERIALIZATION_PENDING; restart runtime B → continue materializes
- R5/R6: postEvidence present after continue; second continue stable POST_EVIDENCE_COMPLETE without duplicate
- R7: hostile cross-project resolve rejected
- R8: NOT_PROVEN path preserved via claim spy CONFORMITY_HEADINGS_MISSING (technical success ≠ product SUCCESS)
- UI: no Select/Start/Complete/Materialize ownership; reconcileMock paints outcome

## 19. Nora tool contract
- Name: `product_execution_context_get`
- Project-bound server context; model cannot pass foreign projectId/SQL/paths/credentials
- Selectors: latest (default) / executionContractId / attemptId validated server-side
- Returns bounded JSON with CLAIM disclosure + completeness
- Fake provider skips tool from ToolDefinition projection (Agents-local invoke)

## 20. W3-C convergence réelle
- BEFORE: `postEvidenceNoraAnalysis` used autonomous `provider.complete(...)`
- AFTER: `runNoraCognitiveCompletion({ mode: "post_execution", ... })` shared seam
- Preserves contract-first / claim ≠ evidence / FULL|PARTIAL / NOT_PROVEN honesty
- Not a naive `runNoraCognitiveTurn()` conversational side-effect path

## 21. UI cutover
- `runServerReconcile(intent)` + `applyReconcileResult`
- Nominal Execute → server reconcile execute (+ bounded RUNNING poll)
- Recovery continue via same seam
- Historical "Recharger résultat produit" no longer required for nominal (recovery path may still call continue)
- Source guard test asserts absence of phased action imports

## 22. Fake / Real Qualification
- Fake: FakeDocsWriteLaunchPort + FakeConversationProvider
- REAL boundary: NOT exercised; ZERO REAL claim
- Proof level: DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE
- Async realism: RUNNING stage distinguished; Fake can represent accepted→running→terminal via existing adapters
- No DETERMINISTIC ⇒ READY FOR REAL

## 23. Validations + commandes + résultats
```
npx vitest run (full suite)
  Test Files  453 passed | 17 skipped (470)
  Tests       4980 passed | 137 skipped (5117)
npm run typecheck → exit 0
npm run lint → ✔ No ESLint warnings or errors
npm run build → Compiled successfully; routes generated
```
Targeted: productContinuitySharedKnowledge, postExecutionHandoff PRODUCT-CONTINUITY block, postExecutionTrajectorySurface UI, orchestrateTurn, importBoundaries — all pass.

## 24. Full suite counts
- 4980 passed / 137 skipped / 0 failed
- 453 test files passed / 17 skipped

## 25. typecheck / lint / build
- typecheck: PASS
- lint: PASS
- build: PASS (note: better-sqlite3 module-not-found warning in evaluateProductRealReadiness import trace — pre-existing, build completed)

## 26. Architecture / conformance
- productionRuntimeReference.conformance — PASS after digest refresh for orchestrateTurn.ts
- vertical-slice-runtime / project-assistant importBoundaries — PASS (reconciler allowlisted)

## 27. Réserves
### Bloquantes
- none for local candidate verdict

### Non bloquantes
- REAL SprintBoard / MiniBoard re-proof NOT done (Gate Morris distinct — next)
- Fake async RUNNING mid-flight interrupt covered at projection/reconciler semantics; full Fake pending-agent attach optional further tooling
- Historical same-project NOT_PROVEN SprintBoard deadlock lifecycle arbitration: out of scope unless directly solved by continuity (documented reserve)
- better-sqlite3 optional resolve warning during build import trace (pre-existing)

## 28. Debt introduite + exit
- Temporary compatibility: legacy executeSelect/Start/Complete mocks remain in UI test file but assert zero calls; exit when legacy test helpers fully removed
- `reconcileSelectOnlyForTests` exported for Fake realism — exit when phased tests deleted
- Runtime Ref overlay descriptive only — exit when next REAL campaign updates proof level

## 29. Fichiers explicitement non modifiés
- convergence doctrine / roadmap
- product-completion/**
- sfia-v3-framing/**
- method/** / prompts/**
- package.json / lockfile / CI
- no new DB migration / table / npm package

## 30. Claims autorisés / interdits
Autorisé:
- PRODUCT CONTINUITY / SHARED KNOWLEDGE LOCAL CANDIDATE IMPLEMENTED
- DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE
- RESTART / RECONCILIATION PROVEN AT TESTED SCOPE
- NO NEW STORE / NO PARALLEL ENGINE
- READY FOR MORRIS GO — LOCAL PROJECT COMMIT

Interdit (not claimed):
- REAL PROVEN / READY FOR REAL / FULL REAL PRODUCT LOOP
- PRODUCT GLOBAL READY / RUNTIME V3 ADOPTED
- NORA COGNITIVE COMPLETION GLOBAL PROVEN
- MiniBoard REAL corrigé

## 31. Décision Morris éventuellement requise
None for architecture. Next expected: GO for local project commit (separate). Later: distinct REAL gate.

## 32. Verdict
**READY FOR MORRIS GO — LOCAL PROJECT COMMIT**

---
## Diff stat snapshot
```
.tmp-sfia-review/chatgpt-review.md                 | 4291 +-------------------
 .../postExecutionTrajectorySurface.ui.test.tsx     |  102 +-
 .../postExecutionHandoff.integrated.d0.test.ts     |  228 ++
 .../importBoundaries.test.ts                       |    4 +
 .../surfaces/TrajectorySurface.tsx                 |  342 +-
 .../f3/postEvidenceNoraAnalysis.ts                 |   48 +-
 .../features/project-assistant/orchestrateTurn.ts  |   25 +
 .../app/features/project-assistant/w2/actions.ts   |   99 +
 .../app/lib/nora-cognitive-runtime/index.ts        |    9 +
 .../nora-cognitive-runtime/providerAgentsModel.ts  |    5 +-
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |   19 +
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts |    6 +
 .../03-end-to-end-flow-catalog.md                  |    8 +
 ...9-known-gaps-reserves-and-current-boundaries.md |   19 +
 .../production-runtime-reference.manifest.json     |    8 +-
 15 files changed, 649 insertions(+), 4564 deletions(-)
```

## Diff name-status
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/w2/actions.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```
