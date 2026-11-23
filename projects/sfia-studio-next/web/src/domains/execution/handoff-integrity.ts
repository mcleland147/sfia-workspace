import { createHash } from "crypto";

export type HandoffManifest = {
  filesCreated?: string[];
  filesModified?: string[];
  filesDeleted?: string[];
  filesMoved?: Array<{ from: string; to: string }>;
  testsDeclared?: string[];
  testsExecuted?: string[];
  testsCaptured?: string[];
  sourcesConsulted?: string[];
  commands?: string[];
  gaps?: string[];
  git?: {
    branch?: string | null;
    baseSha?: string | null;
    tipSha?: string | null;
  };
};

export function handoffIntegrityHash(input: {
  attemptId: string;
  contractFingerprint: string;
  reportMarkdown: string;
  manifest: HandoffManifest;
}): string {
  return createHash("sha256")
    .update(
      JSON.stringify({
        attemptId: input.attemptId,
        contractFingerprint: input.contractFingerprint,
        reportFp: createHash("sha256").update(input.reportMarkdown, "utf8").digest("hex"),
        manifest: input.manifest,
      }),
    )
    .digest("hex");
}

export function inventoryComplete(manifest: HandoffManifest): boolean {
  const n =
    (manifest.filesCreated?.length ?? 0) +
    (manifest.filesModified?.length ?? 0) +
    (manifest.filesDeleted?.length ?? 0) +
    (manifest.filesMoved?.length ?? 0);
  if (n === 0) return (manifest.gaps ?? []).some((g) => /inventaire|aucune?\s+modif/i.test(g));
  return true;
}
