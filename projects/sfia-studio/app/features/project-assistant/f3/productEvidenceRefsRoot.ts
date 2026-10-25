/**
 * Default refs root beside Product SQLite (same convention as mission-result-refs).
 */
import path from "node:path";

export function resolveProductEvidenceRefsRoot(
  explicit?: string | null,
): string {
  const trimmed = explicit?.trim();
  if (trimmed) return trimmed;
  const fromEnv =
    typeof process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT === "string" &&
    process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT.trim()
      ? process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT.trim()
      : null;
  if (fromEnv) return fromEnv;
  const db =
    typeof process.env.SFIA_STUDIO_PRODUCT_DB_PATH === "string" &&
    process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
      ? process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
      : path.join(
          process.cwd(),
          "..",
          ".sfia-exec",
          "product",
          "oa-product.sqlite",
        );
  return path.join(path.dirname(db), "mission-result-refs");
}
