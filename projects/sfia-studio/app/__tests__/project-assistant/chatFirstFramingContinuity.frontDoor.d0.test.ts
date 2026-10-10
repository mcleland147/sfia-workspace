/** @vitest-environment node */
/**
 * P6 CP-02 — Chat-first Framing continuity via projectAssistantSendAction front-door.
 * Proves Rec → prepare → HD (server digest) → prepare cycle → START (F01) → LPS active
 * → next turn sees active cycle. ZERO REAL provider.
 *
 * Intentional: START analysis omits candidateCycleTypeId/signals so CP-01 is proven
 * (transitionReadiness alone would strand the turn).
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
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  projectAssistantAdvanceFramingContinuityAction,
  projectAssistantReadFramingContinuityAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
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

/**
 * Fake Nora — for START utterances deliberately omits cycle/signals
 * so formalization readiness fails and CP-01 early F01 path is required.
 */
class FramingFrontDoorFakeProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private n = 0;
  lastUserBlobs: string[] = [];
  /** Full message blobs seen by the provider (for Nora context assertions). */
  lastMessageCorpus: string[] = [];

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
    this.lastUserBlobs.push(current);
    this.lastMessageCorpus.push(
      messages.map((m) => `${m.role}:${m.content}`).join("\n"),
    );
    const usage = {
      inputTokens: 10,
      outputTokens: 5,
      totalTokens: 15,
      model: "fake-test-model",
      providerResponseId: `frm-fd-${this.n}`,
    };

    const isStart =
      /\b(je\s+(veux|souhaite)\s+(d[eé]marrer|lancer)|je\s+confirm\w*.*d[eé]marr)/i.test(
        current,
      );
    const isRefuse =
      /\b(refuse|finalement\s+je\s+refuse|ne\s+d[eé]marre)\b/i.test(current);
    const isMaybe = /\b(peut[- ]?être|éventuellement)\b/i.test(current);
    const isQuestion = /\?/.test(current) || /\b(est[- ]ce|quel\s+est)\b/i.test(current);

    // CP-01 proof: START without formalization fields.
    if (isStart && !isRefuse) {
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
          rephrasedRequest: current.slice(0, 120),
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

    const actionable = {
      intentClass: isQuestion ? "informative" : "actionable",
      // Product catalog Cadrage — CKC ckc:studio:framing in W2 product doctrine.
      candidateCycleTypeId: isQuestion ? null : "cyc:framing",
      signals: isQuestion
        ? null
        : {
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
      objective: "Explorer le cadrage",
      scope: "Sans exécution",
      rephrasedRequest: current.slice(0, 120),
      outOfScope: ["Cursor"],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      activatedBlocks: ["qualification"],
      expectedOutcome: "Recommandation",
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: null,
      continuationKind: null,
      artifactMaterializationOperation: null,
      pilotDecisionCandidate: isRefuse
        ? {
            disposition: "refuse",
            targetKind: "current_recommendation",
            rationale: "refuse",
          }
        : isMaybe
          ? {
              disposition: "ambiguous",
              targetKind: "current_recommendation",
              rationale: "maybe",
            }
          : {
              disposition: "accept",
              targetKind: "current_recommendation",
              rationale: "ok",
            },
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
      text: "[TEST/FAKE · NON LIVE] framing-fd",
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "frm-fd-round",
      },
    };
  }
}

async function bootWithCurrentFramingRec(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  resetF2ProposalStoreForTests();
  resetMw5ChallengeStoreForTests();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "frm-fd-"));
  tempDirs.push(dir);
  const runtime = getRuntimeApplicationService({
    // Product doctrine registry — required for post-START Nora resume CKC.
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`fd-${suffix}`),
    auditMode: "noop",
    productDbPath: path.join(dir, `${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Framing FD ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `FD${suffix}`,
    idempotencyKey: `idem:fd-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  const oa = runtime.oa;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
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
      narrative: "Narrative Cadrage recommandée.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Envisager un Cadrage.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:framing",
        rationale: "Prochain travail gouverné supportable.",
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
  return {
    runtime,
    projectId,
    sessionDbPath: path.join(dir, `${suffix}-session.sqlite`),
  };
}

describe("chat-first Framing continuity — projectAssistantSendAction front-door", () => {
  const provider = new FramingFrontDoorFakeProvider();

  beforeEach(() => {
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousCursorReal = process.env.SFIA_STUDIO_CURSOR_REAL;
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    setConversationProviderForTests(provider);
    provider.lastUserBlobs = [];
    provider.lastMessageCorpus = [];
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    }
    if (previousCursorReal === undefined) {
      delete process.env.SFIA_STUDIO_CURSOR_REAL;
    } else {
      process.env.SFIA_STUDIO_CURSOR_REAL = previousCursorReal;
    }
  });

  it("Rec CURRENT → prepare → HD → prepare → START via send (no signals) → LPS + Nora resume context", async () => {
    const { runtime, projectId, sessionDbPath } =
      await bootWithCurrentFramingRec("e2e");
    const oa = runtime.oa!;

    const before = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(before.continuity?.phase).toBe("recommendation_ready");
    expect(before.continuity?.hasCurrentNextCycleRecommendation).toBe(true);

    // Progress intent — prepare candidate (no HD)
    const progress = await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation de Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(progress.ok).toBe(true);
    const afterPrep = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(afterPrep.continuity?.phase).toBe("awaiting_trajectory_decision");
    expect(afterPrep.continuity?.presentationDigest).toBeTruthy();

    // Accept recommendation again must NOT invent HD / START
    const okRec = await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation.",
      sessionDbPath,
      provider,
    });
    expect(okRec.ok).toBe(true);
    if (okRec.ok) {
      expect(okRec.text).not.toMatch(/est maintenant actif/i);
    }
    const lpsIdle = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsIdle.ok).toBe(true);
    if (lpsIdle.ok) {
      expect(lpsIdle.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }

    // Explicit HD via Product server action (same seam as the card) — digest from server
    const approved = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: afterPrep.continuity!.presentationDigest!,
    });
    expect(approved.ok).toBe(true);
    expect(
      approved.continuity?.phase === "ready_to_start" ||
        approved.continuity?.phase === "trajectory_decided_prepare_cycle",
    ).toBe(true);
    if (approved.continuity?.phase === "trajectory_decided_prepare_cycle") {
      const prep = await projectAssistantAdvanceFramingContinuityAction({
        projectId,
        step: "prepare_cycle",
      });
      expect(prep.ok).toBe(true);
      expect(prep.continuity?.phase).toBe("ready_to_start");
    }

    const ready = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(ready.continuity?.phase).toBe("ready_to_start");
    expect(ready.continuity?.preparedCycleInstanceId).toBeTruthy();

    // Adversarial: recommendation accept while ready → no START
    const noStartFromRec = await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation.",
      sessionDbPath,
      provider,
    });
    expect(noStartFromRec.ok).toBe(true);
    if (noStartFromRec.ok) {
      expect(noStartFromRec.text).not.toMatch(/est maintenant actif/i);
    }

    // Adversarial: hypothetical
    const maybe = await projectAssistantSendAction({
      projectId,
      content: "Démarre peut-être le Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(maybe.ok).toBe(true);
    if (maybe.ok) {
      expect(maybe.text).not.toMatch(/est maintenant actif/i);
    }

    // Adversarial: late refuse
    const refuse = await projectAssistantSendAction({
      projectId,
      content: "Je confirme, mais finalement je refuse.",
      sessionDbPath,
      provider,
    });
    expect(refuse.ok).toBe(true);
    if (refuse.ok) {
      expect(refuse.text).not.toMatch(/est maintenant actif/i);
    }

    // Adversarial: question
    const question = await projectAssistantSendAction({
      projectId,
      content: "Quel est l'état du Cadrage ?",
      sessionDbPath,
      provider,
    });
    expect(question.ok).toBe(true);
    if (question.ok) {
      expect(question.text).not.toMatch(/est maintenant actif/i);
    }

    const stillReady = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(stillReady.continuity?.phase).toBe("ready_to_start");

    // CP-01 / CP-02 — explicit START through front-door with missing signals
    const start = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (!start.ok) throw new Error("start failed");
    expect(start.text).toMatch(/est maintenant actif/i);
    expect(start.project.activeCycleInstanceId).toBeTruthy();
    expect(start.f2?.turnKind).toBe("f1_informative");

    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    expect(lps.livingProjectState.activeCycleInstanceId).toBe(
      start.project.activeCycleInstanceId,
    );

    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cycles).toHaveLength(1);
    expect(cycles[0]!.status).toBe("active");
    expect(classifyTrajectoryBinding(cycles[0]!)).toBe(
      "COMPLETE_TRAJECTORY_BOUND",
    );
    expect(classifyTrajectoryBinding(cycles[0]!)).not.toBe("LEGACY_UNBOUND");

    // Idempotent second START
    const again = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
      provider,
    });
    if (!again.ok) {
      throw new Error(
        `second START unexpected failure: ${again.code ?? ""} ${again.message ?? again.status}`,
      );
    }
    expect(again.text).toMatch(/déjà actif|maintenant actif/i);
    const cyclesFinal = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesFinal).toHaveLength(1);

    // CP-03 — next deterministic turn consumes active cycle context
    const resume = await projectAssistantSendAction({
      projectId,
      content: "Quel est l'état du Cadrage ?",
      sessionDbPath,
      provider,
    });
    if (!resume.ok) {
      throw new Error(
        `resume turn unexpected failure: ${resume.code ?? ""} ${resume.message ?? resume.status}`,
      );
    }
    expect(resume.project.activeCycleInstanceId).toBe(
      lps.livingProjectState.activeCycleInstanceId,
    );
    // Nora resume: provider corpus for the resume turn must see the active cycle.
    const resumeCorpus = provider.lastMessageCorpus.at(-1) ?? "";
    expect(resumeCorpus.length).toBeGreaterThan(0);
    expect(resumeCorpus).toMatch(
      new RegExp(
        (lps.livingProjectState.activeCycleInstanceId ?? "").replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&",
        ),
      ),
    );
    // Display projection: active → no START card
    const afterActive = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(afterActive.continuity?.phase).toBe("active");
    const { framingContinuityForConversationDisplay } = await import(
      "@/features/project-assistant/f2/chatFirstFramingContinuity"
    );
    expect(
      framingContinuityForConversationDisplay(afterActive.continuity),
    ).toBeNull();
  });

  it("START without prepared cycle fails closed via front-door", async () => {
    const { projectId, sessionDbPath } = await bootWithCurrentFramingRec("noprep");
    const start = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (start.ok) {
      expect(start.text).not.toMatch(/est maintenant actif/i);
      expect(start.project.activeCycleInstanceId).toBeFalsy();
    }
  });

  it("stale digest never records HD", async () => {
    const { projectId, sessionDbPath } = await bootWithCurrentFramingRec("stale");
    await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation de Cadrage.",
      sessionDbPath,
      provider,
    });
    const stale = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest:
        "sha256:deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    });
    expect(stale.ok).toBe(false);
    const snap = await projectAssistantReadFramingContinuityAction({ projectId });
    expect(snap.continuity?.phase).toBe("awaiting_trajectory_decision");
  });
});
