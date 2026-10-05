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
        ? err.detailCode
        : "SYNTHESIS_MATERIALIZE_FAILED",
      message: synthesisErrorMessage(err),
    };
  }
}
