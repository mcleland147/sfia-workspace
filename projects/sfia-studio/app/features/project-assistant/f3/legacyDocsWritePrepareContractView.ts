/**
 * Client-safe presentation heuristic for legacy M3 PREPARE docs_write recovery CTA.
 * Not the security boundary — server re-validates on rematerialization.
 *
 * Constants duplicated intentionally to keep this module free of Node/server barrels.
 */

const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply";
const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write";
const M4_BOUNDED_DOCS_WRITE_SCOPE = "studio.gcec.docs_write";
const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write";

function canonicalM3PrepareContractId(decisionId: string): string {
  const safe = decisionId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48);
  return `xct:m3:${safe}`;
}

export function isLegacyDocsWritePrepareContractView(input: {
  decisionId: string;
  executionContractId: string;
  action: string;
  target: string;
  scope?: string;
  constraints: readonly string[];
  requiredCapabilities?: readonly string[];
}): boolean {
  if (
    input.executionContractId !== canonicalM3PrepareContractId(input.decisionId)
  ) {
    return false;
  }
  if (input.action !== M4_BOUNDED_DOCS_WRITE_ACTION) return false;
  if (input.target !== M4_BOUNDED_DOCS_WRITE_TARGET) return false;
  if (!input.constraints.includes("PREPARE_ONLY")) return false;
  // Already-current M4 machine scope is not a legacy prepare projection.
  if (input.scope === M4_BOUNDED_DOCS_WRITE_SCOPE) return false;
  if (
    Array.isArray(input.requiredCapabilities) &&
    input.requiredCapabilities.length > 0 &&
    !input.requiredCapabilities.includes(M4_BOUNDED_DOCS_WRITE_CAPABILITY)
  ) {
    return false;
  }
  return true;
}
