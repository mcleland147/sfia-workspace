/**
 * CR-BLK-04 — docs-write M3 resolution must preserve predecessor expectedOutputs (WHAT).
 * HOW (action/capability/ER) may change; WHAT must not be silently contracted.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterAll, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import { createTestSqliteProductProjectServices } from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";
import {
  LOCAL_MORRIS_M3_ACTOR,
  MemoryAuthorityResolver,
  computeDecisionBasisSourceDigest,
  createTestSqliteDecisionServices,
  registerM3LocalMorrisAuthority,
  type DecisionBasis,
} from "@/lib/oa/decision";
import { createTestSqliteExecutionContractServices } from "@/lib/oa/execution-contract";
import {
  boundedDocsWriteM3ResolutionProfile,
  BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
} from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import {
  resolveM3ExecutionContract,
  canonicalM3PrepareContractId,
  canonicalM3PrepareIdempotencyKey,
} from "@/features/project-assistant/f3/resolveM3ExecutionContract";
import {
  assessExpectedOutputs,
} from "@/lib/oa/evidence-review/application/contractResultAssessment";
import {
  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
} from "@/lib/oa/evidence-review";
import {
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
} from "@/lib/oa/execution-contract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { Evidence } from "@/lib/oa/evidence-review";

const NOW = "2026-09-18T09:00:00.000Z";
const PROJECT_ID = "prj:cr-blk-04";
const APP_ROOT = path.resolve(__dirname, "../..");
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

const PRODUCT_WHAT = [
  "Le fichier Markdown matérialisé au chemin cible",
  "Vérification de l’existence et de la conformité minimale du fichier",
] as const;

function docsWriteEc(
  overrides: Partial<ExecutionContract> = {},
): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:cr-blk-04:base",
    projectId: PROJECT_ID,
    version: 1,
    status: "confirmed",
    semanticFingerprint: "fp:pending",
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: "workspace.isolated.docs_write",
    scope: "workspace.isolated.docs_write",
    requiredAuthority: "N3",
    constraints: [],
    stopConditions: [],
    evidenceRequirements: [DOCS_WRITE_CONTRACT_RESULT_ER_KEY],
    expectedOutputs: [BOUNDED_DOCS_WRITE_EO_TEMPLATE],
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    reversibility: "reversible",
    idempotencyKey: "idem:cr-blk-04:base",
    correlationId: "cor:cr-blk-04:base",
    ...overrides,
  };
  const material = executionContractSemanticMaterial(base);
  base.semanticFingerprint =
    computeExecutionContractSemanticMaterialFingerprint(material);
  return base;
}

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

afterAll(() => {
  while (openServices.length) openServices.pop()?.dispose();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

async function boot(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: NOW,
    dbPath,
  });
  openServices.push(projects);
  const cycles = createSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
  });
  const authority = new MemoryAuthorityResolver();
  const decisions = createTestSqliteDecisionServices({
    projectServices: projects,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
  });
  const contracts = createTestSqliteExecutionContractServices({
    projectServices: projects,
    decisionServices: decisions,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
  });
  return { projects, decisions, contracts, authority };
}

describe("CR-BLK-04 — preserve Contract WHAT on docs-write M3 resolution", () => {
  it("T1/T2/T3 — profile does not inject EO template; resolve preserves predecessor WHAT", async () => {
    const profile = boundedDocsWriteM3ResolutionProfile();
    expect(profile).not.toHaveProperty("expectedOutputs");
    expect(JSON.stringify(profile)).not.toContain(BOUNDED_DOCS_WRITE_EO_TEMPLATE);

    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-cr-blk-04-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const stack = await boot(dbPath);
    const decisionId = "dec:cr-blk-04-preserve";

    const createdProject = await stack.projects.createProject.execute({
      projectId: PROJECT_ID,
      title: "CR-BLK-04",
      objective: "preserve WHAT",
      context: "docs-write",
      scope: "cr-blk-04",
      doctrinePackagePin: VALID_PIN,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
      lpsVersionId: "lps:cr-blk-04-v1",
      idempotencyKey: "idem:cr-blk-04-prj",
    });
    expect(createdProject.ok).toBe(true);

    const lps = await stack.projects.getCurrentLivingProjectState.execute({
      projectId: PROJECT_ID,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const scope = `decision:${decisionId}`;
    const auth = registerM3LocalMorrisAuthority({
      authorityResolver: stack.authority,
      scope,
      issuedAt: NOW,
      forceEnable: true,
      evidenceId: `evd:m3:${decisionId}`,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;

    const basis: DecisionBasis = {
      sourceType: "proposal",
      sourceRef: "prop:cr-blk-04",
      sourceDigest: computeDecisionBasisSourceDigest({
        objective: "cr-blk-04",
        op: "docs_write",
      }),
      projectId: PROJECT_ID,
      proposalContext: {
        lpsId: lps.livingProjectState.lpsVersionId,
        lpsVersion: lps.livingProjectState.version,
        doctrineDigest: VALID_DIGEST,
      },
      executionBasis: {
        objective: "cr-blk-04",
        scope,
        cycleTypeId: "cyc:delivery",
        requestedOperation: "docs_write",
        expectedOutputs: [...PRODUCT_WHAT],
      },
    };
    const decided = await stack.decisions.recordHumanDecision.execute({
      decisionId,
      projectId: PROJECT_ID,
      subject: decisionId,
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: auth.evidenceId,
      status: "accepted",
      decisionBasis: basis,
    });
    expect(decided.ok).toBe(true);

    const originalId = canonicalM3PrepareContractId(decisionId);
    const prior = await stack.contracts.buildExecutionContract.execute({
      executionContractId: originalId,
      projectId: PROJECT_ID,
      decisionRefs: [decisionId],
      action: "UNRESOLVED_ACTION",
      target: "UNRESOLVED_TARGET",
      scope,
      requiredCapabilities: ["cap:unresolved"],
      requiredAuthority: "MORRIS",
      reversibility: "reversible",
      constraints: ["PREPARE_ONLY", "NO_ATTEMPT"],
      stopConditions: ["AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:docs_write_artifact"],
      expectedOutputs: [...PRODUCT_WHAT],
      idempotencyKey: canonicalM3PrepareIdempotencyKey(decisionId),
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(prior.ok).toBe(true);
    if (!prior.ok) return;
    expect(prior.contract.expectedOutputs).toEqual([...PRODUCT_WHAT]);

    const validated =
      await stack.contracts.validateExecutionContract.execute({
        executionContractId: originalId,
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: auth.evidenceId,
      });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;

    const resolved = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: originalId,
      expectedOriginalVersion: validated.contract.version,
      resolution: boundedDocsWriteM3ResolutionProfile(),
      supersessionReason: BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
      successorExecutionContractId: "xct:m3-res:dec:cr-blk-04-preserve",
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    if (!resolved.ok) {
      throw new Error(
        `resolve failed: ${resolved.code} — ${resolved.message}`,
      );
    }

    expect(resolved.successor.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(resolved.successor.requiredCapabilities).toEqual([
      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
    ]);

    const loaded = await stack.contracts.getExecutionContract.execute({
      executionContractId: resolved.successor.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.contract.expectedOutputs).toEqual([...PRODUCT_WHAT]);
    expect(loaded.contract.expectedOutputs).not.toEqual([
      BOUNDED_DOCS_WRITE_EO_TEMPLATE,
    ]);
    expect(loaded.contract.expectedOutputs?.join("\0")).not.toContain(
      BOUNDED_DOCS_WRITE_EO_TEMPLATE,
    );

    const priorReload = await stack.contracts.getExecutionContract.execute({
      executionContractId: originalId,
    });
    expect(priorReload.ok).toBe(true);
    if (!priorReload.ok) return;
    expect(priorReload.contract.expectedOutputs).toEqual([...PRODUCT_WHAT]);
  });

  it("T4 — registry still PASSes canonical docs-write EO when EC declares it", () => {
    const c = docsWriteEc({
      executionContractId: "xct:cr-blk-04:canonical-eo",
      expectedOutputs: [BOUNDED_DOCS_WRITE_EO_TEMPLATE],
      inputs: { targetPath: "docs/out.md" },
      idempotencyKey: "idem:cr-blk-04:can",
      correlationId: "cor:cr-blk-04:can",
    });
    const material = executionContractSemanticMaterial(c);
    const evidence: Evidence = {
      schemaVersion: "0.2.0-oa",
      evidenceId: "ev:docs-write:xat:cr-blk-04:can",
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      location: "docs/out.md",
      digest:
        "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as Digest,
      producedBy: { actorId: "actor:t", role: "project_owner" },
      producedAt: NOW,
      freshness: "fresh",
      status: "available",
      classification: "internal",
      storageMode: "metadata_only",
      availability: "available",
      retentionClass: "standard",
      legalHold: false,
      bindings: {
        projectId: PROJECT_ID,
        executionContractId: c.executionContractId,
        executionAttemptId: "xat:cr-blk-04:can",
      },
      containsSecrets: false,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:t",
        actor: { actorId: "actor:t", role: "project_owner" },
        source: "execution_adapter",
        timestamp: NOW,
        correlationId: "cor:t",
        projectId: PROJECT_ID,
      },
      version: 1,
      createdAt: NOW,
    };
    const eo = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:cr-blk-04:can",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        status: "succeeded",
      },
      evidences: [evidence],
      evaluatedAt: NOW,
    });
    expect(eo[0]?.result).toBe("PASS");
  });

  it("T5 — exact-path EO PASSes only when Evidence.location matches", () => {
    const location = "docs/exact-path.md";
    const c = docsWriteEc({
      executionContractId: "xct:cr-blk-04:path",
      expectedOutputs: [location],
      idempotencyKey: "idem:cr-blk-04:path",
      correlationId: "cor:cr-blk-04:path",
    });
    const material = executionContractSemanticMaterial(c);
    const mkEv = (loc: string): Evidence => ({
      schemaVersion: "0.2.0-oa",
      evidenceId: "ev:docs-write:xat:cr-blk-04:path",
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      location: loc,
      digest:
        "sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" as Digest,
      producedBy: { actorId: "actor:t", role: "project_owner" },
      producedAt: NOW,
      freshness: "fresh",
      status: "available",
      classification: "internal",
      storageMode: "metadata_only",
      availability: "available",
      retentionClass: "standard",
      legalHold: false,
      bindings: {
        projectId: PROJECT_ID,
        executionContractId: c.executionContractId,
        executionAttemptId: "xat:cr-blk-04:path",
      },
      containsSecrets: false,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:t",
        actor: { actorId: "actor:t", role: "project_owner" },
        source: "execution_adapter",
        timestamp: NOW,
        correlationId: "cor:t",
        projectId: PROJECT_ID,
      },
      version: 1,
      createdAt: NOW,
    });
    const pass = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:cr-blk-04:path",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        status: "succeeded",
      },
      evidences: [mkEv(location)],
      evaluatedAt: NOW,
    });
    expect(pass[0]?.result).toBe("PASS");
    const fail = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:cr-blk-04:path",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        status: "succeeded",
      },
      evidences: [mkEv("docs/other.md")],
      evaluatedAt: NOW,
    });
    expect(fail[0]?.result).toBe("NOT_PROVEN");
  });

  it("T6 — free-form / conformity EO remains NOT_PROVEN with artifact alone", () => {
    const c = docsWriteEc({
      executionContractId: "xct:cr-blk-04:free",
      expectedOutputs: [...PRODUCT_WHAT],
      inputs: {
        targetPath:
          "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md",
      },
      idempotencyKey: "idem:cr-blk-04:free",
      correlationId: "cor:cr-blk-04:free",
    });
    const material = executionContractSemanticMaterial(c);
    const evidence: Evidence = {
      schemaVersion: "0.2.0-oa",
      evidenceId: "ev:docs-write:xat:cr-blk-04:free",
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      location:
        "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md",
      digest:
        "sha256:cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc" as Digest,
      producedBy: { actorId: "actor:t", role: "project_owner" },
      producedAt: NOW,
      freshness: "fresh",
      status: "available",
      classification: "internal",
      storageMode: "metadata_only",
      availability: "available",
      retentionClass: "standard",
      legalHold: false,
      bindings: {
        projectId: PROJECT_ID,
        executionContractId: c.executionContractId,
        executionAttemptId: "xat:cr-blk-04:free",
      },
      containsSecrets: false,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:t",
        actor: { actorId: "actor:t", role: "project_owner" },
        source: "execution_adapter",
        timestamp: NOW,
        correlationId: "cor:t",
        projectId: PROJECT_ID,
      },
      version: 1,
      createdAt: NOW,
    };
    const eo = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:cr-blk-04:free",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        status: "succeeded",
      },
      evidences: [evidence],
      evaluatedAt: NOW,
    });
    expect(eo.every((a) => a.result === "NOT_PROVEN")).toBe(true);
  });
});
