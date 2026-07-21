import { createHash } from "node:crypto";
import type { ExecutionContractPayload } from "./types";

/** Deterministic JSON canonicalization (sorted object keys, recursive). */
export function canonicalize(value: unknown): string {
  return JSON.stringify(sortValue(value));
}

function sortValue(value: unknown): unknown {
  if (value === null || typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(sortValue);
  }
  const obj = value as Record<string, unknown>;
  const out: Record<string, unknown> = {};
  for (const key of Object.keys(obj).sort()) {
    out[key] = sortValue(obj[key]);
  }
  return out;
}

/**
 * Hash payload only — never includes executionAttemptId or volatile runtime fields.
 * Same canonical payload → same SHA-256 hex.
 */
export function computeContractHash(
  payload: ExecutionContractPayload,
): string {
  const canonical = canonicalize(payload);
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}

export function digestText(text: string, max = 2000): string {
  const clipped = text.length > max ? text.slice(0, max) + "…" : text;
  const hash = createHash("sha256").update(text, "utf8").digest("hex").slice(0, 16);
  return `[sha256:${hash} len=${text.length}] ${clipped.replace(/sk-[A-Za-z0-9]+/g, "[redacted]")}`;
}
