/**
 * DETERMINISTIC NORA BOUNDARY PARITY — application path.
 *
 * projectAssistantSendAction → orchestrateAssistantSend → orchestrateF2
 * → FakeConversationProvider → Proposal DECISION_REQUIRED
 *
 * Natural Pilot request WITHOUT any fixture sentinel.
 * Deterministic — ZERO REAL / ZERO LIVE / ZERO Execute / ZERO Attempt.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { listEffectivePendingDecisionSubjectMarkers } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const NATURAL_REQUEST = `Matérialise le livrable attendu dans
projects/sfia-studio/.sandbox/gestion-de-taches.md.
Le livrable attendu est une fiche de cadrage fonctionnel minimale pour
l’application de gestion de tâches, décrivant l’objectif, le périmètre
fonctionnel — ajouter une tâche, la marquer comme terminée et la supprimer —
ainsi que les critères d’acceptation essentiels.
N’exécute rien : prépare la proposition correspondante pour ma décision.`;

const EXPECTED_TARGET =
  "projects/sfia-studio/.sandbox/gestion-de-taches.md";

const SANDBOX_BINDING = {
  identity: "mcleland147/sfia-workspace",
  remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
  defaultBranch: "main",
  pathRoot: "projects/sfia-studio/.sandbox/",
} as const;

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

describe("DETERMINISTIC NORA BOUNDARY PARITY — natural materialization application path", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("natural-materialize-apppath.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "nmap" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar(
      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
      previousMorrisAuthority,
    );
  });

  async function seedActiveCycleProject(): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "Natural materialize app path",
      objective: "Prouver la parité fake sans sentinel",
      context: "cycle actif + REQUIRE_ARTIFACT + sandbox binding",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "NMAP",
      idempotencyKey: "idem:nmap-natural-1",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("seed: createProject failed");
    const projectId = created.project.projectId;

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps0.ok).toBe(true);
    if (!lps0.ok) throw new Error("seed: LPS unavailable");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
        { stepId: "stp:deliver", order: 2, label: "Deliver", state: "done" },
      ],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    expect(traj.ok).toBe(true);

    const cycleInstanceId = "cyc:nmap-natural-1";
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:framing",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });
    expect(candidate.ok).toBe(true);

    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-09-15T20:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("seed: authority failed");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps1.ok).toBe(true);
    if (!lps1.ok) throw new Error("seed: LPS unavailable");

    const started = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth.evidenceId,
      expectedLpsVersion: lps1.livingProjectState.version,
    });
    expect(started.ok).toBe(true);

    const obligation = await recordObligationPolicyRequireArtifact({
      projectId,
      cycleInstanceId,
      cycleServices: oa.cycleServices,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => "2026-09-15T20:01:00.000Z",
    });
    expect(obligation.ok).toBe(true);

    const bound = await runtime.setProjectRepositoryBinding({
      projectId,
      ...SANDBOX_BINDING,
    });
    expect(bound.ok).toBe(true);

    return { projectId, cycleInstanceId };
  }

  it("AP-NAT — projectAssistantSendAction natural FR request creates DECISION_REQUIRED Proposal", async () => {
    expect(NATURAL_REQUEST).not.toMatch(/__F2_/);
    expect(NATURAL_REQUEST).not.toMatch(/__MW5_/);

    const { projectId } = await seedActiveCycleProject();

    const oa = runtime.oa!;
    const decisionsBefore = await oa.decisionServices.decisions.listByProject(
      projectId,
    );

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed: ${JSON.stringify(send)}`);

    expect(send.f2?.turnKind).toBe("f2_proposal");
    expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(send.f2?.proposal?.contextSnapshot?.projectId).toBe(projectId);
    expect(send.f2?.proposal?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
    expect(send.f2?.proposal?.executionIntent?.targetPath).toBe(EXPECTED_TARGET);
    expect(send.f2?.proposal?.executionIntent?.intentKind).toBe("docs_write");
    expect(send.f2?.proposal?.executionForbidden).toBe(true);
    expect(send.f2?.decision).toBeNull();

    const decisionsAfter = await oa.decisionServices.decisions.listByProject(
      projectId,
    );
    expect(decisionsAfter.length).toBe(decisionsBefore.length);

    if (typeof oa.executionContractServices.contracts.listByProject === "function") {
      const contracts = await oa.executionContractServices.contracts.listByProject(
        projectId,
      );
      expect(contracts.length).toBe(0);
    }

    const pending = await listEffectivePendingDecisionSubjectMarkers(
      oa,
      projectId,
    );
    expect(pending.ok).toBe(true);
    if (!pending.ok) throw new Error("pending read failed");
    expect(pending.markers.length).toBeGreaterThanOrEqual(1);
    expect(
      pending.markers.some(
        (m) => m.proposalId === send.f2?.proposal?.proposalId,
      ),
    ).toBe(true);
  });
});
