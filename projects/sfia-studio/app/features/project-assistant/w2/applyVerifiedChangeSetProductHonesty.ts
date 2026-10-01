/**
 * CR-03 / CR-10 — VerifiedChangeSet honesty for Product projection.
 * Cursor CLAIM ≠ Studio FACT. Attempt succeeded ≠ Product PASS.
 * Does NOT create a second Evidence engine — only downgrades dishonest PASS.
 */
import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";

export function applyVerifiedChangeSetProductHonesty(input: {
  readonly attemptId: string;
  readonly product: W3BProductTerminalProjection;
  readonly refsRoot?: string;
}): W3BProductTerminalProjection {
  const refsRoot = input.refsRoot ?? resolveProductEvidenceRefsRoot();
  const review = loadGenericExecutionReviewMaterial({
    refsRoot,
    attemptId: input.attemptId,
  });
  if (!review.ok) return input.product;

  const mismatch =
    review.manifest.verifiedEffects.claimFactMismatch === true ||
    review.verifiedChangeSet?.claimFactMismatch === true ||
    review.manifest.blockers.some((b) => b.includes("CLAIM_FACT_MISMATCH"));

  // Silent PASS forbidden when CLAIM/FACT mismatch is durable in Review Material.
  // UNAVAILABLE without mismatch is owned by ContractResult semantic when
  // evreq:studio-verified-changeset applies — do not blanket-downgrade historical
  // SUCCESS missions that never required Studio verification.
  if (
    input.product.outcome === "SUCCESS" &&
    input.product.claimAllowed &&
    mismatch
  ) {
    return {
      ...input.product,
      outcome: "UNCLAIMED",
      claimAllowed: false,
      businessHeadline: "Qualification produit incomplète",
      businessReason:
        "Studio VerifiedChangeSet diverges from Cursor CLAIM (CLAIM_FACT_MISMATCH) — Product PASS refused; Attempt technical success preserved.",
      evidenceSummary:
        (input.product.evidenceSummary ?? "") +
        " · CLAIM_FACT_MISMATCH visible in Review Material",
    };
  }
  return input.product;
}
