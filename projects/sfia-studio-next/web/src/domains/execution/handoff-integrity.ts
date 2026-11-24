import { createHash } from "crypto";

export type HandoffManifest = {
  filesCreated?: string[];
  filesModified?: string[];
  filesDeleted?: string[];
  filesMoved?: Array<{ from: string; to: string }>;
  /** Declared by report author — not proof of FS presence. */
  filesDeclared?: string[];
  /** Observed on disk at handoff time (server check). */
  filesObserved?: string[];
  /** Content actually read/consulted (SHA when available). */
  filesConsulted?: Array<{ path: string; sha256?: string }>;
  testsDeclared?: string[];
  testsExecuted?: string[];
  /** Captured stdout/stderr or exit code present — required to claim verified run. */
  testsCaptured?: string[];
  sourcesConsulted?: string[];
  commands?: string[];
  commandsExecuted?: string[];
  gaps?: string[];
  git?: {
    branch?: string | null;
    baseSha?: string | null;
    tipSha?: string | null;
  };
};

/**
 * C13 honesty helper — distinguish declaration vs observation vs consultation.
 * Never treat RESULT_*.txt alone as proof that an announced unit test ran.
 */
export function classifyManifestHonesty(manifest: HandoffManifest): {
  filesDeclared: number;
  filesObserved: number;
  filesConsulted: number;
  testsDeclared: number;
  testsExecuted: number;
  testsCaptured: number;
  canClaimVerifiedTests: boolean;
  notes: string[];
} {
  const filesDeclared =
    (manifest.filesDeclared?.length ?? 0) ||
    (manifest.filesCreated?.length ?? 0) + (manifest.filesModified?.length ?? 0);
  const filesObserved = manifest.filesObserved?.length ?? 0;
  const filesConsulted = manifest.filesConsulted?.length ?? 0;
  const testsDeclared = manifest.testsDeclared?.length ?? 0;
  const testsExecuted = manifest.testsExecuted?.length ?? 0;
  const testsCaptured = manifest.testsCaptured?.length ?? 0;
  const notes: string[] = [];
  if (filesDeclared > filesObserved) {
    notes.push("FILES_DECLARED_EXCEED_OBSERVED");
  }
  if (testsDeclared + testsExecuted > 0 && testsCaptured === 0) {
    notes.push("TESTS_ANNOUNCED_WITHOUT_CAPTURE");
  }
  return {
    filesDeclared,
    filesObserved,
    filesConsulted,
    testsDeclared,
    testsExecuted,
    testsCaptured,
    canClaimVerifiedTests: testsCaptured > 0,
    notes,
  };
}

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
