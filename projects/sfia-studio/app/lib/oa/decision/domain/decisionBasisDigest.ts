/**
 * Deterministic SHA-256 digest for DecisionBasis source payloads (M3).
 * Uses canonical JSON (sorted object keys) — no F2 imports.
 */
import { createHash } from "node:crypto";
import { canonicalizeJson } from "@/lib/oa/doctrine";

export function computeDecisionBasisSourceDigest(payload: unknown): string {
  const canonical = canonicalizeJson(payload);
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}
