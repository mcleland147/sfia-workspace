/**
 * LR CORR-DELIVERY-02 — material basis/currentness + Product Nora→Epistemic bridge.
 * ZERO REAL — ScriptedModel through orchestrateAssistantSend / orchestrateProjectAssistantTurn.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai";
import {
  createTestDoctrineResolver,
  FixedClock,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
} from "@/lib/oa/project";
import {
  deriveLifecycleBlockersFromEpistemicItems,
  deriveLifecycleRecommendationCurrentness,
  computeBasisFingerprint,
  materialBasisRefsEqual,
  produceLifecycleRecommendation,
  rebuildBasisRefsForRecommendation,
  resolveCanonicalLifecycleRecommendationBasis,
  selectCurrentLifecycleRecommendations,
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
} from "@/lib/oa/cycle";
import {
  createSqliteDecisionServices,
  MemoryAuthorityResolver,
  registerLocalPiloteAuthority,
  LOCAL_PILOTE_ACTOR,
} from "@/lib/oa/decision";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import * as runNoraAgentsTurnMod from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const NORA_BY = {
  actorId: "actor:nora",
  role: "agent" as const,
  displayName: "Nora",
  authorityLevel: "N1" as const,
};

const STEPS = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "pending" as const },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "pending" as const,
    dependencies: ["stp:clarify"],
  },
];

const tempDirs: string[] = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  vi.restoreAllMocks();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-lr-final-"));
  tempDirs.push(dir);
  return path.join(dir, name);
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

function productTurnPayload(
  lr: object | null,
  narrative: string,
  assessment: {
    routingBlockingUnknownPresent: boolean;
    candidateCycleSupportable: boolean;
    remainingUnknownsAreCycleOwned: boolean;
    multiplePlausibleCycles: boolean;
    activeCycleAlreadyCoversWork: boolean;
  } = lr
    ? {
        routingBlockingUnknownPresent: false,
        candidateCycleSupportable: true,
        remainingUnknownsAreCycleOwned: true,
        multiplePlausibleCycles: false,
        activeCycleAlreadyCoversWork: false,
      }
    : {
        routingBlockingUnknownPresent: true,
        candidateCycleSupportable: false,
        remainingUnknownsAreCycleOwned: false,
        multiplePlausibleCycles: false,
        activeCycleAlreadyCoversWork: false,
      },
) {
  return {
    narrative,
    preCycleRoutingAssessment: assessment,
    lifecycleRecommendation: lr,
  };
}

function finalizeCandidate(subjectCycleInstanceId: string) {
  return {
    intent: "FINALIZE_CURRENT_CYCLE" as const,
    statement: "Envisager la finalisation du cycle actif.",
    subjectCycleInstanceId,
    targetCycleInstanceId: null,
    targetCycleTypeId: null,
    rationale: null,
    authority: "none" as const,
    isHumanDecision: false as const,
    qualificationSignals: null,
  };
}

async function bootProductProject(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-08T09:00:00.000Z",
    idSource: new FixedIdSource(`lr-fin-${suffix}`),
    auditMode: "noop",
    productDbPath: tempDbPath(`${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `LR Final ${suffix}`,
    objective: "lifecycle",
    context: "lr-final",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `LRF${suffix}`,
    idempotencyKey: `idem:lr-fin-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  const oa = runtime.oa;
  const traj = await oa.cycleServices.createInitialTrajectory.execute({
    trajectoryId: `trj:${projectId}`,
    projectId,
    steps: STEPS,
    status: "active",
    expectedLpsVersion: created.livingState.version,
    createdBy: ACTOR,
  });
  expect(traj.ok).toBe(true);
  const cycleInstanceId = `cyc:lr-fin-${suffix}`;
  const cycle = await oa.cycleServices.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: "cyc:delivery",
    projectId,
    signals: { lowRiskBounded: true },
    createdBy: NORA_BY,
    linkAsActiveCycle: false,
  });
  expect(cycle.ok).toBe(true);
  const auth = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: `pilot-lifecycle:${cycleInstanceId}`,
    issuedAt: "2026-09-08T09:00:00.000Z",
    forceEnable: true,
  });
  expect(auth.ok).toBe(true);
  if (!auth.ok) throw new Error(auth.message);
  const start = await oa.cycleServices.pilotLifecycle.start({
    cycleInstanceId,
    projectId,
    createdBy: LOCAL_PILOTE_ACTOR,
    authorityEvidenceId: auth.evidenceId,
  });
  expect(start.ok).toBe(true);
  return { runtime, oa, projectId, cycleInstanceId, sessionDbPath: tempDbPath(`sess-${suffix}.sqlite`) };
}

describe("LR CORR-DELIVERY-02 material basis", () => {
  it("BASIS-01..08 — intent-scoped material mutations stale; unrelated stays current", async () => {
    const ctx = await bootProductProject("basis");
    const cycles = await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId);
    const traj = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    const lps = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const basis = resolveCanonicalLifecycleRecommendationBasis({
      intent: "FINALIZE_CURRENT_CYCLE",
      projectId: ctx.projectId,
      subjectCycleInstanceId: ctx.cycleInstanceId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(basis.finalizeAccepted).toBeNull();
    expect(basis.resumeClean).toBeNull();

    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      projectId: ctx.projectId,
      structured: finalizeCandidate(ctx.cycleInstanceId),
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      basisRefs: basis,
      producedAt: "2026-09-08T09:00:01.000Z",
      createdBy: NORA_BY,
      existingItems: [],
    });
    expect(produced.ok).toBe(true);
    if (!produced.ok) return;

    const item = produced.item;

    // BASIS-01 subject status
    const paused = { ...cycles[0]!, status: "paused" as const };
    let rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles: [paused],
        lpsActiveCycleInstanceId: null,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-02 LPS version
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version + 1,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-03 trajectory version
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: { ...traj.trajectory, version: traj.trajectory.version + 1 },
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-04 HD fingerprint
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [
          {
            schemaVersion: "0.1.0-oa",
            decisionId: "dec:basis-hd",
            projectId: ctx.projectId,
            cycleInstanceId: ctx.cycleInstanceId,
            subject: "finalize-cycle",
            status: "accepted",
            options: [{ optionId: "opt:a", label: "A" }],
            selectedOptionId: "opt:a",
            effectiveAt: "2026-09-08T09:01:00.000Z",
            reversible: true,
            actor: LOCAL_PILOTE_ACTOR,
            authority: "morris",
          },
        ],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-05 evidence
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [
          {
            schemaVersion: "0.1.0-oa",
            evidenceId: "ev:basis",
            projectId: ctx.projectId,
            kind: "artifact",
            status: "available",
            createdAt: "2026-09-08T09:00:00.000Z",
            createdBy: ACTOR,
            bindings: { cycleInstanceId: ctx.cycleInstanceId },
          } as never,
        ],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-06 blockers
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: ["blocking reservation"],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-07 doctrine digest
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: "sha256:" + "b".repeat(64),
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // Write/read parity under unchanged durable truth
    const writeBasis = basis;
    const readBasis = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(materialBasisRefsEqual(writeBasis, readBasis)).toBe(true);
    expect(computeBasisFingerprint(writeBasis)).toBe(
      computeBasisFingerprint(readBasis),
    );
    expect(
      deriveLifecycleRecommendationCurrentness({
        item,
        currentBasisRefs: readBasis,
      }),
    ).toBe("CURRENT");
  });

  it("BASIS-08 — durable non-material Epistemic Observation mutation remains CURRENT", async () => {
    const ctx = await bootProductProject("basis08");
    const cycles = await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId);
    const traj = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    const lps = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const writeBasis = resolveCanonicalLifecycleRecommendationBasis({
      intent: "FINALIZE_CURRENT_CYCLE",
      projectId: ctx.projectId,
      subjectCycleInstanceId: ctx.cycleInstanceId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });

    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      projectId: ctx.projectId,
      structured: finalizeCandidate(ctx.cycleInstanceId),
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      basisRefs: writeBasis,
      producedAt: "2026-09-08T09:00:01.000Z",
      createdBy: NORA_BY,
      existingItems: [],
    });
    expect(produced.ok).toBe(true);
    if (!produced.ok) return;

    // Non-material durable mutation: non-blocking Observation (not Reservation,
    // not Recommendation, does not enter blocker/decision/evidence fingerprints).
    const noise = await ctx.oa.cycleServices.updateEpistemicState.execute({
      projectId: ctx.projectId,
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: `epi:noise-basis08-${ctx.projectId}`,
          type: "Observation",
          statement: "Unrelated durable observation outside LR material scope.",
          source: "test:noise",
          relatedObjects: [ctx.projectId],
        },
      ],
    });
    expect(noise.ok).toBe(true);

    const itemsAfter = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      itemsAfter.some((i) => i.epistemicItemId.includes("noise-basis08")),
    ).toBe(true);
    const lrItem = itemsAfter.find(
      (i) => i.epistemicItemId === produced.item.epistemicItemId,
    )!;
    expect(lrItem).toBeTruthy();

    const cyclesAfter = await ctx.oa.cycleServices.cycles.listByProject(
      ctx.projectId,
    );
    const decisionsAfter =
      await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId);
    const evidenceAfter =
      await ctx.oa.evidenceReviewServices.repository.listByProject(
        ctx.projectId,
      );
    const blockers = deriveLifecycleBlockersFromEpistemicItems(itemsAfter);
    const readBasis = rebuildBasisRefsForRecommendation({
      item: lrItem,
      facts: {
        cycles: cyclesAfter,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: decisionsAfter,
        evidence: evidenceAfter,
        blockingReservationStatements: blockers.statements,
      },
    })!;
    expect(materialBasisRefsEqual(writeBasis, readBasis)).toBe(true);
    expect(
      deriveLifecycleRecommendationCurrentness({
        item: lrItem,
        currentBasisRefs: readBasis,
      }),
    ).toBe("CURRENT");

    const current = selectCurrentLifecycleRecommendations({
      items: itemsAfter,
      cycles: cyclesAfter,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: decisionsAfter,
      evidence: evidenceAfter,
      blockingReservationStatements: blockers.statements,
    });
    expect(current.some((c) => c.recommendationId === lrItem.epistemicItemId)).toBe(
      true,
    );
  });
});

describe("LR CORR-DELIVERY-02 Product Nora bridge E2E", () => {
  it("E2E — orchestrateProjectAssistantTurn materializes Recommendation (one Agents call)", async () => {
    const ctx = await bootProductProject("e2e");
    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const payload = productTurnPayload(
      finalizeCandidate(ctx.cycleInstanceId),
      "Je recommande d'envisager la finalisation.",
    );
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(payload))],
    ]);
    const beforeCycles = await ctx.oa.cycleServices.cycles.listByProject(
      ctx.projectId,
    );
    const beforeHd = await ctx.oa.decisionServices.decisions.listByProject(
      ctx.projectId,
    );

    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "Dois-je finaliser?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });

    if (!result.ok) {
      // eslint-disable-next-line no-console
      console.error("E2E FAIL", result);
    }
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toBe("Je recommande d'envisager la finalisation.");
    expect(result.text.includes("{")).toBe(false);
    expect(result.lifecycleRecommendationMaterialized).toBe(true);
    expect(spy).toHaveBeenCalledTimes(1);

    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    const lr = items.filter(
      (i) => i.source === "lifecycle-recommendation:nora" && i.status === "active",
    );
    expect(lr).toHaveLength(1);
    expect(lr[0]!.createdBy.actorId).toBe(
      NORA_LIFECYCLE_RECOMMENDATION_ACTOR.actorId,
    );
    expect(lr[0]!.createdBy.role).toBe("agent");
    expect(lr[0]!.createdBy.actorId).not.toBe(LOCAL_PILOTE_ACTOR.actorId);
    expect(lr[0]!.source).toBe("lifecycle-recommendation:nora");
    expect(lr[0]!.lifecycleRecommendation?.authority).toBe("none");
    expect(lr[0]!.lifecycleRecommendation?.basisRefs.finalizeAccepted).toBeNull();
    expect(lr[0]!.lifecycleRecommendation?.basisRefs.resumeClean).toBeNull();
    expect(lr[0]!.lifecycleRecommendation?.basisRefs.trajectoryId).toBeTruthy();
    expect(lr[0]!.lifecycleRecommendation?.basisRefs.decisionFingerprint).toBe(
      "none",
    );

    const afterCycles = await ctx.oa.cycleServices.cycles.listByProject(
      ctx.projectId,
    );
    expect(afterCycles.map((c) => c.status)).toEqual(
      beforeCycles.map((c) => c.status),
    );
    const afterHd = await ctx.oa.decisionServices.decisions.listByProject(
      ctx.projectId,
    );
    expect(afterHd.length).toBe(beforeHd.length);

    const lpsNow = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lpsNow.ok).toBe(true);
    if (!lpsNow.ok) return;
    const trajNow = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    const pin =
      lpsNow.livingProjectState.doctrinePackageRef ?? VALID_PIN;
    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles: afterCycles,
      lpsActiveCycleInstanceId: lpsNow.livingProjectState.activeCycleInstanceId,
      lpsVersion: lpsNow.livingProjectState.version,
      doctrinePackageId: pin.doctrinePackageId,
      doctrinePackageVersion: pin.version,
      doctrinePackageDigest: pin.digest,
      trajectory: trajNow.ok ? trajNow.trajectory : null,
      decisions: afterHd,
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(current).toHaveLength(1);
    expect(current[0]!.derivedCurrentness).toBe("CURRENT");
  });

  it("E2E-NONE — null Recommendation keeps narrative and persists nothing", async () => {
    const ctx = await bootProductProject("none");
    const payload = productTurnPayload(null, "Simple conseil conversationnel.");
    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "Un conseil?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toBe("Simple conseil conversationnel.");
    expect(result.lifecycleRecommendationMaterialized).toBe(false);
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      items.filter((i) => i.source === "lifecycle-recommendation:nora"),
    ).toHaveLength(0);
  });

  it("E2E-INVALID — bad subject fails closed without HD/cycle mutation", async () => {
    const ctx = await bootProductProject("inv");
    const bad = finalizeCandidate("cyc:does-not-exist");
    const payload = productTurnPayload(bad, "Texte visible malgré candidat invalide.");
    const beforeHd = await ctx.oa.decisionServices.decisions.listByProject(
      ctx.projectId,
    );
    const beforeCycles = await ctx.oa.cycleServices.cycles.listByProject(
      ctx.projectId,
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "Finaliser?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toBe("Texte visible malgré candidat invalide.");
    expect(result.lifecycleRecommendationMaterialized).toBe(false);
    expect(result.lifecycleRecommendationCode).toBeTruthy();
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      items.filter((i) => i.source === "lifecycle-recommendation:nora"),
    ).toHaveLength(0);
    expect(
      (await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId))
        .length,
    ).toBe(beforeHd.length);
    expect(
      (await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId)).map(
        (c) => c.status,
      ),
    ).toEqual(beforeCycles.map((c) => c.status));
  });

  it("E2E-AUTHORITY — authority != none rejected", async () => {
    const ctx = await bootProductProject("auth");
    const payload = productTurnPayload(
      {
        ...finalizeCandidate(ctx.cycleInstanceId),
        authority: "pilot",
      },
      "Narratif visible.",
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    // Structured product-turn validation may drop invalid LR → null coerce OR fail materialize
    expect(result.lifecycleRecommendationMaterialized).not.toBe(true);
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      items.filter((i) => i.source === "lifecycle-recommendation:nora"),
    ).toHaveLength(0);
  });

  it("E2E via orchestrateAssistantSend — same Product path", async () => {
    const ctx = await bootProductProject("f2");
    const payload = productTurnPayload(
      finalizeCandidate(ctx.cycleInstanceId),
      "Conseil F2→F1 avec recommandation.",
    );
    const result = await orchestrateAssistantSend({
      projectId: ctx.projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
      sessionDbPath: ctx.sessionDbPath,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
      evalCellProviderFactory: () => new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toContain("Conseil F2→F1");
    expect(result.lifecycleRecommendationMaterialized).toBe(true);
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      items.some(
        (i) =>
          i.source === "lifecycle-recommendation:nora" && i.status === "active",
      ),
    ).toBe(true);
  });
});

describe("LR CORR-DELIVERY-03 provenance + fail-closed", () => {
  it("PROV-01..06 — durable reloaded createdBy is Nora agent, never Pilote; no HD", async () => {
    const ctx = await bootProductProject("prov");
    const beforeHd = await ctx.oa.decisionServices.decisions.listByProject(
      ctx.projectId,
    );
    const payload = productTurnPayload(
      finalizeCandidate(ctx.cycleInstanceId),
      "Narratif avec recommandation Nora.",
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "Finaliser?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.lifecycleRecommendationMaterialized).toBe(true);

    const reloaded = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    const lr = reloaded.find(
      (i) => i.source === "lifecycle-recommendation:nora" && i.status === "active",
    );
    expect(lr).toBeTruthy();
    if (!lr) return;
    expect(lr.createdBy.actorId).toBe("actor:nora");
    expect(lr.createdBy.role).toBe("agent");
    expect(lr.createdBy.actorId).not.toBe(LOCAL_PILOTE_ACTOR.actorId);
    expect(lr.source).toBe("lifecycle-recommendation:nora");
    expect(lr.lifecycleRecommendation?.authority).toBe("none");
    expect(
      (await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId))
        .length,
    ).toBe(beforeHd.length);
  });

  it("FAIL-01..05 — material reader UNKNOWN blocks persist; EMPTY may materialize", async () => {
    const ctx = await bootProductProject("fail");
    const cycles = await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId);
    const lps = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const traj = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    const baseFacts = {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [] as const,
      evidence: [] as const,
      epistemicItems: [] as const,
    };
    const structured = productTurnPayload(
      finalizeCandidate(ctx.cycleInstanceId),
      "Narratif conserve même si LR refuse.",
    );

    // FAIL-01 trajectory
    let mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["trajectory"]),
      },
      producedAt: "2026-09-08T10:00:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.narrative).toBe("Narratif conserve même si LR refuse.");
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BASIS_TRAJECTORY_UNAVAILABLE");
    }

    // FAIL-02 decisions
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["decisions"]),
      },
      producedAt: "2026-09-08T10:00:01.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BASIS_DECISIONS_UNAVAILABLE");
    }

    // FAIL-03 evidence (FINALIZE)
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["evidence"]),
      },
      producedAt: "2026-09-08T10:00:02.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BASIS_EVIDENCE_UNAVAILABLE");
    }

    // FAIL-04 epistemic/blockers
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["epistemic_blockers"]),
      },
      producedAt: "2026-09-08T10:00:03.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BASIS_EPISTEMIC_UNAVAILABLE");
    }

    // FAIL-05 known empty succeeds
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(),
      },
      producedAt: "2026-09-08T10:00:04.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(true);

    // FAIL-07 evidence failure irrelevant for NEXT_CYCLE
    const nextStructured = productTurnPayload(
      {
        intent: "NEXT_CYCLE" as const,
        statement: "Envisager un prochain cycle.",
        subjectCycleInstanceId: ctx.cycleInstanceId,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:delivery",
        rationale: null,
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
      "Narratif next.",
    );
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: nextStructured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["evidence"]),
      },
      producedAt: "2026-09-08T10:00:05.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(true);
  });

  it("FAIL-06 — read-side material reader unavailable omits CURRENT", async () => {
    const ctx = await bootProductProject("fail06");
    const cycles = await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId);
    const lps = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const traj = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    const basis = resolveCanonicalLifecycleRecommendationBasis({
      intent: "FINALIZE_CURRENT_CYCLE",
      projectId: ctx.projectId,
      subjectCycleInstanceId: ctx.cycleInstanceId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });
    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      projectId: ctx.projectId,
      structured: finalizeCandidate(ctx.cycleInstanceId),
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      basisRefs: basis,
      producedAt: "2026-09-08T10:10:00.000Z",
      createdBy: NORA_BY,
      existingItems: [],
    });
    expect(produced.ok).toBe(true);
    if (!produced.ok) return;
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    const okCurrent = selectCurrentLifecycleRecommendations({
      items,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(okCurrent).toHaveLength(1);

    const omitted = selectCurrentLifecycleRecommendations({
      items,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: null,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
      failedMaterialDimensions: new Set(["trajectory"]),
    });
    expect(omitted).toHaveLength(0);
  });
});
