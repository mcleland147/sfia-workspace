/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 §10-A — Work vs Lifecycle family separation.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  isLifecycleRecommendationItem,
  projectCycleWorkRecommendations,
} from "@/lib/oa/cycle/application/deriveWorkRecommendations";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  resolveTrajectoryBootstrapPresence,
  selectCurrentLifecycleRecommendations,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";

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

const CYCLE_ID = "cycinst:sep-a";
const OPTION_SET = "optset:w2-work-only";

const tempDirs: string[] = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "dwr-"));
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

function workRecommendation() {
  return {
    epistemicItemId: "epi:work-1",
    type: "Recommendation",
    status: "active",
    source: OPTION_SET,
    statement: "RECOMMANDATION — poursuivre le sujet proposé.",
    relatedObjects: ["prj:x", OPTION_SET, "prop:f2:1", CYCLE_ID],
    createdAt: "2026-09-27T10:00:00.000Z",
  };
}

function lifecycleItem(input: {
  id: string;
  intent: "NEXT_CYCLE" | "FINALIZE_CURRENT_CYCLE";
  statement: string;
}) {
  return {
    epistemicItemId: input.id,
    type: "Recommendation",
    status: "active",
    source: "lifecycle-recommendation:nora",
    statement: input.statement,
    createdAt: "2026-09-27T11:00:00.000Z",
    relatedObjects: ["prj:x", CYCLE_ID],
    lifecycleRecommendation: {
      intent: input.intent,
      basisFingerprint: `fp:${input.id}`,
      semanticKey: `sk:${input.id}`,
      basisRefs: { projectId: "prj:x" },
      subjectCycleInstanceId: CYCLE_ID,
      targetCycleInstanceId: null,
      targetCycleTypeId:
        input.intent === "NEXT_CYCLE" ? "cyc:framing" : null,
      authority: "none",
    },
  };
}

describe("deriveWorkRecommendations — §10-A family separation", () => {
  it("classifies lifecycle carriers and keeps optset work Recommendations", () => {
    const work = workRecommendation();
    const next = lifecycleItem({
      id: "epi:lr-next",
      intent: "NEXT_CYCLE",
      statement: "Envisager le prochain cycle.",
    });
    const fin = lifecycleItem({
      id: "epi:lr-fin",
      intent: "FINALIZE_CURRENT_CYCLE",
      statement: "Envisager la finalisation.",
    });

    expect(isLifecycleRecommendationItem(next)).toBe(true);
    expect(isLifecycleRecommendationItem(fin)).toBe(true);
    expect(isLifecycleRecommendationItem(work)).toBe(false);

    const journalCards = projectCycleWorkRecommendations({
      items: [work, next, fin],
      cycleInstanceId: CYCLE_ID,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(journalCards).toHaveLength(1);
    expect(journalCards[0]!.epistemicItemId).toBe("epi:work-1");
    expect(journalCards[0]!.source).toBe(OPTION_SET);
    expect(journalCards.map((c) => c.epistemicItemId)).not.toContain(
      "epi:lr-next",
    );
    expect(journalCards.map((c) => c.epistemicItemId)).not.toContain(
      "epi:lr-fin",
    );
  });

  it("CURRENT NEXT_CYCLE and FINALIZE appear in lifecycle projection only", async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T20:00:00.000Z",
      idSource: new FixedIdSource("dwr"),
      auditMode: "noop",
      productDbPath: tempDbPath("sep.sqlite"),
    });
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "Separation",
      objective: "gestion de tâches",
      context: "journal vs lifecycle",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "DWR",
      idempotencyKey: "idem:dwr-sep",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    const projectId = created.projectId;

    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    const decisions = await oa.decisionServices.decisions.listByProject(
      projectId,
    );
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps.ok) throw new Error("lps");
    const presence = await resolveTrajectoryBootstrapPresence(
      oa.cycleServices.trajectories,
      projectId,
    );
    const mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId,
      structuredOutput: {
        narrative: "Prochain cycle recommandé.",
        preCycleRoutingAssessment: {
          ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
        },
        lifecycleRecommendation: {
          intent: "NEXT_CYCLE" as const,
          statement: "Envisager un Cadrage.",
          subjectCycleInstanceId: null,
          targetCycleInstanceId: null,
          targetCycleTypeId: "cyc:framing",
          rationale: "Suite supportable.",
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
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: null,
        trajectoryBootstrapPresence: presence,
        decisions,
        evidence: [],
        epistemicItems: await oa.cycleServices.epistemic.listByProject(
          projectId,
        ),
      },
      producedAt: "2026-09-09T20:01:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(true);

    const durableItems = await oa.cycleServices.epistemic.listByProject(
      projectId,
    );
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    const current = selectCurrentLifecycleRecommendations({
      items: durableItems,
      cycles: await oa.cycleServices.cycles.listByProject(projectId),
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.ok ? traj.trajectory : null,
      decisions: await oa.decisionServices.decisions.listByProject(projectId),
      evidence: [],
    }).filter((r) => r.derivedCurrentness === "CURRENT");

    expect(current.some((r) => r.intent === "NEXT_CYCLE")).toBe(true);

    const workCards = projectCycleWorkRecommendations({
      items: [workRecommendation(), ...durableItems],
      cycleInstanceId: CYCLE_ID,
      fallbackCycleInstanceId: CYCLE_ID,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(workCards).toHaveLength(1);
    expect(workCards[0]!.optionSetRef).toBe(OPTION_SET);
    for (const lr of current) {
      expect(workCards.some((c) => c.statement === lr.statement)).toBe(false);
    }
  });
});
