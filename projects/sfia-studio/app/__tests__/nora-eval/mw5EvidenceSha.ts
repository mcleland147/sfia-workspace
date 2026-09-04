/**
 * MW5 QA-only evidence SHA integrity helpers (D-MW5-QA-SHA-01).
 * NOT product runtime. Companion `.sha256` is the integrity authority.
 * Never embeds the digest into the evidence JSON (no post-hash rewrite).
 */
import { createHash } from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";

const DIGEST_RE = /^[a-f0-9]{64}$/;

export function computeEvidenceSha256(filePath: string): string {
  const body = fs.readFileSync(filePath);
  return createHash("sha256").update(body).digest("hex");
}

export function companionPathFor(evidencePath: string): string {
  return `${evidencePath}.sha256`;
}

export function formatCompanionLine(digest: string, evidencePath: string): string {
  if (!DIGEST_RE.test(digest)) {
    throw new Error(`Invalid sha256 digest form: ${digest.slice(0, 16)}…`);
  }
  return `${digest}  ${path.basename(evidencePath)}\n`;
}

export function parseCompanionFile(companionPath: string): {
  digest: string;
  filename: string;
} {
  const text = fs.readFileSync(companionPath, "utf8").trim();
  const match = /^([a-f0-9]{64}) {2}(.+)$/.exec(text);
  if (!match) {
    throw new Error(`Invalid companion format: ${companionPath}`);
  }
  return { digest: match[1]!, filename: match[2]! };
}

/**
 * Seal already-persisted final evidence bytes.
 * Reads exact bytes → SHA256 → writes companion → does NOT mutate JSON.
 */
export function sealEvidenceFile(evidencePath: string): {
  digest: string;
  companionPath: string;
  bytes: Buffer;
} {
  const bytes = fs.readFileSync(evidencePath);
  const digest = createHash("sha256").update(bytes).digest("hex");
  const companion = companionPathFor(evidencePath);
  fs.writeFileSync(companion, formatCompanionLine(digest, evidencePath));
  return { digest, companionPath: companion, bytes };
}

/**
 * Verify companion against current evidence bytes (read-only on JSON).
 */
export function verifyEvidenceCompanion(evidencePath: string): {
  ok: boolean;
  actualDigest: string;
  companionDigest: string;
  filename: string;
} {
  const actualDigest = computeEvidenceSha256(evidencePath);
  const parsed = parseCompanionFile(companionPathFor(evidencePath));
  const ok =
    parsed.digest.length === 64 &&
    DIGEST_RE.test(parsed.digest) &&
    parsed.filename === path.basename(evidencePath) &&
    parsed.digest === actualDigest;
  return {
    ok,
    actualDigest,
    companionDigest: parsed.digest,
    filename: parsed.filename,
  };
}

/**
 * Rewrite companion only — JSON must remain byte-identical.
 */
export function rewriteCompanionOnly(evidencePath: string): {
  digest: string;
  beforeJsonSha: string;
  afterJsonSha: string;
  jsonUnchanged: boolean;
} {
  const beforeJsonSha = computeEvidenceSha256(evidencePath);
  const sealed = sealEvidenceFile(evidencePath);
  const afterJsonSha = computeEvidenceSha256(evidencePath);
  return {
    digest: sealed.digest,
    beforeJsonSha,
    afterJsonSha,
    jsonUnchanged: beforeJsonSha === afterJsonSha,
  };
}
