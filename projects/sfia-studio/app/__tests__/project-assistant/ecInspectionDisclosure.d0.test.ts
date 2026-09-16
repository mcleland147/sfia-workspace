/**
 * EC inspection disclosure + inspected-fact coverage.
 * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  computeInspectionFingerprint,
  projectExecutionContractInspectionDisclosure,
  requiredInspectedFactsForContract,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { readContractInspectionState } from "@/features/project-assistant/w2/inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import {
  baseBuildRequest,
  buildStack,
  MORRIS_ACTOR,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
} from "../oa/execution-contract/helpers";

const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";
const TARGET_REPO = "mcleland147/sfia-workspace";
const TECH_TARGET = "workspace.isolated.docs_write";
const DOCS_WRITE_ACTION = "cursor.docs_write.apply";

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

function docsWriteBuildOverrides(
  overrides: {
    targetPath?: string | null;
    targetRepositoryRef?: string | null;
    includeOptional?: boolean;
    extraInputs?: Record<string, unknown>;
  } = {},
) {
  const includePath = overrides.targetPath !== null;
  const includeRepo = overrides.targetRepositoryRef !== null;
  const targetPath =
    overrides.targetPath === null
      ? undefined
      : (overrides.targetPath ?? TARGET_PATH);
  const targetRepositoryRef =
    overrides.targetRepositoryRef === null
      ? undefined
      : (overrides.targetRepositoryRef ?? TARGET_REPO);

  const inputs: Record<string, unknown> = {
    objective: "Matérialiser la note de gestion de tâches",
    ...(targetPath ? { targetPath } : {}),
    ...(targetRepositoryRef
      ? {
          targetRepositoryRef,
          repositoryRef: targetRepositoryRef,
          repositoryIdentity: targetRepositoryRef,
        }
      : {}),
    scopeIn: ["projects/sfia-studio/.sandbox/"],
    scopeOut: ["projects/sfia-studio/app/"],
    createOrModify: true,
    noDelete: true,
    ...(overrides.includeOptional
      ? {
          contentRequirements: ["structure claire"],
          validationExpectations: ["markdown valide"],
          expectedOutputs: ["note markdown"],
        }
      : {}),
    ...overrides.extraInputs,
  };

  return {
    action: DOCS_WRITE_ACTION,
    target: TECH_TARGET,
    scope: "product:artifact-materialization",
    inputs,
    expectedOutputs: overrides.includeOptional
      ? ["note markdown"]
      : undefined,
    evidenceRequirements: ["evreq:git-working-tree", "evreq:path-allowlist"],
    requiredCapabilities: ["cap:cursor.docs_write"],
    requiredAuthority: "MORRIS" as const,
    constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL", "NO_ATTEMPT"],
    stopConditions: ["AUTHORITY_DENIED", "CONTEXT_STALE"],
    reversibility: "reversible" as const,
    includePath,
    includeRepo,
  };
}

async function buildValidatedDocsWrite(
  overrides: Parameters<typeof docsWriteBuildOverrides>[0] = {},
) {
  const stack = buildStack();
  await seedProject(stack.projects);
  registerMorris(stack.decisions.authority, "product:artifact-materialization");
  await seedAcceptedDecision(stack, {
    subject: "docs_write inspection disclosure",
  });

  const shaped = docsWriteBuildOverrides(overrides);
  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      executionContractId: "xct:insp-disclosure-docs",
      action: shaped.action,
      target: shaped.target,
      scope: shaped.scope,
      inputs: shaped.inputs,
      expectedOutputs: shaped.expectedOutputs,
      evidenceRequirements: shaped.evidenceRequirements,
      requiredCapabilities: shaped.requiredCapabilities,
      requiredAuthority: shaped.requiredAuthority,
      constraints: shaped.constraints,
      stopConditions: shaped.stopConditions,
      reversibility: shaped.reversibility,
      authorityEvidenceId: "evd:morris-n3",
      actor: MORRIS_ACTOR,
    }),
  );
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");

  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: "evd:morris-n3",
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");

  return { stack, contract: validated.contract as ExecutionContract };
}

describe("EC inspection disclosure projection (D1–D7)", () => {
  it("D1/D2/D3 — projects exact path + repo from durable inputs; technical target preserved", () => {
    const contract = {
      action: DOCS_WRITE_ACTION,
      target: TECH_TARGET,
      scope: "product:artifact-materialization",
      inputs: {
        targetPath: TARGET_PATH,
        targetRepositoryRef: TARGET_REPO,
        secretBag: "must-not-leak",
        arbitraryBag: { nested: true },
      },
      expectedOutputs: ["note"],
      evidenceRequirements: ["evreq:git"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      requiredAuthority: "MORRIS",
      constraints: ["PREPARE_ONLY"],
      stopConditions: ["AUTHORITY_DENIED"],
      reversibility: "reversible",
      version: 1,
      executionContractId: "xct:d1",
      semanticFingerprint: "fp-d1",
    } as unknown as ExecutionContract;

    const result = projectExecutionContractInspectionDisclosure(contract);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.disclosure.action).toBe(DOCS_WRITE_ACTION);
    expect(result.disclosure.technicalTarget).toBe(TECH_TARGET);
    expect(result.disclosure.targetPath).toBe(TARGET_PATH);
    expect(result.disclosure.targetRepositoryRef).toBe(TARGET_REPO);
    expect(result.disclosure.disclosureComplete).toBe(true);
    // D3 — no Proposal text reconstruction; only durable inputs.
    expect(JSON.stringify(result.disclosure)).not.toContain("secretBag");
    expect(JSON.stringify(result.disclosure)).not.toContain("arbitraryBag");
    // D6 — no raw inputs bag.
    expect(result.disclosure).not.toHaveProperty("inputs");
  });

  it("D4 — missing docs_write targetPath fails closed", () => {
    const contract = {
      action: DOCS_WRITE_ACTION,
      target: TECH_TARGET,
      scope: "s",
      inputs: { targetRepositoryRef: TARGET_REPO },
      evidenceRequirements: [],
      requiredCapabilities: [],
      requiredAuthority: "MORRIS",
      constraints: [],
      stopConditions: [],
      reversibility: "irreversible",
      version: 1,
      executionContractId: "xct:d4",
    } as unknown as ExecutionContract;
    const result = projectExecutionContractInspectionDisclosure(contract);
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("INSPECTION_DISCLOSURE_INCOMPLETE");
    expect(result.disclosure.targetPath).toBeNull();
    expect(result.disclosure.disclosureComplete).toBe(false);
  });

  it("D5 — missing docs_write targetRepositoryRef fails closed", () => {
    const contract = {
      action: DOCS_WRITE_ACTION,
      target: TECH_TARGET,
      scope: "s",
      inputs: { targetPath: TARGET_PATH },
      evidenceRequirements: [],
      requiredCapabilities: [],
      requiredAuthority: "MORRIS",
      constraints: [],
      stopConditions: [],
      reversibility: "irreversible",
      version: 1,
      executionContractId: "xct:d5",
    } as unknown as ExecutionContract;
    const result = projectExecutionContractInspectionDisclosure(contract);
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("INSPECTION_DISCLOSURE_INCOMPLETE");
  });

  it("D7 — optional fields appear only when present; generic contracts skip targetPath", () => {
    const generic = {
      action: "publish-modeled-pack",
      target: "sfia-v3-modeled",
      scope: "docs",
      evidenceRequirements: ["evreq:schemas"],
      requiredCapabilities: ["cap:git-docs"],
      requiredAuthority: "N3",
      constraints: ["no-sql"],
      stopConditions: ["AUTHORITY_DENIED"],
      reversibility: "partially_reversible",
      version: 1,
      executionContractId: "xct:generic",
    } as unknown as ExecutionContract;
    const projected = projectExecutionContractInspectionDisclosure(generic);
    expect(projected.ok).toBe(true);
    if (!projected.ok) return;
    expect(projected.disclosure.targetPath).toBeNull();
    expect(projected.disclosure.createOrModify).toBeNull();
    expect(projected.disclosure.contentRequirements).toBeNull();

    const facts = requiredInspectedFactsForContract(generic);
    expect(Array.isArray(facts)).toBe(true);
    if (!Array.isArray(facts)) return;
    expect(facts).not.toContain("inputs.targetPath");
    expect(facts).toContain("action");
    expect(facts).toContain("evidenceRequirements");
  });
});

function stubOa(stack: Awaited<ReturnType<typeof buildValidatedDocsWrite>>["stack"], nowIso: string) {
  return {
    executionContractServices: stack.execution,
    decisionServices: stack.decisions,
    authorityResolver: stack.decisions.authority,
    clock: { nowIso: () => nowIso },
    projectServices: stack.projects,
    executionAttemptServices: {
      registry: {
        listAgents: () => [],
        findCandidates: () => [],
      },
    },
  } as unknown as Parameters<typeof inspectExecutionContract>[0]["oa"];
}

describe("EC inspection fact coverage — legacy / fresh / confirm / auth", () => {
  it("legacy fingerprint-matching attestation without docs_write facts is insufficient", async () => {
    const { stack, contract } = await buildValidatedDocsWrite({
      includeOptional: true,
    });

    const required = requiredInspectedFactsForContract(contract);
    expect(Array.isArray(required)).toBe(true);
    if (!Array.isArray(required)) return;
    expect(required).toContain("inputs.targetPath");
    expect(required).toContain("inputs.targetRepositoryRef");

    const fingerprint = computeInspectionFingerprint(contract);
    await stack.execution.inspectionAttestations.append({
      schemaVersion: "0.1.0-oa",
      attestationId: "insp:legacy-incomplete",
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
      inspectionFingerprint: fingerprint,
      semanticFingerprint: contract.semanticFingerprint ?? fingerprint,
      projectId: contract.projectId,
      actor: LOCAL_PILOTE_ACTOR,
      inspectedAt: "2026-09-15T12:00:00.000Z",
      inspectedFacts: [...LEGACY_INSPECTED_FACTS],
      grantsAuthority: false,
      isConfirmation: false,
    });

    const oa = stubOa(stack, "2026-09-15T12:05:00.000Z");

    const state = await readContractInspectionState({
      oa,
      executionContractId: contract.executionContractId,
    });
    expect(state.ok).toBe(true);
    if (!state.ok) return;
    expect(state.inspectionSufficient).toBe(false);
    expect(state.reinspectionRequired).toBe(true);
    expect(state.reason).toBe("inspected_facts_incomplete");
    expect(state.statusLabel).toBe(
      "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS",
    );
    expect(state.grantsAuthority).toBe(false);
  });

  it("fresh complete inspection covers docs_write facts and is sufficient (no authority)", async () => {
    const { stack, contract } = await buildValidatedDocsWrite({
      includeOptional: true,
    });
    const oa = stubOa(stack, "2026-09-15T12:10:00.000Z");

    const inspected = await inspectExecutionContract({
      oa,
      projectId: contract.projectId,
      executionContractId: contract.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.inspectionSufficient).toBe(true);
    expect(inspected.grantsAuthority).toBe(false);
    expect(inspected.reason).toBe("inspected");

    const trail = await stack.execution.inspectionAttestations.listByContract(
      contract.executionContractId,
    );
    expect(trail.length).toBe(1);
    const facts = trail[0]!.inspectedFacts;
    expect(facts).toContain("inputs.targetPath");
    expect(facts).toContain("inputs.targetRepositoryRef");
    expect(facts).toContain("inputs.scopeIn");
    expect(facts).toContain("inputs.createOrModify");
    expect(facts).toContain("inputs.noDelete");
    expect(facts).toContain("inputs.contentRequirements");
    expect(facts).toContain("expectedOutputs");
  });

  it("incomplete legacy inspection refuses Confirmation and blocks Authorization", async () => {
    const { stack, contract } = await buildValidatedDocsWrite();
    const fingerprint = computeInspectionFingerprint(contract);
    await stack.execution.inspectionAttestations.append({
      schemaVersion: "0.1.0-oa",
      attestationId: "insp:legacy-cfm-block",
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
      inspectionFingerprint: fingerprint,
      semanticFingerprint: contract.semanticFingerprint ?? fingerprint,
      projectId: contract.projectId,
      actor: LOCAL_PILOTE_ACTOR,
      inspectedAt: "2026-09-15T12:00:00.000Z",
      inspectedFacts: [...LEGACY_INSPECTED_FACTS],
      grantsAuthority: false,
      isConfirmation: false,
    });

    const oa = stubOa(stack, "2026-09-15T12:20:00.000Z");

    const confirmed = await confirmExecutionContractForAuthorization({
      oa,
      projectId: contract.projectId,
      executionContractId: contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) return;
    expect(confirmed.code).toBe("REINSPECTION_REQUIRED");
    expect(confirmed.message).toMatch(/détails d'exécution requis/i);

    const authorized = await evaluateExecutionAuthorization({
      oa,
      projectId: contract.projectId,
      executionContractId: contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) return;
    expect(authorized.outcome).toBe("BLOCKED");
    expect(authorized.reasonCode).toBe(
      "reinspection_required_inspected_facts_incomplete",
    );
    expect(authorized.attemptCreated).toBe(false);
    expect(authorized.executionPerformed).toBe(false);
  });

  it("fresh complete inspection then Confirmation may proceed; still no Attempt", async () => {
    const { stack, contract } = await buildValidatedDocsWrite();
    const oa = stubOa(stack, "2026-09-15T12:30:00.000Z");

    const inspected = await inspectExecutionContract({
      oa,
      projectId: contract.projectId,
      executionContractId: contract.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.inspectionSufficient).toBe(true);

    const confirmed = await confirmExecutionContractForAuthorization({
      oa,
      projectId: contract.projectId,
      executionContractId: contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(confirmed.executionPerformed).toBe(false);

    const authorized = await evaluateExecutionAuthorization({
      oa,
      projectId: contract.projectId,
      executionContractId: contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) return;
    // May still be BLOCKED by capability/authority gates — must not be inspection.
    expect(authorized.reasonCode).not.toMatch(/inspection/i);
    expect(authorized.attemptCreated).toBe(false);
  });

  it("incomplete disclosure refuses inspect recording", async () => {
    const { stack, contract } = await buildValidatedDocsWrite({
      targetPath: null,
    });
    expect(contract.action).toBe(DOCS_WRITE_ACTION);
    const projected = projectExecutionContractInspectionDisclosure(contract);
    expect(projected.ok).toBe(false);

    const oa = stubOa(stack, "2026-09-15T12:40:00.000Z");

    const inspected = await inspectExecutionContract({
      oa,
      projectId: contract.projectId,
      executionContractId: contract.executionContractId,
    });
    expect(inspected.ok).toBe(false);
    if (inspected.ok) return;
    expect(inspected.code).toBe("INSPECTION_DISCLOSURE_INCOMPLETE");
  });
});
