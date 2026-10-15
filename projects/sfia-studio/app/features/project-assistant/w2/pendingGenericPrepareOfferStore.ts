/**
 * Process-local pending generic PREPARE offer (chat-first continuity).
 *
 * Keyed by projectId + sessionKey to prevent cross-session bind (CR-P6-04).
 * Same durability class as mw5ChallengeSessionStore — NOT Product SQLite.
 *
 * LIMITATION (documented debt):
 * - Lost on process restart → no stale PREPARE from prior process.
 * - Not multi-instance durable.
 * Owner: P6 Product Continuity. Exit: durable PresentedSubject / session
 * Product binding under separate GO if restart continuity required.
 * Restart continuity is NOT PROVEN.
 */

const STORE_KEY = "__SFIA_F2_PENDING_GENERIC_PREPARE_OFFER__" as const;

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
