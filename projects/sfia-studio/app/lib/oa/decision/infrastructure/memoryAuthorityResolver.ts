/**
 * In-memory AuthorityResolver.
 *
 * Critical rules:
 * - NEVER trust client authorityLevel / displayName / actorId heuristics
 * - Scope must match exactly (mismatch → reason scope_mismatch)
 * - N3 does NOT automatically grant Pilot or Morris
 * - requirePilotGate → canActAsPilot === true (canActAsMorris alone insufficient)
 * - requireMorrisGate → canActAsMorris === true (canActAsPilot alone insufficient)
 * - Expired evidence is ignored
 */
import { isConfirmationExpired, levelSatisfies } from "../domain/invariants";
import type {
  AuthorityEvidence,
  AuthorityLevel,
  VerifyAuthorityRequest,
  VerifyAuthorityResult,
} from "../domain/types";
import type { AuthorityResolverPort } from "../ports/authorityResolver";

export class MemoryAuthorityResolver implements AuthorityResolverPort {
  private readonly byId = new Map<string, AuthorityEvidence>();

  /**
   * Register authority evidence. Immutable after first write — re-register
   * of the same evidenceId (e.g. escalating canActAsMorris) is rejected.
   */
  register(evidence: AuthorityEvidence): void {
    if (this.byId.has(evidence.evidenceId)) {
      throw new Error("evidence_immutable");
    }
    this.byId.set(evidence.evidenceId, structuredClone(evidence));
  }

  getEvidence(evidenceId: string): AuthorityEvidence | null {
    const found = this.byId.get(evidenceId);
    return found ? structuredClone(found) : null;
  }

  listByActor(actorId: string): AuthorityEvidence[] {
    const out: AuthorityEvidence[] = [];
    for (const e of this.byId.values()) {
      if (e.actorId === actorId) out.push(structuredClone(e));
    }
    return out;
  }

  verify(request: VerifyAuthorityRequest): VerifyAuthorityResult {
    // Hostile injections are deliberately ignored:
    // request.authorityLevel, request.displayName
    void request.authorityLevel;
    void request.displayName;

    const nowIso = new Date().toISOString();
    const candidates: AuthorityEvidence[] = [];

    if (request.evidenceId) {
      const specific = this.byId.get(request.evidenceId);
      if (!specific) {
        return {
          ok: false,
          reason: "evidence_not_found",
        };
      }
      if (specific.actorId !== request.actorId) {
        return {
          ok: false,
          reason: "actor_mismatch",
          evidenceId: specific.evidenceId,
        };
      }
      candidates.push(specific);
    } else {
      for (const e of this.byId.values()) {
        if (e.actorId === request.actorId) candidates.push(e);
      }
    }

    if (candidates.length === 0) {
      return { ok: false, reason: "no_evidence" };
    }

    // Prefer scope-exact matches; collect scope mismatches separately.
    const scopeMatches = candidates.filter((e) => e.scope === request.scope);
    if (scopeMatches.length === 0) {
      return {
        ok: false,
        reason: "scope_mismatch",
        evidenceId: candidates[0]?.evidenceId,
      };
    }

    let best: AuthorityEvidence | undefined;
    for (const e of scopeMatches) {
      if (isConfirmationExpired(e.expiresAt, nowIso)) continue;
      if (!levelSatisfies(e.level, request.requiredLevel)) continue;
      if (request.requirePilotGate && e.canActAsPilot !== true) {
        continue;
      }
      if (request.requireMorrisGate && e.canActAsMorris !== true) {
        continue;
      }
      if (
        !best ||
        levelRank(e.level) > levelRank(best.level) ||
        gatePreferenceScore(e, request) > gatePreferenceScore(best, request)
      ) {
        best = e;
      }
    }

    if (!best) {
      // Distinguish pilot/morris gate vs level vs expiry among scope matches.
      const anyNonExpired = scopeMatches.some(
        (e) => !isConfirmationExpired(e.expiresAt, nowIso),
      );
      if (!anyNonExpired) {
        return {
          ok: false,
          reason: "expired",
          evidenceId: scopeMatches[0]?.evidenceId,
        };
      }
      const levelOk = scopeMatches.some(
        (e) =>
          !isConfirmationExpired(e.expiresAt, nowIso) &&
          levelSatisfies(e.level, request.requiredLevel),
      );
      if (levelOk && request.requirePilotGate) {
        return {
          ok: false,
          reason: "pilot_gate_denied",
          verifiedLevel: highestLevel(scopeMatches),
          canActAsPilot: false,
          canActAsMorris: scopeMatches.some((e) => e.canActAsMorris === true),
          evidenceId: scopeMatches[0]?.evidenceId,
        };
      }
      if (levelOk && request.requireMorrisGate) {
        return {
          ok: false,
          reason: "morris_gate_denied",
          verifiedLevel: highestLevel(scopeMatches),
          canActAsPilot: scopeMatches.some((e) => e.canActAsPilot === true),
          canActAsMorris: false,
          evidenceId: scopeMatches[0]?.evidenceId,
        };
      }
      return {
        ok: false,
        reason: "level_insufficient",
        verifiedLevel: highestLevel(scopeMatches),
        evidenceId: scopeMatches[0]?.evidenceId,
      };
    }

    return {
      ok: true,
      verifiedLevel: best.level,
      canActAsPilot: best.canActAsPilot === true,
      canActAsMorris: best.canActAsMorris === true,
      reason: "verified",
      evidenceId: best.evidenceId,
    };
  }
}

/** Prefer evidence that satisfies the requested gate(s) when ranking ties. */
function gatePreferenceScore(
  e: AuthorityEvidence,
  request: VerifyAuthorityRequest,
): number {
  let score = 0;
  if (request.requirePilotGate && e.canActAsPilot === true) score += 2;
  if (request.requireMorrisGate && e.canActAsMorris === true) score += 2;
  if (e.canActAsPilot === true) score += 1;
  if (e.canActAsMorris === true) score += 1;
  return score;
}

function levelRank(level: AuthorityLevel): number {
  if (level === "N3") return 3;
  if (level === "N2") return 2;
  return 1;
}

function highestLevel(
  evidence: AuthorityEvidence[],
): AuthorityLevel | undefined {
  let best: AuthorityLevel | undefined;
  for (const e of evidence) {
    if (!best || levelRank(e.level) > levelRank(best)) best = e.level;
  }
  return best;
}
