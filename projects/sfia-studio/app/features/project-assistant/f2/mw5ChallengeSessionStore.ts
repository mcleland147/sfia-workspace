/**
 * Process-local MW5 challenge session (CORR-MW5-02B provenance).
 *
 * Server-issued challenge state only — never trust client history for
 * "prior challenge exists" or challenge text. Same durability class as
 * F2 proposalStore (process-local, not Product SQLite persistence).
 */

const STORE_KEY = "__SFIA_F2_MW5_CHALLENGE_STORE__" as const;

export type Mw5IssuedChallengeLatest = {
  challenges: readonly string[];
  challengeText: string;
  structuralChallengeCount: number;
};

type Mw5ChallengeSession = {
  projectId: string;
  priorStructuralChallengeCount: number;
  latest: Mw5IssuedChallengeLatest | null;
};

type StoreSlot = {
  byProjectId: Map<string, Mw5ChallengeSession>;
};

function getSlot(): StoreSlot {
  const g = globalThis as typeof globalThis & { [STORE_KEY]?: StoreSlot };
  if (!g[STORE_KEY]) {
    g[STORE_KEY] = { byProjectId: new Map() };
  }
  return g[STORE_KEY];
}

function emptySession(projectId: string): Mw5ChallengeSession {
  return {
    projectId,
    priorStructuralChallengeCount: 0,
    latest: null,
  };
}

export function getMw5ChallengeSession(
  projectId: string,
): Mw5ChallengeSession {
  return getSlot().byProjectId.get(projectId) ?? emptySession(projectId);
}

export function rememberMw5IssuedChallenge(input: {
  projectId: string;
  challenges: readonly string[];
  challengeText: string;
}): Mw5ChallengeSession {
  const capped = input.challenges
    .map((c) => c.trim())
    .filter(Boolean)
    .slice(0, 3);
  const prev = getMw5ChallengeSession(input.projectId);
  const next: Mw5ChallengeSession = {
    projectId: input.projectId,
    priorStructuralChallengeCount:
      prev.priorStructuralChallengeCount + capped.length,
    latest: {
      challenges: Object.freeze([...capped]),
      challengeText: input.challengeText.trim().slice(0, 2000),
      structuralChallengeCount: capped.length,
    },
  };
  getSlot().byProjectId.set(input.projectId, next);
  return next;
}

export function clearMw5IssuedChallenge(projectId: string): void {
  // Episode close: drop latest AND reset the structural challenge counter.
  // Cap is per open MW5 episode, not Project lifetime (CORR-MW5-03C).
  getSlot().byProjectId.set(projectId, {
    projectId,
    priorStructuralChallengeCount: 0,
    latest: null,
  });
}

/** Test-only reset. */
export function resetMw5ChallengeStoreForTests(): void {
  const allowed =
    process.env.NODE_ENV === "test" ||
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET === "1";
  if (!allowed) {
    throw new Error("resetMw5ChallengeStoreForTests only allowed in tests.");
  }
  getSlot().byProjectId.clear();
}
