/** @vitest-environment node */
/**
 * P6 Architecture Recovery continuation — DETERMINISTIC FULL FIRST-CYCLE JOURNEY
 * from a truly virgin Product Project (0 cycle / 0 traj / 0 HD / 0 EC).
 *
 * Recommendation is materialized via Product lifecycleRecommendation path
 * (Nora structured-output seam) — NOT by seeding Trajectory/Cycle/HD/EC.
 * Decision + prepare + START use Product front-doors.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  projectAssistantAdvanceFramingContinuityAction,
  projectAssistantReadFramingContinuityAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  resolveTrajectoryBootstrapPresence,
  classifyTrajectoryBinding,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { W2_REGISTRY_ROOT, W2_SCHEMAS_ROOT } from "./w2Harness";

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const tempDirs: string[] = [];
let previousPilot: string | undefined;
let previousMorris: string | undefined;
let previousCursorReal: string | undefined;
let previousAllowReset: string | undefined;
let previousProvider: string | undefined;

function restoreEnv(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
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

class VirginJourneyFakeProvider implements ConversationProvider {
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
      providerResponseId: `virgin-${this.n}`,
    };
    const isStart =
      /\b(je\s+(veux|souhaite)\s+(d[eé]marrer|lancer)|d[eé]marrage\s+effectif|d[eé]marre[- ]?le)\b/i.test(
        current,
      );
    if (isStart) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: null,
          objective: null,
          scope: null,
          rephrasedRequest: current.slice(0, 160),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
          continuationKind: null,
          artifactMaterializationOperation: null,
          pilotDecisionCandidate: null,
        })}`,
        usage,
      };
    }
    return {
      text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:framing",
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
        objective: "Qualifier le premier cycle Cadrage",
        scope: "Sans exécution Cursor",
        rephrasedRequest: current.slice(0, 160),
        outOfScope: ["Cursor execute"],
        risks: [],
        reservations: [],
        stopConditions: ["AUCUNE EXÉCUTION"],
        activatedBlocks: ["qualification"],
        expectedOutcome: "Cycle Cadrage actif",
        criticalJustification: null,
        requestedOperation: null,
        executionIntent: null,
        continuationKind: null,
        artifactMaterializationOperation: null,
        pilotDecisionCandidate: {
          disposition: "accept",
          targetKind: "current_recommendation",
          rationale: "ok",
        },
      })}`,
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
      text: "[TEST/FAKE · NON LIVE] virgin-journey",
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "virgin-round",
      },
    };
  }
}

async function assertVirginProduct(
  oa: NonNullable<ReturnType<typeof getRuntimeApplicationService>["oa"]>,
  projectId: string,
) {
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  expect(cycles).toHaveLength(0);
  expect(
    await oa.cycleServices.trajectories.hasAnyByProjectId(projectId),
  ).toBe(false);
  const traj = await oa.cycleServices.trajectories.findCurrentByProjectId(
    projectId,
  );
  expect(traj).toBeNull();
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  expect(decisions).toHaveLength(0);
  const contracts =
    await oa.executionContractServices.contracts.listByProject(projectId);
  expect(contracts).toHaveLength(0);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  expect(lps.ok).toBe(true);
  if (lps.ok) {
    expect(lps.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
  }
}

async function bootVirginProject(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  resetF2ProposalStoreForTests();
  resetMw5ChallengeStoreForTests();
  resetPendingGenericPrepareOfferStoreForTests();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "virgin-fc-"));
  tempDirs.push(dir);
  const productDbPath = path.join(dir, `${suffix}.sqlite`);
  const runtime = getRuntimeApplicationService({
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`vg-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Virgin FC ${suffix}`,
    objective: "Premier cycle Cadrage depuis Project vierge",
    context: "AtelierNova-like greenfield",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `VG${suffix}`,
    idempotencyKey: `idem:vg-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  await assertVirginProduct(runtime.oa, projectId);
  return {
    runtime,
    projectId,
    productDbPath,
    sessionDbPath: path.join(dir, `${suffix}-session.sqlite`),
  };
}

async function materializeCurrentFramingRecommendation(
  projectId: string,
): Promise<void> {
  const oa = getRuntimeApplicationService().oa!;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "Recommandation Cadrage — premier cycle.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Envisager un Cadrage pour qualifier la mission.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:framing",
        rationale: "Premier travail gouverné supportable.",
        authority: "none" as const,
        isHumanDecision: false as const,
        qualificationSignals: {
          structuralChange: false,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      },
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-09T20:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  expect(mat.materialization?.ok).toBe(true);
}

describe("P6 arch recovery — virgin Project first-cycle journey", () => {
  const provider = new VirginJourneyFakeProvider();

  beforeEach(() => {
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousCursorReal = process.env.SFIA_STUDIO_CURSOR_REAL;
    previousAllowReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(provider);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    vi.restoreAllMocks();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    restoreEnv("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
    restoreEnv("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnv("SFIA_STUDIO_CURSOR_REAL", previousCursorReal);
    restoreEnv("SFIA_V2_RUNTIME_ALLOW_RESET", previousAllowReset);
    restoreEnv("OPS1_CONVERSATION_PROVIDER", previousProvider);
  });

  it("ORACLE A–F + K — virgin Project → Rec → traj → HD → prepare → START ACTIVE → reload; START sans EC", async () => {
    const { runtime, projectId, productDbPath, sessionDbPath } =
      await bootVirginProject("e2e");
    const oa = runtime.oa!;

    // ORACLE A — still virgin before recommendation
    await assertVirginProduct(oa, projectId);

    // ORACLE A — Recommendation CURRENT via Product materialization seam (not DB seed)
    await materializeCurrentFramingRecommendation(projectId);
    // Rec must not invent trajectory / cycle / HD / EC
    expect(
      (await oa.cycleServices.trajectories.findCurrentByProjectId(projectId)) ??
        null,
    ).toBeNull();
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(0);
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);

    const before = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(before.continuity?.phase).toBe("recommendation_ready");
    expect(before.continuity?.hasCurrentNextCycleRecommendation).toBe(true);

    // ORACLE B — framing prepare candidate (Product conversation progress, not START)
    const progress = await projectAssistantSendAction({
      projectId,
      content:
        "OK, poursuivons la recommandation de Cadrage. Une mission Cursor pourra venir ensuite — pas maintenant.",
      sessionDbPath,
      provider,
    });
    expect(progress.ok).toBe(true);
    if (!progress.ok) throw new Error(progress.message ?? "progress");
    expect(progress.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
    expect(progress.text).not.toMatch(
      /Contexte projet conservé — aucun cycle artificiel créé/,
    );

    const afterPrep = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(afterPrep.continuity?.phase).toBe("awaiting_trajectory_decision");
    expect(afterPrep.continuity?.presentationDigest).toBeTruthy();
    // Candidate trajectories are Product-real but not effective CURRENT until HD.
    expect(afterPrep.continuity?.trajectoryId).toBeTruthy();
    expect(
      await oa.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(true);
    expect(
      (await oa.cycleServices.trajectories.findCurrentByProjectId(projectId)) ??
        null,
    ).toBeNull();

    // ORACLE C — HumanDecision via Product card seam (digest server-side)
    const approved = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: afterPrep.continuity!.presentationDigest!,
    });
    expect(approved.ok).toBe(true);
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBeGreaterThanOrEqual(1);
    // After HD, trajectory becomes Product CURRENT.
    expect(
      await oa.cycleServices.trajectories.findCurrentByProjectId(projectId),
    ).toBeTruthy();
    // Conversation "ok" alone must not invent another HD path here — HD is Product action.
    if (
      approved.continuity?.phase === "trajectory_decided_prepare_cycle"
    ) {
      const prep = await projectAssistantAdvanceFramingContinuityAction({
        projectId,
        step: "prepare_cycle",
      });
      expect(prep.ok).toBe(true);
    }

    // ORACLE D — Cycle prepared, linked, not yet ACTIVE
    const ready = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(ready.continuity?.phase).toBe("ready_to_start");
    expect(ready.continuity?.preparedCycleInstanceId).toBeTruthy();
    const preparedCycles = await oa.cycleServices.cycles.listByProject(projectId);
    expect(preparedCycles.length).toBe(1);
    expect(["proposed", "acknowledged"]).toContain(preparedCycles[0]!.status);
    expect(classifyTrajectoryBinding(preparedCycles[0]!)).toBe(
      "COMPLETE_TRAJECTORY_BOUND",
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);

    // ORACLE E + F — explicit START, LPS ACTIVE, no EC required
    const start = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (!start.ok) throw new Error(start.message ?? "start");
    expect(start.text).toMatch(/est maintenant actif/i);
    expect(start.project.activeCycleInstanceId).toBeTruthy();

    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    expect(lps.livingProjectState.activeCycleInstanceId).toBe(
      start.project.activeCycleInstanceId,
    );
    const activeCycles = await oa.cycleServices.cycles.listByProject(projectId);
    expect(activeCycles).toHaveLength(1);
    expect(activeCycles[0]!.status).toBe("active");
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);

    // ORACLE K — re-instantiate Product runtime on same SQLite (service remount)
    const activeId = lps.livingProjectState.activeCycleInstanceId!;
    resetRuntimeApplicationServiceForTests();
    const runtime2 = getRuntimeApplicationService({
      registryRoot: W2_REGISTRY_ROOT,
      schemasRoot: W2_SCHEMAS_ROOT,
      nowIso: "2026-09-09T21:00:00.000Z",
      idSource: new FixedIdSource(`vg-reload`),
      auditMode: "noop",
      productDbPath,
    });
    expect(runtime2.oa).toBeTruthy();
    const oa2 = runtime2.oa!;
    const lps2 = await oa2.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps2.ok).toBe(true);
    if (!lps2.ok) throw new Error("lps2");
    expect(lps2.livingProjectState.activeCycleInstanceId).toBe(activeId);
    const cycles2 = await oa2.cycleServices.cycles.listByProject(projectId);
    expect(cycles2).toHaveLength(1);
    expect(cycles2[0]!.status).toBe("active");
    const continuity2 = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(continuity2.ok).toBe(true);
    expect(continuity2.continuity?.phase).toBe("active");
    expect(
      (await oa2.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
  });

  it("ORACLE J — cycle inventory unavailable is fail-closed (not treated as empty)", async () => {
    // Virgin + no recommendation → phase blocked_no_recommendation → early START
    // inventory read. Service error must NOT be assimilated to count===0.
    const { projectId, sessionDbPath } = await bootVirginProject("inv");
    const oa = getRuntimeApplicationService().oa!;
    const before = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(before.continuity?.phase).toBe("blocked_no_recommendation");

    const spy = vi
      .spyOn(oa.cycleServices.cycles, "listByProject")
      .mockRejectedValueOnce(new Error("simulated_inventory_unavailable"));

    const turn = await orchestrateAssistantSend({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
    });
    expect(spy).toHaveBeenCalled();
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message ?? "turn");
    expect(turn.text).toMatch(/inventaire des cycles.*indisponible/i);
    expect(turn.text).not.toMatch(
      /besoin d'une recommandation de cycle puis d'une trajectoire/i,
    );
    expect(turn.f2?.turnKind).toBe("f2_blocked");
    spy.mockRestore();
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
  });

  it("ORACLE I — ok go without CURRENT prepare offer does not invent EC after cycle START wording", async () => {
    const { projectId, sessionDbPath } = await bootVirginProject("okgo");
    await materializeCurrentFramingRecommendation(projectId);
    await projectAssistantSendAction({
      projectId,
      content: "OK pour le Cadrage.",
      sessionDbPath,
      provider,
    });
    const turn = await projectAssistantSendAction({
      projectId,
      content: "ok go",
      sessionDbPath,
      provider,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message ?? "okgo");
    expect(turn.text).not.toMatch(/xct:gen-prep:/);
    expect(turn.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
  });

  it("ORACLE F/H intent — mixed START+PREPARE does not invent EC; cycle path remains distinct", async () => {
    const { projectId, sessionDbPath } = await bootVirginProject("mixed");
    await materializeCurrentFramingRecommendation(projectId);
    const turn = await projectAssistantSendAction({
      projectId,
      content:
        "Je souhaite démarrer le Cadrage et préparer en même temps le contrat d'exécution Cursor pour l'outil d'inscriptions.",
      sessionDbPath,
      provider,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message ?? "mixed");
    expect(turn.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
    expect(turn.text).not.toMatch(
      /Contexte projet conservé — aucun cycle artificiel créé/,
    );
    expect(
      (await getRuntimeApplicationService().oa!.executionContractServices.contracts.listByProject(
        projectId,
      )).length,
    ).toBe(0);
  });
});
