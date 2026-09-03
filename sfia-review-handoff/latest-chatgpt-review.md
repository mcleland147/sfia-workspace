# SFIA Review Pack — CORR-MW5-DLV-03 (challenge episode lifecycle correction candidate)

1. Timestamp: 2026-09-03T20:18:11+0200 / 2026-09-03 20:18 CEST (Europe/Paris)
2. Cycle: CORR-MW5-DLV-03 — INC — challenge episode counter lifecycle (CRITICAL)
3. Profile: CRITICAL
4. Morris GO consumed: GO MORRIS — CORR-MW5-DLV-03 — CORRECTION LOCALE DU LIFECYCLE DU COMPTEUR DE CHALLENGE PAR ÉPISODE + TEST MULTI-ÉPISODE + RÉGRESSIONS DÉTERMINISTES — REVIEW HANDOFF L3 — NO REAL — NO PROJECT COMMIT/PUSH/PR/MERGE — NO ARCHITECTURE/PERSISTENCE EXPANSION.
5. Repo / worktree / branch:
   - repository: mcleland147/sfia-workspace
   - worktree: /Users/morris/Projects/sfia-workspace-nora-mw5-critical-challenge-clarification
   - branch: delivery/sfia-studio-nora-mw5-critical-challenge-clarification
6. HEAD / origin/main / merge-base:
   - HEAD: 9b45f0d7700a3127fa28c13f37ffae40432ae05c
   - origin/main: 9b45f0d7700a3127fa28c13f37ffae40432ae05c
   - merge-base: 9b45f0d7700a3127fa28c13f37ffae40432ae05c
   - equality: HEAD == merge-base == origin/main == 9b45f0d7700a3127fa28c13f37ffae40432ae05c
7. Initial Git truth (before CORR-03 mutation):
   - handoff tip observed: 256287f06bef524b6b098a0562ce41c61958e8b9
   - handoff blob observed: f00d7ca53e7822f45e0bffbab03a0ae7da309e59
   - title: # SFIA Review Pack — CORR-MW5-DLV-02 (final local deterministic correction candidate)
   - candidate CORR-DLV-02 present (local uncommitted); no project commit; no staged project files
   - status at pack write (post-CORR-03):
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/e2e/studio-option-a.spec.ts
 M projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-eval/catalog.ts
 M projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
 M projects/sfia-studio/app/lib/nora-eval/index.ts
 M projects/sfia-studio/app/lib/nora-eval/scorers.ts
 M projects/sfia-studio/app/lib/nora-eval/types.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
?? .tmp-sfia-review/corr-mw5-artifacts/
?? .tmp-sfia-review/corr-mw5-dlv02-artifacts/
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.product-authority.facts.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.s01-s04.disposition.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw5.challenge.eval.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/mw5.analyzeIntent.challenge-context.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.session.store.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/mw5ChallengeSessionStore.ts
?? projects/sfia-studio/app/features/project-assistant/f2/resolveMw5ProductAuthorityFromOa.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/mw5ProductAuthorityFacts.ts
?? projects/sfia-studio/app/lib/nora-eval/mw5Observe.ts
?? test-results/
```
8. Previous handoff tip/blob/title:
   - tip: 256287f06bef524b6b098a0562ce41c61958e8b9
   - blob: f00d7ca53e7822f45e0bffbab03a0ae7da309e59
   - title: # SFIA Review Pack — CORR-MW5-DLV-02 (final local deterministic correction candidate)
   - parity: OK
9. Sources actually read this cycle:
   - prompts/templates/sfia-cycle-execution-template.md (CKC Cycle 8 detailed pilot ABSENT — none invented; fallback v2.6)
   - method/sfia-fast-track/core/sfia-cycle-routing-guide.md
   - method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
   - method/sfia-fast-track/core/sfia-rules-and-guardrails.md
   - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
   - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md
   - projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
   - projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
   - projects/sfia-studio/product-completion/01-product-completion-cadrage.md
   - projects/sfia-studio/nora-cognitive-completion/03-nora-cognitive-completion-product-experience.md
   - projects/sfia-studio/nora-cognitive-completion/05-nora-source-locked-cognitive-backlog.md
   - sfia-v3-framing 30/32/33/34/35/37
   - origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md (CORR-MW5-DLV-02)
   - features/project-assistant/f2/mw5ChallengeSessionStore.ts
   - features/project-assistant/f2/orchestrateF2.ts (clear call site read-only)
   - lib/nora-cognitive-runtime/criticalChallengeClarification.ts (cap/escalate read-only)
   - MW5 product/disposition/Playwright tests
10. Convergence pre-check: V3-F05; MW5; Option C KEEP; F2 ADAPT; mw5ChallengeSessionStore ADAPT; LPS/HD/DecisionBasis KEEP; CWP KEEP; MW3/MW4 KEEP; CORR-01B/02B/03 UX/04 Eval PASS prior; sole gap = episode lifecycle; no FA/TA/persistence/schema/second Runner/provider/OpenAI primitive/UI/MW6; R2 OPEN distinct GO.
11. Finding CORR-MW5-03C: clearMw5IssuedChallenge set latest=null but KEPT priorStructuralChallengeCount. After episode A issued <=3 questions then satisfied/cleared, episode B on same projectId could immediately ESCALATE with challenge_cap_reached_escalate without its own 1-3 questions. Cap must be per open episode, not Project lifetime.
12. Reproduction before correction:
    - Unit store test FAILED with clear preserving prior=3 (expected 0). Observed: expected 0 received 3.
    - Deterministic simulation: remember(3); clearBug -> prior=3 escalate=true; clearFix -> prior=0 escalate=false.
13. Store lifecycle BEFORE:
```typescript
export function clearMw5IssuedChallenge(projectId: string): void {
  const prev = getMw5ChallengeSession(projectId);
  getSlot().byProjectId.set(projectId, {
    projectId,
    priorStructuralChallengeCount: prev.priorStructuralChallengeCount,
    latest: null,
  });
}
```
14. Exact modification: clearMw5IssuedChallenge now sets priorStructuralChallengeCount = 0 and latest = null.
15. Store lifecycle AFTER:
```typescript
export function clearMw5IssuedChallenge(projectId: string): void {
  // Episode close: drop latest AND reset the structural challenge counter.
  // Cap is per open MW5 episode, not Project lifetime (CORR-MW5-03C).
  getSlot().byProjectId.set(projectId, {
    projectId,
    priorStructuralChallengeCount: 0,
    latest: null,
  });
}
```
16. Justification: priorStructuralChallengeCount = structural questions already issued IN THE CURRENT OPEN MW5 EPISODE. Not Project lifetime budget, not Truth C, not Evidence, not HumanDecision. Closing a satisfied episode must reset both latest and count so a distinct Critical episode receives a fresh 1-3 allowance while an unresolved episode still escalates at prior>=3 with no 4th question.
17. Unit store test: mw5.challenge.session.store.d0.test.ts — clear->0; multi-episode restart; unresolved accumulation.
18. Unresolved episode cap: disposition test retained — prior=3 unsatisfied -> ESCALATE, challenges=[].
19. Multi-episode product-path: same projectId; A STRUCTURING CHALLENGE -> sufficient Rec -> session latest null + prior 0 -> B HIGH_ASSURANCE CHALLENGE (not ESCALATE / not challenge_cap_reached_escalate); structuralChallengeCount in 1..3.
20. Client-history regression: prior CORR-02B tests retained (server store authoritative).
21. Files modified/created:
    - MODIFIED: projects/sfia-studio/app/features/project-assistant/f2/mw5ChallengeSessionStore.ts
    - CREATED: projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.session.store.d0.test.ts
    - MODIFIED: projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts (multi-episode test only)
22. Complete content / exploitable sections:

### FULL FILE — mw5ChallengeSessionStore.ts

```typescript
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

```

### FULL FILE — mw5.challenge.session.store.d0.test.ts

```typescript
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

```

### MULTI-EPISODE PRODUCT TEST SECTION

```typescript
it("CORR-MW5-03C — distinct Critical episode B on same project gets fresh 1–3 challenge (not A's quota)", async () => {
    const episodeA = await orchestrateAssistantSend({
      projectId,
      content: "Fais évoluer l'architecture __F2_STRUCTURING__",
    });
    expect(episodeA.ok).toBe(true);
    if (!episodeA.ok) return;
    expect(episodeA.mw5?.disposition).toBe("CHALLENGE");
    expect(episodeA.mw5?.structuralChallengeCount).toBeGreaterThan(0);
    expect(episodeA.mw5?.structuralChallengeCount).toBeLessThanOrEqual(
      MW5_MAX_STRUCTURAL_CHALLENGES,
    );
    expect(episodeA.f2?.proposal).toBeNull();

    const satisfiedA = await orchestrateAssistantSend({
      projectId,
      content:
        "Prémisse d'architecture product explicitée pour épisode A. __F2_STRUCTURING__ __MW5_SATISFACTION_SUFFICIENT__",
      history: [
        {
          role: "user",
          content: "Fais évoluer l'architecture __F2_STRUCTURING__",
        },
        { role: "assistant", content: episodeA.text },
      ],
    });
    expect(satisfiedA.ok).toBe(true);
    if (!satisfiedA.ok) return;
    expect(satisfiedA.mw5?.challengeSatisfied).toBe(true);
    expect(satisfiedA.mw5?.recommendationAllowed).toBe(true);
    expect(satisfiedA.f2?.proposal).toBeTruthy();

    // Episode A closed: process-local counter must not pollute episode B.
    const sessionAfterA = getMw5ChallengeSession(projectId);
    expect(sessionAfterA.latest).toBeNull();
    expect(sessionAfterA.priorStructuralChallengeCount).toBe(0);

    const episodeB = await orchestrateAssistantSend({
      projectId,
      content: "Prépare une reco HA distincte __MW5_HIGH_ASSURANCE__",
    });
    expect(episodeB.ok).toBe(true);
    if (!episodeB.ok) return;
    expect(episodeB.mw5?.disposition).toBe("CHALLENGE");
    expect(episodeB.mw5?.disposition).not.toBe("ESCALATE");
    expect(episodeB.mw5?.recommendationAllowed).toBe(false);
    expect(episodeB.f2?.proposal).toBeNull();
    expect(episodeB.mw5?.structuralChallengeCount).toBeGreaterThan(0);
    expect(episodeB.mw5?.structuralChallengeCount).toBeLessThanOrEqual(
      MW5_MAX_STRUCTURAL_CHALLENGES,
    );
    expect(episodeB.text).toMatch(/\[MW5 CHALLENGE/);
    // Must not inherit A's exhausted quota as immediate escalate.
    expect(episodeB.mw5?.reasonCodes ?? []).not.toContain(
      "challenge_cap_reached_escalate",
    );
  });
```

23. Targeted tests: 71 passed (store+product+disposition+authority+analyzeIntent+eval+f2.orchestrate)
24. tsc: PASS (exit 0)
25. lint: PASS (exit 0, 0 warnings)
26. npm test: 279 files passed | 14 skipped; 2566 tests passed | 132 skipped (exit 0)
27. build: PASS (exit 0)
28. Playwright: npx playwright test e2e/studio-option-a.spec.ts -g "MW5 — Critical Challenge" -> 1 passed (exit 0)
29. git diff --check: clean on CORR-03 touched sources
30. Fake/Real: FakeConversationProvider only; ZERO REAL; this cycle does not change provider boundary; bug is process-local lifecycle
31. Proof ceiling: DETERMINISTIC PROVEN for MW5 local candidate scope including CORR-MW5-03C
32. D-MW5-E2E-STRUCTURING: remains CLOSED (Playwright re-PASS)
33. D-MW5-R2: OPEN — distinct Morris GO required; NOT authorized this cycle
34. Inherited reserves: D-MW5-R2 only
35. New debt: none
36. Final Git truth:
   - branch: delivery/sfia-studio-nora-mw5-critical-challenge-clarification
   - HEAD: 9b45f0d7700a3127fa28c13f37ffae40432ae05c
   - project commit: NONE
   - staged project: NONE
37. Project Git actions: NONE
38. Verdict: PASS CANDIDATE
39. Next gate: ChatGPT Critical Re-Review of CORR-MW5-DLV-03 ONLY. NO REAL. NO PROJECT COMMIT/PUSH/PR/MERGE. NO MW5 CLOSURE. NO MW6.

---

## Anti-claims

CORR-MW5-DLV-03 PASS != GO REAL != R2 PROVEN != READY FOR REAL != MW5 COMPLETE != Cognitive Completion PROVEN != runtime v3 ADOPTED != production model selected != project commit/push/PR/merge != MW6 authorized.

---

## Instruction ChatGPT

Lire le Review Handoff Git distant:
- repository: mcleland147/sfia-workspace
- branch: sfia/review-handoff
- file: sfia-review-handoff/latest-chatgpt-review.md
- tip: <REMOTE_TIP_VERIFIE>
- blob: <REMOTE_BLOB_VERIFIE>
- cycle: CORR-MW5-DLV-03 — challenge episode lifecycle correction candidate
- proof: deterministic only
- request: ChatGPT Critical Re-Review of CORR-MW5-DLV-03
- ZERO REAL
- NO project commit/push/PR/merge
