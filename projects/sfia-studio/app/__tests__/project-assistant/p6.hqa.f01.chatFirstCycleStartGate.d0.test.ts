/** @vitest-environment node */
/**
 * P6-HQA-F01 — chat-first START gate (deterministic).
 * Proves: start intent does not classify as free createCycle; legacy ≠ prepared;
 * ambiguous prepared fail-closed; already-active recognized; anti-duplication via F2 send.
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  chatFirstStartBlockMessage,
  classifyChatFirstStartSituation,
  isChatFirstCycleStartIntent,
  resolveChatFirstStartRouting,
} from "@/features/project-assistant/f2/resolveChatFirstCycleStartGate";
import { interpretPilotNarrativeStance } from "@/features/project-assistant/f2/composeF2PilotFacingNarrative";
import type { CycleInstance } from "@/lib/oa/cycle";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

function cycle(partial: Partial<CycleInstance> & { cycleInstanceId: string }): CycleInstance {
  return {
    schemaVersion: "0.1.0-oa",
    cycleInstanceId: partial.cycleInstanceId,
    cycleTypeId: partial.cycleTypeId ?? "cyc:delivery",
    projectId: partial.projectId ?? "prj:test",
    status: partial.status ?? "acknowledged",
    profile: partial.profile ?? "Standard",
    createdAt: partial.createdAt ?? "2026-01-01T00:00:00.000Z",
    trajectoryId: partial.trajectoryId,
    trajectoryVersion: partial.trajectoryVersion,
    trajectoryStepId: partial.trajectoryStepId,
    ckcResolutionRef: partial.ckcResolutionRef,
    qualificationSignals: partial.qualificationSignals,
  };
}

function lastUserContent(messages: ProviderChatMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i]?.role === "user") return messages[i]!.content;
  }
  return "";
}

function demandeCourante(blob: string): string {
  const marker = "Demande courante (à évaluer):";
  const idx = blob.indexOf(marker);
  if (idx < 0) return blob;
  return blob.slice(idx + marker.length).trim();
}

class F01FakeProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private n = 0;

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    return this.complete(input.messages);
  }

  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    this.n += 1;
    const current = demandeCourante(lastUserContent(messages));
    const usage = {
      inputTokens: 10,
      outputTokens: 5,
      totalTokens: 15,
      model: "fake-test-model",
      providerResponseId: `f01-${this.n}`,
    };
    const actionable = {
      intentClass: "actionable",
      candidateCycleTypeId: "cyc:delivery",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      cognitiveWorkload: null,
      contradictionCandidate: null,
      challengeResponseAssessment: null,
      objective: "Livrer la note",
      scope: "Sans exécution",
      rephrasedRequest: current.slice(0, 120),
      outOfScope: ["Cursor"],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      activatedBlocks: ["qualification", "proposition"],
      expectedOutcome: "Proposition",
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: null,
      continuationKind: null,
      artifactMaterializationOperation: null,
      pilotDecisionCandidate: null,
    };
    return {
      text: `[TEST/FAKE · NON LIVE] ${JSON.stringify(actionable)}`,
      usage,
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: unknown[];
  }): Promise<ProviderRoundResult> {
    void input.tools;
    return {
      kind: "message",
      text: "[TEST/FAKE · NON LIVE] f01",
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "f01-round",
      },
    };
  }
}

describe("P6-HQA-F01 isChatFirstCycleStartIntent", () => {
  it("explicit démarrage → true; propose / ok recommandation → false", () => {
    expect(
      isChatFirstCycleStartIntent({
        userContent: "Je confirme le démarrage du cycle Delivery déjà proposé.",
        cycleLabel: "Delivery",
      }),
    ).toBe(true);
    // Catalog label form must still match user "Delivery".
    expect(
      isChatFirstCycleStartIntent({
        userContent:
          "Je confirme explicitement le démarrage du cycle Delivery déjà proposé.",
        cycleLabel: "Delivery / implémentation",
      }),
    ).toBe(true);
    expect(
      isChatFirstCycleStartIntent({
        userContent: "J'accepte de démarrer Delivery.",
        cycleLabel: "Delivery",
      }),
    ).toBe(true);
    expect(
      isChatFirstCycleStartIntent({
        userContent: "Prépare un cycle Delivery pour la note.",
        cycleLabel: "Delivery",
      }),
    ).toBe(false);
    expect(
      isChatFirstCycleStartIntent({
        userContent: "ok pour la recommandation",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: {
          disposition: "accept",
          targetKind: "current_recommendation",
          rationale: "ok",
        },
      }),
    ).toBe(false);
    expect(
      isChatFirstCycleStartIntent({
        userContent: "Non, ne démarre surtout pas Delivery.",
        cycleLabel: "Delivery",
      }),
    ).toBe(false);
  });

  it("refuse / defer / question / late negation never promote START", () => {
    const cases: Array<{ content: string; label?: string }> = [
      {
        content:
          "Je confirme le démarrage de Delivery, mais finalement je refuse.",
      },
      {
        content:
          "Je confirme le démarrage du cycle Delivery, mais finalement non.",
      },
      { content: "Je préfère attendre avant de démarrer Delivery." },
      { content: "Est-ce que Delivery est actif ?" },
      {
        content: "Je confirme le démarrage de Cadrage.",
        label: "Delivery",
      },
      {
        content: "ok pour la recommandation Delivery",
        label: "Delivery / implémentation",
      },
    ];
    for (const c of cases) {
      expect(
        isChatFirstCycleStartIntent({
          userContent: c.content,
          cycleLabel: c.label ?? "Delivery",
          pilotDecisionCandidate:
            c.content.startsWith("ok ")
              ? {
                  disposition: "accept",
                  targetKind: "current_recommendation",
                  rationale: "ok",
                }
              : null,
        }),
        c.content,
      ).toBe(false);
    }
  });

  it("structured accept + late negation / defer / question → never START", () => {
    const structuredAccept = {
      disposition: "accept" as const,
      targetKind: "current_recommendation" as const,
      rationale: "ok",
    };
    const adversarial = [
      {
        content:
          "Je confirme le démarrage de Delivery, mais finalement non.",
        stance: "refuse_start",
      },
      {
        content:
          "Je confirme le démarrage de Delivery, mais finalement je refuse.",
        stance: "refuse_start",
      },
      {
        content:
          "Je confirme le démarrage de Delivery, mais pas maintenant.",
        stance: "defer_start",
      },
      {
        content: "Je confirme le démarrage de Delivery ?",
        stance: "question_status",
      },
      {
        content: "Je confirme le démarrage de Cadrage.",
        stance: "ambiguous",
      },
    ];
    for (const c of adversarial) {
      const stance = interpretPilotNarrativeStance({
        userContent: c.content,
        cycleLabel: "Delivery",
        pilotDecisionCandidate: structuredAccept,
      });
      expect(stance.kind, c.content).toBe(c.stance);
      expect(
        isChatFirstCycleStartIntent({
          userContent: c.content,
          cycleLabel: "Delivery",
          pilotDecisionCandidate: structuredAccept,
        }),
        c.content,
      ).toBe(false);
      expect(
        resolveChatFirstStartRouting({
          userContent: c.content,
          cycleLabel: "Delivery",
          pilotDecisionCandidate: structuredAccept,
        }).kind,
        c.content,
      ).toBe("suppress_mint");
    }
  });

  it("hypothetical / ambiguous start discussion suppresses mint; prepare stays open", () => {
    expect(
      resolveChatFirstStartRouting({
        userContent: "Peut-être démarrer Delivery.",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("suppress_mint");
    expect(
      resolveChatFirstStartRouting({
        userContent: "Faut-il démarrer Delivery ?",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("suppress_mint");
    expect(
      resolveChatFirstStartRouting({
        userContent: "Prépare un nouveau cycle Delivery pour un autre livrable.",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("not_start_path");
  });
});

describe("P6-HQA-F01 classifyChatFirstStartSituation", () => {
  it("already active", () => {
    expect(
      classifyChatFirstStartSituation({
        activeCycleInstanceId: "cyc:trj-active",
        targetCycleTypeId: "cyc:delivery",
        cycles: [],
      }),
    ).toEqual({
      kind: "already_active",
      activeCycleInstanceId: "cyc:trj-active",
    });
  });

  it("unique COMPLETE prepared Delivery", () => {
    const s = classifyChatFirstStartSituation({
      activeCycleInstanceId: null,
      targetCycleTypeId: "cyc:delivery",
      cycles: [
        cycle({
          cycleInstanceId: "cyc:trj-prep-1",
          trajectoryId: "trj:1",
          trajectoryVersion: 2,
          trajectoryStepId: "step:delivery",
          status: "acknowledged",
        }),
        cycle({
          cycleInstanceId: "cyc:f2-legacy-1",
          status: "acknowledged",
        }),
      ],
    });
    expect(s).toEqual({
      kind: "unique_prepared",
      cycleInstanceId: "cyc:trj-prep-1",
    });
  });

  it("ambiguous prepared → no auto-select", () => {
    const s = classifyChatFirstStartSituation({
      activeCycleInstanceId: null,
      targetCycleTypeId: "cyc:delivery",
      cycles: [
        cycle({
          cycleInstanceId: "cyc:trj-a",
          trajectoryId: "trj:1",
          trajectoryVersion: 1,
          trajectoryStepId: "step:a",
        }),
        cycle({
          cycleInstanceId: "cyc:trj-b",
          trajectoryId: "trj:1",
          trajectoryVersion: 1,
          trajectoryStepId: "step:b",
        }),
      ],
    });
    expect(s.kind).toBe("ambiguous_prepared");
  });

  it("legacy unbound only (HQ-01-like) → not startable via chat gate", () => {
    const s = classifyChatFirstStartSituation({
      activeCycleInstanceId: null,
      targetCycleTypeId: "cyc:delivery",
      cycles: [
        cycle({ cycleInstanceId: "cyc:f2-1" }),
        cycle({ cycleInstanceId: "cyc:f2-2" }),
        cycle({ cycleInstanceId: "cyc:f2-3" }),
        cycle({ cycleInstanceId: "cyc:f2-4" }),
        cycle({ cycleInstanceId: "cyc:f2-5" }),
      ],
    });
    expect(s).toEqual({ kind: "legacy_unbound_only", count: 5 });
  });

  it("no prepared", () => {
    expect(
      classifyChatFirstStartSituation({
        activeCycleInstanceId: null,
        targetCycleTypeId: "cyc:delivery",
        cycles: [],
      }).kind,
    ).toBe("no_prepared");
  });

  it("block messages never claim activation / invent HD", () => {
    for (const code of [
      "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT",
      "NO_PREPARED_CYCLE",
      "PREPARED_CYCLE_AMBIGUOUS",
      "ACTIVE_CYCLE_PRESENT",
    ]) {
      const msg = chatFirstStartBlockMessage({
        code,
        cycleLabel: "Delivery",
        legacyCount: 5,
        preparedCount: 2,
      });
      expect(msg).toMatch(/Aucun (nouveau )?cycle|déjà actif/i);
      expect(msg).not.toMatch(/HumanDecision enregistr/i);
      expect(msg).not.toMatch(/cycle est maintenant actif/i);
    }
  });
});

describe("P6-HQA-F01 F2 send anti-duplication (legacy unbound)", () => {
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";
  let provider: F01FakeProvider;
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    provider = new F01FakeProvider();
    setConversationProviderForTests(provider);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-f01-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "nora-session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-06T15:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "F01 Delivery start",
      objective: "Exit proof Delivery",
      context: "P6-HQA-F01",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "F01",
      idempotencyKey: `idem:f01-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("F01 setup failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  it("propose then start-confirm: no N+1 unbound cycle; honest block; LPS inactive", async () => {
    const runtime = getRuntimeApplicationService();
    const propose = await orchestrateAssistantSend({
      projectId,
      content: "Prépare un cycle Delivery pour livrer la note.",
      sessionDbPath,
      provider,
    });
    expect(propose.ok).toBe(true);
    if (!propose.ok) return;

    const cyclesAfterPropose = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesAfterPropose.length).toBe(1);
    expect(cyclesAfterPropose[0]!.cycleInstanceId.startsWith("cyc:f2-")).toBe(
      true,
    );

    const confirm = await orchestrateAssistantSend({
      projectId,
      content:
        "Je confirme explicitement le démarrage du cycle Delivery déjà proposé.",
      sessionDbPath,
      provider,
    });
    expect(confirm.ok).toBe(true);
    if (!confirm.ok) return;

    const cyclesAfterConfirm = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesAfterConfirm.length).toBe(1);
    expect(confirm.text).toMatch(/Aucun cycle supplémentaire n'a été créé|ne sont pas liés/i);
    expect(confirm.text).not.toMatch(/est maintenant actif/i);

    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lps.ok).toBe(true);
    if (lps.ok) {
      expect(lps.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }

    // Repeated confirm still does not mint.
    const again = await orchestrateAssistantSend({
      projectId,
      content: "Je confirme le démarrage de Delivery.",
      sessionDbPath,
      provider,
    });
    expect(again.ok).toBe(true);
    const cyclesFinal = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesFinal.length).toBe(1);
  });

  it("contradictory start+refuse: no START, no mint, LPS inactive", async () => {
    const runtime = getRuntimeApplicationService();
    await orchestrateAssistantSend({
      projectId,
      content: "Prépare un cycle Delivery pour livrer la note.",
      sessionDbPath,
      provider,
    });
    const before = await runtime.oa!.cycleServices.cycles.listByProject(projectId);
    const refuse = await orchestrateAssistantSend({
      projectId,
      content:
        "Je confirme le démarrage de Delivery, mais finalement je refuse.",
      sessionDbPath,
      provider,
    });
    expect(refuse.ok).toBe(true);
    if (!refuse.ok) return;
    const after = await runtime.oa!.cycleServices.cycles.listByProject(projectId);
    expect(after.length).toBe(before.length);
    expect(refuse.text).not.toMatch(/est maintenant actif/i);
    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lps.ok && (lps.livingProjectState.activeCycleInstanceId ?? null)).toBe(
      null,
    );
  });
});

describe("P6-HQA-F01 START success via orchestrateAssistantSend (prepared)", () => {
  const tempDirs: string[] = [];
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const previousAuth = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
  const previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
  let provider: F01FakeProvider;

  const APP_ROOT = path.resolve(__dirname, "../..");
  const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
  const SCHEMAS = path.resolve(
    APP_ROOT,
    "../sfia-v3-modeled/v3-native-option-a/schemas",
  );

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    provider = new F01FakeProvider();
    setConversationProviderForTests(provider);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    if (previousAuth === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousAuth;
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
  });

  it("unique COMPLETE prepared Delivery → START once; LPS/CycleInstance coherent; no mint; turn not proposal", async () => {
    const {
      prepareCandidateTrajectoryFromCurrentRecommendation,
      prepareCycleFromValidatedTrajectory,
      materializeLifecycleRecommendationFromStructuredOutput,
      resolveTrajectoryBootstrapPresence,
      NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      classifyTrajectoryBinding,
    } = await import("@/lib/oa/cycle");
    const {
      approveCandidateTrajectory,
      buildPreCycleCandidateApprovalPresentation,
    } = await import(
      "@/features/project-assistant/approveCandidateTrajectory"
    );
    const { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } = await import(
      "@/lib/nora-cognitive-runtime/noraProductTurnOutputType"
    );

    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-f01-start-"));
    tempDirs.push(dir);
    const productDbPath = path.join(dir, "oa-product.sqlite");
    const sessionDbPath = path.join(dir, "nora-session.sqlite");
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      productDbPath,
      auditMode: "noop",
      nowIso: "2026-09-10T08:00:00.000Z",
    });
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "F01 START success",
      objective: "Livrer Delivery gouverné",
      context: "P6-HQA-F01 START",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "F01S",
      idempotencyKey: `idem:f01-start-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    const projectId = created.projectId;

    const signals = {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    };
    const lr = {
      intent: "NEXT_CYCLE" as const,
      statement: "Envisager un Delivery.",
      subjectCycleInstanceId: null,
      targetCycleInstanceId: null,
      targetCycleTypeId: "cyc:delivery",
      rationale: "Prochain travail gouverné supportable.",
      authority: "none" as const,
      isHumanDecision: false as const,
      qualificationSignals: { ...signals },
    };
    const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
    const decisions0 = await oa.decisionServices.decisions.listByProject(
      projectId,
    );
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps0.ok).toBe(true);
    if (!lps0.ok) throw new Error("lps0");
    const presence = await resolveTrajectoryBootstrapPresence(
      oa.cycleServices.trajectories,
      projectId,
    );
    const project = await oa.projectServices.getProject.execute({ projectId });
    const doctrine = project.ok ? project.project.doctrinePackageRef : null;
    const mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId,
      structuredOutput: {
        narrative: "Narrative Delivery recommandée.",
        preCycleRoutingAssessment: {
          ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
        },
        lifecycleRecommendation: lr,
      },
      updateEpistemicState: oa.cycleServices.updateEpistemicState,
      facts: {
        cycles: cycles0,
        lpsActiveCycleInstanceId: lps0.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps0.livingProjectState.version,
        doctrinePackageId: doctrine?.doctrinePackageId ?? "pkg:studio-v3-oa",
        doctrinePackageVersion: doctrine?.version ?? "1.0.0",
        doctrinePackageDigest: doctrine?.digest ??
          ("sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as never),
        trajectory: null,
        trajectoryBootstrapPresence: presence,
        decisions: decisions0,
        evidence: [],
        epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
      },
      producedAt: "2026-09-10T08:01:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(true);

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: {
        trajectories: oa.cycleServices.trajectories,
        createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
        updateEpistemicState: oa.cycleServices.updateEpistemicState,
        runInTransaction: ((fn: () => Promise<unknown>) =>
          oa.projectServices.store.runInTransaction(fn)) as <T>(
          fn: () => Promise<T>,
        ) => Promise<T>,
        listEpistemicByProject: (pid: string) =>
          oa.cycleServices.epistemic.listByProject(pid),
        listCyclesByProject: (pid: string) =>
          oa.cycleServices.cycles.listByProject(pid),
        listDecisionsByProject: (pid: string) =>
          oa.decisionServices.decisions.listByProject(pid),
        listEvidenceByProject: (pid: string) =>
          oa.evidenceReviewServices.repository.listByProject(pid),
        getCurrentLps: (pid: string) =>
          oa.projectServices.getCurrentLivingProjectState.execute({
            projectId: pid,
          }),
        getProjectDoctrinePin: async (pid: string) => {
          const p = await oa.projectServices.getProject.execute({
            projectId: pid,
          });
          if (!p.ok) return null;
          const pin = p.project.doctrinePackageRef;
          return pin
            ? {
                doctrinePackageId: pin.doctrinePackageId,
                version: pin.version,
                digest: pin.digest,
              }
            : null;
        },
        newTrajectoryId: () => "trj:f01-start",
        newStepId: () => "stp:f01-start",
        newProvenanceObservationId: () => "epi:trj-prov-f01-start",
        correlationId: "cor:f01-start-bridge",
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error("bridge failed");

    const presentation = await buildPreCycleCandidateApprovalPresentation({
      oa,
      projectId,
    });
    expect(presentation.ok).toBe(true);
    if (!presentation.ok || !presentation.presentation) {
      throw new Error("presentation missing");
    }
    const approved = await approveCandidateTrajectory({
      oa,
      projectId,
      presentationDigest: presentation.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(approved.ok).toBe(true);
    if (!approved.ok) throw new Error("approve failed");

    const prep = await prepareCycleFromValidatedTrajectory({
      oa,
      projectId,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(`prepare failed: ${prep.code}`);
    expect(classifyTrajectoryBinding(prep.cycle)).toBe(
      "COMPLETE_TRAJECTORY_BOUND",
    );
    const preparedId = prep.cycle.cycleInstanceId;

    const cyclesBefore = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesBefore.length).toBe(1);

    const start = await orchestrateAssistantSend({
      projectId,
      content:
        "Je confirme explicitement le démarrage du cycle Delivery déjà proposé.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (!start.ok) return;

    expect(start.text).toMatch(/est maintenant actif/i);
    expect(start.text).toMatch(new RegExp(preparedId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    expect(start.ok && start.f2?.turnKind).toBe("f1_informative");
    expect(start.ok && start.f2?.turnKind).not.toBe("f2_proposal");

    const cyclesAfter = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesAfter.length).toBe(1);
    expect(cyclesAfter[0]!.cycleInstanceId).toBe(preparedId);
    expect(cyclesAfter[0]!.status).toBe("active");

    const lpsAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsAfter.ok).toBe(true);
    if (lpsAfter.ok) {
      expect(lpsAfter.livingProjectState.activeCycleInstanceId).toBe(preparedId);
    }

    // Repeat: no second START / no mint.
    const again = await orchestrateAssistantSend({
      projectId,
      content: "Je confirme le démarrage de Delivery.",
      sessionDbPath,
      provider,
    });
    expect(again.ok).toBe(true);
    if (!again.ok) return;
    expect(again.text).toMatch(/déjà actif/i);
    const cyclesFinal = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesFinal.length).toBe(1);
  });
});
