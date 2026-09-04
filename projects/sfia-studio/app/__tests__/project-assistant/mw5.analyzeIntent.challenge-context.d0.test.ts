/** @vitest-environment node */
/**
 * CORR-MW5-02B — analyzeIntent receives bounded server challenge context
 * on the SAME provider call. ZERO REAL.
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";

describe("analyzeIntent MW5 challenge context (CORR-MW5-02B)", () => {
  afterEach(() => {
    setConversationProviderForTests(null);
    resetMw5ChallengeStoreForTests();
  });

  it("without challengeContext: provider input has challengePresent=false and assessment forced null", async () => {
    const provider = new FakeConversationProvider();
    const spy = vi.spyOn(provider, "completeStructured");
    setConversationProviderForTests(provider);

    const result = await analyzeIntent({
      userContent: "ok __F2_STRUCTURING__ __MW5_SATISFACTION_SUFFICIENT__",
      projectSummary: "Projet test",
      challengeContext: { challengePresent: false },
      provider,
    });

    expect(spy).toHaveBeenCalledTimes(1);
    const messages = spy.mock.calls[0]?.[0]?.messages ?? [];
    const userMsg = messages.find((m) => m.role === "user")?.content ?? "";
    expect(userMsg).toContain("challengePresent=false");
    expect(userMsg).toContain("Demande courante");
    expect(userMsg).not.toContain("challengeQuestions:");
    expect(result.analysis.challengeResponseAssessment).toBeNull();
  });

  it("with challengeContext: same call includes real challenge questions; single completion", async () => {
    const provider = new FakeConversationProvider();
    const spy = vi.spyOn(provider, "completeStructured");
    setConversationProviderForTests(provider);

    const result = await analyzeIntent({
      userContent:
        "Prémisse d'architecture product explicitée. __F2_STRUCTURING__ __MW5_SATISFACTION_SUFFICIENT__",
      projectSummary: "Projet test",
      challengeContext: {
        challengePresent: true,
        challenges: [
          "Quelle prémisse structurante n'est pas encore établie ?",
          "Quel périmètre reste non fondé ?",
        ],
        challengedPremise: "[MW5 CHALLENGE] count=2 server-issued",
        structuralChallengeCount: 2,
      },
      provider,
    });

    expect(spy).toHaveBeenCalledTimes(1);
    const messages = spy.mock.calls[0]?.[0]?.messages ?? [];
    const userMsg = messages.find((m) => m.role === "user")?.content ?? "";
    expect(userMsg).toContain("MW5_CHALLENGE_CONTEXT");
    expect(userMsg).toContain("challengePresent: true");
    expect(userMsg).toContain(
      "Quelle prémisse structurante n'est pas encore établie ?",
    );
    expect(userMsg).toContain("Demande courante (à évaluer):");
    expect(userMsg).toContain("__MW5_SATISFACTION_SUFFICIENT__");
    expect(result.analysis.challengeResponseAssessment).toBe("sufficient");
  });
});
