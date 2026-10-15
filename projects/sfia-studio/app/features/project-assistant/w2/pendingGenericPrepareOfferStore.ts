/**
 * Process-local pending generic PREPARE offer (chat-first continuity).
 *
 * Keyed by projectId + sessionKey to prevent cross-session bind (CR-P6-04).
 * Same durability class as mw5ChallengeSessionStore — NOT Product SQLite.
 *
 * P6-HQA-F05-GD4-01 Pass 02 — retains mission-effect fields needed for
 * intent fidelity (docs_write / documentary outputs / proposed capabilities)
 * without treating Nora proposals as Product path authority.
 *
 * LIMITATION (documented debt):
 * - Lost on process restart → no stale PREPARE from prior process.
 * - Not multi-instance durable.
 * Owner: P6 Product Continuity. Exit: durable PresentedSubject / session
 * Product binding under separate GO if restart continuity required.
 * Restart continuity is NOT PROVEN.
 */

const STORE_KEY = "__SFIA_F2_PENDING_GENERIC_PREPARE_OFFER__" as const;

/**
 * Mission-effect slice remembered with the CURRENT prepare offer.
 * Proposals (targetPath, artifactFileName, requiredCapabilities, …) are
 * NON-AUTHORITATIVE Nora candidates until Product resolve / pathRoot /
 * generalist capability resolution run at PREPARE.
 */
export type PendingGenericPrepareMissionEffects = {
  readonly intentKind: string | null;
  readonly artifactType: string | null;
  /** Nora candidate — never Product Git authority by itself (D-PC-09). */
  readonly proposedTargetPath: string | null;
  readonly proposedArtifactFileName: string | null;
  readonly proposedTargetRepositoryRef: string | null;
  readonly artifactBrief: string | null;
  readonly contentRequirements: readonly string[];
  readonly expectedOutputs: readonly string[];
  readonly proposedRequiredCapabilities: readonly string[];
  readonly validationExpectations: readonly string[];
  readonly evidenceRequirements: readonly string[];
  readonly requestedOperation: string | null;
  readonly reversibilityExpectation:
    | "reversible"
    | "irreversible"
    | "unknown"
    | null;
  readonly exitRequirementKinds: readonly string[];
};

export type PendingGenericPrepareOffer = {
  readonly projectId: string;
  /** Conversation/session discriminator — never cross-bind without match. */
  readonly sessionKey: string;
  readonly cycleInstanceId: string;
  readonly missionKey: string;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly outOfScope: readonly string[];
  readonly stopConditions: readonly string[];
  readonly risks: readonly string[];
  readonly reservations: readonly string[];
  readonly signalStructuralChange: boolean;
  readonly signalSecurityImpact: boolean;
  readonly signalArchitectureImpact: boolean;
  readonly signalDataImpact: boolean;
  readonly signalIrreversible: boolean;
  readonly contradictionConflictPresent: boolean;
  readonly offeredAtIso: string;
  readonly offerFingerprint: string;
  /** Mission-effect fidelity (Pass 02). Absent on ancient in-memory shapes → treat as empty. */
  readonly missionEffects?: PendingGenericPrepareMissionEffects;
};

type StoreSlot = {
  byKey: Map<string, PendingGenericPrepareOffer>;
};

function getSlot(): StoreSlot {
  const g = globalThis as typeof globalThis & { [STORE_KEY]?: StoreSlot };
  if (!g[STORE_KEY]) {
    g[STORE_KEY] = { byKey: new Map() };
  }
  return g[STORE_KEY];
}

function offerKey(projectId: string, sessionKey: string): string {
  return `${projectId.trim()}::${sessionKey.trim() || "default"}`;
}

function freezeMissionEffects(
  effects: PendingGenericPrepareMissionEffects | undefined,
): PendingGenericPrepareMissionEffects | undefined {
  if (!effects) return undefined;
  return Object.freeze({
    intentKind: effects.intentKind,
    artifactType: effects.artifactType,
    proposedTargetPath: effects.proposedTargetPath,
    proposedArtifactFileName: effects.proposedArtifactFileName,
    proposedTargetRepositoryRef: effects.proposedTargetRepositoryRef,
    artifactBrief: effects.artifactBrief,
    contentRequirements: Object.freeze([...effects.contentRequirements]),
    expectedOutputs: Object.freeze([...effects.expectedOutputs]),
    proposedRequiredCapabilities: Object.freeze([
      ...effects.proposedRequiredCapabilities,
    ]),
    validationExpectations: Object.freeze([...effects.validationExpectations]),
    evidenceRequirements: Object.freeze([...effects.evidenceRequirements]),
    requestedOperation: effects.requestedOperation,
    reversibilityExpectation: effects.reversibilityExpectation,
    exitRequirementKinds: Object.freeze([...effects.exitRequirementKinds]),
  });
}

export function resolvePrepareOfferSessionKey(input: {
  readonly sessionDbPath?: string | null;
  readonly sessionKey?: string | null;
}): string {
  if (input.sessionKey?.trim()) return input.sessionKey.trim();
  if (input.sessionDbPath?.trim()) {
    // Bound to session DB path identity — different sessions do not share offers.
    return `sessdb:${input.sessionDbPath.trim()}`;
  }
  return "default";
}

export function getPendingGenericPrepareOffer(
  projectId: string,
  sessionKey: string = "default",
): PendingGenericPrepareOffer | null {
  return getSlot().byKey.get(offerKey(projectId, sessionKey)) ?? null;
}

export function rememberPendingGenericPrepareOffer(
  offer: PendingGenericPrepareOffer,
): PendingGenericPrepareOffer {
  const next: PendingGenericPrepareOffer = {
    ...offer,
    sessionKey: offer.sessionKey.trim() || "default",
    scopeIn: Object.freeze([...offer.scopeIn]),
    scopeOut: Object.freeze([...offer.scopeOut]),
    outOfScope: Object.freeze([...offer.outOfScope]),
    stopConditions: Object.freeze([...offer.stopConditions]),
    risks: Object.freeze([...offer.risks]),
    reservations: Object.freeze([...offer.reservations]),
    missionEffects: freezeMissionEffects(offer.missionEffects),
  };
  getSlot().byKey.set(offerKey(offer.projectId, next.sessionKey), next);
  return next;
}

export function clearPendingGenericPrepareOffer(
  projectId: string,
  sessionKey: string = "default",
): void {
  getSlot().byKey.delete(offerKey(projectId, sessionKey));
}

export function resetPendingGenericPrepareOfferStoreForTests(): void {
  getSlot().byKey.clear();
}
