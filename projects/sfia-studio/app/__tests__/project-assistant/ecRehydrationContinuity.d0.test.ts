/**
 * Restart-safe governed ExecutionContract + inspection continuity (D0).
 * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  computeInspectionFingerprint,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
import {
  baseBuildRequest,
  buildStack,
  MORRIS_ACTOR,
  registerMorris,
  seedProject,
  type Stack,
} from "../oa/execution-contract/helpers";

const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";
const TARGET_REPO = "mcleland147/sfia-workspace";
const TECH_TARGET = "workspace.isolated.docs_write";
const DOCS_WRITE_ACTION = "cursor.docs_write.apply";
const PROJECT_ID = "prj:campus360-oa";
const DECISION_ID = "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411";
const EC_ID = "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411";
const PROP_ID = "prop:f2:edba677a-123f-4f5e-baad-50533a65a3a0";

const LEGACY_INSPECTED_FACTS = [
  "action",
  "target",
  "scope",
  "requiredAuthority",
  "requiredCapabilities",
  "constraints",
  "stopConditions",
  "reversibility",
  "semanticFingerprint",
] as const;

function stubOa(
  stack: Stack,
  nowIso: string,
  projectRead?:
    | { ok: true; activeCycleInstanceId: string | null }
    | { ok: false },
) {
  const base = {
    executionContractServices: stack.execution,
    decisionServices: stack.decisions,
    authorityResolver: stack.decisions.authority,
    clock: { nowIso: () => nowIso },
    projectServices: stack.projects,
    cycleServices: stack.cycles,
    // CR-CI506-01 — continuity now reads terminal Attempt presence via
    // listExecutionAttempts.execute. Ordinary rehydration fixtures have no
    // Attempts: return a deterministic empty list (EMPTY ≠ UNKNOWN).
    executionAttemptServices: {
      registry: {
        listAgents: () => [],
        findCandidates: () => [],
      },
      listExecutionAttempts: {
        execute: async () =>
          ({
            ok: true as const,
            attempts: [],
          }) as never,
      },
    },
  } as unknown as Parameters<
    typeof readCurrentGovernedExecutionContinuity
  >[0]["oa"];

  if (!projectRead) return base;

  return {
    ...base,
    projectServices: {
      ...stack.projects,
      getProject: {
        execute: async () => {
          if (!projectRead.ok) {
            return {
              ok: false as const,
              error: {
                code: "PROJECT_NOT_FOUND" as const,
                message: "Project unavailable",
              },
            };
          }
          return {
            ok: true as const,
            project: {
              projectId: PROJECT_ID,
              activeCycleInstanceId:
                projectRead.activeCycleInstanceId ?? undefined,
            },
          };
        },
      },
    },
  } as unknown as typeof base;
}

async function seedDecisionWithBasis(
  stack: Stack,
  opts: {
    decisionId?: string;
    selectedOptionId?: string;
    sourceRef?: string;
  } = {},
): Promise<string> {
  const decisionId = opts.decisionId ?? DECISION_ID;
  const selectedOptionId =
    opts.selectedOptionId ?? "opt:proposal-subject:pursue";
  const sourceRef = opts.sourceRef ?? PROP_ID;

  try {
    registerMorris(stack.decisions.authority, "docs_write borné — cycle actif");
  } catch {
    /* already registered */
  }
  try {
    stack.decisions.authority.register({
      evidenceId: `evd:morris-continuity-${decisionId.replace(/[^a-z0-9]/gi, "")}`,
      actorId: "actor:morris",
      level: "N3",
      scope: `W2 Proposal subject arbitration for ${sourceRef}`,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });
  } catch {
    /* already registered */
  }

  const recorded = await stack.decisions.recordHumanDecision.execute({
    decisionId,
    projectId: PROJECT_ID,
    subject: `W2 Proposal subject arbitration for ${sourceRef}`,
    options: [
      {
        optionId: "opt:proposal-subject:pursue",
        label: "Poursuivre",
        recommended: true,
      },
      { optionId: "opt:proposal-subject:amend", label: "Amender" },
      { optionId: "opt:proposal-subject:refuse", label: "Refuser" },
    ],
    selectedOptionId,
    actor: MORRIS_ACTOR,
    authority: "morris",
    reversible: true,
    authorityEvidenceId: `evd:morris-continuity-${decisionId.replace(/[^a-z0-9]/gi, "")}`,
    decisionBasis: {
      sourceType: "proposal",
      sourceRef,
      sourceDigest:
        "2035bb9b58e77d6a97c71760b730fd041f5710e3809669d0cb57f2d376356bde",
      projectId: PROJECT_ID,
      proposalContext: {
        lpsId: "lps:3a8e02537e45d5b9",
        lpsVersion: 17,
      },
      executionBasis: {
        requestedOperation: DOCS_WRITE_ACTION,
        targetPath: TARGET_PATH,
        targetRepositoryRef: TARGET_REPO,
      },
    },
  });
  expect(recorded.ok).toBe(true);
  return decisionId;
}

async function buildValidatedDocsWriteEc(
  stack: Stack,
  opts: {
    executionContractId?: string;
    decisionId?: string;
    idempotencyKey?: string;
  } = {},
): Promise<ExecutionContract> {
  const decisionId = opts.decisionId ?? DECISION_ID;
  const executionContractId = opts.executionContractId ?? EC_ID;
  const scope = "docs_write borné — cycle actif — aucune exécution automatique";
  const authorityEvidenceId = `evd:morris-${executionContractId.replace(/[^a-z0-9]/gi, "")}`;
  try {
    stack.decisions.authority.register({
      evidenceId: authorityEvidenceId,
      actorId: "actor:morris",
      level: "N3",
      scope,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });
  } catch {
    /* already registered */
  }

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      executionContractId,
      projectId: PROJECT_ID,
      decisionRefs: [decisionId],
      action: DOCS_WRITE_ACTION,
      target: TECH_TARGET,
      scope,
      inputs: {
        objective: "Matérialiser le livrable requis du cycle actif",
        targetPath: TARGET_PATH,
        targetRepositoryRef: TARGET_REPO,
        repositoryRef: TARGET_REPO,
        repositoryIdentity: TARGET_REPO,
        scopeIn: ["projects/sfia-studio/.sandbox"],
        scopeOut: [],
        createOrModify: true,
        noDelete: true,
        contentRequirements: ["fiche de cadrage"],
        expectedOutputs: [TARGET_PATH],
      },
      expectedOutputs: [TARGET_PATH],
      evidenceRequirements: ["evreq:git-working-tree"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      requiredAuthority: "MORRIS",
      constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL"],
      stopConditions: ["AUTHORITY_DENIED"],
      reversibility: "reversible",
      idempotencyKey: opts.idempotencyKey ?? `idem:${executionContractId}`,
      authorityEvidenceId,
      actor: MORRIS_ACTOR,
    }),
  );
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");

  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId,
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");
  return validated.contract;
}

function semanticSnapshot(stack: Stack) {
  return {
    decisions: stack.decisions.audit.events.length,
    executionEvents: stack.execution.audit.events.length,
  };
}

describe("EC rehydration continuity — readCurrentGovernedExecutionContinuity", () => {
  it("campaign shape — active EC + legacy incomplete inspection; ZERO semantic writes", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    expect(contract.status).toBe("confirmation_required");
    expect(contract.version).toBeGreaterThanOrEqual(1);

    const fingerprint = computeInspectionFingerprint(contract);
    await stack.execution.inspectionAttestations.append({
      schemaVersion: "0.1.0-oa",
      attestationId: "insp:05042f3b6040838e",
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
      inspectionFingerprint: fingerprint,
      semanticFingerprint: contract.semanticFingerprint ?? fingerprint,
      projectId: PROJECT_ID,
      actor: LOCAL_PILOTE_ACTOR,
      inspectedAt: "2026-09-16T02:03:03.581Z",
      inspectedFacts: [...LEGACY_INSPECTED_FACTS],
      grantsAuthority: false,
      isConfirmation: false,
    });

    const beforeAttestations =
      await stack.execution.inspectionAttestations.listByContract(
        contract.executionContractId,
      );
    const beforeDecision = await stack.decisions.getHumanDecision.execute({
      decisionId: DECISION_ID,
    });
    expect(beforeDecision.ok).toBe(true);
    const beforeSnap = semanticSnapshot(stack);

    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });

    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("active");
    if (read.kind !== "active") return;

    expect(read.decisionRef).toBe(DECISION_ID);
    expect(read.contract.executionContractId).toBe(EC_ID);
    expect(read.contract.status).toBe("confirmation_required");
    expect(read.contract.action).toBe(DOCS_WRITE_ACTION);
    expect(read.contract.target).toBe(TECH_TARGET);
    expect(read.contract.inspectionDisclosure.targetPath).toBe(TARGET_PATH);
    expect(read.contract.inspectionDisclosure.targetRepositoryRef).toBe(
      TARGET_REPO,
    );
    expect(read.contract.inspectionDisclosure).not.toHaveProperty("inputs");
    expect(read.inspection.inspectionSufficient).toBe(false);
    expect(read.inspection.reinspectionRequired).toBe(true);
    expect(read.inspection.reason).toBe("inspected_facts_incomplete");
    expect(read.inspection.statusLabel).toBe(
      "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS",
    );
    expect(read.inspection.grantsAuthority).toBe(false);

    const afterAttestations =
      await stack.execution.inspectionAttestations.listByContract(
        contract.executionContractId,
      );
    expect(afterAttestations.length).toBe(beforeAttestations.length);
    const afterDecision = await stack.decisions.getHumanDecision.execute({
      decisionId: DECISION_ID,
    });
    expect(afterDecision.ok).toBe(true);
    if (beforeDecision.ok && afterDecision.ok) {
      expect(afterDecision.decision.version).toBe(beforeDecision.decision.version);
      expect(afterDecision.decision.status).toBe(beforeDecision.decision.status);
    }
    const listed = await stack.execution.listExecutionContractHistory.execute({
      projectId: PROJECT_ID,
    });
    expect(listed.ok).toBe(true);
    if (listed.ok) {
      expect(listed.contracts).toHaveLength(1);
      expect(listed.contracts[0]!.executionContractId).toBe(EC_ID);
    }
    // Audit bookkeeping may grow; decision/EC/attestation counts stay stable.
    expect(afterAttestations.length).toBe(1);
    void beforeSnap;
  });

  it("G1 — no EC → kind none", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read).toEqual({ ok: true, kind: "none" });
  });

  it("G2 — only terminal historical ECs → none", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    await stack.execution.contracts.save({
      ...contract,
      status: "completed",
    });
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read).toEqual({ ok: true, kind: "none" });
  });

  it("G3 — superseded prior + valid successor → successor only", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const prior = await buildValidatedDocsWriteEc(stack, {
      executionContractId: "xct:prior",
      idempotencyKey: "idem:prior",
    });
    const superseded = await stack.execution.supersedeExecutionContract.execute({
      newExecutionContractId: "xct:successor",
      supersedesExecutionContractId: prior.executionContractId,
      supersessionReason: "Scope narrowed after review",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: `evd:morris-${prior.executionContractId.replace(/[^a-z0-9]/gi, "")}`,
      expectedVersion: prior.version,
      idempotencyKey: "idem:successor",
      constraints: [...prior.constraints, "EXTRA_CONSTRAINT"],
    });
    expect(superseded.ok).toBe(true);
    if (!superseded.ok) return;

    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(true);
    if (!read.ok || read.kind !== "active") return;
    expect(read.contract.executionContractId).toBe("xct:successor");
  });

  it("G4 — two unresolved current candidates → AMBIGUOUS", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack, { decisionId: "dec:w2-prop:continuity-a" });
    await seedDecisionWithBasis(stack, {
      decisionId: "dec:w2-prop:continuity-b",
      sourceRef: "prop:f2:other",
    });
    await buildValidatedDocsWriteEc(stack, {
      executionContractId: "xct:a",
      decisionId: "dec:w2-prop:continuity-a",
      idempotencyKey: "idem:continuity-a",
    });
    await buildValidatedDocsWriteEc(stack, {
      executionContractId: "xct:b",
      decisionId: "dec:w2-prop:continuity-b",
      idempotencyKey: "idem:continuity-b",
    });

    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(false);
    if (read.ok) return;
    expect(read.code).toBe("EXECUTION_CONTINUITY_AMBIGUOUS");
  });

  it("G5 — missing decisionRef → INTEGRITY_FAILED", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    await stack.execution.contracts.save({
      ...contract,
      decisionRefs: [],
    });
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(false);
    if (read.ok) return;
    expect(read.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
  });

  it("G6 — EC of another project never projected", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedProject(stack.projects, "prj:other");
    await seedDecisionWithBasis(stack);
    await buildValidatedDocsWriteEc(stack);
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: "prj:other",
    });
    expect(read).toEqual({ ok: true, kind: "none" });
  });

  it("G8 — fresh sufficient attestation remains sufficient; read does not record", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const inspected = await inspectExecutionContract({
      oa,
      projectId: PROJECT_ID,
      executionContractId: contract.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    const before =
      await stack.execution.inspectionAttestations.listByContract(
        contract.executionContractId,
      );

    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(true);
    if (!read.ok || read.kind !== "active") return;
    expect(read.inspection.inspectionSufficient).toBe(true);
    expect(read.inspection.reason).toBe("inspected");

    const after =
      await stack.execution.inspectionAttestations.listByContract(
        contract.executionContractId,
      );
    expect(after.length).toBe(before.length);
  });

  it("executing current contract → UNSUPPORTED fail-closed", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    await stack.execution.contracts.save({
      ...contract,
      status: "executing",
    });
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z");
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(false);
    if (read.ok) return;
    expect(read.code).toBe("EXECUTION_CONTINUITY_UNSUPPORTED");
  });

  it("P1 — Project read fails → INTEGRITY_FAILED; no contract projection", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    await buildValidatedDocsWriteEc(stack);
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", { ok: false });
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(false);
    if (read.ok) return;
    expect(read.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
  });

  it("P2 — explicit EC cycle + Project activeCycle null → INTEGRITY_FAILED", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    await stack.execution.contracts.save({
      ...contract,
      cycleInstanceId: "cyc:A",
    });
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", {
      ok: true,
      activeCycleInstanceId: null,
    });
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(false);
    if (read.ok) return;
    expect(read.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
  });

  it("P3 — explicit EC cycle + mismatched active cycle → INTEGRITY_FAILED", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    await stack.execution.contracts.save({
      ...contract,
      cycleInstanceId: "cyc:A",
    });
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", {
      ok: true,
      activeCycleInstanceId: "cyc:B",
    });
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(false);
    if (read.ok) return;
    expect(read.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
  });

  it("P4 — explicit EC cycle + matching active cycle → active continuity", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    const contract = await buildValidatedDocsWriteEc(stack);
    await stack.execution.contracts.save({
      ...contract,
      cycleInstanceId: "cyc:A",
    });
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", {
      ok: true,
      activeCycleInstanceId: "cyc:A",
    });
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(true);
    if (!read.ok || read.kind !== "active") return;
    expect(read.contract.executionContractId).toBe(EC_ID);
  });

  it("P5 — EC without cycleInstanceId + Project active null remains compatible", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedDecisionWithBasis(stack);
    await buildValidatedDocsWriteEc(stack);
    const oa = stubOa(stack, "2026-09-16T09:30:00.000Z", {
      ok: true,
      activeCycleInstanceId: null,
    });
    const read = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId: PROJECT_ID,
    });
    expect(read.ok).toBe(true);
    if (!read.ok || read.kind !== "active") return;
    expect(read.contract.executionContractId).toBe(EC_ID);
  });
});
