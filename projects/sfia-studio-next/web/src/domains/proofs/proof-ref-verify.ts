/**
 * CP-03 / G15 / Cycle 8 B1 — verify requalify proof refs with exact identity.
 * No substring matching. No silent fallback to an old handoff as "new proof".
 */

export type ProofRefCandidate = {
  ref: string;
  kind: "handoff" | "manifest_file" | "capture" | "integrity" | "unknown";
  accessible: boolean;
  attemptId: string | null;
  reason?: string;
};

export type ProofRefVerification =
  | { ok: true; candidate: ProofRefCandidate }
  | { ok: false; reason: string; candidate: ProofRefCandidate };

export type RequalifyProofMode = "new_proof" | "judgment_correction";

export function verifyNewProofRef(input: {
  newProofRef: string;
  attemptId: string;
  handoffId: string | null;
  handoffIntegrityHash: string | null;
  /** Exact paths / ids listed in handoff manifest. */
  manifestRefs: string[];
  captureIds?: string[];
  /**
   * new_proof: requires explicit newProofRef that is not merely the pre-existing handoff id
   *            unless `allowExistingHandoffAsNew` is set with a distinct newer capture/integrity.
   * judgment_correction: may reference existing handoff without claiming a new artifact.
   */
  mode?: RequalifyProofMode;
  /** Prior qualification handoff id — if newProofRef equals this alone in new_proof mode → refuse. */
  priorHandoffId?: string | null;
}): ProofRefVerification {
  const ref = (input.newProofRef || "").trim();
  const mode = input.mode ?? "new_proof";
  const base: ProofRefCandidate = {
    ref,
    kind: "unknown",
    accessible: false,
    attemptId: null,
  };
  if (!ref) {
    return { ok: false, reason: "PROOF_REF_EMPTY", candidate: base };
  }

  const exactManifest = (input.manifestRefs ?? []).find((m) => m === ref);
  const exactCapture = (input.captureIds ?? []).find((c) => c === ref);

  if (exactCapture) {
    return {
      ok: true,
      candidate: {
        ref,
        kind: "capture",
        accessible: true,
        attemptId: input.attemptId,
      },
    };
  }

  if (exactManifest) {
    return {
      ok: true,
      candidate: {
        ref,
        kind: "manifest_file",
        accessible: true,
        attemptId: input.attemptId,
      },
    };
  }

  if (input.handoffIntegrityHash && ref === input.handoffIntegrityHash) {
    return {
      ok: true,
      candidate: {
        ref,
        kind: "integrity",
        accessible: true,
        attemptId: input.attemptId,
      },
    };
  }

  if (input.handoffId && ref === input.handoffId) {
    if (mode === "new_proof") {
      // Echoing the same handoff already on the dossier is not a new proof.
      if (!input.priorHandoffId || ref === input.priorHandoffId) {
        return {
          ok: false,
          reason: "PROOF_REF_NOT_NEW — handoff déjà connu du dossier",
          candidate: { ...base, kind: "handoff", attemptId: input.attemptId },
        };
      }
    }
    return {
      ok: true,
      candidate: {
        ref,
        kind: "handoff",
        accessible: true,
        attemptId: input.attemptId,
      },
    };
  }

  const otherAttempt = /(?:attempt|efx|att)[_-]([a-z0-9-]{8,})/i.exec(ref);
  if (otherAttempt && !input.attemptId.includes(otherAttempt[1]!)) {
    return {
      ok: false,
      reason: "PROOF_REF_FOREIGN_ATTEMPT",
      candidate: { ...base, reason: "foreign_attempt_marker" },
    };
  }

  return {
    ok: false,
    reason: "PROOF_REF_NOT_ACCESSIBLE",
    candidate: base,
  };
}

export function collectManifestRefs(manifest: {
  filesCreated?: string[];
  filesModified?: string[];
  captures?: string[];
  gaps?: string[];
  sourcesConsulted?: string[];
} | null): string[] {
  if (!manifest) return [];
  return [
    ...(manifest.filesCreated ?? []),
    ...(manifest.filesModified ?? []),
    ...(manifest.captures ?? []),
    ...(manifest.sourcesConsulted ?? []),
  ].filter(Boolean);
}
