/**
 * Evidence serialization + redaction helpers for MW0 packs.
 */

import { redactSecrets } from "@/lib/platform/security/redaction";
import type { RunEvidence } from "./types";

export function redactEvidence(evidence: RunEvidence): RunEvidence {
  return {
    ...evidence,
    rawSummary: redactSecrets(evidence.rawSummary),
    redacted: true,
    evidenceRefs: evidence.evidenceRefs.map((r) => redactSecrets(r)),
  };
}

export function serializeEvidencePack(input: {
  campaignId: string;
  createdAt: string;
  runs: RunEvidence[];
  extra?: Record<string, unknown>;
}): string {
  const redactedRuns = input.runs.map(redactEvidence);
  const pack = {
    kind: "nora-mw0-evidence-pack",
    campaignId: input.campaignId,
    createdAt: input.createdAt,
    runs: redactedRuns,
    ...input.extra,
  };
  return `${JSON.stringify(pack, null, 2)}\n`;
}

export function assertNoSecretLeak(text: string): {
  ok: boolean;
  detail: string;
} {
  if (/sk-[a-zA-Z0-9]{10,}/.test(text)) {
    return { ok: false, detail: "Possible API key pattern in evidence" };
  }
  if (/OPENAI_API_KEY\s*=\s*\S+/.test(text)) {
    return { ok: false, detail: "OPENAI_API_KEY assignment in evidence" };
  }
  return { ok: true, detail: "no obvious secret pattern" };
}
