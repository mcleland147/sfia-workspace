/** @vitest-environment node */
/**
 * CORR-MW5-DLV-03 — MW5 challenge episode counter lifecycle (process-local store).
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  clearMw5IssuedChallenge,
  getMw5ChallengeSession,
  rememberMw5IssuedChallenge,
  resetMw5ChallengeStoreForTests,
} from "@/features/project-assistant/f2/mw5ChallengeSessionStore";

describe("MW5 challenge session store — episode lifecycle (CORR-MW5-03C)", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetMw5ChallengeStoreForTests();
  });

  afterEach(() => {
    resetMw5ChallengeStoreForTests();
  });

  it("clear resets priorStructuralChallengeCount to 0 (episode close)", () => {
    const projectId = "proj-mw5-episode-a";
    rememberMw5IssuedChallenge({
      projectId,
      challenges: [
        "Quelle prémisse A1 ?",
        "Quelle prémisse A2 ?",
        "Quelle prémisse A3 ?",
      ],
      challengeText: "[MW5 CHALLENGE] episode A",
    });
    const afterRemember = getMw5ChallengeSession(projectId);
    expect(afterRemember.latest).not.toBeNull();
    expect(afterRemember.priorStructuralChallengeCount).toBe(3);

    clearMw5IssuedChallenge(projectId);
    const afterClear = getMw5ChallengeSession(projectId);
    expect(afterClear.latest).toBeNull();
    expect(afterClear.priorStructuralChallengeCount).toBe(0);
  });

  it("distinct episode B on same projectId restarts count from B", () => {
    const projectId = "proj-mw5-multi-episode";
    rememberMw5IssuedChallenge({
      projectId,
      challenges: ["A1", "A2", "A3"],
      challengeText: "episode A",
    });
    expect(getMw5ChallengeSession(projectId).priorStructuralChallengeCount).toBe(
      3,
    );
    clearMw5IssuedChallenge(projectId);
    expect(getMw5ChallengeSession(projectId).priorStructuralChallengeCount).toBe(
      0,
    );

    rememberMw5IssuedChallenge({
      projectId,
      challenges: ["B1"],
      challengeText: "episode B",
    });
    const b = getMw5ChallengeSession(projectId);
    expect(b.latest?.challenges).toEqual(["B1"]);
    expect(b.priorStructuralChallengeCount).toBe(1);
  });

  it("unresolved episode still accumulates toward same-episode cap", () => {
    const projectId = "proj-mw5-open-cap";
    rememberMw5IssuedChallenge({
      projectId,
      challenges: ["Q1", "Q2"],
      challengeText: "open",
    });
    rememberMw5IssuedChallenge({
      projectId,
      challenges: ["Q3"],
      challengeText: "open again",
    });
    expect(getMw5ChallengeSession(projectId).priorStructuralChallengeCount).toBe(
      3,
    );
    // no clear — episode still open; policy uses prior>=3 to escalate
  });
});
