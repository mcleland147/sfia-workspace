import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import type { ProofPackVerification } from "../types/contracts.js";

const CORE_ARTIFACTS = [
  "contract.json",
  "contractHash.txt",
  "request.json",
  "gate.json",
  "events.jsonl",
] as const;

const SUCCESS_ARTIFACTS = ["summary.json", "cursor-fixture.json", "git-results.json"] as const;

/**
 * Verify fixture proof pack completeness against harness proofDir.
 * Single source of truth — does not invent a second store.
 */
export function verifyProofPack(
  proofDir: string,
  options: { requireSuccessArtifacts?: boolean } = {},
): ProofPackVerification {
  const required = [
    ...CORE_ARTIFACTS,
    ...(options.requireSuccessArtifacts ? SUCCESS_ARTIFACTS : []),
  ];
  const present: string[] = [];
  const missing: string[] = [];
  for (const name of required) {
    if (existsSync(path.join(proofDir, name))) present.push(name);
    else missing.push(name);
  }
  const integrityNotes: string[] = [];
  const hashFile = path.join(proofDir, "contractHash.txt");
  if (existsSync(hashFile)) {
    const hash = readFileSync(hashFile, "utf8").trim();
    if (!/^[a-f0-9]{64}$/i.test(hash)) {
      integrityNotes.push("contractHash.txt format unexpected");
    } else {
      integrityNotes.push("contractHash.txt present (sha256 hex)");
    }
  }
  if (existsSync(path.join(proofDir, "events.jsonl"))) {
    integrityNotes.push("events.jsonl present (journal canonical)");
  }
  return {
    ok: missing.length === 0,
    missing: [...missing],
    present,
    integrityNotes,
  };
}
