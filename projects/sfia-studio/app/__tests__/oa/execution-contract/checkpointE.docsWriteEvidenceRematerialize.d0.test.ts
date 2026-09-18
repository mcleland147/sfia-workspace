/**
 * CHECKPOINT-E R4 T9 — rematerialize docs_write evidenceRequirements via OA supersession.
 * @vitest-environment node
 */
import path from "node:path";
import os from "node:os";
import { mkdtempSync } from "node:fs";
import { afterEach, describe, expect, it } from "vitest";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { rematerializeDocsWriteEvidenceRequirements } from "@/features/project-assistant/f3/rematerializeDocsWriteEvidenceRequirements";
import {
  BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
  BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
} from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";

const APP_ROOT = path.resolve(__dirname, "../../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:r4-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    this.n += 1;
    return `lps:r4-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    this.n += 1;
    return `cor:r4-${this.prefix}-${this.n}`;
  }
}

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
});

describe("CHECKPOINT-E R4 T9 — rematerialize evidenceRequirements", () => {
  it("material evidenceRequirements change invalidates prior inspection", async () => {
    resetRuntimeApplicationServiceForTests();
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-r4-remat-"));
    const runtime = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-09-17T21:00:00.000Z",
      idSource: new FixedIdSource("ev"),
      auditMode: "noop",
      productDbPath: path.join(dir, "oa-product.sqlite"),
    });
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "R4 rematerialize",
      objective: "docs_write evidence coherence",
      context: "r4",
      criticality: "STANDARD",
      constraints: ["FIXTURE ONLY"],
      shortReference: "R4EV",
      idempotencyKey: `r4-ev-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;

    const authority = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: "studio.gcec.docs_write",
      issuedAt: oa.clock.nowIso(),
      evidenceId: "evd:r4-remat-build",
      forceEnable: true,
    });
    expect(authority.ok).toBe(true);
    if (!authority.ok) return;

    const built =
      await oa.executionContractServices.buildExecutionContract.execute({
        executionContractId: "xct:m3-res:r4-ev-contradiction",
        projectId,
        decisionRefs: [],
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "studio.gcec.docs_write",
        requiredCapabilities: ["cap:cursor.docs_write"],
        requiredAuthority: "MORRIS",
        constraints: [
          "BOUNDED DOCS-WRITE",
          "NO_COMMIT",
          "NO_GIT_REMOTE",
          "NO_PUSH",
          "NO_PR",
          "NO_MERGE",
        ],
        stopConditions: ["AUTHORITY_DENIED"],
        evidenceRequirements: [
          ...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
        ],
        reversibility: "reversible",
        idempotencyKey: "idem:r4-ev-contradiction",
        correlationId: "cor:r4-ev-contradiction",
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
        inputs: {
          targetPath:
            "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md",
          targetRepositoryRef: "mcleland147/sfia-workspace",
          scopeIn: ["projects/sfia-studio/.sandbox"],
        },
      });
    expect(built.ok).toBe(true);
    if (!built.ok) return;

    const validated =
      await oa.executionContractServices.validateExecutionContract.execute({
        executionContractId: built.contract.executionContractId,
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    expect(validated.contract.status).toBe("confirmation_required");

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: validated.contract.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.inspectionSufficient).toBe(true);
    const priorFp = validated.contract.semanticFingerprint;

    const rematerialized = await rematerializeDocsWriteEvidenceRequirements({
      oa,
      projectId,
      executionContractId: validated.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(rematerialized.ok).toBe(true);
    if (!rematerialized.ok) return;
    expect(rematerialized.evidenceRequirements).toEqual([
      ...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
    ]);
    expect(rematerialized.successor.evidenceRequirements).toEqual([
      ...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
    ]);
    expect(rematerialized.priorInspectionDoesNotCoverSuccessor).toBe(true);
    expect(rematerialized.reinspectionRequired).toBe(true);
    expect(rematerialized.successorInspection.inspectionSufficient).toBe(
      false,
    );
    expect(rematerialized.successor.semanticFingerprint).not.toBe(priorFp);
    expect(rematerialized.executionPerformed).toBe(false);
    expect(rematerialized.attemptCreated).toBe(false);
    expect(rematerialized.confirmationGranted).toBe(false);
    expect(rematerialized.authorityGranted).toBe(false);

    const priorAfter =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: validated.contract.executionContractId,
      });
    expect(priorAfter.ok).toBe(true);
    if (!priorAfter.ok) return;
    expect(priorAfter.contract.status).toBe("superseded");
  });
});
