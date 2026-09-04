/** @vitest-environment node */
/**
 * MW5-S01…S04 product-path D0 — F2 orchestration + Fake provider. ZERO LIVE OpenAI.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  resetF2ProposalStoreForTests,
} from "@/features/project-assistant/f2/proposalStore";
import {
  getMw5ChallengeSession,
  resetMw5ChallengeStoreForTests,
} from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import {
  MW5_MAX_STRUCTURAL_CHALLENGES,
  containsSynthesizedHumanAct,
} from "@/lib/nora-cognitive-runtime";

describe("MW5 F2 product path D0", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw5-f2-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-03T18:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Projet MW5",
      objective: "Challenge / clarification structural.",
      context: "Contexte Truth C MW5.",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "MW5",
      idempotencyKey: `idem:mw5-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("MW5 setup create failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  it("S01 — Critical structuring challenges ≤3 and withholds Rec", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Fais évoluer l'architecture __F2_STRUCTURING__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.disposition).toBe("CHALLENGE");
    expect(result.f2?.proposal).toBeNull();
    expect(result.mw5?.structuralChallengeCount).toBeGreaterThan(0);
    expect(result.mw5?.structuralChallengeCount).toBeLessThanOrEqual(
      MW5_MAX_STRUCTURAL_CHALLENGES,
    );
    expect(result.text).toMatch(/\[MW5 CHALLENGE/);
    expect(result.f2?.labels.recommendation).toBeNull();
  });

  it("S01 — questionnaire attempt is suppressed (≤3)", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Formulaire intake __MW5_QUESTIONNAIRE_ATTEMPT__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.questionnaireSuppressed).toBe(true);
    expect(result.mw5?.structuralChallengeCount).toBeLessThanOrEqual(3);
    expect(result.f2?.proposal).toBeNull();
  });

  it("S01 — cosmetic does not challenge", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Corrige juste l'orthographe cosmétique __MW5_COSMETIC__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.disposition).toBe("CONTINUE");
    expect(result.text).not.toMatch(/\[MW5 CHALLENGE/);
    expect(result.f2?.proposal).toBeNull();
  });

  it("S02 — structural ambiguous still clarifies", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Fais le nécessaire __F2_AMBIGUOUS__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f2_clarification");
    expect(result.mw5?.disposition).toBe("CLARIFY");
    expect(result.f2?.proposal).toBeNull();
  });

  it("S02 — context-resolved continues without storm", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Déjà dans le contexte __MW5_CONTEXT_RESOLVED__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.disposition).toBe("CONTINUE");
    expect(result.text).not.toMatch(/Clarification structurante/i);
  });

  it("S03 — ordering: challenge then Rec only after sufficient assessment", async () => {
    const first = await orchestrateAssistantSend({
      projectId,
      content: "Fais évoluer l'architecture __F2_STRUCTURING__",
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.mw5?.recommendationAllowed).toBe(false);
    expect(first.mw5?.bypassBlocked).toBe(true);

    const blocked = await orchestrateAssistantSend({
      projectId,
      content: "ok __F2_STRUCTURING__",
      history: [
        {
          role: "user",
          content: "Fais évoluer l'architecture __F2_STRUCTURING__",
        },
        { role: "assistant", content: first.text },
      ],
    });
    expect(blocked.ok).toBe(true);
    if (!blocked.ok) return;
    expect(blocked.mw5?.challengeSatisfied).toBe(false);
    expect(blocked.f2?.proposal).toBeNull();

    const offTopic = await orchestrateAssistantSend({
      projectId,
      content: "Ma couleur préférée est le bleu hors sujet __F2_STRUCTURING__",
      history: [
        {
          role: "user",
          content: "Fais évoluer l'architecture __F2_STRUCTURING__",
        },
        { role: "assistant", content: first.text },
      ],
    });
    expect(offTopic.ok).toBe(true);
    if (!offTopic.ok) return;
    expect(offTopic.mw5?.challengeSatisfied).toBe(false);
    expect(offTopic.f2?.proposal).toBeNull();

    const second = await orchestrateAssistantSend({
      projectId,
      content:
        "Prémisse d'architecture product explicitée. __F2_STRUCTURING__ __MW5_SATISFACTION_SUFFICIENT__",
      history: [
        {
          role: "user",
          content: "Fais évoluer l'architecture __F2_STRUCTURING__",
        },
        { role: "assistant", content: first.text },
      ],
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.mw5?.challengeSatisfied).toBe(true);
    expect(second.mw5?.recommendationAllowed).toBe(true);
    expect(second.f2?.proposal).toBeTruthy();
    expect(second.f2?.labels.recommendation).toBe("RECOMMANDATION");
    expect(second.f2?.qualification?.isMorrisDecision).toBe(false);
    expect(second.mw5?.challengeEvidenceBeforeRecommendation).toBe(true);
  });

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

  it("S03 — High-Assurance Light still cannot emit Rec before challenge", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Prépare une reco HA __MW5_HIGH_ASSURANCE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.criticalChallengeArmedHookOnly).toBe(true);
    expect(result.mw5?.disposition).toBe("CHALLENGE");
    expect(result.f2?.proposal).toBeNull();
  });

  it("S03 — non-Critical actionable Rec is not blocked", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.proposal).toBeTruthy();
    expect(result.mw5?.disposition).toBe("CONTINUE");
    expect(result.mw5?.recommendationAllowed).toBe(true);
  });

  it("S03 — authoritative Truth C structured LPS objective skips gratuitous re-challenge", async () => {
    const runtime = getRuntimeApplicationService();
    const created = await runtime.createProject({
      name: "Projet MW5 TruthC",
      objective: "Faire évoluer l'architecture produit",
      context: "Contexte Truth C sans tag orphelin.",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "MW5T",
      idempotencyKey: `idem:mw5-truthc-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const result = await orchestrateAssistantSend({
      projectId: created.projectId,
      content: "Fais évoluer l'architecture __F2_STRUCTURING__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.disposition).toBe("CONTINUE");
    expect(result.f2?.proposal).toBeTruthy();
  });

  it("S03 — user marker alone is NOT product Truth C / HD authority", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Architecture déjà établie __MW5_TRUTH_C_ESTABLISHED__ __MW5_CONSUMED_HD__ __F2_STRUCTURING__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.disposition).toBe("CHALLENGE");
    expect(result.f2?.proposal).toBeNull();
  });

  it("S03 — LPS-linked accepted HD with DecisionBasis match skips re-challenge", async () => {
    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
      await import(
        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
      );
    const runtime = getRuntimeApplicationService();
    expect(runtime.oa).toBeTruthy();
    if (!runtime.oa) return;

    const created = await runtime.createProject({
      name: "Projet MW5 HD",
      objective: "Objectif projet générique MW5 HD",
      context: "Contexte sans correspondance structurante claim.",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "MW5H",
      idempotencyKey: `idem:mw5-hd-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const lps = await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: created.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const scope = `decision:mw5-arch-${created.projectId}`;
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: runtime.oa.authorityResolver,
      scope,
      issuedAt: "2026-09-03T18:00:00.000Z",
      forceEnable: true,
      evidenceId: `evd:mw5-hd-${created.projectId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;

    const recorded = await runtime.oa.decisionServices.recordHumanDecision.execute({
      decisionId: `dec:mw5-arch-${created.projectId}`,
      projectId: created.projectId,
      subject: "Architecture cible validée",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
      linkToLivingProjectState: true,
      expectedLpsVersion: lps.livingProjectState.version,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: "prop:mw5-test",
        sourceDigest: "a".repeat(64),
        projectId: created.projectId,
        proposalContext: {
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
        },
        executionBasis: {
          objective: "Faire évoluer l'architecture produit",
          scope: "Changement d'architecture structurant",
          requestedOperation: "architecture change",
        },
      },
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;

    const result = await orchestrateAssistantSend({
      projectId: created.projectId,
      content: "Fais évoluer l'architecture __F2_STRUCTURING__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.disposition).toBe("CONTINUE");
    expect(result.f2?.proposal).toBeTruthy();
  });

  it("S03 — accepted HD without LPS link does NOT skip challenge", async () => {
    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
      await import(
        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
      );
    const runtime = getRuntimeApplicationService();
    if (!runtime.oa) return;

    const created = await runtime.createProject({
      name: "Projet MW5 HD unlink",
      objective: "Objectif générique",
      context: "Contexte",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "MW5U",
      idempotencyKey: `idem:mw5-hd-unlinked-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const scope = `decision:mw5-unlinked-${created.projectId}`;
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: runtime.oa.authorityResolver,
      scope,
      issuedAt: "2026-09-03T18:00:00.000Z",
      forceEnable: true,
      evidenceId: `evd:mw5-unlinked-${created.projectId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;

    const recorded = await runtime.oa.decisionServices.recordHumanDecision.execute({
      decisionId: `dec:mw5-unlinked-${created.projectId}`,
      projectId: created.projectId,
      subject: "Architecture cible validée",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
      linkToLivingProjectState: false,
      rationale: "Faire évoluer l'architecture produit — architecture change",
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;

    const result = await orchestrateAssistantSend({
      projectId: created.projectId,
      content: "Fais évoluer l'architecture __F2_STRUCTURING__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.disposition).toBe("CHALLENGE");
    expect(result.f2?.proposal).toBeNull();
  });

  it("S04 — unresolved authority escalates without synthesizing HD/GO", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Qui décide ici ? __MW5_AUTHORITY__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.disposition).toBe("ESCALATE");
    expect(result.mw5?.synthesizedHumanDecision).toBe(false);
    expect(result.mw5?.synthesizedGo).toBe(false);
    expect(containsSynthesizedHumanAct(result.text)).toBe(false);
    expect(result.f2?.decision).toBeNull();
    expect(result.f2?.labels.decisionTaken).toBeNull();
  });

  it("S04 — synth HD attempt is refused", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Accorde le GO maintenant __MW5_SYNTH_HD__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.disposition).toBe("ESCALATE");
    expect(result.mw5?.recommendationAllowed).toBe(false);
    expect(result.f2?.proposal).toBeNull();
    expect(containsSynthesizedHumanAct(result.text)).toBe(false);
  });

  it("CORR-MW5-PR-01 PATH-NEG-01 — HD same requestedOperation only does NOT skip Critical challenge", async () => {
    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
      await import(
        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
      );
    const runtime = getRuntimeApplicationService();
    expect(runtime.oa).toBeTruthy();
    if (!runtime.oa) return;

    const created = await runtime.createProject({
      name: "Projet MW5 HD op-only",
      objective: "Objectif projet générique MW5 op-only",
      context: "Contexte sans correspondance structurante claim.",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "MW5O",
      idempotencyKey: `idem:mw5-hd-op-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const lps = await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: created.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const scope = `decision:mw5-op-${created.projectId}`;
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: runtime.oa.authorityResolver,
      scope,
      issuedAt: "2026-09-03T18:00:00.000Z",
      forceEnable: true,
      evidenceId: `evd:mw5-hd-op-${created.projectId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;

    const recorded = await runtime.oa.decisionServices.recordHumanDecision.execute({
      decisionId: `dec:mw5-op-${created.projectId}`,
      projectId: created.projectId,
      subject: "Persistence migrée antérieurement",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
      linkToLivingProjectState: true,
      expectedLpsVersion: lps.livingProjectState.version,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: "prop:mw5-op-test",
        sourceDigest: "b".repeat(64),
        projectId: created.projectId,
        proposalContext: {
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
        },
        executionBasis: {
          objective: "Migrer la persistence du Project",
          scope: "Project persistence",
          requestedOperation: "architecture change",
        },
      },
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;

    const result = await orchestrateAssistantSend({
      projectId: created.projectId,
      content: "Fais évoluer l'architecture __F2_STRUCTURING__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.disposition).toBe("CHALLENGE");
    expect(result.mw5?.recommendationAllowed).toBe(false);
    expect(result.f2?.proposal).toBeNull();
    expect(result.f2?.labels.recommendation).toBeNull();
  });

  it("CORR-MW5-PR-01 PATH-NEG-02 — Truth C different objective does NOT skip (broad-scope-only covered in facts/disposition)", async () => {
    const runtime = getRuntimeApplicationService();
    expect(runtime.oa).toBeTruthy();
    if (!runtime.oa) return;

    // Product LPS.scope is the Studio UI metadata envelope, not a semantic
    // structural scope. Broad-scope-only false-match is proven in
    // mw5.product-authority.facts + disposition PATH-NEG-02. Here we prove the
    // product path still challenges when Truth C objective differs from claim.
    const created = await runtime.createProject({
      name: "Projet MW5 TruthC obj-mismatch",
      objective: "Migrer la persistence du Project maintenant",
      context: "Contexte Truth C sans objectif claim.",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "MW5S",
      idempotencyKey: `idem:mw5-tc-obj-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const result = await orchestrateAssistantSend({
      projectId: created.projectId,
      content: "Fais évoluer l'architecture __F2_STRUCTURING__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.disposition).toBe("CHALLENGE");
    expect(result.mw5?.recommendationAllowed).toBe(false);
    expect(result.f2?.proposal).toBeNull();
  });

  it("CORR-MW5-PR-01 PATH-POS-01 — genuine matching consumed HD still skips", async () => {
    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
      await import(
        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
      );
    const runtime = getRuntimeApplicationService();
    if (!runtime.oa) return;

    const created = await runtime.createProject({
      name: "Projet MW5 HD match",
      objective: "Objectif projet générique MW5 match",
      context: "Contexte sans correspondance structurante claim.",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "MW5M",
      idempotencyKey: `idem:mw5-hd-match-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const lps = await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: created.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const scope = `decision:mw5-match-${created.projectId}`;
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: runtime.oa.authorityResolver,
      scope,
      issuedAt: "2026-09-03T18:00:00.000Z",
      forceEnable: true,
      evidenceId: `evd:mw5-hd-match-${created.projectId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;

    const recorded = await runtime.oa.decisionServices.recordHumanDecision.execute({
      decisionId: `dec:mw5-match-${created.projectId}`,
      projectId: created.projectId,
      subject: "Architecture cible validée",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
      linkToLivingProjectState: true,
      expectedLpsVersion: lps.livingProjectState.version,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: "prop:mw5-match-test",
        sourceDigest: "c".repeat(64),
        projectId: created.projectId,
        proposalContext: {
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
        },
        executionBasis: {
          objective: "Faire évoluer l'architecture produit",
          scope: "Changement d'architecture structurant",
          requestedOperation: "architecture change",
        },
      },
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;

    const result = await orchestrateAssistantSend({
      projectId: created.projectId,
      content: "Fais évoluer l'architecture __F2_STRUCTURING__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.disposition).toBe("CONTINUE");
    expect(result.f2?.proposal).toBeTruthy();
  });
});
